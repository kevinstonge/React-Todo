import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.scss";
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    return (
      <div className="toDoListContainer">
        <h2>To-Do List</h2>
        {this.props.toDos.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            toggleCompleted={this.props.toggleCompleted}
            deleteToDo={this.props.deleteToDo}
          />
        ))}
      </div>
    );
  }
}
export default ToDoList;
