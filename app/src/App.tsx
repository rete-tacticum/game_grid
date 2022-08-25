import React, { ReactElement } from 'react';
import { Root } from 'react-dom/client';
import { Background } from './components/base/Background/Background';
import { Layout } from './components/base/Layout/Layout';
import { Hack } from './components/game/Hack/Hack';

const App = (): ReactElement => {
  return (
    <Layout
      // main={<Hack/>}
      background={<Background/>}
    />
  );
}

export const renderApp = (root: Root) => {
  return root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}