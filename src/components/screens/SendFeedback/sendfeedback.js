import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { TextInput } from 'react-native-paper';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import { sendFeedBack } from '../../../redux/Actions/sendFeedBackService';
import { GlobalFont } from '../../../utils/FontFamily';
import AppBackGroundImage from '../../common/BackgroundImage';

const SendFeedback = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState('')

    const dispatch = useDispatch()
    const _onSubmit = async () => {
        setLoading(true)
        let obj = {
            text: text,
        }
        if (text === '') {
            Alert.alert("Please fill required field")
        } else {
            let result = await dispatch(sendFeedBack(obj))
            console.log("result-group", result);
            if (result?.status?.statusCode == 200) {
                setLoading(false)
                navigation.goBack()
            } else if (result?.status?.statusCode != 200) {
                setLoading(false)
                Alert.alert("Something Went Wrong")
            }
        }
    }

    return (
        <View>
            <View style={styles.container}>
                {loading && <Spinner
                    visible={loading}
                    size={'large'}
                />}
            </View>
            <AppBackGroundImage>
                <SafeAreaView >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.goBack()}
                            >
                                <SvgXml xml={BackButton} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Send Feedback</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <TextInput
                                    label={<Text style={styles.textInputLabel}>Message</Text>}
                                    style={styles.input}
                                    activeUnderlineColor={"#D3D3D3"}
                                    selectionColor={'#8E8F8F'}
                                    value={text}
                                    onChangeText={(text) => setText(text)}
                                    multiline={true}
                                />
                                {/* <TextInput
                                    label={<Text style={styles.textInputLabel}>Message</Text>}
                                    style={styles.input}
                                    activeUnderlineColor={"#D3D3D3"}
                                    selectionColor={'#8E8F8F'}
                                    multiline={true}
                                    value={text}
                                    onChangeText={(text) => setText(text)}
                                /> */}
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => _onSubmit()}>
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
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 7
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
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

export default SendFeedback;
