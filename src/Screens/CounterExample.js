import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CounterExample = () => {
  const [defaultValue, setDefaultValue] = useState(0);

  const increaseValue = () => {
    const newaddValue = defaultValue + 1;
    setDefaultValue(newaddValue);
  };

  const decreaseValue = () => {
    const newsubValue = defaultValue - 1;
    setDefaultValue(newsubValue);
  };

  const resetValue = () => {
    setDefaultValue(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.numDisplay}>{defaultValue}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => increaseValue()}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => decreaseValue()}>
          <Text style={styles.btnText}>—</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{backgroundColor: '#8000ff', padding: 12}}
          onPress={() => resetValue()}>
          <Text style={{fontSize: 30, color: '#fff'}}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  btnStyle: {
    backgroundColor: '#8000ff',
    padding: 12,
    margin: 30,
    width: 70,
  },
  btnText: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
  },
  numDisplay: {
    fontSize: 60,
  },
});
