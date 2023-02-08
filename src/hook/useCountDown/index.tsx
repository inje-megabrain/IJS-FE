import {useEffect, useState} from 'react';

const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const days: string = Math.floor(countDown / (1000 * 60 * 60 * 24)).toString();
  let hours: string | number = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  if (hours < 10) {
    hours = '0' + hours.toString();
  }
  let minutes: string | number = Math.floor(
    (countDown % (1000 * 60 * 60)) / (1000 * 60),
  );
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }
  let seconds: string | number = Math.floor((countDown % (1000 * 60)) / 1000);
  if (seconds < 10) {
    seconds = '0' + seconds.toString();
  }

  return [days, hours, minutes, seconds];
};

export default useCountdown;
