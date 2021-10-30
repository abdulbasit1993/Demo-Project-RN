import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate('CameraFlashTest')}>
        <Text style={styles.btnTextStyle}>Flashlight Test Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#2d7fe3',
    padding: 10,
    margin: 10,
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
