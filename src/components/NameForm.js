import React from 'react'


class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state= { value : '' }
    this.state = { textValue : ''}
    this.state= { selectValue : 'coconut'}

    this.state = {
      isGoing : true,
      numberOfGuests: 2
    }  


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    
  }

    handleChange(event) {
      this.setState({value: event.target.value})

   }

   handleChangeTextArea(event) {
    this.setState({textValue: event.target.value})
 }

   handleSubmit(event) {
     event.preventDefault();
     alert('Selected value ' + this.state.selectValue)
     alert('A name was submitted :' + this.state.value)
     alert('A name was submitted :' + this.state.textValue)
   }

   handleSelect(event) {
      this.setState({selectValue : event.target.value})
   }

   handleInputChange(event) {
     const target = event.target;
     console.log(target)
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name

     console.log('namesss',name)
     console.log(value)

     this.setState({
       [name] : value
     })
   }


   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <label>
           Name:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <textarea value={this.state.textValue} onChange={this.handleChangeTextArea} />

         <select value={this.state.selectValue} onChange={this.handleSelect}>
           <option value="Grapefruit">GrapeFruit</option>
           <option value="lime">Lime</option>
           <option value="cococnut">Mango</option>
         </select>

         <label>
           Is going : 
           <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
         </label>
         <label>
           Number of Guests : 
           <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
         </label>

         {/* <select multiple={true} value={['ab','dev']}>
           <option value="av"></option>
         </select> */}

         <input type="submit" value="Submit" />
       </form>
     )
   }

}

export default NameForm