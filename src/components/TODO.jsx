import { Component } from "react";
import { taskUrl } from "./Taskurl";
import AddTask from "./AddTask";
class Todo extends Component {
  state = {
    tasks: [],
  };

  componentDidMount = () => {
    fetch(taskUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ tasks: [...data] });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addTask = (event) => {
    console.log("task", event.target.value);
    // const task = event.target.task.value;
    this.setState = { tasks: event.target.value };
  };
  submitTask = (event) => {
    event.preventDefault();
    fetch(taskUrl, {
      method: "POST",
      body: JSON.stringify({ taskname: event.target.value }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    // this.setState = { tasks: event.target.value };
  };

  render() {
    return (
      <div>
        <h1>TO-DO App</h1>
        <form onSubmit={this.submitTask}>
          <label htmlFor="task">Task</label>
          <input onChange={this.addTask} value={this.state.value} />
          <button type="submit">AddTask</button>
          {this.state.tasks.map((task) => {
            return <AddTask key={task.taskid} task={task} />;
          })}
        </form>
      </div>
    );
  }
}

export default Todo;
