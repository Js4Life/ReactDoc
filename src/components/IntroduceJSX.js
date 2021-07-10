import React from "react"

class IntroduceJSX extends React.Component {

    myName = 'raghu';
    element = <h1>Hello , {this.myName}</h1> 

    user = {
      firstName : 'raghavendra',
      lastname:'gowda'
    }

    formatFullName =(user) =>{
        return user.firstName + ' ' + user.lastname;
    }

    element1 = (
      <div>
        Hello world1
      </div>
    );

    element2 = React.createElement(
      'h1',
      {className : 'greeting'},
      'helo'
    )

     element3 = {
      type: 'h1',
      props: {
        className: 'greeting',
        children: 'Hello, world!3'
      }
    };

      render() {
        return (
          <div>
            Hello I am element -- {this.element}
            <h1>formatter , {this.formatFullName(this.user)} </h1>
            <div>{this.element1}</div>
            <div>{this.element2}</div>
            <div>{this.element3.props.children}</div>
            <div>{new Date().toLocaleTimeString()}</div>
          </div>
        )
      }
}

export default IntroduceJSX