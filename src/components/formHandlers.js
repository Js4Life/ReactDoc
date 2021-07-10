import React from 'react'




class EventHandler extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    isToggleOn : true
  }

  this.handleClick = this.handleClick.bind(this)
}

   handleClick() {
     console.log('this is :' ,this)
    this.setState(state => ({
      isToggleOn : !state.isToggleOn
    }
    ))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }

}

export default EventHandler