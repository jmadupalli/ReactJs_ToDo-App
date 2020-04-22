import React from "react";

class ToDoApp extends React.Component {
  state = {
    todos: [],
    textVal: ""
  };

  renderToDos = () => {
    return this.state.todos.map((todo, index) => {
      return (
        <ToDo
          onToggle={() => this.toggleToDo(index)}
          onDelete={() => this.removeToDo(index)}
          todo={todo}
          key={index}
        />
      );
    });
  };

  addToDo = () => {
    if (this.state.textVal === "") return;
    let newTodos = this.state.todos;
    newTodos.push({ text: this.state.textVal, checked: false });
    this.setState({
      todos: newTodos
    });
    console.log(this.state.textVal);
  };

  toggleToDo = index => {
    let newTodos = this.state.todos;
    newTodos[index].checked = !newTodos[index].checked;
    this.setState({
      todos: newTodos
    });
  };

  removeToDo = index => {
    let newTodos = this.state.todos;
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  };

  handleChange = event => {
    this.setState({
      textVal: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="todo-control">
          <h4 class="mb-3">Add a To Do</h4>
          <p>
            <input
              class="mr-5"
              type="text"
              value={this.state.textVal}
              onChange={this.handleChange}
              placeholder="To Do Text"
            />
            <button class="btn btn-primary" onClick={this.addToDo}>
              Add ToDo
            </button>
          </p>
          <p>
            <span class="col-4">
              Checked:{" "}
              {this.state.todos.filter(todo => todo.checked !== false).length}
            </span>
            <span class="col-4">Total: {this.state.todos.length}</span>
            <span class="col-4">
              Unchecked:{" "}
              {this.state.todos.filter(todo => todo.checked !== true).length}
            </span>
          </p>
        </div>
        {this.renderToDos()}
      </div>
    );
  }
}

const ToDo = props => {
  return (
    <div class="todo-item">
      <div class="col-3 mb-1">
        <input
          type="checkbox"
          onChange={props.onToggle}
          checked={props.todo.checked}
        />
      </div>
      <div class="col-6">
        <span>{props.todo.text}</span>
      </div>
      <div class="col-3">
        <button class="btn btn-danger" onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDoApp;
