const actions = {
  COACH_SIGNUP_USER_START: "COACH_SIGNUP_USER_START",
  COACH_SIGNUP_USER_SUCCESS: "COACH_SIGNUP_USER_SUCCESS",
  COACH_SIGNUP_USER_FAILURE: "COACH_SIGNUP_USER_FAILURE",

  SPECIALTIES_START: "SPECIALTIES_START",
  SPECIALTIES_SUCCESS: "SPECIALTIES_SUCCESS",
  SPECIALTIES_FAILURE: "SPECIALTIES_FAILURE",

  coachsignupUserStart: () => {
    return {
      type: actions.COACH_SIGNUP_USER_START,
    };
  },
  coachsignupUserSuccess: (data) => {
    return {
      type: actions.COACH_SIGNUP_USER_SUCCESS,
      payload: data,
    };
  },
  coachsignupUserFailure: (data) => {
    return {
      type: actions.COACH_SIGNUP_USER_FAILURE,
      payload: data,
    };
  },

  SpecialtiesStart: () => {
    return {
      type: actions.SPECIALTIES_START,
    };
  },
  SpecialtiesSuccess: (data) => {
    return {
      type: actions.SPECIALTIES_SUCCESS,
      payload: data,
    };
  },
  SpecialtiesFailure: (data) => {
    return {
      type: actions.SPECIALTIES_FAILURE,
      payload: data,
    };
  },
};

export default actions;
