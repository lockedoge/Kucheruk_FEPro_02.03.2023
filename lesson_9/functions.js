// DZ 10.

// 1)

// Set

const yourFunc = (arr) => {
  return [...new Set(arr)];
};

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(yourFunc(arr));

// Не через set

const yourFunc1 = (arr) => {
  return arr.filter((value, index) => arr.indexOf(value) === index);
};

const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(yourFunc(arr1));

// 2)

const findMostFrequent = (arr) => {
  let count = {};
  let mostFrequent = arr[0];
  let maxCount = 1;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (count[num] === undefined) {
      count[num] = 1;
    } else {
      count[num]++;
    }
    if (count[num] > maxCount) {
      mostFrequent = num;
      maxCount = count[num];
    }
  }

  return mostFrequent;
};

const arr2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 5];
console.log(findMostFrequent(arr2));

//3

// let y = 5;
// let x = () => y;
// let z = t => {
//   let y = 5;
//   t();
// };
// z(x);

// Выражение вернет undefined
// Когда мы вызываем z(x), ф-ция x передаеться в качестве акргумента в ф-цию z.
// В ф-ции z вызываетсья ф-ция x, но результат этого вызова нигде не используеться и не возвращаеться, поэтому z(x) вернет undefined.

// Создаеться переменная y =>
// ф-ция x возвращаеться и передаеться в ф-цию z как аргумент =>
// В ф-ции z создаеться переменная y и ей присваиваеться значение 5 =>
// Ф-ция t визиваеться внутри z но результат не используеться и не возвращаеться

//4

function debounce(func, ms) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, arguments), ms);
  };
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
