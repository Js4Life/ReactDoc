import React from "react"

export const themes = {
  light : {
    foreground : '#000000',
    background:'#eeeeee'
  },
  dark: {
    foreground: '#0000000',
    background:  '#eeeeee'
  }
}

export const ThemeContext = React.createContext({ theme : themes.dark , toogleTheme:()=>{} } )