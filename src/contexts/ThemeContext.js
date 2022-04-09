import React, {createContext, useState} from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };
  return (
    <div>
      <ThemeContext.Provider value = {{theme, setTheme}}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  )
};

export {themes, ThemeContext, ThemeContextProvider};