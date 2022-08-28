import { HackInitialState } from '_interfaces/contexts/Hack';
import { BaseComponentProps } from '../base/BaseComponent';

type HackFieldProps = Pick<HackInitialState, 'height' | 'width' | 'success'> & BaseComponentProps;
type ChildlessComponent = Omit<BaseComponentProps, 'children'>;

interface HackTraceProps extends ChildlessComponent {
  trace: string[];
}

interface HackTraceCellProps extends ChildlessComponent {
  hexCode: string,
  index: number
}

interface HackFieldCellProps extends ChildlessComponent {
  hex: string;
  pos: string;
}

export type {
  HackFieldProps,
  HackTraceProps,
  HackTraceCellProps,
  HackFieldCellProps
}