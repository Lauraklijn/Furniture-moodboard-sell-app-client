//import React, { useState } from "react";
import TestPage from "../components/DnDgrit/TestPage";
import React, { Component } from "react";
import AddPhoto from "../components/AddPhoto";
//import Button from "react-bootstrap/Button";

class CreateMoodboard extends Component {
  render() {
    return (
      <div>
        <h2>CREATE YOUR MOODBOARD</h2>
        <AddPhoto />
        <TestPage />
      </div>
    );
  }
}

export default CreateMoodboard;
