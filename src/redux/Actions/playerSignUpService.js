import axios from "axios";
// import { Alert } from "react-native";

import actions from "../actionsType/playerSignUpAction";

const { playersignupUserStart, playersignupUserSuccess, playersignupUserFailure,
  addplayersignupUserStart, addplayersignupUserSuccess, addplayersignupUserFailure,
  addplayercareersignupUserStart, addplayercareersignupUserSuccess, addplayercareersignupUserFailure,
  playerStatsStart, playerStatsStartSuccess, playerStatsStartFailure,
  supportingTeamsStart, supportingTeamsSuccess, supportingTeamsFailure,
  InterestsStart, InterestsSuccess, InterestsFailure,
  uploadVideoSuccess, uploadImageSuccess, uploadVideoFailure, uploadImageFailure,
} = actions;

// Player Sign UpUser --------------------------------------

export const PlayerSignUpUser = (values, navigation) => async (dispatch) => {
  dispatch(playersignupUserStart());

  try {
    const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/registerStepFirst`, {
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
    console.log("playersignupUserSuccess", response);
    dispatch(playersignupUserSuccess(response.data.response));
    return response.data.response

  } catch (error) {
    console.log(error)
    dispatch(playersignupUserFailure(error.message));
  }
};

// Upload Profile Image -----------------------------------------

export const UploadImage = (values, navigation) => async (dispatch) => {
  try {
    const obj = {
      type: values.document.type,
      name: values.document.fileName,
      width: values.document.width,
      height: values.document.height,
      uri: values.document.uri,
      fileSize: values.document.fileSize,
      isVideo: false

    }
    console.log(obj,  "obj");
    const formData = new FormData()
    formData.append("document", obj)

    const response = await fetch(`https://api-rugby.appsmaventech.com/api/v1/common/uploadMedia`, {
      body: formData,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
      },
    })
    const json = await response.json()
    console.log("uploadImageSuccess", json);
    if (response.status == 200) {
      dispatch(uploadImageSuccess(json.response))
      return response.data.response
    }
  } catch (error) {
    dispatch(uploadImageFailure(error.message));
  }
};

// Upload Videos -----------------------------------------

export const UploadVideos = (values, navigation) => async (dispatch) => {
  // dispatch(uploadImageStart());
  // console.log("response1-values", values);
  try {
    const formData = new FormData()
    formData.append("document",
      {
        duration: values.duration,
        type: values.document.type,
        name: values.document.fileName,
        width: values.document.width,
        height: values.document.height,
        uri: values.document.uri,
        fileSize: values.document.fileSize,
        isVideo: values.isVideo
      })

    const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/common/uploadMedia`,
      formData,
    );
    console.log("uploadVideoSuccess", response);
    if (response.status == 200) {
      dispatch(uploadVideoSuccess(response.data.response))
      return response.data.response
    }
  } catch (error) {
    dispatch(uploadVideoFailure(error.message));
  }
};

//  Add Player Sign Up User --------------------------------------

export const AddPlayerSignUpUser = (values, navigation) => async (dispatch) => {
  dispatch(addplayersignupUserStart());
  console.log("curentvalues", values);
  try {
    const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/registerStepSecond`, {
      height: values.height,
      weight: values.weight,
      id: values.uniqueId,
      currentTeamIds: values.currentTeamIds,
      interestIds: values.interestIds,
      // "interestIds": [
      //   "62bc8d1d817613e82b690e68",
      //   "62bc8d16817613e82b690e67"
      // ],
      "rugbyCodes": [
        {
          "code": "Leauge",
          "selectType": [
            "Full-back",
            "Wing"
          ]
        },
        {
          "code": "Union",
          "selectType": [
            "Wing",
            "Full-back"
          ]
        }
      ],
      videos: values.videos,
      education: values.education

    });
    console.log("response-ids", response);
    if (response.status == 200) {
      //   navigation.navigate('AccountInfo')
      dispatch(addplayersignupUserSuccess(response));
      return response.data.response
    }
  } catch (error) {
    console.log(error)
    dispatch(addplayersignupUserFailure(error.message));
  }
};

// Add Player Career SignUp User --------------------------------------

export const AddPlayerCareerSignUpUser = (values, navigation) => async (dispatch) => {
  dispatch(addplayercareersignupUserStart());
  console.log("response-values", values);
  try {
    const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/registerStepThird`, {
      carrierInformation: values.carrierInformation,
      id: values.id
    });
    console.log("response-career", response);
    if (response.status == 200) {
      //   navigation.navigate('AccountInfo')
      dispatch(addplayercareersignupUserSuccess(response));
      return response.data.response
    }
  } catch (error) {
    console.log(error)
    dispatch(addplayercareersignupUserFailure(error.message));
  }
};

// Add Player Career SignUp User --------------------------------------

export const PlayerStatsStart = (values, navigation) => async (dispatch) => {
  dispatch(playerStatsStart());
  console.log("response-PlayerStatsStart", values);
  try {
    const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/registerStepFourth`, {
      id: values.id,
      speedAndFitness: values.speedAndFitness,
      strengthAndPower: values.strengthAndPower,

    });
    console.log("PlayerStatsStart", response);
    if (response.status == 200) {
      return response.data.response
    }
  } catch (error) {
    console.log(error)
    dispatch(playerStatsStartFailure(error.message));
  }
};

export const getSupportingTeamsData = () => async (dispatch) => {
  dispatch(supportingTeamsStart());
  try {
    const response = await axios.get(`https://api-rugby.appsmaventech.com/api/v1/common/getAllTeams`)
    if (response.status == 200) {
      dispatch(supportingTeamsSuccess(response.data.response.data));
    }
  } catch (error) {
    console.log(error)
    dispatch(supportingTeamsFailure(error.message));
  }
};

export const getInterestsData = (values, navigation) => async (dispatch) => {
  dispatch(InterestsStart());

  try {
    const response = await axios.get(`https://api-rugby.appsmaventech.com/api/v1/common/getAllInterests`)
    if (response.status == 200) {
      dispatch(InterestsSuccess(response.data.response.data));
    }
  } catch (error) {
    console.log(error)
    dispatch(InterestsFailure(error.message));
  }
};