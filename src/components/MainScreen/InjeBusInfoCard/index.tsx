import {Box, Button, HStack, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {Linking} from 'react-native';
import useBusCountDown from '../../../hook/useBusCountDown';

const bus_test = {
  toSchool: ['2023-02-08T16:50:46.134Z', '2023-02-08T16:55:46.134Z'],
  toStation: ['2023-02-08T15:8:46.134Z', '2023-02-08T15:10:46.134Z'],
};

const InjeBusInfoCard = () => {
  const handleClick = (link: string) => {
    Linking.canOpenURL(link).then(() => {
      return Linking.openURL(link);
    });
  };
  const toSchoolMinutes = [
    useBusCountDown(bus_test.toSchool[0]),
    useBusCountDown(bus_test.toSchool[1]),
  ];
  const toStationMinutes = [
    useBusCountDown(bus_test.toStation[0]),
    useBusCountDown(bus_test.toStation[1]),
  ];
  return (
    <VStack
      px={4}
      borderRadius={16}
      borderWidth={0.5}
      mt={2}
      py={4}
      space={2}
      mx={2}>
      <Box>
        <HStack>
          <Text fontSize="lg" fontWeight={600}>
            <Ionicons name="bus" size={20} color={'#008017'} /> 인제대 셔틀버스
            정보{' '}
          </Text>
          <Button
            size={'sm'}
            variant={'link'}
            right={0}
            position={'absolute'}
            onPress={() => {
              handleClick(
                'https://www.inje.ac.kr/kor/campus-life/welfare-0102-1.asp',
              );
            }}>
            {'시간표 보기 >'}
          </Button>
        </HStack>
      </Box>
      <Box>
        <Text fontSize={'lg'}>
          인제대
          <Ionicons name="arrow-forward-outline" />
          학교
        </Text>
        {toSchoolMinutes[0] === -1 && toSchoolMinutes[1] === -1 ? (
          <Text>2시간 이내 도착 예정 버스 없음</Text>
        ) : (
          <Text>
            {toSchoolMinutes[0] !== -1 && toSchoolMinutes[0] + '분 후 출발'}
            {toSchoolMinutes[1] !== -1 &&
              ', ' + toSchoolMinutes[1] + '분 후 출발'}
          </Text>
        )}
        {''}
        <Text fontSize={'lg'}>
          학교
          <Ionicons name="arrow-forward-outline" />
          인제대
        </Text>
        {toStationMinutes[0] === -1 && toStationMinutes[1] === -1 ? (
          <Text>2시간 이내 도착 예정 버스 없음</Text>
        ) : (
          <Text>
            {toStationMinutes[0] !== -1 && toStationMinutes[0] + '분 후 출발'}
            {toStationMinutes[1] !== -1 &&
              ', ' + toStationMinutes[1] + '분 후 출발'}
          </Text>
        )}
        {''}
      </Box>
      <Box />
    </VStack>
  );
};
export default InjeBusInfoCard;
