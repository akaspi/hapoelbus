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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTRmNTY5NGM5ODhmOTFjYmU1YmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb290LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L21ha2VTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWR1eFwiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiX1wiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWR1eFRodW5rXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3JvdXRpbmdSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NsaWVudERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbG9hZGluZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2xhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzP2NhYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzPzM0MmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90b3BCYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzPzdiMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3M/MmRkNCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2V2ZW50SXRlbS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2Nzcz80YTA2Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3M/MjI5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZVRpdGxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VUaXRsZS5zY3NzPzQyYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wYWdlVGl0bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2FtZXNQYWdlLnNjc3M/YzFlYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dhbWVzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ib29raW5nc1BhZ2Uuc2Nzcz9kMTlkIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYm9va2luZ3NQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzcz85NWY1Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGlzdHJpYnV0aW9uUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VkaXRVc2VySW5mb1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtRnJhbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZm9ybUZyYW1lLnNjc3M/MjVlMiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZUJvb2tpbmdQYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cGRhdGVHYW1lUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzP2ViOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy91cGRhdGVHYW1lUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvYXBwLnNjc3M/OGJkYyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2NvbmZpZy9jb25maWcucHJvZC5qc29uIl0sIm5hbWVzIjpbImNvbmZpZyIsImNsaWVudERCIiwiaW5pdGlhbGl6ZSIsImZpcmViYXNlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdCIsInJlcXVpcmUiLCJSZWFjdFJlZHV4IiwibWFrZVN0b3JlIiwiQXBwIiwiUm9vdCIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyb3V0aW5nUmVkdWNlciIsInJlZHVjZXJzIiwicm91dGluZyIsImF1dGhEYXRhIiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwidXNlcnMiLCJldmVudHMiLCJib29raW5ncyIsIm1pZGRsZXdhcmUiLCJ1bmRlZmluZWQiLCJlcnJvclJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJtZXNzYWdlIiwiU1RBUlRfTE9BRElORyIsIlNUT1BfTE9BRElORyIsIlJFUE9SVF9FUlJPUiIsIlNFVF9BVVRIX0RBVEEiLCJTSUdOX09VVCIsIlVTRVJTX1JFQ0VJVkVEIiwiVVNFUl9SRU1PVkVEIiwiRVZFTlRTX1JFQ0VJVkVEIiwiRVZFTlRfUkVNT1ZFRCIsIkJPT0tJTkdTX1JFQ0VJVkVEIiwiQk9PS0lOR19DQU5DRUxFRCIsIk5BVklHQVRFX1RPIiwibG9hZGluZ1JlZHVjZXIiLCJ1c2Vyc1JlZHVjZXIiLCJfIiwibWVyZ2UiLCJvbWl0IiwidWlkIiwiZXZlbnRzUmVkdWNlciIsImV2ZW50SWQiLCJjbG9uZWRCb29raW5ncyIsImNsb25lRGVlcCIsInNpemUiLCJhdXRoRGF0YVJlZHVjZXIiLCJlbWFpbCIsInBob3RvVVJMIiwiaXNBZG1pbiIsIkNvbnN0YW50cyIsImNyZWF0ZVJvdXRpbmdEYXRhIiwicGFnZUlkIiwicGFyYW1zIiwiY3VycmVudCIsIlJPVVRJTkciLCJQQUdFUyIsIkFVVEgiLCJoaXN0b3J5Iiwicm91dGluZ0RhdGEiLCJjb25jYXQiLCJsZW5ndGgiLCJoaXN0b3J5V2l0aG91dExhc3QiLCJzbGljZSIsIkhPTUUiLCJVU0VSUyIsIkdBTUVTIiwiQk9PS0lOR1MiLCJESVNUUklCVVRJT04iLCJFRElUX1VTRVJfSU5GTyIsIlVQREFURV9CT09LSU5HIiwiVVBEQVRFX0dBTUUiLCJHQU1FIiwiU1RBVFVTIiwiQ0xPU0VEIiwiT1BFTl9GT1JfTUVNQkVSUyIsIk9QRU5fRk9SX0FMTCIsIkZVTExZX0JPT0tFRCIsIlVTRVIiLCJNQVhfU0VBU09OX1RJQ0tFVFMiLCJQSE9ORV9QUkVGSVhFUyIsIlNUQVRJT05TIiwiVEVMX0FWSVYiLCJNT0RJSU4iLCJEQVRFX0FORF9USU1FIiwiZGF5cyIsIm1vbnRocyIsInllYXJzIiwiaG91cnMiLCJtaW51dGVzIiwiRElTVFJJQlVUSU9OX01FVEhPRFMiLCJFTUFJTCIsIlNNUyIsIlJFQ0lQSUVOVFNfVFlQRVMiLCJBTEwiLCJNRU1CRVJTX09OTFkiLCJCT09LRURfVE9fRVZFTlQiLCJESVNUUklCVVRJT05fVFlQRVMiLCJURU1QTEFURSIsIkNVU1RPTSIsIlRFTVBMQVRFUyIsIkVWRU5UX09QRU5fRk9SX01FTUJFUlMiLCJFVkVOVF9PUEVOX0ZPUl9BTEwiLCJDSEFOR0VfRVZFTlRfREVUQUlMUyIsIlRFQU1TIiwiSEFQT0VMX0pFUlVTQUxFTSIsImxhYmVsIiwibG9nbyIsIlJlYWN0UmV1ZHgiLCJhdXRoQWN0aW9ucyIsIlNwaW5uZXIiLCJUb3BCYXIiLCJBdXRoUGFnZSIsIkhvbWVQYWdlIiwiVXNlcnNQYWdlIiwiR2FtZXNQYWdlIiwiQm9va2luZ3NQYWdlIiwiRGlzdHJpYnV0aW9uUGFnZSIsIkVkaXRVc2VySW5mb1BhZ2UiLCJVcGRhdGVCb29raW5nUGFnZSIsIlVwZGF0ZUdhbWVQYWdlIiwibWFwU3RhdGVUb1Byb3BzIiwiY3VycmVudFBhZ2VJZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBdXRoRGF0YSIsImdldFBhZ2VDb21wb25lbnQiLCJnZXRQYWdlVG9SZW5kZXIiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiY29ubmVjdCIsInVzZXJBY3Rpb25zIiwiZXZlbnRBY3Rpb25zIiwiYm9va2luZ0FjdGlvbnMiLCJsb2FkaW5nQWN0aW9ucyIsImVycm9yQWN0aW9ucyIsIm5hdmlnYXRpb25BY3Rpb25zIiwiVHJhbnNsYXRpb25zIiwiQVVUSF9FUlJPUl9DT0RFU19NQVAiLCJFUlJPUl9NRVNTQUdFUyIsIklOVkFMSURfRU1BSUwiLCJXRUFLX1BBU1NXT1JEIiwiRU1BSUxfSU5fVVNFIiwiV1JPTkdfUEFTU1dPUkQiLCJVU0VSX05PVF9GT1VORCIsInNldEF1dGhEYXRhIiwiZmV0Y2hBcHBEYXRhIiwidXNlciIsInJlYWQiLCJ0aGVuIiwiZ2V0IiwiYWxsIiwiZmV0Y2hVc2VycyIsImZldGNoRXZlbnRzIiwiZmV0Y2hCb29raW5ncyIsInVzZXJTaWduZWRPdXQiLCJzaWduT3V0Iiwic3RhcnRMb2FkaW5nIiwicmVzZXQiLCJjYXRjaCIsInJlcG9ydEVycm9yIiwiZGJFcnJvciIsImNvZGUiLCJmaW5hbGx5Iiwic3RvcExvYWRpbmciLCJsb2dpbldpdGhGYWNlYm9vayIsImxvZ2luV2l0aEdvb2dsZSIsImxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJnZXRTdGF0ZSIsImdldExvZ2dlZEluVXNlciIsInVzZXJJbmZvIiwiaXNFbXB0eSIsImNvbnNvbGUiLCJlcnJvciIsImluaXRpYWxpemVBcHAiLCJzZXRJbiIsInBhdGgiLCJkYXRhIiwicmVzb2x2ZSIsInJlamVjdCIsImRhdGFiYXNlIiwicmVmIiwic2V0Iiwib25jZSIsInNuYXBzaG90IiwidmFsIiwicHVzaCIsInVuaXF1ZUtleSIsImtleSIsInVwZGF0ZSIsInJlbW92ZSIsInByb3ZpZGVyIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhSZWRpcmVjdCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJnZXRSZWRpcmVjdFJlc3VsdCIsInJlc3VsdCIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJVU0VSX0lORk9fS0VZUyIsIlBBVEhfTUFQIiwiVVNFUlNfSU5GTyIsIlNFQVNPTl9USUNLRVRTIiwiYnVpbGRVc2VyIiwic2Vhc29uVGlja2V0cyIsImZldGNoQWxsVXNlcnMiLCJ1c2VyUmVhZFByb21pc2VzIiwidXNlcnNJbmZvIiwidHJhbnNmb3JtIiwiYWNjIiwiaW5mbyIsImZldGNoU2luZ2xlVXNlciIsInVzZXJzUmVtb3ZlZCIsInVzZXJzUmVjZWl2ZWQiLCJmZXRjaFByb21pc2UiLCJ1cGRhdGVVc2VyIiwidXNlclVwZGF0ZVByb21pc2VzIiwicGljayIsImhhcyIsInJlbW92ZVVzZXIiLCJ1c2VyUmVtb3ZlUHJvbWlzZXMiLCJtYXAiLCJ1c2VyUGF0aCIsIkdFTkVSQUwiLCJHQU1FX0lURU0iLCJCT09LIiwiRURJVF9CT09LSU5HIiwiQ0FOQ0VMX0JPT0tJTkciLCJVU0VSU19QQUdFIiwiVElUTEUiLCJOT19VU0VSU19GT1VORCIsIkZJTFRFUiIsIlNFQVJDSCIsIlRBQlMiLCJNRU1CRVJTIiwiUkVRVUVTVFMiLCJOT05fTUVNQkVSUyIsIkFVVEhfUEFHRSIsIkZJRUxEUyIsIlBBU1NXT1JEIiwiUEFTU1dPUkRfQUdBSU4iLCJTVUJNSVRfQlROIiwiTE9HSU4iLCJSRUdJU1RFUiIsIkZPUkdPVF9QQVNTV09SRCIsIkxJTktTIiwiR09fVE9fTE9HSU4iLCJHT19UT19SRUdJU1RFUiIsIkdPX1RPX0ZPUkdPVF9QQVNTV09SRCIsIkVSUk9SUyIsIk5PVF9TQU1FX1BBU1NXT1JEIiwiSE9NRV9QQUdFIiwiTk9fT1BFTl9HQU1FUyIsIk9QRU5fR0FNRVMiLCJDTE9TRURfR0FNRVMiLCJVUERBVEVfVVNFUl9JTkZPX1BBR0UiLCJGSVJTVF9OQU1FIiwiTEFTVF9OQU1FIiwiUEhPTkVfUFJFRklYIiwiUEhPTkVfTlVNQkVSIiwiRkFWT1JJVEVfUElDS1VQX1NUQVRJT04iLCJSRVFVRVNUX0ZPUl9NRU1CRVJTSElQIiwiVE9HR0xFIiwiWUVTIiwiTk8iLCJVUERBVEVfQk9PS0lOR19QQUdFIiwiUEFJRF9TRUFUUyIsIkVYVFJBX1NFQVRTIiwiUElDS1VQX1RPR0dMRSIsIkRST1BPRkZfVE9HR0xFIiwiUElDS1VQX1NUQVRJT05fRFJPUERPV05fREVGQVVMVCIsIkdBTUVTX1BBR0UiLCJPUEVOIiwiTk9fR0FNRVNfTEFCRUwiLCJCT09LSU5HU19QQUdFIiwiUElDS1VQIiwiRFJPUE9GRiIsIlVQREFURV9HQU1FX1BBR0UiLCJHQU1FX0xBQkVMIiwiR0FNRV9QTEFDRUhPTERFUiIsIkRBVEVfTEFCRUwiLCJUSU1FIiwiR0FNRV9TVEFUVVMiLCJESVNUUklCVVRJT05fUEFHRSIsIkRJU1RSSUJVVElPTl9NRVRIT0QiLCJDT05URU5UIiwiRk9STV9GUkFNRSIsIlNVQk1JVCIsIlJFTU9WRSIsIkVWRU5UX0tFWVMiLCJFVkVOVFNfUEFUSCIsImV2ZW50UmVtb3ZlZCIsImV2ZW50c1JlY2VpdmVkIiwiY3JlYXRlRXZlbnQiLCJldmVudCIsInVwZGF0ZUV2ZW50IiwiZXZlbnRUb1VwZGF0ZSIsInJlbW92ZUV2ZW50IiwiQk9PS0lOR19EQVRBX0tFWVMiLCJCT09LSU5HU19QQVRIIiwiZmV0Y2hVc2VyQm9va2luZ3MiLCJ1c2VyQm9va2luZ3MiLCJmZXRjaEFsbEJvb2tpbmdzIiwiYm9va2luZ3NSZWNlaXZlZCIsImJvb2tpbmdzQ2FuY2VsZWQiLCJ1cGRhdGVCb29raW5nIiwiYm9va2luZ0RhdGEiLCJib29raW5nRGF0YVRvVXBkYXRlIiwiY2FuY2VsQm9va2luZyIsIm5hdmlnYXRlVG8iLCJuYXZpZ2F0ZUJhY2siLCJyZXBsYWNlIiwiY2xhc3NOYW1lcyIsIkxvZ28iLCJpc0xvYWRpbmciLCJvdmVybGF5Q2xhc3MiLCJvdmVybGF5IiwiaGlkZSIsImJvb2wiLCJ3aWR0aCIsIm9wYWNpdHkiLCJudW1iZXIiLCJoZWlnaHQiLCJyb3V0aW5nQWN0aW9ucyIsIm1lbnVQYWdlc0lkcyIsImN1cnJlbnRVc2VyIiwiZ2V0VXNlclRpdGxlIiwiZmlyc3ROYW1lIiwiY3JlYXRlSGVhZGVyIiwiYmluZCIsImNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSIsInRvZ2dsZU1lbnVWaXNpYmlsaXR5IiwiY3JlYXRlTWVudSIsImlzTWVudVZpc2libGUiLCJjcmVhdGVEZXNrdG9wTWVudUl0ZW0iLCJpdGVtQ2xhc3NlcyIsImFjdGl2ZSIsImJ1dHRvbiIsInNtYWxsIiwiY3JlYXRlTW9iaWxlTWVudUl0ZW0iLCJvbk1vYmlsZU1lbnVDbGlja2VkIiwiY3JlYXRlRGVza3RvcE1lbnUiLCJjcmVhdGVNb2JpbGVNZW51Iiwic2V0U3RhdGUiLCJsb2dpbldpdGhFbWFpbCIsInNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQiLCJpc0xvZ2luTW9kZSIsImF1dGhNb2RlIiwiaXNSZWdpc3Rlck1vZGUiLCJpc0Zvcm1WYWxpZCIsInBhc3N3b3JkQWdhaW4iLCJjcmVhdGVMb2dvIiwiY3JlYXRlU29jaWFsQnV0dG9uc1NlY3Rpb24iLCJjcmVhdGVFcnJvclNlY3Rpb24iLCJjcmVhdGVJbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJnZXRCdXR0b25MYWJlbCIsImNyZWF0ZVN1Ym1pdEJ1dHRvbiIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJjcmVhdGVMaW5rc1NlY3Rpb24iLCJuYXZUb0xvZ2luIiwibmF2VG9SZWdpc3RlciIsIm5hdlRvRm9yZ290UGFzc3dvcmQiLCJjcmVhdGVMb2dpblNjcmVlbkxpbmtzIiwiY3JlYXRlTk9OTG9naW5TY3JlZW5MaW5rcyIsImUiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImlzRXF1YWwiLCJvbkF1dGhNb2RlQ2hhbmdlIiwiY3JlYXRlTmF2RnVuYyIsIkV2ZW50SXRlbSIsImdhbWVzIiwibmF2aWdhdGVUb1VwZGF0ZUJvb2tpbmciLCJnYW1lSWQiLCJwYXJzZUV2ZW50RGF0ZSIsImdhbWUiLCJldmVudERhdGUiLCJEYXRlIiwieWVhciIsIm1vbnRoIiwiZGF5Iiwic2V0TW9udGgiLCJnZXRNb250aCIsImlzRnV0dXJlRXZlbnQiLCJub3ciLCJnZXRDbG9zZWRHYW1lc0FyciIsImNoYWluIiwib21pdEJ5Iiwic3RhdHVzIiwic29ydEJ5IiwiZ2FtZURhdGEiLCJnZXRPcGVuR2FtZXMiLCJjcmVhdGVNb2JpbGVOb0dhbWVzTWVzc2FnZVNlY3Rpb24iLCJjcmVhdGVHYW1lc0xpc3RzIiwib3BlbkdhbWVzIiwiY2xvc2VkR2FtZXNBcnIiLCJvbkJvb2tpbmciLCJvbkNhbmNlbEJvb2tpbmciLCJiaW5kT25HYW1lSXRlbUNsaWNrIiwiZm4iLCJjcmVhdGVPcGVuR2FtZXNMaXN0IiwiY3JlYXRlQ2xvc2VkR2FtZXNMaXN0IiwiaXNCb29raW5nRW5hYmxlZCIsIm93blByb3BzIiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsInR5cGVJZCIsImRhdGUiLCJ0aW1lIiwiaG91ciIsIm1pbnV0ZSIsImlzQm9va2luZ0FsbG93ZWQiLCJpc0Jvb2tlZCIsImhhc0luIiwiY3JlYXRlVGVhbUxvZ29zIiwiaG9tZSIsImF3YXkiLCJjcmVhdGVFdmVudFRpbWVBbmREYXRlIiwiaXNPcGVuRm9yQm9va2luZyIsImNyZWF0ZUZ1bGx5Qm9va2VkTGFiZWwiLCJjcmVhdGVCb29raW5nQnV0dG9uIiwiYm9va0J1dHRvbiIsImVkaXRCb29raW5nQnV0dG9uIiwiY3JlYXRlQm9va2luZ0NhbmNlbGxhdGlvbkJ1dHRvbiIsImNyZWF0ZUFjdGlvbnNCdXR0b25zIiwiaXNGdWxseUJvb2tlZCIsInNoYXBlIiwiTGlzdEl0ZW0iLCJQYWdlVGl0bGUiLCJGSUxURVJTIiwicXVlcnkiLCJmaWx0ZXIiLCJzZWFyY2giLCJuYXZUb0VkaXRVc2VyIiwiY2hhbmdlRmlsdGVyIiwiY2hhbmdlU2VhcmNoUXVlcnkiLCJkZWJvdW5jZSIsImNvdW50TWVtYmVycyIsInBpY2tCeSIsInBpY2tVc2Vyc0Z1bmN0aW9ucyIsInZhbHVlcyIsInN1bUJ5IiwiY291bnRSZXF1ZXN0cyIsImNvdW50Tm9uTWVtYmVycyIsImNvdW50QWNjb3JkaW5nVG9GaWx0ZXJzIiwibGFzdE5hbWUiLCJnZXRVc2VyU3VidGl0bGVzIiwicGhvbmVQcmVmaXgiLCJwaG9uZU51bWJlciIsImdldFVzZXJJbWFnZSIsInJlcXVlc3RGb3JNZW1iZXJzaGlwIiwiZ2V0VmlzaWJsZVVzZXJzIiwic2VhcmNoUXVlcnkiLCJzdGFydHNXaXRoIiwiY3JlYXRlRmlsdGVyIiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiaGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2UiLCJmaWx0ZXJDb3VudHMiLCJjcmVhdGVGaWx0ZXJUYWJzIiwiY3JlYXRlVGV4dElucHV0IiwiY3JlYXRlVXNlcnNMaXN0IiwidXNlcnNBcnIiLCJvblVzZXJDbGljayIsIm9uSXRlbUNsaWNrIiwiaXRlbXMiLCJ1c2VyRGVmIiwiY3JlYXRlTm9Vc2Vyc01lc3NhZ2UiLCJuZXh0UHJvcHMiLCJ2aXNpYmxlVXNlcnNBcnIiLCJvbkNsaWNrIiwiaW1hZ2VTcmMiLCJ0aXRsZSIsInN1YnRpdGxlcyIsInN1YnRpdGxlIiwiYXJyYXkiLCJlZGl0R2FtZSIsImNyZWF0ZUdhbWUiLCJnZXRWaXNpYmxlR2FtZXMiLCJnZXRDbG9zZWRHYW1lcyIsImdldEdhbWVTdWJ0aXRsZXMiLCJjcmVhdGVUYWJzIiwib25GaWx0ZXJDaGFuZ2UiLCJvblRhYkNsaWNrIiwic2VsZWN0ZWRGaWx0ZXIiLCJjcmVhdGVOb0dhbWVzTWVzc2FnZSIsImNyZWF0ZVBsdXNCdXR0b24iLCJvbkNyZWF0ZUdhbWUiLCJvbkZpbHRlckNoYW5nZWQiLCJ2aXNpYmxlR2FtZXMiLCJmaW5kS2V5IiwiZWRpdEJvb2tpbmciLCJjaGFuZ2VHYW1lSWQiLCJnZXRCb29raW5nVGl0bGUiLCJnZXRCb29raW5nUGhvbmUiLCJnZXRCb29raW5nU3VidGl0bGVzIiwiYm9va2luZyIsInBhaWRTZWF0cyIsImV4dHJhU2VhdHMiLCJwaWNrVXAiLCJkcm9wT2ZmIiwiZ2V0Qm9va2luZ0ltYWdlIiwiZ2V0UGlja1VwTWFwIiwidGx2IiwibW9kaWluIiwiZ2V0RHJvcE9mZk1hcCIsImdldFZpc2libGVCb29raW5ncyIsImJvb2tpbmdGb3JFdmVudE1hcCIsIm1hcFZhbHVlcyIsImlzVW5kZWZpbmVkIiwiY291bnRQaWNrdXBzIiwidmlzaWJsZUJvb2tpbmdzIiwidGx2UGlja1Vwc1BhaWQiLCJ0bHZQaWNrVXBzRXh0cmEiLCJtb2RpaW5QaWNrVXBzUGFpZCIsIm1vZGlpblBpY2tVcHNFeHRyYSIsImNvdW50RHJvcE9mZnMiLCJ0bHZEcm9wT2Zmc1BhaWQiLCJ0bHZEcm9wT2Zmc0V4dHJhIiwibW9kaWluRHJvcE9mZnNQYWlkIiwibW9kaWluRHJvcE9mZnNFeHRyYSIsImNyZWF0ZVBhZ2VUaXRsZSIsImNyZWF0ZUZpbHRlclNlY3Rpb24iLCJvbkdhbWVJZENoYW5nZSIsInRhYiIsIm9uU2VsZWN0Q2hhbmdlIiwiY3JlYXRlQm9va2luZ1RhYmxlRm9yUHJpbnQiLCJ0bHZCb29raW5ncyIsIm1vZGlpbkJvb2tpbmdzIiwiaXNQaWNrVXAiLCJjcmVhdGVUaXRsZVJvdyIsImNyZWF0ZVRMVkJvb2tpbmdzVGl0bGUiLCJjcmVhdGVUTFZCb29raW5nc1Jvd3MiLCJjcmVhdGVNb2RpaW5Cb29raW5nc1RpdGxlIiwiY3JlYXRlTW9kaWluQm9va2luZ3NSb3dzIiwiY3JlYXRlUGlja1Vwc0xpc3QiLCJvbkJvb2tpbmdDbGljayIsInRsdlBpY2tVcCIsIm1vZGlpblBpY2tVcCIsInRsdlBpY2tVcHNJdGVtcyIsIm1pZGlpblBpY2tVcHNJdGVtcyIsImNyZWF0ZVRsdlBpY2t1cHNMaXN0IiwiY3JlYXRlTW9kaWluUGlja3Vwc0xpc3QiLCJjcmVhdGVEcm9wT2ZmTGlzdCIsInRsdkRyb3BPZmYiLCJtb2RpaW5Ecm9wT2ZmIiwidGx2RHJvcE9mZkl0ZW1zIiwibWlkaWluRHJvcE9mZkl0ZW1zIiwiY3JlYXRlVGx2RHJvcE9mZkxpc3QiLCJjcmVhdGVNb2RpaW5Ecm9wT2ZmTGlzdCIsImlzUmVxdXJpZWQiLCJkaXN0cmlidXRpb25BY3Rpb25zIiwic2VuZFRlbXBsYXRlRW1haWwiLCJyZWNpcGllbnRzIiwidGVtcGxhdGVJZCIsInN1YnN0aXR1dGlvbnMiLCJzZW5kQ3VzdG9tRW1haWwiLCJzdWJqZWN0IiwiY29udGVudCIsInNlbmRTTVMiLCJnZXRJbml0aWFsU3RhdGUiLCJkaXN0cmlidXRpb25NZXRob2QiLCJyZWNpcGllbnRzVHlwZSIsImRpc3RyaWJ1dGlvblR5cGUiLCJsYXN0Iiwia2V5cyIsImdldE1lbWJlcnNVc2Vyc09ubHkiLCJnZXRCb29rZWRVc2Vyc09ubHkiLCJnZXRSZWNpcGllbnRzIiwicmVjaXBpZW50c1VzZXJzIiwic3Vic2NyaWJlTWFpbCIsImdldFVzZXJzRW1haWxzIiwiZ2V0RXZlbnRTdWJzdGl0dXRpb25zIiwicHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCIsImdldFVzZXJzUGhvbmVOdW1iZXJzIiwiY3JlYXRlRGlzdHJpYnV0aW9uTWV0aG9kSW5wdXQiLCJvbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZSIsImNyZWF0ZVJlY2lwaWVudHNUeXBlSW5wdXQiLCJvblJlY2lwaWVudHNUeXBlQ2hhbmdlIiwiY3JlYXRlRGlzdHJpYnV0aW9uVHlwZUlucHV0Iiwib25EaXN0cmlidXRpb25UeXBlQ2hhbmdlIiwiY3JlYXRlVGVtcGxhdGVTZWxlY3Rpb24iLCJvblRlbXBsYXRlSWRDaGFuZ2UiLCJjcmVhdGVHYW1lc1NlbGVjdGlvbiIsIm9uR2FtZUNoYW5nZSIsIm9wdGlvbnMiLCJjcmVhdGVDdXN0b21UaXRsZSIsIm9uU3ViamVjdENoYW5nZWQiLCJjcmVhdGVDdXN0b21Db250ZW50Iiwib25Db250ZW50Q2hhbmdlZCIsInNob3VsZFNob3dEaXN0cmlidXRpb25UeXBlSW5wdXQiLCJzaG91bGRTaG93VGVtcGxhdGVTZWxlY3Rpb24iLCJzaG91bGRDcmVhdGVDdXN0b21UaXRsZSIsInNob3VsZFNob3dDdXN0b21Db250ZW50IiwiRU1BSUxTIiwidG8iLCJVc2VyRm9ybSIsInVpZFRvRWRpdCIsImdvSG9tZUFmdGVyRWRpdGluZyIsIm5hdmlnYXRlSG9tZSIsIkVkaXRvclVzZXJJbmZvUGFnZSIsIm9uRm9ybUNsb3NlIiwiRm9ybUZyYW1lIiwiZW1wdHlVc2VyIiwic3RhdGlvbiIsInN1YnNjcmliZVNNUyIsImdldEVtcHR5VXNlckluZm8iLCJhc3NpZ24iLCJpc0FkbWluTW9kZSIsImFsbG93VXNlclJlbW92ZSIsImNyZWF0ZUFkbWluU2VjdGlvbiIsIm9uTnVtYmVyQ2hhbmdlIiwidGltZXMiLCJpIiwiY3JlYXRlVXNlck5hbWVJbnB1dHMiLCJvblRleHRDaGFuZ2UiLCJjcmVhdGVFbWFpbElucHV0IiwiY3JlYXRlUGhvbmVOdW1iZXJJbnB1dHMiLCJwcmVmaXgiLCJjcmVhdGVQaWNrdXBTdGF0aW9uUm93Iiwib25Cb29sZWFuQ2hhbmdlIiwiY3JlYXRlUGlja1VwU3RhdGlvbklucHV0IiwiY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCIsImRpc3BsYXkiLCJjcmVhdGVEaXN0cmlidXRpb25JbnB1dHMiLCJoYXNBbGxSZXF1aXJlZEluZm8iLCJyZXF1aXJlZEluZm8iLCJzb21lIiwiaGFzVmFsaWRQaG9uZU51bWJlciIsImhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkiLCJvbktleVByZXNzIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJwYXJzZUludCIsImlzRnVuY3Rpb24iLCJvbkNsb3NlIiwib25SZW1vdmUiLCJjbG9uZSIsImNyZWF0ZVJlbW92ZUJ1dHRvbiIsImNoaWxkcmVuIiwiZW1wdHlCb29raW5nIiwicm91dGluZ1BhcmFtcyIsImNyZWF0ZVBhc3NlbmdlcnNTZWN0aW9uIiwib25QYWlkU2VhdENoYW5nZSIsIm9uRXh0cmFTZWF0Q2hhbmdlIiwiY3JlYXRlUGFpZFNlYXRzSW5wdXQiLCJjcmVhdGVFeHRyYVNlYXRzSW5wdXQiLCJjcmVhdGVQaWNrdXBTZWN0aW9uIiwicGlja1VwRW5hYmxlZCIsInBpY2tVcFN0YXRpb24iLCJ0b2dnbGVQaWNrVXAiLCJvblBpY2t1cFN0YXRpb25DaGFuZ2UiLCJjcmVhdGVEcm9wb2ZmU2VjdGlvbiIsImRyb3BPZmZFbmFibGVkIiwiZHJvcE9mZlN0YXRpb24iLCJ0b2dnbGVEcm9wT2ZmIiwib25Ecm9wT2ZmU3RhdGlvbkNoYW5nZSIsIm9uUGlja1VwU3RhdGlvbkNoYW5nZSIsImJvb2tpbmdUb1VwZGF0ZSIsImJvb2tpbmdJbml0aWFsU3RhdGUiLCJkZWZhdWx0cyIsIkRFRkFVTFRfR0FNRV9MT0dPIiwiZW1wdHlFdmVudCIsInBhcnNlRGF0ZVZhbHVlIiwiam9pbiIsInBhcnNlVGltZVZhbHVlIiwidXBkYXRlR2FtZSIsInJlbW92ZUdhbWUiLCJjcmVhdGVHYW1lSW1hZ2UiLCJjcmVhdGVHYW1lVGl0bGVTZWN0aW9uIiwib25UeXBlSWRDaGFuZ2UiLCJ0ZWFtRGF0YSIsImlkIiwiY3JlYXRlSW5mb1dpdGhvdXRTdXBwb3J0ZWRJbnB1dHMiLCJvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlIiwiY3JlYXRlSW5mb1dpdGhTdXBwb3J0ZWRJbnB1dHMiLCJvbkRhdGVDaGFuZ2UiLCJvblRpbWVDaGFuZ2UiLCJjcmVhdGVHYW1lU3RhdHVzU2VjdGlvbiIsIm9uR2FtZVN0YXR1c0NoYW5nZSIsInNwbGl0IiwiZGF0ZUlucHV0U3VwcG9ydGVkIiwidGltZUlucHV0U3VwcG9ydGVkIiwiY2hlY2tJZkh0bWw1U3VwcG9ydGVkIiwic3VwcG9ydGVkSW5wdXRUeXBlcyIsInRlc3RSZXN1bHQiLCJ0ZXN0U3RyaW5nIiwiZWFjaCIsImlucHV0VHlwZSIsImlucHV0IiwiaXNTdXBwb3J0ZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7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QXdCLDRCQUE0QiwwQkFBMEIsRUFBRSxvQ0FBb0MsNEJBQTRCLEVBQUUsa0NBQWtDLDRCQUE0QixFQUFFLHFDQUFxQywwQkFBMEIsRUFBRSw0Q0FBNEMsa0JBQWtCLEVBQUUsc0JBQXNCLHFCQUFxQiwyQkFBMkIsRUFBRSwwQkFBMEIsMEJBQTBCLEVBQUUsaUJBQWlCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLHdCQUF3QixFQUFFLHVCQUF1Qix1QkFBdUIsRUFBRSwyQkFBMkIseUJBQXlCLDBCQUEwQix3QkFBd0IsRUFBRSx3REFBd0QsNEJBQTRCLEVBQUUsdURBQXVELDRCQUE0QixFQUFFLGdEQUFnRCwyREFBMkQsMkJBQTJCLDZCQUE2QixFQUFFLEVBQUUsbURBQW1ELHNCQUFzQix1QkFBdUIsRUFBRSwwREFBMEQsNEJBQTRCLHVCQUF1QixFQUFFLDhEQUE4RCx1QkFBdUIsRUFBRSxnREFBZ0QsMkJBQTJCLHdCQUF3QiwrQkFBK0IsOEJBQThCLEVBQUUsc0RBQXNELDBCQUEwQixFQUFFLHFEQUFxRCwyQkFBMkIsa0JBQWtCLG9CQUFvQix5QkFBeUIsdUJBQXVCLEVBQUUsc0NBQXNDLGtDQUFrQywrRUFBK0Usd0JBQXdCLDJCQUEyQix1QkFBdUIsMEJBQTBCLHVCQUF1QixzQkFBc0Isd0VBQXdFLHVCQUF1Qix1QkFBdUIsc0JBQXNCLHVCQUF1Qix3QkFBd0IscUJBQXFCLEVBQUUsNENBQTRDLG9CQUFvQixFQUFFLDhDQUE4Qyx3QkFBd0IseUJBQXlCLG1CQUFtQixFQUFFLDhDQUE4Qyw4QkFBOEIsRUFBRSw4Q0FBOEMsd0JBQXdCLEVBQUUsNENBQTRDLHVCQUF1Qix3QkFBd0IsMkJBQTJCLEVBQUUsZ0RBQWdELDJCQUEyQixFQUFFLDJDQUEyQyxxQ0FBcUMsRUFBRTs7QUFFOWdHOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNGY1Njk0Yzk4OGY5MWNiZTViYSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSb290IGZyb20gJy4vY29tcG9uZW50cy9yb290JztcblxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJ2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuL3V0aWxzL2NsaWVudERCJztcblxuY2xpZW50REIuaW5pdGlhbGl6ZShjb25maWcuZmlyZWJhc2UpO1xuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSb290KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgbWFrZVN0b3JlID0gcmVxdWlyZSgnLi4vcmVkdXgvbWFrZVN0b3JlJyk7XG5cbmNvbnN0IEFwcCA9IHJlcXVpcmUoJy4vYXBwJyk7XG5cbmNsYXNzIFJvb3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdFJlZHV4LlByb3ZpZGVyIHN0b3JlPXttYWtlU3RvcmUoKX0+XG4gICAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9SZWFjdFJlZHV4LlByb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb290O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jvb3QuanN4IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RSZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGVycm9yUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2Vycm9yUmVkdWNlcic7XG5pbXBvcnQgbG9hZGluZ1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlcic7XG5pbXBvcnQgdXNlcnNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvdXNlcnNSZWR1Y2VyJztcbmltcG9ydCBldmVudHNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvZXZlbnRzUmVkdWNlcic7XG5pbXBvcnQgYm9va2luZ3NSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYm9va2luZ3NSZWR1Y2VyJztcbmltcG9ydCBhdXRoRGF0YVJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9hdXRoRGF0YVJlZHVjZXInO1xuXG5jb25zdCByb3V0aW5nUmVkdWNlciA9IHJlcXVpcmUoJy4vcmVkdWNlcnMvcm91dGluZ1JlZHVjZXInKTtcblxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICByb3V0aW5nOiByb3V0aW5nUmVkdWNlcixcbiAgICBhdXRoRGF0YTogYXV0aERhdGFSZWR1Y2VyLFxuICAgIGVycm9yTXNnOiBlcnJvclJlZHVjZXIsXG4gICAgbG9hZGluZzogbG9hZGluZ1JlZHVjZXIsXG4gICAgdXNlcnM6IHVzZXJzUmVkdWNlcixcbiAgICBldmVudHM6IGV2ZW50c1JlZHVjZXIsXG4gICAgYm9va2luZ3M6IGJvb2tpbmdzUmVkdWNlclxuICB9KTtcblxuICBjb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKFxuICAgIHRodW5rXG4gICk7XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB1bmRlZmluZWQsIG1pZGRsZXdhcmUpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvbWFrZVN0b3JlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWR1eDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU1RBUlRfTE9BRElORywgUkVQT1JUX0VSUk9SIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9ICcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcnJvclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUE9SVF9FUlJPUjpcbiAgICAgIHJldHVybiBhY3Rpb24ubWVzc2FnZTtcbiAgICBjYXNlIFNUQVJUX0xPQURJTkc6XG4gICAgICByZXR1cm4gJyc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJleHBvcnQgY29uc3QgU1RBUlRfTE9BRElORyA9ICdTVEFSVF9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBTVE9QX0xPQURJTkcgPSAnU1RPUF9MT0FESU5HJztcblxuZXhwb3J0IGNvbnN0IFJFUE9SVF9FUlJPUiA9ICdSRVBPUlRfRVJST1InO1xuXG5leHBvcnQgY29uc3QgU0VUX0FVVEhfREFUQSA9ICdTRVRfQVVUSF9EQVRBJztcbmV4cG9ydCBjb25zdCBTSUdOX09VVCA9ICdTSUdOX09VVCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSU19SRUNFSVZFRCA9ICdVU0VSU19SRUNFSVZFRCc7XG5leHBvcnQgY29uc3QgVVNFUl9SRU1PVkVEID0gJ1VTRVJfUkVNT1ZFRCc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVFNfUkVDRUlWRUQgPSAnRVZFTlRTX1JFQ0VJVkVEJztcbmV4cG9ydCBjb25zdCBFVkVOVF9SRU1PVkVEID0gJ0VWRU5UX1JFTU9WRUQnO1xuXG5leHBvcnQgY29uc3QgQk9PS0lOR1NfUkVDRUlWRUQgPSAnQk9PS0lOR1NfUkVDRUlWRUQnO1xuZXhwb3J0IGNvbnN0IEJPT0tJTkdfQ0FOQ0VMRUQgPSAnQk9PS0lOR19DQU5DRUxFRCc7XG5cbmV4cG9ydCBjb25zdCBOQVZJR0FURV9UTyA9ICdOQVZJR0FURV9UTyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBTVE9QX0xPQURJTkcgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRpbmdSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTVEFSVF9MT0FESU5HOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSBTVE9QX0xPQURJTkc6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFVTRVJTX1JFQ0VJVkVELCBVU0VSX1JFTU9WRUQsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2Vyc1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVTRVJTX1JFQ0VJVkVEOlxuICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24udXNlcnMpO1xuICAgIGNhc2UgVVNFUl9SRU1PVkVEOlxuICAgICAgcmV0dXJuIF8ub21pdChzdGF0ZSwgYWN0aW9uLnVpZCk7XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJfXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEVWRU5UU19SRUNFSVZFRCwgRVZFTlRfUkVNT1ZFRCwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50c1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEVWRU5UU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLmV2ZW50cyk7XG4gICAgY2FzZSBFVkVOVF9SRU1PVkVEOlxuICAgICAgcmV0dXJuIF8ub21pdChzdGF0ZSwgYWN0aW9uLmV2ZW50SWQpO1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXZlbnRzUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEJPT0tJTkdTX1JFQ0VJVkVELCBCT09LSU5HX0NBTkNFTEVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQk9PS0lOR1NfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi5ib29raW5ncyk7XG4gICAgY2FzZSBCT09LSU5HX0NBTkNFTEVEOiB7XG4gICAgICBjb25zdCBjbG9uZWRCb29raW5ncyA9IF8uY2xvbmVEZWVwKHN0YXRlKTtcbiAgICAgIGRlbGV0ZSBjbG9uZWRCb29raW5nc1thY3Rpb24udWlkXVthY3Rpb24uZXZlbnRJZF07XG4gICAgICBpZiAoXy5zaXplKGNsb25lZEJvb2tpbmdzW2FjdGlvbi51aWRdKSA9PT0gMCkge1xuICAgICAgICBkZWxldGUgY2xvbmVkQm9va2luZ3NbYWN0aW9uLnVpZF07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmVkQm9va2luZ3M7XG4gICAgfVxuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYm9va2luZ3NSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU0VUX0FVVEhfREFUQSwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aERhdGFSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQVVUSF9EQVRBOlxuICAgICAgcmV0dXJuIHsgdWlkOiBhY3Rpb24udWlkLCBlbWFpbDogYWN0aW9uLmVtYWlsLCBwaG90b1VSTDogYWN0aW9uLnBob3RvVVJMLCBpc0FkbWluOiBhY3Rpb24uaXNBZG1pbiB9O1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aERhdGFSZWR1Y2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWR1eFRodW5rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVkdXhUaHVua1wiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gY3JlYXRlUm91dGluZ0RhdGEocGFnZUlkLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHsgcGFnZUlkLCBwYXJhbXM6IHBhcmFtcyB8fCB7fSB9XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY3VycmVudDogY3JlYXRlUm91dGluZ0RhdGEoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQVVUSCwge30pLFxuICBoaXN0b3J5OiBbXG4gICAgY3JlYXRlUm91dGluZ0RhdGEoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQVVUSCwge30pXG4gIF1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN0YXRlID0gc3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xuICBhY3Rpb24gPSBhY3Rpb24gfHwge307XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ05BVklHQVRFX1RPJzoge1xuICAgICAgY29uc3Qgcm91dGluZ0RhdGEgPSBjcmVhdGVSb3V0aW5nRGF0YShhY3Rpb24ucGFnZUlkLCBhY3Rpb24ucGFyYW1zKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudDogcm91dGluZ0RhdGEsXG4gICAgICAgIGhpc3Rvcnk6IHN0YXRlLmhpc3RvcnkuY29uY2F0KFsgcm91dGluZ0RhdGEgXSlcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ05BVklHQVRFX0JBQ0snOiB7XG4gICAgICBpZiAoc3RhdGUuaGlzdG9yeS5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGhpc3RvcnlXaXRob3V0TGFzdCA9IHN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgLTEpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGN1cnJlbnQ6IGhpc3RvcnlXaXRob3V0TGFzdC5zbGljZSgtMSlbMF0sXG4gICAgICAgICAgaGlzdG9yeTogaGlzdG9yeVdpdGhvdXRMYXN0XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnUkVQTEFDRV9ST1VUSU5HJzoge1xuICAgICAgY29uc3QgaGlzdG9yeVdpdGhvdXRMYXN0ID0gc3RhdGUuaGlzdG9yeS5zbGljZSgwLCAtMSk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gY3JlYXRlUm91dGluZ0RhdGEoYWN0aW9uLnBhZ2VJZCB8fCBzdGF0ZS5jdXJyZW50LnBhZ2VJZCwgYWN0aW9uLnBhcmFtcyB8fCBzdGF0ZS5jdXJyZW50LnBhcmFtcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICBoaXN0b3J5OiBoaXN0b3J5V2l0aG91dExhc3QuY29uY2F0KFtjdXJyZW50XSlcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ1JFU0VUX1JPVVRJTkcnOiB7XG4gICAgICBjb25zdCByb3V0aW5nRGF0YSA9IGNyZWF0ZVJvdXRpbmdEYXRhKGFjdGlvbi5wYWdlSWQsIGFjdGlvbi5wYXJhbXMpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiByb3V0aW5nRGF0YSxcbiAgICAgICAgaGlzdG9yeTogWyByb3V0aW5nRGF0YSBdXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvcm91dGluZ1JlZHVjZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgUk9VVElORzoge1xuICAgIFBBR0VTOiB7XG4gICAgICBIT01FOiAnaG9tZScsXG4gICAgICBBVVRIOiAnYXV0aCcsXG4gICAgICBVU0VSUzogJ3VzZXJzJyxcbiAgICAgIEdBTUVTOiAnZ2FtZXMnLFxuICAgICAgQk9PS0lOR1M6ICdib29raW5ncycsXG4gICAgICBESVNUUklCVVRJT046ICdkaXN0cmlidXRpb24nLFxuICAgICAgRURJVF9VU0VSX0lORk86ICdlZGl0VXNlckluZm8nLFxuICAgICAgVVBEQVRFX0JPT0tJTkc6ICd1cGRhdGVCb29raW5nJyxcbiAgICAgIFVQREFURV9HQU1FOiAndXBkYXRlR2FtZSdcbiAgICB9XG4gIH0sXG4gIEdBTUU6IHtcbiAgICBTVEFUVVM6IHtcbiAgICAgIENMT1NFRDogJ2Nsb3NlZCcsXG4gICAgICBPUEVOX0ZPUl9NRU1CRVJTOiAnb3BlbkZvck1lbWJlcnMnLFxuICAgICAgT1BFTl9GT1JfQUxMOiAnb3BlbkZvckFsbCcsXG4gICAgICBGVUxMWV9CT09LRUQ6ICdmdWxseUJvb2tlZCdcbiAgICB9XG4gIH0sXG4gIFVTRVI6IHtcbiAgICBNQVhfU0VBU09OX1RJQ0tFVFM6IDcsXG4gICAgUEhPTkVfUFJFRklYRVM6IFsnMDUwJywgJzA1MicsICcwNTMnLCAnMDU0JywgJzA1NScsICcwNTcnLCAnMDU4J10sXG4gIH0sXG4gIFNUQVRJT05TOiB7XG4gICAgVEVMX0FWSVY6ICd0bHYnLFxuICAgIE1PRElJTjogJ21vZGlpbidcbiAgfSxcbiAgREFURV9BTkRfVElNRToge1xuICAgIGRheXM6IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnLCAnMjQnLCAnMjUnLCAnMjYnLCAnMjcnLCAnMjgnLCAnMjknLCAnMzAnLCAnMzEnXSxcbiAgICBtb250aHM6IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXSxcbiAgICB5ZWFyczogWycxNicsICcxNyddLFxuICAgIGhvdXJzOiBbJzAwJywgJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJ10sXG4gICAgbWludXRlczogWycwMCcsICcwNScsICcxMCcsICcxNScsICcyMCcsICcyNScsICczMCcsICczNScsICc0MCcsICc0NScsICc1MCcsICc1NSddXG4gIH0sXG4gIERJU1RSSUJVVElPTjoge1xuICAgIERJU1RSSUJVVElPTl9NRVRIT0RTOiB7XG4gICAgICBFTUFJTDogJ2VtYWlsJyxcbiAgICAgIFNNUzogJ3NtcydcbiAgICB9LFxuICAgIFJFQ0lQSUVOVFNfVFlQRVM6IHtcbiAgICAgIEFMTDogJ2FsbCcsXG4gICAgICBNRU1CRVJTX09OTFk6ICdtZW1iZXJzT25seScsXG4gICAgICBCT09LRURfVE9fRVZFTlQ6ICdib29rZWRUb0V2ZW50J1xuICAgIH0sXG4gICAgRElTVFJJQlVUSU9OX1RZUEVTOiB7XG4gICAgICBURU1QTEFURTogJ3RlbXBsYXRlJyxcbiAgICAgIENVU1RPTTogJ2N1c3RvbSdcbiAgICB9LFxuICAgIFRFTVBMQVRFUzoge1xuICAgICAgRVZFTlRfT1BFTl9GT1JfTUVNQkVSUzogJzRmYWI2YjkyLWJmNjEtNDhmMS1iMTNiLWJjNzAyZWQ3ODY5NScsXG4gICAgICBFVkVOVF9PUEVOX0ZPUl9BTEw6ICdkYmUzZTBlNC1iYjBlLTQxYWQtYmYxMi01YmU2NGEzMGYzYjcnLFxuICAgICAgQ0hBTkdFX0VWRU5UX0RFVEFJTFM6ICcxNzBmY2Q0Zi1kZjJlLTQ0ZGQtYjc2MC02OTNkMDRmZGQwN2MnXG4gICAgfVxuICB9LFxuICBURUFNUzoge1xuICAgIEhBUE9FTF9KRVJVU0FMRU06IHtcbiAgICAgIGxhYmVsOiAn15TXpNeV16LXnCDXmdeo15XXqdec15nXnScsXG4gICAgICBsb2dvOiAnaHR0cDovL2hhcG9lbC5jby5pbC9zaXRlcy9kZWZhdWx0L2ZpbGVzL2xvZ28xMjB4MTIwLnBuZydcbiAgICB9LFxuICAgICdoYXBvZWwtdGx2Jzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2hhcG9lbHRhLnBuZycsXG4gICAgICBsYWJlbDogJ9eU16TXldei15wg16rXnCDXkNeR15nXkSdcbiAgICB9LFxuICAgICdtYWNjYWJpLXRsdic6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19tYWNjYWJpLnBuZycsXG4gICAgICBsYWJlbDogJ9ee15vXkdeZINeq15wg15DXkdeZ15EnXG4gICAgfSxcbiAgICAnaGVyemVsaXlhJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3NoYXJvbi5wbmcnLFxuICAgICAgbGFiZWw6ICfXkdeg15kg15TXqNem15zXmdeUJ1xuICAgIH0sXG4gICAgJ2tpcnlhdC1nYXQnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvSW1hZ2VzL3RlYW1zL2JpZ0dhdC5wbmcnLFxuICAgICAgbGFiZWw6ICfXnteb15HXmSDXp9eo15nXqiDXkteqJ1xuICAgIH0sXG4gICAgJ2dpbGJvYSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19HYWxpbC5wbmcnLFxuICAgICAgbGFiZWw6ICfXktec15nXnC/Xktec15HXldeiJ1xuICAgIH0sXG4gICAgJ25haGFyaXlhJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX25haGFyaWEucG5nJyxcbiAgICAgIGxhYmVsOiAn16LXmdeo15XXoNeZINeg15TXqNeZ15QnXG4gICAgfSxcbiAgICAnaG9sb24nOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2FydGljbGVzL2xvZ29faGgucG5nJyxcbiAgICAgIGxhYmVsOiAn15TXpNeV16LXnCDXl9eV15zXldefJ1xuICAgIH0sXG4gICAgJ2FzaGRvZCc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19hc2hkb2QucG5nJyxcbiAgICAgIGxhYmVsOiAn157Xm9eR15kg15DXqdeT15XXkydcbiAgICB9LFxuICAgICdoYWlmYSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYWlmYS5wbmcnLFxuICAgICAgbGFiZWw6ICfXnteb15HXmSDXl9eZ16TXlCdcbiAgICB9LFxuICAgICdyaXNob24nOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fcmlzaG9uLnBuZycsXG4gICAgICBsYWJlbDogJ9ee15vXkdeZINeo15DXqdeV158g15zXpteZ15XXnydcbiAgICB9LFxuICAgICdlaWxhdCc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19laWxhdC5wbmcnLFxuICAgICAgbGFiZWw6ICfXlNek15XXotecINeQ15nXnNeqJ1xuICAgIH0sXG4gICAgJ2xqdWJsamFuYSc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzgvOGUvVW5pb25fb2xpbXBpamEucG5nLzE0MHB4LVVuaW9uX29saW1waWphLnBuZycsXG4gICAgICBsYWJlbDogJ9ec15XXkdec15nXkNeg15QnXG4gICAgfSxcbiAgICAndmFsZW5jaWEnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3NhbXZhbnJvc3NvbS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMTAvdmFsZW5jaWEtYmFza2V0MS1sb2dvLmpwZycsXG4gICAgICBsYWJlbDogJ9eV15zXoNeh15nXlCdcbiAgICB9LFxuICAgICdrdWJhbic6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzAvMDQvTG9rb21vdGl2X0t1YmFuX2xvZ28ucG5nLzIwMHB4LUxva29tb3Rpdl9LdWJhbl9sb2dvLnBuZycsXG4gICAgICBsYWJlbDogJ9ec15XXp9eV157XldeY15nXkSDXp9eV15HXkNefJ1xuICAgIH0sXG4gICAgJ2Z1ZW5sYWJyYWRhJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xMy9CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnLzExMHB4LUJhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcnLFxuICAgICAgbGFiZWw6ICfXpNeV15DXoNec15HXqNeT15QnXG4gICAgfSxcbiAgICAndWxtJzoge1xuICAgICAgbG9nbzogJ2h0dHA6Ly9uYWNod3VjaHMuYmJ1MDEuY29tL21vZHVsZXMvbW9kX2JidW5ld3NmbGFzaC9hc3NldHMvaW1hZ2VzL25vaW1hZ2VfdGh1bWIuanBnJyxcbiAgICAgIGxhYmVsOiAn15DXldec150nXG4gICAgfSxcbiAgICAndmlsbmEnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi83Lzc1L0JDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLzkwN3B4LUJDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLnBuZycsXG4gICAgICBsYWJlbDogJ9eo15nXmNeQ16Eg15XXmdec16DXlCdcbiAgICB9LFxuICAgICdub3Znb3JvZCc6IHtcbiAgICAgIGxvZ286ICdodHRwOi8vb2x5bXBpYWtvcy1saXZlLmdyL2ltZy90ZWFtcy9OaXpobnklMjBOb3Znb3JvZC5wbmcnLFxuICAgICAgbGFiZWw6ICfXoNeZ15bXs9eg15knXG4gICAgfSxcbiAgICAnemVuaXQnOiB7XG4gICAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjUvRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcvMjIwcHgtRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcnLFxuICAgICAgbGFiZWw6ICfXlteg15nXmCdcbiAgICB9XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmV1ZHggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBhdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMnKTtcbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuXG5jb25zdCBTcGlubmVyID0gcmVxdWlyZSgnLi9zcGlubmVyJyk7XG5jb25zdCBUb3BCYXIgPSByZXF1aXJlKCcuL3RvcEJhcicpO1xuY29uc3QgQXV0aFBhZ2UgPSByZXF1aXJlKCcuL2F1dGhQYWdlJyk7XG5jb25zdCBIb21lUGFnZSA9IHJlcXVpcmUoJy4vaG9tZVBhZ2UnKTtcbmNvbnN0IFVzZXJzUGFnZSA9IHJlcXVpcmUoJy4vdXNlcnNQYWdlJyk7XG5jb25zdCBHYW1lc1BhZ2UgPSByZXF1aXJlKCcuL2dhbWVzUGFnZScpO1xuY29uc3QgQm9va2luZ3NQYWdlID0gcmVxdWlyZSgnLi9ib29raW5nc1BhZ2UnKTtcbmNvbnN0IERpc3RyaWJ1dGlvblBhZ2UgPSByZXF1aXJlKCcuL2Rpc3RyaWJ1dGlvblBhZ2UnKTtcbmNvbnN0IEVkaXRVc2VySW5mb1BhZ2UgPSByZXF1aXJlKCcuL2VkaXRVc2VySW5mb1BhZ2UnKTtcbmNvbnN0IFVwZGF0ZUJvb2tpbmdQYWdlID0gcmVxdWlyZSgnLi91cGRhdGVCb29raW5nUGFnZScpO1xuY29uc3QgVXBkYXRlR2FtZVBhZ2UgPSByZXF1aXJlKCcuL3VwZGF0ZUdhbWVQYWdlJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9hcHAuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhdXRoRGF0YTogc3RhdGUuYXV0aERhdGEsXG4gICAgICAgIGN1cnJlbnRQYWdlSWQ6IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYWdlSWRcbiAgICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gICAgZmV0Y2hBdXRoRGF0YTogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMuZmV0Y2hBdXRoRGF0YSgpKVxufSk7XG5cbmZ1bmN0aW9uIGdldFBhZ2VDb21wb25lbnQoY3VycmVudFBhZ2VJZCkge1xuICAgIHN3aXRjaCAoY3VycmVudFBhZ2VJZCkge1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkhPTUU6XG4gICAgICAgICAgICByZXR1cm4gKCA8SG9tZVBhZ2Uga2V5PSdob21lLXBhZ2UnIC8+ICk7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVNFUlM6XG4gICAgICAgICAgICByZXR1cm4gKCA8VXNlcnNQYWdlIGtleT0ndXNlcnMtcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5HQU1FUzpcbiAgICAgICAgICAgIHJldHVybiAoIDxHYW1lc1BhZ2Uga2V5PSdnYW1lcy1wYWdlJyAvPiApO1xuICAgICAgICBjYXNlIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkJPT0tJTkdTOlxuICAgICAgICAgICAgcmV0dXJuICggPEJvb2tpbmdzUGFnZSBrZXk9J2Jvb2tpbmdzLXBhZ2UnIC8+ICk7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRElTVFJJQlVUSU9OOlxuICAgICAgICAgICAgcmV0dXJuICggPERpc3RyaWJ1dGlvblBhZ2Uga2V5PSdkaXN0cmlidXRpb24tcGFnZScgLz4gKTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuUk9VVElORy5QQUdFUy5FRElUX1VTRVJfSU5GTzpcbiAgICAgICAgICAgIHJldHVybiAoIDxFZGl0VXNlckluZm9QYWdlIGtleT0nZWRpdFVzZXJJbmZvLXBhZ2UnIC8+ICk7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVBEQVRFX0JPT0tJTkc6XG4gICAgICAgICAgICByZXR1cm4gKCA8VXBkYXRlQm9va2luZ1BhZ2Uga2V5PSd1cGRhdGVCb29raW5nLXBhZ2UnIC8+ICk7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVBEQVRFX0dBTUU6XG4gICAgICAgICAgICByZXR1cm4gKCA8VXBkYXRlR2FtZVBhZ2Uga2V5PSd1cGRhdGVHYW1lLXBhZ2UnIC8+ICk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYWdlVG9SZW5kZXIoYXV0aERhdGEsIGN1cnJlbnRQYWdlSWQpIHtcbiAgICBpZiAoIWF1dGhEYXRhKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxBdXRoUGFnZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUb3BCYXIgLz5cbiAgICAgICAgICAgIHsgZ2V0UGFnZUNvbXBvbmVudChjdXJyZW50UGFnZUlkKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmZldGNoQXV0aERhdGEoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUgbGFyZ2UtNiBzbWFsbC0xMiBzbWFsbC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgeyBnZXRQYWdlVG9SZW5kZXIodGhpcy5wcm9wcy5hdXRoRGF0YSwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZUlkKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gICAgYXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgY3VycmVudFBhZ2VJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGZldGNoQXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZXVkeC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC5qc3giLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNFVF9BVVRIX0RBVEEsIFNJR05fT1VUIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmltcG9ydCB7IFByb21pc2UgfSBmcm9tICdibHVlYmlyZCc7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIHVzZXJBY3Rpb25zIGZyb20gJy4vdXNlckFjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXZlbnRBY3Rpb25zIGZyb20gJy4vZXZlbnRBY3Rpb25zJztcbmltcG9ydCAqIGFzIGJvb2tpbmdBY3Rpb25zIGZyb20gJy4vYm9va2luZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbkFjdGlvbnMgZnJvbSAnLi9yb3V0aW5nQWN0aW9ucyc7XG5cbmltcG9ydCB1cGRhdGVQaG90b1VybEZpeGVyIGZyb20gJy4uLy4uL2RhdGFGaXhlcnMvdXBkYXRlUGhvdG9VcmxGaXhlcic7XG5cbmV4cG9ydCBjb25zdCBBVVRIX0VSUk9SX0NPREVTX01BUCA9IHtcbiAgJ2F1dGgvaW52YWxpZC1lbWFpbCc6IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILklOVkFMSURfRU1BSUwsXG4gICdhdXRoL3dlYWstcGFzc3dvcmQnOiBUcmFuc2xhdGlvbnMuRVJST1JfTUVTU0FHRVMuQVVUSC5XRUFLX1BBU1NXT1JELFxuICAnYXV0aC9lbWFpbC1hbHJlYWR5LWluLXVzZSc6IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILkVNQUlMX0lOX1VTRSxcbiAgJ2F1dGgvd3JvbmctcGFzc3dvcmQnOiBUcmFuc2xhdGlvbnMuRVJST1JfTUVTU0FHRVMuQVVUSC5XUk9OR19QQVNTV09SRCxcbiAgJ2F1dGgvYWNjb3VudC1leGlzdHMtd2l0aC1kaWZmZXJlbnQtY3JlZGVudGlhbCc6IFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILkVNQUlMX0lOX1VTRSxcbiAgJ2F1dGgvdXNlci1ub3QtZm91bmQnOiBUcmFuc2xhdGlvbnMuRVJST1JfTUVTU0FHRVMuQVVUSC5VU0VSX05PVF9GT1VORFxufTtcblxuZXhwb3J0IGNvbnN0IHNldEF1dGhEYXRhID0gKHVpZCwgZW1haWwsIHBob3RvVVJMLCBpc0FkbWluKSA9PiAoe1xuICB0eXBlOiBTRVRfQVVUSF9EQVRBLFxuICB1aWQsXG4gIGVtYWlsLFxuICBwaG90b1VSTCxcbiAgaXNBZG1pblxufSk7XG5cbmNvbnN0IGZldGNoQXBwRGF0YSA9IChkaXNwYXRjaCwgdXNlcikgPT5cbiAgY2xpZW50REIucmVhZCgnYWRtaW5zLycgKyB1c2VyLnVpZClcbiAgICAudGhlbihpc0FkbWluID0+IGRpc3BhdGNoKHNldEF1dGhEYXRhKHVzZXIudWlkLCB1c2VyLmVtYWlsLCBfLmdldCh1c2VyLCBbJ3Byb3ZpZGVyRGF0YScsIDAsICdwaG90b1VSTCddKSwgISFpc0FkbWluKSkpXG4gICAgLnRoZW4oKCkgPT4gUHJvbWlzZS5hbGwoW1xuICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuZmV0Y2hVc2VycygpKSxcbiAgICAgIGRpc3BhdGNoKGV2ZW50QWN0aW9ucy5mZXRjaEV2ZW50cygpKSxcbiAgICAgIGRpc3BhdGNoKGJvb2tpbmdBY3Rpb25zLmZldGNoQm9va2luZ3MoKSlcbiAgICBdKSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyU2lnbmVkT3V0ID0gKCkgPT4gKHtcbiAgdHlwZTogU0lHTl9PVVRcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5zaWduT3V0KClcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaCh1c2VyU2lnbmVkT3V0KCkpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLnJlc2V0KENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkFVVEgpKSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhGYWNlYm9vayA9ICgpID0+ICgpID0+IGNsaWVudERCLmxvZ2luV2l0aEZhY2Vib29rKCk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhHb29nbGUgPSAoKSA9PiAoKSA9PiBjbGllbnREQi5sb2dpbldpdGhHb29nbGUoKTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIubG9naW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4odXNlciA9PiBmZXRjaEFwcERhdGEoZGlzcGF0Y2gsIHVzZXIpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLnJlc2V0KENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkhPTUUpKSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbih1c2VyID0+IGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcikpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMucmVzZXQoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRURJVF9VU0VSX0lORk8pKSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gZW1haWwgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdXRoRGF0YSA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5nZXRMb2dnZWRJblVzZXIoKVxuICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcilcbiAgICAgICAgICAudGhlbigoKSA9PiB1cGRhdGVQaG90b1VybEZpeGVyKGRpc3BhdGNoLCBnZXRTdGF0ZSgpKSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IGdldFN0YXRlKCkudXNlcnNbdXNlci51aWRdO1xuICAgICAgICAgICAgaWYgKF8uaXNFbXB0eSh1c2VySW5mbykpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMucmVzZXQoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRURJVF9VU0VSX0lORk8sIHsgdWlkOiB1c2VyLnVpZCB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5yZXNldChDb25zdGFudHMuUk9VVElORy5QQUdFUy5IT01FKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KVxuICAgIC5jYXRjaChkYkVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZGJFcnJvcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKVxuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsIm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlByb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCB7IFByb21pc2UgfSBmcm9tICdibHVlYmlyZCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gY29uZmlnID0+IHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEluID0gKHBhdGgsIGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkuc2V0KGRhdGEpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVhZCA9IHBhdGggPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5vbmNlKCd2YWx1ZScpXG4gICAgLnRoZW4oc25hcHNob3QgPT4gcmVzb2x2ZShzbmFwc2hvdC52YWwoKSkpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHB1c2ggPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBjb25zdCB1bmlxdWVLZXkgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5wdXNoKCkua2V5O1xuICBzZXRJbihwYXRoICsgJy8nICsgdW5pcXVlS2V5LCBkYXRhKVxuICAgIC50aGVuKCgpID0+IHJlc29sdmUodW5pcXVlS2V5KSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlID0gKHBhdGgsIGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkudXBkYXRlKGRhdGEpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gcGF0aCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnJlbW92ZSgpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoR29vZ2xlID0gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUmVkaXJlY3QocHJvdmlkZXIpXG4gICAgLnRoZW4ocmVzb2x2ZSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEZhY2Vib29rID0gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIoKTtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChwcm92aWRlcilcbiAgICAudGhlbihyZXNvbHZlKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gZW1haWwgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ25PdXQgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2dnZWRJblVzZXIgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5nZXRSZWRpcmVjdFJlc3VsdCgpXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQudXNlcikge1xuICAgICAgICByZXNvbHZlKHJlc3VsdC51c2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9uQXV0aFN0YXRlQ2hhbmdlID0gdXNlciA9PiB7XG4gICAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyKG9uQXV0aFN0YXRlQ2hhbmdlKTtcbiAgICAgICAgICByZXNvbHZlKHVzZXIpO1xuICAgICAgICB9O1xuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKG9uQXV0aFN0YXRlQ2hhbmdlKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NsaWVudERCLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmaXJlYmFzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZpcmViYXNlXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgVVNFUlNfUkVDRUlWRUQsIFVTRVJfUkVNT1ZFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBVU0VSX0lORk9fS0VZUyA9IFsnZW1haWwnLCAnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ3Bob25lUHJlZml4JywgJ3Bob25lTnVtYmVyJywgJ3JlcXVlc3RGb3JNZW1iZXJzaGlwJywgJ3N0YXRpb24nLCAnc3Vic2NyaWJlU01TJywgJ3N1YnNjcmliZU1haWwnLCAncGhvdG9VUkwnXTtcbmNvbnN0IFBBVEhfTUFQID0ge1xuICBVU0VSU19JTkZPOiAndXNlcnNJbmZvJyxcbiAgU0VBU09OX1RJQ0tFVFM6ICdzZWFzb25UaWNrZXRzJyxcbiAgQk9PS0lOR1M6ICdib29raW5ncydcbn07XG5cbmNvbnN0IGJ1aWxkVXNlciA9ICh1c2VySW5mbywgc2Vhc29uVGlja2V0cykgPT4ge1xuICBjb25zdCB1c2VyID0gXy5tZXJnZSh7fSwgdXNlckluZm8pO1xuICBpZiAoc2Vhc29uVGlja2V0cykge1xuICAgIF8ubWVyZ2UodXNlciwgeyBzZWFzb25UaWNrZXRzIH0pO1xuICB9XG4gIHJldHVybiB1c2VyO1xufTtcblxuY29uc3QgZmV0Y2hBbGxVc2VycyA9ICgpID0+IHtcbiAgY29uc3QgdXNlclJlYWRQcm9taXNlcyA9IFtcbiAgICBjbGllbnREQi5yZWFkKFBBVEhfTUFQLlVTRVJTX0lORk8pLFxuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuU0VBU09OX1RJQ0tFVFMpXG4gIF07XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHVzZXJSZWFkUHJvbWlzZXMpXG4gICAgLnRoZW4oKFt1c2Vyc0luZm8sIHNlYXNvblRpY2tldHNdKSA9PlxuICAgICAgXy50cmFuc2Zvcm0odXNlcnNJbmZvLCAoYWNjLCBpbmZvLCB1aWQpID0+IHtcbiAgICAgICAgYWNjW3VpZF0gPSBidWlsZFVzZXIoaW5mbywgc2Vhc29uVGlja2V0cyAmJiBzZWFzb25UaWNrZXRzW3VpZF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB9LCB7fSlcbiAgICApO1xufTtcblxuY29uc3QgZmV0Y2hTaW5nbGVVc2VyID0gdWlkID0+IHtcbiAgY29uc3QgdXNlclJlYWRQcm9taXNlcyA9IFtcbiAgICBjbGllbnREQi5yZWFkKFBBVEhfTUFQLlVTRVJTX0lORk8gKyAnLycgKyB1aWQpLFxuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuU0VBU09OX1RJQ0tFVFMgKyAnLycgKyB1aWQpXG4gIF07XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHVzZXJSZWFkUHJvbWlzZXMpXG4gICAgLnRoZW4oKFt1c2VySW5mbywgc2Vhc29uVGlja2V0c10pID0+IHtcbiAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICByZXR1cm4geyBbdWlkXTogYnVpbGRVc2VyKHVzZXJJbmZvLCBzZWFzb25UaWNrZXRzKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlcnNSZW1vdmVkID0gdWlkID0+ICh7XG4gIHR5cGU6IFVTRVJfUkVNT1ZFRCxcbiAgdWlkXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZXJzUmVjZWl2ZWQgPSB1c2VycyA9PiAoe1xuICB0eXBlOiBVU0VSU19SRUNFSVZFRCxcbiAgdXNlcnNcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3QgdWlkID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICd1aWQnXSk7XG4gIGNvbnN0IGlzQWRtaW4gPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ2lzQWRtaW4nXSk7XG4gIGNvbnN0IGZldGNoUHJvbWlzZSA9IGlzQWRtaW4gPyBmZXRjaEFsbFVzZXJzKCkgOiBmZXRjaFNpbmdsZVVzZXIodWlkKTtcblxuICByZXR1cm4gZmV0Y2hQcm9taXNlXG4gICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgaWYgKHVzZXJzKSB7XG4gICAgICAgIGRpc3BhdGNoKHVzZXJzUmVjZWl2ZWQodXNlcnMpKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKHVpZCwgdXNlcikgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgaXNBZG1pbiA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAnaXNBZG1pbiddKTtcblxuICBjb25zdCB1c2VyVXBkYXRlUHJvbWlzZXMgPSBbXG4gICAgY2xpZW50REIudXBkYXRlKCd1c2Vyc0luZm8vJyArIHVpZCwgXy5waWNrKHVzZXIsIFVTRVJfSU5GT19LRVlTKSlcbiAgXTtcblxuICBpZiAoaXNBZG1pbiAmJiBfLmhhcyh1c2VyLCAnc2Vhc29uVGlja2V0cycpKSB7XG4gICAgdXNlclVwZGF0ZVByb21pc2VzLnB1c2goY2xpZW50REIuc2V0SW4oJ3NlYXNvblRpY2tldHMvJyArIHVpZCwgdXNlci5zZWFzb25UaWNrZXRzKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclVwZGF0ZVByb21pc2VzKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJzUmVjZWl2ZWQoeyBbdWlkXTogdXNlciB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlVXNlciA9IHVpZCA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCB1c2VyUmVtb3ZlUHJvbWlzZXMgPSBfLm1hcChQQVRIX01BUCwgdXNlclBhdGggPT4gY2xpZW50REIucmVtb3ZlKGAke3VzZXJQYXRofS8ke3VpZH1gKSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHVzZXJSZW1vdmVQcm9taXNlcylcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaCh1c2Vyc1JlbW92ZWQodWlkKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwiaW1wb3J0IHsgU1RBUlRfTE9BRElORywgU1RPUF9MT0FESU5HIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmV4cG9ydCBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiAoe1xuICB0eXBlOiBTVEFSVF9MT0FESU5HXG59KTtcblxuZXhwb3J0IGNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4gKHtcbiAgdHlwZTogU1RPUF9MT0FESU5HXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9sb2FkaW5nQWN0aW9ucy5qcyIsImltcG9ydCB7IFJFUE9SVF9FUlJPUiB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmV4cG9ydCBjb25zdCByZXBvcnRFcnJvciA9IChtZXNzYWdlID0gVHJhbnNsYXRpb25zLkVSUk9SX01FU1NBR0VTLkdFTkVSQUwpID0+ICh7XG4gIHR5cGU6IFJFUE9SVF9FUlJPUixcbiAgbWVzc2FnZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwiY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJPVVRJTkc6IHtcbiAgICBQQUdFUzoge1xuICAgICAgW0NvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkhPTUVdOiAn15PXoyDXlNeR15nXqicsXG4gICAgICBbQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVNFUlNdOiAn157Xqdeq157XqdeZ150nLFxuICAgICAgW0NvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkdBTUVTXTogJ9ee16nXl9en15nXnScsXG4gICAgICBbQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQk9PS0lOR1NdOiAn16jXqdeV157XmdedINec15TXodei15XXqicsXG4gICAgICBbQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRElTVFJJQlVUSU9OXTogJ9eo16nXmdee16og16rXpNeV16bXlCcsXG4gICAgfVxuICB9LFxuICBTVEFUSU9OUzoge1xuICAgIFtDb25zdGFudHMuU1RBVElPTlMuVEVMX0FWSVZdOiAn16rXnCDXkNeR15nXkScsXG4gICAgW0NvbnN0YW50cy5TVEFUSU9OUy5NT0RJSU5dOiAn16bXldee16og16nXmdec16onXG4gIH0sXG4gIEdBTUU6IHtcbiAgICBTVEFUVVM6IHtcbiAgICAgIFtDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEXTogJ9eU15TXqNep157XlCDXodeS15XXqNeUJyxcbiAgICAgIFtDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfTUVNQkVSU106ICfXlNeU16jXqdee15Qg16TXqteV15fXlCDXnNee16DXldeZ15nXnScsXG4gICAgICBbQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX0FMTF06ICfXlNeU16jXqdee15Qg16TXqteV15fXlCDXnNeb15XXnNedJyxcbiAgICAgIFtDb25zdGFudHMuR0FNRS5TVEFUVVMuRlVMTFlfQk9PS0VEXTogJ9eU15TXodei15Qg157XnNeQ15QnLFxuICAgIH1cbiAgfSxcbiAgR0FNRV9JVEVNOiB7XG4gICAgQk9PSzogJ9eU16jXqdedJyxcbiAgICBFRElUX0JPT0tJTkc6ICfXoteo15XXmicsXG4gICAgQ0FOQ0VMX0JPT0tJTkc6ICfXkdeY15wg15TXqNep157XlCdcbiAgfSxcbiAgVVNFUlNfUEFHRToge1xuICAgIFRJVExFOiAn157Xqdeq157XqdeZ150nLFxuICAgIE5PX1VTRVJTX0ZPVU5EOiAn15zXkCDXoNee16bXkNeVINeo16nXldee15XXqicsXG4gICAgRklMVEVSOiB7XG4gICAgICBTRUFSQ0g6ICfXl9eZ16TXldepJyxcbiAgICAgIFRBQlM6IHtcbiAgICAgICAgQUxMOiAn15vXldec150nLFxuICAgICAgICBNRU1CRVJTOiAn157XoNeV15nXmdedJyxcbiAgICAgICAgUkVRVUVTVFM6ICfXkden16nXlCDXnNee16DXldeZJyxcbiAgICAgICAgTk9OX01FTUJFUlM6ICfXl9eTINek16LXnteZ15nXnSdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIEFVVEhfUEFHRToge1xuICAgIEZJRUxEUzoge1xuICAgICAgRU1BSUw6ICfXk9eV15DXqCDXkNec16fXmNeo15XXoNeZJyxcbiAgICAgIFBBU1NXT1JEOiAn16HXmdeh157XkCcsXG4gICAgICBQQVNTV09SRF9BR0FJTjogJ9ep15XXkSDXodeZ16HXnteQJ1xuICAgIH0sXG4gICAgU1VCTUlUX0JUTjoge1xuICAgICAgTE9HSU46ICfXlNeq15fXkdeoJyxcbiAgICAgIFJFR0lTVEVSOiAn15TXmdeo16nXnScsXG4gICAgICBGT1JHT1RfUEFTU1dPUkQ6ICfXqdec15cg15zXmdeg16cg15zXkNeZ16TXldehINeh15nXodee15AnXG4gICAgfSxcbiAgICBMSU5LUzoge1xuICAgICAgR09fVE9fTE9HSU46ICfXmdepINec15og15fXqdeR15XXnz8nLFxuICAgICAgR09fVE9fUkVHSVNURVI6ICfXkNeZ158g15zXmiDXl9ep15HXldefPycsXG4gICAgICBHT19UT19GT1JHT1RfUEFTU1dPUkQ6ICfXqdeb15fXqiDXodeZ16HXnteQPydcbiAgICB9LFxuICAgIEVSUk9SUzoge1xuICAgICAgTk9UX1NBTUVfUEFTU1dPUkQ6ICfXodeZ16HXnteQ15XXqiDXpteo15nXm9eV16og15zXlNeZ15XXqiDXlteU15XXqidcbiAgICB9XG4gIH0sXG4gIEhPTUVfUEFHRToge1xuICAgIE5PX09QRU5fR0FNRVM6ICfXkNeZ158g15TXodei15XXqiDXpNeq15XXl9eV16onLFxuICAgIE9QRU5fR0FNRVM6ICfXlNeh16LXldeqINek16rXldeX15XXqicsXG4gICAgQ0xPU0VEX0dBTUVTOiAn15TXlNeh16LXldeqINeU15HXkNeV16onXG4gIH0sXG4gIFVQREFURV9VU0VSX0lORk9fUEFHRToge1xuICAgIFRJVExFOiAn16TXqNeY15nXnSDXkNeZ16nXmdeZ150nLFxuICAgIEZJUlNUX05BTUU6ICfXqdedJyxcbiAgICBMQVNUX05BTUU6ICfXqdedINee16nXpNeX15QnLFxuICAgIEVNQUlMOiAn15PXldeQ16gg15DXnNen15jXqNeV16DXmScsXG4gICAgUEhPTkVfUFJFRklYOiAn16fXmdeT15XXnteqJyxcbiAgICBQSE9ORV9OVU1CRVI6ICfXmNec16TXldefINeg15nXmdeTJyxcbiAgICBGQVZPUklURV9QSUNLVVBfU1RBVElPTjogJ9eq15fXoNeqINei15zXmdeUINee15XXoteT16TXqicsXG4gICAgUkVRVUVTVF9GT1JfTUVNQkVSU0hJUDogJ9ee16LXldeg15nXmdefINeR157XoNeV15k/JyxcbiAgICBESVNUUklCVVRJT046IHtcbiAgICAgIEVNQUlMOiAn16rXpNeV16bXqiDXkNeZ157XmdeZ15wnLFxuICAgICAgU01TOiAn16rXpNeV16bXqiBTTVMnXG4gICAgfSxcbiAgICBUT0dHTEU6IHtcbiAgICAgIFlFUzogJ9eb158nLFxuICAgICAgTk86ICfXnNeQJ1xuICAgIH1cbiAgfSxcbiAgVVBEQVRFX0JPT0tJTkdfUEFHRToge1xuICAgIFRJVExFOiAn16LXqNeZ15vXqiDXlNeo16nXnteUJyxcbiAgICBQQUlEX1NFQVRTOiAn15vXnteV16og157XoNeV15nXmdedJyxcbiAgICBFWFRSQV9TRUFUUzogJ9eg15XXodei15nXnSDXkdeq16nXnNeV150nLFxuICAgIFBJQ0tVUF9UT0dHTEU6ICfXlNec15XXmicsXG4gICAgRFJPUE9GRl9UT0dHTEU6ICfXl9eW15XXqCcsXG4gICAgUElDS1VQX1NUQVRJT05fRFJPUERPV05fREVGQVVMVDogJ9eR15fXqCdcbiAgfSxcbiAgR0FNRVNfUEFHRToge1xuICAgIFRJVExFOiAn157XqdeX16fXmdedJyxcbiAgICBUQUJTOiB7XG4gICAgICBBTEw6ICfXm9eV15zXnScsXG4gICAgICBPUEVOOiAn16TXqteV15fXmdedJyxcbiAgICAgIENMT1NFRDogJ9eh15LXldeo15nXnSdcbiAgICB9LFxuICAgIE5PX0dBTUVTX0xBQkVMOiAn15zXkCDXoNee16bXkNeVINee16nXl9en15nXnSdcbiAgfSxcbiAgQk9PS0lOR1NfUEFHRToge1xuICAgIFRJVExFOiAn16jXqdeV157XmdedINec15TXodei15QnLFxuICAgIFRBQlM6IHtcbiAgICAgIFBJQ0tVUDogJ9eU15zXldeaJyxcbiAgICAgIERST1BPRkY6ICfXl9eW15XXqCdcbiAgICB9XG4gIH0sXG4gIFVQREFURV9HQU1FX1BBR0U6IHtcbiAgICBUSVRMRTogJ9eU16jXqdee15Qg15zXlNeh16LXlCcsXG4gICAgR0FNRV9MQUJFTDogJ9ep150g15TXntep15fXpycsXG4gICAgR0FNRV9QTEFDRUhPTERFUjogJ9eR15fXqCDXntep15fXpycsXG4gICAgREFURV9MQUJFTDogJ9eq15DXqNeZ15onLFxuICAgIFRJTUU6ICfXqdei15QnLFxuICAgIEdBTUVfU1RBVFVTOiAn16HXmNeY15XXoSDXlNeh16LXlCdcbiAgfSxcbiAgRElTVFJJQlVUSU9OX1BBR0U6IHtcbiAgICBUSVRMRTogJ9eo16nXmdee16og16rXpNeV16bXlCcsXG4gICAgRElTVFJJQlVUSU9OX01FVEhPRDoge1xuICAgICAgVElUTEU6ICfXqdec15nXl9eUINeR15DXntem16LXldeqJyxcbiAgICAgIEVNQUlMOiAn15DXmdee15nXmdecJyxcbiAgICAgIFNNUzogJ9eh157XoSdcbiAgICB9LFxuICAgIFJFQ0lQSUVOVFNfVFlQRVM6IHtcbiAgICAgIFRJVExFOiAn16nXnNeXINeQ15wnLFxuICAgICAgQUxMOiAn15vXldec150nLFxuICAgICAgTUVNQkVSU19PTkxZOiAn157XoNeV15nXmdedINeR15zXkdeTJyxcbiAgICAgIEJPT0tFRF9UT19FVkVOVDogJ9eo16nXldee15nXnSDXnNeU16HXoteUJ1xuICAgIH0sXG4gICAgRElTVFJJQlVUSU9OX1RZUEVTOiB7XG4gICAgICBUSVRMRTogJ9em15XXqNeqINep15zXmdeX15QnLFxuICAgICAgVEVNUExBVEU6ICfXqteR16DXmdeqJyxcbiAgICAgIENVU1RPTTogJ9eY16fXodeYINeX15XXpNep15knXG4gICAgfSxcbiAgICBURU1QTEFURVM6IHtcbiAgICAgIFRJVExFOiAn15HXl9eZ16jXqiDXqteR16DXmdeqJyxcbiAgICAgIEVWRU5UX09QRU5fRk9SX01FTUJFUlM6ICfXpNeq15nXl9eqINeU16jXqdee15Qg15zXnteg15XXmdeZ150nLFxuICAgICAgRVZFTlRfT1BFTl9GT1JfQUxMOiAn16TXqteZ15fXqiDXlNeo16nXnteUINec15vXldec150nLFxuICAgICAgQ0hBTkdFX0VWRU5UX0RFVEFJTFM6ICfXqdeZ16DXldeZINeR16TXqNeY15kg15TXlNeh16LXlCdcbiAgICB9LFxuICAgIEdBTUVTOiB7XG4gICAgICBUSVRMRTogJ9eR15fXmdeo16og157XqdeX16cnXG4gICAgfSxcbiAgICBDVVNUT006IHtcbiAgICAgIFRJVExFOiB7XG4gICAgICAgIFRJVExFOiAn16DXldep15AnXG4gICAgICB9LFxuICAgICAgQ09OVEVOVDoge1xuICAgICAgICBUSVRMRTogJydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIEZPUk1fRlJBTUU6IHtcbiAgICBTVUJNSVQ6ICfXqdee15XXqCcsXG4gICAgUkVNT1ZFOiAn157Xl9enJ1xuICB9LFxuICBFUlJPUl9NRVNTQUdFUzoge1xuICAgIEdFTkVSQUw6ICfXqdeS15nXkNeqINee16LXqNeb16onLFxuICAgIEFVVEg6IHtcbiAgICAgIElOVkFMSURfRU1BSUw6ICfXkNeZ157XmdeZ15wg15zXkCDXqten15nXnycsXG4gICAgICBXRUFLX1BBU1NXT1JEOiAn15TXodeZ16HXnteQINem16jXmdeb15Qg15zXlNeb15nXnCDXnNek15fXldeqIDYg16rXldeV15nXnScsXG4gICAgICBFTUFJTF9JTl9VU0U6ICfXkNeZ157XmdeZ15wg15HXqdeZ157XldepJyxcbiAgICAgIFdST05HX1BBU1NXT1JEOiAn16HXmdeh157XkCDXnNeQINeg15vXldeg15QnLFxuICAgICAgTk9UX1NBTUVfUEFTU1dPUkQ6ICfXlNeh15nXodee15DXldeqINem16jXmdeb15XXqiDXnNeU15nXldeqINeW15TXldeqJyxcbiAgICAgIFVTRVJfTk9UX0ZPVU5EOiAn15vXqteV15HXqiDXlNeQ15nXnteZ15nXnCDXnNeQINeg157XpteQ15QnXG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3RyYW5zbGF0aW9ucy5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgRVZFTlRTX1JFQ0VJVkVELCBFVkVOVF9SRU1PVkVEIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcblxuY29uc3QgRVZFTlRfS0VZUyA9IFsndHlwZUlkJywgJ2RheScsICdtb250aCcsICd5ZWFyJywgJ2hvdXInLCAnbWludXRlJywgJ3N0YXR1cyddO1xuY29uc3QgRVZFTlRTX1BBVEggPSAnZXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IGV2ZW50UmVtb3ZlZCA9IGV2ZW50SWQgPT4gKHtcbiAgdHlwZTogRVZFTlRfUkVNT1ZFRCxcbiAgZXZlbnRJZFxufSk7XG5cbmV4cG9ydCBjb25zdCBldmVudHNSZWNlaXZlZCA9IGV2ZW50cyA9PiAoe1xuICB0eXBlOiBFVkVOVFNfUkVDRUlWRUQsXG4gIGV2ZW50c1xufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEV2ZW50cyA9ICgpID0+IGRpc3BhdGNoID0+XG4gIGNsaWVudERCLnJlYWQoRVZFTlRTX1BBVEgpXG4gICAgLnRoZW4oZXZlbnRzID0+IHtcbiAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKGV2ZW50c1JlY2VpdmVkKGV2ZW50cykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFdmVudCA9IGV2ZW50ID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKEVWRU5UU19QQVRILCBldmVudClcbiAgICAudGhlbihldmVudElkID0+IGRpc3BhdGNoKGV2ZW50c1JlY2VpdmVkKHsgW2V2ZW50SWRdOiBldmVudCB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRXZlbnQgPSAoZXZlbnRJZCwgZXZlbnQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IGV2ZW50VG9VcGRhdGUgPSBfLnBpY2soZXZlbnQsIEVWRU5UX0tFWVMpO1xuXG4gIHJldHVybiBjbGllbnREQi51cGRhdGUoJ2V2ZW50cy8nICsgZXZlbnRJZCwgZXZlbnRUb1VwZGF0ZSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChldmVudHNSZWNlaXZlZCh7IFtldmVudElkXTogZXZlbnRUb1VwZGF0ZSB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRXZlbnQgPSBldmVudElkID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5yZW1vdmUoYCR7RVZFTlRTX1BBVEh9LyR7ZXZlbnRJZH1gKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGV2ZW50UmVtb3ZlZChldmVudElkKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucy5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQk9PS0lOR1NfUkVDRUlWRUQsIEJPT0tJTkdfQ0FOQ0VMRUQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBCT09LSU5HX0RBVEFfS0VZUyA9IFsncGFpZFNlYXRzJywgJ2V4dHJhU2VhdHMnLCAncGlja1VwJywgJ2Ryb3BPZmYnXTtcbmNvbnN0IEJPT0tJTkdTX1BBVEggPSAnYm9va2luZ3MnO1xuXG5jb25zdCBmZXRjaFVzZXJCb29raW5ncyA9IHVpZCA9PlxuICBjbGllbnREQi5yZWFkKGAke0JPT0tJTkdTX1BBVEh9LyR7dWlkfWApXG4gICAgLnRoZW4odXNlckJvb2tpbmdzID0+IHtcbiAgICAgIGlmICh1c2VyQm9va2luZ3MpIHtcbiAgICAgICAgcmV0dXJuIHsgW3VpZF06IHVzZXJCb29raW5ncyB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbmNvbnN0IGZldGNoQWxsQm9va2luZ3MgPSAoKSA9PlxuICBjbGllbnREQi5yZWFkKEJPT0tJTkdTX1BBVEgpO1xuXG5leHBvcnQgY29uc3QgYm9va2luZ3NSZWNlaXZlZCA9IGJvb2tpbmdzID0+ICh7XG4gIHR5cGU6IEJPT0tJTkdTX1JFQ0VJVkVELFxuICBib29raW5nc1xufSk7XG5cbmV4cG9ydCBjb25zdCBib29raW5nc0NhbmNlbGVkID0gKHVpZCwgZXZlbnRJZCkgPT4gKHtcbiAgdHlwZTogQk9PS0lOR19DQU5DRUxFRCxcbiAgdWlkLFxuICBldmVudElkXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQm9va2luZ3MgPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGNvbnN0IHVpZCA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAndWlkJ10pO1xuICBjb25zdCBpc0FkbWluID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICdpc0FkbWluJ10pO1xuICBjb25zdCBmZXRjaFByb21pc2UgPSBpc0FkbWluID8gZmV0Y2hBbGxCb29raW5ncygpIDogZmV0Y2hVc2VyQm9va2luZ3ModWlkKTtcblxuICByZXR1cm4gZmV0Y2hQcm9taXNlXG4gICAgLnRoZW4oYm9va2luZ3MgPT4ge1xuICAgICAgaWYgKGJvb2tpbmdzKSB7XG4gICAgICAgIGRpc3BhdGNoKGJvb2tpbmdzUmVjZWl2ZWQoYm9va2luZ3MpKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCb29raW5nID0gKHVpZCwgZXZlbnRJZCwgYm9va2luZ0RhdGEpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IGJvb2tpbmdEYXRhVG9VcGRhdGUgPSBfLnBpY2soYm9va2luZ0RhdGEsIEJPT0tJTkdfREFUQV9LRVlTKTtcblxuICByZXR1cm4gY2xpZW50REIudXBkYXRlKGAke0JPT0tJTkdTX1BBVEh9LyR7dWlkfS8ke2V2ZW50SWR9YCwgYm9va2luZ0RhdGFUb1VwZGF0ZSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChib29raW5nc1JlY2VpdmVkKHsgW3VpZF06IHsgW2V2ZW50SWRdOiBib29raW5nRGF0YVRvVXBkYXRlIH0gfSkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbmNlbEJvb2tpbmcgPSAodWlkLCBldmVudElkKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucmVtb3ZlKGAke0JPT0tJTkdTX1BBVEh9LyR7dWlkfS8ke2V2ZW50SWR9YClcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChib29raW5nc0NhbmNlbGVkKHVpZCwgZXZlbnRJZCkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucy5qcyIsImZ1bmN0aW9uIG5hdmlnYXRlVG8ocGFnZUlkLCBwYXJhbXMpIHtcbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ05BVklHQVRFX1RPJyxcbiAgICBwYWdlSWQsXG4gICAgcGFyYW1zXG4gIH07XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRlQmFjaygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTkFWSUdBVEVfQkFDSydcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzZXQocGFnZUlkLCBwYXJhbXMpIHtcbiAgcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1JFU0VUX1JPVVRJTkcnLFxuICAgIHBhZ2VJZCxcbiAgICBwYXJhbXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZShwYWdlSWQsIHBhcmFtcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdSRVBMQUNFX1JPVVRJTkcnLFxuICAgIHBhZ2VJZCxcbiAgICBwYXJhbXNcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IG5hdmlnYXRlVG8sIG5hdmlnYXRlQmFjaywgcmVwbGFjZSwgcmVzZXQgfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucy5qcyIsImltcG9ydCB7IHVwZGF0ZVVzZXIgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGlzcGF0Y2gsIHN0YXRlKSB7XG4gIGNvbnN0IHVpZCA9IHN0YXRlLmF1dGhEYXRhLnVpZDtcbiAgY29uc3QgdXNlcnMgPSBzdGF0ZS51c2VycztcblxuICBpZiAodXNlcnNbdWlkXSkge1xuICAgIHJldHVybiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVpZCwgeyBwaG90b1VSTDogc3RhdGUuYXV0aERhdGEucGhvdG9VUkwgfSkpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RhdGFGaXhlcnMvdXBkYXRlUGhvdG9VcmxGaXhlci5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL3NwaW5uZXIuc2NzcycpO1xuXG5jb25zdCBMb2dvID0gcmVxdWlyZSgnLi9sb2dvLmpzeCcpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5sb2FkaW5nXG4gICAgfTtcbn1cblxuY2xhc3MgU3Bpbm5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBvdmVybGF5Q2xhc3MgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsXG4gICAgICAgICAgICBoaWRlOiAhdGhpcy5wcm9wcy5pc0xvYWRpbmdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9IG9wYWNpdHk9ezAuN30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwaW5uZXIuUHJvcFR5cGVzID0ge1xuICAgIGlzTG9hZGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU3Bpbm5lcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc3Bpbm5lci5qc3giLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zcGlubmVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zcGlubmVyLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDEwMDA7IH1cXG4gIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciB7XFxuICAgIG1hcmdpbjogMTUwcHggYXV0byAwO1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgLmxvZ28ge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgb3BhY2l0eTogMC43OyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciA+IGRpdiB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgIG1hcmdpbjogMCAycHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcXG4gICAgICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgLmJvdW5jZTEge1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIC5ib3VuY2UyIHtcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcXG4gIDAlLCA4MCUsIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XFxuICAwJSwgODAlLCAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNsYXNzIExvZ28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB3aWR0aD17dGhpcy5wcm9wcy53aWR0aCArICdwdCd9IGhlaWdodD17dGhpcy5wcm9wcy53aWR0aCArICdwdCd9IG9wYWNpdHk9e3RoaXMucHJvcHMub3BhY2l0eX0gdmlld0JveD1cIjAgMCA0MDAgNDAwXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMC4wMCAwLjAwIEwgMTk1LjMzIDAuMDAgQyAxNzEuNDYgMS4xNCAxNDcuNTggNS40MiAxMjUuNDMgMTQuNjAgQyA3MC44OCAzNi4zMSAyNy4xMCA4My4zMyA5LjU3IDEzOS40MCBDIDMuNzQgMTU3LjQ1IDEuMTYgMTc2LjM3IDAuMDAgMTk1LjI1IEwgMC4wMCAwLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5NS4zMyAwLjAwIEwgMjA3LjUyIDAuMDAgQyAyMTYuNzEgMS4xOSAyMjYuMDIgMS4zNSAyMzUuMTEgMy4yMiBDIDI2OS4zMCA5LjE2IDMwMS43OCAyNC4zNyAzMjguMzcgNDYuNjUgQyAzNjUuOTkgNzcuOTEgMzkxLjY2IDEyMy40MiAzOTguMDkgMTcxLjk5IEMgMzk5LjA0IDE3OC43NSAzOTkuNTYgMTg1LjU2IDQwMC4wMCAxOTIuMzcgTCA0MDAuMDAgMjA4LjczIEMgMzk4LjU3IDIzMy44NiAzOTMuMjkgMjU4LjkwIDM4Mi44MCAyODEuODYgQyAzNTguODIgMzM1LjY4IDMwOS45NSAzNzcuODMgMjUyLjk5IDM5My4xMSBDIDIzOS4wOCAzOTcuMTAgMjI0LjY4IDM5OC44OSAyMTAuMjkgNDAwLjAwIEwgMTkxLjM2IDQwMC4wMCBDIDE2Ni4xNyAzOTguNzYgMTQxLjEzIDM5My4xNCAxMTguMTYgMzgyLjY0IEMgNjcuNDAgMzU5Ljc2IDI2LjgxIDMxNS4wNSA5Ljg5IDI2MS45MCBDIDMuOTcgMjQ0LjMzIDEuNjIgMjI1Ljg1IDAuMDAgMjA3LjQ2IEwgMC4wMCAxOTUuMjUgQyAxLjE2IDE3Ni4zNyAzLjc0IDE1Ny40NSA5LjU3IDEzOS40MCBDIDI3LjEwIDgzLjMzIDcwLjg4IDM2LjMxIDEyNS40MyAxNC42MCBDIDE0Ny41OCA1LjQyIDE3MS40NiAxLjE0IDE5NS4zMyAwLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIwNy41MiAwLjAwIEwgNDAwLjAwIDAuMDAgTCA0MDAuMDAgMTkyLjM3IEMgMzk5LjU2IDE4NS41NiAzOTkuMDQgMTc4Ljc1IDM5OC4wOSAxNzEuOTkgQyAzOTEuNjYgMTIzLjQyIDM2NS45OSA3Ny45MSAzMjguMzcgNDYuNjUgQyAzMDEuNzggMjQuMzcgMjY5LjMwIDkuMTYgMjM1LjExIDMuMjIgQyAyMjYuMDIgMS4zNSAyMTYuNzEgMS4xOSAyMDcuNTIgMC4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxOTIuMTEgOC4xMyBDIDIyMi4zNSA2LjgwIDI1Mi45NSAxMi43NCAyODAuNDIgMjUuNTAgQyAzMjcuMDQgNDYuNzIgMzY0LjM1IDg3LjM5IDM4MS4zMSAxMzUuNzUgQyAzOTguNDAgMTgzLjE3IDM5NS42NSAyMzcuMzMgMzczLjc3IDI4Mi43NCBDIDM1Ni4yMyAzMTkuODMgMzI2LjMzIDM1MC45NyAyOTAuMDQgMzcwLjA5IEMgMjQzLjkyIDM5NC44MiAxODcuNTIgMzk5LjIyIDEzOC4wNyAzODIuMTEgQyA5NS4zOCAzNjcuNjUgNTguMTQgMzM3LjYwIDM1LjIxIDI5OC43NiBDIDE0LjY1IDI2NC45MiA1LjM0IDIyNC40NiA4LjU0IDE4NS4wMyBDIDEwLjM3IDE2MS4yMCAxNi42OCAxMzcuNzAgMjcuMjQgMTE2LjI2IEMgNDguODIgNzEuMTcgODguOTIgMzUuNDggMTM2LjA0IDE4Ljg5IEMgMTU0LjA1IDEyLjU0IDE3My4wMiA4Ljg3IDE5Mi4xMSA4LjEzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE5Ni4yMyAyMS4zNSBDIDE5Ny42MCAxOC45MyAxOTguOTUgMTYuNTAgMjAwLjM3IDE0LjExIEMgMjAxLjcyIDE2LjQ4IDIwMy4wNCAxOC44NiAyMDQuMzMgMjEuMjcgQyAyMDYuOTUgMjEuODAgMjA5LjU5IDIyLjIyIDIxMi4xOCAyMi44OSBDIDIxMC43MCAyNS4xNiAyMDguNjUgMjYuOTggMjA2LjgyIDI4Ljk2IEMgMjA3LjIyIDMxLjY1IDIwNy41MyAzNC4zNSAyMDcuODYgMzcuMDQgQyAyMDUuMzAgMzUuODYgMjAyLjc0IDM0LjY3IDIwMC4xNCAzMy41OCBDIDE5Ny43NCAzNC44MiAxOTUuMzIgMzYuMDQgMTkyLjc1IDM2Ljg3IEMgMTkzLjE2IDM0LjIyIDE5My41NCAzMS41NiAxOTMuODQgMjguODkgQyAxOTEuOTMgMjYuOTAgMTkwLjAzIDI0LjkwIDE4OC4xNiAyMi44OCBDIDE5MC44MyAyMi4zMSAxOTMuNTIgMjEuNzggMTk2LjIzIDIxLjM1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE4MS4xMiA0NC4zOCBDIDIxMi4yNiA0MC42MCAyNDQuNTMgNDYuMTkgMjcyLjM2IDYwLjc2IEMgMzEwLjkzIDgwLjU2IDM0MC41MSAxMTcuMDYgMzUxLjYyIDE1OS4wMCBDIDM1OC44MSAxODUuMTAgMzU4LjgyIDIxMy4wOCAzNTIuMjIgMjM5LjMwIEwgMzUzLjc4IDIzOS40OSBDIDM1My4zNiAyMzkuNDkgMzUyLjUzIDIzOS40OCAzNTIuMTEgMjM5LjQ4IEMgMzQ1LjAyIDI2Ny4zOSAzMjkuOTAgMjkzLjIxIDMwOS4wOCAzMTMuMTEgQyAyOTIuMjEgMzI5LjY2IDI3MS4zNiAzNDEuOTkgMjQ4Ljk2IDM0OS40MCBDIDIyMC4zNSAzNTguNjkgMTg5LjA3IDM1OS42MyAxNTkuOTkgMzUxLjkxIEMgMTMyLjM5IDM0NC42MyAxMDYuODMgMzI5LjY5IDg3LjExIDMwOS4wNCBDIDU4LjYzIDI3OS43NCA0Mi4zNSAyMzguODkgNDMuMzEgMTk4LjAwIEMgNDMuMzggMTUxLjU0IDY2LjA5IDEwNi4xMSAxMDIuNDMgNzcuMzYgQyAxMjQuOTUgNTkuMzkgMTUyLjQ4IDQ3LjcyIDE4MS4xMiA0NC4zOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMTIuNzQgNzYuNzMgQyAxMzQuNTQgNjEuNDYgMTYwLjMxIDUxLjU1IDE4Ni45MyA0OS41NSBDIDIwNi40NSA0OC4yMSAyMjYuMzcgNDkuNjEgMjQ1LjA2IDU1LjY4IEMgMjcwLjk5IDYzLjc5IDI5NC42OSA3OC45OCAzMTIuNzUgOTkuMjggQyAzMzAuMDAgMTE4LjMzIDM0Mi4wOCAxNDEuOTQgMzQ3LjgzIDE2Ni45NiBDIDM1My44NSAxOTUuMTUgMzUyLjI5IDIyNS4xMiAzNDIuMjUgMjUyLjIyIEMgMzM3LjI0IDI2NS41NiAzMzAuNDcgMjc4LjI1IDMyMi4wNSAyODkuNzYgQyAzMTguODAgMjg2LjgwIDMxOS42OCAyODIuNDIgMzE5LjcyIDI3OC41MCBDIDMxOS4xNiAyNzkuODEgMzE4LjYzIDI4MS4xMyAzMTguMTMgMjgyLjQ2IEMgMzE3LjMzIDI4MC4xOCAzMTYuNTUgMjc3Ljg1IDMxNS4xMiAyNzUuODggQyAzMTUuNTIgMjc3LjE2IDMxNi4zMSAyNzkuNzIgMzE2LjcxIDI4MS4wMCBDIDMxNS4zMSAyNzkuNzMgMzEzLjgwIDI3OC42NCAzMTIuMTggMjc3LjcyIEMgMzEzLjIyIDI3OS4zNiAzMTQuNDQgMjgwLjg3IDMxNS42NyAyODIuMzkgQyAzMTQuMjMgMjgxLjc3IDMxMi43OCAyODEuMjAgMzExLjMwIDI4MC42OSBDIDMxMi4zNSAyODEuODcgMzEzLjYxIDI4Mi43NSAzMTUuMDggMjgzLjM1IEMgMzEzLjk1IDI4My42NCAzMTIuODIgMjgzLjkzIDMxMS43MCAyODQuMjMgQyAzMTYuMTUgMjg0LjU0IDMxOC4xOSAyODguNjcgMzIwLjM1IDI5MS45NSBDIDMxOS4wMCAyOTMuNzIgMzE3LjU5IDI5NS40NSAzMTYuMTUgMjk3LjE1IEMgMzEyLjU4IDI5NC41NiAzMTEuMTMgMjkwLjQxIDMxMC41NSAyODYuMTkgQyAzMTAuMjMgMjg2LjM0IDMwOS41OSAyODYuNjQgMzA5LjI4IDI4Ni43OCBDIDMwOC41OSAyODUuMjMgMzA2LjkyIDI4NC44MiAzMDYuNDcgMjg2Ljc2IEMgMzA2Ljg4IDI4Ny4yOSAzMDcuNjkgMjg4LjMzIDMwOC4xMCAyODguODYgQyAzMDcuNDUgMjg4Ljc1IDMwNi4xNCAyODguNTUgMzA1LjQ5IDI4OC40NCBDIDMwNi41OSAyODkuNzIgMzA3LjcxIDI5MC45OCAzMDguODIgMjkyLjI2IEMgMzA3Ljk3IDI5Mi4yNSAzMDYuMjcgMjkyLjIzIDMwNS40MSAyOTIuMjIgQyAzMDguNDcgMjk0LjQxIDMxMS40NyAyOTYuNzQgMzEzLjgxIDI5OS43MiBDIDMxMy4wNyAzMDAuNjIgMzEyLjMzIDMwMS41MiAzMTEuNjAgMzAyLjQ0IEMgMzEwLjkzIDMwMC44MCAzMTAuNjQgMjk4LjgyIDMwOS4wNyAyOTcuNzYgQyAzMDUuNzggMjk1LjA3IDMwMi4xMSAyOTIuOTEgMjk4LjU4IDI5MC41NyBDIDI5Ny4xNyAyODkuNDcgMjk1LjM1IDI4OS41MCAyOTMuNjcgMjg5LjMzIEMgMjkzLjM0IDI5MC42MyAyOTMuMDIgMjkxLjkzIDI5Mi43MCAyOTMuMjMgQyAyOTMuMDIgMjk0LjA3IDI5My4zNSAyOTQuOTIgMjkzLjY4IDI5NS43NyBDIDI5Mi4xNSAyOTkuNzUgMjkxLjIwIDMwMy45MSAyOTAuMTcgMzA4LjAzIEMgMjg2LjM5IDMwMC45MSAyODIuMzkgMjkzLjc5IDI4MC45NSAyODUuNzUgQyAyODAuNTMgMjg3Ljk0IDI4MC4xNiAyOTAuMTcgMjc4Ljc4IDI5Mi4wMCBDIDI3Ny43OCAyOTAuNDcgMjc2LjgyIDI4OC44OCAyNzUuMzggMjg3LjcxIEMgMjc2LjIyIDI5MC41MiAyNzcuMzcgMjkzLjIzIDI3OC4wNSAyOTYuMDkgQyAyNzguNTggMjk4Ljc0IDI4MS44MiAyOTkuNTcgMjgyLjU5IDMwMi4xMiBDIDI4My44NiAzMDUuNTAgMjg0Ljk2IDMwOC45NSAyODYuNDUgMzEyLjI0IEMgMjg1LjI1IDMxMS41NyAyODQuMDYgMzEwLjkxIDI4Mi44NyAzMTAuMjQgQyAyODEuNzAgMzEwLjU4IDI4MC41NCAzMTAuOTIgMjc5LjM5IDMxMS4yOCBDIDI3OS4xMCAzMTEuODEgMjc4LjUyIDMxMi44NyAyNzguMjMgMzEzLjM5IEMgMjc2Ljg5IDMxMS41MSAyNzUuNTYgMzA5LjU2IDI3My42NyAzMDguMTkgQyAyNzUuNTQgMzA2LjgyIDI3Ny41OSAzMDUuMzggMjc4LjA2IDMwMi45NCBDIDI3NC44NyAzMDQuODEgMjcyLjE2IDMwNy4zNSAyNjkuMTMgMzA5LjQzIEMgMjY3LjIyIDMxMC41MSAyNjYuNzQgMzEyLjc4IDI2NS44NiAzMTQuNjIgQyAyNjEuNzcgMzEwLjk2IDI2MS41MiAzMDUuMzQgMjYwLjI4IDMwMC4zNiBDIDI2MC4wMiAzMDEuNjYgMjU5Ljc3IDMwMi45NyAyNTkuNTQgMzA0LjI4IEMgMjU4LjcxIDMwMi42NiAyNTcuNzggMzAxLjAzIDI1Ni4wOSAzMDAuMTYgQyAyNTYuMDcgMzAzLjM5IDI1Ni4yOCAzMDYuNjUgMjU3LjIwIDMwOS43NiBDIDI1NS44MCAzMDkuNzAgMjU0LjQwIDMwOS42NiAyNTMuMDAgMzA5LjY1IEMgMjU0Ljg0IDMxMS4xNyAyNTYuODMgMzEyLjQ4IDI1OC44OSAzMTMuNjkgQyAyNTguOTEgMzE2LjM5IDI1OC44NiAzMTkuMDggMjU4LjgwIDMyMS43OCBDIDI1Ny42MiAzMjMuMDcgMjU2LjQyIDMyNC4zNSAyNTUuMTkgMzI1LjU5IEMgMjUyLjQyIDMyNC4xMSAyNDkuNzcgMzIyLjM4IDI0Ni43NyAzMjEuNDEgQyAyNDYuMjkgMzE4Ljg2IDI0NS43MiAzMTYuMzIgMjQ1LjI2IDMxMy43NiBDIDI0NC4wOCAzMTMuMDAgMjQyLjkwIDMxMi4yMyAyNDEuNzMgMzExLjQ2IEMgMjM4LjIyIDMxMi42MyAyMzYuNTcgMzE2LjIwIDIzNy42MSAzMTkuNzEgQyAyMzYuODQgMzE5Ljk1IDIzNi4wOCAzMjAuMjAgMjM1LjMxIDMyMC40NSBDIDIzNS42NSAzMTUuOTAgMjM3LjI3IDMxMS41NCAyMzcuNTIgMzA3LjAxIEMgMjM3LjY1IDMwNC45MSAyMzQuNjAgMzA1LjIxIDIzMy4zOSAzMDQuNTQgQyAyMzQuNjMgMzEyLjg4IDIzMS43OSAzMjEuMDEgMjI4LjgyIDMyOC42NCBDIDIyOC4wMSAzMjguODcgMjI2LjM4IDMyOS4zMyAyMjUuNTcgMzI5LjU2IEMgMjI0Ljk3IDMyNC4wNiAyMjIuNDkgMzE3Ljg5IDIyNi4yNyAzMTIuOTggQyAyMjUuNTMgMzExLjIyIDIyNC45NCAzMDkuNDAgMjI0LjM2IDMwNy41OCBDIDIyMy45MyAzMDcuNTYgMjIzLjA3IDMwNy41MSAyMjIuNjQgMzA3LjQ5IEMgMjE5Ljc3IDMxMi4xMSAyMjIuODEgMzE3Ljc4IDIyMC4xNCAzMjIuNTIgQyAyMTcuMzIgMzE5LjYyIDIxNS41NSAzMTUuOTEgMjEyLjg3IDMxMi45MCBDIDIxMy4zNCAzMTQuNDUgMjEzLjkwIDMxNS45OCAyMTQuNTEgMzE3LjUwIEMgMjEzLjY0IDMxOC4zNCAyMTIuNzcgMzE5LjE5IDIxMS45MiAzMjAuMDQgQyAyMTMuMTggMzIwLjY4IDIxNC40NSAzMjEuMzAgMjE1Ljc0IDMyMS44NiBDIDIxNi4zNyAzMjIuNzcgMjE3LjAwIDMyMy42OSAyMTcuNjUgMzI0LjYwIEMgMjE1LjA1IDMyNS4xNyAyMTIuMzcgMzI1Ljc2IDIxMC40NCAzMjcuNzQgQyAyMTAuOTcgMzI1LjIyIDIwOC4zNyAzMjQuNDEgMjA3LjQwIDMyMi42MCBDIDIwNi42OCAzMjAuODYgMjA4LjA3IDMxOS4zMiAyMDguNjcgMzE3LjgwIEMgMjA4LjMyIDMxNi4zOCAyMDcuOTQgMzE0Ljk3IDIwNy41NSAzMTMuNTcgQyAyMDYuODQgMzE0LjMzIDIwNS43NCAzMTQuOTMgMjA1LjU4IDMxNi4wNiBDIDIwNC4zNCAzMjEuNzMgMjA2LjQ3IDMyNy40MyAyMDYuMzAgMzMzLjEzIEMgMjA1LjU2IDMzMi4xNCAyMDQuODQgMzMxLjE1IDIwNC4xMSAzMzAuMTYgQyAyMDEuNjcgMzI4LjkyIDIwMC4xOSAzMjYuNjIgMTk4LjM4IDMyNC42OSBDIDE5Ni41MiAzMjIuOTggMTkzLjkxIDMyNC4zMSAxOTEuNzYgMzI0LjQ5IEMgMTkwLjg2IDMyNy4xMyAxODkuNzAgMzI5Ljk1IDE5MC40MyAzMzIuNzkgQyAxOTEuMTYgMzM0LjYyIDE5Mi4xMSAzMzYuMzUgMTkyLjkxIDMzOC4xNSBDIDE5MS42NCAzMzcuMTkgMTg5Ljg1IDMzNi41NCAxODkuMzEgMzM0LjkwIEMgMTg4Ljg0IDMzMi40NCAxODguNzUgMzI5LjkzIDE4OC4zOSAzMjcuNDYgQyAxOTEuNzggMzI0LjA1IDE5NS41NSAzMjEuMDkgMTk5LjUxIDMxOC4zOCBDIDIwMS4xMSAzMTcuNjAgMjAwLjQxIDMxNS43OCAyMDAuNDIgMzE0LjQwIEMgMjAwLjY0IDMxNC4wNiAyMDEuMDcgMzEzLjM5IDIwMS4yOCAzMTMuMDUgQyAxOTkuNzEgMzEzLjQ4IDE5Ny4zOSAzMTIuNjIgMTk2LjQyIDMxNC4zNCBDIDE5NC40OCAzMTYuNzYgMTkzLjU2IDMxOS45OCAxOTAuOTkgMzIxLjg5IEMgMTg5LjI4IDMyMy4yMSAxODcuNDMgMzI0LjM0IDE4NS42MyAzMjUuNTQgQyAxODUuMzEgMzI1LjI3IDE4NC42NSAzMjQuNzMgMTg0LjMyIDMyNC40NyBDIDE4My40NiAzMjQuNTIgMTgxLjcyIDMyNC42MiAxODAuODUgMzI0LjY4IEMgMTgyLjUyIDMyMS4wNiAxODMuODkgMzE3LjMwIDE4NS42NiAzMTMuNzMgQyAxODYuMjggMzEyLjI1IDE4Ny4zNCAzMTAuNzAgMTg2Ljc5IDMwOS4wNCBDIDE4Ni4xOSAzMDcuNzUgMTg0LjY0IDMwNy41OCAxODMuNTEgMzA3LjAxIEMgMTgyLjY5IDMxNi4zNSAxNzcuMDkgMzI0LjI3IDE3MS45MSAzMzEuNzQgQyAxNzEuMDIgMzMwLjE5IDE3MC4wNSAzMjguNjkgMTY5LjI1IDMyNy4xMCBDIDE3Mi4wMCAzMjIuODMgMTczLjUzIDMxNy4wMiAxNzguNzAgMzE1LjA2IEMgMTc4Ljc3IDMxMy40NCAxNzguNzEgMzExLjgzIDE3OC41OCAzMTAuMjIgQyAxNzcuNjUgMzEwLjM4IDE3Ni43MyAzMTAuNTYgMTc1LjgxIDMxMC43OCBDIDE3Ni4xNyAzMTEuOTYgMTc2LjYzIDMxMy4xOSAxNzYuMTIgMzE0LjQzIEMgMTc1Ljg0IDMxMy41MyAxNzUuMjkgMzExLjc1IDE3NS4wMSAzMTAuODUgQyAxNzMuOTQgMzEyLjkzIDE3My40OCAzMTUuMjcgMTcyLjM1IDMxNy4zMiBDIDE3MC44NCAzMTkuNTkgMTY4Ljc3IDMyMS40MCAxNjYuOTAgMzIzLjM3IEMgMTY1LjkyIDMyMi42MiAxNjQuOTQgMzIxLjg4IDE2My45NiAzMjEuMTUgQyAxNjAuOTggMzIwLjkxIDE1Ny45NyAzMjEuMjMgMTU1LjQzIDMyMi45MSBDIDE1NS4wMyAzMjAuMjQgMTU0LjY2IDMxNy41NiAxNTQuNDMgMzE0Ljg3IEMgMTU1LjI2IDMxMy45NSAxNTYuMDggMzEzLjA1IDE1Ni45MSAzMTIuMTQgQyAxNTYuODcgMzEwLjc0IDE1Ni44NCAzMDkuMzQgMTU2LjgxIDMwNy45NSBDIDE1NS4wOCAzMDYuOTUgMTUzLjUxIDMwNS4wOSAxNTEuMzQgMzA1LjM0IEMgMTQ4Ljc0IDMwNi41OSAxNDYuMjYgMzA4LjgzIDE0NS44OCAzMTEuODMgQyAxNDUuNTggMzE0LjAyIDE0NS41NiAzMTYuMjMgMTQ1LjM5IDMxOC40MyBDIDE0NC45MiAzMTguNTQgMTQzLjk3IDMxOC43NiAxNDMuNTAgMzE4Ljg4IEMgMTQyLjk4IDMxNS4yNSAxNDMuNTkgMzExLjY2IDE0NC40MyAzMDguMTQgQyAxNDcuNzMgMzA1Ljk5IDE1MS4wMiAzMDMuNjggMTU0Ljg4IDMwMi42MyBDIDE1Ni4zMCAzMDMuNDMgMTU3LjczIDMwNC4yMSAxNTkuMTggMzA0Ljk3IEMgMTYwLjU3IDMwMi44MCAxNjAuODcgMzAwLjM0IDE1OS43MSAyOTguMDEgQyAxNTMuNTAgMzAwLjM3IDE0Ni45MCAzMDEuNzkgMTQwLjk3IDMwNC44NSBDIDEzOS4xNCAzMDkuNDQgMTM2Ljc0IDMxMy43OSAxMzUuMzggMzE4LjU2IEwgMTM0LjY1IDMxOC4xOCBDIDEzNC4xNiAzMTkuNTkgMTMzLjYyIDMyMC45OSAxMzMuMDMgMzIyLjM2IEMgMTMxLjc4IDMxOC4xOSAxMjkuOTAgMzE0LjIzIDEyOC44MyAzMTAuMDAgQyAxMjkuNTggMzA5LjI3IDEzMS4wOCAzMDcuODAgMTMxLjgyIDMwNy4wNiBMIDEyOC43NSAzMDcuMzIgQyAxMjkuODkgMzA2LjU4IDEzMS4wMyAzMDUuODMgMTMyLjE2IDMwNS4wOCBDIDEzMS4xMSAzMDQuNzAgMTI4Ljk5IDMwMy45NiAxMjcuOTQgMzAzLjU5IEMgMTI3LjM2IDMwMC45OSAxMjcuMDggMjk4LjMzIDEyNy42NyAyOTUuNzEgQyAxMjYuMzYgMjk3LjkxIDEyNC42NCAyOTkuODEgMTIyLjc4IDMwMS41NyBDIDEyMy42MCAzMDEuNTMgMTI1LjIyIDMwMS40NiAxMjYuMDMgMzAxLjQyIEMgMTI1LjMwIDMwMi4wNyAxMjMuODMgMzAzLjM3IDEyMy4xMCAzMDQuMDIgQyAxMjMuNTcgMzA0LjUzIDEyNC41MSAzMDUuNTUgMTI0Ljk4IDMwNi4wNiBDIDEyMi4zNiAzMDguODIgMTE4Ljg4IDMxMC40MyAxMTUuMTkgMzExLjE2IEMgMTE2LjMxIDMwNC45MSAxMTcuMzEgMjk4LjQ0IDEyMC41OCAyOTIuODcgQyAxMTkuODIgMjkzLjIyIDExOC4yOCAyOTMuOTAgMTE3LjUyIDI5NC4yNSBDIDExOC4wNCAyOTMuMzAgMTE5LjA4IDI5MS40MCAxMTkuNjAgMjkwLjQ1IEMgMTE4Ljc4IDI5MS4yNyAxMTcuMTQgMjkyLjkxIDExNi4zMiAyOTMuNzQgQyAxMTYuNTEgMjkyLjc3IDExNi44OSAyOTAuODQgMTE3LjA5IDI4OS44OCBDIDExNi42NiAyOTAuMzkgMTE1LjgwIDI5MS40MyAxMTUuMzggMjkxLjk1IEMgMTE0Ljk3IDI4OS42NyAxMTIuNTkgMjg5LjU2IDExMy4yMSAyOTEuODcgQyAxMTIuNDUgMjk1LjA3IDExNS40OCAyOTguMDEgMTE0LjA0IDMwMS4xMCBDIDExMi44NSAzMDQuMzMgMTExLjYwIDMwNy41NyAxMTAuOTggMzEwLjk4IEMgMTA5LjY0IDMxMC41OSAxMDguMzAgMzEwLjI2IDEwNi45NSAzMDkuOTcgQyAxMDguMjggMzA4LjUwIDEwOS40NiAzMDYuOTAgMTEwLjM5IDMwNS4xNSBDIDExMS4xOSAzMDQuMzggMTExLjk4IDMwMy41OCAxMTIuNjkgMzAyLjcyIEMgMTEyLjA0IDMwMi40NSAxMTAuNzUgMzAxLjkwIDExMC4xMCAzMDEuNjMgQyAxMTAuNjggMjk5Ljk1IDExMS4yOCAyOTguMjggMTExLjY4IDI5Ni41NiBDIDEwOS4yOSAyOTkuNDQgMTA3LjkxIDMwMi45NSAxMDYuMjIgMzA2LjI0IEMgMTAzLjg1IDMwOC43OSAxMDAuNDQgMzEwLjAzIDk3LjM0IDMxMS40NCBDIDk3LjMyIDMxMS4xOSA5Ny4yNyAzMTAuNzEgOTcuMjQgMzEwLjQ2IEMgOTguMDcgMzA0LjA4IDk3LjMyIDI5Ny42MiA5OC4zNyAyOTEuMjYgQyAxMDEuMTkgMjg5LjYxIDEwNC4xMCAyODguMDcgMTA2LjY5IDI4Ni4wNSBDIDEwNi41NiAyODUuNDAgMTA2LjI5IDI4NC4wOSAxMDYuMTYgMjgzLjQzIEMgMTAzLjUyIDI4NS4xOSAxMDAuNjEgMjg2LjQ0IDk3Ljg2IDI4OC4wMCBDIDk1LjcwIDI4OS4zNiA5NS4yMiAyOTIuMDcgOTQuNTYgMjk0LjM1IEMgOTMuNDAgMjk4LjM4IDkyLjg1IDMwMi41NSA5Mi42NCAzMDYuNzMgQyA5MS4zMCAzMDUuMDkgODkuODYgMzAzLjU0IDg4LjM5IDMwMi4wMiBMIDg4LjM0IDMwMS40NSBDIDg4LjQwIDI5OC45MyA4Ny4zNyAyOTYuNjUgODYuNDAgMjk0LjQwIEMgODQuODEgMjkzLjg3IDgzLjI2IDI5My45NCA4MS43MyAyOTQuNjAgQyA4MS41MCAyOTMuNDEgODEuMjUgMjkyLjIzIDgxLjA5IDI5MS4wNCBDIDg1LjEyIDI4OC4xMiA4OS4xOCAyODUuMTAgOTIuNTMgMjgxLjQwIEMgOTIuMjYgMjgwLjY0IDkxLjcwIDI3OS4xMSA5MS40MiAyNzguMzQgQyA5MS4wMSAyNzguMDIgOTAuMTggMjc3LjM5IDg5Ljc3IDI3Ny4wNyBDIDg2LjY2IDI4MS44MyA4Mi42NyAyODUuOTMgNzcuODkgMjg5LjAyIEMgNTkuMDcgMjYzLjQ3IDQ4LjU1IDIzMS43NSA0OS4xMCAxOTkuOTYgQyA0OC42MCAxNjguMzggNTkuMjEgMTM3LjA1IDc3LjYyIDExMS41MyBDIDg3LjQ1IDk4LjIyIDk5LjM0IDg2LjQzIDExMi43NCA3Ni43MyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTYuOTAgNTcuNDIgQyAyMDUuOTUgNTUuMTIgMjE2LjQ1IDU4LjMwIDIyMi4wMyA2NS45NiBDIDIyNy4xNSA3Mi43MyAyMjcuMzcgODIuMTcgMjI0LjU4IDg5LjkyIEMgMjIxLjU1IDk3LjgzIDIxMy45NyAxMDIuODQgMjA2LjMwIDEwNS42MSBDIDIwNi4yOSAxMDguMDIgMjA2LjI3IDExMC40MiAyMDYuMjYgMTEyLjgzIEMgMjA0LjA5IDExNS4xNiAyMDIuMDMgMTE3LjU5IDE5OS45NyAxMjAuMDMgQyAxOTguNzAgMTE4LjcwIDE5Ni44MCAxMTcuNzYgMTk2LjExIDExNi4wMCBDIDE5Ny4wMCAxMTQuNDAgMTk4LjM5IDExMy4xNSAxOTkuNjEgMTExLjgwIEMgMTkxLjgwIDEwNC44OCAxODIuOTkgOTkuMTcgMTc1LjMyIDkyLjEwIEMgMTc2LjA3IDkwLjYwIDE3Ny4yMyA4OS40NiAxNzguODcgODkuMDIgQyAxODMuMDcgOTIuOTIgMTg2Ljk1IDk3LjE2IDE5MS4xOCAxMDEuMDMgQyAxOTMuNDMgOTQuNzIgMTk2LjAxIDg4LjQ5IDE5Ny43OCA4Mi4wNCBDIDE5Ny40NSA3OC4yNCAxOTYuMDQgNzQuNjMgMTk1LjIyIDcwLjkyIEMgMTkwLjA5IDY5Ljc1IDE4NS4xNSA2Ny44NiAxODAuMDIgNjYuNjcgQyAxNzguMjAgNjYuOTIgMTc2LjQxIDY3LjM1IDE3NC41OSA2Ny41NSBDIDE3NC41NSA2Ni41MCAxNzQuNTEgNjUuNDYgMTc0LjQ5IDY0LjQxIEMgMTc3LjM4IDY0LjM3IDE4MC4yMiA2NC45NiAxODMuMDUgNjUuNDYgQyAxODYuOTAgNjEuNjkgMTkxLjU1IDU4LjUzIDE5Ni45MCA1Ny40MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxODQuOTQgNjUuODEgQyAxODkuMzIgNjEuMzQgMTk1Ljc0IDU5LjAyIDIwMS45NyA1OS41MCBDIDIwOS40OCA1OS43MCAyMTYuNTUgNjQuNjIgMjE5LjQzIDcxLjU1IEMgMjIyLjUwIDc5LjA4IDIyMi41NSA4OC4yMCAyMTguMjQgOTUuMjggQyAyMTYuMTAgOTguNzggMjEyLjYyIDEwMS4yMiAyMDguODUgMTAyLjcwIEMgMjA3LjM4IDk1Ljc1IDIwNi4xOSA4OC43MyAyMDQuNDEgODEuODcgQyAyMDMuODQgODEuNzIgMjAyLjcwIDgxLjQxIDIwMi4xMyA4MS4yNSBDIDIwMy45NiA3OS4wMCAyMDUuMzEgNzYuNDAgMjA2LjA3IDczLjU5IEMgMjA5Ljk5IDcyLjgyIDIxMy45OCA3Mi41OCAyMTcuOTUgNzIuMjQgQyAyMTQuNjkgNjguNzcgMjA5Ljk1IDY2LjU1IDIwNy45NCA2Mi4wNCBDIDIwNy4yNSA2Mi4xNyAyMDUuODYgNjIuNDIgMjA1LjE3IDYyLjU1IEMgMjA1LjUyIDYzLjU1IDIwNS40MCA2NS4wNiAyMDYuNzcgNjUuMzIgQyAyMDguODYgNjYuMTQgMjEwLjA4IDY4LjA5IDIxMS4yOCA2OS44NiBDIDIwOC4yNiA2OS43NSAyMDUuMjkgNjkuMjIgMjAyLjM2IDY4LjUyIEMgMjAyLjA4IDY2LjE4IDIwMS44NSA2My44NCAyMDEuNjQgNjEuNDkgQyAxOTkuODMgNjEuMjQgMTk4LjAxIDYxLjAwIDE5Ni4xOSA2MC44NSBDIDE5Ni41OCA2My43MyAxOTcuNjggNjYuNDMgMTk5Ljg5IDY4LjM5IEMgMTk0Ljg4IDY3LjY4IDE4OS45MSA2Ni43NCAxODQuOTQgNjUuODEgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTkyLjE5IDEwMi4wMCBDIDE5NC44OCA5Ni44NyAxOTguMTMgOTIuMDMgMjAxLjA4IDg3LjA0IEMgMjAzLjQ0IDkyLjMxIDIwNS40NSA5Ny43MyAyMDcuNjAgMTAzLjEwIEMgMjA0Ljc1IDEwNS4wMSAyMDIuOTMgMTA3Ljk4IDIwMC43NSAxMTAuNTcgQyAxOTcuNzkgMTA3LjgyIDE5NC44MyAxMDUuMDYgMTkyLjE5IDEwMi4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTcuNTMgOTkuNDkgQyAxOTguNDcgOTkuNDggMjAwLjM2IDk5LjQ2IDIwMS4zMCA5OS40NiBDIDIwMS4yOSAxMDIuMDggMjAxLjMwIDEwNC43MCAyMDEuMjkgMTA3LjMzIEMgMjAwLjY3IDEwNy4yOSAxOTkuNDQgMTA3LjIwIDE5OC44MiAxMDcuMTYgQyAxOTguNjUgMTA0LjU2IDE5OC42NCAxMDEuOTEgMTk3LjUzIDk5LjQ5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE3NS42OSAxMDkuNTUgQyAxNzYuMDAgMTA3LjQzIDE3NC4zNiAxMDMuNzIgMTc3LjcwIDEwMy42NSBDIDE3Ny43MSAxMDQuNTcgMTc3Ljc0IDEwNi40MiAxNzcuNzUgMTA3LjM1IEMgMTgwLjY1IDEwNy40NSAxODMuNTUgMTA3LjU2IDE4Ni40NSAxMDcuMzggQyAxODcuMjEgMTA4Ljk4IDE4Ny45OSAxMTAuNTcgMTg4Ljg2IDExMi4xMSBDIDE4OS43NyAxMTAuNjEgMTg4LjUzIDEwOC45OSAxODguMzQgMTA3LjQ4IEMgMTg5LjE5IDEwNy40NSAxOTAuODggMTA3LjQwIDE5MS43MyAxMDcuMzcgQyAxOTEuNzggMTEwLjMwIDE5MS44MCAxMTMuMjQgMTkxLjc4IDExNi4xNyBDIDE4OS4xMCAxMTUuOTMgMTg2LjEyIDExNi44MSAxODMuNjQgMTE1LjU2IEMgMTgzLjYzIDExNS4xNSAxODMuNjAgMTE0LjMzIDE4My41OCAxMTMuOTIgQyAxODQuNDAgMTEzLjgyIDE4Ni4wNCAxMTMuNjIgMTg2Ljg2IDExMy41MiBDIDE4NS43NiAxMTEuMzUgMTg0LjQzIDEwOS4zMCAxODIuODIgMTA3LjQ4IEMgMTgxLjMyIDExMC42MSAxODIuNzQgMTE3LjM2IDE3Ny4zNSAxMTYuNDAgQyAxNzcuMjQgMTE0Ljk4IDE3Ny44MSAxMTMuODggMTc5LjA1IDExMy4wOSBDIDE3OS4xOSAxMTIuMjEgMTc5LjQ2IDExMC40NSAxNzkuNjAgMTA5LjU3IEMgMTc4LjI5IDEwOS41NiAxNzYuOTkgMTA5LjU2IDE3NS42OSAxMDkuNTUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjA3LjQ5IDEwNy4zNyBDIDIwOS43NSAxMDcuNDAgMjEyLjAxIDEwNy40MSAyMTQuMjggMTA3LjQxIEMgMjE0LjIzIDExMC4xOCAyMTQuMjMgMTEyLjk1IDIxNC4zNiAxMTUuNzIgQyAyMTIuMTIgMTE2LjIzIDIwOS44MSAxMTYuMjIgMjA3LjUyIDExNi4yMyBDIDIwNy41MCAxMTUuNjEgMjA3LjQ0IDExNC4zOSAyMDcuNDEgMTEzLjc4IEMgMjA4Ljg2IDExMy43OCAyMTAuMzEgMTEzLjc5IDIxMS43NiAxMTMuNzkgQyAyMTEuNjYgMTEyLjE3IDIxMS44MiAxMTAuNDQgMjEwLjk0IDEwOS4wMSBDIDIxMC4zMCAxMTAuNzUgMjA5LjEyIDExMS41OCAyMDcuNDEgMTExLjUxIEMgMjA3LjQzIDExMC40NyAyMDcuNDcgMTA4LjQxIDIwNy40OSAxMDcuMzcgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjE1LjgyIDEwNy40MiBDIDIxNy45NSAxMDcuNDEgMjIwLjA5IDEwNy40MSAyMjIuMjIgMTA3LjQyIEMgMjIyLjE1IDExMC4xMyAyMjIuMTQgMTEyLjg1IDIyMi4yNSAxMTUuNTYgQyAyMjEuNjMgMTE1Ljc2IDIyMC4zOCAxMTYuMTUgMjE5Ljc2IDExNi4zNSBDIDIxOS43MyAxMTQuMDggMjE5LjcyIDExMS44MSAyMTkuNzAgMTA5LjU0IEMgMjE4LjQyIDEwOS41MyAyMTcuMTQgMTA5LjUzIDIxNS44NiAxMDkuNTMgTCAyMTUuODIgMTA3LjQyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDIxNi4yMyAxMTEuNDQgQyAyMTYuNzggMTExLjUzIDIxNy44NyAxMTEuNzAgMjE4LjQxIDExMS43OSBDIDIxOC4zOSAxMTMuMjggMjE4LjM3IDExNC43OCAyMTguMzUgMTE2LjI4IEMgMjE3LjY5IDExNi4yNCAyMTYuMzkgMTE2LjE1IDIxNS43NCAxMTYuMTEgQyAyMTUuODkgMTE0LjU1IDIxNi4wNSAxMTMuMDAgMjE2LjIzIDExMS40NCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxMTkuMjUgMTM2LjMwIEMgMTI0Ljc0IDEzNi4zNSAxMzAuMjMgMTM2LjMxIDEzNS43MyAxMzYuMzIgQyAxMzUuNzYgMTQzLjQyIDEzNS42OSAxNTAuNTIgMTM1Ljc3IDE1Ny42MiBDIDEzOC4xNyAxNTUuOTYgMTQxLjQ4IDE1NC44NyAxNDIuNjQgMTUxLjk1IEMgMTQzLjEyIDE0Ni43NiAxNDIuNjkgMTQxLjUzIDE0Mi44NiAxMzYuMzIgQyAxNDguNjMgMTM2LjMyIDE1NC40MCAxMzYuMzEgMTYwLjE4IDEzNi4zMyBDIDE2MC4xMCAxNDEuMjYgMTYwLjI2IDE0Ni4yMCAxNjAuMTIgMTUxLjEzIEMgMTU5Ljc4IDE1NS4wNSAxNTcuMzEgMTU4LjcxIDE1My44OSAxNjAuNjEgQyAxNDcuODUgMTY0LjA0IDE0MS44MCAxNjcuNDQgMTM1LjczIDE3MC44MCBDIDEzNS43MyAxNzcuODEgMTM1LjczIDE4NC44MiAxMzUuNzQgMTkxLjgzIEMgMTMwLjI0IDE5MS44NiAxMjQuNzQgMTkxLjgyIDExOS4yMyAxOTEuODYgQyAxMTkuMjcgMTczLjM0IDExOS4yMyAxNTQuODIgMTE5LjI1IDEzNi4zMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxNjQuOTIgMTM2LjMyIEMgMTcwLjQ2IDEzNi4zNSAxNzUuOTkgMTM2LjI4IDE4MS41MiAxMzYuMzUgQyAxODEuNDQgMTUwLjc5IDE4MS40MyAxNjUuMjMgMTgxLjUyIDE3OS42NyBDIDE3Ni4wNSAxNzkuNjIgMTcwLjU3IDE3OS44NyAxNjUuMTAgMTc5LjU3IEMgMTY0LjYzIDE2NS4yMyAxNjQuOTkgMTUwLjcyIDE2NC45MiAxMzYuMzIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTg2LjI4IDEzNi4zMCBDIDIwMC42OSAxMzYuMzQgMjE1LjEwIDEzNi4zMyAyMjkuNTEgMTM2LjMxIEMgMjI5LjUyIDE1MC43NyAyMjkuNDkgMTY1LjIzIDIyOS41MyAxNzkuNjkgQyAyMjMuOTQgMTc5LjY0IDIxOC4zNSAxNzkuODEgMjEyLjc3IDE3OS42MCBDIDIxMi45NSAxNzAuMjggMjEyLjc3IDE2MC45NSAyMTIuODcgMTUxLjYyIEMgMjA5LjUxIDE1MS41NSAyMDYuMTUgMTUxLjU3IDIwMi44MCAxNTEuNjAgQyAyMDIuODcgMTYwLjk2IDIwMi44MSAxNzAuMzMgMjAyLjgzIDE3OS42OSBDIDE5Ny4zMiAxNzkuNzMgMTkxLjgwIDE3OS42NyAxODYuMjkgMTc5LjY5IEMgMTg2LjMwIDE2NS4yMyAxODYuMzIgMTUwLjc2IDE4Ni4yOCAxMzYuMzAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjM0LjA5IDEzNi4yOCBDIDIzOS42NyAxMzYuMzggMjQ1LjI1IDEzNi4yOSAyNTAuODQgMTM2LjMzIEMgMjUwLjg2IDE0MS41MiAyNTAuNjYgMTQ2LjcyIDI1MC45OSAxNTEuOTAgQyAyNTMuODggMTQ4LjkwIDI1My41MyAxNDQuMjMgMjU1LjgwIDE0MC44MyBDIDI1Ny41NyAxMzcuNTkgMjYxLjQxIDEzNi4yOCAyNjQuOTIgMTM2LjM0IEMgMjY4Ljc0IDEzNi40MCAyNzIuODUgMTM1Ljc4IDI3Ni40MiAxMzcuNDggQyAyNzkuNTEgMTM5LjA0IDI4MC43NiAxNDIuNjcgMjgwLjcxIDE0NS45NSBDIDI4MC43NCAxNTcuMTggMjgwLjcwIDE2OC40MiAyODAuNzIgMTc5LjY2IEMgMjcyLjkyIDE3OS42NiAyNjUuMTIgMTc5LjcwIDI1Ny4zMiAxNzkuNjYgQyAyNTcuMzcgMTc0LjU5IDI1Ny4zNSAxNjkuNTIgMjU3LjMyIDE2NC40NSBDIDI1OS41NiAxNjQuNDUgMjYxLjgxIDE2NC40NCAyNjQuMDYgMTY0LjQzIEMgMjY0LjAzIDE2MC42MiAyNjQuMjQgMTU2Ljc5IDI2My43MyAxNTMuMDEgQyAyNjIuMDkgMTUyLjQxIDI1OS4xMSAxNTEuODYgMjU4LjQ1IDE1NC4wNCBDIDI1NS44NiAxNjIuNTUgMjUzLjUxIDE3MS4xNCAyNTAuOTQgMTc5LjY2IEMgMjQ1LjA3IDE3OS43MyAyMzkuMTkgMTc5LjcyIDIzMy4zMiAxNzkuNjYgQyAyMzUuNTQgMTcyLjY2IDIzNy41OSAxNjUuNjAgMjM5Ljg5IDE1OC42MiBDIDIzNy43OSAxNTguMjIgMjM0LjYwIDE1Ny45MCAyMzQuMzYgMTU1LjE4IEMgMjMzLjc2IDE0OC45MSAyMzQuMjUgMTQyLjU4IDIzNC4wOSAxMzYuMjggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjIuMzYgMTgzLjk4IEMgMjQuOTMgMTg0LjYzIDI3LjQyIDE4NS41NSAyOS43NCAxODYuODUgQyAyOC44MiAxODcuMzYgMjYuOTggMTg4LjM4IDI2LjA3IDE4OC44OSBDIDI2LjQ0IDE4OS4wNiAyNy4xOSAxODkuNDAgMjcuNTcgMTg5LjU2IEMgMjcuNzggMTkwLjI0IDI4LjIwIDE5MS42MCAyOC40MSAxOTIuMjggQyAyOC4yOSAxOTIuOTQgMjguMDYgMTk0LjI2IDI3Ljk0IDE5NC45MiBDIDI5LjQwIDE5Mi4xNCAzMi42MCAxOTAuOTQgMzQuMTAgMTg4LjIxIEMgMzQuNzIgMTg4LjIwIDM1Ljk3IDE4OC4yMCAzNi41OSAxODguMjAgQyAzNi41OCAxODkuMzcgMzYuNTcgMTkwLjU1IDM2LjU2IDE5MS43MyBDIDMzLjk1IDE5Mi43OSAzMS43MiAxOTQuNTEgMjkuNDEgMTk2LjA4IEMgMzAuNTkgMTk2Ljg3IDMxLjc4IDE5Ny42OCAzMi45NyAxOTguNDggQyAzMy44MyAxOTguMzUgMzUuNTcgMTk4LjA4IDM2LjQ0IDE5Ny45NSBDIDM2LjQ3IDE5OS41NyAzNi40OSAyMDEuMjAgMzYuNDggMjAyLjgzIEMgMzMuNjcgMjAxLjg3IDMxLjA2IDIwMC40NSAyOC40NCAxOTkuMDcgQyAyNy40OCAyMDEuMjIgMjUuNjEgMjAyLjY1IDIzLjc2IDIwMy45OSBDIDI1LjU5IDIwNS4zNCAyNy41NCAyMDYuNTcgMjkuMDYgMjA4LjI5IEMgMzAuMjAgMjA5LjgzIDI4Ljc1IDIxMS43NyAyOC40OCAyMTMuMzcgQyAyOS45MCAyMTQuMDQgMzEuMzMgMjE0Ljc1IDMyLjAwIDIxNi4yOSBDIDMwLjI4IDIxNi4zMCAyOC41NyAyMTYuMjIgMjYuODYgMjE2LjA0IEMgMjQuOTMgMjE1LjIzIDI1Ljk5IDIxMi44MyAyNS42NCAyMTEuMjcgQyAyNC44NiAyMTAuMjYgMjMuNjMgMjA5Ljc2IDIyLjYxIDIwOS4wNiBDIDIxLjI1IDIxMC4zMiAxOS40MyAyMTEuMzMgMTkuMDUgMjEzLjMwIEMgMjAuNDMgMjE0LjAzIDIxLjg1IDIxNC43OCAyMi42NiAyMTYuMjEgQyAyMC42OSAyMTYuMjYgMTguNzIgMjE2LjI1IDE2Ljc0IDIxNi4yMCBDIDE1Ljc2IDIxMi42MiAxOC4wMiAyMDkuMjEgMTcuMjYgMjA1LjY3IEMgMTYuMzYgMjA1LjEyIDE1LjQxIDIwNC42NSAxNC40NCAyMDQuMjUgQyAxMi45OCAyMDAuOTQgMTQuODEgMTk3LjQzIDE0LjIxIDE5NC4wMyBDIDEzLjg5IDE5Mi40MSAxMy40OSAxOTAuODIgMTMuMjAgMTg5LjIwIEMgMTMuODAgMTg5LjIyIDE1LjAyIDE4OS4yNCAxNS42MyAxODkuMjYgQyAxNS45MiAxOTMuNTAgMTUuNjIgMTk3Ljc0IDE1LjUxIDIwMS45OCBDIDE1LjkwIDIwMi40MiAxNi42OCAyMDMuMjkgMTcuMDcgMjAzLjcyIEMgMTguNTUgMjAyLjMzIDIwLjc1IDIwMS4zMiAyMS4xMiAxOTkuMTEgQyAyMS42NiAxOTUuNjQgMTguNzcgMTkyLjUwIDE5LjY4IDE4OS4wMSBDIDIwLjMyIDE4Ny4yMSAyMS40MiAxODUuNjMgMjIuMzYgMTgzLjk4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM2OS4yNSAxODYuOTAgQyAzNzEuNTQgMTg1LjU1IDM3NC4wNCAxODQuNjQgMzc2LjYwIDE4My45NSBDIDM3Ny41NCAxODUuNjAgMzc4LjYzIDE4Ny4xOSAzNzkuMzAgMTg4Ljk4IEMgMzc5Ljk4IDE5Mi4wOSAzNzguMDYgMTk0Ljk4IDM3Ny43NyAxOTguMDIgQyAzNzcuNjMgMjAwLjU5IDM3OS44MyAyMDIuMzUgMzgxLjg1IDIwMy40NyBDIDM4NC43OCAyMDIuNzAgMzgzLjAxIDE5OS4wOCAzODMuMjggMTk2Ljk5IEMgMzgzLjYxIDE5NC4wOSAzODEuOTEgMTkwLjAxIDM4NS4xNiAxODguMzEgQyAzODUuNDAgMTg5LjU2IDM4NS43MSAxOTAuODggMzg1LjIyIDE5Mi4xMyBDIDM4My42MyAxOTYuMTEgMzg2LjE0IDIwMC4zNiAzODQuNTcgMjA0LjM0IEMgMzgzLjg1IDIwNC41OSAzODIuNDIgMjA1LjEwIDM4MS43MSAyMDUuMzYgQyAzODAuNzUgMjA4Ljk0IDM4My42OSAyMTIuNzMgMzgxLjg5IDIxNi4wOCBDIDM4MC4wNyAyMTYuMzcgMzc4LjIyIDIxNi4yNCAzNzYuMzkgMjE2LjIyIEMgMzc3LjAxIDIxNC42MyAzNzguNTUgMjE0LjAyIDM3OS45NiAyMTMuMzUgQyAzNzkuNTEgMjExLjQwIDM3Ny43MyAyMTAuMzUgMzc2LjM4IDIwOS4wNyBDIDM3NS4zNCAyMDkuNzQgMzc0LjIyIDIxMC4zNCAzNzMuMzQgMjExLjIyIEMgMzczLjMwIDIxMi40NyAzNzMuMjcgMjEzLjczIDM3My4yNSAyMTQuOTggQyAzNzIuMDIgMjE3LjE0IDM2OC45OCAyMTUuODAgMzY3LjAyIDIxNi4yOCBDIDM2Ny42MCAyMTQuNjYgMzY5LjA3IDIxMy45OSAzNzAuNTAgMjEzLjMzIEMgMzcwLjA2IDIxMS44NiAzNjkuNjYgMjEwLjM5IDM2OS4yOCAyMDguOTEgQyAzNzEuMDUgMjA3LjA0IDM3My4wOCAyMDUuNDUgMzc1LjIxIDIwNC4wMiBDIDM3My4zNiAyMDIuNjYgMzcxLjU0IDIwMS4xOCAzNzAuNTAgMTk5LjA4IEMgMzY3LjkzIDIwMC41MCAzNjUuMzQgMjAxLjk0IDM2Mi40OSAyMDIuNzYgQyAzNjIuNDkgMjAxLjEwIDM2Mi41MSAxOTkuNDUgMzYyLjU1IDE5Ny43OSBDIDM2My4zOSAxOTcuOTcgMzY1LjA3IDE5OC4zMyAzNjUuOTAgMTk4LjUxIEMgMzY3LjE0IDE5Ny43MiAzNjguMzkgMTk2Ljk0IDM2OS42NSAxOTYuMTggQyAzNjcuMzMgMTk0LjU3IDM2NS4wNyAxOTIuODMgMzYyLjQ1IDE5MS43MiBDIDM2Mi40MiAxOTAuNTUgMzYyLjM5IDE4OS4zOCAzNjIuMzcgMTg4LjIxIEMgMzYyLjk5IDE4OC4yMSAzNjQuMjMgMTg4LjIxIDM2NC44NSAxODguMjEgQyAzNjYuMTAgMTkwLjI3IDM2OC4wMSAxOTEuODggMzcwLjM1IDE5Mi42MCBDIDM3MC4zNyAxOTMuMTMgMzcwLjQyIDE5NC4yMCAzNzAuNDQgMTk0LjczIEMgMzcxLjY1IDE5My4yNCAzNzEuMzkgMTkxLjM3IDM3MS4yNSAxODkuNjAgQyAzNzEuNjcgMTg5LjM5IDM3Mi40OSAxODguOTggMzcyLjkxIDE4OC43NyBDIDM3MS45OSAxODguMzAgMzcwLjE2IDE4Ny4zNyAzNjkuMjUgMTg2LjkwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDIwNi43OSAxODYuMzcgQyAyMDYuOTEgMTg2LjQwIDIwNy4xNiAxODYuNDYgMjA3LjI4IDE4Ni40OSBDIDIwNi45MyAxODcuNzUgMjA2LjYwIDE4OS4wMSAyMDYuMjggMTkwLjI4IEMgMjA1LjQ1IDE5My40MSAyMDQuNTggMTk2LjUzIDIwMy43NCAxOTkuNjYgQyAyMTIuMTggMjAwLjU5IDIyMC41MyAyMDIuMzQgMjI5LjA0IDIwMi41MyBDIDIzMC41NSAxOTkuNDkgMjMyLjE4IDE5Ni41MSAyMzMuODUgMTkzLjU2IEMgMjMzLjE5IDE5My42OSAyMzEuODcgMTkzLjk1IDIzMS4yMSAxOTQuMDggQyAyMjkuNjQgMTk1LjQyIDIyOC4wMiAxOTYuNzIgMjI2LjM5IDE5Ny45OSBDIDIyNi45OCAxOTYuNDIgMjI3LjYxIDE5NC44NyAyMjguMjQgMTkzLjMyIEMgMjI4LjcxIDE5Mi4xNiAyMjkuMTkgMTkxLjAyIDIyOS43MSAxODkuODggQyAyMjkuNzQgMTkxLjQyIDIyOS42MCAxOTIuOTUgMjI5LjI5IDE5NC40NyBDIDIzMC40NyAxOTIuOTQgMjMxLjc1IDE5MS40OSAyMzMuMTEgMTkwLjEyIEwgMjMyLjExIDE5Mi4xMyBDIDIzMi44MiAxOTIuNjMgMjMzLjU0IDE5My4xNCAyMzQuMjYgMTkzLjY1IEwgMjM0Ljg1IDE5MS4xOSBDIDIzNS40MiAxOTkuNTEgMjI4LjE5IDIwNS40NiAyMjYuMzggMjEzLjIyIEMgMjMxLjczIDIxMy4yNSAyMzcuMDggMjEzLjIxIDI0Mi40NCAyMTMuMjIgQyAyNDIuNDUgMjI3LjY3IDI0Mi40NCAyNDIuMTIgMjQyLjQ1IDI1Ni41OCBDIDIzNi45MCAyNTYuNTMgMjMxLjM1IDI1Ni42MyAyMjUuODEgMjU2LjUwIEMgMjI1LjgwIDI0Mi41NyAyMjYuMDkgMjI4LjYzIDIyNS42NiAyMTQuNzIgQyAyMjQuNDQgMjE3LjI4IDIyMy40NCAyMTkuOTQgMjIyLjI1IDIyMi41MiBDIDIxNy4xOCAyMzIuOTcgMjE1LjY5IDI0NC44MSAyMTAuMTIgMjU1LjA0IEMgMjA3Ljc3IDI1OC4xNyAyMDUuMDggMjYxLjE3IDIwMS44NyAyNjMuNDMgQyAxOTYuODYgMjYzLjU0IDE5MS44OCAyNjIuNzYgMTg2Ljg4IDI2Mi41NCBDIDE4MS42OCAyNjIuMjQgMTc3LjA0IDI1OS42OSAxNzIuMzIgMjU3Ljc4IEMgMTY5LjcyIDI2NS45NCAxNjYuOTggMjc0LjA2IDE2NC4xNSAyODIuMTQgQyAxNjMuODcgMjgwLjk1IDE2My42NCAyNzkuNzUgMTYzLjQ0IDI3OC41NSBDIDE2Mi4xOCAyNzkuNTcgMTYxLjI3IDI4MC45MiAxNjAuMTkgMjgyLjExIEMgMTYwLjc4IDI4MC4yMCAxNjEuNTMgMjc4LjMzIDE2Mi42MSAyNzYuNjUgQyAxNjEuNTIgMjc2Ljc0IDE2MC40MyAyNzYuODMgMTU5LjM0IDI3Ni45MiBDIDE1OS4wNiAyNzcuNjAgMTU4LjUwIDI3OC45NyAxNTguMjIgMjc5LjY2IEMgMTU3Ljk4IDI3OS42MiAxNTcuNDggMjc5LjU1IDE1Ny4yMyAyNzkuNTEgQyAxNTcuNjAgMjc4Ljg4IDE1OC4zMyAyNzcuNjIgMTU4LjcwIDI3Ni45OSBDIDE1Ny43OSAyNzYuMzEgMTU2LjgwIDI3NS43NSAxNTUuODEgMjc1LjE5IEMgMTU1Ljg2IDI3Ni42NiAxNTUuMzUgMjc3LjkwIDE1NC4yNyAyNzguOTQgQyAxNTQuNTAgMjc3LjQwIDE1NC44MiAyNzUuODcgMTU1LjEzIDI3NC4zNiBMIDE1Ni42NiAyNzQuNjEgQyAxNTYuMDUgMjczLjY3IDE1NS40NCAyNzIuNzQgMTU0LjgxIDI3MS44MyBDIDE1My45MCAyNzMuNjUgMTUyLjk5IDI3NS41MCAxNTEuOTkgMjc3LjI5IEMgMTUxLjMyIDI3Ni45OCAxNDkuOTkgMjc2LjM4IDE0OS4zMiAyNzYuMDggQyAxNDkuNzMgMjc1LjAwIDE1MC4xMiAyNzMuOTEgMTUwLjUwIDI3Mi44MyBDIDE1MC44NCAyNzMuNjIgMTUxLjUxIDI3NS4yMCAxNTEuODUgMjc1Ljk5IEwgMTUxLjEyIDI3My4xNCBMIDE1Mi40NCAyNzMuNjggQyAxNTIuOTEgMjcyLjQ3IDE1My40MSAyNzEuMjcgMTUzLjg5IDI3MC4wNiBDIDE1NC4zMSAyNjkuNzUgMTU1LjE0IDI2OS4xNSAxNTUuNTYgMjY4Ljg1IEMgMTU1LjMzIDI2OS4zNCAxNTQuODggMjcwLjMzIDE1NC42NiAyNzAuODIgQyAxNTYuMTUgMjcxLjg2IDE1Ni42MCAyNzMuODkgMTU4LjA1IDI3NC44NiBDIDE1OS45OSAyNzQuMDUgMTYwLjM4IDI3MS4zOSAxNjEuNjUgMjY5LjgwIEMgMTYxLjM3IDI3Mi4xMSAxNjAuNTQgMjc0LjI5IDE1OS4zNyAyNzYuMjkgQyAxNjAuNTIgMjc2LjE5IDE2MS42OCAyNzYuMTEgMTYyLjgzIDI3Ni4wMyBDIDE2NS4xMCAyNzEuMjcgMTY2LjcwIDI2Ni4yNCAxNjguMDUgMjYxLjE1IEMgMTY1LjY0IDI1OS44NCAxNjMuMzMgMjU4LjMxIDE2MC43NiAyNTcuMzQgQyAxNTcuNTQgMjU2LjMxIDE1NC4xMyAyNTYuMDIgMTUwLjk1IDI1NC44OCBDIDE0Ny44OSAyNTMuODcgMTQ1LjA5IDI1Mi4yMSAxNDIuMDMgMjUxLjIxIEMgMTM4Ljk1IDI1NC4yNiAxMzYuNzEgMjU4LjA0IDEzNC4wOSAyNjEuNDggQyAxMzIuNTkgMjYzLjQ4IDEzMS40NCAyNjUuNzEgMTMwLjI4IDI2Ny45MiBDIDEzMS42MSAyNjMuOTIgMTMzLjQyIDI2MC4xMCAxMzUuNzYgMjU2LjU5IEMgMTMwLjY5IDI1Ni41NCAxMjUuNjIgMjU2LjYwIDEyMC41NSAyNTYuNTQgQyAxMjAuNTYgMjQyLjE0IDEyMC42OSAyMjcuNzMgMTIwLjQ5IDIxMy4zNCBDIDEyNi4wNCAyMTMuMDkgMTMxLjYwIDIxMy4yNyAxMzcuMTYgMjEzLjIyIEMgMTM3LjI2IDIyNi44MiAxMzYuOTAgMjQwLjQyIDEzNy4zNCAyNTQuMDEgQyAxNDUuMjkgMjQwLjMwIDE1My4wMyAyMjUuOTggMTY1LjA1IDIxNS4zMyBDIDE3My4xNiAyMDguMzMgMTg1LjQ5IDIwOS42NyAxOTQuMjUgMjE0Ljc0IEMgMTk5LjM0IDIwNS43MiAyMDIuNzAgMTk1Ljg2IDIwNi43OSAxODYuMzcgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjExLjE0IDE5MC44OSBDIDIxMS44MCAxODkuNDAgMjEyLjQ5IDE4Ny44NyAyMTMuNzkgMTg2LjgzIEMgMjEzLjExIDE4OC40NyAyMTIuMjcgMTkwLjA2IDIxMi4wOSAxOTEuODYgQyAyMTMuNDMgMTkwLjY3IDIxNC42OCAxODkuMzkgMjE1Ljk1IDE4OC4xMiBDIDIxNS40NSAxODkuMzIgMjE0Ljk1IDE5MC41MyAyMTQuNDYgMTkxLjc0IEMgMjE2LjgyIDE5Mi4yNyAyMTguMTUgMTg5LjkyIDIxOS44OSAxODguOTQgQyAyMTkuNDAgMTg5LjgwIDIxOC40MiAxOTEuNTQgMjE3LjkzIDE5Mi40MCBDIDIxOC42NCAxOTIuMTMgMjIwLjA3IDE5MS41OCAyMjAuNzkgMTkxLjMxIEMgMjIxLjAzIDE5MS42OSAyMjEuNTEgMTkyLjQ2IDIyMS43NSAxOTIuODQgQyAyMjIuMjYgMTkxLjk1IDIyMy4yNyAxOTAuMTcgMjIzLjc4IDE4OS4yOCBMIDIyMy42MCAxOTMuNDQgQyAyMjQuNzYgMTkyLjM0IDIyNS44OCAxOTEuMjEgMjI2Ljk2IDE5MC4wNSBDIDIyNi43NyAxOTAuNzkgMjI2LjM5IDE5Mi4yOCAyMjYuMjAgMTkzLjAzIEwgMjI4LjI0IDE5My4zMiBDIDIyNy42MSAxOTQuODcgMjI2Ljk4IDE5Ni40MiAyMjYuMzkgMTk3Ljk5IEMgMjI4LjAyIDE5Ni43MiAyMjkuNjQgMTk1LjQyIDIzMS4yMSAxOTQuMDggQyAyMzEuODcgMTkzLjk1IDIzMy4xOSAxOTMuNjkgMjMzLjg1IDE5My41NiBDIDIzMi4xOCAxOTYuNTEgMjMwLjU1IDE5OS40OSAyMjkuMDQgMjAyLjUzIEMgMjIwLjUzIDIwMi4zNCAyMTIuMTggMjAwLjU5IDIwMy43NCAxOTkuNjYgQyAyMDQuNTggMTk2LjUzIDIwNS40NSAxOTMuNDEgMjA2LjI4IDE5MC4yOCBDIDIwNy44OSAxOTAuNDggMjA5LjUyIDE5MC42OSAyMTEuMTQgMTkwLjg5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDI5NC40OSAyMjkuNDkgQyAyOTQuNDkgMjIwLjIxIDI5NC40MiAyMTAuOTQgMjk0LjUwIDIwMS42NyBDIDMwMC4wNiAyMDEuNjkgMzA1LjYyIDIwMS43MiAzMTEuMTkgMjAxLjY3IEMgMzExLjE4IDIwNS41MyAzMTEuMTggMjA5LjM4IDMxMS4xOCAyMTMuMjQgQyAzMTguNzIgMjEzLjIwIDMyNi4yNyAyMTMuMjMgMzMzLjgyIDIxMy4yMyBDIDMzMy44MiAyMjAuNDggMzMzLjg2IDIyNy43NCAzMzMuODAgMjM1LjAwIEMgMzM0LjE3IDI0My41OCAzMjMuMDggMjQ3Ljc5IDMyNC4yOSAyNTYuNTYgQyAzMTguMTIgMjU2LjU3IDMxMS45NSAyNTYuNTggMzA1Ljc4IDI1Ni41NSBDIDMwNS44NiAyNTMuOTQgMzA1LjM5IDI1MS4wMyAzMDcuMDQgMjQ4Ljc4IEMgMzA5Ljc4IDI0NC42MiAzMTIuOTAgMjQwLjcxIDMxNS41NyAyMzYuNTAgQyAzMTYuOTMgMjM0LjQzIDMxNi4yNyAyMzEuODEgMzE2LjUwIDIyOS40OCBDIDMwOS4xNiAyMjkuNTAgMzAxLjgyIDIyOS40OCAyOTQuNDkgMjI5LjQ5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDAuMDAgMjA3LjQ2IEMgMS42MiAyMjUuODUgMy45NyAyNDQuMzMgOS44OSAyNjEuOTAgQyAyNi44MSAzMTUuMDUgNjcuNDAgMzU5Ljc2IDExOC4xNiAzODIuNjQgQyAxNDEuMTMgMzkzLjE0IDE2Ni4xNyAzOTguNzYgMTkxLjM2IDQwMC4wMCBMIDAuMDAgNDAwLjAwIEwgMC4wMCAyMDcuNDYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzgyLjgwIDI4MS44NiBDIDM5My4yOSAyNTguOTAgMzk4LjU3IDIzMy44NiA0MDAuMDAgMjA4LjczIEwgNDAwLjAwIDQwMC4wMCBMIDIxMC4yOSA0MDAuMDAgQyAyMjQuNjggMzk4Ljg5IDIzOS4wOCAzOTcuMTAgMjUyLjk5IDM5My4xMSBDIDMwOS45NSAzNzcuODMgMzU4LjgyIDMzNS42OCAzODIuODAgMjgxLjg2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDcyLjU1IDIxMy4yMCBDIDgzLjM4IDIxMy4yNSA5NC4yMSAyMTMuMjAgMTA1LjA0IDIxMy4yMyBDIDEwOC4wOCAyMTMuMjQgMTExLjQzIDIxMy45NyAxMTMuNDggMjE2LjQwIEMgMTE1LjQzIDIxOC44MSAxMTUuNTkgMjIyLjAzIDExNS41OSAyMjUuMDAgQyAxMTUuNTYgMjM1LjUxIDExNS41OSAyNDYuMDIgMTE1LjU4IDI1Ni41NCBDIDEwOS45OSAyNTYuNTggMTA0LjQwIDI1Ni41OSA5OC44MCAyNTYuNTIgQyA5OC42OCAyNDcuMjMgOTkuMzEgMjM3Ljg4IDk4LjQ2IDIyOC42MyBDIDk1LjMzIDIyOC40NSA5Mi4xOSAyMjguNDUgODkuMDUgMjI4LjQzIEMgODguNjEgMjM1Ljg3IDg5LjIwIDI0My4zNCA4OC43NCAyNTAuNzggQyA4OC41MSAyNTMuNzAgODYuMDIgMjU2LjA1IDgzLjE1IDI1Ni4zMiBDIDc3LjYzIDI1Ni44NiA3Mi4wNiAyNTYuNDMgNjYuNTIgMjU2LjU1IEMgNjYuNTUgMjUxLjI2IDY2LjUyIDI0NS45NiA2Ni41NCAyNDAuNjYgQyA2OC40NCAyNDAuMjkgNzEuMDcgMjQxLjQ1IDcyLjQ5IDIzOS43OSBDIDcyLjY1IDIzMC45MyA3Mi41MSAyMjIuMDYgNzIuNTUgMjEzLjIwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDI0Ny4yNSAyMTMuMjUgQyAyNjEuNjkgMjEzLjI0IDI3Ni4xMyAyMTMuMTMgMjkwLjU2IDIxMy4zMSBDIDI5MC4zNyAyMjcuNzIgMjkwLjUxIDI0Mi4xNCAyOTAuNDkgMjU2LjU2IEMgMjg0LjkyIDI1Ni41NCAyNzkuMzUgMjU2LjYzIDI3My43OCAyNTYuNTEgQyAyNzMuODYgMjQ3LjE2IDI3My43MyAyMzcuODIgMjczLjg1IDIyOC40NyBDIDI3MC40OSAyMjguNDYgMjY3LjE0IDIyOC40NCAyNjMuNzkgMjI4LjUxIEMgMjYzLjgzIDIzNy44NiAyNjMuNzUgMjQ3LjIyIDI2My44NCAyNTYuNTggQyAyNTguMzEgMjU2LjU0IDI1Mi43OSAyNTYuNTkgMjQ3LjI3IDI1Ni41NSBDIDI0Ny4yNyAyNDIuMTEgMjQ3LjMwIDIyNy42OCAyNDcuMjUgMjEzLjI1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ny4xMCAyMTkuMTIgQyAxOTUuOTkgMjE3LjQ5IDE5Ni4zNiAyMTUuNzAgMTk3LjY0IDIxNC4zMSBDIDIwNC42MyAyMTguMzQgMjEzLjAxIDIxOC41MyAyMjAuODMgMjE5LjQwIEMgMjE4LjExIDIyNC41MSAyMTYuNTMgMjMwLjEwIDIxNC40OCAyMzUuNDkgQyAyMDkuMjEgMjM0Ljc1IDIwMy45OSAyMzMuNzUgMTk4LjcxIDIzMy4xNCBDIDE5OC42OCAyMjguNDMgMTk5LjQ0IDIyMy40NCAxOTcuMTAgMjE5LjEyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5MC4wOSAyMjMuMTQgQyAxOTIuMDQgMjIxLjk1IDE5My4xNCAyMTkuODQgMTk1LjA2IDIxOC42MSBDIDE5Ny4xNiAyMjQuNTEgMTk2LjI3IDIzMC44OCAxOTUuNjkgMjM2Ljk2IEMgMTkxLjM3IDIzNS4zMSAxODYuNzIgMjM1LjMwIDE4Mi4xNyAyMzUuMjcgQyAxODMuMDIgMjMwLjQ0IDE4NS42NiAyMjUuNTQgMTkwLjA5IDIyMy4xNCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxNTIuNDkgMjMzLjkyIEMgMTU1LjgyIDIzMC4yMyAxNTguMjIgMjI1LjY5IDE2Mi4wOSAyMjIuNTEgQyAxNjkuMTQgMjIyLjQwIDE3Ni42MyAyMjQuMzMgMTgyLjE4IDIyOC44MiBDIDE3OS41MSAyMzIuNTYgMTc2Ljg4IDIzNi4zOCAxNzUuMjggMjQwLjcyIEMgMTY3LjY0IDIzOC42NCAxNTkuOTYgMjM2LjU2IDE1Mi40OSAyMzMuOTIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk5LjU1IDI1MC4xNSBDIDIwMi43MCAyNTAuODggMjA1LjgxIDI1MS44MiAyMDguODkgMjUyLjgxIEMgMjA2Ljk4IDI1Ni4wMiAyMDQuNDggMjU5LjE1IDIwMC45NSAyNjAuNjUgQyAxOTEuNTUgMjYxLjMxIDE4Mi4wMiAyNTkuMzYgMTczLjQ3IDI1NS40MyBDIDE3My40NyAyNTQuODQgMTczLjQ3IDI1My42OCAxNzMuNDcgMjUzLjA5IEMgMTgxLjgwIDI1NS4yMyAxOTAuNDAgMjU3LjUyIDE5OS4wMyAyNTUuNjUgQyAxOTkuMjYgMjUzLjgyIDE5OS40MiAyNTEuOTkgMTk5LjU1IDI1MC4xNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxMzQuMDkgMjYxLjQ4IEMgMTM2LjcxIDI1OC4wNCAxMzguOTUgMjU0LjI2IDE0Mi4wMyAyNTEuMjEgQyAxNDUuMDkgMjUyLjIxIDE0Ny44OSAyNTMuODcgMTUwLjk1IDI1NC44OCBDIDE1NC4xMyAyNTYuMDIgMTU3LjU0IDI1Ni4zMSAxNjAuNzYgMjU3LjM0IEMgMTYzLjMzIDI1OC4zMSAxNjUuNjQgMjU5Ljg0IDE2OC4wNSAyNjEuMTUgQyAxNjYuNzAgMjY2LjI0IDE2NS4xMCAyNzEuMjcgMTYyLjgzIDI3Ni4wMyBDIDE2MS42OCAyNzYuMTEgMTYwLjUyIDI3Ni4xOSAxNTkuMzcgMjc2LjI5IEMgMTYwLjU0IDI3NC4yOSAxNjEuMzcgMjcyLjExIDE2MS42NSAyNjkuODAgQyAxNjAuMzggMjcxLjM5IDE1OS45OSAyNzQuMDUgMTU4LjA1IDI3NC44NiBDIDE1Ni42MCAyNzMuODkgMTU2LjE1IDI3MS44NiAxNTQuNjYgMjcwLjgyIEMgMTU0Ljg4IDI3MC4zMyAxNTUuMzMgMjY5LjM0IDE1NS41NiAyNjguODUgQyAxNTUuMTQgMjY5LjE1IDE1NC4zMSAyNjkuNzUgMTUzLjg5IDI3MC4wNiBDIDE1My40MCAyNzAuNDIgMTUyLjQxIDI3MS4xNSAxNTEuOTIgMjcxLjUyIEMgMTUxLjM4IDI3MS4zOCAxNTAuMzAgMjcxLjEyIDE0OS43NiAyNzAuOTkgQyAxNDguNTggMjcyLjkyIDE0Ny4zMSAyNzQuODYgMTQ1LjM4IDI3Ni4xMiBDIDE0Ni4xMCAyNzMuMzcgMTQ5Ljc2IDI3MC4yMyAxNDYuNDMgMjY3LjkyIEMgMTQ2LjU1IDI2Ni44OSAxNDYuNjggMjY1Ljg3IDE0Ni44MCAyNjQuODYgQyAxNDYuMDIgMjY1Ljk4IDE0NS4yMyAyNjcuMTAgMTQ0LjQ2IDI2OC4yNCBMIDE0My4zNyAyNjkuNjYgTCAxNDMuNjAgMjY3LjA0IEMgMTQzLjc5IDI2Ni4yMiAxNDQuMTcgMjY0LjU3IDE0NC4zNiAyNjMuNzQgQyAxNDMuNDkgMjY0Ljg4IDE0Mi42MiAyNjYuMDEgMTQxLjc5IDI2Ny4xOCBDIDE0MS4zNiAyNjYuNjMgMTQwLjUwIDI2NS41MyAxNDAuMDcgMjY0Ljk3IEMgMTQwLjUyIDI2My41NCAxNDEuMDAgMjYyLjEyIDE0MS40NyAyNjAuNzAgQyAxNDAuODUgMjYxLjU4IDE0MC4yMiAyNjIuNDYgMTM5LjYwIDI2My4zNSBDIDEzNS44MyAyNjIuOTQgMTM1LjM4IDI2Ny4xNiAxMzMuMDYgMjY5LjExIEMgMTMzLjc3IDI2Ni45NiAxMzQuNzggMjY0Ljk0IDEzNS43OSAyNjIuOTIgQyAxMzUuMzcgMjYyLjU2IDEzNC41MiAyNjEuODQgMTM0LjA5IDI2MS40OCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxMzkuNjAgMjYzLjM1IEMgMTQwLjIyIDI2Mi40NiAxNDAuODUgMjYxLjU4IDE0MS40NyAyNjAuNzAgQyAxNDEuMDAgMjYyLjEyIDE0MC41MiAyNjMuNTQgMTQwLjA3IDI2NC45NyBDIDEzOS40NiAyNjcuNjEgMTM3LjcwIDI2OS43NiAxMzUuMjIgMjcwLjgzIEMgMTM2LjU1IDI2OC4yNiAxMzguMTEgMjY1LjgyIDEzOS42MCAyNjMuMzUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzYuMTYgMjYzLjE2IEMgMzcuMTEgMjYyLjgxIDM4LjA2IDI2Mi40NyAzOS4wMSAyNjIuMTQgQyA0MC4yMiAyNjYuMTUgNDMuNTAgMjY5Ljc3IDQzLjI0IDI3NC4wNiBDIDQwLjUwIDI3Ni4xNCAzNy4xOSAyNzcuMjggMzQuMTggMjc4LjkwIEMgMzMuNDEgMjc3LjMzIDMyLjYzIDI3NS43NiAzMS44OSAyNzQuMTggQyAzNC4zNiAyNzMuMDEgMzYuODMgMjcxLjg2IDM5LjMxIDI3MC43MyBDIDM4LjI4IDI2OC4xOSAzNy4yMCAyNjUuNjkgMzYuMTYgMjYzLjE2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM1Ny44OSAyNjIuNTYgQyAzNTkuNTUgMjYzLjIxIDM2MS4yMCAyNjMuODcgMzYyLjg3IDI2NC41MiBDIDM2My4xNCAyNjUuOTIgMzYzLjE5IDI2Ny4zNCAzNjMuMDYgMjY4Ljc2IEMgMzY0Ljk2IDI2Ny45NyAzNjYuODQgMjY3LjE0IDM2OC43MyAyNjYuMzEgQyAzNjcuOTYgMjY4LjA0IDM2Ny4xOSAyNjkuNzcgMzY2LjQ3IDI3MS41MiBDIDM2My44OSAyNzIuNzIgMzYxLjI0IDI3My43NCAzNTguNjEgMjc0LjgwIEMgMzYwLjEyIDI3NS44NCAzNjEuNzggMjc2LjYyIDM2My40OSAyNzcuMjYgQyAzNjIuODEgMjc4LjkwIDM2Mi4xMCAyODAuNTIgMzYxLjM4IDI4Mi4xNCBDIDM1OS40NCAyODEuMjQgMzU3LjU2IDI4MC4yMiAzNTUuNzMgMjc5LjE0IEMgMzU1Ljc1IDI3OC4yOSAzNTUuNzkgMjc2LjU4IDM1NS44MiAyNzUuNzIgQyAzNTQuMjMgMjc2LjMyIDM1Mi42NCAyNzYuOTIgMzUxLjA2IDI3Ny41MiBDIDM1MS42OCAyNzUuODYgMzUyLjE2IDI3NC4wMyAzNTMuNDIgMjcyLjczIEMgMzU1LjgyIDI3MS42MCAzNTguMzcgMjcwLjgxIDM2MC44MyAyNjkuODEgQyAzNTkuMzMgMjY4LjY0IDM1Ny42MiAyNjcuODAgMzU1Ljg3IDI2Ny4wNyBDIDM1Ni41NSAyNjUuNTYgMzU3LjIyIDI2NC4wNiAzNTcuODkgMjYyLjU2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE0MS43OSAyNjcuMTggQyAxNDIuNjIgMjY2LjAxIDE0My40OSAyNjQuODggMTQ0LjM2IDI2My43NCBDIDE0NC4xNyAyNjQuNTcgMTQzLjc5IDI2Ni4yMiAxNDMuNjAgMjY3LjA0IEMgMTQyLjgzIDI2OS40NSAxNDEuOTggMjcyLjM1IDEzOS4zMCAyNzMuMjIgQyAxNDAuMDcgMjcxLjE4IDE0MC43NyAyNjkuMTAgMTQxLjc5IDI2Ny4xOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxNDQuNDYgMjY4LjI0IEMgMTQ1LjIzIDI2Ny4xMCAxNDYuMDIgMjY1Ljk4IDE0Ni44MCAyNjQuODYgQyAxNDYuNjggMjY1Ljg3IDE0Ni41NSAyNjYuODkgMTQ2LjQzIDI2Ny45MiBDIDE0NS43MSAyNjkuODYgMTQ0LjkxIDI3MS43NyAxNDQuMjAgMjczLjcxIEMgMTQzLjk4IDI3My42OCAxNDMuNTQgMjczLjYwIDE0My4zMiAyNzMuNTYgQyAxNDMuNjcgMjcxLjc4IDE0My45MSAyNjkuOTcgMTQ0LjQ2IDI2OC4yNCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzOS42MyAyNzkuMjkgQyA0MS42MiAyNzguMjQgNDMuNjAgMjc3LjE3IDQ1LjYwIDI3Ni4xNCBDIDQ2LjM2IDI3Ny41OSA0Ny4xMyAyNzkuMDUgNDcuODggMjgwLjUxIEMgNDUuODggMjgxLjU5IDQzLjg5IDI4Mi42NiA0MS44NyAyODMuNzAgQyA0MS4xMyAyODIuMjMgNDAuMzggMjgwLjc2IDM5LjYzIDI3OS4yOSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAzMTUuMTIgMjc1Ljg4IEMgMzE2LjU1IDI3Ny44NSAzMTcuMzMgMjgwLjE4IDMxOC4xMyAyODIuNDYgQyAzMTguNjMgMjgxLjEzIDMxOS4xNiAyNzkuODEgMzE5LjcyIDI3OC41MCBDIDMxOS42OCAyODIuNDIgMzE4LjgwIDI4Ni44MCAzMjIuMDUgMjg5Ljc2IEwgMzIyLjE1IDI4OS45MCBDIDMyMS41NCAyOTAuNTcgMzIwLjk0IDI5MS4yNiAzMjAuMzUgMjkxLjk1IEMgMzE4LjE5IDI4OC42NyAzMTYuMTUgMjg0LjU0IDMxMS43MCAyODQuMjMgQyAzMTIuODIgMjgzLjkzIDMxMy45NSAyODMuNjQgMzE1LjA4IDI4My4zNSBDIDMxMy42MSAyODIuNzUgMzEyLjM1IDI4MS44NyAzMTEuMzAgMjgwLjY5IEMgMzEyLjc4IDI4MS4yMCAzMTQuMjMgMjgxLjc3IDMxNS42NyAyODIuMzkgQyAzMTQuNDQgMjgwLjg3IDMxMy4yMiAyNzkuMzYgMzEyLjE4IDI3Ny43MiBDIDMxMy44MCAyNzguNjQgMzE1LjMxIDI3OS43MyAzMTYuNzEgMjgxLjAwIEMgMzE2LjMxIDI3OS43MiAzMTUuNTIgMjc3LjE2IDMxNS4xMiAyNzUuODggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gNzcuODkgMjg5LjAyIEMgODIuNjcgMjg1LjkzIDg2LjY2IDI4MS44MyA4OS43NyAyNzcuMDcgQyA5MC4xOCAyNzcuMzkgOTEuMDEgMjc4LjAyIDkxLjQyIDI3OC4zNCBDIDkxLjcwIDI3OS4xMSA5Mi4yNiAyODAuNjQgOTIuNTMgMjgxLjQwIEMgODkuMTggMjg1LjEwIDg1LjEyIDI4OC4xMiA4MS4wOSAyOTEuMDQgQyA4MS4yNSAyOTIuMjMgODEuNTAgMjkzLjQxIDgxLjczIDI5NC42MCBDIDgzLjI2IDI5My45NCA4NC44MSAyOTMuODcgODYuNDAgMjk0LjQwIEMgODcuMzcgMjk2LjY1IDg4LjQwIDI5OC45MyA4OC4zNCAzMDEuNDUgQyA4NS44NSAyOTkuNTkgODQuMzkgMjk2LjU1IDgxLjUzIDI5NS4xOSBDIDgwLjEzIDI5My4yNCA3OS40MyAyOTAuODggNzcuODkgMjg5LjAyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM0My43MiAyODkuNzMgQyAzNDYuMDMgMjg2LjI3IDM0Ny4zNyAyODEuOTIgMzUwLjg1IDI3OS40MSBDIDM1My45MiAyODEuMDEgMzU2LjkzIDI4Mi43MiAzNTkuOTUgMjg0LjQzIEMgMzU5LjE0IDI4NS45MyAzNTguMzEgMjg3LjQxIDM1Ny40OCAyODguODkgQyAzNTUuMDUgMjg3LjUwIDM1Mi42NSAyODYuMDQgMzUwLjE1IDI4NC44MCBDIDM0OC45NSAyODYuOTkgMzQ3LjYwIDI4OS4xMCAzNDYuMjMgMjkxLjE5IEMgMzQ1LjYwIDI5MC44MyAzNDQuMzUgMjkwLjEwIDM0My43MiAyODkuNzMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gNDMuNDIgMjg5LjU2IEMgNDUuNDkgMjg3LjQ1IDQ3LjM2IDI4NS4xNiA0OS4yMCAyODIuODUgQyA1MC4wOSAyODQuMjcgNTAuOTcgMjg1LjcwIDUxLjg2IDI4Ny4xMiBDIDQ5Ljg4IDI4OS4zNCA0Ny43NiAyOTEuNDYgNDYuMTQgMjkzLjk2IEMgNDYuNTMgMjk0LjM3IDQ3LjMxIDI5NS4xOCA0Ny43MCAyOTUuNTkgQyA0OS45MSAyOTQuMTMgNTIuMTAgMjkyLjY1IDU0LjE5IDI5MS4wMyBDIDU1LjE2IDI5Mi4zMSA1Ni4xNCAyOTMuNTggNTYuOTEgMjk1LjAwIEMgNTMuODggMjk2LjgzIDUwLjc0IDMwMS4yOCA0Ni44NSAyOTkuNDAgQyA0My40NCAyOTYuMzMgNDEuNTUgMjkxLjk1IDM5LjIwIDI4OC4wOCBDIDM5Ljg5IDI4Ny43MyA0MS4yNyAyODcuMDQgNDEuOTcgMjg2LjY5IEMgNDIuMzMgMjg3LjQxIDQzLjA2IDI4OC44NCA0My40MiAyODkuNTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gOTcuODYgMjg4LjAwIEMgMTAwLjYxIDI4Ni40NCAxMDMuNTIgMjg1LjE5IDEwNi4xNiAyODMuNDMgQyAxMDYuMjkgMjg0LjA5IDEwNi41NiAyODUuNDAgMTA2LjY5IDI4Ni4wNSBDIDEwNC4xMCAyODguMDcgMTAxLjE5IDI4OS42MSA5OC4zNyAyOTEuMjYgQyA5Ny4zMiAyOTcuNjIgOTguMDcgMzA0LjA4IDk3LjI0IDMxMC40NiBDIDk1LjYzIDMwOS4zMSA5NC4xMSAzMDguMDUgOTIuNjQgMzA2LjczIEMgOTIuODUgMzAyLjU1IDkzLjQwIDI5OC4zOCA5NC41NiAyOTQuMzUgQyA5NS4yMiAyOTIuMDcgOTUuNzAgMjg5LjM2IDk3Ljg2IDI4OC4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAzMDYuNDcgMjg2Ljc2IEMgMzA2LjkyIDI4NC44MiAzMDguNTkgMjg1LjIzIDMwOS4yOCAyODYuNzggQyAzMDkuNTkgMjg2LjY0IDMxMC4yMyAyODYuMzQgMzEwLjU1IDI4Ni4xOSBDIDMxMS4xMyAyOTAuNDEgMzEyLjU4IDI5NC41NiAzMTYuMTUgMjk3LjE1IEMgMzE1LjM3IDI5OC4wMSAzMTQuNTkgMjk4Ljg2IDMxMy44MSAyOTkuNzIgQyAzMTEuNDcgMjk2Ljc0IDMwOC40NyAyOTQuNDEgMzA1LjQxIDI5Mi4yMiBDIDMwNi4yNyAyOTIuMjMgMzA3Ljk3IDI5Mi4yNSAzMDguODIgMjkyLjI2IEMgMzA3LjcxIDI5MC45OCAzMDYuNTkgMjg5LjcyIDMwNS40OSAyODguNDQgQyAzMDYuMTQgMjg4LjU1IDMwNy40NSAyODguNzUgMzA4LjEwIDI4OC44NiBDIDMwNy42OSAyODguMzMgMzA2Ljg4IDI4Ny4yOSAzMDYuNDcgMjg2Ljc2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDI3OC43OCAyOTIuMDAgQyAyODAuMTYgMjkwLjE3IDI4MC41MyAyODcuOTQgMjgwLjk1IDI4NS43NSBDIDI4Mi4zOSAyOTMuNzkgMjg2LjM5IDMwMC45MSAyOTAuMTcgMzA4LjAzIEMgMjkxLjIwIDMwMy45MSAyOTIuMTUgMjk5Ljc1IDI5My42OCAyOTUuNzcgQyAyOTMuMzUgMjk0LjkyIDI5My4wMiAyOTQuMDcgMjkyLjcwIDI5My4yMyBDIDI5My4wMiAyOTEuOTMgMjkzLjM0IDI5MC42MyAyOTMuNjcgMjg5LjMzIEMgMjk1LjM1IDI4OS41MCAyOTcuMTcgMjg5LjQ3IDI5OC41OCAyOTAuNTcgQyAzMDIuMTEgMjkyLjkxIDMwNS43OCAyOTUuMDcgMzA5LjA3IDI5Ny43NiBDIDMxMC42NCAyOTguODIgMzEwLjkzIDMwMC44MCAzMTEuNjAgMzAyLjQ0IEMgMzEwLjI0IDMwMy43OCAzMDguOTIgMzA1LjE1IDMwNy42MyAzMDYuNTYgQyAzMDcuNTAgMzA1LjM3IDMwNy4zNiAzMDQuMTggMzA3LjIzIDMwMy4wMCBDIDMwNC4wNyAzMDAuODIgMzAxLjk1IDI5Ny41MSAyOTguODcgMjk1LjI3IEMgMjk3LjExIDI5NS4yOCAyOTUuNDYgMjk1Ljk5IDI5My43OCAyOTYuNDAgQyAyOTMuNjIgMjk4LjEwIDI5My40MyAyOTkuODEgMjkzLjIyIDMwMS41MSBDIDI5NC4zMiAzMDEuOTUgMjk1LjQyIDMwMi40MSAyOTYuNTMgMzAyLjg3IEMgMjk1LjU3IDMwNC4wNSAyOTQuNjMgMzA1LjIzIDI5My42MyAzMDYuMzYgQyAyOTMuMDQgMzA4LjUyIDI5Mi4xNSAzMTAuNTcgMjkxLjM1IDMxMi42NSBDIDI5MS44OCAzMTIuNzYgMjkyLjk0IDMxMi45OCAyOTMuNDcgMzEzLjA5IEMgMjkyLjM3IDMxNS4xMiAyOTMuMjcgMzE3LjI5IDI5My42MyAzMTkuMzcgQyAyNzIuOTUgMzM0Ljg2IDI0OC43NiAzNDYuMDcgMjIzLjA3IDM0OS43MyBDIDE5Ni45MiAzNTMuMzUgMTY5LjY2IDM1MS4wNCAxNDUuMTAgMzQxLjA1IEMgMTM0LjU2IDMzNy4xNyAxMjQuOTUgMzMxLjMzIDExNS4yOCAzMjUuNzQgQyAxMTUuNDQgMzI1LjU2IDExNS43NSAzMjUuMjAgMTE1LjkxIDMyNS4wMiBDIDExNi4xMiAzMjQuOTcgMTE2LjU1IDMyNC44NyAxMTYuNzYgMzI0LjgyIEMgMTE1LjgzIDMyMi4yNSAxMTYuMDEgMzE5LjU0IDExNi41NSAzMTYuOTIgQyAxMTcuMTQgMzE2LjAyIDExNy42OCAzMTUuMDkgMTE4LjE4IDMxNC4xNCBDIDExOC43NCAzMTIuMDUgMTE1LjQzIDMxNS4xMiAxMTQuNDQgMzE1LjE2IEMgMTEzLjc3IDMxOC4yOCAxMTMuMjkgMzIxLjg5IDExNS4xMCAzMjQuNzUgQyAxMTQuOTMgMzI0Ljg3IDExNC42MCAzMjUuMTMgMTE0LjQzIDMyNS4yNiBDIDEwOC44MSAzMjAuNTcgMTAzLjA2IDMxNi4wMCA5Ny4zNCAzMTEuNDQgQyAxMDAuNDQgMzEwLjAzIDEwMy44NSAzMDguNzkgMTA2LjIyIDMwNi4yNCBDIDEwNy45MSAzMDIuOTUgMTA5LjI5IDI5OS40NCAxMTEuNjggMjk2LjU2IEMgMTExLjI4IDI5OC4yOCAxMTAuNjggMjk5Ljk1IDExMC4xMCAzMDEuNjMgQyAxMTAuNzUgMzAxLjkwIDExMi4wNCAzMDIuNDUgMTEyLjY5IDMwMi43MiBDIDExMS45OCAzMDMuNTggMTExLjE5IDMwNC4zOCAxMTAuMzkgMzA1LjE1IEMgMTA5LjQ2IDMwNi45MCAxMDguMjggMzA4LjUwIDEwNi45NSAzMDkuOTcgQyAxMDguMzAgMzEwLjI2IDEwOS42NCAzMTAuNTkgMTEwLjk4IDMxMC45OCBDIDExMS42MCAzMDcuNTcgMTEyLjg1IDMwNC4zMyAxMTQuMDQgMzAxLjEwIEMgMTE1LjQ4IDI5OC4wMSAxMTIuNDUgMjk1LjA3IDExMy4yMSAyOTEuODcgQyAxMTIuNTkgMjg5LjU2IDExNC45NyAyODkuNjcgMTE1LjM4IDI5MS45NSBDIDExNS44MCAyOTEuNDMgMTE2LjY2IDI5MC4zOSAxMTcuMDkgMjg5Ljg4IEMgMTE2Ljg5IDI5MC44NCAxMTYuNTEgMjkyLjc3IDExNi4zMiAyOTMuNzQgQyAxMTcuMTQgMjkyLjkxIDExOC43OCAyOTEuMjcgMTE5LjYwIDI5MC40NSBDIDExOS4wOCAyOTEuNDAgMTE4LjA0IDI5My4zMCAxMTcuNTIgMjk0LjI1IEMgMTE4LjI4IDI5My45MCAxMTkuODIgMjkzLjIyIDEyMC41OCAyOTIuODcgQyAxMTcuMzEgMjk4LjQ0IDExNi4zMSAzMDQuOTEgMTE1LjE5IDMxMS4xNiBDIDExOC44OCAzMTAuNDMgMTIyLjM2IDMwOC44MiAxMjQuOTggMzA2LjA2IEMgMTI0LjUxIDMwNS41NSAxMjMuNTcgMzA0LjUzIDEyMy4xMCAzMDQuMDIgQyAxMjMuODMgMzAzLjM3IDEyNS4zMCAzMDIuMDcgMTI2LjAzIDMwMS40MiBDIDEyNS4yMiAzMDEuNDYgMTIzLjYwIDMwMS41MyAxMjIuNzggMzAxLjU3IEMgMTI0LjY0IDI5OS44MSAxMjYuMzYgMjk3LjkxIDEyNy42NyAyOTUuNzEgQyAxMjcuMDggMjk4LjMzIDEyNy4zNiAzMDAuOTkgMTI3Ljk0IDMwMy41OSBDIDEyOC45OSAzMDMuOTYgMTMxLjExIDMwNC43MCAxMzIuMTYgMzA1LjA4IEMgMTMxLjAzIDMwNS44MyAxMjkuODkgMzA2LjU4IDEyOC43NSAzMDcuMzIgTCAxMzEuODIgMzA3LjA2IEMgMTMxLjA4IDMwNy44MCAxMjkuNTggMzA5LjI3IDEyOC44MyAzMTAuMDAgQyAxMjkuOTAgMzE0LjIzIDEzMS43OCAzMTguMTkgMTMzLjAzIDMyMi4zNiBDIDEzMy42MiAzMjAuOTkgMTM0LjE2IDMxOS41OSAxMzQuNjUgMzE4LjE4IEwgMTM1LjM4IDMxOC41NiBDIDEzNi43NCAzMTMuNzkgMTM5LjE0IDMwOS40NCAxNDAuOTcgMzA0Ljg1IEMgMTQ2LjkwIDMwMS43OSAxNTMuNTAgMzAwLjM3IDE1OS43MSAyOTguMDEgQyAxNjAuODcgMzAwLjM0IDE2MC41NyAzMDIuODAgMTU5LjE4IDMwNC45NyBDIDE1Ny43MyAzMDQuMjEgMTU2LjMwIDMwMy40MyAxNTQuODggMzAyLjYzIEMgMTUxLjAyIDMwMy42OCAxNDcuNzMgMzA1Ljk5IDE0NC40MyAzMDguMTQgQyAxNDMuNTkgMzExLjY2IDE0Mi45OCAzMTUuMjUgMTQzLjUwIDMxOC44OCBDIDE0My45NyAzMTguNzYgMTQ0LjkyIDMxOC41NCAxNDUuMzkgMzE4LjQzIEMgMTQ1LjU2IDMxNi4yMyAxNDUuNTggMzE0LjAyIDE0NS44OCAzMTEuODMgQyAxNDYuMjYgMzA4LjgzIDE0OC43NCAzMDYuNTkgMTUxLjM0IDMwNS4zNCBDIDE1My41MSAzMDUuMDkgMTU1LjA4IDMwNi45NSAxNTYuODEgMzA3Ljk1IEMgMTU2Ljg0IDMwOS4zNCAxNTYuODcgMzEwLjc0IDE1Ni45MSAzMTIuMTQgQyAxNTYuMDggMzEzLjA1IDE1NS4yNiAzMTMuOTUgMTU0LjQzIDMxNC44NyBDIDE1NC42NiAzMTcuNTYgMTU1LjAzIDMyMC4yNCAxNTUuNDMgMzIyLjkxIEMgMTU3Ljk3IDMyMS4yMyAxNjAuOTggMzIwLjkxIDE2My45NiAzMjEuMTUgQyAxNjQuOTQgMzIxLjg4IDE2NS45MiAzMjIuNjIgMTY2LjkwIDMyMy4zNyBDIDE2OC43NyAzMjEuNDAgMTcwLjg0IDMxOS41OSAxNzIuMzUgMzE3LjMyIEMgMTczLjQ4IDMxNS4yNyAxNzMuOTQgMzEyLjkzIDE3NS4wMSAzMTAuODUgQyAxNzUuMjkgMzExLjc1IDE3NS44NCAzMTMuNTMgMTc2LjEyIDMxNC40MyBDIDE3Ni42MyAzMTMuMTkgMTc2LjE3IDMxMS45NiAxNzUuODEgMzEwLjc4IEMgMTc2LjczIDMxMC41NiAxNzcuNjUgMzEwLjM4IDE3OC41OCAzMTAuMjIgQyAxNzguNzEgMzExLjgzIDE3OC43NyAzMTMuNDQgMTc4LjcwIDMxNS4wNiBDIDE3My41MyAzMTcuMDIgMTcyLjAwIDMyMi44MyAxNjkuMjUgMzI3LjEwIEMgMTcwLjA1IDMyOC42OSAxNzEuMDIgMzMwLjE5IDE3MS45MSAzMzEuNzQgQyAxNzcuMDkgMzI0LjI3IDE4Mi42OSAzMTYuMzUgMTgzLjUxIDMwNy4wMSBDIDE4NC42NCAzMDcuNTggMTg2LjE5IDMwNy43NSAxODYuNzkgMzA5LjA0IEMgMTg3LjM0IDMxMC43MCAxODYuMjggMzEyLjI1IDE4NS42NiAzMTMuNzMgQyAxODMuODkgMzE3LjMwIDE4Mi41MiAzMjEuMDYgMTgwLjg1IDMyNC42OCBDIDE4MS43MiAzMjQuNjIgMTgzLjQ2IDMyNC41MiAxODQuMzIgMzI0LjQ3IEMgMTg0LjY1IDMyNC43MyAxODUuMzEgMzI1LjI3IDE4NS42MyAzMjUuNTQgQyAxODcuNDMgMzI0LjM0IDE4OS4yOCAzMjMuMjEgMTkwLjk5IDMyMS44OSBDIDE5My41NiAzMTkuOTggMTk0LjQ4IDMxNi43NiAxOTYuNDIgMzE0LjM0IEMgMTk3LjM5IDMxMi42MiAxOTkuNzEgMzEzLjQ4IDIwMS4yOCAzMTMuMDUgQyAyMDEuMDcgMzEzLjM5IDIwMC42NCAzMTQuMDYgMjAwLjQyIDMxNC40MCBDIDIwMC40MSAzMTUuNzggMjAxLjExIDMxNy42MCAxOTkuNTEgMzE4LjM4IEMgMTk1LjU1IDMyMS4wOSAxOTEuNzggMzI0LjA1IDE4OC4zOSAzMjcuNDYgQyAxODguNzUgMzI5LjkzIDE4OC44NCAzMzIuNDQgMTg5LjMxIDMzNC45MCBDIDE4OS44NSAzMzYuNTQgMTkxLjY0IDMzNy4xOSAxOTIuOTEgMzM4LjE1IEMgMTkyLjExIDMzNi4zNSAxOTEuMTYgMzM0LjYyIDE5MC40MyAzMzIuNzkgQyAxODkuNzAgMzI5Ljk1IDE5MC44NiAzMjcuMTMgMTkxLjc2IDMyNC40OSBDIDE5My45MSAzMjQuMzEgMTk2LjUyIDMyMi45OCAxOTguMzggMzI0LjY5IEMgMjAwLjE5IDMyNi42MiAyMDEuNjcgMzI4LjkyIDIwNC4xMSAzMzAuMTYgQyAyMDQuODQgMzMxLjE1IDIwNS41NiAzMzIuMTQgMjA2LjMwIDMzMy4xMyBDIDIwNi40NyAzMjcuNDMgMjA0LjM0IDMyMS43MyAyMDUuNTggMzE2LjA2IEMgMjA1Ljc0IDMxNC45MyAyMDYuODQgMzE0LjMzIDIwNy41NSAzMTMuNTcgQyAyMDcuOTQgMzE0Ljk3IDIwOC4zMiAzMTYuMzggMjA4LjY3IDMxNy44MCBDIDIwOC4wNyAzMTkuMzIgMjA2LjY4IDMyMC44NiAyMDcuNDAgMzIyLjYwIEMgMjA4LjM3IDMyNC40MSAyMTAuOTcgMzI1LjIyIDIxMC40NCAzMjcuNzQgQyAyMTIuMzcgMzI1Ljc2IDIxNS4wNSAzMjUuMTcgMjE3LjY1IDMyNC42MCBDIDIxNy4wMCAzMjMuNjkgMjE2LjM3IDMyMi43NyAyMTUuNzQgMzIxLjg2IEMgMjE0LjQ1IDMyMS4zMCAyMTMuMTggMzIwLjY4IDIxMS45MiAzMjAuMDQgQyAyMTIuNzcgMzE5LjE5IDIxMy42NCAzMTguMzQgMjE0LjUxIDMxNy41MCBDIDIxMy45MCAzMTUuOTggMjEzLjM0IDMxNC40NSAyMTIuODcgMzEyLjkwIEMgMjE1LjU1IDMxNS45MSAyMTcuMzIgMzE5LjYyIDIyMC4xNCAzMjIuNTIgQyAyMjIuODEgMzE3Ljc4IDIxOS43NyAzMTIuMTEgMjIyLjY0IDMwNy40OSBDIDIyMy4wNyAzMDcuNTEgMjIzLjkzIDMwNy41NiAyMjQuMzYgMzA3LjU4IEMgMjI0Ljk0IDMwOS40MCAyMjUuNTMgMzExLjIyIDIyNi4yNyAzMTIuOTggQyAyMjIuNDkgMzE3Ljg5IDIyNC45NyAzMjQuMDYgMjI1LjU3IDMyOS41NiBDIDIyNi4zOCAzMjkuMzMgMjI4LjAxIDMyOC44NyAyMjguODIgMzI4LjY0IEMgMjMxLjc5IDMyMS4wMSAyMzQuNjMgMzEyLjg4IDIzMy4zOSAzMDQuNTQgQyAyMzQuNjAgMzA1LjIxIDIzNy42NSAzMDQuOTEgMjM3LjUyIDMwNy4wMSBDIDIzNy4yNyAzMTEuNTQgMjM1LjY1IDMxNS45MCAyMzUuMzEgMzIwLjQ1IEMgMjM2LjA4IDMyMC4yMCAyMzYuODQgMzE5Ljk1IDIzNy42MSAzMTkuNzEgQyAyMzYuNTcgMzE2LjIwIDIzOC4yMiAzMTIuNjMgMjQxLjczIDMxMS40NiBDIDI0Mi45MCAzMTIuMjMgMjQ0LjA4IDMxMy4wMCAyNDUuMjYgMzEzLjc2IEMgMjQ1LjcyIDMxNi4zMiAyNDYuMjkgMzE4Ljg2IDI0Ni43NyAzMjEuNDEgQyAyNDkuNzcgMzIyLjM4IDI1Mi40MiAzMjQuMTEgMjU1LjE5IDMyNS41OSBDIDI1Ni40MiAzMjQuMzUgMjU3LjYyIDMyMy4wNyAyNTguODAgMzIxLjc4IEMgMjU4Ljg2IDMxOS4wOCAyNTguOTEgMzE2LjM5IDI1OC44OSAzMTMuNjkgQyAyNTYuODMgMzEyLjQ4IDI1NC44NCAzMTEuMTcgMjUzLjAwIDMwOS42NSBDIDI1NC40MCAzMDkuNjYgMjU1LjgwIDMwOS43MCAyNTcuMjAgMzA5Ljc2IEMgMjU2LjI4IDMwNi42NSAyNTYuMDcgMzAzLjM5IDI1Ni4wOSAzMDAuMTYgQyAyNTcuNzggMzAxLjAzIDI1OC43MSAzMDIuNjYgMjU5LjU0IDMwNC4yOCBDIDI1OS43NyAzMDIuOTcgMjYwLjAyIDMwMS42NiAyNjAuMjggMzAwLjM2IEMgMjYxLjUyIDMwNS4zNCAyNjEuNzcgMzEwLjk2IDI2NS44NiAzMTQuNjIgQyAyNjYuNzQgMzEyLjc4IDI2Ny4yMiAzMTAuNTEgMjY5LjEzIDMwOS40MyBDIDI3Mi4xNiAzMDcuMzUgMjc0Ljg3IDMwNC44MSAyNzguMDYgMzAyLjk0IEMgMjc3LjU5IDMwNS4zOCAyNzUuNTQgMzA2LjgyIDI3My42NyAzMDguMTkgQyAyNzUuNTYgMzA5LjU2IDI3Ni44OSAzMTEuNTEgMjc4LjIzIDMxMy4zOSBDIDI3OC41MiAzMTIuODcgMjc5LjEwIDMxMS44MSAyNzkuMzkgMzExLjI4IEMgMjgwLjU0IDMxMC45MiAyODEuNzAgMzEwLjU4IDI4Mi44NyAzMTAuMjQgQyAyODQuMDYgMzEwLjkxIDI4NS4yNSAzMTEuNTcgMjg2LjQ1IDMxMi4yNCBDIDI4NC45NiAzMDguOTUgMjgzLjg2IDMwNS41MCAyODIuNTkgMzAyLjEyIEMgMjgxLjgyIDI5OS41NyAyNzguNTggMjk4Ljc0IDI3OC4wNSAyOTYuMDkgQyAyNzcuMzcgMjkzLjIzIDI3Ni4yMiAyOTAuNTIgMjc1LjM4IDI4Ny43MSBDIDI3Ni44MiAyODguODggMjc3Ljc4IDI5MC40NyAyNzguNzggMjkyLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM0Mi40NSAyOTEuMzIgQyAzNDUuNzMgMjkzLjM4IDM0OC45NSAyOTUuNTEgMzUyLjEwIDI5Ny43NyBDIDM1MS4xOSAyOTkuMDAgMzUwLjMwIDMwMC4yNCAzNDkuMzkgMzAxLjQ4IEMgMzQ4LjgzIDMwMS4wNyAzNDcuNzAgMzAwLjI1IDM0Ny4xNCAyOTkuODQgQyAzNDcuMTYgMzAxLjgyIDM0Ny42NSAzMDMuOTMgMzQ2LjczIDMwNS44MCBDIDM0NS40NCAzMDYuMDEgMzQ0LjQ4IDMwNS4wNCAzNDMuNDcgMzA0LjQ2IEMgMzQ0LjM0IDMwMS45NSAzNDUuNDYgMjk4LjcyIDM0Mi43OSAyOTYuODMgQyAzNDEuNTQgMjk3Ljk5IDM0MC44MSAzMDAuMDggMzM5LjIyIDMwMC42NiBDIDMzOC42NiAzMDAuMjkgMzM3LjU1IDI5OS41NCAzMzcuMDAgMjk5LjE3IEMgMzM4Ljk0IDI5Ni42NSAzNDAuODAgMjk0LjA1IDM0Mi40NSAyOTEuMzIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gNTUuNTYgMjk4LjM5IEMgNTcuMzMgMjk2Ljk1IDU5LjE4IDI5NS42MSA2MS4wNCAyOTQuMjggQyA2MS45NCAyOTUuNTQgNjIuODYgMjk2Ljc5IDYzLjc5IDI5OC4wMyBDIDYyLjc3IDI5OC43NCA2MS43NiAyOTkuNDQgNjAuNzQgMzAwLjE1IEMgNjIuMzggMzAyLjM0IDY0LjA3IDMwNC40OSA2NS43NyAzMDYuNjMgQyA2NC4yNiAzMDcuODggNjIuODQgMzA5LjI0IDYxLjE2IDMxMC4yNyBDIDU4LjgwIDMxMC4zOSA1Ni40MyAzMTAuMTIgNTQuMDcgMzEwLjI3IEMgNTMuMDggMzA5LjAyIDUyLjA5IDMwNy43NyA1MS4xNCAzMDYuNDkgQyA1My40MCAzMDUuMzAgNTUuODggMzA2LjE4IDU4LjIzIDMwNi41MSBDIDU4LjgxIDMwNi4xNSA1OS45OSAzMDUuNDMgNjAuNTcgMzA1LjA3IEMgNTguODkgMzAyLjg1IDU3LjIzIDMwMC42MiA1NS41NiAyOTguMzkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjkzLjc4IDI5Ni40MCBDIDI5NS40NiAyOTUuOTkgMjk3LjExIDI5NS4yOCAyOTguODcgMjk1LjI3IEMgMzAxLjk1IDI5Ny41MSAzMDQuMDcgMzAwLjgyIDMwNy4yMyAzMDMuMDAgQyAzMDcuMzYgMzA0LjE4IDMwNy41MCAzMDUuMzcgMzA3LjYzIDMwNi41NiBDIDMwNi45MyAzMDcuMjEgMzA2LjIyIDMwNy44NyAzMDUuNTMgMzA4LjU0IEMgMzA0LjQzIDMwNy4yMyAzMDMuMzIgMzA1LjkzIDMwMi4yNyAzMDQuNjAgQyAzMDEuMzQgMzA0LjkzIDMwMC40MiAzMDUuMjYgMjk5LjUxIDMwNS42MCBDIDI5OS40MCAzMDQuOTQgMjk5LjIwIDMwMy42MSAyOTkuMDkgMzAyLjk0IEMgMjk4LjA5IDMwNC4yMCAyOTcuMTIgMzA1LjQ4IDI5Ni4yMCAzMDYuNzkgQyAyOTUuNjEgMzA2Ljc4IDI5NC40MyAzMDYuNzUgMjkzLjg0IDMwNi43NCBDIDI5Ni4xMyAzMDguMjMgMjk0LjkwIDMwOS43NSAyOTMuMjEgMzExLjE1IEMgMjkzLjgzIDMxMS41OSAyOTQuNDUgMzEyLjAyIDI5NS4wNyAzMTIuNDcgQyAyOTQuNjYgMzEzLjkyIDI5NC4yOCAzMTUuMzkgMjkzLjkwIDMxNi44NiBDIDI5NC40OSAzMTYuNzEgMjk1LjY2IDMxNi40MSAyOTYuMjUgMzE2LjI2IEMgMjk1LjM3IDMxNy4yOSAyOTQuNTEgMzE4LjM0IDI5My42MyAzMTkuMzcgQyAyOTMuMjcgMzE3LjI5IDI5Mi4zNyAzMTUuMTIgMjkzLjQ3IDMxMy4wOSBDIDI5Mi45NCAzMTIuOTggMjkxLjg4IDMxMi43NiAyOTEuMzUgMzEyLjY1IEMgMjkyLjE1IDMxMC41NyAyOTMuMDQgMzA4LjUyIDI5My42MyAzMDYuMzYgQyAyOTQuNjMgMzA1LjIzIDI5NS41NyAzMDQuMDUgMjk2LjUzIDMwMi44NyBDIDI5NS40MiAzMDIuNDEgMjk0LjMyIDMwMS45NSAyOTMuMjIgMzAxLjUxIEMgMjkzLjQzIDI5OS44MSAyOTMuNjIgMjk4LjEwIDI5My43OCAyOTYuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzMyLjY1IDMwNC42NiBDIDMzMy42NyAzMDMuNDkgMzM0LjcwIDMwMi4zMiAzMzUuNzMgMzAxLjE2IEMgMzM4LjYyIDMwMy41OCAzNDEuNjIgMzA1Ljg4IDM0NC42MyAzMDguMTUgQyAzNDMuNjIgMzA5LjQ1IDM0Mi42MCAzMTAuNzUgMzQxLjU3IDMxMi4wNSBDIDMzOC41NiAzMDkuNjMgMzM1LjU0IDMwNy4yMSAzMzIuNjUgMzA0LjY2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDI5Ni4yMCAzMDYuNzkgQyAyOTcuMTIgMzA1LjQ4IDI5OC4wOSAzMDQuMjAgMjk5LjA5IDMwMi45NCBDIDI5OS4yMCAzMDMuNjEgMjk5LjQwIDMwNC45NCAyOTkuNTEgMzA1LjYwIEMgMzAwLjQyIDMwNS4yNiAzMDEuMzQgMzA0LjkzIDMwMi4yNyAzMDQuNjAgQyAzMDMuMzIgMzA1LjkzIDMwNC40MyAzMDcuMjMgMzA1LjUzIDMwOC41NCBDIDMwMi41MiAzMTEuMTggMjk5Ljk4IDMxNC42MiAyOTYuMjUgMzE2LjI2IEMgMjk1LjY2IDMxNi40MSAyOTQuNDkgMzE2LjcxIDI5My45MCAzMTYuODYgQyAyOTQuMjggMzE1LjM5IDI5NC42NiAzMTMuOTIgMjk1LjA3IDMxMi40NyBDIDI5NC40NSAzMTIuMDIgMjkzLjgzIDMxMS41OSAyOTMuMjEgMzExLjE1IEMgMjk0LjkwIDMwOS43NSAyOTYuMTMgMzA4LjIzIDI5My44NCAzMDYuNzQgQyAyOTQuNDMgMzA2Ljc1IDI5NS42MSAzMDYuNzggMjk2LjIwIDMwNi43OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMjguMTEgMzEwLjI2IEMgMzI5LjEwIDMwOS4wOSAzMzAuMTAgMzA3LjkzIDMzMS4wOCAzMDYuNzUgQyAzMzQuODAgMzA5Ljc4IDMzOC40MCAzMTIuOTMgMzQyLjEyIDMxNS45NiBDIDM0MS4wNyAzMTcuMjUgMzQwLjAyIDMxOC41NSAzMzguOTkgMzE5Ljg3IEMgMzM1LjQyIDMxNi42MCAzMzEuNzEgMzEzLjQ5IDMyOC4xMSAzMTAuMjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTIwLjIwIDMxMi43NiBDIDEyMS4zMiAzMTAuODAgMTI0LjQ4IDMxMC45OCAxMjYuNTIgMzEwLjI0IEMgMTI2LjUxIDMxMi4yMCAxMjYuNTAgMzE0LjE2IDEyNi41NCAzMTYuMTIgQyAxMjQuOTcgMzE0LjA4IDEyMi42NyAzMTMuMjAgMTIwLjIwIDMxMi43NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA2MS43MiAzMjMuOTUgQyA2NS4xMSAzMjAuNTUgNjguNjYgMzE3LjMzIDcyLjA1IDMxMy45MyBDIDczLjE1IDMxNC45OCA3NC4yNCAzMTYuMDQgNzUuMzUgMzE3LjA4IEMgNzQuMjQgMzE4LjI4IDczLjEzIDMxOS40OCA3Mi4wNCAzMjAuNzEgQyA3My4xNSAzMjAuOTMgNzQuMjcgMzIxLjE2IDc1LjM5IDMyMS4zOCBDIDc2LjAyIDMyMC42NSA3Ni42NiAzMTkuOTMgNzcuMjkgMzE5LjIwIEMgNzguNDAgMzIwLjI3IDc5LjUyIDMyMS4zMiA4MC42NCAzMjIuMzggQyA3OS4zMCAzMjMuNTEgNzguMDYgMzI2LjEzIDc1LjkzIDMyNC45OCBDIDczLjc0IDMyNC41NCA3MS42NSAzMjMuMDQgNjkuNDAgMzIzLjI0IEMgNjcuODYgMzI0LjQ3IDY2LjUyIDMyNS45MiA2NS4xMCAzMjcuMjkgQyA2My45OCAzMjYuMTcgNjIuODUgMzI1LjA2IDYxLjcyIDMyMy45NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMTQuNDQgMzE1LjE2IEMgMTE1LjQzIDMxNS4xMiAxMTguNzQgMzEyLjA1IDExOC4xOCAzMTQuMTQgQyAxMTcuNjggMzE1LjA5IDExNy4xNCAzMTYuMDIgMTE2LjU1IDMxNi45MiBDIDExNi4wMSAzMTkuNTQgMTE1LjgzIDMyMi4yNSAxMTYuNzYgMzI0LjgyIEMgMTE2LjU1IDMyNC44NyAxMTYuMTIgMzI0Ljk3IDExNS45MSAzMjUuMDIgTCAxMTUuMTAgMzI0Ljc1IEMgMTEzLjI5IDMyMS44OSAxMTMuNzcgMzE4LjI4IDExNC40NCAzMTUuMTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjY0LjA3IDMyNC43OSBDIDI2NS40NSAzMjIuMDMgMjY1LjgyIDMxOC4wMSAyNjkuMDkgMzE2Ljc4IEMgMjY3LjI2IDMyMC4yMSAyNjUuNjAgMzIzLjc1IDI2My40MiAzMjYuOTkgQyAyNjMuNDggMzI4LjU2IDI2NC4yNyAzMjkuNTkgMjY1LjgwIDMzMC4wOSBDIDI2My43NSAzMzAuNjEgMjYxLjcxIDMzMS4yMiAyNTkuNTkgMzMxLjM4IEMgMjYwLjI1IDMyOC42NSAyNjIuNTAgMzI2Ljk1IDI2NC4wNyAzMjQuNzkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzIxLjQ4IDMxNy4zNiBDIDMyMi45MSAzMTguNzcgMzI0LjMyIDMyMC4yMSAzMjUuNTYgMzIxLjgxIEMgMzI1LjA3IDMyMi44MyAzMjQuNjAgMzIzLjg2IDMyNC4xMiAzMjQuODkgQyAzMjYuMDggMzI0LjkwIDMyOC4wMiAzMjQuOTAgMzI5Ljk5IDMyNC45MSBDIDMyOC43MiAzMjYuMTcgMzI3LjcwIDMyNy44MiAzMjYuMDcgMzI4LjY0IEMgMzIzLjQyIDMyOC43NSAzMjAuNzggMzI4LjQ5IDMxOC4xNSAzMjguMzggQyAzMTkuNDYgMzI5Ljg3IDMyMC43OCAzMzEuMzcgMzIyLjA2IDMzMi44OSBDIDMyMC44MiAzMzMuODQgMzE5LjU5IDMzNC44MSAzMTguMzYgMzM1Ljc4IEMgMzE3LjA4IDMzNC4yMyAzMTUuNzggMzMyLjY5IDMxNC41MSAzMzEuMTMgQyAzMTQuNzcgMzMwLjM2IDMxNS4yOCAzMjguODIgMzE1LjU0IDMyOC4wNSBDIDMxMy44NyAzMjcuOTIgMzEyLjE5IDMyNy43OCAzMTAuNTMgMzI3LjYzIEMgMzExLjY2IDMyNi41NSAzMTIuNzQgMzI1LjM5IDMxNC4wMyAzMjQuNTAgQyAzMTYuNzEgMzI0LjUwIDMxOS4zNyAzMjQuODAgMzIyLjA1IDMyNC43OSBDIDMyMC44NiAzMjMuMzUgMzE5LjYxIDMyMS45OCAzMTguMzMgMzIwLjYzIEMgMzE5LjM3IDMxOS41NCAzMjAuNDIgMzE4LjQ1IDMyMS40OCAzMTcuMzYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTUxLjcyIDMyMi41MCBDIDE0OS4wOCAzMjEuNDAgMTUxLjUzIDMxOS41NCAxNTIuMzMgMzE4LjA2IEMgMTUyLjE4IDMxOS41NSAxNTEuOTYgMzIxLjAyIDE1MS43MiAzMjIuNTAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjc4Ljk5IDMyMC4yOCBDIDI4MC4wMSAzMjEuMzYgMjgxLjE3IDMyMi4yOSAyODIuNDQgMzIzLjA5IEMgMjgyLjA0IDMyMy44OCAyODIuMjMgMzI2LjA1IDI4MC44OCAzMjUuMjMgQyAyODAuNTQgMzIzLjQ3IDI4MC4wNyAzMjEuNzQgMjc4Ljk5IDMyMC4yOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA3NC43NyAzMzIuNTYgQyA3Ny4xOCAzMjkuNjcgNzkuODggMzI3LjA0IDgyLjIwIDMyNC4wOCBDIDgzLjQ0IDMyNS4wMiA4NC42NyAzMjUuOTcgODUuODkgMzI2Ljk0IEMgODMuMzIgMzI5LjgxIDgwLjg5IDMzMi44MSA3OC4zMiAzMzUuNjggQyA3Ny4xNCAzMzQuNjMgNzUuOTYgMzMzLjU5IDc0Ljc3IDMzMi41NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA4MC4yNiAzMzcuMjYgQyA4Mi43OSAzMzQuMzkgODUuMTkgMzMxLjQwIDg3LjY3IDMyOC40OSBDIDkwLjczIDMzMS41MyA5NS4wMyAzMzMuMzMgOTcuNDAgMzM2Ljk4IEMgOTYuMjIgMzQwLjMzIDkzLjUyIDM0Mi44OCA5MS43NCAzNDUuOTEgQyA5MC4zOCAzNDUuMDMgODkuMDYgMzQ0LjEzIDg3Ljc0IDM0My4yMSBDIDg5LjQwIDM0MC45OSA5MS4xMSAzMzguODAgOTIuNzggMzM2LjU5IEMgOTEuNjUgMzM1LjY0IDkwLjUxIDMzNC43MCA4OS4zOCAzMzMuNzUgQyA4Ny40MiAzMzUuNzggODUuNzQgMzM4LjA0IDg0LjA1IDM0MC4yOSBDIDgyLjc3IDMzOS4yOSA4MS41MSAzMzguMjggODAuMjYgMzM3LjI2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMwNS45MyAzMzEuMjAgQyAzMDcuMTAgMzMwLjMxIDMwOC4yNiAzMjkuNDEgMzA5LjQzIDMyOC41MiBDIDMxMS44MiAzMzEuNDYgMzE0LjIwIDMzNC40MiAzMTYuNzggMzM3LjIxIEMgMzE1LjU1IDMzOC4yOCAzMTQuMzAgMzM5LjMyIDMxMy4wNCAzNDAuMzYgQyAzMTAuNjcgMzM3LjMxIDMwOC4yMyAzMzQuMzAgMzA1LjkzIDMzMS4yMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNTIuMzAgMzM1LjI4IEMgMTUyLjkzIDMzNC40OSAxNTMuNTcgMzMzLjcxIDE1NC4yMSAzMzIuOTQgQyAxNTQuNjMgMzMzLjk0IDE1NS4wNiAzMzQuOTUgMTU1LjQ5IDMzNS45NiBDIDE1NC40MiAzMzUuNzMgMTUzLjM2IDMzNS41MSAxNTIuMzAgMzM1LjI4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE3My45MyAzMzguOTYgQyAxNzQuMzMgMzM2Ljc0IDE3NS4zMyAzMzQuNzIgMTc2LjQ1IDMzMi43OSBDIDE3Ni45NSAzMzQuNzIgMTc3LjUwIDMzNi42NSAxNzcuOTcgMzM4LjYxIEMgMTc2LjYyIDMzOC43MyAxNzUuMjcgMzM4Ljg1IDE3My45MyAzMzguOTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjkzLjc2IDM0MC4wMyBDIDI5Ny4yOCAzMzcuOTAgMzAwLjM3IDMzNS4wNyAzMDQuMTcgMzMzLjM5IEMgMzA2LjY2IDMzNi4wMiAzMDkuMDIgMzM4LjgyIDMxMC45MCAzNDEuOTIgQyAzMDkuODQgMzQyLjg4IDMwOC42NyAzNDMuNzIgMzA3LjQ1IDM0NC40NiBDIDMwNS4zNCAzNDIuNzAgMzA0LjE0IDM0MC4wOSAzMDIuNDkgMzM3LjkzIEMgMzAwLjAwIDMzOS41MyAyOTcuNTcgMzQxLjIxIDI5NS4wNCAzNDIuNzUgQyAyOTQuNzIgMzQyLjA3IDI5NC4wOCAzNDAuNzEgMjkzLjc2IDM0MC4wMyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA5Ny4zNyAzNDIuMDcgQyA5OC4yNCAzNDAuNjcgOTkuMTkgMzM5LjMzIDEwMC4xMiAzMzcuOTcgQyAxMDEuMzIgMzM4Ljc2IDEwMi41MyAzMzkuNTYgMTAzLjczIDM0MC4zNiBDIDEwMy4wNyAzNDEuNTUgMTAyLjQyIDM0Mi43NSAxMDEuODMgMzQzLjk4IEMgMTAzLjE5IDM0My4zMyAxMDQuNDggMzQyLjUwIDEwNS45NSAzNDIuMDkgQyAxMDguMjIgMzQyLjczIDExMC4xMiAzNDQuMjIgMTExLjg0IDM0NS43OCBDIDExMC4xNiAzNDkuMDYgMTA4LjI3IDM1Mi4yMSAxMDYuNTEgMzU1LjQ0IEMgMTA0LjMzIDM1NC4xNCAxMDIuMTMgMzUyLjg2IDk5Ljk1IDM1MS41NyBDIDEwMC40MiAzNTAuNjYgMTAwLjkxIDM0OS43NSAxMDEuMzkgMzQ4Ljg0IEMgMTAyLjI5IDM0OS4zNyAxMDMuMTkgMzQ5LjkxIDEwNC4wOSAzNTAuNDUgQyAxMDUuMDkgMzQ4Ljc2IDEwNi4wNyAzNDcuMDUgMTA2LjkxIDM0NS4yNyBDIDEwMy4wNiAzNDUuMTYgMTAwLjYzIDM0OS4xMCA5Ny4wNCAzNDkuNjUgQyA5NS43NyAzNDguOTAgOTQuNTggMzQ4LjAyIDkzLjM4IDM0Ny4xOCBDIDk1LjE4IDM0Ni4yOCA5Ni45OSAzNDUuNDAgOTguODEgMzQ0LjU0IEMgOTguMzAgMzQzLjczIDk3LjgyIDM0Mi45MSA5Ny4zNyAzNDIuMDcgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjgwLjQ4IDM0Ny45MSBDIDI4NC4zMCAzNDUuNzUgMjg4LjExIDM0My41NyAyOTEuOTEgMzQxLjM3IEMgMjkyLjI5IDM0MS45MyAyOTMuMDUgMzQzLjA1IDI5My40NCAzNDMuNjIgQyAyOTIuODggMzQ0LjEwIDI5Mi4zMyAzNDQuNTkgMjkxLjc5IDM0NS4wOSBDIDI5My4zMiAzNDcuMzggMjk0Ljc2IDM0OS43MyAyOTYuMjIgMzUyLjA4IEMgMjk0Ljg2IDM1Mi44NyAyOTMuNDkgMzUzLjY2IDI5Mi4xMyAzNTQuNDYgQyAyOTAuNzggMzUyLjAyIDI4OS4zNyAzNDkuNjIgMjg3Ljk1IDM0Ny4yMyBDIDI4Ni4wMiAzNDguMzQgMjg0LjA3IDM0OS40MSAyODIuMDkgMzUwLjQzIEMgMjgxLjY5IDM0OS44MCAyODAuODggMzQ4LjU0IDI4MC40OCAzNDcuOTEgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjk2LjIwIDM0NC4wOCBDIDI5Ny40NSAzNDMuMjMgMjk4LjcwIDM0Mi4zOCAyOTkuOTYgMzQxLjU0IEMgMzAxLjIxIDM0My40MiAzMDIuNTEgMzQ1LjI4IDMwMy44MyAzNDcuMTIgQyAzMDIuNTMgMzQ3Ljk2IDMwMS4yNyAzNDguODcgMjk5LjkzIDM0OS42NSBDIDI5OC41NyAzNDcuODcgMjk3LjQzIDM0NS45NCAyOTYuMjAgMzQ0LjA4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI3NC45MyAzNTAuNDkgQyAyNzYuMjQgMzQ5Ljk1IDI3Ny41NiAzNDkuNDIgMjc4Ljg4IDM0OC45MSBDIDI3OS44NCAzNTAuODYgMjgxLjAwIDM1Mi43MiAyODEuNzQgMzU0Ljc3IEMgMjgwLjQ4IDM1NS41NiAyNzkuMTEgMzU2LjE1IDI3Ny43NiAzNTYuNzggQyAyNzYuNzggMzU0LjY5IDI3NS43OSAzNTIuNjIgMjc0LjkzIDM1MC40OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMjAuMjAgMzQ5LjgyIEMgMTIzLjc4IDM1MS41MiAxMjcuNTMgMzUyLjkyIDEzMC45OSAzNTQuODYgQyAxMzIuNDggMzU1LjcwIDEzMS44MCAzNTcuMjYgMTMxLjM0IDM1OC41MSBDIDEzMC4zOSAzNjEuMDAgMTI5LjMxIDM2My40NCAxMjguMzEgMzY1LjkxIEMgMTIzLjkyIDM2NC4wMSAxMTkuNDcgMzYyLjI0IDExNS4yMyAzNjAuMDIgQyAxMTYuNzAgMzU2LjUzIDExOC42NSAzNTMuMjggMTIwLjIwIDM0OS44MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxMjIuOTEgMzU0LjQ1IEMgMTI0LjQzIDM1NS4xNCAxMjUuOTYgMzU1Ljg0IDEyNy40NyAzNTYuNTcgQyAxMjYuNzEgMzU4LjE1IDEyNS45OCAzNTkuNzYgMTI1LjI0IDM2MS4zNSBDIDEyMy43MCAzNjAuNjEgMTIyLjE1IDM1OS45MCAxMjAuNjEgMzU5LjE3IEMgMTIxLjM5IDM1Ny42MCAxMjIuMTUgMzU2LjAzIDEyMi45MSAzNTQuNDUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTQxLjY3IDM1NS4wMyBDIDE0My4wMyAzNTUuMzIgMTQ0LjM4IDM1NS42NCAxNDUuNzIgMzU1Ljk4IEMgMTQ1LjQ2IDM1Ny4yNSAxNDUuMjEgMzU4LjUyIDE0NC45NiAzNTkuNzkgQyAxNDcuMjcgMzYwLjQ2IDE0OS41OCAzNjEuMTIgMTUxLjkxIDM2MS43MyBDIDE1MS40MCAzNjMuNTcgMTUxLjAyIDM2NS40NyAxNTAuMjQgMzY3LjI0IEMgMTQ4LjUyIDM2OC45NCAxNDYuMjYgMzcwLjAwIDE0NC4zMiAzNzEuNDQgQyAxNDIuOTUgMzcxLjA2IDE0MS42MCAzNzAuNjYgMTQwLjI1IDM3MC4yMyBDIDE0MS45MiAzNjcuMzIgMTQ2LjA1IDM2Ny4xMiAxNDcuMTkgMzYzLjc2IEMgMTQ0LjY4IDM2Mi44NSAxNDIuMTQgMzYyLjAyIDEzOS42MSAzNjEuMjAgQyAxNDAuMzEgMzU5LjE0IDE0MS4wMCAzNTcuMDkgMTQxLjY3IDM1NS4wMyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNTQuNjEgMzU4LjkzIEMgMjU3LjgyIDM1Ny44NyAyNjAuOTQgMzU2LjU2IDI2NC4xNSAzNTUuNTAgQyAyNjUuMjAgMzU1LjE3IDI2Ni44NSAzNTUuMTMgMjY3LjI2IDM1Ni40MSBDIDI2OC42NSAzNTkuMjEgMjY5Ljc0IDM2Mi4xNCAyNzAuOTIgMzY1LjA0IEMgMjY5LjUxIDM2NS41OCAyNjguMTAgMzY2LjE1IDI2Ni43MSAzNjYuNzIgQyAyNjUuNjkgMzY0LjE2IDI2NC42NiAzNjEuNjAgMjYzLjY0IDM1OS4wNCBDIDI2MS4zNyAzNTkuNzYgMjU5LjEyIDM2MC41MiAyNTYuODUgMzYxLjI0IEMgMjU4LjA3IDM2MS43NiAyNTkuMzQgMzYyLjEzIDI2MC42NSAzNjIuMzcgQyAyNjEuMzcgMzY0LjMwIDI2Mi4xMCAzNjYuMjQgMjYyLjgyIDM2OC4xOCBDIDI2MS4zNSAzNjguNjYgMjU5Ljg4IDM2OS4xNyAyNTguNDIgMzY5LjY3IEMgMjU3LjgxIDM2Ny45MCAyNTcuMjIgMzY2LjEyIDI1Ni42NSAzNjQuMzQgQyAyNTcuMTQgMzYzLjAyIDI1Ni42NSAzNjEuODIgMjU1LjU4IDM2MS4wMiBDIDI1NS4zNCAzNjAuNTAgMjU0Ljg1IDM1OS40NSAyNTQuNjEgMzU4LjkzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDEzNC44MCAzNTYuMTcgQyAxMzYuMTcgMzU2LjY3IDEzNy41NSAzNTcuMTcgMTM4LjkyIDM1Ny42OCBDIDEzOC4xMSAzNTkuNzYgMTM3LjM1IDM2MS44NyAxMzYuNjAgMzYzLjk4IEMgMTM1LjE0IDM2My41MCAxMzMuNzAgMzYyLjk4IDEzMi4yNiAzNjIuNDkgQyAxMzMuMTcgMzYwLjQwIDEzNC4wMSAzNTguMzAgMTM0LjgwIDM1Ni4xNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNDAuMzAgMzYyLjk5IEMgMjQ0LjMyIDM2Mi4xNyAyNDguMTYgMzYwLjUzIDI1Mi4yOSAzNjAuMjQgQyAyNTMuODAgMzYzLjA1IDI1NC45MCAzNjYuMDggMjU1LjUyIDM2OS4yMiBDIDI1NS4wNyAzNzAuMjMgMjU0LjMxIDM3MC45MiAyNTMuMjYgMzcxLjI3IEMgMjQ5Ljg4IDM3Mi40NyAyNDYuMzcgMzczLjI5IDI0Mi44NiAzNzQuMDQgQyAyNDIuNzAgMzczLjA3IDI0Mi41NCAzNzIuMTAgMjQyLjM4IDM3MS4xNCBDIDI0NS4xNiAzNzAuMzggMjQ4LjA1IDM2OS44OCAyNTAuNzAgMzY4LjcxIEMgMjUwLjQyIDM2Ni45MyAyNDkuNzUgMzY1LjI1IDI0OS4yMiAzNjMuNTYgQyAyNDcuNjggMzY0LjAxIDI0Ni4xNCAzNjQuNDYgMjQ0Ljc1IDM2NS4yNiBDIDI0NS44OCAzNjYuMTAgMjQ4LjQzIDM2Ni4wNCAyNDcuODUgMzY4LjEyIEMgMjQ1Ljk4IDM2OC45MiAyNDMuOTMgMzY5LjE0IDI0MS45MyAzNjkuNDAgQyAyNDEuMzEgMzY3LjI4IDI0MC43NyAzNjUuMTMgMjQwLjMwIDM2Mi45OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNTQuMDggMzYyLjQwIEMgMTU1LjMzIDM2Mi42MyAxNTYuNTcgMzYyLjkxIDE1Ny44MCAzNjMuMjQgQyAxNTcuNzggMzY2LjI0IDE1Ni40NiAzNjkuMDYgMTU2LjEyIDM3Mi4wNCBDIDE1Ni41OCAzNzEuOTQgMTU3LjUwIDM3MS43NSAxNTcuOTYgMzcxLjY1IEMgMTU4Ljc0IDM2OS4wNyAxNTkuMTkgMzY2LjQwIDE1OS44MCAzNjMuNzggQyAxNjEuMTQgMzY0LjAzIDE2Mi40OCAzNjQuMjggMTYzLjgyIDM2NC41MyBDIDE2My4yMyAzNjcuNDcgMTYyLjU4IDM3MC4zOSAxNjIuMDkgMzczLjM1IEMgMTYyLjYzIDM3My4xOSAxNjMuNzEgMzcyLjg4IDE2NC4yNSAzNzIuNzIgQyAxNjQuOTAgMzcwLjIxIDE2NS4xNCAzNjcuNjEgMTY1LjkwIDM2NS4xNCBDIDE2Ny4xOSAzNjUuMjIgMTY4LjQ4IDM2NS4zNSAxNjkuNzcgMzY1LjUxIEMgMTY4LjcwIDM2OS4wNiAxNzAuMDYgMzc1LjQxIDE2NS4xNiAzNzYuMTggQyAxNjAuNDAgMzc1LjkxIDE1NS44MSAzNzQuNDIgMTUxLjE3IDM3My40MSBDIDE1Mi4xOCAzNjkuNzUgMTUzLjE5IDM2Ni4wOSAxNTQuMDggMzYyLjQwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIwNC41NiAzNjQuMjQgQyAyMDUuOTYgMzY0LjE3IDIwNy4zNSAzNjQuMTIgMjA4Ljc1IDM2NC4wOCBDIDIwOC44MCAzNjQuOTggMjA4LjkxIDM2Ni43NyAyMDguOTYgMzY3LjY3IEMgMjExLjQ5IDM2Ny40NyAyMTQuMDMgMzY3LjI5IDIxNi41NyAzNjcuMTcgQyAyMTYuNjMgMzY5LjI1IDIxNy4xMiAzNzEuMzkgMjE2LjY5IDM3My40NyBDIDIxNS41MyAzNzUuMjMgMjE0LjE4IDM3Ni44OCAyMTMuMjggMzc4LjgxIEMgMjExLjc1IDM3OC44MyAyMTAuMjMgMzc4Ljg0IDIwOC43MCAzNzguODMgQyAyMDkuNDIgMzc1LjY2IDIxMy4yOCAzNzQuMDkgMjEyLjY5IDM3MC41NSBDIDIxMC4wNSAzNzAuNjYgMjA3LjQxIDM3MC43OSAyMDQuNzggMzcwLjgwIEMgMjA0Ljc1IDM2OC42MSAyMDQuNjcgMzY2LjQyIDIwNC41NiAzNjQuMjQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjMzLjg4IDM2NC40MCBDIDIzNS4yOSAzNjQuMTMgMjM2LjY5IDM2My44OCAyMzguMTAgMzYzLjY0IEMgMjM4Ljg4IDM2Ny4zMCAyMzkuNzEgMzcwLjk0IDI0MC43MCAzNzQuNTUgQyAyMzkuMTcgMzc0LjkyIDIzNy42NSAzNzUuMjkgMjM2LjEyIDM3NS42MyBDIDIzNS40MiAzNzEuODcgMjM0LjUzIDM2OC4xNiAyMzMuODggMzY0LjQwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIyNy41MyAzNjUuNTEgQyAyMjguOTYgMzY1LjMzIDIzMC40MCAzNjUuMTcgMjMxLjg0IDM2NS4wMSBDIDIzMi4wNiAzNjguNjYgMjM1LjI2IDM3My44MSAyMzEuMjIgMzc2LjI1IEMgMjI3LjU1IDM3Ny41NyAyMjMuNTcgMzc3LjU2IDIxOS43NSAzNzguMjEgQyAyMTkuNzAgMzc3LjQ3IDIxOS42MCAzNzYuMDAgMjE5LjU1IDM3NS4yNiBDIDIyMC4yNCAzNzUuMTIgMjIxLjY0IDM3NC44NCAyMjIuMzMgMzc0LjcwIEMgMjIxLjM0IDM3Mi4wMSAyMjAuMDkgMzY5LjQyIDIxOS4wMSAzNjYuNzggQyAyMjAuMDkgMzY2LjY0IDIyMi4yNiAzNjYuMzcgMjIzLjM0IDM2Ni4yNCBDIDIyNC44MyAzNjkuMTAgMjI1LjM5IDM3Mi42MyAyMjguMDAgMzc0Ljc2IEMgMjI5LjUyIDM3MS44MCAyMjcuNzkgMzY4LjU1IDIyNy41MyAzNjUuNTEgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTcyLjA2IDM2Ni4xMyBDIDE3My41MSAzNjYuMjcgMTc0Ljk2IDM2Ni40MiAxNzYuNDEgMzY2LjU3IEMgMTc1LjkxIDM3MC4zMCAxNzUuMzggMzc0LjAyIDE3NS4wNSAzNzcuNzcgQyAxNzMuNDggMzc3LjY1IDE3MS45MiAzNzcuNTEgMTcwLjM1IDM3Ny4zNyBDIDE3MC45NiAzNzMuNjMgMTcxLjU3IDM2OS44OSAxNzIuMDYgMzY2LjEzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE3OC4wMiAzNjkuNzQgQyAxNzguMjAgMzY4Ljc1IDE3OC4zOSAzNjcuNzcgMTc4LjU5IDM2Ni43OSBDIDE4Mi4xNiAzNjcuNDYgMTg2LjAzIDM2Ni45MyAxODkuMzYgMzY4LjY0IEMgMTg5LjMxIDM3Mi4yMSAxODkuMjAgMzc1Ljc5IDE4OC42NCAzNzkuMzMgQyAxODcuNTcgMzc5LjE4IDE4NS40MyAzNzguODkgMTg0LjM2IDM3OC43NSBDIDE4NC41NCAzNzYuMDEgMTg0Ljc0IDM3My4yOCAxODQuODcgMzcwLjU1IEMgMTgyLjU4IDM3MC4zNSAxODAuMjkgMzcwLjA5IDE3OC4wMiAzNjkuNzQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTkxLjc2IDM2Ny43OSBDIDE5My4yMiAzNjcuODMgMTk0LjY4IDM2Ny44NyAxOTYuMTQgMzY3LjkyIEMgMTk2LjEzIDM3MC4xNiAxOTYuMTMgMzcyLjM5IDE5Ni4xNCAzNzQuNjQgQyAxOTQuNjEgMzc0LjY0IDE5My4wNyAzNzQuNjUgMTkxLjU0IDM3NC42NSBDIDE5MS42MSAzNzIuMzYgMTkxLjY5IDM3MC4wNyAxOTEuNzYgMzY3Ljc5IFpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApO1xuICB9XG59XG5cbkxvZ28uUHJvcFR5cGVzID0ge1xuICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBvcGFjaXR5OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ287XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzeCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3Qgcm91dGluZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5jb25zdCBhdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMnKTtcblxuY29uc3QgbWVudVBhZ2VzSWRzID0gW1xuICAgIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkhPTUUsXG4gICAgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVNFUlMsXG4gICAgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuR0FNRVMsXG4gICAgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuQk9PS0lOR1MsXG4gICAgQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRElTVFJJQlVUSU9OXG5dO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvdG9wQmFyLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcbiAgICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdWlkOiBhdXRoRGF0YS51aWQsXG4gICAgICAgIHBob3RvVVJMOiBhdXRoRGF0YS5waG90b1VSTCB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTYzLzE2MzgwNC5zdmcnLFxuICAgICAgICBpc0FkbWluOiBhdXRoRGF0YS5pc0FkbWluLFxuICAgICAgICBjdXJyZW50UGFnZUlkOiBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFnZUlkLFxuICAgICAgICBjdXJyZW50VXNlcjogYXV0aERhdGEgJiYgdXNlcnNbYXV0aERhdGEudWlkXVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hdmlnYXRlVG86IChwYWdlSWQsIHBhcmFtcykgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVUbyhwYWdlSWQsIHBhcmFtcykpLFxuICAgICAgICBzaWduT3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5zaWduT3V0KCkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlclRpdGxlKGN1cnJlbnRVc2VyKSB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgICByZXR1cm4gJ9ee16nXqtee16knO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFVzZXIuZmlyc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIodWlkLCBjdXJyZW50VXNlciwgcGhvdG9VUkwsIG5hdmlnYXRlVG8sIHNpZ25PdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS01IHNtYWxsLTEwIGNvbHVtbiB1c2VyLWluZm9cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXtwaG90b1VSTH0gb25DbGljaz17bmF2aWdhdGVUby5iaW5kKHRoaXMsIENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLkVESVRfVVNFUl9JTkZPLCB7IHVpZCB9KX0vPlxuICAgICAgICAgICAgPHNwYW4+16nXnNeV150gPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1uYW1lXCI+e2dldFVzZXJUaXRsZShjdXJyZW50VXNlcil9PC9zcGFuPjxzcGFuPiB8IDwvc3Bhbj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRpc2Nvbm5lY3RcIiBvbkNsaWNrPXtzaWduT3V0fT7XlNeq16DXqtenPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTbWFsbE1lbnVGb3JNb2JpbGUodG9nZ2xlTWVudVZpc2liaWxpdHkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctZm9yLXNtYWxsLW9ubHkgZmxvYXQtbGVmdFwiIGtleT1cImFkbWluLW1lbnUtaWNvblwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic21hbGwtbWVudSBidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNZW51VmlzaWJpbGl0eX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudShjdXJyZW50UGFnZUlkLCBuYXZpZ2F0ZVRvLCBpc0FkbWluLCBpc01lbnVWaXNpYmxlLCB0b2dnbGVNZW51VmlzaWJpbGl0eSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVza3RvcE1lbnVJdGVtKHBhZ2VJZCkge1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgYWN0aXZlOiBjdXJyZW50UGFnZUlkID09PSBwYWdlSWQsXG4gICAgICAgICAgICBidXR0b246IHRydWUsXG4gICAgICAgICAgICBzbWFsbDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpdGVtQ2xhc3Nlc30gb25DbGljaz17bmF2aWdhdGVUby5iaW5kKHRoaXMsIHBhZ2VJZCl9IGtleT17J3BhZ2UtJyArIHBhZ2VJZH0+XG4gICAgICAgICAgICAgICAgeyBUcmFuc2xhdGlvbnMuUk9VVElORy5QQUdFU1twYWdlSWRdIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2JpbGVNZW51SXRlbShwYWdlSWQpIHtcbiAgICAgICAgY29uc3QgaXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIGFjdGl2ZTogY3VycmVudFBhZ2VJZCA9PT0gcGFnZUlkLFxuICAgICAgICAgICAgYnV0dG9uOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uTW9iaWxlTWVudUNsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0ZVRvKHBhZ2VJZCk7XG4gICAgICAgICAgICB0b2dnbGVNZW51VmlzaWJpbGl0eSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2l0ZW1DbGFzc2VzfSBvbkNsaWNrPXtvbk1vYmlsZU1lbnVDbGlja2VkfSBrZXk9eydwYWdlLScgKyBwYWdlSWR9PlxuICAgICAgICAgICAgICAgIHsgVHJhbnNsYXRpb25zLlJPVVRJTkcuUEFHRVNbcGFnZUlkXSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVza3RvcE1lbnUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgYnV0dG9uLWdyb3VwIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBrZXk9XCJhZG1pbi1tZW51XCI+XG4gICAgICAgICAgICAgICAgeyBfLm1hcChtZW51UGFnZXNJZHMsIGNyZWF0ZURlc2t0b3BNZW51SXRlbSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9iaWxlTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBidXR0b24tZ3JvdXAgc3RhY2tlZC1mb3Itc21hbGwgc2hvdy1mb3Itc21hbGwtb25seVwiIGtleT1cImFkbWluLW1lbnUtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgeyBfLm1hcChtZW51UGFnZXNJZHMsIGNyZWF0ZU1vYmlsZU1lbnVJdGVtKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS03IHNtYWxsLTEyIGNvbHVtbiB2ZXJ0aWNhbCBjb2xsYXBzZWRcIj5cbiAgICAgICAgICAgIHsgaXNBZG1pbiA/IGNyZWF0ZURlc2t0b3BNZW51KCkgOiBudWxsIH1cbiAgICAgICAgICAgIHsgaXNBZG1pbiAmJiBpc01lbnVWaXNpYmxlID8gY3JlYXRlTW9iaWxlTWVudSgpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc01lbnVWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudVZpc2liaWxpdHkoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNZW51VmlzaWJsZTogIXRoaXMuc3RhdGUuaXNNZW51VmlzaWJsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXIgcm93IHNtYWxsLWNvbGxhcHNlIGhpZGUtZm9yLXByaW50XCI+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVIZWFkZXIodGhpcy5wcm9wcy51aWQsIHRoaXMucHJvcHMuY3VycmVudFVzZXIsIHRoaXMucHJvcHMucGhvdG9VUkwsIHRoaXMucHJvcHMubmF2aWdhdGVUbywgdGhpcy5wcm9wcy5zaWduT3V0KSB9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmlzQWRtaW4gPyBjcmVhdGVTbWFsbE1lbnVGb3JNb2JpbGUodGhpcy50b2dnbGVNZW51VmlzaWJpbGl0eS5iaW5kKHRoaXMpKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgY3JlYXRlTWVudSh0aGlzLnByb3BzLmN1cnJlbnRQYWdlSWQsIHRoaXMucHJvcHMubmF2aWdhdGVUbywgdGhpcy5wcm9wcy5pc0FkbWluLCB0aGlzLnN0YXRlLmlzTWVudVZpc2libGUsIHRoaXMudG9nZ2xlTWVudVZpc2liaWxpdHkuYmluZCh0aGlzKSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Ub3BCYXIucHJvcFR5cGVzID0ge1xuICAgIHVpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBob3RvVVJMOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzQWRtaW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGN1cnJlbnRQYWdlSWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZVRvOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBzaWduT3V0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRvcEJhcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdG9wQmFyLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9wQmFyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9wQmFyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi90b3BCYXIuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3AtYmFyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XFxuICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgLnRvcC1iYXIgc3BhbiB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgLnRvcC1iYXIgLnVzZXItaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxcbiAgLnRvcC1iYXIgLnNtYWxsLW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiAjRDUwMDAwO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtOyB9XFxuICAudG9wLWJhciAubWVudSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNnJlbTsgfVxcbiAgICAudG9wLWJhciAubWVudSAuYnV0dG9uIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbi5zbWFsbCB7XFxuICAgICAgICBmb250LXNpemU6IDAuODVyZW07IH1cXG4gICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjRDMyRjJGOyB9XFxuICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbi5hY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogI0QzMkYyRjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uLmFjdGl2ZTpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAudG9wLWJhciAuYXZhdGFyIHtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnRvcC1iYXIgLmRpc2Nvbm5lY3Qge1xcbiAgICBjb2xvcjogI0Y0NDMzNjsgfVxcbiAgICAudG9wLWJhciAuZGlzY29ubmVjdDpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IGF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucycpO1xuY29uc3QgZXJyb3JBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9lcnJvckFjdGlvbnMnKTtcblxuY29uc3QgTG9nbyA9IHJlcXVpcmUoJy4vbG9nbycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvYXV0aFBhZ2Uuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBlcnJvck1zZzogc3RhdGUuZXJyb3JNc2dcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2dpbldpdGhGYWNlYm9vazogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9naW5XaXRoRmFjZWJvb2soKSksXG4gICAgICAgIGxvZ2luV2l0aEdvb2dsZTogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9naW5XaXRoR29vZ2xlKCkpLFxuICAgICAgICBsb2dpbldpdGhFbWFpbDogKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMubG9naW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpKSxcbiAgICAgICAgc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZDogKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkpLFxuICAgICAgICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsOiBlbWFpbCA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKSksXG4gICAgICAgIHJlcG9ydEVycm9yOiAobWVzc2FnZSkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKG1lc3NhZ2UpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzTG9naW5Nb2RlKGF1dGhNb2RlKSB7XG4gICAgcmV0dXJuIGF1dGhNb2RlID09PSAnbG9naW4nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ2lzdGVyTW9kZShhdXRoTW9kZSkge1xuICAgIHJldHVybiBhdXRoTW9kZSA9PT0gJ3JlZ2lzdGVyJztcbn1cblxuZnVuY3Rpb24gaXNGb3JtVmFsaWQoc3RhdGUsIGF1dGhNb2RlKSB7XG4gICAgc3dpdGNoIChhdXRoTW9kZSkge1xuICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgICByZXR1cm4gIV8uaXNFbXB0eShzdGF0ZS5lbWFpbCkgJiYgIV8uaXNFbXB0eShzdGF0ZS5wYXNzd29yZCk7XG4gICAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgICAgIHJldHVybiAhXy5pc0VtcHR5KHN0YXRlLmVtYWlsKSAmJiAhXy5pc0VtcHR5KHN0YXRlLnBhc3N3b3JkKSAmICFfLmlzRW1wdHkoc3RhdGUucGFzc3dvcmRBZ2Fpbik7XG4gICAgICAgIGNhc2UgJ2ZvcmdvdFBhc3N3b3JkJzpcbiAgICAgICAgICAgIHJldHVybiAhXy5pc0VtcHR5KHN0YXRlLmVtYWlsKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ28oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tY2VudGVyZWQgbG9nb1wiPlxuICAgICAgICAgICAgPExvZ28gd2lkdGg9ezEyMH0gaGVpZ2h0PXsxMjB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNvY2lhbEJ1dHRvbnNTZWN0aW9uKGxvZ2luV2l0aEZhY2Vib29rLCBsb2dpbldpdGhHb29nbGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dpbldpdGhGYWNlYm9va30gY2xhc3NOYW1lPSdmYWNlYm9vayBidXR0b24gc3BsaXQnPlxuICAgICAgICAgICAgICAgIDxzcGFuPkZhY2Vib29rPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZmFjZWJvb2stb2ZmaWNpYWwnIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dpbldpdGhHb29nbGV9IGNsYXNzTmFtZT0nZ29vZ2xlIGJ1dHRvbiBzcGxpdCc+XG4gICAgICAgICAgICAgICAgPHNwYW4+R29vZ2xlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZ29vZ2xlJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdocicgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JTZWN0aW9uKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXJyb3ItbXNnJyBrZXk9J2hvbWVQYWdlLWVycm9yLW1lc3NhZ2UnPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGUnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdlcnJvci1tc2ctdHh0Jz57bWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KHR5cGUsIHZhbHVlLCBvbkNoYW5nZSwgbmFtZSwgcGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXQgdHlwZT17dHlwZX0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9e25hbWV9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRCdXR0b25MYWJlbChhdXRoTW9kZSkge1xuICAgIHN3aXRjaCAoYXV0aE1vZGUpIHtcbiAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0aW9ucy5BVVRIX1BBR0UuU1VCTUlUX0JUTi5MT0dJTjtcbiAgICAgICAgY2FzZSAncmVnaXN0ZXInOlxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0aW9ucy5BVVRIX1BBR0UuU1VCTUlUX0JUTi5SRUdJU1RFUjtcbiAgICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICAgICAgcmV0dXJuIFRyYW5zbGF0aW9ucy5BVVRIX1BBR0UuU1VCTUlUX0JUTi5GT1JHT1RfUEFTU1dPUkQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24ob25TdWJtaXQsIGRpc2FibGVkLCBhdXRoTW9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25TdWJtaXR9IGNsYXNzTmFtZT1cImJ1dHRvbiBzcGxpdCBzdWNjZXNzXCIgZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICAgIDxzcGFuPntnZXRCdXR0b25MYWJlbChhdXRoTW9kZSl9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rc1NlY3Rpb24oYXV0aE1vZGUsIG5hdlRvTG9naW4sIG5hdlRvUmVnaXN0ZXIsIG5hdlRvRm9yZ290UGFzc3dvcmQpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvZ2luU2NyZWVuTGlua3MoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTYgcmVkLWxpbmsnPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtuYXZUb1JlZ2lzdGVyfT57VHJhbnNsYXRpb25zLkFVVEhfUEFHRS5MSU5LUy5HT19UT19SRUdJU1RFUn08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBzbWFsbC02IHJlZC1saW5rJz5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17bmF2VG9Gb3Jnb3RQYXNzd29yZH0+e1RyYW5zbGF0aW9ucy5BVVRIX1BBR0UuTElOS1MuR09fVE9fRk9SR09UX1BBU1NXT1JEfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5PTkxvZ2luU2NyZWVuTGlua3MoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncmVkLWxpbmsnIG9uQ2xpY2s9e25hdlRvTG9naW59PntUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLkxJTktTLkdPX1RPX0xPR0lOfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IGlzTG9naW5Nb2RlKGF1dGhNb2RlKSA/IGNyZWF0ZUxvZ2luU2NyZWVuTGlua3MoKSA6IGNyZWF0ZU5PTkxvZ2luU2NyZWVuTGlua3MoKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEF1dGhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGF1dGhNb2RlOiAnbG9naW4nLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmRBZ2FpbjogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIH07XG5cbiAgICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIGlzRm9ybVZhbGlkKHRoaXMuc3RhdGUsIHRoaXMuc3RhdGUuYXV0aE1vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hdXRoTW9kZSkge1xuICAgICAgICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9naW5XaXRoRW1haWwodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNFcXVhbCh0aGlzLnN0YXRlLnBhc3N3b3JkLCB0aGlzLnN0YXRlLnBhc3N3b3JkQWdhaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZCh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlcG9ydEVycm9yKFRyYW5zbGF0aW9ucy5FUlJPUl9NRVNTQUdFUy5BVVRILk5PVF9TQU1FX1BBU1NXT1JEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmb3Jnb3RQYXNzd29yZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKHRoaXMuc3RhdGUuZW1haWwpO1xuICAgICAgICAgICAgICAgIHRoaXMub25BdXRoTW9kZUNoYW5nZSgnbG9naW4nKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uQXV0aE1vZGVDaGFuZ2UgPSBhdXRoTW9kZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYXV0aE1vZGUgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlTmF2RnVuYyA9IGF1dGhNb2RlID0+IHRoaXMub25BdXRoTW9kZUNoYW5nZS5iaW5kKHRoaXMsIGF1dGhNb2RlKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS02IGNvbHVtbnMgc21hbGwtY2VudGVyZWQgYXV0aC1mb3JtLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgeyBjcmVhdGVMb2dvKCkgfVxuXG4gICAgICAgICAgICAgICAgeyBpc0xvZ2luTW9kZSh0aGlzLnN0YXRlLmF1dGhNb2RlKSB8fCBpc1JlZ2lzdGVyTW9kZSh0aGlzLnN0YXRlLmF1dGhNb2RlKSA/IGNyZWF0ZVNvY2lhbEJ1dHRvbnNTZWN0aW9uKHRoaXMucHJvcHMubG9naW5XaXRoRmFjZWJvb2ssIHRoaXMucHJvcHMubG9naW5XaXRoR29vZ2xlKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmVycm9yTXNnID8gY3JlYXRlRXJyb3JTZWN0aW9uKHRoaXMucHJvcHMuZXJyb3JNc2cpIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufSBjbGFzc05hbWU9J2F1dGgtZm9ybSc+XG5cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVJbnB1dCgnZW1haWwnLCB0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLm9uQ2hhbmdlLCAnZW1haWwnLFRyYW5zbGF0aW9ucy5BVVRIX1BBR0UuRklFTERTLkVNQUlMKSB9XG5cbiAgICAgICAgICAgICAgICAgICAgeyBpc0xvZ2luTW9kZSh0aGlzLnN0YXRlLmF1dGhNb2RlKSB8fCBpc1JlZ2lzdGVyTW9kZSh0aGlzLnN0YXRlLmF1dGhNb2RlKSA/IGNyZWF0ZUlucHV0KCdwYXNzd29yZCcsIHRoaXMuc3RhdGUucGFzc3dvcmQsIHRoaXMub25DaGFuZ2UsICdwYXNzd29yZCcsVHJhbnNsYXRpb25zLkFVVEhfUEFHRS5GSUVMRFMuUEFTU1dPUkQpIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgICAgICAgeyBpc1JlZ2lzdGVyTW9kZSh0aGlzLnN0YXRlLmF1dGhNb2RlKSA/IGNyZWF0ZUlucHV0KCdwYXNzd29yZCcsIHRoaXMuc3RhdGUucGFzc3dvcmRBZ2FpbiwgdGhpcy5vbkNoYW5nZSwgJ3Bhc3N3b3JkQWdhaW4nLCBUcmFuc2xhdGlvbnMuQVVUSF9QQUdFLkZJRUxEUy5QQVNTV09SRF9BR0FJTikgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZVN1Ym1pdEJ1dHRvbih0aGlzLm9uU3VibWl0LCAhaXNGb3JtVmFsaWQodGhpcy5zdGF0ZSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSksIHRoaXMuc3RhdGUuYXV0aE1vZGUpIH1cblxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZUxpbmtzU2VjdGlvbih0aGlzLnN0YXRlLmF1dGhNb2RlLCBjcmVhdGVOYXZGdW5jKCdsb2dpbicpLCBjcmVhdGVOYXZGdW5jKCdyZWdpc3RlcicpLCBjcmVhdGVOYXZGdW5jKCdmb3Jnb3RQYXNzd29yZCcpKSB9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQXV0aFBhZ2UucHJvcFR5cGVzID0ge1xuICAgIGxvZ2luV2l0aEZhY2Vib29rOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvZ2luV2l0aEdvb2dsZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBsb2dpbldpdGhFbWFpbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNlbmRQYXNzd29yZFJlc2V0RW1haWw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVwb3J0RXJyb3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZXJyb3JNc2c6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBdXRoUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hdXRoUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hdXRoUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvYXV0aFBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXV0aC1mb3JtLWNvbnRhaW5lciAubG9nbyB7XFxuICBtYXJnaW46IDIwcHggYXV0byAzNXB4O1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiAxNjBweDsgfVxcblxcbi5hdXRoLWZvcm0tY29udGFpbmVyIC5hdXRoLWZvcm0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmF1dGgtZm9ybS1jb250YWluZXIgLmhyIHtcXG4gIG1hcmdpbjogMC43ZW0gYXV0byAhaW1wb3J0YW50OyB9XFxuXFxuLmF1dGgtZm9ybS1jb250YWluZXIgLnJlZC1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9hdXRoUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgYm9va2luZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zJyk7XG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcbmNvbnN0IEV2ZW50SXRlbSA9IHJlcXVpcmUoJy4vZXZlbnRJdGVtJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9ob21lUGFnZS5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHVpZDogc3RhdGUuYXV0aERhdGEudWlkLFxuICAgIGdhbWVzOiBzdGF0ZS5ldmVudHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgbmF2aWdhdGVUb1VwZGF0ZUJvb2tpbmc6ICh1aWQsIGdhbWVJZCkgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUk9VVElORy5QQUdFUy5VUERBVEVfQk9PS0lORywgeyB1aWQsIGdhbWVJZCB9KSksXG4gICAgY2FuY2VsQm9va2luZzogKHVpZCwgZ2FtZUlkKSA9PiBkaXNwYXRjaChib29raW5nQWN0aW9ucy5ib29raW5nc0NhbmNlbGVkKHVpZCwgZ2FtZUlkKSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXZlbnREYXRlKGdhbWUpIHtcbiAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZ2FtZS55ZWFyLCBnYW1lLm1vbnRoLCBnYW1lLmRheSk7XG4gIGV2ZW50RGF0ZS5zZXRNb250aChldmVudERhdGUuZ2V0TW9udGgoKSAtIDEpO1xuICByZXR1cm4gZXZlbnREYXRlO1xufVxuXG5mdW5jdGlvbiBpc0Z1dHVyZUV2ZW50KGdhbWUpIHtcbiAgY29uc3QgZXZlbnREYXRlID0gcGFyc2VFdmVudERhdGUoZ2FtZSk7XG4gIHJldHVybiBldmVudERhdGUgPiBEYXRlLm5vdygpO1xufVxuXG5mdW5jdGlvbiBnZXRDbG9zZWRHYW1lc0FycihnYW1lcykge1xuICByZXR1cm4gXy5jaGFpbihnYW1lcylcbiAgICAub21pdEJ5KGdhbWUgPT4ge1xuICAgICAgcmV0dXJuIGdhbWUuc3RhdHVzICE9PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEIHx8ICFpc0Z1dHVyZUV2ZW50KGdhbWUpO1xuICAgIH0pXG4gICAgLm1hcCgoZ2FtZSwgZ2FtZUlkKSA9PiAoe1xuICAgICAgZ2FtZSxcbiAgICAgIGdhbWVJZFxuICAgIH0pKVxuICAgIC5zb3J0QnkoZ2FtZURhdGEgPT4gcGFyc2VFdmVudERhdGUoZ2FtZURhdGEuZ2FtZSkpXG4gICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGdldE9wZW5HYW1lcyhnYW1lcykge1xuICByZXR1cm4gXy5vbWl0QnkoZ2FtZXMsIGdhbWUgPT4gZ2FtZS5zdGF0dXMgPT09IENvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRUQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2JpbGVOb0dhbWVzTWVzc2FnZVNlY3Rpb24oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3Nob3ctZm9yLXNtYWxsLW9ubHkgbm8tYm9va2luZ3MgbW9yZS1zcGFjZSc+XG4gICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkhPTUVfUEFHRS5OT19PUEVOX0dBTUVTfTwvc3Bhbj5cbiAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtYnVzJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR2FtZXNMaXN0cyhvcGVuR2FtZXMsIGNsb3NlZEdhbWVzQXJyLCBvbkJvb2tpbmcsIG9uQ2FuY2VsQm9va2luZykge1xuXG4gIGZ1bmN0aW9uIGJpbmRPbkdhbWVJdGVtQ2xpY2soZm4sIGdhbWVJZCkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm4oZ2FtZUlkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPcGVuR2FtZXNMaXN0KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudHMtbGlzdCBvcGVuLWV2ZW50cyc+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT0naGlkZS1mb3Itc21hbGwtb25seSc+e1RyYW5zbGF0aW9ucy5IT01FX1BBR0UuT1BFTl9HQU1FU308L2g2PlxuICAgICAgICAgICAgeyBfLm1hcChvcGVuR2FtZXMsIChnYW1lLCBnYW1lSWQpID0+IDxFdmVudEl0ZW0ga2V5PXsnb3Blbi1nYW1lLScgKyBnYW1lSWR9IGV2ZW50SWQ9e2dhbWVJZH0gb25Cb29raW5nPXtiaW5kT25HYW1lSXRlbUNsaWNrKG9uQm9va2luZywgZ2FtZUlkKX0gb25DYW5jZWxCb29raW5nPXtiaW5kT25HYW1lSXRlbUNsaWNrKG9uQ2FuY2VsQm9va2luZywgZ2FtZUlkKX0gLz4pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNsb3NlZEdhbWVzTGlzdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRzLWxpc3QgY2xvc2VkLWV2ZW50cyBoaWRlLWZvci1zbWFsbC1vbmx5Jz5cbiAgICAgICAgICA8aDY+e1RyYW5zbGF0aW9ucy5IT01FX1BBR0UuQ0xPU0VEX0dBTUVTfTwvaDY+XG4gICAgICAgICAgICB7IF8ubWFwKGNsb3NlZEdhbWVzQXJyLCBnYW1lRGF0YSA9PiA8RXZlbnRJdGVtIGtleT17J2Nsb3NlZC1nYW1lLScgKyBnYW1lRGF0YS5nYW1lSWR9IGV2ZW50SWQ9e2dhbWVEYXRhLmdhbWVJZH0gLz4pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICB7IF8uaXNFbXB0eShvcGVuR2FtZXMpID8gbnVsbCA6IGNyZWF0ZU9wZW5HYW1lc0xpc3QoKSB9XG4gICAgICAgIHsgY3JlYXRlQ2xvc2VkR2FtZXNMaXN0KCkgfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgb25Cb29raW5nID0gZ2FtZUlkID0+IHtcbiAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG9VcGRhdGVCb29raW5nKHRoaXMucHJvcHMudWlkLCBnYW1lSWQpO1xuICB9O1xuXG4gIG9uQ2FuY2VsQm9va2luZyA9IGdhbWVJZCA9PiB7XG4gICAgdGhpcy5wcm9wcy5jYW5jZWxCb29raW5nKHRoaXMucHJvcHMudWlkLCBnYW1lSWQpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBvcGVuR2FtZXMgPSBnZXRPcGVuR2FtZXModGhpcy5wcm9wcy5nYW1lcyk7XG4gICAgY29uc3QgY2xvc2VkR2FtZXNBcnIgPSBnZXRDbG9zZWRHYW1lc0Fycih0aGlzLnByb3BzLmdhbWVzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NpdGUnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZS1wYWdlIHNtYWxsLWNlbnRlcmVkJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZXZlbnRzLWNvbnRhaW5lcicga2V5PSdldmVudHMtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdldmVudHMnIGtleT0nZXZlbnRzJz5cbiAgICAgICAgICAgICAgeyBfLmlzRW1wdHkob3BlbkdhbWVzKSA/IGNyZWF0ZU1vYmlsZU5vR2FtZXNNZXNzYWdlU2VjdGlvbigpIDogbnVsbCB9XG4gICAgICAgICAgICAgIHsgY3JlYXRlR2FtZXNMaXN0cyhvcGVuR2FtZXMsIGNsb3NlZEdhbWVzQXJyLCB0aGlzLm9uQm9va2luZywgdGhpcy5vbkNhbmNlbEJvb2tpbmcpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xuICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZ2FtZXM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbmF2aWdhdGVUb1VwZGF0ZUJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNhbmNlbEJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lUGFnZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS5qc3giLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2V2ZW50SXRlbS5zY3NzJyk7XG5cbmZ1bmN0aW9uIGlzQm9va2luZ0VuYWJsZWQoZXZlbnQsIHVzZXIpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnN0YXR1cykge1xuICAgICAgICBjYXNlIENvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9BTEw6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUzoge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXIuc2Vhc29uVGlja2V0cyA+IDBcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcbiAgICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuICAgIGNvbnN0IGV2ZW50ID0gc3RhdGUuZXZlbnRzW293blByb3BzLmV2ZW50SWRdO1xuICAgIGNvbnN0IGJvb2tpbmdzID0gc3RhdGUuYm9va2luZ3M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBob21lVGVhbTogQ29uc3RhbnRzLlRFQU1TLkhBUE9FTF9KRVJVU0FMRU0sXG4gICAgICAgIGF3YXlUZWFtOiBDb25zdGFudHMuVEVBTVNbZXZlbnQudHlwZUlkXSxcbiAgICAgICAgc3RhdHVzOiBldmVudC5zdGF0dXMsXG4gICAgICAgIGRhdGU6IGV2ZW50LmRheSArICcvJyArIGV2ZW50Lm1vbnRoICsgJy8nICsgZXZlbnQueWVhcixcbiAgICAgICAgdGltZTogZXZlbnQuaG91ciArICc6JyArIGV2ZW50Lm1pbnV0ZSxcbiAgICAgICAgaXNCb29raW5nQWxsb3dlZDogaXNCb29raW5nRW5hYmxlZChldmVudCwgdXNlcnNbYXV0aERhdGEudWlkXSksXG4gICAgICAgIGlzQm9va2VkOiBfLmhhc0luKGJvb2tpbmdzLCBbYXV0aERhdGEudWlkLCBvd25Qcm9wcy5ldmVudElkXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlYW1Mb2dvcyhob21lLCBhd2F5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzLWltYWdlcyBtZWRpdW0tNCBzbWFsbC0xMiB0ZXh0LWNlbnRlciBtZWRpdW0tdGV4dC1yaWdodCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIHNtYWxsIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBzcmM9e2hvbWUubG9nb30vPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgaGlkZS1mb3Itc21hbGwtb25seVwiPntob21lLmxhYmVsfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGUtZm9yLXNtYWxsLW9ubHkgc2VwYXJhdG9yXCI+IC0gPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBzbWFsbCBoaWRlLWZvci1zbWFsbC1vbmx5XCIgc3JjPXthd2F5LmxvZ299Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IGhpZGUtZm9yLXNtYWxsLW9ubHlcIj57YXdheS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHMtbmFtZXMgc2hvdy1mb3Itc21hbGwtb25seSB0ZXh0LWNlbnRlciByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgc21hbGwtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIGJpZ1wiIHNyYz17aG9tZS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgc21hbGxcIj57aG9tZS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHNtYWxsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBiaWdcIiBzcmM9e2F3YXkubG9nb30vPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IHNtYWxsXCI+e2F3YXkubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50VGltZUFuZERhdGUoZGF0ZSwgdGltZSwgaXNPcGVuRm9yQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIGhpZGUtZm9yLXNtYWxsLW9ubHlcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVsbHlCb29rZWRMYWJlbCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBoaWRlLWZvci1zbWFsbC1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3RhdHVzXCI+e1RyYW5zbGF0aW9ucy5HQU1FLlNUQVRVU1tDb25zdGFudHMuR0FNRS5TVEFUVVMuRlVMTFlfQk9PS0VEXX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdGF0dXNcIj57VHJhbnNsYXRpb25zLkdBTUUuU1RBVFVTW0NvbnN0YW50cy5HQU1FLlNUQVRVUy5GVUxMWV9CT09LRURdfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQnV0dG9uKGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcpIHtcbiAgICBjb25zdCBib29rQnV0dG9uID0gKFxuICAgICAgICA8c3BhbiBrZXk9XCJib29rLWJ0blwiPlxuICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FX0lURU0uQk9PS308L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1idXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgY29uc3QgZWRpdEJvb2tpbmdCdXR0b24gPSAoXG4gICAgICAgIDxzcGFuIGtleT1cImVkaXQtYnRuXCI+XG4gICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVfSVRFTS5FRElUX0JPT0tJTkd9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYnVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzIHNtYWxsXCIga2V5PVwicmVnaXN0ZXItYnRuXCIgb25DbGljaz17b25Cb29raW5nfSBkaXNhYmxlZD17IWlzQm9va2luZ0FsbG93ZWR9PlxuICAgICAgICAgICAgeyBpc0Jvb2tlZCA/IGVkaXRCb29raW5nQnV0dG9uIDogYm9va0J1dHRvbiB9XG4gICAgICAgIDwvYT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uKG9uQ2FuY2VsQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzbWFsbCBhbGVydFwiIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvbkNhbmNlbEJvb2tpbmd9PlxuICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FX0lURU0uQ0FOQ0VMX0JPT0tJTkd9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgIDwvYT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25zQnV0dG9ucyhpc09wZW5Gb3JCb29raW5nLCBpc0Jvb2tpbmdBbGxvd2VkLCBpc0Jvb2tlZCwgb25Cb29raW5nLCBvbkNhbmNlbEJvb2tpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25zIG1lZGl1bS00IHNtYWxsLTEyIHRleHQtY2VudGVyIG1lZGl1bS10ZXh0LWxlZnQgY29sdW1uXCI+XG4gICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyBjcmVhdGVCb29raW5nQnV0dG9uKGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcpIDogbnVsbCB9XG4gICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgJiYgaXNCb29rZWQgPyBjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uKG9uQ2FuY2VsQm9va2luZykgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgRXZlbnRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbkZvckJvb2tpbmcgPSB0aGlzLnByb3BzLnN0YXR1cyAhPT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRDtcbiAgICAgICAgY29uc3QgaXNGdWxseUJvb2tlZCA9IHRoaXMucHJvcHMuc3RhdHVzID09PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuRlVMTFlfQk9PS0VEO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pdGVtIHJvdyBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlVGVhbUxvZ29zKHRoaXMucHJvcHMuaG9tZVRlYW0sIHRoaXMucHJvcHMuYXdheVRlYW0pIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUV2ZW50VGltZUFuZERhdGUodGhpcy5wcm9wcy5kYXRlLCB0aGlzLnByb3BzLnRpbWUsIGlzT3BlbkZvckJvb2tpbmcgKX1cbiAgICAgICAgICAgICAgICB7IGlzRnVsbHlCb29rZWQgPyBjcmVhdGVGdWxseUJvb2tlZExhYmVsKCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUFjdGlvbnNCdXR0b25zKGlzT3BlbkZvckJvb2tpbmcsIHRoaXMucHJvcHMuaXNCb29raW5nQWxsb3dlZCwgdGhpcy5wcm9wcy5pc0Jvb2tlZCwgdGhpcy5wcm9wcy5vbkJvb2tpbmcsIHRoaXMucHJvcHMub25DYW5jZWxCb29raW5nKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkV2ZW50SXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgaG9tZVRlYW06IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsb2dvOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBhd2F5VGVhbTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxvZ286IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGRhdGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGF0dXM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNCb29raW5nQWxsb3dlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNCb29rZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9uQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DYW5jZWxCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShFdmVudEl0ZW0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50SXRlbS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRJdGVtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnQtaXRlbSB7XFxuICBmb250LXNpemU6IDAuOWVtOyB9XFxuICAuZXZlbnQtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLWltYWdlcyAuc2VwYXJhdG9yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbWFnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2UuYmlnIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogOTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2Uuc21hbGwge1xcbiAgICAgIG1hcmdpbjogMCA1cHg7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLW5hbWVzIHtcXG4gICAgcGFkZGluZzogMCA0ZW07IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvLmNvbG9yZWQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyAuZXZlbnQtc3RhdHVzIHtcXG4gICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyBzcGFuIHtcXG4gICAgICBtYXJnaW46IDAgMTVweDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIC5idXR0b24uc21hbGwge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgICBtYXJnaW46IDAgNXB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvaG9tZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZS1wYWdlIC5ldmVudHMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgIC5ob21lLXBhZ2UgLmV2ZW50cyB7XFxuICAgICAgbWFyZ2luLXRvcDogMHB4OyB9IH1cXG5cXG4uaG9tZS1wYWdlIC5vcGVuLWV2ZW50cyB7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XFxuXFxuLmhvbWUtcGFnZSAuZXZlbnRzLWxpc3QgaDYge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaG9tZS1wYWdlIC5uby1ib29raW5ncyB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM0MjQyNDI7IH1cXG4gIC5ob21lLXBhZ2UgLm5vLWJvb2tpbmdzIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG4uaG9tZS1wYWdlIC5ldmVudC1pdGVtIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSAuZXZlbnQtaXRlbSB7XFxuICAgICAgcGFkZGluZzogMTVweCAwIDMwcHggMDsgfSB9XFxuICAuaG9tZS1wYWdlIC5ldmVudC1pdGVtOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7IH1cXG4gIC5ob21lLXBhZ2UgLmV2ZW50LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9ob21lUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuXG5jb25zdCBMaXN0SXRlbSA9IHJlcXVpcmUoJy4vbGlzdEl0ZW0nKTtcbmNvbnN0IFBhZ2VUaXRsZSA9IHJlcXVpcmUoJy4vcGFnZVRpdGxlJyk7XG5cbmNvbnN0IEZJTFRFUlMgPSB7XG4gICAgQUxMOiAnQUxMJyxcbiAgICBNRU1CRVJTOiAnTUVNQkVSUycsXG4gICAgUkVRVUVTVFM6ICdSRVFVRVNUUycsXG4gICAgTk9OX01FTUJFUlM6ICdOT05fTUVNQkVSUydcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBmaWx0ZXI6IHN0YXRlLnJvdXRpbmcuY3VycmVudC5wYXJhbXMuZmlsdGVyIHx8IEZJTFRFUlMuQUxMLFxuICAgICAgICAgICAgc2VhcmNoOiBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zLnNlYXJjaCB8fCAnJ1xuICAgICAgICB9LFxuICAgICAgICB1c2Vyczogc3RhdGUudXNlcnNcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYXZUb0VkaXRVc2VyOiB1aWQgPT4gIGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuRURJVF9VU0VSX0lORk8sIHsgdWlkIH0pKSxcbiAgICAgICAgY2hhbmdlRmlsdGVyOiBmaWx0ZXIgPT4gIGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLnJlcGxhY2UobnVsbCwgeyBmaWx0ZXIgfSkpLFxuICAgICAgICBjaGFuZ2VTZWFyY2hRdWVyeTogXy5kZWJvdW5jZShzZWFyY2ggPT4gIGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLnJlcGxhY2UobnVsbCwgeyBzZWFyY2ggfSkpLCA1MDApXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY291bnRNZW1iZXJzKHVzZXJzKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odXNlcnMpXG4gICAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zLk1FTUJFUlMpXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ3NlYXNvblRpY2tldHMnKVxuICAgICAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gY291bnRSZXF1ZXN0cyh1c2Vycykge1xuICAgIHJldHVybiBfLmNoYWluKHVzZXJzKVxuICAgICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5SRVFVRVNUUylcbiAgICAgICAgLnNpemUoKVxuICAgICAgICAudmFsdWUoKTtcbn1cblxuZnVuY3Rpb24gY291bnROb25NZW1iZXJzKHVzZXJzKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odXNlcnMpXG4gICAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zLk5PTl9NRU1CRVJTKVxuICAgICAgICAuc2l6ZSgpXG4gICAgICAgIC52YWx1ZSgpO1xufVxuXG5mdW5jdGlvbiBjb3VudEFjY29yZGluZ1RvRmlsdGVycyh1c2Vycykge1xuICAgIHJldHVybiB7XG4gICAgICAgIFtGSUxURVJTLkFMTF06IF8uc2l6ZSh1c2VycyksXG4gICAgICAgIFtGSUxURVJTLk1FTUJFUlNdOiBjb3VudE1lbWJlcnModXNlcnMpLFxuICAgICAgICBbRklMVEVSUy5SRVFVRVNUU106IGNvdW50UmVxdWVzdHModXNlcnMpLFxuICAgICAgICBbRklMVEVSUy5OT05fTUVNQkVSU106IGNvdW50Tm9uTWVtYmVycyh1c2VycyksXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlclRpdGxlKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyU3VidGl0bGVzKHVzZXIpIHtcbiAgICByZXR1cm4gW3VzZXIucGhvbmVQcmVmaXggKyAnLScgKyB1c2VyLnBob25lTnVtYmVyLCB1c2VyLmVtYWlsLCAn15vXnteV16og157XoNeV15nXmdedOiAnICsgKHVzZXIuc2Vhc29uVGlja2V0cyB8fCAwKV07XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJJbWFnZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIucGhvdG9VUkwgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE2My8xNjM4MDQuc3ZnJztcbn1cblxuY29uc3QgcGlja1VzZXJzRnVuY3Rpb25zID0ge1xuICAgIEFMTDogKCkgPT4gdHJ1ZSxcbiAgICBNRU1CRVJTOiB1c2VyID0+IHVzZXIuc2Vhc29uVGlja2V0cyA+IDAsXG4gICAgTk9OX01FTUJFUlM6IHVzZXIgPT4gIXVzZXIuc2Vhc29uVGlja2V0cyxcbiAgICBSRVFVRVNUUzogdXNlciA9PiB1c2VyLnJlcXVlc3RGb3JNZW1iZXJzaGlwLFxufTtcblxuZnVuY3Rpb24gZ2V0VmlzaWJsZVVzZXJzKHVzZXJzLCBmaWx0ZXIsIHNlYXJjaFF1ZXJ5KSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odXNlcnMpXG4gICAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zW2ZpbHRlcl0pXG4gICAgICAgIC5waWNrQnkodXNlciA9PiBfLnN0YXJ0c1dpdGgodXNlci5maXJzdE5hbWUsIHNlYXJjaFF1ZXJ5KSB8fCBfLnN0YXJ0c1dpdGgodXNlci5sYXN0TmFtZSwgc2VhcmNoUXVlcnkpLCB0aGlzKVxuICAgICAgICAubWFwKCh1c2VyLCB1aWQpID0+ICh7dXNlciwgdWlkfSkpXG4gICAgICAgIC5zb3J0QnkoJ3VzZXIuZmlyc3ROYW1lJylcbiAgICAgICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbHRlcihzZWFyY2hRdWVyeSwgZmlsdGVyLCBoYW5kbGVGaWx0ZXJDaGFuZ2UsIGhhbmRsZVNlYXJjaFF1ZXJ5Q2hhbmdlLCBmaWx0ZXJDb3VudHMpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZpbHRlclRhYnMoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTEyIGxhcmdlLTgnPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J21lbnUgc21hbGwtdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gRklMVEVSUy5BTEx9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzLCBGSUxURVJTLkFMTCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuVVNFUlNfUEFHRS5GSUxURVIuVEFCUy5BTEx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7IGZpbHRlckNvdW50c1tGSUxURVJTLkFMTF0gfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gRklMVEVSUy5NRU1CRVJTfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcywgRklMVEVSUy5NRU1CRVJTKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLkZJTFRFUi5UQUJTLk1FTUJFUlN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7IGZpbHRlckNvdW50c1tGSUxURVJTLk1FTUJFUlNdIH0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IEZJTFRFUlMuUkVRVUVTVFN9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzLCBGSUxURVJTLlJFUVVFU1RTKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLkZJTFRFUi5UQUJTLlJFUVVFU1RTfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oeyBmaWx0ZXJDb3VudHNbRklMVEVSUy5SRVFVRVNUU10gfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gRklMVEVSUy5OT05fTUVNQkVSU30pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUZpbHRlckNoYW5nZS5iaW5kKHRoaXMsIEZJTFRFUlMuTk9OX01FTUJFUlMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLlVTRVJTX1BBR0UuRklMVEVSLlRBQlMuTk9OX01FTUJFUlN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7IGZpbHRlckNvdW50c1tGSUxURVJTLk5PTl9NRU1CRVJTXSB9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGV4dElucHV0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBzbWFsbC0xMiBsYXJnZS00Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2gtaW5wdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17VHJhbnNsYXRpb25zLlVTRVJTX1BBR0UuRklMVEVSLlNFQVJDSH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hRdWVyeUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzZWFyY2gtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXNlYXJjaCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICB7IGNyZWF0ZUZpbHRlclRhYnMoKSB9XG4gICAgICAgICAgICB7IGNyZWF0ZVRleHRJbnB1dCgpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlcnNMaXN0KHVzZXJzQXJyLCBvblVzZXJDbGljaykge1xuXG4gICAgY29uc3Qgb25JdGVtQ2xpY2sgPSB1aWQgPT4ge1xuICAgICAgICBvblVzZXJDbGljayh1aWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBpdGVtcyA9IF8ubWFwKHVzZXJzQXJyLCB1c2VyRGVmID0+IHtcbiAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgIGtleT17J3VzZXInICsgdXNlckRlZi51aWR9XG4gICAgICAgICAgICAgICB0aXRsZT17Z2V0VXNlclRpdGxlKHVzZXJEZWYudXNlcil9XG4gICAgICAgICAgICAgICBzdWJ0aXRsZXM9e2dldFVzZXJTdWJ0aXRsZXModXNlckRlZi51c2VyKX1cbiAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uSXRlbUNsaWNrLmJpbmQodGhpcywgdXNlckRlZi51aWQpfVxuICAgICAgICAgICAgICAgaW1hZ2VTcmM9e2dldFVzZXJJbWFnZSh1c2VyRGVmLnVzZXIpfVxuICAgICAgICAgICAvPlxuICAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyBpdGVtcyB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vVXNlcnNNZXNzYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZpbHRlci1zdGF0dXMnPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1mcm93bi1vJyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuVVNFUlNfUEFHRS5OT19VU0VSU19GT1VORH08L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgKTtcbn1cblxuY2xhc3MgVXNlcnNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaDogdGhpcy5wcm9wcy5xdWVyeS5zZWFyY2hcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobmV4dFByb3BzLnF1ZXJ5LnNlYXJjaCAhPT0gdGhpcy5zdGF0ZS5zZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2g6IG5leHRQcm9wcy5xdWVyeS5zZWFyY2ggfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTZWFyY2hRdWVyeUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaCB9LCAoKSA9PiB0aGlzLnByb3BzLmNoYW5nZVNlYXJjaFF1ZXJ5KHNlYXJjaCkpO1xuICAgIH07XG5cbiAgICBoYW5kbGVGaWx0ZXJDaGFuZ2UgPSBmaWx0ZXIgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VGaWx0ZXIoZmlsdGVyKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB2aXNpYmxlVXNlcnNBcnIgPSBnZXRWaXNpYmxlVXNlcnModGhpcy5wcm9wcy51c2VycywgdGhpcy5wcm9wcy5xdWVyeS5maWx0ZXIsIHRoaXMuc3RhdGUuc2VhcmNoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlJz5cblxuICAgICAgICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e1RyYW5zbGF0aW9ucy5VU0VSU19QQUdFLlRJVExFfSAvPlxuXG4gICAgICAgICAgICAgICAgeyBjcmVhdGVGaWx0ZXIodGhpcy5zdGF0ZS5zZWFyY2gsIHRoaXMucHJvcHMucXVlcnkuZmlsdGVyLCB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSwgdGhpcy5oYW5kbGVTZWFyY2hRdWVyeUNoYW5nZSwgY291bnRBY2NvcmRpbmdUb0ZpbHRlcnModGhpcy5wcm9wcy51c2VycykpIH1cblxuICAgICAgICAgICAgICAgIHsgXy5pc0VtcHR5KHZpc2libGVVc2Vyc0FycikgPyBjcmVhdGVOb1VzZXJzTWVzc2FnZSgpIDogY3JlYXRlVXNlcnNMaXN0KHZpc2libGVVc2Vyc0FyciwgdGhpcy5wcm9wcy5uYXZUb0VkaXRVc2VyKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVzZXJzUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgcXVlcnk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBuYXZUb0VkaXRVc2VyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNoYW5nZUZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGFuZ2VTZWFyY2hRdWVyeTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJzUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlLmpzeCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2xpc3RJdGVtLnNjc3MnKTtcblxuY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtIHNtYWxsLTEyXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3QtaW1hZ2VcIiBzcmM9e3RoaXMucHJvcHMuaW1hZ2VTcmN9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtdGl0bGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0aXRsZSBsYXJnZS10ZXh0IGhpZGUtZm9yLXByaW50XCI+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcCh0aGlzLnByb3BzLnN1YnRpdGxlcywgKHN1YnRpdGxlLCBrZXkpID0+IDxsYWJlbCBrZXk9eydzdWJ0aXRsZS0nICsga2V5fSBjbGFzc05hbWU9XCJzdWJ0aXRsZSBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5XCI+e3N1YnRpdGxlfTwvbGFiZWw+KX1cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcCh0aGlzLnByb3BzLnN1YnRpdGxlcywgKHN1YnRpdGxlLCBrZXkpID0+IDxsYWJlbCBrZXk9eydzdWJ0aXRsZS1sYXJnZS0nICsga2V5fSBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpbmxpbmUgaGlkZS1mb3Itc21hbGwtb25seVwiPntzdWJ0aXRsZX08L2xhYmVsPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdWJ0aXRsZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBpbWFnZVNyYzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0SXRlbTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9saXN0SXRlbS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2xpc3RJdGVtLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2xpc3RJdGVtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9saXN0SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7IH1cXG4gIC5saXN0LWl0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxcbiAgLmxpc3QtaXRlbSAubGlzdC1pbWFnZSB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMTAsIDEwLCAxMCwgMC4xKTsgfVxcbiAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMge1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIC50aXRsZS5sYXJnZS10ZXh0IHtcXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIC5zdWJ0aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAwLjgwcmVtOyB9XFxuICAgICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnN1YnRpdGxlLmlubGluZSwgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnN1YnRpdGxlLmlubGluZS5zaG93LWZvci1wcmludCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvcGFnZVRpdGxlLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgbmF2aWdhdGVCYWNrOiAoKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZUJhY2soKSlcbiAgfTtcbn1cblxuY2xhc3MgUGFnZVRpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS10aXRsZSc+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3RpdGxlJz57dGhpcy5wcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmFjay1idG4nIGtleT0nYmFjay1idG4nIG9uQ2xpY2s9e3RoaXMucHJvcHMubmF2aWdhdGVCYWNrfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWFycm93LWxlZnQnIGFyaWEtaGlkZGVuPSd0cnVlJyAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFnZVRpdGxlLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlQmFjazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYWdlVGl0bGUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcGFnZVRpdGxlLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFnZVRpdGxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFnZVRpdGxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9wYWdlVGl0bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3BhZ2VUaXRsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlLXRpdGxlIHtcXG4gIGJhY2tncm91bmQ6ICNFRjUzNTA7XFxuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI0QzMkYyRjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgaGVpZ2h0OiAzLjNlbTtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnBhZ2UtdGl0bGUgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGZsZXg6IDE7IH1cXG4gIC5wYWdlLXRpdGxlIC5iYWNrLWJ0biB7XFxuICAgIHdpZHRoOiAyMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9wYWdlVGl0bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcblxuY29uc3QgUGFnZVRpdGxlID0gcmVxdWlyZSgnLi9wYWdlVGl0bGUnKTtcbmNvbnN0IExpc3RJdGVtID0gcmVxdWlyZSgnLi9saXN0SXRlbScpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvZ2FtZXNQYWdlLnNjc3MnKTtcblxuY29uc3QgVEFCUyA9IHtcbiAgICBBTEw6ICdhbGwnLFxuICAgIE9QRU46ICdvcGVuJyxcbiAgICBDTE9TRUQ6ICdjbG9zZWQnXG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnYW1lczogc3RhdGUuZXZlbnRzLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgZmlsdGVyOiBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zLmZpbHRlciB8fCBUQUJTLkFMTFxuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZWRpdEdhbWU6IGdhbWVJZCA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5ST1VUSU5HLlBBR0VTLlVQREFURV9HQU1FLCB7IGdhbWVJZCB9KSksXG4gICAgICAgIGNyZWF0ZUdhbWU6ICgpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVBEQVRFX0dBTUUpKSxcbiAgICAgICAgY2hhbmdlRmlsdGVyOiBmaWx0ZXIgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMucmVwbGFjZShudWxsLCB7IGZpbHRlciB9KSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWaXNpYmxlR2FtZXMoZ2FtZXMsIGZpbHRlcikge1xuICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICAgIGNhc2UgVEFCUy5PUEVOOlxuICAgICAgICAgICAgcmV0dXJuIGdldE9wZW5HYW1lcyhnYW1lcyk7XG4gICAgICAgIGNhc2UgVEFCUy5DTE9TRUQ6XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q2xvc2VkR2FtZXMoZ2FtZXMpO1xuICAgIH1cbiAgICByZXR1cm4gZ2FtZXM7XG59XG5cbmZ1bmN0aW9uIGdldE9wZW5HYW1lcyhnYW1lcykge1xuICAgIHJldHVybiBfLm9taXRCeShnYW1lcywgZ2FtZSA9PiBnYW1lLnN0YXR1cyA9PT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLkNMT1NFRCk7XG59XG5cbmZ1bmN0aW9uIGdldENsb3NlZEdhbWVzKGdhbWVzKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KGdhbWVzLCBnYW1lID0+IGdhbWUuc3RhdHVzID09PSBDb25zdGFudHMuR0FNRS5TVEFUVVMuQ0xPU0VEKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2FtZVN1YnRpdGxlcyhnYW1lKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgJ9eq15DXqNeZ15o6ICcgKyBgJHtnYW1lLmRheX0vJHtnYW1lLm1vbnRofS8ke2dhbWUueWVhcn1gLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG4gICAgICAgICfXqdei15Q6ICcgKyAgYCR7Z2FtZS5ob3VyfToke2dhbWUubWludXRlfWAsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1jb25jYXRcbiAgICAgICAgVHJhbnNsYXRpb25zLkdBTUUuU1RBVFVTW2dhbWUuc3RhdHVzXVxuICAgIF07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoZ2FtZXMsIGZpbHRlciwgb25GaWx0ZXJDaGFuZ2UpIHtcbiAgICBmdW5jdGlvbiBvblRhYkNsaWNrKHNlbGVjdGVkRmlsdGVyKSB7XG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlKHNlbGVjdGVkRmlsdGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcmluZyByb3cgZXhwYW5kZWQgY29sbGFwc2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNic+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBhY3RpdmU6IGZpbHRlciA9PT0gVEFCUy5BTEx9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvblRhYkNsaWNrLmJpbmQodGhpcywgVEFCUy5BTEwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVTX1BBR0UuVEFCUy5BTEx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPih7Xy5zaXplKGdhbWVzKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IFRBQlMuT1BFTn0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uVGFiQ2xpY2suYmluZCh0aGlzLCBUQUJTLk9QRU4pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57VHJhbnNsYXRpb25zLkdBTUVTX1BBR0UuVEFCUy5PUEVOfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe18uc2l6ZShnZXRPcGVuR2FtZXMoZ2FtZXMpKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgYWN0aXZlOiBmaWx0ZXIgPT09IFRBQlMuQ0xPU0VEfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25UYWJDbGljay5iaW5kKHRoaXMsIFRBQlMuQ0xPU0VEKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5HQU1FU19QQUdFLlRBQlMuQ0xPU0VEfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe18uc2l6ZShnZXRDbG9zZWRHYW1lcyhnYW1lcykpfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb0dhbWVzTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmaWx0ZXItc3RhdHVzJz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZnJvd24tbycgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPntUcmFuc2xhdGlvbnMuR0FNRVNfUEFHRS5OT19HQU1FU19MQUJFTH08L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGx1c0J1dHRvbihvbkNyZWF0ZUdhbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Zsb2F0LWxlZnQgYWRkLWJ0biBiaWcgaGlkZS1mb3Itc21hbGwtb25seScgb25DbGljaz17b25DcmVhdGVHYW1lfT4rPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxvYXQtbGVmdCBhZGQtYnRuIHNtYWxsIHNob3ctZm9yLXNtYWxsLW9ubHknIG9uQ2xpY2s9e29uQ3JlYXRlR2FtZX0+KzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBHYW1lc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIG9uRmlsdGVyQ2hhbmdlZCA9IGZpbHRlciA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlRmlsdGVyKGZpbHRlcik7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgdmlzaWJsZUdhbWVzID0gZ2V0VmlzaWJsZUdhbWVzKHRoaXMucHJvcHMuZ2FtZXMsIHRoaXMucHJvcHMucXVlcnkuZmlsdGVyKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlIGdhbWVzLXBhZ2UnPlxuXG4gICAgICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17VHJhbnNsYXRpb25zLkdBTUVTX1BBR0UuVElUTEV9IC8+XG5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZVRhYnModGhpcy5wcm9wcy5nYW1lcywgdGhpcy5wcm9wcy5xdWVyeS5maWx0ZXIsIHRoaXMub25GaWx0ZXJDaGFuZ2VkKSB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIF8ubWFwKHZpc2libGVHYW1lcywgKGdhbWUsIGdhbWVJZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17J2dhbWUtJyArIGdhbWVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Q29uc3RhbnRzLlRFQU1TW2dhbWUudHlwZUlkXS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZXM9e2dldEdhbWVTdWJ0aXRsZXMoZ2FtZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e0NvbnN0YW50cy5URUFNU1tnYW1lLnR5cGVJZF0ubG9nbyB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTM4LzEzODc3Ni5zdmcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuZWRpdEdhbWUuYmluZCh0aGlzLCBnYW1lSWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7IHZpc2libGVHYW1lcy5sZW5ndGggPT0gMCA/IGNyZWF0ZU5vR2FtZXNNZXNzYWdlKCkgOiBudWxsIH1cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlUGx1c0J1dHRvbih0aGlzLnByb3BzLmNyZWF0ZUdhbWUpIH1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5HYW1lc1BhZ2UucHJvcFR5cGVzID0ge1xuICAgIGdhbWVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY3JlYXRlR2FtZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlZGl0R2FtZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjaGFuZ2VGaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHYW1lc1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2dhbWVzUGFnZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2dhbWVzUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2dhbWVzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZ2FtZXNQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9nYW1lc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZXMtcGFnZSAuZmlsdGVyaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2dhbWVzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IHJvdXRpbmdBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9yb3V0aW5nQWN0aW9ucycpO1xuXG5jb25zdCBQYWdlVGl0bGUgPSByZXF1aXJlKCcuL3BhZ2VUaXRsZScpO1xuY29uc3QgTGlzdEl0ZW0gPSByZXF1aXJlKCcuL2xpc3RJdGVtJyk7XG5cbmNvbnN0IFRBQlMgPSB7XG4gICAgUElDS1VQOiAncGlja1VwJyxcbiAgICBEUk9QT0ZGOiAnZHJvcE9mZidcbn07XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9ib29raW5nc1BhZ2Uuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib29raW5nczogc3RhdGUuYm9va2luZ3MsXG4gICAgICAgIGdhbWVzOiBzdGF0ZS5ldmVudHMsXG4gICAgICAgIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIGdhbWVJZDogc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcy5nYW1lSWQgfHwgXy5maW5kS2V5KHN0YXRlLmV2ZW50cywge3N0YXR1czogQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX01FTUJFUlN9KSB8fCBfLmZpbmRLZXkoc3RhdGUuZXZlbnRzLCB7c3RhdHVzOiBDb25zdGFudHMuR0FNRS5TVEFUVVMuT1BFTl9GT1JfQUxMfSkgfHwgIF8uZmluZEtleShzdGF0ZS5ldmVudHMsIHtzdGF0dXM6IENvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRUR9KSxcbiAgICAgICAgICAgIGZpbHRlcjogc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcy5maWx0ZXIgfHwgVEFCUy5QSUNLVVBcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGVkaXRCb29raW5nOiAoZ2FtZUlkLCB1aWQpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuVVBEQVRFX0JPT0tJTkcsIHsgZ2FtZUlkLCB1aWQgfSkpLFxuICAgICAgICBjaGFuZ2VGaWx0ZXI6IGZpbHRlciA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5yZXBsYWNlKG51bGwsIHsgZmlsdGVyIH0pKSxcbiAgICAgICAgY2hhbmdlR2FtZUlkOiBnYW1lSWQgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMucmVwbGFjZShudWxsLCB7IGdhbWVJZCB9KSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCb29raW5nVGl0bGUodXNlcikge1xuICAgIHJldHVybiB1c2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXIubGFzdE5hbWU7XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tpbmdQaG9uZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIucGhvbmVQcmVmaXggKyAnLScgKyB1c2VyLnBob25lTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBnZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIHVzZXIpIHtcbiAgICBjb25zdCBzdWJ0aXRsZXMgPSBbXTtcblxuICAgIGlmIChib29raW5nLnBhaWRTZWF0cyA+IDApIHtcbiAgICAgICAgc3VidGl0bGVzLnB1c2goJ9ee16DXldeZ15nXnTogJyArIGJvb2tpbmcucGFpZFNlYXRzKTtcbiAgICB9XG4gICAgaWYgKGJvb2tpbmcuZXh0cmFTZWF0cyA+IDApIHtcbiAgICAgICAgc3VidGl0bGVzLnB1c2goJ9eX15Mg16TXotee15k6ICcgKyBib29raW5nLmV4dHJhU2VhdHMpO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5waWNrVXApIHtcbiAgICAgICAgc3VidGl0bGVzLnB1c2goJ9eU15zXldeaOiAnICsgVHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXSk7XG4gICAgfVxuICAgIGlmIChib29raW5nLmRyb3BPZmYpIHtcbiAgICAgICAgc3VidGl0bGVzLnB1c2goJ9eX15bXldeoOiAnICsgVHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl0pO1xuICAgIH1cblxuICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHN1YnRpdGxlcy5wdXNoKCfXmNec17M6ICcgKyBnZXRCb29raW5nUGhvbmUodXNlcikpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJ0aXRsZXM7XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tpbmdJbWFnZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIucGhvdG9VUkwgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE4OS8xODk5OTEuc3ZnJztcbn1cblxuZnVuY3Rpb24gZ2V0UGlja1VwTWFwKGJvb2tpbmdzKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4oYm9va2luZ3MpXG4gICAgICAgIC5vbWl0QnkoYm9va2luZyA9PiAhKGJvb2tpbmcucGlja1VwKSlcbiAgICAgICAgLnRyYW5zZm9ybSgoYWNjLCBib29raW5nLCB1aWQpID0+IHtcbiAgICAgICAgICAgIGFjY1tib29raW5nLnBpY2tVcF1bdWlkXSA9IGJvb2tpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgfSwgeyB0bHY6IHt9LCBtb2RpaW46IHt9IH0pXG4gICAgICAgIC52YWx1ZSgpO1xufVxuXG5mdW5jdGlvbiBnZXREcm9wT2ZmTWFwKGJvb2tpbmdzKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4oYm9va2luZ3MpXG4gICAgICAgIC5vbWl0QnkoYm9va2luZyA9PiAhKGJvb2tpbmcuZHJvcE9mZikpXG4gICAgICAgIC50cmFuc2Zvcm0oKGFjYywgYm9va2luZywgdWlkKSA9PiB7XG4gICAgICAgICAgICBhY2NbYm9va2luZy5kcm9wT2ZmXVt1aWRdID0gYm9va2luZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICB9LCB7IHRsdjoge30sIG1vZGlpbjoge30gfSlcbiAgICAgICAgLnZhbHVlKCk7XG59XG5cbmZ1bmN0aW9uIGdldFZpc2libGVCb29raW5ncyhib29raW5ncywgZ2FtZUlkKSB7XG4gICAgY29uc3QgYm9va2luZ0ZvckV2ZW50TWFwID0gXy5jaGFpbihib29raW5ncylcbiAgICAgICAgLm1hcFZhbHVlcyh1c2VyQm9va2luZ3MgPT4gdXNlckJvb2tpbmdzW2dhbWVJZF0pXG4gICAgICAgIC5vbWl0QnkoXy5pc1VuZGVmaW5lZClcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwaWNrVXA6IGdldFBpY2tVcE1hcChib29raW5nRm9yRXZlbnRNYXApLFxuICAgICAgICBkcm9wT2ZmOiBnZXREcm9wT2ZmTWFwKGJvb2tpbmdGb3JFdmVudE1hcClcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb3VudFBpY2t1cHModmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgY29uc3QgdGx2UGlja1Vwc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAudGx2KVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IHRsdlBpY2tVcHNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHYpXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpblBpY2tVcHNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLm1vZGlpbilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5QaWNrVXBzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluKVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4gdGx2UGlja1Vwc1BhaWQgKyB0bHZQaWNrVXBzRXh0cmEgKyBtb2RpaW5QaWNrVXBzUGFpZCArIG1vZGlpblBpY2tVcHNFeHRyYTtcbn1cblxuZnVuY3Rpb24gY291bnREcm9wT2Zmcyh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICBjb25zdCB0bHZEcm9wT2Zmc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCB0bHZEcm9wT2Zmc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHYpXG4gICAgICAgIC52YWx1ZXMoKVxuICAgICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpbkRyb3BPZmZzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluKVxuICAgICAgICAudmFsdWVzKClcbiAgICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpbkRyb3BPZmZzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbilcbiAgICAgICAgLnZhbHVlcygpXG4gICAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAgIC52YWx1ZSgpO1xuXG4gICAgcmV0dXJuIHRsdkRyb3BPZmZzUGFpZCArIHRsdkRyb3BPZmZzRXh0cmEgKyBtb2RpaW5Ecm9wT2Zmc1BhaWQgKyBtb2RpaW5Ecm9wT2Zmc0V4dHJhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYWdlVGl0bGUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGUtZm9yLXByaW50Jz5cbiAgICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e1RyYW5zbGF0aW9ucy5CT09LSU5HU19QQUdFLlRJVExFfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaWx0ZXJTZWN0aW9uKGZpbHRlciwgZ2FtZUlkLCBvbkZpbHRlckNoYW5nZSwgb25HYW1lSWRDaGFuZ2UsIHZpc2libGVCb29raW5ncywgZ2FtZXMpIHtcblxuICAgIGZ1bmN0aW9uIG9uVGFiQ2xpY2sodGFiKSB7XG4gICAgICAgIG9uRmlsdGVyQ2hhbmdlKHRhYik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TZWxlY3RDaGFuZ2UoZSkge1xuICAgICAgICBvbkdhbWVJZENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlcmluZyByb3cgZXhwYW5kZWQgY29sbGFwc2UgaGlkZS1mb3ItcHJpbnQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbiBzbWFsbC0xMiBsYXJnZS02Jz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdtZW51Jz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7YWN0aXZlOiBmaWx0ZXIgPT09IFRBQlMuUElDS1VQfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25UYWJDbGljay5iaW5kKHRoaXMsIFRBQlMuUElDS1VQKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5CT09LSU5HU19QQUdFLlRBQlMuUElDS1VQfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4oe2NvdW50UGlja3Vwcyh2aXNpYmxlQm9va2luZ3MpfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXMoe2FjdGl2ZTogZmlsdGVyID09PSBUQUJTLkRST1BPRkZ9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvblRhYkNsaWNrLmJpbmQodGhpcywgVEFCUy5EUk9QT0ZGKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e1RyYW5zbGF0aW9ucy5CT09LSU5HU19QQUdFLlRBQlMuRFJPUE9GRn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+KHtjb3VudERyb3BPZmZzKHZpc2libGVCb29raW5ncyl9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uIHNtYWxsLTEyIGxhcmdlLTYnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWFyY2gnPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtnYW1lSWR9IG9uQ2hhbmdlPXtvblNlbGVjdENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5tYXAoZ2FtZXMsIChnYW1lLCBnYW1lSWQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXsnZ2FtZS0nICsgZ2FtZUlkfSB2YWx1ZT17Z2FtZUlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnYW1lLmRheX0ve2dhbWUubW9udGh9L3tnYW1lLnllYXJ9IC0ge0NvbnN0YW50cy5URUFNU1tnYW1lLnR5cGVJZF0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9va2luZ1RhYmxlRm9yUHJpbnQodXNlcnMsIHZpc2libGVCb29raW5ncywgdGx2Qm9va2luZ3MsIG1vZGlpbkJvb2tpbmdzLCBpc1BpY2tVcCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVRpdGxlUm93KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT0ndGl0bGUtbGFiZWwnPlxuICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPSc2Jz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2lzUGlja1VwID8gJ9eU15zXldeaJyA6ICfXl9eW15XXqCd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gKHtpc1BpY2tVcCA/IGNvdW50UGlja3Vwcyh2aXNpYmxlQm9va2luZ3MpIDogY291bnREcm9wT2Zmcyh2aXNpYmxlQm9va2luZ3MpfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVExWQm9va2luZ3NUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9J3RsdlBpY2tVcCc+XG4gICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI2XCIgY2xhc3NOYW1lPVwidGFibGUtc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPteq15wg15DXkdeZ15E8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVExWQm9va2luZ3NSb3dzKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXy5tYXAodGx2Qm9va2luZ3MsIChib29raW5nLCB1aWQpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXsndGx2LWJvb2tpbmctcm93LScgKyB1aWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2dldEJvb2tpbmdUaXRsZSh1c2Vyc1t1aWRdKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2dldEJvb2tpbmdQaG9uZSh1c2Vyc1t1aWRdKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2Jvb2tpbmcucGFpZFNlYXRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Ym9va2luZy5leHRyYVNlYXRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57VHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kaWluQm9va2luZ3NUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ciBrZXk9J21vZGlpblBpY2tVcCc+XG4gICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI2XCIgY2xhc3NOYW1lPSd0YWJsZS1zdWInPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7XnteV15PXmdei15nXnzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2RpaW5Cb29raW5nc1Jvd3MoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5Cb29raW5ncywgKGJvb2tpbmcsIHVpZCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9eydtb2RpaW4tYm9va2luZy1yb3ctJyArIHVpZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Qm9va2luZ1RpdGxlKHVzZXJzW3VpZF0pfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Z2V0Qm9va2luZ1Bob25lKHVzZXJzW3VpZF0pfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57Ym9va2luZy5wYWlkU2VhdHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntib29raW5nLmV4dHJhU2VhdHN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntUcmFuc2xhdGlvbnMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57VHJhbnNsYXRpb25zLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl19PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgeyBfLnNpemUobW9kaWluQm9va2luZ3MpICE9PSAwIHx8IF8uc2l6ZSh0bHZCb29raW5ncykgIT09IDAgPyBjcmVhdGVUaXRsZVJvdygpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+16nXnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7XmNec16TXldefPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPtee16DXldeZ15nXnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7Xkdeq16nXnNeV1508L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+16rXl9eg16og16LXnNeZ15Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+16rXl9eg16og15nXqNeZ15PXlDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2Qm9va2luZ3MpID4gMCA/IGNyZWF0ZVRMVkJvb2tpbmdzVGl0bGUoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKHRsdkJvb2tpbmdzKSA+IDAgPyBjcmVhdGVUTFZCb29raW5nc1Jvd3MoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKG1vZGlpbkJvb2tpbmdzKSA+IDAgPyBjcmVhdGVNb2RpaW5Cb29raW5nc1RpdGxlKCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IF8uc2l6ZShtb2RpaW5Cb29raW5ncykgPiAwID8gY3JlYXRlTW9kaWluQm9va2luZ3NSb3dzKCkgOiBudWxsIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGlja1Vwc0xpc3QodmlzaWJsZUJvb2tpbmdzLCBvbkJvb2tpbmdDbGljaywgdXNlcnMpIHtcbiAgICBjb25zdCB0bHZQaWNrVXAgPSB2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdjtcbiAgICBjb25zdCBtb2RpaW5QaWNrVXAgPSB2aXNpYmxlQm9va2luZ3MucGlja1VwLm1vZGlpbjtcblxuICAgIGZ1bmN0aW9uIG9uSXRlbUNsaWNrKHVpZCkge1xuICAgICAgICBvbkJvb2tpbmdDbGljayh1aWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHRsdlBpY2tVcHNJdGVtcyA9IF8ubWFwKHRsdlBpY2tVcCwgKGJvb2tpbmcsIHVpZCkgPT4gKFxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgIGtleT17J3BpY2t1cC10bHYtJyArIHVpZH1cbiAgICAgICAgICAgIHRpdGxlPXtnZXRCb29raW5nVGl0bGUodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBzdWJ0aXRsZXM9e2dldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgdXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBpbWFnZVNyYz17Z2V0Qm9va2luZ0ltYWdlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgb25DbGljaz17b25JdGVtQ2xpY2suYmluZCh0aGlzLCB1aWQpfVxuICAgICAgICAvPlxuICAgICkpO1xuXG4gICAgY29uc3QgbWlkaWluUGlja1Vwc0l0ZW1zID0gXy5tYXAobW9kaWluUGlja1VwLCAoYm9va2luZywgdWlkKSA9PiAoXG4gICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAga2V5PXsncGlja3VwLW1pZGlpbi0nICsgdWlkfVxuICAgICAgICAgICAgdGl0bGU9e2dldEJvb2tpbmdUaXRsZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIHN1YnRpdGxlcz17Z2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCB1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIGltYWdlU3JjPXtnZXRCb29raW5nSW1hZ2UodXNlcnNbdWlkXSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkl0ZW1DbGljay5iaW5kKHRoaXMsIHVpZCl9XG4gICAgICAgIC8+XG4gICAgKSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUbHZQaWNrdXBzTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg2Pteq15wg15DXkdeZ15E8L2g2PlxuICAgICAgICAgICAgICAgIHsgdGx2UGlja1Vwc0l0ZW1zIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9kaWluUGlja3Vwc0xpc3QoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNj7XnteV15PXmdei15nXnzwvaDY+XG4gICAgICAgICAgICAgICAgeyBtaWRpaW5QaWNrVXBzSXRlbXMgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BpY2stdXAtY29udGFpbmVyIHJvdyBoaWRlLWZvci1wcmludCcga2V5PSdwaWNrLXVwLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2UGlja1VwKSAhPT0gMCB8fCBfLnNpemUobW9kaWluUGlja1VwKSAhPT0gMCA/IDxoNT7XlNec15XXmjwvaDU+IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2UGlja1VwKSA+IDAgPyBjcmVhdGVUbHZQaWNrdXBzTGlzdCgpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUobW9kaWluUGlja1VwKSA+IDAgPyBjcmVhdGVNb2RpaW5QaWNrdXBzTGlzdCgpIDogbnVsbCB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BpY2tVcC10YWJsZSBzaG93LWZvci1wcmludCcga2V5PSdwaWNrVXAtdGFibGUnPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQm9va2luZ1RhYmxlRm9yUHJpbnQodXNlcnMsIHZpc2libGVCb29raW5ncywgdGx2UGlja1VwLCBtb2RpaW5QaWNrVXAsIHRydWUpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcm9wT2ZmTGlzdCh2aXNpYmxlQm9va2luZ3MsIG9uQm9va2luZ0NsaWNrLCB1c2Vycykge1xuICAgIGNvbnN0IHRsdkRyb3BPZmYgPSB2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHY7XG4gICAgY29uc3QgbW9kaWluRHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbjtcblxuICAgIGZ1bmN0aW9uIG9uSXRlbUNsaWNrKHVpZCkge1xuICAgICAgICBvbkJvb2tpbmdDbGljayh1aWQpO1xuICAgIH1cblxuICAgIGNvbnN0IHRsdkRyb3BPZmZJdGVtcyA9IF8ubWFwKHRsdkRyb3BPZmYsIChib29raW5nLCB1aWQpID0+IChcbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICBrZXk9eydwaWNrdXAtdGx2LScgKyB1aWR9XG4gICAgICAgICAgICB0aXRsZT17Z2V0Qm9va2luZ1RpdGxlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgc3VidGl0bGVzPXtnZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgaW1hZ2VTcmM9e2dldEJvb2tpbmdJbWFnZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uSXRlbUNsaWNrLmJpbmQodGhpcywgdWlkKX1cbiAgICAgICAgLz5cbiAgICApKTtcblxuICAgIGNvbnN0IG1pZGlpbkRyb3BPZmZJdGVtcyA9IF8ubWFwKG1vZGlpbkRyb3BPZmYsIChib29raW5nLCB1aWQpID0+IChcbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICBrZXk9eydwaWNrdXAtbWlkaWluLScgKyB1aWR9XG4gICAgICAgICAgICB0aXRsZT17Z2V0Qm9va2luZ1RpdGxlKHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgc3VidGl0bGVzPXtnZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIHVzZXJzW3VpZF0pfVxuICAgICAgICAgICAgaW1hZ2VTcmM9e2dldEJvb2tpbmdJbWFnZSh1c2Vyc1t1aWRdKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uSXRlbUNsaWNrLmJpbmQodGhpcywgdWlkKX1cbiAgICAgICAgLz5cbiAgICApKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRsdkRyb3BPZmZMaXN0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDY+16rXnCDXkNeR15nXkTwvaDY+XG4gICAgICAgICAgICAgICAgeyB0bHZEcm9wT2ZmSXRlbXMgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2RpaW5Ecm9wT2ZmTGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg2Ptee15XXk9eZ16LXmdefPC9oNj5cbiAgICAgICAgICAgICAgICB7IG1pZGlpbkRyb3BPZmZJdGVtcyB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcC1vZmYtY29udGFpbmVyIHJvdyBoaWRlLWZvci1wcmludCcga2V5PSdkcm9wLW9mZi1jb250YWluZXInPlxuICAgICAgICAgICAgICAgIHsgXy5zaXplKHRsdkRyb3BPZmYpICE9PSAwIHx8IF8uc2l6ZShtb2RpaW5Ecm9wT2ZmKSAhPT0gMCA/IDxoNT7Xl9eW15XXqDwvaDU+IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBfLnNpemUodGx2RHJvcE9mZikgPiAwID8gY3JlYXRlVGx2RHJvcE9mZkxpc3QoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgXy5zaXplKG1vZGlpbkRyb3BPZmYpID4gMCA/IGNyZWF0ZU1vZGlpbkRyb3BPZmZMaXN0KCkgOiBudWxsIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3BPZmYtdGFibGUgc2hvdy1mb3ItcHJpbnQnIGtleT0nZHJvcE9mZi10YWJsZSc+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVCb29raW5nVGFibGVGb3JQcmludCh1c2VycywgdmlzaWJsZUJvb2tpbmdzLCB0bHZEcm9wT2ZmLCBtb2RpaW5Ecm9wT2ZmLCBmYWxzZSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEJvb2tpbmdzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgb25GaWx0ZXJDaGFuZ2UgPSBmaWx0ZXIgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmNoYW5nZUZpbHRlcihmaWx0ZXIpO1xuICAgIH07XG5cbiAgICBvbkdhbWVJZENoYW5nZSA9IGdhbWVJZCA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdlR2FtZUlkKGdhbWVJZCk7XG4gICAgfTtcblxuICAgIG9uQm9va2luZ0NsaWNrID0gdWlkID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5lZGl0Qm9va2luZyh0aGlzLnByb3BzLnF1ZXJ5LmdhbWVJZCwgdWlkKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB2aXNpYmxlQm9va2luZ3MgPSBnZXRWaXNpYmxlQm9va2luZ3ModGhpcy5wcm9wcy5ib29raW5ncywgdGhpcy5wcm9wcy5xdWVyeS5nYW1lSWQpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J9a/c21hbGwtY2VudGVyZWQgZGFzaGJvYXJkLXBhZ2UgYm9va2luZ3MtcGFnZSc+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVQYWdlVGl0bGUoKSB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVGaWx0ZXJTZWN0aW9uKHRoaXMucHJvcHMucXVlcnkuZmlsdGVyLCB0aGlzLnByb3BzLnF1ZXJ5LmdhbWVJZCwgdGhpcy5vbkZpbHRlckNoYW5nZSwgdGhpcy5vbkdhbWVJZENoYW5nZSwgdmlzaWJsZUJvb2tpbmdzLCB0aGlzLnByb3BzLmdhbWVzKSB9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnF1ZXJ5LmZpbHRlciA9PT0gVEFCUy5QSUNLVVAgPyBjcmVhdGVQaWNrVXBzTGlzdCh2aXNpYmxlQm9va2luZ3MsIHRoaXMub25Cb29raW5nQ2xpY2ssIHRoaXMucHJvcHMudXNlcnMpIDogY3JlYXRlRHJvcE9mZkxpc3QodmlzaWJsZUJvb2tpbmdzLCB0aGlzLm9uQm9va2luZ0NsaWNrLCB0aGlzLnByb3BzLnVzZXJzKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkJvb2tpbmdzUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgYm9va2luZ3M6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBnYW1lczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHVzZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgcXVlcnk6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBlZGl0Qm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1cmllZCxcbiAgICBjaGFuZ2VGaWx0ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdXJpZWQsXG4gICAgY2hhbmdlR2FtZUlkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVyaWVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQm9va2luZ3NQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ib29raW5nc1BhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ib29raW5nc1BhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2tpbmdzUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvYm9va2luZ3NQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvb2tpbmdzLXBhZ2UgaDUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiAjQ0ZEOERDO1xcbiAgY29sb3I6ICMzNzQ3NEY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLmJvb2tpbmdzLXBhZ2UgaDYge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5ib29raW5ncy1wYWdlIC50YWJsZS1zdWIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIyMjIyMjsgfVxcblxcbi5ib29raW5ncy1wYWdlIHRhYmxlIHRib2R5LCAuYm9va2luZ3MtcGFnZSB0YWJsZSB0Zm9vdCwgLmJvb2tpbmdzLXBhZ2UgdGFibGUgdGhlYWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvYm9va2luZ3NQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmV1ZHggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcbmNvbnN0IFRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCBkaXN0cmlidXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9kaXN0cmlidXRpb25BY3Rpb25zJyk7XG5cbmNvbnN0IFBhZ2VUaXRsZSA9IHJlcXVpcmUoJy4vcGFnZVRpdGxlJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9kaXN0cmlidXRpb25QYWdlLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICAgICAgICBnYW1lczogc3RhdGUuZXZlbnRzLFxuICAgICAgICBib29raW5nczogc3RhdGUuYm9va2luZ3NcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZW5kVGVtcGxhdGVFbWFpbDogKHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMpID0+IGRpc3BhdGNoKGRpc3RyaWJ1dGlvbkFjdGlvbnMuc2VuZFRlbXBsYXRlRW1haWwocmVjaXBpZW50cywgdGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucykpLFxuICAgICAgICBzZW5kQ3VzdG9tRW1haWw6IChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSA9PiBkaXNwYXRjaChkaXN0cmlidXRpb25BY3Rpb25zLnNlbmRDdXN0b21FbWFpbChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSksXG4gICAgICAgIHNlbmRTTVM6IChyZWNpcGllbnRzLCBtZXNzYWdlKSA9PiBkaXNwYXRjaChkaXN0cmlidXRpb25BY3Rpb25zLnNlbmRTTVMocmVjaXBpZW50cywgbWVzc2FnZSkpLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShnYW1lcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpc3RyaWJ1dGlvbk1ldGhvZDogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5FTUFJTCxcbiAgICAgICAgcmVjaXBpZW50c1R5cGU6IENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UU19UWVBFUy5NRU1CRVJTX09OTFksXG4gICAgICAgIGRpc3RyaWJ1dGlvblR5cGU6IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLlRFTVBMQVRFLFxuICAgICAgICB0ZW1wbGF0ZUlkOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRFTVBMQVRFUy5FVkVOVF9PUEVOX0ZPUl9NRU1CRVJTLFxuICAgICAgICBnYW1lSWQ6IF8ubGFzdChfLmtleXMoZ2V0T3BlbkdhbWVzKGdhbWVzKSkpLFxuICAgICAgICBzdWJqZWN0OiAnJyxcbiAgICAgICAgY29udGVudDogJydcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRNZW1iZXJzVXNlcnNPbmx5KHVzZXJzKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KHVzZXJzLCB1c2VyID0+IHVzZXIuc2Vhc29uVGlja2V0cyAmJiB1c2VyLnNlYXNvblRpY2tldHMgPiAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9va2VkVXNlcnNPbmx5KHVzZXJzLCBib29raW5ncywgZ2FtZUlkKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KHVzZXJzLCAodXNlciwgdWlkKSA9PiBfLmhhcyhib29raW5nc1t1aWRdLCBnYW1lSWQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBnYW1lSWQpIHtcbiAgICBsZXQgcmVjaXBpZW50c1VzZXJzID0gXy5waWNrQnkodXNlcnMsIHVzZXIgPT4gdXNlci5zdWJzY3JpYmVNYWlsKTtcblxuICAgIHN3aXRjaCAocmVjaXBpZW50c1R5cGUpIHtcbiAgICAgICAgY2FzZSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuTUVNQkVSU19PTkxZOlxuICAgICAgICAgICAgcmVjaXBpZW50c1VzZXJzID0gZ2V0TWVtYmVyc1VzZXJzT25seShyZWNpcGllbnRzVXNlcnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTX1RZUEVTLkJPT0tFRF9UT19FVkVOVDpcbiAgICAgICAgICAgIHJlY2lwaWVudHNVc2VycyA9IGdldEJvb2tlZFVzZXJzT25seShyZWNpcGllbnRzVXNlcnMsIGJvb2tpbmdzLCBnYW1lSWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY2lwaWVudHNVc2Vycztcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcnNFbWFpbHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZ2FtZUlkKSB7XG4gICAgY29uc3QgcmVjaXBpZW50cyA9IGdldFJlY2lwaWVudHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZ2FtZUlkKTtcbiAgICByZXR1cm4gXy5tYXAocmVjaXBpZW50cywgdXNlciA9PiB1c2VyLmVtYWlsKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRTdWJzdGl0dXRpb25zKGdhbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAnLURFUEFSVFVSRS0nOiBgJHtnYW1lLmhvdXJ9OiR7Z2FtZS5taW51dGV9YCxcbiAgICAgICAgJy1EQVRFLSc6IGAke2dhbWUuZGF5fS8ke2dhbWUubW9udGh9LyR7Z2FtZS55ZWFyfWAsXG4gICAgICAgICctTkFNRS0nOiBDb25zdGFudHMuVEVBTVNbZ2FtZS50eXBlSWRdLmxhYmVsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlQ3VzdG9tTWFpbENvbnRlbnRGb3JTZW5kKGNvbnRlbnQpIHtcbiAgICByZXR1cm4gJzxwIGRpcj1cXCdydGxcXCc+JyArIGNvbnRlbnQucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICc8YnIvPicpICsgJzwvcD4nO1xufVxuXG5mdW5jdGlvbiBnZXRVc2Vyc1Bob25lTnVtYmVycyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBnYW1lSWQpIHtcbiAgICBjb25zdCByZWNpcGllbnRzID0gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBnYW1lSWQpO1xuICAgIHJldHVybiBfLm1hcChyZWNpcGllbnRzLCB1c2VyID0+IHVzZXIucGhvbmVQcmVmaXggKyB1c2VyLnBob25lTnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzdHJpYnV0aW9uTWV0aG9kSW5wdXQoZGlzdHJpYnV0aW9uTWV0aG9kLCBvbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkIG1vcmUtc3BhY2UnPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX01FVEhPRC5USVRMRX1cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtkaXN0cmlidXRpb25NZXRob2R9IG9uQ2hhbmdlPXtvbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuRU1BSUx9PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX01FVEhPRC5FTUFJTH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5TTVN9PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX01FVEhPRC5TTVN9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWNpcGllbnRzVHlwZUlucHV0KHJlY2lwaWVudHNUeXBlLCBvblJlY2lwaWVudHNUeXBlQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuUkVDSVBJRU5UU19UWVBFUy5USVRMRX1cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtyZWNpcGllbnRzVHlwZX0gb25DaGFuZ2U9e29uUmVjaXBpZW50c1R5cGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuQUxMfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuUkVDSVBJRU5UU19UWVBFUy5BTEx9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuTUVNQkVSU19PTkxZfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuUkVDSVBJRU5UU19UWVBFUy5NRU1CRVJTX09OTFl9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFNfVFlQRVMuQk9PS0VEX1RPX0VWRU5UfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuUkVDSVBJRU5UU19UWVBFUy5CT09LRURfVE9fRVZFTlR9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzdHJpYnV0aW9uVHlwZUlucHV0KGRpc3RyaWJ1dGlvblR5cGUsIG9uRGlzdHJpYnV0aW9uVHlwZUNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyBrZXk9XCJkaXN0cmlidXRpb24tZGlzdHJpYnV0aW9uVHlwZS1pbnB1dFwiPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuRElTVFJJQlVUSU9OX1RZUEVTLlRJVExFfVxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2Rpc3RyaWJ1dGlvblR5cGV9IG9uQ2hhbmdlPXtvbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9UWVBFUy5URU1QTEFURX0+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5ESVNUUklCVVRJT05fVFlQRVMuVEVNUExBVEV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLkNVU1RPTX0+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5ESVNUUklCVVRJT05fVFlQRVMuQ1VTVE9NfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVTZWxlY3Rpb24odGVtcGxhdGVJZCwgb25UZW1wbGF0ZUlkQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnIGtleT0nZGlzdHJpYnV0aW9uLXRlbXBsYXRlLXNlbGVjdGlvbic+XG4gICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5URU1QTEFURVMuVElUTEV9XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGVtcGxhdGVJZH0gb25DaGFuZ2U9e29uVGVtcGxhdGVJZENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uVEVNUExBVEVTLkVWRU5UX09QRU5fRk9SX01FTUJFUlN9PntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuVEVNUExBVEVTLkVWRU5UX09QRU5fRk9SX01FTUJFUlN9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5ESVNUUklCVVRJT04uVEVNUExBVEVTLkVWRU5UX09QRU5fRk9SX0FMTH0+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5URU1QTEFURVMuRVZFTlRfT1BFTl9GT1JfQUxMfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuRElTVFJJQlVUSU9OLlRFTVBMQVRFUy5DSEFOR0VfRVZFTlRfREVUQUlMU30+e1RyYW5zbGF0aW9ucy5ESVNUUklCVVRJT05fUEFHRS5URU1QTEFURVMuQ0hBTkdFX0VWRU5UX0RFVEFJTFN9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lc1NlbGVjdGlvbihnYW1lcywgZ2FtZUlkLCBvbkdhbWVDaGFuZ2UpIHtcbiAgICBjb25zdCBvcHRpb25zID0gXy5tYXAoZ2FtZXMsIChnYW1lLCBnYW1lSWQpID0+IDxvcHRpb24ga2V5PXsnZ2FtZS0nICsgZ2FtZUlkfSB2YWx1ZT17Z2FtZUlkfT57Q29uc3RhbnRzLlRFQU1TW2dhbWUudHlwZUlkXS5sYWJlbH08L29wdGlvbj4pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnIGtleT1cImRpc3RyaWJ1dGlvbi1nYW1lLXNlbGVjdGlvblwiPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuR0FNRVMuVElUTEV9XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Z2FtZUlkfSBvbkNoYW5nZT17b25HYW1lQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgeyBvcHRpb25zIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldE9wZW5HYW1lcyhnYW1lcykge1xuICAgIHJldHVybiBfLnBpY2tCeShnYW1lcywgZ2FtZSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lLnN0YXR1cyA9PT0gQ29uc3RhbnRzLkdBTUUuU1RBVFVTLk9QRU5fRk9SX01FTUJFUlMgfHwgZ2FtZS5zdGF0dXMgPT09IENvbnN0YW50cy5HQU1FLlNUQVRVUy5PUEVOX0ZPUl9BTEw7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbVRpdGxlKHN1YmplY3QsIG9uU3ViamVjdENoYW5nZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtY2VudGVyZWQgbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucycga2V5PSdkaXN0cmlidXRpb24tY3VzdG9tVGl0bGUnPlxuICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OX1BBR0UuQ1VTVE9NLlRJVExFLlRJVExFfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3N1YmplY3R9IG9uQ2hhbmdlPXtvblN1YmplY3RDaGFuZ2VkfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUNvbnRlbnQoY29udGVudCwgb25Db250ZW50Q2hhbmdlZCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC1jZW50ZXJlZCBtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zJyBrZXk9J2Rpc3RyaWJ1dGlvbi1jdXN0b21Db250ZW50Jz5cbiAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLkNVU1RPTS5DT05URU5ULlRJVExFfTwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjEwXCIgdmFsdWU9e2NvbnRlbnR9IG9uQ2hhbmdlPXtvbkNvbnRlbnRDaGFuZ2VkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtaXRCdXR0b24ob25TdWJtaXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLWdyb3VwIHN0YWNrZWQgc21hbGwtY2VudGVyZWQgbGFyZ2UtNiBzbWFsbC04IG1vcmUtc3BhY2UnPlxuICAgICAgICAgICAgPGEgb25DbGljaz17b25TdWJtaXR9IGNsYXNzTmFtZT0nYnV0dG9uIHN1Y2Nlc3MnPlxuICAgICAgICAgICAgICAgIDxzcGFuPtep15zXlzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXBhcGVyLXBsYW5lJyBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBzaG91bGRTaG93RGlzdHJpYnV0aW9uVHlwZUlucHV0KGRpc3RyaWJ1dGlvbk1ldGhvZCkge1xuICAgIHJldHVybiBkaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuRU1BSUw7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFNob3dUZW1wbGF0ZVNlbGVjdGlvbihkaXN0cmlidXRpb25NZXRob2QsIGRpc3RyaWJ1dGlvblR5cGUpIHtcbiAgICByZXR1cm4gc2hvdWxkU2hvd0Rpc3RyaWJ1dGlvblR5cGVJbnB1dChkaXN0cmlidXRpb25NZXRob2QpICYmIGRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLlRFTVBMQVRFO1xufVxuXG5mdW5jdGlvbiBzaG91bGRDcmVhdGVDdXN0b21UaXRsZShkaXN0cmlidXRpb25NZXRob2QsIGRpc3RyaWJ1dGlvblR5cGUpIHtcbiAgICByZXR1cm4gZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLkVNQUlMICYmXG4gICAgICAgIGRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX1RZUEVTLkNVU1RPTTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkU2hvd0N1c3RvbUNvbnRlbnQoZGlzdHJpYnV0aW9uTWV0aG9kLCBkaXN0cmlidXRpb25UeXBlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIGRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fTUVUSE9EUy5FTUFJTCAmJlxuICAgICAgICAgICAgZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fVFlQRVMuQ1VTVE9NXG4gICAgICAgICkgfHwgZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLkRJU1RSSUJVVElPTl9NRVRIT0RTLlNNUztcbn1cblxuY2xhc3MgRGlzdHJpYnV0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUodGhpcy5wcm9wcy5nYW1lcyk7XG4gICAgfVxuXG4gICAgb25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXN0cmlidXRpb25NZXRob2Q6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvblJlY2lwaWVudHNUeXBlQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVjaXBpZW50c1R5cGU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXN0cmlidXRpb25UeXBlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25UZW1wbGF0ZUlkQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGVtcGxhdGVJZDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uR2FtZUlkQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZ2FtZUlkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25TdWJqZWN0Q2hhbmdlZCA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1YmplY3Q6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBvbkNvbnRlbnRDaGFuZ2VkID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29udGVudDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uRElTVFJJQlVUSU9OX01FVEhPRFMuRU1BSUwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRVc2Vyc0VtYWlscyh0aGlzLnByb3BzLnVzZXJzLCB0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLCB0aGlzLnByb3BzLmJvb2tpbmdzLCB0aGlzLnN0YXRlLmdhbWVJZCk7XG4gICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHJlY2lwaWVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5ESVNUUklCVVRJT05fVFlQRVMuVEVNUExBVEUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gZ2V0RXZlbnRTdWJzdGl0dXRpb25zKHRoaXMucHJvcHMuZ2FtZXNbdGhpcy5zdGF0ZS5nYW1lSWRdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbmRUZW1wbGF0ZUVtYWlsKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUudGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZEN1c3RvbUVtYWlsKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUuc3ViamVjdCwgcHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCh0aGlzLnN0YXRlLmNvbnRlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRVc2Vyc1Bob25lTnVtYmVycyh0aGlzLnByb3BzLnVzZXJzLCB0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLCB0aGlzLnByb3BzLmJvb2tpbmdzLCB0aGlzLnN0YXRlLmdhbWVJZCk7XG4gICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHJlY2lwaWVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZW5kU01TKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUuY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKGdldEluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLmdhbWVzKSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXNoYm9hcmQtcGFnZSBkaXN0cmlidXRpb24tcGFnZSc+XG4gICAgICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17VHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTl9QQUdFLlRJVExFfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC0xMSBzbWFsbC1jZW50ZXJlZCc+XG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlRGlzdHJpYnV0aW9uTWV0aG9kSW5wdXQodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsIHRoaXMub25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVSZWNpcGllbnRzVHlwZUlucHV0KHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsIHRoaXMub25SZWNpcGllbnRzVHlwZUNoYW5nZSkgfVxuICAgICAgICAgICAgICAgICAgICB7IHNob3VsZFNob3dEaXN0cmlidXRpb25UeXBlSW5wdXQodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QpID8gY3JlYXRlRGlzdHJpYnV0aW9uVHlwZUlucHV0KHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSwgdGhpcy5vbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2UpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2hvdWxkU2hvd1RlbXBsYXRlU2VsZWN0aW9uKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kLCB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUpID8gY3JlYXRlVGVtcGxhdGVTZWxlY3Rpb24odGhpcy5zdGF0ZS50ZW1wbGF0ZUlkLCB0aGlzLm9uVGVtcGxhdGVJZENoYW5nZSkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICAgICAgeyBzaG91bGRTaG93VGVtcGxhdGVTZWxlY3Rpb24odGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSkgPyBjcmVhdGVHYW1lc1NlbGVjdGlvbihnZXRPcGVuR2FtZXModGhpcy5wcm9wcy5nYW1lcyksIHRoaXMuc3RhdGUuZ2FtZUlkLCB0aGlzLm9uR2FtZUlkQ2hhbmdlKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICB7IHNob3VsZENyZWF0ZUN1c3RvbVRpdGxlKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kLCB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUpID8gY3JlYXRlQ3VzdG9tVGl0bGUodGhpcy5zdGF0ZS5zdWJqZWN0LCB0aGlzLm9uU3ViamVjdENoYW5nZWQpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICAgIHsgc2hvdWxkU2hvd0N1c3RvbUNvbnRlbnQodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSkgPyBjcmVhdGVDdXN0b21Db250ZW50KHRoaXMuc3RhdGUuY29udGVudCwgdGhpcy5vbkNvbnRlbnRDaGFuZ2VkKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZVN1Ym1pdEJ1dHRvbih0aGlzLm9uU3VibWl0KSB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkRpc3RyaWJ1dGlvblBhZ2UucHJvcFR5cGVzID0ge1xuICAgIHVzZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGdhbWVzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGJvb2tpbmdzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmV1ZHguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGlzdHJpYnV0aW9uUGFnZSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UuanN4IiwiaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBQQVRIX01BUCA9IHtcbiAgRU1BSUxTOiB7XG4gICAgVEVNUExBVEVTOiAncGVuZGluZ0VtYWlscy90ZW1wbGF0ZXMnLFxuICAgIENVU1RPTTogJ3BlbmRpbmdFbWFpbHMvY3VzdG9tJ1xuICB9LFxuICBTTVM6ICdwZW5kaW5nU01TJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kVGVtcGxhdGVFbWFpbCA9IChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5FTUFJTFMuVEVNUExBVEVTfWAsICh7IHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZEN1c3RvbUVtYWlsID0gKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKGAke1BBVEhfTUFQLkVNQUlMUy5DVVNUT019YCwgKHsgcmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCB9KSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kU01TID0gKHRvLCBtZXNzYWdlKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5TTVN9YCwgKHsgdG8sIG1lc3NhZ2UgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Rpc3RyaWJ1dGlvbkFjdGlvbnMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9kaXN0cmlidXRpb25QYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpc3RyaWJ1dGlvbi1wYWdlIC5idXR0b24gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IFVzZXJGb3JtID0gcmVxdWlyZSgnLi91c2VyRm9ybS5qc3gnKTtcblxuY29uc3Qgcm91dGluZ0FjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5jb25zdCBDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9jb25zdGFudHMnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgY29uc3QgdWlkVG9FZGl0ID0gc3RhdGUucm91dGluZy5jdXJyZW50LnVpZCB8fCBzdGF0ZS5hdXRoRGF0YS51aWQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdWlkOiB1aWRUb0VkaXQsXG4gICAgICAgIGdvSG9tZUFmdGVyRWRpdGluZzogc3RhdGUucm91dGluZy5oaXN0b3J5Lmxlbmd0aCA9PT0gMVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hdmlnYXRlSG9tZTogKCkgPT4gZGlzcGF0Y2gocm91dGluZ0FjdGlvbnMucmVzZXQoQ29uc3RhbnRzLlJPVVRJTkcuUEFHRVMuSE9NRSkpLFxuICAgICAgICBuYXZpZ2F0ZUJhY2s6ICgpID0+IGRpc3BhdGNoKHJvdXRpbmdBY3Rpb25zLm5hdmlnYXRlQmFjaygpKVxuICAgIH07XG59XG5cbmNsYXNzIEVkaXRvclVzZXJJbmZvUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgb25Gb3JtQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmdvSG9tZUFmdGVyRWRpdGluZykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZUhvbWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFVzZXJGb3JtIHVpZD17dGhpcy5wcm9wcy51aWR9IG9uQ2xvc2U9e3RoaXMub25Gb3JtQ2xvc2V9Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuRWRpdG9yVXNlckluZm9QYWdlLnByb3BUeXBlcyA9IHtcbiAgICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZUJhY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbmF2aWdhdGVIb21lOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGdvSG9tZUFmdGVyRWRpdGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFZGl0b3JVc2VySW5mb1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2VkaXRVc2VySW5mb1BhZ2UuanN4IiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eD0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29uc3RhbnRzJyk7XG5jb25zdCBUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMnKTtcblxuY29uc3QgdXNlckFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJyk7XG5cbmNvbnN0IEZvcm1GcmFtZSA9IHJlcXVpcmUoJy4vZm9ybUZyYW1lJyk7XG5cbmNvbnN0IGVtcHR5VXNlciA9IHtcbiAgICBmaXJzdE5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICBwaG9uZVByZWZpeDogJzA1MCcsXG4gICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgIHN0YXRpb246ICd0bHYnLFxuICAgIHN1YnNjcmliZVNNUzogdHJ1ZSxcbiAgICBzdWJzY3JpYmVNYWlsOiB0cnVlLFxuICAgIHNlYXNvblRpY2tldHM6IDBcbn07XG5cbmZ1bmN0aW9uIGdldEVtcHR5VXNlckluZm8oZW1haWwpIHtcbiAgcmV0dXJuIF8uYXNzaWduKGVtcHR5VXNlciwgeyBlbWFpbCB9KTtcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnN0IHVzZXIgPSBzdGF0ZS51c2Vyc1tvd25Qcm9wcy51aWRdO1xuICAgIGNvbnN0IGF1dGhEYXRhID0gc3RhdGUuYXV0aERhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VySW5mbzogdXNlciB8fCBnZXRFbXB0eVVzZXJJbmZvKGF1dGhEYXRhLmVtYWlsKSxcbiAgICAgICAgaXNBZG1pbk1vZGU6IGF1dGhEYXRhLmlzQWRtaW4sXG4gICAgICAgIGFsbG93VXNlclJlbW92ZTogYXV0aERhdGEuaXNBZG1pbiAmJiBhdXRoRGF0YS51aWQgIT09IG93blByb3BzLnVpZFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVVc2VyOiB1c2VyID0+IGRpc3BhdGNoKHVzZXJBY3Rpb25zLnVwZGF0ZVVzZXIob3duUHJvcHMudWlkLCB1c2VyKSksXG4gICAgICAgIHJlbW92ZVVzZXI6ICgpID0+IGRpc3BhdGNoKHVzZXJBY3Rpb25zLnJlbW92ZVVzZXIob3duUHJvcHMudWlkKSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZG1pblNlY3Rpb24oc2Vhc29uVGlja2V0cywgb25OdW1iZXJDaGFuZ2UpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PVwic2Vhc29uVGlja2V0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICA8bGFiZWw+15vXnteV16og157XoNeV15nXmdedXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzZWFzb25UaWNrZXRzXCIgdmFsdWU9e3NlYXNvblRpY2tldHN9IG9uQ2hhbmdlPXtvbk51bWJlckNoYW5nZX0+XG4gICAgICAgICAgICAgICAgeyBfLnRpbWVzKENvbnN0YW50cy5VU0VSLk1BWF9TRUFTT05fVElDS0VUUywgaSA9PiA8b3B0aW9uIGtleT17J2Ftb3VudC0nICsgaX0gdmFsdWU9e2l9PntpfTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlck5hbWVJbnB1dHMoZmlyc3ROYW1lLCBsYXN0TmFtZSwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5GSVJTVF9OQU1FIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0TmFtZVwiIHZhbHVlPXtmaXJzdE5hbWV9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTYgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuTEFTVF9OQU1FIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3ROYW1lXCIgdmFsdWU9e2xhc3ROYW1lfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSBtYXhMZW5ndGg9XCIyMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbWFpbElucHV0KGVtYWlsLCBvblRleHRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT1cInVzZXItaW5mby1lbWFpbC1pbnB1dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS0xMiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5FTUFJTCB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaG9uZU51bWJlcklucHV0cyhwaG9uZVByZWZpeCwgcGhvbmVOdW1iZXIsIG9uVGV4dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTggY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuUEhPTkVfTlVNQkVSIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiB2YWx1ZT17cGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjdcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNCBjb2x1bW5zIGVuZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuUEhPTkVfUFJFRklYIH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicGhvbmVQcmVmaXhcIiB2YWx1ZT17cGhvbmVQcmVmaXh9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuVVNFUi5QSE9ORV9QUkVGSVhFUywgcHJlZml4ID0+IDxvcHRpb24ga2V5PXsncGhvbmUtcHJlZml4LScgKyBwcmVmaXh9IHZhbHVlPXtwcmVmaXh9PntwcmVmaXh9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaWNrdXBTdGF0aW9uUm93KHN0YXRpb24sIHJlcXVlc3RGb3JNZW1iZXJzaGlwLCBvblRleHRDaGFuZ2UsIG9uQm9vbGVhbkNoYW5nZSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGlja1VwU3RhdGlvbklucHV0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgVHJhbnNsYXRpb25zLlVQREFURV9VU0VSX0lORk9fUEFHRS5GQVZPUklURV9QSUNLVVBfU1RBVElPTiB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInN0YXRpb25cIiB2YWx1ZT17c3RhdGlvbn0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5TVEFUSU9OUywgc3RhdGlvbiA9PiA8b3B0aW9uIGtleT17J3N0YXRpb24tJyArIHN0YXRpb259IHZhbHVlPXtzdGF0aW9ufT57IFRyYW5zbGF0aW9ucy5TVEFUSU9OU1tzdGF0aW9uXSB9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS00IHNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLlJFUVVFU1RfRk9SX01FTUJFUlNISVAgfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyZXF1ZXN0Rm9yTWVtYmVyc2hpcFwiIHZhbHVlPXtyZXF1ZXN0Rm9yTWVtYmVyc2hpcH0gb25DaGFuZ2U9e29uQm9vbGVhbkNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt1bmRlZmluZWR9IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+15HXl9eoPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt0cnVlfT7Xm9efPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtmYWxzZX0+15zXkDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHsgY3JlYXRlUGlja1VwU3RhdGlvbklucHV0KCkgfVxuICAgICAgICAgICAgeyBjcmVhdGVSZXF1ZXN0Rm9yTWVtYmVyc2hpcElucHV0KCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXN0cmlidXRpb25JbnB1dHMoc3Vic2NyaWJlTWFpbCwgc3Vic2NyaWJlU01TLCBvbkJvb2xlYW5DaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0zIGNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuRElTVFJJQlVUSU9OLkVNQUlMIH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5wdXRcIiBuYW1lPVwic3Vic2NyaWJlTWFpbFwiIGlkPVwic3Vic2NyaWJlTWFpbFwiIG9uQ2hhbmdlPXtvbkJvb2xlYW5DaGFuZ2V9IGNoZWNrZWQ9e3N1YnNjcmliZU1haWx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtcGFkZGxlXCIgaHRtbEZvcj1cInN1YnNjcmliZU1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuVE9HR0xFLllFUyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWluYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLlRPR0dMRS5OTyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTMgY29sdW1uIGVuZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuRElTVFJJQlVUSU9OLlNNUyB9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwic3dpdGNoLWlucHV0XCIgbmFtZT1cInN1YnNjcmliZVNNU1wiIGlkPVwic3Vic2NyaWJlU01TXCIgb25DaGFuZ2U9e29uQm9vbGVhbkNoYW5nZX0gY2hlY2tlZD17c3Vic2NyaWJlU01TfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoLXBhZGRsZVwiIGh0bWxGb3I9XCJzdWJzY3JpYmVTTVNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IFRyYW5zbGF0aW9ucy5VUERBVEVfVVNFUl9JTkZPX1BBR0UuVE9HR0xFLllFUyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWluYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyBUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLlRPR0dMRS5OTyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIFVzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0gXy5jbG9uZSh0aGlzLnByb3BzLnVzZXJJbmZvKTtcbiAgfVxuXG4gIGlzRm9ybVZhbGlkID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFzQWxsUmVxdWlyZWRJbmZvID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkSW5mbyA9IF8ucGljayh0aGlzLnN0YXRlLCBbJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdwaG9uZVByZWZpeCcsICdwaG9uZU51bWJlciddKTtcbiAgICAgICAgICByZXR1cm4gIV8uc29tZShyZXF1aXJlZEluZm8sIF8uaXNFbXB0eSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYXNWYWxpZFBob25lTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBob25lTnVtYmVyLmxlbmd0aCA9PT0gNztcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIF8uaGFzKHRoaXMuc3RhdGUsICdyZXF1ZXN0Rm9yTWVtYmVyc2hpcCcpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGhhc0FsbFJlcXVpcmVkSW5mbygpICYmIGhhc1ZhbGlkUGhvbmVOdW1iZXIoKSAmJiBoYXNSZXF1ZXN0Rm9yTWVtYmVyc2hpcFByb3BlcnR5KCk7XG4gIH07XG5cbiAgb25LZXlQcmVzcyA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBpc0Zvcm1WYWxpZCh0aGlzLnN0YXRlKSkge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfTtcblxuICBvbkNoYW5nZSA9ICh0eXBlLCBlKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICh0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICB2YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC50eXBlID09PSAnc2VsZWN0LW9uZScpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09ICdmYWxzZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih0aGlzLnN0YXRlKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsb3NlKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICB9O1xuXG4gIG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVVc2VyKCk7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbG9zZSkpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBvblRleHRDaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgJ3RleHQnKTtcbiAgICAgIGNvbnN0IG9uTnVtYmVyQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsICdudW1iZXInKTtcbiAgICAgIGNvbnN0IG9uQm9vbGVhbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzLCAnYm9vbGVhbicpO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUZyYW1lIHRpdGxlPXtUcmFuc2xhdGlvbnMuVVBEQVRFX1VTRVJfSU5GT19QQUdFLlRJVExFfVxuICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnByb3BzLmFsbG93VXNlclJlbW92ZSA/IHRoaXMub25SZW1vdmUgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMucHJvcHMub25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuaXNGb3JtVmFsaWQoKX0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWNlbnRlcmVkIHVzZXItY29udGFpbmVyXCIgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzfT5cblxuICAgICAgICAgICAgICB7IGNyZWF0ZVVzZXJOYW1lSW5wdXRzKHRoaXMuc3RhdGUuZmlyc3ROYW1lLCB0aGlzLnN0YXRlLmxhc3ROYW1lLCBvblRleHRDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnVzZXJJbmZvLmVtYWlsID8gbnVsbCA6IGNyZWF0ZUVtYWlsSW5wdXQodGhpcy5zdGF0ZS5lbWFpbCwgb25UZXh0Q2hhbmdlKSB9XG4gICAgICAgICAgICAgIHsgY3JlYXRlUGhvbmVOdW1iZXJJbnB1dHModGhpcy5zdGF0ZS5waG9uZVByZWZpeCwgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgb25UZXh0Q2hhbmdlLCBvbk51bWJlckNoYW5nZSkgfVxuICAgICAgICAgICAgICB7IGNyZWF0ZVBpY2t1cFN0YXRpb25Sb3codGhpcy5zdGF0ZS5zdGF0aW9uLCB0aGlzLnN0YXRlLnJlcXVlc3RGb3JNZW1iZXJzaGlwLCBvblRleHRDaGFuZ2UsIG9uQm9vbGVhbkNoYW5nZSkgfVxuXG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0FkbWluTW9kZSA/IGNyZWF0ZUFkbWluU2VjdGlvbih0aGlzLnN0YXRlLnNlYXNvblRpY2tldHMsIG9uTnVtYmVyQ2hhbmdlKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgIHsgY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzKHRoaXMuc3RhdGUuc3Vic2NyaWJlTWFpbCwgdGhpcy5zdGF0ZS5zdWJzY3JpYmVTTVMsIG9uQm9vbGVhbkNoYW5nZSkgfVxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9Gb3JtRnJhbWU+XG4gICAgKTtcbiAgfVxufVxuXG5Vc2VyRm9ybS5Qcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlVXNlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZW1vdmVVc2VyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzQWRtaW5Nb2RlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhbGxvd1VzZXJSZW1vdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHVzZXJJbmZvOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlckZvcm0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJGb3JtLmpzeCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IFBhZ2VUaXRsZSA9IHJlcXVpcmUoJy4vcGFnZVRpdGxlJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9mb3JtRnJhbWUuc2NzcycpO1xuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25zQnV0dG9ucyhkaXNhYmxlZCwgb25TdWJtaXQsIG9uUmVtb3ZlKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSZW1vdmVCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBrZXk9XCJyZW1vdmUtYnRuXCIgb25DbGljaz17b25SZW1vdmV9IGNsYXNzTmFtZT1cImJ1dHRvbiBhbGVydCBtb3JlLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyBUcmFuc2xhdGlvbnMuRk9STV9GUkFNRS5SRU1PVkUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9ucyBidXR0b24tZ3JvdXAgc3RhY2tlZCBzbWFsbC1jZW50ZXJlZCBsYXJnZS02IHNtYWxsLTggXCI+XG4gICAgICAgICAgICA8YSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e29uU3VibWl0fSBjbGFzc05hbWU9XCJidXR0b24gc3VjY2VzcyBtb3JlLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyBUcmFuc2xhdGlvbnMuRk9STV9GUkFNRS5TVUJNSVQgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7IF8uaXNGdW5jdGlvbihvblJlbW92ZSkgPyBjcmVhdGVSZW1vdmVCdXR0b24oKSA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBGb3JtRnJhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mcmFtZVwiPlxuICAgICAgICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUFjdGlvbnNCdXR0b25zKHRoaXMucHJvcHMuZGlzYWJsZWQsIHRoaXMucHJvcHMub25TdWJtaXQsIHRoaXMucHJvcHMub25SZW1vdmUpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG59XG5cbkZvcm1GcmFtZS5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TdWJtaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25SZW1vdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1GcmFtZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9mb3JtRnJhbWUuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9mb3JtRnJhbWUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9mb3JtRnJhbWUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvZm9ybUZyYW1lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm0tZnJhbWUgLmNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxcblxcbi5mb3JtLWZyYW1lIC5hY3Rpb24tYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAuZm9ybS1mcmFtZSAuYWN0aW9uLWJ1dHRvbnMgLmJ1dHRvbiBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zICA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucycpO1xuXG5jb25zdCByb3V0aW5nQWN0aW9ucyAgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3JvdXRpbmdBY3Rpb25zJyk7XG5jb25zdCBib29raW5nQWN0aW9ucyAgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zJyk7XG5cbmNvbnN0IEZvcm1GcmFtZSA9IHJlcXVpcmUoJy4vZm9ybUZyYW1lJyk7XG5cbmNvbnN0IGVtcHR5Qm9va2luZyA9IHtcbiAgICBwYWlkU2VhdHM6IDAsXG4gICAgZXh0cmFTZWF0czogMCxcbiAgICBwaWNrVXA6ICd0bHYnLFxuICAgIGRyb3BPZmY6ICd0bHYnXG59O1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICBjb25zdCByb3V0aW5nUGFyYW1zID0gc3RhdGUucm91dGluZy5jdXJyZW50LnBhcmFtcztcbiAgICBjb25zdCB1aWQgPSByb3V0aW5nUGFyYW1zLnVpZDtcbiAgICBjb25zdCBnYW1lSWQgPSByb3V0aW5nUGFyYW1zLmdhbWVJZDtcbiAgICBjb25zdCBib29raW5nID0gXy5nZXQoc3RhdGUsIFsnYm9va2luZ3MnLCB1aWQsIGdhbWVJZF0sIHt9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlzQWRtaW46IHN0YXRlLmF1dGhEYXRhLmlzQWRtaW4sXG4gICAgICAgIHVpZCxcbiAgICAgICAgZ2FtZUlkLFxuICAgICAgICBib29raW5nLFxuICAgICAgICB1c2VySW5mbzogc3RhdGUudXNlcnNbdWlkXVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZUJvb2tpbmc6ICh1aWQsIGdhbWVJZCwgYm9va2luZykgPT4gZGlzcGF0Y2goYm9va2luZ0FjdGlvbnMudXBkYXRlQm9va2luZyh1aWQsIGdhbWVJZCwgYm9va2luZykpLFxuICAgICAgICBjYW5jZWxCb29raW5nOiAodWlkLCBnYW1lSWQpID0+IGRpc3BhdGNoKGJvb2tpbmdBY3Rpb25zLmNhbmNlbEJvb2tpbmcodWlkLCBnYW1lSWQpKSxcbiAgICAgICAgbmF2aWdhdGVCYWNrOiAoKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZUJhY2soKSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXNzZW5nZXJzU2VjdGlvbihzZWFzb25UaWNrZXRzLCBwYWlkU2VhdHMsIGV4dHJhU2VhdHMsIG9uUGFpZFNlYXRDaGFuZ2UsIG9uRXh0cmFTZWF0Q2hhbmdlKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQYWlkU2VhdHNJbnB1dCgpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBfLnRpbWVzKHNlYXNvblRpY2tldHMgKyAxLCBpID0+IDxvcHRpb24ga2V5PXsncGFpZC1zZWF0LScgKyBpfSB2YWx1ZT17aX0+e2l9PC9vcHRpb24+KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTYgY29sdW1ucyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0JPT0tJTkdfUEFHRS5QQUlEX1NFQVRTfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtwYWlkU2VhdHN9IG9uQ2hhbmdlPXtvblBhaWRTZWF0Q2hhbmdlfSBuYW1lPSdwYWlkU2VhdHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtcyB9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFeHRyYVNlYXRzSW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gXy50aW1lcyg4LCBpID0+IDxvcHRpb24ga2V5PXsnZXh0cmEtc2VhdC0nICsgaX0gdmFsdWU9e2l9PntpfTwvb3B0aW9uPik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC02IGNvbHVtbnMgZW5kJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfQk9PS0lOR19QQUdFLkVYVFJBX1NFQVRTfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtleHRyYVNlYXRzfSBvbkNoYW5nZT17b25FeHRyYVNlYXRDaGFuZ2V9IG5hbWU9J2V4dHJhU2VhdHMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtcyB9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93JyBrZXk9eydib29raW5nLWZvcm0tcGFzc2VuZ2Vycy1zZWN0aW9uJ30+XG4gICAgICAgICAgICB7IHNlYXNvblRpY2tldHMgPyBjcmVhdGVQYWlkU2VhdHNJbnB1dCgpIDogbnVsbCB9XG4gICAgICAgICAgICB7IGNyZWF0ZUV4dHJhU2VhdHNJbnB1dCgpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGlja3VwU2VjdGlvbihwaWNrVXBFbmFibGVkLCBwaWNrVXBTdGF0aW9uLCB0b2dnbGVQaWNrVXAsIG9uUGlja3VwU3RhdGlvbkNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTMgbGFyZ2UtMiBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGlja1VwVG9nZ2xlJz57VHJhbnNsYXRpb25zLlVQREFURV9CT09LSU5HX1BBR0UuUElDS1VQX1RPR0dMRX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzd2l0Y2gnPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNsYXNzTmFtZT0nc3dpdGNoLWlucHV0JyBpZD0ncGlja1VwVG9nZ2xlJyBjaGVja2VkPXtwaWNrVXBFbmFibGVkfSBvbkNoYW5nZT17dG9nZ2xlUGlja1VwfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdzd2l0Y2gtcGFkZGxlJyBodG1sRm9yPSdwaWNrVXBUb2dnbGUnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC05IGxhcmdlLTEwIGNvbHVtbnMgZW5kIG1vcmUtc3BhY2UnPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3BpY2tVcFN0YXRpb259IG9uQ2hhbmdlPXtvblBpY2t1cFN0YXRpb25DaGFuZ2V9IG5hbWU9J3BpY2tVcCcgZGlzYWJsZWQ9eyFwaWNrVXBFbmFibGVkfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJyBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PntUcmFuc2xhdGlvbnMuVVBEQVRFX0JPT0tJTkdfUEFHRS5QSUNLVVBfU1RBVElPTl9EUk9QRE9XTl9ERUZBVUxUfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuU1RBVElPTlMuVEVMX0FWSVZ9PntUcmFuc2xhdGlvbnMuU1RBVElPTlNbQ29uc3RhbnRzLlNUQVRJT05TLlRFTF9BVklWXX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Q29uc3RhbnRzLlNUQVRJT05TLk1PRElJTn0+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tDb25zdGFudHMuU1RBVElPTlMuTU9ESUlOXX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcm9wb2ZmU2VjdGlvbihkcm9wT2ZmRW5hYmxlZCwgZHJvcE9mZlN0YXRpb24sIHRvZ2dsZURyb3BPZmYsIG9uRHJvcE9mZlN0YXRpb25DaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC0zIGxhcmdlLTIgY29sdW1ucyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkcm9wT2ZmVG9nZ2xlXCI+e1RyYW5zbGF0aW9ucy5VUERBVEVfQk9PS0lOR19QQUdFLkRST1BPRkZfVE9HR0xFfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N3aXRjaCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2xhc3NOYW1lPSdzd2l0Y2gtaW5wdXQnIGlkPSdkcm9wT2ZmVG9nZ2xlJyBjaGVja2VkPXtkcm9wT2ZmRW5hYmxlZH0gb25DaGFuZ2U9e3RvZ2dsZURyb3BPZmZ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtcGFkZGxlXCIgaHRtbEZvcj1cImRyb3BPZmZUb2dnbGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtOSBsYXJnZS0xMCBjb2x1bW5zIGVuZCBtb3JlLXNwYWNlJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtkcm9wT2ZmU3RhdGlvbn0gb25DaGFuZ2U9e29uRHJvcE9mZlN0YXRpb25DaGFuZ2V9IG5hbWU9J2Ryb3BPZmYnIGRpc2FibGVkPXshZHJvcE9mZkVuYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+e1RyYW5zbGF0aW9ucy5VUERBVEVfQk9PS0lOR19QQUdFLlBJQ0tVUF9TVEFUSU9OX0RST1BET1dOX0RFRkFVTFR9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0NvbnN0YW50cy5TVEFUSU9OUy5URUxfQVZJVn0+e1RyYW5zbGF0aW9ucy5TVEFUSU9OU1tDb25zdGFudHMuU1RBVElPTlMuVEVMX0FWSVZdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtDb25zdGFudHMuU1RBVElPTlMuTU9ESUlOfT57VHJhbnNsYXRpb25zLlNUQVRJT05TW0NvbnN0YW50cy5TVEFUSU9OUy5NT0RJSU5dfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIFVwZGF0ZUJvb2tpbmdQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgY29uc3QgYm9va2luZ0luaXRpYWxTdGF0ZSA9IF8uZGVmYXVsdHModGhpcy5wcm9wcy5ib29raW5nLCB7IHBhaWRTZWF0czogdGhpcy5wcm9wcy5zZWFzb25UaWNrZXRzIH0sIGVtcHR5Qm9va2luZyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IF8ubWVyZ2UoYm9va2luZ0luaXRpYWxTdGF0ZSwge1xuICAgICAgICAgICAgcGlja1VwRW5hYmxlZDogISFib29raW5nSW5pdGlhbFN0YXRlLnBpY2tVcCxcbiAgICAgICAgICAgIGRyb3BPZmZFbmFibGVkOiAhIWJvb2tpbmdJbml0aWFsU3RhdGUuZHJvcE9mZlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblBhaWRTZWF0Q2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGFpZFNlYXRzOiBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uRXh0cmFTZWF0Q2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXh0cmFTZWF0czogcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0b2dnbGVQaWNrVXAgPSBlID0+IHtcbiAgICAgICAgY29uc3QgcGlja1VwRW5hYmxlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaWNrVXBFbmFibGVkIH0pO1xuICAgICAgICBpZiAoIXBpY2tVcEVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaWNrVXA6ICcnIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG9uUGlja1VwU3RhdGlvbkNoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBpY2tVcDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRvZ2dsZURyb3BPZmYgPSBlID0+IHtcbiAgICAgICAgY29uc3QgZHJvcE9mZkVuYWJsZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcE9mZkVuYWJsZWQgfSk7XG4gICAgICAgIGlmICghZHJvcE9mZkVuYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wT2ZmOiAnJyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBvbkRyb3BPZmZTdGF0aW9uQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZHJvcE9mZjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlzRm9ybVZhbGlkID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wYWlkU2VhdHMgPT09IDAgJiYgdGhpcy5zdGF0ZS5leHRyYVNlYXRzID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUucGlja1VwRW5hYmxlZCAmJiAhdGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGlja1VwRW5hYmxlZCAmJiB0aGlzLnN0YXRlLnBpY2tVcCA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmRyb3BPZmZFbmFibGVkICYmIHRoaXMuc3RhdGUuZHJvcE9mZiA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9va2luZ1RvVXBkYXRlID0gXy5waWNrKHRoaXMuc3RhdGUsIF8ua2V5cyhlbXB0eUJvb2tpbmcpKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVCb29raW5nKHRoaXMucHJvcHMudWlkLCB0aGlzLnByb3BzLmdhbWVJZCwgYm9va2luZ1RvVXBkYXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9O1xuXG4gICAgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuY2FuY2VsQm9va2luZyh0aGlzLnByb3BzLnVpZCwgdGhpcy5wcm9wcy5nYW1lSWQpO1xuICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlQmFjaygpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxGb3JtRnJhbWUgdGl0bGU9e1RyYW5zbGF0aW9ucy5VUERBVEVfQk9PS0lOR19QQUdFLlRJVExFfSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gb25DbG9zZT17dGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2t9IG9uUmVtb3ZlPXt0aGlzLnByb3BzLmlzQWRtaW4gPyB0aGlzLm9uUmVtb3ZlOiBudWxsfSBkaXNhYmxlZD17IXRoaXMuaXNGb3JtVmFsaWQoKX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2tpbmctZm9ybSBzbWFsbC0xMSBzbWFsbC1jZW50ZXJlZCc+XG4gICAgICAgICAgICAgICAgICAgIHsgY3JlYXRlUGFzc2VuZ2Vyc1NlY3Rpb24odGhpcy5wcm9wcy51c2VySW5mby5zZWFzb25UaWNrZXRzLCB0aGlzLnN0YXRlLnBhaWRTZWF0cywgdGhpcy5zdGF0ZS5leHRyYVNlYXRzLCB0aGlzLm9uUGFpZFNlYXRDaGFuZ2UsIHRoaXMub25FeHRyYVNlYXRDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVQaWNrdXBTZWN0aW9uKHRoaXMuc3RhdGUucGlja1VwRW5hYmxlZCwgdGhpcy5zdGF0ZS5waWNrVXAsIHRoaXMudG9nZ2xlUGlja1VwLCB0aGlzLm9uUGlja1VwU3RhdGlvbkNoYW5nZSkgfVxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZURyb3BvZmZTZWN0aW9uKHRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWQsIHRoaXMuc3RhdGUuZHJvcE9mZiwgdGhpcy50b2dnbGVEcm9wT2ZmLCB0aGlzLm9uRHJvcE9mZlN0YXRpb25DaGFuZ2UpIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybUZyYW1lPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVXBkYXRlQm9va2luZ1BhZ2UucHJvcFR5cGVzID0ge1xuICAgIHVpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGlzQWRtaW46IFJlYWN0LlByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgZ2FtZUlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYm9va2luZzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB1c2VySW5mbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2FuY2VsQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZUJhY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVcGRhdGVCb29raW5nUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXBkYXRlQm9va2luZ1BhZ2UuanN4IiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IENvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbnN0YW50cycpO1xuY29uc3QgVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zJyk7XG5cbmNvbnN0IGV2ZW50QWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zJyk7XG5jb25zdCByb3V0aW5nQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvcm91dGluZ0FjdGlvbnMnKTtcblxuY29uc3QgREVGQVVMVF9HQU1FX0xPR08gPSAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTI0LzEyNDE1MC5zdmcnO1xuXG5jb25zdCBGb3JtRnJhbWUgPSByZXF1aXJlKCcuL2Zvcm1GcmFtZScpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvdXBkYXRlR2FtZVBhZ2Uuc2NzcycpO1xuXG5jb25zdCBlbXB0eUV2ZW50ID0ge1xuICAgIHR5cGVJZDogJycsXG4gICAgZGF5OiAnMDEnLFxuICAgIG1vbnRoOiAnMDEnLFxuICAgIHllYXI6ICcyMDE3JyxcbiAgICBob3VyOiAnMTcnLFxuICAgIG1pbnV0ZTogJzAwJyxcbiAgICBzdGF0dXM6IENvbnN0YW50cy5HQU1FLlNUQVRVUy5DTE9TRURcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIGNvbnN0IHJvdXRpbmdQYXJhbXMgPSBzdGF0ZS5yb3V0aW5nLmN1cnJlbnQucGFyYW1zO1xuICAgIGNvbnN0IGdhbWVJZCA9IHJvdXRpbmdQYXJhbXMuZ2FtZUlkO1xuICAgIGNvbnN0IGdhbWUgPSBfLmdldChzdGF0ZSwgWydldmVudHMnLCBnYW1lSWRdLCB7fSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnYW1lLFxuICAgICAgICBnYW1lSWRcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVWYWx1ZSh5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVZhbHVlKGhvdXIsIG1pbnV0ZSkge1xuICAgIHJldHVybiBob3VyICsgJzonICsgbWludXRlO1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVHYW1lOiBnYW1lID0+IGRpc3BhdGNoKGV2ZW50QWN0aW9ucy5jcmVhdGVFdmVudChnYW1lKSksXG4gICAgICAgIHVwZGF0ZUdhbWU6IChnYW1lSWQsIGdhbWUpID0+IGRpc3BhdGNoKGV2ZW50QWN0aW9ucy51cGRhdGVFdmVudChnYW1lSWQsIGdhbWUpKSxcbiAgICAgICAgcmVtb3ZlR2FtZTogZ2FtZUlkID0+IGRpc3BhdGNoKGV2ZW50QWN0aW9ucy5yZW1vdmVFdmVudChnYW1lSWQpKSxcbiAgICAgICAgbmF2aWdhdGVCYWNrOiAoKSA9PiBkaXNwYXRjaChyb3V0aW5nQWN0aW9ucy5uYXZpZ2F0ZUJhY2soKSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lSW1hZ2UodHlwZUlkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGltZyBjbGFzc05hbWU9J2dhbWUtaW1nJyBzcmM9e18uZ2V0KENvbnN0YW50cy5URUFNUywgW3R5cGVJZCwgJ2xvZ28nXSwgREVGQVVMVF9HQU1FX0xPR08pfSAvPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVUaXRsZVNlY3Rpb24odHlwZUlkLCBvblR5cGVJZENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTkgbGFyZ2UtMTAgbGFyZ2UtY29sbGFwc2UgY29sdW1ucyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5HQU1FX0xBQkVMfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9J3R5cGVJZCcgdmFsdWU9e3R5cGVJZH0gb25DaGFuZ2U9e29uVHlwZUlkQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Jycgc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT57VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuR0FNRV9QTEFDRUhPTERFUn08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLlRFQU1TLCAodGVhbURhdGEsIGlkKSA9PiA8b3B0aW9uIGtleT17J3VwZGF0ZS1nYW1lLScgKyBpZH0gdmFsdWU9e2lkfT57dGVhbURhdGEubGFiZWx9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbG9hdC1sZWZ0Jz5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUdhbWVJbWFnZSh0eXBlSWQpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvV2l0aG91dFN1cHBvcnRlZElucHV0cyh5ZWFyLCBtb250aCwgaG91ciwgbWludXRlLCBvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9J3Vuc3VwcG9ydGVkLWlucHV0cycgY2xhc3NOYW1lPSdyb3cgc21hbGwtZXhwYW5kZWQgc21hbGwtY2VudGVyZWQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5EQVRFX0xBQkVMfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17eWVhcn0gb25DaGFuZ2U9e29uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2V9IG5hbWU9J3llYXInPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5EQVRFX0FORF9USU1FLnllYXJzLCB5ZWFyID0+IDxvcHRpb24ga2V5PXsneXktJyArIHllYXJ9IHZhbHVlPXsnMjAnICsgeWVhcn0+e3llYXJ9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC00IG1lZGl1bS0yIGNvbHVtbnMgbW9yZS1zcGFjZSc+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bW9udGh9IG9uQ2hhbmdlPXtvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlfSBuYW1lPSdtb250aCc+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAoQ29uc3RhbnRzLkRBVEVfQU5EX1RJTUUubW9udGhzLCBtb250aCA9PiA8b3B0aW9uIGtleT17J21tLScgKyBtb250aH0gdmFsdWU9e21vbnRofT57bW9udGh9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC00IG1lZGl1bS0yIGNvbHVtbnMgbW9yZS1zcGFjZSc+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZGF5fSBvbkNoYW5nZT17b25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZX0gbmFtZT0nZGF5Jz5cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuREFURV9BTkRfVElNRS5kYXlzLCBkYXkgPT4gPG9wdGlvbiBrZXk9eydkZC0nICsgZGF5fSB2YWx1ZT17ZGF5fT57ZGF5fTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtMyBjb2x1bW5zJz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLlRJTUV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXttaW51dGV9IG9uQ2hhbmdlPXtvbk5vblN1cHBvcnRlZElucHV0Q2hhbmdlfSBuYW1lPSdtaW51dGUnPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKENvbnN0YW50cy5EQVRFX0FORF9USU1FLm1pbnV0ZXMsIGRheSA9PiA8b3B0aW9uIGtleT17J21pbi0nICsgbWludXRlfSB2YWx1ZT17bWludXRlfT57bWludXRlfTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc21hbGwtMyBjb2x1bW5zIG1vcmUtc3BhY2UgZW5kJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtob3VyfSBvbkNoYW5nZT17b25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZX0gbmFtZT0nbWludXRlJz5cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuREFURV9BTkRfVElNRS5ob3VycywgaG91ciA9PiA8b3B0aW9uIGtleT17J2hoLScgKyBob3VyfSB2YWx1ZT17aG91cn0+e2hvdXJ9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb1dpdGhTdXBwb3J0ZWRJbnB1dHMoZGF0ZSwgdGltZSwgb25EYXRlQ2hhbmdlLCBvblRpbWVDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT0nc3VwcG9ydGVkLWlucHV0cycgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtYWxsLTYgY29sdW1ucyc+XG4gICAgICAgICAgICAgICAgPGxhYmVsPntUcmFuc2xhdGlvbnMuVVBEQVRFX0dBTUVfUEFHRS5EQVRFX0xBQkVMfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZGF0ZScgdmFsdWU9e2RhdGV9IG9uQ2hhbmdlPXtvbkRhdGVDaGFuZ2V9IG1pbj0nMjAxNi0wMS0wMScgbWF4PScyMDE3LTEyLTMxJyBuYW1lPSdkYXRlJyAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC02IGNvbHVtbnMnPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuVElNRX1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RpbWUnIHZhbHVlPXt0aW1lfSBzdGVwPXszMDB9IG9uQ2hhbmdlPXtvblRpbWVDaGFuZ2V9IG5hbWU9J3RpbWUnIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lU3RhdHVzU2VjdGlvbihzdGF0dXMsIG9uR2FtZVN0YXR1c0NoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbWFsbC0xMiBjb2x1bW5zJz5cbiAgICAgICAgICAgIDxsYWJlbD57VHJhbnNsYXRpb25zLlVQREFURV9HQU1FX1BBR0UuR0FNRV9TVEFUVVN9XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c3RhdHVzfSBvbkNoYW5nZT17b25HYW1lU3RhdHVzQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgeyBfLm1hcChDb25zdGFudHMuR0FNRS5TVEFUVVMsIHZhbCA9PiA8b3B0aW9uIHZhbHVlPXt2YWx9PntUcmFuc2xhdGlvbnMuR0FNRS5TVEFUVVNbdmFsXX08L29wdGlvbj4pIH1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIFVwZGF0ZUdhbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IF8uZGVmYXVsdHModGhpcy5wcm9wcy5nYW1lLCBlbXB0eUV2ZW50LCB7IGRhdGVJbnB1dFN1cHBvcnRlZDogdHJ1ZSwgdGltZUlucHV0U3VwcG9ydGVkOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmNoZWNrSWZIdG1sNVN1cHBvcnRlZCgpO1xuICAgIH1cblxuICAgIGNoZWNrSWZIdG1sNVN1cHBvcnRlZCgpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9ydGVkSW5wdXRUeXBlcyA9IFsnZGF0ZScsICd0aW1lJ107XG4gICAgICAgIGNvbnN0IHRlc3RSZXN1bHQgPSB7fTtcbiAgICAgICAgY29uc3QgdGVzdFN0cmluZyA9ICd0ZXN0ISc7XG5cbiAgICAgICAgXy5lYWNoKHN1cHBvcnRlZElucHV0VHlwZXMsIChpbnB1dFR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHRlc3RTdHJpbmc7XG4gICAgICAgICAgICBjb25zdCBpc1N1cHBvcnRlZCA9IGlucHV0LnZhbHVlICE9PSB0ZXN0U3RyaW5nO1xuICAgICAgICAgICAgdGVzdFJlc3VsdFtpbnB1dFR5cGUgKyAnSW5wdXRTdXBwb3J0ZWQnXSA9IGlzU3VwcG9ydGVkO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHRlc3RSZXN1bHQpO1xuICAgIH1cblxuICAgIG9uVHlwZUlkQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHlwZUlkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25Ob25TdXBwb3J0ZWRJbnB1dENoYW5nZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIG9uRGF0ZUNoYW5nZSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZS5zcGxpdCgnLScpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgeWVhcjogdmFsWzBdLCBtb250aDogdmFsWzFdLCBkYXk6IHZhbFsyXSB9KTtcbiAgICB9O1xuXG4gICAgb25UaW1lQ2hhbmdlID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBob3VyOiB2YWxbMF0sIG1pbnV0ZTogdmFsWzFdIH0pO1xuICAgIH07XG5cbiAgICBvbkdhbWVTdGF0dXNDaGFuZ2UgPSBlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzdGF0dXM6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpc0Zvcm1WYWxpZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudHlwZUlkICE9PSAnJztcbiAgICB9O1xuXG4gICAgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWUgPSBfLm9taXQodGhpcy5zdGF0ZSwgWyd0aW1lSW5wdXRTdXBwb3J0ZWQnLCAnZGF0ZUlucHV0U3VwcG9ydGVkJ10pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5nYW1lSWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlR2FtZSh0aGlzLnByb3BzLmdhbWVJZCwgZ2FtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZUdhbWUoZ2FtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9O1xuXG4gICAgb25SZW1vdmUgID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnJlbW92ZUdhbWUodGhpcy5wcm9wcy5nYW1lSWQpO1xuICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlQmFjaygpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybUZyYW1lXG4gICAgICAgICAgICAgICAgdGl0bGU9e1RyYW5zbGF0aW9ucy5VUERBVEVfR0FNRV9QQUdFLlRJVExFfSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gb25SZW1vdmU9e3RoaXMub25SZW1vdmV9IG9uQ2xvc2U9e3RoaXMucHJvcHMubmF2aWdhdGVCYWNrfSBkaXNhYmxlZD17IXRoaXMuaXNGb3JtVmFsaWQoKX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndXBkYXRlLWdhbWUtcGFnZSBsYXJnZS0xMSBsYXJnZS1jZW50ZXJlZCc+XG5cbiAgICAgICAgICAgICAgICAgICAgeyBjcmVhdGVHYW1lVGl0bGVTZWN0aW9uKHRoaXMuc3RhdGUudHlwZUlkLCB0aGlzLm9uVHlwZUlkQ2hhbmdlKSB9XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYXRlSW5wdXRTdXBwb3J0ZWQgJiYgdGhpcy5zdGF0ZS50aW1lSW5wdXRTdXBwb3J0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUluZm9XaXRoU3VwcG9ydGVkSW5wdXRzKHBhcnNlRGF0ZVZhbHVlKHRoaXMuc3RhdGUueWVhciwgdGhpcy5zdGF0ZS5tb250aCwgdGhpcy5zdGF0ZS5kYXkpLCBwYXJzZVRpbWVWYWx1ZSh0aGlzLnN0YXRlLmhvdXIsIHRoaXMuc3RhdGUubWludXRlKSwgdGhpcy5vbkRhdGVDaGFuZ2UsIHRoaXMub25UaW1lQ2hhbmdlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5mb1dpdGhvdXRTdXBwb3J0ZWRJbnB1dHModGhpcy5zdGF0ZS55ZWFyLCB0aGlzLnN0YXRlLm1vbnRoLCB0aGlzLnN0YXRlLmhvdXIsIHRoaXMuc3RhdGUubWludXRlLCB0aGlzLm9uTm9uU3VwcG9ydGVkSW5wdXRDaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB7IGNyZWF0ZUdhbWVTdGF0dXNTZWN0aW9uKHRoaXMuc3RhdGUuc3RhdHVzLCB0aGlzLm9uR2FtZVN0YXR1c0NoYW5nZSkgfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm1GcmFtZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblVwZGF0ZUdhbWVQYWdlLnByb3BUeXBlcyA9IHtcbiAgICBnYW1lOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGdhbWVJZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcmVhdGVHYW1lOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUdhbWU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbmF2aWdhdGVCYWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXBkYXRlR2FtZVBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VwZGF0ZUdhbWVQYWdlLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdXBkYXRlR2FtZVBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91cGRhdGVHYW1lUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdXBkYXRlR2FtZVBhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3VwZGF0ZUdhbWVQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnVwZGF0ZS1nYW1lLXBhZ2UgLmdhbWUtaW1nIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3VwZGF0ZUdhbWVQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zaXRlIHtcXG4gIGRpcmVjdGlvbjogcnRsOyB9XFxuICAuc2l0ZSAuc3BsaXQuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbiBpIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgICBsaW5lLWhlaWdodDogMTZweDsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmZhY2Vib29rIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24uZ29vZ2xlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZDUwZjI1OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24ubGVmdC1pY29uIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgICAgIC5zaXRlIC5zcGxpdC5idXR0b24ubGVmdC1pY29uIHNwYW4ge1xcbiAgICAgICAgbGVmdDogMDsgfVxcbiAgLnNpdGUgLmVycm9yLW1zZyB7XFxuICAgIGNvbG9yOiAjZDUwZjI1O1xcbiAgICBwYWRkaW5nOiAwIDE1cHggMTVweDsgfVxcbiAgICAuc2l0ZSAuZXJyb3ItbXNnIGkge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuICAuc2l0ZSBsYWJlbCB7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIC5zaXRlIC5tb3JlLXNwYWNlIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDsgfVxcbiAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmxpc3QtaXRlbTpudGgtY2hpbGQoZXZlbikge1xcbiAgICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5saXN0LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUuc21hbGwtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUgbGkgYSB7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudSBsaS5hY3RpdmUgYSB7XFxuICAgICAgYmFja2dyb3VuZDogI0QzMkYyRjtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudSBsaS5hY3RpdmU6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5zZWFyY2gge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMC45MzVlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuOTM1ZW07IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgdGV4dC1pbmRlbnQ6IDMwcHg7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLnNlYXJjaC1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAxMXB4O1xcbiAgICAgIHJpZ2h0OiAyOHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgY29sb3I6ICNjYWNhY2E7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDMyRjJGO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjI1cyBlYXNlLW91dCwgY29sb3IgLjI1cyBlYXNlLW91dDtcXG4gICAgICBwYWRkaW5nOiAuODVlbTtcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICB3aWR0aDogMy41cmVtO1xcbiAgICAgIGhlaWdodDogMy41cmVtO1xcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICBib3R0b206IDFyZW07IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG4uYmlnIHtcXG4gICAgICAgIGxlZnQ6IDI3JTsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bi5zbWFsbCB7XFxuICAgICAgICB3aWR0aDogMi41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgICAgICBsZWZ0OiA1JTsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDUwMDAwOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXItc3RhdHVzIHtcXG4gICAgICBjb2xvcjogIzQyNDI0MjtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXItc3RhdHVzIGkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDsgfVxcbiAgLnNpdGUgLmJ1dHRvbi5zdWNjZXNzW2Rpc2FibGVkXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyNWEzNWEgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpcmViYXNlXCI6IHtcblx0XHRcImFwaUtleVwiOiBcIkFJemFTeURFSVNWMmFNaWVQa3VlQ3dsRFI4Q1ZnN2hfQkxhM0pvY1wiLFxuXHRcdFwiYXV0aERvbWFpblwiOiBcImhhcG9lbGJ1cy1iMjVkNC5maXJlYmFzZWFwcC5jb21cIixcblx0XHRcImRhdGFiYXNlVVJMXCI6IFwiaHR0cHM6Ly9oYXBvZWxidXMtYjI1ZDQuZmlyZWJhc2Vpby5jb21cIixcblx0XHRcInN0b3JhZ2VCdWNrZXRcIjogXCJoYXBvZWxidXMtYjI1ZDQuYXBwc3BvdC5jb21cIlxuXHR9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29uZmlnL2NvbmZpZy5wcm9kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=