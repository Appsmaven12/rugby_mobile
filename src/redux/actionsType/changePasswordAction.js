const actions = {

    CHANGE_PASSWORD_START: "CHANGE_PASSWORD_START",
    CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
    CHANGE_PASSWORD_FAILURE: "CHANGE_PASSWORD_FAILURE",

    changePasswordStart: () => {
        return {
            type: actions.CHANGE_PASSWORD_START,
        };
    },
    changePasswordSuccess: (data) => {
        console.log("changePasswordSuccess", data);
        return {
            type: actions.CHANGE_PASSWORD_SUCCESS,
            payload: data,
        };
    },
    changePasswordFailure: (data) => {
        return {
            type: actions.CHANGE_PASSWORD_FAILURE,
            payload: data,
        };
    },
}
export default actions;