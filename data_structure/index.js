function findMissingNumber(arr) {
  // Big O notation (time): O(n)
  // calculate the sum of the number in the array
  const sum = arr.reduce((prev, current) => prev + current, 0);
  // calculate the real value
  const correctSum = (arr.length + 1) * ((1 + (arr.length + 1)) / 2);
  return correctSum - sum;
}

function existSum(arr, value) {
  // Big O : O(n)
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    let baz = value-arr[i];
    if(store.findIndex(e => e == baz) != -1)
    return true;
    store.push(arr[i]);
  }

  return false
}


function existSumDigits(arr,target){
  var queue = new Map();
  var found = false;
  var result = [];
  for(let i=0; i<arr.length;i++){
    if(i==0){
      queue.set(arr[i],i); //guardamos el valor del array como clave de la queue
      continue;
    }

    if(queue.has((target - arr[i]))){
      result.push(queue.get((target - arr[i])));
      result.push(i);
      break;
    }else{
      if(!queue.has(arr[i]))
        queue.set(arr[i],i);
    }
  }
  return result;
}

function permutations(str){
  //To solve this, I´ll use heap´s algorithm
  const output = [];

  let arr = str.split("");
  console.log(arr);

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output.map((ele)=>{
    return ele.join("")
  });
};

var addTwoNumbers = function(l1, l2) {
    return false;
};

module.exports = {
  findMissingNumber,
  existSum,
  existSumDigits,
  permutations,
  addTwoNumbers
};
