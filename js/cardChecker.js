export function getFirstNums(num, count) {
  let result = num.toString()[0];
  for (let i = 1; i < count; i += 1) {
    result += num.toString()[i];
  }
  // eslint-disable-next-line radix
  return parseInt(result);
}

// eslint-disable-next-line consistent-return
export default function checkNumCard(num) {
  if (getFirstNums(num, 1) === 4) return 'visa';
  if (getFirstNums(num, 2) === 51 || getFirstNums(num, 2) === 52 || getFirstNums(num, 2) === 53 || getFirstNums(num, 2) === 54 || getFirstNums(num, 2) === 55 || (getFirstNums(num, 6) >= 222100 && getFirstNums(num, 6) <= 272099)) return 'mc';
  if (getFirstNums(num, 1) === 2) return 'mir';
  if (getFirstNums(num, 4) === 6011 || (getFirstNums(num, 6) >= 622126 && getFirstNums(num, 6) <= 622925) || (getFirstNums(num, 3) >= 644 && getFirstNums(num, 3) <= 649) || getFirstNums(num, 2) === 65) return 'discover';
  if (getFirstNums(num, 4) === 5018 || getFirstNums(num, 4) === 5020 || getFirstNums(num, 4) === 5038 || getFirstNums(num, 4) === 5893 || getFirstNums(num, 4) === 6304 || getFirstNums(num, 4) === 6759 || getFirstNums(num, 4) === 6761 || getFirstNums(num, 4) === 6762 || getFirstNums(num, 4) === 6763) return 'maestro';
  return false;
}
