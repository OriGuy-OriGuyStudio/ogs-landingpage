// src/global.d.ts
declare const confetti: (args: {
  particleCount?: number;
  angle?: number;
  spread?: number;
  origin?: { x?: number; y?: number };
  colors?: string[];
  startVelocity?: number;
  gravity?: number;
  ticks?: number;
}) => void;
