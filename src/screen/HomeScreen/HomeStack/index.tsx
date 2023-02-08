import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMainScreen from '../HomeMainScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeMain">
      <Stack.Screen
        name="HomeMain"
        component={HomeMainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
