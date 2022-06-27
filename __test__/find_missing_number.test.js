const { findMissingNumber,existSum } = require('../data_structure');

describe(`Given an array of positive numbers from 1 to n,
  such that all numbers from 1 to n are present except one number x.
  You have to find x. The input array is not sorted.
  Look at the below array and give it a try before checking the solution.`, () => {
  test('when array equals to [1,3,4,2,6] result must be 5', () => {
    expect(findMissingNumber([1, 3, 4, 2, 6])).toBe(5);
  });
  test('when array equals to [3,4,2,6,5,7,8,9] result must be 1', () => {
    expect(findMissingNumber([3, 4, 2, 6, 5, 7, 8, 9])).toBe(1);
  });
});


describe(`Given an array of integers and a value,
  determine if there are any two integers in the array
  whose sum is equal to the given value.
  Return true if the sum exists and return false if it does not.`,()=>{
    test(`when array equals to [5,7,1,2,8,4,3] an value equal to 10`,()=>{
      expect(existSum([5,7,1,2,8,4,3],10)).toBe(true)
    })
    test(`when array equals to [5,7,1,2,8,4,3] an value equal to 19`,()=>{
      expect(existSum([5,7,1,2,8,4,3],10)).toBe(false)
    })
  })