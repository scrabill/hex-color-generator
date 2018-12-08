/*

// TODO:
On button click
Generate random Hex value
Change background color to tha value
Output Hex value as text

*/

const hexadecimalIntegers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

const lengthOfArray = hexadecimalIntegers.length; // Get the lenth of hexadecimalIntegers array

const randomNumber = Math.floor(Math.random() * lengthOfArray); // Randomly pick a number, no larger than the length of hexadecimalIntegers
