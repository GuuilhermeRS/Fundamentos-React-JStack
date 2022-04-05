import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './styles/themes';


export const ThemeContext = createContext('dark');

export function ToggleThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider
        value={{
          theme,
          onToggleTheme: handleToggleTheme,
        }}
      >
        {props.children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}