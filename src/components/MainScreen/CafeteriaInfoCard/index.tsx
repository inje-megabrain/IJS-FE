import {Box, Button, Center, HStack, Skeleton, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import useGetFoodInfo from '../../../querys/useGetFoodInfo';

const CafeteriaInfoCard = () => {
  const navigation = useNavigation();
  const today = new Date();
  const {data, isLoading} = useGetFoodInfo();
  const [todayInfo, setTodayInfo] = useState({amenu: '', bmenu: '', cmenu: ''});
  useEffect(() => {
    if (data && !isLoading) {
      for (let i of data) {
        const compare_date = new Date(i.provideAt);
        if (compare_date.getDate() === today.getDate()) {
          setTodayInfo({amenu: i.amenu, bmenu: i.bmenu, cmenu: i.cmenu});
          break;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);
  const LoadingUI = () => {
    return (
      <Center>
        <Skeleton.Text />
      </Center>
    );
  };
  return (
    <VStack px={4} borderRadius={16} borderWidth={0.5} mt={2} py={4} space={4}>
      <Box>
        <HStack>
          <Text fontSize="lg" fontWeight={600}>
            <Ionicons name="restaurant" size={20} color={'#af6a59'} /> 늘빛관
            다인식당{' '}
            <Text fontSize={'md'} fontWeight={400}>
              ({today.getMonth() + 1}/{today.getDate()})
            </Text>
          </Text>
          <Button
            size={'sm'}
            variant={'link'}
            right={0}
            position={'absolute'}
            onPress={() => navigation.navigate('HomeCafeteria' as never)}>
            {'자세히 보기 >'}
          </Button>
        </HStack>
      </Box>
      {isLoading ? (
        <LoadingUI />
      ) : (
        <Box>
          <Text numberOfLines={1} ellipsizeMode="tail">
            A코너: {todayInfo.amenu}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            B코너: {todayInfo.bmenu}
          </Text>
          <Text>C코너: {todayInfo.cmenu}</Text>
        </Box>
      )}
    </VStack>
  );
};

export default CafeteriaInfoCard;
