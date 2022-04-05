import React, { useState, useMemo } from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';


import { ToggleThemeProvider } from './ThemeContext';


function App() {

  return (
    <>
      <ToggleThemeProvider>
        <GlobalStyle />
        <Layout />
      </ToggleThemeProvider>
    </>
  );
};

export default App;
