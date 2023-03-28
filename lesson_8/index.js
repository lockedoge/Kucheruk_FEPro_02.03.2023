// DZ 9.

// 1)

const arr = [[[[8]]]];

function factorial(arr) {
  let num = arr;
  while (Array.isArray(num)) {
    num = num[0];
  }
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(arr));

// 2)

let calculator = {
  read() {
    this.a = parseFloat(prompt("Введіть перше число:"));
    this.b = parseFloat(prompt("Введіть друге число:"));
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(`Сума ${calculator.sum()}`);
console.log(`Сума ${calculator.sum()}`);
alert(`Добуток ${calculator.mul()}`);
console.log(`Добуток ${calculator.mul()}`);
