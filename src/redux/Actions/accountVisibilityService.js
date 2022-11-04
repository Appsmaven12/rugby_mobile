import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/accountVisibilityAction";

const {
    accountVisibilityStart, accountVisibilitySuccess, accountVisibilityFailure,
} = actions;

export const accountVisibility = (values, navigation) => async (dispatch) => {
    console.log("accountVisibilityStart", values);
    dispatch(accountVisibilityStart());
    try {
        const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/updateAccountVisibilty`, {
            status: values
        });
        console.log("accountVisibilitySuccess", response);
        dispatch(accountVisibilitySuccess(response.data.response));
        return response.data.response
    } catch (error) {
        console.log(error)
        dispatch(accountVisibilityFailure(error.message));
    }
};
