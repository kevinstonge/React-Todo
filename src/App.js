import React from "react";
import Header from "./Header";
import Input from "./Input";
import ToDoList from "./ToDoList";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { toDos: [] };
  }
  addToDo = (toDoText) => {
    const uniqueId = `${Date.now().toString(36)}-${Math.floor(
      Math.random() * 10 ** 12
    ).toString(36)}`;
    const newToDo = {
      task: toDoText,
      id: uniqueId,
      created: new Date(),
      completed: false,
    };
    this.setState({ toDos: [...this.state.toDos, newToDo] });
  };
  toggleCompleted = (id) => {
    this.setState({
      toDos: this.state.toDos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deleteToDo = (id) => {
    this.setState({ toDos: this.state.toDos.filter((todo) => todo.id !== id) });
  };
  render() {
    return (
      <>
        <Header toDos={this.state.toDos} />
        <div id="toDoBody">
          <Input addToDo={this.addToDo} />
          <ToDoList
            toDos={this.state.toDos}
            toggleCompleted={this.toggleCompleted}
            deleteToDo={this.deleteToDo}
          />
        </div>
      </>
    );
  }
}

export default App;
