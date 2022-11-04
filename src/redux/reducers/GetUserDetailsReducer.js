import action from "../actionsType/getUserDetailsAction"

const userDetailseState = {
  loading: true,
  data: [],
  error: null,
};

const {
  GET_USER_DETAILS_START,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
} = action;

export function getUserDetailsReducer(state = userDetailseState, action) {
  console.log("action",action)
  switch (action.type) {
    case GET_USER_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case  'GET_USER_DETAILS_SUCCESS':
        console.log("GET_USER_DETAILS_SUCCES", action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

