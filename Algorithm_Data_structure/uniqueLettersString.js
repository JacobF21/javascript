let str = "thisishowwedoit";

function uniqueLetterString(str){
  let left = 0;
  let right = 0;
  let maxLength = -Infinity;
  let counter ={};

  while(right<str.length){
    console.log(counter);
    if(counter[str[right]]){
      counter[str[left]]--;
      left++;
    } else{
      counter[str[right]] =1;
      right++;
      if((right-left) > maxLength){
        maxLength=right-left;
      }
    }
  }
  if(maxLength==-Infinity){
    console.log("Not exist");
    return null;
  }
  console.log(maxLength);
  return maxLength;
}

uniqueLetterString(str);


