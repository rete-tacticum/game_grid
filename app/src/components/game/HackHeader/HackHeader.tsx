import React, {useContext, useMemo} from 'react';
import { ShowByState } from '_components/misc/ShowByState/ShowByState';
import { Timer } from '_components/misc/Timer/Timer';
import { HackStateContext, useDispatchContext } from '_contexts/hack';
import actions from '_contexts/hack/actions';
import { results } from '_interfaces/contexts/constants';
import styles from './styles.module.scss';


export const HackHeader: React.FC = () => {
  const dispatch = useDispatchContext();
  const state = useContext(HackStateContext);

  const loseGame = () => dispatch({type: actions.END, payload: results.FAIL});

  return useMemo(() => (
    <div className={styles.root}>
      {state.visible
      ? <ShowByState condition={state.locked} placeholder={'breaching protocol acquired'}>
          <Timer className={styles.timer} seconds={100} onEnd={loseGame}/>
        </ShowByState>
      : <span>system mode</span>}
    </div>
  ), [state.locked, state.visible])
}
