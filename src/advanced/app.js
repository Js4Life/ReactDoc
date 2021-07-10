import React from 'react'
import { ThemeContext, themes } from './theme-context'
import ThemeButton from './themed-button'
import ThemeTogglerButton from './theme-toggler-button';

function ToolBar(props) {
  return (
    <ThemeButton onClick={props.changeTheme}></ThemeButton>
  )
}


class AppContext extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme : themes.light
    }

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:state.theme === themes.dark ? themes.light : themes.dark
      }))
    }

  }

  

  // render() {
  //   return (

  //       {/* <ThemeContext.Provider value={this.state.theme}>
  //           <ToolBar changeTheme={this.toggleTheme} />          
  //       </ThemeContext.Provider>
  //       <section>
  //         <ThemeButton/>
  //       </section> */}
  //       <ThemeContext.Provider value={this.state}>
  //       <Content />
  //       </ThemeContext.Provider>
      
  //   )
  // }

  render() {
    // The entire state is passed to the provider
    return (
      // <ThemeContext.Provider value={this.state}>
      //   <Content />
      // </ThemeContext.Provider>
      <div>hel</div>
    );
  }



  
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton/>
    </div>
  );
}


export default AppContext;