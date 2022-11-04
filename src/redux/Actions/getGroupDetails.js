import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/getGroupDetailsAction";

const { getGroupDetailsStart, getGroupDetailsSuccess, getGroupDetailsFailure } = actions;

export const getGroupDetails = (values, navigation) => async (dispatch) => {
    console.log("getGroupDetailsList--2", values);
    dispatch(getGroupDetailsStart());
    return (new Promise(async (resolve, reject) => {
        try {
            console.log(values.userId  ,"values.userId vijay");
            const response = await authAxios.get(`https://api-rugby.appsmaventech.com/api/v1/user/getGroupDetail?groupId=${values}`)
            console.log("getGroupDetailsList--res", response);
            dispatch(getGroupDetailsSuccess(response?.data?.response));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(getGroupDetailsFailure(error.message));
        }
    }))
};