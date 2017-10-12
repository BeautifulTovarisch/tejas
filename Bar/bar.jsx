'use strict';

import {
    calcTransition,
    selectComponent
} from '../calc.js';

export const Bar = React.createClass({
    getDefaultProps() {
        return {
            "x": 0,
            "y": 0,
            "fill": "#3498db",
            "width": 0,
            "height": 0
        };
    },
    componentWillReceiveProps( nextProps ) {
        const node = selectComponent( this );

        //Transition the bars
        return node.transition( calcTransition() )
        .attr( 'y', nextProps.y )
        .attr( 'x', nextProps.x )
        .attr( 'height', nextProps.height )
        .attr( 'width', nextProps.width );
    },
    render() {
        return (
            <rect
              x={ this.props.x }
              y={ this.props.y }
              fill={this.props.fill }
              width={ this.props.width }
              height={ this.props.height } />
        );
    }

});

export default Bar;
