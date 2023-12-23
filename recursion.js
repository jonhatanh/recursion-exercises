function fibs(num) {
  if (num <= 0) return [];
  if (num <= 1) return [0];
  const secuence = [0, 1];

  for (let i = 2; i < num; i++) {
    secuence.push(secuence[i - 2] + secuence[i - 1]);
  }
  return secuence;
}

function fibsRec(num, secuence = []) {
    if(num <= 0) return [];
    if(num === 1) return [0];
    if(num === 2) return [0,1];
    let num1 = fibsRec(num-1);
    let num2 = fibsRec(num-2);
    let actualNum = num1[num1.length-1] + num2[num2.length-1];
    return num1.concat(actualNum);
}
// console.log(fibsRec(8));

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }

  let leftMerge = mergeSort(arr.slice(0, (arr.length/2)))
  let rightMerge = mergeSort(arr.slice((arr.length/2)))
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < leftMerge.length && rightIndex < rightMerge.length) {
    if(leftMerge[leftIndex] > rightMerge[rightIndex]) {
      sortedArray.push(rightMerge[rightIndex])
      rightIndex++;
    } else {
      sortedArray.push(leftMerge[leftIndex])
      leftIndex++;
    } 
  }

  sortedArray = leftIndex === leftMerge.length 
    ? sortedArray.concat(rightMerge.slice(rightIndex))
    : sortedArray.concat(leftMerge.slice(leftIndex))
  return sortedArray;
}

// console.log(mergeSort([6,5,12,10,9,1]));

function binarySearch(target, array) {
  return binaryRec(target,array, 0);
}

function binaryRec(target, array, index) {
  if(array.length === 1) {
    return target === array[0] ? index : -1;
  }

  let middle = Math.floor(array.length / 2);
  index += middle;
  if(target === array[middle]) {
    return index;
  } else if(target > array[middle]) {
    index++;
    return binaryRec(target, array.slice(middle+1), index)
  } else {
    index -= middle;
    return binaryRec(target, array.slice(0, middle), index)
  }

}

// console.log(binarySearch(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(binarySearch(202, [2,5,8,12,16,23,38,56,72,91, 101, 202, 322, 324, 432, 543]))
