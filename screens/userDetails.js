import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from "react-native";


const UserDetails = (props) =>{
    let{route:{params:{data}},navigation} = props

    return(
        <View>
            <Text style={style.detailWrap}>
              {data.name} - {data.id} - {data.email}
            </Text>
        </View>
    )

}


const style = StyleSheet.create({
    detailWrap:{
        textAlign:'center',
        fontWeight:'bold',
        marginTop:50,
        color:'royalblue'
    }
})

export default UserDetails