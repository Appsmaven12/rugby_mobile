import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, RightArrow } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { Button } from 'react-native-paper';
import { GlobalFont } from '../../../utils/FontFamily';


const CoachProfile = ({ navigation }) => {

    return (
        <AppBackGroundImage>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.backbtn}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Profile</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ backgroundColor: '#fff', height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 40, marginLeft: 5, }}>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Jhon Doe</Text>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Player</Text>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>800+ Connections</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Button style={{ backgroundColor: "#fff", borderRadius: 50 }}>Edit Profile</Button>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <Text style={styles.textTitle}>Career Table</Text>
                            <View style={{ marginVertical: 10 }}>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Club</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>Lorem Ipsum</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Team</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>Exeter Chiefs</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Grade</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>Lorem Ipsum</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Season</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>2022</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Cup/League</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>Lorem Ipsum</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                                <View style={styles.educationrow}>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelLeft}>Result</Text>
                                    </View>
                                    <View style={styles.educationinputWrap}>
                                        <Text style={styles.labelRight}>Champion</Text>
                                    </View>
                                </View>
                                <View style={styles.line}></View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={styles.labelLeft}>Coach References</Text>
                            </View>
                            <View style={styles.imageWrap}>
                                <Image source={require('../../../assests/images/arrow.png')} style={styles.labelRight} />
                            </View>
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
        fontWeight: '500',
        fontFamily: `${GlobalFont}`
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`
    },
    mainview: {
        alignContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 7
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
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
    line: {
        height: 1,
        width: "100%",
        marginVertical: 10,
        backgroundColor: '#a5a5a5'
    },
    educationrow: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 7
    },
    educationinputWrap: {
        flex: 1,
        borderColor: "#cccccc",
    },
    labelLeft: {
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`
    },
    labelRight: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        color: '#B0B1B0',
        fontFamily: `${GlobalFont}`
    },
    labelvideo: {
        fontWeight: 'bold',
    },
    video: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    },
    videorow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    row: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        marginVertical: 8
    },
});

export default CoachProfile;
