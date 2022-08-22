import React from 'react';
import {useState, useMemo, useEffect} from 'react';
import { randomDecimal } from 'Helpers/misc.js';
import { HackField } from '../HackField/HackField';
import { HackFieldCell } from '../HackFieldCell/HackFieldCell';
import { nanoid } from 'nanoid';
import { HackContextProvider, HackContext } from '../context';
import { HackInfo } from '../HackInfo/HackInfo';
import styles from './styles.module.scss';
import { HackSolution } from '../HackSolution/HackSolution';


const generateField = (height, width) => {
  return [...Array(height)].map(() => [...Array(width)].map(() => randomDecimal(48, 72).toString(16)));
}

const getPrevious = (index, maxVal) => {
  const result = randomDecimal(0, maxVal);
  return result === index ? getPrevious(index, maxVal) : result;
}

const getBacktrace = (arr, pathLength) => {
  // создает список координат ячеек, которые будут являться решением игры
  const maxHeight = arr.length - 1;
  const maxWidth = arr[0].length - 1;
  const trace = [...Array(pathLength)].reduce((accum, _, idx) => {
    const last = accum[0] || [randomDecimal(0, maxHeight), randomDecimal(0, maxWidth)];
    const newVal = idx % 2 > 0 ? [getPrevious(last[0], maxHeight), last[1]] : [last[0], getPrevious(last[1], maxWidth)];
    accum.unshift(newVal);
    return accum;                                                           
  }, []);

  return trace.map(p => {
    const [row, col] = [...p];
    return arr[row][col];
  });
}


export const Hack = () => {
  const height = 8,
        width = 12,
        tries = 6,
        traceStartLen = 3,
        traceCount = 3;

  const [retrigger, setRetrigger] = useState(false);
  const field = generateField(height, width);
  const mappedField = field.reduce((accum, arr, idxRow) => {
    accum = [...accum, ...arr.map((hexValue, idxCol) => [idxRow, idxCol, hexValue])];
    return accum;
  }, []);

  const generateTraces = (field, start, count) => {
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
    <HackContextProvider addState={startState} key={retrigger}>
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
        <button className={styles.start} onClick={() => setRetrigger(!retrigger)}>RESET GAME</button>
      </div>
    </HackContextProvider>
  )
}

