'use strict';

export const LegendBox = props =>
      <rect
        rx="2"
        ry="2"
        fill={ props.boxFill }
        width={ props.width }
        height={ props.height } />
      
export const LegendLabel = props =>
      <text
        x={ props.x }
        y={ props.y }
        fill={ props.fill } >
        { props.label }
      </text>
