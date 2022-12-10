function reverse(word) {
  // 'true' => 'eurt'
  //const wordArray = word.split("");
  //const reversedWordArray = wordArray.reverse();
  //const reversedWord = reversedWordArray.join(""); 
  //return reversedWord;
  return word.split("").reverse().join(""); 
}
function isPalindrome(word) {
  // Write your algorithm here
 // That means if the word is the same as the word in reverse should return true.
  const reversedWord = reverse(word);

  return word === reversedWord 
}

/* 
  Add your pseudocode here
  That means if the word is the same as the word in reverse should return true.

   if the input is te same as the revese input 
   return true
   else
   return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("zz"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
