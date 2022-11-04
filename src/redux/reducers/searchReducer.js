import action from "../actionsType/searchUserAction"

const searchUserState = {
  loading: true,
  data: [],
  error: null,
};

const advanceSearchUserState = {
  loading: true,
  data: [],
  error: null,
};


const {
   SEARCH_USER_START,
   SEARCH_USER_SUCCESS,
   SEARCH_USER_FAILURE,

   ADVANCE_SEARCH_USER_START,
   ADVANCE_SEARCH_USER_SUCCESS,
   ADVANCE_SEARCH_USER_FAILURE,
} = action;

export function searchUserReducer(state = searchUserState, action) {
  console.log("action",action)
  switch (action.type) {
    case  SEARCH_USER_START:
      return {
        ...state,
        loading: true,
      };
    case  'SEARCH_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case  SEARCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function advanceSearchUserReducer(state = advanceSearchUserState, action) {
  console.log("action",action)
  switch (action.type) {
    case  ADVANCE_SEARCH_USER_START:
      return {
        ...state,
        loading: true,
      };
    case  'ADVANCE_SEARCH_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case  ADVANCE_SEARCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
