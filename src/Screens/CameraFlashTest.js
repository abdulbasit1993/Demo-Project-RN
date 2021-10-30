import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';

const CameraFlashTest = () => {
  const turnFlashON = () => {
    Torch.switchState(true);
  };

  const turnFlashOFF = () => {
    Torch.switchState(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnStyle} onPress={() => turnFlashON()}>
        <Text style={styles.btnText}>Turn Flashlight ON</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyle} onPress={() => turnFlashOFF()}>
        <Text style={styles.btnText}>Turn Flashlight OFF </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraFlashTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    backgroundColor: '#8000ff',
    margin: 10,
    padding: 20,
    width: 220,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});
