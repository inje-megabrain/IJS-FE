import {VStack} from 'native-base';
import React from 'react';
import SchoolCalendar from '../../components/CalendarScreen/SchoolCalendar';
const CalendarScreen = () => {
  return (
    <VStack height={'100%'} bgColor={'white'}>
      <SchoolCalendar />
    </VStack>
  );
};

export default CalendarScreen;
