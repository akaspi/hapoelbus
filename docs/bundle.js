/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _root = __webpack_require__(3);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _config = __webpack_require__(92);
	
	var config = _interopRequireWildcard(_config);
	
	var _clientDB = __webpack_require__(12);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	clientDB.initialize(config.firebase);
	
	_reactDom2.default.render(_react2.default.createElement(_root2.default), document.getElementById('app'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _root = __webpack_require__(4);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _makeStore = __webpack_require__(82);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Root = function (_React$Component) {
	  _inherits(Root, _React$Component);
	
	  function Root() {
	    _classCallCheck(this, Root);
	
	    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	  }
	
	  _createClass(Root, [{
	    key: 'createStore',
	    value: function createStore() {
	      return (0, _makeStore.makeStore)();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _root2.default.apply(this);
	    }
	  }]);
	
	  return Root;
	}(_react2.default.Component);
	
	module.exports = Root;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "root.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(6),
	    __webpack_require__(7)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, ReactRedux, App) {
	    'use strict';
	    return function () {
	        return React.createElement(ReactRedux.Provider, { 'store': this.createStore() }, React.createElement(App, {}));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	var ReactReudx = __webpack_require__(6);
	
	var authActions = __webpack_require__(8);
	var navigationConstatns = __webpack_require__(21);
	
	var Spinner = __webpack_require__(22);
	var TopBar = __webpack_require__(29);
	var AuthPage = __webpack_require__(32);
	var HomePage = __webpack_require__(36);
	var UsersPage = __webpack_require__(55);
	var EventsPage = __webpack_require__(62);
	var BookingsPage = __webpack_require__(70);
	var DistributionPage = __webpack_require__(74);
	var EditUserInfoPage = __webpack_require__(79);
	
	__webpack_require__(80);
	
	function mapStateToProps(state) {
	    return {
	        authData: state.authData,
	        currentPage: state.currentPage
	    };
	}
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        fetchAuthData: function fetchAuthData() {
	            return dispatch(authActions.fetchAuthData());
	        }
	    };
	};
	
	function getPageComponent(currentPageId) {
	    switch (currentPageId) {
	        case navigationConstatns.PAGES.HOME.val:
	            return React.createElement(HomePage, { key: 'home-page' });
	        case navigationConstatns.PAGES.USERS.val:
	            return React.createElement(UsersPage, { key: 'users-page' });
	        case navigationConstatns.PAGES.EVENTS.val:
	            return React.createElement(EventsPage, { key: 'events-page' });
	        case navigationConstatns.PAGES.BOOKINGS.val:
	            return React.createElement(BookingsPage, { key: 'bookings-page' });
	        case navigationConstatns.PAGES.DISTRIBUTION.val:
	            return React.createElement(DistributionPage, { key: 'distribution-page' });
	        case navigationConstatns.PAGES.EDIT_USER_INFO.val:
	            return React.createElement(EditUserInfoPage, { key: 'editUserInfo-page' });
	    }
	}
	
	function getPageToRender(authData, currentPageId) {
	    if (!authData && currentPageId === navigationConstatns.PAGES.AUTH.val) {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(AuthPage, null)
	        );
	    }
	
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(TopBar, null),
	        getPageComponent(currentPageId)
	    );
	}
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	    }
	
	    _createClass(App, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.props.fetchAuthData();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'site large-6 small-12 small-centered' },
	                React.createElement(Spinner, null),
	                getPageToRender(this.props.authData, this.props.currentPage)
	            );
	        }
	    }]);
	
	    return App;
	}(React.Component);
	
	App.propTypes = {
	    authData: React.PropTypes.object,
	    currentPage: React.PropTypes.string.isRequired,
	    fetchAuthData: React.PropTypes.func.isRequired
	};
	
	module.exports = ReactReudx.connect(mapStateToProps, mapDispatchToProps)(App);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchAuthData = exports.sendPasswordResetEmail = exports.createUserWithEmailAndPassword = exports.loginWithEmailAndPassword = exports.loginWithGoogle = exports.loginWithFacebook = exports.signOut = exports.userSignedOut = exports.setAuthData = exports.AUTH_ERROR_CODES_MAP = undefined;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(9);
	
	var _bluebird = __webpack_require__(10);
	
	var _constants = __webpack_require__(11);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _clientDB = __webpack_require__(12);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _userActions = __webpack_require__(14);
	
	var userActions = _interopRequireWildcard(_userActions);
	
	var _eventActions = __webpack_require__(17);
	
	var eventActions = _interopRequireWildcard(_eventActions);
	
	var _bookingActions = __webpack_require__(18);
	
	var bookingActions = _interopRequireWildcard(_bookingActions);
	
	var _loadingActions = __webpack_require__(15);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(16);
	
	var errorActions = _interopRequireWildcard(_errorActions);
	
	var _navigationActions = __webpack_require__(19);
	
	var navigationActions = _interopRequireWildcard(_navigationActions);
	
	var _updatePhotoUrlFixer = __webpack_require__(20);
	
	var _updatePhotoUrlFixer2 = _interopRequireDefault(_updatePhotoUrlFixer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var AUTH_ERROR_CODES_MAP = exports.AUTH_ERROR_CODES_MAP = {
	  'auth/invalid-email': Constants.ERRORS.INVALID_MAIL,
	  'auth/weak-password': Constants.ERRORS.WEAK_PASSWORD,
	  'auth/email-already-in-use': Constants.ERRORS.EMAIL_IN_USE,
	  'auth/wrong-password': Constants.ERRORS.WRONG_PASSWORD,
	  'auth/account-exists-with-different-credential': Constants.ERRORS.EMAIL_IN_USE,
	  'auth/user-not-found': Constants.ERRORS.USER_NOT_FOUND
	};
	
	var setAuthData = exports.setAuthData = function setAuthData(uid, email, photoURL, isAdmin) {
	  return {
	    type: _actionTypes.SET_AUTH_DATA,
	    uid: uid,
	    email: email,
	    photoURL: photoURL,
	    isAdmin: isAdmin
	  };
	};
	
	var fetchAppData = function fetchAppData(dispatch, user) {
	  return clientDB.read('admins/' + user.uid).then(function (isAdmin) {
	    return dispatch(setAuthData(user.uid, user.email, _.get(user, ['providerData', 0, 'photoURL']), !!isAdmin));
	  }).then(function () {
	    return _bluebird.Promise.all([dispatch(userActions.fetchUsers()), dispatch(eventActions.fetchEvents()), dispatch(bookingActions.fetchBookings())]);
	  });
	};
	
	var userSignedOut = exports.userSignedOut = function userSignedOut() {
	  return {
	    type: _actionTypes.SIGN_OUT
	  };
	};
	
	var signOut = exports.signOut = function signOut() {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.signOut().then(function () {
	      return dispatch(userSignedOut());
	    }).then(function () {
	      return dispatch(navigationActions.navigateTo(Constants.PAGES.AUTH.val));
	    }).catch(function (dbError) {
	      return dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code]));
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var loginWithFacebook = exports.loginWithFacebook = function loginWithFacebook() {
	  return function () {
	    return clientDB.loginWithFacebook();
	  };
	};
	
	var loginWithGoogle = exports.loginWithGoogle = function loginWithGoogle() {
	  return function () {
	    return clientDB.loginWithGoogle();
	  };
	};
	
	var loginWithEmailAndPassword = exports.loginWithEmailAndPassword = function loginWithEmailAndPassword(email, password) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.loginWithEmailAndPassword(email, password).then(function (user) {
	      return fetchAppData(dispatch, user);
	    }).then(function () {
	      return dispatch(navigationActions.navigateTo(Constants.PAGES.HOME.val));
	    }).catch(function (dbError) {
	      return dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code]));
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var createUserWithEmailAndPassword = exports.createUserWithEmailAndPassword = function createUserWithEmailAndPassword(email, password) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.createUserWithEmailAndPassword(email, password).then(function (user) {
	      return fetchAppData(dispatch, user);
	    }).then(function () {
	      return dispatch(navigationActions.navigateTo(Constants.PAGES.EDIT_USER_INFO.val));
	    }).catch(function (dbError) {
	      return dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code]));
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var sendPasswordResetEmail = exports.sendPasswordResetEmail = function sendPasswordResetEmail(email) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.sendPasswordResetEmail(email).catch(function (dbError) {
	      return dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code]));
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var fetchAuthData = exports.fetchAuthData = function fetchAuthData() {
	  return function (dispatch, getState) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.getLoggedInUser().then(function (user) {
	      if (user) {
	        return fetchAppData(dispatch, user).then(function () {
	          return (0, _updatePhotoUrlFixer2.default)(dispatch, getState());
	        }).then(function () {
	          var userInfo = getState().users[user.uid];
	          if (_.isEmpty(userInfo)) {
	            dispatch(navigationActions.navigateTo(Constants.PAGES.EDIT_USER_INFO.val));
	          } else {
	            dispatch(navigationActions.navigateTo(Constants.PAGES.HOME.val));
	          }
	        });
	      }
	      return null;
	    }).catch(function (dbError) {
	      console.error(dbError); // eslint-disable-line no-console
	      dispatch(errorActions.reportError(AUTH_ERROR_CODES_MAP[dbError.code]));
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "authActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var START_LOADING = exports.START_LOADING = 'START_LOADING';
	var STOP_LOADING = exports.STOP_LOADING = 'STOP_LOADING';
	
	var REPORT_ERROR = exports.REPORT_ERROR = 'REPORT_ERROR';
	
	var SET_AUTH_DATA = exports.SET_AUTH_DATA = 'SET_AUTH_DATA';
	var SIGN_OUT = exports.SIGN_OUT = 'SIGN_OUT';
	
	var USERS_RECEIVED = exports.USERS_RECEIVED = 'USERS_RECEIVED';
	var USER_REMOVED = exports.USER_REMOVED = 'USER_REMOVED';
	
	var EVENTS_RECEIVED = exports.EVENTS_RECEIVED = 'EVENTS_RECEIVED';
	var EVENT_REMOVED = exports.EVENT_REMOVED = 'EVENT_REMOVED';
	
	var BOOKINGS_RECEIVED = exports.BOOKINGS_RECEIVED = 'BOOKINGS_RECEIVED';
	var BOOKING_CANCELED = exports.BOOKING_CANCELED = 'BOOKING_CANCELED';
	
	var NAVIGATE_TO = exports.NAVIGATE_TO = 'NAVIGATE_TO';
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "actionTypes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = Promise;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  ERRORS: {
	    GENERAL: 'שגיאה במערכת',
	    INVALID_MAIL: 'אימייל לא תקין.',
	    WEAK_PASSWORD: 'הסיסמא צריכה להכיל לפחות 6 תווים.',
	    EMAIL_IN_USE: 'אימייל בשימוש. אנא בחר דרך התחברות אחרת.',
	    WRONG_PASSWORD: 'סיסמא לא נכונה.',
	    NOT_SAME_PASSWORD: 'סיסמאות צריכות להיות זהות.',
	    USER_NOT_FOUND: 'כתובת האיימיל לא נמצאה.'
	  },
	
	  DATE_TIME_DATA: {
	    days: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
	    months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	    years: ['16', '17'],
	    hours: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
	    minutes: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
	  },
	
	  EVENT_DEFAULT_PIC: 'http://image.flaticon.com/icons/svg/124/124150.svg',
	  EVENTS_TYPES: {
	    'hapoel-tlv': {
	      src: 'http://www.basket.co.il/pics/2007/logos/logo_hapoelta.png',
	      name: 'הפועל תל אביב'
	    },
	    'maccabi-tlv': {
	      src: 'http://www.basket.co.il/pics/2007/logos/logo_maccabi.png',
	      name: 'מכבי תל אביב'
	    },
	    'herzeliya': {
	      src: 'http://www.basket.co.il/pics/2007/logos/logo_sharon.png',
	      name: 'בני הרצליה'
	    },
	    'kiryat-gat': {
	      src: 'http://www.basket.co.il/Images/teams/bigGat.png',
	      name: 'מכבי קרית גת'
	    },
	    'gilboa': {
	      src: 'http://www.basket.co.il/pics/2007/logos/logo_Galil.png',
	      name: 'גליל/גלבוע'
	    },
	    'nahariya': {
	      src: 'http://www.basket.co.il/pics/2007/logos/logo_naharia.png',
	      name: 'עירוני נהריה'
	    },
	    'holon': {
	      src: 'http://www.basket.co.il/pics/2007/articles/logo_hh.png',
	      name: 'הפועל חולון'
	    },
	    'ashdod': {
	      src: 'http://www.basket.co.il/pics/2007/logos/logo_ashdod.png',
	      name: 'מכבי אשדוד'
	    },
	    'haifa': {
	      src: 'http://www.basket.co.il/pics/2007/logos/logo_haifa.png',
	      name: 'מכבי חיפה'
	    },
	    'rishon': {
	      src: 'http://www.basket.co.il/pics/2007/logos/logo_rishon.png',
	      name: 'מכבי ראשון לציון'
	    },
	    'eilat': {
	      src: 'http://www.basket.co.il/pics/2007/logos/logo_eilat.png',
	      name: 'הפועל אילת'
	    },
	    'ljubljana': {
	      src: 'http://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Union_olimpija.png/140px-Union_olimpija.png',
	      name: 'לובליאנה'
	    },
	    'valencia': {
	      src: 'http://samvanrossom.com/wp-content/uploads/2014/10/valencia-basket1-logo.jpg',
	      name: 'ולנסיה'
	    },
	    'kuban': {
	      src: 'http://upload.wikimedia.org/wikipedia/en/thumb/0/04/Lokomotiv_Kuban_logo.png/200px-Lokomotiv_Kuban_logo.png',
	      name: 'לוקומוטיב קובאן'
	    },
	    'fuenlabrada': {
	      src: 'http://upload.wikimedia.org/wikipedia/en/thumb/1/13/Baloncestofuenlabrada.jpg/110px-Baloncestofuenlabrada.jpg',
	      name: 'פואנלברדה'
	    },
	    'ulm': {
	      src: 'http://nachwuchs.bbu01.com/modules/mod_bbunewsflash/assets/images/noimage_thumb.jpg',
	      name: 'אולם'
	    },
	    'vilna': {
	      src: 'http://upload.wikimedia.org/wikipedia/en/thumb/7/75/BC_Lietuvos_Rytas_logo.svg/907px-BC_Lietuvos_Rytas_logo.svg.png',
	      name: 'ריטאס וילנה'
	    },
	    'novgorod': {
	      src: 'http://olympiakos-live.gr/img/teams/Nizhny%20Novgorod.png',
	      name: 'ניז׳ני'
	    },
	    'zenit': {
	      src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/2/25/FC_Zenit_1_star_2015_logo.png/220px-FC_Zenit_1_star_2015_logo.png',
	      name: 'זניט'
	    }
	  },
	  STATIONS: {
	    modiin: 'מודיעין',
	    tlv: 'תל אביב'
	  },
	  MAX_SEASON_TICKETS: 7,
	  MAX_EXTRA_PASSENGERS: 4,
	  PHONE_PREFIXES: ['050', '052', '053', '054', '055', '057', '058'],
	  PAGES: {
	    HOME: { val: 'home', name: 'דף הבית', visible: true },
	    AUTH: { val: 'auth', name: '' },
	    USERS: { val: 'users', name: 'משתמשים', visible: true },
	    EVENTS: { val: 'events', name: 'אירועים', visible: true },
	    BOOKINGS: { val: 'bookings', name: 'רשומים להסעות', visible: true },
	    DISTRIBUTION: { val: 'distribution', name: 'מיילים', visible: true },
	    EDIT_USER_INFO: { val: 'editUserInfo', name: '' }
	  },
	  EVENTS_STATUS: {
	    CLOSED: {
	      value: 'closed',
	      name: 'ההרשמה סגורה'
	    },
	    OPEN_FOR_MEMBERS: {
	      value: 'openForMembers',
	      name: 'ההרשמה פתוחה למנויי הסעות'
	    },
	    OPEN_FOR_ALL: {
	      value: 'openForAll',
	      name: 'ההרשמה פתוחה לכולם'
	    },
	    FULLY_BOOKED: {
	      value: 'fullyBooked',
	      name: 'ההסעה מלאה'
	    }
	  },
	  DISTRIBUTION: {
	    RECIPIENTS: {
	      ALL: {
	        value: 'allUsers',
	        name: 'כלל המשתמשים'
	      },
	      MEMBERS_ONLY: {
	        value: 'membersOnly',
	        name: 'מנויים בלבד'
	      },
	      BOOKED_TO_EVENT: {
	        value: 'bookedToEvent',
	        name: 'רשומים להסעה'
	      }
	    },
	    METHODS: {
	      EMAIL: 'email',
	      SMS: 'sms'
	    },
	    TYPES: {
	      TEMPLATE: 'template',
	      CUSTOM: 'custom'
	    },
	    TEMPLATES: {
	      EVENT_OPEN_FOR_MEMBERS: {
	        id: '4fab6b92-bf61-48f1-b13b-bc702ed78695',
	        name: 'פתיחת הרשמה למנויים'
	      },
	      EVENT_OPEN_FOR_ALL: {
	        id: 'dbe3e0e4-bb0e-41ad-bf12-5be64a30f3b7',
	        name: 'פתיחת הרשמה לכולם'
	      },
	      CHANGE_EVENT_DETAILS: {
	        id: '170fcd4f-df2e-44dd-b760-693d04fdd07c',
	        name: 'שינוי במועד האירוע'
	      }
	    }
	  }
	
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "constants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLoggedInUser = exports.signOut = exports.createUserWithEmailAndPassword = exports.sendPasswordResetEmail = exports.loginWithEmailAndPassword = exports.loginWithFacebook = exports.loginWithGoogle = exports.remove = exports.update = exports.push = exports.read = exports.setIn = exports.initialize = undefined;
	
	var _firebase = __webpack_require__(13);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	var _bluebird = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initialize = exports.initialize = function initialize(config) {
	  _firebase2.default.initializeApp(config);
	};
	
	var setIn = exports.setIn = function setIn(path, data) {
	  return new _bluebird.Promise(function (resolve, reject) {
	    _firebase2.default.database().ref(path).set(data).then(resolve).catch(reject);
	  });
	};
	
	var read = exports.read = function read(path) {
	  return new _bluebird.Promise(function (resolve, reject) {
	    _firebase2.default.database().ref(path).once('value').then(function (snapshot) {
	      return resolve(snapshot.val());
	    }).catch(reject);
	  });
	};
	
	var push = exports.push = function push(path, data) {
	  return new _bluebird.Promise(function (resolve, reject) {
	    var uniqueKey = _firebase2.default.database().ref(path).push().key;
	    setIn(path + '/' + uniqueKey, data).then(function () {
	      return resolve(uniqueKey);
	    }).catch(reject);
	  });
	};
	
	var update = exports.update = function update(path, data) {
	  return new _bluebird.Promise(function (resolve, reject) {
	    _firebase2.default.database().ref(path).update(data).then(resolve).catch(reject);
	  });
	};
	
	var remove = exports.remove = function remove(path) {
	  return new _bluebird.Promise(function (resolve, reject) {
	    _firebase2.default.database().ref(path).remove().then(resolve).catch(reject);
	  });
	};
	
	var loginWithGoogle = exports.loginWithGoogle = function loginWithGoogle() {
	  return new _bluebird.Promise(function (resolve) {
	    var provider = new _firebase2.default.auth.GoogleAuthProvider();
	    _firebase2.default.auth().signInWithRedirect(provider).then(resolve);
	  });
	};
	
	var loginWithFacebook = exports.loginWithFacebook = function loginWithFacebook() {
	  return new _bluebird.Promise(function (resolve) {
	    var provider = new _firebase2.default.auth.FacebookAuthProvider();
	    _firebase2.default.auth().signInWithRedirect(provider).then(resolve);
	  });
	};
	
	var loginWithEmailAndPassword = exports.loginWithEmailAndPassword = function loginWithEmailAndPassword(email, password) {
	  return new _bluebird.Promise(function (resolve, reject) {
	    _firebase2.default.auth().signInWithEmailAndPassword(email, password).then(resolve).catch(reject);
	  });
	};
	
	var sendPasswordResetEmail = exports.sendPasswordResetEmail = function sendPasswordResetEmail(email) {
	  return new _bluebird.Promise(function (resolve, reject) {
	    _firebase2.default.auth().sendPasswordResetEmail(email).then(resolve).catch(reject);
	  });
	};
	
	var createUserWithEmailAndPassword = exports.createUserWithEmailAndPassword = function createUserWithEmailAndPassword(email, password) {
	  return new _bluebird.Promise(function (resolve, reject) {
	    _firebase2.default.auth().createUserWithEmailAndPassword(email, password).then(resolve).catch(reject);
	  });
	};
	
	var signOut = exports.signOut = function signOut() {
	  return new _bluebird.Promise(function (resolve, reject) {
	    _firebase2.default.auth().signOut().then(resolve).catch(reject);
	  });
	};
	
	var getLoggedInUser = exports.getLoggedInUser = function getLoggedInUser() {
	  return new _bluebird.Promise(function (resolve, reject) {
	    _firebase2.default.auth().getRedirectResult().then(function (result) {
	      if (result.user) {
	        resolve(result.user);
	      } else {
	        (function () {
	          var onAuthStateChange = function onAuthStateChange(user) {
	            _firebase2.default.auth().removeAuthTokenListener(onAuthStateChange);
	            resolve(user);
	          };
	          _firebase2.default.auth().onAuthStateChanged(onAuthStateChange);
	        })();
	      }
	    }).catch(reject);
	  });
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "clientDB.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = firebase;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeUser = exports.updateUser = exports.fetchUsers = exports.usersReceived = exports.usersRemoved = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(9);
	
	var _bluebird = __webpack_require__(10);
	
	var _clientDB = __webpack_require__(12);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(15);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(16);
	
	var errorActions = _interopRequireWildcard(_errorActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var USER_INFO_KEYS = ['email', 'firstName', 'lastName', 'phonePrefix', 'phoneNumber', 'requestForMembership', 'station', 'subscribeSMS', 'subscribeMail', 'photoURL'];
	var PATH_MAP = {
	  USERS_INFO: 'usersInfo',
	  SEASON_TICKETS: 'seasonTickets',
	  BOOKINGS: 'bookings'
	};
	
	var buildUser = function buildUser(userInfo, seasonTickets) {
	  var user = _.merge({}, userInfo);
	  if (seasonTickets) {
	    _.merge(user, { seasonTickets: seasonTickets });
	  }
	  return user;
	};
	
	var fetchAllUsers = function fetchAllUsers() {
	  var userReadPromises = [clientDB.read(PATH_MAP.USERS_INFO), clientDB.read(PATH_MAP.SEASON_TICKETS)];
	
	  return _bluebird.Promise.all(userReadPromises).then(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        usersInfo = _ref2[0],
	        seasonTickets = _ref2[1];
	
	    return _.transform(usersInfo, function (acc, info, uid) {
	      acc[uid] = buildUser(info, seasonTickets && seasonTickets[uid]); // eslint-disable-line no-param-reassign
	    }, {});
	  });
	};
	
	var fetchSingleUser = function fetchSingleUser(uid) {
	  var userReadPromises = [clientDB.read(PATH_MAP.USERS_INFO + '/' + uid), clientDB.read(PATH_MAP.SEASON_TICKETS + '/' + uid)];
	
	  return _bluebird.Promise.all(userReadPromises).then(function (_ref3) {
	    var _ref4 = _slicedToArray(_ref3, 2),
	        userInfo = _ref4[0],
	        seasonTickets = _ref4[1];
	
	    if (userInfo) {
	      return _defineProperty({}, uid, buildUser(userInfo, seasonTickets));
	    }
	    return null;
	  });
	};
	
	var usersRemoved = exports.usersRemoved = function usersRemoved(uid) {
	  return {
	    type: _actionTypes.USER_REMOVED,
	    uid: uid
	  };
	};
	
	var usersReceived = exports.usersReceived = function usersReceived(users) {
	  return {
	    type: _actionTypes.USERS_RECEIVED,
	    users: users
	  };
	};
	
	var fetchUsers = exports.fetchUsers = function fetchUsers() {
	  return function (dispatch, getState) {
	    var uid = _.get(getState(), ['authData', 'uid']);
	    var isAdmin = _.get(getState(), ['authData', 'isAdmin']);
	    var fetchPromise = isAdmin ? fetchAllUsers() : fetchSingleUser(uid);
	
	    return fetchPromise.then(function (users) {
	      if (users) {
	        dispatch(usersReceived(users));
	      }
	    });
	  };
	};
	
	var updateUser = exports.updateUser = function updateUser(uid, user) {
	  return function (dispatch, getState) {
	    dispatch(loadingActions.startLoading());
	
	    var isAdmin = _.get(getState(), ['authData', 'isAdmin']);
	
	    var userUpdatePromises = [clientDB.update('usersInfo/' + uid, _.pick(user, USER_INFO_KEYS))];
	
	    if (isAdmin && _.has(user, 'seasonTickets')) {
	      userUpdatePromises.push(clientDB.setIn('seasonTickets/' + uid, user.seasonTickets));
	    }
	
	    return _bluebird.Promise.all(userUpdatePromises).then(function () {
	      return dispatch(usersReceived(_defineProperty({}, uid, user)));
	    }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var removeUser = exports.removeUser = function removeUser(uid) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    var userRemovePromises = _.map(PATH_MAP, function (userPath) {
	      return clientDB.remove(userPath + '/' + uid);
	    });
	
	    return _bluebird.Promise.all(userRemovePromises).then(function () {
	      return dispatch(usersRemoved(uid));
	    }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "userActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.stopLoading = exports.startLoading = undefined;
	
	var _actionTypes = __webpack_require__(9);
	
	var startLoading = exports.startLoading = function startLoading() {
	  return {
	    type: _actionTypes.START_LOADING
	  };
	};
	
	var stopLoading = exports.stopLoading = function stopLoading() {
	  return {
	    type: _actionTypes.STOP_LOADING
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "loadingActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reportError = undefined;
	
	var _actionTypes = __webpack_require__(9);
	
	var _constants = __webpack_require__(11);
	
	var Constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var reportError = exports.reportError = function reportError() {
	  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Constants.ERRORS.GENERAL;
	  return {
	    type: _actionTypes.REPORT_ERROR,
	    message: message
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "errorActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeEvent = exports.updateEvent = exports.createEvent = exports.fetchEvents = exports.eventsReceived = exports.eventRemoved = undefined;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(9);
	
	var _clientDB = __webpack_require__(12);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(15);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(16);
	
	var errorActions = _interopRequireWildcard(_errorActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var EVENT_KEYS = ['typeId', 'day', 'month', 'year', 'hour', 'minute', 'status'];
	var EVENTS_PATH = 'events';
	
	var eventRemoved = exports.eventRemoved = function eventRemoved(eventId) {
	  return {
	    type: _actionTypes.EVENT_REMOVED,
	    eventId: eventId
	  };
	};
	
	var eventsReceived = exports.eventsReceived = function eventsReceived(events) {
	  return {
	    type: _actionTypes.EVENTS_RECEIVED,
	    events: events
	  };
	};
	
	var fetchEvents = exports.fetchEvents = function fetchEvents() {
	  return function (dispatch) {
	    return clientDB.read(EVENTS_PATH).then(function (events) {
	      if (events) {
	        return dispatch(eventsReceived(events));
	      }
	      return null;
	    });
	  };
	};
	
	var createEvent = exports.createEvent = function createEvent(event) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.push(EVENTS_PATH, event).then(function (eventId) {
	      return dispatch(eventsReceived(_defineProperty({}, eventId, event)));
	    }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var updateEvent = exports.updateEvent = function updateEvent(eventId, event) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    var eventToUpdate = _.pick(event, EVENT_KEYS);
	
	    return clientDB.update('events/' + eventId, eventToUpdate).then(function () {
	      return dispatch(eventsReceived(_defineProperty({}, eventId, eventToUpdate)));
	    }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var removeEvent = exports.removeEvent = function removeEvent(eventId) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.remove(EVENTS_PATH + '/' + eventId).then(function () {
	      return dispatch(eventRemoved(eventId));
	    }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "eventActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cancelBooking = exports.updateBooking = exports.fetchBookings = exports.bookingsCanceled = exports.bookingsReceived = undefined;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(9);
	
	var _clientDB = __webpack_require__(12);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(15);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(16);
	
	var errorActions = _interopRequireWildcard(_errorActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var BOOKING_DATA_KEYS = ['paidSeats', 'extraSeats', 'pickUp', 'dropOff'];
	var BOOKINGS_PATH = 'bookings';
	
	var fetchUserBookings = function fetchUserBookings(uid) {
	  return clientDB.read(BOOKINGS_PATH + '/' + uid).then(function (userBookings) {
	    if (userBookings) {
	      return _defineProperty({}, uid, userBookings);
	    }
	    return null;
	  });
	};
	
	var fetchAllBookings = function fetchAllBookings() {
	  return clientDB.read(BOOKINGS_PATH);
	};
	
	var bookingsReceived = exports.bookingsReceived = function bookingsReceived(bookings) {
	  return {
	    type: _actionTypes.BOOKINGS_RECEIVED,
	    bookings: bookings
	  };
	};
	
	var bookingsCanceled = exports.bookingsCanceled = function bookingsCanceled(uid, eventId) {
	  return {
	    type: _actionTypes.BOOKING_CANCELED,
	    uid: uid,
	    eventId: eventId
	  };
	};
	
	var fetchBookings = exports.fetchBookings = function fetchBookings() {
	  return function (dispatch, getState) {
	    var uid = _.get(getState(), ['authData', 'uid']);
	    var isAdmin = _.get(getState(), ['authData', 'isAdmin']);
	    var fetchPromise = isAdmin ? fetchAllBookings() : fetchUserBookings(uid);
	
	    return fetchPromise.then(function (bookings) {
	      if (bookings) {
	        dispatch(bookingsReceived(bookings));
	      }
	    });
	  };
	};
	
	var updateBooking = exports.updateBooking = function updateBooking(uid, eventId, bookingData) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    var bookingDataToUpdate = _.pick(bookingData, BOOKING_DATA_KEYS);
	
	    return clientDB.update(BOOKINGS_PATH + '/' + uid + '/' + eventId, bookingDataToUpdate).then(function () {
	      return dispatch(bookingsReceived(_defineProperty({}, uid, _defineProperty({}, eventId, bookingDataToUpdate))));
	    }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var cancelBooking = exports.cancelBooking = function cancelBooking(uid, eventId) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.remove(BOOKINGS_PATH + '/' + uid + '/' + eventId).then(function () {
	      return dispatch(bookingsCanceled(uid, eventId));
	    }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "bookingActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.navigateTo = undefined;
	
	var _actionTypes = __webpack_require__(9);
	
	var navigateTo = exports.navigateTo = function navigateTo(page) {
	  return {
	    type: _actionTypes.NAVIGATE_TO,
	    page: page
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "navigationActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (dispatch, state) {
	  var uid = state.authData.uid;
	  var users = state.users;
	
	  if (users[uid]) {
	    return dispatch((0, _userActions.updateUser)(uid, { photoURL: state.authData.photoURL }));
	  }
	};
	
	var _userActions = __webpack_require__(14);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "updatePhotoUrlFixer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  PAGES: {
	    HOME: { val: 'home', visible: true },
	    AUTH: { val: 'auth', visible: false },
	    USERS: { val: 'users', visible: true },
	    EVENTS: { val: 'events', visible: true },
	    BOOKINGS: { val: 'bookings', visible: true },
	    DISTRIBUTION: { val: 'distribution', visible: true },
	    EDIT_USER_INFO: { val: 'editUserInfo', visible: false }
	  },
	  TRANSLATIONS: {
	    home: 'דף הבית',
	    users: 'משתמשים',
	    events: 'משחקים',
	    bookings: 'רשומים להסעות',
	    distribution: 'רשימת תפוצה'
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "navigationConstants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	var classNames = __webpack_require__(23);
	
	__webpack_require__(24);
	
	var Logo = __webpack_require__(28);
	
	function mapStateToProps(state) {
	    return {
	        isLoading: state.loading
	    };
	}
	
	var Spinner = function (_React$Component) {
	    _inherits(Spinner, _React$Component);
	
	    function Spinner() {
	        _classCallCheck(this, Spinner);
	
	        return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
	    }
	
	    _createClass(Spinner, [{
	        key: 'render',
	        value: function render() {
	            var overlayClass = classNames({
	                overlay: true,
	                hide: !this.props.isLoading
	            });
	
	            return React.createElement(
	                'div',
	                { className: 'spinner-container' },
	                React.createElement(
	                    'div',
	                    { className: overlayClass },
	                    React.createElement(
	                        'div',
	                        { className: 'spinner' },
	                        React.createElement(Logo, { height: 80, width: 80, opacity: 0.7 }),
	                        React.createElement('div', { className: 'bounce1' }),
	                        React.createElement('div', { className: 'bounce2' }),
	                        React.createElement('div', { className: 'bounce3' })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Spinner;
	}(React.Component);
	
	Spinner.PropTypes = {
	    isLoading: React.PropTypes.bool
	};
	
	module.exports = ReactRedux.connect(mapStateToProps)(Spinner);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "spinner.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./spinner.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./spinner.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".spinner-container .overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #fff;\n  z-index: 1000; }\n  .spinner-container .overlay .spinner {\n    margin: 150px auto 0;\n    width: 110px;\n    text-align: center; }\n    .spinner-container .overlay .spinner .logo {\n      margin-bottom: 10px;\n      opacity: 0.7; }\n    .spinner-container .overlay .spinner > div {\n      width: 12px;\n      height: 12px;\n      margin: 0 2px;\n      background-color: #333;\n      opacity: 0.8;\n      border-radius: 100%;\n      display: inline-block;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n    .spinner-container .overlay .spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s; }\n    .spinner-container .overlay .spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	
	var Logo = function (_React$Component) {
	  _inherits(Logo, _React$Component);
	
	  function Logo() {
	    _classCallCheck(this, Logo);
	
	    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
	  }
	
	  _createClass(Logo, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'svg',
	        { width: this.props.width + 'pt', height: this.props.width + 'pt', opacity: this.props.opacity, viewBox: '0 0 400 400' },
	        React.createElement('path', { fill: '#ffffff', d: ' M 0.00 0.00 L 195.33 0.00 C 171.46 1.14 147.58 5.42 125.43 14.60 C 70.88 36.31 27.10 83.33 9.57 139.40 C 3.74 157.45 1.16 176.37 0.00 195.25 L 0.00 0.00 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 195.33 0.00 L 207.52 0.00 C 216.71 1.19 226.02 1.35 235.11 3.22 C 269.30 9.16 301.78 24.37 328.37 46.65 C 365.99 77.91 391.66 123.42 398.09 171.99 C 399.04 178.75 399.56 185.56 400.00 192.37 L 400.00 208.73 C 398.57 233.86 393.29 258.90 382.80 281.86 C 358.82 335.68 309.95 377.83 252.99 393.11 C 239.08 397.10 224.68 398.89 210.29 400.00 L 191.36 400.00 C 166.17 398.76 141.13 393.14 118.16 382.64 C 67.40 359.76 26.81 315.05 9.89 261.90 C 3.97 244.33 1.62 225.85 0.00 207.46 L 0.00 195.25 C 1.16 176.37 3.74 157.45 9.57 139.40 C 27.10 83.33 70.88 36.31 125.43 14.60 C 147.58 5.42 171.46 1.14 195.33 0.00 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 207.52 0.00 L 400.00 0.00 L 400.00 192.37 C 399.56 185.56 399.04 178.75 398.09 171.99 C 391.66 123.42 365.99 77.91 328.37 46.65 C 301.78 24.37 269.30 9.16 235.11 3.22 C 226.02 1.35 216.71 1.19 207.52 0.00 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 192.11 8.13 C 222.35 6.80 252.95 12.74 280.42 25.50 C 327.04 46.72 364.35 87.39 381.31 135.75 C 398.40 183.17 395.65 237.33 373.77 282.74 C 356.23 319.83 326.33 350.97 290.04 370.09 C 243.92 394.82 187.52 399.22 138.07 382.11 C 95.38 367.65 58.14 337.60 35.21 298.76 C 14.65 264.92 5.34 224.46 8.54 185.03 C 10.37 161.20 16.68 137.70 27.24 116.26 C 48.82 71.17 88.92 35.48 136.04 18.89 C 154.05 12.54 173.02 8.87 192.11 8.13 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 196.23 21.35 C 197.60 18.93 198.95 16.50 200.37 14.11 C 201.72 16.48 203.04 18.86 204.33 21.27 C 206.95 21.80 209.59 22.22 212.18 22.89 C 210.70 25.16 208.65 26.98 206.82 28.96 C 207.22 31.65 207.53 34.35 207.86 37.04 C 205.30 35.86 202.74 34.67 200.14 33.58 C 197.74 34.82 195.32 36.04 192.75 36.87 C 193.16 34.22 193.54 31.56 193.84 28.89 C 191.93 26.90 190.03 24.90 188.16 22.88 C 190.83 22.31 193.52 21.78 196.23 21.35 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 181.12 44.38 C 212.26 40.60 244.53 46.19 272.36 60.76 C 310.93 80.56 340.51 117.06 351.62 159.00 C 358.81 185.10 358.82 213.08 352.22 239.30 L 353.78 239.49 C 353.36 239.49 352.53 239.48 352.11 239.48 C 345.02 267.39 329.90 293.21 309.08 313.11 C 292.21 329.66 271.36 341.99 248.96 349.40 C 220.35 358.69 189.07 359.63 159.99 351.91 C 132.39 344.63 106.83 329.69 87.11 309.04 C 58.63 279.74 42.35 238.89 43.31 198.00 C 43.38 151.54 66.09 106.11 102.43 77.36 C 124.95 59.39 152.48 47.72 181.12 44.38 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 112.74 76.73 C 134.54 61.46 160.31 51.55 186.93 49.55 C 206.45 48.21 226.37 49.61 245.06 55.68 C 270.99 63.79 294.69 78.98 312.75 99.28 C 330.00 118.33 342.08 141.94 347.83 166.96 C 353.85 195.15 352.29 225.12 342.25 252.22 C 337.24 265.56 330.47 278.25 322.05 289.76 C 318.80 286.80 319.68 282.42 319.72 278.50 C 319.16 279.81 318.63 281.13 318.13 282.46 C 317.33 280.18 316.55 277.85 315.12 275.88 C 315.52 277.16 316.31 279.72 316.71 281.00 C 315.31 279.73 313.80 278.64 312.18 277.72 C 313.22 279.36 314.44 280.87 315.67 282.39 C 314.23 281.77 312.78 281.20 311.30 280.69 C 312.35 281.87 313.61 282.75 315.08 283.35 C 313.95 283.64 312.82 283.93 311.70 284.23 C 316.15 284.54 318.19 288.67 320.35 291.95 C 319.00 293.72 317.59 295.45 316.15 297.15 C 312.58 294.56 311.13 290.41 310.55 286.19 C 310.23 286.34 309.59 286.64 309.28 286.78 C 308.59 285.23 306.92 284.82 306.47 286.76 C 306.88 287.29 307.69 288.33 308.10 288.86 C 307.45 288.75 306.14 288.55 305.49 288.44 C 306.59 289.72 307.71 290.98 308.82 292.26 C 307.97 292.25 306.27 292.23 305.41 292.22 C 308.47 294.41 311.47 296.74 313.81 299.72 C 313.07 300.62 312.33 301.52 311.60 302.44 C 310.93 300.80 310.64 298.82 309.07 297.76 C 305.78 295.07 302.11 292.91 298.58 290.57 C 297.17 289.47 295.35 289.50 293.67 289.33 C 293.34 290.63 293.02 291.93 292.70 293.23 C 293.02 294.07 293.35 294.92 293.68 295.77 C 292.15 299.75 291.20 303.91 290.17 308.03 C 286.39 300.91 282.39 293.79 280.95 285.75 C 280.53 287.94 280.16 290.17 278.78 292.00 C 277.78 290.47 276.82 288.88 275.38 287.71 C 276.22 290.52 277.37 293.23 278.05 296.09 C 278.58 298.74 281.82 299.57 282.59 302.12 C 283.86 305.50 284.96 308.95 286.45 312.24 C 285.25 311.57 284.06 310.91 282.87 310.24 C 281.70 310.58 280.54 310.92 279.39 311.28 C 279.10 311.81 278.52 312.87 278.23 313.39 C 276.89 311.51 275.56 309.56 273.67 308.19 C 275.54 306.82 277.59 305.38 278.06 302.94 C 274.87 304.81 272.16 307.35 269.13 309.43 C 267.22 310.51 266.74 312.78 265.86 314.62 C 261.77 310.96 261.52 305.34 260.28 300.36 C 260.02 301.66 259.77 302.97 259.54 304.28 C 258.71 302.66 257.78 301.03 256.09 300.16 C 256.07 303.39 256.28 306.65 257.20 309.76 C 255.80 309.70 254.40 309.66 253.00 309.65 C 254.84 311.17 256.83 312.48 258.89 313.69 C 258.91 316.39 258.86 319.08 258.80 321.78 C 257.62 323.07 256.42 324.35 255.19 325.59 C 252.42 324.11 249.77 322.38 246.77 321.41 C 246.29 318.86 245.72 316.32 245.26 313.76 C 244.08 313.00 242.90 312.23 241.73 311.46 C 238.22 312.63 236.57 316.20 237.61 319.71 C 236.84 319.95 236.08 320.20 235.31 320.45 C 235.65 315.90 237.27 311.54 237.52 307.01 C 237.65 304.91 234.60 305.21 233.39 304.54 C 234.63 312.88 231.79 321.01 228.82 328.64 C 228.01 328.87 226.38 329.33 225.57 329.56 C 224.97 324.06 222.49 317.89 226.27 312.98 C 225.53 311.22 224.94 309.40 224.36 307.58 C 223.93 307.56 223.07 307.51 222.64 307.49 C 219.77 312.11 222.81 317.78 220.14 322.52 C 217.32 319.62 215.55 315.91 212.87 312.90 C 213.34 314.45 213.90 315.98 214.51 317.50 C 213.64 318.34 212.77 319.19 211.92 320.04 C 213.18 320.68 214.45 321.30 215.74 321.86 C 216.37 322.77 217.00 323.69 217.65 324.60 C 215.05 325.17 212.37 325.76 210.44 327.74 C 210.97 325.22 208.37 324.41 207.40 322.60 C 206.68 320.86 208.07 319.32 208.67 317.80 C 208.32 316.38 207.94 314.97 207.55 313.57 C 206.84 314.33 205.74 314.93 205.58 316.06 C 204.34 321.73 206.47 327.43 206.30 333.13 C 205.56 332.14 204.84 331.15 204.11 330.16 C 201.67 328.92 200.19 326.62 198.38 324.69 C 196.52 322.98 193.91 324.31 191.76 324.49 C 190.86 327.13 189.70 329.95 190.43 332.79 C 191.16 334.62 192.11 336.35 192.91 338.15 C 191.64 337.19 189.85 336.54 189.31 334.90 C 188.84 332.44 188.75 329.93 188.39 327.46 C 191.78 324.05 195.55 321.09 199.51 318.38 C 201.11 317.60 200.41 315.78 200.42 314.40 C 200.64 314.06 201.07 313.39 201.28 313.05 C 199.71 313.48 197.39 312.62 196.42 314.34 C 194.48 316.76 193.56 319.98 190.99 321.89 C 189.28 323.21 187.43 324.34 185.63 325.54 C 185.31 325.27 184.65 324.73 184.32 324.47 C 183.46 324.52 181.72 324.62 180.85 324.68 C 182.52 321.06 183.89 317.30 185.66 313.73 C 186.28 312.25 187.34 310.70 186.79 309.04 C 186.19 307.75 184.64 307.58 183.51 307.01 C 182.69 316.35 177.09 324.27 171.91 331.74 C 171.02 330.19 170.05 328.69 169.25 327.10 C 172.00 322.83 173.53 317.02 178.70 315.06 C 178.77 313.44 178.71 311.83 178.58 310.22 C 177.65 310.38 176.73 310.56 175.81 310.78 C 176.17 311.96 176.63 313.19 176.12 314.43 C 175.84 313.53 175.29 311.75 175.01 310.85 C 173.94 312.93 173.48 315.27 172.35 317.32 C 170.84 319.59 168.77 321.40 166.90 323.37 C 165.92 322.62 164.94 321.88 163.96 321.15 C 160.98 320.91 157.97 321.23 155.43 322.91 C 155.03 320.24 154.66 317.56 154.43 314.87 C 155.26 313.95 156.08 313.05 156.91 312.14 C 156.87 310.74 156.84 309.34 156.81 307.95 C 155.08 306.95 153.51 305.09 151.34 305.34 C 148.74 306.59 146.26 308.83 145.88 311.83 C 145.58 314.02 145.56 316.23 145.39 318.43 C 144.92 318.54 143.97 318.76 143.50 318.88 C 142.98 315.25 143.59 311.66 144.43 308.14 C 147.73 305.99 151.02 303.68 154.88 302.63 C 156.30 303.43 157.73 304.21 159.18 304.97 C 160.57 302.80 160.87 300.34 159.71 298.01 C 153.50 300.37 146.90 301.79 140.97 304.85 C 139.14 309.44 136.74 313.79 135.38 318.56 L 134.65 318.18 C 134.16 319.59 133.62 320.99 133.03 322.36 C 131.78 318.19 129.90 314.23 128.83 310.00 C 129.58 309.27 131.08 307.80 131.82 307.06 L 128.75 307.32 C 129.89 306.58 131.03 305.83 132.16 305.08 C 131.11 304.70 128.99 303.96 127.94 303.59 C 127.36 300.99 127.08 298.33 127.67 295.71 C 126.36 297.91 124.64 299.81 122.78 301.57 C 123.60 301.53 125.22 301.46 126.03 301.42 C 125.30 302.07 123.83 303.37 123.10 304.02 C 123.57 304.53 124.51 305.55 124.98 306.06 C 122.36 308.82 118.88 310.43 115.19 311.16 C 116.31 304.91 117.31 298.44 120.58 292.87 C 119.82 293.22 118.28 293.90 117.52 294.25 C 118.04 293.30 119.08 291.40 119.60 290.45 C 118.78 291.27 117.14 292.91 116.32 293.74 C 116.51 292.77 116.89 290.84 117.09 289.88 C 116.66 290.39 115.80 291.43 115.38 291.95 C 114.97 289.67 112.59 289.56 113.21 291.87 C 112.45 295.07 115.48 298.01 114.04 301.10 C 112.85 304.33 111.60 307.57 110.98 310.98 C 109.64 310.59 108.30 310.26 106.95 309.97 C 108.28 308.50 109.46 306.90 110.39 305.15 C 111.19 304.38 111.98 303.58 112.69 302.72 C 112.04 302.45 110.75 301.90 110.10 301.63 C 110.68 299.95 111.28 298.28 111.68 296.56 C 109.29 299.44 107.91 302.95 106.22 306.24 C 103.85 308.79 100.44 310.03 97.34 311.44 C 97.32 311.19 97.27 310.71 97.24 310.46 C 98.07 304.08 97.32 297.62 98.37 291.26 C 101.19 289.61 104.10 288.07 106.69 286.05 C 106.56 285.40 106.29 284.09 106.16 283.43 C 103.52 285.19 100.61 286.44 97.86 288.00 C 95.70 289.36 95.22 292.07 94.56 294.35 C 93.40 298.38 92.85 302.55 92.64 306.73 C 91.30 305.09 89.86 303.54 88.39 302.02 L 88.34 301.45 C 88.40 298.93 87.37 296.65 86.40 294.40 C 84.81 293.87 83.26 293.94 81.73 294.60 C 81.50 293.41 81.25 292.23 81.09 291.04 C 85.12 288.12 89.18 285.10 92.53 281.40 C 92.26 280.64 91.70 279.11 91.42 278.34 C 91.01 278.02 90.18 277.39 89.77 277.07 C 86.66 281.83 82.67 285.93 77.89 289.02 C 59.07 263.47 48.55 231.75 49.10 199.96 C 48.60 168.38 59.21 137.05 77.62 111.53 C 87.45 98.22 99.34 86.43 112.74 76.73 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 196.90 57.42 C 205.95 55.12 216.45 58.30 222.03 65.96 C 227.15 72.73 227.37 82.17 224.58 89.92 C 221.55 97.83 213.97 102.84 206.30 105.61 C 206.29 108.02 206.27 110.42 206.26 112.83 C 204.09 115.16 202.03 117.59 199.97 120.03 C 198.70 118.70 196.80 117.76 196.11 116.00 C 197.00 114.40 198.39 113.15 199.61 111.80 C 191.80 104.88 182.99 99.17 175.32 92.10 C 176.07 90.60 177.23 89.46 178.87 89.02 C 183.07 92.92 186.95 97.16 191.18 101.03 C 193.43 94.72 196.01 88.49 197.78 82.04 C 197.45 78.24 196.04 74.63 195.22 70.92 C 190.09 69.75 185.15 67.86 180.02 66.67 C 178.20 66.92 176.41 67.35 174.59 67.55 C 174.55 66.50 174.51 65.46 174.49 64.41 C 177.38 64.37 180.22 64.96 183.05 65.46 C 186.90 61.69 191.55 58.53 196.90 57.42 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 184.94 65.81 C 189.32 61.34 195.74 59.02 201.97 59.50 C 209.48 59.70 216.55 64.62 219.43 71.55 C 222.50 79.08 222.55 88.20 218.24 95.28 C 216.10 98.78 212.62 101.22 208.85 102.70 C 207.38 95.75 206.19 88.73 204.41 81.87 C 203.84 81.72 202.70 81.41 202.13 81.25 C 203.96 79.00 205.31 76.40 206.07 73.59 C 209.99 72.82 213.98 72.58 217.95 72.24 C 214.69 68.77 209.95 66.55 207.94 62.04 C 207.25 62.17 205.86 62.42 205.17 62.55 C 205.52 63.55 205.40 65.06 206.77 65.32 C 208.86 66.14 210.08 68.09 211.28 69.86 C 208.26 69.75 205.29 69.22 202.36 68.52 C 202.08 66.18 201.85 63.84 201.64 61.49 C 199.83 61.24 198.01 61.00 196.19 60.85 C 196.58 63.73 197.68 66.43 199.89 68.39 C 194.88 67.68 189.91 66.74 184.94 65.81 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 192.19 102.00 C 194.88 96.87 198.13 92.03 201.08 87.04 C 203.44 92.31 205.45 97.73 207.60 103.10 C 204.75 105.01 202.93 107.98 200.75 110.57 C 197.79 107.82 194.83 105.06 192.19 102.00 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 197.53 99.49 C 198.47 99.48 200.36 99.46 201.30 99.46 C 201.29 102.08 201.30 104.70 201.29 107.33 C 200.67 107.29 199.44 107.20 198.82 107.16 C 198.65 104.56 198.64 101.91 197.53 99.49 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 175.69 109.55 C 176.00 107.43 174.36 103.72 177.70 103.65 C 177.71 104.57 177.74 106.42 177.75 107.35 C 180.65 107.45 183.55 107.56 186.45 107.38 C 187.21 108.98 187.99 110.57 188.86 112.11 C 189.77 110.61 188.53 108.99 188.34 107.48 C 189.19 107.45 190.88 107.40 191.73 107.37 C 191.78 110.30 191.80 113.24 191.78 116.17 C 189.10 115.93 186.12 116.81 183.64 115.56 C 183.63 115.15 183.60 114.33 183.58 113.92 C 184.40 113.82 186.04 113.62 186.86 113.52 C 185.76 111.35 184.43 109.30 182.82 107.48 C 181.32 110.61 182.74 117.36 177.35 116.40 C 177.24 114.98 177.81 113.88 179.05 113.09 C 179.19 112.21 179.46 110.45 179.60 109.57 C 178.29 109.56 176.99 109.56 175.69 109.55 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 207.49 107.37 C 209.75 107.40 212.01 107.41 214.28 107.41 C 214.23 110.18 214.23 112.95 214.36 115.72 C 212.12 116.23 209.81 116.22 207.52 116.23 C 207.50 115.61 207.44 114.39 207.41 113.78 C 208.86 113.78 210.31 113.79 211.76 113.79 C 211.66 112.17 211.82 110.44 210.94 109.01 C 210.30 110.75 209.12 111.58 207.41 111.51 C 207.43 110.47 207.47 108.41 207.49 107.37 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 215.82 107.42 C 217.95 107.41 220.09 107.41 222.22 107.42 C 222.15 110.13 222.14 112.85 222.25 115.56 C 221.63 115.76 220.38 116.15 219.76 116.35 C 219.73 114.08 219.72 111.81 219.70 109.54 C 218.42 109.53 217.14 109.53 215.86 109.53 L 215.82 107.42 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 216.23 111.44 C 216.78 111.53 217.87 111.70 218.41 111.79 C 218.39 113.28 218.37 114.78 218.35 116.28 C 217.69 116.24 216.39 116.15 215.74 116.11 C 215.89 114.55 216.05 113.00 216.23 111.44 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 119.25 136.30 C 124.74 136.35 130.23 136.31 135.73 136.32 C 135.76 143.42 135.69 150.52 135.77 157.62 C 138.17 155.96 141.48 154.87 142.64 151.95 C 143.12 146.76 142.69 141.53 142.86 136.32 C 148.63 136.32 154.40 136.31 160.18 136.33 C 160.10 141.26 160.26 146.20 160.12 151.13 C 159.78 155.05 157.31 158.71 153.89 160.61 C 147.85 164.04 141.80 167.44 135.73 170.80 C 135.73 177.81 135.73 184.82 135.74 191.83 C 130.24 191.86 124.74 191.82 119.23 191.86 C 119.27 173.34 119.23 154.82 119.25 136.30 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 164.92 136.32 C 170.46 136.35 175.99 136.28 181.52 136.35 C 181.44 150.79 181.43 165.23 181.52 179.67 C 176.05 179.62 170.57 179.87 165.10 179.57 C 164.63 165.23 164.99 150.72 164.92 136.32 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 186.28 136.30 C 200.69 136.34 215.10 136.33 229.51 136.31 C 229.52 150.77 229.49 165.23 229.53 179.69 C 223.94 179.64 218.35 179.81 212.77 179.60 C 212.95 170.28 212.77 160.95 212.87 151.62 C 209.51 151.55 206.15 151.57 202.80 151.60 C 202.87 160.96 202.81 170.33 202.83 179.69 C 197.32 179.73 191.80 179.67 186.29 179.69 C 186.30 165.23 186.32 150.76 186.28 136.30 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 234.09 136.28 C 239.67 136.38 245.25 136.29 250.84 136.33 C 250.86 141.52 250.66 146.72 250.99 151.90 C 253.88 148.90 253.53 144.23 255.80 140.83 C 257.57 137.59 261.41 136.28 264.92 136.34 C 268.74 136.40 272.85 135.78 276.42 137.48 C 279.51 139.04 280.76 142.67 280.71 145.95 C 280.74 157.18 280.70 168.42 280.72 179.66 C 272.92 179.66 265.12 179.70 257.32 179.66 C 257.37 174.59 257.35 169.52 257.32 164.45 C 259.56 164.45 261.81 164.44 264.06 164.43 C 264.03 160.62 264.24 156.79 263.73 153.01 C 262.09 152.41 259.11 151.86 258.45 154.04 C 255.86 162.55 253.51 171.14 250.94 179.66 C 245.07 179.73 239.19 179.72 233.32 179.66 C 235.54 172.66 237.59 165.60 239.89 158.62 C 237.79 158.22 234.60 157.90 234.36 155.18 C 233.76 148.91 234.25 142.58 234.09 136.28 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 22.36 183.98 C 24.93 184.63 27.42 185.55 29.74 186.85 C 28.82 187.36 26.98 188.38 26.07 188.89 C 26.44 189.06 27.19 189.40 27.57 189.56 C 27.78 190.24 28.20 191.60 28.41 192.28 C 28.29 192.94 28.06 194.26 27.94 194.92 C 29.40 192.14 32.60 190.94 34.10 188.21 C 34.72 188.20 35.97 188.20 36.59 188.20 C 36.58 189.37 36.57 190.55 36.56 191.73 C 33.95 192.79 31.72 194.51 29.41 196.08 C 30.59 196.87 31.78 197.68 32.97 198.48 C 33.83 198.35 35.57 198.08 36.44 197.95 C 36.47 199.57 36.49 201.20 36.48 202.83 C 33.67 201.87 31.06 200.45 28.44 199.07 C 27.48 201.22 25.61 202.65 23.76 203.99 C 25.59 205.34 27.54 206.57 29.06 208.29 C 30.20 209.83 28.75 211.77 28.48 213.37 C 29.90 214.04 31.33 214.75 32.00 216.29 C 30.28 216.30 28.57 216.22 26.86 216.04 C 24.93 215.23 25.99 212.83 25.64 211.27 C 24.86 210.26 23.63 209.76 22.61 209.06 C 21.25 210.32 19.43 211.33 19.05 213.30 C 20.43 214.03 21.85 214.78 22.66 216.21 C 20.69 216.26 18.72 216.25 16.74 216.20 C 15.76 212.62 18.02 209.21 17.26 205.67 C 16.36 205.12 15.41 204.65 14.44 204.25 C 12.98 200.94 14.81 197.43 14.21 194.03 C 13.89 192.41 13.49 190.82 13.20 189.20 C 13.80 189.22 15.02 189.24 15.63 189.26 C 15.92 193.50 15.62 197.74 15.51 201.98 C 15.90 202.42 16.68 203.29 17.07 203.72 C 18.55 202.33 20.75 201.32 21.12 199.11 C 21.66 195.64 18.77 192.50 19.68 189.01 C 20.32 187.21 21.42 185.63 22.36 183.98 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 369.25 186.90 C 371.54 185.55 374.04 184.64 376.60 183.95 C 377.54 185.60 378.63 187.19 379.30 188.98 C 379.98 192.09 378.06 194.98 377.77 198.02 C 377.63 200.59 379.83 202.35 381.85 203.47 C 384.78 202.70 383.01 199.08 383.28 196.99 C 383.61 194.09 381.91 190.01 385.16 188.31 C 385.40 189.56 385.71 190.88 385.22 192.13 C 383.63 196.11 386.14 200.36 384.57 204.34 C 383.85 204.59 382.42 205.10 381.71 205.36 C 380.75 208.94 383.69 212.73 381.89 216.08 C 380.07 216.37 378.22 216.24 376.39 216.22 C 377.01 214.63 378.55 214.02 379.96 213.35 C 379.51 211.40 377.73 210.35 376.38 209.07 C 375.34 209.74 374.22 210.34 373.34 211.22 C 373.30 212.47 373.27 213.73 373.25 214.98 C 372.02 217.14 368.98 215.80 367.02 216.28 C 367.60 214.66 369.07 213.99 370.50 213.33 C 370.06 211.86 369.66 210.39 369.28 208.91 C 371.05 207.04 373.08 205.45 375.21 204.02 C 373.36 202.66 371.54 201.18 370.50 199.08 C 367.93 200.50 365.34 201.94 362.49 202.76 C 362.49 201.10 362.51 199.45 362.55 197.79 C 363.39 197.97 365.07 198.33 365.90 198.51 C 367.14 197.72 368.39 196.94 369.65 196.18 C 367.33 194.57 365.07 192.83 362.45 191.72 C 362.42 190.55 362.39 189.38 362.37 188.21 C 362.99 188.21 364.23 188.21 364.85 188.21 C 366.10 190.27 368.01 191.88 370.35 192.60 C 370.37 193.13 370.42 194.20 370.44 194.73 C 371.65 193.24 371.39 191.37 371.25 189.60 C 371.67 189.39 372.49 188.98 372.91 188.77 C 371.99 188.30 370.16 187.37 369.25 186.90 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 206.79 186.37 C 206.91 186.40 207.16 186.46 207.28 186.49 C 206.93 187.75 206.60 189.01 206.28 190.28 C 205.45 193.41 204.58 196.53 203.74 199.66 C 212.18 200.59 220.53 202.34 229.04 202.53 C 230.55 199.49 232.18 196.51 233.85 193.56 C 233.19 193.69 231.87 193.95 231.21 194.08 C 229.64 195.42 228.02 196.72 226.39 197.99 C 226.98 196.42 227.61 194.87 228.24 193.32 C 228.71 192.16 229.19 191.02 229.71 189.88 C 229.74 191.42 229.60 192.95 229.29 194.47 C 230.47 192.94 231.75 191.49 233.11 190.12 L 232.11 192.13 C 232.82 192.63 233.54 193.14 234.26 193.65 L 234.85 191.19 C 235.42 199.51 228.19 205.46 226.38 213.22 C 231.73 213.25 237.08 213.21 242.44 213.22 C 242.45 227.67 242.44 242.12 242.45 256.58 C 236.90 256.53 231.35 256.63 225.81 256.50 C 225.80 242.57 226.09 228.63 225.66 214.72 C 224.44 217.28 223.44 219.94 222.25 222.52 C 217.18 232.97 215.69 244.81 210.12 255.04 C 207.77 258.17 205.08 261.17 201.87 263.43 C 196.86 263.54 191.88 262.76 186.88 262.54 C 181.68 262.24 177.04 259.69 172.32 257.78 C 169.72 265.94 166.98 274.06 164.15 282.14 C 163.87 280.95 163.64 279.75 163.44 278.55 C 162.18 279.57 161.27 280.92 160.19 282.11 C 160.78 280.20 161.53 278.33 162.61 276.65 C 161.52 276.74 160.43 276.83 159.34 276.92 C 159.06 277.60 158.50 278.97 158.22 279.66 C 157.98 279.62 157.48 279.55 157.23 279.51 C 157.60 278.88 158.33 277.62 158.70 276.99 C 157.79 276.31 156.80 275.75 155.81 275.19 C 155.86 276.66 155.35 277.90 154.27 278.94 C 154.50 277.40 154.82 275.87 155.13 274.36 L 156.66 274.61 C 156.05 273.67 155.44 272.74 154.81 271.83 C 153.90 273.65 152.99 275.50 151.99 277.29 C 151.32 276.98 149.99 276.38 149.32 276.08 C 149.73 275.00 150.12 273.91 150.50 272.83 C 150.84 273.62 151.51 275.20 151.85 275.99 L 151.12 273.14 L 152.44 273.68 C 152.91 272.47 153.41 271.27 153.89 270.06 C 154.31 269.75 155.14 269.15 155.56 268.85 C 155.33 269.34 154.88 270.33 154.66 270.82 C 156.15 271.86 156.60 273.89 158.05 274.86 C 159.99 274.05 160.38 271.39 161.65 269.80 C 161.37 272.11 160.54 274.29 159.37 276.29 C 160.52 276.19 161.68 276.11 162.83 276.03 C 165.10 271.27 166.70 266.24 168.05 261.15 C 165.64 259.84 163.33 258.31 160.76 257.34 C 157.54 256.31 154.13 256.02 150.95 254.88 C 147.89 253.87 145.09 252.21 142.03 251.21 C 138.95 254.26 136.71 258.04 134.09 261.48 C 132.59 263.48 131.44 265.71 130.28 267.92 C 131.61 263.92 133.42 260.10 135.76 256.59 C 130.69 256.54 125.62 256.60 120.55 256.54 C 120.56 242.14 120.69 227.73 120.49 213.34 C 126.04 213.09 131.60 213.27 137.16 213.22 C 137.26 226.82 136.90 240.42 137.34 254.01 C 145.29 240.30 153.03 225.98 165.05 215.33 C 173.16 208.33 185.49 209.67 194.25 214.74 C 199.34 205.72 202.70 195.86 206.79 186.37 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 211.14 190.89 C 211.80 189.40 212.49 187.87 213.79 186.83 C 213.11 188.47 212.27 190.06 212.09 191.86 C 213.43 190.67 214.68 189.39 215.95 188.12 C 215.45 189.32 214.95 190.53 214.46 191.74 C 216.82 192.27 218.15 189.92 219.89 188.94 C 219.40 189.80 218.42 191.54 217.93 192.40 C 218.64 192.13 220.07 191.58 220.79 191.31 C 221.03 191.69 221.51 192.46 221.75 192.84 C 222.26 191.95 223.27 190.17 223.78 189.28 L 223.60 193.44 C 224.76 192.34 225.88 191.21 226.96 190.05 C 226.77 190.79 226.39 192.28 226.20 193.03 L 228.24 193.32 C 227.61 194.87 226.98 196.42 226.39 197.99 C 228.02 196.72 229.64 195.42 231.21 194.08 C 231.87 193.95 233.19 193.69 233.85 193.56 C 232.18 196.51 230.55 199.49 229.04 202.53 C 220.53 202.34 212.18 200.59 203.74 199.66 C 204.58 196.53 205.45 193.41 206.28 190.28 C 207.89 190.48 209.52 190.69 211.14 190.89 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 294.49 229.49 C 294.49 220.21 294.42 210.94 294.50 201.67 C 300.06 201.69 305.62 201.72 311.19 201.67 C 311.18 205.53 311.18 209.38 311.18 213.24 C 318.72 213.20 326.27 213.23 333.82 213.23 C 333.82 220.48 333.86 227.74 333.80 235.00 C 334.17 243.58 323.08 247.79 324.29 256.56 C 318.12 256.57 311.95 256.58 305.78 256.55 C 305.86 253.94 305.39 251.03 307.04 248.78 C 309.78 244.62 312.90 240.71 315.57 236.50 C 316.93 234.43 316.27 231.81 316.50 229.48 C 309.16 229.50 301.82 229.48 294.49 229.49 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 0.00 207.46 C 1.62 225.85 3.97 244.33 9.89 261.90 C 26.81 315.05 67.40 359.76 118.16 382.64 C 141.13 393.14 166.17 398.76 191.36 400.00 L 0.00 400.00 L 0.00 207.46 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 382.80 281.86 C 393.29 258.90 398.57 233.86 400.00 208.73 L 400.00 400.00 L 210.29 400.00 C 224.68 398.89 239.08 397.10 252.99 393.11 C 309.95 377.83 358.82 335.68 382.80 281.86 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 72.55 213.20 C 83.38 213.25 94.21 213.20 105.04 213.23 C 108.08 213.24 111.43 213.97 113.48 216.40 C 115.43 218.81 115.59 222.03 115.59 225.00 C 115.56 235.51 115.59 246.02 115.58 256.54 C 109.99 256.58 104.40 256.59 98.80 256.52 C 98.68 247.23 99.31 237.88 98.46 228.63 C 95.33 228.45 92.19 228.45 89.05 228.43 C 88.61 235.87 89.20 243.34 88.74 250.78 C 88.51 253.70 86.02 256.05 83.15 256.32 C 77.63 256.86 72.06 256.43 66.52 256.55 C 66.55 251.26 66.52 245.96 66.54 240.66 C 68.44 240.29 71.07 241.45 72.49 239.79 C 72.65 230.93 72.51 222.06 72.55 213.20 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 247.25 213.25 C 261.69 213.24 276.13 213.13 290.56 213.31 C 290.37 227.72 290.51 242.14 290.49 256.56 C 284.92 256.54 279.35 256.63 273.78 256.51 C 273.86 247.16 273.73 237.82 273.85 228.47 C 270.49 228.46 267.14 228.44 263.79 228.51 C 263.83 237.86 263.75 247.22 263.84 256.58 C 258.31 256.54 252.79 256.59 247.27 256.55 C 247.27 242.11 247.30 227.68 247.25 213.25 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 197.10 219.12 C 195.99 217.49 196.36 215.70 197.64 214.31 C 204.63 218.34 213.01 218.53 220.83 219.40 C 218.11 224.51 216.53 230.10 214.48 235.49 C 209.21 234.75 203.99 233.75 198.71 233.14 C 198.68 228.43 199.44 223.44 197.10 219.12 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 190.09 223.14 C 192.04 221.95 193.14 219.84 195.06 218.61 C 197.16 224.51 196.27 230.88 195.69 236.96 C 191.37 235.31 186.72 235.30 182.17 235.27 C 183.02 230.44 185.66 225.54 190.09 223.14 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 152.49 233.92 C 155.82 230.23 158.22 225.69 162.09 222.51 C 169.14 222.40 176.63 224.33 182.18 228.82 C 179.51 232.56 176.88 236.38 175.28 240.72 C 167.64 238.64 159.96 236.56 152.49 233.92 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 199.55 250.15 C 202.70 250.88 205.81 251.82 208.89 252.81 C 206.98 256.02 204.48 259.15 200.95 260.65 C 191.55 261.31 182.02 259.36 173.47 255.43 C 173.47 254.84 173.47 253.68 173.47 253.09 C 181.80 255.23 190.40 257.52 199.03 255.65 C 199.26 253.82 199.42 251.99 199.55 250.15 Z' }),
	        React.createElement('path', { fill: '#ed081e', d: ' M 134.09 261.48 C 136.71 258.04 138.95 254.26 142.03 251.21 C 145.09 252.21 147.89 253.87 150.95 254.88 C 154.13 256.02 157.54 256.31 160.76 257.34 C 163.33 258.31 165.64 259.84 168.05 261.15 C 166.70 266.24 165.10 271.27 162.83 276.03 C 161.68 276.11 160.52 276.19 159.37 276.29 C 160.54 274.29 161.37 272.11 161.65 269.80 C 160.38 271.39 159.99 274.05 158.05 274.86 C 156.60 273.89 156.15 271.86 154.66 270.82 C 154.88 270.33 155.33 269.34 155.56 268.85 C 155.14 269.15 154.31 269.75 153.89 270.06 C 153.40 270.42 152.41 271.15 151.92 271.52 C 151.38 271.38 150.30 271.12 149.76 270.99 C 148.58 272.92 147.31 274.86 145.38 276.12 C 146.10 273.37 149.76 270.23 146.43 267.92 C 146.55 266.89 146.68 265.87 146.80 264.86 C 146.02 265.98 145.23 267.10 144.46 268.24 L 143.37 269.66 L 143.60 267.04 C 143.79 266.22 144.17 264.57 144.36 263.74 C 143.49 264.88 142.62 266.01 141.79 267.18 C 141.36 266.63 140.50 265.53 140.07 264.97 C 140.52 263.54 141.00 262.12 141.47 260.70 C 140.85 261.58 140.22 262.46 139.60 263.35 C 135.83 262.94 135.38 267.16 133.06 269.11 C 133.77 266.96 134.78 264.94 135.79 262.92 C 135.37 262.56 134.52 261.84 134.09 261.48 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 139.60 263.35 C 140.22 262.46 140.85 261.58 141.47 260.70 C 141.00 262.12 140.52 263.54 140.07 264.97 C 139.46 267.61 137.70 269.76 135.22 270.83 C 136.55 268.26 138.11 265.82 139.60 263.35 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 36.16 263.16 C 37.11 262.81 38.06 262.47 39.01 262.14 C 40.22 266.15 43.50 269.77 43.24 274.06 C 40.50 276.14 37.19 277.28 34.18 278.90 C 33.41 277.33 32.63 275.76 31.89 274.18 C 34.36 273.01 36.83 271.86 39.31 270.73 C 38.28 268.19 37.20 265.69 36.16 263.16 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 357.89 262.56 C 359.55 263.21 361.20 263.87 362.87 264.52 C 363.14 265.92 363.19 267.34 363.06 268.76 C 364.96 267.97 366.84 267.14 368.73 266.31 C 367.96 268.04 367.19 269.77 366.47 271.52 C 363.89 272.72 361.24 273.74 358.61 274.80 C 360.12 275.84 361.78 276.62 363.49 277.26 C 362.81 278.90 362.10 280.52 361.38 282.14 C 359.44 281.24 357.56 280.22 355.73 279.14 C 355.75 278.29 355.79 276.58 355.82 275.72 C 354.23 276.32 352.64 276.92 351.06 277.52 C 351.68 275.86 352.16 274.03 353.42 272.73 C 355.82 271.60 358.37 270.81 360.83 269.81 C 359.33 268.64 357.62 267.80 355.87 267.07 C 356.55 265.56 357.22 264.06 357.89 262.56 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 141.79 267.18 C 142.62 266.01 143.49 264.88 144.36 263.74 C 144.17 264.57 143.79 266.22 143.60 267.04 C 142.83 269.45 141.98 272.35 139.30 273.22 C 140.07 271.18 140.77 269.10 141.79 267.18 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 144.46 268.24 C 145.23 267.10 146.02 265.98 146.80 264.86 C 146.68 265.87 146.55 266.89 146.43 267.92 C 145.71 269.86 144.91 271.77 144.20 273.71 C 143.98 273.68 143.54 273.60 143.32 273.56 C 143.67 271.78 143.91 269.97 144.46 268.24 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 39.63 279.29 C 41.62 278.24 43.60 277.17 45.60 276.14 C 46.36 277.59 47.13 279.05 47.88 280.51 C 45.88 281.59 43.89 282.66 41.87 283.70 C 41.13 282.23 40.38 280.76 39.63 279.29 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 315.12 275.88 C 316.55 277.85 317.33 280.18 318.13 282.46 C 318.63 281.13 319.16 279.81 319.72 278.50 C 319.68 282.42 318.80 286.80 322.05 289.76 L 322.15 289.90 C 321.54 290.57 320.94 291.26 320.35 291.95 C 318.19 288.67 316.15 284.54 311.70 284.23 C 312.82 283.93 313.95 283.64 315.08 283.35 C 313.61 282.75 312.35 281.87 311.30 280.69 C 312.78 281.20 314.23 281.77 315.67 282.39 C 314.44 280.87 313.22 279.36 312.18 277.72 C 313.80 278.64 315.31 279.73 316.71 281.00 C 316.31 279.72 315.52 277.16 315.12 275.88 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 77.89 289.02 C 82.67 285.93 86.66 281.83 89.77 277.07 C 90.18 277.39 91.01 278.02 91.42 278.34 C 91.70 279.11 92.26 280.64 92.53 281.40 C 89.18 285.10 85.12 288.12 81.09 291.04 C 81.25 292.23 81.50 293.41 81.73 294.60 C 83.26 293.94 84.81 293.87 86.40 294.40 C 87.37 296.65 88.40 298.93 88.34 301.45 C 85.85 299.59 84.39 296.55 81.53 295.19 C 80.13 293.24 79.43 290.88 77.89 289.02 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 343.72 289.73 C 346.03 286.27 347.37 281.92 350.85 279.41 C 353.92 281.01 356.93 282.72 359.95 284.43 C 359.14 285.93 358.31 287.41 357.48 288.89 C 355.05 287.50 352.65 286.04 350.15 284.80 C 348.95 286.99 347.60 289.10 346.23 291.19 C 345.60 290.83 344.35 290.10 343.72 289.73 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 43.42 289.56 C 45.49 287.45 47.36 285.16 49.20 282.85 C 50.09 284.27 50.97 285.70 51.86 287.12 C 49.88 289.34 47.76 291.46 46.14 293.96 C 46.53 294.37 47.31 295.18 47.70 295.59 C 49.91 294.13 52.10 292.65 54.19 291.03 C 55.16 292.31 56.14 293.58 56.91 295.00 C 53.88 296.83 50.74 301.28 46.85 299.40 C 43.44 296.33 41.55 291.95 39.20 288.08 C 39.89 287.73 41.27 287.04 41.97 286.69 C 42.33 287.41 43.06 288.84 43.42 289.56 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 97.86 288.00 C 100.61 286.44 103.52 285.19 106.16 283.43 C 106.29 284.09 106.56 285.40 106.69 286.05 C 104.10 288.07 101.19 289.61 98.37 291.26 C 97.32 297.62 98.07 304.08 97.24 310.46 C 95.63 309.31 94.11 308.05 92.64 306.73 C 92.85 302.55 93.40 298.38 94.56 294.35 C 95.22 292.07 95.70 289.36 97.86 288.00 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 306.47 286.76 C 306.92 284.82 308.59 285.23 309.28 286.78 C 309.59 286.64 310.23 286.34 310.55 286.19 C 311.13 290.41 312.58 294.56 316.15 297.15 C 315.37 298.01 314.59 298.86 313.81 299.72 C 311.47 296.74 308.47 294.41 305.41 292.22 C 306.27 292.23 307.97 292.25 308.82 292.26 C 307.71 290.98 306.59 289.72 305.49 288.44 C 306.14 288.55 307.45 288.75 308.10 288.86 C 307.69 288.33 306.88 287.29 306.47 286.76 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 278.78 292.00 C 280.16 290.17 280.53 287.94 280.95 285.75 C 282.39 293.79 286.39 300.91 290.17 308.03 C 291.20 303.91 292.15 299.75 293.68 295.77 C 293.35 294.92 293.02 294.07 292.70 293.23 C 293.02 291.93 293.34 290.63 293.67 289.33 C 295.35 289.50 297.17 289.47 298.58 290.57 C 302.11 292.91 305.78 295.07 309.07 297.76 C 310.64 298.82 310.93 300.80 311.60 302.44 C 310.24 303.78 308.92 305.15 307.63 306.56 C 307.50 305.37 307.36 304.18 307.23 303.00 C 304.07 300.82 301.95 297.51 298.87 295.27 C 297.11 295.28 295.46 295.99 293.78 296.40 C 293.62 298.10 293.43 299.81 293.22 301.51 C 294.32 301.95 295.42 302.41 296.53 302.87 C 295.57 304.05 294.63 305.23 293.63 306.36 C 293.04 308.52 292.15 310.57 291.35 312.65 C 291.88 312.76 292.94 312.98 293.47 313.09 C 292.37 315.12 293.27 317.29 293.63 319.37 C 272.95 334.86 248.76 346.07 223.07 349.73 C 196.92 353.35 169.66 351.04 145.10 341.05 C 134.56 337.17 124.95 331.33 115.28 325.74 C 115.44 325.56 115.75 325.20 115.91 325.02 C 116.12 324.97 116.55 324.87 116.76 324.82 C 115.83 322.25 116.01 319.54 116.55 316.92 C 117.14 316.02 117.68 315.09 118.18 314.14 C 118.74 312.05 115.43 315.12 114.44 315.16 C 113.77 318.28 113.29 321.89 115.10 324.75 C 114.93 324.87 114.60 325.13 114.43 325.26 C 108.81 320.57 103.06 316.00 97.34 311.44 C 100.44 310.03 103.85 308.79 106.22 306.24 C 107.91 302.95 109.29 299.44 111.68 296.56 C 111.28 298.28 110.68 299.95 110.10 301.63 C 110.75 301.90 112.04 302.45 112.69 302.72 C 111.98 303.58 111.19 304.38 110.39 305.15 C 109.46 306.90 108.28 308.50 106.95 309.97 C 108.30 310.26 109.64 310.59 110.98 310.98 C 111.60 307.57 112.85 304.33 114.04 301.10 C 115.48 298.01 112.45 295.07 113.21 291.87 C 112.59 289.56 114.97 289.67 115.38 291.95 C 115.80 291.43 116.66 290.39 117.09 289.88 C 116.89 290.84 116.51 292.77 116.32 293.74 C 117.14 292.91 118.78 291.27 119.60 290.45 C 119.08 291.40 118.04 293.30 117.52 294.25 C 118.28 293.90 119.82 293.22 120.58 292.87 C 117.31 298.44 116.31 304.91 115.19 311.16 C 118.88 310.43 122.36 308.82 124.98 306.06 C 124.51 305.55 123.57 304.53 123.10 304.02 C 123.83 303.37 125.30 302.07 126.03 301.42 C 125.22 301.46 123.60 301.53 122.78 301.57 C 124.64 299.81 126.36 297.91 127.67 295.71 C 127.08 298.33 127.36 300.99 127.94 303.59 C 128.99 303.96 131.11 304.70 132.16 305.08 C 131.03 305.83 129.89 306.58 128.75 307.32 L 131.82 307.06 C 131.08 307.80 129.58 309.27 128.83 310.00 C 129.90 314.23 131.78 318.19 133.03 322.36 C 133.62 320.99 134.16 319.59 134.65 318.18 L 135.38 318.56 C 136.74 313.79 139.14 309.44 140.97 304.85 C 146.90 301.79 153.50 300.37 159.71 298.01 C 160.87 300.34 160.57 302.80 159.18 304.97 C 157.73 304.21 156.30 303.43 154.88 302.63 C 151.02 303.68 147.73 305.99 144.43 308.14 C 143.59 311.66 142.98 315.25 143.50 318.88 C 143.97 318.76 144.92 318.54 145.39 318.43 C 145.56 316.23 145.58 314.02 145.88 311.83 C 146.26 308.83 148.74 306.59 151.34 305.34 C 153.51 305.09 155.08 306.95 156.81 307.95 C 156.84 309.34 156.87 310.74 156.91 312.14 C 156.08 313.05 155.26 313.95 154.43 314.87 C 154.66 317.56 155.03 320.24 155.43 322.91 C 157.97 321.23 160.98 320.91 163.96 321.15 C 164.94 321.88 165.92 322.62 166.90 323.37 C 168.77 321.40 170.84 319.59 172.35 317.32 C 173.48 315.27 173.94 312.93 175.01 310.85 C 175.29 311.75 175.84 313.53 176.12 314.43 C 176.63 313.19 176.17 311.96 175.81 310.78 C 176.73 310.56 177.65 310.38 178.58 310.22 C 178.71 311.83 178.77 313.44 178.70 315.06 C 173.53 317.02 172.00 322.83 169.25 327.10 C 170.05 328.69 171.02 330.19 171.91 331.74 C 177.09 324.27 182.69 316.35 183.51 307.01 C 184.64 307.58 186.19 307.75 186.79 309.04 C 187.34 310.70 186.28 312.25 185.66 313.73 C 183.89 317.30 182.52 321.06 180.85 324.68 C 181.72 324.62 183.46 324.52 184.32 324.47 C 184.65 324.73 185.31 325.27 185.63 325.54 C 187.43 324.34 189.28 323.21 190.99 321.89 C 193.56 319.98 194.48 316.76 196.42 314.34 C 197.39 312.62 199.71 313.48 201.28 313.05 C 201.07 313.39 200.64 314.06 200.42 314.40 C 200.41 315.78 201.11 317.60 199.51 318.38 C 195.55 321.09 191.78 324.05 188.39 327.46 C 188.75 329.93 188.84 332.44 189.31 334.90 C 189.85 336.54 191.64 337.19 192.91 338.15 C 192.11 336.35 191.16 334.62 190.43 332.79 C 189.70 329.95 190.86 327.13 191.76 324.49 C 193.91 324.31 196.52 322.98 198.38 324.69 C 200.19 326.62 201.67 328.92 204.11 330.16 C 204.84 331.15 205.56 332.14 206.30 333.13 C 206.47 327.43 204.34 321.73 205.58 316.06 C 205.74 314.93 206.84 314.33 207.55 313.57 C 207.94 314.97 208.32 316.38 208.67 317.80 C 208.07 319.32 206.68 320.86 207.40 322.60 C 208.37 324.41 210.97 325.22 210.44 327.74 C 212.37 325.76 215.05 325.17 217.65 324.60 C 217.00 323.69 216.37 322.77 215.74 321.86 C 214.45 321.30 213.18 320.68 211.92 320.04 C 212.77 319.19 213.64 318.34 214.51 317.50 C 213.90 315.98 213.34 314.45 212.87 312.90 C 215.55 315.91 217.32 319.62 220.14 322.52 C 222.81 317.78 219.77 312.11 222.64 307.49 C 223.07 307.51 223.93 307.56 224.36 307.58 C 224.94 309.40 225.53 311.22 226.27 312.98 C 222.49 317.89 224.97 324.06 225.57 329.56 C 226.38 329.33 228.01 328.87 228.82 328.64 C 231.79 321.01 234.63 312.88 233.39 304.54 C 234.60 305.21 237.65 304.91 237.52 307.01 C 237.27 311.54 235.65 315.90 235.31 320.45 C 236.08 320.20 236.84 319.95 237.61 319.71 C 236.57 316.20 238.22 312.63 241.73 311.46 C 242.90 312.23 244.08 313.00 245.26 313.76 C 245.72 316.32 246.29 318.86 246.77 321.41 C 249.77 322.38 252.42 324.11 255.19 325.59 C 256.42 324.35 257.62 323.07 258.80 321.78 C 258.86 319.08 258.91 316.39 258.89 313.69 C 256.83 312.48 254.84 311.17 253.00 309.65 C 254.40 309.66 255.80 309.70 257.20 309.76 C 256.28 306.65 256.07 303.39 256.09 300.16 C 257.78 301.03 258.71 302.66 259.54 304.28 C 259.77 302.97 260.02 301.66 260.28 300.36 C 261.52 305.34 261.77 310.96 265.86 314.62 C 266.74 312.78 267.22 310.51 269.13 309.43 C 272.16 307.35 274.87 304.81 278.06 302.94 C 277.59 305.38 275.54 306.82 273.67 308.19 C 275.56 309.56 276.89 311.51 278.23 313.39 C 278.52 312.87 279.10 311.81 279.39 311.28 C 280.54 310.92 281.70 310.58 282.87 310.24 C 284.06 310.91 285.25 311.57 286.45 312.24 C 284.96 308.95 283.86 305.50 282.59 302.12 C 281.82 299.57 278.58 298.74 278.05 296.09 C 277.37 293.23 276.22 290.52 275.38 287.71 C 276.82 288.88 277.78 290.47 278.78 292.00 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 342.45 291.32 C 345.73 293.38 348.95 295.51 352.10 297.77 C 351.19 299.00 350.30 300.24 349.39 301.48 C 348.83 301.07 347.70 300.25 347.14 299.84 C 347.16 301.82 347.65 303.93 346.73 305.80 C 345.44 306.01 344.48 305.04 343.47 304.46 C 344.34 301.95 345.46 298.72 342.79 296.83 C 341.54 297.99 340.81 300.08 339.22 300.66 C 338.66 300.29 337.55 299.54 337.00 299.17 C 338.94 296.65 340.80 294.05 342.45 291.32 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 55.56 298.39 C 57.33 296.95 59.18 295.61 61.04 294.28 C 61.94 295.54 62.86 296.79 63.79 298.03 C 62.77 298.74 61.76 299.44 60.74 300.15 C 62.38 302.34 64.07 304.49 65.77 306.63 C 64.26 307.88 62.84 309.24 61.16 310.27 C 58.80 310.39 56.43 310.12 54.07 310.27 C 53.08 309.02 52.09 307.77 51.14 306.49 C 53.40 305.30 55.88 306.18 58.23 306.51 C 58.81 306.15 59.99 305.43 60.57 305.07 C 58.89 302.85 57.23 300.62 55.56 298.39 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 293.78 296.40 C 295.46 295.99 297.11 295.28 298.87 295.27 C 301.95 297.51 304.07 300.82 307.23 303.00 C 307.36 304.18 307.50 305.37 307.63 306.56 C 306.93 307.21 306.22 307.87 305.53 308.54 C 304.43 307.23 303.32 305.93 302.27 304.60 C 301.34 304.93 300.42 305.26 299.51 305.60 C 299.40 304.94 299.20 303.61 299.09 302.94 C 298.09 304.20 297.12 305.48 296.20 306.79 C 295.61 306.78 294.43 306.75 293.84 306.74 C 296.13 308.23 294.90 309.75 293.21 311.15 C 293.83 311.59 294.45 312.02 295.07 312.47 C 294.66 313.92 294.28 315.39 293.90 316.86 C 294.49 316.71 295.66 316.41 296.25 316.26 C 295.37 317.29 294.51 318.34 293.63 319.37 C 293.27 317.29 292.37 315.12 293.47 313.09 C 292.94 312.98 291.88 312.76 291.35 312.65 C 292.15 310.57 293.04 308.52 293.63 306.36 C 294.63 305.23 295.57 304.05 296.53 302.87 C 295.42 302.41 294.32 301.95 293.22 301.51 C 293.43 299.81 293.62 298.10 293.78 296.40 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 332.65 304.66 C 333.67 303.49 334.70 302.32 335.73 301.16 C 338.62 303.58 341.62 305.88 344.63 308.15 C 343.62 309.45 342.60 310.75 341.57 312.05 C 338.56 309.63 335.54 307.21 332.65 304.66 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 296.20 306.79 C 297.12 305.48 298.09 304.20 299.09 302.94 C 299.20 303.61 299.40 304.94 299.51 305.60 C 300.42 305.26 301.34 304.93 302.27 304.60 C 303.32 305.93 304.43 307.23 305.53 308.54 C 302.52 311.18 299.98 314.62 296.25 316.26 C 295.66 316.41 294.49 316.71 293.90 316.86 C 294.28 315.39 294.66 313.92 295.07 312.47 C 294.45 312.02 293.83 311.59 293.21 311.15 C 294.90 309.75 296.13 308.23 293.84 306.74 C 294.43 306.75 295.61 306.78 296.20 306.79 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 328.11 310.26 C 329.10 309.09 330.10 307.93 331.08 306.75 C 334.80 309.78 338.40 312.93 342.12 315.96 C 341.07 317.25 340.02 318.55 338.99 319.87 C 335.42 316.60 331.71 313.49 328.11 310.26 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 120.20 312.76 C 121.32 310.80 124.48 310.98 126.52 310.24 C 126.51 312.20 126.50 314.16 126.54 316.12 C 124.97 314.08 122.67 313.20 120.20 312.76 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 61.72 323.95 C 65.11 320.55 68.66 317.33 72.05 313.93 C 73.15 314.98 74.24 316.04 75.35 317.08 C 74.24 318.28 73.13 319.48 72.04 320.71 C 73.15 320.93 74.27 321.16 75.39 321.38 C 76.02 320.65 76.66 319.93 77.29 319.20 C 78.40 320.27 79.52 321.32 80.64 322.38 C 79.30 323.51 78.06 326.13 75.93 324.98 C 73.74 324.54 71.65 323.04 69.40 323.24 C 67.86 324.47 66.52 325.92 65.10 327.29 C 63.98 326.17 62.85 325.06 61.72 323.95 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 114.44 315.16 C 115.43 315.12 118.74 312.05 118.18 314.14 C 117.68 315.09 117.14 316.02 116.55 316.92 C 116.01 319.54 115.83 322.25 116.76 324.82 C 116.55 324.87 116.12 324.97 115.91 325.02 L 115.10 324.75 C 113.29 321.89 113.77 318.28 114.44 315.16 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 264.07 324.79 C 265.45 322.03 265.82 318.01 269.09 316.78 C 267.26 320.21 265.60 323.75 263.42 326.99 C 263.48 328.56 264.27 329.59 265.80 330.09 C 263.75 330.61 261.71 331.22 259.59 331.38 C 260.25 328.65 262.50 326.95 264.07 324.79 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 321.48 317.36 C 322.91 318.77 324.32 320.21 325.56 321.81 C 325.07 322.83 324.60 323.86 324.12 324.89 C 326.08 324.90 328.02 324.90 329.99 324.91 C 328.72 326.17 327.70 327.82 326.07 328.64 C 323.42 328.75 320.78 328.49 318.15 328.38 C 319.46 329.87 320.78 331.37 322.06 332.89 C 320.82 333.84 319.59 334.81 318.36 335.78 C 317.08 334.23 315.78 332.69 314.51 331.13 C 314.77 330.36 315.28 328.82 315.54 328.05 C 313.87 327.92 312.19 327.78 310.53 327.63 C 311.66 326.55 312.74 325.39 314.03 324.50 C 316.71 324.50 319.37 324.80 322.05 324.79 C 320.86 323.35 319.61 321.98 318.33 320.63 C 319.37 319.54 320.42 318.45 321.48 317.36 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 151.72 322.50 C 149.08 321.40 151.53 319.54 152.33 318.06 C 152.18 319.55 151.96 321.02 151.72 322.50 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 278.99 320.28 C 280.01 321.36 281.17 322.29 282.44 323.09 C 282.04 323.88 282.23 326.05 280.88 325.23 C 280.54 323.47 280.07 321.74 278.99 320.28 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 74.77 332.56 C 77.18 329.67 79.88 327.04 82.20 324.08 C 83.44 325.02 84.67 325.97 85.89 326.94 C 83.32 329.81 80.89 332.81 78.32 335.68 C 77.14 334.63 75.96 333.59 74.77 332.56 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 80.26 337.26 C 82.79 334.39 85.19 331.40 87.67 328.49 C 90.73 331.53 95.03 333.33 97.40 336.98 C 96.22 340.33 93.52 342.88 91.74 345.91 C 90.38 345.03 89.06 344.13 87.74 343.21 C 89.40 340.99 91.11 338.80 92.78 336.59 C 91.65 335.64 90.51 334.70 89.38 333.75 C 87.42 335.78 85.74 338.04 84.05 340.29 C 82.77 339.29 81.51 338.28 80.26 337.26 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 305.93 331.20 C 307.10 330.31 308.26 329.41 309.43 328.52 C 311.82 331.46 314.20 334.42 316.78 337.21 C 315.55 338.28 314.30 339.32 313.04 340.36 C 310.67 337.31 308.23 334.30 305.93 331.20 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 152.30 335.28 C 152.93 334.49 153.57 333.71 154.21 332.94 C 154.63 333.94 155.06 334.95 155.49 335.96 C 154.42 335.73 153.36 335.51 152.30 335.28 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 173.93 338.96 C 174.33 336.74 175.33 334.72 176.45 332.79 C 176.95 334.72 177.50 336.65 177.97 338.61 C 176.62 338.73 175.27 338.85 173.93 338.96 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 293.76 340.03 C 297.28 337.90 300.37 335.07 304.17 333.39 C 306.66 336.02 309.02 338.82 310.90 341.92 C 309.84 342.88 308.67 343.72 307.45 344.46 C 305.34 342.70 304.14 340.09 302.49 337.93 C 300.00 339.53 297.57 341.21 295.04 342.75 C 294.72 342.07 294.08 340.71 293.76 340.03 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 97.37 342.07 C 98.24 340.67 99.19 339.33 100.12 337.97 C 101.32 338.76 102.53 339.56 103.73 340.36 C 103.07 341.55 102.42 342.75 101.83 343.98 C 103.19 343.33 104.48 342.50 105.95 342.09 C 108.22 342.73 110.12 344.22 111.84 345.78 C 110.16 349.06 108.27 352.21 106.51 355.44 C 104.33 354.14 102.13 352.86 99.95 351.57 C 100.42 350.66 100.91 349.75 101.39 348.84 C 102.29 349.37 103.19 349.91 104.09 350.45 C 105.09 348.76 106.07 347.05 106.91 345.27 C 103.06 345.16 100.63 349.10 97.04 349.65 C 95.77 348.90 94.58 348.02 93.38 347.18 C 95.18 346.28 96.99 345.40 98.81 344.54 C 98.30 343.73 97.82 342.91 97.37 342.07 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 280.48 347.91 C 284.30 345.75 288.11 343.57 291.91 341.37 C 292.29 341.93 293.05 343.05 293.44 343.62 C 292.88 344.10 292.33 344.59 291.79 345.09 C 293.32 347.38 294.76 349.73 296.22 352.08 C 294.86 352.87 293.49 353.66 292.13 354.46 C 290.78 352.02 289.37 349.62 287.95 347.23 C 286.02 348.34 284.07 349.41 282.09 350.43 C 281.69 349.80 280.88 348.54 280.48 347.91 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 296.20 344.08 C 297.45 343.23 298.70 342.38 299.96 341.54 C 301.21 343.42 302.51 345.28 303.83 347.12 C 302.53 347.96 301.27 348.87 299.93 349.65 C 298.57 347.87 297.43 345.94 296.20 344.08 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 274.93 350.49 C 276.24 349.95 277.56 349.42 278.88 348.91 C 279.84 350.86 281.00 352.72 281.74 354.77 C 280.48 355.56 279.11 356.15 277.76 356.78 C 276.78 354.69 275.79 352.62 274.93 350.49 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 120.20 349.82 C 123.78 351.52 127.53 352.92 130.99 354.86 C 132.48 355.70 131.80 357.26 131.34 358.51 C 130.39 361.00 129.31 363.44 128.31 365.91 C 123.92 364.01 119.47 362.24 115.23 360.02 C 116.70 356.53 118.65 353.28 120.20 349.82 Z' }),
	        React.createElement('path', { fill: '#010101', d: ' M 122.91 354.45 C 124.43 355.14 125.96 355.84 127.47 356.57 C 126.71 358.15 125.98 359.76 125.24 361.35 C 123.70 360.61 122.15 359.90 120.61 359.17 C 121.39 357.60 122.15 356.03 122.91 354.45 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 141.67 355.03 C 143.03 355.32 144.38 355.64 145.72 355.98 C 145.46 357.25 145.21 358.52 144.96 359.79 C 147.27 360.46 149.58 361.12 151.91 361.73 C 151.40 363.57 151.02 365.47 150.24 367.24 C 148.52 368.94 146.26 370.00 144.32 371.44 C 142.95 371.06 141.60 370.66 140.25 370.23 C 141.92 367.32 146.05 367.12 147.19 363.76 C 144.68 362.85 142.14 362.02 139.61 361.20 C 140.31 359.14 141.00 357.09 141.67 355.03 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 254.61 358.93 C 257.82 357.87 260.94 356.56 264.15 355.50 C 265.20 355.17 266.85 355.13 267.26 356.41 C 268.65 359.21 269.74 362.14 270.92 365.04 C 269.51 365.58 268.10 366.15 266.71 366.72 C 265.69 364.16 264.66 361.60 263.64 359.04 C 261.37 359.76 259.12 360.52 256.85 361.24 C 258.07 361.76 259.34 362.13 260.65 362.37 C 261.37 364.30 262.10 366.24 262.82 368.18 C 261.35 368.66 259.88 369.17 258.42 369.67 C 257.81 367.90 257.22 366.12 256.65 364.34 C 257.14 363.02 256.65 361.82 255.58 361.02 C 255.34 360.50 254.85 359.45 254.61 358.93 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 134.80 356.17 C 136.17 356.67 137.55 357.17 138.92 357.68 C 138.11 359.76 137.35 361.87 136.60 363.98 C 135.14 363.50 133.70 362.98 132.26 362.49 C 133.17 360.40 134.01 358.30 134.80 356.17 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 240.30 362.99 C 244.32 362.17 248.16 360.53 252.29 360.24 C 253.80 363.05 254.90 366.08 255.52 369.22 C 255.07 370.23 254.31 370.92 253.26 371.27 C 249.88 372.47 246.37 373.29 242.86 374.04 C 242.70 373.07 242.54 372.10 242.38 371.14 C 245.16 370.38 248.05 369.88 250.70 368.71 C 250.42 366.93 249.75 365.25 249.22 363.56 C 247.68 364.01 246.14 364.46 244.75 365.26 C 245.88 366.10 248.43 366.04 247.85 368.12 C 245.98 368.92 243.93 369.14 241.93 369.40 C 241.31 367.28 240.77 365.13 240.30 362.99 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 154.08 362.40 C 155.33 362.63 156.57 362.91 157.80 363.24 C 157.78 366.24 156.46 369.06 156.12 372.04 C 156.58 371.94 157.50 371.75 157.96 371.65 C 158.74 369.07 159.19 366.40 159.80 363.78 C 161.14 364.03 162.48 364.28 163.82 364.53 C 163.23 367.47 162.58 370.39 162.09 373.35 C 162.63 373.19 163.71 372.88 164.25 372.72 C 164.90 370.21 165.14 367.61 165.90 365.14 C 167.19 365.22 168.48 365.35 169.77 365.51 C 168.70 369.06 170.06 375.41 165.16 376.18 C 160.40 375.91 155.81 374.42 151.17 373.41 C 152.18 369.75 153.19 366.09 154.08 362.40 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 204.56 364.24 C 205.96 364.17 207.35 364.12 208.75 364.08 C 208.80 364.98 208.91 366.77 208.96 367.67 C 211.49 367.47 214.03 367.29 216.57 367.17 C 216.63 369.25 217.12 371.39 216.69 373.47 C 215.53 375.23 214.18 376.88 213.28 378.81 C 211.75 378.83 210.23 378.84 208.70 378.83 C 209.42 375.66 213.28 374.09 212.69 370.55 C 210.05 370.66 207.41 370.79 204.78 370.80 C 204.75 368.61 204.67 366.42 204.56 364.24 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 233.88 364.40 C 235.29 364.13 236.69 363.88 238.10 363.64 C 238.88 367.30 239.71 370.94 240.70 374.55 C 239.17 374.92 237.65 375.29 236.12 375.63 C 235.42 371.87 234.53 368.16 233.88 364.40 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 227.53 365.51 C 228.96 365.33 230.40 365.17 231.84 365.01 C 232.06 368.66 235.26 373.81 231.22 376.25 C 227.55 377.57 223.57 377.56 219.75 378.21 C 219.70 377.47 219.60 376.00 219.55 375.26 C 220.24 375.12 221.64 374.84 222.33 374.70 C 221.34 372.01 220.09 369.42 219.01 366.78 C 220.09 366.64 222.26 366.37 223.34 366.24 C 224.83 369.10 225.39 372.63 228.00 374.76 C 229.52 371.80 227.79 368.55 227.53 365.51 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 172.06 366.13 C 173.51 366.27 174.96 366.42 176.41 366.57 C 175.91 370.30 175.38 374.02 175.05 377.77 C 173.48 377.65 171.92 377.51 170.35 377.37 C 170.96 373.63 171.57 369.89 172.06 366.13 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 178.02 369.74 C 178.20 368.75 178.39 367.77 178.59 366.79 C 182.16 367.46 186.03 366.93 189.36 368.64 C 189.31 372.21 189.20 375.79 188.64 379.33 C 187.57 379.18 185.43 378.89 184.36 378.75 C 184.54 376.01 184.74 373.28 184.87 370.55 C 182.58 370.35 180.29 370.09 178.02 369.74 Z' }),
	        React.createElement('path', { fill: '#ffffff', d: ' M 191.76 367.79 C 193.22 367.83 194.68 367.87 196.14 367.92 C 196.13 370.16 196.13 372.39 196.14 374.64 C 194.61 374.64 193.07 374.65 191.54 374.65 C 191.61 372.36 191.69 370.07 191.76 367.79 Z' })
	      );
	    }
	  }]);
	
	  return Logo;
	}(React.Component);
	
	Logo.PropTypes = {
	  width: React.PropTypes.number,
	  height: React.PropTypes.number,
	  opacity: React.PropTypes.number
	};
	
	module.exports = Logo;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "logo.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	var classNames = __webpack_require__(23);
	
	var navigationConstants = __webpack_require__(21);
	
	var navigationActions = __webpack_require__(19);
	var authActions = __webpack_require__(8);
	
	__webpack_require__(30);
	
	function mapStateToProps(state) {
	    var authData = state.authData;
	    var users = state.users;
	
	    return {
	        photoURL: authData.photoURL || 'http://image.flaticon.com/icons/svg/163/163804.svg',
	        isAdmin: authData.isAdmin,
	        currentPage: state.currentPage,
	        currentUser: authData && users[authData.uid]
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        navigateTo: function navigateTo(pageId) {
	            return dispatch(navigationActions.navigateTo(pageId));
	        },
	        signOut: function signOut() {
	            return dispatch(authActions.signOut());
	        }
	    };
	}
	
	function getUserTitle(currentUser) {
	    if (!currentUser) {
	        return 'משתמש';
	    }
	    return currentUser.firstName;
	}
	
	function createHeader(currentUser, photoURL, navigateTo, signOut) {
	    return React.createElement(
	        'div',
	        { className: 'medium-5 small-10 column user-info' },
	        React.createElement('img', { className: 'avatar', src: photoURL, onClick: navigateTo.bind(this, navigationConstants.PAGES.EDIT_USER_INFO.val) }),
	        React.createElement(
	            'span',
	            null,
	            '\u05E9\u05DC\u05D5\u05DD '
	        ),
	        React.createElement(
	            'span',
	            { className: 'user-name' },
	            getUserTitle(currentUser)
	        ),
	        React.createElement(
	            'span',
	            null,
	            ' | '
	        ),
	        React.createElement(
	            'a',
	            { className: 'disconnect', onClick: signOut },
	            '\u05D4\u05EA\u05E0\u05EA\u05E7'
	        )
	    );
	}
	
	function createSmallMenuForMobile(toggleMenuVisibility) {
	    return React.createElement(
	        'div',
	        { className: 'show-for-small-only float-left', key: 'admin-menu-icon' },
	        React.createElement(
	            'a',
	            { className: 'small-menu button', onClick: toggleMenuVisibility },
	            React.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
	        )
	    );
	}
	
	function createMenu(pages, currentPage, navigateTo, isAdmin, isMenuVisible, toggleMenuVisibility) {
	
	    function createDesktopMenuItem(page) {
	        var itemClasses = classNames({
	            active: currentPage === page.val,
	            button: true,
	            small: true
	        });
	
	        return React.createElement(
	            'a',
	            { className: itemClasses, onClick: navigateTo.bind(this, page.val), key: 'page-' + page.val },
	            navigationConstants.TRANSLATIONS[page.val]
	        );
	    }
	
	    function createMobileMenuItem(page) {
	        var itemClasses = classNames({
	            active: currentPage === page.val,
	            button: true
	        });
	
	        var onMobileMenuClicked = function onMobileMenuClicked() {
	            navigateTo(page.val);
	            toggleMenuVisibility();
	        };
	
	        return React.createElement(
	            'a',
	            { className: itemClasses, onClick: onMobileMenuClicked, key: 'page-' + page.val },
	            navigationConstants.TRANSLATIONS[page.val]
	        );
	    }
	
	    function createDesktopMenu() {
	        return React.createElement(
	            'div',
	            { className: 'menu button-group hide-for-small-only', key: 'admin-menu' },
	            _(pages).pickBy('visible').map(createDesktopMenuItem).value()
	        );
	    }
	
	    function createMobileMenu() {
	        return React.createElement(
	            'div',
	            { className: 'menu button-group stacked-for-small show-for-small-only', key: 'admin-menu-mobile' },
	            _(pages).pickBy('visible').map(createMobileMenuItem).value()
	        );
	    }
	
	    return React.createElement(
	        'div',
	        { className: 'medium-7 small-12 column vertical collapsed' },
	        isAdmin ? createDesktopMenu() : null,
	        isAdmin && isMenuVisible ? createMobileMenu() : null
	    );
	}
	
	var TopBar = function (_React$Component) {
	    _inherits(TopBar, _React$Component);
	
	    function TopBar(props) {
	        _classCallCheck(this, TopBar);
	
	        var _this = _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, props));
	
	        _this.state = {
	            isMenuVisible: false
	        };
	        return _this;
	    }
	
	    _createClass(TopBar, [{
	        key: 'toggleMenuVisibility',
	        value: function toggleMenuVisibility() {
	            this.setState({
	                isMenuVisible: !this.state.isMenuVisible
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'top-bar row small-collapse hide-for-print' },
	                createHeader(this.props.currentUser, this.props.photoURL, this.props.navigateTo, this.props.signOut),
	                this.props.isAdmin ? createSmallMenuForMobile(this.toggleMenuVisibility.bind(this)) : null,
	                createMenu(navigationConstants.PAGES, this.props.currentPage, this.props.navigateTo, this.props.isAdmin, this.state.isMenuVisible, this.toggleMenuVisibility.bind(this))
	            );
	        }
	    }]);
	
	    return TopBar;
	}(React.Component);
	
	TopBar.propTypes = {
	    photoURL: React.PropTypes.string,
	    isAdmin: React.PropTypes.bool,
	    currentPage: React.PropTypes.string,
	    navigateTo: React.PropTypes.func,
	    signOut: React.PropTypes.func
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TopBar);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "topBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./topBar.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./topBar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".top-bar {\n  background: #222222;\n  color: #FFFFFF; }\n  .top-bar span {\n    cursor: default; }\n  .top-bar .user-info {\n    font-size: 0.85rem; }\n  .top-bar .small-menu {\n    background: #D50000;\n    margin-top: 0.5em;\n    margin-left: 0.5em; }\n  .top-bar .menu {\n    margin-top: 0.6rem; }\n    .top-bar .menu .button {\n      color: #FFFFFF;\n      background: none; }\n      .top-bar .menu .button.small {\n        font-size: 0.85rem; }\n      .top-bar .menu .button:hover {\n        color: #D32F2F; }\n      .top-bar .menu .button.active {\n        background: #D32F2F;\n        font-weight: bold; }\n        .top-bar .menu .button.active:hover {\n          color: #FFFFFF; }\n  .top-bar .avatar {\n    width: 2.5rem;\n    background: #fff;\n    border-radius: 50%;\n    margin: 10px;\n    cursor: pointer; }\n  .top-bar .disconnect {\n    color: #F44336; }\n    .top-bar .disconnect:hover {\n      text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _authPage = __webpack_require__(33);
	
	var _authPage2 = _interopRequireDefault(_authPage);
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _reactRedux = __webpack_require__(6);
	
	var _constants = __webpack_require__(11);
	
	var constants = _interopRequireWildcard(_constants);
	
	var _authActions = __webpack_require__(8);
	
	var _errorActions = __webpack_require__(16);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    errorMsg: state.errorMsg
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    loginWithGoogle: function loginWithGoogle() {
	      return dispatch((0, _authActions.loginWithGoogle)());
	    },
	    loginWithFacebook: function loginWithFacebook() {
	      return dispatch((0, _authActions.loginWithFacebook)());
	    },
	    loginWithEmail: function loginWithEmail(email, password) {
	      return dispatch((0, _authActions.loginWithEmailAndPassword)(email, password));
	    },
	    signUpWithUserAndPassword: function signUpWithUserAndPassword(email, password) {
	      return dispatch((0, _authActions.createUserWithEmailAndPassword)(email, password));
	    },
	    sendPasswordResetEmail: function sendPasswordResetEmail(email) {
	      return dispatch((0, _authActions.sendPasswordResetEmail)(email));
	    },
	    reportError: function reportError(msg) {
	      return dispatch((0, _errorActions.reportError)(msg));
	    }
	  };
	};
	
	var AuthForm = _react2.default.createClass({
	  displayName: 'AuthForm',
	
	  propTypes: {
	    loginWithGoogle: _react2.default.PropTypes.func.isRequired,
	    loginWithFacebook: _react2.default.PropTypes.func.isRequired,
	    loginWithEmail: _react2.default.PropTypes.func.isRequired,
	    reportError: _react2.default.PropTypes.func.isRequired,
	    signUpWithUserAndPassword: _react2.default.PropTypes.func.isRequired
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      email: '',
	      password: '',
	      passwordAgain: '',
	      authMode: 'login',
	      isLoginMode: false
	    };
	  },
	  onChange: function onChange(e) {
	    this.setState(_defineProperty({}, e.target.name, e.target.value));
	  },
	  getButtonLabel: function getButtonLabel() {
	    switch (this.state.authMode) {
	      case 'login':
	        return 'התחבר';
	      case 'register':
	        return 'הירשם';
	      case 'forgotPassword':
	        return 'שלח לינק לאיפוס סיסמא';
	    }
	  },
	  handleKeyDown: function handleKeyDown(e) {
	    if (e.keyCode === 13 && !this.isSubmitDisabled()) {
	      this.handleSubmitClick();
	    }
	  },
	  signUpWithUserAndPassword: function signUpWithUserAndPassword() {
	    this.props.signUpWithUserAndPassword(this.state.email, this.state.password);
	  },
	  isSubmitDisabled: function isSubmitDisabled() {
	    switch (this.state.authMode) {
	      case 'login':
	        return _.isEmpty(this.state.email) || _.isEmpty(this.state.password);
	      case 'register':
	        return _.isEmpty(this.state.email) || _.isEmpty(this.state.password) || _.isEmpty(this.state.passwordAgain);
	      case 'forgotPassword':
	        return _.isEmpty(this.state.email);
	    }
	  },
	  goToLogin: function goToLogin() {
	    this.setState({ authMode: 'login' });
	  },
	  goToRegister: function goToRegister() {
	    this.setState({ authMode: 'register' });
	  },
	  goToForgotPassword: function goToForgotPassword() {
	    this.setState({ authMode: 'forgotPassword' });
	  },
	  handleLogin: function handleLogin() {
	    this.props.loginWithEmail(this.state.email, this.state.password);
	  },
	  handleRegister: function handleRegister() {
	    if (_.isEqual(this.state.password, this.state.passwordAgain)) {
	      this.props.signUpWithUserAndPassword(this.state.email, this.state.password);
	    } else {
	      this.props.reportError(constants.ERRORS.NOT_SAME_PASSWORD);
	    }
	  },
	  handleForgotPassword: function handleForgotPassword() {
	    this.props.sendPasswordResetEmail(this.state.email);
	    this.goToLogin();
	  },
	  handleSubmitClick: function handleSubmitClick() {
	    switch (this.state.authMode) {
	      case 'login':
	        return this.handleLogin();
	      case 'register':
	        return this.handleRegister();
	      case 'forgotPassword':
	        return this.handleForgotPassword();
	    }
	  },
	
	
	  render: _authPage2.default
	});
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AuthForm);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "authPage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(34),
	    __webpack_require__(28)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, css, logo) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'large-6 columns small-centered auth-form-container' }, React.createElement('div', { 'className': 'medium-centered logo' }, React.createElement(logo, {
	            'width': 120,
	            'height': 120
	        })), _.includes([
	            'login',
	            'register'
	        ], this.state.authMode) ? React.createElement('div', { 'key': '288' }, React.createElement('button', {
	            'onClick': this.props.loginWithFacebook,
	            'className': 'facebook button split'
	        }, React.createElement('span', {}, 'Facebook'), React.createElement('i', { 'className': 'fa fa-facebook-official' })), React.createElement('button', {
	            'onClick': this.props.loginWithGoogle,
	            'className': 'google button split'
	        }, React.createElement('span', {}, 'Google'), React.createElement('i', {
	            'className': 'fa fa-google',
	            'aria-hidden': 'true'
	        })), React.createElement('hr', { 'className': 'hr' })) : null, this.props.errorMsg ? React.createElement('div', {
	            'className': 'error-msg',
	            'key': 'homePageErrorMsg'
	        }, React.createElement('i', {
	            'className': 'fa fa-exclamation-circle',
	            'aria-hidden': 'true'
	        }), React.createElement('span', { 'className': 'error-msg-txt' }, this.props.errorMsg)) : null, React.createElement('div', {
	            'onKeyDown': this.handleKeyDown,
	            'className': 'auth-form'
	        }, React.createElement('input', {
	            'type': 'email',
	            'value': this.state.email,
	            'onChange': this.onChange,
	            'name': 'email',
	            'placeholder': 'דואר אלקטרוני'
	        }), _.includes([
	            'login',
	            'register'
	        ], this.state.authMode) ? React.createElement('input', {
	            'type': 'password',
	            'value': this.state.password,
	            'onChange': this.onChange,
	            'name': 'password',
	            'placeholder': 'סיסמא',
	            'key': '1216'
	        }) : null, this.state.authMode === 'register' ? React.createElement('input', {
	            'type': 'password',
	            'value': this.state.passwordAgain,
	            'onChange': this.onChange,
	            'name': 'passwordAgain',
	            'placeholder': 'שוב סיסמא',
	            'key': '1422'
	        }) : null, React.createElement('button', {
	            'onClick': this.handleSubmitClick,
	            'className': 'button split success',
	            'disabled': this.isSubmitDisabled()
	        }, React.createElement('span', {}, this.getButtonLabel())), this.state.authMode === 'login' ? React.createElement('div', {
	            'className': 'row',
	            'key': '1823'
	        }, React.createElement('div', { 'className': 'column small-6 red-link' }, React.createElement('a', { 'onClick': this.goToRegister }, 'אין לך חשבון?')), React.createElement('div', { 'className': 'column small-6 red-link' }, React.createElement('a', { 'onClick': this.goToForgotPassword }, 'שכחת סיסמא?'))) : null, this.state.authMode !== 'login' ? React.createElement('div', { 'key': '2121' }, React.createElement('a', {
	            'className': 'red-link',
	            'onClick': this.goToLogin
	        }, 'כבר יש לך חשבון?')) : null));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./authPage.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./authPage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".auth-form-container .logo {\n  margin: 20px auto 35px;\n  width: 160px;\n  height: 160px; }\n\n.auth-form-container .auth-form {\n  text-align: center; }\n\n.auth-form-container .hr {\n  margin: 0.7em auto !important; }\n\n.auth-form-container .red-link {\n  text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _homePage = __webpack_require__(37);
	
	var _homePage2 = _interopRequireDefault(_homePage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _constants = __webpack_require__(11);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _bookingActions = __webpack_require__(18);
	
	var _userActions = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var teamsData = __webpack_require__(41);
	
	function parseEventDate(event) {
	  var eventDate = new Date(event.year, event.month, event.day);
	  eventDate.setMonth(eventDate.getMonth() - 1);
	  return eventDate;
	}
	
	function isFutureEvent(event) {
	  var eventDate = parseEventDate(event);
	  return eventDate > Date.now();
	}
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    authData: state.authData,
	    events: state.events,
	    users: state.users,
	    bookings: state.bookings
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    updateBooking: function updateBooking(uid, eventId, booking) {
	      return dispatch((0, _bookingActions.updateBooking)(uid, eventId, booking));
	    },
	    cancelBooking: function cancelBooking(uid, eventId) {
	      return dispatch((0, _bookingActions.cancelBooking)(uid, eventId));
	    },
	    updateUser: function updateUser(uid, user) {
	      return dispatch((0, _userActions.updateUser)(uid, user));
	    }
	  };
	};
	
	var HomePage = function (_React$Component) {
	  _inherits(HomePage, _React$Component);
	
	  function HomePage(props) {
	    _classCallCheck(this, HomePage);
	
	    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
	
	    _this.state = {
	      eventId: null
	    };
	    return _this;
	  }
	
	  _createClass(HomePage, [{
	    key: 'getOpenEvents',
	    value: function getOpenEvents() {
	      return _.omitBy(this.props.events, function (event) {
	        return event.status === Constants.EVENTS_STATUS.CLOSED.value;
	      });
	    }
	  }, {
	    key: 'getClosedEvents',
	    value: function getClosedEvents() {
	      return _.chain(this.props.events).omitBy(function (event) {
	        return event.status !== Constants.EVENTS_STATUS.CLOSED.value || !isFutureEvent(event);
	      }).map(function (event, eventId) {
	        return {
	          event: event,
	          eventId: eventId
	        };
	      }).sortBy(function (eventData) {
	        return parseEventDate(eventData.event);
	      }).value();
	    }
	  }, {
	    key: 'bookEvent',
	    value: function bookEvent(eventId) {
	      this.setState({ eventId: eventId });
	    }
	  }, {
	    key: 'isBookingEnabled',
	    value: function isBookingEnabled(event) {
	      switch (event.status) {
	        case Constants.EVENTS_STATUS.OPEN_FOR_ALL.value:
	          return true;
	        case Constants.EVENTS_STATUS.OPEN_FOR_MEMBERS.value:
	          {
	            var user = this.props.users[this.props.authData.uid];
	            return user.seasonTickets > 0;
	          }
	        default:
	          return false;
	      }
	    }
	  }, {
	    key: 'getEventName',
	    value: function getEventName(event) {
	      if (event.typeId) {
	        return Constants.EVENTS_TYPES[event.typeId].name;
	      }
	    }
	  }, {
	    key: 'getEventHapoelImage',
	    value: function getEventHapoelImage() {
	      return 'http://hapoel.co.il/sites/default/files/logo120x120.png';
	    }
	  }, {
	    key: 'isRegisteredToEvent',
	    value: function isRegisteredToEvent(eventId) {
	      var userBookings = this.props.bookings[this.props.authData.uid];
	
	      return _.has(userBookings, eventId);
	    }
	  }, {
	    key: 'getEventImage',
	    value: function getEventImage(event) {
	      if (event.typeId) {
	        return Constants.EVENTS_TYPES[event.typeId].src;
	      }
	    }
	  }, {
	    key: 'getEventDate',
	    value: function getEventDate(event) {
	      if (event) {
	        return event.day + '/' + event.month + '/' + event.year;
	      }
	    }
	  }, {
	    key: 'getEventTime',
	    value: function getEventTime(event) {
	      if (event) {
	        return event.hour + ':' + event.minute;
	      }
	    }
	  }, {
	    key: 'stopEditing',
	    value: function stopEditing() {
	      this.setState({ eventId: null });
	    }
	  }, {
	    key: 'updateBooking',
	    value: function updateBooking(booking) {
	      this.props.updateBooking(this.props.authData.uid, this.state.eventId, booking);
	      this.stopEditing();
	    }
	  }, {
	    key: 'cancelBooking',
	    value: function cancelBooking(eventId) {
	      this.props.cancelBooking(this.props.authData.uid, eventId);
	    }
	  }, {
	    key: 'createUserInfo',
	    value: function createUserInfo(uid, user) {
	      user.photoURL = this.props.authData.photoURL;
	      this.props.updateUser(uid, user);
	    }
	  }, {
	    key: 'getHomeTeam',
	    value: function getHomeTeam() {
	      return teamsData.HAPOEL_JERUSALEM;
	    }
	  }, {
	    key: 'getAwayTeam',
	    value: function getAwayTeam(event) {
	      return teamsData[event.typeId];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _homePage2.default.apply(this);
	    }
	  }]);
	
	  return HomePage;
	}(_react2.default.Component);
	
	HomePage.propTypes = {
	  authData: _react2.default.PropTypes.object
	};
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "homePage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(38),
	    __webpack_require__(44),
	    __webpack_require__(50),
	    __webpack_require__(53)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, EventItem, BookingForm, UserForm, homePageCss) {
	    'use strict';
	    function onBooking1(openEvents, closedEvents, hasUser, event, eventIndex) {
	        this.bookEvent(eventIndex);
	    }
	    function onCancelBooking2(openEvents, closedEvents, hasUser, event, eventIndex) {
	        this.cancelBooking(eventIndex);
	    }
	    function repeatEvent3(openEvents, closedEvents, hasUser, event, eventIndex) {
	        return React.createElement(EventItem, {
	            'key': 'event-' + eventIndex,
	            'eventId': eventIndex,
	            'onBooking': onBooking1.bind(this, openEvents, closedEvents, hasUser, event, eventIndex),
	            'onCancelBooking': onCancelBooking2.bind(this, openEvents, closedEvents, hasUser, event, eventIndex)
	        });
	    }
	    function onBooking4(openEvents, closedEvents, hasUser, event, eventIndex) {
	        this.bookEvent(event.eventId);
	    }
	    function onCancelBooking5(openEvents, closedEvents, hasUser, event, eventIndex) {
	        this.cancelBooking(event.eventId);
	    }
	    function repeatEvent6(openEvents, closedEvents, hasUser, event, eventIndex) {
	        return React.createElement(EventItem, {
	            'key': 'event-' + eventIndex,
	            'eventId': event.eventId,
	            'onBooking': onBooking4.bind(this, openEvents, closedEvents, hasUser, event, eventIndex),
	            'onCancelBooking': onCancelBooking5.bind(this, openEvents, closedEvents, hasUser, event, eventIndex)
	        });
	    }
	    function onSubmit7(openEvents, closedEvents, hasUser, editingEvent, booking) {
	        this.updateBooking(booking);
	    }
	    function onClose8(openEvents, closedEvents, hasUser, editingEvent) {
	        this.stopEditing();
	    }
	    function scopeEditingEvent9(openEvents, closedEvents, hasUser) {
	        var editingEvent = this.props.events[this.state.eventId];
	        return React.createElement(BookingForm, {
	            'key': 'edit-booking',
	            'title': this.getEventName(editingEvent) + ' - ' + this.getEventDate(editingEvent) + ' ' + this.getEventTime(editingEvent),
	            'booking': _.get(this.props.bookings, [
	                this.props.authData.uid,
	                this.state.eventId
	            ]),
	            'onSubmit': onSubmit7.bind(this, openEvents, closedEvents, hasUser, editingEvent),
	            'seasonTickets': _.get(this.props.users, [
	                this.props.authData.uid,
	                'seasonTickets'
	            ]) || 0,
	            'onClose': onClose8.bind(this, openEvents, closedEvents, hasUser, editingEvent)
	        });
	    }
	    function scopeOpenEventsClosedEventsHasUser10() {
	        var openEvents = this.getOpenEvents();
	        var closedEvents = this.getClosedEvents();
	        var hasUser = this.props.users[this.props.authData.uid];
	        return React.createElement('div', { 'className': 'site' }, React.createElement('div', { 'className': 'home-page small-centered' }, hasUser ? React.createElement('div', {
	            'className': 'events-container',
	            'key': 'events-container'
	        }, !this.state.eventId ? React.createElement('div', {
	            'className': 'events',
	            'key': 'events'
	        }, _.size(openEvents) === 0 ? React.createElement('div', {
	            'className': 'show-for-small-only no-bookings more-space',
	            'key': '658'
	        }, React.createElement('span', {}, 'אין כרגע הסעות פתוחות'), React.createElement('i', {
	            'className': 'fa fa-bus',
	            'aria-hidden': 'true'
	        })) : null, _.size(openEvents) !== 0 ? React.createElement.apply(this, [
	            'div',
	            {
	                'className': 'events-list open-events',
	                'key': '908'
	            },
	            React.createElement('h6', { 'className': 'hide-for-small-only' }, 'הסעות:'),
	            _.map(openEvents, repeatEvent3.bind(this, openEvents, closedEvents, hasUser))
	        ]) : null, React.createElement.apply(this, [
	            'div',
	            { 'className': 'events-list closed-events hide-for-small-only' },
	            React.createElement('h6', {}, 'ההסעות הבאות:'),
	            _.map(closedEvents, repeatEvent6.bind(this, openEvents, closedEvents, hasUser))
	        ])) : null, this.state.eventId ? scopeEditingEvent9.apply(this, [
	            openEvents,
	            closedEvents,
	            hasUser
	        ]) : null) : null, !hasUser ? React.createElement('div', {
	            'className': 'user-edit-container',
	            'key': 'user-edit-container'
	        }, React.createElement(UserForm, { 'uid': this.props.authData.uid })) : null));
	    }
	    return function () {
	        return scopeOpenEventsClosedEventsHasUser10.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	
	var gamesConstants = __webpack_require__(39);
	var bookingsConstants = __webpack_require__(40);
	var teamsData = __webpack_require__(41);
	
	__webpack_require__(42);
	
	function isBookingEnabled(event, user) {
	    switch (event.status) {
	        case gamesConstants.STATUS.OPEN_FOR_ALL:
	            return true;
	        case gamesConstants.STATUS.OPEN_FOR_MEMBERS:
	            {
	                return user.seasonTickets > 0;
	            }
	        default:
	            return false;
	    }
	}
	
	function mapStateToProps(state, ownProps) {
	    var authData = state.authData;
	    var users = state.users;
	    var event = state.events[ownProps.eventId];
	    var bookings = state.bookings;
	
	    return {
	        homeTeam: teamsData.HAPOEL_JERUSALEM,
	        awayTeam: teamsData[event.typeId],
	        status: event.status,
	        date: event.day + '/' + event.month + '/' + event.year,
	        time: event.hour + ':' + event.minute,
	        isBookingAllowed: isBookingEnabled(event, users[authData.uid]),
	        isBooked: _.hasIn(bookings, [authData.uid, ownProps.eventId])
	    };
	}
	
	function createTeamLogos(home, away) {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(
	            'div',
	            { className: 'groups-images medium-4 small-12 text-center medium-text-right column' },
	            React.createElement('img', { className: 'event-image small hide-for-small-only', src: home.logo }),
	            React.createElement(
	                'span',
	                { className: 'group-text hide-for-small-only' },
	                home.label
	            ),
	            React.createElement(
	                'span',
	                { className: 'hide-for-small-only separator' },
	                ' - '
	            ),
	            React.createElement('img', { className: 'event-image small hide-for-small-only', src: away.logo }),
	            React.createElement(
	                'span',
	                { className: 'group-text hide-for-small-only' },
	                away.label
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'groups-names show-for-small-only text-center row' },
	            React.createElement(
	                'div',
	                { className: 'columns small-6' },
	                React.createElement('img', { className: 'event-image big', src: home.logo }),
	                React.createElement(
	                    'span',
	                    { className: 'group-text small' },
	                    home.label
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'columns small-6' },
	                React.createElement('img', { className: 'event-image big', src: away.logo }),
	                React.createElement(
	                    'span',
	                    { className: 'group-text small' },
	                    away.label
	                )
	            )
	        )
	    );
	}
	
	function createEventTimeAndDate(date, time, isOpenForBooking) {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(
	            'div',
	            { className: 'event-info column medium-2 small-12 hide-for-small-only' },
	            isOpenForBooking ? React.createElement(
	                'span',
	                { className: 'event-time' },
	                time
	            ) : null,
	            React.createElement(
	                'span',
	                { className: 'event-date' },
	                date
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'event-info column medium-2 small-12 show-for-small-only colored' },
	            isOpenForBooking ? React.createElement(
	                'span',
	                { className: 'event-time' },
	                time
	            ) : null,
	            React.createElement(
	                'span',
	                { className: 'event-date' },
	                date
	            )
	        )
	    );
	}
	
	function createFullyBookedLabel() {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(
	            'div',
	            { className: 'event-info column medium-2 small-12 hide-for-small-only' },
	            React.createElement(
	                'span',
	                { className: 'event-status' },
	                gamesConstants.TRANSLATIONS.fullyBooked
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'event-info column medium-2 small-12 show-for-small-only colored' },
	            React.createElement(
	                'span',
	                { className: 'event-status' },
	                gamesConstants.TRANSLATIONS.fullyBooked
	            )
	        )
	    );
	}
	
	function createBookingButton(isBookingAllowed, isBooked, onBooking) {
	    var bookButton = React.createElement(
	        'span',
	        { key: 'book-btn' },
	        React.createElement(
	            'span',
	            null,
	            bookingsConstants.TRANSLATIONS.book
	        ),
	        React.createElement('i', { className: 'fa fa-bus', 'aria-hidden': 'true' })
	    );
	
	    var editBookingButton = React.createElement(
	        'span',
	        { key: 'edit-btn' },
	        React.createElement(
	            'span',
	            null,
	            bookingsConstants.TRANSLATIONS.editBooking
	        ),
	        React.createElement('i', { className: 'fa fa-bus', 'aria-hidden': 'true' })
	    );
	
	    return React.createElement(
	        'a',
	        { className: 'button success small', key: 'register-btn', onClick: onBooking, disabled: !isBookingAllowed },
	        isBooked ? editBookingButton : bookButton
	    );
	}
	
	function createBookingCancellationButton(onCancelBooking) {
	    return React.createElement(
	        'a',
	        { className: 'button small alert', key: 'remove-btn', onClick: onCancelBooking },
	        React.createElement(
	            'span',
	            null,
	            bookingsConstants.TRANSLATIONS.cancelBooking
	        ),
	        React.createElement('i', { className: 'fa fa-times', 'aria-hidden': 'true' })
	    );
	}
	
	function createActionsButtons(isOpenForBooking, isBookingAllowed, isBooked, onBooking, onCancelBooking) {
	    return React.createElement(
	        'div',
	        { className: 'action-buttons medium-4 small-12 text-center medium-text-left column' },
	        isOpenForBooking ? createBookingButton(isBookingAllowed, isBooked, onBooking) : null,
	        isOpenForBooking && isBooked ? createBookingCancellationButton(onCancelBooking) : null
	    );
	}
	
	var EventItem = function (_React$Component) {
	    _inherits(EventItem, _React$Component);
	
	    function EventItem() {
	        _classCallCheck(this, EventItem);
	
	        return _possibleConstructorReturn(this, (EventItem.__proto__ || Object.getPrototypeOf(EventItem)).apply(this, arguments));
	    }
	
	    _createClass(EventItem, [{
	        key: 'render',
	        value: function render() {
	            var isOpenForBooking = this.props.status !== gamesConstants.STATUS.CLOSED;
	            var isFullyBooked = this.props.status === gamesConstants.STATUS.FULLY_BOOKED;
	            return React.createElement(
	                'div',
	                { className: 'event-item row collapse' },
	                createTeamLogos(this.props.homeTeam, this.props.awayTeam),
	                createEventTimeAndDate(this.props.date, this.props.time, isOpenForBooking),
	                isFullyBooked ? createFullyBookedLabel() : null,
	                createActionsButtons(isOpenForBooking, this.props.isBookingAllowed, this.props.isBooked, this.props.onBooking, this.props.onCancelBooking)
	            );
	        }
	    }]);
	
	    return EventItem;
	}(React.Component);
	
	EventItem.propTypes = {
	    homeTeam: React.PropTypes.shape({
	        label: React.PropTypes.string,
	        logo: React.PropTypes.string
	    }).isRequired,
	    awayTeam: React.PropTypes.shape({
	        label: React.PropTypes.string,
	        logo: React.PropTypes.string
	    }).isRequired,
	    date: React.PropTypes.string,
	    time: React.PropTypes.string,
	    status: React.PropTypes.string,
	    isBookingAllowed: React.PropTypes.bool,
	    isBooked: React.PropTypes.bool,
	    onBooking: React.PropTypes.func,
	    onCancelBooking: React.PropTypes.func
	};
	
	module.exports = ReactRedux.connect(mapStateToProps)(EventItem);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "eventItem.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  STATUS: {
	    CLOSED: 'closed',
	    OPEN_FOR_MEMBERS: 'openForMembers',
	    OPEN_FOR_ALL: 'openForAll',
	    FULLY_BOOKED: 'fullyBooked'
	  },
	  TRANSLATIONS: {
	    closed: 'ההרשמה סגורה',
	    openForMembers: 'ההרשמה פתוחה למנויי הסעות',
	    openForAll: 'ההרשמה פתוחה לכולם',
	    fullyBooked: 'ההסעה מלאה'
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "gameConstants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  TRANSLATIONS: {
	    book: 'הרשם',
	    editBooking: 'ערוך',
	    cancelBooking: 'בטל הרשמה'
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "bookingsConstants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  HAPOEL_JERUSALEM: {
	    label: 'הפועל ירושלים',
	    logo: 'http://hapoel.co.il/sites/default/files/logo120x120.png'
	  },
	  'hapoel-tlv': {
	    logo: 'http://www.basket.co.il/pics/2007/logos/logo_hapoelta.png',
	    label: 'הפועל תל אביב'
	  },
	  'maccabi-tlv': {
	    logo: 'http://www.basket.co.il/pics/2007/logos/logo_maccabi.png',
	    label: 'מכבי תל אביב'
	  },
	  'herzeliya': {
	    logo: 'http://www.basket.co.il/pics/2007/logos/logo_sharon.png',
	    label: 'בני הרצליה'
	  },
	  'kiryat-gat': {
	    logo: 'http://www.basket.co.il/Images/teams/bigGat.png',
	    label: 'מכבי קרית גת'
	  },
	  'gilboa': {
	    logo: 'http://www.basket.co.il/pics/2007/logos/logo_Galil.png',
	    label: 'גליל/גלבוע'
	  },
	  'nahariya': {
	    logo: 'http://www.basket.co.il/pics/2007/logos/logo_naharia.png',
	    label: 'עירוני נהריה'
	  },
	  'holon': {
	    logo: 'http://www.basket.co.il/pics/2007/articles/logo_hh.png',
	    label: 'הפועל חולון'
	  },
	  'ashdod': {
	    logo: 'http://www.basket.co.il/pics/2007/logos/logo_ashdod.png',
	    label: 'מכבי אשדוד'
	  },
	  'haifa': {
	    logo: 'http://www.basket.co.il/pics/2007/logos/logo_haifa.png',
	    label: 'מכבי חיפה'
	  },
	  'rishon': {
	    logo: 'http://www.basket.co.il/pics/2007/logos/logo_rishon.png',
	    label: 'מכבי ראשון לציון'
	  },
	  'eilat': {
	    logo: 'http://www.basket.co.il/pics/2007/logos/logo_eilat.png',
	    label: 'הפועל אילת'
	  },
	  'ljubljana': {
	    logo: 'http://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Union_olimpija.png/140px-Union_olimpija.png',
	    label: 'לובליאנה'
	  },
	  'valencia': {
	    logo: 'http://samvanrossom.com/wp-content/uploads/2014/10/valencia-basket1-logo.jpg',
	    label: 'ולנסיה'
	  },
	  'kuban': {
	    logo: 'http://upload.wikimedia.org/wikipedia/en/thumb/0/04/Lokomotiv_Kuban_logo.png/200px-Lokomotiv_Kuban_logo.png',
	    label: 'לוקומוטיב קובאן'
	  },
	  'fuenlabrada': {
	    logo: 'http://upload.wikimedia.org/wikipedia/en/thumb/1/13/Baloncestofuenlabrada.jpg/110px-Baloncestofuenlabrada.jpg',
	    label: 'פואנלברדה'
	  },
	  'ulm': {
	    logo: 'http://nachwuchs.bbu01.com/modules/mod_bbunewsflash/assets/images/noimage_thumb.jpg',
	    label: 'אולם'
	  },
	  'vilna': {
	    logo: 'http://upload.wikimedia.org/wikipedia/en/thumb/7/75/BC_Lietuvos_Rytas_logo.svg/907px-BC_Lietuvos_Rytas_logo.svg.png',
	    label: 'ריטאס וילנה'
	  },
	  'novgorod': {
	    logo: 'http://olympiakos-live.gr/img/teams/Nizhny%20Novgorod.png',
	    label: 'ניז׳ני'
	  },
	  'zenit': {
	    logo: 'http://upload.wikimedia.org/wikipedia/commons/thumb/2/25/FC_Zenit_1_star_2015_logo.png/220px-FC_Zenit_1_star_2015_logo.png',
	    label: 'זניט'
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "teamsData.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./eventItem.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./eventItem.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".event-item {\n  font-size: 0.9em; }\n  .event-item:first-child {\n    padding-top: 0; }\n  .event-item .groups-images .separator {\n    margin-right: 5px; }\n  .event-item .event-image {\n    border-radius: 50%;\n    background: #ffffff; }\n    .event-item .event-image.big {\n      margin-bottom: 10px;\n      width: 90px;\n      height: 90px; }\n    .event-item .event-image.small {\n      margin: 0 5px;\n      width: 40px;\n      height: 40px; }\n  .event-item .groups-names {\n    padding: 0 4em; }\n  .event-item .event-info {\n    text-align: center;\n    margin-top: 10px; }\n    .event-item .event-info.colored {\n      font-size: 1.1em;\n      font-weight: bold;\n      margin-bottom: 10px; }\n    .event-item .event-info .event-status {\n      color: #D32F2F; }\n    .event-item .event-info span {\n      margin: 0 15px; }\n  .event-item .action-buttons {\n    margin-right: auto;\n    margin-top: 5px; }\n    .event-item .action-buttons .button.small {\n      font-size: 0.75rem;\n      margin: 0 5px; }\n    .event-item .action-buttons .button i {\n      margin-right: 5px; }\n", ""]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bookingForm = __webpack_require__(45);
	
	var _bookingForm2 = _interopRequireDefault(_bookingForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var emptyBooking = {
	  paidSeats: 0,
	  extraSeats: 0,
	  pickUp: 'tlv',
	  dropOff: 'tlv'
	};
	
	var bookingForm = _react2.default.createClass({
	  displayName: 'BookingForm',
	
	  propTypes: {
	    onSubmit: _react2.default.PropTypes.func.isRequired,
	    onBookingCancel: _react2.default.PropTypes.func,
	    booking: _react2.default.PropTypes.object,
	    onClose: _react2.default.PropTypes.func
	  },
	
	  getInitialState: function getInitialState() {
	    var booking = _.defaults(this.props.booking, { paidSeats: this.props.seasonTickets }, emptyBooking);
	    return _.merge({}, booking, {
	      pickUpEnabled: !!booking.pickUp,
	      dropOffEnabled: !!booking.dropOff
	    });
	  },
	  onChange: function onChange(e, validationType) {
	    var value = e.target.value;
	
	    if (validationType === 'numeric') {
	      if (!/^[0-9]*$/.test(value)) {
	        return;
	      }
	    }
	
	    if (validationType === 'hebrew') {
	      if (!/^[א-ת\s]*$/.test(value)) {
	        return;
	      }
	    }
	
	    this.setState(_defineProperty({}, e.target.name, value));
	  },
	  togglePickUp: function togglePickUp(e) {
	    var pickUpEnabled = e.target.checked;
	    this.setState({ pickUpEnabled: pickUpEnabled });
	    if (!pickUpEnabled) {
	      this.setState({ pickUp: '' });
	    }
	  },
	  toggleDropOff: function toggleDropOff(e) {
	    var dropOffEnabled = e.target.checked;
	    this.setState({ dropOffEnabled: dropOffEnabled });
	    if (!dropOffEnabled) {
	      this.setState({ dropOff: '' });
	    }
	  },
	  onNumericChange: function onNumericChange(e) {
	    var value = _.toNumber(e.target.value);
	
	    this.setState(_defineProperty({}, e.target.name, value));
	  },
	  isFormValid: function isFormValid() {
	    if (this.state.paidSeats === 0 && this.state.extraSeats === 0) {
	      return false;
	    }
	
	    if (!this.state.pickUpEnabled && !this.state.dropOffEnabled) {
	      return false;
	    }
	
	    if (this.state.pickUpEnabled && this.state.pickUp === '') {
	      return false;
	    }
	
	    if (this.state.dropOffEnabled && this.state.dropOff === '') {
	      return false;
	    }
	
	    return true;
	  },
	  onSubmit: function onSubmit() {
	    var bookingToSubmit = _.pick(this.state, _.keys(emptyBooking));
	    this.props.onSubmit(bookingToSubmit);
	  },
	
	
	  render: _bookingForm2.default
	});
	
	module.exports = bookingForm;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "bookingForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(46),
	    __webpack_require__(11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, FormFrame, constants) {
	    'use strict';
	    function repeatSeat1(seat, seatIndex) {
	        return React.createElement('option', {
	            'key': 'seat-' + seatIndex,
	            'value': seatIndex
	        }, seatIndex, '\n                        ');
	    }
	    function repeatExtraSeat2(extraSeat, extraSeatIndex) {
	        return React.createElement('option', {
	            'key': 'extraSeat-' + extraSeatIndex,
	            'value': extraSeatIndex
	        }, extraSeatIndex, '\n                        ');
	    }
	    function onChange3(e) {
	        this.togglePickUp(e);
	    }
	    function repeatStation4(station, stationIndex) {
	        return React.createElement('option', {
	            'key': 'station-' + stationIndex,
	            'value': stationIndex
	        }, '\n                        ', station, '\n                    ');
	    }
	    function onChange5(e) {
	        this.toggleDropOff(e);
	    }
	    function repeatStation6(station, stationIndex) {
	        return React.createElement('option', {
	            'key': 'station-' + stationIndex,
	            'value': stationIndex
	        }, '\n                        ', station, '\n                    ');
	    }
	    return function () {
	        return React.createElement(FormFrame, {
	            'title': this.props.title,
	            'onSubmit': this.onSubmit,
	            'onClose': this.props.onClose,
	            'onRemove': this.props.onBookingCancel,
	            'disabled': !this.isFormValid()
	        }, React.createElement('div', { 'className': 'booking-form small-11 small-centered' }, React.createElement('div', { 'className': 'row' }, this.props.seasonTickets ? React.createElement('div', {
	            'className': 'small-6 columns',
	            'key': '452'
	        }, React.createElement('label', {}, 'כמות מנויים\n                    ', React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.paidSeats,
	                'onChange': this.onNumericChange,
	                'name': 'paidSeats'
	            },
	            _.map(_.times(this.props.seasonTickets + 1), repeatSeat1.bind(this))
	        ]))) : null, React.createElement('div', { 'className': 'small-6 columns end' }, React.createElement('label', {}, 'נוסעים בתשלום\n                    ', React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.extraSeats,
	                'onChange': this.onNumericChange,
	                'name': 'extraSeats'
	            },
	            _.map(_.times(constants.MAX_EXTRA_PASSENGERS), repeatExtraSeat2.bind(this))
	        ])))), React.createElement('div', { 'className': 'row' }, React.createElement('div', { 'className': 'small-3 large-2 columns' }, React.createElement('label', { 'htmlFor': 'pickUpToggle' }, 'הלוך'), React.createElement('div', { 'className': 'switch' }, React.createElement('input', {
	            'className': 'switch-input',
	            'id': 'pickUpToggle',
	            'type': 'checkbox',
	            'onChange': onChange3.bind(this),
	            'checked': this.state.pickUpEnabled
	        }), React.createElement('label', {
	            'className': 'switch-paddle',
	            'htmlFor': 'pickUpToggle'
	        }))), React.createElement('div', { 'className': 'small-9 large-10 columns end more-space' }, React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.pickUp,
	                'onChange': this.onChange,
	                'name': 'pickUp',
	                'disabled': !this.state.pickUpEnabled
	            },
	            React.createElement('option', {
	                'value': true,
	                'style': { display: 'none' }
	            }, 'בחר'),
	            _.map(constants.STATIONS, repeatStation4.bind(this))
	        ]))), React.createElement('div', { 'className': 'row' }, React.createElement('div', { 'className': 'small-3 large-2 columns' }, React.createElement('label', { 'htmlFor': 'dropOffToggle' }, 'חזור'), React.createElement('div', { 'className': 'switch' }, React.createElement('input', {
	            'className': 'switch-input',
	            'id': 'dropOffToggle',
	            'type': 'checkbox',
	            'onChange': onChange5.bind(this),
	            'checked': this.state.dropOffEnabled
	        }), React.createElement('label', {
	            'className': 'switch-paddle',
	            'htmlFor': 'dropOffToggle'
	        }))), React.createElement('div', { 'className': 'small-9 large-10 columns end more-space' }, React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.dropOff,
	                'onChange': this.onChange,
	                'name': 'dropOff',
	                'disabled': !this.state.dropOffEnabled
	            },
	            React.createElement('option', {
	                'value': true,
	                'style': { display: 'none' }
	            }, 'בחר'),
	            _.map(constants.STATIONS, repeatStation6.bind(this))
	        ])))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	
	__webpack_require__(47);
	
	var formFrameTranslations = __webpack_require__(49);
	
	function createHeader(title, onClose) {
	
	    function createBackButton() {
	        return React.createElement(
	            'button',
	            { className: 'back-btn', key: 'back-btn', onClick: onClose },
	            React.createElement('i', { className: 'fa fa-arrow-left', 'aria-hidden': 'true' })
	        );
	    }
	
	    return React.createElement(
	        'div',
	        { className: 'header' },
	        React.createElement(
	            'label',
	            { className: 'header-title' },
	            title
	        ),
	        _.isFunction(onClose) ? createBackButton() : null
	    );
	}
	
	function createActionsButtons(disabled, onSubmit, onRemove) {
	
	    function createRemoveButton() {
	        return React.createElement(
	            'a',
	            { key: 'remove-btn', onClick: onRemove, className: 'button alert more-space' },
	            React.createElement(
	                'span',
	                null,
	                formFrameTranslations.REMOVE
	            ),
	            React.createElement('i', { className: 'fa fa-trash', 'aria-hidden': 'true' })
	        );
	    }
	
	    return React.createElement(
	        'div',
	        { className: 'action-buttons button-group stacked small-centered large-6 small-8 ' },
	        React.createElement(
	            'a',
	            { disabled: disabled, onClick: onSubmit, className: 'button success more-space' },
	            React.createElement(
	                'span',
	                null,
	                formFrameTranslations.SUBMIT
	            ),
	            React.createElement('i', { className: 'fa fa-check', 'aria-hidden': 'true' })
	        ),
	        _.isFunction(onRemove) ? createRemoveButton() : null
	    );
	}
	
	var FormFrame = function (_React$Component) {
	    _inherits(FormFrame, _React$Component);
	
	    function FormFrame() {
	        _classCallCheck(this, FormFrame);
	
	        return _possibleConstructorReturn(this, (FormFrame.__proto__ || Object.getPrototypeOf(FormFrame)).apply(this, arguments));
	    }
	
	    _createClass(FormFrame, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'form-frame' },
	                createHeader(this.props.title, this.props.onClose),
	                React.createElement(
	                    'div',
	                    { className: 'content' },
	                    this.props.children
	                ),
	                createActionsButtons(this.props.disabled, this.props.onSubmit, this.props.onRemove)
	            );
	        }
	    }]);
	
	    return FormFrame;
	}(React.Component);
	
	FormFrame.propTypes = {
	    title: React.PropTypes.string.isRequired,
	    disabled: React.PropTypes.bool,
	    onSubmit: React.PropTypes.func.isRequired,
	    onRemove: React.PropTypes.func,
	    onClose: React.PropTypes.func
	};
	
	module.exports = FormFrame;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "formFrame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./formFrame.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./formFrame.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".form-frame .content {\n  margin-top: 20px; }\n\n.form-frame .action-buttons {\n  margin-top: 10px; }\n  .form-frame .action-buttons .button i {\n    margin-right: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  SUBMIT: 'שמור',
	  REMOVE: 'מחק'
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "formFrameTranslations.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	
	var FormFrame = __webpack_require__(46);
	
	var userInfoConstants = __webpack_require__(51);
	var userFormTranslations = __webpack_require__(52);
	var userActions = __webpack_require__(14);
	
	var emptyUser = {
	    firstName: '',
	    lastName: '',
	    phonePrefix: '050',
	    phoneNumber: '',
	    station: 'tlv',
	    subscribeSMS: true,
	    subscribeMail: true,
	    seasonTickets: 0
	};
	
	function getEmptyUserInfo(email) {
	    return _.assign(emptyUser, { email: email });
	}
	
	function mapStateToProps(state, ownProps) {
	    var user = state.users[ownProps.uid];
	    var authData = state.authData;
	
	    return {
	        userInfo: user || getEmptyUserInfo(authData.email),
	        isAdminMode: authData.isAdmin,
	        allowUserRemove: authData.isAdmin && authData.uid !== ownProps.uid
	    };
	}
	
	function mapDispatchToProps(dispatch, ownProps) {
	    return {
	        updateUser: function updateUser(user) {
	            return dispatch(userActions.updateUser(ownProps.uid, user));
	        },
	        removeUser: function removeUser() {
	            return dispatch(userActions.removeUser(ownProps.uid));
	        }
	    };
	}
	
	function createAdminSection(seasonTickets, onNumberChange) {
	    return React.createElement(
	        'div',
	        { className: 'row', key: 'seasonTickets' },
	        React.createElement(
	            'div',
	            { className: 'small-12 columns' },
	            React.createElement(
	                'label',
	                null,
	                '\u05DB\u05DE\u05D5\u05EA \u05DE\u05E0\u05D5\u05D9\u05D9\u05DD',
	                React.createElement(
	                    'select',
	                    { name: 'seasonTickets', value: seasonTickets, onChange: onNumberChange },
	                    _.times(userInfoConstants.MAX_SEASON_TICKETS, function (i) {
	                        return React.createElement(
	                            'option',
	                            { key: 'amount-' + i, value: i },
	                            i
	                        );
	                    })
	                )
	            )
	        )
	    );
	}
	
	function createUserNameInputs(firstName, lastName, onTextChange) {
	    return React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	            'div',
	            { className: 'large-6 columns' },
	            React.createElement(
	                'label',
	                null,
	                userFormTranslations.FIRST_NAME,
	                React.createElement('input', { type: 'text', name: 'firstName', value: firstName, onChange: onTextChange, maxLength: '20' })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'large-6 columns' },
	            React.createElement(
	                'label',
	                null,
	                userFormTranslations.LAST_NAME,
	                React.createElement('input', { type: 'text', name: 'lastName', value: lastName, onChange: onTextChange, maxLength: '20' })
	            )
	        )
	    );
	}
	
	function createEmailInput(email, onTextChange) {
	    return React.createElement(
	        'div',
	        { className: 'row', key: 'user-info-email-input' },
	        React.createElement(
	            'div',
	            { className: 'large-12 columns' },
	            React.createElement(
	                'label',
	                null,
	                userFormTranslations.EMAIL,
	                React.createElement('input', { type: 'email', name: 'email', value: email, onChange: onTextChange })
	            )
	        )
	    );
	}
	
	function createPhoneNumberInputs(phonePrefix, phoneNumber, onTextChange) {
	    return React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	            'div',
	            { className: 'small-8 columns' },
	            React.createElement(
	                'label',
	                null,
	                userFormTranslations.PHONE_NUMBER,
	                React.createElement('input', { type: 'tel', name: 'phoneNumber', value: phoneNumber, onChange: onTextChange, maxLength: '7' })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-4 columns end' },
	            React.createElement(
	                'label',
	                null,
	                userFormTranslations.PHONE_PREFIX,
	                React.createElement(
	                    'select',
	                    { name: 'phonePrefix', value: phonePrefix, onChange: onTextChange },
	                    _.map(userInfoConstants.PHONE_PREFIXES, function (prefix) {
	                        return React.createElement(
	                            'option',
	                            { key: 'phone-prefix-' + prefix, value: prefix },
	                            prefix
	                        );
	                    })
	                )
	            )
	        )
	    );
	}
	
	function createPickupStationRow(station, requestForMembership, onTextChange, onBooleanChange) {
	
	    function createPickUpStationInput() {
	        return React.createElement(
	            'div',
	            { className: 'medium-8 small-12 columns' },
	            React.createElement(
	                'label',
	                null,
	                userFormTranslations.FAVORITE_PICKUP_STATION,
	                React.createElement(
	                    'select',
	                    { name: 'station', value: station, onChange: onTextChange },
	                    _.map(userInfoConstants.STATIONS, function (station) {
	                        return React.createElement(
	                            'option',
	                            { key: 'station-' + station, value: station },
	                            userFormTranslations.STATIONS[station]
	                        );
	                    })
	                )
	            )
	        );
	    }
	
	    function createRequestForMembershipInput() {
	        return React.createElement(
	            'div',
	            { className: 'medium-4 small-12 columns' },
	            React.createElement(
	                'label',
	                null,
	                userFormTranslations.REQUEST_FOR_MEMBERSHIP,
	                React.createElement(
	                    'select',
	                    { name: 'requestForMembership', value: requestForMembership, onChange: onBooleanChange },
	                    React.createElement(
	                        'option',
	                        { value: undefined, style: { display: 'none' } },
	                        '\u05D1\u05D7\u05E8'
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: true },
	                        '\u05DB\u05DF'
	                    ),
	                    React.createElement(
	                        'option',
	                        { value: false },
	                        '\u05DC\u05D0'
	                    )
	                )
	            )
	        );
	    }
	
	    return React.createElement(
	        'div',
	        { className: 'row' },
	        createPickUpStationInput(),
	        createRequestForMembershipInput()
	    );
	}
	
	function createDistributionInputs(subscribeMail, subscribeSMS, onBooleanChange) {
	    return React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	            'div',
	            { className: 'small-3 column' },
	            React.createElement(
	                'label',
	                null,
	                userFormTranslations.DISTRIBUTION.EMAIL
	            ),
	            React.createElement(
	                'div',
	                { className: 'switch' },
	                React.createElement('input', { type: 'checkbox', className: 'switch-input', name: 'subscribeMail', id: 'subscribeMail', onChange: onBooleanChange, checked: subscribeMail }),
	                React.createElement(
	                    'label',
	                    { className: 'switch-paddle', htmlFor: 'subscribeMail' },
	                    React.createElement(
	                        'span',
	                        { className: 'switch-active', 'aria-hidden': 'true' },
	                        userFormTranslations.TOGGLE.YES
	                    ),
	                    React.createElement(
	                        'span',
	                        { className: 'switch-inactive', 'aria-hidden': 'true' },
	                        userFormTranslations.TOGGLE.NO
	                    )
	                )
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-3 column end' },
	            React.createElement(
	                'label',
	                null,
	                userFormTranslations.DISTRIBUTION.SMS
	            ),
	            React.createElement(
	                'div',
	                { className: 'switch' },
	                React.createElement('input', { type: 'checkbox', className: 'switch-input', name: 'subscribeSMS', id: 'subscribeSMS', onChange: onBooleanChange, checked: subscribeSMS }),
	                React.createElement(
	                    'label',
	                    { className: 'switch-paddle', htmlFor: 'subscribeSMS' },
	                    React.createElement(
	                        'span',
	                        { className: 'switch-active', 'aria-hidden': 'true' },
	                        userFormTranslations.TOGGLE.YES
	                    ),
	                    React.createElement(
	                        'span',
	                        { className: 'switch-inactive', 'aria-hidden': 'true' },
	                        userFormTranslations.TOGGLE.NO
	                    )
	                )
	            )
	        )
	    );
	}
	
	var UserForm = function (_React$Component) {
	    _inherits(UserForm, _React$Component);
	
	    function UserForm(props) {
	        _classCallCheck(this, UserForm);
	
	        var _this = _possibleConstructorReturn(this, (UserForm.__proto__ || Object.getPrototypeOf(UserForm)).call(this, props));
	
	        _this.isFormValid = function () {
	            var hasAllRequiredInfo = function hasAllRequiredInfo() {
	                var requiredInfo = _.pick(_this.state, ['firstName', 'lastName', 'phonePrefix', 'phoneNumber']);
	                return !_.some(requiredInfo, _.isEmpty);
	            };
	
	            var hasValidPhoneNumber = function hasValidPhoneNumber() {
	                return _this.state.phoneNumber.length === 7;
	            };
	
	            var hasRequestForMembershipProperty = function hasRequestForMembershipProperty() {
	                return _.has(_this.state, 'requestForMembership');
	            };
	
	            return hasAllRequiredInfo() && hasValidPhoneNumber() && hasRequestForMembershipProperty();
	        };
	
	        _this.onKeyPress = function (e) {
	            if (e.key === 'Enter' && isFormValid(_this.state)) {
	                _this.props.updateUser(_this.state);
	            }
	        };
	
	        _this.onChange = function (type, e) {
	            var value = e.target.value;
	            if (type === 'boolean') {
	                if (e.target.type === 'checkbox') {
	                    value = e.target.checked;
	                } else if (e.target.type === 'select-one') {
	                    value = value !== 'false';
	                } else {
	                    value = Boolean(value);
	                }
	            } else if (type === 'number') {
	                value = parseInt(value);
	            }
	
	            _this.setState(_defineProperty({}, e.target.name, value));
	        };
	
	        _this.onSubmit = function () {
	            _this.props.updateUser(_this.state);
	            if (_.isFunction(_this.props.onClose)) {
	                _this.props.onClose();
	            }
	        };
	
	        _this.onRemove = function () {
	            _this.props.removeUser();
	            if (_.isFunction(_this.props.onClose)) {
	                _this.props.onClose();
	            }
	        };
	
	        _this.state = _.clone(_this.props.userInfo);
	        return _this;
	    }
	
	    _createClass(UserForm, [{
	        key: 'render',
	        value: function render() {
	            var onTextChange = this.onChange.bind(this, 'text');
	            var onNumberChange = this.onChange.bind(this, 'number');
	            var onBooleanChange = this.onChange.bind(this, 'boolean');
	
	            return React.createElement(
	                FormFrame,
	                { title: userFormTranslations.TITLE,
	                    onSubmit: this.onSubmit,
	                    onRemove: this.props.allowUserRemove ? this.onRemove : null,
	                    onClose: this.props.onClose,
	                    disabled: !this.isFormValid() },
	                React.createElement(
	                    'div',
	                    { className: 'small-centered user-container', onKeyPress: this.onKeyPress },
	                    createUserNameInputs(this.state.firstName, this.state.lastName, onTextChange),
	                    this.props.userInfo.email ? null : createEmailInput(this.state.email, onTextChange),
	                    createPhoneNumberInputs(this.state.phonePrefix, this.state.phoneNumber, onTextChange, onNumberChange),
	                    createPickupStationRow(this.state.station, this.state.requestForMembership, onTextChange, onBooleanChange),
	                    this.props.isAdminMode ? createAdminSection(this.state.seasonTickets, onNumberChange) : null,
	                    createDistributionInputs(this.state.subscribeMail, this.state.subscribeSMS, onBooleanChange)
	                )
	            );
	        }
	    }]);
	
	    return UserForm;
	}(React.Component);
	
	UserForm.PropTypes = {
	    uid: React.PropTypes.string.isRequired,
	    updateUser: React.PropTypes.func.isRequired,
	    removeUser: React.PropTypes.func.isRequired,
	    isAdminMode: React.PropTypes.bool,
	    allowUserRemove: React.PropTypes.bool,
	    userInfo: React.PropTypes.shape({}),
	    onClose: React.PropTypes.func
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(UserForm);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "userForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  MAX_SEASON_TICKETS: 7,
	  PHONE_PREFIXES: ['050', '052', '053', '054', '055', '057', '058'],
	  STATIONS: ['modiin', 'tlv']
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "userInfoConstants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  TITLE: 'פרטים אישיים',
	  FIRST_NAME: 'שם',
	  LAST_NAME: 'שם משפחה',
	  EMAIL: 'דואר אלקטרוני',
	  PHONE_PREFIX: 'קידומת',
	  PHONE_NUMBER: 'טלפון נייד',
	  FAVORITE_PICKUP_STATION: 'תחנת עליה מועדפת',
	  REQUEST_FOR_MEMBERSHIP: 'מעוניין במנוי?',
	  STATIONS: {
	    modiin: 'מודיעין',
	    tlv: 'תל אביב'
	  },
	  DISTRIBUTION: {
	    EMAIL: 'תפוצת אימייל',
	    SMS: 'תפוצת SMS'
	  },
	  TOGGLE: {
	    YES: 'כן',
	    NO: 'לא'
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "userFormTranslations.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./homePage.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./homePage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".home-page .events {\n  margin-top: 10px; }\n  @media screen and (max-width: 39.9375em) {\n    .home-page .events {\n      margin-top: 0px; } }\n\n.home-page .open-events {\n  margin-bottom: 25px; }\n\n.home-page .events-list h6 {\n  font-weight: bold; }\n\n.home-page .no-bookings {\n  font-size: 1.2em;\n  text-align: center;\n  color: #424242; }\n  .home-page .no-bookings i {\n    margin-right: 10px; }\n\n.home-page .event-item {\n  padding: 5px 0; }\n  @media screen and (max-width: 39.9375em) {\n    .home-page .event-item {\n      padding: 15px 0 30px 0; } }\n  .home-page .event-item:nth-child(even) {\n    background: #EEEEEE; }\n  .home-page .event-item:nth-child(odd) {\n    background: #E0E0E0; }\n", ""]);
	
	// exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _usersPage = __webpack_require__(56);
	
	var _usersPage2 = _interopRequireDefault(_usersPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _userActions = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var pickUsersFunctions = {
	  ALL: function ALL() {
	    return true;
	  },
	  MEMBERS: function MEMBERS(user) {
	    return user.seasonTickets > 0;
	  },
	  NON_MEMBERS: function NON_MEMBERS(user) {
	    return !user.seasonTickets;
	  },
	  REQUESTS: function REQUESTS(user) {
	    return user.requestForMembership;
	  }
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    users: state.users,
	    authData: state.authData
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    updateUser: function updateUser(uid, user) {
	      return dispatch((0, _userActions.updateUser)(uid, user));
	    },
	    removeUser: function removeUser(uid) {
	      return dispatch((0, _userActions.removeUser)(uid));
	    }
	  };
	};
	
	var UsersPage = function (_React$Component) {
	  _inherits(UsersPage, _React$Component);
	
	  function UsersPage(props) {
	    _classCallCheck(this, UsersPage);
	
	    var _this = _possibleConstructorReturn(this, (UsersPage.__proto__ || Object.getPrototypeOf(UsersPage)).call(this, props));
	
	    _this.state = {
	      editingUserId: null,
	      searchQuery: '',
	      filter: 'ALL'
	    };
	    return _this;
	  }
	
	  _createClass(UsersPage, [{
	    key: 'getVisibleUsers',
	    value: function getVisibleUsers() {
	      var _this2 = this;
	
	      return _.chain(this.props.users).pickBy(pickUsersFunctions[this.state.filter]).pickBy(function (user) {
	        return _.startsWith(user.firstName, _this2.state.searchQuery) || _.startsWith(user.lastName, _this2.state.searchQuery);
	      }, this).map(function (user, uid) {
	        return { user: user, uid: uid };
	      }).sortBy('user.firstName').value();
	    }
	  }, {
	    key: 'countSeasonTickets',
	    value: function countSeasonTickets() {
	      return _.chain(this.props.users).pickBy(pickUsersFunctions.MEMBERS).values().sumBy('seasonTickets').value();
	    }
	  }, {
	    key: 'countNonMembersUsers',
	    value: function countNonMembersUsers() {
	      return _.chain(this.props.users).pickBy(pickUsersFunctions.NON_MEMBERS).size().value();
	    }
	  }, {
	    key: 'countRequestsForMembership',
	    value: function countRequestsForMembership() {
	      return _.chain(this.props.users).pickBy(pickUsersFunctions.REQUESTS).size().value();
	    }
	  }, {
	    key: 'handleSearchQueryChange',
	    value: function handleSearchQueryChange(e) {
	      this.setState({ searchQuery: e.target.value });
	    }
	  }, {
	    key: 'handleFilterChange',
	    value: function handleFilterChange(filter) {
	      this.setState({ filter: filter });
	    }
	  }, {
	    key: 'onUserClick',
	    value: function onUserClick(uid) {
	      this.setState({ editingUserId: uid });
	    }
	  }, {
	    key: 'stopEditing',
	    value: function stopEditing() {
	      this.setState({ editingUserId: null, searchQuery: '' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _usersPage2.default.apply(this);
	    }
	  }, {
	    key: 'getUserTitle',
	    value: function getUserTitle(user) {
	      return user.firstName + ' ' + user.lastName;
	    }
	  }, {
	    key: 'getUserSubtitles',
	    value: function getUserSubtitles(user) {
	      return [user.phonePrefix + '-' + user.phoneNumber, user.email, 'כמות מנויים: ' + (user.seasonTickets || 0)];
	    }
	  }, {
	    key: 'getUserImage',
	    value: function getUserImage(user) {
	      return user.photoURL || 'http://image.flaticon.com/icons/svg/163/163804.svg';
	    }
	  }]);
	
	  return UsersPage;
	}(_react2.default.Component);
	
	UsersPage.propTypes = {
	  users: _react2.default.PropTypes.object.isRequired
	};
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UsersPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "usersPage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(57),
	    __webpack_require__(50),
	    __webpack_require__(60)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, listItem, UserForm, usersPageCss) {
	    'use strict';
	    function onClick1(visibleUsers) {
	        this.handleFilterChange('ALL');
	    }
	    function onClick2(visibleUsers) {
	        this.handleFilterChange('MEMBERS');
	    }
	    function onClick3(visibleUsers) {
	        this.handleFilterChange('REQUESTS');
	    }
	    function onClick4(visibleUsers) {
	        this.handleFilterChange('NON_MEMBERS');
	    }
	    function onChange5(visibleUsers, e) {
	        this.handleSearchQueryChange(e);
	    }
	    function onClick6(visibleUsers, userItem, userItemIndex) {
	        this.onUserClick(userItem.uid);
	    }
	    function repeatUserItem7(visibleUsers, userItem, userItemIndex) {
	        return React.createElement(listItem, {
	            'title': this.getUserTitle(userItem.user),
	            'key': 'user-' + userItem.uid,
	            'subtitles': this.getUserSubtitles(userItem.user),
	            'imageSrc': this.getUserImage(userItem.user),
	            'onClick': onClick6.bind(this, visibleUsers, userItem, userItemIndex)
	        });
	    }
	    function scopeVisibleUsers8() {
	        var visibleUsers = this.getVisibleUsers();
	        return React.createElement.apply(this, [
	            'div',
	            { 'key': 'list-view' },
	            React.createElement('div', { 'className': 'header' }, React.createElement('label', { 'className': 'header-title' }, 'משתמשים')),
	            React.createElement('div', { 'className': 'filtering row expanded collapse' }, React.createElement('div', { 'className': 'column small-12 large-8' }, React.createElement('ul', { 'className': 'menu small-text' }, React.createElement('li', {
	                'className': _({ active: this.state.filter === 'ALL' }).transform(function (res, value, key) {
	                    if (value) {
	                        res.push(key);
	                    }
	                }, []).join(' ')
	            }, React.createElement('a', { 'onClick': onClick1.bind(this, visibleUsers) }, React.createElement('span', {}, 'כולם '), React.createElement('span', {}, '(', _.size(this.props.users), ')'))), React.createElement('li', {
	                'className': _({ active: this.state.filter === 'MEMBERS' }).transform(function (res, value, key) {
	                    if (value) {
	                        res.push(key);
	                    }
	                }, []).join(' ')
	            }, React.createElement('a', { 'onClick': onClick2.bind(this, visibleUsers) }, React.createElement('span', {}, 'מנויים '), React.createElement('span', {}, '(', this.countSeasonTickets(), ')'))), React.createElement('li', {
	                'className': _({ active: this.state.filter === 'REQUESTS' }).transform(function (res, value, key) {
	                    if (value) {
	                        res.push(key);
	                    }
	                }, []).join(' ')
	            }, React.createElement('a', { 'onClick': onClick3.bind(this, visibleUsers) }, React.createElement('span', {}, 'בקשה למנוי '), React.createElement('span', {}, '(', this.countRequestsForMembership(), ')'))), React.createElement('li', {
	                'className': _({ active: this.state.filter === 'NON_MEMBERS' }).transform(function (res, value, key) {
	                    if (value) {
	                        res.push(key);
	                    }
	                }, []).join(' ')
	            }, React.createElement('a', { 'onClick': onClick4.bind(this, visibleUsers) }, React.createElement('span', {}, 'לא מנויים '), React.createElement('span', {}, '(', this.countNonMembersUsers(), ')'))))), React.createElement('div', { 'className': 'column small-12 large-4' }, React.createElement('div', { 'className': 'search' }, React.createElement('input', {
	                'className': 'search-input',
	                'type': 'search',
	                'placeholder': 'חיפוש',
	                'onChange': onChange5.bind(this, visibleUsers),
	                'value': this.state.searchQuery
	            }), React.createElement('span', { 'className': 'search-icon' }, React.createElement('i', { 'className': 'fa fa-search' }))))),
	            _.map(visibleUsers, repeatUserItem7.bind(this, visibleUsers)),
	            visibleUsers.length === 0 ? React.createElement('label', {
	                'className': 'filter-status',
	                'key': '2791'
	            }, React.createElement('i', {
	                'className': 'fa fa-frown-o',
	                'aria-hidden': 'true'
	            }), React.createElement('span', {}, 'מצטערים, לא נמצאו רשומות מתאימות...')) : null
	        ]);
	    }
	    function onClose9() {
	        this.stopEditing();
	    }
	    return function () {
	        return React.createElement('div', { 'className': 'small-centered dashboard-page users-page' }, !this.state.editingUserId ? scopeVisibleUsers8.apply(this, []) : null, this.state.editingUserId ? React.createElement('div', {
	            'key': 'edit-user',
	            'className': 'small-centered'
	        }, React.createElement(UserForm, {
	            'uid': this.state.editingUserId,
	            'onClose': onClose9.bind(this)
	        })) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	
	__webpack_require__(58);
	
	var ListItem = function (_React$Component) {
	    _inherits(ListItem, _React$Component);
	
	    function ListItem() {
	        _classCallCheck(this, ListItem);
	
	        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
	    }
	
	    _createClass(ListItem, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'list-item small-12', onClick: this.props.onClick },
	                React.createElement('img', { className: 'list-image', src: this.props.imageSrc }),
	                React.createElement(
	                    'div',
	                    { className: 'list-titles' },
	                    React.createElement(
	                        'label',
	                        { className: 'title large-text hide-for-print' },
	                        this.props.title
	                    ),
	                    _.map(this.props.subtitles, function (subtitle, key) {
	                        return React.createElement(
	                            'label',
	                            { key: 'subtitle-' + key, className: 'subtitle small-12 show-for-small-only' },
	                            subtitle
	                        );
	                    }),
	                    _.map(this.props.subtitles, function (subtitle, key) {
	                        return React.createElement(
	                            'label',
	                            { key: 'subtitle-large-' + key, className: 'subtitle inline hide-for-small-only' },
	                            subtitle
	                        );
	                    })
	                )
	            );
	        }
	    }]);
	
	    return ListItem;
	}(React.Component);
	
	ListItem.propTypes = {
	    title: React.PropTypes.string,
	    subtitles: React.PropTypes.array,
	    imageSrc: React.PropTypes.string,
	    onClick: React.PropTypes.func
	};
	
	module.exports = ListItem;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "listItem.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./listItem.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./listItem.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".list-item {\n  display: flex;\n  align-items: flex-start;\n  padding: 5px 10px 5px 10px; }\n  .list-item:first-child {\n    padding-top: 0; }\n  .list-item .list-image {\n    width: 40px;\n    height: 40px;\n    margin-top: 5px;\n    margin-left: 10px;\n    border-radius: 50%;\n    background: #ffffff;\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1); }\n  .list-item .list-titles {\n    flex: 1;\n    overflow: hidden; }\n    .list-item .list-titles .title.large-text {\n      font-size: 1.2em;\n      font-weight: bold; }\n    .list-item .list-titles .subtitle {\n      font-size: 0.80rem; }\n      .list-item .list-titles .subtitle.inline, .list-item .list-titles .subtitle.inline.show-for-print {\n        display: inline-block;\n        margin-left: 15px; }\n", ""]);
	
	// exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./usersPage.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./usersPage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _pickEvents;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _eventsPage = __webpack_require__(63);
	
	var _eventsPage2 = _interopRequireDefault(_eventsPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _eventActions = __webpack_require__(17);
	
	var _constants = __webpack_require__(11);
	
	var Constants = _interopRequireWildcard(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var pickEvents = (_pickEvents = {
	  ALL: function ALL() {
	    return true;
	  }
	}, _defineProperty(_pickEvents, 'OPEN', function OPEN(event) {
	  return event.status === Constants.EVENTS_STATUS.OPEN_FOR_ALL.value || event.status === Constants.EVENTS_STATUS.OPEN_FOR_MEMBERS.value;
	}), _defineProperty(_pickEvents, 'CLOSED', function CLOSED(event) {
	  return event.status === Constants.EVENTS_STATUS.CLOSED.value;
	}), _pickEvents);
	
	var getStatusSubtitle = function getStatusSubtitle(event) {
	  var eventStatus = _.find(Constants.EVENTS_STATUS, { value: event.status });
	  return eventStatus ? eventStatus.name : '';
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    events: state.events,
	    authData: state.authData
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    createEvent: function createEvent(event) {
	      return dispatch((0, _eventActions.createEvent)(event));
	    },
	    updateEvent: function updateEvent(eventId, event) {
	      return dispatch((0, _eventActions.updateEvent)(eventId, event));
	    },
	    removeEvent: function removeEvent(eventId) {
	      return dispatch((0, _eventActions.removeEvent)(eventId));
	    }
	  };
	};
	
	var EventsPage = function (_React$Component) {
	  _inherits(EventsPage, _React$Component);
	
	  function EventsPage(props) {
	    _classCallCheck(this, EventsPage);
	
	    var _this = _possibleConstructorReturn(this, (EventsPage.__proto__ || Object.getPrototypeOf(EventsPage)).call(this, props));
	
	    _this.state = {
	      editingEventId: null,
	      createMode: false,
	      filter: 'OPEN'
	    };
	    return _this;
	  }
	
	  _createClass(EventsPage, [{
	    key: 'getVisibleEvents',
	    value: function getVisibleEvents() {
	      return _.chain(this.props.events).pickBy(pickEvents[this.state.filter]).map(function (event, eventId) {
	        return { eventId: eventId, event: event };
	      }).value();
	    }
	  }, {
	    key: 'getOpenEvents',
	    value: function getOpenEvents() {
	      return _.pickBy(this.props.events, pickEvents['OPEN']);
	    }
	  }, {
	    key: 'getClosedEvents',
	    value: function getClosedEvents() {
	      return _.pickBy(this.props.events, pickEvents['CLOSED']);
	    }
	  }, {
	    key: 'handleFilterChange',
	    value: function handleFilterChange(filter) {
	      this.setState({ filter: filter });
	    }
	  }, {
	    key: 'getEventTitle',
	    value: function getEventTitle(event) {
	      return Constants.EVENTS_TYPES[event.typeId].name;
	    }
	  }, {
	    key: 'getEventSubtitles',
	    value: function getEventSubtitles(event) {
	      return ['תאריך: ' + (event.day + '/' + event.month + '/' + event.year), // eslint-disable-line no-useless-concat
	      'שעה: ' + (event.hour + ':' + event.minute), // eslint-disable-line no-useless-concat
	      getStatusSubtitle(event)];
	    }
	  }, {
	    key: 'getEventImage',
	    value: function getEventImage(event) {
	      var eventType = Constants.EVENTS_TYPES[event.typeId];
	      return eventType.src || 'http://image.flaticon.com/icons/svg/138/138776.svg';
	    }
	  }, {
	    key: 'onEventClick',
	    value: function onEventClick(eventId) {
	      this.setState({ editingEventId: eventId });
	    }
	  }, {
	    key: 'onCreateEventClick',
	    value: function onCreateEventClick() {
	      this.setState({ createMode: true });
	    }
	  }, {
	    key: 'stopEditing',
	    value: function stopEditing() {
	      this.setState({ editingEventId: null, createMode: false });
	    }
	  }, {
	    key: 'updateEvent',
	    value: function updateEvent(event) {
	      if (this.state.createMode) {
	        this.props.createEvent(event);
	      } else {
	        this.props.updateEvent(this.state.editingEventId, event);
	      }
	      this.stopEditing();
	    }
	  }, {
	    key: 'removeEvent',
	    value: function removeEvent() {
	      this.props.removeEvent(this.state.editingEventId);
	      this.stopEditing();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _eventsPage2.default.apply(this);
	    }
	  }]);
	
	  return EventsPage;
	}(_react2.default.Component);
	
	EventsPage.propTypes = {
	  authData: _react2.default.PropTypes.object.isRequired,
	  events: _react2.default.PropTypes.object.isRequired,
	  createEvent: _react2.default.PropTypes.func.isRequired,
	  updateEvent: _react2.default.PropTypes.func.isRequired,
	  removeEvent: _react2.default.PropTypes.func.isRequired
	};
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EventsPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "eventsPage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(57),
	    __webpack_require__(64),
	    __webpack_require__(11),
	    __webpack_require__(68)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, listItem, EventForm, Constants, eventsPageCss) {
	    'use strict';
	    function onClick1(listViewMode, visibleEvents) {
	        this.handleFilterChange('ALL');
	    }
	    function onClick2(listViewMode, visibleEvents) {
	        this.handleFilterChange('OPEN');
	    }
	    function onClick3(listViewMode, visibleEvents) {
	        this.handleFilterChange('CLOSED');
	    }
	    function onClick4(listViewMode, visibleEvents) {
	        this.onCreateEventClick();
	    }
	    function onClick5(listViewMode, visibleEvents) {
	        this.onCreateEventClick();
	    }
	    function onClick6(listViewMode, visibleEvents, eventItem, eventItemIndex) {
	        this.onEventClick(eventItem.eventId);
	    }
	    function repeatEventItem7(listViewMode, visibleEvents, eventItem, eventItemIndex) {
	        return React.createElement(listItem, {
	            'title': this.getEventTitle(eventItem.event),
	            'key': 'event-' + eventItem.eventId,
	            'subtitles': this.getEventSubtitles(eventItem.event),
	            'imageSrc': this.getEventImage(eventItem.event),
	            'onClick': onClick6.bind(this, listViewMode, visibleEvents, eventItem, eventItemIndex)
	        });
	    }
	    function scopeVisibleEvents8(listViewMode) {
	        var visibleEvents = this.getVisibleEvents();
	        return React.createElement.apply(this, [
	            'div',
	            { 'key': 'events-view' },
	            React.createElement('div', { 'className': 'header' }, React.createElement('label', { 'className': 'header-title' }, 'אירועים')),
	            React.createElement('div', { 'className': 'filtering row expanded collapse' }, React.createElement('div', { 'className': 'column small-12 large-6' }, React.createElement('ul', { 'className': 'menu' }, React.createElement('li', {
	                'className': _({ active: this.state.filter === 'ALL' }).transform(function (res, value, key) {
	                    if (value) {
	                        res.push(key);
	                    }
	                }, []).join(' ')
	            }, React.createElement('a', { 'onClick': onClick1.bind(this, listViewMode, visibleEvents) }, React.createElement('span', {}, 'כולם '), React.createElement('span', {}, '(', _.size(this.props.events), ')'))), React.createElement('li', {
	                'className': _({ active: this.state.filter === 'OPEN' }).transform(function (res, value, key) {
	                    if (value) {
	                        res.push(key);
	                    }
	                }, []).join(' ')
	            }, React.createElement('a', { 'onClick': onClick2.bind(this, listViewMode, visibleEvents) }, React.createElement('span', {}, 'פתוח '), React.createElement('span', {}, '(', _.size(this.getOpenEvents()), ')'))), React.createElement('li', {
	                'className': _({ active: this.state.filter === 'CLOSED' }).transform(function (res, value, key) {
	                    if (value) {
	                        res.push(key);
	                    }
	                }, []).join(' ')
	            }, React.createElement('a', { 'onClick': onClick3.bind(this, listViewMode, visibleEvents) }, React.createElement('span', {}, 'סגור '), React.createElement('span', {}, '(', _.size(this.getClosedEvents()), ')'))))), React.createElement('button', {
	                'className': 'float-left add-btn big hide-for-small-only',
	                'onClick': onClick4.bind(this, listViewMode, visibleEvents)
	            }, '+'), React.createElement('button', {
	                'className': 'float-left add-btn small show-for-small-only',
	                'onClick': onClick5.bind(this, listViewMode, visibleEvents)
	            }, '+')),
	            _.map(visibleEvents, repeatEventItem7.bind(this, listViewMode, visibleEvents)),
	            visibleEvents.length === 0 ? React.createElement('label', {
	                'className': 'filter-status',
	                'key': '2434'
	            }, React.createElement('i', {
	                'className': 'fa fa-frown-o',
	                'aria-hidden': 'true'
	            }), React.createElement('span', {}, 'מצטערים, לא נמצאו רשומות מתאימות...')) : null
	        ]);
	    }
	    function onSubmit9(listViewMode, event) {
	        this.updateEvent(event);
	    }
	    function onRemoveEvent10(listViewMode) {
	        this.removeEvent();
	    }
	    function onClose11(listViewMode) {
	        this.stopEditing();
	    }
	    function scopeListViewMode12() {
	        var listViewMode = !this.state.editingEventId && !this.state.createMode;
	        return React.createElement('div', { 'className': 'small-centered dashboard-page events-page' }, listViewMode ? scopeVisibleEvents8.apply(this, [listViewMode]) : null, React.createElement('div', { 'className': 'small-centered' }, !listViewMode ? React.createElement(EventForm, {
	            'key': 'event-user',
	            'event': this.props.events[this.state.editingEventId],
	            'onSubmit': onSubmit9.bind(this, listViewMode),
	            'onRemoveEvent': onRemoveEvent10.bind(this, listViewMode),
	            'isAdminMode': this.props.authData.isAdmin,
	            'onClose': onClose11.bind(this, listViewMode)
	        }) : null));
	    }
	    return function () {
	        return scopeListViewMode12.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _eventForm = __webpack_require__(65);
	
	var _eventForm2 = _interopRequireDefault(_eventForm);
	
	var _constants = __webpack_require__(11);
	
	var Constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var emptyEvent = {
	  typeId: '',
	  day: '01',
	  month: '01',
	  year: '2017',
	  hour: '17',
	  minute: '00',
	  status: Constants.EVENTS_STATUS.CLOSED.value
	};
	
	var eventForm = _react2.default.createClass({
	  displayName: 'eventForm',
	
	  propTypes: {
	    onSubmit: _react2.default.PropTypes.func.isRequired,
	    onRemoveEvent: _react2.default.PropTypes.func,
	    onClose: _react2.default.PropTypes.func,
	    event: _react2.default.PropTypes.object,
	    isAdminMode: _react2.default.PropTypes.bool
	  },
	
	  getInitialState: function getInitialState() {
	    return _.defaults(this.props.event, emptyEvent, { dateInputSupported: true, timeInputSupported: true });
	  },
	  componentDidMount: function componentDidMount() {
	    this.checkIfHtml5Supported();
	  },
	  onChange: function onChange(e, validationType) {
	    var value = e.target.value;
	
	    if (validationType === 'numeric') {
	      if (!/^[0-9]*$/.test(value)) {
	        return;
	      }
	    }
	
	    if (validationType === 'hebrew') {
	      if (!/^[א-ת\s]*$/.test(value)) {
	        return;
	      }
	    }
	
	    this.setState(_defineProperty({}, e.target.name, value));
	  },
	  getEventPicture: function getEventPicture() {
	    return _.get(Constants.EVENTS_TYPES, [this.state.typeId, 'src']) || Constants.EVENT_DEFAULT_PIC;
	  },
	  getTimeValue: function getTimeValue() {
	    return _.chain(this.state).pick(['hour', 'minute']).map().value().join(':');
	  },
	  onTimeChange: function onTimeChange(e) {
	    // eslint-disable-line react/sort-comp
	    var val = e.target.value.split(':');
	    this.setState({ hour: val[0], minute: val[1] });
	  },
	  getDateValue: function getDateValue() {
	    return _.chain(this.state).pick(['year', 'month', 'day']).map().value().join('-');
	  },
	  onNumericChange: function onNumericChange(e) {
	    var value = _.toNumber(e.target.value);
	
	    this.setState(_defineProperty({}, e.target.name, value));
	  },
	  checkIfHtml5Supported: function checkIfHtml5Supported() {
	    var supportedInputTypes = ['date', 'time'];
	    var testResult = {};
	    var testString = 'test!';
	
	    _.each(supportedInputTypes, function (inputType) {
	      var input = document.createElement('input');
	      input.type = inputType;
	      input.value = testString;
	      var isSupported = input.value !== testString;
	      testResult[inputType + 'InputSupported'] = isSupported;
	    });
	
	    this.setState(testResult);
	  },
	  onDateChange: function onDateChange(e) {
	    var val = e.target.value.split('-');
	    this.setState({ year: val[0], month: val[1], day: val[2] });
	  },
	  onBooleanChange: function onBooleanChange(e) {
	    var value = Boolean(e.target.checked);
	
	    this.setState(_defineProperty({}, e.target.name, value));
	  },
	  isFormValid: function isFormValid() {
	    return !!this.state.typeId;
	  },
	  onSubmit: function onSubmit() {
	    var event = _.omit(this.state, ['timeInputSupported', 'dateInputSupported']);
	    this.props.onSubmit(event);
	  },
	
	
	  render: _eventForm2.default
	});
	
	module.exports = eventForm;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "eventForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(46),
	    __webpack_require__(11),
	    __webpack_require__(66)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, FormFrame, Constants, eventFormCss) {
	    'use strict';
	    function repeatEvent1(supportedInputs, event, eventIndex) {
	        return React.createElement('option', {
	            'key': 'event-' + eventIndex,
	            'value': eventIndex
	        }, '\n                            ', event.name, '\n                        ');
	    }
	    function repeatYear2(supportedInputs, year, yearIndex) {
	        return React.createElement('option', {
	            'key': 'yy-' + yearIndex,
	            'value': '20' + year
	        }, '\n                        ', year, '\n                    ');
	    }
	    function repeatMonth3(supportedInputs, month, monthIndex) {
	        return React.createElement('option', { 'key': 'mm-' + monthIndex }, month);
	    }
	    function repeatDay4(supportedInputs, day, dayIndex) {
	        return React.createElement('option', { 'key': 'dd-' + dayIndex }, day);
	    }
	    function repeatMinute5(supportedInputs, minute, minuteIndex) {
	        return React.createElement('option', { 'key': 'min-' + minuteIndex }, minute, '\n                    ');
	    }
	    function repeatHour6(supportedInputs, hour, hourIndex) {
	        return React.createElement('option', { 'key': 'hh-' + hourIndex }, hour);
	    }
	    function repeatEventStatus7(supportedInputs, eventStatus, eventStatusIndex) {
	        return React.createElement('option', { 'value': eventStatus.value }, eventStatus.name);
	    }
	    function scopeSupportedInputs8() {
	        var supportedInputs = this.state.dateInputSupported && this.state.timeInputSupported;
	        return React.createElement('div', { 'className': 'event-form large-11 large-centered' }, React.createElement('div', { 'className': 'row' }, React.createElement('div', { 'className': 'small-9 large-10 large-collapse columns' }, React.createElement('label', {}, 'שם האירוע\n                    ', React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.typeId,
	                'onChange': this.onChange,
	                'name': 'typeId'
	            },
	            React.createElement('option', {
	                'value': true,
	                'style': { display: 'none' }
	            }, 'בחר'),
	            _.map(Constants.EVENTS_TYPES, repeatEvent1.bind(this, supportedInputs))
	        ]))), React.createElement('div', { 'className': 'float-left' }, React.createElement('img', {
	            'className': 'event-pic',
	            'src': this.getEventPicture()
	        }))), !supportedInputs ? React.createElement('div', {
	            'className': 'row small-expanded small-centered',
	            'key': 'unsupported-dropdowns'
	        }, React.createElement('div', { 'className': 'small-4 medium-2 columns' }, React.createElement('label', {}, 'תאריך'), React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.year,
	                'onChange': this.onChange,
	                'name': 'year'
	            },
	            _.map(Constants.DATE_TIME_DATA.years, repeatYear2.bind(this, supportedInputs))
	        ])), React.createElement('div', { 'className': 'small-4 medium-2 columns more-space' }, React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.month,
	                'onChange': this.onChange,
	                'name': 'month'
	            },
	            _.map(Constants.DATE_TIME_DATA.months, repeatMonth3.bind(this, supportedInputs))
	        ])), React.createElement('div', { 'className': 'small-4 medium-2 columns more-space' }, React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.day,
	                'onChange': this.onChange,
	                'name': 'day'
	            },
	            'qq\n                    ',
	            _.map(Constants.DATE_TIME_DATA.days, repeatDay4.bind(this, supportedInputs))
	        ])), React.createElement('div', { 'className': 'small-3 columns' }, React.createElement('label', {}, 'שעה'), React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.minute,
	                'onChange': this.onChange,
	                'name': 'minute'
	            },
	            _.map(Constants.DATE_TIME_DATA.minutes, repeatMinute5.bind(this, supportedInputs))
	        ])), React.createElement('div', { 'className': 'small-3 columns more-space end' }, React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.hour,
	                'onChange': this.onChange,
	                'name': 'hour'
	            },
	            _.map(Constants.DATE_TIME_DATA.hours, repeatHour6.bind(this, supportedInputs))
	        ]))) : null, supportedInputs ? React.createElement('div', {
	            'className': 'row',
	            'key': 'supported-inputs'
	        }, React.createElement('div', { 'className': 'small-7 large-5 columns' }, React.createElement('label', {}, 'תאריך\n                    ', React.createElement('input', {
	            'type': 'date',
	            'value': this.getDateValue(),
	            'onChange': this.onDateChange,
	            'min': '2016-01-01',
	            'max': '2017-12-31',
	            'name': 'date'
	        }))), React.createElement('div', { 'className': 'small-5 large-3 columns' }, React.createElement('label', {}, 'שעה\n                    ', React.createElement('input', {
	            'type': 'time',
	            'value': this.getTimeValue(),
	            'step': 300,
	            'onChange': this.onTimeChange
	        }))), React.createElement('div', { 'className': 'large-4 medium-12 columns' }, React.createElement('label', {}, ' סטטוס\n                    ', React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.status,
	                'onChange': this.onChange,
	                'name': 'status'
	            },
	            _.map(Constants.EVENTS_STATUS, repeatEventStatus7.bind(this, supportedInputs))
	        ])))) : null);
	    }
	    return function () {
	        return React.createElement(FormFrame, {
	            'title': 'עריכת אירוע',
	            'onSubmit': this.onSubmit,
	            'onRemove': this.props.onRemoveEvent,
	            'onClose': this.props.onClose,
	            'disabled': !this.isFormValid()
	        }, scopeSupportedInputs8.apply(this, []));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./eventForm.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./eventForm.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".event-form .event-pic {\n  width: 64px;\n  height: 64px;\n  background: #FFFFFF;\n  border-radius: 50%;\n  padding: 10px;\n  margin-top: 10px;\n  margin-left: 15px; }\n", ""]);
	
	// exports


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./eventsPage.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./eventsPage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".events-page .filtering {\n  margin-bottom: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bookingsPage = __webpack_require__(71);
	
	var _bookingsPage2 = _interopRequireDefault(_bookingsPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _constants = __webpack_require__(11);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _bookingActions = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var getDropOffMap = function getDropOffMap(bookings) {
	  return _.chain(bookings).omitBy(function (booking) {
	    return !booking.dropOff;
	  }).transform(function (acc, booking, uid) {
	    acc[booking.dropOff][uid] = booking; // eslint-disable-line no-param-reassign
	  }, { tlv: {}, modiin: {} }).value();
	};
	
	var getPickUpMap = function getPickUpMap(bookings) {
	  return _.chain(bookings).omitBy(function (booking) {
	    return !booking.pickUp;
	  }).transform(function (acc, booking, uid) {
	    acc[booking.pickUp][uid] = booking; // eslint-disable-line no-param-reassign
	  }, { tlv: {}, modiin: {} }).value();
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    bookings: state.bookings,
	    events: state.events,
	    users: state.users
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    updateBooking: function updateBooking(uid, eventId, booking) {
	      return dispatch((0, _bookingActions.updateBooking)(uid, eventId, booking));
	    },
	    cancelBooking: function cancelBooking(uid, eventId) {
	      return dispatch((0, _bookingActions.cancelBooking)(uid, eventId));
	    }
	  };
	};
	
	var BookingsPage = function (_React$Component) {
	  _inherits(BookingsPage, _React$Component);
	
	  function BookingsPage(props) {
	    _classCallCheck(this, BookingsPage);
	
	    var _this = _possibleConstructorReturn(this, (BookingsPage.__proto__ || Object.getPrototypeOf(BookingsPage)).call(this, props));
	
	    _this.state = {
	      editingUserId: null,
	      eventId: _.findKey(_this.props.events, { status: 'openForMembers' }) || _.findKey(_this.props.events, { status: 'openForAll' }) || _.findKey(_this.props.events, { status: 'closed' }),
	      filter: 'PICKUP'
	    };
	    return _this;
	  }
	
	  _createClass(BookingsPage, [{
	    key: 'getVisibleBookings',
	    value: function getVisibleBookings() {
	      var _this2 = this;
	
	      var bookingForEventMap = _.chain(this.props.bookings).mapValues(function (userBookings) {
	        return userBookings[_this2.state.eventId];
	      }).omitBy(_.isUndefined).value();
	
	      return {
	        pickUp: getPickUpMap(bookingForEventMap),
	        dropOff: getDropOffMap(bookingForEventMap)
	      };
	    }
	  }, {
	    key: 'handleFilterChange',
	    value: function handleFilterChange(filter) {
	      this.setState({ filter: filter });
	    }
	  }, {
	    key: 'onEventIdChange',
	    value: function onEventIdChange(eventId) {
	      this.setState({ eventId: eventId, filter: 'PICKUP' });
	    }
	  }, {
	    key: 'onBookingClick',
	    value: function onBookingClick(uid) {
	      this.setState({ editingUserId: uid });
	    }
	  }, {
	    key: 'getEventPrintTitle',
	    value: function getEventPrintTitle() {
	      if (this.state.eventId) {
	        var currentEvt = this.props.events[this.state.eventId];
	        return Constants.EVENTS_TYPES[currentEvt.typeId].name + ' - ' + currentEvt.day + '/' + currentEvt.month + '/' + currentEvt.year;
	      }
	      return '';
	    }
	  }, {
	    key: 'getBookingTitle',
	    value: function getBookingTitle(uid) {
	      var user = this.props.users[uid];
	      return user.firstName + ' ' + user.lastName;
	    }
	  }, {
	    key: 'getBookingPhone',
	    value: function getBookingPhone(uid) {
	      var user = this.props.users[uid];
	      return user.phonePrefix + '-' + user.phoneNumber;
	    }
	  }, {
	    key: 'getBookingSubtitles',
	    value: function getBookingSubtitles(booking, uid) {
	      var subtitles = [];
	
	      if (booking.paidSeats > 0) {
	        subtitles.push('מנויים: ' + booking.paidSeats);
	      }
	      if (booking.extraSeats > 0) {
	        subtitles.push('חד פעמי: ' + booking.extraSeats);
	      }
	      if (booking.pickUp) {
	        subtitles.push('הלוך: ' + Constants.STATIONS[booking.pickUp]);
	      }
	      if (booking.dropOff) {
	        subtitles.push('חזור: ' + Constants.STATIONS[booking.dropOff]);
	      }
	
	      if (uid) {
	        subtitles.push('טל׳: ' + this.getBookingPhone(uid));
	      }
	
	      return subtitles;
	    }
	  }, {
	    key: 'getBookingImage',
	    value: function getBookingImage(uid) {
	      var user = this.props.users[uid];
	      return user.photoURL || 'http://image.flaticon.com/icons/svg/189/189991.svg';
	    }
	  }, {
	    key: 'getPickUpCount',
	    value: function getPickUpCount() {
	      var visibleBookings = this.getVisibleBookings();
	      var tlvPickUpsPaid = _.chain(visibleBookings.pickUp.tlv).values().sumBy('paidSeats').value();
	
	      var tlvPickUpsExtra = _.chain(visibleBookings.pickUp.tlv).values().sumBy('extraSeats').value();
	
	      var modiinPickUpsPaid = _.chain(visibleBookings.pickUp.modiin).values().sumBy('paidSeats').value();
	
	      var modiinPickUpsExtra = _.chain(visibleBookings.pickUp.modiin).values().sumBy('extraSeats').value();
	
	      return tlvPickUpsPaid + tlvPickUpsExtra + modiinPickUpsPaid + modiinPickUpsExtra;
	    }
	  }, {
	    key: 'getDropOffCount',
	    value: function getDropOffCount() {
	      var visibleBookings = this.getVisibleBookings();
	      var tlvDropOffsPaid = _.chain(visibleBookings.dropOff.tlv).values().sumBy('paidSeats').value();
	
	      var tlvDropOffsExtra = _.chain(visibleBookings.dropOff.tlv).values().sumBy('extraSeats').value();
	
	      var modiinDropOffsPaid = _.chain(visibleBookings.dropOff.modiin).values().sumBy('paidSeats').value();
	
	      var modiinDropOffsExtra = _.chain(visibleBookings.dropOff.modiin).values().sumBy('extraSeats').value();
	
	      return tlvDropOffsPaid + tlvDropOffsExtra + modiinDropOffsPaid + modiinDropOffsExtra;
	    }
	  }, {
	    key: 'stopEditing',
	    value: function stopEditing() {
	      this.setState({ editingUserId: null });
	    }
	  }, {
	    key: 'updateBooking',
	    value: function updateBooking(booking) {
	      this.props.updateBooking(this.state.editingUserId, this.state.eventId, booking);
	      this.stopEditing();
	    }
	  }, {
	    key: 'cancelBooking',
	    value: function cancelBooking() {
	      this.props.cancelBooking(this.state.editingUserId, this.state.eventId);
	      this.stopEditing();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _bookingsPage2.default.apply(this);
	    }
	  }]);
	
	  return BookingsPage;
	}(_react2.default.Component);
	
	BookingsPage.propTypes = {
	  bookings: _react2.default.PropTypes.object.isRequired,
	  events: _react2.default.PropTypes.object.isRequired,
	  users: _react2.default.PropTypes.object.isRequired,
	  updateBooking: _react2.default.PropTypes.func.isRequired
	};
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookingsPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "bookingsPage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(57),
	    __webpack_require__(44),
	    __webpack_require__(11),
	    __webpack_require__(72)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, listItem, BookingForm, Constants, bookingsPageCss) {
	    'use strict';
	    function onClick1(visibleBookings) {
	        this.handleFilterChange('PICKUP');
	    }
	    function onClick2(visibleBookings) {
	        this.handleFilterChange('DROPOFF');
	    }
	    function onChange3(visibleBookings, e) {
	        this.onEventIdChange(e.target.value);
	    }
	    function repeatEvent4(visibleBookings, event, eventIndex) {
	        return React.createElement('option', {
	            'key': 'event-' + eventIndex,
	            'value': eventIndex
	        }, '\n                            ', event.day, '/', event.month, '/', event.year, ' - ', Constants.EVENTS_TYPES[event.typeId].name, '\n                        ');
	    }
	    function onClick5(visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex) {
	        this.onBookingClick(bookingIndex);
	    }
	    function repeatBooking6(visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex) {
	        return React.createElement(listItem, {
	            'title': this.getBookingTitle(bookingIndex),
	            'key': 'booking-' + bookingIndex,
	            'subtitles': this.getBookingSubtitles(booking, bookingIndex),
	            'imageSrc': this.getBookingImage(bookingIndex),
	            'onClick': onClick5.bind(this, visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex)
	        });
	    }
	    function onClick7(visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex) {
	        this.onBookingClick(bookingIndex);
	    }
	    function repeatBooking8(visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex) {
	        return React.createElement(listItem, {
	            'title': this.getBookingTitle(bookingIndex),
	            'key': 'booking-' + bookingIndex,
	            'subtitles': this.getBookingSubtitles(booking, bookingIndex),
	            'imageSrc': this.getBookingImage(bookingIndex),
	            'onClick': onClick7.bind(this, visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex)
	        });
	    }
	    function scopeModiinPickUpTlvPickUp9(visibleBookings) {
	        var modiinPickUp = visibleBookings.pickUp.modiin;
	        var tlvPickUp = visibleBookings.pickUp.tlv;
	        return React.createElement.apply(this, [
	            'div',
	            {
	                'className': 'pick-up-container row hide-for-print',
	                'key': 'pick-up-container'
	            },
	            _.size(tlvPickUp) !== 0 || _.size(modiinPickUp) !== 0 ? React.createElement('h5', { 'key': 'pickUp-label' }, React.createElement('span', {}, 'הלוך:')) : null,
	            _.size(tlvPickUp) !== 0 ? React.createElement('h6', { 'key': 'tlvPickUp' }, React.createElement('span', {}, 'תל אביב')) : null,
	            _.map(tlvPickUp, repeatBooking6.bind(this, visibleBookings, modiinPickUp, tlvPickUp)),
	            _.size(modiinPickUp) !== 0 ? React.createElement('h6', { 'key': 'modiinPickUp' }, React.createElement('span', {}, 'מודיעין')) : null,
	            _.map(modiinPickUp, repeatBooking8.bind(this, visibleBookings, modiinPickUp, tlvPickUp))
	        ]);
	    }
	    function onClick10(visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex) {
	        this.onBookingClick(bookingIndex);
	    }
	    function repeatBooking11(visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex) {
	        return React.createElement(listItem, {
	            'title': this.getBookingTitle(bookingIndex),
	            'key': 'booking-' + bookingIndex,
	            'subtitles': this.getBookingSubtitles(booking, bookingIndex),
	            'imageSrc': this.getBookingImage(bookingIndex),
	            'onClick': onClick10.bind(this, visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex)
	        });
	    }
	    function onClick12(visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex) {
	        this.onBookingClick(bookingIndex);
	    }
	    function repeatBooking13(visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex) {
	        return React.createElement(listItem, {
	            'title': this.getBookingTitle(bookingIndex),
	            'key': 'booking-' + bookingIndex,
	            'subtitles': this.getBookingSubtitles(booking, bookingIndex),
	            'imageSrc': this.getBookingImage(bookingIndex),
	            'onClick': onClick12.bind(this, visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex)
	        });
	    }
	    function scopeModiinDropOffTlvDropOff14(visibleBookings) {
	        var modiinDropOff = visibleBookings.dropOff.modiin;
	        var tlvDropOff = visibleBookings.dropOff.tlv;
	        return React.createElement.apply(this, [
	            'div',
	            {
	                'className': 'drop-off-container row hide-for-print',
	                'key': 'drop-off-container'
	            },
	            _.size(tlvDropOff) !== 0 || _.size(modiinDropOff) !== 0 ? React.createElement('h5', { 'key': 'drop-off-label' }, React.createElement('span', {}, 'חזור:')) : null,
	            _.size(tlvDropOff) !== 0 ? React.createElement('h6', { 'key': 'tlvDropOff' }, React.createElement('span', {}, 'תל אביב')) : null,
	            _.map(tlvDropOff, repeatBooking11.bind(this, visibleBookings, modiinDropOff, tlvDropOff)),
	            _.size(modiinDropOff) !== 0 ? React.createElement('h6', { 'key': 'modiinDropOff' }, React.createElement('span', {}, 'מודיעין')) : null,
	            _.map(modiinDropOff, repeatBooking13.bind(this, visibleBookings, modiinDropOff, tlvDropOff))
	        ]);
	    }
	    function onSubmit15(visibleBookings, booking) {
	        this.updateBooking(booking);
	    }
	    function onBookingCancel16(visibleBookings) {
	        this.cancelBooking();
	    }
	    function onClose17(visibleBookings) {
	        this.stopEditing();
	    }
	    function repeatBooking18(visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex) {
	        return React.createElement('tr', { 'key': bookingIndex + '-tlv-pickup-row' }, React.createElement('td', {}, this.getBookingTitle(bookingIndex)), React.createElement('td', {}, this.getBookingPhone(bookingIndex)), React.createElement('td', {}, booking.paidSeats), React.createElement('td', {}, booking.extraSeats), React.createElement('td', {}, Constants.STATIONS[booking.pickUp]), React.createElement('td', {}, Constants.STATIONS[booking.dropOff]));
	    }
	    function repeatBooking19(visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex) {
	        return React.createElement('tr', { 'key': bookingIndex + '-modiin-pickup-row' }, React.createElement('td', {}, this.getBookingTitle(bookingIndex)), React.createElement('td', {}, this.getBookingPhone(bookingIndex)), React.createElement('td', {}, booking.paidSeats), React.createElement('td', {}, booking.extraSeats), React.createElement('td', {}, Constants.STATIONS[booking.pickUp]), React.createElement('td', {}, Constants.STATIONS[booking.dropOff]));
	    }
	    function scopeModiinPickUpTlvPickUp20(visibleBookings) {
	        var modiinPickUp = visibleBookings.pickUp.modiin;
	        var tlvPickUp = visibleBookings.pickUp.tlv;
	        return React.createElement('div', {
	            'className': 'pickUp-table show-for-print',
	            'key': 'pickUp-table'
	        }, React.createElement('table', {}, React.createElement('thead', {}, _.size(modiinPickUp) !== 0 || _.size(tlvPickUp) !== 0 ? React.createElement('tr', { 'key': 'pickUp-label' }, React.createElement('td', { 'colSpan': '6' }, React.createElement('span', {}, 'הלוך'), React.createElement('span', {}, ' (', this.getPickUpCount(), ')'))) : null, React.createElement('tr', {}, React.createElement('th', {}, 'שם'), React.createElement('th', {}, 'טלפון'), React.createElement('th', {}, 'מנויים'), React.createElement('th', {}, 'בתשלום'), React.createElement('th', {}, 'תחנת עליה'), React.createElement('th', {}, 'תחנת ירידה'))), React.createElement.apply(this, [
	            'tbody',
	            {},
	            _.size(tlvPickUp) !== 0 ? React.createElement('tr', { 'key': 'tlvPickUp' }, React.createElement('td', {
	                'colSpan': '6',
	                'className': 'table-sub'
	            }, React.createElement('span', {}, 'תל אביב'))) : null,
	            _.map(tlvPickUp, repeatBooking18.bind(this, visibleBookings, modiinPickUp, tlvPickUp)),
	            _.size(modiinPickUp) !== 0 ? React.createElement('tr', { 'key': 'modiinPickUp' }, React.createElement('td', {
	                'colSpan': '6',
	                'className': 'table-sub'
	            }, React.createElement('span', {}, 'מודיעין'))) : null,
	            _.map(modiinPickUp, repeatBooking19.bind(this, visibleBookings, modiinPickUp, tlvPickUp))
	        ])));
	    }
	    function repeatBooking21(visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex) {
	        return React.createElement('tr', { 'key': bookingIndex + '-tlv-dropoff-row' }, React.createElement('td', {}, this.getBookingTitle(bookingIndex)), React.createElement('td', {}, this.getBookingPhone(bookingIndex)), React.createElement('td', {}, booking.paidSeats), React.createElement('td', {}, booking.extraSeats), React.createElement('td', {}, Constants.STATIONS[booking.pickUp]), React.createElement('td', {}, Constants.STATIONS[booking.dropOff]));
	    }
	    function repeatBooking22(visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex) {
	        return React.createElement('tr', { 'key': bookingIndex + '-modiin-dropoff-row' }, React.createElement('td', {}, this.getBookingTitle(bookingIndex)), React.createElement('td', {}, this.getBookingPhone(bookingIndex)), React.createElement('td', {}, booking.paidSeats), React.createElement('td', {}, booking.extraSeats), React.createElement('td', {}, Constants.STATIONS[booking.pickUp]), React.createElement('td', {}, Constants.STATIONS[booking.dropOff]));
	    }
	    function scopeModiinDropOffTlvDropOff23(visibleBookings) {
	        var modiinDropOff = visibleBookings.dropOff.modiin;
	        var tlvDropOff = visibleBookings.dropOff.tlv;
	        return React.createElement('div', {
	            'className': 'dropOff-table show-for-print',
	            'key': 'dropOff-table'
	        }, React.createElement('table', {}, React.createElement('thead', {}, _.size(tlvDropOff) !== 0 || _.size(modiinDropOff) !== 0 ? React.createElement('tr', { 'key': 'dropOff-label' }, React.createElement('td', { 'colSpan': '6' }, React.createElement('span', {}, 'חזור'), React.createElement('span', {}, '(', this.getDropOffCount(), ')'))) : null, React.createElement('tr', {}, React.createElement('th', {}, 'שם'), React.createElement('th', {}, 'טלפון'), React.createElement('th', {}, 'מנויים'), React.createElement('th', {}, 'בתשלום'), React.createElement('th', {}, 'תחנת עליה'), React.createElement('th', {}, 'תחנת ירידה'))), React.createElement.apply(this, [
	            'tbody',
	            {},
	            _.size(tlvDropOff) !== 0 ? React.createElement('tr', { 'key': 'tlvDropOff' }, React.createElement('td', {
	                'colSpan': '6',
	                'className': 'table-sub'
	            }, React.createElement('span', {}, 'תל אביב'))) : null,
	            _.map(tlvDropOff, repeatBooking21.bind(this, visibleBookings, modiinDropOff, tlvDropOff)),
	            _.size(modiinDropOff) !== 0 ? React.createElement('tr', { 'key': 'modiinDropOff' }, React.createElement('td', {
	                'colSpan': '6',
	                'className': 'table-sub'
	            }, React.createElement('span', {}, 'מודיעין'))) : null,
	            _.map(modiinDropOff, repeatBooking22.bind(this, visibleBookings, modiinDropOff, tlvDropOff))
	        ])));
	    }
	    function scopeVisibleBookings24() {
	        var visibleBookings = this.getVisibleBookings();
	        return React.createElement('div', { 'className': 'ֿsmall-centered dashboard-page bookings-page' }, !this.state.editingUserId ? React.createElement('div', { 'key': 'list-view' }, React.createElement('div', { 'className': 'header hide-for-print' }, React.createElement('label', { 'className': 'header-title' }, 'רשומים להסעות')), React.createElement('div', { 'className': 'filtering row expanded collapse hide-for-print' }, React.createElement('div', { 'className': 'column small-12 large-6' }, React.createElement('ul', { 'className': 'menu' }, React.createElement('li', {
	            'className': _({ active: this.state.filter === 'PICKUP' }).transform(function (res, value, key) {
	                if (value) {
	                    res.push(key);
	                }
	            }, []).join(' ')
	        }, React.createElement('a', { 'onClick': onClick1.bind(this, visibleBookings) }, React.createElement('span', {}, 'הלוך '), React.createElement('span', {}, '(', this.getPickUpCount(), ')'))), React.createElement('li', {
	            'className': _({ active: this.state.filter === 'DROPOFF' }).transform(function (res, value, key) {
	                if (value) {
	                    res.push(key);
	                }
	            }, []).join(' ')
	        }, React.createElement('a', { 'onClick': onClick2.bind(this, visibleBookings) }, React.createElement('span', {}, 'חזור '), React.createElement('span', {}, '(', this.getDropOffCount(), ')'))))), React.createElement('div', { 'className': 'column small-12 large-6' }, React.createElement('div', { 'className': 'search' }, React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.eventId,
	                'onChange': onChange3.bind(this, visibleBookings)
	            },
	            _.map(this.props.events, repeatEvent4.bind(this, visibleBookings))
	        ])))), React.createElement('h5', { 'className': 'show-for-print' }, this.getEventPrintTitle()), this.state.filter === 'PICKUP' ? scopeModiinPickUpTlvPickUp9.apply(this, [visibleBookings]) : null, this.state.filter === 'DROPOFF' ? scopeModiinDropOffTlvDropOff14.apply(this, [visibleBookings]) : null, visibleBookings.length === 0 ? React.createElement('label', {
	            'className': 'filter-status hide-for-print',
	            'key': 'no-events'
	        }, React.createElement('i', {
	            'className': 'fa fa-frown-o',
	            'aria-hidden': 'true'
	        }), React.createElement('span', {}, 'מצטערים, לא נמצאו רשומות מתאימות...')) : null) : null, this.state.editingUserId ? React.createElement(BookingForm, {
	            'key': 'edit-user',
	            'title': 'עריכת הרשמה',
	            'booking': this.props.bookings[this.state.editingUserId][this.state.eventId],
	            'onSubmit': onSubmit15.bind(this, visibleBookings),
	            'onBookingCancel': onBookingCancel16.bind(this, visibleBookings),
	            'seasonTickets': _.get(this.props.users, [
	                this.state.editingUserId,
	                'seasonTickets'
	            ]) || 0,
	            'onClose': onClose17.bind(this, visibleBookings)
	        }) : null, this.state.filter === 'PICKUP' ? scopeModiinPickUpTlvPickUp20.apply(this, [visibleBookings]) : null, this.state.filter === 'DROPOFF' ? scopeModiinDropOffTlvDropOff23.apply(this, [visibleBookings]) : null);
	    }
	    return function () {
	        return scopeVisibleBookings24.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(73);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./bookingsPage.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./bookingsPage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".bookings-page h5 {\n  font-weight: bold;\n  background: #CFD8DC;\n  color: #37474F;\n  padding: 5px;\n  margin-bottom: 0; }\n\n.bookings-page h6 {\n  padding: 5px 10px;\n  background: #ECEFF1;\n  margin-bottom: 0; }\n\n.bookings-page .table-sub {\n  font-weight: bold;\n  border-bottom: 2px solid #222222; }\n\n.bookings-page table tbody, .bookings-page table tfoot, .bookings-page table thead {\n  border: 1px solid #222222; }\n", ""]);
	
	// exports


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _distributionPage = __webpack_require__(75);
	
	var _distributionPage2 = _interopRequireDefault(_distributionPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _distributionActions = __webpack_require__(78);
	
	var _constants = __webpack_require__(11);
	
	var Constants = _interopRequireWildcard(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getMembersUsersOnly(users) {
	  return _.pickBy(users, function (user) {
	    return user.seasonTickets && user.seasonTickets > 0;
	  });
	}
	
	function getBookedUsersOnly(users, bookings, eventId) {
	  return _.pickBy(users, function (user, uid) {
	    return _.has(bookings[uid], eventId);
	  });
	}
	
	function getRecipients(users, recipientsType, bookings, eventId) {
	  var recipientsUsers = _.pickBy(users, function (user) {
	    return user.subscribeMail;
	  });
	
	  switch (recipientsType) {
	    case Constants.DISTRIBUTION.RECIPIENTS.MEMBERS_ONLY.value:
	      recipientsUsers = getMembersUsersOnly(recipientsUsers);
	      break;
	    case Constants.DISTRIBUTION.RECIPIENTS.BOOKED_TO_EVENT.value:
	      recipientsUsers = getBookedUsersOnly(recipientsUsers, bookings, eventId);
	      break;
	  }
	
	  return recipientsUsers;
	}
	
	function getUsersEmails(users, recipientsType, bookings, eventId) {
	  var recipients = getRecipients(users, recipientsType, bookings, eventId);
	  return _.map(recipients, function (user) {
	    return user.email;
	  });
	}
	
	function getUsersPhoneNumbers(users, recipientsType, bookings, eventId) {
	  var recipients = getRecipients(users, recipientsType, bookings, eventId);
	  return _.map(recipients, function (user) {
	    return user.phonePrefix + user.phoneNumber;
	  });
	}
	
	var getEventSubstitutions = function getEventSubstitutions(event) {
	  return {
	    '-DEPARTURE-': event.hour + ':' + event.minute,
	    '-DATE-': event.day + '/' + event.month + '/' + event.year,
	    '-NAME-': Constants.EVENTS_TYPES[event.typeId].name
	  };
	};
	
	var prepareCustomMailContentForSend = function prepareCustomMailContentForSend(content) {
	  return '<p dir=\'rtl\'>' + content.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>';
	};
	
	var getInitialState = function getInitialState(events) {
	  return {
	    distributionMethod: 'email',
	    recipientsType: Constants.DISTRIBUTION.RECIPIENTS.MEMBERS_ONLY.value,
	    distributionType: 'template',
	    eventId: _.last(_.keys(events)),
	    templateId: Constants.DISTRIBUTION.TEMPLATES.EVENT_OPEN_FOR_MEMBERS.id,
	    subject: '',
	    content: ''
	  };
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    events: state.events,
	    bookings: state.bookings,
	    users: state.users
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    sendTemplateEmail: function sendTemplateEmail(recipients, templateId, substitutions) {
	      return dispatch((0, _distributionActions.sendTemplateEmail)(recipients, templateId, substitutions));
	    },
	    sendCustomEmail: function sendCustomEmail(recipients, subject, content) {
	      return dispatch((0, _distributionActions.sendCustomEmail)(recipients, subject, content));
	    },
	    sendSMS: function sendSMS(recipients, message) {
	      return dispatch((0, _distributionActions.sendSMS)(recipients, message));
	    }
	  };
	};
	
	var DistributionPage = function (_React$Component) {
	  _inherits(DistributionPage, _React$Component);
	
	  function DistributionPage(props) {
	    _classCallCheck(this, DistributionPage);
	
	    var _this = _possibleConstructorReturn(this, (DistributionPage.__proto__ || Object.getPrototypeOf(DistributionPage)).call(this, props));
	
	    _this.state = getInitialState(_this.getOpenEvents());
	    return _this;
	  }
	
	  _createClass(DistributionPage, [{
	    key: 'getOpenEvents',
	    value: function getOpenEvents() {
	      return _.omitBy(this.props.events, function (event) {
	        return event.status !== Constants.EVENTS_STATUS.OPEN_FOR_MEMBERS.value && event.status !== Constants.EVENTS_STATUS.OPEN_FOR_ALL.value;
	      });
	    }
	  }, {
	    key: 'onDistributionMethodChange',
	    value: function onDistributionMethodChange(e) {
	      this.setState({ distributionMethod: e.target.value });
	    }
	  }, {
	    key: 'onRecipientsTypeChange',
	    value: function onRecipientsTypeChange(e) {
	      this.setState({ recipientsType: e.target.value });
	    }
	  }, {
	    key: 'onDistributionTypeChange',
	    value: function onDistributionTypeChange(e) {
	      this.setState({ distributionType: e.target.value });
	    }
	  }, {
	    key: 'onTemplateIdChange',
	    value: function onTemplateIdChange(e) {
	      this.setState({ templateId: e.target.value });
	    }
	  }, {
	    key: 'onEventChange',
	    value: function onEventChange(e) {
	      this.setState({ eventId: e.target.value });
	    }
	  }, {
	    key: 'onSubjectChange',
	    value: function onSubjectChange(e) {
	      this.setState({ subject: e.target.value });
	    }
	  }, {
	    key: 'onContentChange',
	    value: function onContentChange(e) {
	      this.setState({ content: e.target.value });
	    }
	  }, {
	    key: 'isDistributionTypeVisible',
	    value: function isDistributionTypeVisible() {
	      return this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.EMAIL;
	    }
	  }, {
	    key: 'isEventsVisible',
	    value: function isEventsVisible() {
	      return this.isDistributionTypeVisible() && this.state.distributionType === Constants.DISTRIBUTION.TYPES.TEMPLATE;
	    }
	  }, {
	    key: 'isCustomTitleVisible',
	    value: function isCustomTitleVisible() {
	      return this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.EMAIL && this.state.distributionType === Constants.DISTRIBUTION.TYPES.CUSTOM;
	    }
	  }, {
	    key: 'isCustomContentVisible',
	    value: function isCustomContentVisible() {
	      return this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.EMAIL && this.state.distributionType === Constants.DISTRIBUTION.TYPES.CUSTOM || this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.SMS;
	    }
	  }, {
	    key: 'send',
	    value: function send() {
	      if (this.state.distributionMethod === Constants.DISTRIBUTION.METHODS.EMAIL) {
	        var recipients = getUsersEmails(this.props.users, this.state.recipientsType, this.props.bookings, this.state.eventId);
	        if (_.isEmpty(recipients)) {
	          return;
	        }
	        if (this.state.distributionType === Constants.DISTRIBUTION.TYPES.TEMPLATE) {
	          var substitutions = getEventSubstitutions(this.props.events[this.state.eventId]);
	          this.props.sendTemplateEmail(recipients, this.state.templateId, substitutions);
	        } else {
	          this.props.sendCustomEmail(recipients, this.state.subject, prepareCustomMailContentForSend(this.state.content));
	        }
	      } else {
	        var _recipients = getUsersPhoneNumbers(this.props.users, this.state.recipientsType, this.props.bookings, this.state.eventId);
	        if (_.isEmpty(_recipients)) {
	          return;
	        }
	        this.props.sendSMS(_recipients, this.state.content);
	      }
	
	      this.setState(getInitialState(this.getOpenEvents()));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _distributionPage2.default.apply(this);
	    }
	  }]);
	
	  return DistributionPage;
	}(_react2.default.Component);
	
	DistributionPage.propTypes = {
	  events: _react2.default.PropTypes.object.isRequired,
	  users: _react2.default.PropTypes.object.isRequired,
	  sendTemplateEmail: _react2.default.PropTypes.func.isRequired,
	  sendCustomEmail: _react2.default.PropTypes.func.isRequired,
	  sendSMS: _react2.default.PropTypes.func.isRequired
	};
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DistributionPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "distributionPage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(11),
	    __webpack_require__(76)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, Constants, distributionPageCss) {
	    'use strict';
	    function onChange1(e) {
	        this.onDistributionMethodChange(e);
	    }
	    function onChange2(e) {
	        this.onRecipientsTypeChange(e);
	    }
	    function onChange3(e) {
	        this.onDistributionTypeChange(e);
	    }
	    function onChange4(e) {
	        this.onTemplateIdChange(e);
	    }
	    function repeatTemplateConst5(templateConst, templateConstIndex) {
	        return React.createElement('option', {
	            'key': 'template-' + templateConst.id,
	            'value': templateConst.id
	        }, templateConst.name, '\n                    ');
	    }
	    function onChange6(e) {
	        this.onEventChange(e);
	    }
	    function repeatEvent7(event, eventIndex) {
	        return React.createElement('option', {
	            'key': 'event-' + eventIndex,
	            'value': eventIndex
	        }, Constants.EVENTS_TYPES[event.typeId].name, '\n                    ');
	    }
	    function onChange8(e) {
	        this.onSubjectChange(e);
	    }
	    function onChange9(e) {
	        this.onContentChange(e);
	    }
	    function onClick10() {
	        this.send();
	    }
	    return function () {
	        return React.createElement('div', { 'className': 'dashboard-page distribution-page' }, React.createElement('div', { 'className': 'header' }, React.createElement('label', { 'className': 'header-title' }, 'שליחת מיילים')), React.createElement('div', { 'className': 'distribution-form small-11 small-centered' }, React.createElement('div', { 'className': 'medium-8 small-12 columns small-centered more-space' }, React.createElement('label', {}, 'שלח באמצעות\n                ', React.createElement('select', {
	            'value': this.state.distributionMethod,
	            'onChange': onChange1.bind(this)
	        }, React.createElement('option', { 'value': Constants.DISTRIBUTION.METHODS.EMAIL }, 'דואר אלקטרוני'), React.createElement('option', { 'value': Constants.DISTRIBUTION.METHODS.SMS }, 'סמס')))), React.createElement('div', { 'className': 'medium-8 small-12 columns small-centered' }, React.createElement('label', {}, 'שלח אל\n                ', React.createElement('select', {
	            'value': this.state.recipientsType,
	            'onChange': onChange2.bind(this)
	        }, React.createElement('option', { 'value': Constants.DISTRIBUTION.RECIPIENTS.ALL.value }, '\n                        ', Constants.DISTRIBUTION.RECIPIENTS.ALL.name, '\n                    '), React.createElement('option', { 'value': Constants.DISTRIBUTION.RECIPIENTS.MEMBERS_ONLY.value }, '\n                        ', Constants.DISTRIBUTION.RECIPIENTS.MEMBERS_ONLY.name, '\n                    '), React.createElement('option', { 'value': Constants.DISTRIBUTION.RECIPIENTS.BOOKED_TO_EVENT.value }, '\n                        ', Constants.DISTRIBUTION.RECIPIENTS.BOOKED_TO_EVENT.name, '\n                    ')))), this.isDistributionTypeVisible() ? React.createElement('div', {
	            'className': 'medium-8 small-12 columns small-centered',
	            'key': 'distributionType'
	        }, React.createElement('label', {}, 'צורת שליחה\n                ', React.createElement('select', {
	            'value': this.state.distributionType,
	            'onChange': onChange3.bind(this)
	        }, React.createElement('option', { 'value': Constants.DISTRIBUTION.TYPES.TEMPLATE }, 'תבנית'), React.createElement('option', { 'value': Constants.DISTRIBUTION.TYPES.CUSTOM }, 'חופשי')))) : null, this.isEventsVisible() ? React.createElement('div', {
	            'className': 'medium-8 small-12 columns small-centered',
	            'key': 'templatPicker'
	        }, React.createElement('label', {}, 'בחר תבנית\n                ', React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.templateId,
	                'onChange': onChange4.bind(this)
	            },
	            _.map(Constants.DISTRIBUTION.TEMPLATES, repeatTemplateConst5.bind(this))
	        ]))) : null, this.isEventsVisible() ? React.createElement('div', {
	            'className': 'medium-8 small-12 columns small-centered',
	            'key': 'eventId'
	        }, React.createElement('label', {}, 'בחירת אירוע\n                ', React.createElement.apply(this, [
	            'select',
	            {
	                'value': this.state.eventId,
	                'onChange': onChange6.bind(this)
	            },
	            _.map(this.getOpenEvents(), repeatEvent7.bind(this))
	        ]))) : null, React.createElement('div', { 'className': 'small-centered medium-8 small-12 columns' }, this.isCustomTitleVisible() ? React.createElement('label', { 'key': 'customSubject-label' }, 'נושא:') : null, this.isCustomTitleVisible() ? React.createElement('input', {
	            'type': 'text',
	            'value': this.state.subject,
	            'onChange': onChange8.bind(this),
	            'key': 'customSubject'
	        }) : null, this.isCustomContentVisible() ? React.createElement('label', { 'key': 'customContent-label' }, 'תוכן:') : null, this.isCustomContentVisible() ? React.createElement('textarea', {
	            'name': true,
	            'id': true,
	            'rows': '10',
	            'value': this.state.content,
	            'onChange': onChange9.bind(this),
	            'key': 'customContent'
	        }) : null), React.createElement('div', { 'className': 'button-group stacked small-centered large-6 small-8 more-space' }, React.createElement('a', {
	            'onClick': onClick10.bind(this),
	            'className': 'button success'
	        }, React.createElement('span', {}, 'שלח'), React.createElement('i', {
	            'className': 'fa fa-paper-plane',
	            'aria-hidden': 'true'
	        })))));
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./distributionPage.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./distributionPage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".distribution-page .button i {\n  margin-right: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sendSMS = exports.sendCustomEmail = exports.sendTemplateEmail = undefined;
	
	var _clientDB = __webpack_require__(12);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(15);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(16);
	
	var errorActions = _interopRequireWildcard(_errorActions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var PATH_MAP = {
	  EMAILS: {
	    TEMPLATES: 'pendingEmails/templates',
	    CUSTOM: 'pendingEmails/custom'
	  },
	  SMS: 'pendingSMS'
	};
	
	var sendTemplateEmail = exports.sendTemplateEmail = function sendTemplateEmail(recipients, templateId, substitutions) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.push('' + PATH_MAP.EMAILS.TEMPLATES, { recipients: recipients, templateId: templateId, substitutions: substitutions }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var sendCustomEmail = exports.sendCustomEmail = function sendCustomEmail(recipients, subject, content) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.push('' + PATH_MAP.EMAILS.CUSTOM, { recipients: recipients, subject: subject, content: content }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	var sendSMS = exports.sendSMS = function sendSMS(to, message) {
	  return function (dispatch) {
	    dispatch(loadingActions.startLoading());
	
	    return clientDB.push('' + PATH_MAP.SMS, { to: to, message: message }).catch(function () {
	      return dispatch(errorActions.reportError());
	    }).finally(function () {
	      return dispatch(loadingActions.stopLoading());
	    });
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "distributionActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	
	var UserForm = __webpack_require__(50);
	
	var navigationActions = __webpack_require__(19);
	var navigationConstants = __webpack_require__(21);
	
	function mapStateToProps(state) {
	    return {
	        uid: state.authData.uid
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        navigateTo: function navigateTo(pageId) {
	            return dispatch(navigationActions.navigateTo(pageId));
	        }
	    };
	}
	
	var EditorUserInfoPage = function (_React$Component) {
	    _inherits(EditorUserInfoPage, _React$Component);
	
	    function EditorUserInfoPage() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, EditorUserInfoPage);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditorUserInfoPage.__proto__ || Object.getPrototypeOf(EditorUserInfoPage)).call.apply(_ref, [this].concat(args))), _this), _this.onFormClose = function () {
	            _this.props.navigateTo(navigationConstants.PAGES.HOME.val);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(EditorUserInfoPage, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(UserForm, { uid: this.props.uid, onClose: this.onFormClose });
	        }
	    }]);
	
	    return EditorUserInfoPage;
	}(React.Component);
	
	EditorUserInfoPage.propTypes = {
	    uid: React.PropTypes.string.isRequired,
	    navigateTo: React.PropTypes.func.isRequired
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(EditorUserInfoPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "editUserInfoPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(27)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(26)();
	// imports
	
	
	// module
	exports.push([module.id, ".site {\n  direction: rtl; }\n  .site .split.button {\n    width: 100%;\n    font-size: 16px;\n    line-height: 16px; }\n    .site .split.button i {\n      font-size: 20px;\n      padding-right: 10px;\n      line-height: 16px; }\n    .site .split.button.facebook {\n      background: #3b5998; }\n    .site .split.button.google {\n      background: #d50f25; }\n    .site .split.button.left-icon {\n      text-align: right; }\n      .site .split.button.left-icon span {\n        left: 0; }\n  .site .error-msg {\n    color: #d50f25;\n    padding: 0 15px 15px; }\n    .site .error-msg i {\n      margin-left: 10px; }\n  .site label {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .site .more-space {\n    margin-top: 25px; }\n  .site .header {\n    background: #EF5350;\n    border-bottom: 8px solid #D32F2F;\n    color: #ffffff;\n    height: 3.3em;\n    padding: 0 10px 0 10px;\n    display: flex;\n    align-items: center; }\n    .site .header .header-title {\n      font-size: 1rem;\n      font-weight: bold;\n      color: #ffffff;\n      flex: 1; }\n  .site .back-btn {\n    width: 20px; }\n  .site .dashboard-page {\n    position: relative;\n    background: #F5F5F5;\n    min-height: 100vh; }\n    .site .dashboard-page .list-item:nth-child(even) {\n      background: #EEEEEE; }\n    .site .dashboard-page .list-item:nth-child(odd) {\n      background: #E0E0E0; }\n    @media screen and (max-width: 39.9375em) {\n      .site .dashboard-page .filtering .menu.small-text {\n        font-size: 0.9em;\n        text-align: center; } }\n    .site .dashboard-page .filtering .menu li a {\n      padding: 1rem;\n      color: #D32F2F; }\n    .site .dashboard-page .filtering .menu li.active a {\n      background: #D32F2F;\n      color: #FFFFFF; }\n    .site .dashboard-page .filtering .menu li.active:hover {\n      color: #FFFFFF; }\n    .site .dashboard-page .filtering .search {\n      position: relative;\n      margin-top: 5px;\n      padding-right: 0.935em;\n      padding-left: 0.935em; }\n    .site .dashboard-page .filtering .search-input {\n      text-indent: 30px; }\n    .site .dashboard-page .filtering .search-icon {\n      position: absolute;\n      top: 11px;\n      right: 28px;\n      font-size: 0.8em;\n      color: #cacaca; }\n    .site .dashboard-page .add-btn {\n      background-color: #D32F2F;\n      box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n      cursor: pointer;\n      border-radius: 50%;\n      font-size: 1em;\n      font-weight: bold;\n      line-height: 0;\n      outline: none;\n      transition: background-color .25s ease-out, color .25s ease-out;\n      padding: .85em;\n      color: #ffffff;\n      width: 3.5rem;\n      height: 3.5rem;\n      position: fixed;\n      bottom: 1rem; }\n      .site .dashboard-page .add-btn.big {\n        left: 27%; }\n      .site .dashboard-page .add-btn.small {\n        width: 2.5rem;\n        height: 2.5rem;\n        left: 5%; }\n      .site .dashboard-page .add-btn:hover {\n        background: #D50000; }\n      .site .dashboard-page .add-btn:focus {\n        outline: none; }\n    .site .dashboard-page .filter-status {\n      color: #424242;\n      font-size: 1rem;\n      text-align: center; }\n      .site .dashboard-page .filter-status i {\n        margin-left: 5px; }\n  .site .button.success[disabled]:hover {\n    background: #25a35a !important; }\n", ""]);
	
	// exports


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeStore = undefined;
	
	var _redux = __webpack_require__(83);
	
	var _errorReducer = __webpack_require__(84);
	
	var _errorReducer2 = _interopRequireDefault(_errorReducer);
	
	var _loadingReducer = __webpack_require__(85);
	
	var _loadingReducer2 = _interopRequireDefault(_loadingReducer);
	
	var _usersReducer = __webpack_require__(86);
	
	var _usersReducer2 = _interopRequireDefault(_usersReducer);
	
	var _eventsReducer = __webpack_require__(87);
	
	var _eventsReducer2 = _interopRequireDefault(_eventsReducer);
	
	var _bookingsReducer = __webpack_require__(88);
	
	var _bookingsReducer2 = _interopRequireDefault(_bookingsReducer);
	
	var _authDataReducer = __webpack_require__(89);
	
	var _authDataReducer2 = _interopRequireDefault(_authDataReducer);
	
	var _navigationReducer = __webpack_require__(90);
	
	var _navigationReducer2 = _interopRequireDefault(_navigationReducer);
	
	var _reduxThunk = __webpack_require__(91);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var makeStore = exports.makeStore = function makeStore() {
	  var reducers = (0, _redux.combineReducers)({
	    currentPage: _navigationReducer2.default,
	    authData: _authDataReducer2.default,
	    errorMsg: _errorReducer2.default,
	    loading: _loadingReducer2.default,
	    users: _usersReducer2.default,
	    events: _eventsReducer2.default,
	    bookings: _bookingsReducer2.default
	  });
	
	  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);
	
	  return (0, _redux.createStore)(reducers, undefined, middleware);
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "makeStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = errorReducer;
	
	var _actionTypes = __webpack_require__(9);
	
	var initialState = '';
	
	function errorReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    case _actionTypes.REPORT_ERROR:
	      return action.message;
	    case _actionTypes.START_LOADING:
	      return '';
	    default:
	      return state;
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "errorReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadingReducer;
	
	var _actionTypes = __webpack_require__(9);
	
	var initialState = false;
	
	function loadingReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    case _actionTypes.START_LOADING:
	      return true;
	    case _actionTypes.STOP_LOADING:
	      return false;
	    default:
	      return state;
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "loadingReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = usersReducer;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = {};
	
	function usersReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    case _actionTypes.USERS_RECEIVED:
	      return _.merge({}, state, action.users);
	    case _actionTypes.USER_REMOVED:
	      return _.omit(state, action.uid);
	    case _actionTypes.SIGN_OUT:
	      return initialState;
	    default:
	      return state;
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "usersReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = eventsReducer;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = {};
	
	function eventsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    case _actionTypes.EVENTS_RECEIVED:
	      return _.merge({}, state, action.events);
	    case _actionTypes.EVENT_REMOVED:
	      return _.omit(state, action.eventId);
	    case _actionTypes.SIGN_OUT:
	      return initialState;
	    default:
	      return state;
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "eventsReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = eventsReducer;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = {};
	
	function eventsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    case _actionTypes.BOOKINGS_RECEIVED:
	      return _.merge({}, state, action.bookings);
	    case _actionTypes.BOOKING_CANCELED:
	      {
	        var clonedBookings = _.cloneDeep(state);
	        delete clonedBookings[action.uid][action.eventId];
	        if (_.size(clonedBookings[action.uid]) === 0) {
	          delete clonedBookings[action.uid];
	        }
	        return clonedBookings;
	      }
	    case _actionTypes.SIGN_OUT:
	      return initialState;
	    default:
	      return state;
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "bookingsReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = authDataReducer;
	
	var _actionTypes = __webpack_require__(9);
	
	var initialState = null;
	
	function authDataReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    case _actionTypes.SET_AUTH_DATA:
	      return { uid: action.uid, email: action.email, photoURL: action.photoURL, isAdmin: action.isAdmin };
	    case _actionTypes.SIGN_OUT:
	      return initialState;
	    default:
	      return state;
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "authDataReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = navigationReducer;
	
	var _constants = __webpack_require__(11);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _actionTypes = __webpack_require__(9);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var initialState = Constants.PAGES.AUTH.val;
	
	function navigationReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    case _actionTypes.NAVIGATE_TO:
	      return action.page;
	    case _actionTypes.SIGN_OUT:
	      return initialState;
	    default:
	      return state;
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "navigationReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = ReduxThunk;

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = {
		"firebase": {
			"apiKey": "AIzaSyDEISV2aMiePkueCwlDR8CVg7h_BLa3Joc",
			"authDomain": "hapoelbus-b25d4.firebaseapp.com",
			"databaseURL": "https://hapoelbus-b25d4.firebaseio.com",
			"storageBucket": "hapoelbus-b25d4.appspot.com"
		}
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWZkY2ExNWQwY2YxZjBmODQ0MjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb290L3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LnJ0Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9sb2FkaW5nQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9lcnJvckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL25hdmlnYXRpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL25hdmlnYXRpb25Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzP2NhYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzPzM0MmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90b3BCYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5ydCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5zY3NzPzgyM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5ydCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9nYW1lQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ib29raW5nc0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdGVhbXNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3M/MmRkNCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2V2ZW50SXRlbS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm1GcmFtZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2Nzcz8yNWUyIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZm9ybUZyYW1lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RyYW5zbGF0aW9ucy9mb3JtRnJhbWVUcmFuc2xhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlckZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy91c2VySW5mb0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL3VzZXJGb3JtVHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnNjc3M/OGI1OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5ydCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9saXN0SXRlbS5zY3NzPzIyOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9saXN0SXRlbS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2Uuc2Nzcz8xNDRjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXZlbnRzUGFnZS9ldmVudHNQYWdlLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5ydCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLnNjc3M/Nzk1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXZlbnRzUGFnZS9ldmVudHNQYWdlLnNjc3M/YzlmMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5zY3NzP2IzZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnNjc3M/YTg4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9kaXN0cmlidXRpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VkaXRVc2VySW5mb1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYXBwLnNjc3M/OGJkYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9tYWtlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvbmF2aWdhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVkdXhUaHVua1wiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvY29uZmlnLnByb2QuanNvbiJdLCJuYW1lcyI6WyJjb25maWciLCJjbGllbnREQiIsImluaXRpYWxpemUiLCJmaXJlYmFzZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUm9vdCIsImFwcGx5IiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIl8iLCJyZXF1aXJlIiwiUmVhY3QiLCJSZWFjdFJldWR4IiwiYXV0aEFjdGlvbnMiLCJuYXZpZ2F0aW9uQ29uc3RhdG5zIiwiU3Bpbm5lciIsIlRvcEJhciIsIkF1dGhQYWdlIiwiSG9tZVBhZ2UiLCJVc2Vyc1BhZ2UiLCJFdmVudHNQYWdlIiwiQm9va2luZ3NQYWdlIiwiRGlzdHJpYnV0aW9uUGFnZSIsIkVkaXRVc2VySW5mb1BhZ2UiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImF1dGhEYXRhIiwiY3VycmVudFBhZ2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoQXV0aERhdGEiLCJnZXRQYWdlQ29tcG9uZW50IiwiY3VycmVudFBhZ2VJZCIsIlBBR0VTIiwiSE9NRSIsInZhbCIsIlVTRVJTIiwiRVZFTlRTIiwiQk9PS0lOR1MiLCJESVNUUklCVVRJT04iLCJFRElUX1VTRVJfSU5GTyIsImdldFBhZ2VUb1JlbmRlciIsIkFVVEgiLCJBcHAiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiY29ubmVjdCIsIkNvbnN0YW50cyIsInVzZXJBY3Rpb25zIiwiZXZlbnRBY3Rpb25zIiwiYm9va2luZ0FjdGlvbnMiLCJsb2FkaW5nQWN0aW9ucyIsImVycm9yQWN0aW9ucyIsIm5hdmlnYXRpb25BY3Rpb25zIiwiQVVUSF9FUlJPUl9DT0RFU19NQVAiLCJFUlJPUlMiLCJJTlZBTElEX01BSUwiLCJXRUFLX1BBU1NXT1JEIiwiRU1BSUxfSU5fVVNFIiwiV1JPTkdfUEFTU1dPUkQiLCJVU0VSX05PVF9GT1VORCIsInNldEF1dGhEYXRhIiwidWlkIiwiZW1haWwiLCJwaG90b1VSTCIsImlzQWRtaW4iLCJ0eXBlIiwiZmV0Y2hBcHBEYXRhIiwidXNlciIsInJlYWQiLCJ0aGVuIiwiZ2V0IiwiYWxsIiwiZmV0Y2hVc2VycyIsImZldGNoRXZlbnRzIiwiZmV0Y2hCb29raW5ncyIsInVzZXJTaWduZWRPdXQiLCJzaWduT3V0Iiwic3RhcnRMb2FkaW5nIiwibmF2aWdhdGVUbyIsImNhdGNoIiwicmVwb3J0RXJyb3IiLCJkYkVycm9yIiwiY29kZSIsImZpbmFsbHkiLCJzdG9wTG9hZGluZyIsImxvZ2luV2l0aEZhY2Vib29rIiwibG9naW5XaXRoR29vZ2xlIiwibG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsImdldFN0YXRlIiwiZ2V0TG9nZ2VkSW5Vc2VyIiwidXNlckluZm8iLCJ1c2VycyIsImlzRW1wdHkiLCJjb25zb2xlIiwiZXJyb3IiLCJTVEFSVF9MT0FESU5HIiwiU1RPUF9MT0FESU5HIiwiUkVQT1JUX0VSUk9SIiwiU0VUX0FVVEhfREFUQSIsIlNJR05fT1VUIiwiVVNFUlNfUkVDRUlWRUQiLCJVU0VSX1JFTU9WRUQiLCJFVkVOVFNfUkVDRUlWRUQiLCJFVkVOVF9SRU1PVkVEIiwiQk9PS0lOR1NfUkVDRUlWRUQiLCJCT09LSU5HX0NBTkNFTEVEIiwiTkFWSUdBVEVfVE8iLCJHRU5FUkFMIiwiTk9UX1NBTUVfUEFTU1dPUkQiLCJEQVRFX1RJTUVfREFUQSIsImRheXMiLCJtb250aHMiLCJ5ZWFycyIsImhvdXJzIiwibWludXRlcyIsIkVWRU5UX0RFRkFVTFRfUElDIiwiRVZFTlRTX1RZUEVTIiwic3JjIiwibmFtZSIsIlNUQVRJT05TIiwibW9kaWluIiwidGx2IiwiTUFYX1NFQVNPTl9USUNLRVRTIiwiTUFYX0VYVFJBX1BBU1NFTkdFUlMiLCJQSE9ORV9QUkVGSVhFUyIsInZpc2libGUiLCJFVkVOVFNfU1RBVFVTIiwiQ0xPU0VEIiwidmFsdWUiLCJPUEVOX0ZPUl9NRU1CRVJTIiwiT1BFTl9GT1JfQUxMIiwiRlVMTFlfQk9PS0VEIiwiUkVDSVBJRU5UUyIsIkFMTCIsIk1FTUJFUlNfT05MWSIsIkJPT0tFRF9UT19FVkVOVCIsIk1FVEhPRFMiLCJFTUFJTCIsIlNNUyIsIlRZUEVTIiwiVEVNUExBVEUiLCJDVVNUT00iLCJURU1QTEFURVMiLCJFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTIiwiaWQiLCJFVkVOVF9PUEVOX0ZPUl9BTEwiLCJDSEFOR0VfRVZFTlRfREVUQUlMUyIsImluaXRpYWxpemVBcHAiLCJzZXRJbiIsInBhdGgiLCJkYXRhIiwicmVzb2x2ZSIsInJlamVjdCIsImRhdGFiYXNlIiwicmVmIiwic2V0Iiwib25jZSIsInNuYXBzaG90IiwicHVzaCIsInVuaXF1ZUtleSIsImtleSIsInVwZGF0ZSIsInJlbW92ZSIsInByb3ZpZGVyIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhSZWRpcmVjdCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXRSZWRpcmVjdFJlc3VsdCIsInJlc3VsdCIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJVU0VSX0lORk9fS0VZUyIsIlBBVEhfTUFQIiwiVVNFUlNfSU5GTyIsIlNFQVNPTl9USUNLRVRTIiwiYnVpbGRVc2VyIiwic2Vhc29uVGlja2V0cyIsIm1lcmdlIiwiZmV0Y2hBbGxVc2VycyIsInVzZXJSZWFkUHJvbWlzZXMiLCJ1c2Vyc0luZm8iLCJ0cmFuc2Zvcm0iLCJhY2MiLCJpbmZvIiwiZmV0Y2hTaW5nbGVVc2VyIiwidXNlcnNSZW1vdmVkIiwidXNlcnNSZWNlaXZlZCIsImZldGNoUHJvbWlzZSIsInVwZGF0ZVVzZXIiLCJ1c2VyVXBkYXRlUHJvbWlzZXMiLCJwaWNrIiwiaGFzIiwicmVtb3ZlVXNlciIsInVzZXJSZW1vdmVQcm9taXNlcyIsIm1hcCIsInVzZXJQYXRoIiwibWVzc2FnZSIsIkVWRU5UX0tFWVMiLCJFVkVOVFNfUEFUSCIsImV2ZW50UmVtb3ZlZCIsImV2ZW50SWQiLCJldmVudHNSZWNlaXZlZCIsImV2ZW50cyIsImNyZWF0ZUV2ZW50IiwiZXZlbnQiLCJ1cGRhdGVFdmVudCIsImV2ZW50VG9VcGRhdGUiLCJyZW1vdmVFdmVudCIsIkJPT0tJTkdfREFUQV9LRVlTIiwiQk9PS0lOR1NfUEFUSCIsImZldGNoVXNlckJvb2tpbmdzIiwidXNlckJvb2tpbmdzIiwiZmV0Y2hBbGxCb29raW5ncyIsImJvb2tpbmdzUmVjZWl2ZWQiLCJib29raW5ncyIsImJvb2tpbmdzQ2FuY2VsZWQiLCJ1cGRhdGVCb29raW5nIiwiYm9va2luZ0RhdGEiLCJib29raW5nRGF0YVRvVXBkYXRlIiwiY2FuY2VsQm9va2luZyIsInBhZ2UiLCJUUkFOU0xBVElPTlMiLCJob21lIiwiZGlzdHJpYnV0aW9uIiwiUmVhY3RSZWR1eCIsImNsYXNzTmFtZXMiLCJMb2dvIiwiaXNMb2FkaW5nIiwibG9hZGluZyIsIm92ZXJsYXlDbGFzcyIsIm92ZXJsYXkiLCJoaWRlIiwiYm9vbCIsIndpZHRoIiwib3BhY2l0eSIsIm51bWJlciIsImhlaWdodCIsIm5hdmlnYXRpb25Db25zdGFudHMiLCJjdXJyZW50VXNlciIsInBhZ2VJZCIsImdldFVzZXJUaXRsZSIsImZpcnN0TmFtZSIsImNyZWF0ZUhlYWRlciIsImJpbmQiLCJjcmVhdGVTbWFsbE1lbnVGb3JNb2JpbGUiLCJ0b2dnbGVNZW51VmlzaWJpbGl0eSIsImNyZWF0ZU1lbnUiLCJwYWdlcyIsImlzTWVudVZpc2libGUiLCJjcmVhdGVEZXNrdG9wTWVudUl0ZW0iLCJpdGVtQ2xhc3NlcyIsImFjdGl2ZSIsImJ1dHRvbiIsInNtYWxsIiwiY3JlYXRlTW9iaWxlTWVudUl0ZW0iLCJvbk1vYmlsZU1lbnVDbGlja2VkIiwiY3JlYXRlRGVza3RvcE1lbnUiLCJwaWNrQnkiLCJjcmVhdGVNb2JpbGVNZW51Iiwic2V0U3RhdGUiLCJjb25zdGFudHMiLCJlcnJvck1zZyIsImxvZ2luV2l0aEVtYWlsIiwic2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZCIsIm1zZyIsIkF1dGhGb3JtIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsImdldEluaXRpYWxTdGF0ZSIsInBhc3N3b3JkQWdhaW4iLCJhdXRoTW9kZSIsImlzTG9naW5Nb2RlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZ2V0QnV0dG9uTGFiZWwiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImlzU3VibWl0RGlzYWJsZWQiLCJoYW5kbGVTdWJtaXRDbGljayIsImdvVG9Mb2dpbiIsImdvVG9SZWdpc3RlciIsImdvVG9Gb3Jnb3RQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiaGFuZGxlUmVnaXN0ZXIiLCJpc0VxdWFsIiwiaGFuZGxlRm9yZ290UGFzc3dvcmQiLCJ0ZWFtc0RhdGEiLCJwYXJzZUV2ZW50RGF0ZSIsImV2ZW50RGF0ZSIsIkRhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJzZXRNb250aCIsImdldE1vbnRoIiwiaXNGdXR1cmVFdmVudCIsIm5vdyIsImJvb2tpbmciLCJvbWl0QnkiLCJzdGF0dXMiLCJjaGFpbiIsInNvcnRCeSIsImV2ZW50RGF0YSIsInR5cGVJZCIsImhvdXIiLCJtaW51dGUiLCJzdG9wRWRpdGluZyIsIkhBUE9FTF9KRVJVU0FMRU0iLCJnYW1lc0NvbnN0YW50cyIsImJvb2tpbmdzQ29uc3RhbnRzIiwiaXNCb29raW5nRW5hYmxlZCIsIlNUQVRVUyIsIm93blByb3BzIiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsImRhdGUiLCJ0aW1lIiwiaXNCb29raW5nQWxsb3dlZCIsImlzQm9va2VkIiwiaGFzSW4iLCJjcmVhdGVUZWFtTG9nb3MiLCJhd2F5IiwibG9nbyIsImxhYmVsIiwiY3JlYXRlRXZlbnRUaW1lQW5kRGF0ZSIsImlzT3BlbkZvckJvb2tpbmciLCJjcmVhdGVGdWxseUJvb2tlZExhYmVsIiwiZnVsbHlCb29rZWQiLCJjcmVhdGVCb29raW5nQnV0dG9uIiwib25Cb29raW5nIiwiYm9va0J1dHRvbiIsImJvb2siLCJlZGl0Qm9va2luZ0J1dHRvbiIsImVkaXRCb29raW5nIiwiY3JlYXRlQm9va2luZ0NhbmNlbGxhdGlvbkJ1dHRvbiIsIm9uQ2FuY2VsQm9va2luZyIsImNyZWF0ZUFjdGlvbnNCdXR0b25zIiwiRXZlbnRJdGVtIiwiaXNGdWxseUJvb2tlZCIsInNoYXBlIiwiY2xvc2VkIiwib3BlbkZvck1lbWJlcnMiLCJvcGVuRm9yQWxsIiwiZW1wdHlCb29raW5nIiwicGFpZFNlYXRzIiwiZXh0cmFTZWF0cyIsInBpY2tVcCIsImRyb3BPZmYiLCJib29raW5nRm9ybSIsIm9uU3VibWl0Iiwib25Cb29raW5nQ2FuY2VsIiwib25DbG9zZSIsImRlZmF1bHRzIiwicGlja1VwRW5hYmxlZCIsImRyb3BPZmZFbmFibGVkIiwidmFsaWRhdGlvblR5cGUiLCJ0ZXN0IiwidG9nZ2xlUGlja1VwIiwiY2hlY2tlZCIsInRvZ2dsZURyb3BPZmYiLCJvbk51bWVyaWNDaGFuZ2UiLCJ0b051bWJlciIsImlzRm9ybVZhbGlkIiwiYm9va2luZ1RvU3VibWl0Iiwia2V5cyIsImZvcm1GcmFtZVRyYW5zbGF0aW9ucyIsInRpdGxlIiwiY3JlYXRlQmFja0J1dHRvbiIsImlzRnVuY3Rpb24iLCJkaXNhYmxlZCIsIm9uUmVtb3ZlIiwiY3JlYXRlUmVtb3ZlQnV0dG9uIiwiUkVNT1ZFIiwiU1VCTUlUIiwiRm9ybUZyYW1lIiwiY2hpbGRyZW4iLCJ1c2VySW5mb0NvbnN0YW50cyIsInVzZXJGb3JtVHJhbnNsYXRpb25zIiwiZW1wdHlVc2VyIiwibGFzdE5hbWUiLCJwaG9uZVByZWZpeCIsInBob25lTnVtYmVyIiwic3RhdGlvbiIsInN1YnNjcmliZVNNUyIsInN1YnNjcmliZU1haWwiLCJnZXRFbXB0eVVzZXJJbmZvIiwiYXNzaWduIiwiaXNBZG1pbk1vZGUiLCJhbGxvd1VzZXJSZW1vdmUiLCJjcmVhdGVBZG1pblNlY3Rpb24iLCJvbk51bWJlckNoYW5nZSIsInRpbWVzIiwiaSIsImNyZWF0ZVVzZXJOYW1lSW5wdXRzIiwib25UZXh0Q2hhbmdlIiwiRklSU1RfTkFNRSIsIkxBU1RfTkFNRSIsImNyZWF0ZUVtYWlsSW5wdXQiLCJjcmVhdGVQaG9uZU51bWJlcklucHV0cyIsIlBIT05FX05VTUJFUiIsIlBIT05FX1BSRUZJWCIsInByZWZpeCIsImNyZWF0ZVBpY2t1cFN0YXRpb25Sb3ciLCJyZXF1ZXN0Rm9yTWVtYmVyc2hpcCIsIm9uQm9vbGVhbkNoYW5nZSIsImNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCIsIkZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OIiwiY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCIsIlJFUVVFU1RfRk9SX01FTUJFUlNISVAiLCJ1bmRlZmluZWQiLCJkaXNwbGF5IiwiY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzIiwiVE9HR0xFIiwiWUVTIiwiTk8iLCJVc2VyRm9ybSIsImhhc0FsbFJlcXVpcmVkSW5mbyIsInJlcXVpcmVkSW5mbyIsInNvbWUiLCJoYXNWYWxpZFBob25lTnVtYmVyIiwibGVuZ3RoIiwiaGFzUmVxdWVzdEZvck1lbWJlcnNoaXBQcm9wZXJ0eSIsIm9uS2V5UHJlc3MiLCJCb29sZWFuIiwicGFyc2VJbnQiLCJjbG9uZSIsIlRJVExFIiwicGlja1VzZXJzRnVuY3Rpb25zIiwiTUVNQkVSUyIsIk5PTl9NRU1CRVJTIiwiUkVRVUVTVFMiLCJlZGl0aW5nVXNlcklkIiwic2VhcmNoUXVlcnkiLCJmaWx0ZXIiLCJzdGFydHNXaXRoIiwidmFsdWVzIiwic3VtQnkiLCJzaXplIiwiTGlzdEl0ZW0iLCJvbkNsaWNrIiwiaW1hZ2VTcmMiLCJzdWJ0aXRsZXMiLCJzdWJ0aXRsZSIsImFycmF5IiwicGlja0V2ZW50cyIsImdldFN0YXR1c1N1YnRpdGxlIiwiZXZlbnRTdGF0dXMiLCJmaW5kIiwiZWRpdGluZ0V2ZW50SWQiLCJjcmVhdGVNb2RlIiwiZXZlbnRUeXBlIiwiZW1wdHlFdmVudCIsImV2ZW50Rm9ybSIsIm9uUmVtb3ZlRXZlbnQiLCJkYXRlSW5wdXRTdXBwb3J0ZWQiLCJ0aW1lSW5wdXRTdXBwb3J0ZWQiLCJjb21wb25lbnREaWRNb3VudCIsImNoZWNrSWZIdG1sNVN1cHBvcnRlZCIsImdldEV2ZW50UGljdHVyZSIsImdldFRpbWVWYWx1ZSIsImpvaW4iLCJvblRpbWVDaGFuZ2UiLCJzcGxpdCIsImdldERhdGVWYWx1ZSIsInN1cHBvcnRlZElucHV0VHlwZXMiLCJ0ZXN0UmVzdWx0IiwidGVzdFN0cmluZyIsImVhY2giLCJpbnB1dFR5cGUiLCJpbnB1dCIsImlzU3VwcG9ydGVkIiwib25EYXRlQ2hhbmdlIiwib21pdCIsImdldERyb3BPZmZNYXAiLCJnZXRQaWNrVXBNYXAiLCJmaW5kS2V5IiwiYm9va2luZ0ZvckV2ZW50TWFwIiwibWFwVmFsdWVzIiwiaXNVbmRlZmluZWQiLCJjdXJyZW50RXZ0IiwiZ2V0Qm9va2luZ1Bob25lIiwidmlzaWJsZUJvb2tpbmdzIiwiZ2V0VmlzaWJsZUJvb2tpbmdzIiwidGx2UGlja1Vwc1BhaWQiLCJ0bHZQaWNrVXBzRXh0cmEiLCJtb2RpaW5QaWNrVXBzUGFpZCIsIm1vZGlpblBpY2tVcHNFeHRyYSIsInRsdkRyb3BPZmZzUGFpZCIsInRsdkRyb3BPZmZzRXh0cmEiLCJtb2RpaW5Ecm9wT2Zmc1BhaWQiLCJtb2RpaW5Ecm9wT2Zmc0V4dHJhIiwiZ2V0TWVtYmVyc1VzZXJzT25seSIsImdldEJvb2tlZFVzZXJzT25seSIsImdldFJlY2lwaWVudHMiLCJyZWNpcGllbnRzVHlwZSIsInJlY2lwaWVudHNVc2VycyIsImdldFVzZXJzRW1haWxzIiwicmVjaXBpZW50cyIsImdldFVzZXJzUGhvbmVOdW1iZXJzIiwiZ2V0RXZlbnRTdWJzdGl0dXRpb25zIiwicHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCIsImNvbnRlbnQiLCJyZXBsYWNlIiwiZGlzdHJpYnV0aW9uTWV0aG9kIiwiZGlzdHJpYnV0aW9uVHlwZSIsImxhc3QiLCJ0ZW1wbGF0ZUlkIiwic3ViamVjdCIsInNlbmRUZW1wbGF0ZUVtYWlsIiwic3Vic3RpdHV0aW9ucyIsInNlbmRDdXN0b21FbWFpbCIsInNlbmRTTVMiLCJnZXRPcGVuRXZlbnRzIiwiaXNEaXN0cmlidXRpb25UeXBlVmlzaWJsZSIsIkVNQUlMUyIsInRvIiwiRWRpdG9yVXNlckluZm9QYWdlIiwib25Gb3JtQ2xvc2UiLCJtYWtlU3RvcmUiLCJyZWR1Y2VycyIsIm1pZGRsZXdhcmUiLCJlcnJvclJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJsb2FkaW5nUmVkdWNlciIsInVzZXJzUmVkdWNlciIsImV2ZW50c1JlZHVjZXIiLCJjbG9uZWRCb29raW5ncyIsImNsb25lRGVlcCIsImF1dGhEYXRhUmVkdWNlciIsIm5hdmlnYXRpb25SZWR1Y2VyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0tBQVlBLE07O0FBQ1o7O0tBQVlDLFE7Ozs7OztBQUVaQSxVQUFTQyxVQUFULENBQW9CRixPQUFPRyxRQUEzQjs7QUFFQSxvQkFBU0MsTUFBVCxDQUFnQixnQkFBTUMsYUFBTixnQkFBaEIsRUFBMkNDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBM0MsRTs7Ozs7Ozs7QUNUQSx3Qjs7Ozs7O0FDQUEsMkI7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7OztLQUVNQyxJOzs7Ozs7Ozs7OzttQ0FDVTtBQUNaLGNBQU8sMkJBQVA7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QU5KO0FBUUQsRTs7Ozs7Ozs7Ozs7Ozs7O21CQ1J1QnNnQixpQjs7QUFMeEI7O0tBQVkzZSxTOztBQUNaOzs7O0FBRUEsS0FBTW1lLGVBQWVuZSxVQUFVbkIsS0FBVixDQUFnQlMsSUFBaEIsQ0FBcUJQLEdBQTFDOztBQUVlLFVBQVM0ZixpQkFBVCxHQUE4RDtBQUFBLE9BQW5DdGdCLEtBQW1DLHVFQUEzQjhmLFlBQTJCO0FBQUEsT0FBYkMsTUFBYSx1RUFBSixFQUFJOztBQUMzRSxXQUFRQSxPQUFPamQsSUFBZjtBQUNFO0FBQ0UsY0FBT2lkLE9BQU9oVCxJQUFkO0FBQ0Y7QUFDRSxjQUFPK1MsWUFBUDtBQUNGO0FBQ0UsY0FBTzlmLEtBQVA7QUFOSjtBQVFELEU7Ozs7Ozs7O0FDZEQsNkI7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWZkY2ExNWQwY2YxZjBmODQ0MjMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUm9vdCBmcm9tICcuL2NvbXBvbmVudHMvcm9vdC9yb290JztcblxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJ2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuL3V0aWxzL2NsaWVudERCJztcblxuY2xpZW50REIuaW5pdGlhbGl6ZShjb25maWcuZmlyZWJhc2UpO1xuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSb290KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm9vdC5ydCc7XG5cbmltcG9ydCB7IG1ha2VTdG9yZSB9IGZyb20gJy4uLy4uL3JlZHV4L21ha2VTdG9yZSc7XG5cbmNsYXNzIFJvb3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjcmVhdGVTdG9yZSgpIHtcbiAgICByZXR1cm4gbWFrZVN0b3JlKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvb3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICdyZWFjdC1yZWR1eCcsXG4gICAgJy4uL2FwcCdcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgUmVhY3RSZWR1eCwgQXBwKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0UmVkdXguUHJvdmlkZXIsIHsgJ3N0b3JlJzogdGhpcy5jcmVhdGVTdG9yZSgpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCB7fSkpO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jvb3Qvcm9vdC5ydFxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJfXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RSZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmV1ZHggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBhdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMnKTtcbmNvbnN0IG5hdmlnYXRpb25Db25zdGF0bnMgPSByZXF1aXJlKCcuLi91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzJyk7XG5cbmNvbnN0IFNwaW5uZXIgPSByZXF1aXJlKCcuL3NwaW5uZXInKTtcbmNvbnN0IFRvcEJhciA9IHJlcXVpcmUoJy4vdG9wQmFyJyk7XG5jb25zdCBBdXRoUGFnZSA9IHJlcXVpcmUoJy4vYXV0aFBhZ2UvYXV0aFBhZ2UnKTtcbmNvbnN0IEhvbWVQYWdlID0gcmVxdWlyZSgnLi9ob21lUGFnZS9ob21lUGFnZScpO1xuY29uc3QgVXNlcnNQYWdlID0gcmVxdWlyZSgnLi91c2Vyc1BhZ2UvdXNlcnNQYWdlJyk7XG5jb25zdCBFdmVudHNQYWdlID0gcmVxdWlyZSgnLi9ldmVudHNQYWdlL2V2ZW50c1BhZ2UnKTtcbmNvbnN0IEJvb2tpbmdzUGFnZSA9IHJlcXVpcmUoJy4vYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZScpO1xuY29uc3QgRGlzdHJpYnV0aW9uUGFnZSA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlJyk7XG5jb25zdCBFZGl0VXNlckluZm9QYWdlID0gcmVxdWlyZSgnLi9lZGl0VXNlckluZm9QYWdlJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9hcHAuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoRGF0YTogc3RhdGUuYXV0aERhdGEsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBzdGF0ZS5jdXJyZW50UGFnZVxuICAgIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBmZXRjaEF1dGhEYXRhOiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5mZXRjaEF1dGhEYXRhKCkpXG59KTtcblxuZnVuY3Rpb24gZ2V0UGFnZUNvbXBvbmVudChjdXJyZW50UGFnZUlkKSB7XG4gICAgc3dpdGNoIChjdXJyZW50UGFnZUlkKSB7XG4gICAgICAgIGNhc2UgbmF2aWdhdGlvbkNvbnN0YXRucy5QQUdFUy5IT01FLnZhbDpcbiAgICAgICAgICAgIHJldHVybiAoIDxIb21lUGFnZSBrZXk9J2hvbWUtcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBuYXZpZ2F0aW9uQ29uc3RhdG5zLlBBR0VTLlVTRVJTLnZhbDpcbiAgICAgICAgICAgIHJldHVybiAoIDxVc2Vyc1BhZ2Uga2V5PSd1c2Vycy1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIG5hdmlnYXRpb25Db25zdGF0bnMuUEFHRVMuRVZFTlRTLnZhbDpcbiAgICAgICAgICAgIHJldHVybiAoIDxFdmVudHNQYWdlIGtleT0nZXZlbnRzLXBhZ2UnIC8+ICk7XG4gICAgICAgIGNhc2UgbmF2aWdhdGlvbkNvbnN0YXRucy5QQUdFUy5CT09LSU5HUy52YWw6XG4gICAgICAgICAgICByZXR1cm4gKCA8Qm9va2luZ3NQYWdlIGtleT0nYm9va2luZ3MtcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBuYXZpZ2F0aW9uQ29uc3RhdG5zLlBBR0VTLkRJU1RSSUJVVElPTi52YWw6XG4gICAgICAgICAgICByZXR1cm4gKCA8RGlzdHJpYnV0aW9uUGFnZSBrZXk9J2Rpc3RyaWJ1dGlvbi1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIG5hdmlnYXRpb25Db25zdGF0bnMuUEFHRVMuRURJVF9VU0VSX0lORk8udmFsOlxuICAgICAgICAgICAgcmV0dXJuICggPEVkaXRVc2VySW5mb1BhZ2Uga2V5PSdlZGl0VXNlckluZm8tcGFnZScgLz4gKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhZ2VUb1JlbmRlcihhdXRoRGF0YSwgY3VycmVudFBhZ2VJZCkge1xuICAgIGlmICghYXV0aERhdGEgJiYgY3VycmVudFBhZ2VJZCA9PT0gbmF2aWdhdGlvbkNvbnN0YXRucy5QQUdFUy5BVVRILnZhbCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QXV0aFBhZ2UgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VG9wQmFyIC8+XG4gICAgICAgICAgICB7IGdldFBhZ2VDb21wb25lbnQoY3VycmVudFBhZ2VJZCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEF1dGhEYXRhKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlIGxhcmdlLTYgc21hbGwtMTIgc21hbGwtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgICAgIHsgZ2V0UGFnZVRvUmVuZGVyKHRoaXMucHJvcHMuYXV0aERhdGEsIHRoaXMucHJvcHMuY3VycmVudFBhZ2UpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgICBhdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjdXJyZW50UGFnZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGZldGNoQXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZXVkeC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC5qc3giLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNFVF9BVVRIX0RBVEEsIFNJR05fT1VUIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmltcG9ydCB7IFByb21pc2UgfSBmcm9tICdibHVlYmlyZCc7XG5cbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi91c2VyQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBldmVudEFjdGlvbnMgZnJvbSAnLi9ldmVudEFjdGlvbnMnO1xuaW1wb3J0ICogYXMgYm9va2luZ0FjdGlvbnMgZnJvbSAnLi9ib29raW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uQWN0aW9ucyBmcm9tICcuL25hdmlnYXRpb25BY3Rpb25zJztcblxuaW1wb3J0IHVwZGF0ZVBob3RvVXJsRml4ZXIgZnJvbSAnLi4vLi4vZGF0YUZpeGVycy91cGRhdGVQaG90b1VybEZpeGVyJztcblxuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1JfQ09ERVNfTUFQID0ge1xuICAnYXV0aC9pbnZhbGlkLWVtYWlsJzogQ29uc3RhbnRzLkVSUk9SUy5JTlZBTElEX01BSUwsXG4gICdhdXRoL3dlYWstcGFzc3dvcmQnOiBDb25zdGFudHMuRVJST1JTLldFQUtfUEFTU1dPUkQsXG4gICdhdXRoL2VtYWlsLWFscmVhZHktaW4tdXNlJzogQ29uc3RhbnRzLkVSUk9SUy5FTUFJTF9JTl9VU0UsXG4gICdhdXRoL3dyb25nLXBhc3N3b3JkJzogQ29uc3RhbnRzLkVSUk9SUy5XUk9OR19QQVNTV09SRCxcbiAgJ2F1dGgvYWNjb3VudC1leGlzdHMtd2l0aC1kaWZmZXJlbnQtY3JlZGVudGlhbCc6IENvbnN0YW50cy5FUlJPUlMuRU1BSUxfSU5fVVNFLFxuICAnYXV0aC91c2VyLW5vdC1mb3VuZCc6IENvbnN0YW50cy5FUlJPUlMuVVNFUl9OT1RfRk9VTkRcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBdXRoRGF0YSA9ICh1aWQsIGVtYWlsLCBwaG90b1VSTCwgaXNBZG1pbikgPT4gKHtcbiAgdHlwZTogU0VUX0FVVEhfREFUQSxcbiAgdWlkLFxuICBlbWFpbCxcbiAgcGhvdG9VUkwsXG4gIGlzQWRtaW5cbn0pO1xuXG5jb25zdCBmZXRjaEFwcERhdGEgPSAoZGlzcGF0Y2gsIHVzZXIpID0+XG4gIGNsaWVudERCLnJlYWQoJ2FkbWlucy8nICsgdXNlci51aWQpXG4gICAgLnRoZW4oaXNBZG1pbiA9PiBkaXNwYXRjaChzZXRBdXRoRGF0YSh1c2VyLnVpZCwgdXNlci5lbWFpbCwgXy5nZXQodXNlciwgWydwcm92aWRlckRhdGEnLCAwLCAncGhvdG9VUkwnXSksICEhaXNBZG1pbikpKVxuICAgIC50aGVuKCgpID0+IFByb21pc2UuYWxsKFtcbiAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb25zLmZldGNoVXNlcnMoKSksXG4gICAgICBkaXNwYXRjaChldmVudEFjdGlvbnMuZmV0Y2hFdmVudHMoKSksXG4gICAgICBkaXNwYXRjaChib29raW5nQWN0aW9ucy5mZXRjaEJvb2tpbmdzKCkpXG4gICAgXSkpO1xuXG5leHBvcnQgY29uc3QgdXNlclNpZ25lZE91dCA9ICgpID0+ICh7XG4gIHR5cGU6IFNJR05fT1VUXG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ25PdXQgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuc2lnbk91dCgpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlclNpZ25lZE91dCgpKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5QQUdFUy5BVVRILnZhbCkpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEZhY2Vib29rID0gKCkgPT4gKCkgPT4gY2xpZW50REIubG9naW5XaXRoRmFjZWJvb2soKTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEdvb2dsZSA9ICgpID0+ICgpID0+IGNsaWVudERCLmxvZ2luV2l0aEdvb2dsZSgpO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5sb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbih1c2VyID0+IGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcikpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUEFHRVMuSE9NRS52YWwpKSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbih1c2VyID0+IGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcikpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUEFHRVMuRURJVF9VU0VSX0lORk8udmFsKSkpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IGVtYWlsID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXV0aERhdGEgPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuZ2V0TG9nZ2VkSW5Vc2VyKClcbiAgICAudGhlbih1c2VyID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmZXRjaEFwcERhdGEoZGlzcGF0Y2gsIHVzZXIpXG4gICAgICAgICAgLnRoZW4oKCkgPT4gdXBkYXRlUGhvdG9VcmxGaXhlcihkaXNwYXRjaCwgZ2V0U3RhdGUoKSkpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBnZXRTdGF0ZSgpLnVzZXJzW3VzZXIudWlkXTtcbiAgICAgICAgICAgIGlmIChfLmlzRW1wdHkodXNlckluZm8pKSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlBBR0VTLkVESVRfVVNFUl9JTkZPLnZhbCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUEFHRVMuSE9NRS52YWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihkYkVycm9yKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpXG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwiZXhwb3J0IGNvbnN0IFNUQVJUX0xPQURJTkcgPSAnU1RBUlRfTE9BRElORyc7XG5leHBvcnQgY29uc3QgU1RPUF9MT0FESU5HID0gJ1NUT1BfTE9BRElORyc7XG5cbmV4cG9ydCBjb25zdCBSRVBPUlRfRVJST1IgPSAnUkVQT1JUX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IFNFVF9BVVRIX0RBVEEgPSAnU0VUX0FVVEhfREFUQSc7XG5leHBvcnQgY29uc3QgU0lHTl9PVVQgPSAnU0lHTl9PVVQnO1xuXG5leHBvcnQgY29uc3QgVVNFUlNfUkVDRUlWRUQgPSAnVVNFUlNfUkVDRUlWRUQnO1xuZXhwb3J0IGNvbnN0IFVTRVJfUkVNT1ZFRCA9ICdVU0VSX1JFTU9WRUQnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRTX1JFQ0VJVkVEID0gJ0VWRU5UU19SRUNFSVZFRCc7XG5leHBvcnQgY29uc3QgRVZFTlRfUkVNT1ZFRCA9ICdFVkVOVF9SRU1PVkVEJztcblxuZXhwb3J0IGNvbnN0IEJPT0tJTkdTX1JFQ0VJVkVEID0gJ0JPT0tJTkdTX1JFQ0VJVkVEJztcbmV4cG9ydCBjb25zdCBCT09LSU5HX0NBTkNFTEVEID0gJ0JPT0tJTkdfQ0FOQ0VMRUQnO1xuXG5leHBvcnQgY29uc3QgTkFWSUdBVEVfVE8gPSAnTkFWSUdBVEVfVE8nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvblR5cGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVJST1JTOiB7XG4gICAgR0VORVJBTDogJ9ep15LXmdeQ15Qg15HXntei16jXm9eqJyxcbiAgICBJTlZBTElEX01BSUw6ICfXkNeZ157XmdeZ15wg15zXkCDXqten15nXny4nLFxuICAgIFdFQUtfUEFTU1dPUkQ6ICfXlNeh15nXodee15Ag16bXqNeZ15vXlCDXnNeU15vXmdecINec16TXl9eV16ogNiDXqteV15XXmdedLicsXG4gICAgRU1BSUxfSU5fVVNFOiAn15DXmdee15nXmdecINeR16nXmdee15XXqS4g15DXoNeQINeR15fXqCDXk9eo15og15TXqteX15HXqNeV16og15DXl9eo16ouJyxcbiAgICBXUk9OR19QQVNTV09SRDogJ9eh15nXodee15Ag15zXkCDXoNeb15XXoNeULicsXG4gICAgTk9UX1NBTUVfUEFTU1dPUkQ6ICfXodeZ16HXnteQ15XXqiDXpteo15nXm9eV16og15zXlNeZ15XXqiDXlteU15XXqi4nLFxuICAgIFVTRVJfTk9UX0ZPVU5EOiAn15vXqteV15HXqiDXlNeQ15nXmdee15nXnCDXnNeQINeg157XpteQ15QuJ1xuICB9LFxuXG4gIERBVEVfVElNRV9EQVRBOiB7XG4gICAgZGF5czogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcyNScsICcyNicsICcyNycsICcyOCcsICcyOScsICczMCcsICczMSddLFxuICAgIG1vbnRoczogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddLFxuICAgIHllYXJzOiBbJzE2JywgJzE3J10sXG4gICAgaG91cnM6IFsnMDAnLCAnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnXSxcbiAgICBtaW51dGVzOiBbJzAwJywgJzA1JywgJzEwJywgJzE1JywgJzIwJywgJzI1JywgJzMwJywgJzM1JywgJzQwJywgJzQ1JywgJzUwJywgJzU1J11cbiAgfSxcblxuICBFVkVOVF9ERUZBVUxUX1BJQzogJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEyNC8xMjQxNTAuc3ZnJyxcbiAgRVZFTlRTX1RZUEVTOiB7XG4gICAgJ2hhcG9lbC10bHYnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYXBvZWx0YS5wbmcnLFxuICAgICAgbmFtZTogJ9eU16TXldei15wg16rXnCDXkNeR15nXkSdcbiAgICB9LFxuICAgICdtYWNjYWJpLXRsdic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX21hY2NhYmkucG5nJyxcbiAgICAgIG5hbWU6ICfXnteb15HXmSDXqtecINeQ15HXmdeRJ1xuICAgIH0sXG4gICAgJ2hlcnplbGl5YSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3NoYXJvbi5wbmcnLFxuICAgICAgbmFtZTogJ9eR16DXmSDXlNeo16bXnNeZ15QnXG4gICAgfSxcbiAgICAna2lyeWF0LWdhdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL0ltYWdlcy90ZWFtcy9iaWdHYXQucG5nJyxcbiAgICAgIG5hbWU6ICfXnteb15HXmSDXp9eo15nXqiDXkteqJ1xuICAgIH0sXG4gICAgJ2dpbGJvYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX0dhbGlsLnBuZycsXG4gICAgICBuYW1lOiAn15LXnNeZ15wv15LXnNeR15XXoidcbiAgICB9LFxuICAgICduYWhhcml5YSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX25haGFyaWEucG5nJyxcbiAgICAgIG5hbWU6ICfXoteZ16jXldeg15kg16DXlNeo15nXlCdcbiAgICB9LFxuICAgICdob2xvbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9hcnRpY2xlcy9sb2dvX2hoLnBuZycsXG4gICAgICBuYW1lOiAn15TXpNeV16LXnCDXl9eV15zXldefJ1xuICAgIH0sXG4gICAgJ2FzaGRvZCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2FzaGRvZC5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeQ16nXk9eV15MnXG4gICAgfSxcbiAgICAnaGFpZmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYWlmYS5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeX15nXpNeUJ1xuICAgIH0sXG4gICAgJ3Jpc2hvbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3Jpc2hvbi5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeo15DXqdeV158g15zXpteZ15XXnydcbiAgICB9LFxuICAgICdlaWxhdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2VpbGF0LnBuZycsXG4gICAgICBuYW1lOiAn15TXpNeV16LXnCDXkNeZ15zXqidcbiAgICB9LFxuICAgICdsanVibGphbmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzgvOGUvVW5pb25fb2xpbXBpamEucG5nLzE0MHB4LVVuaW9uX29saW1waWphLnBuZycsXG4gICAgICBuYW1lOiAn15zXldeR15zXmdeQ16DXlCdcbiAgICB9LFxuICAgICd2YWxlbmNpYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly9zYW12YW5yb3Nzb20uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzEwL3ZhbGVuY2lhLWJhc2tldDEtbG9nby5qcGcnLFxuICAgICAgbmFtZTogJ9eV15zXoNeh15nXlCdcbiAgICB9LFxuICAgICdrdWJhbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMC8wNC9Mb2tvbW90aXZfS3ViYW5fbG9nby5wbmcvMjAwcHgtTG9rb21vdGl2X0t1YmFuX2xvZ28ucG5nJyxcbiAgICAgIG5hbWU6ICfXnNeV16fXldee15XXmNeZ15Eg16fXldeR15DXnydcbiAgICB9LFxuICAgICdmdWVubGFicmFkYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xMy9CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnLzExMHB4LUJhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcnLFxuICAgICAgbmFtZTogJ9ek15XXkNeg15zXkdeo15PXlCdcbiAgICB9LFxuICAgICd1bG0nOiB7XG4gICAgICBzcmM6ICdodHRwOi8vbmFjaHd1Y2hzLmJidTAxLmNvbS9tb2R1bGVzL21vZF9iYnVuZXdzZmxhc2gvYXNzZXRzL2ltYWdlcy9ub2ltYWdlX3RodW1iLmpwZycsXG4gICAgICBuYW1lOiAn15DXldec150nXG4gICAgfSxcbiAgICAndmlsbmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzcvNzUvQkNfTGlldHV2b3NfUnl0YXNfbG9nby5zdmcvOTA3cHgtQkNfTGlldHV2b3NfUnl0YXNfbG9nby5zdmcucG5nJyxcbiAgICAgIG5hbWU6ICfXqNeZ15jXkNehINeV15nXnNeg15QnXG4gICAgfSxcbiAgICAnbm92Z29yb2QnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vb2x5bXBpYWtvcy1saXZlLmdyL2ltZy90ZWFtcy9OaXpobnklMjBOb3Znb3JvZC5wbmcnLFxuICAgICAgbmFtZTogJ9eg15nXltez16DXmSdcbiAgICB9LFxuICAgICd6ZW5pdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI1L0ZDX1plbml0XzFfc3Rhcl8yMDE1X2xvZ28ucG5nLzIyMHB4LUZDX1plbml0XzFfc3Rhcl8yMDE1X2xvZ28ucG5nJyxcbiAgICAgIG5hbWU6ICfXlteg15nXmCdcbiAgICB9XG4gIH0sXG4gIFNUQVRJT05TOiB7XG4gICAgbW9kaWluOiAn157XldeT15nXoteZ158nLFxuICAgIHRsdjogJ9eq15wg15DXkdeZ15EnXG4gIH0sXG4gIE1BWF9TRUFTT05fVElDS0VUUzogNyxcbiAgTUFYX0VYVFJBX1BBU1NFTkdFUlM6IDQsXG4gIFBIT05FX1BSRUZJWEVTOiBbJzA1MCcsICcwNTInLCAnMDUzJywgJzA1NCcsICcwNTUnLCAnMDU3JywgJzA1OCddLFxuICBQQUdFUzoge1xuICAgIEhPTUU6IHt2YWw6ICdob21lJywgbmFtZTogJ9eT16Mg15TXkdeZ16onLCB2aXNpYmxlOiB0cnVlfSxcbiAgICBBVVRIOiB7dmFsOiAnYXV0aCcsIG5hbWU6ICcnfSxcbiAgICBVU0VSUzoge3ZhbDogJ3VzZXJzJywgbmFtZTogJ9ee16nXqtee16nXmdedJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgRVZFTlRTOiB7dmFsOiAnZXZlbnRzJywgbmFtZTogJ9eQ15nXqNeV16LXmdedJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgQk9PS0lOR1M6IHt2YWw6ICdib29raW5ncycsIG5hbWU6ICfXqNep15XXnteZ150g15zXlNeh16LXldeqJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgRElTVFJJQlVUSU9OOiB7dmFsOiAnZGlzdHJpYnV0aW9uJywgbmFtZTogJ9ee15nXmdec15nXnScsIHZpc2libGU6IHRydWV9LFxuICAgIEVESVRfVVNFUl9JTkZPOiB7dmFsOiAnZWRpdFVzZXJJbmZvJywgbmFtZTogJyd9XG4gIH0sXG4gIEVWRU5UU19TVEFUVVM6IHtcbiAgICBDTE9TRUQ6IHtcbiAgICAgIHZhbHVlOiAnY2xvc2VkJyxcbiAgICAgIG5hbWU6ICfXlNeU16jXqdee15Qg16HXkteV16jXlCdcbiAgICB9LFxuICAgIE9QRU5fRk9SX01FTUJFUlM6IHtcbiAgICAgIHZhbHVlOiAnb3BlbkZvck1lbWJlcnMnLFxuICAgICAgbmFtZTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec157XoNeV15nXmSDXlNeh16LXldeqJ1xuICAgIH0sXG4gICAgT1BFTl9GT1JfQUxMOiB7XG4gICAgICB2YWx1ZTogJ29wZW5Gb3JBbGwnLFxuICAgICAgbmFtZTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec15vXldec150nXG4gICAgfSxcbiAgICBGVUxMWV9CT09LRUQ6IHtcbiAgICAgIHZhbHVlOiAnZnVsbHlCb29rZWQnLFxuICAgICAgbmFtZTogJ9eU15TXodei15Qg157XnNeQ15QnXG4gICAgfVxuICB9LFxuICBESVNUUklCVVRJT046IHtcbiAgICBSRUNJUElFTlRTOiB7XG4gICAgICBBTEw6IHtcbiAgICAgICAgdmFsdWU6ICdhbGxVc2VycycsXG4gICAgICAgIG5hbWU6ICfXm9ec15wg15TXntep16rXntep15nXnSdcbiAgICAgIH0sXG4gICAgICBNRU1CRVJTX09OTFk6IHtcbiAgICAgICAgdmFsdWU6ICdtZW1iZXJzT25seScsXG4gICAgICAgIG5hbWU6ICfXnteg15XXmdeZ150g15HXnNeR15MnXG4gICAgICB9LFxuICAgICAgQk9PS0VEX1RPX0VWRU5UOiB7XG4gICAgICAgIHZhbHVlOiAnYm9va2VkVG9FdmVudCcsXG4gICAgICAgIG5hbWU6ICfXqNep15XXnteZ150g15zXlNeh16LXlCdcbiAgICAgIH1cbiAgICB9LFxuICAgIE1FVEhPRFM6IHtcbiAgICAgIEVNQUlMOiAnZW1haWwnLFxuICAgICAgU01TOiAnc21zJ1xuICAgIH0sXG4gICAgVFlQRVM6IHtcbiAgICAgIFRFTVBMQVRFOiAndGVtcGxhdGUnLFxuICAgICAgQ1VTVE9NOiAnY3VzdG9tJ1xuICAgIH0sXG4gICAgVEVNUExBVEVTOiB7XG4gICAgICBFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTOiB7XG4gICAgICAgIGlkOiAnNGZhYjZiOTItYmY2MS00OGYxLWIxM2ItYmM3MDJlZDc4Njk1JyxcbiAgICAgICAgbmFtZTogJ9ek16rXmdeX16og15TXqNep157XlCDXnNee16DXldeZ15nXnSdcbiAgICAgIH0sXG4gICAgICBFVkVOVF9PUEVOX0ZPUl9BTEw6IHtcbiAgICAgICAgaWQ6ICdkYmUzZTBlNC1iYjBlLTQxYWQtYmYxMi01YmU2NGEzMGYzYjcnLFxuICAgICAgICBuYW1lOiAn16TXqteZ15fXqiDXlNeo16nXnteUINec15vXldec150nXG4gICAgICB9LFxuICAgICAgQ0hBTkdFX0VWRU5UX0RFVEFJTFM6IHtcbiAgICAgICAgaWQ6ICcxNzBmY2Q0Zi1kZjJlLTQ0ZGQtYjc2MC02OTNkMDRmZGQwN2MnLFxuICAgICAgICBuYW1lOiAn16nXmdeg15XXmSDXkdee15XXoteTINeU15DXmdeo15XXoidcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemUgPSBjb25maWcgPT4ge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SW4gPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5zZXQoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZWFkID0gcGF0aCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9uY2UoJ3ZhbHVlJylcbiAgICAudGhlbihzbmFwc2hvdCA9PiByZXNvbHZlKHNuYXBzaG90LnZhbCgpKSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcHVzaCA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IHVuaXF1ZUtleSA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnB1c2goKS5rZXk7XG4gIHNldEluKHBhdGggKyAnLycgKyB1bmlxdWVLZXksIGRhdGEpXG4gICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSh1bmlxdWVLZXkpKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS51cGRhdGUoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSBwYXRoID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkucmVtb3ZlKClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhHb29nbGUgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChwcm92aWRlcilcbiAgICAudGhlbihyZXNvbHZlKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRmFjZWJvb2sgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKVxuICAgIC50aGVuKHJlc29sdmUpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBlbWFpbCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluVXNlciA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmdldFJlZGlyZWN0UmVzdWx0KClcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0LnVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2UgPSB1c2VyID0+IHtcbiAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkucmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgICAgIHJlc29sdmUodXNlcik7XG4gICAgICAgIH07XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmlyZWJhc2VcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBVU0VSU19SRUNFSVZFRCwgVVNFUl9SRU1PVkVEIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnYmx1ZWJpcmQnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IFVTRVJfSU5GT19LRVlTID0gWydlbWFpbCcsICdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAncGhvbmVQcmVmaXgnLCAncGhvbmVOdW1iZXInLCAncmVxdWVzdEZvck1lbWJlcnNoaXAnLCAnc3RhdGlvbicsICdzdWJzY3JpYmVTTVMnLCAnc3Vic2NyaWJlTWFpbCcsICdwaG90b1VSTCddO1xuY29uc3QgUEFUSF9NQVAgPSB7XG4gIFVTRVJTX0lORk86ICd1c2Vyc0luZm8nLFxuICBTRUFTT05fVElDS0VUUzogJ3NlYXNvblRpY2tldHMnLFxuICBCT09LSU5HUzogJ2Jvb2tpbmdzJ1xufTtcblxuY29uc3QgYnVpbGRVc2VyID0gKHVzZXJJbmZvLCBzZWFzb25UaWNrZXRzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBfLm1lcmdlKHt9LCB1c2VySW5mbyk7XG4gIGlmIChzZWFzb25UaWNrZXRzKSB7XG4gICAgXy5tZXJnZSh1c2VyLCB7IHNlYXNvblRpY2tldHMgfSk7XG4gIH1cbiAgcmV0dXJuIHVzZXI7XG59O1xuXG5jb25zdCBmZXRjaEFsbFVzZXJzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUylcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJzSW5mbywgc2Vhc29uVGlja2V0c10pID0+XG4gICAgICBfLnRyYW5zZm9ybSh1c2Vyc0luZm8sIChhY2MsIGluZm8sIHVpZCkgPT4ge1xuICAgICAgICBhY2NbdWlkXSA9IGJ1aWxkVXNlcihpbmZvLCBzZWFzb25UaWNrZXRzICYmIHNlYXNvblRpY2tldHNbdWlkXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIH0sIHt9KVxuICAgICk7XG59O1xuXG5jb25zdCBmZXRjaFNpbmdsZVVzZXIgPSB1aWQgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyArICcvJyArIHVpZCksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUyArICcvJyArIHVpZClcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJJbmZvLCBzZWFzb25UaWNrZXRzXSkgPT4ge1xuICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgIHJldHVybiB7IFt1aWRdOiBidWlsZFVzZXIodXNlckluZm8sIHNlYXNvblRpY2tldHMpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1JlbW92ZWQgPSB1aWQgPT4gKHtcbiAgdHlwZTogVVNFUl9SRU1PVkVELFxuICB1aWRcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlcnNSZWNlaXZlZCA9IHVzZXJzID0+ICh7XG4gIHR5cGU6IFVTRVJTX1JFQ0VJVkVELFxuICB1c2Vyc1xufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBjb25zdCB1aWQgPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ3VpZCddKTtcbiAgY29uc3QgaXNBZG1pbiA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAnaXNBZG1pbiddKTtcbiAgY29uc3QgZmV0Y2hQcm9taXNlID0gaXNBZG1pbiA/IGZldGNoQWxsVXNlcnMoKSA6IGZldGNoU2luZ2xlVXNlcih1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBpZiAodXNlcnMpIHtcbiAgICAgICAgZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh1c2VycykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAodWlkLCB1c2VyKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCBpc0FkbWluID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICdpc0FkbWluJ10pO1xuXG4gIGNvbnN0IHVzZXJVcGRhdGVQcm9taXNlcyA9IFtcbiAgICBjbGllbnREQi51cGRhdGUoJ3VzZXJzSW5mby8nICsgdWlkLCBfLnBpY2sodXNlciwgVVNFUl9JTkZPX0tFWVMpKVxuICBdO1xuXG4gIGlmIChpc0FkbWluICYmIF8uaGFzKHVzZXIsICdzZWFzb25UaWNrZXRzJykpIHtcbiAgICB1c2VyVXBkYXRlUHJvbWlzZXMucHVzaChjbGllbnREQi5zZXRJbignc2Vhc29uVGlja2V0cy8nICsgdWlkLCB1c2VyLnNlYXNvblRpY2tldHMpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyVXBkYXRlUHJvbWlzZXMpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh7IFt1aWRdOiB1c2VyIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyID0gdWlkID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IHVzZXJSZW1vdmVQcm9taXNlcyA9IF8ubWFwKFBBVEhfTUFQLCB1c2VyUGF0aCA9PiBjbGllbnREQi5yZW1vdmUoYCR7dXNlclBhdGh9LyR7dWlkfWApKTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlbW92ZVByb21pc2VzKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJzUmVtb3ZlZCh1aWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBTVE9QX0xPQURJTkcgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+ICh7XG4gIHR5cGU6IFNUQVJUX0xPQURJTkdcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiAoe1xuICB0eXBlOiBTVE9QX0xPQURJTkdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2xvYWRpbmdBY3Rpb25zLmpzIiwiaW1wb3J0IHsgUkVQT1JUX0VSUk9SIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHJlcG9ydEVycm9yID0gKG1lc3NhZ2UgPSBDb25zdGFudHMuRVJST1JTLkdFTkVSQUwpID0+ICh7XG4gIHR5cGU6IFJFUE9SVF9FUlJPUixcbiAgbWVzc2FnZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBFVkVOVFNfUkVDRUlWRUQsIEVWRU5UX1JFTU9WRUQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBFVkVOVF9LRVlTID0gWyd0eXBlSWQnLCAnZGF5JywgJ21vbnRoJywgJ3llYXInLCAnaG91cicsICdtaW51dGUnLCAnc3RhdHVzJ107XG5jb25zdCBFVkVOVFNfUEFUSCA9ICdldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZXZlbnRSZW1vdmVkID0gZXZlbnRJZCA9PiAoe1xuICB0eXBlOiBFVkVOVF9SRU1PVkVELFxuICBldmVudElkXG59KTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50c1JlY2VpdmVkID0gZXZlbnRzID0+ICh7XG4gIHR5cGU6IEVWRU5UU19SRUNFSVZFRCxcbiAgZXZlbnRzXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXZlbnRzID0gKCkgPT4gZGlzcGF0Y2ggPT5cbiAgY2xpZW50REIucmVhZChFVkVOVFNfUEFUSClcbiAgICAudGhlbihldmVudHMgPT4ge1xuICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoZXZlbnRzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV2ZW50ID0gZXZlbnQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goRVZFTlRTX1BBVEgsIGV2ZW50KVxuICAgIC50aGVuKGV2ZW50SWQgPT4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoeyBbZXZlbnRJZF06IGV2ZW50IH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFdmVudCA9IChldmVudElkLCBldmVudCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgZXZlbnRUb1VwZGF0ZSA9IF8ucGljayhldmVudCwgRVZFTlRfS0VZUyk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnVwZGF0ZSgnZXZlbnRzLycgKyBldmVudElkLCBldmVudFRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGV2ZW50c1JlY2VpdmVkKHsgW2V2ZW50SWRdOiBldmVudFRvVXBkYXRlIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFdmVudCA9IGV2ZW50SWQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnJlbW92ZShgJHtFVkVOVFNfUEFUSH0vJHtldmVudElkfWApXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goZXZlbnRSZW1vdmVkKGV2ZW50SWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCT09LSU5HU19SRUNFSVZFRCwgQk9PS0lOR19DQU5DRUxFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IEJPT0tJTkdfREFUQV9LRVlTID0gWydwYWlkU2VhdHMnLCAnZXh0cmFTZWF0cycsICdwaWNrVXAnLCAnZHJvcE9mZiddO1xuY29uc3QgQk9PS0lOR1NfUEFUSCA9ICdib29raW5ncyc7XG5cbmNvbnN0IGZldGNoVXNlckJvb2tpbmdzID0gdWlkID0+XG4gIGNsaWVudERCLnJlYWQoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9YClcbiAgICAudGhlbih1c2VyQm9va2luZ3MgPT4ge1xuICAgICAgaWYgKHVzZXJCb29raW5ncykge1xuICAgICAgICByZXR1cm4geyBbdWlkXTogdXNlckJvb2tpbmdzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuY29uc3QgZmV0Y2hBbGxCb29raW5ncyA9ICgpID0+XG4gIGNsaWVudERCLnJlYWQoQk9PS0lOR1NfUEFUSCk7XG5cbmV4cG9ydCBjb25zdCBib29raW5nc1JlY2VpdmVkID0gYm9va2luZ3MgPT4gKHtcbiAgdHlwZTogQk9PS0lOR1NfUkVDRUlWRUQsXG4gIGJvb2tpbmdzXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvb2tpbmdzQ2FuY2VsZWQgPSAodWlkLCBldmVudElkKSA9PiAoe1xuICB0eXBlOiBCT09LSU5HX0NBTkNFTEVELFxuICB1aWQsXG4gIGV2ZW50SWRcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCb29raW5ncyA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3QgdWlkID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICd1aWQnXSk7XG4gIGNvbnN0IGlzQWRtaW4gPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ2lzQWRtaW4nXSk7XG4gIGNvbnN0IGZldGNoUHJvbWlzZSA9IGlzQWRtaW4gPyBmZXRjaEFsbEJvb2tpbmdzKCkgOiBmZXRjaFVzZXJCb29raW5ncyh1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbihib29raW5ncyA9PiB7XG4gICAgICBpZiAoYm9va2luZ3MpIHtcbiAgICAgICAgZGlzcGF0Y2goYm9va2luZ3NSZWNlaXZlZChib29raW5ncykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJvb2tpbmcgPSAodWlkLCBldmVudElkLCBib29raW5nRGF0YSkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgYm9va2luZ0RhdGFUb1VwZGF0ZSA9IF8ucGljayhib29raW5nRGF0YSwgQk9PS0lOR19EQVRBX0tFWVMpO1xuXG4gIHJldHVybiBjbGllbnREQi51cGRhdGUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gLCBib29raW5nRGF0YVRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzUmVjZWl2ZWQoeyBbdWlkXTogeyBbZXZlbnRJZF06IGJvb2tpbmdEYXRhVG9VcGRhdGUgfSB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FuY2VsQm9va2luZyA9ICh1aWQsIGV2ZW50SWQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5yZW1vdmUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzQ2FuY2VsZWQodWlkLCBldmVudElkKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwiaW1wb3J0IHsgTkFWSUdBVEVfVE8gfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRlVG8gPSBwYWdlID0+ICh7XG4gIHR5cGU6IE5BVklHQVRFX1RPLFxuICBwYWdlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9uYXZpZ2F0aW9uQWN0aW9ucy5qcyIsImltcG9ydCB7IHVwZGF0ZVVzZXIgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGlzcGF0Y2gsIHN0YXRlKSB7XG4gIGNvbnN0IHVpZCA9IHN0YXRlLmF1dGhEYXRhLnVpZDtcbiAgY29uc3QgdXNlcnMgPSBzdGF0ZS51c2VycztcblxuICBpZiAodXNlcnNbdWlkXSkge1xuICAgIHJldHVybiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVpZCwgeyBwaG90b1VSTDogc3RhdGUuYXV0aERhdGEucGhvdG9VUkwgfSkpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RhdGFGaXhlcnMvdXBkYXRlUGhvdG9VcmxGaXhlci5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBQQUdFUzoge1xuICAgIEhPTUU6IHsgdmFsOiAnaG9tZScsIHZpc2libGU6IHRydWUgfSxcbiAgICBBVVRIOiB7IHZhbDogJ2F1dGgnLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgIFVTRVJTOiB7IHZhbDogJ3VzZXJzJywgdmlzaWJsZTogdHJ1ZSB9LFxuICAgIEVWRU5UUzogeyB2YWw6ICdldmVudHMnLCB2aXNpYmxlOiB0cnVlIH0sXG4gICAgQk9PS0lOR1M6IHsgdmFsOiAnYm9va2luZ3MnLCB2aXNpYmxlOiB0cnVlIH0sXG4gICAgRElTVFJJQlVUSU9OOiB7IHZhbDogJ2Rpc3RyaWJ1dGlvbicsIHZpc2libGU6IHRydWUgfSxcbiAgICBFRElUX1VTRVJfSU5GTzogeyB2YWw6ICdlZGl0VXNlckluZm8nLCB2aXNpYmxlOiBmYWxzZSB9XG4gIH0sXG4gIFRSQU5TTEFUSU9OUzoge1xuICAgIGhvbWU6ICfXk9ejINeU15HXmdeqJyxcbiAgICB1c2VyczogJ9ee16nXqtee16nXmdedJyxcbiAgICBldmVudHM6ICfXntep15fXp9eZ150nLFxuICAgIGJvb2tpbmdzOiAn16jXqdeV157XmdedINec15TXodei15XXqicsXG4gICAgZGlzdHJpYnV0aW9uOiAn16jXqdeZ157XqiDXqtek15XXpteUJ1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvc3Bpbm5lci5zY3NzJyk7XG5cbmNvbnN0IExvZ28gPSByZXF1aXJlKCcuL2xvZ28uanN4Jyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IHN0YXRlLmxvYWRpbmdcbiAgICB9O1xufVxuXG5jbGFzcyBTcGlubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlDbGFzcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGU6ICF0aGlzLnByb3BzLmlzTG9hZGluZ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5Q2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIGhlaWdodD17ODB9IHdpZHRoPXs4MH0gb3BhY2l0eT17MC43fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3Bpbm5lci5Qcm9wVHlwZXMgPSB7XG4gICAgaXNMb2FkaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTcGlubmVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zcGlubmVyLmpzeCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIHtcXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDA7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAubG9nbyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyID4gZGl2IHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgbWFyZ2luOiAwIDJweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAuYm91bmNlMSB7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMyczsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgLmJvdW5jZTIge1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xcbiAgMCUsIDgwJSwgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcXG4gIDAlLCA4MCUsIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgTG9nbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gaGVpZ2h0PXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gb3BhY2l0eT17dGhpcy5wcm9wcy5vcGFjaXR5fSB2aWV3Qm94PVwiMCAwIDQwMCA0MDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAwLjAwIDAuMDAgTCAxOTUuMzMgMC4wMCBDIDE3MS40NiAxLjE0IDE0Ny41OCA1LjQyIDEyNS40MyAxNC42MCBDIDcwLjg4IDM2LjMxIDI3LjEwIDgzLjMzIDkuNTcgMTM5LjQwIEMgMy43NCAxNTcuNDUgMS4xNiAxNzYuMzcgMC4wMCAxOTUuMjUgTCAwLjAwIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk1LjMzIDAuMDAgTCAyMDcuNTIgMC4wMCBDIDIxNi43MSAxLjE5IDIyNi4wMiAxLjM1IDIzNS4xMSAzLjIyIEMgMjY5LjMwIDkuMTYgMzAxLjc4IDI0LjM3IDMyOC4zNyA0Ni42NSBDIDM2NS45OSA3Ny45MSAzOTEuNjYgMTIzLjQyIDM5OC4wOSAxNzEuOTkgQyAzOTkuMDQgMTc4Ljc1IDM5OS41NiAxODUuNTYgNDAwLjAwIDE5Mi4zNyBMIDQwMC4wMCAyMDguNzMgQyAzOTguNTcgMjMzLjg2IDM5My4yOSAyNTguOTAgMzgyLjgwIDI4MS44NiBDIDM1OC44MiAzMzUuNjggMzA5Ljk1IDM3Ny44MyAyNTIuOTkgMzkzLjExIEMgMjM5LjA4IDM5Ny4xMCAyMjQuNjggMzk4Ljg5IDIxMC4yOSA0MDAuMDAgTCAxOTEuMzYgNDAwLjAwIEMgMTY2LjE3IDM5OC43NiAxNDEuMTMgMzkzLjE0IDExOC4xNiAzODIuNjQgQyA2Ny40MCAzNTkuNzYgMjYuODEgMzE1LjA1IDkuODkgMjYxLjkwIEMgMy45NyAyNDQuMzMgMS42MiAyMjUuODUgMC4wMCAyMDcuNDYgTCAwLjAwIDE5NS4yNSBDIDEuMTYgMTc2LjM3IDMuNzQgMTU3LjQ1IDkuNTcgMTM5LjQwIEMgMjcuMTAgODMuMzMgNzAuODggMzYuMzEgMTI1LjQzIDE0LjYwIEMgMTQ3LjU4IDUuNDIgMTcxLjQ2IDEuMTQgMTk1LjMzIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA3LjUyIDAuMDAgTCA0MDAuMDAgMC4wMCBMIDQwMC4wMCAxOTIuMzcgQyAzOTkuNTYgMTg1LjU2IDM5OS4wNCAxNzguNzUgMzk4LjA5IDE3MS45OSBDIDM5MS42NiAxMjMuNDIgMzY1Ljk5IDc3LjkxIDMyOC4zNyA0Ni42NSBDIDMwMS43OCAyNC4zNyAyNjkuMzAgOS4xNiAyMzUuMTEgMy4yMiBDIDIyNi4wMiAxLjM1IDIxNi43MSAxLjE5IDIwNy41MiAwLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE5Mi4xMSA4LjEzIEMgMjIyLjM1IDYuODAgMjUyLjk1IDEyLjc0IDI4MC40MiAyNS41MCBDIDMyNy4wNCA0Ni43MiAzNjQuMzUgODcuMzkgMzgxLjMxIDEzNS43NSBDIDM5OC40MCAxODMuMTcgMzk1LjY1IDIzNy4zMyAzNzMuNzcgMjgyLjc0IEMgMzU2LjIzIDMxOS44MyAzMjYuMzMgMzUwLjk3IDI5MC4wNCAzNzAuMDkgQyAyNDMuOTIgMzk0LjgyIDE4Ny41MiAzOTkuMjIgMTM4LjA3IDM4Mi4xMSBDIDk1LjM4IDM2Ny42NSA1OC4xNCAzMzcuNjAgMzUuMjEgMjk4Ljc2IEMgMTQuNjUgMjY0LjkyIDUuMzQgMjI0LjQ2IDguNTQgMTg1LjAzIEMgMTAuMzcgMTYxLjIwIDE2LjY4IDEzNy43MCAyNy4yNCAxMTYuMjYgQyA0OC44MiA3MS4xNyA4OC45MiAzNS40OCAxMzYuMDQgMTguODkgQyAxNTQuMDUgMTIuNTQgMTczLjAyIDguODcgMTkyLjExIDguMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTk2LjIzIDIxLjM1IEMgMTk3LjYwIDE4LjkzIDE5OC45NSAxNi41MCAyMDAuMzcgMTQuMTEgQyAyMDEuNzIgMTYuNDggMjAzLjA0IDE4Ljg2IDIwNC4zMyAyMS4yNyBDIDIwNi45NSAyMS44MCAyMDkuNTkgMjIuMjIgMjEyLjE4IDIyLjg5IEMgMjEwLjcwIDI1LjE2IDIwOC42NSAyNi45OCAyMDYuODIgMjguOTYgQyAyMDcuMjIgMzEuNjUgMjA3LjUzIDM0LjM1IDIwNy44NiAzNy4wNCBDIDIwNS4zMCAzNS44NiAyMDIuNzQgMzQuNjcgMjAwLjE0IDMzLjU4IEMgMTk3Ljc0IDM0LjgyIDE5NS4zMiAzNi4wNCAxOTIuNzUgMzYuODcgQyAxOTMuMTYgMzQuMjIgMTkzLjU0IDMxLjU2IDE5My44NCAyOC44OSBDIDE5MS45MyAyNi45MCAxOTAuMDMgMjQuOTAgMTg4LjE2IDIyLjg4IEMgMTkwLjgzIDIyLjMxIDE5My41MiAyMS43OCAxOTYuMjMgMjEuMzUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTgxLjEyIDQ0LjM4IEMgMjEyLjI2IDQwLjYwIDI0NC41MyA0Ni4xOSAyNzIuMzYgNjAuNzYgQyAzMTAuOTMgODAuNTYgMzQwLjUxIDExNy4wNiAzNTEuNjIgMTU5LjAwIEMgMzU4LjgxIDE4NS4xMCAzNTguODIgMjEzLjA4IDM1Mi4yMiAyMzkuMzAgTCAzNTMuNzggMjM5LjQ5IEMgMzUzLjM2IDIzOS40OSAzNTIuNTMgMjM5LjQ4IDM1Mi4xMSAyMzkuNDggQyAzNDUuMDIgMjY3LjM5IDMyOS45MCAyOTMuMjEgMzA5LjA4IDMxMy4xMSBDIDI5Mi4yMSAzMjkuNjYgMjcxLjM2IDM0MS45OSAyNDguOTYgMzQ5LjQwIEMgMjIwLjM1IDM1OC42OSAxODkuMDcgMzU5LjYzIDE1OS45OSAzNTEuOTEgQyAxMzIuMzkgMzQ0LjYzIDEwNi44MyAzMjkuNjkgODcuMTEgMzA5LjA0IEMgNTguNjMgMjc5Ljc0IDQyLjM1IDIzOC44OSA0My4zMSAxOTguMDAgQyA0My4zOCAxNTEuNTQgNjYuMDkgMTA2LjExIDEwMi40MyA3Ny4zNiBDIDEyNC45NSA1OS4zOSAxNTIuNDggNDcuNzIgMTgxLjEyIDQ0LjM4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExMi43NCA3Ni43MyBDIDEzNC41NCA2MS40NiAxNjAuMzEgNTEuNTUgMTg2LjkzIDQ5LjU1IEMgMjA2LjQ1IDQ4LjIxIDIyNi4zNyA0OS42MSAyNDUuMDYgNTUuNjggQyAyNzAuOTkgNjMuNzkgMjk0LjY5IDc4Ljk4IDMxMi43NSA5OS4yOCBDIDMzMC4wMCAxMTguMzMgMzQyLjA4IDE0MS45NCAzNDcuODMgMTY2Ljk2IEMgMzUzLjg1IDE5NS4xNSAzNTIuMjkgMjI1LjEyIDM0Mi4yNSAyNTIuMjIgQyAzMzcuMjQgMjY1LjU2IDMzMC40NyAyNzguMjUgMzIyLjA1IDI4OS43NiBDIDMxOC44MCAyODYuODAgMzE5LjY4IDI4Mi40MiAzMTkuNzIgMjc4LjUwIEMgMzE5LjE2IDI3OS44MSAzMTguNjMgMjgxLjEzIDMxOC4xMyAyODIuNDYgQyAzMTcuMzMgMjgwLjE4IDMxNi41NSAyNzcuODUgMzE1LjEyIDI3NS44OCBDIDMxNS41MiAyNzcuMTYgMzE2LjMxIDI3OS43MiAzMTYuNzEgMjgxLjAwIEMgMzE1LjMxIDI3OS43MyAzMTMuODAgMjc4LjY0IDMxMi4xOCAyNzcuNzIgQyAzMTMuMjIgMjc5LjM2IDMxNC40NCAyODAuODcgMzE1LjY3IDI4Mi4zOSBDIDMxNC4yMyAyODEuNzcgMzEyLjc4IDI4MS4yMCAzMTEuMzAgMjgwLjY5IEMgMzEyLjM1IDI4MS44NyAzMTMuNjEgMjgyLjc1IDMxNS4wOCAyODMuMzUgQyAzMTMuOTUgMjgzLjY0IDMxMi44MiAyODMuOTMgMzExLjcwIDI4NC4yMyBDIDMxNi4xNSAyODQuNTQgMzE4LjE5IDI4OC42NyAzMjAuMzUgMjkxLjk1IEMgMzE5LjAwIDI5My43MiAzMTcuNTkgMjk1LjQ1IDMxNi4xNSAyOTcuMTUgQyAzMTIuNTggMjk0LjU2IDMxMS4xMyAyOTAuNDEgMzEwLjU1IDI4Ni4xOSBDIDMxMC4yMyAyODYuMzQgMzA5LjU5IDI4Ni42NCAzMDkuMjggMjg2Ljc4IEMgMzA4LjU5IDI4NS4yMyAzMDYuOTIgMjg0LjgyIDMwNi40NyAyODYuNzYgQyAzMDYuODggMjg3LjI5IDMwNy42OSAyODguMzMgMzA4LjEwIDI4OC44NiBDIDMwNy40NSAyODguNzUgMzA2LjE0IDI4OC41NSAzMDUuNDkgMjg4LjQ0IEMgMzA2LjU5IDI4OS43MiAzMDcuNzEgMjkwLjk4IDMwOC44MiAyOTIuMjYgQyAzMDcuOTcgMjkyLjI1IDMwNi4yNyAyOTIuMjMgMzA1LjQxIDI5Mi4yMiBDIDMwOC40NyAyOTQuNDEgMzExLjQ3IDI5Ni43NCAzMTMuODEgMjk5LjcyIEMgMzEzLjA3IDMwMC42MiAzMTIuMzMgMzAxLjUyIDMxMS42MCAzMDIuNDQgQyAzMTAuOTMgMzAwLjgwIDMxMC42NCAyOTguODIgMzA5LjA3IDI5Ny43NiBDIDMwNS43OCAyOTUuMDcgMzAyLjExIDI5Mi45MSAyOTguNTggMjkwLjU3IEMgMjk3LjE3IDI4OS40NyAyOTUuMzUgMjg5LjUwIDI5My42NyAyODkuMzMgQyAyOTMuMzQgMjkwLjYzIDI5My4wMiAyOTEuOTMgMjkyLjcwIDI5My4yMyBDIDI5My4wMiAyOTQuMDcgMjkzLjM1IDI5NC45MiAyOTMuNjggMjk1Ljc3IEMgMjkyLjE1IDI5OS43NSAyOTEuMjAgMzAzLjkxIDI5MC4xNyAzMDguMDMgQyAyODYuMzkgMzAwLjkxIDI4Mi4zOSAyOTMuNzkgMjgwLjk1IDI4NS43NSBDIDI4MC41MyAyODcuOTQgMjgwLjE2IDI5MC4xNyAyNzguNzggMjkyLjAwIEMgMjc3Ljc4IDI5MC40NyAyNzYuODIgMjg4Ljg4IDI3NS4zOCAyODcuNzEgQyAyNzYuMjIgMjkwLjUyIDI3Ny4zNyAyOTMuMjMgMjc4LjA1IDI5Ni4wOSBDIDI3OC41OCAyOTguNzQgMjgxLjgyIDI5OS41NyAyODIuNTkgMzAyLjEyIEMgMjgzLjg2IDMwNS41MCAyODQuOTYgMzA4Ljk1IDI4Ni40NSAzMTIuMjQgQyAyODUuMjUgMzExLjU3IDI4NC4wNiAzMTAuOTEgMjgyLjg3IDMxMC4yNCBDIDI4MS43MCAzMTAuNTggMjgwLjU0IDMxMC45MiAyNzkuMzkgMzExLjI4IEMgMjc5LjEwIDMxMS44MSAyNzguNTIgMzEyLjg3IDI3OC4yMyAzMTMuMzkgQyAyNzYuODkgMzExLjUxIDI3NS41NiAzMDkuNTYgMjczLjY3IDMwOC4xOSBDIDI3NS41NCAzMDYuODIgMjc3LjU5IDMwNS4zOCAyNzguMDYgMzAyLjk0IEMgMjc0Ljg3IDMwNC44MSAyNzIuMTYgMzA3LjM1IDI2OS4xMyAzMDkuNDMgQyAyNjcuMjIgMzEwLjUxIDI2Ni43NCAzMTIuNzggMjY1Ljg2IDMxNC42MiBDIDI2MS43NyAzMTAuOTYgMjYxLjUyIDMwNS4zNCAyNjAuMjggMzAwLjM2IEMgMjYwLjAyIDMwMS42NiAyNTkuNzcgMzAyLjk3IDI1OS41NCAzMDQuMjggQyAyNTguNzEgMzAyLjY2IDI1Ny43OCAzMDEuMDMgMjU2LjA5IDMwMC4xNiBDIDI1Ni4wNyAzMDMuMzkgMjU2LjI4IDMwNi42NSAyNTcuMjAgMzA5Ljc2IEMgMjU1LjgwIDMwOS43MCAyNTQuNDAgMzA5LjY2IDI1My4wMCAzMDkuNjUgQyAyNTQuODQgMzExLjE3IDI1Ni44MyAzMTIuNDggMjU4Ljg5IDMxMy42OSBDIDI1OC45MSAzMTYuMzkgMjU4Ljg2IDMxOS4wOCAyNTguODAgMzIxLjc4IEMgMjU3LjYyIDMyMy4wNyAyNTYuNDIgMzI0LjM1IDI1NS4xOSAzMjUuNTkgQyAyNTIuNDIgMzI0LjExIDI0OS43NyAzMjIuMzggMjQ2Ljc3IDMyMS40MSBDIDI0Ni4yOSAzMTguODYgMjQ1LjcyIDMxNi4zMiAyNDUuMjYgMzEzLjc2IEMgMjQ0LjA4IDMxMy4wMCAyNDIuOTAgMzEyLjIzIDI0MS43MyAzMTEuNDYgQyAyMzguMjIgMzEyLjYzIDIzNi41NyAzMTYuMjAgMjM3LjYxIDMxOS43MSBDIDIzNi44NCAzMTkuOTUgMjM2LjA4IDMyMC4yMCAyMzUuMzEgMzIwLjQ1IEMgMjM1LjY1IDMxNS45MCAyMzcuMjcgMzExLjU0IDIzNy41MiAzMDcuMDEgQyAyMzcuNjUgMzA0LjkxIDIzNC42MCAzMDUuMjEgMjMzLjM5IDMwNC41NCBDIDIzNC42MyAzMTIuODggMjMxLjc5IDMyMS4wMSAyMjguODIgMzI4LjY0IEMgMjI4LjAxIDMyOC44NyAyMjYuMzggMzI5LjMzIDIyNS41NyAzMjkuNTYgQyAyMjQuOTcgMzI0LjA2IDIyMi40OSAzMTcuODkgMjI2LjI3IDMxMi45OCBDIDIyNS41MyAzMTEuMjIgMjI0Ljk0IDMwOS40MCAyMjQuMzYgMzA3LjU4IEMgMjIzLjkzIDMwNy41NiAyMjMuMDcgMzA3LjUxIDIyMi42NCAzMDcuNDkgQyAyMTkuNzcgMzEyLjExIDIyMi44MSAzMTcuNzggMjIwLjE0IDMyMi41MiBDIDIxNy4zMiAzMTkuNjIgMjE1LjU1IDMxNS45MSAyMTIuODcgMzEyLjkwIEMgMjEzLjM0IDMxNC40NSAyMTMuOTAgMzE1Ljk4IDIxNC41MSAzMTcuNTAgQyAyMTMuNjQgMzE4LjM0IDIxMi43NyAzMTkuMTkgMjExLjkyIDMyMC4wNCBDIDIxMy4xOCAzMjAuNjggMjE0LjQ1IDMyMS4zMCAyMTUuNzQgMzIxLjg2IEMgMjE2LjM3IDMyMi43NyAyMTcuMDAgMzIzLjY5IDIxNy42NSAzMjQuNjAgQyAyMTUuMDUgMzI1LjE3IDIxMi4zNyAzMjUuNzYgMjEwLjQ0IDMyNy43NCBDIDIxMC45NyAzMjUuMjIgMjA4LjM3IDMyNC40MSAyMDcuNDAgMzIyLjYwIEMgMjA2LjY4IDMyMC44NiAyMDguMDcgMzE5LjMyIDIwOC42NyAzMTcuODAgQyAyMDguMzIgMzE2LjM4IDIwNy45NCAzMTQuOTcgMjA3LjU1IDMxMy41NyBDIDIwNi44NCAzMTQuMzMgMjA1Ljc0IDMxNC45MyAyMDUuNTggMzE2LjA2IEMgMjA0LjM0IDMyMS43MyAyMDYuNDcgMzI3LjQzIDIwNi4zMCAzMzMuMTMgQyAyMDUuNTYgMzMyLjE0IDIwNC44NCAzMzEuMTUgMjA0LjExIDMzMC4xNiBDIDIwMS42NyAzMjguOTIgMjAwLjE5IDMyNi42MiAxOTguMzggMzI0LjY5IEMgMTk2LjUyIDMyMi45OCAxOTMuOTEgMzI0LjMxIDE5MS43NiAzMjQuNDkgQyAxOTAuODYgMzI3LjEzIDE4OS43MCAzMjkuOTUgMTkwLjQzIDMzMi43OSBDIDE5MS4xNiAzMzQuNjIgMTkyLjExIDMzNi4zNSAxOTIuOTEgMzM4LjE1IEMgMTkxLjY0IDMzNy4xOSAxODkuODUgMzM2LjU0IDE4OS4zMSAzMzQuOTAgQyAxODguODQgMzMyLjQ0IDE4OC43NSAzMjkuOTMgMTg4LjM5IDMyNy40NiBDIDE5MS43OCAzMjQuMDUgMTk1LjU1IDMyMS4wOSAxOTkuNTEgMzE4LjM4IEMgMjAxLjExIDMxNy42MCAyMDAuNDEgMzE1Ljc4IDIwMC40MiAzMTQuNDAgQyAyMDAuNjQgMzE0LjA2IDIwMS4wNyAzMTMuMzkgMjAxLjI4IDMxMy4wNSBDIDE5OS43MSAzMTMuNDggMTk3LjM5IDMxMi42MiAxOTYuNDIgMzE0LjM0IEMgMTk0LjQ4IDMxNi43NiAxOTMuNTYgMzE5Ljk4IDE5MC45OSAzMjEuODkgQyAxODkuMjggMzIzLjIxIDE4Ny40MyAzMjQuMzQgMTg1LjYzIDMyNS41NCBDIDE4NS4zMSAzMjUuMjcgMTg0LjY1IDMyNC43MyAxODQuMzIgMzI0LjQ3IEMgMTgzLjQ2IDMyNC41MiAxODEuNzIgMzI0LjYyIDE4MC44NSAzMjQuNjggQyAxODIuNTIgMzIxLjA2IDE4My44OSAzMTcuMzAgMTg1LjY2IDMxMy43MyBDIDE4Ni4yOCAzMTIuMjUgMTg3LjM0IDMxMC43MCAxODYuNzkgMzA5LjA0IEMgMTg2LjE5IDMwNy43NSAxODQuNjQgMzA3LjU4IDE4My41MSAzMDcuMDEgQyAxODIuNjkgMzE2LjM1IDE3Ny4wOSAzMjQuMjcgMTcxLjkxIDMzMS43NCBDIDE3MS4wMiAzMzAuMTkgMTcwLjA1IDMyOC42OSAxNjkuMjUgMzI3LjEwIEMgMTcyLjAwIDMyMi44MyAxNzMuNTMgMzE3LjAyIDE3OC43MCAzMTUuMDYgQyAxNzguNzcgMzEzLjQ0IDE3OC43MSAzMTEuODMgMTc4LjU4IDMxMC4yMiBDIDE3Ny42NSAzMTAuMzggMTc2LjczIDMxMC41NiAxNzUuODEgMzEwLjc4IEMgMTc2LjE3IDMxMS45NiAxNzYuNjMgMzEzLjE5IDE3Ni4xMiAzMTQuNDMgQyAxNzUuODQgMzEzLjUzIDE3NS4yOSAzMTEuNzUgMTc1LjAxIDMxMC44NSBDIDE3My45NCAzMTIuOTMgMTczLjQ4IDMxNS4yNyAxNzIuMzUgMzE3LjMyIEMgMTcwLjg0IDMxOS41OSAxNjguNzcgMzIxLjQwIDE2Ni45MCAzMjMuMzcgQyAxNjUuOTIgMzIyLjYyIDE2NC45NCAzMjEuODggMTYzLjk2IDMyMS4xNSBDIDE2MC45OCAzMjAuOTEgMTU3Ljk3IDMyMS4yMyAxNTUuNDMgMzIyLjkxIEMgMTU1LjAzIDMyMC4yNCAxNTQuNjYgMzE3LjU2IDE1NC40MyAzMTQuODcgQyAxNTUuMjYgMzEzLjk1IDE1Ni4wOCAzMTMuMDUgMTU2LjkxIDMxMi4xNCBDIDE1Ni44NyAzMTAuNzQgMTU2Ljg0IDMwOS4zNCAxNTYuODEgMzA3Ljk1IEMgMTU1LjA4IDMwNi45NSAxNTMuNTEgMzA1LjA5IDE1MS4zNCAzMDUuMzQgQyAxNDguNzQgMzA2LjU5IDE0Ni4yNiAzMDguODMgMTQ1Ljg4IDMxMS44MyBDIDE0NS41OCAzMTQuMDIgMTQ1LjU2IDMxNi4yMyAxNDUuMzkgMzE4LjQzIEMgMTQ0LjkyIDMxOC41NCAxNDMuOTcgMzE4Ljc2IDE0My41MCAzMTguODggQyAxNDIuOTggMzE1LjI1IDE0My41OSAzMTEuNjYgMTQ0LjQzIDMwOC4xNCBDIDE0Ny43MyAzMDUuOTkgMTUxLjAyIDMwMy42OCAxNTQuODggMzAyLjYzIEMgMTU2LjMwIDMwMy40MyAxNTcuNzMgMzA0LjIxIDE1OS4xOCAzMDQuOTcgQyAxNjAuNTcgMzAyLjgwIDE2MC44NyAzMDAuMzQgMTU5LjcxIDI5OC4wMSBDIDE1My41MCAzMDAuMzcgMTQ2LjkwIDMwMS43OSAxNDAuOTcgMzA0Ljg1IEMgMTM5LjE0IDMwOS40NCAxMzYuNzQgMzEzLjc5IDEzNS4zOCAzMTguNTYgTCAxMzQuNjUgMzE4LjE4IEMgMTM0LjE2IDMxOS41OSAxMzMuNjIgMzIwLjk5IDEzMy4wMyAzMjIuMzYgQyAxMzEuNzggMzE4LjE5IDEyOS45MCAzMTQuMjMgMTI4LjgzIDMxMC4wMCBDIDEyOS41OCAzMDkuMjcgMTMxLjA4IDMwNy44MCAxMzEuODIgMzA3LjA2IEwgMTI4Ljc1IDMwNy4zMiBDIDEyOS44OSAzMDYuNTggMTMxLjAzIDMwNS44MyAxMzIuMTYgMzA1LjA4IEMgMTMxLjExIDMwNC43MCAxMjguOTkgMzAzLjk2IDEyNy45NCAzMDMuNTkgQyAxMjcuMzYgMzAwLjk5IDEyNy4wOCAyOTguMzMgMTI3LjY3IDI5NS43MSBDIDEyNi4zNiAyOTcuOTEgMTI0LjY0IDI5OS44MSAxMjIuNzggMzAxLjU3IEMgMTIzLjYwIDMwMS41MyAxMjUuMjIgMzAxLjQ2IDEyNi4wMyAzMDEuNDIgQyAxMjUuMzAgMzAyLjA3IDEyMy44MyAzMDMuMzcgMTIzLjEwIDMwNC4wMiBDIDEyMy41NyAzMDQuNTMgMTI0LjUxIDMwNS41NSAxMjQuOTggMzA2LjA2IEMgMTIyLjM2IDMwOC44MiAxMTguODggMzEwLjQzIDExNS4xOSAzMTEuMTYgQyAxMTYuMzEgMzA0LjkxIDExNy4zMSAyOTguNDQgMTIwLjU4IDI5Mi44NyBDIDExOS44MiAyOTMuMjIgMTE4LjI4IDI5My45MCAxMTcuNTIgMjk0LjI1IEMgMTE4LjA0IDI5My4zMCAxMTkuMDggMjkxLjQwIDExOS42MCAyOTAuNDUgQyAxMTguNzggMjkxLjI3IDExNy4xNCAyOTIuOTEgMTE2LjMyIDI5My43NCBDIDExNi41MSAyOTIuNzcgMTE2Ljg5IDI5MC44NCAxMTcuMDkgMjg5Ljg4IEMgMTE2LjY2IDI5MC4zOSAxMTUuODAgMjkxLjQzIDExNS4zOCAyOTEuOTUgQyAxMTQuOTcgMjg5LjY3IDExMi41OSAyODkuNTYgMTEzLjIxIDI5MS44NyBDIDExMi40NSAyOTUuMDcgMTE1LjQ4IDI5OC4wMSAxMTQuMDQgMzAxLjEwIEMgMTEyLjg1IDMwNC4zMyAxMTEuNjAgMzA3LjU3IDExMC45OCAzMTAuOTggQyAxMDkuNjQgMzEwLjU5IDEwOC4zMCAzMTAuMjYgMTA2Ljk1IDMwOS45NyBDIDEwOC4yOCAzMDguNTAgMTA5LjQ2IDMwNi45MCAxMTAuMzkgMzA1LjE1IEMgMTExLjE5IDMwNC4zOCAxMTEuOTggMzAzLjU4IDExMi42OSAzMDIuNzIgQyAxMTIuMDQgMzAyLjQ1IDExMC43NSAzMDEuOTAgMTEwLjEwIDMwMS42MyBDIDExMC42OCAyOTkuOTUgMTExLjI4IDI5OC4yOCAxMTEuNjggMjk2LjU2IEMgMTA5LjI5IDI5OS40NCAxMDcuOTEgMzAyLjk1IDEwNi4yMiAzMDYuMjQgQyAxMDMuODUgMzA4Ljc5IDEwMC40NCAzMTAuMDMgOTcuMzQgMzExLjQ0IEMgOTcuMzIgMzExLjE5IDk3LjI3IDMxMC43MSA5Ny4yNCAzMTAuNDYgQyA5OC4wNyAzMDQuMDggOTcuMzIgMjk3LjYyIDk4LjM3IDI5MS4yNiBDIDEwMS4xOSAyODkuNjEgMTA0LjEwIDI4OC4wNyAxMDYuNjkgMjg2LjA1IEMgMTA2LjU2IDI4NS40MCAxMDYuMjkgMjg0LjA5IDEwNi4xNiAyODMuNDMgQyAxMDMuNTIgMjg1LjE5IDEwMC42MSAyODYuNDQgOTcuODYgMjg4LjAwIEMgOTUuNzAgMjg5LjM2IDk1LjIyIDI5Mi4wNyA5NC41NiAyOTQuMzUgQyA5My40MCAyOTguMzggOTIuODUgMzAyLjU1IDkyLjY0IDMwNi43MyBDIDkxLjMwIDMwNS4wOSA4OS44NiAzMDMuNTQgODguMzkgMzAyLjAyIEwgODguMzQgMzAxLjQ1IEMgODguNDAgMjk4LjkzIDg3LjM3IDI5Ni42NSA4Ni40MCAyOTQuNDAgQyA4NC44MSAyOTMuODcgODMuMjYgMjkzLjk0IDgxLjczIDI5NC42MCBDIDgxLjUwIDI5My40MSA4MS4yNSAyOTIuMjMgODEuMDkgMjkxLjA0IEMgODUuMTIgMjg4LjEyIDg5LjE4IDI4NS4xMCA5Mi41MyAyODEuNDAgQyA5Mi4yNiAyODAuNjQgOTEuNzAgMjc5LjExIDkxLjQyIDI3OC4zNCBDIDkxLjAxIDI3OC4wMiA5MC4xOCAyNzcuMzkgODkuNzcgMjc3LjA3IEMgODYuNjYgMjgxLjgzIDgyLjY3IDI4NS45MyA3Ny44OSAyODkuMDIgQyA1OS4wNyAyNjMuNDcgNDguNTUgMjMxLjc1IDQ5LjEwIDE5OS45NiBDIDQ4LjYwIDE2OC4zOCA1OS4yMSAxMzcuMDUgNzcuNjIgMTExLjUzIEMgODcuNDUgOTguMjIgOTkuMzQgODYuNDMgMTEyLjc0IDc2LjczIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ni45MCA1Ny40MiBDIDIwNS45NSA1NS4xMiAyMTYuNDUgNTguMzAgMjIyLjAzIDY1Ljk2IEMgMjI3LjE1IDcyLjczIDIyNy4zNyA4Mi4xNyAyMjQuNTggODkuOTIgQyAyMjEuNTUgOTcuODMgMjEzLjk3IDEwMi44NCAyMDYuMzAgMTA1LjYxIEMgMjA2LjI5IDEwOC4wMiAyMDYuMjcgMTEwLjQyIDIwNi4yNiAxMTIuODMgQyAyMDQuMDkgMTE1LjE2IDIwMi4wMyAxMTcuNTkgMTk5Ljk3IDEyMC4wMyBDIDE5OC43MCAxMTguNzAgMTk2LjgwIDExNy43NiAxOTYuMTEgMTE2LjAwIEMgMTk3LjAwIDExNC40MCAxOTguMzkgMTEzLjE1IDE5OS42MSAxMTEuODAgQyAxOTEuODAgMTA0Ljg4IDE4Mi45OSA5OS4xNyAxNzUuMzIgOTIuMTAgQyAxNzYuMDcgOTAuNjAgMTc3LjIzIDg5LjQ2IDE3OC44NyA4OS4wMiBDIDE4My4wNyA5Mi45MiAxODYuOTUgOTcuMTYgMTkxLjE4IDEwMS4wMyBDIDE5My40MyA5NC43MiAxOTYuMDEgODguNDkgMTk3Ljc4IDgyLjA0IEMgMTk3LjQ1IDc4LjI0IDE5Ni4wNCA3NC42MyAxOTUuMjIgNzAuOTIgQyAxOTAuMDkgNjkuNzUgMTg1LjE1IDY3Ljg2IDE4MC4wMiA2Ni42NyBDIDE3OC4yMCA2Ni45MiAxNzYuNDEgNjcuMzUgMTc0LjU5IDY3LjU1IEMgMTc0LjU1IDY2LjUwIDE3NC41MSA2NS40NiAxNzQuNDkgNjQuNDEgQyAxNzcuMzggNjQuMzcgMTgwLjIyIDY0Ljk2IDE4My4wNSA2NS40NiBDIDE4Ni45MCA2MS42OSAxOTEuNTUgNTguNTMgMTk2LjkwIDU3LjQyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE4NC45NCA2NS44MSBDIDE4OS4zMiA2MS4zNCAxOTUuNzQgNTkuMDIgMjAxLjk3IDU5LjUwIEMgMjA5LjQ4IDU5LjcwIDIxNi41NSA2NC42MiAyMTkuNDMgNzEuNTUgQyAyMjIuNTAgNzkuMDggMjIyLjU1IDg4LjIwIDIxOC4yNCA5NS4yOCBDIDIxNi4xMCA5OC43OCAyMTIuNjIgMTAxLjIyIDIwOC44NSAxMDIuNzAgQyAyMDcuMzggOTUuNzUgMjA2LjE5IDg4LjczIDIwNC40MSA4MS44NyBDIDIwMy44NCA4MS43MiAyMDIuNzAgODEuNDEgMjAyLjEzIDgxLjI1IEMgMjAzLjk2IDc5LjAwIDIwNS4zMSA3Ni40MCAyMDYuMDcgNzMuNTkgQyAyMDkuOTkgNzIuODIgMjEzLjk4IDcyLjU4IDIxNy45NSA3Mi4yNCBDIDIxNC42OSA2OC43NyAyMDkuOTUgNjYuNTUgMjA3Ljk0IDYyLjA0IEMgMjA3LjI1IDYyLjE3IDIwNS44NiA2Mi40MiAyMDUuMTcgNjIuNTUgQyAyMDUuNTIgNjMuNTUgMjA1LjQwIDY1LjA2IDIwNi43NyA2NS4zMiBDIDIwOC44NiA2Ni4xNCAyMTAuMDggNjguMDkgMjExLjI4IDY5Ljg2IEMgMjA4LjI2IDY5Ljc1IDIwNS4yOSA2OS4yMiAyMDIuMzYgNjguNTIgQyAyMDIuMDggNjYuMTggMjAxLjg1IDYzLjg0IDIwMS42NCA2MS40OSBDIDE5OS44MyA2MS4yNCAxOTguMDEgNjEuMDAgMTk2LjE5IDYwLjg1IEMgMTk2LjU4IDYzLjczIDE5Ny42OCA2Ni40MyAxOTkuODkgNjguMzkgQyAxOTQuODggNjcuNjggMTg5LjkxIDY2Ljc0IDE4NC45NCA2NS44MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTIuMTkgMTAyLjAwIEMgMTk0Ljg4IDk2Ljg3IDE5OC4xMyA5Mi4wMyAyMDEuMDggODcuMDQgQyAyMDMuNDQgOTIuMzEgMjA1LjQ1IDk3LjczIDIwNy42MCAxMDMuMTAgQyAyMDQuNzUgMTA1LjAxIDIwMi45MyAxMDcuOTggMjAwLjc1IDExMC41NyBDIDE5Ny43OSAxMDcuODIgMTk0LjgzIDEwNS4wNiAxOTIuMTkgMTAyLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ny41MyA5OS40OSBDIDE5OC40NyA5OS40OCAyMDAuMzYgOTkuNDYgMjAxLjMwIDk5LjQ2IEMgMjAxLjI5IDEwMi4wOCAyMDEuMzAgMTA0LjcwIDIwMS4yOSAxMDcuMzMgQyAyMDAuNjcgMTA3LjI5IDE5OS40NCAxMDcuMjAgMTk4LjgyIDEwNy4xNiBDIDE5OC42NSAxMDQuNTYgMTk4LjY0IDEwMS45MSAxOTcuNTMgOTkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTc1LjY5IDEwOS41NSBDIDE3Ni4wMCAxMDcuNDMgMTc0LjM2IDEwMy43MiAxNzcuNzAgMTAzLjY1IEMgMTc3LjcxIDEwNC41NyAxNzcuNzQgMTA2LjQyIDE3Ny43NSAxMDcuMzUgQyAxODAuNjUgMTA3LjQ1IDE4My41NSAxMDcuNTYgMTg2LjQ1IDEwNy4zOCBDIDE4Ny4yMSAxMDguOTggMTg3Ljk5IDExMC41NyAxODguODYgMTEyLjExIEMgMTg5Ljc3IDExMC42MSAxODguNTMgMTA4Ljk5IDE4OC4zNCAxMDcuNDggQyAxODkuMTkgMTA3LjQ1IDE5MC44OCAxMDcuNDAgMTkxLjczIDEwNy4zNyBDIDE5MS43OCAxMTAuMzAgMTkxLjgwIDExMy4yNCAxOTEuNzggMTE2LjE3IEMgMTg5LjEwIDExNS45MyAxODYuMTIgMTE2LjgxIDE4My42NCAxMTUuNTYgQyAxODMuNjMgMTE1LjE1IDE4My42MCAxMTQuMzMgMTgzLjU4IDExMy45MiBDIDE4NC40MCAxMTMuODIgMTg2LjA0IDExMy42MiAxODYuODYgMTEzLjUyIEMgMTg1Ljc2IDExMS4zNSAxODQuNDMgMTA5LjMwIDE4Mi44MiAxMDcuNDggQyAxODEuMzIgMTEwLjYxIDE4Mi43NCAxMTcuMzYgMTc3LjM1IDExNi40MCBDIDE3Ny4yNCAxMTQuOTggMTc3LjgxIDExMy44OCAxNzkuMDUgMTEzLjA5IEMgMTc5LjE5IDExMi4yMSAxNzkuNDYgMTEwLjQ1IDE3OS42MCAxMDkuNTcgQyAxNzguMjkgMTA5LjU2IDE3Ni45OSAxMDkuNTYgMTc1LjY5IDEwOS41NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMDcuNDkgMTA3LjM3IEMgMjA5Ljc1IDEwNy40MCAyMTIuMDEgMTA3LjQxIDIxNC4yOCAxMDcuNDEgQyAyMTQuMjMgMTEwLjE4IDIxNC4yMyAxMTIuOTUgMjE0LjM2IDExNS43MiBDIDIxMi4xMiAxMTYuMjMgMjA5LjgxIDExNi4yMiAyMDcuNTIgMTE2LjIzIEMgMjA3LjUwIDExNS42MSAyMDcuNDQgMTE0LjM5IDIwNy40MSAxMTMuNzggQyAyMDguODYgMTEzLjc4IDIxMC4zMSAxMTMuNzkgMjExLjc2IDExMy43OSBDIDIxMS42NiAxMTIuMTcgMjExLjgyIDExMC40NCAyMTAuOTQgMTA5LjAxIEMgMjEwLjMwIDExMC43NSAyMDkuMTIgMTExLjU4IDIwNy40MSAxMTEuNTEgQyAyMDcuNDMgMTEwLjQ3IDIwNy40NyAxMDguNDEgMjA3LjQ5IDEwNy4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTUuODIgMTA3LjQyIEMgMjE3Ljk1IDEwNy40MSAyMjAuMDkgMTA3LjQxIDIyMi4yMiAxMDcuNDIgQyAyMjIuMTUgMTEwLjEzIDIyMi4xNCAxMTIuODUgMjIyLjI1IDExNS41NiBDIDIyMS42MyAxMTUuNzYgMjIwLjM4IDExNi4xNSAyMTkuNzYgMTE2LjM1IEMgMjE5LjczIDExNC4wOCAyMTkuNzIgMTExLjgxIDIxOS43MCAxMDkuNTQgQyAyMTguNDIgMTA5LjUzIDIxNy4xNCAxMDkuNTMgMjE1Ljg2IDEwOS41MyBMIDIxNS44MiAxMDcuNDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjE2LjIzIDExMS40NCBDIDIxNi43OCAxMTEuNTMgMjE3Ljg3IDExMS43MCAyMTguNDEgMTExLjc5IEMgMjE4LjM5IDExMy4yOCAyMTguMzcgMTE0Ljc4IDIxOC4zNSAxMTYuMjggQyAyMTcuNjkgMTE2LjI0IDIxNi4zOSAxMTYuMTUgMjE1Ljc0IDExNi4xMSBDIDIxNS44OSAxMTQuNTUgMjE2LjA1IDExMy4wMCAyMTYuMjMgMTExLjQ0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDExOS4yNSAxMzYuMzAgQyAxMjQuNzQgMTM2LjM1IDEzMC4yMyAxMzYuMzEgMTM1LjczIDEzNi4zMiBDIDEzNS43NiAxNDMuNDIgMTM1LjY5IDE1MC41MiAxMzUuNzcgMTU3LjYyIEMgMTM4LjE3IDE1NS45NiAxNDEuNDggMTU0Ljg3IDE0Mi42NCAxNTEuOTUgQyAxNDMuMTIgMTQ2Ljc2IDE0Mi42OSAxNDEuNTMgMTQyLjg2IDEzNi4zMiBDIDE0OC42MyAxMzYuMzIgMTU0LjQwIDEzNi4zMSAxNjAuMTggMTM2LjMzIEMgMTYwLjEwIDE0MS4yNiAxNjAuMjYgMTQ2LjIwIDE2MC4xMiAxNTEuMTMgQyAxNTkuNzggMTU1LjA1IDE1Ny4zMSAxNTguNzEgMTUzLjg5IDE2MC42MSBDIDE0Ny44NSAxNjQuMDQgMTQxLjgwIDE2Ny40NCAxMzUuNzMgMTcwLjgwIEMgMTM1LjczIDE3Ny44MSAxMzUuNzMgMTg0LjgyIDEzNS43NCAxOTEuODMgQyAxMzAuMjQgMTkxLjg2IDEyNC43NCAxOTEuODIgMTE5LjIzIDE5MS44NiBDIDExOS4yNyAxNzMuMzQgMTE5LjIzIDE1NC44MiAxMTkuMjUgMTM2LjMwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE2NC45MiAxMzYuMzIgQyAxNzAuNDYgMTM2LjM1IDE3NS45OSAxMzYuMjggMTgxLjUyIDEzNi4zNSBDIDE4MS40NCAxNTAuNzkgMTgxLjQzIDE2NS4yMyAxODEuNTIgMTc5LjY3IEMgMTc2LjA1IDE3OS42MiAxNzAuNTcgMTc5Ljg3IDE2NS4xMCAxNzkuNTcgQyAxNjQuNjMgMTY1LjIzIDE2NC45OSAxNTAuNzIgMTY0LjkyIDEzNi4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxODYuMjggMTM2LjMwIEMgMjAwLjY5IDEzNi4zNCAyMTUuMTAgMTM2LjMzIDIyOS41MSAxMzYuMzEgQyAyMjkuNTIgMTUwLjc3IDIyOS40OSAxNjUuMjMgMjI5LjUzIDE3OS42OSBDIDIyMy45NCAxNzkuNjQgMjE4LjM1IDE3OS44MSAyMTIuNzcgMTc5LjYwIEMgMjEyLjk1IDE3MC4yOCAyMTIuNzcgMTYwLjk1IDIxMi44NyAxNTEuNjIgQyAyMDkuNTEgMTUxLjU1IDIwNi4xNSAxNTEuNTcgMjAyLjgwIDE1MS42MCBDIDIwMi44NyAxNjAuOTYgMjAyLjgxIDE3MC4zMyAyMDIuODMgMTc5LjY5IEMgMTk3LjMyIDE3OS43MyAxOTEuODAgMTc5LjY3IDE4Ni4yOSAxNzkuNjkgQyAxODYuMzAgMTY1LjIzIDE4Ni4zMiAxNTAuNzYgMTg2LjI4IDEzNi4zMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyMzQuMDkgMTM2LjI4IEMgMjM5LjY3IDEzNi4zOCAyNDUuMjUgMTM2LjI5IDI1MC44NCAxMzYuMzMgQyAyNTAuODYgMTQxLjUyIDI1MC42NiAxNDYuNzIgMjUwLjk5IDE1MS45MCBDIDI1My44OCAxNDguOTAgMjUzLjUzIDE0NC4yMyAyNTUuODAgMTQwLjgzIEMgMjU3LjU3IDEzNy41OSAyNjEuNDEgMTM2LjI4IDI2NC45MiAxMzYuMzQgQyAyNjguNzQgMTM2LjQwIDI3Mi44NSAxMzUuNzggMjc2LjQyIDEzNy40OCBDIDI3OS41MSAxMzkuMDQgMjgwLjc2IDE0Mi42NyAyODAuNzEgMTQ1Ljk1IEMgMjgwLjc0IDE1Ny4xOCAyODAuNzAgMTY4LjQyIDI4MC43MiAxNzkuNjYgQyAyNzIuOTIgMTc5LjY2IDI2NS4xMiAxNzkuNzAgMjU3LjMyIDE3OS42NiBDIDI1Ny4zNyAxNzQuNTkgMjU3LjM1IDE2OS41MiAyNTcuMzIgMTY0LjQ1IEMgMjU5LjU2IDE2NC40NSAyNjEuODEgMTY0LjQ0IDI2NC4wNiAxNjQuNDMgQyAyNjQuMDMgMTYwLjYyIDI2NC4yNCAxNTYuNzkgMjYzLjczIDE1My4wMSBDIDI2Mi4wOSAxNTIuNDEgMjU5LjExIDE1MS44NiAyNTguNDUgMTU0LjA0IEMgMjU1Ljg2IDE2Mi41NSAyNTMuNTEgMTcxLjE0IDI1MC45NCAxNzkuNjYgQyAyNDUuMDcgMTc5LjczIDIzOS4xOSAxNzkuNzIgMjMzLjMyIDE3OS42NiBDIDIzNS41NCAxNzIuNjYgMjM3LjU5IDE2NS42MCAyMzkuODkgMTU4LjYyIEMgMjM3Ljc5IDE1OC4yMiAyMzQuNjAgMTU3LjkwIDIzNC4zNiAxNTUuMTggQyAyMzMuNzYgMTQ4LjkxIDIzNC4yNSAxNDIuNTggMjM0LjA5IDEzNi4yOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMi4zNiAxODMuOTggQyAyNC45MyAxODQuNjMgMjcuNDIgMTg1LjU1IDI5Ljc0IDE4Ni44NSBDIDI4LjgyIDE4Ny4zNiAyNi45OCAxODguMzggMjYuMDcgMTg4Ljg5IEMgMjYuNDQgMTg5LjA2IDI3LjE5IDE4OS40MCAyNy41NyAxODkuNTYgQyAyNy43OCAxOTAuMjQgMjguMjAgMTkxLjYwIDI4LjQxIDE5Mi4yOCBDIDI4LjI5IDE5Mi45NCAyOC4wNiAxOTQuMjYgMjcuOTQgMTk0LjkyIEMgMjkuNDAgMTkyLjE0IDMyLjYwIDE5MC45NCAzNC4xMCAxODguMjEgQyAzNC43MiAxODguMjAgMzUuOTcgMTg4LjIwIDM2LjU5IDE4OC4yMCBDIDM2LjU4IDE4OS4zNyAzNi41NyAxOTAuNTUgMzYuNTYgMTkxLjczIEMgMzMuOTUgMTkyLjc5IDMxLjcyIDE5NC41MSAyOS40MSAxOTYuMDggQyAzMC41OSAxOTYuODcgMzEuNzggMTk3LjY4IDMyLjk3IDE5OC40OCBDIDMzLjgzIDE5OC4zNSAzNS41NyAxOTguMDggMzYuNDQgMTk3Ljk1IEMgMzYuNDcgMTk5LjU3IDM2LjQ5IDIwMS4yMCAzNi40OCAyMDIuODMgQyAzMy42NyAyMDEuODcgMzEuMDYgMjAwLjQ1IDI4LjQ0IDE5OS4wNyBDIDI3LjQ4IDIwMS4yMiAyNS42MSAyMDIuNjUgMjMuNzYgMjAzLjk5IEMgMjUuNTkgMjA1LjM0IDI3LjU0IDIwNi41NyAyOS4wNiAyMDguMjkgQyAzMC4yMCAyMDkuODMgMjguNzUgMjExLjc3IDI4LjQ4IDIxMy4zNyBDIDI5LjkwIDIxNC4wNCAzMS4zMyAyMTQuNzUgMzIuMDAgMjE2LjI5IEMgMzAuMjggMjE2LjMwIDI4LjU3IDIxNi4yMiAyNi44NiAyMTYuMDQgQyAyNC45MyAyMTUuMjMgMjUuOTkgMjEyLjgzIDI1LjY0IDIxMS4yNyBDIDI0Ljg2IDIxMC4yNiAyMy42MyAyMDkuNzYgMjIuNjEgMjA5LjA2IEMgMjEuMjUgMjEwLjMyIDE5LjQzIDIxMS4zMyAxOS4wNSAyMTMuMzAgQyAyMC40MyAyMTQuMDMgMjEuODUgMjE0Ljc4IDIyLjY2IDIxNi4yMSBDIDIwLjY5IDIxNi4yNiAxOC43MiAyMTYuMjUgMTYuNzQgMjE2LjIwIEMgMTUuNzYgMjEyLjYyIDE4LjAyIDIwOS4yMSAxNy4yNiAyMDUuNjcgQyAxNi4zNiAyMDUuMTIgMTUuNDEgMjA0LjY1IDE0LjQ0IDIwNC4yNSBDIDEyLjk4IDIwMC45NCAxNC44MSAxOTcuNDMgMTQuMjEgMTk0LjAzIEMgMTMuODkgMTkyLjQxIDEzLjQ5IDE5MC44MiAxMy4yMCAxODkuMjAgQyAxMy44MCAxODkuMjIgMTUuMDIgMTg5LjI0IDE1LjYzIDE4OS4yNiBDIDE1LjkyIDE5My41MCAxNS42MiAxOTcuNzQgMTUuNTEgMjAxLjk4IEMgMTUuOTAgMjAyLjQyIDE2LjY4IDIwMy4yOSAxNy4wNyAyMDMuNzIgQyAxOC41NSAyMDIuMzMgMjAuNzUgMjAxLjMyIDIxLjEyIDE5OS4xMSBDIDIxLjY2IDE5NS42NCAxOC43NyAxOTIuNTAgMTkuNjggMTg5LjAxIEMgMjAuMzIgMTg3LjIxIDIxLjQyIDE4NS42MyAyMi4zNiAxODMuOTggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzY5LjI1IDE4Ni45MCBDIDM3MS41NCAxODUuNTUgMzc0LjA0IDE4NC42NCAzNzYuNjAgMTgzLjk1IEMgMzc3LjU0IDE4NS42MCAzNzguNjMgMTg3LjE5IDM3OS4zMCAxODguOTggQyAzNzkuOTggMTkyLjA5IDM3OC4wNiAxOTQuOTggMzc3Ljc3IDE5OC4wMiBDIDM3Ny42MyAyMDAuNTkgMzc5LjgzIDIwMi4zNSAzODEuODUgMjAzLjQ3IEMgMzg0Ljc4IDIwMi43MCAzODMuMDEgMTk5LjA4IDM4My4yOCAxOTYuOTkgQyAzODMuNjEgMTk0LjA5IDM4MS45MSAxOTAuMDEgMzg1LjE2IDE4OC4zMSBDIDM4NS40MCAxODkuNTYgMzg1LjcxIDE5MC44OCAzODUuMjIgMTkyLjEzIEMgMzgzLjYzIDE5Ni4xMSAzODYuMTQgMjAwLjM2IDM4NC41NyAyMDQuMzQgQyAzODMuODUgMjA0LjU5IDM4Mi40MiAyMDUuMTAgMzgxLjcxIDIwNS4zNiBDIDM4MC43NSAyMDguOTQgMzgzLjY5IDIxMi43MyAzODEuODkgMjE2LjA4IEMgMzgwLjA3IDIxNi4zNyAzNzguMjIgMjE2LjI0IDM3Ni4zOSAyMTYuMjIgQyAzNzcuMDEgMjE0LjYzIDM3OC41NSAyMTQuMDIgMzc5Ljk2IDIxMy4zNSBDIDM3OS41MSAyMTEuNDAgMzc3LjczIDIxMC4zNSAzNzYuMzggMjA5LjA3IEMgMzc1LjM0IDIwOS43NCAzNzQuMjIgMjEwLjM0IDM3My4zNCAyMTEuMjIgQyAzNzMuMzAgMjEyLjQ3IDM3My4yNyAyMTMuNzMgMzczLjI1IDIxNC45OCBDIDM3Mi4wMiAyMTcuMTQgMzY4Ljk4IDIxNS44MCAzNjcuMDIgMjE2LjI4IEMgMzY3LjYwIDIxNC42NiAzNjkuMDcgMjEzLjk5IDM3MC41MCAyMTMuMzMgQyAzNzAuMDYgMjExLjg2IDM2OS42NiAyMTAuMzkgMzY5LjI4IDIwOC45MSBDIDM3MS4wNSAyMDcuMDQgMzczLjA4IDIwNS40NSAzNzUuMjEgMjA0LjAyIEMgMzczLjM2IDIwMi42NiAzNzEuNTQgMjAxLjE4IDM3MC41MCAxOTkuMDggQyAzNjcuOTMgMjAwLjUwIDM2NS4zNCAyMDEuOTQgMzYyLjQ5IDIwMi43NiBDIDM2Mi40OSAyMDEuMTAgMzYyLjUxIDE5OS40NSAzNjIuNTUgMTk3Ljc5IEMgMzYzLjM5IDE5Ny45NyAzNjUuMDcgMTk4LjMzIDM2NS45MCAxOTguNTEgQyAzNjcuMTQgMTk3LjcyIDM2OC4zOSAxOTYuOTQgMzY5LjY1IDE5Ni4xOCBDIDM2Ny4zMyAxOTQuNTcgMzY1LjA3IDE5Mi44MyAzNjIuNDUgMTkxLjcyIEMgMzYyLjQyIDE5MC41NSAzNjIuMzkgMTg5LjM4IDM2Mi4zNyAxODguMjEgQyAzNjIuOTkgMTg4LjIxIDM2NC4yMyAxODguMjEgMzY0Ljg1IDE4OC4yMSBDIDM2Ni4xMCAxOTAuMjcgMzY4LjAxIDE5MS44OCAzNzAuMzUgMTkyLjYwIEMgMzcwLjM3IDE5My4xMyAzNzAuNDIgMTk0LjIwIDM3MC40NCAxOTQuNzMgQyAzNzEuNjUgMTkzLjI0IDM3MS4zOSAxOTEuMzcgMzcxLjI1IDE4OS42MCBDIDM3MS42NyAxODkuMzkgMzcyLjQ5IDE4OC45OCAzNzIuOTEgMTg4Ljc3IEMgMzcxLjk5IDE4OC4zMCAzNzAuMTYgMTg3LjM3IDM2OS4yNSAxODYuOTAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjA2Ljc5IDE4Ni4zNyBDIDIwNi45MSAxODYuNDAgMjA3LjE2IDE4Ni40NiAyMDcuMjggMTg2LjQ5IEMgMjA2LjkzIDE4Ny43NSAyMDYuNjAgMTg5LjAxIDIwNi4yOCAxOTAuMjggQyAyMDUuNDUgMTkzLjQxIDIwNC41OCAxOTYuNTMgMjAzLjc0IDE5OS42NiBDIDIxMi4xOCAyMDAuNTkgMjIwLjUzIDIwMi4zNCAyMjkuMDQgMjAyLjUzIEMgMjMwLjU1IDE5OS40OSAyMzIuMTggMTk2LjUxIDIzMy44NSAxOTMuNTYgQyAyMzMuMTkgMTkzLjY5IDIzMS44NyAxOTMuOTUgMjMxLjIxIDE5NC4wOCBDIDIyOS42NCAxOTUuNDIgMjI4LjAyIDE5Ni43MiAyMjYuMzkgMTk3Ljk5IEMgMjI2Ljk4IDE5Ni40MiAyMjcuNjEgMTk0Ljg3IDIyOC4yNCAxOTMuMzIgQyAyMjguNzEgMTkyLjE2IDIyOS4xOSAxOTEuMDIgMjI5LjcxIDE4OS44OCBDIDIyOS43NCAxOTEuNDIgMjI5LjYwIDE5Mi45NSAyMjkuMjkgMTk0LjQ3IEMgMjMwLjQ3IDE5Mi45NCAyMzEuNzUgMTkxLjQ5IDIzMy4xMSAxOTAuMTIgTCAyMzIuMTEgMTkyLjEzIEMgMjMyLjgyIDE5Mi42MyAyMzMuNTQgMTkzLjE0IDIzNC4yNiAxOTMuNjUgTCAyMzQuODUgMTkxLjE5IEMgMjM1LjQyIDE5OS41MSAyMjguMTkgMjA1LjQ2IDIyNi4zOCAyMTMuMjIgQyAyMzEuNzMgMjEzLjI1IDIzNy4wOCAyMTMuMjEgMjQyLjQ0IDIxMy4yMiBDIDI0Mi40NSAyMjcuNjcgMjQyLjQ0IDI0Mi4xMiAyNDIuNDUgMjU2LjU4IEMgMjM2LjkwIDI1Ni41MyAyMzEuMzUgMjU2LjYzIDIyNS44MSAyNTYuNTAgQyAyMjUuODAgMjQyLjU3IDIyNi4wOSAyMjguNjMgMjI1LjY2IDIxNC43MiBDIDIyNC40NCAyMTcuMjggMjIzLjQ0IDIxOS45NCAyMjIuMjUgMjIyLjUyIEMgMjE3LjE4IDIzMi45NyAyMTUuNjkgMjQ0LjgxIDIxMC4xMiAyNTUuMDQgQyAyMDcuNzcgMjU4LjE3IDIwNS4wOCAyNjEuMTcgMjAxLjg3IDI2My40MyBDIDE5Ni44NiAyNjMuNTQgMTkxLjg4IDI2Mi43NiAxODYuODggMjYyLjU0IEMgMTgxLjY4IDI2Mi4yNCAxNzcuMDQgMjU5LjY5IDE3Mi4zMiAyNTcuNzggQyAxNjkuNzIgMjY1Ljk0IDE2Ni45OCAyNzQuMDYgMTY0LjE1IDI4Mi4xNCBDIDE2My44NyAyODAuOTUgMTYzLjY0IDI3OS43NSAxNjMuNDQgMjc4LjU1IEMgMTYyLjE4IDI3OS41NyAxNjEuMjcgMjgwLjkyIDE2MC4xOSAyODIuMTEgQyAxNjAuNzggMjgwLjIwIDE2MS41MyAyNzguMzMgMTYyLjYxIDI3Ni42NSBDIDE2MS41MiAyNzYuNzQgMTYwLjQzIDI3Ni44MyAxNTkuMzQgMjc2LjkyIEMgMTU5LjA2IDI3Ny42MCAxNTguNTAgMjc4Ljk3IDE1OC4yMiAyNzkuNjYgQyAxNTcuOTggMjc5LjYyIDE1Ny40OCAyNzkuNTUgMTU3LjIzIDI3OS41MSBDIDE1Ny42MCAyNzguODggMTU4LjMzIDI3Ny42MiAxNTguNzAgMjc2Ljk5IEMgMTU3Ljc5IDI3Ni4zMSAxNTYuODAgMjc1Ljc1IDE1NS44MSAyNzUuMTkgQyAxNTUuODYgMjc2LjY2IDE1NS4zNSAyNzcuOTAgMTU0LjI3IDI3OC45NCBDIDE1NC41MCAyNzcuNDAgMTU0LjgyIDI3NS44NyAxNTUuMTMgMjc0LjM2IEwgMTU2LjY2IDI3NC42MSBDIDE1Ni4wNSAyNzMuNjcgMTU1LjQ0IDI3Mi43NCAxNTQuODEgMjcxLjgzIEMgMTUzLjkwIDI3My42NSAxNTIuOTkgMjc1LjUwIDE1MS45OSAyNzcuMjkgQyAxNTEuMzIgMjc2Ljk4IDE0OS45OSAyNzYuMzggMTQ5LjMyIDI3Ni4wOCBDIDE0OS43MyAyNzUuMDAgMTUwLjEyIDI3My45MSAxNTAuNTAgMjcyLjgzIEMgMTUwLjg0IDI3My42MiAxNTEuNTEgMjc1LjIwIDE1MS44NSAyNzUuOTkgTCAxNTEuMTIgMjczLjE0IEwgMTUyLjQ0IDI3My42OCBDIDE1Mi45MSAyNzIuNDcgMTUzLjQxIDI3MS4yNyAxNTMuODkgMjcwLjA2IEMgMTU0LjMxIDI2OS43NSAxNTUuMTQgMjY5LjE1IDE1NS41NiAyNjguODUgQyAxNTUuMzMgMjY5LjM0IDE1NC44OCAyNzAuMzMgMTU0LjY2IDI3MC44MiBDIDE1Ni4xNSAyNzEuODYgMTU2LjYwIDI3My44OSAxNTguMDUgMjc0Ljg2IEMgMTU5Ljk5IDI3NC4wNSAxNjAuMzggMjcxLjM5IDE2MS42NSAyNjkuODAgQyAxNjEuMzcgMjcyLjExIDE2MC41NCAyNzQuMjkgMTU5LjM3IDI3Ni4yOSBDIDE2MC41MiAyNzYuMTkgMTYxLjY4IDI3Ni4xMSAxNjIuODMgMjc2LjAzIEMgMTY1LjEwIDI3MS4yNyAxNjYuNzAgMjY2LjI0IDE2OC4wNSAyNjEuMTUgQyAxNjUuNjQgMjU5Ljg0IDE2My4zMyAyNTguMzEgMTYwLjc2IDI1Ny4zNCBDIDE1Ny41NCAyNTYuMzEgMTU0LjEzIDI1Ni4wMiAxNTAuOTUgMjU0Ljg4IEMgMTQ3Ljg5IDI1My44NyAxNDUuMDkgMjUyLjIxIDE0Mi4wMyAyNTEuMjEgQyAxMzguOTUgMjU0LjI2IDEzNi43MSAyNTguMDQgMTM0LjA5IDI2MS40OCBDIDEzMi41OSAyNjMuNDggMTMxLjQ0IDI2NS43MSAxMzAuMjggMjY3LjkyIEMgMTMxLjYxIDI2My45MiAxMzMuNDIgMjYwLjEwIDEzNS43NiAyNTYuNTkgQyAxMzAuNjkgMjU2LjU0IDEyNS42MiAyNTYuNjAgMTIwLjU1IDI1Ni41NCBDIDEyMC41NiAyNDIuMTQgMTIwLjY5IDIyNy43MyAxMjAuNDkgMjEzLjM0IEMgMTI2LjA0IDIxMy4wOSAxMzEuNjAgMjEzLjI3IDEzNy4xNiAyMTMuMjIgQyAxMzcuMjYgMjI2LjgyIDEzNi45MCAyNDAuNDIgMTM3LjM0IDI1NC4wMSBDIDE0NS4yOSAyNDAuMzAgMTUzLjAzIDIyNS45OCAxNjUuMDUgMjE1LjMzIEMgMTczLjE2IDIwOC4zMyAxODUuNDkgMjA5LjY3IDE5NC4yNSAyMTQuNzQgQyAxOTkuMzQgMjA1LjcyIDIwMi43MCAxOTUuODYgMjA2Ljc5IDE4Ni4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTEuMTQgMTkwLjg5IEMgMjExLjgwIDE4OS40MCAyMTIuNDkgMTg3Ljg3IDIxMy43OSAxODYuODMgQyAyMTMuMTEgMTg4LjQ3IDIxMi4yNyAxOTAuMDYgMjEyLjA5IDE5MS44NiBDIDIxMy40MyAxOTAuNjcgMjE0LjY4IDE4OS4zOSAyMTUuOTUgMTg4LjEyIEMgMjE1LjQ1IDE4OS4zMiAyMTQuOTUgMTkwLjUzIDIxNC40NiAxOTEuNzQgQyAyMTYuODIgMTkyLjI3IDIxOC4xNSAxODkuOTIgMjE5Ljg5IDE4OC45NCBDIDIxOS40MCAxODkuODAgMjE4LjQyIDE5MS41NCAyMTcuOTMgMTkyLjQwIEMgMjE4LjY0IDE5Mi4xMyAyMjAuMDcgMTkxLjU4IDIyMC43OSAxOTEuMzEgQyAyMjEuMDMgMTkxLjY5IDIyMS41MSAxOTIuNDYgMjIxLjc1IDE5Mi44NCBDIDIyMi4yNiAxOTEuOTUgMjIzLjI3IDE5MC4xNyAyMjMuNzggMTg5LjI4IEwgMjIzLjYwIDE5My40NCBDIDIyNC43NiAxOTIuMzQgMjI1Ljg4IDE5MS4yMSAyMjYuOTYgMTkwLjA1IEMgMjI2Ljc3IDE5MC43OSAyMjYuMzkgMTkyLjI4IDIyNi4yMCAxOTMuMDMgTCAyMjguMjQgMTkzLjMyIEMgMjI3LjYxIDE5NC44NyAyMjYuOTggMTk2LjQyIDIyNi4zOSAxOTcuOTkgQyAyMjguMDIgMTk2LjcyIDIyOS42NCAxOTUuNDIgMjMxLjIxIDE5NC4wOCBDIDIzMS44NyAxOTMuOTUgMjMzLjE5IDE5My42OSAyMzMuODUgMTkzLjU2IEMgMjMyLjE4IDE5Ni41MSAyMzAuNTUgMTk5LjQ5IDIyOS4wNCAyMDIuNTMgQyAyMjAuNTMgMjAyLjM0IDIxMi4xOCAyMDAuNTkgMjAzLjc0IDE5OS42NiBDIDIwNC41OCAxOTYuNTMgMjA1LjQ1IDE5My40MSAyMDYuMjggMTkwLjI4IEMgMjA3Ljg5IDE5MC40OCAyMDkuNTIgMTkwLjY5IDIxMS4xNCAxOTAuODkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk0LjQ5IDIyOS40OSBDIDI5NC40OSAyMjAuMjEgMjk0LjQyIDIxMC45NCAyOTQuNTAgMjAxLjY3IEMgMzAwLjA2IDIwMS42OSAzMDUuNjIgMjAxLjcyIDMxMS4xOSAyMDEuNjcgQyAzMTEuMTggMjA1LjUzIDMxMS4xOCAyMDkuMzggMzExLjE4IDIxMy4yNCBDIDMxOC43MiAyMTMuMjAgMzI2LjI3IDIxMy4yMyAzMzMuODIgMjEzLjIzIEMgMzMzLjgyIDIyMC40OCAzMzMuODYgMjI3Ljc0IDMzMy44MCAyMzUuMDAgQyAzMzQuMTcgMjQzLjU4IDMyMy4wOCAyNDcuNzkgMzI0LjI5IDI1Ni41NiBDIDMxOC4xMiAyNTYuNTcgMzExLjk1IDI1Ni41OCAzMDUuNzggMjU2LjU1IEMgMzA1Ljg2IDI1My45NCAzMDUuMzkgMjUxLjAzIDMwNy4wNCAyNDguNzggQyAzMDkuNzggMjQ0LjYyIDMxMi45MCAyNDAuNzEgMzE1LjU3IDIzNi41MCBDIDMxNi45MyAyMzQuNDMgMzE2LjI3IDIzMS44MSAzMTYuNTAgMjI5LjQ4IEMgMzA5LjE2IDIyOS41MCAzMDEuODIgMjI5LjQ4IDI5NC40OSAyMjkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMC4wMCAyMDcuNDYgQyAxLjYyIDIyNS44NSAzLjk3IDI0NC4zMyA5Ljg5IDI2MS45MCBDIDI2LjgxIDMxNS4wNSA2Ny40MCAzNTkuNzYgMTE4LjE2IDM4Mi42NCBDIDE0MS4xMyAzOTMuMTQgMTY2LjE3IDM5OC43NiAxOTEuMzYgNDAwLjAwIEwgMC4wMCA0MDAuMDAgTCAwLjAwIDIwNy40NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzODIuODAgMjgxLjg2IEMgMzkzLjI5IDI1OC45MCAzOTguNTcgMjMzLjg2IDQwMC4wMCAyMDguNzMgTCA0MDAuMDAgNDAwLjAwIEwgMjEwLjI5IDQwMC4wMCBDIDIyNC42OCAzOTguODkgMjM5LjA4IDM5Ny4xMCAyNTIuOTkgMzkzLjExIEMgMzA5Ljk1IDM3Ny44MyAzNTguODIgMzM1LjY4IDM4Mi44MCAyODEuODYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gNzIuNTUgMjEzLjIwIEMgODMuMzggMjEzLjI1IDk0LjIxIDIxMy4yMCAxMDUuMDQgMjEzLjIzIEMgMTA4LjA4IDIxMy4yNCAxMTEuNDMgMjEzLjk3IDExMy40OCAyMTYuNDAgQyAxMTUuNDMgMjE4LjgxIDExNS41OSAyMjIuMDMgMTE1LjU5IDIyNS4wMCBDIDExNS41NiAyMzUuNTEgMTE1LjU5IDI0Ni4wMiAxMTUuNTggMjU2LjU0IEMgMTA5Ljk5IDI1Ni41OCAxMDQuNDAgMjU2LjU5IDk4LjgwIDI1Ni41MiBDIDk4LjY4IDI0Ny4yMyA5OS4zMSAyMzcuODggOTguNDYgMjI4LjYzIEMgOTUuMzMgMjI4LjQ1IDkyLjE5IDIyOC40NSA4OS4wNSAyMjguNDMgQyA4OC42MSAyMzUuODcgODkuMjAgMjQzLjM0IDg4Ljc0IDI1MC43OCBDIDg4LjUxIDI1My43MCA4Ni4wMiAyNTYuMDUgODMuMTUgMjU2LjMyIEMgNzcuNjMgMjU2Ljg2IDcyLjA2IDI1Ni40MyA2Ni41MiAyNTYuNTUgQyA2Ni41NSAyNTEuMjYgNjYuNTIgMjQ1Ljk2IDY2LjU0IDI0MC42NiBDIDY4LjQ0IDI0MC4yOSA3MS4wNyAyNDEuNDUgNzIuNDkgMjM5Ljc5IEMgNzIuNjUgMjMwLjkzIDcyLjUxIDIyMi4wNiA3Mi41NSAyMTMuMjAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjQ3LjI1IDIxMy4yNSBDIDI2MS42OSAyMTMuMjQgMjc2LjEzIDIxMy4xMyAyOTAuNTYgMjEzLjMxIEMgMjkwLjM3IDIyNy43MiAyOTAuNTEgMjQyLjE0IDI5MC40OSAyNTYuNTYgQyAyODQuOTIgMjU2LjU0IDI3OS4zNSAyNTYuNjMgMjczLjc4IDI1Ni41MSBDIDI3My44NiAyNDcuMTYgMjczLjczIDIzNy44MiAyNzMuODUgMjI4LjQ3IEMgMjcwLjQ5IDIyOC40NiAyNjcuMTQgMjI4LjQ0IDI2My43OSAyMjguNTEgQyAyNjMuODMgMjM3Ljg2IDI2My43NSAyNDcuMjIgMjYzLjg0IDI1Ni41OCBDIDI1OC4zMSAyNTYuNTQgMjUyLjc5IDI1Ni41OSAyNDcuMjcgMjU2LjU1IEMgMjQ3LjI3IDI0Mi4xMSAyNDcuMzAgMjI3LjY4IDI0Ny4yNSAyMTMuMjUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk3LjEwIDIxOS4xMiBDIDE5NS45OSAyMTcuNDkgMTk2LjM2IDIxNS43MCAxOTcuNjQgMjE0LjMxIEMgMjA0LjYzIDIxOC4zNCAyMTMuMDEgMjE4LjUzIDIyMC44MyAyMTkuNDAgQyAyMTguMTEgMjI0LjUxIDIxNi41MyAyMzAuMTAgMjE0LjQ4IDIzNS40OSBDIDIwOS4yMSAyMzQuNzUgMjAzLjk5IDIzMy43NSAxOTguNzEgMjMzLjE0IEMgMTk4LjY4IDIyOC40MyAxOTkuNDQgMjIzLjQ0IDE5Ny4xMCAyMTkuMTIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTkwLjA5IDIyMy4xNCBDIDE5Mi4wNCAyMjEuOTUgMTkzLjE0IDIxOS44NCAxOTUuMDYgMjE4LjYxIEMgMTk3LjE2IDIyNC41MSAxOTYuMjcgMjMwLjg4IDE5NS42OSAyMzYuOTYgQyAxOTEuMzcgMjM1LjMxIDE4Ni43MiAyMzUuMzAgMTgyLjE3IDIzNS4yNyBDIDE4My4wMiAyMzAuNDQgMTg1LjY2IDIyNS41NCAxOTAuMDkgMjIzLjE0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE1Mi40OSAyMzMuOTIgQyAxNTUuODIgMjMwLjIzIDE1OC4yMiAyMjUuNjkgMTYyLjA5IDIyMi41MSBDIDE2OS4xNCAyMjIuNDAgMTc2LjYzIDIyNC4zMyAxODIuMTggMjI4LjgyIEMgMTc5LjUxIDIzMi41NiAxNzYuODggMjM2LjM4IDE3NS4yOCAyNDAuNzIgQyAxNjcuNjQgMjM4LjY0IDE1OS45NiAyMzYuNTYgMTUyLjQ5IDIzMy45MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTkuNTUgMjUwLjE1IEMgMjAyLjcwIDI1MC44OCAyMDUuODEgMjUxLjgyIDIwOC44OSAyNTIuODEgQyAyMDYuOTggMjU2LjAyIDIwNC40OCAyNTkuMTUgMjAwLjk1IDI2MC42NSBDIDE5MS41NSAyNjEuMzEgMTgyLjAyIDI1OS4zNiAxNzMuNDcgMjU1LjQzIEMgMTczLjQ3IDI1NC44NCAxNzMuNDcgMjUzLjY4IDE3My40NyAyNTMuMDkgQyAxODEuODAgMjU1LjIzIDE5MC40MCAyNTcuNTIgMTk5LjAzIDI1NS42NSBDIDE5OS4yNiAyNTMuODIgMTk5LjQyIDI1MS45OSAxOTkuNTUgMjUwLjE1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDEzNC4wOSAyNjEuNDggQyAxMzYuNzEgMjU4LjA0IDEzOC45NSAyNTQuMjYgMTQyLjAzIDI1MS4yMSBDIDE0NS4wOSAyNTIuMjEgMTQ3Ljg5IDI1My44NyAxNTAuOTUgMjU0Ljg4IEMgMTU0LjEzIDI1Ni4wMiAxNTcuNTQgMjU2LjMxIDE2MC43NiAyNTcuMzQgQyAxNjMuMzMgMjU4LjMxIDE2NS42NCAyNTkuODQgMTY4LjA1IDI2MS4xNSBDIDE2Ni43MCAyNjYuMjQgMTY1LjEwIDI3MS4yNyAxNjIuODMgMjc2LjAzIEMgMTYxLjY4IDI3Ni4xMSAxNjAuNTIgMjc2LjE5IDE1OS4zNyAyNzYuMjkgQyAxNjAuNTQgMjc0LjI5IDE2MS4zNyAyNzIuMTEgMTYxLjY1IDI2OS44MCBDIDE2MC4zOCAyNzEuMzkgMTU5Ljk5IDI3NC4wNSAxNTguMDUgMjc0Ljg2IEMgMTU2LjYwIDI3My44OSAxNTYuMTUgMjcxLjg2IDE1NC42NiAyNzAuODIgQyAxNTQuODggMjcwLjMzIDE1NS4zMyAyNjkuMzQgMTU1LjU2IDI2OC44NSBDIDE1NS4xNCAyNjkuMTUgMTU0LjMxIDI2OS43NSAxNTMuODkgMjcwLjA2IEMgMTUzLjQwIDI3MC40MiAxNTIuNDEgMjcxLjE1IDE1MS45MiAyNzEuNTIgQyAxNTEuMzggMjcxLjM4IDE1MC4zMCAyNzEuMTIgMTQ5Ljc2IDI3MC45OSBDIDE0OC41OCAyNzIuOTIgMTQ3LjMxIDI3NC44NiAxNDUuMzggMjc2LjEyIEMgMTQ2LjEwIDI3My4zNyAxNDkuNzYgMjcwLjIzIDE0Ni40MyAyNjcuOTIgQyAxNDYuNTUgMjY2Ljg5IDE0Ni42OCAyNjUuODcgMTQ2LjgwIDI2NC44NiBDIDE0Ni4wMiAyNjUuOTggMTQ1LjIzIDI2Ny4xMCAxNDQuNDYgMjY4LjI0IEwgMTQzLjM3IDI2OS42NiBMIDE0My42MCAyNjcuMDQgQyAxNDMuNzkgMjY2LjIyIDE0NC4xNyAyNjQuNTcgMTQ0LjM2IDI2My43NCBDIDE0My40OSAyNjQuODggMTQyLjYyIDI2Ni4wMSAxNDEuNzkgMjY3LjE4IEMgMTQxLjM2IDI2Ni42MyAxNDAuNTAgMjY1LjUzIDE0MC4wNyAyNjQuOTcgQyAxNDAuNTIgMjYzLjU0IDE0MS4wMCAyNjIuMTIgMTQxLjQ3IDI2MC43MCBDIDE0MC44NSAyNjEuNTggMTQwLjIyIDI2Mi40NiAxMzkuNjAgMjYzLjM1IEMgMTM1LjgzIDI2Mi45NCAxMzUuMzggMjY3LjE2IDEzMy4wNiAyNjkuMTEgQyAxMzMuNzcgMjY2Ljk2IDEzNC43OCAyNjQuOTQgMTM1Ljc5IDI2Mi45MiBDIDEzNS4zNyAyNjIuNTYgMTM0LjUyIDI2MS44NCAxMzQuMDkgMjYxLjQ4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEzOS42MCAyNjMuMzUgQyAxNDAuMjIgMjYyLjQ2IDE0MC44NSAyNjEuNTggMTQxLjQ3IDI2MC43MCBDIDE0MS4wMCAyNjIuMTIgMTQwLjUyIDI2My41NCAxNDAuMDcgMjY0Ljk3IEMgMTM5LjQ2IDI2Ny42MSAxMzcuNzAgMjY5Ljc2IDEzNS4yMiAyNzAuODMgQyAxMzYuNTUgMjY4LjI2IDEzOC4xMSAyNjUuODIgMTM5LjYwIDI2My4zNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNi4xNiAyNjMuMTYgQyAzNy4xMSAyNjIuODEgMzguMDYgMjYyLjQ3IDM5LjAxIDI2Mi4xNCBDIDQwLjIyIDI2Ni4xNSA0My41MCAyNjkuNzcgNDMuMjQgMjc0LjA2IEMgNDAuNTAgMjc2LjE0IDM3LjE5IDI3Ny4yOCAzNC4xOCAyNzguOTAgQyAzMy40MSAyNzcuMzMgMzIuNjMgMjc1Ljc2IDMxLjg5IDI3NC4xOCBDIDM0LjM2IDI3My4wMSAzNi44MyAyNzEuODYgMzkuMzEgMjcwLjczIEMgMzguMjggMjY4LjE5IDM3LjIwIDI2NS42OSAzNi4xNiAyNjMuMTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzU3Ljg5IDI2Mi41NiBDIDM1OS41NSAyNjMuMjEgMzYxLjIwIDI2My44NyAzNjIuODcgMjY0LjUyIEMgMzYzLjE0IDI2NS45MiAzNjMuMTkgMjY3LjM0IDM2My4wNiAyNjguNzYgQyAzNjQuOTYgMjY3Ljk3IDM2Ni44NCAyNjcuMTQgMzY4LjczIDI2Ni4zMSBDIDM2Ny45NiAyNjguMDQgMzY3LjE5IDI2OS43NyAzNjYuNDcgMjcxLjUyIEMgMzYzLjg5IDI3Mi43MiAzNjEuMjQgMjczLjc0IDM1OC42MSAyNzQuODAgQyAzNjAuMTIgMjc1Ljg0IDM2MS43OCAyNzYuNjIgMzYzLjQ5IDI3Ny4yNiBDIDM2Mi44MSAyNzguOTAgMzYyLjEwIDI4MC41MiAzNjEuMzggMjgyLjE0IEMgMzU5LjQ0IDI4MS4yNCAzNTcuNTYgMjgwLjIyIDM1NS43MyAyNzkuMTQgQyAzNTUuNzUgMjc4LjI5IDM1NS43OSAyNzYuNTggMzU1LjgyIDI3NS43MiBDIDM1NC4yMyAyNzYuMzIgMzUyLjY0IDI3Ni45MiAzNTEuMDYgMjc3LjUyIEMgMzUxLjY4IDI3NS44NiAzNTIuMTYgMjc0LjAzIDM1My40MiAyNzIuNzMgQyAzNTUuODIgMjcxLjYwIDM1OC4zNyAyNzAuODEgMzYwLjgzIDI2OS44MSBDIDM1OS4zMyAyNjguNjQgMzU3LjYyIDI2Ny44MCAzNTUuODcgMjY3LjA3IEMgMzU2LjU1IDI2NS41NiAzNTcuMjIgMjY0LjA2IDM1Ny44OSAyNjIuNTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTQxLjc5IDI2Ny4xOCBDIDE0Mi42MiAyNjYuMDEgMTQzLjQ5IDI2NC44OCAxNDQuMzYgMjYzLjc0IEMgMTQ0LjE3IDI2NC41NyAxNDMuNzkgMjY2LjIyIDE0My42MCAyNjcuMDQgQyAxNDIuODMgMjY5LjQ1IDE0MS45OCAyNzIuMzUgMTM5LjMwIDI3My4yMiBDIDE0MC4wNyAyNzEuMTggMTQwLjc3IDI2OS4xMCAxNDEuNzkgMjY3LjE4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE0NC40NiAyNjguMjQgQyAxNDUuMjMgMjY3LjEwIDE0Ni4wMiAyNjUuOTggMTQ2LjgwIDI2NC44NiBDIDE0Ni42OCAyNjUuODcgMTQ2LjU1IDI2Ni44OSAxNDYuNDMgMjY3LjkyIEMgMTQ1LjcxIDI2OS44NiAxNDQuOTEgMjcxLjc3IDE0NC4yMCAyNzMuNzEgQyAxNDMuOTggMjczLjY4IDE0My41NCAyNzMuNjAgMTQzLjMyIDI3My41NiBDIDE0My42NyAyNzEuNzggMTQzLjkxIDI2OS45NyAxNDQuNDYgMjY4LjI0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM5LjYzIDI3OS4yOSBDIDQxLjYyIDI3OC4yNCA0My42MCAyNzcuMTcgNDUuNjAgMjc2LjE0IEMgNDYuMzYgMjc3LjU5IDQ3LjEzIDI3OS4wNSA0Ny44OCAyODAuNTEgQyA0NS44OCAyODEuNTkgNDMuODkgMjgyLjY2IDQxLjg3IDI4My43MCBDIDQxLjEzIDI4Mi4yMyA0MC4zOCAyODAuNzYgMzkuNjMgMjc5LjI5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMxNS4xMiAyNzUuODggQyAzMTYuNTUgMjc3Ljg1IDMxNy4zMyAyODAuMTggMzE4LjEzIDI4Mi40NiBDIDMxOC42MyAyODEuMTMgMzE5LjE2IDI3OS44MSAzMTkuNzIgMjc4LjUwIEMgMzE5LjY4IDI4Mi40MiAzMTguODAgMjg2LjgwIDMyMi4wNSAyODkuNzYgTCAzMjIuMTUgMjg5LjkwIEMgMzIxLjU0IDI5MC41NyAzMjAuOTQgMjkxLjI2IDMyMC4zNSAyOTEuOTUgQyAzMTguMTkgMjg4LjY3IDMxNi4xNSAyODQuNTQgMzExLjcwIDI4NC4yMyBDIDMxMi44MiAyODMuOTMgMzEzLjk1IDI4My42NCAzMTUuMDggMjgzLjM1IEMgMzEzLjYxIDI4Mi43NSAzMTIuMzUgMjgxLjg3IDMxMS4zMCAyODAuNjkgQyAzMTIuNzggMjgxLjIwIDMxNC4yMyAyODEuNzcgMzE1LjY3IDI4Mi4zOSBDIDMxNC40NCAyODAuODcgMzEzLjIyIDI3OS4zNiAzMTIuMTggMjc3LjcyIEMgMzEzLjgwIDI3OC42NCAzMTUuMzEgMjc5LjczIDMxNi43MSAyODEuMDAgQyAzMTYuMzEgMjc5LjcyIDMxNS41MiAyNzcuMTYgMzE1LjEyIDI3NS44OCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA3Ny44OSAyODkuMDIgQyA4Mi42NyAyODUuOTMgODYuNjYgMjgxLjgzIDg5Ljc3IDI3Ny4wNyBDIDkwLjE4IDI3Ny4zOSA5MS4wMSAyNzguMDIgOTEuNDIgMjc4LjM0IEMgOTEuNzAgMjc5LjExIDkyLjI2IDI4MC42NCA5Mi41MyAyODEuNDAgQyA4OS4xOCAyODUuMTAgODUuMTIgMjg4LjEyIDgxLjA5IDI5MS4wNCBDIDgxLjI1IDI5Mi4yMyA4MS41MCAyOTMuNDEgODEuNzMgMjk0LjYwIEMgODMuMjYgMjkzLjk0IDg0LjgxIDI5My44NyA4Ni40MCAyOTQuNDAgQyA4Ny4zNyAyOTYuNjUgODguNDAgMjk4LjkzIDg4LjM0IDMwMS40NSBDIDg1Ljg1IDI5OS41OSA4NC4zOSAyOTYuNTUgODEuNTMgMjk1LjE5IEMgODAuMTMgMjkzLjI0IDc5LjQzIDI5MC44OCA3Ny44OSAyODkuMDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQzLjcyIDI4OS43MyBDIDM0Ni4wMyAyODYuMjcgMzQ3LjM3IDI4MS45MiAzNTAuODUgMjc5LjQxIEMgMzUzLjkyIDI4MS4wMSAzNTYuOTMgMjgyLjcyIDM1OS45NSAyODQuNDMgQyAzNTkuMTQgMjg1LjkzIDM1OC4zMSAyODcuNDEgMzU3LjQ4IDI4OC44OSBDIDM1NS4wNSAyODcuNTAgMzUyLjY1IDI4Ni4wNCAzNTAuMTUgMjg0LjgwIEMgMzQ4Ljk1IDI4Ni45OSAzNDcuNjAgMjg5LjEwIDM0Ni4yMyAyOTEuMTkgQyAzNDUuNjAgMjkwLjgzIDM0NC4zNSAyOTAuMTAgMzQzLjcyIDI4OS43MyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA0My40MiAyODkuNTYgQyA0NS40OSAyODcuNDUgNDcuMzYgMjg1LjE2IDQ5LjIwIDI4Mi44NSBDIDUwLjA5IDI4NC4yNyA1MC45NyAyODUuNzAgNTEuODYgMjg3LjEyIEMgNDkuODggMjg5LjM0IDQ3Ljc2IDI5MS40NiA0Ni4xNCAyOTMuOTYgQyA0Ni41MyAyOTQuMzcgNDcuMzEgMjk1LjE4IDQ3LjcwIDI5NS41OSBDIDQ5LjkxIDI5NC4xMyA1Mi4xMCAyOTIuNjUgNTQuMTkgMjkxLjAzIEMgNTUuMTYgMjkyLjMxIDU2LjE0IDI5My41OCA1Ni45MSAyOTUuMDAgQyA1My44OCAyOTYuODMgNTAuNzQgMzAxLjI4IDQ2Ljg1IDI5OS40MCBDIDQzLjQ0IDI5Ni4zMyA0MS41NSAyOTEuOTUgMzkuMjAgMjg4LjA4IEMgMzkuODkgMjg3LjczIDQxLjI3IDI4Ny4wNCA0MS45NyAyODYuNjkgQyA0Mi4zMyAyODcuNDEgNDMuMDYgMjg4Ljg0IDQzLjQyIDI4OS41NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA5Ny44NiAyODguMDAgQyAxMDAuNjEgMjg2LjQ0IDEwMy41MiAyODUuMTkgMTA2LjE2IDI4My40MyBDIDEwNi4yOSAyODQuMDkgMTA2LjU2IDI4NS40MCAxMDYuNjkgMjg2LjA1IEMgMTA0LjEwIDI4OC4wNyAxMDEuMTkgMjg5LjYxIDk4LjM3IDI5MS4yNiBDIDk3LjMyIDI5Ny42MiA5OC4wNyAzMDQuMDggOTcuMjQgMzEwLjQ2IEMgOTUuNjMgMzA5LjMxIDk0LjExIDMwOC4wNSA5Mi42NCAzMDYuNzMgQyA5Mi44NSAzMDIuNTUgOTMuNDAgMjk4LjM4IDk0LjU2IDI5NC4zNSBDIDk1LjIyIDI5Mi4wNyA5NS43MCAyODkuMzYgOTcuODYgMjg4LjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMwNi40NyAyODYuNzYgQyAzMDYuOTIgMjg0LjgyIDMwOC41OSAyODUuMjMgMzA5LjI4IDI4Ni43OCBDIDMwOS41OSAyODYuNjQgMzEwLjIzIDI4Ni4zNCAzMTAuNTUgMjg2LjE5IEMgMzExLjEzIDI5MC40MSAzMTIuNTggMjk0LjU2IDMxNi4xNSAyOTcuMTUgQyAzMTUuMzcgMjk4LjAxIDMxNC41OSAyOTguODYgMzEzLjgxIDI5OS43MiBDIDMxMS40NyAyOTYuNzQgMzA4LjQ3IDI5NC40MSAzMDUuNDEgMjkyLjIyIEMgMzA2LjI3IDI5Mi4yMyAzMDcuOTcgMjkyLjI1IDMwOC44MiAyOTIuMjYgQyAzMDcuNzEgMjkwLjk4IDMwNi41OSAyODkuNzIgMzA1LjQ5IDI4OC40NCBDIDMwNi4xNCAyODguNTUgMzA3LjQ1IDI4OC43NSAzMDguMTAgMjg4Ljg2IEMgMzA3LjY5IDI4OC4zMyAzMDYuODggMjg3LjI5IDMwNi40NyAyODYuNzYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjc4Ljc4IDI5Mi4wMCBDIDI4MC4xNiAyOTAuMTcgMjgwLjUzIDI4Ny45NCAyODAuOTUgMjg1Ljc1IEMgMjgyLjM5IDI5My43OSAyODYuMzkgMzAwLjkxIDI5MC4xNyAzMDguMDMgQyAyOTEuMjAgMzAzLjkxIDI5Mi4xNSAyOTkuNzUgMjkzLjY4IDI5NS43NyBDIDI5My4zNSAyOTQuOTIgMjkzLjAyIDI5NC4wNyAyOTIuNzAgMjkzLjIzIEMgMjkzLjAyIDI5MS45MyAyOTMuMzQgMjkwLjYzIDI5My42NyAyODkuMzMgQyAyOTUuMzUgMjg5LjUwIDI5Ny4xNyAyODkuNDcgMjk4LjU4IDI5MC41NyBDIDMwMi4xMSAyOTIuOTEgMzA1Ljc4IDI5NS4wNyAzMDkuMDcgMjk3Ljc2IEMgMzEwLjY0IDI5OC44MiAzMTAuOTMgMzAwLjgwIDMxMS42MCAzMDIuNDQgQyAzMTAuMjQgMzAzLjc4IDMwOC45MiAzMDUuMTUgMzA3LjYzIDMwNi41NiBDIDMwNy41MCAzMDUuMzcgMzA3LjM2IDMwNC4xOCAzMDcuMjMgMzAzLjAwIEMgMzA0LjA3IDMwMC44MiAzMDEuOTUgMjk3LjUxIDI5OC44NyAyOTUuMjcgQyAyOTcuMTEgMjk1LjI4IDI5NS40NiAyOTUuOTkgMjkzLjc4IDI5Ni40MCBDIDI5My42MiAyOTguMTAgMjkzLjQzIDI5OS44MSAyOTMuMjIgMzAxLjUxIEMgMjk0LjMyIDMwMS45NSAyOTUuNDIgMzAyLjQxIDI5Ni41MyAzMDIuODcgQyAyOTUuNTcgMzA0LjA1IDI5NC42MyAzMDUuMjMgMjkzLjYzIDMwNi4zNiBDIDI5My4wNCAzMDguNTIgMjkyLjE1IDMxMC41NyAyOTEuMzUgMzEyLjY1IEMgMjkxLjg4IDMxMi43NiAyOTIuOTQgMzEyLjk4IDI5My40NyAzMTMuMDkgQyAyOTIuMzcgMzE1LjEyIDI5My4yNyAzMTcuMjkgMjkzLjYzIDMxOS4zNyBDIDI3Mi45NSAzMzQuODYgMjQ4Ljc2IDM0Ni4wNyAyMjMuMDcgMzQ5LjczIEMgMTk2LjkyIDM1My4zNSAxNjkuNjYgMzUxLjA0IDE0NS4xMCAzNDEuMDUgQyAxMzQuNTYgMzM3LjE3IDEyNC45NSAzMzEuMzMgMTE1LjI4IDMyNS43NCBDIDExNS40NCAzMjUuNTYgMTE1Ljc1IDMyNS4yMCAxMTUuOTEgMzI1LjAyIEMgMTE2LjEyIDMyNC45NyAxMTYuNTUgMzI0Ljg3IDExNi43NiAzMjQuODIgQyAxMTUuODMgMzIyLjI1IDExNi4wMSAzMTkuNTQgMTE2LjU1IDMxNi45MiBDIDExNy4xNCAzMTYuMDIgMTE3LjY4IDMxNS4wOSAxMTguMTggMzE0LjE0IEMgMTE4Ljc0IDMxMi4wNSAxMTUuNDMgMzE1LjEyIDExNC40NCAzMTUuMTYgQyAxMTMuNzcgMzE4LjI4IDExMy4yOSAzMjEuODkgMTE1LjEwIDMyNC43NSBDIDExNC45MyAzMjQuODcgMTE0LjYwIDMyNS4xMyAxMTQuNDMgMzI1LjI2IEMgMTA4LjgxIDMyMC41NyAxMDMuMDYgMzE2LjAwIDk3LjM0IDMxMS40NCBDIDEwMC40NCAzMTAuMDMgMTAzLjg1IDMwOC43OSAxMDYuMjIgMzA2LjI0IEMgMTA3LjkxIDMwMi45NSAxMDkuMjkgMjk5LjQ0IDExMS42OCAyOTYuNTYgQyAxMTEuMjggMjk4LjI4IDExMC42OCAyOTkuOTUgMTEwLjEwIDMwMS42MyBDIDExMC43NSAzMDEuOTAgMTEyLjA0IDMwMi40NSAxMTIuNjkgMzAyLjcyIEMgMTExLjk4IDMwMy41OCAxMTEuMTkgMzA0LjM4IDExMC4zOSAzMDUuMTUgQyAxMDkuNDYgMzA2LjkwIDEwOC4yOCAzMDguNTAgMTA2Ljk1IDMwOS45NyBDIDEwOC4zMCAzMTAuMjYgMTA5LjY0IDMxMC41OSAxMTAuOTggMzEwLjk4IEMgMTExLjYwIDMwNy41NyAxMTIuODUgMzA0LjMzIDExNC4wNCAzMDEuMTAgQyAxMTUuNDggMjk4LjAxIDExMi40NSAyOTUuMDcgMTEzLjIxIDI5MS44NyBDIDExMi41OSAyODkuNTYgMTE0Ljk3IDI4OS42NyAxMTUuMzggMjkxLjk1IEMgMTE1LjgwIDI5MS40MyAxMTYuNjYgMjkwLjM5IDExNy4wOSAyODkuODggQyAxMTYuODkgMjkwLjg0IDExNi41MSAyOTIuNzcgMTE2LjMyIDI5My43NCBDIDExNy4xNCAyOTIuOTEgMTE4Ljc4IDI5MS4yNyAxMTkuNjAgMjkwLjQ1IEMgMTE5LjA4IDI5MS40MCAxMTguMDQgMjkzLjMwIDExNy41MiAyOTQuMjUgQyAxMTguMjggMjkzLjkwIDExOS44MiAyOTMuMjIgMTIwLjU4IDI5Mi44NyBDIDExNy4zMSAyOTguNDQgMTE2LjMxIDMwNC45MSAxMTUuMTkgMzExLjE2IEMgMTE4Ljg4IDMxMC40MyAxMjIuMzYgMzA4LjgyIDEyNC45OCAzMDYuMDYgQyAxMjQuNTEgMzA1LjU1IDEyMy41NyAzMDQuNTMgMTIzLjEwIDMwNC4wMiBDIDEyMy44MyAzMDMuMzcgMTI1LjMwIDMwMi4wNyAxMjYuMDMgMzAxLjQyIEMgMTI1LjIyIDMwMS40NiAxMjMuNjAgMzAxLjUzIDEyMi43OCAzMDEuNTcgQyAxMjQuNjQgMjk5LjgxIDEyNi4zNiAyOTcuOTEgMTI3LjY3IDI5NS43MSBDIDEyNy4wOCAyOTguMzMgMTI3LjM2IDMwMC45OSAxMjcuOTQgMzAzLjU5IEMgMTI4Ljk5IDMwMy45NiAxMzEuMTEgMzA0LjcwIDEzMi4xNiAzMDUuMDggQyAxMzEuMDMgMzA1LjgzIDEyOS44OSAzMDYuNTggMTI4Ljc1IDMwNy4zMiBMIDEzMS44MiAzMDcuMDYgQyAxMzEuMDggMzA3LjgwIDEyOS41OCAzMDkuMjcgMTI4LjgzIDMxMC4wMCBDIDEyOS45MCAzMTQuMjMgMTMxLjc4IDMxOC4xOSAxMzMuMDMgMzIyLjM2IEMgMTMzLjYyIDMyMC45OSAxMzQuMTYgMzE5LjU5IDEzNC42NSAzMTguMTggTCAxMzUuMzggMzE4LjU2IEMgMTM2Ljc0IDMxMy43OSAxMzkuMTQgMzA5LjQ0IDE0MC45NyAzMDQuODUgQyAxNDYuOTAgMzAxLjc5IDE1My41MCAzMDAuMzcgMTU5LjcxIDI5OC4wMSBDIDE2MC44NyAzMDAuMzQgMTYwLjU3IDMwMi44MCAxNTkuMTggMzA0Ljk3IEMgMTU3LjczIDMwNC4yMSAxNTYuMzAgMzAzLjQzIDE1NC44OCAzMDIuNjMgQyAxNTEuMDIgMzAzLjY4IDE0Ny43MyAzMDUuOTkgMTQ0LjQzIDMwOC4xNCBDIDE0My41OSAzMTEuNjYgMTQyLjk4IDMxNS4yNSAxNDMuNTAgMzE4Ljg4IEMgMTQzLjk3IDMxOC43NiAxNDQuOTIgMzE4LjU0IDE0NS4zOSAzMTguNDMgQyAxNDUuNTYgMzE2LjIzIDE0NS41OCAzMTQuMDIgMTQ1Ljg4IDMxMS44MyBDIDE0Ni4yNiAzMDguODMgMTQ4Ljc0IDMwNi41OSAxNTEuMzQgMzA1LjM0IEMgMTUzLjUxIDMwNS4wOSAxNTUuMDggMzA2Ljk1IDE1Ni44MSAzMDcuOTUgQyAxNTYuODQgMzA5LjM0IDE1Ni44NyAzMTAuNzQgMTU2LjkxIDMxMi4xNCBDIDE1Ni4wOCAzMTMuMDUgMTU1LjI2IDMxMy45NSAxNTQuNDMgMzE0Ljg3IEMgMTU0LjY2IDMxNy41NiAxNTUuMDMgMzIwLjI0IDE1NS40MyAzMjIuOTEgQyAxNTcuOTcgMzIxLjIzIDE2MC45OCAzMjAuOTEgMTYzLjk2IDMyMS4xNSBDIDE2NC45NCAzMjEuODggMTY1LjkyIDMyMi42MiAxNjYuOTAgMzIzLjM3IEMgMTY4Ljc3IDMyMS40MCAxNzAuODQgMzE5LjU5IDE3Mi4zNSAzMTcuMzIgQyAxNzMuNDggMzE1LjI3IDE3My45NCAzMTIuOTMgMTc1LjAxIDMxMC44NSBDIDE3NS4yOSAzMTEuNzUgMTc1Ljg0IDMxMy41MyAxNzYuMTIgMzE0LjQzIEMgMTc2LjYzIDMxMy4xOSAxNzYuMTcgMzExLjk2IDE3NS44MSAzMTAuNzggQyAxNzYuNzMgMzEwLjU2IDE3Ny42NSAzMTAuMzggMTc4LjU4IDMxMC4yMiBDIDE3OC43MSAzMTEuODMgMTc4Ljc3IDMxMy40NCAxNzguNzAgMzE1LjA2IEMgMTczLjUzIDMxNy4wMiAxNzIuMDAgMzIyLjgzIDE2OS4yNSAzMjcuMTAgQyAxNzAuMDUgMzI4LjY5IDE3MS4wMiAzMzAuMTkgMTcxLjkxIDMzMS43NCBDIDE3Ny4wOSAzMjQuMjcgMTgyLjY5IDMxNi4zNSAxODMuNTEgMzA3LjAxIEMgMTg0LjY0IDMwNy41OCAxODYuMTkgMzA3Ljc1IDE4Ni43OSAzMDkuMDQgQyAxODcuMzQgMzEwLjcwIDE4Ni4yOCAzMTIuMjUgMTg1LjY2IDMxMy43MyBDIDE4My44OSAzMTcuMzAgMTgyLjUyIDMyMS4wNiAxODAuODUgMzI0LjY4IEMgMTgxLjcyIDMyNC42MiAxODMuNDYgMzI0LjUyIDE4NC4zMiAzMjQuNDcgQyAxODQuNjUgMzI0LjczIDE4NS4zMSAzMjUuMjcgMTg1LjYzIDMyNS41NCBDIDE4Ny40MyAzMjQuMzQgMTg5LjI4IDMyMy4yMSAxOTAuOTkgMzIxLjg5IEMgMTkzLjU2IDMxOS45OCAxOTQuNDggMzE2Ljc2IDE5Ni40MiAzMTQuMzQgQyAxOTcuMzkgMzEyLjYyIDE5OS43MSAzMTMuNDggMjAxLjI4IDMxMy4wNSBDIDIwMS4wNyAzMTMuMzkgMjAwLjY0IDMxNC4wNiAyMDAuNDIgMzE0LjQwIEMgMjAwLjQxIDMxNS43OCAyMDEuMTEgMzE3LjYwIDE5OS41MSAzMTguMzggQyAxOTUuNTUgMzIxLjA5IDE5MS43OCAzMjQuMDUgMTg4LjM5IDMyNy40NiBDIDE4OC43NSAzMjkuOTMgMTg4Ljg0IDMzMi40NCAxODkuMzEgMzM0LjkwIEMgMTg5Ljg1IDMzNi41NCAxOTEuNjQgMzM3LjE5IDE5Mi45MSAzMzguMTUgQyAxOTIuMTEgMzM2LjM1IDE5MS4xNiAzMzQuNjIgMTkwLjQzIDMzMi43OSBDIDE4OS43MCAzMjkuOTUgMTkwLjg2IDMyNy4xMyAxOTEuNzYgMzI0LjQ5IEMgMTkzLjkxIDMyNC4zMSAxOTYuNTIgMzIyLjk4IDE5OC4zOCAzMjQuNjkgQyAyMDAuMTkgMzI2LjYyIDIwMS42NyAzMjguOTIgMjA0LjExIDMzMC4xNiBDIDIwNC44NCAzMzEuMTUgMjA1LjU2IDMzMi4xNCAyMDYuMzAgMzMzLjEzIEMgMjA2LjQ3IDMyNy40MyAyMDQuMzQgMzIxLjczIDIwNS41OCAzMTYuMDYgQyAyMDUuNzQgMzE0LjkzIDIwNi44NCAzMTQuMzMgMjA3LjU1IDMxMy41NyBDIDIwNy45NCAzMTQuOTcgMjA4LjMyIDMxNi4zOCAyMDguNjcgMzE3LjgwIEMgMjA4LjA3IDMxOS4zMiAyMDYuNjggMzIwLjg2IDIwNy40MCAzMjIuNjAgQyAyMDguMzcgMzI0LjQxIDIxMC45NyAzMjUuMjIgMjEwLjQ0IDMyNy43NCBDIDIxMi4zNyAzMjUuNzYgMjE1LjA1IDMyNS4xNyAyMTcuNjUgMzI0LjYwIEMgMjE3LjAwIDMyMy42OSAyMTYuMzcgMzIyLjc3IDIxNS43NCAzMjEuODYgQyAyMTQuNDUgMzIxLjMwIDIxMy4xOCAzMjAuNjggMjExLjkyIDMyMC4wNCBDIDIxMi43NyAzMTkuMTkgMjEzLjY0IDMxOC4zNCAyMTQuNTEgMzE3LjUwIEMgMjEzLjkwIDMxNS45OCAyMTMuMzQgMzE0LjQ1IDIxMi44NyAzMTIuOTAgQyAyMTUuNTUgMzE1LjkxIDIxNy4zMiAzMTkuNjIgMjIwLjE0IDMyMi41MiBDIDIyMi44MSAzMTcuNzggMjE5Ljc3IDMxMi4xMSAyMjIuNjQgMzA3LjQ5IEMgMjIzLjA3IDMwNy41MSAyMjMuOTMgMzA3LjU2IDIyNC4zNiAzMDcuNTggQyAyMjQuOTQgMzA5LjQwIDIyNS41MyAzMTEuMjIgMjI2LjI3IDMxMi45OCBDIDIyMi40OSAzMTcuODkgMjI0Ljk3IDMyNC4wNiAyMjUuNTcgMzI5LjU2IEMgMjI2LjM4IDMyOS4zMyAyMjguMDEgMzI4Ljg3IDIyOC44MiAzMjguNjQgQyAyMzEuNzkgMzIxLjAxIDIzNC42MyAzMTIuODggMjMzLjM5IDMwNC41NCBDIDIzNC42MCAzMDUuMjEgMjM3LjY1IDMwNC45MSAyMzcuNTIgMzA3LjAxIEMgMjM3LjI3IDMxMS41NCAyMzUuNjUgMzE1LjkwIDIzNS4zMSAzMjAuNDUgQyAyMzYuMDggMzIwLjIwIDIzNi44NCAzMTkuOTUgMjM3LjYxIDMxOS43MSBDIDIzNi41NyAzMTYuMjAgMjM4LjIyIDMxMi42MyAyNDEuNzMgMzExLjQ2IEMgMjQyLjkwIDMxMi4yMyAyNDQuMDggMzEzLjAwIDI0NS4yNiAzMTMuNzYgQyAyNDUuNzIgMzE2LjMyIDI0Ni4yOSAzMTguODYgMjQ2Ljc3IDMyMS40MSBDIDI0OS43NyAzMjIuMzggMjUyLjQyIDMyNC4xMSAyNTUuMTkgMzI1LjU5IEMgMjU2LjQyIDMyNC4zNSAyNTcuNjIgMzIzLjA3IDI1OC44MCAzMjEuNzggQyAyNTguODYgMzE5LjA4IDI1OC45MSAzMTYuMzkgMjU4Ljg5IDMxMy42OSBDIDI1Ni44MyAzMTIuNDggMjU0Ljg0IDMxMS4xNyAyNTMuMDAgMzA5LjY1IEMgMjU0LjQwIDMwOS42NiAyNTUuODAgMzA5LjcwIDI1Ny4yMCAzMDkuNzYgQyAyNTYuMjggMzA2LjY1IDI1Ni4wNyAzMDMuMzkgMjU2LjA5IDMwMC4xNiBDIDI1Ny43OCAzMDEuMDMgMjU4LjcxIDMwMi42NiAyNTkuNTQgMzA0LjI4IEMgMjU5Ljc3IDMwMi45NyAyNjAuMDIgMzAxLjY2IDI2MC4yOCAzMDAuMzYgQyAyNjEuNTIgMzA1LjM0IDI2MS43NyAzMTAuOTYgMjY1Ljg2IDMxNC42MiBDIDI2Ni43NCAzMTIuNzggMjY3LjIyIDMxMC41MSAyNjkuMTMgMzA5LjQzIEMgMjcyLjE2IDMwNy4zNSAyNzQuODcgMzA0LjgxIDI3OC4wNiAzMDIuOTQgQyAyNzcuNTkgMzA1LjM4IDI3NS41NCAzMDYuODIgMjczLjY3IDMwOC4xOSBDIDI3NS41NiAzMDkuNTYgMjc2Ljg5IDMxMS41MSAyNzguMjMgMzEzLjM5IEMgMjc4LjUyIDMxMi44NyAyNzkuMTAgMzExLjgxIDI3OS4zOSAzMTEuMjggQyAyODAuNTQgMzEwLjkyIDI4MS43MCAzMTAuNTggMjgyLjg3IDMxMC4yNCBDIDI4NC4wNiAzMTAuOTEgMjg1LjI1IDMxMS41NyAyODYuNDUgMzEyLjI0IEMgMjg0Ljk2IDMwOC45NSAyODMuODYgMzA1LjUwIDI4Mi41OSAzMDIuMTIgQyAyODEuODIgMjk5LjU3IDI3OC41OCAyOTguNzQgMjc4LjA1IDI5Ni4wOSBDIDI3Ny4zNyAyOTMuMjMgMjc2LjIyIDI5MC41MiAyNzUuMzggMjg3LjcxIEMgMjc2LjgyIDI4OC44OCAyNzcuNzggMjkwLjQ3IDI3OC43OCAyOTIuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQyLjQ1IDI5MS4zMiBDIDM0NS43MyAyOTMuMzggMzQ4Ljk1IDI5NS41MSAzNTIuMTAgMjk3Ljc3IEMgMzUxLjE5IDI5OS4wMCAzNTAuMzAgMzAwLjI0IDM0OS4zOSAzMDEuNDggQyAzNDguODMgMzAxLjA3IDM0Ny43MCAzMDAuMjUgMzQ3LjE0IDI5OS44NCBDIDM0Ny4xNiAzMDEuODIgMzQ3LjY1IDMwMy45MyAzNDYuNzMgMzA1LjgwIEMgMzQ1LjQ0IDMwNi4wMSAzNDQuNDggMzA1LjA0IDM0My40NyAzMDQuNDYgQyAzNDQuMzQgMzAxLjk1IDM0NS40NiAyOTguNzIgMzQyLjc5IDI5Ni44MyBDIDM0MS41NCAyOTcuOTkgMzQwLjgxIDMwMC4wOCAzMzkuMjIgMzAwLjY2IEMgMzM4LjY2IDMwMC4yOSAzMzcuNTUgMjk5LjU0IDMzNy4wMCAyOTkuMTcgQyAzMzguOTQgMjk2LjY1IDM0MC44MCAyOTQuMDUgMzQyLjQ1IDI5MS4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA1NS41NiAyOTguMzkgQyA1Ny4zMyAyOTYuOTUgNTkuMTggMjk1LjYxIDYxLjA0IDI5NC4yOCBDIDYxLjk0IDI5NS41NCA2Mi44NiAyOTYuNzkgNjMuNzkgMjk4LjAzIEMgNjIuNzcgMjk4Ljc0IDYxLjc2IDI5OS40NCA2MC43NCAzMDAuMTUgQyA2Mi4zOCAzMDIuMzQgNjQuMDcgMzA0LjQ5IDY1Ljc3IDMwNi42MyBDIDY0LjI2IDMwNy44OCA2Mi44NCAzMDkuMjQgNjEuMTYgMzEwLjI3IEMgNTguODAgMzEwLjM5IDU2LjQzIDMxMC4xMiA1NC4wNyAzMTAuMjcgQyA1My4wOCAzMDkuMDIgNTIuMDkgMzA3Ljc3IDUxLjE0IDMwNi40OSBDIDUzLjQwIDMwNS4zMCA1NS44OCAzMDYuMTggNTguMjMgMzA2LjUxIEMgNTguODEgMzA2LjE1IDU5Ljk5IDMwNS40MyA2MC41NyAzMDUuMDcgQyA1OC44OSAzMDIuODUgNTcuMjMgMzAwLjYyIDU1LjU2IDI5OC4zOSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzggMjk2LjQwIEMgMjk1LjQ2IDI5NS45OSAyOTcuMTEgMjk1LjI4IDI5OC44NyAyOTUuMjcgQyAzMDEuOTUgMjk3LjUxIDMwNC4wNyAzMDAuODIgMzA3LjIzIDMwMy4wMCBDIDMwNy4zNiAzMDQuMTggMzA3LjUwIDMwNS4zNyAzMDcuNjMgMzA2LjU2IEMgMzA2LjkzIDMwNy4yMSAzMDYuMjIgMzA3Ljg3IDMwNS41MyAzMDguNTQgQyAzMDQuNDMgMzA3LjIzIDMwMy4zMiAzMDUuOTMgMzAyLjI3IDMwNC42MCBDIDMwMS4zNCAzMDQuOTMgMzAwLjQyIDMwNS4yNiAyOTkuNTEgMzA1LjYwIEMgMjk5LjQwIDMwNC45NCAyOTkuMjAgMzAzLjYxIDI5OS4wOSAzMDIuOTQgQyAyOTguMDkgMzA0LjIwIDI5Ny4xMiAzMDUuNDggMjk2LjIwIDMwNi43OSBDIDI5NS42MSAzMDYuNzggMjk0LjQzIDMwNi43NSAyOTMuODQgMzA2Ljc0IEMgMjk2LjEzIDMwOC4yMyAyOTQuOTAgMzA5Ljc1IDI5My4yMSAzMTEuMTUgQyAyOTMuODMgMzExLjU5IDI5NC40NSAzMTIuMDIgMjk1LjA3IDMxMi40NyBDIDI5NC42NiAzMTMuOTIgMjk0LjI4IDMxNS4zOSAyOTMuOTAgMzE2Ljg2IEMgMjk0LjQ5IDMxNi43MSAyOTUuNjYgMzE2LjQxIDI5Ni4yNSAzMTYuMjYgQyAyOTUuMzcgMzE3LjI5IDI5NC41MSAzMTguMzQgMjkzLjYzIDMxOS4zNyBDIDI5My4yNyAzMTcuMjkgMjkyLjM3IDMxNS4xMiAyOTMuNDcgMzEzLjA5IEMgMjkyLjk0IDMxMi45OCAyOTEuODggMzEyLjc2IDI5MS4zNSAzMTIuNjUgQyAyOTIuMTUgMzEwLjU3IDI5My4wNCAzMDguNTIgMjkzLjYzIDMwNi4zNiBDIDI5NC42MyAzMDUuMjMgMjk1LjU3IDMwNC4wNSAyOTYuNTMgMzAyLjg3IEMgMjk1LjQyIDMwMi40MSAyOTQuMzIgMzAxLjk1IDI5My4yMiAzMDEuNTEgQyAyOTMuNDMgMjk5LjgxIDI5My42MiAyOTguMTAgMjkzLjc4IDI5Ni40MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMzIuNjUgMzA0LjY2IEMgMzMzLjY3IDMwMy40OSAzMzQuNzAgMzAyLjMyIDMzNS43MyAzMDEuMTYgQyAzMzguNjIgMzAzLjU4IDM0MS42MiAzMDUuODggMzQ0LjYzIDMwOC4xNSBDIDM0My42MiAzMDkuNDUgMzQyLjYwIDMxMC43NSAzNDEuNTcgMzEyLjA1IEMgMzM4LjU2IDMwOS42MyAzMzUuNTQgMzA3LjIxIDMzMi42NSAzMDQuNjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk2LjIwIDMwNi43OSBDIDI5Ny4xMiAzMDUuNDggMjk4LjA5IDMwNC4yMCAyOTkuMDkgMzAyLjk0IEMgMjk5LjIwIDMwMy42MSAyOTkuNDAgMzA0Ljk0IDI5OS41MSAzMDUuNjAgQyAzMDAuNDIgMzA1LjI2IDMwMS4zNCAzMDQuOTMgMzAyLjI3IDMwNC42MCBDIDMwMy4zMiAzMDUuOTMgMzA0LjQzIDMwNy4yMyAzMDUuNTMgMzA4LjU0IEMgMzAyLjUyIDMxMS4xOCAyOTkuOTggMzE0LjYyIDI5Ni4yNSAzMTYuMjYgQyAyOTUuNjYgMzE2LjQxIDI5NC40OSAzMTYuNzEgMjkzLjkwIDMxNi44NiBDIDI5NC4yOCAzMTUuMzkgMjk0LjY2IDMxMy45MiAyOTUuMDcgMzEyLjQ3IEMgMjk0LjQ1IDMxMi4wMiAyOTMuODMgMzExLjU5IDI5My4yMSAzMTEuMTUgQyAyOTQuOTAgMzA5Ljc1IDI5Ni4xMyAzMDguMjMgMjkzLjg0IDMwNi43NCBDIDI5NC40MyAzMDYuNzUgMjk1LjYxIDMwNi43OCAyOTYuMjAgMzA2Ljc5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMyOC4xMSAzMTAuMjYgQyAzMjkuMTAgMzA5LjA5IDMzMC4xMCAzMDcuOTMgMzMxLjA4IDMwNi43NSBDIDMzNC44MCAzMDkuNzggMzM4LjQwIDMxMi45MyAzNDIuMTIgMzE1Ljk2IEMgMzQxLjA3IDMxNy4yNSAzNDAuMDIgMzE4LjU1IDMzOC45OSAzMTkuODcgQyAzMzUuNDIgMzE2LjYwIDMzMS43MSAzMTMuNDkgMzI4LjExIDMxMC4yNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMjAuMjAgMzEyLjc2IEMgMTIxLjMyIDMxMC44MCAxMjQuNDggMzEwLjk4IDEyNi41MiAzMTAuMjQgQyAxMjYuNTEgMzEyLjIwIDEyNi41MCAzMTQuMTYgMTI2LjU0IDMxNi4xMiBDIDEyNC45NyAzMTQuMDggMTIyLjY3IDMxMy4yMCAxMjAuMjAgMzEyLjc2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDYxLjcyIDMyMy45NSBDIDY1LjExIDMyMC41NSA2OC42NiAzMTcuMzMgNzIuMDUgMzEzLjkzIEMgNzMuMTUgMzE0Ljk4IDc0LjI0IDMxNi4wNCA3NS4zNSAzMTcuMDggQyA3NC4yNCAzMTguMjggNzMuMTMgMzE5LjQ4IDcyLjA0IDMyMC43MSBDIDczLjE1IDMyMC45MyA3NC4yNyAzMjEuMTYgNzUuMzkgMzIxLjM4IEMgNzYuMDIgMzIwLjY1IDc2LjY2IDMxOS45MyA3Ny4yOSAzMTkuMjAgQyA3OC40MCAzMjAuMjcgNzkuNTIgMzIxLjMyIDgwLjY0IDMyMi4zOCBDIDc5LjMwIDMyMy41MSA3OC4wNiAzMjYuMTMgNzUuOTMgMzI0Ljk4IEMgNzMuNzQgMzI0LjU0IDcxLjY1IDMyMy4wNCA2OS40MCAzMjMuMjQgQyA2Ny44NiAzMjQuNDcgNjYuNTIgMzI1LjkyIDY1LjEwIDMyNy4yOSBDIDYzLjk4IDMyNi4xNyA2Mi44NSAzMjUuMDYgNjEuNzIgMzIzLjk1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExNC40NCAzMTUuMTYgQyAxMTUuNDMgMzE1LjEyIDExOC43NCAzMTIuMDUgMTE4LjE4IDMxNC4xNCBDIDExNy42OCAzMTUuMDkgMTE3LjE0IDMxNi4wMiAxMTYuNTUgMzE2LjkyIEMgMTE2LjAxIDMxOS41NCAxMTUuODMgMzIyLjI1IDExNi43NiAzMjQuODIgQyAxMTYuNTUgMzI0Ljg3IDExNi4xMiAzMjQuOTcgMTE1LjkxIDMyNS4wMiBMIDExNS4xMCAzMjQuNzUgQyAxMTMuMjkgMzIxLjg5IDExMy43NyAzMTguMjggMTE0LjQ0IDMxNS4xNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNjQuMDcgMzI0Ljc5IEMgMjY1LjQ1IDMyMi4wMyAyNjUuODIgMzE4LjAxIDI2OS4wOSAzMTYuNzggQyAyNjcuMjYgMzIwLjIxIDI2NS42MCAzMjMuNzUgMjYzLjQyIDMyNi45OSBDIDI2My40OCAzMjguNTYgMjY0LjI3IDMyOS41OSAyNjUuODAgMzMwLjA5IEMgMjYzLjc1IDMzMC42MSAyNjEuNzEgMzMxLjIyIDI1OS41OSAzMzEuMzggQyAyNjAuMjUgMzI4LjY1IDI2Mi41MCAzMjYuOTUgMjY0LjA3IDMyNC43OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMjEuNDggMzE3LjM2IEMgMzIyLjkxIDMxOC43NyAzMjQuMzIgMzIwLjIxIDMyNS41NiAzMjEuODEgQyAzMjUuMDcgMzIyLjgzIDMyNC42MCAzMjMuODYgMzI0LjEyIDMyNC44OSBDIDMyNi4wOCAzMjQuOTAgMzI4LjAyIDMyNC45MCAzMjkuOTkgMzI0LjkxIEMgMzI4LjcyIDMyNi4xNyAzMjcuNzAgMzI3LjgyIDMyNi4wNyAzMjguNjQgQyAzMjMuNDIgMzI4Ljc1IDMyMC43OCAzMjguNDkgMzE4LjE1IDMyOC4zOCBDIDMxOS40NiAzMjkuODcgMzIwLjc4IDMzMS4zNyAzMjIuMDYgMzMyLjg5IEMgMzIwLjgyIDMzMy44NCAzMTkuNTkgMzM0LjgxIDMxOC4zNiAzMzUuNzggQyAzMTcuMDggMzM0LjIzIDMxNS43OCAzMzIuNjkgMzE0LjUxIDMzMS4xMyBDIDMxNC43NyAzMzAuMzYgMzE1LjI4IDMyOC44MiAzMTUuNTQgMzI4LjA1IEMgMzEzLjg3IDMyNy45MiAzMTIuMTkgMzI3Ljc4IDMxMC41MyAzMjcuNjMgQyAzMTEuNjYgMzI2LjU1IDMxMi43NCAzMjUuMzkgMzE0LjAzIDMyNC41MCBDIDMxNi43MSAzMjQuNTAgMzE5LjM3IDMyNC44MCAzMjIuMDUgMzI0Ljc5IEMgMzIwLjg2IDMyMy4zNSAzMTkuNjEgMzIxLjk4IDMxOC4zMyAzMjAuNjMgQyAzMTkuMzcgMzE5LjU0IDMyMC40MiAzMTguNDUgMzIxLjQ4IDMxNy4zNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNTEuNzIgMzIyLjUwIEMgMTQ5LjA4IDMyMS40MCAxNTEuNTMgMzE5LjU0IDE1Mi4zMyAzMTguMDYgQyAxNTIuMTggMzE5LjU1IDE1MS45NiAzMjEuMDIgMTUxLjcyIDMyMi41MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNzguOTkgMzIwLjI4IEMgMjgwLjAxIDMyMS4zNiAyODEuMTcgMzIyLjI5IDI4Mi40NCAzMjMuMDkgQyAyODIuMDQgMzIzLjg4IDI4Mi4yMyAzMjYuMDUgMjgwLjg4IDMyNS4yMyBDIDI4MC41NCAzMjMuNDcgMjgwLjA3IDMyMS43NCAyNzguOTkgMzIwLjI4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDc0Ljc3IDMzMi41NiBDIDc3LjE4IDMyOS42NyA3OS44OCAzMjcuMDQgODIuMjAgMzI0LjA4IEMgODMuNDQgMzI1LjAyIDg0LjY3IDMyNS45NyA4NS44OSAzMjYuOTQgQyA4My4zMiAzMjkuODEgODAuODkgMzMyLjgxIDc4LjMyIDMzNS42OCBDIDc3LjE0IDMzNC42MyA3NS45NiAzMzMuNTkgNzQuNzcgMzMyLjU2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDgwLjI2IDMzNy4yNiBDIDgyLjc5IDMzNC4zOSA4NS4xOSAzMzEuNDAgODcuNjcgMzI4LjQ5IEMgOTAuNzMgMzMxLjUzIDk1LjAzIDMzMy4zMyA5Ny40MCAzMzYuOTggQyA5Ni4yMiAzNDAuMzMgOTMuNTIgMzQyLjg4IDkxLjc0IDM0NS45MSBDIDkwLjM4IDM0NS4wMyA4OS4wNiAzNDQuMTMgODcuNzQgMzQzLjIxIEMgODkuNDAgMzQwLjk5IDkxLjExIDMzOC44MCA5Mi43OCAzMzYuNTkgQyA5MS42NSAzMzUuNjQgOTAuNTEgMzM0LjcwIDg5LjM4IDMzMy43NSBDIDg3LjQyIDMzNS43OCA4NS43NCAzMzguMDQgODQuMDUgMzQwLjI5IEMgODIuNzcgMzM5LjI5IDgxLjUxIDMzOC4yOCA4MC4yNiAzMzcuMjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzA1LjkzIDMzMS4yMCBDIDMwNy4xMCAzMzAuMzEgMzA4LjI2IDMyOS40MSAzMDkuNDMgMzI4LjUyIEMgMzExLjgyIDMzMS40NiAzMTQuMjAgMzM0LjQyIDMxNi43OCAzMzcuMjEgQyAzMTUuNTUgMzM4LjI4IDMxNC4zMCAzMzkuMzIgMzEzLjA0IDM0MC4zNiBDIDMxMC42NyAzMzcuMzEgMzA4LjIzIDMzNC4zMCAzMDUuOTMgMzMxLjIwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1Mi4zMCAzMzUuMjggQyAxNTIuOTMgMzM0LjQ5IDE1My41NyAzMzMuNzEgMTU0LjIxIDMzMi45NCBDIDE1NC42MyAzMzMuOTQgMTU1LjA2IDMzNC45NSAxNTUuNDkgMzM1Ljk2IEMgMTU0LjQyIDMzNS43MyAxNTMuMzYgMzM1LjUxIDE1Mi4zMCAzMzUuMjggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTczLjkzIDMzOC45NiBDIDE3NC4zMyAzMzYuNzQgMTc1LjMzIDMzNC43MiAxNzYuNDUgMzMyLjc5IEMgMTc2Ljk1IDMzNC43MiAxNzcuNTAgMzM2LjY1IDE3Ny45NyAzMzguNjEgQyAxNzYuNjIgMzM4LjczIDE3NS4yNyAzMzguODUgMTczLjkzIDMzOC45NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzYgMzQwLjAzIEMgMjk3LjI4IDMzNy45MCAzMDAuMzcgMzM1LjA3IDMwNC4xNyAzMzMuMzkgQyAzMDYuNjYgMzM2LjAyIDMwOS4wMiAzMzguODIgMzEwLjkwIDM0MS45MiBDIDMwOS44NCAzNDIuODggMzA4LjY3IDM0My43MiAzMDcuNDUgMzQ0LjQ2IEMgMzA1LjM0IDM0Mi43MCAzMDQuMTQgMzQwLjA5IDMwMi40OSAzMzcuOTMgQyAzMDAuMDAgMzM5LjUzIDI5Ny41NyAzNDEuMjEgMjk1LjA0IDM0Mi43NSBDIDI5NC43MiAzNDIuMDcgMjk0LjA4IDM0MC43MSAyOTMuNzYgMzQwLjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDk3LjM3IDM0Mi4wNyBDIDk4LjI0IDM0MC42NyA5OS4xOSAzMzkuMzMgMTAwLjEyIDMzNy45NyBDIDEwMS4zMiAzMzguNzYgMTAyLjUzIDMzOS41NiAxMDMuNzMgMzQwLjM2IEMgMTAzLjA3IDM0MS41NSAxMDIuNDIgMzQyLjc1IDEwMS44MyAzNDMuOTggQyAxMDMuMTkgMzQzLjMzIDEwNC40OCAzNDIuNTAgMTA1Ljk1IDM0Mi4wOSBDIDEwOC4yMiAzNDIuNzMgMTEwLjEyIDM0NC4yMiAxMTEuODQgMzQ1Ljc4IEMgMTEwLjE2IDM0OS4wNiAxMDguMjcgMzUyLjIxIDEwNi41MSAzNTUuNDQgQyAxMDQuMzMgMzU0LjE0IDEwMi4xMyAzNTIuODYgOTkuOTUgMzUxLjU3IEMgMTAwLjQyIDM1MC42NiAxMDAuOTEgMzQ5Ljc1IDEwMS4zOSAzNDguODQgQyAxMDIuMjkgMzQ5LjM3IDEwMy4xOSAzNDkuOTEgMTA0LjA5IDM1MC40NSBDIDEwNS4wOSAzNDguNzYgMTA2LjA3IDM0Ny4wNSAxMDYuOTEgMzQ1LjI3IEMgMTAzLjA2IDM0NS4xNiAxMDAuNjMgMzQ5LjEwIDk3LjA0IDM0OS42NSBDIDk1Ljc3IDM0OC45MCA5NC41OCAzNDguMDIgOTMuMzggMzQ3LjE4IEMgOTUuMTggMzQ2LjI4IDk2Ljk5IDM0NS40MCA5OC44MSAzNDQuNTQgQyA5OC4zMCAzNDMuNzMgOTcuODIgMzQyLjkxIDk3LjM3IDM0Mi4wNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyODAuNDggMzQ3LjkxIEMgMjg0LjMwIDM0NS43NSAyODguMTEgMzQzLjU3IDI5MS45MSAzNDEuMzcgQyAyOTIuMjkgMzQxLjkzIDI5My4wNSAzNDMuMDUgMjkzLjQ0IDM0My42MiBDIDI5Mi44OCAzNDQuMTAgMjkyLjMzIDM0NC41OSAyOTEuNzkgMzQ1LjA5IEMgMjkzLjMyIDM0Ny4zOCAyOTQuNzYgMzQ5LjczIDI5Ni4yMiAzNTIuMDggQyAyOTQuODYgMzUyLjg3IDI5My40OSAzNTMuNjYgMjkyLjEzIDM1NC40NiBDIDI5MC43OCAzNTIuMDIgMjg5LjM3IDM0OS42MiAyODcuOTUgMzQ3LjIzIEMgMjg2LjAyIDM0OC4zNCAyODQuMDcgMzQ5LjQxIDI4Mi4wOSAzNTAuNDMgQyAyODEuNjkgMzQ5LjgwIDI4MC44OCAzNDguNTQgMjgwLjQ4IDM0Ny45MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTYuMjAgMzQ0LjA4IEMgMjk3LjQ1IDM0My4yMyAyOTguNzAgMzQyLjM4IDI5OS45NiAzNDEuNTQgQyAzMDEuMjEgMzQzLjQyIDMwMi41MSAzNDUuMjggMzAzLjgzIDM0Ny4xMiBDIDMwMi41MyAzNDcuOTYgMzAxLjI3IDM0OC44NyAyOTkuOTMgMzQ5LjY1IEMgMjk4LjU3IDM0Ny44NyAyOTcuNDMgMzQ1Ljk0IDI5Ni4yMCAzNDQuMDggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjc0LjkzIDM1MC40OSBDIDI3Ni4yNCAzNDkuOTUgMjc3LjU2IDM0OS40MiAyNzguODggMzQ4LjkxIEMgMjc5Ljg0IDM1MC44NiAyODEuMDAgMzUyLjcyIDI4MS43NCAzNTQuNzcgQyAyODAuNDggMzU1LjU2IDI3OS4xMSAzNTYuMTUgMjc3Ljc2IDM1Ni43OCBDIDI3Ni43OCAzNTQuNjkgMjc1Ljc5IDM1Mi42MiAyNzQuOTMgMzUwLjQ5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDEyMC4yMCAzNDkuODIgQyAxMjMuNzggMzUxLjUyIDEyNy41MyAzNTIuOTIgMTMwLjk5IDM1NC44NiBDIDEzMi40OCAzNTUuNzAgMTMxLjgwIDM1Ny4yNiAxMzEuMzQgMzU4LjUxIEMgMTMwLjM5IDM2MS4wMCAxMjkuMzEgMzYzLjQ0IDEyOC4zMSAzNjUuOTEgQyAxMjMuOTIgMzY0LjAxIDExOS40NyAzNjIuMjQgMTE1LjIzIDM2MC4wMiBDIDExNi43MCAzNTYuNTMgMTE4LjY1IDM1My4yOCAxMjAuMjAgMzQ5LjgyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEyMi45MSAzNTQuNDUgQyAxMjQuNDMgMzU1LjE0IDEyNS45NiAzNTUuODQgMTI3LjQ3IDM1Ni41NyBDIDEyNi43MSAzNTguMTUgMTI1Ljk4IDM1OS43NiAxMjUuMjQgMzYxLjM1IEMgMTIzLjcwIDM2MC42MSAxMjIuMTUgMzU5LjkwIDEyMC42MSAzNTkuMTcgQyAxMjEuMzkgMzU3LjYwIDEyMi4xNSAzNTYuMDMgMTIyLjkxIDM1NC40NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNDEuNjcgMzU1LjAzIEMgMTQzLjAzIDM1NS4zMiAxNDQuMzggMzU1LjY0IDE0NS43MiAzNTUuOTggQyAxNDUuNDYgMzU3LjI1IDE0NS4yMSAzNTguNTIgMTQ0Ljk2IDM1OS43OSBDIDE0Ny4yNyAzNjAuNDYgMTQ5LjU4IDM2MS4xMiAxNTEuOTEgMzYxLjczIEMgMTUxLjQwIDM2My41NyAxNTEuMDIgMzY1LjQ3IDE1MC4yNCAzNjcuMjQgQyAxNDguNTIgMzY4Ljk0IDE0Ni4yNiAzNzAuMDAgMTQ0LjMyIDM3MS40NCBDIDE0Mi45NSAzNzEuMDYgMTQxLjYwIDM3MC42NiAxNDAuMjUgMzcwLjIzIEMgMTQxLjkyIDM2Ny4zMiAxNDYuMDUgMzY3LjEyIDE0Ny4xOSAzNjMuNzYgQyAxNDQuNjggMzYyLjg1IDE0Mi4xNCAzNjIuMDIgMTM5LjYxIDM2MS4yMCBDIDE0MC4zMSAzNTkuMTQgMTQxLjAwIDM1Ny4wOSAxNDEuNjcgMzU1LjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI1NC42MSAzNTguOTMgQyAyNTcuODIgMzU3Ljg3IDI2MC45NCAzNTYuNTYgMjY0LjE1IDM1NS41MCBDIDI2NS4yMCAzNTUuMTcgMjY2Ljg1IDM1NS4xMyAyNjcuMjYgMzU2LjQxIEMgMjY4LjY1IDM1OS4yMSAyNjkuNzQgMzYyLjE0IDI3MC45MiAzNjUuMDQgQyAyNjkuNTEgMzY1LjU4IDI2OC4xMCAzNjYuMTUgMjY2LjcxIDM2Ni43MiBDIDI2NS42OSAzNjQuMTYgMjY0LjY2IDM2MS42MCAyNjMuNjQgMzU5LjA0IEMgMjYxLjM3IDM1OS43NiAyNTkuMTIgMzYwLjUyIDI1Ni44NSAzNjEuMjQgQyAyNTguMDcgMzYxLjc2IDI1OS4zNCAzNjIuMTMgMjYwLjY1IDM2Mi4zNyBDIDI2MS4zNyAzNjQuMzAgMjYyLjEwIDM2Ni4yNCAyNjIuODIgMzY4LjE4IEMgMjYxLjM1IDM2OC42NiAyNTkuODggMzY5LjE3IDI1OC40MiAzNjkuNjcgQyAyNTcuODEgMzY3LjkwIDI1Ny4yMiAzNjYuMTIgMjU2LjY1IDM2NC4zNCBDIDI1Ny4xNCAzNjMuMDIgMjU2LjY1IDM2MS44MiAyNTUuNTggMzYxLjAyIEMgMjU1LjM0IDM2MC41MCAyNTQuODUgMzU5LjQ1IDI1NC42MSAzNTguOTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTM0LjgwIDM1Ni4xNyBDIDEzNi4xNyAzNTYuNjcgMTM3LjU1IDM1Ny4xNyAxMzguOTIgMzU3LjY4IEMgMTM4LjExIDM1OS43NiAxMzcuMzUgMzYxLjg3IDEzNi42MCAzNjMuOTggQyAxMzUuMTQgMzYzLjUwIDEzMy43MCAzNjIuOTggMTMyLjI2IDM2Mi40OSBDIDEzMy4xNyAzNjAuNDAgMTM0LjAxIDM1OC4zMCAxMzQuODAgMzU2LjE3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI0MC4zMCAzNjIuOTkgQyAyNDQuMzIgMzYyLjE3IDI0OC4xNiAzNjAuNTMgMjUyLjI5IDM2MC4yNCBDIDI1My44MCAzNjMuMDUgMjU0LjkwIDM2Ni4wOCAyNTUuNTIgMzY5LjIyIEMgMjU1LjA3IDM3MC4yMyAyNTQuMzEgMzcwLjkyIDI1My4yNiAzNzEuMjcgQyAyNDkuODggMzcyLjQ3IDI0Ni4zNyAzNzMuMjkgMjQyLjg2IDM3NC4wNCBDIDI0Mi43MCAzNzMuMDcgMjQyLjU0IDM3Mi4xMCAyNDIuMzggMzcxLjE0IEMgMjQ1LjE2IDM3MC4zOCAyNDguMDUgMzY5Ljg4IDI1MC43MCAzNjguNzEgQyAyNTAuNDIgMzY2LjkzIDI0OS43NSAzNjUuMjUgMjQ5LjIyIDM2My41NiBDIDI0Ny42OCAzNjQuMDEgMjQ2LjE0IDM2NC40NiAyNDQuNzUgMzY1LjI2IEMgMjQ1Ljg4IDM2Ni4xMCAyNDguNDMgMzY2LjA0IDI0Ny44NSAzNjguMTIgQyAyNDUuOTggMzY4LjkyIDI0My45MyAzNjkuMTQgMjQxLjkzIDM2OS40MCBDIDI0MS4zMSAzNjcuMjggMjQwLjc3IDM2NS4xMyAyNDAuMzAgMzYyLjk5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1NC4wOCAzNjIuNDAgQyAxNTUuMzMgMzYyLjYzIDE1Ni41NyAzNjIuOTEgMTU3LjgwIDM2My4yNCBDIDE1Ny43OCAzNjYuMjQgMTU2LjQ2IDM2OS4wNiAxNTYuMTIgMzcyLjA0IEMgMTU2LjU4IDM3MS45NCAxNTcuNTAgMzcxLjc1IDE1Ny45NiAzNzEuNjUgQyAxNTguNzQgMzY5LjA3IDE1OS4xOSAzNjYuNDAgMTU5LjgwIDM2My43OCBDIDE2MS4xNCAzNjQuMDMgMTYyLjQ4IDM2NC4yOCAxNjMuODIgMzY0LjUzIEMgMTYzLjIzIDM2Ny40NyAxNjIuNTggMzcwLjM5IDE2Mi4wOSAzNzMuMzUgQyAxNjIuNjMgMzczLjE5IDE2My43MSAzNzIuODggMTY0LjI1IDM3Mi43MiBDIDE2NC45MCAzNzAuMjEgMTY1LjE0IDM2Ny42MSAxNjUuOTAgMzY1LjE0IEMgMTY3LjE5IDM2NS4yMiAxNjguNDggMzY1LjM1IDE2OS43NyAzNjUuNTEgQyAxNjguNzAgMzY5LjA2IDE3MC4wNiAzNzUuNDEgMTY1LjE2IDM3Ni4xOCBDIDE2MC40MCAzNzUuOTEgMTU1LjgxIDM3NC40MiAxNTEuMTcgMzczLjQxIEMgMTUyLjE4IDM2OS43NSAxNTMuMTkgMzY2LjA5IDE1NC4wOCAzNjIuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA0LjU2IDM2NC4yNCBDIDIwNS45NiAzNjQuMTcgMjA3LjM1IDM2NC4xMiAyMDguNzUgMzY0LjA4IEMgMjA4LjgwIDM2NC45OCAyMDguOTEgMzY2Ljc3IDIwOC45NiAzNjcuNjcgQyAyMTEuNDkgMzY3LjQ3IDIxNC4wMyAzNjcuMjkgMjE2LjU3IDM2Ny4xNyBDIDIxNi42MyAzNjkuMjUgMjE3LjEyIDM3MS4zOSAyMTYuNjkgMzczLjQ3IEMgMjE1LjUzIDM3NS4yMyAyMTQuMTggMzc2Ljg4IDIxMy4yOCAzNzguODEgQyAyMTEuNzUgMzc4LjgzIDIxMC4yMyAzNzguODQgMjA4LjcwIDM3OC44MyBDIDIwOS40MiAzNzUuNjYgMjEzLjI4IDM3NC4wOSAyMTIuNjkgMzcwLjU1IEMgMjEwLjA1IDM3MC42NiAyMDcuNDEgMzcwLjc5IDIwNC43OCAzNzAuODAgQyAyMDQuNzUgMzY4LjYxIDIwNC42NyAzNjYuNDIgMjA0LjU2IDM2NC4yNCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMzMuODggMzY0LjQwIEMgMjM1LjI5IDM2NC4xMyAyMzYuNjkgMzYzLjg4IDIzOC4xMCAzNjMuNjQgQyAyMzguODggMzY3LjMwIDIzOS43MSAzNzAuOTQgMjQwLjcwIDM3NC41NSBDIDIzOS4xNyAzNzQuOTIgMjM3LjY1IDM3NS4yOSAyMzYuMTIgMzc1LjYzIEMgMjM1LjQyIDM3MS44NyAyMzQuNTMgMzY4LjE2IDIzMy44OCAzNjQuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjI3LjUzIDM2NS41MSBDIDIyOC45NiAzNjUuMzMgMjMwLjQwIDM2NS4xNyAyMzEuODQgMzY1LjAxIEMgMjMyLjA2IDM2OC42NiAyMzUuMjYgMzczLjgxIDIzMS4yMiAzNzYuMjUgQyAyMjcuNTUgMzc3LjU3IDIyMy41NyAzNzcuNTYgMjE5Ljc1IDM3OC4yMSBDIDIxOS43MCAzNzcuNDcgMjE5LjYwIDM3Ni4wMCAyMTkuNTUgMzc1LjI2IEMgMjIwLjI0IDM3NS4xMiAyMjEuNjQgMzc0Ljg0IDIyMi4zMyAzNzQuNzAgQyAyMjEuMzQgMzcyLjAxIDIyMC4wOSAzNjkuNDIgMjE5LjAxIDM2Ni43OCBDIDIyMC4wOSAzNjYuNjQgMjIyLjI2IDM2Ni4zNyAyMjMuMzQgMzY2LjI0IEMgMjI0LjgzIDM2OS4xMCAyMjUuMzkgMzcyLjYzIDIyOC4wMCAzNzQuNzYgQyAyMjkuNTIgMzcxLjgwIDIyNy43OSAzNjguNTUgMjI3LjUzIDM2NS41MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNzIuMDYgMzY2LjEzIEMgMTczLjUxIDM2Ni4yNyAxNzQuOTYgMzY2LjQyIDE3Ni40MSAzNjYuNTcgQyAxNzUuOTEgMzcwLjMwIDE3NS4zOCAzNzQuMDIgMTc1LjA1IDM3Ny43NyBDIDE3My40OCAzNzcuNjUgMTcxLjkyIDM3Ny41MSAxNzAuMzUgMzc3LjM3IEMgMTcwLjk2IDM3My42MyAxNzEuNTcgMzY5Ljg5IDE3Mi4wNiAzNjYuMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTc4LjAyIDM2OS43NCBDIDE3OC4yMCAzNjguNzUgMTc4LjM5IDM2Ny43NyAxNzguNTkgMzY2Ljc5IEMgMTgyLjE2IDM2Ny40NiAxODYuMDMgMzY2LjkzIDE4OS4zNiAzNjguNjQgQyAxODkuMzEgMzcyLjIxIDE4OS4yMCAzNzUuNzkgMTg4LjY0IDM3OS4zMyBDIDE4Ny41NyAzNzkuMTggMTg1LjQzIDM3OC44OSAxODQuMzYgMzc4Ljc1IEMgMTg0LjU0IDM3Ni4wMSAxODQuNzQgMzczLjI4IDE4NC44NyAzNzAuNTUgQyAxODIuNTggMzcwLjM1IDE4MC4yOSAzNzAuMDkgMTc4LjAyIDM2OS43NCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTEuNzYgMzY3Ljc5IEMgMTkzLjIyIDM2Ny44MyAxOTQuNjggMzY3Ljg3IDE5Ni4xNCAzNjcuOTIgQyAxOTYuMTMgMzcwLjE2IDE5Ni4xMyAzNzIuMzkgMTk2LjE0IDM3NC42NCBDIDE5NC42MSAzNzQuNjQgMTkzLjA3IDM3NC42NSAxOTEuNTQgMzc0LjY1IEMgMTkxLjYxIDM3Mi4zNiAxOTEuNjkgMzcwLjA3IDE5MS43NiAzNjcuNzkgWlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cbn1cblxuTG9nby5Qcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG9wYWNpdHk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xvZ28uanN4IiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBuYXZpZ2F0aW9uQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvbmF2aWdhdGlvbkNvbnN0YW50cycpO1xuXG5jb25zdCBuYXZpZ2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvbmF2aWdhdGlvbkFjdGlvbnMnKTtcbmNvbnN0IGF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvdG9wQmFyLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcbiAgICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGhvdG9VUkw6IGF1dGhEYXRhLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjMvMTYzODA0LnN2ZycsXG4gICAgICAgIGlzQWRtaW46IGF1dGhEYXRhLmlzQWRtaW4sXG4gICAgICAgIGN1cnJlbnRQYWdlOiBzdGF0ZS5jdXJyZW50UGFnZSxcbiAgICAgICAgY3VycmVudFVzZXI6IGF1dGhEYXRhICYmIHVzZXJzW2F1dGhEYXRhLnVpZF1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYXZpZ2F0ZVRvOiBwYWdlSWQgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhwYWdlSWQpKSxcbiAgICAgICAgc2lnbk91dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2lnbk91dCgpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJUaXRsZShjdXJyZW50VXNlcikge1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgICAgcmV0dXJuICfXntep16rXntepJztcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyLmZpcnN0TmFtZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGN1cnJlbnRVc2VyLCBwaG90b1VSTCwgbmF2aWdhdGVUbywgc2lnbk91dCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTUgc21hbGwtMTAgY29sdW1uIHVzZXItaW5mb1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e3Bob3RvVVJMfSBvbkNsaWNrPXtuYXZpZ2F0ZVRvLmJpbmQodGhpcywgbmF2aWdhdGlvbkNvbnN0YW50cy5QQUdFUy5FRElUX1VTRVJfSU5GTy52YWwpfS8+XG4gICAgICAgICAgICA8c3Bhbj7Xqdec15XXnSA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj57Z2V0VXNlclRpdGxlKGN1cnJlbnRVc2VyKX08L3NwYW4+PHNwYW4+IHwgPC9zcGFuPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGlzY29ubmVjdFwiIG9uQ2xpY2s9e3NpZ25PdXR9PteU16rXoNeq16c8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSh0b2dnbGVNZW51VmlzaWJpbGl0eSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1mb3Itc21hbGwtb25seSBmbG9hdC1sZWZ0XCIga2V5PVwiYWRtaW4tbWVudS1pY29uXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzbWFsbC1tZW51IGJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVWaXNpYmlsaXR5fT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KHBhZ2VzLCBjdXJyZW50UGFnZSwgbmF2aWdhdGVUbywgaXNBZG1pbiwgaXNNZW51VmlzaWJsZSwgdG9nZ2xlTWVudVZpc2liaWxpdHkpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlc2t0b3BNZW51SXRlbShwYWdlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBhY3RpdmU6IGN1cnJlbnRQYWdlID09PSBwYWdlLnZhbCxcbiAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNtYWxsOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2l0ZW1DbGFzc2VzfSBvbkNsaWNrPXtuYXZpZ2F0ZVRvLmJpbmQodGhpcywgcGFnZS52YWwpfSBrZXk9eydwYWdlLScgKyBwYWdlLnZhbH0+XG4gICAgICAgICAgICAgICAgeyBuYXZpZ2F0aW9uQ29uc3RhbnRzLlRSQU5TTEFUSU9OU1twYWdlLnZhbF0gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vYmlsZU1lbnVJdGVtKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgaXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIGFjdGl2ZTogY3VycmVudFBhZ2UgPT09IHBhZ2UudmFsLFxuICAgICAgICAgICAgYnV0dG9uOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uTW9iaWxlTWVudUNsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0ZVRvKHBhZ2UudmFsKTtcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXRlbUNsYXNzZXN9IG9uQ2xpY2s9e29uTW9iaWxlTWVudUNsaWNrZWR9IGtleT17J3BhZ2UtJyArIHBhZ2UudmFsfT5cbiAgICAgICAgICAgICAgICB7IG5hdmlnYXRpb25Db25zdGFudHMuVFJBTlNMQVRJT05TW3BhZ2UudmFsXSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVza3RvcE1lbnUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgYnV0dG9uLWdyb3VwIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBrZXk9XCJhZG1pbi1tZW51XCI+XG4gICAgICAgICAgICAgICAgeyBfKHBhZ2VzKS5waWNrQnkoJ3Zpc2libGUnKS5tYXAoY3JlYXRlRGVza3RvcE1lbnVJdGVtKS52YWx1ZSgpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vYmlsZU1lbnUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgYnV0dG9uLWdyb3VwIHN0YWNrZWQtZm9yLXNtYWxsIHNob3ctZm9yLXNtYWxsLW9ubHlcIiBrZXk9XCJhZG1pbi1tZW51LW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIHsgXyhwYWdlcykucGlja0J5KCd2aXNpYmxlJykubWFwKGNyZWF0ZU1vYmlsZU1lbnVJdGVtKS52YWx1ZSgpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTcgc21hbGwtMTIgY29sdW1uIHZlcnRpY2FsIGNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgeyBpc0FkbWluID8gY3JlYXRlRGVza3RvcE1lbnUoKSA6IG51bGwgfVxuICAgICAgICAgICAgeyBpc0FkbWluICYmIGlzTWVudVZpc2libGUgPyBjcmVhdGVNb2JpbGVNZW51KCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTWVudVZpc2libGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51VmlzaWJpbGl0eSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc01lbnVWaXNpYmxlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhciByb3cgc21hbGwtY29sbGFwc2UgaGlkZS1mb3ItcHJpbnRcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUhlYWRlcih0aGlzLnByb3BzLmN1cnJlbnRVc2VyLCB0aGlzLnByb3BzLnBob3RvVVJMLCB0aGlzLnByb3BzLm5hdmlnYXRlVG8sIHRoaXMucHJvcHMuc2lnbk91dCkgfVxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0FkbWluID8gY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlKHRoaXMudG9nZ2xlTWVudVZpc2liaWxpdHkuYmluZCh0aGlzKSkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZU1lbnUobmF2aWdhdGlvbkNvbnN0YW50cy5QQUdFUywgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSwgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvLCB0aGlzLnByb3BzLmlzQWRtaW4sIHRoaXMuc3RhdGUuaXNNZW51VmlzaWJsZSwgdGhpcy50b2dnbGVNZW51VmlzaWJpbGl0eS5iaW5kKHRoaXMpKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRvcEJhci5wcm9wVHlwZXMgPSB7XG4gICAgcGhvdG9VUkw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNBZG1pbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY3VycmVudFBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmF2aWdhdGVUbzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2lnbk91dDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUb3BCYXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RvcEJhci5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvcEJhci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvcEJhci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9wQmFyLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy90b3BCYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9wLWJhciB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xcbiAgY29sb3I6ICNGRkZGRkY7IH1cXG4gIC50b3AtYmFyIHNwYW4ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gIC50b3AtYmFyIC51c2VyLWluZm8ge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07IH1cXG4gIC50b3AtYmFyIC5zbWFsbC1tZW51IHtcXG4gICAgYmFja2dyb3VuZDogI0Q1MDAwMDtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcbiAgLnRvcC1iYXIgLm1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07IH1cXG4gICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbiB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24uc21hbGwge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XFxuICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24uYWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNEMzJGMkY7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbi5hY3RpdmU6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgLnRvcC1iYXIgLmF2YXRhciB7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC50b3AtYmFyIC5kaXNjb25uZWN0IHtcXG4gICAgY29sb3I6ICNGNDQzMzY7IH1cXG4gICAgLnRvcC1iYXIgLmRpc2Nvbm5lY3Q6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy90b3BCYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2F1dGhQYWdlLnJ0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGxvZ2luV2l0aEdvb2dsZSxcbiAgbG9naW5XaXRoRmFjZWJvb2ssXG4gIGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbFxufSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJztcblxuaW1wb3J0IHsgcmVwb3J0RXJyb3IgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZXJyb3JNc2c6IHN0YXRlLmVycm9yTXNnXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBsb2dpbldpdGhHb29nbGU6ICgpID0+IGRpc3BhdGNoKGxvZ2luV2l0aEdvb2dsZSgpKSxcbiAgbG9naW5XaXRoRmFjZWJvb2s6ICgpID0+IGRpc3BhdGNoKGxvZ2luV2l0aEZhY2Vib29rKCkpLFxuICBsb2dpbldpdGhFbWFpbDogKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2gobG9naW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpKSxcbiAgc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZDogKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2goY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkpLFxuICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsOiBlbWFpbCA9PiBkaXNwYXRjaChzZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKSksXG4gIHJlcG9ydEVycm9yOiAobXNnKSA9PiBkaXNwYXRjaChyZXBvcnRFcnJvcihtc2cpKVxufSk7XG5cbmNvbnN0IEF1dGhGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0F1dGhGb3JtJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBsb2dpbldpdGhHb29nbGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbG9naW5XaXRoRmFjZWJvb2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbG9naW5XaXRoRW1haWw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVwb3J0RXJyb3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRBZ2FpbjogJycsXG4gICAgICBhdXRoTW9kZTogJ2xvZ2luJyxcbiAgICAgIGlzTG9naW5Nb2RlOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgb25DaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGdldEJ1dHRvbkxhYmVsKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hdXRoTW9kZSkge1xuICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICByZXR1cm4gJ9eU16rXl9eR16gnO1xuICAgICAgY2FzZSAncmVnaXN0ZXInOlxuICAgICAgICByZXR1cm4gJ9eU15nXqNep150nO1xuICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICByZXR1cm4gJ9ep15zXlyDXnNeZ16DXpyDXnNeQ15nXpNeV16Eg16HXmdeh157XkCc7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmICF0aGlzLmlzU3VibWl0RGlzYWJsZWQoKSkge1xuICAgICAgdGhpcy5oYW5kbGVTdWJtaXRDbGljaygpO1xuICAgIH1cbiAgfSxcblxuICBzaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkKCkge1xuICAgIHRoaXMucHJvcHMuc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZCh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgfSxcblxuICBpc1N1Ym1pdERpc2FibGVkKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hdXRoTW9kZSkge1xuICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICByZXR1cm4gXy5pc0VtcHR5KHRoaXMuc3RhdGUuZW1haWwpIHx8IF8uaXNFbXB0eSh0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgcmV0dXJuIF8uaXNFbXB0eSh0aGlzLnN0YXRlLmVtYWlsKSB8fCBfLmlzRW1wdHkodGhpcy5zdGF0ZS5wYXNzd29yZCkgfHwgXy5pc0VtcHR5KHRoaXMuc3RhdGUucGFzc3dvcmRBZ2Fpbik7XG4gICAgICBjYXNlICdmb3Jnb3RQYXNzd29yZCc6XG4gICAgICAgIHJldHVybiBfLmlzRW1wdHkodGhpcy5zdGF0ZS5lbWFpbCk7XG4gICAgfVxuICB9LFxuXG4gIGdvVG9Mb2dpbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0aE1vZGU6ICdsb2dpbicgfSk7XG4gIH0sXG5cbiAgZ29Ub1JlZ2lzdGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRoTW9kZTogJ3JlZ2lzdGVyJyB9KTtcbiAgfSxcblxuICBnb1RvRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGhNb2RlOiAnZm9yZ290UGFzc3dvcmQnIH0pO1xuICB9LFxuXG4gIGhhbmRsZUxvZ2luKCkge1xuICAgIHRoaXMucHJvcHMubG9naW5XaXRoRW1haWwodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gIH0sXG5cbiAgaGFuZGxlUmVnaXN0ZXIoKSB7XG4gICAgaWYgKF8uaXNFcXVhbCh0aGlzLnN0YXRlLnBhc3N3b3JkLCB0aGlzLnN0YXRlLnBhc3N3b3JkQWdhaW4pKSB7XG4gICAgICB0aGlzLnByb3BzLnNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucmVwb3J0RXJyb3IoY29uc3RhbnRzLkVSUk9SUy5OT1RfU0FNRV9QQVNTV09SRCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUZvcmdvdFBhc3N3b3JkKCkge1xuICAgIHRoaXMucHJvcHMuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCh0aGlzLnN0YXRlLmVtYWlsKTtcbiAgICB0aGlzLmdvVG9Mb2dpbigpO1xuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdENsaWNrKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hdXRoTW9kZSkge1xuICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVMb2dpbigpO1xuICAgICAgY2FzZSAncmVnaXN0ZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZWdpc3RlcigpO1xuICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVGb3Jnb3RQYXNzd29yZCgpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IHRlbXBsYXRlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBdXRoRm9ybSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4vYXV0aFBhZ2Uuc2NzcycsXG4gICAgJy4uL2xvZ28nXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIGNzcywgbG9nbykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2xhcmdlLTYgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCBhdXRoLWZvcm0tY29udGFpbmVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnbWVkaXVtLWNlbnRlcmVkIGxvZ28nIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQobG9nbywge1xuICAgICAgICAgICAgJ3dpZHRoJzogMTIwLFxuICAgICAgICAgICAgJ2hlaWdodCc6IDEyMFxuICAgICAgICB9KSksIF8uaW5jbHVkZXMoW1xuICAgICAgICAgICAgJ2xvZ2luJyxcbiAgICAgICAgICAgICdyZWdpc3RlcidcbiAgICAgICAgXSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdrZXknOiAnMjg4JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgICAnb25DbGljayc6IHRoaXMucHJvcHMubG9naW5XaXRoRmFjZWJvb2ssXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhY2Vib29rIGJ1dHRvbiBzcGxpdCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnRmFjZWJvb2snKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHsgJ2NsYXNzTmFtZSc6ICdmYSBmYS1mYWNlYm9vay1vZmZpY2lhbCcgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgICAnb25DbGljayc6IHRoaXMucHJvcHMubG9naW5XaXRoR29vZ2xlLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdnb29nbGUgYnV0dG9uIHNwbGl0J1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICdHb29nbGUnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtZ29vZ2xlJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2hyJywgeyAnY2xhc3NOYW1lJzogJ2hyJyB9KSkgOiBudWxsLCB0aGlzLnByb3BzLmVycm9yTXNnID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdlcnJvci1tc2cnLFxuICAgICAgICAgICAgJ2tleSc6ICdob21lUGFnZUVycm9yTXNnJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGUnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyAnY2xhc3NOYW1lJzogJ2Vycm9yLW1zZy10eHQnIH0sIHRoaXMucHJvcHMuZXJyb3JNc2cpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdvbktleURvd24nOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2F1dGgtZm9ybSdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAndHlwZSc6ICdlbWFpbCcsXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICduYW1lJzogJ2VtYWlsJyxcbiAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICfXk9eV15DXqCDXkNec16fXmNeo15XXoNeZJ1xuICAgICAgICB9KSwgXy5pbmNsdWRlcyhbXG4gICAgICAgICAgICAnbG9naW4nLFxuICAgICAgICAgICAgJ3JlZ2lzdGVyJ1xuICAgICAgICBdLCB0aGlzLnN0YXRlLmF1dGhNb2RlKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ3R5cGUnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAnbmFtZSc6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAncGxhY2Vob2xkZXInOiAn16HXmdeh157XkCcsXG4gICAgICAgICAgICAna2V5JzogJzEyMTYnXG4gICAgICAgIH0pIDogbnVsbCwgdGhpcy5zdGF0ZS5hdXRoTW9kZSA9PT0gJ3JlZ2lzdGVyJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ3R5cGUnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5wYXNzd29yZEFnYWluLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICduYW1lJzogJ3Bhc3N3b3JkQWdhaW4nLFxuICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ9ep15XXkSDXodeZ16HXnteQJyxcbiAgICAgICAgICAgICdrZXknOiAnMTQyMidcbiAgICAgICAgfSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgICAnb25DbGljayc6IHRoaXMuaGFuZGxlU3VibWl0Q2xpY2ssXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2J1dHRvbiBzcGxpdCBzdWNjZXNzJyxcbiAgICAgICAgICAgICdkaXNhYmxlZCc6IHRoaXMuaXNTdWJtaXREaXNhYmxlZCgpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgdGhpcy5nZXRCdXR0b25MYWJlbCgpKSksIHRoaXMuc3RhdGUuYXV0aE1vZGUgPT09ICdsb2dpbicgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3JvdycsXG4gICAgICAgICAgICAna2V5JzogJzE4MjMnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtNiByZWQtbGluaycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiB0aGlzLmdvVG9SZWdpc3RlciB9LCAn15DXmdefINec15og15fXqdeR15XXnz8nKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtNiByZWQtbGluaycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiB0aGlzLmdvVG9Gb3Jnb3RQYXNzd29yZCB9LCAn16nXm9eX16og16HXmdeh157XkD8nKSkpIDogbnVsbCwgdGhpcy5zdGF0ZS5hdXRoTW9kZSAhPT0gJ2xvZ2luJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2tleSc6ICcyMTIxJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdyZWQtbGluaycsXG4gICAgICAgICAgICAnb25DbGljayc6IHRoaXMuZ29Ub0xvZ2luXG4gICAgICAgIH0sICfXm9eR16gg15nXqSDXnNeaINeX16nXkdeV158/JykpIDogbnVsbCkpO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXV0aFBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXV0aC1mb3JtLWNvbnRhaW5lciAubG9nbyB7XFxuICBtYXJnaW46IDIwcHggYXV0byAzNXB4O1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiAxNjBweDsgfVxcblxcbi5hdXRoLWZvcm0tY29udGFpbmVyIC5hdXRoLWZvcm0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmF1dGgtZm9ybS1jb250YWluZXIgLmhyIHtcXG4gIG1hcmdpbjogMC43ZW0gYXV0byAhaW1wb3J0YW50OyB9XFxuXFxuLmF1dGgtZm9ybS1jb250YWluZXIgLnJlZC1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2hvbWVQYWdlLnJ0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQge3VwZGF0ZUJvb2tpbmcsIGNhbmNlbEJvb2tpbmd9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMnO1xuaW1wb3J0IHt1cGRhdGVVc2VyfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuY29uc3QgdGVhbXNEYXRhID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdGVhbXNEYXRhJyk7XG5cbmZ1bmN0aW9uIHBhcnNlRXZlbnREYXRlKGV2ZW50KSB7XG4gIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LnllYXIsIGV2ZW50Lm1vbnRoLCBldmVudC5kYXkpO1xuICBldmVudERhdGUuc2V0TW9udGgoZXZlbnREYXRlLmdldE1vbnRoKCkgLSAxKTtcbiAgcmV0dXJuIGV2ZW50RGF0ZTtcbn1cblxuZnVuY3Rpb24gaXNGdXR1cmVFdmVudChldmVudCkge1xuICBjb25zdCBldmVudERhdGUgPSBwYXJzZUV2ZW50RGF0ZShldmVudCk7XG4gIHJldHVybiBldmVudERhdGUgPiBEYXRlLm5vdygpO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGF1dGhEYXRhOiBzdGF0ZS5hdXRoRGF0YSxcbiAgZXZlbnRzOiBzdGF0ZS5ldmVudHMsXG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmdzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdXBkYXRlQm9va2luZzogKHVpZCwgZXZlbnRJZCwgYm9va2luZykgPT4gZGlzcGF0Y2godXBkYXRlQm9va2luZyh1aWQsIGV2ZW50SWQsIGJvb2tpbmcpKSxcbiAgY2FuY2VsQm9va2luZzogKHVpZCwgZXZlbnRJZCkgPT4gZGlzcGF0Y2goY2FuY2VsQm9va2luZyh1aWQsIGV2ZW50SWQpKSxcbiAgdXBkYXRlVXNlcjogKHVpZCwgdXNlcikgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1aWQsIHVzZXIpKVxufSk7XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXZlbnRJZDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGdldE9wZW5FdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ub21pdEJ5KHRoaXMucHJvcHMuZXZlbnRzLCBldmVudCA9PiBldmVudC5zdGF0dXMgPT09IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLkNMT1NFRC52YWx1ZSk7XG4gIH1cblxuICBnZXRDbG9zZWRFdmVudHMoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy5ldmVudHMpXG4gICAgICAub21pdEJ5KGV2ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnN0YXR1cyAhPT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuQ0xPU0VELnZhbHVlIHx8ICFpc0Z1dHVyZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0pXG4gICAgICAubWFwKChldmVudCwgZXZlbnRJZCkgPT4gKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGV2ZW50SWRcbiAgICAgIH0pKVxuICAgICAgLnNvcnRCeShldmVudERhdGEgPT4gcGFyc2VFdmVudERhdGUoZXZlbnREYXRhLmV2ZW50KSlcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgYm9va0V2ZW50KGV2ZW50SWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudElkfSk7XG4gIH1cblxuICBpc0Jvb2tpbmdFbmFibGVkKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5zdGF0dXMpIHtcbiAgICAgIGNhc2UgQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfQUxMLnZhbHVlOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUy52YWx1ZToge1xuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2Vyc1t0aGlzLnByb3BzLmF1dGhEYXRhLnVpZF07XG4gICAgICAgIHJldHVybiB1c2VyLnNlYXNvblRpY2tldHMgPiAwXG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudE5hbWUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZUlkKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnRIYXBvZWxJbWFnZSgpIHtcbiAgICByZXR1cm4gJ2h0dHA6Ly9oYXBvZWwuY28uaWwvc2l0ZXMvZGVmYXVsdC9maWxlcy9sb2dvMTIweDEyMC5wbmcnO1xuICB9XG5cbiAgaXNSZWdpc3RlcmVkVG9FdmVudChldmVudElkKSB7XG4gICAgY29uc3QgdXNlckJvb2tpbmdzID0gdGhpcy5wcm9wcy5ib29raW5nc1t0aGlzLnByb3BzLmF1dGhEYXRhLnVpZF07XG5cbiAgICByZXR1cm4gXy5oYXModXNlckJvb2tpbmdzLCBldmVudElkKTtcbiAgfVxuXG4gIGdldEV2ZW50SW1hZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZUlkKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLnNyYztcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudERhdGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmVudC5kYXkgKyAnLycgKyBldmVudC5tb250aCArICcvJyArIGV2ZW50LnllYXI7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnRUaW1lKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuaG91ciArICc6JyArIGV2ZW50Lm1pbnV0ZTtcbiAgICB9XG4gIH1cblxuICBzdG9wRWRpdGluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudElkOiBudWxsfSk7XG4gIH1cblxuICB1cGRhdGVCb29raW5nKGJvb2tpbmcpIHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUJvb2tpbmcodGhpcy5wcm9wcy5hdXRoRGF0YS51aWQsIHRoaXMuc3RhdGUuZXZlbnRJZCwgYm9va2luZyk7XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgY2FuY2VsQm9va2luZyhldmVudElkKSB7XG4gICAgdGhpcy5wcm9wcy5jYW5jZWxCb29raW5nKHRoaXMucHJvcHMuYXV0aERhdGEudWlkLCBldmVudElkKTtcbiAgfVxuXG4gIGNyZWF0ZVVzZXJJbmZvKHVpZCwgdXNlcikge1xuICAgIHVzZXIucGhvdG9VUkwgPSB0aGlzLnByb3BzLmF1dGhEYXRhLnBob3RvVVJMO1xuICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih1aWQsIHVzZXIpO1xuICB9XG5cbiAgZ2V0SG9tZVRlYW0oKSB7XG4gICAgcmV0dXJuIHRlYW1zRGF0YS5IQVBPRUxfSkVSVVNBTEVNO1xuICB9XG5cbiAgZ2V0QXdheVRlYW0oZXZlbnQpIHtcbiAgICByZXR1cm4gdGVhbXNEYXRhW2V2ZW50LnR5cGVJZF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbkhvbWVQYWdlLnByb3BUeXBlcyA9IHtcbiAgYXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZVBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9ldmVudEl0ZW0nLFxuICAgICcuLi9ib29raW5nRm9ybS9ib29raW5nRm9ybScsXG4gICAgJy4uL3VzZXJGb3JtJyxcbiAgICAnLi9ob21lUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBFdmVudEl0ZW0sIEJvb2tpbmdGb3JtLCBVc2VyRm9ybSwgaG9tZVBhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25Cb29raW5nMShvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHRoaXMuYm9va0V2ZW50KGV2ZW50SW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNhbmNlbEJvb2tpbmcyKG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxCb29raW5nKGV2ZW50SW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDMob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudEl0ZW0sIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAnZXZlbnRJZCc6IGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAnb25Cb29raW5nJzogb25Cb29raW5nMS5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2FuY2VsQm9va2luZyc6IG9uQ2FuY2VsQm9va2luZzIuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Cb29raW5nNChvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHRoaXMuYm9va0V2ZW50KGV2ZW50LmV2ZW50SWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNhbmNlbEJvb2tpbmc1KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxCb29raW5nKGV2ZW50LmV2ZW50SWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDYob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudEl0ZW0sIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAnZXZlbnRJZCc6IGV2ZW50LmV2ZW50SWQsXG4gICAgICAgICAgICAnb25Cb29raW5nJzogb25Cb29raW5nNC5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2FuY2VsQm9va2luZyc6IG9uQ2FuY2VsQm9va2luZzUuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25TdWJtaXQ3KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZWRpdGluZ0V2ZW50LCBib29raW5nKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQm9va2luZyhib29raW5nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTgob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBlZGl0aW5nRXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZUVkaXRpbmdFdmVudDkob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyKSB7XG4gICAgICAgIHZhciBlZGl0aW5nRXZlbnQgPSB0aGlzLnByb3BzLmV2ZW50c1t0aGlzLnN0YXRlLmV2ZW50SWRdO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChCb29raW5nRm9ybSwge1xuICAgICAgICAgICAgJ2tleSc6ICdlZGl0LWJvb2tpbmcnLFxuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRFdmVudE5hbWUoZWRpdGluZ0V2ZW50KSArICcgLSAnICsgdGhpcy5nZXRFdmVudERhdGUoZWRpdGluZ0V2ZW50KSArICcgJyArIHRoaXMuZ2V0RXZlbnRUaW1lKGVkaXRpbmdFdmVudCksXG4gICAgICAgICAgICAnYm9va2luZyc6IF8uZ2V0KHRoaXMucHJvcHMuYm9va2luZ3MsIFtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGhEYXRhLnVpZCxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmV2ZW50SWRcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgJ29uU3VibWl0Jzogb25TdWJtaXQ3LmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBlZGl0aW5nRXZlbnQpLFxuICAgICAgICAgICAgJ3NlYXNvblRpY2tldHMnOiBfLmdldCh0aGlzLnByb3BzLnVzZXJzLCBbXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoRGF0YS51aWQsXG4gICAgICAgICAgICAgICAgJ3NlYXNvblRpY2tldHMnXG4gICAgICAgICAgICBdKSB8fCAwLFxuICAgICAgICAgICAgJ29uQ2xvc2UnOiBvbkNsb3NlOC5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZWRpdGluZ0V2ZW50KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVPcGVuRXZlbnRzQ2xvc2VkRXZlbnRzSGFzVXNlcjEwKCkge1xuICAgICAgICB2YXIgb3BlbkV2ZW50cyA9IHRoaXMuZ2V0T3BlbkV2ZW50cygpO1xuICAgICAgICB2YXIgY2xvc2VkRXZlbnRzID0gdGhpcy5nZXRDbG9zZWRFdmVudHMoKTtcbiAgICAgICAgdmFyIGhhc1VzZXIgPSB0aGlzLnByb3BzLnVzZXJzW3RoaXMucHJvcHMuYXV0aERhdGEudWlkXTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzaXRlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaG9tZS1wYWdlIHNtYWxsLWNlbnRlcmVkJyB9LCBoYXNVc2VyID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdldmVudHMtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnRzLWNvbnRhaW5lcidcbiAgICAgICAgfSwgIXRoaXMuc3RhdGUuZXZlbnRJZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZXZlbnRzJyxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnRzJ1xuICAgICAgICB9LCBfLnNpemUob3BlbkV2ZW50cykgPT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3Nob3ctZm9yLXNtYWxsLW9ubHkgbm8tYm9va2luZ3MgbW9yZS1zcGFjZScsXG4gICAgICAgICAgICAna2V5JzogJzY1OCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15DXmdefINeb16jXkteiINeU16HXoteV16og16TXqteV15fXldeqJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWJ1cycsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSkpIDogbnVsbCwgXy5zaXplKG9wZW5FdmVudHMpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2V2ZW50cy1saXN0IG9wZW4tZXZlbnRzJyxcbiAgICAgICAgICAgICAgICAna2V5JzogJzkwOCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2NsYXNzTmFtZSc6ICdoaWRlLWZvci1zbWFsbC1vbmx5JyB9LCAn15TXodei15XXqjonKSxcbiAgICAgICAgICAgIF8ubWFwKG9wZW5FdmVudHMsIHJlcGVhdEV2ZW50My5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlcikpXG4gICAgICAgIF0pIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2NsYXNzTmFtZSc6ICdldmVudHMtbGlzdCBjbG9zZWQtZXZlbnRzIGhpZGUtZm9yLXNtYWxsLW9ubHknIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHt9LCAn15TXlNeh16LXldeqINeU15HXkNeV16o6JyksXG4gICAgICAgICAgICBfLm1hcChjbG9zZWRFdmVudHMsIHJlcGVhdEV2ZW50Ni5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlcikpXG4gICAgICAgIF0pKSA6IG51bGwsIHRoaXMuc3RhdGUuZXZlbnRJZCA/IHNjb3BlRWRpdGluZ0V2ZW50OS5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICBvcGVuRXZlbnRzLFxuICAgICAgICAgICAgY2xvc2VkRXZlbnRzLFxuICAgICAgICAgICAgaGFzVXNlclxuICAgICAgICBdKSA6IG51bGwpIDogbnVsbCwgIWhhc1VzZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3VzZXItZWRpdC1jb250YWluZXInLFxuICAgICAgICAgICAgJ2tleSc6ICd1c2VyLWVkaXQtY29udGFpbmVyJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFVzZXJGb3JtLCB7ICd1aWQnOiB0aGlzLnByb3BzLmF1dGhEYXRhLnVpZCB9KSkgOiBudWxsKSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY29wZU9wZW5FdmVudHNDbG9zZWRFdmVudHNIYXNVc2VyMTAuYXBwbHkodGhpcywgW10pO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgZ2FtZXNDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9nYW1lQ29uc3RhbnRzJyk7XG5jb25zdCBib29raW5nc0NvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2Jvb2tpbmdzQ29uc3RhbnRzJyk7XG5jb25zdCB0ZWFtc0RhdGEgPSByZXF1aXJlKCcuLi91dGlscy90ZWFtc0RhdGEnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2V2ZW50SXRlbS5zY3NzJyk7XG5cbmZ1bmN0aW9uIGlzQm9va2luZ0VuYWJsZWQoZXZlbnQsIHVzZXIpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnN0YXR1cykge1xuICAgICAgICBjYXNlIGdhbWVzQ29uc3RhbnRzLlNUQVRVUy5PUEVOX0ZPUl9BTEw6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBnYW1lc0NvbnN0YW50cy5TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUzoge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXIuc2Vhc29uVGlja2V0cyA+IDBcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcbiAgICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuICAgIGNvbnN0IGV2ZW50ID0gc3RhdGUuZXZlbnRzW293blByb3BzLmV2ZW50SWRdO1xuICAgIGNvbnN0IGJvb2tpbmdzID0gc3RhdGUuYm9va2luZ3M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBob21lVGVhbTogdGVhbXNEYXRhLkhBUE9FTF9KRVJVU0FMRU0sXG4gICAgICAgIGF3YXlUZWFtOiB0ZWFtc0RhdGFbZXZlbnQudHlwZUlkXSxcbiAgICAgICAgc3RhdHVzOiBldmVudC5zdGF0dXMsXG4gICAgICAgIGRhdGU6IGV2ZW50LmRheSArICcvJyArIGV2ZW50Lm1vbnRoICsgJy8nICsgZXZlbnQueWVhcixcbiAgICAgICAgdGltZTogZXZlbnQuaG91ciArICc6JyArIGV2ZW50Lm1pbnV0ZSxcbiAgICAgICAgaXNCb29raW5nQWxsb3dlZDogaXNCb29raW5nRW5hYmxlZChldmVudCwgdXNlcnNbYXV0aERhdGEudWlkXSksXG4gICAgICAgIGlzQm9va2VkOiBfLmhhc0luKGJvb2tpbmdzLCBbYXV0aERhdGEudWlkLCBvd25Qcm9wcy5ldmVudElkXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlYW1Mb2dvcyhob21lLCBhd2F5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzLWltYWdlcyBtZWRpdW0tNCBzbWFsbC0xMiB0ZXh0LWNlbnRlciBtZWRpdW0tdGV4dC1yaWdodCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIHNtYWxsIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBzcmM9e2hvbWUubG9nb30vPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgaGlkZS1mb3Itc21hbGwtb25seVwiPntob21lLmxhYmVsfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGUtZm9yLXNtYWxsLW9ubHkgc2VwYXJhdG9yXCI+IC0gPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBzbWFsbCBoaWRlLWZvci1zbWFsbC1vbmx5XCIgc3JjPXthd2F5LmxvZ299Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IGhpZGUtZm9yLXNtYWxsLW9ubHlcIj57YXdheS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHMtbmFtZXMgc2hvdy1mb3Itc21hbGwtb25seSB0ZXh0LWNlbnRlciByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgc21hbGwtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIGJpZ1wiIHNyYz17aG9tZS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgc21hbGxcIj57aG9tZS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHNtYWxsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBiaWdcIiBzcmM9e2F3YXkubG9nb30vPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IHNtYWxsXCI+e2F3YXkubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50VGltZUFuZERhdGUoZGF0ZSwgdGltZSwgaXNPcGVuRm9yQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIGhpZGUtZm9yLXNtYWxsLW9ubHlcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVsbHlCb29rZWRMYWJlbCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBoaWRlLWZvci1zbWFsbC1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3RhdHVzXCI+e2dhbWVzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5mdWxseUJvb2tlZH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdGF0dXNcIj57Z2FtZXNDb25zdGFudHMuVFJBTlNMQVRJT05TLmZ1bGx5Qm9va2VkfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQnV0dG9uKGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcpIHtcbiAgICBjb25zdCBib29rQnV0dG9uID0gKFxuICAgICAgICA8c3BhbiBrZXk9XCJib29rLWJ0blwiPlxuICAgICAgICAgICAgPHNwYW4+e2Jvb2tpbmdzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5ib29rfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJ1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICBjb25zdCBlZGl0Qm9va2luZ0J1dHRvbiA9IChcbiAgICAgICAgPHNwYW4ga2V5PVwiZWRpdC1idG5cIj5cbiAgICAgICAgICAgIDxzcGFuPntib29raW5nc0NvbnN0YW50cy5UUkFOU0xBVElPTlMuZWRpdEJvb2tpbmd9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYnVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzIHNtYWxsXCIga2V5PVwicmVnaXN0ZXItYnRuXCIgb25DbGljaz17b25Cb29raW5nfSBkaXNhYmxlZD17IWlzQm9va2luZ0FsbG93ZWR9PlxuICAgICAgICAgICAgeyBpc0Jvb2tlZCA/IGVkaXRCb29raW5nQnV0dG9uIDogYm9va0J1dHRvbiB9XG4gICAgICAgIDwvYT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uKG9uQ2FuY2VsQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzbWFsbCBhbGVydFwiIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvbkNhbmNlbEJvb2tpbmd9PlxuICAgICAgICAgICAgPHNwYW4+e2Jvb2tpbmdzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5jYW5jZWxCb29raW5nfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L2E+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uc0J1dHRvbnMoaXNPcGVuRm9yQm9va2luZywgaXNCb29raW5nQWxsb3dlZCwgaXNCb29rZWQsIG9uQm9va2luZywgb25DYW5jZWxCb29raW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9ucyBtZWRpdW0tNCBzbWFsbC0xMiB0ZXh0LWNlbnRlciBtZWRpdW0tdGV4dC1sZWZ0IGNvbHVtblwiPlxuICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nID8gY3JlYXRlQm9va2luZ0J1dHRvbihpc0Jvb2tpbmdBbGxvd2VkLCBpc0Jvb2tlZCwgb25Cb29raW5nKSA6IG51bGwgfVxuICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nICYmIGlzQm9va2VkID8gY3JlYXRlQm9va2luZ0NhbmNlbGxhdGlvbkJ1dHRvbihvbkNhbmNlbEJvb2tpbmcpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEV2ZW50SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpc09wZW5Gb3JCb29raW5nID0gdGhpcy5wcm9wcy5zdGF0dXMgIT09IGdhbWVzQ29uc3RhbnRzLlNUQVRVUy5DTE9TRUQ7XG4gICAgICAgIGNvbnN0IGlzRnVsbHlCb29rZWQgPSB0aGlzLnByb3BzLnN0YXR1cyA9PT0gZ2FtZXNDb25zdGFudHMuU1RBVFVTLkZVTExZX0JPT0tFRDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaXRlbSByb3cgY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZVRlYW1Mb2dvcyh0aGlzLnByb3BzLmhvbWVUZWFtLCB0aGlzLnByb3BzLmF3YXlUZWFtKSB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVFdmVudFRpbWVBbmREYXRlKHRoaXMucHJvcHMuZGF0ZSwgdGhpcy5wcm9wcy50aW1lLCBpc09wZW5Gb3JCb29raW5nICl9XG4gICAgICAgICAgICAgICAgeyBpc0Z1bGx5Qm9va2VkID8gY3JlYXRlRnVsbHlCb29rZWRMYWJlbCgpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVBY3Rpb25zQnV0dG9ucyhpc09wZW5Gb3JCb29raW5nLCB0aGlzLnByb3BzLmlzQm9va2luZ0FsbG93ZWQsIHRoaXMucHJvcHMuaXNCb29rZWQsIHRoaXMucHJvcHMub25Cb29raW5nLCB0aGlzLnByb3BzLm9uQ2FuY2VsQm9va2luZykgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5FdmVudEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGhvbWVUZWFtOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbG9nbzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgYXdheVRlYW06IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsb2dvOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhdHVzOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzQm9va2luZ0FsbG93ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGlzQm9va2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2FuY2VsQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRXZlbnRJdGVtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNUQVRVUzoge1xuICAgIENMT1NFRDogJ2Nsb3NlZCcsXG4gICAgT1BFTl9GT1JfTUVNQkVSUzogJ29wZW5Gb3JNZW1iZXJzJyxcbiAgICBPUEVOX0ZPUl9BTEw6ICdvcGVuRm9yQWxsJyxcbiAgICBGVUxMWV9CT09LRUQ6ICdmdWxseUJvb2tlZCdcbiAgfSxcbiAgVFJBTlNMQVRJT05TOiB7XG4gICAgY2xvc2VkOiAn15TXlNeo16nXnteUINeh15LXldeo15QnLFxuICAgIG9wZW5Gb3JNZW1iZXJzOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXnteg15XXmdeZINeU16HXoteV16onLFxuICAgIG9wZW5Gb3JBbGw6ICfXlNeU16jXqdee15Qg16TXqteV15fXlCDXnNeb15XXnNedJyxcbiAgICBmdWxseUJvb2tlZDogJ9eU15TXodei15Qg157XnNeQ15QnXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2dhbWVDb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgVFJBTlNMQVRJT05TOiB7XG4gICAgYm9vazogJ9eU16jXqdedJyxcbiAgICBlZGl0Qm9va2luZzogJ9ei16jXldeaJyxcbiAgICBjYW5jZWxCb29raW5nOiAn15HXmNecINeU16jXqdee15QnXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2Jvb2tpbmdzQ29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEhBUE9FTF9KRVJVU0FMRU06IHtcbiAgICBsYWJlbDogJ9eU16TXldei15wg15nXqNeV16nXnNeZ150nLFxuICAgIGxvZ286ICdodHRwOi8vaGFwb2VsLmNvLmlsL3NpdGVzL2RlZmF1bHQvZmlsZXMvbG9nbzEyMHgxMjAucG5nJ1xuICB9LFxuICAnaGFwb2VsLXRsdic6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29faGFwb2VsdGEucG5nJyxcbiAgICBsYWJlbDogJ9eU16TXldei15wg16rXnCDXkNeR15nXkSdcbiAgfSxcbiAgJ21hY2NhYmktdGx2Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19tYWNjYWJpLnBuZycsXG4gICAgbGFiZWw6ICfXnteb15HXmSDXqtecINeQ15HXmdeRJ1xuICB9LFxuICAnaGVyemVsaXlhJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19zaGFyb24ucG5nJyxcbiAgICBsYWJlbDogJ9eR16DXmSDXlNeo16bXnNeZ15QnXG4gIH0sXG4gICdraXJ5YXQtZ2F0Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9JbWFnZXMvdGVhbXMvYmlnR2F0LnBuZycsXG4gICAgbGFiZWw6ICfXnteb15HXmSDXp9eo15nXqiDXkteqJ1xuICB9LFxuICAnZ2lsYm9hJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19HYWxpbC5wbmcnLFxuICAgIGxhYmVsOiAn15LXnNeZ15wv15LXnNeR15XXoidcbiAgfSxcbiAgJ25haGFyaXlhJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19uYWhhcmlhLnBuZycsXG4gICAgbGFiZWw6ICfXoteZ16jXldeg15kg16DXlNeo15nXlCdcbiAgfSxcbiAgJ2hvbG9uJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvYXJ0aWNsZXMvbG9nb19oaC5wbmcnLFxuICAgIGxhYmVsOiAn15TXpNeV16LXnCDXl9eV15zXldefJ1xuICB9LFxuICAnYXNoZG9kJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19hc2hkb2QucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeQ16nXk9eV15MnXG4gIH0sXG4gICdoYWlmYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29faGFpZmEucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeX15nXpNeUJ1xuICB9LFxuICAncmlzaG9uJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19yaXNob24ucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeo15DXqdeV158g15zXpteZ15XXnydcbiAgfSxcbiAgJ2VpbGF0Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19laWxhdC5wbmcnLFxuICAgIGxhYmVsOiAn15TXpNeV16LXnCDXkNeZ15zXqidcbiAgfSxcbiAgJ2xqdWJsamFuYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi84LzhlL1VuaW9uX29saW1waWphLnBuZy8xNDBweC1Vbmlvbl9vbGltcGlqYS5wbmcnLFxuICAgIGxhYmVsOiAn15zXldeR15zXmdeQ16DXlCdcbiAgfSxcbiAgJ3ZhbGVuY2lhJzoge1xuICAgIGxvZ286ICdodHRwOi8vc2FtdmFucm9zc29tLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8xMC92YWxlbmNpYS1iYXNrZXQxLWxvZ28uanBnJyxcbiAgICBsYWJlbDogJ9eV15zXoNeh15nXlCdcbiAgfSxcbiAgJ2t1YmFuJzoge1xuICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzAvMDQvTG9rb21vdGl2X0t1YmFuX2xvZ28ucG5nLzIwMHB4LUxva29tb3Rpdl9LdWJhbl9sb2dvLnBuZycsXG4gICAgbGFiZWw6ICfXnNeV16fXldee15XXmNeZ15Eg16fXldeR15DXnydcbiAgfSxcbiAgJ2Z1ZW5sYWJyYWRhJzoge1xuICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzEvMTMvQmFsb25jZXN0b2Z1ZW5sYWJyYWRhLmpwZy8xMTBweC1CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnJyxcbiAgICBsYWJlbDogJ9ek15XXkNeg15zXkdeo15PXlCdcbiAgfSxcbiAgJ3VsbSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL25hY2h3dWNocy5iYnUwMS5jb20vbW9kdWxlcy9tb2RfYmJ1bmV3c2ZsYXNoL2Fzc2V0cy9pbWFnZXMvbm9pbWFnZV90aHVtYi5qcGcnLFxuICAgIGxhYmVsOiAn15DXldec150nXG4gIH0sXG4gICd2aWxuYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi83Lzc1L0JDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLzkwN3B4LUJDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLnBuZycsXG4gICAgbGFiZWw6ICfXqNeZ15jXkNehINeV15nXnNeg15QnXG4gIH0sXG4gICdub3Znb3JvZCc6IHtcbiAgICBsb2dvOiAnaHR0cDovL29seW1waWFrb3MtbGl2ZS5nci9pbWcvdGVhbXMvTml6aG55JTIwTm92Z29yb2QucG5nJyxcbiAgICBsYWJlbDogJ9eg15nXltez16DXmSdcbiAgfSxcbiAgJ3plbml0Jzoge1xuICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yNS9GQ19aZW5pdF8xX3N0YXJfMjAxNV9sb2dvLnBuZy8yMjBweC1GQ19aZW5pdF8xX3N0YXJfMjAxNV9sb2dvLnBuZycsXG4gICAgbGFiZWw6ICfXlteg15nXmCdcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy90ZWFtc0RhdGEuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRJdGVtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnQtaXRlbSB7XFxuICBmb250LXNpemU6IDAuOWVtOyB9XFxuICAuZXZlbnQtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLWltYWdlcyAuc2VwYXJhdG9yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbWFnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2UuYmlnIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogOTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2Uuc21hbGwge1xcbiAgICAgIG1hcmdpbjogMCA1cHg7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLW5hbWVzIHtcXG4gICAgcGFkZGluZzogMCA0ZW07IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvLmNvbG9yZWQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyAuZXZlbnQtc3RhdHVzIHtcXG4gICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyBzcGFuIHtcXG4gICAgICBtYXJnaW46IDAgMTVweDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIC5idXR0b24uc21hbGwge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgICBtYXJnaW46IDAgNXB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Jvb2tpbmdGb3JtLnJ0JztcblxuY29uc3QgZW1wdHlCb29raW5nID0ge1xuICBwYWlkU2VhdHM6IDAsXG4gIGV4dHJhU2VhdHM6IDAsXG4gIHBpY2tVcDogJ3RsdicsXG4gIGRyb3BPZmY6ICd0bHYnXG59O1xuXG5jb25zdCBib29raW5nRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCb29raW5nRm9ybScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TdWJtaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Cb29raW5nQ2FuY2VsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBib29raW5nOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGJvb2tpbmcgPSBfLmRlZmF1bHRzKHRoaXMucHJvcHMuYm9va2luZywgeyBwYWlkU2VhdHM6IHRoaXMucHJvcHMuc2Vhc29uVGlja2V0cyB9LCBlbXB0eUJvb2tpbmcpO1xuICAgIHJldHVybiBfLm1lcmdlKHt9LCBib29raW5nLCB7XG4gICAgICBwaWNrVXBFbmFibGVkOiAhIWJvb2tpbmcucGlja1VwLFxuICAgICAgZHJvcE9mZkVuYWJsZWQ6ICEhYm9va2luZy5kcm9wT2ZmXG4gICAgfSk7XG4gIH0sXG5cbiAgb25DaGFuZ2UoZSwgdmFsaWRhdGlvblR5cGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnbnVtZXJpYycpIHtcbiAgICAgIGlmICghL15bMC05XSokLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnaGVicmV3Jykge1xuICAgICAgaWYgKCEvXlvXkC3Xqlxcc10qJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHRvZ2dsZVBpY2tVcChlKSB7XG4gICAgY29uc3QgcGlja1VwRW5hYmxlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBpY2tVcEVuYWJsZWQgfSk7XG4gICAgaWYgKCFwaWNrVXBFbmFibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGlja1VwOiAnJyB9KTtcbiAgICB9XG4gIH0sXG5cbiAgdG9nZ2xlRHJvcE9mZihlKSB7XG4gICAgY29uc3QgZHJvcE9mZkVuYWJsZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wT2ZmRW5hYmxlZCB9KTtcbiAgICBpZiAoIWRyb3BPZmZFbmFibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcE9mZjogJycgfSk7XG4gICAgfVxuICB9LFxuXG4gIG9uTnVtZXJpY0NoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9LFxuXG4gIGlzRm9ybVZhbGlkKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnBhaWRTZWF0cyA9PT0gMCAmJiB0aGlzLnN0YXRlLmV4dHJhU2VhdHMgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUucGlja1VwRW5hYmxlZCAmJiAhdGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnBpY2tVcEVuYWJsZWQgJiYgdGhpcy5zdGF0ZS5waWNrVXAgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWQgJiYgdGhpcy5zdGF0ZS5kcm9wT2ZmID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGJvb2tpbmdUb1N1Ym1pdCA9IF8ucGljayh0aGlzLnN0YXRlLCBfLmtleXMoZW1wdHlCb29raW5nKSk7XG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdChib29raW5nVG9TdWJtaXQpO1xuICB9LFxuXG4gIHJlbmRlcjogdGVtcGxhdGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvb2tpbmdGb3JtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9mb3JtRnJhbWUnLFxuICAgICcuLi8uLi91dGlscy9jb25zdGFudHMnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIEZvcm1GcmFtZSwgY29uc3RhbnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIHJlcGVhdFNlYXQxKHNlYXQsIHNlYXRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdzZWF0LScgKyBzZWF0SW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBzZWF0SW5kZXhcbiAgICAgICAgfSwgc2VhdEluZGV4LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV4dHJhU2VhdDIoZXh0cmFTZWF0LCBleHRyYVNlYXRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdleHRyYVNlYXQtJyArIGV4dHJhU2VhdEluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogZXh0cmFTZWF0SW5kZXhcbiAgICAgICAgfSwgZXh0cmFTZWF0SW5kZXgsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UzKGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVQaWNrVXAoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFN0YXRpb240KHN0YXRpb24sIHN0YXRpb25JbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdzdGF0aW9uLScgKyBzdGF0aW9uSW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBzdGF0aW9uSW5kZXhcbiAgICAgICAgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcsIHN0YXRpb24sICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTUoZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZURyb3BPZmYoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFN0YXRpb242KHN0YXRpb24sIHN0YXRpb25JbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdzdGF0aW9uLScgKyBzdGF0aW9uSW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBzdGF0aW9uSW5kZXhcbiAgICAgICAgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcsIHN0YXRpb24sICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtRnJhbWUsIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAgICAgICAnb25TdWJtaXQnOiB0aGlzLm9uU3VibWl0LFxuICAgICAgICAgICAgJ29uQ2xvc2UnOiB0aGlzLnByb3BzLm9uQ2xvc2UsXG4gICAgICAgICAgICAnb25SZW1vdmUnOiB0aGlzLnByb3BzLm9uQm9va2luZ0NhbmNlbCxcbiAgICAgICAgICAgICdkaXNhYmxlZCc6ICF0aGlzLmlzRm9ybVZhbGlkKClcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2Jvb2tpbmctZm9ybSBzbWFsbC0xMSBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3JvdycgfSwgdGhpcy5wcm9wcy5zZWFzb25UaWNrZXRzID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzbWFsbC02IGNvbHVtbnMnLFxuICAgICAgICAgICAgJ2tleSc6ICc0NTInXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXm9ee15XXqiDXnteg15XXmdeZ151cXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5wYWlkU2VhdHMsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbk51bWVyaWNDaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAncGFpZFNlYXRzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKF8udGltZXModGhpcy5wcm9wcy5zZWFzb25UaWNrZXRzICsgMSksIHJlcGVhdFNlYXQxLmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNiBjb2x1bW5zIGVuZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eg15XXodei15nXnSDXkdeq16nXnNeV151cXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5leHRyYVNlYXRzLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25OdW1lcmljQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ2V4dHJhU2VhdHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoXy50aW1lcyhjb25zdGFudHMuTUFYX0VYVFJBX1BBU1NFTkdFUlMpLCByZXBlYXRFeHRyYVNlYXQyLmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAncm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtMyBsYXJnZS0yIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnaHRtbEZvcic6ICdwaWNrVXBUb2dnbGUnIH0sICfXlNec15XXmicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc3dpdGNoJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc3dpdGNoLWlucHV0JyxcbiAgICAgICAgICAgICdpZCc6ICdwaWNrVXBUb2dnbGUnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2UzLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnY2hlY2tlZCc6IHRoaXMuc3RhdGUucGlja1VwRW5hYmxlZFxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1wYWRkbGUnLFxuICAgICAgICAgICAgJ2h0bWxGb3InOiAncGlja1VwVG9nZ2xlJ1xuICAgICAgICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtOSBsYXJnZS0xMCBjb2x1bW5zIGVuZCBtb3JlLXNwYWNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucGlja1VwLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAncGlja1VwJyxcbiAgICAgICAgICAgICAgICAnZGlzYWJsZWQnOiAhdGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3N0eWxlJzogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgfSwgJ9eR15fXqCcpLFxuICAgICAgICAgICAgXy5tYXAoY29uc3RhbnRzLlNUQVRJT05TLCByZXBlYXRTdGF0aW9uNC5iaW5kKHRoaXMpKVxuICAgICAgICBdKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAncm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtMyBsYXJnZS0yIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnaHRtbEZvcic6ICdkcm9wT2ZmVG9nZ2xlJyB9LCAn15fXlteV16gnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3N3aXRjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1pbnB1dCcsXG4gICAgICAgICAgICAnaWQnOiAnZHJvcE9mZlRvZ2dsZScsXG4gICAgICAgICAgICAndHlwZSc6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdjaGVja2VkJzogdGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZFxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1wYWRkbGUnLFxuICAgICAgICAgICAgJ2h0bWxGb3InOiAnZHJvcE9mZlRvZ2dsZSdcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTkgbGFyZ2UtMTAgY29sdW1ucyBlbmQgbW9yZS1zcGFjZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmRyb3BPZmYsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdkcm9wT2ZmJyxcbiAgICAgICAgICAgICAgICAnZGlzYWJsZWQnOiAhdGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdzdHlsZSc6IHsgZGlzcGxheTogJ25vbmUnIH1cbiAgICAgICAgICAgIH0sICfXkdeX16gnKSxcbiAgICAgICAgICAgIF8ubWFwKGNvbnN0YW50cy5TVEFUSU9OUywgcmVwZWF0U3RhdGlvbjYuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSkpO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLnJ0XG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9mb3JtRnJhbWUuc2NzcycpO1xuXG5jb25zdCBmb3JtRnJhbWVUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMvZm9ybUZyYW1lVHJhbnNsYXRpb25zJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0aXRsZSwgb25DbG9zZSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQmFja0J1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFjay1idG5cIiBrZXk9XCJiYWNrLWJ0blwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPnt0aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgeyBfLmlzRnVuY3Rpb24ob25DbG9zZSkgPyBjcmVhdGVCYWNrQnV0dG9uKCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uc0J1dHRvbnMoZGlzYWJsZWQsIG9uU3VibWl0LCBvblJlbW92ZSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEga2V5PVwicmVtb3ZlLWJ0blwiIG9uQ2xpY2s9e29uUmVtb3ZlfSBjbGFzc05hbWU9XCJidXR0b24gYWxlcnQgbW9yZS1zcGFjZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnsgZm9ybUZyYW1lVHJhbnNsYXRpb25zLlJFTU9WRSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25zIGJ1dHRvbi1ncm91cCBzdGFja2VkIHNtYWxsLWNlbnRlcmVkIGxhcmdlLTYgc21hbGwtOCBcIj5cbiAgICAgICAgICAgIDxhIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17b25TdWJtaXR9IGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzIG1vcmUtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IGZvcm1GcmFtZVRyYW5zbGF0aW9ucy5TVUJNSVQgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7IF8uaXNGdW5jdGlvbihvblJlbW92ZSkgPyBjcmVhdGVSZW1vdmVCdXR0b24oKSA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBGb3JtRnJhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mcmFtZVwiPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlSGVhZGVyKHRoaXMucHJvcHMudGl0bGUsIHRoaXMucHJvcHMub25DbG9zZSkgfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyBjcmVhdGVBY3Rpb25zQnV0dG9ucyh0aGlzLnByb3BzLmRpc2FibGVkLCB0aGlzLnByb3BzLm9uU3VibWl0LCB0aGlzLnByb3BzLm9uUmVtb3ZlKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xufVxuXG5Gb3JtRnJhbWUucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9uU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtRnJhbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybUZyYW1lLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9mb3JtRnJhbWUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWZyYW1lIC5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cXG4uZm9ybS1mcmFtZSAuYWN0aW9uLWJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgLmZvcm0tZnJhbWUgLmFjdGlvbi1idXR0b25zIC5idXR0b24gaSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvZm9ybUZyYW1lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBTVUJNSVQ6ICfXqdee15XXqCcsXG4gIFJFTU9WRTogJ9ee15fXpydcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL2Zvcm1GcmFtZVRyYW5zbGF0aW9ucy5qcyIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXg9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IEZvcm1GcmFtZSA9IHJlcXVpcmUoJy4vZm9ybUZyYW1lJyk7XG5cbmNvbnN0IHVzZXJJbmZvQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXNlckluZm9Db25zdGFudHMnKTtcbmNvbnN0IHVzZXJGb3JtVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zL3VzZXJGb3JtVHJhbnNsYXRpb25zJyk7XG5jb25zdCB1c2VyQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnKTtcblxuY29uc3QgZW1wdHlVc2VyID0ge1xuICAgIGZpcnN0TmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnLFxuICAgIHBob25lUHJlZml4OiAnMDUwJyxcbiAgICBwaG9uZU51bWJlcjogJycsXG4gICAgc3RhdGlvbjogJ3RsdicsXG4gICAgc3Vic2NyaWJlU01TOiB0cnVlLFxuICAgIHN1YnNjcmliZU1haWw6IHRydWUsXG4gICAgc2Vhc29uVGlja2V0czogMFxufTtcblxuZnVuY3Rpb24gZ2V0RW1wdHlVc2VySW5mbyhlbWFpbCkge1xuICByZXR1cm4gXy5hc3NpZ24oZW1wdHlVc2VyLCB7IGVtYWlsIH0pO1xufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgdXNlciA9IHN0YXRlLnVzZXJzW293blByb3BzLnVpZF07XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJJbmZvOiB1c2VyIHx8IGdldEVtcHR5VXNlckluZm8oYXV0aERhdGEuZW1haWwpLFxuICAgICAgICBpc0FkbWluTW9kZTogYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgYWxsb3dVc2VyUmVtb3ZlOiBhdXRoRGF0YS5pc0FkbWluICYmIGF1dGhEYXRhLnVpZCAhPT0gb3duUHJvcHMudWlkXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZVVzZXI6IHVzZXIgPT4gZGlzcGF0Y2godXNlckFjdGlvbnMudXBkYXRlVXNlcihvd25Qcm9wcy51aWQsIHVzZXIpKSxcbiAgICAgICAgcmVtb3ZlVXNlcjogKCkgPT4gZGlzcGF0Y2godXNlckFjdGlvbnMucmVtb3ZlVXNlcihvd25Qcm9wcy51aWQpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkbWluU2VjdGlvbihzZWFzb25UaWNrZXRzLCBvbk51bWJlckNoYW5nZSkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9XCJzZWFzb25UaWNrZXRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgIDxsYWJlbD7Xm9ee15XXqiDXnteg15XXmdeZ151cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNlYXNvblRpY2tldHNcIiB2YWx1ZT17c2Vhc29uVGlja2V0c30gb25DaGFuZ2U9e29uTnVtYmVyQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7IF8udGltZXModXNlckluZm9Db25zdGFudHMuTUFYX1NFQVNPTl9USUNLRVRTLCBpID0+IDxvcHRpb24ga2V5PXsnYW1vdW50LScgKyBpfSB2YWx1ZT17aX0+e2l9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyTmFtZUlucHV0cyhmaXJzdE5hbWUsIGxhc3ROYW1lLCBvblRleHRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS02IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5GSVJTVF9OQU1FIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0TmFtZVwiIHZhbHVlPXtmaXJzdE5hbWV9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTYgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLkxBU1RfTkFNRSB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0TmFtZVwiIHZhbHVlPXtsYXN0TmFtZX0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gbWF4TGVuZ3RoPVwiMjBcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1haWxJbnB1dChlbWFpbCwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9XCJ1c2VyLWluZm8tZW1haWwtaW5wdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtMTIgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLkVNQUlMIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lTnVtYmVySW5wdXRzKHBob25lUHJlZml4LCBwaG9uZU51bWJlciwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtOCBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuUEhPTkVfTlVNQkVSIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiB2YWx1ZT17cGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjdcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNCBjb2x1bW5zIGVuZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlBIT05FX1BSRUZJWCB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInBob25lUHJlZml4XCIgdmFsdWU9e3Bob25lUHJlZml4fSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXy5tYXAodXNlckluZm9Db25zdGFudHMuUEhPTkVfUFJFRklYRVMsIHByZWZpeCA9PiA8b3B0aW9uIGtleT17J3Bob25lLXByZWZpeC0nICsgcHJlZml4fSB2YWx1ZT17cHJlZml4fT57cHJlZml4fTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGlja3VwU3RhdGlvblJvdyhzdGF0aW9uLCByZXF1ZXN0Rm9yTWVtYmVyc2hpcCwgb25UZXh0Q2hhbmdlLCBvbkJvb2xlYW5DaGFuZ2UpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTggc21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLkZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OIH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3RhdGlvblwiIHZhbHVlPXtzdGF0aW9ufSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXy5tYXAodXNlckluZm9Db25zdGFudHMuU1RBVElPTlMsIHN0YXRpb24gPT4gPG9wdGlvbiBrZXk9eydzdGF0aW9uLScgKyBzdGF0aW9ufSB2YWx1ZT17c3RhdGlvbn0+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5TVEFUSU9OU1tzdGF0aW9uXSB9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS00IHNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5SRVFVRVNUX0ZPUl9NRU1CRVJTSElQIH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmVxdWVzdEZvck1lbWJlcnNoaXBcIiB2YWx1ZT17cmVxdWVzdEZvck1lbWJlcnNoaXB9IG9uQ2hhbmdlPXtvbkJvb2xlYW5DaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dW5kZWZpbmVkfSBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PteR15fXqDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dHJ1ZX0+15vXnzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17ZmFsc2V9Ptec15A8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7IGNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCgpIH1cbiAgICAgICAgICAgIHsgY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCgpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzKHN1YnNjcmliZU1haWwsIHN1YnNjcmliZVNNUywgb25Cb29sZWFuQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMyBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5ESVNUUklCVVRJT04uRU1BSUwgfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInN3aXRjaC1pbnB1dFwiIG5hbWU9XCJzdWJzY3JpYmVNYWlsXCIgaWQ9XCJzdWJzY3JpYmVNYWlsXCIgb25DaGFuZ2U9e29uQm9vbGVhbkNoYW5nZX0gY2hlY2tlZD17c3Vic2NyaWJlTWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1wYWRkbGVcIiBodG1sRm9yPVwic3Vic2NyaWJlTWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuVE9HR0xFLllFUyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWluYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5UT0dHTEUuTk8gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0zIGNvbHVtbiBlbmRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5ESVNUUklCVVRJT04uU01TIH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5wdXRcIiBuYW1lPVwic3Vic2NyaWJlU01TXCIgaWQ9XCJzdWJzY3JpYmVTTVNcIiBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfSBjaGVja2VkPXtzdWJzY3JpYmVTTVN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtcGFkZGxlXCIgaHRtbEZvcj1cInN1YnNjcmliZVNNU1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuVE9HR0xFLllFUyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWluYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5UT0dHTEUuTk8gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IF8uY2xvbmUodGhpcy5wcm9wcy51c2VySW5mbyk7XG4gIH1cblxuICBpc0Zvcm1WYWxpZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhc0FsbFJlcXVpcmVkSW5mbyA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZEluZm8gPSBfLnBpY2sodGhpcy5zdGF0ZSwgWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAncGhvbmVQcmVmaXgnLCAncGhvbmVOdW1iZXInXSk7XG4gICAgICAgICAgcmV0dXJuICFfLnNvbWUocmVxdWlyZWRJbmZvLCBfLmlzRW1wdHkpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFzVmFsaWRQaG9uZU51bWJlciA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5waG9uZU51bWJlci5sZW5ndGggPT09IDc7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYXNSZXF1ZXN0Rm9yTWVtYmVyc2hpcFByb3BlcnR5ID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBfLmhhcyh0aGlzLnN0YXRlLCAncmVxdWVzdEZvck1lbWJlcnNoaXAnKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBoYXNBbGxSZXF1aXJlZEluZm8oKSAmJiBoYXNWYWxpZFBob25lTnVtYmVyKCkgJiYgaGFzUmVxdWVzdEZvck1lbWJlcnNoaXBQcm9wZXJ0eSgpO1xuICB9O1xuXG4gIG9uS2V5UHJlc3MgPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgaXNGb3JtVmFsaWQodGhpcy5zdGF0ZSkpIHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2UgPSAodHlwZSwgZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodGhpcy5zdGF0ZSk7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbG9zZSkpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgfTtcblxuICBvblJlbW92ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMucmVtb3ZlVXNlcigpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xvc2UpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qgb25UZXh0Q2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsICd0ZXh0Jyk7XG4gICAgICBjb25zdCBvbk51bWJlckNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzLCAnbnVtYmVyJyk7XG4gICAgICBjb25zdCBvbkJvb2xlYW5DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgJ2Jvb2xlYW4nKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1GcmFtZSB0aXRsZT17dXNlckZvcm1UcmFuc2xhdGlvbnMuVElUTEV9XG4gICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e3RoaXMucHJvcHMuYWxsb3dVc2VyUmVtb3ZlID8gdGhpcy5vblJlbW92ZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5wcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5pc0Zvcm1WYWxpZCgpfT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtY2VudGVyZWQgdXNlci1jb250YWluZXJcIiBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3N9PlxuXG4gICAgICAgICAgICAgIHsgY3JlYXRlVXNlck5hbWVJbnB1dHModGhpcy5zdGF0ZS5maXJzdE5hbWUsIHRoaXMuc3RhdGUubGFzdE5hbWUsIG9uVGV4dENoYW5nZSkgfVxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMudXNlckluZm8uZW1haWwgPyBudWxsIDogY3JlYXRlRW1haWxJbnB1dCh0aGlzLnN0YXRlLmVtYWlsLCBvblRleHRDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgeyBjcmVhdGVQaG9uZU51bWJlcklucHV0cyh0aGlzLnN0YXRlLnBob25lUHJlZml4LCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBvblRleHRDaGFuZ2UsIG9uTnVtYmVyQ2hhbmdlKSB9XG4gICAgICAgICAgICAgIHsgY3JlYXRlUGlja3VwU3RhdGlvblJvdyh0aGlzLnN0YXRlLnN0YXRpb24sIHRoaXMuc3RhdGUucmVxdWVzdEZvck1lbWJlcnNoaXAsIG9uVGV4dENoYW5nZSwgb25Cb29sZWFuQ2hhbmdlKSB9XG5cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmlzQWRtaW5Nb2RlID8gY3JlYXRlQWRtaW5TZWN0aW9uKHRoaXMuc3RhdGUuc2Vhc29uVGlja2V0cywgb25OdW1iZXJDaGFuZ2UpIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgeyBjcmVhdGVEaXN0cmlidXRpb25JbnB1dHModGhpcy5zdGF0ZS5zdWJzY3JpYmVNYWlsLCB0aGlzLnN0YXRlLnN1YnNjcmliZVNNUywgb25Cb29sZWFuQ2hhbmdlKSB9XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0Zvcm1GcmFtZT5cbiAgICApO1xuICB9XG59XG5cblVzZXJGb3JtLlByb3BUeXBlcyA9IHtcbiAgICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVVc2VyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlbW92ZVVzZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNBZG1pbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFsbG93VXNlclJlbW92ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdXNlckluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyRm9ybSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlckZvcm0uanN4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1BWF9TRUFTT05fVElDS0VUUzogNyxcbiAgUEhPTkVfUFJFRklYRVM6IFsnMDUwJywgJzA1MicsICcwNTMnLCAnMDU0JywgJzA1NScsICcwNTcnLCAnMDU4J10sXG4gIFNUQVRJT05TOiBbJ21vZGlpbicsICd0bHYnXVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXNlckluZm9Db25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgVElUTEU6ICfXpNeo15jXmdedINeQ15nXqdeZ15nXnScsXG4gIEZJUlNUX05BTUU6ICfXqdedJyxcbiAgTEFTVF9OQU1FOiAn16nXnSDXntep16TXl9eUJyxcbiAgRU1BSUw6ICfXk9eV15DXqCDXkNec16fXmNeo15XXoNeZJyxcbiAgUEhPTkVfUFJFRklYOiAn16fXmdeT15XXnteqJyxcbiAgUEhPTkVfTlVNQkVSOiAn15jXnNek15XXnyDXoNeZ15nXkycsXG4gIEZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OOiAn16rXl9eg16og16LXnNeZ15Qg157Xldei15PXpNeqJyxcbiAgUkVRVUVTVF9GT1JfTUVNQkVSU0hJUDogJ9ee16LXldeg15nXmdefINeR157XoNeV15k/JyxcbiAgU1RBVElPTlM6IHtcbiAgICBtb2RpaW46ICfXnteV15PXmdei15nXnycsXG4gICAgdGx2OiAn16rXnCDXkNeR15nXkSdcbiAgfSxcbiAgRElTVFJJQlVUSU9OOiB7XG4gICAgRU1BSUw6ICfXqtek15XXpteqINeQ15nXnteZ15nXnCcsXG4gICAgU01TOiAn16rXpNeV16bXqiBTTVMnXG4gIH0sXG4gIFRPR0dMRToge1xuICAgIFlFUzogJ9eb158nLFxuICAgIE5POiAn15zXkCdcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy90cmFuc2xhdGlvbnMvdXNlckZvcm1UcmFuc2xhdGlvbnMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZVBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZS1wYWdlIC5ldmVudHMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgIC5ob21lLXBhZ2UgLmV2ZW50cyB7XFxuICAgICAgbWFyZ2luLXRvcDogMHB4OyB9IH1cXG5cXG4uaG9tZS1wYWdlIC5vcGVuLWV2ZW50cyB7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XFxuXFxuLmhvbWUtcGFnZSAuZXZlbnRzLWxpc3QgaDYge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaG9tZS1wYWdlIC5uby1ib29raW5ncyB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM0MjQyNDI7IH1cXG4gIC5ob21lLXBhZ2UgLm5vLWJvb2tpbmdzIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG4uaG9tZS1wYWdlIC5ldmVudC1pdGVtIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSAuZXZlbnQtaXRlbSB7XFxuICAgICAgcGFkZGluZzogMTVweCAwIDMwcHggMDsgfSB9XFxuICAuaG9tZS1wYWdlIC5ldmVudC1pdGVtOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7IH1cXG4gIC5ob21lLXBhZ2UgLmV2ZW50LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3VzZXJzUGFnZS5ydCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7dXBkYXRlVXNlciwgcmVtb3ZlVXNlcn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5cbmNvbnN0IHBpY2tVc2Vyc0Z1bmN0aW9ucyA9IHtcbiAgQUxMOiAoKSA9PiB0cnVlLFxuICBNRU1CRVJTOiB1c2VyID0+IHVzZXIuc2Vhc29uVGlja2V0cyA+IDAsXG4gIE5PTl9NRU1CRVJTOiB1c2VyID0+ICF1c2VyLnNlYXNvblRpY2tldHMsXG4gIFJFUVVFU1RTOiB1c2VyID0+IHVzZXIucmVxdWVzdEZvck1lbWJlcnNoaXAsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdXBkYXRlVXNlcjogKHVpZCwgdXNlcikgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1aWQsIHVzZXIpKSxcbiAgcmVtb3ZlVXNlcjogKHVpZCkgPT4gZGlzcGF0Y2gocmVtb3ZlVXNlcih1aWQpKVxufSk7XG5cbmNsYXNzIFVzZXJzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0aW5nVXNlcklkOiBudWxsLFxuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgZmlsdGVyOiAnQUxMJ1xuICAgIH07XG4gIH1cblxuICBnZXRWaXNpYmxlVXNlcnMoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy51c2VycylcbiAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zW3RoaXMuc3RhdGUuZmlsdGVyXSlcbiAgICAgIC5waWNrQnkodXNlciA9PiBfLnN0YXJ0c1dpdGgodXNlci5maXJzdE5hbWUsIHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpIHx8IF8uc3RhcnRzV2l0aCh1c2VyLmxhc3ROYW1lLCB0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KSwgdGhpcylcbiAgICAgIC5tYXAoKHVzZXIsIHVpZCkgPT4gKHt1c2VyLCB1aWR9KSlcbiAgICAgIC5zb3J0QnkoJ3VzZXIuZmlyc3ROYW1lJylcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgY291bnRTZWFzb25UaWNrZXRzKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMudXNlcnMpXG4gICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5NRU1CRVJTKVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ3NlYXNvblRpY2tldHMnKVxuICAgICAgLnZhbHVlKCk7XG4gIH1cblxuICBjb3VudE5vbk1lbWJlcnNVc2VycygpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLnVzZXJzKVxuICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnMuTk9OX01FTUJFUlMpXG4gICAgICAuc2l6ZSgpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGNvdW50UmVxdWVzdHNGb3JNZW1iZXJzaGlwKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMudXNlcnMpXG4gICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5SRVFVRVNUUylcbiAgICAgIC5zaXplKClcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFF1ZXJ5OiBlLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcn0pO1xuICB9XG5cbiAgb25Vc2VyQ2xpY2sodWlkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZ1VzZXJJZDogdWlkfSk7XG4gIH1cblxuICBzdG9wRWRpdGluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlZGl0aW5nVXNlcklkOiBudWxsLCBzZWFyY2hRdWVyeTogJyd9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cblxuICBnZXRVc2VyVGl0bGUodXNlcikge1xuICAgIHJldHVybiB1c2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXIubGFzdE5hbWU7XG4gIH1cblxuICBnZXRVc2VyU3VidGl0bGVzKHVzZXIpIHtcbiAgICByZXR1cm4gW3VzZXIucGhvbmVQcmVmaXggKyAnLScgKyB1c2VyLnBob25lTnVtYmVyLCB1c2VyLmVtYWlsLCAn15vXnteV16og157XoNeV15nXmdedOiAnICsgKHVzZXIuc2Vhc29uVGlja2V0cyB8fCAwKV07XG4gIH1cblxuICBnZXRVc2VySW1hZ2UodXNlcikge1xuICAgIHJldHVybiB1c2VyLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjMvMTYzODA0LnN2Zyc7XG4gIH1cbn1cblxuVXNlcnNQYWdlLnByb3BUeXBlcyA9IHtcbiAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2Vyc1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2xpc3RJdGVtJyxcbiAgICAnLi4vdXNlckZvcm0nLFxuICAgICcuL3VzZXJzUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBsaXN0SXRlbSwgVXNlckZvcm0sIHVzZXJzUGFnZUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBvbkNsaWNrMSh2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ0FMTCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMih2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ01FTUJFUlMnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazModmlzaWJsZVVzZXJzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdSRVFVRVNUUycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNCh2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ05PTl9NRU1CRVJTJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlNSh2aXNpYmxlVXNlcnMsIGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hRdWVyeUNoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazYodmlzaWJsZVVzZXJzLCB1c2VySXRlbSwgdXNlckl0ZW1JbmRleCkge1xuICAgICAgICB0aGlzLm9uVXNlckNsaWNrKHVzZXJJdGVtLnVpZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFVzZXJJdGVtNyh2aXNpYmxlVXNlcnMsIHVzZXJJdGVtLCB1c2VySXRlbUluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldFVzZXJUaXRsZSh1c2VySXRlbS51c2VyKSxcbiAgICAgICAgICAgICdrZXknOiAndXNlci0nICsgdXNlckl0ZW0udWlkLFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0VXNlclN1YnRpdGxlcyh1c2VySXRlbS51c2VyKSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0VXNlckltYWdlKHVzZXJJdGVtLnVzZXIpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrNi5iaW5kKHRoaXMsIHZpc2libGVVc2VycywgdXNlckl0ZW0sIHVzZXJJdGVtSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZVZpc2libGVVc2VyczgoKSB7XG4gICAgICAgIHZhciB2aXNpYmxlVXNlcnMgPSB0aGlzLmdldFZpc2libGVVc2VycygpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2tleSc6ICdsaXN0LXZpZXcnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXntep16rXntep15nXnScpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTEyIGxhcmdlLTgnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VsJywgeyAnY2xhc3NOYW1lJzogJ21lbnUgc21hbGwtdGV4dCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnQUxMJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2sxLmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXm9eV15zXnSAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIF8uc2l6ZSh0aGlzLnByb3BzLnVzZXJzKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdNRU1CRVJTJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2syLmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteg15XXmdeZ150gJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCB0aGlzLmNvdW50U2Vhc29uVGlja2V0cygpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1JFUVVFU1RTJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2szLmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXkden16nXlCDXnNee16DXldeZICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5jb3VudFJlcXVlc3RzRm9yTWVtYmVyc2hpcCgpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ05PTl9NRU1CRVJTJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2s0LmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnNeQINee16DXldeZ15nXnSAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuY291bnROb25NZW1iZXJzVXNlcnMoKSwgJyknKSkpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NlYXJjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgICAgICAgICAgICd0eXBlJzogJ3NlYXJjaCcsXG4gICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ9eX15nXpNeV16knLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlNS5iaW5kKHRoaXMsIHZpc2libGVVc2VycyksXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeVxuICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7ICdjbGFzc05hbWUnOiAnc2VhcmNoLWljb24nIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7ICdjbGFzc05hbWUnOiAnZmEgZmEtc2VhcmNoJyB9KSkpKSksXG4gICAgICAgICAgICBfLm1hcCh2aXNpYmxlVXNlcnMsIHJlcGVhdFVzZXJJdGVtNy5iaW5kKHRoaXMsIHZpc2libGVVc2VycykpLFxuICAgICAgICAgICAgdmlzaWJsZVVzZXJzLmxlbmd0aCA9PT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmlsdGVyLXN0YXR1cycsXG4gICAgICAgICAgICAgICAgJ2tleSc6ICcyNzkxJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWZyb3duLW8nLFxuICAgICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee16bXmNei16jXmdedLCDXnNeQINeg157XpteQ15Ug16jXqdeV157XldeqINee16rXkNeZ157XldeqLi4uJykpIDogbnVsbFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTkoKSB7XG4gICAgICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSB1c2Vycy1wYWdlJyB9LCAhdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkID8gc2NvcGVWaXNpYmxlVXNlcnM4LmFwcGx5KHRoaXMsIFtdKSA6IG51bGwsIHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdrZXknOiAnZWRpdC11c2VyJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlckZvcm0sIHtcbiAgICAgICAgICAgICd1aWQnOiB0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQsXG4gICAgICAgICAgICAnb25DbG9zZSc6IG9uQ2xvc2U5LmJpbmQodGhpcylcbiAgICAgICAgfSkpIDogbnVsbCk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvbGlzdEl0ZW0uc2NzcycpO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0gc21hbGwtMTJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17dGhpcy5wcm9wcy5pbWFnZVNyY30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10aXRsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlIGxhcmdlLXRleHQgaGlkZS1mb3ItcHJpbnRcIj57dGhpcy5wcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIHNtYWxsLTEyIHNob3ctZm9yLXNtYWxsLW9ubHlcIj57c3VidGl0bGV9PC9sYWJlbD4pfVxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLWxhcmdlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIGlubGluZSBoaWRlLWZvci1zbWFsbC1vbmx5XCI+e3N1YnRpdGxlfTwvbGFiZWw+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN1YnRpdGxlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIGltYWdlU3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RJdGVtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xpc3RJdGVtLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9saXN0SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcbiAgLmxpc3QtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LWltYWdlIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnRpdGxlLmxhcmdlLXRleHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnN1YnRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDAuODByZW07IH1cXG4gICAgICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLCAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLnNob3ctZm9yLXByaW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9saXN0SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VzZXJzUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VzZXJzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlcnNQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2V2ZW50c1BhZ2UucnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUV2ZW50LCB1cGRhdGVFdmVudCwgcmVtb3ZlRXZlbnQgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucyc7XG5cbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBwaWNrRXZlbnRzID0ge1xuICBBTEw6ICgpID0+IHRydWUsXG4gIFsnT1BFTiddOiBldmVudCA9PiBldmVudC5zdGF0dXMgPT09IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLk9QRU5fRk9SX0FMTC52YWx1ZSB8fCBldmVudC5zdGF0dXMgPT09IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLk9QRU5fRk9SX01FTUJFUlMudmFsdWUsXG4gIFsnQ0xPU0VEJ106IGV2ZW50ID0+IGV2ZW50LnN0YXR1cyA9PT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuQ0xPU0VELnZhbHVlLFxufTtcblxuY29uc3QgZ2V0U3RhdHVzU3VidGl0bGUgPSBldmVudCA9PiB7XG4gIGNvbnN0IGV2ZW50U3RhdHVzID0gXy5maW5kKENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLCB7IHZhbHVlOiBldmVudC5zdGF0dXMgfSk7XG4gIHJldHVybiBldmVudFN0YXR1cyA/IGV2ZW50U3RhdHVzLm5hbWUgOiAnJztcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZXZlbnRzOiBzdGF0ZS5ldmVudHMsXG4gIGF1dGhEYXRhOiBzdGF0ZS5hdXRoRGF0YVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGNyZWF0ZUV2ZW50OiBldmVudCA9PiBkaXNwYXRjaChjcmVhdGVFdmVudChldmVudCkpLFxuICB1cGRhdGVFdmVudDogKGV2ZW50SWQsIGV2ZW50KSA9PiBkaXNwYXRjaCh1cGRhdGVFdmVudChldmVudElkLCBldmVudCkpLFxuICByZW1vdmVFdmVudDogKGV2ZW50SWQpID0+IGRpc3BhdGNoKHJlbW92ZUV2ZW50KGV2ZW50SWQpKVxufSk7XG5cbmNsYXNzIEV2ZW50c1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZWRpdGluZ0V2ZW50SWQ6IG51bGwsXG4gICAgICBjcmVhdGVNb2RlOiBmYWxzZSxcbiAgICAgIGZpbHRlcjogJ09QRU4nXG4gICAgfTtcbiAgfVxuXG4gIGdldFZpc2libGVFdmVudHMoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy5ldmVudHMpXG4gICAgICAucGlja0J5KHBpY2tFdmVudHNbdGhpcy5zdGF0ZS5maWx0ZXJdKVxuICAgICAgLm1hcCgoZXZlbnQsIGV2ZW50SWQpID0+ICh7IGV2ZW50SWQsIGV2ZW50IH0pKVxuICAgICAgLnZhbHVlKCk7XG4gIH1cblxuICBnZXRPcGVuRXZlbnRzKCkge1xuICAgIHJldHVybiBfLnBpY2tCeSh0aGlzLnByb3BzLmV2ZW50cywgcGlja0V2ZW50c1snT1BFTiddKTtcbiAgfVxuXG4gIGdldENsb3NlZEV2ZW50cygpIHtcbiAgICByZXR1cm4gXy5waWNrQnkodGhpcy5wcm9wcy5ldmVudHMsIHBpY2tFdmVudHNbJ0NMT1NFRCddKTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZShmaWx0ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyIH0pO1xuICB9XG5cbiAgZ2V0RXZlbnRUaXRsZShldmVudCkge1xuICAgIHJldHVybiBDb25zdGFudHMuRVZFTlRTX1RZUEVTW2V2ZW50LnR5cGVJZF0ubmFtZTtcbiAgfVxuXG4gIGdldEV2ZW50U3VidGl0bGVzKGV2ZW50KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICfXqteQ16jXmdeaOiAnICsgYCR7ZXZlbnQuZGF5fS8ke2V2ZW50Lm1vbnRofS8ke2V2ZW50LnllYXJ9YCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWNvbmNhdFxuICAgICAgJ9ep16LXlDogJyArICBgJHtldmVudC5ob3VyfToke2V2ZW50Lm1pbnV0ZX1gLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG4gICAgICBnZXRTdGF0dXNTdWJ0aXRsZShldmVudClcbiAgICBdO1xuICB9XG5cbiAgZ2V0RXZlbnRJbWFnZShldmVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXTtcbiAgICByZXR1cm4gZXZlbnRUeXBlLnNyYyB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTM4LzEzODc3Ni5zdmcnO1xuICB9XG5cbiAgb25FdmVudENsaWNrKGV2ZW50SWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ0V2ZW50SWQ6IGV2ZW50SWQgfSk7XG4gIH1cblxuICBvbkNyZWF0ZUV2ZW50Q2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNyZWF0ZU1vZGU6IHRydWUgfSk7XG4gIH1cblxuICBzdG9wRWRpdGluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ0V2ZW50SWQ6IG51bGwsIGNyZWF0ZU1vZGU6IGZhbHNlIH0pO1xuICB9XG5cbiAgdXBkYXRlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jcmVhdGVNb2RlKSB7XG4gICAgICB0aGlzLnByb3BzLmNyZWF0ZUV2ZW50KGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVFdmVudCh0aGlzLnN0YXRlLmVkaXRpbmdFdmVudElkLCBldmVudCk7XG4gICAgfVxuICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50KCkge1xuICAgIHRoaXMucHJvcHMucmVtb3ZlRXZlbnQodGhpcy5zdGF0ZS5lZGl0aW5nRXZlbnRJZCk7XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5FdmVudHNQYWdlLnByb3BUeXBlcyA9IHtcbiAgYXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZXZlbnRzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNyZWF0ZUV2ZW50OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1cGRhdGVFdmVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVtb3ZlRXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRXZlbnRzUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRzUGFnZS9ldmVudHNQYWdlLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9saXN0SXRlbScsXG4gICAgJy4uL2V2ZW50Rm9ybS9ldmVudEZvcm0nLFxuICAgICcuLi8uLi91dGlscy9jb25zdGFudHMnLFxuICAgICcuL2V2ZW50c1BhZ2Uuc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgbGlzdEl0ZW0sIEV2ZW50Rm9ybSwgQ29uc3RhbnRzLCBldmVudHNQYWdlQ3NzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxKGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnQUxMJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2syKGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnT1BFTicpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMyhsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ0NMT1NFRCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNChsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIHtcbiAgICAgICAgdGhpcy5vbkNyZWF0ZUV2ZW50Q2xpY2soKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazUobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB7XG4gICAgICAgIHRoaXMub25DcmVhdGVFdmVudENsaWNrKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s2KGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cywgZXZlbnRJdGVtLCBldmVudEl0ZW1JbmRleCkge1xuICAgICAgICB0aGlzLm9uRXZlbnRDbGljayhldmVudEl0ZW0uZXZlbnRJZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50SXRlbTcobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzLCBldmVudEl0ZW0sIGV2ZW50SXRlbUluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldEV2ZW50VGl0bGUoZXZlbnRJdGVtLmV2ZW50KSxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SXRlbS5ldmVudElkLFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0RXZlbnRTdWJ0aXRsZXMoZXZlbnRJdGVtLmV2ZW50KSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0RXZlbnRJbWFnZShldmVudEl0ZW0uZXZlbnQpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrNi5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cywgZXZlbnRJdGVtLCBldmVudEl0ZW1JbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlVmlzaWJsZUV2ZW50czgobGlzdFZpZXdNb2RlKSB7XG4gICAgICAgIHZhciB2aXNpYmxlRXZlbnRzID0gdGhpcy5nZXRWaXNpYmxlRXZlbnRzKCk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyAna2V5JzogJ2V2ZW50cy12aWV3JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlcicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyLXRpdGxlJyB9LCAn15DXmdeo15XXoteZ150nKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZmlsdGVyaW5nIHJvdyBleHBhbmRlZCBjb2xsYXBzZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2NvbHVtbiBzbWFsbC0xMiBsYXJnZS02JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsIHsgJ2NsYXNzTmFtZSc6ICdtZW51JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdBTEwnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazEuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eb15XXnNedICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgXy5zaXplKHRoaXMucHJvcHMuZXZlbnRzKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdPUEVOJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2syLmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXpNeq15XXlyAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIF8uc2l6ZSh0aGlzLmdldE9wZW5FdmVudHMoKSksICcpJykpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnQ0xPU0VEJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2szLmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXodeS15XXqCAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIF8uc2l6ZSh0aGlzLmdldENsb3NlZEV2ZW50cygpKSwgJyknKSkpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2Zsb2F0LWxlZnQgYWRkLWJ0biBiaWcgaGlkZS1mb3Itc21hbGwtb25seScsXG4gICAgICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrNC5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cylcbiAgICAgICAgICAgIH0sICcrJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2Zsb2F0LWxlZnQgYWRkLWJ0biBzbWFsbCBzaG93LWZvci1zbWFsbC1vbmx5JyxcbiAgICAgICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s1LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKVxuICAgICAgICAgICAgfSwgJysnKSksXG4gICAgICAgICAgICBfLm1hcCh2aXNpYmxlRXZlbnRzLCByZXBlYXRFdmVudEl0ZW03LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSksXG4gICAgICAgICAgICB2aXNpYmxlRXZlbnRzLmxlbmd0aCA9PT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmlsdGVyLXN0YXR1cycsXG4gICAgICAgICAgICAgICAgJ2tleSc6ICcyNDM0J1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWZyb3duLW8nLFxuICAgICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee16bXmNei16jXmdedLCDXnNeQINeg157XpteQ15Ug16jXqdeV157XldeqINee16rXkNeZ157XldeqLi4uJykpIDogbnVsbFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25TdWJtaXQ5KGxpc3RWaWV3TW9kZSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVFdmVudChldmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uUmVtb3ZlRXZlbnQxMChsaXN0Vmlld01vZGUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsb3NlMTEobGlzdFZpZXdNb2RlKSB7XG4gICAgICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVMaXN0Vmlld01vZGUxMigpIHtcbiAgICAgICAgdmFyIGxpc3RWaWV3TW9kZSA9ICF0aGlzLnN0YXRlLmVkaXRpbmdFdmVudElkICYmICF0aGlzLnN0YXRlLmNyZWF0ZU1vZGU7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQgZGFzaGJvYXJkLXBhZ2UgZXZlbnRzLXBhZ2UnIH0sIGxpc3RWaWV3TW9kZSA/IHNjb3BlVmlzaWJsZUV2ZW50czguYXBwbHkodGhpcywgW2xpc3RWaWV3TW9kZV0pIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLWNlbnRlcmVkJyB9LCAhbGlzdFZpZXdNb2RlID8gUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudEZvcm0sIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtdXNlcicsXG4gICAgICAgICAgICAnZXZlbnQnOiB0aGlzLnByb3BzLmV2ZW50c1t0aGlzLnN0YXRlLmVkaXRpbmdFdmVudElkXSxcbiAgICAgICAgICAgICdvblN1Ym1pdCc6IG9uU3VibWl0OS5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSksXG4gICAgICAgICAgICAnb25SZW1vdmVFdmVudCc6IG9uUmVtb3ZlRXZlbnQxMC5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSksXG4gICAgICAgICAgICAnaXNBZG1pbk1vZGUnOiB0aGlzLnByb3BzLmF1dGhEYXRhLmlzQWRtaW4sXG4gICAgICAgICAgICAnb25DbG9zZSc6IG9uQ2xvc2UxMS5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSlcbiAgICAgICAgfSkgOiBudWxsKSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY29wZUxpc3RWaWV3TW9kZTEyLmFwcGx5KHRoaXMsIFtdKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2UucnRcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ldmVudEZvcm0ucnQnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IGVtcHR5RXZlbnQgPSB7XG4gIHR5cGVJZDogJycsXG4gIGRheTogJzAxJyxcbiAgbW9udGg6ICcwMScsXG4gIHllYXI6ICcyMDE3JyxcbiAgaG91cjogJzE3JyxcbiAgbWludXRlOiAnMDAnLFxuICBzdGF0dXM6IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLkNMT1NFRC52YWx1ZVxufTtcblxuY29uc3QgZXZlbnRGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ2V2ZW50Rm9ybScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TdWJtaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25SZW1vdmVFdmVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgaXNBZG1pbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiBfLmRlZmF1bHRzKHRoaXMucHJvcHMuZXZlbnQsIGVtcHR5RXZlbnQsIHsgZGF0ZUlucHV0U3VwcG9ydGVkOiB0cnVlLCB0aW1lSW5wdXRTdXBwb3J0ZWQ6IHRydWUgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jaGVja0lmSHRtbDVTdXBwb3J0ZWQoKTtcbiAgfSxcblxuICBvbkNoYW5nZShlLCB2YWxpZGF0aW9uVHlwZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdudW1lcmljJykge1xuICAgICAgaWYgKCEvXlswLTldKiQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdoZWJyZXcnKSB7XG4gICAgICBpZiAoIS9eW9eQLdeqXFxzXSokLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0RXZlbnRQaWN0dXJlKCkge1xuICAgIHJldHVybiBfLmdldChDb25zdGFudHMuRVZFTlRTX1RZUEVTLCBbdGhpcy5zdGF0ZS50eXBlSWQsICdzcmMnXSkgfHwgQ29uc3RhbnRzLkVWRU5UX0RFRkFVTFRfUElDO1xuICB9LFxuXG4gIGdldFRpbWVWYWx1ZSgpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnN0YXRlKVxuICAgICAgLnBpY2soWydob3VyJywgJ21pbnV0ZSddKVxuICAgICAgLm1hcCgpXG4gICAgICAudmFsdWUoKVxuICAgICAgLmpvaW4oJzonKTtcbiAgfSxcblxuICBvblRpbWVDaGFuZ2UoZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3NvcnQtY29tcFxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdXI6IHZhbFswXSwgbWludXRlOiB2YWxbMV0gfSk7XG4gIH0sXG5cbiAgZ2V0RGF0ZVZhbHVlKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMuc3RhdGUpXG4gICAgICAucGljayhbJ3llYXInLCAnbW9udGgnLCAnZGF5J10pXG4gICAgICAubWFwKClcbiAgICAgIC52YWx1ZSgpXG4gICAgICAuam9pbignLScpO1xuICB9LFxuXG4gIG9uTnVtZXJpY0NoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9LFxuXG4gIGNoZWNrSWZIdG1sNVN1cHBvcnRlZCgpIHtcbiAgICBjb25zdCBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gWydkYXRlJywgJ3RpbWUnXTtcbiAgICBjb25zdCB0ZXN0UmVzdWx0ID0ge307XG4gICAgY29uc3QgdGVzdFN0cmluZyA9ICd0ZXN0ISc7XG5cbiAgICBfLmVhY2goc3VwcG9ydGVkSW5wdXRUeXBlcywgKGlucHV0VHlwZSkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgIGlucHV0LnZhbHVlID0gdGVzdFN0cmluZztcbiAgICAgIGNvbnN0IGlzU3VwcG9ydGVkID0gaW5wdXQudmFsdWUgIT09IHRlc3RTdHJpbmc7XG4gICAgICB0ZXN0UmVzdWx0W2lucHV0VHlwZSArICdJbnB1dFN1cHBvcnRlZCddID0gaXNTdXBwb3J0ZWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHRlc3RSZXN1bHQpO1xuICB9LFxuXG4gIG9uRGF0ZUNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUuc3BsaXQoJy0nKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgeWVhcjogdmFsWzBdLCBtb250aDogdmFsWzFdLCBkYXk6IHZhbFsyXSB9KTtcbiAgfSxcblxuICBvbkJvb2xlYW5DaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gQm9vbGVhbihlLnRhcmdldC5jaGVja2VkKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9LFxuXG4gIGlzRm9ybVZhbGlkKCkge1xuICAgIHJldHVybiAhISh0aGlzLnN0YXRlLnR5cGVJZCk7XG4gIH0sXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgZXZlbnQgPSBfLm9taXQodGhpcy5zdGF0ZSwgWyd0aW1lSW5wdXRTdXBwb3J0ZWQnLCAnZGF0ZUlucHV0U3VwcG9ydGVkJ10pO1xuICAgIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQpO1xuICB9LFxuXG4gIHJlbmRlcjogdGVtcGxhdGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50Rm9ybTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9mb3JtRnJhbWUnLFxuICAgICcuLi8uLi91dGlscy9jb25zdGFudHMnLFxuICAgICcuL2V2ZW50Rm9ybS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBGb3JtRnJhbWUsIENvbnN0YW50cywgZXZlbnRGb3JtQ3NzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50MShzdXBwb3J0ZWRJbnB1dHMsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50LScgKyBldmVudEluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogZXZlbnRJbmRleFxuICAgICAgICB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsIGV2ZW50Lm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0WWVhcjIoc3VwcG9ydGVkSW5wdXRzLCB5ZWFyLCB5ZWFySW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAneXktJyArIHllYXJJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6ICcyMCcgKyB5ZWFyXG4gICAgICAgIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCB5ZWFyLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0TW9udGgzKHN1cHBvcnRlZElucHV0cywgbW9udGgsIG1vbnRoSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ2tleSc6ICdtbS0nICsgbW9udGhJbmRleCB9LCBtb250aCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdERheTQoc3VwcG9ydGVkSW5wdXRzLCBkYXksIGRheUluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICdrZXknOiAnZGQtJyArIGRheUluZGV4IH0sIGRheSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdE1pbnV0ZTUoc3VwcG9ydGVkSW5wdXRzLCBtaW51dGUsIG1pbnV0ZUluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICdrZXknOiAnbWluLScgKyBtaW51dGVJbmRleCB9LCBtaW51dGUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRIb3VyNihzdXBwb3J0ZWRJbnB1dHMsIGhvdXIsIGhvdXJJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAna2V5JzogJ2hoLScgKyBob3VySW5kZXggfSwgaG91cik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50U3RhdHVzNyhzdXBwb3J0ZWRJbnB1dHMsIGV2ZW50U3RhdHVzLCBldmVudFN0YXR1c0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IGV2ZW50U3RhdHVzLnZhbHVlIH0sIGV2ZW50U3RhdHVzLm5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZVN1cHBvcnRlZElucHV0czgoKSB7XG4gICAgICAgIHZhciBzdXBwb3J0ZWRJbnB1dHMgPSB0aGlzLnN0YXRlLmRhdGVJbnB1dFN1cHBvcnRlZCAmJiB0aGlzLnN0YXRlLnRpbWVJbnB1dFN1cHBvcnRlZDtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdldmVudC1mb3JtIGxhcmdlLTExIGxhcmdlLWNlbnRlcmVkJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAncm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtOSBsYXJnZS0xMCBsYXJnZS1jb2xsYXBzZSBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXnSDXlNeQ15nXqNeV16JcXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS50eXBlSWQsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICd0eXBlSWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3N0eWxlJzogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgfSwgJ9eR15fXqCcpLFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkVWRU5UU19UWVBFUywgcmVwZWF0RXZlbnQxLmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2Zsb2F0LWxlZnQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZXZlbnQtcGljJyxcbiAgICAgICAgICAgICdzcmMnOiB0aGlzLmdldEV2ZW50UGljdHVyZSgpXG4gICAgICAgIH0pKSksICFzdXBwb3J0ZWRJbnB1dHMgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3JvdyBzbWFsbC1leHBhbmRlZCBzbWFsbC1jZW50ZXJlZCcsXG4gICAgICAgICAgICAna2V5JzogJ3Vuc3VwcG9ydGVkLWRyb3Bkb3ducydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eq15DXqNeZ15onKSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnllYXIsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICd5ZWFyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS55ZWFycywgcmVwZWF0WWVhcjIuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC00IG1lZGl1bS0yIGNvbHVtbnMgbW9yZS1zcGFjZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLm1vbnRoLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnbW9udGgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRBVEVfVElNRV9EQVRBLm1vbnRocywgcmVwZWF0TW9udGgzLmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNCBtZWRpdW0tMiBjb2x1bW5zIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5kYXksXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYXknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3FxXFxuICAgICAgICAgICAgICAgICAgICAnLFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRBVEVfVElNRV9EQVRBLmRheXMsIHJlcGVhdERheTQuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC0zIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqdei15QnKSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLm1pbnV0ZSxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ21pbnV0ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuREFURV9USU1FX0RBVEEubWludXRlcywgcmVwZWF0TWludXRlNS5iaW5kKHRoaXMsIHN1cHBvcnRlZElucHV0cykpXG4gICAgICAgIF0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTMgY29sdW1ucyBtb3JlLXNwYWNlIGVuZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmhvdXIsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdob3VyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS5ob3VycywgcmVwZWF0SG91cjYuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSkpIDogbnVsbCwgc3VwcG9ydGVkSW5wdXRzID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdyb3cnLFxuICAgICAgICAgICAgJ2tleSc6ICdzdXBwb3J0ZWQtaW5wdXRzJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNyBsYXJnZS01IGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqteQ16jXmdeaXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ2RhdGUnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5nZXREYXRlVmFsdWUoKSxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25EYXRlQ2hhbmdlLFxuICAgICAgICAgICAgJ21pbic6ICcyMDE2LTAxLTAxJyxcbiAgICAgICAgICAgICdtYXgnOiAnMjAxNy0xMi0zMScsXG4gICAgICAgICAgICAnbmFtZSc6ICdkYXRlJ1xuICAgICAgICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNSBsYXJnZS0zIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqdei15RcXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ3R5cGUnOiAndGltZScsXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLmdldFRpbWVWYWx1ZSgpLFxuICAgICAgICAgICAgJ3N0ZXAnOiAzMDAsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uVGltZUNoYW5nZVxuICAgICAgICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnbGFyZ2UtNCBtZWRpdW0tMTIgY29sdW1ucycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJyDXodeY15jXldehXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuc3RhdHVzLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnc3RhdHVzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLCByZXBlYXRFdmVudFN0YXR1czcuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSkpKSA6IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtRnJhbWUsIHtcbiAgICAgICAgICAgICd0aXRsZSc6ICfXoteo15nXm9eqINeQ15nXqNeV16InLFxuICAgICAgICAgICAgJ29uU3VibWl0JzogdGhpcy5vblN1Ym1pdCxcbiAgICAgICAgICAgICdvblJlbW92ZSc6IHRoaXMucHJvcHMub25SZW1vdmVFdmVudCxcbiAgICAgICAgICAgICdvbkNsb3NlJzogdGhpcy5wcm9wcy5vbkNsb3NlLFxuICAgICAgICAgICAgJ2Rpc2FibGVkJzogIXRoaXMuaXNGb3JtVmFsaWQoKVxuICAgICAgICB9LCBzY29wZVN1cHBvcnRlZElucHV0czguYXBwbHkodGhpcywgW10pKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLnJ0XG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50Rm9ybS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50Rm9ybS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRGb3JtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudC1mb3JtIC5ldmVudC1waWMge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudHNQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRzUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudHMtcGFnZSAuZmlsdGVyaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Jvb2tpbmdzUGFnZS5ydCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1cGRhdGVCb29raW5nLCBjYW5jZWxCb29raW5nIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucyc7XG5cbmNvbnN0IGdldERyb3BPZmZNYXAgPSBib29raW5ncyA9PiBfLmNoYWluKGJvb2tpbmdzKVxuICAub21pdEJ5KGJvb2tpbmcgPT4gIShib29raW5nLmRyb3BPZmYpKVxuICAudHJhbnNmb3JtKChhY2MsIGJvb2tpbmcsIHVpZCkgPT4ge1xuICAgIGFjY1tib29raW5nLmRyb3BPZmZdW3VpZF0gPSBib29raW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIH0sIHsgdGx2OiB7fSwgbW9kaWluOiB7fSB9KVxuICAudmFsdWUoKTtcblxuY29uc3QgZ2V0UGlja1VwTWFwID0gYm9va2luZ3MgPT4gXy5jaGFpbihib29raW5ncylcbiAgLm9taXRCeShib29raW5nID0+ICEoYm9va2luZy5waWNrVXApKVxuICAudHJhbnNmb3JtKChhY2MsIGJvb2tpbmcsIHVpZCkgPT4ge1xuICAgIGFjY1tib29raW5nLnBpY2tVcF1bdWlkXSA9IGJvb2tpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgfSwgeyB0bHY6IHt9LCBtb2RpaW46IHt9IH0pXG4gIC52YWx1ZSgpO1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmdzLFxuICBldmVudHM6IHN0YXRlLmV2ZW50cyxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdXBkYXRlQm9va2luZzogKHVpZCwgZXZlbnRJZCwgYm9va2luZykgPT4gZGlzcGF0Y2godXBkYXRlQm9va2luZyh1aWQsIGV2ZW50SWQsIGJvb2tpbmcpKSxcbiAgY2FuY2VsQm9va2luZzogKHVpZCwgZXZlbnRJZCkgPT4gZGlzcGF0Y2goY2FuY2VsQm9va2luZyh1aWQsIGV2ZW50SWQpKVxufSk7XG5cbmNsYXNzIEJvb2tpbmdzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0aW5nVXNlcklkOiBudWxsLFxuICAgICAgZXZlbnRJZDogXy5maW5kS2V5KHRoaXMucHJvcHMuZXZlbnRzLCB7c3RhdHVzOiAnb3BlbkZvck1lbWJlcnMnfSkgfHwgXy5maW5kS2V5KHRoaXMucHJvcHMuZXZlbnRzLCB7c3RhdHVzOiAnb3BlbkZvckFsbCd9KSB8fCAgXy5maW5kS2V5KHRoaXMucHJvcHMuZXZlbnRzLCB7c3RhdHVzOiAnY2xvc2VkJ30pICxcbiAgICAgIGZpbHRlcjogJ1BJQ0tVUCdcbiAgICB9O1xuICB9XG5cbiAgZ2V0VmlzaWJsZUJvb2tpbmdzKCkge1xuICAgIGNvbnN0IGJvb2tpbmdGb3JFdmVudE1hcCA9IF8uY2hhaW4odGhpcy5wcm9wcy5ib29raW5ncylcbiAgICAgIC5tYXBWYWx1ZXModXNlckJvb2tpbmdzID0+IHVzZXJCb29raW5nc1t0aGlzLnN0YXRlLmV2ZW50SWRdKVxuICAgICAgLm9taXRCeShfLmlzVW5kZWZpbmVkKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGlja1VwOiBnZXRQaWNrVXBNYXAoYm9va2luZ0ZvckV2ZW50TWFwKSxcbiAgICAgIGRyb3BPZmY6IGdldERyb3BPZmZNYXAoYm9va2luZ0ZvckV2ZW50TWFwKVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZmlsdGVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlciB9KTtcbiAgfVxuXG4gIG9uRXZlbnRJZENoYW5nZShldmVudElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV2ZW50SWQsIGZpbHRlcjogJ1BJQ0tVUCcgfSk7XG4gIH1cblxuICBvbkJvb2tpbmdDbGljayh1aWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ1VzZXJJZDogdWlkIH0pO1xuICB9XG5cbiAgZ2V0RXZlbnRQcmludFRpdGxlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50SWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFdnQgPSB0aGlzLnByb3BzLmV2ZW50c1t0aGlzLnN0YXRlLmV2ZW50SWRdO1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbY3VycmVudEV2dC50eXBlSWRdLm5hbWUgKyAnIC0gJyArIGN1cnJlbnRFdnQuZGF5ICsgJy8nICsgY3VycmVudEV2dC5tb250aCArICcvJyArIGN1cnJlbnRFdnQueWVhcjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0Qm9va2luZ1RpdGxlKHVpZCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJzW3VpZF07XG4gICAgcmV0dXJuIHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZTtcbiAgfVxuXG4gIGdldEJvb2tpbmdQaG9uZSh1aWQpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2Vyc1t1aWRdO1xuICAgIHJldHVybiB1c2VyLnBob25lUHJlZml4ICsgJy0nICsgdXNlci5waG9uZU51bWJlcjtcbiAgfVxuXG4gIGdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgdWlkKSB7XG4gICAgY29uc3Qgc3VidGl0bGVzID0gW107XG5cbiAgICBpZiAoYm9va2luZy5wYWlkU2VhdHMgPiAwKSB7XG4gICAgICBzdWJ0aXRsZXMucHVzaCgn157XoNeV15nXmdedOiAnICsgYm9va2luZy5wYWlkU2VhdHMpO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5leHRyYVNlYXRzID4gMCkge1xuICAgICAgc3VidGl0bGVzLnB1c2goJ9eX15Mg16TXotee15k6ICcgKyBib29raW5nLmV4dHJhU2VhdHMpO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5waWNrVXApIHtcbiAgICAgIHN1YnRpdGxlcy5wdXNoKCfXlNec15XXmjogJyArIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5kcm9wT2ZmKSB7XG4gICAgICBzdWJ0aXRsZXMucHVzaCgn15fXlteV16g6ICcgKyBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSk7XG4gICAgfVxuXG4gICAgaWYgKHVpZCkge1xuICAgICAgc3VidGl0bGVzLnB1c2goJ9eY15zXszogJyArIHRoaXMuZ2V0Qm9va2luZ1Bob25lKHVpZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJ0aXRsZXM7XG4gIH1cblxuICBnZXRCb29raW5nSW1hZ2UodWlkKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlcnNbdWlkXTtcbiAgICByZXR1cm4gdXNlci5waG90b1VSTCB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTg5LzE4OTk5MS5zdmcnO1xuICB9XG5cbiAgZ2V0UGlja1VwQ291bnQoKSB7XG4gICAgY29uc3QgdmlzaWJsZUJvb2tpbmdzID0gdGhpcy5nZXRWaXNpYmxlQm9va2luZ3MoKTtcbiAgICBjb25zdCB0bHZQaWNrVXBzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHYpXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgdGx2UGlja1Vwc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluUGlja1Vwc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluKVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpblBpY2tVcHNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW4pXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB0bHZQaWNrVXBzUGFpZCArIHRsdlBpY2tVcHNFeHRyYSArIG1vZGlpblBpY2tVcHNQYWlkICsgbW9kaWluUGlja1Vwc0V4dHJhO1xuICB9XG5cbiAgZ2V0RHJvcE9mZkNvdW50KCkge1xuICAgIGNvbnN0IHZpc2libGVCb29raW5ncyA9IHRoaXMuZ2V0VmlzaWJsZUJvb2tpbmdzKCk7XG4gICAgY29uc3QgdGx2RHJvcE9mZnNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHYpXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgdGx2RHJvcE9mZnNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2KVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5Ecm9wT2Zmc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5Ecm9wT2Zmc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW4pXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB0bHZEcm9wT2Zmc1BhaWQgKyB0bHZEcm9wT2Zmc0V4dHJhICsgbW9kaWluRHJvcE9mZnNQYWlkICsgbW9kaWluRHJvcE9mZnNFeHRyYTtcbiAgfVxuXG4gIHN0b3BFZGl0aW5nKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nVXNlcklkOiBudWxsIH0pO1xuICB9XG5cbiAgdXBkYXRlQm9va2luZyhib29raW5nKSB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVCb29raW5nKHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCwgdGhpcy5zdGF0ZS5ldmVudElkLCBib29raW5nKTtcbiAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gIH1cblxuICBjYW5jZWxCb29raW5nKCkge1xuICAgIHRoaXMucHJvcHMuY2FuY2VsQm9va2luZyh0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQsIHRoaXMuc3RhdGUuZXZlbnRJZCk7XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxuXG59XG5cbkJvb2tpbmdzUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGJvb2tpbmdzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGV2ZW50czogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1cGRhdGVCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJvb2tpbmdzUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vbGlzdEl0ZW0nLFxuICAgICcuLi9ib29raW5nRm9ybS9ib29raW5nRm9ybScsXG4gICAgJy4uLy4uL3V0aWxzL2NvbnN0YW50cycsXG4gICAgJy4vYm9va2luZ3NQYWdlLnNjc3MnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIGxpc3RJdGVtLCBCb29raW5nRm9ybSwgQ29uc3RhbnRzLCBib29raW5nc1BhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25DbGljazEodmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdQSUNLVVAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazIodmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdEUk9QT0ZGJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlMyh2aXNpYmxlQm9va2luZ3MsIGUpIHtcbiAgICAgICAgdGhpcy5vbkV2ZW50SWRDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDQodmlzaWJsZUJvb2tpbmdzLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV2ZW50SW5kZXhcbiAgICAgICAgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBldmVudC5kYXksICcvJywgZXZlbnQubW9udGgsICcvJywgZXZlbnQueWVhciwgJyAtICcsIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s1KHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICB0aGlzLm9uQm9va2luZ0NsaWNrKGJvb2tpbmdJbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmc2KHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChsaXN0SXRlbSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdrZXknOiAnYm9va2luZy0nICsgYm9va2luZ0luZGV4LFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCBib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRCb29raW5nSW1hZ2UoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazUuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNyh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkJvb2tpbmdDbGljayhib29raW5nSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nOCh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAna2V5JzogJ2Jvb2tpbmctJyArIGJvb2tpbmdJbmRleCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0Qm9va2luZ0ltYWdlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s3LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVNb2RpaW5QaWNrVXBUbHZQaWNrVXA5KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB2YXIgbW9kaWluUGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW47XG4gICAgICAgIHZhciB0bHZQaWNrVXAgPSB2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdwaWNrLXVwLWNvbnRhaW5lciByb3cgaGlkZS1mb3ItcHJpbnQnLFxuICAgICAgICAgICAgICAgICdrZXknOiAncGljay11cC1jb250YWluZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgfHwgXy5zaXplKG1vZGlpblBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNScsIHsgJ2tleSc6ICdwaWNrVXAtbGFiZWwnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eU15zXldeaOicpKSA6IG51bGwsXG4gICAgICAgICAgICBfLnNpemUodGx2UGlja1VwKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g2JywgeyAna2V5JzogJ3RsdlBpY2tVcCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcCh0bHZQaWNrVXAsIHJlcGVhdEJvb2tpbmc2LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCkpLFxuICAgICAgICAgICAgXy5zaXplKG1vZGlpblBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2tleSc6ICdtb2RpaW5QaWNrVXAnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee15XXk9eZ16LXmdefJykpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKG1vZGlpblBpY2tVcCwgcmVwZWF0Qm9va2luZzguYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwKSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxMCh2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICB0aGlzLm9uQm9va2luZ0NsaWNrKGJvb2tpbmdJbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcxMSh2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChsaXN0SXRlbSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdrZXknOiAnYm9va2luZy0nICsgYm9va2luZ0luZGV4LFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCBib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRCb29raW5nSW1hZ2UoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazEwLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMTIodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkJvb2tpbmdDbGljayhib29raW5nSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMTModmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAna2V5JzogJ2Jvb2tpbmctJyArIGJvb2tpbmdJbmRleCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0Qm9va2luZ0ltYWdlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2sxMi5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVNb2RpaW5Ecm9wT2ZmVGx2RHJvcE9mZjE0KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB2YXIgbW9kaWluRHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbjtcbiAgICAgICAgdmFyIHRsdkRyb3BPZmYgPSB2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHY7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZHJvcC1vZmYtY29udGFpbmVyIHJvdyBoaWRlLWZvci1wcmludCcsXG4gICAgICAgICAgICAgICAgJ2tleSc6ICdkcm9wLW9mZi1jb250YWluZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5zaXplKHRsdkRyb3BPZmYpICE9PSAwIHx8IF8uc2l6ZShtb2RpaW5Ecm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g1JywgeyAna2V5JzogJ2Ryb3Atb2ZmLWxhYmVsJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXl9eW15XXqDonKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5zaXplKHRsdkRyb3BPZmYpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDYnLCB7ICdrZXknOiAndGx2RHJvcE9mZicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcCh0bHZEcm9wT2ZmLCByZXBlYXRCb29raW5nMTEuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYpKSxcbiAgICAgICAgICAgIF8uc2l6ZShtb2RpaW5Ecm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g2JywgeyAna2V5JzogJ21vZGlpbkRyb3BPZmYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee15XXk9eZ16LXmdefJykpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKG1vZGlpbkRyb3BPZmYsIHJlcGVhdEJvb2tpbmcxMy5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZikpXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblN1Ym1pdDE1KHZpc2libGVCb29raW5ncywgYm9va2luZykge1xuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tpbmcoYm9va2luZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQm9va2luZ0NhbmNlbDE2KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB0aGlzLmNhbmNlbEJvb2tpbmcoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTE3KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcxOCh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogYm9va2luZ0luZGV4ICsgJy10bHYtcGlja3VwLXJvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1Bob25lKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLnBhaWRTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcuZXh0cmFTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMTkodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6IGJvb2tpbmdJbmRleCArICctbW9kaWluLXBpY2t1cC1yb3cnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdQaG9uZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5wYWlkU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLmV4dHJhU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVNb2RpaW5QaWNrVXBUbHZQaWNrVXAyMCh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdmFyIG1vZGlpblBpY2tVcCA9IHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluO1xuICAgICAgICB2YXIgdGx2UGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHY7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3BpY2tVcC10YWJsZSBzaG93LWZvci1wcmludCcsXG4gICAgICAgICAgICAna2V5JzogJ3BpY2tVcC10YWJsZSdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGFibGUnLCB7fSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGhlYWQnLCB7fSwgXy5zaXplKG1vZGlpblBpY2tVcCkgIT09IDAgfHwgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdwaWNrVXAtbGFiZWwnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywgeyAnY29sU3Bhbic6ICc2JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXlNec15XXmicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcgKCcsIHRoaXMuZ2V0UGlja1VwQ291bnQoKSwgJyknKSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7fSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9ep150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eY15zXpNeV158nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9ee16DXldeZ15nXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn15HXqtep15zXldedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqteX16DXqiDXotec15nXlCcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16rXl9eg16og15nXqNeZ15PXlCcpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICd0bHZQaWNrVXAnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge1xuICAgICAgICAgICAgICAgICdjb2xTcGFuJzogJzYnLFxuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAndGFibGUtc3ViJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2UGlja1VwLCByZXBlYXRCb29raW5nMTguYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwKSksXG4gICAgICAgICAgICBfLnNpemUobW9kaWluUGlja1VwKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ21vZGlpblBpY2tVcCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7XG4gICAgICAgICAgICAgICAgJ2NvbFNwYW4nOiAnNicsXG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICd0YWJsZS1zdWInXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteV15PXmdei15nXnycpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAobW9kaWluUGlja1VwLCByZXBlYXRCb29raW5nMTkuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwKSlcbiAgICAgICAgXSkpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzIxKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6IGJvb2tpbmdJbmRleCArICctdGx2LWRyb3BvZmYtcm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nUGhvbmUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcucGFpZFNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5leHRyYVNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcyMih2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiBib29raW5nSW5kZXggKyAnLW1vZGlpbi1kcm9wb2ZmLXJvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1Bob25lKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLnBhaWRTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcuZXh0cmFTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZU1vZGlpbkRyb3BPZmZUbHZEcm9wT2ZmMjModmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHZhciBtb2RpaW5Ecm9wT2ZmID0gdmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluO1xuICAgICAgICB2YXIgdGx2RHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZHJvcE9mZi10YWJsZSBzaG93LWZvci1wcmludCcsXG4gICAgICAgICAgICAna2V5JzogJ2Ryb3BPZmYtdGFibGUnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJywge30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJywge30sIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCB8fCBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdkcm9wT2ZmLWxhYmVsJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHsgJ2NvbFNwYW4nOiAnNicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15fXlteV16gnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuZ2V0RHJvcE9mZkNvdW50KCksICcpJykpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywge30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqdedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXmNec16TXldefJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXnteg15XXmdeZ150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eR16rXqdec15XXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16rXl9eg16og16LXnNeZ15QnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eq15fXoNeqINeZ16jXmdeT15QnKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ3RsdkRyb3BPZmYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge1xuICAgICAgICAgICAgICAgICdjb2xTcGFuJzogJzYnLFxuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAndGFibGUtc3ViJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2RHJvcE9mZiwgcmVwZWF0Qm9va2luZzIxLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmKSksXG4gICAgICAgICAgICBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdtb2RpaW5Ecm9wT2ZmJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHtcbiAgICAgICAgICAgICAgICAnY29sU3Bhbic6ICc2JyxcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3RhYmxlLXN1YidcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee15XXk9eZ16LXmdefJykpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5Ecm9wT2ZmLCByZXBlYXRCb29raW5nMjIuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYpKVxuICAgICAgICBdKSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZVZpc2libGVCb29raW5nczI0KCkge1xuICAgICAgICB2YXIgdmlzaWJsZUJvb2tpbmdzID0gdGhpcy5nZXRWaXNpYmxlQm9va2luZ3MoKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICfWv3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlIGJvb2tpbmdzLXBhZ2UnIH0sICF0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdrZXknOiAnbGlzdC12aWV3JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyIGhpZGUtZm9yLXByaW50JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXqNep15XXnteZ150g15zXlNeh16LXldeqJykpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZmlsdGVyaW5nIHJvdyBleHBhbmRlZCBjb2xsYXBzZSBoaWRlLWZvci1wcmludCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2NvbHVtbiBzbWFsbC0xMiBsYXJnZS02JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsIHsgJ2NsYXNzTmFtZSc6ICdtZW51JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1BJQ0tVUCcgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazEuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eU15zXldeaICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5nZXRQaWNrVXBDb3VudCgpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnRFJPUE9GRicgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazIuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eX15bXldeoICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5nZXREcm9wT2ZmQ291bnQoKSwgJyknKSkpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NlYXJjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmV2ZW50SWQsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2UzLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKHRoaXMucHJvcHMuZXZlbnRzLCByZXBlYXRFdmVudDQuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpKVxuICAgICAgICBdKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaDUnLCB7ICdjbGFzc05hbWUnOiAnc2hvdy1mb3ItcHJpbnQnIH0sIHRoaXMuZ2V0RXZlbnRQcmludFRpdGxlKCkpLCB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1BJQ0tVUCcgPyBzY29wZU1vZGlpblBpY2tVcFRsdlBpY2tVcDkuYXBwbHkodGhpcywgW3Zpc2libGVCb29raW5nc10pIDogbnVsbCwgdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdEUk9QT0ZGJyA/IHNjb3BlTW9kaWluRHJvcE9mZlRsdkRyb3BPZmYxNC5hcHBseSh0aGlzLCBbdmlzaWJsZUJvb2tpbmdzXSkgOiBudWxsLCB2aXNpYmxlQm9va2luZ3MubGVuZ3RoID09PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZpbHRlci1zdGF0dXMgaGlkZS1mb3ItcHJpbnQnLFxuICAgICAgICAgICAgJ2tleSc6ICduby1ldmVudHMnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWZyb3duLW8nLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXntem15jXoteo15nXnSwg15zXkCDXoNee16bXkNeVINeo16nXldee15XXqiDXnteq15DXmdee15XXqi4uLicpKSA6IG51bGwpIDogbnVsbCwgdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkID8gUmVhY3QuY3JlYXRlRWxlbWVudChCb29raW5nRm9ybSwge1xuICAgICAgICAgICAgJ2tleSc6ICdlZGl0LXVzZXInLFxuICAgICAgICAgICAgJ3RpdGxlJzogJ9ei16jXmdeb16og15TXqNep157XlCcsXG4gICAgICAgICAgICAnYm9va2luZyc6IHRoaXMucHJvcHMuYm9va2luZ3NbdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkXVt0aGlzLnN0YXRlLmV2ZW50SWRdLFxuICAgICAgICAgICAgJ29uU3VibWl0Jzogb25TdWJtaXQxNS5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncyksXG4gICAgICAgICAgICAnb25Cb29raW5nQ2FuY2VsJzogb25Cb29raW5nQ2FuY2VsMTYuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpLFxuICAgICAgICAgICAgJ3NlYXNvblRpY2tldHMnOiBfLmdldCh0aGlzLnByb3BzLnVzZXJzLCBbXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkLFxuICAgICAgICAgICAgICAgICdzZWFzb25UaWNrZXRzJ1xuICAgICAgICAgICAgXSkgfHwgMCxcbiAgICAgICAgICAgICdvbkNsb3NlJzogb25DbG9zZTE3LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKVxuICAgICAgICB9KSA6IG51bGwsIHRoaXMuc3RhdGUuZmlsdGVyID09PSAnUElDS1VQJyA/IHNjb3BlTW9kaWluUGlja1VwVGx2UGlja1VwMjAuYXBwbHkodGhpcywgW3Zpc2libGVCb29raW5nc10pIDogbnVsbCwgdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdEUk9QT0ZGJyA/IHNjb3BlTW9kaWluRHJvcE9mZlRsdkRyb3BPZmYyMy5hcHBseSh0aGlzLCBbdmlzaWJsZUJvb2tpbmdzXSkgOiBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlVmlzaWJsZUJvb2tpbmdzMjQuYXBwbHkodGhpcywgW10pO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UucnRcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9va2luZ3NQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9va2luZ3NQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ib29raW5nc1BhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvb2tpbmdzLXBhZ2UgaDUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiAjQ0ZEOERDO1xcbiAgY29sb3I6ICMzNzQ3NEY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLmJvb2tpbmdzLXBhZ2UgaDYge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5ib29raW5ncy1wYWdlIC50YWJsZS1zdWIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIyMjIyMjsgfVxcblxcbi5ib29raW5ncy1wYWdlIHRhYmxlIHRib2R5LCAuYm9va2luZ3MtcGFnZSB0YWJsZSB0Zm9vdCwgLmJvb2tpbmdzLXBhZ2UgdGFibGUgdGhlYWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Rpc3RyaWJ1dGlvblBhZ2UucnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2VuZFRlbXBsYXRlRW1haWwsIHNlbmRDdXN0b21FbWFpbCwgc2VuZFNNUyB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucyc7XG5cbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBnZXRNZW1iZXJzVXNlcnNPbmx5KHVzZXJzKSB7XG4gIHJldHVybiBfLnBpY2tCeSh1c2VycywgdXNlciA9PiB1c2VyLnNlYXNvblRpY2tldHMgJiYgdXNlci5zZWFzb25UaWNrZXRzID4gMCk7XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tlZFVzZXJzT25seSh1c2VycywgYm9va2luZ3MsIGV2ZW50SWQpIHtcbiAgcmV0dXJuIF8ucGlja0J5KHVzZXJzLCAodXNlciwgdWlkKSA9PiBfLmhhcyhib29raW5nc1t1aWRdLCBldmVudElkKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlY2lwaWVudHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZXZlbnRJZCkge1xuICBsZXQgcmVjaXBpZW50c1VzZXJzID0gXy5waWNrQnkodXNlcnMsIHVzZXIgPT4gdXNlci5zdWJzY3JpYmVNYWlsKTtcblxuICBzd2l0Y2ggKHJlY2lwaWVudHNUeXBlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuTUVNQkVSU19PTkxZLnZhbHVlOlxuICAgICAgcmVjaXBpZW50c1VzZXJzID0gZ2V0TWVtYmVyc1VzZXJzT25seShyZWNpcGllbnRzVXNlcnMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQk9PS0VEX1RPX0VWRU5ULnZhbHVlOlxuICAgICAgcmVjaXBpZW50c1VzZXJzID0gZ2V0Qm9va2VkVXNlcnNPbmx5KHJlY2lwaWVudHNVc2VycywgYm9va2luZ3MsIGV2ZW50SWQpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVjaXBpZW50c1VzZXJzO1xufVxuXG5mdW5jdGlvbiBnZXRVc2Vyc0VtYWlscyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBldmVudElkKSB7XG4gIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRSZWNpcGllbnRzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGV2ZW50SWQpO1xuICByZXR1cm4gXy5tYXAocmVjaXBpZW50cywgdXNlciA9PiB1c2VyLmVtYWlsKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcnNQaG9uZU51bWJlcnModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZXZlbnRJZCkge1xuICBjb25zdCByZWNpcGllbnRzID0gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBldmVudElkKTtcbiAgcmV0dXJuIF8ubWFwKHJlY2lwaWVudHMsIHVzZXIgPT4gdXNlci5waG9uZVByZWZpeCArIHVzZXIucGhvbmVOdW1iZXIpO1xufVxuXG5jb25zdCBnZXRFdmVudFN1YnN0aXR1dGlvbnMgPSBldmVudCA9PiAoe1xuICAnLURFUEFSVFVSRS0nOiBgJHtldmVudC5ob3VyfToke2V2ZW50Lm1pbnV0ZX1gLFxuICAnLURBVEUtJzogYCR7ZXZlbnQuZGF5fS8ke2V2ZW50Lm1vbnRofS8ke2V2ZW50LnllYXJ9YCxcbiAgJy1OQU1FLSc6IENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lXG59KTtcblxuY29uc3QgcHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCA9IGNvbnRlbnQgPT4gJzxwIGRpcj1cXCdydGxcXCc+JyArIGNvbnRlbnQucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICc8YnIvPicpICsgJzwvcD4nO1xuXG5jb25zdCBnZXRJbml0aWFsU3RhdGUgPSBldmVudHMgPT4gKHtcbiAgZGlzdHJpYnV0aW9uTWV0aG9kOiAnZW1haWwnLFxuICByZWNpcGllbnRzVHlwZTogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS52YWx1ZSxcbiAgZGlzdHJpYnV0aW9uVHlwZTogJ3RlbXBsYXRlJyxcbiAgZXZlbnRJZDogXy5sYXN0KF8ua2V5cyhldmVudHMpKSxcbiAgdGVtcGxhdGVJZDogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMuRVZFTlRfT1BFTl9GT1JfTUVNQkVSUy5pZCxcbiAgc3ViamVjdDogJycsXG4gIGNvbnRlbnQ6ICcnXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZXZlbnRzOiBzdGF0ZS5ldmVudHMsXG4gIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5ncyxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgc2VuZFRlbXBsYXRlRW1haWw6IChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSA9PiBkaXNwYXRjaChzZW5kVGVtcGxhdGVFbWFpbChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSksXG4gIHNlbmRDdXN0b21FbWFpbDogKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpID0+IGRpc3BhdGNoKHNlbmRDdXN0b21FbWFpbChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSksXG4gIHNlbmRTTVM6IChyZWNpcGllbnRzLCBtZXNzYWdlKSA9PiBkaXNwYXRjaChzZW5kU01TKHJlY2lwaWVudHMsIG1lc3NhZ2UpKSxcbn0pO1xuXG5jbGFzcyBEaXN0cmlidXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKHRoaXMuZ2V0T3BlbkV2ZW50cygpKTtcbiAgfVxuXG4gIGdldE9wZW5FdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ub21pdEJ5KHRoaXMucHJvcHMuZXZlbnRzLFxuICAgICAgZXZlbnQgPT4gZXZlbnQuc3RhdHVzICE9PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTLnZhbHVlICYmIGV2ZW50LnN0YXR1cyAhPT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfQUxMLnZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIG9uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzdHJpYnV0aW9uTWV0aG9kOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uUmVjaXBpZW50c1R5cGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZWNpcGllbnRzVHlwZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXN0cmlidXRpb25UeXBlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uVGVtcGxhdGVJZENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRlbXBsYXRlSWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25FdmVudENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV2ZW50SWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25TdWJqZWN0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3ViamVjdDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvbkNvbnRlbnRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGlzRGlzdHJpYnV0aW9uVHlwZVZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuRU1BSUw7XG4gIH1cblxuICBpc0V2ZW50c1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXN0cmlidXRpb25UeXBlVmlzaWJsZSgpICYmIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5URU1QTEFURTtcbiAgfVxuXG4gIGlzQ3VzdG9tVGl0bGVWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLkVNQUlMICYmXG4gICAgICB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuQ1VTVE9NO1xuICB9XG5cbiAgaXNDdXN0b21Db250ZW50VmlzaWJsZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5FTUFJTCAmJlxuICAgICAgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLkNVU1RPTVxuICAgICAgKSB8fCB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLlNNUztcbiAgfVxuXG4gIHNlbmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuRU1BSUwpIHtcbiAgICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRVc2Vyc0VtYWlscyh0aGlzLnByb3BzLnVzZXJzLCB0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLCB0aGlzLnByb3BzLmJvb2tpbmdzLCB0aGlzLnN0YXRlLmV2ZW50SWQpO1xuICAgICAgaWYgKF8uaXNFbXB0eShyZWNpcGllbnRzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLlRFTVBMQVRFKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBnZXRFdmVudFN1YnN0aXR1dGlvbnModGhpcy5wcm9wcy5ldmVudHNbdGhpcy5zdGF0ZS5ldmVudElkXSk7XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZFRlbXBsYXRlRW1haWwocmVjaXBpZW50cywgdGhpcy5zdGF0ZS50ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZEN1c3RvbUVtYWlsKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUuc3ViamVjdCwgcHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCh0aGlzLnN0YXRlLmNvbnRlbnQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjaXBpZW50cyA9IGdldFVzZXJzUGhvbmVOdW1iZXJzKHRoaXMucHJvcHMudXNlcnMsIHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsIHRoaXMucHJvcHMuYm9va2luZ3MsIHRoaXMuc3RhdGUuZXZlbnRJZCk7XG4gICAgICBpZiAoXy5pc0VtcHR5KHJlY2lwaWVudHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuc2VuZFNNUyhyZWNpcGllbnRzLCB0aGlzLnN0YXRlLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoZ2V0SW5pdGlhbFN0YXRlKHRoaXMuZ2V0T3BlbkV2ZW50cygpKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG5cbn1cblxuRGlzdHJpYnV0aW9uUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGV2ZW50czogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZW5kVGVtcGxhdGVFbWFpbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VuZEN1c3RvbUVtYWlsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZW5kU01TOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERpc3RyaWJ1dGlvblBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9kaXN0cmlidXRpb25QYWdlLnNjc3MnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIENvbnN0YW50cywgZGlzdHJpYnV0aW9uUGFnZUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBvbkNoYW5nZTEoZSkge1xuICAgICAgICB0aGlzLm9uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTIoZSkge1xuICAgICAgICB0aGlzLm9uUmVjaXBpZW50c1R5cGVDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlMyhlKSB7XG4gICAgICAgIHRoaXMub25EaXN0cmlidXRpb25UeXBlQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTQoZSkge1xuICAgICAgICB0aGlzLm9uVGVtcGxhdGVJZENoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0VGVtcGxhdGVDb25zdDUodGVtcGxhdGVDb25zdCwgdGVtcGxhdGVDb25zdEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ3RlbXBsYXRlLScgKyB0ZW1wbGF0ZUNvbnN0LmlkLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGVtcGxhdGVDb25zdC5pZFxuICAgICAgICB9LCB0ZW1wbGF0ZUNvbnN0Lm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTYoZSkge1xuICAgICAgICB0aGlzLm9uRXZlbnRDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50NyhldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV2ZW50SW5kZXhcbiAgICAgICAgfSwgQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTgoZSkge1xuICAgICAgICB0aGlzLm9uU3ViamVjdENoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2U5KGUpIHtcbiAgICAgICAgdGhpcy5vbkNvbnRlbnRDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxMCgpIHtcbiAgICAgICAgdGhpcy5zZW5kKCk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZGFzaGJvYXJkLXBhZ2UgZGlzdHJpYnV0aW9uLXBhZ2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXInIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlci10aXRsZScgfSwgJ9ep15zXmdeX16og157XmdeZ15zXmdedJykpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZGlzdHJpYnV0aW9uLWZvcm0gc21hbGwtMTEgc21hbGwtY2VudGVyZWQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqdec15cg15HXkNee16bXoteV16pcXG4gICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jywge1xuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTEuYmluZCh0aGlzKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5FTUFJTCB9LCAn15PXldeQ16gg15DXnNen15jXqNeV16DXmScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5TTVMgfSwgJ9eh157XoScpKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9ep15zXlyDXkNecXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTIuYmluZCh0aGlzKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5BTEwudmFsdWUgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcsIENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5BTEwubmFtZSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS52YWx1ZSB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQk9PS0VEX1RPX0VWRU5ULnZhbHVlIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQk9PS0VEX1RPX0VWRU5ULm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpKSkpLCB0aGlzLmlzRGlzdHJpYnV0aW9uVHlwZVZpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcsXG4gICAgICAgICAgICAna2V5JzogJ2Rpc3RyaWJ1dGlvblR5cGUnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXpteV16jXqiDXqdec15nXl9eUXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlMy5iaW5kKHRoaXMpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5URU1QTEFURSB9LCAn16rXkdeg15nXqicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuQ1VTVE9NIH0sICfXl9eV16TXqdeZJykpKSkgOiBudWxsLCB0aGlzLmlzRXZlbnRzVmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyxcbiAgICAgICAgICAgICdrZXknOiAndGVtcGxhdFBpY2tlcidcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eR15fXqCDXqteR16DXmdeqXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS50ZW1wbGF0ZUlkLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlNC5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMsIHJlcGVhdFRlbXBsYXRlQ29uc3Q1LmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkgOiBudWxsLCB0aGlzLmlzRXZlbnRzVmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnRJZCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eR15fXmdeo16og15DXmdeo15XXolxcbiAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZXZlbnRJZCxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTYuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKHRoaXMuZ2V0T3BlbkV2ZW50cygpLCByZXBlYXRFdmVudDcuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCBtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zJyB9LCB0aGlzLmlzQ3VzdG9tVGl0bGVWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2tleSc6ICdjdXN0b21TdWJqZWN0LWxhYmVsJyB9LCAn16DXldep15A6JykgOiBudWxsLCB0aGlzLmlzQ3VzdG9tVGl0bGVWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5zdWJqZWN0LFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2U4LmJpbmQodGhpcyksXG4gICAgICAgICAgICAna2V5JzogJ2N1c3RvbVN1YmplY3QnXG4gICAgICAgIH0pIDogbnVsbCwgdGhpcy5pc0N1c3RvbUNvbnRlbnRWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2tleSc6ICdjdXN0b21Db250ZW50LWxhYmVsJyB9LCAn16rXldeb1586JykgOiBudWxsLCB0aGlzLmlzQ3VzdG9tQ29udGVudFZpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge1xuICAgICAgICAgICAgJ25hbWUnOiB0cnVlLFxuICAgICAgICAgICAgJ2lkJzogdHJ1ZSxcbiAgICAgICAgICAgICdyb3dzJzogJzEwJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuY29udGVudCxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlOS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2tleSc6ICdjdXN0b21Db250ZW50J1xuICAgICAgICB9KSA6IG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnYnV0dG9uLWdyb3VwIHN0YWNrZWQgc21hbGwtY2VudGVyZWQgbGFyZ2UtNiBzbWFsbC04IG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2sxMC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdidXR0b24gc3VjY2VzcydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16nXnNeXJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLXBhcGVyLXBsYW5lJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSkpKSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpc3RyaWJ1dGlvbi1wYWdlIC5idXR0b24gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBQQVRIX01BUCA9IHtcbiAgRU1BSUxTOiB7XG4gICAgVEVNUExBVEVTOiAncGVuZGluZ0VtYWlscy90ZW1wbGF0ZXMnLFxuICAgIENVU1RPTTogJ3BlbmRpbmdFbWFpbHMvY3VzdG9tJ1xuICB9LFxuICBTTVM6ICdwZW5kaW5nU01TJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kVGVtcGxhdGVFbWFpbCA9IChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5FTUFJTFMuVEVNUExBVEVTfWAsICh7IHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZEN1c3RvbUVtYWlsID0gKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKGAke1BBVEhfTUFQLkVNQUlMUy5DVVNUT019YCwgKHsgcmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCB9KSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kU01TID0gKHRvLCBtZXNzYWdlKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5TTVN9YCwgKHsgdG8sIG1lc3NhZ2UgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Rpc3RyaWJ1dGlvbkFjdGlvbnMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgVXNlckZvcm0gPSByZXF1aXJlKCcuL3VzZXJGb3JtLmpzeCcpO1xuXG5jb25zdCBuYXZpZ2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvbmF2aWdhdGlvbkFjdGlvbnMnKTtcbmNvbnN0IG5hdmlnYXRpb25Db25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVpZDogc3RhdGUuYXV0aERhdGEudWlkXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmF2aWdhdGVUbzogcGFnZUlkID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8ocGFnZUlkKSlcbiAgICB9O1xufVxuXG5jbGFzcyBFZGl0b3JVc2VySW5mb1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIG9uRm9ybUNsb3NlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8obmF2aWdhdGlvbkNvbnN0YW50cy5QQUdFUy5IT01FLnZhbCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxVc2VyRm9ybSB1aWQ9e3RoaXMucHJvcHMudWlkfSBvbkNsb3NlPXt0aGlzLm9uRm9ybUNsb3NlfS8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkVkaXRvclVzZXJJbmZvUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmF2aWdhdGVUbzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVkaXRvclVzZXJJbmZvUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZWRpdFVzZXJJbmZvUGFnZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2l0ZSB7XFxuICBkaXJlY3Rpb246IHJ0bDsgfVxcbiAgLnNpdGUgLnNwbGl0LmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24gaSB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5mYWNlYm9vayB7XFxuICAgICAgYmFja2dyb3VuZDogIzNiNTk5ODsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmdvb2dsZSB7XFxuICAgICAgYmFja2dyb3VuZDogI2Q1MGYyNTsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmxlZnQtaWNvbiB7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmxlZnQtaWNvbiBzcGFuIHtcXG4gICAgICAgIGxlZnQ6IDA7IH1cXG4gIC5zaXRlIC5lcnJvci1tc2cge1xcbiAgICBjb2xvcjogI2Q1MGYyNTtcXG4gICAgcGFkZGluZzogMCAxNXB4IDE1cHg7IH1cXG4gICAgLnNpdGUgLmVycm9yLW1zZyBpIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxcbiAgLnNpdGUgbGFiZWwge1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAuc2l0ZSAubW9yZS1zcGFjZSB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7IH1cXG4gIC5zaXRlIC5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjRUY1MzUwO1xcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI0QzMkYyRjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGhlaWdodDogMy4zZW07XFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLnNpdGUgLmhlYWRlciAuaGVhZGVyLXRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgZmxleDogMTsgfVxcbiAgLnNpdGUgLmJhY2stYnRuIHtcXG4gICAgd2lkdGg6IDIwcHg7IH1cXG4gIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5saXN0LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAubGlzdC1pdGVtOm50aC1jaGlsZChvZGQpIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51LnNtYWxsLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51IGxpIGEge1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgY29sb3I6ICNEMzJGMkY7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUgbGkuYWN0aXZlIGEge1xcbiAgICAgIGJhY2tncm91bmQ6ICNEMzJGMkY7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUgbGkuYWN0aXZlOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAuc2VhcmNoIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOTM1ZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjkzNWVtOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5zZWFyY2gtaW5wdXQge1xcbiAgICAgIHRleHQtaW5kZW50OiAzMHB4OyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5zZWFyY2gtaWNvbiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTFweDtcXG4gICAgICByaWdodDogMjhweDtcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGNvbG9yOiAjY2FjYWNhOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0biB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzMkYyRjtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4yNXMgZWFzZS1vdXQsIGNvbG9yIC4yNXMgZWFzZS1vdXQ7XFxuICAgICAgcGFkZGluZzogLjg1ZW07XFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgd2lkdGg6IDMuNXJlbTtcXG4gICAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgYm90dG9tOiAxcmVtOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuLmJpZyB7XFxuICAgICAgICBsZWZ0OiAyNyU7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG4uc21hbGwge1xcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMi41cmVtO1xcbiAgICAgICAgbGVmdDogNSU7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG46aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI0Q1MDAwMDsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyLXN0YXR1cyB7XFxuICAgICAgY29sb3I6ICM0MjQyNDI7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyLXN0YXR1cyBpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7IH1cXG4gIC5zaXRlIC5idXR0b24uc3VjY2Vzc1tkaXNhYmxlZF06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjVhMzVhICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBlcnJvclJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9lcnJvclJlZHVjZXInO1xuaW1wb3J0IGxvYWRpbmdSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvbG9hZGluZ1JlZHVjZXInO1xuaW1wb3J0IHVzZXJzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3VzZXJzUmVkdWNlcic7XG5pbXBvcnQgZXZlbnRzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2V2ZW50c1JlZHVjZXInO1xuaW1wb3J0IGJvb2tpbmdzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2Jvb2tpbmdzUmVkdWNlcic7XG5pbXBvcnQgYXV0aERhdGFSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYXV0aERhdGFSZWR1Y2VyJztcbmltcG9ydCBuYXZpZ2F0aW9uUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL25hdmlnYXRpb25SZWR1Y2VyJztcblxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHtcbiAgY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGN1cnJlbnRQYWdlOiBuYXZpZ2F0aW9uUmVkdWNlcixcbiAgICBhdXRoRGF0YTogYXV0aERhdGFSZWR1Y2VyLFxuICAgIGVycm9yTXNnOiBlcnJvclJlZHVjZXIsXG4gICAgbG9hZGluZzogbG9hZGluZ1JlZHVjZXIsXG4gICAgdXNlcnM6IHVzZXJzUmVkdWNlcixcbiAgICBldmVudHM6IGV2ZW50c1JlZHVjZXIsXG4gICAgYm9va2luZ3M6IGJvb2tpbmdzUmVkdWNlclxuICB9KTtcblxuICBjb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKFxuICAgIHRodW5rXG4gICk7XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB1bmRlZmluZWQsIG1pZGRsZXdhcmUpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvbWFrZVN0b3JlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWR1eDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNUQVJUX0xPQURJTkcsIFJFUE9SVF9FUlJPUiB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXJyb3JSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVBPUlRfRVJST1I6XG4gICAgICByZXR1cm4gYWN0aW9uLm1lc3NhZ2U7XG4gICAgY2FzZSBTVEFSVF9MT0FESU5HOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU1RBUlRfTE9BRElORywgU1RPUF9MT0FESU5HIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkaW5nUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU1RBUlRfTE9BRElORzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgU1RPUF9MT0FESU5HOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvbG9hZGluZ1JlZHVjZXIuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBVU0VSU19SRUNFSVZFRCwgVVNFUl9SRU1PVkVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlcnNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVU0VSU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLnVzZXJzKTtcbiAgICBjYXNlIFVTRVJfUkVNT1ZFRDpcbiAgICAgIHJldHVybiBfLm9taXQoc3RhdGUsIGFjdGlvbi51aWQpO1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRVZFTlRTX1JFQ0VJVkVELCBFVkVOVF9SRU1PVkVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRVZFTlRTX1JFQ0VJVkVEOlxuICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24uZXZlbnRzKTtcbiAgICBjYXNlIEVWRU5UX1JFTU9WRUQ6XG4gICAgICByZXR1cm4gXy5vbWl0KHN0YXRlLCBhY3Rpb24uZXZlbnRJZCk7XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQk9PS0lOR1NfUkVDRUlWRUQsIEJPT0tJTkdfQ0FOQ0VMRUQsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudHNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBCT09LSU5HU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLmJvb2tpbmdzKTtcbiAgICBjYXNlIEJPT0tJTkdfQ0FOQ0VMRUQ6IHtcbiAgICAgIGNvbnN0IGNsb25lZEJvb2tpbmdzID0gXy5jbG9uZURlZXAoc3RhdGUpO1xuICAgICAgZGVsZXRlIGNsb25lZEJvb2tpbmdzW2FjdGlvbi51aWRdW2FjdGlvbi5ldmVudElkXTtcbiAgICAgIGlmIChfLnNpemUoY2xvbmVkQm9va2luZ3NbYWN0aW9uLnVpZF0pID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBjbG9uZWRCb29raW5nc1thY3Rpb24udWlkXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZWRCb29raW5ncztcbiAgICB9XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJpbXBvcnQgeyBTRVRfQVVUSF9EQVRBLCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoRGF0YVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9BVVRIX0RBVEE6XG4gICAgICByZXR1cm4geyB1aWQ6IGFjdGlvbi51aWQsIGVtYWlsOiBhY3Rpb24uZW1haWwsIHBob3RvVVJMOiBhY3Rpb24ucGhvdG9VUkwsIGlzQWRtaW46IGFjdGlvbi5pc0FkbWluIH07XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoRGF0YVJlZHVjZXIuanMiLCJpbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IE5BVklHQVRFX1RPLCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBDb25zdGFudHMuUEFHRVMuQVVUSC52YWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmlnYXRpb25SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBOQVZJR0FURV9UTzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGFnZTtcbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL25hdmlnYXRpb25SZWR1Y2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWR1eFRodW5rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVkdXhUaHVua1wiXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaXJlYmFzZVwiOiB7XG5cdFx0XCJhcGlLZXlcIjogXCJBSXphU3lERUlTVjJhTWllUGt1ZUN3bERSOENWZzdoX0JMYTNKb2NcIixcblx0XHRcImF1dGhEb21haW5cIjogXCJoYXBvZWxidXMtYjI1ZDQuZmlyZWJhc2VhcHAuY29tXCIsXG5cdFx0XCJkYXRhYmFzZVVSTFwiOiBcImh0dHBzOi8vaGFwb2VsYnVzLWIyNWQ0LmZpcmViYXNlaW8uY29tXCIsXG5cdFx0XCJzdG9yYWdlQnVja2V0XCI6IFwiaGFwb2VsYnVzLWIyNWQ0LmFwcHNwb3QuY29tXCJcblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvY29uZmlnLnByb2QuanNvblxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==