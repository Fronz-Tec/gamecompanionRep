import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from "react-native/Libraries/Storage/AsyncStorage";


let _storeData;
_storeData = async () => {
    try {
        await AsyncStorage.setItem(
            '@MySuperStore:key',
            'I like to save it.',
        );
    } catch (error) {
        // Error saving data
    }
};

let _retrieveData;
_retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('TASKS');
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
    } catch (error) {
        // Error retrieving data
    }
};