import React, { Component } from "react";
import { 
  View, 
  Text
} from "react-native";

export default class Project extends Component{
  render(){
    return(
      <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <Text style={{fontSize:30}}>ini adalah ProjectScreen</Text>
      </View>
    )
  }
}
