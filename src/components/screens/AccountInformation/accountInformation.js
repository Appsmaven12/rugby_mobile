import React, { useEffect, useState } from 'react';
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
import { HelperText, TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import CheckBox from '@react-native-community/checkbox';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from "react-native-image-picker"
import { useSelector, useDispatch } from 'react-redux';
import { PlayerSignUpUser, UploadImage } from '../../../redux/Actions/playerSignUpService';
import Spinner from 'react-native-loading-spinner-overlay';
import { FanSignUpUser } from '../../../redux/Actions/fanSignupService';
import actions from '../../../redux/actionsType/signUpAction';
import coachActions from "../../../redux/actionsType/coachSignUpAction"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalFont } from '../../../utils/FontFamily';

const AccountInformation = ({ navigation, route }) => {
    const { role } = route.params

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('year')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    const [clubname, setClubname] = useState("")
    const [season, setSeason] = useState("")
    const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('')
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [profileImage, setProfileImage] = useState("")
    const [interest, setInterest] = useState([])
    const [male, setMale] = useState("")
    const [female, setFemale] = useState("")
    const [gender, setGender] = useState({
        male: false,
        female: false
    });
    const [loading, setLoading] = useState(false)

    const { PlayerSignupSelector, GetTeams, coachSignUpSelector, imageResponse } = useSelector((state) => {
        return {
            PlayerSignupSelector: state.signUp.data,
            coachSignUpSelector: state.coachSignUp.data,
            imageResponse: state.playersignUp?.image?.media
        }
    })
    console.log("imageResponse", imageResponse);

    const dispatch = useDispatch()

    const validationErrors = () => {
        return (
            <View>
                <HelperText type="error" visible={true}>
                    This field is required
                </HelperText>
            </View>
        )
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate)
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }
    const onNext = async () => {
        setLoading(true)
        if (role === "player") {
            let obj = {
                email: PlayerSignupSelector?.data.email,
                password: PlayerSignupSelector?.data.password,
                firstName: firstName,
                lastName: lastName,
                contactNumber: contactNumber,
                countryCode: countryCode,
                placeOfBirth: placeOfBirth,
                gender: gender.male ? male : female,
                region: region,
                city: city,
                state: state,
                country: country,
                zipCode: zipCode,
                profileImage: imageResponse,
                dateOfBirth: date,
            }
            let result = await dispatch(PlayerSignUpUser(obj))
            console.log("result-player", result);
            if (firstName == '' || lastName == '' ) {
                setLoading(false)
                Alert.alert("Please fill require fields")
            } else if (result?.status?.statusCode === 200) {
                setLoading(false)
                navigation.navigate('AddPlayerInfo', { uniqueId: result.data[0]._id })
            } else if (result?.status?.statusCode !== 200) {
                setLoading(false)
                Alert.alert(result?.status?.customMessage)
            }

        } else if (role === "coach") {
            // setLoading(true)
            let obj = {
                email: PlayerSignupSelector?.data.email,
                firstName: firstName,
                lastName: lastName,
                contactNumber: contactNumber,
                countryCode: countryCode,
                placeOfBirth: placeOfBirth,
                gender: gender.male ? male : female,
                region: region,
                city: city,
                state: state,
                country: country,
                zipCode: zipCode,
                profileImage: imageResponse,
                dateOfBirth: date,
            }

            let result = await dispatch(coachActions.coachsignupUserSuccess(obj))
            console.log("result", result);
            if (result.payload.firstName == '' || result.payload.lastName == '' || result.payload.dateOfBirth == '') {
                setLoading(false)
                Alert.alert("Please fill require fields")
            } else {
                setLoading(false)
                navigation.navigate('CoachInformation')
            }
            // if (result.type === "COACH_SIGNUP_USER_SUCCESS") {
            //     setLoading(false)
            //     navigation.navigate('CoachInformation')
            // }

        } else if (role === "fan") {
            // setLoading(true)
            let obj = {
                email: PlayerSignupSelector?.data.email,
                password: PlayerSignupSelector?.data.password,
                firstName: firstName,
                lastName: lastName,
                contactNumber: contactNumber,
                countryCode: countryCode,
                placeOfBirth: placeOfBirth,
                gender: gender.male ? male : female,
                region: region,
                city: city,
                supportTeamIds: [clubname, season],
                state: state,
                country: country,
                zipCode: zipCode,
                profileImage: imageResponse,
                dateOfBirth: date,
            }

            let result = await dispatch(FanSignUpUser(obj))
            // console.log("result", result);
            // if (result.payload.firstName == '' || result.payload.lastName == '' || result.payload.dateOfBirth == '') {
            //     setLoading(false)
            //     Alert.alert("Please fill require fields")
            // } else {
            //     setLoading(false)
            //     navigation.navigate('FanInformation')
            // }

            // if(result.payload.firstName == '' || result.payload.lastName == '' || result.payload.dateOfBirth == '') {
            //     setLoading(false)
            //     Alert.alert("Please fill require fields")
            // } else if (result?.status?.statusCode === 200) {
            //     setLoading(false)
            //     let validToken = result.data[0]?.accessToken
            //     let token = await AsyncStorage.setItem('accessToken', validToken).then(() => {
            //         dispatch(actions.updateToken(validToken))
            //     })
            //     await AsyncStorage.setItem('accessToken', validToken);
            // }
            if (result?.status?.statusCode === 200) {
                setLoading(false)
                let validToken = result.data[0]?.accessToken
                let token = await AsyncStorage.setItem('accessToken', validToken).then(() => {
                    dispatch(actions.updateToken(validToken))
                })
                await AsyncStorage.setItem('accessToken', validToken);
            // } else if (firstName == '' || lastName == '' || dateOfBirth == '', gender === '') {
            //     setLoading(false)
            //     Alert.alert("Please fill require fields")
            // }
            }
        }
    }

    // const supportingTeams = GetTeams?.map((item) => {
    //     return {
    //         label: item.name,
    //         value: item._id
    //     }
    // })

    const seasonList = [
        {
            label: "10",
            value: "seven",
        },
        {
            label: "11",
            value: "eight",
        },
        {
            label: "12",
            value: "nine",
        },
    ];

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

    return (
        <View>
            <View style={styles.container}>
                {loading && <Spinner
                    visible={loading}
                    size={'large'}
                />}
            </View>
            <AppBackGroundImage>
                <SafeAreaView >
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: responsiveWidth(70), padding: 4 }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                            <View style={{}}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}> Account Information</Text>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
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
                                <Text style={{ padding: 30, color: '#8E8F8F', fontWeight: 'bold', alignItems: 'center', justifyContent: 'center' }}>Upload Profile image</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>First Name</Text>}
                                        style={styles.nameinput}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        onChangeText={(firstName) => { setFirstName(firstName) }}
                                    />
                                    {(firstName == '') ? validationErrors() : null}
                                </View>
                                <View>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Last Name</Text>}
                                        style={styles.nameinput}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        onChangeText={(lastName) => { setLastName(lastName) }}
                                    />
                                    {(lastName == '') ? validationErrors() : null}
                                </View>
                            </View>
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Email</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/email.png')} />}
                                onChangeText={(email) => { setEmail(PlayerSignupSelector?.data.email) }}
                                value={PlayerSignupSelector?.data.email}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Phone Number</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/call.png')} />}
                                value={contactNumber}
                                onChangeText={(contactNumber) => { setContactNumber(contactNumber) }}
                                keyboardType='numeric'
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Date of Birth</Text>}
                                style={styles.input}
                                value={text}
                                onChangeText={text => setText(text.replace(/[^0-9]/g, ''))}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/calendar.png')} onPress={() => showMode('date')} />}
                            />
                            {(text == '') ? validationErrors() : null}
                            {show && (
                                <DateTimePicker
                                    testID='dateTimePicker'
                                    value={date}
                                    mode={mode}
                                    display='default'
                                    onChange={onChange}
                                />)}
                            <View style={{ flex: 1 }}>
                                <Text style={styles.textTitle}>Gender:</Text>
                                <View style={{
                                    justifyContent: "space-between",
                                    flexDirection: "row",
                                    width: "80%",
                                    alignItems: "center",
                                    marginLeft: 2,
                                    marginBottom: 2
                                }}>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "30%", }}>
                                        <CheckBox
                                            boxType="square"
                                            style={{ width: 20, height: 20 }}
                                            tintColors={{ true: '#000' }}
                                            onTintColor="#000"
                                            onFillColor="#000"
                                            onCheckColor="#fff"
                                            value={gender.male}
                                            onValueChange={(value) => {
                                                setMale("Male"), setGender({
                                                    ...gender,
                                                    male: value,
                                                    female: !value
                                                })
                                            }}
                                        />
                                        <Text>Male</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", width: "35%", }}>
                                        <CheckBox
                                            boxType="square"
                                            style={{ width: 20, height: 20 }}
                                            tintColors={{ true: '#000' }}
                                            onTintColor="#000"
                                            onFillColor="#000"
                                            onCheckColor="#fff"
                                            value={gender.female}
                                            onValueChange={(value) => {
                                                setFemale("Female"), setGender({
                                                    ...gender,
                                                    male: !value,
                                                    female: value
                                                })
                                            }}
                                        />
                                        <Text>Female</Text>
                                    </View>
                                </View>
                            </View>
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Place of Birth</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                onChangeText={(placeOfBirth) => setPlaceOfBirth(placeOfBirth)}
                            />
                            {/* <GooglePlacesAutocomplete
                                placeholder='Region'
                                onPress={(data, details = null) => {
                                    // 'details' is provided when fetchDetails = true
                                    //   Alert.alert(data,details)
                                }}
                                fetchDetails={true}
                                query={{
                                    key: 'AIzaSyALfQvyEII6F83o14O9StrlhFv3yrAC1dE',
                                    language: 'en',
                                }}
                            /> */}
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Region</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                onChangeText={(regionValue) => setRegion(regionValue)}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>City</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                onChangeText={(city) => setCity(city)}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Zip Code</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                value={zipCode}
                                onChangeText={(zipcode) => setZipCode(zipcode)}
                                keyboardType='numeric'
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>State</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                onChangeText={(state) => setState(state)}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Country</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                onChangeText={(countryValue) => setCountry(countryValue)}
                            />
                            {/* <Text style={styles.textTitle}>Supporting Teams:</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    label={"Team 1"}
                                    visible={showDropDown2}
                                    showDropDown={() => setShowDropDown2(true)}
                                    onDismiss={() => setShowDropDown2(false)}
                                    value={clubname}
                                    setValue={setClubname}
                                    list={supportingTeams}
                                    inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <DropDown
                                    label={"Team 2"}
                                    visible={showDropDown}
                                    showDropDown={() => setShowDropDown(true)}
                                    onDismiss={() => setShowDropDown(false)}
                                    value={season}
                                    setValue={setSeason}
                                    list={supportingTeams}
                                    inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                            </View> */}
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() =>
                                    onNext()
                                    // navigation.navigate('AddPlayerInfo')
                                }>
                                <View style={styles.btnPrimary}>
                                    <Text style={styles.nextbtn}>
                                        {role === "fan" ? "SUBMIT" : "NEXT"}
                                    </Text>
                                </View>
                            </TouchableOpacity>
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
        padding: 15,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    nameinput: {
        backgroundColor: 'white',
        width: responsiveWidth(39),
        fontSize: 15
    },
    input: {
        backgroundColor: 'white',
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
    nextbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
});

export default AccountInformation;
