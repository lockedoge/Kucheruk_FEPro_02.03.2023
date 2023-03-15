// DZ 5.

// 1)

let num1 = 10,
  result1 = "";

while (num1 <= 20) {
  result1 += num1 + ", ";
  num1++;
}

console.log(result1.slice(0, -2));

// 2)

let num2 = 10,
  result2 = "",
  numPow;

while (num2 <= 20) {
  numPow = Math.pow(num2, 2);
  result2 += numPow;
  if (num2 < 20) {
    result2 += ", ";
  }
  num2++;
}

console.log(result2);

// 3)

let sum1 = 1;

for (let num3 = 15; num3 <= 35; num3++) {
  sum1 *= num3;
}

console.log(sum1);

// 4)

let sum2 = 0,
  numSum = 0;

for (let num4 = 1; num4 <= 500; num4++) {
  sum2 += num4;
  numSum++;
}

const result3 = sum2 / numSum;

console.log(result3);

// 5)

let sum3 = 0;

for (let num5 = 30; num5 <= 80; num5++) {
  if (num5 % 2 === 0) {
    sum3 += num5;
  }
}

console.log(sum3);

// 6)

let result4 = "";

for (let num6 = 100; num6 <= 200; num6++) {
  if (num6 % 3 === 0) {
    result4 += num6 + ", ";
  }
}

console.log(result4.slice(0, -2));

// 7)

const num7 = +prompt("Введите число");

if (num7 < 2) {
  alert(`${num7} не является простым числом`);
} else {
  let numCheck = true;
  for (let i = 2; i <= Math.sqrt(num7); i++) {
    if (num7 % i === 0) {
      numCheck = false;
      break;
    }
  }
  if (numCheck) {
    alert(`${num7} является простым числом`);
  } else {
    alert(`${num7} не является простым числом`);
  }
}
