const actions = {
  FAN_SIGNUP_USER_START: "FAN_SIGNUP_USER_START",
  FAN_SIGNUP_USER_SUCCESS: "FAN_SIGNUP_USER_SUCCESS",
  FAN_SIGNUP_USER_FAILURE: "FAN_SIGNUP_USER_FAILURE",

  fansignupUserStart: () => {
    return {
      type: actions.FAN_SIGNUP_USER_START,
    };
  },
  fansignupUserSuccess: (data) => {
    return {
      type: actions.FAN_SIGNUP_USER_SUCCESS,
      payload: data,
    };
  },
  fansignupUserFailure: (data) => {
    return {
      type: actions.FAN_SIGNUP_USER_FAILURE,
      payload: data,
    };
  },
};

export default actions;
