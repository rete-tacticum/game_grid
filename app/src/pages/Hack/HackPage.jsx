import React from 'react';
import { Layout } from 'Components/base/Layout/Layout';
import {Background} from 'Components/base/Background/Background';
import { HackContainer } from '../../containers/Hack';
import { Hack } from '../../components/games/hack/Hack/Hack';

export const HackPage = ({className}) => {
  return (
    <HackContainer>
      <Layout
        main={<Hack/>}
        Background={<Background/>}
      />
    </HackContainer>
  )
}
