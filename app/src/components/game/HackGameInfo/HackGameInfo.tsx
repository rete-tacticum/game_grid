import React, { useContext } from 'react';
import { HackStateContext } from '_src/contexts/hack';
import { ShowByState } from '_src/components/misc/ShowByState/ShowByState';
import { HackTraces } from '../HackTraces/HackTraces';
import { HackTraceSolution } from '../HackTraceSolution/HackTraceSolution';

export const HackGameInfo: React.FC = () => {
  const state = useContext(HackStateContext);

  return (
    <ShowByState condition={state.visible} placeholder={'...calculating backtraces'}>
      <HackTraces/>
      <HackTraceSolution/>
    </ShowByState>
  )
}
