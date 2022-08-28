import React from "react";

type MoveMode = 'horizontal' | 'vertical';

interface HackContextProviderProps {
  initialState: HackInitialState,
  children: React.ReactElement
}

interface HackFieldCellsState {
  selected: [number, number][],
  highlighted: [number, number][]
}

interface HackFieldMoveState {
  step: number;
  col: number;
  row: number;
  mode: MoveMode;
}

interface HackInitialState {
  field: Array<string[]>;
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

type HackInitialPropsType = 'width' | 'height' | 'tries';
interface HackInitialProps extends Pick<HackInitialState, HackInitialPropsType> {
  solutionsCount: number;
  solutionMinLen: number;
};

export type {
  MoveMode,
  HackInitialState,
  HackInitialProps,
  HackFieldCellsState,
  HackFieldMoveState,
  HackContextProviderProps
}