import {ParamListBase, RouteProp} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

type Props = {
  route: RouteProp<ParamListBase, string>;
};

type tabBarIcon = {
  focused: boolean;
  color: string;
  size: number;
};

const TabNavigatorController = ({route}: Props) => ({
  tabBarIcon: ({focused, color, size}: tabBarIcon) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Notice') {
      iconName = focused ? 'document-text' : 'document-text-outline';
    } else if (route.name === 'Calendar') {
      iconName = focused ? 'calendar' : 'calendar-outline';
    } else {
      iconName = focused ? 'settings' : 'settings-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#0691b2',
  tabBarInactiveTintColor: 'gray',
});

export default TabNavigatorController;
