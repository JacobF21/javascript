arr1=[2,7,3,0,6,300,-5,-12,-11];
window =3;

function maxSum2(arr, window){
  let max=Number.MIN_VALUE;
  for(let i =0;i<window;i++){
    max+=arr[i];
  }

  let temp = max;
  for(let j= window;j<arr1.length-1;j++){
    temp = temp+arr[j]-arr[j-window];
    if(temp > max){
      max=temp;
    }
  }
  return max;
}

console.log(maxSum2(arr1,window));

function maxSum1(arr, window){
  let max = Number.MIN_VALUE;
  for(let i=0;i<arr.length-2;i++){
    let sum = 0;
    for(let j=i;j<i+3;j++){
      sum+=arr[j];
    }
    console.log(sum);
    if(sum > max ){
      max=sum;
    }
  }
  return max;
}

console.log(maxSum1(arr1,window));

