/* eslint-disable */
import checkNumCard from '../cardChecker';

test('testing check maestro', () => {
  const maestro = 6304349363685497;
  expect(checkNumCard(maestro)).toEqual('maestro');
});

test('testing check visa', () => {
    const visa = 4532142852027167;
    expect(checkNumCard(visa)).toEqual('visa');
});

test('testing check discover', () => {
    const discover = 6011914917601664;
    expect(checkNumCard(discover)).toEqual('discover');
});

test('testing check false', () => {
    const falseCard = 1532142852027167;
    expect(checkNumCard(falseCard)).toEqual(false);
});


