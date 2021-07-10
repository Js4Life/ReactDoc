
import React from 'react'
import UserGreeting from './usergreeting'
import GuestGreeting from './Guestgreeting'

function LoginComponent(props) {

  console.log('login props greetn',props)

    if(props.isLoggedIn) {
        return (<UserGreeting/>)
    } else {
      return (<GuestGreeting/>)
    }
  
}

export default LoginComponent