import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { BackButton } from '../../../assests/svgfiles/svgFiles';
import { SvgXml } from 'react-native-svg';
import AppBackGroundImage from '../../common/BackgroundImage';
import { getInterestsData, getSupportingTeamsData } from '../../../redux/Actions/playerSignUpService';
import { useDispatch } from 'react-redux';
import { getSpecialtiesData } from '../../../redux/Actions/coachSignupService';
import { GlobalFont } from '../../../utils/FontFamily';

const Roles = ({ navigation }) => {
    const [check1, setCheck1] = useState(false);
    const dispatch = useDispatch()
    const [agree, setAgree] = useState(false);
    const [agree1, setAgree1] = useState(false);
    const [agree2, setAgree2] = useState(false);
    // const [check, setCheck] = useState({
    //     player:false,
    //     coach:false,
    //     fan:false,
    // })

    const [role, setRole] = useState("")

    useEffect(() => {
        dispatch(getSupportingTeamsData())
        dispatch(getInterestsData())
        dispatch(getSpecialtiesData())
    }, [dispatch])
    return (
        <View>
            <AppBackGroundImage>
                <SafeAreaView>
                    <View style={styles.backbtn}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <View style={{ alignItems: 'center', paddingBottom: 15 }}>
                    <SafeAreaView>
                        <Image
                            source={require('../../../assests/images/logo.png')}
                            style={styles.logoimage}
                        />
                    </SafeAreaView>
                </View>
                <View style={styles.mainview}>
                    <View
                        style={styles.whiteview}>
                        <ScrollView showsVerticalScrollIndicator={false}
                            scrollEnabled={false}
                        >
                            <View style={{ marginTop: 10, justifyContent: 'center' }}>
                                <Text style={styles.textTitle}>Role:</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 20, paddingTop: 20 }}>
                                    {/* <CheckBox
                                    center
                                    title="Player"
                                    checked={check1}
                                    onPress={() => setCheck1(!check1)}
                                    containerStyle={{backgroundColor: "red", borderColor: '#fff'}}
                                    />
                                        <CheckBox
                                    center
                                    title="Coach"
                                    checked={check1}
                                    onPress={() => setCheck1(!check1)}
                                    containerStyle={{backgroundColor: "red", borderColor: '#fff'}}
                                    />
                                        <CheckBox
                                    center
                                    title="Fan"
                                    checked={check1}
                                    onPress={() => setCheck1(!check1)}
                                    containerStyle={{backgroundColor: "#fff", borderColor: '#fff'}}
                                    /> */}
                                    <CheckBox
                                        boxType="square"
                                        style={{ width: 18, height: 18 }}
                                        tintColors={{ true: '#000' }}
                                        onTintColor="#000"
                                        onFillColor="#000"
                                        onCheckColor="#fff"
                                        value={agree}
                                        disabled={agree1 || agree2 ? true : false}
                                        onValueChange={(value) => {
                                            setAgree(!agree)
                                            setRole("player")
                                        }}
                                    />
                                    <Text style={{ textAlign: 'center', fontSize: 13, fontFamily: `${GlobalFont}` }}>Player</Text>
                                    <CheckBox
                                        boxType="square"
                                        style={{ width: 18, height: 18 }}
                                        tintColors={{ true: '#000' }}
                                        onTintColor="#000"
                                        onFillColor="#000"
                                        onCheckColor="#fff"
                                        value={agree1}
                                        disabled={agree || agree2 ? true : false}
                                        onValueChange={(value) => {
                                            setAgree1(!agree1)
                                            setRole("coach")
                                        }}
                                    />
                                    <Text style={{ textAlign: 'center', fontFamily: `${GlobalFont}` }}>Coach</Text>
                                    <CheckBox
                                        boxType="square"
                                        style={{ width: 18, height: 18 }}
                                        tintColors={{ true: '#000' }}
                                        onTintColor="#000"
                                        onFillColor="#000"
                                        onCheckColor="#fff"
                                        value={agree2}
                                        disabled={agree || agree1 ? true : false}
                                        onValueChange={(value) => {
                                            setAgree2(!agree2)
                                            setRole("fan")
                                        }}
                                    />
                                    <Text style={{ textAlign: 'center', fontFamily: `${GlobalFont}` }}>Fan</Text>
                                </View>
                                {agree || agree1 || agree2 ?
                                    <Text style={{ color: 'red', fontFamily: `${GlobalFont}` }}>Please unselect current role to select other role</Text>
                                    : null
                                }
                                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('AccountInfo', { role: role })}>
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.nextbtn}>
                                            NEXT
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    mainview: {
        alignContent: 'center',
        padding: 20
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 14
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: `${GlobalFont}`
    },
    logoimage: {
        resizeMode: 'contain',
        height: 120
    },
    nextbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },

    btnPrimary: {
        backgroundColor: '#152c69',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    backbtn: {
        width: 50,
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Roles;
