import React from "react";

export class CustomText extends React.Component {
    constructor(props) {
      super(props)
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this)
    }


    focusTextInput() {
      console.log(' this.textInput.current.focus()', this.textInput.current)
      this.textInput.current.focus()
    }

    render() {
      return (
        <div>
          <input type='text' ref={this.textInput} />

          <input type='button' value='Focus the text input' onClick={this.focusTextInput} />

        </div>
      )
    }

}