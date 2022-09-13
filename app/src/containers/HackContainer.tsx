import React from 'react';
import { HackContextProvider } from '_contexts/hack/Provider';
import { HackInitialProps, HackInitialState } from '_interfaces/contexts/Hack';
import { initState } from '_contexts/hack/features';

interface hasChild {
  children: React.ReactElement
}

export const HackContainer: React.FC<hasChild> = ({children}: hasChild): React.ReactElement => {

  function getParameters():HackInitialProps {
    return {
      size: 6, 
      tries: 7,
      solutionMinLen: 3,
      solutionsCount: 3
    }
  }

  const getInitial = (): HackInitialState => initState(getParameters());

  return (
    <HackContextProvider getInitialState={getInitial}>
      { children }
    </HackContextProvider>
  )
}
