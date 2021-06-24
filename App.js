/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RulerPage from './RulerPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="1" component={RulerPage} />
        <Stack.Screen name="2" component={RulerPage} />
        <Stack.Screen name="3" component={RulerPage} />
        <Stack.Screen name="4" component={RulerPage} />
        <Stack.Screen name="5" component={RulerPage} />
        <Stack.Screen name="6" component={RulerPage} />
        <Stack.Screen name="7" component={RulerPage} />
        <Stack.Screen name="8" component={RulerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
