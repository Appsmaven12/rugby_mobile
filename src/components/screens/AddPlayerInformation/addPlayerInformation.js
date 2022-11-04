import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { AddIcon, BackButton, PhoneCall, VideoIcon } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import SelectableChips from 'react-native-chip/SelectableChips';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Popover, { Rect, PopoverPlacement } from 'react-native-popover-view';
import DropDown from "react-native-paper-dropdown";
import { useDispatch, useSelector } from 'react-redux';
import { AddPlayerSignUpUser, UploadVideos } from '../../../redux/Actions/playerSignUpService';
import * as ImagePicker from "react-native-image-picker"
import Spinner from 'react-native-loading-spinner-overlay';
import Video from 'react-native-video';
import { GlobalFont } from '../../../utils/FontFamily';
import { playerInfoConstant, unionConstant } from '../../../constant';
import { Weight } from '../../../assests/JsonFiles/weight';
import { Height } from '../../../assests/JsonFiles/height';
import { threeKMRunMins } from '../../../assests/JsonFiles/threeKMRunMins';
import { threeKMRunSecs } from '../../../assests/JsonFiles/threeKMRunSecs';

const AddPlayerInformation = ({ navigation, route }) => {
    const { uniqueId } = route.params
    const [clubname, setClubname] = useState("")
    const [season, setSeason] = useState("")
    const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);
    const [currentTeam1, setCurrentTeam1] = useState('');
    const [currentTeam2, setCurrentTeam2] = useState('');
    const [height, setHeight] = useState("")
    const [width, setWidth] = useState("")
    const [interestid, setInterestid] = useState([])
    const [uploadvideo, setUploadVideo] = useState({
        attackvideo: '',
        defencevideo: '',
        generalvideo: ''
        // attackvideo: videoResponse.attackvideo !== 'undefined' ? videoResponse.attackvideo : '',
        // defencevideo: videoResponse.defencevideo !== 'undefined' ? videoResponse.defencevideo : '',
        // generalvideo: videoResponse.generalvideo !== 'undefined' ? videoResponse.generalvideo : ''
    })
    const [showDropDownPrimary, setShowDropDownPrimary] = useState(false);
    const [showDropDownSecondary, setShowDropDownSecondary] = useState(false);
    const [primaryCode, setPrimaryCode] = useState(false);
    const [secondaryCode, setSecondaryCode] = useState();

    const [showDropDownLeaugePrimary, setShowDropDownLeaugePrimary] = useState(false);
    const [showDropDownLeaugeSecondary, setShowDropDownLeaugeSecondary] = useState(false);
    const [primaryLeaugeCode, setPrimaryLeaugeCode] = useState(false);
    const [secondaryLeaugeCode, setSecondaryLeaugeCode] = useState();

    const [showDropDownTouchPrimary, setShowDropDownTouchPrimary] = useState(false);
    const [showDropDownTouchSecondary, setShowDropDownTouchSecondary] = useState(false);
    const [primaryTouchCode, setPrimaryTouchCode] = useState(false);
    const [secondaryTouchCode, setSecondaryTouchCode] = useState();

    const [education, setEducation] = useState({
        courseName: "",
        institutionName: "",
        passedYear: ""
    })
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    // const PlayerSignupSelector = useSelector((state) => state.signUp.data)

    const { videoResponse, Interest } = useSelector((state) => {
        return {
            PlayerSignupSelector: state.signUp?.data,
            Interest: state.addplayersignUp?.interests,
            videoResponse: state.playersignUp?.Video?.media
        }
    })
    console.log("videoResponse", videoResponse);

    const onNext = async () => {
        // setLoading(true)
        let obj = {
            height: height,
            weight: width,
            education: [education],
            interestIds: interestid,
            currentTeamIds: [currentTeam1, currentTeam2],
            videos: uploadvideo,
            uniqueId: uniqueId,
            // rugby : rugby

        }
        // return
        let result = await dispatch(AddPlayerSignUpUser(obj))
        if (result?.status?.statusCode === 200) {
            setLoading(false)
            navigation.navigate('AddPlayerCareerInfo', { uniqueId: result.data[0]._id })
        } else if (result == undefined || result?.status?.statusCode !== 200) {
            setLoading(false)
            Alert.alert("Please fill all information")
        }
    }


    const interestsData = Interest.map(element => {
        return element.name
    });
    const multi = (chips) => {
        const intrestDataFiltered = Interest.filter((item) => {
            if (chips.includes(item.name)) {
                return item._id
            }
        }).map(itm => itm._id)
        setInterestid(intrestDataFiltered)
    }


    const [videoSource, setVideoSource] = useState('');
    const [union, setUnion] = useState(unionConstant)
    const [unionSelectedData, setUnionSelectedData] = useState([])
    const [unionCodeName, setUnionCodeName] = useState('')
    const [rugby, setRugby] = useState([])
    const [isActiveDrop, setIsActiveDrop] = useState()
    const [leagueSelectedType , setSelectedLeagueType] = useState([])

    const options2 = {
        mediaType: 'video',
        path: 'video',
        quality: 1
    };

    const attackVideo = () => {
        ImagePicker.launchImageLibrary(options2, (response) => {
            if (response.assets) {
                const uploadattackvideo = response.assets.map((vid) => {
                    return vid.uri
                })
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: uploadattackvideo[0] };
                    setUploadVideo({ ...uploadvideo, attackvideo: source })
                    dispatch(UploadVideos({ document: response.assets[0] }))
                }
            }
        });
    }


    const defenceVideo = () => {
        ImagePicker.launchImageLibrary(options2, (response) => {
            if (response.assets) {
                const uploaddefencevideo = response.assets.map((vid) => {
                    return vid.uri
                })
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: uploaddefencevideo[0] };

                    setUploadVideo({ ...uploadvideo, defencevideo: source })
                    dispatch(UploadVideos({ document: response.assets[0] }))
                }
            }
        });
    }

    const generalVideo = () => {
        ImagePicker.launchImageLibrary(options2, (response) => {
            if (response.assets) {
                const uploadgeneralvideo = response.assets.map((vid) => {
                    return vid.uri
                })
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    const source = { uri: uploadgeneralvideo[0] };

                    setUploadVideo({ ...uploadvideo, generalvideo: source })
                    dispatch(UploadVideos({ document: response.assets[0] }))
                }
            }
        });
    }

    const rubyCode = [
        {
            label: "Full-back",
            value: "Full-back"
        },
        {
            label: "Wing",
            value: "Wing"
        },
        {
            label: "Centre",
            value: "Centre"
        },
        {
            label: "Centre",
            value: "Centre"
        },
        {
            label: "Wing",
            value: "Wing"
        },
        {
            label: "Stand-Off Half",
            value: "Stand-Off Half"
        },
        {
            label: "Scrum Half",
            value: "Scrum Half"
        },
        {
            label: "Prop Forward",
            value: "Prop Forward"
        },
        {
            label: "Hooker",
            value: "Hooker"
        },
        {
            label: "Prop Forward",
            value: "Prop Forward"
        },
        {
            label: "Second Row Forward",
            value: "Second Row Forward"
        },
        {
            label: "Second Row Forward",
            value: "Second Row Forward"
        },
        {
            label: "Loose Forward",
            value: "Loose Forward"
        },
    ]

    const handleOnPress = (item, name) => {
        const finalPayload = [...rugby]
        let dataObj = {}
        if (name === "union") {

            if (unionSelectedData.includes(item.name)) {
                const selectedUnion = union.map((itm) => {
                    if (unionSelectedData.includes(itm.name) && itm.id === item.id) {
                        itm.isSelected = false
                    }
                    return itm
                })
                const filterdUnionSelectedData = unionSelectedData.filter(itm => itm !== item.name)
                dataObj = {
                    code: name,
                    selectType: filterdUnionSelectedData
                }
                setUnion(selectedUnion)
                setUnionSelectedData(filterdUnionSelectedData)
            }
            else {
                const selectedUnion = union.map((itm) => {
                    if (itm.id === item.id && !item.isSelected) {
                        itm.isSelected = true
                    }
                    return itm
                })
                setUnion(selectedUnion)
                const rugbyCode = [...unionSelectedData]
                rugbyCode.push(item.name)
                dataObj = {
                    code: name,
                    selectType: rugbyCode
                }
                setUnionSelectedData(rugbyCode)

            }
            finalPayload.push(dataObj)
            setRugby(finalPayload)
        }

    }

    const handleDrop = (src) => {
        console.log(src, "vijay");
        setIsActiveDrop(src)
    }

    {/* <View>
                                <Popover
                                    placement={PopoverPlacement.BOTTOM}
                                    from={(
                                        <TouchableOpacity >
                                            <View style={styles.rugbyCode}>
                                                <Text>
                                                    Union
                                                </Text>
                                                <Entypo name="chevron-down" size={16} color={'black'} />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                    arrowShift={0.8}
                                    // isVisible={unionSelectedData.length === 2 ? true: false}
                                    popoverStyle={{ width: responsiveWidth(50), borderRadius: 6, marginLeft: 60, padding: 5 }}
                                >
                                    {
                                        union?.map((item) =>
                                            <TouchableOpacity activeOpacity={0.8} onPress={() => handleOnPress(item, 'union')}>
                                                <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 12, fontFamily: `${GlobalFont}` }}>{item.name}</Text>
                                                    {item.isSelected ? <AntDesign name="star" size={16} color={'#FEA301'} /> :
                                                        <AntDesign name="staro" size={16} color={'black'} />}

                                                </View>

                                            </TouchableOpacity>)
                                    }
                                </Popover>

                            </View> */}


    const handleRugbyCode = (v, src) => {
        // "rugbyCodes": [
        //     {
        //       "code": "Leauge",
        //       "selectType": [
        //         "Full-back",
        //         "Wing"
        //       ]
        //     },
        //     {
        //       "code": "Union",
        //       "selectType": [
        //         "Wing",
        //         "Full-back"
        //       ]
        //     }
        //   ],
       
        console.log(v, src, "value");
        console.log(leagueSelectedType);
        const selectType = [...leagueSelectedType]
        selectType.push(v)
        setSelectedLeagueType(selectType)
        console.log(selectType,"obj");
    
    }

    useEffect(()=>{
        console.log(leagueSelectedType,"leagueSelectedType");
    },[leagueSelectedType])



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
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}> Add Player Information</Text>
                        </View>
                    </View>
                </SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View
                            style={styles.whiteview}>
                            <Text style={styles.textTitle}>Interests:</Text>
                            <SelectableChips initialChips={interestsData}
                                onChangeChips={(chips) => multi(chips)}
                                alertRequired={false}
                                chipStyleSelected={{ backgroundColor: '#142C68', fontSize: 12, fontWeight: 'bold', justifyContent: 'center' }}
                                valueStyle={{ color: '#142C68', fontSize: 12, justifyContent: 'center', fontWeight: 'bold' }}
                                chipStyle={{ borderColor: '#142C68' }}
                                valueStyleSelected={{ color: '#fff' }}
                            />

                            <DropDown
                                style={{ backgroundColor: "#EBEAED" }}
                                label={"Height (cm)"}
                                visible={showDropDown2}
                                showDropDown={() => setShowDropDown2(true)}
                                onDismiss={() => setShowDropDown2(false)}
                                value={height}
                                setValue={setHeight}
                                list={Height}
                                inputProps={{ style: { backgroundColor: '#fff' } }}
                                dropDownItemSelectedTextStyle={{ color: 'black' }}
                            />
                            <DropDown
                                label={"Weight (kg)"}
                                visible={showDropDown}
                                showDropDown={() => setShowDropDown(true)}
                                onDismiss={() => setShowDropDown(false)}
                                value={width}
                                setValue={setWidth}
                                list={Weight}
                                inputProps={{ style: { backgroundColor: '#fff' } }}
                                dropDownItemSelectedTextStyle={{ color: 'black' }}
                            />

                            {/* <TextInput
                                label={<Text style={styles.textInputLabel}>Height (cm)</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                value={height}
                                onChangeText={(value) => setHeight(value.replace(/[^0-9]/g, ''))}
                            />
                            <TextInput
                                label={<Text style={styles.textInputLabel}>Weight (kg)</Text>}
                                style={styles.input}
                                activeUnderlineColor={"#D3D3D3"}
                                selectionColor={'#8E8F8F'}
                                value={width}
                                onChangeText={(value) => setWidth(value.replace(/[^0-9]/g, ''))}
                            /> */}
                            <Text>{' '}</Text>
                            <Text style={styles.VideoTitle}>Rugby Code:</Text>
                            {playerInfoConstant.map((data) => <>
                                <TouchableOpacity onPress={() => handleDrop(data.src)} >
                                    <View style={isActiveDrop === data.src ? styles.rugbyCode : styles.rugbyCode2} >
                                        <Text style={{ color: isActiveDrop !== data.src ? '#000' : '#fff', fontWeight: 'bold', fontFamily: `${GlobalFont}`, fontSize: 15 }}>
                                            {data.src}
                                        </Text>
                                        <Entypo name={isActiveDrop !== data.src ? "chevron-down" : "chevron-up"} size={16} color={isActiveDrop !== data.src ? '#000' : '#fff'} />
                                    </View>
                                </TouchableOpacity>
                                {isActiveDrop === data.src ? <View>
                                    {data.src == "Union" ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                            <DropDown
                                                style={{ backgroundColor: "#EBEAED" }}
                                                label={"Primary Code"}
                                                visible={showDropDownPrimary}
                                                showDropDown={() => setShowDropDownPrimary(true)}
                                                onDismiss={() => setShowDropDownPrimary(false)}
                                                value={primaryCode}
                                                setValue={(value) => { handleRugbyCode(value, data.src); setPrimaryCode(value) }}
                                                list={rubyCode}
                                                inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                                dropDownItemSelectedTextStyle={{ color: 'black' }}
                                            />
                                            <DropDown
                                                style={{ backgroundColor: "#EBEAED" }}
                                                label={"Secondary Code"}
                                                visible={showDropDownSecondary}
                                                showDropDown={() => setShowDropDownSecondary(true)}
                                                onDismiss={() => setShowDropDownSecondary(false)}
                                                value={secondaryCode}
                                                setValue={(value) => { handleRugbyCode(value, data.src); setSecondaryCode(value) }}
                                                list={rubyCode}
                                                inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                                dropDownItemSelectedTextStyle={{ color: 'black' }}
                                                onCh
                                            />
                                        </View>
                                        : null
                                    }
                                    {data.src == "League" ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                            <DropDown
                                                style={{ backgroundColor: "#EBEAED" }}
                                                label={"Primary Code"}
                                                visible={showDropDownLeaugePrimary}
                                                showDropDown={() => setShowDropDownLeaugePrimary(true)}
                                                onDismiss={() => setShowDropDownLeaugePrimary(false)}
                                                value={primaryLeaugeCode}
                                                setValue={setPrimaryLeaugeCode}
                                                list={rubyCode}
                                                inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                                dropDownItemSelectedTextStyle={{ color: 'black' }}
                                            />
                                            <DropDown
                                                style={{ backgroundColor: "#EBEAED" }}
                                                label={"Secondary Code"}
                                                visible={showDropDownLeaugeSecondary}
                                                showDropDown={() => setShowDropDownLeaugeSecondary(true)}
                                                onDismiss={() => setShowDropDownLeaugeSecondary(false)}
                                                value={secondaryLeaugeCode}
                                                setValue={setSecondaryLeaugeCode}
                                                list={rubyCode}
                                                inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                                dropDownItemSelectedTextStyle={{ color: 'black' }}
                                            />
                                        </View>
                                        : null
                                    }
                                    {data.src == "Touch" ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                                            <DropDown
                                                style={{ backgroundColor: "#EBEAED" }}
                                                label={"Primary Code"}
                                                visible={showDropDownTouchPrimary}
                                                showDropDown={() => setShowDropDownTouchPrimary(true)}
                                                onDismiss={() => setShowDropDownTouchPrimary(false)}
                                                value={primaryTouchCode}
                                                setValue={setPrimaryTouchCode}
                                                list={rubyCode}
                                                inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                                dropDownItemSelectedTextStyle={{ color: 'black' }}
                                            />
                                            <DropDown
                                                style={{ backgroundColor: "#EBEAED" }}
                                                label={"Secondary Code"}
                                                visible={showDropDownSecondary}
                                                showDropDown={() => setShowDropDownTouchSecondary(true)}
                                                onDismiss={() => setShowDropDownTouchSecondary(false)}
                                                value={secondaryTouchCode}
                                                setValue={setSecondaryTouchCode}
                                                list={rubyCode}
                                                inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                                dropDownItemSelectedTextStyle={{ color: 'black' }}
                                            />
                                        </View>
                                        : null
                                    }
                                </View> : null}
                            </>)}
                            <Text style={styles.VideoTitle}>Video Resume:</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <TouchableOpacity onPress={() => attackVideo()}>
                                    {!uploadvideo.attackvideo ?
                                        <View style={styles.VideoUploadBox}>
                                            <SvgXml xml={VideoIcon} />
                                        </View>
                                        :
                                        <Video source={uploadvideo.attackvideo}
                                            controls={true}
                                            style={styles.UploadedVideo} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.VideoUploadTitle}>Upload on attack video</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 4 }}>
                                <TouchableOpacity onPress={() => defenceVideo()}>
                                    {!uploadvideo.defencevideo ?
                                        <View style={styles.VideoUploadBox}>
                                            <SvgXml xml={VideoIcon} />
                                        </View>
                                        :
                                        <Video source={uploadvideo.defencevideo}
                                            controls={true}
                                            style={styles.UploadedVideo} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.VideoUploadTitle}>Upload on defence video</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 4, marginBottom: 4 }}>
                                <TouchableOpacity onPress={() => generalVideo()}>
                                    {!uploadvideo.generalvideo ?
                                        <View style={styles.VideoUploadBox}>
                                            <SvgXml xml={VideoIcon} />
                                        </View>
                                        :
                                        <Video source={uploadvideo.generalvideo}
                                            controls={true}
                                            style={styles.UploadedVideo} />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.VideoUploadTitle}>Upload general video</Text>
                            </View>
                            <Text style={styles.textTitle}>Education:</Text>
                            <View style={styles.courseview}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Course Name</Text>}
                                        style={styles.educationinput}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        onChangeText={(value) => setEducation({
                                            ...education,
                                            courseName: value
                                        })}
                                    />
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Institution</Text>}
                                        style={styles.educationinput}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        onChangeText={(value) => setEducation({
                                            ...education,
                                            institutionName: value
                                        })}
                                    />
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Year Completed</Text>}
                                        style={styles.educationinput}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        keyboardType='numeric'
                                        onChangeText={(value) => setEducation({
                                            ...education,
                                            passedYear: value
                                        })}
                                    />
                                </ScrollView>
                            </View>
                            <TouchableOpacity activeOpacity={0.3}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                                    <SvgXml xml={AddIcon} />
                                    <Text style={{ color: '#1D326C', justifyContent: 'center', marginLeft: 5, fontFamily: `${GlobalFont}` }}>Add more</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    label={<Text style={styles.textInputLabel}>Current Team 1</Text>}
                                    style={styles.nameinput}
                                    activeUnderlineColor={"#D3D3D3"}
                                    selectionColor={'#8E8F8F'}
                                    multiline={true}
                                    onChangeText={(item) => { setCurrentTeam1(item) }}
                                />
                                <TextInput
                                    label={<Text style={styles.textInputLabel}>Current Team 2</Text>}
                                    style={styles.nameinput}
                                    activeUnderlineColor={"#D3D3D3"}
                                    selectionColor={'#8E8F8F'}
                                    multiline={true}
                                    onChangeText={(item) => { setCurrentTeam2(item) }}
                                />
                            </View>
                            {/* <DropDown
                                    style={{ backgroundColor: "#EBEAED" }}
                                    label={"Current Team 1"}
                                    visible={showDropDown2}
                                    showDropDown={() => setShowDropDown2(true)}
                                    onDismiss={() => setShowDropDown2(false)}
                                    value={clubname}
                                    setValue={setClubname}
                                    list={supportingTeams}
                                    inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                />
                                <DropDown
                                    label={"Current Team 2"}
                                    visible={showDropDown}
                                    showDropDown={() => setShowDropDown(true)}
                                    onDismiss={() => setShowDropDown(false)}
                                    value={season}
                                    setValue={setSeason}
                                    list={supportingTeams}
                                    inputProps={{ style: { backgroundColor: '#fff', width: responsiveWidth(40) } }}
                                    dropDownItemSelectedTextStyle={{ color: 'black' }}
                                /> */}
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() =>
                                    onNext()
                                }
                            >
                                <View style={styles.btnPrimary}>
                                    <Text style={styles.nextbtn}>
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
    VideoUploadBox: {
        height: 80,
        width: 80,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#8E8F8F',
        paddingHorizontal: 40,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed'
    },
    UploadedVideo: {
        height: 80,
        width: 80,
        // borderWidth: 1.5,
        borderRadius: 10,
        // borderColor: '#8E8F8F',
        paddingHorizontal: 40,
        marginLeft: 5,
        // borderStyle: 'dashed'
    },
    VideoUploadTitle: {
        padding: 34,
        color: '#8E8F8F',
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`

    },
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
        fontFamily: `${GlobalFont}`

    },
    mainview: {
        alignContent: 'center',
        padding: 15
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: `${GlobalFont}`
    },
    VideoTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: `${GlobalFont}`
    },
    rugbyCodeLeauge: {
        flexDirection: 'row',
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        marginTop: 15,
        borderRadius: 8,
        fontWeight: 'bold'
    },
    rugbyCodeTouch: {
        flexDirection: 'row',
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 8,
        fontWeight: 'bold'
    },
    rugbyCode: {
        flexDirection: 'row',
        width: responsiveWidth(84),
        height: responsiveHeight(6),
        backgroundColor: '#4048CC',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 8,
        fontWeight: 'bold'
    },
    rugbyCode2: {
        flexDirection: 'row',
        width: responsiveWidth(84),
        height: responsiveHeight(6),
        // backgroundColor: '#4048CC',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 8,
        fontWeight: 'bold'
    },
    codes: {
        flexDirection: 'row',
        width: responsiveWidth(40),
        height: responsiveHeight(6),
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderColor: 'black',
        // borderWidth: 1,
        // marginBottom: 15,
        borderRadius: 8,
        fontWeight: 'bold'
    },
    RugbyTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        fontFamily: `${GlobalFont}`
    },
    courseview: {
        backgroundColor: '#EBEAED',
        padding: 10,
        borderRadius: 10,
        marginTop: 12,
    },
    nextbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        height: 55,
        fontSize: 15
    },
    nameinput: {
        backgroundColor: 'white',
        width: responsiveWidth(39),
        // ight: 55,
        fontSize: 15
    },
    educationinput: {
        backgroundColor: '#EBEAED',
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
    line: {
        height: 1,
        width: responsiveWidth(40),
        // marginVertical: ,
        backgroundColor: '#a5a5a5'
    },
});

export default AddPlayerInformation;
