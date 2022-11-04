import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { BackButton, PhoneCall, Speed, Strength } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import DropDown from "react-native-paper-dropdown";
import { AuthContext } from '../../Navigation /context';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerStatsStart } from '../../../redux/Actions/playerSignUpService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import actions from '../../../redux/actionsType/signUpAction';
import Spinner from 'react-native-loading-spinner-overlay';
import { GlobalFont } from '../../../utils/FontFamily';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import DatePicker from 'react-native-date-picker'
import { beepTests } from '../../../assests/JsonFiles/beepTest';
import { tenMRun } from '../../../assests/JsonFiles/tenMRun';
import { fourtyMRun } from '../../../assests/JsonFiles/fourtyMRun';
import { threeKMRunMins } from '../../../assests/JsonFiles/threeKMRunMins';
import { threeKMRunSecs } from '../../../assests/JsonFiles/threeKMRunSecs';
import { benchPress } from '../../../assests/JsonFiles/benchPress';
import { deadLift } from '../../../assests/JsonFiles/deadLift';
import { verticalJumps } from '../../../assests/JsonFiles/verticalJump';
import { Height } from '../../../assests/JsonFiles/height';

const PlayerStats = ({ navigation, route }) => {
    const { uniqueId } = route.params
    const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);
    const [showDropDown3, setShowDropDown3] = useState(false);
    const [showDropDown4, setShowDropDown4] = useState(false);
    const [showDropDown5, setShowDropDown5] = useState(false);
    const [showDropDownSecond, setShowDropDownSecond] = useState(false);
    const [showDropDown6, setShowDropDown6] = useState(false);
    const [showDropDown7, setShowDropDown7] = useState(false);
    const [showDropDown8, setShowDropDown8] = useState(false);
    const [showDropDown9, setShowDropDown9] = useState(false);
    const [flexibility, setFlexibility] = useState("")
    const [clubname, setClubname] = useState("")
    const [loading, setLoading] = useState(false)
    const [beepTest, setBeepTest] = useState("")
    const [sprint10Meter, setSprint10Meter] = useState("")
    const [sprint40Meter, setSprint40Meter] = useState("")
    const [running3KilometerMintues, setRunning3KilometerMintues] = useState("")
    const [running3KilometerSeconds, setRunning3KilometerSeconds] = useState("")
    const [benchPress1RM, setBenchPress1RM] = useState("")
    const [squat1RM, setSquat1RM] = useState("")
    const [deadLift1RM, setDeadLift1RM] = useState("")
    const [verticalJump, setVerticalJump] = useState("")
    //     benchPress1RM: "",
    //     squat1RM: "",
    //     deadLift1RM: "",
    //     verticalJump: ""
    // })
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const onSumbit = async () => {
        setLoading(true)
        let obj = {
            id: uniqueId,
            speedAndFitness: [{
                beepTest,
                sprint10Meter,
                sprint40Meter,
                running3KilometerMintues,
                running3KilometerSeconds,
                flexibility
            }],
            strengthAndPower: [{
                benchPress1RM,
                squat1RM,
                deadLift1RM,
                verticalJump,
            }],

            // strengthAndPower: [strengthAndPower]
        }
        let result = await dispatch(PlayerStatsStart(obj))

        if (result?.status?.statusCode === 200) {
            setLoading(false)
            let validToken = result.data[0].accessToken
            let token = await AsyncStorage.setItem('accessToken', validToken).then(() => {
                dispatch(actions.updateToken(validToken))
            })
            dispatch(actions.updateToken(validToken))
            await AsyncStorage.setItem('accessToken', validToken);
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12, alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginRight: 15, fontFamily: `${GlobalFont}` }}>Player Stats</Text>
                        </View>
                    </View>
                </SafeAreaView>
                <ScrollView>
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <Text style={styles.textTitle}>Speed and Fitness:</Text>
                                    <View style={{ paddingTop: 10 }}>
                                        <SvgXml xml={Speed} />
                                    </View>
                                </View>
                                <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    // mode={'outlined'}
                                    label={"Beep Test"}
                                    visible={showDropDown2}
                                    showDropDown={() => setShowDropDown2(true)}
                                    onDismiss={() => setShowDropDown2(false)}
                                    value={beepTest}
                                    setValue={setBeepTest}
                                    list={beepTests}
                                    inputProps={{ style: { backgroundColor: '#fff' } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    label={"10m Sprint(seconds)"}
                                    visible={showDropDown3}
                                    showDropDown={() => setShowDropDown3(true)}
                                    onDismiss={() => setShowDropDown3(false)}
                                    value={sprint10Meter}
                                    setValue={setSprint10Meter}
                                    list={tenMRun}
                                    inputProps={{ style: { backgroundColor: '#fff' } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    label={"40m Sprint(seconds)"}
                                    visible={showDropDown4}
                                    showDropDown={() => setShowDropDown4(true)}
                                    onDismiss={() => setShowDropDown4(false)}
                                    value={sprint40Meter}
                                    setValue={setSprint40Meter}
                                    list={fourtyMRun}
                                    inputProps={{ style: { backgroundColor: '#fff' } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <Text style={{ fontFamily: `${GlobalFont}`, fontSize: 15, marginTop: 10, marginLeft: 10 }}>3km run (min/secs)</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <DropDown
                                        style={{ backgroundColor: "#EBEAED" }}
                                        label={"Minutes"}
                                        visible={showDropDown5}
                                        showDropDown={() => setShowDropDown5(true)}
                                        onDismiss={() => setShowDropDown5(false)}
                                        value={running3KilometerMintues}
                                        setValue={setRunning3KilometerMintues}
                                        list={threeKMRunMins}
                                        inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                        dropDownItemSelectedTextStyle={{ color: 'black' }}
                                    />
                                    <DropDown
                                        style={{ backgroundColor: "#EBEAED" }}
                                        label={"Seconds"}
                                        visible={showDropDownSecond}
                                        showDropDown={() => setShowDropDownSecond(true)}
                                        onDismiss={() => setShowDropDownSecond(false)}
                                        value={running3KilometerSeconds}
                                        setValue={setRunning3KilometerSeconds}
                                        list={threeKMRunSecs}
                                        inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                        dropDownItemSelectedTextStyle={{ color: 'black' }}
                                    />
                                </View>
                                <DropDown
                                    label={"Flexibility (Sit and Reach measured in cm)"}
                                    visible={showDropDown}
                                    showDropDown={() => setShowDropDown(true)}
                                    onDismiss={() => setShowDropDown(false)}
                                    value={flexibility}
                                    setValue={setFlexibility}
                                    list={Height}
                                    inputProps={{ style: { backgroundColor: '#fff' } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={styles.textTitle}>Strength & Power:</Text>
                                    <View style={{ paddingTop: 10 }}>
                                        <SvgXml xml={Strength} />
                                    </View>
                                </View>
                                <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    label={"1RM Bench press (kg)"}
                                    visible={showDropDown6}
                                    showDropDown={() => setShowDropDown6(true)}
                                    onDismiss={() => setShowDropDown6(false)}
                                    value={benchPress1RM}
                                    setValue={setBenchPress1RM}
                                    list={benchPress}
                                    inputProps={{ style: { backgroundColor: '#fff' } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    label={"1RM Squat (kg)"}
                                    visible={showDropDown7}
                                    showDropDown={() => setShowDropDown7(true)}
                                    onDismiss={() => setShowDropDown7(false)}
                                    value={squat1RM}
                                    setValue={setSquat1RM}
                                    list={Height}
                                    inputProps={{ style: { backgroundColor: '#fff' } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    label={"1RM Deadlift (kg)"}
                                    visible={showDropDown8}
                                    showDropDown={() => setShowDropDown8(true)}
                                    onDismiss={() => setShowDropDown8(false)}
                                    value={deadLift1RM}
                                    setValue={setDeadLift1RM}
                                    list={deadLift}
                                    inputProps={{ style: { backgroundColor: '#fff' } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    label={"Vertical jump (cm)"}
                                    visible={showDropDown9}
                                    showDropDown={() => setShowDropDown9(true)}
                                    onDismiss={() => setShowDropDown9(false)}
                                    value={verticalJump}
                                    setValue={setVerticalJump}
                                    list={verticalJumps}
                                    inputProps={{ style: { backgroundColor: '#fff' } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => onSumbit()}>
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.nextbtn}>
                                            SUBMIT
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
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
    mainview: {
        alignContent: 'center',
        padding: 15
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        fontFamily: `${GlobalFont}`
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        height: 55,
        fontSize: 15,
        fontFamily: `${GlobalFont}`
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
    nextbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },
});

export default PlayerStats;
