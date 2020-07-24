import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './components/Main';
import Login from './components/Login';
import About from './components/About';
import Project from './components/ProjectScreen';
import Add from './components/AddScreen';

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const AboutStack = createStackNavigator();
const AddStack = createStackNavigator();
const ProjectStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Skill" component={Main}/>
    </MainStack.Navigator>
  )
}

const AddStackScreen = () => {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="Add" component={Add}/>
    </AddStack.Navigator>
  )
}

const ProjectStackScreen = () => {
  return (
    <ProjectStack.Navigator>
      <ProjectStack.Screen name="Project" component={Project}/>
    </ProjectStack.Navigator>
  )
}

const AboutStackScreen = () => {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About}/>
    </AboutStack.Navigator>
  )
}

const TabsScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Skill" component={MainStackScreen}/>
      <Tabs.Screen name="Project" component={ProjectStackScreen}/>
      <Tabs.Screen name="Add" component={AddStackScreen}/>
    </Tabs.Navigator>
  )
}

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsScreen}/>
      <Drawer.Screen name="About" component={AboutStackScreen}/>
    </Drawer.Navigator>
  )
}

export default () => {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={DrawerScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}