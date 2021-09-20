import create from "zustand";
import { CodeResult } from "./hooks/codeHooks";

export type MessagePayload = {
  message: string;
  type: "error" | "warning" | "info";
  messages?: string[];
};

export type Mode = "editing" | "running";

export type StoreState = {
  mode: Mode;
  code: string | undefined;
  result: CodeResult<any> | undefined;
  running: boolean;
  setCode: (code: string | undefined) => void;
  setMode: (mode: Mode) => void;
  setResult: (result: CodeResult<any> | undefined) => void;
  setRunning: (running: boolean) => void;
};

export const useStore = create<StoreState>((set) => ({
  code: undefined,
  result: undefined,
  running: false,
  mode: "running",
  setCode: (code: string | undefined) => set((state) => ({ code })),
  setMode: (mode: Mode) => set((state) => ({ mode })),
  setResult: (result: CodeResult<any> | undefined) =>
    set((state) => ({ result })),
  setRunning: (running: boolean) => set((state) => ({ running })),
}));
