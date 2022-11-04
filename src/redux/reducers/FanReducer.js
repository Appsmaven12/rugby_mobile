import action from "../actionsType/fanSignUpAction"

const faninitialState = {
  loading: true,
  data: [],
  error: null,
};

const {
  FAN_SIGNUP_USER_START,
  FAN_SIGNUP_USER_SUCCESS,
  FAN_SIGNUP_USER_FAILURE,
} = action;

export function FanSignUpReducer(state = faninitialState, action) {
  switch (action.type) {
    case FAN_SIGNUP_USER_START:
      return {
        ...state,
        loading: true,
      };
    case FAN_SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FAN_SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

