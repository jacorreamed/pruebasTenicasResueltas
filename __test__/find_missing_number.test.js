const { findMissingNumber, existSum, existSumDigits,permutations } = require('../data_structure');

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
  Return true if the sum exists and return false if it does not.`, () => {
  test('when array equals to [5,7,1,2,8,4,3] an value equal to 10', () => {
    expect(existSum([5, 7, 1, 2, 8, 4, 3], 10)).toBe(true);
  });
  test('when array equals to [5,7,1,2,8,4,3] an value equal to 19', () => {
    expect(existSum([5, 7, 1, 2, 8, 4, 3], 19)).toBe(false);
  });
});

describe(`Given an array of integers nums and an integer target,
  return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution,
  and you may not use the same element twice. You can return the answer in any order.`,()=>{
    test(`When nums = [3,2,4] and target = 6`,()=>{
      expect(existSumDigits([3,2,4],6)).toEqual([1,2]);
    });
    test(`When nums = [3,3] and target = 6`,()=>{
      expect(existSumDigits([3,3],6)).toEqual([0,1]);
    });
});


describe(`Given a string, write a function that receives a string as input and+
  computes all possible permitations`,()=>{
    test(`When string is 'abc' result must be ['abc','acb','bac','bca','cba','cab']`,()=>{
      expect(permutations('abc')).toEqual(['abc','acb','bac','bca','cba','cab']);
    })
  }
)
