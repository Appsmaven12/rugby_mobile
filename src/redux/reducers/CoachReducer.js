import action from "../actionsType/coachSignUpAction"

const coachinitialState = {
    loading: true,
    data: [],
    error: null,
    specialties: []
};

const {
    COACH_SIGNUP_USER_START,
    COACH_SIGNUP_USER_SUCCESS,
    COACH_SIGNUP_USER_FAILURE,

    SPECIALTIES_START,
    SPECIALTIES_SUCCESS,
    SPECIALTIES_FAILURE
} = action;

export function CoachSignUpReducer(state = coachinitialState, action) {
    switch (action.type) {
        case COACH_SIGNUP_USER_START:
            return {
                ...state,
                loading: true,
            };
        case COACH_SIGNUP_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case COACH_SIGNUP_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case SPECIALTIES_START:
            return {
                ...state,
                loading: true,
            };
        case SPECIALTIES_SUCCESS:
            return {
                ...state,
                loading: false,
                specialties: action.payload,
            };
        case SPECIALTIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}