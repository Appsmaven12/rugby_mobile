const actions = {
  OPPORTUNITY_START: "OPPORTUNITY_START",
  OPPORTUNITY_SUCCESS: "OPPORTUNITY_SUCCESS",
  OPPORTUNITY_FAILURE: "OPPORTUNITY_FAILURE",

  EVENTS_START: "EVENTS_START",
  EVENTS_SUCCESS: "EVENTS_SUCCESS",
  EVENTS_FAILURE: "EVENTS_FAILURE",

  OPPORTUNITY_DETAILS_START: "OPPORTUNITY_DETAILS_START",
  OPPORTUNITY_DETAILS_SUCCESS: "OPPORTUNITY_DETAILS_SUCCESS",
  OPPORTUNITY_DETAILS_FAILURE: "OPPORTUNITY_DETAILS_FAILURE",

  EVENTS_DETAILS_START: "EVENTS_DETAILS_START",
  EVENTS_DETAILS_SUCCESS: "EVENTS_DETAILS_SUCCESS",
  EVENTS_DETAILS_FAILURE: "EVENTS_FAILURE",

  createOpportunityStart: () => {
    return {
      type: actions.OPPORTUNITY_START,
    };
  },
  createOpportunitySuccess: (data) => {
    return {
      type: actions.OPPORTUNITY_SUCCESS,
      payload: data,
    };
  },
  createOpportunityFailure: (data) => {
    return {
      type: actions.OPPORTUNITY_FAILURE,
      payload: data,
    };
  },

  createEventsStart: () => {
    return {
      type: actions.EVENTS_START,
    };
  },
  createEventsSuccess: (data) => {
    return {
      type: actions.EVENTS_SUCCESS,
      payload: data,
    };
  },
  createEventsFailure: (data) => {
    return {
      type: actions.EVENTS_FAILURE,
      payload: data,
    };
  },

  opportunityDetailsStart: () => {
    return {
      type: actions.OPPORTUNITY_DETAILS_START,
    };
  },
  opportunityDetailsSuccess: (data) => {
    return {
      type: actions.OPPORTUNITY_DETAILS_SUCCESS,
      payload: data,
    };
  },
  opportunityDetailsFailure: (data) => {
    return {
      type: actions.OPPORTUNITY_DETAILS_FAILURE,
      payload: data,
    };
  },

  eventDetailsStart: () => {
    return {
      type: actions.EVENTS_DETAILS_START,
    };
  },
  eventDetailsSuccess: (data) => {
    return {
      type: actions.EVENTS_DETAILS_SUCCESS,
      payload: data,
    };
  },
  eventDetailsFailure: (data) => {
    return {
      type: actions.EVENTS_DETAILS_FAILURE,
      payload: data,
    };
  },
}

export default actions;
