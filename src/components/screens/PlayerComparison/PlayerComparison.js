import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { SideMenu } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { Avatar, Button } from 'react-native-elements';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { GlobalFont } from '../../../utils/FontFamily';

const PlayerComparison = ({ navigation }) => {
    return (
        <View>
            <AppBackGroundImage>
                <SafeAreaView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15, alignItems: 'center' }}>
                        <View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => navigation.toggleDrawer()}
                            >
                                <SvgXml xml={SideMenu} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>Player Comparison</Text>
                        </View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.mainview}>
                            <View
                                style={styles.whiteview}>
                                <View style={styles.adduserview}>
                                    <View style={{ alignItems: 'center', position: 'relative', overflow: 'visible' }}>
                                        <Avatar
                                            size="xlarge"
                                            rounded
                                            icon={{
                                                name: 'user',
                                                type: 'entypo',
                                                size: 75,
                                                color: 'white',
                                            }}
                                            containerStyle={{ backgroundColor: 'grey' }}
                                        />
                                        <View>
                                            <Button
                                                icon={{
                                                    name: 'circle-with-plus',
                                                    type: 'entypo',
                                                    size: 15,
                                                    color: 'white',
                                                }}
                                                titleStyle={{ fontSize: 12, fontFamily: `${GlobalFont}` }}
                                                title="Add Player"
                                                buttonStyle={{
                                                    backgroundColor: "#152D68",
                                                    borderRadius: 50,
                                                }}
                                                containerStyle={{
                                                    width: 120,
                                                    height: 35,
                                                    bottom: 20,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    opacity: 1
                                                }}
                                                onPress={() => navigation.navigate('AllNavigation', {
                                                    screen: 'AddPlayer'
                                                })}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'center', position: 'relative', overflow: 'visible', marginTop: 40 }}>
                                        <Avatar
                                            size="xlarge"
                                            rounded
                                            icon={{
                                                name: 'user',
                                                type: 'entypo',
                                                size: 75,
                                                color: 'white',
                                            }}
                                            containerStyle={{ backgroundColor: 'grey' }}
                                        />
                                        <View>
                                            <Button
                                                icon={{
                                                    name: 'circle-with-plus',
                                                    type: 'entypo',
                                                    size: 15,
                                                    color: 'white',
                                                }}
                                                titleStyle={{ fontSize: 12, fontFamily: `${GlobalFont}` }}
                                                title="Add Player"
                                                buttonStyle={{
                                                    backgroundColor: "#152D68",
                                                    borderRadius: 50,
                                                }}
                                                containerStyle={{
                                                    width: 120,
                                                    height: 35,
                                                    bottom: 20,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                                onPress={() => navigation.navigate('AllNavigation', {
                                                    screen: 'AddPlayer'
                                                })}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('AllNavigation', {
                                        screen: 'PlayerComparisonView'
                                    })}>
                                    <View style={styles.btnPrimary}>
                                        <Text style={styles.loginbtn}>Next</Text>
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
    loginbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
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
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    secondmainview: {
        alignContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',

    },
    adduserview: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: responsiveHeight(58),
        marginTop: 30
        // backgroundColor: 'red'
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        height: responsiveHeight(78),
        justifyContent: 'space-between'
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    labelLeft: {
        fontWeight: 'bold'
    },
    labelRight: {
        alignSelf: 'flex-end',
        fontWeight: 'bold',
        color: '#B0B1B0'
    },
    row: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 10
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
    },
    btnPrimary: {
        backgroundColor: '#152c69',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backbtn: {
        width: 50,
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    nextbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#a5a5a5',
        marginVertical: 10
    },
});

export default PlayerComparison;
