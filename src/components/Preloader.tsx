/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Rapid structural pacing
      const increment = Math.floor(Math.random() * 12) + 3;
      current = Math.min(current + increment, 100);
      setPercent(current);

      if (current === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Wait for curtains to slide
        }, 500); // Hold at 100 for dramatic impact
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="preloader-overlay"
          className="fixed inset-0 z-50 flex flex-col md:flex-row bg-[#0b0301]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Left panel */}
          <motion.div
            id="preloader-p1"
            className="flex-1 bg-[#0b0301] flex flex-col justify-end p-8 md:p-16 border-r border-white/5 relative overflow-hidden"
            exit={{ x: '-100%' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          >
            {/* Background design coordinates */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="0" x2="10%" y2="100%" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
                <line x1="30%" y1="0" x2="30%" y2="100%" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" />
                <line x1="0" y1="20%" x2="100%" y2="20%" stroke="white" strokeWidth="0.5" />
                <circle cx="30%" cy="20%" r="4" fill="#2a6fdd" />
              </svg>
            </div>

            <div className="relative z-10">
              <span className="font-mono text-xs text-[#2a6fdd] tracking-[0.3em] uppercase block mb-4">
                [ TENSION STRUCTURES — VADODARA ]
              </span>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-none">
                ASHA SMART<br />
                <span className="font-semibold text-[#17be74]">SHADES</span>
              </h1>
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            id="preloader-p2"
            className="flex-1 bg-[#0d0705] flex flex-col justify-between p-8 md:p-16 relative overflow-hidden"
            exit={{ x: '100%' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="flex justify-between items-start w-full relative z-10">
              <span className="font-mono text-[10px] text-gray-500 tracking-wider">
                SYS: ACTIVE_ENGINEERING_ONLINE_V15
              </span>
              <span className="font-mono text-[10px] text-gray-500 tracking-wider">
                LOC: 22.2591° N, 73.1966° E
              </span>
            </div>

            <div className="flex flex-col items-end justify-end mt-auto relative z-10">
              <div className="font-mono text-6xl md:text-8xl lg:text-9xl font-light text-white leading-none tracking-tighter">
                {percent.toString().padStart(3, '0')}
                <span className="text-[#2a6fdd] text-3xl md:text-5xl font-normal ml-1">%</span>
              </div>
              <div className="w-48 bg-white/10 h-[1px] mt-4 relative overflow-hidden">
                <motion.div
                  id="preloader-bar"
                  className="bg-[#2a6fdd] h-full absolute top-0 left-0"
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="font-mono text-xs text-gray-400 mt-3 uppercase tracking-widest text-right">
                Initialising Structural Meshing...
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
