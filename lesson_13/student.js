// DZ 14.

class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      console.log("Максимальна кількість записів вже досягнута");
    }
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.log("Максимальна кількість записів вже досягнута");
    }
  }

  getAge() {
    const today = new Date();
    const birthDate = new Date(this.birthYear, 0);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade);
    return sum / this.grades.length;
  }

  getAttendanceRate() {
    if (this.attendance.filter((item) => item !== null).length === 0) {
      return 0;
    }
    const presentCount = this.attendance.filter((item) => item === true).length;
    return (
      presentCount / this.attendance.filter((item) => item !== null).length
    );
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRate = this.getAttendanceRate();
    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Іван", "Іванов", 1998);
const student2 = new Student("Марія", "Петренко", 2000);

console.log(student1.firstName);
console.log(student2.lastName);

student1.grades.push(90, 95, 90);
student2.grades.push(70, 95, 90);
student1.present();
student1.present();
student1.absent();
console.log(student1.attendance);

console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.getAttendanceRate());
console.log(student1.summary());
console.log(student2.summary());
