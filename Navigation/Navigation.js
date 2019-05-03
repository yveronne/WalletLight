import {createStackNavigator, createAppContainer} from "react-navigation"
import Home from "../Components/Home"
import Menu from "../Components/Menu"
import TownList from "../Components/TownList"
import StoresList from "../Components/StoresList"
import WaitingListInsertion from "../Components/WaitingListInsertion"
import Comment from "../Components/Comment"
import translate from "../utils/language.utils"



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
            title: translate("NAVIGATION_menu"),
            headerStyle: {
                backgroundColor: "#FF0000"
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#FFFFFF"
            }
        }
    },
    TownList: {
        screen: TownList,
        navigationOptions: {
            title: translate("NAVIGATION_points"),
            headerStyle: {
                backgroundColor: "#FF0000"
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#FFFFFF",
            },
        }
    },
    StoresList: {
        screen: StoresList,
        navigationOptions: {
            title: translate("NAVIGATION_stores"),
            headerStyle: {
                backgroundColor: "#FF0000"
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#FFFFFF",
            },
        }
    },
    WaitingList: {
        screen: WaitingListInsertion,
        navigationOptions: {
            title: translate("NAVIGATION_waitinglist"),
            headerStyle: {
                backgroundColor: "#FF0000"
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#FFFFFF",
            },
        }
    },
    Comment: {
        screen: Comment,
        navigationOptions: {
            title: translate("NAVIGATION_comment"),
            headerStyle: {
                backgroundColor: "#FF0000"
            },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#FFFFFF",
            },
        }
    }

});

export default createAppContainer(stackie)