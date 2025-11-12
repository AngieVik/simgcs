let audioCtx: AudioContext | null = null;

const initializeAudio = () => {
  if (typeof window !== 'undefined' && !audioCtx) {
    try {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.error("Web Audio API is not supported in this browser");
    }
  }
};

export const playClickSound = () => {
  initializeAudio();
  if (!audioCtx) return;

  // Resume context if it's suspended (e.g., due to browser autoplay policies)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const now = audioCtx.currentTime;
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  // Características del sonido: un clic corto y agudo con una caída de tono
  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(880, now); // Empieza en un tono alto (A5)
  oscillator.frequency.exponentialRampToValueAtTime(440, now + 0.1); // Cae a A4

  gainNode.gain.setValueAtTime(0.2, now); // Volumen inicial
  gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1); // Decae rápidamente a casi silencio

  // Conectar y reproducir
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.1);
};
