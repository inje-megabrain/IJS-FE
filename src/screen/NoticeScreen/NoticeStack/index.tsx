import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'native-base';
import React from 'react';
import NoticeDetailScreen from '../NoticeDetailScreen';
import NoticeMainScreen from '../NoticeMainScreen';

const Stack = createNativeStackNavigator();

const NoticeStack = () => {
  return (
    <Stack.Navigator initialRouteName="NoticeMain">
      <Stack.Screen
        name="NoticeMain"
        component={NoticeMainScreen}
        options={{
          headerLeft: () => (
            <Text fontSize={26} fontWeight={'bold'}>
              공지
            </Text>
          ),
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="NoticeDetail"
        component={NoticeDetailScreen}
        options={{title: '공지'}}
      />
    </Stack.Navigator>
  );
};

export default NoticeStack;
