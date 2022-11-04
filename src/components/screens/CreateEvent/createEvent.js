import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import SelectableChips from 'react-native-chip/SelectableChips';
import { TextInput } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { BackButton, MediaUpload } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { GlobalFont } from '../../../utils/FontFamily';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { UploadImage, UploadVideos } from '../../../redux/Actions/playerSignUpService';
import { createMainEventsService } from '../../../redux/Actions/createEventService';
import * as ImagePicker from "react-native-image-picker"
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateEvent = ({ navigation }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [time, setTime] = useState()
    const [eventLocation, setEventLocation] = useState("")

    const [isImage, setIsImage] = useState('')
    const [postMedia, setPostMedia] = useState()

    const [date, setDate] = useState(new Date())

    const [dateEvent, setDateEvent] = useState(new Date())
    const [dateTimeEvent, setDateTimeEvent] = useState(new Date())
    const [modeEvent, setModeEvent] = useState('year')
    const [modeTimeEvent, setModeTimeEvent] = useState('time')
    const [showEvent, setShowEvent] = useState(false)
    const [showTimeEvent, setShowTimeEvent] = useState(false)
    const [textEvent, setTextEvent] = useState('')
    const [categories, setCategorIes] = useState([])

    // const onChange = (event, selectedDate) => {
    //     const currentDateEvent = selectedDate || date;
    //     setShow(false);
    //     setDate(currentDateEvent)
    //     let tempDate = new Date(currentDateEvent);
    //     let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    //     setText(fDate)
    // }

    // const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode)
    // }

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

    const _onSubmit = async () => {
        let eventObj = {
            title: title,
            time: time,
            date: textEvent,
            image: imageResponse ? imageResponse : videoResponse,
            description: description,
            location: eventLocation,
            categories: categories
        }
        let result = await dispatch(createMainEventsService(eventObj))
        if (result?.status?.statusCode === 200) {
            navigation.goBack()
        }
    }
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
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Create Event</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View style={styles.whiteview}>
                            <ScrollView showsVerticalScrollIndicator={false}>
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
                                {/* <View style={{ alignItems: 'center' }}>
                                    <View style={{ height: 80, width: 80, borderWidth: 1.5, borderRadius: 10, borderColor: '#8E8F8F', paddingHorizontal: 40, borderStyle: 'dashed' }}>
                                    </View>
                                    <Text style={{ padding: 20, color: '#8E8F8F', fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Upload Image and Video</Text>
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
                                />
                                <TextInput
                                    label={<Text style={styles.textInputLabel}>Description</Text>}
                                    style={styles.input}
                                    activeUnderlineColor={"#D3D3D3"}
                                    selectionColor={'#8E8F8F'}
                                    multiline={true}
                                />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Time</Text>}
                                        style={styles.nameinput}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/time.png')} />}
                                    />
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Date</Text>}
                                        style={styles.nameinput}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/calendar.png')} />}
                                    />
                                </View>
                                <TextInput
                                    label={<Text style={styles.textInputLabel}>Location</Text>}
                                    style={styles.input}
                                    activeUnderlineColor={"#D3D3D3"}
                                    selectionColor={'#8E8F8F'}
                                    right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/location.png')} />}
                                /> */}

                            </ScrollView>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() =>
                                    _onSubmit()
                                }
                            >
                                <View style={styles.btnPrimary}>
                                    <Text style={styles.submitbtn}>
                                        SUBMIT
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </AppBackGroundImage>
    );
};

const styles = StyleSheet.create({
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
    Specialities: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#8A8A8B',
        paddingVertical: 10,
        fontFamily: `${GlobalFont}`
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
        padding: 15,
        borderRadius: 10,
        height: responsiveHeight(85),
    },
    input: {
        backgroundColor: '#fff',
        flex: 1,
        fontSize: 15
    },
    nameinput: {
        backgroundColor: '#fff',
        fontSize: 15,
        width: responsiveWidth(39)
    },
    btnPrimary: {
        backgroundColor: '#152c69',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    submitbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`
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
});

export default CreateEvent;
