import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import {View,Button,TouchableOpacity,Text} from "react-native";


const User=({item})=>{

    return (<View style={[styles.userBox,styles.margins]}>

        <Text> <p>{item.name}</p></Text>

    </View>)
}
export default User

let styles = StyleSheet.create({
    userBox:{
        backgroundColor:'cyan',
        justifyContent:'center',
        textAlign:'center',
    },
    margins:{
        margin:10

    },

})