import React, { useState } from 'react';
import AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";
import styles, {Button, TextInput, View} from "react-native";

export default function Login() {

    const STORAGE_KEY = '@username_input';

    const [username, setUsername] = useState('');

    const saveUsername = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, username)
            alert('Data saved');
        } catch (e) {
            alert('Failed to save data');
        }
    }

    return (
        <View>
            <h2>Choose a name you want to use</h2>
            <TextInput
                placeholder="Username."
                placeholderTextColor="#003f5c"
                onChangeText={(username) => setUsername(username)}
            />
            <Button title={"Save Username"} onPress={saveUsername(username)}></Button>
        </View>
    );
}