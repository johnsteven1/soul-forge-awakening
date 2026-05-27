import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface WisdomScrollProps {
  quote: string;
  author?: string;
}

const WisdomScroll: React.FC<WisdomScrollProps> = ({ quote, author = "Ancient Spirits" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative p-8 glass-morphism rounded-2xl overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Quote size={80} />
      </div>
      
      <div className="relative z-10">
        <p className="text-xl md:text-2xl font-serif italic text-slate-200 leading-relaxed mb-6">
          «"{quote}"»
        </p>
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-primary/40" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-bold">
            {author}
          </span>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </motion.div>
  );
};

export default WisdomScroll;