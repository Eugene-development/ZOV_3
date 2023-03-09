"use client";
import { useMyStore } from "../store";
const { bears } = useMyStore;

export default function Zustandtest() {
  const { count } = bears();

  return (
    <div>
      <span>{count}</span>
    </div>
  );
}
