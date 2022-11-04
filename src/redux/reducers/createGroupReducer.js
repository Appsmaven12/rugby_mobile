import action from "../actionsType/createGroupAction"

const createGroupState = {
  loading: true,
  data: [],
  error: null,
};

const {
   CREATE_GROUP_START,
   CREATE_GROUP_SUCCESS,
   CREATE_GROUP_FAILURE,
} = action;

export function createGroupReducer(state = createGroupState, action) {
  console.log("action",action)
  switch (action.type) {
    case  CREATE_GROUP_START:
      return {
        ...state,
        loading: true,
      };
    case  CREATE_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case  CREATE_GROUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}