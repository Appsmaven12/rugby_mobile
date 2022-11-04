import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import actions from "../actionsType/createGroupAction";

const { createGroupStart, createGroupSuccess, createGroupFailure } = actions

export const createGroup = (values, navigation) => async (dispatch) => {
    console.log("values-create-post", values);
    dispatch(createGroupStart());
    return (new Promise(async (resolve, reject) => {
        try {
            AsyncStorage.getItem('accessToken').then((res) => {
                createGroup(res);
            })
            const createGroup = async (res) => {
                const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/addGroup`, {
                    name: values.name,
                    about: values.about,
                    image: values.image,
                    location: values.location,
                },
                    {
                        headers: {
                            'Authorization': `${res}`
                        }
                    });
                console.log("create-post", response);
                dispatch(createGroupSuccess(response.data.response.data));
                resolve(response)
            }
        } catch (error) {
            reject(error)
            console.log("error", error);
            dispatch(createGroupFailure(error.message));
        }
    }))
};