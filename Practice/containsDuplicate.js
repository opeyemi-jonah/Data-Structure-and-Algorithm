/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //Create a Set object,because Sets only allows unique values
    let newNum = new Set();
    
    //add each element of the nums array to the set
    nums.forEach(num => newNum.add(num));
    
    //check if the size of the Set object is not the same as the nums array length
    //if the size of te set and the length of the array are equal return false
    if (newNum.size !== nums.length) return true;
    else return false;
   
    console.log(newNum.size);
};
