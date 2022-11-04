import action from "../actionsType/playerSignUpAction"

const signupinitialState = {
  loading: true,
  data: [],
  error: null,
  image: null,
  video: {attackvideo: '', defencevideo: '', cgeneralvideo: ''}
};
const addplayerinitialState = {
  loading: true,
  data: [],
  error: null,
  interests: []
}; const playercareerinitialState = {
  loading: true,
  data: [],
  error: null,
}; const playerstatsinitialState = {
  loading: true,
  data: [],
  supportingTeams: [],
  error: null,
};

const {
  PLAYER_SIGNUP_USER_START,
  PLAYER_SIGNUP_USER_SUCCESS,
  PLAYER_SIGNUP_USER_FAILURE,

  ADD_PLAYER_SIGNUP_USER_START,
  ADD_PLAYER_SIGNUP_USER_SUCCESS,
  ADD_PLAYER_SIGNUP_USER_FAILURE,

  ADD_PLAYER_CAREER_SIGNUP_USER_START,
  ADD_PLAYER_CAREER_SIGNUP_USER_SUCCESS,
  ADD_PLAYER_CAREER_SIGNUP_USER_FAILURE,

  PLAYER_STATS_START,
  PLAYER_STATS_SUCCESS,
  PLAYER_STATS_FAILURE,

  SUPPORTING_TEAMS_START,
  SUPPORTING_TEAMS_SUCCESS,
  SUPPORTING_TEAMS_FAILURE,

  INTEREST_START,
  INTEREST_SUCCESS,
  INTEREST_FAILURE,

  UPLOAD_IMAGE_START,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,

  UPLOAD_VIDEO_START,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAILURE


} = action;
export function playerSignUpReducer(state = signupinitialState, action) {
  switch (action.type) {
    case PLAYER_SIGNUP_USER_START:
      return {
        ...state,
        loading: true,
      };
    case PLAYER_SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case PLAYER_SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SUPPORTING_TEAMS_START:
      return {
        ...state,
        loading: true,
      };
    case SUPPORTING_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        supportingTeams: action.payload,
      };
    case SUPPORTING_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPLOAD_IMAGE_START:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_IMAGE_SUCCESS:
      console.log("actioin.payload", action.payload);
      return {
        ...state,
        loading: false,
        image: action.payload,
        Video:""
      };
    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case UPLOAD_VIDEO_START:
        return {
          ...state,
          loading: true,
        };
      case UPLOAD_VIDEO_SUCCESS:
        return {
          ...state,
          loading: false,
          Video: action.payload,
          image:""
        };
      case UPLOAD_VIDEO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

    default:
      return state;
  }
}

export function addplayerSignUpReducer(state = addplayerinitialState, action) {
  switch (action.type) {
    case ADD_PLAYER_SIGNUP_USER_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_PLAYER_SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ADD_PLAYER_SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


    case INTEREST_START:
      return {
        ...state,
        loading: true,
      };
    case INTEREST_SUCCESS:
      return {
        ...state,
        loading: false,
        interests: action.payload,
      };
    case INTEREST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export function addplayerCareerSignUpReducer(state = playercareerinitialState, action) {
  switch (action.type) {
    case ADD_PLAYER_CAREER_SIGNUP_USER_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_PLAYER_CAREER_SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ADD_PLAYER_CAREER_SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export function playerStatsReducer(state = playerstatsinitialState, action) {
  switch (action.type) {
    case PLAYER_STATS_START:
      return {
        ...state,
        loading: true,
      };
    case PLAYER_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case PLAYER_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}