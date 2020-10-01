/* Changing stack order using setTimeout*/

function countPrimeNumbers() {
  let countPrimeNumbers = 0
  let count
  console.log("Inside countPrimeNumbers at the end after 2 seconds")
  for (let i = 1; i < 100; i++) {
    count = 0
    for (let j = 1; j <= i ; j++) {
      if ((i % j) === 0){
        count+=1
        }
    }
    if (count === 2) {
      countPrimeNumbers+=1
    }
  }
  return countPrimeNumbers
}
t0 = performance.now();
for (let i = 0; i < 100; i++) {
  setTimeout(function() {countPrimeNumbers()},2000);
}
t1 = performance.now();
time = t1 - t0
console.log(`Execution time of calculating prime numbers 100 times was ${time} milliseconds.`);
