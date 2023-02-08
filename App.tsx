import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigatorController from './src/utils/TabNavigatorIconController';

import CalendarScreen from './src/screen/CalendarScreen';
import SettingScreen from './src/screen/SettingScreen';
import HomeStack from './src/screen/HomeScreen/HomeStack';
import NoticeStack from './src/screen/NoticeScreen/NoticeStack';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={TabNavigatorController}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarShowLabel: false,
              title: '홈',
              headerTitleAlign: 'left',
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 26,
                fontWeight: 'bold',
              },
            }}
          />
          <Tab.Screen
            name="Notice"
            component={NoticeStack}
            options={{
              tabBarShowLabel: false,
              title: '공지',
              headerTitleAlign: 'left',
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 26,
                fontWeight: 'bold',
              },
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              tabBarShowLabel: false,
              title: '달력',
              headerTitleAlign: 'left',
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 26,
                fontWeight: 'bold',
              },
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
