import { create } from 'zustand';

interface LoadingState {
  isOpen: boolean;
  openLoading: () => void;
  closeLoading: () => void;
}

const useLoadingCompomentStore = create<LoadingState>((set) => ({
  isOpen: false,
  openLoading: () => set({ isOpen: true }),
  closeLoading: () => set({ isOpen: false }),
}));

export default useLoadingCompomentStore;
