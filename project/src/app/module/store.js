import { create } from "zustand";

const visibleBunner = create((set) => ({
  currentVisibleBunner: true,
  changeVisibleBunner: () => set(() => ({ currentVisibleBunner: false })),
}));

export const useBunnerStore = {
  visibleBunner,
};
