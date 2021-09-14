import React from 'react';
import {StyleSheet} from 'react-native';
import Users from "./components/Users";
import Home from "./components/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import UserDetails from "./screens/UserDetails";


let StackNavigator = createStackNavigator();

export default function App() {
    return (


        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName="Users page">
                <StackNavigator.Screen name={'Home'} component={Home}/>
                <StackNavigator.Screen name={'Users page'} component={Users}/>
                <StackNavigator.Screen name={'user Details'} component={UserDetails}/>
            </StackNavigator.Navigator>
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
});
        // <BottomTabNavigator.Navigator>
        //      <BottomTabNavigator.Screen name={'users'} component={Users}/>
        //      <BottomTabNavigator.Screen name={'home'} component={Home}/>
        // </BottomTabNavigator.Navigator>
