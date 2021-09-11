`
给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
说明:

- 字符串 S 的长度范围为 [1, 10000]。
- C 是一个单字符，且保证是字符串 S 里的字符。
- S 和 C 中的所有字母均为小写字母。

`;

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  const res = []; // 定义返回的数组
  for (let i = 0; i < S.length; i++) {
    let diff = 0; // 定义指针偏移量

    while (
      (i - diff >= 0 || i + diff < S.length) &&
      S[i - diff] != C &&
      S[i + diff] != C
    ) {
      diff++;
    }
    res.push(diff);
  }
  return res;
};

export default shortestToChar;

`
左右偏移指针
`;

var shortestToChar2 = function (S, C) {
  let res = [];

  // prev记录上一个字符C出现的位置
  // 因为S是[0, 10000]，所以直接初始化为-10000表示相对小即可
  let prev = -10001;

  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) == C) {
      prev = i;
    }
    res[i] = i - prev;
  }

  // 初始化为相对大值即可
  prev = 10001;
  for (let i = S.length - 1; i >= 0; i--) {
    if (S.charAt(i) == C) {
      prev = i;
    }
    // 取向左和向右中的最小值
    res[i] = Math.min(res[i], prev - i);
  }

  return res;
};

`
相对左右最近的位置，第二次遍历的时候进行修正，效率最高
`;
