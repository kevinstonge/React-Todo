import React from "react";
import "./ToDoItem.scss";
class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    //checked: ❌✅✔️
    const { task, id, completed } = this.props.toDo;
    return (
      <div className="toDoItemContainer">
        <label htmlFor={`toDoItem-${id}`}>
          <input
            type="checkbox"
            id={`toDoItem-${id}`}
            checked={completed}
            onChange={() => this.props.toggleCompleted(id)}
          />
          {task}
        </label>
        <button
          className="deleteButton"
          onClick={() => this.props.deleteToDo(id)}
        >
          delete
        </button>
      </div>
    );
  }
}
export default ToDoItem;
