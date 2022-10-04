import React from 'react';
import {useContext, useMemo} from 'react';
import {nanoid} from 'nanoid';
import { HackTrace } from '../HackTrace/HackTrace';
import { HackStateContext } from '_contexts/hack';
import styles from './styles.module.scss';
import { RandomizeText } from '_components/misc/RandomizeText/RandomizeText';

const HackTraces: React.FC = () => {
  const state = useContext(HackStateContext);

  return (
    <>
      {
      state.visible ?
      <div className={styles.root}>
        {state.solutions.map(hexList => <HackTrace key={nanoid()} trace={hexList}/>)}
      </div>
      : 
      <RandomizeText value="awaiting solutions..." rate={280}/>
      }
    </>
  )
}

export { HackTraces };
