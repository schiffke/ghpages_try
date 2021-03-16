var lowerCaseStr = "should pass the basic tests"

function isLowerCaseLetter(c) {
  if (c.charCodeAt(0) <= 122 && c.charCodeAt(0) >= 97) {
    return true
  }
  return false
}

function toUpperCase(c) {
  if (isLowerCaseLetter(c)) {
    return (String.fromCharCode(c.charCodeAt(0) - 32))
  }
  return c
}

function getCharacterLength(str) {
  return [...str].length;
}

function jadenCase(str) {
  str = " " + str
  var x = getCharacterLength(str)
  var out = ""
  for (i = 0; i < x; i++) {
    if (!isLowerCaseLetter(str[i])) {
      i++
      out += str[i]
    } else {
      out += str[i]
    }
  }
}
// Leerzeichen an den Anfang, immer nur einmal uppercase nachdem isLowerCaseLetter == false 
console.log(jadenCase("hallo mein name ist nick"))
