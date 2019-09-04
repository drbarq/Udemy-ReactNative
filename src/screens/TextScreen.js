import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text style={styles.header}>Enter Password:</Text>
            <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newPassword) => setPassword(newPassword)}
            >
            </TextInput>
            {password.length > 4 ? null : <Text>Please enter a password longer than 5 characters</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    header: {
        fontSize: 25
    }
})

export default TextScreen