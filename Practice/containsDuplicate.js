/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let newNum = new Set();
    
    nums.forEach(num => newNum.add(num));
    
    
    if (newNum.size !== nums.length) return true;
    else return false;
   
    console.log(newNum.size);
};
