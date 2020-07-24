import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class App extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image source={require("./image/logo.png")} style={{ marginTop: 33}} />
                <View style={styles.body}>
                    <View style={{alignItems: "center"}}>
                        <Text style={styles.textHeader}>Register</Text>
                    </View>
                    <View style={{marginTop: 20, marginBottom: 20}}>
                        <View>
                            <Text style={styles.formText}>Username</Text>
                            <View style={styles.formBox}/>
                        </View>
                        <View>
                            <Text style={styles.formText}>Email</Text>
                            <View style={styles.formBox}/>
                        </View>
                        <View>
                            <Text style={styles.formText}>Password</Text>
                            <View style={styles.formBox}/>
                        </View>
                        <View>
                            <Text style={styles.formText}>Ulangi Password</Text>
                            <View style={styles.formBox}/>
                        </View>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity>
                            <View style={styles.buttonDaftar}>
                                <Text style={styles.textDaftar}>Daftar</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{fontSize: 20, marginBottom: 8, color: colors.lightBlue}}>atau</Text>
                        <TouchableOpacity>
                            <View style={styles.buttonMasuk}>
                                <Text style={styles.textMasuk}>Masuk ?</Text>
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
        flex: 1
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
        marginBottom: 16
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