const actions = {
    GET_PROFILE_START: "GET_PROFILE_START",
    GET_PROFILE_SUCCESS: "GET_PROFILE_SUCCESS",
    GET_PROFILE_FAILURE: "GET_PROFILE_FAILURE",
  
    getProfileStart: () => {
      return {
        type: actions.GET_PROFILE_START,
      };
    },
    getProfileSuccess: (data) => {
      return {
        type: actions.GET_PROFILE_SUCCESS,
        payload: data,
      };
    },
    getProfileFailure: (data) => {
      return {
        type: actions.GET_PROFILE_FAILURE,
        payload: data,
      };
    },
  };
  
  export default actions;
  