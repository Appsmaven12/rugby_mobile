import actions from "../actionsType/signUpAction";

const initialState = {
  loading: true,
  data: [],
  error: null,
  token: ""
};

const {
  SIGNUP_USER_START,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  UPDATE_TOKEN,
} = actions;

function SignUpReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER_START:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_TOKEN:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };

    default:
      return state;
  }
}

export default SignUpReducer;
