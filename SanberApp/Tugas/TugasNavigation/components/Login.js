import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("./../image/logo.png")} style={{marginTop:33, width:"100%"}} />
                <View style={styles.body}>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.textHeader}>Login</Text>
                    </View>
                    <View style={{marginTop: 20, marginBottom: 20}}>
                        <View>
                            <Text style={styles.formText}>Username</Text>
                            <TextInput 
                                style={styles.formBox}
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                                placeholder="Masukkan Username"
                                placeholderTextColor='grey'
                                underlineColorAndroid='transparent'/>
                            {/* <View style={styles.formBox}/> */}
                        </View>
                        <View>
                            <Text style={styles.formText}>Password</Text>
                            <TextInput 
                                style={styles.formBox}
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                                placeholder="Masukkan Password"
                                placeholderTextColor='grey'
                                underlineColorAndroid='transparent'/>
                            {/* <View style={styles.formBox}/> */}
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={() => {
                                if (this.state.username == "Rama" && this.state.password == "Rama123"){
                                    this.props.navigation.navigate("Home")
                                    this.props.navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Home' }],
                                      });
                                      
                                    alert("Login Berhasil!")
                                } else {
                                    alert("Login Gagal!")
                                }
                            }}>
                            <View style={styles.buttonMasuk}>
                                <Text style={styles.textMasuk}>Masuk</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{fontSize: 20, marginBottom: 8, color: colors.lightBlue}}>atau</Text>
                        <TouchableOpacity
                            onPress={() => alert("Belum Bisa!")}>
                            <View style={styles.buttonDaftar}>
                                <Text style={styles.textDaftar}>Daftar ?</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const colors = {
    lightBlue: "#3EC6FF",
    darkBlue: "#003366",
    grayBackground: "#EFEFEF"
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        padding: 40,
    },
    textHeader: {
        fontSize: 24,
        color: colors.darkBlue
    },
    formText: {
        fontSize: 16,
        color: colors.darkBlue,
        marginBottom: 4
    },
    formBox: {
        width: "100%",
        height: 40,
        borderColor: colors.darkBlue,
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 16
    },
    buttonDaftar: {
        backgroundColor: colors.darkBlue,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        width: 140,
        marginBottom: 8
    },
    textDaftar: {
        color: "white",
        fontSize: 20,
    },
    buttonMasuk: {
        backgroundColor: colors.lightBlue,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
        width: 140,
        marginBottom: 8
    },
    textMasuk: {
        color: "white",
        fontSize: 20,
    }
})