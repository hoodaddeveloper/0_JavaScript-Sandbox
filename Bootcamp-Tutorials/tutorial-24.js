myVariable++;
// 1 - What type of error will be thrown on the line above: ReferenceError

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: TypeError

const myRandomNumber = Math.random();
// 3 - What type of error will be thrown on the line above: SyntaxError

function isSumBigger(number1, number2, total) {
  const sum = number1 + number2;

  if (sum > total) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log("isSumBigger(1, 3, 2) returns: " + isSumBigger(1, 3, 2));

// Should return false
console.log("isSumBigger(1, 3, 5) returns: " + isSumBigger(1, 3, 5));

function capitalizeASingleWord(word) {
  // console.log(word);
  if (word.match(" ")) {
    console.log("Word value inside of if statement: " + word);
    return null;
  }

  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);

  firstLetter = firstLetter.toUpperCase();

  return firstLetter + restOfWord;
}

// Should return "Hey"
console.log(
  "capitalizeASingleWord('hey') returns: " + capitalizeASingleWord("hey")
);

// Should return null
console.log(
  "capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord("hey ho")
);

// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);

  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 < firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}

// Should return "blueberry"
console.log(
  "getLaterFirstLetter('avocado', 'blueberry') returns: " +
    getLaterFirstLetter("avocado", "blueberry")
);

// Should return "zebra"
console.log(
  "getLaterFirstLetter('zebra', 'aardvark') returns : " +
    getLaterFirstLetter("zebra", "aardvark")
);

// Should return null
console.log(
  "getLaterFirstLetter('astro', 'afar') returns: " +
    getLaterFirstLetter("astro", "afar")
);

// Link to String.repeat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function doubleString(string) {
  return string.repeat(2);
}

// Should return 'echoecho'
console.log("doubleString('echo') returns: " + doubleString("echo"));

// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
  return string.includes("cake");
}

// Should return true
console.log(
  "containsCake('I think cake is my soul mate.') returns: " +
    containsCake("I think cake is my soul mate.")
);

// Should return false
console.log(
  "containsCake('Pie is certainly the coolest dessert.') returns: " +
    containsCake("Pie is certainly the coolest dessert.")
);

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));