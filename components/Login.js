import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function Login() {
    
    return (
        <View>
            <TextInput style = {styles.input} placeholder = 'Login / email'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'silver',
        width: 320,
        height: 45,
        padding: 10,
        justifyContent: 'space-around'
    },
});
