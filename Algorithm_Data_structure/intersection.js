let arr1 = [15,3,6,8,24,26];
let arr2 = [11,3,9,6,15,8];
arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

function binarySearch(arr, num){
  let min=0;
  let max=arr.length-1;
  while(min<=max){
    let middle = Math.floor((min+max)/2);
    if(num<arr[middle]){
      max = middle-1;
    } else if(num > arr[middle]){
      min=middle+1;
    } else if(num === arr[middle]){
      return arr[middle];
    }
  }
  return -1;
}

let result =[];
for(let i=0;i<arr1.length;i++){
    if(arr1[i] === binarySearch(arr2,arr1[i])){
    result.push(arr1[i]);
    }
}

console.log(result);

