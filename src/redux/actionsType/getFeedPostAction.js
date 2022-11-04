const actions = {

    FEED_POST_START: "FEED_POST_START",
    FEED_POST_SUCCESS: "FEED_POST_SUCCESS",
    FEED_POST_FAILURE: "FEED_POST_FAILURE",

    LIKE_POST_START: "LIKE_POST_START",
    LIKE_POST_SUCCESS: "LIKE_POST_SUCCESS",
    LIKE_POST_FAILURE: "LIKE_POST_FAILURE",

    COMMENT_POST_START: "COMMENT_POST_START",
    COMMENT_POST_SUCCESS: "COMMENT_POST_SUCCESS",
    COMMENT_POST_FAILURE: "COMMENT_POST_FAILURE",

    REPORT_USER_START: "REPORT_USER_START",
    REPORT_USER_SUCCESS: "REPORT_USER_SUCCESS",
    REPORT_USER_FAILURE: "REPORT_USER_FAILURE",

    //--------------------------------------------------------

    feedPostStart: () => {
        return {
            type: actions.FEED_POST_START,
        };
    },
    feedPostSuccess: (data) => {
        return {
            type: actions.FEED_POST_SUCCESS,
            payload: data,
        };
    },
    feedPostFailure: (data) => {
        return {
            type: actions.FEED_POST_FAILURE,
            payload: data,
        };
    },

    //---------------------------------------------

    likePostStart: () => {
        return {
            type: actions.LIKE_POST_START,
        };
    },
    likePostSuccess: (data) => {
        return {
            type: actions.LIKE_POST_SUCCESS,
            payload: data,
        };
    },
    likePostFailure: (data) => {
        return {
            type: actions.LIKE_POST_FAILURE,
            payload: data,
        };
    },

    //------------------------------------------------------------------

    commentPostStart: () => {
        return {
            type: actions.COMMENT_POST_START,
        };
    },
    commentPostSuccess: (data) => {
        return {
            type: actions.COMMENT_POST_SUCCESS,
            payload: data,
        };
    },
    commentPostFailure: (data) => {
        return {
            type: actions.COMMENT_POST_FAILURE,
            payload: data,
        };
    },

    //------------------------------------------------------------------

    reportUserStart: () => {
        return {
            type: actions.REPORT_USER_START,
        };
    },
    reportUserSuccess: (data) => {
        return {
            type: actions.REPORT_USER_SUCCESS,
            payload: data,
        };
    },
    reportUserFailure: (data) => {
        return {
            type: actions.REPORT_USER_FAILURE,
            payload: data,
        };
    },
};

export default actions;
