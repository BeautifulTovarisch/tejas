'use strict';

import React from 'react';

import {
    max,
    extent,
    scaleTime,
    scaleLinear,
    curveMonotoneX
} from 'd3';

import {
  calcTransition,
  selectComponent
} from '../calc';

export const scaleX = ( width, data ) => scaleTime()
    .domain( extent( data, d => d.xValue ) )
    .range( [ 0, width ] );

export const scaleY = ( height, data ) => scaleLinear()
    .domain( extent( data, d => d.yValue ) )
    .range( [ height, 0 ] );

export class Line extends React.Component {
    constructor( props ) {
        super( props );
    }
    componentWillReceiveProps( nextProps ) {
        const node = selectComponent( this );

        return node.transition( calcTransition() )
            .attr( "d", nextProps.d );
    }
    render() {
        return (
            <path
              d={ this.props.d }
              fill='none'
              stroke={ this.props.stroke }
              strokeWidth={ this.props.strokeWidth }
              strokeDasharray={ this.props.dashed ? "5,5" : 0 } />
        );
    }
}

Line.defaultProps = {
    d: null,
    dashed: false,
    stroke: "#2980b9",
    strokeWidth: 2.00
};

export default Line;
