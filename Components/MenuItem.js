import React from "react"
import {StyleSheet, TouchableOpacity, Image, Text, Dimensions} from "react-native"

class MenuItem extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.item_touchable} onPress={() => {}}>
                <Image style={styles.icon}
                       source={this.props.image}
                resizeMode="contain"/>
                <Text style={styles.text}> {this.props.text} </Text>
            </TouchableOpacity>
        )
    }
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    item_touchable: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        width: width/2,
        height: height/4,
        borderRadius: 10,
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 1
    },
    icon: {

    },
    text: {
        textAlign: "center",
        paddingTop: 7
    }
});

export default MenuItem