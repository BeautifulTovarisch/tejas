//Line sub-component

import {
  calcTransition,
  selectComponent
} from '../calc';


const Line = React.createClass({
    getInitialState: () => ({
        path: null,
        color: null,
        dashedArray: 'none'
    }),
    componentDidMount() {
      this.setState({
          path: this.props.path,
          lineColor: this.props.lineColor,
          dashedArray: this.props.dashedArray
      });

    },
    componentWillReceiveProps( nextProps ) {
        //If new props
        if( nextProps !== this.props ) {
          //Get node
          const node = selectComponent( this );

          //Use d3 to transition
          node.transition( calcTransition() )
              .attr( 'd', nextProps.path )
              .attr( 'stroke', nextProps.lineColor )
              .on('end', () => this.setState({ //Very important here, update react to mirror the new attributes
                  path: nextProps.path,
                  lineColor: nextProps.lineColor,
                  dashedArray: nextProps.dashedArray
              }) );
        }
    },
    render() {
        return (
            <path
                fill='none'
                strokeWidth='4'
                d={ this.state.path }
                stroke={ this.state.lineColor }
                strokeDasharray={ this.state.dashedArray } />
        )
    }
});

export default Line;