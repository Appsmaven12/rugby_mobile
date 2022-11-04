import action from "../actionsType/coachSignUpAction"

const changePassword = {
    loading: true,
    data: [],
    error: null,
};

const {
    CHANGE_PASSWORD_START,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAILURE
} = action;

export function ChangePasswordReducer(state = changePassword, action) {
    switch (action.type) {
        case CHANGE_PASSWORD_START:
            return {
                ...state,
                loading: true,
            };
        case CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}