import AsyncStorage from "@react-native-async-storage/async-storage";
import authAxios from '../../components/common/RequestHeader'
// import { Alert } from "react-native";

import actions from "../actionsType/getFeedPostAction";

const { feedPostStart, feedPostSuccess, feedPostFailure,
    likePostStart, likePostSuccess, likePostFailure,
    commentPostStart, commentPostSuccess, commentPostFailure,
    reportUserStart, reportUserSuccess, reportUserFailure
} = actions;


export const getFeedPostData = (values, navigation) => async (dispatch) => {
    dispatch(feedPostStart());
    return (new Promise(async (resolve, reject) => {
        try {
            const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/getPostsList`, {
                skip: 0,
                limit: 10,
            });
            dispatch(feedPostSuccess(response.data.response.data));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(feedPostFailure(error.message));
        }
    }))
};

export const likePostData = (values, navigation) => async (dispatch) => {
    dispatch(likePostStart());
    return (new Promise(async (resolve, reject) => {
        console.log(values);
        try {
            const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/addPostLike`,
                {
                    postId: values.postId,
                    status: values.status,
                }
            );
            dispatch(likePostSuccess(response.data.response.data));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(likePostFailure(error.message));
        }
    }))
};

export const commentPostData = (values, navigation) => async (dispatch) => {
    dispatch(commentPostStart());
    console.log(values, "comment");
    return (new Promise(async (resolve, reject) => {
        try {
            const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/addPostComment`, {
                postId: values.postId,
                commentText: values.commentText,
            });
            console.log("commentPostData--1", response);
            dispatch(commentPostSuccess(response.data.response.data));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(commentPostFailure(error.message));
        }
    }))
};

export const reportUser = (values, navigation) => async (dispatch) => {
    dispatch(reportUserStart());
    console.log("reportUser-values", values);
    return (new Promise(async (resolve, reject) => {
        try {
            const response = await authAxios.post(`https://api-rugby.appsmaventech.com/api/v1/user/reportUserForPost`, {
                postId: values.postId,
                userId: values.userId
            });
            console.log("reportUser--1", response);
            dispatch(reportUserSuccess(response.data.response.data));
            resolve(response)
            return response.data.response.data;
        } catch (error) {
            reject(error)
            dispatch(reportUserFailure(error.message));
        }
    }))
};