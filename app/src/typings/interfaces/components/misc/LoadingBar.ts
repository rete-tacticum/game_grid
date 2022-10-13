import { BaseComponentProps } from "../base/BaseComponent";

interface LoadingBarProps extends BaseComponentProps {
  color?: string;
  reverse?: boolean;
  stopped?: boolean;
  seconds: number;
}

export type {
  LoadingBarProps
}