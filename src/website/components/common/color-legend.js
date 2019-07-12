import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {createSelector} from 'reselect';
import moment from 'moment';
import {format} from 'd3-format';
import {
  SCALE_TYPES,
  SCALE_FUNC,
  ALL_FIELD_TYPES
} from 'website/constants/default-settings';
import {getTimeWidgetHintFormatter} from 'website/util/filter-utils';


const ROW_H = 10;
const GAP = 4;
const RECT_W = 20;

const StyledLegend = styled.div`
  ${props => props.theme.sidePanelScrollBar};
  max-height: 150px;
  overflow-y: auto;

  svg {
    text {
      font-size: 9px;
      fill: ${props => props.theme.textColor};
    }
  }
`;

const defaultFormat = d => d;

const getTimeLabelFormat = domain => {
  const formatter = getTimeWidgetHintFormatter(domain);
  return val => moment.utc(val).format(formatter);
};

const getNumbericLabelFormat = domain => {
  const diff = domain[1] - domain[0];

  if (diff < 10) {
    return format('.2f');
  }

  return format('.1f');
};

const getQuantLabelFormat = (domain, fieldType) => {
  return fieldType === ALL_FIELD_TYPES.timestamp
    ? getTimeLabelFormat(domain)
    : !fieldType ? defaultFormat : getNumbericLabelFormat(domain);
};

const getOrdinalLegends = scale => {
  const domain = scale.domain();
  return {
    data: domain.map(scale),
    labels: domain
  };
};

const getQuantLegends = (scale, labelFormat) => {
  const labels = scale.range().map(d => {
    const invert = scale.invertExtent(d);
    return `${labelFormat(invert[0])} t0 ${labelFormat(invert[1])}`;
  });

  return {
    data: scale.range(),
    labels
  };
};

export default class ColorLegend extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    scaleType: PropTypes.string,
    domain: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    fieldType: PropTypes.string,
    range: PropTypes.arrayOf(PropTypes.string),
    labelFormat: PropTypes.func
  };

  domainSelector = props => props.domain;
  rangeSelector = props => props.range;
  labelFormatSelector = props => props.labelFormat;
  scaleTypeSelector = props => props.scaleType;
  fieldTypeSelector = props => props.fieldType;

  legendsSelector = createSelector(
    this.domainSelector,
    this.rangeSelector,
    this.scaleTypeSelector,
    this.labelFormatSelector,
    this.fieldTypeSelector,
    (domain, range, scaleType, labelFormat, fieldType) => {
      const scaleFunction = SCALE_FUNC[scaleType];

      const scale = scaleFunction()
        .domain(domain)
        .range(range);

      if(scaleType === SCALE_TYPES.ordinal) {
        return getOrdinalLegends(scale);
      }

      const formatLabel = 
        labelFormat || getQuantLabelFormat(scale.domain(), fieldType);

      return getQuantLegends(scale, formatLabel);
      
    }
  );

  render() {
    const {width, scaleType, domain, range, displayLabel =true} = this.props;
    
    if(!domain || !range || !scaleType) {
      return null;
    }

    const legends = this.legendsSelector(this.props);
    const height = legends.data.length * (ROW_H + GAP);

    return(
      <StyledLegend>
        <svg width={width - 24} height={height}>
          {legends.data.map((color, idx) => (
            <LegendRow
              key={idx}
              label={legends.labels[idx]}
              displayLabel={displayLabel}
              color={color}
              idx={idx}
            />
          ))}
        </svg>
      </StyledLegend>
    );
  }
}

const LegendRow = ({label = '', displayLabel, color, idx}) => (
  <g transform={`translate(0, ${idx * (ROW_H + GAP)})`}>
    <rect width={RECT_W} height={ROW_H} style={{fill: color}} />
    <text x={RECT_W + 8} y={ROW_H - 1}>
      {displayLabel ? label.toString() : ''}
    </text>
  </g>
)