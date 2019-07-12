import {getRoundingDecimalFromStep, preciseRound, roundValToStep} from 'website/utils/data-utils';

describe('Test the rounding value util function', () => {
  it('getRoundingDecimal should return the number of the decimals', () => {
    expect(getRoundingDecimalFromStep(10)).toBe(0);
    expect(getRoundingDecimalFromStep(10.1)).toBe(1);
    expect(getRoundingDecimalFromStep(10.10)).toBe(1);
    expect(getRoundingDecimalFromStep('1.10')).toBe(2);
    console.log(getRoundingDecimalFromStep('error'));
    expect(getRoundingDecimalFromStep('error')).toBe(0);
  });

  it('preciseRound: a rounded number in string format', () => {
    expect(preciseRound(1.1, 2)).toBe('1.10');
    expect(preciseRound(1.231, 2)).toBe('1.23');
    // TODO: precise has something no precise^ float trap
    expect(preciseRound(1.9999999999999999, 20)).toMatch(/2.00000000/);
  })
});