import {Text} from 'native-base';
import React from 'react';
import useBusCountDown from '../../../hook/useBusCountDown';

type Props = {
  time_text: string;
};

const TimerText = ({time_text}: Props) => {
  const time = useBusCountDown(time_text);
  if (time < 2) {
    return <Text>곧 도착</Text>;
  }
  return <Text fontWeight={400}>{time}분 뒤 도착</Text>;
};

export default TimerText;
