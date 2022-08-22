import React from 'react';
import {useContext, useMemo} from 'react';
import {nanoid} from 'nanoid';
import { HackContext } from '../context';
import { HackTrace } from '../HackTrace/HackTrace';
import styles from './styles.module.scss';

const HackSolution = () => {
  const [state, dispatch] = useContext(HackContext);

  return (
    <div className={styles.root}>
      {state.solutions.map(hexList => <HackTrace key={nanoid()} trace={hexList}/>)}
      <div className={styles.solution}>
        {state.cells.selected.map(e => <span key={nanoid()}>{state.field[e[0]][e[1]]}</span>)}
      </div>
    </div>
  )
}

export { HackSolution };
