interface RandomizeTextState {
  text: string
}

interface RandomizeTextAction {
  idx: number,
  type: string,
  initial?: string
}

interface RandomizeTextProps {
  value?: string,
  rate?: number,
  className?: string
}

export type {
  RandomizeTextProps,
  RandomizeTextState,
  RandomizeTextAction
}