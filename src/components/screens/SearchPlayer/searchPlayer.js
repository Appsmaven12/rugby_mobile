import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, SearchIcon, SideMenu } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import { Card } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import SearchBar from '../../common/SearchBar';
import { GlobalFont } from '../../../utils/FontFamily';
import { useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const SearchPlayer = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const searchResult = useSelector((state) => state.searchUsers.data)
    console.log("searchResult", searchResult);

    const renderSearchUsers = (item, index) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() =>
                navigation.navigate('AllNavigation', {
                    screen: 'MainProfile',
                    params: { userId: item._id }
                })
            }
            >
                <Card style={{ borderRadius: 10, marginBottom: 10 }}>
                    <View style={{ padding: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Card.Cover style={{ borderRadius: 10, width: '45%', height: responsiveHeight(20) }} source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${item.profileImage}` }} />
                            <View style={{ marginLeft: 10, flexDirection: "column", justifyContent: "space-between" }}>
                                <Text style={{ fontFamily: `${GlobalFont}`, fontWeight: '600' }}>{item.firstName} {''} {item.lastName}</Text>
                                <View style={styles.line}></View>
                                <View style={styles.Text}>
                                    <Text style={styles.details}>Country</Text>
                                    <Text style={styles.detail}>{item?.country}</Text>
                                </View>
                                <View style={styles.Text}>
                                    <Text style={styles.details}>Region</Text>
                                    <Text style={styles.detail}>{item?.region}</Text>
                                </View>
                                <View style={styles.Text}>
                                    <Text style={styles.details}>position</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <FontAwesome name="star" size={12} color={"#FEA100"} style={{ padding: 2 }} />
                                        <Text style={styles.detail}>{item?.position}</Text>
                                    </View>
                                </View>
                                <View style={styles.Text}>
                                    <Text style={styles.details}>Height</Text>
                                    <Text style={styles.detail}>{item?.height}</Text>
                                </View>
                                <View style={styles.Text}>
                                    <Text style={styles.details}>Weight</Text>
                                    <Text style={styles.detail}>{item?.weight}</Text>
                                </View>
                                <View style={styles.Text}>
                                    <Text style={styles.details}>Current Team</Text>
                                    <Text style={styles.detail}>{item?.currentTeamIds?.[0]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <AppBackGroundImage>
                <SafeAreaView>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", width: "96%" }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.toggleDrawer()}
                            style={styles.backbtn}
                        >
                            <SvgXml xml={SideMenu} />
                        </TouchableOpacity>
                        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", fontFamily: `${GlobalFont}` }}>Search Player</Text>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => navigation.navigate('AllNavigation', {
                                screen: 'Notifications'
                            })}>
                            <IonIcon name="notifications-outline" size={30} color={"white"} />
                        </TouchableOpacity>
                    </View>
                    <SearchBar />
                </SafeAreaView>
                <View style={styles.container}>
                    {loading && <Spinner
                        visible={loading}
                        size={'large'}
                    />}
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainview}>
                        {searchResult?.length > 0 ?
                            <FlatList
                                data={searchResult}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    renderSearchUsers(item, index)
                                }
                            /> :
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 60
                            }}>
                                <Text style={{
                                    fontSize: 25,
                                    fontFamily: `${GlobalFont}`,
                                    fontWeight: 'bold',
                                    color: '#FFF'
                                }}>No User Found</Text>
                            </View>
                        }
                    </View>
                </ScrollView>
            </AppBackGroundImage>
        </View>
    );
};

const styles = StyleSheet.create({
    details: {
        fontSize: 13,
        fontFamily: `${GlobalFont}`,
        fontWeight: '600'
    },
    detail: {
        fontSize: 13,
        fontFamily: `${GlobalFont}`,
    },
    searchBar: {
        fontSize: 15,
        margin: 10,
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20
    },
    searchIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        width: "15%",
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10
    },
    mainview: {
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    logoimage: {
        resizeMode: 'contain',
        height: 120
    },
    signupbtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: 1,
        width: responsiveWidth(45),
        backgroundColor: '#a5a5a5'
    },
    Text: {
        flexDirection: "row",
        width: responsiveWidth(45),
        justifyContent: "space-between"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        opacity: 1,
        position: 'absolute',
        zIndex: 1111
    },
});

export default SearchPlayer;
