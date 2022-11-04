import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton, MediaUpload } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { GlobalFont } from '../../../utils/FontFamily';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from "react-native-image-picker"
import { UploadImage, UploadVideos } from '../../../redux/Actions/playerSignUpService';
import Video from 'react-native-video';
import { CreatePost } from '../../../redux/Actions/createPostService';
import Spinner from 'react-native-loading-spinner-overlay';
import { getFeedPostData } from '../../../redux/Actions/getFeedPostService';
import { editMyPost, getMyPostsData } from '../../../redux/Actions/getMyPostService';

const CreateNewPost = ({ navigation, route }) => {
    console.log("route.params", route.params)

    const { imageResponse, videoResponse } = useSelector((state) => {
        return {
            imageResponse: state.playersignUp?.image?.media,
            videoResponse: state.playersignUp?.Video?.media
        }
    })


    const { data, message } = route.params
    const [postName, setPostName] = useState(data.postName)
    const [postText, setPostText] = useState(data.postText)
    const [postMedia, setPostMedia] = useState(data.postMedia)
    const [loading, setLoading] = useState(false)
    const [isImage, setIsImage] = useState('')

    const options = {
        mediaType: 'all',
        quality: 1,
        includeBase64: false,
    }

    const uploadImage = () => {
        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log("User cancelled!");
            } else if (response.error) {
                console.log("Error", res.error);
            } else {
                if (response.assets[0].type === "video/mp4") {
                    setIsImage("video")
                    const source = { uri: response.assets[0].uri };
                    setPostMedia(source)
                    dispatch(UploadVideos({ document: response.assets[0] }))
                } else {
                    console.log(response.assets[0], "response.assets[0]");
                    setIsImage("image")
                    setPostMedia(response.assets[0].uri)
                    dispatch(UploadImage({ document: response.assets[0] }))
                }
            }
        })
    }

    useEffect(() => {
        if (message === 'edit') {
            setPostMedia('https://d2tlu2bncpo1ch.cloudfront.net/' + `${data.postMedia}`)
        } else {
            setPostMedia("")
        }
    }, [message])


    const uploadVideo = () => {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.assets) {
                const uploadVideo = response.assets.map((vid) => {
                    return vid.uri
                })
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: uploadVideo[0] };
                    setPostMedia(source)
                    // dispatch(UploadVideos({ document: response.assets[0] }))
                }
            }
        });
    }
    console.log(imageResponse, "poiuytrewqlkjhgfdsamnbvcxz", videoResponse)

    const onSubmit = async () => {
        let obj = {
            postName: postName,
            postText: postText,
            postMedia: imageResponse ? imageResponse : videoResponse,
            isVideo: imageResponse ? false : true
        }
        console.log("obj-lokesh", obj);
        if (postMedia === '' || postName === '' || postText === '') {
            Alert.alert("Please fill all information")
        }
        let result = await dispatch(CreatePost(obj))
        console.log("result-CreatePost", result);
        if (result.status === 200) {
            setLoading(false)
            if (result) {
                dispatch(getFeedPostData())
                setLoading(false)
            }
            navigation.goBack()
        }
        else if (result == undefined || result.data.response.status.statusCode !== 200) {
            setLoading(false)
            Alert.alert(result.data.response.status.statusCode.customMessage)
        }

    }

    const onUpdate = async () => {
        console.log("onUpdate");
        let obj = {
            postId: data._id,
            postName: postName,
            postText: postText,
            postMedia: imageResponse ? imageResponse : videoResponse,
            isVideo: imageResponse ? false : true
        }
        let result = await dispatch(editMyPost(obj))
        console.log("result-editMyPost", result);
        if (result.status === 200) {
            setLoading(false)
            if (result) {
                dispatch(getMyPostsData())
                setLoading(false)
            }
            navigation.goBack()
        }
        else if (result == undefined || result.data.response.status.statusCode !== 200) {
            setLoading(false)
            Alert.alert(result.data.response.status.statusCode.customMessage)
        }
    }

    const dispatch = useDispatch()
    return (
        <View>
            <View style={styles.container}>
                {loading && <Spinner
                    visible={loading}
                    size={'large'}
                />}
            </View>
            <AppBackGroundImage>
                <SafeAreaView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>{message == "create" ? "Create Post" : "Edit Post"}</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.mainview}>
                            <View style={styles.whiteview}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Post Name</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        // multiline={true}
                                        onChangeText={(postName) => { setPostName(postName) }}
                                        defaultValue={message == "edit" ? data.postName : ""}
                                    />
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Post Text</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        multiline={true}
                                        onChangeText={(postText) => { setPostText(postText) }}
                                        defaultValue={message == "edit" ? data.postText : ""}
                                    />
                                    <View style={{ flexDirection: 'row', paddingTop: 50 }}>
                                        <TouchableOpacity onPress={() => uploadImage()}>
                                            {
                                                !postMedia ?
                                                    <View style={styles.MediaUpload}>
                                                        <SvgXml xml={MediaUpload} />
                                                    </View>
                                                    :
                                                    <View style={styles.UploadedMedia}>
                                                        {isImage === "video" ? <Video source={postMedia}
                                                            controls={true}
                                                            style={{ height: 82, width: 82, borderRadius: 10 }} /> :
                                                            <Image
                                                                source={{ uri: postMedia }}
                                                                style={{ height: 82, width: 82, borderRadius: 10 }}
                                                            />}
                                                    </View>
                                            }
                                        </TouchableOpacity>
                                        <Text style={{ padding: 34, color: '#8E8F8F', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Upload image or video</Text>
                                    </View>
                                </ScrollView>
                                <TouchableOpacity activeOpacity={0.8}
                                    onPress={() => { message == "create" ? onSubmit() : onUpdate() }
                                    }>
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.submitbtn}>
                                            {message == "create" ? "SUBMIT" : "UPDATE"}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
        fontFamily: `${GlobalFont}`
    },
    submitbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`

    },
    mainview: {
        alignContent: 'center',
        padding: 20
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        height: responsiveHeight(80)
    },
    input: {
        backgroundColor: '#fff',
        flex: 1,
        fontSize: 15
    },
    btnPrimary: {
        backgroundColor: '#152c69',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    backbtn: {
        width: 50,
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -10
    },
    MediaUpload: {
        height: 80,
        width: 80,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#8E8F8F',
        paddingHorizontal: 40,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed'
    },
    UploadedMedia: {
        height: 80,
        width: 80,
        borderRadius: 10,
        paddingHorizontal: 40,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CreateNewPost;
