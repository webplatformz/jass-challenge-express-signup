import React, {Component} from 'react';

import Footer from '../layout/Footer';
import AppNavbar from '../nav/AppNavbar';

class LandingLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {isNavbarTransparent: true};
    }

    handleScroll() {
        const offset = 50;
        const windowScrollTop = window.pageYOffset;
        if (windowScrollTop <= offset) {
            this.setState({isNavbarTransparent: true});
        } else {
            this.setState({isNavbarTransparent: false});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    render() {
        const isNavbarTransparent = this.state.isNavbarTransparent;
        return (
            <div>
                <AppNavbar isTransparent={isNavbarTransparent}/>
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
