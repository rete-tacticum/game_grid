import React from 'react';
import { useContext } from 'react';
import { HackContext } from '../context';

export const HackInfo = () => {
  const [state, dispatch] = useContext(HackContext);

  return (
    <>
      {state.success === true && <span>win</span>} 
      {state.success === false && <span>lose</span>}
    </>
  )
}
