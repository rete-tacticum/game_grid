import React, {useContext, useMemo, useEffect, useState} from 'react';
import { LoadingBar } from '_components/misc/LoadingBar/LoadingBar';
import { ShowByState } from '_components/misc/ShowByState/ShowByState';
import { Timer } from '_components/misc/Timer/Timer';
import { HackStateContext, useDispatchContext } from '_contexts/hack';
import { ControlsBar } from '_components/base/ControlsBar/ControlsBar';
import actions from '_contexts/hack/actions';
import { results } from '_interfaces/contexts/constants';
import styles from './styles.module.scss';
import classnames from 'classnames';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';


export const HackHeader: React.FC<BaseComponentProps> = ({className}) => {
  const dispatch = useDispatchContext();
  const state = useContext(HackStateContext);

  const loseGame = () => dispatch({type: actions.END, payload: results.FAIL});
  const getMessage = (result: string | null) => {
    switch(result) {
      case results.FAIL:
        return 'breach failed, incident will be reported'
      case results.SUCCESS:
        return `ICE breached. Exploited ${state.hackPower} attack vectors from possible ${state.solutions.length}`
      case results.RESET:
        return 'resetting game'
      default:
        return 'breaching'
    }
  }

  return useMemo(() => (
    <ControlsBar className={classnames(styles.root, className)}>
      {state.visible
      ? <ShowByState condition={state.locked} placeholder={'breaching protocol acquired'}>
          {state.result === null && <Timer className={styles.timer} seconds={state.time} blinkOn={10} onEnd={loseGame}/>}
          <span>{getMessage(state.result)}</span>
          {state.result === null && <LoadingBar className={styles.loading} seconds={state.time} reverse={true}/>}
        </ShowByState>
      : <span>system mode</span>}
    </ControlsBar>
  ), [state.locked, state.visible, state.result])
}
