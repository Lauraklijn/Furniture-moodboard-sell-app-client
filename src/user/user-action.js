import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const USER_LOGIN_SUCESS = "USER_LOGIN_SUCCES";
export const ACCOUNT_CREATED = "ACCOUNT_CREATED";
export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const USERPROFILES_FETCHED = "USERPROFILES_FETCHED";

//---Sign-up

export function signUp(email, password, history) {
  return function(dispatch, getState) {
    console.log(email, password);
    return axios
      .post("http://localhost:4000/signup", {
        email,
        password
      })
      .then(response => {
        console.log(response.data);
        history.push("/login");

        dispatch(signUpSucces(response));
      });
  };
}
function signUpSucces(response) {
  return { type: USER_CREATED, payload: response };
}

// LOGIN_______________________________________
function loginSuccess(token) {
  return {
    type: USER_LOGIN_SUCESS,
    payload: { token: token }
  };
}

export function login(email, password, history) {
  return async function(dispatch, getState) {
    console.log(email, password);
    await axios
      .post("http://localhost:4000/login", {
        email,
        password
      })
      .then(response => {
        console.log("GETSTATE", getState().userData);

        history.push("/create-account");

        dispatch(loginSuccess(response.data));
      });
  };
}

//----Create user-profile

export function createAccount(name, image, discription, history) {
  return function(dispatch, getState) {
    console.log(name, image);
    const userId = getState().userData.userCreated.id;
    return axios
      .post("http://localhost:4000/userprofile/signup", {
        name,
        image,
        discription,
        userId
      })
      .then(response => {
        console.log(response.data);
        history.push("/");

        dispatch(accountCreated(response.data));
      });
  };
}
function accountCreated(payload) {
  return { type: ACCOUNT_CREATED, payload: payload };
}

function GetUserProfile(payload) {
  console.log("WHAT IS PROfile in ACTION", payload);
  return {
    type: GET_USER_PROFILE,
    payload
  };
}

export const UserProfile = id => (dispatch, getState) => {
  axios.get(`http://localhost:4000/userprofile/${id}`).then(function(response) {
    dispatch(GetUserProfile(response.data));
  });
};

//........... Load Userprofiles:

function UserProfilesFetched(UserProfiles) {
  console.log("What is UserprofileFetched?", UserProfiles);
  return {
    type: USERPROFILES_FETCHED,
    payload: {
      UserProfiles: UserProfiles
    }
  };
}

export const loadUserProfiles = () => async (dispatch, getState) => {
  axios.get("http://localhost:4000/userprofile").then(function(response) {
    dispatch(UserProfilesFetched(response.data));
  });
};
