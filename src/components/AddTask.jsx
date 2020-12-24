import { Component } from "react";

class AddTask extends Component {
  render() {
    return (
      <div>
        <p>{this.props.task.taskname}</p>
      </div>
    );
  }
}

export default AddTask;
