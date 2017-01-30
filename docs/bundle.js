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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzM4MTZiMDMyZGEzMTFjNDUyMTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb290LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L21ha2VTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWR1eFRodW5rXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3JvdXRpbmdSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NsaWVudERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbG9hZGluZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2xhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzP2NhYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzPzM0MmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90b3BCYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzPzdiMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3M/MmRkNCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2V2ZW50SXRlbS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2Nzcz80YTA2Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3M/MjI5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZVRpdGxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VUaXRsZS5zY3NzPzQyYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wYWdlVGl0bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2FtZXNQYWdlLnNjc3M/YzFlYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhbWVzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ib29raW5nc1BhZ2Uuc2Nzcz9kMTlkIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYm9va2luZ3NQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzcz85NWY1Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGlzdHJpYnV0aW9uUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VkaXRVc2VySW5mb1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtRnJhbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZm9ybUZyYW1lLnNjc3M/MjVlMiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZUJvb2tpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cGRhdGVHYW1lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzP2ViOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYXBwLnNjc3M/OGJkYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcucHJvZC5qc29uIl0sIm5hbWVzIjpbImNvbmZpZyIsImNsaWVudERCIiwiaW5pdGlhbGl6ZSIsImZpcmViYXNlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdCIsInJlcXVpcmUiLCJSZWFjdFJlZHV4IiwibWFrZVN0b3JlIiwiQXBwIiwiUm9vdCIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyb3V0aW5nUmVkdWNlciIsInJlZHVjZXJzIiwicm91dGluZyIsImF1dGhEYXRhIiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwidXNlcnMiLCJldmVudHMiLCJib29raW5ncyIsIm1pZGRsZXdhcmUiLCJ1bmRlZmluZWQiLCJlcnJvclJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJtZXNzYWdlIiwiU1RBUlRfTE9BRElORyIsIlNUT1BfTE9BRElORyIsIlJFUE9SVF9FUlJPUiIsIlNFVF9BVVRIX0RBVEEiLCJTSUdOX09VVCIsIlVTRVJTX1JFQ0VJVkVEIiwiVVNFUl9SRU1PVkVEIiwiRVZFTlRTX1JFQ0VJVkVEIiwiRVZFTlRfUkVNT1ZFRCIsIkJPT0tJTkdTX1JFQ0VJVkVEIiwiQk9PS0lOR19DQU5DRUxFRCIsIk5BVklHQVRFX1RPIiwibG9hZGluZ1JlZHVjZXIiLCJ1c2Vyc1JlZHVjZXIiLCJfIiwibWVyZ2UiLCJvbWl0IiwidWlkIiwiZXZlbnRzUmVkdWNlciIsImV2ZW50SWQiLCJjbG9uZWRCb29raW5ncyIsImNsb25lRGVlcCIsInNpemUiLCJhdXRoRGF0YVJlZHVjZXIiLCJlbWFpbCIsInBob3RvVVJMIiwiaXNBZG1pbiIsIkNvbnN0YW50cyIsImNyZWF0ZVJvdXRpbmdEYXRhIiwicGFnZUlkIiwicGFyYW1zIiwiY3VycmVudCIsIlJPVVRJTkciLCJQQUdFUyIsIkFVVEgiLCJoaXN0b3J5Iiwicm91dGluZ0RhdGEiLCJjb25jYXQiLCJsZW5ndGgiLCJoaXN0b3J5V2l0aG91dExhc3QiLCJzbGljZSIsIkhPTUUiLCJVU0VSUyIsIkdBTUVTIiwiQk9PS0lOR1MiLCJESVNUUklCVVRJT04iLCJFRElUX1VTRVJfSU5GTyIsIlVQREFURV9CT09LSU5HIiwiVVBEQVRFX0dBTUUiLCJHQU1FIiwiU1RBVFVTIiwiQ0xPU0VEIiwiT1BFTl9GT1JfTUVNQkVSUyIsIk9QRU5fRk9SX0FMTCIsIkZVTExZX0JPT0tFRCIsIlVTRVIiLCJNQVhfU0VBU09OX1RJQ0tFVFMiLCJQSE9ORV9QUkVGSVhFUyIsIlNUQVRJT05TIiwiVEVMX0FWSVYiLCJNT0RJSU4iLCJEQVRFX0FORF9USU1FIiwiZGF5cyIsIm1vbnRocyIsInllYXJzIiwiaG91cnMiLCJtaW51dGVzIiwiRElTVFJJQlVUSU9OX01FVEhPRFMiLCJFTUFJTCIsIlNNUyIsIlJFQ0lQSUVOVFNfVFlQRVMiLCJBTEwiLCJNRU1CRVJTX09OTFkiLCJCT09LRURfVE9fRVZFTlQiLCJESVNUUklCVVRJT05fVFlQRVMiLCJURU1QTEFURSIsIkNVU1RPTSIsIlRFTVBMQVRFUyIsIkVWRU5UX09QRU5fRk9SX01FTUJFUlMiLCJFVkVOVF9PUEVOX0ZPUl9BTEwiLCJDSEFOR0VfRVZFTlRfREVUQUlMUyIsIlRFQU1TIiwiSEFQT0VMX0pFUlVTQUxFTSIsImxhYmVsIiwibG9nbyIsIlJlYWN0UmV1ZHgiLCJhdXRoQWN0aW9ucyIsIlNwaW5uZXIiLCJUb3BCYXIiLCJBdXRoUGFnZSIsIkhvbWVQYWdlIiwiVXNlcnNQYWdlIiwiR2FtZXNQYWdlIiwiQm9va2luZ3NQYWdlIiwiRGlzdHJpYnV0aW9uUGFnZSIsIkVkaXRVc2VySW5mb1BhZ2UiLCJVcGRhdGVCb29raW5nUGFnZSIsIlVwZGF0ZUdhbWVQYWdlIiwibWFwU3RhdGVUb1Byb3BzIiwiY3VycmVudFBhZ2VJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBdXRoRGF0YSIsImdldFBhZ2VDb21wb25lbnQiLCJnZXRQYWdlVG9SZW5kZXIiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiY29ubmVjdCIsInVzZXJBY3Rpb25zIiwiZXZlbnRBY3Rpb25zIiwiYm9va2luZ0FjdGlvbnMiLCJsb2FkaW5nQWN0aW9ucyIsImVycm9yQWN0aW9ucyIsIm5hdmlnYXRpb25BY3Rpb25zIiwiVHJhbnNsYXRpb25zIiwiQVVUSF9FUlJPUl9DT0RFU19NQVAiLCJFUlJPUl9NRVNTQUdFUyIsIklOVkFMSURfRU1BSUwiLCJXRUFLX1BBU1NXT1JEIiwiRU1BSUxfSU5fVVNFIiwiV1JPTkdfUEFTU1dPUkQiLCJVU0VSX05PVF9GT1VORCIsInNldEF1dGhEYXRhIiwiZmV0Y2hBcHBEYXRhIiwidXNlciIsInJlYWQiLCJ0aGVuIiwiZ2V0IiwiYWxsIiwiZmV0Y2hVc2VycyIsImZldGNoRXZlbnRzIiwiZmV0Y2hCb29raW5ncyIsInVzZXJTaWduZWRPdXQiLCJzaWduT3V0Iiwic3RhcnRMb2FkaW5nIiwicmVzZXQiLCJjYXRjaCIsInJlcG9ydEVycm9yIiwiZGJFcnJvciIsImNvZGUiLCJmaW5hbGx5Iiwic3RvcExvYWRpbmciLCJsb2dpbldpdGhGYWNlYm9vayIsImxvZ2luV2l0aEdvb2dsZSIsImxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJnZXRTdGF0ZSIsImdldExvZ2dlZEluVXNlciIsInVzZXJJbmZvIiwiaXNFbXB0eSIsImNvbnNvbGUiLCJlcnJvciIsImluaXRpYWxpemVBcHAiLCJzZXRJbiIsInBhdGgiLCJkYXRhIiwicmVzb2x2ZSIsInJlamVjdCIsImRhdGFiYXNlIiwicmVmIiwic2V0Iiwib25jZSIsInNuYXBzaG90IiwidmFsIiwicHVzaCIsInVuaXF1ZUtleSIsImtleSIsInVwZGF0ZSIsInJlbW92ZSIsInByb3ZpZGVyIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhSZWRpcmVjdCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXRSZWRpcmVjdFJlc3VsdCIsInJlc3VsdCIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJVU0VSX0lORk9fS0VZUyIsIlBBVEhfTUFQIiwiVVNFUlNfSU5GTyIsIlNFQVNPTl9USUNLRVRTIiwiYnVpbGRVc2VyIiwic2Vhc29uVGlja2V0cyIsImZldGNoQWxsVXNlcnMiLCJ1c2VyUmVhZFByb21pc2VzIiwidXNlcnNJbmZvIiwidHJhbnNmb3JtIiwiYWNjIiwiaW5mbyIsImZldGNoU2luZ2xlVXNlciIsInVzZXJzUmVtb3ZlZCIsInVzZXJzUmVjZWl2ZWQiLCJmZXRjaFByb21pc2UiLCJ1cGRhdGVVc2VyIiwidXNlclVwZGF0ZVByb21pc2VzIiwicGljayIsImhhcyIsInJlbW92ZVVzZXIiLCJ1c2VyUmVtb3ZlUHJvbWlzZXMiLCJtYXAiLCJ1c2VyUGF0aCIsIkdFTkVSQUwiLCJHQU1FX0lURU0iLCJCT09LIiwiRURJVF9CT09LSU5HIiwiQ0FOQ0VMX0JPT0tJTkciLCJVU0VSU19QQUdFIiwiVElUTEUiLCJOT19VU0VSU19GT1VORCIsIkZJTFRFUiIsIlNFQVJDSCIsIlRBQlMiLCJNRU1CRVJTIiwiUkVRVUVTVFMiLCJOT05fTUVNQkVSUyIsIkFVVEhfUEFHRSIsIkZJRUxEUyIsIlBBU1NXT1JEIiwiUEFTU1dPUkRfQUdBSU4iLCJTVUJNSVRfQlROIiwiTE9HSU4iLCJSRUdJU1RFUiIsIkZPUkdPVF9QQVNTV09SRCIsIkxJTktTIiwiR09fVE9fTE9HSU4iLCJHT19UT19SRUdJU1RFUiIsIkdPX1RPX0ZPUkdPVF9QQVNTV09SRCIsIkVSUk9SUyIsIk5PVF9TQU1FX1BBU1NXT1JEIiwiSE9NRV9QQUdFIiwiTk9fT1BFTl9HQU1FUyIsIk9QRU5fR0FNRVMiLCJDTE9TRURfR0FNRVMiLCJVUERBVEVfVVNFUl9JTkZPX1BBR0UiLCJGSVJTVF9OQU1FIiwiTEFTVF9OQU1FIiwiUEhPTkVfUFJFRklYIiwiUEhPTkVfTlVNQkVSIiwiRkFWT1JJVEVfUElDS1VQX1NUQVRJT04iLCJSRVFVRVNUX0ZPUl9NRU1CRVJTSElQIiwiVE9HR0xFIiwiWUVTIiwiTk8iLCJVUERBVEVfQk9PS0lOR19QQUdFIiwiUEFJRF9TRUFUUyIsIkVYVFJBX1NFQVRTIiwiUElDS1VQX1RPR0dMRSIsIkRST1BPRkZfVE9HR0xFIiwiUElDS1VQX1NUQVRJT05fRFJPUERPV05fREVGQVVMVCIsIkdBTUVTX1BBR0UiLCJPUEVOIiwiTk9fR0FNRVNfTEFCRUwiLCJCT09LSU5HU19QQUdFIiwiUElDS1VQIiwiRFJPUE9GRiIsIlVQREFURV9HQU1FX1BBR0UiLCJHQU1FX0xBQkVMIiwiR0FNRV9QTEFDRUhPTERFUiIsIkRBVEVfTEFCRUwiLCJUSU1FIiwiR0FNRV9TVEFUVVMiLCJESVNUUklCVVRJT05fUEFHRSIsIkRJU1RSSUJVVElPTl9NRVRIT0QiLCJDT05URU5UIiwiRk9STV9GUkFNRSIsIlNVQk1JVCIsIlJFTU9WRSIsIkVWRU5UX0tFWVMiLCJFVkVOVFNfUEFUSCIsImV2ZW50UmVtb3ZlZCIsImV2ZW50c1JlY2VpdmVkIiwiY3JlYXRlRXZlbnQiLCJldmVudCIsInVwZGF0ZUV2ZW50IiwiZXZlbnRUb1VwZGF0ZSIsInJlbW92ZUV2ZW50IiwiQk9PS0lOR19EQVRBX0tFWVMiLCJCT09LSU5HU19QQVRIIiwiZmV0Y2hVc2VyQm9va2luZ3MiLCJ1c2VyQm9va2luZ3MiLCJmZXRjaEFsbEJvb2tpbmdzIiwiYm9va2luZ3NSZWNlaXZlZCIsImJvb2tpbmdzQ2FuY2VsZWQiLCJ1cGRhdGVCb29raW5nIiwiYm9va2luZ0RhdGEiLCJib29raW5nRGF0YVRvVXBkYXRlIiwiY2FuY2VsQm9va2luZyIsIm5hdmlnYXRlVG8iLCJuYXZpZ2F0ZUJhY2siLCJyZXBsYWNlIiwiY2xhc3NOYW1lcyIsIkxvZ28iLCJpc0xvYWRpbmciLCJvdmVybGF5Q2xhc3MiLCJvdmVybGF5IiwiaGlkZSIsImJvb2wiLCJ3aWR0aCIsIm9wYWNpdHkiLCJudW1iZXIiLCJoZWlnaHQiLCJyb3V0aW5nQWN0aW9ucyIsIm1lbnVQYWdlc0lkcyIsImN1cnJlbnRVc2VyIiwiZ2V0VXNlclRpdGxlIiwiZmlyc3ROYW1lIiwiY3JlYXRlSGVhZGVyIiwiYmluZCIsImNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSIsInRvZ2dsZU1lbnVWaXNpYmlsaXR5IiwiY3JlYXRlTWVudSIsImlzTWVudVZpc2libGUiLCJjcmVhdGVEZXNrdG9wTWVudUl0ZW0iLCJpdGVtQ2xhc3NlcyIsImFjdGl2ZSIsImJ1dHRvbiIsInNtYWxsIiwiY3JlYXRlTW9iaWxlTWVudUl0ZW0iLCJvbk1vYmlsZU1lbnVDbGlja2VkIiwiY3JlYXRlRGVza3RvcE1lbnUiLCJjcmVhdGVNb2JpbGVNZW51Iiwic2V0U3RhdGUiLCJsb2dpbldpdGhFbWFpbCIsInNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQiLCJpc0xvZ2luTW9kZSIsImF1dGhNb2RlIiwiaXNSZWdpc3Rlck1vZGUiLCJpc0Zvcm1WYWxpZCIsInBhc3N3b3JkQWdhaW4iLCJjcmVhdGVMb2dvIiwiY3JlYXRlU29jaWFsQnV0dG9uc1NlY3Rpb24iLCJjcmVhdGVFcnJvclNlY3Rpb24iLCJjcmVhdGVJbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZXRCdXR0b25MYWJlbCIsImNyZWF0ZVN1Ym1pdEJ1dHRvbiIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJjcmVhdGVMaW5rc1NlY3Rpb24iLCJuYXZUb0xvZ2luIiwibmF2VG9SZWdpc3RlciIsIm5hdlRvRm9yZ290UGFzc3dvcmQiLCJjcmVhdGVMb2dpblNjcmVlbkxpbmtzIiwiY3JlYXRlTk9OTG9naW5TY3JlZW5MaW5rcyIsImUiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImlzRXF1YWwiLCJvbkF1dGhNb2RlQ2hhbmdlIiwiY3JlYXRlTmF2RnVuYyIsIkV2ZW50SXRlbSIsImdhbWVzIiwibmF2aWdhdGVUb1VwZGF0ZUJvb2tpbmciLCJnYW1lSWQiLCJwYXJzZUV2ZW50RGF0ZSIsImdhbWUiLCJldmVudERhdGUiLCJEYXRlIiwieWVhciIsIm1vbnRoIiwiZGF5Iiwic2V0TW9udGgiLCJnZXRNb250aCIsImlzRnV0dXJlRXZlbnQiLCJub3ciLCJnZXRDbG9zZWRHYW1lc0FyciIsImNoYWluIiwib21pdEJ5Iiwic3RhdHVzIiwic29ydEJ5IiwiZ2FtZURhdGEiLCJnZXRPcGVuR2FtZXMiLCJjcmVhdGVNb2JpbGVOb0dhbWVzTWVzc2FnZVNlY3Rpb24iLCJjcmVhdGVHYW1lc0xpc3RzIiwib3BlbkdhbWVzIiwiY2xvc2VkR2FtZXNBcnIiLCJvbkJvb2tpbmciLCJvbkNhbmNlbEJvb2tpbmciLCJiaW5kT25HYW1lSXRlbUNsaWNrIiwiZm4iLCJjcmVhdGVPcGVuR2FtZXNMaXN0IiwiY3JlYXRlQ2xvc2VkR2FtZXNMaXN0IiwiaXNCb29raW5nRW5hYmxlZCIsIm93blByb3BzIiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsInR5cGVJZCIsImRhdGUiLCJ0aW1lIiwiaG91ciIsIm1pbnV0ZSIsImlzQm9va2luZ0FsbG93ZWQiLCJpc0Jvb2tlZCIsImhhc0luIiwiY3JlYXRlVGVhbUxvZ29zIiwiaG9tZSIsImF3YXkiLCJjcmVhdGVFdmVudFRpbWVBbmREYXRlIiwiaXNPcGVuRm9yQm9va2luZyIsImNyZWF0ZUZ1bGx5Qm9va2VkTGFiZWwiLCJjcmVhdGVCb29raW5nQnV0dG9uIiwiYm9va0J1dHRvbiIsImVkaXRCb29raW5nQnV0dG9uIiwibm9vcCIsImNyZWF0ZUJvb2tpbmdDYW5jZWxsYXRpb25CdXR0b24iLCJjcmVhdGVBY3Rpb25zQnV0dG9ucyIsImlzRnVsbHlCb29rZWQiLCJzaGFwZSIsIkxpc3RJdGVtIiwiUGFnZVRpdGxlIiwiRklMVEVSUyIsInF1ZXJ5IiwiZmlsdGVyIiwic2VhcmNoIiwibmF2VG9FZGl0VXNlciIsImNoYW5nZUZpbHRlciIsImNoYW5nZVNlYXJjaFF1ZXJ5IiwiZGVib3VuY2UiLCJjb3VudE1lbWJlcnMiLCJwaWNrQnkiLCJwaWNrVXNlcnNGdW5jdGlvbnMiLCJ2YWx1ZXMiLCJzdW1CeSIsImNvdW50UmVxdWVzdHMiLCJjb3VudE5vbk1lbWJlcnMiLCJjb3VudEFjY29yZGluZ1RvRmlsdGVycyIsImxhc3ROYW1lIiwiZ2V0VXNlclN1YnRpdGxlcyIsInBob25lUHJlZml4IiwicGhvbmVOdW1iZXIiLCJnZXRVc2VySW1hZ2UiLCJyZXF1ZXN0Rm9yTWVtYmVyc2hpcCIsImdldFZpc2libGVVc2VycyIsInNlYXJjaFF1ZXJ5Iiwic3RhcnRzV2l0aCIsImNyZWF0ZUZpbHRlciIsImhhbmRsZUZpbHRlckNoYW5nZSIsImhhbmRsZVNlYXJjaFF1ZXJ5Q2hhbmdlIiwiZmlsdGVyQ291bnRzIiwiY3JlYXRlRmlsdGVyVGFicyIsImNyZWF0ZVRleHRJbnB1dCIsImNyZWF0ZVVzZXJzTGlzdCIsInVzZXJzQXJyIiwib25Vc2VyQ2xpY2siLCJvbkl0ZW1DbGljayIsIml0ZW1zIiwidXNlckRlZiIsImNyZWF0ZU5vVXNlcnNNZXNzYWdlIiwibmV4dFByb3BzIiwidmlzaWJsZVVzZXJzQXJyIiwib25DbGljayIsImltYWdlU3JjIiwidGl0bGUiLCJzdWJ0aXRsZXMiLCJzdWJ0aXRsZSIsImFycmF5IiwiZWRpdEdhbWUiLCJjcmVhdGVHYW1lIiwiZ2V0VmlzaWJsZUdhbWVzIiwiZ2V0Q2xvc2VkR2FtZXMiLCJnZXRHYW1lU3VidGl0bGVzIiwiY3JlYXRlVGFicyIsIm9uRmlsdGVyQ2hhbmdlIiwib25UYWJDbGljayIsInNlbGVjdGVkRmlsdGVyIiwiY3JlYXRlTm9HYW1lc01lc3NhZ2UiLCJjcmVhdGVQbHVzQnV0dG9uIiwib25DcmVhdGVHYW1lIiwib25GaWx0ZXJDaGFuZ2VkIiwidmlzaWJsZUdhbWVzIiwiZmluZEtleSIsImVkaXRCb29raW5nIiwiY2hhbmdlR2FtZUlkIiwiZ2V0Qm9va2luZ1RpdGxlIiwiZ2V0Qm9va2luZ1Bob25lIiwiZ2V0Qm9va2luZ1N1YnRpdGxlcyIsImJvb2tpbmciLCJwYWlkU2VhdHMiLCJleHRyYVNlYXRzIiwicGlja1VwIiwiZHJvcE9mZiIsImdldEJvb2tpbmdJbWFnZSIsImdldFBpY2tVcE1hcCIsInRsdiIsIm1vZGlpbiIsImdldERyb3BPZmZNYXAiLCJnZXRWaXNpYmxlQm9va2luZ3MiLCJib29raW5nRm9yRXZlbnRNYXAiLCJtYXBWYWx1ZXMiLCJpc1VuZGVmaW5lZCIsImNvdW50UGlja3VwcyIsInZpc2libGVCb29raW5ncyIsInRsdlBpY2tVcHNQYWlkIiwidGx2UGlja1Vwc0V4dHJhIiwibW9kaWluUGlja1Vwc1BhaWQiLCJtb2RpaW5QaWNrVXBzRXh0cmEiLCJjb3VudERyb3BPZmZzIiwidGx2RHJvcE9mZnNQYWlkIiwidGx2RHJvcE9mZnNFeHRyYSIsIm1vZGlpbkRyb3BPZmZzUGFpZCIsIm1vZGlpbkRyb3BPZmZzRXh0cmEiLCJjcmVhdGVQYWdlVGl0bGUiLCJjcmVhdGVGaWx0ZXJTZWN0aW9uIiwib25HYW1lSWRDaGFuZ2UiLCJ0YWIiLCJvblNlbGVjdENoYW5nZSIsImNyZWF0ZUJvb2tpbmdUYWJsZUZvclByaW50IiwidGx2Qm9va2luZ3MiLCJtb2RpaW5Cb29raW5ncyIsImlzUGlja1VwIiwiY3JlYXRlVGl0bGVSb3ciLCJjcmVhdGVUTFZCb29raW5nc1RpdGxlIiwiY3JlYXRlVExWQm9va2luZ3NSb3dzIiwiY3JlYXRlTW9kaWluQm9va2luZ3NUaXRsZSIsImNyZWF0ZU1vZGlpbkJvb2tpbmdzUm93cyIsImNyZWF0ZVBpY2tVcHNMaXN0Iiwib25Cb29raW5nQ2xpY2siLCJ0bHZQaWNrVXAiLCJtb2RpaW5QaWNrVXAiLCJ0bHZQaWNrVXBzSXRlbXMiLCJtaWRpaW5QaWNrVXBzSXRlbXMiLCJjcmVhdGVUbHZQaWNrdXBzTGlzdCIsImNyZWF0ZU1vZGlpblBpY2t1cHNMaXN0IiwiY3JlYXRlRHJvcE9mZkxpc3QiLCJ0bHZEcm9wT2ZmIiwibW9kaWluRHJvcE9mZiIsInRsdkRyb3BPZmZJdGVtcyIsIm1pZGlpbkRyb3BPZmZJdGVtcyIsImNyZWF0ZVRsdkRyb3BPZmZMaXN0IiwiY3JlYXRlTW9kaWluRHJvcE9mZkxpc3QiLCJpc1JlcXVyaWVkIiwiZGlzdHJpYnV0aW9uQWN0aW9ucyIsInNlbmRUZW1wbGF0ZUVtYWlsIiwicmVjaXBpZW50cyIsInRlbXBsYXRlSWQiLCJzdWJzdGl0dXRpb25zIiwic2VuZEN1c3RvbUVtYWlsIiwic3ViamVjdCIsImNvbnRlbnQiLCJzZW5kU01TIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZGlzdHJpYnV0aW9uTWV0aG9kIiwicmVjaXBpZW50c1R5cGUiLCJkaXN0cmlidXRpb25UeXBlIiwibGFzdCIsImtleXMiLCJnZXRNZW1iZXJzVXNlcnNPbmx5IiwiZ2V0Qm9va2VkVXNlcnNPbmx5IiwiZ2V0UmVjaXBpZW50cyIsInJlY2lwaWVudHNVc2VycyIsInN1YnNjcmliZU1haWwiLCJnZXRVc2Vyc0VtYWlscyIsImdldEV2ZW50U3Vic3RpdHV0aW9ucyIsInByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQiLCJnZXRVc2Vyc1Bob25lTnVtYmVycyIsImNyZWF0ZURpc3RyaWJ1dGlvbk1ldGhvZElucHV0Iiwib25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2UiLCJjcmVhdGVSZWNpcGllbnRzVHlwZUlucHV0Iiwib25SZWNpcGllbnRzVHlwZUNoYW5nZSIsImNyZWF0ZURpc3RyaWJ1dGlvblR5cGVJbnB1dCIsIm9uRGlzdHJpYnV0aW9uVHlwZUNoYW5nZSIsImNyZWF0ZVRlbXBsYXRlU2VsZWN0aW9uIiwib25UZW1wbGF0ZUlkQ2hhbmdlIiwiY3JlYXRlR2FtZXNTZWxlY3Rpb24iLCJvbkdhbWVDaGFuZ2UiLCJvcHRpb25zIiwiY3JlYXRlQ3VzdG9tVGl0bGUiLCJvblN1YmplY3RDaGFuZ2VkIiwiY3JlYXRlQ3VzdG9tQ29udGVudCIsIm9uQ29udGVudENoYW5nZWQiLCJzaG91bGRTaG93RGlzdHJpYnV0aW9uVHlwZUlucHV0Iiwic2hvdWxkU2hvd1RlbXBsYXRlU2VsZWN0aW9uIiwic2hvdWxkQ3JlYXRlQ3VzdG9tVGl0bGUiLCJzaG91bGRTaG93Q3VzdG9tQ29udGVudCIsIkVNQUlMUyIsInRvIiwiVXNlckZvcm0iLCJ1aWRUb0VkaXQiLCJnb0hvbWVBZnRlckVkaXRpbmciLCJuYXZpZ2F0ZUhvbWUiLCJFZGl0b3JVc2VySW5mb1BhZ2UiLCJvbkZvcm1DbG9zZSIsIkZvcm1GcmFtZSIsImVtcHR5VXNlciIsInN0YXRpb24iLCJzdWJzY3JpYmVTTVMiLCJnZXRFbXB0eVVzZXJJbmZvIiwiYXNzaWduIiwiaXNBZG1pbk1vZGUiLCJhbGxvd1VzZXJSZW1vdmUiLCJjcmVhdGVBZG1pblNlY3Rpb24iLCJvbk51bWJlckNoYW5nZSIsInRpbWVzIiwiaSIsImNyZWF0ZVVzZXJOYW1lSW5wdXRzIiwib25UZXh0Q2hhbmdlIiwiY3JlYXRlRW1haWxJbnB1dCIsImNyZWF0ZVBob25lTnVtYmVySW5wdXRzIiwicHJlZml4IiwiY3JlYXRlUGlja3VwU3RhdGlvblJvdyIsIm9uQm9vbGVhbkNoYW5nZSIsImNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCIsImNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQiLCJkaXNwbGF5IiwiY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzIiwiaGFzQWxsUmVxdWlyZWRJbmZvIiwicmVxdWlyZWRJbmZvIiwic29tZSIsImhhc1ZhbGlkUGhvbmVOdW1iZXIiLCJoYXNSZXF1ZXN0Rm9yTWVtYmVyc2hpcFByb3BlcnR5Iiwib25LZXlQcmVzcyIsImNoZWNrZWQiLCJCb29sZWFuIiwicGFyc2VJbnQiLCJpc0Z1bmN0aW9uIiwib25DbG9zZSIsIm9uUmVtb3ZlIiwiY2xvbmUiLCJjcmVhdGVSZW1vdmVCdXR0b24iLCJjaGlsZHJlbiIsImVtcHR5Qm9va2luZyIsInJvdXRpbmdQYXJhbXMiLCJjcmVhdGVQYXNzZW5nZXJzU2VjdGlvbiIsIm9uUGFpZFNlYXRDaGFuZ2UiLCJvbkV4dHJhU2VhdENoYW5nZSIsImNyZWF0ZVBhaWRTZWF0c0lucHV0IiwiY3JlYXRlRXh0cmFTZWF0c0lucHV0IiwiY3JlYXRlUGlja3VwU2VjdGlvbiIsInBpY2tVcEVuYWJsZWQiLCJwaWNrVXBTdGF0aW9uIiwidG9nZ2xlUGlja1VwIiwib25QaWNrdXBTdGF0aW9uQ2hhbmdlIiwiY3JlYXRlRHJvcG9mZlNlY3Rpb24iLCJkcm9wT2ZmRW5hYmxlZCIsImRyb3BPZmZTdGF0aW9uIiwidG9nZ2xlRHJvcE9mZiIsIm9uRHJvcE9mZlN0YXRpb25DaGFuZ2UiLCJvblBpY2tVcFN0YXRpb25DaGFuZ2UiLCJib29raW5nVG9VcGRhdGUiLCJib29raW5nSW5pdGlhbFN0YXRlIiwiZGVmYXVsdHMiLCJERUZBVUxUX0dBTUVfTE9HTyIsImVtcHR5RXZlbnQiLCJwYXJzZURhdGVWYWx1ZSIsImpvaW4iLCJwYXJzZVRpbWVWYWx1ZSIsInVwZGF0ZUdhbWUiLCJyZW1vdmVHYW1lIiwiY3JlYXRlR2FtZUltYWdlIiwiY3JlYXRlR2FtZVRpdGxlU2VjdGlvbiIsIm9uVHlwZUlkQ2hhbmdlIiwidGVhbURhdGEiLCJpZCIsImNyZWF0ZUluZm9XaXRob3V0U3VwcG9ydGVkSW5wdXRzIiwib25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZSIsImNyZWF0ZUluZm9XaXRoU3VwcG9ydGVkSW5wdXRzIiwib25EYXRlQ2hhbmdlIiwib25UaW1lQ2hhbmdlIiwiY3JlYXRlR2FtZVN0YXR1c1NlY3Rpb24iLCJvbkdhbWVTdGF0dXNDaGFuZ2UiLCJzcGxpdCIsImRhdGVJbnB1dFN1cHBvcnRlZCIsInRpbWVJbnB1dFN1cHBvcnRlZCIsImNoZWNrSWZIdG1sNVN1cHBvcnRlZCIsInN1cHBvcnRlZElucHV0VHlwZXMiLCJ0ZXN0UmVzdWx0IiwidGVzdFN0cmluZyIsImVhY2giLCJpbnB1dFR5cGUiLCJpbnB1dCIsImlzU3VwcG9ydGVkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7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cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMzODE2YjAzMmRhMzExYzQ1MjExIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9jb21wb25lbnRzL3Jvb3QnO1xuXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4vdXRpbHMvY2xpZW50REInO1xuXG5jbGllbnREQi5pbml0aWFsaXplKGNvbmZpZy5maXJlYmFzZSk7XG5cblJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJvb3QpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBtYWtlU3RvcmUgPSByZXF1aXJlKCcuLi9yZWR1eC9tYWtlU3RvcmUnKTtcblxuY29uc3QgQXBwID0gcmVxdWlyZSgnLi9hcHAnKTtcblxuY2xhc3MgUm9vdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0UmVkdXguUHJvdmlkZXIgc3RvcmU9e21ha2VTdG9yZSgpfT5cbiAgICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8L1JlYWN0UmVkdXguUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvb3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcm9vdC5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgZXJyb3JSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvZXJyb3JSZWR1Y2VyJztcbmltcG9ydCBsb2FkaW5nUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyJztcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy91c2Vyc1JlZHVjZXInO1xuaW1wb3J0IGV2ZW50c1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyJztcbmltcG9ydCBib29raW5nc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXInO1xuaW1wb3J0IGF1dGhEYXRhUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlcic7XG5cbmNvbnN0IHJvdXRpbmdSZWR1Y2VyID0gcmVxdWlyZSgnLi9yZWR1Y2Vycy9yb3V0aW5nUmVkdWNlcicpO1xuXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcbiAgY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHJvdXRpbmc6IHJvdXRpbmdSZWR1Y2VyLFxuICAgIGF1dGhEYXRhOiBhdXRoRGF0YVJlZHVjZXIsXG4gICAgZXJyb3JNc2c6IGVycm9yUmVkdWNlcixcbiAgICBsb2FkaW5nOiBsb2FkaW5nUmVkdWNlcixcbiAgICB1c2VyczogdXNlcnNSZWR1Y2VyLFxuICAgIGV2ZW50czogZXZlbnRzUmVkdWNlcixcbiAgICBib29raW5nczogYm9va2luZ3NSZWR1Y2VyXG4gIH0pO1xuXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUoXG4gICAgdGh1bmtcbiAgKTtcblxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHVuZGVmaW5lZCwgbWlkZGxld2FyZSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9tYWtlU3RvcmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlZHV4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBSRVBPUlRfRVJST1IgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gJyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVQT1JUX0VSUk9SOlxuICAgICAgcmV0dXJuIGFjdGlvbi5tZXNzYWdlO1xuICAgIGNhc2UgU1RBUlRfTE9BRElORzpcbiAgICAgIHJldHVybiAnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2Vycm9yUmVkdWNlci5qcyIsImV4cG9ydCBjb25zdCBTVEFSVF9MT0FESU5HID0gJ1NUQVJUX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFNUT1BfTE9BRElORyA9ICdTVE9QX0xPQURJTkcnO1xuXG5leHBvcnQgY29uc3QgUkVQT1JUX0VSUk9SID0gJ1JFUE9SVF9FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBTRVRfQVVUSF9EQVRBID0gJ1NFVF9BVVRIX0RBVEEnO1xuZXhwb3J0IGNvbnN0IFNJR05fT1VUID0gJ1NJR05fT1VUJztcblxuZXhwb3J0IGNvbnN0IFVTRVJTX1JFQ0VJVkVEID0gJ1VTRVJTX1JFQ0VJVkVEJztcbmV4cG9ydCBjb25zdCBVU0VSX1JFTU9WRUQgPSAnVVNFUl9SRU1PVkVEJztcblxuZXhwb3J0IGNvbnN0IEVWRU5UU19SRUNFSVZFRCA9ICdFVkVOVFNfUkVDRUlWRUQnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1JFTU9WRUQgPSAnRVZFTlRfUkVNT1ZFRCc7XG5cbmV4cG9ydCBjb25zdCBCT09LSU5HU19SRUNFSVZFRCA9ICdCT09LSU5HU19SRUNFSVZFRCc7XG5leHBvcnQgY29uc3QgQk9PS0lOR19DQU5DRUxFRCA9ICdCT09LSU5HX0NBTkNFTEVEJztcblxuZXhwb3J0IGNvbnN0IE5BVklHQVRFX1RPID0gJ05BVklHQVRFX1RPJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsImltcG9ydCB7IFNUQVJUX0xPQURJTkcsIFNUT1BfTE9BRElORyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGluZ1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNUQVJUX0xPQURJTkc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIFNUT1BfTE9BRElORzpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVVNFUlNfUkVDRUlWRUQsIFVTRVJfUkVNT1ZFRCwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVVNFUlNfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi51c2Vycyk7XG4gICAgY2FzZSBVU0VSX1JFTU9WRUQ6XG4gICAgICByZXR1cm4gXy5vbWl0KHN0YXRlLCBhY3Rpb24udWlkKTtcbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIl9cIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRVZFTlRTX1JFQ0VJVkVELCBFVkVOVF9SRU1PVkVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRVZFTlRTX1JFQ0VJVkVEOlxuICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24uZXZlbnRzKTtcbiAgICBjYXNlIEVWRU5UX1JFTU9WRUQ6XG4gICAgICByZXR1cm4gXy5vbWl0KHN0YXRlLCBhY3Rpb24uZXZlbnRJZCk7XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQk9PS0lOR1NfUkVDRUlWRUQsIEJPT0tJTkdfQ0FOQ0VMRUQsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudHNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBCT09LSU5HU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLmJvb2tpbmdzKTtcbiAgICBjYXNlIEJPT0tJTkdfQ0FOQ0VMRUQ6IHtcbiAgICAgIGNvbnN0IGNsb25lZEJvb2tpbmdzID0gXy5jbG9uZURlZXAoc3RhdGUpO1xuICAgICAgZGVsZXRlIGNsb25lZEJvb2tpbmdzW2FjdGlvbi51aWRdW2FjdGlvbi5ldmVudElkXTtcbiAgICAgIGlmIChfLnNpemUoY2xvbmVkQm9va2luZ3NbYWN0aW9uLnVpZF0pID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBjbG9uZWRCb29raW5nc1thY3Rpb24udWlkXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZWRCb29raW5ncztcbiAgICB9XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJpbXBvcnQgeyBTRVRfQVVUSF9EQVRBLCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoRGF0YVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9BVVRIX0RBVEE6XG4gICAgICByZXR1cm4geyB1aWQ6IGFjdGlvbi51aWQsIGVtYWlsOiBhY3Rpb24uZW1haWwsIHBob3RvVVJMOiBhY3Rpb24ucGhvdG9VUkwsIGlzQWRtaW46IGFjdGlvbi5pc0FkbWluIH07XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoRGF0YVJlZHVjZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlZHV4VGh1bms7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWR1eFRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0aW5nRGF0YShwYWdlSWQsIHBhcmFtcykge1xuICByZXR1cm4geyBwYWdlSWQsIHBhcmFtczogcGFyYW1zIHx8IHt9IH1cbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjdXJyZW50OiBjcmVhdGVSb3V0aW5nRGF0YShDb25zdGFudHMuUk9VVElORy5QQUdFUy5BVVRILCB7fSksXG4gIGhpc3Rvcnk6IFtcbiAgICBjcmVhdGVSb3V0aW5nRGF0YShDb25zdGFudHMuUk9VVElORy5QQUdFUy5BVVRILCB7fSlcbiAgXVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3RhdGUgPSBzdGF0ZSB8fCBpbml0aWFsU3RhdGU7XG4gIGFjdGlvbiA9IGFjdGlvbiB8fCB7fTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTkFWSUdBVEVfVE8nOiB7XG4gICAgICBjb25zdCByb3V0aW5nRGF0YSA9IGNyZWF0ZVJvdXRpbmdEYXRhKGFjdGlvbi5wYWdlSWQsIGFjdGlvbi5wYXJhbXMpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiByb3V0aW5nRGF0YSxcbiAgICAgICAgaGlzdG9yeTogc3RhdGUuaGlzdG9yeS5jb25jYXQoWyByb3V0aW5nRGF0YSBdKVxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSAnTkFWSUdBVEVfQkFDSyc6IHtcbiAgICAgIGlmIChzdGF0ZS5oaXN0b3J5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgaGlzdG9yeVdpdGhvdXRMYXN0ID0gc3RhdGUuaGlzdG9yeS5zbGljZSgwLCAtMSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY3VycmVudDogaGlzdG9yeVdpdGhvdXRMYXN0LnNsaWNlKC0xKVswXSxcbiAgICAgICAgICBoaXN0b3J5OiBoaXN0b3J5V2l0aG91dExhc3RcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICdSRVBMQUNFX1JPVVRJTkcnOiB7XG4gICAgICBjb25zdCBoaXN0b3J5V2l0aG91dExhc3QgPSBzdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIC0xKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBjcmVhdGVSb3V0aW5nRGF0YShhY3Rpb24ucGFnZUlkIHx8IHN0YXRlLmN1cnJlbnQucGFnZUlkLCBhY3Rpb24ucGFyYW1zIHx8IHN0YXRlLmN1cnJlbnQucGFyYW1zKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgICAgIGhpc3Rvcnk6IGhpc3RvcnlXaXRob3V0TGFzdC5jb25jYXQoW2N1cnJlbnRdKVxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSAnUkVTRVRfUk9VVElORyc6IHtcbiAgICAgIGNvbnN0IHJvdXRpbmdEYXRhID0gY3JlYXRlUm91dGluZ0RhdGEoYWN0aW9uLnBhZ2VJZCwgYWN0aW9uLnBhcmFtcyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnQ6IHJvdXRpbmdEYXRhLFxuICAgICAgICBoaXN0b3J5OiBbIHJvdXRpbmdEYXRhIF1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9yb3V0aW5nUmVkdWNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBST1VUSU5HOiB7XG4gICAgUEFHRVM6IHtcbiAgICAgIEhPTUU6ICdob21lJyxcbiAgICAgIEFVVEg6ICdhdXRoJyxcbiAgICAgIFVTRVJTOiAndXNlcnMnLFxuICAgICAgR0FNRVM6ICdnYW1lcycsXG4gICAgICBCT09LSU5HUzogJ2Jvb2tpbmdzJyxcbiAgICAgIERJU1RSSUJVVElPTjogJ2Rpc3RyaWJ1dGlvbicsXG4gICAgICBFRElUX1VTRVJfSU5GTzogJ2VkaXRVc2VySW5mbycsXG4gICAgICBVUERBVEVfQk9PS0lORzogJ3VwZGF0ZUJvb2tpbmcnLFxuICAgICAgVVBEQVRFX0dBTUU6ICd1cGRhdGVHYW1lJ1xuICAgIH1cbiAgfSxcbiAgR0FNRToge1xuICAgIFNUQVRVUzoge1xuICAgICAgQ0xPU0VEOiAnY2xvc2VkJyxcbiAgICAgIE9QRU5fRk9SX01FTUJFUlM6ICdvcGVuRm9yTWVtYmVycycsXG4gICAgICBPUEVOX0ZPUl9BTEw6ICdvcGVuRm9yQWxsJyxcbiAgICAgIEZVTExZX0JPT0tFRDogJ2Z1bGx5Qm9va2VkJ1xuICAgIH1cbiAgfSxcbiAgVVNFUjoge1xuICAgIE1BWF9TRUFTT05fVElDS0VUUzogNyxcbiAgICBQSE9ORV9QUkVGSVhFUzogWycwNTAnLCAnMDUyJywgJzA1MycsICcwNTQnLCAnMDU1JywgJzA1NycsICcwNTgnXSxcbiAgfSxcbiAgU1RBVElPTlM6IHtcbiAgICBURUxfQVZJVjogJ3RsdicsXG4gICAgTU9ESUlOOiAnbW9kaWluJ1xuICB9LFxuICBEQVRFX0FORF9USU1FOiB7XG4gICAgZGF5czogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcyNScsICcyNicsICcyNycsICcyOCcsICcyOScsICczMCcsICczMSddLFxuICAgIG1vbnRoczogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddLFxuICAgIHllYXJzOiBbJzE2JywgJzE3J10sXG4gICAgaG91cnM6IFsnMDAnLCAnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnXSxcbiAgICBtaW51dGVzOiBbJzAwJywgJzA1JywgJzEwJywgJzE1JywgJzIwJywgJzI1JywgJzMwJywgJzM1JywgJzQwJywgJzQ1JywgJzUwJywgJzU1J11cbiAgfSxcbiAgRElTVFJJQlVUSU9OOiB7XG4gICAgRElTVFJJQlVUSU9OX01FVEhPRFM6IHtcbiAgICAgIEVNQUlMOiAnZW1haWwnLFxuICAgICAgU01TOiAnc21zJ1xuICAgIH0sXG4gICAgUkVDSVBJRU5UU19UWVBFUzoge1xuICAgICAgQUxMOiAnYWxsJyxcbiAgICAgIE1FTUJFUlNfT05MWTogJ21lbWJlcnNPbmx5JyxcbiAgICAgIEJPT0tFRF9UT19FVkVOVDogJ2Jvb2tlZFRvRXZlbnQnXG4gICAgfSxcbiAgICBESVNUUklCVVRJT05fVFlQRVM6IHtcbiAgICAgIFRFTVBMQVRFOiAndGVtcGxhdGUnLFxuICAgICAgQ1VTVE9NOiAnY3VzdG9tJ1xuICAgIH0sXG4gICAgVEVNUExBVEVTOiB7XG4gICAgICBFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTOiAnNGZhYjZiOTItYmY2MS00OGYxLWIxM2ItYmM3MDJlZDc4Njk1JyxcbiAgICAgIEVWRU5UX09QRU5fRk9SX0FMTDogJ2RiZTNlMGU0LWJiMGUtNDFhZC1iZjEyLTViZTY0YTMwZjNiNycsXG4gICAgICBDSEFOR0VfRVZFTlRfREVUQUlMUzogJzE3MGZjZDRmLWRmMmUtNDRkZC1iNzYwLTY5M2QwNGZkZDA3YydcbiAgICB9XG4gIH0sXG4gIFRFQU1TOiB7XG4gICAgSEFQT0VMX0pFUlVTQUxFTToge1xuICAgICAgbGFiZWw6ICfXlNek15XXotecINeZ16jXldep15zXmdedJyxcbiAgICAgIGxvZ286ICdodHRwOi8vaGFwb2VsLmNvLmlsL3NpdGVzL2RlZmF1bHQvZmlsZXMvbG9nbzEyMHgxMjAucG5nJ1xuICAgIH0sXG4gICAgJ2hhcG9lbC10bHYnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29faGFwb2VsdGEucG5nJyxcbiAgICAgIGxhYmVsOiAn15TXpNeV16LXnCDXqtecINeQ15HXmdeRJ1xuICAgIH0sXG4gICAgJ21hY2NhYmktdGx2Jzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX21hY2NhYmkucG5nJyxcbiAgICAgIGxhYmVsOiAn157Xm9eR15kg16rXnCDXkNeR15nXkSdcbiAgICB9LFxuICAgICdoZXJ6ZWxpeWEnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fc2hhcm9uLnBuZycsXG4gICAgICBsYWJlbDogJ9eR16DXmSDXlNeo16bXnNeZ15QnXG4gICAgfSxcbiAgICAna2lyeWF0LWdhdCc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9JbWFnZXMvdGVhbXMvYmlnR2F0LnBuZycsXG4gICAgICBsYWJlbDogJ9ee15vXkdeZINen16jXmdeqINeS16onXG4gICAgfSxcbiAgICAnZ2lsYm9hJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX0dhbGlsLnBuZycsXG4gICAgICBsYWJlbDogJ9eS15zXmdecL9eS15zXkdeV16InXG4gICAgfSxcbiAgICAnbmFoYXJpeWEnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fbmFoYXJpYS5wbmcnLFxuICAgICAgbGFiZWw6ICfXoteZ16jXldeg15kg16DXlNeo15nXlCdcbiAgICB9LFxuICAgICdob2xvbic6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvYXJ0aWNsZXMvbG9nb19oaC5wbmcnLFxuICAgICAgbGFiZWw6ICfXlNek15XXotecINeX15XXnNeV158nXG4gICAgfSxcbiAgICAnYXNoZG9kJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2FzaGRvZC5wbmcnLFxuICAgICAgbGFiZWw6ICfXnteb15HXmSDXkNep15PXldeTJ1xuICAgIH0sXG4gICAgJ2hhaWZhJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2hhaWZhLnBuZycsXG4gICAgICBsYWJlbDogJ9ee15vXkdeZINeX15nXpNeUJ1xuICAgIH0sXG4gICAgJ3Jpc2hvbic6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19yaXNob24ucG5nJyxcbiAgICAgIGxhYmVsOiAn157Xm9eR15kg16jXkNep15XXnyDXnNem15nXldefJ1xuICAgIH0sXG4gICAgJ2VpbGF0Jzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2VpbGF0LnBuZycsXG4gICAgICBsYWJlbDogJ9eU16TXldei15wg15DXmdec16onXG4gICAgfSxcbiAgICAnbGp1YmxqYW5hJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvOC84ZS9Vbmlvbl9vbGltcGlqYS5wbmcvMTQwcHgtVW5pb25fb2xpbXBpamEucG5nJyxcbiAgICAgIGxhYmVsOiAn15zXldeR15zXmdeQ16DXlCdcbiAgICB9LFxuICAgICd2YWxlbmNpYSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vc2FtdmFucm9zc29tLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8xMC92YWxlbmNpYS1iYXNrZXQxLWxvZ28uanBnJyxcbiAgICAgIGxhYmVsOiAn15XXnNeg16HXmdeUJ1xuICAgIH0sXG4gICAgJ2t1YmFuJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMC8wNC9Mb2tvbW90aXZfS3ViYW5fbG9nby5wbmcvMjAwcHgtTG9rb21vdGl2X0t1YmFuX2xvZ28ucG5nJyxcbiAgICAgIGxhYmVsOiAn15zXlden15XXnteV15jXmdeRINen15XXkdeQ158nXG4gICAgfSxcbiAgICAnZnVlbmxhYnJhZGEnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi8xLzEzL0JhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcvMTEwcHgtQmFsb25jZXN0b2Z1ZW5sYWJyYWRhLmpwZycsXG4gICAgICBsYWJlbDogJ9ek15XXkNeg15zXkdeo15PXlCdcbiAgICB9LFxuICAgICd1bG0nOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL25hY2h3dWNocy5iYnUwMS5jb20vbW9kdWxlcy9tb2RfYmJ1bmV3c2ZsYXNoL2Fzc2V0cy9pbWFnZXMvbm9pbWFnZV90aHVtYi5qcGcnLFxuICAgICAgbGFiZWw6ICfXkNeV15zXnSdcbiAgICB9LFxuICAgICd2aWxuYSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzcvNzUvQkNfTGlldHV2b3NfUnl0YXNfbG9nby5zdmcvOTA3cHgtQkNfTGlldHV2b3NfUnl0YXNfbG9nby5zdmcucG5nJyxcbiAgICAgIGxhYmVsOiAn16jXmdeY15DXoSDXldeZ15zXoNeUJ1xuICAgIH0sXG4gICAgJ25vdmdvcm9kJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly9vbHltcGlha29zLWxpdmUuZ3IvaW1nL3RlYW1zL05pemhueSUyME5vdmdvcm9kLnBuZycsXG4gICAgICBsYWJlbDogJ9eg15nXltez16DXmSdcbiAgICB9LFxuICAgICd6ZW5pdCc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yNS9GQ19aZW5pdF8xX3N0YXJfMjAxNV9sb2dvLnBuZy8yMjBweC1GQ19aZW5pdF8xX3N0YXJfMjAxNV9sb2dvLnBuZycsXG4gICAgICBsYWJlbDogJ9eW16DXmdeYJ1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZXVkeCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IGF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucycpO1xuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5cbmNvbnN0IFNwaW5uZXIgPSByZXF1aXJlKCcuL3NwaW5uZXInKTtcbmNvbnN0IFRvcEJhciA9IHJlcXVpcmUoJy4vdG9wQmFyJyk7XG5jb25zdCBBdXRoUGFnZSA9IHJlcXVpcmUoJy4vYXV0aFBhZ2UnKTtcbmNvbnN0IEhvbWVQYWdlID0gcmVxdWlyZSgnLi9ob21lUGFnZScpO1xuY29uc3QgVXNlcnNQYWdlID0gcmVxdWlyZSgnLi91c2Vyc1BhZ2UnKTtcbmNvbnN0IEdhbWVzUGFnZSA9IHJlcXVpcmUoJy4vZ2FtZXNQYWdlJyk7XG5jb25zdCBCb29raW5nc1BhZ2UgPSByZXF1aXJlKCcuL2Jvb2tpbmdzUGFnZScpO1xuY29uc3QgRGlzdHJpYnV0aW9uUGFnZSA9IHJlcXVpcmUoJy4vZGlzdHJpYnV0aW9uUGFnZScpO1xuY29uc3QgRWRpdFVzZXJJbmZvUGFnZSA9IHJlcXVpcmUoJy4vZWRpdFVzZXJJbmZvUGFnZScpO1xuY29uc3QgVXBkYXRlQm9va2luZ1BhZ2UgPSByZXF1aXJlKCcuL3VwZGF0ZUJvb2tpbmdQYWdlJyk7XG5jb25zdCBVcGRhdGVHYW1lUGFnZSA9IHJlcXVpcmUoJy4vdXBkYXRlR2FtZVBhZ2UnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2FwcC5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF1dGhEYXRhOiBzdGF0ZS5hdXRoRGF0YSxcbiAgICAgICAgY3VycmVudFBhZ2VJZDogc3RhdGUucm91dGluZy5jdXJyZW50LnBhZ2VJZFxuICAgIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgICBmZXRjaEF1dGhEYXRhOiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5mZXRjaEF1dGhEYXRhKCkpXG59KTtcblxuZnVuY3Rpb24gZ2V0UGFnZUNvbXBvbmVudChjdXJyZW50UGFnZUlkKSB7XG4gICAgc3dpdGNoIChjdXJyZW50UGFnZUlkKSB7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRTpcbiAgICAgICAgICAgIHJldHVybiAoIDxIb21lUGFnZSBrZXk9J2hvbWUtcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5VU0VSUzpcbiAgICAgICAgICAgIHJldHVybiAoIDxVc2Vyc1BhZ2Uga2V5PSd1c2Vycy1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkdBTUVTOlxuICAgICAgICAgICAgcmV0dXJuICggPEdhbWVzUGFnZSBrZXk9J2dhbWVzLXBhZ2UnIC8+ICk7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQk9PS0lOR1M6XG4gICAgICAgICAgICByZXR1cm4gKCA8Qm9va2luZ3NQYWdlIGtleT0nYm9va2luZ3MtcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5ESVNUUklCVVRJT046XG4gICAgICAgICAgICByZXR1cm4gKCA8RGlzdHJpYnV0aW9uUGFnZSBrZXk9J2Rpc3RyaWJ1dGlvbi1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkVESVRfVVNFUl9JTkZPOlxuICAgICAgICAgICAgcmV0dXJuICggPEVkaXRVc2VySW5mb1BhZ2Uga2V5PSdlZGl0VXNlckluZm8tcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5VUERBVEVfQk9PS0lORzpcbiAgICAgICAgICAgIHJldHVybiAoIDxVcGRhdGVCb29raW5nUGFnZSBrZXk9J3VwZGF0ZUJvb2tpbmctcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5VUERBVEVfR0FNRTpcbiAgICAgICAgICAgIHJldHVybiAoIDxVcGRhdGVHYW1lUGFnZSBrZXk9J3VwZGF0ZUdhbWUtcGFnZScgLz4gKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhZ2VUb1JlbmRlcihhdXRoRGF0YSwgY3VycmVudFBhZ2VJZCkge1xuICAgIGlmICghYXV0aERhdGEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEF1dGhQYWdlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRvcEJhciAvPlxuICAgICAgICAgICAgeyBnZXRQYWdlQ29tcG9uZW50KGN1cnJlbnRQYWdlSWQpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hBdXRoRGF0YSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZSBsYXJnZS02IHNtYWxsLTEyIHNtYWxsLWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgICB7IGdldFBhZ2VUb1JlbmRlcih0aGlzLnByb3BzLmF1dGhEYXRhLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWQpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgICBhdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjdXJyZW50UGFnZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZmV0Y2hBdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJldWR4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwLmpzeCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU0VUX0FVVEhfREFUQSwgU0lHTl9PVVQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi91c2VyQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBldmVudEFjdGlvbnMgZnJvbSAnLi9ldmVudEFjdGlvbnMnO1xuaW1wb3J0ICogYXMgYm9va2luZ0FjdGlvbnMgZnJvbSAnLi9ib29raW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uQWN0aW9ucyBmcm9tICcuL3JvdXRpbmdBY3Rpb25zJztcblxuaW1wb3J0IHVwZGF0ZVBob3RvVXJsRml4ZXIgZnJvbSAnLi4vLi4vZGF0YUZpeGVycy91cGRhdGVQaG90b1VybEZpeGVyJztcblxuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1JfQ09ERVNfTUFQID0ge1xuICAnYXV0aC9pbnZhbGlkLWVtYWlsJzogVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguSU5WQUxJRF9FTUFJTCxcbiAgJ2F1dGgvd2Vhay1wYXNzd29yZCc6IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILldFQUtfUEFTU1dPUkQsXG4gICdhdXRoL2VtYWlsLWFscmVhZHktaW4tdXNlJzogVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguRU1BSUxfSU5fVVNFLFxuICAnYXV0aC93cm9uZy1wYXNzd29yZCc6IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILldST05HX1BBU1NXT1JELFxuICAnYXV0aC9hY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsJzogVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguRU1BSUxfSU5fVVNFLFxuICAnYXV0aC91c2VyLW5vdC1mb3VuZCc6IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILlVTRVJfTk9UX0ZPVU5EXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QXV0aERhdGEgPSAodWlkLCBlbWFpbCwgcGhvdG9VUkwsIGlzQWRtaW4pID0+ICh7XG4gIHR5cGU6IFNFVF9BVVRIX0RBVEEsXG4gIHVpZCxcbiAgZW1haWwsXG4gIHBob3RvVVJMLFxuICBpc0FkbWluXG59KTtcblxuY29uc3QgZmV0Y2hBcHBEYXRhID0gKGRpc3BhdGNoLCB1c2VyKSA9PlxuICBjbGllbnREQi5yZWFkKCdhZG1pbnMvJyArIHVzZXIudWlkKVxuICAgIC50aGVuKGlzQWRtaW4gPT4gZGlzcGF0Y2goc2V0QXV0aERhdGEodXNlci51aWQsIHVzZXIuZW1haWwsIF8uZ2V0KHVzZXIsIFsncHJvdmlkZXJEYXRhJywgMCwgJ3Bob3RvVVJMJ10pLCAhIWlzQWRtaW4pKSlcbiAgICAudGhlbigoKSA9PiBQcm9taXNlLmFsbChbXG4gICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5mZXRjaFVzZXJzKCkpLFxuICAgICAgZGlzcGF0Y2goZXZlbnRBY3Rpb25zLmZldGNoRXZlbnRzKCkpLFxuICAgICAgZGlzcGF0Y2goYm9va2luZ0FjdGlvbnMuZmV0Y2hCb29raW5ncygpKVxuICAgIF0pKTtcblxuZXhwb3J0IGNvbnN0IHVzZXJTaWduZWRPdXQgPSAoKSA9PiAoe1xuICB0eXBlOiBTSUdOX09VVFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnNpZ25PdXQoKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJTaWduZWRPdXQoKSkpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMucmVzZXQoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQVVUSCkpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEZhY2Vib29rID0gKCkgPT4gKCkgPT4gY2xpZW50REIubG9naW5XaXRoRmFjZWJvb2soKTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEdvb2dsZSA9ICgpID0+ICgpID0+IGNsaWVudERCLmxvZ2luV2l0aEdvb2dsZSgpO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5sb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbih1c2VyID0+IGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcikpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMucmVzZXQoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRSkpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHVzZXIgPT4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5yZXNldChDb25zdGFudHMuUk9VVElORy5QQUdFUy5FRElUX1VTRVJfSU5GTykpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBlbWFpbCA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbClcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhEYXRhID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLmdldExvZ2dlZEluVXNlcigpXG4gICAgLnRoZW4odXNlciA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKVxuICAgICAgICAgIC50aGVuKCgpID0+IHVwZGF0ZVBob3RvVXJsRml4ZXIoZGlzcGF0Y2gsIGdldFN0YXRlKCkpKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gZ2V0U3RhdGUoKS51c2Vyc1t1c2VyLnVpZF07XG4gICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHVzZXJJbmZvKSkge1xuICAgICAgICAgICAgICBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5yZXNldChDb25zdGFudHMuUk9VVElORy5QQUdFUy5FRElUX1VTRVJfSU5GTywgeyB1aWQ6IHVzZXIudWlkIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLnJlc2V0KENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkhPTUUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihkYkVycm9yKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpXG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemUgPSBjb25maWcgPT4ge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SW4gPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5zZXQoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZWFkID0gcGF0aCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9uY2UoJ3ZhbHVlJylcbiAgICAudGhlbihzbmFwc2hvdCA9PiByZXNvbHZlKHNuYXBzaG90LnZhbCgpKSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcHVzaCA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IHVuaXF1ZUtleSA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnB1c2goKS5rZXk7XG4gIHNldEluKHBhdGggKyAnLycgKyB1bmlxdWVLZXksIGRhdGEpXG4gICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSh1bmlxdWVLZXkpKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS51cGRhdGUoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSBwYXRoID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkucmVtb3ZlKClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhHb29nbGUgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChwcm92aWRlcilcbiAgICAudGhlbihyZXNvbHZlKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRmFjZWJvb2sgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKVxuICAgIC50aGVuKHJlc29sdmUpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBlbWFpbCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluVXNlciA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmdldFJlZGlyZWN0UmVzdWx0KClcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0LnVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2UgPSB1c2VyID0+IHtcbiAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkucmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgICAgIHJlc29sdmUodXNlcik7XG4gICAgICAgIH07XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmlyZWJhc2VcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBVU0VSU19SRUNFSVZFRCwgVVNFUl9SRU1PVkVEIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnYmx1ZWJpcmQnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IFVTRVJfSU5GT19LRVlTID0gWydlbWFpbCcsICdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAncGhvbmVQcmVmaXgnLCAncGhvbmVOdW1iZXInLCAncmVxdWVzdEZvck1lbWJlcnNoaXAnLCAnc3RhdGlvbicsICdzdWJzY3JpYmVTTVMnLCAnc3Vic2NyaWJlTWFpbCcsICdwaG90b1VSTCddO1xuY29uc3QgUEFUSF9NQVAgPSB7XG4gIFVTRVJTX0lORk86ICd1c2Vyc0luZm8nLFxuICBTRUFTT05fVElDS0VUUzogJ3NlYXNvblRpY2tldHMnLFxuICBCT09LSU5HUzogJ2Jvb2tpbmdzJ1xufTtcblxuY29uc3QgYnVpbGRVc2VyID0gKHVzZXJJbmZvLCBzZWFzb25UaWNrZXRzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBfLm1lcmdlKHt9LCB1c2VySW5mbyk7XG4gIGlmIChzZWFzb25UaWNrZXRzKSB7XG4gICAgXy5tZXJnZSh1c2VyLCB7IHNlYXNvblRpY2tldHMgfSk7XG4gIH1cbiAgcmV0dXJuIHVzZXI7XG59O1xuXG5jb25zdCBmZXRjaEFsbFVzZXJzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUylcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJzSW5mbywgc2Vhc29uVGlja2V0c10pID0+XG4gICAgICBfLnRyYW5zZm9ybSh1c2Vyc0luZm8sIChhY2MsIGluZm8sIHVpZCkgPT4ge1xuICAgICAgICBhY2NbdWlkXSA9IGJ1aWxkVXNlcihpbmZvLCBzZWFzb25UaWNrZXRzICYmIHNlYXNvblRpY2tldHNbdWlkXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIH0sIHt9KVxuICAgICk7XG59O1xuXG5jb25zdCBmZXRjaFNpbmdsZVVzZXIgPSB1aWQgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyArICcvJyArIHVpZCksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUyArICcvJyArIHVpZClcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJJbmZvLCBzZWFzb25UaWNrZXRzXSkgPT4ge1xuICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgIHJldHVybiB7IFt1aWRdOiBidWlsZFVzZXIodXNlckluZm8sIHNlYXNvblRpY2tldHMpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1JlbW92ZWQgPSB1aWQgPT4gKHtcbiAgdHlwZTogVVNFUl9SRU1PVkVELFxuICB1aWRcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlcnNSZWNlaXZlZCA9IHVzZXJzID0+ICh7XG4gIHR5cGU6IFVTRVJTX1JFQ0VJVkVELFxuICB1c2Vyc1xufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBjb25zdCB1aWQgPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ3VpZCddKTtcbiAgY29uc3QgaXNBZG1pbiA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAnaXNBZG1pbiddKTtcbiAgY29uc3QgZmV0Y2hQcm9taXNlID0gaXNBZG1pbiA/IGZldGNoQWxsVXNlcnMoKSA6IGZldGNoU2luZ2xlVXNlcih1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBpZiAodXNlcnMpIHtcbiAgICAgICAgZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh1c2VycykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAodWlkLCB1c2VyKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCBpc0FkbWluID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICdpc0FkbWluJ10pO1xuXG4gIGNvbnN0IHVzZXJVcGRhdGVQcm9taXNlcyA9IFtcbiAgICBjbGllbnREQi51cGRhdGUoJ3VzZXJzSW5mby8nICsgdWlkLCBfLnBpY2sodXNlciwgVVNFUl9JTkZPX0tFWVMpKVxuICBdO1xuXG4gIGlmIChpc0FkbWluICYmIF8uaGFzKHVzZXIsICdzZWFzb25UaWNrZXRzJykpIHtcbiAgICB1c2VyVXBkYXRlUHJvbWlzZXMucHVzaChjbGllbnREQi5zZXRJbignc2Vhc29uVGlja2V0cy8nICsgdWlkLCB1c2VyLnNlYXNvblRpY2tldHMpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyVXBkYXRlUHJvbWlzZXMpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh7IFt1aWRdOiB1c2VyIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyID0gdWlkID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IHVzZXJSZW1vdmVQcm9taXNlcyA9IF8ubWFwKFBBVEhfTUFQLCB1c2VyUGF0aCA9PiBjbGllbnREQi5yZW1vdmUoYCR7dXNlclBhdGh9LyR7dWlkfWApKTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlbW92ZVByb21pc2VzKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJzUmVtb3ZlZCh1aWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBTVE9QX0xPQURJTkcgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+ICh7XG4gIHR5cGU6IFNUQVJUX0xPQURJTkdcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiAoe1xuICB0eXBlOiBTVE9QX0xPQURJTkdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2xvYWRpbmdBY3Rpb25zLmpzIiwiaW1wb3J0IHsgUkVQT1JUX0VSUk9SIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi8uLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuZXhwb3J0IGNvbnN0IHJlcG9ydEVycm9yID0gKG1lc3NhZ2UgPSBUcmFuc2xhdGlvbnMuRVJST1JfTUVTU0FHRVMuR0VORVJBTCkgPT4gKHtcbiAgdHlwZTogUkVQT1JUX0VSUk9SLFxuICBtZXNzYWdlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9lcnJvckFjdGlvbnMuanMiLCJjb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUk9VVElORzoge1xuICAgIFBBR0VTOiB7XG4gICAgICBbQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRV06ICfXk9ejINeU15HXmdeqJyxcbiAgICAgIFtDb25zdGFudHMuUk9VVElORy5QQUdFUy5VU0VSU106ICfXntep16rXntep15nXnScsXG4gICAgICBbQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuR0FNRVNdOiAn157XqdeX16fXmdedJyxcbiAgICAgIFtDb25zdGFudHMuUk9VVElORy5QQUdFUy5CT09LSU5HU106ICfXqNep15XXnteZ150g15zXlNeh16LXldeqJyxcbiAgICAgIFtDb25zdGFudHMuUk9VVElORy5QQUdFUy5ESVNUUklCVVRJT05dOiAn16jXqdeZ157XqiDXqtek15XXpteUJyxcbiAgICB9XG4gIH0sXG4gIFNUQVRJT05TOiB7XG4gICAgW0NvbnN0YW50cy5TVEFUSU9OUy5URUxfQVZJVl06ICfXqtecINeQ15HXmdeRJyxcbiAgICBbQ29uc3RhbnRzLlNUQVRJT05TLk1PRElJTl06ICfXpteV157XqiDXqdeZ15zXqidcbiAgfSxcbiAgR0FNRToge1xuICAgIFNUQVRVUzoge1xuICAgICAgW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRURdOiAn15TXlNeo16nXnteUINeh15LXldeo15QnLFxuICAgICAgW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTXTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec157XoNeV15nXmdedJyxcbiAgICAgIFtDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfQUxMXTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec15vXldec150nLFxuICAgICAgW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5GVUxMWV9CT09LRURdOiAn15TXlNeh16LXlCDXntec15DXlCcsXG4gICAgfVxuICB9LFxuICBHQU1FX0lURU06IHtcbiAgICBCT09LOiAn15TXqNep150nLFxuICAgIEVESVRfQk9PS0lORzogJ9ei16jXldeaJyxcbiAgICBDQU5DRUxfQk9PS0lORzogJ9eR15jXnCDXlNeo16nXnteUJ1xuICB9LFxuICBVU0VSU19QQUdFOiB7XG4gICAgVElUTEU6ICfXntep16rXntep15nXnScsXG4gICAgTk9fVVNFUlNfRk9VTkQ6ICfXnNeQINeg157XpteQ15Ug16jXqdeV157XldeqJyxcbiAgICBGSUxURVI6IHtcbiAgICAgIFNFQVJDSDogJ9eX15nXpNeV16knLFxuICAgICAgVEFCUzoge1xuICAgICAgICBBTEw6ICfXm9eV15zXnScsXG4gICAgICAgIE1FTUJFUlM6ICfXnteg15XXmdeZ150nLFxuICAgICAgICBSRVFVRVNUUzogJ9eR16fXqdeUINec157XoNeV15knLFxuICAgICAgICBOT05fTUVNQkVSUzogJ9eX15Mg16TXotee15nXmdedJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgQVVUSF9QQUdFOiB7XG4gICAgRklFTERTOiB7XG4gICAgICBFTUFJTDogJ9eT15XXkNeoINeQ15zXp9eY16jXldeg15knLFxuICAgICAgUEFTU1dPUkQ6ICfXodeZ16HXnteQJyxcbiAgICAgIFBBU1NXT1JEX0FHQUlOOiAn16nXldeRINeh15nXodee15AnXG4gICAgfSxcbiAgICBTVUJNSVRfQlROOiB7XG4gICAgICBMT0dJTjogJ9eU16rXl9eR16gnLFxuICAgICAgUkVHSVNURVI6ICfXlNeZ16jXqdedJyxcbiAgICAgIEZPUkdPVF9QQVNTV09SRDogJ9ep15zXlyDXnNeZ16DXpyDXnNeQ15nXpNeV16Eg16HXmdeh157XkCdcbiAgICB9LFxuICAgIExJTktTOiB7XG4gICAgICBHT19UT19MT0dJTjogJ9eZ16kg15zXmiDXl9ep15HXldefPycsXG4gICAgICBHT19UT19SRUdJU1RFUjogJ9eQ15nXnyDXnNeaINeX16nXkdeV158/JyxcbiAgICAgIEdPX1RPX0ZPUkdPVF9QQVNTV09SRDogJ9ep15vXl9eqINeh15nXodee15A/J1xuICAgIH0sXG4gICAgRVJST1JTOiB7XG4gICAgICBOT1RfU0FNRV9QQVNTV09SRDogJ9eh15nXodee15DXldeqINem16jXmdeb15XXqiDXnNeU15nXldeqINeW15TXldeqJ1xuICAgIH1cbiAgfSxcbiAgSE9NRV9QQUdFOiB7XG4gICAgTk9fT1BFTl9HQU1FUzogJ9eQ15nXnyDXlNeh16LXldeqINek16rXldeX15XXqicsXG4gICAgT1BFTl9HQU1FUzogJ9eU16HXoteV16og16TXqteV15fXldeqJyxcbiAgICBDTE9TRURfR0FNRVM6ICfXlNeU16HXoteV16og15TXkdeQ15XXqidcbiAgfSxcbiAgVVBEQVRFX1VTRVJfSU5GT19QQUdFOiB7XG4gICAgVElUTEU6ICfXpNeo15jXmdedINeQ15nXqdeZ15nXnScsXG4gICAgRklSU1RfTkFNRTogJ9ep150nLFxuICAgIExBU1RfTkFNRTogJ9ep150g157Xqdek15fXlCcsXG4gICAgRU1BSUw6ICfXk9eV15DXqCDXkNec16fXmNeo15XXoNeZJyxcbiAgICBQSE9ORV9QUkVGSVg6ICfXp9eZ15PXldee16onLFxuICAgIFBIT05FX05VTUJFUjogJ9eY15zXpNeV158g16DXmdeZ15MnLFxuICAgIEZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OOiAn16rXl9eg16og16LXnNeZ15Qg157Xldei15PXpNeqJyxcbiAgICBSRVFVRVNUX0ZPUl9NRU1CRVJTSElQOiAn157XoteV16DXmdeZ158g15HXnteg15XXmT8nLFxuICAgIERJU1RSSUJVVElPTjoge1xuICAgICAgRU1BSUw6ICfXqtek15XXpteqINeQ15nXnteZ15nXnCcsXG4gICAgICBTTVM6ICfXqtek15XXpteqIFNNUydcbiAgICB9LFxuICAgIFRPR0dMRToge1xuICAgICAgWUVTOiAn15vXnycsXG4gICAgICBOTzogJ9ec15AnXG4gICAgfVxuICB9LFxuICBVUERBVEVfQk9PS0lOR19QQUdFOiB7XG4gICAgVElUTEU6ICfXoteo15nXm9eqINeU16jXqdee15QnLFxuICAgIFBBSURfU0VBVFM6ICfXm9ee15XXqiDXnteg15XXmdeZ150nLFxuICAgIEVYVFJBX1NFQVRTOiAn16DXldeh16LXmdedINeR16rXqdec15XXnScsXG4gICAgUElDS1VQX1RPR0dMRTogJ9eU15zXldeaJyxcbiAgICBEUk9QT0ZGX1RPR0dMRTogJ9eX15bXldeoJyxcbiAgICBQSUNLVVBfU1RBVElPTl9EUk9QRE9XTl9ERUZBVUxUOiAn15HXl9eoJ1xuICB9LFxuICBHQU1FU19QQUdFOiB7XG4gICAgVElUTEU6ICfXntep15fXp9eZ150nLFxuICAgIFRBQlM6IHtcbiAgICAgIEFMTDogJ9eb15XXnNedJyxcbiAgICAgIE9QRU46ICfXpNeq15XXl9eZ150nLFxuICAgICAgQ0xPU0VEOiAn16HXkteV16jXmdedJ1xuICAgIH0sXG4gICAgTk9fR0FNRVNfTEFCRUw6ICfXnNeQINeg157XpteQ15Ug157XqdeX16fXmdedJ1xuICB9LFxuICBCT09LSU5HU19QQUdFOiB7XG4gICAgVElUTEU6ICfXqNep15XXnteZ150g15zXlNeh16LXlCcsXG4gICAgVEFCUzoge1xuICAgICAgUElDS1VQOiAn15TXnNeV15onLFxuICAgICAgRFJPUE9GRjogJ9eX15bXldeoJ1xuICAgIH1cbiAgfSxcbiAgVVBEQVRFX0dBTUVfUEFHRToge1xuICAgIFRJVExFOiAn15TXqNep157XlCDXnNeU16HXoteUJyxcbiAgICBHQU1FX0xBQkVMOiAn16nXnSDXlNee16nXl9enJyxcbiAgICBHQU1FX1BMQUNFSE9MREVSOiAn15HXl9eoINee16nXl9enJyxcbiAgICBEQVRFX0xBQkVMOiAn16rXkNeo15nXmicsXG4gICAgVElNRTogJ9ep16LXlCcsXG4gICAgR0FNRV9TVEFUVVM6ICfXodeY15jXldehINeU16HXoteUJ1xuICB9LFxuICBESVNUUklCVVRJT05fUEFHRToge1xuICAgIFRJVExFOiAn16jXqdeZ157XqiDXqtek15XXpteUJyxcbiAgICBESVNUUklCVVRJT05fTUVUSE9EOiB7XG4gICAgICBUSVRMRTogJ9ep15zXmdeX15Qg15HXkNee16bXoteV16onLFxuICAgICAgRU1BSUw6ICfXkNeZ157XmdeZ15wnLFxuICAgICAgU01TOiAn16HXntehJ1xuICAgIH0sXG4gICAgUkVDSVBJRU5UU19UWVBFUzoge1xuICAgICAgVElUTEU6ICfXqdec15cg15DXnCcsXG4gICAgICBBTEw6ICfXm9eV15zXnScsXG4gICAgICBNRU1CRVJTX09OTFk6ICfXnteg15XXmdeZ150g15HXnNeR15MnLFxuICAgICAgQk9PS0VEX1RPX0VWRU5UOiAn16jXqdeV157XmdedINec15TXodei15QnXG4gICAgfSxcbiAgICBESVNUUklCVVRJT05fVFlQRVM6IHtcbiAgICAgIFRJVExFOiAn16bXldeo16og16nXnNeZ15fXlCcsXG4gICAgICBURU1QTEFURTogJ9eq15HXoNeZ16onLFxuICAgICAgQ1VTVE9NOiAn15jXp9eh15gg15fXldek16nXmSdcbiAgICB9LFxuICAgIFRFTVBMQVRFUzoge1xuICAgICAgVElUTEU6ICfXkdeX15nXqNeqINeq15HXoNeZ16onLFxuICAgICAgRVZFTlRfT1BFTl9GT1JfTUVNQkVSUzogJ9ek16rXmdeX16og15TXqNep157XlCDXnNee16DXldeZ15nXnScsXG4gICAgICBFVkVOVF9PUEVOX0ZPUl9BTEw6ICfXpNeq15nXl9eqINeU16jXqdee15Qg15zXm9eV15zXnScsXG4gICAgICBDSEFOR0VfRVZFTlRfREVUQUlMUzogJ9ep15nXoNeV15kg15HXpNeo15jXmSDXlNeU16HXoteUJ1xuICAgIH0sXG4gICAgR0FNRVM6IHtcbiAgICAgIFRJVExFOiAn15HXl9eZ16jXqiDXntep15fXpydcbiAgICB9LFxuICAgIENVU1RPTToge1xuICAgICAgVElUTEU6IHtcbiAgICAgICAgVElUTEU6ICfXoNeV16nXkCdcbiAgICAgIH0sXG4gICAgICBDT05URU5UOiB7XG4gICAgICAgIFRJVExFOiAnJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgRk9STV9GUkFNRToge1xuICAgIFNVQk1JVDogJ9ep157XldeoJyxcbiAgICBSRU1PVkU6ICfXnteX16cnXG4gIH0sXG4gIEVSUk9SX01FU1NBR0VTOiB7XG4gICAgR0VORVJBTDogJ9ep15LXmdeQ16og157Xoteo15vXqicsXG4gICAgQVVUSDoge1xuICAgICAgSU5WQUxJRF9FTUFJTDogJ9eQ15nXnteZ15nXnCDXnNeQINeq16fXmdefJyxcbiAgICAgIFdFQUtfUEFTU1dPUkQ6ICfXlNeh15nXodee15Ag16bXqNeZ15vXlCDXnNeU15vXmdecINec16TXl9eV16ogNiDXqteV15XXmdedJyxcbiAgICAgIEVNQUlMX0lOX1VTRTogJ9eQ15nXnteZ15nXnCDXkdep15nXnteV16knLFxuICAgICAgV1JPTkdfUEFTU1dPUkQ6ICfXodeZ16HXnteQINec15Ag16DXm9eV16DXlCcsXG4gICAgICBOT1RfU0FNRV9QQVNTV09SRDogJ9eU16HXmdeh157XkNeV16og16bXqNeZ15vXldeqINec15TXmdeV16og15bXlNeV16onLFxuICAgICAgVVNFUl9OT1RfRk9VTkQ6ICfXm9eq15XXkdeqINeU15DXmdee15nXmdecINec15Ag16DXntem15DXlCdcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBFVkVOVFNfUkVDRUlWRUQsIEVWRU5UX1JFTU9WRUQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBFVkVOVF9LRVlTID0gWyd0eXBlSWQnLCAnZGF5JywgJ21vbnRoJywgJ3llYXInLCAnaG91cicsICdtaW51dGUnLCAnc3RhdHVzJ107XG5jb25zdCBFVkVOVFNfUEFUSCA9ICdldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZXZlbnRSZW1vdmVkID0gZXZlbnRJZCA9PiAoe1xuICB0eXBlOiBFVkVOVF9SRU1PVkVELFxuICBldmVudElkXG59KTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50c1JlY2VpdmVkID0gZXZlbnRzID0+ICh7XG4gIHR5cGU6IEVWRU5UU19SRUNFSVZFRCxcbiAgZXZlbnRzXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXZlbnRzID0gKCkgPT4gZGlzcGF0Y2ggPT5cbiAgY2xpZW50REIucmVhZChFVkVOVFNfUEFUSClcbiAgICAudGhlbihldmVudHMgPT4ge1xuICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoZXZlbnRzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV2ZW50ID0gZXZlbnQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goRVZFTlRTX1BBVEgsIGV2ZW50KVxuICAgIC50aGVuKGV2ZW50SWQgPT4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoeyBbZXZlbnRJZF06IGV2ZW50IH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFdmVudCA9IChldmVudElkLCBldmVudCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgZXZlbnRUb1VwZGF0ZSA9IF8ucGljayhldmVudCwgRVZFTlRfS0VZUyk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnVwZGF0ZSgnZXZlbnRzLycgKyBldmVudElkLCBldmVudFRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGV2ZW50c1JlY2VpdmVkKHsgW2V2ZW50SWRdOiBldmVudFRvVXBkYXRlIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFdmVudCA9IGV2ZW50SWQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnJlbW92ZShgJHtFVkVOVFNfUEFUSH0vJHtldmVudElkfWApXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goZXZlbnRSZW1vdmVkKGV2ZW50SWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCT09LSU5HU19SRUNFSVZFRCwgQk9PS0lOR19DQU5DRUxFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IEJPT0tJTkdfREFUQV9LRVlTID0gWydwYWlkU2VhdHMnLCAnZXh0cmFTZWF0cycsICdwaWNrVXAnLCAnZHJvcE9mZiddO1xuY29uc3QgQk9PS0lOR1NfUEFUSCA9ICdib29raW5ncyc7XG5cbmNvbnN0IGZldGNoVXNlckJvb2tpbmdzID0gdWlkID0+XG4gIGNsaWVudERCLnJlYWQoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9YClcbiAgICAudGhlbih1c2VyQm9va2luZ3MgPT4ge1xuICAgICAgaWYgKHVzZXJCb29raW5ncykge1xuICAgICAgICByZXR1cm4geyBbdWlkXTogdXNlckJvb2tpbmdzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuY29uc3QgZmV0Y2hBbGxCb29raW5ncyA9ICgpID0+XG4gIGNsaWVudERCLnJlYWQoQk9PS0lOR1NfUEFUSCk7XG5cbmV4cG9ydCBjb25zdCBib29raW5nc1JlY2VpdmVkID0gYm9va2luZ3MgPT4gKHtcbiAgdHlwZTogQk9PS0lOR1NfUkVDRUlWRUQsXG4gIGJvb2tpbmdzXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvb2tpbmdzQ2FuY2VsZWQgPSAodWlkLCBldmVudElkKSA9PiAoe1xuICB0eXBlOiBCT09LSU5HX0NBTkNFTEVELFxuICB1aWQsXG4gIGV2ZW50SWRcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCb29raW5ncyA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3QgdWlkID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICd1aWQnXSk7XG4gIGNvbnN0IGlzQWRtaW4gPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ2lzQWRtaW4nXSk7XG4gIGNvbnN0IGZldGNoUHJvbWlzZSA9IGlzQWRtaW4gPyBmZXRjaEFsbEJvb2tpbmdzKCkgOiBmZXRjaFVzZXJCb29raW5ncyh1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbihib29raW5ncyA9PiB7XG4gICAgICBpZiAoYm9va2luZ3MpIHtcbiAgICAgICAgZGlzcGF0Y2goYm9va2luZ3NSZWNlaXZlZChib29raW5ncykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJvb2tpbmcgPSAodWlkLCBldmVudElkLCBib29raW5nRGF0YSkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgYm9va2luZ0RhdGFUb1VwZGF0ZSA9IF8ucGljayhib29raW5nRGF0YSwgQk9PS0lOR19EQVRBX0tFWVMpO1xuXG4gIHJldHVybiBjbGllbnREQi51cGRhdGUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gLCBib29raW5nRGF0YVRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzUmVjZWl2ZWQoeyBbdWlkXTogeyBbZXZlbnRJZF06IGJvb2tpbmdEYXRhVG9VcGRhdGUgfSB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FuY2VsQm9va2luZyA9ICh1aWQsIGV2ZW50SWQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5yZW1vdmUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzQ2FuY2VsZWQodWlkLCBldmVudElkKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwiZnVuY3Rpb24gbmF2aWdhdGVUbyhwYWdlSWQsIHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTkFWSUdBVEVfVE8nLFxuICAgIHBhZ2VJZCxcbiAgICBwYXJhbXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbmF2aWdhdGVCYWNrKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdOQVZJR0FURV9CQUNLJ1xuICB9O1xufVxuXG5mdW5jdGlvbiByZXNldChwYWdlSWQsIHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnUkVTRVRfUk9VVElORycsXG4gICAgcGFnZUlkLFxuICAgIHBhcmFtc1xuICB9O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlKHBhZ2VJZCwgcGFyYW1zKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1JFUExBQ0VfUk9VVElORycsXG4gICAgcGFnZUlkLFxuICAgIHBhcmFtc1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgbmF2aWdhdGVUbywgbmF2aWdhdGVCYWNrLCByZXBsYWNlLCByZXNldCB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zLmpzIiwiaW1wb3J0IHsgdXBkYXRlVXNlciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkaXNwYXRjaCwgc3RhdGUpIHtcbiAgY29uc3QgdWlkID0gc3RhdGUuYXV0aERhdGEudWlkO1xuICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuXG4gIGlmICh1c2Vyc1t1aWRdKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKHVwZGF0ZVVzZXIodWlkLCB7IHBob3RvVVJMOiBzdGF0ZS5hdXRoRGF0YS5waG90b1VSTCB9KSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YUZpeGVycy91cGRhdGVQaG90b1VybEZpeGVyLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvc3Bpbm5lci5zY3NzJyk7XG5cbmNvbnN0IExvZ28gPSByZXF1aXJlKCcuL2xvZ28uanN4Jyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IHN0YXRlLmxvYWRpbmdcbiAgICB9O1xufVxuXG5jbGFzcyBTcGlubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlDbGFzcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGU6ICF0aGlzLnByb3BzLmlzTG9hZGluZ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5Q2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIGhlaWdodD17ODB9IHdpZHRoPXs4MH0gb3BhY2l0eT17MC43fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3Bpbm5lci5Qcm9wVHlwZXMgPSB7XG4gICAgaXNMb2FkaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTcGlubmVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zcGlubmVyLmpzeCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIHtcXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDA7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAubG9nbyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyID4gZGl2IHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgbWFyZ2luOiAwIDJweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAuYm91bmNlMSB7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMyczsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgLmJvdW5jZTIge1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xcbiAgMCUsIDgwJSwgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcXG4gIDAlLCA4MCUsIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgTG9nbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gaGVpZ2h0PXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gb3BhY2l0eT17dGhpcy5wcm9wcy5vcGFjaXR5fSB2aWV3Qm94PVwiMCAwIDQwMCA0MDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAwLjAwIDAuMDAgTCAxOTUuMzMgMC4wMCBDIDE3MS40NiAxLjE0IDE0Ny41OCA1LjQyIDEyNS40MyAxNC42MCBDIDcwLjg4IDM2LjMxIDI3LjEwIDgzLjMzIDkuNTcgMTM5LjQwIEMgMy43NCAxNTcuNDUgMS4xNiAxNzYuMzcgMC4wMCAxOTUuMjUgTCAwLjAwIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk1LjMzIDAuMDAgTCAyMDcuNTIgMC4wMCBDIDIxNi43MSAxLjE5IDIyNi4wMiAxLjM1IDIzNS4xMSAzLjIyIEMgMjY5LjMwIDkuMTYgMzAxLjc4IDI0LjM3IDMyOC4zNyA0Ni42NSBDIDM2NS45OSA3Ny45MSAzOTEuNjYgMTIzLjQyIDM5OC4wOSAxNzEuOTkgQyAzOTkuMDQgMTc4Ljc1IDM5OS41NiAxODUuNTYgNDAwLjAwIDE5Mi4zNyBMIDQwMC4wMCAyMDguNzMgQyAzOTguNTcgMjMzLjg2IDM5My4yOSAyNTguOTAgMzgyLjgwIDI4MS44NiBDIDM1OC44MiAzMzUuNjggMzA5Ljk1IDM3Ny44MyAyNTIuOTkgMzkzLjExIEMgMjM5LjA4IDM5Ny4xMCAyMjQuNjggMzk4Ljg5IDIxMC4yOSA0MDAuMDAgTCAxOTEuMzYgNDAwLjAwIEMgMTY2LjE3IDM5OC43NiAxNDEuMTMgMzkzLjE0IDExOC4xNiAzODIuNjQgQyA2Ny40MCAzNTkuNzYgMjYuODEgMzE1LjA1IDkuODkgMjYxLjkwIEMgMy45NyAyNDQuMzMgMS42MiAyMjUuODUgMC4wMCAyMDcuNDYgTCAwLjAwIDE5NS4yNSBDIDEuMTYgMTc2LjM3IDMuNzQgMTU3LjQ1IDkuNTcgMTM5LjQwIEMgMjcuMTAgODMuMzMgNzAuODggMzYuMzEgMTI1LjQzIDE0LjYwIEMgMTQ3LjU4IDUuNDIgMTcxLjQ2IDEuMTQgMTk1LjMzIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA3LjUyIDAuMDAgTCA0MDAuMDAgMC4wMCBMIDQwMC4wMCAxOTIuMzcgQyAzOTkuNTYgMTg1LjU2IDM5OS4wNCAxNzguNzUgMzk4LjA5IDE3MS45OSBDIDM5MS42NiAxMjMuNDIgMzY1Ljk5IDc3LjkxIDMyOC4zNyA0Ni42NSBDIDMwMS43OCAyNC4zNyAyNjkuMzAgOS4xNiAyMzUuMTEgMy4yMiBDIDIyNi4wMiAxLjM1IDIxNi43MSAxLjE5IDIwNy41MiAwLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE5Mi4xMSA4LjEzIEMgMjIyLjM1IDYuODAgMjUyLjk1IDEyLjc0IDI4MC40MiAyNS41MCBDIDMyNy4wNCA0Ni43MiAzNjQuMzUgODcuMzkgMzgxLjMxIDEzNS43NSBDIDM5OC40MCAxODMuMTcgMzk1LjY1IDIzNy4zMyAzNzMuNzcgMjgyLjc0IEMgMzU2LjIzIDMxOS44MyAzMjYuMzMgMzUwLjk3IDI5MC4wNCAzNzAuMDkgQyAyNDMuOTIgMzk0LjgyIDE4Ny41MiAzOTkuMjIgMTM4LjA3IDM4Mi4xMSBDIDk1LjM4IDM2Ny42NSA1OC4xNCAzMzcuNjAgMzUuMjEgMjk4Ljc2IEMgMTQuNjUgMjY0LjkyIDUuMzQgMjI0LjQ2IDguNTQgMTg1LjAzIEMgMTAuMzcgMTYxLjIwIDE2LjY4IDEzNy43MCAyNy4yNCAxMTYuMjYgQyA0OC44MiA3MS4xNyA4OC45MiAzNS40OCAxMzYuMDQgMTguODkgQyAxNTQuMDUgMTIuNTQgMTczLjAyIDguODcgMTkyLjExIDguMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTk2LjIzIDIxLjM1IEMgMTk3LjYwIDE4LjkzIDE5OC45NSAxNi41MCAyMDAuMzcgMTQuMTEgQyAyMDEuNzIgMTYuNDggMjAzLjA0IDE4Ljg2IDIwNC4zMyAyMS4yNyBDIDIwNi45NSAyMS44MCAyMDkuNTkgMjIuMjIgMjEyLjE4IDIyLjg5IEMgMjEwLjcwIDI1LjE2IDIwOC42NSAyNi45OCAyMDYuODIgMjguOTYgQyAyMDcuMjIgMzEuNjUgMjA3LjUzIDM0LjM1IDIwNy44NiAzNy4wNCBDIDIwNS4zMCAzNS44NiAyMDIuNzQgMzQuNjcgMjAwLjE0IDMzLjU4IEMgMTk3Ljc0IDM0LjgyIDE5NS4zMiAzNi4wNCAxOTIuNzUgMzYuODcgQyAxOTMuMTYgMzQuMjIgMTkzLjU0IDMxLjU2IDE5My44NCAyOC44OSBDIDE5MS45MyAyNi45MCAxOTAuMDMgMjQuOTAgMTg4LjE2IDIyLjg4IEMgMTkwLjgzIDIyLjMxIDE5My41MiAyMS43OCAxOTYuMjMgMjEuMzUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTgxLjEyIDQ0LjM4IEMgMjEyLjI2IDQwLjYwIDI0NC41MyA0Ni4xOSAyNzIuMzYgNjAuNzYgQyAzMTAuOTMgODAuNTYgMzQwLjUxIDExNy4wNiAzNTEuNjIgMTU5LjAwIEMgMzU4LjgxIDE4NS4xMCAzNTguODIgMjEzLjA4IDM1Mi4yMiAyMzkuMzAgTCAzNTMuNzggMjM5LjQ5IEMgMzUzLjM2IDIzOS40OSAzNTIuNTMgMjM5LjQ4IDM1Mi4xMSAyMzkuNDggQyAzNDUuMDIgMjY3LjM5IDMyOS45MCAyOTMuMjEgMzA5LjA4IDMxMy4xMSBDIDI5Mi4yMSAzMjkuNjYgMjcxLjM2IDM0MS45OSAyNDguOTYgMzQ5LjQwIEMgMjIwLjM1IDM1OC42OSAxODkuMDcgMzU5LjYzIDE1OS45OSAzNTEuOTEgQyAxMzIuMzkgMzQ0LjYzIDEwNi44MyAzMjkuNjkgODcuMTEgMzA5LjA0IEMgNTguNjMgMjc5Ljc0IDQyLjM1IDIzOC44OSA0My4zMSAxOTguMDAgQyA0My4zOCAxNTEuNTQgNjYuMDkgMTA2LjExIDEwMi40MyA3Ny4zNiBDIDEyNC45NSA1OS4zOSAxNTIuNDggNDcuNzIgMTgxLjEyIDQ0LjM4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExMi43NCA3Ni43MyBDIDEzNC41NCA2MS40NiAxNjAuMzEgNTEuNTUgMTg2LjkzIDQ5LjU1IEMgMjA2LjQ1IDQ4LjIxIDIyNi4zNyA0OS42MSAyNDUuMDYgNTUuNjggQyAyNzAuOTkgNjMuNzkgMjk0LjY5IDc4Ljk4IDMxMi43NSA5OS4yOCBDIDMzMC4wMCAxMTguMzMgMzQyLjA4IDE0MS45NCAzNDcuODMgMTY2Ljk2IEMgMzUzLjg1IDE5NS4xNSAzNTIuMjkgMjI1LjEyIDM0Mi4yNSAyNTIuMjIgQyAzMzcuMjQgMjY1LjU2IDMzMC40NyAyNzguMjUgMzIyLjA1IDI4OS43NiBDIDMxOC44MCAyODYuODAgMzE5LjY4IDI4Mi40MiAzMTkuNzIgMjc4LjUwIEMgMzE5LjE2IDI3OS44MSAzMTguNjMgMjgxLjEzIDMxOC4xMyAyODIuNDYgQyAzMTcuMzMgMjgwLjE4IDMxNi41NSAyNzcuODUgMzE1LjEyIDI3NS44OCBDIDMxNS41MiAyNzcuMTYgMzE2LjMxIDI3OS43MiAzMTYuNzEgMjgxLjAwIEMgMzE1LjMxIDI3OS43MyAzMTMuODAgMjc4LjY0IDMxMi4xOCAyNzcuNzIgQyAzMTMuMjIgMjc5LjM2IDMxNC40NCAyODAuODcgMzE1LjY3IDI4Mi4zOSBDIDMxNC4yMyAyODEuNzcgMzEyLjc4IDI4MS4yMCAzMTEuMzAgMjgwLjY5IEMgMzEyLjM1IDI4MS44NyAzMTMuNjEgMjgyLjc1IDMxNS4wOCAyODMuMzUgQyAzMTMuOTUgMjgzLjY0IDMxMi44MiAyODMuOTMgMzExLjcwIDI4NC4yMyBDIDMxNi4xNSAyODQuNTQgMzE4LjE5IDI4OC42NyAzMjAuMzUgMjkxLjk1IEMgMzE5LjAwIDI5My43MiAzMTcuNTkgMjk1LjQ1IDMxNi4xNSAyOTcuMTUgQyAzMTIuNTggMjk0LjU2IDMxMS4xMyAyOTAuNDEgMzEwLjU1IDI4Ni4xOSBDIDMxMC4yMyAyODYuMzQgMzA5LjU5IDI4Ni42NCAzMDkuMjggMjg2Ljc4IEMgMzA4LjU5IDI4NS4yMyAzMDYuOTIgMjg0LjgyIDMwNi40NyAyODYuNzYgQyAzMDYuODggMjg3LjI5IDMwNy42OSAyODguMzMgMzA4LjEwIDI4OC44NiBDIDMwNy40NSAyODguNzUgMzA2LjE0IDI4OC41NSAzMDUuNDkgMjg4LjQ0IEMgMzA2LjU5IDI4OS43MiAzMDcuNzEgMjkwLjk4IDMwOC44MiAyOTIuMjYgQyAzMDcuOTcgMjkyLjI1IDMwNi4yNyAyOTIuMjMgMzA1LjQxIDI5Mi4yMiBDIDMwOC40NyAyOTQuNDEgMzExLjQ3IDI5Ni43NCAzMTMuODEgMjk5LjcyIEMgMzEzLjA3IDMwMC42MiAzMTIuMzMgMzAxLjUyIDMxMS42MCAzMDIuNDQgQyAzMTAuOTMgMzAwLjgwIDMxMC42NCAyOTguODIgMzA5LjA3IDI5Ny43NiBDIDMwNS43OCAyOTUuMDcgMzAyLjExIDI5Mi45MSAyOTguNTggMjkwLjU3IEMgMjk3LjE3IDI4OS40NyAyOTUuMzUgMjg5LjUwIDI5My42NyAyODkuMzMgQyAyOTMuMzQgMjkwLjYzIDI5My4wMiAyOTEuOTMgMjkyLjcwIDI5My4yMyBDIDI5My4wMiAyOTQuMDcgMjkzLjM1IDI5NC45MiAyOTMuNjggMjk1Ljc3IEMgMjkyLjE1IDI5OS43NSAyOTEuMjAgMzAzLjkxIDI5MC4xNyAzMDguMDMgQyAyODYuMzkgMzAwLjkxIDI4Mi4zOSAyOTMuNzkgMjgwLjk1IDI4NS43NSBDIDI4MC41MyAyODcuOTQgMjgwLjE2IDI5MC4xNyAyNzguNzggMjkyLjAwIEMgMjc3Ljc4IDI5MC40NyAyNzYuODIgMjg4Ljg4IDI3NS4zOCAyODcuNzEgQyAyNzYuMjIgMjkwLjUyIDI3Ny4zNyAyOTMuMjMgMjc4LjA1IDI5Ni4wOSBDIDI3OC41OCAyOTguNzQgMjgxLjgyIDI5OS41NyAyODIuNTkgMzAyLjEyIEMgMjgzLjg2IDMwNS41MCAyODQuOTYgMzA4Ljk1IDI4Ni40NSAzMTIuMjQgQyAyODUuMjUgMzExLjU3IDI4NC4wNiAzMTAuOTEgMjgyLjg3IDMxMC4yNCBDIDI4MS43MCAzMTAuNTggMjgwLjU0IDMxMC45MiAyNzkuMzkgMzExLjI4IEMgMjc5LjEwIDMxMS44MSAyNzguNTIgMzEyLjg3IDI3OC4yMyAzMTMuMzkgQyAyNzYuODkgMzExLjUxIDI3NS41NiAzMDkuNTYgMjczLjY3IDMwOC4xOSBDIDI3NS41NCAzMDYuODIgMjc3LjU5IDMwNS4zOCAyNzguMDYgMzAyLjk0IEMgMjc0Ljg3IDMwNC44MSAyNzIuMTYgMzA3LjM1IDI2OS4xMyAzMDkuNDMgQyAyNjcuMjIgMzEwLjUxIDI2Ni43NCAzMTIuNzggMjY1Ljg2IDMxNC42MiBDIDI2MS43NyAzMTAuOTYgMjYxLjUyIDMwNS4zNCAyNjAuMjggMzAwLjM2IEMgMjYwLjAyIDMwMS42NiAyNTkuNzcgMzAyLjk3IDI1OS41NCAzMDQuMjggQyAyNTguNzEgMzAyLjY2IDI1Ny43OCAzMDEuMDMgMjU2LjA5IDMwMC4xNiBDIDI1Ni4wNyAzMDMuMzkgMjU2LjI4IDMwNi42NSAyNTcuMjAgMzA5Ljc2IEMgMjU1LjgwIDMwOS43MCAyNTQuNDAgMzA5LjY2IDI1My4wMCAzMDkuNjUgQyAyNTQuODQgMzExLjE3IDI1Ni44MyAzMTIuNDggMjU4Ljg5IDMxMy42OSBDIDI1OC45MSAzMTYuMzkgMjU4Ljg2IDMxOS4wOCAyNTguODAgMzIxLjc4IEMgMjU3LjYyIDMyMy4wNyAyNTYuNDIgMzI0LjM1IDI1NS4xOSAzMjUuNTkgQyAyNTIuNDIgMzI0LjExIDI0OS43NyAzMjIuMzggMjQ2Ljc3IDMyMS40MSBDIDI0Ni4yOSAzMTguODYgMjQ1LjcyIDMxNi4zMiAyNDUuMjYgMzEzLjc2IEMgMjQ0LjA4IDMxMy4wMCAyNDIuOTAgMzEyLjIzIDI0MS43MyAzMTEuNDYgQyAyMzguMjIgMzEyLjYzIDIzNi41NyAzMTYuMjAgMjM3LjYxIDMxOS43MSBDIDIzNi44NCAzMTkuOTUgMjM2LjA4IDMyMC4yMCAyMzUuMzEgMzIwLjQ1IEMgMjM1LjY1IDMxNS45MCAyMzcuMjcgMzExLjU0IDIzNy41MiAzMDcuMDEgQyAyMzcuNjUgMzA0LjkxIDIzNC42MCAzMDUuMjEgMjMzLjM5IDMwNC41NCBDIDIzNC42MyAzMTIuODggMjMxLjc5IDMyMS4wMSAyMjguODIgMzI4LjY0IEMgMjI4LjAxIDMyOC44NyAyMjYuMzggMzI5LjMzIDIyNS41NyAzMjkuNTYgQyAyMjQuOTcgMzI0LjA2IDIyMi40OSAzMTcuODkgMjI2LjI3IDMxMi45OCBDIDIyNS41MyAzMTEuMjIgMjI0Ljk0IDMwOS40MCAyMjQuMzYgMzA3LjU4IEMgMjIzLjkzIDMwNy41NiAyMjMuMDcgMzA3LjUxIDIyMi42NCAzMDcuNDkgQyAyMTkuNzcgMzEyLjExIDIyMi44MSAzMTcuNzggMjIwLjE0IDMyMi41MiBDIDIxNy4zMiAzMTkuNjIgMjE1LjU1IDMxNS45MSAyMTIuODcgMzEyLjkwIEMgMjEzLjM0IDMxNC40NSAyMTMuOTAgMzE1Ljk4IDIxNC41MSAzMTcuNTAgQyAyMTMuNjQgMzE4LjM0IDIxMi43NyAzMTkuMTkgMjExLjkyIDMyMC4wNCBDIDIxMy4xOCAzMjAuNjggMjE0LjQ1IDMyMS4zMCAyMTUuNzQgMzIxLjg2IEMgMjE2LjM3IDMyMi43NyAyMTcuMDAgMzIzLjY5IDIxNy42NSAzMjQuNjAgQyAyMTUuMDUgMzI1LjE3IDIxMi4zNyAzMjUuNzYgMjEwLjQ0IDMyNy43NCBDIDIxMC45NyAzMjUuMjIgMjA4LjM3IDMyNC40MSAyMDcuNDAgMzIyLjYwIEMgMjA2LjY4IDMyMC44NiAyMDguMDcgMzE5LjMyIDIwOC42NyAzMTcuODAgQyAyMDguMzIgMzE2LjM4IDIwNy45NCAzMTQuOTcgMjA3LjU1IDMxMy41NyBDIDIwNi44NCAzMTQuMzMgMjA1Ljc0IDMxNC45MyAyMDUuNTggMzE2LjA2IEMgMjA0LjM0IDMyMS43MyAyMDYuNDcgMzI3LjQzIDIwNi4zMCAzMzMuMTMgQyAyMDUuNTYgMzMyLjE0IDIwNC44NCAzMzEuMTUgMjA0LjExIDMzMC4xNiBDIDIwMS42NyAzMjguOTIgMjAwLjE5IDMyNi42MiAxOTguMzggMzI0LjY5IEMgMTk2LjUyIDMyMi45OCAxOTMuOTEgMzI0LjMxIDE5MS43NiAzMjQuNDkgQyAxOTAuODYgMzI3LjEzIDE4OS43MCAzMjkuOTUgMTkwLjQzIDMzMi43OSBDIDE5MS4xNiAzMzQuNjIgMTkyLjExIDMzNi4zNSAxOTIuOTEgMzM4LjE1IEMgMTkxLjY0IDMzNy4xOSAxODkuODUgMzM2LjU0IDE4OS4zMSAzMzQuOTAgQyAxODguODQgMzMyLjQ0IDE4OC43NSAzMjkuOTMgMTg4LjM5IDMyNy40NiBDIDE5MS43OCAzMjQuMDUgMTk1LjU1IDMyMS4wOSAxOTkuNTEgMzE4LjM4IEMgMjAxLjExIDMxNy42MCAyMDAuNDEgMzE1Ljc4IDIwMC40MiAzMTQuNDAgQyAyMDAuNjQgMzE0LjA2IDIwMS4wNyAzMTMuMzkgMjAxLjI4IDMxMy4wNSBDIDE5OS43MSAzMTMuNDggMTk3LjM5IDMxMi42MiAxOTYuNDIgMzE0LjM0IEMgMTk0LjQ4IDMxNi43NiAxOTMuNTYgMzE5Ljk4IDE5MC45OSAzMjEuODkgQyAxODkuMjggMzIzLjIxIDE4Ny40MyAzMjQuMzQgMTg1LjYzIDMyNS41NCBDIDE4NS4zMSAzMjUuMjcgMTg0LjY1IDMyNC43MyAxODQuMzIgMzI0LjQ3IEMgMTgzLjQ2IDMyNC41MiAxODEuNzIgMzI0LjYyIDE4MC44NSAzMjQuNjggQyAxODIuNTIgMzIxLjA2IDE4My44OSAzMTcuMzAgMTg1LjY2IDMxMy43MyBDIDE4Ni4yOCAzMTIuMjUgMTg3LjM0IDMxMC43MCAxODYuNzkgMzA5LjA0IEMgMTg2LjE5IDMwNy43NSAxODQuNjQgMzA3LjU4IDE4My41MSAzMDcuMDEgQyAxODIuNjkgMzE2LjM1IDE3Ny4wOSAzMjQuMjcgMTcxLjkxIDMzMS43NCBDIDE3MS4wMiAzMzAuMTkgMTcwLjA1IDMyOC42OSAxNjkuMjUgMzI3LjEwIEMgMTcyLjAwIDMyMi44MyAxNzMuNTMgMzE3LjAyIDE3OC43MCAzMTUuMDYgQyAxNzguNzcgMzEzLjQ0IDE3OC43MSAzMTEuODMgMTc4LjU4IDMxMC4yMiBDIDE3Ny42NSAzMTAuMzggMTc2LjczIDMxMC41NiAxNzUuODEgMzEwLjc4IEMgMTc2LjE3IDMxMS45NiAxNzYuNjMgMzEzLjE5IDE3Ni4xMiAzMTQuNDMgQyAxNzUuODQgMzEzLjUzIDE3NS4yOSAzMTEuNzUgMTc1LjAxIDMxMC44NSBDIDE3My45NCAzMTIuOTMgMTczLjQ4IDMxNS4yNyAxNzIuMzUgMzE3LjMyIEMgMTcwLjg0IDMxOS41OSAxNjguNzcgMzIxLjQwIDE2Ni45MCAzMjMuMzcgQyAxNjUuOTIgMzIyLjYyIDE2NC45NCAzMjEuODggMTYzLjk2IDMyMS4xNSBDIDE2MC45OCAzMjAuOTEgMTU3Ljk3IDMyMS4yMyAxNTUuNDMgMzIyLjkxIEMgMTU1LjAzIDMyMC4yNCAxNTQuNjYgMzE3LjU2IDE1NC40MyAzMTQuODcgQyAxNTUuMjYgMzEzLjk1IDE1Ni4wOCAzMTMuMDUgMTU2LjkxIDMxMi4xNCBDIDE1Ni44NyAzMTAuNzQgMTU2Ljg0IDMwOS4zNCAxNTYuODEgMzA3Ljk1IEMgMTU1LjA4IDMwNi45NSAxNTMuNTEgMzA1LjA5IDE1MS4zNCAzMDUuMzQgQyAxNDguNzQgMzA2LjU5IDE0Ni4yNiAzMDguODMgMTQ1Ljg4IDMxMS44MyBDIDE0NS41OCAzMTQuMDIgMTQ1LjU2IDMxNi4yMyAxNDUuMzkgMzE4LjQzIEMgMTQ0LjkyIDMxOC41NCAxNDMuOTcgMzE4Ljc2IDE0My41MCAzMTguODggQyAxNDIuOTggMzE1LjI1IDE0My41OSAzMTEuNjYgMTQ0LjQzIDMwOC4xNCBDIDE0Ny43MyAzMDUuOTkgMTUxLjAyIDMwMy42OCAxNTQuODggMzAyLjYzIEMgMTU2LjMwIDMwMy40MyAxNTcuNzMgMzA0LjIxIDE1OS4xOCAzMDQuOTcgQyAxNjAuNTcgMzAyLjgwIDE2MC44NyAzMDAuMzQgMTU5LjcxIDI5OC4wMSBDIDE1My41MCAzMDAuMzcgMTQ2LjkwIDMwMS43OSAxNDAuOTcgMzA0Ljg1IEMgMTM5LjE0IDMwOS40NCAxMzYuNzQgMzEzLjc5IDEzNS4zOCAzMTguNTYgTCAxMzQuNjUgMzE4LjE4IEMgMTM0LjE2IDMxOS41OSAxMzMuNjIgMzIwLjk5IDEzMy4wMyAzMjIuMzYgQyAxMzEuNzggMzE4LjE5IDEyOS45MCAzMTQuMjMgMTI4LjgzIDMxMC4wMCBDIDEyOS41OCAzMDkuMjcgMTMxLjA4IDMwNy44MCAxMzEuODIgMzA3LjA2IEwgMTI4Ljc1IDMwNy4zMiBDIDEyOS44OSAzMDYuNTggMTMxLjAzIDMwNS44MyAxMzIuMTYgMzA1LjA4IEMgMTMxLjExIDMwNC43MCAxMjguOTkgMzAzLjk2IDEyNy45NCAzMDMuNTkgQyAxMjcuMzYgMzAwLjk5IDEyNy4wOCAyOTguMzMgMTI3LjY3IDI5NS43MSBDIDEyNi4zNiAyOTcuOTEgMTI0LjY0IDI5OS44MSAxMjIuNzggMzAxLjU3IEMgMTIzLjYwIDMwMS41MyAxMjUuMjIgMzAxLjQ2IDEyNi4wMyAzMDEuNDIgQyAxMjUuMzAgMzAyLjA3IDEyMy44MyAzMDMuMzcgMTIzLjEwIDMwNC4wMiBDIDEyMy41NyAzMDQuNTMgMTI0LjUxIDMwNS41NSAxMjQuOTggMzA2LjA2IEMgMTIyLjM2IDMwOC44MiAxMTguODggMzEwLjQzIDExNS4xOSAzMTEuMTYgQyAxMTYuMzEgMzA0LjkxIDExNy4zMSAyOTguNDQgMTIwLjU4IDI5Mi44NyBDIDExOS44MiAyOTMuMjIgMTE4LjI4IDI5My45MCAxMTcuNTIgMjk0LjI1IEMgMTE4LjA0IDI5My4zMCAxMTkuMDggMjkxLjQwIDExOS42MCAyOTAuNDUgQyAxMTguNzggMjkxLjI3IDExNy4xNCAyOTIuOTEgMTE2LjMyIDI5My43NCBDIDExNi41MSAyOTIuNzcgMTE2Ljg5IDI5MC44NCAxMTcuMDkgMjg5Ljg4IEMgMTE2LjY2IDI5MC4zOSAxMTUuODAgMjkxLjQzIDExNS4zOCAyOTEuOTUgQyAxMTQuOTcgMjg5LjY3IDExMi41OSAyODkuNTYgMTEzLjIxIDI5MS44NyBDIDExMi40NSAyOTUuMDcgMTE1LjQ4IDI5OC4wMSAxMTQuMDQgMzAxLjEwIEMgMTEyLjg1IDMwNC4zMyAxMTEuNjAgMzA3LjU3IDExMC45OCAzMTAuOTggQyAxMDkuNjQgMzEwLjU5IDEwOC4zMCAzMTAuMjYgMTA2Ljk1IDMwOS45NyBDIDEwOC4yOCAzMDguNTAgMTA5LjQ2IDMwNi45MCAxMTAuMzkgMzA1LjE1IEMgMTExLjE5IDMwNC4zOCAxMTEuOTggMzAzLjU4IDExMi42OSAzMDIuNzIgQyAxMTIuMDQgMzAyLjQ1IDExMC43NSAzMDEuOTAgMTEwLjEwIDMwMS42MyBDIDExMC42OCAyOTkuOTUgMTExLjI4IDI5OC4yOCAxMTEuNjggMjk2LjU2IEMgMTA5LjI5IDI5OS40NCAxMDcuOTEgMzAyLjk1IDEwNi4yMiAzMDYuMjQgQyAxMDMuODUgMzA4Ljc5IDEwMC40NCAzMTAuMDMgOTcuMzQgMzExLjQ0IEMgOTcuMzIgMzExLjE5IDk3LjI3IDMxMC43MSA5Ny4yNCAzMTAuNDYgQyA5OC4wNyAzMDQuMDggOTcuMzIgMjk3LjYyIDk4LjM3IDI5MS4yNiBDIDEwMS4xOSAyODkuNjEgMTA0LjEwIDI4OC4wNyAxMDYuNjkgMjg2LjA1IEMgMTA2LjU2IDI4NS40MCAxMDYuMjkgMjg0LjA5IDEwNi4xNiAyODMuNDMgQyAxMDMuNTIgMjg1LjE5IDEwMC42MSAyODYuNDQgOTcuODYgMjg4LjAwIEMgOTUuNzAgMjg5LjM2IDk1LjIyIDI5Mi4wNyA5NC41NiAyOTQuMzUgQyA5My40MCAyOTguMzggOTIuODUgMzAyLjU1IDkyLjY0IDMwNi43MyBDIDkxLjMwIDMwNS4wOSA4OS44NiAzMDMuNTQgODguMzkgMzAyLjAyIEwgODguMzQgMzAxLjQ1IEMgODguNDAgMjk4LjkzIDg3LjM3IDI5Ni42NSA4Ni40MCAyOTQuNDAgQyA4NC44MSAyOTMuODcgODMuMjYgMjkzLjk0IDgxLjczIDI5NC42MCBDIDgxLjUwIDI5My40MSA4MS4yNSAyOTIuMjMgODEuMDkgMjkxLjA0IEMgODUuMTIgMjg4LjEyIDg5LjE4IDI4NS4xMCA5Mi41MyAyODEuNDAgQyA5Mi4yNiAyODAuNjQgOTEuNzAgMjc5LjExIDkxLjQyIDI3OC4zNCBDIDkxLjAxIDI3OC4wMiA5MC4xOCAyNzcuMzkgODkuNzcgMjc3LjA3IEMgODYuNjYgMjgxLjgzIDgyLjY3IDI4NS45MyA3Ny44OSAyODkuMDIgQyA1OS4wNyAyNjMuNDcgNDguNTUgMjMxLjc1IDQ5LjEwIDE5OS45NiBDIDQ4LjYwIDE2OC4zOCA1OS4yMSAxMzcuMDUgNzcuNjIgMTExLjUzIEMgODcuNDUgOTguMjIgOTkuMzQgODYuNDMgMTEyLjc0IDc2LjczIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ni45MCA1Ny40MiBDIDIwNS45NSA1NS4xMiAyMTYuNDUgNTguMzAgMjIyLjAzIDY1Ljk2IEMgMjI3LjE1IDcyLjczIDIyNy4zNyA4Mi4xNyAyMjQuNTggODkuOTIgQyAyMjEuNTUgOTcuODMgMjEzLjk3IDEwMi44NCAyMDYuMzAgMTA1LjYxIEMgMjA2LjI5IDEwOC4wMiAyMDYuMjcgMTEwLjQyIDIwNi4yNiAxMTIuODMgQyAyMDQuMDkgMTE1LjE2IDIwMi4wMyAxMTcuNTkgMTk5Ljk3IDEyMC4wMyBDIDE5OC43MCAxMTguNzAgMTk2LjgwIDExNy43NiAxOTYuMTEgMTE2LjAwIEMgMTk3LjAwIDExNC40MCAxOTguMzkgMTEzLjE1IDE5OS42MSAxMTEuODAgQyAxOTEuODAgMTA0Ljg4IDE4Mi45OSA5OS4xNyAxNzUuMzIgOTIuMTAgQyAxNzYuMDcgOTAuNjAgMTc3LjIzIDg5LjQ2IDE3OC44NyA4OS4wMiBDIDE4My4wNyA5Mi45MiAxODYuOTUgOTcuMTYgMTkxLjE4IDEwMS4wMyBDIDE5My40MyA5NC43MiAxOTYuMDEgODguNDkgMTk3Ljc4IDgyLjA0IEMgMTk3LjQ1IDc4LjI0IDE5Ni4wNCA3NC42MyAxOTUuMjIgNzAuOTIgQyAxOTAuMDkgNjkuNzUgMTg1LjE1IDY3Ljg2IDE4MC4wMiA2Ni42NyBDIDE3OC4yMCA2Ni45MiAxNzYuNDEgNjcuMzUgMTc0LjU5IDY3LjU1IEMgMTc0LjU1IDY2LjUwIDE3NC41MSA2NS40NiAxNzQuNDkgNjQuNDEgQyAxNzcuMzggNjQuMzcgMTgwLjIyIDY0Ljk2IDE4My4wNSA2NS40NiBDIDE4Ni45MCA2MS42OSAxOTEuNTUgNTguNTMgMTk2LjkwIDU3LjQyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE4NC45NCA2NS44MSBDIDE4OS4zMiA2MS4zNCAxOTUuNzQgNTkuMDIgMjAxLjk3IDU5LjUwIEMgMjA5LjQ4IDU5LjcwIDIxNi41NSA2NC42MiAyMTkuNDMgNzEuNTUgQyAyMjIuNTAgNzkuMDggMjIyLjU1IDg4LjIwIDIxOC4yNCA5NS4yOCBDIDIxNi4xMCA5OC43OCAyMTIuNjIgMTAxLjIyIDIwOC44NSAxMDIuNzAgQyAyMDcuMzggOTUuNzUgMjA2LjE5IDg4LjczIDIwNC40MSA4MS44NyBDIDIwMy44NCA4MS43MiAyMDIuNzAgODEuNDEgMjAyLjEzIDgxLjI1IEMgMjAzLjk2IDc5LjAwIDIwNS4zMSA3Ni40MCAyMDYuMDcgNzMuNTkgQyAyMDkuOTkgNzIuODIgMjEzLjk4IDcyLjU4IDIxNy45NSA3Mi4yNCBDIDIxNC42OSA2OC43NyAyMDkuOTUgNjYuNTUgMjA3Ljk0IDYyLjA0IEMgMjA3LjI1IDYyLjE3IDIwNS44NiA2Mi40MiAyMDUuMTcgNjIuNTUgQyAyMDUuNTIgNjMuNTUgMjA1LjQwIDY1LjA2IDIwNi43NyA2NS4zMiBDIDIwOC44NiA2Ni4xNCAyMTAuMDggNjguMDkgMjExLjI4IDY5Ljg2IEMgMjA4LjI2IDY5Ljc1IDIwNS4yOSA2OS4yMiAyMDIuMzYgNjguNTIgQyAyMDIuMDggNjYuMTggMjAxLjg1IDYzLjg0IDIwMS42NCA2MS40OSBDIDE5OS44MyA2MS4yNCAxOTguMDEgNjEuMDAgMTk2LjE5IDYwLjg1IEMgMTk2LjU4IDYzLjczIDE5Ny42OCA2Ni40MyAxOTkuODkgNjguMzkgQyAxOTQuODggNjcuNjggMTg5LjkxIDY2Ljc0IDE4NC45NCA2NS44MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTIuMTkgMTAyLjAwIEMgMTk0Ljg4IDk2Ljg3IDE5OC4xMyA5Mi4wMyAyMDEuMDggODcuMDQgQyAyMDMuNDQgOTIuMzEgMjA1LjQ1IDk3LjczIDIwNy42MCAxMDMuMTAgQyAyMDQuNzUgMTA1LjAxIDIwMi45MyAxMDcuOTggMjAwLjc1IDExMC41NyBDIDE5Ny43OSAxMDcuODIgMTk0LjgzIDEwNS4wNiAxOTIuMTkgMTAyLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ny41MyA5OS40OSBDIDE5OC40NyA5OS40OCAyMDAuMzYgOTkuNDYgMjAxLjMwIDk5LjQ2IEMgMjAxLjI5IDEwMi4wOCAyMDEuMzAgMTA0LjcwIDIwMS4yOSAxMDcuMzMgQyAyMDAuNjcgMTA3LjI5IDE5OS40NCAxMDcuMjAgMTk4LjgyIDEwNy4xNiBDIDE5OC42NSAxMDQuNTYgMTk4LjY0IDEwMS45MSAxOTcuNTMgOTkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTc1LjY5IDEwOS41NSBDIDE3Ni4wMCAxMDcuNDMgMTc0LjM2IDEwMy43MiAxNzcuNzAgMTAzLjY1IEMgMTc3LjcxIDEwNC41NyAxNzcuNzQgMTA2LjQyIDE3Ny43NSAxMDcuMzUgQyAxODAuNjUgMTA3LjQ1IDE4My41NSAxMDcuNTYgMTg2LjQ1IDEwNy4zOCBDIDE4Ny4yMSAxMDguOTggMTg3Ljk5IDExMC41NyAxODguODYgMTEyLjExIEMgMTg5Ljc3IDExMC42MSAxODguNTMgMTA4Ljk5IDE4OC4zNCAxMDcuNDggQyAxODkuMTkgMTA3LjQ1IDE5MC44OCAxMDcuNDAgMTkxLjczIDEwNy4zNyBDIDE5MS43OCAxMTAuMzAgMTkxLjgwIDExMy4yNCAxOTEuNzggMTE2LjE3IEMgMTg5LjEwIDExNS45MyAxODYuMTIgMTE2LjgxIDE4My42NCAxMTUuNTYgQyAxODMuNjMgMTE1LjE1IDE4My42MCAxMTQuMzMgMTgzLjU4IDExMy45MiBDIDE4NC40MCAxMTMuODIgMTg2LjA0IDExMy42MiAxODYuODYgMTEzLjUyIEMgMTg1Ljc2IDExMS4zNSAxODQuNDMgMTA5LjMwIDE4Mi44MiAxMDcuNDggQyAxODEuMzIgMTEwLjYxIDE4Mi43NCAxMTcuMzYgMTc3LjM1IDExNi40MCBDIDE3Ny4yNCAxMTQuOTggMTc3LjgxIDExMy44OCAxNzkuMDUgMTEzLjA5IEMgMTc5LjE5IDExMi4yMSAxNzkuNDYgMTEwLjQ1IDE3OS42MCAxMDkuNTcgQyAxNzguMjkgMTA5LjU2IDE3Ni45OSAxMDkuNTYgMTc1LjY5IDEwOS41NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMDcuNDkgMTA3LjM3IEMgMjA5Ljc1IDEwNy40MCAyMTIuMDEgMTA3LjQxIDIxNC4yOCAxMDcuNDEgQyAyMTQuMjMgMTEwLjE4IDIxNC4yMyAxMTIuOTUgMjE0LjM2IDExNS43MiBDIDIxMi4xMiAxMTYuMjMgMjA5LjgxIDExNi4yMiAyMDcuNTIgMTE2LjIzIEMgMjA3LjUwIDExNS42MSAyMDcuNDQgMTE0LjM5IDIwNy40MSAxMTMuNzggQyAyMDguODYgMTEzLjc4IDIxMC4zMSAxMTMuNzkgMjExLjc2IDExMy43OSBDIDIxMS42NiAxMTIuMTcgMjExLjgyIDExMC40NCAyMTAuOTQgMTA5LjAxIEMgMjEwLjMwIDExMC43NSAyMDkuMTIgMTExLjU4IDIwNy40MSAxMTEuNTEgQyAyMDcuNDMgMTEwLjQ3IDIwNy40NyAxMDguNDEgMjA3LjQ5IDEwNy4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTUuODIgMTA3LjQyIEMgMjE3Ljk1IDEwNy40MSAyMjAuMDkgMTA3LjQxIDIyMi4yMiAxMDcuNDIgQyAyMjIuMTUgMTEwLjEzIDIyMi4xNCAxMTIuODUgMjIyLjI1IDExNS41NiBDIDIyMS42MyAxMTUuNzYgMjIwLjM4IDExNi4xNSAyMTkuNzYgMTE2LjM1IEMgMjE5LjczIDExNC4wOCAyMTkuNzIgMTExLjgxIDIxOS43MCAxMDkuNTQgQyAyMTguNDIgMTA5LjUzIDIxNy4xNCAxMDkuNTMgMjE1Ljg2IDEwOS41MyBMIDIxNS44MiAxMDcuNDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjE2LjIzIDExMS40NCBDIDIxNi43OCAxMTEuNTMgMjE3Ljg3IDExMS43MCAyMTguNDEgMTExLjc5IEMgMjE4LjM5IDExMy4yOCAyMTguMzcgMTE0Ljc4IDIxOC4zNSAxMTYuMjggQyAyMTcuNjkgMTE2LjI0IDIxNi4zOSAxMTYuMTUgMjE1Ljc0IDExNi4xMSBDIDIxNS44OSAxMTQuNTUgMjE2LjA1IDExMy4wMCAyMTYuMjMgMTExLjQ0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDExOS4yNSAxMzYuMzAgQyAxMjQuNzQgMTM2LjM1IDEzMC4yMyAxMzYuMzEgMTM1LjczIDEzNi4zMiBDIDEzNS43NiAxNDMuNDIgMTM1LjY5IDE1MC41MiAxMzUuNzcgMTU3LjYyIEMgMTM4LjE3IDE1NS45NiAxNDEuNDggMTU0Ljg3IDE0Mi42NCAxNTEuOTUgQyAxNDMuMTIgMTQ2Ljc2IDE0Mi42OSAxNDEuNTMgMTQyLjg2IDEzNi4zMiBDIDE0OC42MyAxMzYuMzIgMTU0LjQwIDEzNi4zMSAxNjAuMTggMTM2LjMzIEMgMTYwLjEwIDE0MS4yNiAxNjAuMjYgMTQ2LjIwIDE2MC4xMiAxNTEuMTMgQyAxNTkuNzggMTU1LjA1IDE1Ny4zMSAxNTguNzEgMTUzLjg5IDE2MC42MSBDIDE0Ny44NSAxNjQuMDQgMTQxLjgwIDE2Ny40NCAxMzUuNzMgMTcwLjgwIEMgMTM1LjczIDE3Ny44MSAxMzUuNzMgMTg0LjgyIDEzNS43NCAxOTEuODMgQyAxMzAuMjQgMTkxLjg2IDEyNC43NCAxOTEuODIgMTE5LjIzIDE5MS44NiBDIDExOS4yNyAxNzMuMzQgMTE5LjIzIDE1NC44MiAxMTkuMjUgMTM2LjMwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE2NC45MiAxMzYuMzIgQyAxNzAuNDYgMTM2LjM1IDE3NS45OSAxMzYuMjggMTgxLjUyIDEzNi4zNSBDIDE4MS40NCAxNTAuNzkgMTgxLjQzIDE2NS4yMyAxODEuNTIgMTc5LjY3IEMgMTc2LjA1IDE3OS42MiAxNzAuNTcgMTc5Ljg3IDE2NS4xMCAxNzkuNTcgQyAxNjQuNjMgMTY1LjIzIDE2NC45OSAxNTAuNzIgMTY0LjkyIDEzNi4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxODYuMjggMTM2LjMwIEMgMjAwLjY5IDEzNi4zNCAyMTUuMTAgMTM2LjMzIDIyOS41MSAxMzYuMzEgQyAyMjkuNTIgMTUwLjc3IDIyOS40OSAxNjUuMjMgMjI5LjUzIDE3OS42OSBDIDIyMy45NCAxNzkuNjQgMjE4LjM1IDE3OS44MSAyMTIuNzcgMTc5LjYwIEMgMjEyLjk1IDE3MC4yOCAyMTIuNzcgMTYwLjk1IDIxMi44NyAxNTEuNjIgQyAyMDkuNTEgMTUxLjU1IDIwNi4xNSAxNTEuNTcgMjAyLjgwIDE1MS42MCBDIDIwMi44NyAxNjAuOTYgMjAyLjgxIDE3MC4zMyAyMDIuODMgMTc5LjY5IEMgMTk3LjMyIDE3OS43MyAxOTEuODAgMTc5LjY3IDE4Ni4yOSAxNzkuNjkgQyAxODYuMzAgMTY1LjIzIDE4Ni4zMiAxNTAuNzYgMTg2LjI4IDEzNi4zMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyMzQuMDkgMTM2LjI4IEMgMjM5LjY3IDEzNi4zOCAyNDUuMjUgMTM2LjI5IDI1MC44NCAxMzYuMzMgQyAyNTAuODYgMTQxLjUyIDI1MC42NiAxNDYuNzIgMjUwLjk5IDE1MS45MCBDIDI1My44OCAxNDguOTAgMjUzLjUzIDE0NC4yMyAyNTUuODAgMTQwLjgzIEMgMjU3LjU3IDEzNy41OSAyNjEuNDEgMTM2LjI4IDI2NC45MiAxMzYuMzQgQyAyNjguNzQgMTM2LjQwIDI3Mi44NSAxMzUuNzggMjc2LjQyIDEzNy40OCBDIDI3OS41MSAxMzkuMDQgMjgwLjc2IDE0Mi42NyAyODAuNzEgMTQ1Ljk1IEMgMjgwLjc0IDE1Ny4xOCAyODAuNzAgMTY4LjQyIDI4MC43MiAxNzkuNjYgQyAyNzIuOTIgMTc5LjY2IDI2NS4xMiAxNzkuNzAgMjU3LjMyIDE3OS42NiBDIDI1Ny4zNyAxNzQuNTkgMjU3LjM1IDE2OS41MiAyNTcuMzIgMTY0LjQ1IEMgMjU5LjU2IDE2NC40NSAyNjEuODEgMTY0LjQ0IDI2NC4wNiAxNjQuNDMgQyAyNjQuMDMgMTYwLjYyIDI2NC4yNCAxNTYuNzkgMjYzLjczIDE1My4wMSBDIDI2Mi4wOSAxNTIuNDEgMjU5LjExIDE1MS44NiAyNTguNDUgMTU0LjA0IEMgMjU1Ljg2IDE2Mi41NSAyNTMuNTEgMTcxLjE0IDI1MC45NCAxNzkuNjYgQyAyNDUuMDcgMTc5LjczIDIzOS4xOSAxNzkuNzIgMjMzLjMyIDE3OS42NiBDIDIzNS41NCAxNzIuNjYgMjM3LjU5IDE2NS42MCAyMzkuODkgMTU4LjYyIEMgMjM3Ljc5IDE1OC4yMiAyMzQuNjAgMTU3LjkwIDIzNC4zNiAxNTUuMTggQyAyMzMuNzYgMTQ4LjkxIDIzNC4yNSAxNDIuNTggMjM0LjA5IDEzNi4yOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMi4zNiAxODMuOTggQyAyNC45MyAxODQuNjMgMjcuNDIgMTg1LjU1IDI5Ljc0IDE4Ni44NSBDIDI4LjgyIDE4Ny4zNiAyNi45OCAxODguMzggMjYuMDcgMTg4Ljg5IEMgMjYuNDQgMTg5LjA2IDI3LjE5IDE4OS40MCAyNy41NyAxODkuNTYgQyAyNy43OCAxOTAuMjQgMjguMjAgMTkxLjYwIDI4LjQxIDE5Mi4yOCBDIDI4LjI5IDE5Mi45NCAyOC4wNiAxOTQuMjYgMjcuOTQgMTk0LjkyIEMgMjkuNDAgMTkyLjE0IDMyLjYwIDE5MC45NCAzNC4xMCAxODguMjEgQyAzNC43MiAxODguMjAgMzUuOTcgMTg4LjIwIDM2LjU5IDE4OC4yMCBDIDM2LjU4IDE4OS4zNyAzNi41NyAxOTAuNTUgMzYuNTYgMTkxLjczIEMgMzMuOTUgMTkyLjc5IDMxLjcyIDE5NC41MSAyOS40MSAxOTYuMDggQyAzMC41OSAxOTYuODcgMzEuNzggMTk3LjY4IDMyLjk3IDE5OC40OCBDIDMzLjgzIDE5OC4zNSAzNS41NyAxOTguMDggMzYuNDQgMTk3Ljk1IEMgMzYuNDcgMTk5LjU3IDM2LjQ5IDIwMS4yMCAzNi40OCAyMDIuODMgQyAzMy42NyAyMDEuODcgMzEuMDYgMjAwLjQ1IDI4LjQ0IDE5OS4wNyBDIDI3LjQ4IDIwMS4yMiAyNS42MSAyMDIuNjUgMjMuNzYgMjAzLjk5IEMgMjUuNTkgMjA1LjM0IDI3LjU0IDIwNi41NyAyOS4wNiAyMDguMjkgQyAzMC4yMCAyMDkuODMgMjguNzUgMjExLjc3IDI4LjQ4IDIxMy4zNyBDIDI5LjkwIDIxNC4wNCAzMS4zMyAyMTQuNzUgMzIuMDAgMjE2LjI5IEMgMzAuMjggMjE2LjMwIDI4LjU3IDIxNi4yMiAyNi44NiAyMTYuMDQgQyAyNC45MyAyMTUuMjMgMjUuOTkgMjEyLjgzIDI1LjY0IDIxMS4yNyBDIDI0Ljg2IDIxMC4yNiAyMy42MyAyMDkuNzYgMjIuNjEgMjA5LjA2IEMgMjEuMjUgMjEwLjMyIDE5LjQzIDIxMS4zMyAxOS4wNSAyMTMuMzAgQyAyMC40MyAyMTQuMDMgMjEuODUgMjE0Ljc4IDIyLjY2IDIxNi4yMSBDIDIwLjY5IDIxNi4yNiAxOC43MiAyMTYuMjUgMTYuNzQgMjE2LjIwIEMgMTUuNzYgMjEyLjYyIDE4LjAyIDIwOS4yMSAxNy4yNiAyMDUuNjcgQyAxNi4zNiAyMDUuMTIgMTUuNDEgMjA0LjY1IDE0LjQ0IDIwNC4yNSBDIDEyLjk4IDIwMC45NCAxNC44MSAxOTcuNDMgMTQuMjEgMTk0LjAzIEMgMTMuODkgMTkyLjQxIDEzLjQ5IDE5MC44MiAxMy4yMCAxODkuMjAgQyAxMy44MCAxODkuMjIgMTUuMDIgMTg5LjI0IDE1LjYzIDE4OS4yNiBDIDE1LjkyIDE5My41MCAxNS42MiAxOTcuNzQgMTUuNTEgMjAxLjk4IEMgMTUuOTAgMjAyLjQyIDE2LjY4IDIwMy4yOSAxNy4wNyAyMDMuNzIgQyAxOC41NSAyMDIuMzMgMjAuNzUgMjAxLjMyIDIxLjEyIDE5OS4xMSBDIDIxLjY2IDE5NS42NCAxOC43NyAxOTIuNTAgMTkuNjggMTg5LjAxIEMgMjAuMzIgMTg3LjIxIDIxLjQyIDE4NS42MyAyMi4zNiAxODMuOTggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzY5LjI1IDE4Ni45MCBDIDM3MS41NCAxODUuNTUgMzc0LjA0IDE4NC42NCAzNzYuNjAgMTgzLjk1IEMgMzc3LjU0IDE4NS42MCAzNzguNjMgMTg3LjE5IDM3OS4zMCAxODguOTggQyAzNzkuOTggMTkyLjA5IDM3OC4wNiAxOTQuOTggMzc3Ljc3IDE5OC4wMiBDIDM3Ny42MyAyMDAuNTkgMzc5LjgzIDIwMi4zNSAzODEuODUgMjAzLjQ3IEMgMzg0Ljc4IDIwMi43MCAzODMuMDEgMTk5LjA4IDM4My4yOCAxOTYuOTkgQyAzODMuNjEgMTk0LjA5IDM4MS45MSAxOTAuMDEgMzg1LjE2IDE4OC4zMSBDIDM4NS40MCAxODkuNTYgMzg1LjcxIDE5MC44OCAzODUuMjIgMTkyLjEzIEMgMzgzLjYzIDE5Ni4xMSAzODYuMTQgMjAwLjM2IDM4NC41NyAyMDQuMzQgQyAzODMuODUgMjA0LjU5IDM4Mi40MiAyMDUuMTAgMzgxLjcxIDIwNS4zNiBDIDM4MC43NSAyMDguOTQgMzgzLjY5IDIxMi43MyAzODEuODkgMjE2LjA4IEMgMzgwLjA3IDIxNi4zNyAzNzguMjIgMjE2LjI0IDM3Ni4zOSAyMTYuMjIgQyAzNzcuMDEgMjE0LjYzIDM3OC41NSAyMTQuMDIgMzc5Ljk2IDIxMy4zNSBDIDM3OS41MSAyMTEuNDAgMzc3LjczIDIxMC4zNSAzNzYuMzggMjA5LjA3IEMgMzc1LjM0IDIwOS43NCAzNzQuMjIgMjEwLjM0IDM3My4zNCAyMTEuMjIgQyAzNzMuMzAgMjEyLjQ3IDM3My4yNyAyMTMuNzMgMzczLjI1IDIxNC45OCBDIDM3Mi4wMiAyMTcuMTQgMzY4Ljk4IDIxNS44MCAzNjcuMDIgMjE2LjI4IEMgMzY3LjYwIDIxNC42NiAzNjkuMDcgMjEzLjk5IDM3MC41MCAyMTMuMzMgQyAzNzAuMDYgMjExLjg2IDM2OS42NiAyMTAuMzkgMzY5LjI4IDIwOC45MSBDIDM3MS4wNSAyMDcuMDQgMzczLjA4IDIwNS40NSAzNzUuMjEgMjA0LjAyIEMgMzczLjM2IDIwMi42NiAzNzEuNTQgMjAxLjE4IDM3MC41MCAxOTkuMDggQyAzNjcuOTMgMjAwLjUwIDM2NS4zNCAyMDEuOTQgMzYyLjQ5IDIwMi43NiBDIDM2Mi40OSAyMDEuMTAgMzYyLjUxIDE5OS40NSAzNjIuNTUgMTk3Ljc5IEMgMzYzLjM5IDE5Ny45NyAzNjUuMDcgMTk4LjMzIDM2NS45MCAxOTguNTEgQyAzNjcuMTQgMTk3LjcyIDM2OC4zOSAxOTYuOTQgMzY5LjY1IDE5Ni4xOCBDIDM2Ny4zMyAxOTQuNTcgMzY1LjA3IDE5Mi44MyAzNjIuNDUgMTkxLjcyIEMgMzYyLjQyIDE5MC41NSAzNjIuMzkgMTg5LjM4IDM2Mi4zNyAxODguMjEgQyAzNjIuOTkgMTg4LjIxIDM2NC4yMyAxODguMjEgMzY0Ljg1IDE4OC4yMSBDIDM2Ni4xMCAxOTAuMjcgMzY4LjAxIDE5MS44OCAzNzAuMzUgMTkyLjYwIEMgMzcwLjM3IDE5My4xMyAzNzAuNDIgMTk0LjIwIDM3MC40NCAxOTQuNzMgQyAzNzEuNjUgMTkzLjI0IDM3MS4zOSAxOTEuMzcgMzcxLjI1IDE4OS42MCBDIDM3MS42NyAxODkuMzkgMzcyLjQ5IDE4OC45OCAzNzIuOTEgMTg4Ljc3IEMgMzcxLjk5IDE4OC4zMCAzNzAuMTYgMTg3LjM3IDM2OS4yNSAxODYuOTAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjA2Ljc5IDE4Ni4zNyBDIDIwNi45MSAxODYuNDAgMjA3LjE2IDE4Ni40NiAyMDcuMjggMTg2LjQ5IEMgMjA2LjkzIDE4Ny43NSAyMDYuNjAgMTg5LjAxIDIwNi4yOCAxOTAuMjggQyAyMDUuNDUgMTkzLjQxIDIwNC41OCAxOTYuNTMgMjAzLjc0IDE5OS42NiBDIDIxMi4xOCAyMDAuNTkgMjIwLjUzIDIwMi4zNCAyMjkuMDQgMjAyLjUzIEMgMjMwLjU1IDE5OS40OSAyMzIuMTggMTk2LjUxIDIzMy44NSAxOTMuNTYgQyAyMzMuMTkgMTkzLjY5IDIzMS44NyAxOTMuOTUgMjMxLjIxIDE5NC4wOCBDIDIyOS42NCAxOTUuNDIgMjI4LjAyIDE5Ni43MiAyMjYuMzkgMTk3Ljk5IEMgMjI2Ljk4IDE5Ni40MiAyMjcuNjEgMTk0Ljg3IDIyOC4yNCAxOTMuMzIgQyAyMjguNzEgMTkyLjE2IDIyOS4xOSAxOTEuMDIgMjI5LjcxIDE4OS44OCBDIDIyOS43NCAxOTEuNDIgMjI5LjYwIDE5Mi45NSAyMjkuMjkgMTk0LjQ3IEMgMjMwLjQ3IDE5Mi45NCAyMzEuNzUgMTkxLjQ5IDIzMy4xMSAxOTAuMTIgTCAyMzIuMTEgMTkyLjEzIEMgMjMyLjgyIDE5Mi42MyAyMzMuNTQgMTkzLjE0IDIzNC4yNiAxOTMuNjUgTCAyMzQuODUgMTkxLjE5IEMgMjM1LjQyIDE5OS41MSAyMjguMTkgMjA1LjQ2IDIyNi4zOCAyMTMuMjIgQyAyMzEuNzMgMjEzLjI1IDIzNy4wOCAyMTMuMjEgMjQyLjQ0IDIxMy4yMiBDIDI0Mi40NSAyMjcuNjcgMjQyLjQ0IDI0Mi4xMiAyNDIuNDUgMjU2LjU4IEMgMjM2LjkwIDI1Ni41MyAyMzEuMzUgMjU2LjYzIDIyNS44MSAyNTYuNTAgQyAyMjUuODAgMjQyLjU3IDIyNi4wOSAyMjguNjMgMjI1LjY2IDIxNC43MiBDIDIyNC40NCAyMTcuMjggMjIzLjQ0IDIxOS45NCAyMjIuMjUgMjIyLjUyIEMgMjE3LjE4IDIzMi45NyAyMTUuNjkgMjQ0LjgxIDIxMC4xMiAyNTUuMDQgQyAyMDcuNzcgMjU4LjE3IDIwNS4wOCAyNjEuMTcgMjAxLjg3IDI2My40MyBDIDE5Ni44NiAyNjMuNTQgMTkxLjg4IDI2Mi43NiAxODYuODggMjYyLjU0IEMgMTgxLjY4IDI2Mi4yNCAxNzcuMDQgMjU5LjY5IDE3Mi4zMiAyNTcuNzggQyAxNjkuNzIgMjY1Ljk0IDE2Ni45OCAyNzQuMDYgMTY0LjE1IDI4Mi4xNCBDIDE2My44NyAyODAuOTUgMTYzLjY0IDI3OS43NSAxNjMuNDQgMjc4LjU1IEMgMTYyLjE4IDI3OS41NyAxNjEuMjcgMjgwLjkyIDE2MC4xOSAyODIuMTEgQyAxNjAuNzggMjgwLjIwIDE2MS41MyAyNzguMzMgMTYyLjYxIDI3Ni42NSBDIDE2MS41MiAyNzYuNzQgMTYwLjQzIDI3Ni44MyAxNTkuMzQgMjc2LjkyIEMgMTU5LjA2IDI3Ny42MCAxNTguNTAgMjc4Ljk3IDE1OC4yMiAyNzkuNjYgQyAxNTcuOTggMjc5LjYyIDE1Ny40OCAyNzkuNTUgMTU3LjIzIDI3OS41MSBDIDE1Ny42MCAyNzguODggMTU4LjMzIDI3Ny42MiAxNTguNzAgMjc2Ljk5IEMgMTU3Ljc5IDI3Ni4zMSAxNTYuODAgMjc1Ljc1IDE1NS44MSAyNzUuMTkgQyAxNTUuODYgMjc2LjY2IDE1NS4zNSAyNzcuOTAgMTU0LjI3IDI3OC45NCBDIDE1NC41MCAyNzcuNDAgMTU0LjgyIDI3NS44NyAxNTUuMTMgMjc0LjM2IEwgMTU2LjY2IDI3NC42MSBDIDE1Ni4wNSAyNzMuNjcgMTU1LjQ0IDI3Mi43NCAxNTQuODEgMjcxLjgzIEMgMTUzLjkwIDI3My42NSAxNTIuOTkgMjc1LjUwIDE1MS45OSAyNzcuMjkgQyAxNTEuMzIgMjc2Ljk4IDE0OS45OSAyNzYuMzggMTQ5LjMyIDI3Ni4wOCBDIDE0OS43MyAyNzUuMDAgMTUwLjEyIDI3My45MSAxNTAuNTAgMjcyLjgzIEMgMTUwLjg0IDI3My42MiAxNTEuNTEgMjc1LjIwIDE1MS44NSAyNzUuOTkgTCAxNTEuMTIgMjczLjE0IEwgMTUyLjQ0IDI3My42OCBDIDE1Mi45MSAyNzIuNDcgMTUzLjQxIDI3MS4yNyAxNTMuODkgMjcwLjA2IEMgMTU0LjMxIDI2OS43NSAxNTUuMTQgMjY5LjE1IDE1NS41NiAyNjguODUgQyAxNTUuMzMgMjY5LjM0IDE1NC44OCAyNzAuMzMgMTU0LjY2IDI3MC44MiBDIDE1Ni4xNSAyNzEuODYgMTU2LjYwIDI3My44OSAxNTguMDUgMjc0Ljg2IEMgMTU5Ljk5IDI3NC4wNSAxNjAuMzggMjcxLjM5IDE2MS42NSAyNjkuODAgQyAxNjEuMzcgMjcyLjExIDE2MC41NCAyNzQuMjkgMTU5LjM3IDI3Ni4yOSBDIDE2MC41MiAyNzYuMTkgMTYxLjY4IDI3Ni4xMSAxNjIuODMgMjc2LjAzIEMgMTY1LjEwIDI3MS4yNyAxNjYuNzAgMjY2LjI0IDE2OC4wNSAyNjEuMTUgQyAxNjUuNjQgMjU5Ljg0IDE2My4zMyAyNTguMzEgMTYwLjc2IDI1Ny4zNCBDIDE1Ny41NCAyNTYuMzEgMTU0LjEzIDI1Ni4wMiAxNTAuOTUgMjU0Ljg4IEMgMTQ3Ljg5IDI1My44NyAxNDUuMDkgMjUyLjIxIDE0Mi4wMyAyNTEuMjEgQyAxMzguOTUgMjU0LjI2IDEzNi43MSAyNTguMDQgMTM0LjA5IDI2MS40OCBDIDEzMi41OSAyNjMuNDggMTMxLjQ0IDI2NS43MSAxMzAuMjggMjY3LjkyIEMgMTMxLjYxIDI2My45MiAxMzMuNDIgMjYwLjEwIDEzNS43NiAyNTYuNTkgQyAxMzAuNjkgMjU2LjU0IDEyNS42MiAyNTYuNjAgMTIwLjU1IDI1Ni41NCBDIDEyMC41NiAyNDIuMTQgMTIwLjY5IDIyNy43MyAxMjAuNDkgMjEzLjM0IEMgMTI2LjA0IDIxMy4wOSAxMzEuNjAgMjEzLjI3IDEzNy4xNiAyMTMuMjIgQyAxMzcuMjYgMjI2LjgyIDEzNi45MCAyNDAuNDIgMTM3LjM0IDI1NC4wMSBDIDE0NS4yOSAyNDAuMzAgMTUzLjAzIDIyNS45OCAxNjUuMDUgMjE1LjMzIEMgMTczLjE2IDIwOC4zMyAxODUuNDkgMjA5LjY3IDE5NC4yNSAyMTQuNzQgQyAxOTkuMzQgMjA1LjcyIDIwMi43MCAxOTUuODYgMjA2Ljc5IDE4Ni4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTEuMTQgMTkwLjg5IEMgMjExLjgwIDE4OS40MCAyMTIuNDkgMTg3Ljg3IDIxMy43OSAxODYuODMgQyAyMTMuMTEgMTg4LjQ3IDIxMi4yNyAxOTAuMDYgMjEyLjA5IDE5MS44NiBDIDIxMy40MyAxOTAuNjcgMjE0LjY4IDE4OS4zOSAyMTUuOTUgMTg4LjEyIEMgMjE1LjQ1IDE4OS4zMiAyMTQuOTUgMTkwLjUzIDIxNC40NiAxOTEuNzQgQyAyMTYuODIgMTkyLjI3IDIxOC4xNSAxODkuOTIgMjE5Ljg5IDE4OC45NCBDIDIxOS40MCAxODkuODAgMjE4LjQyIDE5MS41NCAyMTcuOTMgMTkyLjQwIEMgMjE4LjY0IDE5Mi4xMyAyMjAuMDcgMTkxLjU4IDIyMC43OSAxOTEuMzEgQyAyMjEuMDMgMTkxLjY5IDIyMS41MSAxOTIuNDYgMjIxLjc1IDE5Mi44NCBDIDIyMi4yNiAxOTEuOTUgMjIzLjI3IDE5MC4xNyAyMjMuNzggMTg5LjI4IEwgMjIzLjYwIDE5My40NCBDIDIyNC43NiAxOTIuMzQgMjI1Ljg4IDE5MS4yMSAyMjYuOTYgMTkwLjA1IEMgMjI2Ljc3IDE5MC43OSAyMjYuMzkgMTkyLjI4IDIyNi4yMCAxOTMuMDMgTCAyMjguMjQgMTkzLjMyIEMgMjI3LjYxIDE5NC44NyAyMjYuOTggMTk2LjQyIDIyNi4zOSAxOTcuOTkgQyAyMjguMDIgMTk2LjcyIDIyOS42NCAxOTUuNDIgMjMxLjIxIDE5NC4wOCBDIDIzMS44NyAxOTMuOTUgMjMzLjE5IDE5My42OSAyMzMuODUgMTkzLjU2IEMgMjMyLjE4IDE5Ni41MSAyMzAuNTUgMTk5LjQ5IDIyOS4wNCAyMDIuNTMgQyAyMjAuNTMgMjAyLjM0IDIxMi4xOCAyMDAuNTkgMjAzLjc0IDE5OS42NiBDIDIwNC41OCAxOTYuNTMgMjA1LjQ1IDE5My40MSAyMDYuMjggMTkwLjI4IEMgMjA3Ljg5IDE5MC40OCAyMDkuNTIgMTkwLjY5IDIxMS4xNCAxOTAuODkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk0LjQ5IDIyOS40OSBDIDI5NC40OSAyMjAuMjEgMjk0LjQyIDIxMC45NCAyOTQuNTAgMjAxLjY3IEMgMzAwLjA2IDIwMS42OSAzMDUuNjIgMjAxLjcyIDMxMS4xOSAyMDEuNjcgQyAzMTEuMTggMjA1LjUzIDMxMS4xOCAyMDkuMzggMzExLjE4IDIxMy4yNCBDIDMxOC43MiAyMTMuMjAgMzI2LjI3IDIxMy4yMyAzMzMuODIgMjEzLjIzIEMgMzMzLjgyIDIyMC40OCAzMzMuODYgMjI3Ljc0IDMzMy44MCAyMzUuMDAgQyAzMzQuMTcgMjQzLjU4IDMyMy4wOCAyNDcuNzkgMzI0LjI5IDI1Ni41NiBDIDMxOC4xMiAyNTYuNTcgMzExLjk1IDI1Ni41OCAzMDUuNzggMjU2LjU1IEMgMzA1Ljg2IDI1My45NCAzMDUuMzkgMjUxLjAzIDMwNy4wNCAyNDguNzggQyAzMDkuNzggMjQ0LjYyIDMxMi45MCAyNDAuNzEgMzE1LjU3IDIzNi41MCBDIDMxNi45MyAyMzQuNDMgMzE2LjI3IDIzMS44MSAzMTYuNTAgMjI5LjQ4IEMgMzA5LjE2IDIyOS41MCAzMDEuODIgMjI5LjQ4IDI5NC40OSAyMjkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMC4wMCAyMDcuNDYgQyAxLjYyIDIyNS44NSAzLjk3IDI0NC4zMyA5Ljg5IDI2MS45MCBDIDI2LjgxIDMxNS4wNSA2Ny40MCAzNTkuNzYgMTE4LjE2IDM4Mi42NCBDIDE0MS4xMyAzOTMuMTQgMTY2LjE3IDM5OC43NiAxOTEuMzYgNDAwLjAwIEwgMC4wMCA0MDAuMDAgTCAwLjAwIDIwNy40NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzODIuODAgMjgxLjg2IEMgMzkzLjI5IDI1OC45MCAzOTguNTcgMjMzLjg2IDQwMC4wMCAyMDguNzMgTCA0MDAuMDAgNDAwLjAwIEwgMjEwLjI5IDQwMC4wMCBDIDIyNC42OCAzOTguODkgMjM5LjA4IDM5Ny4xMCAyNTIuOTkgMzkzLjExIEMgMzA5Ljk1IDM3Ny44MyAzNTguODIgMzM1LjY4IDM4Mi44MCAyODEuODYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gNzIuNTUgMjEzLjIwIEMgODMuMzggMjEzLjI1IDk0LjIxIDIxMy4yMCAxMDUuMDQgMjEzLjIzIEMgMTA4LjA4IDIxMy4yNCAxMTEuNDMgMjEzLjk3IDExMy40OCAyMTYuNDAgQyAxMTUuNDMgMjE4LjgxIDExNS41OSAyMjIuMDMgMTE1LjU5IDIyNS4wMCBDIDExNS41NiAyMzUuNTEgMTE1LjU5IDI0Ni4wMiAxMTUuNTggMjU2LjU0IEMgMTA5Ljk5IDI1Ni41OCAxMDQuNDAgMjU2LjU5IDk4LjgwIDI1Ni41MiBDIDk4LjY4IDI0Ny4yMyA5OS4zMSAyMzcuODggOTguNDYgMjI4LjYzIEMgOTUuMzMgMjI4LjQ1IDkyLjE5IDIyOC40NSA4OS4wNSAyMjguNDMgQyA4OC42MSAyMzUuODcgODkuMjAgMjQzLjM0IDg4Ljc0IDI1MC43OCBDIDg4LjUxIDI1My43MCA4Ni4wMiAyNTYuMDUgODMuMTUgMjU2LjMyIEMgNzcuNjMgMjU2Ljg2IDcyLjA2IDI1Ni40MyA2Ni41MiAyNTYuNTUgQyA2Ni41NSAyNTEuMjYgNjYuNTIgMjQ1Ljk2IDY2LjU0IDI0MC42NiBDIDY4LjQ0IDI0MC4yOSA3MS4wNyAyNDEuNDUgNzIuNDkgMjM5Ljc5IEMgNzIuNjUgMjMwLjkzIDcyLjUxIDIyMi4wNiA3Mi41NSAyMTMuMjAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjQ3LjI1IDIxMy4yNSBDIDI2MS42OSAyMTMuMjQgMjc2LjEzIDIxMy4xMyAyOTAuNTYgMjEzLjMxIEMgMjkwLjM3IDIyNy43MiAyOTAuNTEgMjQyLjE0IDI5MC40OSAyNTYuNTYgQyAyODQuOTIgMjU2LjU0IDI3OS4zNSAyNTYuNjMgMjczLjc4IDI1Ni41MSBDIDI3My44NiAyNDcuMTYgMjczLjczIDIzNy44MiAyNzMuODUgMjI4LjQ3IEMgMjcwLjQ5IDIyOC40NiAyNjcuMTQgMjI4LjQ0IDI2My43OSAyMjguNTEgQyAyNjMuODMgMjM3Ljg2IDI2My43NSAyNDcuMjIgMjYzLjg0IDI1Ni41OCBDIDI1OC4zMSAyNTYuNTQgMjUyLjc5IDI1Ni41OSAyNDcuMjcgMjU2LjU1IEMgMjQ3LjI3IDI0Mi4xMSAyNDcuMzAgMjI3LjY4IDI0Ny4yNSAyMTMuMjUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk3LjEwIDIxOS4xMiBDIDE5NS45OSAyMTcuNDkgMTk2LjM2IDIxNS43MCAxOTcuNjQgMjE0LjMxIEMgMjA0LjYzIDIxOC4zNCAyMTMuMDEgMjE4LjUzIDIyMC44MyAyMTkuNDAgQyAyMTguMTEgMjI0LjUxIDIxNi41MyAyMzAuMTAgMjE0LjQ4IDIzNS40OSBDIDIwOS4yMSAyMzQuNzUgMjAzLjk5IDIzMy43NSAxOTguNzEgMjMzLjE0IEMgMTk4LjY4IDIyOC40MyAxOTkuNDQgMjIzLjQ0IDE5Ny4xMCAyMTkuMTIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTkwLjA5IDIyMy4xNCBDIDE5Mi4wNCAyMjEuOTUgMTkzLjE0IDIxOS44NCAxOTUuMDYgMjE4LjYxIEMgMTk3LjE2IDIyNC41MSAxOTYuMjcgMjMwLjg4IDE5NS42OSAyMzYuOTYgQyAxOTEuMzcgMjM1LjMxIDE4Ni43MiAyMzUuMzAgMTgyLjE3IDIzNS4yNyBDIDE4My4wMiAyMzAuNDQgMTg1LjY2IDIyNS41NCAxOTAuMDkgMjIzLjE0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE1Mi40OSAyMzMuOTIgQyAxNTUuODIgMjMwLjIzIDE1OC4yMiAyMjUuNjkgMTYyLjA5IDIyMi41MSBDIDE2OS4xNCAyMjIuNDAgMTc2LjYzIDIyNC4zMyAxODIuMTggMjI4LjgyIEMgMTc5LjUxIDIzMi41NiAxNzYuODggMjM2LjM4IDE3NS4yOCAyNDAuNzIgQyAxNjcuNjQgMjM4LjY0IDE1OS45NiAyMzYuNTYgMTUyLjQ5IDIzMy45MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTkuNTUgMjUwLjE1IEMgMjAyLjcwIDI1MC44OCAyMDUuODEgMjUxLjgyIDIwOC44OSAyNTIuODEgQyAyMDYuOTggMjU2LjAyIDIwNC40OCAyNTkuMTUgMjAwLjk1IDI2MC42NSBDIDE5MS41NSAyNjEuMzEgMTgyLjAyIDI1OS4zNiAxNzMuNDcgMjU1LjQzIEMgMTczLjQ3IDI1NC44NCAxNzMuNDcgMjUzLjY4IDE3My40NyAyNTMuMDkgQyAxODEuODAgMjU1LjIzIDE5MC40MCAyNTcuNTIgMTk5LjAzIDI1NS42NSBDIDE5OS4yNiAyNTMuODIgMTk5LjQyIDI1MS45OSAxOTkuNTUgMjUwLjE1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDEzNC4wOSAyNjEuNDggQyAxMzYuNzEgMjU4LjA0IDEzOC45NSAyNTQuMjYgMTQyLjAzIDI1MS4yMSBDIDE0NS4wOSAyNTIuMjEgMTQ3Ljg5IDI1My44NyAxNTAuOTUgMjU0Ljg4IEMgMTU0LjEzIDI1Ni4wMiAxNTcuNTQgMjU2LjMxIDE2MC43NiAyNTcuMzQgQyAxNjMuMzMgMjU4LjMxIDE2NS42NCAyNTkuODQgMTY4LjA1IDI2MS4xNSBDIDE2Ni43MCAyNjYuMjQgMTY1LjEwIDI3MS4yNyAxNjIuODMgMjc2LjAzIEMgMTYxLjY4IDI3Ni4xMSAxNjAuNTIgMjc2LjE5IDE1OS4zNyAyNzYuMjkgQyAxNjAuNTQgMjc0LjI5IDE2MS4zNyAyNzIuMTEgMTYxLjY1IDI2OS44MCBDIDE2MC4zOCAyNzEuMzkgMTU5Ljk5IDI3NC4wNSAxNTguMDUgMjc0Ljg2IEMgMTU2LjYwIDI3My44OSAxNTYuMTUgMjcxLjg2IDE1NC42NiAyNzAuODIgQyAxNTQuODggMjcwLjMzIDE1NS4zMyAyNjkuMzQgMTU1LjU2IDI2OC44NSBDIDE1NS4xNCAyNjkuMTUgMTU0LjMxIDI2OS43NSAxNTMuODkgMjcwLjA2IEMgMTUzLjQwIDI3MC40MiAxNTIuNDEgMjcxLjE1IDE1MS45MiAyNzEuNTIgQyAxNTEuMzggMjcxLjM4IDE1MC4zMCAyNzEuMTIgMTQ5Ljc2IDI3MC45OSBDIDE0OC41OCAyNzIuOTIgMTQ3LjMxIDI3NC44NiAxNDUuMzggMjc2LjEyIEMgMTQ2LjEwIDI3My4zNyAxNDkuNzYgMjcwLjIzIDE0Ni40MyAyNjcuOTIgQyAxNDYuNTUgMjY2Ljg5IDE0Ni42OCAyNjUuODcgMTQ2LjgwIDI2NC44NiBDIDE0Ni4wMiAyNjUuOTggMTQ1LjIzIDI2Ny4xMCAxNDQuNDYgMjY4LjI0IEwgMTQzLjM3IDI2OS42NiBMIDE0My42MCAyNjcuMDQgQyAxNDMuNzkgMjY2LjIyIDE0NC4xNyAyNjQuNTcgMTQ0LjM2IDI2My43NCBDIDE0My40OSAyNjQuODggMTQyLjYyIDI2Ni4wMSAxNDEuNzkgMjY3LjE4IEMgMTQxLjM2IDI2Ni42MyAxNDAuNTAgMjY1LjUzIDE0MC4wNyAyNjQuOTcgQyAxNDAuNTIgMjYzLjU0IDE0MS4wMCAyNjIuMTIgMTQxLjQ3IDI2MC43MCBDIDE0MC44NSAyNjEuNTggMTQwLjIyIDI2Mi40NiAxMzkuNjAgMjYzLjM1IEMgMTM1LjgzIDI2Mi45NCAxMzUuMzggMjY3LjE2IDEzMy4wNiAyNjkuMTEgQyAxMzMuNzcgMjY2Ljk2IDEzNC43OCAyNjQuOTQgMTM1Ljc5IDI2Mi45MiBDIDEzNS4zNyAyNjIuNTYgMTM0LjUyIDI2MS44NCAxMzQuMDkgMjYxLjQ4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEzOS42MCAyNjMuMzUgQyAxNDAuMjIgMjYyLjQ2IDE0MC44NSAyNjEuNTggMTQxLjQ3IDI2MC43MCBDIDE0MS4wMCAyNjIuMTIgMTQwLjUyIDI2My41NCAxNDAuMDcgMjY0Ljk3IEMgMTM5LjQ2IDI2Ny42MSAxMzcuNzAgMjY5Ljc2IDEzNS4yMiAyNzAuODMgQyAxMzYuNTUgMjY4LjI2IDEzOC4xMSAyNjUuODIgMTM5LjYwIDI2My4zNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNi4xNiAyNjMuMTYgQyAzNy4xMSAyNjIuODEgMzguMDYgMjYyLjQ3IDM5LjAxIDI2Mi4xNCBDIDQwLjIyIDI2Ni4xNSA0My41MCAyNjkuNzcgNDMuMjQgMjc0LjA2IEMgNDAuNTAgMjc2LjE0IDM3LjE5IDI3Ny4yOCAzNC4xOCAyNzguOTAgQyAzMy40MSAyNzcuMzMgMzIuNjMgMjc1Ljc2IDMxLjg5IDI3NC4xOCBDIDM0LjM2IDI3My4wMSAzNi44MyAyNzEuODYgMzkuMzEgMjcwLjczIEMgMzguMjggMjY4LjE5IDM3LjIwIDI2NS42OSAzNi4xNiAyNjMuMTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzU3Ljg5IDI2Mi41NiBDIDM1OS41NSAyNjMuMjEgMzYxLjIwIDI2My44NyAzNjIuODcgMjY0LjUyIEMgMzYzLjE0IDI2NS45MiAzNjMuMTkgMjY3LjM0IDM2My4wNiAyNjguNzYgQyAzNjQuOTYgMjY3Ljk3IDM2Ni44NCAyNjcuMTQgMzY4LjczIDI2Ni4zMSBDIDM2Ny45NiAyNjguMDQgMzY3LjE5IDI2OS43NyAzNjYuNDcgMjcxLjUyIEMgMzYzLjg5IDI3Mi43MiAzNjEuMjQgMjczLjc0IDM1OC42MSAyNzQuODAgQyAzNjAuMTIgMjc1Ljg0IDM2MS43OCAyNzYuNjIgMzYzLjQ5IDI3Ny4yNiBDIDM2Mi44MSAyNzguOTAgMzYyLjEwIDI4MC41MiAzNjEuMzggMjgyLjE0IEMgMzU5LjQ0IDI4MS4yNCAzNTcuNTYgMjgwLjIyIDM1NS43MyAyNzkuMTQgQyAzNTUuNzUgMjc4LjI5IDM1NS43OSAyNzYuNTggMzU1LjgyIDI3NS43MiBDIDM1NC4yMyAyNzYuMzIgMzUyLjY0IDI3Ni45MiAzNTEuMDYgMjc3LjUyIEMgMzUxLjY4IDI3NS44NiAzNTIuMTYgMjc0LjAzIDM1My40MiAyNzIuNzMgQyAzNTUuODIgMjcxLjYwIDM1OC4zNyAyNzAuODEgMzYwLjgzIDI2OS44MSBDIDM1OS4zMyAyNjguNjQgMzU3LjYyIDI2Ny44MCAzNTUuODcgMjY3LjA3IEMgMzU2LjU1IDI2NS41NiAzNTcuMjIgMjY0LjA2IDM1Ny44OSAyNjIuNTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTQxLjc5IDI2Ny4xOCBDIDE0Mi42MiAyNjYuMDEgMTQzLjQ5IDI2NC44OCAxNDQuMzYgMjYzLjc0IEMgMTQ0LjE3IDI2NC41NyAxNDMuNzkgMjY2LjIyIDE0My42MCAyNjcuMDQgQyAxNDIuODMgMjY5LjQ1IDE0MS45OCAyNzIuMzUgMTM5LjMwIDI3My4yMiBDIDE0MC4wNyAyNzEuMTggMTQwLjc3IDI2OS4xMCAxNDEuNzkgMjY3LjE4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE0NC40NiAyNjguMjQgQyAxNDUuMjMgMjY3LjEwIDE0Ni4wMiAyNjUuOTggMTQ2LjgwIDI2NC44NiBDIDE0Ni42OCAyNjUuODcgMTQ2LjU1IDI2Ni44OSAxNDYuNDMgMjY3LjkyIEMgMTQ1LjcxIDI2OS44NiAxNDQuOTEgMjcxLjc3IDE0NC4yMCAyNzMuNzEgQyAxNDMuOTggMjczLjY4IDE0My41NCAyNzMuNjAgMTQzLjMyIDI3My41NiBDIDE0My42NyAyNzEuNzggMTQzLjkxIDI2OS45NyAxNDQuNDYgMjY4LjI0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM5LjYzIDI3OS4yOSBDIDQxLjYyIDI3OC4yNCA0My42MCAyNzcuMTcgNDUuNjAgMjc2LjE0IEMgNDYuMzYgMjc3LjU5IDQ3LjEzIDI3OS4wNSA0Ny44OCAyODAuNTEgQyA0NS44OCAyODEuNTkgNDMuODkgMjgyLjY2IDQxLjg3IDI4My43MCBDIDQxLjEzIDI4Mi4yMyA0MC4zOCAyODAuNzYgMzkuNjMgMjc5LjI5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMxNS4xMiAyNzUuODggQyAzMTYuNTUgMjc3Ljg1IDMxNy4zMyAyODAuMTggMzE4LjEzIDI4Mi40NiBDIDMxOC42MyAyODEuMTMgMzE5LjE2IDI3OS44MSAzMTkuNzIgMjc4LjUwIEMgMzE5LjY4IDI4Mi40MiAzMTguODAgMjg2LjgwIDMyMi4wNSAyODkuNzYgTCAzMjIuMTUgMjg5LjkwIEMgMzIxLjU0IDI5MC41NyAzMjAuOTQgMjkxLjI2IDMyMC4zNSAyOTEuOTUgQyAzMTguMTkgMjg4LjY3IDMxNi4xNSAyODQuNTQgMzExLjcwIDI4NC4yMyBDIDMxMi44MiAyODMuOTMgMzEzLjk1IDI4My42NCAzMTUuMDggMjgzLjM1IEMgMzEzLjYxIDI4Mi43NSAzMTIuMzUgMjgxLjg3IDMxMS4zMCAyODAuNjkgQyAzMTIuNzggMjgxLjIwIDMxNC4yMyAyODEuNzcgMzE1LjY3IDI4Mi4zOSBDIDMxNC40NCAyODAuODcgMzEzLjIyIDI3OS4zNiAzMTIuMTggMjc3LjcyIEMgMzEzLjgwIDI3OC42NCAzMTUuMzEgMjc5LjczIDMxNi43MSAyODEuMDAgQyAzMTYuMzEgMjc5LjcyIDMxNS41MiAyNzcuMTYgMzE1LjEyIDI3NS44OCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA3Ny44OSAyODkuMDIgQyA4Mi42NyAyODUuOTMgODYuNjYgMjgxLjgzIDg5Ljc3IDI3Ny4wNyBDIDkwLjE4IDI3Ny4zOSA5MS4wMSAyNzguMDIgOTEuNDIgMjc4LjM0IEMgOTEuNzAgMjc5LjExIDkyLjI2IDI4MC42NCA5Mi41MyAyODEuNDAgQyA4OS4xOCAyODUuMTAgODUuMTIgMjg4LjEyIDgxLjA5IDI5MS4wNCBDIDgxLjI1IDI5Mi4yMyA4MS41MCAyOTMuNDEgODEuNzMgMjk0LjYwIEMgODMuMjYgMjkzLjk0IDg0LjgxIDI5My44NyA4Ni40MCAyOTQuNDAgQyA4Ny4zNyAyOTYuNjUgODguNDAgMjk4LjkzIDg4LjM0IDMwMS40NSBDIDg1Ljg1IDI5OS41OSA4NC4zOSAyOTYuNTUgODEuNTMgMjk1LjE5IEMgODAuMTMgMjkzLjI0IDc5LjQzIDI5MC44OCA3Ny44OSAyODkuMDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQzLjcyIDI4OS43MyBDIDM0Ni4wMyAyODYuMjcgMzQ3LjM3IDI4MS45MiAzNTAuODUgMjc5LjQxIEMgMzUzLjkyIDI4MS4wMSAzNTYuOTMgMjgyLjcyIDM1OS45NSAyODQuNDMgQyAzNTkuMTQgMjg1LjkzIDM1OC4zMSAyODcuNDEgMzU3LjQ4IDI4OC44OSBDIDM1NS4wNSAyODcuNTAgMzUyLjY1IDI4Ni4wNCAzNTAuMTUgMjg0LjgwIEMgMzQ4Ljk1IDI4Ni45OSAzNDcuNjAgMjg5LjEwIDM0Ni4yMyAyOTEuMTkgQyAzNDUuNjAgMjkwLjgzIDM0NC4zNSAyOTAuMTAgMzQzLjcyIDI4OS43MyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA0My40MiAyODkuNTYgQyA0NS40OSAyODcuNDUgNDcuMzYgMjg1LjE2IDQ5LjIwIDI4Mi44NSBDIDUwLjA5IDI4NC4yNyA1MC45NyAyODUuNzAgNTEuODYgMjg3LjEyIEMgNDkuODggMjg5LjM0IDQ3Ljc2IDI5MS40NiA0Ni4xNCAyOTMuOTYgQyA0Ni41MyAyOTQuMzcgNDcuMzEgMjk1LjE4IDQ3LjcwIDI5NS41OSBDIDQ5LjkxIDI5NC4xMyA1Mi4xMCAyOTIuNjUgNTQuMTkgMjkxLjAzIEMgNTUuMTYgMjkyLjMxIDU2LjE0IDI5My41OCA1Ni45MSAyOTUuMDAgQyA1My44OCAyOTYuODMgNTAuNzQgMzAxLjI4IDQ2Ljg1IDI5OS40MCBDIDQzLjQ0IDI5Ni4zMyA0MS41NSAyOTEuOTUgMzkuMjAgMjg4LjA4IEMgMzkuODkgMjg3LjczIDQxLjI3IDI4Ny4wNCA0MS45NyAyODYuNjkgQyA0Mi4zMyAyODcuNDEgNDMuMDYgMjg4Ljg0IDQzLjQyIDI4OS41NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA5Ny44NiAyODguMDAgQyAxMDAuNjEgMjg2LjQ0IDEwMy41MiAyODUuMTkgMTA2LjE2IDI4My40MyBDIDEwNi4yOSAyODQuMDkgMTA2LjU2IDI4NS40MCAxMDYuNjkgMjg2LjA1IEMgMTA0LjEwIDI4OC4wNyAxMDEuMTkgMjg5LjYxIDk4LjM3IDI5MS4yNiBDIDk3LjMyIDI5Ny42MiA5OC4wNyAzMDQuMDggOTcuMjQgMzEwLjQ2IEMgOTUuNjMgMzA5LjMxIDk0LjExIDMwOC4wNSA5Mi42NCAzMDYuNzMgQyA5Mi44NSAzMDIuNTUgOTMuNDAgMjk4LjM4IDk0LjU2IDI5NC4zNSBDIDk1LjIyIDI5Mi4wNyA5NS43MCAyODkuMzYgOTcuODYgMjg4LjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMwNi40NyAyODYuNzYgQyAzMDYuOTIgMjg0LjgyIDMwOC41OSAyODUuMjMgMzA5LjI4IDI4Ni43OCBDIDMwOS41OSAyODYuNjQgMzEwLjIzIDI4Ni4zNCAzMTAuNTUgMjg2LjE5IEMgMzExLjEzIDI5MC40MSAzMTIuNTggMjk0LjU2IDMxNi4xNSAyOTcuMTUgQyAzMTUuMzcgMjk4LjAxIDMxNC41OSAyOTguODYgMzEzLjgxIDI5OS43MiBDIDMxMS40NyAyOTYuNzQgMzA4LjQ3IDI5NC40MSAzMDUuNDEgMjkyLjIyIEMgMzA2LjI3IDI5Mi4yMyAzMDcuOTcgMjkyLjI1IDMwOC44MiAyOTIuMjYgQyAzMDcuNzEgMjkwLjk4IDMwNi41OSAyODkuNzIgMzA1LjQ5IDI4OC40NCBDIDMwNi4xNCAyODguNTUgMzA3LjQ1IDI4OC43NSAzMDguMTAgMjg4Ljg2IEMgMzA3LjY5IDI4OC4zMyAzMDYuODggMjg3LjI5IDMwNi40NyAyODYuNzYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjc4Ljc4IDI5Mi4wMCBDIDI4MC4xNiAyOTAuMTcgMjgwLjUzIDI4Ny45NCAyODAuOTUgMjg1Ljc1IEMgMjgyLjM5IDI5My43OSAyODYuMzkgMzAwLjkxIDI5MC4xNyAzMDguMDMgQyAyOTEuMjAgMzAzLjkxIDI5Mi4xNSAyOTkuNzUgMjkzLjY4IDI5NS43NyBDIDI5My4zNSAyOTQuOTIgMjkzLjAyIDI5NC4wNyAyOTIuNzAgMjkzLjIzIEMgMjkzLjAyIDI5MS45MyAyOTMuMzQgMjkwLjYzIDI5My42NyAyODkuMzMgQyAyOTUuMzUgMjg5LjUwIDI5Ny4xNyAyODkuNDcgMjk4LjU4IDI5MC41NyBDIDMwMi4xMSAyOTIuOTEgMzA1Ljc4IDI5NS4wNyAzMDkuMDcgMjk3Ljc2IEMgMzEwLjY0IDI5OC44MiAzMTAuOTMgMzAwLjgwIDMxMS42MCAzMDIuNDQgQyAzMTAuMjQgMzAzLjc4IDMwOC45MiAzMDUuMTUgMzA3LjYzIDMwNi41NiBDIDMwNy41MCAzMDUuMzcgMzA3LjM2IDMwNC4xOCAzMDcuMjMgMzAzLjAwIEMgMzA0LjA3IDMwMC44MiAzMDEuOTUgMjk3LjUxIDI5OC44NyAyOTUuMjcgQyAyOTcuMTEgMjk1LjI4IDI5NS40NiAyOTUuOTkgMjkzLjc4IDI5Ni40MCBDIDI5My42MiAyOTguMTAgMjkzLjQzIDI5OS44MSAyOTMuMjIgMzAxLjUxIEMgMjk0LjMyIDMwMS45NSAyOTUuNDIgMzAyLjQxIDI5Ni41MyAzMDIuODcgQyAyOTUuNTcgMzA0LjA1IDI5NC42MyAzMDUuMjMgMjkzLjYzIDMwNi4zNiBDIDI5My4wNCAzMDguNTIgMjkyLjE1IDMxMC41NyAyOTEuMzUgMzEyLjY1IEMgMjkxLjg4IDMxMi43NiAyOTIuOTQgMzEyLjk4IDI5My40NyAzMTMuMDkgQyAyOTIuMzcgMzE1LjEyIDI5My4yNyAzMTcuMjkgMjkzLjYzIDMxOS4zNyBDIDI3Mi45NSAzMzQuODYgMjQ4Ljc2IDM0Ni4wNyAyMjMuMDcgMzQ5LjczIEMgMTk2LjkyIDM1My4zNSAxNjkuNjYgMzUxLjA0IDE0NS4xMCAzNDEuMDUgQyAxMzQuNTYgMzM3LjE3IDEyNC45NSAzMzEuMzMgMTE1LjI4IDMyNS43NCBDIDExNS40NCAzMjUuNTYgMTE1Ljc1IDMyNS4yMCAxMTUuOTEgMzI1LjAyIEMgMTE2LjEyIDMyNC45NyAxMTYuNTUgMzI0Ljg3IDExNi43NiAzMjQuODIgQyAxMTUuODMgMzIyLjI1IDExNi4wMSAzMTkuNTQgMTE2LjU1IDMxNi45MiBDIDExNy4xNCAzMTYuMDIgMTE3LjY4IDMxNS4wOSAxMTguMTggMzE0LjE0IEMgMTE4Ljc0IDMxMi4wNSAxMTUuNDMgMzE1LjEyIDExNC40NCAzMTUuMTYgQyAxMTMuNzcgMzE4LjI4IDExMy4yOSAzMjEuODkgMTE1LjEwIDMyNC43NSBDIDExNC45MyAzMjQuODcgMTE0LjYwIDMyNS4xMyAxMTQuNDMgMzI1LjI2IEMgMTA4LjgxIDMyMC41NyAxMDMuMDYgMzE2LjAwIDk3LjM0IDMxMS40NCBDIDEwMC40NCAzMTAuMDMgMTAzLjg1IDMwOC43OSAxMDYuMjIgMzA2LjI0IEMgMTA3LjkxIDMwMi45NSAxMDkuMjkgMjk5LjQ0IDExMS42OCAyOTYuNTYgQyAxMTEuMjggMjk4LjI4IDExMC42OCAyOTkuOTUgMTEwLjEwIDMwMS42MyBDIDExMC43NSAzMDEuOTAgMTEyLjA0IDMwMi40NSAxMTIuNjkgMzAyLjcyIEMgMTExLjk4IDMwMy41OCAxMTEuMTkgMzA0LjM4IDExMC4zOSAzMDUuMTUgQyAxMDkuNDYgMzA2LjkwIDEwOC4yOCAzMDguNTAgMTA2Ljk1IDMwOS45NyBDIDEwOC4zMCAzMTAuMjYgMTA5LjY0IDMxMC41OSAxMTAuOTggMzEwLjk4IEMgMTExLjYwIDMwNy41NyAxMTIuODUgMzA0LjMzIDExNC4wNCAzMDEuMTAgQyAxMTUuNDggMjk4LjAxIDExMi40NSAyOTUuMDcgMTEzLjIxIDI5MS44NyBDIDExMi41OSAyODkuNTYgMTE0Ljk3IDI4OS42NyAxMTUuMzggMjkxLjk1IEMgMTE1LjgwIDI5MS40MyAxMTYuNjYgMjkwLjM5IDExNy4wOSAyODkuODggQyAxMTYuODkgMjkwLjg0IDExNi41MSAyOTIuNzcgMTE2LjMyIDI5My43NCBDIDExNy4xNCAyOTIuOTEgMTE4Ljc4IDI5MS4yNyAxMTkuNjAgMjkwLjQ1IEMgMTE5LjA4IDI5MS40MCAxMTguMDQgMjkzLjMwIDExNy41MiAyOTQuMjUgQyAxMTguMjggMjkzLjkwIDExOS44MiAyOTMuMjIgMTIwLjU4IDI5Mi44NyBDIDExNy4zMSAyOTguNDQgMTE2LjMxIDMwNC45MSAxMTUuMTkgMzExLjE2IEMgMTE4Ljg4IDMxMC40MyAxMjIuMzYgMzA4LjgyIDEyNC45OCAzMDYuMDYgQyAxMjQuNTEgMzA1LjU1IDEyMy41NyAzMDQuNTMgMTIzLjEwIDMwNC4wMiBDIDEyMy44MyAzMDMuMzcgMTI1LjMwIDMwMi4wNyAxMjYuMDMgMzAxLjQyIEMgMTI1LjIyIDMwMS40NiAxMjMuNjAgMzAxLjUzIDEyMi43OCAzMDEuNTcgQyAxMjQuNjQgMjk5LjgxIDEyNi4zNiAyOTcuOTEgMTI3LjY3IDI5NS43MSBDIDEyNy4wOCAyOTguMzMgMTI3LjM2IDMwMC45OSAxMjcuOTQgMzAzLjU5IEMgMTI4Ljk5IDMwMy45NiAxMzEuMTEgMzA0LjcwIDEzMi4xNiAzMDUuMDggQyAxMzEuMDMgMzA1LjgzIDEyOS44OSAzMDYuNTggMTI4Ljc1IDMwNy4zMiBMIDEzMS44MiAzMDcuMDYgQyAxMzEuMDggMzA3LjgwIDEyOS41OCAzMDkuMjcgMTI4LjgzIDMxMC4wMCBDIDEyOS45MCAzMTQuMjMgMTMxLjc4IDMxOC4xOSAxMzMuMDMgMzIyLjM2IEMgMTMzLjYyIDMyMC45OSAxMzQuMTYgMzE5LjU5IDEzNC42NSAzMTguMTggTCAxMzUuMzggMzE4LjU2IEMgMTM2Ljc0IDMxMy43OSAxMzkuMTQgMzA5LjQ0IDE0MC45NyAzMDQuODUgQyAxNDYuOTAgMzAxLjc5IDE1My41MCAzMDAuMzcgMTU5LjcxIDI5OC4wMSBDIDE2MC44NyAzMDAuMzQgMTYwLjU3IDMwMi44MCAxNTkuMTggMzA0Ljk3IEMgMTU3LjczIDMwNC4yMSAxNTYuMzAgMzAzLjQzIDE1NC44OCAzMDIuNjMgQyAxNTEuMDIgMzAzLjY4IDE0Ny43MyAzMDUuOTkgMTQ0LjQzIDMwOC4xNCBDIDE0My41OSAzMTEuNjYgMTQyLjk4IDMxNS4yNSAxNDMuNTAgMzE4Ljg4IEMgMTQzLjk3IDMxOC43NiAxNDQuOTIgMzE4LjU0IDE0NS4zOSAzMTguNDMgQyAxNDUuNTYgMzE2LjIzIDE0NS41OCAzMTQuMDIgMTQ1Ljg4IDMxMS44MyBDIDE0Ni4yNiAzMDguODMgMTQ4Ljc0IDMwNi41OSAxNTEuMzQgMzA1LjM0IEMgMTUzLjUxIDMwNS4wOSAxNTUuMDggMzA2Ljk1IDE1Ni44MSAzMDcuOTUgQyAxNTYuODQgMzA5LjM0IDE1Ni44NyAzMTAuNzQgMTU2LjkxIDMxMi4xNCBDIDE1Ni4wOCAzMTMuMDUgMTU1LjI2IDMxMy45NSAxNTQuNDMgMzE0Ljg3IEMgMTU0LjY2IDMxNy41NiAxNTUuMDMgMzIwLjI0IDE1NS40MyAzMjIuOTEgQyAxNTcuOTcgMzIxLjIzIDE2MC45OCAzMjAuOTEgMTYzLjk2IDMyMS4xNSBDIDE2NC45NCAzMjEuODggMTY1LjkyIDMyMi42MiAxNjYuOTAgMzIzLjM3IEMgMTY4Ljc3IDMyMS40MCAxNzAuODQgMzE5LjU5IDE3Mi4zNSAzMTcuMzIgQyAxNzMuNDggMzE1LjI3IDE3My45NCAzMTIuOTMgMTc1LjAxIDMxMC44NSBDIDE3NS4yOSAzMTEuNzUgMTc1Ljg0IDMxMy41MyAxNzYuMTIgMzE0LjQzIEMgMTc2LjYzIDMxMy4xOSAxNzYuMTcgMzExLjk2IDE3NS44MSAzMTAuNzggQyAxNzYuNzMgMzEwLjU2IDE3Ny42NSAzMTAuMzggMTc4LjU4IDMxMC4yMiBDIDE3OC43MSAzMTEuODMgMTc4Ljc3IDMxMy40NCAxNzguNzAgMzE1LjA2IEMgMTczLjUzIDMxNy4wMiAxNzIuMDAgMzIyLjgzIDE2OS4yNSAzMjcuMTAgQyAxNzAuMDUgMzI4LjY5IDE3MS4wMiAzMzAuMTkgMTcxLjkxIDMzMS43NCBDIDE3Ny4wOSAzMjQuMjcgMTgyLjY5IDMxNi4zNSAxODMuNTEgMzA3LjAxIEMgMTg0LjY0IDMwNy41OCAxODYuMTkgMzA3Ljc1IDE4Ni43OSAzMDkuMDQgQyAxODcuMzQgMzEwLjcwIDE4Ni4yOCAzMTIuMjUgMTg1LjY2IDMxMy43MyBDIDE4My44OSAzMTcuMzAgMTgyLjUyIDMyMS4wNiAxODAuODUgMzI0LjY4IEMgMTgxLjcyIDMyNC42MiAxODMuNDYgMzI0LjUyIDE4NC4zMiAzMjQuNDcgQyAxODQuNjUgMzI0LjczIDE4NS4zMSAzMjUuMjcgMTg1LjYzIDMyNS41NCBDIDE4Ny40MyAzMjQuMzQgMTg5LjI4IDMyMy4yMSAxOTAuOTkgMzIxLjg5IEMgMTkzLjU2IDMxOS45OCAxOTQuNDggMzE2Ljc2IDE5Ni40MiAzMTQuMzQgQyAxOTcuMzkgMzEyLjYyIDE5OS43MSAzMTMuNDggMjAxLjI4IDMxMy4wNSBDIDIwMS4wNyAzMTMuMzkgMjAwLjY0IDMxNC4wNiAyMDAuNDIgMzE0LjQwIEMgMjAwLjQxIDMxNS43OCAyMDEuMTEgMzE3LjYwIDE5OS41MSAzMTguMzggQyAxOTUuNTUgMzIxLjA5IDE5MS43OCAzMjQuMDUgMTg4LjM5IDMyNy40NiBDIDE4OC43NSAzMjkuOTMgMTg4Ljg0IDMzMi40NCAxODkuMzEgMzM0LjkwIEMgMTg5Ljg1IDMzNi41NCAxOTEuNjQgMzM3LjE5IDE5Mi45MSAzMzguMTUgQyAxOTIuMTEgMzM2LjM1IDE5MS4xNiAzMzQuNjIgMTkwLjQzIDMzMi43OSBDIDE4OS43MCAzMjkuOTUgMTkwLjg2IDMyNy4xMyAxOTEuNzYgMzI0LjQ5IEMgMTkzLjkxIDMyNC4zMSAxOTYuNTIgMzIyLjk4IDE5OC4zOCAzMjQuNjkgQyAyMDAuMTkgMzI2LjYyIDIwMS42NyAzMjguOTIgMjA0LjExIDMzMC4xNiBDIDIwNC44NCAzMzEuMTUgMjA1LjU2IDMzMi4xNCAyMDYuMzAgMzMzLjEzIEMgMjA2LjQ3IDMyNy40MyAyMDQuMzQgMzIxLjczIDIwNS41OCAzMTYuMDYgQyAyMDUuNzQgMzE0LjkzIDIwNi44NCAzMTQuMzMgMjA3LjU1IDMxMy41NyBDIDIwNy45NCAzMTQuOTcgMjA4LjMyIDMxNi4zOCAyMDguNjcgMzE3LjgwIEMgMjA4LjA3IDMxOS4zMiAyMDYuNjggMzIwLjg2IDIwNy40MCAzMjIuNjAgQyAyMDguMzcgMzI0LjQxIDIxMC45NyAzMjUuMjIgMjEwLjQ0IDMyNy43NCBDIDIxMi4zNyAzMjUuNzYgMjE1LjA1IDMyNS4xNyAyMTcuNjUgMzI0LjYwIEMgMjE3LjAwIDMyMy42OSAyMTYuMzcgMzIyLjc3IDIxNS43NCAzMjEuODYgQyAyMTQuNDUgMzIxLjMwIDIxMy4xOCAzMjAuNjggMjExLjkyIDMyMC4wNCBDIDIxMi43NyAzMTkuMTkgMjEzLjY0IDMxOC4zNCAyMTQuNTEgMzE3LjUwIEMgMjEzLjkwIDMxNS45OCAyMTMuMzQgMzE0LjQ1IDIxMi44NyAzMTIuOTAgQyAyMTUuNTUgMzE1LjkxIDIxNy4zMiAzMTkuNjIgMjIwLjE0IDMyMi41MiBDIDIyMi44MSAzMTcuNzggMjE5Ljc3IDMxMi4xMSAyMjIuNjQgMzA3LjQ5IEMgMjIzLjA3IDMwNy41MSAyMjMuOTMgMzA3LjU2IDIyNC4zNiAzMDcuNTggQyAyMjQuOTQgMzA5LjQwIDIyNS41MyAzMTEuMjIgMjI2LjI3IDMxMi45OCBDIDIyMi40OSAzMTcuODkgMjI0Ljk3IDMyNC4wNiAyMjUuNTcgMzI5LjU2IEMgMjI2LjM4IDMyOS4zMyAyMjguMDEgMzI4Ljg3IDIyOC44MiAzMjguNjQgQyAyMzEuNzkgMzIxLjAxIDIzNC42MyAzMTIuODggMjMzLjM5IDMwNC41NCBDIDIzNC42MCAzMDUuMjEgMjM3LjY1IDMwNC45MSAyMzcuNTIgMzA3LjAxIEMgMjM3LjI3IDMxMS41NCAyMzUuNjUgMzE1LjkwIDIzNS4zMSAzMjAuNDUgQyAyMzYuMDggMzIwLjIwIDIzNi44NCAzMTkuOTUgMjM3LjYxIDMxOS43MSBDIDIzNi41NyAzMTYuMjAgMjM4LjIyIDMxMi42MyAyNDEuNzMgMzExLjQ2IEMgMjQyLjkwIDMxMi4yMyAyNDQuMDggMzEzLjAwIDI0NS4yNiAzMTMuNzYgQyAyNDUuNzIgMzE2LjMyIDI0Ni4yOSAzMTguODYgMjQ2Ljc3IDMyMS40MSBDIDI0OS43NyAzMjIuMzggMjUyLjQyIDMyNC4xMSAyNTUuMTkgMzI1LjU5IEMgMjU2LjQyIDMyNC4zNSAyNTcuNjIgMzIzLjA3IDI1OC44MCAzMjEuNzggQyAyNTguODYgMzE5LjA4IDI1OC45MSAzMTYuMzkgMjU4Ljg5IDMxMy42OSBDIDI1Ni44MyAzMTIuNDggMjU0Ljg0IDMxMS4xNyAyNTMuMDAgMzA5LjY1IEMgMjU0LjQwIDMwOS42NiAyNTUuODAgMzA5LjcwIDI1Ny4yMCAzMDkuNzYgQyAyNTYuMjggMzA2LjY1IDI1Ni4wNyAzMDMuMzkgMjU2LjA5IDMwMC4xNiBDIDI1Ny43OCAzMDEuMDMgMjU4LjcxIDMwMi42NiAyNTkuNTQgMzA0LjI4IEMgMjU5Ljc3IDMwMi45NyAyNjAuMDIgMzAxLjY2IDI2MC4yOCAzMDAuMzYgQyAyNjEuNTIgMzA1LjM0IDI2MS43NyAzMTAuOTYgMjY1Ljg2IDMxNC42MiBDIDI2Ni43NCAzMTIuNzggMjY3LjIyIDMxMC41MSAyNjkuMTMgMzA5LjQzIEMgMjcyLjE2IDMwNy4zNSAyNzQuODcgMzA0LjgxIDI3OC4wNiAzMDIuOTQgQyAyNzcuNTkgMzA1LjM4IDI3NS41NCAzMDYuODIgMjczLjY3IDMwOC4xOSBDIDI3NS41NiAzMDkuNTYgMjc2Ljg5IDMxMS41MSAyNzguMjMgMzEzLjM5IEMgMjc4LjUyIDMxMi44NyAyNzkuMTAgMzExLjgxIDI3OS4zOSAzMTEuMjggQyAyODAuNTQgMzEwLjkyIDI4MS43MCAzMTAuNTggMjgyLjg3IDMxMC4yNCBDIDI4NC4wNiAzMTAuOTEgMjg1LjI1IDMxMS41NyAyODYuNDUgMzEyLjI0IEMgMjg0Ljk2IDMwOC45NSAyODMuODYgMzA1LjUwIDI4Mi41OSAzMDIuMTIgQyAyODEuODIgMjk5LjU3IDI3OC41OCAyOTguNzQgMjc4LjA1IDI5Ni4wOSBDIDI3Ny4zNyAyOTMuMjMgMjc2LjIyIDI5MC41MiAyNzUuMzggMjg3LjcxIEMgMjc2LjgyIDI4OC44OCAyNzcuNzggMjkwLjQ3IDI3OC43OCAyOTIuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQyLjQ1IDI5MS4zMiBDIDM0NS43MyAyOTMuMzggMzQ4Ljk1IDI5NS41MSAzNTIuMTAgMjk3Ljc3IEMgMzUxLjE5IDI5OS4wMCAzNTAuMzAgMzAwLjI0IDM0OS4zOSAzMDEuNDggQyAzNDguODMgMzAxLjA3IDM0Ny43MCAzMDAuMjUgMzQ3LjE0IDI5OS44NCBDIDM0Ny4xNiAzMDEuODIgMzQ3LjY1IDMwMy45MyAzNDYuNzMgMzA1LjgwIEMgMzQ1LjQ0IDMwNi4wMSAzNDQuNDggMzA1LjA0IDM0My40NyAzMDQuNDYgQyAzNDQuMzQgMzAxLjk1IDM0NS40NiAyOTguNzIgMzQyLjc5IDI5Ni44MyBDIDM0MS41NCAyOTcuOTkgMzQwLjgxIDMwMC4wOCAzMzkuMjIgMzAwLjY2IEMgMzM4LjY2IDMwMC4yOSAzMzcuNTUgMjk5LjU0IDMzNy4wMCAyOTkuMTcgQyAzMzguOTQgMjk2LjY1IDM0MC44MCAyOTQuMDUgMzQyLjQ1IDI5MS4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA1NS41NiAyOTguMzkgQyA1Ny4zMyAyOTYuOTUgNTkuMTggMjk1LjYxIDYxLjA0IDI5NC4yOCBDIDYxLjk0IDI5NS41NCA2Mi44NiAyOTYuNzkgNjMuNzkgMjk4LjAzIEMgNjIuNzcgMjk4Ljc0IDYxLjc2IDI5OS40NCA2MC43NCAzMDAuMTUgQyA2Mi4zOCAzMDIuMzQgNjQuMDcgMzA0LjQ5IDY1Ljc3IDMwNi42MyBDIDY0LjI2IDMwNy44OCA2Mi44NCAzMDkuMjQgNjEuMTYgMzEwLjI3IEMgNTguODAgMzEwLjM5IDU2LjQzIDMxMC4xMiA1NC4wNyAzMTAuMjcgQyA1My4wOCAzMDkuMDIgNTIuMDkgMzA3Ljc3IDUxLjE0IDMwNi40OSBDIDUzLjQwIDMwNS4zMCA1NS44OCAzMDYuMTggNTguMjMgMzA2LjUxIEMgNTguODEgMzA2LjE1IDU5Ljk5IDMwNS40MyA2MC41NyAzMDUuMDcgQyA1OC44OSAzMDIuODUgNTcuMjMgMzAwLjYyIDU1LjU2IDI5OC4zOSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzggMjk2LjQwIEMgMjk1LjQ2IDI5NS45OSAyOTcuMTEgMjk1LjI4IDI5OC44NyAyOTUuMjcgQyAzMDEuOTUgMjk3LjUxIDMwNC4wNyAzMDAuODIgMzA3LjIzIDMwMy4wMCBDIDMwNy4zNiAzMDQuMTggMzA3LjUwIDMwNS4zNyAzMDcuNjMgMzA2LjU2IEMgMzA2LjkzIDMwNy4yMSAzMDYuMjIgMzA3Ljg3IDMwNS41MyAzMDguNTQgQyAzMDQuNDMgMzA3LjIzIDMwMy4zMiAzMDUuOTMgMzAyLjI3IDMwNC42MCBDIDMwMS4zNCAzMDQuOTMgMzAwLjQyIDMwNS4yNiAyOTkuNTEgMzA1LjYwIEMgMjk5LjQwIDMwNC45NCAyOTkuMjAgMzAzLjYxIDI5OS4wOSAzMDIuOTQgQyAyOTguMDkgMzA0LjIwIDI5Ny4xMiAzMDUuNDggMjk2LjIwIDMwNi43OSBDIDI5NS42MSAzMDYuNzggMjk0LjQzIDMwNi43NSAyOTMuODQgMzA2Ljc0IEMgMjk2LjEzIDMwOC4yMyAyOTQuOTAgMzA5Ljc1IDI5My4yMSAzMTEuMTUgQyAyOTMuODMgMzExLjU5IDI5NC40NSAzMTIuMDIgMjk1LjA3IDMxMi40NyBDIDI5NC42NiAzMTMuOTIgMjk0LjI4IDMxNS4zOSAyOTMuOTAgMzE2Ljg2IEMgMjk0LjQ5IDMxNi43MSAyOTUuNjYgMzE2LjQxIDI5Ni4yNSAzMTYuMjYgQyAyOTUuMzcgMzE3LjI5IDI5NC41MSAzMTguMzQgMjkzLjYzIDMxOS4zNyBDIDI5My4yNyAzMTcuMjkgMjkyLjM3IDMxNS4xMiAyOTMuNDcgMzEzLjA5IEMgMjkyLjk0IDMxMi45OCAyOTEuODggMzEyLjc2IDI5MS4zNSAzMTIuNjUgQyAyOTIuMTUgMzEwLjU3IDI5My4wNCAzMDguNTIgMjkzLjYzIDMwNi4zNiBDIDI5NC42MyAzMDUuMjMgMjk1LjU3IDMwNC4wNSAyOTYuNTMgMzAyLjg3IEMgMjk1LjQyIDMwMi40MSAyOTQuMzIgMzAxLjk1IDI5My4yMiAzMDEuNTEgQyAyOTMuNDMgMjk5LjgxIDI5My42MiAyOTguMTAgMjkzLjc4IDI5Ni40MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMzIuNjUgMzA0LjY2IEMgMzMzLjY3IDMwMy40OSAzMzQuNzAgMzAyLjMyIDMzNS43MyAzMDEuMTYgQyAzMzguNjIgMzAzLjU4IDM0MS42MiAzMDUuODggMzQ0LjYzIDMwOC4xNSBDIDM0My42MiAzMDkuNDUgMzQyLjYwIDMxMC43NSAzNDEuNTcgMzEyLjA1IEMgMzM4LjU2IDMwOS42MyAzMzUuNTQgMzA3LjIxIDMzMi42NSAzMDQuNjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk2LjIwIDMwNi43OSBDIDI5Ny4xMiAzMDUuNDggMjk4LjA5IDMwNC4yMCAyOTkuMDkgMzAyLjk0IEMgMjk5LjIwIDMwMy42MSAyOTkuNDAgMzA0Ljk0IDI5OS41MSAzMDUuNjAgQyAzMDAuNDIgMzA1LjI2IDMwMS4zNCAzMDQuOTMgMzAyLjI3IDMwNC42MCBDIDMwMy4zMiAzMDUuOTMgMzA0LjQzIDMwNy4yMyAzMDUuNTMgMzA4LjU0IEMgMzAyLjUyIDMxMS4xOCAyOTkuOTggMzE0LjYyIDI5Ni4yNSAzMTYuMjYgQyAyOTUuNjYgMzE2LjQxIDI5NC40OSAzMTYuNzEgMjkzLjkwIDMxNi44NiBDIDI5NC4yOCAzMTUuMzkgMjk0LjY2IDMxMy45MiAyOTUuMDcgMzEyLjQ3IEMgMjk0LjQ1IDMxMi4wMiAyOTMuODMgMzExLjU5IDI5My4yMSAzMTEuMTUgQyAyOTQuOTAgMzA5Ljc1IDI5Ni4xMyAzMDguMjMgMjkzLjg0IDMwNi43NCBDIDI5NC40MyAzMDYuNzUgMjk1LjYxIDMwNi43OCAyOTYuMjAgMzA2Ljc5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMyOC4xMSAzMTAuMjYgQyAzMjkuMTAgMzA5LjA5IDMzMC4xMCAzMDcuOTMgMzMxLjA4IDMwNi43NSBDIDMzNC44MCAzMDkuNzggMzM4LjQwIDMxMi45MyAzNDIuMTIgMzE1Ljk2IEMgMzQxLjA3IDMxNy4yNSAzNDAuMDIgMzE4LjU1IDMzOC45OSAzMTkuODcgQyAzMzUuNDIgMzE2LjYwIDMzMS43MSAzMTMuNDkgMzI4LjExIDMxMC4yNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMjAuMjAgMzEyLjc2IEMgMTIxLjMyIDMxMC44MCAxMjQuNDggMzEwLjk4IDEyNi41MiAzMTAuMjQgQyAxMjYuNTEgMzEyLjIwIDEyNi41MCAzMTQuMTYgMTI2LjU0IDMxNi4xMiBDIDEyNC45NyAzMTQuMDggMTIyLjY3IDMxMy4yMCAxMjAuMjAgMzEyLjc2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDYxLjcyIDMyMy45NSBDIDY1LjExIDMyMC41NSA2OC42NiAzMTcuMzMgNzIuMDUgMzEzLjkzIEMgNzMuMTUgMzE0Ljk4IDc0LjI0IDMxNi4wNCA3NS4zNSAzMTcuMDggQyA3NC4yNCAzMTguMjggNzMuMTMgMzE5LjQ4IDcyLjA0IDMyMC43MSBDIDczLjE1IDMyMC45MyA3NC4yNyAzMjEuMTYgNzUuMzkgMzIxLjM4IEMgNzYuMDIgMzIwLjY1IDc2LjY2IDMxOS45MyA3Ny4yOSAzMTkuMjAgQyA3OC40MCAzMjAuMjcgNzkuNTIgMzIxLjMyIDgwLjY0IDMyMi4zOCBDIDc5LjMwIDMyMy41MSA3OC4wNiAzMjYuMTMgNzUuOTMgMzI0Ljk4IEMgNzMuNzQgMzI0LjU0IDcxLjY1IDMyMy4wNCA2OS40MCAzMjMuMjQgQyA2Ny44NiAzMjQuNDcgNjYuNTIgMzI1LjkyIDY1LjEwIDMyNy4yOSBDIDYzLjk4IDMyNi4xNyA2Mi44NSAzMjUuMDYgNjEuNzIgMzIzLjk1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExNC40NCAzMTUuMTYgQyAxMTUuNDMgMzE1LjEyIDExOC43NCAzMTIuMDUgMTE4LjE4IDMxNC4xNCBDIDExNy42OCAzMTUuMDkgMTE3LjE0IDMxNi4wMiAxMTYuNTUgMzE2LjkyIEMgMTE2LjAxIDMxOS41NCAxMTUuODMgMzIyLjI1IDExNi43NiAzMjQuODIgQyAxMTYuNTUgMzI0Ljg3IDExNi4xMiAzMjQuOTcgMTE1LjkxIDMyNS4wMiBMIDExNS4xMCAzMjQuNzUgQyAxMTMuMjkgMzIxLjg5IDExMy43NyAzMTguMjggMTE0LjQ0IDMxNS4xNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNjQuMDcgMzI0Ljc5IEMgMjY1LjQ1IDMyMi4wMyAyNjUuODIgMzE4LjAxIDI2OS4wOSAzMTYuNzggQyAyNjcuMjYgMzIwLjIxIDI2NS42MCAzMjMuNzUgMjYzLjQyIDMyNi45OSBDIDI2My40OCAzMjguNTYgMjY0LjI3IDMyOS41OSAyNjUuODAgMzMwLjA5IEMgMjYzLjc1IDMzMC42MSAyNjEuNzEgMzMxLjIyIDI1OS41OSAzMzEuMzggQyAyNjAuMjUgMzI4LjY1IDI2Mi41MCAzMjYuOTUgMjY0LjA3IDMyNC43OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMjEuNDggMzE3LjM2IEMgMzIyLjkxIDMxOC43NyAzMjQuMzIgMzIwLjIxIDMyNS41NiAzMjEuODEgQyAzMjUuMDcgMzIyLjgzIDMyNC42MCAzMjMuODYgMzI0LjEyIDMyNC44OSBDIDMyNi4wOCAzMjQuOTAgMzI4LjAyIDMyNC45MCAzMjkuOTkgMzI0LjkxIEMgMzI4LjcyIDMyNi4xNyAzMjcuNzAgMzI3LjgyIDMyNi4wNyAzMjguNjQgQyAzMjMuNDIgMzI4Ljc1IDMyMC43OCAzMjguNDkgMzE4LjE1IDMyOC4zOCBDIDMxOS40NiAzMjkuODcgMzIwLjc4IDMzMS4zNyAzMjIuMDYgMzMyLjg5IEMgMzIwLjgyIDMzMy44NCAzMTkuNTkgMzM0LjgxIDMxOC4zNiAzMzUuNzggQyAzMTcuMDggMzM0LjIzIDMxNS43OCAzMzIuNjkgMzE0LjUxIDMzMS4xMyBDIDMxNC43NyAzMzAuMzYgMzE1LjI4IDMyOC44MiAzMTUuNTQgMzI4LjA1IEMgMzEzLjg3IDMyNy45MiAzMTIuMTkgMzI3Ljc4IDMxMC41MyAzMjcuNjMgQyAzMTEuNjYgMzI2LjU1IDMxMi43NCAzMjUuMzkgMzE0LjAzIDMyNC41MCBDIDMxNi43MSAzMjQuNTAgMzE5LjM3IDMyNC44MCAzMjIuMDUgMzI0Ljc5IEMgMzIwLjg2IDMyMy4zNSAzMTkuNjEgMzIxLjk4IDMxOC4zMyAzMjAuNjMgQyAzMTkuMzcgMzE5LjU0IDMyMC40MiAzMTguNDUgMzIxLjQ4IDMxNy4zNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNTEuNzIgMzIyLjUwIEMgMTQ5LjA4IDMyMS40MCAxNTEuNTMgMzE5LjU0IDE1Mi4zMyAzMTguMDYgQyAxNTIuMTggMzE5LjU1IDE1MS45NiAzMjEuMDIgMTUxLjcyIDMyMi41MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNzguOTkgMzIwLjI4IEMgMjgwLjAxIDMyMS4zNiAyODEuMTcgMzIyLjI5IDI4Mi40NCAzMjMuMDkgQyAyODIuMDQgMzIzLjg4IDI4Mi4yMyAzMjYuMDUgMjgwLjg4IDMyNS4yMyBDIDI4MC41NCAzMjMuNDcgMjgwLjA3IDMyMS43NCAyNzguOTkgMzIwLjI4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDc0Ljc3IDMzMi41NiBDIDc3LjE4IDMyOS42NyA3OS44OCAzMjcuMDQgODIuMjAgMzI0LjA4IEMgODMuNDQgMzI1LjAyIDg0LjY3IDMyNS45NyA4NS44OSAzMjYuOTQgQyA4My4zMiAzMjkuODEgODAuODkgMzMyLjgxIDc4LjMyIDMzNS42OCBDIDc3LjE0IDMzNC42MyA3NS45NiAzMzMuNTkgNzQuNzcgMzMyLjU2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDgwLjI2IDMzNy4yNiBDIDgyLjc5IDMzNC4zOSA4NS4xOSAzMzEuNDAgODcuNjcgMzI4LjQ5IEMgOTAuNzMgMzMxLjUzIDk1LjAzIDMzMy4zMyA5Ny40MCAzMzYuOTggQyA5Ni4yMiAzNDAuMzMgOTMuNTIgMzQyLjg4IDkxLjc0IDM0NS45MSBDIDkwLjM4IDM0NS4wMyA4OS4wNiAzNDQuMTMgODcuNzQgMzQzLjIxIEMgODkuNDAgMzQwLjk5IDkxLjExIDMzOC44MCA5Mi43OCAzMzYuNTkgQyA5MS42NSAzMzUuNjQgOTAuNTEgMzM0LjcwIDg5LjM4IDMzMy43NSBDIDg3LjQyIDMzNS43OCA4NS43NCAzMzguMDQgODQuMDUgMzQwLjI5IEMgODIuNzcgMzM5LjI5IDgxLjUxIDMzOC4yOCA4MC4yNiAzMzcuMjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzA1LjkzIDMzMS4yMCBDIDMwNy4xMCAzMzAuMzEgMzA4LjI2IDMyOS40MSAzMDkuNDMgMzI4LjUyIEMgMzExLjgyIDMzMS40NiAzMTQuMjAgMzM0LjQyIDMxNi43OCAzMzcuMjEgQyAzMTUuNTUgMzM4LjI4IDMxNC4zMCAzMzkuMzIgMzEzLjA0IDM0MC4zNiBDIDMxMC42NyAzMzcuMzEgMzA4LjIzIDMzNC4zMCAzMDUuOTMgMzMxLjIwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1Mi4zMCAzMzUuMjggQyAxNTIuOTMgMzM0LjQ5IDE1My41NyAzMzMuNzEgMTU0LjIxIDMzMi45NCBDIDE1NC42MyAzMzMuOTQgMTU1LjA2IDMzNC45NSAxNTUuNDkgMzM1Ljk2IEMgMTU0LjQyIDMzNS43MyAxNTMuMzYgMzM1LjUxIDE1Mi4zMCAzMzUuMjggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTczLjkzIDMzOC45NiBDIDE3NC4zMyAzMzYuNzQgMTc1LjMzIDMzNC43MiAxNzYuNDUgMzMyLjc5IEMgMTc2Ljk1IDMzNC43MiAxNzcuNTAgMzM2LjY1IDE3Ny45NyAzMzguNjEgQyAxNzYuNjIgMzM4LjczIDE3NS4yNyAzMzguODUgMTczLjkzIDMzOC45NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzYgMzQwLjAzIEMgMjk3LjI4IDMzNy45MCAzMDAuMzcgMzM1LjA3IDMwNC4xNyAzMzMuMzkgQyAzMDYuNjYgMzM2LjAyIDMwOS4wMiAzMzguODIgMzEwLjkwIDM0MS45MiBDIDMwOS44NCAzNDIuODggMzA4LjY3IDM0My43MiAzMDcuNDUgMzQ0LjQ2IEMgMzA1LjM0IDM0Mi43MCAzMDQuMTQgMzQwLjA5IDMwMi40OSAzMzcuOTMgQyAzMDAuMDAgMzM5LjUzIDI5Ny41NyAzNDEuMjEgMjk1LjA0IDM0Mi43NSBDIDI5NC43MiAzNDIuMDcgMjk0LjA4IDM0MC43MSAyOTMuNzYgMzQwLjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDk3LjM3IDM0Mi4wNyBDIDk4LjI0IDM0MC42NyA5OS4xOSAzMzkuMzMgMTAwLjEyIDMzNy45NyBDIDEwMS4zMiAzMzguNzYgMTAyLjUzIDMzOS41NiAxMDMuNzMgMzQwLjM2IEMgMTAzLjA3IDM0MS41NSAxMDIuNDIgMzQyLjc1IDEwMS44MyAzNDMuOTggQyAxMDMuMTkgMzQzLjMzIDEwNC40OCAzNDIuNTAgMTA1Ljk1IDM0Mi4wOSBDIDEwOC4yMiAzNDIuNzMgMTEwLjEyIDM0NC4yMiAxMTEuODQgMzQ1Ljc4IEMgMTEwLjE2IDM0OS4wNiAxMDguMjcgMzUyLjIxIDEwNi41MSAzNTUuNDQgQyAxMDQuMzMgMzU0LjE0IDEwMi4xMyAzNTIuODYgOTkuOTUgMzUxLjU3IEMgMTAwLjQyIDM1MC42NiAxMDAuOTEgMzQ5Ljc1IDEwMS4zOSAzNDguODQgQyAxMDIuMjkgMzQ5LjM3IDEwMy4xOSAzNDkuOTEgMTA0LjA5IDM1MC40NSBDIDEwNS4wOSAzNDguNzYgMTA2LjA3IDM0Ny4wNSAxMDYuOTEgMzQ1LjI3IEMgMTAzLjA2IDM0NS4xNiAxMDAuNjMgMzQ5LjEwIDk3LjA0IDM0OS42NSBDIDk1Ljc3IDM0OC45MCA5NC41OCAzNDguMDIgOTMuMzggMzQ3LjE4IEMgOTUuMTggMzQ2LjI4IDk2Ljk5IDM0NS40MCA5OC44MSAzNDQuNTQgQyA5OC4zMCAzNDMuNzMgOTcuODIgMzQyLjkxIDk3LjM3IDM0Mi4wNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyODAuNDggMzQ3LjkxIEMgMjg0LjMwIDM0NS43NSAyODguMTEgMzQzLjU3IDI5MS45MSAzNDEuMzcgQyAyOTIuMjkgMzQxLjkzIDI5My4wNSAzNDMuMDUgMjkzLjQ0IDM0My42MiBDIDI5Mi44OCAzNDQuMTAgMjkyLjMzIDM0NC41OSAyOTEuNzkgMzQ1LjA5IEMgMjkzLjMyIDM0Ny4zOCAyOTQuNzYgMzQ5LjczIDI5Ni4yMiAzNTIuMDggQyAyOTQuODYgMzUyLjg3IDI5My40OSAzNTMuNjYgMjkyLjEzIDM1NC40NiBDIDI5MC43OCAzNTIuMDIgMjg5LjM3IDM0OS42MiAyODcuOTUgMzQ3LjIzIEMgMjg2LjAyIDM0OC4zNCAyODQuMDcgMzQ5LjQxIDI4Mi4wOSAzNTAuNDMgQyAyODEuNjkgMzQ5LjgwIDI4MC44OCAzNDguNTQgMjgwLjQ4IDM0Ny45MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTYuMjAgMzQ0LjA4IEMgMjk3LjQ1IDM0My4yMyAyOTguNzAgMzQyLjM4IDI5OS45NiAzNDEuNTQgQyAzMDEuMjEgMzQzLjQyIDMwMi41MSAzNDUuMjggMzAzLjgzIDM0Ny4xMiBDIDMwMi41MyAzNDcuOTYgMzAxLjI3IDM0OC44NyAyOTkuOTMgMzQ5LjY1IEMgMjk4LjU3IDM0Ny44NyAyOTcuNDMgMzQ1Ljk0IDI5Ni4yMCAzNDQuMDggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjc0LjkzIDM1MC40OSBDIDI3Ni4yNCAzNDkuOTUgMjc3LjU2IDM0OS40MiAyNzguODggMzQ4LjkxIEMgMjc5Ljg0IDM1MC44NiAyODEuMDAgMzUyLjcyIDI4MS43NCAzNTQuNzcgQyAyODAuNDggMzU1LjU2IDI3OS4xMSAzNTYuMTUgMjc3Ljc2IDM1Ni43OCBDIDI3Ni43OCAzNTQuNjkgMjc1Ljc5IDM1Mi42MiAyNzQuOTMgMzUwLjQ5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDEyMC4yMCAzNDkuODIgQyAxMjMuNzggMzUxLjUyIDEyNy41MyAzNTIuOTIgMTMwLjk5IDM1NC44NiBDIDEzMi40OCAzNTUuNzAgMTMxLjgwIDM1Ny4yNiAxMzEuMzQgMzU4LjUxIEMgMTMwLjM5IDM2MS4wMCAxMjkuMzEgMzYzLjQ0IDEyOC4zMSAzNjUuOTEgQyAxMjMuOTIgMzY0LjAxIDExOS40NyAzNjIuMjQgMTE1LjIzIDM2MC4wMiBDIDExNi43MCAzNTYuNTMgMTE4LjY1IDM1My4yOCAxMjAuMjAgMzQ5LjgyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEyMi45MSAzNTQuNDUgQyAxMjQuNDMgMzU1LjE0IDEyNS45NiAzNTUuODQgMTI3LjQ3IDM1Ni41NyBDIDEyNi43MSAzNTguMTUgMTI1Ljk4IDM1OS43NiAxMjUuMjQgMzYxLjM1IEMgMTIzLjcwIDM2MC42MSAxMjIuMTUgMzU5LjkwIDEyMC42MSAzNTkuMTcgQyAxMjEuMzkgMzU3LjYwIDEyMi4xNSAzNTYuMDMgMTIyLjkxIDM1NC40NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNDEuNjcgMzU1LjAzIEMgMTQzLjAzIDM1NS4zMiAxNDQuMzggMzU1LjY0IDE0NS43MiAzNTUuOTggQyAxNDUuNDYgMzU3LjI1IDE0NS4yMSAzNTguNTIgMTQ0Ljk2IDM1OS43OSBDIDE0Ny4yNyAzNjAuNDYgMTQ5LjU4IDM2MS4xMiAxNTEuOTEgMzYxLjczIEMgMTUxLjQwIDM2My41NyAxNTEuMDIgMzY1LjQ3IDE1MC4yNCAzNjcuMjQgQyAxNDguNTIgMzY4Ljk0IDE0Ni4yNiAzNzAuMDAgMTQ0LjMyIDM3MS40NCBDIDE0Mi45NSAzNzEuMDYgMTQxLjYwIDM3MC42NiAxNDAuMjUgMzcwLjIzIEMgMTQxLjkyIDM2Ny4zMiAxNDYuMDUgMzY3LjEyIDE0Ny4xOSAzNjMuNzYgQyAxNDQuNjggMzYyLjg1IDE0Mi4xNCAzNjIuMDIgMTM5LjYxIDM2MS4yMCBDIDE0MC4zMSAzNTkuMTQgMTQxLjAwIDM1Ny4wOSAxNDEuNjcgMzU1LjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI1NC42MSAzNTguOTMgQyAyNTcuODIgMzU3Ljg3IDI2MC45NCAzNTYuNTYgMjY0LjE1IDM1NS41MCBDIDI2NS4yMCAzNTUuMTcgMjY2Ljg1IDM1NS4xMyAyNjcuMjYgMzU2LjQxIEMgMjY4LjY1IDM1OS4yMSAyNjkuNzQgMzYyLjE0IDI3MC45MiAzNjUuMDQgQyAyNjkuNTEgMzY1LjU4IDI2OC4xMCAzNjYuMTUgMjY2LjcxIDM2Ni43MiBDIDI2NS42OSAzNjQuMTYgMjY0LjY2IDM2MS42MCAyNjMuNjQgMzU5LjA0IEMgMjYxLjM3IDM1OS43NiAyNTkuMTIgMzYwLjUyIDI1Ni44NSAzNjEuMjQgQyAyNTguMDcgMzYxLjc2IDI1OS4zNCAzNjIuMTMgMjYwLjY1IDM2Mi4zNyBDIDI2MS4zNyAzNjQuMzAgMjYyLjEwIDM2Ni4yNCAyNjIuODIgMzY4LjE4IEMgMjYxLjM1IDM2OC42NiAyNTkuODggMzY5LjE3IDI1OC40MiAzNjkuNjcgQyAyNTcuODEgMzY3LjkwIDI1Ny4yMiAzNjYuMTIgMjU2LjY1IDM2NC4zNCBDIDI1Ny4xNCAzNjMuMDIgMjU2LjY1IDM2MS44MiAyNTUuNTggMzYxLjAyIEMgMjU1LjM0IDM2MC41MCAyNTQuODUgMzU5LjQ1IDI1NC42MSAzNTguOTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTM0LjgwIDM1Ni4xNyBDIDEzNi4xNyAzNTYuNjcgMTM3LjU1IDM1Ny4xNyAxMzguOTIgMzU3LjY4IEMgMTM4LjExIDM1OS43NiAxMzcuMzUgMzYxLjg3IDEzNi42MCAzNjMuOTggQyAxMzUuMTQgMzYzLjUwIDEzMy43MCAzNjIuOTggMTMyLjI2IDM2Mi40OSBDIDEzMy4xNyAzNjAuNDAgMTM0LjAxIDM1OC4zMCAxMzQuODAgMzU2LjE3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI0MC4zMCAzNjIuOTkgQyAyNDQuMzIgMzYyLjE3IDI0OC4xNiAzNjAuNTMgMjUyLjI5IDM2MC4yNCBDIDI1My44MCAzNjMuMDUgMjU0LjkwIDM2Ni4wOCAyNTUuNTIgMzY5LjIyIEMgMjU1LjA3IDM3MC4yMyAyNTQuMzEgMzcwLjkyIDI1My4yNiAzNzEuMjcgQyAyNDkuODggMzcyLjQ3IDI0Ni4zNyAzNzMuMjkgMjQyLjg2IDM3NC4wNCBDIDI0Mi43MCAzNzMuMDcgMjQyLjU0IDM3Mi4xMCAyNDIuMzggMzcxLjE0IEMgMjQ1LjE2IDM3MC4zOCAyNDguMDUgMzY5Ljg4IDI1MC43MCAzNjguNzEgQyAyNTAuNDIgMzY2LjkzIDI0OS43NSAzNjUuMjUgMjQ5LjIyIDM2My41NiBDIDI0Ny42OCAzNjQuMDEgMjQ2LjE0IDM2NC40NiAyNDQuNzUgMzY1LjI2IEMgMjQ1Ljg4IDM2Ni4xMCAyNDguNDMgMzY2LjA0IDI0Ny44NSAzNjguMTIgQyAyNDUuOTggMzY4LjkyIDI0My45MyAzNjkuMTQgMjQxLjkzIDM2OS40MCBDIDI0MS4zMSAzNjcuMjggMjQwLjc3IDM2NS4xMyAyNDAuMzAgMzYyLjk5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1NC4wOCAzNjIuNDAgQyAxNTUuMzMgMzYyLjYzIDE1Ni41NyAzNjIuOTEgMTU3LjgwIDM2My4yNCBDIDE1Ny43OCAzNjYuMjQgMTU2LjQ2IDM2OS4wNiAxNTYuMTIgMzcyLjA0IEMgMTU2LjU4IDM3MS45NCAxNTcuNTAgMzcxLjc1IDE1Ny45NiAzNzEuNjUgQyAxNTguNzQgMzY5LjA3IDE1OS4xOSAzNjYuNDAgMTU5LjgwIDM2My43OCBDIDE2MS4xNCAzNjQuMDMgMTYyLjQ4IDM2NC4yOCAxNjMuODIgMzY0LjUzIEMgMTYzLjIzIDM2Ny40NyAxNjIuNTggMzcwLjM5IDE2Mi4wOSAzNzMuMzUgQyAxNjIuNjMgMzczLjE5IDE2My43MSAzNzIuODggMTY0LjI1IDM3Mi43MiBDIDE2NC45MCAzNzAuMjEgMTY1LjE0IDM2Ny42MSAxNjUuOTAgMzY1LjE0IEMgMTY3LjE5IDM2NS4yMiAxNjguNDggMzY1LjM1IDE2OS43NyAzNjUuNTEgQyAxNjguNzAgMzY5LjA2IDE3MC4wNiAzNzUuNDEgMTY1LjE2IDM3Ni4xOCBDIDE2MC40MCAzNzUuOTEgMTU1LjgxIDM3NC40MiAxNTEuMTcgMzczLjQxIEMgMTUyLjE4IDM2OS43NSAxNTMuMTkgMzY2LjA5IDE1NC4wOCAzNjIuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA0LjU2IDM2NC4yNCBDIDIwNS45NiAzNjQuMTcgMjA3LjM1IDM2NC4xMiAyMDguNzUgMzY0LjA4IEMgMjA4LjgwIDM2NC45OCAyMDguOTEgMzY2Ljc3IDIwOC45NiAzNjcuNjcgQyAyMTEuNDkgMzY3LjQ3IDIxNC4wMyAzNjcuMjkgMjE2LjU3IDM2Ny4xNyBDIDIxNi42MyAzNjkuMjUgMjE3LjEyIDM3MS4zOSAyMTYuNjkgMzczLjQ3IEMgMjE1LjUzIDM3NS4yMyAyMTQuMTggMzc2Ljg4IDIxMy4yOCAzNzguODEgQyAyMTEuNzUgMzc4LjgzIDIxMC4yMyAzNzguODQgMjA4LjcwIDM3OC44MyBDIDIwOS40MiAzNzUuNjYgMjEzLjI4IDM3NC4wOSAyMTIuNjkgMzcwLjU1IEMgMjEwLjA1IDM3MC42NiAyMDcuNDEgMzcwLjc5IDIwNC43OCAzNzAuODAgQyAyMDQuNzUgMzY4LjYxIDIwNC42NyAzNjYuNDIgMjA0LjU2IDM2NC4yNCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMzMuODggMzY0LjQwIEMgMjM1LjI5IDM2NC4xMyAyMzYuNjkgMzYzLjg4IDIzOC4xMCAzNjMuNjQgQyAyMzguODggMzY3LjMwIDIzOS43MSAzNzAuOTQgMjQwLjcwIDM3NC41NSBDIDIzOS4xNyAzNzQuOTIgMjM3LjY1IDM3NS4yOSAyMzYuMTIgMzc1LjYzIEMgMjM1LjQyIDM3MS44NyAyMzQuNTMgMzY4LjE2IDIzMy44OCAzNjQuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjI3LjUzIDM2NS41MSBDIDIyOC45NiAzNjUuMzMgMjMwLjQwIDM2NS4xNyAyMzEuODQgMzY1LjAxIEMgMjMyLjA2IDM2OC42NiAyMzUuMjYgMzczLjgxIDIzMS4yMiAzNzYuMjUgQyAyMjcuNTUgMzc3LjU3IDIyMy41NyAzNzcuNTYgMjE5Ljc1IDM3OC4yMSBDIDIxOS43MCAzNzcuNDcgMjE5LjYwIDM3Ni4wMCAyMTkuNTUgMzc1LjI2IEMgMjIwLjI0IDM3NS4xMiAyMjEuNjQgMzc0Ljg0IDIyMi4zMyAzNzQuNzAgQyAyMjEuMzQgMzcyLjAxIDIyMC4wOSAzNjkuNDIgMjE5LjAxIDM2Ni43OCBDIDIyMC4wOSAzNjYuNjQgMjIyLjI2IDM2Ni4zNyAyMjMuMzQgMzY2LjI0IEMgMjI0LjgzIDM2OS4xMCAyMjUuMzkgMzcyLjYzIDIyOC4wMCAzNzQuNzYgQyAyMjkuNTIgMzcxLjgwIDIyNy43OSAzNjguNTUgMjI3LjUzIDM2NS41MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNzIuMDYgMzY2LjEzIEMgMTczLjUxIDM2Ni4yNyAxNzQuOTYgMzY2LjQyIDE3Ni40MSAzNjYuNTcgQyAxNzUuOTEgMzcwLjMwIDE3NS4zOCAzNzQuMDIgMTc1LjA1IDM3Ny43NyBDIDE3My40OCAzNzcuNjUgMTcxLjkyIDM3Ny41MSAxNzAuMzUgMzc3LjM3IEMgMTcwLjk2IDM3My42MyAxNzEuNTcgMzY5Ljg5IDE3Mi4wNiAzNjYuMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTc4LjAyIDM2OS43NCBDIDE3OC4yMCAzNjguNzUgMTc4LjM5IDM2Ny43NyAxNzguNTkgMzY2Ljc5IEMgMTgyLjE2IDM2Ny40NiAxODYuMDMgMzY2LjkzIDE4OS4zNiAzNjguNjQgQyAxODkuMzEgMzcyLjIxIDE4OS4yMCAzNzUuNzkgMTg4LjY0IDM3OS4zMyBDIDE4Ny41NyAzNzkuMTggMTg1LjQzIDM3OC44OSAxODQuMzYgMzc4Ljc1IEMgMTg0LjU0IDM3Ni4wMSAxODQuNzQgMzczLjI4IDE4NC44NyAzNzAuNTUgQyAxODIuNTggMzcwLjM1IDE4MC4yOSAzNzAuMDkgMTc4LjAyIDM2OS43NCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTEuNzYgMzY3Ljc5IEMgMTkzLjIyIDM2Ny44MyAxOTQuNjggMzY3Ljg3IDE5Ni4xNCAzNjcuOTIgQyAxOTYuMTMgMzcwLjE2IDE5Ni4xMyAzNzIuMzkgMTk2LjE0IDM3NC42NCBDIDE5NC42MSAzNzQuNjQgMTkzLjA3IDM3NC42NSAxOTEuNTQgMzc0LjY1IEMgMTkxLjYxIDM3Mi4zNiAxOTEuNjkgMzcwLjA3IDE5MS43NiAzNjcuNzkgWlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cbn1cblxuTG9nby5Qcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG9wYWNpdHk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xvZ28uanN4IiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcbmNvbnN0IGF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucycpO1xuXG5jb25zdCBtZW51UGFnZXNJZHMgPSBbXG4gICAgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRSxcbiAgICBDb25zdGFudHMuUk9VVElORy5QQUdFUy5VU0VSUyxcbiAgICBDb25zdGFudHMuUk9VVElORy5QQUdFUy5HQU1FUyxcbiAgICBDb25zdGFudHMuUk9VVElORy5QQUdFUy5CT09LSU5HUyxcbiAgICBDb25zdGFudHMuUk9VVElORy5QQUdFUy5ESVNUUklCVVRJT05cbl07XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy90b3BCYXIuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICBjb25zdCBhdXRoRGF0YSA9IHN0YXRlLmF1dGhEYXRhO1xuICAgIGNvbnN0IHVzZXJzID0gc3RhdGUudXNlcnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1aWQ6IGF1dGhEYXRhLnVpZCxcbiAgICAgICAgcGhvdG9VUkw6IGF1dGhEYXRhLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjMvMTYzODA0LnN2ZycsXG4gICAgICAgIGlzQWRtaW46IGF1dGhEYXRhLmlzQWRtaW4sXG4gICAgICAgIGN1cnJlbnRQYWdlSWQ6IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYWdlSWQsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhdXRoRGF0YSAmJiB1c2Vyc1thdXRoRGF0YS51aWRdXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmF2aWdhdGVUbzogKHBhZ2VJZCwgcGFyYW1zKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZVRvKHBhZ2VJZCwgcGFyYW1zKSksXG4gICAgICAgIHNpZ25PdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNpZ25PdXQoKSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyVGl0bGUoY3VycmVudFVzZXIpIHtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiAn157Xqdeq157XqSc7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50VXNlci5maXJzdE5hbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih1aWQsIGN1cnJlbnRVc2VyLCBwaG90b1VSTCwgbmF2aWdhdGVUbywgc2lnbk91dCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTUgc21hbGwtMTAgY29sdW1uIHVzZXItaW5mb1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e3Bob3RvVVJMfSBvbkNsaWNrPXtuYXZpZ2F0ZVRvLmJpbmQodGhpcywgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRURJVF9VU0VSX0lORk8sIHsgdWlkIH0pfS8+XG4gICAgICAgICAgICA8c3Bhbj7Xqdec15XXnSA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj57Z2V0VXNlclRpdGxlKGN1cnJlbnRVc2VyKX08L3NwYW4+PHNwYW4+IHwgPC9zcGFuPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGlzY29ubmVjdFwiIG9uQ2xpY2s9e3NpZ25PdXR9PteU16rXoNeq16c8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSh0b2dnbGVNZW51VmlzaWJpbGl0eSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1mb3Itc21hbGwtb25seSBmbG9hdC1sZWZ0XCIga2V5PVwiYWRtaW4tbWVudS1pY29uXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzbWFsbC1tZW51IGJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVWaXNpYmlsaXR5fT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KGN1cnJlbnRQYWdlSWQsIG5hdmlnYXRlVG8sIGlzQWRtaW4sIGlzTWVudVZpc2libGUsIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZXNrdG9wTWVudUl0ZW0ocGFnZUlkKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBhY3RpdmU6IGN1cnJlbnRQYWdlSWQgPT09IHBhZ2VJZCxcbiAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNtYWxsOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2l0ZW1DbGFzc2VzfSBvbkNsaWNrPXtuYXZpZ2F0ZVRvLmJpbmQodGhpcywgcGFnZUlkKX0ga2V5PXsncGFnZS0nICsgcGFnZUlkfT5cbiAgICAgICAgICAgICAgICB7IFRyYW5zbGF0aW9ucy5ST1VUSU5HLlBBR0VTW3BhZ2VJZF0gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vYmlsZU1lbnVJdGVtKHBhZ2VJZCkge1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgYWN0aXZlOiBjdXJyZW50UGFnZUlkID09PSBwYWdlSWQsXG4gICAgICAgICAgICBidXR0b246IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25Nb2JpbGVNZW51Q2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRlVG8ocGFnZUlkKTtcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXRlbUNsYXNzZXN9IG9uQ2xpY2s9e29uTW9iaWxlTWVudUNsaWNrZWR9IGtleT17J3BhZ2UtJyArIHBhZ2VJZH0+XG4gICAgICAgICAgICAgICAgeyBUcmFuc2xhdGlvbnMuUk9VVElORy5QQUdFU1twYWdlSWRdIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZXNrdG9wTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBidXR0b24tZ3JvdXAgaGlkZS1mb3Itc21hbGwtb25seVwiIGtleT1cImFkbWluLW1lbnVcIj5cbiAgICAgICAgICAgICAgICB7IF8ubWFwKG1lbnVQYWdlc0lkcywgY3JlYXRlRGVza3RvcE1lbnVJdGVtKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2JpbGVNZW51KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IGJ1dHRvbi1ncm91cCBzdGFja2VkLWZvci1zbWFsbCBzaG93LWZvci1zbWFsbC1vbmx5XCIga2V5PVwiYWRtaW4tbWVudS1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICB7IF8ubWFwKG1lbnVQYWdlc0lkcywgY3JlYXRlTW9iaWxlTWVudUl0ZW0pIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTcgc21hbGwtMTIgY29sdW1uIHZlcnRpY2FsIGNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgeyBpc0FkbWluID8gY3JlYXRlRGVza3RvcE1lbnUoKSA6IG51bGwgfVxuICAgICAgICAgICAgeyBpc0FkbWluICYmIGlzTWVudVZpc2libGUgPyBjcmVhdGVNb2JpbGVNZW51KCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTWVudVZpc2libGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51VmlzaWJpbGl0eSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc01lbnVWaXNpYmxlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhciByb3cgc21hbGwtY29sbGFwc2UgaGlkZS1mb3ItcHJpbnRcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUhlYWRlcih0aGlzLnByb3BzLnVpZCwgdGhpcy5wcm9wcy5jdXJyZW50VXNlciwgdGhpcy5wcm9wcy5waG90b1VSTCwgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvLCB0aGlzLnByb3BzLnNpZ25PdXQpIH1cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuaXNBZG1pbiA/IGNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSh0aGlzLnRvZ2dsZU1lbnVWaXNpYmlsaXR5LmJpbmQodGhpcykpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVNZW51KHRoaXMucHJvcHMuY3VycmVudFBhZ2VJZCwgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvLCB0aGlzLnByb3BzLmlzQWRtaW4sIHRoaXMuc3RhdGUuaXNNZW51VmlzaWJsZSwgdGhpcy50b2dnbGVNZW51VmlzaWJpbGl0eS5iaW5kKHRoaXMpKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRvcEJhci5wcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGhvdG9VUkw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNBZG1pbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY3VycmVudFBhZ2VJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlVG86IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHNpZ25PdXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVG9wQmFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90b3BCYXIuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi90b3BCYXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi90b3BCYXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvcEJhci5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvcC1iYXIge1xcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcXG4gIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAudG9wLWJhciBzcGFuIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAudG9wLWJhciAudXNlci1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XFxuICAudG9wLWJhciAuc21hbGwtbWVudSB7XFxuICAgIGJhY2tncm91bmQ6ICNENTAwMDA7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG4gIC50b3AtYmFyIC5tZW51IHtcXG4gICAgbWFyZ2luLXRvcDogMC42cmVtOyB9XFxuICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24ge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cXG4gICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uLnNtYWxsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxcbiAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b246aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNEMzJGMkY7IH1cXG4gICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uLmFjdGl2ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDMyRjJGO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24uYWN0aXZlOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gIC50b3AtYmFyIC5hdmF0YXIge1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAudG9wLWJhciAuZGlzY29ubmVjdCB7XFxuICAgIGNvbG9yOiAjRjQ0MzM2OyB9XFxuICAgIC50b3AtYmFyIC5kaXNjb25uZWN0OmhvdmVyIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgYXV0aEFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJyk7XG5jb25zdCBlcnJvckFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucycpO1xuXG5jb25zdCBMb2dvID0gcmVxdWlyZSgnLi9sb2dvJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9hdXRoUGFnZS5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yTXNnOiBzdGF0ZS5lcnJvck1zZ1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luV2l0aEZhY2Vib29rOiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dpbldpdGhGYWNlYm9vaygpKSxcbiAgICAgICAgbG9naW5XaXRoR29vZ2xlOiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dpbldpdGhHb29nbGUoKSksXG4gICAgICAgIGxvZ2luV2l0aEVtYWlsOiAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkpLFxuICAgICAgICBzaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkOiAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKSksXG4gICAgICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWw6IGVtYWlsID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpKSxcbiAgICAgICAgcmVwb3J0RXJyb3I6IChtZXNzYWdlKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IobWVzc2FnZSkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNMb2dpbk1vZGUoYXV0aE1vZGUpIHtcbiAgICByZXR1cm4gYXV0aE1vZGUgPT09ICdsb2dpbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnaXN0ZXJNb2RlKGF1dGhNb2RlKSB7XG4gICAgcmV0dXJuIGF1dGhNb2RlID09PSAncmVnaXN0ZXInO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1WYWxpZChzdGF0ZSwgYXV0aE1vZGUpIHtcbiAgICBzd2l0Y2ggKGF1dGhNb2RlKSB7XG4gICAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgICAgIHJldHVybiAhXy5pc0VtcHR5KHN0YXRlLmVtYWlsKSAmJiAhXy5pc0VtcHR5KHN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgY2FzZSAncmVnaXN0ZXInOlxuICAgICAgICAgICAgcmV0dXJuICFfLmlzRW1wdHkoc3RhdGUuZW1haWwpICYmICFfLmlzRW1wdHkoc3RhdGUucGFzc3dvcmQpICYgIV8uaXNFbXB0eShzdGF0ZS5wYXNzd29yZEFnYWluKTtcbiAgICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICAgICAgcmV0dXJuICFfLmlzRW1wdHkoc3RhdGUuZW1haWwpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9nbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS1jZW50ZXJlZCBsb2dvXCI+XG4gICAgICAgICAgICA8TG9nbyB3aWR0aD17MTIwfSBoZWlnaHQ9ezEyMH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU29jaWFsQnV0dG9uc1NlY3Rpb24obG9naW5XaXRoRmFjZWJvb2ssIGxvZ2luV2l0aEdvb2dsZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luV2l0aEZhY2Vib29rfSBjbGFzc05hbWU9J2ZhY2Vib29rIGJ1dHRvbiBzcGxpdCc+XG4gICAgICAgICAgICAgICAgPHNwYW4+RmFjZWJvb2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1mYWNlYm9vay1vZmZpY2lhbCcgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ2luV2l0aEdvb2dsZX0gY2xhc3NOYW1lPSdnb29nbGUgYnV0dG9uIHNwbGl0Jz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Hb29nbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1nb29nbGUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9J2hyJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFcnJvclNlY3Rpb24obWVzc2FnZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlcnJvci1tc2cnIGtleT0naG9tZVBhZ2UtZXJyb3ItbWVzc2FnZSc+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZScgYXJpYS1oaWRkZW49J3RydWUnIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Vycm9yLW1zZy10eHQnPnttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5wdXQodHlwZSwgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCBwbGFjZWhvbGRlcikge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCB0eXBlPXt0eXBlfSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT17bmFtZX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldEJ1dHRvbkxhYmVsKGF1dGhNb2RlKSB7XG4gICAgc3dpdGNoIChhdXRoTW9kZSkge1xuICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5TVUJNSVRfQlROLkxPR0lOO1xuICAgICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5TVUJNSVRfQlROLlJFR0lTVEVSO1xuICAgICAgICBjYXNlICdmb3Jnb3RQYXNzd29yZCc6XG4gICAgICAgICAgICByZXR1cm4gVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5TVUJNSVRfQlROLkZPUkdPVF9QQVNTV09SRDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1Ym1pdEJ1dHRvbihvblN1Ym1pdCwgZGlzYWJsZWQsIGF1dGhNb2RlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiYnV0dG9uIHNwbGl0IHN1Y2Nlc3NcIiBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAgPHNwYW4+e2dldEJ1dHRvbkxhYmVsKGF1dGhNb2RlKX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtzU2VjdGlvbihhdXRoTW9kZSwgbmF2VG9Mb2dpbiwgbmF2VG9SZWdpc3RlciwgbmF2VG9Gb3Jnb3RQYXNzd29yZCkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9naW5TY3JlZW5MaW5rcygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gc21hbGwtNiByZWQtbGluayc+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e25hdlRvUmVnaXN0ZXJ9PntUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLkxJTktTLkdPX1RPX1JFR0lTVEVSfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTYgcmVkLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtuYXZUb0ZvcmdvdFBhc3N3b3JkfT57VHJhbnNsYXRpb25zLkFVVEhfUEFHRS5MSU5LUy5HT19UT19GT1JHT1RfUEFTU1dPUkR9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTk9OTG9naW5TY3JlZW5MaW5rcygpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdyZWQtbGluaycgb25DbGljaz17bmF2VG9Mb2dpbn0+e1RyYW5zbGF0aW9ucy5BVVRIX1BBR0UuTElOS1MuR09fVE9fTE9HSU59PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgaXNMb2dpbk1vZGUoYXV0aE1vZGUpID8gY3JlYXRlTG9naW5TY3JlZW5MaW5rcygpIDogY3JlYXRlTk9OTG9naW5TY3JlZW5MaW5rcygpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgQXV0aFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYXV0aE1vZGU6ICdsb2dpbicsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICBwYXNzd29yZEFnYWluOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgfTtcblxuICAgIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgaXNGb3JtVmFsaWQodGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLmF1dGhNb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dpbldpdGhFbWFpbCh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgICAgICAgICBpZiAoXy5pc0VxdWFsKHRoaXMuc3RhdGUucGFzc3dvcmQsIHRoaXMuc3RhdGUucGFzc3dvcmRBZ2FpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVwb3J0RXJyb3IoVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkFVVEguTk9UX1NBTUVfUEFTU1dPUkQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZvcmdvdFBhc3N3b3JkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRQYXNzd29yZFJlc2V0RW1haWwodGhpcy5zdGF0ZS5lbWFpbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkF1dGhNb2RlQ2hhbmdlKCdsb2dpbicpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25BdXRoTW9kZUNoYW5nZSA9IGF1dGhNb2RlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRoTW9kZSB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjcmVhdGVOYXZGdW5jID0gYXV0aE1vZGUgPT4gdGhpcy5vbkF1dGhNb2RlQ2hhbmdlLmJpbmQodGhpcywgYXV0aE1vZGUpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTYgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCBhdXRoLWZvcm0tY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUxvZ28oKSB9XG5cbiAgICAgICAgICAgICAgICB7IGlzTG9naW5Nb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHx8IGlzUmVnaXN0ZXJNb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpID8gY3JlYXRlU29jaWFsQnV0dG9uc1NlY3Rpb24odGhpcy5wcm9wcy5sb2dpbldpdGhGYWNlYm9vaywgdGhpcy5wcm9wcy5sb2dpbldpdGhHb29nbGUpIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZXJyb3JNc2cgPyBjcmVhdGVFcnJvclNlY3Rpb24odGhpcy5wcm9wcy5lcnJvck1zZykgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgIDxkaXYgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259IGNsYXNzTmFtZT0nYXV0aC1mb3JtJz5cblxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZUlucHV0KCdlbWFpbCcsIHRoaXMuc3RhdGUuZW1haWwsIHRoaXMub25DaGFuZ2UsICdlbWFpbCcsVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5GSUVMRFMuRU1BSUwpIH1cblxuICAgICAgICAgICAgICAgICAgICB7IGlzTG9naW5Nb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHx8IGlzUmVnaXN0ZXJNb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpID8gY3JlYXRlSW5wdXQoJ3Bhc3N3b3JkJywgdGhpcy5zdGF0ZS5wYXNzd29yZCwgdGhpcy5vbkNoYW5nZSwgJ3Bhc3N3b3JkJyxUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLkZJRUxEUy5QQVNTV09SRCkgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgICAgICB7IGlzUmVnaXN0ZXJNb2RlKHRoaXMuc3RhdGUuYXV0aE1vZGUpID8gY3JlYXRlSW5wdXQoJ3Bhc3N3b3JkJywgdGhpcy5zdGF0ZS5wYXNzd29yZEFnYWluLCB0aGlzLm9uQ2hhbmdlLCAncGFzc3dvcmRBZ2FpbicsIFRyYW5zbGF0aW9ucy5BVVRIX1BBR0UuRklFTERTLlBBU1NXT1JEX0FHQUlOKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlU3VibWl0QnV0dG9uKHRoaXMub25TdWJtaXQsICFpc0Zvcm1WYWxpZCh0aGlzLnN0YXRlLCB0aGlzLnN0YXRlLmF1dGhNb2RlKSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSkgfVxuXG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlTGlua3NTZWN0aW9uKHRoaXMuc3RhdGUuYXV0aE1vZGUsIGNyZWF0ZU5hdkZ1bmMoJ2xvZ2luJyksIGNyZWF0ZU5hdkZ1bmMoJ3JlZ2lzdGVyJyksIGNyZWF0ZU5hdkZ1bmMoJ2ZvcmdvdFBhc3N3b3JkJykpIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BdXRoUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgbG9naW5XaXRoRmFjZWJvb2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbG9naW5XaXRoR29vZ2xlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvZ2luV2l0aEVtYWlsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZXBvcnRFcnJvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlcnJvck1zZzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEF1dGhQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXV0aFBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hdXRoLWZvcm0tY29udGFpbmVyIC5sb2dvIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDM1cHg7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDE2MHB4OyB9XFxuXFxuLmF1dGgtZm9ybS1jb250YWluZXIgLmF1dGgtZm9ybSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYXV0aC1mb3JtLWNvbnRhaW5lciAuaHIge1xcbiAgbWFyZ2luOiAwLjdlbSBhdXRvICFpbXBvcnRhbnQ7IH1cXG5cXG4uYXV0aC1mb3JtLWNvbnRhaW5lciAucmVkLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2F1dGhQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCBib29raW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMnKTtcbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuY29uc3QgRXZlbnRJdGVtID0gcmVxdWlyZSgnLi9ldmVudEl0ZW0nKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2hvbWVQYWdlLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgdWlkOiBzdGF0ZS5hdXRoRGF0YS51aWQsXG4gICAgZ2FtZXM6IHN0YXRlLmV2ZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZpZ2F0ZVRvVXBkYXRlQm9va2luZzogKHVpZCwgZ2FtZUlkKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVQREFURV9CT09LSU5HLCB7IHVpZCwgZ2FtZUlkIH0pKSxcbiAgICBjYW5jZWxCb29raW5nOiAodWlkLCBnYW1lSWQpID0+IGRpc3BhdGNoKGJvb2tpbmdBY3Rpb25zLmJvb2tpbmdzQ2FuY2VsZWQodWlkLCBnYW1lSWQpKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFdmVudERhdGUoZ2FtZSkge1xuICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZShnYW1lLnllYXIsIGdhbWUubW9udGgsIGdhbWUuZGF5KTtcbiAgZXZlbnREYXRlLnNldE1vbnRoKGV2ZW50RGF0ZS5nZXRNb250aCgpIC0gMSk7XG4gIHJldHVybiBldmVudERhdGU7XG59XG5cbmZ1bmN0aW9uIGlzRnV0dXJlRXZlbnQoZ2FtZSkge1xuICBjb25zdCBldmVudERhdGUgPSBwYXJzZUV2ZW50RGF0ZShnYW1lKTtcbiAgcmV0dXJuIGV2ZW50RGF0ZSA+IERhdGUubm93KCk7XG59XG5cbmZ1bmN0aW9uIGdldENsb3NlZEdhbWVzQXJyKGdhbWVzKSB7XG4gIHJldHVybiBfLmNoYWluKGdhbWVzKVxuICAgIC5vbWl0QnkoZ2FtZSA9PiB7XG4gICAgICByZXR1cm4gZ2FtZS5zdGF0dXMgIT09IENvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRUQgfHwgIWlzRnV0dXJlRXZlbnQoZ2FtZSk7XG4gICAgfSlcbiAgICAubWFwKChnYW1lLCBnYW1lSWQpID0+ICh7XG4gICAgICBnYW1lLFxuICAgICAgZ2FtZUlkXG4gICAgfSkpXG4gICAgLnNvcnRCeShnYW1lRGF0YSA9PiBwYXJzZUV2ZW50RGF0ZShnYW1lRGF0YS5nYW1lKSlcbiAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gZ2V0T3BlbkdhbWVzKGdhbWVzKSB7XG4gIHJldHVybiBfLm9taXRCeShnYW1lcywgZ2FtZSA9PiBnYW1lLnN0YXR1cyA9PT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vYmlsZU5vR2FtZXNNZXNzYWdlU2VjdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2hvdy1mb3Itc21hbGwtb25seSBuby1ib29raW5ncyBtb3JlLXNwYWNlJz5cbiAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuSE9NRV9QQUdFLk5PX09QRU5fR0FNRVN9PC9zcGFuPlxuICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1idXMnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lc0xpc3RzKG9wZW5HYW1lcywgY2xvc2VkR2FtZXNBcnIsIG9uQm9va2luZywgb25DYW5jZWxCb29raW5nKSB7XG5cbiAgZnVuY3Rpb24gYmluZE9uR2FtZUl0ZW1DbGljayhmbiwgZ2FtZUlkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBmbihnYW1lSWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9wZW5HYW1lc0xpc3QoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2ZW50cy1saXN0IG9wZW4tZXZlbnRzJz5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdoaWRlLWZvci1zbWFsbC1vbmx5Jz57VHJhbnNsYXRpb25zLkhPTUVfUEFHRS5PUEVOX0dBTUVTfTwvaDY+XG4gICAgICAgICAgICB7IF8ubWFwKG9wZW5HYW1lcywgKGdhbWUsIGdhbWVJZCkgPT4gPEV2ZW50SXRlbSBrZXk9eydvcGVuLWdhbWUtJyArIGdhbWVJZH0gZXZlbnRJZD17Z2FtZUlkfSBvbkJvb2tpbmc9e2JpbmRPbkdhbWVJdGVtQ2xpY2sob25Cb29raW5nLCBnYW1lSWQpfSBvbkNhbmNlbEJvb2tpbmc9e2JpbmRPbkdhbWVJdGVtQ2xpY2sob25DYW5jZWxCb29raW5nLCBnYW1lSWQpfSAvPikgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xvc2VkR2FtZXNMaXN0KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudHMtbGlzdCBjbG9zZWQtZXZlbnRzIGhpZGUtZm9yLXNtYWxsLW9ubHknPlxuICAgICAgICAgIDxoNj57VHJhbnNsYXRpb25zLkhPTUVfUEFHRS5DTE9TRURfR0FNRVN9PC9oNj5cbiAgICAgICAgICAgIHsgXy5tYXAoY2xvc2VkR2FtZXNBcnIsIGdhbWVEYXRhID0+IDxFdmVudEl0ZW0ga2V5PXsnY2xvc2VkLWdhbWUtJyArIGdhbWVEYXRhLmdhbWVJZH0gZXZlbnRJZD17Z2FtZURhdGEuZ2FtZUlkfSAvPikgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIHsgXy5pc0VtcHR5KG9wZW5HYW1lcykgPyBudWxsIDogY3JlYXRlT3BlbkdhbWVzTGlzdCgpIH1cbiAgICAgICAgeyBjcmVhdGVDbG9zZWRHYW1lc0xpc3QoKSB9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBvbkJvb2tpbmcgPSBnYW1lSWQgPT4ge1xuICAgIHRoaXMucHJvcHMubmF2aWdhdGVUb1VwZGF0ZUJvb2tpbmcodGhpcy5wcm9wcy51aWQsIGdhbWVJZCk7XG4gIH07XG5cbiAgb25DYW5jZWxCb29raW5nID0gZ2FtZUlkID0+IHtcbiAgICB0aGlzLnByb3BzLmNhbmNlbEJvb2tpbmcodGhpcy5wcm9wcy51aWQsIGdhbWVJZCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG9wZW5HYW1lcyA9IGdldE9wZW5HYW1lcyh0aGlzLnByb3BzLmdhbWVzKTtcbiAgICBjb25zdCBjbG9zZWRHYW1lc0FyciA9IGdldENsb3NlZEdhbWVzQXJyKHRoaXMucHJvcHMuZ2FtZXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2l0ZSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lLXBhZ2Ugc21hbGwtY2VudGVyZWQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudHMtY29udGFpbmVyJyBrZXk9J2V2ZW50cy1jb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2V2ZW50cycga2V5PSdldmVudHMnPlxuICAgICAgICAgICAgICB7IF8uaXNFbXB0eShvcGVuR2FtZXMpID8gY3JlYXRlTW9iaWxlTm9HYW1lc01lc3NhZ2VTZWN0aW9uKCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgeyBjcmVhdGVHYW1lc0xpc3RzKG9wZW5HYW1lcywgY2xvc2VkR2FtZXNBcnIsIHRoaXMub25Cb29raW5nLCB0aGlzLm9uQ2FuY2VsQm9va2luZykgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XG4gIHVpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBnYW1lczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBuYXZpZ2F0ZVRvVXBkYXRlQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2FuY2VsQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWVQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlLmpzeCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvZXZlbnRJdGVtLnNjc3MnKTtcblxuZnVuY3Rpb24gaXNCb29raW5nRW5hYmxlZChldmVudCwgdXNlcikge1xuICAgIHN3aXRjaCAoZXZlbnQuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX0FMTDpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTOiB7XG4gICAgICAgICAgICByZXR1cm4gdXNlci5zZWFzb25UaWNrZXRzID4gMFxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICBjb25zdCBhdXRoRGF0YSA9IHN0YXRlLmF1dGhEYXRhO1xuICAgIGNvbnN0IHVzZXJzID0gc3RhdGUudXNlcnM7XG4gICAgY29uc3QgZXZlbnQgPSBzdGF0ZS5ldmVudHNbb3duUHJvcHMuZXZlbnRJZF07XG4gICAgY29uc3QgYm9va2luZ3MgPSBzdGF0ZS5ib29raW5ncztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhvbWVUZWFtOiBDb25zdGFudHMuVEVBTVMuSEFQT0VMX0pFUlVTQUxFTSxcbiAgICAgICAgYXdheVRlYW06IENvbnN0YW50cy5URUFNU1tldmVudC50eXBlSWRdLFxuICAgICAgICBzdGF0dXM6IGV2ZW50LnN0YXR1cyxcbiAgICAgICAgZGF0ZTogZXZlbnQuZGF5ICsgJy8nICsgZXZlbnQubW9udGggKyAnLycgKyBldmVudC55ZWFyLFxuICAgICAgICB0aW1lOiBldmVudC5ob3VyICsgJzonICsgZXZlbnQubWludXRlLFxuICAgICAgICBpc0Jvb2tpbmdBbGxvd2VkOiBpc0Jvb2tpbmdFbmFibGVkKGV2ZW50LCB1c2Vyc1thdXRoRGF0YS51aWRdKSxcbiAgICAgICAgaXNCb29rZWQ6IF8uaGFzSW4oYm9va2luZ3MsIFthdXRoRGF0YS51aWQsIG93blByb3BzLmV2ZW50SWRdKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGVhbUxvZ29zKGhvbWUsIGF3YXkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHMtaW1hZ2VzIG1lZGl1bS00IHNtYWxsLTEyIHRleHQtY2VudGVyIG1lZGl1bS10ZXh0LXJpZ2h0IGNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXZlbnQtaW1hZ2Ugc21hbGwgaGlkZS1mb3Itc21hbGwtb25seVwiIHNyYz17aG9tZS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JvdXAtdGV4dCBoaWRlLWZvci1zbWFsbC1vbmx5XCI+e2hvbWUubGFiZWx9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZS1mb3Itc21hbGwtb25seSBzZXBhcmF0b3JcIj4gLSA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIHNtYWxsIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBzcmM9e2F3YXkubG9nb30vPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgaGlkZS1mb3Itc21hbGwtb25seVwiPnthd2F5LmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwcy1uYW1lcyBzaG93LWZvci1zbWFsbC1vbmx5IHRleHQtY2VudGVyIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBzbWFsbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXZlbnQtaW1hZ2UgYmlnXCIgc3JjPXtob21lLmxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JvdXAtdGV4dCBzbWFsbFwiPntob21lLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgc21hbGwtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIGJpZ1wiIHNyYz17YXdheS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgc21hbGxcIj57YXdheS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRUaW1lQW5kRGF0ZShkYXRlLCB0aW1lLCBpc09wZW5Gb3JCb29raW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaW5mbyBjb2x1bW4gbWVkaXVtLTIgc21hbGwtMTIgaGlkZS1mb3Itc21hbGwtb25seVwiPlxuICAgICAgICAgICAgICAgIHsgaXNPcGVuRm9yQm9va2luZyA/IDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXRpbWVcIj57dGltZX08L3NwYW4+IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtZGF0ZVwiPntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIHNob3ctZm9yLXNtYWxsLW9ubHkgY29sb3JlZFwiPlxuICAgICAgICAgICAgICAgIHsgaXNPcGVuRm9yQm9va2luZyA/IDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXRpbWVcIj57dGltZX08L3NwYW4+IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtZGF0ZVwiPntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGdWxseUJvb2tlZExhYmVsKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIGhpZGUtZm9yLXNtYWxsLW9ubHlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdGF0dXNcIj57VHJhbnNsYXRpb25zLkdBTUUuU1RBVFVTW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5GVUxMWV9CT09LRURdfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIHNob3ctZm9yLXNtYWxsLW9ubHkgY29sb3JlZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXN0YXR1c1wiPntUcmFuc2xhdGlvbnMuR0FNRS5TVEFUVVNbQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkZVTExZX0JPT0tFRF19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvb2tpbmdCdXR0b24oaXNCb29raW5nQWxsb3dlZCwgaXNCb29rZWQsIG9uQm9va2luZykge1xuICAgIGNvbnN0IGJvb2tCdXR0b24gPSAoXG4gICAgICAgIDxzcGFuIGtleT1cImJvb2stYnRuXCI+XG4gICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVfSVRFTS5CT09LfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJ1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICBjb25zdCBlZGl0Qm9va2luZ0J1dHRvbiA9IChcbiAgICAgICAgPHNwYW4ga2V5PVwiZWRpdC1idG5cIj5cbiAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuR0FNRV9JVEVNLkVESVRfQk9PS0lOR308L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1idXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3Mgc21hbGxcIiBrZXk9XCJyZWdpc3Rlci1idG5cIiBvbkNsaWNrPXtpc0Jvb2tpbmdBbGxvd2VkID8gb25Cb29raW5nIDogXy5ub29wfSBkaXNhYmxlZD17IWlzQm9va2luZ0FsbG93ZWR9PlxuICAgICAgICAgICAgeyBpc0Jvb2tlZCA/IGVkaXRCb29raW5nQnV0dG9uIDogYm9va0J1dHRvbiB9XG4gICAgICAgIDwvYT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uKG9uQ2FuY2VsQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzbWFsbCBhbGVydFwiIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvbkNhbmNlbEJvb2tpbmd9PlxuICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FX0lURU0uQ0FOQ0VMX0JPT0tJTkd9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgIDwvYT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25zQnV0dG9ucyhpc09wZW5Gb3JCb29raW5nLCBpc0Jvb2tpbmdBbGxvd2VkLCBpc0Jvb2tlZCwgb25Cb29raW5nLCBvbkNhbmNlbEJvb2tpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25zIG1lZGl1bS00IHNtYWxsLTEyIHRleHQtY2VudGVyIG1lZGl1bS10ZXh0LWxlZnQgY29sdW1uXCI+XG4gICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyBjcmVhdGVCb29raW5nQnV0dG9uKGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcpIDogbnVsbCB9XG4gICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgJiYgaXNCb29rZWQgPyBjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uKG9uQ2FuY2VsQm9va2luZykgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgRXZlbnRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbkZvckJvb2tpbmcgPSB0aGlzLnByb3BzLnN0YXR1cyAhPT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRDtcbiAgICAgICAgY29uc3QgaXNGdWxseUJvb2tlZCA9IHRoaXMucHJvcHMuc3RhdHVzID09PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuRlVMTFlfQk9PS0VEO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pdGVtIHJvdyBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlVGVhbUxvZ29zKHRoaXMucHJvcHMuaG9tZVRlYW0sIHRoaXMucHJvcHMuYXdheVRlYW0pIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUV2ZW50VGltZUFuZERhdGUodGhpcy5wcm9wcy5kYXRlLCB0aGlzLnByb3BzLnRpbWUsIGlzT3BlbkZvckJvb2tpbmcgKX1cbiAgICAgICAgICAgICAgICB7IGlzRnVsbHlCb29rZWQgPyBjcmVhdGVGdWxseUJvb2tlZExhYmVsKCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUFjdGlvbnNCdXR0b25zKGlzT3BlbkZvckJvb2tpbmcsIHRoaXMucHJvcHMuaXNCb29raW5nQWxsb3dlZCwgdGhpcy5wcm9wcy5pc0Jvb2tlZCwgdGhpcy5wcm9wcy5vbkJvb2tpbmcsIHRoaXMucHJvcHMub25DYW5jZWxCb29raW5nKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkV2ZW50SXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgaG9tZVRlYW06IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsb2dvOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBhd2F5VGVhbTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxvZ286IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGRhdGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGF0dXM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNCb29raW5nQWxsb3dlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNCb29rZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9uQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DYW5jZWxCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShFdmVudEl0ZW0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50SXRlbS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRJdGVtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnQtaXRlbSB7XFxuICBmb250LXNpemU6IDAuOWVtOyB9XFxuICAuZXZlbnQtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLWltYWdlcyAuc2VwYXJhdG9yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbWFnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2UuYmlnIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogOTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2Uuc21hbGwge1xcbiAgICAgIG1hcmdpbjogMCA1cHg7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLW5hbWVzIHtcXG4gICAgcGFkZGluZzogMCA0ZW07IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvLmNvbG9yZWQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyAuZXZlbnQtc3RhdHVzIHtcXG4gICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyBzcGFuIHtcXG4gICAgICBtYXJnaW46IDAgMTVweDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIC5idXR0b24uc21hbGwge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgICBtYXJnaW46IDAgNXB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZS1wYWdlIC5ldmVudHMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgIC5ob21lLXBhZ2UgLmV2ZW50cyB7XFxuICAgICAgbWFyZ2luLXRvcDogMHB4OyB9IH1cXG5cXG4uaG9tZS1wYWdlIC5vcGVuLWV2ZW50cyB7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XFxuXFxuLmhvbWUtcGFnZSAuZXZlbnRzLWxpc3QgaDYge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaG9tZS1wYWdlIC5uby1ib29raW5ncyB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM0MjQyNDI7IH1cXG4gIC5ob21lLXBhZ2UgLm5vLWJvb2tpbmdzIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG4uaG9tZS1wYWdlIC5ldmVudC1pdGVtIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSAuZXZlbnQtaXRlbSB7XFxuICAgICAgcGFkZGluZzogMTVweCAwIDMwcHggMDsgfSB9XFxuICAuaG9tZS1wYWdlIC5ldmVudC1pdGVtOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7IH1cXG4gIC5ob21lLXBhZ2UgLmV2ZW50LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9ob21lUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuXG5jb25zdCBMaXN0SXRlbSA9IHJlcXVpcmUoJy4vbGlzdEl0ZW0nKTtcbmNvbnN0IFBhZ2VUaXRsZSA9IHJlcXVpcmUoJy4vcGFnZVRpdGxlJyk7XG5cbmNvbnN0IEZJTFRFUlMgPSB7XG4gICAgQUxMOiAnQUxMJyxcbiAgICBNRU1CRVJTOiAnTUVNQkVSUycsXG4gICAgUkVRVUVTVFM6ICdSRVFVRVNUUycsXG4gICAgTk9OX01FTUJFUlM6ICdOT05fTUVNQkVSUydcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBmaWx0ZXI6IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXMuZmlsdGVyIHx8IEZJTFRFUlMuQUxMLFxuICAgICAgICAgICAgc2VhcmNoOiBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zLnNlYXJjaCB8fCAnJ1xuICAgICAgICB9LFxuICAgICAgICB1c2Vyczogc3RhdGUudXNlcnNcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYXZUb0VkaXRVc2VyOiB1aWQgPT4gIGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRURJVF9VU0VSX0lORk8sIHsgdWlkIH0pKSxcbiAgICAgICAgY2hhbmdlRmlsdGVyOiBmaWx0ZXIgPT4gIGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLnJlcGxhY2UobnVsbCwgeyBmaWx0ZXIgfSkpLFxuICAgICAgICBjaGFuZ2VTZWFyY2hRdWVyeTogXy5kZWJvdW5jZShzZWFyY2ggPT4gIGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLnJlcGxhY2UobnVsbCwgeyBzZWFyY2ggfSkpLCA1MDApXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY291bnRNZW1iZXJzKHVzZXJzKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odXNlcnMpXG4gICAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zLk1FTUJFUlMpXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ3NlYXNvblRpY2tldHMnKVxuICAgICAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gY291bnRSZXF1ZXN0cyh1c2Vycykge1xuICAgIHJldHVybiBfLmNoYWluKHVzZXJzKVxuICAgICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5SRVFVRVNUUylcbiAgICAgICAgLnNpemUoKVxuICAgICAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gY291bnROb25NZW1iZXJzKHVzZXJzKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odXNlcnMpXG4gICAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zLk5PTl9NRU1CRVJTKVxuICAgICAgICAuc2l6ZSgpXG4gICAgICAgIC52YWx1ZSgpO1xufVxuXG5mdW5jdGlvbiBjb3VudEFjY29yZGluZ1RvRmlsdGVycyh1c2Vycykge1xuICAgIHJldHVybiB7XG4gICAgICAgIFtGSUxURVJTLkFMTF06IF8uc2l6ZSh1c2VycyksXG4gICAgICAgIFtGSUxURVJTLk1FTUJFUlNdOiBjb3VudE1lbWJlcnModXNlcnMpLFxuICAgICAgICBbRklMVEVSUy5SRVFVRVNUU106IGNvdW50UmVxdWVzdHModXNlcnMpLFxuICAgICAgICBbRklMVEVSUy5OT05fTUVNQkVSU106IGNvdW50Tm9uTWVtYmVycyh1c2VycyksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlclRpdGxlKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyU3VidGl0bGVzKHVzZXIpIHtcbiAgICByZXR1cm4gW3VzZXIucGhvbmVQcmVmaXggKyAnLScgKyB1c2VyLnBob25lTnVtYmVyLCB1c2VyLmVtYWlsLCAn15vXnteV16og157XoNeV15nXmdedOiAnICsgKHVzZXIuc2Vhc29uVGlja2V0cyB8fCAwKV07XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJJbWFnZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIucGhvdG9VUkwgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE2My8xNjM4MDQuc3ZnJztcbn1cblxuY29uc3QgcGlja1VzZXJzRnVuY3Rpb25zID0ge1xuICAgIEFMTDogKCkgPT4gdHJ1ZSxcbiAgICBNRU1CRVJTOiB1c2VyID0+IHVzZXIuc2Vhc29uVGlja2V0cyA+IDAsXG4gICAgTk9OX01FTUJFUlM6IHVzZXIgPT4gIXVzZXIuc2Vhc29uVGlja2V0cyxcbiAgICBSRVFVRVNUUzogdXNlciA9PiB1c2VyLnJlcXVlc3RGb3JNZW1iZXJzaGlwLFxufTtcblxuZnVuY3Rpb24gZ2V0VmlzaWJsZVVzZXJzKHVzZXJzLCBmaWx0ZXIsIHNlYXJjaFF1ZXJ5KSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odXNlcnMpXG4gICAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zW2ZpbHRlcl0pXG4gICAgICAgIC5waWNrQnkodXNlciA9PiBfLnN0YXJ0c1dpdGgodXNlci5maXJzdE5hbWUsIHNlYXJjaFF1ZXJ5KSB8fCBfLnN0YXJ0c1dpdGgodXNlci5sYXN0TmFtZSwgc2VhcmNoUXVlcnkpLCB0aGlzKVxuICAgICAgICAubWFwKCh1c2VyLCB1aWQpID0+ICh7dXNlciwgdWlkfSkpXG4gICAgICAgIC5zb3J0QnkoJ3VzZXIuZmlyc3ROYW1lJylcbiAgICAgICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbHRlcihzZWFyY2hRdWVyeSwgZmlsdGVyLCBoYW5kbGVGaWx0ZXJDaGFuZ2UsIGhhbmRsZVNlYXJjaFF1ZXJ5Q2hhbmdlLCBmaWx0ZXJDb3VudHMpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbHRlclRhYnMoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTEyIGxhcmdlLTgnPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J21lbnUgc21hbGwtdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gRklMVEVSUy5BTEx9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzLCBGSUxURVJTLkFMTCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuVVNFUlNfUEFHRS5GSUxURVIuVEFCUy5BTEx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7IGZpbHRlckNvdW50c1tGSUxURVJTLkFMTF0gfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gRklMVEVSUy5NRU1CRVJTfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcywgRklMVEVSUy5NRU1CRVJTKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLkZJTFRFUi5UQUJTLk1FTUJFUlN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7IGZpbHRlckNvdW50c1tGSUxURVJTLk1FTUJFUlNdIH0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IEZJTFRFUlMuUkVRVUVTVFN9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzLCBGSUxURVJTLlJFUVVFU1RTKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLkZJTFRFUi5UQUJTLlJFUVVFU1RTfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oeyBmaWx0ZXJDb3VudHNbRklMVEVSUy5SRVFVRVNUU10gfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gRklMVEVSUy5OT05fTUVNQkVSU30pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUZpbHRlckNoYW5nZS5iaW5kKHRoaXMsIEZJTFRFUlMuTk9OX01FTUJFUlMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLlVTRVJTX1BBR0UuRklMVEVSLlRBQlMuTk9OX01FTUJFUlN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7IGZpbHRlckNvdW50c1tGSUxURVJTLk5PTl9NRU1CRVJTXSB9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGV4dElucHV0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBzbWFsbC0xMiBsYXJnZS00Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2gtaW5wdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17VHJhbnNsYXRpb25zLlVTRVJTX1BBR0UuRklMVEVSLlNFQVJDSH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hRdWVyeUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzZWFyY2gtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICB7IGNyZWF0ZUZpbHRlclRhYnMoKSB9XG4gICAgICAgICAgICB7IGNyZWF0ZVRleHRJbnB1dCgpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlcnNMaXN0KHVzZXJzQXJyLCBvblVzZXJDbGljaykge1xuXG4gICAgY29uc3Qgb25JdGVtQ2xpY2sgPSB1aWQgPT4ge1xuICAgICAgICBvblVzZXJDbGljayh1aWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBpdGVtcyA9IF8ubWFwKHVzZXJzQXJyLCB1c2VyRGVmID0+IHtcbiAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgIGtleT17J3VzZXInICsgdXNlckRlZi51aWR9XG4gICAgICAgICAgICAgICB0aXRsZT17Z2V0VXNlclRpdGxlKHVzZXJEZWYudXNlcil9XG4gICAgICAgICAgICAgICBzdWJ0aXRsZXM9e2dldFVzZXJTdWJ0aXRsZXModXNlckRlZi51c2VyKX1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uSXRlbUNsaWNrLmJpbmQodGhpcywgdXNlckRlZi51aWQpfVxuICAgICAgICAgICAgICAgaW1hZ2VTcmM9e2dldFVzZXJJbWFnZSh1c2VyRGVmLnVzZXIpfVxuICAgICAgICAgICAvPlxuICAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyBpdGVtcyB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vVXNlcnNNZXNzYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZpbHRlci1zdGF0dXMnPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1mcm93bi1vJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuVVNFUlNfUEFHRS5OT19VU0VSU19GT1VORH08L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgKTtcbn1cblxuY2xhc3MgVXNlcnNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaDogdGhpcy5wcm9wcy5xdWVyeS5zZWFyY2hcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLnF1ZXJ5LnNlYXJjaCAhPT0gdGhpcy5zdGF0ZS5zZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2g6IG5leHRQcm9wcy5xdWVyeS5zZWFyY2ggfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTZWFyY2hRdWVyeUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaCB9LCAoKSA9PiB0aGlzLnByb3BzLmNoYW5nZVNlYXJjaFF1ZXJ5KHNlYXJjaCkpO1xuICAgIH07XG5cbiAgICBoYW5kbGVGaWx0ZXJDaGFuZ2UgPSBmaWx0ZXIgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoZmlsdGVyKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB2aXNpYmxlVXNlcnNBcnIgPSBnZXRWaXNpYmxlVXNlcnModGhpcy5wcm9wcy51c2VycywgdGhpcy5wcm9wcy5xdWVyeS5maWx0ZXIsIHRoaXMuc3RhdGUuc2VhcmNoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlJz5cblxuICAgICAgICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLlRJVExFfSAvPlxuXG4gICAgICAgICAgICAgICAgeyBjcmVhdGVGaWx0ZXIodGhpcy5zdGF0ZS5zZWFyY2gsIHRoaXMucHJvcHMucXVlcnkuZmlsdGVyLCB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSwgdGhpcy5oYW5kbGVTZWFyY2hRdWVyeUNoYW5nZSwgY291bnRBY2NvcmRpbmdUb0ZpbHRlcnModGhpcy5wcm9wcy51c2VycykpIH1cblxuICAgICAgICAgICAgICAgIHsgXy5pc0VtcHR5KHZpc2libGVVc2Vyc0FycikgPyBjcmVhdGVOb1VzZXJzTWVzc2FnZSgpIDogY3JlYXRlVXNlcnNMaXN0KHZpc2libGVVc2Vyc0FyciwgdGhpcy5wcm9wcy5uYXZUb0VkaXRVc2VyKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVzZXJzUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgcXVlcnk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBuYXZUb0VkaXRVc2VyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoYW5nZUZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGFuZ2VTZWFyY2hRdWVyeTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJzUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlLmpzeCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2xpc3RJdGVtLnNjc3MnKTtcblxuY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtIHNtYWxsLTEyXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3QtaW1hZ2VcIiBzcmM9e3RoaXMucHJvcHMuaW1hZ2VTcmN9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtdGl0bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0aXRsZSBsYXJnZS10ZXh0IGhpZGUtZm9yLXByaW50XCI+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcCh0aGlzLnByb3BzLnN1YnRpdGxlcywgKHN1YnRpdGxlLCBrZXkpID0+IDxsYWJlbCBrZXk9eydzdWJ0aXRsZS0nICsga2V5fSBjbGFzc05hbWU9XCJzdWJ0aXRsZSBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5XCI+e3N1YnRpdGxlfTwvbGFiZWw+KX1cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcCh0aGlzLnByb3BzLnN1YnRpdGxlcywgKHN1YnRpdGxlLCBrZXkpID0+IDxsYWJlbCBrZXk9eydzdWJ0aXRsZS1sYXJnZS0nICsga2V5fSBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpbmxpbmUgaGlkZS1mb3Itc21hbGwtb25seVwiPntzdWJ0aXRsZX08L2xhYmVsPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdWJ0aXRsZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBpbWFnZVNyYzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0SXRlbTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9saXN0SXRlbS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2xpc3RJdGVtLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2xpc3RJdGVtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9saXN0SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IH1cXG4gIC5saXN0LWl0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxcbiAgLmxpc3QtaXRlbSAubGlzdC1pbWFnZSB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMTAsIDEwLCAxMCwgMC4xKTsgfVxcbiAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMge1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIC50aXRsZS5sYXJnZS10ZXh0IHtcXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIC5zdWJ0aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAwLjgwcmVtOyB9XFxuICAgICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnN1YnRpdGxlLmlubGluZSwgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnN1YnRpdGxlLmlubGluZS5zaG93LWZvci1wcmludCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvcGFnZVRpdGxlLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgbmF2aWdhdGVCYWNrOiAoKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZUJhY2soKSlcbiAgfTtcbn1cblxuY2xhc3MgUGFnZVRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS10aXRsZSc+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3RpdGxlJz57dGhpcy5wcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmFjay1idG4nIGtleT0nYmFjay1idG4nIG9uQ2xpY2s9e3RoaXMucHJvcHMubmF2aWdhdGVCYWNrfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWFycm93LWxlZnQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFnZVRpdGxlLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlQmFjazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYWdlVGl0bGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcGFnZVRpdGxlLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFnZVRpdGxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFnZVRpdGxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9wYWdlVGl0bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3BhZ2VUaXRsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLXRpdGxlIHtcXG4gIGJhY2tncm91bmQ6ICNFRjUzNTA7XFxuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI0QzMkYyRjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgaGVpZ2h0OiAzLjNlbTtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnBhZ2UtdGl0bGUgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZsZXg6IDE7IH1cXG4gIC5wYWdlLXRpdGxlIC5iYWNrLWJ0biB7XFxuICAgIHdpZHRoOiAyMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9wYWdlVGl0bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcblxuY29uc3QgUGFnZVRpdGxlID0gcmVxdWlyZSgnLi9wYWdlVGl0bGUnKTtcbmNvbnN0IExpc3RJdGVtID0gcmVxdWlyZSgnLi9saXN0SXRlbScpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvZ2FtZXNQYWdlLnNjc3MnKTtcblxuY29uc3QgVEFCUyA9IHtcbiAgICBBTEw6ICdhbGwnLFxuICAgIE9QRU46ICdvcGVuJyxcbiAgICBDTE9TRUQ6ICdjbG9zZWQnXG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnYW1lczogc3RhdGUuZXZlbnRzLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgZmlsdGVyOiBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zLmZpbHRlciB8fCBUQUJTLkFMTFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRpdEdhbWU6IGdhbWVJZCA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVQREFURV9HQU1FLCB7IGdhbWVJZCB9KSksXG4gICAgICAgIGNyZWF0ZUdhbWU6ICgpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVBEQVRFX0dBTUUpKSxcbiAgICAgICAgY2hhbmdlRmlsdGVyOiBmaWx0ZXIgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMucmVwbGFjZShudWxsLCB7IGZpbHRlciB9KSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWaXNpYmxlR2FtZXMoZ2FtZXMsIGZpbHRlcikge1xuICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICAgIGNhc2UgVEFCUy5PUEVOOlxuICAgICAgICAgICAgcmV0dXJuIGdldE9wZW5HYW1lcyhnYW1lcyk7XG4gICAgICAgIGNhc2UgVEFCUy5DTE9TRUQ6XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q2xvc2VkR2FtZXMoZ2FtZXMpO1xuICAgIH1cbiAgICByZXR1cm4gZ2FtZXM7XG59XG5cbmZ1bmN0aW9uIGdldE9wZW5HYW1lcyhnYW1lcykge1xuICAgIHJldHVybiBfLm9taXRCeShnYW1lcywgZ2FtZSA9PiBnYW1lLnN0YXR1cyA9PT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRCk7XG59XG5cbmZ1bmN0aW9uIGdldENsb3NlZEdhbWVzKGdhbWVzKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KGdhbWVzLCBnYW1lID0+IGdhbWUuc3RhdHVzID09PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2FtZVN1YnRpdGxlcyhnYW1lKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgJ9eq15DXqNeZ15o6ICcgKyBgJHtnYW1lLmRheX0vJHtnYW1lLm1vbnRofS8ke2dhbWUueWVhcn1gLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG4gICAgICAgICfXqdei15Q6ICcgKyAgYCR7Z2FtZS5ob3VyfToke2dhbWUubWludXRlfWAsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1jb25jYXRcbiAgICAgICAgVHJhbnNsYXRpb25zLkdBTUUuU1RBVFVTW2dhbWUuc3RhdHVzXVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoZ2FtZXMsIGZpbHRlciwgb25GaWx0ZXJDaGFuZ2UpIHtcbiAgICBmdW5jdGlvbiBvblRhYkNsaWNrKHNlbGVjdGVkRmlsdGVyKSB7XG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlKHNlbGVjdGVkRmlsdGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcmluZyByb3cgZXhwYW5kZWQgY29sbGFwc2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNic+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gVEFCUy5BTEx9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvblRhYkNsaWNrLmJpbmQodGhpcywgVEFCUy5BTEwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVTX1BBR0UuVEFCUy5BTEx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7Xy5zaXplKGdhbWVzKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IFRBQlMuT1BFTn0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uVGFiQ2xpY2suYmluZCh0aGlzLCBUQUJTLk9QRU4pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVTX1BBR0UuVEFCUy5PUEVOfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe18uc2l6ZShnZXRPcGVuR2FtZXMoZ2FtZXMpKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IFRBQlMuQ0xPU0VEfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25UYWJDbGljay5iaW5kKHRoaXMsIFRBQlMuQ0xPU0VEKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FU19QQUdFLlRBQlMuQ0xPU0VEfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe18uc2l6ZShnZXRDbG9zZWRHYW1lcyhnYW1lcykpfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb0dhbWVzTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmaWx0ZXItc3RhdHVzJz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZnJvd24tbycgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuR0FNRVNfUEFHRS5OT19HQU1FU19MQUJFTH08L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGx1c0J1dHRvbihvbkNyZWF0ZUdhbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Zsb2F0LWxlZnQgYWRkLWJ0biBiaWcgaGlkZS1mb3Itc21hbGwtb25seScgb25DbGljaz17b25DcmVhdGVHYW1lfT4rPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxvYXQtbGVmdCBhZGQtYnRuIHNtYWxsIHNob3ctZm9yLXNtYWxsLW9ubHknIG9uQ2xpY2s9e29uQ3JlYXRlR2FtZX0+KzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBHYW1lc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIG9uRmlsdGVyQ2hhbmdlZCA9IGZpbHRlciA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKGZpbHRlcik7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUdhbWVzID0gZ2V0VmlzaWJsZUdhbWVzKHRoaXMucHJvcHMuZ2FtZXMsIHRoaXMucHJvcHMucXVlcnkuZmlsdGVyKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlIGdhbWVzLXBhZ2UnPlxuXG4gICAgICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17VHJhbnNsYXRpb25zLkdBTUVTX1BBR0UuVElUTEV9IC8+XG5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZVRhYnModGhpcy5wcm9wcy5nYW1lcywgdGhpcy5wcm9wcy5xdWVyeS5maWx0ZXIsIHRoaXMub25GaWx0ZXJDaGFuZ2VkKSB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF8ubWFwKHZpc2libGVHYW1lcywgKGdhbWUsIGdhbWVJZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17J2dhbWUtJyArIGdhbWVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Q29uc3RhbnRzLlRFQU1TW2dhbWUudHlwZUlkXS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZXM9e2dldEdhbWVTdWJ0aXRsZXMoZ2FtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e0NvbnN0YW50cy5URUFNU1tnYW1lLnR5cGVJZF0ubG9nbyB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTM4LzEzODc3Ni5zdmcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuZWRpdEdhbWUuYmluZCh0aGlzLCBnYW1lSWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7IHZpc2libGVHYW1lcy5sZW5ndGggPT0gMCA/IGNyZWF0ZU5vR2FtZXNNZXNzYWdlKCkgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlUGx1c0J1dHRvbih0aGlzLnByb3BzLmNyZWF0ZUdhbWUpIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5HYW1lc1BhZ2UucHJvcFR5cGVzID0ge1xuICAgIGdhbWVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY3JlYXRlR2FtZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlZGl0R2FtZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGFuZ2VGaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHYW1lc1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2dhbWVzUGFnZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2dhbWVzUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2dhbWVzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZXNQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9nYW1lc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZXMtcGFnZSAuZmlsdGVyaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2dhbWVzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuXG5jb25zdCBQYWdlVGl0bGUgPSByZXF1aXJlKCcuL3BhZ2VUaXRsZScpO1xuY29uc3QgTGlzdEl0ZW0gPSByZXF1aXJlKCcuL2xpc3RJdGVtJyk7XG5cbmNvbnN0IFRBQlMgPSB7XG4gICAgUElDS1VQOiAncGlja1VwJyxcbiAgICBEUk9QT0ZGOiAnZHJvcE9mZidcbn07XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9ib29raW5nc1BhZ2Uuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29raW5nczogc3RhdGUuYm9va2luZ3MsXG4gICAgICAgIGdhbWVzOiBzdGF0ZS5ldmVudHMsXG4gICAgICAgIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIGdhbWVJZDogc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcy5nYW1lSWQgfHwgXy5maW5kS2V5KHN0YXRlLmV2ZW50cywge3N0YXR1czogQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX01FTUJFUlN9KSB8fCBfLmZpbmRLZXkoc3RhdGUuZXZlbnRzLCB7c3RhdHVzOiBDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfQUxMfSkgfHwgIF8uZmluZEtleShzdGF0ZS5ldmVudHMsIHtzdGF0dXM6IENvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRUR9KSxcbiAgICAgICAgICAgIGZpbHRlcjogc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcy5maWx0ZXIgfHwgVEFCUy5QSUNLVVBcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVkaXRCb29raW5nOiAoZ2FtZUlkLCB1aWQpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVBEQVRFX0JPT0tJTkcsIHsgZ2FtZUlkLCB1aWQgfSkpLFxuICAgICAgICBjaGFuZ2VGaWx0ZXI6IGZpbHRlciA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5yZXBsYWNlKG51bGwsIHsgZmlsdGVyIH0pKSxcbiAgICAgICAgY2hhbmdlR2FtZUlkOiBnYW1lSWQgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMucmVwbGFjZShudWxsLCB7IGdhbWVJZCB9KSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCb29raW5nVGl0bGUodXNlcikge1xuICAgIHJldHVybiB1c2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXIubGFzdE5hbWU7XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tpbmdQaG9uZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIucGhvbmVQcmVmaXggKyAnLScgKyB1c2VyLnBob25lTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBnZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIHVzZXIpIHtcbiAgICBjb25zdCBzdWJ0aXRsZXMgPSBbXTtcblxuICAgIGlmIChib29raW5nLnBhaWRTZWF0cyA+IDApIHtcbiAgICAgICAgc3VidGl0bGVzLnB1c2goJ9ee16DXldeZ15nXnTogJyArIGJvb2tpbmcucGFpZFNlYXRzKTtcbiAgICB9XG4gICAgaWYgKGJvb2tpbmcuZXh0cmFTZWF0cyA+IDApIHtcbiAgICAgICAgc3VidGl0bGVzLnB1c2goJ9eX15Mg16TXotee15k6ICcgKyBib29raW5nLmV4dHJhU2VhdHMpO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5waWNrVXApIHtcbiAgICAgICAgc3VidGl0bGVzLnB1c2goJ9eU15zXldeaOiAnICsgVHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXSk7XG4gICAgfVxuICAgIGlmIChib29raW5nLmRyb3BPZmYpIHtcbiAgICAgICAgc3VidGl0bGVzLnB1c2goJ9eX15bXldeoOiAnICsgVHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl0pO1xuICAgIH1cblxuICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHN1YnRpdGxlcy5wdXNoKCfXmNec17M6ICcgKyBnZXRCb29raW5nUGhvbmUodXNlcikpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJ0aXRsZXM7XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tpbmdJbWFnZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIucGhvdG9VUkwgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE4OS8xODk5OTEuc3ZnJztcbn1cblxuZnVuY3Rpb24gZ2V0UGlja1VwTWFwKGJvb2tpbmdzKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4oYm9va2luZ3MpXG4gICAgICAgIC5vbWl0QnkoYm9va2luZyA9PiAhKGJvb2tpbmcucGlja1VwKSlcbiAgICAgICAgLnRyYW5zZm9ybSgoYWNjLCBib29raW5nLCB1aWQpID0+IHtcbiAgICAgICAgICAgIGFjY1tib29raW5nLnBpY2tVcF1bdWlkXSA9IGJvb2tpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgfSwgeyB0bHY6IHt9LCBtb2RpaW46IHt9IH0pXG4gICAgICAgIC52YWx1ZSgpO1xufVxuXG5mdW5jdGlvbiBnZXREcm9wT2ZmTWFwKGJvb2tpbmdzKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4oYm9va2luZ3MpXG4gICAgICAgIC5vbWl0QnkoYm9va2luZyA9PiAhKGJvb2tpbmcuZHJvcE9mZikpXG4gICAgICAgIC50cmFuc2Zvcm0oKGFjYywgYm9va2luZywgdWlkKSA9PiB7XG4gICAgICAgICAgICBhY2NbYm9va2luZy5kcm9wT2ZmXVt1aWRdID0gYm9va2luZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB9LCB7IHRsdjoge30sIG1vZGlpbjoge30gfSlcbiAgICAgICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGdldFZpc2libGVCb29raW5ncyhib29raW5ncywgZ2FtZUlkKSB7XG4gICAgY29uc3QgYm9va2luZ0ZvckV2ZW50TWFwID0gXy5jaGFpbihib29raW5ncylcbiAgICAgICAgLm1hcFZhbHVlcyh1c2VyQm9va2luZ3MgPT4gdXNlckJvb2tpbmdzW2dhbWVJZF0pXG4gICAgICAgIC5vbWl0QnkoXy5pc1VuZGVmaW5lZClcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwaWNrVXA6IGdldFBpY2tVcE1hcChib29raW5nRm9yRXZlbnRNYXApLFxuICAgICAgICBkcm9wT2ZmOiBnZXREcm9wT2ZmTWFwKGJvb2tpbmdGb3JFdmVudE1hcClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb3VudFBpY2t1cHModmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgY29uc3QgdGx2UGlja1Vwc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAudGx2KVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IHRsdlBpY2tVcHNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHYpXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpblBpY2tVcHNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLm1vZGlpbilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5QaWNrVXBzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluKVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4gdGx2UGlja1Vwc1BhaWQgKyB0bHZQaWNrVXBzRXh0cmEgKyBtb2RpaW5QaWNrVXBzUGFpZCArIG1vZGlpblBpY2tVcHNFeHRyYTtcbn1cblxuZnVuY3Rpb24gY291bnREcm9wT2Zmcyh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICBjb25zdCB0bHZEcm9wT2Zmc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCB0bHZEcm9wT2Zmc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHYpXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpbkRyb3BPZmZzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluKVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpbkRyb3BPZmZzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgcmV0dXJuIHRsdkRyb3BPZmZzUGFpZCArIHRsdkRyb3BPZmZzRXh0cmEgKyBtb2RpaW5Ecm9wT2Zmc1BhaWQgKyBtb2RpaW5Ecm9wT2Zmc0V4dHJhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlVGl0bGUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGUtZm9yLXByaW50Jz5cbiAgICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e1RyYW5zbGF0aW9ucy5CT09LSU5HU19QQUdFLlRJVExFfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaWx0ZXJTZWN0aW9uKGZpbHRlciwgZ2FtZUlkLCBvbkZpbHRlckNoYW5nZSwgb25HYW1lSWRDaGFuZ2UsIHZpc2libGVCb29raW5ncywgZ2FtZXMpIHtcblxuICAgIGZ1bmN0aW9uIG9uVGFiQ2xpY2sodGFiKSB7XG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlKHRhYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TZWxlY3RDaGFuZ2UoZSkge1xuICAgICAgICBvbkdhbWVJZENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcmluZyByb3cgZXhwYW5kZWQgY29sbGFwc2UgaGlkZS1mb3ItcHJpbnQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBzbWFsbC0xMiBsYXJnZS02Jz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdtZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7YWN0aXZlOiBmaWx0ZXIgPT09IFRBQlMuUElDS1VQfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25UYWJDbGljay5iaW5kKHRoaXMsIFRBQlMuUElDS1VQKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5CT09LSU5HU19QQUdFLlRBQlMuUElDS1VQfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe2NvdW50UGlja3Vwcyh2aXNpYmxlQm9va2luZ3MpfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe2FjdGl2ZTogZmlsdGVyID09PSBUQUJTLkRST1BPRkZ9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvblRhYkNsaWNrLmJpbmQodGhpcywgVEFCUy5EUk9QT0ZGKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5CT09LSU5HU19QQUdFLlRBQlMuRFJPUE9GRn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtjb3VudERyb3BPZmZzKHZpc2libGVCb29raW5ncyl9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTEyIGxhcmdlLTYnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtnYW1lSWR9IG9uQ2hhbmdlPXtvblNlbGVjdENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5tYXAoZ2FtZXMsIChnYW1lLCBnYW1lSWQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsnZ2FtZS0nICsgZ2FtZUlkfSB2YWx1ZT17Z2FtZUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLmRheX0ve2dhbWUubW9udGh9L3tnYW1lLnllYXJ9IC0ge0NvbnN0YW50cy5URUFNU1tnYW1lLnR5cGVJZF0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9va2luZ1RhYmxlRm9yUHJpbnQodXNlcnMsIHZpc2libGVCb29raW5ncywgdGx2Qm9va2luZ3MsIG1vZGlpbkJvb2tpbmdzLCBpc1BpY2tVcCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRpdGxlUm93KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT0ndGl0bGUtbGFiZWwnPlxuICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPSc2Jz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2lzUGlja1VwID8gJ9eU15zXldeaJyA6ICfXl9eW15XXqCd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKHtpc1BpY2tVcCA/IGNvdW50UGlja3Vwcyh2aXNpYmxlQm9va2luZ3MpIDogY291bnREcm9wT2Zmcyh2aXNpYmxlQm9va2luZ3MpfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVExWQm9va2luZ3NUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9J3RsdlBpY2tVcCc+XG4gICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI2XCIgY2xhc3NOYW1lPVwidGFibGUtc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPteq15wg15DXkdeZ15E8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVExWQm9va2luZ3NSb3dzKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXy5tYXAodGx2Qm9va2luZ3MsIChib29raW5nLCB1aWQpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXsndGx2LWJvb2tpbmctcm93LScgKyB1aWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2dldEJvb2tpbmdUaXRsZSh1c2Vyc1t1aWRdKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2dldEJvb2tpbmdQaG9uZSh1c2Vyc1t1aWRdKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2tpbmcucGFpZFNlYXRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Ym9va2luZy5leHRyYVNlYXRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57VHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kaWluQm9va2luZ3NUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9J21vZGlpblBpY2tVcCc+XG4gICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI2XCIgY2xhc3NOYW1lPSd0YWJsZS1zdWInPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7XnteV15PXmdei15nXnzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2RpaW5Cb29raW5nc1Jvd3MoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5Cb29raW5ncywgKGJvb2tpbmcsIHVpZCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9eydtb2RpaW4tYm9va2luZy1yb3ctJyArIHVpZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Qm9va2luZ1RpdGxlKHVzZXJzW3VpZF0pfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Qm9va2luZ1Bob25lKHVzZXJzW3VpZF0pfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Ym9va2luZy5wYWlkU2VhdHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntib29raW5nLmV4dHJhU2VhdHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntUcmFuc2xhdGlvbnMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57VHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl19PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgeyBfLnNpemUobW9kaWluQm9va2luZ3MpICE9PSAwIHx8IF8uc2l6ZSh0bHZCb29raW5ncykgIT09IDAgPyBjcmVhdGVUaXRsZVJvdygpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+16nXnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7XmNec16TXldefPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPtee16DXldeZ15nXnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7Xkdeq16nXnNeV1508L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+16rXl9eg16og16LXnNeZ15Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+16rXl9eg16og15nXqNeZ15PXlDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2Qm9va2luZ3MpID4gMCA/IGNyZWF0ZVRMVkJvb2tpbmdzVGl0bGUoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKHRsdkJvb2tpbmdzKSA+IDAgPyBjcmVhdGVUTFZCb29raW5nc1Jvd3MoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKG1vZGlpbkJvb2tpbmdzKSA+IDAgPyBjcmVhdGVNb2RpaW5Cb29raW5nc1RpdGxlKCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZShtb2RpaW5Cb29raW5ncykgPiAwID8gY3JlYXRlTW9kaWluQm9va2luZ3NSb3dzKCkgOiBudWxsIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGlja1Vwc0xpc3QodmlzaWJsZUJvb2tpbmdzLCBvbkJvb2tpbmdDbGljaywgdXNlcnMpIHtcbiAgICBjb25zdCB0bHZQaWNrVXAgPSB2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdjtcbiAgICBjb25zdCBtb2RpaW5QaWNrVXAgPSB2aXNpYmxlQm9va2luZ3MucGlja1VwLm1vZGlpbjtcblxuICAgIGZ1bmN0aW9uIG9uSXRlbUNsaWNrKHVpZCkge1xuICAgICAgICBvbkJvb2tpbmdDbGljayh1aWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHRsdlBpY2tVcHNJdGVtcyA9IF8ubWFwKHRsdlBpY2tVcCwgKGJvb2tpbmcsIHVpZCkgPT4gKFxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17J3BpY2t1cC10bHYtJyArIHVpZH1cbiAgICAgICAgICAgIHRpdGxlPXtnZXRCb29raW5nVGl0bGUodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBzdWJ0aXRsZXM9e2dldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgdXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBpbWFnZVNyYz17Z2V0Qm9va2luZ0ltYWdlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgb25DbGljaz17b25JdGVtQ2xpY2suYmluZCh0aGlzLCB1aWQpfVxuICAgICAgICAvPlxuICAgICkpO1xuXG4gICAgY29uc3QgbWlkaWluUGlja1Vwc0l0ZW1zID0gXy5tYXAobW9kaWluUGlja1VwLCAoYm9va2luZywgdWlkKSA9PiAoXG4gICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAga2V5PXsncGlja3VwLW1pZGlpbi0nICsgdWlkfVxuICAgICAgICAgICAgdGl0bGU9e2dldEJvb2tpbmdUaXRsZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIHN1YnRpdGxlcz17Z2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCB1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIGltYWdlU3JjPXtnZXRCb29raW5nSW1hZ2UodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkl0ZW1DbGljay5iaW5kKHRoaXMsIHVpZCl9XG4gICAgICAgIC8+XG4gICAgKSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUbHZQaWNrdXBzTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg2Pteq15wg15DXkdeZ15E8L2g2PlxuICAgICAgICAgICAgICAgIHsgdGx2UGlja1Vwc0l0ZW1zIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kaWluUGlja3Vwc0xpc3QoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNj7XnteV15PXmdei15nXnzwvaDY+XG4gICAgICAgICAgICAgICAgeyBtaWRpaW5QaWNrVXBzSXRlbXMgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BpY2stdXAtY29udGFpbmVyIHJvdyBoaWRlLWZvci1wcmludCcga2V5PSdwaWNrLXVwLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2UGlja1VwKSAhPT0gMCB8fCBfLnNpemUobW9kaWluUGlja1VwKSAhPT0gMCA/IDxoNT7XlNec15XXmjwvaDU+IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2UGlja1VwKSA+IDAgPyBjcmVhdGVUbHZQaWNrdXBzTGlzdCgpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUobW9kaWluUGlja1VwKSA+IDAgPyBjcmVhdGVNb2RpaW5QaWNrdXBzTGlzdCgpIDogbnVsbCB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BpY2tVcC10YWJsZSBzaG93LWZvci1wcmludCcga2V5PSdwaWNrVXAtdGFibGUnPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQm9va2luZ1RhYmxlRm9yUHJpbnQodXNlcnMsIHZpc2libGVCb29raW5ncywgdGx2UGlja1VwLCBtb2RpaW5QaWNrVXAsIHRydWUpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcm9wT2ZmTGlzdCh2aXNpYmxlQm9va2luZ3MsIG9uQm9va2luZ0NsaWNrLCB1c2Vycykge1xuICAgIGNvbnN0IHRsdkRyb3BPZmYgPSB2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHY7XG4gICAgY29uc3QgbW9kaWluRHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbjtcblxuICAgIGZ1bmN0aW9uIG9uSXRlbUNsaWNrKHVpZCkge1xuICAgICAgICBvbkJvb2tpbmdDbGljayh1aWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHRsdkRyb3BPZmZJdGVtcyA9IF8ubWFwKHRsdkRyb3BPZmYsIChib29raW5nLCB1aWQpID0+IChcbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICBrZXk9eydwaWNrdXAtdGx2LScgKyB1aWR9XG4gICAgICAgICAgICB0aXRsZT17Z2V0Qm9va2luZ1RpdGxlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgc3VidGl0bGVzPXtnZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgaW1hZ2VTcmM9e2dldEJvb2tpbmdJbWFnZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uSXRlbUNsaWNrLmJpbmQodGhpcywgdWlkKX1cbiAgICAgICAgLz5cbiAgICApKTtcblxuICAgIGNvbnN0IG1pZGlpbkRyb3BPZmZJdGVtcyA9IF8ubWFwKG1vZGlpbkRyb3BPZmYsIChib29raW5nLCB1aWQpID0+IChcbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICBrZXk9eydwaWNrdXAtbWlkaWluLScgKyB1aWR9XG4gICAgICAgICAgICB0aXRsZT17Z2V0Qm9va2luZ1RpdGxlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgc3VidGl0bGVzPXtnZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgaW1hZ2VTcmM9e2dldEJvb2tpbmdJbWFnZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uSXRlbUNsaWNrLmJpbmQodGhpcywgdWlkKX1cbiAgICAgICAgLz5cbiAgICApKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRsdkRyb3BPZmZMaXN0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDY+16rXnCDXkNeR15nXkTwvaDY+XG4gICAgICAgICAgICAgICAgeyB0bHZEcm9wT2ZmSXRlbXMgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2RpaW5Ecm9wT2ZmTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg2Ptee15XXk9eZ16LXmdefPC9oNj5cbiAgICAgICAgICAgICAgICB7IG1pZGlpbkRyb3BPZmZJdGVtcyB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcC1vZmYtY29udGFpbmVyIHJvdyBoaWRlLWZvci1wcmludCcga2V5PSdkcm9wLW9mZi1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIHsgXy5zaXplKHRsdkRyb3BPZmYpICE9PSAwIHx8IF8uc2l6ZShtb2RpaW5Ecm9wT2ZmKSAhPT0gMCA/IDxoNT7Xl9eW15XXqDwvaDU+IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2RHJvcE9mZikgPiAwID8gY3JlYXRlVGx2RHJvcE9mZkxpc3QoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKG1vZGlpbkRyb3BPZmYpID4gMCA/IGNyZWF0ZU1vZGlpbkRyb3BPZmZMaXN0KCkgOiBudWxsIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3BPZmYtdGFibGUgc2hvdy1mb3ItcHJpbnQnIGtleT0nZHJvcE9mZi10YWJsZSc+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVCb29raW5nVGFibGVGb3JQcmludCh1c2VycywgdmlzaWJsZUJvb2tpbmdzLCB0bHZEcm9wT2ZmLCBtb2RpaW5Ecm9wT2ZmLCBmYWxzZSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEJvb2tpbmdzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgb25GaWx0ZXJDaGFuZ2UgPSBmaWx0ZXIgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZUZpbHRlcihmaWx0ZXIpO1xuICAgIH07XG5cbiAgICBvbkdhbWVJZENoYW5nZSA9IGdhbWVJZCA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlR2FtZUlkKGdhbWVJZCk7XG4gICAgfTtcblxuICAgIG9uQm9va2luZ0NsaWNrID0gdWlkID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5lZGl0Qm9va2luZyh0aGlzLnByb3BzLnF1ZXJ5LmdhbWVJZCwgdWlkKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB2aXNpYmxlQm9va2luZ3MgPSBnZXRWaXNpYmxlQm9va2luZ3ModGhpcy5wcm9wcy5ib29raW5ncywgdGhpcy5wcm9wcy5xdWVyeS5nYW1lSWQpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J9a/c21hbGwtY2VudGVyZWQgZGFzaGJvYXJkLXBhZ2UgYm9va2luZ3MtcGFnZSc+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVQYWdlVGl0bGUoKSB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVGaWx0ZXJTZWN0aW9uKHRoaXMucHJvcHMucXVlcnkuZmlsdGVyLCB0aGlzLnByb3BzLnF1ZXJ5LmdhbWVJZCwgdGhpcy5vbkZpbHRlckNoYW5nZSwgdGhpcy5vbkdhbWVJZENoYW5nZSwgdmlzaWJsZUJvb2tpbmdzLCB0aGlzLnByb3BzLmdhbWVzKSB9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnF1ZXJ5LmZpbHRlciA9PT0gVEFCUy5QSUNLVVAgPyBjcmVhdGVQaWNrVXBzTGlzdCh2aXNpYmxlQm9va2luZ3MsIHRoaXMub25Cb29raW5nQ2xpY2ssIHRoaXMucHJvcHMudXNlcnMpIDogY3JlYXRlRHJvcE9mZkxpc3QodmlzaWJsZUJvb2tpbmdzLCB0aGlzLm9uQm9va2luZ0NsaWNrLCB0aGlzLnByb3BzLnVzZXJzKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJvb2tpbmdzUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgYm9va2luZ3M6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBnYW1lczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHVzZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcXVlcnk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBlZGl0Qm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1cmllZCxcbiAgICBjaGFuZ2VGaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdXJpZWQsXG4gICAgY2hhbmdlR2FtZUlkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVyaWVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQm9va2luZ3NQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ib29raW5nc1BhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ib29raW5nc1BhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2tpbmdzUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvYm9va2luZ3NQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvb2tpbmdzLXBhZ2UgaDUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiAjQ0ZEOERDO1xcbiAgY29sb3I6ICMzNzQ3NEY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLmJvb2tpbmdzLXBhZ2UgaDYge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5ib29raW5ncy1wYWdlIC50YWJsZS1zdWIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIyMjIyMjsgfVxcblxcbi5ib29raW5ncy1wYWdlIHRhYmxlIHRib2R5LCAuYm9va2luZ3MtcGFnZSB0YWJsZSB0Zm9vdCwgLmJvb2tpbmdzLXBhZ2UgdGFibGUgdGhlYWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvYm9va2luZ3NQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmV1ZHggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCBkaXN0cmlidXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9kaXN0cmlidXRpb25BY3Rpb25zJyk7XG5cbmNvbnN0IFBhZ2VUaXRsZSA9IHJlcXVpcmUoJy4vcGFnZVRpdGxlJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9kaXN0cmlidXRpb25QYWdlLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICAgICAgICBnYW1lczogc3RhdGUuZXZlbnRzLFxuICAgICAgICBib29raW5nczogc3RhdGUuYm9va2luZ3NcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZW5kVGVtcGxhdGVFbWFpbDogKHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMpID0+IGRpc3BhdGNoKGRpc3RyaWJ1dGlvbkFjdGlvbnMuc2VuZFRlbXBsYXRlRW1haWwocmVjaXBpZW50cywgdGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucykpLFxuICAgICAgICBzZW5kQ3VzdG9tRW1haWw6IChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSA9PiBkaXNwYXRjaChkaXN0cmlidXRpb25BY3Rpb25zLnNlbmRDdXN0b21FbWFpbChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSksXG4gICAgICAgIHNlbmRTTVM6IChyZWNpcGllbnRzLCBtZXNzYWdlKSA9PiBkaXNwYXRjaChkaXN0cmlidXRpb25BY3Rpb25zLnNlbmRTTVMocmVjaXBpZW50cywgbWVzc2FnZSkpLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShnYW1lcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RyaWJ1dGlvbk1ldGhvZDogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5FTUFJTCxcbiAgICAgICAgcmVjaXBpZW50c1R5cGU6IENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UU19UWVBFUy5NRU1CRVJTX09OTFksXG4gICAgICAgIGRpc3RyaWJ1dGlvblR5cGU6IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLlRFTVBMQVRFLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRFTVBMQVRFUy5FVkVOVF9PUEVOX0ZPUl9NRU1CRVJTLFxuICAgICAgICBnYW1lSWQ6IF8ubGFzdChfLmtleXMoZ2V0T3BlbkdhbWVzKGdhbWVzKSkpLFxuICAgICAgICBzdWJqZWN0OiAnJyxcbiAgICAgICAgY29udGVudDogJydcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRNZW1iZXJzVXNlcnNPbmx5KHVzZXJzKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KHVzZXJzLCB1c2VyID0+IHVzZXIuc2Vhc29uVGlja2V0cyAmJiB1c2VyLnNlYXNvblRpY2tldHMgPiAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9va2VkVXNlcnNPbmx5KHVzZXJzLCBib29raW5ncywgZ2FtZUlkKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KHVzZXJzLCAodXNlciwgdWlkKSA9PiBfLmhhcyhib29raW5nc1t1aWRdLCBnYW1lSWQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBnYW1lSWQpIHtcbiAgICBsZXQgcmVjaXBpZW50c1VzZXJzID0gXy5waWNrQnkodXNlcnMsIHVzZXIgPT4gdXNlci5zdWJzY3JpYmVNYWlsKTtcblxuICAgIHN3aXRjaCAocmVjaXBpZW50c1R5cGUpIHtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuTUVNQkVSU19PTkxZOlxuICAgICAgICAgICAgcmVjaXBpZW50c1VzZXJzID0gZ2V0TWVtYmVyc1VzZXJzT25seShyZWNpcGllbnRzVXNlcnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTX1RZUEVTLkJPT0tFRF9UT19FVkVOVDpcbiAgICAgICAgICAgIHJlY2lwaWVudHNVc2VycyA9IGdldEJvb2tlZFVzZXJzT25seShyZWNpcGllbnRzVXNlcnMsIGJvb2tpbmdzLCBnYW1lSWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY2lwaWVudHNVc2Vycztcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcnNFbWFpbHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZ2FtZUlkKSB7XG4gICAgY29uc3QgcmVjaXBpZW50cyA9IGdldFJlY2lwaWVudHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZ2FtZUlkKTtcbiAgICByZXR1cm4gXy5tYXAocmVjaXBpZW50cywgdXNlciA9PiB1c2VyLmVtYWlsKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRTdWJzdGl0dXRpb25zKGdhbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAnLURFUEFSVFVSRS0nOiBgJHtnYW1lLmhvdXJ9OiR7Z2FtZS5taW51dGV9YCxcbiAgICAgICAgJy1EQVRFLSc6IGAke2dhbWUuZGF5fS8ke2dhbWUubW9udGh9LyR7Z2FtZS55ZWFyfWAsXG4gICAgICAgICctTkFNRS0nOiBDb25zdGFudHMuVEVBTVNbZ2FtZS50eXBlSWRdLmxhYmVsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ3VzdG9tTWFpbENvbnRlbnRGb3JTZW5kKGNvbnRlbnQpIHtcbiAgICByZXR1cm4gJzxwIGRpcj1cXCdydGxcXCc+JyArIGNvbnRlbnQucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICc8YnIvPicpICsgJzwvcD4nO1xufVxuXG5mdW5jdGlvbiBnZXRVc2Vyc1Bob25lTnVtYmVycyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBnYW1lSWQpIHtcbiAgICBjb25zdCByZWNpcGllbnRzID0gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBnYW1lSWQpO1xuICAgIHJldHVybiBfLm1hcChyZWNpcGllbnRzLCB1c2VyID0+IHVzZXIucGhvbmVQcmVmaXggKyB1c2VyLnBob25lTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzdHJpYnV0aW9uTWV0aG9kSW5wdXQoZGlzdHJpYnV0aW9uTWV0aG9kLCBvbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkIG1vcmUtc3BhY2UnPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX01FVEhPRC5USVRMRX1cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtkaXN0cmlidXRpb25NZXRob2R9IG9uQ2hhbmdlPXtvbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuRU1BSUx9PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX01FVEhPRC5FTUFJTH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5TTVN9PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX01FVEhPRC5TTVN9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWNpcGllbnRzVHlwZUlucHV0KHJlY2lwaWVudHNUeXBlLCBvblJlY2lwaWVudHNUeXBlQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuUkVDSVBJRU5UU19UWVBFUy5USVRMRX1cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtyZWNpcGllbnRzVHlwZX0gb25DaGFuZ2U9e29uUmVjaXBpZW50c1R5cGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuQUxMfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuUkVDSVBJRU5UU19UWVBFUy5BTEx9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuTUVNQkVSU19PTkxZfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuUkVDSVBJRU5UU19UWVBFUy5NRU1CRVJTX09OTFl9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuQk9PS0VEX1RPX0VWRU5UfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuUkVDSVBJRU5UU19UWVBFUy5CT09LRURfVE9fRVZFTlR9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzdHJpYnV0aW9uVHlwZUlucHV0KGRpc3RyaWJ1dGlvblR5cGUsIG9uRGlzdHJpYnV0aW9uVHlwZUNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyBrZXk9XCJkaXN0cmlidXRpb24tZGlzdHJpYnV0aW9uVHlwZS1pbnB1dFwiPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX1RZUEVTLlRJVExFfVxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2Rpc3RyaWJ1dGlvblR5cGV9IG9uQ2hhbmdlPXtvbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9UWVBFUy5URU1QTEFURX0+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5ESVNUUklCVVRJT05fVFlQRVMuVEVNUExBVEV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLkNVU1RPTX0+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5ESVNUUklCVVRJT05fVFlQRVMuQ1VTVE9NfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVTZWxlY3Rpb24odGVtcGxhdGVJZCwgb25UZW1wbGF0ZUlkQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnIGtleT0nZGlzdHJpYnV0aW9uLXRlbXBsYXRlLXNlbGVjdGlvbic+XG4gICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5URU1QTEFURVMuVElUTEV9XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGVtcGxhdGVJZH0gb25DaGFuZ2U9e29uVGVtcGxhdGVJZENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uVEVNUExBVEVTLkVWRU5UX09QRU5fRk9SX01FTUJFUlN9PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuVEVNUExBVEVTLkVWRU5UX09QRU5fRk9SX01FTUJFUlN9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uVEVNUExBVEVTLkVWRU5UX09QRU5fRk9SX0FMTH0+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5URU1QTEFURVMuRVZFTlRfT1BFTl9GT1JfQUxMfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlRFTVBMQVRFUy5DSEFOR0VfRVZFTlRfREVUQUlMU30+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5URU1QTEFURVMuQ0hBTkdFX0VWRU5UX0RFVEFJTFN9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lc1NlbGVjdGlvbihnYW1lcywgZ2FtZUlkLCBvbkdhbWVDaGFuZ2UpIHtcbiAgICBjb25zdCBvcHRpb25zID0gXy5tYXAoZ2FtZXMsIChnYW1lLCBnYW1lSWQpID0+IDxvcHRpb24ga2V5PXsnZ2FtZS0nICsgZ2FtZUlkfSB2YWx1ZT17Z2FtZUlkfT57Q29uc3RhbnRzLlRFQU1TW2dhbWUudHlwZUlkXS5sYWJlbH08L29wdGlvbj4pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnIGtleT1cImRpc3RyaWJ1dGlvbi1nYW1lLXNlbGVjdGlvblwiPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuR0FNRVMuVElUTEV9XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Z2FtZUlkfSBvbkNoYW5nZT17b25HYW1lQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgeyBvcHRpb25zIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldE9wZW5HYW1lcyhnYW1lcykge1xuICAgIHJldHVybiBfLnBpY2tCeShnYW1lcywgZ2FtZSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lLnN0YXR1cyA9PT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX01FTUJFUlMgfHwgZ2FtZS5zdGF0dXMgPT09IENvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9BTEw7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbVRpdGxlKHN1YmplY3QsIG9uU3ViamVjdENoYW5nZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtY2VudGVyZWQgbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucycga2V5PSdkaXN0cmlidXRpb24tY3VzdG9tVGl0bGUnPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuQ1VTVE9NLlRJVExFLlRJVExFfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3N1YmplY3R9IG9uQ2hhbmdlPXtvblN1YmplY3RDaGFuZ2VkfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUNvbnRlbnQoY29udGVudCwgb25Db250ZW50Q2hhbmdlZCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC1jZW50ZXJlZCBtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zJyBrZXk9J2Rpc3RyaWJ1dGlvbi1jdXN0b21Db250ZW50Jz5cbiAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkNVU1RPTS5DT05URU5ULlRJVExFfTwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjEwXCIgdmFsdWU9e2NvbnRlbnR9IG9uQ2hhbmdlPXtvbkNvbnRlbnRDaGFuZ2VkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24ob25TdWJtaXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWdyb3VwIHN0YWNrZWQgc21hbGwtY2VudGVyZWQgbGFyZ2UtNiBzbWFsbC04IG1vcmUtc3BhY2UnPlxuICAgICAgICAgICAgPGEgb25DbGljaz17b25TdWJtaXR9IGNsYXNzTmFtZT0nYnV0dG9uIHN1Y2Nlc3MnPlxuICAgICAgICAgICAgICAgIDxzcGFuPtep15zXlzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXBhcGVyLXBsYW5lJyBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBzaG91bGRTaG93RGlzdHJpYnV0aW9uVHlwZUlucHV0KGRpc3RyaWJ1dGlvbk1ldGhvZCkge1xuICAgIHJldHVybiBkaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuRU1BSUw7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFNob3dUZW1wbGF0ZVNlbGVjdGlvbihkaXN0cmlidXRpb25NZXRob2QsIGRpc3RyaWJ1dGlvblR5cGUpIHtcbiAgICByZXR1cm4gc2hvdWxkU2hvd0Rpc3RyaWJ1dGlvblR5cGVJbnB1dChkaXN0cmlidXRpb25NZXRob2QpICYmIGRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLlRFTVBMQVRFO1xufVxuXG5mdW5jdGlvbiBzaG91bGRDcmVhdGVDdXN0b21UaXRsZShkaXN0cmlidXRpb25NZXRob2QsIGRpc3RyaWJ1dGlvblR5cGUpIHtcbiAgICByZXR1cm4gZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLkVNQUlMICYmXG4gICAgICAgIGRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLkNVU1RPTTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkU2hvd0N1c3RvbUNvbnRlbnQoZGlzdHJpYnV0aW9uTWV0aG9kLCBkaXN0cmlidXRpb25UeXBlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIGRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5FTUFJTCAmJlxuICAgICAgICAgICAgZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fVFlQRVMuQ1VTVE9NXG4gICAgICAgICkgfHwgZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLlNNUztcbn1cblxuY2xhc3MgRGlzdHJpYnV0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUodGhpcy5wcm9wcy5nYW1lcyk7XG4gICAgfVxuXG4gICAgb25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXN0cmlidXRpb25NZXRob2Q6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvblJlY2lwaWVudHNUeXBlQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVjaXBpZW50c1R5cGU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXN0cmlidXRpb25UeXBlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25UZW1wbGF0ZUlkQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGVtcGxhdGVJZDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uR2FtZUlkQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZ2FtZUlkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25TdWJqZWN0Q2hhbmdlZCA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1YmplY3Q6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvbkNvbnRlbnRDaGFuZ2VkID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29udGVudDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuRU1BSUwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRVc2Vyc0VtYWlscyh0aGlzLnByb3BzLnVzZXJzLCB0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLCB0aGlzLnByb3BzLmJvb2tpbmdzLCB0aGlzLnN0YXRlLmdhbWVJZCk7XG4gICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHJlY2lwaWVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fVFlQRVMuVEVNUExBVEUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gZ2V0RXZlbnRTdWJzdGl0dXRpb25zKHRoaXMucHJvcHMuZ2FtZXNbdGhpcy5zdGF0ZS5nYW1lSWRdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRUZW1wbGF0ZUVtYWlsKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUudGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZEN1c3RvbUVtYWlsKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUuc3ViamVjdCwgcHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCh0aGlzLnN0YXRlLmNvbnRlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRVc2Vyc1Bob25lTnVtYmVycyh0aGlzLnByb3BzLnVzZXJzLCB0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLCB0aGlzLnByb3BzLmJvb2tpbmdzLCB0aGlzLnN0YXRlLmdhbWVJZCk7XG4gICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHJlY2lwaWVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kU01TKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUuY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKGdldEluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLmdhbWVzKSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXNoYm9hcmQtcGFnZSBkaXN0cmlidXRpb24tcGFnZSc+XG4gICAgICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlRJVExFfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC0xMSBzbWFsbC1jZW50ZXJlZCc+XG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlRGlzdHJpYnV0aW9uTWV0aG9kSW5wdXQodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsIHRoaXMub25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVSZWNpcGllbnRzVHlwZUlucHV0KHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsIHRoaXMub25SZWNpcGllbnRzVHlwZUNoYW5nZSkgfVxuICAgICAgICAgICAgICAgICAgICB7IHNob3VsZFNob3dEaXN0cmlidXRpb25UeXBlSW5wdXQodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QpID8gY3JlYXRlRGlzdHJpYnV0aW9uVHlwZUlucHV0KHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSwgdGhpcy5vbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2UpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2hvdWxkU2hvd1RlbXBsYXRlU2VsZWN0aW9uKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kLCB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUpID8gY3JlYXRlVGVtcGxhdGVTZWxlY3Rpb24odGhpcy5zdGF0ZS50ZW1wbGF0ZUlkLCB0aGlzLm9uVGVtcGxhdGVJZENoYW5nZSkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgeyBzaG91bGRTaG93VGVtcGxhdGVTZWxlY3Rpb24odGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSkgPyBjcmVhdGVHYW1lc1NlbGVjdGlvbihnZXRPcGVuR2FtZXModGhpcy5wcm9wcy5nYW1lcyksIHRoaXMuc3RhdGUuZ2FtZUlkLCB0aGlzLm9uR2FtZUlkQ2hhbmdlKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICB7IHNob3VsZENyZWF0ZUN1c3RvbVRpdGxlKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kLCB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUpID8gY3JlYXRlQ3VzdG9tVGl0bGUodGhpcy5zdGF0ZS5zdWJqZWN0LCB0aGlzLm9uU3ViamVjdENoYW5nZWQpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2hvdWxkU2hvd0N1c3RvbUNvbnRlbnQodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSkgPyBjcmVhdGVDdXN0b21Db250ZW50KHRoaXMuc3RhdGUuY29udGVudCwgdGhpcy5vbkNvbnRlbnRDaGFuZ2VkKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZVN1Ym1pdEJ1dHRvbih0aGlzLm9uU3VibWl0KSB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRpc3RyaWJ1dGlvblBhZ2UucHJvcFR5cGVzID0ge1xuICAgIHVzZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGdhbWVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGJvb2tpbmdzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmV1ZHguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGlzdHJpYnV0aW9uUGFnZSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UuanN4IiwiaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBQQVRIX01BUCA9IHtcbiAgRU1BSUxTOiB7XG4gICAgVEVNUExBVEVTOiAncGVuZGluZ0VtYWlscy90ZW1wbGF0ZXMnLFxuICAgIENVU1RPTTogJ3BlbmRpbmdFbWFpbHMvY3VzdG9tJ1xuICB9LFxuICBTTVM6ICdwZW5kaW5nU01TJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kVGVtcGxhdGVFbWFpbCA9IChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5FTUFJTFMuVEVNUExBVEVTfWAsICh7IHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZEN1c3RvbUVtYWlsID0gKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKGAke1BBVEhfTUFQLkVNQUlMUy5DVVNUT019YCwgKHsgcmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCB9KSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kU01TID0gKHRvLCBtZXNzYWdlKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5TTVN9YCwgKHsgdG8sIG1lc3NhZ2UgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Rpc3RyaWJ1dGlvbkFjdGlvbnMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9kaXN0cmlidXRpb25QYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpc3RyaWJ1dGlvbi1wYWdlIC5idXR0b24gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IFVzZXJGb3JtID0gcmVxdWlyZSgnLi91c2VyRm9ybS5qc3gnKTtcblxuY29uc3Qgcm91dGluZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgY29uc3QgdWlkVG9FZGl0ID0gc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcy51aWQgfHwgc3RhdGUuYXV0aERhdGEudWlkO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVpZDogdWlkVG9FZGl0LFxuICAgICAgICBnb0hvbWVBZnRlckVkaXRpbmc6IHN0YXRlLnJvdXRpbmcuaGlzdG9yeS5sZW5ndGggPT09IDFcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYXZpZ2F0ZUhvbWU6ICgpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLnJlc2V0KENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkhPTUUpKSxcbiAgICAgICAgbmF2aWdhdGVCYWNrOiAoKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZUJhY2soKSlcbiAgICB9O1xufVxuXG5jbGFzcyBFZGl0b3JVc2VySW5mb1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIG9uRm9ybUNsb3NlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5nb0hvbWVBZnRlckVkaXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVIb21lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlQmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxVc2VyRm9ybSB1aWQ9e3RoaXMucHJvcHMudWlkfSBvbkNsb3NlPXt0aGlzLm9uRm9ybUNsb3NlfS8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkVkaXRvclVzZXJJbmZvUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmF2aWdhdGVCYWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlSG9tZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBnb0hvbWVBZnRlckVkaXRpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRWRpdG9yVXNlckluZm9QYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lZGl0VXNlckluZm9QYWdlLmpzeCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXg9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IHVzZXJBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucycpO1xuXG5jb25zdCBGb3JtRnJhbWUgPSByZXF1aXJlKCcuL2Zvcm1GcmFtZScpO1xuXG5jb25zdCBlbXB0eVVzZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnJyxcbiAgICBsYXN0TmFtZTogJycsXG4gICAgcGhvbmVQcmVmaXg6ICcwNTAnLFxuICAgIHBob25lTnVtYmVyOiAnJyxcbiAgICBzdGF0aW9uOiAndGx2JyxcbiAgICBzdWJzY3JpYmVTTVM6IHRydWUsXG4gICAgc3Vic2NyaWJlTWFpbDogdHJ1ZSxcbiAgICBzZWFzb25UaWNrZXRzOiAwXG59O1xuXG5mdW5jdGlvbiBnZXRFbXB0eVVzZXJJbmZvKGVtYWlsKSB7XG4gIHJldHVybiBfLmFzc2lnbihlbXB0eVVzZXIsIHsgZW1haWwgfSk7XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICBjb25zdCB1c2VyID0gc3RhdGUudXNlcnNbb3duUHJvcHMudWlkXTtcbiAgICBjb25zdCBhdXRoRGF0YSA9IHN0YXRlLmF1dGhEYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlckluZm86IHVzZXIgfHwgZ2V0RW1wdHlVc2VySW5mbyhhdXRoRGF0YS5lbWFpbCksXG4gICAgICAgIGlzQWRtaW5Nb2RlOiBhdXRoRGF0YS5pc0FkbWluLFxuICAgICAgICBhbGxvd1VzZXJSZW1vdmU6IGF1dGhEYXRhLmlzQWRtaW4gJiYgYXV0aERhdGEudWlkICE9PSBvd25Qcm9wcy51aWRcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1c2VyQWN0aW9ucy51cGRhdGVVc2VyKG93blByb3BzLnVpZCwgdXNlcikpLFxuICAgICAgICByZW1vdmVVc2VyOiAoKSA9PiBkaXNwYXRjaCh1c2VyQWN0aW9ucy5yZW1vdmVVc2VyKG93blByb3BzLnVpZCkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRtaW5TZWN0aW9uKHNlYXNvblRpY2tldHMsIG9uTnVtYmVyQ2hhbmdlKSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT1cInNlYXNvblRpY2tldHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zXCI+XG4gICAgICAgICAgPGxhYmVsPteb157XldeqINee16DXldeZ15nXnVxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic2Vhc29uVGlja2V0c1wiIHZhbHVlPXtzZWFzb25UaWNrZXRzfSBvbkNoYW5nZT17b25OdW1iZXJDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHsgXy50aW1lcyhDb25zdGFudHMuVVNFUi5NQVhfU0VBU09OX1RJQ0tFVFMsIGkgPT4gPG9wdGlvbiBrZXk9eydhbW91bnQtJyArIGl9IHZhbHVlPXtpfT57aX08L29wdGlvbj4pIH1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJOYW1lSW5wdXRzKGZpcnN0TmFtZSwgbGFzdE5hbWUsIG9uVGV4dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTYgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuRklSU1RfTkFNRSB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17Zmlyc3ROYW1lfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSBtYXhMZW5ndGg9XCIyMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS02IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLkxBU1RfTkFNRSB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0TmFtZVwiIHZhbHVlPXtsYXN0TmFtZX0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gbWF4TGVuZ3RoPVwiMjBcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1haWxJbnB1dChlbWFpbCwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9XCJ1c2VyLWluZm8tZW1haWwtaW5wdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtMTIgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuRU1BSUwgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvbmVOdW1iZXJJbnB1dHMocGhvbmVQcmVmaXgsIHBob25lTnVtYmVyLCBvblRleHRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC04IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLlBIT05FX05VTUJFUiB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cInBob25lTnVtYmVyXCIgdmFsdWU9e3Bob25lTnVtYmVyfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSBtYXhMZW5ndGg9XCI3XCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTQgY29sdW1ucyBlbmRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLlBIT05FX1BSRUZJWCB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInBob25lUHJlZml4XCIgdmFsdWU9e3Bob25lUHJlZml4fSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLlVTRVIuUEhPTkVfUFJFRklYRVMsIHByZWZpeCA9PiA8b3B0aW9uIGtleT17J3Bob25lLXByZWZpeC0nICsgcHJlZml4fSB2YWx1ZT17cHJlZml4fT57cHJlZml4fTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGlja3VwU3RhdGlvblJvdyhzdGF0aW9uLCByZXF1ZXN0Rm9yTWVtYmVyc2hpcCwgb25UZXh0Q2hhbmdlLCBvbkJvb2xlYW5DaGFuZ2UpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTggc21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuRkFWT1JJVEVfUElDS1VQX1NUQVRJT04gfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzdGF0aW9uXCIgdmFsdWU9e3N0YXRpb259IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuU1RBVElPTlMsIHN0YXRpb24gPT4gPG9wdGlvbiBrZXk9eydzdGF0aW9uLScgKyBzdGF0aW9ufSB2YWx1ZT17c3RhdGlvbn0+eyBUcmFuc2xhdGlvbnMuU1RBVElPTlNbc3RhdGlvbl0gfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0Rm9yTWVtYmVyc2hpcElucHV0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNCBzbWFsbC0xMiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5SRVFVRVNUX0ZPUl9NRU1CRVJTSElQIH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmVxdWVzdEZvck1lbWJlcnNoaXBcIiB2YWx1ZT17cmVxdWVzdEZvck1lbWJlcnNoaXB9IG9uQ2hhbmdlPXtvbkJvb2xlYW5DaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dW5kZWZpbmVkfSBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PteR15fXqDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dHJ1ZX0+15vXnzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17ZmFsc2V9Ptec15A8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7IGNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCgpIH1cbiAgICAgICAgICAgIHsgY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCgpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzKHN1YnNjcmliZU1haWwsIHN1YnNjcmliZVNNUywgb25Cb29sZWFuQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMyBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLkRJU1RSSUJVVElPTi5FTUFJTCB9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwic3dpdGNoLWlucHV0XCIgbmFtZT1cInN1YnNjcmliZU1haWxcIiBpZD1cInN1YnNjcmliZU1haWxcIiBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfSBjaGVja2VkPXtzdWJzY3JpYmVNYWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoLXBhZGRsZVwiIGh0bWxGb3I9XCJzdWJzY3JpYmVNYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLlRPR0dMRS5ZRVMgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1pbmFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5UT0dHTEUuTk8gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0zIGNvbHVtbiBlbmRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLkRJU1RSSUJVVElPTi5TTVMgfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInN3aXRjaC1pbnB1dFwiIG5hbWU9XCJzdWJzY3JpYmVTTVNcIiBpZD1cInN1YnNjcmliZVNNU1wiIG9uQ2hhbmdlPXtvbkJvb2xlYW5DaGFuZ2V9IGNoZWNrZWQ9e3N1YnNjcmliZVNNU30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1wYWRkbGVcIiBodG1sRm9yPVwic3Vic2NyaWJlU01TXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLlRPR0dMRS5ZRVMgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1pbmFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5UT0dHTEUuTk8gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IF8uY2xvbmUodGhpcy5wcm9wcy51c2VySW5mbyk7XG4gIH1cblxuICBpc0Zvcm1WYWxpZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhc0FsbFJlcXVpcmVkSW5mbyA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZEluZm8gPSBfLnBpY2sodGhpcy5zdGF0ZSwgWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAncGhvbmVQcmVmaXgnLCAncGhvbmVOdW1iZXInXSk7XG4gICAgICAgICAgcmV0dXJuICFfLnNvbWUocmVxdWlyZWRJbmZvLCBfLmlzRW1wdHkpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFzVmFsaWRQaG9uZU51bWJlciA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5waG9uZU51bWJlci5sZW5ndGggPT09IDc7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYXNSZXF1ZXN0Rm9yTWVtYmVyc2hpcFByb3BlcnR5ID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBfLmhhcyh0aGlzLnN0YXRlLCAncmVxdWVzdEZvck1lbWJlcnNoaXAnKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBoYXNBbGxSZXF1aXJlZEluZm8oKSAmJiBoYXNWYWxpZFBob25lTnVtYmVyKCkgJiYgaGFzUmVxdWVzdEZvck1lbWJlcnNoaXBQcm9wZXJ0eSgpO1xuICB9O1xuXG4gIG9uS2V5UHJlc3MgPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgaXNGb3JtVmFsaWQodGhpcy5zdGF0ZSkpIHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2UgPSAodHlwZSwgZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodGhpcy5zdGF0ZSk7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbG9zZSkpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgfTtcblxuICBvblJlbW92ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMucmVtb3ZlVXNlcigpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xvc2UpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qgb25UZXh0Q2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsICd0ZXh0Jyk7XG4gICAgICBjb25zdCBvbk51bWJlckNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzLCAnbnVtYmVyJyk7XG4gICAgICBjb25zdCBvbkJvb2xlYW5DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgJ2Jvb2xlYW4nKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1GcmFtZSB0aXRsZT17VHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5USVRMRX1cbiAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17dGhpcy5wcm9wcy5hbGxvd1VzZXJSZW1vdmUgPyB0aGlzLm9uUmVtb3ZlIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLnByb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmlzRm9ybVZhbGlkKCl9PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1jZW50ZXJlZCB1c2VyLWNvbnRhaW5lclwiIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzc30+XG5cbiAgICAgICAgICAgICAgeyBjcmVhdGVVc2VyTmFtZUlucHV0cyh0aGlzLnN0YXRlLmZpcnN0TmFtZSwgdGhpcy5zdGF0ZS5sYXN0TmFtZSwgb25UZXh0Q2hhbmdlKSB9XG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy51c2VySW5mby5lbWFpbCA/IG51bGwgOiBjcmVhdGVFbWFpbElucHV0KHRoaXMuc3RhdGUuZW1haWwsIG9uVGV4dENoYW5nZSkgfVxuICAgICAgICAgICAgICB7IGNyZWF0ZVBob25lTnVtYmVySW5wdXRzKHRoaXMuc3RhdGUucGhvbmVQcmVmaXgsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIG9uVGV4dENoYW5nZSwgb25OdW1iZXJDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgeyBjcmVhdGVQaWNrdXBTdGF0aW9uUm93KHRoaXMuc3RhdGUuc3RhdGlvbiwgdGhpcy5zdGF0ZS5yZXF1ZXN0Rm9yTWVtYmVyc2hpcCwgb25UZXh0Q2hhbmdlLCBvbkJvb2xlYW5DaGFuZ2UpIH1cblxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuaXNBZG1pbk1vZGUgPyBjcmVhdGVBZG1pblNlY3Rpb24odGhpcy5zdGF0ZS5zZWFzb25UaWNrZXRzLCBvbk51bWJlckNoYW5nZSkgOiBudWxsIH1cblxuICAgICAgICAgICAgICB7IGNyZWF0ZURpc3RyaWJ1dGlvbklucHV0cyh0aGlzLnN0YXRlLnN1YnNjcmliZU1haWwsIHRoaXMuc3RhdGUuc3Vic2NyaWJlU01TLCBvbkJvb2xlYW5DaGFuZ2UpIH1cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvRm9ybUZyYW1lPlxuICAgICk7XG4gIH1cbn1cblxuVXNlckZvcm0uUHJvcFR5cGVzID0ge1xuICAgIHVpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZVVzZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVtb3ZlVXNlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpc0FkbWluTW9kZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgYWxsb3dVc2VyUmVtb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB1c2VySW5mbzogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBvbkNsb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJGb3JtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91c2VyRm9ybS5qc3giLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCBQYWdlVGl0bGUgPSByZXF1aXJlKCcuL3BhZ2VUaXRsZScpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvZm9ybUZyYW1lLnNjc3MnKTtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uc0J1dHRvbnMoZGlzYWJsZWQsIG9uU3VibWl0LCBvblJlbW92ZSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEga2V5PVwicmVtb3ZlLWJ0blwiIG9uQ2xpY2s9e29uUmVtb3ZlfSBjbGFzc05hbWU9XCJidXR0b24gYWxlcnQgbW9yZS1zcGFjZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnsgVHJhbnNsYXRpb25zLkZPUk1fRlJBTUUuUkVNT1ZFIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbnMgYnV0dG9uLWdyb3VwIHN0YWNrZWQgc21hbGwtY2VudGVyZWQgbGFyZ2UtNiBzbWFsbC04IFwiPlxuICAgICAgICAgICAgPGEgZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNsaWNrPXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3MgbW9yZS1zcGFjZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnsgVHJhbnNsYXRpb25zLkZPUk1fRlJBTUUuU1VCTUlUIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgeyBfLmlzRnVuY3Rpb24ob25SZW1vdmUpID8gY3JlYXRlUmVtb3ZlQnV0dG9uKCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgRm9ybUZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZnJhbWVcIj5cbiAgICAgICAgICAgICAgICA8UGFnZVRpdGxlIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyBjcmVhdGVBY3Rpb25zQnV0dG9ucyh0aGlzLnByb3BzLmRpc2FibGVkLCB0aGlzLnByb3BzLm9uU3VibWl0LCB0aGlzLnByb3BzLm9uUmVtb3ZlKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xufVxuXG5Gb3JtRnJhbWUucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9uU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtRnJhbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybUZyYW1lLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9mb3JtRnJhbWUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWZyYW1lIC5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cXG4uZm9ybS1mcmFtZSAuYWN0aW9uLWJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgLmZvcm0tZnJhbWUgLmFjdGlvbi1idXR0b25zIC5idXR0b24gaSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvZm9ybUZyYW1lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyAgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3Qgcm91dGluZ0FjdGlvbnMgID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuY29uc3QgYm9va2luZ0FjdGlvbnMgID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucycpO1xuXG5jb25zdCBGb3JtRnJhbWUgPSByZXF1aXJlKCcuL2Zvcm1GcmFtZScpO1xuXG5jb25zdCBlbXB0eUJvb2tpbmcgPSB7XG4gICAgcGFpZFNlYXRzOiAwLFxuICAgIGV4dHJhU2VhdHM6IDAsXG4gICAgcGlja1VwOiAndGx2JyxcbiAgICBkcm9wT2ZmOiAndGx2J1xufTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgY29uc3Qgcm91dGluZ1BhcmFtcyA9IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXM7XG4gICAgY29uc3QgdWlkID0gcm91dGluZ1BhcmFtcy51aWQ7XG4gICAgY29uc3QgZ2FtZUlkID0gcm91dGluZ1BhcmFtcy5nYW1lSWQ7XG4gICAgY29uc3QgYm9va2luZyA9IF8uZ2V0KHN0YXRlLCBbJ2Jvb2tpbmdzJywgdWlkLCBnYW1lSWRdLCB7fSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpc0FkbWluOiBzdGF0ZS5hdXRoRGF0YS5pc0FkbWluLFxuICAgICAgICB1aWQsXG4gICAgICAgIGdhbWVJZCxcbiAgICAgICAgYm9va2luZyxcbiAgICAgICAgdXNlckluZm86IHN0YXRlLnVzZXJzW3VpZF1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVCb29raW5nOiAodWlkLCBnYW1lSWQsIGJvb2tpbmcpID0+IGRpc3BhdGNoKGJvb2tpbmdBY3Rpb25zLnVwZGF0ZUJvb2tpbmcodWlkLCBnYW1lSWQsIGJvb2tpbmcpKSxcbiAgICAgICAgY2FuY2VsQm9va2luZzogKHVpZCwgZ2FtZUlkKSA9PiBkaXNwYXRjaChib29raW5nQWN0aW9ucy5jYW5jZWxCb29raW5nKHVpZCwgZ2FtZUlkKSksXG4gICAgICAgIG5hdmlnYXRlQmFjazogKCkgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVCYWNrKCkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFzc2VuZ2Vyc1NlY3Rpb24oc2Vhc29uVGlja2V0cywgcGFpZFNlYXRzLCBleHRyYVNlYXRzLCBvblBhaWRTZWF0Q2hhbmdlLCBvbkV4dHJhU2VhdENoYW5nZSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGFpZFNlYXRzSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gXy50aW1lcyhzZWFzb25UaWNrZXRzICsgMSwgaSA9PiA8b3B0aW9uIGtleT17J3BhaWQtc2VhdC0nICsgaX0gdmFsdWU9e2l9PntpfTwvb3B0aW9uPik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC02IGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuUEFJRF9TRUFUU31cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17cGFpZFNlYXRzfSBvbkNoYW5nZT17b25QYWlkU2VhdENoYW5nZX0gbmFtZT0ncGFpZFNlYXRzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbXMgfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRXh0cmFTZWF0c0lucHV0KCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IF8udGltZXMoOCwgaSA9PiA8b3B0aW9uIGtleT17J2V4dHJhLXNlYXQtJyArIGl9IHZhbHVlPXtpfT57aX08L29wdGlvbj4pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNiBjb2x1bW5zIGVuZCc+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0JPT0tJTkdfUEFHRS5FWFRSQV9TRUFUU31cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZXh0cmFTZWF0c30gb25DaGFuZ2U9e29uRXh0cmFTZWF0Q2hhbmdlfSBuYW1lPSdleHRyYVNlYXRzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbXMgfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdycga2V5PXsnYm9va2luZy1mb3JtLXBhc3NlbmdlcnMtc2VjdGlvbid9PlxuICAgICAgICAgICAgeyBzZWFzb25UaWNrZXRzID8gY3JlYXRlUGFpZFNlYXRzSW5wdXQoKSA6IG51bGwgfVxuICAgICAgICAgICAgeyBjcmVhdGVFeHRyYVNlYXRzSW5wdXQoKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY2t1cFNlY3Rpb24ocGlja1VwRW5hYmxlZCwgcGlja1VwU3RhdGlvbiwgdG9nZ2xlUGlja1VwLCBvblBpY2t1cFN0YXRpb25DaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC0zIGxhcmdlLTIgY29sdW1ucyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3BpY2tVcFRvZ2dsZSc+e1RyYW5zbGF0aW9ucy5VUERBVEVfQk9PS0lOR19QQUdFLlBJQ0tVUF9UT0dHTEV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3dpdGNoJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjbGFzc05hbWU9J3N3aXRjaC1pbnB1dCcgaWQ9J3BpY2tVcFRvZ2dsZScgY2hlY2tlZD17cGlja1VwRW5hYmxlZH0gb25DaGFuZ2U9e3RvZ2dsZVBpY2tVcH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nc3dpdGNoLXBhZGRsZScgaHRtbEZvcj0ncGlja1VwVG9nZ2xlJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtOSBsYXJnZS0xMCBjb2x1bW5zIGVuZCBtb3JlLXNwYWNlJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtwaWNrVXBTdGF0aW9ufSBvbkNoYW5nZT17b25QaWNrdXBTdGF0aW9uQ2hhbmdlfSBuYW1lPSdwaWNrVXAnIGRpc2FibGVkPXshcGlja1VwRW5hYmxlZH0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jycgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT57VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuUElDS1VQX1NUQVRJT05fRFJPUERPV05fREVGQVVMVH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLlNUQVRJT05TLlRFTF9BVklWfT57VHJhbnNsYXRpb25zLlNUQVRJT05TW0NvbnN0YW50cy5TVEFUSU9OUy5URUxfQVZJVl19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5TVEFUSU9OUy5NT0RJSU59PntUcmFuc2xhdGlvbnMuU1RBVElPTlNbQ29uc3RhbnRzLlNUQVRJT05TLk1PRElJTl19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJvcG9mZlNlY3Rpb24oZHJvcE9mZkVuYWJsZWQsIGRyb3BPZmZTdGF0aW9uLCB0b2dnbGVEcm9wT2ZmLCBvbkRyb3BPZmZTdGF0aW9uQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtMyBsYXJnZS0yIGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZHJvcE9mZlRvZ2dsZVwiPntUcmFuc2xhdGlvbnMuVVBEQVRFX0JPT0tJTkdfUEFHRS5EUk9QT0ZGX1RPR0dMRX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzd2l0Y2gnPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNsYXNzTmFtZT0nc3dpdGNoLWlucHV0JyBpZD0nZHJvcE9mZlRvZ2dsZScgY2hlY2tlZD17ZHJvcE9mZkVuYWJsZWR9IG9uQ2hhbmdlPXt0b2dnbGVEcm9wT2ZmfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoLXBhZGRsZVwiIGh0bWxGb3I9XCJkcm9wT2ZmVG9nZ2xlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTkgbGFyZ2UtMTAgY29sdW1ucyBlbmQgbW9yZS1zcGFjZSc+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZHJvcE9mZlN0YXRpb259IG9uQ2hhbmdlPXtvbkRyb3BPZmZTdGF0aW9uQ2hhbmdlfSBuYW1lPSdkcm9wT2ZmJyBkaXNhYmxlZD17IWRyb3BPZmZFbmFibGVkfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJyBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PntUcmFuc2xhdGlvbnMuVVBEQVRFX0JPT0tJTkdfUEFHRS5QSUNLVVBfU1RBVElPTl9EUk9QRE9XTl9ERUZBVUxUfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuU1RBVElPTlMuVEVMX0FWSVZ9PntUcmFuc2xhdGlvbnMuU1RBVElPTlNbQ29uc3RhbnRzLlNUQVRJT05TLlRFTF9BVklWXX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLlNUQVRJT05TLk1PRElJTn0+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tDb25zdGFudHMuU1RBVElPTlMuTU9ESUlOXX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBVcGRhdGVCb29raW5nUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIGNvbnN0IGJvb2tpbmdJbml0aWFsU3RhdGUgPSBfLmRlZmF1bHRzKHRoaXMucHJvcHMuYm9va2luZywgeyBwYWlkU2VhdHM6IHRoaXMucHJvcHMuc2Vhc29uVGlja2V0cyB9LCBlbXB0eUJvb2tpbmcpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBfLm1lcmdlKGJvb2tpbmdJbml0aWFsU3RhdGUsIHtcbiAgICAgICAgICAgIHBpY2tVcEVuYWJsZWQ6ICEhYm9va2luZ0luaXRpYWxTdGF0ZS5waWNrVXAsXG4gICAgICAgICAgICBkcm9wT2ZmRW5hYmxlZDogISFib29raW5nSW5pdGlhbFN0YXRlLmRyb3BPZmZcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25QYWlkU2VhdENoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBhaWRTZWF0czogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvbkV4dHJhU2VhdENoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4dHJhU2VhdHM6IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdG9nZ2xlUGlja1VwID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHBpY2tVcEVuYWJsZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGlja1VwRW5hYmxlZCB9KTtcbiAgICAgICAgaWYgKCFwaWNrVXBFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGlja1VwOiAnJyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvblBpY2tVcFN0YXRpb25DaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwaWNrVXA6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0b2dnbGVEcm9wT2ZmID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGRyb3BPZmZFbmFibGVkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BPZmZFbmFibGVkIH0pO1xuICAgICAgICBpZiAoIWRyb3BPZmZFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcE9mZjogJycgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25Ecm9wT2ZmU3RhdGlvbkNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyb3BPZmY6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpc0Zvcm1WYWxpZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGFpZFNlYXRzID09PSAwICYmIHRoaXMuc3RhdGUuZXh0cmFTZWF0cyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnBpY2tVcEVuYWJsZWQgJiYgIXRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBpY2tVcEVuYWJsZWQgJiYgdGhpcy5zdGF0ZS5waWNrVXAgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZCAmJiB0aGlzLnN0YXRlLmRyb3BPZmYgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvb2tpbmdUb1VwZGF0ZSA9IF8ucGljayh0aGlzLnN0YXRlLCBfLmtleXMoZW1wdHlCb29raW5nKSk7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlQm9va2luZyh0aGlzLnByb3BzLnVpZCwgdGhpcy5wcm9wcy5nYW1lSWQsIGJvb2tpbmdUb1VwZGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVCYWNrKCk7XG4gICAgfTtcblxuICAgIG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmNhbmNlbEJvb2tpbmcodGhpcy5wcm9wcy51aWQsIHRoaXMucHJvcHMuZ2FtZUlkKTtcbiAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Rm9ybUZyYW1lIHRpdGxlPXtUcmFuc2xhdGlvbnMuVVBEQVRFX0JPT0tJTkdfUEFHRS5USVRMRX0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IG9uQ2xvc2U9e3RoaXMucHJvcHMubmF2aWdhdGVCYWNrfSBvblJlbW92ZT17dGhpcy5wcm9wcy5pc0FkbWluID8gdGhpcy5vblJlbW92ZTogbnVsbH0gZGlzYWJsZWQ9eyF0aGlzLmlzRm9ybVZhbGlkKCl9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib29raW5nLWZvcm0gc21hbGwtMTEgc21hbGwtY2VudGVyZWQnPlxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZVBhc3NlbmdlcnNTZWN0aW9uKHRoaXMucHJvcHMudXNlckluZm8uc2Vhc29uVGlja2V0cywgdGhpcy5zdGF0ZS5wYWlkU2VhdHMsIHRoaXMuc3RhdGUuZXh0cmFTZWF0cywgdGhpcy5vblBhaWRTZWF0Q2hhbmdlLCB0aGlzLm9uRXh0cmFTZWF0Q2hhbmdlKSB9XG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlUGlja3VwU2VjdGlvbih0aGlzLnN0YXRlLnBpY2tVcEVuYWJsZWQsIHRoaXMuc3RhdGUucGlja1VwLCB0aGlzLnRvZ2dsZVBpY2tVcCwgdGhpcy5vblBpY2tVcFN0YXRpb25DaGFuZ2UpIH1cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVEcm9wb2ZmU2VjdGlvbih0aGlzLnN0YXRlLmRyb3BPZmZFbmFibGVkLCB0aGlzLnN0YXRlLmRyb3BPZmYsIHRoaXMudG9nZ2xlRHJvcE9mZiwgdGhpcy5vbkRyb3BPZmZTdGF0aW9uQ2hhbmdlKSB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm1GcmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVwZGF0ZUJvb2tpbmdQYWdlLnByb3BUeXBlcyA9IHtcbiAgICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpc0FkbWluOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGdhbWVJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgdXNlckluZm86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNhbmNlbEJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbmF2aWdhdGVCYWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXBkYXRlQm9va2luZ1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VwZGF0ZUJvb2tpbmdQYWdlLmpzeCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCBldmVudEFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucycpO1xuY29uc3Qgcm91dGluZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5cbmNvbnN0IERFRkFVTFRfR0FNRV9MT0dPID0gJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEyNC8xMjQxNTAuc3ZnJztcblxuY29uc3QgRm9ybUZyYW1lID0gcmVxdWlyZSgnLi9mb3JtRnJhbWUnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL3VwZGF0ZUdhbWVQYWdlLnNjc3MnKTtcblxuY29uc3QgZW1wdHlFdmVudCA9IHtcbiAgICB0eXBlSWQ6ICcnLFxuICAgIGRheTogJzAxJyxcbiAgICBtb250aDogJzAxJyxcbiAgICB5ZWFyOiAnMjAxNycsXG4gICAgaG91cjogJzE3JyxcbiAgICBtaW51dGU6ICcwMCcsXG4gICAgc3RhdHVzOiBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEXG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICBjb25zdCByb3V0aW5nUGFyYW1zID0gc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcztcbiAgICBjb25zdCBnYW1lSWQgPSByb3V0aW5nUGFyYW1zLmdhbWVJZDtcbiAgICBjb25zdCBnYW1lID0gXy5nZXQoc3RhdGUsIFsnZXZlbnRzJywgZ2FtZUlkXSwge30pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2FtZSxcbiAgICAgICAgZ2FtZUlkXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVmFsdWUoeWVhciwgbW9udGgsIGRheSkge1xuICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLScpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVWYWx1ZShob3VyLCBtaW51dGUpIHtcbiAgICByZXR1cm4gaG91ciArICc6JyArIG1pbnV0ZTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlR2FtZTogZ2FtZSA9PiBkaXNwYXRjaChldmVudEFjdGlvbnMuY3JlYXRlRXZlbnQoZ2FtZSkpLFxuICAgICAgICB1cGRhdGVHYW1lOiAoZ2FtZUlkLCBnYW1lKSA9PiBkaXNwYXRjaChldmVudEFjdGlvbnMudXBkYXRlRXZlbnQoZ2FtZUlkLCBnYW1lKSksXG4gICAgICAgIHJlbW92ZUdhbWU6IGdhbWVJZCA9PiBkaXNwYXRjaChldmVudEFjdGlvbnMucmVtb3ZlRXZlbnQoZ2FtZUlkKSksXG4gICAgICAgIG5hdmlnYXRlQmFjazogKCkgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVCYWNrKCkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZUltYWdlKHR5cGVJZCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdnYW1lLWltZycgc3JjPXtfLmdldChDb25zdGFudHMuVEVBTVMsIFt0eXBlSWQsICdsb2dvJ10sIERFRkFVTFRfR0FNRV9MT0dPKX0gLz5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lVGl0bGVTZWN0aW9uKHR5cGVJZCwgb25UeXBlSWRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC05IGxhcmdlLTEwIGxhcmdlLWNvbGxhcHNlIGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuR0FNRV9MQUJFTH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPSd0eXBlSWQnIHZhbHVlPXt0eXBlSWR9IG9uQ2hhbmdlPXtvblR5cGVJZENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLkdBTUVfUExBQ0VIT0xERVJ9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5URUFNUywgKHRlYW1EYXRhLCBpZCkgPT4gPG9wdGlvbiBrZXk9eyd1cGRhdGUtZ2FtZS0nICsgaWR9IHZhbHVlPXtpZH0+e3RlYW1EYXRhLmxhYmVsfTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxvYXQtbGVmdCc+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVHYW1lSW1hZ2UodHlwZUlkKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb1dpdGhvdXRTdXBwb3J0ZWRJbnB1dHMoeWVhciwgbW9udGgsIGhvdXIsIG1pbnV0ZSwgb25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PSd1bnN1cHBvcnRlZC1pbnB1dHMnIGNsYXNzTmFtZT0ncm93IHNtYWxsLWV4cGFuZGVkIHNtYWxsLWNlbnRlcmVkJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC00IG1lZGl1bS0yIGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuREFURV9MQUJFTH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3llYXJ9IG9uQ2hhbmdlPXtvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlfSBuYW1lPSd5ZWFyJz5cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuREFURV9BTkRfVElNRS55ZWFycywgeWVhciA9PiA8b3B0aW9uIGtleT17J3l5LScgKyB5ZWFyfSB2YWx1ZT17JzIwJyArIHllYXJ9Pnt5ZWFyfTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNCBtZWRpdW0tMiBjb2x1bW5zIG1vcmUtc3BhY2UnPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e21vbnRofSBvbkNoYW5nZT17b25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZX0gbmFtZT0nbW9udGgnPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5EQVRFX0FORF9USU1FLm1vbnRocywgbW9udGggPT4gPG9wdGlvbiBrZXk9eydtbS0nICsgbW9udGh9IHZhbHVlPXttb250aH0+e21vbnRofTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNCBtZWRpdW0tMiBjb2x1bW5zIG1vcmUtc3BhY2UnPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2RheX0gb25DaGFuZ2U9e29uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2V9IG5hbWU9J2RheSc+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLkRBVEVfQU5EX1RJTUUuZGF5cywgZGF5ID0+IDxvcHRpb24ga2V5PXsnZGQtJyArIGRheX0gdmFsdWU9e2RheX0+e2RheX08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTMgY29sdW1ucyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5USU1FfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bWludXRlfSBvbkNoYW5nZT17b25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZX0gbmFtZT0nbWludXRlJz5cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuREFURV9BTkRfVElNRS5taW51dGVzLCBkYXkgPT4gPG9wdGlvbiBrZXk9eydtaW4tJyArIG1pbnV0ZX0gdmFsdWU9e21pbnV0ZX0+e21pbnV0ZX08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTMgY29sdW1ucyBtb3JlLXNwYWNlIGVuZCc+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17aG91cn0gb25DaGFuZ2U9e29uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2V9IG5hbWU9J21pbnV0ZSc+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLkRBVEVfQU5EX1RJTUUuaG91cnMsIGhvdXIgPT4gPG9wdGlvbiBrZXk9eydoaC0nICsgaG91cn0gdmFsdWU9e2hvdXJ9Pntob3VyfTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9XaXRoU3VwcG9ydGVkSW5wdXRzKGRhdGUsIHRpbWUsIG9uRGF0ZUNoYW5nZSwgb25UaW1lQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9J3N1cHBvcnRlZC1pbnB1dHMnIGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC02IGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuREFURV9MQUJFTH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2RhdGUnIHZhbHVlPXtkYXRlfSBvbkNoYW5nZT17b25EYXRlQ2hhbmdlfSBtaW49JzIwMTYtMDEtMDEnIG1heD0nMjAxNy0xMi0zMScgbmFtZT0nZGF0ZScgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtNiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLlRJTUV9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0aW1lJyB2YWx1ZT17dGltZX0gc3RlcD17MzAwfSBvbkNoYW5nZT17b25UaW1lQ2hhbmdlfSBuYW1lPSd0aW1lJyAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZVN0YXR1c1NlY3Rpb24oc3RhdHVzLCBvbkdhbWVTdGF0dXNDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtMTIgY29sdW1ucyc+XG4gICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLkdBTUVfU1RBVFVTfVxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3N0YXR1c30gb25DaGFuZ2U9e29uR2FtZVN0YXR1c0NoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLkdBTUUuU1RBVFVTLCB2YWwgPT4gPG9wdGlvbiB2YWx1ZT17dmFsfT57VHJhbnNsYXRpb25zLkdBTUUuU1RBVFVTW3ZhbF19PC9vcHRpb24+KSB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBVcGRhdGVHYW1lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBfLmRlZmF1bHRzKHRoaXMucHJvcHMuZ2FtZSwgZW1wdHlFdmVudCwgeyBkYXRlSW5wdXRTdXBwb3J0ZWQ6IHRydWUsIHRpbWVJbnB1dFN1cHBvcnRlZDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jaGVja0lmSHRtbDVTdXBwb3J0ZWQoKTtcbiAgICB9XG5cbiAgICBjaGVja0lmSHRtbDVTdXBwb3J0ZWQoKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZElucHV0VHlwZXMgPSBbJ2RhdGUnLCAndGltZSddO1xuICAgICAgICBjb25zdCB0ZXN0UmVzdWx0ID0ge307XG4gICAgICAgIGNvbnN0IHRlc3RTdHJpbmcgPSAndGVzdCEnO1xuXG4gICAgICAgIF8uZWFjaChzdXBwb3J0ZWRJbnB1dFR5cGVzLCAoaW5wdXRUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSB0ZXN0U3RyaW5nO1xuICAgICAgICAgICAgY29uc3QgaXNTdXBwb3J0ZWQgPSBpbnB1dC52YWx1ZSAhPT0gdGVzdFN0cmluZztcbiAgICAgICAgICAgIHRlc3RSZXN1bHRbaW5wdXRUeXBlICsgJ0lucHV0U3VwcG9ydGVkJ10gPSBpc1N1cHBvcnRlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0ZXN0UmVzdWx0KTtcbiAgICB9XG5cbiAgICBvblR5cGVJZENoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHR5cGVJZDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvbkRhdGVDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUuc3BsaXQoJy0nKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHllYXI6IHZhbFswXSwgbW9udGg6IHZhbFsxXSwgZGF5OiB2YWxbMl0gfSk7XG4gICAgfTtcblxuICAgIG9uVGltZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZS5zcGxpdCgnOicpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaG91cjogdmFsWzBdLCBtaW51dGU6IHZhbFsxXSB9KTtcbiAgICB9O1xuXG4gICAgb25HYW1lU3RhdHVzQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RhdHVzOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnR5cGVJZCAhPT0gJyc7XG4gICAgfTtcblxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gXy5vbWl0KHRoaXMuc3RhdGUsIFsndGltZUlucHV0U3VwcG9ydGVkJywgJ2RhdGVJbnB1dFN1cHBvcnRlZCddKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZ2FtZUlkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUdhbWUodGhpcy5wcm9wcy5nYW1lSWQsIGdhbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVHYW1lKGdhbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVCYWNrKCk7XG4gICAgfTtcblxuICAgIG9uUmVtb3ZlICA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVHYW1lKHRoaXMucHJvcHMuZ2FtZUlkKTtcbiAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZvcm1GcmFtZVxuICAgICAgICAgICAgICAgIHRpdGxlPXtUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5USVRMRX0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IG9uUmVtb3ZlPXt0aGlzLm9uUmVtb3ZlfSBvbkNsb3NlPXt0aGlzLnByb3BzLm5hdmlnYXRlQmFja30gZGlzYWJsZWQ9eyF0aGlzLmlzRm9ybVZhbGlkKCl9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VwZGF0ZS1nYW1lLXBhZ2UgbGFyZ2UtMTEgbGFyZ2UtY2VudGVyZWQnPlxuXG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlR2FtZVRpdGxlU2VjdGlvbih0aGlzLnN0YXRlLnR5cGVJZCwgdGhpcy5vblR5cGVJZENoYW5nZSkgfVxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0ZUlucHV0U3VwcG9ydGVkICYmIHRoaXMuc3RhdGUudGltZUlucHV0U3VwcG9ydGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbmZvV2l0aFN1cHBvcnRlZElucHV0cyhwYXJzZURhdGVWYWx1ZSh0aGlzLnN0YXRlLnllYXIsIHRoaXMuc3RhdGUubW9udGgsIHRoaXMuc3RhdGUuZGF5KSwgcGFyc2VUaW1lVmFsdWUodGhpcy5zdGF0ZS5ob3VyLCB0aGlzLnN0YXRlLm1pbnV0ZSksIHRoaXMub25EYXRlQ2hhbmdlLCB0aGlzLm9uVGltZUNoYW5nZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUluZm9XaXRob3V0U3VwcG9ydGVkSW5wdXRzKHRoaXMuc3RhdGUueWVhciwgdGhpcy5zdGF0ZS5tb250aCwgdGhpcy5zdGF0ZS5ob3VyLCB0aGlzLnN0YXRlLm1pbnV0ZSwgdGhpcy5vbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVHYW1lU3RhdHVzU2VjdGlvbih0aGlzLnN0YXRlLnN0YXR1cywgdGhpcy5vbkdhbWVTdGF0dXNDaGFuZ2UpIH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtRnJhbWU+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5VcGRhdGVHYW1lUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgZ2FtZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBnYW1lSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3JlYXRlR2FtZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVHYW1lOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlQmFjazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVwZGF0ZUdhbWVQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91cGRhdGVHYW1lUGFnZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VwZGF0ZUdhbWVQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdXBkYXRlR2FtZVBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VwZGF0ZUdhbWVQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi51cGRhdGUtZ2FtZS1wYWdlIC5nYW1lLWltZyB7XFxuICB3aWR0aDogNjRweDtcXG4gIGhlaWdodDogNjRweDtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2l0ZSB7XFxuICBkaXJlY3Rpb246IHJ0bDsgfVxcbiAgLnNpdGUgLnNwbGl0LmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24gaSB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5mYWNlYm9vayB7XFxuICAgICAgYmFja2dyb3VuZDogIzNiNTk5ODsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmdvb2dsZSB7XFxuICAgICAgYmFja2dyb3VuZDogI2Q1MGYyNTsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmxlZnQtaWNvbiB7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmxlZnQtaWNvbiBzcGFuIHtcXG4gICAgICAgIGxlZnQ6IDA7IH1cXG4gIC5zaXRlIC5lcnJvci1tc2cge1xcbiAgICBjb2xvcjogI2Q1MGYyNTtcXG4gICAgcGFkZGluZzogMCAxNXB4IDE1cHg7IH1cXG4gICAgLnNpdGUgLmVycm9yLW1zZyBpIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxcbiAgLnNpdGUgbGFiZWwge1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAuc2l0ZSAubW9yZS1zcGFjZSB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7IH1cXG4gIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5saXN0LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAubGlzdC1pdGVtOm50aC1jaGlsZChvZGQpIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51LnNtYWxsLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51IGxpIGEge1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgY29sb3I6ICNEMzJGMkY7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUgbGkuYWN0aXZlIGEge1xcbiAgICAgIGJhY2tncm91bmQ6ICNEMzJGMkY7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUgbGkuYWN0aXZlOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAuc2VhcmNoIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOTM1ZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjkzNWVtOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5zZWFyY2gtaW5wdXQge1xcbiAgICAgIHRleHQtaW5kZW50OiAzMHB4OyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5zZWFyY2gtaWNvbiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTFweDtcXG4gICAgICByaWdodDogMjhweDtcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGNvbG9yOiAjY2FjYWNhOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0biB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzMkYyRjtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4yNXMgZWFzZS1vdXQsIGNvbG9yIC4yNXMgZWFzZS1vdXQ7XFxuICAgICAgcGFkZGluZzogLjg1ZW07XFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgd2lkdGg6IDMuNXJlbTtcXG4gICAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgYm90dG9tOiAxcmVtOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuLmJpZyB7XFxuICAgICAgICBsZWZ0OiAyNyU7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG4uc21hbGwge1xcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMi41cmVtO1xcbiAgICAgICAgbGVmdDogNSU7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG46aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI0Q1MDAwMDsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyLXN0YXR1cyB7XFxuICAgICAgY29sb3I6ICM0MjQyNDI7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyLXN0YXR1cyBpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7IH1cXG4gIC5zaXRlIC5idXR0b24uc3VjY2Vzc1tkaXNhYmxlZF06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjVhMzVhICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaXJlYmFzZVwiOiB7XG5cdFx0XCJhcGlLZXlcIjogXCJBSXphU3lERUlTVjJhTWllUGt1ZUN3bERSOENWZzdoX0JMYTNKb2NcIixcblx0XHRcImF1dGhEb21haW5cIjogXCJoYXBvZWxidXMtYjI1ZDQuZmlyZWJhc2VhcHAuY29tXCIsXG5cdFx0XCJkYXRhYmFzZVVSTFwiOiBcImh0dHBzOi8vaGFwb2VsYnVzLWIyNWQ0LmZpcmViYXNlaW8uY29tXCIsXG5cdFx0XCJzdG9yYWdlQnVja2V0XCI6IFwiaGFwb2VsYnVzLWIyNWQ0LmFwcHNwb3QuY29tXCJcblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbmZpZy9jb25maWcucHJvZC5qc29uXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9