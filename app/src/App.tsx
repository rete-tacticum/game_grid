import React from 'react';

const App = () => {
  return (
    <h1>it works</h1>
  );
}

export const renderApp = (root: any) => {
  return root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}