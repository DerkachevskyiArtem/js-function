//task 1
const getSmallestNumber = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1 - num2)
  ) {
    return null;
  }

  return num1 < num2 ? num1 : num2;
};

// task 2
const checkAge = function (age) {
  if (typeof age !== "number" || isNaN(age) || age < 0) {
    return null;
  }

  return age >= 18;
};

// task 3
const calculateDiscount = function (totalAmount) {
  if (
    typeof totalAmount !== "number" ||
    isNaN(totalAmount) ||
    totalAmount < 0
  ) {
    return null;
  }

  return totalAmount >= 1500
    ? totalAmount - totalAmount * 0.1
    : totalAmount - totalAmount * 0.05;
};

// task 4
const isEvenNumber = function (number) {
  if (typeof number !== "number" || isNaN(number)) {
    return null;
  }

  return number % 2 === 0;
};

//task 1
console.log(getSmallestNumber(3, 7)); //3
console.log(getSmallestNumber("3", 7)); // null

// task 2
console.log(checkAge(20)); // true
console.log(checkAge(15)); // false
console.log(checkAge("15")); // null

// task 3
console.log(calculateDiscount(2000)); // 1800
console.log(calculateDiscount(1000)); // 950
console.log(calculateDiscount(-100)); // null

// task 4
console.log(isEvenNumber(8)); // true
console.log(isEvenNumber(7)); // false
console.log(isEvenNumber("8")); // null
