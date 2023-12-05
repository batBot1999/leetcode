/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// https://www.bilibili.com/video/BV1sd4y1x7KN/?spm_id_from=333.788&vd_source=17cb0095a92a7fc9a96573ae59fb160f
// 在反转结束后,pre指向这一段的末尾,cur指向反转这一段后续的下一个节点
// 如果把head = [1,2,3,4,5], left = 2, right = 4,反转后,2指向5(cur),1指向pre,此时组成14325
// 如果此段上一个节点为p0,那么p0指向pre,p0的next指向5(cur)
// 但当left等于1时,不存在p0,解决办法就是head前加一个哨兵节点
var reverseBetween = function(head, left, right) {
  // 设置dummy节点指向head
  let dummy = new ListNode(0, head);
  let p0 = dummy;
  // 从dummy出发循环left-1次，就会到达反转段的上一个节点
  for (let i = 0; i < left - 1; i++)
    p0 = p0.next;
  let pre = null, cur = p0.next;
  // 反转段有right-left+1个元素
  for (let i = 0; i < right - left + 1; i++) {
    const nxt = cur.next;
    cur.next = pre; // 每次循环只修改一个 next
    pre = cur;
    cur = nxt;
  }
  p0.next.next = cur;
  p0.next = pre;
  // left==1时,head被反转了,不能返回head
  return dummy.next;
};

var reverseBetween2 = function (head, left, right) {
  let dummy = new ListNode(0, head);
  let p0 = dummy;
  for (let i = 0; i < left - 1; i++)
   p0 = p0.next;
   let pre = null, cur = p0.next;
   for (let i = 0; i < right - left + 1; i++) {
    const nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
   }
   p0.next.next = cur;
   p0.next = pre;
   return dummy.next;
}
// 时间复杂度：O(n)\mathcal{O}(n)O(n)，其中 nnn 为链表节点个数。
// 空间复杂度：O(1)\mathcal{O}(1)O(1)，仅用到若干额外变量。
console.log(reverseBetween([1,2,3,4,5], 2, 4));