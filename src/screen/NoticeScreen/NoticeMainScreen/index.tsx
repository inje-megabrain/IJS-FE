import {Box} from 'native-base';
import React from 'react';
import DefaultContainer from '../../../components/DefaultContainer';
import NoticeCard from '../../../components/NoticeScreen/NoticeCard';
import Title from '../../../components/Title';

const test = [
  {
    id: 1,
    title: '2023학년도 신입생 및 편입생 수강신청 안내',
    contentsUrl:
      'https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=0&Ltype3=0&Tname=S_News&Ldir=board/S_News&SearchText=&SearchKey=&d1n=5&d2n=1&d3n=1&d4n=0&Lpage=Tboard_R&board_idx=22096&delchk=&div=6&page=1',
    author: '학사관리사',
    writeDate: '2023-02-08',
  },
  {
    id: 2,
    title: '학위수여식 임시주차장 및 교내 교통통제 안내',
    contentsUrl:
      'https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=0&Ltype3=0&Tname=S_News&Ldir=board/S_News&SearchText=&SearchKey=&d1n=5&d2n=1&d3n=1&d4n=0&Lpage=Tboard_R&board_idx=22082&delchk=&div=6&page=1',
    author: '학사관리사',
    writeDate: '2023-02-07',
  },
  {
    id: 3,
    title: '2023학년도 1학기 재입학 허가자 안내',
    contentsUrl:
      'https://www.inje.ac.kr/kor/Template/Bsub_page.asp?Ltype=5&Ltype2=0&Ltype3=0&Tname=S_News&Ldir=board/S_News&SearchText=&SearchKey=&d1n=5&d2n=1&d3n=1&d4n=0&Lpage=Tboard_R&board_idx=22064&delchk=&div=6&page=1',
    author: '학사관리사',
    writeDate: '2023-01-10',
  },
];

const NoticeMainScreen = () => {
  return (
    <DefaultContainer>
      <Box pt={2} px={4}>
        <Title title="학교 공지" />
        <NoticeCard main_title="인제 소식" data={test} />
      </Box>
      <Box pt={2} px={4}>
        <Title title="학사 공지" />
        <NoticeCard main_title="컴퓨터공학과" data={test} />
      </Box>
      <Box pt={2} px={4}>
        <Title title="비교과" />
        <NoticeCard main_title="IU-나비 비교과 활동" data={test} />
      </Box>
    </DefaultContainer>
  );
};

export default NoticeMainScreen;
