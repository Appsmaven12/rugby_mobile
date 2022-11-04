import action from "../actionsType/connectionAction"

const feedinitialState = {
    loading: true,
    data: [],
    error: null,
};

const {

    FEED_POST_START,
    FEED_POST_SUCCESS,
    FEED_POST_FAILURE,

    LIKE_POST_START,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE,

    COMMENT_POST_START,
    COMMENT_POST_SUCCESS,
    COMMENT_POST_FAILURE,

    REPORT_USER_START,
    REPORT_USER_SUCCESS,
    REPORT_USER_FAILURE,

} = action;


export function FeedPostReducer(state = feedinitialState, action) {
    switch (action.type) {
        case FEED_POST_START:
            return {
                ...state,
                loading: true,
            };
        case 'FEED_POST_SUCCESS':
            console.log("action", action);
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case FEED_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export function LikePostReducer(state = feedinitialState, action) {
    switch (action.type) {
        case LIKE_POST_START:
            return {
                ...state,
                loading: true,
            };
        case LIKE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case LIKE_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export function CommentPostReducer(state = feedinitialState, action) {
    switch (action.type) {
        case COMMENT_POST_START:
            return {
                ...state,
                loading: true,
            };
        case COMMENT_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case COMMENT_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export function reportUserReducer(state = feedinitialState, action) {
    switch (action.type) {
        case REPORT_USER_START:
            return {
                ...state,
                loading: true,
            };
        case REPORT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case REPORT_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

