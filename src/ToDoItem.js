import React from "react";
import "./ToDoItem.scss";
import Arrow from "./Arrow";
import Check from "./Check";
class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    //checked: ❌✅✔️
    const { task, id, completed } = this.props.toDo;
    return (
      <div
        className={`toDoItemContainer ${
          completed ? "completeToDo" : "incompleteToDo"
        }`}
        onClick={() => this.props.toggleCompleted(id)}
      >
        <span className="toDoInfo">
          {completed ? <Check /> : <Arrow />}
          {task}
        </span>
        <button
          className="deleteButton"
          onClick={(e) => this.props.deleteToDo(e, id)}
        >
          delete
        </button>
      </div>
    );
  }
}
export default ToDoItem;
