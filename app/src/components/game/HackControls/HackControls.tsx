import React from 'react';
import { ControlsBar } from '_components/base/ControlsBar/ControlsBar';
import { useDispatchContext } from '_contexts/hack';
import actions from '_contexts/hack/actions';
import { results } from '_interfaces/contexts/constants';
import styles from './styles.module.scss';

export const HackControls: React.FC = () => {
  const dispatch = useDispatchContext();
  const handleStart = () => dispatch({type: actions.INIT});
  const handleReset = () => dispatch({type: actions.END, payload: results.RESET});

  return (
    <ControlsBar className={styles.root}>
      <button className={styles.control} onClick={handleStart}>START HACK</button>
      <button className={styles.control} onClick={handleReset}>ABORT HACK</button>
    </ControlsBar>
  )
}
