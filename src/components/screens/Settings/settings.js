import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Switch,
    Alert
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { BackButton, RightArrow } from '../../../assests/svgfiles/svgFiles';
import { accountVisibility } from '../../../redux/Actions/accountVisibilityService';
import { GlobalFont } from '../../../utils/FontFamily';
import AppBackGroundImage from '../../common/BackgroundImage';

const Settings = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch()
    const _onSubmit = async (value) => {
        setStatus(value)
        setLoading(true)
        let result = await dispatch(accountVisibility(value))
        if (result?.status?.statusCode == 200) {
            setLoading(false)
        } else if (result?.status?.statusCode != 200) {
            setLoading(false)
            Alert.alert("Something Went Wrong")
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
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Settings</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.mainview}>
                                <View style={styles.row}>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 18, width: 13 }} source={require('../../../assests/images/privacy-policy.png')} />
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>Privacy Policy</Text>
                                    </View>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.mainview}>
                                <View style={styles.row}>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 18, width: 15 }} source={require('../../../assests/images/terms.png')} />
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>Terms & Conditions</Text>
                                    </View>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('SendFeedback')}>
                            <View style={styles.mainview}>
                                <View style={styles.row}>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 18, width: 15 }} source={require('../../../assests/images/feedback.png')} />
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>Send Feedback</Text>
                                    </View>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.mainview}>
                                <View style={styles.row}>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 18, width: 15 }} source={require('../../../assests/images/account.png')} />
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>Account Visibility</Text>
                                    </View>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#07D51D" }}
                                        style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                                        thumbColor={'#fff'}
                                        onValueChange={(value) => _onSubmit(value)}
                                        value={status}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('InviteFriends')}>
                            <View style={styles.mainview}>
                                <View style={styles.row}>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 17, width: 17 }} source={require('../../../assests/images/invite-friend.png')} />
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
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ChangePassword')}>
                            <View style={styles.mainview}>
                                <View style={styles.row}>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 18, width: 13 }} source={require('../../../assests/images/change-password.png')} />
                                    </View>
                                    <View style={styles.inputWrap}>
                                        <Text style={styles.labelLeft}>Change Password</Text>
                                    </View>
                                    <View style={styles.imageWrap}>
                                        <Image style={{ height: 10, width: 10 }} source={require('../../../assests/images/arrow.png')} />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500'
    },
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 7
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
        marginVertical: 8
    },
    labelLeft: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontFamily: `${GlobalFont}`
    },
});

export default Settings;
