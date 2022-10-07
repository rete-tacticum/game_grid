import React, { useContext } from 'react';
import { HackStateContext } from '_contexts/hack';
import { ShowByState } from '_components/misc/ShowByState/ShowByState';
import { HackTraces } from '../HackTraces/HackTraces';
import { HackTraceSolution } from '../HackTraceSolution/HackTraceSolution';
import { BaseComponentProps } from '_interfaces/components/base/BaseComponent';
import { ShowFromCenter } from '_components/misc/ShowFromCenter/ShowFromCenter';

export const ContainGameInfo: React.FC<BaseComponentProps> = ({ className }) => {
  const state = useContext(HackStateContext);

  return (
    <ShowByState condition={state.visible}>
      <div className={className}>
        <ShowFromCenter>
          <HackTraces/>
        </ShowFromCenter>
        <ShowFromCenter>
          <HackTraceSolution/>
        </ShowFromCenter>
      </div>
    </ShowByState>
  )
}
