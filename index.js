function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
/* 
  Add your pseudocode here
  Initialize two pointers named left and right to the beginning and end of the word respectively.
While left is less than right, do the following:
a. If the character at the left pointer is not equal to the character at the right pointer, return false.
b. Increment the left pointer and decrement the right pointer.
If the function has not yet returned false, the word is a palindrome, so return true.
*/
/*
  Add written explanation of your solution here
  The function isPalindrome takes in a word as an argument and returns a boolean indicating whether the word is a palindrome or not. A palindrome is a word that is spelled the same forwards and backward.
The algorithm starts by initializing two pointers left and right at the beginning and end of the word, respectively. The algorithm then iterates through the word, comparing the characters at the left and right pointers. If the characters are not equal, the algorithm immediately returns false, indicating that the word is not a palindrome. Otherwise, the pointers are moved inward, towards the center of the word, and the process repeats until the pointers meet in the middle.
If the algorithm has not yet returned false, the word is a palindrome, so the function returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
