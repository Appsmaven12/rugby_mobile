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
import { BackButton, EditRole, EditRoleIcon, RightArrow } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { ProgressBar } from 'react-native-paper';
import { GlobalFont } from '../../../utils/FontFamily';
import { getProfileList } from '../../../redux/Actions/getprofileService';
import { useDispatch, useSelector } from 'react-redux';

const Profile = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const { profileData, loginData, socialId } = useSelector((state) => {
        return {
            profileData: state.profileData.data,
            loginData: state.loginData.data,
        }
    })

    const getUserRole = Object.assign({}, profileData[0]?.userRole)
    const profileDetails = profileData[0]
    console.log("getUserRole--", getUserRole)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     console.log("vijay socialId" , loginData);
    //     async function fetchProfile() {
    //             console.log("if condition");
    //             const profileResponse = await dispatch(getProfileList({ userId: loginData._id }))
    //             if (profileResponse) {
    //                 setLoading(false)
    //             }
    //     }
    //     fetchProfile()
    // }, [loginData])

    return (
        <AppBackGroundImage>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <View>
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
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <View style={{ padding: 10, alignItems: 'center', flexDirection: 'row' }}>
                        {profileDetails?.profileImage == '' ?
                            <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40, marginLeft: 5, }}></View>
                            :
                            <View style={{ height: 80, width: 80, borderRadius: 10, borderColor: '#8E8F8F', paddingHorizontal: 40, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${profileDetails?.profileImage}` }}
                                    style={{ height: 82, width: 82, borderRadius: 10 }}
                                />
                            </View>
                        }
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, fontFamily: `${GlobalFont}` }}>{profileDetails?.firstName} {''} {profileDetails?.lastName}</Text>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>{getUserRole[0]}</Text>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>800+ Connections</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AllNavigation', {
                            screen: 'PersonalInformation'
                        })}
                    >
                        <View style={{ borderRadius: 50, backgroundColor: 'white', maxHeight: 40, margin: 'auto', padding: 7, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Edit Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainview}>
                    <View style={styles.whiteview}>
                        <Text style={{ fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>50% Complete Profile</Text>
                        <ProgressBar style={{ marginTop: 20, marginBottom: 10 }} progress={0.5} color="#152c69" />
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('PersonalInformation')}>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 18, width: 15 }} source={require('../../../assests/images/personal-info.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Personal Information</Text>
                            </View>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('EditRole')}>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 20, width: 20 }} source={require('../../../assests/images/edit-role.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Edit Role</Text>
                            </View>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                {getUserRole[0] === "Player" ?
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Stats')}>
                        <View style={styles.mainview}>
                            <View style={styles.row}>
                                <View style={styles.imageWrap}>
                                    <Image style={{ height: 18, width: 15 }} source={require('../../../assests/images/stats.png')} />
                                </View>
                                <View style={styles.inputWrap}>
                                    <Text style={styles.labelLeft}>Stats</Text>
                                </View>
                                <View style={styles.imageWrap}>
                                    <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity> : null}
                {getUserRole[0] === "Player" ?
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('PlayerInformation')}>
                        <View style={styles.mainview}>
                            <View style={styles.row}>
                                <View style={styles.imageWrap}>
                                    <Image style={{ height: 18, width: 15 }} source={require('../../../assests/images/player-info.png')} />
                                </View>
                                <View style={styles.inputWrap}>
                                    <Text style={styles.labelLeft}>Player Information</Text>
                                </View>
                                <View style={styles.imageWrap}>
                                    <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity> : null}
                {getUserRole[0] === "Coach" ?
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CoachData')}>
                        <View style={styles.mainview}>
                            <View style={styles.row}>
                                <View style={styles.imageWrap}>
                                    <Image style={{ height: 18, width: 15 }} source={require('../../../assests/images/player-info.png')} />
                                </View>
                                <View style={styles.inputWrap}>
                                    <Text style={styles.labelLeft}>Coach Information</Text>
                                </View>
                                <View style={styles.imageWrap}>
                                    <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity> : null}

                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('InviteFriends')}>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 15, width: 17 }} source={require('../../../assests/images/invite.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Invite Friend</Text>
                            </View>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('MyPost')}>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 15, width: 17 }} source={require('../../../assests/images/my-post.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>My Post</Text>
                            </View>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ProfileVisibility')}>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 18, width: 16 }} source={require('../../../assests/images/profile-visibility.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Profile Visibility</Text>
                            </View>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ProfileViews')}>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 18, width: 15 }} source={require('../../../assests/images/stats.png')} />
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Profile Insights</Text>
                            </View>
                            <View style={styles.imageWrap}>
                                <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </AppBackGroundImage>
    );
};

const styles = StyleSheet.create({
    imageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: `${GlobalFont}`
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        marginVertical: 8
    },
    labelLeft: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontFamily: `${GlobalFont}`
    },
    row: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    },
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500'
    },
    mainview: {
        alignContent: 'center',
        paddingTop: 2,
        padding: 10,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 15,
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
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -10
    },
});

export default Profile;
