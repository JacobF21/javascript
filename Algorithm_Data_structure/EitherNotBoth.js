function eitherNotBoth(num) {
  if (num % 3 === 0 && (num % 10 !== 0 || num % 10 !== 5)){
      console.log("c1");
      return true;
  } else if (num % 3 !== 0 && (num % 10 === 0 || num % 10 === 5) ){
      console.log("c2");
      return true;
  }
  return false;
}
console.log(eitherNotBoth(15));
console.log(15 % 10 !== 0 );
console.log (15 % 10 !== 5);