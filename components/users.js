import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import {View,Button,TouchableOpacity,Text} from "react-native";
import getUsers from "../services/services";
import User from "./user";



const Users=(props)=>{

    let {navigation} = props
    let [users,setUsers] = useState()


    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);


    return (
        <View>
      <FlatList
          style={styles.usersWrap}
          data={users}
          keyExtractor={item => ''+ item.id}
          renderItem={({item})=> <User item={item} nav={navigation}/>}
        />
    </View>)
}

export default Users

let styles = StyleSheet.create({
     usersWrap:{
     marginTop:50,
      maxWidth:300,
       left:50,
         borderRadius:10

     }
})