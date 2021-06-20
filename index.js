const date = new Date();

const veiwYear = date.getFullYear();
const viewMonth = date.getMonth() + 1;

document.querySelector(
  ".year-month"
).innerText = `${veiwYear}년 ${viewMonth}월`;

console.log(viewMonth);
console.log(date);
