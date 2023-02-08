export const EventCardDateParser = (
  startingDate: string,
  endingDate: string,
) => {
  const start = new Date(startingDate);
  const end = new Date(endingDate);
  if (startingDate === endingDate) {
    return `${start.getMonth() + 1}월 ${start.getDate()}일`;
  } else {
    return `${start.getMonth() + 1}월 ${start.getDate()}일 ~ ${
      end.getMonth() + 1
    }월 ${end.getDate()}일`;
  }
};
