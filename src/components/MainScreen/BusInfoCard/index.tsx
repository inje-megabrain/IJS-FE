import {Box, Button, HStack, Skeleton, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import useGetCityBusTime from '../../../querys/useGetCityBusTime';
import TimerText from '../TimerText';
import useGetToSchoolBus from '../../../querys/useGetToSchoolBus';
import useGetToStationBus from '../../../querys/useGetToStationBus';

const BusInfoCard = () => {
  const navigation = useNavigation();
  const {
    data: park_data,
    isLoading: park_loading,
    isFetchedAfterMount: isParkFetched,
  } = useGetCityBusTime('GHB175');
  const {
    data: daewoo_data,
    isLoading: daewoo_loading,
    isFetchedAfterMount: isDaewooFetched,
  } = useGetCityBusTime('GHB166');

  const {
    data: toSchoolData,
    isLoading: isToSchoolLoading,
    isFetchedAfterMount: isToSchoolFetched,
  } = useGetToSchoolBus();
  const {
    data: toStationData,
    isLoading: isToStationLoading,
    isFetchedAfterMount: isToStationFetched,
  } = useGetToStationBus();

  const [busToParkInfo, setBusToParkInfo] = useState<CityBus[]>([]);
  const [busToDaewooInfo, setBusToDaewooInfo] = useState<CityBus[]>([]);
  const isFetch =
    !isToSchoolLoading &&
    !isToStationLoading &&
    !daewoo_loading &&
    !park_loading &&
    isParkFetched &&
    isDaewooFetched &&
    isToSchoolFetched &&
    isToStationFetched;
  useEffect(() => {
    if (!park_loading || park_data) {
      const new_data = park_data
        .sort((a: CityBus, b: CityBus) => {
          return a.arrprevstationcnt - b.arrprevstationcnt;
        })
        .slice(0, 1);
      setBusToParkInfo(new_data);
    }
  }, [park_data, park_loading]);

  useEffect(() => {
    if (!daewoo_loading || daewoo_data) {
      const new_data = daewoo_data
        .sort((a: CityBus, b: CityBus) => {
          return a.arrprevstationcnt - b.arrprevstationcnt;
        })
        .slice(0, 1);
      setBusToDaewooInfo(new_data);
    }
  }, [daewoo_data, daewoo_loading]);

  return (
    <VStack
      px={4}
      borderRadius={16}
      borderWidth={0.5}
      mt={2}
      py={4}
      space={2}
      mb={4}>
      <Box>
        <HStack>
          <Text fontSize="lg" fontWeight={600}>
            <Ionicons name="bus" size={20} color={'#008017'} /> 인제대 버스 정보{' '}
          </Text>
          <Button
            size={'sm'}
            variant={'link'}
            right={0}
            position={'absolute'}
            onPress={() => navigation.navigate('HomeBusInfo' as never)}>
            {'자세히 보기 >'}
          </Button>
        </HStack>
      </Box>
      {!isFetch ? (
        <Box>
          <Skeleton />
          <Skeleton.Text />
        </Box>
      ) : (
        <Box>
          <Box>
            <Text fontSize={'md'} fontWeight={500}>
              셔틀 버스 정보
            </Text>
            <Text>
              인제대
              <Ionicons name="arrow-forward-outline" />
              학교: <Text>3분 후, 23분 후</Text>
            </Text>
            <Text>
              학교
              <Ionicons name="arrow-forward-outline" />
              인제대: <Text>15분 후, 35분 후</Text>
            </Text>
          </Box>
          <Box>
            <Text fontSize={'md'} fontWeight={500}>
              정문 시내 버스 정보
            </Text>
            {busToParkInfo[0] && (
              <Text>
                {busToParkInfo[0].routeno}번(인제공원 방면):{' '}
                <TimerText time_text={busToParkInfo[0].arrtime} />
                <Text color={'gray.400'} />
              </Text>
            )}
            {busToDaewooInfo[0] && (
              <Text>
                {busToDaewooInfo[0].routeno}번(대우유토피아 방면):{' '}
                <TimerText time_text={busToDaewooInfo[0].arrtime} />
                <Text color={'gray.400'} />
              </Text>
            )}
          </Box>
        </Box>
      )}
    </VStack>
  );
};

export default BusInfoCard;
