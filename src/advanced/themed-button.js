import React from 'react';
import { ThemeContext} from './theme-context';

class ThemeButton extends React.Component {
  render() {
    let props = this.props
    let theme = this.context;
    console.log('propsss',theme)
    return (
      <button {...props} style={{background : theme.background}} >hey</button>
    )
  }


}

ThemeButton.contextType = ThemeContext;

export default ThemeButton