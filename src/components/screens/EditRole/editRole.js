import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import { GlobalFont } from '../../../utils/FontFamily';
import AppBackGroundImage from '../../common/BackgroundImage';
import CheckBox from '@react-native-community/checkbox';

const EditRole = ({ navigation }) => {
    return (
        <View>
            <AppBackGroundImage>
                <SafeAreaView >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Edit Role</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <View style={{ height: responsiveHeight(76) }}>
                                    <View style={{ marginVertical: 10 }}>
                                        <View style={styles.row}>
                                            <View style={styles.inputWrap}>
                                                <Text style={styles.labelLeft}>Player</Text>
                                            </View>
                                            <View style={styles.inputWrap}>
                                                <CheckBox
                                                    boxType="square"
                                                    style={{ width: 18, height: 18 }}
                                                    tintColors={{ true: '#000' }}
                                                    onTintColor="#000"
                                                    onFillColor="#000"
                                                    onCheckColor="#fff"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={styles.inputWrap}>
                                                <Text style={styles.labelLeft}>Coaches</Text>
                                            </View>
                                            <View style={styles.inputWrap}>
                                                <CheckBox
                                                    boxType="square"
                                                    style={{ width: 18, height: 18 }}
                                                    tintColors={{ true: '#000' }}
                                                    onTintColor="#000"
                                                    onFillColor="#000"
                                                    onCheckColor="#fff"
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={styles.inputWrap}>
                                                <Text style={styles.labelLeft}>Fans</Text>
                                            </View>
                                            <View style={styles.inputWrap}>
                                                <CheckBox
                                                    boxType="square"
                                                    style={{ width: 18, height: 18 }}
                                                    tintColors={{ true: '#000' }}
                                                    onTintColor="#000"
                                                    onFillColor="#000"
                                                    onCheckColor="#fff"
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.8}>
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.nextbtn}>
                                            SUBMIT
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View
                                style={styles.whiteview}>
                                <Text style={styles.textInputLabel}>Email</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}>
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.nextbtn}>
                                            SUBMIT
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View> */}
                    </ScrollView>
                </SafeAreaView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    labelLeft: {
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`,
        fontSize: 16
    },
    labelRight: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        color: '#B0B1B0',
        fontFamily: `${GlobalFont}`
    },
    row: {
        // flex: 1,
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    mainview: {
        alignContent: 'center',
        padding: 15,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        height: responsiveHeight(85),
        justifyContent: 'space-between'
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10
    },
    inputWrap: {
        // flex: 1,
        borderColor: "#cccccc",
    },
    btnPrimary: {
        backgroundColor: '#152c69',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 20,
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
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },
});

export default EditRole;
