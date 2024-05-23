let array = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
let target = 1.5;

function averagePair(arr, target) {
  let result = [];
  let left = 0;
  let right = arr.length-1;
  while(left<right){
    let temp =(arr[left]+arr[right])/2;
    if(temp< target){
      left++;
    } else if(temp>target){
      right--;
    } else if(temp === target){
      result.push(arr[left],arr[right]);
      left++;
      right--;
    }
  }
  return result;
}

console.log(averagePair(array, target));