import { describe, expect, test } from '@jest/globals';
import { getRandomElement, randomDecimal, getValueFromCoords } from './misc';


describe('miscellaneous helpers', () => {

  // just a bunch of silly tests, playing with jest

  const table = [
    {min: 0, max: 1},
    {min: 1, max: 12},
    {min: -5, max: 0}
  ]

  test('get random element from list', () => {
    expect(getRandomElement([3]))
      .toBe(3);
  });

  test.each(table)('test with table', ({min, max}) => {
    expect(randomDecimal(min, max))
      ?.toBeGreaterThanOrEqual(min)
      ?.toBeLessThanOrEqual(max);
  })

});


describe('getting values from field coords', () => {

  test('get value from field coords ok', () => {
    const field = [['da', 'db', 'dc'],['de', 'df', 'dg']];
    expect(getValueFromCoords(field, [0,2]))
      .toBe('dc');
  });

  test('get value from field coords NOT ok', () => {
    const field = [['da', 'db', 'dc'],['de', 'df', 'dg']];
    expect(getValueFromCoords(field, [0,5]))
      .toBe(undefined);
    expect(getValueFromCoords(field, [-1,0]))
      .toBe(undefined);
  });

});