// DZ 6.

// 1)

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let sum = 0;
let numPlus = 0;

arr.forEach(function (num) {
  if (num > 0) {
    sum += num;
    numPlus++;
  }
});

console.log(`Сума ${sum}, кількість ${numPlus}`);

// 2)

let minNum = 0;
let minIndex = 0;

arr.forEach(function (num, i) {
  if (num < minNum) {
    minNum = num;
    minIndex = i;
  }
});

console.log(`Min number ${minNum} with index ${minIndex}`);

// 3)

let maxNum = 0;
let maxIndex = 0;

arr.forEach(function (num, i) {
  if (num > maxNum) {
    maxNum = num;
    maxIndex = i;
  }
});

console.log(`Max number ${maxNum} with index ${maxIndex}`);

// 4)

let numMinus = 0;

arr.forEach(function (num) {
  if (num < 0) {
    numMinus++;
  }
});

console.log(numMinus);

// 5)

let unpairedElem = 0;

arr.forEach(function (num) {
  if (num > 0 && num % 2 !== 0) {
    unpairedElem++;
  }
});

console.log(unpairedElem);

// 6)

let pairElem = 0;

arr.forEach(function (num) {
  if (num > 0 && num % 2 == 0) {
    pairElem++;
  }
});

console.log(pairElem);

// 7)

let pairSum = 0;

arr.forEach(function (num) {
  if (num > 0 && num % 2 == 0) {
    pairSum += num;
  }
});

console.log(pairSum);

// 8)

let unpairedSum = 0;

arr.forEach(function (num) {
  if (num > 0 && num % 2 !== 0) {
    unpairedSum += num;
  }
});

console.log(unpairedSum);

// 9)

let multiSum = 1;

arr.forEach(function (num) {
  if (num > 0) {
    multiSum *= num;
  }
});

console.log(multiSum);

// 10)

let maxPlus = 0;

arr.forEach((num, index) => {
  if (num > maxPlus) {
    maxPlus = num;
  }
});

arr.filter((num, index) => {
  if (num !== maxPlus) {
    arr[index] = 0;
  }
});

console.log(arr);
