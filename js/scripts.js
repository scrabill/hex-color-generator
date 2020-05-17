let body = document.querySelector("body")
let currentColor = ''

generateRandomHexColor = () => {
  const hexadecimalIntegers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  let hexColor = "#"

  while (hexColor.length < 7) {
    hexColor += hexadecimalIntegers[ Math.round( Math.random() * hexadecimalIntegers.length ) ]
  }

  return hexColor
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    document.querySelector("body").style.backgroundColor = generateRandomHexColor()
});
