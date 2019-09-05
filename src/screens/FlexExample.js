import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const FlexExample = () => {
    return (           
        <View style={styles.parentStyle}>
            <View style={styles.viewOne}></View>
            <View style={styles.viewTwoParent}>
                <View style={styles.viewTwo}></View>
            </View>
            <View style={styles.viewThree}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOne: {
        backgroundColor: 'red',
        height: 50,
        width: 50
    },
    viewTwoParent: {
        // alternative way to push the box down, wrap it in a view and justify it, similar to using divs in flex 
        height: 100,
        justifyContent: "flex-end"
    },  
    viewTwo: {
        backgroundColor: 'green',
        height: 50,
        width: 50,
        // top: 50
        // alignSelf: "flex-end"
        // marginTop: 50
    },
    viewThree: {
        backgroundColor: 'purple',
        height: 50,
        width: 50
    }
})

export default FlexExample