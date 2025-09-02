function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const a: number = 17; 
if (isPrime(a)) {
  console.log(`${a} is a Prime Number`);
} else {
  console.log(`${a} is NOT a Prime Number`);
}
