import actions from "../actionsType/socialLoginAction";

const initialState = {
  loading: true,
  data: {},
  error: null,
  token: ""
};

const {
  SOCIAL_LOGIN_USER_START,
  SOCIAL_LOGIN_USER_SUCCESS,
  SOCIAL_LOGIN_USER_FAILURE,
  UPDATE_TOKEN,
} = actions;

function socialLoginReducer(state = initialState, action) {
  switch (action.type) {
    case SOCIAL_LOGIN_USER_START:
      return {
        ...state,
        loading: true,
      };
    case SOCIAL_LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case SOCIAL_LOGIN_USER_FAILURE:
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

export default socialLoginReducer;
