import { BaseComponentProps } from "../base/BaseComponent";

interface TimerProps extends BaseComponentProps {
  seconds: number;
  onEnd: () => void;
}

export type {
  TimerProps
}