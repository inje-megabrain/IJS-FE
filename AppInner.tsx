import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import CalendarScreen from './src/screen/CalendarScreen';
import HomeStack from './src/screen/HomeScreen/HomeStack';
import NoticeStack from './src/screen/NoticeScreen/NoticeStack';
import SettingStack from './src/screen/SettingScreen/SettingStack';
import {departmentState, nicknameState} from './src/state/state';
import {containsKey} from './src/utils/ContainKey';
import {getPersonData} from './src/utils/GetPersonData';
import TabNavigatorController from './src/utils/TabNavigatorIconController';
const Tab = createBottomTabNavigator();

const AppInner = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nickname, setNickname] = useRecoilState(nicknameState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [department, setDepartment] = useRecoilState(departmentState);
  const navigation = useNavigation();
  useEffect(() => {
    const checkNickName = async () => {
      const isContain = await containsKey('person_data');
      if (isContain) {
        const data = await getPersonData('person_data');
        if (!data.nickname || !data.department) {
          navigation.navigate('InitialScreen' as never);
        }
        setNickname(data.nickname);
        setDepartment(data.department);
      } else {
        navigation.navigate('InitialScreen' as never);
      }
    };
    checkNickName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Tab.Navigator screenOptions={TabNavigatorController}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Notice"
        component={NoticeStack}
        options={{headerShown: false, tabBarShowLabel: false}}
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
        component={SettingStack}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
};

export default AppInner;
