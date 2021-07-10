import React from 'react'

function LogoutButton(props) {
  console.log('logout',props)
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

export default LogoutButton