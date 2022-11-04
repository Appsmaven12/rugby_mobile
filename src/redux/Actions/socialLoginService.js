import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

import actions from "../actionsType/socialLoginAction";

const { socialLoginUserStart, socialLoginUserSuccess, socialLoginUserFailure } = actions;

export const SocialLoginUser = (values, navigation) => async (dispatch) => {
  dispatch(socialLoginUserStart());
  return new Promise(async(resolve , reject)=>{
    try {
      const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/common/socialSignUp`, {
        id: values.id,
        type: "GOOGLE",
        email: values.email,
        firstName: values.givenName,
        "appVersion": "1.12",
        "deviceType": "IOS",
        "deviceToken": "dfsdfsdf"
      })
      let result = response.data.response
      if (result.status.statusCode == 200) {
         resolve(result)
      } else if (result.status.statusCode == 400) {
        Alert.alert(result.status.customMessage)
      }
    } catch (error) {
      console.log(error)
      dispatch(socialLoginUserFailure(error.message));
    }
  })

};