import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GlobalFont } from '../../../utils/FontFamily';
import * as ImagePicker from "react-native-image-picker";
import { UploadImage } from '../../../redux/Actions/playerSignUpService';
import { createGroup } from '../../../redux/Actions/createGroupService';
import { useDispatch, useSelector } from 'react-redux';

const CreateGroup = ({ navigation }) => {

    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [location, setLocation] = useState('')
    const [profileImage, setProfileImage] = useState('')

    const [loading, setLoading] = useState(false)

    const { imageResponse } = useSelector((state) => {
        return {
            imageResponse: state.playersignUp?.image?.media
        }
    })

    console.log("imageResponse", imageResponse);
    const dispatch = useDispatch()

    const uploadImage = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: false,
        }
        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log("User cancelled!");
            } else if (response.error) {
                console.log("Error", res.error);
            } else {
                setProfileImage(response.assets[0].uri)
                dispatch(UploadImage({ document: response.assets[0] }))
            }
        })
    }

    const _onSubmit = async () => {
        setLoading(true)
        let obj = {
            name: name,
            about: about,
            image: imageResponse,
            location: location
        }
        if (name === '' || about === '' || location === '') {
            Alert.alert("Please fill all information")
        } else {
            let result = await dispatch(createGroup(obj))
            console.log("result-group", result);
            if (result?.status == 200) {
                setLoading(false)
                navigation.navigate('Groups')
            } else if (result?.status == 200) {
                setLoading(false)
                Alert.alert("something went wrong")
            }
        }
    }

    return (
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
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Create Group</Text>
                    </View>
                </View>
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mainview}>
                    <View style={styles.whiteview}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                                <TouchableOpacity onPress={() => uploadImage()}>
                                    {!profileImage ? <View style={{ height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, borderColor: '#8E8F8F', paddingHorizontal: 40, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image
                                            source={require('../../../assests/images/add-image.png')}
                                            style={{ height: 18, width: 18, }}
                                        />
                                    </View>
                                        :
                                        <View style={{ height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, borderColor: '#8E8F8F', paddingHorizontal: 40, alignItems: 'center', justifyContent: 'center' }}>
                                            <Image
                                                source={{ uri: profileImage }}
                                                style={{ height: 82, width: 82, borderRadius: 10 }}
                                            />
                                        </View>
                                    }
                                </TouchableOpacity>
                                <Text style={{ fontFamily: `${GlobalFont}`, fontWeight: '600', marginTop: 30 }}>Upload Group Image</Text>
                            </View>
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Group Name</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                multiline={true}
                                onChangeText={(name) => { setName(name) }}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>About</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                multiline={true}
                                onChangeText={(about) => { setAbout(about) }}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Location</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                multiline={true}
                                onChangeText={(location) => { setLocation(location) }}
                                right={<AntDesign name="rightcircle" size={14} color={"black"} />}
                            />
                        </ScrollView>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() =>
                                _onSubmit()
                            }
                        >
                            <View style={styles.btnPrimary}>
                                <Text style={styles.submitbtn}>
                                    SUBMIT
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </AppBackGroundImage>
    );
};

const styles = StyleSheet.create({
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
        fontFamily: `${GlobalFont}`
    },
    mainview: {
        alignContent: 'center',
        padding: 15,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        height: responsiveHeight(85),
        justifyContent: 'space-between'
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
    submitbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`
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
    line: {
        height: 1,
        width: "100%",
        marginTop: 10,
        backgroundColor: '#a5a5a5'
    },
    MediaUpload: {
        height: 80,
        width: 80,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#8E8F8F',
        paddingHorizontal: 40,
        marginLeft: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed'
    },
});

export default CreateGroup;
