import React from "react";

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <input />
    <td>
      <label>{props.createdAt.toTimeString()}</label>
    </td>
  </tr>
);

export class ToDoList extends React.Component {
  constructor() {
    super();
    const date = new Date();
    const toDoCounter = 1;

    this.state = {
      list: [
        {
          id: toDoCounter,
          createdAt: date,
        },
      ],
      toDoCounter: toDoCounter,
    };
  }

  sortEarliest() {
    const sortedList = this.state.list.sort((a,b)=>{
      return a.createdAt - b.createdAt;
    })
    this.setState({
      list : [...sortedList]
    })
  }

  sortByLatest() {
    const sortedList = this.state.list.sort((a,b)=>{
      return b.createdAt - a.createdAt
    })

    this.setState({
      list : [...sortedList]
    })
  }

  addtoEnd() {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;
    const newList = [...this.state.list, { id: nextId, createdAt: date }];
    this.setState({
      list: newList,
      toDoCounter: nextId,
    });
  }

  addToStart() {
    const date = new Date();
    const nextId = this.state.toDoCounter + 1;

    const newList = [
      {
        id: nextId,
        createdAt: date,
      },
      ...this.state.list,
    ];

    this.setState({
      list: newList,
      toDoCounter: nextId,
    });
  }



  render() {
    return (
      <div>
        <code>key=id(Dont use 'index' of            map)</code>
        <button onClick={this.addToStart.bind(this)}>Add new to start</button>
        <button onClick={this.addtoEnd.bind(this)}>Add new to end</button>
        <button onClick={this.sortEarliest.bind(this)} >sort by earliest</button>
        <button onClick={this.sortByLatest.bind(this)} >sort by latest</button>

        <table>
          <tr>
            <th>ID</th>
            <th />
            <th>Created at</th>
          </tr>
          {this.state.list.map((todo, index) => (
            <ToDo key={todo.id} {...todo} />
          ))}
        </table>
      </div>
    );
  }
}
