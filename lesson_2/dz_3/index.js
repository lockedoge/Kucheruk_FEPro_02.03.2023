// DZ 3

let userName = prompt('What`s your name?'),
    userSurname = prompt('What`s your surname?'),
    userAge = prompt('How old are you?'),
    userCity = prompt('What city do you live in?');

let user = {
    name: userName,
    surname: userSurname,
    age: Number(userAge),
    city: userCity
};

let userInfo = `Your name is ${user.name} ${user.surname}, you are ${user.age} years old and you live in ${user.city}`;

confirm("Do you consent to the display of your data?") ? console.log(userInfo) : alert("The user has blocked the display of data");