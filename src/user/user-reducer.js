import { USER_CREATED } from "../user/user-action";
import { USER_LOGIN_SUCESS } from "../user/user-action";
import { ACCOUNT_CREATED } from "../user/user-action";
import { GET_USER_PROFILE } from "../user/user-action";
import { USERPROFILES_FETCHED } from "../user/user-action";

const initialState = {
  userCreated: false,
  jwt: null,
  email: null,
  accountCreated: false,
  profile: null,
  userId: null
  //userLoggedIn: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      console.log("CREATED PAYLOAD", action.payload);

      return {
        ...state,
        userCreated: action.payload.data.userAccount
      };
    case USER_LOGIN_SUCESS:
      console.log("User loggedIN", action.payload);
      return {
        ...state,
        jwt: action.payload.token,
        userId: action.payload.userId,
        profile: action.payload.profile
        //userLoggedIn: action.payload.data.
      };
    case ACCOUNT_CREATED:
      console.log("Account CREATED", action.payload);

      return {
        ...state,
        userCreated: action.payload.userProfile
      };
    case GET_USER_PROFILE:
      console.log("What is Payload?", action);
      return { ...state, profile: action.payload };

    case USERPROFILES_FETCHED:
      console.log("WHT IS PAYLOAYLOAD, userprofileFetched", action.payload);
      return { ...action.payload };
    default:
      return state;
  }
};
