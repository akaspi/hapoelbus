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
	  var eventDate = new Date(game.year, game.month, game.day);
	  eventDate.setMonth(eventDate.getMonth() - 1);
	  return eventDate;
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
	
	function getOpenGames(games) {
	  return _.omitBy(games, function (game) {
	    return game.status === Constants.GAME.STATUS.CLOSED;
	  });
	}
	
	function createMobileNoGamesMessageSection() {
	  return React.createElement(
	    'div',
	    { className: 'show-for-small-only no-bookings more-space' },
	    React.createElement(
	      'span',
	      null,
	      Translations.HOME_PAGE.NO_OPEN_GAMES
	    ),
	    React.createElement('i', { className: 'fa fa-bus', 'aria-hidden': 'true' })
	  );
	}
	
	function createGamesLists(openGames, closedGamesArr, onBooking, onCancelBooking) {
	
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
	      _.map(openGames, function (game, gameId) {
	        return React.createElement(EventItem, { key: 'open-game-' + gameId, eventId: gameId, onBooking: bindOnGameItemClick(onBooking, gameId), onCancelBooking: bindOnGameItemClick(onCancelBooking, gameId) });
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
	    _.isEmpty(openGames) ? null : createOpenGamesList(),
	    createClosedGamesList()
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
	      var openGames = getOpenGames(this.props.games);
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
	              _.isEmpty(openGames) ? createMobileNoGamesMessageSection() : null,
	              createGamesLists(openGames, closedGamesArr, this.onBooking, this.onCancelBooking)
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
	    var uidToEdit = state.routing.current.uid || state.authData.uid;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTMwYTExYjA4NWZkYzA0ZWUyNjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb290LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L21ha2VTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWR1eFRodW5rXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3JvdXRpbmdSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NsaWVudERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbG9hZGluZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2xhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzP2NhYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzPzM0MmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90b3BCYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzPzdiMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3M/MmRkNCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2V2ZW50SXRlbS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2Nzcz80YTA2Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3M/MjI5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZVRpdGxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VUaXRsZS5zY3NzPzQyYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wYWdlVGl0bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2FtZXNQYWdlLnNjc3M/YzFlYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhbWVzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ib29raW5nc1BhZ2Uuc2Nzcz9kMTlkIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYm9va2luZ3NQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzcz85NWY1Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGlzdHJpYnV0aW9uUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VkaXRVc2VySW5mb1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtRnJhbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZm9ybUZyYW1lLnNjc3M/MjVlMiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZUJvb2tpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cGRhdGVHYW1lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzP2ViOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYXBwLnNjc3M/OGJkYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcucHJvZC5qc29uIl0sIm5hbWVzIjpbImNvbmZpZyIsImNsaWVudERCIiwiaW5pdGlhbGl6ZSIsImZpcmViYXNlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdCIsInJlcXVpcmUiLCJSZWFjdFJlZHV4IiwibWFrZVN0b3JlIiwiQXBwIiwiUm9vdCIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyb3V0aW5nUmVkdWNlciIsInJlZHVjZXJzIiwicm91dGluZyIsImF1dGhEYXRhIiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwidXNlcnMiLCJldmVudHMiLCJib29raW5ncyIsIm1pZGRsZXdhcmUiLCJ1bmRlZmluZWQiLCJlcnJvclJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJtZXNzYWdlIiwiU1RBUlRfTE9BRElORyIsIlNUT1BfTE9BRElORyIsIlJFUE9SVF9FUlJPUiIsIlNFVF9BVVRIX0RBVEEiLCJTSUdOX09VVCIsIlVTRVJTX1JFQ0VJVkVEIiwiVVNFUl9SRU1PVkVEIiwiRVZFTlRTX1JFQ0VJVkVEIiwiRVZFTlRfUkVNT1ZFRCIsIkJPT0tJTkdTX1JFQ0VJVkVEIiwiQk9PS0lOR19DQU5DRUxFRCIsIk5BVklHQVRFX1RPIiwibG9hZGluZ1JlZHVjZXIiLCJ1c2Vyc1JlZHVjZXIiLCJfIiwibWVyZ2UiLCJvbWl0IiwidWlkIiwiZXZlbnRzUmVkdWNlciIsImV2ZW50SWQiLCJjbG9uZWRCb29raW5ncyIsImNsb25lRGVlcCIsInNpemUiLCJhdXRoRGF0YVJlZHVjZXIiLCJlbWFpbCIsInBob3RvVVJMIiwiaXNBZG1pbiIsIkNvbnN0YW50cyIsImNyZWF0ZVJvdXRpbmdEYXRhIiwicGFnZUlkIiwicGFyYW1zIiwiY3VycmVudCIsIlJPVVRJTkciLCJQQUdFUyIsIkFVVEgiLCJoaXN0b3J5Iiwicm91dGluZ0RhdGEiLCJjb25jYXQiLCJsZW5ndGgiLCJoaXN0b3J5V2l0aG91dExhc3QiLCJzbGljZSIsIkhPTUUiLCJVU0VSUyIsIkdBTUVTIiwiQk9PS0lOR1MiLCJESVNUUklCVVRJT04iLCJFRElUX1VTRVJfSU5GTyIsIlVQREFURV9CT09LSU5HIiwiVVBEQVRFX0dBTUUiLCJHQU1FIiwiU1RBVFVTIiwiQ0xPU0VEIiwiT1BFTl9GT1JfTUVNQkVSUyIsIk9QRU5fRk9SX0FMTCIsIkZVTExZX0JPT0tFRCIsIlVTRVIiLCJNQVhfU0VBU09OX1RJQ0tFVFMiLCJQSE9ORV9QUkVGSVhFUyIsIlNUQVRJT05TIiwiVEVMX0FWSVYiLCJNT0RJSU4iLCJEQVRFX0FORF9USU1FIiwiZGF5cyIsIm1vbnRocyIsInllYXJzIiwiaG91cnMiLCJtaW51dGVzIiwiRElTVFJJQlVUSU9OX01FVEhPRFMiLCJFTUFJTCIsIlNNUyIsIlJFQ0lQSUVOVFNfVFlQRVMiLCJBTEwiLCJNRU1CRVJTX09OTFkiLCJCT09LRURfVE9fRVZFTlQiLCJESVNUUklCVVRJT05fVFlQRVMiLCJURU1QTEFURSIsIkNVU1RPTSIsIlRFTVBMQVRFUyIsIkVWRU5UX09QRU5fRk9SX01FTUJFUlMiLCJFVkVOVF9PUEVOX0ZPUl9BTEwiLCJDSEFOR0VfRVZFTlRfREVUQUlMUyIsIlRFQU1TIiwiSEFQT0VMX0pFUlVTQUxFTSIsImxhYmVsIiwibG9nbyIsIlJlYWN0UmV1ZHgiLCJhdXRoQWN0aW9ucyIsIlNwaW5uZXIiLCJUb3BCYXIiLCJBdXRoUGFnZSIsIkhvbWVQYWdlIiwiVXNlcnNQYWdlIiwiR2FtZXNQYWdlIiwiQm9va2luZ3NQYWdlIiwiRGlzdHJpYnV0aW9uUGFnZSIsIkVkaXRVc2VySW5mb1BhZ2UiLCJVcGRhdGVCb29raW5nUGFnZSIsIlVwZGF0ZUdhbWVQYWdlIiwibWFwU3RhdGVUb1Byb3BzIiwiY3VycmVudFBhZ2VJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBdXRoRGF0YSIsImdldFBhZ2VDb21wb25lbnQiLCJnZXRQYWdlVG9SZW5kZXIiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiY29ubmVjdCIsInVzZXJBY3Rpb25zIiwiZXZlbnRBY3Rpb25zIiwiYm9va2luZ0FjdGlvbnMiLCJsb2FkaW5nQWN0aW9ucyIsImVycm9yQWN0aW9ucyIsIm5hdmlnYXRpb25BY3Rpb25zIiwiVHJhbnNsYXRpb25zIiwiQVVUSF9FUlJPUl9DT0RFU19NQVAiLCJFUlJPUl9NRVNTQUdFUyIsIklOVkFMSURfRU1BSUwiLCJXRUFLX1BBU1NXT1JEIiwiRU1BSUxfSU5fVVNFIiwiV1JPTkdfUEFTU1dPUkQiLCJVU0VSX05PVF9GT1VORCIsInNldEF1dGhEYXRhIiwiZmV0Y2hBcHBEYXRhIiwidXNlciIsInJlYWQiLCJ0aGVuIiwiZ2V0IiwiYWxsIiwiZmV0Y2hVc2VycyIsImZldGNoRXZlbnRzIiwiZmV0Y2hCb29raW5ncyIsInVzZXJTaWduZWRPdXQiLCJzaWduT3V0Iiwic3RhcnRMb2FkaW5nIiwicmVzZXQiLCJjYXRjaCIsInJlcG9ydEVycm9yIiwiZGJFcnJvciIsImNvZGUiLCJmaW5hbGx5Iiwic3RvcExvYWRpbmciLCJsb2dpbldpdGhGYWNlYm9vayIsImxvZ2luV2l0aEdvb2dsZSIsImxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJnZXRTdGF0ZSIsImdldExvZ2dlZEluVXNlciIsInVzZXJJbmZvIiwiaXNFbXB0eSIsImNvbnNvbGUiLCJlcnJvciIsImluaXRpYWxpemVBcHAiLCJzZXRJbiIsInBhdGgiLCJkYXRhIiwicmVzb2x2ZSIsInJlamVjdCIsImRhdGFiYXNlIiwicmVmIiwic2V0Iiwib25jZSIsInNuYXBzaG90IiwidmFsIiwicHVzaCIsInVuaXF1ZUtleSIsImtleSIsInVwZGF0ZSIsInJlbW92ZSIsInByb3ZpZGVyIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhSZWRpcmVjdCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXRSZWRpcmVjdFJlc3VsdCIsInJlc3VsdCIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJVU0VSX0lORk9fS0VZUyIsIlBBVEhfTUFQIiwiVVNFUlNfSU5GTyIsIlNFQVNPTl9USUNLRVRTIiwiYnVpbGRVc2VyIiwic2Vhc29uVGlja2V0cyIsImZldGNoQWxsVXNlcnMiLCJ1c2VyUmVhZFByb21pc2VzIiwidXNlcnNJbmZvIiwidHJhbnNmb3JtIiwiYWNjIiwiaW5mbyIsImZldGNoU2luZ2xlVXNlciIsInVzZXJzUmVtb3ZlZCIsInVzZXJzUmVjZWl2ZWQiLCJmZXRjaFByb21pc2UiLCJ1cGRhdGVVc2VyIiwidXNlclVwZGF0ZVByb21pc2VzIiwicGljayIsImhhcyIsInJlbW92ZVVzZXIiLCJ1c2VyUmVtb3ZlUHJvbWlzZXMiLCJtYXAiLCJ1c2VyUGF0aCIsIkdFTkVSQUwiLCJHQU1FX0lURU0iLCJCT09LIiwiRURJVF9CT09LSU5HIiwiQ0FOQ0VMX0JPT0tJTkciLCJVU0VSU19QQUdFIiwiVElUTEUiLCJOT19VU0VSU19GT1VORCIsIkZJTFRFUiIsIlNFQVJDSCIsIlRBQlMiLCJNRU1CRVJTIiwiUkVRVUVTVFMiLCJOT05fTUVNQkVSUyIsIkFVVEhfUEFHRSIsIkZJRUxEUyIsIlBBU1NXT1JEIiwiUEFTU1dPUkRfQUdBSU4iLCJTVUJNSVRfQlROIiwiTE9HSU4iLCJSRUdJU1RFUiIsIkZPUkdPVF9QQVNTV09SRCIsIkxJTktTIiwiR09fVE9fTE9HSU4iLCJHT19UT19SRUdJU1RFUiIsIkdPX1RPX0ZPUkdPVF9QQVNTV09SRCIsIkVSUk9SUyIsIk5PVF9TQU1FX1BBU1NXT1JEIiwiSE9NRV9QQUdFIiwiTk9fT1BFTl9HQU1FUyIsIk9QRU5fR0FNRVMiLCJDTE9TRURfR0FNRVMiLCJVUERBVEVfVVNFUl9JTkZPX1BBR0UiLCJGSVJTVF9OQU1FIiwiTEFTVF9OQU1FIiwiUEhPTkVfUFJFRklYIiwiUEhPTkVfTlVNQkVSIiwiRkFWT1JJVEVfUElDS1VQX1NUQVRJT04iLCJSRVFVRVNUX0ZPUl9NRU1CRVJTSElQIiwiVE9HR0xFIiwiWUVTIiwiTk8iLCJVUERBVEVfQk9PS0lOR19QQUdFIiwiUEFJRF9TRUFUUyIsIkVYVFJBX1NFQVRTIiwiUElDS1VQX1RPR0dMRSIsIkRST1BPRkZfVE9HR0xFIiwiUElDS1VQX1NUQVRJT05fRFJPUERPV05fREVGQVVMVCIsIkdBTUVTX1BBR0UiLCJPUEVOIiwiTk9fR0FNRVNfTEFCRUwiLCJCT09LSU5HU19QQUdFIiwiUElDS1VQIiwiRFJPUE9GRiIsIlVQREFURV9HQU1FX1BBR0UiLCJHQU1FX0xBQkVMIiwiR0FNRV9QTEFDRUhPTERFUiIsIkRBVEVfTEFCRUwiLCJUSU1FIiwiR0FNRV9TVEFUVVMiLCJESVNUUklCVVRJT05fUEFHRSIsIkRJU1RSSUJVVElPTl9NRVRIT0QiLCJDT05URU5UIiwiRk9STV9GUkFNRSIsIlNVQk1JVCIsIlJFTU9WRSIsIkVWRU5UX0tFWVMiLCJFVkVOVFNfUEFUSCIsImV2ZW50UmVtb3ZlZCIsImV2ZW50c1JlY2VpdmVkIiwiY3JlYXRlRXZlbnQiLCJldmVudCIsInVwZGF0ZUV2ZW50IiwiZXZlbnRUb1VwZGF0ZSIsInJlbW92ZUV2ZW50IiwiQk9PS0lOR19EQVRBX0tFWVMiLCJCT09LSU5HU19QQVRIIiwiZmV0Y2hVc2VyQm9va2luZ3MiLCJ1c2VyQm9va2luZ3MiLCJmZXRjaEFsbEJvb2tpbmdzIiwiYm9va2luZ3NSZWNlaXZlZCIsImJvb2tpbmdzQ2FuY2VsZWQiLCJ1cGRhdGVCb29raW5nIiwiYm9va2luZ0RhdGEiLCJib29raW5nRGF0YVRvVXBkYXRlIiwiY2FuY2VsQm9va2luZyIsIm5hdmlnYXRlVG8iLCJuYXZpZ2F0ZUJhY2siLCJyZXBsYWNlIiwiY2xhc3NOYW1lcyIsIkxvZ28iLCJpc0xvYWRpbmciLCJvdmVybGF5Q2xhc3MiLCJvdmVybGF5IiwiaGlkZSIsImJvb2wiLCJ3aWR0aCIsIm9wYWNpdHkiLCJudW1iZXIiLCJoZWlnaHQiLCJyb3V0aW5nQWN0aW9ucyIsIm1lbnVQYWdlc0lkcyIsImN1cnJlbnRVc2VyIiwiZ2V0VXNlclRpdGxlIiwiZmlyc3ROYW1lIiwiY3JlYXRlSGVhZGVyIiwiYmluZCIsImNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSIsInRvZ2dsZU1lbnVWaXNpYmlsaXR5IiwiY3JlYXRlTWVudSIsImlzTWVudVZpc2libGUiLCJjcmVhdGVEZXNrdG9wTWVudUl0ZW0iLCJpdGVtQ2xhc3NlcyIsImFjdGl2ZSIsImJ1dHRvbiIsInNtYWxsIiwiY3JlYXRlTW9iaWxlTWVudUl0ZW0iLCJvbk1vYmlsZU1lbnVDbGlja2VkIiwiY3JlYXRlRGVza3RvcE1lbnUiLCJjcmVhdGVNb2JpbGVNZW51Iiwic2V0U3RhdGUiLCJsb2dpbldpdGhFbWFpbCIsInNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQiLCJpc0xvZ2luTW9kZSIsImF1dGhNb2RlIiwiaXNSZWdpc3Rlck1vZGUiLCJpc0Zvcm1WYWxpZCIsInBhc3N3b3JkQWdhaW4iLCJjcmVhdGVMb2dvIiwiY3JlYXRlU29jaWFsQnV0dG9uc1NlY3Rpb24iLCJjcmVhdGVFcnJvclNlY3Rpb24iLCJjcmVhdGVJbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZXRCdXR0b25MYWJlbCIsImNyZWF0ZVN1Ym1pdEJ1dHRvbiIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJjcmVhdGVMaW5rc1NlY3Rpb24iLCJuYXZUb0xvZ2luIiwibmF2VG9SZWdpc3RlciIsIm5hdlRvRm9yZ290UGFzc3dvcmQiLCJjcmVhdGVMb2dpblNjcmVlbkxpbmtzIiwiY3JlYXRlTk9OTG9naW5TY3JlZW5MaW5rcyIsImUiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImlzRXF1YWwiLCJvbkF1dGhNb2RlQ2hhbmdlIiwiY3JlYXRlTmF2RnVuYyIsIkV2ZW50SXRlbSIsImdhbWVzIiwibmF2aWdhdGVUb1VwZGF0ZUJvb2tpbmciLCJnYW1lSWQiLCJwYXJzZUV2ZW50RGF0ZSIsImdhbWUiLCJldmVudERhdGUiLCJEYXRlIiwieWVhciIsIm1vbnRoIiwiZGF5Iiwic2V0TW9udGgiLCJnZXRNb250aCIsImlzRnV0dXJlRXZlbnQiLCJub3ciLCJnZXRDbG9zZWRHYW1lc0FyciIsImNoYWluIiwib21pdEJ5Iiwic3RhdHVzIiwic29ydEJ5IiwiZ2FtZURhdGEiLCJnZXRPcGVuR2FtZXMiLCJjcmVhdGVNb2JpbGVOb0dhbWVzTWVzc2FnZVNlY3Rpb24iLCJjcmVhdGVHYW1lc0xpc3RzIiwib3BlbkdhbWVzIiwiY2xvc2VkR2FtZXNBcnIiLCJvbkJvb2tpbmciLCJvbkNhbmNlbEJvb2tpbmciLCJiaW5kT25HYW1lSXRlbUNsaWNrIiwiZm4iLCJjcmVhdGVPcGVuR2FtZXNMaXN0IiwiY3JlYXRlQ2xvc2VkR2FtZXNMaXN0IiwiaXNCb29raW5nRW5hYmxlZCIsIm93blByb3BzIiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsInR5cGVJZCIsImRhdGUiLCJ0aW1lIiwiaG91ciIsIm1pbnV0ZSIsImlzQm9va2luZ0FsbG93ZWQiLCJpc0Jvb2tlZCIsImhhc0luIiwiY3JlYXRlVGVhbUxvZ29zIiwiaG9tZSIsImF3YXkiLCJjcmVhdGVFdmVudFRpbWVBbmREYXRlIiwiaXNPcGVuRm9yQm9va2luZyIsImNyZWF0ZUZ1bGx5Qm9va2VkTGFiZWwiLCJjcmVhdGVCb29raW5nQnV0dG9uIiwiYm9va0J1dHRvbiIsImVkaXRCb29raW5nQnV0dG9uIiwibm9vcCIsImNyZWF0ZUJvb2tpbmdDYW5jZWxsYXRpb25CdXR0b24iLCJjcmVhdGVBY3Rpb25zQnV0dG9ucyIsImlzRnVsbHlCb29rZWQiLCJzaGFwZSIsIkxpc3RJdGVtIiwiUGFnZVRpdGxlIiwiRklMVEVSUyIsInF1ZXJ5IiwiZmlsdGVyIiwic2VhcmNoIiwibmF2VG9FZGl0VXNlciIsImNoYW5nZUZpbHRlciIsImNoYW5nZVNlYXJjaFF1ZXJ5IiwiZGVib3VuY2UiLCJjb3VudE1lbWJlcnMiLCJwaWNrQnkiLCJwaWNrVXNlcnNGdW5jdGlvbnMiLCJ2YWx1ZXMiLCJzdW1CeSIsImNvdW50UmVxdWVzdHMiLCJjb3VudE5vbk1lbWJlcnMiLCJjb3VudEFjY29yZGluZ1RvRmlsdGVycyIsImxhc3ROYW1lIiwiZ2V0VXNlclN1YnRpdGxlcyIsInBob25lUHJlZml4IiwicGhvbmVOdW1iZXIiLCJnZXRVc2VySW1hZ2UiLCJyZXF1ZXN0Rm9yTWVtYmVyc2hpcCIsImdldFZpc2libGVVc2VycyIsInNlYXJjaFF1ZXJ5Iiwic3RhcnRzV2l0aCIsImNyZWF0ZUZpbHRlciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImhhbmRsZVNlYXJjaFF1ZXJ5Q2hhbmdlIiwiZmlsdGVyQ291bnRzIiwiY3JlYXRlRmlsdGVyVGFicyIsImNyZWF0ZVRleHRJbnB1dCIsImNyZWF0ZVVzZXJzTGlzdCIsInVzZXJzQXJyIiwib25Vc2VyQ2xpY2siLCJvbkl0ZW1DbGljayIsIml0ZW1zIiwidXNlckRlZiIsImNyZWF0ZU5vVXNlcnNNZXNzYWdlIiwibmV4dFByb3BzIiwidmlzaWJsZVVzZXJzQXJyIiwib25DbGljayIsImltYWdlU3JjIiwidGl0bGUiLCJzdWJ0aXRsZXMiLCJzdWJ0aXRsZSIsImFycmF5IiwiZWRpdEdhbWUiLCJjcmVhdGVHYW1lIiwiZ2V0VmlzaWJsZUdhbWVzIiwiZ2V0Q2xvc2VkR2FtZXMiLCJnZXRHYW1lU3VidGl0bGVzIiwiY3JlYXRlVGFicyIsIm9uRmlsdGVyQ2hhbmdlIiwib25UYWJDbGljayIsInNlbGVjdGVkRmlsdGVyIiwiY3JlYXRlTm9HYW1lc01lc3NhZ2UiLCJjcmVhdGVQbHVzQnV0dG9uIiwib25DcmVhdGVHYW1lIiwib25GaWx0ZXJDaGFuZ2VkIiwidmlzaWJsZUdhbWVzIiwiZmluZEtleSIsImVkaXRCb29raW5nIiwiY2hhbmdlR2FtZUlkIiwiZ2V0Qm9va2luZ1RpdGxlIiwiZ2V0Qm9va2luZ1Bob25lIiwiZ2V0Qm9va2luZ1N1YnRpdGxlcyIsImJvb2tpbmciLCJwYWlkU2VhdHMiLCJleHRyYVNlYXRzIiwicGlja1VwIiwiZHJvcE9mZiIsImdldEJvb2tpbmdJbWFnZSIsImdldFBpY2tVcE1hcCIsInRsdiIsIm1vZGlpbiIsImdldERyb3BPZmZNYXAiLCJnZXRWaXNpYmxlQm9va2luZ3MiLCJib29raW5nRm9yRXZlbnRNYXAiLCJtYXBWYWx1ZXMiLCJpc1VuZGVmaW5lZCIsImNvdW50UGlja3VwcyIsInZpc2libGVCb29raW5ncyIsInRsdlBpY2tVcHNQYWlkIiwidGx2UGlja1Vwc0V4dHJhIiwibW9kaWluUGlja1Vwc1BhaWQiLCJtb2RpaW5QaWNrVXBzRXh0cmEiLCJjb3VudERyb3BPZmZzIiwidGx2RHJvcE9mZnNQYWlkIiwidGx2RHJvcE9mZnNFeHRyYSIsIm1vZGlpbkRyb3BPZmZzUGFpZCIsIm1vZGlpbkRyb3BPZmZzRXh0cmEiLCJjcmVhdGVQYWdlVGl0bGUiLCJjcmVhdGVGaWx0ZXJTZWN0aW9uIiwib25HYW1lSWRDaGFuZ2UiLCJ0YWIiLCJvblNlbGVjdENoYW5nZSIsImNyZWF0ZUJvb2tpbmdUYWJsZUZvclByaW50IiwidGx2Qm9va2luZ3MiLCJtb2RpaW5Cb29raW5ncyIsImlzUGlja1VwIiwiY3JlYXRlVGl0bGVSb3ciLCJjcmVhdGVUTFZCb29raW5nc1RpdGxlIiwiY3JlYXRlVExWQm9va2luZ3NSb3dzIiwiY3JlYXRlTW9kaWluQm9va2luZ3NUaXRsZSIsImNyZWF0ZU1vZGlpbkJvb2tpbmdzUm93cyIsImNyZWF0ZVBpY2tVcHNMaXN0Iiwib25Cb29raW5nQ2xpY2siLCJ0bHZQaWNrVXAiLCJtb2RpaW5QaWNrVXAiLCJ0bHZQaWNrVXBzSXRlbXMiLCJtaWRpaW5QaWNrVXBzSXRlbXMiLCJjcmVhdGVUbHZQaWNrdXBzTGlzdCIsImNyZWF0ZU1vZGlpblBpY2t1cHNMaXN0IiwiY3JlYXRlRHJvcE9mZkxpc3QiLCJ0bHZEcm9wT2ZmIiwibW9kaWluRHJvcE9mZiIsInRsdkRyb3BPZmZJdGVtcyIsIm1pZGlpbkRyb3BPZmZJdGVtcyIsImNyZWF0ZVRsdkRyb3BPZmZMaXN0IiwiY3JlYXRlTW9kaWluRHJvcE9mZkxpc3QiLCJpc1JlcXVyaWVkIiwiZGlzdHJpYnV0aW9uQWN0aW9ucyIsInNlbmRUZW1wbGF0ZUVtYWlsIiwicmVjaXBpZW50cyIsInRlbXBsYXRlSWQiLCJzdWJzdGl0dXRpb25zIiwic2VuZEN1c3RvbUVtYWlsIiwic3ViamVjdCIsImNvbnRlbnQiLCJzZW5kU01TIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZGlzdHJpYnV0aW9uTWV0aG9kIiwicmVjaXBpZW50c1R5cGUiLCJkaXN0cmlidXRpb25UeXBlIiwibGFzdCIsImtleXMiLCJnZXRNZW1iZXJzVXNlcnNPbmx5IiwiZ2V0Qm9va2VkVXNlcnNPbmx5IiwiZ2V0UmVjaXBpZW50cyIsInJlY2lwaWVudHNVc2VycyIsInN1YnNjcmliZU1haWwiLCJnZXRVc2Vyc0VtYWlscyIsImdldEV2ZW50U3Vic3RpdHV0aW9ucyIsInByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQiLCJnZXRVc2Vyc1Bob25lTnVtYmVycyIsImNyZWF0ZURpc3RyaWJ1dGlvbk1ldGhvZElucHV0Iiwib25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2UiLCJjcmVhdGVSZWNpcGllbnRzVHlwZUlucHV0Iiwib25SZWNpcGllbnRzVHlwZUNoYW5nZSIsImNyZWF0ZURpc3RyaWJ1dGlvblR5cGVJbnB1dCIsIm9uRGlzdHJpYnV0aW9uVHlwZUNoYW5nZSIsImNyZWF0ZVRlbXBsYXRlU2VsZWN0aW9uIiwib25UZW1wbGF0ZUlkQ2hhbmdlIiwiY3JlYXRlR2FtZXNTZWxlY3Rpb24iLCJvbkdhbWVDaGFuZ2UiLCJvcHRpb25zIiwiY3JlYXRlQ3VzdG9tVGl0bGUiLCJvblN1YmplY3RDaGFuZ2VkIiwiY3JlYXRlQ3VzdG9tQ29udGVudCIsIm9uQ29udGVudENoYW5nZWQiLCJzaG91bGRTaG93RGlzdHJpYnV0aW9uVHlwZUlucHV0Iiwic2hvdWxkU2hvd1RlbXBsYXRlU2VsZWN0aW9uIiwic2hvdWxkQ3JlYXRlQ3VzdG9tVGl0bGUiLCJzaG91bGRTaG93Q3VzdG9tQ29udGVudCIsIkVNQUlMUyIsInRvIiwiVXNlckZvcm0iLCJ1aWRUb0VkaXQiLCJnb0hvbWVBZnRlckVkaXRpbmciLCJuYXZpZ2F0ZUhvbWUiLCJFZGl0b3JVc2VySW5mb1BhZ2UiLCJvbkZvcm1DbG9zZSIsIkZvcm1GcmFtZSIsImVtcHR5VXNlciIsInN0YXRpb24iLCJzdWJzY3JpYmVTTVMiLCJnZXRFbXB0eVVzZXJJbmZvIiwiYXNzaWduIiwiaXNBZG1pbk1vZGUiLCJhbGxvd1VzZXJSZW1vdmUiLCJjcmVhdGVBZG1pblNlY3Rpb24iLCJvbk51bWJlckNoYW5nZSIsInRpbWVzIiwiaSIsImNyZWF0ZVVzZXJOYW1lSW5wdXRzIiwib25UZXh0Q2hhbmdlIiwiY3JlYXRlRW1haWxJbnB1dCIsImNyZWF0ZVBob25lTnVtYmVySW5wdXRzIiwicHJlZml4IiwiY3JlYXRlUGlja3VwU3RhdGlvblJvdyIsIm9uQm9vbGVhbkNoYW5nZSIsImNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCIsImNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQiLCJkaXNwbGF5IiwiY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzIiwiaGFzQWxsUmVxdWlyZWRJbmZvIiwicmVxdWlyZWRJbmZvIiwic29tZSIsImhhc1ZhbGlkUGhvbmVOdW1iZXIiLCJoYXNSZXF1ZXN0Rm9yTWVtYmVyc2hpcFByb3BlcnR5Iiwib25LZXlQcmVzcyIsImNoZWNrZWQiLCJCb29sZWFuIiwicGFyc2VJbnQiLCJpc0Z1bmN0aW9uIiwib25DbG9zZSIsIm9uUmVtb3ZlIiwiY2xvbmUiLCJjcmVhdGVSZW1vdmVCdXR0b24iLCJjaGlsZHJlbiIsImVtcHR5Qm9va2luZyIsInJvdXRpbmdQYXJhbXMiLCJjcmVhdGVQYXNzZW5nZXJzU2VjdGlvbiIsIm9uUGFpZFNlYXRDaGFuZ2UiLCJvbkV4dHJhU2VhdENoYW5nZSIsImNyZWF0ZVBhaWRTZWF0c0lucHV0IiwiY3JlYXRlRXh0cmFTZWF0c0lucHV0IiwiY3JlYXRlUGlja3VwU2VjdGlvbiIsInBpY2tVcEVuYWJsZWQiLCJwaWNrVXBTdGF0aW9uIiwidG9nZ2xlUGlja1VwIiwib25QaWNrdXBTdGF0aW9uQ2hhbmdlIiwiY3JlYXRlRHJvcG9mZlNlY3Rpb24iLCJkcm9wT2ZmRW5hYmxlZCIsImRyb3BPZmZTdGF0aW9uIiwidG9nZ2xlRHJvcE9mZiIsIm9uRHJvcE9mZlN0YXRpb25DaGFuZ2UiLCJvblBpY2tVcFN0YXRpb25DaGFuZ2UiLCJib29raW5nVG9VcGRhdGUiLCJib29raW5nSW5pdGlhbFN0YXRlIiwiZGVmYXVsdHMiLCJERUZBVUxUX0dBTUVfTE9HTyIsImVtcHR5RXZlbnQiLCJwYXJzZURhdGVWYWx1ZSIsImpvaW4iLCJwYXJzZVRpbWVWYWx1ZSIsInVwZGF0ZUdhbWUiLCJyZW1vdmVHYW1lIiwiY3JlYXRlR2FtZUltYWdlIiwiY3JlYXRlR2FtZVRpdGxlU2VjdGlvbiIsIm9uVHlwZUlkQ2hhbmdlIiwidGVhbURhdGEiLCJpZCIsImNyZWF0ZUluZm9XaXRob3V0U3VwcG9ydGVkSW5wdXRzIiwib25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZSIsImNyZWF0ZUluZm9XaXRoU3VwcG9ydGVkSW5wdXRzIiwib25EYXRlQ2hhbmdlIiwib25UaW1lQ2hhbmdlIiwiY3JlYXRlR2FtZVN0YXR1c1NlY3Rpb24iLCJvbkdhbWVTdGF0dXNDaGFuZ2UiLCJzcGxpdCIsImRhdGVJbnB1dFN1cHBvcnRlZCIsInRpbWVJbnB1dFN1cHBvcnRlZCIsImNoZWNrSWZIdG1sNVN1cHBvcnRlZCIsInN1cHBvcnRlZElucHV0VHlwZXMiLCJ0ZXN0UmVzdWx0IiwidGVzdFN0cmluZyIsImVhY2giLCJpbnB1dFR5cGUiLCJpbnB1dCIsImlzU3VwcG9ydGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTMwYTExYjA4NWZkYzA0ZWUyNjIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUm9vdCBmcm9tICcuL2NvbXBvbmVudHMvcm9vdCc7XG5cbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICdjb25maWcnO1xuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi91dGlscy9jbGllbnREQic7XG5cbmNsaWVudERCLmluaXRpYWxpemUoY29uZmlnLmZpcmViYXNlKTtcblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm9vdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IG1ha2VTdG9yZSA9IHJlcXVpcmUoJy4uL3JlZHV4L21ha2VTdG9yZScpO1xuXG5jb25zdCBBcHAgPSByZXF1aXJlKCcuL2FwcCcpO1xuXG5jbGFzcyBSb290IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3RSZWR1eC5Qcm92aWRlciBzdG9yZT17bWFrZVN0b3JlKCl9PlxuICAgICAgICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgICAgIDwvUmVhY3RSZWR1eC5Qcm92aWRlcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm9vdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9yb290LmpzeCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0UmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBlcnJvclJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9lcnJvclJlZHVjZXInO1xuaW1wb3J0IGxvYWRpbmdSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvbG9hZGluZ1JlZHVjZXInO1xuaW1wb3J0IHVzZXJzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3VzZXJzUmVkdWNlcic7XG5pbXBvcnQgZXZlbnRzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2V2ZW50c1JlZHVjZXInO1xuaW1wb3J0IGJvb2tpbmdzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2Jvb2tpbmdzUmVkdWNlcic7XG5pbXBvcnQgYXV0aERhdGFSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYXV0aERhdGFSZWR1Y2VyJztcblxuY29uc3Qgcm91dGluZ1JlZHVjZXIgPSByZXF1aXJlKCcuL3JlZHVjZXJzL3JvdXRpbmdSZWR1Y2VyJyk7XG5cbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuICBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgcm91dGluZzogcm91dGluZ1JlZHVjZXIsXG4gICAgYXV0aERhdGE6IGF1dGhEYXRhUmVkdWNlcixcbiAgICBlcnJvck1zZzogZXJyb3JSZWR1Y2VyLFxuICAgIGxvYWRpbmc6IGxvYWRpbmdSZWR1Y2VyLFxuICAgIHVzZXJzOiB1c2Vyc1JlZHVjZXIsXG4gICAgZXZlbnRzOiBldmVudHNSZWR1Y2VyLFxuICAgIGJvb2tpbmdzOiBib29raW5nc1JlZHVjZXJcbiAgfSk7XG5cbiAgY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShcbiAgICB0aHVua1xuICApO1xuXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgdW5kZWZpbmVkLCBtaWRkbGV3YXJlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L21ha2VTdG9yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVkdXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNUQVJUX0xPQURJTkcsIFJFUE9SVF9FUlJPUiB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXJyb3JSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVBPUlRfRVJST1I6XG4gICAgICByZXR1cm4gYWN0aW9uLm1lc3NhZ2U7XG4gICAgY2FzZSBTVEFSVF9MT0FESU5HOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzIiwiZXhwb3J0IGNvbnN0IFNUQVJUX0xPQURJTkcgPSAnU1RBUlRfTE9BRElORyc7XG5leHBvcnQgY29uc3QgU1RPUF9MT0FESU5HID0gJ1NUT1BfTE9BRElORyc7XG5cbmV4cG9ydCBjb25zdCBSRVBPUlRfRVJST1IgPSAnUkVQT1JUX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IFNFVF9BVVRIX0RBVEEgPSAnU0VUX0FVVEhfREFUQSc7XG5leHBvcnQgY29uc3QgU0lHTl9PVVQgPSAnU0lHTl9PVVQnO1xuXG5leHBvcnQgY29uc3QgVVNFUlNfUkVDRUlWRUQgPSAnVVNFUlNfUkVDRUlWRUQnO1xuZXhwb3J0IGNvbnN0IFVTRVJfUkVNT1ZFRCA9ICdVU0VSX1JFTU9WRUQnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRTX1JFQ0VJVkVEID0gJ0VWRU5UU19SRUNFSVZFRCc7XG5leHBvcnQgY29uc3QgRVZFTlRfUkVNT1ZFRCA9ICdFVkVOVF9SRU1PVkVEJztcblxuZXhwb3J0IGNvbnN0IEJPT0tJTkdTX1JFQ0VJVkVEID0gJ0JPT0tJTkdTX1JFQ0VJVkVEJztcbmV4cG9ydCBjb25zdCBCT09LSU5HX0NBTkNFTEVEID0gJ0JPT0tJTkdfQ0FOQ0VMRUQnO1xuXG5leHBvcnQgY29uc3QgTkFWSUdBVEVfVE8gPSAnTkFWSUdBVEVfVE8nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvblR5cGVzLmpzIiwiaW1wb3J0IHsgU1RBUlRfTE9BRElORywgU1RPUF9MT0FESU5HIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkaW5nUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU1RBUlRfTE9BRElORzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgU1RPUF9MT0FESU5HOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvbG9hZGluZ1JlZHVjZXIuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBVU0VSU19SRUNFSVZFRCwgVVNFUl9SRU1PVkVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlcnNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVU0VSU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLnVzZXJzKTtcbiAgICBjYXNlIFVTRVJfUkVNT1ZFRDpcbiAgICAgIHJldHVybiBfLm9taXQoc3RhdGUsIGFjdGlvbi51aWQpO1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiX1wiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBFVkVOVFNfUkVDRUlWRUQsIEVWRU5UX1JFTU9WRUQsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudHNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBFVkVOVFNfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi5ldmVudHMpO1xuICAgIGNhc2UgRVZFTlRfUkVNT1ZFRDpcbiAgICAgIHJldHVybiBfLm9taXQoc3RhdGUsIGFjdGlvbi5ldmVudElkKTtcbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2V2ZW50c1JlZHVjZXIuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBCT09LSU5HU19SRUNFSVZFRCwgQk9PS0lOR19DQU5DRUxFRCwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50c1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEJPT0tJTkdTX1JFQ0VJVkVEOlxuICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24uYm9va2luZ3MpO1xuICAgIGNhc2UgQk9PS0lOR19DQU5DRUxFRDoge1xuICAgICAgY29uc3QgY2xvbmVkQm9va2luZ3MgPSBfLmNsb25lRGVlcChzdGF0ZSk7XG4gICAgICBkZWxldGUgY2xvbmVkQm9va2luZ3NbYWN0aW9uLnVpZF1bYWN0aW9uLmV2ZW50SWRdO1xuICAgICAgaWYgKF8uc2l6ZShjbG9uZWRCb29raW5nc1thY3Rpb24udWlkXSkgPT09IDApIHtcbiAgICAgICAgZGVsZXRlIGNsb25lZEJvb2tpbmdzW2FjdGlvbi51aWRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb25lZEJvb2tpbmdzO1xuICAgIH1cbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2Jvb2tpbmdzUmVkdWNlci5qcyIsImltcG9ydCB7IFNFVF9BVVRIX0RBVEEsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhEYXRhUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX0FVVEhfREFUQTpcbiAgICAgIHJldHVybiB7IHVpZDogYWN0aW9uLnVpZCwgZW1haWw6IGFjdGlvbi5lbWFpbCwgcGhvdG9VUkw6IGFjdGlvbi5waG90b1VSTCwgaXNBZG1pbjogYWN0aW9uLmlzQWRtaW4gfTtcbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVkdXhUaHVuaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlZHV4VGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRpbmdEYXRhKHBhZ2VJZCwgcGFyYW1zKSB7XG4gIHJldHVybiB7IHBhZ2VJZCwgcGFyYW1zOiBwYXJhbXMgfHwge30gfVxufVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGN1cnJlbnQ6IGNyZWF0ZVJvdXRpbmdEYXRhKENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkFVVEgsIHt9KSxcbiAgaGlzdG9yeTogW1xuICAgIGNyZWF0ZVJvdXRpbmdEYXRhKENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkFVVEgsIHt9KVxuICBdXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICBzdGF0ZSA9IHN0YXRlIHx8IGluaXRpYWxTdGF0ZTtcbiAgYWN0aW9uID0gYWN0aW9uIHx8IHt9O1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdOQVZJR0FURV9UTyc6IHtcbiAgICAgIGNvbnN0IHJvdXRpbmdEYXRhID0gY3JlYXRlUm91dGluZ0RhdGEoYWN0aW9uLnBhZ2VJZCwgYWN0aW9uLnBhcmFtcyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnQ6IHJvdXRpbmdEYXRhLFxuICAgICAgICBoaXN0b3J5OiBzdGF0ZS5oaXN0b3J5LmNvbmNhdChbIHJvdXRpbmdEYXRhIF0pXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlICdOQVZJR0FURV9CQUNLJzoge1xuICAgICAgaWYgKHN0YXRlLmhpc3RvcnkubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBoaXN0b3J5V2l0aG91dExhc3QgPSBzdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjdXJyZW50OiBoaXN0b3J5V2l0aG91dExhc3Quc2xpY2UoLTEpWzBdLFxuICAgICAgICAgIGhpc3Rvcnk6IGhpc3RvcnlXaXRob3V0TGFzdFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgJ1JFUExBQ0VfUk9VVElORyc6IHtcbiAgICAgIGNvbnN0IGhpc3RvcnlXaXRob3V0TGFzdCA9IHN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgLTEpO1xuICAgICAgY29uc3QgY3VycmVudCA9IGNyZWF0ZVJvdXRpbmdEYXRhKGFjdGlvbi5wYWdlSWQgfHwgc3RhdGUuY3VycmVudC5wYWdlSWQsIGFjdGlvbi5wYXJhbXMgfHwgc3RhdGUuY3VycmVudC5wYXJhbXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgICAgaGlzdG9yeTogaGlzdG9yeVdpdGhvdXRMYXN0LmNvbmNhdChbY3VycmVudF0pXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlICdSRVNFVF9ST1VUSU5HJzoge1xuICAgICAgY29uc3Qgcm91dGluZ0RhdGEgPSBjcmVhdGVSb3V0aW5nRGF0YShhY3Rpb24ucGFnZUlkLCBhY3Rpb24ucGFyYW1zKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudDogcm91dGluZ0RhdGEsXG4gICAgICAgIGhpc3Rvcnk6IFsgcm91dGluZ0RhdGEgXVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3JvdXRpbmdSZWR1Y2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJPVVRJTkc6IHtcbiAgICBQQUdFUzoge1xuICAgICAgSE9NRTogJ2hvbWUnLFxuICAgICAgQVVUSDogJ2F1dGgnLFxuICAgICAgVVNFUlM6ICd1c2VycycsXG4gICAgICBHQU1FUzogJ2dhbWVzJyxcbiAgICAgIEJPT0tJTkdTOiAnYm9va2luZ3MnLFxuICAgICAgRElTVFJJQlVUSU9OOiAnZGlzdHJpYnV0aW9uJyxcbiAgICAgIEVESVRfVVNFUl9JTkZPOiAnZWRpdFVzZXJJbmZvJyxcbiAgICAgIFVQREFURV9CT09LSU5HOiAndXBkYXRlQm9va2luZycsXG4gICAgICBVUERBVEVfR0FNRTogJ3VwZGF0ZUdhbWUnXG4gICAgfVxuICB9LFxuICBHQU1FOiB7XG4gICAgU1RBVFVTOiB7XG4gICAgICBDTE9TRUQ6ICdjbG9zZWQnLFxuICAgICAgT1BFTl9GT1JfTUVNQkVSUzogJ29wZW5Gb3JNZW1iZXJzJyxcbiAgICAgIE9QRU5fRk9SX0FMTDogJ29wZW5Gb3JBbGwnLFxuICAgICAgRlVMTFlfQk9PS0VEOiAnZnVsbHlCb29rZWQnXG4gICAgfVxuICB9LFxuICBVU0VSOiB7XG4gICAgTUFYX1NFQVNPTl9USUNLRVRTOiA3LFxuICAgIFBIT05FX1BSRUZJWEVTOiBbJzA1MCcsICcwNTInLCAnMDUzJywgJzA1NCcsICcwNTUnLCAnMDU3JywgJzA1OCddLFxuICB9LFxuICBTVEFUSU9OUzoge1xuICAgIFRFTF9BVklWOiAndGx2JyxcbiAgICBNT0RJSU46ICdtb2RpaW4nXG4gIH0sXG4gIERBVEVfQU5EX1RJTUU6IHtcbiAgICBkYXlzOiBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJywgJzI0JywgJzI1JywgJzI2JywgJzI3JywgJzI4JywgJzI5JywgJzMwJywgJzMxJ10sXG4gICAgbW9udGhzOiBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ10sXG4gICAgeWVhcnM6IFsnMTYnLCAnMTcnXSxcbiAgICBob3VyczogWycwMCcsICcwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMyddLFxuICAgIG1pbnV0ZXM6IFsnMDAnLCAnMDUnLCAnMTAnLCAnMTUnLCAnMjAnLCAnMjUnLCAnMzAnLCAnMzUnLCAnNDAnLCAnNDUnLCAnNTAnLCAnNTUnXVxuICB9LFxuICBESVNUUklCVVRJT046IHtcbiAgICBESVNUUklCVVRJT05fTUVUSE9EUzoge1xuICAgICAgRU1BSUw6ICdlbWFpbCcsXG4gICAgICBTTVM6ICdzbXMnXG4gICAgfSxcbiAgICBSRUNJUElFTlRTX1RZUEVTOiB7XG4gICAgICBBTEw6ICdhbGwnLFxuICAgICAgTUVNQkVSU19PTkxZOiAnbWVtYmVyc09ubHknLFxuICAgICAgQk9PS0VEX1RPX0VWRU5UOiAnYm9va2VkVG9FdmVudCdcbiAgICB9LFxuICAgIERJU1RSSUJVVElPTl9UWVBFUzoge1xuICAgICAgVEVNUExBVEU6ICd0ZW1wbGF0ZScsXG4gICAgICBDVVNUT006ICdjdXN0b20nXG4gICAgfSxcbiAgICBURU1QTEFURVM6IHtcbiAgICAgIEVWRU5UX09QRU5fRk9SX01FTUJFUlM6ICc0ZmFiNmI5Mi1iZjYxLTQ4ZjEtYjEzYi1iYzcwMmVkNzg2OTUnLFxuICAgICAgRVZFTlRfT1BFTl9GT1JfQUxMOiAnZGJlM2UwZTQtYmIwZS00MWFkLWJmMTItNWJlNjRhMzBmM2I3JyxcbiAgICAgIENIQU5HRV9FVkVOVF9ERVRBSUxTOiAnMTcwZmNkNGYtZGYyZS00NGRkLWI3NjAtNjkzZDA0ZmRkMDdjJ1xuICAgIH1cbiAgfSxcbiAgVEVBTVM6IHtcbiAgICBIQVBPRUxfSkVSVVNBTEVNOiB7XG4gICAgICBsYWJlbDogJ9eU16TXldei15wg15nXqNeV16nXnNeZ150nLFxuICAgICAgbG9nbzogJ2h0dHA6Ly9oYXBvZWwuY28uaWwvc2l0ZXMvZGVmYXVsdC9maWxlcy9sb2dvMTIweDEyMC5wbmcnXG4gICAgfSxcbiAgICAnaGFwb2VsLXRsdic6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYXBvZWx0YS5wbmcnLFxuICAgICAgbGFiZWw6ICfXlNek15XXotecINeq15wg15DXkdeZ15EnXG4gICAgfSxcbiAgICAnbWFjY2FiaS10bHYnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fbWFjY2FiaS5wbmcnLFxuICAgICAgbGFiZWw6ICfXnteb15HXmSDXqtecINeQ15HXmdeRJ1xuICAgIH0sXG4gICAgJ2hlcnplbGl5YSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19zaGFyb24ucG5nJyxcbiAgICAgIGxhYmVsOiAn15HXoNeZINeU16jXptec15nXlCdcbiAgICB9LFxuICAgICdraXJ5YXQtZ2F0Jzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL0ltYWdlcy90ZWFtcy9iaWdHYXQucG5nJyxcbiAgICAgIGxhYmVsOiAn157Xm9eR15kg16fXqNeZ16og15LXqidcbiAgICB9LFxuICAgICdnaWxib2EnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fR2FsaWwucG5nJyxcbiAgICAgIGxhYmVsOiAn15LXnNeZ15wv15LXnNeR15XXoidcbiAgICB9LFxuICAgICduYWhhcml5YSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19uYWhhcmlhLnBuZycsXG4gICAgICBsYWJlbDogJ9ei15nXqNeV16DXmSDXoNeU16jXmdeUJ1xuICAgIH0sXG4gICAgJ2hvbG9uJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9hcnRpY2xlcy9sb2dvX2hoLnBuZycsXG4gICAgICBsYWJlbDogJ9eU16TXldei15wg15fXldec15XXnydcbiAgICB9LFxuICAgICdhc2hkb2QnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fYXNoZG9kLnBuZycsXG4gICAgICBsYWJlbDogJ9ee15vXkdeZINeQ16nXk9eV15MnXG4gICAgfSxcbiAgICAnaGFpZmEnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29faGFpZmEucG5nJyxcbiAgICAgIGxhYmVsOiAn157Xm9eR15kg15fXmdek15QnXG4gICAgfSxcbiAgICAncmlzaG9uJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3Jpc2hvbi5wbmcnLFxuICAgICAgbGFiZWw6ICfXnteb15HXmSDXqNeQ16nXldefINec16bXmdeV158nXG4gICAgfSxcbiAgICAnZWlsYXQnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fZWlsYXQucG5nJyxcbiAgICAgIGxhYmVsOiAn15TXpNeV16LXnCDXkNeZ15zXqidcbiAgICB9LFxuICAgICdsanVibGphbmEnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi84LzhlL1VuaW9uX29saW1waWphLnBuZy8xNDBweC1Vbmlvbl9vbGltcGlqYS5wbmcnLFxuICAgICAgbGFiZWw6ICfXnNeV15HXnNeZ15DXoNeUJ1xuICAgIH0sXG4gICAgJ3ZhbGVuY2lhJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly9zYW12YW5yb3Nzb20uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzEwL3ZhbGVuY2lhLWJhc2tldDEtbG9nby5qcGcnLFxuICAgICAgbGFiZWw6ICfXldec16DXodeZ15QnXG4gICAgfSxcbiAgICAna3ViYW4nOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi8wLzA0L0xva29tb3Rpdl9LdWJhbl9sb2dvLnBuZy8yMDBweC1Mb2tvbW90aXZfS3ViYW5fbG9nby5wbmcnLFxuICAgICAgbGFiZWw6ICfXnNeV16fXldee15XXmNeZ15Eg16fXldeR15DXnydcbiAgICB9LFxuICAgICdmdWVubGFicmFkYSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzEvMTMvQmFsb25jZXN0b2Z1ZW5sYWJyYWRhLmpwZy8xMTBweC1CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnJyxcbiAgICAgIGxhYmVsOiAn16TXldeQ16DXnNeR16jXk9eUJ1xuICAgIH0sXG4gICAgJ3VsbSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vbmFjaHd1Y2hzLmJidTAxLmNvbS9tb2R1bGVzL21vZF9iYnVuZXdzZmxhc2gvYXNzZXRzL2ltYWdlcy9ub2ltYWdlX3RodW1iLmpwZycsXG4gICAgICBsYWJlbDogJ9eQ15XXnNedJ1xuICAgIH0sXG4gICAgJ3ZpbG5hJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvNy83NS9CQ19MaWV0dXZvc19SeXRhc19sb2dvLnN2Zy85MDdweC1CQ19MaWV0dXZvc19SeXRhc19sb2dvLnN2Zy5wbmcnLFxuICAgICAgbGFiZWw6ICfXqNeZ15jXkNehINeV15nXnNeg15QnXG4gICAgfSxcbiAgICAnbm92Z29yb2QnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL29seW1waWFrb3MtbGl2ZS5nci9pbWcvdGVhbXMvTml6aG55JTIwTm92Z29yb2QucG5nJyxcbiAgICAgIGxhYmVsOiAn16DXmdeW17PXoNeZJ1xuICAgIH0sXG4gICAgJ3plbml0Jzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI1L0ZDX1plbml0XzFfc3Rhcl8yMDE1X2xvZ28ucG5nLzIyMHB4LUZDX1plbml0XzFfc3Rhcl8yMDE1X2xvZ28ucG5nJyxcbiAgICAgIGxhYmVsOiAn15bXoNeZ15gnXG4gICAgfVxuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJldWR4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgYXV0aEFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJyk7XG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuY29uc3QgU3Bpbm5lciA9IHJlcXVpcmUoJy4vc3Bpbm5lcicpO1xuY29uc3QgVG9wQmFyID0gcmVxdWlyZSgnLi90b3BCYXInKTtcbmNvbnN0IEF1dGhQYWdlID0gcmVxdWlyZSgnLi9hdXRoUGFnZScpO1xuY29uc3QgSG9tZVBhZ2UgPSByZXF1aXJlKCcuL2hvbWVQYWdlJyk7XG5jb25zdCBVc2Vyc1BhZ2UgPSByZXF1aXJlKCcuL3VzZXJzUGFnZScpO1xuY29uc3QgR2FtZXNQYWdlID0gcmVxdWlyZSgnLi9nYW1lc1BhZ2UnKTtcbmNvbnN0IEJvb2tpbmdzUGFnZSA9IHJlcXVpcmUoJy4vYm9va2luZ3NQYWdlJyk7XG5jb25zdCBEaXN0cmlidXRpb25QYWdlID0gcmVxdWlyZSgnLi9kaXN0cmlidXRpb25QYWdlJyk7XG5jb25zdCBFZGl0VXNlckluZm9QYWdlID0gcmVxdWlyZSgnLi9lZGl0VXNlckluZm9QYWdlJyk7XG5jb25zdCBVcGRhdGVCb29raW5nUGFnZSA9IHJlcXVpcmUoJy4vdXBkYXRlQm9va2luZ1BhZ2UnKTtcbmNvbnN0IFVwZGF0ZUdhbWVQYWdlID0gcmVxdWlyZSgnLi91cGRhdGVHYW1lUGFnZScpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvYXBwLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhLFxuICAgICAgICBjdXJyZW50UGFnZUlkOiBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFnZUlkXG4gICAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICAgIGZldGNoQXV0aERhdGE6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmZldGNoQXV0aERhdGEoKSlcbn0pO1xuXG5mdW5jdGlvbiBnZXRQYWdlQ29tcG9uZW50KGN1cnJlbnRQYWdlSWQpIHtcbiAgICBzd2l0Y2ggKGN1cnJlbnRQYWdlSWQpIHtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5IT01FOlxuICAgICAgICAgICAgcmV0dXJuICggPEhvbWVQYWdlIGtleT0naG9tZS1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVTRVJTOlxuICAgICAgICAgICAgcmV0dXJuICggPFVzZXJzUGFnZSBrZXk9J3VzZXJzLXBhZ2UnIC8+ICk7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuR0FNRVM6XG4gICAgICAgICAgICByZXR1cm4gKCA8R2FtZXNQYWdlIGtleT0nZ2FtZXMtcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5CT09LSU5HUzpcbiAgICAgICAgICAgIHJldHVybiAoIDxCb29raW5nc1BhZ2Uga2V5PSdib29raW5ncy1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkRJU1RSSUJVVElPTjpcbiAgICAgICAgICAgIHJldHVybiAoIDxEaXN0cmlidXRpb25QYWdlIGtleT0nZGlzdHJpYnV0aW9uLXBhZ2UnIC8+ICk7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRURJVF9VU0VSX0lORk86XG4gICAgICAgICAgICByZXR1cm4gKCA8RWRpdFVzZXJJbmZvUGFnZSBrZXk9J2VkaXRVc2VySW5mby1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVQREFURV9CT09LSU5HOlxuICAgICAgICAgICAgcmV0dXJuICggPFVwZGF0ZUJvb2tpbmdQYWdlIGtleT0ndXBkYXRlQm9va2luZy1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVQREFURV9HQU1FOlxuICAgICAgICAgICAgcmV0dXJuICggPFVwZGF0ZUdhbWVQYWdlIGtleT0ndXBkYXRlR2FtZS1wYWdlJyAvPiApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFnZVRvUmVuZGVyKGF1dGhEYXRhLCBjdXJyZW50UGFnZUlkKSB7XG4gICAgaWYgKCFhdXRoRGF0YSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8QXV0aFBhZ2UgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VG9wQmFyIC8+XG4gICAgICAgICAgICB7IGdldFBhZ2VDb21wb25lbnQoY3VycmVudFBhZ2VJZCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEF1dGhEYXRhKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlIGxhcmdlLTYgc21hbGwtMTIgc21hbGwtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgICAgIHsgZ2V0UGFnZVRvUmVuZGVyKHRoaXMucHJvcHMuYXV0aERhdGEsIHRoaXMucHJvcHMuY3VycmVudFBhZ2VJZCkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICAgIGF1dGhEYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGN1cnJlbnRQYWdlSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBmZXRjaEF1dGhEYXRhOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmV1ZHguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAuanN4IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTRVRfQVVUSF9EQVRBLCBTSUdOX09VVCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnYmx1ZWJpcmQnO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9ucyBmcm9tICcuL3VzZXJBY3Rpb25zJztcbmltcG9ydCAqIGFzIGV2ZW50QWN0aW9ucyBmcm9tICcuL2V2ZW50QWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBib29raW5nQWN0aW9ucyBmcm9tICcuL2Jvb2tpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcbmltcG9ydCAqIGFzIG5hdmlnYXRpb25BY3Rpb25zIGZyb20gJy4vcm91dGluZ0FjdGlvbnMnO1xuXG5pbXBvcnQgdXBkYXRlUGhvdG9VcmxGaXhlciBmcm9tICcuLi8uLi9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXInO1xuXG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUl9DT0RFU19NQVAgPSB7XG4gICdhdXRoL2ludmFsaWQtZW1haWwnOiBUcmFuc2xhdGlvbnMuRVJST1JfTUVTU0FHRVMuQVVUSC5JTlZBTElEX0VNQUlMLFxuICAnYXV0aC93ZWFrLXBhc3N3b3JkJzogVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguV0VBS19QQVNTV09SRCxcbiAgJ2F1dGgvZW1haWwtYWxyZWFkeS1pbi11c2UnOiBUcmFuc2xhdGlvbnMuRVJST1JfTUVTU0FHRVMuQVVUSC5FTUFJTF9JTl9VU0UsXG4gICdhdXRoL3dyb25nLXBhc3N3b3JkJzogVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguV1JPTkdfUEFTU1dPUkQsXG4gICdhdXRoL2FjY291bnQtZXhpc3RzLXdpdGgtZGlmZmVyZW50LWNyZWRlbnRpYWwnOiBUcmFuc2xhdGlvbnMuRVJST1JfTUVTU0FHRVMuQVVUSC5FTUFJTF9JTl9VU0UsXG4gICdhdXRoL3VzZXItbm90LWZvdW5kJzogVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguVVNFUl9OT1RfRk9VTkRcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBdXRoRGF0YSA9ICh1aWQsIGVtYWlsLCBwaG90b1VSTCwgaXNBZG1pbikgPT4gKHtcbiAgdHlwZTogU0VUX0FVVEhfREFUQSxcbiAgdWlkLFxuICBlbWFpbCxcbiAgcGhvdG9VUkwsXG4gIGlzQWRtaW5cbn0pO1xuXG5jb25zdCBmZXRjaEFwcERhdGEgPSAoZGlzcGF0Y2gsIHVzZXIpID0+XG4gIGNsaWVudERCLnJlYWQoJ2FkbWlucy8nICsgdXNlci51aWQpXG4gICAgLnRoZW4oaXNBZG1pbiA9PiBkaXNwYXRjaChzZXRBdXRoRGF0YSh1c2VyLnVpZCwgdXNlci5lbWFpbCwgXy5nZXQodXNlciwgWydwcm92aWRlckRhdGEnLCAwLCAncGhvdG9VUkwnXSksICEhaXNBZG1pbikpKVxuICAgIC50aGVuKCgpID0+IFByb21pc2UuYWxsKFtcbiAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb25zLmZldGNoVXNlcnMoKSksXG4gICAgICBkaXNwYXRjaChldmVudEFjdGlvbnMuZmV0Y2hFdmVudHMoKSksXG4gICAgICBkaXNwYXRjaChib29raW5nQWN0aW9ucy5mZXRjaEJvb2tpbmdzKCkpXG4gICAgXSkpO1xuXG5leHBvcnQgY29uc3QgdXNlclNpZ25lZE91dCA9ICgpID0+ICh7XG4gIHR5cGU6IFNJR05fT1VUXG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ25PdXQgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuc2lnbk91dCgpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlclNpZ25lZE91dCgpKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5yZXNldChDb25zdGFudHMuUk9VVElORy5QQUdFUy5BVVRIKSkpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRmFjZWJvb2sgPSAoKSA9PiAoKSA9PiBjbGllbnREQi5sb2dpbldpdGhGYWNlYm9vaygpO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoR29vZ2xlID0gKCkgPT4gKCkgPT4gY2xpZW50REIubG9naW5XaXRoR29vZ2xlKCk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLmxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHVzZXIgPT4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5yZXNldChDb25zdGFudHMuUk9VVElORy5QQUdFUy5IT01FKSkpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4odXNlciA9PiBmZXRjaEFwcERhdGEoZGlzcGF0Y2gsIHVzZXIpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLnJlc2V0KENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkVESVRfVVNFUl9JTkZPKSkpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IGVtYWlsID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXV0aERhdGEgPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuZ2V0TG9nZ2VkSW5Vc2VyKClcbiAgICAudGhlbih1c2VyID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmZXRjaEFwcERhdGEoZGlzcGF0Y2gsIHVzZXIpXG4gICAgICAgICAgLnRoZW4oKCkgPT4gdXBkYXRlUGhvdG9VcmxGaXhlcihkaXNwYXRjaCwgZ2V0U3RhdGUoKSkpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBnZXRTdGF0ZSgpLnVzZXJzW3VzZXIudWlkXTtcbiAgICAgICAgICAgIGlmIChfLmlzRW1wdHkodXNlckluZm8pKSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLnJlc2V0KENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkVESVRfVVNFUl9JTkZPLCB7IHVpZDogdXNlci51aWQgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMucmVzZXQoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGRiRXJyb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSlcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJQcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnYmx1ZWJpcmQnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9IGNvbmZpZyA9PiB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRJbiA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnNldChkYXRhKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHJlYWQgPSBwYXRoID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkub25jZSgndmFsdWUnKVxuICAgIC50aGVuKHNuYXBzaG90ID0+IHJlc29sdmUoc25hcHNob3QudmFsKCkpKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBwdXNoID0gKHBhdGgsIGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc3QgdW5pcXVlS2V5ID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkucHVzaCgpLmtleTtcbiAgc2V0SW4ocGF0aCArICcvJyArIHVuaXF1ZUtleSwgZGF0YSlcbiAgICAudGhlbigoKSA9PiByZXNvbHZlKHVuaXF1ZUtleSkpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnVwZGF0ZShkYXRhKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IHBhdGggPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5yZW1vdmUoKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEdvb2dsZSA9ICgpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKVxuICAgIC50aGVuKHJlc29sdmUpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhGYWNlYm9vayA9ICgpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XG4gIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUmVkaXJlY3QocHJvdmlkZXIpXG4gICAgLnRoZW4ocmVzb2x2ZSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IGVtYWlsID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9nZ2VkSW5Vc2VyID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuZ2V0UmVkaXJlY3RSZXN1bHQoKVxuICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0LnVzZXIpIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQudXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvbkF1dGhTdGF0ZUNoYW5nZSA9IHVzZXIgPT4ge1xuICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5yZW1vdmVBdXRoVG9rZW5MaXN0ZW5lcihvbkF1dGhTdGF0ZUNoYW5nZSk7XG4gICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChvbkF1dGhTdGF0ZUNoYW5nZSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jbGllbnREQi5qcyIsIm1vZHVsZS5leHBvcnRzID0gZmlyZWJhc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmaXJlYmFzZVwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFVTRVJTX1JFQ0VJVkVELCBVU0VSX1JFTU9WRUQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcbmltcG9ydCB7IFByb21pc2UgfSBmcm9tICdibHVlYmlyZCc7XG5cbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcblxuY29uc3QgVVNFUl9JTkZPX0tFWVMgPSBbJ2VtYWlsJywgJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdwaG9uZVByZWZpeCcsICdwaG9uZU51bWJlcicsICdyZXF1ZXN0Rm9yTWVtYmVyc2hpcCcsICdzdGF0aW9uJywgJ3N1YnNjcmliZVNNUycsICdzdWJzY3JpYmVNYWlsJywgJ3Bob3RvVVJMJ107XG5jb25zdCBQQVRIX01BUCA9IHtcbiAgVVNFUlNfSU5GTzogJ3VzZXJzSW5mbycsXG4gIFNFQVNPTl9USUNLRVRTOiAnc2Vhc29uVGlja2V0cycsXG4gIEJPT0tJTkdTOiAnYm9va2luZ3MnXG59O1xuXG5jb25zdCBidWlsZFVzZXIgPSAodXNlckluZm8sIHNlYXNvblRpY2tldHMpID0+IHtcbiAgY29uc3QgdXNlciA9IF8ubWVyZ2Uoe30sIHVzZXJJbmZvKTtcbiAgaWYgKHNlYXNvblRpY2tldHMpIHtcbiAgICBfLm1lcmdlKHVzZXIsIHsgc2Vhc29uVGlja2V0cyB9KTtcbiAgfVxuICByZXR1cm4gdXNlcjtcbn07XG5cbmNvbnN0IGZldGNoQWxsVXNlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJSZWFkUHJvbWlzZXMgPSBbXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5VU0VSU19JTkZPKSxcbiAgICBjbGllbnREQi5yZWFkKFBBVEhfTUFQLlNFQVNPTl9USUNLRVRTKVxuICBdO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyUmVhZFByb21pc2VzKVxuICAgIC50aGVuKChbdXNlcnNJbmZvLCBzZWFzb25UaWNrZXRzXSkgPT5cbiAgICAgIF8udHJhbnNmb3JtKHVzZXJzSW5mbywgKGFjYywgaW5mbywgdWlkKSA9PiB7XG4gICAgICAgIGFjY1t1aWRdID0gYnVpbGRVc2VyKGluZm8sIHNlYXNvblRpY2tldHMgJiYgc2Vhc29uVGlja2V0c1t1aWRdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgfSwge30pXG4gICAgKTtcbn07XG5cbmNvbnN0IGZldGNoU2luZ2xlVXNlciA9IHVpZCA9PiB7XG4gIGNvbnN0IHVzZXJSZWFkUHJvbWlzZXMgPSBbXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5VU0VSU19JTkZPICsgJy8nICsgdWlkKSxcbiAgICBjbGllbnREQi5yZWFkKFBBVEhfTUFQLlNFQVNPTl9USUNLRVRTICsgJy8nICsgdWlkKVxuICBdO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyUmVhZFByb21pc2VzKVxuICAgIC50aGVuKChbdXNlckluZm8sIHNlYXNvblRpY2tldHNdKSA9PiB7XG4gICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgcmV0dXJuIHsgW3VpZF06IGJ1aWxkVXNlcih1c2VySW5mbywgc2Vhc29uVGlja2V0cykgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJzUmVtb3ZlZCA9IHVpZCA9PiAoe1xuICB0eXBlOiBVU0VSX1JFTU9WRUQsXG4gIHVpZFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1JlY2VpdmVkID0gdXNlcnMgPT4gKHtcbiAgdHlwZTogVVNFUlNfUkVDRUlWRUQsXG4gIHVzZXJzXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGNvbnN0IHVpZCA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAndWlkJ10pO1xuICBjb25zdCBpc0FkbWluID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICdpc0FkbWluJ10pO1xuICBjb25zdCBmZXRjaFByb21pc2UgPSBpc0FkbWluID8gZmV0Y2hBbGxVc2VycygpIDogZmV0Y2hTaW5nbGVVc2VyKHVpZCk7XG5cbiAgcmV0dXJuIGZldGNoUHJvbWlzZVxuICAgIC50aGVuKHVzZXJzID0+IHtcbiAgICAgIGlmICh1c2Vycykge1xuICAgICAgICBkaXNwYXRjaCh1c2Vyc1JlY2VpdmVkKHVzZXJzKSk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9ICh1aWQsIHVzZXIpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IGlzQWRtaW4gPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ2lzQWRtaW4nXSk7XG5cbiAgY29uc3QgdXNlclVwZGF0ZVByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnVwZGF0ZSgndXNlcnNJbmZvLycgKyB1aWQsIF8ucGljayh1c2VyLCBVU0VSX0lORk9fS0VZUykpXG4gIF07XG5cbiAgaWYgKGlzQWRtaW4gJiYgXy5oYXModXNlciwgJ3NlYXNvblRpY2tldHMnKSkge1xuICAgIHVzZXJVcGRhdGVQcm9taXNlcy5wdXNoKGNsaWVudERCLnNldEluKCdzZWFzb25UaWNrZXRzLycgKyB1aWQsIHVzZXIuc2Vhc29uVGlja2V0cykpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHVzZXJVcGRhdGVQcm9taXNlcylcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaCh1c2Vyc1JlY2VpdmVkKHsgW3VpZF06IHVzZXIgfSkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVVzZXIgPSB1aWQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgdXNlclJlbW92ZVByb21pc2VzID0gXy5tYXAoUEFUSF9NQVAsIHVzZXJQYXRoID0+IGNsaWVudERCLnJlbW92ZShgJHt1c2VyUGF0aH0vJHt1aWR9YCkpO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyUmVtb3ZlUHJvbWlzZXMpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlcnNSZW1vdmVkKHVpZCkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsImltcG9ydCB7IFNUQVJUX0xPQURJTkcsIFNUT1BfTE9BRElORyB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4gKHtcbiAgdHlwZTogU1RBUlRfTE9BRElOR1xufSk7XG5cbmV4cG9ydCBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+ICh7XG4gIHR5cGU6IFNUT1BfTE9BRElOR1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvbG9hZGluZ0FjdGlvbnMuanMiLCJpbXBvcnQgeyBSRVBPUlRfRVJST1IgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5leHBvcnQgY29uc3QgcmVwb3J0RXJyb3IgPSAobWVzc2FnZSA9IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5HRU5FUkFMKSA9PiAoe1xuICB0eXBlOiBSRVBPUlRfRVJST1IsXG4gIG1lc3NhZ2Vcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucy5qcyIsImNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBST1VUSU5HOiB7XG4gICAgUEFHRVM6IHtcbiAgICAgIFtDb25zdGFudHMuUk9VVElORy5QQUdFUy5IT01FXTogJ9eT16Mg15TXkdeZ16onLFxuICAgICAgW0NvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVTRVJTXTogJ9ee16nXqtee16nXmdedJyxcbiAgICAgIFtDb25zdGFudHMuUk9VVElORy5QQUdFUy5HQU1FU106ICfXntep15fXp9eZ150nLFxuICAgICAgW0NvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkJPT0tJTkdTXTogJ9eo16nXldee15nXnSDXnNeU16HXoteV16onLFxuICAgICAgW0NvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkRJU1RSSUJVVElPTl06ICfXqNep15nXnteqINeq16TXldem15QnLFxuICAgIH1cbiAgfSxcbiAgU1RBVElPTlM6IHtcbiAgICBbQ29uc3RhbnRzLlNUQVRJT05TLlRFTF9BVklWXTogJ9eq15wg15DXkdeZ15EnLFxuICAgIFtDb25zdGFudHMuU1RBVElPTlMuTU9ESUlOXTogJ9em15XXnteqINep15nXnNeqJ1xuICB9LFxuICBHQU1FOiB7XG4gICAgU1RBVFVTOiB7XG4gICAgICBbQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRF06ICfXlNeU16jXqdee15Qg16HXkteV16jXlCcsXG4gICAgICBbQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX01FTUJFUlNdOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXnteg15XXmdeZ150nLFxuICAgICAgW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9BTExdOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXm9eV15zXnScsXG4gICAgICBbQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkZVTExZX0JPT0tFRF06ICfXlNeU16HXoteUINee15zXkNeUJyxcbiAgICB9XG4gIH0sXG4gIEdBTUVfSVRFTToge1xuICAgIEJPT0s6ICfXlNeo16nXnScsXG4gICAgRURJVF9CT09LSU5HOiAn16LXqNeV15onLFxuICAgIENBTkNFTF9CT09LSU5HOiAn15HXmNecINeU16jXqdee15QnXG4gIH0sXG4gIFVTRVJTX1BBR0U6IHtcbiAgICBUSVRMRTogJ9ee16nXqtee16nXmdedJyxcbiAgICBOT19VU0VSU19GT1VORDogJ9ec15Ag16DXntem15DXlSDXqNep15XXnteV16onLFxuICAgIEZJTFRFUjoge1xuICAgICAgU0VBUkNIOiAn15fXmdek15XXqScsXG4gICAgICBUQUJTOiB7XG4gICAgICAgIEFMTDogJ9eb15XXnNedJyxcbiAgICAgICAgTUVNQkVSUzogJ9ee16DXldeZ15nXnScsXG4gICAgICAgIFJFUVVFU1RTOiAn15HXp9ep15Qg15zXnteg15XXmScsXG4gICAgICAgIE5PTl9NRU1CRVJTOiAn15fXkyDXpNei157XmdeZ150nXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBBVVRIX1BBR0U6IHtcbiAgICBGSUVMRFM6IHtcbiAgICAgIEVNQUlMOiAn15PXldeQ16gg15DXnNen15jXqNeV16DXmScsXG4gICAgICBQQVNTV09SRDogJ9eh15nXodee15AnLFxuICAgICAgUEFTU1dPUkRfQUdBSU46ICfXqdeV15Eg16HXmdeh157XkCdcbiAgICB9LFxuICAgIFNVQk1JVF9CVE46IHtcbiAgICAgIExPR0lOOiAn15TXqteX15HXqCcsXG4gICAgICBSRUdJU1RFUjogJ9eU15nXqNep150nLFxuICAgICAgRk9SR09UX1BBU1NXT1JEOiAn16nXnNeXINec15nXoNenINec15DXmdek15XXoSDXodeZ16HXnteQJ1xuICAgIH0sXG4gICAgTElOS1M6IHtcbiAgICAgIEdPX1RPX0xPR0lOOiAn15nXqSDXnNeaINeX16nXkdeV158/JyxcbiAgICAgIEdPX1RPX1JFR0lTVEVSOiAn15DXmdefINec15og15fXqdeR15XXnz8nLFxuICAgICAgR09fVE9fRk9SR09UX1BBU1NXT1JEOiAn16nXm9eX16og16HXmdeh157XkD8nXG4gICAgfSxcbiAgICBFUlJPUlM6IHtcbiAgICAgIE5PVF9TQU1FX1BBU1NXT1JEOiAn16HXmdeh157XkNeV16og16bXqNeZ15vXldeqINec15TXmdeV16og15bXlNeV16onXG4gICAgfVxuICB9LFxuICBIT01FX1BBR0U6IHtcbiAgICBOT19PUEVOX0dBTUVTOiAn15DXmdefINeU16HXoteV16og16TXqteV15fXldeqJyxcbiAgICBPUEVOX0dBTUVTOiAn15TXodei15XXqiDXpNeq15XXl9eV16onLFxuICAgIENMT1NFRF9HQU1FUzogJ9eU15TXodei15XXqiDXlNeR15DXldeqJ1xuICB9LFxuICBVUERBVEVfVVNFUl9JTkZPX1BBR0U6IHtcbiAgICBUSVRMRTogJ9ek16jXmNeZ150g15DXmdep15nXmdedJyxcbiAgICBGSVJTVF9OQU1FOiAn16nXnScsXG4gICAgTEFTVF9OQU1FOiAn16nXnSDXntep16TXl9eUJyxcbiAgICBFTUFJTDogJ9eT15XXkNeoINeQ15zXp9eY16jXldeg15knLFxuICAgIFBIT05FX1BSRUZJWDogJ9en15nXk9eV157XqicsXG4gICAgUEhPTkVfTlVNQkVSOiAn15jXnNek15XXnyDXoNeZ15nXkycsXG4gICAgRkFWT1JJVEVfUElDS1VQX1NUQVRJT046ICfXqteX16DXqiDXotec15nXlCDXnteV16LXk9ek16onLFxuICAgIFJFUVVFU1RfRk9SX01FTUJFUlNISVA6ICfXntei15XXoNeZ15nXnyDXkdee16DXldeZPycsXG4gICAgRElTVFJJQlVUSU9OOiB7XG4gICAgICBFTUFJTDogJ9eq16TXldem16og15DXmdee15nXmdecJyxcbiAgICAgIFNNUzogJ9eq16TXldem16ogU01TJ1xuICAgIH0sXG4gICAgVE9HR0xFOiB7XG4gICAgICBZRVM6ICfXm9efJyxcbiAgICAgIE5POiAn15zXkCdcbiAgICB9XG4gIH0sXG4gIFVQREFURV9CT09LSU5HX1BBR0U6IHtcbiAgICBUSVRMRTogJ9ei16jXmdeb16og15TXqNep157XlCcsXG4gICAgUEFJRF9TRUFUUzogJ9eb157XldeqINee16DXldeZ15nXnScsXG4gICAgRVhUUkFfU0VBVFM6ICfXoNeV16HXoteZ150g15HXqtep15zXldedJyxcbiAgICBQSUNLVVBfVE9HR0xFOiAn15TXnNeV15onLFxuICAgIERST1BPRkZfVE9HR0xFOiAn15fXlteV16gnLFxuICAgIFBJQ0tVUF9TVEFUSU9OX0RST1BET1dOX0RFRkFVTFQ6ICfXkdeX16gnXG4gIH0sXG4gIEdBTUVTX1BBR0U6IHtcbiAgICBUSVRMRTogJ9ee16nXl9en15nXnScsXG4gICAgVEFCUzoge1xuICAgICAgQUxMOiAn15vXldec150nLFxuICAgICAgT1BFTjogJ9ek16rXldeX15nXnScsXG4gICAgICBDTE9TRUQ6ICfXodeS15XXqNeZ150nXG4gICAgfSxcbiAgICBOT19HQU1FU19MQUJFTDogJ9ec15Ag16DXntem15DXlSDXntep15fXp9eZ150nXG4gIH0sXG4gIEJPT0tJTkdTX1BBR0U6IHtcbiAgICBUSVRMRTogJ9eo16nXldee15nXnSDXnNeU16HXoteUJyxcbiAgICBUQUJTOiB7XG4gICAgICBQSUNLVVA6ICfXlNec15XXmicsXG4gICAgICBEUk9QT0ZGOiAn15fXlteV16gnXG4gICAgfVxuICB9LFxuICBVUERBVEVfR0FNRV9QQUdFOiB7XG4gICAgVElUTEU6ICfXlNeo16nXnteUINec15TXodei15QnLFxuICAgIEdBTUVfTEFCRUw6ICfXqdedINeU157XqdeX16cnLFxuICAgIEdBTUVfUExBQ0VIT0xERVI6ICfXkdeX16gg157XqdeX16cnLFxuICAgIERBVEVfTEFCRUw6ICfXqteQ16jXmdeaJyxcbiAgICBUSU1FOiAn16nXoteUJyxcbiAgICBHQU1FX1NUQVRVUzogJ9eh15jXmNeV16Eg15TXodei15QnXG4gIH0sXG4gIERJU1RSSUJVVElPTl9QQUdFOiB7XG4gICAgVElUTEU6ICfXqNep15nXnteqINeq16TXldem15QnLFxuICAgIERJU1RSSUJVVElPTl9NRVRIT0Q6IHtcbiAgICAgIFRJVExFOiAn16nXnNeZ15fXlCDXkdeQ157Xptei15XXqicsXG4gICAgICBFTUFJTDogJ9eQ15nXnteZ15nXnCcsXG4gICAgICBTTVM6ICfXodee16EnXG4gICAgfSxcbiAgICBSRUNJUElFTlRTX1RZUEVTOiB7XG4gICAgICBUSVRMRTogJ9ep15zXlyDXkNecJyxcbiAgICAgIEFMTDogJ9eb15XXnNedJyxcbiAgICAgIE1FTUJFUlNfT05MWTogJ9ee16DXldeZ15nXnSDXkdec15HXkycsXG4gICAgICBCT09LRURfVE9fRVZFTlQ6ICfXqNep15XXnteZ150g15zXlNeh16LXlCdcbiAgICB9LFxuICAgIERJU1RSSUJVVElPTl9UWVBFUzoge1xuICAgICAgVElUTEU6ICfXpteV16jXqiDXqdec15nXl9eUJyxcbiAgICAgIFRFTVBMQVRFOiAn16rXkdeg15nXqicsXG4gICAgICBDVVNUT006ICfXmNen16HXmCDXl9eV16TXqdeZJ1xuICAgIH0sXG4gICAgVEVNUExBVEVTOiB7XG4gICAgICBUSVRMRTogJ9eR15fXmdeo16og16rXkdeg15nXqicsXG4gICAgICBFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTOiAn16TXqteZ15fXqiDXlNeo16nXnteUINec157XoNeV15nXmdedJyxcbiAgICAgIEVWRU5UX09QRU5fRk9SX0FMTDogJ9ek16rXmdeX16og15TXqNep157XlCDXnNeb15XXnNedJyxcbiAgICAgIENIQU5HRV9FVkVOVF9ERVRBSUxTOiAn16nXmdeg15XXmSDXkdek16jXmNeZINeU15TXodei15QnXG4gICAgfSxcbiAgICBHQU1FUzoge1xuICAgICAgVElUTEU6ICfXkdeX15nXqNeqINee16nXl9enJ1xuICAgIH0sXG4gICAgQ1VTVE9NOiB7XG4gICAgICBUSVRMRToge1xuICAgICAgICBUSVRMRTogJ9eg15XXqdeQJ1xuICAgICAgfSxcbiAgICAgIENPTlRFTlQ6IHtcbiAgICAgICAgVElUTEU6ICcnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBGT1JNX0ZSQU1FOiB7XG4gICAgU1VCTUlUOiAn16nXnteV16gnLFxuICAgIFJFTU9WRTogJ9ee15fXpydcbiAgfSxcbiAgRVJST1JfTUVTU0FHRVM6IHtcbiAgICBHRU5FUkFMOiAn16nXkteZ15DXqiDXntei16jXm9eqJyxcbiAgICBBVVRIOiB7XG4gICAgICBJTlZBTElEX0VNQUlMOiAn15DXmdee15nXmdecINec15Ag16rXp9eZ158nLFxuICAgICAgV0VBS19QQVNTV09SRDogJ9eU16HXmdeh157XkCDXpteo15nXm9eUINec15TXm9eZ15wg15zXpNeX15XXqiA2INeq15XXldeZ150nLFxuICAgICAgRU1BSUxfSU5fVVNFOiAn15DXmdee15nXmdecINeR16nXmdee15XXqScsXG4gICAgICBXUk9OR19QQVNTV09SRDogJ9eh15nXodee15Ag15zXkCDXoNeb15XXoNeUJyxcbiAgICAgIE5PVF9TQU1FX1BBU1NXT1JEOiAn15TXodeZ16HXnteQ15XXqiDXpteo15nXm9eV16og15zXlNeZ15XXqiDXlteU15XXqicsXG4gICAgICBVU0VSX05PVF9GT1VORDogJ9eb16rXldeR16og15TXkNeZ157XmdeZ15wg15zXkCDXoNee16bXkNeUJ1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy90cmFuc2xhdGlvbnMuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEVWRU5UU19SRUNFSVZFRCwgRVZFTlRfUkVNT1ZFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IEVWRU5UX0tFWVMgPSBbJ3R5cGVJZCcsICdkYXknLCAnbW9udGgnLCAneWVhcicsICdob3VyJywgJ21pbnV0ZScsICdzdGF0dXMnXTtcbmNvbnN0IEVWRU5UU19QQVRIID0gJ2V2ZW50cyc7XG5cbmV4cG9ydCBjb25zdCBldmVudFJlbW92ZWQgPSBldmVudElkID0+ICh7XG4gIHR5cGU6IEVWRU5UX1JFTU9WRUQsXG4gIGV2ZW50SWRcbn0pO1xuXG5leHBvcnQgY29uc3QgZXZlbnRzUmVjZWl2ZWQgPSBldmVudHMgPT4gKHtcbiAgdHlwZTogRVZFTlRTX1JFQ0VJVkVELFxuICBldmVudHNcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hFdmVudHMgPSAoKSA9PiBkaXNwYXRjaCA9PlxuICBjbGllbnREQi5yZWFkKEVWRU5UU19QQVRIKVxuICAgIC50aGVuKGV2ZW50cyA9PiB7XG4gICAgICBpZiAoZXZlbnRzKSB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaChldmVudHNSZWNlaXZlZChldmVudHMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRXZlbnQgPSBldmVudCA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChFVkVOVFNfUEFUSCwgZXZlbnQpXG4gICAgLnRoZW4oZXZlbnRJZCA9PiBkaXNwYXRjaChldmVudHNSZWNlaXZlZCh7IFtldmVudElkXTogZXZlbnQgfSkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUV2ZW50ID0gKGV2ZW50SWQsIGV2ZW50KSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCBldmVudFRvVXBkYXRlID0gXy5waWNrKGV2ZW50LCBFVkVOVF9LRVlTKTtcblxuICByZXR1cm4gY2xpZW50REIudXBkYXRlKCdldmVudHMvJyArIGV2ZW50SWQsIGV2ZW50VG9VcGRhdGUpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoeyBbZXZlbnRJZF06IGV2ZW50VG9VcGRhdGUgfSkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUV2ZW50ID0gZXZlbnRJZCA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucmVtb3ZlKGAke0VWRU5UU19QQVRIfS8ke2V2ZW50SWR9YClcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChldmVudFJlbW92ZWQoZXZlbnRJZCkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9ldmVudEFjdGlvbnMuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEJPT0tJTkdTX1JFQ0VJVkVELCBCT09LSU5HX0NBTkNFTEVEIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcblxuY29uc3QgQk9PS0lOR19EQVRBX0tFWVMgPSBbJ3BhaWRTZWF0cycsICdleHRyYVNlYXRzJywgJ3BpY2tVcCcsICdkcm9wT2ZmJ107XG5jb25zdCBCT09LSU5HU19QQVRIID0gJ2Jvb2tpbmdzJztcblxuY29uc3QgZmV0Y2hVc2VyQm9va2luZ3MgPSB1aWQgPT5cbiAgY2xpZW50REIucmVhZChgJHtCT09LSU5HU19QQVRIfS8ke3VpZH1gKVxuICAgIC50aGVuKHVzZXJCb29raW5ncyA9PiB7XG4gICAgICBpZiAodXNlckJvb2tpbmdzKSB7XG4gICAgICAgIHJldHVybiB7IFt1aWRdOiB1c2VyQm9va2luZ3MgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG5jb25zdCBmZXRjaEFsbEJvb2tpbmdzID0gKCkgPT5cbiAgY2xpZW50REIucmVhZChCT09LSU5HU19QQVRIKTtcblxuZXhwb3J0IGNvbnN0IGJvb2tpbmdzUmVjZWl2ZWQgPSBib29raW5ncyA9PiAoe1xuICB0eXBlOiBCT09LSU5HU19SRUNFSVZFRCxcbiAgYm9va2luZ3Ncbn0pO1xuXG5leHBvcnQgY29uc3QgYm9va2luZ3NDYW5jZWxlZCA9ICh1aWQsIGV2ZW50SWQpID0+ICh7XG4gIHR5cGU6IEJPT0tJTkdfQ0FOQ0VMRUQsXG4gIHVpZCxcbiAgZXZlbnRJZFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJvb2tpbmdzID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBjb25zdCB1aWQgPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ3VpZCddKTtcbiAgY29uc3QgaXNBZG1pbiA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAnaXNBZG1pbiddKTtcbiAgY29uc3QgZmV0Y2hQcm9taXNlID0gaXNBZG1pbiA/IGZldGNoQWxsQm9va2luZ3MoKSA6IGZldGNoVXNlckJvb2tpbmdzKHVpZCk7XG5cbiAgcmV0dXJuIGZldGNoUHJvbWlzZVxuICAgIC50aGVuKGJvb2tpbmdzID0+IHtcbiAgICAgIGlmIChib29raW5ncykge1xuICAgICAgICBkaXNwYXRjaChib29raW5nc1JlY2VpdmVkKGJvb2tpbmdzKSk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQm9va2luZyA9ICh1aWQsIGV2ZW50SWQsIGJvb2tpbmdEYXRhKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCBib29raW5nRGF0YVRvVXBkYXRlID0gXy5waWNrKGJvb2tpbmdEYXRhLCBCT09LSU5HX0RBVEFfS0VZUyk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnVwZGF0ZShgJHtCT09LSU5HU19QQVRIfS8ke3VpZH0vJHtldmVudElkfWAsIGJvb2tpbmdEYXRhVG9VcGRhdGUpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goYm9va2luZ3NSZWNlaXZlZCh7IFt1aWRdOiB7IFtldmVudElkXTogYm9va2luZ0RhdGFUb1VwZGF0ZSB9IH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxCb29raW5nID0gKHVpZCwgZXZlbnRJZCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnJlbW92ZShgJHtCT09LSU5HU19QQVRIfS8ke3VpZH0vJHtldmVudElkfWApXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goYm9va2luZ3NDYW5jZWxlZCh1aWQsIGV2ZW50SWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMuanMiLCJmdW5jdGlvbiBuYXZpZ2F0ZVRvKHBhZ2VJZCwgcGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdOQVZJR0FURV9UTycsXG4gICAgcGFnZUlkLFxuICAgIHBhcmFtc1xuICB9O1xufVxuXG5mdW5jdGlvbiBuYXZpZ2F0ZUJhY2soKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ05BVklHQVRFX0JBQ0snXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc2V0KHBhZ2VJZCwgcGFyYW1zKSB7XG4gIHBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdSRVNFVF9ST1VUSU5HJyxcbiAgICBwYWdlSWQsXG4gICAgcGFyYW1zXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2UocGFnZUlkLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnUkVQTEFDRV9ST1VUSU5HJyxcbiAgICBwYWdlSWQsXG4gICAgcGFyYW1zXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBuYXZpZ2F0ZVRvLCBuYXZpZ2F0ZUJhY2ssIHJlcGxhY2UsIHJlc2V0IH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMuanMiLCJpbXBvcnQgeyB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRpc3BhdGNoLCBzdGF0ZSkge1xuICBjb25zdCB1aWQgPSBzdGF0ZS5hdXRoRGF0YS51aWQ7XG4gIGNvbnN0IHVzZXJzID0gc3RhdGUudXNlcnM7XG5cbiAgaWYgKHVzZXJzW3VpZF0pIHtcbiAgICByZXR1cm4gZGlzcGF0Y2godXBkYXRlVXNlcih1aWQsIHsgcGhvdG9VUkw6IHN0YXRlLmF1dGhEYXRhLnBob3RvVVJMIH0pKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXIuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9zcGlubmVyLnNjc3MnKTtcblxuY29uc3QgTG9nbyA9IHJlcXVpcmUoJy4vbG9nby5qc3gnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9hZGluZzogc3RhdGUubG9hZGluZ1xuICAgIH07XG59XG5cbmNsYXNzIFNwaW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheUNsYXNzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBvdmVybGF5OiB0cnVlLFxuICAgICAgICAgICAgaGlkZTogIXRoaXMucHJvcHMuaXNMb2FkaW5nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSBvcGFjaXR5PXswLjd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TcGlubmVyLlByb3BUeXBlcyA9IHtcbiAgICBpc0xvYWRpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNwaW5uZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NwaW5uZXIuanN4IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zcGlubmVyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxMDAwOyB9XFxuICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIge1xcbiAgICBtYXJnaW46IDE1MHB4IGF1dG8gMDtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIC5sb2dvIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgPiBkaXYge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICBtYXJnaW46IDAgMnB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XFxuICAgICAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIC5ib3VuY2UxIHtcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAuYm91bmNlMiB7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2czsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XFxuICAwJSwgODAlLCAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApOyB9XFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xcbiAgMCUsIDgwJSwgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jbGFzcyBMb2dvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgd2lkdGg9e3RoaXMucHJvcHMud2lkdGggKyAncHQnfSBoZWlnaHQ9e3RoaXMucHJvcHMud2lkdGggKyAncHQnfSBvcGFjaXR5PXt0aGlzLnByb3BzLm9wYWNpdHl9IHZpZXdCb3g9XCIwIDAgNDAwIDQwMFwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDAuMDAgMC4wMCBMIDE5NS4zMyAwLjAwIEMgMTcxLjQ2IDEuMTQgMTQ3LjU4IDUuNDIgMTI1LjQzIDE0LjYwIEMgNzAuODggMzYuMzEgMjcuMTAgODMuMzMgOS41NyAxMzkuNDAgQyAzLjc0IDE1Ny40NSAxLjE2IDE3Ni4zNyAwLjAwIDE5NS4yNSBMIDAuMDAgMC4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTUuMzMgMC4wMCBMIDIwNy41MiAwLjAwIEMgMjE2LjcxIDEuMTkgMjI2LjAyIDEuMzUgMjM1LjExIDMuMjIgQyAyNjkuMzAgOS4xNiAzMDEuNzggMjQuMzcgMzI4LjM3IDQ2LjY1IEMgMzY1Ljk5IDc3LjkxIDM5MS42NiAxMjMuNDIgMzk4LjA5IDE3MS45OSBDIDM5OS4wNCAxNzguNzUgMzk5LjU2IDE4NS41NiA0MDAuMDAgMTkyLjM3IEwgNDAwLjAwIDIwOC43MyBDIDM5OC41NyAyMzMuODYgMzkzLjI5IDI1OC45MCAzODIuODAgMjgxLjg2IEMgMzU4LjgyIDMzNS42OCAzMDkuOTUgMzc3LjgzIDI1Mi45OSAzOTMuMTEgQyAyMzkuMDggMzk3LjEwIDIyNC42OCAzOTguODkgMjEwLjI5IDQwMC4wMCBMIDE5MS4zNiA0MDAuMDAgQyAxNjYuMTcgMzk4Ljc2IDE0MS4xMyAzOTMuMTQgMTE4LjE2IDM4Mi42NCBDIDY3LjQwIDM1OS43NiAyNi44MSAzMTUuMDUgOS44OSAyNjEuOTAgQyAzLjk3IDI0NC4zMyAxLjYyIDIyNS44NSAwLjAwIDIwNy40NiBMIDAuMDAgMTk1LjI1IEMgMS4xNiAxNzYuMzcgMy43NCAxNTcuNDUgOS41NyAxMzkuNDAgQyAyNy4xMCA4My4zMyA3MC44OCAzNi4zMSAxMjUuNDMgMTQuNjAgQyAxNDcuNTggNS40MiAxNzEuNDYgMS4xNCAxOTUuMzMgMC4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMDcuNTIgMC4wMCBMIDQwMC4wMCAwLjAwIEwgNDAwLjAwIDE5Mi4zNyBDIDM5OS41NiAxODUuNTYgMzk5LjA0IDE3OC43NSAzOTguMDkgMTcxLjk5IEMgMzkxLjY2IDEyMy40MiAzNjUuOTkgNzcuOTEgMzI4LjM3IDQ2LjY1IEMgMzAxLjc4IDI0LjM3IDI2OS4zMCA5LjE2IDIzNS4xMSAzLjIyIEMgMjI2LjAyIDEuMzUgMjE2LjcxIDEuMTkgMjA3LjUyIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTkyLjExIDguMTMgQyAyMjIuMzUgNi44MCAyNTIuOTUgMTIuNzQgMjgwLjQyIDI1LjUwIEMgMzI3LjA0IDQ2LjcyIDM2NC4zNSA4Ny4zOSAzODEuMzEgMTM1Ljc1IEMgMzk4LjQwIDE4My4xNyAzOTUuNjUgMjM3LjMzIDM3My43NyAyODIuNzQgQyAzNTYuMjMgMzE5LjgzIDMyNi4zMyAzNTAuOTcgMjkwLjA0IDM3MC4wOSBDIDI0My45MiAzOTQuODIgMTg3LjUyIDM5OS4yMiAxMzguMDcgMzgyLjExIEMgOTUuMzggMzY3LjY1IDU4LjE0IDMzNy42MCAzNS4yMSAyOTguNzYgQyAxNC42NSAyNjQuOTIgNS4zNCAyMjQuNDYgOC41NCAxODUuMDMgQyAxMC4zNyAxNjEuMjAgMTYuNjggMTM3LjcwIDI3LjI0IDExNi4yNiBDIDQ4LjgyIDcxLjE3IDg4LjkyIDM1LjQ4IDEzNi4wNCAxOC44OSBDIDE1NC4wNSAxMi41NCAxNzMuMDIgOC44NyAxOTIuMTEgOC4xMyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTYuMjMgMjEuMzUgQyAxOTcuNjAgMTguOTMgMTk4Ljk1IDE2LjUwIDIwMC4zNyAxNC4xMSBDIDIwMS43MiAxNi40OCAyMDMuMDQgMTguODYgMjA0LjMzIDIxLjI3IEMgMjA2Ljk1IDIxLjgwIDIwOS41OSAyMi4yMiAyMTIuMTggMjIuODkgQyAyMTAuNzAgMjUuMTYgMjA4LjY1IDI2Ljk4IDIwNi44MiAyOC45NiBDIDIwNy4yMiAzMS42NSAyMDcuNTMgMzQuMzUgMjA3Ljg2IDM3LjA0IEMgMjA1LjMwIDM1Ljg2IDIwMi43NCAzNC42NyAyMDAuMTQgMzMuNTggQyAxOTcuNzQgMzQuODIgMTk1LjMyIDM2LjA0IDE5Mi43NSAzNi44NyBDIDE5My4xNiAzNC4yMiAxOTMuNTQgMzEuNTYgMTkzLjg0IDI4Ljg5IEMgMTkxLjkzIDI2LjkwIDE5MC4wMyAyNC45MCAxODguMTYgMjIuODggQyAxOTAuODMgMjIuMzEgMTkzLjUyIDIxLjc4IDE5Ni4yMyAyMS4zNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxODEuMTIgNDQuMzggQyAyMTIuMjYgNDAuNjAgMjQ0LjUzIDQ2LjE5IDI3Mi4zNiA2MC43NiBDIDMxMC45MyA4MC41NiAzNDAuNTEgMTE3LjA2IDM1MS42MiAxNTkuMDAgQyAzNTguODEgMTg1LjEwIDM1OC44MiAyMTMuMDggMzUyLjIyIDIzOS4zMCBMIDM1My43OCAyMzkuNDkgQyAzNTMuMzYgMjM5LjQ5IDM1Mi41MyAyMzkuNDggMzUyLjExIDIzOS40OCBDIDM0NS4wMiAyNjcuMzkgMzI5LjkwIDI5My4yMSAzMDkuMDggMzEzLjExIEMgMjkyLjIxIDMyOS42NiAyNzEuMzYgMzQxLjk5IDI0OC45NiAzNDkuNDAgQyAyMjAuMzUgMzU4LjY5IDE4OS4wNyAzNTkuNjMgMTU5Ljk5IDM1MS45MSBDIDEzMi4zOSAzNDQuNjMgMTA2LjgzIDMyOS42OSA4Ny4xMSAzMDkuMDQgQyA1OC42MyAyNzkuNzQgNDIuMzUgMjM4Ljg5IDQzLjMxIDE5OC4wMCBDIDQzLjM4IDE1MS41NCA2Ni4wOSAxMDYuMTEgMTAyLjQzIDc3LjM2IEMgMTI0Ljk1IDU5LjM5IDE1Mi40OCA0Ny43MiAxODEuMTIgNDQuMzggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTEyLjc0IDc2LjczIEMgMTM0LjU0IDYxLjQ2IDE2MC4zMSA1MS41NSAxODYuOTMgNDkuNTUgQyAyMDYuNDUgNDguMjEgMjI2LjM3IDQ5LjYxIDI0NS4wNiA1NS42OCBDIDI3MC45OSA2My43OSAyOTQuNjkgNzguOTggMzEyLjc1IDk5LjI4IEMgMzMwLjAwIDExOC4zMyAzNDIuMDggMTQxLjk0IDM0Ny44MyAxNjYuOTYgQyAzNTMuODUgMTk1LjE1IDM1Mi4yOSAyMjUuMTIgMzQyLjI1IDI1Mi4yMiBDIDMzNy4yNCAyNjUuNTYgMzMwLjQ3IDI3OC4yNSAzMjIuMDUgMjg5Ljc2IEMgMzE4LjgwIDI4Ni44MCAzMTkuNjggMjgyLjQyIDMxOS43MiAyNzguNTAgQyAzMTkuMTYgMjc5LjgxIDMxOC42MyAyODEuMTMgMzE4LjEzIDI4Mi40NiBDIDMxNy4zMyAyODAuMTggMzE2LjU1IDI3Ny44NSAzMTUuMTIgMjc1Ljg4IEMgMzE1LjUyIDI3Ny4xNiAzMTYuMzEgMjc5LjcyIDMxNi43MSAyODEuMDAgQyAzMTUuMzEgMjc5LjczIDMxMy44MCAyNzguNjQgMzEyLjE4IDI3Ny43MiBDIDMxMy4yMiAyNzkuMzYgMzE0LjQ0IDI4MC44NyAzMTUuNjcgMjgyLjM5IEMgMzE0LjIzIDI4MS43NyAzMTIuNzggMjgxLjIwIDMxMS4zMCAyODAuNjkgQyAzMTIuMzUgMjgxLjg3IDMxMy42MSAyODIuNzUgMzE1LjA4IDI4My4zNSBDIDMxMy45NSAyODMuNjQgMzEyLjgyIDI4My45MyAzMTEuNzAgMjg0LjIzIEMgMzE2LjE1IDI4NC41NCAzMTguMTkgMjg4LjY3IDMyMC4zNSAyOTEuOTUgQyAzMTkuMDAgMjkzLjcyIDMxNy41OSAyOTUuNDUgMzE2LjE1IDI5Ny4xNSBDIDMxMi41OCAyOTQuNTYgMzExLjEzIDI5MC40MSAzMTAuNTUgMjg2LjE5IEMgMzEwLjIzIDI4Ni4zNCAzMDkuNTkgMjg2LjY0IDMwOS4yOCAyODYuNzggQyAzMDguNTkgMjg1LjIzIDMwNi45MiAyODQuODIgMzA2LjQ3IDI4Ni43NiBDIDMwNi44OCAyODcuMjkgMzA3LjY5IDI4OC4zMyAzMDguMTAgMjg4Ljg2IEMgMzA3LjQ1IDI4OC43NSAzMDYuMTQgMjg4LjU1IDMwNS40OSAyODguNDQgQyAzMDYuNTkgMjg5LjcyIDMwNy43MSAyOTAuOTggMzA4LjgyIDI5Mi4yNiBDIDMwNy45NyAyOTIuMjUgMzA2LjI3IDI5Mi4yMyAzMDUuNDEgMjkyLjIyIEMgMzA4LjQ3IDI5NC40MSAzMTEuNDcgMjk2Ljc0IDMxMy44MSAyOTkuNzIgQyAzMTMuMDcgMzAwLjYyIDMxMi4zMyAzMDEuNTIgMzExLjYwIDMwMi40NCBDIDMxMC45MyAzMDAuODAgMzEwLjY0IDI5OC44MiAzMDkuMDcgMjk3Ljc2IEMgMzA1Ljc4IDI5NS4wNyAzMDIuMTEgMjkyLjkxIDI5OC41OCAyOTAuNTcgQyAyOTcuMTcgMjg5LjQ3IDI5NS4zNSAyODkuNTAgMjkzLjY3IDI4OS4zMyBDIDI5My4zNCAyOTAuNjMgMjkzLjAyIDI5MS45MyAyOTIuNzAgMjkzLjIzIEMgMjkzLjAyIDI5NC4wNyAyOTMuMzUgMjk0LjkyIDI5My42OCAyOTUuNzcgQyAyOTIuMTUgMjk5Ljc1IDI5MS4yMCAzMDMuOTEgMjkwLjE3IDMwOC4wMyBDIDI4Ni4zOSAzMDAuOTEgMjgyLjM5IDI5My43OSAyODAuOTUgMjg1Ljc1IEMgMjgwLjUzIDI4Ny45NCAyODAuMTYgMjkwLjE3IDI3OC43OCAyOTIuMDAgQyAyNzcuNzggMjkwLjQ3IDI3Ni44MiAyODguODggMjc1LjM4IDI4Ny43MSBDIDI3Ni4yMiAyOTAuNTIgMjc3LjM3IDI5My4yMyAyNzguMDUgMjk2LjA5IEMgMjc4LjU4IDI5OC43NCAyODEuODIgMjk5LjU3IDI4Mi41OSAzMDIuMTIgQyAyODMuODYgMzA1LjUwIDI4NC45NiAzMDguOTUgMjg2LjQ1IDMxMi4yNCBDIDI4NS4yNSAzMTEuNTcgMjg0LjA2IDMxMC45MSAyODIuODcgMzEwLjI0IEMgMjgxLjcwIDMxMC41OCAyODAuNTQgMzEwLjkyIDI3OS4zOSAzMTEuMjggQyAyNzkuMTAgMzExLjgxIDI3OC41MiAzMTIuODcgMjc4LjIzIDMxMy4zOSBDIDI3Ni44OSAzMTEuNTEgMjc1LjU2IDMwOS41NiAyNzMuNjcgMzA4LjE5IEMgMjc1LjU0IDMwNi44MiAyNzcuNTkgMzA1LjM4IDI3OC4wNiAzMDIuOTQgQyAyNzQuODcgMzA0LjgxIDI3Mi4xNiAzMDcuMzUgMjY5LjEzIDMwOS40MyBDIDI2Ny4yMiAzMTAuNTEgMjY2Ljc0IDMxMi43OCAyNjUuODYgMzE0LjYyIEMgMjYxLjc3IDMxMC45NiAyNjEuNTIgMzA1LjM0IDI2MC4yOCAzMDAuMzYgQyAyNjAuMDIgMzAxLjY2IDI1OS43NyAzMDIuOTcgMjU5LjU0IDMwNC4yOCBDIDI1OC43MSAzMDIuNjYgMjU3Ljc4IDMwMS4wMyAyNTYuMDkgMzAwLjE2IEMgMjU2LjA3IDMwMy4zOSAyNTYuMjggMzA2LjY1IDI1Ny4yMCAzMDkuNzYgQyAyNTUuODAgMzA5LjcwIDI1NC40MCAzMDkuNjYgMjUzLjAwIDMwOS42NSBDIDI1NC44NCAzMTEuMTcgMjU2LjgzIDMxMi40OCAyNTguODkgMzEzLjY5IEMgMjU4LjkxIDMxNi4zOSAyNTguODYgMzE5LjA4IDI1OC44MCAzMjEuNzggQyAyNTcuNjIgMzIzLjA3IDI1Ni40MiAzMjQuMzUgMjU1LjE5IDMyNS41OSBDIDI1Mi40MiAzMjQuMTEgMjQ5Ljc3IDMyMi4zOCAyNDYuNzcgMzIxLjQxIEMgMjQ2LjI5IDMxOC44NiAyNDUuNzIgMzE2LjMyIDI0NS4yNiAzMTMuNzYgQyAyNDQuMDggMzEzLjAwIDI0Mi45MCAzMTIuMjMgMjQxLjczIDMxMS40NiBDIDIzOC4yMiAzMTIuNjMgMjM2LjU3IDMxNi4yMCAyMzcuNjEgMzE5LjcxIEMgMjM2Ljg0IDMxOS45NSAyMzYuMDggMzIwLjIwIDIzNS4zMSAzMjAuNDUgQyAyMzUuNjUgMzE1LjkwIDIzNy4yNyAzMTEuNTQgMjM3LjUyIDMwNy4wMSBDIDIzNy42NSAzMDQuOTEgMjM0LjYwIDMwNS4yMSAyMzMuMzkgMzA0LjU0IEMgMjM0LjYzIDMxMi44OCAyMzEuNzkgMzIxLjAxIDIyOC44MiAzMjguNjQgQyAyMjguMDEgMzI4Ljg3IDIyNi4zOCAzMjkuMzMgMjI1LjU3IDMyOS41NiBDIDIyNC45NyAzMjQuMDYgMjIyLjQ5IDMxNy44OSAyMjYuMjcgMzEyLjk4IEMgMjI1LjUzIDMxMS4yMiAyMjQuOTQgMzA5LjQwIDIyNC4zNiAzMDcuNTggQyAyMjMuOTMgMzA3LjU2IDIyMy4wNyAzMDcuNTEgMjIyLjY0IDMwNy40OSBDIDIxOS43NyAzMTIuMTEgMjIyLjgxIDMxNy43OCAyMjAuMTQgMzIyLjUyIEMgMjE3LjMyIDMxOS42MiAyMTUuNTUgMzE1LjkxIDIxMi44NyAzMTIuOTAgQyAyMTMuMzQgMzE0LjQ1IDIxMy45MCAzMTUuOTggMjE0LjUxIDMxNy41MCBDIDIxMy42NCAzMTguMzQgMjEyLjc3IDMxOS4xOSAyMTEuOTIgMzIwLjA0IEMgMjEzLjE4IDMyMC42OCAyMTQuNDUgMzIxLjMwIDIxNS43NCAzMjEuODYgQyAyMTYuMzcgMzIyLjc3IDIxNy4wMCAzMjMuNjkgMjE3LjY1IDMyNC42MCBDIDIxNS4wNSAzMjUuMTcgMjEyLjM3IDMyNS43NiAyMTAuNDQgMzI3Ljc0IEMgMjEwLjk3IDMyNS4yMiAyMDguMzcgMzI0LjQxIDIwNy40MCAzMjIuNjAgQyAyMDYuNjggMzIwLjg2IDIwOC4wNyAzMTkuMzIgMjA4LjY3IDMxNy44MCBDIDIwOC4zMiAzMTYuMzggMjA3Ljk0IDMxNC45NyAyMDcuNTUgMzEzLjU3IEMgMjA2Ljg0IDMxNC4zMyAyMDUuNzQgMzE0LjkzIDIwNS41OCAzMTYuMDYgQyAyMDQuMzQgMzIxLjczIDIwNi40NyAzMjcuNDMgMjA2LjMwIDMzMy4xMyBDIDIwNS41NiAzMzIuMTQgMjA0Ljg0IDMzMS4xNSAyMDQuMTEgMzMwLjE2IEMgMjAxLjY3IDMyOC45MiAyMDAuMTkgMzI2LjYyIDE5OC4zOCAzMjQuNjkgQyAxOTYuNTIgMzIyLjk4IDE5My45MSAzMjQuMzEgMTkxLjc2IDMyNC40OSBDIDE5MC44NiAzMjcuMTMgMTg5LjcwIDMyOS45NSAxOTAuNDMgMzMyLjc5IEMgMTkxLjE2IDMzNC42MiAxOTIuMTEgMzM2LjM1IDE5Mi45MSAzMzguMTUgQyAxOTEuNjQgMzM3LjE5IDE4OS44NSAzMzYuNTQgMTg5LjMxIDMzNC45MCBDIDE4OC44NCAzMzIuNDQgMTg4Ljc1IDMyOS45MyAxODguMzkgMzI3LjQ2IEMgMTkxLjc4IDMyNC4wNSAxOTUuNTUgMzIxLjA5IDE5OS41MSAzMTguMzggQyAyMDEuMTEgMzE3LjYwIDIwMC40MSAzMTUuNzggMjAwLjQyIDMxNC40MCBDIDIwMC42NCAzMTQuMDYgMjAxLjA3IDMxMy4zOSAyMDEuMjggMzEzLjA1IEMgMTk5LjcxIDMxMy40OCAxOTcuMzkgMzEyLjYyIDE5Ni40MiAzMTQuMzQgQyAxOTQuNDggMzE2Ljc2IDE5My41NiAzMTkuOTggMTkwLjk5IDMyMS44OSBDIDE4OS4yOCAzMjMuMjEgMTg3LjQzIDMyNC4zNCAxODUuNjMgMzI1LjU0IEMgMTg1LjMxIDMyNS4yNyAxODQuNjUgMzI0LjczIDE4NC4zMiAzMjQuNDcgQyAxODMuNDYgMzI0LjUyIDE4MS43MiAzMjQuNjIgMTgwLjg1IDMyNC42OCBDIDE4Mi41MiAzMjEuMDYgMTgzLjg5IDMxNy4zMCAxODUuNjYgMzEzLjczIEMgMTg2LjI4IDMxMi4yNSAxODcuMzQgMzEwLjcwIDE4Ni43OSAzMDkuMDQgQyAxODYuMTkgMzA3Ljc1IDE4NC42NCAzMDcuNTggMTgzLjUxIDMwNy4wMSBDIDE4Mi42OSAzMTYuMzUgMTc3LjA5IDMyNC4yNyAxNzEuOTEgMzMxLjc0IEMgMTcxLjAyIDMzMC4xOSAxNzAuMDUgMzI4LjY5IDE2OS4yNSAzMjcuMTAgQyAxNzIuMDAgMzIyLjgzIDE3My41MyAzMTcuMDIgMTc4LjcwIDMxNS4wNiBDIDE3OC43NyAzMTMuNDQgMTc4LjcxIDMxMS44MyAxNzguNTggMzEwLjIyIEMgMTc3LjY1IDMxMC4zOCAxNzYuNzMgMzEwLjU2IDE3NS44MSAzMTAuNzggQyAxNzYuMTcgMzExLjk2IDE3Ni42MyAzMTMuMTkgMTc2LjEyIDMxNC40MyBDIDE3NS44NCAzMTMuNTMgMTc1LjI5IDMxMS43NSAxNzUuMDEgMzEwLjg1IEMgMTczLjk0IDMxMi45MyAxNzMuNDggMzE1LjI3IDE3Mi4zNSAzMTcuMzIgQyAxNzAuODQgMzE5LjU5IDE2OC43NyAzMjEuNDAgMTY2LjkwIDMyMy4zNyBDIDE2NS45MiAzMjIuNjIgMTY0Ljk0IDMyMS44OCAxNjMuOTYgMzIxLjE1IEMgMTYwLjk4IDMyMC45MSAxNTcuOTcgMzIxLjIzIDE1NS40MyAzMjIuOTEgQyAxNTUuMDMgMzIwLjI0IDE1NC42NiAzMTcuNTYgMTU0LjQzIDMxNC44NyBDIDE1NS4yNiAzMTMuOTUgMTU2LjA4IDMxMy4wNSAxNTYuOTEgMzEyLjE0IEMgMTU2Ljg3IDMxMC43NCAxNTYuODQgMzA5LjM0IDE1Ni44MSAzMDcuOTUgQyAxNTUuMDggMzA2Ljk1IDE1My41MSAzMDUuMDkgMTUxLjM0IDMwNS4zNCBDIDE0OC43NCAzMDYuNTkgMTQ2LjI2IDMwOC44MyAxNDUuODggMzExLjgzIEMgMTQ1LjU4IDMxNC4wMiAxNDUuNTYgMzE2LjIzIDE0NS4zOSAzMTguNDMgQyAxNDQuOTIgMzE4LjU0IDE0My45NyAzMTguNzYgMTQzLjUwIDMxOC44OCBDIDE0Mi45OCAzMTUuMjUgMTQzLjU5IDMxMS42NiAxNDQuNDMgMzA4LjE0IEMgMTQ3LjczIDMwNS45OSAxNTEuMDIgMzAzLjY4IDE1NC44OCAzMDIuNjMgQyAxNTYuMzAgMzAzLjQzIDE1Ny43MyAzMDQuMjEgMTU5LjE4IDMwNC45NyBDIDE2MC41NyAzMDIuODAgMTYwLjg3IDMwMC4zNCAxNTkuNzEgMjk4LjAxIEMgMTUzLjUwIDMwMC4zNyAxNDYuOTAgMzAxLjc5IDE0MC45NyAzMDQuODUgQyAxMzkuMTQgMzA5LjQ0IDEzNi43NCAzMTMuNzkgMTM1LjM4IDMxOC41NiBMIDEzNC42NSAzMTguMTggQyAxMzQuMTYgMzE5LjU5IDEzMy42MiAzMjAuOTkgMTMzLjAzIDMyMi4zNiBDIDEzMS43OCAzMTguMTkgMTI5LjkwIDMxNC4yMyAxMjguODMgMzEwLjAwIEMgMTI5LjU4IDMwOS4yNyAxMzEuMDggMzA3LjgwIDEzMS44MiAzMDcuMDYgTCAxMjguNzUgMzA3LjMyIEMgMTI5Ljg5IDMwNi41OCAxMzEuMDMgMzA1LjgzIDEzMi4xNiAzMDUuMDggQyAxMzEuMTEgMzA0LjcwIDEyOC45OSAzMDMuOTYgMTI3Ljk0IDMwMy41OSBDIDEyNy4zNiAzMDAuOTkgMTI3LjA4IDI5OC4zMyAxMjcuNjcgMjk1LjcxIEMgMTI2LjM2IDI5Ny45MSAxMjQuNjQgMjk5LjgxIDEyMi43OCAzMDEuNTcgQyAxMjMuNjAgMzAxLjUzIDEyNS4yMiAzMDEuNDYgMTI2LjAzIDMwMS40MiBDIDEyNS4zMCAzMDIuMDcgMTIzLjgzIDMwMy4zNyAxMjMuMTAgMzA0LjAyIEMgMTIzLjU3IDMwNC41MyAxMjQuNTEgMzA1LjU1IDEyNC45OCAzMDYuMDYgQyAxMjIuMzYgMzA4LjgyIDExOC44OCAzMTAuNDMgMTE1LjE5IDMxMS4xNiBDIDExNi4zMSAzMDQuOTEgMTE3LjMxIDI5OC40NCAxMjAuNTggMjkyLjg3IEMgMTE5LjgyIDI5My4yMiAxMTguMjggMjkzLjkwIDExNy41MiAyOTQuMjUgQyAxMTguMDQgMjkzLjMwIDExOS4wOCAyOTEuNDAgMTE5LjYwIDI5MC40NSBDIDExOC43OCAyOTEuMjcgMTE3LjE0IDI5Mi45MSAxMTYuMzIgMjkzLjc0IEMgMTE2LjUxIDI5Mi43NyAxMTYuODkgMjkwLjg0IDExNy4wOSAyODkuODggQyAxMTYuNjYgMjkwLjM5IDExNS44MCAyOTEuNDMgMTE1LjM4IDI5MS45NSBDIDExNC45NyAyODkuNjcgMTEyLjU5IDI4OS41NiAxMTMuMjEgMjkxLjg3IEMgMTEyLjQ1IDI5NS4wNyAxMTUuNDggMjk4LjAxIDExNC4wNCAzMDEuMTAgQyAxMTIuODUgMzA0LjMzIDExMS42MCAzMDcuNTcgMTEwLjk4IDMxMC45OCBDIDEwOS42NCAzMTAuNTkgMTA4LjMwIDMxMC4yNiAxMDYuOTUgMzA5Ljk3IEMgMTA4LjI4IDMwOC41MCAxMDkuNDYgMzA2LjkwIDExMC4zOSAzMDUuMTUgQyAxMTEuMTkgMzA0LjM4IDExMS45OCAzMDMuNTggMTEyLjY5IDMwMi43MiBDIDExMi4wNCAzMDIuNDUgMTEwLjc1IDMwMS45MCAxMTAuMTAgMzAxLjYzIEMgMTEwLjY4IDI5OS45NSAxMTEuMjggMjk4LjI4IDExMS42OCAyOTYuNTYgQyAxMDkuMjkgMjk5LjQ0IDEwNy45MSAzMDIuOTUgMTA2LjIyIDMwNi4yNCBDIDEwMy44NSAzMDguNzkgMTAwLjQ0IDMxMC4wMyA5Ny4zNCAzMTEuNDQgQyA5Ny4zMiAzMTEuMTkgOTcuMjcgMzEwLjcxIDk3LjI0IDMxMC40NiBDIDk4LjA3IDMwNC4wOCA5Ny4zMiAyOTcuNjIgOTguMzcgMjkxLjI2IEMgMTAxLjE5IDI4OS42MSAxMDQuMTAgMjg4LjA3IDEwNi42OSAyODYuMDUgQyAxMDYuNTYgMjg1LjQwIDEwNi4yOSAyODQuMDkgMTA2LjE2IDI4My40MyBDIDEwMy41MiAyODUuMTkgMTAwLjYxIDI4Ni40NCA5Ny44NiAyODguMDAgQyA5NS43MCAyODkuMzYgOTUuMjIgMjkyLjA3IDk0LjU2IDI5NC4zNSBDIDkzLjQwIDI5OC4zOCA5Mi44NSAzMDIuNTUgOTIuNjQgMzA2LjczIEMgOTEuMzAgMzA1LjA5IDg5Ljg2IDMwMy41NCA4OC4zOSAzMDIuMDIgTCA4OC4zNCAzMDEuNDUgQyA4OC40MCAyOTguOTMgODcuMzcgMjk2LjY1IDg2LjQwIDI5NC40MCBDIDg0LjgxIDI5My44NyA4My4yNiAyOTMuOTQgODEuNzMgMjk0LjYwIEMgODEuNTAgMjkzLjQxIDgxLjI1IDI5Mi4yMyA4MS4wOSAyOTEuMDQgQyA4NS4xMiAyODguMTIgODkuMTggMjg1LjEwIDkyLjUzIDI4MS40MCBDIDkyLjI2IDI4MC42NCA5MS43MCAyNzkuMTEgOTEuNDIgMjc4LjM0IEMgOTEuMDEgMjc4LjAyIDkwLjE4IDI3Ny4zOSA4OS43NyAyNzcuMDcgQyA4Ni42NiAyODEuODMgODIuNjcgMjg1LjkzIDc3Ljg5IDI4OS4wMiBDIDU5LjA3IDI2My40NyA0OC41NSAyMzEuNzUgNDkuMTAgMTk5Ljk2IEMgNDguNjAgMTY4LjM4IDU5LjIxIDEzNy4wNSA3Ny42MiAxMTEuNTMgQyA4Ny40NSA5OC4yMiA5OS4zNCA4Ni40MyAxMTIuNzQgNzYuNzMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk2LjkwIDU3LjQyIEMgMjA1Ljk1IDU1LjEyIDIxNi40NSA1OC4zMCAyMjIuMDMgNjUuOTYgQyAyMjcuMTUgNzIuNzMgMjI3LjM3IDgyLjE3IDIyNC41OCA4OS45MiBDIDIyMS41NSA5Ny44MyAyMTMuOTcgMTAyLjg0IDIwNi4zMCAxMDUuNjEgQyAyMDYuMjkgMTA4LjAyIDIwNi4yNyAxMTAuNDIgMjA2LjI2IDExMi44MyBDIDIwNC4wOSAxMTUuMTYgMjAyLjAzIDExNy41OSAxOTkuOTcgMTIwLjAzIEMgMTk4LjcwIDExOC43MCAxOTYuODAgMTE3Ljc2IDE5Ni4xMSAxMTYuMDAgQyAxOTcuMDAgMTE0LjQwIDE5OC4zOSAxMTMuMTUgMTk5LjYxIDExMS44MCBDIDE5MS44MCAxMDQuODggMTgyLjk5IDk5LjE3IDE3NS4zMiA5Mi4xMCBDIDE3Ni4wNyA5MC42MCAxNzcuMjMgODkuNDYgMTc4Ljg3IDg5LjAyIEMgMTgzLjA3IDkyLjkyIDE4Ni45NSA5Ny4xNiAxOTEuMTggMTAxLjAzIEMgMTkzLjQzIDk0LjcyIDE5Ni4wMSA4OC40OSAxOTcuNzggODIuMDQgQyAxOTcuNDUgNzguMjQgMTk2LjA0IDc0LjYzIDE5NS4yMiA3MC45MiBDIDE5MC4wOSA2OS43NSAxODUuMTUgNjcuODYgMTgwLjAyIDY2LjY3IEMgMTc4LjIwIDY2LjkyIDE3Ni40MSA2Ny4zNSAxNzQuNTkgNjcuNTUgQyAxNzQuNTUgNjYuNTAgMTc0LjUxIDY1LjQ2IDE3NC40OSA2NC40MSBDIDE3Ny4zOCA2NC4zNyAxODAuMjIgNjQuOTYgMTgzLjA1IDY1LjQ2IEMgMTg2LjkwIDYxLjY5IDE5MS41NSA1OC41MyAxOTYuOTAgNTcuNDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTg0Ljk0IDY1LjgxIEMgMTg5LjMyIDYxLjM0IDE5NS43NCA1OS4wMiAyMDEuOTcgNTkuNTAgQyAyMDkuNDggNTkuNzAgMjE2LjU1IDY0LjYyIDIxOS40MyA3MS41NSBDIDIyMi41MCA3OS4wOCAyMjIuNTUgODguMjAgMjE4LjI0IDk1LjI4IEMgMjE2LjEwIDk4Ljc4IDIxMi42MiAxMDEuMjIgMjA4Ljg1IDEwMi43MCBDIDIwNy4zOCA5NS43NSAyMDYuMTkgODguNzMgMjA0LjQxIDgxLjg3IEMgMjAzLjg0IDgxLjcyIDIwMi43MCA4MS40MSAyMDIuMTMgODEuMjUgQyAyMDMuOTYgNzkuMDAgMjA1LjMxIDc2LjQwIDIwNi4wNyA3My41OSBDIDIwOS45OSA3Mi44MiAyMTMuOTggNzIuNTggMjE3Ljk1IDcyLjI0IEMgMjE0LjY5IDY4Ljc3IDIwOS45NSA2Ni41NSAyMDcuOTQgNjIuMDQgQyAyMDcuMjUgNjIuMTcgMjA1Ljg2IDYyLjQyIDIwNS4xNyA2Mi41NSBDIDIwNS41MiA2My41NSAyMDUuNDAgNjUuMDYgMjA2Ljc3IDY1LjMyIEMgMjA4Ljg2IDY2LjE0IDIxMC4wOCA2OC4wOSAyMTEuMjggNjkuODYgQyAyMDguMjYgNjkuNzUgMjA1LjI5IDY5LjIyIDIwMi4zNiA2OC41MiBDIDIwMi4wOCA2Ni4xOCAyMDEuODUgNjMuODQgMjAxLjY0IDYxLjQ5IEMgMTk5LjgzIDYxLjI0IDE5OC4wMSA2MS4wMCAxOTYuMTkgNjAuODUgQyAxOTYuNTggNjMuNzMgMTk3LjY4IDY2LjQzIDE5OS44OSA2OC4zOSBDIDE5NC44OCA2Ny42OCAxODkuOTEgNjYuNzQgMTg0Ljk0IDY1LjgxIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE5Mi4xOSAxMDIuMDAgQyAxOTQuODggOTYuODcgMTk4LjEzIDkyLjAzIDIwMS4wOCA4Ny4wNCBDIDIwMy40NCA5Mi4zMSAyMDUuNDUgOTcuNzMgMjA3LjYwIDEwMy4xMCBDIDIwNC43NSAxMDUuMDEgMjAyLjkzIDEwNy45OCAyMDAuNzUgMTEwLjU3IEMgMTk3Ljc5IDEwNy44MiAxOTQuODMgMTA1LjA2IDE5Mi4xOSAxMDIuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk3LjUzIDk5LjQ5IEMgMTk4LjQ3IDk5LjQ4IDIwMC4zNiA5OS40NiAyMDEuMzAgOTkuNDYgQyAyMDEuMjkgMTAyLjA4IDIwMS4zMCAxMDQuNzAgMjAxLjI5IDEwNy4zMyBDIDIwMC42NyAxMDcuMjkgMTk5LjQ0IDEwNy4yMCAxOTguODIgMTA3LjE2IEMgMTk4LjY1IDEwNC41NiAxOTguNjQgMTAxLjkxIDE5Ny41MyA5OS40OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxNzUuNjkgMTA5LjU1IEMgMTc2LjAwIDEwNy40MyAxNzQuMzYgMTAzLjcyIDE3Ny43MCAxMDMuNjUgQyAxNzcuNzEgMTA0LjU3IDE3Ny43NCAxMDYuNDIgMTc3Ljc1IDEwNy4zNSBDIDE4MC42NSAxMDcuNDUgMTgzLjU1IDEwNy41NiAxODYuNDUgMTA3LjM4IEMgMTg3LjIxIDEwOC45OCAxODcuOTkgMTEwLjU3IDE4OC44NiAxMTIuMTEgQyAxODkuNzcgMTEwLjYxIDE4OC41MyAxMDguOTkgMTg4LjM0IDEwNy40OCBDIDE4OS4xOSAxMDcuNDUgMTkwLjg4IDEwNy40MCAxOTEuNzMgMTA3LjM3IEMgMTkxLjc4IDExMC4zMCAxOTEuODAgMTEzLjI0IDE5MS43OCAxMTYuMTcgQyAxODkuMTAgMTE1LjkzIDE4Ni4xMiAxMTYuODEgMTgzLjY0IDExNS41NiBDIDE4My42MyAxMTUuMTUgMTgzLjYwIDExNC4zMyAxODMuNTggMTEzLjkyIEMgMTg0LjQwIDExMy44MiAxODYuMDQgMTEzLjYyIDE4Ni44NiAxMTMuNTIgQyAxODUuNzYgMTExLjM1IDE4NC40MyAxMDkuMzAgMTgyLjgyIDEwNy40OCBDIDE4MS4zMiAxMTAuNjEgMTgyLjc0IDExNy4zNiAxNzcuMzUgMTE2LjQwIEMgMTc3LjI0IDExNC45OCAxNzcuODEgMTEzLjg4IDE3OS4wNSAxMTMuMDkgQyAxNzkuMTkgMTEyLjIxIDE3OS40NiAxMTAuNDUgMTc5LjYwIDEwOS41NyBDIDE3OC4yOSAxMDkuNTYgMTc2Ljk5IDEwOS41NiAxNzUuNjkgMTA5LjU1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDIwNy40OSAxMDcuMzcgQyAyMDkuNzUgMTA3LjQwIDIxMi4wMSAxMDcuNDEgMjE0LjI4IDEwNy40MSBDIDIxNC4yMyAxMTAuMTggMjE0LjIzIDExMi45NSAyMTQuMzYgMTE1LjcyIEMgMjEyLjEyIDExNi4yMyAyMDkuODEgMTE2LjIyIDIwNy41MiAxMTYuMjMgQyAyMDcuNTAgMTE1LjYxIDIwNy40NCAxMTQuMzkgMjA3LjQxIDExMy43OCBDIDIwOC44NiAxMTMuNzggMjEwLjMxIDExMy43OSAyMTEuNzYgMTEzLjc5IEMgMjExLjY2IDExMi4xNyAyMTEuODIgMTEwLjQ0IDIxMC45NCAxMDkuMDEgQyAyMTAuMzAgMTEwLjc1IDIwOS4xMiAxMTEuNTggMjA3LjQxIDExMS41MSBDIDIwNy40MyAxMTAuNDcgMjA3LjQ3IDEwOC40MSAyMDcuNDkgMTA3LjM3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDIxNS44MiAxMDcuNDIgQyAyMTcuOTUgMTA3LjQxIDIyMC4wOSAxMDcuNDEgMjIyLjIyIDEwNy40MiBDIDIyMi4xNSAxMTAuMTMgMjIyLjE0IDExMi44NSAyMjIuMjUgMTE1LjU2IEMgMjIxLjYzIDExNS43NiAyMjAuMzggMTE2LjE1IDIxOS43NiAxMTYuMzUgQyAyMTkuNzMgMTE0LjA4IDIxOS43MiAxMTEuODEgMjE5LjcwIDEwOS41NCBDIDIxOC40MiAxMDkuNTMgMjE3LjE0IDEwOS41MyAyMTUuODYgMTA5LjUzIEwgMjE1LjgyIDEwNy40MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTYuMjMgMTExLjQ0IEMgMjE2Ljc4IDExMS41MyAyMTcuODcgMTExLjcwIDIxOC40MSAxMTEuNzkgQyAyMTguMzkgMTEzLjI4IDIxOC4zNyAxMTQuNzggMjE4LjM1IDExNi4yOCBDIDIxNy42OSAxMTYuMjQgMjE2LjM5IDExNi4xNSAyMTUuNzQgMTE2LjExIEMgMjE1Ljg5IDExNC41NSAyMTYuMDUgMTEzLjAwIDIxNi4yMyAxMTEuNDQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTE5LjI1IDEzNi4zMCBDIDEyNC43NCAxMzYuMzUgMTMwLjIzIDEzNi4zMSAxMzUuNzMgMTM2LjMyIEMgMTM1Ljc2IDE0My40MiAxMzUuNjkgMTUwLjUyIDEzNS43NyAxNTcuNjIgQyAxMzguMTcgMTU1Ljk2IDE0MS40OCAxNTQuODcgMTQyLjY0IDE1MS45NSBDIDE0My4xMiAxNDYuNzYgMTQyLjY5IDE0MS41MyAxNDIuODYgMTM2LjMyIEMgMTQ4LjYzIDEzNi4zMiAxNTQuNDAgMTM2LjMxIDE2MC4xOCAxMzYuMzMgQyAxNjAuMTAgMTQxLjI2IDE2MC4yNiAxNDYuMjAgMTYwLjEyIDE1MS4xMyBDIDE1OS43OCAxNTUuMDUgMTU3LjMxIDE1OC43MSAxNTMuODkgMTYwLjYxIEMgMTQ3Ljg1IDE2NC4wNCAxNDEuODAgMTY3LjQ0IDEzNS43MyAxNzAuODAgQyAxMzUuNzMgMTc3LjgxIDEzNS43MyAxODQuODIgMTM1Ljc0IDE5MS44MyBDIDEzMC4yNCAxOTEuODYgMTI0Ljc0IDE5MS44MiAxMTkuMjMgMTkxLjg2IEMgMTE5LjI3IDE3My4zNCAxMTkuMjMgMTU0LjgyIDExOS4yNSAxMzYuMzAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTY0LjkyIDEzNi4zMiBDIDE3MC40NiAxMzYuMzUgMTc1Ljk5IDEzNi4yOCAxODEuNTIgMTM2LjM1IEMgMTgxLjQ0IDE1MC43OSAxODEuNDMgMTY1LjIzIDE4MS41MiAxNzkuNjcgQyAxNzYuMDUgMTc5LjYyIDE3MC41NyAxNzkuODcgMTY1LjEwIDE3OS41NyBDIDE2NC42MyAxNjUuMjMgMTY0Ljk5IDE1MC43MiAxNjQuOTIgMTM2LjMyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE4Ni4yOCAxMzYuMzAgQyAyMDAuNjkgMTM2LjM0IDIxNS4xMCAxMzYuMzMgMjI5LjUxIDEzNi4zMSBDIDIyOS41MiAxNTAuNzcgMjI5LjQ5IDE2NS4yMyAyMjkuNTMgMTc5LjY5IEMgMjIzLjk0IDE3OS42NCAyMTguMzUgMTc5LjgxIDIxMi43NyAxNzkuNjAgQyAyMTIuOTUgMTcwLjI4IDIxMi43NyAxNjAuOTUgMjEyLjg3IDE1MS42MiBDIDIwOS41MSAxNTEuNTUgMjA2LjE1IDE1MS41NyAyMDIuODAgMTUxLjYwIEMgMjAyLjg3IDE2MC45NiAyMDIuODEgMTcwLjMzIDIwMi44MyAxNzkuNjkgQyAxOTcuMzIgMTc5LjczIDE5MS44MCAxNzkuNjcgMTg2LjI5IDE3OS42OSBDIDE4Ni4zMCAxNjUuMjMgMTg2LjMyIDE1MC43NiAxODYuMjggMTM2LjMwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDIzNC4wOSAxMzYuMjggQyAyMzkuNjcgMTM2LjM4IDI0NS4yNSAxMzYuMjkgMjUwLjg0IDEzNi4zMyBDIDI1MC44NiAxNDEuNTIgMjUwLjY2IDE0Ni43MiAyNTAuOTkgMTUxLjkwIEMgMjUzLjg4IDE0OC45MCAyNTMuNTMgMTQ0LjIzIDI1NS44MCAxNDAuODMgQyAyNTcuNTcgMTM3LjU5IDI2MS40MSAxMzYuMjggMjY0LjkyIDEzNi4zNCBDIDI2OC43NCAxMzYuNDAgMjcyLjg1IDEzNS43OCAyNzYuNDIgMTM3LjQ4IEMgMjc5LjUxIDEzOS4wNCAyODAuNzYgMTQyLjY3IDI4MC43MSAxNDUuOTUgQyAyODAuNzQgMTU3LjE4IDI4MC43MCAxNjguNDIgMjgwLjcyIDE3OS42NiBDIDI3Mi45MiAxNzkuNjYgMjY1LjEyIDE3OS43MCAyNTcuMzIgMTc5LjY2IEMgMjU3LjM3IDE3NC41OSAyNTcuMzUgMTY5LjUyIDI1Ny4zMiAxNjQuNDUgQyAyNTkuNTYgMTY0LjQ1IDI2MS44MSAxNjQuNDQgMjY0LjA2IDE2NC40MyBDIDI2NC4wMyAxNjAuNjIgMjY0LjI0IDE1Ni43OSAyNjMuNzMgMTUzLjAxIEMgMjYyLjA5IDE1Mi40MSAyNTkuMTEgMTUxLjg2IDI1OC40NSAxNTQuMDQgQyAyNTUuODYgMTYyLjU1IDI1My41MSAxNzEuMTQgMjUwLjk0IDE3OS42NiBDIDI0NS4wNyAxNzkuNzMgMjM5LjE5IDE3OS43MiAyMzMuMzIgMTc5LjY2IEMgMjM1LjU0IDE3Mi42NiAyMzcuNTkgMTY1LjYwIDIzOS44OSAxNTguNjIgQyAyMzcuNzkgMTU4LjIyIDIzNC42MCAxNTcuOTAgMjM0LjM2IDE1NS4xOCBDIDIzMy43NiAxNDguOTEgMjM0LjI1IDE0Mi41OCAyMzQuMDkgMTM2LjI4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIyLjM2IDE4My45OCBDIDI0LjkzIDE4NC42MyAyNy40MiAxODUuNTUgMjkuNzQgMTg2Ljg1IEMgMjguODIgMTg3LjM2IDI2Ljk4IDE4OC4zOCAyNi4wNyAxODguODkgQyAyNi40NCAxODkuMDYgMjcuMTkgMTg5LjQwIDI3LjU3IDE4OS41NiBDIDI3Ljc4IDE5MC4yNCAyOC4yMCAxOTEuNjAgMjguNDEgMTkyLjI4IEMgMjguMjkgMTkyLjk0IDI4LjA2IDE5NC4yNiAyNy45NCAxOTQuOTIgQyAyOS40MCAxOTIuMTQgMzIuNjAgMTkwLjk0IDM0LjEwIDE4OC4yMSBDIDM0LjcyIDE4OC4yMCAzNS45NyAxODguMjAgMzYuNTkgMTg4LjIwIEMgMzYuNTggMTg5LjM3IDM2LjU3IDE5MC41NSAzNi41NiAxOTEuNzMgQyAzMy45NSAxOTIuNzkgMzEuNzIgMTk0LjUxIDI5LjQxIDE5Ni4wOCBDIDMwLjU5IDE5Ni44NyAzMS43OCAxOTcuNjggMzIuOTcgMTk4LjQ4IEMgMzMuODMgMTk4LjM1IDM1LjU3IDE5OC4wOCAzNi40NCAxOTcuOTUgQyAzNi40NyAxOTkuNTcgMzYuNDkgMjAxLjIwIDM2LjQ4IDIwMi44MyBDIDMzLjY3IDIwMS44NyAzMS4wNiAyMDAuNDUgMjguNDQgMTk5LjA3IEMgMjcuNDggMjAxLjIyIDI1LjYxIDIwMi42NSAyMy43NiAyMDMuOTkgQyAyNS41OSAyMDUuMzQgMjcuNTQgMjA2LjU3IDI5LjA2IDIwOC4yOSBDIDMwLjIwIDIwOS44MyAyOC43NSAyMTEuNzcgMjguNDggMjEzLjM3IEMgMjkuOTAgMjE0LjA0IDMxLjMzIDIxNC43NSAzMi4wMCAyMTYuMjkgQyAzMC4yOCAyMTYuMzAgMjguNTcgMjE2LjIyIDI2Ljg2IDIxNi4wNCBDIDI0LjkzIDIxNS4yMyAyNS45OSAyMTIuODMgMjUuNjQgMjExLjI3IEMgMjQuODYgMjEwLjI2IDIzLjYzIDIwOS43NiAyMi42MSAyMDkuMDYgQyAyMS4yNSAyMTAuMzIgMTkuNDMgMjExLjMzIDE5LjA1IDIxMy4zMCBDIDIwLjQzIDIxNC4wMyAyMS44NSAyMTQuNzggMjIuNjYgMjE2LjIxIEMgMjAuNjkgMjE2LjI2IDE4LjcyIDIxNi4yNSAxNi43NCAyMTYuMjAgQyAxNS43NiAyMTIuNjIgMTguMDIgMjA5LjIxIDE3LjI2IDIwNS42NyBDIDE2LjM2IDIwNS4xMiAxNS40MSAyMDQuNjUgMTQuNDQgMjA0LjI1IEMgMTIuOTggMjAwLjk0IDE0LjgxIDE5Ny40MyAxNC4yMSAxOTQuMDMgQyAxMy44OSAxOTIuNDEgMTMuNDkgMTkwLjgyIDEzLjIwIDE4OS4yMCBDIDEzLjgwIDE4OS4yMiAxNS4wMiAxODkuMjQgMTUuNjMgMTg5LjI2IEMgMTUuOTIgMTkzLjUwIDE1LjYyIDE5Ny43NCAxNS41MSAyMDEuOTggQyAxNS45MCAyMDIuNDIgMTYuNjggMjAzLjI5IDE3LjA3IDIwMy43MiBDIDE4LjU1IDIwMi4zMyAyMC43NSAyMDEuMzIgMjEuMTIgMTk5LjExIEMgMjEuNjYgMTk1LjY0IDE4Ljc3IDE5Mi41MCAxOS42OCAxODkuMDEgQyAyMC4zMiAxODcuMjEgMjEuNDIgMTg1LjYzIDIyLjM2IDE4My45OCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNjkuMjUgMTg2LjkwIEMgMzcxLjU0IDE4NS41NSAzNzQuMDQgMTg0LjY0IDM3Ni42MCAxODMuOTUgQyAzNzcuNTQgMTg1LjYwIDM3OC42MyAxODcuMTkgMzc5LjMwIDE4OC45OCBDIDM3OS45OCAxOTIuMDkgMzc4LjA2IDE5NC45OCAzNzcuNzcgMTk4LjAyIEMgMzc3LjYzIDIwMC41OSAzNzkuODMgMjAyLjM1IDM4MS44NSAyMDMuNDcgQyAzODQuNzggMjAyLjcwIDM4My4wMSAxOTkuMDggMzgzLjI4IDE5Ni45OSBDIDM4My42MSAxOTQuMDkgMzgxLjkxIDE5MC4wMSAzODUuMTYgMTg4LjMxIEMgMzg1LjQwIDE4OS41NiAzODUuNzEgMTkwLjg4IDM4NS4yMiAxOTIuMTMgQyAzODMuNjMgMTk2LjExIDM4Ni4xNCAyMDAuMzYgMzg0LjU3IDIwNC4zNCBDIDM4My44NSAyMDQuNTkgMzgyLjQyIDIwNS4xMCAzODEuNzEgMjA1LjM2IEMgMzgwLjc1IDIwOC45NCAzODMuNjkgMjEyLjczIDM4MS44OSAyMTYuMDggQyAzODAuMDcgMjE2LjM3IDM3OC4yMiAyMTYuMjQgMzc2LjM5IDIxNi4yMiBDIDM3Ny4wMSAyMTQuNjMgMzc4LjU1IDIxNC4wMiAzNzkuOTYgMjEzLjM1IEMgMzc5LjUxIDIxMS40MCAzNzcuNzMgMjEwLjM1IDM3Ni4zOCAyMDkuMDcgQyAzNzUuMzQgMjA5Ljc0IDM3NC4yMiAyMTAuMzQgMzczLjM0IDIxMS4yMiBDIDM3My4zMCAyMTIuNDcgMzczLjI3IDIxMy43MyAzNzMuMjUgMjE0Ljk4IEMgMzcyLjAyIDIxNy4xNCAzNjguOTggMjE1LjgwIDM2Ny4wMiAyMTYuMjggQyAzNjcuNjAgMjE0LjY2IDM2OS4wNyAyMTMuOTkgMzcwLjUwIDIxMy4zMyBDIDM3MC4wNiAyMTEuODYgMzY5LjY2IDIxMC4zOSAzNjkuMjggMjA4LjkxIEMgMzcxLjA1IDIwNy4wNCAzNzMuMDggMjA1LjQ1IDM3NS4yMSAyMDQuMDIgQyAzNzMuMzYgMjAyLjY2IDM3MS41NCAyMDEuMTggMzcwLjUwIDE5OS4wOCBDIDM2Ny45MyAyMDAuNTAgMzY1LjM0IDIwMS45NCAzNjIuNDkgMjAyLjc2IEMgMzYyLjQ5IDIwMS4xMCAzNjIuNTEgMTk5LjQ1IDM2Mi41NSAxOTcuNzkgQyAzNjMuMzkgMTk3Ljk3IDM2NS4wNyAxOTguMzMgMzY1LjkwIDE5OC41MSBDIDM2Ny4xNCAxOTcuNzIgMzY4LjM5IDE5Ni45NCAzNjkuNjUgMTk2LjE4IEMgMzY3LjMzIDE5NC41NyAzNjUuMDcgMTkyLjgzIDM2Mi40NSAxOTEuNzIgQyAzNjIuNDIgMTkwLjU1IDM2Mi4zOSAxODkuMzggMzYyLjM3IDE4OC4yMSBDIDM2Mi45OSAxODguMjEgMzY0LjIzIDE4OC4yMSAzNjQuODUgMTg4LjIxIEMgMzY2LjEwIDE5MC4yNyAzNjguMDEgMTkxLjg4IDM3MC4zNSAxOTIuNjAgQyAzNzAuMzcgMTkzLjEzIDM3MC40MiAxOTQuMjAgMzcwLjQ0IDE5NC43MyBDIDM3MS42NSAxOTMuMjQgMzcxLjM5IDE5MS4zNyAzNzEuMjUgMTg5LjYwIEMgMzcxLjY3IDE4OS4zOSAzNzIuNDkgMTg4Ljk4IDM3Mi45MSAxODguNzcgQyAzNzEuOTkgMTg4LjMwIDM3MC4xNiAxODcuMzcgMzY5LjI1IDE4Ni45MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyMDYuNzkgMTg2LjM3IEMgMjA2LjkxIDE4Ni40MCAyMDcuMTYgMTg2LjQ2IDIwNy4yOCAxODYuNDkgQyAyMDYuOTMgMTg3Ljc1IDIwNi42MCAxODkuMDEgMjA2LjI4IDE5MC4yOCBDIDIwNS40NSAxOTMuNDEgMjA0LjU4IDE5Ni41MyAyMDMuNzQgMTk5LjY2IEMgMjEyLjE4IDIwMC41OSAyMjAuNTMgMjAyLjM0IDIyOS4wNCAyMDIuNTMgQyAyMzAuNTUgMTk5LjQ5IDIzMi4xOCAxOTYuNTEgMjMzLjg1IDE5My41NiBDIDIzMy4xOSAxOTMuNjkgMjMxLjg3IDE5My45NSAyMzEuMjEgMTk0LjA4IEMgMjI5LjY0IDE5NS40MiAyMjguMDIgMTk2LjcyIDIyNi4zOSAxOTcuOTkgQyAyMjYuOTggMTk2LjQyIDIyNy42MSAxOTQuODcgMjI4LjI0IDE5My4zMiBDIDIyOC43MSAxOTIuMTYgMjI5LjE5IDE5MS4wMiAyMjkuNzEgMTg5Ljg4IEMgMjI5Ljc0IDE5MS40MiAyMjkuNjAgMTkyLjk1IDIyOS4yOSAxOTQuNDcgQyAyMzAuNDcgMTkyLjk0IDIzMS43NSAxOTEuNDkgMjMzLjExIDE5MC4xMiBMIDIzMi4xMSAxOTIuMTMgQyAyMzIuODIgMTkyLjYzIDIzMy41NCAxOTMuMTQgMjM0LjI2IDE5My42NSBMIDIzNC44NSAxOTEuMTkgQyAyMzUuNDIgMTk5LjUxIDIyOC4xOSAyMDUuNDYgMjI2LjM4IDIxMy4yMiBDIDIzMS43MyAyMTMuMjUgMjM3LjA4IDIxMy4yMSAyNDIuNDQgMjEzLjIyIEMgMjQyLjQ1IDIyNy42NyAyNDIuNDQgMjQyLjEyIDI0Mi40NSAyNTYuNTggQyAyMzYuOTAgMjU2LjUzIDIzMS4zNSAyNTYuNjMgMjI1LjgxIDI1Ni41MCBDIDIyNS44MCAyNDIuNTcgMjI2LjA5IDIyOC42MyAyMjUuNjYgMjE0LjcyIEMgMjI0LjQ0IDIxNy4yOCAyMjMuNDQgMjE5Ljk0IDIyMi4yNSAyMjIuNTIgQyAyMTcuMTggMjMyLjk3IDIxNS42OSAyNDQuODEgMjEwLjEyIDI1NS4wNCBDIDIwNy43NyAyNTguMTcgMjA1LjA4IDI2MS4xNyAyMDEuODcgMjYzLjQzIEMgMTk2Ljg2IDI2My41NCAxOTEuODggMjYyLjc2IDE4Ni44OCAyNjIuNTQgQyAxODEuNjggMjYyLjI0IDE3Ny4wNCAyNTkuNjkgMTcyLjMyIDI1Ny43OCBDIDE2OS43MiAyNjUuOTQgMTY2Ljk4IDI3NC4wNiAxNjQuMTUgMjgyLjE0IEMgMTYzLjg3IDI4MC45NSAxNjMuNjQgMjc5Ljc1IDE2My40NCAyNzguNTUgQyAxNjIuMTggMjc5LjU3IDE2MS4yNyAyODAuOTIgMTYwLjE5IDI4Mi4xMSBDIDE2MC43OCAyODAuMjAgMTYxLjUzIDI3OC4zMyAxNjIuNjEgMjc2LjY1IEMgMTYxLjUyIDI3Ni43NCAxNjAuNDMgMjc2LjgzIDE1OS4zNCAyNzYuOTIgQyAxNTkuMDYgMjc3LjYwIDE1OC41MCAyNzguOTcgMTU4LjIyIDI3OS42NiBDIDE1Ny45OCAyNzkuNjIgMTU3LjQ4IDI3OS41NSAxNTcuMjMgMjc5LjUxIEMgMTU3LjYwIDI3OC44OCAxNTguMzMgMjc3LjYyIDE1OC43MCAyNzYuOTkgQyAxNTcuNzkgMjc2LjMxIDE1Ni44MCAyNzUuNzUgMTU1LjgxIDI3NS4xOSBDIDE1NS44NiAyNzYuNjYgMTU1LjM1IDI3Ny45MCAxNTQuMjcgMjc4Ljk0IEMgMTU0LjUwIDI3Ny40MCAxNTQuODIgMjc1Ljg3IDE1NS4xMyAyNzQuMzYgTCAxNTYuNjYgMjc0LjYxIEMgMTU2LjA1IDI3My42NyAxNTUuNDQgMjcyLjc0IDE1NC44MSAyNzEuODMgQyAxNTMuOTAgMjczLjY1IDE1Mi45OSAyNzUuNTAgMTUxLjk5IDI3Ny4yOSBDIDE1MS4zMiAyNzYuOTggMTQ5Ljk5IDI3Ni4zOCAxNDkuMzIgMjc2LjA4IEMgMTQ5LjczIDI3NS4wMCAxNTAuMTIgMjczLjkxIDE1MC41MCAyNzIuODMgQyAxNTAuODQgMjczLjYyIDE1MS41MSAyNzUuMjAgMTUxLjg1IDI3NS45OSBMIDE1MS4xMiAyNzMuMTQgTCAxNTIuNDQgMjczLjY4IEMgMTUyLjkxIDI3Mi40NyAxNTMuNDEgMjcxLjI3IDE1My44OSAyNzAuMDYgQyAxNTQuMzEgMjY5Ljc1IDE1NS4xNCAyNjkuMTUgMTU1LjU2IDI2OC44NSBDIDE1NS4zMyAyNjkuMzQgMTU0Ljg4IDI3MC4zMyAxNTQuNjYgMjcwLjgyIEMgMTU2LjE1IDI3MS44NiAxNTYuNjAgMjczLjg5IDE1OC4wNSAyNzQuODYgQyAxNTkuOTkgMjc0LjA1IDE2MC4zOCAyNzEuMzkgMTYxLjY1IDI2OS44MCBDIDE2MS4zNyAyNzIuMTEgMTYwLjU0IDI3NC4yOSAxNTkuMzcgMjc2LjI5IEMgMTYwLjUyIDI3Ni4xOSAxNjEuNjggMjc2LjExIDE2Mi44MyAyNzYuMDMgQyAxNjUuMTAgMjcxLjI3IDE2Ni43MCAyNjYuMjQgMTY4LjA1IDI2MS4xNSBDIDE2NS42NCAyNTkuODQgMTYzLjMzIDI1OC4zMSAxNjAuNzYgMjU3LjM0IEMgMTU3LjU0IDI1Ni4zMSAxNTQuMTMgMjU2LjAyIDE1MC45NSAyNTQuODggQyAxNDcuODkgMjUzLjg3IDE0NS4wOSAyNTIuMjEgMTQyLjAzIDI1MS4yMSBDIDEzOC45NSAyNTQuMjYgMTM2LjcxIDI1OC4wNCAxMzQuMDkgMjYxLjQ4IEMgMTMyLjU5IDI2My40OCAxMzEuNDQgMjY1LjcxIDEzMC4yOCAyNjcuOTIgQyAxMzEuNjEgMjYzLjkyIDEzMy40MiAyNjAuMTAgMTM1Ljc2IDI1Ni41OSBDIDEzMC42OSAyNTYuNTQgMTI1LjYyIDI1Ni42MCAxMjAuNTUgMjU2LjU0IEMgMTIwLjU2IDI0Mi4xNCAxMjAuNjkgMjI3LjczIDEyMC40OSAyMTMuMzQgQyAxMjYuMDQgMjEzLjA5IDEzMS42MCAyMTMuMjcgMTM3LjE2IDIxMy4yMiBDIDEzNy4yNiAyMjYuODIgMTM2LjkwIDI0MC40MiAxMzcuMzQgMjU0LjAxIEMgMTQ1LjI5IDI0MC4zMCAxNTMuMDMgMjI1Ljk4IDE2NS4wNSAyMTUuMzMgQyAxNzMuMTYgMjA4LjMzIDE4NS40OSAyMDkuNjcgMTk0LjI1IDIxNC43NCBDIDE5OS4zNCAyMDUuNzIgMjAyLjcwIDE5NS44NiAyMDYuNzkgMTg2LjM3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDIxMS4xNCAxOTAuODkgQyAyMTEuODAgMTg5LjQwIDIxMi40OSAxODcuODcgMjEzLjc5IDE4Ni44MyBDIDIxMy4xMSAxODguNDcgMjEyLjI3IDE5MC4wNiAyMTIuMDkgMTkxLjg2IEMgMjEzLjQzIDE5MC42NyAyMTQuNjggMTg5LjM5IDIxNS45NSAxODguMTIgQyAyMTUuNDUgMTg5LjMyIDIxNC45NSAxOTAuNTMgMjE0LjQ2IDE5MS43NCBDIDIxNi44MiAxOTIuMjcgMjE4LjE1IDE4OS45MiAyMTkuODkgMTg4Ljk0IEMgMjE5LjQwIDE4OS44MCAyMTguNDIgMTkxLjU0IDIxNy45MyAxOTIuNDAgQyAyMTguNjQgMTkyLjEzIDIyMC4wNyAxOTEuNTggMjIwLjc5IDE5MS4zMSBDIDIyMS4wMyAxOTEuNjkgMjIxLjUxIDE5Mi40NiAyMjEuNzUgMTkyLjg0IEMgMjIyLjI2IDE5MS45NSAyMjMuMjcgMTkwLjE3IDIyMy43OCAxODkuMjggTCAyMjMuNjAgMTkzLjQ0IEMgMjI0Ljc2IDE5Mi4zNCAyMjUuODggMTkxLjIxIDIyNi45NiAxOTAuMDUgQyAyMjYuNzcgMTkwLjc5IDIyNi4zOSAxOTIuMjggMjI2LjIwIDE5My4wMyBMIDIyOC4yNCAxOTMuMzIgQyAyMjcuNjEgMTk0Ljg3IDIyNi45OCAxOTYuNDIgMjI2LjM5IDE5Ny45OSBDIDIyOC4wMiAxOTYuNzIgMjI5LjY0IDE5NS40MiAyMzEuMjEgMTk0LjA4IEMgMjMxLjg3IDE5My45NSAyMzMuMTkgMTkzLjY5IDIzMy44NSAxOTMuNTYgQyAyMzIuMTggMTk2LjUxIDIzMC41NSAxOTkuNDkgMjI5LjA0IDIwMi41MyBDIDIyMC41MyAyMDIuMzQgMjEyLjE4IDIwMC41OSAyMDMuNzQgMTk5LjY2IEMgMjA0LjU4IDE5Ni41MyAyMDUuNDUgMTkzLjQxIDIwNi4yOCAxOTAuMjggQyAyMDcuODkgMTkwLjQ4IDIwOS41MiAxOTAuNjkgMjExLjE0IDE5MC44OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyOTQuNDkgMjI5LjQ5IEMgMjk0LjQ5IDIyMC4yMSAyOTQuNDIgMjEwLjk0IDI5NC41MCAyMDEuNjcgQyAzMDAuMDYgMjAxLjY5IDMwNS42MiAyMDEuNzIgMzExLjE5IDIwMS42NyBDIDMxMS4xOCAyMDUuNTMgMzExLjE4IDIwOS4zOCAzMTEuMTggMjEzLjI0IEMgMzE4LjcyIDIxMy4yMCAzMjYuMjcgMjEzLjIzIDMzMy44MiAyMTMuMjMgQyAzMzMuODIgMjIwLjQ4IDMzMy44NiAyMjcuNzQgMzMzLjgwIDIzNS4wMCBDIDMzNC4xNyAyNDMuNTggMzIzLjA4IDI0Ny43OSAzMjQuMjkgMjU2LjU2IEMgMzE4LjEyIDI1Ni41NyAzMTEuOTUgMjU2LjU4IDMwNS43OCAyNTYuNTUgQyAzMDUuODYgMjUzLjk0IDMwNS4zOSAyNTEuMDMgMzA3LjA0IDI0OC43OCBDIDMwOS43OCAyNDQuNjIgMzEyLjkwIDI0MC43MSAzMTUuNTcgMjM2LjUwIEMgMzE2LjkzIDIzNC40MyAzMTYuMjcgMjMxLjgxIDMxNi41MCAyMjkuNDggQyAzMDkuMTYgMjI5LjUwIDMwMS44MiAyMjkuNDggMjk0LjQ5IDIyOS40OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAwLjAwIDIwNy40NiBDIDEuNjIgMjI1Ljg1IDMuOTcgMjQ0LjMzIDkuODkgMjYxLjkwIEMgMjYuODEgMzE1LjA1IDY3LjQwIDM1OS43NiAxMTguMTYgMzgyLjY0IEMgMTQxLjEzIDM5My4xNCAxNjYuMTcgMzk4Ljc2IDE5MS4zNiA0MDAuMDAgTCAwLjAwIDQwMC4wMCBMIDAuMDAgMjA3LjQ2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM4Mi44MCAyODEuODYgQyAzOTMuMjkgMjU4LjkwIDM5OC41NyAyMzMuODYgNDAwLjAwIDIwOC43MyBMIDQwMC4wMCA0MDAuMDAgTCAyMTAuMjkgNDAwLjAwIEMgMjI0LjY4IDM5OC44OSAyMzkuMDggMzk3LjEwIDI1Mi45OSAzOTMuMTEgQyAzMDkuOTUgMzc3LjgzIDM1OC44MiAzMzUuNjggMzgyLjgwIDI4MS44NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA3Mi41NSAyMTMuMjAgQyA4My4zOCAyMTMuMjUgOTQuMjEgMjEzLjIwIDEwNS4wNCAyMTMuMjMgQyAxMDguMDggMjEzLjI0IDExMS40MyAyMTMuOTcgMTEzLjQ4IDIxNi40MCBDIDExNS40MyAyMTguODEgMTE1LjU5IDIyMi4wMyAxMTUuNTkgMjI1LjAwIEMgMTE1LjU2IDIzNS41MSAxMTUuNTkgMjQ2LjAyIDExNS41OCAyNTYuNTQgQyAxMDkuOTkgMjU2LjU4IDEwNC40MCAyNTYuNTkgOTguODAgMjU2LjUyIEMgOTguNjggMjQ3LjIzIDk5LjMxIDIzNy44OCA5OC40NiAyMjguNjMgQyA5NS4zMyAyMjguNDUgOTIuMTkgMjI4LjQ1IDg5LjA1IDIyOC40MyBDIDg4LjYxIDIzNS44NyA4OS4yMCAyNDMuMzQgODguNzQgMjUwLjc4IEMgODguNTEgMjUzLjcwIDg2LjAyIDI1Ni4wNSA4My4xNSAyNTYuMzIgQyA3Ny42MyAyNTYuODYgNzIuMDYgMjU2LjQzIDY2LjUyIDI1Ni41NSBDIDY2LjU1IDI1MS4yNiA2Ni41MiAyNDUuOTYgNjYuNTQgMjQwLjY2IEMgNjguNDQgMjQwLjI5IDcxLjA3IDI0MS40NSA3Mi40OSAyMzkuNzkgQyA3Mi42NSAyMzAuOTMgNzIuNTEgMjIyLjA2IDcyLjU1IDIxMy4yMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyNDcuMjUgMjEzLjI1IEMgMjYxLjY5IDIxMy4yNCAyNzYuMTMgMjEzLjEzIDI5MC41NiAyMTMuMzEgQyAyOTAuMzcgMjI3LjcyIDI5MC41MSAyNDIuMTQgMjkwLjQ5IDI1Ni41NiBDIDI4NC45MiAyNTYuNTQgMjc5LjM1IDI1Ni42MyAyNzMuNzggMjU2LjUxIEMgMjczLjg2IDI0Ny4xNiAyNzMuNzMgMjM3LjgyIDI3My44NSAyMjguNDcgQyAyNzAuNDkgMjI4LjQ2IDI2Ny4xNCAyMjguNDQgMjYzLjc5IDIyOC41MSBDIDI2My44MyAyMzcuODYgMjYzLjc1IDI0Ny4yMiAyNjMuODQgMjU2LjU4IEMgMjU4LjMxIDI1Ni41NCAyNTIuNzkgMjU2LjU5IDI0Ny4yNyAyNTYuNTUgQyAyNDcuMjcgMjQyLjExIDI0Ny4zMCAyMjcuNjggMjQ3LjI1IDIxMy4yNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTcuMTAgMjE5LjEyIEMgMTk1Ljk5IDIxNy40OSAxOTYuMzYgMjE1LjcwIDE5Ny42NCAyMTQuMzEgQyAyMDQuNjMgMjE4LjM0IDIxMy4wMSAyMTguNTMgMjIwLjgzIDIxOS40MCBDIDIxOC4xMSAyMjQuNTEgMjE2LjUzIDIzMC4xMCAyMTQuNDggMjM1LjQ5IEMgMjA5LjIxIDIzNC43NSAyMDMuOTkgMjMzLjc1IDE5OC43MSAyMzMuMTQgQyAxOTguNjggMjI4LjQzIDE5OS40NCAyMjMuNDQgMTk3LjEwIDIxOS4xMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTAuMDkgMjIzLjE0IEMgMTkyLjA0IDIyMS45NSAxOTMuMTQgMjE5Ljg0IDE5NS4wNiAyMTguNjEgQyAxOTcuMTYgMjI0LjUxIDE5Ni4yNyAyMzAuODggMTk1LjY5IDIzNi45NiBDIDE5MS4zNyAyMzUuMzEgMTg2LjcyIDIzNS4zMCAxODIuMTcgMjM1LjI3IEMgMTgzLjAyIDIzMC40NCAxODUuNjYgMjI1LjU0IDE5MC4wOSAyMjMuMTQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTUyLjQ5IDIzMy45MiBDIDE1NS44MiAyMzAuMjMgMTU4LjIyIDIyNS42OSAxNjIuMDkgMjIyLjUxIEMgMTY5LjE0IDIyMi40MCAxNzYuNjMgMjI0LjMzIDE4Mi4xOCAyMjguODIgQyAxNzkuNTEgMjMyLjU2IDE3Ni44OCAyMzYuMzggMTc1LjI4IDI0MC43MiBDIDE2Ny42NCAyMzguNjQgMTU5Ljk2IDIzNi41NiAxNTIuNDkgMjMzLjkyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5OS41NSAyNTAuMTUgQyAyMDIuNzAgMjUwLjg4IDIwNS44MSAyNTEuODIgMjA4Ljg5IDI1Mi44MSBDIDIwNi45OCAyNTYuMDIgMjA0LjQ4IDI1OS4xNSAyMDAuOTUgMjYwLjY1IEMgMTkxLjU1IDI2MS4zMSAxODIuMDIgMjU5LjM2IDE3My40NyAyNTUuNDMgQyAxNzMuNDcgMjU0Ljg0IDE3My40NyAyNTMuNjggMTczLjQ3IDI1My4wOSBDIDE4MS44MCAyNTUuMjMgMTkwLjQwIDI1Ny41MiAxOTkuMDMgMjU1LjY1IEMgMTk5LjI2IDI1My44MiAxOTkuNDIgMjUxLjk5IDE5OS41NSAyNTAuMTUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTM0LjA5IDI2MS40OCBDIDEzNi43MSAyNTguMDQgMTM4Ljk1IDI1NC4yNiAxNDIuMDMgMjUxLjIxIEMgMTQ1LjA5IDI1Mi4yMSAxNDcuODkgMjUzLjg3IDE1MC45NSAyNTQuODggQyAxNTQuMTMgMjU2LjAyIDE1Ny41NCAyNTYuMzEgMTYwLjc2IDI1Ny4zNCBDIDE2My4zMyAyNTguMzEgMTY1LjY0IDI1OS44NCAxNjguMDUgMjYxLjE1IEMgMTY2LjcwIDI2Ni4yNCAxNjUuMTAgMjcxLjI3IDE2Mi44MyAyNzYuMDMgQyAxNjEuNjggMjc2LjExIDE2MC41MiAyNzYuMTkgMTU5LjM3IDI3Ni4yOSBDIDE2MC41NCAyNzQuMjkgMTYxLjM3IDI3Mi4xMSAxNjEuNjUgMjY5LjgwIEMgMTYwLjM4IDI3MS4zOSAxNTkuOTkgMjc0LjA1IDE1OC4wNSAyNzQuODYgQyAxNTYuNjAgMjczLjg5IDE1Ni4xNSAyNzEuODYgMTU0LjY2IDI3MC44MiBDIDE1NC44OCAyNzAuMzMgMTU1LjMzIDI2OS4zNCAxNTUuNTYgMjY4Ljg1IEMgMTU1LjE0IDI2OS4xNSAxNTQuMzEgMjY5Ljc1IDE1My44OSAyNzAuMDYgQyAxNTMuNDAgMjcwLjQyIDE1Mi40MSAyNzEuMTUgMTUxLjkyIDI3MS41MiBDIDE1MS4zOCAyNzEuMzggMTUwLjMwIDI3MS4xMiAxNDkuNzYgMjcwLjk5IEMgMTQ4LjU4IDI3Mi45MiAxNDcuMzEgMjc0Ljg2IDE0NS4zOCAyNzYuMTIgQyAxNDYuMTAgMjczLjM3IDE0OS43NiAyNzAuMjMgMTQ2LjQzIDI2Ny45MiBDIDE0Ni41NSAyNjYuODkgMTQ2LjY4IDI2NS44NyAxNDYuODAgMjY0Ljg2IEMgMTQ2LjAyIDI2NS45OCAxNDUuMjMgMjY3LjEwIDE0NC40NiAyNjguMjQgTCAxNDMuMzcgMjY5LjY2IEwgMTQzLjYwIDI2Ny4wNCBDIDE0My43OSAyNjYuMjIgMTQ0LjE3IDI2NC41NyAxNDQuMzYgMjYzLjc0IEMgMTQzLjQ5IDI2NC44OCAxNDIuNjIgMjY2LjAxIDE0MS43OSAyNjcuMTggQyAxNDEuMzYgMjY2LjYzIDE0MC41MCAyNjUuNTMgMTQwLjA3IDI2NC45NyBDIDE0MC41MiAyNjMuNTQgMTQxLjAwIDI2Mi4xMiAxNDEuNDcgMjYwLjcwIEMgMTQwLjg1IDI2MS41OCAxNDAuMjIgMjYyLjQ2IDEzOS42MCAyNjMuMzUgQyAxMzUuODMgMjYyLjk0IDEzNS4zOCAyNjcuMTYgMTMzLjA2IDI2OS4xMSBDIDEzMy43NyAyNjYuOTYgMTM0Ljc4IDI2NC45NCAxMzUuNzkgMjYyLjkyIEMgMTM1LjM3IDI2Mi41NiAxMzQuNTIgMjYxLjg0IDEzNC4wOSAyNjEuNDggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTM5LjYwIDI2My4zNSBDIDE0MC4yMiAyNjIuNDYgMTQwLjg1IDI2MS41OCAxNDEuNDcgMjYwLjcwIEMgMTQxLjAwIDI2Mi4xMiAxNDAuNTIgMjYzLjU0IDE0MC4wNyAyNjQuOTcgQyAxMzkuNDYgMjY3LjYxIDEzNy43MCAyNjkuNzYgMTM1LjIyIDI3MC44MyBDIDEzNi41NSAyNjguMjYgMTM4LjExIDI2NS44MiAxMzkuNjAgMjYzLjM1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM2LjE2IDI2My4xNiBDIDM3LjExIDI2Mi44MSAzOC4wNiAyNjIuNDcgMzkuMDEgMjYyLjE0IEMgNDAuMjIgMjY2LjE1IDQzLjUwIDI2OS43NyA0My4yNCAyNzQuMDYgQyA0MC41MCAyNzYuMTQgMzcuMTkgMjc3LjI4IDM0LjE4IDI3OC45MCBDIDMzLjQxIDI3Ny4zMyAzMi42MyAyNzUuNzYgMzEuODkgMjc0LjE4IEMgMzQuMzYgMjczLjAxIDM2LjgzIDI3MS44NiAzOS4zMSAyNzAuNzMgQyAzOC4yOCAyNjguMTkgMzcuMjAgMjY1LjY5IDM2LjE2IDI2My4xNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNTcuODkgMjYyLjU2IEMgMzU5LjU1IDI2My4yMSAzNjEuMjAgMjYzLjg3IDM2Mi44NyAyNjQuNTIgQyAzNjMuMTQgMjY1LjkyIDM2My4xOSAyNjcuMzQgMzYzLjA2IDI2OC43NiBDIDM2NC45NiAyNjcuOTcgMzY2Ljg0IDI2Ny4xNCAzNjguNzMgMjY2LjMxIEMgMzY3Ljk2IDI2OC4wNCAzNjcuMTkgMjY5Ljc3IDM2Ni40NyAyNzEuNTIgQyAzNjMuODkgMjcyLjcyIDM2MS4yNCAyNzMuNzQgMzU4LjYxIDI3NC44MCBDIDM2MC4xMiAyNzUuODQgMzYxLjc4IDI3Ni42MiAzNjMuNDkgMjc3LjI2IEMgMzYyLjgxIDI3OC45MCAzNjIuMTAgMjgwLjUyIDM2MS4zOCAyODIuMTQgQyAzNTkuNDQgMjgxLjI0IDM1Ny41NiAyODAuMjIgMzU1LjczIDI3OS4xNCBDIDM1NS43NSAyNzguMjkgMzU1Ljc5IDI3Ni41OCAzNTUuODIgMjc1LjcyIEMgMzU0LjIzIDI3Ni4zMiAzNTIuNjQgMjc2LjkyIDM1MS4wNiAyNzcuNTIgQyAzNTEuNjggMjc1Ljg2IDM1Mi4xNiAyNzQuMDMgMzUzLjQyIDI3Mi43MyBDIDM1NS44MiAyNzEuNjAgMzU4LjM3IDI3MC44MSAzNjAuODMgMjY5LjgxIEMgMzU5LjMzIDI2OC42NCAzNTcuNjIgMjY3LjgwIDM1NS44NyAyNjcuMDcgQyAzNTYuNTUgMjY1LjU2IDM1Ny4yMiAyNjQuMDYgMzU3Ljg5IDI2Mi41NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxNDEuNzkgMjY3LjE4IEMgMTQyLjYyIDI2Ni4wMSAxNDMuNDkgMjY0Ljg4IDE0NC4zNiAyNjMuNzQgQyAxNDQuMTcgMjY0LjU3IDE0My43OSAyNjYuMjIgMTQzLjYwIDI2Ny4wNCBDIDE0Mi44MyAyNjkuNDUgMTQxLjk4IDI3Mi4zNSAxMzkuMzAgMjczLjIyIEMgMTQwLjA3IDI3MS4xOCAxNDAuNzcgMjY5LjEwIDE0MS43OSAyNjcuMTggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTQ0LjQ2IDI2OC4yNCBDIDE0NS4yMyAyNjcuMTAgMTQ2LjAyIDI2NS45OCAxNDYuODAgMjY0Ljg2IEMgMTQ2LjY4IDI2NS44NyAxNDYuNTUgMjY2Ljg5IDE0Ni40MyAyNjcuOTIgQyAxNDUuNzEgMjY5Ljg2IDE0NC45MSAyNzEuNzcgMTQ0LjIwIDI3My43MSBDIDE0My45OCAyNzMuNjggMTQzLjU0IDI3My42MCAxNDMuMzIgMjczLjU2IEMgMTQzLjY3IDI3MS43OCAxNDMuOTEgMjY5Ljk3IDE0NC40NiAyNjguMjQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzkuNjMgMjc5LjI5IEMgNDEuNjIgMjc4LjI0IDQzLjYwIDI3Ny4xNyA0NS42MCAyNzYuMTQgQyA0Ni4zNiAyNzcuNTkgNDcuMTMgMjc5LjA1IDQ3Ljg4IDI4MC41MSBDIDQ1Ljg4IDI4MS41OSA0My44OSAyODIuNjYgNDEuODcgMjgzLjcwIEMgNDEuMTMgMjgyLjIzIDQwLjM4IDI4MC43NiAzOS42MyAyNzkuMjkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMzE1LjEyIDI3NS44OCBDIDMxNi41NSAyNzcuODUgMzE3LjMzIDI4MC4xOCAzMTguMTMgMjgyLjQ2IEMgMzE4LjYzIDI4MS4xMyAzMTkuMTYgMjc5LjgxIDMxOS43MiAyNzguNTAgQyAzMTkuNjggMjgyLjQyIDMxOC44MCAyODYuODAgMzIyLjA1IDI4OS43NiBMIDMyMi4xNSAyODkuOTAgQyAzMjEuNTQgMjkwLjU3IDMyMC45NCAyOTEuMjYgMzIwLjM1IDI5MS45NSBDIDMxOC4xOSAyODguNjcgMzE2LjE1IDI4NC41NCAzMTEuNzAgMjg0LjIzIEMgMzEyLjgyIDI4My45MyAzMTMuOTUgMjgzLjY0IDMxNS4wOCAyODMuMzUgQyAzMTMuNjEgMjgyLjc1IDMxMi4zNSAyODEuODcgMzExLjMwIDI4MC42OSBDIDMxMi43OCAyODEuMjAgMzE0LjIzIDI4MS43NyAzMTUuNjcgMjgyLjM5IEMgMzE0LjQ0IDI4MC44NyAzMTMuMjIgMjc5LjM2IDMxMi4xOCAyNzcuNzIgQyAzMTMuODAgMjc4LjY0IDMxNS4zMSAyNzkuNzMgMzE2LjcxIDI4MS4wMCBDIDMxNi4zMSAyNzkuNzIgMzE1LjUyIDI3Ny4xNiAzMTUuMTIgMjc1Ljg4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDc3Ljg5IDI4OS4wMiBDIDgyLjY3IDI4NS45MyA4Ni42NiAyODEuODMgODkuNzcgMjc3LjA3IEMgOTAuMTggMjc3LjM5IDkxLjAxIDI3OC4wMiA5MS40MiAyNzguMzQgQyA5MS43MCAyNzkuMTEgOTIuMjYgMjgwLjY0IDkyLjUzIDI4MS40MCBDIDg5LjE4IDI4NS4xMCA4NS4xMiAyODguMTIgODEuMDkgMjkxLjA0IEMgODEuMjUgMjkyLjIzIDgxLjUwIDI5My40MSA4MS43MyAyOTQuNjAgQyA4My4yNiAyOTMuOTQgODQuODEgMjkzLjg3IDg2LjQwIDI5NC40MCBDIDg3LjM3IDI5Ni42NSA4OC40MCAyOTguOTMgODguMzQgMzAxLjQ1IEMgODUuODUgMjk5LjU5IDg0LjM5IDI5Ni41NSA4MS41MyAyOTUuMTkgQyA4MC4xMyAyOTMuMjQgNzkuNDMgMjkwLjg4IDc3Ljg5IDI4OS4wMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNDMuNzIgMjg5LjczIEMgMzQ2LjAzIDI4Ni4yNyAzNDcuMzcgMjgxLjkyIDM1MC44NSAyNzkuNDEgQyAzNTMuOTIgMjgxLjAxIDM1Ni45MyAyODIuNzIgMzU5Ljk1IDI4NC40MyBDIDM1OS4xNCAyODUuOTMgMzU4LjMxIDI4Ny40MSAzNTcuNDggMjg4Ljg5IEMgMzU1LjA1IDI4Ny41MCAzNTIuNjUgMjg2LjA0IDM1MC4xNSAyODQuODAgQyAzNDguOTUgMjg2Ljk5IDM0Ny42MCAyODkuMTAgMzQ2LjIzIDI5MS4xOSBDIDM0NS42MCAyOTAuODMgMzQ0LjM1IDI5MC4xMCAzNDMuNzIgMjg5LjczIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDQzLjQyIDI4OS41NiBDIDQ1LjQ5IDI4Ny40NSA0Ny4zNiAyODUuMTYgNDkuMjAgMjgyLjg1IEMgNTAuMDkgMjg0LjI3IDUwLjk3IDI4NS43MCA1MS44NiAyODcuMTIgQyA0OS44OCAyODkuMzQgNDcuNzYgMjkxLjQ2IDQ2LjE0IDI5My45NiBDIDQ2LjUzIDI5NC4zNyA0Ny4zMSAyOTUuMTggNDcuNzAgMjk1LjU5IEMgNDkuOTEgMjk0LjEzIDUyLjEwIDI5Mi42NSA1NC4xOSAyOTEuMDMgQyA1NS4xNiAyOTIuMzEgNTYuMTQgMjkzLjU4IDU2LjkxIDI5NS4wMCBDIDUzLjg4IDI5Ni44MyA1MC43NCAzMDEuMjggNDYuODUgMjk5LjQwIEMgNDMuNDQgMjk2LjMzIDQxLjU1IDI5MS45NSAzOS4yMCAyODguMDggQyAzOS44OSAyODcuNzMgNDEuMjcgMjg3LjA0IDQxLjk3IDI4Ni42OSBDIDQyLjMzIDI4Ny40MSA0My4wNiAyODguODQgNDMuNDIgMjg5LjU2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDk3Ljg2IDI4OC4wMCBDIDEwMC42MSAyODYuNDQgMTAzLjUyIDI4NS4xOSAxMDYuMTYgMjgzLjQzIEMgMTA2LjI5IDI4NC4wOSAxMDYuNTYgMjg1LjQwIDEwNi42OSAyODYuMDUgQyAxMDQuMTAgMjg4LjA3IDEwMS4xOSAyODkuNjEgOTguMzcgMjkxLjI2IEMgOTcuMzIgMjk3LjYyIDk4LjA3IDMwNC4wOCA5Ny4yNCAzMTAuNDYgQyA5NS42MyAzMDkuMzEgOTQuMTEgMzA4LjA1IDkyLjY0IDMwNi43MyBDIDkyLjg1IDMwMi41NSA5My40MCAyOTguMzggOTQuNTYgMjk0LjM1IEMgOTUuMjIgMjkyLjA3IDk1LjcwIDI4OS4zNiA5Ny44NiAyODguMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMzA2LjQ3IDI4Ni43NiBDIDMwNi45MiAyODQuODIgMzA4LjU5IDI4NS4yMyAzMDkuMjggMjg2Ljc4IEMgMzA5LjU5IDI4Ni42NCAzMTAuMjMgMjg2LjM0IDMxMC41NSAyODYuMTkgQyAzMTEuMTMgMjkwLjQxIDMxMi41OCAyOTQuNTYgMzE2LjE1IDI5Ny4xNSBDIDMxNS4zNyAyOTguMDEgMzE0LjU5IDI5OC44NiAzMTMuODEgMjk5LjcyIEMgMzExLjQ3IDI5Ni43NCAzMDguNDcgMjk0LjQxIDMwNS40MSAyOTIuMjIgQyAzMDYuMjcgMjkyLjIzIDMwNy45NyAyOTIuMjUgMzA4LjgyIDI5Mi4yNiBDIDMwNy43MSAyOTAuOTggMzA2LjU5IDI4OS43MiAzMDUuNDkgMjg4LjQ0IEMgMzA2LjE0IDI4OC41NSAzMDcuNDUgMjg4Ljc1IDMwOC4xMCAyODguODYgQyAzMDcuNjkgMjg4LjMzIDMwNi44OCAyODcuMjkgMzA2LjQ3IDI4Ni43NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyNzguNzggMjkyLjAwIEMgMjgwLjE2IDI5MC4xNyAyODAuNTMgMjg3Ljk0IDI4MC45NSAyODUuNzUgQyAyODIuMzkgMjkzLjc5IDI4Ni4zOSAzMDAuOTEgMjkwLjE3IDMwOC4wMyBDIDI5MS4yMCAzMDMuOTEgMjkyLjE1IDI5OS43NSAyOTMuNjggMjk1Ljc3IEMgMjkzLjM1IDI5NC45MiAyOTMuMDIgMjk0LjA3IDI5Mi43MCAyOTMuMjMgQyAyOTMuMDIgMjkxLjkzIDI5My4zNCAyOTAuNjMgMjkzLjY3IDI4OS4zMyBDIDI5NS4zNSAyODkuNTAgMjk3LjE3IDI4OS40NyAyOTguNTggMjkwLjU3IEMgMzAyLjExIDI5Mi45MSAzMDUuNzggMjk1LjA3IDMwOS4wNyAyOTcuNzYgQyAzMTAuNjQgMjk4LjgyIDMxMC45MyAzMDAuODAgMzExLjYwIDMwMi40NCBDIDMxMC4yNCAzMDMuNzggMzA4LjkyIDMwNS4xNSAzMDcuNjMgMzA2LjU2IEMgMzA3LjUwIDMwNS4zNyAzMDcuMzYgMzA0LjE4IDMwNy4yMyAzMDMuMDAgQyAzMDQuMDcgMzAwLjgyIDMwMS45NSAyOTcuNTEgMjk4Ljg3IDI5NS4yNyBDIDI5Ny4xMSAyOTUuMjggMjk1LjQ2IDI5NS45OSAyOTMuNzggMjk2LjQwIEMgMjkzLjYyIDI5OC4xMCAyOTMuNDMgMjk5LjgxIDI5My4yMiAzMDEuNTEgQyAyOTQuMzIgMzAxLjk1IDI5NS40MiAzMDIuNDEgMjk2LjUzIDMwMi44NyBDIDI5NS41NyAzMDQuMDUgMjk0LjYzIDMwNS4yMyAyOTMuNjMgMzA2LjM2IEMgMjkzLjA0IDMwOC41MiAyOTIuMTUgMzEwLjU3IDI5MS4zNSAzMTIuNjUgQyAyOTEuODggMzEyLjc2IDI5Mi45NCAzMTIuOTggMjkzLjQ3IDMxMy4wOSBDIDI5Mi4zNyAzMTUuMTIgMjkzLjI3IDMxNy4yOSAyOTMuNjMgMzE5LjM3IEMgMjcyLjk1IDMzNC44NiAyNDguNzYgMzQ2LjA3IDIyMy4wNyAzNDkuNzMgQyAxOTYuOTIgMzUzLjM1IDE2OS42NiAzNTEuMDQgMTQ1LjEwIDM0MS4wNSBDIDEzNC41NiAzMzcuMTcgMTI0Ljk1IDMzMS4zMyAxMTUuMjggMzI1Ljc0IEMgMTE1LjQ0IDMyNS41NiAxMTUuNzUgMzI1LjIwIDExNS45MSAzMjUuMDIgQyAxMTYuMTIgMzI0Ljk3IDExNi41NSAzMjQuODcgMTE2Ljc2IDMyNC44MiBDIDExNS44MyAzMjIuMjUgMTE2LjAxIDMxOS41NCAxMTYuNTUgMzE2LjkyIEMgMTE3LjE0IDMxNi4wMiAxMTcuNjggMzE1LjA5IDExOC4xOCAzMTQuMTQgQyAxMTguNzQgMzEyLjA1IDExNS40MyAzMTUuMTIgMTE0LjQ0IDMxNS4xNiBDIDExMy43NyAzMTguMjggMTEzLjI5IDMyMS44OSAxMTUuMTAgMzI0Ljc1IEMgMTE0LjkzIDMyNC44NyAxMTQuNjAgMzI1LjEzIDExNC40MyAzMjUuMjYgQyAxMDguODEgMzIwLjU3IDEwMy4wNiAzMTYuMDAgOTcuMzQgMzExLjQ0IEMgMTAwLjQ0IDMxMC4wMyAxMDMuODUgMzA4Ljc5IDEwNi4yMiAzMDYuMjQgQyAxMDcuOTEgMzAyLjk1IDEwOS4yOSAyOTkuNDQgMTExLjY4IDI5Ni41NiBDIDExMS4yOCAyOTguMjggMTEwLjY4IDI5OS45NSAxMTAuMTAgMzAxLjYzIEMgMTEwLjc1IDMwMS45MCAxMTIuMDQgMzAyLjQ1IDExMi42OSAzMDIuNzIgQyAxMTEuOTggMzAzLjU4IDExMS4xOSAzMDQuMzggMTEwLjM5IDMwNS4xNSBDIDEwOS40NiAzMDYuOTAgMTA4LjI4IDMwOC41MCAxMDYuOTUgMzA5Ljk3IEMgMTA4LjMwIDMxMC4yNiAxMDkuNjQgMzEwLjU5IDExMC45OCAzMTAuOTggQyAxMTEuNjAgMzA3LjU3IDExMi44NSAzMDQuMzMgMTE0LjA0IDMwMS4xMCBDIDExNS40OCAyOTguMDEgMTEyLjQ1IDI5NS4wNyAxMTMuMjEgMjkxLjg3IEMgMTEyLjU5IDI4OS41NiAxMTQuOTcgMjg5LjY3IDExNS4zOCAyOTEuOTUgQyAxMTUuODAgMjkxLjQzIDExNi42NiAyOTAuMzkgMTE3LjA5IDI4OS44OCBDIDExNi44OSAyOTAuODQgMTE2LjUxIDI5Mi43NyAxMTYuMzIgMjkzLjc0IEMgMTE3LjE0IDI5Mi45MSAxMTguNzggMjkxLjI3IDExOS42MCAyOTAuNDUgQyAxMTkuMDggMjkxLjQwIDExOC4wNCAyOTMuMzAgMTE3LjUyIDI5NC4yNSBDIDExOC4yOCAyOTMuOTAgMTE5LjgyIDI5My4yMiAxMjAuNTggMjkyLjg3IEMgMTE3LjMxIDI5OC40NCAxMTYuMzEgMzA0LjkxIDExNS4xOSAzMTEuMTYgQyAxMTguODggMzEwLjQzIDEyMi4zNiAzMDguODIgMTI0Ljk4IDMwNi4wNiBDIDEyNC41MSAzMDUuNTUgMTIzLjU3IDMwNC41MyAxMjMuMTAgMzA0LjAyIEMgMTIzLjgzIDMwMy4zNyAxMjUuMzAgMzAyLjA3IDEyNi4wMyAzMDEuNDIgQyAxMjUuMjIgMzAxLjQ2IDEyMy42MCAzMDEuNTMgMTIyLjc4IDMwMS41NyBDIDEyNC42NCAyOTkuODEgMTI2LjM2IDI5Ny45MSAxMjcuNjcgMjk1LjcxIEMgMTI3LjA4IDI5OC4zMyAxMjcuMzYgMzAwLjk5IDEyNy45NCAzMDMuNTkgQyAxMjguOTkgMzAzLjk2IDEzMS4xMSAzMDQuNzAgMTMyLjE2IDMwNS4wOCBDIDEzMS4wMyAzMDUuODMgMTI5Ljg5IDMwNi41OCAxMjguNzUgMzA3LjMyIEwgMTMxLjgyIDMwNy4wNiBDIDEzMS4wOCAzMDcuODAgMTI5LjU4IDMwOS4yNyAxMjguODMgMzEwLjAwIEMgMTI5LjkwIDMxNC4yMyAxMzEuNzggMzE4LjE5IDEzMy4wMyAzMjIuMzYgQyAxMzMuNjIgMzIwLjk5IDEzNC4xNiAzMTkuNTkgMTM0LjY1IDMxOC4xOCBMIDEzNS4zOCAzMTguNTYgQyAxMzYuNzQgMzEzLjc5IDEzOS4xNCAzMDkuNDQgMTQwLjk3IDMwNC44NSBDIDE0Ni45MCAzMDEuNzkgMTUzLjUwIDMwMC4zNyAxNTkuNzEgMjk4LjAxIEMgMTYwLjg3IDMwMC4zNCAxNjAuNTcgMzAyLjgwIDE1OS4xOCAzMDQuOTcgQyAxNTcuNzMgMzA0LjIxIDE1Ni4zMCAzMDMuNDMgMTU0Ljg4IDMwMi42MyBDIDE1MS4wMiAzMDMuNjggMTQ3LjczIDMwNS45OSAxNDQuNDMgMzA4LjE0IEMgMTQzLjU5IDMxMS42NiAxNDIuOTggMzE1LjI1IDE0My41MCAzMTguODggQyAxNDMuOTcgMzE4Ljc2IDE0NC45MiAzMTguNTQgMTQ1LjM5IDMxOC40MyBDIDE0NS41NiAzMTYuMjMgMTQ1LjU4IDMxNC4wMiAxNDUuODggMzExLjgzIEMgMTQ2LjI2IDMwOC44MyAxNDguNzQgMzA2LjU5IDE1MS4zNCAzMDUuMzQgQyAxNTMuNTEgMzA1LjA5IDE1NS4wOCAzMDYuOTUgMTU2LjgxIDMwNy45NSBDIDE1Ni44NCAzMDkuMzQgMTU2Ljg3IDMxMC43NCAxNTYuOTEgMzEyLjE0IEMgMTU2LjA4IDMxMy4wNSAxNTUuMjYgMzEzLjk1IDE1NC40MyAzMTQuODcgQyAxNTQuNjYgMzE3LjU2IDE1NS4wMyAzMjAuMjQgMTU1LjQzIDMyMi45MSBDIDE1Ny45NyAzMjEuMjMgMTYwLjk4IDMyMC45MSAxNjMuOTYgMzIxLjE1IEMgMTY0Ljk0IDMyMS44OCAxNjUuOTIgMzIyLjYyIDE2Ni45MCAzMjMuMzcgQyAxNjguNzcgMzIxLjQwIDE3MC44NCAzMTkuNTkgMTcyLjM1IDMxNy4zMiBDIDE3My40OCAzMTUuMjcgMTczLjk0IDMxMi45MyAxNzUuMDEgMzEwLjg1IEMgMTc1LjI5IDMxMS43NSAxNzUuODQgMzEzLjUzIDE3Ni4xMiAzMTQuNDMgQyAxNzYuNjMgMzEzLjE5IDE3Ni4xNyAzMTEuOTYgMTc1LjgxIDMxMC43OCBDIDE3Ni43MyAzMTAuNTYgMTc3LjY1IDMxMC4zOCAxNzguNTggMzEwLjIyIEMgMTc4LjcxIDMxMS44MyAxNzguNzcgMzEzLjQ0IDE3OC43MCAzMTUuMDYgQyAxNzMuNTMgMzE3LjAyIDE3Mi4wMCAzMjIuODMgMTY5LjI1IDMyNy4xMCBDIDE3MC4wNSAzMjguNjkgMTcxLjAyIDMzMC4xOSAxNzEuOTEgMzMxLjc0IEMgMTc3LjA5IDMyNC4yNyAxODIuNjkgMzE2LjM1IDE4My41MSAzMDcuMDEgQyAxODQuNjQgMzA3LjU4IDE4Ni4xOSAzMDcuNzUgMTg2Ljc5IDMwOS4wNCBDIDE4Ny4zNCAzMTAuNzAgMTg2LjI4IDMxMi4yNSAxODUuNjYgMzEzLjczIEMgMTgzLjg5IDMxNy4zMCAxODIuNTIgMzIxLjA2IDE4MC44NSAzMjQuNjggQyAxODEuNzIgMzI0LjYyIDE4My40NiAzMjQuNTIgMTg0LjMyIDMyNC40NyBDIDE4NC42NSAzMjQuNzMgMTg1LjMxIDMyNS4yNyAxODUuNjMgMzI1LjU0IEMgMTg3LjQzIDMyNC4zNCAxODkuMjggMzIzLjIxIDE5MC45OSAzMjEuODkgQyAxOTMuNTYgMzE5Ljk4IDE5NC40OCAzMTYuNzYgMTk2LjQyIDMxNC4zNCBDIDE5Ny4zOSAzMTIuNjIgMTk5LjcxIDMxMy40OCAyMDEuMjggMzEzLjA1IEMgMjAxLjA3IDMxMy4zOSAyMDAuNjQgMzE0LjA2IDIwMC40MiAzMTQuNDAgQyAyMDAuNDEgMzE1Ljc4IDIwMS4xMSAzMTcuNjAgMTk5LjUxIDMxOC4zOCBDIDE5NS41NSAzMjEuMDkgMTkxLjc4IDMyNC4wNSAxODguMzkgMzI3LjQ2IEMgMTg4Ljc1IDMyOS45MyAxODguODQgMzMyLjQ0IDE4OS4zMSAzMzQuOTAgQyAxODkuODUgMzM2LjU0IDE5MS42NCAzMzcuMTkgMTkyLjkxIDMzOC4xNSBDIDE5Mi4xMSAzMzYuMzUgMTkxLjE2IDMzNC42MiAxOTAuNDMgMzMyLjc5IEMgMTg5LjcwIDMyOS45NSAxOTAuODYgMzI3LjEzIDE5MS43NiAzMjQuNDkgQyAxOTMuOTEgMzI0LjMxIDE5Ni41MiAzMjIuOTggMTk4LjM4IDMyNC42OSBDIDIwMC4xOSAzMjYuNjIgMjAxLjY3IDMyOC45MiAyMDQuMTEgMzMwLjE2IEMgMjA0Ljg0IDMzMS4xNSAyMDUuNTYgMzMyLjE0IDIwNi4zMCAzMzMuMTMgQyAyMDYuNDcgMzI3LjQzIDIwNC4zNCAzMjEuNzMgMjA1LjU4IDMxNi4wNiBDIDIwNS43NCAzMTQuOTMgMjA2Ljg0IDMxNC4zMyAyMDcuNTUgMzEzLjU3IEMgMjA3Ljk0IDMxNC45NyAyMDguMzIgMzE2LjM4IDIwOC42NyAzMTcuODAgQyAyMDguMDcgMzE5LjMyIDIwNi42OCAzMjAuODYgMjA3LjQwIDMyMi42MCBDIDIwOC4zNyAzMjQuNDEgMjEwLjk3IDMyNS4yMiAyMTAuNDQgMzI3Ljc0IEMgMjEyLjM3IDMyNS43NiAyMTUuMDUgMzI1LjE3IDIxNy42NSAzMjQuNjAgQyAyMTcuMDAgMzIzLjY5IDIxNi4zNyAzMjIuNzcgMjE1Ljc0IDMyMS44NiBDIDIxNC40NSAzMjEuMzAgMjEzLjE4IDMyMC42OCAyMTEuOTIgMzIwLjA0IEMgMjEyLjc3IDMxOS4xOSAyMTMuNjQgMzE4LjM0IDIxNC41MSAzMTcuNTAgQyAyMTMuOTAgMzE1Ljk4IDIxMy4zNCAzMTQuNDUgMjEyLjg3IDMxMi45MCBDIDIxNS41NSAzMTUuOTEgMjE3LjMyIDMxOS42MiAyMjAuMTQgMzIyLjUyIEMgMjIyLjgxIDMxNy43OCAyMTkuNzcgMzEyLjExIDIyMi42NCAzMDcuNDkgQyAyMjMuMDcgMzA3LjUxIDIyMy45MyAzMDcuNTYgMjI0LjM2IDMwNy41OCBDIDIyNC45NCAzMDkuNDAgMjI1LjUzIDMxMS4yMiAyMjYuMjcgMzEyLjk4IEMgMjIyLjQ5IDMxNy44OSAyMjQuOTcgMzI0LjA2IDIyNS41NyAzMjkuNTYgQyAyMjYuMzggMzI5LjMzIDIyOC4wMSAzMjguODcgMjI4LjgyIDMyOC42NCBDIDIzMS43OSAzMjEuMDEgMjM0LjYzIDMxMi44OCAyMzMuMzkgMzA0LjU0IEMgMjM0LjYwIDMwNS4yMSAyMzcuNjUgMzA0LjkxIDIzNy41MiAzMDcuMDEgQyAyMzcuMjcgMzExLjU0IDIzNS42NSAzMTUuOTAgMjM1LjMxIDMyMC40NSBDIDIzNi4wOCAzMjAuMjAgMjM2Ljg0IDMxOS45NSAyMzcuNjEgMzE5LjcxIEMgMjM2LjU3IDMxNi4yMCAyMzguMjIgMzEyLjYzIDI0MS43MyAzMTEuNDYgQyAyNDIuOTAgMzEyLjIzIDI0NC4wOCAzMTMuMDAgMjQ1LjI2IDMxMy43NiBDIDI0NS43MiAzMTYuMzIgMjQ2LjI5IDMxOC44NiAyNDYuNzcgMzIxLjQxIEMgMjQ5Ljc3IDMyMi4zOCAyNTIuNDIgMzI0LjExIDI1NS4xOSAzMjUuNTkgQyAyNTYuNDIgMzI0LjM1IDI1Ny42MiAzMjMuMDcgMjU4LjgwIDMyMS43OCBDIDI1OC44NiAzMTkuMDggMjU4LjkxIDMxNi4zOSAyNTguODkgMzEzLjY5IEMgMjU2LjgzIDMxMi40OCAyNTQuODQgMzExLjE3IDI1My4wMCAzMDkuNjUgQyAyNTQuNDAgMzA5LjY2IDI1NS44MCAzMDkuNzAgMjU3LjIwIDMwOS43NiBDIDI1Ni4yOCAzMDYuNjUgMjU2LjA3IDMwMy4zOSAyNTYuMDkgMzAwLjE2IEMgMjU3Ljc4IDMwMS4wMyAyNTguNzEgMzAyLjY2IDI1OS41NCAzMDQuMjggQyAyNTkuNzcgMzAyLjk3IDI2MC4wMiAzMDEuNjYgMjYwLjI4IDMwMC4zNiBDIDI2MS41MiAzMDUuMzQgMjYxLjc3IDMxMC45NiAyNjUuODYgMzE0LjYyIEMgMjY2Ljc0IDMxMi43OCAyNjcuMjIgMzEwLjUxIDI2OS4xMyAzMDkuNDMgQyAyNzIuMTYgMzA3LjM1IDI3NC44NyAzMDQuODEgMjc4LjA2IDMwMi45NCBDIDI3Ny41OSAzMDUuMzggMjc1LjU0IDMwNi44MiAyNzMuNjcgMzA4LjE5IEMgMjc1LjU2IDMwOS41NiAyNzYuODkgMzExLjUxIDI3OC4yMyAzMTMuMzkgQyAyNzguNTIgMzEyLjg3IDI3OS4xMCAzMTEuODEgMjc5LjM5IDMxMS4yOCBDIDI4MC41NCAzMTAuOTIgMjgxLjcwIDMxMC41OCAyODIuODcgMzEwLjI0IEMgMjg0LjA2IDMxMC45MSAyODUuMjUgMzExLjU3IDI4Ni40NSAzMTIuMjQgQyAyODQuOTYgMzA4Ljk1IDI4My44NiAzMDUuNTAgMjgyLjU5IDMwMi4xMiBDIDI4MS44MiAyOTkuNTcgMjc4LjU4IDI5OC43NCAyNzguMDUgMjk2LjA5IEMgMjc3LjM3IDI5My4yMyAyNzYuMjIgMjkwLjUyIDI3NS4zOCAyODcuNzEgQyAyNzYuODIgMjg4Ljg4IDI3Ny43OCAyOTAuNDcgMjc4Ljc4IDI5Mi4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNDIuNDUgMjkxLjMyIEMgMzQ1LjczIDI5My4zOCAzNDguOTUgMjk1LjUxIDM1Mi4xMCAyOTcuNzcgQyAzNTEuMTkgMjk5LjAwIDM1MC4zMCAzMDAuMjQgMzQ5LjM5IDMwMS40OCBDIDM0OC44MyAzMDEuMDcgMzQ3LjcwIDMwMC4yNSAzNDcuMTQgMjk5Ljg0IEMgMzQ3LjE2IDMwMS44MiAzNDcuNjUgMzAzLjkzIDM0Ni43MyAzMDUuODAgQyAzNDUuNDQgMzA2LjAxIDM0NC40OCAzMDUuMDQgMzQzLjQ3IDMwNC40NiBDIDM0NC4zNCAzMDEuOTUgMzQ1LjQ2IDI5OC43MiAzNDIuNzkgMjk2LjgzIEMgMzQxLjU0IDI5Ny45OSAzNDAuODEgMzAwLjA4IDMzOS4yMiAzMDAuNjYgQyAzMzguNjYgMzAwLjI5IDMzNy41NSAyOTkuNTQgMzM3LjAwIDI5OS4xNyBDIDMzOC45NCAyOTYuNjUgMzQwLjgwIDI5NC4wNSAzNDIuNDUgMjkxLjMyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDU1LjU2IDI5OC4zOSBDIDU3LjMzIDI5Ni45NSA1OS4xOCAyOTUuNjEgNjEuMDQgMjk0LjI4IEMgNjEuOTQgMjk1LjU0IDYyLjg2IDI5Ni43OSA2My43OSAyOTguMDMgQyA2Mi43NyAyOTguNzQgNjEuNzYgMjk5LjQ0IDYwLjc0IDMwMC4xNSBDIDYyLjM4IDMwMi4zNCA2NC4wNyAzMDQuNDkgNjUuNzcgMzA2LjYzIEMgNjQuMjYgMzA3Ljg4IDYyLjg0IDMwOS4yNCA2MS4xNiAzMTAuMjcgQyA1OC44MCAzMTAuMzkgNTYuNDMgMzEwLjEyIDU0LjA3IDMxMC4yNyBDIDUzLjA4IDMwOS4wMiA1Mi4wOSAzMDcuNzcgNTEuMTQgMzA2LjQ5IEMgNTMuNDAgMzA1LjMwIDU1Ljg4IDMwNi4xOCA1OC4yMyAzMDYuNTEgQyA1OC44MSAzMDYuMTUgNTkuOTkgMzA1LjQzIDYwLjU3IDMwNS4wNyBDIDU4Ljg5IDMwMi44NSA1Ny4yMyAzMDAuNjIgNTUuNTYgMjk4LjM5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI5My43OCAyOTYuNDAgQyAyOTUuNDYgMjk1Ljk5IDI5Ny4xMSAyOTUuMjggMjk4Ljg3IDI5NS4yNyBDIDMwMS45NSAyOTcuNTEgMzA0LjA3IDMwMC44MiAzMDcuMjMgMzAzLjAwIEMgMzA3LjM2IDMwNC4xOCAzMDcuNTAgMzA1LjM3IDMwNy42MyAzMDYuNTYgQyAzMDYuOTMgMzA3LjIxIDMwNi4yMiAzMDcuODcgMzA1LjUzIDMwOC41NCBDIDMwNC40MyAzMDcuMjMgMzAzLjMyIDMwNS45MyAzMDIuMjcgMzA0LjYwIEMgMzAxLjM0IDMwNC45MyAzMDAuNDIgMzA1LjI2IDI5OS41MSAzMDUuNjAgQyAyOTkuNDAgMzA0Ljk0IDI5OS4yMCAzMDMuNjEgMjk5LjA5IDMwMi45NCBDIDI5OC4wOSAzMDQuMjAgMjk3LjEyIDMwNS40OCAyOTYuMjAgMzA2Ljc5IEMgMjk1LjYxIDMwNi43OCAyOTQuNDMgMzA2Ljc1IDI5My44NCAzMDYuNzQgQyAyOTYuMTMgMzA4LjIzIDI5NC45MCAzMDkuNzUgMjkzLjIxIDMxMS4xNSBDIDI5My44MyAzMTEuNTkgMjk0LjQ1IDMxMi4wMiAyOTUuMDcgMzEyLjQ3IEMgMjk0LjY2IDMxMy45MiAyOTQuMjggMzE1LjM5IDI5My45MCAzMTYuODYgQyAyOTQuNDkgMzE2LjcxIDI5NS42NiAzMTYuNDEgMjk2LjI1IDMxNi4yNiBDIDI5NS4zNyAzMTcuMjkgMjk0LjUxIDMxOC4zNCAyOTMuNjMgMzE5LjM3IEMgMjkzLjI3IDMxNy4yOSAyOTIuMzcgMzE1LjEyIDI5My40NyAzMTMuMDkgQyAyOTIuOTQgMzEyLjk4IDI5MS44OCAzMTIuNzYgMjkxLjM1IDMxMi42NSBDIDI5Mi4xNSAzMTAuNTcgMjkzLjA0IDMwOC41MiAyOTMuNjMgMzA2LjM2IEMgMjk0LjYzIDMwNS4yMyAyOTUuNTcgMzA0LjA1IDI5Ni41MyAzMDIuODcgQyAyOTUuNDIgMzAyLjQxIDI5NC4zMiAzMDEuOTUgMjkzLjIyIDMwMS41MSBDIDI5My40MyAyOTkuODEgMjkzLjYyIDI5OC4xMCAyOTMuNzggMjk2LjQwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMzMi42NSAzMDQuNjYgQyAzMzMuNjcgMzAzLjQ5IDMzNC43MCAzMDIuMzIgMzM1LjczIDMwMS4xNiBDIDMzOC42MiAzMDMuNTggMzQxLjYyIDMwNS44OCAzNDQuNjMgMzA4LjE1IEMgMzQzLjYyIDMwOS40NSAzNDIuNjAgMzEwLjc1IDM0MS41NyAzMTIuMDUgQyAzMzguNTYgMzA5LjYzIDMzNS41NCAzMDcuMjEgMzMyLjY1IDMwNC42NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyOTYuMjAgMzA2Ljc5IEMgMjk3LjEyIDMwNS40OCAyOTguMDkgMzA0LjIwIDI5OS4wOSAzMDIuOTQgQyAyOTkuMjAgMzAzLjYxIDI5OS40MCAzMDQuOTQgMjk5LjUxIDMwNS42MCBDIDMwMC40MiAzMDUuMjYgMzAxLjM0IDMwNC45MyAzMDIuMjcgMzA0LjYwIEMgMzAzLjMyIDMwNS45MyAzMDQuNDMgMzA3LjIzIDMwNS41MyAzMDguNTQgQyAzMDIuNTIgMzExLjE4IDI5OS45OCAzMTQuNjIgMjk2LjI1IDMxNi4yNiBDIDI5NS42NiAzMTYuNDEgMjk0LjQ5IDMxNi43MSAyOTMuOTAgMzE2Ljg2IEMgMjk0LjI4IDMxNS4zOSAyOTQuNjYgMzEzLjkyIDI5NS4wNyAzMTIuNDcgQyAyOTQuNDUgMzEyLjAyIDI5My44MyAzMTEuNTkgMjkzLjIxIDMxMS4xNSBDIDI5NC45MCAzMDkuNzUgMjk2LjEzIDMwOC4yMyAyOTMuODQgMzA2Ljc0IEMgMjk0LjQzIDMwNi43NSAyOTUuNjEgMzA2Ljc4IDI5Ni4yMCAzMDYuNzkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzI4LjExIDMxMC4yNiBDIDMyOS4xMCAzMDkuMDkgMzMwLjEwIDMwNy45MyAzMzEuMDggMzA2Ljc1IEMgMzM0LjgwIDMwOS43OCAzMzguNDAgMzEyLjkzIDM0Mi4xMiAzMTUuOTYgQyAzNDEuMDcgMzE3LjI1IDM0MC4wMiAzMTguNTUgMzM4Ljk5IDMxOS44NyBDIDMzNS40MiAzMTYuNjAgMzMxLjcxIDMxMy40OSAzMjguMTEgMzEwLjI2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDEyMC4yMCAzMTIuNzYgQyAxMjEuMzIgMzEwLjgwIDEyNC40OCAzMTAuOTggMTI2LjUyIDMxMC4yNCBDIDEyNi41MSAzMTIuMjAgMTI2LjUwIDMxNC4xNiAxMjYuNTQgMzE2LjEyIEMgMTI0Ljk3IDMxNC4wOCAxMjIuNjcgMzEzLjIwIDEyMC4yMCAzMTIuNzYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gNjEuNzIgMzIzLjk1IEMgNjUuMTEgMzIwLjU1IDY4LjY2IDMxNy4zMyA3Mi4wNSAzMTMuOTMgQyA3My4xNSAzMTQuOTggNzQuMjQgMzE2LjA0IDc1LjM1IDMxNy4wOCBDIDc0LjI0IDMxOC4yOCA3My4xMyAzMTkuNDggNzIuMDQgMzIwLjcxIEMgNzMuMTUgMzIwLjkzIDc0LjI3IDMyMS4xNiA3NS4zOSAzMjEuMzggQyA3Ni4wMiAzMjAuNjUgNzYuNjYgMzE5LjkzIDc3LjI5IDMxOS4yMCBDIDc4LjQwIDMyMC4yNyA3OS41MiAzMjEuMzIgODAuNjQgMzIyLjM4IEMgNzkuMzAgMzIzLjUxIDc4LjA2IDMyNi4xMyA3NS45MyAzMjQuOTggQyA3My43NCAzMjQuNTQgNzEuNjUgMzIzLjA0IDY5LjQwIDMyMy4yNCBDIDY3Ljg2IDMyNC40NyA2Ni41MiAzMjUuOTIgNjUuMTAgMzI3LjI5IEMgNjMuOTggMzI2LjE3IDYyLjg1IDMyNS4wNiA2MS43MiAzMjMuOTUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTE0LjQ0IDMxNS4xNiBDIDExNS40MyAzMTUuMTIgMTE4Ljc0IDMxMi4wNSAxMTguMTggMzE0LjE0IEMgMTE3LjY4IDMxNS4wOSAxMTcuMTQgMzE2LjAyIDExNi41NSAzMTYuOTIgQyAxMTYuMDEgMzE5LjU0IDExNS44MyAzMjIuMjUgMTE2Ljc2IDMyNC44MiBDIDExNi41NSAzMjQuODcgMTE2LjEyIDMyNC45NyAxMTUuOTEgMzI1LjAyIEwgMTE1LjEwIDMyNC43NSBDIDExMy4yOSAzMjEuODkgMTEzLjc3IDMxOC4yOCAxMTQuNDQgMzE1LjE2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI2NC4wNyAzMjQuNzkgQyAyNjUuNDUgMzIyLjAzIDI2NS44MiAzMTguMDEgMjY5LjA5IDMxNi43OCBDIDI2Ny4yNiAzMjAuMjEgMjY1LjYwIDMyMy43NSAyNjMuNDIgMzI2Ljk5IEMgMjYzLjQ4IDMyOC41NiAyNjQuMjcgMzI5LjU5IDI2NS44MCAzMzAuMDkgQyAyNjMuNzUgMzMwLjYxIDI2MS43MSAzMzEuMjIgMjU5LjU5IDMzMS4zOCBDIDI2MC4yNSAzMjguNjUgMjYyLjUwIDMyNi45NSAyNjQuMDcgMzI0Ljc5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMyMS40OCAzMTcuMzYgQyAzMjIuOTEgMzE4Ljc3IDMyNC4zMiAzMjAuMjEgMzI1LjU2IDMyMS44MSBDIDMyNS4wNyAzMjIuODMgMzI0LjYwIDMyMy44NiAzMjQuMTIgMzI0Ljg5IEMgMzI2LjA4IDMyNC45MCAzMjguMDIgMzI0LjkwIDMyOS45OSAzMjQuOTEgQyAzMjguNzIgMzI2LjE3IDMyNy43MCAzMjcuODIgMzI2LjA3IDMyOC42NCBDIDMyMy40MiAzMjguNzUgMzIwLjc4IDMyOC40OSAzMTguMTUgMzI4LjM4IEMgMzE5LjQ2IDMyOS44NyAzMjAuNzggMzMxLjM3IDMyMi4wNiAzMzIuODkgQyAzMjAuODIgMzMzLjg0IDMxOS41OSAzMzQuODEgMzE4LjM2IDMzNS43OCBDIDMxNy4wOCAzMzQuMjMgMzE1Ljc4IDMzMi42OSAzMTQuNTEgMzMxLjEzIEMgMzE0Ljc3IDMzMC4zNiAzMTUuMjggMzI4LjgyIDMxNS41NCAzMjguMDUgQyAzMTMuODcgMzI3LjkyIDMxMi4xOSAzMjcuNzggMzEwLjUzIDMyNy42MyBDIDMxMS42NiAzMjYuNTUgMzEyLjc0IDMyNS4zOSAzMTQuMDMgMzI0LjUwIEMgMzE2LjcxIDMyNC41MCAzMTkuMzcgMzI0LjgwIDMyMi4wNSAzMjQuNzkgQyAzMjAuODYgMzIzLjM1IDMxOS42MSAzMjEuOTggMzE4LjMzIDMyMC42MyBDIDMxOS4zNyAzMTkuNTQgMzIwLjQyIDMxOC40NSAzMjEuNDggMzE3LjM2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1MS43MiAzMjIuNTAgQyAxNDkuMDggMzIxLjQwIDE1MS41MyAzMTkuNTQgMTUyLjMzIDMxOC4wNiBDIDE1Mi4xOCAzMTkuNTUgMTUxLjk2IDMyMS4wMiAxNTEuNzIgMzIyLjUwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI3OC45OSAzMjAuMjggQyAyODAuMDEgMzIxLjM2IDI4MS4xNyAzMjIuMjkgMjgyLjQ0IDMyMy4wOSBDIDI4Mi4wNCAzMjMuODggMjgyLjIzIDMyNi4wNSAyODAuODggMzI1LjIzIEMgMjgwLjU0IDMyMy40NyAyODAuMDcgMzIxLjc0IDI3OC45OSAzMjAuMjggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gNzQuNzcgMzMyLjU2IEMgNzcuMTggMzI5LjY3IDc5Ljg4IDMyNy4wNCA4Mi4yMCAzMjQuMDggQyA4My40NCAzMjUuMDIgODQuNjcgMzI1Ljk3IDg1Ljg5IDMyNi45NCBDIDgzLjMyIDMyOS44MSA4MC44OSAzMzIuODEgNzguMzIgMzM1LjY4IEMgNzcuMTQgMzM0LjYzIDc1Ljk2IDMzMy41OSA3NC43NyAzMzIuNTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gODAuMjYgMzM3LjI2IEMgODIuNzkgMzM0LjM5IDg1LjE5IDMzMS40MCA4Ny42NyAzMjguNDkgQyA5MC43MyAzMzEuNTMgOTUuMDMgMzMzLjMzIDk3LjQwIDMzNi45OCBDIDk2LjIyIDM0MC4zMyA5My41MiAzNDIuODggOTEuNzQgMzQ1LjkxIEMgOTAuMzggMzQ1LjAzIDg5LjA2IDM0NC4xMyA4Ny43NCAzNDMuMjEgQyA4OS40MCAzNDAuOTkgOTEuMTEgMzM4LjgwIDkyLjc4IDMzNi41OSBDIDkxLjY1IDMzNS42NCA5MC41MSAzMzQuNzAgODkuMzggMzMzLjc1IEMgODcuNDIgMzM1Ljc4IDg1Ljc0IDMzOC4wNCA4NC4wNSAzNDAuMjkgQyA4Mi43NyAzMzkuMjkgODEuNTEgMzM4LjI4IDgwLjI2IDMzNy4yNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMDUuOTMgMzMxLjIwIEMgMzA3LjEwIDMzMC4zMSAzMDguMjYgMzI5LjQxIDMwOS40MyAzMjguNTIgQyAzMTEuODIgMzMxLjQ2IDMxNC4yMCAzMzQuNDIgMzE2Ljc4IDMzNy4yMSBDIDMxNS41NSAzMzguMjggMzE0LjMwIDMzOS4zMiAzMTMuMDQgMzQwLjM2IEMgMzEwLjY3IDMzNy4zMSAzMDguMjMgMzM0LjMwIDMwNS45MyAzMzEuMjAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTUyLjMwIDMzNS4yOCBDIDE1Mi45MyAzMzQuNDkgMTUzLjU3IDMzMy43MSAxNTQuMjEgMzMyLjk0IEMgMTU0LjYzIDMzMy45NCAxNTUuMDYgMzM0Ljk1IDE1NS40OSAzMzUuOTYgQyAxNTQuNDIgMzM1LjczIDE1My4zNiAzMzUuNTEgMTUyLjMwIDMzNS4yOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNzMuOTMgMzM4Ljk2IEMgMTc0LjMzIDMzNi43NCAxNzUuMzMgMzM0LjcyIDE3Ni40NSAzMzIuNzkgQyAxNzYuOTUgMzM0LjcyIDE3Ny41MCAzMzYuNjUgMTc3Ljk3IDMzOC42MSBDIDE3Ni42MiAzMzguNzMgMTc1LjI3IDMzOC44NSAxNzMuOTMgMzM4Ljk2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI5My43NiAzNDAuMDMgQyAyOTcuMjggMzM3LjkwIDMwMC4zNyAzMzUuMDcgMzA0LjE3IDMzMy4zOSBDIDMwNi42NiAzMzYuMDIgMzA5LjAyIDMzOC44MiAzMTAuOTAgMzQxLjkyIEMgMzA5Ljg0IDM0Mi44OCAzMDguNjcgMzQzLjcyIDMwNy40NSAzNDQuNDYgQyAzMDUuMzQgMzQyLjcwIDMwNC4xNCAzNDAuMDkgMzAyLjQ5IDMzNy45MyBDIDMwMC4wMCAzMzkuNTMgMjk3LjU3IDM0MS4yMSAyOTUuMDQgMzQyLjc1IEMgMjk0LjcyIDM0Mi4wNyAyOTQuMDggMzQwLjcxIDI5My43NiAzNDAuMDMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gOTcuMzcgMzQyLjA3IEMgOTguMjQgMzQwLjY3IDk5LjE5IDMzOS4zMyAxMDAuMTIgMzM3Ljk3IEMgMTAxLjMyIDMzOC43NiAxMDIuNTMgMzM5LjU2IDEwMy43MyAzNDAuMzYgQyAxMDMuMDcgMzQxLjU1IDEwMi40MiAzNDIuNzUgMTAxLjgzIDM0My45OCBDIDEwMy4xOSAzNDMuMzMgMTA0LjQ4IDM0Mi41MCAxMDUuOTUgMzQyLjA5IEMgMTA4LjIyIDM0Mi43MyAxMTAuMTIgMzQ0LjIyIDExMS44NCAzNDUuNzggQyAxMTAuMTYgMzQ5LjA2IDEwOC4yNyAzNTIuMjEgMTA2LjUxIDM1NS40NCBDIDEwNC4zMyAzNTQuMTQgMTAyLjEzIDM1Mi44NiA5OS45NSAzNTEuNTcgQyAxMDAuNDIgMzUwLjY2IDEwMC45MSAzNDkuNzUgMTAxLjM5IDM0OC44NCBDIDEwMi4yOSAzNDkuMzcgMTAzLjE5IDM0OS45MSAxMDQuMDkgMzUwLjQ1IEMgMTA1LjA5IDM0OC43NiAxMDYuMDcgMzQ3LjA1IDEwNi45MSAzNDUuMjcgQyAxMDMuMDYgMzQ1LjE2IDEwMC42MyAzNDkuMTAgOTcuMDQgMzQ5LjY1IEMgOTUuNzcgMzQ4LjkwIDk0LjU4IDM0OC4wMiA5My4zOCAzNDcuMTggQyA5NS4xOCAzNDYuMjggOTYuOTkgMzQ1LjQwIDk4LjgxIDM0NC41NCBDIDk4LjMwIDM0My43MyA5Ny44MiAzNDIuOTEgOTcuMzcgMzQyLjA3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI4MC40OCAzNDcuOTEgQyAyODQuMzAgMzQ1Ljc1IDI4OC4xMSAzNDMuNTcgMjkxLjkxIDM0MS4zNyBDIDI5Mi4yOSAzNDEuOTMgMjkzLjA1IDM0My4wNSAyOTMuNDQgMzQzLjYyIEMgMjkyLjg4IDM0NC4xMCAyOTIuMzMgMzQ0LjU5IDI5MS43OSAzNDUuMDkgQyAyOTMuMzIgMzQ3LjM4IDI5NC43NiAzNDkuNzMgMjk2LjIyIDM1Mi4wOCBDIDI5NC44NiAzNTIuODcgMjkzLjQ5IDM1My42NiAyOTIuMTMgMzU0LjQ2IEMgMjkwLjc4IDM1Mi4wMiAyODkuMzcgMzQ5LjYyIDI4Ny45NSAzNDcuMjMgQyAyODYuMDIgMzQ4LjM0IDI4NC4wNyAzNDkuNDEgMjgyLjA5IDM1MC40MyBDIDI4MS42OSAzNDkuODAgMjgwLjg4IDM0OC41NCAyODAuNDggMzQ3LjkxIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI5Ni4yMCAzNDQuMDggQyAyOTcuNDUgMzQzLjIzIDI5OC43MCAzNDIuMzggMjk5Ljk2IDM0MS41NCBDIDMwMS4yMSAzNDMuNDIgMzAyLjUxIDM0NS4yOCAzMDMuODMgMzQ3LjEyIEMgMzAyLjUzIDM0Ny45NiAzMDEuMjcgMzQ4Ljg3IDI5OS45MyAzNDkuNjUgQyAyOTguNTcgMzQ3Ljg3IDI5Ny40MyAzNDUuOTQgMjk2LjIwIDM0NC4wOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNzQuOTMgMzUwLjQ5IEMgMjc2LjI0IDM0OS45NSAyNzcuNTYgMzQ5LjQyIDI3OC44OCAzNDguOTEgQyAyNzkuODQgMzUwLjg2IDI4MS4wMCAzNTIuNzIgMjgxLjc0IDM1NC43NyBDIDI4MC40OCAzNTUuNTYgMjc5LjExIDM1Ni4xNSAyNzcuNzYgMzU2Ljc4IEMgMjc2Ljc4IDM1NC42OSAyNzUuNzkgMzUyLjYyIDI3NC45MyAzNTAuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTIwLjIwIDM0OS44MiBDIDEyMy43OCAzNTEuNTIgMTI3LjUzIDM1Mi45MiAxMzAuOTkgMzU0Ljg2IEMgMTMyLjQ4IDM1NS43MCAxMzEuODAgMzU3LjI2IDEzMS4zNCAzNTguNTEgQyAxMzAuMzkgMzYxLjAwIDEyOS4zMSAzNjMuNDQgMTI4LjMxIDM2NS45MSBDIDEyMy45MiAzNjQuMDEgMTE5LjQ3IDM2Mi4yNCAxMTUuMjMgMzYwLjAyIEMgMTE2LjcwIDM1Ni41MyAxMTguNjUgMzUzLjI4IDEyMC4yMCAzNDkuODIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTIyLjkxIDM1NC40NSBDIDEyNC40MyAzNTUuMTQgMTI1Ljk2IDM1NS44NCAxMjcuNDcgMzU2LjU3IEMgMTI2LjcxIDM1OC4xNSAxMjUuOTggMzU5Ljc2IDEyNS4yNCAzNjEuMzUgQyAxMjMuNzAgMzYwLjYxIDEyMi4xNSAzNTkuOTAgMTIwLjYxIDM1OS4xNyBDIDEyMS4zOSAzNTcuNjAgMTIyLjE1IDM1Ni4wMyAxMjIuOTEgMzU0LjQ1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE0MS42NyAzNTUuMDMgQyAxNDMuMDMgMzU1LjMyIDE0NC4zOCAzNTUuNjQgMTQ1LjcyIDM1NS45OCBDIDE0NS40NiAzNTcuMjUgMTQ1LjIxIDM1OC41MiAxNDQuOTYgMzU5Ljc5IEMgMTQ3LjI3IDM2MC40NiAxNDkuNTggMzYxLjEyIDE1MS45MSAzNjEuNzMgQyAxNTEuNDAgMzYzLjU3IDE1MS4wMiAzNjUuNDcgMTUwLjI0IDM2Ny4yNCBDIDE0OC41MiAzNjguOTQgMTQ2LjI2IDM3MC4wMCAxNDQuMzIgMzcxLjQ0IEMgMTQyLjk1IDM3MS4wNiAxNDEuNjAgMzcwLjY2IDE0MC4yNSAzNzAuMjMgQyAxNDEuOTIgMzY3LjMyIDE0Ni4wNSAzNjcuMTIgMTQ3LjE5IDM2My43NiBDIDE0NC42OCAzNjIuODUgMTQyLjE0IDM2Mi4wMiAxMzkuNjEgMzYxLjIwIEMgMTQwLjMxIDM1OS4xNCAxNDEuMDAgMzU3LjA5IDE0MS42NyAzNTUuMDMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjU0LjYxIDM1OC45MyBDIDI1Ny44MiAzNTcuODcgMjYwLjk0IDM1Ni41NiAyNjQuMTUgMzU1LjUwIEMgMjY1LjIwIDM1NS4xNyAyNjYuODUgMzU1LjEzIDI2Ny4yNiAzNTYuNDEgQyAyNjguNjUgMzU5LjIxIDI2OS43NCAzNjIuMTQgMjcwLjkyIDM2NS4wNCBDIDI2OS41MSAzNjUuNTggMjY4LjEwIDM2Ni4xNSAyNjYuNzEgMzY2LjcyIEMgMjY1LjY5IDM2NC4xNiAyNjQuNjYgMzYxLjYwIDI2My42NCAzNTkuMDQgQyAyNjEuMzcgMzU5Ljc2IDI1OS4xMiAzNjAuNTIgMjU2Ljg1IDM2MS4yNCBDIDI1OC4wNyAzNjEuNzYgMjU5LjM0IDM2Mi4xMyAyNjAuNjUgMzYyLjM3IEMgMjYxLjM3IDM2NC4zMCAyNjIuMTAgMzY2LjI0IDI2Mi44MiAzNjguMTggQyAyNjEuMzUgMzY4LjY2IDI1OS44OCAzNjkuMTcgMjU4LjQyIDM2OS42NyBDIDI1Ny44MSAzNjcuOTAgMjU3LjIyIDM2Ni4xMiAyNTYuNjUgMzY0LjM0IEMgMjU3LjE0IDM2My4wMiAyNTYuNjUgMzYxLjgyIDI1NS41OCAzNjEuMDIgQyAyNTUuMzQgMzYwLjUwIDI1NC44NSAzNTkuNDUgMjU0LjYxIDM1OC45MyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMzQuODAgMzU2LjE3IEMgMTM2LjE3IDM1Ni42NyAxMzcuNTUgMzU3LjE3IDEzOC45MiAzNTcuNjggQyAxMzguMTEgMzU5Ljc2IDEzNy4zNSAzNjEuODcgMTM2LjYwIDM2My45OCBDIDEzNS4xNCAzNjMuNTAgMTMzLjcwIDM2Mi45OCAxMzIuMjYgMzYyLjQ5IEMgMTMzLjE3IDM2MC40MCAxMzQuMDEgMzU4LjMwIDEzNC44MCAzNTYuMTcgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjQwLjMwIDM2Mi45OSBDIDI0NC4zMiAzNjIuMTcgMjQ4LjE2IDM2MC41MyAyNTIuMjkgMzYwLjI0IEMgMjUzLjgwIDM2My4wNSAyNTQuOTAgMzY2LjA4IDI1NS41MiAzNjkuMjIgQyAyNTUuMDcgMzcwLjIzIDI1NC4zMSAzNzAuOTIgMjUzLjI2IDM3MS4yNyBDIDI0OS44OCAzNzIuNDcgMjQ2LjM3IDM3My4yOSAyNDIuODYgMzc0LjA0IEMgMjQyLjcwIDM3My4wNyAyNDIuNTQgMzcyLjEwIDI0Mi4zOCAzNzEuMTQgQyAyNDUuMTYgMzcwLjM4IDI0OC4wNSAzNjkuODggMjUwLjcwIDM2OC43MSBDIDI1MC40MiAzNjYuOTMgMjQ5Ljc1IDM2NS4yNSAyNDkuMjIgMzYzLjU2IEMgMjQ3LjY4IDM2NC4wMSAyNDYuMTQgMzY0LjQ2IDI0NC43NSAzNjUuMjYgQyAyNDUuODggMzY2LjEwIDI0OC40MyAzNjYuMDQgMjQ3Ljg1IDM2OC4xMiBDIDI0NS45OCAzNjguOTIgMjQzLjkzIDM2OS4xNCAyNDEuOTMgMzY5LjQwIEMgMjQxLjMxIDM2Ny4yOCAyNDAuNzcgMzY1LjEzIDI0MC4zMCAzNjIuOTkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTU0LjA4IDM2Mi40MCBDIDE1NS4zMyAzNjIuNjMgMTU2LjU3IDM2Mi45MSAxNTcuODAgMzYzLjI0IEMgMTU3Ljc4IDM2Ni4yNCAxNTYuNDYgMzY5LjA2IDE1Ni4xMiAzNzIuMDQgQyAxNTYuNTggMzcxLjk0IDE1Ny41MCAzNzEuNzUgMTU3Ljk2IDM3MS42NSBDIDE1OC43NCAzNjkuMDcgMTU5LjE5IDM2Ni40MCAxNTkuODAgMzYzLjc4IEMgMTYxLjE0IDM2NC4wMyAxNjIuNDggMzY0LjI4IDE2My44MiAzNjQuNTMgQyAxNjMuMjMgMzY3LjQ3IDE2Mi41OCAzNzAuMzkgMTYyLjA5IDM3My4zNSBDIDE2Mi42MyAzNzMuMTkgMTYzLjcxIDM3Mi44OCAxNjQuMjUgMzcyLjcyIEMgMTY0LjkwIDM3MC4yMSAxNjUuMTQgMzY3LjYxIDE2NS45MCAzNjUuMTQgQyAxNjcuMTkgMzY1LjIyIDE2OC40OCAzNjUuMzUgMTY5Ljc3IDM2NS41MSBDIDE2OC43MCAzNjkuMDYgMTcwLjA2IDM3NS40MSAxNjUuMTYgMzc2LjE4IEMgMTYwLjQwIDM3NS45MSAxNTUuODEgMzc0LjQyIDE1MS4xNyAzNzMuNDEgQyAxNTIuMTggMzY5Ljc1IDE1My4xOSAzNjYuMDkgMTU0LjA4IDM2Mi40MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMDQuNTYgMzY0LjI0IEMgMjA1Ljk2IDM2NC4xNyAyMDcuMzUgMzY0LjEyIDIwOC43NSAzNjQuMDggQyAyMDguODAgMzY0Ljk4IDIwOC45MSAzNjYuNzcgMjA4Ljk2IDM2Ny42NyBDIDIxMS40OSAzNjcuNDcgMjE0LjAzIDM2Ny4yOSAyMTYuNTcgMzY3LjE3IEMgMjE2LjYzIDM2OS4yNSAyMTcuMTIgMzcxLjM5IDIxNi42OSAzNzMuNDcgQyAyMTUuNTMgMzc1LjIzIDIxNC4xOCAzNzYuODggMjEzLjI4IDM3OC44MSBDIDIxMS43NSAzNzguODMgMjEwLjIzIDM3OC44NCAyMDguNzAgMzc4LjgzIEMgMjA5LjQyIDM3NS42NiAyMTMuMjggMzc0LjA5IDIxMi42OSAzNzAuNTUgQyAyMTAuMDUgMzcwLjY2IDIwNy40MSAzNzAuNzkgMjA0Ljc4IDM3MC44MCBDIDIwNC43NSAzNjguNjEgMjA0LjY3IDM2Ni40MiAyMDQuNTYgMzY0LjI0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIzMy44OCAzNjQuNDAgQyAyMzUuMjkgMzY0LjEzIDIzNi42OSAzNjMuODggMjM4LjEwIDM2My42NCBDIDIzOC44OCAzNjcuMzAgMjM5LjcxIDM3MC45NCAyNDAuNzAgMzc0LjU1IEMgMjM5LjE3IDM3NC45MiAyMzcuNjUgMzc1LjI5IDIzNi4xMiAzNzUuNjMgQyAyMzUuNDIgMzcxLjg3IDIzNC41MyAzNjguMTYgMjMzLjg4IDM2NC40MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMjcuNTMgMzY1LjUxIEMgMjI4Ljk2IDM2NS4zMyAyMzAuNDAgMzY1LjE3IDIzMS44NCAzNjUuMDEgQyAyMzIuMDYgMzY4LjY2IDIzNS4yNiAzNzMuODEgMjMxLjIyIDM3Ni4yNSBDIDIyNy41NSAzNzcuNTcgMjIzLjU3IDM3Ny41NiAyMTkuNzUgMzc4LjIxIEMgMjE5LjcwIDM3Ny40NyAyMTkuNjAgMzc2LjAwIDIxOS41NSAzNzUuMjYgQyAyMjAuMjQgMzc1LjEyIDIyMS42NCAzNzQuODQgMjIyLjMzIDM3NC43MCBDIDIyMS4zNCAzNzIuMDEgMjIwLjA5IDM2OS40MiAyMTkuMDEgMzY2Ljc4IEMgMjIwLjA5IDM2Ni42NCAyMjIuMjYgMzY2LjM3IDIyMy4zNCAzNjYuMjQgQyAyMjQuODMgMzY5LjEwIDIyNS4zOSAzNzIuNjMgMjI4LjAwIDM3NC43NiBDIDIyOS41MiAzNzEuODAgMjI3Ljc5IDM2OC41NSAyMjcuNTMgMzY1LjUxIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE3Mi4wNiAzNjYuMTMgQyAxNzMuNTEgMzY2LjI3IDE3NC45NiAzNjYuNDIgMTc2LjQxIDM2Ni41NyBDIDE3NS45MSAzNzAuMzAgMTc1LjM4IDM3NC4wMiAxNzUuMDUgMzc3Ljc3IEMgMTczLjQ4IDM3Ny42NSAxNzEuOTIgMzc3LjUxIDE3MC4zNSAzNzcuMzcgQyAxNzAuOTYgMzczLjYzIDE3MS41NyAzNjkuODkgMTcyLjA2IDM2Ni4xMyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNzguMDIgMzY5Ljc0IEMgMTc4LjIwIDM2OC43NSAxNzguMzkgMzY3Ljc3IDE3OC41OSAzNjYuNzkgQyAxODIuMTYgMzY3LjQ2IDE4Ni4wMyAzNjYuOTMgMTg5LjM2IDM2OC42NCBDIDE4OS4zMSAzNzIuMjEgMTg5LjIwIDM3NS43OSAxODguNjQgMzc5LjMzIEMgMTg3LjU3IDM3OS4xOCAxODUuNDMgMzc4Ljg5IDE4NC4zNiAzNzguNzUgQyAxODQuNTQgMzc2LjAxIDE4NC43NCAzNzMuMjggMTg0Ljg3IDM3MC41NSBDIDE4Mi41OCAzNzAuMzUgMTgwLjI5IDM3MC4wOSAxNzguMDIgMzY5Ljc0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE5MS43NiAzNjcuNzkgQyAxOTMuMjIgMzY3LjgzIDE5NC42OCAzNjcuODcgMTk2LjE0IDM2Ny45MiBDIDE5Ni4xMyAzNzAuMTYgMTk2LjEzIDM3Mi4zOSAxOTYuMTQgMzc0LjY0IEMgMTk0LjYxIDM3NC42NCAxOTMuMDcgMzc0LjY1IDE5MS41NCAzNzQuNjUgQyAxOTEuNjEgMzcyLjM2IDE5MS42OSAzNzAuMDcgMTkxLjc2IDM2Ny43OSBaXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKTtcbiAgfVxufVxuXG5Mb2dvLlByb3BUeXBlcyA9IHtcbiAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgb3BhY2l0eTogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbG9nby5qc3giLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuY29uc3QgYXV0aEFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJyk7XG5cbmNvbnN0IG1lbnVQYWdlc0lkcyA9IFtcbiAgICBDb25zdGFudHMuUk9VVElORy5QQUdFUy5IT01FLFxuICAgIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVTRVJTLFxuICAgIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkdBTUVTLFxuICAgIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkJPT0tJTkdTLFxuICAgIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkRJU1RSSUJVVElPTlxuXTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL3RvcEJhci5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIGNvbnN0IGF1dGhEYXRhID0gc3RhdGUuYXV0aERhdGE7XG4gICAgY29uc3QgdXNlcnMgPSBzdGF0ZS51c2VycztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHVpZDogYXV0aERhdGEudWlkLFxuICAgICAgICBwaG90b1VSTDogYXV0aERhdGEucGhvdG9VUkwgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE2My8xNjM4MDQuc3ZnJyxcbiAgICAgICAgaXNBZG1pbjogYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgY3VycmVudFBhZ2VJZDogc3RhdGUucm91dGluZy5jdXJyZW50LnBhZ2VJZCxcbiAgICAgICAgY3VycmVudFVzZXI6IGF1dGhEYXRhICYmIHVzZXJzW2F1dGhEYXRhLnVpZF1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYXZpZ2F0ZVRvOiAocGFnZUlkLCBwYXJhbXMpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlVG8ocGFnZUlkLCBwYXJhbXMpKSxcbiAgICAgICAgc2lnbk91dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2lnbk91dCgpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJUaXRsZShjdXJyZW50VXNlcikge1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgICAgcmV0dXJuICfXntep16rXntepJztcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyLmZpcnN0TmFtZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHVpZCwgY3VycmVudFVzZXIsIHBob3RvVVJMLCBuYXZpZ2F0ZVRvLCBzaWduT3V0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNSBzbWFsbC0xMCBjb2x1bW4gdXNlci1pbmZvXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17cGhvdG9VUkx9IG9uQ2xpY2s9e25hdmlnYXRlVG8uYmluZCh0aGlzLCBDb25zdGFudHMuUk9VVElORy5QQUdFUy5FRElUX1VTRVJfSU5GTywgeyB1aWQgfSl9Lz5cbiAgICAgICAgICAgIDxzcGFuPtep15zXldedIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItbmFtZVwiPntnZXRVc2VyVGl0bGUoY3VycmVudFVzZXIpfTwvc3Bhbj48c3Bhbj4gfCA8L3NwYW4+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkaXNjb25uZWN0XCIgb25DbGljaz17c2lnbk91dH0+15TXqteg16rXpzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlKHRvZ2dsZU1lbnVWaXNpYmlsaXR5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWZvci1zbWFsbC1vbmx5IGZsb2F0LWxlZnRcIiBrZXk9XCJhZG1pbi1tZW51LWljb25cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNtYWxsLW1lbnUgYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlTWVudVZpc2liaWxpdHl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoY3VycmVudFBhZ2VJZCwgbmF2aWdhdGVUbywgaXNBZG1pbiwgaXNNZW51VmlzaWJsZSwgdG9nZ2xlTWVudVZpc2liaWxpdHkpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlc2t0b3BNZW51SXRlbShwYWdlSWQpIHtcbiAgICAgICAgY29uc3QgaXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIGFjdGl2ZTogY3VycmVudFBhZ2VJZCA9PT0gcGFnZUlkLFxuICAgICAgICAgICAgYnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgc21hbGw6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXRlbUNsYXNzZXN9IG9uQ2xpY2s9e25hdmlnYXRlVG8uYmluZCh0aGlzLCBwYWdlSWQpfSBrZXk9eydwYWdlLScgKyBwYWdlSWR9PlxuICAgICAgICAgICAgICAgIHsgVHJhbnNsYXRpb25zLlJPVVRJTkcuUEFHRVNbcGFnZUlkXSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9iaWxlTWVudUl0ZW0ocGFnZUlkKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBhY3RpdmU6IGN1cnJlbnRQYWdlSWQgPT09IHBhZ2VJZCxcbiAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvbk1vYmlsZU1lbnVDbGlja2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGVUbyhwYWdlSWQpO1xuICAgICAgICAgICAgdG9nZ2xlTWVudVZpc2liaWxpdHkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpdGVtQ2xhc3Nlc30gb25DbGljaz17b25Nb2JpbGVNZW51Q2xpY2tlZH0ga2V5PXsncGFnZS0nICsgcGFnZUlkfT5cbiAgICAgICAgICAgICAgICB7IFRyYW5zbGF0aW9ucy5ST1VUSU5HLlBBR0VTW3BhZ2VJZF0gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlc2t0b3BNZW51KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IGJ1dHRvbi1ncm91cCBoaWRlLWZvci1zbWFsbC1vbmx5XCIga2V5PVwiYWRtaW4tbWVudVwiPlxuICAgICAgICAgICAgICAgIHsgXy5tYXAobWVudVBhZ2VzSWRzLCBjcmVhdGVEZXNrdG9wTWVudUl0ZW0pIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vYmlsZU1lbnUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgYnV0dG9uLWdyb3VwIHN0YWNrZWQtZm9yLXNtYWxsIHNob3ctZm9yLXNtYWxsLW9ubHlcIiBrZXk9XCJhZG1pbi1tZW51LW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIHsgXy5tYXAobWVudVBhZ2VzSWRzLCBjcmVhdGVNb2JpbGVNZW51SXRlbSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNyBzbWFsbC0xMiBjb2x1bW4gdmVydGljYWwgY29sbGFwc2VkXCI+XG4gICAgICAgICAgICB7IGlzQWRtaW4gPyBjcmVhdGVEZXNrdG9wTWVudSgpIDogbnVsbCB9XG4gICAgICAgICAgICB7IGlzQWRtaW4gJiYgaXNNZW51VmlzaWJsZSA/IGNyZWF0ZU1vYmlsZU1lbnUoKSA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNNZW51VmlzaWJsZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzTWVudVZpc2libGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyIHJvdyBzbWFsbC1jb2xsYXBzZSBoaWRlLWZvci1wcmludFwiPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlSGVhZGVyKHRoaXMucHJvcHMudWlkLCB0aGlzLnByb3BzLmN1cnJlbnRVc2VyLCB0aGlzLnByb3BzLnBob3RvVVJMLCB0aGlzLnByb3BzLm5hdmlnYXRlVG8sIHRoaXMucHJvcHMuc2lnbk91dCkgfVxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0FkbWluID8gY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlKHRoaXMudG9nZ2xlTWVudVZpc2liaWxpdHkuYmluZCh0aGlzKSkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZU1lbnUodGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkLCB0aGlzLnByb3BzLm5hdmlnYXRlVG8sIHRoaXMucHJvcHMuaXNBZG1pbiwgdGhpcy5zdGF0ZS5pc01lbnVWaXNpYmxlLCB0aGlzLnRvZ2dsZU1lbnVWaXNpYmlsaXR5LmJpbmQodGhpcykpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVG9wQmFyLnByb3BUeXBlcyA9IHtcbiAgICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBwaG90b1VSTDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0FkbWluOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjdXJyZW50UGFnZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmF2aWdhdGVUbzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2lnbk91dDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUb3BCYXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RvcEJhci5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvcEJhci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvcEJhci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9wQmFyLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy90b3BCYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9wLWJhciB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xcbiAgY29sb3I6ICNGRkZGRkY7IH1cXG4gIC50b3AtYmFyIHNwYW4ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gIC50b3AtYmFyIC51c2VyLWluZm8ge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07IH1cXG4gIC50b3AtYmFyIC5zbWFsbC1tZW51IHtcXG4gICAgYmFja2dyb3VuZDogI0Q1MDAwMDtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcbiAgLnRvcC1iYXIgLm1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07IH1cXG4gICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbiB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24uc21hbGwge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XFxuICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24uYWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNEMzJGMkY7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbi5hY3RpdmU6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgLnRvcC1iYXIgLmF2YXRhciB7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC50b3AtYmFyIC5kaXNjb25uZWN0IHtcXG4gICAgY29sb3I6ICNGNDQzMzY7IH1cXG4gICAgLnRvcC1iYXIgLmRpc2Nvbm5lY3Q6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy90b3BCYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCBhdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMnKTtcbmNvbnN0IGVycm9yQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zJyk7XG5cbmNvbnN0IExvZ28gPSByZXF1aXJlKCcuL2xvZ28nKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2F1dGhQYWdlLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3JNc2c6IHN0YXRlLmVycm9yTXNnXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9naW5XaXRoRmFjZWJvb2s6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ2luV2l0aEZhY2Vib29rKCkpLFxuICAgICAgICBsb2dpbldpdGhHb29nbGU6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ2luV2l0aEdvb2dsZSgpKSxcbiAgICAgICAgbG9naW5XaXRoRW1haWw6IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKSksXG4gICAgICAgIHNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQ6IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpKSxcbiAgICAgICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbDogZW1haWwgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkpLFxuICAgICAgICByZXBvcnRFcnJvcjogKG1lc3NhZ2UpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihtZXNzYWdlKSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpc0xvZ2luTW9kZShhdXRoTW9kZSkge1xuICAgIHJldHVybiBhdXRoTW9kZSA9PT0gJ2xvZ2luJztcbn1cblxuZnVuY3Rpb24gaXNSZWdpc3Rlck1vZGUoYXV0aE1vZGUpIHtcbiAgICByZXR1cm4gYXV0aE1vZGUgPT09ICdyZWdpc3Rlcic7XG59XG5cbmZ1bmN0aW9uIGlzRm9ybVZhbGlkKHN0YXRlLCBhdXRoTW9kZSkge1xuICAgIHN3aXRjaCAoYXV0aE1vZGUpIHtcbiAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgICAgcmV0dXJuICFfLmlzRW1wdHkoc3RhdGUuZW1haWwpICYmICFfLmlzRW1wdHkoc3RhdGUucGFzc3dvcmQpO1xuICAgICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgICAgICByZXR1cm4gIV8uaXNFbXB0eShzdGF0ZS5lbWFpbCkgJiYgIV8uaXNFbXB0eShzdGF0ZS5wYXNzd29yZCkgJiAhXy5pc0VtcHR5KHN0YXRlLnBhc3N3b3JkQWdhaW4pO1xuICAgICAgICBjYXNlICdmb3Jnb3RQYXNzd29yZCc6XG4gICAgICAgICAgICByZXR1cm4gIV8uaXNFbXB0eShzdGF0ZS5lbWFpbCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2dvKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLWNlbnRlcmVkIGxvZ29cIj5cbiAgICAgICAgICAgIDxMb2dvIHdpZHRoPXsxMjB9IGhlaWdodD17MTIwfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTb2NpYWxCdXR0b25zU2VjdGlvbihsb2dpbldpdGhGYWNlYm9vaywgbG9naW5XaXRoR29vZ2xlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9naW5XaXRoRmFjZWJvb2t9IGNsYXNzTmFtZT0nZmFjZWJvb2sgYnV0dG9uIHNwbGl0Jz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5GYWNlYm9vazwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWZhY2Vib29rLW9mZmljaWFsJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9naW5XaXRoR29vZ2xlfSBjbGFzc05hbWU9J2dvb2dsZSBidXR0b24gc3BsaXQnPlxuICAgICAgICAgICAgICAgIDxzcGFuPkdvb2dsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWdvb2dsZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0naHInIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yU2VjdGlvbihtZXNzYWdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Vycm9yLW1zZycga2V5PSdob21lUGFnZS1lcnJvci1tZXNzYWdlJz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZXJyb3ItbXNnLXR4dCc+e21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dCh0eXBlLCB2YWx1ZSwgb25DaGFuZ2UsIG5hbWUsIHBsYWNlaG9sZGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IHR5cGU9e3R5cGV9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPXtuYW1lfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0QnV0dG9uTGFiZWwoYXV0aE1vZGUpIHtcbiAgICBzd2l0Y2ggKGF1dGhNb2RlKSB7XG4gICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLlNVQk1JVF9CVE4uTE9HSU47XG4gICAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLlNVQk1JVF9CVE4uUkVHSVNURVI7XG4gICAgICAgIGNhc2UgJ2ZvcmdvdFBhc3N3b3JkJzpcbiAgICAgICAgICAgIHJldHVybiBUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLlNVQk1JVF9CVE4uRk9SR09UX1BBU1NXT1JEO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3VibWl0QnV0dG9uKG9uU3VibWl0LCBkaXNhYmxlZCwgYXV0aE1vZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSBjbGFzc05hbWU9XCJidXR0b24gc3BsaXQgc3VjY2Vzc1wiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICA8c3Bhbj57Z2V0QnV0dG9uTGFiZWwoYXV0aE1vZGUpfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua3NTZWN0aW9uKGF1dGhNb2RlLCBuYXZUb0xvZ2luLCBuYXZUb1JlZ2lzdGVyLCBuYXZUb0ZvcmdvdFBhc3N3b3JkKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMb2dpblNjcmVlbkxpbmtzKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBzbWFsbC02IHJlZC1saW5rJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17bmF2VG9SZWdpc3Rlcn0+e1RyYW5zbGF0aW9ucy5BVVRIX1BBR0UuTElOS1MuR09fVE9fUkVHSVNURVJ9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gc21hbGwtNiByZWQtbGluayc+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e25hdlRvRm9yZ290UGFzc3dvcmR9PntUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLkxJTktTLkdPX1RPX0ZPUkdPVF9QQVNTV09SRH08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOT05Mb2dpblNjcmVlbkxpbmtzKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3JlZC1saW5rJyBvbkNsaWNrPXtuYXZUb0xvZ2lufT57VHJhbnNsYXRpb25zLkFVVEhfUEFHRS5MSU5LUy5HT19UT19MT0dJTn08L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyBpc0xvZ2luTW9kZShhdXRoTW9kZSkgPyBjcmVhdGVMb2dpblNjcmVlbkxpbmtzKCkgOiBjcmVhdGVOT05Mb2dpblNjcmVlbkxpbmtzKCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBBdXRoUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhdXRoTW9kZTogJ2xvZ2luJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkQWdhaW46ICcnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25DaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcbiAgICB9O1xuXG4gICAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBpc0Zvcm1WYWxpZCh0aGlzLnN0YXRlLCB0aGlzLnN0YXRlLmF1dGhNb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvZ2luV2l0aEVtYWlsKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVnaXN0ZXInOlxuICAgICAgICAgICAgICAgIGlmIChfLmlzRXF1YWwodGhpcy5zdGF0ZS5wYXNzd29yZCwgdGhpcy5zdGF0ZS5wYXNzd29yZEFnYWluKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZXBvcnRFcnJvcihUcmFuc2xhdGlvbnMuRVJST1JfTUVTU0FHRVMuQVVUSC5OT1RfU0FNRV9QQVNTV09SRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCh0aGlzLnN0YXRlLmVtYWlsKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQXV0aE1vZGVDaGFuZ2UoJ2xvZ2luJylcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbkF1dGhNb2RlQ2hhbmdlID0gYXV0aE1vZGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGhNb2RlIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZU5hdkZ1bmMgPSBhdXRoTW9kZSA9PiB0aGlzLm9uQXV0aE1vZGVDaGFuZ2UuYmluZCh0aGlzLCBhdXRoTW9kZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtNiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkIGF1dGgtZm9ybS1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlTG9nbygpIH1cblxuICAgICAgICAgICAgICAgIHsgaXNMb2dpbk1vZGUodGhpcy5zdGF0ZS5hdXRoTW9kZSkgfHwgaXNSZWdpc3Rlck1vZGUodGhpcy5zdGF0ZS5hdXRoTW9kZSkgPyBjcmVhdGVTb2NpYWxCdXR0b25zU2VjdGlvbih0aGlzLnByb3BzLmxvZ2luV2l0aEZhY2Vib29rLCB0aGlzLnByb3BzLmxvZ2luV2l0aEdvb2dsZSkgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5lcnJvck1zZyA/IGNyZWF0ZUVycm9yU2VjdGlvbih0aGlzLnByb3BzLmVycm9yTXNnKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn0gY2xhc3NOYW1lPSdhdXRoLWZvcm0nPlxuXG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlSW5wdXQoJ2VtYWlsJywgdGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5vbkNoYW5nZSwgJ2VtYWlsJyxUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLkZJRUxEUy5FTUFJTCkgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgaXNMb2dpbk1vZGUodGhpcy5zdGF0ZS5hdXRoTW9kZSkgfHwgaXNSZWdpc3Rlck1vZGUodGhpcy5zdGF0ZS5hdXRoTW9kZSkgPyBjcmVhdGVJbnB1dCgncGFzc3dvcmQnLCB0aGlzLnN0YXRlLnBhc3N3b3JkLCB0aGlzLm9uQ2hhbmdlLCAncGFzc3dvcmQnLFRyYW5zbGF0aW9ucy5BVVRIX1BBR0UuRklFTERTLlBBU1NXT1JEKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgaXNSZWdpc3Rlck1vZGUodGhpcy5zdGF0ZS5hdXRoTW9kZSkgPyBjcmVhdGVJbnB1dCgncGFzc3dvcmQnLCB0aGlzLnN0YXRlLnBhc3N3b3JkQWdhaW4sIHRoaXMub25DaGFuZ2UsICdwYXNzd29yZEFnYWluJywgVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5GSUVMRFMuUEFTU1dPUkRfQUdBSU4pIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVTdWJtaXRCdXR0b24odGhpcy5vblN1Ym1pdCwgIWlzRm9ybVZhbGlkKHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUuYXV0aE1vZGUpLCB0aGlzLnN0YXRlLmF1dGhNb2RlKSB9XG5cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVMaW5rc1NlY3Rpb24odGhpcy5zdGF0ZS5hdXRoTW9kZSwgY3JlYXRlTmF2RnVuYygnbG9naW4nKSwgY3JlYXRlTmF2RnVuYygncmVnaXN0ZXInKSwgY3JlYXRlTmF2RnVuYygnZm9yZ290UGFzc3dvcmQnKSkgfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkF1dGhQYWdlLnByb3BUeXBlcyA9IHtcbiAgICBsb2dpbldpdGhGYWNlYm9vazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBsb2dpbldpdGhHb29nbGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbG9naW5XaXRoRW1haWw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlcG9ydEVycm9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGVycm9yTXNnOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXV0aFBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXV0aFBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hdXRoUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXV0aFBhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2F1dGhQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmF1dGgtZm9ybS1jb250YWluZXIgLmxvZ28ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMzVweDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogMTYwcHg7IH1cXG5cXG4uYXV0aC1mb3JtLWNvbnRhaW5lciAuYXV0aC1mb3JtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5hdXRoLWZvcm0tY29udGFpbmVyIC5ociB7XFxuICBtYXJnaW46IDAuN2VtIGF1dG8gIWltcG9ydGFudDsgfVxcblxcbi5hdXRoLWZvcm0tY29udGFpbmVyIC5yZWQtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvYXV0aFBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IGJvb2tpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucycpO1xuY29uc3Qgcm91dGluZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5jb25zdCBFdmVudEl0ZW0gPSByZXF1aXJlKCcuL2V2ZW50SXRlbScpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvaG9tZVBhZ2Uuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB1aWQ6IHN0YXRlLmF1dGhEYXRhLnVpZCxcbiAgICBnYW1lczogc3RhdGUuZXZlbnRzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIG5hdmlnYXRlVG9VcGRhdGVCb29raW5nOiAodWlkLCBnYW1lSWQpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVBEQVRFX0JPT0tJTkcsIHsgdWlkLCBnYW1lSWQgfSkpLFxuICAgIGNhbmNlbEJvb2tpbmc6ICh1aWQsIGdhbWVJZCkgPT4gZGlzcGF0Y2goYm9va2luZ0FjdGlvbnMuYm9va2luZ3NDYW5jZWxlZCh1aWQsIGdhbWVJZCkpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZUV2ZW50RGF0ZShnYW1lKSB7XG4gIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGdhbWUueWVhciwgZ2FtZS5tb250aCwgZ2FtZS5kYXkpO1xuICBldmVudERhdGUuc2V0TW9udGgoZXZlbnREYXRlLmdldE1vbnRoKCkgLSAxKTtcbiAgcmV0dXJuIGV2ZW50RGF0ZTtcbn1cblxuZnVuY3Rpb24gaXNGdXR1cmVFdmVudChnYW1lKSB7XG4gIGNvbnN0IGV2ZW50RGF0ZSA9IHBhcnNlRXZlbnREYXRlKGdhbWUpO1xuICByZXR1cm4gZXZlbnREYXRlID4gRGF0ZS5ub3coKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xvc2VkR2FtZXNBcnIoZ2FtZXMpIHtcbiAgcmV0dXJuIF8uY2hhaW4oZ2FtZXMpXG4gICAgLm9taXRCeShnYW1lID0+IHtcbiAgICAgIHJldHVybiBnYW1lLnN0YXR1cyAhPT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRCB8fCAhaXNGdXR1cmVFdmVudChnYW1lKTtcbiAgICB9KVxuICAgIC5tYXAoKGdhbWUsIGdhbWVJZCkgPT4gKHtcbiAgICAgIGdhbWUsXG4gICAgICBnYW1lSWRcbiAgICB9KSlcbiAgICAuc29ydEJ5KGdhbWVEYXRhID0+IHBhcnNlRXZlbnREYXRlKGdhbWVEYXRhLmdhbWUpKVxuICAgIC52YWx1ZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRPcGVuR2FtZXMoZ2FtZXMpIHtcbiAgcmV0dXJuIF8ub21pdEJ5KGdhbWVzLCBnYW1lID0+IGdhbWUuc3RhdHVzID09PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9iaWxlTm9HYW1lc01lc3NhZ2VTZWN0aW9uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdzaG93LWZvci1zbWFsbC1vbmx5IG5vLWJvb2tpbmdzIG1vcmUtc3BhY2UnPlxuICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5IT01FX1BBR0UuTk9fT1BFTl9HQU1FU308L3NwYW4+XG4gICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWJ1cycgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVzTGlzdHMob3BlbkdhbWVzLCBjbG9zZWRHYW1lc0Fyciwgb25Cb29raW5nLCBvbkNhbmNlbEJvb2tpbmcpIHtcblxuICBmdW5jdGlvbiBiaW5kT25HYW1lSXRlbUNsaWNrKGZuLCBnYW1lSWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZuKGdhbWVJZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT3BlbkdhbWVzTGlzdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRzLWxpc3Qgb3Blbi1ldmVudHMnPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2hpZGUtZm9yLXNtYWxsLW9ubHknPntUcmFuc2xhdGlvbnMuSE9NRV9QQUdFLk9QRU5fR0FNRVN9PC9oNj5cbiAgICAgICAgICAgIHsgXy5tYXAob3BlbkdhbWVzLCAoZ2FtZSwgZ2FtZUlkKSA9PiA8RXZlbnRJdGVtIGtleT17J29wZW4tZ2FtZS0nICsgZ2FtZUlkfSBldmVudElkPXtnYW1lSWR9IG9uQm9va2luZz17YmluZE9uR2FtZUl0ZW1DbGljayhvbkJvb2tpbmcsIGdhbWVJZCl9IG9uQ2FuY2VsQm9va2luZz17YmluZE9uR2FtZUl0ZW1DbGljayhvbkNhbmNlbEJvb2tpbmcsIGdhbWVJZCl9IC8+KSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDbG9zZWRHYW1lc0xpc3QoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2ZW50cy1saXN0IGNsb3NlZC1ldmVudHMgaGlkZS1mb3Itc21hbGwtb25seSc+XG4gICAgICAgICAgPGg2PntUcmFuc2xhdGlvbnMuSE9NRV9QQUdFLkNMT1NFRF9HQU1FU308L2g2PlxuICAgICAgICAgICAgeyBfLm1hcChjbG9zZWRHYW1lc0FyciwgZ2FtZURhdGEgPT4gPEV2ZW50SXRlbSBrZXk9eydjbG9zZWQtZ2FtZS0nICsgZ2FtZURhdGEuZ2FtZUlkfSBldmVudElkPXtnYW1lRGF0YS5nYW1lSWR9IC8+KSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgeyBfLmlzRW1wdHkob3BlbkdhbWVzKSA/IG51bGwgOiBjcmVhdGVPcGVuR2FtZXNMaXN0KCkgfVxuICAgICAgICB7IGNyZWF0ZUNsb3NlZEdhbWVzTGlzdCgpIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIG9uQm9va2luZyA9IGdhbWVJZCA9PiB7XG4gICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvVXBkYXRlQm9va2luZyh0aGlzLnByb3BzLnVpZCwgZ2FtZUlkKTtcbiAgfTtcblxuICBvbkNhbmNlbEJvb2tpbmcgPSBnYW1lSWQgPT4ge1xuICAgIHRoaXMucHJvcHMuY2FuY2VsQm9va2luZyh0aGlzLnByb3BzLnVpZCwgZ2FtZUlkKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgb3BlbkdhbWVzID0gZ2V0T3BlbkdhbWVzKHRoaXMucHJvcHMuZ2FtZXMpO1xuICAgIGNvbnN0IGNsb3NlZEdhbWVzQXJyID0gZ2V0Q2xvc2VkR2FtZXNBcnIodGhpcy5wcm9wcy5nYW1lcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaXRlJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUtcGFnZSBzbWFsbC1jZW50ZXJlZCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2ZW50cy1jb250YWluZXInIGtleT0nZXZlbnRzLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRzJyBrZXk9J2V2ZW50cyc+XG4gICAgICAgICAgICAgIHsgXy5pc0VtcHR5KG9wZW5HYW1lcykgPyBjcmVhdGVNb2JpbGVOb0dhbWVzTWVzc2FnZVNlY3Rpb24oKSA6IG51bGwgfVxuICAgICAgICAgICAgICB7IGNyZWF0ZUdhbWVzTGlzdHMob3BlbkdhbWVzLCBjbG9zZWRHYW1lc0FyciwgdGhpcy5vbkJvb2tpbmcsIHRoaXMub25DYW5jZWxCb29raW5nKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhvbWVQYWdlLnByb3BUeXBlcyA9IHtcbiAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGdhbWVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG5hdmlnYXRlVG9VcGRhdGVCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjYW5jZWxCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZVBhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UuanN4IiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9ldmVudEl0ZW0uc2NzcycpO1xuXG5mdW5jdGlvbiBpc0Jvb2tpbmdFbmFibGVkKGV2ZW50LCB1c2VyKSB7XG4gICAgc3dpdGNoIChldmVudC5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfQUxMOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX01FTUJFUlM6IHtcbiAgICAgICAgICAgIHJldHVybiB1c2VyLnNlYXNvblRpY2tldHMgPiAwXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnN0IGF1dGhEYXRhID0gc3RhdGUuYXV0aERhdGE7XG4gICAgY29uc3QgdXNlcnMgPSBzdGF0ZS51c2VycztcbiAgICBjb25zdCBldmVudCA9IHN0YXRlLmV2ZW50c1tvd25Qcm9wcy5ldmVudElkXTtcbiAgICBjb25zdCBib29raW5ncyA9IHN0YXRlLmJvb2tpbmdzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaG9tZVRlYW06IENvbnN0YW50cy5URUFNUy5IQVBPRUxfSkVSVVNBTEVNLFxuICAgICAgICBhd2F5VGVhbTogQ29uc3RhbnRzLlRFQU1TW2V2ZW50LnR5cGVJZF0sXG4gICAgICAgIHN0YXR1czogZXZlbnQuc3RhdHVzLFxuICAgICAgICBkYXRlOiBldmVudC5kYXkgKyAnLycgKyBldmVudC5tb250aCArICcvJyArIGV2ZW50LnllYXIsXG4gICAgICAgIHRpbWU6IGV2ZW50LmhvdXIgKyAnOicgKyBldmVudC5taW51dGUsXG4gICAgICAgIGlzQm9va2luZ0FsbG93ZWQ6IGlzQm9va2luZ0VuYWJsZWQoZXZlbnQsIHVzZXJzW2F1dGhEYXRhLnVpZF0pLFxuICAgICAgICBpc0Jvb2tlZDogXy5oYXNJbihib29raW5ncywgW2F1dGhEYXRhLnVpZCwgb3duUHJvcHMuZXZlbnRJZF0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZWFtTG9nb3MoaG9tZSwgYXdheSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwcy1pbWFnZXMgbWVkaXVtLTQgc21hbGwtMTIgdGV4dC1jZW50ZXIgbWVkaXVtLXRleHQtcmlnaHQgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBzbWFsbCBoaWRlLWZvci1zbWFsbC1vbmx5XCIgc3JjPXtob21lLmxvZ299Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IGhpZGUtZm9yLXNtYWxsLW9ubHlcIj57aG9tZS5sYWJlbH08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRlLWZvci1zbWFsbC1vbmx5IHNlcGFyYXRvclwiPiAtIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXZlbnQtaW1hZ2Ugc21hbGwgaGlkZS1mb3Itc21hbGwtb25seVwiIHNyYz17YXdheS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JvdXAtdGV4dCBoaWRlLWZvci1zbWFsbC1vbmx5XCI+e2F3YXkubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzLW5hbWVzIHNob3ctZm9yLXNtYWxsLW9ubHkgdGV4dC1jZW50ZXIgcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHNtYWxsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBiaWdcIiBzcmM9e2hvbWUubG9nb30vPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IHNtYWxsXCI+e2hvbWUubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBzbWFsbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXZlbnQtaW1hZ2UgYmlnXCIgc3JjPXthd2F5LmxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JvdXAtdGV4dCBzbWFsbFwiPnthd2F5LmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudFRpbWVBbmREYXRlKGRhdGUsIHRpbWUsIGlzT3BlbkZvckJvb2tpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBoaWRlLWZvci1zbWFsbC1vbmx5XCI+XG4gICAgICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nID8gPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtdGltZVwiPnt0aW1lfTwvc3Bhbj4gOiBudWxsIH1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1kYXRlXCI+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaW5mbyBjb2x1bW4gbWVkaXVtLTIgc21hbGwtMTIgc2hvdy1mb3Itc21hbGwtb25seSBjb2xvcmVkXCI+XG4gICAgICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nID8gPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtdGltZVwiPnt0aW1lfTwvc3Bhbj4gOiBudWxsIH1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1kYXRlXCI+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZ1bGx5Qm9va2VkTGFiZWwoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaW5mbyBjb2x1bW4gbWVkaXVtLTIgc21hbGwtMTIgaGlkZS1mb3Itc21hbGwtb25seVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXN0YXR1c1wiPntUcmFuc2xhdGlvbnMuR0FNRS5TVEFUVVNbQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkZVTExZX0JPT0tFRF19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaW5mbyBjb2x1bW4gbWVkaXVtLTIgc21hbGwtMTIgc2hvdy1mb3Itc21hbGwtb25seSBjb2xvcmVkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3RhdHVzXCI+e1RyYW5zbGF0aW9ucy5HQU1FLlNUQVRVU1tDb25zdGFudHMuR0FNRS5TVEFUVVMuRlVMTFlfQk9PS0VEXX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9va2luZ0J1dHRvbihpc0Jvb2tpbmdBbGxvd2VkLCBpc0Jvb2tlZCwgb25Cb29raW5nKSB7XG4gICAgY29uc3QgYm9va0J1dHRvbiA9IChcbiAgICAgICAgPHNwYW4ga2V5PVwiYm9vay1idG5cIj5cbiAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuR0FNRV9JVEVNLkJPT0t9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYnVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcblxuICAgIGNvbnN0IGVkaXRCb29raW5nQnV0dG9uID0gKFxuICAgICAgICA8c3BhbiBrZXk9XCJlZGl0LWJ0blwiPlxuICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FX0lURU0uRURJVF9CT09LSU5HfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJ1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gc3VjY2VzcyBzbWFsbFwiIGtleT1cInJlZ2lzdGVyLWJ0blwiIG9uQ2xpY2s9e2lzQm9va2luZ0FsbG93ZWQgPyBvbkJvb2tpbmcgOiBfLm5vb3B9IGRpc2FibGVkPXshaXNCb29raW5nQWxsb3dlZH0+XG4gICAgICAgICAgICB7IGlzQm9va2VkID8gZWRpdEJvb2tpbmdCdXR0b24gOiBib29rQnV0dG9uIH1cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvb2tpbmdDYW5jZWxsYXRpb25CdXR0b24ob25DYW5jZWxCb29raW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIHNtYWxsIGFsZXJ0XCIga2V5PVwicmVtb3ZlLWJ0blwiIG9uQ2xpY2s9e29uQ2FuY2VsQm9va2luZ30+XG4gICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVfSVRFTS5DQU5DRUxfQk9PS0lOR308L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbnNCdXR0b25zKGlzT3BlbkZvckJvb2tpbmcsIGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcsIG9uQ2FuY2VsQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbnMgbWVkaXVtLTQgc21hbGwtMTIgdGV4dC1jZW50ZXIgbWVkaXVtLXRleHQtbGVmdCBjb2x1bW5cIj5cbiAgICAgICAgICAgIHsgaXNPcGVuRm9yQm9va2luZyA/IGNyZWF0ZUJvb2tpbmdCdXR0b24oaXNCb29raW5nQWxsb3dlZCwgaXNCb29rZWQsIG9uQm9va2luZykgOiBudWxsIH1cbiAgICAgICAgICAgIHsgaXNPcGVuRm9yQm9va2luZyAmJiBpc0Jvb2tlZCA/IGNyZWF0ZUJvb2tpbmdDYW5jZWxsYXRpb25CdXR0b24ob25DYW5jZWxCb29raW5nKSA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBFdmVudEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaXNPcGVuRm9yQm9va2luZyA9IHRoaXMucHJvcHMuc3RhdHVzICE9PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEO1xuICAgICAgICBjb25zdCBpc0Z1bGx5Qm9va2VkID0gdGhpcy5wcm9wcy5zdGF0dXMgPT09IENvbnN0YW50cy5HQU1FLlNUQVRVUy5GVUxMWV9CT09LRUQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWl0ZW0gcm93IGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVUZWFtTG9nb3ModGhpcy5wcm9wcy5ob21lVGVhbSwgdGhpcy5wcm9wcy5hd2F5VGVhbSkgfVxuICAgICAgICAgICAgICAgIHsgY3JlYXRlRXZlbnRUaW1lQW5kRGF0ZSh0aGlzLnByb3BzLmRhdGUsIHRoaXMucHJvcHMudGltZSwgaXNPcGVuRm9yQm9va2luZyApfVxuICAgICAgICAgICAgICAgIHsgaXNGdWxseUJvb2tlZCA/IGNyZWF0ZUZ1bGx5Qm9va2VkTGFiZWwoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQWN0aW9uc0J1dHRvbnMoaXNPcGVuRm9yQm9va2luZywgdGhpcy5wcm9wcy5pc0Jvb2tpbmdBbGxvd2VkLCB0aGlzLnByb3BzLmlzQm9va2VkLCB0aGlzLnByb3BzLm9uQm9va2luZywgdGhpcy5wcm9wcy5vbkNhbmNlbEJvb2tpbmcpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRXZlbnRJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBob21lVGVhbTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxvZ286IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGF3YXlUZWFtOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbG9nbzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgZGF0ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0YXR1czogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0Jvb2tpbmdBbGxvd2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpc0Jvb2tlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgb25Cb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNhbmNlbEJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEV2ZW50SXRlbSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRJdGVtLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRJdGVtLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRJdGVtLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEl0ZW0uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2V2ZW50SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudC1pdGVtIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07IH1cXG4gIC5ldmVudC1pdGVtOmZpcnN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy10b3A6IDA7IH1cXG4gIC5ldmVudC1pdGVtIC5ncm91cHMtaW1hZ2VzIC5zZXBhcmF0b3Ige1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmV2ZW50LWltYWdlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmOyB9XFxuICAgIC5ldmVudC1pdGVtIC5ldmVudC1pbWFnZS5iaWcge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgaGVpZ2h0OiA5MHB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5ldmVudC1pbWFnZS5zbWFsbCB7XFxuICAgICAgbWFyZ2luOiAwIDVweDtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7IH1cXG4gIC5ldmVudC1pdGVtIC5ncm91cHMtbmFtZXMge1xcbiAgICBwYWRkaW5nOiAwIDRlbTsgfVxcbiAgLmV2ZW50LWl0ZW0gLmV2ZW50LWluZm8ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWluZm8uY29sb3JlZCB7XFxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvIC5ldmVudC1zdGF0dXMge1xcbiAgICAgIGNvbG9yOiAjRDMyRjJGOyB9XFxuICAgIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvIHNwYW4ge1xcbiAgICAgIG1hcmdpbjogMCAxNXB4OyB9XFxuICAuZXZlbnQtaXRlbSAuYWN0aW9uLWJ1dHRvbnMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDVweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuYWN0aW9uLWJ1dHRvbnMgLmJ1dHRvbi5zbWFsbCB7XFxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICAgIG1hcmdpbjogMCA1cHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIC5idXR0b24gaSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2V2ZW50SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZVBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9ob21lUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ob21lLXBhZ2UgLmV2ZW50cyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSAuZXZlbnRzIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7IH0gfVxcblxcbi5ob21lLXBhZ2UgLm9wZW4tZXZlbnRzIHtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cXG5cXG4uaG9tZS1wYWdlIC5ldmVudHMtbGlzdCBoNiB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5ob21lLXBhZ2UgLm5vLWJvb2tpbmdzIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzQyNDI0MjsgfVxcbiAgLmhvbWUtcGFnZSAubm8tYm9va2luZ3MgaSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbi5ob21lLXBhZ2UgLmV2ZW50LWl0ZW0ge1xcbiAgcGFkZGluZzogNXB4IDA7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xcbiAgICAuaG9tZS1wYWdlIC5ldmVudC1pdGVtIHtcXG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMzBweCAwOyB9IH1cXG4gIC5ob21lLXBhZ2UgLmV2ZW50LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTsgfVxcbiAgLmhvbWUtcGFnZSAuZXZlbnQtaXRlbTpudGgtY2hpbGQob2RkKSB7XFxuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2hvbWVQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3Qgcm91dGluZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5cbmNvbnN0IExpc3RJdGVtID0gcmVxdWlyZSgnLi9saXN0SXRlbScpO1xuY29uc3QgUGFnZVRpdGxlID0gcmVxdWlyZSgnLi9wYWdlVGl0bGUnKTtcblxuY29uc3QgRklMVEVSUyA9IHtcbiAgICBBTEw6ICdBTEwnLFxuICAgIE1FTUJFUlM6ICdNRU1CRVJTJyxcbiAgICBSRVFVRVNUUzogJ1JFUVVFU1RTJyxcbiAgICBOT05fTUVNQkVSUzogJ05PTl9NRU1CRVJTJ1xufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIGZpbHRlcjogc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcy5maWx0ZXIgfHwgRklMVEVSUy5BTEwsXG4gICAgICAgICAgICBzZWFyY2g6IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXMuc2VhcmNoIHx8ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJzOiBzdGF0ZS51c2Vyc1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hdlRvRWRpdFVzZXI6IHVpZCA9PiAgZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUk9VVElORy5QQUdFUy5FRElUX1VTRVJfSU5GTywgeyB1aWQgfSkpLFxuICAgICAgICBjaGFuZ2VGaWx0ZXI6IGZpbHRlciA9PiAgZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMucmVwbGFjZShudWxsLCB7IGZpbHRlciB9KSksXG4gICAgICAgIGNoYW5nZVNlYXJjaFF1ZXJ5OiBfLmRlYm91bmNlKHNlYXJjaCA9PiAgZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMucmVwbGFjZShudWxsLCB7IHNlYXJjaCB9KSksIDUwMClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb3VudE1lbWJlcnModXNlcnMpIHtcbiAgICByZXR1cm4gXy5jaGFpbih1c2VycylcbiAgICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnMuTUVNQkVSUylcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgnc2Vhc29uVGlja2V0cycpXG4gICAgICAgIC52YWx1ZSgpO1xufVxuXG5mdW5jdGlvbiBjb3VudFJlcXVlc3RzKHVzZXJzKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odXNlcnMpXG4gICAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zLlJFUVVFU1RTKVxuICAgICAgICAuc2l6ZSgpXG4gICAgICAgIC52YWx1ZSgpO1xufVxuXG5mdW5jdGlvbiBjb3VudE5vbk1lbWJlcnModXNlcnMpIHtcbiAgICByZXR1cm4gXy5jaGFpbih1c2VycylcbiAgICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnMuTk9OX01FTUJFUlMpXG4gICAgICAgIC5zaXplKClcbiAgICAgICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGNvdW50QWNjb3JkaW5nVG9GaWx0ZXJzKHVzZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgW0ZJTFRFUlMuQUxMXTogXy5zaXplKHVzZXJzKSxcbiAgICAgICAgW0ZJTFRFUlMuTUVNQkVSU106IGNvdW50TWVtYmVycyh1c2VycyksXG4gICAgICAgIFtGSUxURVJTLlJFUVVFU1RTXTogY291bnRSZXF1ZXN0cyh1c2VycyksXG4gICAgICAgIFtGSUxURVJTLk5PTl9NRU1CRVJTXTogY291bnROb25NZW1iZXJzKHVzZXJzKSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyVGl0bGUodXNlcikge1xuICAgIHJldHVybiB1c2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXIubGFzdE5hbWU7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJTdWJ0aXRsZXModXNlcikge1xuICAgIHJldHVybiBbdXNlci5waG9uZVByZWZpeCArICctJyArIHVzZXIucGhvbmVOdW1iZXIsIHVzZXIuZW1haWwsICfXm9ee15XXqiDXnteg15XXmdeZ1506ICcgKyAodXNlci5zZWFzb25UaWNrZXRzIHx8IDApXTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlckltYWdlKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5waG90b1VSTCB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTYzLzE2MzgwNC5zdmcnO1xufVxuXG5jb25zdCBwaWNrVXNlcnNGdW5jdGlvbnMgPSB7XG4gICAgQUxMOiAoKSA9PiB0cnVlLFxuICAgIE1FTUJFUlM6IHVzZXIgPT4gdXNlci5zZWFzb25UaWNrZXRzID4gMCxcbiAgICBOT05fTUVNQkVSUzogdXNlciA9PiAhdXNlci5zZWFzb25UaWNrZXRzLFxuICAgIFJFUVVFU1RTOiB1c2VyID0+IHVzZXIucmVxdWVzdEZvck1lbWJlcnNoaXAsXG59O1xuXG5mdW5jdGlvbiBnZXRWaXNpYmxlVXNlcnModXNlcnMsIGZpbHRlciwgc2VhcmNoUXVlcnkpIHtcbiAgICByZXR1cm4gXy5jaGFpbih1c2VycylcbiAgICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnNbZmlsdGVyXSlcbiAgICAgICAgLnBpY2tCeSh1c2VyID0+IF8uc3RhcnRzV2l0aCh1c2VyLmZpcnN0TmFtZSwgc2VhcmNoUXVlcnkpIHx8IF8uc3RhcnRzV2l0aCh1c2VyLmxhc3ROYW1lLCBzZWFyY2hRdWVyeSksIHRoaXMpXG4gICAgICAgIC5tYXAoKHVzZXIsIHVpZCkgPT4gKHt1c2VyLCB1aWR9KSlcbiAgICAgICAgLnNvcnRCeSgndXNlci5maXJzdE5hbWUnKVxuICAgICAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmlsdGVyKHNlYXJjaFF1ZXJ5LCBmaWx0ZXIsIGhhbmRsZUZpbHRlckNoYW5nZSwgaGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2UsIGZpbHRlckNvdW50cykge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRmlsdGVyVGFicygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtOCc+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbWVudSBzbWFsbC10ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogZmlsdGVyID09PSBGSUxURVJTLkFMTH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUZpbHRlckNoYW5nZS5iaW5kKHRoaXMsIEZJTFRFUlMuQUxMKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLkZJTFRFUi5UQUJTLkFMTH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHsgZmlsdGVyQ291bnRzW0ZJTFRFUlMuQUxMXSB9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogZmlsdGVyID09PSBGSUxURVJTLk1FTUJFUlN9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzLCBGSUxURVJTLk1FTUJFUlMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLlVTRVJTX1BBR0UuRklMVEVSLlRBQlMuTUVNQkVSU308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHsgZmlsdGVyQ291bnRzW0ZJTFRFUlMuTUVNQkVSU10gfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gRklMVEVSUy5SRVFVRVNUU30pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUZpbHRlckNoYW5nZS5iaW5kKHRoaXMsIEZJTFRFUlMuUkVRVUVTVFMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLlVTRVJTX1BBR0UuRklMVEVSLlRBQlMuUkVRVUVTVFN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7IGZpbHRlckNvdW50c1tGSUxURVJTLlJFUVVFU1RTXSB9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogZmlsdGVyID09PSBGSUxURVJTLk5PTl9NRU1CRVJTfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcywgRklMVEVSUy5OT05fTUVNQkVSUyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuVVNFUlNfUEFHRS5GSUxURVIuVEFCUy5OT05fTUVNQkVSU308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHsgZmlsdGVyQ291bnRzW0ZJTFRFUlMuTk9OX01FTUJFUlNdIH0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUZXh0SW5wdXQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTEyIGxhcmdlLTQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlYXJjaC1pbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtUcmFuc2xhdGlvbnMuVVNFUlNfUEFHRS5GSUxURVIuU0VBUkNIfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaFF1ZXJ5Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NlYXJjaC1pY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtc2VhcmNoJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcmluZyByb3cgZXhwYW5kZWQgY29sbGFwc2VcIj5cbiAgICAgICAgICAgIHsgY3JlYXRlRmlsdGVyVGFicygpIH1cbiAgICAgICAgICAgIHsgY3JlYXRlVGV4dElucHV0KCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2Vyc0xpc3QodXNlcnNBcnIsIG9uVXNlckNsaWNrKSB7XG5cbiAgICBjb25zdCBvbkl0ZW1DbGljayA9IHVpZCA9PiB7XG4gICAgICAgIG9uVXNlckNsaWNrKHVpZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGl0ZW1zID0gXy5tYXAodXNlcnNBcnIsIHVzZXJEZWYgPT4ge1xuICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAga2V5PXsndXNlcicgKyB1c2VyRGVmLnVpZH1cbiAgICAgICAgICAgICAgIHRpdGxlPXtnZXRVc2VyVGl0bGUodXNlckRlZi51c2VyKX1cbiAgICAgICAgICAgICAgIHN1YnRpdGxlcz17Z2V0VXNlclN1YnRpdGxlcyh1c2VyRGVmLnVzZXIpfVxuICAgICAgICAgICAgICAgb25DbGljaz17b25JdGVtQ2xpY2suYmluZCh0aGlzLCB1c2VyRGVmLnVpZCl9XG4gICAgICAgICAgICAgICBpbWFnZVNyYz17Z2V0VXNlckltYWdlKHVzZXJEZWYudXNlcil9XG4gICAgICAgICAgIC8+XG4gICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IGl0ZW1zIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9Vc2Vyc01lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZmlsdGVyLXN0YXR1cyc+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWZyb3duLW8nIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLk5PX1VTRVJTX0ZPVU5EfTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICApO1xufVxuXG5jbGFzcyBVc2Vyc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnByb3BzLnF1ZXJ5LnNlYXJjaFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMucXVlcnkuc2VhcmNoICE9PSB0aGlzLnN0YXRlLnNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaDogbmV4dFByb3BzLnF1ZXJ5LnNlYXJjaCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVNlYXJjaFF1ZXJ5Q2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoIH0sICgpID0+IHRoaXMucHJvcHMuY2hhbmdlU2VhcmNoUXVlcnkoc2VhcmNoKSk7XG4gICAgfTtcblxuICAgIGhhbmRsZUZpbHRlckNoYW5nZSA9IGZpbHRlciA9PiB7XG4gICAgICB0aGlzLnByb3BzLmNoYW5nZUZpbHRlcihmaWx0ZXIpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHZpc2libGVVc2Vyc0FyciA9IGdldFZpc2libGVVc2Vycyh0aGlzLnByb3BzLnVzZXJzLCB0aGlzLnByb3BzLnF1ZXJ5LmZpbHRlciwgdGhpcy5zdGF0ZS5zZWFyY2gpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtY2VudGVyZWQgZGFzaGJvYXJkLXBhZ2UnPlxuXG4gICAgICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17VHJhbnNsYXRpb25zLlVTRVJTX1BBR0UuVElUTEV9IC8+XG5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUZpbHRlcih0aGlzLnN0YXRlLnNlYXJjaCwgdGhpcy5wcm9wcy5xdWVyeS5maWx0ZXIsIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlLCB0aGlzLmhhbmRsZVNlYXJjaFF1ZXJ5Q2hhbmdlLCBjb3VudEFjY29yZGluZ1RvRmlsdGVycyh0aGlzLnByb3BzLnVzZXJzKSkgfVxuXG4gICAgICAgICAgICAgICAgeyBfLmlzRW1wdHkodmlzaWJsZVVzZXJzQXJyKSA/IGNyZWF0ZU5vVXNlcnNNZXNzYWdlKCkgOiBjcmVhdGVVc2Vyc0xpc3QodmlzaWJsZVVzZXJzQXJyLCB0aGlzLnByb3BzLm5hdlRvRWRpdFVzZXIpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVXNlcnNQYWdlLnByb3BUeXBlcyA9IHtcbiAgICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBxdWVyeTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIG5hdlRvRWRpdFVzZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2hhbmdlRmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoYW5nZVNlYXJjaFF1ZXJ5OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlcnNQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UuanN4IiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvbGlzdEl0ZW0uc2NzcycpO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0gc21hbGwtMTJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17dGhpcy5wcm9wcy5pbWFnZVNyY30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10aXRsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlIGxhcmdlLXRleHQgaGlkZS1mb3ItcHJpbnRcIj57dGhpcy5wcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIHNtYWxsLTEyIHNob3ctZm9yLXNtYWxsLW9ubHlcIj57c3VidGl0bGV9PC9sYWJlbD4pfVxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLWxhcmdlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIGlubGluZSBoaWRlLWZvci1zbWFsbC1vbmx5XCI+e3N1YnRpdGxlfTwvbGFiZWw+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN1YnRpdGxlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIGltYWdlU3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RJdGVtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xpc3RJdGVtLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9saXN0SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcbiAgLmxpc3QtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LWltYWdlIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnRpdGxlLmxhcmdlLXRleHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnN1YnRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDAuODByZW07IH1cXG4gICAgICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLCAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLnNob3ctZm9yLXByaW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9saXN0SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3Qgcm91dGluZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9wYWdlVGl0bGUuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZpZ2F0ZUJhY2s6ICgpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlQmFjaygpKVxuICB9O1xufVxuXG5jbGFzcyBQYWdlVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlLXRpdGxlJz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ndGl0bGUnPnt0aGlzLnByb3BzLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiYWNrLWJ0bicga2V5PSdiYWNrLWJ0bicgb25DbGljaz17dGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2t9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYXJyb3ctbGVmdCcgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QYWdlVGl0bGUucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmF2aWdhdGVCYWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBhZ2VUaXRsZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9wYWdlVGl0bGUuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9wYWdlVGl0bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9wYWdlVGl0bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3BhZ2VUaXRsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvcGFnZVRpdGxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhZ2UtdGl0bGUge1xcbiAgYmFja2dyb3VuZDogI0VGNTM1MDtcXG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjRDMyRjJGO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBoZWlnaHQ6IDMuM2VtO1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAucGFnZS10aXRsZSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgZmxleDogMTsgfVxcbiAgLnBhZ2UtdGl0bGUgLmJhY2stYnRuIHtcXG4gICAgd2lkdGg6IDIwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3BhZ2VUaXRsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuXG5jb25zdCBQYWdlVGl0bGUgPSByZXF1aXJlKCcuL3BhZ2VUaXRsZScpO1xuY29uc3QgTGlzdEl0ZW0gPSByZXF1aXJlKCcuL2xpc3RJdGVtJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9nYW1lc1BhZ2Uuc2NzcycpO1xuXG5jb25zdCBUQUJTID0ge1xuICAgIEFMTDogJ2FsbCcsXG4gICAgT1BFTjogJ29wZW4nLFxuICAgIENMT1NFRDogJ2Nsb3NlZCdcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdhbWVzOiBzdGF0ZS5ldmVudHMsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBmaWx0ZXI6IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXMuZmlsdGVyIHx8IFRBQlMuQUxMXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlZGl0R2FtZTogZ2FtZUlkID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVBEQVRFX0dBTUUsIHsgZ2FtZUlkIH0pKSxcbiAgICAgICAgY3JlYXRlR2FtZTogKCkgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUk9VVElORy5QQUdFUy5VUERBVEVfR0FNRSkpLFxuICAgICAgICBjaGFuZ2VGaWx0ZXI6IGZpbHRlciA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5yZXBsYWNlKG51bGwsIHsgZmlsdGVyIH0pKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFZpc2libGVHYW1lcyhnYW1lcywgZmlsdGVyKSB7XG4gICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSBUQUJTLk9QRU46XG4gICAgICAgICAgICByZXR1cm4gZ2V0T3BlbkdhbWVzKGdhbWVzKTtcbiAgICAgICAgY2FzZSBUQUJTLkNMT1NFRDpcbiAgICAgICAgICAgIHJldHVybiBnZXRDbG9zZWRHYW1lcyhnYW1lcyk7XG4gICAgfVxuICAgIHJldHVybiBnYW1lcztcbn1cblxuZnVuY3Rpb24gZ2V0T3BlbkdhbWVzKGdhbWVzKSB7XG4gICAgcmV0dXJuIF8ub21pdEJ5KGdhbWVzLCBnYW1lID0+IGdhbWUuc3RhdHVzID09PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xvc2VkR2FtZXMoZ2FtZXMpIHtcbiAgICByZXR1cm4gXy5waWNrQnkoZ2FtZXMsIGdhbWUgPT4gZ2FtZS5zdGF0dXMgPT09IENvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRUQpO1xufVxuXG5mdW5jdGlvbiBnZXRHYW1lU3VidGl0bGVzKGdhbWUpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAn16rXkNeo15nXmjogJyArIGAke2dhbWUuZGF5fS8ke2dhbWUubW9udGh9LyR7Z2FtZS55ZWFyfWAsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1jb25jYXRcbiAgICAgICAgJ9ep16LXlDogJyArICBgJHtnYW1lLmhvdXJ9OiR7Z2FtZS5taW51dGV9YCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWNvbmNhdFxuICAgICAgICBUcmFuc2xhdGlvbnMuR0FNRS5TVEFUVVNbZ2FtZS5zdGF0dXNdXG4gICAgXTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFicyhnYW1lcywgZmlsdGVyLCBvbkZpbHRlckNoYW5nZSkge1xuICAgIGZ1bmN0aW9uIG9uVGFiQ2xpY2soc2VsZWN0ZWRGaWx0ZXIpIHtcbiAgICAgICAgb25GaWx0ZXJDaGFuZ2Uoc2VsZWN0ZWRGaWx0ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyaW5nIHJvdyBleHBhbmRlZCBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBzbWFsbC0xMiBsYXJnZS02Jz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdtZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGFjdGl2ZTogZmlsdGVyID09PSBUQUJTLkFMTH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uVGFiQ2xpY2suYmluZCh0aGlzLCBUQUJTLkFMTCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuR0FNRVNfUEFHRS5UQUJTLkFMTH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtfLnNpemUoZ2FtZXMpfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gVEFCUy5PUEVOfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25UYWJDbGljay5iaW5kKHRoaXMsIFRBQlMuT1BFTil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuR0FNRVNfUEFHRS5UQUJTLk9QRU59PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7Xy5zaXplKGdldE9wZW5HYW1lcyhnYW1lcykpfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gVEFCUy5DTE9TRUR9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvblRhYkNsaWNrLmJpbmQodGhpcywgVEFCUy5DTE9TRUQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVTX1BBR0UuVEFCUy5DTE9TRUR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7Xy5zaXplKGdldENsb3NlZEdhbWVzKGdhbWVzKSl9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vR2FtZXNNZXNzYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZpbHRlci1zdGF0dXMnPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1mcm93bi1vJyBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FU19QQUdFLk5PX0dBTUVTX0xBQkVMfTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbHVzQnV0dG9uKG9uQ3JlYXRlR2FtZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxvYXQtbGVmdCBhZGQtYnRuIGJpZyBoaWRlLWZvci1zbWFsbC1vbmx5JyBvbkNsaWNrPXtvbkNyZWF0ZUdhbWV9Pis8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbG9hdC1sZWZ0IGFkZC1idG4gc21hbGwgc2hvdy1mb3Itc21hbGwtb25seScgb25DbGljaz17b25DcmVhdGVHYW1lfT4rPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEdhbWVzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgb25GaWx0ZXJDaGFuZ2VkID0gZmlsdGVyID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoZmlsdGVyKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB2aXNpYmxlR2FtZXMgPSBnZXRWaXNpYmxlR2FtZXModGhpcy5wcm9wcy5nYW1lcywgdGhpcy5wcm9wcy5xdWVyeS5maWx0ZXIpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtY2VudGVyZWQgZGFzaGJvYXJkLXBhZ2UgZ2FtZXMtcGFnZSc+XG5cbiAgICAgICAgICAgICAgICA8UGFnZVRpdGxlIHRpdGxlPXtUcmFuc2xhdGlvbnMuR0FNRVNfUEFHRS5USVRMRX0gLz5cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlVGFicyh0aGlzLnByb3BzLmdhbWVzLCB0aGlzLnByb3BzLnF1ZXJ5LmZpbHRlciwgdGhpcy5vbkZpbHRlckNoYW5nZWQpIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXy5tYXAodmlzaWJsZUdhbWVzLCAoZ2FtZSwgZ2FtZUlkKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXsnZ2FtZS0nICsgZ2FtZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtDb25zdGFudHMuVEVBTVNbZ2FtZS50eXBlSWRdLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnRpdGxlcz17Z2V0R2FtZVN1YnRpdGxlcyhnYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYz17Q29uc3RhbnRzLlRFQU1TW2dhbWUudHlwZUlkXS5sb2dvIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMzgvMTM4Nzc2LnN2Zyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5lZGl0R2FtZS5iaW5kKHRoaXMsIGdhbWVJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHsgdmlzaWJsZUdhbWVzLmxlbmd0aCA9PSAwID8gY3JlYXRlTm9HYW1lc01lc3NhZ2UoKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgeyBjcmVhdGVQbHVzQnV0dG9uKHRoaXMucHJvcHMuY3JlYXRlR2FtZSkgfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkdhbWVzUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgZ2FtZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBjcmVhdGVHYW1lOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGVkaXRHYW1lOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoYW5nZUZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdhbWVzUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZ2FtZXNQYWdlLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZXNQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZXNQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9nYW1lc1BhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2dhbWVzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lcy1wYWdlIC5maWx0ZXJpbmcge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvZ2FtZXNQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3Qgcm91dGluZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5cbmNvbnN0IFBhZ2VUaXRsZSA9IHJlcXVpcmUoJy4vcGFnZVRpdGxlJyk7XG5jb25zdCBMaXN0SXRlbSA9IHJlcXVpcmUoJy4vbGlzdEl0ZW0nKTtcblxuY29uc3QgVEFCUyA9IHtcbiAgICBQSUNLVVA6ICdwaWNrVXAnLFxuICAgIERST1BPRkY6ICdkcm9wT2ZmJ1xufTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2Jvb2tpbmdzUGFnZS5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5ncyxcbiAgICAgICAgZ2FtZXM6IHN0YXRlLmV2ZW50cyxcbiAgICAgICAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgZ2FtZUlkOiBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zLmdhbWVJZCB8fCBfLmZpbmRLZXkoc3RhdGUuZXZlbnRzLCB7c3RhdHVzOiBDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfTUVNQkVSU30pIHx8IF8uZmluZEtleShzdGF0ZS5ldmVudHMsIHtzdGF0dXM6IENvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9BTEx9KSB8fCAgXy5maW5kS2V5KHN0YXRlLmV2ZW50cywge3N0YXR1czogQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRH0pLFxuICAgICAgICAgICAgZmlsdGVyOiBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zLmZpbHRlciB8fCBUQUJTLlBJQ0tVUFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRpdEJvb2tpbmc6IChnYW1lSWQsIHVpZCkgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUk9VVElORy5QQUdFUy5VUERBVEVfQk9PS0lORywgeyBnYW1lSWQsIHVpZCB9KSksXG4gICAgICAgIGNoYW5nZUZpbHRlcjogZmlsdGVyID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLnJlcGxhY2UobnVsbCwgeyBmaWx0ZXIgfSkpLFxuICAgICAgICBjaGFuZ2VHYW1lSWQ6IGdhbWVJZCA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5yZXBsYWNlKG51bGwsIHsgZ2FtZUlkIH0pKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tpbmdUaXRsZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9va2luZ1Bob25lKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5waG9uZVByZWZpeCArICctJyArIHVzZXIucGhvbmVOdW1iZXI7XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgdXNlcikge1xuICAgIGNvbnN0IHN1YnRpdGxlcyA9IFtdO1xuXG4gICAgaWYgKGJvb2tpbmcucGFpZFNlYXRzID4gMCkge1xuICAgICAgICBzdWJ0aXRsZXMucHVzaCgn157XoNeV15nXmdedOiAnICsgYm9va2luZy5wYWlkU2VhdHMpO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5leHRyYVNlYXRzID4gMCkge1xuICAgICAgICBzdWJ0aXRsZXMucHVzaCgn15fXkyDXpNei157XmTogJyArIGJvb2tpbmcuZXh0cmFTZWF0cyk7XG4gICAgfVxuICAgIGlmIChib29raW5nLnBpY2tVcCkge1xuICAgICAgICBzdWJ0aXRsZXMucHVzaCgn15TXnNeV15o6ICcgKyBUcmFuc2xhdGlvbnMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdKTtcbiAgICB9XG4gICAgaWYgKGJvb2tpbmcuZHJvcE9mZikge1xuICAgICAgICBzdWJ0aXRsZXMucHVzaCgn15fXlteV16g6ICcgKyBUcmFuc2xhdGlvbnMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSk7XG4gICAgfVxuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgICAgc3VidGl0bGVzLnB1c2goJ9eY15zXszogJyArIGdldEJvb2tpbmdQaG9uZSh1c2VyKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnRpdGxlcztcbn1cblxuZnVuY3Rpb24gZ2V0Qm9va2luZ0ltYWdlKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5waG90b1VSTCB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTg5LzE4OTk5MS5zdmcnO1xufVxuXG5mdW5jdGlvbiBnZXRQaWNrVXBNYXAoYm9va2luZ3MpIHtcbiAgICByZXR1cm4gXy5jaGFpbihib29raW5ncylcbiAgICAgICAgLm9taXRCeShib29raW5nID0+ICEoYm9va2luZy5waWNrVXApKVxuICAgICAgICAudHJhbnNmb3JtKChhY2MsIGJvb2tpbmcsIHVpZCkgPT4ge1xuICAgICAgICAgICAgYWNjW2Jvb2tpbmcucGlja1VwXVt1aWRdID0gYm9va2luZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB9LCB7IHRsdjoge30sIG1vZGlpbjoge30gfSlcbiAgICAgICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGdldERyb3BPZmZNYXAoYm9va2luZ3MpIHtcbiAgICByZXR1cm4gXy5jaGFpbihib29raW5ncylcbiAgICAgICAgLm9taXRCeShib29raW5nID0+ICEoYm9va2luZy5kcm9wT2ZmKSlcbiAgICAgICAgLnRyYW5zZm9ybSgoYWNjLCBib29raW5nLCB1aWQpID0+IHtcbiAgICAgICAgICAgIGFjY1tib29raW5nLmRyb3BPZmZdW3VpZF0gPSBib29raW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIH0sIHsgdGx2OiB7fSwgbW9kaWluOiB7fSB9KVxuICAgICAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmlzaWJsZUJvb2tpbmdzKGJvb2tpbmdzLCBnYW1lSWQpIHtcbiAgICBjb25zdCBib29raW5nRm9yRXZlbnRNYXAgPSBfLmNoYWluKGJvb2tpbmdzKVxuICAgICAgICAubWFwVmFsdWVzKHVzZXJCb29raW5ncyA9PiB1c2VyQm9va2luZ3NbZ2FtZUlkXSlcbiAgICAgICAgLm9taXRCeShfLmlzVW5kZWZpbmVkKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBpY2tVcDogZ2V0UGlja1VwTWFwKGJvb2tpbmdGb3JFdmVudE1hcCksXG4gICAgICAgIGRyb3BPZmY6IGdldERyb3BPZmZNYXAoYm9va2luZ0ZvckV2ZW50TWFwKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvdW50UGlja3Vwcyh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICBjb25zdCB0bHZQaWNrVXBzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHYpXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgdGx2UGlja1Vwc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluUGlja1Vwc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluKVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpblBpY2tVcHNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW4pXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB0bHZQaWNrVXBzUGFpZCArIHRsdlBpY2tVcHNFeHRyYSArIG1vZGlpblBpY2tVcHNQYWlkICsgbW9kaWluUGlja1Vwc0V4dHJhO1xufVxuXG5mdW5jdGlvbiBjb3VudERyb3BPZmZzKHZpc2libGVCb29raW5ncykge1xuICAgIGNvbnN0IHRsdkRyb3BPZmZzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2KVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IHRsdkRyb3BPZmZzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluRHJvcE9mZnNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW4pXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluRHJvcE9mZnNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluKVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4gdGx2RHJvcE9mZnNQYWlkICsgdGx2RHJvcE9mZnNFeHRyYSArIG1vZGlpbkRyb3BPZmZzUGFpZCArIG1vZGlpbkRyb3BPZmZzRXh0cmE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VUaXRsZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZS1mb3ItcHJpbnQnPlxuICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17VHJhbnNsYXRpb25zLkJPT0tJTkdTX1BBR0UuVElUTEV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbHRlclNlY3Rpb24oZmlsdGVyLCBnYW1lSWQsIG9uRmlsdGVyQ2hhbmdlLCBvbkdhbWVJZENoYW5nZSwgdmlzaWJsZUJvb2tpbmdzLCBnYW1lcykge1xuXG4gICAgZnVuY3Rpb24gb25UYWJDbGljayh0YWIpIHtcbiAgICAgICAgb25GaWx0ZXJDaGFuZ2UodGFiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNlbGVjdENoYW5nZShlKSB7XG4gICAgICAgIG9uR2FtZUlkQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyaW5nIHJvdyBleHBhbmRlZCBjb2xsYXBzZSBoaWRlLWZvci1wcmludCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTEyIGxhcmdlLTYnPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J21lbnUnPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHthY3RpdmU6IGZpbHRlciA9PT0gVEFCUy5QSUNLVVB9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvblRhYkNsaWNrLmJpbmQodGhpcywgVEFCUy5QSUNLVVApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkJPT0tJTkdTX1BBR0UuVEFCUy5QSUNLVVB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7Y291bnRQaWNrdXBzKHZpc2libGVCb29raW5ncyl9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7YWN0aXZlOiBmaWx0ZXIgPT09IFRBQlMuRFJPUE9GRn0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uVGFiQ2xpY2suYmluZCh0aGlzLCBUQUJTLkRST1BPRkYpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkJPT0tJTkdTX1BBR0UuVEFCUy5EUk9QT0ZGfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe2NvdW50RHJvcE9mZnModmlzaWJsZUJvb2tpbmdzKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYXJjaCc+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2dhbWVJZH0gb25DaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm1hcChnYW1lcywgKGdhbWUsIGdhbWVJZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eydnYW1lLScgKyBnYW1lSWR9IHZhbHVlPXtnYW1lSWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUuZGF5fS97Z2FtZS5tb250aH0ve2dhbWUueWVhcn0gLSB7Q29uc3RhbnRzLlRFQU1TW2dhbWUudHlwZUlkXS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nVGFibGVGb3JQcmludCh1c2VycywgdmlzaWJsZUJvb2tpbmdzLCB0bHZCb29raW5ncywgbW9kaWluQm9va2luZ3MsIGlzUGlja1VwKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlVGl0bGVSb3coKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIga2V5PSd0aXRsZS1sYWJlbCc+XG4gICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49JzYnPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXNQaWNrVXAgPyAn15TXnNeV15onIDogJ9eX15bXldeoJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiAoe2lzUGlja1VwID8gY291bnRQaWNrdXBzKHZpc2libGVCb29raW5ncykgOiBjb3VudERyb3BPZmZzKHZpc2libGVCb29raW5ncyl9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUTFZCb29raW5nc1RpdGxlKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT0ndGx2UGlja1VwJz5cbiAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjZcIiBjbGFzc05hbWU9XCJ0YWJsZS1zdWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+16rXnCDXkNeR15nXkTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUTFZCb29raW5nc1Jvd3MoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBfLm1hcCh0bHZCb29raW5ncywgKGJvb2tpbmcsIHVpZCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9eyd0bHYtYm9va2luZy1yb3ctJyArIHVpZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Qm9va2luZ1RpdGxlKHVzZXJzW3VpZF0pfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Qm9va2luZ1Bob25lKHVzZXJzW3VpZF0pfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Ym9va2luZy5wYWlkU2VhdHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntib29raW5nLmV4dHJhU2VhdHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntUcmFuc2xhdGlvbnMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57VHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl19PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2RpaW5Cb29raW5nc1RpdGxlKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT0nbW9kaWluUGlja1VwJz5cbiAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjZcIiBjbGFzc05hbWU9J3RhYmxlLXN1Yic+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtee15XXk9eZ16LXmdefPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vZGlpbkJvb2tpbmdzUm93cygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIF8ubWFwKG1vZGlpbkJvb2tpbmdzLCAoYm9va2luZywgdWlkKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17J21vZGlpbi1ib29raW5nLXJvdy0nICsgdWlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntnZXRCb29raW5nVGl0bGUodXNlcnNbdWlkXSl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntnZXRCb29raW5nUGhvbmUodXNlcnNbdWlkXSl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntib29raW5nLnBhaWRTZWF0c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2tpbmcuZXh0cmFTZWF0c308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntUcmFuc2xhdGlvbnMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZShtb2RpaW5Cb29raW5ncykgIT09IDAgfHwgXy5zaXplKHRsdkJvb2tpbmdzKSAhPT0gMCA/IGNyZWF0ZVRpdGxlUm93KCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7XqdedPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPteY15zXpNeV1588L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+157XoNeV15nXmdedPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPteR16rXqdec15XXnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7XqteX16DXqiDXotec15nXlDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7XqteX16DXqiDXmdeo15nXk9eUPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZSh0bHZCb29raW5ncykgPiAwID8gY3JlYXRlVExWQm9va2luZ3NUaXRsZSgpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2Qm9va2luZ3MpID4gMCA/IGNyZWF0ZVRMVkJvb2tpbmdzUm93cygpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUobW9kaWluQm9va2luZ3MpID4gMCA/IGNyZWF0ZU1vZGlpbkJvb2tpbmdzVGl0bGUoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKG1vZGlpbkJvb2tpbmdzKSA+IDAgPyBjcmVhdGVNb2RpaW5Cb29raW5nc1Jvd3MoKSA6IG51bGwgfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaWNrVXBzTGlzdCh2aXNpYmxlQm9va2luZ3MsIG9uQm9va2luZ0NsaWNrLCB1c2Vycykge1xuICAgIGNvbnN0IHRsdlBpY2tVcCA9IHZpc2libGVCb29raW5ncy5waWNrVXAudGx2O1xuICAgIGNvbnN0IG1vZGlpblBpY2tVcCA9IHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluO1xuXG4gICAgZnVuY3Rpb24gb25JdGVtQ2xpY2sodWlkKSB7XG4gICAgICAgIG9uQm9va2luZ0NsaWNrKHVpZCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGx2UGlja1Vwc0l0ZW1zID0gXy5tYXAodGx2UGlja1VwLCAoYm9va2luZywgdWlkKSA9PiAoXG4gICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAga2V5PXsncGlja3VwLXRsdi0nICsgdWlkfVxuICAgICAgICAgICAgdGl0bGU9e2dldEJvb2tpbmdUaXRsZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIHN1YnRpdGxlcz17Z2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCB1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIGltYWdlU3JjPXtnZXRCb29raW5nSW1hZ2UodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkl0ZW1DbGljay5iaW5kKHRoaXMsIHVpZCl9XG4gICAgICAgIC8+XG4gICAgKSk7XG5cbiAgICBjb25zdCBtaWRpaW5QaWNrVXBzSXRlbXMgPSBfLm1hcChtb2RpaW5QaWNrVXAsIChib29raW5nLCB1aWQpID0+IChcbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICBrZXk9eydwaWNrdXAtbWlkaWluLScgKyB1aWR9XG4gICAgICAgICAgICB0aXRsZT17Z2V0Qm9va2luZ1RpdGxlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgc3VidGl0bGVzPXtnZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgaW1hZ2VTcmM9e2dldEJvb2tpbmdJbWFnZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uSXRlbUNsaWNrLmJpbmQodGhpcywgdWlkKX1cbiAgICAgICAgLz5cbiAgICApKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRsdlBpY2t1cHNMaXN0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDY+16rXnCDXkNeR15nXkTwvaDY+XG4gICAgICAgICAgICAgICAgeyB0bHZQaWNrVXBzSXRlbXMgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2RpaW5QaWNrdXBzTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg2Ptee15XXk9eZ16LXmdefPC9oNj5cbiAgICAgICAgICAgICAgICB7IG1pZGlpblBpY2tVcHNJdGVtcyB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGljay11cC1jb250YWluZXIgcm93IGhpZGUtZm9yLXByaW50JyBrZXk9J3BpY2stdXAtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZSh0bHZQaWNrVXApICE9PSAwIHx8IF8uc2l6ZShtb2RpaW5QaWNrVXApICE9PSAwID8gPGg1PteU15zXldeaPC9oNT4gOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZSh0bHZQaWNrVXApID4gMCA/IGNyZWF0ZVRsdlBpY2t1cHNMaXN0KCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZShtb2RpaW5QaWNrVXApID4gMCA/IGNyZWF0ZU1vZGlpblBpY2t1cHNMaXN0KCkgOiBudWxsIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGlja1VwLXRhYmxlIHNob3ctZm9yLXByaW50JyBrZXk9J3BpY2tVcC10YWJsZSc+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVCb29raW5nVGFibGVGb3JQcmludCh1c2VycywgdmlzaWJsZUJvb2tpbmdzLCB0bHZQaWNrVXAsIG1vZGlpblBpY2tVcCwgdHJ1ZSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3BPZmZMaXN0KHZpc2libGVCb29raW5ncywgb25Cb29raW5nQ2xpY2ssIHVzZXJzKSB7XG4gICAgY29uc3QgdGx2RHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdjtcbiAgICBjb25zdCBtb2RpaW5Ecm9wT2ZmID0gdmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluO1xuXG4gICAgZnVuY3Rpb24gb25JdGVtQ2xpY2sodWlkKSB7XG4gICAgICAgIG9uQm9va2luZ0NsaWNrKHVpZCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGx2RHJvcE9mZkl0ZW1zID0gXy5tYXAodGx2RHJvcE9mZiwgKGJvb2tpbmcsIHVpZCkgPT4gKFxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17J3BpY2t1cC10bHYtJyArIHVpZH1cbiAgICAgICAgICAgIHRpdGxlPXtnZXRCb29raW5nVGl0bGUodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBzdWJ0aXRsZXM9e2dldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgdXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBpbWFnZVNyYz17Z2V0Qm9va2luZ0ltYWdlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgb25DbGljaz17b25JdGVtQ2xpY2suYmluZCh0aGlzLCB1aWQpfVxuICAgICAgICAvPlxuICAgICkpO1xuXG4gICAgY29uc3QgbWlkaWluRHJvcE9mZkl0ZW1zID0gXy5tYXAobW9kaWluRHJvcE9mZiwgKGJvb2tpbmcsIHVpZCkgPT4gKFxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17J3BpY2t1cC1taWRpaW4tJyArIHVpZH1cbiAgICAgICAgICAgIHRpdGxlPXtnZXRCb29raW5nVGl0bGUodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBzdWJ0aXRsZXM9e2dldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgdXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBpbWFnZVNyYz17Z2V0Qm9va2luZ0ltYWdlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgb25DbGljaz17b25JdGVtQ2xpY2suYmluZCh0aGlzLCB1aWQpfVxuICAgICAgICAvPlxuICAgICkpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGx2RHJvcE9mZkxpc3QoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNj7XqtecINeQ15HXmdeRPC9oNj5cbiAgICAgICAgICAgICAgICB7IHRsdkRyb3BPZmZJdGVtcyB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vZGlpbkRyb3BPZmZMaXN0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDY+157XldeT15nXoteZ1588L2g2PlxuICAgICAgICAgICAgICAgIHsgbWlkaWluRHJvcE9mZkl0ZW1zIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wLW9mZi1jb250YWluZXIgcm93IGhpZGUtZm9yLXByaW50JyBrZXk9J2Ryb3Atb2ZmLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2RHJvcE9mZikgIT09IDAgfHwgXy5zaXplKG1vZGlpbkRyb3BPZmYpICE9PSAwID8gPGg1PteX15bXldeoPC9oNT4gOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZSh0bHZEcm9wT2ZmKSA+IDAgPyBjcmVhdGVUbHZEcm9wT2ZmTGlzdCgpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUobW9kaWluRHJvcE9mZikgPiAwID8gY3JlYXRlTW9kaWluRHJvcE9mZkxpc3QoKSA6IG51bGwgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcE9mZi10YWJsZSBzaG93LWZvci1wcmludCcga2V5PSdkcm9wT2ZmLXRhYmxlJz5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUJvb2tpbmdUYWJsZUZvclByaW50KHVzZXJzLCB2aXNpYmxlQm9va2luZ3MsIHRsdkRyb3BPZmYsIG1vZGlpbkRyb3BPZmYsIGZhbHNlKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgQm9va2luZ3NQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBvbkZpbHRlckNoYW5nZSA9IGZpbHRlciA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKGZpbHRlcik7XG4gICAgfTtcblxuICAgIG9uR2FtZUlkQ2hhbmdlID0gZ2FtZUlkID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VHYW1lSWQoZ2FtZUlkKTtcbiAgICB9O1xuXG4gICAgb25Cb29raW5nQ2xpY2sgPSB1aWQgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmVkaXRCb29raW5nKHRoaXMucHJvcHMucXVlcnkuZ2FtZUlkLCB1aWQpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHZpc2libGVCb29raW5ncyA9IGdldFZpc2libGVCb29raW5ncyh0aGlzLnByb3BzLmJvb2tpbmdzLCB0aGlzLnByb3BzLnF1ZXJ5LmdhbWVJZCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0n1r9zbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSBib29raW5ncy1wYWdlJz5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZVBhZ2VUaXRsZSgpIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUZpbHRlclNlY3Rpb24odGhpcy5wcm9wcy5xdWVyeS5maWx0ZXIsIHRoaXMucHJvcHMucXVlcnkuZ2FtZUlkLCB0aGlzLm9uRmlsdGVyQ2hhbmdlLCB0aGlzLm9uR2FtZUlkQ2hhbmdlLCB2aXNpYmxlQm9va2luZ3MsIHRoaXMucHJvcHMuZ2FtZXMpIH1cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMucXVlcnkuZmlsdGVyID09PSBUQUJTLlBJQ0tVUCA/IGNyZWF0ZVBpY2tVcHNMaXN0KHZpc2libGVCb29raW5ncywgdGhpcy5vbkJvb2tpbmdDbGljaywgdGhpcy5wcm9wcy51c2VycykgOiBjcmVhdGVEcm9wT2ZmTGlzdCh2aXNpYmxlQm9va2luZ3MsIHRoaXMub25Cb29raW5nQ2xpY2ssIHRoaXMucHJvcHMudXNlcnMpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQm9va2luZ3NQYWdlLnByb3BUeXBlcyA9IHtcbiAgICBib29raW5nczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGdhbWVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBxdWVyeTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGVkaXRCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVyaWVkLFxuICAgIGNoYW5nZUZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1cmllZCxcbiAgICBjaGFuZ2VHYW1lSWQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdXJpZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb29raW5nc1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2tpbmdzUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2tpbmdzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9va2luZ3NQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9ib29raW5nc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm9va2luZ3MtcGFnZSBoNSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6ICNDRkQ4REM7XFxuICBjb2xvcjogIzM3NDc0RjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4uYm9va2luZ3MtcGFnZSBoNiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJhY2tncm91bmQ6ICNFQ0VGRjE7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLmJvb2tpbmdzLXBhZ2UgLnRhYmxlLXN1YiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjIyMjIyOyB9XFxuXFxuLmJvb2tpbmdzLXBhZ2UgdGFibGUgdGJvZHksIC5ib29raW5ncy1wYWdlIHRhYmxlIHRmb290LCAuYm9va2luZ3MtcGFnZSB0YWJsZSB0aGVhZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjIyMjIyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9ib29raW5nc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZXVkeCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IGRpc3RyaWJ1dGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2Rpc3RyaWJ1dGlvbkFjdGlvbnMnKTtcblxuY29uc3QgUGFnZVRpdGxlID0gcmVxdWlyZSgnLi9wYWdlVGl0bGUnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2Rpc3RyaWJ1dGlvblBhZ2Uuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2Vyczogc3RhdGUudXNlcnMsXG4gICAgICAgIGdhbWVzOiBzdGF0ZS5ldmVudHMsXG4gICAgICAgIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5nc1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbmRUZW1wbGF0ZUVtYWlsOiAocmVjaXBpZW50cywgdGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucykgPT4gZGlzcGF0Y2goZGlzdHJpYnV0aW9uQWN0aW9ucy5zZW5kVGVtcGxhdGVFbWFpbChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSksXG4gICAgICAgIHNlbmRDdXN0b21FbWFpbDogKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpID0+IGRpc3BhdGNoKGRpc3RyaWJ1dGlvbkFjdGlvbnMuc2VuZEN1c3RvbUVtYWlsKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpKSxcbiAgICAgICAgc2VuZFNNUzogKHJlY2lwaWVudHMsIG1lc3NhZ2UpID0+IGRpc3BhdGNoKGRpc3RyaWJ1dGlvbkFjdGlvbnMuc2VuZFNNUyhyZWNpcGllbnRzLCBtZXNzYWdlKSksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKGdhbWVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzdHJpYnV0aW9uTWV0aG9kOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLkVNQUlMLFxuICAgICAgICByZWNpcGllbnRzVHlwZTogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTX1RZUEVTLk1FTUJFUlNfT05MWSxcbiAgICAgICAgZGlzdHJpYnV0aW9uVHlwZTogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fVFlQRVMuVEVNUExBVEUsXG4gICAgICAgIHRlbXBsYXRlSWQ6IENvbnN0YW50cy5ESVNUUklCVVRJT04uVEVNUExBVEVTLkVWRU5UX09QRU5fRk9SX01FTUJFUlMsXG4gICAgICAgIGdhbWVJZDogXy5sYXN0KF8ua2V5cyhnZXRPcGVuR2FtZXMoZ2FtZXMpKSksXG4gICAgICAgIHN1YmplY3Q6ICcnLFxuICAgICAgICBjb250ZW50OiAnJ1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldE1lbWJlcnNVc2Vyc09ubHkodXNlcnMpIHtcbiAgICByZXR1cm4gXy5waWNrQnkodXNlcnMsIHVzZXIgPT4gdXNlci5zZWFzb25UaWNrZXRzICYmIHVzZXIuc2Vhc29uVGlja2V0cyA+IDApO1xufVxuXG5mdW5jdGlvbiBnZXRCb29rZWRVc2Vyc09ubHkodXNlcnMsIGJvb2tpbmdzLCBnYW1lSWQpIHtcbiAgICByZXR1cm4gXy5waWNrQnkodXNlcnMsICh1c2VyLCB1aWQpID0+IF8uaGFzKGJvb2tpbmdzW3VpZF0sIGdhbWVJZCkpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWNpcGllbnRzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGdhbWVJZCkge1xuICAgIGxldCByZWNpcGllbnRzVXNlcnMgPSBfLnBpY2tCeSh1c2VycywgdXNlciA9PiB1c2VyLnN1YnNjcmliZU1haWwpO1xuXG4gICAgc3dpdGNoIChyZWNpcGllbnRzVHlwZSkge1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UU19UWVBFUy5NRU1CRVJTX09OTFk6XG4gICAgICAgICAgICByZWNpcGllbnRzVXNlcnMgPSBnZXRNZW1iZXJzVXNlcnNPbmx5KHJlY2lwaWVudHNVc2Vycyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuQk9PS0VEX1RPX0VWRU5UOlxuICAgICAgICAgICAgcmVjaXBpZW50c1VzZXJzID0gZ2V0Qm9va2VkVXNlcnNPbmx5KHJlY2lwaWVudHNVc2VycywgYm9va2luZ3MsIGdhbWVJZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjaXBpZW50c1VzZXJzO1xufVxuXG5mdW5jdGlvbiBnZXRVc2Vyc0VtYWlscyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBnYW1lSWQpIHtcbiAgICBjb25zdCByZWNpcGllbnRzID0gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBnYW1lSWQpO1xuICAgIHJldHVybiBfLm1hcChyZWNpcGllbnRzLCB1c2VyID0+IHVzZXIuZW1haWwpO1xufVxuXG5mdW5jdGlvbiBnZXRFdmVudFN1YnN0aXR1dGlvbnMoZ2FtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgICctREVQQVJUVVJFLSc6IGAke2dhbWUuaG91cn06JHtnYW1lLm1pbnV0ZX1gLFxuICAgICAgICAnLURBVEUtJzogYCR7Z2FtZS5kYXl9LyR7Z2FtZS5tb250aH0vJHtnYW1lLnllYXJ9YCxcbiAgICAgICAgJy1OQU1FLSc6IENvbnN0YW50cy5URUFNU1tnYW1lLnR5cGVJZF0ubGFiZWxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQoY29udGVudCkge1xuICAgIHJldHVybiAnPHAgZGlyPVxcJ3J0bFxcJz4nICsgY29udGVudC5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJzxici8+JykgKyAnPC9wPic7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJzUGhvbmVOdW1iZXJzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGdhbWVJZCkge1xuICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRSZWNpcGllbnRzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGdhbWVJZCk7XG4gICAgcmV0dXJuIF8ubWFwKHJlY2lwaWVudHMsIHVzZXIgPT4gdXNlci5waG9uZVByZWZpeCArIHVzZXIucGhvbmVOdW1iZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXN0cmlidXRpb25NZXRob2RJbnB1dChkaXN0cmlidXRpb25NZXRob2QsIG9uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQgbW9yZS1zcGFjZSc+XG4gICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5ESVNUUklCVVRJT05fTUVUSE9ELlRJVExFfVxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2Rpc3RyaWJ1dGlvbk1ldGhvZH0gb25DaGFuZ2U9e29uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5FTUFJTH0+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5ESVNUUklCVVRJT05fTUVUSE9ELkVNQUlMfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLlNNU30+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5ESVNUUklCVVRJT05fTUVUSE9ELlNNU308L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlY2lwaWVudHNUeXBlSW5wdXQocmVjaXBpZW50c1R5cGUsIG9uUmVjaXBpZW50c1R5cGVDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCc+XG4gICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5SRUNJUElFTlRTX1RZUEVTLlRJVExFfVxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3JlY2lwaWVudHNUeXBlfSBvbkNoYW5nZT17b25SZWNpcGllbnRzVHlwZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UU19UWVBFUy5BTEx9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5SRUNJUElFTlRTX1RZUEVTLkFMTH1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UU19UWVBFUy5NRU1CRVJTX09OTFl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5SRUNJUElFTlRTX1RZUEVTLk1FTUJFUlNfT05MWX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UU19UWVBFUy5CT09LRURfVE9fRVZFTlR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5SRUNJUElFTlRTX1RZUEVTLkJPT0tFRF9UT19FVkVOVH1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXN0cmlidXRpb25UeXBlSW5wdXQoZGlzdHJpYnV0aW9uVHlwZSwgb25EaXN0cmlidXRpb25UeXBlQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnIGtleT1cImRpc3RyaWJ1dGlvbi1kaXN0cmlidXRpb25UeXBlLWlucHV0XCI+XG4gICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5ESVNUUklCVVRJT05fVFlQRVMuVElUTEV9XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZGlzdHJpYnV0aW9uVHlwZX0gb25DaGFuZ2U9e29uRGlzdHJpYnV0aW9uVHlwZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLlRFTVBMQVRFfT57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkRJU1RSSUJVVElPTl9UWVBFUy5URU1QTEFURX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fVFlQRVMuQ1VTVE9NfT57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkRJU1RSSUJVVElPTl9UWVBFUy5DVVNUT019PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZVNlbGVjdGlvbih0ZW1wbGF0ZUlkLCBvblRlbXBsYXRlSWRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcga2V5PSdkaXN0cmlidXRpb24tdGVtcGxhdGUtc2VsZWN0aW9uJz5cbiAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlRFTVBMQVRFUy5USVRMRX1cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0ZW1wbGF0ZUlkfSBvbkNoYW5nZT17b25UZW1wbGF0ZUlkQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMuRVZFTlRfT1BFTl9GT1JfTUVNQkVSU30+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5URU1QTEFURVMuRVZFTlRfT1BFTl9GT1JfTUVNQkVSU308L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMuRVZFTlRfT1BFTl9GT1JfQUxMfT57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlRFTVBMQVRFUy5FVkVOVF9PUEVOX0ZPUl9BTEx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uVEVNUExBVEVTLkNIQU5HRV9FVkVOVF9ERVRBSUxTfT57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlRFTVBMQVRFUy5DSEFOR0VfRVZFTlRfREVUQUlMU308L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVzU2VsZWN0aW9uKGdhbWVzLCBnYW1lSWQsIG9uR2FtZUNoYW5nZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBfLm1hcChnYW1lcywgKGdhbWUsIGdhbWVJZCkgPT4gPG9wdGlvbiBrZXk9eydnYW1lLScgKyBnYW1lSWR9IHZhbHVlPXtnYW1lSWR9PntDb25zdGFudHMuVEVBTVNbZ2FtZS50eXBlSWRdLmxhYmVsfTwvb3B0aW9uPik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcga2V5PVwiZGlzdHJpYnV0aW9uLWdhbWUtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5HQU1FUy5USVRMRX1cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtnYW1lSWR9IG9uQ2hhbmdlPXtvbkdhbWVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICB7IG9wdGlvbnMgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0T3BlbkdhbWVzKGdhbWVzKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KGdhbWVzLCBnYW1lID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWUuc3RhdHVzID09PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUyB8fCBnYW1lLnN0YXR1cyA9PT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX0FMTDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tVGl0bGUoc3ViamVjdCwgb25TdWJqZWN0Q2hhbmdlZCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC1jZW50ZXJlZCBtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zJyBrZXk9J2Rpc3RyaWJ1dGlvbi1jdXN0b21UaXRsZSc+XG4gICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5DVVNUT00uVElUTEUuVElUTEV9PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17c3ViamVjdH0gb25DaGFuZ2U9e29uU3ViamVjdENoYW5nZWR9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tQ29udGVudChjb250ZW50LCBvbkNvbnRlbnRDaGFuZ2VkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLWNlbnRlcmVkIG1lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMnIGtleT0nZGlzdHJpYnV0aW9uLWN1c3RvbUNvbnRlbnQnPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuQ1VTVE9NLkNPTlRFTlQuVElUTEV9PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiMTBcIiB2YWx1ZT17Y29udGVudH0gb25DaGFuZ2U9e29uQ29udGVudENoYW5nZWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1Ym1pdEJ1dHRvbihvblN1Ym1pdCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24tZ3JvdXAgc3RhY2tlZCBzbWFsbC1jZW50ZXJlZCBsYXJnZS02IHNtYWxsLTggbW9yZS1zcGFjZSc+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtvblN1Ym1pdH0gY2xhc3NOYW1lPSdidXR0b24gc3VjY2Vzcyc+XG4gICAgICAgICAgICAgICAgPHNwYW4+16nXnNeXPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcGFwZXItcGxhbmUnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFNob3dEaXN0cmlidXRpb25UeXBlSW5wdXQoZGlzdHJpYnV0aW9uTWV0aG9kKSB7XG4gICAgcmV0dXJuIGRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5FTUFJTDtcbn1cblxuZnVuY3Rpb24gc2hvdWxkU2hvd1RlbXBsYXRlU2VsZWN0aW9uKGRpc3RyaWJ1dGlvbk1ldGhvZCwgZGlzdHJpYnV0aW9uVHlwZSkge1xuICAgIHJldHVybiBzaG91bGRTaG93RGlzdHJpYnV0aW9uVHlwZUlucHV0KGRpc3RyaWJ1dGlvbk1ldGhvZCkgJiYgZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fVFlQRVMuVEVNUExBVEU7XG59XG5cbmZ1bmN0aW9uIHNob3VsZENyZWF0ZUN1c3RvbVRpdGxlKGRpc3RyaWJ1dGlvbk1ldGhvZCwgZGlzdHJpYnV0aW9uVHlwZSkge1xuICAgIHJldHVybiBkaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuRU1BSUwgJiZcbiAgICAgICAgZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fVFlQRVMuQ1VTVE9NO1xufVxuXG5mdW5jdGlvbiBzaG91bGRTaG93Q3VzdG9tQ29udGVudChkaXN0cmlidXRpb25NZXRob2QsIGRpc3RyaWJ1dGlvblR5cGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLkVNQUlMICYmXG4gICAgICAgICAgICBkaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9UWVBFUy5DVVNUT01cbiAgICAgICAgKSB8fCBkaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuU01TO1xufVxuXG5jbGFzcyBEaXN0cmlidXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLmdhbWVzKTtcbiAgICB9XG5cbiAgICBvbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRpc3RyaWJ1dGlvbk1ldGhvZDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uUmVjaXBpZW50c1R5cGVDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWNpcGllbnRzVHlwZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uRGlzdHJpYnV0aW9uVHlwZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRpc3RyaWJ1dGlvblR5cGU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvblRlbXBsYXRlSWRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0ZW1wbGF0ZUlkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25HYW1lSWRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBnYW1lSWQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvblN1YmplY3RDaGFuZ2VkID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3ViamVjdDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uQ29udGVudENoYW5nZWQgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBjb250ZW50OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5FTUFJTCkge1xuICAgICAgICAgICAgY29uc3QgcmVjaXBpZW50cyA9IGdldFVzZXJzRW1haWxzKHRoaXMucHJvcHMudXNlcnMsIHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsIHRoaXMucHJvcHMuYm9va2luZ3MsIHRoaXMuc3RhdGUuZ2FtZUlkKTtcbiAgICAgICAgICAgIGlmIChfLmlzRW1wdHkocmVjaXBpZW50cykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9UWVBFUy5URU1QTEFURSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBnZXRFdmVudFN1YnN0aXR1dGlvbnModGhpcy5wcm9wcy5nYW1lc1t0aGlzLnN0YXRlLmdhbWVJZF0pO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZFRlbXBsYXRlRW1haWwocmVjaXBpZW50cywgdGhpcy5zdGF0ZS50ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kQ3VzdG9tRW1haWwocmVjaXBpZW50cywgdGhpcy5zdGF0ZS5zdWJqZWN0LCBwcmVwYXJlQ3VzdG9tTWFpbENvbnRlbnRGb3JTZW5kKHRoaXMuc3RhdGUuY29udGVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVjaXBpZW50cyA9IGdldFVzZXJzUGhvbmVOdW1iZXJzKHRoaXMucHJvcHMudXNlcnMsIHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsIHRoaXMucHJvcHMuYm9va2luZ3MsIHRoaXMuc3RhdGUuZ2FtZUlkKTtcbiAgICAgICAgICAgIGlmIChfLmlzRW1wdHkocmVjaXBpZW50cykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRTTVMocmVjaXBpZW50cywgdGhpcy5zdGF0ZS5jb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoZ2V0SW5pdGlhbFN0YXRlKHRoaXMucHJvcHMuZ2FtZXMpKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rhc2hib2FyZC1wYWdlIGRpc3RyaWJ1dGlvbi1wYWdlJz5cbiAgICAgICAgICAgICAgICA8UGFnZVRpdGxlIHRpdGxlPXtUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuVElUTEV9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTExIHNtYWxsLWNlbnRlcmVkJz5cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVEaXN0cmlidXRpb25NZXRob2RJbnB1dCh0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCwgdGhpcy5vbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZSkgfVxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZVJlY2lwaWVudHNUeXBlSW5wdXQodGhpcy5zdGF0ZS5yZWNpcGllbnRzVHlwZSwgdGhpcy5vblJlY2lwaWVudHNUeXBlQ2hhbmdlKSB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2hvdWxkU2hvd0Rpc3RyaWJ1dGlvblR5cGVJbnB1dCh0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCkgPyBjcmVhdGVEaXN0cmlidXRpb25UeXBlSW5wdXQodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlLCB0aGlzLm9uRGlzdHJpYnV0aW9uVHlwZUNoYW5nZSkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgeyBzaG91bGRTaG93VGVtcGxhdGVTZWxlY3Rpb24odGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSkgPyBjcmVhdGVUZW1wbGF0ZVNlbGVjdGlvbih0aGlzLnN0YXRlLnRlbXBsYXRlSWQsIHRoaXMub25UZW1wbGF0ZUlkQ2hhbmdlKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICB7IHNob3VsZFNob3dUZW1wbGF0ZVNlbGVjdGlvbih0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCwgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlKSA/IGNyZWF0ZUdhbWVzU2VsZWN0aW9uKGdldE9wZW5HYW1lcyh0aGlzLnByb3BzLmdhbWVzKSwgdGhpcy5zdGF0ZS5nYW1lSWQsIHRoaXMub25HYW1lSWRDaGFuZ2UpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2hvdWxkQ3JlYXRlQ3VzdG9tVGl0bGUodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSkgPyBjcmVhdGVDdXN0b21UaXRsZSh0aGlzLnN0YXRlLnN1YmplY3QsIHRoaXMub25TdWJqZWN0Q2hhbmdlZCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgeyBzaG91bGRTaG93Q3VzdG9tQ29udGVudCh0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCwgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlKSA/IGNyZWF0ZUN1c3RvbUNvbnRlbnQodGhpcy5zdGF0ZS5jb250ZW50LCB0aGlzLm9uQ29udGVudENoYW5nZWQpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlU3VibWl0QnV0dG9uKHRoaXMub25TdWJtaXQpIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRGlzdHJpYnV0aW9uUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgZ2FtZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgYm9va2luZ3M6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZXVkeC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEaXN0cmlidXRpb25QYWdlKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS5qc3giLCJpbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IFBBVEhfTUFQID0ge1xuICBFTUFJTFM6IHtcbiAgICBURU1QTEFURVM6ICdwZW5kaW5nRW1haWxzL3RlbXBsYXRlcycsXG4gICAgQ1VTVE9NOiAncGVuZGluZ0VtYWlscy9jdXN0b20nXG4gIH0sXG4gIFNNUzogJ3BlbmRpbmdTTVMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRUZW1wbGF0ZUVtYWlsID0gKHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKGAke1BBVEhfTUFQLkVNQUlMUy5URU1QTEFURVN9YCwgKHsgcmVjaXBpZW50cywgdGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucyB9KSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kQ3VzdG9tRW1haWwgPSAocmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goYCR7UEFUSF9NQVAuRU1BSUxTLkNVU1RPTX1gLCAoeyByZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50IH0pKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRTTVMgPSAodG8sIG1lc3NhZ2UpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKGAke1BBVEhfTUFQLlNNU31gLCAoeyB0bywgbWVzc2FnZSB9KSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucy5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZGlzdHJpYnV0aW9uUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZGlzdHJpYnV0aW9uLXBhZ2UgLmJ1dHRvbiBpIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvZGlzdHJpYnV0aW9uUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgVXNlckZvcm0gPSByZXF1aXJlKCcuL3VzZXJGb3JtLmpzeCcpO1xuXG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICBjb25zdCB1aWRUb0VkaXQgPSBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQudWlkIHx8IHN0YXRlLmF1dGhEYXRhLnVpZDtcbiAgICByZXR1cm4ge1xuICAgICAgICB1aWQ6IHVpZFRvRWRpdCxcbiAgICAgICAgZ29Ib21lQWZ0ZXJFZGl0aW5nOiBzdGF0ZS5yb3V0aW5nLmhpc3RvcnkubGVuZ3RoID09PSAxXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmF2aWdhdGVIb21lOiAoKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5yZXNldChDb25zdGFudHMuUk9VVElORy5QQUdFUy5IT01FKSksXG4gICAgICAgIG5hdmlnYXRlQmFjazogKCkgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVCYWNrKCkpXG4gICAgfTtcbn1cblxuY2xhc3MgRWRpdG9yVXNlckluZm9QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBvbkZvcm1DbG9zZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ29Ib21lQWZ0ZXJFZGl0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlSG9tZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VXNlckZvcm0gdWlkPXt0aGlzLnByb3BzLnVpZH0gb25DbG9zZT17dGhpcy5vbkZvcm1DbG9zZX0vPlxuICAgICAgICApXG4gICAgfVxufVxuXG5FZGl0b3JVc2VySW5mb1BhZ2UucHJvcFR5cGVzID0ge1xuICAgIHVpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlQmFjazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZUhvbWU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZ29Ib21lQWZ0ZXJFZGl0aW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVkaXRvclVzZXJJbmZvUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZWRpdFVzZXJJbmZvUGFnZS5qc3giLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4PSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCB1c2VyQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnKTtcblxuY29uc3QgRm9ybUZyYW1lID0gcmVxdWlyZSgnLi9mb3JtRnJhbWUnKTtcblxuY29uc3QgZW1wdHlVc2VyID0ge1xuICAgIGZpcnN0TmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnLFxuICAgIHBob25lUHJlZml4OiAnMDUwJyxcbiAgICBwaG9uZU51bWJlcjogJycsXG4gICAgc3RhdGlvbjogJ3RsdicsXG4gICAgc3Vic2NyaWJlU01TOiB0cnVlLFxuICAgIHN1YnNjcmliZU1haWw6IHRydWUsXG4gICAgc2Vhc29uVGlja2V0czogMFxufTtcblxuZnVuY3Rpb24gZ2V0RW1wdHlVc2VySW5mbyhlbWFpbCkge1xuICByZXR1cm4gXy5hc3NpZ24oZW1wdHlVc2VyLCB7IGVtYWlsIH0pO1xufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgdXNlciA9IHN0YXRlLnVzZXJzW293blByb3BzLnVpZF07XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJJbmZvOiB1c2VyIHx8IGdldEVtcHR5VXNlckluZm8oYXV0aERhdGEuZW1haWwpLFxuICAgICAgICBpc0FkbWluTW9kZTogYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgYWxsb3dVc2VyUmVtb3ZlOiBhdXRoRGF0YS5pc0FkbWluICYmIGF1dGhEYXRhLnVpZCAhPT0gb3duUHJvcHMudWlkXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZVVzZXI6IHVzZXIgPT4gZGlzcGF0Y2godXNlckFjdGlvbnMudXBkYXRlVXNlcihvd25Qcm9wcy51aWQsIHVzZXIpKSxcbiAgICAgICAgcmVtb3ZlVXNlcjogKCkgPT4gZGlzcGF0Y2godXNlckFjdGlvbnMucmVtb3ZlVXNlcihvd25Qcm9wcy51aWQpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkbWluU2VjdGlvbihzZWFzb25UaWNrZXRzLCBvbk51bWJlckNoYW5nZSkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9XCJzZWFzb25UaWNrZXRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgIDxsYWJlbD7Xm9ee15XXqiDXnteg15XXmdeZ151cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNlYXNvblRpY2tldHNcIiB2YWx1ZT17c2Vhc29uVGlja2V0c30gb25DaGFuZ2U9e29uTnVtYmVyQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7IF8udGltZXMoQ29uc3RhbnRzLlVTRVIuTUFYX1NFQVNPTl9USUNLRVRTLCBpID0+IDxvcHRpb24ga2V5PXsnYW1vdW50LScgKyBpfSB2YWx1ZT17aX0+e2l9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyTmFtZUlucHV0cyhmaXJzdE5hbWUsIGxhc3ROYW1lLCBvblRleHRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS02IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLkZJUlNUX05BTUUgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e2ZpcnN0TmFtZX0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gbWF4TGVuZ3RoPVwiMjBcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5MQVNUX05BTUUgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdE5hbWVcIiB2YWx1ZT17bGFzdE5hbWV9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsSW5wdXQoZW1haWwsIG9uVGV4dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PVwidXNlci1pbmZvLWVtYWlsLWlucHV0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLkVNQUlMIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lTnVtYmVySW5wdXRzKHBob25lUHJlZml4LCBwaG9uZU51bWJlciwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtOCBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5QSE9ORV9OVU1CRVIgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZU51bWJlclwiIHZhbHVlPXtwaG9uZU51bWJlcn0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gbWF4TGVuZ3RoPVwiN1wiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC00IGNvbHVtbnMgZW5kXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5QSE9ORV9QUkVGSVggfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwaG9uZVByZWZpeFwiIHZhbHVlPXtwaG9uZVByZWZpeH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5VU0VSLlBIT05FX1BSRUZJWEVTLCBwcmVmaXggPT4gPG9wdGlvbiBrZXk9eydwaG9uZS1wcmVmaXgtJyArIHByZWZpeH0gdmFsdWU9e3ByZWZpeH0+e3ByZWZpeH08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY2t1cFN0YXRpb25Sb3coc3RhdGlvbiwgcmVxdWVzdEZvck1lbWJlcnNoaXAsIG9uVGV4dENoYW5nZSwgb25Cb29sZWFuQ2hhbmdlKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLkZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OIH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3RhdGlvblwiIHZhbHVlPXtzdGF0aW9ufSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLlNUQVRJT05TLCBzdGF0aW9uID0+IDxvcHRpb24ga2V5PXsnc3RhdGlvbi0nICsgc3RhdGlvbn0gdmFsdWU9e3N0YXRpb259PnsgVHJhbnNsYXRpb25zLlNUQVRJT05TW3N0YXRpb25dIH08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTQgc21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuUkVRVUVTVF9GT1JfTUVNQkVSU0hJUCB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJlcXVlc3RGb3JNZW1iZXJzaGlwXCIgdmFsdWU9e3JlcXVlc3RGb3JNZW1iZXJzaGlwfSBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3VuZGVmaW5lZH0gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT7XkdeX16g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RydWV9Pteb1588L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2ZhbHNlfT7XnNeQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgeyBjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQoKSB9XG4gICAgICAgICAgICB7IGNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQoKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3RyaWJ1dGlvbklucHV0cyhzdWJzY3JpYmVNYWlsLCBzdWJzY3JpYmVTTVMsIG9uQm9vbGVhbkNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTMgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5ESVNUUklCVVRJT04uRU1BSUwgfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInN3aXRjaC1pbnB1dFwiIG5hbWU9XCJzdWJzY3JpYmVNYWlsXCIgaWQ9XCJzdWJzY3JpYmVNYWlsXCIgb25DaGFuZ2U9e29uQm9vbGVhbkNoYW5nZX0gY2hlY2tlZD17c3Vic2NyaWJlTWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1wYWRkbGVcIiBodG1sRm9yPVwic3Vic2NyaWJlTWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5UT0dHTEUuWUVTIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuVE9HR0xFLk5PIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMyBjb2x1bW4gZW5kXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5ESVNUUklCVVRJT04uU01TIH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5wdXRcIiBuYW1lPVwic3Vic2NyaWJlU01TXCIgaWQ9XCJzdWJzY3JpYmVTTVNcIiBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfSBjaGVja2VkPXtzdWJzY3JpYmVTTVN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtcGFkZGxlXCIgaHRtbEZvcj1cInN1YnNjcmliZVNNU1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5UT0dHTEUuWUVTIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuVE9HR0xFLk5PIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBfLmNsb25lKHRoaXMucHJvcHMudXNlckluZm8pO1xuICB9XG5cbiAgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYXNBbGxSZXF1aXJlZEluZm8gPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRJbmZvID0gXy5waWNrKHRoaXMuc3RhdGUsIFsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ3Bob25lUHJlZml4JywgJ3Bob25lTnVtYmVyJ10pO1xuICAgICAgICAgIHJldHVybiAhXy5zb21lKHJlcXVpcmVkSW5mbywgXy5pc0VtcHR5KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhc1ZhbGlkUGhvbmVOdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubGVuZ3RoID09PSA3O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFzUmVxdWVzdEZvck1lbWJlcnNoaXBQcm9wZXJ0eSA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gXy5oYXModGhpcy5zdGF0ZSwgJ3JlcXVlc3RGb3JNZW1iZXJzaGlwJyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gaGFzQWxsUmVxdWlyZWRJbmZvKCkgJiYgaGFzVmFsaWRQaG9uZU51bWJlcigpICYmIGhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkoKTtcbiAgfTtcblxuICBvbktleVByZXNzID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlzRm9ybVZhbGlkKHRoaXMuc3RhdGUpKSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlID0gKHR5cGUsIGUpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGlmIChlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdzZWxlY3Qtb25lJykge1xuICAgICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyKHRoaXMuc3RhdGUpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xvc2UpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gIH07XG5cbiAgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZVVzZXIoKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsb3NlKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IG9uVGV4dENoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzLCAndGV4dCcpO1xuICAgICAgY29uc3Qgb25OdW1iZXJDaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgJ251bWJlcicpO1xuICAgICAgY29uc3Qgb25Cb29sZWFuQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsICdib29sZWFuJyk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRnJhbWUgdGl0bGU9e1RyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuVElUTEV9XG4gICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e3RoaXMucHJvcHMuYWxsb3dVc2VyUmVtb3ZlID8gdGhpcy5vblJlbW92ZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5wcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5pc0Zvcm1WYWxpZCgpfT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtY2VudGVyZWQgdXNlci1jb250YWluZXJcIiBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3N9PlxuXG4gICAgICAgICAgICAgIHsgY3JlYXRlVXNlck5hbWVJbnB1dHModGhpcy5zdGF0ZS5maXJzdE5hbWUsIHRoaXMuc3RhdGUubGFzdE5hbWUsIG9uVGV4dENoYW5nZSkgfVxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMudXNlckluZm8uZW1haWwgPyBudWxsIDogY3JlYXRlRW1haWxJbnB1dCh0aGlzLnN0YXRlLmVtYWlsLCBvblRleHRDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgeyBjcmVhdGVQaG9uZU51bWJlcklucHV0cyh0aGlzLnN0YXRlLnBob25lUHJlZml4LCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBvblRleHRDaGFuZ2UsIG9uTnVtYmVyQ2hhbmdlKSB9XG4gICAgICAgICAgICAgIHsgY3JlYXRlUGlja3VwU3RhdGlvblJvdyh0aGlzLnN0YXRlLnN0YXRpb24sIHRoaXMuc3RhdGUucmVxdWVzdEZvck1lbWJlcnNoaXAsIG9uVGV4dENoYW5nZSwgb25Cb29sZWFuQ2hhbmdlKSB9XG5cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmlzQWRtaW5Nb2RlID8gY3JlYXRlQWRtaW5TZWN0aW9uKHRoaXMuc3RhdGUuc2Vhc29uVGlja2V0cywgb25OdW1iZXJDaGFuZ2UpIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgeyBjcmVhdGVEaXN0cmlidXRpb25JbnB1dHModGhpcy5zdGF0ZS5zdWJzY3JpYmVNYWlsLCB0aGlzLnN0YXRlLnN1YnNjcmliZVNNUywgb25Cb29sZWFuQ2hhbmdlKSB9XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0Zvcm1GcmFtZT5cbiAgICApO1xuICB9XG59XG5cblVzZXJGb3JtLlByb3BUeXBlcyA9IHtcbiAgICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVVc2VyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlbW92ZVVzZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNBZG1pbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFsbG93VXNlclJlbW92ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdXNlckluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyRm9ybSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlckZvcm0uanN4IiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgUGFnZVRpdGxlID0gcmVxdWlyZSgnLi9wYWdlVGl0bGUnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2Zvcm1GcmFtZS5zY3NzJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbnNCdXR0b25zKGRpc2FibGVkLCBvblN1Ym1pdCwgb25SZW1vdmUpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvblJlbW92ZX0gY2xhc3NOYW1lPVwiYnV0dG9uIGFsZXJ0IG1vcmUtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IFRyYW5zbGF0aW9ucy5GT1JNX0ZSQU1FLlJFTU9WRSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25zIGJ1dHRvbi1ncm91cCBzdGFja2VkIHNtYWxsLWNlbnRlcmVkIGxhcmdlLTYgc21hbGwtOCBcIj5cbiAgICAgICAgICAgIDxhIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17b25TdWJtaXR9IGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzIG1vcmUtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IFRyYW5zbGF0aW9ucy5GT1JNX0ZSQU1FLlNVQk1JVCB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKG9uUmVtb3ZlKSA/IGNyZWF0ZVJlbW92ZUJ1dHRvbigpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEZvcm1GcmFtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZyYW1lXCI+XG4gICAgICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQWN0aW9uc0J1dHRvbnModGhpcy5wcm9wcy5kaXNhYmxlZCwgdGhpcy5wcm9wcy5vblN1Ym1pdCwgdGhpcy5wcm9wcy5vblJlbW92ZSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuRm9ybUZyYW1lLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblN1Ym1pdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUZyYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1GcmFtZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1mcmFtZSAuY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLmZvcm0tZnJhbWUgLmFjdGlvbi1idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIC5mb3JtLWZyYW1lIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IHJvdXRpbmdBY3Rpb25zICA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcbmNvbnN0IGJvb2tpbmdBY3Rpb25zICA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMnKTtcblxuY29uc3QgRm9ybUZyYW1lID0gcmVxdWlyZSgnLi9mb3JtRnJhbWUnKTtcblxuY29uc3QgZW1wdHlCb29raW5nID0ge1xuICAgIHBhaWRTZWF0czogMCxcbiAgICBleHRyYVNlYXRzOiAwLFxuICAgIHBpY2tVcDogJ3RsdicsXG4gICAgZHJvcE9mZjogJ3Rsdidcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIGNvbnN0IHJvdXRpbmdQYXJhbXMgPSBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zO1xuICAgIGNvbnN0IHVpZCA9IHJvdXRpbmdQYXJhbXMudWlkO1xuICAgIGNvbnN0IGdhbWVJZCA9IHJvdXRpbmdQYXJhbXMuZ2FtZUlkO1xuICAgIGNvbnN0IGJvb2tpbmcgPSBfLmdldChzdGF0ZSwgWydib29raW5ncycsIHVpZCwgZ2FtZUlkXSwge30pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNBZG1pbjogc3RhdGUuYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgdWlkLFxuICAgICAgICBnYW1lSWQsXG4gICAgICAgIGJvb2tpbmcsXG4gICAgICAgIHVzZXJJbmZvOiBzdGF0ZS51c2Vyc1t1aWRdXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlQm9va2luZzogKHVpZCwgZ2FtZUlkLCBib29raW5nKSA9PiBkaXNwYXRjaChib29raW5nQWN0aW9ucy51cGRhdGVCb29raW5nKHVpZCwgZ2FtZUlkLCBib29raW5nKSksXG4gICAgICAgIGNhbmNlbEJvb2tpbmc6ICh1aWQsIGdhbWVJZCkgPT4gZGlzcGF0Y2goYm9va2luZ0FjdGlvbnMuY2FuY2VsQm9va2luZyh1aWQsIGdhbWVJZCkpLFxuICAgICAgICBuYXZpZ2F0ZUJhY2s6ICgpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlQmFjaygpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhc3NlbmdlcnNTZWN0aW9uKHNlYXNvblRpY2tldHMsIHBhaWRTZWF0cywgZXh0cmFTZWF0cywgb25QYWlkU2VhdENoYW5nZSwgb25FeHRyYVNlYXRDaGFuZ2UpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhaWRTZWF0c0lucHV0KCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IF8udGltZXMoc2Vhc29uVGlja2V0cyArIDEsIGkgPT4gPG9wdGlvbiBrZXk9eydwYWlkLXNlYXQtJyArIGl9IHZhbHVlPXtpfT57aX08L29wdGlvbj4pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfQk9PS0lOR19QQUdFLlBBSURfU0VBVFN9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3BhaWRTZWF0c30gb25DaGFuZ2U9e29uUGFpZFNlYXRDaGFuZ2V9IG5hbWU9J3BhaWRTZWF0cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW1zIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV4dHJhU2VhdHNJbnB1dCgpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBfLnRpbWVzKDgsIGkgPT4gPG9wdGlvbiBrZXk9eydleHRyYS1zZWF0LScgKyBpfSB2YWx1ZT17aX0+e2l9PC9vcHRpb24+KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTYgY29sdW1ucyBlbmQnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuRVhUUkFfU0VBVFN9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2V4dHJhU2VhdHN9IG9uQ2hhbmdlPXtvbkV4dHJhU2VhdENoYW5nZX0gbmFtZT0nZXh0cmFTZWF0cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW1zIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnIGtleT17J2Jvb2tpbmctZm9ybS1wYXNzZW5nZXJzLXNlY3Rpb24nfT5cbiAgICAgICAgICAgIHsgc2Vhc29uVGlja2V0cyA/IGNyZWF0ZVBhaWRTZWF0c0lucHV0KCkgOiBudWxsIH1cbiAgICAgICAgICAgIHsgY3JlYXRlRXh0cmFTZWF0c0lucHV0KCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaWNrdXBTZWN0aW9uKHBpY2tVcEVuYWJsZWQsIHBpY2tVcFN0YXRpb24sIHRvZ2dsZVBpY2tVcCwgb25QaWNrdXBTdGF0aW9uQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtMyBsYXJnZS0yIGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwaWNrVXBUb2dnbGUnPntUcmFuc2xhdGlvbnMuVVBEQVRFX0JPT0tJTkdfUEFHRS5QSUNLVVBfVE9HR0xFfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N3aXRjaCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2xhc3NOYW1lPSdzd2l0Y2gtaW5wdXQnIGlkPSdwaWNrVXBUb2dnbGUnIGNoZWNrZWQ9e3BpY2tVcEVuYWJsZWR9IG9uQ2hhbmdlPXt0b2dnbGVQaWNrVXB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3N3aXRjaC1wYWRkbGUnIGh0bWxGb3I9J3BpY2tVcFRvZ2dsZScgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTkgbGFyZ2UtMTAgY29sdW1ucyBlbmQgbW9yZS1zcGFjZSc+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cGlja1VwU3RhdGlvbn0gb25DaGFuZ2U9e29uUGlja3VwU3RhdGlvbkNoYW5nZX0gbmFtZT0ncGlja1VwJyBkaXNhYmxlZD17IXBpY2tVcEVuYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+e1RyYW5zbGF0aW9ucy5VUERBVEVfQk9PS0lOR19QQUdFLlBJQ0tVUF9TVEFUSU9OX0RST1BET1dOX0RFRkFVTFR9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5TVEFUSU9OUy5URUxfQVZJVn0+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tDb25zdGFudHMuU1RBVElPTlMuVEVMX0FWSVZdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuU1RBVElPTlMuTU9ESUlOfT57VHJhbnNsYXRpb25zLlNUQVRJT05TW0NvbnN0YW50cy5TVEFUSU9OUy5NT0RJSU5dfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3BvZmZTZWN0aW9uKGRyb3BPZmZFbmFibGVkLCBkcm9wT2ZmU3RhdGlvbiwgdG9nZ2xlRHJvcE9mZiwgb25Ecm9wT2ZmU3RhdGlvbkNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTMgbGFyZ2UtMiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRyb3BPZmZUb2dnbGVcIj57VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuRFJPUE9GRl9UT0dHTEV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3dpdGNoJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjbGFzc05hbWU9J3N3aXRjaC1pbnB1dCcgaWQ9J2Ryb3BPZmZUb2dnbGUnIGNoZWNrZWQ9e2Ryb3BPZmZFbmFibGVkfSBvbkNoYW5nZT17dG9nZ2xlRHJvcE9mZn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1wYWRkbGVcIiBodG1sRm9yPVwiZHJvcE9mZlRvZ2dsZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC05IGxhcmdlLTEwIGNvbHVtbnMgZW5kIG1vcmUtc3BhY2UnPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2Ryb3BPZmZTdGF0aW9ufSBvbkNoYW5nZT17b25Ecm9wT2ZmU3RhdGlvbkNoYW5nZX0gbmFtZT0nZHJvcE9mZicgZGlzYWJsZWQ9eyFkcm9wT2ZmRW5hYmxlZH0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jycgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT57VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuUElDS1VQX1NUQVRJT05fRFJPUERPV05fREVGQVVMVH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLlNUQVRJT05TLlRFTF9BVklWfT57VHJhbnNsYXRpb25zLlNUQVRJT05TW0NvbnN0YW50cy5TVEFUSU9OUy5URUxfQVZJVl19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5TVEFUSU9OUy5NT0RJSU59PntUcmFuc2xhdGlvbnMuU1RBVElPTlNbQ29uc3RhbnRzLlNUQVRJT05TLk1PRElJTl19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVXBkYXRlQm9va2luZ1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBjb25zdCBib29raW5nSW5pdGlhbFN0YXRlID0gXy5kZWZhdWx0cyh0aGlzLnByb3BzLmJvb2tpbmcsIHsgcGFpZFNlYXRzOiB0aGlzLnByb3BzLnNlYXNvblRpY2tldHMgfSwgZW1wdHlCb29raW5nKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gXy5tZXJnZShib29raW5nSW5pdGlhbFN0YXRlLCB7XG4gICAgICAgICAgICBwaWNrVXBFbmFibGVkOiAhIWJvb2tpbmdJbml0aWFsU3RhdGUucGlja1VwLFxuICAgICAgICAgICAgZHJvcE9mZkVuYWJsZWQ6ICEhYm9va2luZ0luaXRpYWxTdGF0ZS5kcm9wT2ZmXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUGFpZFNlYXRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwYWlkU2VhdHM6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25FeHRyYVNlYXRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHRyYVNlYXRzOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRvZ2dsZVBpY2tVcCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBwaWNrVXBFbmFibGVkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBpY2tVcEVuYWJsZWQgfSk7XG4gICAgICAgIGlmICghcGlja1VwRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBpY2tVcDogJycgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25QaWNrVXBTdGF0aW9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGlja1VwOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdG9nZ2xlRHJvcE9mZiA9IGUgPT4ge1xuICAgICAgICBjb25zdCBkcm9wT2ZmRW5hYmxlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wT2ZmRW5hYmxlZCB9KTtcbiAgICAgICAgaWYgKCFkcm9wT2ZmRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BPZmY6ICcnIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uRHJvcE9mZlN0YXRpb25DaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkcm9wT2ZmOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBhaWRTZWF0cyA9PT0gMCAmJiB0aGlzLnN0YXRlLmV4dHJhU2VhdHMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkICYmICF0aGlzLnN0YXRlLmRyb3BPZmZFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkICYmIHRoaXMuc3RhdGUucGlja1VwID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWQgJiYgdGhpcy5zdGF0ZS5kcm9wT2ZmID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib29raW5nVG9VcGRhdGUgPSBfLnBpY2sodGhpcy5zdGF0ZSwgXy5rZXlzKGVtcHR5Qm9va2luZykpO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUJvb2tpbmcodGhpcy5wcm9wcy51aWQsIHRoaXMucHJvcHMuZ2FtZUlkLCBib29raW5nVG9VcGRhdGUpO1xuICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlQmFjaygpO1xuICAgIH07XG5cbiAgICBvblJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5jYW5jZWxCb29raW5nKHRoaXMucHJvcHMudWlkLCB0aGlzLnByb3BzLmdhbWVJZCk7XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVCYWNrKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEZvcm1GcmFtZSB0aXRsZT17VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuVElUTEV9IG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBvbkNsb3NlPXt0aGlzLnByb3BzLm5hdmlnYXRlQmFja30gb25SZW1vdmU9e3RoaXMucHJvcHMuaXNBZG1pbiA/IHRoaXMub25SZW1vdmU6IG51bGx9IGRpc2FibGVkPXshdGhpcy5pc0Zvcm1WYWxpZCgpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9va2luZy1mb3JtIHNtYWxsLTExIHNtYWxsLWNlbnRlcmVkJz5cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVQYXNzZW5nZXJzU2VjdGlvbih0aGlzLnByb3BzLnVzZXJJbmZvLnNlYXNvblRpY2tldHMsIHRoaXMuc3RhdGUucGFpZFNlYXRzLCB0aGlzLnN0YXRlLmV4dHJhU2VhdHMsIHRoaXMub25QYWlkU2VhdENoYW5nZSwgdGhpcy5vbkV4dHJhU2VhdENoYW5nZSkgfVxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZVBpY2t1cFNlY3Rpb24odGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkLCB0aGlzLnN0YXRlLnBpY2tVcCwgdGhpcy50b2dnbGVQaWNrVXAsIHRoaXMub25QaWNrVXBTdGF0aW9uQ2hhbmdlKSB9XG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlRHJvcG9mZlNlY3Rpb24odGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZCwgdGhpcy5zdGF0ZS5kcm9wT2ZmLCB0aGlzLnRvZ2dsZURyb3BPZmYsIHRoaXMub25Ecm9wT2ZmU3RhdGlvbkNoYW5nZSkgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtRnJhbWU+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VcGRhdGVCb29raW5nUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNBZG1pbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBnYW1lSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBib29raW5nOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHVzZXJJbmZvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjYW5jZWxCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlQmFjazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVwZGF0ZUJvb2tpbmdQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91cGRhdGVCb29raW5nUGFnZS5qc3giLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgZXZlbnRBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9ldmVudEFjdGlvbnMnKTtcbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuXG5jb25zdCBERUZBVUxUX0dBTUVfTE9HTyA9ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMjQvMTI0MTUwLnN2Zyc7XG5cbmNvbnN0IEZvcm1GcmFtZSA9IHJlcXVpcmUoJy4vZm9ybUZyYW1lJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzJyk7XG5cbmNvbnN0IGVtcHR5RXZlbnQgPSB7XG4gICAgdHlwZUlkOiAnJyxcbiAgICBkYXk6ICcwMScsXG4gICAgbW9udGg6ICcwMScsXG4gICAgeWVhcjogJzIwMTcnLFxuICAgIGhvdXI6ICcxNycsXG4gICAgbWludXRlOiAnMDAnLFxuICAgIHN0YXR1czogQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRFxufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgY29uc3Qgcm91dGluZ1BhcmFtcyA9IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXM7XG4gICAgY29uc3QgZ2FtZUlkID0gcm91dGluZ1BhcmFtcy5nYW1lSWQ7XG4gICAgY29uc3QgZ2FtZSA9IF8uZ2V0KHN0YXRlLCBbJ2V2ZW50cycsIGdhbWVJZF0sIHt9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdhbWUsXG4gICAgICAgIGdhbWVJZFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVZhbHVlKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLmpvaW4oJy0nKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVmFsdWUoaG91ciwgbWludXRlKSB7XG4gICAgcmV0dXJuIGhvdXIgKyAnOicgKyBtaW51dGU7XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUdhbWU6IGdhbWUgPT4gZGlzcGF0Y2goZXZlbnRBY3Rpb25zLmNyZWF0ZUV2ZW50KGdhbWUpKSxcbiAgICAgICAgdXBkYXRlR2FtZTogKGdhbWVJZCwgZ2FtZSkgPT4gZGlzcGF0Y2goZXZlbnRBY3Rpb25zLnVwZGF0ZUV2ZW50KGdhbWVJZCwgZ2FtZSkpLFxuICAgICAgICByZW1vdmVHYW1lOiBnYW1lSWQgPT4gZGlzcGF0Y2goZXZlbnRBY3Rpb25zLnJlbW92ZUV2ZW50KGdhbWVJZCkpLFxuICAgICAgICBuYXZpZ2F0ZUJhY2s6ICgpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlQmFjaygpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVJbWFnZSh0eXBlSWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0nZ2FtZS1pbWcnIHNyYz17Xy5nZXQoQ29uc3RhbnRzLlRFQU1TLCBbdHlwZUlkLCAnbG9nbyddLCBERUZBVUxUX0dBTUVfTE9HTyl9IC8+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZVRpdGxlU2VjdGlvbih0eXBlSWQsIG9uVHlwZUlkQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtOSBsYXJnZS0xMCBsYXJnZS1jb2xsYXBzZSBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLkdBTUVfTEFCRUx9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT0ndHlwZUlkJyB2YWx1ZT17dHlwZUlkfSBvbkNoYW5nZT17b25UeXBlSWRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJyBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5HQU1FX1BMQUNFSE9MREVSfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuVEVBTVMsICh0ZWFtRGF0YSwgaWQpID0+IDxvcHRpb24ga2V5PXsndXBkYXRlLWdhbWUtJyArIGlkfSB2YWx1ZT17aWR9Pnt0ZWFtRGF0YS5sYWJlbH08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zsb2F0LWxlZnQnPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlR2FtZUltYWdlKHR5cGVJZCkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9XaXRob3V0U3VwcG9ydGVkSW5wdXRzKHllYXIsIG1vbnRoLCBob3VyLCBtaW51dGUsIG9uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT0ndW5zdXBwb3J0ZWQtaW5wdXRzJyBjbGFzc05hbWU9J3JvdyBzbWFsbC1leHBhbmRlZCBzbWFsbC1jZW50ZXJlZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNCBtZWRpdW0tMiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLkRBVEVfTEFCRUx9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt5ZWFyfSBvbkNoYW5nZT17b25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZX0gbmFtZT0neWVhcic+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLkRBVEVfQU5EX1RJTUUueWVhcnMsIHllYXIgPT4gPG9wdGlvbiBrZXk9eyd5eS0nICsgeWVhcn0gdmFsdWU9eycyMCcgKyB5ZWFyfT57eWVhcn08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucyBtb3JlLXNwYWNlJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXttb250aH0gb25DaGFuZ2U9e29uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2V9IG5hbWU9J21vbnRoJz5cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuREFURV9BTkRfVElNRS5tb250aHMsIG1vbnRoID0+IDxvcHRpb24ga2V5PXsnbW0tJyArIG1vbnRofSB2YWx1ZT17bW9udGh9Pnttb250aH08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucyBtb3JlLXNwYWNlJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtkYXl9IG9uQ2hhbmdlPXtvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlfSBuYW1lPSdkYXknPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5EQVRFX0FORF9USU1FLmRheXMsIGRheSA9PiA8b3B0aW9uIGtleT17J2RkLScgKyBkYXl9IHZhbHVlPXtkYXl9PntkYXl9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC0zIGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuVElNRX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e21pbnV0ZX0gb25DaGFuZ2U9e29uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2V9IG5hbWU9J21pbnV0ZSc+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLkRBVEVfQU5EX1RJTUUubWludXRlcywgZGF5ID0+IDxvcHRpb24ga2V5PXsnbWluLScgKyBtaW51dGV9IHZhbHVlPXttaW51dGV9PnttaW51dGV9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC0zIGNvbHVtbnMgbW9yZS1zcGFjZSBlbmQnPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2hvdXJ9IG9uQ2hhbmdlPXtvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlfSBuYW1lPSdtaW51dGUnPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5EQVRFX0FORF9USU1FLmhvdXJzLCBob3VyID0+IDxvcHRpb24ga2V5PXsnaGgtJyArIGhvdXJ9IHZhbHVlPXtob3VyfT57aG91cn08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvV2l0aFN1cHBvcnRlZElucHV0cyhkYXRlLCB0aW1lLCBvbkRhdGVDaGFuZ2UsIG9uVGltZUNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PSdzdXBwb3J0ZWQtaW5wdXRzJyBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLkRBVEVfTEFCRUx9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdkYXRlJyB2YWx1ZT17ZGF0ZX0gb25DaGFuZ2U9e29uRGF0ZUNoYW5nZX0gbWluPScyMDE2LTAxLTAxJyBtYXg9JzIwMTctMTItMzEnIG5hbWU9J2RhdGUnIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTYgY29sdW1ucyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5USU1FfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGltZScgdmFsdWU9e3RpbWV9IHN0ZXA9ezMwMH0gb25DaGFuZ2U9e29uVGltZUNoYW5nZX0gbmFtZT0ndGltZScgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVTdGF0dXNTZWN0aW9uKHN0YXR1cywgb25HYW1lU3RhdHVzQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTEyIGNvbHVtbnMnPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5HQU1FX1NUQVRVU31cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzdGF0dXN9IG9uQ2hhbmdlPXtvbkdhbWVTdGF0dXNDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5HQU1FLlNUQVRVUywgdmFsID0+IDxvcHRpb24gdmFsdWU9e3ZhbH0+e1RyYW5zbGF0aW9ucy5HQU1FLlNUQVRVU1t2YWxdfTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVXBkYXRlR2FtZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gXy5kZWZhdWx0cyh0aGlzLnByb3BzLmdhbWUsIGVtcHR5RXZlbnQsIHsgZGF0ZUlucHV0U3VwcG9ydGVkOiB0cnVlLCB0aW1lSW5wdXRTdXBwb3J0ZWQ6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tJZkh0bWw1U3VwcG9ydGVkKCk7XG4gICAgfVxuXG4gICAgY2hlY2tJZkh0bWw1U3VwcG9ydGVkKCkge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gWydkYXRlJywgJ3RpbWUnXTtcbiAgICAgICAgY29uc3QgdGVzdFJlc3VsdCA9IHt9O1xuICAgICAgICBjb25zdCB0ZXN0U3RyaW5nID0gJ3Rlc3QhJztcblxuICAgICAgICBfLmVhY2goc3VwcG9ydGVkSW5wdXRUeXBlcywgKGlucHV0VHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdGVzdFN0cmluZztcbiAgICAgICAgICAgIGNvbnN0IGlzU3VwcG9ydGVkID0gaW5wdXQudmFsdWUgIT09IHRlc3RTdHJpbmc7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0W2lucHV0VHlwZSArICdJbnB1dFN1cHBvcnRlZCddID0gaXNTdXBwb3J0ZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGVzdFJlc3VsdCk7XG4gICAgfVxuXG4gICAgb25UeXBlSWRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0eXBlSWQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25EYXRlQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCctJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB5ZWFyOiB2YWxbMF0sIG1vbnRoOiB2YWxbMV0sIGRheTogdmFsWzJdIH0pO1xuICAgIH07XG5cbiAgICBvblRpbWVDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdXI6IHZhbFswXSwgbWludXRlOiB2YWxbMV0gfSk7XG4gICAgfTtcblxuICAgIG9uR2FtZVN0YXR1c0NoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0YXR1czogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlzRm9ybVZhbGlkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50eXBlSWQgIT09ICcnO1xuICAgIH07XG5cbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IF8ub21pdCh0aGlzLnN0YXRlLCBbJ3RpbWVJbnB1dFN1cHBvcnRlZCcsICdkYXRlSW5wdXRTdXBwb3J0ZWQnXSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmdhbWVJZCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVHYW1lKHRoaXMucHJvcHMuZ2FtZUlkLCBnYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3JlYXRlR2FtZShnYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlQmFjaygpO1xuICAgIH07XG5cbiAgICBvblJlbW92ZSAgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlR2FtZSh0aGlzLnByb3BzLmdhbWVJZCk7XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVCYWNrKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGb3JtRnJhbWVcbiAgICAgICAgICAgICAgICB0aXRsZT17VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuVElUTEV9IG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBvblJlbW92ZT17dGhpcy5vblJlbW92ZX0gb25DbG9zZT17dGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2t9IGRpc2FibGVkPXshdGhpcy5pc0Zvcm1WYWxpZCgpfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1cGRhdGUtZ2FtZS1wYWdlIGxhcmdlLTExIGxhcmdlLWNlbnRlcmVkJz5cblxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZUdhbWVUaXRsZVNlY3Rpb24odGhpcy5zdGF0ZS50eXBlSWQsIHRoaXMub25UeXBlSWRDaGFuZ2UpIH1cblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGVJbnB1dFN1cHBvcnRlZCAmJiB0aGlzLnN0YXRlLnRpbWVJbnB1dFN1cHBvcnRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5mb1dpdGhTdXBwb3J0ZWRJbnB1dHMocGFyc2VEYXRlVmFsdWUodGhpcy5zdGF0ZS55ZWFyLCB0aGlzLnN0YXRlLm1vbnRoLCB0aGlzLnN0YXRlLmRheSksIHBhcnNlVGltZVZhbHVlKHRoaXMuc3RhdGUuaG91ciwgdGhpcy5zdGF0ZS5taW51dGUpLCB0aGlzLm9uRGF0ZUNoYW5nZSwgdGhpcy5vblRpbWVDaGFuZ2UpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbmZvV2l0aG91dFN1cHBvcnRlZElucHV0cyh0aGlzLnN0YXRlLnllYXIsIHRoaXMuc3RhdGUubW9udGgsIHRoaXMuc3RhdGUuaG91ciwgdGhpcy5zdGF0ZS5taW51dGUsIHRoaXMub25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlR2FtZVN0YXR1c1NlY3Rpb24odGhpcy5zdGF0ZS5zdGF0dXMsIHRoaXMub25HYW1lU3RhdHVzQ2hhbmdlKSB9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybUZyYW1lPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVXBkYXRlR2FtZVBhZ2UucHJvcFR5cGVzID0ge1xuICAgIGdhbWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgZ2FtZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyZWF0ZUdhbWU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlR2FtZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZUJhY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVcGRhdGVHYW1lUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXBkYXRlR2FtZVBhZ2UuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91cGRhdGVHYW1lUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VwZGF0ZUdhbWVQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91cGRhdGVHYW1lUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvdXBkYXRlR2FtZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudXBkYXRlLWdhbWUtcGFnZSAuZ2FtZS1pbWcge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvdXBkYXRlR2FtZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpdGUge1xcbiAgZGlyZWN0aW9uOiBydGw7IH1cXG4gIC5zaXRlIC5zcGxpdC5idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTZweDsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uIGkge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24uZmFjZWJvb2sge1xcbiAgICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5nb29nbGUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNkNTBmMjU7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5sZWZ0LWljb24ge1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAgICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5sZWZ0LWljb24gc3BhbiB7XFxuICAgICAgICBsZWZ0OiAwOyB9XFxuICAuc2l0ZSAuZXJyb3ItbXNnIHtcXG4gICAgY29sb3I6ICNkNTBmMjU7XFxuICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4OyB9XFxuICAgIC5zaXRlIC5lcnJvci1tc2cgaSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG4gIC5zaXRlIGxhYmVsIHtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgLnNpdGUgLm1vcmUtc3BhY2Uge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4OyB9XFxuICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAubGlzdC1pdGVtOm50aC1jaGlsZChldmVuKSB7XFxuICAgICAgYmFja2dyb3VuZDogI0VFRUVFRTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmxpc3QtaXRlbTpudGgtY2hpbGQob2RkKSB7XFxuICAgICAgYmFja2dyb3VuZDogI0UwRTBFMDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudS5zbWFsbC10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudSBsaSBhIHtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGNvbG9yOiAjRDMyRjJGOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51IGxpLmFjdGl2ZSBhIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRDMyRjJGO1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51IGxpLmFjdGl2ZTpob3ZlciB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLnNlYXJjaCB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjkzNWVtO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMC45MzVlbTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAuc2VhcmNoLWlucHV0IHtcXG4gICAgICB0ZXh0LWluZGVudDogMzBweDsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAuc2VhcmNoLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDExcHg7XFxuICAgICAgcmlnaHQ6IDI4cHg7XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBjb2xvcjogI2NhY2FjYTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEMzJGMkY7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMjVzIGVhc2Utb3V0LCBjb2xvciAuMjVzIGVhc2Utb3V0O1xcbiAgICAgIHBhZGRpbmc6IC44NWVtO1xcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgIHdpZHRoOiAzLjVyZW07XFxuICAgICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgIGJvdHRvbTogMXJlbTsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bi5iaWcge1xcbiAgICAgICAgbGVmdDogMjclOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuLnNtYWxsIHtcXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgICAgIGxlZnQ6IDUlOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNENTAwMDA7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG46Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlci1zdGF0dXMge1xcbiAgICAgIGNvbG9yOiAjNDI0MjQyO1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlci1zdGF0dXMgaSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyB9XFxuICAuc2l0ZSAuYnV0dG9uLnN1Y2Nlc3NbZGlzYWJsZWRdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzI1YTM1YSAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlyZWJhc2VcIjoge1xuXHRcdFwiYXBpS2V5XCI6IFwiQUl6YVN5REVJU1YyYU1pZVBrdWVDd2xEUjhDVmc3aF9CTGEzSm9jXCIsXG5cdFx0XCJhdXRoRG9tYWluXCI6IFwiaGFwb2VsYnVzLWIyNWQ0LmZpcmViYXNlYXBwLmNvbVwiLFxuXHRcdFwiZGF0YWJhc2VVUkxcIjogXCJodHRwczovL2hhcG9lbGJ1cy1iMjVkNC5maXJlYmFzZWlvLmNvbVwiLFxuXHRcdFwic3RvcmFnZUJ1Y2tldFwiOiBcImhhcG9lbGJ1cy1iMjVkNC5hcHBzcG90LmNvbVwiXG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb25maWcvY29uZmlnLnByb2QuanNvblxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==