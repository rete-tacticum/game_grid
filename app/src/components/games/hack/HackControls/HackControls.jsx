import React from 'react';
import {useContext} from 'react';
import { HackDispatchContext } from 'Contexts/hack';
import actions from 'Contexts/hack/actions';
import styles from './styles.module.scss';

export const HackControls = () => {
  const [state, dispatch] = useContext(HackDispatchContext);
  const handleStart = () => dispatch({type: actions.INIT});
  const handleReset = () => dispatch({type: actions.RESET});

  return (
    <div className={styles.root}>
      <button className={styles.control} onClick={handleStart}>START GAME</button>
      <button className={styles.control} onClick={handleReset}>RESET GAME</button>
    </div>
  )
}
