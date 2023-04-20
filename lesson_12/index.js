// DZ 13.

// 1)

function findCommonPrefix(strings) {
  if (strings.length === 0) {
    return "";
  }
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    while (strings[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
}

const strings = ["programming", "product", "procrastination"];
const commonPrefix = findCommonPrefix(strings);
console.log(commonPrefix); // "pro"

// 2)

function twoToThree(arr) {
  const result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (temp.length < 3) {
        temp.push(arr[i][j]);
      } else {
        result.push(temp);
        temp = [arr[i][j]];
      }
    }
  }
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
}

function threeToTwo(arr) {
  const result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (temp.length < 2) {
        temp.push(arr[i][j]);
      } else {
        result.push(temp);
        temp = [arr[i][j]];
      }
    }
  }
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
}

const arr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const arr2 = [[1, 2], [3, 4], [5, 6], [7]];
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(twoToThree(arr1));
console.log(twoToThree(arr2));
console.log(threeToTwo(arr3));

// 2)*

function padArray(arr, length) {
  const result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (temp.length < length) {
        temp.push(arr[i][j]);
      } else {
        result.push(temp);
        temp = [arr[i][j]];
      }
    }
  }
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
}

const arr4 = [
  [1, 2, 3],
  [4, 5, 6],
];
const paddedArr = padArray(arr4, 5);
console.log(paddedArr); // [[1,2,3,4,5], [6]]
