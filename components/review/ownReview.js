import styles, {FlatList, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {PureComponent} from "react";
import {ListItem} from 'react-native-elements';
import {useState} from "@types/react";
import AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";

class OwnReview extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    fetchItem(userSearch) {
        requestAnimationFrame(() =>
            fetch('https://api.rawg.io/api/games&search_precise=' + userSearch + '?key=b4f9572e58fd441392c7cb6cad1ba62d', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(responseJson => {
                    this.setState({data: responseJson.data})
                    console.warn(responseJson);
                })
                .catch(error => {
                    alert(error);
                }),
        );
    }

    renderGames = ({item}) => (
        <View>
            <ListItem id={item.id}>
                <ListItem.Content>
                    <ListItem.Title>
                        {item.name.toUpperCase()}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                        {item.released}
                    </ListItem.Subtitle>
                    <Pressable
                        style={({pressed}) => [{backgroundColor: pressed ? 'black' : 'white'}]}>
                        {({pressed}) => (
                            <Text style={[{color: pressed ? 'white' : 'black'}]}>
                                {"game chosen"}
                            </Text>
                        )}
                    </Pressable>
                </ListItem.Content>
            </ListItem>
        </View>
    );

    componentDidMount() {
        this.fetchItem();
    }



    render() {
        return (
            <SafeAreaView>
                <TextInput
                    id={'userSearchField'}
                    placeholder={"search for a game"}
                    onChangeText={this.fetchItem(this.valueOf('userSearchField'))}
                    value={}
                />
                <FlatList data={this.state.data}
                          renderItem={item => this.renderGames(item)}
                />
                <TextInput
                    id={"reviewText"}
                    placeholder={"Write your review here"}
                    editable
                    numberOfLines={5}
                    value={this.state.reviewText}
                />
                <button onClick={saveReviewToLocalStorage()}
            </SafeAreaView>
        );
    }
}

function saveReviewToLocalStorage(gameID, reviewText) {
    const STORAGE_KEY = '@gameReviews';

    const saveReview = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, gameID,reviewText)
            alert('Data saved');
        } catch (e) {
            alert('Failed to save data');
        }
    }
}

export default OwnReview;


