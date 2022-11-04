const actions = {
    SIGNUP_USER_START: "SIGNUP_USER_START",
    SIGNUP_USER_SUCCESS: "SIGNUP_USER_SUCCESS",
    SIGNUP_USER_FAILURE: "SIGNUP_USER_FAILURE",
    UPDATE_TOKEN:"UPDATE_TOKEN",
  
    signupUserStart: () => {
      return {
        type: actions.SIGNUP_USER_START,
      };
    },
    signupUserSuccess: (data) => {
      return {
        type: actions.SIGNUP_USER_SUCCESS,
        payload: data,
      };
    },
    signupUserFailure: (data) => {
      return {
        type: actions.SIGNUP_USER_FAILURE,
        payload: data,
      };
    },
    updateToken: (data) => {
      return {
        type: actions.UPDATE_TOKEN,
        payload: data,  
      };
    },  };


  export default actions;
  