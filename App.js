/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {Platform, Dimensions, NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RulerPage from './RulerPage';
import {MyContext} from './MyContext';
const Stack = createStackNavigator();
const HEIGHT = Dimensions.get('window').height;

const App = () => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const {StatusBarManager} = NativeModules;

  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(obj => {
        setStatusBarHeight(obj.height);
      });
    } else {
      setStatusBarHeight(HEIGHT * 0.01);
    }
  }, [StatusBarManager]);

  return (
    <MyContext.Provider value={statusBarHeight}>
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
    </MyContext.Provider>
  );
};

export default App;
