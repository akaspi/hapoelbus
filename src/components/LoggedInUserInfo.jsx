import _ from 'lodash';
import React from 'react';
import { observer, inject } from 'mobx-react';
import APIPropTypes from '../utils/APIPropTypes';

function getUserTitle(currentUser) {
    if (!currentUser) {
        return 'משתמש';
    }
    return currentUser.firstName;
}

function noProtocol(url) {
    return url.replace(/^https?\:/, '');
}

const LoggedInUserInfo = ({ authDataAPI, usersInfoAPI }) => {
    if (!authDataAPI.authData) { //TODO: Blocked By Redux
        return null;
    }

    return (
        <div className="medium-5 small-10 column user-info">
            <img className="avatar"
                 src={noProtocol(authDataAPI.authData.photoURL)}
                 onClick={_.noop}
            />
            <span>שלום </span>
            <span className="user-name">{getUserTitle(usersInfoAPI.currentUserInfo)}</span>
            <span> | </span>
            <a className="disconnect" onClick={authDataAPI.logOut}>התנתק</a>
        </div>
    );
};

LoggedInUserInfo.displayName = 'LoggedInUserInfo';

LoggedInUserInfo.propTypes = {
    authDataAPI: APIPropTypes.authDataAPI.isRequired,
    usersInfoAPI: APIPropTypes.usersInfoAPI.isRequired
};

export default inject('authDataAPI', 'usersInfoAPI')(observer(LoggedInUserInfo));