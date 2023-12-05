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

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i];
    if (map.has(res)) {
      return [map.get(res), i];
    } else {
      map.set(nums[i], i);
    }
  }
}


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
                  // console.log(twoSum([2, 7, 11, 15], 9)); console.log(twoSum([3, 2, 4], 6)); console.log(twoSum([3, 3], 6));