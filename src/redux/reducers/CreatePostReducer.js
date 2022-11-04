import action from "../actionsType/coachSignUpAction"

const createPostState = {
    loading: true,
    data: [],
    error: null,
};

const {
    CREATE_POST_START,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAILURE,

    EDIT_POST_START,
    EDIT_POST_SUCCESS,
    EDIT_POST_FAILURE,

    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
} = action;

export function CreatePostReducer(state = createPostState, action) {
    switch (action.type) {
        case CREATE_POST_START:
            return {
                ...state,
                loading: true,
            };
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case CREATE_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export function EditPostReducer(state = createPostState, action) {
    switch (action.type) {
        case EDIT_POST_START:
            return {
                ...state,
                loading: true,
            };
        case EDIT_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case EDIT_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export function DeletePostReducer(state = createPostState, action) {
    switch (action.type) {
        case DELETE_POST_START:
            return {
                ...state,
                loading: true,
            };
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case DELETE_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

