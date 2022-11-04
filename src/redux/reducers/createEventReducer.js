import action from "../actionsType/createEventAction"

const initialState = {
  loading: true,
  data: [],
  error: null,
};

const {
  MAIN_EVENTS_START,
  MAIN_EVENTS_SUCCESS,
  MAIN_EVENTS_FAILURE,

  GET_MAIN_EVENTS_START,
  GET_MAIN_EVENTS_SUCCESS,
  GET_MAIN_EVENTS_FAILURE,
} = action;


export function mainEventsReducer(state = initialState, action) {
  switch (action.type) {
    case MAIN_EVENTS_START:
      return {
        ...state,
        loading: true,
      };
    case MAIN_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case MAIN_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function getMainEventsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MAIN_EVENTS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MAIN_EVENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_MAIN_EVENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
