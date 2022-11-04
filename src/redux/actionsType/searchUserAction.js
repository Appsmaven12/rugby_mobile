const actions = {

    SEARCH_USER_START: "SEARCH_USER_START",
    SEARCH_USER_SUCCESS: "SEARCH_USER_SUCCESS",
    SEARCH_USER_FAILURE: "SEARCH_USER_FAILURE",

    ADVANCE_SEARCH_USER_START: "ADVANCE_SEARCH_USER_START",
    ADVANCE_SEARCH_USER_SUCCESS: "ADVANCE_SEARCH_USER_SUCCESS",
    ADVANCE_SEARCH_USER_FAILURE: "ADVANCE_SEARCH_USER_FAILURE",

    //------------------------SEARCH_USER--------------------------------

    searchUserStart: () => {
        return {
            type: actions.SEARCH_USER_START,
        };
    },
    searchUserSuccess: (data) => {
        console.log("searchUserSuccess", data);
        return {
            type: actions.SEARCH_USER_SUCCESS,
            payload: data,
        };
    },
    searchUserFailure: (data) => {
        return {
            type: actions.SEARCH_USER_FAILURE,
            payload: data,
        };
    },

    //---------------------ADVANCE_SEARCH_USER-----------------------------------

    advanceSearchUserStart: () => {
        return {
            type: actions.ADVANCE_SEARCH_USER_START,
        };
    },
    advanceSearchUserSuccess: (data) => {
        console.log("advanceSearchUserSuccess", data);
        return {
            type: actions.ADVANCE_SEARCH_USER_SUCCESS,
            payload: data,
        };
    },
    advanceSearchUserFailure: (data) => {
        return {
            type: actions.ADVANCE_SEARCH_USER_FAILURE,
            payload: data,
        };
    }
}

export default actions;