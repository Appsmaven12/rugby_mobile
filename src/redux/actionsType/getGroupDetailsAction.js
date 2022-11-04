const actions = {
    GET_GROUP_DETAILS_START: "GET_GROUP_DETAILS_START",
    GET_GROUP_DETAILS_SUCCESS: "GET_GROUP_DETAILS_SUCCESS",
    GET_GROUP_DETAILS_FAILURE: "GET_GROUP_DETAILS_FAILURE",
  
    getGroupDetailsStart: () => {
      return {
        type: actions.GET_GROUP_DETAILS_START,
      };
    },
    getGroupDetailsSuccess: (data) => {
      return {
        type: actions.GET_GROUP_DETAILS_SUCCESS,
        payload: data,
      };
    },
    getGroupDetailsFailure: (data) => {
      return {
        type: actions.GET_GROUP_DETAILS_FAILURE,
        payload: data,
      };
    },
  };
  
  export default actions;
  