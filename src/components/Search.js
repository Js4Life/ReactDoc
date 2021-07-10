import React from 'react'
import { debounce } from 'lodash'


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText : '',
      anotherTxt:''
    }
  }


 debouncedLog = debounce((text) => {
     console.log('textw',text)
      this.setState({anotherTxt : text})
      console.log('search txt',this.state.anotherTxt)
 },500)

  handleChange = e =>{
    this.setState({searchText : e.target.value})
    this.debouncedLog(e.target.value)
  }

  render() {
    return (
      <section>
        <form role='search'>
          <input value={this.state.searchText} onChange={this.handleChange}/>
          <button>search  </button>
          <p>{this.state.anotherTxt}</p>
        </form>
      </section>
    )
  }

}

export default Search