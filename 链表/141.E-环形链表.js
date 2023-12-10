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
// var hasCycle = function (head) {
//   let slow = head;
//   let fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       return true;
//     }
//   }
//   return false;
// }

// 暴力解法
// cur1 每遍历到一个节点，就让 cur2 从头遍历之前所有节点
// 如果 cur2 走到 cur1，所用的步数二者一样，则相遇点不是入环点
// 如果 cur2 走到 cur1，用的步数二者不一样，则相遇点是入环点，cur1比 cur2多走一个环
// var hasCycle = (head) => {
//   let cur1 = head;    // cur1指针
//   let step1 = 0;      // cur1指针走的步数
//   while (cur1) {
//     step1++;
//     let cur2 = head;  // cur2指针从头遍历
//     let step2 = 0;    // cur2指针走的步数
//     while (cur2) {
//       step2++;
//       if (cur1 == cur2) {     // cur1和cur2的元素相同
//         if (step1 == step2) { // 如果走的步数一样，即走到了cur1这里
//           break;              // 退出内层while
//         } else {              // 相遇但步数不一样
//           return true;        // 说明链表有环。cur1比cur2多走一个环
//         }
//       }
//       cur2 = cur2.next;   // cur2一次走一步
//     }
//     cur1 = cur1.next;     // cur1一次走一步
//   }
//   return false;
// };

// var hasCycle = (head) => {
//   let cur1 = head; //cur1快指针
//   let step1 = 0;
//   while (cur1){
//     step1++;
//     let cur2 = head; // cur2慢指针
//     let step2 = 0;
//     while (cur2) {  // cur1走一步,cur2走一圈
//       step2++;
//       if (cur1 == cur2) {
//         if (step1 == step2) { // 如果步数相同就说明cur2走到了cur1
//           break;
//         } else {
//           return true; // 如果相遇但步数不同就说明多走了一圈
//         }
//       }
//       cur2 = cur2.next;
//     }
//     cur1 = cur1.next;
//   }
//   return false;
// }

var hasCycle = (head) => {
  // 定义cur1快指针和step1初始值
  let cur1 = head;
  let step1 = 0;
  // 当cur1不为null时,前进一步,步数增加
  while (cur1) {
    step1++;
    let cur2 = head;
    let step2 = 0;
  // 当cur2不为null时,前进一步,步数增加
    while (cur2) {
      step2++;
      // 如果cur1和cur2相等说明走到一起了
      if (cur1 == cur2) {
      // 如果步数相同说明cur2追上了cue1,但不是环
        if (step1 ==step2) {
          break;
        } else {
          // 步数不同才说明夺走了一圈追上了
          return true;
        }
      }
      cur2 = cur2.next;
    }
    cur1 = cur1.next;
  }
  return false;
}

// var hasCycle = (head) => {
//   let cur1 = head;
//   let step1 = 0;
//   while (cur1) {
//     step1++;
//     let cur2 = head;
//     let step2 = 0;
//     while (cur2) {
//       step2++;
//       if (cur1 == cur2) {
//         if (step1 == step2) {
//           break;
//         } else {
//           return true;
//         }
//       }
//       cur2 = cur2.next;
//     }
//     cur1 = cur1.next;
//   }
//   return false;
// }


console.log(hasCycle([3, 2, 0, -4]));
console.log(hasCycle([1, 2]));
console.log(hasCycle([1]));