import React from "react";
import { StyleSheet, Text, View, TabBarIOS } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SignIn, CreateAccount, Search, Home, Details, Search2, Profile } from './Screen';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SeacrheStack = createStackNavigator();
const ProfileStact = createStackNavigator();

const HomeStactScreen = () => {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Details" component={Details} options={({ route }) => {
        return ({title: route.params.name})
        }}/>
    </HomeStack.Navigator>
  )
}

const SearchStactScreen = () => {
  return(
    <SeacrheStack.Navigator>
      <SeacrheStack.Screen name="Search" component={Search}/>
      <SeacrheStack.Screen name="Search2" component={Search2}/>
    </SeacrheStack.Navigator>
  )
}

const ProfileStactScreen = () => {
  return (
    <ProfileStact.Navigator>
      <ProfileStact.Screen name="Profile" component={Profile}/>
    </ProfileStact.Navigator>
  )
}

const TabsScreen = () => {
  return(
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStactScreen}/>
      <Tabs.Screen name="Search" component={SearchStactScreen}/>
    </Tabs.Navigator>
  )
}

export default () => {
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabsScreen}/>
        <Drawer.Screen name="Profile" component={ProfileStactScreen}/>
      </Drawer.Navigator>    
      {/* <AuthStack.Navigator>
        <AuthStack.Screen 
          name="SignIn" 
          component={SignIn} 
          option={{ title: "Sign In"}}/>
        <AuthStack.Screen 
          name="CreateAccount" 
          component={CreateAccount} 
          option={{ title: "Create Account"}}/> 
      </AuthStack.Navigator> */}
    </NavigationContainer>
  )
}