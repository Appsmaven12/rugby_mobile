// import React from 'react';
// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   FlatList,
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   Dimensions,
//   ImageBackground,
// } from 'react-native';
// import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import AppBackGroundImage from '../../common/BackgroundImage';

// const { width, height } = Dimensions.get('window');

// const COLORS = { primary: '#282534', white: '#fff' };

// const slides = [
//   {
//     id: '1',
//     image: require('../../../assests/images/onborading-image-one.png'),
//     title: 'What is Lorem Ipsom',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     id: '2',
//     image: require('../../../assests/images/onborading-image-two.png'),
//     title: 'Achieve Your Goals',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     id: '3',
//     image: require('../../../assests/images/onborading-image-three.png'),
//     title: 'Increase Your Value',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
// ];

// const Slide = ({ item }) => {
//   return (
//     <SafeAreaView>
//       <View
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <Image
//           source={item?.image}
//           style={{
//             height: responsiveHeight(45),
//             width,
//             resizeMode: 'contain',
//           }}
//         />
//         <View>
//           <Text style={styles.title}>{item?.title}</Text>
//           <Text style={styles.subtitle}>{item?.subtitle}</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const OnBoarding = ({ navigation }) => {
//   const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
//   const ref = React.useRef();
//   const updateCurrentSlideIndex = e => {
//     const contentOffsetX = e.nativeEvent.contentOffset.x;
//     const currentIndex = Math.round(contentOffsetX / width);
//     setCurrentSlideIndex(currentIndex);
//   };

//   const goToNextSlide = () => {
//     const nextSlideIndex = currentSlideIndex + 1;
//     if (nextSlideIndex != slides.length) {
//       const offset = nextSlideIndex * width;
//       ref?.current.scrollToOffset({ offset });
//       setCurrentSlideIndex(currentSlideIndex + 1);
//     }
//   };

//   const goToPreviousSlide = () => {
//     const nextSlideIndex = currentSlideIndex - 1;
//     if (nextSlideIndex != slides.length) {
//       const offset = nextSlideIndex * width;
//       ref?.current.scrollToOffset({ offset });
//       setCurrentSlideIndex(currentSlideIndex - 1);
//     }
//   };

//   const Footer = () => {
//     return (
//       <View
//         style={{
//           height: height * 0.25,
//           justifyContent: 'space-between',
//           paddingHorizontal: 20,
//         }}>
//         {/* Indicator container */}
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//             marginTop: 20,
//           }}>
//           {/* Render indicator */}
//           {slides.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.indicator,
//                 currentSlideIndex == index && {
//                   backgroundColor: COLORS.white,
//                   width: 25,
//                 },
//               ]}
//             />
//           ))}
//         </View>

//         {/* Render buttons */}
//         <View style={{ marginBottom: 20 }}>
//           {currentSlideIndex == slides.length - 1 ? (
//             <View style={{ height: 50 }}>
//               <TouchableOpacity
//                 style={styles.getstartedbtn}
//                 onPress={() => 
//                   navigation.navigate('AuthNavigation', {
//                       screen: 'LoginScreen',
//                   })
//               }>
//                 <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>
//                   GET STARTED
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           ) : (
//             <View style={{ display: 'flex', flexDirection: 'row' }}>
//               {currentSlideIndex == slides.length > 1 && (
//                 <View style={{ alignItems: 'flex-start' }}>
//                   <TouchableOpacity
//                     activeOpacity={0.8}
//                     onPress={goToPreviousSlide}
//                     style={styles.btn}>
//                     <Image
//                       source={require('../../../assests/images/arrow-right.png')}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               )}
//               {
//                 <View style={{ alignItems: 'flex-end', marginLeft: 'auto' }}>
//                   <TouchableOpacity
//                     activeOpacity={0.8}
//                     onPress={goToNextSlide}
//                     style={styles.btn}>
//                     <Image
//                       source={require('../../../assests/images/arrow-left.png')}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               }
//             </View>
//           )}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View>
//       <AppBackGroundImage>
//         <StatusBar backgroundColor={COLORS.primary} />
//         <FlatList
//           ref={ref}
//           onMomentumScrollEnd={updateCurrentSlideIndex}
//           contentContainerStyle={{ height: height * 0.75 }}
//           showsHorizontalScrollIndicator={false}
//           horizontal
//           data={slides}
//           pagingEnabled
//           renderItem={({ item }) => <Slide item={item} />}
//         />
//         <Footer />
//       </AppBackGroundImage>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   subtitle: {
//     color: COLORS.white,
//     fontSize: 13,
//     marginTop: 10,
//     maxWidth: '70%',
//     textAlign: 'center',
//     lineHeight: 23,
//   },
//   title: {
//     color: COLORS.white,
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 20,
//     textAlign: 'center',
//   },
//   indicator: {
//     height: 3.5,
//     width: 10,
//     backgroundColor: 'grey',
//     marginHorizontal: 3,
//     borderRadius: 2,
//   },
//   btn: {
//     width: 50,
//     height: 50,
//     padding: 10,
//     borderRadius: 100,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   getstartedbtn: {
//     flex: 1,
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// export default OnBoarding;

import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import AppBackGroundImage from '../../common/BackgroundImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalFont } from '../../../utils/FontFamily';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
  {
    id: '1',
    image: require('../../../assests/images/onborading-image-one.png'),
    title: 'What is Lorem Ipsom',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: require('../../../assests/images/onborading-image-two.png'),
    title: 'Achieve Your Goals',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../../../assests/images/onborading-image-three.png'),
    title: 'Increase Your Value',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

const Slide = ({item}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
          width,
        }}>
        <Image
          source={item?.image}
          // resizeMode= 'contain'
          style={{
            height: responsiveHeight(55),
            width: '90%',
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width,
          padding: 20,
        }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const OnBoarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToPreviousSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const _onGetStartedBtn = () => {
    AsyncStorage.setItem('isOnboarding', 'true');
    navigation.navigate('AuthNavigation', {
      screen: 'LoginScreen',
    });
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.getstartedbtn}
                                onPress={() => 
                  navigation.navigate('AuthNavigation', {
                      screen: 'LoginScreen',
                  })}>
                <Text style={{fontWeight: 'bold', fontSize: 15, fontFamily: `${GlobalFont}`}}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{display: 'flex', flexDirection: 'row'}}>
              {currentSlideIndex == slides.length > 1 && (
                <View style={{alignItems: 'flex-start'}}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={goToPreviousSlide}
                    style={styles.btn}>
                    <Image
                      source={require('../../../assests/images/arrow-right.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
              {
                <View style={{alignItems: 'flex-end', marginLeft: 'auto'}}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={goToNextSlide}
                    style={styles.btn}>
                    <Image
                      source={require('../../../assests/images/arrow-left.png')}
                    />
                  </TouchableOpacity>
                </View>
              }
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View>
      <AppBackGroundImage>
        <StatusBar backgroundColor={COLORS.primary} />
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{height: responsiveHeight(75)}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </AppBackGroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: `${GlobalFont}`
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: `${GlobalFont}`
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getstartedbtn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoarding;