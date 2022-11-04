const actions = {
    SOCIAL_LOGIN_USER_START: "SOCIAL_LOGIN_USER_START",
    SOCIAL_LOGIN_USER_SUCCESS: "SOCIAL_LOGIN_USER_SUCCESS",
    SOCIAL_LOGIN_USER_FAILURE: "SOCIAL_LOGIN_USER_FAILURE",
    // UPDATE_TOKEN:"UPDATE_TOKEN",
  
    socialLoginUserStart: () => {
      return {
        type: actions.SOCIAL_LOGIN_USER_START,
      };
    },
    socialLoginUserSuccess: (data) => {
      return {
        type: actions.SOCIAL_LOGIN_USER_SUCCESS,
        payload: data,
      };
    },
    socialLoginUserFailure: (data) => {
      return {
        type: actions.SOCIAL_LOGIN_USER_FAILURE,
        payload: data,
      };
    },
    // updateToken: (data) => {
    //   return {
    //     type: actions.UPDATE_TOKEN,
    //     payload: data,
    //   };
    // },  
};


  export default actions;
  