import React, {useState} from 'react';
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
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import DropDown from "react-native-paper-dropdown";
import { GlobalFont } from '../../../utils/FontFamily';

const Payment = ({ navigation }) => {
    const [showDropDown2, setShowDropDown2] = useState(false);
    const [clubname, setClubname] = useState("")
    const clubnameList = [
        {
            label: "10",
            value: "one",
        },
        {
            label: "11",
            value: "two",
        },
        {
            label: "12",
            value: "three",
        },
    ];
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
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Payment</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <View>

                                <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    label={"Master Card"}
                                    visible={showDropDown2}
                                    showDropDown={() => setShowDropDown2(true)}
                                    onDismiss={() => setShowDropDown2(false)}
                                    value={clubname}
                                    setValue={setClubname}
                                    list={clubnameList}
                                    inputProps={{ style: { backgroundColor: '#fff' } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Card Number</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                    />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <TextInput
                                            label={<Text style={styles.textInputLabel}>Valid Until</Text>}
                                            style={styles.nameinput}
                                            activeUnderlineColor={"#D3D3D3"}
                                            selectionColor={'#8E8F8F'}
                                        />
                                        <TextInput
                                            label={<Text style={styles.textInputLabel}>CVV</Text>}
                                            secureTextEntry
                                            style={styles.nameinput}
                                            activeUnderlineColor={"#D3D3D3"}
                                            selectionColor={'#8E8F8F'}
                                        />
                                    </View>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Card holder name</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                    />
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('Stats')}
                                    >
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.nextbtn}>
                                            SUBMIT
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
        fontFamily: `${GlobalFont}`
    },
    nameinput: {
        backgroundColor: 'white',
        width: responsiveWidth(39),
        fontSize: 15,
        fontFamily: `${GlobalFont}`
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
    input: {
        backgroundColor: 'white',
        fontSize: 15,
        fontFamily: `${GlobalFont}`
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
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },
});

export default Payment;
