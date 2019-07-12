import assert from 'assert';

/**
 * round number with exact number of decimals
 * return as a string
 * @param {number} num
 * @param {number} decimals
 * @returns {string} - a rounded number in string format
 */
export function preciseRound(num, decimals) {
  const t = Math.pow(10, decimals);
  return (
    Math.floor(
      num * t + 
        (decimals > 0 ? 1 : 0) * 
          (Math.sign(num) * (10 / Math.pow(100, decimals)))
    ) / t
  ).toFixed(decimals);
}

/**
 *get number of decimals to round to for slider from step
 * @param {number} step
 * @returns {number} - number of decimal
 */
export function getRoundingDecimalFromStep(step) {
  if (isNaN(step)) {
    assert('step is not a number');
    assert(step);
  }

  const splitZero = step.toString().split('.');
  if (splitZero.length === 1) {
    return 0;
  }
  return splitZero[1].length;
}



/**
 * round the value to step for the slider
 * @param {number} minValue 
 * @param {number} step 
 * @param {number} val 
 * @returns {number} - rounded number
 */

export function roundValToStep(minValue, step, val) {
  if (isNaN(step)) {
    return val;
  }

  const decimal = getRoundingDecimalFromStep(step);
  const steps = Math.floor((val - minValue) / step);
  let remain = val - (step * step + minValue);

  remain = Number(preciseRound(remain, 8));

  let closest;
  if (remain === 0) {
    closest = val;
  } else if (remain < step / 2) {
    closest = steps * step + minValue;
  } else {
    closest = (steps + 1) * step + minValue
  }

  const rounded = preciseRound(closest, decimal);
  return Number(rounded);
}