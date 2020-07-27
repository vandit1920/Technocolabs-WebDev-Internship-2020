// let can also be used to set variable
const kelvin = 293;
// we are subtracting 273 from kelvin to get celcius
let celcius = kelvin - 273;

console.log(kelvin);
console.log(celcius);

let ffarehnite = celcius * (9/5) + 32;
console.log(ffarehnite);

ffarehnite = Math.floor(ffarehnite);
console.log(ffarehnite);

console.log('The temperature is ' + ffarehnite + ' degrees Farehnite');

//additional practice 
let newton = celcius * (33/100);
newton = Math.floor(newton);
console.log('The newton is ' + newton);
