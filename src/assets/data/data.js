export const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const years = function (startYear) {
  var currentYear = new Date().getFullYear(),
    years = [];
  startYear = startYear || currentYear;
  while (startYear <= currentYear + 20) {
    years.push(startYear++);
  }
  return years;
};
export const yearList = years();
