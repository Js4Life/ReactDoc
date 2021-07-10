import React from 'react'

const scaleNames = {
  c : 'Celsius',
  f: 'Fahrenheit'
}

function toCelsisus(fahren) {
  return (fahren - 32)*5/9;
}

function toFah(cel) {
  return (cel*9/5)+32;
}

function tryConv(temp,conv) {
  const input = parseFloat(temp);
  if(Number.isNaN(input)) {
    return ''
  }
  const output = conv(input)
  const round = Math.random(output*1000)/1000;
  return round.toString()

}


class TempInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this)
      this.state = {temperature : ''}
    }

    handleChange(e) {
      this.setState({temperature:e.target.value})
    }

    render() {
      const temp = this.state.temperature;
      const scale = this.props.scale
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]} : </legend>
          
          <input 
          value={temp} 
          onChange={this.handleChange} />

        </fieldset>
      )
    }
}

export default TempInput