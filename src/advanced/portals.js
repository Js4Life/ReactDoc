const reactDom = require("react-dom");

const appRoot = document.getElementById('app-root');
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
    return reactDom.createPortal(this.props.children,this.el)
  }

}