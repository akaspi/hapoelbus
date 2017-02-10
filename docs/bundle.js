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
	
	var _config = __webpack_require__(78);
	
	var config = _interopRequireWildcard(_config);
	
	var _clientDB = __webpack_require__(21);
	
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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	
	var makeStore = __webpack_require__(5);
	
	var App = __webpack_require__(18);
	
	var Root = function (_React$Component) {
	    _inherits(Root, _React$Component);
	
	    function Root() {
	        _classCallCheck(this, Root);
	
	        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	    }
	
	    _createClass(Root, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                ReactRedux.Provider,
	                { store: makeStore() },
	                React.createElement(App, null)
	            );
	        }
	    }]);
	
	    return Root;
	}(React.Component);
	
	module.exports = Root;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "root.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactRedux;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _redux = __webpack_require__(6);
	
	var _errorReducer = __webpack_require__(7);
	
	var _errorReducer2 = _interopRequireDefault(_errorReducer);
	
	var _loadingReducer = __webpack_require__(9);
	
	var _loadingReducer2 = _interopRequireDefault(_loadingReducer);
	
	var _usersReducer = __webpack_require__(10);
	
	var _usersReducer2 = _interopRequireDefault(_usersReducer);
	
	var _eventsReducer = __webpack_require__(12);
	
	var _eventsReducer2 = _interopRequireDefault(_eventsReducer);
	
	var _bookingsReducer = __webpack_require__(13);
	
	var _bookingsReducer2 = _interopRequireDefault(_bookingsReducer);
	
	var _authDataReducer = __webpack_require__(14);
	
	var _authDataReducer2 = _interopRequireDefault(_authDataReducer);
	
	var _reduxThunk = __webpack_require__(15);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routingReducer = __webpack_require__(16);
	
	module.exports = function () {
	  var reducers = (0, _redux.combineReducers)({
	    routing: routingReducer,
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
/* 6 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = errorReducer;
	
	var _actionTypes = __webpack_require__(8);
	
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadingReducer;
	
	var _actionTypes = __webpack_require__(8);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = usersReducer;
	
	var _lodash = __webpack_require__(11);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(8);
	
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
/* 11 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = eventsReducer;
	
	var _lodash = __webpack_require__(11);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(8);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = eventsReducer;
	
	var _lodash = __webpack_require__(11);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(8);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = authDataReducer;
	
	var _actionTypes = __webpack_require__(8);
	
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
/* 15 */
/***/ function(module, exports) {

	module.exports = ReduxThunk;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var Constants = __webpack_require__(17);
	
	function createRoutingData(pageId, params) {
	  return { pageId: pageId, params: params || {} };
	}
	
	var initialState = {
	  current: createRoutingData(Constants.ROUTING.PAGES.AUTH, {}),
	  history: [createRoutingData(Constants.ROUTING.PAGES.AUTH, {})]
	};
	
	module.exports = function (state, action) {
	  state = state || initialState;
	  action = action || {};
	
	  switch (action.type) {
	    case 'NAVIGATE_TO':
	      {
	        var routingData = createRoutingData(action.pageId, action.params);
	
	        return {
	          current: routingData,
	          history: state.history.concat([routingData])
	        };
	      }
	    case 'NAVIGATE_BACK':
	      {
	        if (state.history.length > 1) {
	          var historyWithoutLast = state.history.slice(0, -1);
	          return {
	            current: historyWithoutLast.slice(-1)[0],
	            history: historyWithoutLast
	          };
	        }
	        break;
	      }
	    case 'REPLACE_ROUTING':
	      {
	        var _historyWithoutLast = state.history.slice(0, -1);
	        var current = createRoutingData(action.pageId || state.current.pageId, action.params || state.current.params);
	        return {
	          current: current,
	          history: _historyWithoutLast.concat([current])
	        };
	      }
	    case 'RESET_ROUTING':
	      {
	        var _routingData = createRoutingData(action.pageId, action.params);
	
	        return {
	          current: _routingData,
	          history: [_routingData]
	        };
	      }
	  }
	
	  return state;
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "routingReducer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  ROUTING: {
	    PAGES: {
	      HOME: 'home',
	      AUTH: 'auth',
	      USERS: 'users',
	      GAMES: 'games',
	      BOOKINGS: 'bookings',
	      DISTRIBUTION: 'distribution',
	      EDIT_USER_INFO: 'editUserInfo',
	      UPDATE_BOOKING: 'updateBooking',
	      UPDATE_GAME: 'updateGame'
	    }
	  },
	  GAME: {
	    STATUS: {
	      CLOSED: 'closed',
	      OPEN_FOR_MEMBERS: 'openForMembers',
	      OPEN_FOR_ALL: 'openForAll',
	      FULLY_BOOKED: 'fullyBooked'
	    }
	  },
	  USER: {
	    MAX_SEASON_TICKETS: 7,
	    PHONE_PREFIXES: ['050', '052', '053', '054', '055', '057', '058']
	  },
	  STATIONS: {
	    TEL_AVIV: 'tlv',
	    MODIIN: 'modiin'
	  },
	  DATE_AND_TIME: {
	    days: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
	    months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	    years: ['16', '17'],
	    hours: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
	    minutes: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
	  },
	  DISTRIBUTION: {
	    DISTRIBUTION_METHODS: {
	      EMAIL: 'email',
	      SMS: 'sms'
	    },
	    RECIPIENTS_TYPES: {
	      ALL: 'all',
	      MEMBERS_ONLY: 'membersOnly',
	      BOOKED_TO_EVENT: 'bookedToEvent'
	    },
	    DISTRIBUTION_TYPES: {
	      TEMPLATE: 'template',
	      CUSTOM: 'custom'
	    },
	    TEMPLATES: {
	      EVENT_OPEN_FOR_MEMBERS: '4fab6b92-bf61-48f1-b13b-bc702ed78695',
	      EVENT_OPEN_FOR_ALL: 'dbe3e0e4-bb0e-41ad-bf12-5be64a30f3b7',
	      CHANGE_EVENT_DETAILS: '170fcd4f-df2e-44dd-b760-693d04fdd07c'
	    }
	  },
	  TEAMS: {
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
	    },
	    'gran-canaria': {
	      logo: 'https://upload.wikimedia.org/wikipedia/en/2/2a/CB_Gran_Canaria_2014.png',
	      label: 'גראן קנריה'
	    }
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "constants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactReudx = __webpack_require__(4);
	
	var authActions = __webpack_require__(19);
	var Constants = __webpack_require__(17);
	
	var Spinner = __webpack_require__(31);
	var TopBar = __webpack_require__(38);
	var AuthPage = __webpack_require__(41);
	var HomePage = __webpack_require__(44);
	var UsersPage = __webpack_require__(50);
	var GamesPage = __webpack_require__(57);
	var BookingsPage = __webpack_require__(60);
	var DistributionPage = __webpack_require__(63);
	var EditUserInfoPage = __webpack_require__(67);
	var UpdateBookingPage = __webpack_require__(72);
	var UpdateGamePage = __webpack_require__(73);
	
	__webpack_require__(76);
	
	function mapStateToProps(state) {
	    return {
	        authData: state.authData,
	        currentPageId: state.routing.current.pageId
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
	        case Constants.ROUTING.PAGES.HOME:
	            return React.createElement(HomePage, { key: 'home-page' });
	        case Constants.ROUTING.PAGES.USERS:
	            return React.createElement(UsersPage, { key: 'users-page' });
	        case Constants.ROUTING.PAGES.GAMES:
	            return React.createElement(GamesPage, { key: 'games-page' });
	        case Constants.ROUTING.PAGES.BOOKINGS:
	            return React.createElement(BookingsPage, { key: 'bookings-page' });
	        case Constants.ROUTING.PAGES.DISTRIBUTION:
	            return React.createElement(DistributionPage, { key: 'distribution-page' });
	        case Constants.ROUTING.PAGES.EDIT_USER_INFO:
	            return React.createElement(EditUserInfoPage, { key: 'editUserInfo-page' });
	        case Constants.ROUTING.PAGES.UPDATE_BOOKING:
	            return React.createElement(UpdateBookingPage, { key: 'updateBooking-page' });
	        case Constants.ROUTING.PAGES.UPDATE_GAME:
	            return React.createElement(UpdateGamePage, { key: 'updateGame-page' });
	    }
	}
	
	function getPageToRender(authData, currentPageId) {
	    if (!authData) {
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
	                getPageToRender(this.props.authData, this.props.currentPageId)
	            );
	        }
	    }]);
	
	    return App;
	}(React.Component);
	
	App.propTypes = {
	    authData: React.PropTypes.object,
	    currentPageId: React.PropTypes.string.isRequired,
	    fetchAuthData: React.PropTypes.func.isRequired
	};
	
	module.exports = ReactReudx.connect(mapStateToProps, mapDispatchToProps)(App);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchAuthData = exports.sendPasswordResetEmail = exports.createUserWithEmailAndPassword = exports.loginWithEmailAndPassword = exports.loginWithGoogle = exports.loginWithFacebook = exports.signOut = exports.userSignedOut = exports.setAuthData = exports.AUTH_ERROR_CODES_MAP = undefined;
	
	var _lodash = __webpack_require__(11);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(8);
	
	var _bluebird = __webpack_require__(20);
	
	var _clientDB = __webpack_require__(21);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _userActions = __webpack_require__(23);
	
	var userActions = _interopRequireWildcard(_userActions);
	
	var _eventActions = __webpack_require__(27);
	
	var eventActions = _interopRequireWildcard(_eventActions);
	
	var _bookingActions = __webpack_require__(28);
	
	var bookingActions = _interopRequireWildcard(_bookingActions);
	
	var _loadingActions = __webpack_require__(24);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(25);
	
	var errorActions = _interopRequireWildcard(_errorActions);
	
	var _routingActions = __webpack_require__(29);
	
	var navigationActions = _interopRequireWildcard(_routingActions);
	
	var _updatePhotoUrlFixer = __webpack_require__(30);
	
	var _updatePhotoUrlFixer2 = _interopRequireDefault(_updatePhotoUrlFixer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Constants = __webpack_require__(17);
	var Translations = __webpack_require__(26);
	
	var AUTH_ERROR_CODES_MAP = exports.AUTH_ERROR_CODES_MAP = {
	  'auth/invalid-email': Translations.ERROR_MESSAGES.AUTH.INVALID_EMAIL,
	  'auth/weak-password': Translations.ERROR_MESSAGES.AUTH.WEAK_PASSWORD,
	  'auth/email-already-in-use': Translations.ERROR_MESSAGES.AUTH.EMAIL_IN_USE,
	  'auth/wrong-password': Translations.ERROR_MESSAGES.AUTH.WRONG_PASSWORD,
	  'auth/account-exists-with-different-credential': Translations.ERROR_MESSAGES.AUTH.EMAIL_IN_USE,
	  'auth/user-not-found': Translations.ERROR_MESSAGES.AUTH.USER_NOT_FOUND
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
	      return dispatch(navigationActions.reset(Constants.ROUTING.PAGES.AUTH));
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
	      return dispatch(navigationActions.reset(Constants.ROUTING.PAGES.HOME));
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
	      return dispatch(navigationActions.reset(Constants.ROUTING.PAGES.EDIT_USER_INFO));
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
	            dispatch(navigationActions.reset(Constants.ROUTING.PAGES.EDIT_USER_INFO, { uid: user.uid }));
	          } else {
	            dispatch(navigationActions.reset(Constants.ROUTING.PAGES.HOME));
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
/* 20 */
/***/ function(module, exports) {

	module.exports = Promise;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLoggedInUser = exports.signOut = exports.createUserWithEmailAndPassword = exports.sendPasswordResetEmail = exports.loginWithEmailAndPassword = exports.loginWithFacebook = exports.loginWithGoogle = exports.remove = exports.update = exports.push = exports.read = exports.setIn = exports.initialize = undefined;
	
	var _firebase = __webpack_require__(22);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	var _bluebird = __webpack_require__(20);
	
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
/* 22 */
/***/ function(module, exports) {

	module.exports = firebase;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeUser = exports.updateUser = exports.fetchUsers = exports.usersReceived = exports.usersRemoved = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _lodash = __webpack_require__(11);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(8);
	
	var _bluebird = __webpack_require__(20);
	
	var _clientDB = __webpack_require__(21);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(24);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(25);
	
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.stopLoading = exports.startLoading = undefined;
	
	var _actionTypes = __webpack_require__(8);
	
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reportError = undefined;
	
	var _actionTypes = __webpack_require__(8);
	
	var Translations = __webpack_require__(26);
	
	var reportError = exports.reportError = function reportError() {
	  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Translations.ERROR_MESSAGES.GENERAL;
	  return {
	    type: _actionTypes.REPORT_ERROR,
	    message: message
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "errorActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _PAGES, _STATIONS, _STATUS;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Constants = __webpack_require__(17);
	
	module.exports = {
	  ROUTING: {
	    PAGES: (_PAGES = {}, _defineProperty(_PAGES, Constants.ROUTING.PAGES.HOME, 'דף הבית'), _defineProperty(_PAGES, Constants.ROUTING.PAGES.USERS, 'משתמשים'), _defineProperty(_PAGES, Constants.ROUTING.PAGES.GAMES, 'משחקים'), _defineProperty(_PAGES, Constants.ROUTING.PAGES.BOOKINGS, 'רשומים להסעות'), _defineProperty(_PAGES, Constants.ROUTING.PAGES.DISTRIBUTION, 'רשימת תפוצה'), _PAGES)
	  },
	  STATIONS: (_STATIONS = {}, _defineProperty(_STATIONS, Constants.STATIONS.TEL_AVIV, 'תל אביב'), _defineProperty(_STATIONS, Constants.STATIONS.MODIIN, 'צומת שילת'), _STATIONS),
	  GAME: {
	    STATUS: (_STATUS = {}, _defineProperty(_STATUS, Constants.GAME.STATUS.CLOSED, 'ההרשמה סגורה'), _defineProperty(_STATUS, Constants.GAME.STATUS.OPEN_FOR_MEMBERS, 'ההרשמה פתוחה למנויים'), _defineProperty(_STATUS, Constants.GAME.STATUS.OPEN_FOR_ALL, 'ההרשמה פתוחה לכולם'), _defineProperty(_STATUS, Constants.GAME.STATUS.FULLY_BOOKED, 'ההסעה מלאה'), _STATUS)
	  },
	  GAME_ITEM: {
	    BOOK: 'הרשם',
	    EDIT_BOOKING: 'ערוך',
	    CANCEL_BOOKING: 'בטל הרשמה'
	  },
	  USERS_PAGE: {
	    TITLE: 'משתמשים',
	    NO_USERS_FOUND: 'לא נמצאו רשומות',
	    FILTER: {
	      SEARCH: 'חיפוש',
	      TABS: {
	        ALL: 'כולם',
	        MEMBERS: 'מנויים',
	        REQUESTS: 'בקשה למנוי',
	        NON_MEMBERS: 'חד פעמיים'
	      }
	    }
	  },
	  AUTH_PAGE: {
	    FIELDS: {
	      EMAIL: 'דואר אלקטרוני',
	      PASSWORD: 'סיסמא',
	      PASSWORD_AGAIN: 'שוב סיסמא'
	    },
	    SUBMIT_BTN: {
	      LOGIN: 'התחבר',
	      REGISTER: 'הירשם',
	      FORGOT_PASSWORD: 'שלח לינק לאיפוס סיסמא'
	    },
	    LINKS: {
	      GO_TO_LOGIN: 'יש לך חשבון?',
	      GO_TO_REGISTER: 'אין לך חשבון?',
	      GO_TO_FORGOT_PASSWORD: 'שכחת סיסמא?'
	    },
	    ERRORS: {
	      NOT_SAME_PASSWORD: 'סיסמאות צריכות להיות זהות'
	    }
	  },
	  HOME_PAGE: {
	    NO_OPEN_GAMES: 'אין הסעות פתוחות',
	    OPEN_GAMES: 'הסעות פתוחות',
	    CLOSED_GAMES: 'ההסעות הבאות'
	  },
	  UPDATE_USER_INFO_PAGE: {
	    TITLE: 'פרטים אישיים',
	    FIRST_NAME: 'שם',
	    LAST_NAME: 'שם משפחה',
	    EMAIL: 'דואר אלקטרוני',
	    PHONE_PREFIX: 'קידומת',
	    PHONE_NUMBER: 'טלפון נייד',
	    FAVORITE_PICKUP_STATION: 'תחנת עליה מועדפת',
	    REQUEST_FOR_MEMBERSHIP: 'מעוניין במנוי?',
	    DISTRIBUTION: {
	      EMAIL: 'תפוצת אימייל',
	      SMS: 'תפוצת SMS'
	    },
	    TOGGLE: {
	      YES: 'כן',
	      NO: 'לא'
	    }
	  },
	  UPDATE_BOOKING_PAGE: {
	    TITLE: 'עריכת הרשמה',
	    PAID_SEATS: 'כמות מנויים',
	    EXTRA_SEATS: 'נוסעים בתשלום',
	    PICKUP_TOGGLE: 'הלוך',
	    DROPOFF_TOGGLE: 'חזור',
	    PICKUP_STATION_DROPDOWN_DEFAULT: 'בחר'
	  },
	  GAMES_PAGE: {
	    TITLE: 'משחקים',
	    TABS: {
	      ALL: 'כולם',
	      OPEN: 'פתוחים',
	      CLOSED: 'סגורים'
	    },
	    NO_GAMES_LABEL: 'לא נמצאו משחקים'
	  },
	  BOOKINGS_PAGE: {
	    TITLE: 'רשומים להסעה',
	    TABS: {
	      PICKUP: 'הלוך',
	      DROPOFF: 'חזור'
	    }
	  },
	  UPDATE_GAME_PAGE: {
	    TITLE: 'הרשמה להסעה',
	    GAME_LABEL: 'שם המשחק',
	    GAME_PLACEHOLDER: 'בחר משחק',
	    DATE_LABEL: 'תאריך',
	    TIME: 'שעה',
	    GAME_STATUS: 'סטטוס הסעה'
	  },
	  DISTRIBUTION_PAGE: {
	    TITLE: 'רשימת תפוצה',
	    DISTRIBUTION_METHOD: {
	      TITLE: 'שליחה באמצעות',
	      EMAIL: 'אימייל',
	      SMS: 'סמס'
	    },
	    RECIPIENTS_TYPES: {
	      TITLE: 'שלח אל',
	      ALL: 'כולם',
	      MEMBERS_ONLY: 'מנויים בלבד',
	      BOOKED_TO_EVENT: 'רשומים להסעה'
	    },
	    DISTRIBUTION_TYPES: {
	      TITLE: 'צורת שליחה',
	      TEMPLATE: 'תבנית',
	      CUSTOM: 'טקסט חופשי'
	    },
	    TEMPLATES: {
	      TITLE: 'בחירת תבנית',
	      EVENT_OPEN_FOR_MEMBERS: 'פתיחת הרשמה למנויים',
	      EVENT_OPEN_FOR_ALL: 'פתיחת הרשמה לכולם',
	      CHANGE_EVENT_DETAILS: 'שינוי בפרטי ההסעה'
	    },
	    GAMES: {
	      TITLE: 'בחירת משחק'
	    },
	    CUSTOM: {
	      TITLE: {
	        TITLE: 'נושא'
	      },
	      CONTENT: {
	        TITLE: ''
	      }
	    }
	  },
	  FORM_FRAME: {
	    SUBMIT: 'שמור',
	    REMOVE: 'מחק'
	  },
	  ERROR_MESSAGES: {
	    GENERAL: 'שגיאת מערכת',
	    AUTH: {
	      INVALID_EMAIL: 'אימייל לא תקין',
	      WEAK_PASSWORD: 'הסיסמא צריכה להכיל לפחות 6 תווים',
	      EMAIL_IN_USE: 'אימייל בשימוש',
	      WRONG_PASSWORD: 'סיסמא לא נכונה',
	      NOT_SAME_PASSWORD: 'הסיסמאות צריכות להיות זהות',
	      USER_NOT_FOUND: 'כתובת האימייל לא נמצאה'
	    }
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "translations.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeEvent = exports.updateEvent = exports.createEvent = exports.fetchEvents = exports.eventsReceived = exports.eventRemoved = undefined;
	
	var _lodash = __webpack_require__(11);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(8);
	
	var _clientDB = __webpack_require__(21);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(24);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(25);
	
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cancelBooking = exports.updateBooking = exports.fetchBookings = exports.bookingsCanceled = exports.bookingsReceived = undefined;
	
	var _lodash = __webpack_require__(11);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(8);
	
	var _clientDB = __webpack_require__(21);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(24);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(25);
	
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	function navigateTo(pageId, params) {
	  params = params || {};
	
	  return {
	    type: 'NAVIGATE_TO',
	    pageId: pageId,
	    params: params
	  };
	}
	
	function navigateBack() {
	  return {
	    type: 'NAVIGATE_BACK'
	  };
	}
	
	function reset(pageId, params) {
	  params = params || {};
	
	  return {
	    type: 'RESET_ROUTING',
	    pageId: pageId,
	    params: params
	  };
	}
	
	function replace(pageId, params) {
	  return {
	    type: 'REPLACE_ROUTING',
	    pageId: pageId,
	    params: params
	  };
	}
	
	module.exports = { navigateTo: navigateTo, navigateBack: navigateBack, replace: replace, reset: reset };
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "routingActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 30 */
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
	
	var _userActions = __webpack_require__(23);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "updatePhotoUrlFixer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	var classNames = __webpack_require__(32);
	
	__webpack_require__(33);
	
	var Logo = __webpack_require__(37);
	
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".spinner-container .overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #fff;\n  z-index: 1000; }\n  .spinner-container .overlay .spinner {\n    margin: 150px auto 0;\n    width: 110px;\n    text-align: center; }\n    .spinner-container .overlay .spinner .logo {\n      margin-bottom: 10px;\n      opacity: 0.7; }\n    .spinner-container .overlay .spinner > div {\n      width: 12px;\n      height: 12px;\n      margin: 0 2px;\n      background-color: #333;\n      opacity: 0.8;\n      border-radius: 100%;\n      display: inline-block;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n    .spinner-container .overlay .spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s; }\n    .spinner-container .overlay .spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);
	
	// exports


/***/ },
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	var classNames = __webpack_require__(32);
	
	var Constants = __webpack_require__(17);
	var Translations = __webpack_require__(26);
	
	var routingActions = __webpack_require__(29);
	var authActions = __webpack_require__(19);
	
	var menuPagesIds = [Constants.ROUTING.PAGES.HOME, Constants.ROUTING.PAGES.USERS, Constants.ROUTING.PAGES.GAMES, Constants.ROUTING.PAGES.BOOKINGS, Constants.ROUTING.PAGES.DISTRIBUTION];
	
	__webpack_require__(39);
	
	function mapStateToProps(state) {
	    var authData = state.authData;
	    var users = state.users;
	
	    return {
	        uid: authData.uid,
	        photoURL: authData.photoURL || 'http://image.flaticon.com/icons/svg/163/163804.svg',
	        isAdmin: authData.isAdmin,
	        currentPageId: state.routing.current.pageId,
	        currentUser: authData && users[authData.uid]
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        navigateTo: function navigateTo(pageId, params) {
	            return dispatch(routingActions.navigateTo(pageId, params));
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
	
	function createHeader(uid, currentUser, photoURL, navigateTo, signOut) {
	    return React.createElement(
	        'div',
	        { className: 'medium-5 small-10 column user-info' },
	        React.createElement('img', { className: 'avatar', src: photoURL, onClick: navigateTo.bind(this, Constants.ROUTING.PAGES.EDIT_USER_INFO, { uid: uid }) }),
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
	
	function createMenu(currentPageId, navigateTo, isAdmin, isMenuVisible, toggleMenuVisibility) {
	
	    function createDesktopMenuItem(pageId) {
	        var itemClasses = classNames({
	            active: currentPageId === pageId,
	            button: true,
	            small: true
	        });
	
	        return React.createElement(
	            'a',
	            { className: itemClasses, onClick: navigateTo.bind(this, pageId), key: 'page-' + pageId },
	            Translations.ROUTING.PAGES[pageId]
	        );
	    }
	
	    function createMobileMenuItem(pageId) {
	        var itemClasses = classNames({
	            active: currentPageId === pageId,
	            button: true
	        });
	
	        var onMobileMenuClicked = function onMobileMenuClicked() {
	            navigateTo(pageId);
	            toggleMenuVisibility();
	        };
	
	        return React.createElement(
	            'a',
	            { className: itemClasses, onClick: onMobileMenuClicked, key: 'page-' + pageId },
	            Translations.ROUTING.PAGES[pageId]
	        );
	    }
	
	    function createDesktopMenu() {
	        return React.createElement(
	            'div',
	            { className: 'menu button-group hide-for-small-only', key: 'admin-menu' },
	            _.map(menuPagesIds, createDesktopMenuItem)
	        );
	    }
	
	    function createMobileMenu() {
	        return React.createElement(
	            'div',
	            { className: 'menu button-group stacked-for-small show-for-small-only', key: 'admin-menu-mobile' },
	            _.map(menuPagesIds, createMobileMenuItem)
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
	                createHeader(this.props.uid, this.props.currentUser, this.props.photoURL, this.props.navigateTo, this.props.signOut),
	                this.props.isAdmin ? createSmallMenuForMobile(this.toggleMenuVisibility.bind(this)) : null,
	                createMenu(this.props.currentPageId, this.props.navigateTo, this.props.isAdmin, this.state.isMenuVisible, this.toggleMenuVisibility.bind(this))
	            );
	        }
	    }]);
	
	    return TopBar;
	}(React.Component);
	
	TopBar.propTypes = {
	    uid: React.PropTypes.string.isRequired,
	    photoURL: React.PropTypes.string,
	    isAdmin: React.PropTypes.bool,
	    currentPageId: React.PropTypes.string.isRequired,
	    navigateTo: React.PropTypes.func,
	    signOut: React.PropTypes.func
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TopBar);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "topBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".top-bar {\n  background: #222222;\n  color: #FFFFFF; }\n  .top-bar span {\n    cursor: default; }\n  .top-bar .user-info {\n    font-size: 0.85rem; }\n  .top-bar .small-menu {\n    background: #D50000;\n    margin-top: 0.5em;\n    margin-left: 0.5em; }\n  .top-bar .menu {\n    margin-top: 0.6rem; }\n    .top-bar .menu .button {\n      color: #FFFFFF;\n      background: none; }\n      .top-bar .menu .button.small {\n        font-size: 0.85rem; }\n      .top-bar .menu .button:hover {\n        color: #D32F2F; }\n      .top-bar .menu .button.active {\n        background: #D32F2F;\n        font-weight: bold; }\n        .top-bar .menu .button.active:hover {\n          color: #FFFFFF; }\n  .top-bar .avatar {\n    width: 2.5rem;\n    background: #fff;\n    border-radius: 50%;\n    margin: 10px;\n    cursor: pointer; }\n  .top-bar .disconnect {\n    color: #F44336; }\n    .top-bar .disconnect:hover {\n      text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	
	var Translations = __webpack_require__(26);
	
	var authActions = __webpack_require__(19);
	var errorActions = __webpack_require__(25);
	
	var Logo = __webpack_require__(37);
	
	__webpack_require__(42);
	
	function mapStateToProps(state) {
	    return {
	        errorMsg: state.errorMsg
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        loginWithFacebook: function loginWithFacebook() {
	            return dispatch(authActions.loginWithFacebook());
	        },
	        loginWithGoogle: function loginWithGoogle() {
	            return dispatch(authActions.loginWithGoogle());
	        },
	        loginWithEmail: function loginWithEmail(email, password) {
	            return dispatch(authActions.loginWithEmailAndPassword(email, password));
	        },
	        signUpWithUserAndPassword: function signUpWithUserAndPassword(email, password) {
	            return dispatch(authActions.createUserWithEmailAndPassword(email, password));
	        },
	        sendPasswordResetEmail: function sendPasswordResetEmail(email) {
	            return dispatch(authActions.sendPasswordResetEmail(email));
	        },
	        reportError: function reportError(message) {
	            return dispatch(errorActions.reportError(message));
	        }
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
	    return React.createElement(
	        'div',
	        { className: 'medium-centered logo' },
	        React.createElement(Logo, { width: 120, height: 120 })
	    );
	}
	
	function createSocialButtonsSection(loginWithFacebook, loginWithGoogle) {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(
	            'button',
	            { onClick: loginWithFacebook, className: 'facebook button split' },
	            React.createElement(
	                'span',
	                null,
	                'Facebook'
	            ),
	            React.createElement('i', { className: 'fa fa-facebook-official' })
	        ),
	        React.createElement(
	            'button',
	            { onClick: loginWithGoogle, className: 'google button split' },
	            React.createElement(
	                'span',
	                null,
	                'Google'
	            ),
	            React.createElement('i', { className: 'fa fa-google', 'aria-hidden': 'true' })
	        ),
	        React.createElement('hr', { className: 'hr' })
	    );
	}
	
	function createErrorSection(message) {
	    return React.createElement(
	        'div',
	        { className: 'error-msg', key: 'homePage-error-message' },
	        React.createElement('i', { className: 'fa fa-exclamation-circle', 'aria-hidden': 'true' }),
	        React.createElement(
	            'span',
	            { className: 'error-msg-txt' },
	            message
	        )
	    );
	}
	
	function createInput(type, value, onChange, name, placeholder) {
	    return React.createElement('input', { type: type, value: value, onChange: onChange, name: name, placeholder: placeholder });
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
	    return React.createElement(
	        'button',
	        { onClick: onSubmit, className: 'button split success', disabled: disabled },
	        React.createElement(
	            'span',
	            null,
	            getButtonLabel(authMode)
	        )
	    );
	}
	
	function createLinksSection(authMode, navToLogin, navToRegister, navToForgotPassword) {
	
	    function createLoginScreenLinks() {
	        return React.createElement(
	            'div',
	            { className: 'row' },
	            React.createElement(
	                'div',
	                { className: 'column small-6 red-link' },
	                React.createElement(
	                    'a',
	                    { onClick: navToRegister },
	                    Translations.AUTH_PAGE.LINKS.GO_TO_REGISTER
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'column small-6 red-link' },
	                React.createElement(
	                    'a',
	                    { onClick: navToForgotPassword },
	                    Translations.AUTH_PAGE.LINKS.GO_TO_FORGOT_PASSWORD
	                )
	            )
	        );
	    }
	
	    function createNONLoginScreenLinks() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'a',
	                { className: 'red-link', onClick: navToLogin },
	                Translations.AUTH_PAGE.LINKS.GO_TO_LOGIN
	            )
	        );
	    }
	
	    return React.createElement(
	        'div',
	        null,
	        isLoginMode(authMode) ? createLoginScreenLinks() : createNONLoginScreenLinks()
	    );
	}
	
	var AuthPage = function (_React$Component) {
	    _inherits(AuthPage, _React$Component);
	
	    function AuthPage(props) {
	        _classCallCheck(this, AuthPage);
	
	        var _this = _possibleConstructorReturn(this, (AuthPage.__proto__ || Object.getPrototypeOf(AuthPage)).call(this, props));
	
	        _this.onChange = function (e) {
	            _this.setState(_defineProperty({}, e.target.name, e.target.value));
	        };
	
	        _this.handleKeyDown = function (e) {
	            if (e.keyCode === 13 && isFormValid(_this.state, _this.state.authMode)) {
	                _this.onSubmit();
	            }
	        };
	
	        _this.onSubmit = function () {
	            switch (_this.state.authMode) {
	                case 'login':
	                    _this.props.loginWithEmail(_this.state.email, _this.state.password);
	                    break;
	                case 'register':
	                    if (_.isEqual(_this.state.password, _this.state.passwordAgain)) {
	                        _this.props.signUpWithUserAndPassword(_this.state.email, _this.state.password);
	                    } else {
	                        _this.props.reportError(Translations.ERROR_MESSAGES.AUTH.NOT_SAME_PASSWORD);
	                    }
	                    break;
	                case 'forgotPassword':
	                    _this.props.sendPasswordResetEmail(_this.state.email);
	                    _this.onAuthModeChange('login');
	            }
	        };
	
	        _this.onAuthModeChange = function (authMode) {
	            _this.setState({ authMode: authMode });
	        };
	
	        _this.state = {
	            authMode: 'login',
	            email: '',
	            password: '',
	            passwordAgain: ''
	        };
	        return _this;
	    }
	
	    _createClass(AuthPage, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var createNavFunc = function createNavFunc(authMode) {
	                return _this2.onAuthModeChange.bind(_this2, authMode);
	            };
	
	            return React.createElement(
	                'div',
	                { className: 'large-6 columns small-centered auth-form-container' },
	                createLogo(),
	                isLoginMode(this.state.authMode) || isRegisterMode(this.state.authMode) ? createSocialButtonsSection(this.props.loginWithFacebook, this.props.loginWithGoogle) : null,
	                this.props.errorMsg ? createErrorSection(this.props.errorMsg) : null,
	                React.createElement(
	                    'div',
	                    { onKeyDown: this.handleKeyDown, className: 'auth-form' },
	                    createInput('email', this.state.email, this.onChange, 'email', Translations.AUTH_PAGE.FIELDS.EMAIL),
	                    isLoginMode(this.state.authMode) || isRegisterMode(this.state.authMode) ? createInput('password', this.state.password, this.onChange, 'password', Translations.AUTH_PAGE.FIELDS.PASSWORD) : null,
	                    isRegisterMode(this.state.authMode) ? createInput('password', this.state.passwordAgain, this.onChange, 'passwordAgain', Translations.AUTH_PAGE.FIELDS.PASSWORD_AGAIN) : null,
	                    createSubmitButton(this.onSubmit, !isFormValid(this.state, this.state.authMode), this.state.authMode),
	                    createLinksSection(this.state.authMode, createNavFunc('login'), createNavFunc('register'), createNavFunc('forgotPassword'))
	                )
	            );
	        }
	    }]);
	
	    return AuthPage;
	}(React.Component);
	
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "authPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./authPage.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./authPage.scss");
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

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".auth-form-container .logo {\n  margin: 20px auto 35px;\n  width: 160px;\n  height: 160px; }\n\n.auth-form-container .auth-form {\n  text-align: center; }\n\n.auth-form-container .hr {\n  margin: 0.7em auto !important; }\n\n.auth-form-container .red-link {\n  text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	
	var Constants = __webpack_require__(17);
	var Translations = __webpack_require__(26);
	
	var bookingActions = __webpack_require__(28);
	var routingActions = __webpack_require__(29);
	var EventItem = __webpack_require__(45);
	
	__webpack_require__(48);
	
	function mapStateToProps(state) {
	  return {
	    uid: state.authData.uid,
	    games: state.events
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    navigateToUpdateBooking: function navigateToUpdateBooking(uid, gameId) {
	      return dispatch(routingActions.navigateTo(Constants.ROUTING.PAGES.UPDATE_BOOKING, { uid: uid, gameId: gameId }));
	    },
	    cancelBooking: function cancelBooking(uid, gameId) {
	      return dispatch(bookingActions.bookingsCanceled(uid, gameId));
	    }
	  };
	}
	
	function parseEventDate(game) {
	  return new Date(parseInt(game.year, 10), parseInt(game.month, 10) - 1, parseInt(game.day), 10);
	}
	
	function isFutureEvent(game) {
	  var eventDate = parseEventDate(game);
	  return eventDate > Date.now();
	}
	
	function getClosedGamesArr(games) {
	  return _.chain(games).omitBy(function (game) {
	    return game.status !== Constants.GAME.STATUS.CLOSED || !isFutureEvent(game);
	  }).map(function (game, gameId) {
	    return {
	      game: game,
	      gameId: gameId
	    };
	  }).sortBy(function (gameData) {
	    return parseEventDate(gameData.game);
	  }).value();
	}
	
	function getOpenGamesArr(games) {
	  return _.chain(games).omitBy(function (game) {
	    return game.status === Constants.GAME.STATUS.CLOSED;
	  }).map(function (game, gameId) {
	    return {
	      game: game,
	      gameId: gameId
	    };
	  }).sortBy(function (gameData) {
	    return parseEventDate(gameData.game);
	  }).value();
	}
	
	function createNoOpenGamesMessageSection() {
	  return React.createElement(
	    'div',
	    { className: 'no-bookings more-space' },
	    React.createElement(
	      'span',
	      null,
	      Translations.HOME_PAGE.NO_OPEN_GAMES
	    ),
	    React.createElement('i', { className: 'fa fa-bus', 'aria-hidden': 'true' })
	  );
	}
	
	function createGamesLists(openGamesArr, closedGamesArr, onBooking, onCancelBooking) {
	
	  function bindOnGameItemClick(fn, gameId) {
	    return function () {
	      fn(gameId);
	    };
	  }
	
	  function createOpenGamesList() {
	    return React.createElement(
	      'div',
	      { className: 'events-list open-events' },
	      React.createElement(
	        'h6',
	        { className: 'hide-for-small-only' },
	        Translations.HOME_PAGE.OPEN_GAMES
	      ),
	      _.map(openGamesArr, function (gameData) {
	        return React.createElement(EventItem, { key: 'open-game-' + gameData.gameId, eventId: gameData.gameId, onBooking: bindOnGameItemClick(onBooking, gameData.gameId), onCancelBooking: bindOnGameItemClick(onCancelBooking, gameData.gameId) });
	      })
	    );
	  }
	
	  function createClosedGamesList() {
	    return React.createElement(
	      'div',
	      { className: 'events-list closed-events hide-for-small-only' },
	      React.createElement(
	        'h6',
	        null,
	        Translations.HOME_PAGE.CLOSED_GAMES
	      ),
	      _.map(closedGamesArr, function (gameData) {
	        return React.createElement(EventItem, { key: 'closed-game-' + gameData.gameId, eventId: gameData.gameId });
	      })
	    );
	  }
	
	  return React.createElement(
	    'div',
	    null,
	    _.isEmpty(openGamesArr) ? null : createOpenGamesList(),
	    _.isEmpty(closedGamesArr) ? null : createClosedGamesList()
	  );
	}
	
	var HomePage = function (_React$Component) {
	  _inherits(HomePage, _React$Component);
	
	  function HomePage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, HomePage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call.apply(_ref, [this].concat(args))), _this), _this.onBooking = function (gameId) {
	      _this.props.navigateToUpdateBooking(_this.props.uid, gameId);
	    }, _this.onCancelBooking = function (gameId) {
	      _this.props.cancelBooking(_this.props.uid, gameId);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(HomePage, [{
	    key: 'render',
	    value: function render() {
	      var openGamesArr = getOpenGamesArr(this.props.games);
	      var closedGamesArr = getClosedGamesArr(this.props.games);
	      return React.createElement(
	        'div',
	        { className: 'site' },
	        React.createElement(
	          'div',
	          { className: 'home-page small-centered' },
	          React.createElement(
	            'div',
	            { className: 'events-container', key: 'events-container' },
	            React.createElement(
	              'div',
	              { className: 'events', key: 'events' },
	              _.isEmpty(openGamesArr) ? createNoOpenGamesMessageSection() : null,
	              createGamesLists(openGamesArr, closedGamesArr, this.onBooking, this.onCancelBooking)
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return HomePage;
	}(React.Component);
	
	HomePage.propTypes = {
	  uid: React.PropTypes.string.isRequired,
	  games: React.PropTypes.object.isRequired,
	  navigateToUpdateBooking: React.PropTypes.func.isRequired,
	  cancelBooking: React.PropTypes.func.isRequired
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(HomePage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "homePage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	
	var Translations = __webpack_require__(26);
	var Constants = __webpack_require__(17);
	
	__webpack_require__(46);
	
	function isBookingEnabled(event, user) {
	    switch (event.status) {
	        case Constants.GAME.STATUS.OPEN_FOR_ALL:
	            return true;
	        case Constants.GAME.STATUS.OPEN_FOR_MEMBERS:
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
	        homeTeam: Constants.TEAMS.HAPOEL_JERUSALEM,
	        awayTeam: Constants.TEAMS[event.typeId],
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
	                Translations.GAME.STATUS[Constants.GAME.STATUS.FULLY_BOOKED]
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'event-info column medium-2 small-12 show-for-small-only colored' },
	            React.createElement(
	                'span',
	                { className: 'event-status' },
	                Translations.GAME.STATUS[Constants.GAME.STATUS.FULLY_BOOKED]
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
	            Translations.GAME_ITEM.BOOK
	        ),
	        React.createElement('i', { className: 'fa fa-bus', 'aria-hidden': 'true' })
	    );
	
	    var editBookingButton = React.createElement(
	        'span',
	        { key: 'edit-btn' },
	        React.createElement(
	            'span',
	            null,
	            Translations.GAME_ITEM.EDIT_BOOKING
	        ),
	        React.createElement('i', { className: 'fa fa-bus', 'aria-hidden': 'true' })
	    );
	
	    return React.createElement(
	        'a',
	        { className: 'button success small', key: 'register-btn', onClick: isBookingAllowed ? onBooking : _.noop, disabled: !isBookingAllowed },
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
	            Translations.GAME_ITEM.CANCEL_BOOKING
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
	            var isOpenForBooking = this.props.status !== Constants.GAME.STATUS.CLOSED;
	            var isFullyBooked = this.props.status === Constants.GAME.STATUS.FULLY_BOOKED;
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".event-item {\n  font-size: 0.9em; }\n  .event-item:first-child {\n    padding-top: 0; }\n  .event-item .groups-images .separator {\n    margin-right: 5px; }\n  .event-item .event-image {\n    border-radius: 50%;\n    background: #ffffff; }\n    .event-item .event-image.big {\n      margin-bottom: 10px;\n      width: 90px;\n      height: 90px; }\n    .event-item .event-image.small {\n      margin: 0 5px;\n      width: 40px;\n      height: 40px; }\n  .event-item .groups-names {\n    padding: 0 4em; }\n  .event-item .event-info {\n    text-align: center;\n    margin-top: 10px; }\n    .event-item .event-info.colored {\n      font-size: 1.1em;\n      font-weight: bold;\n      margin-bottom: 10px; }\n    .event-item .event-info .event-status {\n      color: #D32F2F; }\n    .event-item .event-info span {\n      margin: 0 15px; }\n  .event-item .action-buttons {\n    margin-right: auto;\n    margin-top: 5px; }\n    .event-item .action-buttons .button.small {\n      font-size: 0.75rem;\n      margin: 0 5px; }\n    .event-item .action-buttons .button i {\n      margin-right: 5px; }\n", ""]);
	
	// exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./homePage.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./homePage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".home-page .events {\n  margin-top: 10px; }\n  @media screen and (max-width: 39.9375em) {\n    .home-page .events {\n      margin-top: 0px; } }\n\n.home-page .open-events {\n  margin-bottom: 25px; }\n\n.home-page .events-list h6 {\n  font-weight: bold; }\n\n.home-page .no-bookings {\n  font-size: 1.2em;\n  text-align: center;\n  color: #424242; }\n  .home-page .no-bookings i {\n    margin-right: 10px; }\n\n.home-page .event-item {\n  padding: 5px 0; }\n  @media screen and (max-width: 39.9375em) {\n    .home-page .event-item {\n      padding: 15px 0 30px 0; } }\n  .home-page .event-item:nth-child(even) {\n    background: #EEEEEE; }\n  .home-page .event-item:nth-child(odd) {\n    background: #E0E0E0; }\n", ""]);
	
	// exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	var classNames = __webpack_require__(32);
	
	var Translations = __webpack_require__(26);
	
	var Constants = __webpack_require__(17);
	var routingActions = __webpack_require__(29);
	
	var ListItem = __webpack_require__(51);
	var PageTitle = __webpack_require__(54);
	
	var FILTERS = {
	    ALL: 'ALL',
	    MEMBERS: 'MEMBERS',
	    REQUESTS: 'REQUESTS',
	    NON_MEMBERS: 'NON_MEMBERS'
	};
	
	function mapStateToProps(state) {
	    return {
	        query: {
	            filter: state.routing.current.params.filter || FILTERS.ALL,
	            search: state.routing.current.params.search || ''
	        },
	        users: state.users
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        navToEditUser: function navToEditUser(uid) {
	            return dispatch(routingActions.navigateTo(Constants.ROUTING.PAGES.EDIT_USER_INFO, { uid: uid }));
	        },
	        changeFilter: function changeFilter(filter) {
	            return dispatch(routingActions.replace(null, { filter: filter }));
	        },
	        changeSearchQuery: _.debounce(function (search) {
	            return dispatch(routingActions.replace(null, { search: search }));
	        }, 500)
	    };
	}
	
	function countMembers(users) {
	    return _.chain(users).pickBy(pickUsersFunctions.MEMBERS).values().sumBy('seasonTickets').value();
	}
	
	function countRequests(users) {
	    return _.chain(users).pickBy(pickUsersFunctions.REQUESTS).size().value();
	}
	
	function countNonMembers(users) {
	    return _.chain(users).pickBy(pickUsersFunctions.NON_MEMBERS).size().value();
	}
	
	function countAccordingToFilters(users) {
	    var _ref;
	
	    return _ref = {}, _defineProperty(_ref, FILTERS.ALL, _.size(users)), _defineProperty(_ref, FILTERS.MEMBERS, countMembers(users)), _defineProperty(_ref, FILTERS.REQUESTS, countRequests(users)), _defineProperty(_ref, FILTERS.NON_MEMBERS, countNonMembers(users)), _ref;
	}
	
	function getUserTitle(user) {
	    return user.firstName + ' ' + user.lastName;
	}
	
	function getUserSubtitles(user) {
	    return [user.phonePrefix + '-' + user.phoneNumber, user.email, 'כמות מנויים: ' + (user.seasonTickets || 0)];
	}
	
	function getUserImage(user) {
	    return user.photoURL || 'http://image.flaticon.com/icons/svg/163/163804.svg';
	}
	
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
	
	function getVisibleUsers(users, filter, searchQuery) {
	    return _.chain(users).pickBy(pickUsersFunctions[filter]).pickBy(function (user) {
	        return _.startsWith(user.firstName, searchQuery) || _.startsWith(user.lastName, searchQuery);
	    }, this).map(function (user, uid) {
	        return { user: user, uid: uid };
	    }).sortBy('user.firstName').value();
	}
	
	function createFilter(searchQuery, filter, handleFilterChange, handleSearchQueryChange, filterCounts) {
	
	    function createFilterTabs() {
	        return React.createElement(
	            'div',
	            { className: 'column small-12 large-8' },
	            React.createElement(
	                'ul',
	                { className: 'menu small-text' },
	                React.createElement(
	                    'li',
	                    { className: classNames({ active: filter === FILTERS.ALL }) },
	                    React.createElement(
	                        'a',
	                        { onClick: handleFilterChange.bind(this, FILTERS.ALL) },
	                        React.createElement(
	                            'span',
	                            null,
	                            Translations.USERS_PAGE.FILTER.TABS.ALL
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            '(',
	                            filterCounts[FILTERS.ALL],
	                            ')'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    { className: classNames({ active: filter === FILTERS.MEMBERS }) },
	                    React.createElement(
	                        'a',
	                        { onClick: handleFilterChange.bind(this, FILTERS.MEMBERS) },
	                        React.createElement(
	                            'span',
	                            null,
	                            Translations.USERS_PAGE.FILTER.TABS.MEMBERS
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            '(',
	                            filterCounts[FILTERS.MEMBERS],
	                            ')'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    { className: classNames({ active: filter === FILTERS.REQUESTS }) },
	                    React.createElement(
	                        'a',
	                        { onClick: handleFilterChange.bind(this, FILTERS.REQUESTS) },
	                        React.createElement(
	                            'span',
	                            null,
	                            Translations.USERS_PAGE.FILTER.TABS.REQUESTS
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            '(',
	                            filterCounts[FILTERS.REQUESTS],
	                            ')'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    { className: classNames({ active: filter === FILTERS.NON_MEMBERS }) },
	                    React.createElement(
	                        'a',
	                        { onClick: handleFilterChange.bind(this, FILTERS.NON_MEMBERS) },
	                        React.createElement(
	                            'span',
	                            null,
	                            Translations.USERS_PAGE.FILTER.TABS.NON_MEMBERS
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            '(',
	                            filterCounts[FILTERS.NON_MEMBERS],
	                            ')'
	                        )
	                    )
	                )
	            )
	        );
	    }
	
	    function createTextInput() {
	        return React.createElement(
	            'div',
	            { className: 'column small-12 large-4' },
	            React.createElement(
	                'div',
	                { className: 'search' },
	                React.createElement('input', {
	                    type: 'search',
	                    className: 'search-input',
	                    placeholder: Translations.USERS_PAGE.FILTER.SEARCH,
	                    value: searchQuery,
	                    onChange: handleSearchQueryChange
	                }),
	                React.createElement(
	                    'span',
	                    { className: 'search-icon' },
	                    React.createElement('i', { className: 'fa fa-search' })
	                )
	            )
	        );
	    }
	
	    return React.createElement(
	        'div',
	        { className: 'filtering row expanded collapse' },
	        createFilterTabs(),
	        createTextInput()
	    );
	}
	
	function createUsersList(usersArr, onUserClick) {
	    var _this = this;
	
	    var onItemClick = function onItemClick(uid) {
	        onUserClick(uid);
	    };
	
	    var items = _.map(usersArr, function (userDef) {
	        return React.createElement(ListItem, {
	            key: 'user' + userDef.uid,
	            title: getUserTitle(userDef.user),
	            subtitles: getUserSubtitles(userDef.user),
	            onClick: onItemClick.bind(_this, userDef.uid),
	            imageSrc: getUserImage(userDef.user)
	        });
	    });
	
	    return React.createElement(
	        'div',
	        null,
	        items
	    );
	}
	
	function createNoUsersMessage() {
	    return React.createElement(
	        'label',
	        { className: 'filter-status' },
	        React.createElement('i', { className: 'fa fa-frown-o', 'aria-hidden': 'true' }),
	        React.createElement(
	            'span',
	            null,
	            Translations.USERS_PAGE.NO_USERS_FOUND
	        )
	    );
	}
	
	var UsersPage = function (_React$Component) {
	    _inherits(UsersPage, _React$Component);
	
	    function UsersPage(props) {
	        _classCallCheck(this, UsersPage);
	
	        var _this2 = _possibleConstructorReturn(this, (UsersPage.__proto__ || Object.getPrototypeOf(UsersPage)).call(this, props));
	
	        _this2.handleSearchQueryChange = function (e) {
	            var search = e.target.value;
	            _this2.setState({ search: search }, function () {
	                return _this2.props.changeSearchQuery(search);
	            });
	        };
	
	        _this2.handleFilterChange = function (filter) {
	            _this2.props.changeFilter(filter);
	        };
	
	        _this2.state = {
	            search: _this2.props.query.search
	        };
	        return _this2;
	    }
	
	    _createClass(UsersPage, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.query.search !== this.state.search) {
	                this.setState({ search: nextProps.query.search });
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var visibleUsersArr = getVisibleUsers(this.props.users, this.props.query.filter, this.state.search);
	
	            return React.createElement(
	                'div',
	                { className: 'small-centered dashboard-page' },
	                React.createElement(PageTitle, { title: Translations.USERS_PAGE.TITLE }),
	                createFilter(this.state.search, this.props.query.filter, this.handleFilterChange, this.handleSearchQueryChange, countAccordingToFilters(this.props.users)),
	                _.isEmpty(visibleUsersArr) ? createNoUsersMessage() : createUsersList(visibleUsersArr, this.props.navToEditUser)
	            );
	        }
	    }]);
	
	    return UsersPage;
	}(React.Component);
	
	UsersPage.propTypes = {
	    users: React.PropTypes.object,
	    query: React.PropTypes.object.isRequired,
	    navToEditUser: React.PropTypes.func.isRequired,
	    changeFilter: React.PropTypes.func.isRequired,
	    changeSearchQuery: React.PropTypes.func.isRequired
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(UsersPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "usersPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	
	__webpack_require__(52);
	
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".list-item {\n  display: flex;\n  align-items: flex-start;\n  padding: 5px 10px 5px 10px; }\n  .list-item:first-child {\n    padding-top: 0; }\n  .list-item .list-image {\n    width: 40px;\n    height: 40px;\n    margin-top: 5px;\n    margin-left: 10px;\n    border-radius: 50%;\n    background: #ffffff;\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1); }\n  .list-item .list-titles {\n    flex: 1;\n    overflow: hidden; }\n    .list-item .list-titles .title.large-text {\n      font-size: 1.2em;\n      font-weight: bold; }\n    .list-item .list-titles .subtitle {\n      font-size: 0.80rem; }\n      .list-item .list-titles .subtitle.inline, .list-item .list-titles .subtitle.inline.show-for-print {\n        display: inline-block;\n        margin-left: 15px; }\n", ""]);
	
	// exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	
	var routingActions = __webpack_require__(29);
	
	__webpack_require__(55);
	
	function mapDispatchToProps(dispatch) {
	  return {
	    navigateBack: function navigateBack() {
	      return dispatch(routingActions.navigateBack());
	    }
	  };
	}
	
	var PageTitle = function (_React$Component) {
	  _inherits(PageTitle, _React$Component);
	
	  function PageTitle() {
	    _classCallCheck(this, PageTitle);
	
	    return _possibleConstructorReturn(this, (PageTitle.__proto__ || Object.getPrototypeOf(PageTitle)).apply(this, arguments));
	  }
	
	  _createClass(PageTitle, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'page-title' },
	        React.createElement(
	          'label',
	          { className: 'title' },
	          this.props.title
	        ),
	        React.createElement(
	          'button',
	          { className: 'back-btn', key: 'back-btn', onClick: this.props.navigateBack },
	          React.createElement('i', { className: 'fa fa-arrow-left', 'aria-hidden': 'true' })
	        )
	      );
	    }
	  }]);
	
	  return PageTitle;
	}(React.Component);
	
	PageTitle.propTypes = {
	  title: React.PropTypes.string.isRequired,
	  navigateBack: React.PropTypes.func.isRequired
	};
	
	module.exports = ReactRedux.connect(null, mapDispatchToProps)(PageTitle);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "pageTitle.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./pageTitle.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./pageTitle.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".page-title {\n  background: #EF5350;\n  border-bottom: 8px solid #D32F2F;\n  color: #ffffff;\n  height: 3.3em;\n  padding: 0 10px 0 10px;\n  display: flex;\n  align-items: center; }\n  .page-title .title {\n    font-size: 1rem;\n    font-weight: bold;\n    color: #ffffff;\n    flex: 1; }\n  .page-title .back-btn {\n    width: 20px; }\n", ""]);
	
	// exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	var classNames = __webpack_require__(32);
	
	var Constants = __webpack_require__(17);
	var Translations = __webpack_require__(26);
	
	var routingActions = __webpack_require__(29);
	
	var PageTitle = __webpack_require__(54);
	var ListItem = __webpack_require__(51);
	
	__webpack_require__(58);
	
	var TABS = {
	    ALL: 'all',
	    OPEN: 'open',
	    CLOSED: 'closed'
	};
	
	function mapStateToProps(state) {
	    return {
	        games: state.events,
	        query: {
	            filter: state.routing.current.params.filter || TABS.ALL
	        }
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        editGame: function editGame(gameId) {
	            return dispatch(routingActions.navigateTo(Constants.ROUTING.PAGES.UPDATE_GAME, { gameId: gameId }));
	        },
	        createGame: function createGame() {
	            return dispatch(routingActions.navigateTo(Constants.ROUTING.PAGES.UPDATE_GAME));
	        },
	        changeFilter: function changeFilter(filter) {
	            return dispatch(routingActions.replace(null, { filter: filter }));
	        }
	    };
	}
	
	function getVisibleGames(games, filter) {
	    switch (filter) {
	        case TABS.OPEN:
	            return getOpenGames(games);
	        case TABS.CLOSED:
	            return getClosedGames(games);
	    }
	    return games;
	}
	
	function getOpenGames(games) {
	    return _.omitBy(games, function (game) {
	        return game.status === Constants.GAME.STATUS.CLOSED;
	    });
	}
	
	function getClosedGames(games) {
	    return _.pickBy(games, function (game) {
	        return game.status === Constants.GAME.STATUS.CLOSED;
	    });
	}
	
	function getGameSubtitles(game) {
	    return ['תאריך: ' + (game.day + '/' + game.month + '/' + game.year), // eslint-disable-line no-useless-concat
	    'שעה: ' + (game.hour + ':' + game.minute), // eslint-disable-line no-useless-concat
	    Translations.GAME.STATUS[game.status]];
	}
	
	function createTabs(games, filter, onFilterChange) {
	    function onTabClick(selectedFilter) {
	        onFilterChange(selectedFilter);
	    }
	
	    return React.createElement(
	        'div',
	        { className: 'filtering row expanded collapse' },
	        React.createElement(
	            'div',
	            { className: 'column small-12 large-6' },
	            React.createElement(
	                'ul',
	                { className: 'menu' },
	                React.createElement(
	                    'li',
	                    { className: classNames({ active: filter === TABS.ALL }) },
	                    React.createElement(
	                        'a',
	                        { onClick: onTabClick.bind(this, TABS.ALL) },
	                        React.createElement(
	                            'span',
	                            null,
	                            Translations.GAMES_PAGE.TABS.ALL
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            '(',
	                            _.size(games),
	                            ')'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    { className: classNames({ active: filter === TABS.OPEN }) },
	                    React.createElement(
	                        'a',
	                        { onClick: onTabClick.bind(this, TABS.OPEN) },
	                        React.createElement(
	                            'span',
	                            null,
	                            Translations.GAMES_PAGE.TABS.OPEN
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            '(',
	                            _.size(getOpenGames(games)),
	                            ')'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    { className: classNames({ active: filter === TABS.CLOSED }) },
	                    React.createElement(
	                        'a',
	                        { onClick: onTabClick.bind(this, TABS.CLOSED) },
	                        React.createElement(
	                            'span',
	                            null,
	                            Translations.GAMES_PAGE.TABS.CLOSED
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            '(',
	                            _.size(getClosedGames(games)),
	                            ')'
	                        )
	                    )
	                )
	            )
	        )
	    );
	}
	
	function createNoGamesMessage() {
	    return React.createElement(
	        'label',
	        { className: 'filter-status' },
	        React.createElement('i', { className: 'fa fa-frown-o', 'aria-hidden': 'true' }),
	        React.createElement(
	            'span',
	            null,
	            Translations.GAMES_PAGE.NO_GAMES_LABEL
	        )
	    );
	}
	
	function createPlusButton(onCreateGame) {
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(
	            'button',
	            { className: 'float-left add-btn big hide-for-small-only', onClick: onCreateGame },
	            '+'
	        ),
	        React.createElement(
	            'button',
	            { className: 'float-left add-btn small show-for-small-only', onClick: onCreateGame },
	            '+'
	        )
	    );
	}
	
	var GamesPage = function (_React$Component) {
	    _inherits(GamesPage, _React$Component);
	
	    function GamesPage() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, GamesPage);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GamesPage.__proto__ || Object.getPrototypeOf(GamesPage)).call.apply(_ref, [this].concat(args))), _this), _this.onFilterChanged = function (filter) {
	            _this.props.changeFilter(filter);
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(GamesPage, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var visibleGames = getVisibleGames(this.props.games, this.props.query.filter);
	
	            return React.createElement(
	                'div',
	                { className: 'small-centered dashboard-page games-page' },
	                React.createElement(PageTitle, { title: Translations.GAMES_PAGE.TITLE }),
	                createTabs(this.props.games, this.props.query.filter, this.onFilterChanged),
	                _.map(visibleGames, function (game, gameId) {
	                    return React.createElement(ListItem, { key: 'game-' + gameId,
	                        title: Constants.TEAMS[game.typeId].label,
	                        subtitles: getGameSubtitles(game),
	                        imageSrc: Constants.TEAMS[game.typeId].logo || 'http://image.flaticon.com/icons/svg/138/138776.svg',
	                        onClick: _this2.props.editGame.bind(_this2, gameId)
	                    });
	                }),
	                visibleGames.length == 0 ? createNoGamesMessage() : null,
	                createPlusButton(this.props.createGame)
	            );
	        }
	    }]);
	
	    return GamesPage;
	}(React.Component);
	
	GamesPage.propTypes = {
	    games: React.PropTypes.object.isRequired,
	    createGame: React.PropTypes.func.isRequired,
	    editGame: React.PropTypes.func.isRequired,
	    changeFilter: React.PropTypes.func.isRequired
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(GamesPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "gamesPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./gamesPage.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./gamesPage.scss");
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

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".games-page .filtering {\n  margin-bottom: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	var classNames = __webpack_require__(32);
	
	var Constants = __webpack_require__(17);
	var Translations = __webpack_require__(26);
	
	var routingActions = __webpack_require__(29);
	
	var PageTitle = __webpack_require__(54);
	var ListItem = __webpack_require__(51);
	
	var TABS = {
	    PICKUP: 'pickUp',
	    DROPOFF: 'dropOff'
	};
	
	__webpack_require__(61);
	
	function mapStateToProps(state) {
	    return {
	        bookings: state.bookings,
	        games: state.events,
	        users: state.users,
	        query: {
	            gameId: state.routing.current.params.gameId || _.findKey(state.events, { status: Constants.GAME.STATUS.OPEN_FOR_MEMBERS }) || _.findKey(state.events, { status: Constants.GAME.STATUS.OPEN_FOR_ALL }) || _.findKey(state.events, { status: Constants.GAME.STATUS.CLOSED }),
	            filter: state.routing.current.params.filter || TABS.PICKUP
	        }
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        editBooking: function editBooking(gameId, uid) {
	            return dispatch(routingActions.navigateTo(Constants.ROUTING.PAGES.UPDATE_BOOKING, { gameId: gameId, uid: uid }));
	        },
	        changeFilter: function changeFilter(filter) {
	            return dispatch(routingActions.replace(null, { filter: filter }));
	        },
	        changeGameId: function changeGameId(gameId) {
	            return dispatch(routingActions.replace(null, { gameId: gameId }));
	        }
	    };
	}
	
	function getBookingTitle(user) {
	    return user.firstName + ' ' + user.lastName;
	}
	
	function getBookingPhone(user) {
	    return user.phonePrefix + '-' + user.phoneNumber;
	}
	
	function getBookingSubtitles(booking, user) {
	    var subtitles = [];
	
	    if (booking.paidSeats > 0) {
	        subtitles.push('מנויים: ' + booking.paidSeats);
	    }
	    if (booking.extraSeats > 0) {
	        subtitles.push('חד פעמי: ' + booking.extraSeats);
	    }
	    if (booking.pickUp) {
	        subtitles.push('הלוך: ' + Translations.STATIONS[booking.pickUp]);
	    }
	    if (booking.dropOff) {
	        subtitles.push('חזור: ' + Translations.STATIONS[booking.dropOff]);
	    }
	
	    if (user) {
	        subtitles.push('טל׳: ' + getBookingPhone(user));
	    }
	
	    return subtitles;
	}
	
	function getBookingImage(user) {
	    return user.photoURL || 'http://image.flaticon.com/icons/svg/189/189991.svg';
	}
	
	function getPickUpMap(bookings) {
	    return _.chain(bookings).omitBy(function (booking) {
	        return !booking.pickUp;
	    }).transform(function (acc, booking, uid) {
	        acc[booking.pickUp][uid] = booking; // eslint-disable-line no-param-reassign
	    }, { tlv: {}, modiin: {} }).value();
	}
	
	function getDropOffMap(bookings) {
	    return _.chain(bookings).omitBy(function (booking) {
	        return !booking.dropOff;
	    }).transform(function (acc, booking, uid) {
	        acc[booking.dropOff][uid] = booking; // eslint-disable-line no-param-reassign
	    }, { tlv: {}, modiin: {} }).value();
	}
	
	function getVisibleBookings(bookings, gameId) {
	    var bookingForEventMap = _.chain(bookings).mapValues(function (userBookings) {
	        return userBookings[gameId];
	    }).omitBy(_.isUndefined).value();
	
	    return {
	        pickUp: getPickUpMap(bookingForEventMap),
	        dropOff: getDropOffMap(bookingForEventMap)
	    };
	}
	
	function countPickups(visibleBookings) {
	    var tlvPickUpsPaid = _.chain(visibleBookings.pickUp.tlv).values().sumBy('paidSeats').value();
	
	    var tlvPickUpsExtra = _.chain(visibleBookings.pickUp.tlv).values().sumBy('extraSeats').value();
	
	    var modiinPickUpsPaid = _.chain(visibleBookings.pickUp.modiin).values().sumBy('paidSeats').value();
	
	    var modiinPickUpsExtra = _.chain(visibleBookings.pickUp.modiin).values().sumBy('extraSeats').value();
	
	    return tlvPickUpsPaid + tlvPickUpsExtra + modiinPickUpsPaid + modiinPickUpsExtra;
	}
	
	function countDropOffs(visibleBookings) {
	    var tlvDropOffsPaid = _.chain(visibleBookings.dropOff.tlv).values().sumBy('paidSeats').value();
	
	    var tlvDropOffsExtra = _.chain(visibleBookings.dropOff.tlv).values().sumBy('extraSeats').value();
	
	    var modiinDropOffsPaid = _.chain(visibleBookings.dropOff.modiin).values().sumBy('paidSeats').value();
	
	    var modiinDropOffsExtra = _.chain(visibleBookings.dropOff.modiin).values().sumBy('extraSeats').value();
	
	    return tlvDropOffsPaid + tlvDropOffsExtra + modiinDropOffsPaid + modiinDropOffsExtra;
	}
	
	function createPageTitle() {
	    return React.createElement(
	        'div',
	        { className: 'hide-for-print' },
	        React.createElement(PageTitle, { title: Translations.BOOKINGS_PAGE.TITLE })
	    );
	}
	
	function createFilterSection(filter, gameId, onFilterChange, onGameIdChange, visibleBookings, games) {
	
	    function onTabClick(tab) {
	        onFilterChange(tab);
	    }
	
	    function onSelectChange(e) {
	        onGameIdChange(e.target.value);
	    }
	
	    return React.createElement(
	        'div',
	        { className: 'filtering row expanded collapse hide-for-print' },
	        React.createElement(
	            'div',
	            { className: 'column small-12 large-6' },
	            React.createElement(
	                'ul',
	                { className: 'menu' },
	                React.createElement(
	                    'li',
	                    { className: classNames({ active: filter === TABS.PICKUP }) },
	                    React.createElement(
	                        'a',
	                        { onClick: onTabClick.bind(this, TABS.PICKUP) },
	                        React.createElement(
	                            'span',
	                            null,
	                            Translations.BOOKINGS_PAGE.TABS.PICKUP
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            '(',
	                            countPickups(visibleBookings),
	                            ')'
	                        )
	                    )
	                ),
	                React.createElement(
	                    'li',
	                    { className: classNames({ active: filter === TABS.DROPOFF }) },
	                    React.createElement(
	                        'a',
	                        { onClick: onTabClick.bind(this, TABS.DROPOFF) },
	                        React.createElement(
	                            'span',
	                            null,
	                            Translations.BOOKINGS_PAGE.TABS.DROPOFF
	                        ),
	                        React.createElement(
	                            'span',
	                            null,
	                            '(',
	                            countDropOffs(visibleBookings),
	                            ')'
	                        )
	                    )
	                )
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'column small-12 large-6' },
	            React.createElement(
	                'div',
	                { className: 'search' },
	                React.createElement(
	                    'select',
	                    { value: gameId, onChange: onSelectChange },
	                    _.map(games, function (game, gameId) {
	                        return React.createElement(
	                            'option',
	                            { key: 'game-' + gameId, value: gameId },
	                            game.day,
	                            '/',
	                            game.month,
	                            '/',
	                            game.year,
	                            ' - ',
	                            Constants.TEAMS[game.typeId].label
	                        );
	                    })
	                )
	            )
	        )
	    );
	}
	
	function createBookingTableForPrint(users, visibleBookings, tlvBookings, modiinBookings, isPickUp) {
	    function createTitleRow() {
	        return React.createElement(
	            'tr',
	            { key: 'title-label' },
	            React.createElement(
	                'td',
	                { colspan: '6' },
	                React.createElement(
	                    'span',
	                    null,
	                    isPickUp ? 'הלוך' : 'חזור'
	                ),
	                React.createElement(
	                    'span',
	                    null,
	                    ' (',
	                    isPickUp ? countPickups(visibleBookings) : countDropOffs(visibleBookings),
	                    ')'
	                )
	            )
	        );
	    }
	
	    function createTLVBookingsTitle() {
	        return React.createElement(
	            'tr',
	            { key: 'tlvPickUp' },
	            React.createElement(
	                'td',
	                { colspan: '6', className: 'table-sub' },
	                React.createElement(
	                    'span',
	                    null,
	                    '\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1'
	                )
	            )
	        );
	    }
	
	    function createTLVBookingsRows() {
	        return _.map(tlvBookings, function (booking, uid) {
	            return React.createElement(
	                'tr',
	                { key: 'tlv-booking-row-' + uid },
	                React.createElement(
	                    'td',
	                    null,
	                    getBookingTitle(users[uid])
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    getBookingPhone(users[uid])
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    booking.paidSeats
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    booking.extraSeats
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    Translations.STATIONS[booking.pickUp]
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    Translations.STATIONS[booking.dropOff]
	                )
	            );
	        });
	    }
	
	    function createModiinBookingsTitle() {
	        return React.createElement(
	            'tr',
	            { key: 'modiinPickUp' },
	            React.createElement(
	                'td',
	                { colspan: '6', className: 'table-sub' },
	                React.createElement(
	                    'span',
	                    null,
	                    '\u05DE\u05D5\u05D3\u05D9\u05E2\u05D9\u05DF'
	                )
	            )
	        );
	    }
	
	    function createModiinBookingsRows() {
	        return _.map(modiinBookings, function (booking, uid) {
	            return React.createElement(
	                'tr',
	                { key: 'modiin-booking-row-' + uid },
	                React.createElement(
	                    'td',
	                    null,
	                    getBookingTitle(users[uid])
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    getBookingPhone(users[uid])
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    booking.paidSeats
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    booking.extraSeats
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    Translations.STATIONS[booking.pickUp]
	                ),
	                React.createElement(
	                    'td',
	                    null,
	                    Translations.STATIONS[booking.dropOff]
	                )
	            );
	        });
	    }
	
	    return React.createElement(
	        'table',
	        null,
	        React.createElement(
	            'thead',
	            null,
	            _.size(modiinBookings) !== 0 || _.size(tlvBookings) !== 0 ? createTitleRow() : null,
	            React.createElement(
	                'tr',
	                null,
	                React.createElement(
	                    'th',
	                    null,
	                    '\u05E9\u05DD'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u05D8\u05DC\u05E4\u05D5\u05DF'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u05DE\u05E0\u05D5\u05D9\u05D9\u05DD'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u05D1\u05EA\u05E9\u05DC\u05D5\u05DD'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u05EA\u05D7\u05E0\u05EA \u05E2\u05DC\u05D9\u05D4'
	                ),
	                React.createElement(
	                    'th',
	                    null,
	                    '\u05EA\u05D7\u05E0\u05EA \u05D9\u05E8\u05D9\u05D3\u05D4'
	                )
	            )
	        ),
	        React.createElement(
	            'tbody',
	            null,
	            _.size(tlvBookings) > 0 ? createTLVBookingsTitle() : null,
	            _.size(tlvBookings) > 0 ? createTLVBookingsRows() : null,
	            _.size(modiinBookings) > 0 ? createModiinBookingsTitle() : null,
	            _.size(modiinBookings) > 0 ? createModiinBookingsRows() : null
	        )
	    );
	}
	
	function createPickUpsList(visibleBookings, onBookingClick, users) {
	    var _this = this;
	
	    var tlvPickUp = visibleBookings.pickUp.tlv;
	    var modiinPickUp = visibleBookings.pickUp.modiin;
	
	    function onItemClick(uid) {
	        onBookingClick(uid);
	    }
	
	    var tlvPickUpsItems = _.map(tlvPickUp, function (booking, uid) {
	        return React.createElement(ListItem, {
	            key: 'pickup-tlv-' + uid,
	            title: getBookingTitle(users[uid]),
	            subtitles: getBookingSubtitles(booking, users[uid]),
	            imageSrc: getBookingImage(users[uid]),
	            onClick: onItemClick.bind(_this, uid)
	        });
	    });
	
	    var midiinPickUpsItems = _.map(modiinPickUp, function (booking, uid) {
	        return React.createElement(ListItem, {
	            key: 'pickup-midiin-' + uid,
	            title: getBookingTitle(users[uid]),
	            subtitles: getBookingSubtitles(booking, users[uid]),
	            imageSrc: getBookingImage(users[uid]),
	            onClick: onItemClick.bind(_this, uid)
	        });
	    });
	
	    function createTlvPickupsList() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h6',
	                null,
	                '\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1'
	            ),
	            tlvPickUpsItems
	        );
	    }
	
	    function createModiinPickupsList() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h6',
	                null,
	                '\u05DE\u05D5\u05D3\u05D9\u05E2\u05D9\u05DF'
	            ),
	            midiinPickUpsItems
	        );
	    }
	
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(
	            'div',
	            { className: 'pick-up-container row hide-for-print', key: 'pick-up-container' },
	            _.size(tlvPickUp) !== 0 || _.size(modiinPickUp) !== 0 ? React.createElement(
	                'h5',
	                null,
	                '\u05D4\u05DC\u05D5\u05DA'
	            ) : null,
	            _.size(tlvPickUp) > 0 ? createTlvPickupsList() : null,
	            _.size(modiinPickUp) > 0 ? createModiinPickupsList() : null
	        ),
	        React.createElement(
	            'div',
	            { className: 'pickUp-table show-for-print', key: 'pickUp-table' },
	            createBookingTableForPrint(users, visibleBookings, tlvPickUp, modiinPickUp, true)
	        )
	    );
	}
	
	function createDropOffList(visibleBookings, onBookingClick, users) {
	    var _this2 = this;
	
	    var tlvDropOff = visibleBookings.dropOff.tlv;
	    var modiinDropOff = visibleBookings.dropOff.modiin;
	
	    function onItemClick(uid) {
	        onBookingClick(uid);
	    }
	
	    var tlvDropOffItems = _.map(tlvDropOff, function (booking, uid) {
	        return React.createElement(ListItem, {
	            key: 'pickup-tlv-' + uid,
	            title: getBookingTitle(users[uid]),
	            subtitles: getBookingSubtitles(booking, users[uid]),
	            imageSrc: getBookingImage(users[uid]),
	            onClick: onItemClick.bind(_this2, uid)
	        });
	    });
	
	    var midiinDropOffItems = _.map(modiinDropOff, function (booking, uid) {
	        return React.createElement(ListItem, {
	            key: 'pickup-midiin-' + uid,
	            title: getBookingTitle(users[uid]),
	            subtitles: getBookingSubtitles(booking, users[uid]),
	            imageSrc: getBookingImage(users[uid]),
	            onClick: onItemClick.bind(_this2, uid)
	        });
	    });
	
	    function createTlvDropOffList() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h6',
	                null,
	                '\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1'
	            ),
	            tlvDropOffItems
	        );
	    }
	
	    function createModiinDropOffList() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'h6',
	                null,
	                '\u05DE\u05D5\u05D3\u05D9\u05E2\u05D9\u05DF'
	            ),
	            midiinDropOffItems
	        );
	    }
	
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(
	            'div',
	            { className: 'drop-off-container row hide-for-print', key: 'drop-off-container' },
	            _.size(tlvDropOff) !== 0 || _.size(modiinDropOff) !== 0 ? React.createElement(
	                'h5',
	                null,
	                '\u05D7\u05D6\u05D5\u05E8'
	            ) : null,
	            _.size(tlvDropOff) > 0 ? createTlvDropOffList() : null,
	            _.size(modiinDropOff) > 0 ? createModiinDropOffList() : null
	        ),
	        React.createElement(
	            'div',
	            { className: 'dropOff-table show-for-print', key: 'dropOff-table' },
	            createBookingTableForPrint(users, visibleBookings, tlvDropOff, modiinDropOff, false)
	        )
	    );
	}
	
	var BookingsPage = function (_React$Component) {
	    _inherits(BookingsPage, _React$Component);
	
	    function BookingsPage() {
	        var _ref;
	
	        var _temp, _this3, _ret;
	
	        _classCallCheck(this, BookingsPage);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = BookingsPage.__proto__ || Object.getPrototypeOf(BookingsPage)).call.apply(_ref, [this].concat(args))), _this3), _this3.onFilterChange = function (filter) {
	            _this3.props.changeFilter(filter);
	        }, _this3.onGameIdChange = function (gameId) {
	            _this3.props.changeGameId(gameId);
	        }, _this3.onBookingClick = function (uid) {
	            _this3.props.editBooking(_this3.props.query.gameId, uid);
	        }, _temp), _possibleConstructorReturn(_this3, _ret);
	    }
	
	    _createClass(BookingsPage, [{
	        key: 'render',
	        value: function render() {
	            var visibleBookings = getVisibleBookings(this.props.bookings, this.props.query.gameId);
	            return React.createElement(
	                'div',
	                { className: '\u05BFsmall-centered dashboard-page bookings-page' },
	                createPageTitle(),
	                createFilterSection(this.props.query.filter, this.props.query.gameId, this.onFilterChange, this.onGameIdChange, visibleBookings, this.props.games),
	                this.props.query.filter === TABS.PICKUP ? createPickUpsList(visibleBookings, this.onBookingClick, this.props.users) : createDropOffList(visibleBookings, this.onBookingClick, this.props.users)
	            );
	        }
	    }]);
	
	    return BookingsPage;
	}(React.Component);
	
	BookingsPage.propTypes = {
	    bookings: React.PropTypes.object.isRequired,
	    games: React.PropTypes.object.isRequired,
	    users: React.PropTypes.object.isRequired,
	    query: React.PropTypes.object.isRequired,
	    editBooking: React.PropTypes.func.isRequried,
	    changeFilter: React.PropTypes.func.isRequried,
	    changeGameId: React.PropTypes.func.isRequried
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(BookingsPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "bookingsPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./bookingsPage.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./bookingsPage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".bookings-page h5 {\n  font-weight: bold;\n  background: #CFD8DC;\n  color: #37474F;\n  padding: 5px;\n  margin-bottom: 0; }\n\n.bookings-page h6 {\n  padding: 5px 10px;\n  background: #ECEFF1;\n  margin-bottom: 0; }\n\n.bookings-page .table-sub {\n  font-weight: bold;\n  border-bottom: 2px solid #222222; }\n\n.bookings-page table tbody, .bookings-page table tfoot, .bookings-page table thead {\n  border: 1px solid #222222; }\n", ""]);
	
	// exports


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactReudx = __webpack_require__(4);
	
	var Constants = __webpack_require__(17);
	var Translations = __webpack_require__(26);
	
	var distributionActions = __webpack_require__(64);
	
	var PageTitle = __webpack_require__(54);
	
	__webpack_require__(65);
	
	function mapStateToProps(state) {
	    return {
	        users: state.users,
	        games: state.events,
	        bookings: state.bookings
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        sendTemplateEmail: function sendTemplateEmail(recipients, templateId, substitutions) {
	            return dispatch(distributionActions.sendTemplateEmail(recipients, templateId, substitutions));
	        },
	        sendCustomEmail: function sendCustomEmail(recipients, subject, content) {
	            return dispatch(distributionActions.sendCustomEmail(recipients, subject, content));
	        },
	        sendSMS: function sendSMS(recipients, message) {
	            return dispatch(distributionActions.sendSMS(recipients, message));
	        }
	    };
	}
	
	function getInitialState(games) {
	    return {
	        distributionMethod: Constants.DISTRIBUTION.DISTRIBUTION_METHODS.EMAIL,
	        recipientsType: Constants.DISTRIBUTION.RECIPIENTS_TYPES.MEMBERS_ONLY,
	        distributionType: Constants.DISTRIBUTION.DISTRIBUTION_TYPES.TEMPLATE,
	        templateId: Constants.DISTRIBUTION.TEMPLATES.EVENT_OPEN_FOR_MEMBERS,
	        gameId: _.last(_.keys(getOpenGames(games))),
	        subject: '',
	        content: ''
	    };
	}
	
	function getMembersUsersOnly(users) {
	    return _.pickBy(users, function (user) {
	        return user.seasonTickets && user.seasonTickets > 0;
	    });
	}
	
	function getBookedUsersOnly(users, bookings, gameId) {
	    return _.pickBy(users, function (user, uid) {
	        return _.has(bookings[uid], gameId);
	    });
	}
	
	function getRecipients(users, recipientsType, bookings, gameId) {
	    var recipientsUsers = _.pickBy(users, function (user) {
	        return user.subscribeMail;
	    });
	
	    switch (recipientsType) {
	        case Constants.DISTRIBUTION.RECIPIENTS_TYPES.MEMBERS_ONLY:
	            recipientsUsers = getMembersUsersOnly(recipientsUsers);
	            break;
	        case Constants.DISTRIBUTION.RECIPIENTS_TYPES.BOOKED_TO_EVENT:
	            recipientsUsers = getBookedUsersOnly(recipientsUsers, bookings, gameId);
	            break;
	    }
	
	    return recipientsUsers;
	}
	
	function getUsersEmails(users, recipientsType, bookings, gameId) {
	    var recipients = getRecipients(users, recipientsType, bookings, gameId);
	    return _.map(recipients, function (user) {
	        return user.email;
	    });
	}
	
	function getEventSubstitutions(game) {
	    return {
	        '-DEPARTURE-': game.hour + ':' + game.minute,
	        '-DATE-': game.day + '/' + game.month + '/' + game.year,
	        '-NAME-': Constants.TEAMS[game.typeId].label
	    };
	}
	
	function prepareCustomMailContentForSend(content) {
	    return '<p dir=\'rtl\'>' + content.replace(/(?:\r\n|\r|\n)/g, '<br/>') + '</p>';
	}
	
	function getUsersPhoneNumbers(users, recipientsType, bookings, gameId) {
	    var recipients = getRecipients(users, recipientsType, bookings, gameId);
	    return _.map(recipients, function (user) {
	        return user.phonePrefix + user.phoneNumber;
	    });
	}
	
	function createDistributionMethodInput(distributionMethod, onDistributionMethodChange) {
	    return React.createElement(
	        'div',
	        { className: 'medium-8 small-12 columns small-centered more-space' },
	        React.createElement(
	            'label',
	            null,
	            Translations.DISTRIBUTION_PAGE.DISTRIBUTION_METHOD.TITLE,
	            React.createElement(
	                'select',
	                { value: distributionMethod, onChange: onDistributionMethodChange },
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.DISTRIBUTION_METHODS.EMAIL },
	                    Translations.DISTRIBUTION_PAGE.DISTRIBUTION_METHOD.EMAIL
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.DISTRIBUTION_METHODS.SMS },
	                    Translations.DISTRIBUTION_PAGE.DISTRIBUTION_METHOD.SMS
	                )
	            )
	        )
	    );
	}
	
	function createRecipientsTypeInput(recipientsType, onRecipientsTypeChange) {
	    return React.createElement(
	        'div',
	        { className: 'medium-8 small-12 columns small-centered' },
	        React.createElement(
	            'label',
	            null,
	            Translations.DISTRIBUTION_PAGE.RECIPIENTS_TYPES.TITLE,
	            React.createElement(
	                'select',
	                { value: recipientsType, onChange: onRecipientsTypeChange },
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.RECIPIENTS_TYPES.ALL },
	                    Translations.DISTRIBUTION_PAGE.RECIPIENTS_TYPES.ALL
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.RECIPIENTS_TYPES.MEMBERS_ONLY },
	                    Translations.DISTRIBUTION_PAGE.RECIPIENTS_TYPES.MEMBERS_ONLY
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.RECIPIENTS_TYPES.BOOKED_TO_EVENT },
	                    Translations.DISTRIBUTION_PAGE.RECIPIENTS_TYPES.BOOKED_TO_EVENT
	                )
	            )
	        )
	    );
	}
	
	function createDistributionTypeInput(distributionType, onDistributionTypeChange) {
	    return React.createElement(
	        'div',
	        { className: 'medium-8 small-12 columns small-centered', key: 'distribution-distributionType-input' },
	        React.createElement(
	            'label',
	            null,
	            Translations.DISTRIBUTION_PAGE.DISTRIBUTION_TYPES.TITLE,
	            React.createElement(
	                'select',
	                { value: distributionType, onChange: onDistributionTypeChange },
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.DISTRIBUTION_TYPES.TEMPLATE },
	                    Translations.DISTRIBUTION_PAGE.DISTRIBUTION_TYPES.TEMPLATE
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.DISTRIBUTION_TYPES.CUSTOM },
	                    Translations.DISTRIBUTION_PAGE.DISTRIBUTION_TYPES.CUSTOM
	                )
	            )
	        )
	    );
	}
	
	function createTemplateSelection(templateId, onTemplateIdChange) {
	    return React.createElement(
	        'div',
	        { className: 'medium-8 small-12 columns small-centered', key: 'distribution-template-selection' },
	        React.createElement(
	            'label',
	            null,
	            Translations.DISTRIBUTION_PAGE.TEMPLATES.TITLE,
	            React.createElement(
	                'select',
	                { value: templateId, onChange: onTemplateIdChange },
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.TEMPLATES.EVENT_OPEN_FOR_MEMBERS },
	                    Translations.DISTRIBUTION_PAGE.TEMPLATES.EVENT_OPEN_FOR_MEMBERS
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.TEMPLATES.EVENT_OPEN_FOR_ALL },
	                    Translations.DISTRIBUTION_PAGE.TEMPLATES.EVENT_OPEN_FOR_ALL
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.DISTRIBUTION.TEMPLATES.CHANGE_EVENT_DETAILS },
	                    Translations.DISTRIBUTION_PAGE.TEMPLATES.CHANGE_EVENT_DETAILS
	                )
	            )
	        )
	    );
	}
	
	function createGamesSelection(games, gameId, onGameChange) {
	    var options = _.map(games, function (game, gameId) {
	        return React.createElement(
	            'option',
	            { key: 'game-' + gameId, value: gameId },
	            Constants.TEAMS[game.typeId].label
	        );
	    });
	
	    return React.createElement(
	        'div',
	        { className: 'medium-8 small-12 columns small-centered', key: 'distribution-game-selection' },
	        React.createElement(
	            'label',
	            null,
	            Translations.DISTRIBUTION_PAGE.GAMES.TITLE,
	            React.createElement(
	                'select',
	                { value: gameId, onChange: onGameChange },
	                options
	            )
	        )
	    );
	}
	
	function getOpenGames(games) {
	    return _.pickBy(games, function (game) {
	        return game.status === Constants.GAME.STATUS.OPEN_FOR_MEMBERS || game.status === Constants.GAME.STATUS.OPEN_FOR_ALL;
	    });
	}
	
	function createCustomTitle(subject, onSubjectChanged) {
	    return React.createElement(
	        'div',
	        { className: 'small-centered medium-8 small-12 columns', key: 'distribution-customTitle' },
	        React.createElement(
	            'label',
	            null,
	            Translations.DISTRIBUTION_PAGE.CUSTOM.TITLE.TITLE
	        ),
	        React.createElement('input', { type: 'text', value: subject, onChange: onSubjectChanged })
	    );
	}
	
	function createCustomContent(content, onContentChanged) {
	    return React.createElement(
	        'div',
	        { className: 'small-centered medium-8 small-12 columns', key: 'distribution-customContent' },
	        React.createElement(
	            'label',
	            null,
	            Translations.DISTRIBUTION_PAGE.CUSTOM.CONTENT.TITLE
	        ),
	        React.createElement('textarea', { rows: '10', value: content, onChange: onContentChanged })
	    );
	}
	
	function createSubmitButton(onSubmit) {
	    return React.createElement(
	        'div',
	        { className: 'button-group stacked small-centered large-6 small-8 more-space' },
	        React.createElement(
	            'a',
	            { onClick: onSubmit, className: 'button success' },
	            React.createElement(
	                'span',
	                null,
	                '\u05E9\u05DC\u05D7'
	            ),
	            React.createElement('i', { className: 'fa fa-paper-plane', 'aria-hidden': 'true' })
	        )
	    );
	}
	
	function shouldShowDistributionTypeInput(distributionMethod) {
	    return distributionMethod === Constants.DISTRIBUTION.DISTRIBUTION_METHODS.EMAIL;
	}
	
	function shouldShowTemplateSelection(distributionMethod, distributionType) {
	    return shouldShowDistributionTypeInput(distributionMethod) && distributionType === Constants.DISTRIBUTION.DISTRIBUTION_TYPES.TEMPLATE;
	}
	
	function shouldCreateCustomTitle(distributionMethod, distributionType) {
	    return distributionMethod === Constants.DISTRIBUTION.DISTRIBUTION_METHODS.EMAIL && distributionType === Constants.DISTRIBUTION.DISTRIBUTION_TYPES.CUSTOM;
	}
	
	function shouldShowCustomContent(distributionMethod, distributionType) {
	    return distributionMethod === Constants.DISTRIBUTION.DISTRIBUTION_METHODS.EMAIL && distributionType === Constants.DISTRIBUTION.DISTRIBUTION_TYPES.CUSTOM || distributionMethod === Constants.DISTRIBUTION.DISTRIBUTION_METHODS.SMS;
	}
	
	var DistributionPage = function (_React$Component) {
	    _inherits(DistributionPage, _React$Component);
	
	    function DistributionPage(props) {
	        _classCallCheck(this, DistributionPage);
	
	        var _this = _possibleConstructorReturn(this, (DistributionPage.__proto__ || Object.getPrototypeOf(DistributionPage)).call(this, props));
	
	        _this.onDistributionMethodChange = function (e) {
	            _this.setState({
	                distributionMethod: e.target.value
	            });
	        };
	
	        _this.onRecipientsTypeChange = function (e) {
	            _this.setState({
	                recipientsType: e.target.value
	            });
	        };
	
	        _this.onDistributionTypeChange = function (e) {
	            _this.setState({
	                distributionType: e.target.value
	            });
	        };
	
	        _this.onTemplateIdChange = function (e) {
	            _this.setState({
	                templateId: e.target.value
	            });
	        };
	
	        _this.onGameIdChange = function (e) {
	            _this.setState({
	                gameId: e.target.value
	            });
	        };
	
	        _this.onSubjectChanged = function (e) {
	            _this.setState({
	                subject: e.target.value
	            });
	        };
	
	        _this.onContentChanged = function (e) {
	            _this.setState({
	                content: e.target.value
	            });
	        };
	
	        _this.onSubmit = function () {
	            if (_this.state.distributionMethod === Constants.DISTRIBUTION.DISTRIBUTION_METHODS.EMAIL) {
	                var recipients = getUsersEmails(_this.props.users, _this.state.recipientsType, _this.props.bookings, _this.state.gameId);
	                if (_.isEmpty(recipients)) {
	                    return;
	                }
	                if (_this.state.distributionType === Constants.DISTRIBUTION.DISTRIBUTION_TYPES.TEMPLATE) {
	                    var substitutions = getEventSubstitutions(_this.props.games[_this.state.gameId]);
	                    _this.props.sendTemplateEmail(recipients, _this.state.templateId, substitutions);
	                } else {
	                    _this.props.sendCustomEmail(recipients, _this.state.subject, prepareCustomMailContentForSend(_this.state.content));
	                }
	            } else {
	                var _recipients = getUsersPhoneNumbers(_this.props.users, _this.state.recipientsType, _this.props.bookings, _this.state.gameId);
	                if (_.isEmpty(_recipients)) {
	                    return;
	                }
	                _this.props.sendSMS(_recipients, _this.state.content);
	            }
	
	            _this.setState(getInitialState(_this.props.games));
	        };
	
	        _this.state = getInitialState(_this.props.games);
	        return _this;
	    }
	
	    _createClass(DistributionPage, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'dashboard-page distribution-page' },
	                React.createElement(PageTitle, { title: Translations.DISTRIBUTION_PAGE.TITLE }),
	                React.createElement(
	                    'div',
	                    { className: 'small-11 small-centered' },
	                    createDistributionMethodInput(this.state.distributionMethod, this.onDistributionMethodChange),
	                    createRecipientsTypeInput(this.state.recipientsType, this.onRecipientsTypeChange),
	                    shouldShowDistributionTypeInput(this.state.distributionMethod) ? createDistributionTypeInput(this.state.distributionType, this.onDistributionTypeChange) : null,
	                    shouldShowTemplateSelection(this.state.distributionMethod, this.state.distributionType) ? createTemplateSelection(this.state.templateId, this.onTemplateIdChange) : null,
	                    shouldShowTemplateSelection(this.state.distributionMethod, this.state.distributionType) ? createGamesSelection(getOpenGames(this.props.games), this.state.gameId, this.onGameIdChange) : null,
	                    shouldCreateCustomTitle(this.state.distributionMethod, this.state.distributionType) ? createCustomTitle(this.state.subject, this.onSubjectChanged) : null,
	                    shouldShowCustomContent(this.state.distributionMethod, this.state.distributionType) ? createCustomContent(this.state.content, this.onContentChanged) : null,
	                    createSubmitButton(this.onSubmit)
	                )
	            );
	        }
	    }]);
	
	    return DistributionPage;
	}(React.Component);
	
	DistributionPage.propTypes = {
	    users: React.PropTypes.object,
	    games: React.PropTypes.object,
	    bookings: React.PropTypes.object
	};
	
	module.exports = ReactReudx.connect(mapStateToProps, mapDispatchToProps)(DistributionPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "distributionPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sendSMS = exports.sendCustomEmail = exports.sendTemplateEmail = undefined;
	
	var _clientDB = __webpack_require__(21);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(24);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(25);
	
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./distributionPage.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./distributionPage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".distribution-page .button i {\n  margin-right: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	
	var UserForm = __webpack_require__(68);
	
	var routingActions = __webpack_require__(29);
	var Constants = __webpack_require__(17);
	
	function mapStateToProps(state) {
	    var uidToEdit = state.routing.current.params.uid || state.authData.uid;
	    return {
	        uid: uidToEdit,
	        goHomeAfterEditing: state.routing.history.length === 1
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        navigateHome: function navigateHome() {
	            return dispatch(routingActions.reset(Constants.ROUTING.PAGES.HOME));
	        },
	        navigateBack: function navigateBack() {
	            return dispatch(routingActions.navigateBack());
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
	            if (_this.props.goHomeAfterEditing) {
	                _this.props.navigateHome();
	            } else {
	                _this.props.navigateBack();
	            }
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
	    navigateBack: React.PropTypes.func.isRequired,
	    navigateHome: React.PropTypes.func.isRequired,
	    goHomeAfterEditing: React.PropTypes.bool
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(EditorUserInfoPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "editUserInfoPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	
	var Constants = __webpack_require__(17);
	var Translations = __webpack_require__(26);
	
	var userActions = __webpack_require__(23);
	
	var FormFrame = __webpack_require__(69);
	
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
	                    _.times(Constants.USER.MAX_SEASON_TICKETS, function (i) {
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
	                Translations.UPDATE_USER_INFO_PAGE.FIRST_NAME,
	                React.createElement('input', { type: 'text', name: 'firstName', value: firstName, onChange: onTextChange, maxLength: '20' })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'large-6 columns' },
	            React.createElement(
	                'label',
	                null,
	                Translations.UPDATE_USER_INFO_PAGE.LAST_NAME,
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
	                Translations.UPDATE_USER_INFO_PAGE.EMAIL,
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
	                Translations.UPDATE_USER_INFO_PAGE.PHONE_NUMBER,
	                React.createElement('input', { type: 'tel', name: 'phoneNumber', value: phoneNumber, onChange: onTextChange, maxLength: '7' })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-4 columns end' },
	            React.createElement(
	                'label',
	                null,
	                Translations.UPDATE_USER_INFO_PAGE.PHONE_PREFIX,
	                React.createElement(
	                    'select',
	                    { name: 'phonePrefix', value: phonePrefix, onChange: onTextChange },
	                    _.map(Constants.USER.PHONE_PREFIXES, function (prefix) {
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
	                Translations.UPDATE_USER_INFO_PAGE.FAVORITE_PICKUP_STATION,
	                React.createElement(
	                    'select',
	                    { name: 'station', value: station, onChange: onTextChange },
	                    _.map(Constants.STATIONS, function (station) {
	                        return React.createElement(
	                            'option',
	                            { key: 'station-' + station, value: station },
	                            Translations.STATIONS[station]
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
	                Translations.UPDATE_USER_INFO_PAGE.REQUEST_FOR_MEMBERSHIP,
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
	                Translations.UPDATE_USER_INFO_PAGE.DISTRIBUTION.EMAIL
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
	                        Translations.UPDATE_USER_INFO_PAGE.TOGGLE.YES
	                    ),
	                    React.createElement(
	                        'span',
	                        { className: 'switch-inactive', 'aria-hidden': 'true' },
	                        Translations.UPDATE_USER_INFO_PAGE.TOGGLE.NO
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
	                Translations.UPDATE_USER_INFO_PAGE.DISTRIBUTION.SMS
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
	                        Translations.UPDATE_USER_INFO_PAGE.TOGGLE.YES
	                    ),
	                    React.createElement(
	                        'span',
	                        { className: 'switch-inactive', 'aria-hidden': 'true' },
	                        Translations.UPDATE_USER_INFO_PAGE.TOGGLE.NO
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
	                { title: Translations.UPDATE_USER_INFO_PAGE.TITLE,
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	
	var Translations = __webpack_require__(26);
	
	var PageTitle = __webpack_require__(54);
	
	__webpack_require__(70);
	
	function createActionsButtons(disabled, onSubmit, onRemove) {
	
	    function createRemoveButton() {
	        return React.createElement(
	            'a',
	            { key: 'remove-btn', onClick: onRemove, className: 'button alert more-space' },
	            React.createElement(
	                'span',
	                null,
	                Translations.FORM_FRAME.REMOVE
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
	                Translations.FORM_FRAME.SUBMIT
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
	                React.createElement(PageTitle, { title: this.props.title }),
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".form-frame .content {\n  margin-top: 20px; }\n\n.form-frame .action-buttons {\n  margin-top: 10px; }\n  .form-frame .action-buttons .button i {\n    margin-right: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	
	var Constants = __webpack_require__(17);
	var Translations = __webpack_require__(26);
	
	var routingActions = __webpack_require__(29);
	var bookingActions = __webpack_require__(28);
	
	var FormFrame = __webpack_require__(69);
	
	var emptyBooking = {
	    paidSeats: 0,
	    extraSeats: 0,
	    pickUp: 'tlv',
	    dropOff: 'tlv'
	};
	
	function mapStateToProps(state) {
	    var routingParams = state.routing.current.params;
	    var uid = routingParams.uid;
	    var gameId = routingParams.gameId;
	    var booking = _.get(state, ['bookings', uid, gameId], {});
	
	    return {
	        isAdmin: state.authData.isAdmin,
	        uid: uid,
	        gameId: gameId,
	        booking: booking,
	        userInfo: state.users[uid]
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        updateBooking: function updateBooking(uid, gameId, booking) {
	            return dispatch(bookingActions.updateBooking(uid, gameId, booking));
	        },
	        cancelBooking: function cancelBooking(uid, gameId) {
	            return dispatch(bookingActions.cancelBooking(uid, gameId));
	        },
	        navigateBack: function navigateBack() {
	            return dispatch(routingActions.navigateBack());
	        }
	    };
	}
	
	function createPassengersSection(seasonTickets, paidSeats, extraSeats, onPaidSeatChange, onExtraSeatChange) {
	
	    function createPaidSeatsInput() {
	        var items = _.times(seasonTickets + 1, function (i) {
	            return React.createElement(
	                'option',
	                { key: 'paid-seat-' + i, value: i },
	                i
	            );
	        });
	
	        return React.createElement(
	            'div',
	            { className: 'small-6 columns' },
	            React.createElement(
	                'label',
	                null,
	                Translations.UPDATE_BOOKING_PAGE.PAID_SEATS,
	                React.createElement(
	                    'select',
	                    { value: paidSeats, onChange: onPaidSeatChange, name: 'paidSeats' },
	                    items
	                )
	            )
	        );
	    }
	
	    function createExtraSeatsInput() {
	        var items = _.times(8, function (i) {
	            return React.createElement(
	                'option',
	                { key: 'extra-seat-' + i, value: i },
	                i
	            );
	        });
	
	        return React.createElement(
	            'div',
	            { className: 'small-6 columns end' },
	            React.createElement(
	                'label',
	                null,
	                Translations.UPDATE_BOOKING_PAGE.EXTRA_SEATS,
	                React.createElement(
	                    'select',
	                    { value: extraSeats, onChange: onExtraSeatChange, name: 'extraSeats' },
	                    items
	                )
	            )
	        );
	    }
	
	    return React.createElement(
	        'div',
	        { className: 'row', key: 'booking-form-passengers-section' },
	        seasonTickets ? createPaidSeatsInput() : null,
	        createExtraSeatsInput()
	    );
	}
	
	function createPickupSection(pickUpEnabled, pickUpStation, togglePickUp, onPickupStationChange) {
	    return React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	            'div',
	            { className: 'small-3 large-2 columns' },
	            React.createElement(
	                'label',
	                { htmlFor: 'pickUpToggle' },
	                Translations.UPDATE_BOOKING_PAGE.PICKUP_TOGGLE
	            ),
	            React.createElement(
	                'div',
	                { className: 'switch' },
	                React.createElement('input', { type: 'checkbox', className: 'switch-input', id: 'pickUpToggle', checked: pickUpEnabled, onChange: togglePickUp }),
	                React.createElement('label', { className: 'switch-paddle', htmlFor: 'pickUpToggle' })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-9 large-10 columns end more-space' },
	            React.createElement(
	                'select',
	                { value: pickUpStation, onChange: onPickupStationChange, name: 'pickUp', disabled: !pickUpEnabled },
	                React.createElement(
	                    'option',
	                    { value: '', style: { display: 'none' } },
	                    Translations.UPDATE_BOOKING_PAGE.PICKUP_STATION_DROPDOWN_DEFAULT
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.STATIONS.TEL_AVIV },
	                    Translations.STATIONS[Constants.STATIONS.TEL_AVIV]
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.STATIONS.MODIIN },
	                    Translations.STATIONS[Constants.STATIONS.MODIIN]
	                )
	            )
	        )
	    );
	}
	
	function createDropoffSection(dropOffEnabled, dropOffStation, toggleDropOff, onDropOffStationChange) {
	    return React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	            'div',
	            { className: 'small-3 large-2 columns' },
	            React.createElement(
	                'label',
	                { htmlFor: 'dropOffToggle' },
	                Translations.UPDATE_BOOKING_PAGE.DROPOFF_TOGGLE
	            ),
	            React.createElement(
	                'div',
	                { className: 'switch' },
	                React.createElement('input', { type: 'checkbox', className: 'switch-input', id: 'dropOffToggle', checked: dropOffEnabled, onChange: toggleDropOff }),
	                React.createElement('label', { className: 'switch-paddle', htmlFor: 'dropOffToggle' })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-9 large-10 columns end more-space' },
	            React.createElement(
	                'select',
	                { value: dropOffStation, onChange: onDropOffStationChange, name: 'dropOff', disabled: !dropOffEnabled },
	                React.createElement(
	                    'option',
	                    { value: '', style: { display: 'none' } },
	                    Translations.UPDATE_BOOKING_PAGE.PICKUP_STATION_DROPDOWN_DEFAULT
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.STATIONS.TEL_AVIV },
	                    Translations.STATIONS[Constants.STATIONS.TEL_AVIV]
	                ),
	                React.createElement(
	                    'option',
	                    { value: Constants.STATIONS.MODIIN },
	                    Translations.STATIONS[Constants.STATIONS.MODIIN]
	                )
	            )
	        )
	    );
	}
	
	var UpdateBookingPage = function (_React$Component) {
	    _inherits(UpdateBookingPage, _React$Component);
	
	    function UpdateBookingPage(props) {
	        _classCallCheck(this, UpdateBookingPage);
	
	        var _this = _possibleConstructorReturn(this, (UpdateBookingPage.__proto__ || Object.getPrototypeOf(UpdateBookingPage)).call(this, props));
	
	        _this.onPaidSeatChange = function (e) {
	            _this.setState({
	                paidSeats: parseInt(e.target.value)
	            });
	        };
	
	        _this.onExtraSeatChange = function (e) {
	            _this.setState({
	                extraSeats: parseInt(e.target.value)
	            });
	        };
	
	        _this.togglePickUp = function (e) {
	            var pickUpEnabled = e.target.checked;
	            _this.setState({ pickUpEnabled: pickUpEnabled });
	            if (!pickUpEnabled) {
	                _this.setState({ pickUp: '' });
	            }
	        };
	
	        _this.onPickUpStationChange = function (e) {
	            _this.setState({
	                pickUp: e.target.value
	            });
	        };
	
	        _this.toggleDropOff = function (e) {
	            var dropOffEnabled = e.target.checked;
	            _this.setState({ dropOffEnabled: dropOffEnabled });
	            if (!dropOffEnabled) {
	                _this.setState({ dropOff: '' });
	            }
	        };
	
	        _this.onDropOffStationChange = function (e) {
	            _this.setState({
	                dropOff: e.target.value
	            });
	        };
	
	        _this.isFormValid = function () {
	            if (_this.state.paidSeats === 0 && _this.state.extraSeats === 0) {
	                return false;
	            }
	
	            if (!_this.state.pickUpEnabled && !_this.state.dropOffEnabled) {
	                return false;
	            }
	
	            if (_this.state.pickUpEnabled && _this.state.pickUp === '') {
	                return false;
	            }
	
	            if (_this.state.dropOffEnabled && _this.state.dropOff === '') {
	                return false;
	            }
	
	            return true;
	        };
	
	        _this.onSubmit = function () {
	            var bookingToUpdate = _.pick(_this.state, _.keys(emptyBooking));
	            _this.props.updateBooking(_this.props.uid, _this.props.gameId, bookingToUpdate);
	            _this.props.navigateBack();
	        };
	
	        _this.onRemove = function () {
	            _this.props.cancelBooking(_this.props.uid, _this.props.gameId);
	            _this.props.navigateBack();
	        };
	
	        var bookingInitialState = _.defaults(_this.props.booking, { paidSeats: _this.props.seasonTickets }, emptyBooking);
	
	        _this.state = _.merge(bookingInitialState, {
	            pickUpEnabled: !!bookingInitialState.pickUp,
	            dropOffEnabled: !!bookingInitialState.dropOff
	        });
	        return _this;
	    }
	
	    _createClass(UpdateBookingPage, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                FormFrame,
	                { title: Translations.UPDATE_BOOKING_PAGE.TITLE, onSubmit: this.onSubmit, onClose: this.props.navigateBack, onRemove: this.props.isAdmin ? this.onRemove : null, disabled: !this.isFormValid() },
	                React.createElement(
	                    'div',
	                    { className: 'booking-form small-11 small-centered' },
	                    createPassengersSection(this.props.userInfo.seasonTickets, this.state.paidSeats, this.state.extraSeats, this.onPaidSeatChange, this.onExtraSeatChange),
	                    createPickupSection(this.state.pickUpEnabled, this.state.pickUp, this.togglePickUp, this.onPickUpStationChange),
	                    createDropoffSection(this.state.dropOffEnabled, this.state.dropOff, this.toggleDropOff, this.onDropOffStationChange)
	                )
	            );
	        }
	    }]);
	
	    return UpdateBookingPage;
	}(React.Component);
	
	UpdateBookingPage.propTypes = {
	    uid: React.PropTypes.string.isRequired,
	    isAdmin: React.PropTypes.bool.isRequired,
	    gameId: React.PropTypes.string.isRequired,
	    booking: React.PropTypes.object,
	    userInfo: React.PropTypes.object.isRequired,
	    updateBooking: React.PropTypes.func.isRequired,
	    cancelBooking: React.PropTypes.func.isRequired,
	    navigateBack: React.PropTypes.func.isRequired
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(UpdateBookingPage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "updateBookingPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(11);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(4);
	
	var Constants = __webpack_require__(17);
	var Translations = __webpack_require__(26);
	
	var eventActions = __webpack_require__(27);
	var routingActions = __webpack_require__(29);
	
	var DEFAULT_GAME_LOGO = 'http://image.flaticon.com/icons/svg/124/124150.svg';
	
	var FormFrame = __webpack_require__(69);
	
	__webpack_require__(74);
	
	var emptyEvent = {
	    typeId: '',
	    day: '01',
	    month: '01',
	    year: '2017',
	    hour: '17',
	    minute: '00',
	    status: Constants.GAME.STATUS.CLOSED
	};
	
	function mapStateToProps(state) {
	    var routingParams = state.routing.current.params;
	    var gameId = routingParams.gameId;
	    var game = _.get(state, ['events', gameId], {});
	
	    return {
	        game: game,
	        gameId: gameId
	    };
	}
	
	function parseDateValue(year, month, day) {
	    return [year, month, day].join('-');
	}
	
	function parseTimeValue(hour, minute) {
	    return hour + ':' + minute;
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        createGame: function createGame(game) {
	            return dispatch(eventActions.createEvent(game));
	        },
	        updateGame: function updateGame(gameId, game) {
	            return dispatch(eventActions.updateEvent(gameId, game));
	        },
	        removeGame: function removeGame(gameId) {
	            return dispatch(eventActions.removeEvent(gameId));
	        },
	        navigateBack: function navigateBack() {
	            return dispatch(routingActions.navigateBack());
	        }
	    };
	}
	
	function createGameImage(typeId) {
	    return React.createElement('img', { className: 'game-img', src: _.get(Constants.TEAMS, [typeId, 'logo'], DEFAULT_GAME_LOGO) });
	}
	
	function createGameTitleSection(typeId, onTypeIdChange) {
	    return React.createElement(
	        'div',
	        { className: 'row' },
	        React.createElement(
	            'div',
	            { className: 'small-9 large-10 large-collapse columns' },
	            React.createElement(
	                'label',
	                null,
	                Translations.UPDATE_GAME_PAGE.GAME_LABEL,
	                React.createElement(
	                    'select',
	                    { name: 'typeId', value: typeId, onChange: onTypeIdChange },
	                    React.createElement(
	                        'option',
	                        { value: '', style: { display: 'none' } },
	                        Translations.UPDATE_GAME_PAGE.GAME_PLACEHOLDER
	                    ),
	                    _.map(Constants.TEAMS, function (teamData, id) {
	                        return React.createElement(
	                            'option',
	                            { key: 'update-game-' + id, value: id },
	                            teamData.label
	                        );
	                    })
	                )
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'float-left' },
	            createGameImage(typeId)
	        )
	    );
	}
	
	function createInfoWithoutSupportedInputs(year, month, hour, minute, onNonSupportedInputChange) {
	    return React.createElement(
	        'div',
	        { key: 'unsupported-inputs', className: 'row small-expanded small-centered' },
	        React.createElement(
	            'div',
	            { className: 'small-4 medium-2 columns' },
	            React.createElement(
	                'label',
	                null,
	                Translations.UPDATE_GAME_PAGE.DATE_LABEL
	            ),
	            React.createElement(
	                'select',
	                { value: year, onChange: onNonSupportedInputChange, name: 'year' },
	                _.map(Constants.DATE_AND_TIME.years, function (year) {
	                    return React.createElement(
	                        'option',
	                        { key: 'yy-' + year, value: '20' + year },
	                        year
	                    );
	                })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-4 medium-2 columns more-space' },
	            React.createElement(
	                'select',
	                { value: month, onChange: onNonSupportedInputChange, name: 'month' },
	                _.map(Constants.DATE_AND_TIME.months, function (month) {
	                    return React.createElement(
	                        'option',
	                        { key: 'mm-' + month, value: month },
	                        month
	                    );
	                })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-4 medium-2 columns more-space' },
	            React.createElement(
	                'select',
	                { value: day, onChange: onNonSupportedInputChange, name: 'day' },
	                _.map(Constants.DATE_AND_TIME.days, function (day) {
	                    return React.createElement(
	                        'option',
	                        { key: 'dd-' + day, value: day },
	                        day
	                    );
	                })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-3 columns' },
	            React.createElement(
	                'label',
	                null,
	                Translations.UPDATE_GAME_PAGE.TIME
	            ),
	            React.createElement(
	                'select',
	                { value: minute, onChange: onNonSupportedInputChange, name: 'minute' },
	                _.map(Constants.DATE_AND_TIME.minutes, function (day) {
	                    return React.createElement(
	                        'option',
	                        { key: 'min-' + minute, value: minute },
	                        minute
	                    );
	                })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-3 columns more-space end' },
	            React.createElement(
	                'select',
	                { value: hour, onChange: onNonSupportedInputChange, name: 'minute' },
	                _.map(Constants.DATE_AND_TIME.hours, function (hour) {
	                    return React.createElement(
	                        'option',
	                        { key: 'hh-' + hour, value: hour },
	                        hour
	                    );
	                })
	            )
	        )
	    );
	}
	
	function createInfoWithSupportedInputs(date, time, onDateChange, onTimeChange) {
	    return React.createElement(
	        'div',
	        { key: 'supported-inputs', className: 'row' },
	        React.createElement(
	            'div',
	            { className: 'small-6 columns' },
	            React.createElement(
	                'label',
	                null,
	                Translations.UPDATE_GAME_PAGE.DATE_LABEL,
	                React.createElement('input', { type: 'date', value: date, onChange: onDateChange, min: '2016-01-01', max: '2017-12-31', name: 'date' })
	            )
	        ),
	        React.createElement(
	            'div',
	            { className: 'small-6 columns' },
	            React.createElement(
	                'label',
	                null,
	                Translations.UPDATE_GAME_PAGE.TIME,
	                React.createElement('input', { type: 'time', value: time, step: 300, onChange: onTimeChange, name: 'time' })
	            )
	        )
	    );
	}
	
	function createGameStatusSection(status, onGameStatusChange) {
	    return React.createElement(
	        'div',
	        { className: 'small-12 columns' },
	        React.createElement(
	            'label',
	            null,
	            Translations.UPDATE_GAME_PAGE.GAME_STATUS,
	            React.createElement(
	                'select',
	                { value: status, onChange: onGameStatusChange },
	                _.map(Constants.GAME.STATUS, function (val) {
	                    return React.createElement(
	                        'option',
	                        { value: val },
	                        Translations.GAME.STATUS[val]
	                    );
	                })
	            )
	        )
	    );
	}
	
	var UpdateGamePage = function (_React$Component) {
	    _inherits(UpdateGamePage, _React$Component);
	
	    function UpdateGamePage(props) {
	        _classCallCheck(this, UpdateGamePage);
	
	        var _this = _possibleConstructorReturn(this, (UpdateGamePage.__proto__ || Object.getPrototypeOf(UpdateGamePage)).call(this, props));
	
	        _this.onTypeIdChange = function (e) {
	            _this.setState({
	                typeId: e.target.value
	            });
	        };
	
	        _this.onNonSupportedInputChange = function (e) {
	            _this.setState(_defineProperty({}, e.target.name, e.target.value));
	        };
	
	        _this.onDateChange = function (e) {
	            var val = e.target.value.split('-');
	            _this.setState({ year: val[0], month: val[1], day: val[2] });
	        };
	
	        _this.onTimeChange = function (e) {
	            var val = e.target.value.split(':');
	            _this.setState({ hour: val[0], minute: val[1] });
	        };
	
	        _this.onGameStatusChange = function (e) {
	            _this.setState({
	                status: e.target.value
	            });
	        };
	
	        _this.isFormValid = function () {
	            return _this.state.typeId !== '';
	        };
	
	        _this.onSubmit = function () {
	            var game = _.omit(_this.state, ['timeInputSupported', 'dateInputSupported']);
	            if (_this.props.gameId) {
	                _this.props.updateGame(_this.props.gameId, game);
	            } else {
	                _this.props.createGame(game);
	            }
	            _this.props.navigateBack();
	        };
	
	        _this.onRemove = function () {
	            _this.props.removeGame(_this.props.gameId);
	            _this.props.navigateBack();
	        };
	
	        _this.state = _.defaults(_this.props.game, emptyEvent, { dateInputSupported: true, timeInputSupported: true });
	        return _this;
	    }
	
	    _createClass(UpdateGamePage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.checkIfHtml5Supported();
	        }
	    }, {
	        key: 'checkIfHtml5Supported',
	        value: function checkIfHtml5Supported() {
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
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                FormFrame,
	                {
	                    title: Translations.UPDATE_GAME_PAGE.TITLE, onSubmit: this.onSubmit, onRemove: this.onRemove, onClose: this.props.navigateBack, disabled: !this.isFormValid() },
	                React.createElement(
	                    'div',
	                    { className: 'update-game-page large-11 large-centered' },
	                    createGameTitleSection(this.state.typeId, this.onTypeIdChange),
	                    this.state.dateInputSupported && this.state.timeInputSupported ? createInfoWithSupportedInputs(parseDateValue(this.state.year, this.state.month, this.state.day), parseTimeValue(this.state.hour, this.state.minute), this.onDateChange, this.onTimeChange) : createInfoWithoutSupportedInputs(this.state.year, this.state.month, this.state.hour, this.state.minute, this.onNonSupportedInputChange),
	                    createGameStatusSection(this.state.status, this.onGameStatusChange)
	                )
	            );
	        }
	    }]);
	
	    return UpdateGamePage;
	}(React.Component);
	
	UpdateGamePage.propTypes = {
	    game: React.PropTypes.object,
	    gameId: React.PropTypes.string,
	    createGame: React.PropTypes.func.isRequired,
	    updateGame: React.PropTypes.func.isRequired,
	    navigateBack: React.PropTypes.func.isRequired
	};
	
	module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(UpdateGamePage);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "updateGamePage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./updateGamePage.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./updateGamePage.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".update-game-page .game-img {\n  width: 64px;\n  height: 64px;\n  background: #FFFFFF;\n  border-radius: 50%;\n  padding: 10px;\n  margin-top: 10px;\n  margin-left: 15px; }\n", ""]);
	
	// exports


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, ".site {\n  direction: rtl; }\n  .site .split.button {\n    width: 100%;\n    font-size: 16px;\n    line-height: 16px; }\n    .site .split.button i {\n      font-size: 20px;\n      padding-right: 10px;\n      line-height: 16px; }\n    .site .split.button.facebook {\n      background: #3b5998; }\n    .site .split.button.google {\n      background: #d50f25; }\n    .site .split.button.left-icon {\n      text-align: right; }\n      .site .split.button.left-icon span {\n        left: 0; }\n  .site .error-msg {\n    color: #d50f25;\n    padding: 0 15px 15px; }\n    .site .error-msg i {\n      margin-left: 10px; }\n  .site label {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .site .more-space {\n    margin-top: 25px; }\n  .site .dashboard-page {\n    position: relative;\n    background: #F5F5F5;\n    min-height: 100vh; }\n    .site .dashboard-page .list-item:nth-child(even) {\n      background: #EEEEEE; }\n    .site .dashboard-page .list-item:nth-child(odd) {\n      background: #E0E0E0; }\n    @media screen and (max-width: 39.9375em) {\n      .site .dashboard-page .filtering .menu.small-text {\n        font-size: 0.9em;\n        text-align: center; } }\n    .site .dashboard-page .filtering .menu li a {\n      padding: 1rem;\n      color: #D32F2F; }\n    .site .dashboard-page .filtering .menu li.active a {\n      background: #D32F2F;\n      color: #FFFFFF; }\n    .site .dashboard-page .filtering .menu li.active:hover {\n      color: #FFFFFF; }\n    .site .dashboard-page .filtering .search {\n      position: relative;\n      margin-top: 5px;\n      padding-right: 0.935em;\n      padding-left: 0.935em; }\n    .site .dashboard-page .filtering .search-input {\n      text-indent: 30px; }\n    .site .dashboard-page .filtering .search-icon {\n      position: absolute;\n      top: 11px;\n      right: 28px;\n      font-size: 0.8em;\n      color: #cacaca; }\n    .site .dashboard-page .add-btn {\n      background-color: #D32F2F;\n      box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n      cursor: pointer;\n      border-radius: 50%;\n      font-size: 1em;\n      font-weight: bold;\n      line-height: 0;\n      outline: none;\n      transition: background-color .25s ease-out, color .25s ease-out;\n      padding: .85em;\n      color: #ffffff;\n      width: 3.5rem;\n      height: 3.5rem;\n      position: fixed;\n      bottom: 1rem; }\n      .site .dashboard-page .add-btn.big {\n        left: 27%; }\n      .site .dashboard-page .add-btn.small {\n        width: 2.5rem;\n        height: 2.5rem;\n        left: 5%; }\n      .site .dashboard-page .add-btn:hover {\n        background: #D50000; }\n      .site .dashboard-page .add-btn:focus {\n        outline: none; }\n    .site .dashboard-page .filter-status {\n      color: #424242;\n      font-size: 1rem;\n      text-align: center; }\n      .site .dashboard-page .filter-status i {\n        margin-left: 5px; }\n  .site .button.success[disabled]:hover {\n    background: #25a35a !important; }\n", ""]);
	
	// exports


/***/ },
/* 78 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWNjZDE2NTYxNzI5NTZlODg3NDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb290LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L21ha2VTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWR1eFRodW5rXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3JvdXRpbmdSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NsaWVudERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbG9hZGluZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2xhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzP2NhYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzPzM0MmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90b3BCYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzPzdiMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3M/MmRkNCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2V2ZW50SXRlbS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2Nzcz80YTA2Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3M/MjI5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZVRpdGxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VUaXRsZS5zY3NzPzQyYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wYWdlVGl0bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2FtZXNQYWdlLnNjc3M/YzFlYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhbWVzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ib29raW5nc1BhZ2Uuc2Nzcz9kMTlkIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYm9va2luZ3NQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzcz85NWY1Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGlzdHJpYnV0aW9uUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VkaXRVc2VySW5mb1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtRnJhbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZm9ybUZyYW1lLnNjc3M/MjVlMiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZUJvb2tpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cGRhdGVHYW1lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzP2ViOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYXBwLnNjc3M/OGJkYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcucHJvZC5qc29uIl0sIm5hbWVzIjpbImNvbmZpZyIsImNsaWVudERCIiwiaW5pdGlhbGl6ZSIsImZpcmViYXNlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdCIsInJlcXVpcmUiLCJSZWFjdFJlZHV4IiwibWFrZVN0b3JlIiwiQXBwIiwiUm9vdCIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyb3V0aW5nUmVkdWNlciIsInJlZHVjZXJzIiwicm91dGluZyIsImF1dGhEYXRhIiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwidXNlcnMiLCJldmVudHMiLCJib29raW5ncyIsIm1pZGRsZXdhcmUiLCJ1bmRlZmluZWQiLCJlcnJvclJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJtZXNzYWdlIiwiU1RBUlRfTE9BRElORyIsIlNUT1BfTE9BRElORyIsIlJFUE9SVF9FUlJPUiIsIlNFVF9BVVRIX0RBVEEiLCJTSUdOX09VVCIsIlVTRVJTX1JFQ0VJVkVEIiwiVVNFUl9SRU1PVkVEIiwiRVZFTlRTX1JFQ0VJVkVEIiwiRVZFTlRfUkVNT1ZFRCIsIkJPT0tJTkdTX1JFQ0VJVkVEIiwiQk9PS0lOR19DQU5DRUxFRCIsIk5BVklHQVRFX1RPIiwibG9hZGluZ1JlZHVjZXIiLCJ1c2Vyc1JlZHVjZXIiLCJfIiwibWVyZ2UiLCJvbWl0IiwidWlkIiwiZXZlbnRzUmVkdWNlciIsImV2ZW50SWQiLCJjbG9uZWRCb29raW5ncyIsImNsb25lRGVlcCIsInNpemUiLCJhdXRoRGF0YVJlZHVjZXIiLCJlbWFpbCIsInBob3RvVVJMIiwiaXNBZG1pbiIsIkNvbnN0YW50cyIsImNyZWF0ZVJvdXRpbmdEYXRhIiwicGFnZUlkIiwicGFyYW1zIiwiY3VycmVudCIsIlJPVVRJTkciLCJQQUdFUyIsIkFVVEgiLCJoaXN0b3J5Iiwicm91dGluZ0RhdGEiLCJjb25jYXQiLCJsZW5ndGgiLCJoaXN0b3J5V2l0aG91dExhc3QiLCJzbGljZSIsIkhPTUUiLCJVU0VSUyIsIkdBTUVTIiwiQk9PS0lOR1MiLCJESVNUUklCVVRJT04iLCJFRElUX1VTRVJfSU5GTyIsIlVQREFURV9CT09LSU5HIiwiVVBEQVRFX0dBTUUiLCJHQU1FIiwiU1RBVFVTIiwiQ0xPU0VEIiwiT1BFTl9GT1JfTUVNQkVSUyIsIk9QRU5fRk9SX0FMTCIsIkZVTExZX0JPT0tFRCIsIlVTRVIiLCJNQVhfU0VBU09OX1RJQ0tFVFMiLCJQSE9ORV9QUkVGSVhFUyIsIlNUQVRJT05TIiwiVEVMX0FWSVYiLCJNT0RJSU4iLCJEQVRFX0FORF9USU1FIiwiZGF5cyIsIm1vbnRocyIsInllYXJzIiwiaG91cnMiLCJtaW51dGVzIiwiRElTVFJJQlVUSU9OX01FVEhPRFMiLCJFTUFJTCIsIlNNUyIsIlJFQ0lQSUVOVFNfVFlQRVMiLCJBTEwiLCJNRU1CRVJTX09OTFkiLCJCT09LRURfVE9fRVZFTlQiLCJESVNUUklCVVRJT05fVFlQRVMiLCJURU1QTEFURSIsIkNVU1RPTSIsIlRFTVBMQVRFUyIsIkVWRU5UX09QRU5fRk9SX01FTUJFUlMiLCJFVkVOVF9PUEVOX0ZPUl9BTEwiLCJDSEFOR0VfRVZFTlRfREVUQUlMUyIsIlRFQU1TIiwiSEFQT0VMX0pFUlVTQUxFTSIsImxhYmVsIiwibG9nbyIsIlJlYWN0UmV1ZHgiLCJhdXRoQWN0aW9ucyIsIlNwaW5uZXIiLCJUb3BCYXIiLCJBdXRoUGFnZSIsIkhvbWVQYWdlIiwiVXNlcnNQYWdlIiwiR2FtZXNQYWdlIiwiQm9va2luZ3NQYWdlIiwiRGlzdHJpYnV0aW9uUGFnZSIsIkVkaXRVc2VySW5mb1BhZ2UiLCJVcGRhdGVCb29raW5nUGFnZSIsIlVwZGF0ZUdhbWVQYWdlIiwibWFwU3RhdGVUb1Byb3BzIiwiY3VycmVudFBhZ2VJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBdXRoRGF0YSIsImdldFBhZ2VDb21wb25lbnQiLCJnZXRQYWdlVG9SZW5kZXIiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiY29ubmVjdCIsInVzZXJBY3Rpb25zIiwiZXZlbnRBY3Rpb25zIiwiYm9va2luZ0FjdGlvbnMiLCJsb2FkaW5nQWN0aW9ucyIsImVycm9yQWN0aW9ucyIsIm5hdmlnYXRpb25BY3Rpb25zIiwiVHJhbnNsYXRpb25zIiwiQVVUSF9FUlJPUl9DT0RFU19NQVAiLCJFUlJPUl9NRVNTQUdFUyIsIklOVkFMSURfRU1BSUwiLCJXRUFLX1BBU1NXT1JEIiwiRU1BSUxfSU5fVVNFIiwiV1JPTkdfUEFTU1dPUkQiLCJVU0VSX05PVF9GT1VORCIsInNldEF1dGhEYXRhIiwiZmV0Y2hBcHBEYXRhIiwidXNlciIsInJlYWQiLCJ0aGVuIiwiZ2V0IiwiYWxsIiwiZmV0Y2hVc2VycyIsImZldGNoRXZlbnRzIiwiZmV0Y2hCb29raW5ncyIsInVzZXJTaWduZWRPdXQiLCJzaWduT3V0Iiwic3RhcnRMb2FkaW5nIiwicmVzZXQiLCJjYXRjaCIsInJlcG9ydEVycm9yIiwiZGJFcnJvciIsImNvZGUiLCJmaW5hbGx5Iiwic3RvcExvYWRpbmciLCJsb2dpbldpdGhGYWNlYm9vayIsImxvZ2luV2l0aEdvb2dsZSIsImxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJnZXRTdGF0ZSIsImdldExvZ2dlZEluVXNlciIsInVzZXJJbmZvIiwiaXNFbXB0eSIsImNvbnNvbGUiLCJlcnJvciIsImluaXRpYWxpemVBcHAiLCJzZXRJbiIsInBhdGgiLCJkYXRhIiwicmVzb2x2ZSIsInJlamVjdCIsImRhdGFiYXNlIiwicmVmIiwic2V0Iiwib25jZSIsInNuYXBzaG90IiwidmFsIiwicHVzaCIsInVuaXF1ZUtleSIsImtleSIsInVwZGF0ZSIsInJlbW92ZSIsInByb3ZpZGVyIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhSZWRpcmVjdCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXRSZWRpcmVjdFJlc3VsdCIsInJlc3VsdCIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJVU0VSX0lORk9fS0VZUyIsIlBBVEhfTUFQIiwiVVNFUlNfSU5GTyIsIlNFQVNPTl9USUNLRVRTIiwiYnVpbGRVc2VyIiwic2Vhc29uVGlja2V0cyIsImZldGNoQWxsVXNlcnMiLCJ1c2VyUmVhZFByb21pc2VzIiwidXNlcnNJbmZvIiwidHJhbnNmb3JtIiwiYWNjIiwiaW5mbyIsImZldGNoU2luZ2xlVXNlciIsInVzZXJzUmVtb3ZlZCIsInVzZXJzUmVjZWl2ZWQiLCJmZXRjaFByb21pc2UiLCJ1cGRhdGVVc2VyIiwidXNlclVwZGF0ZVByb21pc2VzIiwicGljayIsImhhcyIsInJlbW92ZVVzZXIiLCJ1c2VyUmVtb3ZlUHJvbWlzZXMiLCJtYXAiLCJ1c2VyUGF0aCIsIkdFTkVSQUwiLCJHQU1FX0lURU0iLCJCT09LIiwiRURJVF9CT09LSU5HIiwiQ0FOQ0VMX0JPT0tJTkciLCJVU0VSU19QQUdFIiwiVElUTEUiLCJOT19VU0VSU19GT1VORCIsIkZJTFRFUiIsIlNFQVJDSCIsIlRBQlMiLCJNRU1CRVJTIiwiUkVRVUVTVFMiLCJOT05fTUVNQkVSUyIsIkFVVEhfUEFHRSIsIkZJRUxEUyIsIlBBU1NXT1JEIiwiUEFTU1dPUkRfQUdBSU4iLCJTVUJNSVRfQlROIiwiTE9HSU4iLCJSRUdJU1RFUiIsIkZPUkdPVF9QQVNTV09SRCIsIkxJTktTIiwiR09fVE9fTE9HSU4iLCJHT19UT19SRUdJU1RFUiIsIkdPX1RPX0ZPUkdPVF9QQVNTV09SRCIsIkVSUk9SUyIsIk5PVF9TQU1FX1BBU1NXT1JEIiwiSE9NRV9QQUdFIiwiTk9fT1BFTl9HQU1FUyIsIk9QRU5fR0FNRVMiLCJDTE9TRURfR0FNRVMiLCJVUERBVEVfVVNFUl9JTkZPX1BBR0UiLCJGSVJTVF9OQU1FIiwiTEFTVF9OQU1FIiwiUEhPTkVfUFJFRklYIiwiUEhPTkVfTlVNQkVSIiwiRkFWT1JJVEVfUElDS1VQX1NUQVRJT04iLCJSRVFVRVNUX0ZPUl9NRU1CRVJTSElQIiwiVE9HR0xFIiwiWUVTIiwiTk8iLCJVUERBVEVfQk9PS0lOR19QQUdFIiwiUEFJRF9TRUFUUyIsIkVYVFJBX1NFQVRTIiwiUElDS1VQX1RPR0dMRSIsIkRST1BPRkZfVE9HR0xFIiwiUElDS1VQX1NUQVRJT05fRFJPUERPV05fREVGQVVMVCIsIkdBTUVTX1BBR0UiLCJPUEVOIiwiTk9fR0FNRVNfTEFCRUwiLCJCT09LSU5HU19QQUdFIiwiUElDS1VQIiwiRFJPUE9GRiIsIlVQREFURV9HQU1FX1BBR0UiLCJHQU1FX0xBQkVMIiwiR0FNRV9QTEFDRUhPTERFUiIsIkRBVEVfTEFCRUwiLCJUSU1FIiwiR0FNRV9TVEFUVVMiLCJESVNUUklCVVRJT05fUEFHRSIsIkRJU1RSSUJVVElPTl9NRVRIT0QiLCJDT05URU5UIiwiRk9STV9GUkFNRSIsIlNVQk1JVCIsIlJFTU9WRSIsIkVWRU5UX0tFWVMiLCJFVkVOVFNfUEFUSCIsImV2ZW50UmVtb3ZlZCIsImV2ZW50c1JlY2VpdmVkIiwiY3JlYXRlRXZlbnQiLCJldmVudCIsInVwZGF0ZUV2ZW50IiwiZXZlbnRUb1VwZGF0ZSIsInJlbW92ZUV2ZW50IiwiQk9PS0lOR19EQVRBX0tFWVMiLCJCT09LSU5HU19QQVRIIiwiZmV0Y2hVc2VyQm9va2luZ3MiLCJ1c2VyQm9va2luZ3MiLCJmZXRjaEFsbEJvb2tpbmdzIiwiYm9va2luZ3NSZWNlaXZlZCIsImJvb2tpbmdzQ2FuY2VsZWQiLCJ1cGRhdGVCb29raW5nIiwiYm9va2luZ0RhdGEiLCJib29raW5nRGF0YVRvVXBkYXRlIiwiY2FuY2VsQm9va2luZyIsIm5hdmlnYXRlVG8iLCJuYXZpZ2F0ZUJhY2siLCJyZXBsYWNlIiwiY2xhc3NOYW1lcyIsIkxvZ28iLCJpc0xvYWRpbmciLCJvdmVybGF5Q2xhc3MiLCJvdmVybGF5IiwiaGlkZSIsImJvb2wiLCJ3aWR0aCIsIm9wYWNpdHkiLCJudW1iZXIiLCJoZWlnaHQiLCJyb3V0aW5nQWN0aW9ucyIsIm1lbnVQYWdlc0lkcyIsImN1cnJlbnRVc2VyIiwiZ2V0VXNlclRpdGxlIiwiZmlyc3ROYW1lIiwiY3JlYXRlSGVhZGVyIiwiYmluZCIsImNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSIsInRvZ2dsZU1lbnVWaXNpYmlsaXR5IiwiY3JlYXRlTWVudSIsImlzTWVudVZpc2libGUiLCJjcmVhdGVEZXNrdG9wTWVudUl0ZW0iLCJpdGVtQ2xhc3NlcyIsImFjdGl2ZSIsImJ1dHRvbiIsInNtYWxsIiwiY3JlYXRlTW9iaWxlTWVudUl0ZW0iLCJvbk1vYmlsZU1lbnVDbGlja2VkIiwiY3JlYXRlRGVza3RvcE1lbnUiLCJjcmVhdGVNb2JpbGVNZW51Iiwic2V0U3RhdGUiLCJsb2dpbldpdGhFbWFpbCIsInNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQiLCJpc0xvZ2luTW9kZSIsImF1dGhNb2RlIiwiaXNSZWdpc3Rlck1vZGUiLCJpc0Zvcm1WYWxpZCIsInBhc3N3b3JkQWdhaW4iLCJjcmVhdGVMb2dvIiwiY3JlYXRlU29jaWFsQnV0dG9uc1NlY3Rpb24iLCJjcmVhdGVFcnJvclNlY3Rpb24iLCJjcmVhdGVJbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZXRCdXR0b25MYWJlbCIsImNyZWF0ZVN1Ym1pdEJ1dHRvbiIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJjcmVhdGVMaW5rc1NlY3Rpb24iLCJuYXZUb0xvZ2luIiwibmF2VG9SZWdpc3RlciIsIm5hdlRvRm9yZ290UGFzc3dvcmQiLCJjcmVhdGVMb2dpblNjcmVlbkxpbmtzIiwiY3JlYXRlTk9OTG9naW5TY3JlZW5MaW5rcyIsImUiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImlzRXF1YWwiLCJvbkF1dGhNb2RlQ2hhbmdlIiwiY3JlYXRlTmF2RnVuYyIsIkV2ZW50SXRlbSIsImdhbWVzIiwibmF2aWdhdGVUb1VwZGF0ZUJvb2tpbmciLCJnYW1lSWQiLCJwYXJzZUV2ZW50RGF0ZSIsImdhbWUiLCJEYXRlIiwicGFyc2VJbnQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJpc0Z1dHVyZUV2ZW50IiwiZXZlbnREYXRlIiwibm93IiwiZ2V0Q2xvc2VkR2FtZXNBcnIiLCJjaGFpbiIsIm9taXRCeSIsInN0YXR1cyIsInNvcnRCeSIsImdhbWVEYXRhIiwiZ2V0T3BlbkdhbWVzQXJyIiwiY3JlYXRlTm9PcGVuR2FtZXNNZXNzYWdlU2VjdGlvbiIsImNyZWF0ZUdhbWVzTGlzdHMiLCJvcGVuR2FtZXNBcnIiLCJjbG9zZWRHYW1lc0FyciIsIm9uQm9va2luZyIsIm9uQ2FuY2VsQm9va2luZyIsImJpbmRPbkdhbWVJdGVtQ2xpY2siLCJmbiIsImNyZWF0ZU9wZW5HYW1lc0xpc3QiLCJjcmVhdGVDbG9zZWRHYW1lc0xpc3QiLCJpc0Jvb2tpbmdFbmFibGVkIiwib3duUHJvcHMiLCJob21lVGVhbSIsImF3YXlUZWFtIiwidHlwZUlkIiwiZGF0ZSIsInRpbWUiLCJob3VyIiwibWludXRlIiwiaXNCb29raW5nQWxsb3dlZCIsImlzQm9va2VkIiwiaGFzSW4iLCJjcmVhdGVUZWFtTG9nb3MiLCJob21lIiwiYXdheSIsImNyZWF0ZUV2ZW50VGltZUFuZERhdGUiLCJpc09wZW5Gb3JCb29raW5nIiwiY3JlYXRlRnVsbHlCb29rZWRMYWJlbCIsImNyZWF0ZUJvb2tpbmdCdXR0b24iLCJib29rQnV0dG9uIiwiZWRpdEJvb2tpbmdCdXR0b24iLCJub29wIiwiY3JlYXRlQm9va2luZ0NhbmNlbGxhdGlvbkJ1dHRvbiIsImNyZWF0ZUFjdGlvbnNCdXR0b25zIiwiaXNGdWxseUJvb2tlZCIsInNoYXBlIiwiTGlzdEl0ZW0iLCJQYWdlVGl0bGUiLCJGSUxURVJTIiwicXVlcnkiLCJmaWx0ZXIiLCJzZWFyY2giLCJuYXZUb0VkaXRVc2VyIiwiY2hhbmdlRmlsdGVyIiwiY2hhbmdlU2VhcmNoUXVlcnkiLCJkZWJvdW5jZSIsImNvdW50TWVtYmVycyIsInBpY2tCeSIsInBpY2tVc2Vyc0Z1bmN0aW9ucyIsInZhbHVlcyIsInN1bUJ5IiwiY291bnRSZXF1ZXN0cyIsImNvdW50Tm9uTWVtYmVycyIsImNvdW50QWNjb3JkaW5nVG9GaWx0ZXJzIiwibGFzdE5hbWUiLCJnZXRVc2VyU3VidGl0bGVzIiwicGhvbmVQcmVmaXgiLCJwaG9uZU51bWJlciIsImdldFVzZXJJbWFnZSIsInJlcXVlc3RGb3JNZW1iZXJzaGlwIiwiZ2V0VmlzaWJsZVVzZXJzIiwic2VhcmNoUXVlcnkiLCJzdGFydHNXaXRoIiwiY3JlYXRlRmlsdGVyIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiaGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2UiLCJmaWx0ZXJDb3VudHMiLCJjcmVhdGVGaWx0ZXJUYWJzIiwiY3JlYXRlVGV4dElucHV0IiwiY3JlYXRlVXNlcnNMaXN0IiwidXNlcnNBcnIiLCJvblVzZXJDbGljayIsIm9uSXRlbUNsaWNrIiwiaXRlbXMiLCJ1c2VyRGVmIiwiY3JlYXRlTm9Vc2Vyc01lc3NhZ2UiLCJuZXh0UHJvcHMiLCJ2aXNpYmxlVXNlcnNBcnIiLCJvbkNsaWNrIiwiaW1hZ2VTcmMiLCJ0aXRsZSIsInN1YnRpdGxlcyIsInN1YnRpdGxlIiwiYXJyYXkiLCJlZGl0R2FtZSIsImNyZWF0ZUdhbWUiLCJnZXRWaXNpYmxlR2FtZXMiLCJnZXRPcGVuR2FtZXMiLCJnZXRDbG9zZWRHYW1lcyIsImdldEdhbWVTdWJ0aXRsZXMiLCJjcmVhdGVUYWJzIiwib25GaWx0ZXJDaGFuZ2UiLCJvblRhYkNsaWNrIiwic2VsZWN0ZWRGaWx0ZXIiLCJjcmVhdGVOb0dhbWVzTWVzc2FnZSIsImNyZWF0ZVBsdXNCdXR0b24iLCJvbkNyZWF0ZUdhbWUiLCJvbkZpbHRlckNoYW5nZWQiLCJ2aXNpYmxlR2FtZXMiLCJmaW5kS2V5IiwiZWRpdEJvb2tpbmciLCJjaGFuZ2VHYW1lSWQiLCJnZXRCb29raW5nVGl0bGUiLCJnZXRCb29raW5nUGhvbmUiLCJnZXRCb29raW5nU3VidGl0bGVzIiwiYm9va2luZyIsInBhaWRTZWF0cyIsImV4dHJhU2VhdHMiLCJwaWNrVXAiLCJkcm9wT2ZmIiwiZ2V0Qm9va2luZ0ltYWdlIiwiZ2V0UGlja1VwTWFwIiwidGx2IiwibW9kaWluIiwiZ2V0RHJvcE9mZk1hcCIsImdldFZpc2libGVCb29raW5ncyIsImJvb2tpbmdGb3JFdmVudE1hcCIsIm1hcFZhbHVlcyIsImlzVW5kZWZpbmVkIiwiY291bnRQaWNrdXBzIiwidmlzaWJsZUJvb2tpbmdzIiwidGx2UGlja1Vwc1BhaWQiLCJ0bHZQaWNrVXBzRXh0cmEiLCJtb2RpaW5QaWNrVXBzUGFpZCIsIm1vZGlpblBpY2tVcHNFeHRyYSIsImNvdW50RHJvcE9mZnMiLCJ0bHZEcm9wT2Zmc1BhaWQiLCJ0bHZEcm9wT2Zmc0V4dHJhIiwibW9kaWluRHJvcE9mZnNQYWlkIiwibW9kaWluRHJvcE9mZnNFeHRyYSIsImNyZWF0ZVBhZ2VUaXRsZSIsImNyZWF0ZUZpbHRlclNlY3Rpb24iLCJvbkdhbWVJZENoYW5nZSIsInRhYiIsIm9uU2VsZWN0Q2hhbmdlIiwiY3JlYXRlQm9va2luZ1RhYmxlRm9yUHJpbnQiLCJ0bHZCb29raW5ncyIsIm1vZGlpbkJvb2tpbmdzIiwiaXNQaWNrVXAiLCJjcmVhdGVUaXRsZVJvdyIsImNyZWF0ZVRMVkJvb2tpbmdzVGl0bGUiLCJjcmVhdGVUTFZCb29raW5nc1Jvd3MiLCJjcmVhdGVNb2RpaW5Cb29raW5nc1RpdGxlIiwiY3JlYXRlTW9kaWluQm9va2luZ3NSb3dzIiwiY3JlYXRlUGlja1Vwc0xpc3QiLCJvbkJvb2tpbmdDbGljayIsInRsdlBpY2tVcCIsIm1vZGlpblBpY2tVcCIsInRsdlBpY2tVcHNJdGVtcyIsIm1pZGlpblBpY2tVcHNJdGVtcyIsImNyZWF0ZVRsdlBpY2t1cHNMaXN0IiwiY3JlYXRlTW9kaWluUGlja3Vwc0xpc3QiLCJjcmVhdGVEcm9wT2ZmTGlzdCIsInRsdkRyb3BPZmYiLCJtb2RpaW5Ecm9wT2ZmIiwidGx2RHJvcE9mZkl0ZW1zIiwibWlkaWluRHJvcE9mZkl0ZW1zIiwiY3JlYXRlVGx2RHJvcE9mZkxpc3QiLCJjcmVhdGVNb2RpaW5Ecm9wT2ZmTGlzdCIsImlzUmVxdXJpZWQiLCJkaXN0cmlidXRpb25BY3Rpb25zIiwic2VuZFRlbXBsYXRlRW1haWwiLCJyZWNpcGllbnRzIiwidGVtcGxhdGVJZCIsInN1YnN0aXR1dGlvbnMiLCJzZW5kQ3VzdG9tRW1haWwiLCJzdWJqZWN0IiwiY29udGVudCIsInNlbmRTTVMiLCJnZXRJbml0aWFsU3RhdGUiLCJkaXN0cmlidXRpb25NZXRob2QiLCJyZWNpcGllbnRzVHlwZSIsImRpc3RyaWJ1dGlvblR5cGUiLCJsYXN0Iiwia2V5cyIsImdldE1lbWJlcnNVc2Vyc09ubHkiLCJnZXRCb29rZWRVc2Vyc09ubHkiLCJnZXRSZWNpcGllbnRzIiwicmVjaXBpZW50c1VzZXJzIiwic3Vic2NyaWJlTWFpbCIsImdldFVzZXJzRW1haWxzIiwiZ2V0RXZlbnRTdWJzdGl0dXRpb25zIiwicHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCIsImdldFVzZXJzUGhvbmVOdW1iZXJzIiwiY3JlYXRlRGlzdHJpYnV0aW9uTWV0aG9kSW5wdXQiLCJvbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZSIsImNyZWF0ZVJlY2lwaWVudHNUeXBlSW5wdXQiLCJvblJlY2lwaWVudHNUeXBlQ2hhbmdlIiwiY3JlYXRlRGlzdHJpYnV0aW9uVHlwZUlucHV0Iiwib25EaXN0cmlidXRpb25UeXBlQ2hhbmdlIiwiY3JlYXRlVGVtcGxhdGVTZWxlY3Rpb24iLCJvblRlbXBsYXRlSWRDaGFuZ2UiLCJjcmVhdGVHYW1lc1NlbGVjdGlvbiIsIm9uR2FtZUNoYW5nZSIsIm9wdGlvbnMiLCJjcmVhdGVDdXN0b21UaXRsZSIsIm9uU3ViamVjdENoYW5nZWQiLCJjcmVhdGVDdXN0b21Db250ZW50Iiwib25Db250ZW50Q2hhbmdlZCIsInNob3VsZFNob3dEaXN0cmlidXRpb25UeXBlSW5wdXQiLCJzaG91bGRTaG93VGVtcGxhdGVTZWxlY3Rpb24iLCJzaG91bGRDcmVhdGVDdXN0b21UaXRsZSIsInNob3VsZFNob3dDdXN0b21Db250ZW50IiwiRU1BSUxTIiwidG8iLCJVc2VyRm9ybSIsInVpZFRvRWRpdCIsImdvSG9tZUFmdGVyRWRpdGluZyIsIm5hdmlnYXRlSG9tZSIsIkVkaXRvclVzZXJJbmZvUGFnZSIsIm9uRm9ybUNsb3NlIiwiRm9ybUZyYW1lIiwiZW1wdHlVc2VyIiwic3RhdGlvbiIsInN1YnNjcmliZVNNUyIsImdldEVtcHR5VXNlckluZm8iLCJhc3NpZ24iLCJpc0FkbWluTW9kZSIsImFsbG93VXNlclJlbW92ZSIsImNyZWF0ZUFkbWluU2VjdGlvbiIsIm9uTnVtYmVyQ2hhbmdlIiwidGltZXMiLCJpIiwiY3JlYXRlVXNlck5hbWVJbnB1dHMiLCJvblRleHRDaGFuZ2UiLCJjcmVhdGVFbWFpbElucHV0IiwiY3JlYXRlUGhvbmVOdW1iZXJJbnB1dHMiLCJwcmVmaXgiLCJjcmVhdGVQaWNrdXBTdGF0aW9uUm93Iiwib25Cb29sZWFuQ2hhbmdlIiwiY3JlYXRlUGlja1VwU3RhdGlvbklucHV0IiwiY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCIsImRpc3BsYXkiLCJjcmVhdGVEaXN0cmlidXRpb25JbnB1dHMiLCJoYXNBbGxSZXF1aXJlZEluZm8iLCJyZXF1aXJlZEluZm8iLCJzb21lIiwiaGFzVmFsaWRQaG9uZU51bWJlciIsImhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkiLCJvbktleVByZXNzIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJpc0Z1bmN0aW9uIiwib25DbG9zZSIsIm9uUmVtb3ZlIiwiY2xvbmUiLCJjcmVhdGVSZW1vdmVCdXR0b24iLCJjaGlsZHJlbiIsImVtcHR5Qm9va2luZyIsInJvdXRpbmdQYXJhbXMiLCJjcmVhdGVQYXNzZW5nZXJzU2VjdGlvbiIsIm9uUGFpZFNlYXRDaGFuZ2UiLCJvbkV4dHJhU2VhdENoYW5nZSIsImNyZWF0ZVBhaWRTZWF0c0lucHV0IiwiY3JlYXRlRXh0cmFTZWF0c0lucHV0IiwiY3JlYXRlUGlja3VwU2VjdGlvbiIsInBpY2tVcEVuYWJsZWQiLCJwaWNrVXBTdGF0aW9uIiwidG9nZ2xlUGlja1VwIiwib25QaWNrdXBTdGF0aW9uQ2hhbmdlIiwiY3JlYXRlRHJvcG9mZlNlY3Rpb24iLCJkcm9wT2ZmRW5hYmxlZCIsImRyb3BPZmZTdGF0aW9uIiwidG9nZ2xlRHJvcE9mZiIsIm9uRHJvcE9mZlN0YXRpb25DaGFuZ2UiLCJvblBpY2tVcFN0YXRpb25DaGFuZ2UiLCJib29raW5nVG9VcGRhdGUiLCJib29raW5nSW5pdGlhbFN0YXRlIiwiZGVmYXVsdHMiLCJERUZBVUxUX0dBTUVfTE9HTyIsImVtcHR5RXZlbnQiLCJwYXJzZURhdGVWYWx1ZSIsImpvaW4iLCJwYXJzZVRpbWVWYWx1ZSIsInVwZGF0ZUdhbWUiLCJyZW1vdmVHYW1lIiwiY3JlYXRlR2FtZUltYWdlIiwiY3JlYXRlR2FtZVRpdGxlU2VjdGlvbiIsIm9uVHlwZUlkQ2hhbmdlIiwidGVhbURhdGEiLCJpZCIsImNyZWF0ZUluZm9XaXRob3V0U3VwcG9ydGVkSW5wdXRzIiwib25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZSIsImNyZWF0ZUluZm9XaXRoU3VwcG9ydGVkSW5wdXRzIiwib25EYXRlQ2hhbmdlIiwib25UaW1lQ2hhbmdlIiwiY3JlYXRlR2FtZVN0YXR1c1NlY3Rpb24iLCJvbkdhbWVTdGF0dXNDaGFuZ2UiLCJzcGxpdCIsImRhdGVJbnB1dFN1cHBvcnRlZCIsInRpbWVJbnB1dFN1cHBvcnRlZCIsImNoZWNrSWZIdG1sNVN1cHBvcnRlZCIsInN1cHBvcnRlZElucHV0VHlwZXMiLCJ0ZXN0UmVzdWx0IiwidGVzdFN0cmluZyIsImVhY2giLCJpbnB1dFR5cGUiLCJpbnB1dCIsImlzU3VwcG9ydGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztB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dUIsc0JBQXNCLHVCQUF1Qix3QkFBd0IscUJBQXFCLEVBQUUsNENBQTRDLG9CQUFvQixFQUFFLDhDQUE4Qyx3QkFBd0IseUJBQXlCLG1CQUFtQixFQUFFLDhDQUE4Qyw4QkFBOEIsRUFBRSw4Q0FBOEMsd0JBQXdCLEVBQUUsNENBQTRDLHVCQUF1Qix3QkFBd0IsMkJBQTJCLEVBQUUsZ0RBQWdELDJCQUEyQixFQUFFLDJDQUEyQyxxQ0FBcUMsRUFBRTs7QUFFOWdHOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhY2NkMTY1NjE3Mjk1NmU4ODc0MyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSb290IGZyb20gJy4vY29tcG9uZW50cy9yb290JztcblxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJ2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuL3V0aWxzL2NsaWVudERCJztcblxuY2xpZW50REIuaW5pdGlhbGl6ZShjb25maWcuZmlyZWJhc2UpO1xuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSb290KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgbWFrZVN0b3JlID0gcmVxdWlyZSgnLi4vcmVkdXgvbWFrZVN0b3JlJyk7XG5cbmNvbnN0IEFwcCA9IHJlcXVpcmUoJy4vYXBwJyk7XG5cbmNsYXNzIFJvb3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdFJlZHV4LlByb3ZpZGVyIHN0b3JlPXttYWtlU3RvcmUoKX0+XG4gICAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9SZWFjdFJlZHV4LlByb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb290O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jvb3QuanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RSZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGVycm9yUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2Vycm9yUmVkdWNlcic7XG5pbXBvcnQgbG9hZGluZ1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlcic7XG5pbXBvcnQgdXNlcnNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvdXNlcnNSZWR1Y2VyJztcbmltcG9ydCBldmVudHNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvZXZlbnRzUmVkdWNlcic7XG5pbXBvcnQgYm9va2luZ3NSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYm9va2luZ3NSZWR1Y2VyJztcbmltcG9ydCBhdXRoRGF0YVJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9hdXRoRGF0YVJlZHVjZXInO1xuXG5jb25zdCByb3V0aW5nUmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcnMvcm91dGluZ1JlZHVjZXInKTtcblxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICByb3V0aW5nOiByb3V0aW5nUmVkdWNlcixcbiAgICBhdXRoRGF0YTogYXV0aERhdGFSZWR1Y2VyLFxuICAgIGVycm9yTXNnOiBlcnJvclJlZHVjZXIsXG4gICAgbG9hZGluZzogbG9hZGluZ1JlZHVjZXIsXG4gICAgdXNlcnM6IHVzZXJzUmVkdWNlcixcbiAgICBldmVudHM6IGV2ZW50c1JlZHVjZXIsXG4gICAgYm9va2luZ3M6IGJvb2tpbmdzUmVkdWNlclxuICB9KTtcblxuICBjb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKFxuICAgIHRodW5rXG4gICk7XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB1bmRlZmluZWQsIG1pZGRsZXdhcmUpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvbWFrZVN0b3JlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWR1eDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU1RBUlRfTE9BRElORywgUkVQT1JUX0VSUk9SIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9ICcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcnJvclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUE9SVF9FUlJPUjpcbiAgICAgIHJldHVybiBhY3Rpb24ubWVzc2FnZTtcbiAgICBjYXNlIFNUQVJUX0xPQURJTkc6XG4gICAgICByZXR1cm4gJyc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJleHBvcnQgY29uc3QgU1RBUlRfTE9BRElORyA9ICdTVEFSVF9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBTVE9QX0xPQURJTkcgPSAnU1RPUF9MT0FESU5HJztcblxuZXhwb3J0IGNvbnN0IFJFUE9SVF9FUlJPUiA9ICdSRVBPUlRfRVJST1InO1xuXG5leHBvcnQgY29uc3QgU0VUX0FVVEhfREFUQSA9ICdTRVRfQVVUSF9EQVRBJztcbmV4cG9ydCBjb25zdCBTSUdOX09VVCA9ICdTSUdOX09VVCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSU19SRUNFSVZFRCA9ICdVU0VSU19SRUNFSVZFRCc7XG5leHBvcnQgY29uc3QgVVNFUl9SRU1PVkVEID0gJ1VTRVJfUkVNT1ZFRCc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVFNfUkVDRUlWRUQgPSAnRVZFTlRTX1JFQ0VJVkVEJztcbmV4cG9ydCBjb25zdCBFVkVOVF9SRU1PVkVEID0gJ0VWRU5UX1JFTU9WRUQnO1xuXG5leHBvcnQgY29uc3QgQk9PS0lOR1NfUkVDRUlWRUQgPSAnQk9PS0lOR1NfUkVDRUlWRUQnO1xuZXhwb3J0IGNvbnN0IEJPT0tJTkdfQ0FOQ0VMRUQgPSAnQk9PS0lOR19DQU5DRUxFRCc7XG5cbmV4cG9ydCBjb25zdCBOQVZJR0FURV9UTyA9ICdOQVZJR0FURV9UTyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBTVE9QX0xPQURJTkcgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRpbmdSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTVEFSVF9MT0FESU5HOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSBTVE9QX0xPQURJTkc6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFVTRVJTX1JFQ0VJVkVELCBVU0VSX1JFTU9WRUQsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2Vyc1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVTRVJTX1JFQ0VJVkVEOlxuICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24udXNlcnMpO1xuICAgIGNhc2UgVVNFUl9SRU1PVkVEOlxuICAgICAgcmV0dXJuIF8ub21pdChzdGF0ZSwgYWN0aW9uLnVpZCk7XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJfXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEVWRU5UU19SRUNFSVZFRCwgRVZFTlRfUkVNT1ZFRCwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50c1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEVWRU5UU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLmV2ZW50cyk7XG4gICAgY2FzZSBFVkVOVF9SRU1PVkVEOlxuICAgICAgcmV0dXJuIF8ub21pdChzdGF0ZSwgYWN0aW9uLmV2ZW50SWQpO1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXZlbnRzUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEJPT0tJTkdTX1JFQ0VJVkVELCBCT09LSU5HX0NBTkNFTEVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQk9PS0lOR1NfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi5ib29raW5ncyk7XG4gICAgY2FzZSBCT09LSU5HX0NBTkNFTEVEOiB7XG4gICAgICBjb25zdCBjbG9uZWRCb29raW5ncyA9IF8uY2xvbmVEZWVwKHN0YXRlKTtcbiAgICAgIGRlbGV0ZSBjbG9uZWRCb29raW5nc1thY3Rpb24udWlkXVthY3Rpb24uZXZlbnRJZF07XG4gICAgICBpZiAoXy5zaXplKGNsb25lZEJvb2tpbmdzW2FjdGlvbi51aWRdKSA9PT0gMCkge1xuICAgICAgICBkZWxldGUgY2xvbmVkQm9va2luZ3NbYWN0aW9uLnVpZF07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmVkQm9va2luZ3M7XG4gICAgfVxuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYm9va2luZ3NSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU0VUX0FVVEhfREFUQSwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aERhdGFSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQVVUSF9EQVRBOlxuICAgICAgcmV0dXJuIHsgdWlkOiBhY3Rpb24udWlkLCBlbWFpbDogYWN0aW9uLmVtYWlsLCBwaG90b1VSTDogYWN0aW9uLnBob3RvVVJMLCBpc0FkbWluOiBhY3Rpb24uaXNBZG1pbiB9O1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aERhdGFSZWR1Y2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWR1eFRodW5rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVkdXhUaHVua1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gY3JlYXRlUm91dGluZ0RhdGEocGFnZUlkLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHsgcGFnZUlkLCBwYXJhbXM6IHBhcmFtcyB8fCB7fSB9XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY3VycmVudDogY3JlYXRlUm91dGluZ0RhdGEoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQVVUSCwge30pLFxuICBoaXN0b3J5OiBbXG4gICAgY3JlYXRlUm91dGluZ0RhdGEoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQVVUSCwge30pXG4gIF1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN0YXRlID0gc3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xuICBhY3Rpb24gPSBhY3Rpb24gfHwge307XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ05BVklHQVRFX1RPJzoge1xuICAgICAgY29uc3Qgcm91dGluZ0RhdGEgPSBjcmVhdGVSb3V0aW5nRGF0YShhY3Rpb24ucGFnZUlkLCBhY3Rpb24ucGFyYW1zKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudDogcm91dGluZ0RhdGEsXG4gICAgICAgIGhpc3Rvcnk6IHN0YXRlLmhpc3RvcnkuY29uY2F0KFsgcm91dGluZ0RhdGEgXSlcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ05BVklHQVRFX0JBQ0snOiB7XG4gICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnlXaXRob3V0TGFzdCA9IHN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgLTEpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGN1cnJlbnQ6IGhpc3RvcnlXaXRob3V0TGFzdC5zbGljZSgtMSlbMF0sXG4gICAgICAgICAgaGlzdG9yeTogaGlzdG9yeVdpdGhvdXRMYXN0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnUkVQTEFDRV9ST1VUSU5HJzoge1xuICAgICAgY29uc3QgaGlzdG9yeVdpdGhvdXRMYXN0ID0gc3RhdGUuaGlzdG9yeS5zbGljZSgwLCAtMSk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gY3JlYXRlUm91dGluZ0RhdGEoYWN0aW9uLnBhZ2VJZCB8fCBzdGF0ZS5jdXJyZW50LnBhZ2VJZCwgYWN0aW9uLnBhcmFtcyB8fCBzdGF0ZS5jdXJyZW50LnBhcmFtcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICBoaXN0b3J5OiBoaXN0b3J5V2l0aG91dExhc3QuY29uY2F0KFtjdXJyZW50XSlcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ1JFU0VUX1JPVVRJTkcnOiB7XG4gICAgICBjb25zdCByb3V0aW5nRGF0YSA9IGNyZWF0ZVJvdXRpbmdEYXRhKGFjdGlvbi5wYWdlSWQsIGFjdGlvbi5wYXJhbXMpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiByb3V0aW5nRGF0YSxcbiAgICAgICAgaGlzdG9yeTogWyByb3V0aW5nRGF0YSBdXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvcm91dGluZ1JlZHVjZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgUk9VVElORzoge1xuICAgIFBBR0VTOiB7XG4gICAgICBIT01FOiAnaG9tZScsXG4gICAgICBBVVRIOiAnYXV0aCcsXG4gICAgICBVU0VSUzogJ3VzZXJzJyxcbiAgICAgIEdBTUVTOiAnZ2FtZXMnLFxuICAgICAgQk9PS0lOR1M6ICdib29raW5ncycsXG4gICAgICBESVNUUklCVVRJT046ICdkaXN0cmlidXRpb24nLFxuICAgICAgRURJVF9VU0VSX0lORk86ICdlZGl0VXNlckluZm8nLFxuICAgICAgVVBEQVRFX0JPT0tJTkc6ICd1cGRhdGVCb29raW5nJyxcbiAgICAgIFVQREFURV9HQU1FOiAndXBkYXRlR2FtZSdcbiAgICB9XG4gIH0sXG4gIEdBTUU6IHtcbiAgICBTVEFUVVM6IHtcbiAgICAgIENMT1NFRDogJ2Nsb3NlZCcsXG4gICAgICBPUEVOX0ZPUl9NRU1CRVJTOiAnb3BlbkZvck1lbWJlcnMnLFxuICAgICAgT1BFTl9GT1JfQUxMOiAnb3BlbkZvckFsbCcsXG4gICAgICBGVUxMWV9CT09LRUQ6ICdmdWxseUJvb2tlZCdcbiAgICB9XG4gIH0sXG4gIFVTRVI6IHtcbiAgICBNQVhfU0VBU09OX1RJQ0tFVFM6IDcsXG4gICAgUEhPTkVfUFJFRklYRVM6IFsnMDUwJywgJzA1MicsICcwNTMnLCAnMDU0JywgJzA1NScsICcwNTcnLCAnMDU4J10sXG4gIH0sXG4gIFNUQVRJT05TOiB7XG4gICAgVEVMX0FWSVY6ICd0bHYnLFxuICAgIE1PRElJTjogJ21vZGlpbidcbiAgfSxcbiAgREFURV9BTkRfVElNRToge1xuICAgIGRheXM6IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnLCAnMjQnLCAnMjUnLCAnMjYnLCAnMjcnLCAnMjgnLCAnMjknLCAnMzAnLCAnMzEnXSxcbiAgICBtb250aHM6IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXSxcbiAgICB5ZWFyczogWycxNicsICcxNyddLFxuICAgIGhvdXJzOiBbJzAwJywgJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJ10sXG4gICAgbWludXRlczogWycwMCcsICcwNScsICcxMCcsICcxNScsICcyMCcsICcyNScsICczMCcsICczNScsICc0MCcsICc0NScsICc1MCcsICc1NSddXG4gIH0sXG4gIERJU1RSSUJVVElPTjoge1xuICAgIERJU1RSSUJVVElPTl9NRVRIT0RTOiB7XG4gICAgICBFTUFJTDogJ2VtYWlsJyxcbiAgICAgIFNNUzogJ3NtcydcbiAgICB9LFxuICAgIFJFQ0lQSUVOVFNfVFlQRVM6IHtcbiAgICAgIEFMTDogJ2FsbCcsXG4gICAgICBNRU1CRVJTX09OTFk6ICdtZW1iZXJzT25seScsXG4gICAgICBCT09LRURfVE9fRVZFTlQ6ICdib29rZWRUb0V2ZW50J1xuICAgIH0sXG4gICAgRElTVFJJQlVUSU9OX1RZUEVTOiB7XG4gICAgICBURU1QTEFURTogJ3RlbXBsYXRlJyxcbiAgICAgIENVU1RPTTogJ2N1c3RvbSdcbiAgICB9LFxuICAgIFRFTVBMQVRFUzoge1xuICAgICAgRVZFTlRfT1BFTl9GT1JfTUVNQkVSUzogJzRmYWI2YjkyLWJmNjEtNDhmMS1iMTNiLWJjNzAyZWQ3ODY5NScsXG4gICAgICBFVkVOVF9PUEVOX0ZPUl9BTEw6ICdkYmUzZTBlNC1iYjBlLTQxYWQtYmYxMi01YmU2NGEzMGYzYjcnLFxuICAgICAgQ0hBTkdFX0VWRU5UX0RFVEFJTFM6ICcxNzBmY2Q0Zi1kZjJlLTQ0ZGQtYjc2MC02OTNkMDRmZGQwN2MnXG4gICAgfVxuICB9LFxuICBURUFNUzoge1xuICAgIEhBUE9FTF9KRVJVU0FMRU06IHtcbiAgICAgIGxhYmVsOiAn15TXpNeV16LXnCDXmdeo15XXqdec15nXnScsXG4gICAgICBsb2dvOiAnaHR0cDovL2hhcG9lbC5jby5pbC9zaXRlcy9kZWZhdWx0L2ZpbGVzL2xvZ28xMjB4MTIwLnBuZydcbiAgICB9LFxuICAgICdoYXBvZWwtdGx2Jzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2hhcG9lbHRhLnBuZycsXG4gICAgICBsYWJlbDogJ9eU16TXldei15wg16rXnCDXkNeR15nXkSdcbiAgICB9LFxuICAgICdtYWNjYWJpLXRsdic6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19tYWNjYWJpLnBuZycsXG4gICAgICBsYWJlbDogJ9ee15vXkdeZINeq15wg15DXkdeZ15EnXG4gICAgfSxcbiAgICAnaGVyemVsaXlhJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3NoYXJvbi5wbmcnLFxuICAgICAgbGFiZWw6ICfXkdeg15kg15TXqNem15zXmdeUJ1xuICAgIH0sXG4gICAgJ2tpcnlhdC1nYXQnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvSW1hZ2VzL3RlYW1zL2JpZ0dhdC5wbmcnLFxuICAgICAgbGFiZWw6ICfXnteb15HXmSDXp9eo15nXqiDXkteqJ1xuICAgIH0sXG4gICAgJ2dpbGJvYSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19HYWxpbC5wbmcnLFxuICAgICAgbGFiZWw6ICfXktec15nXnC/Xktec15HXldeiJ1xuICAgIH0sXG4gICAgJ25haGFyaXlhJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX25haGFyaWEucG5nJyxcbiAgICAgIGxhYmVsOiAn16LXmdeo15XXoNeZINeg15TXqNeZ15QnXG4gICAgfSxcbiAgICAnaG9sb24nOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2FydGljbGVzL2xvZ29faGgucG5nJyxcbiAgICAgIGxhYmVsOiAn15TXpNeV16LXnCDXl9eV15zXldefJ1xuICAgIH0sXG4gICAgJ2FzaGRvZCc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19hc2hkb2QucG5nJyxcbiAgICAgIGxhYmVsOiAn157Xm9eR15kg15DXqdeT15XXkydcbiAgICB9LFxuICAgICdoYWlmYSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYWlmYS5wbmcnLFxuICAgICAgbGFiZWw6ICfXnteb15HXmSDXl9eZ16TXlCdcbiAgICB9LFxuICAgICdyaXNob24nOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fcmlzaG9uLnBuZycsXG4gICAgICBsYWJlbDogJ9ee15vXkdeZINeo15DXqdeV158g15zXpteZ15XXnydcbiAgICB9LFxuICAgICdlaWxhdCc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19laWxhdC5wbmcnLFxuICAgICAgbGFiZWw6ICfXlNek15XXotecINeQ15nXnNeqJ1xuICAgIH0sXG4gICAgJ2xqdWJsamFuYSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzgvOGUvVW5pb25fb2xpbXBpamEucG5nLzE0MHB4LVVuaW9uX29saW1waWphLnBuZycsXG4gICAgICBsYWJlbDogJ9ec15XXkdec15nXkNeg15QnXG4gICAgfSxcbiAgICAndmFsZW5jaWEnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3NhbXZhbnJvc3NvbS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMTAvdmFsZW5jaWEtYmFza2V0MS1sb2dvLmpwZycsXG4gICAgICBsYWJlbDogJ9eV15zXoNeh15nXlCdcbiAgICB9LFxuICAgICdrdWJhbic6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzAvMDQvTG9rb21vdGl2X0t1YmFuX2xvZ28ucG5nLzIwMHB4LUxva29tb3Rpdl9LdWJhbl9sb2dvLnBuZycsXG4gICAgICBsYWJlbDogJ9ec15XXp9eV157XldeY15nXkSDXp9eV15HXkNefJ1xuICAgIH0sXG4gICAgJ2Z1ZW5sYWJyYWRhJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xMy9CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnLzExMHB4LUJhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcnLFxuICAgICAgbGFiZWw6ICfXpNeV15DXoNec15HXqNeT15QnXG4gICAgfSxcbiAgICAndWxtJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly9uYWNod3VjaHMuYmJ1MDEuY29tL21vZHVsZXMvbW9kX2JidW5ld3NmbGFzaC9hc3NldHMvaW1hZ2VzL25vaW1hZ2VfdGh1bWIuanBnJyxcbiAgICAgIGxhYmVsOiAn15DXldec150nXG4gICAgfSxcbiAgICAndmlsbmEnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi83Lzc1L0JDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLzkwN3B4LUJDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLnBuZycsXG4gICAgICBsYWJlbDogJ9eo15nXmNeQ16Eg15XXmdec16DXlCdcbiAgICB9LFxuICAgICdub3Znb3JvZCc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vb2x5bXBpYWtvcy1saXZlLmdyL2ltZy90ZWFtcy9OaXpobnklMjBOb3Znb3JvZC5wbmcnLFxuICAgICAgbGFiZWw6ICfXoNeZ15bXs9eg15knXG4gICAgfSxcbiAgICAnemVuaXQnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjUvRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcvMjIwcHgtRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcnLFxuICAgICAgbGFiZWw6ICfXlteg15nXmCdcbiAgICB9LFxuICAgICdncmFuLWNhbmFyaWEnOiB7XG4gICAgICBsb2dvOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vMi8yYS9DQl9HcmFuX0NhbmFyaWFfMjAxNC5wbmcnLFxuICAgICAgbGFiZWw6ICfXkteo15DXnyDXp9eg16jXmdeUJ1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZXVkeCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IGF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucycpO1xuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNwaW5uZXIgPSByZXF1aXJlKCcuL3NwaW5uZXInKTtcbmNvbnN0IFRvcEJhciA9IHJlcXVpcmUoJy4vdG9wQmFyJyk7XG5jb25zdCBBdXRoUGFnZSA9IHJlcXVpcmUoJy4vYXV0aFBhZ2UnKTtcbmNvbnN0IEhvbWVQYWdlID0gcmVxdWlyZSgnLi9ob21lUGFnZScpO1xuY29uc3QgVXNlcnNQYWdlID0gcmVxdWlyZSgnLi91c2Vyc1BhZ2UnKTtcbmNvbnN0IEdhbWVzUGFnZSA9IHJlcXVpcmUoJy4vZ2FtZXNQYWdlJyk7XG5jb25zdCBCb29raW5nc1BhZ2UgPSByZXF1aXJlKCcuL2Jvb2tpbmdzUGFnZScpO1xuY29uc3QgRGlzdHJpYnV0aW9uUGFnZSA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9uUGFnZScpO1xuY29uc3QgRWRpdFVzZXJJbmZvUGFnZSA9IHJlcXVpcmUoJy4vZWRpdFVzZXJJbmZvUGFnZScpO1xuY29uc3QgVXBkYXRlQm9va2luZ1BhZ2UgPSByZXF1aXJlKCcuL3VwZGF0ZUJvb2tpbmdQYWdlJyk7XG5jb25zdCBVcGRhdGVHYW1lUGFnZSA9IHJlcXVpcmUoJy4vdXBkYXRlR2FtZVBhZ2UnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2FwcC5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGhEYXRhOiBzdGF0ZS5hdXRoRGF0YSxcbiAgICAgICAgY3VycmVudFBhZ2VJZDogc3RhdGUucm91dGluZy5jdXJyZW50LnBhZ2VJZFxuICAgIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBmZXRjaEF1dGhEYXRhOiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5mZXRjaEF1dGhEYXRhKCkpXG59KTtcblxuZnVuY3Rpb24gZ2V0UGFnZUNvbXBvbmVudChjdXJyZW50UGFnZUlkKSB7XG4gICAgc3dpdGNoIChjdXJyZW50UGFnZUlkKSB7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRTpcbiAgICAgICAgICAgIHJldHVybiAoIDxIb21lUGFnZSBrZXk9J2hvbWUtcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5VU0VSUzpcbiAgICAgICAgICAgIHJldHVybiAoIDxVc2Vyc1BhZ2Uga2V5PSd1c2Vycy1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkdBTUVTOlxuICAgICAgICAgICAgcmV0dXJuICggPEdhbWVzUGFnZSBrZXk9J2dhbWVzLXBhZ2UnIC8+ICk7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQk9PS0lOR1M6XG4gICAgICAgICAgICByZXR1cm4gKCA8Qm9va2luZ3NQYWdlIGtleT0nYm9va2luZ3MtcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5ESVNUUklCVVRJT046XG4gICAgICAgICAgICByZXR1cm4gKCA8RGlzdHJpYnV0aW9uUGFnZSBrZXk9J2Rpc3RyaWJ1dGlvbi1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkVESVRfVVNFUl9JTkZPOlxuICAgICAgICAgICAgcmV0dXJuICggPEVkaXRVc2VySW5mb1BhZ2Uga2V5PSdlZGl0VXNlckluZm8tcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5VUERBVEVfQk9PS0lORzpcbiAgICAgICAgICAgIHJldHVybiAoIDxVcGRhdGVCb29raW5nUGFnZSBrZXk9J3VwZGF0ZUJvb2tpbmctcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5VUERBVEVfR0FNRTpcbiAgICAgICAgICAgIHJldHVybiAoIDxVcGRhdGVHYW1lUGFnZSBrZXk9J3VwZGF0ZUdhbWUtcGFnZScgLz4gKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhZ2VUb1JlbmRlcihhdXRoRGF0YSwgY3VycmVudFBhZ2VJZCkge1xuICAgIGlmICghYXV0aERhdGEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEF1dGhQYWdlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRvcEJhciAvPlxuICAgICAgICAgICAgeyBnZXRQYWdlQ29tcG9uZW50KGN1cnJlbnRQYWdlSWQpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hBdXRoRGF0YSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZSBsYXJnZS02IHNtYWxsLTEyIHNtYWxsLWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgICB7IGdldFBhZ2VUb1JlbmRlcih0aGlzLnByb3BzLmF1dGhEYXRhLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWQpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgICBhdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjdXJyZW50UGFnZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZmV0Y2hBdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJldWR4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwLmpzeCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU0VUX0FVVEhfREFUQSwgU0lHTl9PVVQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi91c2VyQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBldmVudEFjdGlvbnMgZnJvbSAnLi9ldmVudEFjdGlvbnMnO1xuaW1wb3J0ICogYXMgYm9va2luZ0FjdGlvbnMgZnJvbSAnLi9ib29raW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uQWN0aW9ucyBmcm9tICcuL3JvdXRpbmdBY3Rpb25zJztcblxuaW1wb3J0IHVwZGF0ZVBob3RvVXJsRml4ZXIgZnJvbSAnLi4vLi4vZGF0YUZpeGVycy91cGRhdGVQaG90b1VybEZpeGVyJztcblxuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1JfQ09ERVNfTUFQID0ge1xuICAnYXV0aC9pbnZhbGlkLWVtYWlsJzogVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguSU5WQUxJRF9FTUFJTCxcbiAgJ2F1dGgvd2Vhay1wYXNzd29yZCc6IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILldFQUtfUEFTU1dPUkQsXG4gICdhdXRoL2VtYWlsLWFscmVhZHktaW4tdXNlJzogVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguRU1BSUxfSU5fVVNFLFxuICAnYXV0aC93cm9uZy1wYXNzd29yZCc6IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILldST05HX1BBU1NXT1JELFxuICAnYXV0aC9hY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsJzogVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguRU1BSUxfSU5fVVNFLFxuICAnYXV0aC91c2VyLW5vdC1mb3VuZCc6IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILlVTRVJfTk9UX0ZPVU5EXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QXV0aERhdGEgPSAodWlkLCBlbWFpbCwgcGhvdG9VUkwsIGlzQWRtaW4pID0+ICh7XG4gIHR5cGU6IFNFVF9BVVRIX0RBVEEsXG4gIHVpZCxcbiAgZW1haWwsXG4gIHBob3RvVVJMLFxuICBpc0FkbWluXG59KTtcblxuY29uc3QgZmV0Y2hBcHBEYXRhID0gKGRpc3BhdGNoLCB1c2VyKSA9PlxuICBjbGllbnREQi5yZWFkKCdhZG1pbnMvJyArIHVzZXIudWlkKVxuICAgIC50aGVuKGlzQWRtaW4gPT4gZGlzcGF0Y2goc2V0QXV0aERhdGEodXNlci51aWQsIHVzZXIuZW1haWwsIF8uZ2V0KHVzZXIsIFsncHJvdmlkZXJEYXRhJywgMCwgJ3Bob3RvVVJMJ10pLCAhIWlzQWRtaW4pKSlcbiAgICAudGhlbigoKSA9PiBQcm9taXNlLmFsbChbXG4gICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5mZXRjaFVzZXJzKCkpLFxuICAgICAgZGlzcGF0Y2goZXZlbnRBY3Rpb25zLmZldGNoRXZlbnRzKCkpLFxuICAgICAgZGlzcGF0Y2goYm9va2luZ0FjdGlvbnMuZmV0Y2hCb29raW5ncygpKVxuICAgIF0pKTtcblxuZXhwb3J0IGNvbnN0IHVzZXJTaWduZWRPdXQgPSAoKSA9PiAoe1xuICB0eXBlOiBTSUdOX09VVFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnNpZ25PdXQoKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJTaWduZWRPdXQoKSkpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMucmVzZXQoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQVVUSCkpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEZhY2Vib29rID0gKCkgPT4gKCkgPT4gY2xpZW50REIubG9naW5XaXRoRmFjZWJvb2soKTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEdvb2dsZSA9ICgpID0+ICgpID0+IGNsaWVudERCLmxvZ2luV2l0aEdvb2dsZSgpO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5sb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbih1c2VyID0+IGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcikpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMucmVzZXQoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRSkpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHVzZXIgPT4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5yZXNldChDb25zdGFudHMuUk9VVElORy5QQUdFUy5FRElUX1VTRVJfSU5GTykpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBlbWFpbCA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbClcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhEYXRhID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLmdldExvZ2dlZEluVXNlcigpXG4gICAgLnRoZW4odXNlciA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKVxuICAgICAgICAgIC50aGVuKCgpID0+IHVwZGF0ZVBob3RvVXJsRml4ZXIoZGlzcGF0Y2gsIGdldFN0YXRlKCkpKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gZ2V0U3RhdGUoKS51c2Vyc1t1c2VyLnVpZF07XG4gICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHVzZXJJbmZvKSkge1xuICAgICAgICAgICAgICBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5yZXNldChDb25zdGFudHMuUk9VVElORy5QQUdFUy5FRElUX1VTRVJfSU5GTywgeyB1aWQ6IHVzZXIudWlkIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLnJlc2V0KENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkhPTUUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihkYkVycm9yKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpXG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemUgPSBjb25maWcgPT4ge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SW4gPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5zZXQoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZWFkID0gcGF0aCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9uY2UoJ3ZhbHVlJylcbiAgICAudGhlbihzbmFwc2hvdCA9PiByZXNvbHZlKHNuYXBzaG90LnZhbCgpKSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcHVzaCA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IHVuaXF1ZUtleSA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnB1c2goKS5rZXk7XG4gIHNldEluKHBhdGggKyAnLycgKyB1bmlxdWVLZXksIGRhdGEpXG4gICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSh1bmlxdWVLZXkpKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS51cGRhdGUoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSBwYXRoID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkucmVtb3ZlKClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhHb29nbGUgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChwcm92aWRlcilcbiAgICAudGhlbihyZXNvbHZlKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRmFjZWJvb2sgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKVxuICAgIC50aGVuKHJlc29sdmUpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBlbWFpbCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluVXNlciA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmdldFJlZGlyZWN0UmVzdWx0KClcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0LnVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2UgPSB1c2VyID0+IHtcbiAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkucmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgICAgIHJlc29sdmUodXNlcik7XG4gICAgICAgIH07XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmlyZWJhc2VcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBVU0VSU19SRUNFSVZFRCwgVVNFUl9SRU1PVkVEIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnYmx1ZWJpcmQnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IFVTRVJfSU5GT19LRVlTID0gWydlbWFpbCcsICdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAncGhvbmVQcmVmaXgnLCAncGhvbmVOdW1iZXInLCAncmVxdWVzdEZvck1lbWJlcnNoaXAnLCAnc3RhdGlvbicsICdzdWJzY3JpYmVTTVMnLCAnc3Vic2NyaWJlTWFpbCcsICdwaG90b1VSTCddO1xuY29uc3QgUEFUSF9NQVAgPSB7XG4gIFVTRVJTX0lORk86ICd1c2Vyc0luZm8nLFxuICBTRUFTT05fVElDS0VUUzogJ3NlYXNvblRpY2tldHMnLFxuICBCT09LSU5HUzogJ2Jvb2tpbmdzJ1xufTtcblxuY29uc3QgYnVpbGRVc2VyID0gKHVzZXJJbmZvLCBzZWFzb25UaWNrZXRzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBfLm1lcmdlKHt9LCB1c2VySW5mbyk7XG4gIGlmIChzZWFzb25UaWNrZXRzKSB7XG4gICAgXy5tZXJnZSh1c2VyLCB7IHNlYXNvblRpY2tldHMgfSk7XG4gIH1cbiAgcmV0dXJuIHVzZXI7XG59O1xuXG5jb25zdCBmZXRjaEFsbFVzZXJzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUylcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJzSW5mbywgc2Vhc29uVGlja2V0c10pID0+XG4gICAgICBfLnRyYW5zZm9ybSh1c2Vyc0luZm8sIChhY2MsIGluZm8sIHVpZCkgPT4ge1xuICAgICAgICBhY2NbdWlkXSA9IGJ1aWxkVXNlcihpbmZvLCBzZWFzb25UaWNrZXRzICYmIHNlYXNvblRpY2tldHNbdWlkXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIH0sIHt9KVxuICAgICk7XG59O1xuXG5jb25zdCBmZXRjaFNpbmdsZVVzZXIgPSB1aWQgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyArICcvJyArIHVpZCksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUyArICcvJyArIHVpZClcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJJbmZvLCBzZWFzb25UaWNrZXRzXSkgPT4ge1xuICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgIHJldHVybiB7IFt1aWRdOiBidWlsZFVzZXIodXNlckluZm8sIHNlYXNvblRpY2tldHMpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1JlbW92ZWQgPSB1aWQgPT4gKHtcbiAgdHlwZTogVVNFUl9SRU1PVkVELFxuICB1aWRcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlcnNSZWNlaXZlZCA9IHVzZXJzID0+ICh7XG4gIHR5cGU6IFVTRVJTX1JFQ0VJVkVELFxuICB1c2Vyc1xufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBjb25zdCB1aWQgPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ3VpZCddKTtcbiAgY29uc3QgaXNBZG1pbiA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAnaXNBZG1pbiddKTtcbiAgY29uc3QgZmV0Y2hQcm9taXNlID0gaXNBZG1pbiA/IGZldGNoQWxsVXNlcnMoKSA6IGZldGNoU2luZ2xlVXNlcih1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBpZiAodXNlcnMpIHtcbiAgICAgICAgZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh1c2VycykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAodWlkLCB1c2VyKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCBpc0FkbWluID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICdpc0FkbWluJ10pO1xuXG4gIGNvbnN0IHVzZXJVcGRhdGVQcm9taXNlcyA9IFtcbiAgICBjbGllbnREQi51cGRhdGUoJ3VzZXJzSW5mby8nICsgdWlkLCBfLnBpY2sodXNlciwgVVNFUl9JTkZPX0tFWVMpKVxuICBdO1xuXG4gIGlmIChpc0FkbWluICYmIF8uaGFzKHVzZXIsICdzZWFzb25UaWNrZXRzJykpIHtcbiAgICB1c2VyVXBkYXRlUHJvbWlzZXMucHVzaChjbGllbnREQi5zZXRJbignc2Vhc29uVGlja2V0cy8nICsgdWlkLCB1c2VyLnNlYXNvblRpY2tldHMpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyVXBkYXRlUHJvbWlzZXMpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh7IFt1aWRdOiB1c2VyIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyID0gdWlkID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IHVzZXJSZW1vdmVQcm9taXNlcyA9IF8ubWFwKFBBVEhfTUFQLCB1c2VyUGF0aCA9PiBjbGllbnREQi5yZW1vdmUoYCR7dXNlclBhdGh9LyR7dWlkfWApKTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlbW92ZVByb21pc2VzKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJzUmVtb3ZlZCh1aWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBTVE9QX0xPQURJTkcgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+ICh7XG4gIHR5cGU6IFNUQVJUX0xPQURJTkdcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiAoe1xuICB0eXBlOiBTVE9QX0xPQURJTkdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2xvYWRpbmdBY3Rpb25zLmpzIiwiaW1wb3J0IHsgUkVQT1JUX0VSUk9SIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlcG9ydEVycm9yID0gKG1lc3NhZ2UgPSBUcmFuc2xhdGlvbnMuRVJST1JfTUVTU0FHRVMuR0VORVJBTCkgPT4gKHtcbiAgdHlwZTogUkVQT1JUX0VSUk9SLFxuICBtZXNzYWdlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9lcnJvckFjdGlvbnMuanMiLCJjb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUk9VVElORzoge1xuICAgIFBBR0VTOiB7XG4gICAgICBbQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRV06ICfXk9ejINeU15HXmdeqJyxcbiAgICAgIFtDb25zdGFudHMuUk9VVElORy5QQUdFUy5VU0VSU106ICfXntep16rXntep15nXnScsXG4gICAgICBbQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuR0FNRVNdOiAn157XqdeX16fXmdedJyxcbiAgICAgIFtDb25zdGFudHMuUk9VVElORy5QQUdFUy5CT09LSU5HU106ICfXqNep15XXnteZ150g15zXlNeh16LXldeqJyxcbiAgICAgIFtDb25zdGFudHMuUk9VVElORy5QQUdFUy5ESVNUUklCVVRJT05dOiAn16jXqdeZ157XqiDXqtek15XXpteUJyxcbiAgICB9XG4gIH0sXG4gIFNUQVRJT05TOiB7XG4gICAgW0NvbnN0YW50cy5TVEFUSU9OUy5URUxfQVZJVl06ICfXqtecINeQ15HXmdeRJyxcbiAgICBbQ29uc3RhbnRzLlNUQVRJT05TLk1PRElJTl06ICfXpteV157XqiDXqdeZ15zXqidcbiAgfSxcbiAgR0FNRToge1xuICAgIFNUQVRVUzoge1xuICAgICAgW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRURdOiAn15TXlNeo16nXnteUINeh15LXldeo15QnLFxuICAgICAgW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTXTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec157XoNeV15nXmdedJyxcbiAgICAgIFtDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfQUxMXTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec15vXldec150nLFxuICAgICAgW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5GVUxMWV9CT09LRURdOiAn15TXlNeh16LXlCDXntec15DXlCcsXG4gICAgfVxuICB9LFxuICBHQU1FX0lURU06IHtcbiAgICBCT09LOiAn15TXqNep150nLFxuICAgIEVESVRfQk9PS0lORzogJ9ei16jXldeaJyxcbiAgICBDQU5DRUxfQk9PS0lORzogJ9eR15jXnCDXlNeo16nXnteUJ1xuICB9LFxuICBVU0VSU19QQUdFOiB7XG4gICAgVElUTEU6ICfXntep16rXntep15nXnScsXG4gICAgTk9fVVNFUlNfRk9VTkQ6ICfXnNeQINeg157XpteQ15Ug16jXqdeV157XldeqJyxcbiAgICBGSUxURVI6IHtcbiAgICAgIFNFQVJDSDogJ9eX15nXpNeV16knLFxuICAgICAgVEFCUzoge1xuICAgICAgICBBTEw6ICfXm9eV15zXnScsXG4gICAgICAgIE1FTUJFUlM6ICfXnteg15XXmdeZ150nLFxuICAgICAgICBSRVFVRVNUUzogJ9eR16fXqdeUINec157XoNeV15knLFxuICAgICAgICBOT05fTUVNQkVSUzogJ9eX15Mg16TXotee15nXmdedJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgQVVUSF9QQUdFOiB7XG4gICAgRklFTERTOiB7XG4gICAgICBFTUFJTDogJ9eT15XXkNeoINeQ15zXp9eY16jXldeg15knLFxuICAgICAgUEFTU1dPUkQ6ICfXodeZ16HXnteQJyxcbiAgICAgIFBBU1NXT1JEX0FHQUlOOiAn16nXldeRINeh15nXodee15AnXG4gICAgfSxcbiAgICBTVUJNSVRfQlROOiB7XG4gICAgICBMT0dJTjogJ9eU16rXl9eR16gnLFxuICAgICAgUkVHSVNURVI6ICfXlNeZ16jXqdedJyxcbiAgICAgIEZPUkdPVF9QQVNTV09SRDogJ9ep15zXlyDXnNeZ16DXpyDXnNeQ15nXpNeV16Eg16HXmdeh157XkCdcbiAgICB9LFxuICAgIExJTktTOiB7XG4gICAgICBHT19UT19MT0dJTjogJ9eZ16kg15zXmiDXl9ep15HXldefPycsXG4gICAgICBHT19UT19SRUdJU1RFUjogJ9eQ15nXnyDXnNeaINeX16nXkdeV158/JyxcbiAgICAgIEdPX1RPX0ZPUkdPVF9QQVNTV09SRDogJ9ep15vXl9eqINeh15nXodee15A/J1xuICAgIH0sXG4gICAgRVJST1JTOiB7XG4gICAgICBOT1RfU0FNRV9QQVNTV09SRDogJ9eh15nXodee15DXldeqINem16jXmdeb15XXqiDXnNeU15nXldeqINeW15TXldeqJ1xuICAgIH1cbiAgfSxcbiAgSE9NRV9QQUdFOiB7XG4gICAgTk9fT1BFTl9HQU1FUzogJ9eQ15nXnyDXlNeh16LXldeqINek16rXldeX15XXqicsXG4gICAgT1BFTl9HQU1FUzogJ9eU16HXoteV16og16TXqteV15fXldeqJyxcbiAgICBDTE9TRURfR0FNRVM6ICfXlNeU16HXoteV16og15TXkdeQ15XXqidcbiAgfSxcbiAgVVBEQVRFX1VTRVJfSU5GT19QQUdFOiB7XG4gICAgVElUTEU6ICfXpNeo15jXmdedINeQ15nXqdeZ15nXnScsXG4gICAgRklSU1RfTkFNRTogJ9ep150nLFxuICAgIExBU1RfTkFNRTogJ9ep150g157Xqdek15fXlCcsXG4gICAgRU1BSUw6ICfXk9eV15DXqCDXkNec16fXmNeo15XXoNeZJyxcbiAgICBQSE9ORV9QUkVGSVg6ICfXp9eZ15PXldee16onLFxuICAgIFBIT05FX05VTUJFUjogJ9eY15zXpNeV158g16DXmdeZ15MnLFxuICAgIEZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OOiAn16rXl9eg16og16LXnNeZ15Qg157Xldei15PXpNeqJyxcbiAgICBSRVFVRVNUX0ZPUl9NRU1CRVJTSElQOiAn157XoteV16DXmdeZ158g15HXnteg15XXmT8nLFxuICAgIERJU1RSSUJVVElPTjoge1xuICAgICAgRU1BSUw6ICfXqtek15XXpteqINeQ15nXnteZ15nXnCcsXG4gICAgICBTTVM6ICfXqtek15XXpteqIFNNUydcbiAgICB9LFxuICAgIFRPR0dMRToge1xuICAgICAgWUVTOiAn15vXnycsXG4gICAgICBOTzogJ9ec15AnXG4gICAgfVxuICB9LFxuICBVUERBVEVfQk9PS0lOR19QQUdFOiB7XG4gICAgVElUTEU6ICfXoteo15nXm9eqINeU16jXqdee15QnLFxuICAgIFBBSURfU0VBVFM6ICfXm9ee15XXqiDXnteg15XXmdeZ150nLFxuICAgIEVYVFJBX1NFQVRTOiAn16DXldeh16LXmdedINeR16rXqdec15XXnScsXG4gICAgUElDS1VQX1RPR0dMRTogJ9eU15zXldeaJyxcbiAgICBEUk9QT0ZGX1RPR0dMRTogJ9eX15bXldeoJyxcbiAgICBQSUNLVVBfU1RBVElPTl9EUk9QRE9XTl9ERUZBVUxUOiAn15HXl9eoJ1xuICB9LFxuICBHQU1FU19QQUdFOiB7XG4gICAgVElUTEU6ICfXntep15fXp9eZ150nLFxuICAgIFRBQlM6IHtcbiAgICAgIEFMTDogJ9eb15XXnNedJyxcbiAgICAgIE9QRU46ICfXpNeq15XXl9eZ150nLFxuICAgICAgQ0xPU0VEOiAn16HXkteV16jXmdedJ1xuICAgIH0sXG4gICAgTk9fR0FNRVNfTEFCRUw6ICfXnNeQINeg157XpteQ15Ug157XqdeX16fXmdedJ1xuICB9LFxuICBCT09LSU5HU19QQUdFOiB7XG4gICAgVElUTEU6ICfXqNep15XXnteZ150g15zXlNeh16LXlCcsXG4gICAgVEFCUzoge1xuICAgICAgUElDS1VQOiAn15TXnNeV15onLFxuICAgICAgRFJPUE9GRjogJ9eX15bXldeoJ1xuICAgIH1cbiAgfSxcbiAgVVBEQVRFX0dBTUVfUEFHRToge1xuICAgIFRJVExFOiAn15TXqNep157XlCDXnNeU16HXoteUJyxcbiAgICBHQU1FX0xBQkVMOiAn16nXnSDXlNee16nXl9enJyxcbiAgICBHQU1FX1BMQUNFSE9MREVSOiAn15HXl9eoINee16nXl9enJyxcbiAgICBEQVRFX0xBQkVMOiAn16rXkNeo15nXmicsXG4gICAgVElNRTogJ9ep16LXlCcsXG4gICAgR0FNRV9TVEFUVVM6ICfXodeY15jXldehINeU16HXoteUJ1xuICB9LFxuICBESVNUUklCVVRJT05fUEFHRToge1xuICAgIFRJVExFOiAn16jXqdeZ157XqiDXqtek15XXpteUJyxcbiAgICBESVNUUklCVVRJT05fTUVUSE9EOiB7XG4gICAgICBUSVRMRTogJ9ep15zXmdeX15Qg15HXkNee16bXoteV16onLFxuICAgICAgRU1BSUw6ICfXkNeZ157XmdeZ15wnLFxuICAgICAgU01TOiAn16HXntehJ1xuICAgIH0sXG4gICAgUkVDSVBJRU5UU19UWVBFUzoge1xuICAgICAgVElUTEU6ICfXqdec15cg15DXnCcsXG4gICAgICBBTEw6ICfXm9eV15zXnScsXG4gICAgICBNRU1CRVJTX09OTFk6ICfXnteg15XXmdeZ150g15HXnNeR15MnLFxuICAgICAgQk9PS0VEX1RPX0VWRU5UOiAn16jXqdeV157XmdedINec15TXodei15QnXG4gICAgfSxcbiAgICBESVNUUklCVVRJT05fVFlQRVM6IHtcbiAgICAgIFRJVExFOiAn16bXldeo16og16nXnNeZ15fXlCcsXG4gICAgICBURU1QTEFURTogJ9eq15HXoNeZ16onLFxuICAgICAgQ1VTVE9NOiAn15jXp9eh15gg15fXldek16nXmSdcbiAgICB9LFxuICAgIFRFTVBMQVRFUzoge1xuICAgICAgVElUTEU6ICfXkdeX15nXqNeqINeq15HXoNeZ16onLFxuICAgICAgRVZFTlRfT1BFTl9GT1JfTUVNQkVSUzogJ9ek16rXmdeX16og15TXqNep157XlCDXnNee16DXldeZ15nXnScsXG4gICAgICBFVkVOVF9PUEVOX0ZPUl9BTEw6ICfXpNeq15nXl9eqINeU16jXqdee15Qg15zXm9eV15zXnScsXG4gICAgICBDSEFOR0VfRVZFTlRfREVUQUlMUzogJ9ep15nXoNeV15kg15HXpNeo15jXmSDXlNeU16HXoteUJ1xuICAgIH0sXG4gICAgR0FNRVM6IHtcbiAgICAgIFRJVExFOiAn15HXl9eZ16jXqiDXntep15fXpydcbiAgICB9LFxuICAgIENVU1RPTToge1xuICAgICAgVElUTEU6IHtcbiAgICAgICAgVElUTEU6ICfXoNeV16nXkCdcbiAgICAgIH0sXG4gICAgICBDT05URU5UOiB7XG4gICAgICAgIFRJVExFOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgRk9STV9GUkFNRToge1xuICAgIFNVQk1JVDogJ9ep157XldeoJyxcbiAgICBSRU1PVkU6ICfXnteX16cnXG4gIH0sXG4gIEVSUk9SX01FU1NBR0VTOiB7XG4gICAgR0VORVJBTDogJ9ep15LXmdeQ16og157Xoteo15vXqicsXG4gICAgQVVUSDoge1xuICAgICAgSU5WQUxJRF9FTUFJTDogJ9eQ15nXnteZ15nXnCDXnNeQINeq16fXmdefJyxcbiAgICAgIFdFQUtfUEFTU1dPUkQ6ICfXlNeh15nXodee15Ag16bXqNeZ15vXlCDXnNeU15vXmdecINec16TXl9eV16ogNiDXqteV15XXmdedJyxcbiAgICAgIEVNQUlMX0lOX1VTRTogJ9eQ15nXnteZ15nXnCDXkdep15nXnteV16knLFxuICAgICAgV1JPTkdfUEFTU1dPUkQ6ICfXodeZ16HXnteQINec15Ag16DXm9eV16DXlCcsXG4gICAgICBOT1RfU0FNRV9QQVNTV09SRDogJ9eU16HXmdeh157XkNeV16og16bXqNeZ15vXldeqINec15TXmdeV16og15bXlNeV16onLFxuICAgICAgVVNFUl9OT1RfRk9VTkQ6ICfXm9eq15XXkdeqINeU15DXmdee15nXmdecINec15Ag16DXntem15DXlCdcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBFVkVOVFNfUkVDRUlWRUQsIEVWRU5UX1JFTU9WRUQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBFVkVOVF9LRVlTID0gWyd0eXBlSWQnLCAnZGF5JywgJ21vbnRoJywgJ3llYXInLCAnaG91cicsICdtaW51dGUnLCAnc3RhdHVzJ107XG5jb25zdCBFVkVOVFNfUEFUSCA9ICdldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZXZlbnRSZW1vdmVkID0gZXZlbnRJZCA9PiAoe1xuICB0eXBlOiBFVkVOVF9SRU1PVkVELFxuICBldmVudElkXG59KTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50c1JlY2VpdmVkID0gZXZlbnRzID0+ICh7XG4gIHR5cGU6IEVWRU5UU19SRUNFSVZFRCxcbiAgZXZlbnRzXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXZlbnRzID0gKCkgPT4gZGlzcGF0Y2ggPT5cbiAgY2xpZW50REIucmVhZChFVkVOVFNfUEFUSClcbiAgICAudGhlbihldmVudHMgPT4ge1xuICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoZXZlbnRzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV2ZW50ID0gZXZlbnQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goRVZFTlRTX1BBVEgsIGV2ZW50KVxuICAgIC50aGVuKGV2ZW50SWQgPT4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoeyBbZXZlbnRJZF06IGV2ZW50IH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFdmVudCA9IChldmVudElkLCBldmVudCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgZXZlbnRUb1VwZGF0ZSA9IF8ucGljayhldmVudCwgRVZFTlRfS0VZUyk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnVwZGF0ZSgnZXZlbnRzLycgKyBldmVudElkLCBldmVudFRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGV2ZW50c1JlY2VpdmVkKHsgW2V2ZW50SWRdOiBldmVudFRvVXBkYXRlIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFdmVudCA9IGV2ZW50SWQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnJlbW92ZShgJHtFVkVOVFNfUEFUSH0vJHtldmVudElkfWApXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goZXZlbnRSZW1vdmVkKGV2ZW50SWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCT09LSU5HU19SRUNFSVZFRCwgQk9PS0lOR19DQU5DRUxFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IEJPT0tJTkdfREFUQV9LRVlTID0gWydwYWlkU2VhdHMnLCAnZXh0cmFTZWF0cycsICdwaWNrVXAnLCAnZHJvcE9mZiddO1xuY29uc3QgQk9PS0lOR1NfUEFUSCA9ICdib29raW5ncyc7XG5cbmNvbnN0IGZldGNoVXNlckJvb2tpbmdzID0gdWlkID0+XG4gIGNsaWVudERCLnJlYWQoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9YClcbiAgICAudGhlbih1c2VyQm9va2luZ3MgPT4ge1xuICAgICAgaWYgKHVzZXJCb29raW5ncykge1xuICAgICAgICByZXR1cm4geyBbdWlkXTogdXNlckJvb2tpbmdzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuY29uc3QgZmV0Y2hBbGxCb29raW5ncyA9ICgpID0+XG4gIGNsaWVudERCLnJlYWQoQk9PS0lOR1NfUEFUSCk7XG5cbmV4cG9ydCBjb25zdCBib29raW5nc1JlY2VpdmVkID0gYm9va2luZ3MgPT4gKHtcbiAgdHlwZTogQk9PS0lOR1NfUkVDRUlWRUQsXG4gIGJvb2tpbmdzXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvb2tpbmdzQ2FuY2VsZWQgPSAodWlkLCBldmVudElkKSA9PiAoe1xuICB0eXBlOiBCT09LSU5HX0NBTkNFTEVELFxuICB1aWQsXG4gIGV2ZW50SWRcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCb29raW5ncyA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3QgdWlkID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICd1aWQnXSk7XG4gIGNvbnN0IGlzQWRtaW4gPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ2lzQWRtaW4nXSk7XG4gIGNvbnN0IGZldGNoUHJvbWlzZSA9IGlzQWRtaW4gPyBmZXRjaEFsbEJvb2tpbmdzKCkgOiBmZXRjaFVzZXJCb29raW5ncyh1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbihib29raW5ncyA9PiB7XG4gICAgICBpZiAoYm9va2luZ3MpIHtcbiAgICAgICAgZGlzcGF0Y2goYm9va2luZ3NSZWNlaXZlZChib29raW5ncykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJvb2tpbmcgPSAodWlkLCBldmVudElkLCBib29raW5nRGF0YSkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgYm9va2luZ0RhdGFUb1VwZGF0ZSA9IF8ucGljayhib29raW5nRGF0YSwgQk9PS0lOR19EQVRBX0tFWVMpO1xuXG4gIHJldHVybiBjbGllbnREQi51cGRhdGUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gLCBib29raW5nRGF0YVRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzUmVjZWl2ZWQoeyBbdWlkXTogeyBbZXZlbnRJZF06IGJvb2tpbmdEYXRhVG9VcGRhdGUgfSB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FuY2VsQm9va2luZyA9ICh1aWQsIGV2ZW50SWQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5yZW1vdmUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzQ2FuY2VsZWQodWlkLCBldmVudElkKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwiZnVuY3Rpb24gbmF2aWdhdGVUbyhwYWdlSWQsIHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTkFWSUdBVEVfVE8nLFxuICAgIHBhZ2VJZCxcbiAgICBwYXJhbXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbmF2aWdhdGVCYWNrKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdOQVZJR0FURV9CQUNLJ1xuICB9O1xufVxuXG5mdW5jdGlvbiByZXNldChwYWdlSWQsIHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnUkVTRVRfUk9VVElORycsXG4gICAgcGFnZUlkLFxuICAgIHBhcmFtc1xuICB9O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlKHBhZ2VJZCwgcGFyYW1zKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1JFUExBQ0VfUk9VVElORycsXG4gICAgcGFnZUlkLFxuICAgIHBhcmFtc1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgbmF2aWdhdGVUbywgbmF2aWdhdGVCYWNrLCByZXBsYWNlLCByZXNldCB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zLmpzIiwiaW1wb3J0IHsgdXBkYXRlVXNlciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkaXNwYXRjaCwgc3RhdGUpIHtcbiAgY29uc3QgdWlkID0gc3RhdGUuYXV0aERhdGEudWlkO1xuICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuXG4gIGlmICh1c2Vyc1t1aWRdKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKHVwZGF0ZVVzZXIodWlkLCB7IHBob3RvVVJMOiBzdGF0ZS5hdXRoRGF0YS5waG90b1VSTCB9KSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YUZpeGVycy91cGRhdGVQaG90b1VybEZpeGVyLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvc3Bpbm5lci5zY3NzJyk7XG5cbmNvbnN0IExvZ28gPSByZXF1aXJlKCcuL2xvZ28uanN4Jyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IHN0YXRlLmxvYWRpbmdcbiAgICB9O1xufVxuXG5jbGFzcyBTcGlubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlDbGFzcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGU6ICF0aGlzLnByb3BzLmlzTG9hZGluZ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5Q2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIGhlaWdodD17ODB9IHdpZHRoPXs4MH0gb3BhY2l0eT17MC43fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3Bpbm5lci5Qcm9wVHlwZXMgPSB7XG4gICAgaXNMb2FkaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTcGlubmVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zcGlubmVyLmpzeCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIHtcXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDA7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAubG9nbyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyID4gZGl2IHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgbWFyZ2luOiAwIDJweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAuYm91bmNlMSB7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMyczsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgLmJvdW5jZTIge1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xcbiAgMCUsIDgwJSwgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcXG4gIDAlLCA4MCUsIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgTG9nbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gaGVpZ2h0PXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gb3BhY2l0eT17dGhpcy5wcm9wcy5vcGFjaXR5fSB2aWV3Qm94PVwiMCAwIDQwMCA0MDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAwLjAwIDAuMDAgTCAxOTUuMzMgMC4wMCBDIDE3MS40NiAxLjE0IDE0Ny41OCA1LjQyIDEyNS40MyAxNC42MCBDIDcwLjg4IDM2LjMxIDI3LjEwIDgzLjMzIDkuNTcgMTM5LjQwIEMgMy43NCAxNTcuNDUgMS4xNiAxNzYuMzcgMC4wMCAxOTUuMjUgTCAwLjAwIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk1LjMzIDAuMDAgTCAyMDcuNTIgMC4wMCBDIDIxNi43MSAxLjE5IDIyNi4wMiAxLjM1IDIzNS4xMSAzLjIyIEMgMjY5LjMwIDkuMTYgMzAxLjc4IDI0LjM3IDMyOC4zNyA0Ni42NSBDIDM2NS45OSA3Ny45MSAzOTEuNjYgMTIzLjQyIDM5OC4wOSAxNzEuOTkgQyAzOTkuMDQgMTc4Ljc1IDM5OS41NiAxODUuNTYgNDAwLjAwIDE5Mi4zNyBMIDQwMC4wMCAyMDguNzMgQyAzOTguNTcgMjMzLjg2IDM5My4yOSAyNTguOTAgMzgyLjgwIDI4MS44NiBDIDM1OC44MiAzMzUuNjggMzA5Ljk1IDM3Ny44MyAyNTIuOTkgMzkzLjExIEMgMjM5LjA4IDM5Ny4xMCAyMjQuNjggMzk4Ljg5IDIxMC4yOSA0MDAuMDAgTCAxOTEuMzYgNDAwLjAwIEMgMTY2LjE3IDM5OC43NiAxNDEuMTMgMzkzLjE0IDExOC4xNiAzODIuNjQgQyA2Ny40MCAzNTkuNzYgMjYuODEgMzE1LjA1IDkuODkgMjYxLjkwIEMgMy45NyAyNDQuMzMgMS42MiAyMjUuODUgMC4wMCAyMDcuNDYgTCAwLjAwIDE5NS4yNSBDIDEuMTYgMTc2LjM3IDMuNzQgMTU3LjQ1IDkuNTcgMTM5LjQwIEMgMjcuMTAgODMuMzMgNzAuODggMzYuMzEgMTI1LjQzIDE0LjYwIEMgMTQ3LjU4IDUuNDIgMTcxLjQ2IDEuMTQgMTk1LjMzIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA3LjUyIDAuMDAgTCA0MDAuMDAgMC4wMCBMIDQwMC4wMCAxOTIuMzcgQyAzOTkuNTYgMTg1LjU2IDM5OS4wNCAxNzguNzUgMzk4LjA5IDE3MS45OSBDIDM5MS42NiAxMjMuNDIgMzY1Ljk5IDc3LjkxIDMyOC4zNyA0Ni42NSBDIDMwMS43OCAyNC4zNyAyNjkuMzAgOS4xNiAyMzUuMTEgMy4yMiBDIDIyNi4wMiAxLjM1IDIxNi43MSAxLjE5IDIwNy41MiAwLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE5Mi4xMSA4LjEzIEMgMjIyLjM1IDYuODAgMjUyLjk1IDEyLjc0IDI4MC40MiAyNS41MCBDIDMyNy4wNCA0Ni43MiAzNjQuMzUgODcuMzkgMzgxLjMxIDEzNS43NSBDIDM5OC40MCAxODMuMTcgMzk1LjY1IDIzNy4zMyAzNzMuNzcgMjgyLjc0IEMgMzU2LjIzIDMxOS44MyAzMjYuMzMgMzUwLjk3IDI5MC4wNCAzNzAuMDkgQyAyNDMuOTIgMzk0LjgyIDE4Ny41MiAzOTkuMjIgMTM4LjA3IDM4Mi4xMSBDIDk1LjM4IDM2Ny42NSA1OC4xNCAzMzcuNjAgMzUuMjEgMjk4Ljc2IEMgMTQuNjUgMjY0LjkyIDUuMzQgMjI0LjQ2IDguNTQgMTg1LjAzIEMgMTAuMzcgMTYxLjIwIDE2LjY4IDEzNy43MCAyNy4yNCAxMTYuMjYgQyA0OC44MiA3MS4xNyA4OC45MiAzNS40OCAxMzYuMDQgMTguODkgQyAxNTQuMDUgMTIuNTQgMTczLjAyIDguODcgMTkyLjExIDguMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTk2LjIzIDIxLjM1IEMgMTk3LjYwIDE4LjkzIDE5OC45NSAxNi41MCAyMDAuMzcgMTQuMTEgQyAyMDEuNzIgMTYuNDggMjAzLjA0IDE4Ljg2IDIwNC4zMyAyMS4yNyBDIDIwNi45NSAyMS44MCAyMDkuNTkgMjIuMjIgMjEyLjE4IDIyLjg5IEMgMjEwLjcwIDI1LjE2IDIwOC42NSAyNi45OCAyMDYuODIgMjguOTYgQyAyMDcuMjIgMzEuNjUgMjA3LjUzIDM0LjM1IDIwNy44NiAzNy4wNCBDIDIwNS4zMCAzNS44NiAyMDIuNzQgMzQuNjcgMjAwLjE0IDMzLjU4IEMgMTk3Ljc0IDM0LjgyIDE5NS4zMiAzNi4wNCAxOTIuNzUgMzYuODcgQyAxOTMuMTYgMzQuMjIgMTkzLjU0IDMxLjU2IDE5My44NCAyOC44OSBDIDE5MS45MyAyNi45MCAxOTAuMDMgMjQuOTAgMTg4LjE2IDIyLjg4IEMgMTkwLjgzIDIyLjMxIDE5My41MiAyMS43OCAxOTYuMjMgMjEuMzUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTgxLjEyIDQ0LjM4IEMgMjEyLjI2IDQwLjYwIDI0NC41MyA0Ni4xOSAyNzIuMzYgNjAuNzYgQyAzMTAuOTMgODAuNTYgMzQwLjUxIDExNy4wNiAzNTEuNjIgMTU5LjAwIEMgMzU4LjgxIDE4NS4xMCAzNTguODIgMjEzLjA4IDM1Mi4yMiAyMzkuMzAgTCAzNTMuNzggMjM5LjQ5IEMgMzUzLjM2IDIzOS40OSAzNTIuNTMgMjM5LjQ4IDM1Mi4xMSAyMzkuNDggQyAzNDUuMDIgMjY3LjM5IDMyOS45MCAyOTMuMjEgMzA5LjA4IDMxMy4xMSBDIDI5Mi4yMSAzMjkuNjYgMjcxLjM2IDM0MS45OSAyNDguOTYgMzQ5LjQwIEMgMjIwLjM1IDM1OC42OSAxODkuMDcgMzU5LjYzIDE1OS45OSAzNTEuOTEgQyAxMzIuMzkgMzQ0LjYzIDEwNi44MyAzMjkuNjkgODcuMTEgMzA5LjA0IEMgNTguNjMgMjc5Ljc0IDQyLjM1IDIzOC44OSA0My4zMSAxOTguMDAgQyA0My4zOCAxNTEuNTQgNjYuMDkgMTA2LjExIDEwMi40MyA3Ny4zNiBDIDEyNC45NSA1OS4zOSAxNTIuNDggNDcuNzIgMTgxLjEyIDQ0LjM4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExMi43NCA3Ni43MyBDIDEzNC41NCA2MS40NiAxNjAuMzEgNTEuNTUgMTg2LjkzIDQ5LjU1IEMgMjA2LjQ1IDQ4LjIxIDIyNi4zNyA0OS42MSAyNDUuMDYgNTUuNjggQyAyNzAuOTkgNjMuNzkgMjk0LjY5IDc4Ljk4IDMxMi43NSA5OS4yOCBDIDMzMC4wMCAxMTguMzMgMzQyLjA4IDE0MS45NCAzNDcuODMgMTY2Ljk2IEMgMzUzLjg1IDE5NS4xNSAzNTIuMjkgMjI1LjEyIDM0Mi4yNSAyNTIuMjIgQyAzMzcuMjQgMjY1LjU2IDMzMC40NyAyNzguMjUgMzIyLjA1IDI4OS43NiBDIDMxOC44MCAyODYuODAgMzE5LjY4IDI4Mi40MiAzMTkuNzIgMjc4LjUwIEMgMzE5LjE2IDI3OS44MSAzMTguNjMgMjgxLjEzIDMxOC4xMyAyODIuNDYgQyAzMTcuMzMgMjgwLjE4IDMxNi41NSAyNzcuODUgMzE1LjEyIDI3NS44OCBDIDMxNS41MiAyNzcuMTYgMzE2LjMxIDI3OS43MiAzMTYuNzEgMjgxLjAwIEMgMzE1LjMxIDI3OS43MyAzMTMuODAgMjc4LjY0IDMxMi4xOCAyNzcuNzIgQyAzMTMuMjIgMjc5LjM2IDMxNC40NCAyODAuODcgMzE1LjY3IDI4Mi4zOSBDIDMxNC4yMyAyODEuNzcgMzEyLjc4IDI4MS4yMCAzMTEuMzAgMjgwLjY5IEMgMzEyLjM1IDI4MS44NyAzMTMuNjEgMjgyLjc1IDMxNS4wOCAyODMuMzUgQyAzMTMuOTUgMjgzLjY0IDMxMi44MiAyODMuOTMgMzExLjcwIDI4NC4yMyBDIDMxNi4xNSAyODQuNTQgMzE4LjE5IDI4OC42NyAzMjAuMzUgMjkxLjk1IEMgMzE5LjAwIDI5My43MiAzMTcuNTkgMjk1LjQ1IDMxNi4xNSAyOTcuMTUgQyAzMTIuNTggMjk0LjU2IDMxMS4xMyAyOTAuNDEgMzEwLjU1IDI4Ni4xOSBDIDMxMC4yMyAyODYuMzQgMzA5LjU5IDI4Ni42NCAzMDkuMjggMjg2Ljc4IEMgMzA4LjU5IDI4NS4yMyAzMDYuOTIgMjg0LjgyIDMwNi40NyAyODYuNzYgQyAzMDYuODggMjg3LjI5IDMwNy42OSAyODguMzMgMzA4LjEwIDI4OC44NiBDIDMwNy40NSAyODguNzUgMzA2LjE0IDI4OC41NSAzMDUuNDkgMjg4LjQ0IEMgMzA2LjU5IDI4OS43MiAzMDcuNzEgMjkwLjk4IDMwOC44MiAyOTIuMjYgQyAzMDcuOTcgMjkyLjI1IDMwNi4yNyAyOTIuMjMgMzA1LjQxIDI5Mi4yMiBDIDMwOC40NyAyOTQuNDEgMzExLjQ3IDI5Ni43NCAzMTMuODEgMjk5LjcyIEMgMzEzLjA3IDMwMC42MiAzMTIuMzMgMzAxLjUyIDMxMS42MCAzMDIuNDQgQyAzMTAuOTMgMzAwLjgwIDMxMC42NCAyOTguODIgMzA5LjA3IDI5Ny43NiBDIDMwNS43OCAyOTUuMDcgMzAyLjExIDI5Mi45MSAyOTguNTggMjkwLjU3IEMgMjk3LjE3IDI4OS40NyAyOTUuMzUgMjg5LjUwIDI5My42NyAyODkuMzMgQyAyOTMuMzQgMjkwLjYzIDI5My4wMiAyOTEuOTMgMjkyLjcwIDI5My4yMyBDIDI5My4wMiAyOTQuMDcgMjkzLjM1IDI5NC45MiAyOTMuNjggMjk1Ljc3IEMgMjkyLjE1IDI5OS43NSAyOTEuMjAgMzAzLjkxIDI5MC4xNyAzMDguMDMgQyAyODYuMzkgMzAwLjkxIDI4Mi4zOSAyOTMuNzkgMjgwLjk1IDI4NS43NSBDIDI4MC41MyAyODcuOTQgMjgwLjE2IDI5MC4xNyAyNzguNzggMjkyLjAwIEMgMjc3Ljc4IDI5MC40NyAyNzYuODIgMjg4Ljg4IDI3NS4zOCAyODcuNzEgQyAyNzYuMjIgMjkwLjUyIDI3Ny4zNyAyOTMuMjMgMjc4LjA1IDI5Ni4wOSBDIDI3OC41OCAyOTguNzQgMjgxLjgyIDI5OS41NyAyODIuNTkgMzAyLjEyIEMgMjgzLjg2IDMwNS41MCAyODQuOTYgMzA4Ljk1IDI4Ni40NSAzMTIuMjQgQyAyODUuMjUgMzExLjU3IDI4NC4wNiAzMTAuOTEgMjgyLjg3IDMxMC4yNCBDIDI4MS43MCAzMTAuNTggMjgwLjU0IDMxMC45MiAyNzkuMzkgMzExLjI4IEMgMjc5LjEwIDMxMS44MSAyNzguNTIgMzEyLjg3IDI3OC4yMyAzMTMuMzkgQyAyNzYuODkgMzExLjUxIDI3NS41NiAzMDkuNTYgMjczLjY3IDMwOC4xOSBDIDI3NS41NCAzMDYuODIgMjc3LjU5IDMwNS4zOCAyNzguMDYgMzAyLjk0IEMgMjc0Ljg3IDMwNC44MSAyNzIuMTYgMzA3LjM1IDI2OS4xMyAzMDkuNDMgQyAyNjcuMjIgMzEwLjUxIDI2Ni43NCAzMTIuNzggMjY1Ljg2IDMxNC42MiBDIDI2MS43NyAzMTAuOTYgMjYxLjUyIDMwNS4zNCAyNjAuMjggMzAwLjM2IEMgMjYwLjAyIDMwMS42NiAyNTkuNzcgMzAyLjk3IDI1OS41NCAzMDQuMjggQyAyNTguNzEgMzAyLjY2IDI1Ny43OCAzMDEuMDMgMjU2LjA5IDMwMC4xNiBDIDI1Ni4wNyAzMDMuMzkgMjU2LjI4IDMwNi42NSAyNTcuMjAgMzA5Ljc2IEMgMjU1LjgwIDMwOS43MCAyNTQuNDAgMzA5LjY2IDI1My4wMCAzMDkuNjUgQyAyNTQuODQgMzExLjE3IDI1Ni44MyAzMTIuNDggMjU4Ljg5IDMxMy42OSBDIDI1OC45MSAzMTYuMzkgMjU4Ljg2IDMxOS4wOCAyNTguODAgMzIxLjc4IEMgMjU3LjYyIDMyMy4wNyAyNTYuNDIgMzI0LjM1IDI1NS4xOSAzMjUuNTkgQyAyNTIuNDIgMzI0LjExIDI0OS43NyAzMjIuMzggMjQ2Ljc3IDMyMS40MSBDIDI0Ni4yOSAzMTguODYgMjQ1LjcyIDMxNi4zMiAyNDUuMjYgMzEzLjc2IEMgMjQ0LjA4IDMxMy4wMCAyNDIuOTAgMzEyLjIzIDI0MS43MyAzMTEuNDYgQyAyMzguMjIgMzEyLjYzIDIzNi41NyAzMTYuMjAgMjM3LjYxIDMxOS43MSBDIDIzNi44NCAzMTkuOTUgMjM2LjA4IDMyMC4yMCAyMzUuMzEgMzIwLjQ1IEMgMjM1LjY1IDMxNS45MCAyMzcuMjcgMzExLjU0IDIzNy41MiAzMDcuMDEgQyAyMzcuNjUgMzA0LjkxIDIzNC42MCAzMDUuMjEgMjMzLjM5IDMwNC41NCBDIDIzNC42MyAzMTIuODggMjMxLjc5IDMyMS4wMSAyMjguODIgMzI4LjY0IEMgMjI4LjAxIDMyOC44NyAyMjYuMzggMzI5LjMzIDIyNS41NyAzMjkuNTYgQyAyMjQuOTcgMzI0LjA2IDIyMi40OSAzMTcuODkgMjI2LjI3IDMxMi45OCBDIDIyNS41MyAzMTEuMjIgMjI0Ljk0IDMwOS40MCAyMjQuMzYgMzA3LjU4IEMgMjIzLjkzIDMwNy41NiAyMjMuMDcgMzA3LjUxIDIyMi42NCAzMDcuNDkgQyAyMTkuNzcgMzEyLjExIDIyMi44MSAzMTcuNzggMjIwLjE0IDMyMi41MiBDIDIxNy4zMiAzMTkuNjIgMjE1LjU1IDMxNS45MSAyMTIuODcgMzEyLjkwIEMgMjEzLjM0IDMxNC40NSAyMTMuOTAgMzE1Ljk4IDIxNC41MSAzMTcuNTAgQyAyMTMuNjQgMzE4LjM0IDIxMi43NyAzMTkuMTkgMjExLjkyIDMyMC4wNCBDIDIxMy4xOCAzMjAuNjggMjE0LjQ1IDMyMS4zMCAyMTUuNzQgMzIxLjg2IEMgMjE2LjM3IDMyMi43NyAyMTcuMDAgMzIzLjY5IDIxNy42NSAzMjQuNjAgQyAyMTUuMDUgMzI1LjE3IDIxMi4zNyAzMjUuNzYgMjEwLjQ0IDMyNy43NCBDIDIxMC45NyAzMjUuMjIgMjA4LjM3IDMyNC40MSAyMDcuNDAgMzIyLjYwIEMgMjA2LjY4IDMyMC44NiAyMDguMDcgMzE5LjMyIDIwOC42NyAzMTcuODAgQyAyMDguMzIgMzE2LjM4IDIwNy45NCAzMTQuOTcgMjA3LjU1IDMxMy41NyBDIDIwNi44NCAzMTQuMzMgMjA1Ljc0IDMxNC45MyAyMDUuNTggMzE2LjA2IEMgMjA0LjM0IDMyMS43MyAyMDYuNDcgMzI3LjQzIDIwNi4zMCAzMzMuMTMgQyAyMDUuNTYgMzMyLjE0IDIwNC44NCAzMzEuMTUgMjA0LjExIDMzMC4xNiBDIDIwMS42NyAzMjguOTIgMjAwLjE5IDMyNi42MiAxOTguMzggMzI0LjY5IEMgMTk2LjUyIDMyMi45OCAxOTMuOTEgMzI0LjMxIDE5MS43NiAzMjQuNDkgQyAxOTAuODYgMzI3LjEzIDE4OS43MCAzMjkuOTUgMTkwLjQzIDMzMi43OSBDIDE5MS4xNiAzMzQuNjIgMTkyLjExIDMzNi4zNSAxOTIuOTEgMzM4LjE1IEMgMTkxLjY0IDMzNy4xOSAxODkuODUgMzM2LjU0IDE4OS4zMSAzMzQuOTAgQyAxODguODQgMzMyLjQ0IDE4OC43NSAzMjkuOTMgMTg4LjM5IDMyNy40NiBDIDE5MS43OCAzMjQuMDUgMTk1LjU1IDMyMS4wOSAxOTkuNTEgMzE4LjM4IEMgMjAxLjExIDMxNy42MCAyMDAuNDEgMzE1Ljc4IDIwMC40MiAzMTQuNDAgQyAyMDAuNjQgMzE0LjA2IDIwMS4wNyAzMTMuMzkgMjAxLjI4IDMxMy4wNSBDIDE5OS43MSAzMTMuNDggMTk3LjM5IDMxMi42MiAxOTYuNDIgMzE0LjM0IEMgMTk0LjQ4IDMxNi43NiAxOTMuNTYgMzE5Ljk4IDE5MC45OSAzMjEuODkgQyAxODkuMjggMzIzLjIxIDE4Ny40MyAzMjQuMzQgMTg1LjYzIDMyNS41NCBDIDE4NS4zMSAzMjUuMjcgMTg0LjY1IDMyNC43MyAxODQuMzIgMzI0LjQ3IEMgMTgzLjQ2IDMyNC41MiAxODEuNzIgMzI0LjYyIDE4MC44NSAzMjQuNjggQyAxODIuNTIgMzIxLjA2IDE4My44OSAzMTcuMzAgMTg1LjY2IDMxMy43MyBDIDE4Ni4yOCAzMTIuMjUgMTg3LjM0IDMxMC43MCAxODYuNzkgMzA5LjA0IEMgMTg2LjE5IDMwNy43NSAxODQuNjQgMzA3LjU4IDE4My41MSAzMDcuMDEgQyAxODIuNjkgMzE2LjM1IDE3Ny4wOSAzMjQuMjcgMTcxLjkxIDMzMS43NCBDIDE3MS4wMiAzMzAuMTkgMTcwLjA1IDMyOC42OSAxNjkuMjUgMzI3LjEwIEMgMTcyLjAwIDMyMi44MyAxNzMuNTMgMzE3LjAyIDE3OC43MCAzMTUuMDYgQyAxNzguNzcgMzEzLjQ0IDE3OC43MSAzMTEuODMgMTc4LjU4IDMxMC4yMiBDIDE3Ny42NSAzMTAuMzggMTc2LjczIDMxMC41NiAxNzUuODEgMzEwLjc4IEMgMTc2LjE3IDMxMS45NiAxNzYuNjMgMzEzLjE5IDE3Ni4xMiAzMTQuNDMgQyAxNzUuODQgMzEzLjUzIDE3NS4yOSAzMTEuNzUgMTc1LjAxIDMxMC44NSBDIDE3My45NCAzMTIuOTMgMTczLjQ4IDMxNS4yNyAxNzIuMzUgMzE3LjMyIEMgMTcwLjg0IDMxOS41OSAxNjguNzcgMzIxLjQwIDE2Ni45MCAzMjMuMzcgQyAxNjUuOTIgMzIyLjYyIDE2NC45NCAzMjEuODggMTYzLjk2IDMyMS4xNSBDIDE2MC45OCAzMjAuOTEgMTU3Ljk3IDMyMS4yMyAxNTUuNDMgMzIyLjkxIEMgMTU1LjAzIDMyMC4yNCAxNTQuNjYgMzE3LjU2IDE1NC40MyAzMTQuODcgQyAxNTUuMjYgMzEzLjk1IDE1Ni4wOCAzMTMuMDUgMTU2LjkxIDMxMi4xNCBDIDE1Ni44NyAzMTAuNzQgMTU2Ljg0IDMwOS4zNCAxNTYuODEgMzA3Ljk1IEMgMTU1LjA4IDMwNi45NSAxNTMuNTEgMzA1LjA5IDE1MS4zNCAzMDUuMzQgQyAxNDguNzQgMzA2LjU5IDE0Ni4yNiAzMDguODMgMTQ1Ljg4IDMxMS44MyBDIDE0NS41OCAzMTQuMDIgMTQ1LjU2IDMxNi4yMyAxNDUuMzkgMzE4LjQzIEMgMTQ0LjkyIDMxOC41NCAxNDMuOTcgMzE4Ljc2IDE0My41MCAzMTguODggQyAxNDIuOTggMzE1LjI1IDE0My41OSAzMTEuNjYgMTQ0LjQzIDMwOC4xNCBDIDE0Ny43MyAzMDUuOTkgMTUxLjAyIDMwMy42OCAxNTQuODggMzAyLjYzIEMgMTU2LjMwIDMwMy40MyAxNTcuNzMgMzA0LjIxIDE1OS4xOCAzMDQuOTcgQyAxNjAuNTcgMzAyLjgwIDE2MC44NyAzMDAuMzQgMTU5LjcxIDI5OC4wMSBDIDE1My41MCAzMDAuMzcgMTQ2LjkwIDMwMS43OSAxNDAuOTcgMzA0Ljg1IEMgMTM5LjE0IDMwOS40NCAxMzYuNzQgMzEzLjc5IDEzNS4zOCAzMTguNTYgTCAxMzQuNjUgMzE4LjE4IEMgMTM0LjE2IDMxOS41OSAxMzMuNjIgMzIwLjk5IDEzMy4wMyAzMjIuMzYgQyAxMzEuNzggMzE4LjE5IDEyOS45MCAzMTQuMjMgMTI4LjgzIDMxMC4wMCBDIDEyOS41OCAzMDkuMjcgMTMxLjA4IDMwNy44MCAxMzEuODIgMzA3LjA2IEwgMTI4Ljc1IDMwNy4zMiBDIDEyOS44OSAzMDYuNTggMTMxLjAzIDMwNS44MyAxMzIuMTYgMzA1LjA4IEMgMTMxLjExIDMwNC43MCAxMjguOTkgMzAzLjk2IDEyNy45NCAzMDMuNTkgQyAxMjcuMzYgMzAwLjk5IDEyNy4wOCAyOTguMzMgMTI3LjY3IDI5NS43MSBDIDEyNi4zNiAyOTcuOTEgMTI0LjY0IDI5OS44MSAxMjIuNzggMzAxLjU3IEMgMTIzLjYwIDMwMS41MyAxMjUuMjIgMzAxLjQ2IDEyNi4wMyAzMDEuNDIgQyAxMjUuMzAgMzAyLjA3IDEyMy44MyAzMDMuMzcgMTIzLjEwIDMwNC4wMiBDIDEyMy41NyAzMDQuNTMgMTI0LjUxIDMwNS41NSAxMjQuOTggMzA2LjA2IEMgMTIyLjM2IDMwOC44MiAxMTguODggMzEwLjQzIDExNS4xOSAzMTEuMTYgQyAxMTYuMzEgMzA0LjkxIDExNy4zMSAyOTguNDQgMTIwLjU4IDI5Mi44NyBDIDExOS44MiAyOTMuMjIgMTE4LjI4IDI5My45MCAxMTcuNTIgMjk0LjI1IEMgMTE4LjA0IDI5My4zMCAxMTkuMDggMjkxLjQwIDExOS42MCAyOTAuNDUgQyAxMTguNzggMjkxLjI3IDExNy4xNCAyOTIuOTEgMTE2LjMyIDI5My43NCBDIDExNi41MSAyOTIuNzcgMTE2Ljg5IDI5MC44NCAxMTcuMDkgMjg5Ljg4IEMgMTE2LjY2IDI5MC4zOSAxMTUuODAgMjkxLjQzIDExNS4zOCAyOTEuOTUgQyAxMTQuOTcgMjg5LjY3IDExMi41OSAyODkuNTYgMTEzLjIxIDI5MS44NyBDIDExMi40NSAyOTUuMDcgMTE1LjQ4IDI5OC4wMSAxMTQuMDQgMzAxLjEwIEMgMTEyLjg1IDMwNC4zMyAxMTEuNjAgMzA3LjU3IDExMC45OCAzMTAuOTggQyAxMDkuNjQgMzEwLjU5IDEwOC4zMCAzMTAuMjYgMTA2Ljk1IDMwOS45NyBDIDEwOC4yOCAzMDguNTAgMTA5LjQ2IDMwNi45MCAxMTAuMzkgMzA1LjE1IEMgMTExLjE5IDMwNC4zOCAxMTEuOTggMzAzLjU4IDExMi42OSAzMDIuNzIgQyAxMTIuMDQgMzAyLjQ1IDExMC43NSAzMDEuOTAgMTEwLjEwIDMwMS42MyBDIDExMC42OCAyOTkuOTUgMTExLjI4IDI5OC4yOCAxMTEuNjggMjk2LjU2IEMgMTA5LjI5IDI5OS40NCAxMDcuOTEgMzAyLjk1IDEwNi4yMiAzMDYuMjQgQyAxMDMuODUgMzA4Ljc5IDEwMC40NCAzMTAuMDMgOTcuMzQgMzExLjQ0IEMgOTcuMzIgMzExLjE5IDk3LjI3IDMxMC43MSA5Ny4yNCAzMTAuNDYgQyA5OC4wNyAzMDQuMDggOTcuMzIgMjk3LjYyIDk4LjM3IDI5MS4yNiBDIDEwMS4xOSAyODkuNjEgMTA0LjEwIDI4OC4wNyAxMDYuNjkgMjg2LjA1IEMgMTA2LjU2IDI4NS40MCAxMDYuMjkgMjg0LjA5IDEwNi4xNiAyODMuNDMgQyAxMDMuNTIgMjg1LjE5IDEwMC42MSAyODYuNDQgOTcuODYgMjg4LjAwIEMgOTUuNzAgMjg5LjM2IDk1LjIyIDI5Mi4wNyA5NC41NiAyOTQuMzUgQyA5My40MCAyOTguMzggOTIuODUgMzAyLjU1IDkyLjY0IDMwNi43MyBDIDkxLjMwIDMwNS4wOSA4OS44NiAzMDMuNTQgODguMzkgMzAyLjAyIEwgODguMzQgMzAxLjQ1IEMgODguNDAgMjk4LjkzIDg3LjM3IDI5Ni42NSA4Ni40MCAyOTQuNDAgQyA4NC44MSAyOTMuODcgODMuMjYgMjkzLjk0IDgxLjczIDI5NC42MCBDIDgxLjUwIDI5My40MSA4MS4yNSAyOTIuMjMgODEuMDkgMjkxLjA0IEMgODUuMTIgMjg4LjEyIDg5LjE4IDI4NS4xMCA5Mi41MyAyODEuNDAgQyA5Mi4yNiAyODAuNjQgOTEuNzAgMjc5LjExIDkxLjQyIDI3OC4zNCBDIDkxLjAxIDI3OC4wMiA5MC4xOCAyNzcuMzkgODkuNzcgMjc3LjA3IEMgODYuNjYgMjgxLjgzIDgyLjY3IDI4NS45MyA3Ny44OSAyODkuMDIgQyA1OS4wNyAyNjMuNDcgNDguNTUgMjMxLjc1IDQ5LjEwIDE5OS45NiBDIDQ4LjYwIDE2OC4zOCA1OS4yMSAxMzcuMDUgNzcuNjIgMTExLjUzIEMgODcuNDUgOTguMjIgOTkuMzQgODYuNDMgMTEyLjc0IDc2LjczIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ni45MCA1Ny40MiBDIDIwNS45NSA1NS4xMiAyMTYuNDUgNTguMzAgMjIyLjAzIDY1Ljk2IEMgMjI3LjE1IDcyLjczIDIyNy4zNyA4Mi4xNyAyMjQuNTggODkuOTIgQyAyMjEuNTUgOTcuODMgMjEzLjk3IDEwMi44NCAyMDYuMzAgMTA1LjYxIEMgMjA2LjI5IDEwOC4wMiAyMDYuMjcgMTEwLjQyIDIwNi4yNiAxMTIuODMgQyAyMDQuMDkgMTE1LjE2IDIwMi4wMyAxMTcuNTkgMTk5Ljk3IDEyMC4wMyBDIDE5OC43MCAxMTguNzAgMTk2LjgwIDExNy43NiAxOTYuMTEgMTE2LjAwIEMgMTk3LjAwIDExNC40MCAxOTguMzkgMTEzLjE1IDE5OS42MSAxMTEuODAgQyAxOTEuODAgMTA0Ljg4IDE4Mi45OSA5OS4xNyAxNzUuMzIgOTIuMTAgQyAxNzYuMDcgOTAuNjAgMTc3LjIzIDg5LjQ2IDE3OC44NyA4OS4wMiBDIDE4My4wNyA5Mi45MiAxODYuOTUgOTcuMTYgMTkxLjE4IDEwMS4wMyBDIDE5My40MyA5NC43MiAxOTYuMDEgODguNDkgMTk3Ljc4IDgyLjA0IEMgMTk3LjQ1IDc4LjI0IDE5Ni4wNCA3NC42MyAxOTUuMjIgNzAuOTIgQyAxOTAuMDkgNjkuNzUgMTg1LjE1IDY3Ljg2IDE4MC4wMiA2Ni42NyBDIDE3OC4yMCA2Ni45MiAxNzYuNDEgNjcuMzUgMTc0LjU5IDY3LjU1IEMgMTc0LjU1IDY2LjUwIDE3NC41MSA2NS40NiAxNzQuNDkgNjQuNDEgQyAxNzcuMzggNjQuMzcgMTgwLjIyIDY0Ljk2IDE4My4wNSA2NS40NiBDIDE4Ni45MCA2MS42OSAxOTEuNTUgNTguNTMgMTk2LjkwIDU3LjQyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE4NC45NCA2NS44MSBDIDE4OS4zMiA2MS4zNCAxOTUuNzQgNTkuMDIgMjAxLjk3IDU5LjUwIEMgMjA5LjQ4IDU5LjcwIDIxNi41NSA2NC42MiAyMTkuNDMgNzEuNTUgQyAyMjIuNTAgNzkuMDggMjIyLjU1IDg4LjIwIDIxOC4yNCA5NS4yOCBDIDIxNi4xMCA5OC43OCAyMTIuNjIgMTAxLjIyIDIwOC44NSAxMDIuNzAgQyAyMDcuMzggOTUuNzUgMjA2LjE5IDg4LjczIDIwNC40MSA4MS44NyBDIDIwMy44NCA4MS43MiAyMDIuNzAgODEuNDEgMjAyLjEzIDgxLjI1IEMgMjAzLjk2IDc5LjAwIDIwNS4zMSA3Ni40MCAyMDYuMDcgNzMuNTkgQyAyMDkuOTkgNzIuODIgMjEzLjk4IDcyLjU4IDIxNy45NSA3Mi4yNCBDIDIxNC42OSA2OC43NyAyMDkuOTUgNjYuNTUgMjA3Ljk0IDYyLjA0IEMgMjA3LjI1IDYyLjE3IDIwNS44NiA2Mi40MiAyMDUuMTcgNjIuNTUgQyAyMDUuNTIgNjMuNTUgMjA1LjQwIDY1LjA2IDIwNi43NyA2NS4zMiBDIDIwOC44NiA2Ni4xNCAyMTAuMDggNjguMDkgMjExLjI4IDY5Ljg2IEMgMjA4LjI2IDY5Ljc1IDIwNS4yOSA2OS4yMiAyMDIuMzYgNjguNTIgQyAyMDIuMDggNjYuMTggMjAxLjg1IDYzLjg0IDIwMS42NCA2MS40OSBDIDE5OS44MyA2MS4yNCAxOTguMDEgNjEuMDAgMTk2LjE5IDYwLjg1IEMgMTk2LjU4IDYzLjczIDE5Ny42OCA2Ni40MyAxOTkuODkgNjguMzkgQyAxOTQuODggNjcuNjggMTg5LjkxIDY2Ljc0IDE4NC45NCA2NS44MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTIuMTkgMTAyLjAwIEMgMTk0Ljg4IDk2Ljg3IDE5OC4xMyA5Mi4wMyAyMDEuMDggODcuMDQgQyAyMDMuNDQgOTIuMzEgMjA1LjQ1IDk3LjczIDIwNy42MCAxMDMuMTAgQyAyMDQuNzUgMTA1LjAxIDIwMi45MyAxMDcuOTggMjAwLjc1IDExMC41NyBDIDE5Ny43OSAxMDcuODIgMTk0LjgzIDEwNS4wNiAxOTIuMTkgMTAyLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ny41MyA5OS40OSBDIDE5OC40NyA5OS40OCAyMDAuMzYgOTkuNDYgMjAxLjMwIDk5LjQ2IEMgMjAxLjI5IDEwMi4wOCAyMDEuMzAgMTA0LjcwIDIwMS4yOSAxMDcuMzMgQyAyMDAuNjcgMTA3LjI5IDE5OS40NCAxMDcuMjAgMTk4LjgyIDEwNy4xNiBDIDE5OC42NSAxMDQuNTYgMTk4LjY0IDEwMS45MSAxOTcuNTMgOTkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTc1LjY5IDEwOS41NSBDIDE3Ni4wMCAxMDcuNDMgMTc0LjM2IDEwMy43MiAxNzcuNzAgMTAzLjY1IEMgMTc3LjcxIDEwNC41NyAxNzcuNzQgMTA2LjQyIDE3Ny43NSAxMDcuMzUgQyAxODAuNjUgMTA3LjQ1IDE4My41NSAxMDcuNTYgMTg2LjQ1IDEwNy4zOCBDIDE4Ny4yMSAxMDguOTggMTg3Ljk5IDExMC41NyAxODguODYgMTEyLjExIEMgMTg5Ljc3IDExMC42MSAxODguNTMgMTA4Ljk5IDE4OC4zNCAxMDcuNDggQyAxODkuMTkgMTA3LjQ1IDE5MC44OCAxMDcuNDAgMTkxLjczIDEwNy4zNyBDIDE5MS43OCAxMTAuMzAgMTkxLjgwIDExMy4yNCAxOTEuNzggMTE2LjE3IEMgMTg5LjEwIDExNS45MyAxODYuMTIgMTE2LjgxIDE4My42NCAxMTUuNTYgQyAxODMuNjMgMTE1LjE1IDE4My42MCAxMTQuMzMgMTgzLjU4IDExMy45MiBDIDE4NC40MCAxMTMuODIgMTg2LjA0IDExMy42MiAxODYuODYgMTEzLjUyIEMgMTg1Ljc2IDExMS4zNSAxODQuNDMgMTA5LjMwIDE4Mi44MiAxMDcuNDggQyAxODEuMzIgMTEwLjYxIDE4Mi43NCAxMTcuMzYgMTc3LjM1IDExNi40MCBDIDE3Ny4yNCAxMTQuOTggMTc3LjgxIDExMy44OCAxNzkuMDUgMTEzLjA5IEMgMTc5LjE5IDExMi4yMSAxNzkuNDYgMTEwLjQ1IDE3OS42MCAxMDkuNTcgQyAxNzguMjkgMTA5LjU2IDE3Ni45OSAxMDkuNTYgMTc1LjY5IDEwOS41NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMDcuNDkgMTA3LjM3IEMgMjA5Ljc1IDEwNy40MCAyMTIuMDEgMTA3LjQxIDIxNC4yOCAxMDcuNDEgQyAyMTQuMjMgMTEwLjE4IDIxNC4yMyAxMTIuOTUgMjE0LjM2IDExNS43MiBDIDIxMi4xMiAxMTYuMjMgMjA5LjgxIDExNi4yMiAyMDcuNTIgMTE2LjIzIEMgMjA3LjUwIDExNS42MSAyMDcuNDQgMTE0LjM5IDIwNy40MSAxMTMuNzggQyAyMDguODYgMTEzLjc4IDIxMC4zMSAxMTMuNzkgMjExLjc2IDExMy43OSBDIDIxMS42NiAxMTIuMTcgMjExLjgyIDExMC40NCAyMTAuOTQgMTA5LjAxIEMgMjEwLjMwIDExMC43NSAyMDkuMTIgMTExLjU4IDIwNy40MSAxMTEuNTEgQyAyMDcuNDMgMTEwLjQ3IDIwNy40NyAxMDguNDEgMjA3LjQ5IDEwNy4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTUuODIgMTA3LjQyIEMgMjE3Ljk1IDEwNy40MSAyMjAuMDkgMTA3LjQxIDIyMi4yMiAxMDcuNDIgQyAyMjIuMTUgMTEwLjEzIDIyMi4xNCAxMTIuODUgMjIyLjI1IDExNS41NiBDIDIyMS42MyAxMTUuNzYgMjIwLjM4IDExNi4xNSAyMTkuNzYgMTE2LjM1IEMgMjE5LjczIDExNC4wOCAyMTkuNzIgMTExLjgxIDIxOS43MCAxMDkuNTQgQyAyMTguNDIgMTA5LjUzIDIxNy4xNCAxMDkuNTMgMjE1Ljg2IDEwOS41MyBMIDIxNS44MiAxMDcuNDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjE2LjIzIDExMS40NCBDIDIxNi43OCAxMTEuNTMgMjE3Ljg3IDExMS43MCAyMTguNDEgMTExLjc5IEMgMjE4LjM5IDExMy4yOCAyMTguMzcgMTE0Ljc4IDIxOC4zNSAxMTYuMjggQyAyMTcuNjkgMTE2LjI0IDIxNi4zOSAxMTYuMTUgMjE1Ljc0IDExNi4xMSBDIDIxNS44OSAxMTQuNTUgMjE2LjA1IDExMy4wMCAyMTYuMjMgMTExLjQ0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDExOS4yNSAxMzYuMzAgQyAxMjQuNzQgMTM2LjM1IDEzMC4yMyAxMzYuMzEgMTM1LjczIDEzNi4zMiBDIDEzNS43NiAxNDMuNDIgMTM1LjY5IDE1MC41MiAxMzUuNzcgMTU3LjYyIEMgMTM4LjE3IDE1NS45NiAxNDEuNDggMTU0Ljg3IDE0Mi42NCAxNTEuOTUgQyAxNDMuMTIgMTQ2Ljc2IDE0Mi42OSAxNDEuNTMgMTQyLjg2IDEzNi4zMiBDIDE0OC42MyAxMzYuMzIgMTU0LjQwIDEzNi4zMSAxNjAuMTggMTM2LjMzIEMgMTYwLjEwIDE0MS4yNiAxNjAuMjYgMTQ2LjIwIDE2MC4xMiAxNTEuMTMgQyAxNTkuNzggMTU1LjA1IDE1Ny4zMSAxNTguNzEgMTUzLjg5IDE2MC42MSBDIDE0Ny44NSAxNjQuMDQgMTQxLjgwIDE2Ny40NCAxMzUuNzMgMTcwLjgwIEMgMTM1LjczIDE3Ny44MSAxMzUuNzMgMTg0LjgyIDEzNS43NCAxOTEuODMgQyAxMzAuMjQgMTkxLjg2IDEyNC43NCAxOTEuODIgMTE5LjIzIDE5MS44NiBDIDExOS4yNyAxNzMuMzQgMTE5LjIzIDE1NC44MiAxMTkuMjUgMTM2LjMwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE2NC45MiAxMzYuMzIgQyAxNzAuNDYgMTM2LjM1IDE3NS45OSAxMzYuMjggMTgxLjUyIDEzNi4zNSBDIDE4MS40NCAxNTAuNzkgMTgxLjQzIDE2NS4yMyAxODEuNTIgMTc5LjY3IEMgMTc2LjA1IDE3OS42MiAxNzAuNTcgMTc5Ljg3IDE2NS4xMCAxNzkuNTcgQyAxNjQuNjMgMTY1LjIzIDE2NC45OSAxNTAuNzIgMTY0LjkyIDEzNi4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxODYuMjggMTM2LjMwIEMgMjAwLjY5IDEzNi4zNCAyMTUuMTAgMTM2LjMzIDIyOS41MSAxMzYuMzEgQyAyMjkuNTIgMTUwLjc3IDIyOS40OSAxNjUuMjMgMjI5LjUzIDE3OS42OSBDIDIyMy45NCAxNzkuNjQgMjE4LjM1IDE3OS44MSAyMTIuNzcgMTc5LjYwIEMgMjEyLjk1IDE3MC4yOCAyMTIuNzcgMTYwLjk1IDIxMi44NyAxNTEuNjIgQyAyMDkuNTEgMTUxLjU1IDIwNi4xNSAxNTEuNTcgMjAyLjgwIDE1MS42MCBDIDIwMi44NyAxNjAuOTYgMjAyLjgxIDE3MC4zMyAyMDIuODMgMTc5LjY5IEMgMTk3LjMyIDE3OS43MyAxOTEuODAgMTc5LjY3IDE4Ni4yOSAxNzkuNjkgQyAxODYuMzAgMTY1LjIzIDE4Ni4zMiAxNTAuNzYgMTg2LjI4IDEzNi4zMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyMzQuMDkgMTM2LjI4IEMgMjM5LjY3IDEzNi4zOCAyNDUuMjUgMTM2LjI5IDI1MC44NCAxMzYuMzMgQyAyNTAuODYgMTQxLjUyIDI1MC42NiAxNDYuNzIgMjUwLjk5IDE1MS45MCBDIDI1My44OCAxNDguOTAgMjUzLjUzIDE0NC4yMyAyNTUuODAgMTQwLjgzIEMgMjU3LjU3IDEzNy41OSAyNjEuNDEgMTM2LjI4IDI2NC45MiAxMzYuMzQgQyAyNjguNzQgMTM2LjQwIDI3Mi44NSAxMzUuNzggMjc2LjQyIDEzNy40OCBDIDI3OS41MSAxMzkuMDQgMjgwLjc2IDE0Mi42NyAyODAuNzEgMTQ1Ljk1IEMgMjgwLjc0IDE1Ny4xOCAyODAuNzAgMTY4LjQyIDI4MC43MiAxNzkuNjYgQyAyNzIuOTIgMTc5LjY2IDI2NS4xMiAxNzkuNzAgMjU3LjMyIDE3OS42NiBDIDI1Ny4zNyAxNzQuNTkgMjU3LjM1IDE2OS41MiAyNTcuMzIgMTY0LjQ1IEMgMjU5LjU2IDE2NC40NSAyNjEuODEgMTY0LjQ0IDI2NC4wNiAxNjQuNDMgQyAyNjQuMDMgMTYwLjYyIDI2NC4yNCAxNTYuNzkgMjYzLjczIDE1My4wMSBDIDI2Mi4wOSAxNTIuNDEgMjU5LjExIDE1MS44NiAyNTguNDUgMTU0LjA0IEMgMjU1Ljg2IDE2Mi41NSAyNTMuNTEgMTcxLjE0IDI1MC45NCAxNzkuNjYgQyAyNDUuMDcgMTc5LjczIDIzOS4xOSAxNzkuNzIgMjMzLjMyIDE3OS42NiBDIDIzNS41NCAxNzIuNjYgMjM3LjU5IDE2NS42MCAyMzkuODkgMTU4LjYyIEMgMjM3Ljc5IDE1OC4yMiAyMzQuNjAgMTU3LjkwIDIzNC4zNiAxNTUuMTggQyAyMzMuNzYgMTQ4LjkxIDIzNC4yNSAxNDIuNTggMjM0LjA5IDEzNi4yOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMi4zNiAxODMuOTggQyAyNC45MyAxODQuNjMgMjcuNDIgMTg1LjU1IDI5Ljc0IDE4Ni44NSBDIDI4LjgyIDE4Ny4zNiAyNi45OCAxODguMzggMjYuMDcgMTg4Ljg5IEMgMjYuNDQgMTg5LjA2IDI3LjE5IDE4OS40MCAyNy41NyAxODkuNTYgQyAyNy43OCAxOTAuMjQgMjguMjAgMTkxLjYwIDI4LjQxIDE5Mi4yOCBDIDI4LjI5IDE5Mi45NCAyOC4wNiAxOTQuMjYgMjcuOTQgMTk0LjkyIEMgMjkuNDAgMTkyLjE0IDMyLjYwIDE5MC45NCAzNC4xMCAxODguMjEgQyAzNC43MiAxODguMjAgMzUuOTcgMTg4LjIwIDM2LjU5IDE4OC4yMCBDIDM2LjU4IDE4OS4zNyAzNi41NyAxOTAuNTUgMzYuNTYgMTkxLjczIEMgMzMuOTUgMTkyLjc5IDMxLjcyIDE5NC41MSAyOS40MSAxOTYuMDggQyAzMC41OSAxOTYuODcgMzEuNzggMTk3LjY4IDMyLjk3IDE5OC40OCBDIDMzLjgzIDE5OC4zNSAzNS41NyAxOTguMDggMzYuNDQgMTk3Ljk1IEMgMzYuNDcgMTk5LjU3IDM2LjQ5IDIwMS4yMCAzNi40OCAyMDIuODMgQyAzMy42NyAyMDEuODcgMzEuMDYgMjAwLjQ1IDI4LjQ0IDE5OS4wNyBDIDI3LjQ4IDIwMS4yMiAyNS42MSAyMDIuNjUgMjMuNzYgMjAzLjk5IEMgMjUuNTkgMjA1LjM0IDI3LjU0IDIwNi41NyAyOS4wNiAyMDguMjkgQyAzMC4yMCAyMDkuODMgMjguNzUgMjExLjc3IDI4LjQ4IDIxMy4zNyBDIDI5LjkwIDIxNC4wNCAzMS4zMyAyMTQuNzUgMzIuMDAgMjE2LjI5IEMgMzAuMjggMjE2LjMwIDI4LjU3IDIxNi4yMiAyNi44NiAyMTYuMDQgQyAyNC45MyAyMTUuMjMgMjUuOTkgMjEyLjgzIDI1LjY0IDIxMS4yNyBDIDI0Ljg2IDIxMC4yNiAyMy42MyAyMDkuNzYgMjIuNjEgMjA5LjA2IEMgMjEuMjUgMjEwLjMyIDE5LjQzIDIxMS4zMyAxOS4wNSAyMTMuMzAgQyAyMC40MyAyMTQuMDMgMjEuODUgMjE0Ljc4IDIyLjY2IDIxNi4yMSBDIDIwLjY5IDIxNi4yNiAxOC43MiAyMTYuMjUgMTYuNzQgMjE2LjIwIEMgMTUuNzYgMjEyLjYyIDE4LjAyIDIwOS4yMSAxNy4yNiAyMDUuNjcgQyAxNi4zNiAyMDUuMTIgMTUuNDEgMjA0LjY1IDE0LjQ0IDIwNC4yNSBDIDEyLjk4IDIwMC45NCAxNC44MSAxOTcuNDMgMTQuMjEgMTk0LjAzIEMgMTMuODkgMTkyLjQxIDEzLjQ5IDE5MC44MiAxMy4yMCAxODkuMjAgQyAxMy44MCAxODkuMjIgMTUuMDIgMTg5LjI0IDE1LjYzIDE4OS4yNiBDIDE1LjkyIDE5My41MCAxNS42MiAxOTcuNzQgMTUuNTEgMjAxLjk4IEMgMTUuOTAgMjAyLjQyIDE2LjY4IDIwMy4yOSAxNy4wNyAyMDMuNzIgQyAxOC41NSAyMDIuMzMgMjAuNzUgMjAxLjMyIDIxLjEyIDE5OS4xMSBDIDIxLjY2IDE5NS42NCAxOC43NyAxOTIuNTAgMTkuNjggMTg5LjAxIEMgMjAuMzIgMTg3LjIxIDIxLjQyIDE4NS42MyAyMi4zNiAxODMuOTggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzY5LjI1IDE4Ni45MCBDIDM3MS41NCAxODUuNTUgMzc0LjA0IDE4NC42NCAzNzYuNjAgMTgzLjk1IEMgMzc3LjU0IDE4NS42MCAzNzguNjMgMTg3LjE5IDM3OS4zMCAxODguOTggQyAzNzkuOTggMTkyLjA5IDM3OC4wNiAxOTQuOTggMzc3Ljc3IDE5OC4wMiBDIDM3Ny42MyAyMDAuNTkgMzc5LjgzIDIwMi4zNSAzODEuODUgMjAzLjQ3IEMgMzg0Ljc4IDIwMi43MCAzODMuMDEgMTk5LjA4IDM4My4yOCAxOTYuOTkgQyAzODMuNjEgMTk0LjA5IDM4MS45MSAxOTAuMDEgMzg1LjE2IDE4OC4zMSBDIDM4NS40MCAxODkuNTYgMzg1LjcxIDE5MC44OCAzODUuMjIgMTkyLjEzIEMgMzgzLjYzIDE5Ni4xMSAzODYuMTQgMjAwLjM2IDM4NC41NyAyMDQuMzQgQyAzODMuODUgMjA0LjU5IDM4Mi40MiAyMDUuMTAgMzgxLjcxIDIwNS4zNiBDIDM4MC43NSAyMDguOTQgMzgzLjY5IDIxMi43MyAzODEuODkgMjE2LjA4IEMgMzgwLjA3IDIxNi4zNyAzNzguMjIgMjE2LjI0IDM3Ni4zOSAyMTYuMjIgQyAzNzcuMDEgMjE0LjYzIDM3OC41NSAyMTQuMDIgMzc5Ljk2IDIxMy4zNSBDIDM3OS41MSAyMTEuNDAgMzc3LjczIDIxMC4zNSAzNzYuMzggMjA5LjA3IEMgMzc1LjM0IDIwOS43NCAzNzQuMjIgMjEwLjM0IDM3My4zNCAyMTEuMjIgQyAzNzMuMzAgMjEyLjQ3IDM3My4yNyAyMTMuNzMgMzczLjI1IDIxNC45OCBDIDM3Mi4wMiAyMTcuMTQgMzY4Ljk4IDIxNS44MCAzNjcuMDIgMjE2LjI4IEMgMzY3LjYwIDIxNC42NiAzNjkuMDcgMjEzLjk5IDM3MC41MCAyMTMuMzMgQyAzNzAuMDYgMjExLjg2IDM2OS42NiAyMTAuMzkgMzY5LjI4IDIwOC45MSBDIDM3MS4wNSAyMDcuMDQgMzczLjA4IDIwNS40NSAzNzUuMjEgMjA0LjAyIEMgMzczLjM2IDIwMi42NiAzNzEuNTQgMjAxLjE4IDM3MC41MCAxOTkuMDggQyAzNjcuOTMgMjAwLjUwIDM2NS4zNCAyMDEuOTQgMzYyLjQ5IDIwMi43NiBDIDM2Mi40OSAyMDEuMTAgMzYyLjUxIDE5OS40NSAzNjIuNTUgMTk3Ljc5IEMgMzYzLjM5IDE5Ny45NyAzNjUuMDcgMTk4LjMzIDM2NS45MCAxOTguNTEgQyAzNjcuMTQgMTk3LjcyIDM2OC4zOSAxOTYuOTQgMzY5LjY1IDE5Ni4xOCBDIDM2Ny4zMyAxOTQuNTcgMzY1LjA3IDE5Mi44MyAzNjIuNDUgMTkxLjcyIEMgMzYyLjQyIDE5MC41NSAzNjIuMzkgMTg5LjM4IDM2Mi4zNyAxODguMjEgQyAzNjIuOTkgMTg4LjIxIDM2NC4yMyAxODguMjEgMzY0Ljg1IDE4OC4yMSBDIDM2Ni4xMCAxOTAuMjcgMzY4LjAxIDE5MS44OCAzNzAuMzUgMTkyLjYwIEMgMzcwLjM3IDE5My4xMyAzNzAuNDIgMTk0LjIwIDM3MC40NCAxOTQuNzMgQyAzNzEuNjUgMTkzLjI0IDM3MS4zOSAxOTEuMzcgMzcxLjI1IDE4OS42MCBDIDM3MS42NyAxODkuMzkgMzcyLjQ5IDE4OC45OCAzNzIuOTEgMTg4Ljc3IEMgMzcxLjk5IDE4OC4zMCAzNzAuMTYgMTg3LjM3IDM2OS4yNSAxODYuOTAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjA2Ljc5IDE4Ni4zNyBDIDIwNi45MSAxODYuNDAgMjA3LjE2IDE4Ni40NiAyMDcuMjggMTg2LjQ5IEMgMjA2LjkzIDE4Ny43NSAyMDYuNjAgMTg5LjAxIDIwNi4yOCAxOTAuMjggQyAyMDUuNDUgMTkzLjQxIDIwNC41OCAxOTYuNTMgMjAzLjc0IDE5OS42NiBDIDIxMi4xOCAyMDAuNTkgMjIwLjUzIDIwMi4zNCAyMjkuMDQgMjAyLjUzIEMgMjMwLjU1IDE5OS40OSAyMzIuMTggMTk2LjUxIDIzMy44NSAxOTMuNTYgQyAyMzMuMTkgMTkzLjY5IDIzMS44NyAxOTMuOTUgMjMxLjIxIDE5NC4wOCBDIDIyOS42NCAxOTUuNDIgMjI4LjAyIDE5Ni43MiAyMjYuMzkgMTk3Ljk5IEMgMjI2Ljk4IDE5Ni40MiAyMjcuNjEgMTk0Ljg3IDIyOC4yNCAxOTMuMzIgQyAyMjguNzEgMTkyLjE2IDIyOS4xOSAxOTEuMDIgMjI5LjcxIDE4OS44OCBDIDIyOS43NCAxOTEuNDIgMjI5LjYwIDE5Mi45NSAyMjkuMjkgMTk0LjQ3IEMgMjMwLjQ3IDE5Mi45NCAyMzEuNzUgMTkxLjQ5IDIzMy4xMSAxOTAuMTIgTCAyMzIuMTEgMTkyLjEzIEMgMjMyLjgyIDE5Mi42MyAyMzMuNTQgMTkzLjE0IDIzNC4yNiAxOTMuNjUgTCAyMzQuODUgMTkxLjE5IEMgMjM1LjQyIDE5OS41MSAyMjguMTkgMjA1LjQ2IDIyNi4zOCAyMTMuMjIgQyAyMzEuNzMgMjEzLjI1IDIzNy4wOCAyMTMuMjEgMjQyLjQ0IDIxMy4yMiBDIDI0Mi40NSAyMjcuNjcgMjQyLjQ0IDI0Mi4xMiAyNDIuNDUgMjU2LjU4IEMgMjM2LjkwIDI1Ni41MyAyMzEuMzUgMjU2LjYzIDIyNS44MSAyNTYuNTAgQyAyMjUuODAgMjQyLjU3IDIyNi4wOSAyMjguNjMgMjI1LjY2IDIxNC43MiBDIDIyNC40NCAyMTcuMjggMjIzLjQ0IDIxOS45NCAyMjIuMjUgMjIyLjUyIEMgMjE3LjE4IDIzMi45NyAyMTUuNjkgMjQ0LjgxIDIxMC4xMiAyNTUuMDQgQyAyMDcuNzcgMjU4LjE3IDIwNS4wOCAyNjEuMTcgMjAxLjg3IDI2My40MyBDIDE5Ni44NiAyNjMuNTQgMTkxLjg4IDI2Mi43NiAxODYuODggMjYyLjU0IEMgMTgxLjY4IDI2Mi4yNCAxNzcuMDQgMjU5LjY5IDE3Mi4zMiAyNTcuNzggQyAxNjkuNzIgMjY1Ljk0IDE2Ni45OCAyNzQuMDYgMTY0LjE1IDI4Mi4xNCBDIDE2My44NyAyODAuOTUgMTYzLjY0IDI3OS43NSAxNjMuNDQgMjc4LjU1IEMgMTYyLjE4IDI3OS41NyAxNjEuMjcgMjgwLjkyIDE2MC4xOSAyODIuMTEgQyAxNjAuNzggMjgwLjIwIDE2MS41MyAyNzguMzMgMTYyLjYxIDI3Ni42NSBDIDE2MS41MiAyNzYuNzQgMTYwLjQzIDI3Ni44MyAxNTkuMzQgMjc2LjkyIEMgMTU5LjA2IDI3Ny42MCAxNTguNTAgMjc4Ljk3IDE1OC4yMiAyNzkuNjYgQyAxNTcuOTggMjc5LjYyIDE1Ny40OCAyNzkuNTUgMTU3LjIzIDI3OS41MSBDIDE1Ny42MCAyNzguODggMTU4LjMzIDI3Ny42MiAxNTguNzAgMjc2Ljk5IEMgMTU3Ljc5IDI3Ni4zMSAxNTYuODAgMjc1Ljc1IDE1NS44MSAyNzUuMTkgQyAxNTUuODYgMjc2LjY2IDE1NS4zNSAyNzcuOTAgMTU0LjI3IDI3OC45NCBDIDE1NC41MCAyNzcuNDAgMTU0LjgyIDI3NS44NyAxNTUuMTMgMjc0LjM2IEwgMTU2LjY2IDI3NC42MSBDIDE1Ni4wNSAyNzMuNjcgMTU1LjQ0IDI3Mi43NCAxNTQuODEgMjcxLjgzIEMgMTUzLjkwIDI3My42NSAxNTIuOTkgMjc1LjUwIDE1MS45OSAyNzcuMjkgQyAxNTEuMzIgMjc2Ljk4IDE0OS45OSAyNzYuMzggMTQ5LjMyIDI3Ni4wOCBDIDE0OS43MyAyNzUuMDAgMTUwLjEyIDI3My45MSAxNTAuNTAgMjcyLjgzIEMgMTUwLjg0IDI3My42MiAxNTEuNTEgMjc1LjIwIDE1MS44NSAyNzUuOTkgTCAxNTEuMTIgMjczLjE0IEwgMTUyLjQ0IDI3My42OCBDIDE1Mi45MSAyNzIuNDcgMTUzLjQxIDI3MS4yNyAxNTMuODkgMjcwLjA2IEMgMTU0LjMxIDI2OS43NSAxNTUuMTQgMjY5LjE1IDE1NS41NiAyNjguODUgQyAxNTUuMzMgMjY5LjM0IDE1NC44OCAyNzAuMzMgMTU0LjY2IDI3MC44MiBDIDE1Ni4xNSAyNzEuODYgMTU2LjYwIDI3My44OSAxNTguMDUgMjc0Ljg2IEMgMTU5Ljk5IDI3NC4wNSAxNjAuMzggMjcxLjM5IDE2MS42NSAyNjkuODAgQyAxNjEuMzcgMjcyLjExIDE2MC41NCAyNzQuMjkgMTU5LjM3IDI3Ni4yOSBDIDE2MC41MiAyNzYuMTkgMTYxLjY4IDI3Ni4xMSAxNjIuODMgMjc2LjAzIEMgMTY1LjEwIDI3MS4yNyAxNjYuNzAgMjY2LjI0IDE2OC4wNSAyNjEuMTUgQyAxNjUuNjQgMjU5Ljg0IDE2My4zMyAyNTguMzEgMTYwLjc2IDI1Ny4zNCBDIDE1Ny41NCAyNTYuMzEgMTU0LjEzIDI1Ni4wMiAxNTAuOTUgMjU0Ljg4IEMgMTQ3Ljg5IDI1My44NyAxNDUuMDkgMjUyLjIxIDE0Mi4wMyAyNTEuMjEgQyAxMzguOTUgMjU0LjI2IDEzNi43MSAyNTguMDQgMTM0LjA5IDI2MS40OCBDIDEzMi41OSAyNjMuNDggMTMxLjQ0IDI2NS43MSAxMzAuMjggMjY3LjkyIEMgMTMxLjYxIDI2My45MiAxMzMuNDIgMjYwLjEwIDEzNS43NiAyNTYuNTkgQyAxMzAuNjkgMjU2LjU0IDEyNS42MiAyNTYuNjAgMTIwLjU1IDI1Ni41NCBDIDEyMC41NiAyNDIuMTQgMTIwLjY5IDIyNy43MyAxMjAuNDkgMjEzLjM0IEMgMTI2LjA0IDIxMy4wOSAxMzEuNjAgMjEzLjI3IDEzNy4xNiAyMTMuMjIgQyAxMzcuMjYgMjI2LjgyIDEzNi45MCAyNDAuNDIgMTM3LjM0IDI1NC4wMSBDIDE0NS4yOSAyNDAuMzAgMTUzLjAzIDIyNS45OCAxNjUuMDUgMjE1LjMzIEMgMTczLjE2IDIwOC4zMyAxODUuNDkgMjA5LjY3IDE5NC4yNSAyMTQuNzQgQyAxOTkuMzQgMjA1LjcyIDIwMi43MCAxOTUuODYgMjA2Ljc5IDE4Ni4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTEuMTQgMTkwLjg5IEMgMjExLjgwIDE4OS40MCAyMTIuNDkgMTg3Ljg3IDIxMy43OSAxODYuODMgQyAyMTMuMTEgMTg4LjQ3IDIxMi4yNyAxOTAuMDYgMjEyLjA5IDE5MS44NiBDIDIxMy40MyAxOTAuNjcgMjE0LjY4IDE4OS4zOSAyMTUuOTUgMTg4LjEyIEMgMjE1LjQ1IDE4OS4zMiAyMTQuOTUgMTkwLjUzIDIxNC40NiAxOTEuNzQgQyAyMTYuODIgMTkyLjI3IDIxOC4xNSAxODkuOTIgMjE5Ljg5IDE4OC45NCBDIDIxOS40MCAxODkuODAgMjE4LjQyIDE5MS41NCAyMTcuOTMgMTkyLjQwIEMgMjE4LjY0IDE5Mi4xMyAyMjAuMDcgMTkxLjU4IDIyMC43OSAxOTEuMzEgQyAyMjEuMDMgMTkxLjY5IDIyMS41MSAxOTIuNDYgMjIxLjc1IDE5Mi44NCBDIDIyMi4yNiAxOTEuOTUgMjIzLjI3IDE5MC4xNyAyMjMuNzggMTg5LjI4IEwgMjIzLjYwIDE5My40NCBDIDIyNC43NiAxOTIuMzQgMjI1Ljg4IDE5MS4yMSAyMjYuOTYgMTkwLjA1IEMgMjI2Ljc3IDE5MC43OSAyMjYuMzkgMTkyLjI4IDIyNi4yMCAxOTMuMDMgTCAyMjguMjQgMTkzLjMyIEMgMjI3LjYxIDE5NC44NyAyMjYuOTggMTk2LjQyIDIyNi4zOSAxOTcuOTkgQyAyMjguMDIgMTk2LjcyIDIyOS42NCAxOTUuNDIgMjMxLjIxIDE5NC4wOCBDIDIzMS44NyAxOTMuOTUgMjMzLjE5IDE5My42OSAyMzMuODUgMTkzLjU2IEMgMjMyLjE4IDE5Ni41MSAyMzAuNTUgMTk5LjQ5IDIyOS4wNCAyMDIuNTMgQyAyMjAuNTMgMjAyLjM0IDIxMi4xOCAyMDAuNTkgMjAzLjc0IDE5OS42NiBDIDIwNC41OCAxOTYuNTMgMjA1LjQ1IDE5My40MSAyMDYuMjggMTkwLjI4IEMgMjA3Ljg5IDE5MC40OCAyMDkuNTIgMTkwLjY5IDIxMS4xNCAxOTAuODkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk0LjQ5IDIyOS40OSBDIDI5NC40OSAyMjAuMjEgMjk0LjQyIDIxMC45NCAyOTQuNTAgMjAxLjY3IEMgMzAwLjA2IDIwMS42OSAzMDUuNjIgMjAxLjcyIDMxMS4xOSAyMDEuNjcgQyAzMTEuMTggMjA1LjUzIDMxMS4xOCAyMDkuMzggMzExLjE4IDIxMy4yNCBDIDMxOC43MiAyMTMuMjAgMzI2LjI3IDIxMy4yMyAzMzMuODIgMjEzLjIzIEMgMzMzLjgyIDIyMC40OCAzMzMuODYgMjI3Ljc0IDMzMy44MCAyMzUuMDAgQyAzMzQuMTcgMjQzLjU4IDMyMy4wOCAyNDcuNzkgMzI0LjI5IDI1Ni41NiBDIDMxOC4xMiAyNTYuNTcgMzExLjk1IDI1Ni41OCAzMDUuNzggMjU2LjU1IEMgMzA1Ljg2IDI1My45NCAzMDUuMzkgMjUxLjAzIDMwNy4wNCAyNDguNzggQyAzMDkuNzggMjQ0LjYyIDMxMi45MCAyNDAuNzEgMzE1LjU3IDIzNi41MCBDIDMxNi45MyAyMzQuNDMgMzE2LjI3IDIzMS44MSAzMTYuNTAgMjI5LjQ4IEMgMzA5LjE2IDIyOS41MCAzMDEuODIgMjI5LjQ4IDI5NC40OSAyMjkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMC4wMCAyMDcuNDYgQyAxLjYyIDIyNS44NSAzLjk3IDI0NC4zMyA5Ljg5IDI2MS45MCBDIDI2LjgxIDMxNS4wNSA2Ny40MCAzNTkuNzYgMTE4LjE2IDM4Mi42NCBDIDE0MS4xMyAzOTMuMTQgMTY2LjE3IDM5OC43NiAxOTEuMzYgNDAwLjAwIEwgMC4wMCA0MDAuMDAgTCAwLjAwIDIwNy40NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzODIuODAgMjgxLjg2IEMgMzkzLjI5IDI1OC45MCAzOTguNTcgMjMzLjg2IDQwMC4wMCAyMDguNzMgTCA0MDAuMDAgNDAwLjAwIEwgMjEwLjI5IDQwMC4wMCBDIDIyNC42OCAzOTguODkgMjM5LjA4IDM5Ny4xMCAyNTIuOTkgMzkzLjExIEMgMzA5Ljk1IDM3Ny44MyAzNTguODIgMzM1LjY4IDM4Mi44MCAyODEuODYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gNzIuNTUgMjEzLjIwIEMgODMuMzggMjEzLjI1IDk0LjIxIDIxMy4yMCAxMDUuMDQgMjEzLjIzIEMgMTA4LjA4IDIxMy4yNCAxMTEuNDMgMjEzLjk3IDExMy40OCAyMTYuNDAgQyAxMTUuNDMgMjE4LjgxIDExNS41OSAyMjIuMDMgMTE1LjU5IDIyNS4wMCBDIDExNS41NiAyMzUuNTEgMTE1LjU5IDI0Ni4wMiAxMTUuNTggMjU2LjU0IEMgMTA5Ljk5IDI1Ni41OCAxMDQuNDAgMjU2LjU5IDk4LjgwIDI1Ni41MiBDIDk4LjY4IDI0Ny4yMyA5OS4zMSAyMzcuODggOTguNDYgMjI4LjYzIEMgOTUuMzMgMjI4LjQ1IDkyLjE5IDIyOC40NSA4OS4wNSAyMjguNDMgQyA4OC42MSAyMzUuODcgODkuMjAgMjQzLjM0IDg4Ljc0IDI1MC43OCBDIDg4LjUxIDI1My43MCA4Ni4wMiAyNTYuMDUgODMuMTUgMjU2LjMyIEMgNzcuNjMgMjU2Ljg2IDcyLjA2IDI1Ni40MyA2Ni41MiAyNTYuNTUgQyA2Ni41NSAyNTEuMjYgNjYuNTIgMjQ1Ljk2IDY2LjU0IDI0MC42NiBDIDY4LjQ0IDI0MC4yOSA3MS4wNyAyNDEuNDUgNzIuNDkgMjM5Ljc5IEMgNzIuNjUgMjMwLjkzIDcyLjUxIDIyMi4wNiA3Mi41NSAyMTMuMjAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjQ3LjI1IDIxMy4yNSBDIDI2MS42OSAyMTMuMjQgMjc2LjEzIDIxMy4xMyAyOTAuNTYgMjEzLjMxIEMgMjkwLjM3IDIyNy43MiAyOTAuNTEgMjQyLjE0IDI5MC40OSAyNTYuNTYgQyAyODQuOTIgMjU2LjU0IDI3OS4zNSAyNTYuNjMgMjczLjc4IDI1Ni41MSBDIDI3My44NiAyNDcuMTYgMjczLjczIDIzNy44MiAyNzMuODUgMjI4LjQ3IEMgMjcwLjQ5IDIyOC40NiAyNjcuMTQgMjI4LjQ0IDI2My43OSAyMjguNTEgQyAyNjMuODMgMjM3Ljg2IDI2My43NSAyNDcuMjIgMjYzLjg0IDI1Ni41OCBDIDI1OC4zMSAyNTYuNTQgMjUyLjc5IDI1Ni41OSAyNDcuMjcgMjU2LjU1IEMgMjQ3LjI3IDI0Mi4xMSAyNDcuMzAgMjI3LjY4IDI0Ny4yNSAyMTMuMjUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk3LjEwIDIxOS4xMiBDIDE5NS45OSAyMTcuNDkgMTk2LjM2IDIxNS43MCAxOTcuNjQgMjE0LjMxIEMgMjA0LjYzIDIxOC4zNCAyMTMuMDEgMjE4LjUzIDIyMC44MyAyMTkuNDAgQyAyMTguMTEgMjI0LjUxIDIxNi41MyAyMzAuMTAgMjE0LjQ4IDIzNS40OSBDIDIwOS4yMSAyMzQuNzUgMjAzLjk5IDIzMy43NSAxOTguNzEgMjMzLjE0IEMgMTk4LjY4IDIyOC40MyAxOTkuNDQgMjIzLjQ0IDE5Ny4xMCAyMTkuMTIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTkwLjA5IDIyMy4xNCBDIDE5Mi4wNCAyMjEuOTUgMTkzLjE0IDIxOS44NCAxOTUuMDYgMjE4LjYxIEMgMTk3LjE2IDIyNC41MSAxOTYuMjcgMjMwLjg4IDE5NS42OSAyMzYuOTYgQyAxOTEuMzcgMjM1LjMxIDE4Ni43MiAyMzUuMzAgMTgyLjE3IDIzNS4yNyBDIDE4My4wMiAyMzAuNDQgMTg1LjY2IDIyNS41NCAxOTAuMDkgMjIzLjE0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE1Mi40OSAyMzMuOTIgQyAxNTUuODIgMjMwLjIzIDE1OC4yMiAyMjUuNjkgMTYyLjA5IDIyMi41MSBDIDE2OS4xNCAyMjIuNDAgMTc2LjYzIDIyNC4zMyAxODIuMTggMjI4LjgyIEMgMTc5LjUxIDIzMi41NiAxNzYuODggMjM2LjM4IDE3NS4yOCAyNDAuNzIgQyAxNjcuNjQgMjM4LjY0IDE1OS45NiAyMzYuNTYgMTUyLjQ5IDIzMy45MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTkuNTUgMjUwLjE1IEMgMjAyLjcwIDI1MC44OCAyMDUuODEgMjUxLjgyIDIwOC44OSAyNTIuODEgQyAyMDYuOTggMjU2LjAyIDIwNC40OCAyNTkuMTUgMjAwLjk1IDI2MC42NSBDIDE5MS41NSAyNjEuMzEgMTgyLjAyIDI1OS4zNiAxNzMuNDcgMjU1LjQzIEMgMTczLjQ3IDI1NC44NCAxNzMuNDcgMjUzLjY4IDE3My40NyAyNTMuMDkgQyAxODEuODAgMjU1LjIzIDE5MC40MCAyNTcuNTIgMTk5LjAzIDI1NS42NSBDIDE5OS4yNiAyNTMuODIgMTk5LjQyIDI1MS45OSAxOTkuNTUgMjUwLjE1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDEzNC4wOSAyNjEuNDggQyAxMzYuNzEgMjU4LjA0IDEzOC45NSAyNTQuMjYgMTQyLjAzIDI1MS4yMSBDIDE0NS4wOSAyNTIuMjEgMTQ3Ljg5IDI1My44NyAxNTAuOTUgMjU0Ljg4IEMgMTU0LjEzIDI1Ni4wMiAxNTcuNTQgMjU2LjMxIDE2MC43NiAyNTcuMzQgQyAxNjMuMzMgMjU4LjMxIDE2NS42NCAyNTkuODQgMTY4LjA1IDI2MS4xNSBDIDE2Ni43MCAyNjYuMjQgMTY1LjEwIDI3MS4yNyAxNjIuODMgMjc2LjAzIEMgMTYxLjY4IDI3Ni4xMSAxNjAuNTIgMjc2LjE5IDE1OS4zNyAyNzYuMjkgQyAxNjAuNTQgMjc0LjI5IDE2MS4zNyAyNzIuMTEgMTYxLjY1IDI2OS44MCBDIDE2MC4zOCAyNzEuMzkgMTU5Ljk5IDI3NC4wNSAxNTguMDUgMjc0Ljg2IEMgMTU2LjYwIDI3My44OSAxNTYuMTUgMjcxLjg2IDE1NC42NiAyNzAuODIgQyAxNTQuODggMjcwLjMzIDE1NS4zMyAyNjkuMzQgMTU1LjU2IDI2OC44NSBDIDE1NS4xNCAyNjkuMTUgMTU0LjMxIDI2OS43NSAxNTMuODkgMjcwLjA2IEMgMTUzLjQwIDI3MC40MiAxNTIuNDEgMjcxLjE1IDE1MS45MiAyNzEuNTIgQyAxNTEuMzggMjcxLjM4IDE1MC4zMCAyNzEuMTIgMTQ5Ljc2IDI3MC45OSBDIDE0OC41OCAyNzIuOTIgMTQ3LjMxIDI3NC44NiAxNDUuMzggMjc2LjEyIEMgMTQ2LjEwIDI3My4zNyAxNDkuNzYgMjcwLjIzIDE0Ni40MyAyNjcuOTIgQyAxNDYuNTUgMjY2Ljg5IDE0Ni42OCAyNjUuODcgMTQ2LjgwIDI2NC44NiBDIDE0Ni4wMiAyNjUuOTggMTQ1LjIzIDI2Ny4xMCAxNDQuNDYgMjY4LjI0IEwgMTQzLjM3IDI2OS42NiBMIDE0My42MCAyNjcuMDQgQyAxNDMuNzkgMjY2LjIyIDE0NC4xNyAyNjQuNTcgMTQ0LjM2IDI2My43NCBDIDE0My40OSAyNjQuODggMTQyLjYyIDI2Ni4wMSAxNDEuNzkgMjY3LjE4IEMgMTQxLjM2IDI2Ni42MyAxNDAuNTAgMjY1LjUzIDE0MC4wNyAyNjQuOTcgQyAxNDAuNTIgMjYzLjU0IDE0MS4wMCAyNjIuMTIgMTQxLjQ3IDI2MC43MCBDIDE0MC44NSAyNjEuNTggMTQwLjIyIDI2Mi40NiAxMzkuNjAgMjYzLjM1IEMgMTM1LjgzIDI2Mi45NCAxMzUuMzggMjY3LjE2IDEzMy4wNiAyNjkuMTEgQyAxMzMuNzcgMjY2Ljk2IDEzNC43OCAyNjQuOTQgMTM1Ljc5IDI2Mi45MiBDIDEzNS4zNyAyNjIuNTYgMTM0LjUyIDI2MS44NCAxMzQuMDkgMjYxLjQ4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEzOS42MCAyNjMuMzUgQyAxNDAuMjIgMjYyLjQ2IDE0MC44NSAyNjEuNTggMTQxLjQ3IDI2MC43MCBDIDE0MS4wMCAyNjIuMTIgMTQwLjUyIDI2My41NCAxNDAuMDcgMjY0Ljk3IEMgMTM5LjQ2IDI2Ny42MSAxMzcuNzAgMjY5Ljc2IDEzNS4yMiAyNzAuODMgQyAxMzYuNTUgMjY4LjI2IDEzOC4xMSAyNjUuODIgMTM5LjYwIDI2My4zNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNi4xNiAyNjMuMTYgQyAzNy4xMSAyNjIuODEgMzguMDYgMjYyLjQ3IDM5LjAxIDI2Mi4xNCBDIDQwLjIyIDI2Ni4xNSA0My41MCAyNjkuNzcgNDMuMjQgMjc0LjA2IEMgNDAuNTAgMjc2LjE0IDM3LjE5IDI3Ny4yOCAzNC4xOCAyNzguOTAgQyAzMy40MSAyNzcuMzMgMzIuNjMgMjc1Ljc2IDMxLjg5IDI3NC4xOCBDIDM0LjM2IDI3My4wMSAzNi44MyAyNzEuODYgMzkuMzEgMjcwLjczIEMgMzguMjggMjY4LjE5IDM3LjIwIDI2NS42OSAzNi4xNiAyNjMuMTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzU3Ljg5IDI2Mi41NiBDIDM1OS41NSAyNjMuMjEgMzYxLjIwIDI2My44NyAzNjIuODcgMjY0LjUyIEMgMzYzLjE0IDI2NS45MiAzNjMuMTkgMjY3LjM0IDM2My4wNiAyNjguNzYgQyAzNjQuOTYgMjY3Ljk3IDM2Ni44NCAyNjcuMTQgMzY4LjczIDI2Ni4zMSBDIDM2Ny45NiAyNjguMDQgMzY3LjE5IDI2OS43NyAzNjYuNDcgMjcxLjUyIEMgMzYzLjg5IDI3Mi43MiAzNjEuMjQgMjczLjc0IDM1OC42MSAyNzQuODAgQyAzNjAuMTIgMjc1Ljg0IDM2MS43OCAyNzYuNjIgMzYzLjQ5IDI3Ny4yNiBDIDM2Mi44MSAyNzguOTAgMzYyLjEwIDI4MC41MiAzNjEuMzggMjgyLjE0IEMgMzU5LjQ0IDI4MS4yNCAzNTcuNTYgMjgwLjIyIDM1NS43MyAyNzkuMTQgQyAzNTUuNzUgMjc4LjI5IDM1NS43OSAyNzYuNTggMzU1LjgyIDI3NS43MiBDIDM1NC4yMyAyNzYuMzIgMzUyLjY0IDI3Ni45MiAzNTEuMDYgMjc3LjUyIEMgMzUxLjY4IDI3NS44NiAzNTIuMTYgMjc0LjAzIDM1My40MiAyNzIuNzMgQyAzNTUuODIgMjcxLjYwIDM1OC4zNyAyNzAuODEgMzYwLjgzIDI2OS44MSBDIDM1OS4zMyAyNjguNjQgMzU3LjYyIDI2Ny44MCAzNTUuODcgMjY3LjA3IEMgMzU2LjU1IDI2NS41NiAzNTcuMjIgMjY0LjA2IDM1Ny44OSAyNjIuNTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTQxLjc5IDI2Ny4xOCBDIDE0Mi42MiAyNjYuMDEgMTQzLjQ5IDI2NC44OCAxNDQuMzYgMjYzLjc0IEMgMTQ0LjE3IDI2NC41NyAxNDMuNzkgMjY2LjIyIDE0My42MCAyNjcuMDQgQyAxNDIuODMgMjY5LjQ1IDE0MS45OCAyNzIuMzUgMTM5LjMwIDI3My4yMiBDIDE0MC4wNyAyNzEuMTggMTQwLjc3IDI2OS4xMCAxNDEuNzkgMjY3LjE4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE0NC40NiAyNjguMjQgQyAxNDUuMjMgMjY3LjEwIDE0Ni4wMiAyNjUuOTggMTQ2LjgwIDI2NC44NiBDIDE0Ni42OCAyNjUuODcgMTQ2LjU1IDI2Ni44OSAxNDYuNDMgMjY3LjkyIEMgMTQ1LjcxIDI2OS44NiAxNDQuOTEgMjcxLjc3IDE0NC4yMCAyNzMuNzEgQyAxNDMuOTggMjczLjY4IDE0My41NCAyNzMuNjAgMTQzLjMyIDI3My41NiBDIDE0My42NyAyNzEuNzggMTQzLjkxIDI2OS45NyAxNDQuNDYgMjY4LjI0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM5LjYzIDI3OS4yOSBDIDQxLjYyIDI3OC4yNCA0My42MCAyNzcuMTcgNDUuNjAgMjc2LjE0IEMgNDYuMzYgMjc3LjU5IDQ3LjEzIDI3OS4wNSA0Ny44OCAyODAuNTEgQyA0NS44OCAyODEuNTkgNDMuODkgMjgyLjY2IDQxLjg3IDI4My43MCBDIDQxLjEzIDI4Mi4yMyA0MC4zOCAyODAuNzYgMzkuNjMgMjc5LjI5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMxNS4xMiAyNzUuODggQyAzMTYuNTUgMjc3Ljg1IDMxNy4zMyAyODAuMTggMzE4LjEzIDI4Mi40NiBDIDMxOC42MyAyODEuMTMgMzE5LjE2IDI3OS44MSAzMTkuNzIgMjc4LjUwIEMgMzE5LjY4IDI4Mi40MiAzMTguODAgMjg2LjgwIDMyMi4wNSAyODkuNzYgTCAzMjIuMTUgMjg5LjkwIEMgMzIxLjU0IDI5MC41NyAzMjAuOTQgMjkxLjI2IDMyMC4zNSAyOTEuOTUgQyAzMTguMTkgMjg4LjY3IDMxNi4xNSAyODQuNTQgMzExLjcwIDI4NC4yMyBDIDMxMi44MiAyODMuOTMgMzEzLjk1IDI4My42NCAzMTUuMDggMjgzLjM1IEMgMzEzLjYxIDI4Mi43NSAzMTIuMzUgMjgxLjg3IDMxMS4zMCAyODAuNjkgQyAzMTIuNzggMjgxLjIwIDMxNC4yMyAyODEuNzcgMzE1LjY3IDI4Mi4zOSBDIDMxNC40NCAyODAuODcgMzEzLjIyIDI3OS4zNiAzMTIuMTggMjc3LjcyIEMgMzEzLjgwIDI3OC42NCAzMTUuMzEgMjc5LjczIDMxNi43MSAyODEuMDAgQyAzMTYuMzEgMjc5LjcyIDMxNS41MiAyNzcuMTYgMzE1LjEyIDI3NS44OCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA3Ny44OSAyODkuMDIgQyA4Mi42NyAyODUuOTMgODYuNjYgMjgxLjgzIDg5Ljc3IDI3Ny4wNyBDIDkwLjE4IDI3Ny4zOSA5MS4wMSAyNzguMDIgOTEuNDIgMjc4LjM0IEMgOTEuNzAgMjc5LjExIDkyLjI2IDI4MC42NCA5Mi41MyAyODEuNDAgQyA4OS4xOCAyODUuMTAgODUuMTIgMjg4LjEyIDgxLjA5IDI5MS4wNCBDIDgxLjI1IDI5Mi4yMyA4MS41MCAyOTMuNDEgODEuNzMgMjk0LjYwIEMgODMuMjYgMjkzLjk0IDg0LjgxIDI5My44NyA4Ni40MCAyOTQuNDAgQyA4Ny4zNyAyOTYuNjUgODguNDAgMjk4LjkzIDg4LjM0IDMwMS40NSBDIDg1Ljg1IDI5OS41OSA4NC4zOSAyOTYuNTUgODEuNTMgMjk1LjE5IEMgODAuMTMgMjkzLjI0IDc5LjQzIDI5MC44OCA3Ny44OSAyODkuMDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQzLjcyIDI4OS43MyBDIDM0Ni4wMyAyODYuMjcgMzQ3LjM3IDI4MS45MiAzNTAuODUgMjc5LjQxIEMgMzUzLjkyIDI4MS4wMSAzNTYuOTMgMjgyLjcyIDM1OS45NSAyODQuNDMgQyAzNTkuMTQgMjg1LjkzIDM1OC4zMSAyODcuNDEgMzU3LjQ4IDI4OC44OSBDIDM1NS4wNSAyODcuNTAgMzUyLjY1IDI4Ni4wNCAzNTAuMTUgMjg0LjgwIEMgMzQ4Ljk1IDI4Ni45OSAzNDcuNjAgMjg5LjEwIDM0Ni4yMyAyOTEuMTkgQyAzNDUuNjAgMjkwLjgzIDM0NC4zNSAyOTAuMTAgMzQzLjcyIDI4OS43MyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA0My40MiAyODkuNTYgQyA0NS40OSAyODcuNDUgNDcuMzYgMjg1LjE2IDQ5LjIwIDI4Mi44NSBDIDUwLjA5IDI4NC4yNyA1MC45NyAyODUuNzAgNTEuODYgMjg3LjEyIEMgNDkuODggMjg5LjM0IDQ3Ljc2IDI5MS40NiA0Ni4xNCAyOTMuOTYgQyA0Ni41MyAyOTQuMzcgNDcuMzEgMjk1LjE4IDQ3LjcwIDI5NS41OSBDIDQ5LjkxIDI5NC4xMyA1Mi4xMCAyOTIuNjUgNTQuMTkgMjkxLjAzIEMgNTUuMTYgMjkyLjMxIDU2LjE0IDI5My41OCA1Ni45MSAyOTUuMDAgQyA1My44OCAyOTYuODMgNTAuNzQgMzAxLjI4IDQ2Ljg1IDI5OS40MCBDIDQzLjQ0IDI5Ni4zMyA0MS41NSAyOTEuOTUgMzkuMjAgMjg4LjA4IEMgMzkuODkgMjg3LjczIDQxLjI3IDI4Ny4wNCA0MS45NyAyODYuNjkgQyA0Mi4zMyAyODcuNDEgNDMuMDYgMjg4Ljg0IDQzLjQyIDI4OS41NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA5Ny44NiAyODguMDAgQyAxMDAuNjEgMjg2LjQ0IDEwMy41MiAyODUuMTkgMTA2LjE2IDI4My40MyBDIDEwNi4yOSAyODQuMDkgMTA2LjU2IDI4NS40MCAxMDYuNjkgMjg2LjA1IEMgMTA0LjEwIDI4OC4wNyAxMDEuMTkgMjg5LjYxIDk4LjM3IDI5MS4yNiBDIDk3LjMyIDI5Ny42MiA5OC4wNyAzMDQuMDggOTcuMjQgMzEwLjQ2IEMgOTUuNjMgMzA5LjMxIDk0LjExIDMwOC4wNSA5Mi42NCAzMDYuNzMgQyA5Mi44NSAzMDIuNTUgOTMuNDAgMjk4LjM4IDk0LjU2IDI5NC4zNSBDIDk1LjIyIDI5Mi4wNyA5NS43MCAyODkuMzYgOTcuODYgMjg4LjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMwNi40NyAyODYuNzYgQyAzMDYuOTIgMjg0LjgyIDMwOC41OSAyODUuMjMgMzA5LjI4IDI4Ni43OCBDIDMwOS41OSAyODYuNjQgMzEwLjIzIDI4Ni4zNCAzMTAuNTUgMjg2LjE5IEMgMzExLjEzIDI5MC40MSAzMTIuNTggMjk0LjU2IDMxNi4xNSAyOTcuMTUgQyAzMTUuMzcgMjk4LjAxIDMxNC41OSAyOTguODYgMzEzLjgxIDI5OS43MiBDIDMxMS40NyAyOTYuNzQgMzA4LjQ3IDI5NC40MSAzMDUuNDEgMjkyLjIyIEMgMzA2LjI3IDI5Mi4yMyAzMDcuOTcgMjkyLjI1IDMwOC44MiAyOTIuMjYgQyAzMDcuNzEgMjkwLjk4IDMwNi41OSAyODkuNzIgMzA1LjQ5IDI4OC40NCBDIDMwNi4xNCAyODguNTUgMzA3LjQ1IDI4OC43NSAzMDguMTAgMjg4Ljg2IEMgMzA3LjY5IDI4OC4zMyAzMDYuODggMjg3LjI5IDMwNi40NyAyODYuNzYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjc4Ljc4IDI5Mi4wMCBDIDI4MC4xNiAyOTAuMTcgMjgwLjUzIDI4Ny45NCAyODAuOTUgMjg1Ljc1IEMgMjgyLjM5IDI5My43OSAyODYuMzkgMzAwLjkxIDI5MC4xNyAzMDguMDMgQyAyOTEuMjAgMzAzLjkxIDI5Mi4xNSAyOTkuNzUgMjkzLjY4IDI5NS43NyBDIDI5My4zNSAyOTQuOTIgMjkzLjAyIDI5NC4wNyAyOTIuNzAgMjkzLjIzIEMgMjkzLjAyIDI5MS45MyAyOTMuMzQgMjkwLjYzIDI5My42NyAyODkuMzMgQyAyOTUuMzUgMjg5LjUwIDI5Ny4xNyAyODkuNDcgMjk4LjU4IDI5MC41NyBDIDMwMi4xMSAyOTIuOTEgMzA1Ljc4IDI5NS4wNyAzMDkuMDcgMjk3Ljc2IEMgMzEwLjY0IDI5OC44MiAzMTAuOTMgMzAwLjgwIDMxMS42MCAzMDIuNDQgQyAzMTAuMjQgMzAzLjc4IDMwOC45MiAzMDUuMTUgMzA3LjYzIDMwNi41NiBDIDMwNy41MCAzMDUuMzcgMzA3LjM2IDMwNC4xOCAzMDcuMjMgMzAzLjAwIEMgMzA0LjA3IDMwMC44MiAzMDEuOTUgMjk3LjUxIDI5OC44NyAyOTUuMjcgQyAyOTcuMTEgMjk1LjI4IDI5NS40NiAyOTUuOTkgMjkzLjc4IDI5Ni40MCBDIDI5My42MiAyOTguMTAgMjkzLjQzIDI5OS44MSAyOTMuMjIgMzAxLjUxIEMgMjk0LjMyIDMwMS45NSAyOTUuNDIgMzAyLjQxIDI5Ni41MyAzMDIuODcgQyAyOTUuNTcgMzA0LjA1IDI5NC42MyAzMDUuMjMgMjkzLjYzIDMwNi4zNiBDIDI5My4wNCAzMDguNTIgMjkyLjE1IDMxMC41NyAyOTEuMzUgMzEyLjY1IEMgMjkxLjg4IDMxMi43NiAyOTIuOTQgMzEyLjk4IDI5My40NyAzMTMuMDkgQyAyOTIuMzcgMzE1LjEyIDI5My4yNyAzMTcuMjkgMjkzLjYzIDMxOS4zNyBDIDI3Mi45NSAzMzQuODYgMjQ4Ljc2IDM0Ni4wNyAyMjMuMDcgMzQ5LjczIEMgMTk2LjkyIDM1My4zNSAxNjkuNjYgMzUxLjA0IDE0NS4xMCAzNDEuMDUgQyAxMzQuNTYgMzM3LjE3IDEyNC45NSAzMzEuMzMgMTE1LjI4IDMyNS43NCBDIDExNS40NCAzMjUuNTYgMTE1Ljc1IDMyNS4yMCAxMTUuOTEgMzI1LjAyIEMgMTE2LjEyIDMyNC45NyAxMTYuNTUgMzI0Ljg3IDExNi43NiAzMjQuODIgQyAxMTUuODMgMzIyLjI1IDExNi4wMSAzMTkuNTQgMTE2LjU1IDMxNi45MiBDIDExNy4xNCAzMTYuMDIgMTE3LjY4IDMxNS4wOSAxMTguMTggMzE0LjE0IEMgMTE4Ljc0IDMxMi4wNSAxMTUuNDMgMzE1LjEyIDExNC40NCAzMTUuMTYgQyAxMTMuNzcgMzE4LjI4IDExMy4yOSAzMjEuODkgMTE1LjEwIDMyNC43NSBDIDExNC45MyAzMjQuODcgMTE0LjYwIDMyNS4xMyAxMTQuNDMgMzI1LjI2IEMgMTA4LjgxIDMyMC41NyAxMDMuMDYgMzE2LjAwIDk3LjM0IDMxMS40NCBDIDEwMC40NCAzMTAuMDMgMTAzLjg1IDMwOC43OSAxMDYuMjIgMzA2LjI0IEMgMTA3LjkxIDMwMi45NSAxMDkuMjkgMjk5LjQ0IDExMS42OCAyOTYuNTYgQyAxMTEuMjggMjk4LjI4IDExMC42OCAyOTkuOTUgMTEwLjEwIDMwMS42MyBDIDExMC43NSAzMDEuOTAgMTEyLjA0IDMwMi40NSAxMTIuNjkgMzAyLjcyIEMgMTExLjk4IDMwMy41OCAxMTEuMTkgMzA0LjM4IDExMC4zOSAzMDUuMTUgQyAxMDkuNDYgMzA2LjkwIDEwOC4yOCAzMDguNTAgMTA2Ljk1IDMwOS45NyBDIDEwOC4zMCAzMTAuMjYgMTA5LjY0IDMxMC41OSAxMTAuOTggMzEwLjk4IEMgMTExLjYwIDMwNy41NyAxMTIuODUgMzA0LjMzIDExNC4wNCAzMDEuMTAgQyAxMTUuNDggMjk4LjAxIDExMi40NSAyOTUuMDcgMTEzLjIxIDI5MS44NyBDIDExMi41OSAyODkuNTYgMTE0Ljk3IDI4OS42NyAxMTUuMzggMjkxLjk1IEMgMTE1LjgwIDI5MS40MyAxMTYuNjYgMjkwLjM5IDExNy4wOSAyODkuODggQyAxMTYuODkgMjkwLjg0IDExNi41MSAyOTIuNzcgMTE2LjMyIDI5My43NCBDIDExNy4xNCAyOTIuOTEgMTE4Ljc4IDI5MS4yNyAxMTkuNjAgMjkwLjQ1IEMgMTE5LjA4IDI5MS40MCAxMTguMDQgMjkzLjMwIDExNy41MiAyOTQuMjUgQyAxMTguMjggMjkzLjkwIDExOS44MiAyOTMuMjIgMTIwLjU4IDI5Mi44NyBDIDExNy4zMSAyOTguNDQgMTE2LjMxIDMwNC45MSAxMTUuMTkgMzExLjE2IEMgMTE4Ljg4IDMxMC40MyAxMjIuMzYgMzA4LjgyIDEyNC45OCAzMDYuMDYgQyAxMjQuNTEgMzA1LjU1IDEyMy41NyAzMDQuNTMgMTIzLjEwIDMwNC4wMiBDIDEyMy44MyAzMDMuMzcgMTI1LjMwIDMwMi4wNyAxMjYuMDMgMzAxLjQyIEMgMTI1LjIyIDMwMS40NiAxMjMuNjAgMzAxLjUzIDEyMi43OCAzMDEuNTcgQyAxMjQuNjQgMjk5LjgxIDEyNi4zNiAyOTcuOTEgMTI3LjY3IDI5NS43MSBDIDEyNy4wOCAyOTguMzMgMTI3LjM2IDMwMC45OSAxMjcuOTQgMzAzLjU5IEMgMTI4Ljk5IDMwMy45NiAxMzEuMTEgMzA0LjcwIDEzMi4xNiAzMDUuMDggQyAxMzEuMDMgMzA1LjgzIDEyOS44OSAzMDYuNTggMTI4Ljc1IDMwNy4zMiBMIDEzMS44MiAzMDcuMDYgQyAxMzEuMDggMzA3LjgwIDEyOS41OCAzMDkuMjcgMTI4LjgzIDMxMC4wMCBDIDEyOS45MCAzMTQuMjMgMTMxLjc4IDMxOC4xOSAxMzMuMDMgMzIyLjM2IEMgMTMzLjYyIDMyMC45OSAxMzQuMTYgMzE5LjU5IDEzNC42NSAzMTguMTggTCAxMzUuMzggMzE4LjU2IEMgMTM2Ljc0IDMxMy43OSAxMzkuMTQgMzA5LjQ0IDE0MC45NyAzMDQuODUgQyAxNDYuOTAgMzAxLjc5IDE1My41MCAzMDAuMzcgMTU5LjcxIDI5OC4wMSBDIDE2MC44NyAzMDAuMzQgMTYwLjU3IDMwMi44MCAxNTkuMTggMzA0Ljk3IEMgMTU3LjczIDMwNC4yMSAxNTYuMzAgMzAzLjQzIDE1NC44OCAzMDIuNjMgQyAxNTEuMDIgMzAzLjY4IDE0Ny43MyAzMDUuOTkgMTQ0LjQzIDMwOC4xNCBDIDE0My41OSAzMTEuNjYgMTQyLjk4IDMxNS4yNSAxNDMuNTAgMzE4Ljg4IEMgMTQzLjk3IDMxOC43NiAxNDQuOTIgMzE4LjU0IDE0NS4zOSAzMTguNDMgQyAxNDUuNTYgMzE2LjIzIDE0NS41OCAzMTQuMDIgMTQ1Ljg4IDMxMS44MyBDIDE0Ni4yNiAzMDguODMgMTQ4Ljc0IDMwNi41OSAxNTEuMzQgMzA1LjM0IEMgMTUzLjUxIDMwNS4wOSAxNTUuMDggMzA2Ljk1IDE1Ni44MSAzMDcuOTUgQyAxNTYuODQgMzA5LjM0IDE1Ni44NyAzMTAuNzQgMTU2LjkxIDMxMi4xNCBDIDE1Ni4wOCAzMTMuMDUgMTU1LjI2IDMxMy45NSAxNTQuNDMgMzE0Ljg3IEMgMTU0LjY2IDMxNy41NiAxNTUuMDMgMzIwLjI0IDE1NS40MyAzMjIuOTEgQyAxNTcuOTcgMzIxLjIzIDE2MC45OCAzMjAuOTEgMTYzLjk2IDMyMS4xNSBDIDE2NC45NCAzMjEuODggMTY1LjkyIDMyMi42MiAxNjYuOTAgMzIzLjM3IEMgMTY4Ljc3IDMyMS40MCAxNzAuODQgMzE5LjU5IDE3Mi4zNSAzMTcuMzIgQyAxNzMuNDggMzE1LjI3IDE3My45NCAzMTIuOTMgMTc1LjAxIDMxMC44NSBDIDE3NS4yOSAzMTEuNzUgMTc1Ljg0IDMxMy41MyAxNzYuMTIgMzE0LjQzIEMgMTc2LjYzIDMxMy4xOSAxNzYuMTcgMzExLjk2IDE3NS44MSAzMTAuNzggQyAxNzYuNzMgMzEwLjU2IDE3Ny42NSAzMTAuMzggMTc4LjU4IDMxMC4yMiBDIDE3OC43MSAzMTEuODMgMTc4Ljc3IDMxMy40NCAxNzguNzAgMzE1LjA2IEMgMTczLjUzIDMxNy4wMiAxNzIuMDAgMzIyLjgzIDE2OS4yNSAzMjcuMTAgQyAxNzAuMDUgMzI4LjY5IDE3MS4wMiAzMzAuMTkgMTcxLjkxIDMzMS43NCBDIDE3Ny4wOSAzMjQuMjcgMTgyLjY5IDMxNi4zNSAxODMuNTEgMzA3LjAxIEMgMTg0LjY0IDMwNy41OCAxODYuMTkgMzA3Ljc1IDE4Ni43OSAzMDkuMDQgQyAxODcuMzQgMzEwLjcwIDE4Ni4yOCAzMTIuMjUgMTg1LjY2IDMxMy43MyBDIDE4My44OSAzMTcuMzAgMTgyLjUyIDMyMS4wNiAxODAuODUgMzI0LjY4IEMgMTgxLjcyIDMyNC42MiAxODMuNDYgMzI0LjUyIDE4NC4zMiAzMjQuNDcgQyAxODQuNjUgMzI0LjczIDE4NS4zMSAzMjUuMjcgMTg1LjYzIDMyNS41NCBDIDE4Ny40MyAzMjQuMzQgMTg5LjI4IDMyMy4yMSAxOTAuOTkgMzIxLjg5IEMgMTkzLjU2IDMxOS45OCAxOTQuNDggMzE2Ljc2IDE5Ni40MiAzMTQuMzQgQyAxOTcuMzkgMzEyLjYyIDE5OS43MSAzMTMuNDggMjAxLjI4IDMxMy4wNSBDIDIwMS4wNyAzMTMuMzkgMjAwLjY0IDMxNC4wNiAyMDAuNDIgMzE0LjQwIEMgMjAwLjQxIDMxNS43OCAyMDEuMTEgMzE3LjYwIDE5OS41MSAzMTguMzggQyAxOTUuNTUgMzIxLjA5IDE5MS43OCAzMjQuMDUgMTg4LjM5IDMyNy40NiBDIDE4OC43NSAzMjkuOTMgMTg4Ljg0IDMzMi40NCAxODkuMzEgMzM0LjkwIEMgMTg5Ljg1IDMzNi41NCAxOTEuNjQgMzM3LjE5IDE5Mi45MSAzMzguMTUgQyAxOTIuMTEgMzM2LjM1IDE5MS4xNiAzMzQuNjIgMTkwLjQzIDMzMi43OSBDIDE4OS43MCAzMjkuOTUgMTkwLjg2IDMyNy4xMyAxOTEuNzYgMzI0LjQ5IEMgMTkzLjkxIDMyNC4zMSAxOTYuNTIgMzIyLjk4IDE5OC4zOCAzMjQuNjkgQyAyMDAuMTkgMzI2LjYyIDIwMS42NyAzMjguOTIgMjA0LjExIDMzMC4xNiBDIDIwNC44NCAzMzEuMTUgMjA1LjU2IDMzMi4xNCAyMDYuMzAgMzMzLjEzIEMgMjA2LjQ3IDMyNy40MyAyMDQuMzQgMzIxLjczIDIwNS41OCAzMTYuMDYgQyAyMDUuNzQgMzE0LjkzIDIwNi44NCAzMTQuMzMgMjA3LjU1IDMxMy41NyBDIDIwNy45NCAzMTQuOTcgMjA4LjMyIDMxNi4zOCAyMDguNjcgMzE3LjgwIEMgMjA4LjA3IDMxOS4zMiAyMDYuNjggMzIwLjg2IDIwNy40MCAzMjIuNjAgQyAyMDguMzcgMzI0LjQxIDIxMC45NyAzMjUuMjIgMjEwLjQ0IDMyNy43NCBDIDIxMi4zNyAzMjUuNzYgMjE1LjA1IDMyNS4xNyAyMTcuNjUgMzI0LjYwIEMgMjE3LjAwIDMyMy42OSAyMTYuMzcgMzIyLjc3IDIxNS43NCAzMjEuODYgQyAyMTQuNDUgMzIxLjMwIDIxMy4xOCAzMjAuNjggMjExLjkyIDMyMC4wNCBDIDIxMi43NyAzMTkuMTkgMjEzLjY0IDMxOC4zNCAyMTQuNTEgMzE3LjUwIEMgMjEzLjkwIDMxNS45OCAyMTMuMzQgMzE0LjQ1IDIxMi44NyAzMTIuOTAgQyAyMTUuNTUgMzE1LjkxIDIxNy4zMiAzMTkuNjIgMjIwLjE0IDMyMi41MiBDIDIyMi44MSAzMTcuNzggMjE5Ljc3IDMxMi4xMSAyMjIuNjQgMzA3LjQ5IEMgMjIzLjA3IDMwNy41MSAyMjMuOTMgMzA3LjU2IDIyNC4zNiAzMDcuNTggQyAyMjQuOTQgMzA5LjQwIDIyNS41MyAzMTEuMjIgMjI2LjI3IDMxMi45OCBDIDIyMi40OSAzMTcuODkgMjI0Ljk3IDMyNC4wNiAyMjUuNTcgMzI5LjU2IEMgMjI2LjM4IDMyOS4zMyAyMjguMDEgMzI4Ljg3IDIyOC44MiAzMjguNjQgQyAyMzEuNzkgMzIxLjAxIDIzNC42MyAzMTIuODggMjMzLjM5IDMwNC41NCBDIDIzNC42MCAzMDUuMjEgMjM3LjY1IDMwNC45MSAyMzcuNTIgMzA3LjAxIEMgMjM3LjI3IDMxMS41NCAyMzUuNjUgMzE1LjkwIDIzNS4zMSAzMjAuNDUgQyAyMzYuMDggMzIwLjIwIDIzNi44NCAzMTkuOTUgMjM3LjYxIDMxOS43MSBDIDIzNi41NyAzMTYuMjAgMjM4LjIyIDMxMi42MyAyNDEuNzMgMzExLjQ2IEMgMjQyLjkwIDMxMi4yMyAyNDQuMDggMzEzLjAwIDI0NS4yNiAzMTMuNzYgQyAyNDUuNzIgMzE2LjMyIDI0Ni4yOSAzMTguODYgMjQ2Ljc3IDMyMS40MSBDIDI0OS43NyAzMjIuMzggMjUyLjQyIDMyNC4xMSAyNTUuMTkgMzI1LjU5IEMgMjU2LjQyIDMyNC4zNSAyNTcuNjIgMzIzLjA3IDI1OC44MCAzMjEuNzggQyAyNTguODYgMzE5LjA4IDI1OC45MSAzMTYuMzkgMjU4Ljg5IDMxMy42OSBDIDI1Ni44MyAzMTIuNDggMjU0Ljg0IDMxMS4xNyAyNTMuMDAgMzA5LjY1IEMgMjU0LjQwIDMwOS42NiAyNTUuODAgMzA5LjcwIDI1Ny4yMCAzMDkuNzYgQyAyNTYuMjggMzA2LjY1IDI1Ni4wNyAzMDMuMzkgMjU2LjA5IDMwMC4xNiBDIDI1Ny43OCAzMDEuMDMgMjU4LjcxIDMwMi42NiAyNTkuNTQgMzA0LjI4IEMgMjU5Ljc3IDMwMi45NyAyNjAuMDIgMzAxLjY2IDI2MC4yOCAzMDAuMzYgQyAyNjEuNTIgMzA1LjM0IDI2MS43NyAzMTAuOTYgMjY1Ljg2IDMxNC42MiBDIDI2Ni43NCAzMTIuNzggMjY3LjIyIDMxMC41MSAyNjkuMTMgMzA5LjQzIEMgMjcyLjE2IDMwNy4zNSAyNzQuODcgMzA0LjgxIDI3OC4wNiAzMDIuOTQgQyAyNzcuNTkgMzA1LjM4IDI3NS41NCAzMDYuODIgMjczLjY3IDMwOC4xOSBDIDI3NS41NiAzMDkuNTYgMjc2Ljg5IDMxMS41MSAyNzguMjMgMzEzLjM5IEMgMjc4LjUyIDMxMi44NyAyNzkuMTAgMzExLjgxIDI3OS4zOSAzMTEuMjggQyAyODAuNTQgMzEwLjkyIDI4MS43MCAzMTAuNTggMjgyLjg3IDMxMC4yNCBDIDI4NC4wNiAzMTAuOTEgMjg1LjI1IDMxMS41NyAyODYuNDUgMzEyLjI0IEMgMjg0Ljk2IDMwOC45NSAyODMuODYgMzA1LjUwIDI4Mi41OSAzMDIuMTIgQyAyODEuODIgMjk5LjU3IDI3OC41OCAyOTguNzQgMjc4LjA1IDI5Ni4wOSBDIDI3Ny4zNyAyOTMuMjMgMjc2LjIyIDI5MC41MiAyNzUuMzggMjg3LjcxIEMgMjc2LjgyIDI4OC44OCAyNzcuNzggMjkwLjQ3IDI3OC43OCAyOTIuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQyLjQ1IDI5MS4zMiBDIDM0NS43MyAyOTMuMzggMzQ4Ljk1IDI5NS41MSAzNTIuMTAgMjk3Ljc3IEMgMzUxLjE5IDI5OS4wMCAzNTAuMzAgMzAwLjI0IDM0OS4zOSAzMDEuNDggQyAzNDguODMgMzAxLjA3IDM0Ny43MCAzMDAuMjUgMzQ3LjE0IDI5OS44NCBDIDM0Ny4xNiAzMDEuODIgMzQ3LjY1IDMwMy45MyAzNDYuNzMgMzA1LjgwIEMgMzQ1LjQ0IDMwNi4wMSAzNDQuNDggMzA1LjA0IDM0My40NyAzMDQuNDYgQyAzNDQuMzQgMzAxLjk1IDM0NS40NiAyOTguNzIgMzQyLjc5IDI5Ni44MyBDIDM0MS41NCAyOTcuOTkgMzQwLjgxIDMwMC4wOCAzMzkuMjIgMzAwLjY2IEMgMzM4LjY2IDMwMC4yOSAzMzcuNTUgMjk5LjU0IDMzNy4wMCAyOTkuMTcgQyAzMzguOTQgMjk2LjY1IDM0MC44MCAyOTQuMDUgMzQyLjQ1IDI5MS4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA1NS41NiAyOTguMzkgQyA1Ny4zMyAyOTYuOTUgNTkuMTggMjk1LjYxIDYxLjA0IDI5NC4yOCBDIDYxLjk0IDI5NS41NCA2Mi44NiAyOTYuNzkgNjMuNzkgMjk4LjAzIEMgNjIuNzcgMjk4Ljc0IDYxLjc2IDI5OS40NCA2MC43NCAzMDAuMTUgQyA2Mi4zOCAzMDIuMzQgNjQuMDcgMzA0LjQ5IDY1Ljc3IDMwNi42MyBDIDY0LjI2IDMwNy44OCA2Mi44NCAzMDkuMjQgNjEuMTYgMzEwLjI3IEMgNTguODAgMzEwLjM5IDU2LjQzIDMxMC4xMiA1NC4wNyAzMTAuMjcgQyA1My4wOCAzMDkuMDIgNTIuMDkgMzA3Ljc3IDUxLjE0IDMwNi40OSBDIDUzLjQwIDMwNS4zMCA1NS44OCAzMDYuMTggNTguMjMgMzA2LjUxIEMgNTguODEgMzA2LjE1IDU5Ljk5IDMwNS40MyA2MC41NyAzMDUuMDcgQyA1OC44OSAzMDIuODUgNTcuMjMgMzAwLjYyIDU1LjU2IDI5OC4zOSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzggMjk2LjQwIEMgMjk1LjQ2IDI5NS45OSAyOTcuMTEgMjk1LjI4IDI5OC44NyAyOTUuMjcgQyAzMDEuOTUgMjk3LjUxIDMwNC4wNyAzMDAuODIgMzA3LjIzIDMwMy4wMCBDIDMwNy4zNiAzMDQuMTggMzA3LjUwIDMwNS4zNyAzMDcuNjMgMzA2LjU2IEMgMzA2LjkzIDMwNy4yMSAzMDYuMjIgMzA3Ljg3IDMwNS41MyAzMDguNTQgQyAzMDQuNDMgMzA3LjIzIDMwMy4zMiAzMDUuOTMgMzAyLjI3IDMwNC42MCBDIDMwMS4zNCAzMDQuOTMgMzAwLjQyIDMwNS4yNiAyOTkuNTEgMzA1LjYwIEMgMjk5LjQwIDMwNC45NCAyOTkuMjAgMzAzLjYxIDI5OS4wOSAzMDIuOTQgQyAyOTguMDkgMzA0LjIwIDI5Ny4xMiAzMDUuNDggMjk2LjIwIDMwNi43OSBDIDI5NS42MSAzMDYuNzggMjk0LjQzIDMwNi43NSAyOTMuODQgMzA2Ljc0IEMgMjk2LjEzIDMwOC4yMyAyOTQuOTAgMzA5Ljc1IDI5My4yMSAzMTEuMTUgQyAyOTMuODMgMzExLjU5IDI5NC40NSAzMTIuMDIgMjk1LjA3IDMxMi40NyBDIDI5NC42NiAzMTMuOTIgMjk0LjI4IDMxNS4zOSAyOTMuOTAgMzE2Ljg2IEMgMjk0LjQ5IDMxNi43MSAyOTUuNjYgMzE2LjQxIDI5Ni4yNSAzMTYuMjYgQyAyOTUuMzcgMzE3LjI5IDI5NC41MSAzMTguMzQgMjkzLjYzIDMxOS4zNyBDIDI5My4yNyAzMTcuMjkgMjkyLjM3IDMxNS4xMiAyOTMuNDcgMzEzLjA5IEMgMjkyLjk0IDMxMi45OCAyOTEuODggMzEyLjc2IDI5MS4zNSAzMTIuNjUgQyAyOTIuMTUgMzEwLjU3IDI5My4wNCAzMDguNTIgMjkzLjYzIDMwNi4zNiBDIDI5NC42MyAzMDUuMjMgMjk1LjU3IDMwNC4wNSAyOTYuNTMgMzAyLjg3IEMgMjk1LjQyIDMwMi40MSAyOTQuMzIgMzAxLjk1IDI5My4yMiAzMDEuNTEgQyAyOTMuNDMgMjk5LjgxIDI5My42MiAyOTguMTAgMjkzLjc4IDI5Ni40MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMzIuNjUgMzA0LjY2IEMgMzMzLjY3IDMwMy40OSAzMzQuNzAgMzAyLjMyIDMzNS43MyAzMDEuMTYgQyAzMzguNjIgMzAzLjU4IDM0MS42MiAzMDUuODggMzQ0LjYzIDMwOC4xNSBDIDM0My42MiAzMDkuNDUgMzQyLjYwIDMxMC43NSAzNDEuNTcgMzEyLjA1IEMgMzM4LjU2IDMwOS42MyAzMzUuNTQgMzA3LjIxIDMzMi42NSAzMDQuNjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk2LjIwIDMwNi43OSBDIDI5Ny4xMiAzMDUuNDggMjk4LjA5IDMwNC4yMCAyOTkuMDkgMzAyLjk0IEMgMjk5LjIwIDMwMy42MSAyOTkuNDAgMzA0Ljk0IDI5OS41MSAzMDUuNjAgQyAzMDAuNDIgMzA1LjI2IDMwMS4zNCAzMDQuOTMgMzAyLjI3IDMwNC42MCBDIDMwMy4zMiAzMDUuOTMgMzA0LjQzIDMwNy4yMyAzMDUuNTMgMzA4LjU0IEMgMzAyLjUyIDMxMS4xOCAyOTkuOTggMzE0LjYyIDI5Ni4yNSAzMTYuMjYgQyAyOTUuNjYgMzE2LjQxIDI5NC40OSAzMTYuNzEgMjkzLjkwIDMxNi44NiBDIDI5NC4yOCAzMTUuMzkgMjk0LjY2IDMxMy45MiAyOTUuMDcgMzEyLjQ3IEMgMjk0LjQ1IDMxMi4wMiAyOTMuODMgMzExLjU5IDI5My4yMSAzMTEuMTUgQyAyOTQuOTAgMzA5Ljc1IDI5Ni4xMyAzMDguMjMgMjkzLjg0IDMwNi43NCBDIDI5NC40MyAzMDYuNzUgMjk1LjYxIDMwNi43OCAyOTYuMjAgMzA2Ljc5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMyOC4xMSAzMTAuMjYgQyAzMjkuMTAgMzA5LjA5IDMzMC4xMCAzMDcuOTMgMzMxLjA4IDMwNi43NSBDIDMzNC44MCAzMDkuNzggMzM4LjQwIDMxMi45MyAzNDIuMTIgMzE1Ljk2IEMgMzQxLjA3IDMxNy4yNSAzNDAuMDIgMzE4LjU1IDMzOC45OSAzMTkuODcgQyAzMzUuNDIgMzE2LjYwIDMzMS43MSAzMTMuNDkgMzI4LjExIDMxMC4yNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMjAuMjAgMzEyLjc2IEMgMTIxLjMyIDMxMC44MCAxMjQuNDggMzEwLjk4IDEyNi41MiAzMTAuMjQgQyAxMjYuNTEgMzEyLjIwIDEyNi41MCAzMTQuMTYgMTI2LjU0IDMxNi4xMiBDIDEyNC45NyAzMTQuMDggMTIyLjY3IDMxMy4yMCAxMjAuMjAgMzEyLjc2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDYxLjcyIDMyMy45NSBDIDY1LjExIDMyMC41NSA2OC42NiAzMTcuMzMgNzIuMDUgMzEzLjkzIEMgNzMuMTUgMzE0Ljk4IDc0LjI0IDMxNi4wNCA3NS4zNSAzMTcuMDggQyA3NC4yNCAzMTguMjggNzMuMTMgMzE5LjQ4IDcyLjA0IDMyMC43MSBDIDczLjE1IDMyMC45MyA3NC4yNyAzMjEuMTYgNzUuMzkgMzIxLjM4IEMgNzYuMDIgMzIwLjY1IDc2LjY2IDMxOS45MyA3Ny4yOSAzMTkuMjAgQyA3OC40MCAzMjAuMjcgNzkuNTIgMzIxLjMyIDgwLjY0IDMyMi4zOCBDIDc5LjMwIDMyMy41MSA3OC4wNiAzMjYuMTMgNzUuOTMgMzI0Ljk4IEMgNzMuNzQgMzI0LjU0IDcxLjY1IDMyMy4wNCA2OS40MCAzMjMuMjQgQyA2Ny44NiAzMjQuNDcgNjYuNTIgMzI1LjkyIDY1LjEwIDMyNy4yOSBDIDYzLjk4IDMyNi4xNyA2Mi44NSAzMjUuMDYgNjEuNzIgMzIzLjk1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExNC40NCAzMTUuMTYgQyAxMTUuNDMgMzE1LjEyIDExOC43NCAzMTIuMDUgMTE4LjE4IDMxNC4xNCBDIDExNy42OCAzMTUuMDkgMTE3LjE0IDMxNi4wMiAxMTYuNTUgMzE2LjkyIEMgMTE2LjAxIDMxOS41NCAxMTUuODMgMzIyLjI1IDExNi43NiAzMjQuODIgQyAxMTYuNTUgMzI0Ljg3IDExNi4xMiAzMjQuOTcgMTE1LjkxIDMyNS4wMiBMIDExNS4xMCAzMjQuNzUgQyAxMTMuMjkgMzIxLjg5IDExMy43NyAzMTguMjggMTE0LjQ0IDMxNS4xNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNjQuMDcgMzI0Ljc5IEMgMjY1LjQ1IDMyMi4wMyAyNjUuODIgMzE4LjAxIDI2OS4wOSAzMTYuNzggQyAyNjcuMjYgMzIwLjIxIDI2NS42MCAzMjMuNzUgMjYzLjQyIDMyNi45OSBDIDI2My40OCAzMjguNTYgMjY0LjI3IDMyOS41OSAyNjUuODAgMzMwLjA5IEMgMjYzLjc1IDMzMC42MSAyNjEuNzEgMzMxLjIyIDI1OS41OSAzMzEuMzggQyAyNjAuMjUgMzI4LjY1IDI2Mi41MCAzMjYuOTUgMjY0LjA3IDMyNC43OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMjEuNDggMzE3LjM2IEMgMzIyLjkxIDMxOC43NyAzMjQuMzIgMzIwLjIxIDMyNS41NiAzMjEuODEgQyAzMjUuMDcgMzIyLjgzIDMyNC42MCAzMjMuODYgMzI0LjEyIDMyNC44OSBDIDMyNi4wOCAzMjQuOTAgMzI4LjAyIDMyNC45MCAzMjkuOTkgMzI0LjkxIEMgMzI4LjcyIDMyNi4xNyAzMjcuNzAgMzI3LjgyIDMyNi4wNyAzMjguNjQgQyAzMjMuNDIgMzI4Ljc1IDMyMC43OCAzMjguNDkgMzE4LjE1IDMyOC4zOCBDIDMxOS40NiAzMjkuODcgMzIwLjc4IDMzMS4zNyAzMjIuMDYgMzMyLjg5IEMgMzIwLjgyIDMzMy44NCAzMTkuNTkgMzM0LjgxIDMxOC4zNiAzMzUuNzggQyAzMTcuMDggMzM0LjIzIDMxNS43OCAzMzIuNjkgMzE0LjUxIDMzMS4xMyBDIDMxNC43NyAzMzAuMzYgMzE1LjI4IDMyOC44MiAzMTUuNTQgMzI4LjA1IEMgMzEzLjg3IDMyNy45MiAzMTIuMTkgMzI3Ljc4IDMxMC41MyAzMjcuNjMgQyAzMTEuNjYgMzI2LjU1IDMxMi43NCAzMjUuMzkgMzE0LjAzIDMyNC41MCBDIDMxNi43MSAzMjQuNTAgMzE5LjM3IDMyNC44MCAzMjIuMDUgMzI0Ljc5IEMgMzIwLjg2IDMyMy4zNSAzMTkuNjEgMzIxLjk4IDMxOC4zMyAzMjAuNjMgQyAzMTkuMzcgMzE5LjU0IDMyMC40MiAzMTguNDUgMzIxLjQ4IDMxNy4zNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNTEuNzIgMzIyLjUwIEMgMTQ5LjA4IDMyMS40MCAxNTEuNTMgMzE5LjU0IDE1Mi4zMyAzMTguMDYgQyAxNTIuMTggMzE5LjU1IDE1MS45NiAzMjEuMDIgMTUxLjcyIDMyMi41MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNzguOTkgMzIwLjI4IEMgMjgwLjAxIDMyMS4zNiAyODEuMTcgMzIyLjI5IDI4Mi40NCAzMjMuMDkgQyAyODIuMDQgMzIzLjg4IDI4Mi4yMyAzMjYuMDUgMjgwLjg4IDMyNS4yMyBDIDI4MC41NCAzMjMuNDcgMjgwLjA3IDMyMS43NCAyNzguOTkgMzIwLjI4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDc0Ljc3IDMzMi41NiBDIDc3LjE4IDMyOS42NyA3OS44OCAzMjcuMDQgODIuMjAgMzI0LjA4IEMgODMuNDQgMzI1LjAyIDg0LjY3IDMyNS45NyA4NS44OSAzMjYuOTQgQyA4My4zMiAzMjkuODEgODAuODkgMzMyLjgxIDc4LjMyIDMzNS42OCBDIDc3LjE0IDMzNC42MyA3NS45NiAzMzMuNTkgNzQuNzcgMzMyLjU2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDgwLjI2IDMzNy4yNiBDIDgyLjc5IDMzNC4zOSA4NS4xOSAzMzEuNDAgODcuNjcgMzI4LjQ5IEMgOTAuNzMgMzMxLjUzIDk1LjAzIDMzMy4zMyA5Ny40MCAzMzYuOTggQyA5Ni4yMiAzNDAuMzMgOTMuNTIgMzQyLjg4IDkxLjc0IDM0NS45MSBDIDkwLjM4IDM0NS4wMyA4OS4wNiAzNDQuMTMgODcuNzQgMzQzLjIxIEMgODkuNDAgMzQwLjk5IDkxLjExIDMzOC44MCA5Mi43OCAzMzYuNTkgQyA5MS42NSAzMzUuNjQgOTAuNTEgMzM0LjcwIDg5LjM4IDMzMy43NSBDIDg3LjQyIDMzNS43OCA4NS43NCAzMzguMDQgODQuMDUgMzQwLjI5IEMgODIuNzcgMzM5LjI5IDgxLjUxIDMzOC4yOCA4MC4yNiAzMzcuMjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzA1LjkzIDMzMS4yMCBDIDMwNy4xMCAzMzAuMzEgMzA4LjI2IDMyOS40MSAzMDkuNDMgMzI4LjUyIEMgMzExLjgyIDMzMS40NiAzMTQuMjAgMzM0LjQyIDMxNi43OCAzMzcuMjEgQyAzMTUuNTUgMzM4LjI4IDMxNC4zMCAzMzkuMzIgMzEzLjA0IDM0MC4zNiBDIDMxMC42NyAzMzcuMzEgMzA4LjIzIDMzNC4zMCAzMDUuOTMgMzMxLjIwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1Mi4zMCAzMzUuMjggQyAxNTIuOTMgMzM0LjQ5IDE1My41NyAzMzMuNzEgMTU0LjIxIDMzMi45NCBDIDE1NC42MyAzMzMuOTQgMTU1LjA2IDMzNC45NSAxNTUuNDkgMzM1Ljk2IEMgMTU0LjQyIDMzNS43MyAxNTMuMzYgMzM1LjUxIDE1Mi4zMCAzMzUuMjggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTczLjkzIDMzOC45NiBDIDE3NC4zMyAzMzYuNzQgMTc1LjMzIDMzNC43MiAxNzYuNDUgMzMyLjc5IEMgMTc2Ljk1IDMzNC43MiAxNzcuNTAgMzM2LjY1IDE3Ny45NyAzMzguNjEgQyAxNzYuNjIgMzM4LjczIDE3NS4yNyAzMzguODUgMTczLjkzIDMzOC45NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzYgMzQwLjAzIEMgMjk3LjI4IDMzNy45MCAzMDAuMzcgMzM1LjA3IDMwNC4xNyAzMzMuMzkgQyAzMDYuNjYgMzM2LjAyIDMwOS4wMiAzMzguODIgMzEwLjkwIDM0MS45MiBDIDMwOS44NCAzNDIuODggMzA4LjY3IDM0My43MiAzMDcuNDUgMzQ0LjQ2IEMgMzA1LjM0IDM0Mi43MCAzMDQuMTQgMzQwLjA5IDMwMi40OSAzMzcuOTMgQyAzMDAuMDAgMzM5LjUzIDI5Ny41NyAzNDEuMjEgMjk1LjA0IDM0Mi43NSBDIDI5NC43MiAzNDIuMDcgMjk0LjA4IDM0MC43MSAyOTMuNzYgMzQwLjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDk3LjM3IDM0Mi4wNyBDIDk4LjI0IDM0MC42NyA5OS4xOSAzMzkuMzMgMTAwLjEyIDMzNy45NyBDIDEwMS4zMiAzMzguNzYgMTAyLjUzIDMzOS41NiAxMDMuNzMgMzQwLjM2IEMgMTAzLjA3IDM0MS41NSAxMDIuNDIgMzQyLjc1IDEwMS44MyAzNDMuOTggQyAxMDMuMTkgMzQzLjMzIDEwNC40OCAzNDIuNTAgMTA1Ljk1IDM0Mi4wOSBDIDEwOC4yMiAzNDIuNzMgMTEwLjEyIDM0NC4yMiAxMTEuODQgMzQ1Ljc4IEMgMTEwLjE2IDM0OS4wNiAxMDguMjcgMzUyLjIxIDEwNi41MSAzNTUuNDQgQyAxMDQuMzMgMzU0LjE0IDEwMi4xMyAzNTIuODYgOTkuOTUgMzUxLjU3IEMgMTAwLjQyIDM1MC42NiAxMDAuOTEgMzQ5Ljc1IDEwMS4zOSAzNDguODQgQyAxMDIuMjkgMzQ5LjM3IDEwMy4xOSAzNDkuOTEgMTA0LjA5IDM1MC40NSBDIDEwNS4wOSAzNDguNzYgMTA2LjA3IDM0Ny4wNSAxMDYuOTEgMzQ1LjI3IEMgMTAzLjA2IDM0NS4xNiAxMDAuNjMgMzQ5LjEwIDk3LjA0IDM0OS42NSBDIDk1Ljc3IDM0OC45MCA5NC41OCAzNDguMDIgOTMuMzggMzQ3LjE4IEMgOTUuMTggMzQ2LjI4IDk2Ljk5IDM0NS40MCA5OC44MSAzNDQuNTQgQyA5OC4zMCAzNDMuNzMgOTcuODIgMzQyLjkxIDk3LjM3IDM0Mi4wNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyODAuNDggMzQ3LjkxIEMgMjg0LjMwIDM0NS43NSAyODguMTEgMzQzLjU3IDI5MS45MSAzNDEuMzcgQyAyOTIuMjkgMzQxLjkzIDI5My4wNSAzNDMuMDUgMjkzLjQ0IDM0My42MiBDIDI5Mi44OCAzNDQuMTAgMjkyLjMzIDM0NC41OSAyOTEuNzkgMzQ1LjA5IEMgMjkzLjMyIDM0Ny4zOCAyOTQuNzYgMzQ5LjczIDI5Ni4yMiAzNTIuMDggQyAyOTQuODYgMzUyLjg3IDI5My40OSAzNTMuNjYgMjkyLjEzIDM1NC40NiBDIDI5MC43OCAzNTIuMDIgMjg5LjM3IDM0OS42MiAyODcuOTUgMzQ3LjIzIEMgMjg2LjAyIDM0OC4zNCAyODQuMDcgMzQ5LjQxIDI4Mi4wOSAzNTAuNDMgQyAyODEuNjkgMzQ5LjgwIDI4MC44OCAzNDguNTQgMjgwLjQ4IDM0Ny45MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTYuMjAgMzQ0LjA4IEMgMjk3LjQ1IDM0My4yMyAyOTguNzAgMzQyLjM4IDI5OS45NiAzNDEuNTQgQyAzMDEuMjEgMzQzLjQyIDMwMi41MSAzNDUuMjggMzAzLjgzIDM0Ny4xMiBDIDMwMi41MyAzNDcuOTYgMzAxLjI3IDM0OC44NyAyOTkuOTMgMzQ5LjY1IEMgMjk4LjU3IDM0Ny44NyAyOTcuNDMgMzQ1Ljk0IDI5Ni4yMCAzNDQuMDggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjc0LjkzIDM1MC40OSBDIDI3Ni4yNCAzNDkuOTUgMjc3LjU2IDM0OS40MiAyNzguODggMzQ4LjkxIEMgMjc5Ljg0IDM1MC44NiAyODEuMDAgMzUyLjcyIDI4MS43NCAzNTQuNzcgQyAyODAuNDggMzU1LjU2IDI3OS4xMSAzNTYuMTUgMjc3Ljc2IDM1Ni43OCBDIDI3Ni43OCAzNTQuNjkgMjc1Ljc5IDM1Mi42MiAyNzQuOTMgMzUwLjQ5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDEyMC4yMCAzNDkuODIgQyAxMjMuNzggMzUxLjUyIDEyNy41MyAzNTIuOTIgMTMwLjk5IDM1NC44NiBDIDEzMi40OCAzNTUuNzAgMTMxLjgwIDM1Ny4yNiAxMzEuMzQgMzU4LjUxIEMgMTMwLjM5IDM2MS4wMCAxMjkuMzEgMzYzLjQ0IDEyOC4zMSAzNjUuOTEgQyAxMjMuOTIgMzY0LjAxIDExOS40NyAzNjIuMjQgMTE1LjIzIDM2MC4wMiBDIDExNi43MCAzNTYuNTMgMTE4LjY1IDM1My4yOCAxMjAuMjAgMzQ5LjgyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEyMi45MSAzNTQuNDUgQyAxMjQuNDMgMzU1LjE0IDEyNS45NiAzNTUuODQgMTI3LjQ3IDM1Ni41NyBDIDEyNi43MSAzNTguMTUgMTI1Ljk4IDM1OS43NiAxMjUuMjQgMzYxLjM1IEMgMTIzLjcwIDM2MC42MSAxMjIuMTUgMzU5LjkwIDEyMC42MSAzNTkuMTcgQyAxMjEuMzkgMzU3LjYwIDEyMi4xNSAzNTYuMDMgMTIyLjkxIDM1NC40NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNDEuNjcgMzU1LjAzIEMgMTQzLjAzIDM1NS4zMiAxNDQuMzggMzU1LjY0IDE0NS43MiAzNTUuOTggQyAxNDUuNDYgMzU3LjI1IDE0NS4yMSAzNTguNTIgMTQ0Ljk2IDM1OS43OSBDIDE0Ny4yNyAzNjAuNDYgMTQ5LjU4IDM2MS4xMiAxNTEuOTEgMzYxLjczIEMgMTUxLjQwIDM2My41NyAxNTEuMDIgMzY1LjQ3IDE1MC4yNCAzNjcuMjQgQyAxNDguNTIgMzY4Ljk0IDE0Ni4yNiAzNzAuMDAgMTQ0LjMyIDM3MS40NCBDIDE0Mi45NSAzNzEuMDYgMTQxLjYwIDM3MC42NiAxNDAuMjUgMzcwLjIzIEMgMTQxLjkyIDM2Ny4zMiAxNDYuMDUgMzY3LjEyIDE0Ny4xOSAzNjMuNzYgQyAxNDQuNjggMzYyLjg1IDE0Mi4xNCAzNjIuMDIgMTM5LjYxIDM2MS4yMCBDIDE0MC4zMSAzNTkuMTQgMTQxLjAwIDM1Ny4wOSAxNDEuNjcgMzU1LjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI1NC42MSAzNTguOTMgQyAyNTcuODIgMzU3Ljg3IDI2MC45NCAzNTYuNTYgMjY0LjE1IDM1NS41MCBDIDI2NS4yMCAzNTUuMTcgMjY2Ljg1IDM1NS4xMyAyNjcuMjYgMzU2LjQxIEMgMjY4LjY1IDM1OS4yMSAyNjkuNzQgMzYyLjE0IDI3MC45MiAzNjUuMDQgQyAyNjkuNTEgMzY1LjU4IDI2OC4xMCAzNjYuMTUgMjY2LjcxIDM2Ni43MiBDIDI2NS42OSAzNjQuMTYgMjY0LjY2IDM2MS42MCAyNjMuNjQgMzU5LjA0IEMgMjYxLjM3IDM1OS43NiAyNTkuMTIgMzYwLjUyIDI1Ni44NSAzNjEuMjQgQyAyNTguMDcgMzYxLjc2IDI1OS4zNCAzNjIuMTMgMjYwLjY1IDM2Mi4zNyBDIDI2MS4zNyAzNjQuMzAgMjYyLjEwIDM2Ni4yNCAyNjIuODIgMzY4LjE4IEMgMjYxLjM1IDM2OC42NiAyNTkuODggMzY5LjE3IDI1OC40MiAzNjkuNjcgQyAyNTcuODEgMzY3LjkwIDI1Ny4yMiAzNjYuMTIgMjU2LjY1IDM2NC4zNCBDIDI1Ny4xNCAzNjMuMDIgMjU2LjY1IDM2MS44MiAyNTUuNTggMzYxLjAyIEMgMjU1LjM0IDM2MC41MCAyNTQuODUgMzU5LjQ1IDI1NC42MSAzNTguOTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTM0LjgwIDM1Ni4xNyBDIDEzNi4xNyAzNTYuNjcgMTM3LjU1IDM1Ny4xNyAxMzguOTIgMzU3LjY4IEMgMTM4LjExIDM1OS43NiAxMzcuMzUgMzYxLjg3IDEzNi42MCAzNjMuOTggQyAxMzUuMTQgMzYzLjUwIDEzMy43MCAzNjIuOTggMTMyLjI2IDM2Mi40OSBDIDEzMy4xNyAzNjAuNDAgMTM0LjAxIDM1OC4zMCAxMzQuODAgMzU2LjE3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI0MC4zMCAzNjIuOTkgQyAyNDQuMzIgMzYyLjE3IDI0OC4xNiAzNjAuNTMgMjUyLjI5IDM2MC4yNCBDIDI1My44MCAzNjMuMDUgMjU0LjkwIDM2Ni4wOCAyNTUuNTIgMzY5LjIyIEMgMjU1LjA3IDM3MC4yMyAyNTQuMzEgMzcwLjkyIDI1My4yNiAzNzEuMjcgQyAyNDkuODggMzcyLjQ3IDI0Ni4zNyAzNzMuMjkgMjQyLjg2IDM3NC4wNCBDIDI0Mi43MCAzNzMuMDcgMjQyLjU0IDM3Mi4xMCAyNDIuMzggMzcxLjE0IEMgMjQ1LjE2IDM3MC4zOCAyNDguMDUgMzY5Ljg4IDI1MC43MCAzNjguNzEgQyAyNTAuNDIgMzY2LjkzIDI0OS43NSAzNjUuMjUgMjQ5LjIyIDM2My41NiBDIDI0Ny42OCAzNjQuMDEgMjQ2LjE0IDM2NC40NiAyNDQuNzUgMzY1LjI2IEMgMjQ1Ljg4IDM2Ni4xMCAyNDguNDMgMzY2LjA0IDI0Ny44NSAzNjguMTIgQyAyNDUuOTggMzY4LjkyIDI0My45MyAzNjkuMTQgMjQxLjkzIDM2OS40MCBDIDI0MS4zMSAzNjcuMjggMjQwLjc3IDM2NS4xMyAyNDAuMzAgMzYyLjk5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1NC4wOCAzNjIuNDAgQyAxNTUuMzMgMzYyLjYzIDE1Ni41NyAzNjIuOTEgMTU3LjgwIDM2My4yNCBDIDE1Ny43OCAzNjYuMjQgMTU2LjQ2IDM2OS4wNiAxNTYuMTIgMzcyLjA0IEMgMTU2LjU4IDM3MS45NCAxNTcuNTAgMzcxLjc1IDE1Ny45NiAzNzEuNjUgQyAxNTguNzQgMzY5LjA3IDE1OS4xOSAzNjYuNDAgMTU5LjgwIDM2My43OCBDIDE2MS4xNCAzNjQuMDMgMTYyLjQ4IDM2NC4yOCAxNjMuODIgMzY0LjUzIEMgMTYzLjIzIDM2Ny40NyAxNjIuNTggMzcwLjM5IDE2Mi4wOSAzNzMuMzUgQyAxNjIuNjMgMzczLjE5IDE2My43MSAzNzIuODggMTY0LjI1IDM3Mi43MiBDIDE2NC45MCAzNzAuMjEgMTY1LjE0IDM2Ny42MSAxNjUuOTAgMzY1LjE0IEMgMTY3LjE5IDM2NS4yMiAxNjguNDggMzY1LjM1IDE2OS43NyAzNjUuNTEgQyAxNjguNzAgMzY5LjA2IDE3MC4wNiAzNzUuNDEgMTY1LjE2IDM3Ni4xOCBDIDE2MC40MCAzNzUuOTEgMTU1LjgxIDM3NC40MiAxNTEuMTcgMzczLjQxIEMgMTUyLjE4IDM2OS43NSAxNTMuMTkgMzY2LjA5IDE1NC4wOCAzNjIuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA0LjU2IDM2NC4yNCBDIDIwNS45NiAzNjQuMTcgMjA3LjM1IDM2NC4xMiAyMDguNzUgMzY0LjA4IEMgMjA4LjgwIDM2NC45OCAyMDguOTEgMzY2Ljc3IDIwOC45NiAzNjcuNjcgQyAyMTEuNDkgMzY3LjQ3IDIxNC4wMyAzNjcuMjkgMjE2LjU3IDM2Ny4xNyBDIDIxNi42MyAzNjkuMjUgMjE3LjEyIDM3MS4zOSAyMTYuNjkgMzczLjQ3IEMgMjE1LjUzIDM3NS4yMyAyMTQuMTggMzc2Ljg4IDIxMy4yOCAzNzguODEgQyAyMTEuNzUgMzc4LjgzIDIxMC4yMyAzNzguODQgMjA4LjcwIDM3OC44MyBDIDIwOS40MiAzNzUuNjYgMjEzLjI4IDM3NC4wOSAyMTIuNjkgMzcwLjU1IEMgMjEwLjA1IDM3MC42NiAyMDcuNDEgMzcwLjc5IDIwNC43OCAzNzAuODAgQyAyMDQuNzUgMzY4LjYxIDIwNC42NyAzNjYuNDIgMjA0LjU2IDM2NC4yNCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMzMuODggMzY0LjQwIEMgMjM1LjI5IDM2NC4xMyAyMzYuNjkgMzYzLjg4IDIzOC4xMCAzNjMuNjQgQyAyMzguODggMzY3LjMwIDIzOS43MSAzNzAuOTQgMjQwLjcwIDM3NC41NSBDIDIzOS4xNyAzNzQuOTIgMjM3LjY1IDM3NS4yOSAyMzYuMTIgMzc1LjYzIEMgMjM1LjQyIDM3MS44NyAyMzQuNTMgMzY4LjE2IDIzMy44OCAzNjQuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjI3LjUzIDM2NS41MSBDIDIyOC45NiAzNjUuMzMgMjMwLjQwIDM2NS4xNyAyMzEuODQgMzY1LjAxIEMgMjMyLjA2IDM2OC42NiAyMzUuMjYgMzczLjgxIDIzMS4yMiAzNzYuMjUgQyAyMjcuNTUgMzc3LjU3IDIyMy41NyAzNzcuNTYgMjE5Ljc1IDM3OC4yMSBDIDIxOS43MCAzNzcuNDcgMjE5LjYwIDM3Ni4wMCAyMTkuNTUgMzc1LjI2IEMgMjIwLjI0IDM3NS4xMiAyMjEuNjQgMzc0Ljg0IDIyMi4zMyAzNzQuNzAgQyAyMjEuMzQgMzcyLjAxIDIyMC4wOSAzNjkuNDIgMjE5LjAxIDM2Ni43OCBDIDIyMC4wOSAzNjYuNjQgMjIyLjI2IDM2Ni4zNyAyMjMuMzQgMzY2LjI0IEMgMjI0LjgzIDM2OS4xMCAyMjUuMzkgMzcyLjYzIDIyOC4wMCAzNzQuNzYgQyAyMjkuNTIgMzcxLjgwIDIyNy43OSAzNjguNTUgMjI3LjUzIDM2NS41MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNzIuMDYgMzY2LjEzIEMgMTczLjUxIDM2Ni4yNyAxNzQuOTYgMzY2LjQyIDE3Ni40MSAzNjYuNTcgQyAxNzUuOTEgMzcwLjMwIDE3NS4zOCAzNzQuMDIgMTc1LjA1IDM3Ny43NyBDIDE3My40OCAzNzcuNjUgMTcxLjkyIDM3Ny41MSAxNzAuMzUgMzc3LjM3IEMgMTcwLjk2IDM3My42MyAxNzEuNTcgMzY5Ljg5IDE3Mi4wNiAzNjYuMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTc4LjAyIDM2OS43NCBDIDE3OC4yMCAzNjguNzUgMTc4LjM5IDM2Ny43NyAxNzguNTkgMzY2Ljc5IEMgMTgyLjE2IDM2Ny40NiAxODYuMDMgMzY2LjkzIDE4OS4zNiAzNjguNjQgQyAxODkuMzEgMzcyLjIxIDE4OS4yMCAzNzUuNzkgMTg4LjY0IDM3OS4zMyBDIDE4Ny41NyAzNzkuMTggMTg1LjQzIDM3OC44OSAxODQuMzYgMzc4Ljc1IEMgMTg0LjU0IDM3Ni4wMSAxODQuNzQgMzczLjI4IDE4NC44NyAzNzAuNTUgQyAxODIuNTggMzcwLjM1IDE4MC4yOSAzNzAuMDkgMTc4LjAyIDM2OS43NCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTEuNzYgMzY3Ljc5IEMgMTkzLjIyIDM2Ny44MyAxOTQuNjggMzY3Ljg3IDE5Ni4xNCAzNjcuOTIgQyAxOTYuMTMgMzcwLjE2IDE5Ni4xMyAzNzIuMzkgMTk2LjE0IDM3NC42NCBDIDE5NC42MSAzNzQuNjQgMTkzLjA3IDM3NC42NSAxOTEuNTQgMzc0LjY1IEMgMTkxLjYxIDM3Mi4zNiAxOTEuNjkgMzcwLjA3IDE5MS43NiAzNjcuNzkgWlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cbn1cblxuTG9nby5Qcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG9wYWNpdHk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xvZ28uanN4IiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcbmNvbnN0IGF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucycpO1xuXG5jb25zdCBtZW51UGFnZXNJZHMgPSBbXG4gICAgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRSxcbiAgICBDb25zdGFudHMuUk9VVElORy5QQUdFUy5VU0VSUyxcbiAgICBDb25zdGFudHMuUk9VVElORy5QQUdFUy5HQU1FUyxcbiAgICBDb25zdGFudHMuUk9VVElORy5QQUdFUy5CT09LSU5HUyxcbiAgICBDb25zdGFudHMuUk9VVElORy5QQUdFUy5ESVNUUklCVVRJT05cbl07XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy90b3BCYXIuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICBjb25zdCBhdXRoRGF0YSA9IHN0YXRlLmF1dGhEYXRhO1xuICAgIGNvbnN0IHVzZXJzID0gc3RhdGUudXNlcnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1aWQ6IGF1dGhEYXRhLnVpZCxcbiAgICAgICAgcGhvdG9VUkw6IGF1dGhEYXRhLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjMvMTYzODA0LnN2ZycsXG4gICAgICAgIGlzQWRtaW46IGF1dGhEYXRhLmlzQWRtaW4sXG4gICAgICAgIGN1cnJlbnRQYWdlSWQ6IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYWdlSWQsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhdXRoRGF0YSAmJiB1c2Vyc1thdXRoRGF0YS51aWRdXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmF2aWdhdGVUbzogKHBhZ2VJZCwgcGFyYW1zKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZVRvKHBhZ2VJZCwgcGFyYW1zKSksXG4gICAgICAgIHNpZ25PdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNpZ25PdXQoKSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyVGl0bGUoY3VycmVudFVzZXIpIHtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiAn157Xqdeq157XqSc7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50VXNlci5maXJzdE5hbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih1aWQsIGN1cnJlbnRVc2VyLCBwaG90b1VSTCwgbmF2aWdhdGVUbywgc2lnbk91dCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTUgc21hbGwtMTAgY29sdW1uIHVzZXItaW5mb1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e3Bob3RvVVJMfSBvbkNsaWNrPXtuYXZpZ2F0ZVRvLmJpbmQodGhpcywgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRURJVF9VU0VSX0lORk8sIHsgdWlkIH0pfS8+XG4gICAgICAgICAgICA8c3Bhbj7Xqdec15XXnSA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj57Z2V0VXNlclRpdGxlKGN1cnJlbnRVc2VyKX08L3NwYW4+PHNwYW4+IHwgPC9zcGFuPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGlzY29ubmVjdFwiIG9uQ2xpY2s9e3NpZ25PdXR9PteU16rXoNeq16c8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSh0b2dnbGVNZW51VmlzaWJpbGl0eSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1mb3Itc21hbGwtb25seSBmbG9hdC1sZWZ0XCIga2V5PVwiYWRtaW4tbWVudS1pY29uXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzbWFsbC1tZW51IGJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVWaXNpYmlsaXR5fT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KGN1cnJlbnRQYWdlSWQsIG5hdmlnYXRlVG8sIGlzQWRtaW4sIGlzTWVudVZpc2libGUsIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZXNrdG9wTWVudUl0ZW0ocGFnZUlkKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBhY3RpdmU6IGN1cnJlbnRQYWdlSWQgPT09IHBhZ2VJZCxcbiAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNtYWxsOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2l0ZW1DbGFzc2VzfSBvbkNsaWNrPXtuYXZpZ2F0ZVRvLmJpbmQodGhpcywgcGFnZUlkKX0ga2V5PXsncGFnZS0nICsgcGFnZUlkfT5cbiAgICAgICAgICAgICAgICB7IFRyYW5zbGF0aW9ucy5ST1VUSU5HLlBBR0VTW3BhZ2VJZF0gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vYmlsZU1lbnVJdGVtKHBhZ2VJZCkge1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgYWN0aXZlOiBjdXJyZW50UGFnZUlkID09PSBwYWdlSWQsXG4gICAgICAgICAgICBidXR0b246IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25Nb2JpbGVNZW51Q2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRlVG8ocGFnZUlkKTtcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXRlbUNsYXNzZXN9IG9uQ2xpY2s9e29uTW9iaWxlTWVudUNsaWNrZWR9IGtleT17J3BhZ2UtJyArIHBhZ2VJZH0+XG4gICAgICAgICAgICAgICAgeyBUcmFuc2xhdGlvbnMuUk9VVElORy5QQUdFU1twYWdlSWRdIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZXNrdG9wTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBidXR0b24tZ3JvdXAgaGlkZS1mb3Itc21hbGwtb25seVwiIGtleT1cImFkbWluLW1lbnVcIj5cbiAgICAgICAgICAgICAgICB7IF8ubWFwKG1lbnVQYWdlc0lkcywgY3JlYXRlRGVza3RvcE1lbnVJdGVtKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2JpbGVNZW51KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IGJ1dHRvbi1ncm91cCBzdGFja2VkLWZvci1zbWFsbCBzaG93LWZvci1zbWFsbC1vbmx5XCIga2V5PVwiYWRtaW4tbWVudS1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICB7IF8ubWFwKG1lbnVQYWdlc0lkcywgY3JlYXRlTW9iaWxlTWVudUl0ZW0pIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTcgc21hbGwtMTIgY29sdW1uIHZlcnRpY2FsIGNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgeyBpc0FkbWluID8gY3JlYXRlRGVza3RvcE1lbnUoKSA6IG51bGwgfVxuICAgICAgICAgICAgeyBpc0FkbWluICYmIGlzTWVudVZpc2libGUgPyBjcmVhdGVNb2JpbGVNZW51KCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTWVudVZpc2libGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51VmlzaWJpbGl0eSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc01lbnVWaXNpYmxlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhciByb3cgc21hbGwtY29sbGFwc2UgaGlkZS1mb3ItcHJpbnRcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUhlYWRlcih0aGlzLnByb3BzLnVpZCwgdGhpcy5wcm9wcy5jdXJyZW50VXNlciwgdGhpcy5wcm9wcy5waG90b1VSTCwgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvLCB0aGlzLnByb3BzLnNpZ25PdXQpIH1cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuaXNBZG1pbiA/IGNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSh0aGlzLnRvZ2dsZU1lbnVWaXNpYmlsaXR5LmJpbmQodGhpcykpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVNZW51KHRoaXMucHJvcHMuY3VycmVudFBhZ2VJZCwgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvLCB0aGlzLnByb3BzLmlzQWRtaW4sIHRoaXMuc3RhdGUuaXNNZW51VmlzaWJsZSwgdGhpcy50b2dnbGVNZW51VmlzaWJpbGl0eS5iaW5kKHRoaXMpKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRvcEJhci5wcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGhvdG9VUkw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNBZG1pbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY3VycmVudFBhZ2VJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlVG86IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHNpZ25PdXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVG9wQmFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90b3BCYXIuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi90b3BCYXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi90b3BCYXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvcEJhci5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvcC1iYXIge1xcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcXG4gIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAudG9wLWJhciBzcGFuIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAudG9wLWJhciAudXNlci1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XFxuICAudG9wLWJhciAuc21hbGwtbWVudSB7XFxuICAgIGJhY2tncm91bmQ6ICNENTAwMDA7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG4gIC50b3AtYmFyIC5tZW51IHtcXG4gICAgbWFyZ2luLXRvcDogMC42cmVtOyB9XFxuICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24ge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cXG4gICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uLnNtYWxsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxcbiAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b246aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNEMzJGMkY7IH1cXG4gICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uLmFjdGl2ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDMyRjJGO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24uYWN0aXZlOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gIC50b3AtYmFyIC5hdmF0YXIge1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAudG9wLWJhciAuZGlzY29ubmVjdCB7XFxuICAgIGNvbG9yOiAjRjQ0MzM2OyB9XFxuICAgIC50b3AtYmFyIC5kaXNjb25uZWN0OmhvdmVyIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgYXV0aEFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJyk7XG5jb25zdCBlcnJvckFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucycpO1xuXG5jb25zdCBMb2dvID0gcmVxdWlyZSgnLi9sb2dvJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9hdXRoUGFnZS5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yTXNnOiBzdGF0ZS5lcnJvck1zZ1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luV2l0aEZhY2Vib29rOiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dpbldpdGhGYWNlYm9vaygpKSxcbiAgICAgICAgbG9naW5XaXRoR29vZ2xlOiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dpbldpdGhHb29nbGUoKSksXG4gICAgICAgIGxvZ2luV2l0aEVtYWlsOiAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkpLFxuICAgICAgICBzaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkOiAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKSksXG4gICAgICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWw6IGVtYWlsID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpKSxcbiAgICAgICAgcmVwb3J0RXJyb3I6IChtZXNzYWdlKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IobWVzc2FnZSkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNMb2dpbk1vZGUoYXV0aE1vZGUpIHtcbiAgICByZXR1cm4gYXV0aE1vZGUgPT09ICdsb2dpbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnaXN0ZXJNb2RlKGF1dGhNb2RlKSB7XG4gICAgcmV0dXJuIGF1dGhNb2RlID09PSAncmVnaXN0ZXInO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1WYWxpZChzdGF0ZSwgYXV0aE1vZGUpIHtcbiAgICBzd2l0Y2ggKGF1dGhNb2RlKSB7XG4gICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICAgIHJldHVybiAhXy5pc0VtcHR5KHN0YXRlLmVtYWlsKSAmJiAhXy5pc0VtcHR5KHN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgY2FzZSAncmVnaXN0ZXInOlxuICAgICAgICAgICAgcmV0dXJuICFfLmlzRW1wdHkoc3RhdGUuZW1haWwpICYmICFfLmlzRW1wdHkoc3RhdGUucGFzc3dvcmQpICYgIV8uaXNFbXB0eShzdGF0ZS5wYXNzd29yZEFnYWluKTtcbiAgICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICAgICAgcmV0dXJuICFfLmlzRW1wdHkoc3RhdGUuZW1haWwpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9nbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS1jZW50ZXJlZCBsb2dvXCI+XG4gICAgICAgICAgICA8TG9nbyB3aWR0aD17MTIwfSBoZWlnaHQ9ezEyMH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU29jaWFsQnV0dG9uc1NlY3Rpb24obG9naW5XaXRoRmFjZWJvb2ssIGxvZ2luV2l0aEdvb2dsZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luV2l0aEZhY2Vib29rfSBjbGFzc05hbWU9J2ZhY2Vib29rIGJ1dHRvbiBzcGxpdCc+XG4gICAgICAgICAgICAgICAgPHNwYW4+RmFjZWJvb2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1mYWNlYm9vay1vZmZpY2lhbCcgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luV2l0aEdvb2dsZX0gY2xhc3NOYW1lPSdnb29nbGUgYnV0dG9uIHNwbGl0Jz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Hb29nbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1nb29nbGUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9J2hyJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJvclNlY3Rpb24obWVzc2FnZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1tc2cnIGtleT0naG9tZVBhZ2UtZXJyb3ItbWVzc2FnZSc+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Vycm9yLW1zZy10eHQnPnttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5wdXQodHlwZSwgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCBwbGFjZWhvbGRlcikge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT17bmFtZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldEJ1dHRvbkxhYmVsKGF1dGhNb2RlKSB7XG4gICAgc3dpdGNoIChhdXRoTW9kZSkge1xuICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5TVUJNSVRfQlROLkxPR0lOO1xuICAgICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5TVUJNSVRfQlROLlJFR0lTVEVSO1xuICAgICAgICBjYXNlICdmb3Jnb3RQYXNzd29yZCc6XG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5TVUJNSVRfQlROLkZPUkdPVF9QQVNTV09SRDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1Ym1pdEJ1dHRvbihvblN1Ym1pdCwgZGlzYWJsZWQsIGF1dGhNb2RlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiYnV0dG9uIHNwbGl0IHN1Y2Nlc3NcIiBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAgPHNwYW4+e2dldEJ1dHRvbkxhYmVsKGF1dGhNb2RlKX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtzU2VjdGlvbihhdXRoTW9kZSwgbmF2VG9Mb2dpbiwgbmF2VG9SZWdpc3RlciwgbmF2VG9Gb3Jnb3RQYXNzd29yZCkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9naW5TY3JlZW5MaW5rcygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gc21hbGwtNiByZWQtbGluayc+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e25hdlRvUmVnaXN0ZXJ9PntUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLkxJTktTLkdPX1RPX1JFR0lTVEVSfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTYgcmVkLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtuYXZUb0ZvcmdvdFBhc3N3b3JkfT57VHJhbnNsYXRpb25zLkFVVEhfUEFHRS5MSU5LUy5HT19UT19GT1JHT1RfUEFTU1dPUkR9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTk9OTG9naW5TY3JlZW5MaW5rcygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdyZWQtbGluaycgb25DbGljaz17bmF2VG9Mb2dpbn0+e1RyYW5zbGF0aW9ucy5BVVRIX1BBR0UuTElOS1MuR09fVE9fTE9HSU59PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgaXNMb2dpbk1vZGUoYXV0aE1vZGUpID8gY3JlYXRlTG9naW5TY3JlZW5MaW5rcygpIDogY3JlYXRlTk9OTG9naW5TY3JlZW5MaW5rcygpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgQXV0aFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYXV0aE1vZGU6ICdsb2dpbicsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICBwYXNzd29yZEFnYWluOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfTtcblxuICAgIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgaXNGb3JtVmFsaWQodGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLmF1dGhNb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dpbldpdGhFbWFpbCh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgICAgICAgICBpZiAoXy5pc0VxdWFsKHRoaXMuc3RhdGUucGFzc3dvcmQsIHRoaXMuc3RhdGUucGFzc3dvcmRBZ2FpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVwb3J0RXJyb3IoVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguTk9UX1NBTUVfUEFTU1dPUkQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvcmdvdFBhc3N3b3JkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRQYXNzd29yZFJlc2V0RW1haWwodGhpcy5zdGF0ZS5lbWFpbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkF1dGhNb2RlQ2hhbmdlKCdsb2dpbicpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25BdXRoTW9kZUNoYW5nZSA9IGF1dGhNb2RlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRoTW9kZSB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjcmVhdGVOYXZGdW5jID0gYXV0aE1vZGUgPT4gdGhpcy5vbkF1dGhNb2RlQ2hhbmdlLmJpbmQodGhpcywgYXV0aE1vZGUpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTYgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCBhdXRoLWZvcm0tY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUxvZ28oKSB9XG5cbiAgICAgICAgICAgICAgICB7IGlzTG9naW5Nb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHx8IGlzUmVnaXN0ZXJNb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpID8gY3JlYXRlU29jaWFsQnV0dG9uc1NlY3Rpb24odGhpcy5wcm9wcy5sb2dpbldpdGhGYWNlYm9vaywgdGhpcy5wcm9wcy5sb2dpbldpdGhHb29nbGUpIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZXJyb3JNc2cgPyBjcmVhdGVFcnJvclNlY3Rpb24odGhpcy5wcm9wcy5lcnJvck1zZykgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgIDxkaXYgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259IGNsYXNzTmFtZT0nYXV0aC1mb3JtJz5cblxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZUlucHV0KCdlbWFpbCcsIHRoaXMuc3RhdGUuZW1haWwsIHRoaXMub25DaGFuZ2UsICdlbWFpbCcsVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5GSUVMRFMuRU1BSUwpIH1cblxuICAgICAgICAgICAgICAgICAgICB7IGlzTG9naW5Nb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHx8IGlzUmVnaXN0ZXJNb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpID8gY3JlYXRlSW5wdXQoJ3Bhc3N3b3JkJywgdGhpcy5zdGF0ZS5wYXNzd29yZCwgdGhpcy5vbkNoYW5nZSwgJ3Bhc3N3b3JkJyxUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLkZJRUxEUy5QQVNTV09SRCkgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgICAgICB7IGlzUmVnaXN0ZXJNb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpID8gY3JlYXRlSW5wdXQoJ3Bhc3N3b3JkJywgdGhpcy5zdGF0ZS5wYXNzd29yZEFnYWluLCB0aGlzLm9uQ2hhbmdlLCAncGFzc3dvcmRBZ2FpbicsIFRyYW5zbGF0aW9ucy5BVVRIX1BBR0UuRklFTERTLlBBU1NXT1JEX0FHQUlOKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlU3VibWl0QnV0dG9uKHRoaXMub25TdWJtaXQsICFpc0Zvcm1WYWxpZCh0aGlzLnN0YXRlLCB0aGlzLnN0YXRlLmF1dGhNb2RlKSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSkgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlTGlua3NTZWN0aW9uKHRoaXMuc3RhdGUuYXV0aE1vZGUsIGNyZWF0ZU5hdkZ1bmMoJ2xvZ2luJyksIGNyZWF0ZU5hdkZ1bmMoJ3JlZ2lzdGVyJyksIGNyZWF0ZU5hdkZ1bmMoJ2ZvcmdvdFBhc3N3b3JkJykpIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BdXRoUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgbG9naW5XaXRoRmFjZWJvb2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbG9naW5XaXRoR29vZ2xlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvZ2luV2l0aEVtYWlsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZXBvcnRFcnJvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlcnJvck1zZzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEF1dGhQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXV0aFBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hdXRoLWZvcm0tY29udGFpbmVyIC5sb2dvIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDM1cHg7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDE2MHB4OyB9XFxuXFxuLmF1dGgtZm9ybS1jb250YWluZXIgLmF1dGgtZm9ybSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYXV0aC1mb3JtLWNvbnRhaW5lciAuaHIge1xcbiAgbWFyZ2luOiAwLjdlbSBhdXRvICFpbXBvcnRhbnQ7IH1cXG5cXG4uYXV0aC1mb3JtLWNvbnRhaW5lciAucmVkLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2F1dGhQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCBib29raW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMnKTtcbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuY29uc3QgRXZlbnRJdGVtID0gcmVxdWlyZSgnLi9ldmVudEl0ZW0nKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2hvbWVQYWdlLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgdWlkOiBzdGF0ZS5hdXRoRGF0YS51aWQsXG4gICAgZ2FtZXM6IHN0YXRlLmV2ZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZpZ2F0ZVRvVXBkYXRlQm9va2luZzogKHVpZCwgZ2FtZUlkKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVQREFURV9CT09LSU5HLCB7IHVpZCwgZ2FtZUlkIH0pKSxcbiAgICBjYW5jZWxCb29raW5nOiAodWlkLCBnYW1lSWQpID0+IGRpc3BhdGNoKGJvb2tpbmdBY3Rpb25zLmJvb2tpbmdzQ2FuY2VsZWQodWlkLCBnYW1lSWQpKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFdmVudERhdGUoZ2FtZSkge1xuICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQoZ2FtZS55ZWFyLCAxMCksIHBhcnNlSW50KGdhbWUubW9udGgsIDEwKSAtIDEsIHBhcnNlSW50KGdhbWUuZGF5KSwgMTApO1xufVxuXG5mdW5jdGlvbiBpc0Z1dHVyZUV2ZW50KGdhbWUpIHtcbiAgY29uc3QgZXZlbnREYXRlID0gcGFyc2VFdmVudERhdGUoZ2FtZSk7XG4gIHJldHVybiBldmVudERhdGUgPiBEYXRlLm5vdygpO1xufVxuXG5mdW5jdGlvbiBnZXRDbG9zZWRHYW1lc0FycihnYW1lcykge1xuICByZXR1cm4gXy5jaGFpbihnYW1lcylcbiAgICAub21pdEJ5KGdhbWUgPT4ge1xuICAgICAgcmV0dXJuIGdhbWUuc3RhdHVzICE9PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEIHx8ICFpc0Z1dHVyZUV2ZW50KGdhbWUpO1xuICAgIH0pXG4gICAgLm1hcCgoZ2FtZSwgZ2FtZUlkKSA9PiAoe1xuICAgICAgZ2FtZSxcbiAgICAgIGdhbWVJZFxuICAgIH0pKVxuICAgIC5zb3J0QnkoZ2FtZURhdGEgPT4gcGFyc2VFdmVudERhdGUoZ2FtZURhdGEuZ2FtZSkpXG4gICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGdldE9wZW5HYW1lc0FycihnYW1lcykge1xuICAgIHJldHVybiBfLmNoYWluKGdhbWVzKVxuICAgICAgICAub21pdEJ5KGdhbWUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdhbWUuc3RhdHVzID09PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKChnYW1lLCBnYW1lSWQpID0+ICh7XG4gICAgICAgICAgICBnYW1lLFxuICAgICAgICAgICAgZ2FtZUlkXG4gICAgICAgIH0pKVxuICAgICAgICAuc29ydEJ5KGdhbWVEYXRhID0+IHBhcnNlRXZlbnREYXRlKGdhbWVEYXRhLmdhbWUpKVxuICAgICAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9PcGVuR2FtZXNNZXNzYWdlU2VjdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbm8tYm9va2luZ3MgbW9yZS1zcGFjZSc+XG4gICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkhPTUVfUEFHRS5OT19PUEVOX0dBTUVTfTwvc3Bhbj5cbiAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYnVzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZXNMaXN0cyhvcGVuR2FtZXNBcnIsIGNsb3NlZEdhbWVzQXJyLCBvbkJvb2tpbmcsIG9uQ2FuY2VsQm9va2luZykge1xuXG4gIGZ1bmN0aW9uIGJpbmRPbkdhbWVJdGVtQ2xpY2soZm4sIGdhbWVJZCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm4oZ2FtZUlkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPcGVuR2FtZXNMaXN0KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudHMtbGlzdCBvcGVuLWV2ZW50cyc+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT0naGlkZS1mb3Itc21hbGwtb25seSc+e1RyYW5zbGF0aW9ucy5IT01FX1BBR0UuT1BFTl9HQU1FU308L2g2PlxuICAgICAgICAgICAgeyBfLm1hcChvcGVuR2FtZXNBcnIsIGdhbWVEYXRhID0+IDxFdmVudEl0ZW0ga2V5PXsnb3Blbi1nYW1lLScgKyBnYW1lRGF0YS5nYW1lSWR9IGV2ZW50SWQ9e2dhbWVEYXRhLmdhbWVJZH0gb25Cb29raW5nPXtiaW5kT25HYW1lSXRlbUNsaWNrKG9uQm9va2luZywgZ2FtZURhdGEuZ2FtZUlkKX0gb25DYW5jZWxCb29raW5nPXtiaW5kT25HYW1lSXRlbUNsaWNrKG9uQ2FuY2VsQm9va2luZywgZ2FtZURhdGEuZ2FtZUlkKX0gLz4pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNsb3NlZEdhbWVzTGlzdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRzLWxpc3QgY2xvc2VkLWV2ZW50cyBoaWRlLWZvci1zbWFsbC1vbmx5Jz5cbiAgICAgICAgICA8aDY+e1RyYW5zbGF0aW9ucy5IT01FX1BBR0UuQ0xPU0VEX0dBTUVTfTwvaDY+XG4gICAgICAgICAgICB7IF8ubWFwKGNsb3NlZEdhbWVzQXJyLCBnYW1lRGF0YSA9PiA8RXZlbnRJdGVtIGtleT17J2Nsb3NlZC1nYW1lLScgKyBnYW1lRGF0YS5nYW1lSWR9IGV2ZW50SWQ9e2dhbWVEYXRhLmdhbWVJZH0gLz4pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICB7IF8uaXNFbXB0eShvcGVuR2FtZXNBcnIpID8gbnVsbCA6IGNyZWF0ZU9wZW5HYW1lc0xpc3QoKSB9XG4gICAgICAgIHsgXy5pc0VtcHR5KGNsb3NlZEdhbWVzQXJyKSA/IG51bGwgOiBjcmVhdGVDbG9zZWRHYW1lc0xpc3QoKSB9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBvbkJvb2tpbmcgPSBnYW1lSWQgPT4ge1xuICAgIHRoaXMucHJvcHMubmF2aWdhdGVUb1VwZGF0ZUJvb2tpbmcodGhpcy5wcm9wcy51aWQsIGdhbWVJZCk7XG4gIH07XG5cbiAgb25DYW5jZWxCb29raW5nID0gZ2FtZUlkID0+IHtcbiAgICB0aGlzLnByb3BzLmNhbmNlbEJvb2tpbmcodGhpcy5wcm9wcy51aWQsIGdhbWVJZCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG9wZW5HYW1lc0FyciA9IGdldE9wZW5HYW1lc0Fycih0aGlzLnByb3BzLmdhbWVzKTtcbiAgICBjb25zdCBjbG9zZWRHYW1lc0FyciA9IGdldENsb3NlZEdhbWVzQXJyKHRoaXMucHJvcHMuZ2FtZXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2l0ZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXBhZ2Ugc21hbGwtY2VudGVyZWQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudHMtY29udGFpbmVyJyBrZXk9J2V2ZW50cy1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2ZW50cycga2V5PSdldmVudHMnPlxuICAgICAgICAgICAgICB7IF8uaXNFbXB0eShvcGVuR2FtZXNBcnIpID8gY3JlYXRlTm9PcGVuR2FtZXNNZXNzYWdlU2VjdGlvbigpIDogbnVsbCB9XG4gICAgICAgICAgICAgIHsgY3JlYXRlR2FtZXNMaXN0cyhvcGVuR2FtZXNBcnIsIGNsb3NlZEdhbWVzQXJyLCB0aGlzLm9uQm9va2luZywgdGhpcy5vbkNhbmNlbEJvb2tpbmcpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xuICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZ2FtZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbmF2aWdhdGVUb1VwZGF0ZUJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNhbmNlbEJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lUGFnZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS5qc3giLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2V2ZW50SXRlbS5zY3NzJyk7XG5cbmZ1bmN0aW9uIGlzQm9va2luZ0VuYWJsZWQoZXZlbnQsIHVzZXIpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnN0YXR1cykge1xuICAgICAgICBjYXNlIENvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9BTEw6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUzoge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXIuc2Vhc29uVGlja2V0cyA+IDBcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcbiAgICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuICAgIGNvbnN0IGV2ZW50ID0gc3RhdGUuZXZlbnRzW293blByb3BzLmV2ZW50SWRdO1xuICAgIGNvbnN0IGJvb2tpbmdzID0gc3RhdGUuYm9va2luZ3M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBob21lVGVhbTogQ29uc3RhbnRzLlRFQU1TLkhBUE9FTF9KRVJVU0FMRU0sXG4gICAgICAgIGF3YXlUZWFtOiBDb25zdGFudHMuVEVBTVNbZXZlbnQudHlwZUlkXSxcbiAgICAgICAgc3RhdHVzOiBldmVudC5zdGF0dXMsXG4gICAgICAgIGRhdGU6IGV2ZW50LmRheSArICcvJyArIGV2ZW50Lm1vbnRoICsgJy8nICsgZXZlbnQueWVhcixcbiAgICAgICAgdGltZTogZXZlbnQuaG91ciArICc6JyArIGV2ZW50Lm1pbnV0ZSxcbiAgICAgICAgaXNCb29raW5nQWxsb3dlZDogaXNCb29raW5nRW5hYmxlZChldmVudCwgdXNlcnNbYXV0aERhdGEudWlkXSksXG4gICAgICAgIGlzQm9va2VkOiBfLmhhc0luKGJvb2tpbmdzLCBbYXV0aERhdGEudWlkLCBvd25Qcm9wcy5ldmVudElkXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlYW1Mb2dvcyhob21lLCBhd2F5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzLWltYWdlcyBtZWRpdW0tNCBzbWFsbC0xMiB0ZXh0LWNlbnRlciBtZWRpdW0tdGV4dC1yaWdodCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIHNtYWxsIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBzcmM9e2hvbWUubG9nb30vPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgaGlkZS1mb3Itc21hbGwtb25seVwiPntob21lLmxhYmVsfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGUtZm9yLXNtYWxsLW9ubHkgc2VwYXJhdG9yXCI+IC0gPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBzbWFsbCBoaWRlLWZvci1zbWFsbC1vbmx5XCIgc3JjPXthd2F5LmxvZ299Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IGhpZGUtZm9yLXNtYWxsLW9ubHlcIj57YXdheS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHMtbmFtZXMgc2hvdy1mb3Itc21hbGwtb25seSB0ZXh0LWNlbnRlciByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgc21hbGwtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIGJpZ1wiIHNyYz17aG9tZS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgc21hbGxcIj57aG9tZS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHNtYWxsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBiaWdcIiBzcmM9e2F3YXkubG9nb30vPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IHNtYWxsXCI+e2F3YXkubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50VGltZUFuZERhdGUoZGF0ZSwgdGltZSwgaXNPcGVuRm9yQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIGhpZGUtZm9yLXNtYWxsLW9ubHlcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVsbHlCb29rZWRMYWJlbCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBoaWRlLWZvci1zbWFsbC1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3RhdHVzXCI+e1RyYW5zbGF0aW9ucy5HQU1FLlNUQVRVU1tDb25zdGFudHMuR0FNRS5TVEFUVVMuRlVMTFlfQk9PS0VEXX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdGF0dXNcIj57VHJhbnNsYXRpb25zLkdBTUUuU1RBVFVTW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5GVUxMWV9CT09LRURdfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQnV0dG9uKGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcpIHtcbiAgICBjb25zdCBib29rQnV0dG9uID0gKFxuICAgICAgICA8c3BhbiBrZXk9XCJib29rLWJ0blwiPlxuICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FX0lURU0uQk9PS308L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1idXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgY29uc3QgZWRpdEJvb2tpbmdCdXR0b24gPSAoXG4gICAgICAgIDxzcGFuIGtleT1cImVkaXQtYnRuXCI+XG4gICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVfSVRFTS5FRElUX0JPT0tJTkd9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYnVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzIHNtYWxsXCIga2V5PVwicmVnaXN0ZXItYnRuXCIgb25DbGljaz17aXNCb29raW5nQWxsb3dlZCA/IG9uQm9va2luZyA6IF8ubm9vcH0gZGlzYWJsZWQ9eyFpc0Jvb2tpbmdBbGxvd2VkfT5cbiAgICAgICAgICAgIHsgaXNCb29rZWQgPyBlZGl0Qm9va2luZ0J1dHRvbiA6IGJvb2tCdXR0b24gfVxuICAgICAgICA8L2E+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9va2luZ0NhbmNlbGxhdGlvbkJ1dHRvbihvbkNhbmNlbEJvb2tpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gc21hbGwgYWxlcnRcIiBrZXk9XCJyZW1vdmUtYnRuXCIgb25DbGljaz17b25DYW5jZWxCb29raW5nfT5cbiAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuR0FNRV9JVEVNLkNBTkNFTF9CT09LSU5HfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L2E+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uc0J1dHRvbnMoaXNPcGVuRm9yQm9va2luZywgaXNCb29raW5nQWxsb3dlZCwgaXNCb29rZWQsIG9uQm9va2luZywgb25DYW5jZWxCb29raW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9ucyBtZWRpdW0tNCBzbWFsbC0xMiB0ZXh0LWNlbnRlciBtZWRpdW0tdGV4dC1sZWZ0IGNvbHVtblwiPlxuICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nID8gY3JlYXRlQm9va2luZ0J1dHRvbihpc0Jvb2tpbmdBbGxvd2VkLCBpc0Jvb2tlZCwgb25Cb29raW5nKSA6IG51bGwgfVxuICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nICYmIGlzQm9va2VkID8gY3JlYXRlQm9va2luZ0NhbmNlbGxhdGlvbkJ1dHRvbihvbkNhbmNlbEJvb2tpbmcpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEV2ZW50SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpc09wZW5Gb3JCb29raW5nID0gdGhpcy5wcm9wcy5zdGF0dXMgIT09IENvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRUQ7XG4gICAgICAgIGNvbnN0IGlzRnVsbHlCb29rZWQgPSB0aGlzLnByb3BzLnN0YXR1cyA9PT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkZVTExZX0JPT0tFRDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaXRlbSByb3cgY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZVRlYW1Mb2dvcyh0aGlzLnByb3BzLmhvbWVUZWFtLCB0aGlzLnByb3BzLmF3YXlUZWFtKSB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVFdmVudFRpbWVBbmREYXRlKHRoaXMucHJvcHMuZGF0ZSwgdGhpcy5wcm9wcy50aW1lLCBpc09wZW5Gb3JCb29raW5nICl9XG4gICAgICAgICAgICAgICAgeyBpc0Z1bGx5Qm9va2VkID8gY3JlYXRlRnVsbHlCb29rZWRMYWJlbCgpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVBY3Rpb25zQnV0dG9ucyhpc09wZW5Gb3JCb29raW5nLCB0aGlzLnByb3BzLmlzQm9va2luZ0FsbG93ZWQsIHRoaXMucHJvcHMuaXNCb29rZWQsIHRoaXMucHJvcHMub25Cb29raW5nLCB0aGlzLnByb3BzLm9uQ2FuY2VsQm9va2luZykgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5FdmVudEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGhvbWVUZWFtOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbG9nbzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgYXdheVRlYW06IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsb2dvOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhdHVzOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzQm9va2luZ0FsbG93ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGlzQm9va2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2FuY2VsQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRXZlbnRJdGVtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEl0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEl0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50LWl0ZW0ge1xcbiAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgLmV2ZW50LWl0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmdyb3Vwcy1pbWFnZXMgLnNlcGFyYXRvciB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWltYWdlLmJpZyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICB3aWR0aDogOTBweDtcXG4gICAgICBoZWlnaHQ6IDkwcHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWltYWdlLnNtYWxsIHtcXG4gICAgICBtYXJnaW46IDAgNXB4O1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDBweDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmdyb3Vwcy1uYW1lcyB7XFxuICAgIHBhZGRpbmc6IDAgNGVtOyB9XFxuICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mby5jb2xvcmVkIHtcXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWluZm8gLmV2ZW50LXN0YXR1cyB7XFxuICAgICAgY29sb3I6ICNEMzJGMkY7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWluZm8gc3BhbiB7XFxuICAgICAgbWFyZ2luOiAwIDE1cHg7IH1cXG4gIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNXB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uLnNtYWxsIHtcXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgICAgbWFyZ2luOiAwIDVweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuYWN0aW9uLWJ1dHRvbnMgLmJ1dHRvbiBpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZVBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZVBhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2hvbWVQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhvbWUtcGFnZSAuZXZlbnRzIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xcbiAgICAuaG9tZS1wYWdlIC5ldmVudHMge1xcbiAgICAgIG1hcmdpbi10b3A6IDBweDsgfSB9XFxuXFxuLmhvbWUtcGFnZSAub3Blbi1ldmVudHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxcblxcbi5ob21lLXBhZ2UgLmV2ZW50cy1saXN0IGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmhvbWUtcGFnZSAubm8tYm9va2luZ3Mge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNDI0MjQyOyB9XFxuICAuaG9tZS1wYWdlIC5uby1ib29raW5ncyBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLmhvbWUtcGFnZSAuZXZlbnQtaXRlbSB7XFxuICBwYWRkaW5nOiA1cHggMDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgIC5ob21lLXBhZ2UgLmV2ZW50LWl0ZW0ge1xcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAzMHB4IDA7IH0gfVxcbiAgLmhvbWUtcGFnZSAuZXZlbnQtaXRlbTpudGgtY2hpbGQoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFOyB9XFxuICAuaG9tZS1wYWdlIC5ldmVudC1pdGVtOm50aC1jaGlsZChvZGQpIHtcXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcblxuY29uc3QgTGlzdEl0ZW0gPSByZXF1aXJlKCcuL2xpc3RJdGVtJyk7XG5jb25zdCBQYWdlVGl0bGUgPSByZXF1aXJlKCcuL3BhZ2VUaXRsZScpO1xuXG5jb25zdCBGSUxURVJTID0ge1xuICAgIEFMTDogJ0FMTCcsXG4gICAgTUVNQkVSUzogJ01FTUJFUlMnLFxuICAgIFJFUVVFU1RTOiAnUkVRVUVTVFMnLFxuICAgIE5PTl9NRU1CRVJTOiAnTk9OX01FTUJFUlMnXG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgZmlsdGVyOiBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zLmZpbHRlciB8fCBGSUxURVJTLkFMTCxcbiAgICAgICAgICAgIHNlYXJjaDogc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcy5zZWFyY2ggfHwgJydcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcnM6IHN0YXRlLnVzZXJzXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmF2VG9FZGl0VXNlcjogdWlkID0+ICBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkVESVRfVVNFUl9JTkZPLCB7IHVpZCB9KSksXG4gICAgICAgIGNoYW5nZUZpbHRlcjogZmlsdGVyID0+ICBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5yZXBsYWNlKG51bGwsIHsgZmlsdGVyIH0pKSxcbiAgICAgICAgY2hhbmdlU2VhcmNoUXVlcnk6IF8uZGVib3VuY2Uoc2VhcmNoID0+ICBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5yZXBsYWNlKG51bGwsIHsgc2VhcmNoIH0pKSwgNTAwKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvdW50TWVtYmVycyh1c2Vycykge1xuICAgIHJldHVybiBfLmNoYWluKHVzZXJzKVxuICAgICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5NRU1CRVJTKVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdzZWFzb25UaWNrZXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGNvdW50UmVxdWVzdHModXNlcnMpIHtcbiAgICByZXR1cm4gXy5jaGFpbih1c2VycylcbiAgICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnMuUkVRVUVTVFMpXG4gICAgICAgIC5zaXplKClcbiAgICAgICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGNvdW50Tm9uTWVtYmVycyh1c2Vycykge1xuICAgIHJldHVybiBfLmNoYWluKHVzZXJzKVxuICAgICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5OT05fTUVNQkVSUylcbiAgICAgICAgLnNpemUoKVxuICAgICAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gY291bnRBY2NvcmRpbmdUb0ZpbHRlcnModXNlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBbRklMVEVSUy5BTExdOiBfLnNpemUodXNlcnMpLFxuICAgICAgICBbRklMVEVSUy5NRU1CRVJTXTogY291bnRNZW1iZXJzKHVzZXJzKSxcbiAgICAgICAgW0ZJTFRFUlMuUkVRVUVTVFNdOiBjb3VudFJlcXVlc3RzKHVzZXJzKSxcbiAgICAgICAgW0ZJTFRFUlMuTk9OX01FTUJFUlNdOiBjb3VudE5vbk1lbWJlcnModXNlcnMpLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJUaXRsZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlclN1YnRpdGxlcyh1c2VyKSB7XG4gICAgcmV0dXJuIFt1c2VyLnBob25lUHJlZml4ICsgJy0nICsgdXNlci5waG9uZU51bWJlciwgdXNlci5lbWFpbCwgJ9eb157XldeqINee16DXldeZ15nXnTogJyArICh1c2VyLnNlYXNvblRpY2tldHMgfHwgMCldO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VySW1hZ2UodXNlcikge1xuICAgIHJldHVybiB1c2VyLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjMvMTYzODA0LnN2Zyc7XG59XG5cbmNvbnN0IHBpY2tVc2Vyc0Z1bmN0aW9ucyA9IHtcbiAgICBBTEw6ICgpID0+IHRydWUsXG4gICAgTUVNQkVSUzogdXNlciA9PiB1c2VyLnNlYXNvblRpY2tldHMgPiAwLFxuICAgIE5PTl9NRU1CRVJTOiB1c2VyID0+ICF1c2VyLnNlYXNvblRpY2tldHMsXG4gICAgUkVRVUVTVFM6IHVzZXIgPT4gdXNlci5yZXF1ZXN0Rm9yTWVtYmVyc2hpcCxcbn07XG5cbmZ1bmN0aW9uIGdldFZpc2libGVVc2Vycyh1c2VycywgZmlsdGVyLCBzZWFyY2hRdWVyeSkge1xuICAgIHJldHVybiBfLmNoYWluKHVzZXJzKVxuICAgICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9uc1tmaWx0ZXJdKVxuICAgICAgICAucGlja0J5KHVzZXIgPT4gXy5zdGFydHNXaXRoKHVzZXIuZmlyc3ROYW1lLCBzZWFyY2hRdWVyeSkgfHwgXy5zdGFydHNXaXRoKHVzZXIubGFzdE5hbWUsIHNlYXJjaFF1ZXJ5KSwgdGhpcylcbiAgICAgICAgLm1hcCgodXNlciwgdWlkKSA9PiAoe3VzZXIsIHVpZH0pKVxuICAgICAgICAuc29ydEJ5KCd1c2VyLmZpcnN0TmFtZScpXG4gICAgICAgIC52YWx1ZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaWx0ZXIoc2VhcmNoUXVlcnksIGZpbHRlciwgaGFuZGxlRmlsdGVyQ2hhbmdlLCBoYW5kbGVTZWFyY2hRdWVyeUNoYW5nZSwgZmlsdGVyQ291bnRzKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGaWx0ZXJUYWJzKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBzbWFsbC0xMiBsYXJnZS04Jz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdtZW51IHNtYWxsLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IEZJTFRFUlMuQUxMfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcywgRklMVEVSUy5BTEwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLlVTRVJTX1BBR0UuRklMVEVSLlRBQlMuQUxMfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oeyBmaWx0ZXJDb3VudHNbRklMVEVSUy5BTExdIH0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IEZJTFRFUlMuTUVNQkVSU30pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUZpbHRlckNoYW5nZS5iaW5kKHRoaXMsIEZJTFRFUlMuTUVNQkVSUyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuVVNFUlNfUEFHRS5GSUxURVIuVEFCUy5NRU1CRVJTfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oeyBmaWx0ZXJDb3VudHNbRklMVEVSUy5NRU1CRVJTXSB9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogZmlsdGVyID09PSBGSUxURVJTLlJFUVVFU1RTfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcywgRklMVEVSUy5SRVFVRVNUUyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuVVNFUlNfUEFHRS5GSUxURVIuVEFCUy5SRVFVRVNUU308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHsgZmlsdGVyQ291bnRzW0ZJTFRFUlMuUkVRVUVTVFNdIH0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IEZJTFRFUlMuTk9OX01FTUJFUlN9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzLCBGSUxURVJTLk5PTl9NRU1CRVJTKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLkZJTFRFUi5UQUJTLk5PTl9NRU1CRVJTfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oeyBmaWx0ZXJDb3VudHNbRklMVEVSUy5OT05fTUVNQkVSU10gfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRleHRJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VhcmNoLWlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLkZJTFRFUi5TRUFSQ0h9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2VhcmNoLWljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1zZWFyY2gnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyaW5nIHJvdyBleHBhbmRlZCBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgeyBjcmVhdGVGaWx0ZXJUYWJzKCkgfVxuICAgICAgICAgICAgeyBjcmVhdGVUZXh0SW5wdXQoKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJzTGlzdCh1c2Vyc0Fyciwgb25Vc2VyQ2xpY2spIHtcblxuICAgIGNvbnN0IG9uSXRlbUNsaWNrID0gdWlkID0+IHtcbiAgICAgICAgb25Vc2VyQ2xpY2sodWlkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaXRlbXMgPSBfLm1hcCh1c2Vyc0FyciwgdXNlckRlZiA9PiB7XG4gICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICBrZXk9eyd1c2VyJyArIHVzZXJEZWYudWlkfVxuICAgICAgICAgICAgICAgdGl0bGU9e2dldFVzZXJUaXRsZSh1c2VyRGVmLnVzZXIpfVxuICAgICAgICAgICAgICAgc3VidGl0bGVzPXtnZXRVc2VyU3VidGl0bGVzKHVzZXJEZWYudXNlcil9XG4gICAgICAgICAgICAgICBvbkNsaWNrPXtvbkl0ZW1DbGljay5iaW5kKHRoaXMsIHVzZXJEZWYudWlkKX1cbiAgICAgICAgICAgICAgIGltYWdlU3JjPXtnZXRVc2VySW1hZ2UodXNlckRlZi51c2VyKX1cbiAgICAgICAgICAgLz5cbiAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgaXRlbXMgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb1VzZXJzTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmaWx0ZXItc3RhdHVzJz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZnJvd24tbycgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLlVTRVJTX1BBR0UuTk9fVVNFUlNfRk9VTkR9PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICk7XG59XG5cbmNsYXNzIFVzZXJzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IHRoaXMucHJvcHMucXVlcnkuc2VhcmNoXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5xdWVyeS5zZWFyY2ggIT09IHRoaXMuc3RhdGUuc2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoOiBuZXh0UHJvcHMucXVlcnkuc2VhcmNoIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2ggfSwgKCkgPT4gdGhpcy5wcm9wcy5jaGFuZ2VTZWFyY2hRdWVyeShzZWFyY2gpKTtcbiAgICB9O1xuXG4gICAgaGFuZGxlRmlsdGVyQ2hhbmdlID0gZmlsdGVyID0+IHtcbiAgICAgIHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKGZpbHRlcik7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdmlzaWJsZVVzZXJzQXJyID0gZ2V0VmlzaWJsZVVzZXJzKHRoaXMucHJvcHMudXNlcnMsIHRoaXMucHJvcHMucXVlcnkuZmlsdGVyLCB0aGlzLnN0YXRlLnNlYXJjaCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSc+XG5cbiAgICAgICAgICAgICAgICA8UGFnZVRpdGxlIHRpdGxlPXtUcmFuc2xhdGlvbnMuVVNFUlNfUEFHRS5USVRMRX0gLz5cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlRmlsdGVyKHRoaXMuc3RhdGUuc2VhcmNoLCB0aGlzLnByb3BzLnF1ZXJ5LmZpbHRlciwgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UsIHRoaXMuaGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2UsIGNvdW50QWNjb3JkaW5nVG9GaWx0ZXJzKHRoaXMucHJvcHMudXNlcnMpKSB9XG5cbiAgICAgICAgICAgICAgICB7IF8uaXNFbXB0eSh2aXNpYmxlVXNlcnNBcnIpID8gY3JlYXRlTm9Vc2Vyc01lc3NhZ2UoKSA6IGNyZWF0ZVVzZXJzTGlzdCh2aXNpYmxlVXNlcnNBcnIsIHRoaXMucHJvcHMubmF2VG9FZGl0VXNlcikgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Vc2Vyc1BhZ2UucHJvcFR5cGVzID0ge1xuICAgIHVzZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHF1ZXJ5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbmF2VG9FZGl0VXNlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGFuZ2VGaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2hhbmdlU2VhcmNoUXVlcnk6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2Vyc1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS5qc3giLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9saXN0SXRlbS5zY3NzJyk7XG5cbmNsYXNzIExpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbSBzbWFsbC0xMlwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsaXN0LWltYWdlXCIgc3JjPXt0aGlzLnByb3BzLmltYWdlU3JjfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXRpdGxlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGl0bGUgbGFyZ2UtdGV4dCBoaWRlLWZvci1wcmludFwiPnt0aGlzLnByb3BzLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAodGhpcy5wcm9wcy5zdWJ0aXRsZXMsIChzdWJ0aXRsZSwga2V5KSA9PiA8bGFiZWwga2V5PXsnc3VidGl0bGUtJyArIGtleX0gY2xhc3NOYW1lPVwic3VidGl0bGUgc21hbGwtMTIgc2hvdy1mb3Itc21hbGwtb25seVwiPntzdWJ0aXRsZX08L2xhYmVsPil9XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAodGhpcy5wcm9wcy5zdWJ0aXRsZXMsIChzdWJ0aXRsZSwga2V5KSA9PiA8bGFiZWwga2V5PXsnc3VidGl0bGUtbGFyZ2UtJyArIGtleX0gY2xhc3NOYW1lPVwic3VidGl0bGUgaW5saW5lIGhpZGUtZm9yLXNtYWxsLW9ubHlcIj57c3VidGl0bGV9PC9sYWJlbD4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3VidGl0bGVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgaW1hZ2VTcmM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdEl0ZW07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9saXN0SXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2xpc3RJdGVtLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9saXN0SXRlbS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4OyB9XFxuICAubGlzdC1pdGVtOmZpcnN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy10b3A6IDA7IH1cXG4gIC5saXN0LWl0ZW0gLmxpc3QtaW1hZ2Uge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7IH1cXG4gIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIHtcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAudGl0bGUubGFyZ2UtdGV4dCB7XFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44MHJlbTsgfVxcbiAgICAgIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIC5zdWJ0aXRsZS5pbmxpbmUsIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIC5zdWJ0aXRsZS5pbmxpbmUuc2hvdy1mb3ItcHJpbnQge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL3BhZ2VUaXRsZS5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIG5hdmlnYXRlQmFjazogKCkgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVCYWNrKCkpXG4gIH07XG59XG5cbmNsYXNzIFBhZ2VUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UtdGl0bGUnPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSd0aXRsZSc+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JhY2stYnRuJyBrZXk9J2JhY2stYnRuJyBvbkNsaWNrPXt0aGlzLnByb3BzLm5hdmlnYXRlQmFja30+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1hcnJvdy1sZWZ0JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBhZ2VUaXRsZS5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZUJhY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZVRpdGxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3BhZ2VUaXRsZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3BhZ2VUaXRsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3BhZ2VUaXRsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFnZVRpdGxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9wYWdlVGl0bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kOiAjRUY1MzUwO1xcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICNEMzJGMkY7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGhlaWdodDogMy4zZW07XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC5wYWdlLXRpdGxlIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmbGV4OiAxOyB9XFxuICAucGFnZS10aXRsZSAuYmFjay1idG4ge1xcbiAgICB3aWR0aDogMjBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvcGFnZVRpdGxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3Qgcm91dGluZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5cbmNvbnN0IFBhZ2VUaXRsZSA9IHJlcXVpcmUoJy4vcGFnZVRpdGxlJyk7XG5jb25zdCBMaXN0SXRlbSA9IHJlcXVpcmUoJy4vbGlzdEl0ZW0nKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2dhbWVzUGFnZS5zY3NzJyk7XG5cbmNvbnN0IFRBQlMgPSB7XG4gICAgQUxMOiAnYWxsJyxcbiAgICBPUEVOOiAnb3BlbicsXG4gICAgQ0xPU0VEOiAnY2xvc2VkJ1xufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2FtZXM6IHN0YXRlLmV2ZW50cyxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIGZpbHRlcjogc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcy5maWx0ZXIgfHwgVEFCUy5BTExcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVkaXRHYW1lOiBnYW1lSWQgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUk9VVElORy5QQUdFUy5VUERBVEVfR0FNRSwgeyBnYW1lSWQgfSkpLFxuICAgICAgICBjcmVhdGVHYW1lOiAoKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVQREFURV9HQU1FKSksXG4gICAgICAgIGNoYW5nZUZpbHRlcjogZmlsdGVyID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLnJlcGxhY2UobnVsbCwgeyBmaWx0ZXIgfSkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VmlzaWJsZUdhbWVzKGdhbWVzLCBmaWx0ZXIpIHtcbiAgICBzd2l0Y2ggKGZpbHRlcikge1xuICAgICAgICBjYXNlIFRBQlMuT1BFTjpcbiAgICAgICAgICAgIHJldHVybiBnZXRPcGVuR2FtZXMoZ2FtZXMpO1xuICAgICAgICBjYXNlIFRBQlMuQ0xPU0VEOlxuICAgICAgICAgICAgcmV0dXJuIGdldENsb3NlZEdhbWVzKGdhbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGdhbWVzO1xufVxuXG5mdW5jdGlvbiBnZXRPcGVuR2FtZXMoZ2FtZXMpIHtcbiAgICByZXR1cm4gXy5vbWl0QnkoZ2FtZXMsIGdhbWUgPT4gZ2FtZS5zdGF0dXMgPT09IENvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRUQpO1xufVxuXG5mdW5jdGlvbiBnZXRDbG9zZWRHYW1lcyhnYW1lcykge1xuICAgIHJldHVybiBfLnBpY2tCeShnYW1lcywgZ2FtZSA9PiBnYW1lLnN0YXR1cyA9PT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRCk7XG59XG5cbmZ1bmN0aW9uIGdldEdhbWVTdWJ0aXRsZXMoZ2FtZSkge1xuICAgIHJldHVybiBbXG4gICAgICAgICfXqteQ16jXmdeaOiAnICsgYCR7Z2FtZS5kYXl9LyR7Z2FtZS5tb250aH0vJHtnYW1lLnllYXJ9YCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWNvbmNhdFxuICAgICAgICAn16nXoteUOiAnICsgIGAke2dhbWUuaG91cn06JHtnYW1lLm1pbnV0ZX1gLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG4gICAgICAgIFRyYW5zbGF0aW9ucy5HQU1FLlNUQVRVU1tnYW1lLnN0YXR1c11cbiAgICBdO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJzKGdhbWVzLCBmaWx0ZXIsIG9uRmlsdGVyQ2hhbmdlKSB7XG4gICAgZnVuY3Rpb24gb25UYWJDbGljayhzZWxlY3RlZEZpbHRlcikge1xuICAgICAgICBvbkZpbHRlckNoYW5nZShzZWxlY3RlZEZpbHRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTEyIGxhcmdlLTYnPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J21lbnUnPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IFRBQlMuQUxMfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25UYWJDbGljay5iaW5kKHRoaXMsIFRBQlMuQUxMKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FU19QQUdFLlRBQlMuQUxMfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe18uc2l6ZShnYW1lcyl9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogZmlsdGVyID09PSBUQUJTLk9QRU59KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvblRhYkNsaWNrLmJpbmQodGhpcywgVEFCUy5PUEVOKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FU19QQUdFLlRBQlMuT1BFTn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtfLnNpemUoZ2V0T3BlbkdhbWVzKGdhbWVzKSl9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogZmlsdGVyID09PSBUQUJTLkNMT1NFRH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uVGFiQ2xpY2suYmluZCh0aGlzLCBUQUJTLkNMT1NFRCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuR0FNRVNfUEFHRS5UQUJTLkNMT1NFRH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtfLnNpemUoZ2V0Q2xvc2VkR2FtZXMoZ2FtZXMpKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9HYW1lc01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZmlsdGVyLXN0YXR1cyc+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWZyb3duLW8nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVTX1BBR0UuTk9fR0FNRVNfTEFCRUx9PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsdXNCdXR0b24ob25DcmVhdGVHYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbG9hdC1sZWZ0IGFkZC1idG4gYmlnIGhpZGUtZm9yLXNtYWxsLW9ubHknIG9uQ2xpY2s9e29uQ3JlYXRlR2FtZX0+KzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Zsb2F0LWxlZnQgYWRkLWJ0biBzbWFsbCBzaG93LWZvci1zbWFsbC1vbmx5JyBvbkNsaWNrPXtvbkNyZWF0ZUdhbWV9Pis8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgR2FtZXNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBvbkZpbHRlckNoYW5nZWQgPSBmaWx0ZXIgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZUZpbHRlcihmaWx0ZXIpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHZpc2libGVHYW1lcyA9IGdldFZpc2libGVHYW1lcyh0aGlzLnByb3BzLmdhbWVzLCB0aGlzLnByb3BzLnF1ZXJ5LmZpbHRlcik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSBnYW1lcy1wYWdlJz5cblxuICAgICAgICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e1RyYW5zbGF0aW9ucy5HQU1FU19QQUdFLlRJVExFfSAvPlxuXG4gICAgICAgICAgICAgICAgeyBjcmVhdGVUYWJzKHRoaXMucHJvcHMuZ2FtZXMsIHRoaXMucHJvcHMucXVlcnkuZmlsdGVyLCB0aGlzLm9uRmlsdGVyQ2hhbmdlZCkgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBfLm1hcCh2aXNpYmxlR2FtZXMsIChnYW1lLCBnYW1lSWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9eydnYW1lLScgKyBnYW1lSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e0NvbnN0YW50cy5URUFNU1tnYW1lLnR5cGVJZF0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VidGl0bGVzPXtnZXRHYW1lU3VidGl0bGVzKGdhbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtDb25zdGFudHMuVEVBTVNbZ2FtZS50eXBlSWRdLmxvZ28gfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEzOC8xMzg3NzYuc3ZnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmVkaXRHYW1lLmJpbmQodGhpcywgZ2FtZUlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgeyB2aXNpYmxlR2FtZXMubGVuZ3RoID09IDAgPyBjcmVhdGVOb0dhbWVzTWVzc2FnZSgpIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZVBsdXNCdXR0b24odGhpcy5wcm9wcy5jcmVhdGVHYW1lKSB9XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuR2FtZXNQYWdlLnByb3BUeXBlcyA9IHtcbiAgICBnYW1lczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNyZWF0ZUdhbWU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZWRpdEdhbWU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2hhbmdlRmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR2FtZXNQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9nYW1lc1BhZ2UuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9nYW1lc1BhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9nYW1lc1BhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2dhbWVzUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvZ2FtZXNQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVzLXBhZ2UgLmZpbHRlcmluZyB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9nYW1lc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcblxuY29uc3QgUGFnZVRpdGxlID0gcmVxdWlyZSgnLi9wYWdlVGl0bGUnKTtcbmNvbnN0IExpc3RJdGVtID0gcmVxdWlyZSgnLi9saXN0SXRlbScpO1xuXG5jb25zdCBUQUJTID0ge1xuICAgIFBJQ0tVUDogJ3BpY2tVcCcsXG4gICAgRFJPUE9GRjogJ2Ryb3BPZmYnXG59O1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvYm9va2luZ3NQYWdlLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmdzLFxuICAgICAgICBnYW1lczogc3RhdGUuZXZlbnRzLFxuICAgICAgICB1c2Vyczogc3RhdGUudXNlcnMsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBnYW1lSWQ6IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXMuZ2FtZUlkIHx8IF8uZmluZEtleShzdGF0ZS5ldmVudHMsIHtzdGF0dXM6IENvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTfSkgfHwgXy5maW5kS2V5KHN0YXRlLmV2ZW50cywge3N0YXR1czogQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX0FMTH0pIHx8ICBfLmZpbmRLZXkoc3RhdGUuZXZlbnRzLCB7c3RhdHVzOiBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEfSksXG4gICAgICAgICAgICBmaWx0ZXI6IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXMuZmlsdGVyIHx8IFRBQlMuUElDS1VQXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlZGl0Qm9va2luZzogKGdhbWVJZCwgdWlkKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVQREFURV9CT09LSU5HLCB7IGdhbWVJZCwgdWlkIH0pKSxcbiAgICAgICAgY2hhbmdlRmlsdGVyOiBmaWx0ZXIgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMucmVwbGFjZShudWxsLCB7IGZpbHRlciB9KSksXG4gICAgICAgIGNoYW5nZUdhbWVJZDogZ2FtZUlkID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLnJlcGxhY2UobnVsbCwgeyBnYW1lSWQgfSkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9va2luZ1RpdGxlKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBnZXRCb29raW5nUGhvbmUodXNlcikge1xuICAgIHJldHVybiB1c2VyLnBob25lUHJlZml4ICsgJy0nICsgdXNlci5waG9uZU51bWJlcjtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCB1c2VyKSB7XG4gICAgY29uc3Qgc3VidGl0bGVzID0gW107XG5cbiAgICBpZiAoYm9va2luZy5wYWlkU2VhdHMgPiAwKSB7XG4gICAgICAgIHN1YnRpdGxlcy5wdXNoKCfXnteg15XXmdeZ1506ICcgKyBib29raW5nLnBhaWRTZWF0cyk7XG4gICAgfVxuICAgIGlmIChib29raW5nLmV4dHJhU2VhdHMgPiAwKSB7XG4gICAgICAgIHN1YnRpdGxlcy5wdXNoKCfXl9eTINek16LXnteZOiAnICsgYm9va2luZy5leHRyYVNlYXRzKTtcbiAgICB9XG4gICAgaWYgKGJvb2tpbmcucGlja1VwKSB7XG4gICAgICAgIHN1YnRpdGxlcy5wdXNoKCfXlNec15XXmjogJyArIFRyYW5zbGF0aW9ucy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5kcm9wT2ZmKSB7XG4gICAgICAgIHN1YnRpdGxlcy5wdXNoKCfXl9eW15XXqDogJyArIFRyYW5zbGF0aW9ucy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdKTtcbiAgICB9XG5cbiAgICBpZiAodXNlcikge1xuICAgICAgICBzdWJ0aXRsZXMucHVzaCgn15jXnNezOiAnICsgZ2V0Qm9va2luZ1Bob25lKHVzZXIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VidGl0bGVzO1xufVxuXG5mdW5jdGlvbiBnZXRCb29raW5nSW1hZ2UodXNlcikge1xuICAgIHJldHVybiB1c2VyLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xODkvMTg5OTkxLnN2Zyc7XG59XG5cbmZ1bmN0aW9uIGdldFBpY2tVcE1hcChib29raW5ncykge1xuICAgIHJldHVybiBfLmNoYWluKGJvb2tpbmdzKVxuICAgICAgICAub21pdEJ5KGJvb2tpbmcgPT4gIShib29raW5nLnBpY2tVcCkpXG4gICAgICAgIC50cmFuc2Zvcm0oKGFjYywgYm9va2luZywgdWlkKSA9PiB7XG4gICAgICAgICAgICBhY2NbYm9va2luZy5waWNrVXBdW3VpZF0gPSBib29raW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIH0sIHsgdGx2OiB7fSwgbW9kaWluOiB7fSB9KVxuICAgICAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gZ2V0RHJvcE9mZk1hcChib29raW5ncykge1xuICAgIHJldHVybiBfLmNoYWluKGJvb2tpbmdzKVxuICAgICAgICAub21pdEJ5KGJvb2tpbmcgPT4gIShib29raW5nLmRyb3BPZmYpKVxuICAgICAgICAudHJhbnNmb3JtKChhY2MsIGJvb2tpbmcsIHVpZCkgPT4ge1xuICAgICAgICAgICAgYWNjW2Jvb2tpbmcuZHJvcE9mZl1bdWlkXSA9IGJvb2tpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgfSwgeyB0bHY6IHt9LCBtb2RpaW46IHt9IH0pXG4gICAgICAgIC52YWx1ZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRWaXNpYmxlQm9va2luZ3MoYm9va2luZ3MsIGdhbWVJZCkge1xuICAgIGNvbnN0IGJvb2tpbmdGb3JFdmVudE1hcCA9IF8uY2hhaW4oYm9va2luZ3MpXG4gICAgICAgIC5tYXBWYWx1ZXModXNlckJvb2tpbmdzID0+IHVzZXJCb29raW5nc1tnYW1lSWRdKVxuICAgICAgICAub21pdEJ5KF8uaXNVbmRlZmluZWQpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGlja1VwOiBnZXRQaWNrVXBNYXAoYm9va2luZ0ZvckV2ZW50TWFwKSxcbiAgICAgICAgZHJvcE9mZjogZ2V0RHJvcE9mZk1hcChib29raW5nRm9yRXZlbnRNYXApXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY291bnRQaWNrdXBzKHZpc2libGVCb29raW5ncykge1xuICAgIGNvbnN0IHRsdlBpY2tVcHNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCB0bHZQaWNrVXBzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAudGx2KVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5QaWNrVXBzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW4pXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluUGlja1Vwc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLm1vZGlpbilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgcmV0dXJuIHRsdlBpY2tVcHNQYWlkICsgdGx2UGlja1Vwc0V4dHJhICsgbW9kaWluUGlja1Vwc1BhaWQgKyBtb2RpaW5QaWNrVXBzRXh0cmE7XG59XG5cbmZ1bmN0aW9uIGNvdW50RHJvcE9mZnModmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgY29uc3QgdGx2RHJvcE9mZnNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHYpXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgdGx2RHJvcE9mZnNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2KVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5Ecm9wT2Zmc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5Ecm9wT2Zmc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW4pXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB0bHZEcm9wT2Zmc1BhaWQgKyB0bHZEcm9wT2Zmc0V4dHJhICsgbW9kaWluRHJvcE9mZnNQYWlkICsgbW9kaWluRHJvcE9mZnNFeHRyYTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFnZVRpdGxlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRlLWZvci1wcmludCc+XG4gICAgICAgICAgICA8UGFnZVRpdGxlIHRpdGxlPXtUcmFuc2xhdGlvbnMuQk9PS0lOR1NfUEFHRS5USVRMRX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmlsdGVyU2VjdGlvbihmaWx0ZXIsIGdhbWVJZCwgb25GaWx0ZXJDaGFuZ2UsIG9uR2FtZUlkQ2hhbmdlLCB2aXNpYmxlQm9va2luZ3MsIGdhbWVzKSB7XG5cbiAgICBmdW5jdGlvbiBvblRhYkNsaWNrKHRhYikge1xuICAgICAgICBvbkZpbHRlckNoYW5nZSh0YWIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICAgICAgb25HYW1lSWRDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlIGhpZGUtZm9yLXByaW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNic+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe2FjdGl2ZTogZmlsdGVyID09PSBUQUJTLlBJQ0tVUH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uVGFiQ2xpY2suYmluZCh0aGlzLCBUQUJTLlBJQ0tVUCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuQk9PS0lOR1NfUEFHRS5UQUJTLlBJQ0tVUH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtjb3VudFBpY2t1cHModmlzaWJsZUJvb2tpbmdzKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHthY3RpdmU6IGZpbHRlciA9PT0gVEFCUy5EUk9QT0ZGfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25UYWJDbGljay5iaW5kKHRoaXMsIFRBQlMuRFJPUE9GRil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuQk9PS0lOR1NfUEFHRS5UQUJTLkRST1BPRkZ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7Y291bnREcm9wT2Zmcyh2aXNpYmxlQm9va2luZ3MpfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBzbWFsbC0xMiBsYXJnZS02Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VhcmNoJz5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Z2FtZUlkfSBvbkNoYW5nZT17b25TZWxlY3RDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ubWFwKGdhbWVzLCAoZ2FtZSwgZ2FtZUlkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17J2dhbWUtJyArIGdhbWVJZH0gdmFsdWU9e2dhbWVJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2FtZS5kYXl9L3tnYW1lLm1vbnRofS97Z2FtZS55ZWFyfSAtIHtDb25zdGFudHMuVEVBTVNbZ2FtZS50eXBlSWRdLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvb2tpbmdUYWJsZUZvclByaW50KHVzZXJzLCB2aXNpYmxlQm9va2luZ3MsIHRsdkJvb2tpbmdzLCBtb2RpaW5Cb29raW5ncywgaXNQaWNrVXApIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVUaXRsZVJvdygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9J3RpdGxlLWxhYmVsJz5cbiAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj0nNic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpc1BpY2tVcCA/ICfXlNec15XXmicgOiAn15fXlteV16gnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICh7aXNQaWNrVXAgPyBjb3VudFBpY2t1cHModmlzaWJsZUJvb2tpbmdzKSA6IGNvdW50RHJvcE9mZnModmlzaWJsZUJvb2tpbmdzKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRMVkJvb2tpbmdzVGl0bGUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIga2V5PSd0bHZQaWNrVXAnPlxuICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNlwiIGNsYXNzTmFtZT1cInRhYmxlLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7XqtecINeQ15HXmdeRPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRMVkJvb2tpbmdzUm93cygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIF8ubWFwKHRsdkJvb2tpbmdzLCAoYm9va2luZywgdWlkKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17J3Rsdi1ib29raW5nLXJvdy0nICsgdWlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntnZXRCb29raW5nVGl0bGUodXNlcnNbdWlkXSl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntnZXRCb29raW5nUGhvbmUodXNlcnNbdWlkXSl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntib29raW5nLnBhaWRTZWF0c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2tpbmcuZXh0cmFTZWF0c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntUcmFuc2xhdGlvbnMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vZGlpbkJvb2tpbmdzVGl0bGUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIga2V5PSdtb2RpaW5QaWNrVXAnPlxuICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNlwiIGNsYXNzTmFtZT0ndGFibGUtc3ViJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+157XldeT15nXoteZ1588L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kaWluQm9va2luZ3NSb3dzKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXy5tYXAobW9kaWluQm9va2luZ3MsIChib29raW5nLCB1aWQpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXsnbW9kaWluLWJvb2tpbmctcm93LScgKyB1aWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2dldEJvb2tpbmdUaXRsZSh1c2Vyc1t1aWRdKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2dldEJvb2tpbmdQaG9uZSh1c2Vyc1t1aWRdKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2tpbmcucGFpZFNlYXRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Ym9va2luZy5leHRyYVNlYXRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57VHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIHsgXy5zaXplKG1vZGlpbkJvb2tpbmdzKSAhPT0gMCB8fCBfLnNpemUodGx2Qm9va2luZ3MpICE9PSAwID8gY3JlYXRlVGl0bGVSb3coKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPtep1508L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+15jXnNek15XXnzwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7Xnteg15XXmdeZ1508L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+15HXqtep15zXldedPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPteq15fXoNeqINei15zXmdeUPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPteq15fXoNeqINeZ16jXmdeT15Q8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHsgXy5zaXplKHRsdkJvb2tpbmdzKSA+IDAgPyBjcmVhdGVUTFZCb29raW5nc1RpdGxlKCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZSh0bHZCb29raW5ncykgPiAwID8gY3JlYXRlVExWQm9va2luZ3NSb3dzKCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZShtb2RpaW5Cb29raW5ncykgPiAwID8gY3JlYXRlTW9kaWluQm9va2luZ3NUaXRsZSgpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUobW9kaWluQm9va2luZ3MpID4gMCA/IGNyZWF0ZU1vZGlpbkJvb2tpbmdzUm93cygpIDogbnVsbCB9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY2tVcHNMaXN0KHZpc2libGVCb29raW5ncywgb25Cb29raW5nQ2xpY2ssIHVzZXJzKSB7XG4gICAgY29uc3QgdGx2UGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHY7XG4gICAgY29uc3QgbW9kaWluUGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW47XG5cbiAgICBmdW5jdGlvbiBvbkl0ZW1DbGljayh1aWQpIHtcbiAgICAgICAgb25Cb29raW5nQ2xpY2sodWlkKTtcbiAgICB9XG5cbiAgICBjb25zdCB0bHZQaWNrVXBzSXRlbXMgPSBfLm1hcCh0bHZQaWNrVXAsIChib29raW5nLCB1aWQpID0+IChcbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICBrZXk9eydwaWNrdXAtdGx2LScgKyB1aWR9XG4gICAgICAgICAgICB0aXRsZT17Z2V0Qm9va2luZ1RpdGxlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgc3VidGl0bGVzPXtnZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgaW1hZ2VTcmM9e2dldEJvb2tpbmdJbWFnZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uSXRlbUNsaWNrLmJpbmQodGhpcywgdWlkKX1cbiAgICAgICAgLz5cbiAgICApKTtcblxuICAgIGNvbnN0IG1pZGlpblBpY2tVcHNJdGVtcyA9IF8ubWFwKG1vZGlpblBpY2tVcCwgKGJvb2tpbmcsIHVpZCkgPT4gKFxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17J3BpY2t1cC1taWRpaW4tJyArIHVpZH1cbiAgICAgICAgICAgIHRpdGxlPXtnZXRCb29raW5nVGl0bGUodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBzdWJ0aXRsZXM9e2dldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgdXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBpbWFnZVNyYz17Z2V0Qm9va2luZ0ltYWdlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgb25DbGljaz17b25JdGVtQ2xpY2suYmluZCh0aGlzLCB1aWQpfVxuICAgICAgICAvPlxuICAgICkpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGx2UGlja3Vwc0xpc3QoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNj7XqtecINeQ15HXmdeRPC9oNj5cbiAgICAgICAgICAgICAgICB7IHRsdlBpY2tVcHNJdGVtcyB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vZGlpblBpY2t1cHNMaXN0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDY+157XldeT15nXoteZ1588L2g2PlxuICAgICAgICAgICAgICAgIHsgbWlkaWluUGlja1Vwc0l0ZW1zIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwaWNrLXVwLWNvbnRhaW5lciByb3cgaGlkZS1mb3ItcHJpbnQnIGtleT0ncGljay11cC1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIHsgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgfHwgXy5zaXplKG1vZGlpblBpY2tVcCkgIT09IDAgPyA8aDU+15TXnNeV15o8L2g1PiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKHRsdlBpY2tVcCkgPiAwID8gY3JlYXRlVGx2UGlja3Vwc0xpc3QoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKG1vZGlpblBpY2tVcCkgPiAwID8gY3JlYXRlTW9kaWluUGlja3Vwc0xpc3QoKSA6IG51bGwgfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwaWNrVXAtdGFibGUgc2hvdy1mb3ItcHJpbnQnIGtleT0ncGlja1VwLXRhYmxlJz5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUJvb2tpbmdUYWJsZUZvclByaW50KHVzZXJzLCB2aXNpYmxlQm9va2luZ3MsIHRsdlBpY2tVcCwgbW9kaWluUGlja1VwLCB0cnVlKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJvcE9mZkxpc3QodmlzaWJsZUJvb2tpbmdzLCBvbkJvb2tpbmdDbGljaywgdXNlcnMpIHtcbiAgICBjb25zdCB0bHZEcm9wT2ZmID0gdmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2O1xuICAgIGNvbnN0IG1vZGlpbkRyb3BPZmYgPSB2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW47XG5cbiAgICBmdW5jdGlvbiBvbkl0ZW1DbGljayh1aWQpIHtcbiAgICAgICAgb25Cb29raW5nQ2xpY2sodWlkKTtcbiAgICB9XG5cbiAgICBjb25zdCB0bHZEcm9wT2ZmSXRlbXMgPSBfLm1hcCh0bHZEcm9wT2ZmLCAoYm9va2luZywgdWlkKSA9PiAoXG4gICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAga2V5PXsncGlja3VwLXRsdi0nICsgdWlkfVxuICAgICAgICAgICAgdGl0bGU9e2dldEJvb2tpbmdUaXRsZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIHN1YnRpdGxlcz17Z2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCB1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIGltYWdlU3JjPXtnZXRCb29raW5nSW1hZ2UodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkl0ZW1DbGljay5iaW5kKHRoaXMsIHVpZCl9XG4gICAgICAgIC8+XG4gICAgKSk7XG5cbiAgICBjb25zdCBtaWRpaW5Ecm9wT2ZmSXRlbXMgPSBfLm1hcChtb2RpaW5Ecm9wT2ZmLCAoYm9va2luZywgdWlkKSA9PiAoXG4gICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAga2V5PXsncGlja3VwLW1pZGlpbi0nICsgdWlkfVxuICAgICAgICAgICAgdGl0bGU9e2dldEJvb2tpbmdUaXRsZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIHN1YnRpdGxlcz17Z2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCB1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIGltYWdlU3JjPXtnZXRCb29raW5nSW1hZ2UodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkl0ZW1DbGljay5iaW5kKHRoaXMsIHVpZCl9XG4gICAgICAgIC8+XG4gICAgKSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUbHZEcm9wT2ZmTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg2Pteq15wg15DXkdeZ15E8L2g2PlxuICAgICAgICAgICAgICAgIHsgdGx2RHJvcE9mZkl0ZW1zIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kaWluRHJvcE9mZkxpc3QoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNj7XnteV15PXmdei15nXnzwvaDY+XG4gICAgICAgICAgICAgICAgeyBtaWRpaW5Ecm9wT2ZmSXRlbXMgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3Atb2ZmLWNvbnRhaW5lciByb3cgaGlkZS1mb3ItcHJpbnQnIGtleT0nZHJvcC1vZmYtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCB8fCBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyA8aDU+15fXlteV16g8L2g1PiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKHRsdkRyb3BPZmYpID4gMCA/IGNyZWF0ZVRsdkRyb3BPZmZMaXN0KCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZShtb2RpaW5Ecm9wT2ZmKSA+IDAgPyBjcmVhdGVNb2RpaW5Ecm9wT2ZmTGlzdCgpIDogbnVsbCB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wT2ZmLXRhYmxlIHNob3ctZm9yLXByaW50JyBrZXk9J2Ryb3BPZmYtdGFibGUnPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQm9va2luZ1RhYmxlRm9yUHJpbnQodXNlcnMsIHZpc2libGVCb29raW5ncywgdGx2RHJvcE9mZiwgbW9kaWluRHJvcE9mZiwgZmFsc2UpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBCb29raW5nc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIG9uRmlsdGVyQ2hhbmdlID0gZmlsdGVyID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoZmlsdGVyKTtcbiAgICB9O1xuXG4gICAgb25HYW1lSWRDaGFuZ2UgPSBnYW1lSWQgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZUdhbWVJZChnYW1lSWQpO1xuICAgIH07XG5cbiAgICBvbkJvb2tpbmdDbGljayA9IHVpZCA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuZWRpdEJvb2tpbmcodGhpcy5wcm9wcy5xdWVyeS5nYW1lSWQsIHVpZCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUJvb2tpbmdzID0gZ2V0VmlzaWJsZUJvb2tpbmdzKHRoaXMucHJvcHMuYm9va2luZ3MsIHRoaXMucHJvcHMucXVlcnkuZ2FtZUlkKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSfWv3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlIGJvb2tpbmdzLXBhZ2UnPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlUGFnZVRpdGxlKCkgfVxuICAgICAgICAgICAgICAgIHsgY3JlYXRlRmlsdGVyU2VjdGlvbih0aGlzLnByb3BzLnF1ZXJ5LmZpbHRlciwgdGhpcy5wcm9wcy5xdWVyeS5nYW1lSWQsIHRoaXMub25GaWx0ZXJDaGFuZ2UsIHRoaXMub25HYW1lSWRDaGFuZ2UsIHZpc2libGVCb29raW5ncywgdGhpcy5wcm9wcy5nYW1lcykgfVxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5xdWVyeS5maWx0ZXIgPT09IFRBQlMuUElDS1VQID8gY3JlYXRlUGlja1Vwc0xpc3QodmlzaWJsZUJvb2tpbmdzLCB0aGlzLm9uQm9va2luZ0NsaWNrLCB0aGlzLnByb3BzLnVzZXJzKSA6IGNyZWF0ZURyb3BPZmZMaXN0KHZpc2libGVCb29raW5ncywgdGhpcy5vbkJvb2tpbmdDbGljaywgdGhpcy5wcm9wcy51c2VycykgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Cb29raW5nc1BhZ2UucHJvcFR5cGVzID0ge1xuICAgIGJvb2tpbmdzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgZ2FtZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHF1ZXJ5OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgZWRpdEJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdXJpZWQsXG4gICAgY2hhbmdlRmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVyaWVkLFxuICAgIGNoYW5nZUdhbWVJZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1cmllZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJvb2tpbmdzUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9va2luZ3NQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9va2luZ3NQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ib29raW5nc1BhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2Jvb2tpbmdzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib29raW5ncy1wYWdlIGg1IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogI0NGRDhEQztcXG4gIGNvbG9yOiAjMzc0NzRGO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5ib29raW5ncy1wYWdlIGg2IHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogI0VDRUZGMTtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4uYm9va2luZ3MtcGFnZSAudGFibGUtc3ViIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMjIyMjI7IH1cXG5cXG4uYm9va2luZ3MtcGFnZSB0YWJsZSB0Ym9keSwgLmJvb2tpbmdzLXBhZ2UgdGFibGUgdGZvb3QsIC5ib29raW5ncy1wYWdlIHRhYmxlIHRoZWFkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMjIyMjI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2Jvb2tpbmdzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJldWR4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgZGlzdHJpYnV0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucycpO1xuXG5jb25zdCBQYWdlVGl0bGUgPSByZXF1aXJlKCcuL3BhZ2VUaXRsZScpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvZGlzdHJpYnV0aW9uUGFnZS5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgICAgICAgZ2FtZXM6IHN0YXRlLmV2ZW50cyxcbiAgICAgICAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmdzXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VuZFRlbXBsYXRlRW1haWw6IChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSA9PiBkaXNwYXRjaChkaXN0cmlidXRpb25BY3Rpb25zLnNlbmRUZW1wbGF0ZUVtYWlsKHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMpKSxcbiAgICAgICAgc2VuZEN1c3RvbUVtYWlsOiAocmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCkgPT4gZGlzcGF0Y2goZGlzdHJpYnV0aW9uQWN0aW9ucy5zZW5kQ3VzdG9tRW1haWwocmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCkpLFxuICAgICAgICBzZW5kU01TOiAocmVjaXBpZW50cywgbWVzc2FnZSkgPT4gZGlzcGF0Y2goZGlzdHJpYnV0aW9uQWN0aW9ucy5zZW5kU01TKHJlY2lwaWVudHMsIG1lc3NhZ2UpKSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoZ2FtZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkaXN0cmlidXRpb25NZXRob2Q6IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuRU1BSUwsXG4gICAgICAgIHJlY2lwaWVudHNUeXBlOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuTUVNQkVSU19PTkxZLFxuICAgICAgICBkaXN0cmlidXRpb25UeXBlOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9UWVBFUy5URU1QTEFURSxcbiAgICAgICAgdGVtcGxhdGVJZDogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMuRVZFTlRfT1BFTl9GT1JfTUVNQkVSUyxcbiAgICAgICAgZ2FtZUlkOiBfLmxhc3QoXy5rZXlzKGdldE9wZW5HYW1lcyhnYW1lcykpKSxcbiAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0TWVtYmVyc1VzZXJzT25seSh1c2Vycykge1xuICAgIHJldHVybiBfLnBpY2tCeSh1c2VycywgdXNlciA9PiB1c2VyLnNlYXNvblRpY2tldHMgJiYgdXNlci5zZWFzb25UaWNrZXRzID4gMCk7XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tlZFVzZXJzT25seSh1c2VycywgYm9va2luZ3MsIGdhbWVJZCkge1xuICAgIHJldHVybiBfLnBpY2tCeSh1c2VycywgKHVzZXIsIHVpZCkgPT4gXy5oYXMoYm9va2luZ3NbdWlkXSwgZ2FtZUlkKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlY2lwaWVudHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZ2FtZUlkKSB7XG4gICAgbGV0IHJlY2lwaWVudHNVc2VycyA9IF8ucGlja0J5KHVzZXJzLCB1c2VyID0+IHVzZXIuc3Vic2NyaWJlTWFpbCk7XG5cbiAgICBzd2l0Y2ggKHJlY2lwaWVudHNUeXBlKSB7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTX1RZUEVTLk1FTUJFUlNfT05MWTpcbiAgICAgICAgICAgIHJlY2lwaWVudHNVc2VycyA9IGdldE1lbWJlcnNVc2Vyc09ubHkocmVjaXBpZW50c1VzZXJzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UU19UWVBFUy5CT09LRURfVE9fRVZFTlQ6XG4gICAgICAgICAgICByZWNpcGllbnRzVXNlcnMgPSBnZXRCb29rZWRVc2Vyc09ubHkocmVjaXBpZW50c1VzZXJzLCBib29raW5ncywgZ2FtZUlkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByZWNpcGllbnRzVXNlcnM7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJzRW1haWxzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGdhbWVJZCkge1xuICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRSZWNpcGllbnRzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGdhbWVJZCk7XG4gICAgcmV0dXJuIF8ubWFwKHJlY2lwaWVudHMsIHVzZXIgPT4gdXNlci5lbWFpbCk7XG59XG5cbmZ1bmN0aW9uIGdldEV2ZW50U3Vic3RpdHV0aW9ucyhnYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgJy1ERVBBUlRVUkUtJzogYCR7Z2FtZS5ob3VyfToke2dhbWUubWludXRlfWAsXG4gICAgICAgICctREFURS0nOiBgJHtnYW1lLmRheX0vJHtnYW1lLm1vbnRofS8ke2dhbWUueWVhcn1gLFxuICAgICAgICAnLU5BTUUtJzogQ29uc3RhbnRzLlRFQU1TW2dhbWUudHlwZUlkXS5sYWJlbFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZChjb250ZW50KSB7XG4gICAgcmV0dXJuICc8cCBkaXI9XFwncnRsXFwnPicgKyBjb250ZW50LnJlcGxhY2UoLyg/OlxcclxcbnxcXHJ8XFxuKS9nLCAnPGJyLz4nKSArICc8L3A+Jztcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcnNQaG9uZU51bWJlcnModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZ2FtZUlkKSB7XG4gICAgY29uc3QgcmVjaXBpZW50cyA9IGdldFJlY2lwaWVudHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZ2FtZUlkKTtcbiAgICByZXR1cm4gXy5tYXAocmVjaXBpZW50cywgdXNlciA9PiB1c2VyLnBob25lUHJlZml4ICsgdXNlci5waG9uZU51bWJlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3RyaWJ1dGlvbk1ldGhvZElucHV0KGRpc3RyaWJ1dGlvbk1ldGhvZCwgb25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCBtb3JlLXNwYWNlJz5cbiAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkRJU1RSSUJVVElPTl9NRVRIT0QuVElUTEV9XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZGlzdHJpYnV0aW9uTWV0aG9kfSBvbkNoYW5nZT17b25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLkVNQUlMfT57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkRJU1RSSUJVVElPTl9NRVRIT0QuRU1BSUx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuU01TfT57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkRJU1RSSUJVVElPTl9NRVRIT0QuU01TfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVjaXBpZW50c1R5cGVJbnB1dChyZWNpcGllbnRzVHlwZSwgb25SZWNpcGllbnRzVHlwZUNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJz5cbiAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlJFQ0lQSUVOVFNfVFlQRVMuVElUTEV9XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cmVjaXBpZW50c1R5cGV9IG9uQ2hhbmdlPXtvblJlY2lwaWVudHNUeXBlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTX1RZUEVTLkFMTH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlJFQ0lQSUVOVFNfVFlQRVMuQUxMfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTX1RZUEVTLk1FTUJFUlNfT05MWX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlJFQ0lQSUVOVFNfVFlQRVMuTUVNQkVSU19PTkxZfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTX1RZUEVTLkJPT0tFRF9UT19FVkVOVH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlJFQ0lQSUVOVFNfVFlQRVMuQk9PS0VEX1RPX0VWRU5UfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3RyaWJ1dGlvblR5cGVJbnB1dChkaXN0cmlidXRpb25UeXBlLCBvbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcga2V5PVwiZGlzdHJpYnV0aW9uLWRpc3RyaWJ1dGlvblR5cGUtaW5wdXRcIj5cbiAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkRJU1RSSUJVVElPTl9UWVBFUy5USVRMRX1cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtkaXN0cmlidXRpb25UeXBlfSBvbkNoYW5nZT17b25EaXN0cmlidXRpb25UeXBlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fVFlQRVMuVEVNUExBVEV9PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX1RZUEVTLlRFTVBMQVRFfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9UWVBFUy5DVVNUT019PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX1RZUEVTLkNVU1RPTX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlU2VsZWN0aW9uKHRlbXBsYXRlSWQsIG9uVGVtcGxhdGVJZENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyBrZXk9J2Rpc3RyaWJ1dGlvbi10ZW1wbGF0ZS1zZWxlY3Rpb24nPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuVEVNUExBVEVTLlRJVExFfVxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3RlbXBsYXRlSWR9IG9uQ2hhbmdlPXtvblRlbXBsYXRlSWRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlRFTVBMQVRFUy5FVkVOVF9PUEVOX0ZPUl9NRU1CRVJTfT57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlRFTVBMQVRFUy5FVkVOVF9PUEVOX0ZPUl9NRU1CRVJTfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlRFTVBMQVRFUy5FVkVOVF9PUEVOX0ZPUl9BTEx9PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuVEVNUExBVEVTLkVWRU5UX09QRU5fRk9SX0FMTH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMuQ0hBTkdFX0VWRU5UX0RFVEFJTFN9PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuVEVNUExBVEVTLkNIQU5HRV9FVkVOVF9ERVRBSUxTfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZXNTZWxlY3Rpb24oZ2FtZXMsIGdhbWVJZCwgb25HYW1lQ2hhbmdlKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IF8ubWFwKGdhbWVzLCAoZ2FtZSwgZ2FtZUlkKSA9PiA8b3B0aW9uIGtleT17J2dhbWUtJyArIGdhbWVJZH0gdmFsdWU9e2dhbWVJZH0+e0NvbnN0YW50cy5URUFNU1tnYW1lLnR5cGVJZF0ubGFiZWx9PC9vcHRpb24+KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyBrZXk9XCJkaXN0cmlidXRpb24tZ2FtZS1zZWxlY3Rpb25cIj5cbiAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkdBTUVTLlRJVExFfVxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2dhbWVJZH0gb25DaGFuZ2U9e29uR2FtZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIHsgb3B0aW9ucyB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRPcGVuR2FtZXMoZ2FtZXMpIHtcbiAgICByZXR1cm4gXy5waWNrQnkoZ2FtZXMsIGdhbWUgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZS5zdGF0dXMgPT09IENvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTIHx8IGdhbWUuc3RhdHVzID09PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfQUxMO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDdXN0b21UaXRsZShzdWJqZWN0LCBvblN1YmplY3RDaGFuZ2VkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLWNlbnRlcmVkIG1lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMnIGtleT0nZGlzdHJpYnV0aW9uLWN1c3RvbVRpdGxlJz5cbiAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkNVU1RPTS5USVRMRS5USVRMRX08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtzdWJqZWN0fSBvbkNoYW5nZT17b25TdWJqZWN0Q2hhbmdlZH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDdXN0b21Db250ZW50KGNvbnRlbnQsIG9uQ29udGVudENoYW5nZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtY2VudGVyZWQgbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucycga2V5PSdkaXN0cmlidXRpb24tY3VzdG9tQ29udGVudCc+XG4gICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5DVVNUT00uQ09OVEVOVC5USVRMRX08L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCIxMFwiIHZhbHVlPXtjb250ZW50fSBvbkNoYW5nZT17b25Db250ZW50Q2hhbmdlZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3VibWl0QnV0dG9uKG9uU3VibWl0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbi1ncm91cCBzdGFja2VkIHNtYWxsLWNlbnRlcmVkIGxhcmdlLTYgc21hbGwtOCBtb3JlLXNwYWNlJz5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uU3VibWl0fSBjbGFzc05hbWU9J2J1dHRvbiBzdWNjZXNzJz5cbiAgICAgICAgICAgICAgICA8c3Bhbj7Xqdec15c8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1wYXBlci1wbGFuZScgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkU2hvd0Rpc3RyaWJ1dGlvblR5cGVJbnB1dChkaXN0cmlidXRpb25NZXRob2QpIHtcbiAgICByZXR1cm4gZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLkVNQUlMO1xufVxuXG5mdW5jdGlvbiBzaG91bGRTaG93VGVtcGxhdGVTZWxlY3Rpb24oZGlzdHJpYnV0aW9uTWV0aG9kLCBkaXN0cmlidXRpb25UeXBlKSB7XG4gICAgcmV0dXJuIHNob3VsZFNob3dEaXN0cmlidXRpb25UeXBlSW5wdXQoZGlzdHJpYnV0aW9uTWV0aG9kKSAmJiBkaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9UWVBFUy5URU1QTEFURTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkQ3JlYXRlQ3VzdG9tVGl0bGUoZGlzdHJpYnV0aW9uTWV0aG9kLCBkaXN0cmlidXRpb25UeXBlKSB7XG4gICAgcmV0dXJuIGRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5FTUFJTCAmJlxuICAgICAgICBkaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9UWVBFUy5DVVNUT007XG59XG5cbmZ1bmN0aW9uIHNob3VsZFNob3dDdXN0b21Db250ZW50KGRpc3RyaWJ1dGlvbk1ldGhvZCwgZGlzdHJpYnV0aW9uVHlwZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgICAgICBkaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuRU1BSUwgJiZcbiAgICAgICAgICAgIGRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLkNVU1RPTVxuICAgICAgICApIHx8IGRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5TTVM7XG59XG5cbmNsYXNzIERpc3RyaWJ1dGlvblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKHRoaXMucHJvcHMuZ2FtZXMpO1xuICAgIH1cblxuICAgIG9uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzdHJpYnV0aW9uTWV0aG9kOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25SZWNpcGllbnRzVHlwZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJlY2lwaWVudHNUeXBlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25EaXN0cmlidXRpb25UeXBlQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzdHJpYnV0aW9uVHlwZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uVGVtcGxhdGVJZENoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlSWQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvbkdhbWVJZENoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGdhbWVJZDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uU3ViamVjdENoYW5nZWQgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdWJqZWN0OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25Db250ZW50Q2hhbmdlZCA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLkVNQUlMKSB7XG4gICAgICAgICAgICBjb25zdCByZWNpcGllbnRzID0gZ2V0VXNlcnNFbWFpbHModGhpcy5wcm9wcy51c2VycywgdGhpcy5zdGF0ZS5yZWNpcGllbnRzVHlwZSwgdGhpcy5wcm9wcy5ib29raW5ncywgdGhpcy5zdGF0ZS5nYW1lSWQpO1xuICAgICAgICAgICAgaWYgKF8uaXNFbXB0eShyZWNpcGllbnRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLlRFTVBMQVRFKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IGdldEV2ZW50U3Vic3RpdHV0aW9ucyh0aGlzLnByb3BzLmdhbWVzW3RoaXMuc3RhdGUuZ2FtZUlkXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kVGVtcGxhdGVFbWFpbChyZWNpcGllbnRzLCB0aGlzLnN0YXRlLnRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRDdXN0b21FbWFpbChyZWNpcGllbnRzLCB0aGlzLnN0YXRlLnN1YmplY3QsIHByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQodGhpcy5zdGF0ZS5jb250ZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByZWNpcGllbnRzID0gZ2V0VXNlcnNQaG9uZU51bWJlcnModGhpcy5wcm9wcy51c2VycywgdGhpcy5zdGF0ZS5yZWNpcGllbnRzVHlwZSwgdGhpcy5wcm9wcy5ib29raW5ncywgdGhpcy5zdGF0ZS5nYW1lSWQpO1xuICAgICAgICAgICAgaWYgKF8uaXNFbXB0eShyZWNpcGllbnRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZFNNUyhyZWNpcGllbnRzLCB0aGlzLnN0YXRlLmNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShnZXRJbml0aWFsU3RhdGUodGhpcy5wcm9wcy5nYW1lcykpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGFzaGJvYXJkLXBhZ2UgZGlzdHJpYnV0aW9uLXBhZ2UnPlxuICAgICAgICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5USVRMRX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtMTEgc21hbGwtY2VudGVyZWQnPlxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZURpc3RyaWJ1dGlvbk1ldGhvZElucHV0KHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kLCB0aGlzLm9uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlKSB9XG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlUmVjaXBpZW50c1R5cGVJbnB1dCh0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLCB0aGlzLm9uUmVjaXBpZW50c1R5cGVDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgICAgICAgeyBzaG91bGRTaG93RGlzdHJpYnV0aW9uVHlwZUlucHV0KHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kKSA/IGNyZWF0ZURpc3RyaWJ1dGlvblR5cGVJbnB1dCh0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUsIHRoaXMub25EaXN0cmlidXRpb25UeXBlQ2hhbmdlKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICB7IHNob3VsZFNob3dUZW1wbGF0ZVNlbGVjdGlvbih0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCwgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlKSA/IGNyZWF0ZVRlbXBsYXRlU2VsZWN0aW9uKHRoaXMuc3RhdGUudGVtcGxhdGVJZCwgdGhpcy5vblRlbXBsYXRlSWRDaGFuZ2UpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2hvdWxkU2hvd1RlbXBsYXRlU2VsZWN0aW9uKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kLCB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUpID8gY3JlYXRlR2FtZXNTZWxlY3Rpb24oZ2V0T3BlbkdhbWVzKHRoaXMucHJvcHMuZ2FtZXMpLCB0aGlzLnN0YXRlLmdhbWVJZCwgdGhpcy5vbkdhbWVJZENoYW5nZSkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgeyBzaG91bGRDcmVhdGVDdXN0b21UaXRsZSh0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCwgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlKSA/IGNyZWF0ZUN1c3RvbVRpdGxlKHRoaXMuc3RhdGUuc3ViamVjdCwgdGhpcy5vblN1YmplY3RDaGFuZ2VkKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICB7IHNob3VsZFNob3dDdXN0b21Db250ZW50KHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kLCB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUpID8gY3JlYXRlQ3VzdG9tQ29udGVudCh0aGlzLnN0YXRlLmNvbnRlbnQsIHRoaXMub25Db250ZW50Q2hhbmdlZCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVTdWJtaXRCdXR0b24odGhpcy5vblN1Ym1pdCkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5EaXN0cmlidXRpb25QYWdlLnByb3BUeXBlcyA9IHtcbiAgICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBnYW1lczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBib29raW5nczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJldWR4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERpc3RyaWJ1dGlvblBhZ2UpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlLmpzeCIsImltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcblxuY29uc3QgUEFUSF9NQVAgPSB7XG4gIEVNQUlMUzoge1xuICAgIFRFTVBMQVRFUzogJ3BlbmRpbmdFbWFpbHMvdGVtcGxhdGVzJyxcbiAgICBDVVNUT006ICdwZW5kaW5nRW1haWxzL2N1c3RvbSdcbiAgfSxcbiAgU01TOiAncGVuZGluZ1NNUycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFRlbXBsYXRlRW1haWwgPSAocmVjaXBpZW50cywgdGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucykgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goYCR7UEFUSF9NQVAuRU1BSUxTLlRFTVBMQVRFU31gLCAoeyByZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zIH0pKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRDdXN0b21FbWFpbCA9IChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5FTUFJTFMuQ1VTVE9NfWAsICh7IHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFNNUyA9ICh0bywgbWVzc2FnZSkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goYCR7UEFUSF9NQVAuU01TfWAsICh7IHRvLCBtZXNzYWdlIH0pKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9kaXN0cmlidXRpb25BY3Rpb25zLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZGlzdHJpYnV0aW9uUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZGlzdHJpYnV0aW9uUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvZGlzdHJpYnV0aW9uUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kaXN0cmlidXRpb24tcGFnZSAuYnV0dG9uIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9kaXN0cmlidXRpb25QYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBVc2VyRm9ybSA9IHJlcXVpcmUoJy4vdXNlckZvcm0uanN4Jyk7XG5cbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIGNvbnN0IHVpZFRvRWRpdCA9IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXMudWlkIHx8IHN0YXRlLmF1dGhEYXRhLnVpZDtcbiAgICByZXR1cm4ge1xuICAgICAgICB1aWQ6IHVpZFRvRWRpdCxcbiAgICAgICAgZ29Ib21lQWZ0ZXJFZGl0aW5nOiBzdGF0ZS5yb3V0aW5nLmhpc3RvcnkubGVuZ3RoID09PSAxXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmF2aWdhdGVIb21lOiAoKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5yZXNldChDb25zdGFudHMuUk9VVElORy5QQUdFUy5IT01FKSksXG4gICAgICAgIG5hdmlnYXRlQmFjazogKCkgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVCYWNrKCkpXG4gICAgfTtcbn1cblxuY2xhc3MgRWRpdG9yVXNlckluZm9QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBvbkZvcm1DbG9zZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ29Ib21lQWZ0ZXJFZGl0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlSG9tZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VXNlckZvcm0gdWlkPXt0aGlzLnByb3BzLnVpZH0gb25DbG9zZT17dGhpcy5vbkZvcm1DbG9zZX0vPlxuICAgICAgICApXG4gICAgfVxufVxuXG5FZGl0b3JVc2VySW5mb1BhZ2UucHJvcFR5cGVzID0ge1xuICAgIHVpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlQmFjazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZUhvbWU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZ29Ib21lQWZ0ZXJFZGl0aW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVkaXRvclVzZXJJbmZvUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZWRpdFVzZXJJbmZvUGFnZS5qc3giLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4PSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCB1c2VyQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnKTtcblxuY29uc3QgRm9ybUZyYW1lID0gcmVxdWlyZSgnLi9mb3JtRnJhbWUnKTtcblxuY29uc3QgZW1wdHlVc2VyID0ge1xuICAgIGZpcnN0TmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnLFxuICAgIHBob25lUHJlZml4OiAnMDUwJyxcbiAgICBwaG9uZU51bWJlcjogJycsXG4gICAgc3RhdGlvbjogJ3RsdicsXG4gICAgc3Vic2NyaWJlU01TOiB0cnVlLFxuICAgIHN1YnNjcmliZU1haWw6IHRydWUsXG4gICAgc2Vhc29uVGlja2V0czogMFxufTtcblxuZnVuY3Rpb24gZ2V0RW1wdHlVc2VySW5mbyhlbWFpbCkge1xuICByZXR1cm4gXy5hc3NpZ24oZW1wdHlVc2VyLCB7IGVtYWlsIH0pO1xufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgdXNlciA9IHN0YXRlLnVzZXJzW293blByb3BzLnVpZF07XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJJbmZvOiB1c2VyIHx8IGdldEVtcHR5VXNlckluZm8oYXV0aERhdGEuZW1haWwpLFxuICAgICAgICBpc0FkbWluTW9kZTogYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgYWxsb3dVc2VyUmVtb3ZlOiBhdXRoRGF0YS5pc0FkbWluICYmIGF1dGhEYXRhLnVpZCAhPT0gb3duUHJvcHMudWlkXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZVVzZXI6IHVzZXIgPT4gZGlzcGF0Y2godXNlckFjdGlvbnMudXBkYXRlVXNlcihvd25Qcm9wcy51aWQsIHVzZXIpKSxcbiAgICAgICAgcmVtb3ZlVXNlcjogKCkgPT4gZGlzcGF0Y2godXNlckFjdGlvbnMucmVtb3ZlVXNlcihvd25Qcm9wcy51aWQpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkbWluU2VjdGlvbihzZWFzb25UaWNrZXRzLCBvbk51bWJlckNoYW5nZSkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9XCJzZWFzb25UaWNrZXRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgIDxsYWJlbD7Xm9ee15XXqiDXnteg15XXmdeZ151cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNlYXNvblRpY2tldHNcIiB2YWx1ZT17c2Vhc29uVGlja2V0c30gb25DaGFuZ2U9e29uTnVtYmVyQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7IF8udGltZXMoQ29uc3RhbnRzLlVTRVIuTUFYX1NFQVNPTl9USUNLRVRTLCBpID0+IDxvcHRpb24ga2V5PXsnYW1vdW50LScgKyBpfSB2YWx1ZT17aX0+e2l9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyTmFtZUlucHV0cyhmaXJzdE5hbWUsIGxhc3ROYW1lLCBvblRleHRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS02IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLkZJUlNUX05BTUUgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e2ZpcnN0TmFtZX0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gbWF4TGVuZ3RoPVwiMjBcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5MQVNUX05BTUUgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdE5hbWVcIiB2YWx1ZT17bGFzdE5hbWV9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsSW5wdXQoZW1haWwsIG9uVGV4dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PVwidXNlci1pbmZvLWVtYWlsLWlucHV0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLkVNQUlMIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lTnVtYmVySW5wdXRzKHBob25lUHJlZml4LCBwaG9uZU51bWJlciwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtOCBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5QSE9ORV9OVU1CRVIgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZU51bWJlclwiIHZhbHVlPXtwaG9uZU51bWJlcn0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gbWF4TGVuZ3RoPVwiN1wiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC00IGNvbHVtbnMgZW5kXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5QSE9ORV9QUkVGSVggfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwaG9uZVByZWZpeFwiIHZhbHVlPXtwaG9uZVByZWZpeH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5VU0VSLlBIT05FX1BSRUZJWEVTLCBwcmVmaXggPT4gPG9wdGlvbiBrZXk9eydwaG9uZS1wcmVmaXgtJyArIHByZWZpeH0gdmFsdWU9e3ByZWZpeH0+e3ByZWZpeH08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY2t1cFN0YXRpb25Sb3coc3RhdGlvbiwgcmVxdWVzdEZvck1lbWJlcnNoaXAsIG9uVGV4dENoYW5nZSwgb25Cb29sZWFuQ2hhbmdlKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLkZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OIH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3RhdGlvblwiIHZhbHVlPXtzdGF0aW9ufSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLlNUQVRJT05TLCBzdGF0aW9uID0+IDxvcHRpb24ga2V5PXsnc3RhdGlvbi0nICsgc3RhdGlvbn0gdmFsdWU9e3N0YXRpb259PnsgVHJhbnNsYXRpb25zLlNUQVRJT05TW3N0YXRpb25dIH08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTQgc21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuUkVRVUVTVF9GT1JfTUVNQkVSU0hJUCB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJlcXVlc3RGb3JNZW1iZXJzaGlwXCIgdmFsdWU9e3JlcXVlc3RGb3JNZW1iZXJzaGlwfSBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3VuZGVmaW5lZH0gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT7XkdeX16g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RydWV9Pteb1588L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2ZhbHNlfT7XnNeQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgeyBjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQoKSB9XG4gICAgICAgICAgICB7IGNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQoKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3RyaWJ1dGlvbklucHV0cyhzdWJzY3JpYmVNYWlsLCBzdWJzY3JpYmVTTVMsIG9uQm9vbGVhbkNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTMgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5ESVNUUklCVVRJT04uRU1BSUwgfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInN3aXRjaC1pbnB1dFwiIG5hbWU9XCJzdWJzY3JpYmVNYWlsXCIgaWQ9XCJzdWJzY3JpYmVNYWlsXCIgb25DaGFuZ2U9e29uQm9vbGVhbkNoYW5nZX0gY2hlY2tlZD17c3Vic2NyaWJlTWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1wYWRkbGVcIiBodG1sRm9yPVwic3Vic2NyaWJlTWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5UT0dHTEUuWUVTIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuVE9HR0xFLk5PIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMyBjb2x1bW4gZW5kXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5ESVNUUklCVVRJT04uU01TIH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5wdXRcIiBuYW1lPVwic3Vic2NyaWJlU01TXCIgaWQ9XCJzdWJzY3JpYmVTTVNcIiBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfSBjaGVja2VkPXtzdWJzY3JpYmVTTVN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtcGFkZGxlXCIgaHRtbEZvcj1cInN1YnNjcmliZVNNU1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5UT0dHTEUuWUVTIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuVE9HR0xFLk5PIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBfLmNsb25lKHRoaXMucHJvcHMudXNlckluZm8pO1xuICB9XG5cbiAgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYXNBbGxSZXF1aXJlZEluZm8gPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRJbmZvID0gXy5waWNrKHRoaXMuc3RhdGUsIFsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ3Bob25lUHJlZml4JywgJ3Bob25lTnVtYmVyJ10pO1xuICAgICAgICAgIHJldHVybiAhXy5zb21lKHJlcXVpcmVkSW5mbywgXy5pc0VtcHR5KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhc1ZhbGlkUGhvbmVOdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubGVuZ3RoID09PSA3O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFzUmVxdWVzdEZvck1lbWJlcnNoaXBQcm9wZXJ0eSA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gXy5oYXModGhpcy5zdGF0ZSwgJ3JlcXVlc3RGb3JNZW1iZXJzaGlwJyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gaGFzQWxsUmVxdWlyZWRJbmZvKCkgJiYgaGFzVmFsaWRQaG9uZU51bWJlcigpICYmIGhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkoKTtcbiAgfTtcblxuICBvbktleVByZXNzID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlzRm9ybVZhbGlkKHRoaXMuc3RhdGUpKSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlID0gKHR5cGUsIGUpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGlmIChlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdzZWxlY3Qtb25lJykge1xuICAgICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyKHRoaXMuc3RhdGUpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xvc2UpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gIH07XG5cbiAgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZVVzZXIoKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsb3NlKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IG9uVGV4dENoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzLCAndGV4dCcpO1xuICAgICAgY29uc3Qgb25OdW1iZXJDaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgJ251bWJlcicpO1xuICAgICAgY29uc3Qgb25Cb29sZWFuQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsICdib29sZWFuJyk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRnJhbWUgdGl0bGU9e1RyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuVElUTEV9XG4gICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e3RoaXMucHJvcHMuYWxsb3dVc2VyUmVtb3ZlID8gdGhpcy5vblJlbW92ZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5wcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5pc0Zvcm1WYWxpZCgpfT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtY2VudGVyZWQgdXNlci1jb250YWluZXJcIiBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3N9PlxuXG4gICAgICAgICAgICAgIHsgY3JlYXRlVXNlck5hbWVJbnB1dHModGhpcy5zdGF0ZS5maXJzdE5hbWUsIHRoaXMuc3RhdGUubGFzdE5hbWUsIG9uVGV4dENoYW5nZSkgfVxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMudXNlckluZm8uZW1haWwgPyBudWxsIDogY3JlYXRlRW1haWxJbnB1dCh0aGlzLnN0YXRlLmVtYWlsLCBvblRleHRDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgeyBjcmVhdGVQaG9uZU51bWJlcklucHV0cyh0aGlzLnN0YXRlLnBob25lUHJlZml4LCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBvblRleHRDaGFuZ2UsIG9uTnVtYmVyQ2hhbmdlKSB9XG4gICAgICAgICAgICAgIHsgY3JlYXRlUGlja3VwU3RhdGlvblJvdyh0aGlzLnN0YXRlLnN0YXRpb24sIHRoaXMuc3RhdGUucmVxdWVzdEZvck1lbWJlcnNoaXAsIG9uVGV4dENoYW5nZSwgb25Cb29sZWFuQ2hhbmdlKSB9XG5cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmlzQWRtaW5Nb2RlID8gY3JlYXRlQWRtaW5TZWN0aW9uKHRoaXMuc3RhdGUuc2Vhc29uVGlja2V0cywgb25OdW1iZXJDaGFuZ2UpIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgeyBjcmVhdGVEaXN0cmlidXRpb25JbnB1dHModGhpcy5zdGF0ZS5zdWJzY3JpYmVNYWlsLCB0aGlzLnN0YXRlLnN1YnNjcmliZVNNUywgb25Cb29sZWFuQ2hhbmdlKSB9XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0Zvcm1GcmFtZT5cbiAgICApO1xuICB9XG59XG5cblVzZXJGb3JtLlByb3BUeXBlcyA9IHtcbiAgICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVVc2VyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlbW92ZVVzZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNBZG1pbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFsbG93VXNlclJlbW92ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdXNlckluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyRm9ybSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlckZvcm0uanN4IiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgUGFnZVRpdGxlID0gcmVxdWlyZSgnLi9wYWdlVGl0bGUnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2Zvcm1GcmFtZS5zY3NzJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbnNCdXR0b25zKGRpc2FibGVkLCBvblN1Ym1pdCwgb25SZW1vdmUpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvblJlbW92ZX0gY2xhc3NOYW1lPVwiYnV0dG9uIGFsZXJ0IG1vcmUtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IFRyYW5zbGF0aW9ucy5GT1JNX0ZSQU1FLlJFTU9WRSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25zIGJ1dHRvbi1ncm91cCBzdGFja2VkIHNtYWxsLWNlbnRlcmVkIGxhcmdlLTYgc21hbGwtOCBcIj5cbiAgICAgICAgICAgIDxhIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17b25TdWJtaXR9IGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzIG1vcmUtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IFRyYW5zbGF0aW9ucy5GT1JNX0ZSQU1FLlNVQk1JVCB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKG9uUmVtb3ZlKSA/IGNyZWF0ZVJlbW92ZUJ1dHRvbigpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEZvcm1GcmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZyYW1lXCI+XG4gICAgICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQWN0aW9uc0J1dHRvbnModGhpcy5wcm9wcy5kaXNhYmxlZCwgdGhpcy5wcm9wcy5vblN1Ym1pdCwgdGhpcy5wcm9wcy5vblJlbW92ZSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuRm9ybUZyYW1lLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblN1Ym1pdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUZyYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1GcmFtZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1mcmFtZSAuY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLmZvcm0tZnJhbWUgLmFjdGlvbi1idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIC5mb3JtLWZyYW1lIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IHJvdXRpbmdBY3Rpb25zICA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcbmNvbnN0IGJvb2tpbmdBY3Rpb25zICA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMnKTtcblxuY29uc3QgRm9ybUZyYW1lID0gcmVxdWlyZSgnLi9mb3JtRnJhbWUnKTtcblxuY29uc3QgZW1wdHlCb29raW5nID0ge1xuICAgIHBhaWRTZWF0czogMCxcbiAgICBleHRyYVNlYXRzOiAwLFxuICAgIHBpY2tVcDogJ3RsdicsXG4gICAgZHJvcE9mZjogJ3Rsdidcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIGNvbnN0IHJvdXRpbmdQYXJhbXMgPSBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zO1xuICAgIGNvbnN0IHVpZCA9IHJvdXRpbmdQYXJhbXMudWlkO1xuICAgIGNvbnN0IGdhbWVJZCA9IHJvdXRpbmdQYXJhbXMuZ2FtZUlkO1xuICAgIGNvbnN0IGJvb2tpbmcgPSBfLmdldChzdGF0ZSwgWydib29raW5ncycsIHVpZCwgZ2FtZUlkXSwge30pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNBZG1pbjogc3RhdGUuYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgdWlkLFxuICAgICAgICBnYW1lSWQsXG4gICAgICAgIGJvb2tpbmcsXG4gICAgICAgIHVzZXJJbmZvOiBzdGF0ZS51c2Vyc1t1aWRdXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlQm9va2luZzogKHVpZCwgZ2FtZUlkLCBib29raW5nKSA9PiBkaXNwYXRjaChib29raW5nQWN0aW9ucy51cGRhdGVCb29raW5nKHVpZCwgZ2FtZUlkLCBib29raW5nKSksXG4gICAgICAgIGNhbmNlbEJvb2tpbmc6ICh1aWQsIGdhbWVJZCkgPT4gZGlzcGF0Y2goYm9va2luZ0FjdGlvbnMuY2FuY2VsQm9va2luZyh1aWQsIGdhbWVJZCkpLFxuICAgICAgICBuYXZpZ2F0ZUJhY2s6ICgpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlQmFjaygpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhc3NlbmdlcnNTZWN0aW9uKHNlYXNvblRpY2tldHMsIHBhaWRTZWF0cywgZXh0cmFTZWF0cywgb25QYWlkU2VhdENoYW5nZSwgb25FeHRyYVNlYXRDaGFuZ2UpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhaWRTZWF0c0lucHV0KCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IF8udGltZXMoc2Vhc29uVGlja2V0cyArIDEsIGkgPT4gPG9wdGlvbiBrZXk9eydwYWlkLXNlYXQtJyArIGl9IHZhbHVlPXtpfT57aX08L29wdGlvbj4pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfQk9PS0lOR19QQUdFLlBBSURfU0VBVFN9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3BhaWRTZWF0c30gb25DaGFuZ2U9e29uUGFpZFNlYXRDaGFuZ2V9IG5hbWU9J3BhaWRTZWF0cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW1zIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV4dHJhU2VhdHNJbnB1dCgpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBfLnRpbWVzKDgsIGkgPT4gPG9wdGlvbiBrZXk9eydleHRyYS1zZWF0LScgKyBpfSB2YWx1ZT17aX0+e2l9PC9vcHRpb24+KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTYgY29sdW1ucyBlbmQnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuRVhUUkFfU0VBVFN9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2V4dHJhU2VhdHN9IG9uQ2hhbmdlPXtvbkV4dHJhU2VhdENoYW5nZX0gbmFtZT0nZXh0cmFTZWF0cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW1zIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnIGtleT17J2Jvb2tpbmctZm9ybS1wYXNzZW5nZXJzLXNlY3Rpb24nfT5cbiAgICAgICAgICAgIHsgc2Vhc29uVGlja2V0cyA/IGNyZWF0ZVBhaWRTZWF0c0lucHV0KCkgOiBudWxsIH1cbiAgICAgICAgICAgIHsgY3JlYXRlRXh0cmFTZWF0c0lucHV0KCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaWNrdXBTZWN0aW9uKHBpY2tVcEVuYWJsZWQsIHBpY2tVcFN0YXRpb24sIHRvZ2dsZVBpY2tVcCwgb25QaWNrdXBTdGF0aW9uQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtMyBsYXJnZS0yIGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwaWNrVXBUb2dnbGUnPntUcmFuc2xhdGlvbnMuVVBEQVRFX0JPT0tJTkdfUEFHRS5QSUNLVVBfVE9HR0xFfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N3aXRjaCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2xhc3NOYW1lPSdzd2l0Y2gtaW5wdXQnIGlkPSdwaWNrVXBUb2dnbGUnIGNoZWNrZWQ9e3BpY2tVcEVuYWJsZWR9IG9uQ2hhbmdlPXt0b2dnbGVQaWNrVXB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3N3aXRjaC1wYWRkbGUnIGh0bWxGb3I9J3BpY2tVcFRvZ2dsZScgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTkgbGFyZ2UtMTAgY29sdW1ucyBlbmQgbW9yZS1zcGFjZSc+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cGlja1VwU3RhdGlvbn0gb25DaGFuZ2U9e29uUGlja3VwU3RhdGlvbkNoYW5nZX0gbmFtZT0ncGlja1VwJyBkaXNhYmxlZD17IXBpY2tVcEVuYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+e1RyYW5zbGF0aW9ucy5VUERBVEVfQk9PS0lOR19QQUdFLlBJQ0tVUF9TVEFUSU9OX0RST1BET1dOX0RFRkFVTFR9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5TVEFUSU9OUy5URUxfQVZJVn0+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tDb25zdGFudHMuU1RBVElPTlMuVEVMX0FWSVZdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuU1RBVElPTlMuTU9ESUlOfT57VHJhbnNsYXRpb25zLlNUQVRJT05TW0NvbnN0YW50cy5TVEFUSU9OUy5NT0RJSU5dfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3BvZmZTZWN0aW9uKGRyb3BPZmZFbmFibGVkLCBkcm9wT2ZmU3RhdGlvbiwgdG9nZ2xlRHJvcE9mZiwgb25Ecm9wT2ZmU3RhdGlvbkNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTMgbGFyZ2UtMiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRyb3BPZmZUb2dnbGVcIj57VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuRFJPUE9GRl9UT0dHTEV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3dpdGNoJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjbGFzc05hbWU9J3N3aXRjaC1pbnB1dCcgaWQ9J2Ryb3BPZmZUb2dnbGUnIGNoZWNrZWQ9e2Ryb3BPZmZFbmFibGVkfSBvbkNoYW5nZT17dG9nZ2xlRHJvcE9mZn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1wYWRkbGVcIiBodG1sRm9yPVwiZHJvcE9mZlRvZ2dsZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC05IGxhcmdlLTEwIGNvbHVtbnMgZW5kIG1vcmUtc3BhY2UnPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2Ryb3BPZmZTdGF0aW9ufSBvbkNoYW5nZT17b25Ecm9wT2ZmU3RhdGlvbkNoYW5nZX0gbmFtZT0nZHJvcE9mZicgZGlzYWJsZWQ9eyFkcm9wT2ZmRW5hYmxlZH0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jycgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT57VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuUElDS1VQX1NUQVRJT05fRFJPUERPV05fREVGQVVMVH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLlNUQVRJT05TLlRFTF9BVklWfT57VHJhbnNsYXRpb25zLlNUQVRJT05TW0NvbnN0YW50cy5TVEFUSU9OUy5URUxfQVZJVl19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5TVEFUSU9OUy5NT0RJSU59PntUcmFuc2xhdGlvbnMuU1RBVElPTlNbQ29uc3RhbnRzLlNUQVRJT05TLk1PRElJTl19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVXBkYXRlQm9va2luZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBjb25zdCBib29raW5nSW5pdGlhbFN0YXRlID0gXy5kZWZhdWx0cyh0aGlzLnByb3BzLmJvb2tpbmcsIHsgcGFpZFNlYXRzOiB0aGlzLnByb3BzLnNlYXNvblRpY2tldHMgfSwgZW1wdHlCb29raW5nKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gXy5tZXJnZShib29raW5nSW5pdGlhbFN0YXRlLCB7XG4gICAgICAgICAgICBwaWNrVXBFbmFibGVkOiAhIWJvb2tpbmdJbml0aWFsU3RhdGUucGlja1VwLFxuICAgICAgICAgICAgZHJvcE9mZkVuYWJsZWQ6ICEhYm9va2luZ0luaXRpYWxTdGF0ZS5kcm9wT2ZmXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUGFpZFNlYXRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwYWlkU2VhdHM6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25FeHRyYVNlYXRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHRyYVNlYXRzOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRvZ2dsZVBpY2tVcCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBwaWNrVXBFbmFibGVkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBpY2tVcEVuYWJsZWQgfSk7XG4gICAgICAgIGlmICghcGlja1VwRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBpY2tVcDogJycgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25QaWNrVXBTdGF0aW9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGlja1VwOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdG9nZ2xlRHJvcE9mZiA9IGUgPT4ge1xuICAgICAgICBjb25zdCBkcm9wT2ZmRW5hYmxlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wT2ZmRW5hYmxlZCB9KTtcbiAgICAgICAgaWYgKCFkcm9wT2ZmRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BPZmY6ICcnIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uRHJvcE9mZlN0YXRpb25DaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkcm9wT2ZmOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBhaWRTZWF0cyA9PT0gMCAmJiB0aGlzLnN0YXRlLmV4dHJhU2VhdHMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkICYmICF0aGlzLnN0YXRlLmRyb3BPZmZFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkICYmIHRoaXMuc3RhdGUucGlja1VwID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWQgJiYgdGhpcy5zdGF0ZS5kcm9wT2ZmID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib29raW5nVG9VcGRhdGUgPSBfLnBpY2sodGhpcy5zdGF0ZSwgXy5rZXlzKGVtcHR5Qm9va2luZykpO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUJvb2tpbmcodGhpcy5wcm9wcy51aWQsIHRoaXMucHJvcHMuZ2FtZUlkLCBib29raW5nVG9VcGRhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlQmFjaygpO1xuICAgIH07XG5cbiAgICBvblJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5jYW5jZWxCb29raW5nKHRoaXMucHJvcHMudWlkLCB0aGlzLnByb3BzLmdhbWVJZCk7XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVCYWNrKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEZvcm1GcmFtZSB0aXRsZT17VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuVElUTEV9IG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBvbkNsb3NlPXt0aGlzLnByb3BzLm5hdmlnYXRlQmFja30gb25SZW1vdmU9e3RoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMub25SZW1vdmU6IG51bGx9IGRpc2FibGVkPXshdGhpcy5pc0Zvcm1WYWxpZCgpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9va2luZy1mb3JtIHNtYWxsLTExIHNtYWxsLWNlbnRlcmVkJz5cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVQYXNzZW5nZXJzU2VjdGlvbih0aGlzLnByb3BzLnVzZXJJbmZvLnNlYXNvblRpY2tldHMsIHRoaXMuc3RhdGUucGFpZFNlYXRzLCB0aGlzLnN0YXRlLmV4dHJhU2VhdHMsIHRoaXMub25QYWlkU2VhdENoYW5nZSwgdGhpcy5vbkV4dHJhU2VhdENoYW5nZSkgfVxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZVBpY2t1cFNlY3Rpb24odGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkLCB0aGlzLnN0YXRlLnBpY2tVcCwgdGhpcy50b2dnbGVQaWNrVXAsIHRoaXMub25QaWNrVXBTdGF0aW9uQ2hhbmdlKSB9XG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlRHJvcG9mZlNlY3Rpb24odGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZCwgdGhpcy5zdGF0ZS5kcm9wT2ZmLCB0aGlzLnRvZ2dsZURyb3BPZmYsIHRoaXMub25Ecm9wT2ZmU3RhdGlvbkNoYW5nZSkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtRnJhbWU+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VcGRhdGVCb29raW5nUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNBZG1pbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBnYW1lSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBib29raW5nOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHVzZXJJbmZvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjYW5jZWxCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlQmFjazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVwZGF0ZUJvb2tpbmdQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91cGRhdGVCb29raW5nUGFnZS5qc3giLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgZXZlbnRBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9ldmVudEFjdGlvbnMnKTtcbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuXG5jb25zdCBERUZBVUxUX0dBTUVfTE9HTyA9ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMjQvMTI0MTUwLnN2Zyc7XG5cbmNvbnN0IEZvcm1GcmFtZSA9IHJlcXVpcmUoJy4vZm9ybUZyYW1lJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzJyk7XG5cbmNvbnN0IGVtcHR5RXZlbnQgPSB7XG4gICAgdHlwZUlkOiAnJyxcbiAgICBkYXk6ICcwMScsXG4gICAgbW9udGg6ICcwMScsXG4gICAgeWVhcjogJzIwMTcnLFxuICAgIGhvdXI6ICcxNycsXG4gICAgbWludXRlOiAnMDAnLFxuICAgIHN0YXR1czogQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRFxufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgY29uc3Qgcm91dGluZ1BhcmFtcyA9IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXM7XG4gICAgY29uc3QgZ2FtZUlkID0gcm91dGluZ1BhcmFtcy5nYW1lSWQ7XG4gICAgY29uc3QgZ2FtZSA9IF8uZ2V0KHN0YXRlLCBbJ2V2ZW50cycsIGdhbWVJZF0sIHt9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdhbWUsXG4gICAgICAgIGdhbWVJZFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVZhbHVlKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLmpvaW4oJy0nKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVmFsdWUoaG91ciwgbWludXRlKSB7XG4gICAgcmV0dXJuIGhvdXIgKyAnOicgKyBtaW51dGU7XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUdhbWU6IGdhbWUgPT4gZGlzcGF0Y2goZXZlbnRBY3Rpb25zLmNyZWF0ZUV2ZW50KGdhbWUpKSxcbiAgICAgICAgdXBkYXRlR2FtZTogKGdhbWVJZCwgZ2FtZSkgPT4gZGlzcGF0Y2goZXZlbnRBY3Rpb25zLnVwZGF0ZUV2ZW50KGdhbWVJZCwgZ2FtZSkpLFxuICAgICAgICByZW1vdmVHYW1lOiBnYW1lSWQgPT4gZGlzcGF0Y2goZXZlbnRBY3Rpb25zLnJlbW92ZUV2ZW50KGdhbWVJZCkpLFxuICAgICAgICBuYXZpZ2F0ZUJhY2s6ICgpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlQmFjaygpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVJbWFnZSh0eXBlSWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZ2FtZS1pbWcnIHNyYz17Xy5nZXQoQ29uc3RhbnRzLlRFQU1TLCBbdHlwZUlkLCAnbG9nbyddLCBERUZBVUxUX0dBTUVfTE9HTyl9IC8+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZVRpdGxlU2VjdGlvbih0eXBlSWQsIG9uVHlwZUlkQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtOSBsYXJnZS0xMCBsYXJnZS1jb2xsYXBzZSBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLkdBTUVfTEFCRUx9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0ndHlwZUlkJyB2YWx1ZT17dHlwZUlkfSBvbkNoYW5nZT17b25UeXBlSWRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJyBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5HQU1FX1BMQUNFSE9MREVSfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuVEVBTVMsICh0ZWFtRGF0YSwgaWQpID0+IDxvcHRpb24ga2V5PXsndXBkYXRlLWdhbWUtJyArIGlkfSB2YWx1ZT17aWR9Pnt0ZWFtRGF0YS5sYWJlbH08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zsb2F0LWxlZnQnPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlR2FtZUltYWdlKHR5cGVJZCkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9XaXRob3V0U3VwcG9ydGVkSW5wdXRzKHllYXIsIG1vbnRoLCBob3VyLCBtaW51dGUsIG9uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT0ndW5zdXBwb3J0ZWQtaW5wdXRzJyBjbGFzc05hbWU9J3JvdyBzbWFsbC1leHBhbmRlZCBzbWFsbC1jZW50ZXJlZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNCBtZWRpdW0tMiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLkRBVEVfTEFCRUx9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt5ZWFyfSBvbkNoYW5nZT17b25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZX0gbmFtZT0neWVhcic+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLkRBVEVfQU5EX1RJTUUueWVhcnMsIHllYXIgPT4gPG9wdGlvbiBrZXk9eyd5eS0nICsgeWVhcn0gdmFsdWU9eycyMCcgKyB5ZWFyfT57eWVhcn08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucyBtb3JlLXNwYWNlJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXttb250aH0gb25DaGFuZ2U9e29uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2V9IG5hbWU9J21vbnRoJz5cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuREFURV9BTkRfVElNRS5tb250aHMsIG1vbnRoID0+IDxvcHRpb24ga2V5PXsnbW0tJyArIG1vbnRofSB2YWx1ZT17bW9udGh9Pnttb250aH08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucyBtb3JlLXNwYWNlJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtkYXl9IG9uQ2hhbmdlPXtvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlfSBuYW1lPSdkYXknPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5EQVRFX0FORF9USU1FLmRheXMsIGRheSA9PiA8b3B0aW9uIGtleT17J2RkLScgKyBkYXl9IHZhbHVlPXtkYXl9PntkYXl9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC0zIGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuVElNRX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e21pbnV0ZX0gb25DaGFuZ2U9e29uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2V9IG5hbWU9J21pbnV0ZSc+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLkRBVEVfQU5EX1RJTUUubWludXRlcywgZGF5ID0+IDxvcHRpb24ga2V5PXsnbWluLScgKyBtaW51dGV9IHZhbHVlPXttaW51dGV9PnttaW51dGV9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC0zIGNvbHVtbnMgbW9yZS1zcGFjZSBlbmQnPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2hvdXJ9IG9uQ2hhbmdlPXtvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlfSBuYW1lPSdtaW51dGUnPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5EQVRFX0FORF9USU1FLmhvdXJzLCBob3VyID0+IDxvcHRpb24ga2V5PXsnaGgtJyArIGhvdXJ9IHZhbHVlPXtob3VyfT57aG91cn08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvV2l0aFN1cHBvcnRlZElucHV0cyhkYXRlLCB0aW1lLCBvbkRhdGVDaGFuZ2UsIG9uVGltZUNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PSdzdXBwb3J0ZWQtaW5wdXRzJyBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLkRBVEVfTEFCRUx9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyB2YWx1ZT17ZGF0ZX0gb25DaGFuZ2U9e29uRGF0ZUNoYW5nZX0gbWluPScyMDE2LTAxLTAxJyBtYXg9JzIwMTctMTItMzEnIG5hbWU9J2RhdGUnIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTYgY29sdW1ucyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5USU1FfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGltZScgdmFsdWU9e3RpbWV9IHN0ZXA9ezMwMH0gb25DaGFuZ2U9e29uVGltZUNoYW5nZX0gbmFtZT0ndGltZScgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVTdGF0dXNTZWN0aW9uKHN0YXR1cywgb25HYW1lU3RhdHVzQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTEyIGNvbHVtbnMnPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5HQU1FX1NUQVRVU31cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzdGF0dXN9IG9uQ2hhbmdlPXtvbkdhbWVTdGF0dXNDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5HQU1FLlNUQVRVUywgdmFsID0+IDxvcHRpb24gdmFsdWU9e3ZhbH0+e1RyYW5zbGF0aW9ucy5HQU1FLlNUQVRVU1t2YWxdfTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVXBkYXRlR2FtZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gXy5kZWZhdWx0cyh0aGlzLnByb3BzLmdhbWUsIGVtcHR5RXZlbnQsIHsgZGF0ZUlucHV0U3VwcG9ydGVkOiB0cnVlLCB0aW1lSW5wdXRTdXBwb3J0ZWQ6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tJZkh0bWw1U3VwcG9ydGVkKCk7XG4gICAgfVxuXG4gICAgY2hlY2tJZkh0bWw1U3VwcG9ydGVkKCkge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gWydkYXRlJywgJ3RpbWUnXTtcbiAgICAgICAgY29uc3QgdGVzdFJlc3VsdCA9IHt9O1xuICAgICAgICBjb25zdCB0ZXN0U3RyaW5nID0gJ3Rlc3QhJztcblxuICAgICAgICBfLmVhY2goc3VwcG9ydGVkSW5wdXRUeXBlcywgKGlucHV0VHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdGVzdFN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IGlzU3VwcG9ydGVkID0gaW5wdXQudmFsdWUgIT09IHRlc3RTdHJpbmc7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0W2lucHV0VHlwZSArICdJbnB1dFN1cHBvcnRlZCddID0gaXNTdXBwb3J0ZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGVzdFJlc3VsdCk7XG4gICAgfVxuXG4gICAgb25UeXBlSWRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0eXBlSWQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25EYXRlQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCctJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB5ZWFyOiB2YWxbMF0sIG1vbnRoOiB2YWxbMV0sIGRheTogdmFsWzJdIH0pO1xuICAgIH07XG5cbiAgICBvblRpbWVDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdXI6IHZhbFswXSwgbWludXRlOiB2YWxbMV0gfSk7XG4gICAgfTtcblxuICAgIG9uR2FtZVN0YXR1c0NoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0YXR1czogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlzRm9ybVZhbGlkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50eXBlSWQgIT09ICcnO1xuICAgIH07XG5cbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IF8ub21pdCh0aGlzLnN0YXRlLCBbJ3RpbWVJbnB1dFN1cHBvcnRlZCcsICdkYXRlSW5wdXRTdXBwb3J0ZWQnXSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmdhbWVJZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVHYW1lKHRoaXMucHJvcHMuZ2FtZUlkLCBnYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3JlYXRlR2FtZShnYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlQmFjaygpO1xuICAgIH07XG5cbiAgICBvblJlbW92ZSAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlR2FtZSh0aGlzLnByb3BzLmdhbWVJZCk7XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVCYWNrKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtRnJhbWVcbiAgICAgICAgICAgICAgICB0aXRsZT17VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuVElUTEV9IG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBvblJlbW92ZT17dGhpcy5vblJlbW92ZX0gb25DbG9zZT17dGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2t9IGRpc2FibGVkPXshdGhpcy5pc0Zvcm1WYWxpZCgpfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1cGRhdGUtZ2FtZS1wYWdlIGxhcmdlLTExIGxhcmdlLWNlbnRlcmVkJz5cblxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZUdhbWVUaXRsZVNlY3Rpb24odGhpcy5zdGF0ZS50eXBlSWQsIHRoaXMub25UeXBlSWRDaGFuZ2UpIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGVJbnB1dFN1cHBvcnRlZCAmJiB0aGlzLnN0YXRlLnRpbWVJbnB1dFN1cHBvcnRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5mb1dpdGhTdXBwb3J0ZWRJbnB1dHMocGFyc2VEYXRlVmFsdWUodGhpcy5zdGF0ZS55ZWFyLCB0aGlzLnN0YXRlLm1vbnRoLCB0aGlzLnN0YXRlLmRheSksIHBhcnNlVGltZVZhbHVlKHRoaXMuc3RhdGUuaG91ciwgdGhpcy5zdGF0ZS5taW51dGUpLCB0aGlzLm9uRGF0ZUNoYW5nZSwgdGhpcy5vblRpbWVDaGFuZ2UpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbmZvV2l0aG91dFN1cHBvcnRlZElucHV0cyh0aGlzLnN0YXRlLnllYXIsIHRoaXMuc3RhdGUubW9udGgsIHRoaXMuc3RhdGUuaG91ciwgdGhpcy5zdGF0ZS5taW51dGUsIHRoaXMub25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlR2FtZVN0YXR1c1NlY3Rpb24odGhpcy5zdGF0ZS5zdGF0dXMsIHRoaXMub25HYW1lU3RhdHVzQ2hhbmdlKSB9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybUZyYW1lPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVXBkYXRlR2FtZVBhZ2UucHJvcFR5cGVzID0ge1xuICAgIGdhbWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgZ2FtZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyZWF0ZUdhbWU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlR2FtZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZUJhY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVcGRhdGVHYW1lUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXBkYXRlR2FtZVBhZ2UuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91cGRhdGVHYW1lUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VwZGF0ZUdhbWVQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91cGRhdGVHYW1lUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvdXBkYXRlR2FtZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudXBkYXRlLWdhbWUtcGFnZSAuZ2FtZS1pbWcge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvdXBkYXRlR2FtZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpdGUge1xcbiAgZGlyZWN0aW9uOiBydGw7IH1cXG4gIC5zaXRlIC5zcGxpdC5idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTZweDsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uIGkge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24uZmFjZWJvb2sge1xcbiAgICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5nb29nbGUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNkNTBmMjU7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5sZWZ0LWljb24ge1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAgICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5sZWZ0LWljb24gc3BhbiB7XFxuICAgICAgICBsZWZ0OiAwOyB9XFxuICAuc2l0ZSAuZXJyb3ItbXNnIHtcXG4gICAgY29sb3I6ICNkNTBmMjU7XFxuICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4OyB9XFxuICAgIC5zaXRlIC5lcnJvci1tc2cgaSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG4gIC5zaXRlIGxhYmVsIHtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgLnNpdGUgLm1vcmUtc3BhY2Uge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4OyB9XFxuICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAubGlzdC1pdGVtOm50aC1jaGlsZChldmVuKSB7XFxuICAgICAgYmFja2dyb3VuZDogI0VFRUVFRTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmxpc3QtaXRlbTpudGgtY2hpbGQob2RkKSB7XFxuICAgICAgYmFja2dyb3VuZDogI0UwRTBFMDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudS5zbWFsbC10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudSBsaSBhIHtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGNvbG9yOiAjRDMyRjJGOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51IGxpLmFjdGl2ZSBhIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRDMyRjJGO1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51IGxpLmFjdGl2ZTpob3ZlciB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLnNlYXJjaCB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjkzNWVtO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMC45MzVlbTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAuc2VhcmNoLWlucHV0IHtcXG4gICAgICB0ZXh0LWluZGVudDogMzBweDsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAuc2VhcmNoLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDExcHg7XFxuICAgICAgcmlnaHQ6IDI4cHg7XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBjb2xvcjogI2NhY2FjYTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEMzJGMkY7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMjVzIGVhc2Utb3V0LCBjb2xvciAuMjVzIGVhc2Utb3V0O1xcbiAgICAgIHBhZGRpbmc6IC44NWVtO1xcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgIHdpZHRoOiAzLjVyZW07XFxuICAgICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgIGJvdHRvbTogMXJlbTsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bi5iaWcge1xcbiAgICAgICAgbGVmdDogMjclOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuLnNtYWxsIHtcXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgICAgIGxlZnQ6IDUlOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNENTAwMDA7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG46Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlci1zdGF0dXMge1xcbiAgICAgIGNvbG9yOiAjNDI0MjQyO1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlci1zdGF0dXMgaSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyB9XFxuICAuc2l0ZSAuYnV0dG9uLnN1Y2Nlc3NbZGlzYWJsZWRdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzI1YTM1YSAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlyZWJhc2VcIjoge1xuXHRcdFwiYXBpS2V5XCI6IFwiQUl6YVN5REVJU1YyYU1pZVBrdWVDd2xEUjhDVmc3aF9CTGEzSm9jXCIsXG5cdFx0XCJhdXRoRG9tYWluXCI6IFwiaGFwb2VsYnVzLWIyNWQ0LmZpcmViYXNlYXBwLmNvbVwiLFxuXHRcdFwiZGF0YWJhc2VVUkxcIjogXCJodHRwczovL2hhcG9lbGJ1cy1iMjVkNC5maXJlYmFzZWlvLmNvbVwiLFxuXHRcdFwic3RvcmFnZUJ1Y2tldFwiOiBcImhhcG9lbGJ1cy1iMjVkNC5hcHBzcG90LmNvbVwiXG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb25maWcvY29uZmlnLnByb2QuanNvblxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==