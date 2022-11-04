import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons'
import { AuthContext } from '../Navigation /context';
import { SvgXml } from 'react-native-svg';
import { Connections, GroupIcon } from '../../assests/svgfiles/svgFiles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actionsType/signUpAction';
import jwt_decode from "jwt-decode";
import { LogoutUser } from '../../redux/Actions/logoutActionService';
import { getProfileList } from '../../redux/Actions/getprofileService';


const CustomDrawer = props => {
  // const { signOut } = useContext(AuthContext);
  const dispatch = useDispatch()
  const signOut = async () => {
    dispatch(LogoutUser())
    dispatch(actions.updateToken(''))
    await AsyncStorage.removeItem("accessToken")
    props.navigation.navigate('AuthNavigation', {
      screen: "LoginScreen"
    })
  }

  const { profileData, loginData } = useSelector((state) => {
    return {
        profileData: state.profileData.data,
        loginData: state.loginData.data
    }
})

console.log("LoginData", profileData, loginData);

const getUserRole = Object.assign({}, profileData[0]?.userRole)
const profileDetails = profileData[0]

console.log("getUserRole--111", getUserRole)

// useEffect(() => {
//     async function fetchProfile() {
//         const profileResponse = await dispatch(getProfileList({ userId: loginData._id }))
//         if (profileResponse) {
//             setLoading(false)
//         }
//     }
//     fetchProfile()
// }, [])

  // const valiidToken=AsyncStorage.getItem("accessToken").then((token)=>{
  //   console.log(token,"tokendemo")
  //   const decodeToken=jwt_decode(token)
  //   console.log(decodeToken,"tokendemo")
  //   decodeToken.data.role
  // })
  //   console.log(decodeToken,"tokendemo")

  return (
    <View style={{ flex: 1, backgroundColor: '#173174' }}>
      <SafeAreaView>
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.closeDrawer()}>
          <View style={{ padding: 10, alignItems: 'flex-end' }}>
            <Ionicons name="ios-close-circle" size={22} color="#fff" />
          </View>
        </TouchableOpacity>
        <View style={{ paddingTop: 50, padding: 10 }}>
          <View style={{ flexDirection: 'row' }}>
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
            {/* <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40 }}>
            </View> */}
            <View style={{ padding: 20 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', marginBottom: 8 }}>{profileDetails?.firstName}{''} {profileDetails?.lastName}</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('AllNavigation', {
                      screen: 'Profile',
                    })}
                >
                  <View style={{ borderRadius: 5, backgroundColor: 'white', maxHeight: 30, margin: 'auto', padding: 4, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 10, color: 'black', fontWeight: 'bold' }}>View Profile</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('AllNavigation', {
                      screen: 'Settings',
                    })}
                  style={{ marginLeft: 8 }}
                >
                  <Ionicons name="settings-sharp" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ padding: 20, marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllNavigation', {
              screen: 'Connections'
            })}
            style={{ paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgXml xml={Connections} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  color: 'white'
                }}>
                Connections
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllNavigation', {
              screen: 'Groups'
            })}
            style={{ paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SvgXml xml={GroupIcon} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  color: 'white'
                }}>
                Groups
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => signOut()}
            style={{ paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Octicons name="sign-out" size={22} color={'white'} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  color: 'white'
                }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <Image source={require('../../assests/images/trash-white.png')} style={{height: 20}}/> */}
              <FontAwesome5 name="trash" size={18} color={'white'} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  color: 'white'
                }}>
                Delete Account
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomDrawer;