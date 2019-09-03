import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button 
        title="Go to Components Demo"
        onPress={ () => navigation.navigate('Components')}
      />
      <Button 
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo" 
      />
      <Button 
        title="Go to Image Screen"
        onPress={ () => navigation.navigate('Image')}
      />
      <Button 
        title="Go to Counter Screen"
        onPress={ () => navigation.navigate('Counter')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
