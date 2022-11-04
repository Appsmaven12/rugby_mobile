import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, RightArrow } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GlobalFont } from '../../../utils/FontFamily';

const Notifications = ({ navigation }) => {

    return (
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
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Notifications</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Ionicons name="md-notifications" size={40} color="#5B5D61" />
                            </View>
                            <View style={styles.inputWrap}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.labelLeft}>Banjamin {''}</Text>
                                    <Text style={{fontFamily: `${GlobalFont}`}}>liked your post.</Text>
                                </View>
                                <Text style={styles.labelLeft}>8 min ago</Text>
                            </View>
                            <View style={{height: 15, width: 40, backgroundColor: '#162D6B', justifyContent: 'center', alignItems: 'center', borderRadius: 2}}>
                                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold', fontFamily: `${GlobalFont}`}}>New</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Ionicons name="md-notifications" size={40} color="#5B5D61" />
                            </View>
                            <View style={styles.inputWrap}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.labelLeft}>Banjamin {''}</Text>
                                    <Text style={{fontFamily: `${GlobalFont}`}}>liked your post.</Text>
                                </View>
                                <Text style={styles.labelLeft}>8 min ago</Text>
                            </View>
                            <View style={{height: 15, width: 40, backgroundColor: '#162D6B', justifyContent: 'center', alignItems: 'center', borderRadius: 2}}>
                                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold', fontFamily: `${GlobalFont}`}}>New</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Ionicons name="md-notifications" size={40} color="#5B5D61" />
                            </View>
                            <View style={styles.inputWrap}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.labelLeft}>Banjamin {''}</Text>
                                    <Text style={{fontFamily: `${GlobalFont}`}}>liked your post.</Text>
                                </View>
                                <Text style={styles.labelLeft}>8 min ago</Text>
                            </View>
                            <View style={{height: 15, width: 40, backgroundColor: '#162D6B', justifyContent: 'center', alignItems: 'center', borderRadius: 2}}>
                                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold', fontFamily: `${GlobalFont}`}}>New</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Ionicons name="md-notifications" size={40} color="#5B5D61" />
                            </View>
                            <View style={styles.inputWrap}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.labelLeft}>Banjamin {''}</Text>
                                    <Text style={{fontFamily: `${GlobalFont}`}}>liked your post.</Text>
                                </View>
                                <Text style={styles.labelLeft}>8 min ago</Text>
                            </View>
                            <View style={{height: 15, width: 40, backgroundColor: '#162D6B', justifyContent: 'center', alignItems: 'center', borderRadius: 2}}>
                                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold', fontFamily: `${GlobalFont}`}}>New</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Ionicons name="md-notifications" size={40} color="#5B5D61" />
                            </View>
                            <View style={styles.inputWrap}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.labelLeft}>Banjamin {''}</Text>
                                    <Text style={{fontFamily: `${GlobalFont}`}}>liked your post.</Text>
                                </View>
                                <Text style={styles.labelLeft}>8 min ago</Text>
                            </View>
                            <View style={{height: 15, width: 40, backgroundColor: '#162D6B', justifyContent: 'center', alignItems: 'center', borderRadius: 2}}>
                                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold', fontFamily: `${GlobalFont}`}}>New</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.row}>
                            <View style={styles.imageWrap}>
                                <Ionicons name="md-notifications" size={40} color="#5B5D61" />
                            </View>
                            <View style={styles.inputWrap}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.labelLeft}>Banjamin {''}</Text>
                                    <Text style={{fontFamily: `${GlobalFont}`}}>liked your post.</Text>
                                </View>
                                <Text style={styles.labelLeft}>8 min ago</Text>
                            </View>
                            <View style={{height: 15, width: 40, backgroundColor: '#162D6B', justifyContent: 'center', alignItems: 'center', borderRadius: 2}}>
                                <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold', fontFamily: `${GlobalFont}`}}>New</Text>
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
        fontWeight: '500'
    },
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 10,
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
    line: {
        height: 1,
        width: "100%",
        marginTop: 10,
        backgroundColor: '#a5a5a5'
    },
    row: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    },
    imageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFE1EB',
        borderRadius: 10,
        width: '15%'
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        marginVertical: 8
    },
    labelLeft: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontFamily: `${GlobalFont}`
    },
});

export default Notifications;
