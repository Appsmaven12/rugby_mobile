import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView, 
    TouchableOpacity 
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { GlobalFont } from '../../../utils/FontFamily';

const InviteParticipants = ({ navigation }) => {

    return (
        <AppBackGroundImage>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center'}}>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' , fontFamily: `${GlobalFont}`}}>Invite Participants</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View style={styles.whiteview}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row', marginTop: 18 }}>
                                <View style={{ height: 50, width: 50, borderWidth: 1.5, borderRadius: 10, borderColor: '#8E8F8F', borderStyle: 'dashed', marginRight: 10 }}></View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", width: responsiveWidth(50) }}>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text>John Doe</Text>
                                        <Text style={{ color: "grey", fontSize: 10 , fontFamily: `${GlobalFont}`}}>Victoria, Australia</Text>
                                    </View>
                                </View>
                                <View style={{height: 20, width: 60, backgroundColor: '#162D6B', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                                <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold', fontFamily: `${GlobalFont}`}}>Invite</Text>
                            </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={{ flexDirection: 'row', marginTop: 18 }}>
                                <View style={{ height: 50, width: 50, borderWidth: 1.5, borderRadius: 10, borderColor: '#8E8F8F', borderStyle: 'dashed', marginRight: 10 }}></View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text>John Doe</Text>
                                        <Text style={{ color: "grey", fontSize: 10, fontFamily: `${GlobalFont}` }}>Victoria, Australia</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </AppBackGroundImage>
    );
};

const styles = StyleSheet.create({
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500'
    },
    mainview: {
        alignContent: 'center',
        padding: 15,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        height: responsiveHeight(85)
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
});

export default InviteParticipants;
