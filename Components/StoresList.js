import React from "react"
import {View, ActivityIndicator, StyleSheet, FlatList} from "react-native"
import {SearchBar, ListItem} from "react-native-elements"
import translate from "../utils/language.utils"
import {getStoresOfTown} from "../API/WalletAPI"

class StoresList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            stores: []
        };
        this.array = []
    }

    _displayLoading(){
        if(this.state.isLoading){
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }

    componentDidMount(){
        getStoresOfTown(this.props.navigation.getParam("town"))
            .then(data => {
                this.setState({
                    isLoading: false,
                    stores: data
                });
                this.array = this.state.stores;
            })
            .catch(error => {
                this.setState({isLoading: false})
            })
    }


    _searchFilterFunction (text) {
        this.setState({
            value: text
        });

        const newData = this.array.filter(item => {
            const itemData = item.district.name.toUpperCase();
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({ stores: newData });
    };

    _renderSeparator = () => {
        return (
            <View style={styles.mySeparator}>
            </View>
        )
    };

    _renderHeader = () =>{
        return (
            <SearchBar
                placeholder={translate("STORESLIST_search")}
                lightTheme
                round
                onChangeText={text => this._searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
            />
        );
    };


    render() {
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                <FlatList
                    data={this.state.stores}
                    renderItem={ ({item}) =>
                        <ListItem
                            key={item.id.toString()}
                            title={item.name.toUpperCase()}
                            subtitle={item.district.name + " , " + item.area}
                            onPress={() => {console.log("Storie")}}
                            bottomDivider={true}
                            badge={{ value: item.waitingListSize, textStyle: { color: 'orange' } }}
                        />
                    }
                    keyExtractor={item => item.id.toString()}
                    // ItemSeparatorComponent={this._renderSeparator}
                    ListHeaderComponent={this._renderHeader}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loadingContainer : {
        position: "absolute",
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center"
    },
    mySeparator : {
        height: 1,
        backgroundColor : "#000000",
    },
    main_container: {
        flex: 1,
        backgroundColor: "#ededed"
    }
});

export default StoresList