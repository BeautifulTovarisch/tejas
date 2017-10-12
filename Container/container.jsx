'use strict';

import {
    calcViewBox,
    getComponentWidth,
    getComponentHeight
} from '../calc';

export const Container = React.createClass({
    getDefaultProps() {
        return {
            "marginRight": 0,
            "marginBottom": 0
        };
    },
    getInitialState() {
        return {
            "width": 0,
            "height": 0
        };
    },
    measureComponent() {
        const width                = getComponentWidth( this );
        const height               = this.props.height || getComponentHeight( this );
        const { marginRight, marginBottom } = this.props;

        // Need to offset the buffers to prevent infinite expansion
        this.setState({
            "width": width - marginRight,
            "height": height - marginBottom
        });
    },
    componentDidMount() {
        window.addEventListener( 'resize', this.measureComponent );
        this.measureComponent();
    },
    render() {
        
        const width                = this.state.width;
        const height               = this.state.height;
        const { marginRight, marginBottom } = this.props;

        const viewBox = calcViewBox( width + marginRight, height + marginBottom );
        
        // pass down height ( width? ) from container
        // height, width can be measured once and calculated with margins baked-in
        const children = React.Children.map( this.props.children, child =>
            React.cloneElement( child, {
                "width": width,
                "height": height            
            })
        );
        
        return (
            <svg
              width="100%"
              height="100%"
              viewBox={ viewBox }
              preserveAspectRatio="xMidYMid meet" >
                { children }
            </svg>
        );
    }
});

export default Container;
