import { create } from "zustand";

const visible = create((set) => ({
  formMeasurement: 1,
  change: () => set(() => ({ formMeasurement: true })),
}));

export const useMyStore = {
  visible,
};
