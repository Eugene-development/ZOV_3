import { create } from "zustand";

const visible = create((set) => ({
  visibleBunner: true,
  changeVisibleBunner: () => set(() => ({ visibleBunner: false })),
}));

export const useBunnerStore = {
  visible,
};
