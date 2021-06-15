// javascript 에서 month 의 시작은 0 이므로 반드시 +1 을 해준다.

// 해당 달의 마지막 날짜 구하기
const today = new Date();
const lastOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);

// 2018년 2월의 마지막 날짜 구하기
const lastOfFeb2018 = new Date(2018, 2+1, 0);