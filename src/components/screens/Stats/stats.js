import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, Speed, Strength } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import Modal from "react-native-modal";
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { GlobalFont } from '../../../utils/FontFamily';
import { useSelector } from 'react-redux';

const Stats = ({ navigation }) => {
    const [isVisible, setVisible] = useState(false);
    const [comingSoon, setComingSoon] = useState(false);

    const { profileData, loginData } = useSelector((state) => {
        return {
            profileData: state.profileData.data,
            loginData: state.loginData.data
        }
    })
    const statsData = profileData[0]?.speedAndFitness[0]
    const powerData = profileData[0]?.strengthAndPower[0]
    console.log("profileData-stats", profileData[0]?.speedAndFitness[0]);

    return (
        <View>
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
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Player Stats</Text>
                        </View>
                    </View>
                </SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                                <View style={styles.row}>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>Beep Test</Text>
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelRight}>{statsData?.beepTest}</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.row}>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>10m Sprint(seconds)</Text>
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelRight}>{statsData?.sprint10Meter} sec</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.row}>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>40m Sprint(seconds)</Text>
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelRight}>{statsData?.sprint40Meter} sec</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.row}>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>3km run (min/secs)</Text>
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelRight}>{statsData?.running3KilometerMintues} : {statsData?.running3KilometerSeconds} min</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.row}>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>Flexibility</Text>
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelRight}>{statsData?.flexibility} cm</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.row}>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>Vertical Jump</Text>
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelRight}>{powerData?.verticalJump} cm</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setVisible(true)}>
                                <View style={styles.btnPrimary}>
                                    <Text style={styles.nextbtn}>
                                        UNVERIFIED
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <Modal isVisible={isVisible}>
                                <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 10, flex: 1 / 2, justifyContent: 'space-around' }}>
                                    <TouchableOpacity onPress={() => setVisible(!isVisible)} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <AntIcon name="closecircle" color={'#616061'} size={20} />
                                    </TouchableOpacity>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Image style={{ height: 120, width: 120, resizeMode: 'contain' }} source={require('../../../assests/images/terms-condition.png')} />
                                    </View>
                                    <Text style={{ fontWeight: 'bold', fontFamily: 'Montserrat', alignSelf: 'center', fontSize: 20, fontFamily: `${GlobalFont}` }}>Terms and conditions</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 15, paddingLeft: 30, paddingRight: 30, fontFamily: `${GlobalFont}` }}>I guarantee that all the stats are correct and accurate. I accept the providing false information could lead to my profile being banned or face prosecution.</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Button
                                            buttonStyle={{
                                                backgroundColor: "#DFDEDF",
                                                borderRadius: 5,
                                                height: 40,
                                                width: responsiveWidth(41)
                                            }}
                                            containerStyle={{
                                                justifyContent: 'center',
                                                opacity: 1,
                                                paddingBottom: 10
                                            }}
                                            titleStyle={{ fontSize: 14, marginLeft: 5, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}
                                            title="Decline"
                                        />
                                        <Button
                                            buttonStyle={{
                                                backgroundColor: "#152D68",
                                                borderRadius: 5,
                                                height: 40,
                                                width: responsiveWidth(41)
                                            }}
                                            containerStyle={{
                                                justifyContent: 'center',
                                                opacity: 1,
                                                paddingBottom: 10
                                            }}
                                            titleStyle={{ fontSize: 14, marginLeft: 5, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}
                                            title="Accept"
                                            onPress={() => { setVisible(!isVisible), navigation.navigate('Verification') }}
                                        />
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                    <View style={styles.secondmainview}>
                        <View
                            style={styles.whiteview}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.textTitle}>Strength & Power:</Text>
                                <View style={{ paddingTop: 10 }}>
                                    <SvgXml xml={Strength} />
                                </View>
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <View style={styles.row}>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>1RM Bench press (kg)</Text>
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelRight}>{powerData?.benchPress1RM}kg</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.row}>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>1RM Squat (kg)</Text>
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelRight}>{powerData?.squat1RM}kg</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.row}>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>1RM Deadlift (kg)</Text>
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelRight}>{powerData?.deadLift1RM}kg</Text>
                                    </View>
                                </View>
                                {/* <View style={styles.line}></View>
                                    <View style={styles.row}>
                                        <View style={styles.inputWrap}>
                                            <Text style={styles.labelLeft}>Vertical Jump </Text>
                                        </View>
                                        <View style={styles.inputWrap}>
                                            <Text style={styles.labelRight}>{powerData.verticalJump}kg</Text>
                                        </View>
                                    </View> */}
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setComingSoon(true)}>
                                <View style={styles.btnPrimary}>
                                    <Text style={styles.nextbtn}>
                                        UNVERIFIED
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <Modal isVisible={comingSoon}>
                                <View style={{ backgroundColor: 'white', borderRadius: 20, padding: 10, height: responsiveHeight(40), justifyContent: 'space-between' }}>
                                    <View style={{ justifyContent: 'space-between', height: responsiveHeight(24) }}>
                                        <TouchableOpacity onPress={() => setComingSoon(!comingSoon)} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <AntIcon name="closecircle" color={'#616061'} size={20} />
                                        </TouchableOpacity>
                                        <View style={{ alignItems: 'center', }}>
                                            <Image style={{ resizeMode: 'contain' }} source={require('../../../assests/images/coming-soon.png')} />
                                        </View>
                                    </View>
                                    <Text style={{ fontWeight: 'bold', fontFamily: 'Montserrat', textAlign: 'center', fontSize: 18, bottom: 20, fontFamily: `${GlobalFont}` }}>Coming Soon! We trust you... for now</Text>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </ScrollView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    secondmainview: {
        alignContent: 'center',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`
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
    row: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
    },
    btnPrimary: {
        backgroundColor: '#152c69',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backbtn: {
        width: 50,
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    nextbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#a5a5a5',
        marginVertical: 10
    },
});

export default Stats;
