import React from 'react'

export const themes = {
  light : {
    foreground : '#000000',
    background:'orange'
  },
  dark: {
    foreground: '#0000000',
    background:  'yellow'
  }
}

export const ThemeContext = React.createContext({
  theme: themes.dark , toogleTheme:()=>{}
})