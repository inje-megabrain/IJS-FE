import {useEffect, useState} from 'react';

const useBusCountDown = (targetDate: string): any => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 10000);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  let minutes: string | number = Math.floor(countDown / 1000 / 60);
  if (minutes < 0) {
    minutes = -1;
  }

  return minutes;
};

export default useBusCountDown;
