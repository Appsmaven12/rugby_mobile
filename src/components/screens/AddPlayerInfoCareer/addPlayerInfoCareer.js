import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { AddIcon, BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import DropDown from "react-native-paper-dropdown";
import CheckBox from '@react-native-community/checkbox';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { AddPlayerCareerSignUpUser } from '../../../redux/Actions/playerSignUpService';
import Spinner from 'react-native-loading-spinner-overlay';
import { GlobalFont } from '../../../utils/FontFamily';

const AddPlayerCareerInfo = ({ navigation, route }) => {
    const { uniqueId } = route.params
    const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);
    const [showDropDown3, setShowDropDown3] = useState(false);
    const [showDropDown4, setShowDropDown4] = useState(false);
    const [season, setSeason] = useState("")
    const [player, setPlayer] = useState("")
    const [coach, setCoach] = useState("")
    const [fan, setFan] = useState("")
    const [role, setRole] = useState([]);
    const [code, setCode] = useState("")
    const [team, setTeam] = useState("")
    const [division, setDivision] = useState("")
    const [clubName, setClubName] = useState("")
    const [results, setResults] = useState("")
    const [playerBoolean, setPlayerBoolean] = useState(false)
    const [coachBoolean, setCoachBoolean] = useState(false)
    const [fanBoolean, setFanBoolean] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const addplayersignUpState = useSelector((state) => state.addplayersignUp.data)

    const onNext = async () => {
        setLoading(true)
        let obj = {
            id: uniqueId,
            carrierInformation:
                [{
                    season: season,
                    role: role,
                    code: code,
                    team: team,
                    division: division,
                    clubName: clubName,
                    result: results,
                }]
        }
        let result = await dispatch(AddPlayerCareerSignUpUser(obj))
        if (result?.status?.statusCode === 200) {
            setLoading(false)
            navigation.navigate('PlayerStats', { uniqueId: result.data[0]._id })
        } else if (result == undefined || result?.status?.statusCode != 200) {
            setLoading(false)
            Alert.alert("Please fill all information")
        }
    }
    const seasonList = [
        {
            label: "Team",
            value: "Team",
        },
        {
            label: "Team1",
            value: "Team1",
        },
        {
            label: "Team2",
            value: "Team2",
        },
    ];
    const clubnameList = [
        {
            label: "League",
            value: "League",
        },
        {
            label: "Union",
            value: "Union",
        },
        {
            label: "Touch",
            value: "Touch",
        },
    ];

    const positionList = [
        {
            label: "1",
            value: "1",
        },
        {
            label: "2",
            value: "2",
        },
        {
            label: "3",
            value: "3",
        },
    ];
    const resultList = [
        {
            label: "Champion1",
            value: "Champion1",
        },
        {
            label: "Champion2",
            value: "Champion2",
        },
        {
            label: "Champion3",
            value: "Champion3",
        },
    ];

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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12, alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Add Player Information</Text>
                        </View>
                    </View>
                </SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <Text style={styles.textTitle}>Career Table:</Text>
                            <View style={styles.careerTableview}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Season</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        onChangeText={(value) => setSeason(value)}
                                        keyboardType='numeric'
                                    />
                                    <Text style={styles.RoleTitle}>Role:</Text>
                                    <View style={{
                                        justifyContent: 'space-between',
                                        flexDirection: "row",
                                        width: "90%",
                                        marginLeft: 2,
                                        marginVertical: 5
                                    }}>
                                        <View style={{ flexDirection: 'row', width: "25%", justifyContent: "space-between" }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 20, height: 20 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                                value={playerBoolean}
                                                onValueChange={(value) => {
                                                    setPlayerBoolean(!playerBoolean)
                                                    setPlayer("Player")
                                                    value === true ?
                                                        setRole([...new Set([...role, "Player"])]) :
                                                        setRole(pre => pre.filter(value => value !== "Player"))
                                                }}
                                            // onValueChange={() => setRole("Player")}
                                            />
                                            <Text>Player</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: "25%", justifyContent: "space-between" }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 20, height: 20 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                                value={coachBoolean}
                                                onValueChange={(value) => {
                                                    setCoachBoolean(!coachBoolean)
                                                    setCoach("Coach")
                                                    value === true ?
                                                        setRole([...new Set([...role, "Coach"])]) :
                                                        setRole(pre => pre.filter(value => value !== "Coach"))
                                                }}
                                            // onValueChange={() => setRole("Player")}
                                            />
                                            <Text>Coach</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: "25%", justifyContent: "space-between" }}>
                                            <CheckBox
                                                boxType="square"
                                                style={{ width: 20, height: 20 }}
                                                tintColors={{ true: '#000' }}
                                                onTintColor="#000"
                                                onFillColor="#000"
                                                onCheckColor="#fff"
                                                value={fanBoolean}
                                                onValueChange={(value) => {
                                                    setCoachBoolean(!fanBoolean)
                                                    setFan("Fan")
                                                    value === true ?
                                                        setRole([...new Set([...role, "Fan"])]) :
                                                        setRole(pre => pre.filter(value => value !== "Fan"))
                                                }}
                                            // onValueChange={() => setRole("Player")}
                                            />
                                            <Text>Fan</Text>
                                        </View>
                                    </View>
                                    <DropDown
                                        style={{ backgroundColor: "#EBEAED" }}
                                        label={"Code"}
                                        visible={showDropDown2}
                                        showDropDown={() => setShowDropDown2(true)}
                                        onDismiss={() => setShowDropDown2(false)}
                                        value={code}
                                        setValue={setCode}
                                        list={clubnameList}
                                        inputProps={{ style: { backgroundColor: '#EBEAED' } }}
                                        dropDownItemSelectedTextStyle={{ color: 'black' }}
                                        // dropDownItemStyle={{ backgroundColor: '#EBEAED' }}
                                        dropDownItemSelectedStyle={{ backgroundColor: '#EBEAED' }}
                                    />
                                    {/* <TextInput
                                    label={<Text style={styles.textInputLabel}>Club Name</Text>}
                                    style={styles.input}
                                    activeUnderlineColor={"#D3D3D3"}
                                    selectionColor={'#8E8F8F'}
                                /> */}
                                    <DropDown
                                        label={"Team"}
                                        visible={showDropDown}
                                        showDropDown={() => setShowDropDown(true)}
                                        onDismiss={() => setShowDropDown(false)}
                                        value={team}
                                        setValue={setTeam}
                                        list={seasonList}
                                        inputProps={{ style: { backgroundColor: '#EBEAED' } }}
                                        dropDownItemSelectedTextStyle={{ color: 'black' }}
                                        // dropDownItemStyle={{ backgroundColor: '#EBEAED' }}
                                        dropDownItemSelectedStyle={{ backgroundColor: '#EBEAED' }}
                                    />
                                    <DropDown
                                        label={"Division"}
                                        visible={showDropDown3}
                                        showDropDown={() => setShowDropDown3(true)}
                                        onDismiss={() => setShowDropDown3(false)}
                                        value={division}
                                        setValue={setDivision}
                                        list={positionList}
                                        inputProps={{ style: { backgroundColor: '#EBEAED' } }}
                                        dropDownItemSelectedTextStyle={{ color: 'black' }}
                                        // dropDownItemStyle={{ backgroundColor: '#EBEAED' }}
                                        dropDownItemSelectedStyle={{ backgroundColor: '#EBEAED' }}
                                    />
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Club Name</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        onChangeText={(value) => setClubName(value)}
                                    />
                                    <DropDown
                                        label={"Result"}
                                        visible={showDropDown4}
                                        showDropDown={() => setShowDropDown4(true)}
                                        onDismiss={() => setShowDropDown4(false)}
                                        value={results}
                                        setValue={setResults}
                                        list={resultList}
                                        inputProps={{ style: { backgroundColor: '#EBEAED' } }}
                                        dropDownItemSelectedTextStyle={{ color: 'black' }}
                                        // dropDownItemStyle={{ backgroundColor: '#EBEAED' }}
                                        dropDownItemSelectedStyle={{ backgroundColor: '#EBEAED' }}
                                    />
                                </ScrollView>
                            </View>
                            <TouchableOpacity activeOpacity={0.3}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                                    <SvgXml xml={AddIcon} />
                                    <Text style={{ color: '#1D326C', justifyContent: 'center', marginLeft: 5, fontFamily: `${GlobalFont}` }}>Add more</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() =>
                                onNext()
                                // navigation.navigate('PlayerStats')
                            }>
                                <View style={styles.btnPrimary}>
                                    <Text style={styles.submitbtn}>
                                        NEXT
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        opacity: 1,
        position: 'absolute',
        zIndex: 1111
    },
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
        fontFamily: `${GlobalFont}`
    },
    Specialities: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    submitbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
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
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`

    },
    RoleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        fontFamily: `${GlobalFont}`

    },
    careerTableview: {
        backgroundColor: '#EBEAED',
        padding: 10,
        borderRadius: 10,
        marginTop: 15
    },
    input: {
        backgroundColor: '#EBEAED',
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

    signingoogle: {
        height: 45,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#ff7171',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    signinapple: {
        height: 45,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#191919',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
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
});

export default AddPlayerCareerInfo;
