import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Enter new task:",
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("A task was added: " + this.state.value);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, this.state.value],
    }));
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.tasks}</p>
      </div>
    );
  }
}

export default App;
