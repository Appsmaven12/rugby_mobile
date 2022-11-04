import authAxios from '../../components/common/RequestHeader'

import actions from "../actionsType/searchUserAction";

const {searchUserStart, searchUserSuccess, searchUserFailure, advanceSearchUserStart, advanceSearchUserSuccess, advanceSearchUserFailure} = actions

export const searchUser = (values, navigation) => async (dispatch) => {
    dispatch(searchUserStart());
    return (new Promise(async (resolve, reject) => {
        try {
            const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/userSearch`, {
                searchText: values.searchText
            });
            dispatch(searchUserSuccess(response.data.response.data));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(searchUserFailure(error.message));
        }
    }))
};

export const advanceSearchUser = (values, navigation) => async (dispatch) => {
    dispatch(advanceSearchUserStart());
    return (new Promise(async (resolve, reject) => {
        try {
            const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/advanceSearch`, {
                type: "Player",
                firstName:"",
                lastName: "",
                region : "",
                country : "India",
                height: "",
                weight: ""
            });
            console.log("advanceSearchUserSuccess--1", response);
            dispatch(advanceSearchUserSuccess(response.data.response.data));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(advanceSearchUserFailure(error.message));
        }
    }))
};