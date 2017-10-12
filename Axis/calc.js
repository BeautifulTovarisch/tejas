'use strict';

import {
  domain,
  extent,
  format,
  axisLeft,
  axisBottom,
  transition,
  scaleLinear,
  easeCubicInOut
} from 'd3';

import {
  flatten
} from 'lodash';

import  {
  selectComponent
} from '../calc.js';

export const mapDomain = ( data, key ) =>
  extent( flatten( data ), d => d[ key ] );

export const xAxis = props => {
  const xScale = scaleLinear()
    .range( [ 0, props.length ] )
    .domain( mapDomain( props.data, props.dataKey ) );

  return axisBottom( xScale );
};

export const yAxis = props => {
  const yScale = scaleLinear()
    .range( [ props.length, 0 ] )
    .domain( mapDomain( props.data, props.dataKey ) );

  return axisLeft( yScale )
    .ticks( props.tickNumber )
    .tickFormat( format( props.format ) );

};

export const calcAxis = axis => {
  const axes = {
    "x": xAxis,
    "y": yAxis
  };

  return axes[ axis ];
};

export const renderAxis = ( component, axis, props ) =>
  selectComponent( component )
    .call( calcAxis( axis )( props ) );

