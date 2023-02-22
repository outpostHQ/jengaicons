import { createContext, ReactNode, useEffect, useLayoutEffect, useState } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

export const CPThemeContext = createContext({
  theme: 'dark',
  switchTheme: () => {},
  componentMounted: false,
});

const CPThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeString, setThemeString] = useLocalStorage('theme', 'light');
  const [componentMounted, setComponentMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(themeString);

  useLayoutEffect(() => {
    if (window.localStorage.getItem('theme') == null) {
      const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      setTheme(currentTheme);
      document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    setComponentMounted(true);
  }, []);

  function removeTransitions() {
    const css = document.createElement('style');
    css.appendChild(
      document.createTextNode(
        `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
      ),
    );
    document.head.appendChild(css);
    return css;
  }

  function addTransitions(css: HTMLStyleElement) {
    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  }

  function switchTheme() {
    setTheme((i) => {
      const node = removeTransitions();
      document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
      setThemeString(i === 'dark' ? 'light' : 'dark');
      addTransitions(node);
      return i === 'dark' ? 'light' : 'dark';
    });
  }

  return (
    <CPThemeContext.Provider value={{ theme, switchTheme, componentMounted }}>
      {children}
    </CPThemeContext.Provider>
  );
};

export default CPThemeProvider;
