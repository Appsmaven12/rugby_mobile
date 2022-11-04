import axios from "axios";
import { Alert } from "react-native";

import loginactions from "../actionsType/userLoginAction";

const { loginUserStart, loginUserSuccess, loginUserFailure } = loginactions;

export const LoginUser = (values, navigation) => async (dispatch) => {
  console.log("LoginUser---1", values);
  dispatch(loginUserStart());

  try {
    const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/common/login`, {
        email: values.email,
        password: values.password,
        "deviceType": "ANDROID",
        "appVersion": "1.23",
        "deviceToken": "12345"
    });
    console.log("LoginUser---2", response);
    let result=response.data.response
    if(result.status.statusCode == 200) {
    dispatch(loginUserSuccess(response.data.response.data));
    return response.data.response
    } else if (result.status.statusCode == 400){
      Alert.alert(result.status.customMessage)
    }
  } catch (error) {
    console.log(error)
    dispatch(loginUserFailure(error.message));
  }
};