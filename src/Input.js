import React from "react";
import "./Input.scss";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
    this.newToDoTextInput = React.createRef();
  }
  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputText.length > 1) {
      this.props.addToDo(this.state.inputText);
      this.setState({ inputText: "" });
    }
    this.newToDoTextInput.current.focus();
  };
  render() {
    return (
      <div className="inputContainer">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="newToDoText">new to-do:</label>
          <input
            type="text"
            id="newToDoText"
            onChange={(e) => this.handleChange(e)}
            value={this.state.inputText}
            ref={this.newToDoTextInput}
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
  componentDidMount() {
    this.newToDoTextInput.current.focus();
  }
}

export default Input;
