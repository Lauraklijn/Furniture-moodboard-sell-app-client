import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import { UserProfile } from "../user/user-action";

class UserPage extends React.Component {
  componentDidMount() {
    console.log("What is UserProfile", this.props);
    this.props.UserProfile(this.props.match.params.id);
  }

  render() {
    console.log("profile??????????", this.props.profile);

    return (
      <div className="d-flex justify-content-center">
        <p>{this.props.profile.name}</p>
        {/* <Card className="mt-5" border="dark" style={{ width: "30rem" }}>
          <Card.Img variant="top" src={this.props.profile.name} />
          
          <Card.Header border="dark">{this.props.ticket.name}</Card.Header>
          <Card.Body>
            <Card.Title>€ {this.props.ticket.price}</Card.Title>
            <Card.Text>{this.props.ticket.description}</Card.Text>
            <Button variant="dark">BUY</Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Author: {this.props.ticket.author}
            <li>Risk:{this.props.ticket.risk}%</li>
          </Card.Footer>
        </Card> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("what is state", state.userData.profile);
  return {
    profile: state.userData.profile
  };
};

export default connect(mapStateToProps, { UserProfile })(UserPage);
