import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import {View,Button,TouchableOpacity,Text} from "react-native";
import getUsers from "../services/services";
import User from "./user";


const Users=()=>{

    let [users,setUsers] = useState()


    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[])

    return (<View style={[styles.mainBox]}>

      <FlatList
          data={users}
          keyExtractor={item => ''+ item.id}
          renderItem={({item})=> {
        return    <User item={item} />
      }}
        />

    </View>)
}

export default Users
let styles = StyleSheet.create({

})