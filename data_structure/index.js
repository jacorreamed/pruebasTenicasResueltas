function findMissingNumber(arr) {
  // calculate the sum of the number in the array
  const sum = arr.reduce((prev, current) => prev + current, 0);
  // calculate the real value
  const correctSum = (arr.length + 1) * ((1 + (arr.length + 1)) / 2);
  return correctSum - sum;
}

function existSum(arr,value) {
  var cond = false

  return cond
}

module.exports = {
  findMissingNumber,
  existSum
};
