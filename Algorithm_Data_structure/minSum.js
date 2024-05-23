arr1=[2,7,3,0,6,300,-5,-12,-11];
window = 4;

function minSum(arr, window){
  let min = 0;
  for(let i=0;i<window;i++){
    min+=arr[i];
  }
  let temp =min;
  for(let j=window;j<arr.length-1;j++){
    temp=temp+arr[j]-arr[j-window];
    console.log(temp);
    if(temp < min){
      min=temp;
    }
  }
  return min;
}

console.log(minSum(arr1,window));