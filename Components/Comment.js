import React from "react"
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native"
import translate from "../utils/language.utils";
import {addComment} from "../API/WalletAPI"
import EStyleSheet from "react-native-extended-stylesheet"


class Comment extends React.Component {

    constructor(props){
        super(props);

        this.commentTitle="";
        this.commentContent="";
        this.customerNumber="";
    }

    _customerNumberInputChanged(text){
        this.customerNumber = text
    }

    _commentTitleInputChanged(text){
        this.commentTitle = text
    }

    _commentContentInputChanged(text){
        this.commentContent = text
    }

    submitComment(number, title, content){
        var comment = {
            "title" : title,
            "content" : content,
            "customerNumber" : number,
            "storeId" : this.props.navigation.getParam("storeId")
        };
        addComment(comment)
            .then(data => {
                alert("Votre commentaire a bien été envoyé. Merci." + data);
                console.log("Votre commentaire a bien été envoyé. Merci. " + data);

            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Text>Mon numéro de téléphone</Text>
                <TextInput placeholder="Numéro de téléphone"
                            onChangeText={(text) => this._customerNumberInputChanged(text)}/>
                <Text>Titre du commentaire</Text>
                <TextInput placeholder="Titre du commentaire"
                            onChangeText={(text) => this._commentTitleInputChanged(text)}/>
                <Text>Contenu</Text>
                <TextInput placeholder="Saisir les commentaires..."
                            onChangeText={(text) =>this._commentContentInputChanged(text)}/>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => {this.submitComment(this.customerNumber, this.commentTitle, this.commentContent)}}
                                      style={styles.button}>
                        <Text style={styles.button_text}> Envoyer </Text>
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

export default Comment