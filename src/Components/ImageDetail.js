import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = props => {
    return (
        <View>
            <Image source={require('../../assets/images/beach.jpg')}/>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail