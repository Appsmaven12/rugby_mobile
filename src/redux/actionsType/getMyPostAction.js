const actions = {

    MY_POST_START: "MY_POST_START",
    MY_POST_SUCCESS: "MY_POST_SUCCESS",
    MY_POST_FAILURE: "MY_POST_FAILURE",

    EDIT_MY_POST_START: "EDIT_MY_POST_START",
    EDIT_MY_POST_SUCCESS: "EDIT_MY_POST_SUCCESS",
    EDIT_MY_POST_FAILURE: "EDIT_MY_POST_FAILURE",

    //----------------MY POST----------------------------------------

    myPostsStart: () => {
        return {
            type: actions.MY_POST_START,
        };
    },
    myPostsSuccess: (data) => {
        console.log("myPostsSuccess", data);
        return {
            type: actions.MY_POST_SUCCESS,
            payload: data,
        };
    },
    myPostsFailure: (data) => {
        return {
            type: actions.MY_POST_FAILURE,
            payload: data,
        };
    },

    //---------------------EDIT MY POST-----------------------------------

    editMyPostStart: () => {
        return {
            type: actions.EDIT_MY_POST_START,
        };
    },
    editMyPostSuccess: (data) => {
        console.log("editMyPostSuccess", data);
        return {
            type: actions.EDIT_MY_POST_SUCCESS,
            payload: data,
        };
    },
    editMyPostFailure: (data) => {
        return {
            type: actions.EDIT_MY_POST_FAILURE,
            payload: data,
        };
    },
};

export default actions;
