import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Joe'
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.subHeaderStyle}> My name is {name}</Text>
        </View>
    // return <Text style={{ fontSize: 25 }}>This is the components screen</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen