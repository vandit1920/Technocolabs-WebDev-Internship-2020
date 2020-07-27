// this is my age and we have used var so that we change it in future
var myAge = 12;
// 
var earlyYears = 2;
earlyYears *= 12;
// 
var laterYears = myAge - 2;
// 
laterYears *= 4;
// check the value
console.log(earlyYears,laterYears);
// add them
var myAgeInDogYears = laterYears + earlyYears;
// name
var myName = "VanDIT";
myName = myName.toLowerCase();
console.log('My name is ' +myName+' . I am '+myAge+' years old in human years which is ' +myAgeInDogYears+' years old in dog years.');
