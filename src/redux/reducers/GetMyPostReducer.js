import action from "../actionsType/getMyPostAction"

const mypostinitialState = {
    loading: true,
    data: [],
    error: null,
};

const {

    MY_POST_START,
    MY_POST_SUCCESS,
    MY_POST_FAILURE,

    EDIT_MY_POST_START,
    EDIT_MY_POST_SUCCESS,
    EDIT_MY_POST_FAILURE,

} = action;


export function MyPostsReducer(state = mypostinitialState, action) {
    console.log("MyPostsReducer-1", action);
    switch (action.type) {
        case MY_POST_START:
            return {
                ...state,
                loading: true,
            };
        case MY_POST_SUCCESS:
            console.log("MY_POST_SUCCESS", action);
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case MY_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export function editMyPostsReducer(state = mypostinitialState, action) {
    console.log("editMyPostsReducer-1", action);
    switch (action.type) {
        case EDIT_MY_POST_START:
            return {
                ...state,
                loading: true,
            };
        case EDIT_MY_POST_SUCCESS:
            console.log("EDIT_MY_POST_SUCCESS", action);
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case EDIT_MY_POST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}