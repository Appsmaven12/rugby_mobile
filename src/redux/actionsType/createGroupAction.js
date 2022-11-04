const actions = {

    CREATE_GROUP_START: "CREATE_GROUP_START",
    CREATE_GROUP_SUCCESS: "CREATE_GROUP_SUCCESS",
    CREATE_GROUP_FAILURE: "CREATE_GROUP_FAILURE",


    createGroupStart: () => {
        return {
            type: actions.CREATE_GROUP_START,
        };
    },
    createGroupSuccess: (data) => {
        console.log("createGroupSuccess", data);
        return {
            type: actions.CREATE_GROUP_SUCCESS,
            payload: data,
        };
    },
    createGroupFailure: (data) => {
        return {
            type: actions.CREATE_GROUP_FAILURE,
            payload: data,
        };
    },
}
export default actions;