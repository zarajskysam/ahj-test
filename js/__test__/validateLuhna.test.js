/* eslint-disable */
import validate from '../validateLuhna';

test('TrueValidate', () => {
    const maestro = 6304349363685497;
    expect(validate(maestro)).toEqual(true);
});

test('FalseValidate', () => {
    const maestro = 6304348363685497;
    expect(validate(maestro)).toEqual(false);
});