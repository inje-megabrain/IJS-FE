import React from 'react';
import {Box, HStack, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useCountdown from '../../../hook/useCountDown';
import ClockCardDivder from '../ClockCardDivider';

const SchoolYearClockCard = () => {
  const targetDate = new Date('2023-06-22 00:00:00');
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <VStack px={4} borderRadius={16} borderWidth={0.5} mt={4} py={4} space={2}>
      <Box>
        <Text fontSize="lg">
          <Ionicons name="time-outline" size={20} /> 2023년도 1학기 종강까지
          남은 시간
        </Text>
      </Box>
      <Box pb={4}>
        <HStack divider={<ClockCardDivder />}>
          <Box>
            <Text fontSize="3xl" fontWeight={700}>
              {`${days}`}
              <Text fontWeight={200} fontSize="xl">
                일
              </Text>
            </Text>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight={700}>
              {`${hours}`}
              <Text fontWeight={200} fontSize="xl">
                시간
              </Text>
            </Text>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight={700}>
              {`${minutes}`}
              <Text fontWeight={200} fontSize="xl">
                분
              </Text>
            </Text>
          </Box>
          <Box>
            <Text fontSize="3xl" fontWeight={700}>
              {`${seconds}`}
              <Text fontWeight={200} fontSize="xl">
                초
              </Text>
            </Text>
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
};

export default SchoolYearClockCard;
