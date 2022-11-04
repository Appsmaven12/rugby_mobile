import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, SafeAreaView, Text, Platform, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, SearchIcon } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../common/SearchBar';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { GlobalFont } from '../../../utils/FontFamily';
import { useDispatch, useSelector } from 'react-redux';
import { AcceptDeclineConnectionList, ConnectionList } from '../../../redux/Actions/connectionService';
import moment from 'moment';

const Connections = ({ navigation }) => {
  // const [loading, setLoading] = useState(false)
  const [button, setButton] = useState('current');
  const dispatch = useDispatch()

  const { Connection } = useSelector((state) => {
    return {
      Connection: state.connectionPost.data,
    }
  })

  console.log("connectionPost", Connection);

  const acceptRejectConnection = (id, status ,button) => {
    dispatch(AcceptDeclineConnectionList({ connectionId: id, status: status } , button))
  }

  const renderConnection = (item, index) => {
    console.log("renderConnection----", item);
    return (
      <View>
        <View style={{ flexDirection: 'row', marginTop: 18 }}>
          {item?.userId?.profileImage === '' ?
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 1.5,
                borderRadius: 10,
                borderColor: '#8E8F8F',
                borderStyle: 'dashed',
                marginRight: 10,
              }}>
            </View>
            :
            <Image source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${item?.userId?.profileImage}` }} style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              marginRight: 10,
            }} />
          }
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 'auto',
              flex: 1,
            }}>
            <View style={{ justifyContent: 'center' }}>
              <View>
                <Text>{item?.userId?.firstName} {''}</Text>
                <Text>{item?.userId?.lastName}</Text>
              </View>
              <Text style={{ color: 'grey', fontSize: 10, fontFamily: `${GlobalFont}` }}>
                {moment(item?.connectionRequestAt).format("DD/MM/YYYY  hh:mm A")}
              </Text>
            </View>
            {item.isConnected ?
              <View style={{
                justifyContent: 'center', alignItems: 'center', backgroundColor: '#143376', marginRight: 6, width: 44,
                height: 40, borderRadius: 18
              }}>
                <Feather name="send" size={20} color="#fff" />
              </View> :
              <View style={{
                justifyContent: 'center', alignItems: 'center', margin: 'auto', flex: 1, flexDirection: 'row', justifyContent: 'flex-end'
              }}>
                <AntDesign name="closecircleo" size={22} color="red" onPress={() => acceptRejectConnection(item._id, false , button)} />
                <Text>{'  '}</Text>
                <AntDesign name="checkcircleo" size={22} color="green" onPress={() => acceptRejectConnection(item._id, true ,button)} />
              </View>}
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
    )
  }

  useEffect(() => {
    let params = {
      isPending: false
    }
    if (button === 'current') {
      dispatch(ConnectionList(params))

    } else {
      params.isPending = true
      dispatch(ConnectionList(params))
    }

  }, [button])

  return (
    <View>
      <View style={styles.container}>
        {/* {loading && <Spinner
          visible={loading}
          size={'large'}
        />} */}
      </View>
      <View>
        <AppBackGroundImage>
          <SafeAreaView>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
              >
                <SvgXml xml={BackButton} />
              </TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>
                Connections
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('AllNavigation', {
                  screen: 'Notifications'
                })}
              >
                <IonIcon name="notifications-outline" size={30} color={'white'} />
              </TouchableOpacity>
            </View>
            <SearchBar />
            {
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: responsiveWidth(93),
                  alignSelf: 'center',
                  marginBottom: responsiveHeight(1),
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: button == 'current' ? 'white' : '#163374',
                    borderColor: button == 'pending' ? 'white' : null,
                    borderWidth: button == 'pending' ? 1 : null,
                    width: responsiveWidth(46),
                    height: Platform.OS === 'android' ? responsiveHeight(6) : responsiveHeight(5),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomLeftRadius: 5,
                    borderTopLeftRadius: 5,
                  }}
                  onPress={() => setButton('current')}>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: button == 'current' ? 'black' : 'white',
                      fontFamily: `${GlobalFont}`
                    }}>
                    Current
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: button == 'pending' ? 'white' : '#163374',
                    borderColor: button == 'current' ? 'white' : null,
                    borderWidth: button == 'current' ? 1 : null,
                    width: responsiveWidth(47),
                    height: Platform.OS === 'android' ? responsiveHeight(6) : responsiveHeight(5),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomRightRadius: 5,
                    borderTopRightRadius: 5,
                  }}
                  onPress={() => setButton('pending')}>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: button == 'pending' ? 'black' : 'white',
                      fontFamily: `${GlobalFont}`
                    }}>
                    Pending
                  </Text>
                </TouchableOpacity>
              </View>
            }
          </SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainview}>
              {button == 'current' ? (
                <View style={styles.whiteview}>
                  <Text style={styles.textTitle}>{Connection.length} Connections:</Text>
                  <FlatList
                    data={Connection}
                    renderItem={({ item, index }) =>
                      renderConnection(item, index)
                    }
                    keyExtractor={(item, index) => index}
                    nestedScrollEnabled
                    onEndReachedThreshold={0.9}
                  />
                </View>
              ) : (
                <View style={styles.whiteview}>
                  <Text style={styles.textTitle}>{Connection.length} Connections Pending</Text>
                  <FlatList
                    data={Connection}
                    renderItem={({ item, index }) =>
                      renderConnection(item, index)
                    }
                    keyExtractor={(item, index) => index}
                    nestedScrollEnabled
                    onEndReachedThreshold={0.9}
                  />
                </View>
              )}
            </View>
          </ScrollView>
        </AppBackGroundImage>
      </View>
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
  mainview: {
    alignContent: 'center',
    paddingHorizontal: 15,
  },
  whiteview: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: `${GlobalFont}`

  },
  backbtn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 1,
    width: '100%',
    marginTop: 10,
    backgroundColor: '#a5a5a5',
  },
});

export default Connections;
