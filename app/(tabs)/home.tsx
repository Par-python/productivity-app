import {View, Text} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const home = () => {
    return (
        <View>
            <Text>Home</Text>
            <StatusBar style="dark" />
        </View>
    )
}

export default home;