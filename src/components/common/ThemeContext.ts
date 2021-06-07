import React from 'react';

interface ThemeContextProps {
  mode: 'light' | 'dark';
  toggleMode(): void;
}
const ThemeContext = React.createContext<ThemeContextProps>({ mode: 'dark', toggleMode: () => {} });

export default ThemeContext;
