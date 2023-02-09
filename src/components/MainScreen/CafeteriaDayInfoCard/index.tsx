import {Box, HStack, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

type Props = {
  id: string;
  provideAt: string;
  amenu: string;
  bmenu: string;
  cmenu: string;
};

const CafeteriaDayInfoCard = ({
  id: _id,
  provideAt: day,
  amenu,
  bmenu,
  cmenu,
}: Props) => {
  const date = new Date(day);
  const today = new Date();
  const isToday =
    date.getMonth() + 1 === today.getMonth() + 1 &&
    date.getDate() === today.getDate();
  return (
    <VStack
      px={4}
      borderRadius={16}
      borderWidth={isToday ? 2 : 0.5}
      mt={2}
      py={4}
      space={4}
      mx={4}>
      <Box>
        <HStack>
          <Text fontSize="lg" fontWeight={600}>
            <Ionicons name="restaurant" size={20} color={'#af6a59'} />
            {date.getMonth() + 1}월 {date.getDate()}일 학식
          </Text>
        </HStack>
      </Box>
      <Box>
        <Text>A코너: {amenu}</Text>
        <Text>B코너: {bmenu}</Text>
        <Text>C코너: {cmenu}</Text>
      </Box>
    </VStack>
  );
};

export default CafeteriaDayInfoCard;
