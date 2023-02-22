import { useContext } from 'react';

import { CPThemeContext } from '../context/CPThemeProvider';

export const useTheme = () => {
  const { theme } = useContext(CPThemeContext);
  return theme;
};
