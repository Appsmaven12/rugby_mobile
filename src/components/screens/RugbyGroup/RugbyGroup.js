import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import SearchBar from '../../common/SearchBar';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { GlobalFont } from '../../../utils/FontFamily';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupDetails } from '../../../redux/Actions/getGroupDetails';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { Card } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RugbyGroup = ({ navigation, route }) => {

    const { groupId } = route.params
    const [loading, setLoading] = useState(false)
    const [button, setButton] = useState('opportunities');
    const { groupDetails, dataOpportunities, dataEvents } = useSelector((state) => {
        return {
            groupDetails: state.groupDetail?.data?.data?.[0],
            dataOpportunities: state.groupDetail?.data?.dataOpportunities,
            dataEvents: state.groupDetail?.data?.dataEvents
        }
    })


    const dispatch = useDispatch()
    useEffect(() => {
        async function groupDetailsData() {
            setLoading(true)
            const getGroupResponse = await dispatch(getGroupDetails(groupId))
            if (getGroupResponse) {
                setLoading(false)
            }
        }
        groupDetailsData()
    }, [])

    const _renderOpportunity = (item, index) => {
        return (
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('OpportunitiesDetails', { postId: item._id })}>
                    <View style={styles.mainview}>
                        <View style={styles.whiteview}>
                            <Text style={{ fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>{item?.type}</Text>
                            <Text style={styles.textdes}>{item?.forType}</Text>
                            <Text style={styles.description}>{item?.about}</Text>
                            <Text style={styles.textdes}>{item?.isTeamOrClub}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.textdes}>{item?.location}</Text>
                                <Text style={styles.textdes}>{moment(item?.updatedAt).format("DD/MM/YYYY")}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const _renderEvents = (item, index) => {
        console.log("_renderEvents", item);
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('EventDetails', { postId: item._id })}>
                <View style={styles.mainview}>
                    <Card style={{ borderRadius: 10 }}>
                        <View style={{ padding: 5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Card.Cover style={{ borderRadius: 10, width: responsiveWidth(30), height: Platform.OS === 'android' ? responsiveHeight(20) : responsiveHeight(15) }} source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${item?.image}` }} />
                                <View style={{ marginLeft: 10, width: responsiveWidth(56), height: Platform.OS === 'android' ? responsiveHeight(20) : responsiveHeight(15) }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5, color: '#000', fontFamily: `${GlobalFont}` }}>{item?.title}</Text>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 7, color: '#B0B1B0', fontFamily: `${GlobalFont}` }}>{item?.description}</Text>
                                    <View style={{ flexDirection: 'row', marginBottom: 7 }}>
                                        {item?.categories.map((categoriesItem) => {
                                            return (
                                                <View style={{ borderRadius: 50, backgroundColor: '#152D68', maxHeight: 40, margin: 'auto', padding: 7, justifyContent: 'center', marginLeft: 3 }}>
                                                    <Text style={{ fontSize: Platform.OS === 'ios' ? 8 : 9, color: '#fff', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>{categoriesItem}</Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                        <FontAwesome5 name="calendar" size={12} color={"#000"} />
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 6, color: '#B0B1B0' }}>{moment(item?.updatedAt).format("DD/MM/YYYY - hh:mm A")}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginBottom: 5, marginLeft: -2 }}>
                                        <IonIcon name="location-sharp" size={14} color={"black"} />
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5, color: '#B0B1B0', fontFamily: `${GlobalFont}` }}>{item?.location}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
            </TouchableOpacity>
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
                                padding: 15,
                            }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}>
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>
                                {groupDetails?.name}
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                            // onPress={() =>
                            //     navigation.navigate('AllNavigation', {
                            //         screen: 'CreateGroup',
                            //     })
                            // }
                            >
                                <Entypo name="dots-three-vertical" size={22} color={'white'} />
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                    {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {groupDetails?.image ?
                                    <View style={styles.imageWrap}>
                                        <Image
                                            source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${groupDetails?.image}` }}
                                            style={{ height: 82, width: 82, borderRadius: 10 }}
                                        />
                                    </View>
                                    :
                                    <View style={styles.imageWrap}>
                                        <Ionicons name="md-notifications" size={40} color="#5B5D61" />
                                    </View>
                                }
                                <View style={{ height: responsiveHeight(5), justifyContent: 'space-between' }}>
                                    <Text style={styles.labelLeft}>{groupDetails?.name}</Text>
                                    <View style={{ flexDirection: 'row', width: responsiveWidth(67), justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={{ fontSize: responsiveFontSize(1.5), marginLeft: 10, color: '#fff', fontFamily: `${GlobalFont}` }}>{groupDetails?.memberUserIds?.length} members</Text>
                                        <TouchableOpacity style={{ width: responsiveWidth(26), height: responsiveHeight(3.5), backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }} onPress={() => navigation.navigate('InviteParticipants')}>
                                            <Text style={{ fontSize: responsiveFontSize(1.5), fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Invite Member</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View></View>
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
                                    width: responsiveWidth(46),
                                    height: Platform.OS === 'android' ? responsiveHeight(6) : responsiveHeight(5),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottomLeftRadius: 5,
                                    borderTopLeftRadius: 5,
                                }}
                                onPress={() => setButton('opportunities')}>
                                <Text
                                    style={{
                                        fontWeight: '600',
                                        color: button == 'opportunities' ? '#fff' : '#81848F',
                                        fontFamily: `${GlobalFont}`
                                    }}>
                                    Opportunities
                                </Text>
                                {button == 'opportunities' ? <View style={styles.line}></View>
                                    :
                                    null
                                }
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: responsiveWidth(47),
                                    height: Platform.OS === 'android' ? responsiveHeight(6) : responsiveHeight(5),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderBottomRightRadius: 5,
                                    borderTopRightRadius: 5,
                                }}
                                onPress={() => setButton('events')}>
                                <Text
                                    style={{
                                        fontWeight: '600',
                                        color: button == 'events' ? '#fff' : '#81848F',
                                        fontFamily: `${GlobalFont}`,
                                        fontSize: 14
                                    }}>
                                    Events
                                </Text>
                                {button == 'events' ? <View style={styles.line}></View>
                                    :
                                    null
                                }
                            </TouchableOpacity>
                        </View>
                    }
                    <SearchBar />
                    {button == 'opportunities' ?
                        <FlatList
                            data={dataOpportunities}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                _renderOpportunity(item, index)
                            }
                            // contentContainerStyle={{ paddingBottom: 200 }}
                            onEndReachedThreshold={0.9}
                            keyExtractor={(item, index) => item.key}
                        />
                        :
                        <FlatList
                            data={dataEvents}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                _renderEvents(item, index)
                            }
                            contentContainerStyle={{ paddingBottom: 200 }}
                            onEndReachedThreshold={0.9}
                        />
                    }
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() =>
                            navigation.navigate('CreateOpportunitiesandEvents', { perticularGroupId: groupId })}
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
                                bottom: 20,
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
        zIndex: 1111,
    },
    textTitle: {
        fontWeight: 'bold',
        marginTop: 6
    },
    textdes: {
        fontWeight: 'bold',
        marginTop: 6,
        fontSize: 12,
        fontFamily: `${GlobalFont}`
    },
    description: {
        color: '#898988',
        marginTop: 6,
        fontSize: 12,
        fontFamily: `${GlobalFont}`
    },
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
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
    row: {
        // flex: 1,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: 'center',
        // backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    imageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: responsiveWidth(20),
        height: responsiveHeight(10)
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        marginVertical: 8
    },
    labelLeft: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#fff',
        fontFamily: `${GlobalFont}`
    },
    line: {
        height: 2,
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#fff',
        marginTop: 15
    },
});

export default RugbyGroup;