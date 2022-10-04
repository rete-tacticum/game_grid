import { BaseComponentProps } from '../base/BaseComponent';

interface ShowByStateProps extends BaseComponentProps {
  condition: boolean;
  placeholder?: string;
}

export type {
  ShowByStateProps
}