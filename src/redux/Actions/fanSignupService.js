import axios from "axios";

import actions from "../actionsType/fanSignUpAction";

const { fansignupUserStart, fansignupUserSuccess, fansignupUserFailure } = actions;

export const FanSignUpUser = (values, navigation) => async (dispatch) => {
  dispatch(fansignupUserStart());
  try {
    const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/registerFan`, {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      contactNumber: values.contactNumber,
      countryCode: "91",
      placeOfBirth: values.placeOfBirth,
      gender: values.gender,
      region: values.region,
      city: values.city,
      // supportTeamIds: values.supportTeamIds,
      state: values.state,
      country: values.country,
      zipCode: values.zipCode,
      profileImage: values.profileImage,
      deviceType: "IOS",
      deviceToken: "1212121212",
      appVersion: "1.0",
      loginType: "STANDARD",
      dateOfBirth: values.dateOfBirth,
    });
    dispatch(fansignupUserSuccess(response.data.response));
    return response.data.response

  } catch (error) {
    console.log(error)
    dispatch(fansignupUserFailure(error.message));
  }
};