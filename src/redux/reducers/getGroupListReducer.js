import action from "../actionsType/getGroupAction"

const getGroupState = {
  loading: true,
  data: [],
  error: null,
};

const {
   GET_GROUP_START,
   GET_GROUP_SUCCESS,
   GET_GROUP_FAILURE,
} = action;

export function getGroupReducer(state = getGroupState, action) {
  console.log("action",action)
  switch (action.type) {
    case  GET_GROUP_START:
      return {
        ...state,
        loading: true,
      };
    case  GET_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case  GET_GROUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}