// DZ 17.

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

function getPrimes(n) {
  const sieve = [];
  const primes = [];

  for (let i = 2; i <= n; i++) {
    if (!sieve[i]) {
      primes.push(i);

      for (let j = i << 1; j <= n; j += i) {
        sieve[j] = true;
      }
    }
  }

  return primes;
}

export default getPrimes;
