//task 1
const getSmallestNumber = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1 - num2)
  ) {
    return null;
  }

  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};

// task 2
const checkAge = function (age) {
  if (typeof age !== "number" || isNaN(age) || age < 0) {
    return null;
  }

  if (age >= 18) {
    return "Повнолітня";
  } else {
    return "Неповнолітня";
  }
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

  if (totalAmount > 1500) {
    return totalAmount - totalAmount * 0.1;
  } else {
    return totalAmount - totalAmount * 0.05;
  }
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
console.log(checkAge(20)); // Повнолітня
console.log(checkAge(15)); // Неповнолітня
console.log(checkAge("15")); // null

// task 3
console.log(calculateDiscount(2000)); // 1800
console.log(calculateDiscount(1000)); // 950
console.log(calculateDiscount(-100)); // null

// task 4
console.log(isEvenNumber(8)); // true
console.log(isEvenNumber(7)); // false
console.log(isEvenNumber("8")); //null
