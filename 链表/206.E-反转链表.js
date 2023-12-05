/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 链表的头节点的next应该指向null
// 其余节点应该反过来指向他的上一个节点
// 用cur表示我们当前遍历到的节点,pre指向上一个节点,比如对于头节点他的pre是null,那么应该把当前节点next修改为上一个节点
// 所以两个变量不够,一旦修改当前节点next,就不知道它原来的next是谁了,所以要nxt存一下
// 修改之后就可以修改下一个节点,做法是把pre更新成cur,把cur更新成nxt
// 等所有节点修改完,cur为空,pre为原链表最后一个节点,也就是反转后链表的头节点,返回pre
// var reverseList = function (head) {
//   let pre = null, cur = head;
//   while (cur) {
//       const nxt = cur.next;
//       cur.next = pre;
//       pre = cur;
//       cur = nxt;
//   }
//   return pre;
// };
// var reverseList = function (head) {
//   let pre = null, cur = head;
//   // 在cur为null之前,每一个节点都要反转
//   while (cur) {
//     // 存一下
//     const nxt = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = nxt;
//   }
//   return pre;
// }

var reverseList = function (head) {
  let pre = null, cur = head;
  while (cur) {
    const nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
}
// 时间复杂度：O(n)\mathcal{O}(n)O(n)，其中 nnn 为链表节点个数。
// 空间复杂度：O(1)\mathcal{O}(1)O(1)，仅用到若干额外变量。
