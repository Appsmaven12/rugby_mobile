import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, Speed, Strength } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { Button } from 'react-native-elements';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { GlobalFont } from '../../../utils/FontFamily';

const Verification = ({ navigation }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View>
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
              <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Verifications</Text>
            </View>
          </View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainview}>
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', fontFamily: `${GlobalFont}`, fontWeight: '400' }}>Choose Plan for your stats Speed and Fitness, Power & Strength</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ backgroundColor: 'white', height: Platform.OS === 'ios' ? responsiveHeight(26) : responsiveHeight(30), width: responsiveWidth(40), borderRadius: 10, justifyContent: 'space-between', padding: 12 }}>
                <Image source={require('../../../assests/images/dollar.png')} style={{ height: 50, width: 50, alignSelf: 'center' }} />
                <View>
                  <Text style={{ textAlign: 'center', fontFamily: `${GlobalFont}` }}>Annual membership for $15 with 2 free verifications pa. ($5 saving)</Text>
                </View>
                <Button
                  buttonStyle={{
                    backgroundColor: "#DFDEDF",
                    borderRadius: 5,
                    height: 35,
                  }}
                  containerStyle={{
                    justifyContent: 'center',
                    opacity: 1,
                    paddingBottom: 10
                  }}
                  titleStyle={{ fontSize: 14, marginLeft: 5, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}
                  title="Select"
                />
              </View>
              <View style={{ backgroundColor: 'white', height: Platform.OS === 'ios' ? responsiveHeight(26) : responsiveHeight(30), width: responsiveWidth(40), borderRadius: 10, justifyContent: 'space-between', padding: 12 }}>
                <Image source={require('../../../assests/images/dollar.png')} style={{ height: 50, width: 50, alignSelf: 'center' }} />
                <View>
                  <Text style={{ textAlign: 'center', fontFamily: `${GlobalFont}` }}>$5 per stats</Text>
                </View>
                <Button
                  buttonStyle={{
                    backgroundColor: "#122558",
                    borderRadius: 5,
                    height: 35,
                  }}
                  containerStyle={{
                    justifyContent: 'center',
                    opacity: 1,
                    paddingBottom: 10
                  }}
                  titleStyle={{ fontSize: 14, marginLeft: 5, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}
                  title="Select"
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <SafeAreaView>
          <Button
            buttonStyle={{
              backgroundColor: "#fff",
              borderRadius: 5,
              height: 40,
              width: responsiveWidth(80),
              alignSelf: 'center'
            }}
            containerStyle={{
              justifyContent: 'center',
              opacity: 1,
              paddingBottom: 10,
              bottom: 40
            }}
            titleStyle={{ fontSize: 14, marginLeft: 5, fontWeight: 'bold', color: '#000000', fontFamily: `${GlobalFont}` }}
            title="Submit"
            onPress={() => { setVisible(!isVisible), navigation.navigate('Payment') }}
          />
        </SafeAreaView>
      </AppBackGroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    alignContent: 'center',
    padding: 25,
    justifyContent: 'space-around',
    height: responsiveHeight(60)
  },
  secondmainview: {
    alignContent: 'center',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  whiteview: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  labelLeft: {
    fontWeight: 'bold'
  },
  labelRight: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: '#B0B1B0'
  },
  row: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
  },
  btnPrimary: {
    backgroundColor: '#152c69',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backbtn: {
    width: 50,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  nextbtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#a5a5a5',
    marginVertical: 10
  },
});

export default Verification;
