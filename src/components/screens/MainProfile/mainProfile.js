import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, RightArrow, Speed, Strength } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { Button } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { GlobalFont } from '../../../utils/FontFamily';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileList } from '../../../redux/Actions/getprofileService';
import { RemoveConnection, sendConnection } from '../../../redux/Actions/connectionService';
import CoachProfile from '../CoachProfiile/coachProfile';
import { getUserDetails } from '../../../redux/Actions/getUserDetailsService';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const MainProfile = ({ navigation, route }) => {
    console.log("route.params11", route.params)
    const [loading, setLoading] = useState(false)
    const [sendConnectionToOther, setSendConnectionToOther] = useState()
    const [connection, setConnection] = useState(false)
    const { userId } = route.params

    const { mainUserDetails } = useSelector((state) => {
        return {
            mainUserDetails: state.userDetails?.data,
        }
    })
    const playerInfo = mainUserDetails[0]
    const interestInfo = mainUserDetails[0]?.interestIds
    const educationInfo = mainUserDetails[0]?.education[0]
    const carrerInformation = mainUserDetails[0]?.carrierInformation[0]
    const speedAndFitness = mainUserDetails[0]?.speedAndFitness[0]
    const strengthAndPower = mainUserDetails[0]?.strengthAndPower[0]

    const getUserRole = Object.assign({}, mainUserDetails[0]?.userRole)

    console.log("getUserRole--LoginData", getUserRole, userId, playerInfo)
    const dispatch = useDispatch()
    useEffect(() => {
        async function fetchProfile() {
            setLoading(true)
            const profileResponse = await dispatch(getUserDetails({ userId: userId }))
            if (profileResponse) {
                setLoading(false)
            }
        }
        fetchProfile()
    }, [])
    // console.log("userDetails", userDetails);
    // const profileDetails = profileData[0]

    const _onConnect = async (id) => {
            setLoading(true)
        const sendConnect = await dispatch(sendConnection({ otherUserId: id }))
        console.log("sendConnect", sendConnect);
        if(sendConnect.status.statusCode ===200){
            const profileResponse = await dispatch(getUserDetails({ userId: userId }))
            if (profileResponse) {
                setLoading(false)
            }
        }
        setSendConnectionToOther(sendConnect.status.statusCode)

        if (playerInfo?.isConnected == 1) {
            dispatch(RemoveConnection({ otherUserId: id }))
        }
    }

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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                        <View style={styles.backbtn}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Profile</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row' }}>
                                {playerInfo?.profileImage == '' ?
                                    <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40, marginLeft: 5, }}></View>
                                    :
                                    <View style={{ height: 80, width: 80, borderRadius: 10, borderColor: '#8E8F8F', paddingHorizontal: 40, alignItems: 'center', justifyContent: 'center' }}>
                                        <Image
                                            source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${playerInfo?.profileImage}` }}
                                            style={{ height: 82, width: 82, borderRadius: 10 }}
                                        />
                                    </View>
                                }
                                <View style={{ paddingLeft: 15 }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, fontFamily: `${GlobalFont}` }}>{playerInfo?.firstName} {''} {playerInfo?.lastName}</Text>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>{getUserRole[0]}</Text>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>800+ Connections</Text>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => _onConnect(playerInfo?._id)}>
                                <View style={{ borderRadius: 50, backgroundColor: 'white', maxHeight: 40, margin: 'auto', padding: 7, justifyContent: 'center' }}>
                                    {console.log("sendConnectionToOther", sendConnectionToOther)}
                                    {/* {_connectionRequest()} */}
                                    {playerInfo?.isConnected == 0 ?
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Connect</Text>
                                        :
                                        null
                                    }
                                    {playerInfo?.isConnected == 1 ?
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Unfollow</Text>
                                        :
                                        null
                                    }
                                    {playerInfo?.isConnected == 2 ?
                                        <Text style={{ fontSize: 10, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Connection Sent</Text>
                                        :
                                        null
                                    }
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Feather name="send" size={18} color="#fff" />
                            </View>
                        </View>
                        <View style={styles.mainview}>
                            <View style={styles.video}>
                                <Text style={styles.labelvideo}>Video Resume</Text>
                                <View style={styles.videorow}>
                                    <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}></View>
                                    <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}></View>
                                    <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mainview}>
                            <View style={styles.row}>
                                <View style={styles.imageWrap}>
                                    <Image style={{ height: 17, width: 17 }} source={require('../../../assests/images/terms.png')} />
                                </View>
                                <View style={styles.inputWrap}>
                                    <Text style={styles.labelLeft}>Profile Insights</Text>
                                </View>
                                <View style={styles.imageWrap}>
                                    <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
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
                                            <Text style={styles.labelRight}>{educationInfo?.courseName}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Institution</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{educationInfo?.institutionName}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Year completed</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{educationInfo?.passedYear}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
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
                                            <Text style={styles.labelRight}>{carrerInformation?.season}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Role</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{carrerInformation?.role[0]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Code</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{carrerInformation?.code}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Club Name</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{carrerInformation?.clubName}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Team</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{carrerInformation?.team}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Division</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{carrerInformation?.division}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Result</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{carrerInformation?.result}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Text style={styles.textTitle}>Speed and Fitness:</Text>
                                    <View style={{ paddingTop: 10 }}>
                                        <SvgXml xml={Speed} />
                                    </View>
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Beep Test</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{speedAndFitness?.beepTest}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>10m Sprint</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{speedAndFitness?.sprint10Meter} sec</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>40m Sprint</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{speedAndFitness?.sprint40Meter} sec</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>3km run</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{speedAndFitness?.running3KilometerMintues}:{speedAndFitness?.running3KilometerSeconds} min</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Flexibility</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{speedAndFitness?.flexibility} sec</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>Vertical Jump</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{strengthAndPower?.verticalJump}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={styles.textTitle}>Strength & Power:</Text>
                                    <View style={{ paddingTop: 10 }}>
                                        <SvgXml xml={Strength} />
                                    </View>
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>1RM Bench press</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{strengthAndPower?.benchPress1RM}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>1RM Squat</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{strengthAndPower?.squat1RM}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}></View>
                                    <View style={styles.educationrow}>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelLeft}>1RM Deadlift</Text>
                                        </View>
                                        <View style={styles.educationinputWrap}>
                                            <Text style={styles.labelRight}>{strengthAndPower?.deadLift1RM}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingBottom: 50 }}></View>
                    </ScrollView>
                </SafeAreaView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        opacity: 1,
        position: 'absolute',
        zIndex: 1111
    },
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
        fontFamily: `${GlobalFont}`
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
        padding: 15,
        borderRadius: 20
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
        marginLeft: 10,
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
        borderRadius: 10
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
    imageWrap: {
        justifyContent: 'center',
    }
});

export default MainProfile;
