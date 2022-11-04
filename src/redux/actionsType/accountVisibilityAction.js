const actions = {

    ACCOUNT_VISIBILITY_START: "ACCOUNT_VISIBILITY_START",
    ACCOUNT_VISIBILITY_SUCCESS: "ACCOUNT_VISIBILITY_SUCCESS",
    ACCOUNT_VISIBILITY_FAILURE: "ACCOUNT_VISIBILITY_FAILURE",

    accountVisibilityStart: () => {
        return {
            type: actions.ACCOUNT_VISIBILITY_START,
        };
    },
    accountVisibilitySuccess: (data) => {
        console.log("accountVisibilitySuccess", data);
        return {
            type: actions.ACCOUNT_VISIBILITY_SUCCESS,
            payload: data,
        };
    },
    accountVisibilityFailure: (data) => {
        return {
            type: actions.ACCOUNT_VISIBILITY_FAILURE,
            payload: data,
        };
    },
}
export default actions;