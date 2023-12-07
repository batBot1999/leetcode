/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var twoSum = function(nums, target) {
//   // 县创建一个map
//   const map = new Map();
//   // 遍历nums数组
//   for (let i = 0; i < nums.length; i++) {
//     const res = target - nums[i];
//     // 检查map中有没有这个数字，注意map.has的用法检查的是有没有这个key
//     if (map.has(res)) {
//       // 注意是返回下标
//       return [map.get(res), i];
//     } else {
//       // 因为map,所以要把值当做key,下标当做value
//       map.set(nums[i], i);
//     }
//   }
//   return [];
// };

// var twoSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const res = target - nums[i];
//     if (map.has(res)) {
//       return [map.get(res), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
// }


//   // 县创建一个map
//   // 遍历nums数组
//     // 检查map中有没有这个数字，注意map.has的用法检查的是有没有这个key
//       // 注意是返回下标
//       // 因为map,所以要把值当做key,下标当做value

// var twoSum = function(nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const res = target - nums[i];
//     if (map.has(res)) {
//       return [map.get(res), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
//   return [];
// }
// var twoSum = function (nums, target) {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const res = target - num;
//     if (res in map) {
//       return [i, map[res]];
//     } else {
//       map[num] = i;
//     }
//   }
// };
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length;i ++) {
    for(let j = i + 1; j <nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
// console.log(twoSum([2, 7, 11, 15], 9)); console.log(twoSum([3, 2, 4], 6)); console.log(twoSum([3, 3], 6));

// 双指针
// 空间复杂度O(n)
// 时间复杂度O(nlogn)
var twoSum = function (nums, target) {
  let n = nums.length;
  let idxarr = new Array(n);
  let ret = new Array(2);
  for (let i = 0; i < n; i++) {
    idxarr[i] = i;
  }
  idxarr.sort((i, j) => nums[i] - nums[j]);
  for (let i = 0; i < n; i++) {
    const val = nums[idxarr[i]];
    const j = binary_search(nums, idxarr, i + 1, target - val);
    if (j === -1) continue;
    let a = idxarr[i];
    let b = idxarr[j];

    if (a > b) {
      ret = [b, a];
    }
    ret = [a, b];
  }

  return ret;
};

function binary_search(nums, idxarr, left, x) {
  // 右指针
  let right = idxarr.length - 1;
  // 当左指针未抵达右指针
  while (left <= right) {
    // 中间值 >>1就是除以2
    const mid = left + ((right - left) >> 1);
    // 
    if (nums[idxarr[mid]] === x) {
      return mid;
    } else if (nums[idxarr[mid]] > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));