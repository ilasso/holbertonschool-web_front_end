/* Prime numbers & timing execution*/

function countPrimeNumbers() {
  let countPrimeNumbers = 0
  let count
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
  console.log(countPrimeNumbers)
  console.log(count)
}
t0 = performance.now();
countPrimeNumbers()
t1 = performance.now();
time = t1 - t0
console.log(`Execution time of printing countPrimeNumbers was ${time} milliseconds.`)
