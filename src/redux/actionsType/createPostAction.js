const actions = {
    CREATE_POST_START: "CREATE_POST_START",
    CREATE_POST_SUCCESS: "CREATE_POST_SUCCESS",
    CREATE_POST_FAILURE: "CREATE_POST_FAILURE",

    EDIT_POST_START: "EDIT_POST_START",
    EDIT_POST_SUCCESS: "EDIT_POST_SUCCESS",
    EDIT_POST_FAILURE: "EDIT_POST_FAILURE",

    DELETE_POST_START: "DELETE_POST_START",
    DELETE_POST_SUCCESS: "DELETE_POST_SUCCESS",
    DELETE_POST_FAILURE: "DELETE_POST_FAILURE",

    createPostStart: () => {
        return {
            type: actions.CREATE_POST_START,
        };
    },
    createPostSuccess: (data) => {
        return {
            type: actions.CREATE_POST_SUCCESS,
            payload: data,
        };
    },
    createPostFailure: (data) => {
        return {
            type: actions.CREATE_POST_FAILURE,
            payload: data,
        };
    },

    editPostStart: () => {
        return {
            type: actions.EDIT_POST_START,
        };
    },
    editPostSuccess: (data) => {
        return {
            type: actions.EDIT_POST_SUCCESS,
            payload: data,
        };
    },
    editPostFailure: (data) => {
        return {
            type: actions.EDIT_POST_FAILURE,
            payload: data,
        };
    },

    deletePostStart: () => {
        return {
            type: actions.DELETE_POST_START,
        };
    },
    deletePostSuccess: (data) => {
        return {
            type: actions.DELETE_POST_SUCCESS,
            payload: data,
        };
    },
    deletePostFailure: (data) => {
        return {
            type: actions.DELETE_POST_FAILURE,
            payload: data,
        };
    },
};


export default actions;
