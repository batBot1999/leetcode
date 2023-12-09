/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针解法
// 快指针迟早追上慢指针
// 时间复杂度O(n) 空间复杂度O(1)
// var hasCycle = function (head) {
//   let slow = head, fast = head;
//   // 如果快指针不为空且next不为空就可以继续走的话
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next; // 快指针每次多走一步
//     if (slow === fast) { // 如果追上了就是有环
//       return true;
//     }
//   }
//   return false;
// };
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

console.log(hasCycle([3, 2, 0, -4]));
console.log(hasCycle([1, 2]));
console.log(hasCycle([1]));