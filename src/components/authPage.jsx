const _ = require('lodash');
const React = require('react');
const ReactRedux = require('react-redux');

const Translations = require('../utils/translations');

const authActions = require('../redux/actions/authActions');
const errorActions = require('../redux/actions/errorActions');

const Logo = require('./logo');

require('../styles/authPage.scss');

function mapStateToProps(state) {
    return {
        errorMsg: state.errorMsg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginWithFacebook: () => dispatch(authActions.loginWithFacebook()),
        loginWithGoogle: () => dispatch(authActions.loginWithGoogle()),
        loginWithEmail: (email, password) => dispatch(authActions.loginWithEmailAndPassword(email, password)),
        signUpWithUserAndPassword: (email, password) => dispatch(authActions.createUserWithEmailAndPassword(email, password)),
        sendPasswordResetEmail: email => dispatch(authActions.sendPasswordResetEmail(email)),
        reportError: (message) => dispatch(errorActions.reportError(message))
    };
}

function isLoginMode(authMode) {
    return authMode === 'login';
}

function isRegisterMode(authMode) {
    return authMode === 'register';
}

function isFormValid(state, authMode) {
    switch (authMode) {
        case 'login':
            return !_.isEmpty(state.email) && !_.isEmpty(state.password);
        case 'register':
            return !_.isEmpty(state.email) && !_.isEmpty(state.password) & !_.isEmpty(state.passwordAgain);
        case 'forgotPassword':
            return !_.isEmpty(state.email);
    }
}

function createLogo() {
    return (
        <div className="medium-centered logo">
            <Logo width={120} height={120} />
        </div>
    );
}

function createSocialButtonsSection(loginWithFacebook, loginWithGoogle) {
    return (
        <div>
            <button onClick={loginWithFacebook} className='facebook button split'>
                <span>Facebook</span>
                <i className='fa fa-facebook-official' />
            </button>

            <button onClick={loginWithGoogle} className='google button split'>
                <span>Google</span>
                <i className='fa fa-google' aria-hidden='true' />
            </button>

            <hr className='hr' />
        </div>
    );
}

function createErrorSection(message) {
    return (
        <div className='error-msg' key='homePage-error-message'>
            <i className='fa fa-exclamation-circle' aria-hidden='true' />
            <span className='error-msg-txt'>{message}</span>
        </div>
    );
}

function createInput(type, value, onChange, name, placeholder) {
    return (
        <input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} />
    );
}

function getButtonLabel(authMode) {
    switch (authMode) {
        case 'login':
            return Translations.AUTH_PAGE.SUBMIT_BTN.LOGIN;
        case 'register':
            return Translations.AUTH_PAGE.SUBMIT_BTN.REGISTER;
        case 'forgotPassword':
            return Translations.AUTH_PAGE.SUBMIT_BTN.FORGOT_PASSWORD;
    }
}

function createSubmitButton(onSubmit, disabled, authMode) {
    return (
        <button onClick={onSubmit} className="button split success" disabled={disabled}>
            <span>{getButtonLabel(authMode)}</span>
        </button>
    );
}

function createLinksSection(authMode, navToLogin, navToRegister, navToForgotPassword) {

    function createLoginScreenLinks() {
        return (
            <div className='row'>
                <div className='column small-6 red-link'>
                    <a onClick={navToRegister}>{Translations.AUTH_PAGE.LINKS.GO_TO_REGISTER}</a>
                </div>
                <div className='column small-6 red-link'>
                    <a onClick={navToForgotPassword}>{Translations.AUTH_PAGE.LINKS.GO_TO_FORGOT_PASSWORD}</a>
                </div>
            </div>
        );
    }

    function createNONLoginScreenLinks() {
        return (
            <div>
                <a className='red-link' onClick={navToLogin}>{Translations.AUTH_PAGE.LINKS.GO_TO_LOGIN}</a>
            </div>
        );
    }

    return (
        <div>
            { isLoginMode(authMode) ? createLoginScreenLinks() : createNONLoginScreenLinks() }
        </div>
    );
}

class AuthPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authMode: 'login',
            email: '',
            password: '',
            passwordAgain: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleKeyDown = e => {
        if (e.keyCode === 13 && isFormValid(this.state, this.state.authMode)) {
            this.onSubmit();
        }
    };

    onSubmit = () => {
        switch (this.state.authMode) {
            case 'login':
                this.props.loginWithEmail(this.state.email, this.state.password);
                break;
            case 'register':
                if (_.isEqual(this.state.password, this.state.passwordAgain)) {
                    this.props.signUpWithUserAndPassword(this.state.email, this.state.password);
                } else {
                    this.props.reportError(Translations.ERROR_MESSAGES.AUTH.NOT_SAME_PASSWORD);
                }
                break;
            case 'forgotPassword':
                this.props.sendPasswordResetEmail(this.state.email);
                this.onAuthModeChange('login')
        }
    };

    onAuthModeChange = authMode => {
      this.setState({ authMode });
    };

    render() {
        const createNavFunc = authMode => this.onAuthModeChange.bind(this, authMode);

        return (
            <div className="large-6 columns small-centered auth-form-container">

                { createLogo() }

                { isLoginMode(this.state.authMode) || isRegisterMode(this.state.authMode) ? createSocialButtonsSection(this.props.loginWithFacebook, this.props.loginWithGoogle) : null }

                { this.props.errorMsg ? createErrorSection(this.props.errorMsg) : null }

                <div onKeyDown={this.handleKeyDown} className='auth-form'>

                    { createInput('email', this.state.email, this.onChange, 'email',Translations.AUTH_PAGE.FIELDS.EMAIL) }

                    { isLoginMode(this.state.authMode) || isRegisterMode(this.state.authMode) ? createInput('password', this.state.password, this.onChange, 'password',Translations.AUTH_PAGE.FIELDS.PASSWORD) : null }

                    { isRegisterMode(this.state.authMode) ? createInput('password', this.state.passwordAgain, this.onChange, 'passwordAgain', Translations.AUTH_PAGE.FIELDS.PASSWORD_AGAIN) : null }

                    { createSubmitButton(this.onSubmit, !isFormValid(this.state, this.state.authMode), this.state.authMode) }

                    { createLinksSection(this.state.authMode, createNavFunc('login'), createNavFunc('register'), createNavFunc('forgotPassword')) }

                </div>
            </div>
        );
    }
}

AuthPage.propTypes = {
    loginWithFacebook: React.PropTypes.func.isRequired,
    loginWithGoogle: React.PropTypes.func.isRequired,
    loginWithEmail: React.PropTypes.func.isRequired,
    signUpWithUserAndPassword: React.PropTypes.func.isRequired,
    sendPasswordResetEmail: React.PropTypes.func.isRequired,
    reportError: React.PropTypes.func.isRequired,
    errorMsg: React.PropTypes.string
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AuthPage);