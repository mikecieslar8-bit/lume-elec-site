import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InteractiveLightbulb = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      onClick={() => setIsOn((prev) => !prev)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ambient glow when on */}
      <AnimatePresence>
        {isOn && (
          <motion.div
            className="absolute -inset-16 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(52 100% 50% / 0.25) 0%, hsl(52 100% 50% / 0.08) 40%, transparent 70%)",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [1, 1.15, 1], opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.4, scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
          />
        )}
      </AnimatePresence>

      {/* Spark particles on toggle */}
      <AnimatePresence>
        {isOn && (
          <>
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              return (
                <motion.div
                  key={`spark-${i}`}
                  className="absolute left-1/2 top-1/3 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "hsl(52 100% 60%)" : "hsl(210 100% 70%)",
                    boxShadow: i % 2 === 0
                      ? "0 0 6px hsl(52 100% 50% / 0.8)"
                      : "0 0 6px hsl(210 100% 62% / 0.8)",
                  }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos(angle) * 60,
                    y: Math.sin(angle) * 60,
                    opacity: 0,
                    scale: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              );
            })}
          </>
        )}
      </AnimatePresence>

      {/* Bulb SVG */}
      <svg width="80" height="120" viewBox="0 0 80 120" className="relative z-10">
        {/* Glow filter */}
        <defs>
          <filter id="bulbGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="bulbGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isOn ? "hsl(52, 100%, 70%)" : "hsl(210, 20%, 75%)"} />
            <stop offset="100%" stopColor={isOn ? "hsl(52, 100%, 50%)" : "hsl(210, 15%, 60%)"} />
          </linearGradient>
          <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(210, 15%, 45%)" />
            <stop offset="100%" stopColor="hsl(210, 15%, 30%)" />
          </linearGradient>
        </defs>

        {/* Bulb body */}
        <motion.path
          d="M40 8 C20 8 10 22 10 38 C10 50 18 58 22 66 C24 72 26 78 26 82 L54 82 C54 78 56 72 58 66 C62 58 70 50 70 38 C70 22 60 8 40 8Z"
          fill="url(#bulbGrad)"
          filter={isOn ? "url(#bulbGlow)" : undefined}
          animate={{
            fill: isOn ? "url(#bulbGrad)" : "url(#bulbGrad)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Inner filament */}
        <motion.path
          d="M32 45 Q36 35 40 45 Q44 55 48 45"
          stroke={isOn ? "hsl(52, 100%, 85%)" : "hsl(210, 10%, 50%)"}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={
            isOn
              ? {
                  opacity: [1, 0.6, 1],
                  strokeWidth: [2, 2.5, 2],
                }
              : { opacity: 0.5 }
          }
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Screw base */}
        <rect x="26" y="82" width="28" height="6" rx="1" fill="url(#baseGrad)" />
        <rect x="28" y="88" width="24" height="4" rx="1" fill="hsl(210, 15%, 35%)" />
        <rect x="30" y="92" width="20" height="4" rx="1" fill="url(#baseGrad)" />
        <rect x="32" y="96" width="16" height="4" rx="2" fill="hsl(210, 15%, 35%)" />
        {/* Base threading lines */}
        <line x1="27" y1="85" x2="53" y2="85" stroke="hsl(210, 10%, 40%)" strokeWidth="0.5" />
        <line x1="29" y1="90" x2="51" y2="90" stroke="hsl(210, 10%, 40%)" strokeWidth="0.5" />
        <line x1="31" y1="94" x2="49" y2="94" stroke="hsl(210, 10%, 40%)" strokeWidth="0.5" />

        {/* Glass reflection */}
        <motion.ellipse
          cx="32"
          cy="30"
          rx="6"
          ry="10"
          fill="white"
          opacity={isOn ? 0.3 : 0.1}
          transform="rotate(-15 32 30)"
        />
      </svg>

      {/* Rays when on */}
      <AnimatePresence>
        {isOn && (
          <>
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
              const length = 30 + (i % 2) * 15;
              return (
                <motion.div
                  key={`ray-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: "50%",
                    top: "33%",
                    width: `${length}px`,
                    height: "2px",
                    background: "linear-gradient(90deg, hsl(52 100% 50% / 0.6), transparent)",
                    transformOrigin: "0% 50%",
                    rotate: `${(angle * 180) / Math.PI}deg`,
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: [0.6, 1, 0.6],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                />
              );
            })}
          </>
        )}
      </AnimatePresence>

      {/* Label */}
      <motion.p
        className="text-xs text-muted-foreground text-center mt-2 font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {isOn ? "✨ Click to turn off" : "💡 Click to turn on"}
      </motion.p>
    </motion.div>
  );
};

export default InteractiveLightbulb;
