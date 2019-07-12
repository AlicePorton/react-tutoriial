import moment from 'moment';
import {ascending, extent, histogram as d3Histogram, ticks} from 'd3-array';

const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationYear = durationDay * 365;

export function getTimeWidgetHintFormatter(domain) {
  if (!Array.isArray(domain)) {
    return null;
  }

  const diff = domain[1] - domain[0];
  return diff > durationYear
    ? 'MM/DD/YY'
    : diff > durationWeek
      ?  'MM/DD'
      : diff > durationDay
        ? 'MM/DD hha'
        : diff > durationHour
          ? 'hh:mma'
          : 'hh:mm:ssa';
}