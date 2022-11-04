import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Button } from 'react-native-elements';
import { GlobalFont } from '../../../utils/FontFamily';
import { EventDetailService } from '../../../redux/Actions/opportunitiesandEventsService';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import moment from 'moment';

const EventDetails = ({ navigation, route }) => {
    const { postId } = route.params

    const [loading, setLoading] = useState(false)
    const { eventDetail } = useSelector((state) => {
        return {
            eventDetail: state.eventDetail?.data[0]
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        async function eventDetailsData() {
            setLoading(true)
            const getResponse = await dispatch(EventDetailService(postId))
            if (getResponse) {
                setLoading(false)
            }
        }
        eventDetailsData()
    }, [])

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
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Event Details</Text>
                        </View>
                    </View>
                </SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <View>
                                <Text style={{ fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>{eventDetail?.title}</Text>
                                {/* <Text style={styles.textdes}>Match referee</Text> */}
                                <Text style={styles.description}>{eventDetail?.description}</Text>
                                <Text style={styles.textdes}>Club</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.textdes}>{eventDetail?.location}</Text>
                                    <Text style={styles.textdes}>{moment(eventDetail?.updatedAt).format("DD/MM/YYYY")}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Button
                                    buttonStyle={{
                                        backgroundColor: "#DFDEDF",
                                        borderRadius: 5,
                                        height: 40,
                                        width: responsiveWidth(40)
                                    }}
                                    containerStyle={{
                                        justifyContent: 'center',
                                        opacity: 1,
                                        paddingBottom: 10
                                    }}
                                    onPress={() => navigation.goBack()}
                                    titleStyle={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}
                                    title="Cancel"
                                />
                                <Button
                                    buttonStyle={{
                                        backgroundColor: "#122558",
                                        borderRadius: 5,
                                        height: 40,
                                        width: responsiveWidth(40)
                                    }}
                                    containerStyle={{
                                        justifyContent: 'center',
                                        opacity: 1,
                                        paddingBottom: 10
                                    }}
                                    onPress={() => navigation.goBack()}
                                    titleStyle={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}
                                    title="Apply"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    textTitle: {
        fontWeight: 'bold',
        marginTop: 10,
        fontFamily: `${GlobalFont}`
    },
    textdes: {
        fontWeight: 'bold',
        marginTop: 10,
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
        borderRadius: 10,
        height: responsiveHeight(85),
        justifyContent: 'space-between'
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
    line: {
        height: 1,
        width: "100%",
        marginTop: 10,
        backgroundColor: '#a5a5a5'
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
        backgroundColor: '#DFE1EB',
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
        color: '#fff'
    },
});

export default EventDetails;