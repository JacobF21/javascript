let arr1 = [15,3,6,8,24,26];
let arr2 = [11,3,9,6,15,8];

function intersection(arr1,arr2){
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter={};

  for(let i=0;i<arr3.length;i++){
    if(!counter[arr3[i]]){
      counter[arr3[i]] =1;
    } else{
      counter[arr3[i]]++;
    }
  }
  for(let property in counter){
    if(counter[property]>=2){
      result.push(property);
    }
  }
  console.log(result);
  return result;
}

intersection(arr1,arr2);