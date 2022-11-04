import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { GlobalFont } from '../../../utils/FontFamily';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { getMainEventsService } from '../../../redux/Actions/createEventService';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

const Events = ({ navigation }) => {
    const [selectedStartDate, setSelectedStartDate] = useState(null)
    const [open, setOpen] = useState(false)

    const onDateChange = (date) => {
        setSelectedStartDate(date)
        setOpen(false)
    }

    const dispatch = useDispatch()
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    const { mainEventList } = useSelector((state) => {
        return {
            mainEventList: state.mainEventList?.data?.data,
        }
    })

    console.log("mainEventList-------", mainEventList);

    useEffect(() => {
        let params = {
            date: moment(startDate).format('YYYY-MM-DD')
        }
        dispatch(getMainEventsService(params))
    }, [startDate])

    const _renderMainEvenrList = (item, index) => {
        console.log("item-------", item);
        return (
            <View style={styles.mainview}>
                <Card style={{ borderRadius: 10, marginBottom: 10, }}>
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
                                    {/* <Image source={require('../../../assests/images/calendar.png')} style={{}}/> */}
                                    <FontAwesome5 name="calendar" size={12} color={"#000"} />
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 6, color: '#B0B1B0' }}>{moment(item?.updatedAt).format('DD-MM-YYYY hh:mm A')}</Text>
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
        )
    }

    return (
        <View>
            <AppBackGroundImage>
                <SafeAreaView>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 10,
                        }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}>
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>
                            Events
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('AllNavigation', {
                                    screen: 'CreateEvent',
                                })
                            }>
                            <Entypo name="circle-with-plus" size={22} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <View>
                    <View
                        style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 10,
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>
                            Search By Date
                        </Text>
                        <Text>{'    '}</Text>
                        <Ionicons name="calendar" size={22} color={'#fff'}
                            onPress={() => {
                                setOpen(open)
                            }} />
                    </View>
                    <Text style={{ color: 'white', padding: 20, fontWeight: 'bold' }}>{startDate ? moment(startDate).format('DD/MM/YYYY') : 'Today'}</Text>
                    {open ?
                        <View style={{ backgroundColor: '#fff', marginRight: 10, marginLeft: 10, marginBottom: 10, borderRadius: 10 }}>
                            <CalendarPicker
                                onDateChange={onDateChange}
                            /></View> :
                        null
                    }
                </View>
                <View>
                    <FlatList
                        data={mainEventList}
                        renderItem={({ item, index }) =>
                            _renderMainEvenrList(item, index)
                        }
                        keyExtractor={(item, index) => index}
                        nestedScrollEnabled
                        onEndReachedThreshold={0.9}
                    />
                </View>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    details: {
        fontSize: 13
    },
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
        fontFamily: `${GlobalFont}`
    },
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
        // padding: 20,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    input: {
        backgroundColor: 'white',
        // flex: 1,
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
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -10,
    },
    nextbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    line: {
        height: 1,
        width: responsiveWidth(45),
        backgroundColor: '#a5a5a5'
    },
    Text: {
        flexDirection: "row",
        width: responsiveWidth(45),
        justifyContent: "space-between"
    }
});

export default Events;