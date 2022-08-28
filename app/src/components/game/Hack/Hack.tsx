import React, { useContext } from 'react';
import {useState } from 'react';
import { HackField } from '../HackField/HackField';
import { HackFieldCell } from '../HackFieldCell/HackFieldCell';
import { nanoid } from 'nanoid';
import { HackInfo } from '../HackInfo/HackInfo';
import { HackSolution } from '../HackSolution/HackSolution';
import { HackStateContext } from '_contexts/hack';
import styles from './styles.module.scss';

export const HackGame = () => {
  const [retrigger, setRetrigger] = useState(nanoid());
  const [state, _] = useContext(HackStateContext);
  const mappedField = state.field.reduce((
      accum: Array<[number, number, string]>,
      arr: string[],
      idxRow: number
    ) => {
    const mappedRow: Array<[number, number, string]> = arr.map((hexValue, idxCol) => [idxRow, idxCol, hexValue]);
    accum = [...accum, ...mappedRow];
    return accum;
  }, []);

  return (
    <div className={styles.root}>
      <HackSolution/>
      <div className={styles.field}>
        <HackField className={styles.grid}>
          {mappedField.map(item => {
              const [row, col, value] = [...item];
              return <HackFieldCell key={nanoid()}
                                    pos={`${row}:${col}`}
                                    hex={value}
                                    className={styles.cell}
                                    />
            })
          }
        </HackField>
      </div>
      <HackInfo/>
      {/* <button className={styles.start} onClick={handleStart}>START GAME</button> */}
      <button className={styles.start} onClick={() => setRetrigger(nanoid())}>RESET GAME</button>
    </div>
  )
}

