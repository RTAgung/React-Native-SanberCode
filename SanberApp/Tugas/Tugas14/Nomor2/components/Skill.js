import React, { Component } from "react";
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Skill extends Component{
  render(){
    let data = this.props.data
    return(
      <View style={styles.container}>
        <Icon name={data.iconName} size={80} color={colors.textPrimary}/>
        <View style={styles.text}>
          <Text style={{fontSize: 24, color: colors.textPrimary, fontWeight:'bold'}}>{data.skillName}</Text>
          <Text style={{fontSize: 16, color: colors.textSecondary, fontWeight:'bold'}}>{data.categoryName}</Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontSize: 48, color: 'white', fontWeight:'bold'}}>{data.percentageProgress}</Text>
          </View>
        </View>
        <Icon name="chevron-right" size={80} color={colors.textPrimary}/>
      </View>
    )
  }
}

const colors = {
  textPrimary: "#003366",
  textSecondary: "#3EC6FF",
  blueBackground: "#B4E9FF",
} 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 8,
    backgroundColor: colors.blueBackground,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
    elevation: 5
  },
  text: {
    flex: 1,
    marginLeft: 13,
    flexDirection: 'column',
    marginTop: 13,
    marginBottom: 10,
  }
})