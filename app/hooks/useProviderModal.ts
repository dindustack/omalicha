import { create } from "zustand";

interface ProviderModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProviderModal = create<ProviderModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
