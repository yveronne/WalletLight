import React from "react"
import {View, StyleSheet} from "react-native"
import MenuItem from "./MenuItem"
import translate from "../utils/language.utils"


class Menu extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <MenuItem styles={styles.item}
                          image={require("../Images/ic_localisation.png")}
                          text={translate("MENU_openStores")}/>
                <MenuItem styles={styles.item}
                          image={require("../Images/ic_cash.png")}
                          text={translate("MENU_prices")}/>
                <MenuItem styles={styles.item}
                          image={require("../Images/ic_help.png")}
                          text={translate("MENU_help")}/>
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