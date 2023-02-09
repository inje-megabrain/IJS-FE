import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMainScreen from '../HomeMainScreen';
import React from 'react';
import HomeCafeteriaScreen from '../HomeCafeteriaScreen';
import {Text} from 'native-base';
import HomeBusInfoScreen from '../HomeBusInfoScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeMain">
      <Stack.Screen
        name="HomeMain"
        component={HomeMainScreen}
        options={{
          headerLeft: () => (
            <Text fontSize={26} fontWeight={'bold'}>
              홈
            </Text>
          ),
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="HomeCafeteria"
        component={HomeCafeteriaScreen}
        options={{
          headerTitle: '이번주 학식 정보',
        }}
      />
      <Stack.Screen
        name="HomeBusInfo"
        component={HomeBusInfoScreen}
        options={{
          headerTitle: '버스 정보',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
