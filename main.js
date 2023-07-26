// Given an integer array nums that does not contain any zeros,

//  find the largest positive integer k such that -k also
//   exists in the array.
// Return the positive integer k. 

// ✅If there is no such integer, return -1.


// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.

// Input: nums = [-1,2,-4,4,5]
// Output: 4
// Input: nums = [-1,2,-3,4]
// Output: -1


function findLargestK(nums) {
  const uniqueNums = new Set(nums);
  let maxK = -1;

  for (const num of nums) {
    if (uniqueNums.has(-num)) {
      maxK = Math.max(maxK, Math.abs(num));
    }
  }

  return maxK !== -1 ? maxK : -1;
}

const nums1 = [-1, 2, -3, 3];
console.log(findLargestK(nums1));  // Output: 3

const nums2 = [-1, 2, -4, 4, 5];
console.log(findLargestK(nums2));  // Output: 4 

const nums3 = [-1, 2, -3, 4];
console.log(findLargestK(nums3));  // Output: -1
