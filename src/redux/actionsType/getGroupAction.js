const actions = {
    GET_GROUP_START: "GET_GROUP_START",
    GET_GROUP_SUCCESS: "GET_GROUP_SUCCESS",
    GET_GROUP_FAILURE: "GET_GROUP_FAILURE",
  
    getGroupStart: () => {
      return {
        type: actions.GET_GROUP_START,
      };
    },
    getGroupSuccess: (data) => {
      return {
        type: actions.GET_GROUP_SUCCESS,
        payload: data,
      };
    },
    getGroupFailure: (data) => {
      return {
        type: actions.GET_GROUP_FAILURE,
        payload: data,
      };
    },
  };
  
  export default actions;
  