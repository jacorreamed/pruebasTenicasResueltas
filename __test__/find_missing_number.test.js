const {find_missing_number} = require('../data_structure')

describe(`Given an array of positive numbers from 1 to n,
  such that all numbers from 1 to n are present except one number x.
  You have to find x. The input array is not sorted.
  Look at the below array and give it a try before checking the solution.`, () => {
  test(`when array equals to [1,3,4,2,6] result must be 5`,()=>{
    expect(find_missing_number([1,3,4,2,6])).toBe(5)
  })
});
