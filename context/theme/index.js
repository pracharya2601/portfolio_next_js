import {useState, useEffect} from 'react';
import themecontext from './themecontext';
import theme from './theme';

import {ThemeProvider} from 'styled-components';
import GlobalStyles from './GlobalStyles';

const GlobalTheme = ({children}) => {
  const [tm,  setTm] = useState('light');
  const [userTheme, setUserTheme] = useState(theme['light']);

  useEffect(() => {
    let mounted = true;
    const localTheme = window.localStorage.getItem('theme');
    if(!localTheme) {
      const darkOs = window.matchMedia("prefers-color-schema").matches ? "light" : "dark";
      setUserTheme(theme[darkOs]);
      setTm(darkOs);
      window.localStorage.setItem('theme', darkOs);
    } else {
      setUserTheme(theme[localTheme]);
      setTm(localTheme);
    }
    return () => {
      mounted = false;
    }
  }, [])

  const changeTheme = (theme) => {
    alert("Changing theme")
  }

  return(
    <themecontext.Provider
      value={{
        theme: tm,
        changeTheme
      }}
    >
      <ThemeProvider theme={userTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </themecontext.Provider>
  )
}

export default GlobalTheme;