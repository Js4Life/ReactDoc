import React from 'react'
import ReactDOM from 'react-dom'


class UseRef extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data : ''
      }
      this.updateState = this.updateState.bind(this)
      this.clearInput = this.clearInput.bind(this)
    }


    updateState(e) {
      this.setState({data:e.target.value})
    }

    clearInput() {
      this.setState({data : ''})
     ReactDOM.findDOMNode(this.innerRef.current).focus()
    }

    render() {
      return(
        <div>
          <input value={this.state.data} onChange={this.updateState} innerref='myInput' />
          <button onClick={this.clearInput}>Clear</button>
          <h4>
              {this.state.data}
          </h4>
        </div>
      )
    }
}

export default UseRef