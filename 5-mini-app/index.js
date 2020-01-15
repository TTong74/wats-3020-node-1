// write an app that meets requirements:
// * uses if/else
// * uses at least one operator +, -, *, /, %
// * reads an arg from the command line and provides usage if not present or wrong type
// suggestions:
// * convert Celsius temperature to Fahrenheit F =(C * 9/5) + 32.00
// * convert Fahrenheit to Celsius C = (F - 32) *  5/9
// * convert pennies to dollars, for example 136 pennies is $1.36

// get an integer using getargs
let getargs = require("../modules/getargs/index.js");
let input = getargs.getIntegerArg();

if (isNaN(input) || !Number.isInteger(input)) {
    console.log('Usage: 5-mini-app <integer>');
  } else {
    let dollar = Math.floor(input / 100);
    let penny = input % 100;
    let dollars = (dollar == 1) ? "dollar" : "dollars";
    let cents = (penny == 1) ? "cent" : "cents";
    let pennies = (input == 1) ? "penny" : "pennies";
    console.log(`${input} ${pennies} is ${dollar} ${dollars} and ${penny} ${cents}.`)
  }
  
// * convert Celsius temperature to Fahrenheit F =(C * 9/5) + 32.00

  if (isNaN(input) || !Number.isInteger(input)) {
    console.log('Usage: 5-mini-app <integer>');
  } else {
    let fahrenheit = (input * (9/5) + 32.00).toFixed();
    let degreesF = (fahrenheit == 1) ? "degree" : "degrees";
    let degreesC = (input == 1) ? "degree" : "degrees";
    console.log(`${input} ${degreesC} Celcius is ${fahrenheit} ${degreesF} Fahrenheit.`);
  }