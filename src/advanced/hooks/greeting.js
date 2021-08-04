import React from "react";

export default class GreetingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Marry1",
      surname: "poppins",
      width: window.innerWidth
    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSurname = this.handleSurname.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSurname(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  componentDidMount() {
    document.title = this.state.name + " " + this.state.surname;
    window.addEventListener('resize',this.handleResize)
  }



   // sideeffects in class
  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname;
  }

  componentWillUnmount() {
    window.removeEventListener('resize',this.handleResize)
  }



  handleResize() {
    this.setState({
      width : window.innerWidth
    })
  }


  render() {
    return (
      <>
        <label>Name</label>
        <input
          value={this.state.name}
          onChange={(e) => this.handleNameChange(e)}
        />

        <label>Surname</label>
        <input
          value={this.state.surname}
          onChange={(e) => this.handleSurname(e)}
        />

      <label>Width</label>
        <label>
         {this.state.width}
        </label>
      </>
    );
  }
}
