import React from "react";
import { moves, results } from './constants';

type MoveMode = typeof moves[keyof typeof moves];
type GameResult = typeof results[keyof typeof results];


interface HackContextProviderProps {
  getInitialState: () => HackInitialState;
  children: React.ReactNode;
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
  time: number;
  tries: number;
  size: number;
  locked: boolean;
  visible: boolean;
  success?: boolean | null;
  result: GameResult;
  cells: HackFieldCellsState;
  moves: HackFieldMoveState;
  solutions: Array<string[]>;
  solutionMinLen: number;
  solutionsCount: number;
}

type HackInitialPropsType = 'size' | 'tries' | 'time';
interface HackInitialProps extends Pick<HackInitialState, HackInitialPropsType> {
  solutionsCount: number;
  solutionMinLen: number;
};

export type {
  MoveMode,
  GameResult,
  HackInitialState,
  HackInitialProps,
  HackFieldCellsState,
  HackFieldMoveState,
  HackContextProviderProps
}