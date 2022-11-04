import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, SafeAreaView, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';
import AppBackGroundImage from '../../common/BackgroundImage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../../redux/Actions/userLoginService';
import actions from '../../../redux/actionsType/signUpAction';
import loginactions from '../../../redux/actionsType/userLoginAction';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { GlobalFont } from '../../../utils/FontFamily';
import { SocialLoginUser } from '../../../redux/Actions/socialLoginService';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState('')

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '490909861188-qafqmacc34e02bfi5sk2k68i0g2jqoml.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }, [])

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const currentUser = await GoogleSignin.getCurrentUser();
      const userInfo = await GoogleSignin.signIn();
      const socialResponse = await dispatch(SocialLoginUser(userInfo.user))
      await AsyncStorage.setItem('accessToken', socialResponse.data.accessToken).then(() => {
        dispatch(actions.updateToken(socialResponse.data.accessToken))
      })
      dispatch(loginactions.loginUserSuccess(socialResponse.data));
      setLoading(false)
    } catch (error) {

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const dispatch = useDispatch()

  const emailErrors = () => {
    return (
      <View>
        <HelperText type="error" visible={true}>
          Email address is invalid!
        </HelperText>
      </View>
    )
  };

  const onsubmit = async () => {
    setLoading(true)
    let result = await dispatch(LoginUser({ email: email, password: password }))
    if (result?.status?.statusCode === 200) {
      setLoading(false)
      let validToken = result.data.accessToken
      let token = await AsyncStorage.setItem('accessToken', validToken).then(() => {
        dispatch(actions.updateToken(validToken))
      })
    } else if (email == '' && password == '') {
      setLoading(false)
      Alert.alert("Please enter email and password")
    } else if (email === '') {
      setLoading(false)
      Alert.alert("Please enter email")
    }
    else if (password === '') {
      setLoading(false)
      Alert.alert("Please enter password")
    }
    else {
      setLoading(false)
      // Alert.alert("Email or Password incorrect")
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
        <View style={{ alignItems: 'center' }}>
          <SafeAreaView>
            <Image
              source={require('../../../assests/images/logo.png')}
              style={styles.logoimage}
            />
          </SafeAreaView>
        </View>
        <ScrollView>
          <View style={styles.mainview}>
            <View style={styles.whiteview}>
              <ScrollView
                showsVerticalScrollIndicator={false}>
                <Text style={styles.textTitle}>Login</Text>
                <View style={{ marginTop: 10 }}>
                  <TextInput
                    label={<Text style={styles.textInputLabel}>Email</Text>}
                    style={styles.input}
                    activeUnderlineColor={'#D3D3D3'}
                    selectionColor={'#8E8F8F'}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    right={
                      <TextInput.Icon
                        size={15}
                        style={styles.icons}
                        name={require('../../../assests/images/email.png')}
                      />
                    }
                  />
                  {(!email.includes('@') && email !== '') ? emailErrors() : null}
                  <TextInput
                    label={<Text style={styles.textInputLabel}>Password</Text>}
                    secureTextEntry
                    style={styles.input}
                    activeUnderlineColor={'#D3D3D3'}
                    selectionColor={'#8E8F8F'}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    right={
                      <TextInput.Icon
                        size={15}
                        style={styles.icons}
                        name={require('../../../assests/images/ios-lock.png')}
                      />
                    }
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onsubmit()}>
                    <View style={styles.btnPrimary}>
                      <Text style={styles.loginbtn}>LOGIN</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                    <Text style={styles.forgotpassword}>Forgot Password</Text>
                  </TouchableOpacity>
                  <View style={styles.socialsigninview}>
                    <View style={styles.line}></View>
                    <Text style={styles.ortext}>Or</Text>
                    <View style={styles.line}></View>
                  </View>
                  <View>
                    <Button
                      icon={
                        <Icon
                          name="google"
                          size={22}
                          color="#fff"
                        />
                      }
                      buttonStyle={{
                        backgroundColor: "#ff7171",
                        borderRadius: 5,
                        height: 45

                      }}
                      containerStyle={{
                        justifyContent: 'center',
                        opacity: 1,
                        paddingBottom: 10
                      }}
                      activeOpacity={0.8}
                      titleStyle={{ fontSize: 14, marginLeft: 5, fontFamily: `${GlobalFont}` }}
                      title="Sign in via Google"
                      onPress={() => _signIn()}
                    />
                    <Button
                      icon={
                        <Icon
                          name="apple"
                          size={22}
                          color="#fff"
                          style={{ marginRight: 10 }}
                        />
                      }
                      buttonStyle={{
                        backgroundColor: "#000",
                        borderRadius: 5,
                        height: 45
                      }}
                      containerStyle={{
                        justifyContent: 'center',
                        opacity: 1,
                        marginBottom: 10,
                      }}
                      activeOpacity={0.8}
                      titleStyle={{ fontSize: 14, marginRight: 10, fontFamily: `${GlobalFont}` }}
                      title="Sign in via Apple"
                    />
                    <Button
                      icon={
                        <Icon
                          name="facebook"
                          size={22}
                          color="#fff"
                          style={{ marginRight: 10 }}
                        />
                      }
                      buttonStyle={{
                        backgroundColor: "#417dd7",
                        borderRadius: 5,
                        height: 45
                      }}
                      containerStyle={{
                        justifyContent: 'center',
                        opacity: 1,
                        marginBottom: 10
                      }}
                      activeOpacity={0.8}
                      titleStyle={{ fontSize: 14, marginRight: -10, fontFamily: `${GlobalFont}` }}
                      title="Sign in via Facebook"
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.signupview}>
            <Text style={{ color: '#d9d9de', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>
              Don't have an account? {''}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={{ color: '#fdfdfd', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </AppBackGroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    opacity: 1,
    position: 'absolute',
    zIndex: 1111
  },
  spinnerTextStyle: {
    color: '#000'
  },
  textInputLabel: {
    color: '#8E8F8F',
    fontWeight: '500',
    fontFamily: `${GlobalFont}`
  },
  socialsigninview: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    marginTop: 15,
  },
  loginbtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: `${GlobalFont}`
  },
  ortext: {
    marginHorizontal: 5,
    fontWeight: 'bold',
    fontFamily: `${GlobalFont}`
  },
  forgotpassword: {
    marginTop: 15,
    textDecorationLine: 'underline',
    color: '#000'
  },
  signIn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  signupview: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  mainview: {
    alignContent: 'center',
    padding: 20,
  },
  whiteview: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: `${GlobalFont}`
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    height: 55,
    fontSize: 15,
  },

  logoimage: {
    resizeMode: 'contain',
    height: 120,
  },

  btnPrimary: {
    backgroundColor: '#152c69',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  signinGoogleView: {
    height: 45,
    borderRadius: 5,
    backgroundColor: '#ff7171',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ff7171',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },

  signinWithApple: {
    height: 45,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#191919',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
  },
  signinfacebook: {
    height: 45,
    flexDirection: 'row',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '50%',
  },
  signWithFacebook: {
    height: 45,
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#417dd7',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 88,
  },

  line: {
    height: 1,
    width: 130,
    backgroundColor: '#a5a5a5',
  },
});

export default Login;
