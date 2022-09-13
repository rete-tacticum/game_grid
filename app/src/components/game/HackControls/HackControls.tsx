import React from 'react';
import { useDispatchContext } from '_contexts/hack';
import actions from '_contexts/hack/actions';
import styles from './styles.module.scss';

export const HackControls: React.FC = () => {
  const dispatch = useDispatchContext();
  const handleStart = () => dispatch({type: actions.INIT});
  const handleReset = () => dispatch({type: actions.SUCCESS, payload: false});

  return (
    <div className={styles.root}>
      <button className={styles.control} onClick={handleStart}>START HACK</button>
      <button className={styles.control} onClick={handleReset}>ABORT HACK</button>
    </div>
  )
}
