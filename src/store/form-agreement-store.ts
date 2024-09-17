import { create } from 'zustand';

interface AgreementStore {
  hasAgreed: boolean;
  setHasAgreed: (agreed: boolean) => void;
}

const useAgreementStore = create<AgreementStore>((set) => ({
  hasAgreed: false,
  setHasAgreed: (agreed) => set({ hasAgreed: agreed }),
}));

export default useAgreementStore;
