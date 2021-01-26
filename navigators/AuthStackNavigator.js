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
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import First from './Components/First'
import Box from './Components/Box'
import Teste from './Components/Teste'
import Select from './Components/Select'
import {NavigatorContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const AuthStack = createStackNavigator();


export function AuthStackNavigator() {
  return (
    <>
      <AuthStack.Navigator>
        <AuthStack.Screen name={'First'} component={First}/>
        <AuthStack.Screen name={'Box'} component={Box}/>
      </AuthStack.Navigator>
    </>
  );
};


