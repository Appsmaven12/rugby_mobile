import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import Video from 'react-native-video';
import { TextInput } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton, MediaUpload } from '../../../assests/svgfiles/svgFiles';
import { GlobalFont } from '../../../utils/FontFamily';
import AppBackGroundImage from '../../common/BackgroundImage';
import DropDown from "react-native-paper-dropdown";
import CheckBox from '@react-native-community/checkbox';
import SelectableChips from 'react-native-chip/SelectableChips';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from "react-native-image-picker"
import { UploadImage, UploadVideos } from '../../../redux/Actions/playerSignUpService';
import { useDispatch, useSelector } from 'react-redux';
import { createEventsService, createOpportunityService } from '../../../redux/Actions/opportunitiesandEventsService';
import moment from "moment"

const CreateOpportunitiesandEvents = ({ navigation, route }) => {
    const { perticularGroupId } = route.params
    const [showDropDown2, setShowDropDown2] = useState(false);
    const [opportunityType, setOpportunityType] = useState("")
    const [opportunityfor, setOpportunityFor] = useState("")
    const [aboutOpportunity, setAboutOpportunity] = useState("")
    const [locationOpportunity, setLocationOpportunity] = useState("")
    const [isTeam, setIsTeam] = useState(false)
    const [isClub, setIsClub] = useState(false)

    console.log("perticularGroupId", perticularGroupId);

    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [time, setTime] = useState()
    const [eventDate, setEventDate] = useState("")
    const [eventLocation, setEventLocation] = useState("")

    const [createOpportunity, setCreateOpportunity] = useState(true);
    const [createEvent, setCreateEvent] = useState(false);

    const [isImage, setIsImage] = useState('')
    const [postMedia, setPostMedia] = useState()
    const [type, setType] = useState("")
    const [isTeamtext, setIsTeamtext] = useState("")
    const [isclubText, setIsclubText] = useState("")

    const opportunity = [
        {
            label: "player",
            value: "player",
        },
        {
            label: "coach",
            value: "coach",
        },
        {
            label: "fan",
            value: "fan",
        },
    ]

    const [agree, setAgree] = useState(false);
    const [agree1, setAgree1] = useState(false);
    const [agree2, setAgree2] = useState(false);

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('year')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')

    const [dateEvent, setDateEvent] = useState(new Date())
    const [dateTimeEvent, setDateTimeEvent] = useState(new Date())
    const [modeEvent, setModeEvent] = useState('year')
    const [modeTimeEvent, setModeTimeEvent] = useState('time')
    const [showEvent, setShowEvent] = useState(false)
    const [showTimeEvent, setShowTimeEvent] = useState(false)
    const [textEvent, setTextEvent] = useState('')
    const [categories, setCategorIes] = useState([])

    const onChange = (event, selectedDate) => {
        const currentDateEvent = selectedDate || date;
        setShow(false);
        setDate(currentDateEvent)
        let tempDate = new Date(currentDateEvent);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }

    const onChangeEvent = (event, selectedDate) => {
        const currentDateEvent = selectedDate || date;
        setShowEvent(false);
        setDateEvent(currentDateEvent)
        let tempDate = new Date(currentDateEvent);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setTextEvent(fDate)
    }

    const showModeEvent = (currentMode) => {
        setShowEvent(true);
        setModeEvent(currentMode)
    }

    const onChangeTimeEvent = (event, selectedDate) => {
        const currentDateEvent = selectedDate || date;
        setShowTimeEvent(false);
        setDateTimeEvent(currentDateEvent)
        let tempDate = new Date(currentDateEvent);
        let fTime = moment(tempDate).format("hh:mm A")
        setTime(fTime)
    }

    const showModeTimeEvent = (currentMode) => {
        setShowTimeEvent(true);
        setModeTimeEvent(currentMode)
    }

    const dispatch = useDispatch()
    const options = {
        mediaType: 'all',
        quality: 1,
        includeBase64: false,
    }

    const uploadImage = () => {
        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log("User cancelled!");
            } else if (response.error) {
                console.log("Error", res.error);
            } else {
                if (response.assets[0].type === "video/mp4") {
                    setIsImage("video")
                    const source = { uri: response.assets[0].uri };
                    setPostMedia(source)
                    dispatch(UploadVideos({ document: response.assets[0] }))
                } else {
                    setIsImage("image")
                    setPostMedia(response.assets[0].uri)
                    dispatch(UploadImage({ document: response.assets[0] }))
                }
            }
        })
    }

    const { imageResponse, videoResponse } = useSelector((state) => {
        return {
            imageResponse: state.playersignUp?.image?.media,
            videoResponse: state.playersignUp?.Video?.media
        }
    })
    const _onSubmit = async () => {
        if (createOpportunity) {
            let obj = {
                type: type,
                forType: opportunityfor,
                isTeamOrClub: isTeamtext ? isTeamtext : isclubText,
                about: aboutOpportunity,
                location: locationOpportunity,
                groupId: perticularGroupId
            }
            let result = await dispatch(createOpportunityService(obj))
            console.log("result-1", result);
            if (result?.status?.statusCode === 200) {
                navigation.navigate('Groups')
            }
        } else {
            let eventObj = {
                title: title,
                time: time,
                date: textEvent,
                image: imageResponse ? imageResponse : videoResponse,
                description: description,
                groupId: perticularGroupId,
                location: eventLocation,
                categories: categories
            }
            let result = await dispatch(createEventsService(eventObj))
            if (result?.status?.statusCode === 200) {
                navigation.navigate('Groups')
            }
        }
    }
    const multi = (chips) => {
        const specialitiesDataids = ["Game", "Training", "Fundraising", "Social", "Clinic", "Trials"].filter((item) => {
            if (chips.includes(item)) {
                return item
            }
        }).map(itm => itm)
        console.log(specialitiesDataids, "demodata")
        // setSpecialties(specialitiesDataids)
        setCategorIes(specialitiesDataids)
    }
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
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>{createOpportunity ? 'Create Opportunities' : 'Create Events'}</Text>
                        </View>
                    </View>
                    <View style={styles.mainview}>
                        <View style={styles.whiteview}>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 20, marginBottom: 10 }}>
                                    <CheckBox
                                        boxType="square"
                                        style={{ width: 18, height: 18 }}
                                        tintColors={{ true: '#000' }}
                                        onTintColor="#000"
                                        onFillColor="#000"
                                        onCheckColor="#fff"
                                        value={createOpportunity}
                                        onValueChange={(value) => {
                                            setCreateOpportunity(value)
                                            setCreateEvent(!value)
                                        }}
                                    />
                                    <Text style={{ textAlign: 'center', fontSize: 13, fontFamily: `${GlobalFont}`, fontWeight: '600' }}>Create Opportunity</Text>
                                    <CheckBox
                                        boxType="square"
                                        style={{ width: 18, height: 18 }}
                                        tintColors={{ true: '#000' }}
                                        onTintColor="#000"
                                        onFillColor="#000"
                                        onCheckColor="#fff"
                                        value={createEvent}
                                        onValueChange={(value) => {
                                            setCreateOpportunity(!value)
                                            setCreateEvent(value)
                                        }}
                                    />
                                    <Text style={{ textAlign: 'center', fontFamily: `${GlobalFont}`, fontWeight: '600' }}>Create Events</Text>
                                </View>
                                <ScrollView showsVerticalScrollIndicator={false} >
                                    {createOpportunity ?
                                        <View>
                                            <Text style={{ fontSize: 14, fontFamily: `${GlobalFont}`, color: 'grey', marginBottom: 16, marginTop: 10, fontWeight: 'bold' }}>Type of opportunity</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 20 }}>
                                                <CheckBox
                                                    boxType="square"
                                                    style={{ width: 18, height: 18 }}
                                                    tintColors={{ true: '#000' }}
                                                    onTintColor="#000"
                                                    onFillColor="#000"
                                                    onCheckColor="#fff"
                                                    value={agree}
                                                    disabled={agree1 || agree2 ? true : false}
                                                    onValueChange={(value) => {
                                                        setAgree(!agree)
                                                        setType("Temp")
                                                    }}
                                                />
                                                <Text style={{ textAlign: 'center', fontSize: 13, fontFamily: `${GlobalFont}`, fontWeight: '600' }}>Temp</Text>
                                                <CheckBox
                                                    boxType="square"
                                                    style={{ width: 18, height: 18 }}
                                                    tintColors={{ true: '#000' }}
                                                    onTintColor="#000"
                                                    onFillColor="#000"
                                                    onCheckColor="#fff"
                                                    value={agree1}
                                                    disabled={agree || agree2 ? true : false}
                                                    onValueChange={(value) => {
                                                        setAgree1(!agree1)
                                                        setType("Permanent")
                                                    }}
                                                />
                                                <Text style={{ textAlign: 'center', fontFamily: `${GlobalFont}`, fontWeight: '600' }}>Permanent</Text>
                                                <CheckBox
                                                    boxType="square"
                                                    style={{ width: 18, height: 18 }}
                                                    tintColors={{ true: '#000' }}
                                                    onTintColor="#000"
                                                    onFillColor="#000"
                                                    onCheckColor="#fff"
                                                    value={agree2}
                                                    disabled={agree || agree1 ? true : false}
                                                    onValueChange={(value) => {
                                                        setAgree2(!agree2)
                                                        setType("Casual")
                                                    }}
                                                />
                                                <Text style={{ textAlign: 'center', fontFamily: `${GlobalFont}`, fontWeight: '600' }}>Casual</Text>
                                            </View>
                                            <DropDown
                                                style={{ backgroundColor: "#EBEAED" }}
                                                label={"Who is the opportunity for"}
                                                visible={showDropDown2}
                                                showDropDown={() => setShowDropDown2(true)}
                                                onDismiss={() => setShowDropDown2(false)}
                                                value={opportunityfor}
                                                setValue={setOpportunityFor}
                                                list={opportunity}
                                                inputProps={{ style: { backgroundColor: '#fff' } }}
                                                dropDownItemSelectedTextStyle={{ color: 'black' }}
                                            />
                                            <TextInput
                                                label={<Text style={styles.textInputLabel}>About the opportunity (500 words max)</Text>}
                                                style={styles.input}
                                                activeUnderlineColor={"#D3D3D3"}
                                                selectionColor={'#8E8F8F'}
                                                value={aboutOpportunity}
                                                onChangeText={(aboutOpportunity) => { setAboutOpportunity(aboutOpportunity) }}
                                                multiline
                                            />
                                            <TextInput
                                                label={<Text style={styles.textInputLabel}>Location</Text>}
                                                style={styles.input}
                                                activeUnderlineColor={"#D3D3D3"}
                                                selectionColor={'#8E8F8F'}
                                                value={locationOpportunity}
                                                onChangeText={(locationOpportunity) => { setLocationOpportunity(locationOpportunity) }}
                                                right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/location.png')} />}
                                            />
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 20, marginTop: 10 }}>
                                                <CheckBox
                                                    boxType="square"
                                                    style={{ width: 18, height: 18 }}
                                                    tintColors={{ true: '#000' }}
                                                    onTintColor="#000"
                                                    onFillColor="#000"
                                                    onCheckColor="#fff"
                                                    value={isTeam}
                                                    onValueChange={(value) => {
                                                        setIsTeam(value)
                                                        setIsClub(!value)
                                                        setIsTeamtext("Team")

                                                    }}
                                                />
                                                <Text style={{ textAlign: 'center', fontSize: 13, fontFamily: `${GlobalFont}`, fontWeight: '600' }}>Team</Text>
                                                <CheckBox
                                                    boxType="square"
                                                    style={{ width: 18, height: 18 }}
                                                    tintColors={{ true: '#000' }}
                                                    onTintColor="#000"
                                                    onFillColor="#000"
                                                    onCheckColor="#fff"
                                                    value={isClub}
                                                    disabled={agree || agree2 ? true : false}
                                                    onValueChange={(value) => {
                                                        setIsClub(value)
                                                        setIsTeam(!value)
                                                        setIsclubText("Club")
                                                    }}
                                                />
                                                <Text style={{ textAlign: 'center', fontFamily: `${GlobalFont}`, fontWeight: '600' }}>Club</Text>
                                            </View>
                                            <TextInput
                                                label={<Text style={styles.textInputLabel}>Cutoff date (when the listing expires)</Text>}
                                                style={styles.input}
                                                value={text}
                                                onChangeText={text => setText(text.replace(/[^0-9]/g, ''))}
                                                activeUnderlineColor={"#D3D3D3"}
                                                selectionColor={'#8E8F8F'}
                                                right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/calendar.png')} onPress={() => showMode('date')} />}
                                            />
                                            {show && (
                                                <DateTimePicker
                                                    testID='dateTimePicker'
                                                    value={date}
                                                    mode={mode}
                                                    display='default'
                                                    onChange={onChange}
                                                />)}
                                        </View>
                                        :
                                        <View>
                                            <View style={{ alignItems: 'center', marginTop: 25 }}>
                                                <TouchableOpacity onPress={() => uploadImage()}>
                                                    {
                                                        !postMedia ?
                                                            <View style={styles.MediaUpload}>
                                                                <SvgXml xml={MediaUpload} />
                                                            </View>
                                                            :
                                                            <View style={styles.UploadedMedia}>
                                                                {isImage === "video" ? <Video source={postMedia}
                                                                    controls={true}
                                                                    style={{ height: 82, width: 82, borderRadius: 10 }} /> :
                                                                    <Image
                                                                        source={{ uri: postMedia }}
                                                                        style={{ height: 82, width: 82, borderRadius: 10 }}
                                                                    />}
                                                            </View>
                                                    }
                                                </TouchableOpacity>
                                                <Text style={{ padding: 34, color: '#8E8F8F', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Upload image or video</Text>
                                            </View>
                                            <Text style={styles.Specialities}>Select Category</Text>
                                            <SelectableChips initialChips={["Game", "Training", "Fundraising", "Social", "Clinic", "Trials"]}
                                                onChangeChips={(chips) => multi(chips)}
                                                alertRequired={false}
                                                chipStyleSelected={{ backgroundColor: '#142C68', fontSize: 12, justifyContent: 'center', fontWeight: 'bold' }}
                                                valueStyle={{ color: '#142C68', fontSize: 12, justifyContent: 'center', fontWeight: 'bold' }}
                                                chipStyle={{ borderColor: '#142C68' }}
                                                valueStyleSelected={{ color: '#fff' }}
                                            />
                                            <TextInput
                                                label={<Text style={styles.textInputLabel}>Title</Text>}
                                                style={styles.input}
                                                activeUnderlineColor={"#D3D3D3"}
                                                selectionColor={'#8E8F8F'}
                                                value={title}
                                                onChangeText={(title) => { setTitle(title) }}
                                            />
                                            <TextInput
                                                label={<Text style={styles.textInputLabel}>Description</Text>}
                                                style={styles.input}
                                                activeUnderlineColor={"#D3D3D3"}
                                                selectionColor={'#8E8F8F'}
                                                value={description}
                                                onChangeText={(description) => { setDescription(description) }}
                                            />
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <View>
                                                    <TextInput
                                                        label={<Text style={styles.textInputLabel}>Time</Text>}
                                                        style={styles.nameinput}
                                                        activeUnderlineColor={"#D3D3D3"}
                                                        selectionColor={'#8E8F8F'}
                                                        value={time}
                                                        onChangeText={time => setTime(time)}
                                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/time.png')} onPress={() => showModeTimeEvent('time')} />}
                                                    />
                                                    {showTimeEvent && (
                                                        <DateTimePicker
                                                            testID='dateTimePicker'
                                                            value={dateTimeEvent}
                                                            mode={modeTimeEvent}
                                                            display='default'
                                                            onChange={onChangeTimeEvent}
                                                        />)}
                                                </View>
                                                <View>
                                                    <TextInput
                                                        label={<Text style={styles.textInputLabel}>Date</Text>}
                                                        style={styles.nameinput}
                                                        value={textEvent}
                                                        onChangeText={textEvent => setTextEvent(textEvent.replace(/[^0-9]/g, ''))}
                                                        activeUnderlineColor={"#D3D3D3"}
                                                        selectionColor={'#8E8F8F'}
                                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/calendar.png')} onPress={() => showModeEvent('date')} />}
                                                    />
                                                    {showEvent && (
                                                        <DateTimePicker
                                                            testID='dateTimePicker'
                                                            value={dateEvent}
                                                            mode={modeEvent}
                                                            display='default'
                                                            onChange={onChangeEvent}
                                                        />)}
                                                </View>
                                            </View>
                                            <TextInput
                                                label={<Text style={styles.textInputLabel}>Location</Text>}
                                                style={styles.input}
                                                activeUnderlineColor={"#D3D3D3"}
                                                selectionColor={'#8E8F8F'}
                                                value={eventLocation}
                                                onChangeText={(eventLocation) => { setEventLocation(eventLocation) }}
                                                right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/location.png')} />}
                                            />
                                        </View>
                                    }
                                </ScrollView>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() =>
                                    _onSubmit()
                                }
                            >
                                <View style={styles.btnPrimary}>
                                    <Text style={styles.nextbtn}>
                                        SUBMIT
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    Specialities: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8A8A8B',
        paddingVertical: 10,
        fontFamily: `${GlobalFont}`
    },
    nameinput: {
        backgroundColor: 'white',
        width: responsiveWidth(39),
        fontSize: 15
    },
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
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
        marginBottom: 10
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
    MediaUpload: {
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
    UploadedMedia: {
        height: 80,
        width: 80,
        borderRadius: 10,
        paddingHorizontal: 40,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CreateOpportunitiesandEvents;
