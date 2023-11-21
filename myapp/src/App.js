import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    if (!username || !password) {
      this.setState({ errorMessage: "Both fields must be filled out" });
    } else if (username !== "user" || password !== "password") {
      this.setState({ errorMessage: "Invalid credentials" });
    } else {
      this.setState({ errorMessage: "" });
      // You can add your login logic here
    }
  };

  render() {
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        {this.state.errorMessage && (
          <div className="error-message">{this.state.errorMessage}</div>
        )}
      </div>
    );
  }
}

export default LoginForm;
