import React from "react"

class ComponentR extends React.Component {

    constructor(props) {
      super(props);
      console.log(props)
    }

      render() {
        return (
          <div>
           <div>3 diff props {this.props.name}</div>
          </div>
        )
      }
}

export default ComponentR