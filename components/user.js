import React from "react";
import {StyleSheet} from "react-native";
import {View,Button,Text} from "react-native";


const User=(props)=>{

    let {item,nav:{navigate}} = props

    let onPress =()=>{
        navigate('user Details',{data:item})
    }


    return <View style={[styles.userBox]}>
        <Text style={styles.usersWrap} >{item.name} and smth</Text>
        <Button onPress={onPress} title={'user details'}/>
    </View>
}
export default User

let styles = StyleSheet.create({
    userBox:{
        backgroundColor:'cyan',
        justifyContent:'center',
        textAlign:'center',
    },
    usersWrap:{
       fontWeight:'bold',
        color:'crimson',
        textAlign: 'center',
        paddingTop:20,
        paddingBottom:20
    },

})