import {useNavigation} from '@react-navigation/native';
import {Box, Button, CheckIcon, Input, Select, Text, View} from 'native-base';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {departmentState, nicknameState} from '../../../state/state';
import {storePersonData} from '../../../utils/StorePersonData';
import Title from '../../Title';
import React from 'react';
import {DepartmentData} from '../../../utils/DepartmentData';
const SettingDataEdit = () => {
  const [warningText, setWarningText] = useState('');
  const navigation = useNavigation();
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [text, setText] = useState(nickname);
  const [n_department, setN_department] = useRecoilState(departmentState);
  const [department, setDepartment] = useState(n_department);

  const canEdit = warningText.length === 14 && department;

  const handleEdit = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      setNickname(text);
      setN_department(department);
      storePersonData('person_data', {nickname: text, department: department});
    }
  };
  useEffect(() => {
    if (text) {
      if (!/^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/.test(text)) {
        setWarningText('사용 불가능한 닉네임입니다.');
      } else {
        setWarningText('사용 가능한 닉네임입니다.');
      }
    }
  }, [text]);
  return (
    <View bgColor={'white'} flex={1}>
      <Box px={4} py={4}>
        <Title title="닉네임 설정" />
        <Text color="muted.400">
          닉네임은 한글, 영문, 숫자만 가능하며 2-10자리 가능합니다.
        </Text>
        <Input
          placeholder="닉네임"
          w="100%"
          mt={4}
          value={text}
          onChangeText={setText}
        />
        <Text color="black">{warningText}</Text>
      </Box>
      <Box px={4} py={4}>
        <Title title="학과 설정" />
        <Text color="muted.400">학과 정보 스크랩을 위해 사용합니다.</Text>
        <Select
          selectedValue={department}
          minWidth="200"
          accessibilityLabel="학과 선택"
          mb={10}
          placeholder="학과 선택"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={itemValue => setDepartment(itemValue)}>
          {DepartmentData.map(({department: dep, id}) => (
            <Select.Item label={dep} value={String(id)} key={id} />
          ))}
        </Select>
        <Button
          disabled={!canEdit}
          isDisabled={!canEdit}
          onPress={() => {
            handleEdit();
          }}>
          수정
        </Button>
      </Box>
    </View>
  );
};

export default SettingDataEdit;
