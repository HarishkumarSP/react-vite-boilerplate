import { create } from 'zustand';

// Define the type for your global state
interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Create the global store
const useCountStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export { useCountStore };
