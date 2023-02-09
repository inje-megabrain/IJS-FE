import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'native-base';
import React from 'react';
import SettingMainScreen from '../SettingMainScreen';
import SettingPersonalDataScreen from '../SettingPersonalDataScreen';

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="NoticeMain">
      <Stack.Screen
        name="NoticeMain"
        component={SettingMainScreen}
        options={{
          headerLeft: () => (
            <Text fontSize={26} fontWeight={'bold'}>
              설정
            </Text>
          ),
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="SettingPersonalData"
        component={SettingPersonalDataScreen}
        options={{
          title: '닉네임 및 학과 정보 설정',
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
