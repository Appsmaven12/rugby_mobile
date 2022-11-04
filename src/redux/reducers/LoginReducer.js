import loginactions from "../actionsType/userLoginAction";

const initialState = {
  loading: true,
  data: [],
  error: null,
  token: ""
};

const {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  UPDATE_TOKEN,
} = loginactions;

function LoginReducer(state = initialState, action) {
  console.log("action.payload-state",action);
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_USER_SUCCESS':
      console.log("vijay vijay red", action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGIN_USER_FAILURE:
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

export default LoginReducer;
