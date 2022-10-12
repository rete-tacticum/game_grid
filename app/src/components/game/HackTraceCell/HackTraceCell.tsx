import React from 'react'
import classnames from 'classnames';
import {useContext, useMemo} from 'react';
import { HackStateContext, useDispatchContext } from '_contexts/hack';
import actions from '_contexts/hack/actions';
import styles from './styles.module.scss'
import { HackTraceCellProps } from '_interfaces/components/game/HackGame';
import { getValueFromCoords } from '_helpers/misc';


export const HackTraceCell: React.FC<HackTraceCellProps> = ({ hexCode, highlighted, index, className}) => {
  const state = useContext(HackStateContext);
  const dispatch = useDispatchContext();

  const fieldHighlightOn = () => {
    if (state.moves.step <= 0) {
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
    if (state.moves.step <= 0) {
      dispatch({type: actions.HIGHLIGHT, payload: Array.from(Array(state.size)).map((_, idx) => [idx, 0])});
    }
  }

  return (
    <div
      className={classnames(className, styles.root, {
        [styles.disabled]: state.locked,
        [styles.highlighted]: highlighted
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
