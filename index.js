function reverseString(word){
  return word.split("").reverse().join("")
}

function isPalindrome(word){
  return word == reverseString(word)
}




if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;