import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GlobalFont } from '../../../utils/FontFamily';

const ProfileViews = ({ navigation }) => {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const citiesDropdownRef = useRef();

    // useEffect(() => {
    //     //   setTimeout(() => {
    //     setCountries([
    //         { title: 'Egypt', cities: [{ title: 'Cairo' }, { title: 'Alex' }] },
    //         { title: 'Canada', cities: [{ title: 'Toronto' }, { title: 'Quebec City' }] },
    //     ]);
    //     //   }, 1000);
    // }, []);

    return (
        <View>
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
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Profile Views</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <View style={{ height: responsiveHeight(78) }}>
                                    <View style={{ marginVertical: 10 }}>
                                        <View style={styles.row}>
                                            <View style={styles.inputWrap}>
                                                <Text style={styles.labelLeft}>Player</Text>
                                            </View>
                                            <View style={styles.inputWrap}>
                                                <Text style={styles.labelRight}>10</Text>
                                            </View>
                                        </View>
                                        <View style={styles.line}></View>
                                        <View style={styles.row}>
                                            <View style={styles.inputWrap}>
                                                <Text style={styles.labelLeft}>Coaches</Text>
                                            </View>
                                            <View style={styles.inputWrap}>
                                                <Text style={styles.labelRight}>102</Text>
                                            </View>
                                        </View>
                                        <View style={styles.line}></View>
                                        <View style={styles.row}>
                                            <View style={styles.inputWrap}>
                                                <Text style={styles.labelLeft}>Fans</Text>
                                            </View>
                                            <View style={styles.inputWrap}>
                                                <Text style={styles.labelRight}>20</Text>
                                            </View>
                                        </View>
                                        <View style={styles.line}></View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    mainview: {
        alignContent: 'center',
        padding: 15,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
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
    row: {
        // flex: 1,
        flexDirection: "row",
        marginVertical: 10
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
    },
    backbtn: {
        width: 50,
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },

    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#a5a5a5',
        marginVertical: 10
    },

    ////////////////////////////////////////////

    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },

    headerTitle: { color: '#000', fontWeight: 'bold', fontSize: 16 },
    saveAreaViewContainer: { flex: 1, backgroundColor: '#FFF' },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
    },
    dropdownsRow: { flexDirection: 'row', width: '100%', paddingHorizontal: '5%' },

    dropdown1BtnStyle: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
    divider: { width: 12 },
    dropdown2BtnStyle: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown2BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown2DropdownStyle: { backgroundColor: '#EFEFEF' },
    dropdown2RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown2RowTxtStyle: { color: '#444', textAlign: 'left' },
});

export default ProfileViews;
