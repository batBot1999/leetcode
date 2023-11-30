/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
    // 指针右移
  while (left <= right) {
    // 取中间
    mid = Math.floor(left + (right - left) / 2);
    // 如果当前值就是target
    if (nums[mid] === target) {
      return mid;
      // 如果当前值比target大，右指针左移
    } else if (target < nums[mid]) {
      right = mid - 1;
      // 如果当前值比target小，左指针右移
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));