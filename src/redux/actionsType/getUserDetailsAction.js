const actions = {
    GET_USER_DETAILS_START: "GET_USER_DETAILS_START",
    GET_USER_DETAILS_SUCCESS: "GET_USER_DETAILS_SUCCESS",
    GET_USER_DETAILS_FAILURE: "GET_USER_DETAILS_FAILURE",
  
    getUserDetailsStart: () => {
      return {
        type: actions.GET_USER_DETAILS_START,
      };
    },
    getUserDetailsSuccess: (data) => {
      return {
        type: actions.GET_USER_DETAILS_SUCCESS,
        payload: data,
      };
    },
    getUserDetailsFailure: (data) => {
      return {
        type: actions.GET_USER_DETAILS_FAILURE,
        payload: data,
      };
    },
  };
  
  export default actions;
  