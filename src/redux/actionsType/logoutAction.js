const actions = {
    LOGOUT_USER_START: "LOGOUT_USER_START",
    LOGOUT_USER_SUCCESS: "LOGOUT_USER_SUCCESS",
    LOGOUT_USER_FAILURE: "LOGOUT_USER_FAILURE",
  
    logoutUserStart: () => {
      return {
        type: actions.LOGOUT_USER_START,
      };
    },
    logoutUserSuccess: (data) => {
      return {
        type: actions.LOGOUT_USER_SUCCESS,
        // payload: data,
      };
    },
    logoutUserFailure: (data) => {
      return {
        type: actions.LOGOUT_USER_FAILURE,
        // payload: data,
      };
    },
};


  export default actions;
  