let array = [-11,0,1,2,3,9,14,17,21]
target = 1.5;


function averagePair(arr, target){
  let result =[];
  for(let i =0;i<arr.length-2;i++){
    for(let j =i+1;j<arr.length-1;j++){
      if((arr[i]+arr[j])/2 === target){
        result.push(arr[i],arr[j]);
      }
    }
  }
  return result;
}

console.log(averagePair(array,target));

