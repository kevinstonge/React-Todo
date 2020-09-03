import React from "react";
import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    const toDos = this.props.toDos;
    const count = toDos.filter((t) => !t.completed).length;
    return (
      <header id="toDoHeader">
        <div>
          <h1>React To-Do App</h1>
        </div>
        <div>
          <p className="toDoCount">
            you have <span className="toDoCountNumber">{count}</span> thing
            {count === 1 ? ` ` : `s `}
            to do!
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
