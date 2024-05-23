let str1 = "awesome";
let str2 = "foobar";
let str3 = "tacocat";
let str4 = "amanaplanacanalpanama";

function isPalindrome(str){
  for(let i =0;i<str.length/2;i++){
    if(str.charAt(i) !== str.charAt(str.length-1-i)){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));