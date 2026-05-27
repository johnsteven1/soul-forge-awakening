import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SpiritRank = 'Calm Spirit' | 'Light Spirit' | 'Ancient Spirit' | 'Celestial Spirit' | 'Divine Spirit';

interface SpiritualState {
  energy: number;
  maxEnergy: number;
  rank: SpiritRank;
  lastDistraction: string | null;
  unlockedSongs: string[];
  unlockedRealms: string[];
  addEnergy: (amount: number) => void;
  subtractEnergy: (amount: number) => void;
  triggerDistraction: (message: string) => void;
  clearDistraction: () => void;
  unlockSong: (id: string) => void;
  resetProgress: () => void;
}

const RANKS: SpiritRank[] = ['Calm Spirit', 'Light Spirit', 'Ancient Spirit', 'Celestial Spirit', 'Divine Spirit'];

export const useSpiritualStore = create<SpiritualState>()(
  persist(
    (set, get) => ({
      energy: 0,
      maxEnergy: 100,
      rank: 'Calm Spirit',
      lastDistraction: null,
      unlockedSongs: ['song-1'],
      unlockedRealms: ['physical-realm'],
      addEnergy: (amount) => {
        const { energy, maxEnergy } = get();
        const newEnergy = Math.min(energy + amount, maxEnergy);
        const rankIndex = Math.min(Math.floor(newEnergy / 20), RANKS.length - 1);
        set({ energy: newEnergy, rank: RANKS[rankIndex] });
      },
      subtractEnergy: (amount) => {
        const { energy } = get();
        const newEnergy = Math.max(energy - amount, 0);
        const rankIndex = Math.min(Math.floor(newEnergy / 20), RANKS.length - 1);
        set({ energy: newEnergy, rank: RANKS[rankIndex] });
      },
      triggerDistraction: (message) => {
        set({ lastDistraction: message });
        get().subtractEnergy(5);
      },
      clearDistraction: () => set({ lastDistraction: null }),
      unlockSong: (id) => set((state) => ({ unlockedSongs: [...state.unlockedSongs, id] })),
      resetProgress: () => set({ energy: 0, rank: 'Calm Spirit', lastDistraction: null, unlockedSongs: ['song-1'] }),
    }),
    {
      name: 'mystic-awakening-state',
    }
  )
);