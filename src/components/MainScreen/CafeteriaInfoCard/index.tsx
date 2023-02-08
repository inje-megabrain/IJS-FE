import {Box, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const CafeteriaInfoCard = () => {
  return (
    <VStack px={4} borderRadius={16} borderWidth={0.5} mt={2} py={4} space={4}>
      <Box>
        <Text fontSize="lg" fontWeight={600}>
          <Ionicons name="restaurant" size={20} color={'#af6a59'} /> 늘빛관
          다인식당{' '}
          <Text fontSize={'md'} fontWeight={400}>
            (02/08)
          </Text>
        </Text>
      </Box>
      <Box>
        <Text numberOfLines={1} ellipsizeMode="tail">
          A코너: 계란간장밥, 뚝배기김치찌개, 열대과일샐러드
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          B코너: 닭갈비 볶음밥, 피쉬앤칩스+콘소스, 김치찌짐, 유부장국
        </Text>
        <Text>C코너: 내 맘대로 샐러드</Text>
      </Box>
    </VStack>
  );
};

export default CafeteriaInfoCard;
