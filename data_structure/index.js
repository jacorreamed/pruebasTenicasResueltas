function findMissingNumber(arr) {
  //Big O notation (time): O(n)
  // calculate the sum of the number in the array
  const sum = arr.reduce((prev, current) => prev + current, 0);
  // calculate the real value
  const correctSum = (arr.length + 1) * ((1 + (arr.length + 1)) / 2);
  return correctSum - sum;
}

function existSum(arr,value) {
  var cond = false
  
  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {
      if(i==j)
      continue
      if((arr[i]+arr[j])==value){
        cond = true
        break
      }
    }
  }
  return cond
}

module.exports = {
  findMissingNumber,
  existSum
};
