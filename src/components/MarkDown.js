import React from "react";
import { Remarkable } from "remarkable";

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello , **world**!",
    };

    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">Enter some markdown</label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
       />
     
        <h3>Output</h3>

        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        ></div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  getRawMarkup() {
    return {
      __html: this.md.render(this.state.value),
    };
  }


}

export default MarkDown;
