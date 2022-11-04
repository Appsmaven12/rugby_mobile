const actions = {
  PLAYER_SIGNUP_USER_START: "PLAYER_SIGNUP_USER_START",
  PLAYER_SIGNUP_USER_SUCCESS: "PLAYER_SIGNUP_USER_SUCCESS",
  PLAYER_SIGNUP_USER_FAILURE: "PLAYER_SIGNUP_USER_FAILURE",

  //  Add Player Information SignUp
  ADD_PLAYER_SIGNUP_USER_START: "ADD_PLAYER_SIGNUP_USER_START",
  ADD_PLAYER_SIGNUP_USER_SUCCESS: "ADD_PLAYER_SIGNUP_USER_SUCCESS",
  ADD_PLAYER_SIGNUP_USER_FAILURE: "ADD_PLAYER_SIGNUP_USER_FAILURE",

  // Player Career Information SignUp
  ADD_PLAYER_CAREER_SIGNUP_USER_START: "ADD_PLAYER_CAREER_SIGNUP_USER_START",
  ADD_PLAYER_CAREER_SIGNUP_USER_SUCCESS: "ADD_PLAYER_CAREER_SIGNUP_USER_SUCCESS",
  ADD_PLAYER_CAREER_SIGNUP_USER_FAILURE: "ADD_PLAYER_CAREER_SIGNUP_USER_FAILURE",

  // Player Stats
  PLAYER_STATS_START: "PLAYER_STATS_START",
  PLAYER_STATS_SUCCESS: "PLAYER_STATS_SUCCESS",
  PLAYER_STATS_FAILURE: "PLAYER_STATS_FAILURE",

  // Supporting Teams
  SUPPORTING_TEAMS_START: "SUPPORTING_TEAMS_START",
  SUPPORTING_TEAMS_SUCCESS: "SUPPORTING_TEAMS_SUCCESS",
  SUPPORTING_TEAMS_FAILURE: "SUPPORTING_TEAMS_FAILURE",

  // INTEREST Teams
  INTEREST_START: "INTEREST_START",
  INTEREST_SUCCESS: "INTEREST_SUCCESS",
  INTEREST_FAILURE: "INTEREST_FAILURE",

  // UPLOAD PROFILE IMAGE
  UPLOAD_IMAGE_START: "UPLOAD_IMAGE_START",
  UPLOAD_IMAGE_SUCCESS: "UPLOAD_IMAGE_SUCCESS",
  UPLOAD_IMAGE_FAILURE: "UPLOAD_IMAGE_FAILURE",

  // UPLOAD PROFILE IMAGE
  UPLOAD_VIDEO_START: "UPLOAD_VIDEO_START",
  UPLOAD_VIDEO_SUCCESS: "UPLOAD_VIDEO_SUCCESS",
  UPLOAD_VIDEO_FAILURE: "UPLOAD_VIDEO_FAILURE",


  // PLAYER ACCOUNT INFORMATION 

  uploadImageStart: () => {
    return {
      type: actions.UPLOAD_IMAGE_START,
    };
  },
  uploadImageSuccess: (data) => {
    return {
      type: actions.UPLOAD_IMAGE_SUCCESS,
      payload: data,
    };
  },
  uploadImageFailure: (data) => {
    return {
      type: actions.UPLOAD_IMAGE_FAILURE,
      payload: data,
    };
  },

  uploadVideoStart: () => {
    return {
      type: actions.UPLOAD_VIDEO_START,
    };
  },
  uploadVideoSuccess: (data) => {
    return {
      type: actions.UPLOAD_VIDEO_SUCCESS,
      payload: data,
    };
  },
  uploadVideoFailure: (data) => {
    return {
      type: actions.UPLOAD_VIDEO_FAILURE,
      payload: data,
    };
  },

  // Upload profile Image

  playersignupUserStart: () => {
    return {
      type: actions.PLAYER_SIGNUP_USER_START,
    };
  },
  playersignupUserSuccess: (data) => {
    return {
      type: actions.PLAYER_SIGNUP_USER_SUCCESS,
      payload: data,
    };
  },
  playersignupUserFailure: (data) => {
    return {
      type: actions.PLAYER_SIGNUP_USER_FAILURE,
      payload: data,
    };
  },

  // Add Player Information SignUp

  addplayersignupUserStart: () => {
    return {
      type: actions.ADD_PLAYER_SIGNUP_USER_START,
    };
  },
  addplayersignupUserSuccess: (data) => {
    return {
      type: actions.ADD_PLAYER_SIGNUP_USER_SUCCESS,
      payload: data,
    };
  },
  addplayersignupUserFailure: (data) => {
    return {
      type: actions.ADD_PLAYER_SIGNUP_USER_FAILURE,
      payload: data,
    };
  },

  // Add Player Career SignUp

  addplayercareersignupUserStart: () => {
    return {
      type: actions.ADD_PLAYER_CAREER_SIGNUP_USER_START,
    };
  },
  addplayercareersignupUserSuccess: (data) => {
    return {
      type: actions.ADD_PLAYER_CAREER_SIGNUP_USER_SUCCESS,
      payload: data,
    };
  },
  addplayercareersignupUserFailure: (data) => {
    return {
      type: actions.ADD_PLAYER_CAREER_SIGNUP_USER_FAILURE,
      payload: data,
    };
  },

  // Add Player Stats SignUp

  playerStatsStart: () => {
    return {
      type: actions.PLAYER_STATS_START,
    };
  },
  playerStatsStartSuccess: (data) => {
    return {
      type: actions.PLAYER_STATS_SUCCESS,
      payload: data,
    };
  },
  playerStatsStartFailure: (data) => {
    return {
      type: actions.PLAYER_STATS_FAILURE,
      payload: data,
    };
  },

  // Supporting Teams
  supportingTeamsStart: () => {
    return {
      type: actions.SUPPORTING_TEAMS_START,
    };
  },
  supportingTeamsSuccess: (data) => {
    return {
      type: actions.SUPPORTING_TEAMS_SUCCESS,
      payload: data,
    };
  },
  supportingTeamsFailure: (data) => {
    return {
      type: actions.SUPPORTING_TEAMS_FAILURE,
      payload: data,
    };
  },

  InterestsStart: () => {
    return {
      type: actions.INTEREST_START,
    };
  },
  InterestsSuccess: (data) => {
    return {
      type: actions.INTEREST_SUCCESS,
      payload: data,
    };
  },
  InterestsFailure: (data) => {
    return {
      type: actions.INTEREST_FAILURE,
      payload: data,
    };
  },
};


export default actions;
