import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
  });

  const [cursorEnabled, setCursorEnabled] = useState(() => {
    const saved = localStorage.getItem('portfolio-cursor');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-cursor', JSON.stringify(cursorEnabled));
  }, [cursorEnabled]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCursor = () => {
    setCursorEnabled(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, cursorEnabled, toggleCursor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
