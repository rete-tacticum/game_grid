import { HackInitialState } from '_interfaces/contexts/Hack';
import { BaseComponentProps } from '../base/BaseComponent';

type HackFieldProps = Pick<HackInitialState, 'size' | 'success'> & BaseComponentProps;
type ChildlessComponent = Omit<BaseComponentProps, 'children'>;

interface HackTraceProps extends ChildlessComponent {
  trace: string[];
}

interface HackTraceCellProps extends ChildlessComponent {
  hexCode: string,
  index: number
}

interface HackFieldCellContainerProps extends ChildlessComponent {
  hex: string;
  pos: string;
}

interface HackFieldCellProps extends ChildlessComponent {
  highlighted: boolean;
  selected: boolean;
  hex: string;
}

export type {
  HackFieldProps,
  HackTraceProps,
  HackTraceCellProps,
  HackFieldCellProps,
  HackFieldCellContainerProps
}