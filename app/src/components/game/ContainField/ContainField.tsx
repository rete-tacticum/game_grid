import React, { useMemo, useContext } from 'react';
import { HackStateContext, useDispatchContext } from '_contexts/hack';
import { HackField } from '_components/game/HackField/HackField';
import { ShowByState } from '_components/misc/ShowByState/ShowByState';
import { ShowFromCenter } from '_components/misc/ShowFromCenter/ShowFromCenter';
import { Timer } from '_components/misc/Timer/Timer';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';
import actions from '_contexts/hack/actions';


export const ContainField: React.FC<BaseComponentProps> = ({ className }) => {
  const dispatch = useDispatchContext();
  const state = useContext(HackStateContext);
  const locked = state.locked;
  const visible = state.visible;

  const loseGame = () => dispatch({type: actions.END, payload: false});

  return useMemo(() => (
    <ShowByState condition={visible} placeholder={'ready to get backtraces'}>
      <ShowFromCenter>
        <>
          <HackField className={className}/>
          <ShowByState condition={locked} placeholder={'breaching protocol ready'}>
            <Timer seconds={100} onEnd={loseGame}/>
          </ShowByState>
        </>
      </ShowFromCenter>
    </ShowByState>
  ), [visible, locked])
}
