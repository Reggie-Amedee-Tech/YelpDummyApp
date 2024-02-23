import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const SearchBar = ({searchTerm, onSearchTermChange, onTermSubmit}) => {

    return <View style={style.searchView}>
        <FontAwesome5 name="search" style={style.iconStyle}/>
        <TextInput placeholder="Search" 
        style={style.textStyle}
        value={searchTerm}
        onChangeText={newTerm => onSearchTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
        ></TextInput>
    </View>
}

const style = StyleSheet.create({
    searchView: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
    },
    textStyle: {
    flex: 1,
    fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;