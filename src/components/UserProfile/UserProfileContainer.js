import React from "react";
import { loadUserProfiles } from "../../user/user-action";
import { connect } from "react-redux";
import UserProfileList from "../UserProfile/UserProfileList";

class UserProfileListContainer extends React.Component {
  componentDidMount() {
    console.log("Load userProfiles", this.props);
    this.props.loadUserProfiles();
  }

  render() {
    return (
      <div>
        <UserProfileList userProfiles={this.props.UserProfiles} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("what is state in UserprofileContainer", state.userData);
  return {
    UserProfiles: state.userData
  };
};

export default connect(mapStateToProps, { loadUserProfiles })(
  UserProfileListContainer
);
