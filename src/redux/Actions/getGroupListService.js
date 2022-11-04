import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import authAxios from '../../components/common/RequestHeader'
import actions from "../actionsType/getGroupAction";

const { getGroupStart, getGroupSuccess, getGroupFailure } = actions;

export const getGroupList = (values, navigation) => async (dispatch) => {
    console.log("getGroupList call",);
    dispatch(getGroupStart());
    return (new Promise(async (resolve, reject) => {
        try {
            const response = await authAxios.get(`https://api-rugby.appsmaventech.com/api/v1/user/getGroups?skip=0&limit=10`);
            console.log("getGroupList--1", response);
            dispatch(getGroupSuccess(response.data.response.data));
            resolve(response)
            // return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(getGroupFailure(error.message));
        }
    }))
};
