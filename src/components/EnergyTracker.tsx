import React from 'react';
import { motion } from 'framer-motion';
import { useSpiritualStore } from '@/hooks/useSpiritualState';

const EnergyTracker: React.FC = () => {
  const { energy, maxEnergy } = useSpiritualStore();
  const percentage = (energy / maxEnergy) * 100;

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Spiritual Energy</span>
        <span className="text-lg font-mono text-primary font-bold">{Math.round(energy)}%</span>
      </div>
      <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)',
          }}
        />
      </div>
      <div className="mt-4 flex gap-1 justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i} 
            className={`h-1 w-8 rounded-full transition-colors duration-500 ${
              energy >= (i + 1) * 20 ? 'bg-primary' : 'bg-slate-800'
            }`} 
          />
        ))}
      </div>
    </div>
  );
};

export default EnergyTracker;