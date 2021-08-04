// const reactDom = require("react-dom");

import React from "react"
import ReactDOM from "react-dom";
import './portal.css'

// const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
  constructor(props){
    super(props)
    this.el = document.createElement('div')
  }


  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }


  render() {
    return ReactDOM.createPortal(this.props.children,this.el)
  }

}

class Parent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicks : 0
      }
      this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
      this.setState(prevState => ({
        clicks : prevState.clicks + 1
      }))
    }

    render() {
      return (
        <div onClick={this.handleClick}>
            <p>Number of Clicks : {this.state.clicks}</p>
            <p>
              Open up the browser DevTools to observe that the button is not child of the div with the onClick handler
            </p>
            <Modal>
              <Child/>
            </Modal>
        </div>
      )
    }

}

function Child() {
  return (
    <div className='modal'>
      <button>Click</button>
    </div>
  )
} 

export default Parent