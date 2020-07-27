let runnerNumber = Math.floor(Math.random()*1000);
var runnerReg = false;
var runnerAge = 19;
//you can change the runnerReg and runnerAge and play with the code to get different outputs
if (runnerAge>18 && runnerReg) {
    runnerNumber +=1000;
};
// 
if (runnerAge>18 && runnerReg===true){
    console.log('They will race at 9:30AM and your RaceNumber is: ' + runnerNumber);
} else if (runnerAge>18 && runnerReg===false) {
    console.log('They will race at 11::00AM and your RaceNumber is: ' + runnerNumber);
} else if( runnerAge >= 18 && runnerReg===false ){
    console.log('Your race will start at 12:30PM and your RaceNumber is: ' + runnerNumber);
} else {
    console.log("Please see the registration desk");
}
