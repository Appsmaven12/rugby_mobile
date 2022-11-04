import action from "../actionsType/opportunityAndEventsAction"

const initialState = {
  loading: true,
  data: [],
  error: null,
};

const {
  OPPORTUNITY_START,
  OPPORTUNITY_SUCCESS,
  OPPORTUNITY_FAILURE,

  EVENTS_START,
  EVENTS_SUCCESS,
  EVENTS_FAILURE,

  OPPORTUNITY_DETAILS_START,
  OPPORTUNITY_DETAILS_SUCCESS,
  OPPORTUNITY_DETAILS_FAILURE,

  EVENTS_DETAILS_START,
  EVENTS_DETAILS_SUCCESS,
  EVENTS_DETAILS_FAILURE,
} = action;

export function opportunityReducer(state = initialState, action) {
  switch (action.type) {
    case OPPORTUNITY_START:
      return {
        ...state,
        loading: true,
      };
    case OPPORTUNITY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case OPPORTUNITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case EVENTS_START:
      return {
        ...state,
        loading: true,
      };
    case EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function opportunityDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case OPPORTUNITY_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case OPPORTUNITY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case OPPORTUNITY_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function eventDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case EVENTS_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case EVENTS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case EVENTS_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}