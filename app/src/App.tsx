import React, { ReactElement } from 'react';
import { Root } from 'react-dom/client';
import { HackPage } from '_pages/Hack';

const App = (): ReactElement => {
  return (
    <HackPage/>
  );
}

export const renderApp = (root: Root) => {
  return root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}