import action from "../actionsType/getGroupDetailsAction"

const getGroupState = {
  loading: true,
  data: [],
  error: null,
};

const {
   GET_GROUP_DETAILS_START,
   GET_GROUP_DETAILS_SUCCESS,
   GET_GROUP_DETAILS_FAILURE,
} = action;

export function getGroupDetailsReducer(state = getGroupState, action) {
  console.log("action",action)
  switch (action.type) {
    case  GET_GROUP_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case  GET_GROUP_DETAILS_SUCCESS:
        console.log("GET_GROUP_DETAILS_SUCCESS", action.payload);
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case  GET_GROUP_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}