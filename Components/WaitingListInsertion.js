import React from "react"
import {View, TextInput, Text, TouchableOpacity} from "react-native"
import {insertIntoWaitingList} from "../API/WalletAPI"
import EStyleSheet from "react-native-extended-stylesheet"


class WaitingListInsertion extends React.Component {

    constructor(props){
        super(props);

        this.customerNumber="";
        this.secret="";
    }

    _customerNumberInputChanged(text){
        this.customerNumber = text
    }

    _secretInputChanged(text){
        this.secret = text
    }

    insert(number, secret, storeId){
        insertIntoWaitingList(storeId, number, secret)
            .then((response) => alert("Vous avez bien été inséré dans la file d'attente" + response))
            .catch((error) => console.log(error))
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Text>Mon numéro de téléphone</Text>
                <TextInput placeholder="Numéro de téléphone"
                           onChangeText={(text) => this._customerNumberInputChanged(text)}/>
                <Text>Mon code secret</Text>
                <TextInput placeholder="Saisir votre code secret..."
                           onChangeText={(text) => this._secretInputChanged(text)}/>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => {this.insert(this.customerNumber, this.secret, this.props.navigation.getParam("storeId"))}}
                                      style={styles.button}>
                        <Text style={styles.button_text}> Valider </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#ededed"
    },
    button_container: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        backgroundColor: "#FF0000",
        borderRadius: 10,
        height: 50,
        width: "$width/1.5",
        justifyContent: "center"
    },
    button_text: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: "2.3rem"
    },
});

export default WaitingListInsertion