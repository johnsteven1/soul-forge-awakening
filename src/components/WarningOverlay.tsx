import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpiritualStore } from '@/hooks/useSpiritualState';
import { AlertTriangle } from 'lucide-react';

const WarningOverlay: React.FC = () => {
  const { lastDistraction, clearDistraction } = useSpiritualStore();

  return (
    <AnimatePresence>
      {lastDistraction && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={clearDistraction}
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            className="p-8 max-w-md text-center glass-morphism rounded-2xl border-red-500/50"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-500/20 rounded-full">
                <AlertTriangle className="w-12 h-12 text-red-500 animate-pulse" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-red-400">Distraction Detected</h2>
            <p className="text-slate-300 mb-6 italic">
              «"{lastDistraction}"»
            </p>
            <p className="text-sm text-red-400/80 mb-8">
              "These distractions consume the sacrifices you have made and leave your spirit empty."
            </p>
            <button
              className="px-8 py-3 bg-red-950/40 border border-red-500/50 rounded-full text-red-200 hover:bg-red-500/20 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                clearDistraction();
              }}
            >
              Purify Spirit
            </button>
          </motion.div>
          
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{ 
              boxShadow: ["inset 0 0 50px rgba(220, 38, 38, 0.2)", "inset 0 0 150px rgba(220, 38, 38, 0.5)", "inset 0 0 50px rgba(220, 38, 38, 0.2)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WarningOverlay;