import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Button,
  CheckIcon,
  Heading,
  Input,
  Select,
  Text,
} from 'native-base';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {departmentState, nicknameState} from '../../../state/state';
import {DepartmentData} from '../../../utils/DepartmentData';
import {storePersonData} from '../../../utils/StorePersonData';
import Title from '../../Title';
import React from 'react';
import {SafeAreaView} from 'react-native';
const InitialSetting = () => {
  const [text, setText] = useState('');
  const [warningText, setWarningText] = useState('');
  const [department, setDepartment] = useState('');
  const navigation = useNavigation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nickname, setNickname] = useRecoilState(nicknameState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [n_department, setN_department] = useRecoilState(departmentState);
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
    <SafeAreaView>
      <Box px={4} py={4}>
        <Heading>인제생에 오신 것을 환영합니다</Heading>
      </Box>
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
          설정
        </Button>
      </Box>
    </SafeAreaView>
  );
};

export default InitialSetting;
