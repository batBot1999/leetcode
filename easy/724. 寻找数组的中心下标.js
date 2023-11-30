/**
 * @param {number[]} nums
 * @return {number}
 */
//  var pivotIndex = function(nums) {
//   // 先计算总和
//   const total = nums.reduce((a, b) => a + b, 0);
//   // 定义左侧总和
//   let sum = 0;
//   // 遍历数组
//   for (let i = 0; i < nums.length; i++) {
//     // 如果找到一个数字，左侧总和 = 总和 - 当前数字
//     if (sum === total - sum - nums[i]) {
//     // if (2 * sum + nums[i] === total) {
//       return i;
//     }
//     // 左侧和加上当前数字
//     sum += nums[i];
//   }
//   return -1;
// };

var pivotIndex = function (nums) {
  //   // 先计算总和
  //   // 定义左侧总和
  //   // 遍历数组
  //     // 如果找到一个数字，左侧总和 = 总和 - 当前数字 - 左侧和
  //     // 否则左侧和加上当前数字

  const total = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === total - nums[i] - leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}

// 时间复杂度：O(n)O，其中 n 为数组的长度。
// 空间复杂度：O(1)。
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));