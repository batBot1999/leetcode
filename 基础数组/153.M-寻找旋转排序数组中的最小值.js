/**
 * @param {number[]} nums
 * @return {number}
 */
// 在最小值右侧的元素（不包括最后一个元素本身）,它们的值一定都严格小于nums[nums.length -1];而在最小值左侧的元素,它们的值一定都严格大于 nums[nums.length -1]
// var findMin = function(nums) {
//   var left = 0;
//   var right = nums.length - 1;
//   while (left < right) {
//       var mid = (left + right) >> 1;
//       if (nums[mid] > nums[right]) {
//           left = mid + 1;
//       } else {
//           right = mid;
//       }
//   }
//   return nums[left];
// };


//  var findMin = function(nums) {
//   // 左右指针
//   var left = 0;
//   var right = nums.length - 1;
//   // 缩小范围
//   while (left < right){
//     var mid = (left + right) >> 1;
//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       right = mid; // 只缩小右边范围就可以了
//     }
//   }
//   return nums[left];
// };

// var findMin = function(nums) {
//   let low = 0;
//   let high = nums.length - 1;
//   while (low < high) {
//       const pivot = low + Math.floor((high - low) / 2);
//       if (nums[pivot] < nums[high]) {
//           high = pivot;
//       } else {
//           low = pivot + 1;
//       }
//   }
//   return nums[low];
// };

var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
      const pivot = low + Math.floor((high - low) / 2);
      if (nums[pivot] < nums[high]) {
          high = pivot;
      } else {
          low = pivot + 1;
      }
  }
  return nums[low];
};
// 时间复杂度：时间复杂度为 O(log⁡n)，其中 n是数组nums 的长度。在二分查找的过程中，每一步会忽略一半的区间，因此时间复杂度为 O(log⁡n)。
// 空间复杂度：O(1)O(1)O(1)。

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
}