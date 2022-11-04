import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
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

const CoachReferences = ({ navigation }) => {

    return (
        <AppBackGroundImage>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center' }}>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}
                        >
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Create Post</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View style={styles.whiteview}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ paddingVertical: 5 }}>
                                    <Text style={styles.textTitle}>Reference 1</Text>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Email</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/email.png')} />}
                                    />
                                </View>
                                <View style={{ paddingVertical: 5 }}>
                                    <Text style={styles.textTitle}>Reference 2</Text>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Email</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/email.png')} />}
                                    />
                                </View>
                                <View style={{ paddingVertical: 5 }}>
                                    <Text style={styles.textTitle}>Reference 3</Text>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Email</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/email.png')} />}
                                    />
                                </View>
                                <View style={{ paddingVertical: 5 }}>
                                    <Text style={styles.textTitle}>Reference 4</Text>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Email</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/email.png')} />}
                                    />
                                </View>
                                <View style={{ paddingVertical: 5 }}>
                                    <Text style={styles.textTitle}>Reference 5</Text>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Email</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        right={<TextInput.Icon size={15} style={{ marginTop: 15 }} name={require('../../../assests/images/email.png')} />}
                                    />
                                </View>
                                <View style={{ paddingVertical: 5 }}>
                                    <TextInput
                                        label={<Text style={styles.textInputLabel}>Enter a Message</Text>}
                                        style={styles.input}
                                        activeUnderlineColor={"#D3D3D3"}
                                        selectionColor={'#8E8F8F'}
                                        multiline={true}
                                    />
                                </View>
                            </ScrollView>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('PlayerStats')}>
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
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: `${GlobalFont}`
    },
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500',
        fontFamily: `${GlobalFont}`
    },
    submitbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: `${GlobalFont}`
    },
    mainview: {
        alignContent: 'center',
        padding: 20
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
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
        position: 'absolute',
        top: -10
    },
});

export default CoachReferences;
