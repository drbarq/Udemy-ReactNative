import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const FlexExample = () => {
    return (
        <View>
            <View style={styles.viewHeader}>
                <Text style={styles.header}>App</Text>
            </View>
            <View style={styles.boxContainer}>
                <Text style={[styles.boxProperties, styles.box1]}>Box 1</Text>
                <Text style={[styles.boxProperties, styles.box2]}>Box 2</Text>
                <Text style={[styles.boxProperties, styles.box3]}>Box 3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        padding: 10
    },
    viewHeader: {
        alignSelf: 'stretch',
        borderColor: 'black',
        borderWidth: 1
    },
    boxContainer: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 200
    },
    boxProperties: {
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        height: 100
    },
    box1: {
        backgroundColor: 'red'
    },
    box2: {
        backgroundColor: 'green',
        alignSelf: 'stretch'
    },
    box3: {
        backgroundColor: 'purple'
    }
})

export default FlexExample