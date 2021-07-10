import React from 'react'
import './contain.css'
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-'+ props.color}>
      {props.children}
    </div>
  )
}
function Dialag(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
     this.handleSignup = this.handleSignup.bind(this)
    this.state = {
      login : ''
    }

  }

  handleChange(e) {
    this.setState({login:e.target.value})
  }

  handleSignup() {
        alert(`Welcome aboard,${this.state.login}`)
  }

  render() {
    return (
      // <div>A sign up module</div>
      <Dialag 
      title="Mars Exploration Program" 
      message="How should we refer you?">
      <input value={this.state.login} onChange={this.handleChange}/>
      <button onClick={this.handleSignup}>Sign Me Up!</button>
      </Dialag>
    )
  }
}


export default SignUpDialog
