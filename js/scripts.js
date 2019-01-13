/*

// TODO:
On button click
Generate random Hex value
Change background color to tha value
Output Hex value as text

*/

// const hexColor = null;

const hexadecimalIntegers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

const lengthOfArray = hexadecimalIntegers.length; // Get the lenth of hexadecimalIntegers array

const randomNumber = Math.floor(Math.random() * lengthOfArray); // Randomly pick a number, no larger than the length of hexadecimalIntegers

function createColor() {
  // let hexColorValue = #
  // let hexColorR = hexadecimalIntegers[randomNumber];
  // let hexColorG = hexadecimalIntegers[randomNumber];
  // let hexColorB = hexadecimalIntegers[randomNumber];
  let hexColor = hexadecimalIntegers[randomNumber];
  console.log("The background-color is: " + hexColor);
  // let body = document.querySelector("body"); // Target the body element
  // body.setAttribute('style', 'background-color: ' + hexColor);
  return hexColor;
}

// createColor();

function createHexString() {
  let hexColor = createColor(); // Passes the result of createColor() into createHexString()

  let hexString = "";

  let hexStringLength = hexColor.length;

  let i = 0;

  console.log("The hexStringLength is: " + hexStringLength);

  //How to trigger createColor() 6 unique times and add to a new string

  while (i < 6) {
    console.log("The string is:" + hexStringLength)

    let hexString = hexColor;

    i++;

    console.log(hexString);

    return hexString;


   }

}

createHexString();
