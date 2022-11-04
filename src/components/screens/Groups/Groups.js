import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BackButton, PhoneCall } from '../../../assests/svgfiles/svgFiles';
import AppBackGroundImage from '../../common/BackgroundImage';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { GlobalFont } from '../../../utils/FontFamily';
import { useDispatch, useSelector } from 'react-redux';
import { getGroupList } from '../../../redux/Actions/getGroupListService';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const Groups = ({ navigation }) => {
    const [loading, setLoading] = useState(false)

    const { groupList } = useSelector((state) => {
        return {
            groupList: state.getGroup.data,
        }
    })
    console.log("groupList", groupList);
    const dispatch = useDispatch()

    useEffect(() => {
        async function groupData() {
            console.log("demodata")
            setLoading(true)
            const getGroupResponse = await dispatch(getGroupList())
            if (getGroupResponse) {
                setLoading(false)
            }
        }
        groupData()
    }, [])

    const _renderGroup = (item, index) => {
        console.log("item-groupList", item);
        return (
            <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => navigation.navigate('RugbyGroup', { groupId: item._id })}>
                <View style={styles.mainview}>
                    <View style={styles.row}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {item?.image ?
                                <View style={styles.imageWrap}>
                                    <Image
                                        source={{ uri: 'https://d2tlu2bncpo1ch.cloudfront.net/' + `${item?.image}` }}
                                        style={{ height: 82, width: 82, borderRadius: 10 }}
                                    />
                                </View>
                                :
                                <View style={styles.imageWrap}>
                                    <Ionicons name="md-notifications" size={40} color="#5B5D61" />
                                </View>
                            }
                            <View style={{ height: responsiveHeight(5), justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', width: responsiveWidth(67), justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={styles.labelLeft}>{item.name}</Text>
                                    <TouchableOpacity style={{ width: responsiveWidth(15), height: responsiveHeight(3), backgroundColor: '#DADBDA', justifyContent: 'center', alignItems: 'center', borderRadius: 6 }}>
                                        <Text style={{ fontSize: responsiveFontSize(1.5), fontWeight: 'bold' }}>Coach</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontSize: responsiveFontSize(1.5), marginLeft: 10, fontFamily: `${GlobalFont}` }}>{item?.memberUserIds?.length} members</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
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
                <SafeAreaView>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 15,
                        }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack()}>
                            <SvgXml xml={BackButton} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: `${GlobalFont}` }}>
                            Groups
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('AllNavigation', {
                                    screen: 'CreateGroup',
                                })
                            }>
                            <Entypo name="circle-with-plus" size={22} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <FlatList
                    data={groupList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        _renderGroup(item, index)
                    }
                    keyExtractor={item => item}
                    onEndReachedThreshold={0.9}
                />
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
        zIndex: 1111,
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
        paddingBottom: 15
    },
    whiteview: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
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
    row: {
        // flex: 1,
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    imageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#DFE1EB',
        borderRadius: 10,
        width: responsiveWidth(20),
        height: responsiveHeight(10)
    },
    inputWrap: {
        flex: 1,
        borderColor: "#cccccc",
        marginVertical: 8
    },
    labelLeft: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontFamily: `${GlobalFont}`
    },
});

export default Groups;