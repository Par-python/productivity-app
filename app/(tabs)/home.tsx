import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const home = () => {
    return (
        <View style={style.container}>
            <View style={style.notification}>
                <Text>Notification</Text>
            </View>
            <View style={style.title}>
                <Text>Title</Text>
            </View>
            <View style={style.list}>
                <Text>List</Text>
            </View>
            <StatusBar style="dark" />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    notification: {
        backgroundColor: 'blue',
        flex: 1,
    },    
    title: {
        backgroundColor: 'red',
        flex: 2,
    },
    list: {
        backgroundColor: 'green',
        flex: 7,
    }
})


export default home;