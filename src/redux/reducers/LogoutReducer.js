import actions from "../actionsType/signUpAction";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

const {
  LOGOUT_USER_START,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} = actions;

function LogoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_USER_START:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default LogoutReducer;
