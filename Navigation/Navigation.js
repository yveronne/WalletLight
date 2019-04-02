import {createStackNavigator, createAppContainer} from "react-navigation"
import Home from "../Components/Home"
import Menu from "../Components/Menu"

const stackie = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    Menu: {
        screen: Menu,
        navigationOptions: {
            title: "Menu",
            headerStyle: {
                backgroundColor: "#FF0000"
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#FFFFFF"
            }
        }
    }
});

export default createAppContainer(stackie)