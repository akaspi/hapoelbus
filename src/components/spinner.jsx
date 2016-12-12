const React = require('react');
const ReactRedux = require('react-redux');
const classNames = require('classnames');

require('../styles/spinner.scss');

const Logo = require('./logo.jsx');

function mapStateToProps(state) {
    return {
      isLoading: state.loading
    };
}

class Spinner extends React.Component {
    render() {
        const overlayClass = classNames({
            overlay: true,
            hide: !this.props.isLoading
        });

        return (
            <div className="spinner-container">
                <div className={overlayClass}>
                    <div className="spinner">
                        <Logo height={80} width={80} opacity={0.7} />
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                </div>
            </div>
        );
    }
}

Spinner.PropTypes = {
    isLoading: React.PropTypes.bool
};

module.exports = ReactRedux.connect(mapStateToProps)(Spinner);