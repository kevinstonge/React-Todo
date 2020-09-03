import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.scss";
import Check from "./Check";
class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
  }
  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };
  render() {
    return (
      <div className="toDoListContainer">
        <h2>To-Do List</h2>
        <div className="tools">
          <button id="clearCompletedButton" onClick={this.props.clearCompleted}>
            <span className="bigCheck">
              <Check />
            </span>
            clear completed tasks
          </button>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="filterString">
              search:{" "}
              <input
                type="text"
                id="filterString"
                onChange={(e) => this.handleChange(e)}
                value={this.state.filter}
              />
            </label>
            <button
              id="clearFilter"
              onClick={() => this.setState({ filter: "" })}
            >
              x
            </button>
          </form>
        </div>
        {this.props.toDos.map((toDo) =>
          this.state.filter === "" || toDo.task.includes(this.state.filter) ? (
            <ToDoItem
              key={toDo.id}
              toDo={toDo}
              toggleCompleted={this.props.toggleCompleted}
              deleteToDo={this.props.deleteToDo}
            />
          ) : null
        )}
      </div>
    );
  }
}
export default ToDoList;
