const actions = {

  MAIN_EVENTS_START: "MAIN_EVENTS_START",
  MAIN_EVENTS_SUCCESS: "MAIN_EVENTS_SUCCESS",
  MAIN_EVENTS_FAILURE: "MAIN_EVENTS_FAILURE",

  GET_MAIN_EVENTS_START: "GET_MAIN_EVENTS_START",
  GET_MAIN_EVENTS_SUCCESS: "GET_MAIN_EVENTS_SUCCESS",
  GET_MAIN_EVENTS_FAILURE: "GET_MAIN_EVENTS_FAILURE",

  createMainEventsStart: () => {
    return {
      type: actions.MAIN_EVENTS_START,
    };
  },
  createMainEventsSuccess: (data) => {
    return {
      type: actions.MAIN_EVENTS_SUCCESS,
      payload: data,
    };
  },
  createMainEventsFailure: (data) => {
    return {
      type: actions.MAIN_EVENTS_FAILURE,
      payload: data,
    };
  },

  getMainEventsStart: () => {
    return {
      type: actions.GET_MAIN_EVENTS_START,
    };
  },
  getMainEventsSuccess: (data) => {
    return {
      type: actions.GET_MAIN_EVENTS_SUCCESS,
      payload: data,
    };
  },
  getMainEventsFailure: (data) => {
    return {
      type: actions.GET_MAIN_EVENTS_FAILURE,
      payload: data,
    };
  },
}

export default actions;
