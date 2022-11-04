import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Text,
    ScrollView, 
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { GlobalFont } from '../../../utils/FontFamily';

const ForgotPassword = ({ navigation }) => {
    return (
        <View>
            <AppBackGroundImage>
                <SafeAreaView>
                    <View style={styles.backbtn}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <View style={{ alignItems: 'center' }}>
                    <SafeAreaView>
                        <Image
                            source={require('../../../assests/images/logo.png')}
                            style={styles.logoimage}
                        />
                    </SafeAreaView>
                </View>
                <View style={styles.mainview}>
                    <View
                        style={styles.whiteview}>
                        <ScrollView showsVerticalScrollIndicator={false}
                            scrollEnabled={false}
                        >
                            <Text style={styles.textTitle}>Forgot Password</Text>
                            <View style={{ marginTop: 10 }}>
                                <View>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Email</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/email.png')} />}
                                    />
                                </View>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('ChangePassword')}>
                                <View style={styles.btnPrimary}>
                                    <Text style={styles.submitbtn}>
                                        SUBMIT
                                    </Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
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
    mainview: {
        alignContent: 'center',
        padding: 20
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`
    },
    logoimage: {
        resizeMode: 'contain',
        height: 120
    },
    submitbtn: {
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
    },
});

export default ForgotPassword;
