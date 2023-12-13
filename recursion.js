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
  // if(leftIndex === leftMerge.length) {
  //   sortedArray = sortedArray.concat(rightMerge.slice(rightIndex))
  //   return(sortedArray);
  // // } else if (rightIndex === rightMerge.length) {
  // } else {
  //   sortedArray = sortedArray.concat(leftMerge.slice(leftIndex))
  //   return(sortedArray);
  // }
}

console.log(mergeSort([6,5,12,10,9,1]));