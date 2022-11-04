import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/changePasswordAction";

const {
    changePasswordStart, changePasswordSuccess, changePasswordFailure,
} = actions;

export const changePassword = (values, navigation) => async (dispatch) => {
    console.log("changePasswordStart", values);
    dispatch(changePasswordStart());
    try {
        const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/updatePassword`, {
            password: values.password,
            newPassword: values.newPassword
        });
        console.log("changePasswordSuccess", response);
        dispatch(changePasswordSuccess(response.data.response));
        return response.data.response
    } catch (error) {
        console.log(error)
        dispatch(changePasswordFailure(error.message));
    }
};
