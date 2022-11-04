import action from "../actionsType/sendFeedBackAction"

const feedback = {
    loading: true,
    data: [],
    error: null,
};

const {
    SEND_FEEDBACK_START,
    SEND_FEEDBACK_SUCCESS,
    SEND_FEEDBACK_FAILURE,
} = action;

export function SendFeedBackReducer(state = feedback, action) {
    switch (action.type) {
        case SEND_FEEDBACK_START:
            return {
                ...state,
                loading: true,
            };
        case SEND_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case SEND_FEEDBACK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}