generateRandomHexColor = () => {
  const hexadecimalIntegers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  let hexColor = "#"

  while (hexColor.length < 7) {
    hexColor += hexadecimalIntegers[ Math.floor( Math.random() * hexadecimalIntegers.length ) ]
  }

  return hexColor
}

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let currentColor = generateRandomHexColor()

    document.querySelector("body").style.backgroundColor = currentColor
    document.querySelector("h2").innerText = currentColor
});

document.addEventListener('click', (event) => {
    console.log(event.target.tagName)

    let currentColor = generateRandomHexColor()

    if (event.target.tagName != "H2") {
      document.querySelector("body").style.backgroundColor = currentColor
      document.querySelector("h2").innerText = currentColor
    }

});
