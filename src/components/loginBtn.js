import React from 'react'

function LoginBtn(props) {
  console.log('login props',props)
  return (
    <button onClick={props.onClick}>
        Login
    </button>
  )

}

export default LoginBtn