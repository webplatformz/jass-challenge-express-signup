import React, {Component} from 'react';
import Waypoint from 'react-waypoint';
import Footer from '../layout/Footer';
import AppNavbar from '../nav/AppNavbar';

class LandingLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavbarTransparent: true
        };
    }

    render() {
        const isNavbarTransparent = this.state.isNavbarTransparent;
        return (
            <div>
                <AppNavbar isTransparent={isNavbarTransparent}/>
                <Waypoint
                    onEnter={() => this.setState({isNavbarTransparent: true})}
                    onLeave={() => this.setState({isNavbarTransparent: false})}
                    topOffset={'-50px'}
                />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

LandingLayout.propTypes = {
    children: React.PropTypes.object
};

export default LandingLayout;
