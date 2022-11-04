import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";

import actions from "../actionsType/createPostAction";
import { getFeedPostData } from "./getFeedPostService";

const { createPostStart, createPostSuccess, createPostFailure, deletePostStart, deletePostSuccess, deletePostFailure } = actions;

export const CreatePost = (values, navigation) => async (dispatch) => {
    console.log("values-create-post", values);
    dispatch(createPostStart());
    return (new Promise(async (resolve, reject) => {
        try {
            AsyncStorage.getItem('accessToken').then((res) => {
                createPost(res);
            })
            const createPost = async (res) => {
                const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/addPost`, {
                    postName: values.postName,
                    postText: values.postText,
                    postMedia: values.postMedia,
                    isVideo: false
                },
                    {
                        headers: {
                            'Authorization': `${res}`
                        }
                    });
                console.log("create-post", response);
                dispatch(createPostSuccess(response.data.response.data));
                resolve(response)
                if (response) {
                    dispatch(getFeedPostData())
                }
            }
        } catch (error) {
            reject(error)
            console.log("error", error);
            dispatch(createPostFailure(error.message));
        }
    }))
};

export const EditPost = (values, navigation) => async (dispatch) => {
    dispatch(createPostStart());
    return (new Promise(async (resolve, reject) => {
        try {
            AsyncStorage.getItem('accessToken').then((res) => {
                createPost(res);
            })
            const createPost = async (res) => {
                const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/addPost`, {
                    postName: values.postName,
                    postText: values.postText,
                    postMedia: values.postMedia,
                    isVideo: values.isVideo
                },
                    {
                        headers: {
                            'Authorization': `${res}`
                        }
                    });
                console.log("response--------12", response);
                dispatch(createPostSuccess(response.data.response.data));
                resolve(response)
                if (response) {
                    dispatch(getFeedPostData())
                }
            }
        } catch (error) {
            reject(error)
            dispatch(createPostFailure(error.message));
        }
    }))
};

export const DeletePost = (values, navigation) => async (dispatch) => {
    dispatch(deletePostStart());
    console.log("values-delete", values);
    return (new Promise(async (resolve, reject) => {
        try {
            AsyncStorage.getItem('accessToken').then((res) => {
                deletePost(res);
            })
            const deletePost = async (res) => {
                const response = await axios.post(`https://api-rugby.appsmaventech.com/api/v1/user/deletePost`, {
                    postId: values.postId,
                },
                    {
                        headers: {
                            'Authorization': `${res}`
                        }
                    });
                console.log("resp-delete", response);
                dispatch(deletePostSuccess(response.data.response.data));
                resolve(response)
                if (response) {
                    dispatch(getFeedPostData())
                }
            }
        } catch (error) {
            reject(error)
            dispatch(deletePostFailure(error.message));
        }
    }))
};
