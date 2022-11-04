import action from "../actionsType/getProfileAction"

const profileState = {
  loading: true,
  data: [],
  error: null,
};

const {
   GET_PROFILE_START,
   GET_PROFILE_SUCCESS,
   GET_PROFILE_FAILURE,
} = action;

export function GetProfileReducer(state = profileState, action) {
  console.log("action",action)
  switch (action.type) {
    case  GET_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case  'GET_PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case  GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

