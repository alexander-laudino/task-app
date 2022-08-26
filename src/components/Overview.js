/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;

    return (
      <div>
        <p>{tasks}</p>
      </div>
    );
  }
}

export default Overview;
