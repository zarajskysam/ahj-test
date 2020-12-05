export function countDigits(n) {
  let i = 0;
  for (i; n > 1; i += 1) {
    // eslint-disable-next-line no-param-reassign
    n /= 10;
  }
  return i;
}

function getArrLuna(number) {
  const arr = number.toString().split('');
  const arrLuna = [];
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line radix
    const result = parseInt(arr[i]);
    arrLuna.push(result);
  }
  return arrLuna;
}

function summLuhna(number) {
  const arr = getArrLuna(number);
  const resultArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i % 2 === 0) {
      arr[i] *= 2;
    }
    if (arr[i] > 9) {
      arr[i] -= 9;
    }
    resultArr.push(arr[i]);
  }
  let summ = 0;
  for (let i = 0; i < resultArr.length; i += 1) {
    summ += resultArr[i];
  }
  //   return summ;
  return summ;
}

export default function validate(number) {
  if (summLuhna(number) % 10 === 0) {
    return true;
  }
  return false;
}
