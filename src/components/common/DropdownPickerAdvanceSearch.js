import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ScrollView
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
const DropDownPickerAdvanceSearch = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(['italy', 'spain', 'barcelona', 'finland']);
    const [items, setItems] = useState([
      {label: 'Spain', value: 'spain'},
      {label: 'Madrid', value: 'madrid', parent: 'spain'},
      {label: 'Barcelona', value: 'barcelona', parent: 'spain'},
  
      {label: 'Italy', value: 'italy'},
      {label: 'Rome', value: 'rome', parent: 'italy'},
  
      {label: 'Finland', value: 'finland'}
    ]);
  
    return (
      <View style={{
        backgroundColor: '#171717',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        flex:1
      }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
            mode="BADGE"
        />
      </View>
    );
}


const styles = StyleSheet.create({
   
    searchBar: {
        fontSize: 15,
        margin: 10,
        width: '80%',
        height: 50,
        borderRadius: 10,
        padding: 20,
        backgroundColor:"white"
    },
    searchIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },
   
});

export default DropDownPickerAdvanceSearch;
