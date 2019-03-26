function decimalToHex(n) {
  let remainder, sign, hex,
      remainders = [];

  n = parseFloat(n);
  sign = Math.sign(n).toString().slice(0, -1);
  if (n < 0) n *= -1;

  while (n > 0) {
    remainders.push(n % 16)
    n = Math.floor(n / 16);
  }

  hex = remainders.reverse().map(digit => {
    if (digit < 10) return digit
    return ["A","B","C","D","E","F"][digit - 10]
  }).join('');

  return sign + hex
}

function hexToDecimal(n) {
  let reversed, cur,
      sign = 1,
      sum = 0;

  if (n[0] === '-') {
    sign = -1;
    n = n.slice(1)
  }

  reversed = n.toString().split('').reverse().join('');

  for (let i = 0; i < reversed.length; i++) {
    cur = reversed[i];
    if (isNaN(parseFloat(cur))) {
      cur = ["A","B","C","D","E","F"].indexOf(cur) + 10;
    } else {
      cur = parseFloat(cur);
    }
    sum += cur * Math.pow(16, i);
  }

  return sign * sum
}

console.log(decimalToHex(1951))