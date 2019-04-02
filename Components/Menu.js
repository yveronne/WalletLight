import React from "react"
import {View, StyleSheet, TouchableOpacity, Image, Text} from "react-native"
import MenuItem from "./MenuItem"

class Menu extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <MenuItem styles={styles.item}
                          image={require("../Images/ic_localisation.png")}
                          text="Points Marchands Ouverts"/>
                <MenuItem styles={styles.item}
                          image={require("../Images/ic_cash.png")}
                          text="Frais des opérations"/>
                <MenuItem styles={styles.item}
                          image={require("../Images/ic_help.png")}
                          text="Aide"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ededed"
    },
    item: {
        flex: 1
    }
});

export default Menu