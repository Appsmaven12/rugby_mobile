import authAxios from '../../components/common/RequestHeader'
// import { Alert } from "react-native";

import actions from "../actionsType/getMyPostAction";

const { myPostsStart, myPostsSuccess, myPostsFailure,
    editMyPostStart, editMyPostSuccess, editMyPostFailure
} = actions;


export const getMyPostsData = (values, navigation) => async (dispatch) => {
    dispatch(myPostsStart());
    console.log("values-getMyPostsData", values);
    return (new Promise(async (resolve, reject) => {
        try {
            const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/getMyPostsList`, {
                skip: 0,
                limit: 10,
            });
            console.log("response-mypost", response);
            dispatch(myPostsSuccess(response.data.response.data));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(myPostsFailure(error.message));
        }
    }))
};

export const editMyPost = (values, navigation) => async (dispatch) => {
    console.log("values-geteditMyPostData", values);
    dispatch(editMyPostStart());
    console.log("values-tData", values);
    return (
        new Promise(async (resolve, reject) => {
            try {
                const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/editPost`, {
                    postId: values.postId,
                    postName: values.postName,
                    postText: values.postText,
                    postMedia: values.postMedia,
                    isVideo: false
                });
                console.log("editMyPostSuccess--1", response);
                dispatch(editMyPostSuccess(response.data.response.data));
                resolve(response)
                return response.data.response.data;
            } catch (error) {
                console.log("values-geteditMyPostData")
                reject(error)
                dispatch(editMyPostFailure(error.message));
            }
        }))
};