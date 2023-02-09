/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import {Box, Divider, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';
import {departmentState, nicknameState} from '../../../state/state';

const SettingMain = () => {
  const navigation = useNavigation();
  const [nickname, _setNickname] = useRecoilState(nicknameState);
  const [department, _setDepartment] = useRecoilState(departmentState);
  const handleSetting = () => {
    navigation.navigate('SettingPersonalData' as never);
  };
  return (
    <View>
      <Divider />
      <TouchableOpacity
        onPress={() => {
          handleSetting();
        }}>
        <Box py={2} px={4}>
          <Text fontSize={'md'} fontWeight={500}>
            닉네임 및 학과 정보 변경
          </Text>
        </Box>
      </TouchableOpacity>
      <Divider />
    </View>
  );
};

export default SettingMain;
