let arr = [8,1,6,15,3,16,5,7,14,30,12];
let target = 60;


function minSubArray(arr,target){
  let left =0;
  let right = 0;
  let minLength =Infinity;
  let tempSum=0;
  while(right < arr.length){
    tempSum+=arr[right];
    while(tempSum >= target){
      //update the value of minLength
      if(minLength > right-left+1){
        minLength=right-left+1;
      }
      tempSum -= arr[left];
      left++;
    }
    right++;
  }
  if(minLength == Infinity){
    return 0;
  } else{
    return minLength;
  }
}

console.log(minSubArray(arr,target));





