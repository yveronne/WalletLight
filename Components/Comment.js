import React from "react"
import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native"
import translate from "../utils/language.utils";
import {addComment} from "../API/WalletAPI"
import EStyleSheet from "react-native-extended-stylesheet"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"


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
        const {goBack} = this.props.navigation;
        addComment(comment)
            .then(data => {
                if(!data.isOk){
                    Alert.alert("Erreur", data.error,
                        [
                            {text: "Retour", style : "cancel"}
                        ]);
                }
                else {
                    Alert.alert("Succès", "Votre commentaire a bien été envoyé. Merci.",
                        [
                            {text: "OK", onPress: () => goBack()}
                        ]);
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}
                                     contentContainerStyle={styles.main_container}>
                <View style={styles.phone_container}>
                    <Text style={styles.text}>{translate("FORM_phone")}</Text>
                    <TextInput placeholder={translate("PLACEHOLDER_phone")}
                               onChangeText={(text) => this._customerNumberInputChanged(text)}
                               autoFocus={true}
                                style={styles.input}/>
                </View>
                <View style={styles.phone_container}>
                    <Text style={styles.text}>{translate("FORM_comment_title")}</Text>
                    <TextInput placeholder={translate("PLACEHOLDER_comment_title")}
                               onChangeText={(text) => this._commentTitleInputChanged(text)}
                               style={styles.input}/>
                </View>
                <View style={styles.content_container}>
                    <Text style={styles.text}>{translate("FORM_comment_content")}</Text>
                    <TextInput placeholder={translate("PLACEHOLDER_comment_content")}
                               onChangeText={(text) =>this._commentContentInputChanged(text)}
                               multiline={true} numberOfLines={15}
                               style={styles.input}/>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => {this.submitComment(this.customerNumber, this.commentTitle, this.commentContent)}}
                                      style={styles.button}>
                        <Text style={styles.button_text}>{translate("envoyer")} </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = EStyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#ededed",
        flexDirection: "column",
        padding : "$heightie"
    },
    phone_container: {
        flex: 2,
        marginBottom: "$heightie",
        paddingTop: "$heightie",
        paddingBottom: "$heightie"
    },
    content_container: {
        flex: 4,
        marginBottom: "$heightie*2",
        paddingTop: "$heightie",
        paddingBottom: "$heightie"
    },
    button_container: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "row",
        paddingBottom: "$heightie"
    },
    text: {
        fontSize: "2.2rem",
        color: "#000000",
        fontWeight: "bold",
        paddingBottom: "$heightie"
    },
    input: {
        borderRadius: 5,
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0.5,
        paddingLeft: "$heightie/2",
        flex: 1
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