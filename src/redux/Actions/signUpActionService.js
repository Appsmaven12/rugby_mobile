import axios from "axios";
import { Alert } from "react-native";

import actions from "../actionsType/signUpAction";

const { signupUserStart, signupUserSuccess, signupUserFailure } = actions;

export const SignUpUser = (values, navigation) => async (dispatch) => {
  dispatch(signupUserStart());

  try {
    const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/common/signUp`, {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmpassword
    });
    let result = response.data.response
    if (result.status.statusCode == 200) {
      dispatch(signupUserSuccess(response.data.response));
      navigation.navigate('Roles')
    }
    else if (result.status.statusCode == 400) {
      Alert.alert(result.status.customMessage)
    }
  } catch (error) {
    dispatch(signupUserFailure(error.message));
  }
};