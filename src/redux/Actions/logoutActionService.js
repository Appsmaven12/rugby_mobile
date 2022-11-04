import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

import actions from "../actionsType/logoutAction";

const { logoutUserStart, logoutUserSuccess, logoutUserFailure } = actions;

export const LogoutUser = (values, navigation) => async (dispatch) => {
    dispatch(logoutUserStart());

    try {
        AsyncStorage.getItem('accessToken').then((res) => {
            logoutmainUser(res);
        })
        const logoutmainUser = async (res) => {
            let config = {
                headers: {
                    authorization: res,
                }
            }
            let data = {
            }
            const response = await axios.put(`https://api-rugby.appsmaventech.com/api/v1/common/logout`, data, config);
            let result = response.data.response
            if (result.status.statusCode == 200) {
                dispatch(logoutUserSuccess(response.data.response));
                dispatch(socialLoginUserSuccess())
                return response.data.response
            } else if (result.status.statusCode == 400) {
                Alert.alert(result.status.customMessage)
            }
        }
    } catch (error) {
        console.log(error)
        dispatch(logoutUserFailure(error.message));
    }
};