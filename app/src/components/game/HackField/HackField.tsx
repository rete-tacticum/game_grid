import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { HackStateContext, useDispatchContext } from '_contexts/hack';
import { HackFieldCell } from '../HackFieldCell/HackFieldCell';
import actions from '_contexts/hack/actions';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';
import { RandomizeText } from '_components/misc/RandomizeText/RandomizeText';


export const HackField: React.FC<BaseComponentProps> = ({className}) => {
  const state = useContext(HackStateContext);
  const dispatch = useDispatchContext();

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
    dispatch({type: actions.LOCK, payload: true});
    dispatch({type: actions.MOVE, key: e.key});
  }

  return (
    <>
      {
        state.visible ?
        <div className={classnames(styles.root, className, {
          [styles.ignored]: state.success !== null
        })}
          tabIndex={1}
          style={{ grid: `repeat(${state.size}, auto) / repeat(${state.size}, auto)` }}
          onKeyDown={handleControls}>
            {mappedField.map(item => {
              const [row, col, value] = [...item];
              return <HackFieldCell key={nanoid()}
                pos={`${row}:${col}`}
                hex={value}
                className={styles.cell}
              />
            })
          }
        </div> 
        :
        <RandomizeText value="awaiting field generation..." rate={300}/>
      }
    </>
  )
}