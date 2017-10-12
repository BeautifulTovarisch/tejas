'use strict';

import {
    arc
} from 'd3';

export const Arc = props => {
    const arcPath = arc()
          .innerRadius( props.innerRadius || 40 )
          .outerRadius( props.outerRadius || 50 )
          .startAngle( props.startAngle || 0 )
          .endAngle( props.endAngle || Math.PI * 2 );

    const defaultFill = "#2980b9";

    return (
        <path
          d={ arcPath() }
          fill={ props.fill || defaultFill } />
    );
};

export default Arc;
