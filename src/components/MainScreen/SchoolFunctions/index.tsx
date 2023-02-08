import {ScrollView} from 'native-base';
import FunctionButton from '../../FunctionButton';
import React from 'react';

const SchoolFunctions = () => {
  const functions_data = [
    {
      title: '학교 홈페이지',
      iconname: 'earth-outline',
      link: 'https://www.inje.ac.kr/kor/main/main.asp',
    },
    {
      title: '사이버 강의실',
      iconname: 'laptop-outline',
      link: 'https://injelms.inje.ac.kr/login.php',
    },

    {
      title: '백인제 도서관',
      iconname: 'library-outline',
      link: 'https://library.inje.ac.kr/',
    },
    {
      title: '인제대 웹 메일',
      iconname: 'mail-outline',
      link: 'https://oasis.inje.ac.kr/',
    },
    {
      title: '학교 셔틀버스',
      iconname: 'bus-outline',
      link: 'https://bus.inje.ac.kr/',
    },
    {
      title: '비교과 홈페이지',
      iconname: 'bookmarks-outline',
      link: 'https://edu.inje.ac.kr/default.aspx?ReturnUrl=%2f',
    },
  ];
  return (
    <ScrollView horizontal pt={2} showsHorizontalScrollIndicator={false}>
      {functions_data.map(props => (
        <FunctionButton {...props} key={props.title} />
      ))}
    </ScrollView>
  );
};

export default SchoolFunctions;
