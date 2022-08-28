import React from 'react';
import { HackGame } from '_components/game/Hack/Hack';
import { HackContainer } from '../containers/HackContainer';
import { Background } from '_components/base/Background/Background';
import { Layout } from '_components/base/Layout/Layout';

export function HackPage(): React.ReactElement {
  return (
    <HackContainer>
      <Layout
        main={<HackGame/>}
        background={<Background/>}
      />
    </HackContainer>
  )
}
