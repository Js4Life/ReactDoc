import React from 'react'

// function Clock(props) {
//   console.log('clocks',props)
//   return ( <div>
//     <div>Clock</div>
//      <div>{props.date}</div> 
//     </div>
//   )
// }
class Clock extends React.Component {

  constructor(props) {
    super(props);
    console.log('xl',this.props.date)
    this.state = {
      date : new Date()
    }
  }

tick() {
  this.setState({
    date : new Date()
  })
}

componentDidMount() {
  this.timeID = setInterval(()=>this.tick(),1000)
}

componentWillUnmount() {
  clearInterval(this.timeID)
}

render() {
      return (
      <div>
        <div>Clock</div>
        <div>{this.state.date.toLocaleTimeString()}</div> 
     </div>
      )
    }
}

export default Clock