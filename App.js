import React from 'react';

import {StyleSheet} from 'react-native';
import Users from "./components/users";
import Home from "./components/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import UserDetails from "./screens/userDetails";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


let BottomTabNavigator = createBottomTabNavigator();


export default function App() {
    return (
        <NavigationContainer style={styles.container}>
            <BottomTabNavigator.Navigator initialRouteName="Users page">
                <BottomTabNavigator.Screen name={'Home'} component={Home}/>
                <BottomTabNavigator.Screen style={styles.forHome}  name={'Users page'} component={Users}/>
                <BottomTabNavigator.Screen name={'user Details'} component={UserDetails}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    forHome:{
marginTop:50
    }
});
        // <BottomTabNavigator.Navigator>
        //      <BottomTabNavigator.Screen name={'users'} component={Users}/>
        //      <BottomTabNavigator.Screen name={'home'} component={Home}/>
        // </BottomTabNavigator.Navigator>
