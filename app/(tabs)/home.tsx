import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const home = () => {
    return (
        <View style={style.container}>
            <Text>Home</Text>
            <StatusBar style="dark" />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})


export default home;