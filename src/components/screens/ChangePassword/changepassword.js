import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { GlobalFont } from '../../../utils/FontFamily';
import { changePassword } from '../../../redux/Actions/changePasswordService';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { useDispatch } from 'react-redux';

const ChangePassword = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()

    const passwordError = () => {
        return (
            <HelperText type="error" visible={true} style={{ fontFamily: `${GlobalFont}` }}>
                Password and Confirm Password are not same
            </HelperText>
        )
    }
    const _onSubmit = async () => {
        setLoading(true)
        let obj = {
            password: password,
            newPassword: newPassword,
        }
        if (password === '' || newPassword === '' || confirmPassword === '') {
            setLoading(false)
            Alert.alert("Please fill required field")
        } else if (newPassword !== confirmPassword) {
            setLoading(false)
            Alert.alert("New Password and Confirm Password should be same")
        } else {
            let result = await dispatch(changePassword(obj))
            console.log("changePassword-1", result);
            if (result?.status?.statusCode == 200) {
                setLoading(false)
                navigation.goBack()
            } else if (result?.status?.statusCode != 200) {
                setLoading(false)
                Alert.alert(result?.status?.customMessage)
            }
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
                <SafeAreaView >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Change Password</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <View>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Old Password</Text>}
                                        secureTextEntry
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        value={password}
                                        onChangeText={(password) => setPassword(password)}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/ios-lock.png')} />}
                                    />
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>New Password</Text>}
                                        secureTextEntry
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        value={newPassword}
                                        onChangeText={(password) => setNewPassword(password)}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/ios-lock.png')} />}
                                    />
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Confirm Password</Text>}
                                        secureTextEntry
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        value={confirmPassword}
                                        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15, fontFamily: `${GlobalFont}` }} name={require('../../../assests/images/ios-lock.png')} />}
                                    />
                                    {newPassword !== confirmPassword ? passwordError() : null}
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => _onSubmit()}>
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.nextbtn}>
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
    mainview: {
        alignContent: 'center',
        padding: 20,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        height: responsiveHeight(85),
        justifyContent: 'space-between'
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10
    },
    input: {
        backgroundColor: 'white',
        // flex: 1,
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
    nextbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },
});

export default ChangePassword;
