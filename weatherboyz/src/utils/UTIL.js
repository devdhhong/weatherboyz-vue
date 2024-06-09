// 날짜 형식
const getDate = function () {
  const date = new Date();

  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString(); // 월은 0부터 시작하므로 1을 더해줌
  let day = date.getDate().toString();

  // 두 자리 형식으로 맞춤
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }

  return `${year}년 ${month}월 ${day}일`;
};

export {
    getDate 
};
