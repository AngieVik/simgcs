import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gameQuestions } from '../constants/gameData';

type GameState = 'start' | 'playing' | 'paused' | 'bonus' | 'gameOver';
type BallType = 'answer' | 'good' | 'bad' | 'emoji' | 'death' | 'bonus';
type Effect = 'none' | 'addTime' | 'removeTime' | 'addSupport' | 'removeSupport' | 'freeze' | 'scramble' | 'winTime' | 'loseGame';
type EffectType = 'explosion';
type SoundType = 'hit' | 'gameOver' | 'push' | 'correct';

interface Ball {
  id: number;
  type: BallType;
  effect: Effect;
  text: string;
  isCorrect?: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isActive: boolean;
  color: string;
  mass: number;
  originalText?: string;
}

interface VisualEffect {
    id: number;
    type: EffectType;
    x: number;
    y: number;
    radius: number;
    color?: string;
}

interface DecoIconData {
  id: number;
  char: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

const LEVEL_COLORS = ['#fde047', '#facc15', '#eab308', '#f59e0b', '#d97706']; // yellow-300 to amber-600
const INITIAL_TIME = 20.0;
const INITIAL_SUPPORTS = 3;
const INITIAL_SPEED = 4.5;
const BACKGROUND_GIFS = ['/wallpapercodigo3.gif', '/wallpapercodigo3-2.gif', '/wallpapercodigo3-3.gif'];

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const DecoIcon: React.FC<{ icon: DecoIconData }> = ({ icon }) => (
  <div
    className="absolute text-yellow-400 select-none pointer-events-none fade-in"
    style={{
      left: `${icon.x}%`,
      top: `${icon.y}%`,
      fontSize: `${icon.size}px`,
      opacity: icon.opacity,
      textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
      animationDelay: `${icon.delay}s`
    }}
  >
    {icon.char}
  </div>
);

const GuideComponent: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center z-30 text-white p-4 font-game">
        <div className="w-full max-w-md text-left">
            <h2 className="text-3xl text-yellow-300 game-text-shadow mb-6 text-center">GUÍA DEL JUEGO</h2>
            <div className="space-y-3 text-lg">
                <p className="font-bold text-green-400">Bolas Verdes (Buenas):</p>
                <ul className="list-disc list-inside ml-4">
                    <li><span className="inline-block w-6 text-center">➕</span>: +1 Soporte</li>
                    <li><span className="inline-block w-6 text-center">⏰</span>: +1 Segundo</li>
                    <li><span className="inline-block w-6 text-center">❄️</span>: Congela el tiempo y las bolas por 3s</li>
                </ul>
                <p className="font-bold text-red-400">Bolas Rojas (Malas):</p>
                <ul className="list-disc list-inside ml-4">
                    <li><span className="inline-block w-6 text-center">💔</span>: -1 Soporte</li>
                    <li><span className="inline-block w-6 text-center">⏳</span>: -1 Segundo</li>
                    <li><span className="inline-block w-6 text-center">❔</span>: Letras ilegibles por 3s</li>
                </ul>
                <p className="font-bold text-white">Bolas Especiales:</p>
                 <ul className="list-disc list-inside ml-4">
                    <li><span className="inline-block w-6 text-center">💀</span>: ¡Game Over!</li>
                    <li><span className="inline-block w-6 text-center">⭐</span>: +10 Segundos</li>
                </ul>
            </div>
            <p onClick={onBack} className="cursor-pointer mt-8 w-full px-6 py-3 text-center text-yellow-400 hover:text-yellow-300 text-2xl transition-colors">Volver</p>
        </div>
    </div>
);

interface GameScreenProps {
    onExit: () => void;
    highScore: number;
    onSetHighScore: (score: number) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ onExit, highScore, onSetHighScore }) => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [level, setLevel] = useState(1);
  const [supports, setSupports] = useState(INITIAL_SUPPORTS);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [balls, setBalls] = useState<Ball[]>([]); // Only for rendering active balls
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [originalPhrase, setOriginalPhrase] = useState('');
  const [levelTime, setLevelTime] = useState(INITIAL_TIME);
  const [ballSpeed, setBallSpeed] = useState(INITIAL_SPEED);
  const [decoIcons, setDecoIcons] = useState<DecoIconData[]>([]);
  const [isFrozen, setIsFrozen] = useState(false);
  const [isGuideVisible, setIsGuideVisible] = useState(false);
  const [visualEffects, setVisualEffects] = useState<VisualEffect[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isPhrasePulsing, setIsPhrasePulsing] = useState(false);

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const bottomUiRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const specialBallSpawnTimerRef = useRef<number>(0);
  const audioCtx = useRef<AudioContext | null>(null);
  const ballPoolRef = useRef<Ball[]>([]);

  useEffect(() => {
    if (gameState === 'gameOver') {
      onSetHighScore(level);
    }
  }, [gameState, level, onSetHighScore]);

  const getBallFromPool = (): Ball => {
    const inactiveBall = ballPoolRef.current.find(b => !b.isActive);
    if (inactiveBall) {
        return inactiveBall;
    }
    const newBall: Ball = { id: 0, x:0, y:0, vx:0, vy:0, radius:0, mass:0, color:'', text:'', isActive:false, type:'answer', effect:'none' };
    ballPoolRef.current.push(newBall);
    return newBall;
  };

  useEffect(() => {
    audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
  }, []);

  const playSound = (type: SoundType) => {
    if (isMuted) return;
    if (!audioCtx.current || audioCtx.current.state === 'suspended') {
      audioCtx.current?.resume();
    }
    const ctx = audioCtx.current;
    if (!ctx) return;
    
    const now = ctx.currentTime;
    const gainNode = ctx.createGain();
    gainNode.connect(ctx.destination);

    if (type === 'hit') {
      const oscillator = ctx.createOscillator();
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(880, now);
      oscillator.frequency.exponentialRampToValueAtTime(220, now + 0.2);
      gainNode.gain.setValueAtTime(0.5, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
      oscillator.connect(gainNode);
      oscillator.start(now);
      oscillator.stop(now + 0.2);
    } else if (type === 'gameOver') {
      const oscillator = ctx.createOscillator();
      oscillator.type = 'square';
      gainNode.gain.setValueAtTime(0.4, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
      oscillator.frequency.setValueAtTime(440, now);
      oscillator.frequency.exponentialRampToValueAtTime(220, now + 0.4);
      oscillator.frequency.exponentialRampToValueAtTime(110, now + 0.8);
      oscillator.connect(gainNode);
      oscillator.start(now);
      oscillator.stop(now + 0.8);
    } else if (type === 'push') {
        const oscillator = ctx.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(200, now);
        oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.1);
        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        oscillator.connect(gainNode);
        oscillator.start(now);
        oscillator.stop(now + 0.1);
    } else if (type === 'correct') {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.linearRampToValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.linearRampToValueAtTime(783.99, now + 0.2); // G5
        gainNode.gain.setValueAtTime(0.3, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.connect(gainNode);
        osc.start(now);
        osc.stop(now + 0.3);
    }
  };

  const triggerScreenShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
  };

  const addVisualEffect = (type: EffectType, x: number, y: number, radius: number, color?: string) => {
    const newEffect: VisualEffect = { id: Date.now() + Math.random(), type, x, y, radius, color };
    setVisualEffects(prev => [...prev, newEffect]);
  };
  
  useEffect(() => {
      if(visualEffects.length > 0) {
          const timeout = setTimeout(() => {
              setVisualEffects(prev => prev.slice(1));
          }, 800);
          return () => clearTimeout(timeout);
      }
  }, [visualEffects]);

  const scrambleText = (text: string) => {
    if (text.length < 3) return text;
    const chars = text.split('');
    const indicesToScramble = chars
      .map((char, i) => (char !== ' ' ? i : -1))
      .filter(i => i !== -1);
    
    const numToScramble = Math.max(1, Math.floor(indicesToScramble.length / 3));

    for (let i = 0; i < numToScramble; i++) {
        const randomIndex = Math.floor(Math.random() * indicesToScramble.length);
        const charIndex = indicesToScramble[randomIndex];
        chars[charIndex] = '_';
        indicesToScramble.splice(randomIndex, 1);
    }
    return chars.join('');
  };


  const handleScrambleEffect = () => {
    setCurrentPhrase(scrambleText(originalPhrase));
    ballPoolRef.current.forEach(b => {
        if (b.isActive && b.type === 'answer') {
            b.text = scrambleText(b.originalText || b.text);
        }
    });
    setTimeout(() => {
        setCurrentPhrase(originalPhrase);
        ballPoolRef.current.forEach(b => {
            if (b.type === 'answer') {
                b.text = b.originalText || b.text;
            }
        });
    }, 3000);
  };
  
  const spawnSpecialBall = (gameWidth: number, gameHeight: number) => {
    const specialTypes = [
        { type: 'good', effect: 'addSupport', text: '➕', color: '#4ade80', radius: 25 },
        { type: 'good', effect: 'addTime', text: '⏰', color: '#4ade80', radius: 25 },
        { type: 'good', effect: 'freeze', text: '❄️', color: '#4ade80', radius: 25 },
        { type: 'bad', effect: 'removeSupport', text: '💔', color: '#f87171', radius: 25 },
        { type: 'bad', effect: 'removeTime', text: '⏳', color: '#f87171', radius: 25 },
        { type: 'bad', effect: 'scramble', text: '❔', color: '#f87171', radius: 25 },
        { type: 'death', effect: 'loseGame', text: '💀', color: '#000000', radius: 15 },
        { type: 'bonus', effect: 'winTime', text: '⭐', color: '#ffffff', radius: 15 },
        ...Array(5).fill({ type: 'emoji', effect: 'none', text: ['😂', '😍', '🥳', '🤯'][Math.floor(Math.random()*4)], color: '#fde047', radius: Math.random() * 20 + 15 }),
    ];
    const spec = specialTypes[Math.floor(Math.random() * specialTypes.length)];
    const ball = getBallFromPool();
    Object.assign(ball, {
        id: Date.now() + Math.random(),
        type: spec.type as BallType,
        effect: spec.effect as Effect,
        text: spec.text,
        x: Math.random() * (gameWidth - spec.radius * 2) + spec.radius,
        y: -spec.radius,
        vx: (Math.random() - 0.5) * ballSpeed,
        vy: (Math.random() * 0.5 + 0.5) * ballSpeed,
        radius: spec.radius,
        isActive: true,
        color: spec.color,
        mass: Math.pow(spec.radius, 2),
        isCorrect: undefined,
        originalText: undefined
    });
  };

  useEffect(() => {
    if (gameState === 'start' || gameState === 'gameOver' || gameState === 'bonus') {
      const icons: DecoIconData[] = [];
      const iconChars = ['★', '●', '◆', '○', '+', '✕'];
      for (let i = 0; i < 20; i++) {
        icons.push({
          id: i,
          char: iconChars[Math.floor(Math.random() * iconChars.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 20,
          opacity: Math.random() * 0.4 + 0.1,
          delay: Math.random() * 0.5
        });
      }
      setDecoIcons(icons);
    }
  }, [gameState]);

  const setupLevel = useCallback((lvl: number, time: number, speed: number, isRestart = false) => {
    const question = gameQuestions[Math.floor(Math.random() * gameQuestions.length)];
    setCurrentPhrase(question.frase);
    setOriginalPhrase(question.frase);

    const options = shuffleArray([
      { text: question.correcta, isCorrect: true },
      { text: question.incorrecta1, isCorrect: false },
      { text: question.incorrecta2, isCorrect: false },
    ]);
    
    ballPoolRef.current.forEach(b => {
        if (b.type === 'answer') b.isActive = false;
        if (isRestart) b.isActive = false;
    });

    const gameWidth = gameAreaRef.current?.clientWidth || 500;
    
    options.forEach((opt) => {
        const ball = getBallFromPool();
        Object.assign(ball, {
            id: Date.now() + Math.random(),
            type: 'answer',
            effect: 'none',
            text: opt.text,
            originalText: opt.text,
            isCorrect: opt.isCorrect,
            x: Math.random() * (gameWidth - 60) + 30,
            y: Math.random() * 100 + 30,
            vx: (Math.random() - 0.5) * speed,
            vy: Math.random() * speed,
            radius: 30,
            isActive: true,
            color: LEVEL_COLORS[lvl % LEVEL_COLORS.length],
            mass: 900,
        });
    });

    setTimeLeft(time);
    setLevel(lvl);
    setGameState('playing');
    specialBallSpawnTimerRef.current = 0;
  }, []);

  const nextLevel = () => {
    playSound('correct');
    setIsPhrasePulsing(true);
    setTimeout(() => setIsPhrasePulsing(false), 400);

    const newLevel = level + 1;
    const newTime = levelTime * 0.98;
    const newSpeed = ballSpeed * 1.03;
    
    setLevelTime(Math.max(5, newTime));
    setBallSpeed(newSpeed);

    if (newLevel % 5 === 0) {
      setGameState('bonus');
    } else {
      setupLevel(newLevel, newTime, newSpeed);
    }
  };

  const handleBallClick = (clickedBall: Ball) => {
    if (gameState !== 'playing') return;

    const ballInPool = ballPoolRef.current.find(b => b.id === clickedBall.id);
    if (!ballInPool || !ballInPool.isActive) return;

    ballInPool.isActive = false;
    
    addVisualEffect('explosion', clickedBall.x, clickedBall.y, clickedBall.radius, clickedBall.color);

    if (clickedBall.type === 'answer') {
        if (clickedBall.isCorrect) {
            nextLevel();
        } else {
            playSound('hit');
            triggerScreenShake();
            setTimeLeft(t => Math.max(0, t - 2)); // Penalty for wrong answer
        }
    } else {
        playSound('hit');
        switch (clickedBall.effect) {
            case 'addTime': setTimeLeft(t => t + 1); break;
            case 'removeTime': setTimeLeft(t => Math.max(0, t - 1)); break;
            case 'addSupport': setSupports(s => s + 1); break;
            case 'removeSupport': setSupports(s => Math.max(0, s - 1)); break;
            case 'freeze': 
                setIsFrozen(true);
                setTimeout(() => setIsFrozen(false), 3000);
                break;
            case 'scramble': handleScrambleEffect(); break;
            case 'winTime': setTimeLeft(t => t + 10); break;
            case 'loseGame': 
                setGameState('gameOver'); 
                playSound('gameOver');
                triggerScreenShake();
                break;
        }
    }
  };
  
  const handleSupport = () => {
    if (supports > 0 && gameState === 'playing') {
      const incorrectBalls = ballPoolRef.current.filter(b => b.isActive && b.type === 'answer' && !b.isCorrect);
      if (incorrectBalls.length > 0) {
        const ballToRemove = incorrectBalls[Math.floor(Math.random() * incorrectBalls.length)];
        ballToRemove.isActive = false;
        addVisualEffect('explosion', ballToRemove.x, ballToRemove.y, ballToRemove.radius, ballToRemove.color);
        setSupports(s => s - 1);
      }
    }
  };
  
  const handleGameAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target !== gameAreaRef.current) return;
      playSound('push');
      const rect = gameAreaRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const pushRadius = 100;
      const pushForce = 5;

      ballPoolRef.current.forEach(ball => {
          if (!ball.isActive) return;
          const dx = ball.x - clickX;
          const dy = ball.y - clickY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < pushRadius) {
              const force = (1 - (distance / pushRadius)) * pushForce;
              const angle = Math.atan2(dy, dx);
              ball.vx += Math.cos(angle) * force;
              ball.vy += Math.sin(angle) * force;
          }
      });
  };

  const handleBonus = (type: 'support' | 'time') => {
    let newBaseTime = levelTime;
    if (type === 'support') {
      setSupports(s => s + 1);
    } else {
      newBaseTime = levelTime + 2;
    }

    const newLevel = level + 1;
    const nextLevelTimeForSetup = newBaseTime * 0.98;
    const newSpeed = ballSpeed * 1.03;

    setLevelTime(Math.max(5, nextLevelTimeForSetup));
    setBallSpeed(newSpeed);
    setupLevel(newLevel, nextLevelTimeForSetup, newSpeed);
  };
  
  const restartGame = () => {
    ballPoolRef.current.forEach(b => b.isActive = false);
    setLevel(1);
    setSupports(INITIAL_SUPPORTS);
    setLevelTime(INITIAL_TIME);
    setBallSpeed(INITIAL_SPEED);
    setupLevel(1, INITIAL_TIME, INITIAL_SPEED, true);
  };

  const gameLoop = useCallback((timestamp: number) => {
    if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
    const deltaTime = (timestamp - lastTimeRef.current) / 1000;
    
    if (gameState === 'playing') {
        if (!isFrozen) {
            setTimeLeft(prev => {
                if (prev - deltaTime <= 0) {
                    setGameState('gameOver');
                    playSound('gameOver');
                    triggerScreenShake();
                    return 0;
                }
                return prev - deltaTime;
            });
            specialBallSpawnTimerRef.current += deltaTime;
        }

        const gameWidth = gameAreaRef.current?.clientWidth || 500;
        const gameHeight = gameAreaRef.current?.clientHeight || 500;
        const bottomUiHeight = bottomUiRef.current?.clientHeight || 100;
        const bottomBoundary = gameHeight - bottomUiHeight;
        
        if (specialBallSpawnTimerRef.current > 4) {
            specialBallSpawnTimerRef.current = 0;
            spawnSpecialBall(gameWidth, gameHeight);
        }

        const activeBalls = ballPoolRef.current.filter(b => b.isActive);
        
        if (!isFrozen) {
            activeBalls.forEach(ball => {
                ball.x += ball.vx;
                ball.y += ball.vy;

                if (ball.x - ball.radius < 0 || ball.x + ball.radius > gameWidth) {
                    ball.vx = -ball.vx;
                    ball.x = Math.max(ball.radius, Math.min(gameWidth - ball.radius, ball.x));
                }
                if (ball.y - ball.radius < 0 || (ball.type !== 'emoji' && ball.y + ball.radius > bottomBoundary)) {
                    ball.vy = -ball.vy;
                    ball.y = Math.max(ball.radius, Math.min(bottomBoundary - ball.radius, ball.y));
                }

                if (ball.y > gameHeight + 100) {
                    ball.isActive = false;
                }
            });
        }

        for (let i = 0; i < activeBalls.length; i++) {
            for (let j = i + 1; j < activeBalls.length; j++) {
                const b1 = activeBalls[i];
                const b2 = activeBalls[j];
                const dx = b2.x - b1.x;
                const dy = b2.y - b1.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < b1.radius + b2.radius) {
                    const angle = Math.atan2(dy, dx);
                    const sin = Math.sin(angle);
                    const cos = Math.cos(angle);
                    
                    let v1 = { x: b1.vx * cos + b1.vy * sin, y: b1.vy * cos - b1.vx * sin };
                    let v2 = { x: b2.vx * cos + b2.vy * sin, y: b2.vy * cos - b2.vx * sin };
                    
                    const v1FinalX = ((b1.mass - b2.mass) * v1.x + 2 * b2.mass * v2.x) / (b1.mass + b2.mass);
                    const v2FinalX = ((b2.mass - b1.mass) * v2.x + 2 * b1.mass * v1.x) / (b1.mass + b2.mass);
                    
                    v1.x = v1FinalX;
                    v2.x = v2FinalX;

                    b1.vx = v1.x * cos - v1.y * sin;
                    b1.vy = v1.y * cos + v1.x * sin;
                    b2.vx = v2.x * cos - v2.y * sin;
                    b2.vy = v2.y * cos + v2.x * sin;

                    const overlap = (b1.radius + b2.radius) - distance + 1;
                    b1.x -= (overlap / 2) * cos;
                    b1.y -= (overlap / 2) * sin;
                    b2.x += (overlap / 2) * cos;
                    b2.y += (overlap / 2) * sin;
                }
            }
        }
    }

    setBalls(ballPoolRef.current.filter(b => b.isActive));

    lastTimeRef.current = timestamp;
    animationFrameRef.current = requestAnimationFrame(gameLoop);
  }, [gameState, isFrozen, ballSpeed, setupLevel]);

  useEffect(() => {
    if (gameState === 'playing') {
      animationFrameRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      lastTimeRef.current = null;
    };
  }, [gameState, gameLoop]);
  
  const currentBg = BACKGROUND_GIFS[Math.floor((level - 1) / 5) % BACKGROUND_GIFS.length];

  const renderContent = () => {
    switch(gameState) {
      case 'start':
        return (
          <div className="absolute inset-0 bg-black/0 flex flex-col items-center justify-center h-full p-4">
            {decoIcons.map(icon => <DecoIcon key={icon.id} icon={icon} />)}
            <div className="z-10 flex flex-col items-center gap-4">
                <button onClick={restartGame} className="text-yellow-400 text-5xl hover:text-yellow-300 transition-colors game-text-shadow transform hover:scale-110 font-game px-8 py-2 w-72 text-center" aria-label="Empezar juego">
                  JUGAR
                </button>
                <button onClick={() => setIsGuideVisible(true)} className="text-yellow-400 text-5xl hover:text-yellow-300 transition-colors game-text-shadow transform hover:scale-110 font-game px-8 py-2 w-72 text-center">
                  GUÍA
                </button>
                <button onClick={() => setIsMuted(prev => !prev)} className="text-yellow-400 text-5xl hover:text-yellow-300 transition-colors game-text-shadow transform hover:scale-110 font-game px-8 py-2 w-72 text-center">
                  SONIDO: {isMuted ? 'OFF' : 'ON'}
                </button>
                <button onClick={onExit} className="text-yellow-400 text-5xl hover:text-yellow-300 transition-colors game-text-shadow transform hover:scale-110 font-game px-8 py-2 w-72 text-center" aria-label="Salir del juego">
                  SALIR
                </button>
            </div>
          </div>
        );
      case 'gameOver':
        return (
            <div className="absolute inset-0 bg-black/0 flex flex-col items-center justify-center z-20 text-white p-4">
                {decoIcons.map(icon => <DecoIcon key={icon.id} icon={icon} />)}
                <h2 className="text-8xl text-black mb-4 font-game fade-in" style={{ textShadow: '4px 4px 0 #facc15, -4px -4px 0 #facc15, 4px -4px 0 #facc15, -4px 4px 0 #facc15' }}>
                    Game Over
                </h2>
                <p className="text-6xl text-yellow-400 mb-2 font-game fade-in game-text-shadow" style={{ animationDelay: '0.2s' }}>
                    Nivel {level}
                </p>
                <p className="text-3xl text-white mb-12 font-game fade-in game-text-shadow" style={{ animationDelay: '0.4s' }}>
                    Récord: {highScore}
                </p>
                <div className="flex flex-col items-center gap-6 mt-8">
                    <button onClick={restartGame} className="text-yellow-400 text-5xl hover:text-yellow-300 transition-colors game-text-shadow transform hover:scale-110 font-game px-8 py-2 w-72 text-center" aria-label="Reiniciar">
                        Reintentar
                    </button>
                    <button onClick={onExit} className="text-yellow-400 text-5xl hover:text-yellow-300 transition-colors game-text-shadow transform hover:scale-110 font-game px-8 py-2 w-72 text-center" aria-label="Salir">
                        Salir
                    </button>
                </div>
            </div>
        );      
      case 'bonus':
         return (
            <div className="absolute inset-0 bg-black/0 flex flex-col items-center justify-center z-20 text-white p-4">
                {decoIcons.map(icon => <DecoIcon key={icon.id} icon={icon} />)}
                <h2 className="text-6xl font-game text-yellow-300 game-text-shadow mb-6 fade-in">¡BONUS!</h2>
                <p className="text-4xl mb-8 font-game text-white game-text-shadow fade-in" style={{animationDelay: '0.2s'}}>Nivel {level} Superado</p>
                <p className="text-2xl mb-8 font-game text-white game-text-shadow fade-in" style={{animationDelay: '0.4s'}}>Elige tu recompensa:</p>
                <div className="flex flex-col items-center gap-6 mt-4 font-game text-4xl text-yellow-400 game-text-shadow">
                    <p onClick={() => handleBonus('support')} className="cursor-pointer hover:text-yellow-300 transition-colors transform hover:scale-110 fade-in" style={{animationDelay: '0.6s'}}>
                        +1 Soporte
                    </p>
                    <p onClick={() => handleBonus('time')} className="cursor-pointer hover:text-yellow-300 transition-colors transform hover:scale-110 fade-in" style={{animationDelay: '0.8s'}}>
                        +5 Segundos de Base
                    </p>
                </div>
            </div>
        );
      case 'paused':
        return (
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center z-20 text-white p-4 font-game">
            <h2 className="text-5xl mb-8 game-text-shadow text-yellow-300">Pausa</h2>
            <div className="flex flex-col gap-4 w-full max-w-xs text-center text-3xl">
                <p onClick={() => setGameState('playing')} className="cursor-pointer text-white hover:text-yellow-300 transition-colors">Reanudar</p>
                <p onClick={() => setIsGuideVisible(true)} className="cursor-pointer text-white hover:text-yellow-300 transition-colors">Guía</p>
                <p onClick={() => setIsMuted(prev => !prev)} className="cursor-pointer text-white hover:text-yellow-300 transition-colors">
                    Sonido: {isMuted ? 'OFF' : 'ON'}
                </p>
                <p onClick={restartGame} className="cursor-pointer text-white hover:text-yellow-300 transition-colors">Reiniciar</p>
                <p onClick={onExit} className="cursor-pointer text-white hover:text-yellow-300 transition-colors">Salir</p>
            </div>
          </div>
        );
      default: return null;
    }
  }

  return (
    <div 
        ref={gameAreaRef} 
        className={`relative w-full h-full bg-yellow-400 overflow-hidden game-background ${isShaking ? 'screen-shake' : ''}`}
        style={{ backgroundImage: `url(${currentBg})` }}
        onClick={handleGameAreaClick}
    >
      <div className={`siren-flash ${isFrozen ? 'opacity-50 bg-sky-300' : ''}`}></div>
      
      {visualEffects.map(effect => {
          if (effect.type === 'explosion') {
              return (
                  <div key={effect.id} className="explosion" style={{ left: effect.x, top: effect.y }}>
                      {[...Array(10)].map((_, i) => (
                          <span
                              key={i}
                              className="particle"
                              style={{
                                  backgroundColor: effect.color,
                                  boxShadow: `0 0 8px ${effect.color}`,
                                  // @ts-ignore
                                  '--transform-end': `translate(${(Math.random() - 0.5) * effect.radius * 3}px, ${(Math.random() - 0.5) * effect.radius * 3}px) scale(0)`,
                                  animationDelay: `${Math.random() * 0.1}s`
                              }}
                          />
                      ))}
                  </div>
              );
          }
          return null;
      })}

      { (gameState === 'playing' || gameState === 'paused') && (
        <>
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 font-game">
                <div className="text-4xl text-white game-text-shadow">Nivel: {level}</div>
                <div className="flex-1 mx-4 bg-black/50 rounded-full h-6 overflow-hidden border-2 border-white/50">
                    <div className="bg-yellow-400 h-full transition-all duration-100" style={{ width: `${(timeLeft / levelTime) * 100}%` }}></div>
                </div>
                <button onClick={() => setGameState('paused')} className="w-12 h-12 bg-white/80 rounded-full font-bold text-black text-2xl shadow-lg flex items-center justify-center">||</button>
            </div>

            {balls.map(ball => (
                <div 
                    key={ball.id}
                    className="game-ball absolute select-none"
                    style={{
                        width: ball.radius * 2,
                        height: ball.radius * 2,
                        left: ball.x - ball.radius,
                        top: ball.y - ball.radius,
                        backgroundColor: ball.color,
                        fontSize: `${ball.radius * 0.7}px`,
                        lineHeight: 1,
                        color: ball.type === 'death' || ball.type === 'bonus' ? 'white' : 'black',
                        textShadow: ball.type === 'death' || ball.type === 'bonus' ? `0 0 5px ${ball.type === 'death' ? 'red' : 'cyan'}` : 'none'
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleBallClick(ball);
                    }}
                >
                    {ball.text}
                </div>
            ))}
            
            <div ref={bottomUiRef} className="absolute bottom-0 left-0 right-0 p-4 pb-6 flex items-end justify-between gap-4 z-10">
                <p className={`font-game text-xl md:text-2xl text-center p-3 rounded-lg bg-black/70 text-yellow-300 flex-1 ${isPhrasePulsing ? 'phrase-pulse' : ''}`}>
                  {currentPhrase}
                </p>
                <button onClick={handleSupport} className="support-button flex flex-col items-center justify-center shrink-0" aria-label={`Soportes restantes: ${supports}`}>
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <span className="text-3xl font-game -mt-1">{supports}</span>
                </button>
            </div>
        </>
      )}

      {renderContent()}
      
      {isGuideVisible && <GuideComponent onBack={() => setIsGuideVisible(false)} />}

    </div>
  );
};

export default GameScreen;