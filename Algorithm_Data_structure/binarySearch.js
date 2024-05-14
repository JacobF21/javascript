
//binary search can only apply on "SORTED ARRAY/DATASET"
let arr =[1,2,3,9,16,27,33,89,96,123,189,255,333];

//binary search
function binarySearch(array, num){
  let min = 0;
  let max = array.length-1;
  let step =0;
  while(min<=max){
    step++;
    let middle = Math.floor((max+min)/2);
    if(num > array[middle] ){
      min=middle+1;
    } else if(num < array[middle]){
      max=middle -1;
    } else if(num === array[middle]){
      console.log(num + " found at index " + middle + " with "+step+" steps");
      return middle
    }
  }
  console.log(num + " is not inside the array");
  return -1;
}

binarySearch(arr,189);

// if the size of the array is 8, the worest case it will take 3 steps to finish the search
// if the size of the array is 64, the worest case it will take 6 steps(log(2) 64/ 2^6) to finish the search
// if the size of the array is n, the worest case it will take 6 steps(log(2) n) to finish the search
/*
Worst case = log n
Best case = 1
Average case = log n
*/








