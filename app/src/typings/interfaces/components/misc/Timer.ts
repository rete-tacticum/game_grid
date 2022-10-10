import { BaseComponentProps } from "../base/BaseComponent";

interface TimerProps extends BaseComponentProps {
  seconds: number;
  blinkOn?: number;
  onEnd: () => void;
}

export type {
  TimerProps
}