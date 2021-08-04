import React from 'react'
import { CustomText } from './RefReact'

export class AutoTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }


    componentDidMount() {
      this.textInput.current.focusTextInput()
    }

    render() {
      return(
        <CustomText ref={this.textInput} />
      )
    }

}