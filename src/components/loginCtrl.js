import React from 'react';
import LogoutButton from './LoginOut'
import LoginBtn from './loginBtn'
import LoginComponent from './loginComp';

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick.bind(this)
      this.handleLogoutClick.bind(this)
      this.state = {
        isLoggedIn : false
      }

    }

    handleLoginClick = () => {
     this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick = () => {
      this.setState({isLoggedIn: false});
    }
    render() {

      const isLoggedIn = this.state.isLoggedIn;

      let button;

      if(isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />
      } else {
        button = <LoginBtn onClick={this.handleLoginClick} />
      }
     //   console.log('btn',button)
      return (
        <div>
            <LoginComponent isLoggedIn={isLoggedIn} />
            {<p>the user is <b>{isLoggedIn ? 'currently' : 'not'} logged in </b></p>}
            {button}

        </div>
      )
    }
}

export default LoginControl