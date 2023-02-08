import {Box, Button, HStack, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const BusInfoCard = () => {
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
          <Button size={'sm'} variant={'link'} right={0} position={'absolute'}>
            {'자세히 보기 >'}
          </Button>
        </HStack>
      </Box>
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
        <Text>
          128-1(김해대 방면): <Text>3분 후</Text>
        </Text>
        <Text>
          8-1(가야대 방면): <Text>15분 후, 35분 후</Text>
        </Text>
      </Box>
    </VStack>
  );
};

export default BusInfoCard;
