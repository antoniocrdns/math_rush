import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

// Proveedor del contexto que envolverá toda la app
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // Por defecto el modo es claro

  // Cambiar entre modo oscuro y claro
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
