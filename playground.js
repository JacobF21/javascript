function fun1(n){
  let sum =0;
  for(let i=1;i<=n;i++){
    sum+=i;
  }
  return sum;
}

function fun2(n){
  return (1+n)*n/2;

}

let startTime = window.performance.now();
fun1(9999999999);
let endTime = window.performance.now();
let timeDiff = (endTime - startTime)/1000;
console.log(`It takes ${timeDiff} seconds for fun1`);

let startTime2 = window.performance.now();
fun2(9999999999);
let endTime2 = window.performance.now();
let timeDiff2 =(endTime2-startTime2)/1000;
console.log(`It takes ${timeDiff2} seconds for fun2`);
