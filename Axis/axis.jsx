'use strict';

import {
  renderAxis
} from './calc';

export const Axis = React.createClass({
    getDefaultProps() {
        return {
            "axis":         'x',
            "data":         [],
            "format":       ",.0f",
            "height":       10,
            "tickNumber":   5
        };
    },
    componentDidMount(){
        const axisType = this.props.axis;
        renderAxis( this, axisType, this.props );
    },
    componentWillReceiveProps( nextProps ){
        if( !nextProps.data ) return;
        const axisType = nextProps.axis;
        renderAxis( this, axisType, nextProps );
    },
    render() {
      return (
        <g></g>
      );
    }

});

export default Axis;
