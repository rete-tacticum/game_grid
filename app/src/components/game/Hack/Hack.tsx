import React from 'react';
import {useState } from 'react';
import { HackField } from '../HackField/HackField';
import { HackFieldCell } from '../HackFieldCell/HackFieldCell';
import { nanoid } from 'nanoid';
import { HackContextProvider } from '_contexts/hack';
import { HackInfo } from '../HackInfo/HackInfo';
import styles from './styles.module.scss';
import { HackSolution } from '../HackSolution/HackSolution';
import { generateField, getBacktrace } from '_contexts/hack/features';


export const Hack = () => {
  const height = 8,
        width = 12,
        tries = 6,
        traceStartLen = 3,
        traceCount = 3;

  const [retrigger, setRetrigger] = useState(nanoid());
  const field = generateField(height, width);
  const mappedField = field.reduce((
      accum: Array<[number, number, string]>,
      arr: string[],
      idxRow: number
    ) => {
    const mappedRow: Array<[number, number, string]> = arr.map((hexValue, idxCol) => [idxRow, idxCol, hexValue]);
    accum = [...accum, ...mappedRow];
    return accum;
  }, []);

  const generateTraces = (field: Array<string[]>, start: number, count: number): Array<string[]> => {
    const fullTrace = getBacktrace(field, start + count - 1);
    const traceList = [fullTrace];
    if (count > 1) {
      [...Array(count - 1)].forEach((_, idx) => traceList.unshift(fullTrace.slice(idx + 1)));
    }
    return traceList;
  }

  const startState = {
    'width': width,
    'height': height,
    'field': field,
    'tries': tries,
    'solutions': generateTraces(field, traceStartLen, traceCount)
  }

  return (
    <HackContextProvider settings={startState} key={retrigger}>
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
    </HackContextProvider>
  )
}

