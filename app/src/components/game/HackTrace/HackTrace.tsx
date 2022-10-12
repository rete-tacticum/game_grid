import React, { useContext, useMemo } from 'react';
import {nanoid} from 'nanoid';
import classnames from 'classnames';
import { HackTraceCell } from '../HackTraceCell/HackTraceCell';
import { HackTraceProps } from '_interfaces/components/game/HackGame';
import styles from './styles.module.scss';
import { HackStateContext } from '_contexts/hack';
import { getValueFromCoords } from '_helpers/misc';

const HackTrace: React.FC<HackTraceProps> = ({trace, className}) => {
  const state = useContext(HackStateContext);
  const hexValues = useMemo(() => {
    return state.cells.selected.map((coords: [number, number]) => getValueFromCoords(state.field, coords));
  }, [state.cells.selected])

  const intersection = hexValues.reduce((accum: string[], hex: string, idx: number) => {
    if (trace.includes(hex)) {
      const sequence = hexValues.slice(idx,);
      accum = trace.join('').includes(sequence.join('')) ? [...accum, ...sequence] : accum;
    }
    return accum; 
  }, [])

  console.log(intersection)

  return (
    <div className={classnames(styles.root, className)}>
    {
      trace.map((hexCode, idx) => {
        return <HackTraceCell key={nanoid()} hexCode={hexCode} index={idx} highlighted={intersection.indexOf(hexCode) === idx}/>
      })
    }
    </div>
  )
}

export { HackTrace };