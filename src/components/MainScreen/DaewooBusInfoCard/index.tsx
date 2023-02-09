import {Box, Text, View, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import useGetCityBusTime from '../../../querys/useGetCityBusTime';
import TimerText from '../TimerText';

const DaewooBusInfoCard = () => {
  const {data, isLoading, isFetchedAfterMount} = useGetCityBusTime('GHB166');
  const [busInfo, setBusInfo] = useState([]);
  const today = new Date();
  useEffect(() => {
    if (!isLoading || isFetchedAfterMount) {
      const new_data = data.sort((a: CityBus, b: CityBus) => {
        return a.arrprevstationcnt - b.arrprevstationcnt;
      });
      setBusInfo(new_data);
    }
  }, [data, isLoading, isFetchedAfterMount]);
  if (isLoading) {
    return <View />;
  }
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
        <Text fontSize="lg" fontWeight={600}>
          <Ionicons name="bus" size={20} color={'#008017'} /> 대우유토피아 방면
          버스 정보
        </Text>
      </Box>
      {busInfo.map(
        (
          {
            routeno,
            vehicletp: _v,
            routetp: _r,
            arrprevstationcnt: _a,
            arrtime,
            nodeNm: _nn,
            nodeId: _ni,
          }: CityBus,
          index: number,
        ) => {
          return (
            today <= new Date(arrtime) && (
              <Box key={index}>
                <Text fontWeight={600}>
                  {routeno}번 버스: <TimerText time_text={arrtime} />{' '}
                </Text>
              </Box>
            )
          );
        },
      )}
    </VStack>
  );
};
export default DaewooBusInfoCard;
