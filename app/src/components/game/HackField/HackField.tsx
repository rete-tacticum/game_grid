import React, { useCallback, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { HackStateContext, useDispatchContext } from '_contexts/hack';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';
import actions from '_contexts/hack/actions';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { ContainFieldCell } from '../ContainFieldCell/ContainFieldCell';
import { results } from '_interfaces/contexts/constants';


export const HackField: React.FC<BaseComponentProps> = ({className}) => {
  const state = useContext(HackStateContext);
  const dispatch = useDispatchContext();

  const fieldElement = useCallback((focusElement: HTMLDivElement) => {
    if (focusElement) focusElement.focus();
  }, [])

  const mappedField = state.field.reduce((
      accum: Array<[number, number, string]>,
      arr: string[],
      idxRow: number
    ) => {
    const mappedRow: Array<[number, number, string]> = arr.map((hexValue, idxCol) => [idxRow, idxCol, hexValue]);
    accum = [...accum, ...mappedRow];
    return accum;
  }, []);

  const handleControls = (e: React.KeyboardEvent) => {
    if (!state.locked) dispatch({type: actions.LOCK, payload: true});
    dispatch({type: actions.MOVE, payload: e.key});
  }

  return (
      <div className={classnames(styles.root, className, {
        [styles.ignored]: state.result !== results.NONE
      })}
        tabIndex={1}
        ref={fieldElement}
        style={{ grid: `repeat(${state.size}, auto) / repeat(${state.size}, auto)` }}
        onKeyDown={handleControls}>
          {mappedField.map(item => {
            const [row, col, value] = [...item];
            return <ContainFieldCell key={nanoid()}
              pos={`${row}:${col}`}
              hex={value}
              className={styles.cell}
            />
          })
        }
      </div>
  )
}