const actions = {
    CONNECTIOIN_LIST_START: "CONNECTIOIN_LIST_START",
    CONNECTIOIN_LIST_SUCCESS: "CONNECTIOIN_LIST_SUCCESS",
    CONNECTIOIN_LIST_FAILURE: "CONNECTIOIN_LIST_FAILURE",

    ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_START: "ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_START",
    ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_SUCCESS: "ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_SUCCESS",
    ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_FAILURE: "ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_FAILURE",

    SEND_CONNECTION_START: "SEND_CONNECTION_START",
    SEND_CONNECTION_SUCCESS: "SEND_CONNECTION_SUCCESS",
    SEND_CONNECTION_FAILURE: "SEND_CONNECTION_FAILURE",

    REMOVE_CONNECTION_START: "REMOVE_CONNECTION_START",
    REMOVE_CONNECTION_SUCCESS: "REMOVE_CONNECTION_SUCCESS",
    REMOVE_CONNECTION_FAILURE: "REMOVE_CONNECTION_FAILURE",

    sendConnectionStart: () => {
        return {
            type: actions.SEND_CONNECTION_START,
        };
    },
    sendConnectionSuccess: (data) => {
        return {
            type: actions.SEND_CONNECTION_SUCCESS,
            payload: data,
        };
    },
    sendConnectionFailure: (data) => {
        return {
            type: actions.SEND_CONNECTION_FAILURE,
            payload: data,
        };
    },

//--------------------------------------------------------------------

    connectionListStart: () => {
        return {
            type: actions.CONNECTIOIN_LIST_START,
        };
    },
    connectionListSuccess: (data) => {
        return {
            type: actions.CONNECTIOIN_LIST_SUCCESS,
            payload: data,
        };
    },
    connectionListFailure: (data) => {
        return {
            type: actions.CONNECTIOIN_LIST_FAILURE,
            payload: data,
        };
    },

    //------------------------------------------------------------------

    acceptorDeclineconnectionListStart: () => {
        return {
            type: actions.ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_START,
        };
    },
    acceptorDeclineconnectionListSuccess: (data) => {
        return {
            type: actions.ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_SUCCESS,
            payload: data,
        };
    },
    acceptorDeclineconnectionListFailure: (data) => {
        return {
            type: actions.ACCEPT_OR_DECLINE_CONNECTIOIN_LIST_FAILURE,
            payload: data,
        };
    },

    //----------------------Remove Connection-----------

    removeConnectionStart: () => {
        return {
            type: actions.REMOVE_CONNECTION_START,
        };
    },
    removeConnectionSuccess: (data) => {
        return {
            type: actions.REMOVE_CONNECTION_SUCCESS,
            payload: data,
        };
    },
    removeConnectionFailure: (data) => {
        return {
            type: actions.REMOVE_CONNECTION_FAILURE,
            payload: data,
        };
    },
};

export default actions;
