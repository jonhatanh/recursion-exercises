function collatz(n, steps = 0) {
  if (n === 1) return steps;
  else if (n % 2 === 0) return collatz(n / 2, ++steps);
  else return collatz(3 * n + 1, ++steps);
}

function collatzVid(n) {
  if (n == 1) return 0;
  else if (n % 2 == 0) return 1 + collatzVid(n / 2);
  else return 1 + collatzVid(3 * 2 + 1);
}

console.log(collatz(3));
