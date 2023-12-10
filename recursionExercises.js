function sumRange(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumRange(n - 1);
}

function power(base, exp) {
  if (exp === 0) return 1;
  // if(exp === 1) return base;
  return base * power(base, exp - 1);
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(5))

function all(array, callback) {
  if (array.length === 0) return true;

  if (callback(array[array.length - 1])) {
    array.pop();
    return all(array, callback);
  } else {
    return false;
  }
}
// console.log(all([1,2,9], function (num) {
//     return num < 7;
// }))

function productOfArray(numbers) {
  if (numbers.length === 0) return 1;
  // return numbers[numbers.length-1] * productOfArray(numbers.slice(0,numbers.length-1))
  return numbers.pop() * productOfArray(numbers);
}

function contains(object, target) {
  if (typeof object !== "object") {
    return object === target;
  }
  for (const value of Object.values(object)) {
    console.log(value);
    if (contains(value, target)) return true;
    else continue;
  }
  return false;
}
// console.log(productOfArray([1,2,3,10,10]));
// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     },
//     pepe: 'exists',
// }
// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false
// let exists = contains(nestedObject, "exists"); // true
// console.log({hasIt, doesntHaveIt, exists});

function totalIntegers(multiArray) {
  if (!Array.isArray(multiArray)) {
    return Number.isInteger(multiArray) ? 1 : 0;
  }

  return multiArray.reduce((total, value) => {
    return total + totalIntegers(value);
  }, 0);
}
// console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6,5,3,'deaw']]]));

function sumSquares(multiArray) {
  if (Number.isInteger(multiArray)) {
    return multiArray * multiArray;
  }

  return multiArray.reduce((total, value) => {
    return total + sumSquares(value);
  }, 0);
}
// console.log(sumSquares([1,2,3]));
// console.log(sumSquares([[1,2],3]));
// console.log(sumSquares([[[[[[[[[1]]]]]]]]]));
// console.log(sumSquares([10,[[10],10],[10]]));

function replicate(times, num) {
  if (times <= 0) return [];
  return replicate(times - 1, num).concat(num);
}
// console.log(replicate(2, 1)); // [1, 1]
// console.log(replicate(3, 5)); // [5, 5, 5]
// console.log(replicate(1, 69)); // [69]
// console.log(replicate(-2, 6)); // []

