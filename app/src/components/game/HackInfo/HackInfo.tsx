import React from 'react';
import { useContext } from 'react';
import { HackContext } from '_contexts/hack/Provider';

export const HackInfo = () => {
  const [state, dispatch] = useContext(HackContext);

  return (
    <>
      {state.success === true && <span>win</span>} 
      {state.success === false && <span>lose</span>}
    </>
  )
}
