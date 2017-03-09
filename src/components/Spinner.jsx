import React from 'react';
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import APIPropTypes from '../utils/APIPropTypes';
import Logo from './Logo';

import '../styles/spinner.scss';

const Spinner = ({ loadingAPI }) => {
    const overlayClass = classNames({
        overlay: true,
        hide: !loadingAPI.isBusy
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
};

Spinner.displayName = 'Spinner';

Spinner.propTypes = {
    loadingAPI: APIPropTypes.loadingAPI.isRequired
};

export default inject('loadingAPI')(observer(Spinner));