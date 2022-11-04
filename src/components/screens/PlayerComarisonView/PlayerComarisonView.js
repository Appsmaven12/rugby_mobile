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
import { SvgXml } from 'react-native-svg';
import { BackButton } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { Button, Card, List } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { GlobalFont } from '../../../utils/FontFamily';

const PlayerComparisonView = ({ navigation }) => {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

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
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Player Comparison</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        <View style={styles.whiteview}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {/* <View style={{flexDirection: 'row', width: responsiveWidth(70), justifyContent: 'space-between',  backgroundColor:"red"}}> 
                                    <View>
                                        <Image source={require('../../../assests/images/onborading-image-one.png')} style={{borderRadius: 10, height: responsiveHeight(10), width: responsiveWidth(50), resizeMode: 'contain'}}/>
                                    </View>
                                    <View>
                                        <Image source={require('../../../assests/images/onborading-image-one.png')} style={{borderRadius: 10, height: responsiveHeight(10), width: responsiveWidth(50), resizeMode: 'contain'}}/>
                                    </View>
                                </View> */}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
                                    <Card style={{ width: responsiveWidth(35) }}>
                                        {/* <Card.Cover source={require('../../../assests/images/onborading-image-one.png')} style={{height: responsiveHeight(16)}} /> */}
                                        <Card.Cover source={{ uri: 'https://www.nicepng.com/png/full/182-1827321_rugby-player.png' }} style={{ height: responsiveHeight(16) }} />
                                        <View style={{ padding: 8 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Text style={styles.textStyle}>Paul Ackford</Text>
                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate('AllNavigation', {
                                                        screen: 'AddPlayer'
                                                    })}
                                                >
                                                    <Entypo name="circle-with-minus" size={20} color={'#143980'} />
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={styles.textStyle}>Try hard</Text>
                                        </View>
                                    </Card>
                                    <Card style={{ width: responsiveWidth(35) }}>
                                        <Card.Cover source={require('../../../assests/images/onborading-image-one.png')} style={{ height: responsiveHeight(16) }} />
                                        <View style={{ padding: 8 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Text style={styles.textStyle}>Paul Ackford</Text>
                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate('AllNavigation', {
                                                        screen: 'AddPlayer'
                                                    })}
                                                >
                                                    <Entypo name="circle-with-minus" size={20} color={'#143980'} />
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={styles.textStyle}>Try hard</Text>
                                        </View>
                                    </Card>
                                </View>
                                <List.Section style={{ borderRadius: 10, overflow: 'hidden', backgroundColor: "#EBEAED" }}>
                                    <List.Accordion
                                        style={{ backgroundColor: "#EBEAED", fontFamily: `${GlobalFont}`}}
                                        title="Overview"
                                        onPress={handlePress}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                    </List.Accordion>
                                </List.Section>
                                <List.Section style={{ borderRadius: 10, overflow: 'hidden', backgroundColor: "#EBEAED" }}>
                                    <List.Accordion
                                        style={{ backgroundColor: "#EBEAED", fontFamily: `${GlobalFont}`}}
                                        title="Speed and Fitness"
                                        onPress={handlePress}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                    </List.Accordion>
                                </List.Section>
                                <List.Section style={{ borderRadius: 10, overflow: 'hidden', backgroundColor: "#EBEAED" }}>
                                    <List.Accordion
                                        style={{ backgroundColor: "#EBEAED", fontFamily: `${GlobalFont}`}}
                                        title="Power & Strength"
                                        onPress={handlePress}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                            <Text style={styles.textStyle}>Height</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                            <Text style={styles.textStyle}>170.688 cm</Text>
                                        </View>
                                    </List.Accordion>
                                </List.Section>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </AppBackGroundImage>
    );
};

const styles = StyleSheet.create({
    // textStyle: {
    //     fontFamily: `${GlobalFont}`
    // },
    textInputLabel: {
        color: '#8E8F8F',
        fontWeight: '500'
    },
    mainview: {
        alignContent: 'center',
        paddingHorizontal: 15,
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        height: responsiveHeight(85)
    },
    input: {
        backgroundColor: '#fff',
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
    submitbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
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

export default PlayerComparisonView;
