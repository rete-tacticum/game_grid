import React from 'react'
import classnames from 'classnames';
import {useContext, useMemo} from 'react';
import { HackContext } from '../../../context';
import actions from '../../../context/actions';
import styles from './styles.module.scss'

const getValueFromCoords = (field, [x, y]) => field[x][y];

export const HackTraceCell = ({ hexCode, index, className}) => {
  const [state, dispatch] = useContext(HackContext);
  const isHighlighted = useMemo(() => {
    return state.cells.selected.map((coords) => getValueFromCoords(state.field, coords)).includes(hexCode);
  }, [state.cells.selected])

  const fieldHighlightOn = () => {
    if (state.step <= 0 && !isHighlighted) {
      const filtered = state.field.reduce((accum, row, rowIdx) => {
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
    if (state.step <= 0 && isHighlighted) {
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
