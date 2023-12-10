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
console.log(fibsRec(8));
