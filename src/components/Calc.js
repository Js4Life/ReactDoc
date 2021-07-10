import React from "react";
import BoilingVerdict from "./Boiling";


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: "",
    };
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    const temperature = this.state.temperature;

    return (
      <fieldset>
        <legend>Enter temperature in Celsisus:</legend>

        <input value={temperature} onChange={this.handleChange} />

        <BoilingVerdict celsius={parseFloat(temperature)} />

      </fieldset>
    );
  }
}

export default Calc;
