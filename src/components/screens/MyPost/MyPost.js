import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, SafeAreaView, Text, ScrollView, TouchableOpacity, Platform, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GlobalFont } from '../../../utils/FontFamily';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { getMyPostsData } from '../../../redux/Actions/getMyPostService';
import Spinner from 'react-native-loading-spinner-overlay';
import { PlayerSignUpUser } from '../../../redux/Actions/playerSignUpService';
import Video from 'react-native-video';

const MyPost = ({ navigation }) => {
    const [button, setButton] = useState('post');
    const [loading, setLoading] = useState(false)

    const { MyPost, ProfilePostData } = useSelector((state) => {
        return {
            MyPost: state.myPosts.data,
            ProfilePostData: state.playersignUp.data
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        async function myPostData() {
            console.log("demodata")
            setLoading(true)
            const getPostsResponse = await dispatch(getMyPostsData())
            await dispatch(PlayerSignUpUser())
            if (getPostsResponse) {
                setLoading(false)
            }
        }
        myPostData()
    }, [])

    const renderMyPost = (item, index) => {
        console.log("renderMyPost", item.postMedia);
        return (
            <View style={styles.whiteview}>
                <View style={{ justifyContent: 'space-between' }}>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => navigation.navigate('Posts', { index: index })}>
                        {item.postMedia.split(".").pop() == "mp4" ?
                            <Video source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${item.postMedia}` }} controls={true} style={{ width: responsiveWidth(45), height: responsiveHeight(17), borderRadius: 20, }} />
                            :
                            <Image source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${item.postMedia}` }} style={{ width: responsiveWidth(45), height: responsiveHeight(17), borderRadius: 20, }} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
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
                            onPress={() => navigation.goBack()}>
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>
                            My Post
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AllNavigation', {
                                screen: 'Notifications'
                            })}
                        >
                            <IonIcon name="notifications-outline" size={30} color={'white'} />
                        </TouchableOpacity>
                    </View>
                    {
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: responsiveWidth(88),
                                alignSelf: 'center',
                                marginBottom: responsiveHeight(1),
                            }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: button == 'post' ? 'white' : '#163374',
                                    borderColor: button == 'tagged' ? 'white' : null,
                                    borderWidth: button == 'tagged' ? 1 : null,
                                    width: responsiveWidth(44),
                                    height: responsiveHeight(5),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottomLeftRadius: 5,
                                    borderTopLeftRadius: 5,
                                }}
                                onPress={() => setButton('post')}>
                                <View style={{ flexDirection: 'row' }}>
                                    <IonIcon name="grid-outline" size={16} color={button == 'post' ? 'black' : 'white'} />
                                    <Text
                                        style={{
                                            fontWeight: '600',
                                            color: button == 'post' ? 'black' : 'white',
                                            marginLeft: 5,
                                            fontFamily: `${GlobalFont}`
                                        }}>
                                        Post
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: button == 'tagged' ? 'white' : '#163374',
                                    borderColor: button == 'post' ? 'white' : null,
                                    borderWidth: button == 'post' ? 1 : null,
                                    width: responsiveWidth(44),
                                    height: responsiveHeight(5),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottomRightRadius: 5,
                                    borderTopRightRadius: 5,
                                }}
                                onPress={() => setButton('tagged')}>
                                <View style={{ flexDirection: 'row' }}>
                                    <FontAwesome5 name="user-tag" size={14} color={button == 'tagged' ? 'black' : 'white'} />
                                    <Text
                                        style={{
                                            fontWeight: '600',
                                            color: button == 'tagged' ? 'black' : 'white',
                                            marginLeft: 5,
                                            fontFamily: `${GlobalFont}`
                                        }}>
                                        Tagged
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                </SafeAreaView>
                <View>
                    {button == 'post' ? (
                        <>
                            {MyPost.length > 0 ?
                                <FlatList
                                    data={MyPost}
                                    showsVerticalScrollIndicator={false}
                                    columnWrapperStyle={{ justifyContent: "space-around" }}
                                    renderItem={({ item, index }) =>
                                        renderMyPost(item, index)
                                    }
                                    key={'_'}
                                    keyExtractor={(item, index) => index}
                                    numColumns={2}
                                // onEndReachedThreshold={0.9}
                                />
                                :
                                <View style={{
                                    // flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 60
                                }}>
                                    <Text style={{
                                        fontSize: 25,
                                        fontFamily: `${GlobalFont}`,
                                        fontWeight: 'bold',
                                        color: '#FFF'
                                    }}>No Post Available</Text>
                                </View>
                            }
                        </>
                    ) : (
                        <>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.whiteview}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                        <Image source={require('../../../assests/images/onborading-image-one.png')} style={{ width: responsiveWidth(45), height: responsiveHeight(17), borderRadius: 20, }} />
                                        <Image source={require('../../../assests/images/onborading-image-one.png')} style={{ width: responsiveWidth(45), height: responsiveHeight(17), borderRadius: 20, }} />
                                    </View>
                                </View>
                                <View style={styles.whiteview}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                        <Image source={require('../../../assests/images/onborading-image-one.png')} style={{ width: responsiveWidth(45), height: responsiveHeight(17), borderRadius: 20, }} />
                                        <Image source={require('../../../assests/images/onborading-image-one.png')} style={{ width: responsiveWidth(45), height: responsiveHeight(17), borderRadius: 20, }} />
                                    </View>
                                </View>
                                <View style={styles.whiteview}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                        <Image source={require('../../../assests/images/onborading-image-one.png')} style={{ width: responsiveWidth(45), height: responsiveHeight(17), borderRadius: 20, }} />
                                        <Image source={require('../../../assests/images/onborading-image-one.png')} style={{ width: responsiveWidth(45), height: responsiveHeight(17), borderRadius: 20, }} />
                                    </View>
                                </View>
                            </ScrollView>
                        </>
                    )}
                </View>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    whiteview: {
        padding: 10,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
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

export default MyPost;
