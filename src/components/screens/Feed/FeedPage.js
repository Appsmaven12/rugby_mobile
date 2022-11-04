import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { SideMenu } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { Card } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchBar from '../../common/SearchBar';
import { GlobalFont } from '../../../utils/FontFamily';
import { useDispatch, useSelector } from 'react-redux';
import { commentPostData, getFeedPostData, likePostData, reportUser } from '../../../redux/Actions/getFeedPostService';
import { SwipeablePanel } from 'rn-swipeable-panel';
import Feather from 'react-native-vector-icons/Feather';
import Spinner from 'react-native-loading-spinner-overlay';
import { responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { DeletePost } from '../../../redux/Actions/createPostService';
import moment from "moment"
import { getProfileList } from '../../../redux/Actions/getprofileService';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FeedPage = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [commentText, setCommentText] = useState('');
  // const [showPopover, setShowPopover] = useState(false);
  const [dataComments, setDataComments] = useState([])
  const [panelProps, setPanelProps] = useState({
    fullWidth: false,
    openLarge: false,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
  });

  const [isPanelActive, setIsPanelActive] = useState(false);
  const [commentId, setCommentId] = useState("")

  const openPanel = (id) => {
    setCommentId(id)
    setCommentText('')
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const { FeedPost } = useSelector((state) => {
    return {
      FeedPost: state.feedPost,
    }
  })

  const dispatch = useDispatch()
  const { loginData } = useSelector((state) => {
    return {
      // profileData: state.profileData.data,
      loginData: state.loginData.data
    }
  })

  useEffect(() => {
    async function fetchFeedData() {
      setLoading(true)
      const getPostsResponse = await dispatch(getFeedPostData())
      if (getPostsResponse) {
        setLoading(false)
      }
    }
    fetchFeedData()
  }, [])

  useEffect(() => {
    async function fetchProfile() {
      const profileResponse = await dispatch(getProfileList({ userId: loginData._id }))
      if (profileResponse) {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [loginData])


  const _onLike = async (id, islike) => {
    setLoading(true)
    let status = true
    if (islike) {
      status = false
    }
    const res = await dispatch(likePostData({ postId: id, status: status }))
    console.log(res, "res");
    if (res) {
      dispatch(getFeedPostData())
    }
    setLoading(false)
  }

  const _onComment = async () => {
    setLoading(true)
    const comment = await dispatch(commentPostData({ postId: commentId, commentText: commentText }))
    if (comment) {
      dispatch(getFeedPostData())
      setLoading(false)
    }
    if (comment.status === 200) {
      setCommentId('')
      setIsPanelActive(false)
      setLoading(false)
    }
  }

  // const _onDelete = async (id) => {
  //   setLoading(true)
  //   const res = await dispatch(DeletePost({ postId: id }))
  //   setShowPopover(false)
  //   console.log(res, "res");
  //   if (res) {
  //     dispatch(getFeedPostData())
  //   }
  //   setLoading(false)
  //   setShowPopover(false)
  // }

  let _menu = {}

  const hideMenu = (index) => {
    console.log("hide-index", index);
    _menu[index].hide()
  }

  const showMenu = (index) => {
    _menu[index].show()
  };

  const _onReportUser = async (id, userid) => {
    console.log("_onReportUser", id, userid);
    setLoading(true)
    const res = await dispatch(reportUser({ postId: id, userId: userid }))
    console.log(res, "_onReportUser");
    if (res) {
      dispatch(getFeedPostData())
    }
    setLoading(false)
  }

  const displayDropdown = (item, index) => {
    console.log("displayDropdown", item);
    return (
      <Menu
        ref={(menu) => { _menu[index] = menu }}
        onRequestClose={() => hideMenu(index)}
        style={{ width: responsiveScreenWidth(30), marginTop: 15 }}
        anchor={<Entypo name="dots-three-horizontal" onPress={() => showMenu(index)} size={18} color={'grey'} />}>
        <MenuItem onPress={() => {
          hideMenu(index);
          _onReportUser(item._id, item?.createdBy?._id)
        }}>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <FontAwesome5 name="user-slash" size={12} color="black" />
            <Text style={{ fontSize: 12, marginLeft: 2, fontFamily: `${GlobalFont}` }}>Report User</Text>
          </View>
        </MenuItem>
      </Menu>
    )
  }

  const renderPostList = (item, index) => {
    console.log("renderPostList-id", item);
    return (
      <Card style={{ borderRadius: 10, marginBottom: 10 }}>
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0.8} onPress={() =>
              navigation.navigate('AllNavigation', {
                screen: 'MainProfile',
                params: { userId: item?.createdBy?._id }
              })
            }>
              <Image source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${item?.createdBy?.profileImage}` }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10,
                  marginRight: 10,
                }} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '80%',
              }}>
              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity activeOpacity={0.8} onPress={() =>
                  navigation.navigate('AllNavigation', {
                    screen: 'MainProfile',
                    params: { userId: item?.createdBy?._id }
                  })
                }>
                  <View style={{ flexDirection: 'row' }}>
                    <Text>{item?.createdBy?.firstName} {''}</Text>
                    <Text>{item?.createdBy?.lastName}</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{ color: 'grey', fontSize: 10, marginTop: 4, fontFamily: `${GlobalFont}` }}>
                  {moment(item.createdAt).format("DD/MM/YYYY, hh:mm A")}
                </Text>
              </View>
              <View>
                <View>
                  {displayDropdown(item, index)}
                </View>
              </View>
              {/* <View>
                <Popover
                  placement={PopoverPlacement.BOTTOM}
                  from={(
                    <TouchableOpacity>
                      <Entypo name="dots-three-horizontal" size={18} color={'grey'} />
                    </TouchableOpacity>
                  )}
                  arrowShift={1}
                >
                  <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Icon name="pencil" size={12} color="black" />
                    <Text style={{ fontSize: 12, marginLeft: 8, fontFamily: `${GlobalFont}` }}>Edit Post</Text>
                  </View>
                  <TouchableOpacity activeOpacity={0.8}>
                    <View style={{ flexDirection: 'row', padding: 5 }}>
                      <FontAwesome5 name="trash" size={12} color="black" />
                      <Text style={{ fontSize: 12, marginLeft: 8, fontFamily: `${GlobalFont}` }}>Delete Post</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{ flexDirection: 'row', padding: 5 }}>
                    <FontAwesome5 name="user-slash" size={12} color="black" />
                    <Text style={{ fontSize: 12, marginLeft: 6, fontFamily: `${GlobalFont}` }}>Report User</Text>
                  </View>
                </Popover>
              </View> */}
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', marginVertical: 5, fontFamily: `${GlobalFont}` }}>
            {item.postName}
          </Text>
          <Text style={{ color: 'grey', fontSize: 10, fontFamily: `${GlobalFont}` }}>
            {item.postText}
          </Text>
          <Card.Cover
            style={{ borderRadius: 10, marginVertical: 10 }}
            source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${item.postMedia}` }}
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => _onLike(item._id, item.isLiked)}>
                <View style={{ flexDirection: 'row', backgroundColor: '#152D68', borderRadius: 12, padding: 2, paddingLeft: 5, paddingRight: 5, alignItems: 'center' }}>
                  <IonIcon name="ios-heart-outline" size={18} color={'white'} />
                  <Text style={{ color: 'white', fontSize: 12, marginLeft: 3, fontFamily: `${GlobalFont}` }}>{item?.likeUserIds?.length}</Text>
                </View>
              </TouchableOpacity>
              <Text>{'  '}</Text>
              <TouchableOpacity onPress={() => { openPanel(item._id); setDataComments(item.comments) }}>
                <View style={{ flexDirection: 'row', padding: 2, paddingLeft: 5, paddingRight: 5, alignItems: 'center' }}>
                  <MaterialCommunityIcons name="message-reply-text" size={18} />
                  <Text style={{ fontSize: 12, marginLeft: 2 }}>{item?.comments?.length}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 'auto', borderRadius: 10, padding: 2, paddingLeft: 5, paddingRight: 5, alignItems: 'center' }}>
              <IonIcon name="ios-flag" size={15} />
              <Text>{'  '}</Text>
              <IonIcon name="ios-share-social" size={15} />
            </View>
          </View>
        </View>
      </Card>
    )
  }

  return (
    <View>
      <View style={styles.container}>
        {loading && <Spinner
          visible={loading}
          size={'large'}
        />}
      </View>
      <View>
        <AppBackGroundImage>
          <SafeAreaView>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 15,
                paddingRight: 15
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.toggleDrawer()}>
                <SvgXml xml={SideMenu} />
              </TouchableOpacity>
              <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>
                Feed
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('AllNavigation', {
                  screen: 'Notifications'
                })}
              >
                <IonIcon name="notifications-outline" size={30} color={'white'} />
              </TouchableOpacity>
            </View>
            <SearchBar navigation={navigation} />
            <View style={styles.mainview}>
              <FlatList
                data={FeedPost.data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>
                  renderPostList(item, index)
                }
                contentContainerStyle={{ paddingBottom: 200 }}
                onEndReachedThreshold={0.9}
              />
            </View>
          </SafeAreaView>
          {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('AllNavigation', {
                screen: 'CreateNewPost', params: {
                  data: {
                    postName: "",
                    postText: "",
                    postMedia: ""
                  }, message: "create"
                }
              })}
          >
            <View
              style={{
                position: 'absolute',
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#152D68',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 10,
                right: 20,
              }}
            >
              <IonIcon
                name='add-outline'
                size={35}
                color='#fff'
              />
            </View>
          </TouchableOpacity> */}
        </AppBackGroundImage>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('AllNavigation', {
              screen: 'CreateNewPost', params: {
                data: {
                  postName: "",
                  postText: "",
                  postMedia: ""
                }, message: "create"
              }
            })}
        >
          <View
            style={{
              position: 'absolute',
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#152D68',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 10,
              right: 20,
            }}
          >
            <IonIcon
              name='add-outline'
              size={35}
              color='#fff'
            />
          </View>
        </TouchableOpacity>
        <SafeAreaView>
          <SwipeablePanel  {...panelProps} isActive={isPanelActive} >
            {dataComments?.map((item) => {
              return (
                <View style={{ padding: 15 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${item?.userId?.profileImage}` }}
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '80%',
                      }}
                    >
                      <View>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                          <Text style={{ fontFamily: `${GlobalFont}` }}>{item.userId.firstName} {""} {item.userId.lastName} {'.'} </Text>
                          <Text style={{ color: 'grey', fontFamily: `${GlobalFont}` }}>{moment(item.commentAt).format("DD/MM/YYYY")}</Text>
                        </View>
                        <Text style={{ color: 'grey', fontSize: 11, fontFamily: `${GlobalFont}`, marginBottom: 5 }}>
                          {item.commentText}
                        </Text>
                        <Text style={{ fontFamily: `${GlobalFont}` }}>Like | Reply</Text>
                      </View>
                    </View>
                  </View>
                  {dataComments[!dataComments.length - 1] && <View style={styles.line}></View>}
                </View>
              )
            })}

            <View style={{ top: 0, justifyContent: 'center', alignItems: 'center' }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // borderWidth: 1,
                  borderRadius: 20,
                  padding: 5,
                  backgroundColor: '#EFF0FF',
                  marginTop: 20,
                  width: 350,
                }}>
                <TextInput
                  style={styles.input1}
                  onChangeText={(commentText) => setCommentText(commentText)}
                  value={commentText}
                  placeholder="Type your message"
                  multiline={true}
                />
                <TouchableOpacity onPress={() => _onComment()}>
                  <View style={{
                    justifyContent: 'center', alignItems: 'center', backgroundColor: '#143376', marginRight: 6, width: 50,
                    height: 40, borderRadius: 18,
                  }}>
                    <Feather name="send" size={20} color="#fff" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SwipeablePanel>
        </SafeAreaView>
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
    zIndex: 1111,
  },
  input1: {
    // flex: 1,
    // height: responsiveHeight(10),
    backgroundColor: '#EFF0FF',
    width: responsiveScreenWidth(62)
    // padding: 20,
    // width: responsiveHeight(30),
  },
  mainview: {
    alignContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  whiteview: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoimage: {
    resizeMode: 'contain',
    height: 120,
  },
  signupbtn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
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
    marginTop: 20,
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
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: '#a5a5a5',
  },
});

export default FeedPage;
