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
import { getSpecialtiesData } from '../../../redux/Actions/coachSignupService';
import { GlobalFont } from '../../../utils/FontFamily';
import AppBackGroundImage from '../../common/BackgroundImage';

const CoachData = ({ navigation }) => {
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
    // console.log(profileData[0], "loakeshsharma")
    console.log("playerInfo---1", playerInfo)

    useEffect(() => {
        dispatch(getSpecialtiesData())
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
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Coach Information</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Specialities</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                {/* <Text style={styles.labelRight}>{interestsName?.map((item) => item)}</Text> */}
                                <Text style={styles.labelRight}>kceucervcyev</Text>
                                {/* {interestsName?.map((item,i)=>i?<Text style={styles.labelRight}>{(item+",")}</Text> :<Text style={styles.labelRight}>{item}</Text>)} */}
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
                                        <Text style={styles.labelLeft}>Club</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>mbvjhvh</Text>
                                        {/* <Text style={styles.labelRight}>{carrierInformation.season}</Text> */}

                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Team</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        {/* <Text style={styles.labelRight}>{profileData[0]?.carrierInformation[0]?.role?.map((item) => item)}</Text> */}
                                        <Text style={styles.labelRight}>000000</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Grade</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        {/* <Text style={styles.labelRight}>{carrierInformation.code}</Text> */}
                                        <Text style={styles.labelRight}>000000</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Season</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        {/* <Text style={styles.labelRight}>{carrierInformation.clubName}</Text> */}
                                        <Text style={styles.labelRight}>000000</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Club/Leauge</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        {/* <Text style={styles.labelRight}>{carrierInformation.team}</Text> */}
                                        <Text style={styles.labelRight}>000000</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Result</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        {/* <Text style={styles.labelRight}>{carrierInformation.division}</Text> */}
                                        <Text style={styles.labelRight}>000000</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Result</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        {/* <Text style={styles.labelRight}>{carrierInformation.result}</Text> */}
                                        <Text style={styles.labelRight}>000000</Text>
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
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500'
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

export default CoachData;
