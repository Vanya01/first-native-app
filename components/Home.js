
import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';

 const Home = () =>{
    return (
        <View>
             <Text style={styles.mainHome}>
               Welcome home !
              </Text>
        </View>

    )
}



const styles = StyleSheet.create({
    mainHome:{
        textAlign:'center',
        fontWeight:'bold',
        paddingTop:50,
        color:'royalblue'
    }
})

export default Home