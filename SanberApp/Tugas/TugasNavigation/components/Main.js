import React, { Component } from "react";
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

import data from './../skillData.json'
import Skill from './Skill'

export default class Main extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image source={require("./../image/logo.png")} style={styles.logo} />
        <View style={styles.profile}>
          <Image source={require("./../image/photo.png")} style={styles.photo} />
          <View >
            <Text style={{fontSize:12, }}>Hai,</Text>
            <Text style={{fontSize:16, color:colors.textPrimary}}>Rama Tri Agung</Text>
          </View>
        </View>
        <Text style={{fontSize:36, color:colors.textPrimary}}>SKILL</Text>
        <View style={styles.separator}/>
        <View style={styles.category}>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryItem}>Library / Framework</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryItem}>Bahasa Pemrograman</Text>
          </View>
          <View style={styles.categoryBox}>
            <Text style={styles.categoryItem}>Teknologi</Text>
          </View>
        </View>
        <View style={{flex:1}}>
          <FlatList
            data={data.items}
            renderItem={(data)=><Skill data={data.item} />}
            keyExtractor={(item)=>item.id}
          />
        </View>
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
    flex: 1,
    padding: 18,
    paddingBottom: 0
  },
  logo: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 187,
    height: 51,
    resizeMode: 'cover',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 54,
    marginBottom: 16,
  },
  photo: {
    width: 28,
    height: 28,
    borderRadius: 100,
    resizeMode: "cover",
    marginRight: 10
  },
  separator: {
    height: 4,
    backgroundColor: "#3EC6FF",
  },
  category: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  categoryBox: {
    paddingHorizontal: 8,
    paddingVertical: 9,
    backgroundColor: colors.blueBackground,
    borderRadius: 8,
  },
  categoryItem: {
    fontSize: 12,
    color: colors.textPrimary,
    fontWeight: 'bold'
  }
})