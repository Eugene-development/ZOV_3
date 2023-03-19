"use client";
import { useMyStore } from "../store";
const { bears } = useMyStore;

export default function Zustandtest() {
  const { inc } = bears();

  return (
    <div>
      <button onClick={inc}>one up</button>
    </div>
  );
}
