import { create } from "zustand";

const bears = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const useMyStore = {
  bears,
};
