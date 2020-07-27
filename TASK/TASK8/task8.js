var userName = "Nathan";
userName  ? console.log(`Hello ,${userName}`) : console.log("Hello");
var userQuestion = 'What do you wanna ask?';
console.log(userName + ', ' +userQuestion);
// create randonm variable
var randomNumber = Math.floor(Math.random()*8);
console.log(randomNumber);
var eightBall = "";
switch(randomNumber) {
    case 1:
      eightBall = "It is certain";
      break;
    case 2:
      eightBall = "It is decidedly so";
      break;
    case 3:
     eightBall = "Reply hazy try again";
      break;
    case 4:
      eightBall = "Cannot predict now";
      break;
    case 5:
     eightBall = "Don't count on it";
      break;
    case 6:
      eightBall = "My sources say no";
      break;
    case 7:
      eightBall = "Outlook not so good";
      break;
    default:
    //   eightBall = "lol";
      break;   
}
console.log(eightBall);

//if else method 
// if (randomNumber == 1) {
//     eightBall = "It is certain";
// } else if (randomNumber == 2) {
//     eightBall = "It is decidedly so";
// }
