import { create } from 'zustand';

// Zustand store для конвертера валют
const converterStore = create((set) => ({
  usd: '',
  eur: '',
  setUsd: (usd) => set((state) => ({ ...state, usd })),
  setEur: (eur) => set((state) => ({ ...state, eur })),
}));

export default converterStore;
