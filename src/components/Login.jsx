import { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log("form submitted");
    console.log("email", event.target.email.value);
    console.log("password", event.target.password.value);
    this.setState({
      email: event.target.email.value,
      password: event.target.password.value,
    });
  };
  updateEmail = (event) => {
    this.setState(
      { email: this.state.email },
      { password: this.state.password }
    );
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <label htmlFor="password"></label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.updateEmail}
          />
          <br />
          <input type="text" value="sunmit" />
          <input type="text" value="login" />
          <input type="text" value="cancel" />
        </form>
      </div>
    );
  }
}

export default Login;
