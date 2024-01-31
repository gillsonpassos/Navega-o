import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';

import Tab from './Tab';
//import Stack from "./Stack";

// <Tab />
export default props => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Drawer />
      {/* <Stack /> */}
    </NavigationContainer>
  </SafeAreaView>
);

