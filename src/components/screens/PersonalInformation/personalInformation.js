import React, { useState, useEffect } from 'react';
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
import { BackButton, RightArrow } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { GlobalFont } from '../../../utils/FontFamily';
import { useSelector } from 'react-redux';
import moment from 'moment';

const PersonalInformation = ({ navigation }) => {

    const { profileData, loginData } = useSelector((state) => {
        return {
            profileData: state.profileData.data,
            loginData: state.loginData.data
        }
    })

    console.log("profileData-profileData", profileData);

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
                    <View>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Personal Information</Text>
                    </View>
                    <View style={{}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('AllNavigation', {
                            //     screen: 'AccountInfo'
                            // })}
                        >
                            <IonIcon name="pencil" size={22} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        {profileData[0]?.profileImage === '' ?
                            <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}>
                            </View>
                            :
                            <Image source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${profileData[0]?.profileImage}` }}
                                style={{ height: 80, width: 80, borderRadius: 10, paddingHorizontal: 40 }}
                            />
                        }
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/name.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>{profileData[0]?.firstName} {''}{profileData[0]?.lastName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/profile-email.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>{profileData[0]?.email}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/profilecalender.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>{moment(profileData[0]?.dateOfBirth).format("DD/MM/YYYY")}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/gender.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>{profileData[0]?.gender}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/nsw.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>NSW</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/nsw.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Quest, 379 King William St, Adelaide</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/code.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>{profileData[0]?.zipCode}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/nsw.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Austraila Doe</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/name.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Exeter   |   Gloucester</Text>
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
    mainview: {
        alignContent: 'center',
        padding: 10,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 10,
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
    backbtn: {
        width: 50,
        height: 50,
        padding: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'absolute',
        // top: -10
    },
    line: {
        height: 1,
        width: "100%",
        marginTop: 10,
        backgroundColor: '#a5a5a5'
    },
    row: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    },
    imageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        marginVertical: 8,
        fontFamily: `${GlobalFont}`
    },
    labelLeft: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontFamily: `${GlobalFont}`
    },
});

export default PersonalInformation;
