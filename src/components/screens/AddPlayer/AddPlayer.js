import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView, 
    TouchableOpacity
} from 'react-native';
import DropDown from "react-native-paper-dropdown";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { CheckBox, Icon } from 'react-native-elements';
import SearchBar from '../../common/SearchBar';
import { GlobalFont } from '../../../utils/FontFamily';


const AddPlayer = ({ navigation }) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);
    const [showDropDown3, setShowDropDown3] = useState(false);
    const [season, setSeason] = useState("")
    const [clubname, setClubname] = useState("")
    const [position, setPosition] = useState("")
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const radio_props = [
        { label: 'param1', value: 0 },
        { label: 'param2', value: 1 }
    ];

    const seasonList = [
        {
            label: "Team",
            value: "seven",
        },
        {
            label: "Team1",
            value: "eight",
        },
        {
            label: "Team2",
            value: "nine",
        },
    ];
    const clubnameList = [
        {
            label: "League 1",
            value: "one",
        },
        {
            label: "League 2",
            value: "two",
        },
        {
            label: "League 3",
            value: "three",
        },
    ];

    const positionList = [
        {
            label: "1",
            value: "four",
        },
        {
            label: "2",
            value: "five",
        },
        {
            label: "3",
            value: "six",
        },
    ];
    return (
        <View>
            <AppBackGroundImage>
                <SafeAreaView >
                <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: responsiveWidth(70), padding: 4 }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                            <View style={{}}>
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginRight: 20, fontFamily: `${GlobalFont}` }}> Add a Player</Text>
                            </View>
                        </View>
                    </View>
                    <SearchBar navigation={navigation} />
                    </SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                <View>
                                    <DropDown
                                        label={"Season"}
                                        visible={showDropDown2}
                                        showDropDown={() => setShowDropDown2(true)}
                                        onDismiss={() => setShowDropDown2(false)}
                                        value={clubname}
                                        setValue={setClubname}
                                        list={clubnameList}
                                        inputProps={{ style: { backgroundColor: '#fff' } }}
                                        dropDownItemSelectedTextStyle={{ color: 'black' }}
                                        dropDownItemStyle={{ backgroundColor: '#fff' }}
                                        dropDownItemSelectedStyle={{ backgroundColor: '#fff' }}
                                    />
                                    <DropDown
                                        label={"Club Name"}
                                        visible={showDropDown}
                                        showDropDown={() => setShowDropDown(true)}
                                        onDismiss={() => setShowDropDown(false)}
                                        value={season}
                                        setValue={setSeason}
                                        list={seasonList}
                                        inputProps={{ style: { backgroundColor: '#fff' } }}
                                        dropDownItemSelectedTextStyle={{ color: 'black' }}
                                        dropDownItemStyle={{ backgroundColor: '#fff' }}
                                        dropDownItemSelectedStyle={{ backgroundColor: '#fff' }}
                                    />
                                    <DropDown
                                        label={"Position"}
                                        visible={showDropDown3}
                                        showDropDown={() => setShowDropDown3(true)}
                                        onDismiss={() => setShowDropDown3(false)}
                                        value={position}
                                        setValue={setPosition}
                                        list={positionList}
                                        inputProps={{ style: { backgroundColor: '#fff' } }}
                                        dropDownItemSelectedTextStyle={{ color: 'black' }}
                                        dropDownItemStyle={{ backgroundColor: '#fff' }}
                                        dropDownItemSelectedStyle={{ backgroundColor: '#fff' }}
                                    />
                                    <View style={{marginTop: 10}}><Text style={{fontWeight: 'bold', fontFamily: `${GlobalFont}`}}>Select Player</Text></View>
                                    <ScrollView>
                                    <View style={{ flexDirection: 'row', marginTop: 18 }}>
                                        <View
                                            style={{
                                                height: 50,
                                                width: 50,
                                                borderWidth: 1.5,
                                                borderRadius: 10,
                                                borderColor: '#8E8F8F',
                                                borderStyle: 'dashed',
                                                marginRight: 10,
                                            }}></View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                margin: 'auto',
                                                flex: 1,
                                            }}>
                                            <View style={{ justifyContent: 'center' }}>
                                                <Text>John Doe</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, fontFamily: `${GlobalFont}` }}>
                                                    Try Hard
                                                </Text>
                                            </View>
                                            <CheckBox
                                                center
                                                checkedIcon={
                                                    <Icon
                                                        name="radio-button-checked"
                                                        type="material"
                                                        color="black"
                                                        size={25}
                                                    />
                                                }
                                                uncheckedIcon={
                                                    <Icon
                                                        name="radio-button-unchecked"
                                                        type="material"
                                                        color="black"
                                                        size={25}
                                                    />
                                                }
                                                checked={check1}
                                                onPress={() => setCheck1(!check1)}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 18 }}>
                                        <View
                                            style={{
                                                height: 50,
                                                width: 50,
                                                borderWidth: 1.5,
                                                borderRadius: 10,
                                                borderColor: '#8E8F8F',
                                                borderStyle: 'dashed',
                                                marginRight: 10,
                                            }}></View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                margin: 'auto',
                                                flex: 1,
                                            }}>
                                            <View style={{ justifyContent: 'center' }}>
                                                <Text>John Doe</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, fontFamily: `${GlobalFont}` }}>
                                                    Try Hard
                                                </Text>
                                            </View>
                                            <CheckBox
                                                center
                                                checkedIcon={
                                                    <Icon
                                                        name="radio-button-checked"
                                                        type="material"
                                                        color="black"
                                                        size={25}
                                                    />
                                                }
                                                uncheckedIcon={
                                                    <Icon
                                                        name="radio-button-unchecked"
                                                        type="material"
                                                        color="black"
                                                        size={25}
                                                    />
                                                }
                                                checked={check2}
                                                onPress={() => setCheck2(!check2)}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 18 }}>
                                        <View
                                            style={{
                                                height: 50,
                                                width: 50,
                                                borderWidth: 1.5,
                                                borderRadius: 10,
                                                borderColor: '#8E8F8F',
                                                borderStyle: 'dashed',
                                                marginRight: 10,
                                            }}></View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                margin: 'auto',
                                                flex: 1,
                                            }}>
                                            <View style={{ justifyContent: 'center' }}>
                                                <Text>John Doe</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, fontFamily: `${GlobalFont}` }}>
                                                    Try Hard
                                                </Text>
                                            </View>
                                            <CheckBox
                                                center
                                                checkedIcon={
                                                    <Icon
                                                        name="radio-button-checked"
                                                        type="material"
                                                        color="black"
                                                        size={25}
                                                    />
                                                }
                                                uncheckedIcon={
                                                    <Icon
                                                        name="radio-button-unchecked"
                                                        type="material"
                                                        color="black"
                                                        size={25}
                                                    />
                                                }
                                                checked={check3}
                                                onPress={() => setCheck3(!check3)}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 18 }}>
                                        <View
                                            style={{
                                                height: 50,
                                                width: 50,
                                                borderWidth: 1.5,
                                                borderRadius: 10,
                                                borderColor: '#8E8F8F',
                                                borderStyle: 'dashed',
                                                marginRight: 10,
                                            }}></View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                margin: 'auto',
                                                flex: 1,
                                            }}>
                                            <View style={{ justifyContent: 'center' }}>
                                                <Text>John Doe</Text>
                                                <Text style={{ color: 'grey', fontSize: 10, fontFamily: `${GlobalFont}`}}>
                                                    Try Hard
                                                </Text>
                                            </View>
                                            <CheckBox
                                                center
                                                checkedIcon={
                                                    <Icon
                                                        name="radio-button-checked"
                                                        type="material"
                                                        color="black"
                                                        size={25}
                                                    />
                                                }
                                                uncheckedIcon={
                                                    <Icon
                                                        name="radio-button-unchecked"
                                                        type="material"
                                                        color="black"
                                                        size={25}
                                                    />
                                                }
                                                checked={check4}
                                                onPress={() => setCheck4(!check4)}
                                            />
                                        </View>
                                    </View>
                                    </ScrollView>
                                </View>
                                </ScrollView>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.goBack()}>
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.nextbtn}>
                                            SUBMIT
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',

    },
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        height: responsiveHeight(75),
        justifyContent: 'space-between'
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10
    },
    input: {
        backgroundColor: 'white',
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
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },
});

export default AddPlayer;
