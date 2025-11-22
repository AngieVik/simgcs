import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { gameQuestions } from '../constants/gameData';

// --- TIPOS ---
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
  textColor: string;
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

// --- CONSTANTES Y CONFIGURACIÓN ---
const INITIAL_TIME = 20.0;
const INITIAL_SUPPORTS = 3;
const INITIAL_SPEED = 2.5;
const MAX_SPEED_BASE = 12;

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

// Fondo dinámico degradado (Cyberpunk style)
const generateBackground = (level: number) => {
    const hue = ((level - 1) * 45) % 360;
    // Más oscuro y saturado para contraste con letras neon
    return `linear-gradient(180deg, hsl(${hue}, 80%, 5%) 0%, hsl(${hue + 30}, 60%, 10%) 100%)`;
};

// --- COMPONENTES VISUALES ---

// 1. Efecto Matrix (Lluvia de código sutil)
const MatrixRain: React.FC = () => {
    const drops = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 3,
            chars: Math.random() > 0.5 ? '101010' : 'AF09BC'
        }));
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            {drops.map((drop) => (
                <div
                    key={drop.id}
                    className="absolute top-[-20%] text-green-500 text-xs md:text-sm font-mono writing-vertical"
                    style={{
                        left: `${drop.left}%`,
                        animation: `matrixFall ${drop.duration}s linear infinite`,
                        animationDelay: `-${drop.delay}s`,
                        textShadow: '0 0 5px rgba(0, 255, 0, 0.8)'
                    }}
                >
                    {drop.chars.split('').map((c, k) => (
                        <div key={k} className="my-1 opacity-70">{c}</div>
                    ))}
                </div>
            ))}
        </div>
    );
};

// Iconos decorativos para menús
const DecoIcon: React.FC<{ icon: DecoIconData }> = ({ icon }) => (
  <div
    className="absolute text-white select-none pointer-events-none fade-in font-mono"
    style={{
      left: `${icon.x}%`,
      top: `${icon.y}%`,
      fontSize: `${icon.size}px`,
      opacity: icon.opacity,
      textShadow: '0 0 8px rgba(255,255,255,0.4)',
      animationDelay: `${icon.delay}s`
    }}
  >
    {icon.char}
  </div>
);

const GuideComponent: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center z-50 text-white p-6 font-['Share_Tech_Mono']">
        <div className="w-full max-w-md text-left border border-green-500/30 p-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.2)] bg-black">
            <h2 className="text-5xl text-green-400 mb-8 text-center uppercase tracking-widest glitch-text">SYSTEM_GUIDE</h2>
            <div className="space-y-6 text-xl tracking-wide">
                <div className="flex items-center gap-4 border-b border-gray-800 pb-2">
                    <span className="text-3xl filter drop-shadow-[0_0_5px_#4ade80]">🟢</span>
                    <span className="text-green-400">BENEFICIOS: HP++, TIME++, FREEZE</span>
                </div>
                <div className="flex items-center gap-4 border-b border-gray-800 pb-2">
                    <span className="text-3xl filter drop-shadow-[0_0_5px_#f87171]">🔴</span>
                    <span className="text-red-400">CORRUPCIÓN: DMG, STEAL, HIDE</span>
                </div>
                <div className="flex items-center gap-4 border-b border-gray-800 pb-2">
                    <span className="text-3xl">💀</span>
                    <span className="text-gray-500">FATAL_ERROR: GAME_OVER</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-3xl filter drop-shadow-[0_0_8px_#fef08a]">⭐</span>
                    <span className="text-yellow-200">ROOT_ACCESS: SUPER_TIME</span>
                </div>
            </div>
            <button 
                onClick={onBack} 
                className="mt-10 w-full py-4 text-3xl bg-green-900/30 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all uppercase tracking-[0.2em]"
            >
                [ RETURN ]
            </button>
        </div>
    </div>
);

interface GameScreenProps {
    onExit: () => void;
    highScore: number;
    onSetHighScore: (score: number) => void;
    isMuted: boolean;
    onToggleMute: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ onExit, highScore, onSetHighScore, isMuted, onToggleMute }) => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [level, setLevel] = useState(1);
  const [supports, setSupports] = useState(INITIAL_SUPPORTS);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [balls, setBalls] = useState<Ball[]>([]);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [originalPhrase, setOriginalPhrase] = useState('');
  const [levelTime, setLevelTime] = useState(INITIAL_TIME);
  const [ballSpeed, setBallSpeed] = useState(INITIAL_SPEED);
  const [decoIcons, setDecoIcons] = useState<DecoIconData[]>([]);
  const [isFrozen, setIsFrozen] = useState(false);
  const [isGuideVisible, setIsGuideVisible] = useState(false);
  const [visualEffects, setVisualEffects] = useState<VisualEffect[]>([]);
  const [isShaking, setIsShaking] = useState(false);
  const [isPhrasePulsing, setIsPhrasePulsing] = useState(false);

  const gameAreaRef = useRef<HTMLDivElement>(null);
  const bottomUiRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const specialBallSpawnTimerRef = useRef<number>(0);
  const audioCtx = useRef<AudioContext | null>(null);
  const ballPoolRef = useRef<Ball[]>([]);
  const scaleRef = useRef<number>(1);

  // --- AUDIO Y RESIZE ---
  useEffect(() => {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioCtx.current = new AudioContextClass();
    
    const handleResize = () => {
        if (gameAreaRef.current) {
            const width = gameAreaRef.current.clientWidth;
            const height = gameAreaRef.current.clientHeight;
            scaleRef.current = Math.min(width, height) / 600;
        }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const playSound = (type: SoundType) => {
    if (isMuted) return;
    const ctx = audioCtx.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {}); 

    const now = ctx.currentTime;
    const gainNode = ctx.createGain();
    gainNode.connect(ctx.destination);

    if (type === 'hit') {
      const oscillator = ctx.createOscillator();
      oscillator.type = 'square'; // Más 8-bit
      oscillator.frequency.setValueAtTime(150, now);
      oscillator.frequency.exponentialRampToValueAtTime(40, now + 0.1);
      gainNode.gain.setValueAtTime(0.2, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      oscillator.connect(gainNode);
      oscillator.start(now);
      oscillator.stop(now + 0.1);
    } else if (type === 'gameOver') {
      const oscillator = ctx.createOscillator();
      oscillator.type = 'sawtooth';
      gainNode.gain.setValueAtTime(0.3, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 1.5);
      oscillator.frequency.setValueAtTime(100, now);
      oscillator.frequency.linearRampToValueAtTime(20, now + 1.5);
      oscillator.connect(gainNode);
      oscillator.start(now);
      oscillator.stop(now + 1.5);
    } else if (type === 'push') {
        const oscillator = ctx.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(300, now);
        oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.1);
        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        oscillator.connect(gainNode);
        oscillator.start(now);
        oscillator.stop(now + 0.1);
    } else if (type === 'correct') {
        const osc = ctx.createOscillator();
        osc.type = 'square';
        osc.frequency.setValueAtTime(880, now); 
        osc.frequency.setValueAtTime(1760, now + 0.1); 
        gainNode.gain.setValueAtTime(0.1, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.connect(gainNode);
        osc.start(now);
        osc.stop(now + 0.3);
    }
  };

  const handleStartGame = () => {
    if (audioCtx.current && audioCtx.current.state === 'suspended') {
        audioCtx.current.resume();
    }
    restartGame();
  };

  // --- LÓGICA DEL JUEGO ---
  const getBallFromPool = (): Ball => {
    const inactiveBall = ballPoolRef.current.find(b => !b.isActive);
    if (inactiveBall) return inactiveBall;
    const newBall: Ball = { id: 0, x:0, y:0, vx:0, vy:0, radius:0, mass:0, color:'', textColor:'black', text:'', isActive:false, type:'answer', effect:'none' };
    ballPoolRef.current.push(newBall);
    return newBall;
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
          const timeout = setTimeout(() => setVisualEffects(prev => prev.slice(1)), 800);
          return () => clearTimeout(timeout);
      }
  }, [visualEffects]);

  const scrambleText = (text: string) => {
    if (text.length < 3) return text;
    const chars = text.split('');
    const indicesToScramble = chars.map((char, i) => (char !== ' ' ? i : -1)).filter(i => i !== -1);
    const numToScramble = Math.max(1, Math.floor(indicesToScramble.length / 3));
    for (let i = 0; i < numToScramble; i++) {
        const randomIndex = Math.floor(Math.random() * indicesToScramble.length);
        const charIndex = indicesToScramble[randomIndex];
        chars[charIndex] = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter code style
        indicesToScramble.splice(randomIndex, 1);
    }
    return chars.join('');
  };

  const handleScrambleEffect = () => {
    setCurrentPhrase(scrambleText(originalPhrase));
    ballPoolRef.current.forEach(b => {
        if (b.isActive && b.type === 'answer') b.text = scrambleText(b.originalText || b.text);
    });
    setTimeout(() => {
        setCurrentPhrase(originalPhrase);
        ballPoolRef.current.forEach(b => {
            if (b.type === 'answer') b.text = b.originalText || b.text;
        });
    }, 3000);
  };
  
  const spawnSpecialBall = (gameWidth: number) => {
    const scale = scaleRef.current;
    const baseRadius = 32 * scale;
    const specialTypes = [
        { type: 'good', effect: 'addSupport', text: 'DATA+', color: '#22c55e', textColor:'black', radius: baseRadius },
        { type: 'good', effect: 'addTime', text: 'TIME+', color: '#22c55e', textColor:'black', radius: baseRadius },
        { type: 'good', effect: 'freeze', text: 'STOP', color: '#38bdf8', textColor:'black', radius: baseRadius },
        { type: 'bad', effect: 'removeSupport', text: 'CORRUPT', color: '#ef4444', textColor:'black', radius: baseRadius },
        { type: 'bad', effect: 'removeTime', text: 'LAG', color: '#ef4444', textColor:'black', radius: baseRadius },
        { type: 'bad', effect: 'scramble', text: 'BUG', color: '#f97316', textColor:'black', radius: baseRadius },
        { type: 'death', effect: 'loseGame', text: 'X', color: '#000000', textColor:'red', radius: 24 * scale },
        { type: 'bonus', effect: 'winTime', text: 'ROOT', color: '#ffffff', textColor:'#eab308', radius: 24 * scale },
        ...Array(3).fill({ type: 'emoji', effect: 'none', text: ['01', 'AF', 'OK', 'FF'][Math.floor(Math.random()*4)], color: '#fbbf24', textColor:'black', radius: (Math.random() * 15 + 20) * scale }),
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
        vx: (Math.random() - 0.5) * ballSpeed * scale,
        vy: (Math.random() * 0.5 + 0.5) * ballSpeed * scale,
        radius: spec.radius,
        isActive: true,
        color: spec.color,
        textColor: spec.textColor,
        mass: Math.pow(spec.radius, 2),
        isCorrect: undefined,
        originalText: undefined
    });
  };

  useEffect(() => {
    if (gameState === 'start' || gameState === 'gameOver' || gameState === 'bonus') {
      const icons: DecoIconData[] = [];
      const iconChars = ['{ }', '< >', '//', '01', '&&', '||'];
      for (let i = 0; i < 20; i++) {
        icons.push({
          id: i,
          char: iconChars[Math.floor(Math.random() * iconChars.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 30 + 15,
          opacity: Math.random() * 0.2 + 0.05,
          delay: Math.random() * 2
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
        if (b.type === 'answer' || isRestart) b.isActive = false;
    });
    const gameWidth = gameAreaRef.current?.clientWidth || window.innerWidth;
    const scale = scaleRef.current;
    const answerRadius = 45 * scale;
    const answerColors = ['#facc15', '#eab308', '#d97706']; 

    options.forEach((opt, index) => {
        const ball = getBallFromPool();
        Object.assign(ball, {
            id: Date.now() + Math.random(),
            type: 'answer',
            effect: 'none',
            text: opt.text,
            originalText: opt.text,
            isCorrect: opt.isCorrect,
            x: Math.random() * (gameWidth - answerRadius * 2) + answerRadius,
            y: Math.random() * 100 + answerRadius,
            vx: (Math.random() - 0.5) * speed * scale,
            vy: (Math.random() * 0.5 + 0.2) * speed * scale,
            radius: answerRadius,
            isActive: true,
            color: answerColors[index % answerColors.length],
            textColor: 'black',
            mass: Math.pow(answerRadius, 2) * 1.5,
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
    const newTime = Math.max(5, levelTime * 0.98);
    const newSpeed = ballSpeed * 1.04;
    setLevelTime(newTime);
    setBallSpeed(newSpeed);
    if (newLevel % 5 === 0) setGameState('bonus');
    else setupLevel(newLevel, newTime, newSpeed);
  };

  const handleBallClick = (clickedBall: Ball) => {
    if (gameState !== 'playing') return;
    const ballInPool = ballPoolRef.current.find(b => b.id === clickedBall.id);
    if (!ballInPool || !ballInPool.isActive) return;
    ballInPool.isActive = false;
    addVisualEffect('explosion', clickedBall.x, clickedBall.y, clickedBall.radius, clickedBall.color);
    if (clickedBall.type === 'answer') {
        if (clickedBall.isCorrect) nextLevel();
        else {
            playSound('hit');
            triggerScreenShake();
            setTimeLeft(t => Math.max(0, t - 3));
        }
    } else {
        playSound('hit');
        switch (clickedBall.effect) {
            case 'addTime': setTimeLeft(t => t + 1); break;
            case 'removeTime': setTimeLeft(t => Math.max(0, t - 1)); break;
            case 'addSupport': setSupports(s => s + 1); break;
            case 'removeSupport': setSupports(s => Math.max(0, s - 1)); break;
            case 'freeze': setIsFrozen(true); setTimeout(() => setIsFrozen(false), 3000); break;
            case 'scramble': handleScrambleEffect(); break;
            case 'winTime': setTimeLeft(t => t + 10); break;
            case 'loseGame': setGameState('gameOver'); playSound('gameOver'); triggerScreenShake(); break;
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
        playSound('push');
      }
    }
  };
  
  const handleGameAreaClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target !== gameAreaRef.current) return;
      // Check if clicking on Support Button manually (though button handles itself)
      // This is mainly for background pushes
      const rect = gameAreaRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      // Logic to prevent push if clicking on UI (bottom area)
      if (clickY > rect.height - 100) return;

      const scale = scaleRef.current;
      const pushRadius = 180 * scale; // Radio de empuje más grande
      const pushForce = 10 * scale;
      playSound('push');
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
    if (type === 'support') setSupports(s => s + 1);
    else newBaseTime = levelTime + 3;
    const newLevel = level + 1;
    const newSpeed = ballSpeed * 1.03;
    setLevelTime(Math.max(5, newBaseTime));
    setBallSpeed(newSpeed);
    setupLevel(newLevel, newBaseTime, newSpeed);
  };
  
  const restartGame = () => {
    ballPoolRef.current.forEach(b => b.isActive = false);
    setLevel(1);
    setSupports(INITIAL_SUPPORTS);
    setLevelTime(INITIAL_TIME);
    setBallSpeed(INITIAL_SPEED);
    onSetHighScore(level > highScore ? level : highScore);
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
        const bottomUiHeight = 120; // Altura reservada para UI
        const bottomBoundary = gameHeight - bottomUiHeight;
        
        if (specialBallSpawnTimerRef.current > 3.5) {
            specialBallSpawnTimerRef.current = 0;
            spawnSpecialBall(gameWidth);
        }

        const activeBalls = ballPoolRef.current.filter(b => b.isActive);
        const scale = scaleRef.current;
        const maxVelocity = MAX_SPEED_BASE * scale;
        
        if (!isFrozen) {
            activeBalls.forEach(ball => {
                ball.x += ball.vx;
                ball.y += ball.vy;
                ball.vy += 0.05 * scale;

                if (ball.x - ball.radius < 0) {
                    ball.x = ball.radius;
                    ball.vx = Math.abs(ball.vx) * 0.9;
                } else if (ball.x + ball.radius > gameWidth) {
                    ball.x = gameWidth - ball.radius;
                    ball.vx = -Math.abs(ball.vx) * 0.9;
                }

                if (ball.y - ball.radius < 0) {
                    ball.y = ball.radius;
                    ball.vy = Math.abs(ball.vy) * 0.9;
                } else if (ball.y + ball.radius > bottomBoundary && ball.type !== 'emoji') {
                    ball.y = bottomBoundary - ball.radius;
                    ball.vy = -Math.abs(ball.vy) * 0.85; 
                    ball.vx *= 0.98; 
                }
                if (ball.y > gameHeight + 100) ball.isActive = false;

                ball.vx = Math.max(-maxVelocity, Math.min(ball.vx, maxVelocity));
                ball.vy = Math.max(-maxVelocity, Math.min(ball.vy, maxVelocity));
            });
        }

        for (let i = 0; i < activeBalls.length; i++) {
            for (let j = i + 1; j < activeBalls.length; j++) {
                const b1 = activeBalls[i];
                const b2 = activeBalls[j];
                const dx = b2.x - b1.x;
                const dy = b2.y - b1.y;
                const distanceSq = dx * dx + dy * dy;
                const minDist = b1.radius + b2.radius;

                if (distanceSq < minDist * minDist) {
                    const distance = Math.sqrt(distanceSq);
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

                    const overlap = minDist - distance;
                    const separationFactor = 0.5; 
                    b1.x -= overlap * cos * separationFactor;
                    b1.y -= overlap * sin * separationFactor;
                    b2.x += overlap * cos * separationFactor;
                    b2.y += overlap * sin * separationFactor;
                }
            }
        }
    }
    setBalls(ballPoolRef.current.filter(b => b.isActive));
    lastTimeRef.current = timestamp;
    animationFrameRef.current = requestAnimationFrame(gameLoop);
  }, [gameState, isFrozen, ballSpeed, setupLevel]);

  useEffect(() => {
    if (gameState === 'playing') animationFrameRef.current = requestAnimationFrame(gameLoop);
    return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); lastTimeRef.current = null; };
  }, [gameState, gameLoop]);
  
  // ESTILOS REUTILIZABLES
  const fontMain = "font-['Share_Tech_Mono']"; // Fuente código
  const textMenuItem = `${fontMain} uppercase tracking-[0.15em] hover:text-yellow-400 hover:scale-110 transition-all cursor-pointer select-none text-shadow-glow`;

  // --- RENDERIZADO ---
  const renderContent = () => {
    switch(gameState) {
      case 'start':
        return (
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center h-full p-4 fade-in z-20">
            {decoIcons.map(icon => <DecoIcon key={icon.id} icon={icon} />)}
            <div className="z-10 flex flex-col items-center gap-16">
                <div className="relative">
                    <h1 className={`${fontMain} text-8xl text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-600 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)] tracking-widest animate-pulse`}>
                        CÓDIGO3
                    </h1>
                    <p className={`${fontMain} absolute -bottom-6 right-0 text-green-500/60 text-xl tracking-[0.5em]`}>SYSTEM_READY</p>
                </div>
                
                <div className="flex flex-col items-center gap-8 text-4xl text-white/90">
                    <span onClick={handleStartGame} className={`${textMenuItem} text-6xl text-green-400 font-bold`}>
                        [ INICIAR ]
                    </span>
                    <span onClick={() => setIsGuideVisible(true)} className={textMenuItem}>
                        MANUAL
                    </span>
                    <span onClick={onToggleMute} className={textMenuItem}>
                        AUDIO: {isMuted ? 'OFF' : 'ON'}
                    </span>
                    <span onClick={onExit} className={`${textMenuItem} text-gray-400 hover:text-white`}>
                        SALIR
                    </span>
                </div>
            </div>
          </div>
        );
      case 'gameOver':
        return (
            <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-30 text-white p-4">
                {decoIcons.map(icon => <DecoIcon key={icon.id} icon={icon} />)}
                <h2 className={`${fontMain} text-9xl text-red-600 mb-4 tracking-widest drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] uppercase`}>
                    FATAL ERROR
                </h2>
                <div className="flex flex-col items-center gap-2 mb-16 border border-red-900/50 p-8 rounded bg-red-950/20">
                    <p className={`${fontMain} text-4xl text-yellow-400`}>NIVEL ALCANZADO: {level}</p>
                    <p className={`${fontMain} text-2xl text-gray-400`}>MEJOR REGISTRO: {Math.max(level, highScore)}</p>
                </div>
                <div className="flex flex-col items-center gap-8 text-4xl">
                    <span onClick={handleStartGame} className={`${textMenuItem} text-green-400 text-5xl`}>
                        REBOOT SYSTEM
                    </span>
                    <span onClick={onExit} className={textMenuItem}>
                        SHUT DOWN
                    </span>
                </div>
            </div>
        );      
      case 'bonus':
         return (
            <div className="absolute inset-0 bg-blue-950/95 flex flex-col items-center justify-center z-30 text-white p-4">
                {decoIcons.map(icon => <DecoIcon key={icon.id} icon={icon} />)}
                <h2 className={`${fontMain} text-7xl text-yellow-300 mb-16 animate-bounce tracking-widest drop-shadow-lg`}>¡BONUS LEVEL!</h2>
                <div className="flex flex-col gap-12 w-full max-w-md text-center">
                    <div onClick={() => handleBonus('support')} className={`${textMenuItem} text-green-300 text-5xl border-b-2 border-transparent hover:border-green-400 pb-4`}>
                        +1 SHIELD UNIT
                    </div>
                    <div onClick={() => handleBonus('time')} className={`${textMenuItem} text-blue-300 text-5xl border-b-2 border-transparent hover:border-blue-400 pb-4`}>
                        +3 TIME UNITS
                    </div>
                </div>
            </div>
        );
      case 'paused':
        return (
          <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center z-30 text-white p-4">
             <h2 className={`${fontMain} text-8xl text-white/10 mb-16 tracking-[1.5rem] uppercase`}>PAUSED</h2>
             <div className="flex flex-col items-center gap-10 text-4xl font-bold tracking-wider">
                <span onClick={() => setGameState('playing')} className={`${textMenuItem} text-white text-6xl`}>RESUME</span>
                <span onClick={() => setIsGuideVisible(true)} className={textMenuItem}>GUIDE</span>
                <span onClick={onToggleMute} className={textMenuItem}>SOUND: {isMuted ? 'OFF' : 'ON'}</span>
                <span onClick={restartGame} className={textMenuItem}>RESTART</span>
                <span onClick={onExit} className={`${textMenuItem} text-red-500 hover:text-red-400 mt-8`}>EXIT</span>
             </div>
          </div>
        );
      default: return null;
    }
  }

  return (
    <div 
        ref={gameAreaRef} 
        className={`relative w-full h-full overflow-hidden select-none ${fontMain} ${isShaking ? 'translate-x-2 translate-y-2' : ''}`}
        style={{ background: generateBackground(level), transition: 'background 2s ease' }}
        onClick={handleGameAreaClick}
    >
        {/* Fuente Importada */}
        <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
              .writing-vertical { writing-mode: vertical-rl; text-orientation: upright; }
              .text-shadow-glow { text-shadow: 0 0 10px currentColor; }
              @keyframes matrixFall { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(100vh); opacity: 0; } }`}
        </style>

      {/* Efecto Matrix de Fondo */}
      <MatrixRain />

      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isFrozen ? 'bg-cyan-500/20 opacity-100' : 'opacity-0'} z-0`}></div>
      
      {visualEffects.map(effect => {
          if (effect.type === 'explosion') {
              return (
                  <div key={effect.id} className="absolute pointer-events-none z-10" style={{ left: effect.x, top: effect.y }}>
                      {[...Array(6)].map((_, i) => (
                          <span
                              key={i}
                              className="absolute border border-white"
                              style={{
                                  borderColor: effect.color,
                                  width: effect.radius / 2,
                                  height: effect.radius / 2,
                                  transform: `rotate(${Math.random()*360}deg) translate(${Math.random()*50}px)`,
                                  opacity: 0,
                                  animation: `ping 0.4s cubic-bezier(0, 0, 0.2, 1) forwards`
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
            {/* HEADER */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10 text-white tracking-wider pointer-events-none">
                <div className="flex flex-col">
                    <span className="text-green-500 text-xs">LEVEL_ID</span>
                    <span className="text-5xl leading-none drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{String(level).padStart(2, '0')}</span>
                </div>
                
                <div className="flex-1 mx-8 mt-3">
                   <div className="w-full bg-gray-800 h-4 border border-gray-600 relative overflow-hidden skew-x-[-10deg]">
                        <div 
                            className={`h-full transition-all duration-200 ${timeLeft < 5 ? 'bg-red-500 animate-pulse' : 'bg-green-400'}`} 
                            style={{ width: `${Math.min(100, (timeLeft / levelTime) * 100)}%` }}
                        ></div>
                        {/* Grid lines on bar */}
                        <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjYzQwMDAwojOAAkzEKAAGAAU2EwJ4jZ8/AAAAAElFTkSuQmCC')] opacity-20"></div>
                    </div>
                </div>
                
                <div onClick={() => setGameState('paused')} className="pointer-events-auto cursor-pointer text-green-400 hover:text-white text-2xl border border-green-500/50 px-3 py-1 bg-black/50 backdrop-blur hover:bg-green-900/50 transition-colors">
                    [ PAUSE ]
                </div>
            </div>

            {/* BOLAS */}
            {balls.map(ball => (
                <div 
                    key={ball.id}
                    className="absolute flex items-center justify-center rounded-full cursor-pointer active:scale-95 transition-transform z-10"
                    style={{
                        width: ball.radius * 2,
                        height: ball.radius * 2,
                        left: ball.x - ball.radius,
                        top: ball.y - ball.radius,
                        backgroundColor: ball.color,
                        fontSize: `${ball.radius * 0.55}px`,
                        color: ball.textColor,
                        boxShadow: `inset -2px -2px 6px rgba(0,0,0,0.5), 0 0 15px ${ball.color}`,
                        border: '2px solid rgba(255,255,255,0.2)'
                    }}
                    onClick={(e) => { e.stopPropagation(); handleBallClick(ball); }}
                >
                    {ball.text}
                </div>
            ))}
            
            {/* UI INFERIOR */}
            <div ref={bottomUiRef} className="absolute bottom-0 left-0 right-0 h-[140px] flex items-center justify-between px-6 z-20 pointer-events-none">
                
                {/* FRASE - Integrada en panel */}
                <div className="flex-1 mr-4 pointer-events-auto">
                    <div className={`bg-black/60 backdrop-blur-md border-l-4 ${isPhrasePulsing ? 'border-green-400 bg-green-900/30' : 'border-gray-500'} p-4 transition-all`}>
                         <p className="text-xs text-gray-400 mb-1 tracking-[0.3em]">DECRYPT_SEQUENCE:</p>
                         <p className={`text-2xl md:text-4xl leading-none ${isPhrasePulsing ? 'text-green-300 text-shadow-glow' : 'text-white'}`}>
                           {currentPhrase}
                         </p>
                    </div>
                </div>
                
                {/* BOTÓN ESCUDO GRANDE */}
                <button 
                    onClick={(e) => {
                        e.stopPropagation(); // Evita el "push" del fondo al hacer click
                        handleSupport();
                    }} 
                    className="pointer-events-auto relative group w-28 h-28 rounded-full bg-indigo-600 border-4 border-indigo-400 hover:bg-indigo-500 hover:border-white active:scale-95 transition-all shadow-[0_0_30px_rgba(79,70,229,0.6)] flex flex-col items-center justify-center shrink-0 overflow-hidden"
                >
                    <span className="text-4xl mb-1 filter drop-shadow-md">🛡️</span>
                    <span className="text-3xl font-bold text-white">{supports}</span>
                    
                    {/* PUSH LABEL ANIMADA */}
                    <div className="absolute bottom-2 w-full text-center">
                        <span className="text-[10px] font-bold text-indigo-200 animate-pulse tracking-widest bg-indigo-900/50 px-2 rounded">PUSH!!</span>
                    </div>
                    
                    {/* Brillo efecto cristal */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none"></div>
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