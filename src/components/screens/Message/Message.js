import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { SideMenu } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Popover, { Rect, PopoverPlacement } from 'react-native-popover-view';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import SearchBar from '../../common/SearchBar';
import { GlobalFont } from '../../../utils/FontFamily';

const Messages = ({ navigation }) => {
    const [showPopover, setShowPopover] = useState(false);
    return (
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
                            onPress={() => navigation.toggleDrawer()}>
                            <SvgXml xml={SideMenu} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>
                            Messages
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: 50, justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('AllNavigation', {
                                    screen: 'Notifications'
                                })}
                            >
                                <IonIcon name="notifications-outline" size={26} color={'white'} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Popover
                                    placement={PopoverPlacement.BOTTOM}
                                    style={{ borderRadius: 20 }}
                                    isVisible={showPopover}
                                    onRequestClose={() => setShowPopover(false)}
                                    from={(
                                        <TouchableOpacity activeOpacity={0.8} onPress={() => setShowPopover(true)}>
                                            <Entypo name="dots-three-vertical" size={20} color={'white'} />
                                        </TouchableOpacity>
                                    )}
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            setShowPopover(false), navigation.navigate('AllNavigation', {
                                                screen: 'CreateGroup'
                                            })
                                        }}
                                        style={{ width: responsiveWidth(25), padding: 10 }}
                                    >
                                        <Text style={{ fontSize: 12, fontFamily: `${GlobalFont}`, fontWeight: 'bold' }}>Create Group</Text>
                                    </TouchableOpacity>
                                </Popover>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SearchBar />
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <View style={{ flexDirection: 'row', marginTop: 18 }}>
                                <View style={{ height: 55, width: 55, marginRight: 10 }}>
                                    <View style={{ height: 35, width: 35, borderRadius: 10, borderColor: 'black', backgroundColor: 'pink', zIndex: 999999, position: 'absolute', bottom: 0 }}></View>
                                    <View style={{ height: 35, width: 35, borderRadius: 10, borderColor: 'black', position: 'absolute', right: 0, backgroundColor: 'green' }}></View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: responsiveWidth(70) }}>
                                    <View style={{ justifyContent: 'space-between', height: 35 }}>
                                        <Text style={{ fontFamily: `${GlobalFont}`, fontSize: 14, fontWeight: '600' }}>John Doe</Text>
                                        <Text style={{ color: "grey", fontSize: 11, fontFamily: `${GlobalFont}` }}> ye sbgyvf hvc ygvc vevg dc begve jhbcfe</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'space-between', height: 40 }}>
                                        <Text style={{ color: "grey", fontSize: 11, fontFamily: `${GlobalFont}` }}>4:00 PM</Text>
                                        <View style={{ backgroundColor: '#163376', height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: "white", fontSize: 12, fontFamily: `${GlobalFont}` }}>3</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={{ flexDirection: 'row', marginTop: 18 }}>
                                <View style={{ height: 55, width: 55, marginRight: 10 }}>
                                    <View style={{ height: 35, width: 35, borderRadius: 10, borderColor: 'black', backgroundColor: 'pink', zIndex: 999999, position: 'absolute', bottom: 0 }}></View>
                                    <View style={{ height: 35, width: 35, borderRadius: 10, borderColor: 'black', position: 'absolute', right: 0, backgroundColor: 'green' }}></View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: responsiveWidth(70) }}>
                                    <View style={{ justifyContent: 'space-between', height: 35 }}>
                                        <Text style={{ fontFamily: `${GlobalFont}`, fontSize: 14, fontWeight: '600' }}>John Doe</Text>
                                        <Text style={{ color: "grey", fontSize: 11, fontFamily: `${GlobalFont}` }}> ye sbgyvf hvc ygvc vevg dc begve jhbcfe</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'space-between', height: 40 }}>
                                        <Text style={{ color: "grey", fontSize: 11, fontFamily: `${GlobalFont}` }}>4:00 PM</Text>
                                        <View style={{ backgroundColor: '#163376', height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: "white", fontSize: 12, fontFamily: `${GlobalFont}` }}>3</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={{ flexDirection: 'row', marginTop: 18 }}>
                                <View style={{ height: 55, width: 55, marginRight: 10 }}>
                                    <View style={{ height: 35, width: 35, borderRadius: 10, borderColor: 'black', backgroundColor: 'pink', zIndex: 999999, position: 'absolute', bottom: 0 }}></View>
                                    <View style={{ height: 35, width: 35, borderRadius: 10, borderColor: 'black', position: 'absolute', right: 0, backgroundColor: 'green' }}></View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', width: responsiveWidth(70) }}>
                                    <View style={{ justifyContent: 'space-between', height: 35 }}>
                                        <Text style={{ fontFamily: `${GlobalFont}`, fontSize: 14, fontWeight: '600' }}>John Doe</Text>
                                        <Text style={{ color: "grey", fontSize: 11, fontFamily: `${GlobalFont}` }}> ye sbgyvf hvc ygvc vevg dc begve jhbcfe</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', justifyContent: 'space-between', height: 40 }}>
                                        <Text style={{ color: "grey", fontSize: 11, fontFamily: `${GlobalFont}` }}>4:00 PM</Text>
                                        <View style={{ backgroundColor: '#163376', height: 20, width: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ color: "white", fontSize: 12, fontFamily: `${GlobalFont}` }}>3</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                        </View>
                    </View>
                </SafeAreaView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500'
    },
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    whiteview: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        borderRadius: 10,
        height: responsiveHeight(70),
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        height: 55,
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
    nextbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    line: {
        height: 1,
        width: "100%",
        marginTop: 10,
        backgroundColor: '#a5a5a5'
    },
});

export default Messages;
