// DZ 4.

// 1)

let num1 = +prompt("Enter the first number") || 0,
  num2 = +prompt("Enter the second number");

if (num2 === "") {
  num2 = 22;
}

// 2)

const num3 = num1 && num2 ? 80 : 40;

// 3)

let mainObject = {};

// 4)
if (num1 >= 90) {
  mainObject.size = "big";
} else if (num1 <= 40) {
  mainObject.size = "small";
} else {
  mainObject.size = "medium";
}

// 5)

let num4;

// 6)

switch (mainObject.size) {
  case "big":
    num4 = 1000;
    break;
  case "medium":
    num4 = 100;
    break;
  case "small":
    num4 = 10;
    break;
}

// final

const sum = num1 * num2 * num3 * num4;

if (sum % 2 !== 0) {
  console.log("Чел харош");
} else if (num2 > 50) {
  alert(`Число 2 = ${num2}`);
} else {
  alert("Вышла какая-то чепуха, давай по новой");
}

// console.log(num1, num2, num3, mainObject, num4, sum);
