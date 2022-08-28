import React from 'react';
import { useContext } from 'react';
import { HackStateContext } from '_contexts/hack';

export const HackInfo: React.FC = () => {
  const state = useContext(HackStateContext);

  return (
    <>
      {state.success === true && <span>win</span>} 
      {state.success === false && <span>lose</span>}
    </>
  )
}
