import React, { Component } from "react";
import { connect } from "react-redux";

class CreateMoodboard extends Component {
  render() {
    return (
      <div>
        <h1>CREATE MOODBOARD</h1>
      </div>
    );
  }
}

export default connect()(CreateMoodboard);