import action from "../actionsType/accountVisibilityAction"

const accountVisibility = {
    loading: true,
    data: [],
    error: null,
};

const {
    ACCOUNT_VISIBILITY_START,
    ACCOUNT_VISIBILITY_SUCCESS,
    ACCOUNT_VISIBILITY_FAILURE
} = action;

export function AccountVisibilityReducer(state = accountVisibility, action) {
    switch (action.type) {
        case ACCOUNT_VISIBILITY_START:
            return {
                ...state,
                loading: true,
            };
        case ACCOUNT_VISIBILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case ACCOUNT_VISIBILITY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}