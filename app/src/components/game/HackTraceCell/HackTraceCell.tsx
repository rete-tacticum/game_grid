import React from 'react'
import classnames from 'classnames';
import {useContext, useMemo} from 'react';
import { HackStateContext, useDispatchContext } from '_contexts/hack';
import actions from '_contexts/hack/actions';
import styles from './styles.module.scss'
import { HackTraceCellProps } from '_interfaces/components/game/HackGame';

const getValueFromCoords = (field: string[][], [x, y]: [number, number]): string => field[x][y];

export const HackTraceCell: React.FC<HackTraceCellProps> = ({ hexCode, index, className}: HackTraceCellProps) => {
  const state = useContext(HackStateContext);
  const dispatch = useDispatchContext();

  const isHighlighted = useMemo(() => {
    return state.cells.selected.map(
      (coords: [number, number]) => getValueFromCoords(state.field, coords)
    ).includes(hexCode);
  }, [state.cells.selected])

  const fieldHighlightOn = () => {
    if (state.moves.step <= 0 && !isHighlighted) {
      const filtered = state.field.reduce((accum: [number, number][], row: string[], rowIdx: number) => {
          row.forEach((cell, colIdx) => {
            if (cell === hexCode) {
              accum = [...accum, [rowIdx, colIdx]];
            }
          })
          return accum;
        }, []);
      dispatch({type: actions.HIGHLIGHT, payload: filtered});
    }
  }

  const fieldHighlightOff = () => {
    if (state.moves.step <= 0 && isHighlighted) {
      dispatch({type: actions.HIGHLIGHT, payload: []});
    }
  }

  return (
    <div
      className={classnames(className, styles.root, {
        [styles.disabled]: state.locked,
        [styles.highlighted]: isHighlighted
      })}
      tabIndex={index + 1}
      onMouseEnter={fieldHighlightOn}
      onMouseLeave={fieldHighlightOff}
      onFocus={fieldHighlightOn}
      onBlur={fieldHighlightOff}
    >
      {hexCode}
    </div>
  )
}
