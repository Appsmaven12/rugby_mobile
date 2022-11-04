import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/getUserDetailsAction";

const { getUserDetailsStart, getUserDetailsSuccess, getUserDetailsFailure } = actions;

export const getUserDetails = (values, navigation) => async (dispatch) => {
    console.log("getUserDetailsList--2", values);
    dispatch(getUserDetailsStart());
    return (new Promise(async (resolve, reject) => {
        try {
            console.log(values.userId  ,"values.userId vijay");
            const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/getUserDetails`, {
                userId: values.userId
            });
            console.log("getUserDetailsList--1", response);
            dispatch(getUserDetailsSuccess(response?.data?.response?.data));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(getUserDetailsFailure(error.message));
        }
    }))
};