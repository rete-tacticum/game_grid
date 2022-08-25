interface HackFieldCellsState {
  selected?: string[],
  highlighted?: string[]
}

interface HackFieldMoveState {
  step: number,
  col: number,
  row: number,
  mode: string
}

interface HackInitialState {
  field?: Array<string[]>;
  tries: number;
  width: number;
  height: number;
  locked: boolean;
  success?: boolean | null;
  cells: HackFieldCellsState;
  moves: HackFieldMoveState;
  solutions: Array<string[]>;
  solutionMinLen: number;
  solutionsCount: number;
}

interface HackAdditionalStateProps {
  width: number;
  height: number;
  tries: number;
  solutionMinLen: number;
  solutionsCount: number;
}

export type {
  HackInitialState,
  HackAdditionalStateProps,
}