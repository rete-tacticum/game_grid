import React, { useContext, useMemo } from 'react';
import { ControlsBar } from '_components/base/ControlsBar/ControlsBar';
import { HackStateContext, useDispatchContext } from '_contexts/hack';
import actions from '_contexts/hack/actions';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';
import { LoadingBar } from '_components/misc/LoadingBar/LoadingBar';
import { results } from '_interfaces/contexts/constants';
import styles from './styles.module.scss';
import classnames from 'classnames';

export const HackControls: React.FC<BaseComponentProps> = ({className}) => {
  const state = useContext(HackStateContext);
  const dispatch = useDispatchContext();
  const handleStart = () => dispatch({type: actions.INIT});
  const handleReset = () => dispatch({type: actions.END, payload: results.RESET});

  return useMemo(() => (
    <ControlsBar className={classnames(styles.root, className)}>
      <button className={styles.control} onClick={handleStart} disabled={state.result !== results.NONE}>START HACK</button>
      <button className={styles.control} onClick={handleReset} disabled={state.result !== results.NONE}>ABORT HACK</button>
      {state.locked && state.result === null && <LoadingBar className={styles.loading} seconds={state.time} reverse={true}/>}
    </ControlsBar>
  ), [state.locked, state.result])
}
