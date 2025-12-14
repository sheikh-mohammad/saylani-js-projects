let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let clock = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let today = new Date();
let dob = new Date(document.getElementById('date').value);

let diff = today - dob;

let ageYear = today.getFullYear() - dob.getFullYear();
let ageMonth = today.getMonth() - dob.getMonth();
let ageDay = today.getDate() - dob.getDate();
let dayOfWeek = daysOfWeek[dob.getDay()];

let daysLived = Math.floor(diff / (1000 * 60 * 60 * 24));
let weeksLived = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
let monthsLived = ageYear * 12 + ageMonth;
let hoursLived = Math.floor(diff / (1000 * 60 * 60));
let minutesLived = Math.floor(diff / (1000 * 60));
let secondsLived = Math.floor(diff / 1000);
let millisecondsLived = Math.floor(diff);

console.log(ageYear);
console.log(ageMonth);
console.log(ageDay);
console.log(dayOfWeek);
console.log(daysLived);
console.log(weeksLived);
console.log(monthsLived);
console.log(hoursLived);
console.log(minutesLived);
console.log(secondsLived);
console.log(millisecondsLived);