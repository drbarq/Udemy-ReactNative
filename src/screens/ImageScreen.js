import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../Components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/images/forest.jpg')} />
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/images/beach.jpg')}/>
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/images/mountain.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen