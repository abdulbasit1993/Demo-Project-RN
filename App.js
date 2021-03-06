import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/Screens/HomeScreen';
import CameraFlashTest from './src/Screens/CameraFlashTest';
import CounterExample from './src/Screens/CounterExample';
import DigitalClock from './src/Screens/DigitalClock';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerTitle: 'Home Screen'}}
        />
        <Stack.Screen
          name="CameraFlashTest"
          component={CameraFlashTest}
          options={{headerTitle: 'Flashlight Test'}}
        />
        <Stack.Screen
          name="CounterExample"
          component={CounterExample}
          options={{headerTitle: 'Counter Example'}}
        />
        <Stack.Screen
          name="DigitalClock"
          component={DigitalClock}
          options={{headerTitle: 'Digital Clock'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
