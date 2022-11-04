import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { AddIcon, BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import SelectableChips from 'react-native-chip/SelectableChips'
import { CoachSignUpUser } from '../../../redux/Actions/coachSignupService';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import actions from '../../../redux/actionsType/signUpAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalFont } from '../../../utils/FontFamily';

const CoachInformation = ({ navigation }) => {
    const dispatch = useDispatch()
    const [carrierInformation, setCarrierInformation] = useState({
        season: "",
        cupLeauge: "",
        grade: "",
        clubName: "",
        team: "",
        result: ""
    })
    const [specialties, setSpecialties] = useState([])
    const [loading, setLoading] = useState(false)
    const { coachSignUpSelector, Specialities, PlayerSignupSelector } = useSelector((state) => {
        return {
            PlayerSignupSelector: state.signUp.data,
            coachSignUpSelector: state.coachSignUp.data,
            Specialities: state.coachSignUp.specialties,
        }
    })

    const SpecialitiesData = Specialities && Specialities?.map(element => {
        return element.name
    });
    const multi = (chips) => {
        const specialitiesDataids = Specialities.filter((item)=>{
         if(chips.includes(item.name))
         {
             return item._id
         }
        }).map(itm => itm._id) 
        setSpecialties(specialitiesDataids)
     }
    const onNext = async () => {
        setLoading(true)
        let obj = {
            email: coachSignUpSelector.email,
            firstName: coachSignUpSelector.firstName,
            password: PlayerSignupSelector?.data.password,
            lastName: coachSignUpSelector.lastName,
            contactNumber: coachSignUpSelector.contactNumber,
            countryCode: coachSignUpSelector.countryCode,
            placeOfBirth: coachSignUpSelector.placeOfBirth,
            gender: coachSignUpSelector.gender,
            region: coachSignUpSelector.region,
            city: coachSignUpSelector.city,
            supportTeamIds: coachSignUpSelector.supportTeamIds,
            state: coachSignUpSelector.state,
            country: coachSignUpSelector.country,
            zipCode: coachSignUpSelector.zipCode,
            profileImage: coachSignUpSelector.profileImage,
            dateOfBirth: coachSignUpSelector.dateOfBirth,
            carrierInformation: [carrierInformation],
            specialtiesIds: specialties
        }
        let result = await dispatch(CoachSignUpUser(obj))

        if (result?.status?.statusCode === 200) {
            setLoading(false)
            let validToken = result.data[0].accessToken
            let token = await AsyncStorage.setItem('accessToken', validToken).then(() => {
                dispatch(actions.updateToken(validToken))
              })
            // dispatch(actions.updateToken(validToken))
            await AsyncStorage.setItem('accessToken', validToken);
        } else if (result == undefined || result?.status?.statusCode !== 200) {
            Alert.alert("Please fill all information")
        } else if (result?.status?.statusCode === 400) {
            Alert.alert("Something went wromg")
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
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}> Coach Information</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 5 }}></View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <Text style={styles.textTitle}>Career Table:</Text>
                                <View style={styles.careerTableview}>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        <TextInput
                                            label={<Text style={styles.textInputLabel}>Club</Text>}
                                            style={styles.input}
                                            activeUnderlineColor={"#D3D3D3"}
                                            selectionColor={'#8E8F8F'}
                                            onChangeText={(value) => setCarrierInformation({
                                                ...carrierInformation,
                                                clubName: value
                                            })}
                                        />
                                        <TextInput
                                            label={<Text style={styles.textInputLabel}>Team</Text>}
                                            style={styles.input}
                                            activeUnderlineColor={"#D3D3D3"}
                                            selectionColor={'#8E8F8F'}
                                            onChangeText={(value) => setCarrierInformation({
                                                ...carrierInformation,
                                                team: value
                                            })}
                                        />
                                        <TextInput
                                            label={<Text style={styles.textInputLabel}>Grade</Text>}
                                            style={styles.input}
                                            activeUnderlineColor={"#D3D3D3"}
                                            selectionColor={'#8E8F8F'}
                                            onChangeText={(value) => setCarrierInformation({
                                                ...carrierInformation,
                                                grade: value
                                            })}
                                        />
                                        <TextInput
                                            label={<Text style={styles.textInputLabel}>Season</Text>}
                                            style={styles.input}
                                            activeUnderlineColor={"#D3D3D3"}
                                            selectionColor={'#8E8F8F'}
                                            onChangeText={(value) => setCarrierInformation({
                                                ...carrierInformation,
                                                season: value
                                            })}
                                        />
                                        <TextInput
                                            label={<Text style={styles.textInputLabel}>Cup/League</Text>}
                                            style={styles.input}
                                            activeUnderlineColor={"#D3D3D3"}
                                            selectionColor={'#8E8F8F'}
                                            onChangeText={(value) => setCarrierInformation({
                                                ...carrierInformation,
                                                cupLeauge: value
                                            })}
                                        />
                                        <TextInput
                                            label={<Text style={styles.textInputLabel}>Result</Text>}
                                            style={styles.input}
                                            activeUnderlineColor={"#D3D3D3"}
                                            selectionColor={'#8E8F8F'}
                                            onChangeText={(value) => setCarrierInformation({
                                                ...carrierInformation,
                                                result: value
                                            })}
                                        />
                                    </ScrollView>
                                </View>
                                <TouchableOpacity activeOpacity={0.3}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                                        <SvgXml xml={AddIcon} />
                                        <Text style={{ color: '#1D326C', justifyContent: 'center', marginLeft: 5, fontFamily: `${GlobalFont}`}}>Add more</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.Specialities}>Specialities:</Text>
                                <SelectableChips initialChips={SpecialitiesData}
                                    onChangeChips={(chips) => multi(chips)}
                                    alertRequired={false}
                                    chipStyleSelected={{ backgroundColor: '#142C68', fontSize: 12, justifyContent: 'center', fontWeight: 'bold' }}
                                    valueStyle={{ color: '#142C68', fontSize: 12, justifyContent: 'center', fontWeight: 'bold' }}
                                    chipStyle={{ borderColor: '#142C68' }}
                                    valueStyleSelected={{ color: '#fff' }}
                                />
                                <TouchableOpacity activeOpacity={0.8} onPress={() => onNext()}>
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.submitbtn}>
                                            SUBMIT
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
    Specialities: {
        fontSize: 18,
        fontWeight: 'bold',
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
        padding: 15
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`
    },
    careerTableview: {
        backgroundColor: '#EBEAED',
        padding: 10,
        borderRadius: 10,
        marginTop: 15
    },
    input: {
        backgroundColor: '#EBEAED',
        flex: 1,
        height: 55,
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

    signingoogle: {
        height: 45,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#ff7171',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    signinapple: {
        height: 45,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#191919',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
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
});

export default CoachInformation;
