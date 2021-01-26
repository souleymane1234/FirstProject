/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First from './Components/First'
import Second from './Components/Second'
import Header from './Components/Header'
import Select from './Components/Select'
import DetailVisitor from './Components/DetailVisitor'
import DetailEmployer from './Components/DetailEmployer'
import ProfilAndParametre from './Components/ProfilAndParametre'
import Apropos from './Components/Apropos'
import ManualRegister from './Components/ManualRegister'
import AutoRegister from './Components/AutoRegister'

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
{/* <StatusBar barStyle="dark-content" backgroundColor='blue'/>
<Text>bonjour</Text> */}
    <ApplicationProvider {...eva} theme={eva.light}>
       <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="First" options={{headerShown:false}} component={First} />
        <Stack.Screen name="Second" options={{headerShown:false}} component={Second} />
        <Stack.Screen name="ManualRegister" options={{headerShown:false}} component={ManualRegister} /> 
        <Stack.Screen name="Select" options={{headerShown:false}} component={Select} /> 
        <Stack.Screen name="DetailEmployer" options={{headerShown:false}} component={DetailEmployer} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
    </>
  );
};


export default App;
