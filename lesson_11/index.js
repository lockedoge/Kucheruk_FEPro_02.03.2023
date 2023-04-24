// DZ 11.

// 1)

function solution(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const hashTable = {};

  for (let i = 0; i < alphabet.length; i++) {
    hashTable[alphabet[i]] = false;
  }

  for (let i = 0; i < str.length; i++) {
    hashTable[str[i]] = true;
  }

  for (const key in hashTable) {
    if (hashTable.hasOwnProperty(key) && !hashTable[key]) {
      return false;
    }
  }

  return true;
}

console.log(solution("wyyga"));
console.log(solution("qwertyuioplkjhgfdsazxcvbnm"));
console.log(solution("ejuxggfsts"));
console.log(solution("qpwoeirutyalskdjfhgmznxbcv"));
console.log(solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv"));
console.log(solution("0123456789abcdefghijklmnop"));

// 2)

function solution1(arr) {
  const words = arr[0].split(/\W+/);
  let filteredArr = words.filter(function (value) {
    return (
      value !== null &&
      value !== undefined &&
      value !== "" &&
      value !== 0 &&
      value !== false
    );
  });
  const totalLength = words.reduce((acc, word) => acc + word.length, 0);
  const averageLength = totalLength / filteredArr.length;
  return words.filter((word) => word.length > averageLength);
}

console.log(solution1(["This is a sample string"]));
console.log(solution1(["Some another sample"]));
console.log(solution1(["Do, do, do, do... do it!"]));

// 3)

const database = {
  users: [],

  addGuest(user) {
    this.users.push(user);
  },

  registerUser(name, email) {
    const user = {
      name,
      email,
      getAdminEmail() {
        return admin.email;
      },
    };
    this.addGuest(user);
    return user;
  },
};

// Объект "Админ"
const admin = {
  email: "admin@example.com",
  password: "qwerty",
};

// Админ -> Гость
const user = Object.create(admin);

//----

const newUser = database.registerUser("Mike", "newuser@example.com");
const newGuest = database.addGuest("Stas");
const newGuest1 = database.addGuest("Oleg");
const newUser1 = database.registerUser("John", "oleg@example.com");

console.log(database);
console.log(database.users);
console.log(admin);
console.log(database.users[0].getAdminEmail());

// Не уверен что я правильно понял суть задания но вроде всё работет)
