/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and should see the word odd or even depending on the integer.  If an integer is not provide, the user should see a usage statement reminding them of the how to run this code.
*/

// get input using getargs
let getargs = require("../modules/getargs/index.js")
let input = getargs.getStringArg()

/**** Do not modify anything above this line ****/

// make sure that the user entered a string
if (!input) {
  //use console.log to add a usage statement and let the user know that if a string contains a space it must be quoted
  console.log('usage: node 3-string-contains-hello <string>');
  console.log('To include spaces, use quotes.');
} 

// check to see if string contains hello
// if it does report back the position in the string where it begins

else {
  //  write a logical expression to test if the input contains a "hello"
  if (input.indexOf('hello') > -1) {
    //  use console.log and a template literal at what position the hello was found
    console.log(`hello was found at position ${input.indexOf('hello')}`);
  } else {
    //  use console.log to indicate that the hello was not found
    console.log(`hello was not found in the string ${input}.`);
  }
}
