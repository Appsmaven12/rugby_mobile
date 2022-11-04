import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/getProfileAction";

const { getProfileStart, getProfileSuccess, getProfileFailure } = actions;

export const getProfileList = (values, navigation) => async (dispatch) => {
    console.log("getProfileList--2 vijay", values);
    dispatch(getProfileStart());
    return (new Promise(async (resolve, reject) => {
        try {
            console.log(values.userId  ,"values.userId vijay");
            const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/getProfile`, {
                userId: values.userId
            });
            console.log("getProfileList--1 vijay", response);
            dispatch(getProfileSuccess(response.data.response.data));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(getProfileFailure(error.message));
        }
    }))
};