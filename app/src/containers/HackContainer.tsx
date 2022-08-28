import React from 'react';
import { HackContextProvider } from '_contexts/hack/Provider';
import { HackInitialProps } from '_interfaces/contexts/Hack';
import { initState } from '_contexts/hack/features';

interface hasChild {
  children: React.ReactElement
}

export const HackContainer: React.FC<hasChild> = ({children}: hasChild): React.ReactElement => {

  function getParameters():HackInitialProps {
    return {
      width: 12,
      height: 8,
      tries: 4,
      solutionMinLen: 3,
      solutionsCount: 3
    }
  }

  return (
    <HackContextProvider initialState={initState(getParameters())}>
      { children }
    </HackContextProvider>
  )
}
