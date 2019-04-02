import React from "react"
import {View, StyleSheet, Image, Text, TouchableOpacity, Dimensions} from "react-native"

class Home extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Image style={styles.logo}
                       source={require("../Images/afrilandcmr.jpg")}
                        resizeMode="contain"/>
                <View style={styles.welcome_text_container}>
                    <Text style={styles.home_text}>Bienvenue sur Afriland Wallet Light</Text>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => {}}
                                      style={styles.button}>
                        <Text style={styles.button_text}>Commencer</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.language}>
                    <TouchableOpacity style={styles.language_touchable} onPress={() => {}}>
                        <Image source={require("../Images/flag-england-images-7.jpg")}
                               style={styles.flag}
                               resizeMode="contain"/>
                        <Text style={styles.flag_text}>Switch to english</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ededed"
    },
    logo:{
        flex: 1,
        height: undefined,
        width: width,
    },
    welcome_text_container:{
        flex: 1,
        justifyContent: "center",
        // backgroundColor: "blue"
    },
    home_text:{
        fontSize: 30,
        textAlign: "center"
    },
    button_container: {
        flex: 1,
        // backgroundColor: "purple",
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#FF0000",
        borderRadius: 10,
        height: 50,
        width: width/1.5,
        justifyContent: "center"
    },
    button_text: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 18
    },
    language:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "yellow"
    },
    language_touchable: {
        alignItems: "center"
    },
    flag:{
        height: 50,
    },
    flag_text:{
        textDecorationLine: "underline"
    }
});

export default Home