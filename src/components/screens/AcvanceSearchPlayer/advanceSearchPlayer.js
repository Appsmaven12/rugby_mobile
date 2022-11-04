import React, { useCallback, useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Text,
    ScrollView, 
    TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { BackButton, SearchIcon } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../common/SearchBar';
import CheckBox from '@react-native-community/checkbox';
import SelectableChips from 'react-native-chip/SelectableChips';
import RangeSlider from 'rn-range-slider';
import Thumb from './Thumb';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Label from './Label';
import Notch from './Notch';
import { GlobalFont } from '../../../utils/FontFamily';

const AdvanceSearchPlayer = ({ navigation }) => {
    const renderThumb = useCallback(() => <Thumb />, []);
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((low, high) => {
        setLow(low);
        setHigh(high);
    }, []);
    return (
        <View>
            <AppBackGroundImage>
                <SafeAreaView>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", width: "96%", }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                            style={styles.backbtn}
                        >
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                        <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", fontFamily: `${GlobalFont}` }}>Search Player</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AllNavigation', {
                                screen: 'Notifications'
                            })}
                        >
                        <IonIcon name="notifications-outline" size={30} color={"white"} />
                        </TouchableOpacity>
                    </View>
                    <SearchBar />

                </SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <Text style={styles.textTitle}>Advance Player Search :</Text>
                            <Text style={{ marginTop: 10, fontWeight: "600", color: "black", fontSize: 15, fontFamily: `${GlobalFont}`}}>Role :</Text>
                            <View style={{
                                justifyContent: 'space-between', 
                                flexDirection: "row",
                                width: "90%",
                                marginVertical: 10
                            }}>
                                <View style={{ flexDirection: 'row', width: "22%", justifyContent: "space-between", }}>
                                    <CheckBox
                                        boxType="square"
                                        style={{ width: 20, height: 20 }}
                                        tintColors={{ true: '#000' }}
                                        onTintColor="#000"
                                        onFillColor="#000"
                                        onCheckColor="#fff"
                                    />
                                    <Text>Player</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: "22%", justifyContent: "space-between" }}>
                                    <CheckBox
                                        boxType="square"
                                        style={{ width: 20, height: 20 }}
                                        tintColors={{ true: '#000' }}
                                        onTintColor="#000"
                                        onFillColor="#000"
                                        onCheckColor="#fff"
                                    />
                                    <Text>Coach</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: "22%", justifyContent: "space-between" }}>
                                    <CheckBox
                                        boxType="square"
                                        style={{ width: 20, height: 20 }}
                                        tintColors={{ true: '#000' }}
                                        onTintColor="#000"
                                        onFillColor="#000"
                                        onCheckColor="#fff"
                                    />
                                    <Text>Fan</Text>
                                </View>
                            </View>

                            <TextInput
                                label={<Text style={styles.textInputLabel}>Position</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Age Group</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Height (cm)</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Weight (kg)</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Country</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Region</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />
                            <Text style={styles.textTitle}>Vertical Jump (cm)</Text>
                            <RangeSlider
                                style={{ width: "100%", height: 80 }}
                                gravity={'center'}
                                renderThumb={renderThumb}
                                min={200}
                                max={1000}
                                step={20}
                                selectionColor="#3df"
                                blankColor="#f618"
                                renderRail={renderRail}
                                renderRailSelected={renderRailSelected}
                                renderLabel={renderLabel}
                                renderNotch={renderNotch}
                                floatingLabel={true}
                            />
                            <Text style={styles.textTitle}>Strength & Power:</Text>
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Country</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Region</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Division</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />
                            <Text style={styles.Specialities}>Specialities:</Text>
                            <SelectableChips initialChips={["Defence", "Attack", "Forwards", "Backline", "Strength and Conditioning", "Head Coach", "Assistant coach", "Psychology and motivation"]}
                                onChangeChips={(chips) => console.log(chips)}
                                alertRequired={false}
                                chipStyleSelected={{ backgroundColor: '#142C68', fontSize: 12, justifyContent: 'center', fontWeight: 'bold' }}
                                valueStyle={{ color: '#142C68', fontSize: 12, justifyContent: 'center', fontWeight: 'bold' }}
                                chipStyle={{ borderColor: '#142C68' }}
                                valueStyleSelected={{ color: '#fff' }}
                            />
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    label={<Text style={styles.textInputLabel}>First Name</Text>}
                                    style={styles.input}
                                    activeUnderlineColor={"#D3D3D3"}
                                    selectionColor={'#8E8F8F'}
                                />
                                <TextInput
                                    label={<Text style={styles.textInputLabel}>Last Name</Text>}
                                    style={styles.input}
                                    activeUnderlineColor={"#D3D3D3"}
                                    selectionColor={'#8E8F8F'}
                                />
                            </View>
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Region</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                            />

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('FeedPage')}>
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
    Specialities: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
        fontFamily: `${GlobalFont}`

    },
    mainview: {
        alignContent: 'center',
        paddingHorizontal: 20,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        color: "#19387F"
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
    searchBar: {
        fontSize: 15,
        margin: 10,
        width: '80%',
        height: 50,
        borderRadius: 10,
        padding: 20,
        backgroundColor: "white"
    },
    searchIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    backbtn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    }
});

export default AdvanceSearchPlayer;
