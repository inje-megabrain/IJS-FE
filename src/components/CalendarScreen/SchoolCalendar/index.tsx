import {format} from 'date-fns';
import {Box, ScrollView, View} from 'native-base';
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {EnglishMonthParser} from '../../../utils/EnglishMonthParser';
import EventCard from '../EventCard';

LocaleConfig.locales.kr = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'kr';

const test: any = {
  Mar: [
    {
      id: 3,
      title: '삼일절',
      startingdate: '2023-03-01',
      endingdate: '2023-03-01',
    },
    {
      id: 4,
      title: '개강일 ',
      startingdate: '2023-03-08',
      endingdate: '2023-03-08',
    },
    {
      id: 1,
      title: '학업 개시일',
      startingdate: '2023-03-26',
      endingdate: '2023-03-26',
    },
    {
      id: 2,
      title: '학시 개시 7일',
      startingdate: '2023-03-27',
      endingdate: '2023-03-28',
    },
  ],
  Apr: [
    {
      id: 1,
      title: '메가 탄신일',
      startingdate: '2023-04-26',
      endingdate: '2023-04-26',
    },
    {
      id: 2,
      title: '중간고사',
      startingdate: '2023-04-27',
      endingdate: '2023-04-28',
    },
  ],
  May: [],
  Jun: [],
  Jul: [],
  Aug: [],
  Sep: [],
  Oct: [],
  Nov: [],
  Dec: [],
  Jan: [],
  Feb: [],
};

const SchoolCalendar = () => {
  const parseDatesArr: any = Object.values(test).reduce(
    (acc: any, cur: any) => [...acc, ...cur],
  );
  const markedDates = parseDatesArr.reduce((acc: any, current: any) => {
    const startingdate = format(new Date(current.startingdate), 'yyyy-MM-dd');
    const endingdate = format(new Date(current.endingdate), 'yyyy-MM-dd');
    if (acc[startingdate]) {
      acc[startingdate] = {
        startingDay: true,
        textColor: 'white',
        color: '#0691b2',
        ...acc[startingdate],
      };
    } else {
      acc[startingdate] = {
        startingDay: true,
        color: '#0691b2',
        textColor: 'white',
      };
    }
    if (acc[endingdate]) {
      acc[endingdate] = {
        ...acc[endingdate],
        endingDay: true,
        color: '#0691b2',
        textColor: 'white',
      };
    } else {
      acc[endingdate] = {endingDay: true, color: '#0691b2', textColor: 'white'};
    }
    return acc;
  }, {});
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  return (
    <View bgColor={'white'}>
      <Box>
        <Calendar
          minDate="2023-02-01"
          maxDate="2024-02-29"
          monthFormat={'yyyy년 MM월 학사일정'}
          enableSwipeMonths={true}
          disableAllTouchEventsForDisabledDays={true}
          markingType={'period'}
          markedDates={markedDates}
          onMonthChange={data => {
            setMonth(data.month);
            setYear(data.year);
          }}
        />
      </Box>

      <ScrollView bgColor={'white'} bounces={false}>
        {((year === 2023 && month >= 2 && month <= 12) ||
          (year === 2024 && month >= 1 && month <= 2)) &&
          test[EnglishMonthParser(month)].map((props: any) => (
            <EventCard {...props} key={props.id} />
          ))}
      </ScrollView>
    </View>
  );
};

export default SchoolCalendar;
