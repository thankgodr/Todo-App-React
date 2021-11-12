import React from 'react';

class TodoItem extends React.Component {
  completedStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through',
  };
  constructor(props) {
    super(props);
    this.state = { ...this.props };
    this.changeCompletedStatus = this.changeCompletedStatus.bind(this);
  }

  changeCompletedStatus() {
    this.setState((prv) => {
      let obj = { ...prv };
      if (obj.todo.completed == true) {
        let completed = false;
        obj = { ...obj.todo, completed };
      } else {
        let completed = true;
        obj = { ...obj.todo, completed };
      }
      return { todo: obj };
    });
  }
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.todo.completed}
          onChange={this.changeCompletedStatus}
        />
        <p style={this.state.todo.completed ? this.completedStyle : null}>{this.state.todo.text}</p>
      </div>
    );
  }
}

export default TodoItem;
