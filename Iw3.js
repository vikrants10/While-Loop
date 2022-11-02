// Print the sum of all the multiples of 3 from 0 to the given limit
let i = 1;
let sum = 0;
let N = 15;
while (i <= N) {
  if (i % 3 == 0) {
    sum = sum + i;
  }
  i++;
} console.log(sum);
