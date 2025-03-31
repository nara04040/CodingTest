function solution(n) {
  if(n <= 1) return n;

  const MOD = 1234567;
  let prev = 0;
  let cur = 1;

  for(let i = 2; i <= n; i++) {
    const next = (prev + cur) % MOD;
    prev = cur;
    cur = next;
  }

  return cur
}