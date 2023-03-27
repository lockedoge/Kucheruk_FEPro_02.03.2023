// DZ 8.

// 1)

let arr = [1, 2, 53, 345, 23, 15];

function removeElement(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--; // зменшуємо лічильник, оскільки масив зменшився на один елемент
    }
  }
  return array;
}

console.log(removeElement(arr, 53));

// 2)

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}

console.log(generateKey(16, characters));

// 3)

function removeCharacters(str, chars) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!chars.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

console.log(removeCharacters("hello world", ["l", "d"]));

// 4)

function sumFunc(param) {
  let sum = 0;
  return function (str) {
    sum += str;
    return sum;
  };
}

const sum = sumFunc();

console.log(`sum(2) = ${sum(2)}`);
console.log(`sum(25) = ${sum(25)}`);
console.log(`sum(6) = ${sum(6)}`);
console.log(`sum(42) = ${sum(42)}`);
