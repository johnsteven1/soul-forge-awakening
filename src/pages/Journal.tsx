import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PenTool, Plus, Book, Calendar, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Entry {
  id: string;
  date: string;
  content: string;
  mood: string;
}

const Journal: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>(() => {
    const saved = localStorage.getItem('spirit-journal');
    return saved ? JSON.parse(saved) : [];
  });
  const [isWriting, setIsWriting] = useState(false);
  const [newEntry, setNewEntry] = useState('');

  const saveEntry = () => {
    if (!newEntry.trim()) return;
    
    const entry: Entry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      content: newEntry,
      mood: 'Peaceful'
    };

    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem('spirit-journal', JSON.stringify(updated));
    setNewEntry('');
    setIsWriting(false);
    toast.success("Reflection recorded in the Ancient Scrolls");
  };

  const deleteEntry = (id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem('spirit-journal', JSON.stringify(updated));
    toast.info("Reflection faded into the void");
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-sm uppercase tracking-[0.5em] text-primary font-bold">Wisdom Keep</h2>
            <h1 className="text-4xl font-bold">Spirit Journal</h1>
          </div>
          
          <button
            onClick={() => setIsWriting(true)}
            className="p-4 bg-primary rounded-full text-white shadow-lg shadow-primary/20 hover:scale-105 transition-all"
          >
            <Plus size={24} />
          </button>
        </header>

        <AnimatePresence>
          {isWriting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-morphism rounded-3xl p-8 border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <PenTool className="text-primary" size={20} />
                <h3 className="text-xl font-bold">Record Reflection</h3>
              </div>
              
              <textarea
                autoFocus
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="What has the spirit whispered to you today?"
                className="w-full h-48 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-slate-300 focus:outline-none focus:border-primary/50 transition-colors resize-none font-serif text-lg italic"
              />
              
              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={() => setIsWriting(false)}
                  className="px-6 py-2 text-slate-400 hover:text-white transition-colors"
                >
                  Discard
                </button>
                <button
                  onClick={saveEntry}
                  className="px-8 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary/80 transition-all"
                >
                  Seal Reflection
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6">
          {entries.length === 0 && !isWriting ? (
            <div className="text-center py-20 glass-morphism rounded-3xl opacity-50 border-dashed border-2 border-white/5">
              <Book size={48} className="mx-auto mb-4 text-slate-600" />
              <p className="text-slate-500 font-serif italic">The scrolls are currently empty.</p>
              <p className="text-xs uppercase tracking-widest mt-2">Begin your reflection</p>
            </div>
          ) : (
            entries.map((entry) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group glass-morphism rounded-3xl p-8 hover:bg-white/5 transition-all border-white/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 text-slate-500">
                    <Calendar size={14} />
                    <span className="text-xs font-bold uppercase tracking-widest">{entry.date}</span>
                  </div>
                  <button 
                    onClick={() => deleteEntry(entry.id)}
                    className="opacity-0 group-hover:opacity-100 p-2 text-slate-600 hover:text-red-400 transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-lg text-slate-300 font-serif leading-relaxed italic">
                  "{entry.content}"
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Journal;