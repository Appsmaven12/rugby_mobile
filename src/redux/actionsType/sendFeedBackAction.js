const actions = {
    SEND_FEEDBACK_START: "SEND_FEEDBACK_START",
    SEND_FEEDBACK_SUCCESS: "SEND_FEEDBACK_SUCCESS",
    SEND_FEEDBACK_FAILURE: "SEND_FEEDBACK_FAILURE",

    sendFeedBackStart: () => {
        return {
            type: actions.SEND_FEEDBACK_START,
        };
    },
    sendFeedBackSuccess: (data) => {
        return {
            type: actions.SEND_FEEDBACK_SUCCESS,
            payload: data,
        };
    },
    sendFeedBackFailure: (data) => {
        return {
            type: actions.SEND_FEEDBACK_FAILURE,
            payload: data,
        };
    },
};

export default actions;
