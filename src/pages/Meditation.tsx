import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpiritualStore } from '@/hooks/useSpiritualState';
import { Wind, Play, RotateCcw, Award } from 'lucide-react';
import { toast } from 'sonner';

const Meditation: React.FC = () => {
  const { addEnergy } = useSpiritualStore();
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  useEffect(() => {
    let interval: any;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        
        // Simulating breath cycle every 8 seconds
        const cycle = timeLeft % 8;
        if (cycle > 4) setBreathPhase('inhale');
        else if (cycle > 3) setBreathPhase('hold');
        else setBreathPhase('exhale');

      }, 1000);
    } else if (timeLeft === 0) {
      handleComplete();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleComplete = () => {
    setIsActive(false);
    addEnergy(15);
    toast.success("Spirit Purified. +15 Energy", {
      description: "«Your mind awakens when your spirit connects to the spiritual world.»"
    });
    setTimeLeft(60);
  };

  const toggleMeditation = () => setIsActive(!isActive);
  const reset = () => {
    setIsActive(false);
    setTimeLeft(60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-6 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center space-y-12">
        <header className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-bold">Meditation Session</h2>
          <h1 className="text-4xl font-bold">Breath of Awareness</h1>
          <p className="text-slate-400">«"To understand your power, you must become one with yourself."»</p>
        </header>

        {/* Breathing Orb */}
        <div className="relative h-80 flex items-center justify-center">
          <AnimatePresence>
            {isActive && (
              <motion.div
                key={breathPhase}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: breathPhase === 'inhale' ? 1.5 : 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"
                transition={{ duration: 4 }}
              />
            )}
          </AnimatePresence>

          <motion.div
            animate={{
              scale: isActive ? (breathPhase === 'inhale' ? 1.4 : 1) : 1,
              borderColor: isActive ? 'rgba(139, 92, 246, 0.6)' : 'rgba(139, 92, 246, 0.2)',
            }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="w-48 h-48 rounded-full border-4 flex flex-col items-center justify-center glass-morphism z-10"
          >
            <div className="text-4xl font-mono font-bold">{formatTime(timeLeft)}</div>
            <div className="text-[10px] uppercase tracking-widest text-primary mt-2">
              {isActive ? breathPhase : 'Ready'}
            </div>
          </motion.div>

          {/* Floating Particles during meditation */}
          {isActive && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{ 
                    x: '50%', 
                    y: '50%',
                    opacity: 0 
                  }}
                  animate={{ 
                    x: `${50 + (Math.random() - 0.5) * 80}%`, 
                    y: `${50 + (Math.random() - 0.5) * 80}%`,
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity 
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={toggleMeditation}
            className={`flex items-center gap-3 px-10 py-4 rounded-full font-bold transition-all ${
              isActive 
              ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
              : 'bg-primary text-white hover:scale-105 shadow-lg shadow-primary/25'
            }`}
          >
            {isActive ? <Wind className="animate-spin" /> : <Play fill="currentColor" />}
            {isActive ? 'Cease Ritual' : 'Begin Ritual'}
          </button>
          
          <button
            onClick={reset}
            className="p-4 rounded-full bg-slate-900 border border-white/5 text-slate-500 hover:text-white transition-all"
          >
            <RotateCcw size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          <div className="p-6 glass-morphism rounded-2xl text-left border-primary/10">
            <h4 className="flex items-center gap-2 font-bold mb-3">
              <Award className="text-primary" size={18} />
              Spiritual Growth
            </h4>
            <p className="text-sm text-slate-400">
              Each session strengthens your aura and increases your rank. Reach "Divine Spirit" to unlock hidden realms.
            </p>
          </div>
          <div className="p-6 glass-morphism rounded-2xl text-left border-red-500/10">
            <h4 className="flex items-center gap-2 font-bold mb-3">
              <Wind className="text-red-400" size={18} />
              The Warning
            </h4>
            <p className="text-sm text-slate-400 italic">
              «"A peaceful spirit amplifies power beyond imagination."»
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meditation;