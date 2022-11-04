const loginactions = {
    LOGIN_USER_START: "LOGIN_USER_START",
    LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
    LOGIN_USER_FAILURE: "LOGIN_USER_FAILURE",
    UPDATE_TOKEN:"UPDATE_TOKEN",
  
    loginUserStart: () => {
      return {
        type: loginactions.LOGIN_USER_START,
      };
    },
    loginUserSuccess: (data) => {
      console.log("data-123", data);
      return {
        type: loginactions.LOGIN_USER_SUCCESS,
        payload: data,
      };
    },
    loginUserFailure: (data) => {
      return {
        type: loginactions.LOGIN_USER_FAILURE,
        payload: data,
      };
    },
    updateToken: (data) => {
      return {
        type: loginactions.UPDATE_TOKEN,
        payload: data,
      };
    },  
};


  export default loginactions;
  