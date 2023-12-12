/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/
// function searchNum (target, nums) {
//   if (!nums.length) return - 1;
//   let left = 0;
//   let right = nums.length - 1;
//   let mid;
//   while (left <= right) {
//     mid = left + ((right - left) >> 1);
//     if (nums[mid] === target) {
//       return mid;
//     }
//     if (nums[mid] < target) {
//       left = mid + 1;
//     }
//     if (nums[mid] > target) {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(searchNum([1,2,3,4,5,6,7,8], 4));第一步：基于二分法的思路，先找mid

// 第一步：基于二分法的思路，先找mid
// 第二步：判断mid 和 first element的大小关系，确立mid所在的区间
// 第三步：分两部分讨论：
// 在左侧升序区间中，若target >= left 同时 target < mid, 说明target在mid的左侧，
// 应该在[left, mid]之间找，此时执行right = mid - 1；否则target在mid的右侧，在[mid, right]之间找， 此时left = mid + 1;
// 在右侧升序区间中，若target > mid 同时 target <= right , 说明target在mid的右侧，
// 应该在[mid, right]之间找，此时执行left = mid + 1；否则target在mid的左侧，应该在[left, mid]之间找，此时right = mid -1
// 终止条件是，mid element === target，结束
// const search = function(nums, target) {
//   if (!nums.length) return -1
//   let left = 0, right = nums.length - 1, mid
//   while (left <= right) {
//       mid = left + ((right - left) >> 1)
//       if (nums[mid] === target) {
//           return mid
//       }
//       if (nums[mid] >= nums[left]) {
//           if (target >= nums[left] && target < nums[mid]) {
//               right = mid - 1
//           } else {
//               left = mid + 1
//           }
//       } else {
//           if (target > nums[mid] && target <= nums[right]) {
//               left = mid + 1
//           } else {
//               right = mid - 1
//           }
//       }
//   }
//   return -1
// }

// var search = function(nums, target) {
//   if (!nums.length) return -1;
//   let left = 0, right = nums.length - 1, mid;
//   while (left <= right) {
//     mid = left + ((right - right) >> 1);
//     if (nums[mid] === target) {
//       return mid;
//     }
//     if (nums[mid] >= nums[left]) {
//       if (target >= nums[left] && target <= nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (target > nums[mid] && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
//   return -1;
// };

var search = function (nums, target) {
  if (!nums.length) return - 1;
  let left = 0, right = nums.length -1, mid;
  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return - 1;
};
// 第一步：基于二分法的思路，先找mid
// 第二步：判断mid 和 first element的大小关系，确立mid所在的区间
// 第三步：分两部分讨论：
// 在左侧升序区间中，若target >= left 同时 target < mid, 说明target在mid的左侧，
// 应该在[left, mid]之间找，此时执行right = mid - 1；否则target在mid的右侧，在[mid, right]之间找， 此时left = mid + 1;
// 在右侧升序区间中，若target > mid 同时 target <= right , 说明target在mid的右侧，
// 应该在[mid, right]之间找，此时执行left = mid + 1；否则target在mid的左侧，应该在[left, mid]之间找，此时right = mid -1
// 终止条件是，mid element === target，结束
var search = function (nums, target) {
  // 如果数组长度为0则返回-1
  if (!nums.length) return -1;
  let left = 0, right = nums.length - 1, mid;
  while (left <= right) {
    // 确认中间值
    mid = left + ((right - left) >> 1);
    // 如果找到了
    if (nums[mid] === target) {
      return mid;
    }
    // 左侧升序区间
    if (nums[mid] >= nums[left]) {
      // 若target >= left 同时 target < mid, 说明target在mid的左侧，
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
        // 否则target在mid的右侧，在[mid, right]之间找， 此时left = mid + 1;
      } else {
        left = mid + 1;
      }
    // 右侧升序区间
    } else {
      // 若target > mid 同时 target <= right , 说明target在mid的右侧，
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
        // 否则target在mid的左侧，应该在[left, mid]之间找，此时right = mid -1
      } else {
        right = mid - 1;
      }
    }

  }
  return -1;
}
console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([1], 0));