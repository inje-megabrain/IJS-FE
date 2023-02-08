import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NoticeMainScreen from '../NoticeMainScreen';

const Stack = createNativeStackNavigator();

const NoticeStack = () => {
  return (
    <Stack.Navigator initialRouteName="NoticeMain">
      <Stack.Screen
        name="NoticeMain"
        component={NoticeMainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default NoticeStack;
