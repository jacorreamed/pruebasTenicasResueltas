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

module.exports = {
  findMissingNumber,
  existSum,
};
