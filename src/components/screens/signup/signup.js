import React, { useState } from 'react';
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
import { TextInput, HelperText } from 'react-native-paper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { useSelector, useDispatch } from 'react-redux';
import { SignUpUser } from '../../../redux/Actions/signUpActionService';
import Spinner from 'react-native-loading-spinner-overlay';
import { GlobalFont } from '../../../utils/FontFamily';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const onChangeEmail = email => setEmail(email);
    const onChangePassword = password => setPassword(password);
    const onChangeConfirmpassword = confirmpassword => setConfirmpassword(confirmpassword);
    const SignupSelector = useSelector((state) => state.signUp)


    const emailErrors = () => {
        return (
            <View>
                <HelperText type="error" visible={true} style={{fontFamily: `${GlobalFont}`}}>
                    Email address is invalid!
                </HelperText>
            </View>
        )
    };

    const passwordError = () => {
        return (
            <HelperText type="error" visible={true} style={{fontFamily: `${GlobalFont}`}}>
                Password and Confirm Password are not same
            </HelperText>
        )
    }
    
    const onsubmit = async () => {
        setLoading(true)
        if (email == '' && password == '' && confirmpassword == '' || (password == '' && confirmpassword == '')) {
            setLoading(false)
            Alert.alert("Please enter something")
        }
        else if (password !== confirmpassword) {
            setLoading(false)
            Alert.alert("Passwords and Confirm password should be same")
        } else {
            setLoading(false)
            await dispatch(SignUpUser({ email: email, password: password, confirmpassword: confirmpassword }, navigation))
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
                    <View style={styles.backbtn}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../../../assests/images/logo.png')}
                            style={styles.logoimage}
                        />
                    </View>
                </SafeAreaView>
                <ScrollView>
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <ScrollView showsVerticalScrollIndicator={false}
                                scrollEnabled={false}
                            >
                                <Text style={styles.textTitle}>Sign Up</Text>
                                <View style={{ marginTop: 10 }}>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Email</Text>}
                                        style={styles.input}
                                        value={email}
                                        onChangeText={onChangeEmail}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/email.png')} />}
                                    />
                                    {(!email.includes('@') && email !== '') ? emailErrors() : null}
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Password</Text>}
                                        secureTextEntry
                                        value={password}
                                        onChangeText={onChangePassword}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/ios-lock.png')} />}
                                    />
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Confirm Password</Text>}
                                        secureTextEntry
                                        value={confirmpassword}
                                        onChangeText={onChangeConfirmpassword}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/ios-lock.png')} />}
                                    />
                                    {password !== confirmpassword ? passwordError() : null}
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() => onsubmit()}
                                    // disabled = {((password !== confirmpassword) &&  email !== '' &&  password !== '') ? false : true}
                                    >
                                        <View style={styles.btnPrimary}>
                                            <Text style={styles.signupbtn}>
                                                SIGN UP
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 60
                            }}
                        >
                            <Text style={{ color: '#d9d9de', textAlign: 'center', fontFamily: `${GlobalFont}` }}>
                                By continuing, you agree to Rugby Factory <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Terms & </Text>
                                <TouchableOpacity>
                                    <Text style={{ color: '#fdfdfd', lineHeight: 25, fontFamily: `${GlobalFont}` }}>
                                        <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Conditions </Text>and <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Privacy Policy</Text>
                                    </Text>
                                </TouchableOpacity>
                            </Text>
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
        padding: 20,
        height: responsiveHeight(70),
        justifyContent: 'space-between'
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: `${GlobalFont}`
    },
    logoimage: {
        resizeMode: 'contain',
        height: 120
    },
    signupbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        height: 55,
        fontSize: 15,
    },
    btnPrimary: {
        backgroundColor: '#152c69',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
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

export default SignUp;
