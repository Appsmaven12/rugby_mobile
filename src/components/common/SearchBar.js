import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert
} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { SvgXml } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { SearchIcon } from '../../assests/svgfiles/svgFiles';
import { searchUser } from '../../redux/Actions/searchPlayerService';

const SearchBar = ({ navigation }) => {
    const [searchText, setSearchText] = useState('')

    const dispatch = useDispatch()

    const _searchUser = async () => {
        let result = await dispatch(searchUser({ searchText: searchText }))
        console.log("_searchUser", result);
        if (result.status === 200 && searchText !== '') {
            navigation.navigate('SearchPlayer')
            setSearchText('')
        }
        if(searchText == "") {
            Alert.alert("Please Enter Something")
        }
    }
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: "space-between",
            width: responsiveWidth(94),
            paddingLeft: 5
        }}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Player..."
                value={searchText}
                onChangeText={(searchText) => setSearchText(searchText)}
            />
            <View style={{ width: responsiveWidth(15) }}>
                <TouchableOpacity activeOpacity={0.8} style={styles.searchIcon} onPress={() => _searchUser()}
                >
                    <SvgXml xml={SearchIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    searchBar: {
        fontSize: 15,
        margin: 10,
        width: '80%',
        height: 50,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "white"
    },
    searchIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 12
    },

});

export default SearchBar;
