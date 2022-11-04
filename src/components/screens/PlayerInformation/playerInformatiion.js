import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { BackButton, RightArrow } from '../../../assests/svgfiles/svgFiles';
import { getInterestsData } from '../../../redux/Actions/playerSignUpService';
import { GlobalFont } from '../../../utils/FontFamily';
import AppBackGroundImage from '../../common/BackgroundImage';
import Video from 'react-native-video';

const PlayerInformation = ({ navigation }) => {
    const dispatch = useDispatch()
    const [interestsName, setInterestsName] = useState([])
    const { profileData, loginData, Interest } = useSelector((state) => {
        return {
            profileData: state.profileData.data,
            loginData: state.loginData.data,
            Interest: state.addplayersignUp.interests,
        }
    })
    const playerInfo = profileData[0]
    const interestInfo = profileData[0]?.interestIds
    const educationInfo = profileData[0].education[0]
    const carrierInformation = profileData[0].carrierInformation[0]
    const currentTeamIds = profileData[0].currentTeamIds
    console.log("profileData-1", profileData, currentTeamIds);
    // console.log(profileData[0], "loakeshsharma")
    // console.log("Interest---1", interestInfo)

    useEffect(() => {
        dispatch(getInterestsData())
    }, [dispatch])

    useEffect(() => {
        const getInterestsName = () => {
            const ids = Interest?.filter((item) => {
                if (interestInfo.includes(item._id)) {
                    return item.name
                }
            }).map(item => item.name)
            setInterestsName(ids)
        }
        getInterestsName()
    }, [interestInfo])

    return (
        <AppBackGroundImage>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <View style={styles.backbtn}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Player Information</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Interest</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelRight}>{interestsName?.map((item) => item)}</Text>
                                {/* {interestsName?.map((item,i)=>i?<Text style={styles.labelRight}>{(item+",")}</Text> :<Text style={styles.labelRight}>{item}</Text>)} */}
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Height</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelRight}>{playerInfo.height} cm</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Weight</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelRight}>{playerInfo.weight} kg</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.video}>
                            <Text style={styles.labelvideo}>Video Resume</Text>
                            <View style={styles.videorow}>
                                {playerInfo.videos ?
                                    <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}></View> :
                                    <Video source={'uploadvideo.attackvideo'}
                                        controls={true}
                                        style={styles.UploadedVideo} />
                                }
                                {playerInfo.videos ?
                                    <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}></View> :
                                    <Video source={'uploadvideo.attackvideo'}
                                        controls={true}
                                        style={styles.UploadedVideo} />
                                }
                                {playerInfo.videos ?
                                    <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}></View> :
                                    <Video source={'uploadvideo.attackvideo'}
                                        controls={true}
                                        style={styles.UploadedVideo} />
                                }
                                {/* <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}></View>
                                <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}></View> */}
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <Text style={styles.textTitle}>Education</Text>
                            <View style={{ marginVertical: 10 }}>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Course Name</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{educationInfo.courseName}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Institution</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{educationInfo.institutionName}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Year completed</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{educationInfo.passedYear}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Rugby Code</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelRight}>Union | League</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Union</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelRight}>13</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>League</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelRight}>13</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Current Team 1</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelRight}>{currentTeamIds[0]}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Current Team 2</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelRight}>{currentTeamIds[1]}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <Text style={styles.textTitle}>Career Table</Text>
                            <View style={{ marginVertical: 10 }}>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Season</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{carrierInformation.season}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Role</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{profileData[0]?.carrierInformation[0]?.role?.map((item) => item)}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Code</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{carrierInformation.code}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Club Name</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{carrierInformation.clubName}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Team</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{carrierInformation.team}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Division</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{carrierInformation.division}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Result</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>{carrierInformation.result}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </AppBackGroundImage>
    );
};

const styles = StyleSheet.create({
    UploadedVideo: {
        height: 80,
        width: 80,
        borderRadius: 10,
        paddingHorizontal: 40,
        marginLeft: 5,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`
    },
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 7
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
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
    line: {
        height: 1,
        width: "100%",
        marginVertical: 10,
        backgroundColor: '#a5a5a5'
    },
    educationrow: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10
    },
    educationinputWrap: {
        flex: 1,
        borderColor: "#cccccc",
    },
    labelLeft: {
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`
    },
    labelRight: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        color: '#B0B1B0',
        fontFamily: `${GlobalFont}`
    },
    labelvideo: {
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`
    },
    video: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
    },
    videorow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    row: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        marginVertical: 8
    },
});

export default PlayerInformation;
