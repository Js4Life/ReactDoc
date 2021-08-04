import React from 'react'

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      console.log('mouse',mouse)
      return (
        <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt=''/>
      )
    }
}

export default Cat