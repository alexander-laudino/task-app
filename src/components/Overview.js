/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;

    const listTasks = tasks.map((task, index) => (
      <li key={index.toString()}>{task}</li>
    ));

    return (
      <div>
        <ul>{listTasks}</ul>
      </div>
    );
  }
}

export default Overview;
