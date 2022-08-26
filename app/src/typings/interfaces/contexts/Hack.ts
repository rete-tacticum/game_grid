type MoveMode = 'horizontal' | 'vertical';


interface HackFieldCellsState {
  selected: [number, number][],
  highlighted: string[]
}

interface HackFieldMoveState {
  step: number;
  col: number;
  row: number;
  mode: MoveMode;
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

export type {
  MoveMode,
  HackInitialState,
  HackFieldCellsState,
  HackFieldMoveState
}