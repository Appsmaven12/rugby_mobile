import axios from "axios";

import actions from "../actionsType/coachSignUpAction";

const { coachsignupUserStart, coachsignupUserSuccess, coachsignupUserFailure, SpecialtiesStart, SpecialtiesSuccess, SpecialtiesFailure} = actions;

export const CoachSignUpUser = (values, navigation) => async (dispatch) => {
    dispatch(coachsignupUserStart());
    try {
      const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/registerCoach`, {
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
        carrierInformation: values.carrierInformation,
        specialtiesIds: values.specialtiesIds,
        supportTeamIds: values.supportTeamIds,
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
      
      console.log("response-coach", response);
      dispatch(coachsignupUserSuccess(response.data.response));
      return response.data.response
  
    } catch (error) {
      console.log(error)
      dispatch(coachsignupUserFailure(error.message));
    }
  };

  export const getSpecialtiesData = (values, navigation) => async (dispatch) => {
    dispatch(SpecialtiesStart());
  
    try {
      const response = await axios.get(`https://api-rugby.appsmaventech.com/api/v1/common/getAllSpecialties`)
      if (response.status == 200) {
        dispatch(SpecialtiesSuccess(response.data.response.data));
      }
    } catch (error) {
      dispatch(SpecialtiesFailure(error.message));
    }
  };