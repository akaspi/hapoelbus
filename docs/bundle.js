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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _root = __webpack_require__(3);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _config = __webpack_require__(93);
	
	var config = _interopRequireWildcard(_config);
	
	var _clientDB = __webpack_require__(29);
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _root = __webpack_require__(4);
	
	var _root2 = _interopRequireDefault(_root);
	
	var _makeStore = __webpack_require__(83);
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _app = __webpack_require__(8);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _reactRedux = __webpack_require__(6);
	
	var _authActions = __webpack_require__(64);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    authData: state.authData,
	    currentPage: state.currentPage
	  };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    fetchAuthData: function fetchAuthData() {
	      return dispatch((0, _authActions.fetchAuthData)());
	    }
	  };
	};
	
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
	      return _app2.default.apply(this);
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	App.propTypes = {
	  fetchAuthData: _react2.default.PropTypes.func.isRequired
	};
	
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(6),
	    __webpack_require__(34),
	    __webpack_require__(39),
	    __webpack_require__(56),
	    __webpack_require__(60),
	    __webpack_require__(9),
	    __webpack_require__(67),
	    __webpack_require__(71),
	    __webpack_require__(73),
	    __webpack_require__(78),
	    __webpack_require__(22),
	    __webpack_require__(81)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (React, _, ReactRedux, spinner, HomePage, UsersPage, AuthPage, EventsPage, BookingsPage, EditUserInfoPage, DistributionPage, TopBar, Constants, appCss) {
	    'use strict';
	    return function () {
	        return React.createElement('div', { 'className': 'site large-6 small-12 small-centered' }, React.createElement(spinner, {}), !this.props.authData ? React.createElement('div', {
	            'key': 'auth-page-container',
	            'className': 'small-centered'
	        }, this.props.currentPage === Constants.PAGES.AUTH.val ? React.createElement(AuthPage, { 'key': 'auth-page' }) : null) : null, this.props.authData ? React.createElement('div', {
	            'key': 'app-container',
	            'className': 'small-centered'
	        }, React.createElement(TopBar, {}), this.props.currentPage === Constants.PAGES.HOME.val ? React.createElement(HomePage, { 'key': 'home-page' }) : null, this.props.currentPage === Constants.PAGES.USERS.val ? React.createElement(UsersPage, { 'key': 'users-page' }) : null, this.props.currentPage === Constants.PAGES.EVENTS.val ? React.createElement(EventsPage, { 'key': 'events-page' }) : null, this.props.currentPage === Constants.PAGES.BOOKINGS.val ? React.createElement(BookingsPage, { 'key': 'bookings-page' }) : null, this.props.currentPage === Constants.PAGES.DISTRIBUTION.val ? React.createElement(DistributionPage, { 'key': 'distribution-page' }) : null, this.props.currentPage === Constants.PAGES.EDIT_USER_INFO.val ? React.createElement(EditUserInfoPage, { 'key': 'editUserInfoPage-page' }) : null) : null);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _pickEvents;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _eventsPage = __webpack_require__(10);
	
	var _eventsPage2 = _interopRequireDefault(_eventsPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _eventActions = __webpack_require__(27);
	
	var _constants = __webpack_require__(22);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(11),
	    __webpack_require__(16),
	    __webpack_require__(22),
	    __webpack_require__(25)
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	
	__webpack_require__(12);
	
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".list-item {\n  display: flex;\n  align-items: flex-start;\n  padding: 5px 10px 5px 10px; }\n  .list-item:first-child {\n    padding-top: 0; }\n  .list-item .list-image {\n    width: 40px;\n    height: 40px;\n    margin-top: 5px;\n    margin-left: 10px;\n    border-radius: 50%;\n    background: #ffffff;\n    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1); }\n  .list-item .list-titles {\n    flex: 1;\n    overflow: hidden; }\n    .list-item .list-titles .title.large-text {\n      font-size: 1.2em;\n      font-weight: bold; }\n    .list-item .list-titles .subtitle {\n      font-size: 0.80rem; }\n      .list-item .list-titles .subtitle.inline, .list-item .list-titles .subtitle.inline.show-for-print {\n        display: inline-block;\n        margin-left: 15px; }\n", ""]);
	
	// exports


/***/ },
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _eventForm = __webpack_require__(17);
	
	var _eventForm2 = _interopRequireDefault(_eventForm);
	
	var _constants = __webpack_require__(22);
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(18),
	    __webpack_require__(22),
	    __webpack_require__(23)
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	
	__webpack_require__(19);
	
	var formFrameTranslations = __webpack_require__(21);
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".form-frame .content {\n  margin-top: 20px; }\n\n.form-frame .action-buttons {\n  margin-top: 10px; }\n  .form-frame .action-buttons .button i {\n    margin-right: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  SUBMIT: 'שמור',
	  REMOVE: 'מחק'
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "formFrameTranslations.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".event-form .event-pic {\n  width: 64px;\n  height: 64px;\n  background: #FFFFFF;\n  border-radius: 50%;\n  padding: 10px;\n  margin-top: 10px;\n  margin-left: 15px; }\n", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".events-page .filtering {\n  margin-bottom: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeEvent = exports.updateEvent = exports.createEvent = exports.fetchEvents = exports.eventsReceived = exports.eventRemoved = undefined;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(28);
	
	var _clientDB = __webpack_require__(29);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(32);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(33);
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getLoggedInUser = exports.signOut = exports.createUserWithEmailAndPassword = exports.sendPasswordResetEmail = exports.loginWithEmailAndPassword = exports.loginWithFacebook = exports.loginWithGoogle = exports.remove = exports.update = exports.push = exports.read = exports.setIn = exports.initialize = undefined;
	
	var _firebase = __webpack_require__(30);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	var _bluebird = __webpack_require__(31);
	
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
/* 30 */
/***/ function(module, exports) {

	module.exports = firebase;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = Promise;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.stopLoading = exports.startLoading = undefined;
	
	var _actionTypes = __webpack_require__(28);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reportError = undefined;
	
	var _actionTypes = __webpack_require__(28);
	
	var _constants = __webpack_require__(22);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	var classNames = __webpack_require__(35);
	
	__webpack_require__(36);
	
	var Logo = __webpack_require__(38);
	
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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".spinner-container .overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #fff;\n  z-index: 1000; }\n  .spinner-container .overlay .spinner {\n    margin: 150px auto 0;\n    width: 110px;\n    text-align: center; }\n    .spinner-container .overlay .spinner .logo {\n      margin-bottom: 10px;\n      opacity: 0.7; }\n    .spinner-container .overlay .spinner > div {\n      width: 12px;\n      height: 12px;\n      margin: 0 2px;\n      background-color: #333;\n      opacity: 0.8;\n      border-radius: 100%;\n      display: inline-block;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n    .spinner-container .overlay .spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s; }\n    .spinner-container .overlay .spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);
	
	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _homePage = __webpack_require__(40);
	
	var _homePage2 = _interopRequireDefault(_homePage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _constants = __webpack_require__(22);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _bookingActions = __webpack_require__(55);
	
	var _userActions = __webpack_require__(52);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var teamsData = __webpack_require__(44);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(41),
	    __webpack_require__(47),
	    __webpack_require__(49),
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	
	var gamesConstants = __webpack_require__(42);
	var bookingsConstants = __webpack_require__(43);
	var teamsData = __webpack_require__(44);
	
	__webpack_require__(45);
	
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".event-item {\n  font-size: 0.9em; }\n  .event-item:first-child {\n    padding-top: 0; }\n  .event-item .groups-images .separator {\n    margin-right: 5px; }\n  .event-item .event-image {\n    border-radius: 50%;\n    background: #ffffff; }\n    .event-item .event-image.big {\n      margin-bottom: 10px;\n      width: 90px;\n      height: 90px; }\n    .event-item .event-image.small {\n      margin: 0 5px;\n      width: 40px;\n      height: 40px; }\n  .event-item .groups-names {\n    padding: 0 4em; }\n  .event-item .event-info {\n    text-align: center;\n    margin-top: 10px; }\n    .event-item .event-info.colored {\n      font-size: 1.1em;\n      font-weight: bold;\n      margin-bottom: 10px; }\n    .event-item .event-info .event-status {\n      color: #D32F2F; }\n    .event-item .event-info span {\n      margin: 0 15px; }\n  .event-item .action-buttons {\n    margin-right: auto;\n    margin-top: 5px; }\n    .event-item .action-buttons .button.small {\n      font-size: 0.75rem;\n      margin: 0 5px; }\n    .event-item .action-buttons .button i {\n      margin-right: 5px; }\n", ""]);
	
	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bookingForm = __webpack_require__(48);
	
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(18),
	    __webpack_require__(22)
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	
	var FormFrame = __webpack_require__(18);
	
	var userInfoConstants = __webpack_require__(50);
	var userFormTranslations = __webpack_require__(51);
	var userActions = __webpack_require__(52);
	
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  MAX_SEASON_TICKETS: 7,
	  PHONE_PREFIXES: ['050', '052', '053', '054', '055', '057', '058'],
	  STATIONS: ['modiin', 'tlv']
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "userInfoConstants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeUser = exports.updateUser = exports.fetchUsers = exports.usersReceived = exports.usersRemoved = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(28);
	
	var _bluebird = __webpack_require__(31);
	
	var _clientDB = __webpack_require__(29);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(32);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(33);
	
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".home-page .events {\n  margin-top: 10px; }\n  @media screen and (max-width: 39.9375em) {\n    .home-page .events {\n      margin-top: 0px; } }\n\n.home-page .open-events {\n  margin-bottom: 25px; }\n\n.home-page .events-list h6 {\n  font-weight: bold; }\n\n.home-page .no-bookings {\n  font-size: 1.2em;\n  text-align: center;\n  color: #424242; }\n  .home-page .no-bookings i {\n    margin-right: 10px; }\n\n.home-page .event-item {\n  padding: 5px 0; }\n  @media screen and (max-width: 39.9375em) {\n    .home-page .event-item {\n      padding: 15px 0 30px 0; } }\n  .home-page .event-item:nth-child(even) {\n    background: #EEEEEE; }\n  .home-page .event-item:nth-child(odd) {\n    background: #E0E0E0; }\n", ""]);
	
	// exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cancelBooking = exports.updateBooking = exports.fetchBookings = exports.bookingsCanceled = exports.bookingsReceived = undefined;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(28);
	
	var _clientDB = __webpack_require__(29);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(32);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(33);
	
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _usersPage = __webpack_require__(57);
	
	var _usersPage2 = _interopRequireDefault(_usersPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _userActions = __webpack_require__(52);
	
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(11),
	    __webpack_require__(49),
	    __webpack_require__(58)
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _authPage = __webpack_require__(61);
	
	var _authPage2 = _interopRequireDefault(_authPage);
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _reactRedux = __webpack_require__(6);
	
	var _constants = __webpack_require__(22);
	
	var constants = _interopRequireWildcard(_constants);
	
	var _authActions = __webpack_require__(64);
	
	var _errorActions = __webpack_require__(33);
	
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(62),
	    __webpack_require__(38)
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".auth-form-container .logo {\n  margin: 20px auto 35px;\n  width: 160px;\n  height: 160px; }\n\n.auth-form-container .auth-form {\n  text-align: center; }\n\n.auth-form-container .hr {\n  margin: 0.7em auto !important; }\n\n.auth-form-container .red-link {\n  text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchAuthData = exports.sendPasswordResetEmail = exports.createUserWithEmailAndPassword = exports.loginWithEmailAndPassword = exports.loginWithGoogle = exports.loginWithFacebook = exports.signOut = exports.userSignedOut = exports.setAuthData = exports.AUTH_ERROR_CODES_MAP = undefined;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(28);
	
	var _bluebird = __webpack_require__(31);
	
	var _constants = __webpack_require__(22);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _clientDB = __webpack_require__(29);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _userActions = __webpack_require__(52);
	
	var userActions = _interopRequireWildcard(_userActions);
	
	var _eventActions = __webpack_require__(27);
	
	var eventActions = _interopRequireWildcard(_eventActions);
	
	var _bookingActions = __webpack_require__(55);
	
	var bookingActions = _interopRequireWildcard(_bookingActions);
	
	var _loadingActions = __webpack_require__(32);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(33);
	
	var errorActions = _interopRequireWildcard(_errorActions);
	
	var _navigationActions = __webpack_require__(65);
	
	var navigationActions = _interopRequireWildcard(_navigationActions);
	
	var _updatePhotoUrlFixer = __webpack_require__(66);
	
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.navigateTo = undefined;
	
	var _actionTypes = __webpack_require__(28);
	
	var navigateTo = exports.navigateTo = function navigateTo(page) {
	  return {
	    type: _actionTypes.NAVIGATE_TO,
	    page: page
	  };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "navigationActions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
	
	var _userActions = __webpack_require__(52);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "updatePhotoUrlFixer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bookingsPage = __webpack_require__(68);
	
	var _bookingsPage2 = _interopRequireDefault(_bookingsPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _constants = __webpack_require__(22);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _bookingActions = __webpack_require__(55);
	
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(11),
	    __webpack_require__(47),
	    __webpack_require__(22),
	    __webpack_require__(69)
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".bookings-page h5 {\n  font-weight: bold;\n  background: #CFD8DC;\n  color: #37474F;\n  padding: 5px;\n  margin-bottom: 0; }\n\n.bookings-page h6 {\n  padding: 5px 10px;\n  background: #ECEFF1;\n  margin-bottom: 0; }\n\n.bookings-page .table-sub {\n  font-weight: bold;\n  border-bottom: 2px solid #222222; }\n\n.bookings-page table tbody, .bookings-page table tfoot, .bookings-page table thead {\n  border: 1px solid #222222; }\n", ""]);
	
	// exports


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	
	var UserForm = __webpack_require__(49);
	
	var navigationActions = __webpack_require__(65);
	var navigationConstants = __webpack_require__(72);
	
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _distributionPage = __webpack_require__(74);
	
	var _distributionPage2 = _interopRequireDefault(_distributionPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _distributionActions = __webpack_require__(77);
	
	var _constants = __webpack_require__(22);
	
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(22),
	    __webpack_require__(75)
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".distribution-page .button i {\n  margin-right: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sendSMS = exports.sendCustomEmail = exports.sendTemplateEmail = undefined;
	
	var _clientDB = __webpack_require__(29);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(32);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(33);
	
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(5);
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	var classNames = __webpack_require__(35);
	
	var navigationConstants = __webpack_require__(72);
	
	var navigationActions = __webpack_require__(65);
	var authActions = __webpack_require__(64);
	
	__webpack_require__(79);
	
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".top-bar {\n  background: #222222;\n  color: #FFFFFF; }\n  .top-bar span {\n    cursor: default; }\n  .top-bar .user-info {\n    font-size: 0.85rem; }\n  .top-bar .small-menu {\n    background: #D50000;\n    margin-top: 0.5em;\n    margin-left: 0.5em; }\n  .top-bar .menu {\n    margin-top: 0.6rem; }\n    .top-bar .menu .button {\n      color: #FFFFFF;\n      background: none; }\n      .top-bar .menu .button.small {\n        font-size: 0.85rem; }\n      .top-bar .menu .button:hover {\n        color: #D32F2F; }\n      .top-bar .menu .button.active {\n        background: #D32F2F;\n        font-weight: bold; }\n        .top-bar .menu .button.active:hover {\n          color: #FFFFFF; }\n  .top-bar .avatar {\n    width: 2.5rem;\n    background: #fff;\n    border-radius: 50%;\n    margin: 10px;\n    cursor: pointer; }\n  .top-bar .disconnect {\n    color: #F44336; }\n    .top-bar .disconnect:hover {\n      text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".site {\n  direction: rtl; }\n  .site .split.button {\n    width: 100%;\n    font-size: 16px;\n    line-height: 16px; }\n    .site .split.button i {\n      font-size: 20px;\n      padding-right: 10px;\n      line-height: 16px; }\n    .site .split.button.facebook {\n      background: #3b5998; }\n    .site .split.button.google {\n      background: #d50f25; }\n    .site .split.button.left-icon {\n      text-align: right; }\n      .site .split.button.left-icon span {\n        left: 0; }\n  .site .error-msg {\n    color: #d50f25;\n    padding: 0 15px 15px; }\n    .site .error-msg i {\n      margin-left: 10px; }\n  .site label {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .site .more-space {\n    margin-top: 25px; }\n  .site .header {\n    background: #EF5350;\n    border-bottom: 8px solid #D32F2F;\n    color: #ffffff;\n    height: 3.3em;\n    padding: 0 10px 0 10px;\n    display: flex;\n    align-items: center; }\n    .site .header .header-title {\n      font-size: 1rem;\n      font-weight: bold;\n      color: #ffffff;\n      flex: 1; }\n  .site .back-btn {\n    width: 20px; }\n  .site .dashboard-page {\n    position: relative;\n    background: #F5F5F5;\n    min-height: 100vh; }\n    .site .dashboard-page .list-item:nth-child(even) {\n      background: #EEEEEE; }\n    .site .dashboard-page .list-item:nth-child(odd) {\n      background: #E0E0E0; }\n    @media screen and (max-width: 39.9375em) {\n      .site .dashboard-page .filtering .menu.small-text {\n        font-size: 0.9em;\n        text-align: center; } }\n    .site .dashboard-page .filtering .menu li a {\n      padding: 1rem;\n      color: #D32F2F; }\n    .site .dashboard-page .filtering .menu li.active a {\n      background: #D32F2F;\n      color: #FFFFFF; }\n    .site .dashboard-page .filtering .menu li.active:hover {\n      color: #FFFFFF; }\n    .site .dashboard-page .filtering .search {\n      position: relative;\n      margin-top: 5px;\n      padding-right: 0.935em;\n      padding-left: 0.935em; }\n    .site .dashboard-page .filtering .search-input {\n      text-indent: 30px; }\n    .site .dashboard-page .filtering .search-icon {\n      position: absolute;\n      top: 11px;\n      right: 28px;\n      font-size: 0.8em;\n      color: #cacaca; }\n    .site .dashboard-page .add-btn {\n      background-color: #D32F2F;\n      box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n      cursor: pointer;\n      border-radius: 50%;\n      font-size: 1em;\n      font-weight: bold;\n      line-height: 0;\n      outline: none;\n      transition: background-color .25s ease-out, color .25s ease-out;\n      padding: .85em;\n      color: #ffffff;\n      width: 3.5rem;\n      height: 3.5rem;\n      position: fixed;\n      bottom: 1rem; }\n      .site .dashboard-page .add-btn.big {\n        left: 27%; }\n      .site .dashboard-page .add-btn.small {\n        width: 2.5rem;\n        height: 2.5rem;\n        left: 5%; }\n      .site .dashboard-page .add-btn:hover {\n        background: #D50000; }\n      .site .dashboard-page .add-btn:focus {\n        outline: none; }\n    .site .dashboard-page .filter-status {\n      color: #424242;\n      font-size: 1rem;\n      text-align: center; }\n      .site .dashboard-page .filter-status i {\n        margin-left: 5px; }\n  .site .button.success[disabled]:hover {\n    background: #25a35a !important; }\n", ""]);
	
	// exports


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeStore = undefined;
	
	var _redux = __webpack_require__(84);
	
	var _errorReducer = __webpack_require__(85);
	
	var _errorReducer2 = _interopRequireDefault(_errorReducer);
	
	var _loadingReducer = __webpack_require__(86);
	
	var _loadingReducer2 = _interopRequireDefault(_loadingReducer);
	
	var _usersReducer = __webpack_require__(87);
	
	var _usersReducer2 = _interopRequireDefault(_usersReducer);
	
	var _eventsReducer = __webpack_require__(88);
	
	var _eventsReducer2 = _interopRequireDefault(_eventsReducer);
	
	var _bookingsReducer = __webpack_require__(89);
	
	var _bookingsReducer2 = _interopRequireDefault(_bookingsReducer);
	
	var _authDataReducer = __webpack_require__(90);
	
	var _authDataReducer2 = _interopRequireDefault(_authDataReducer);
	
	var _navigationReducer = __webpack_require__(91);
	
	var _navigationReducer2 = _interopRequireDefault(_navigationReducer);
	
	var _reduxThunk = __webpack_require__(92);
	
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
/* 84 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = errorReducer;
	
	var _actionTypes = __webpack_require__(28);
	
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = loadingReducer;
	
	var _actionTypes = __webpack_require__(28);
	
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = usersReducer;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(28);
	
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = eventsReducer;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(28);
	
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = eventsReducer;
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _actionTypes = __webpack_require__(28);
	
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = authDataReducer;
	
	var _actionTypes = __webpack_require__(28);
	
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = navigationReducer;
	
	var _constants = __webpack_require__(22);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _actionTypes = __webpack_require__(28);
	
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
/* 92 */
/***/ function(module, exports) {

	module.exports = ReduxThunk;

/***/ },
/* 93 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjYwYTFiYjg4N2FiM2Y4ZjEyN2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb290L3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LnJ0Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2Nzcz8yMjlmIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0ucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybUZyYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzPzI1ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL2Zvcm1GcmFtZVRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2Nzcz83OTVkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2Uuc2Nzcz9jOWYwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbG9hZGluZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NwaW5uZXIuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2Nzcz9jYWM0Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dhbWVDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Jvb2tpbmdzQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90ZWFtc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzcz8yZGQ0Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ0Zvcm0vYm9va2luZ0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ0Zvcm0vYm9va2luZ0Zvcm0ucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlckZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy91c2VySW5mb0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL3VzZXJGb3JtVHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnNjc3M/OGI1OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5ydCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLnNjc3M/MTQ0YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2Uuc2Nzcz84MjNiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbmF2aWdhdGlvbkFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFGaXhlcnMvdXBkYXRlUGhvdG9VcmxGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5zY3NzP2IzZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VkaXRVc2VySW5mb1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnNjc3M/YTg4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9kaXN0cmlidXRpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90b3BCYXIuc2Nzcz8zNDJlIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5zY3NzP2RmMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9tYWtlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvbmF2aWdhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVkdXhUaHVua1wiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvY29uZmlnLnByb2QuanNvbiJdLCJuYW1lcyI6WyJjb25maWciLCJjbGllbnREQiIsImluaXRpYWxpemUiLCJmaXJlYmFzZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUm9vdCIsImFwcGx5IiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1hcFN0YXRlVG9Qcm9wcyIsImF1dGhEYXRhIiwic3RhdGUiLCJjdXJyZW50UGFnZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBdXRoRGF0YSIsIkFwcCIsInByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJfIiwiQ29uc3RhbnRzIiwicGlja0V2ZW50cyIsIkFMTCIsImV2ZW50Iiwic3RhdHVzIiwiRVZFTlRTX1NUQVRVUyIsIk9QRU5fRk9SX0FMTCIsInZhbHVlIiwiT1BFTl9GT1JfTUVNQkVSUyIsIkNMT1NFRCIsImdldFN0YXR1c1N1YnRpdGxlIiwiZXZlbnRTdGF0dXMiLCJmaW5kIiwibmFtZSIsImV2ZW50cyIsImNyZWF0ZUV2ZW50IiwidXBkYXRlRXZlbnQiLCJldmVudElkIiwicmVtb3ZlRXZlbnQiLCJFdmVudHNQYWdlIiwiZWRpdGluZ0V2ZW50SWQiLCJjcmVhdGVNb2RlIiwiZmlsdGVyIiwiY2hhaW4iLCJwaWNrQnkiLCJtYXAiLCJzZXRTdGF0ZSIsIkVWRU5UU19UWVBFUyIsInR5cGVJZCIsImRheSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJtaW51dGUiLCJldmVudFR5cGUiLCJzcmMiLCJzdG9wRWRpdGluZyIsIm9iamVjdCIsInJlcXVpcmUiLCJSZWFjdCIsIkxpc3RJdGVtIiwib25DbGljayIsImltYWdlU3JjIiwidGl0bGUiLCJzdWJ0aXRsZXMiLCJzdWJ0aXRsZSIsImtleSIsInN0cmluZyIsImFycmF5IiwiZW1wdHlFdmVudCIsImV2ZW50Rm9ybSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJvblN1Ym1pdCIsIm9uUmVtb3ZlRXZlbnQiLCJvbkNsb3NlIiwiaXNBZG1pbk1vZGUiLCJib29sIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZGVmYXVsdHMiLCJkYXRlSW5wdXRTdXBwb3J0ZWQiLCJ0aW1lSW5wdXRTdXBwb3J0ZWQiLCJjb21wb25lbnREaWRNb3VudCIsImNoZWNrSWZIdG1sNVN1cHBvcnRlZCIsIm9uQ2hhbmdlIiwiZSIsInZhbGlkYXRpb25UeXBlIiwidGFyZ2V0IiwidGVzdCIsImdldEV2ZW50UGljdHVyZSIsImdldCIsIkVWRU5UX0RFRkFVTFRfUElDIiwiZ2V0VGltZVZhbHVlIiwicGljayIsImpvaW4iLCJvblRpbWVDaGFuZ2UiLCJ2YWwiLCJzcGxpdCIsImdldERhdGVWYWx1ZSIsIm9uTnVtZXJpY0NoYW5nZSIsInRvTnVtYmVyIiwic3VwcG9ydGVkSW5wdXRUeXBlcyIsInRlc3RSZXN1bHQiLCJ0ZXN0U3RyaW5nIiwiZWFjaCIsImlucHV0VHlwZSIsImlucHV0IiwidHlwZSIsImlzU3VwcG9ydGVkIiwib25EYXRlQ2hhbmdlIiwib25Cb29sZWFuQ2hhbmdlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJpc0Zvcm1WYWxpZCIsIm9taXQiLCJmb3JtRnJhbWVUcmFuc2xhdGlvbnMiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVCYWNrQnV0dG9uIiwiaXNGdW5jdGlvbiIsImNyZWF0ZUFjdGlvbnNCdXR0b25zIiwiZGlzYWJsZWQiLCJvblJlbW92ZSIsImNyZWF0ZVJlbW92ZUJ1dHRvbiIsIlJFTU9WRSIsIlNVQk1JVCIsIkZvcm1GcmFtZSIsImNoaWxkcmVuIiwiRVJST1JTIiwiR0VORVJBTCIsIklOVkFMSURfTUFJTCIsIldFQUtfUEFTU1dPUkQiLCJFTUFJTF9JTl9VU0UiLCJXUk9OR19QQVNTV09SRCIsIk5PVF9TQU1FX1BBU1NXT1JEIiwiVVNFUl9OT1RfRk9VTkQiLCJEQVRFX1RJTUVfREFUQSIsImRheXMiLCJtb250aHMiLCJ5ZWFycyIsImhvdXJzIiwibWludXRlcyIsIlNUQVRJT05TIiwibW9kaWluIiwidGx2IiwiTUFYX1NFQVNPTl9USUNLRVRTIiwiTUFYX0VYVFJBX1BBU1NFTkdFUlMiLCJQSE9ORV9QUkVGSVhFUyIsIlBBR0VTIiwiSE9NRSIsInZpc2libGUiLCJBVVRIIiwiVVNFUlMiLCJFVkVOVFMiLCJCT09LSU5HUyIsIkRJU1RSSUJVVElPTiIsIkVESVRfVVNFUl9JTkZPIiwiRlVMTFlfQk9PS0VEIiwiUkVDSVBJRU5UUyIsIk1FTUJFUlNfT05MWSIsIkJPT0tFRF9UT19FVkVOVCIsIk1FVEhPRFMiLCJFTUFJTCIsIlNNUyIsIlRZUEVTIiwiVEVNUExBVEUiLCJDVVNUT00iLCJURU1QTEFURVMiLCJFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTIiwiaWQiLCJFVkVOVF9PUEVOX0ZPUl9BTEwiLCJDSEFOR0VfRVZFTlRfREVUQUlMUyIsImxvYWRpbmdBY3Rpb25zIiwiZXJyb3JBY3Rpb25zIiwiRVZFTlRfS0VZUyIsIkVWRU5UU19QQVRIIiwiZXZlbnRSZW1vdmVkIiwiZXZlbnRzUmVjZWl2ZWQiLCJmZXRjaEV2ZW50cyIsInJlYWQiLCJ0aGVuIiwic3RhcnRMb2FkaW5nIiwicHVzaCIsImNhdGNoIiwicmVwb3J0RXJyb3IiLCJmaW5hbGx5Iiwic3RvcExvYWRpbmciLCJldmVudFRvVXBkYXRlIiwidXBkYXRlIiwicmVtb3ZlIiwiU1RBUlRfTE9BRElORyIsIlNUT1BfTE9BRElORyIsIlJFUE9SVF9FUlJPUiIsIlNFVF9BVVRIX0RBVEEiLCJTSUdOX09VVCIsIlVTRVJTX1JFQ0VJVkVEIiwiVVNFUl9SRU1PVkVEIiwiRVZFTlRTX1JFQ0VJVkVEIiwiRVZFTlRfUkVNT1ZFRCIsIkJPT0tJTkdTX1JFQ0VJVkVEIiwiQk9PS0lOR19DQU5DRUxFRCIsIk5BVklHQVRFX1RPIiwiaW5pdGlhbGl6ZUFwcCIsInNldEluIiwicGF0aCIsImRhdGEiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YWJhc2UiLCJyZWYiLCJzZXQiLCJvbmNlIiwic25hcHNob3QiLCJ1bmlxdWVLZXkiLCJsb2dpbldpdGhHb29nbGUiLCJwcm92aWRlciIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJsb2dpbldpdGhGYWNlYm9vayIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwibG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiZ2V0TG9nZ2VkSW5Vc2VyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXN1bHQiLCJ1c2VyIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm1lc3NhZ2UiLCJSZWFjdFJlZHV4IiwiY2xhc3NOYW1lcyIsIkxvZ28iLCJpc0xvYWRpbmciLCJsb2FkaW5nIiwiU3Bpbm5lciIsIm92ZXJsYXlDbGFzcyIsIm92ZXJsYXkiLCJoaWRlIiwiY29ubmVjdCIsIndpZHRoIiwib3BhY2l0eSIsIm51bWJlciIsImhlaWdodCIsInRlYW1zRGF0YSIsInBhcnNlRXZlbnREYXRlIiwiZXZlbnREYXRlIiwiRGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJpc0Z1dHVyZUV2ZW50Iiwibm93IiwidXNlcnMiLCJib29raW5ncyIsInVwZGF0ZUJvb2tpbmciLCJ1aWQiLCJib29raW5nIiwiY2FuY2VsQm9va2luZyIsInVwZGF0ZVVzZXIiLCJIb21lUGFnZSIsIm9taXRCeSIsInNvcnRCeSIsImV2ZW50RGF0YSIsInNlYXNvblRpY2tldHMiLCJ1c2VyQm9va2luZ3MiLCJoYXMiLCJwaG90b1VSTCIsIkhBUE9FTF9KRVJVU0FMRU0iLCJnYW1lc0NvbnN0YW50cyIsImJvb2tpbmdzQ29uc3RhbnRzIiwiaXNCb29raW5nRW5hYmxlZCIsIlNUQVRVUyIsIm93blByb3BzIiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsImRhdGUiLCJ0aW1lIiwiaXNCb29raW5nQWxsb3dlZCIsImlzQm9va2VkIiwiaGFzSW4iLCJjcmVhdGVUZWFtTG9nb3MiLCJob21lIiwiYXdheSIsImxvZ28iLCJsYWJlbCIsImNyZWF0ZUV2ZW50VGltZUFuZERhdGUiLCJpc09wZW5Gb3JCb29raW5nIiwiY3JlYXRlRnVsbHlCb29rZWRMYWJlbCIsIlRSQU5TTEFUSU9OUyIsImZ1bGx5Qm9va2VkIiwiY3JlYXRlQm9va2luZ0J1dHRvbiIsIm9uQm9va2luZyIsImJvb2tCdXR0b24iLCJib29rIiwiZWRpdEJvb2tpbmdCdXR0b24iLCJlZGl0Qm9va2luZyIsImNyZWF0ZUJvb2tpbmdDYW5jZWxsYXRpb25CdXR0b24iLCJvbkNhbmNlbEJvb2tpbmciLCJFdmVudEl0ZW0iLCJpc0Z1bGx5Qm9va2VkIiwic2hhcGUiLCJjbG9zZWQiLCJvcGVuRm9yTWVtYmVycyIsIm9wZW5Gb3JBbGwiLCJlbXB0eUJvb2tpbmciLCJwYWlkU2VhdHMiLCJleHRyYVNlYXRzIiwicGlja1VwIiwiZHJvcE9mZiIsImJvb2tpbmdGb3JtIiwib25Cb29raW5nQ2FuY2VsIiwibWVyZ2UiLCJwaWNrVXBFbmFibGVkIiwiZHJvcE9mZkVuYWJsZWQiLCJ0b2dnbGVQaWNrVXAiLCJ0b2dnbGVEcm9wT2ZmIiwiYm9va2luZ1RvU3VibWl0Iiwia2V5cyIsInVzZXJJbmZvQ29uc3RhbnRzIiwidXNlckZvcm1UcmFuc2xhdGlvbnMiLCJ1c2VyQWN0aW9ucyIsImVtcHR5VXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGhvbmVQcmVmaXgiLCJwaG9uZU51bWJlciIsInN0YXRpb24iLCJzdWJzY3JpYmVTTVMiLCJzdWJzY3JpYmVNYWlsIiwiZ2V0RW1wdHlVc2VySW5mbyIsImFzc2lnbiIsInVzZXJJbmZvIiwiaXNBZG1pbiIsImFsbG93VXNlclJlbW92ZSIsInJlbW92ZVVzZXIiLCJjcmVhdGVBZG1pblNlY3Rpb24iLCJvbk51bWJlckNoYW5nZSIsInRpbWVzIiwiaSIsImNyZWF0ZVVzZXJOYW1lSW5wdXRzIiwib25UZXh0Q2hhbmdlIiwiRklSU1RfTkFNRSIsIkxBU1RfTkFNRSIsImNyZWF0ZUVtYWlsSW5wdXQiLCJjcmVhdGVQaG9uZU51bWJlcklucHV0cyIsIlBIT05FX05VTUJFUiIsIlBIT05FX1BSRUZJWCIsInByZWZpeCIsImNyZWF0ZVBpY2t1cFN0YXRpb25Sb3ciLCJyZXF1ZXN0Rm9yTWVtYmVyc2hpcCIsImNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCIsIkZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OIiwiY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCIsIlJFUVVFU1RfRk9SX01FTUJFUlNISVAiLCJ1bmRlZmluZWQiLCJkaXNwbGF5IiwiY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzIiwiVE9HR0xFIiwiWUVTIiwiTk8iLCJVc2VyRm9ybSIsImhhc0FsbFJlcXVpcmVkSW5mbyIsInJlcXVpcmVkSW5mbyIsInNvbWUiLCJpc0VtcHR5IiwiaGFzVmFsaWRQaG9uZU51bWJlciIsImxlbmd0aCIsImhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkiLCJvbktleVByZXNzIiwicGFyc2VJbnQiLCJjbG9uZSIsImJpbmQiLCJUSVRMRSIsIlVTRVJfSU5GT19LRVlTIiwiUEFUSF9NQVAiLCJVU0VSU19JTkZPIiwiU0VBU09OX1RJQ0tFVFMiLCJidWlsZFVzZXIiLCJmZXRjaEFsbFVzZXJzIiwidXNlclJlYWRQcm9taXNlcyIsImFsbCIsInVzZXJzSW5mbyIsInRyYW5zZm9ybSIsImFjYyIsImluZm8iLCJmZXRjaFNpbmdsZVVzZXIiLCJ1c2Vyc1JlbW92ZWQiLCJ1c2Vyc1JlY2VpdmVkIiwiZmV0Y2hVc2VycyIsImdldFN0YXRlIiwiZmV0Y2hQcm9taXNlIiwidXNlclVwZGF0ZVByb21pc2VzIiwidXNlclJlbW92ZVByb21pc2VzIiwidXNlclBhdGgiLCJCT09LSU5HX0RBVEFfS0VZUyIsIkJPT0tJTkdTX1BBVEgiLCJmZXRjaFVzZXJCb29raW5ncyIsImZldGNoQWxsQm9va2luZ3MiLCJib29raW5nc1JlY2VpdmVkIiwiYm9va2luZ3NDYW5jZWxlZCIsImZldGNoQm9va2luZ3MiLCJib29raW5nRGF0YSIsImJvb2tpbmdEYXRhVG9VcGRhdGUiLCJwaWNrVXNlcnNGdW5jdGlvbnMiLCJNRU1CRVJTIiwiTk9OX01FTUJFUlMiLCJSRVFVRVNUUyIsIlVzZXJzUGFnZSIsImVkaXRpbmdVc2VySWQiLCJzZWFyY2hRdWVyeSIsInN0YXJ0c1dpdGgiLCJ2YWx1ZXMiLCJzdW1CeSIsInNpemUiLCJjb25zdGFudHMiLCJlcnJvck1zZyIsImxvZ2luV2l0aEVtYWlsIiwic2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZCIsIm1zZyIsIkF1dGhGb3JtIiwicGFzc3dvcmRBZ2FpbiIsImF1dGhNb2RlIiwiaXNMb2dpbk1vZGUiLCJnZXRCdXR0b25MYWJlbCIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiaXNTdWJtaXREaXNhYmxlZCIsImhhbmRsZVN1Ym1pdENsaWNrIiwiZ29Ub0xvZ2luIiwiZ29Ub1JlZ2lzdGVyIiwiZ29Ub0ZvcmdvdFBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVSZWdpc3RlciIsImlzRXF1YWwiLCJoYW5kbGVGb3Jnb3RQYXNzd29yZCIsImV2ZW50QWN0aW9ucyIsImJvb2tpbmdBY3Rpb25zIiwibmF2aWdhdGlvbkFjdGlvbnMiLCJBVVRIX0VSUk9SX0NPREVTX01BUCIsInNldEF1dGhEYXRhIiwiZmV0Y2hBcHBEYXRhIiwidXNlclNpZ25lZE91dCIsIm5hdmlnYXRlVG8iLCJkYkVycm9yIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsInBhZ2UiLCJnZXREcm9wT2ZmTWFwIiwiZ2V0UGlja1VwTWFwIiwiQm9va2luZ3NQYWdlIiwiZmluZEtleSIsImJvb2tpbmdGb3JFdmVudE1hcCIsIm1hcFZhbHVlcyIsImlzVW5kZWZpbmVkIiwiY3VycmVudEV2dCIsImdldEJvb2tpbmdQaG9uZSIsInZpc2libGVCb29raW5ncyIsImdldFZpc2libGVCb29raW5ncyIsInRsdlBpY2tVcHNQYWlkIiwidGx2UGlja1Vwc0V4dHJhIiwibW9kaWluUGlja1Vwc1BhaWQiLCJtb2RpaW5QaWNrVXBzRXh0cmEiLCJ0bHZEcm9wT2Zmc1BhaWQiLCJ0bHZEcm9wT2Zmc0V4dHJhIiwibW9kaWluRHJvcE9mZnNQYWlkIiwibW9kaWluRHJvcE9mZnNFeHRyYSIsIm5hdmlnYXRpb25Db25zdGFudHMiLCJwYWdlSWQiLCJFZGl0b3JVc2VySW5mb1BhZ2UiLCJvbkZvcm1DbG9zZSIsImRpc3RyaWJ1dGlvbiIsImdldE1lbWJlcnNVc2Vyc09ubHkiLCJnZXRCb29rZWRVc2Vyc09ubHkiLCJnZXRSZWNpcGllbnRzIiwicmVjaXBpZW50c1R5cGUiLCJyZWNpcGllbnRzVXNlcnMiLCJnZXRVc2Vyc0VtYWlscyIsInJlY2lwaWVudHMiLCJnZXRVc2Vyc1Bob25lTnVtYmVycyIsImdldEV2ZW50U3Vic3RpdHV0aW9ucyIsInByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQiLCJjb250ZW50IiwicmVwbGFjZSIsImRpc3RyaWJ1dGlvbk1ldGhvZCIsImRpc3RyaWJ1dGlvblR5cGUiLCJsYXN0IiwidGVtcGxhdGVJZCIsInN1YmplY3QiLCJzZW5kVGVtcGxhdGVFbWFpbCIsInN1YnN0aXR1dGlvbnMiLCJzZW5kQ3VzdG9tRW1haWwiLCJzZW5kU01TIiwiRGlzdHJpYnV0aW9uUGFnZSIsImdldE9wZW5FdmVudHMiLCJpc0Rpc3RyaWJ1dGlvblR5cGVWaXNpYmxlIiwiRU1BSUxTIiwidG8iLCJhdXRoQWN0aW9ucyIsImN1cnJlbnRVc2VyIiwiZ2V0VXNlclRpdGxlIiwiY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlIiwidG9nZ2xlTWVudVZpc2liaWxpdHkiLCJjcmVhdGVNZW51IiwicGFnZXMiLCJpc01lbnVWaXNpYmxlIiwiY3JlYXRlRGVza3RvcE1lbnVJdGVtIiwiaXRlbUNsYXNzZXMiLCJhY3RpdmUiLCJidXR0b24iLCJzbWFsbCIsImNyZWF0ZU1vYmlsZU1lbnVJdGVtIiwib25Nb2JpbGVNZW51Q2xpY2tlZCIsImNyZWF0ZURlc2t0b3BNZW51IiwiY3JlYXRlTW9iaWxlTWVudSIsIlRvcEJhciIsIm1ha2VTdG9yZSIsInJlZHVjZXJzIiwibWlkZGxld2FyZSIsImVycm9yUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsImxvYWRpbmdSZWR1Y2VyIiwidXNlcnNSZWR1Y2VyIiwiZXZlbnRzUmVkdWNlciIsImNsb25lZEJvb2tpbmdzIiwiY2xvbmVEZWVwIiwiYXV0aERhdGFSZWR1Y2VyIiwibmF2aWdhdGlvblJlZHVjZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7S0FBWUEsTTs7QUFDWjs7S0FBWUMsUTs7Ozs7O0FBRVpBLFVBQVNDLFVBQVQsQ0FBb0JGLE9BQU9HLFFBQTNCOztBQUVBLG9CQUFTQyxNQUFULENBQWdCLGdCQUFNQyxhQUFOLGdCQUFoQixFQUEyQ0MsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUEzQyxFOzs7Ozs7OztBQ1RBLHdCOzs7Ozs7QUNBQSwyQjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0tBRU1DLEk7Ozs7Ozs7Ozs7O21DQUNVO0FBQ1osY0FBTywyQkFBUDtBQUNEOzs7OEJBQ1E7QUFDUCxjQUFPLGVBQVNDLEtBQVQsQ0FBZSxJQUFmLENBQVA7QUFDRDs7OztH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Ozs7Ozs7Ozs7OzttQkNsQnVCNGdCLGU7O0FBSnhCOztBQUVBLEtBQU1QLGVBQWUsSUFBckI7O0FBRWUsVUFBU08sZUFBVCxHQUE0RDtBQUFBLE9BQW5DNWdCLEtBQW1DLHVFQUEzQnFnQixZQUEyQjtBQUFBLE9BQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFDekUsV0FBUUEsT0FBT25hLElBQWY7QUFDRTtBQUNFLGNBQU8sRUFBRXlKLEtBQUswUSxPQUFPMVEsR0FBZCxFQUFtQnZDLE9BQU9pVCxPQUFPalQsS0FBakMsRUFBd0NrRCxVQUFVK1AsT0FBTy9QLFFBQXpELEVBQW1Fa0UsU0FBUzZMLE9BQU83TCxPQUFuRixFQUFQO0FBQ0Y7QUFDRSxjQUFPNEwsWUFBUDtBQUNGO0FBQ0UsY0FBT3JnQixLQUFQO0FBTko7QUFRRCxFOzs7Ozs7Ozs7Ozs7Ozs7bUJDUnVCNmdCLGlCOztBQUx4Qjs7S0FBWWpnQixTOztBQUNaOzs7O0FBRUEsS0FBTXlmLGVBQWV6ZixVQUFVK0gsS0FBVixDQUFnQkcsSUFBaEIsQ0FBcUJ0RCxHQUExQzs7QUFFZSxVQUFTcWIsaUJBQVQsR0FBOEQ7QUFBQSxPQUFuQzdnQixLQUFtQyx1RUFBM0JxZ0IsWUFBMkI7QUFBQSxPQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQzNFLFdBQVFBLE9BQU9uYSxJQUFmO0FBQ0U7QUFDRSxjQUFPbWEsT0FBTzFFLElBQWQ7QUFDRjtBQUNFLGNBQU95RSxZQUFQO0FBQ0Y7QUFDRSxjQUFPcmdCLEtBQVA7QUFOSjtBQVFELEU7Ozs7Ozs7O0FDZEQsNkI7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjYwYTFiYjg4N2FiM2Y4ZjEyN2YiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUm9vdCBmcm9tICcuL2NvbXBvbmVudHMvcm9vdC9yb290JztcblxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJ2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuL3V0aWxzL2NsaWVudERCJztcblxuY2xpZW50REIuaW5pdGlhbGl6ZShjb25maWcuZmlyZWJhc2UpO1xuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChSb290KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcm9vdC5ydCc7XG5cbmltcG9ydCB7IG1ha2VTdG9yZSB9IGZyb20gJy4uLy4uL3JlZHV4L21ha2VTdG9yZSc7XG5cbmNsYXNzIFJvb3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjcmVhdGVTdG9yZSgpIHtcbiAgICByZXR1cm4gbWFrZVN0b3JlKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvb3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICdyZWFjdC1yZWR1eCcsXG4gICAgJy4uL2FwcC9hcHAnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIFJlYWN0UmVkdXgsIEFwcCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdFJlZHV4LlByb3ZpZGVyLCB7ICdzdG9yZSc6IHRoaXMuY3JlYXRlU3RvcmUoKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwge30pKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9yb290L3Jvb3QucnRcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiX1wiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0UmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXBwLnJ0JztcblxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZmV0Y2hBdXRoRGF0YSB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhdXRoRGF0YTogc3RhdGUuYXV0aERhdGEsXG4gIGN1cnJlbnRQYWdlOiBzdGF0ZS5jdXJyZW50UGFnZVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgZmV0Y2hBdXRoRGF0YTogKCkgPT4gZGlzcGF0Y2goZmV0Y2hBdXRoRGF0YSgpKVxufSk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoQXV0aERhdGEoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgZmV0Y2hBdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJ3JlYWN0LXJlZHV4JyxcbiAgICAnLi4vc3Bpbm5lcicsXG4gICAgJy4uL2hvbWVQYWdlL2hvbWVQYWdlJyxcbiAgICAnLi4vdXNlcnNQYWdlL3VzZXJzUGFnZScsXG4gICAgJy4uL2F1dGhQYWdlL2F1dGhQYWdlJyxcbiAgICAnLi4vZXZlbnRzUGFnZS9ldmVudHNQYWdlJyxcbiAgICAnLi4vYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZScsXG4gICAgJy4uL2VkaXRVc2VySW5mb1BhZ2UnLFxuICAgICcuLi9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2UnLFxuICAgICcuLi90b3BCYXInLFxuICAgICcuLi8uLi91dGlscy9jb25zdGFudHMnLFxuICAgICcuL2FwcC5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBSZWFjdFJlZHV4LCBzcGlubmVyLCBIb21lUGFnZSwgVXNlcnNQYWdlLCBBdXRoUGFnZSwgRXZlbnRzUGFnZSwgQm9va2luZ3NQYWdlLCBFZGl0VXNlckluZm9QYWdlLCBEaXN0cmlidXRpb25QYWdlLCBUb3BCYXIsIENvbnN0YW50cywgYXBwQ3NzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc2l0ZSBsYXJnZS02IHNtYWxsLTEyIHNtYWxsLWNlbnRlcmVkJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KHNwaW5uZXIsIHt9KSwgIXRoaXMucHJvcHMuYXV0aERhdGEgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAna2V5JzogJ2F1dGgtcGFnZS1jb250YWluZXInLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCdcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gQ29uc3RhbnRzLlBBR0VTLkFVVEgudmFsID8gUmVhY3QuY3JlYXRlRWxlbWVudChBdXRoUGFnZSwgeyAna2V5JzogJ2F1dGgtcGFnZScgfSkgOiBudWxsKSA6IG51bGwsIHRoaXMucHJvcHMuYXV0aERhdGEgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAna2V5JzogJ2FwcC1jb250YWluZXInLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChUb3BCYXIsIHt9KSwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gQ29uc3RhbnRzLlBBR0VTLkhPTUUudmFsID8gUmVhY3QuY3JlYXRlRWxlbWVudChIb21lUGFnZSwgeyAna2V5JzogJ2hvbWUtcGFnZScgfSkgOiBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSBDb25zdGFudHMuUEFHRVMuVVNFUlMudmFsID8gUmVhY3QuY3JlYXRlRWxlbWVudChVc2Vyc1BhZ2UsIHsgJ2tleSc6ICd1c2Vycy1wYWdlJyB9KSA6IG51bGwsIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5FVkVOVFMudmFsID8gUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudHNQYWdlLCB7ICdrZXknOiAnZXZlbnRzLXBhZ2UnIH0pIDogbnVsbCwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gQ29uc3RhbnRzLlBBR0VTLkJPT0tJTkdTLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va2luZ3NQYWdlLCB7ICdrZXknOiAnYm9va2luZ3MtcGFnZScgfSkgOiBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSBDb25zdGFudHMuUEFHRVMuRElTVFJJQlVUSU9OLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlzdHJpYnV0aW9uUGFnZSwgeyAna2V5JzogJ2Rpc3RyaWJ1dGlvbi1wYWdlJyB9KSA6IG51bGwsIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5FRElUX1VTRVJfSU5GTy52YWwgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEVkaXRVc2VySW5mb1BhZ2UsIHsgJ2tleSc6ICdlZGl0VXNlckluZm9QYWdlLXBhZ2UnIH0pIDogbnVsbCkgOiBudWxsKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnJ0XG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ldmVudHNQYWdlLnJ0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVFdmVudCwgdXBkYXRlRXZlbnQsIHJlbW92ZUV2ZW50IH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9ldmVudEFjdGlvbnMnO1xuXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuY29uc3QgcGlja0V2ZW50cyA9IHtcbiAgQUxMOiAoKSA9PiB0cnVlLFxuICBbJ09QRU4nXTogZXZlbnQgPT4gZXZlbnQuc3RhdHVzID09PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5PUEVOX0ZPUl9BTEwudmFsdWUgfHwgZXZlbnQuc3RhdHVzID09PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTLnZhbHVlLFxuICBbJ0NMT1NFRCddOiBldmVudCA9PiBldmVudC5zdGF0dXMgPT09IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLkNMT1NFRC52YWx1ZSxcbn07XG5cbmNvbnN0IGdldFN0YXR1c1N1YnRpdGxlID0gZXZlbnQgPT4ge1xuICBjb25zdCBldmVudFN0YXR1cyA9IF8uZmluZChDb25zdGFudHMuRVZFTlRTX1NUQVRVUywgeyB2YWx1ZTogZXZlbnQuc3RhdHVzIH0pO1xuICByZXR1cm4gZXZlbnRTdGF0dXMgPyBldmVudFN0YXR1cy5uYW1lIDogJyc7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGV2ZW50czogc3RhdGUuZXZlbnRzLFxuICBhdXRoRGF0YTogc3RhdGUuYXV0aERhdGFcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBjcmVhdGVFdmVudDogZXZlbnQgPT4gZGlzcGF0Y2goY3JlYXRlRXZlbnQoZXZlbnQpKSxcbiAgdXBkYXRlRXZlbnQ6IChldmVudElkLCBldmVudCkgPT4gZGlzcGF0Y2godXBkYXRlRXZlbnQoZXZlbnRJZCwgZXZlbnQpKSxcbiAgcmVtb3ZlRXZlbnQ6IChldmVudElkKSA9PiBkaXNwYXRjaChyZW1vdmVFdmVudChldmVudElkKSlcbn0pO1xuXG5jbGFzcyBFdmVudHNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRpbmdFdmVudElkOiBudWxsLFxuICAgICAgY3JlYXRlTW9kZTogZmFsc2UsXG4gICAgICBmaWx0ZXI6ICdPUEVOJ1xuICAgIH07XG4gIH1cblxuICBnZXRWaXNpYmxlRXZlbnRzKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMuZXZlbnRzKVxuICAgICAgLnBpY2tCeShwaWNrRXZlbnRzW3RoaXMuc3RhdGUuZmlsdGVyXSlcbiAgICAgIC5tYXAoKGV2ZW50LCBldmVudElkKSA9PiAoeyBldmVudElkLCBldmVudCB9KSlcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgZ2V0T3BlbkV2ZW50cygpIHtcbiAgICByZXR1cm4gXy5waWNrQnkodGhpcy5wcm9wcy5ldmVudHMsIHBpY2tFdmVudHNbJ09QRU4nXSk7XG4gIH1cblxuICBnZXRDbG9zZWRFdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KHRoaXMucHJvcHMuZXZlbnRzLCBwaWNrRXZlbnRzWydDTE9TRUQnXSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZmlsdGVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlciB9KTtcbiAgfVxuXG4gIGdldEV2ZW50VGl0bGUoZXZlbnQpIHtcbiAgICByZXR1cm4gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLm5hbWU7XG4gIH1cblxuICBnZXRFdmVudFN1YnRpdGxlcyhldmVudCkge1xuICAgIHJldHVybiBbXG4gICAgICAn16rXkNeo15nXmjogJyArIGAke2V2ZW50LmRheX0vJHtldmVudC5tb250aH0vJHtldmVudC55ZWFyfWAsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1jb25jYXRcbiAgICAgICfXqdei15Q6ICcgKyAgYCR7ZXZlbnQuaG91cn06JHtldmVudC5taW51dGV9YCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2VsZXNzLWNvbmNhdFxuICAgICAgZ2V0U3RhdHVzU3VidGl0bGUoZXZlbnQpXG4gICAgXTtcbiAgfVxuXG4gIGdldEV2ZW50SW1hZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBDb25zdGFudHMuRVZFTlRTX1RZUEVTW2V2ZW50LnR5cGVJZF07XG4gICAgcmV0dXJuIGV2ZW50VHlwZS5zcmMgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEzOC8xMzg3NzYuc3ZnJztcbiAgfVxuXG4gIG9uRXZlbnRDbGljayhldmVudElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRpbmdFdmVudElkOiBldmVudElkIH0pO1xuICB9XG5cbiAgb25DcmVhdGVFdmVudENsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjcmVhdGVNb2RlOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RvcEVkaXRpbmcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRpbmdFdmVudElkOiBudWxsLCBjcmVhdGVNb2RlOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHVwZGF0ZUV2ZW50KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY3JlYXRlTW9kZSkge1xuICAgICAgdGhpcy5wcm9wcy5jcmVhdGVFdmVudChldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlRXZlbnQodGhpcy5zdGF0ZS5lZGl0aW5nRXZlbnRJZCwgZXZlbnQpO1xuICAgIH1cbiAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gIH1cblxuICByZW1vdmVFdmVudCgpIHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZUV2ZW50KHRoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWQpO1xuICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cbn1cblxuRXZlbnRzUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGF1dGhEYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGV2ZW50czogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjcmVhdGVFdmVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdXBkYXRlRXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlbW92ZUV2ZW50OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEV2ZW50c1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vbGlzdEl0ZW0nLFxuICAgICcuLi9ldmVudEZvcm0vZXZlbnRGb3JtJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9ldmVudHNQYWdlLnNjc3MnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIGxpc3RJdGVtLCBFdmVudEZvcm0sIENvbnN0YW50cywgZXZlbnRzUGFnZUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBvbkNsaWNrMShsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ0FMTCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMihsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ09QRU4nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazMobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdDTE9TRUQnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazQobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB7XG4gICAgICAgIHRoaXMub25DcmVhdGVFdmVudENsaWNrKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s1KGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykge1xuICAgICAgICB0aGlzLm9uQ3JlYXRlRXZlbnRDbGljaygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNihsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMsIGV2ZW50SXRlbSwgZXZlbnRJdGVtSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkV2ZW50Q2xpY2soZXZlbnRJdGVtLmV2ZW50SWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudEl0ZW03KGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cywgZXZlbnRJdGVtLCBldmVudEl0ZW1JbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChsaXN0SXRlbSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRFdmVudFRpdGxlKGV2ZW50SXRlbS5ldmVudCksXG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50LScgKyBldmVudEl0ZW0uZXZlbnRJZCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldEV2ZW50U3VidGl0bGVzKGV2ZW50SXRlbS5ldmVudCksXG4gICAgICAgICAgICAnaW1hZ2VTcmMnOiB0aGlzLmdldEV2ZW50SW1hZ2UoZXZlbnRJdGVtLmV2ZW50KSxcbiAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazYuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMsIGV2ZW50SXRlbSwgZXZlbnRJdGVtSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZVZpc2libGVFdmVudHM4KGxpc3RWaWV3TW9kZSkge1xuICAgICAgICB2YXIgdmlzaWJsZUV2ZW50cyA9IHRoaXMuZ2V0VmlzaWJsZUV2ZW50cygpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2tleSc6ICdldmVudHMtdmlldycgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXInIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlci10aXRsZScgfSwgJ9eQ15nXqNeV16LXmdedJykpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2ZpbHRlcmluZyByb3cgZXhwYW5kZWQgY29sbGFwc2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndWwnLCB7ICdjbGFzc05hbWUnOiAnbWVudScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnQUxMJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2sxLmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXm9eV15zXnSAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIF8uc2l6ZSh0aGlzLnByb3BzLmV2ZW50cyksICcpJykpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnT1BFTicgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMi5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16TXqteV15cgJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCBfLnNpemUodGhpcy5nZXRPcGVuRXZlbnRzKCkpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ0NMT1NFRCcgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMy5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16HXkteV16ggJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCBfLnNpemUodGhpcy5nZXRDbG9zZWRFdmVudHMoKSksICcpJykpKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmbG9hdC1sZWZ0IGFkZC1idG4gYmlnIGhpZGUtZm9yLXNtYWxsLW9ubHknLFxuICAgICAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazQuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpXG4gICAgICAgICAgICB9LCAnKycpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmbG9hdC1sZWZ0IGFkZC1idG4gc21hbGwgc2hvdy1mb3Itc21hbGwtb25seScsXG4gICAgICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrNS5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cylcbiAgICAgICAgICAgIH0sICcrJykpLFxuICAgICAgICAgICAgXy5tYXAodmlzaWJsZUV2ZW50cywgcmVwZWF0RXZlbnRJdGVtNy5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykpLFxuICAgICAgICAgICAgdmlzaWJsZUV2ZW50cy5sZW5ndGggPT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZpbHRlci1zdGF0dXMnLFxuICAgICAgICAgICAgICAgICdrZXknOiAnMjQzNCdcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYSBmYS1mcm93bi1vJyxcbiAgICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXntem15jXoteo15nXnSwg15zXkCDXoNee16bXkNeVINeo16nXldee15XXqiDXnteq15DXmdee15XXqi4uLicpKSA6IG51bGxcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uU3VibWl0OShsaXN0Vmlld01vZGUsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblJlbW92ZUV2ZW50MTAobGlzdFZpZXdNb2RlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTExKGxpc3RWaWV3TW9kZSkge1xuICAgICAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlTGlzdFZpZXdNb2RlMTIoKSB7XG4gICAgICAgIHZhciBsaXN0Vmlld01vZGUgPSAhdGhpcy5zdGF0ZS5lZGl0aW5nRXZlbnRJZCAmJiAhdGhpcy5zdGF0ZS5jcmVhdGVNb2RlO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlIGV2ZW50cy1wYWdlJyB9LCBsaXN0Vmlld01vZGUgPyBzY29wZVZpc2libGVFdmVudHM4LmFwcGx5KHRoaXMsIFtsaXN0Vmlld01vZGVdKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCcgfSwgIWxpc3RWaWV3TW9kZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXZlbnRGb3JtLCB7XG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50LXVzZXInLFxuICAgICAgICAgICAgJ2V2ZW50JzogdGhpcy5wcm9wcy5ldmVudHNbdGhpcy5zdGF0ZS5lZGl0aW5nRXZlbnRJZF0sXG4gICAgICAgICAgICAnb25TdWJtaXQnOiBvblN1Ym1pdDkuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUpLFxuICAgICAgICAgICAgJ29uUmVtb3ZlRXZlbnQnOiBvblJlbW92ZUV2ZW50MTAuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUpLFxuICAgICAgICAgICAgJ2lzQWRtaW5Nb2RlJzogdGhpcy5wcm9wcy5hdXRoRGF0YS5pc0FkbWluLFxuICAgICAgICAgICAgJ29uQ2xvc2UnOiBvbkNsb3NlMTEuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUpXG4gICAgICAgIH0pIDogbnVsbCkpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2NvcGVMaXN0Vmlld01vZGUxMi5hcHBseSh0aGlzLCBbXSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRzUGFnZS9ldmVudHNQYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9saXN0SXRlbS5zY3NzJyk7XG5cbmNsYXNzIExpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbSBzbWFsbC0xMlwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsaXN0LWltYWdlXCIgc3JjPXt0aGlzLnByb3BzLmltYWdlU3JjfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXRpdGxlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGl0bGUgbGFyZ2UtdGV4dCBoaWRlLWZvci1wcmludFwiPnt0aGlzLnByb3BzLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAodGhpcy5wcm9wcy5zdWJ0aXRsZXMsIChzdWJ0aXRsZSwga2V5KSA9PiA8bGFiZWwga2V5PXsnc3VidGl0bGUtJyArIGtleX0gY2xhc3NOYW1lPVwic3VidGl0bGUgc21hbGwtMTIgc2hvdy1mb3Itc21hbGwtb25seVwiPntzdWJ0aXRsZX08L2xhYmVsPil9XG4gICAgICAgICAgICAgICAgICAgIHsgXy5tYXAodGhpcy5wcm9wcy5zdWJ0aXRsZXMsIChzdWJ0aXRsZSwga2V5KSA9PiA8bGFiZWwga2V5PXsnc3VidGl0bGUtbGFyZ2UtJyArIGtleX0gY2xhc3NOYW1lPVwic3VidGl0bGUgaW5saW5lIGhpZGUtZm9yLXNtYWxsLW9ubHlcIj57c3VidGl0bGV9PC9sYWJlbD4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3VidGl0bGVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgaW1hZ2VTcmM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdEl0ZW07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9saXN0SXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2xpc3RJdGVtLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9saXN0SXRlbS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4OyB9XFxuICAubGlzdC1pdGVtOmZpcnN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy10b3A6IDA7IH1cXG4gIC5saXN0LWl0ZW0gLmxpc3QtaW1hZ2Uge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7IH1cXG4gIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIHtcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAudGl0bGUubGFyZ2UtdGV4dCB7XFxuICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44MHJlbTsgfVxcbiAgICAgIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIC5zdWJ0aXRsZS5pbmxpbmUsIC5saXN0LWl0ZW0gLmxpc3QtdGl0bGVzIC5zdWJ0aXRsZS5pbmxpbmUuc2hvdy1mb3ItcHJpbnQge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ldmVudEZvcm0ucnQnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IGVtcHR5RXZlbnQgPSB7XG4gIHR5cGVJZDogJycsXG4gIGRheTogJzAxJyxcbiAgbW9udGg6ICcwMScsXG4gIHllYXI6ICcyMDE3JyxcbiAgaG91cjogJzE3JyxcbiAgbWludXRlOiAnMDAnLFxuICBzdGF0dXM6IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLkNMT1NFRC52YWx1ZVxufTtcblxuY29uc3QgZXZlbnRGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ2V2ZW50Rm9ybScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TdWJtaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25SZW1vdmVFdmVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgZXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgaXNBZG1pbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiBfLmRlZmF1bHRzKHRoaXMucHJvcHMuZXZlbnQsIGVtcHR5RXZlbnQsIHsgZGF0ZUlucHV0U3VwcG9ydGVkOiB0cnVlLCB0aW1lSW5wdXRTdXBwb3J0ZWQ6IHRydWUgfSk7XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jaGVja0lmSHRtbDVTdXBwb3J0ZWQoKTtcbiAgfSxcblxuICBvbkNoYW5nZShlLCB2YWxpZGF0aW9uVHlwZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdudW1lcmljJykge1xuICAgICAgaWYgKCEvXlswLTldKiQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdoZWJyZXcnKSB7XG4gICAgICBpZiAoIS9eW9eQLdeqXFxzXSokLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0RXZlbnRQaWN0dXJlKCkge1xuICAgIHJldHVybiBfLmdldChDb25zdGFudHMuRVZFTlRTX1RZUEVTLCBbdGhpcy5zdGF0ZS50eXBlSWQsICdzcmMnXSkgfHwgQ29uc3RhbnRzLkVWRU5UX0RFRkFVTFRfUElDO1xuICB9LFxuXG4gIGdldFRpbWVWYWx1ZSgpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnN0YXRlKVxuICAgICAgLnBpY2soWydob3VyJywgJ21pbnV0ZSddKVxuICAgICAgLm1hcCgpXG4gICAgICAudmFsdWUoKVxuICAgICAgLmpvaW4oJzonKTtcbiAgfSxcblxuICBvblRpbWVDaGFuZ2UoZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L3NvcnQtY29tcFxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCc6Jyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhvdXI6IHZhbFswXSwgbWludXRlOiB2YWxbMV0gfSk7XG4gIH0sXG5cbiAgZ2V0RGF0ZVZhbHVlKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMuc3RhdGUpXG4gICAgICAucGljayhbJ3llYXInLCAnbW9udGgnLCAnZGF5J10pXG4gICAgICAubWFwKClcbiAgICAgIC52YWx1ZSgpXG4gICAgICAuam9pbignLScpO1xuICB9LFxuXG4gIG9uTnVtZXJpY0NoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9LFxuXG4gIGNoZWNrSWZIdG1sNVN1cHBvcnRlZCgpIHtcbiAgICBjb25zdCBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gWydkYXRlJywgJ3RpbWUnXTtcbiAgICBjb25zdCB0ZXN0UmVzdWx0ID0ge307XG4gICAgY29uc3QgdGVzdFN0cmluZyA9ICd0ZXN0ISc7XG5cbiAgICBfLmVhY2goc3VwcG9ydGVkSW5wdXRUeXBlcywgKGlucHV0VHlwZSkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgIGlucHV0LnZhbHVlID0gdGVzdFN0cmluZztcbiAgICAgIGNvbnN0IGlzU3VwcG9ydGVkID0gaW5wdXQudmFsdWUgIT09IHRlc3RTdHJpbmc7XG4gICAgICB0ZXN0UmVzdWx0W2lucHV0VHlwZSArICdJbnB1dFN1cHBvcnRlZCddID0gaXNTdXBwb3J0ZWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHRlc3RSZXN1bHQpO1xuICB9LFxuXG4gIG9uRGF0ZUNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUuc3BsaXQoJy0nKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgeWVhcjogdmFsWzBdLCBtb250aDogdmFsWzFdLCBkYXk6IHZhbFsyXSB9KTtcbiAgfSxcblxuICBvbkJvb2xlYW5DaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gQm9vbGVhbihlLnRhcmdldC5jaGVja2VkKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9LFxuXG4gIGlzRm9ybVZhbGlkKCkge1xuICAgIHJldHVybiAhISh0aGlzLnN0YXRlLnR5cGVJZCk7XG4gIH0sXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgZXZlbnQgPSBfLm9taXQodGhpcy5zdGF0ZSwgWyd0aW1lSW5wdXRTdXBwb3J0ZWQnLCAnZGF0ZUlucHV0U3VwcG9ydGVkJ10pO1xuICAgIHRoaXMucHJvcHMub25TdWJtaXQoZXZlbnQpO1xuICB9LFxuXG4gIHJlbmRlcjogdGVtcGxhdGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50Rm9ybTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9mb3JtRnJhbWUnLFxuICAgICcuLi8uLi91dGlscy9jb25zdGFudHMnLFxuICAgICcuL2V2ZW50Rm9ybS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBGb3JtRnJhbWUsIENvbnN0YW50cywgZXZlbnRGb3JtQ3NzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50MShzdXBwb3J0ZWRJbnB1dHMsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50LScgKyBldmVudEluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogZXZlbnRJbmRleFxuICAgICAgICB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsIGV2ZW50Lm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0WWVhcjIoc3VwcG9ydGVkSW5wdXRzLCB5ZWFyLCB5ZWFySW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAneXktJyArIHllYXJJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6ICcyMCcgKyB5ZWFyXG4gICAgICAgIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCB5ZWFyLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0TW9udGgzKHN1cHBvcnRlZElucHV0cywgbW9udGgsIG1vbnRoSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ2tleSc6ICdtbS0nICsgbW9udGhJbmRleCB9LCBtb250aCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdERheTQoc3VwcG9ydGVkSW5wdXRzLCBkYXksIGRheUluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICdrZXknOiAnZGQtJyArIGRheUluZGV4IH0sIGRheSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdE1pbnV0ZTUoc3VwcG9ydGVkSW5wdXRzLCBtaW51dGUsIG1pbnV0ZUluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICdrZXknOiAnbWluLScgKyBtaW51dGVJbmRleCB9LCBtaW51dGUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRIb3VyNihzdXBwb3J0ZWRJbnB1dHMsIGhvdXIsIGhvdXJJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAna2V5JzogJ2hoLScgKyBob3VySW5kZXggfSwgaG91cik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50U3RhdHVzNyhzdXBwb3J0ZWRJbnB1dHMsIGV2ZW50U3RhdHVzLCBldmVudFN0YXR1c0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IGV2ZW50U3RhdHVzLnZhbHVlIH0sIGV2ZW50U3RhdHVzLm5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZVN1cHBvcnRlZElucHV0czgoKSB7XG4gICAgICAgIHZhciBzdXBwb3J0ZWRJbnB1dHMgPSB0aGlzLnN0YXRlLmRhdGVJbnB1dFN1cHBvcnRlZCAmJiB0aGlzLnN0YXRlLnRpbWVJbnB1dFN1cHBvcnRlZDtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdldmVudC1mb3JtIGxhcmdlLTExIGxhcmdlLWNlbnRlcmVkJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAncm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtOSBsYXJnZS0xMCBsYXJnZS1jb2xsYXBzZSBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXnSDXlNeQ15nXqNeV16JcXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS50eXBlSWQsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICd0eXBlSWQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3N0eWxlJzogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgfSwgJ9eR15fXqCcpLFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkVWRU5UU19UWVBFUywgcmVwZWF0RXZlbnQxLmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2Zsb2F0LWxlZnQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZXZlbnQtcGljJyxcbiAgICAgICAgICAgICdzcmMnOiB0aGlzLmdldEV2ZW50UGljdHVyZSgpXG4gICAgICAgIH0pKSksICFzdXBwb3J0ZWRJbnB1dHMgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3JvdyBzbWFsbC1leHBhbmRlZCBzbWFsbC1jZW50ZXJlZCcsXG4gICAgICAgICAgICAna2V5JzogJ3Vuc3VwcG9ydGVkLWRyb3Bkb3ducydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eq15DXqNeZ15onKSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnllYXIsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICd5ZWFyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS55ZWFycywgcmVwZWF0WWVhcjIuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC00IG1lZGl1bS0yIGNvbHVtbnMgbW9yZS1zcGFjZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLm1vbnRoLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnbW9udGgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRBVEVfVElNRV9EQVRBLm1vbnRocywgcmVwZWF0TW9udGgzLmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNCBtZWRpdW0tMiBjb2x1bW5zIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5kYXksXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdkYXknXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3FxXFxuICAgICAgICAgICAgICAgICAgICAnLFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRBVEVfVElNRV9EQVRBLmRheXMsIHJlcGVhdERheTQuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC0zIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqdei15QnKSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLm1pbnV0ZSxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ21pbnV0ZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuREFURV9USU1FX0RBVEEubWludXRlcywgcmVwZWF0TWludXRlNS5iaW5kKHRoaXMsIHN1cHBvcnRlZElucHV0cykpXG4gICAgICAgIF0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTMgY29sdW1ucyBtb3JlLXNwYWNlIGVuZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmhvdXIsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdob3VyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS5ob3VycywgcmVwZWF0SG91cjYuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSkpIDogbnVsbCwgc3VwcG9ydGVkSW5wdXRzID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdyb3cnLFxuICAgICAgICAgICAgJ2tleSc6ICdzdXBwb3J0ZWQtaW5wdXRzJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNyBsYXJnZS01IGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqteQ16jXmdeaXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ2RhdGUnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5nZXREYXRlVmFsdWUoKSxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25EYXRlQ2hhbmdlLFxuICAgICAgICAgICAgJ21pbic6ICcyMDE2LTAxLTAxJyxcbiAgICAgICAgICAgICdtYXgnOiAnMjAxNy0xMi0zMScsXG4gICAgICAgICAgICAnbmFtZSc6ICdkYXRlJ1xuICAgICAgICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNSBsYXJnZS0zIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqdei15RcXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ3R5cGUnOiAndGltZScsXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLmdldFRpbWVWYWx1ZSgpLFxuICAgICAgICAgICAgJ3N0ZXAnOiAzMDAsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uVGltZUNoYW5nZVxuICAgICAgICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnbGFyZ2UtNCBtZWRpdW0tMTIgY29sdW1ucycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJyDXodeY15jXldehXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuc3RhdHVzLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnc3RhdHVzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLCByZXBlYXRFdmVudFN0YXR1czcuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSkpKSA6IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtRnJhbWUsIHtcbiAgICAgICAgICAgICd0aXRsZSc6ICfXoteo15nXm9eqINeQ15nXqNeV16InLFxuICAgICAgICAgICAgJ29uU3VibWl0JzogdGhpcy5vblN1Ym1pdCxcbiAgICAgICAgICAgICdvblJlbW92ZSc6IHRoaXMucHJvcHMub25SZW1vdmVFdmVudCxcbiAgICAgICAgICAgICdvbkNsb3NlJzogdGhpcy5wcm9wcy5vbkNsb3NlLFxuICAgICAgICAgICAgJ2Rpc2FibGVkJzogIXRoaXMuaXNGb3JtVmFsaWQoKVxuICAgICAgICB9LCBzY29wZVN1cHBvcnRlZElucHV0czguYXBwbHkodGhpcywgW10pKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLnJ0XG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9mb3JtRnJhbWUuc2NzcycpO1xuXG5jb25zdCBmb3JtRnJhbWVUcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMvZm9ybUZyYW1lVHJhbnNsYXRpb25zJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0aXRsZSwgb25DbG9zZSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQmFja0J1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFjay1idG5cIiBrZXk9XCJiYWNrLWJ0blwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPnt0aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgeyBfLmlzRnVuY3Rpb24ob25DbG9zZSkgPyBjcmVhdGVCYWNrQnV0dG9uKCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uc0J1dHRvbnMoZGlzYWJsZWQsIG9uU3VibWl0LCBvblJlbW92ZSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEga2V5PVwicmVtb3ZlLWJ0blwiIG9uQ2xpY2s9e29uUmVtb3ZlfSBjbGFzc05hbWU9XCJidXR0b24gYWxlcnQgbW9yZS1zcGFjZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnsgZm9ybUZyYW1lVHJhbnNsYXRpb25zLlJFTU9WRSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25zIGJ1dHRvbi1ncm91cCBzdGFja2VkIHNtYWxsLWNlbnRlcmVkIGxhcmdlLTYgc21hbGwtOCBcIj5cbiAgICAgICAgICAgIDxhIGRpc2FibGVkPXtkaXNhYmxlZH0gb25DbGljaz17b25TdWJtaXR9IGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzIG1vcmUtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IGZvcm1GcmFtZVRyYW5zbGF0aW9ucy5TVUJNSVQgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7IF8uaXNGdW5jdGlvbihvblJlbW92ZSkgPyBjcmVhdGVSZW1vdmVCdXR0b24oKSA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBGb3JtRnJhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mcmFtZVwiPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlSGVhZGVyKHRoaXMucHJvcHMudGl0bGUsIHRoaXMucHJvcHMub25DbG9zZSkgfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyBjcmVhdGVBY3Rpb25zQnV0dG9ucyh0aGlzLnByb3BzLmRpc2FibGVkLCB0aGlzLnByb3BzLm9uU3VibWl0LCB0aGlzLnByb3BzLm9uUmVtb3ZlKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xufVxuXG5Gb3JtRnJhbWUucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9uU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtRnJhbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZm9ybUZyYW1lLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9mb3JtRnJhbWUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWZyYW1lIC5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cXG4uZm9ybS1mcmFtZSAuYWN0aW9uLWJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgLmZvcm0tZnJhbWUgLmFjdGlvbi1idXR0b25zIC5idXR0b24gaSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvZm9ybUZyYW1lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBTVUJNSVQ6ICfXqdee15XXqCcsXG4gIFJFTU9WRTogJ9ee15fXpydcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL2Zvcm1GcmFtZVRyYW5zbGF0aW9ucy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBFUlJPUlM6IHtcbiAgICBHRU5FUkFMOiAn16nXkteZ15DXlCDXkdee16LXqNeb16onLFxuICAgIElOVkFMSURfTUFJTDogJ9eQ15nXnteZ15nXnCDXnNeQINeq16fXmdefLicsXG4gICAgV0VBS19QQVNTV09SRDogJ9eU16HXmdeh157XkCDXpteo15nXm9eUINec15TXm9eZ15wg15zXpNeX15XXqiA2INeq15XXldeZ150uJyxcbiAgICBFTUFJTF9JTl9VU0U6ICfXkNeZ157XmdeZ15wg15HXqdeZ157XldepLiDXkNeg15Ag15HXl9eoINeT16jXmiDXlNeq15fXkdeo15XXqiDXkNeX16jXqi4nLFxuICAgIFdST05HX1BBU1NXT1JEOiAn16HXmdeh157XkCDXnNeQINeg15vXldeg15QuJyxcbiAgICBOT1RfU0FNRV9QQVNTV09SRDogJ9eh15nXodee15DXldeqINem16jXmdeb15XXqiDXnNeU15nXldeqINeW15TXldeqLicsXG4gICAgVVNFUl9OT1RfRk9VTkQ6ICfXm9eq15XXkdeqINeU15DXmdeZ157XmdecINec15Ag16DXntem15DXlC4nXG4gIH0sXG5cbiAgREFURV9USU1FX0RBVEE6IHtcbiAgICBkYXlzOiBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJywgJzEzJywgJzE0JywgJzE1JywgJzE2JywgJzE3JywgJzE4JywgJzE5JywgJzIwJywgJzIxJywgJzIyJywgJzIzJywgJzI0JywgJzI1JywgJzI2JywgJzI3JywgJzI4JywgJzI5JywgJzMwJywgJzMxJ10sXG4gICAgbW9udGhzOiBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ10sXG4gICAgeWVhcnM6IFsnMTYnLCAnMTcnXSxcbiAgICBob3VyczogWycwMCcsICcwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMyddLFxuICAgIG1pbnV0ZXM6IFsnMDAnLCAnMDUnLCAnMTAnLCAnMTUnLCAnMjAnLCAnMjUnLCAnMzAnLCAnMzUnLCAnNDAnLCAnNDUnLCAnNTAnLCAnNTUnXVxuICB9LFxuXG4gIEVWRU5UX0RFRkFVTFRfUElDOiAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTI0LzEyNDE1MC5zdmcnLFxuICBFVkVOVFNfVFlQRVM6IHtcbiAgICAnaGFwb2VsLXRsdic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2hhcG9lbHRhLnBuZycsXG4gICAgICBuYW1lOiAn15TXpNeV16LXnCDXqtecINeQ15HXmdeRJ1xuICAgIH0sXG4gICAgJ21hY2NhYmktdGx2Jzoge1xuICAgICAgc3JjOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fbWFjY2FiaS5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeq15wg15DXkdeZ15EnXG4gICAgfSxcbiAgICAnaGVyemVsaXlhJzoge1xuICAgICAgc3JjOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fc2hhcm9uLnBuZycsXG4gICAgICBuYW1lOiAn15HXoNeZINeU16jXptec15nXlCdcbiAgICB9LFxuICAgICdraXJ5YXQtZ2F0Jzoge1xuICAgICAgc3JjOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvSW1hZ2VzL3RlYW1zL2JpZ0dhdC5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINen16jXmdeqINeS16onXG4gICAgfSxcbiAgICAnZ2lsYm9hJzoge1xuICAgICAgc3JjOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fR2FsaWwucG5nJyxcbiAgICAgIG5hbWU6ICfXktec15nXnC/Xktec15HXldeiJ1xuICAgIH0sXG4gICAgJ25haGFyaXlhJzoge1xuICAgICAgc3JjOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fbmFoYXJpYS5wbmcnLFxuICAgICAgbmFtZTogJ9ei15nXqNeV16DXmSDXoNeU16jXmdeUJ1xuICAgIH0sXG4gICAgJ2hvbG9uJzoge1xuICAgICAgc3JjOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2FydGljbGVzL2xvZ29faGgucG5nJyxcbiAgICAgIG5hbWU6ICfXlNek15XXotecINeX15XXnNeV158nXG4gICAgfSxcbiAgICAnYXNoZG9kJzoge1xuICAgICAgc3JjOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fYXNoZG9kLnBuZycsXG4gICAgICBuYW1lOiAn157Xm9eR15kg15DXqdeT15XXkydcbiAgICB9LFxuICAgICdoYWlmYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2hhaWZhLnBuZycsXG4gICAgICBuYW1lOiAn157Xm9eR15kg15fXmdek15QnXG4gICAgfSxcbiAgICAncmlzaG9uJzoge1xuICAgICAgc3JjOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fcmlzaG9uLnBuZycsXG4gICAgICBuYW1lOiAn157Xm9eR15kg16jXkNep15XXnyDXnNem15nXldefJ1xuICAgIH0sXG4gICAgJ2VpbGF0Jzoge1xuICAgICAgc3JjOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fZWlsYXQucG5nJyxcbiAgICAgIG5hbWU6ICfXlNek15XXotecINeQ15nXnNeqJ1xuICAgIH0sXG4gICAgJ2xqdWJsamFuYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvOC84ZS9Vbmlvbl9vbGltcGlqYS5wbmcvMTQwcHgtVW5pb25fb2xpbXBpamEucG5nJyxcbiAgICAgIG5hbWU6ICfXnNeV15HXnNeZ15DXoNeUJ1xuICAgIH0sXG4gICAgJ3ZhbGVuY2lhJzoge1xuICAgICAgc3JjOiAnaHR0cDovL3NhbXZhbnJvc3NvbS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMTAvdmFsZW5jaWEtYmFza2V0MS1sb2dvLmpwZycsXG4gICAgICBuYW1lOiAn15XXnNeg16HXmdeUJ1xuICAgIH0sXG4gICAgJ2t1YmFuJzoge1xuICAgICAgc3JjOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi8wLzA0L0xva29tb3Rpdl9LdWJhbl9sb2dvLnBuZy8yMDBweC1Mb2tvbW90aXZfS3ViYW5fbG9nby5wbmcnLFxuICAgICAgbmFtZTogJ9ec15XXp9eV157XldeY15nXkSDXp9eV15HXkNefJ1xuICAgIH0sXG4gICAgJ2Z1ZW5sYWJyYWRhJzoge1xuICAgICAgc3JjOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi8xLzEzL0JhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcvMTEwcHgtQmFsb25jZXN0b2Z1ZW5sYWJyYWRhLmpwZycsXG4gICAgICBuYW1lOiAn16TXldeQ16DXnNeR16jXk9eUJ1xuICAgIH0sXG4gICAgJ3VsbSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly9uYWNod3VjaHMuYmJ1MDEuY29tL21vZHVsZXMvbW9kX2JidW5ld3NmbGFzaC9hc3NldHMvaW1hZ2VzL25vaW1hZ2VfdGh1bWIuanBnJyxcbiAgICAgIG5hbWU6ICfXkNeV15zXnSdcbiAgICB9LFxuICAgICd2aWxuYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvNy83NS9CQ19MaWV0dXZvc19SeXRhc19sb2dvLnN2Zy85MDdweC1CQ19MaWV0dXZvc19SeXRhc19sb2dvLnN2Zy5wbmcnLFxuICAgICAgbmFtZTogJ9eo15nXmNeQ16Eg15XXmdec16DXlCdcbiAgICB9LFxuICAgICdub3Znb3JvZCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly9vbHltcGlha29zLWxpdmUuZ3IvaW1nL3RlYW1zL05pemhueSUyME5vdmdvcm9kLnBuZycsXG4gICAgICBuYW1lOiAn16DXmdeW17PXoNeZJ1xuICAgIH0sXG4gICAgJ3plbml0Jzoge1xuICAgICAgc3JjOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjUvRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcvMjIwcHgtRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcnLFxuICAgICAgbmFtZTogJ9eW16DXmdeYJ1xuICAgIH1cbiAgfSxcbiAgU1RBVElPTlM6IHtcbiAgICBtb2RpaW46ICfXnteV15PXmdei15nXnycsXG4gICAgdGx2OiAn16rXnCDXkNeR15nXkSdcbiAgfSxcbiAgTUFYX1NFQVNPTl9USUNLRVRTOiA3LFxuICBNQVhfRVhUUkFfUEFTU0VOR0VSUzogNCxcbiAgUEhPTkVfUFJFRklYRVM6IFsnMDUwJywgJzA1MicsICcwNTMnLCAnMDU0JywgJzA1NScsICcwNTcnLCAnMDU4J10sXG4gIFBBR0VTOiB7XG4gICAgSE9NRToge3ZhbDogJ2hvbWUnLCBuYW1lOiAn15PXoyDXlNeR15nXqicsIHZpc2libGU6IHRydWV9LFxuICAgIEFVVEg6IHt2YWw6ICdhdXRoJywgbmFtZTogJyd9LFxuICAgIFVTRVJTOiB7dmFsOiAndXNlcnMnLCBuYW1lOiAn157Xqdeq157XqdeZ150nLCB2aXNpYmxlOiB0cnVlfSxcbiAgICBFVkVOVFM6IHt2YWw6ICdldmVudHMnLCBuYW1lOiAn15DXmdeo15XXoteZ150nLCB2aXNpYmxlOiB0cnVlfSxcbiAgICBCT09LSU5HUzoge3ZhbDogJ2Jvb2tpbmdzJywgbmFtZTogJ9eo16nXldee15nXnSDXnNeU16HXoteV16onLCB2aXNpYmxlOiB0cnVlfSxcbiAgICBESVNUUklCVVRJT046IHt2YWw6ICdkaXN0cmlidXRpb24nLCBuYW1lOiAn157XmdeZ15zXmdedJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgRURJVF9VU0VSX0lORk86IHt2YWw6ICdlZGl0VXNlckluZm8nLCBuYW1lOiAnJ31cbiAgfSxcbiAgRVZFTlRTX1NUQVRVUzoge1xuICAgIENMT1NFRDoge1xuICAgICAgdmFsdWU6ICdjbG9zZWQnLFxuICAgICAgbmFtZTogJ9eU15TXqNep157XlCDXodeS15XXqNeUJ1xuICAgIH0sXG4gICAgT1BFTl9GT1JfTUVNQkVSUzoge1xuICAgICAgdmFsdWU6ICdvcGVuRm9yTWVtYmVycycsXG4gICAgICBuYW1lOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXnteg15XXmdeZINeU16HXoteV16onXG4gICAgfSxcbiAgICBPUEVOX0ZPUl9BTEw6IHtcbiAgICAgIHZhbHVlOiAnb3BlbkZvckFsbCcsXG4gICAgICBuYW1lOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXm9eV15zXnSdcbiAgICB9LFxuICAgIEZVTExZX0JPT0tFRDoge1xuICAgICAgdmFsdWU6ICdmdWxseUJvb2tlZCcsXG4gICAgICBuYW1lOiAn15TXlNeh16LXlCDXntec15DXlCdcbiAgICB9XG4gIH0sXG4gIERJU1RSSUJVVElPTjoge1xuICAgIFJFQ0lQSUVOVFM6IHtcbiAgICAgIEFMTDoge1xuICAgICAgICB2YWx1ZTogJ2FsbFVzZXJzJyxcbiAgICAgICAgbmFtZTogJ9eb15zXnCDXlNee16nXqtee16nXmdedJ1xuICAgICAgfSxcbiAgICAgIE1FTUJFUlNfT05MWToge1xuICAgICAgICB2YWx1ZTogJ21lbWJlcnNPbmx5JyxcbiAgICAgICAgbmFtZTogJ9ee16DXldeZ15nXnSDXkdec15HXkydcbiAgICAgIH0sXG4gICAgICBCT09LRURfVE9fRVZFTlQ6IHtcbiAgICAgICAgdmFsdWU6ICdib29rZWRUb0V2ZW50JyxcbiAgICAgICAgbmFtZTogJ9eo16nXldee15nXnSDXnNeU16HXoteUJ1xuICAgICAgfVxuICAgIH0sXG4gICAgTUVUSE9EUzoge1xuICAgICAgRU1BSUw6ICdlbWFpbCcsXG4gICAgICBTTVM6ICdzbXMnXG4gICAgfSxcbiAgICBUWVBFUzoge1xuICAgICAgVEVNUExBVEU6ICd0ZW1wbGF0ZScsXG4gICAgICBDVVNUT006ICdjdXN0b20nXG4gICAgfSxcbiAgICBURU1QTEFURVM6IHtcbiAgICAgIEVWRU5UX09QRU5fRk9SX01FTUJFUlM6IHtcbiAgICAgICAgaWQ6ICc0ZmFiNmI5Mi1iZjYxLTQ4ZjEtYjEzYi1iYzcwMmVkNzg2OTUnLFxuICAgICAgICBuYW1lOiAn16TXqteZ15fXqiDXlNeo16nXnteUINec157XoNeV15nXmdedJ1xuICAgICAgfSxcbiAgICAgIEVWRU5UX09QRU5fRk9SX0FMTDoge1xuICAgICAgICBpZDogJ2RiZTNlMGU0LWJiMGUtNDFhZC1iZjEyLTViZTY0YTMwZjNiNycsXG4gICAgICAgIG5hbWU6ICfXpNeq15nXl9eqINeU16jXqdee15Qg15zXm9eV15zXnSdcbiAgICAgIH0sXG4gICAgICBDSEFOR0VfRVZFTlRfREVUQUlMUzoge1xuICAgICAgICBpZDogJzE3MGZjZDRmLWRmMmUtNDRkZC1iNzYwLTY5M2QwNGZkZDA3YycsXG4gICAgICAgIG5hbWU6ICfXqdeZ16DXldeZINeR157Xldei15Mg15TXkNeZ16jXldeiJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRGb3JtLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRGb3JtLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEZvcm0uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50LWZvcm0gLmV2ZW50LXBpYyB7XFxuICB3aWR0aDogNjRweDtcXG4gIGhlaWdodDogNjRweDtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50c1BhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudHNQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudHNQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRzUGFnZS9ldmVudHNQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50cy1wYWdlIC5maWx0ZXJpbmcge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEVWRU5UU19SRUNFSVZFRCwgRVZFTlRfUkVNT1ZFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IEVWRU5UX0tFWVMgPSBbJ3R5cGVJZCcsICdkYXknLCAnbW9udGgnLCAneWVhcicsICdob3VyJywgJ21pbnV0ZScsICdzdGF0dXMnXTtcbmNvbnN0IEVWRU5UU19QQVRIID0gJ2V2ZW50cyc7XG5cbmV4cG9ydCBjb25zdCBldmVudFJlbW92ZWQgPSBldmVudElkID0+ICh7XG4gIHR5cGU6IEVWRU5UX1JFTU9WRUQsXG4gIGV2ZW50SWRcbn0pO1xuXG5leHBvcnQgY29uc3QgZXZlbnRzUmVjZWl2ZWQgPSBldmVudHMgPT4gKHtcbiAgdHlwZTogRVZFTlRTX1JFQ0VJVkVELFxuICBldmVudHNcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hFdmVudHMgPSAoKSA9PiBkaXNwYXRjaCA9PlxuICBjbGllbnREQi5yZWFkKEVWRU5UU19QQVRIKVxuICAgIC50aGVuKGV2ZW50cyA9PiB7XG4gICAgICBpZiAoZXZlbnRzKSB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaChldmVudHNSZWNlaXZlZChldmVudHMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRXZlbnQgPSBldmVudCA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChFVkVOVFNfUEFUSCwgZXZlbnQpXG4gICAgLnRoZW4oZXZlbnRJZCA9PiBkaXNwYXRjaChldmVudHNSZWNlaXZlZCh7IFtldmVudElkXTogZXZlbnQgfSkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUV2ZW50ID0gKGV2ZW50SWQsIGV2ZW50KSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCBldmVudFRvVXBkYXRlID0gXy5waWNrKGV2ZW50LCBFVkVOVF9LRVlTKTtcblxuICByZXR1cm4gY2xpZW50REIudXBkYXRlKCdldmVudHMvJyArIGV2ZW50SWQsIGV2ZW50VG9VcGRhdGUpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoeyBbZXZlbnRJZF06IGV2ZW50VG9VcGRhdGUgfSkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUV2ZW50ID0gZXZlbnRJZCA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucmVtb3ZlKGAke0VWRU5UU19QQVRIfS8ke2V2ZW50SWR9YClcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChldmVudFJlbW92ZWQoZXZlbnRJZCkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9ldmVudEFjdGlvbnMuanMiLCJleHBvcnQgY29uc3QgU1RBUlRfTE9BRElORyA9ICdTVEFSVF9MT0FESU5HJztcbmV4cG9ydCBjb25zdCBTVE9QX0xPQURJTkcgPSAnU1RPUF9MT0FESU5HJztcblxuZXhwb3J0IGNvbnN0IFJFUE9SVF9FUlJPUiA9ICdSRVBPUlRfRVJST1InO1xuXG5leHBvcnQgY29uc3QgU0VUX0FVVEhfREFUQSA9ICdTRVRfQVVUSF9EQVRBJztcbmV4cG9ydCBjb25zdCBTSUdOX09VVCA9ICdTSUdOX09VVCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSU19SRUNFSVZFRCA9ICdVU0VSU19SRUNFSVZFRCc7XG5leHBvcnQgY29uc3QgVVNFUl9SRU1PVkVEID0gJ1VTRVJfUkVNT1ZFRCc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVFNfUkVDRUlWRUQgPSAnRVZFTlRTX1JFQ0VJVkVEJztcbmV4cG9ydCBjb25zdCBFVkVOVF9SRU1PVkVEID0gJ0VWRU5UX1JFTU9WRUQnO1xuXG5leHBvcnQgY29uc3QgQk9PS0lOR1NfUkVDRUlWRUQgPSAnQk9PS0lOR1NfUkVDRUlWRUQnO1xuZXhwb3J0IGNvbnN0IEJPT0tJTkdfQ0FOQ0VMRUQgPSAnQk9PS0lOR19DQU5DRUxFRCc7XG5cbmV4cG9ydCBjb25zdCBOQVZJR0FURV9UTyA9ICdOQVZJR0FURV9UTyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9uVHlwZXMuanMiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemUgPSBjb25maWcgPT4ge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SW4gPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5zZXQoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZWFkID0gcGF0aCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9uY2UoJ3ZhbHVlJylcbiAgICAudGhlbihzbmFwc2hvdCA9PiByZXNvbHZlKHNuYXBzaG90LnZhbCgpKSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcHVzaCA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IHVuaXF1ZUtleSA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnB1c2goKS5rZXk7XG4gIHNldEluKHBhdGggKyAnLycgKyB1bmlxdWVLZXksIGRhdGEpXG4gICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSh1bmlxdWVLZXkpKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS51cGRhdGUoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSBwYXRoID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkucmVtb3ZlKClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhHb29nbGUgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChwcm92aWRlcilcbiAgICAudGhlbihyZXNvbHZlKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRmFjZWJvb2sgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKVxuICAgIC50aGVuKHJlc29sdmUpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBlbWFpbCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluVXNlciA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmdldFJlZGlyZWN0UmVzdWx0KClcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0LnVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2UgPSB1c2VyID0+IHtcbiAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkucmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgICAgIHJlc29sdmUodXNlcik7XG4gICAgICAgIH07XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmlyZWJhc2VcIlxuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBTVE9QX0xPQURJTkcgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+ICh7XG4gIHR5cGU6IFNUQVJUX0xPQURJTkdcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiAoe1xuICB0eXBlOiBTVE9QX0xPQURJTkdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2xvYWRpbmdBY3Rpb25zLmpzIiwiaW1wb3J0IHsgUkVQT1JUX0VSUk9SIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHJlcG9ydEVycm9yID0gKG1lc3NhZ2UgPSBDb25zdGFudHMuRVJST1JTLkdFTkVSQUwpID0+ICh7XG4gIHR5cGU6IFJFUE9SVF9FUlJPUixcbiAgbWVzc2FnZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvc3Bpbm5lci5zY3NzJyk7XG5cbmNvbnN0IExvZ28gPSByZXF1aXJlKCcuL2xvZ28uanN4Jyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IHN0YXRlLmxvYWRpbmdcbiAgICB9O1xufVxuXG5jbGFzcyBTcGlubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlDbGFzcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGU6ICF0aGlzLnByb3BzLmlzTG9hZGluZ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5Q2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIGhlaWdodD17ODB9IHdpZHRoPXs4MH0gb3BhY2l0eT17MC43fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3Bpbm5lci5Qcm9wVHlwZXMgPSB7XG4gICAgaXNMb2FkaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTcGlubmVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zcGlubmVyLmpzeCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIHtcXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDA7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAubG9nbyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyID4gZGl2IHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgbWFyZ2luOiAwIDJweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAuYm91bmNlMSB7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMyczsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgLmJvdW5jZTIge1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xcbiAgMCUsIDgwJSwgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcXG4gIDAlLCA4MCUsIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgTG9nbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gaGVpZ2h0PXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gb3BhY2l0eT17dGhpcy5wcm9wcy5vcGFjaXR5fSB2aWV3Qm94PVwiMCAwIDQwMCA0MDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAwLjAwIDAuMDAgTCAxOTUuMzMgMC4wMCBDIDE3MS40NiAxLjE0IDE0Ny41OCA1LjQyIDEyNS40MyAxNC42MCBDIDcwLjg4IDM2LjMxIDI3LjEwIDgzLjMzIDkuNTcgMTM5LjQwIEMgMy43NCAxNTcuNDUgMS4xNiAxNzYuMzcgMC4wMCAxOTUuMjUgTCAwLjAwIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk1LjMzIDAuMDAgTCAyMDcuNTIgMC4wMCBDIDIxNi43MSAxLjE5IDIyNi4wMiAxLjM1IDIzNS4xMSAzLjIyIEMgMjY5LjMwIDkuMTYgMzAxLjc4IDI0LjM3IDMyOC4zNyA0Ni42NSBDIDM2NS45OSA3Ny45MSAzOTEuNjYgMTIzLjQyIDM5OC4wOSAxNzEuOTkgQyAzOTkuMDQgMTc4Ljc1IDM5OS41NiAxODUuNTYgNDAwLjAwIDE5Mi4zNyBMIDQwMC4wMCAyMDguNzMgQyAzOTguNTcgMjMzLjg2IDM5My4yOSAyNTguOTAgMzgyLjgwIDI4MS44NiBDIDM1OC44MiAzMzUuNjggMzA5Ljk1IDM3Ny44MyAyNTIuOTkgMzkzLjExIEMgMjM5LjA4IDM5Ny4xMCAyMjQuNjggMzk4Ljg5IDIxMC4yOSA0MDAuMDAgTCAxOTEuMzYgNDAwLjAwIEMgMTY2LjE3IDM5OC43NiAxNDEuMTMgMzkzLjE0IDExOC4xNiAzODIuNjQgQyA2Ny40MCAzNTkuNzYgMjYuODEgMzE1LjA1IDkuODkgMjYxLjkwIEMgMy45NyAyNDQuMzMgMS42MiAyMjUuODUgMC4wMCAyMDcuNDYgTCAwLjAwIDE5NS4yNSBDIDEuMTYgMTc2LjM3IDMuNzQgMTU3LjQ1IDkuNTcgMTM5LjQwIEMgMjcuMTAgODMuMzMgNzAuODggMzYuMzEgMTI1LjQzIDE0LjYwIEMgMTQ3LjU4IDUuNDIgMTcxLjQ2IDEuMTQgMTk1LjMzIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA3LjUyIDAuMDAgTCA0MDAuMDAgMC4wMCBMIDQwMC4wMCAxOTIuMzcgQyAzOTkuNTYgMTg1LjU2IDM5OS4wNCAxNzguNzUgMzk4LjA5IDE3MS45OSBDIDM5MS42NiAxMjMuNDIgMzY1Ljk5IDc3LjkxIDMyOC4zNyA0Ni42NSBDIDMwMS43OCAyNC4zNyAyNjkuMzAgOS4xNiAyMzUuMTEgMy4yMiBDIDIyNi4wMiAxLjM1IDIxNi43MSAxLjE5IDIwNy41MiAwLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE5Mi4xMSA4LjEzIEMgMjIyLjM1IDYuODAgMjUyLjk1IDEyLjc0IDI4MC40MiAyNS41MCBDIDMyNy4wNCA0Ni43MiAzNjQuMzUgODcuMzkgMzgxLjMxIDEzNS43NSBDIDM5OC40MCAxODMuMTcgMzk1LjY1IDIzNy4zMyAzNzMuNzcgMjgyLjc0IEMgMzU2LjIzIDMxOS44MyAzMjYuMzMgMzUwLjk3IDI5MC4wNCAzNzAuMDkgQyAyNDMuOTIgMzk0LjgyIDE4Ny41MiAzOTkuMjIgMTM4LjA3IDM4Mi4xMSBDIDk1LjM4IDM2Ny42NSA1OC4xNCAzMzcuNjAgMzUuMjEgMjk4Ljc2IEMgMTQuNjUgMjY0LjkyIDUuMzQgMjI0LjQ2IDguNTQgMTg1LjAzIEMgMTAuMzcgMTYxLjIwIDE2LjY4IDEzNy43MCAyNy4yNCAxMTYuMjYgQyA0OC44MiA3MS4xNyA4OC45MiAzNS40OCAxMzYuMDQgMTguODkgQyAxNTQuMDUgMTIuNTQgMTczLjAyIDguODcgMTkyLjExIDguMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTk2LjIzIDIxLjM1IEMgMTk3LjYwIDE4LjkzIDE5OC45NSAxNi41MCAyMDAuMzcgMTQuMTEgQyAyMDEuNzIgMTYuNDggMjAzLjA0IDE4Ljg2IDIwNC4zMyAyMS4yNyBDIDIwNi45NSAyMS44MCAyMDkuNTkgMjIuMjIgMjEyLjE4IDIyLjg5IEMgMjEwLjcwIDI1LjE2IDIwOC42NSAyNi45OCAyMDYuODIgMjguOTYgQyAyMDcuMjIgMzEuNjUgMjA3LjUzIDM0LjM1IDIwNy44NiAzNy4wNCBDIDIwNS4zMCAzNS44NiAyMDIuNzQgMzQuNjcgMjAwLjE0IDMzLjU4IEMgMTk3Ljc0IDM0LjgyIDE5NS4zMiAzNi4wNCAxOTIuNzUgMzYuODcgQyAxOTMuMTYgMzQuMjIgMTkzLjU0IDMxLjU2IDE5My44NCAyOC44OSBDIDE5MS45MyAyNi45MCAxOTAuMDMgMjQuOTAgMTg4LjE2IDIyLjg4IEMgMTkwLjgzIDIyLjMxIDE5My41MiAyMS43OCAxOTYuMjMgMjEuMzUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTgxLjEyIDQ0LjM4IEMgMjEyLjI2IDQwLjYwIDI0NC41MyA0Ni4xOSAyNzIuMzYgNjAuNzYgQyAzMTAuOTMgODAuNTYgMzQwLjUxIDExNy4wNiAzNTEuNjIgMTU5LjAwIEMgMzU4LjgxIDE4NS4xMCAzNTguODIgMjEzLjA4IDM1Mi4yMiAyMzkuMzAgTCAzNTMuNzggMjM5LjQ5IEMgMzUzLjM2IDIzOS40OSAzNTIuNTMgMjM5LjQ4IDM1Mi4xMSAyMzkuNDggQyAzNDUuMDIgMjY3LjM5IDMyOS45MCAyOTMuMjEgMzA5LjA4IDMxMy4xMSBDIDI5Mi4yMSAzMjkuNjYgMjcxLjM2IDM0MS45OSAyNDguOTYgMzQ5LjQwIEMgMjIwLjM1IDM1OC42OSAxODkuMDcgMzU5LjYzIDE1OS45OSAzNTEuOTEgQyAxMzIuMzkgMzQ0LjYzIDEwNi44MyAzMjkuNjkgODcuMTEgMzA5LjA0IEMgNTguNjMgMjc5Ljc0IDQyLjM1IDIzOC44OSA0My4zMSAxOTguMDAgQyA0My4zOCAxNTEuNTQgNjYuMDkgMTA2LjExIDEwMi40MyA3Ny4zNiBDIDEyNC45NSA1OS4zOSAxNTIuNDggNDcuNzIgMTgxLjEyIDQ0LjM4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExMi43NCA3Ni43MyBDIDEzNC41NCA2MS40NiAxNjAuMzEgNTEuNTUgMTg2LjkzIDQ5LjU1IEMgMjA2LjQ1IDQ4LjIxIDIyNi4zNyA0OS42MSAyNDUuMDYgNTUuNjggQyAyNzAuOTkgNjMuNzkgMjk0LjY5IDc4Ljk4IDMxMi43NSA5OS4yOCBDIDMzMC4wMCAxMTguMzMgMzQyLjA4IDE0MS45NCAzNDcuODMgMTY2Ljk2IEMgMzUzLjg1IDE5NS4xNSAzNTIuMjkgMjI1LjEyIDM0Mi4yNSAyNTIuMjIgQyAzMzcuMjQgMjY1LjU2IDMzMC40NyAyNzguMjUgMzIyLjA1IDI4OS43NiBDIDMxOC44MCAyODYuODAgMzE5LjY4IDI4Mi40MiAzMTkuNzIgMjc4LjUwIEMgMzE5LjE2IDI3OS44MSAzMTguNjMgMjgxLjEzIDMxOC4xMyAyODIuNDYgQyAzMTcuMzMgMjgwLjE4IDMxNi41NSAyNzcuODUgMzE1LjEyIDI3NS44OCBDIDMxNS41MiAyNzcuMTYgMzE2LjMxIDI3OS43MiAzMTYuNzEgMjgxLjAwIEMgMzE1LjMxIDI3OS43MyAzMTMuODAgMjc4LjY0IDMxMi4xOCAyNzcuNzIgQyAzMTMuMjIgMjc5LjM2IDMxNC40NCAyODAuODcgMzE1LjY3IDI4Mi4zOSBDIDMxNC4yMyAyODEuNzcgMzEyLjc4IDI4MS4yMCAzMTEuMzAgMjgwLjY5IEMgMzEyLjM1IDI4MS44NyAzMTMuNjEgMjgyLjc1IDMxNS4wOCAyODMuMzUgQyAzMTMuOTUgMjgzLjY0IDMxMi44MiAyODMuOTMgMzExLjcwIDI4NC4yMyBDIDMxNi4xNSAyODQuNTQgMzE4LjE5IDI4OC42NyAzMjAuMzUgMjkxLjk1IEMgMzE5LjAwIDI5My43MiAzMTcuNTkgMjk1LjQ1IDMxNi4xNSAyOTcuMTUgQyAzMTIuNTggMjk0LjU2IDMxMS4xMyAyOTAuNDEgMzEwLjU1IDI4Ni4xOSBDIDMxMC4yMyAyODYuMzQgMzA5LjU5IDI4Ni42NCAzMDkuMjggMjg2Ljc4IEMgMzA4LjU5IDI4NS4yMyAzMDYuOTIgMjg0LjgyIDMwNi40NyAyODYuNzYgQyAzMDYuODggMjg3LjI5IDMwNy42OSAyODguMzMgMzA4LjEwIDI4OC44NiBDIDMwNy40NSAyODguNzUgMzA2LjE0IDI4OC41NSAzMDUuNDkgMjg4LjQ0IEMgMzA2LjU5IDI4OS43MiAzMDcuNzEgMjkwLjk4IDMwOC44MiAyOTIuMjYgQyAzMDcuOTcgMjkyLjI1IDMwNi4yNyAyOTIuMjMgMzA1LjQxIDI5Mi4yMiBDIDMwOC40NyAyOTQuNDEgMzExLjQ3IDI5Ni43NCAzMTMuODEgMjk5LjcyIEMgMzEzLjA3IDMwMC42MiAzMTIuMzMgMzAxLjUyIDMxMS42MCAzMDIuNDQgQyAzMTAuOTMgMzAwLjgwIDMxMC42NCAyOTguODIgMzA5LjA3IDI5Ny43NiBDIDMwNS43OCAyOTUuMDcgMzAyLjExIDI5Mi45MSAyOTguNTggMjkwLjU3IEMgMjk3LjE3IDI4OS40NyAyOTUuMzUgMjg5LjUwIDI5My42NyAyODkuMzMgQyAyOTMuMzQgMjkwLjYzIDI5My4wMiAyOTEuOTMgMjkyLjcwIDI5My4yMyBDIDI5My4wMiAyOTQuMDcgMjkzLjM1IDI5NC45MiAyOTMuNjggMjk1Ljc3IEMgMjkyLjE1IDI5OS43NSAyOTEuMjAgMzAzLjkxIDI5MC4xNyAzMDguMDMgQyAyODYuMzkgMzAwLjkxIDI4Mi4zOSAyOTMuNzkgMjgwLjk1IDI4NS43NSBDIDI4MC41MyAyODcuOTQgMjgwLjE2IDI5MC4xNyAyNzguNzggMjkyLjAwIEMgMjc3Ljc4IDI5MC40NyAyNzYuODIgMjg4Ljg4IDI3NS4zOCAyODcuNzEgQyAyNzYuMjIgMjkwLjUyIDI3Ny4zNyAyOTMuMjMgMjc4LjA1IDI5Ni4wOSBDIDI3OC41OCAyOTguNzQgMjgxLjgyIDI5OS41NyAyODIuNTkgMzAyLjEyIEMgMjgzLjg2IDMwNS41MCAyODQuOTYgMzA4Ljk1IDI4Ni40NSAzMTIuMjQgQyAyODUuMjUgMzExLjU3IDI4NC4wNiAzMTAuOTEgMjgyLjg3IDMxMC4yNCBDIDI4MS43MCAzMTAuNTggMjgwLjU0IDMxMC45MiAyNzkuMzkgMzExLjI4IEMgMjc5LjEwIDMxMS44MSAyNzguNTIgMzEyLjg3IDI3OC4yMyAzMTMuMzkgQyAyNzYuODkgMzExLjUxIDI3NS41NiAzMDkuNTYgMjczLjY3IDMwOC4xOSBDIDI3NS41NCAzMDYuODIgMjc3LjU5IDMwNS4zOCAyNzguMDYgMzAyLjk0IEMgMjc0Ljg3IDMwNC44MSAyNzIuMTYgMzA3LjM1IDI2OS4xMyAzMDkuNDMgQyAyNjcuMjIgMzEwLjUxIDI2Ni43NCAzMTIuNzggMjY1Ljg2IDMxNC42MiBDIDI2MS43NyAzMTAuOTYgMjYxLjUyIDMwNS4zNCAyNjAuMjggMzAwLjM2IEMgMjYwLjAyIDMwMS42NiAyNTkuNzcgMzAyLjk3IDI1OS41NCAzMDQuMjggQyAyNTguNzEgMzAyLjY2IDI1Ny43OCAzMDEuMDMgMjU2LjA5IDMwMC4xNiBDIDI1Ni4wNyAzMDMuMzkgMjU2LjI4IDMwNi42NSAyNTcuMjAgMzA5Ljc2IEMgMjU1LjgwIDMwOS43MCAyNTQuNDAgMzA5LjY2IDI1My4wMCAzMDkuNjUgQyAyNTQuODQgMzExLjE3IDI1Ni44MyAzMTIuNDggMjU4Ljg5IDMxMy42OSBDIDI1OC45MSAzMTYuMzkgMjU4Ljg2IDMxOS4wOCAyNTguODAgMzIxLjc4IEMgMjU3LjYyIDMyMy4wNyAyNTYuNDIgMzI0LjM1IDI1NS4xOSAzMjUuNTkgQyAyNTIuNDIgMzI0LjExIDI0OS43NyAzMjIuMzggMjQ2Ljc3IDMyMS40MSBDIDI0Ni4yOSAzMTguODYgMjQ1LjcyIDMxNi4zMiAyNDUuMjYgMzEzLjc2IEMgMjQ0LjA4IDMxMy4wMCAyNDIuOTAgMzEyLjIzIDI0MS43MyAzMTEuNDYgQyAyMzguMjIgMzEyLjYzIDIzNi41NyAzMTYuMjAgMjM3LjYxIDMxOS43MSBDIDIzNi44NCAzMTkuOTUgMjM2LjA4IDMyMC4yMCAyMzUuMzEgMzIwLjQ1IEMgMjM1LjY1IDMxNS45MCAyMzcuMjcgMzExLjU0IDIzNy41MiAzMDcuMDEgQyAyMzcuNjUgMzA0LjkxIDIzNC42MCAzMDUuMjEgMjMzLjM5IDMwNC41NCBDIDIzNC42MyAzMTIuODggMjMxLjc5IDMyMS4wMSAyMjguODIgMzI4LjY0IEMgMjI4LjAxIDMyOC44NyAyMjYuMzggMzI5LjMzIDIyNS41NyAzMjkuNTYgQyAyMjQuOTcgMzI0LjA2IDIyMi40OSAzMTcuODkgMjI2LjI3IDMxMi45OCBDIDIyNS41MyAzMTEuMjIgMjI0Ljk0IDMwOS40MCAyMjQuMzYgMzA3LjU4IEMgMjIzLjkzIDMwNy41NiAyMjMuMDcgMzA3LjUxIDIyMi42NCAzMDcuNDkgQyAyMTkuNzcgMzEyLjExIDIyMi44MSAzMTcuNzggMjIwLjE0IDMyMi41MiBDIDIxNy4zMiAzMTkuNjIgMjE1LjU1IDMxNS45MSAyMTIuODcgMzEyLjkwIEMgMjEzLjM0IDMxNC40NSAyMTMuOTAgMzE1Ljk4IDIxNC41MSAzMTcuNTAgQyAyMTMuNjQgMzE4LjM0IDIxMi43NyAzMTkuMTkgMjExLjkyIDMyMC4wNCBDIDIxMy4xOCAzMjAuNjggMjE0LjQ1IDMyMS4zMCAyMTUuNzQgMzIxLjg2IEMgMjE2LjM3IDMyMi43NyAyMTcuMDAgMzIzLjY5IDIxNy42NSAzMjQuNjAgQyAyMTUuMDUgMzI1LjE3IDIxMi4zNyAzMjUuNzYgMjEwLjQ0IDMyNy43NCBDIDIxMC45NyAzMjUuMjIgMjA4LjM3IDMyNC40MSAyMDcuNDAgMzIyLjYwIEMgMjA2LjY4IDMyMC44NiAyMDguMDcgMzE5LjMyIDIwOC42NyAzMTcuODAgQyAyMDguMzIgMzE2LjM4IDIwNy45NCAzMTQuOTcgMjA3LjU1IDMxMy41NyBDIDIwNi44NCAzMTQuMzMgMjA1Ljc0IDMxNC45MyAyMDUuNTggMzE2LjA2IEMgMjA0LjM0IDMyMS43MyAyMDYuNDcgMzI3LjQzIDIwNi4zMCAzMzMuMTMgQyAyMDUuNTYgMzMyLjE0IDIwNC44NCAzMzEuMTUgMjA0LjExIDMzMC4xNiBDIDIwMS42NyAzMjguOTIgMjAwLjE5IDMyNi42MiAxOTguMzggMzI0LjY5IEMgMTk2LjUyIDMyMi45OCAxOTMuOTEgMzI0LjMxIDE5MS43NiAzMjQuNDkgQyAxOTAuODYgMzI3LjEzIDE4OS43MCAzMjkuOTUgMTkwLjQzIDMzMi43OSBDIDE5MS4xNiAzMzQuNjIgMTkyLjExIDMzNi4zNSAxOTIuOTEgMzM4LjE1IEMgMTkxLjY0IDMzNy4xOSAxODkuODUgMzM2LjU0IDE4OS4zMSAzMzQuOTAgQyAxODguODQgMzMyLjQ0IDE4OC43NSAzMjkuOTMgMTg4LjM5IDMyNy40NiBDIDE5MS43OCAzMjQuMDUgMTk1LjU1IDMyMS4wOSAxOTkuNTEgMzE4LjM4IEMgMjAxLjExIDMxNy42MCAyMDAuNDEgMzE1Ljc4IDIwMC40MiAzMTQuNDAgQyAyMDAuNjQgMzE0LjA2IDIwMS4wNyAzMTMuMzkgMjAxLjI4IDMxMy4wNSBDIDE5OS43MSAzMTMuNDggMTk3LjM5IDMxMi42MiAxOTYuNDIgMzE0LjM0IEMgMTk0LjQ4IDMxNi43NiAxOTMuNTYgMzE5Ljk4IDE5MC45OSAzMjEuODkgQyAxODkuMjggMzIzLjIxIDE4Ny40MyAzMjQuMzQgMTg1LjYzIDMyNS41NCBDIDE4NS4zMSAzMjUuMjcgMTg0LjY1IDMyNC43MyAxODQuMzIgMzI0LjQ3IEMgMTgzLjQ2IDMyNC41MiAxODEuNzIgMzI0LjYyIDE4MC44NSAzMjQuNjggQyAxODIuNTIgMzIxLjA2IDE4My44OSAzMTcuMzAgMTg1LjY2IDMxMy43MyBDIDE4Ni4yOCAzMTIuMjUgMTg3LjM0IDMxMC43MCAxODYuNzkgMzA5LjA0IEMgMTg2LjE5IDMwNy43NSAxODQuNjQgMzA3LjU4IDE4My41MSAzMDcuMDEgQyAxODIuNjkgMzE2LjM1IDE3Ny4wOSAzMjQuMjcgMTcxLjkxIDMzMS43NCBDIDE3MS4wMiAzMzAuMTkgMTcwLjA1IDMyOC42OSAxNjkuMjUgMzI3LjEwIEMgMTcyLjAwIDMyMi44MyAxNzMuNTMgMzE3LjAyIDE3OC43MCAzMTUuMDYgQyAxNzguNzcgMzEzLjQ0IDE3OC43MSAzMTEuODMgMTc4LjU4IDMxMC4yMiBDIDE3Ny42NSAzMTAuMzggMTc2LjczIDMxMC41NiAxNzUuODEgMzEwLjc4IEMgMTc2LjE3IDMxMS45NiAxNzYuNjMgMzEzLjE5IDE3Ni4xMiAzMTQuNDMgQyAxNzUuODQgMzEzLjUzIDE3NS4yOSAzMTEuNzUgMTc1LjAxIDMxMC44NSBDIDE3My45NCAzMTIuOTMgMTczLjQ4IDMxNS4yNyAxNzIuMzUgMzE3LjMyIEMgMTcwLjg0IDMxOS41OSAxNjguNzcgMzIxLjQwIDE2Ni45MCAzMjMuMzcgQyAxNjUuOTIgMzIyLjYyIDE2NC45NCAzMjEuODggMTYzLjk2IDMyMS4xNSBDIDE2MC45OCAzMjAuOTEgMTU3Ljk3IDMyMS4yMyAxNTUuNDMgMzIyLjkxIEMgMTU1LjAzIDMyMC4yNCAxNTQuNjYgMzE3LjU2IDE1NC40MyAzMTQuODcgQyAxNTUuMjYgMzEzLjk1IDE1Ni4wOCAzMTMuMDUgMTU2LjkxIDMxMi4xNCBDIDE1Ni44NyAzMTAuNzQgMTU2Ljg0IDMwOS4zNCAxNTYuODEgMzA3Ljk1IEMgMTU1LjA4IDMwNi45NSAxNTMuNTEgMzA1LjA5IDE1MS4zNCAzMDUuMzQgQyAxNDguNzQgMzA2LjU5IDE0Ni4yNiAzMDguODMgMTQ1Ljg4IDMxMS44MyBDIDE0NS41OCAzMTQuMDIgMTQ1LjU2IDMxNi4yMyAxNDUuMzkgMzE4LjQzIEMgMTQ0LjkyIDMxOC41NCAxNDMuOTcgMzE4Ljc2IDE0My41MCAzMTguODggQyAxNDIuOTggMzE1LjI1IDE0My41OSAzMTEuNjYgMTQ0LjQzIDMwOC4xNCBDIDE0Ny43MyAzMDUuOTkgMTUxLjAyIDMwMy42OCAxNTQuODggMzAyLjYzIEMgMTU2LjMwIDMwMy40MyAxNTcuNzMgMzA0LjIxIDE1OS4xOCAzMDQuOTcgQyAxNjAuNTcgMzAyLjgwIDE2MC44NyAzMDAuMzQgMTU5LjcxIDI5OC4wMSBDIDE1My41MCAzMDAuMzcgMTQ2LjkwIDMwMS43OSAxNDAuOTcgMzA0Ljg1IEMgMTM5LjE0IDMwOS40NCAxMzYuNzQgMzEzLjc5IDEzNS4zOCAzMTguNTYgTCAxMzQuNjUgMzE4LjE4IEMgMTM0LjE2IDMxOS41OSAxMzMuNjIgMzIwLjk5IDEzMy4wMyAzMjIuMzYgQyAxMzEuNzggMzE4LjE5IDEyOS45MCAzMTQuMjMgMTI4LjgzIDMxMC4wMCBDIDEyOS41OCAzMDkuMjcgMTMxLjA4IDMwNy44MCAxMzEuODIgMzA3LjA2IEwgMTI4Ljc1IDMwNy4zMiBDIDEyOS44OSAzMDYuNTggMTMxLjAzIDMwNS44MyAxMzIuMTYgMzA1LjA4IEMgMTMxLjExIDMwNC43MCAxMjguOTkgMzAzLjk2IDEyNy45NCAzMDMuNTkgQyAxMjcuMzYgMzAwLjk5IDEyNy4wOCAyOTguMzMgMTI3LjY3IDI5NS43MSBDIDEyNi4zNiAyOTcuOTEgMTI0LjY0IDI5OS44MSAxMjIuNzggMzAxLjU3IEMgMTIzLjYwIDMwMS41MyAxMjUuMjIgMzAxLjQ2IDEyNi4wMyAzMDEuNDIgQyAxMjUuMzAgMzAyLjA3IDEyMy44MyAzMDMuMzcgMTIzLjEwIDMwNC4wMiBDIDEyMy41NyAzMDQuNTMgMTI0LjUxIDMwNS41NSAxMjQuOTggMzA2LjA2IEMgMTIyLjM2IDMwOC44MiAxMTguODggMzEwLjQzIDExNS4xOSAzMTEuMTYgQyAxMTYuMzEgMzA0LjkxIDExNy4zMSAyOTguNDQgMTIwLjU4IDI5Mi44NyBDIDExOS44MiAyOTMuMjIgMTE4LjI4IDI5My45MCAxMTcuNTIgMjk0LjI1IEMgMTE4LjA0IDI5My4zMCAxMTkuMDggMjkxLjQwIDExOS42MCAyOTAuNDUgQyAxMTguNzggMjkxLjI3IDExNy4xNCAyOTIuOTEgMTE2LjMyIDI5My43NCBDIDExNi41MSAyOTIuNzcgMTE2Ljg5IDI5MC44NCAxMTcuMDkgMjg5Ljg4IEMgMTE2LjY2IDI5MC4zOSAxMTUuODAgMjkxLjQzIDExNS4zOCAyOTEuOTUgQyAxMTQuOTcgMjg5LjY3IDExMi41OSAyODkuNTYgMTEzLjIxIDI5MS44NyBDIDExMi40NSAyOTUuMDcgMTE1LjQ4IDI5OC4wMSAxMTQuMDQgMzAxLjEwIEMgMTEyLjg1IDMwNC4zMyAxMTEuNjAgMzA3LjU3IDExMC45OCAzMTAuOTggQyAxMDkuNjQgMzEwLjU5IDEwOC4zMCAzMTAuMjYgMTA2Ljk1IDMwOS45NyBDIDEwOC4yOCAzMDguNTAgMTA5LjQ2IDMwNi45MCAxMTAuMzkgMzA1LjE1IEMgMTExLjE5IDMwNC4zOCAxMTEuOTggMzAzLjU4IDExMi42OSAzMDIuNzIgQyAxMTIuMDQgMzAyLjQ1IDExMC43NSAzMDEuOTAgMTEwLjEwIDMwMS42MyBDIDExMC42OCAyOTkuOTUgMTExLjI4IDI5OC4yOCAxMTEuNjggMjk2LjU2IEMgMTA5LjI5IDI5OS40NCAxMDcuOTEgMzAyLjk1IDEwNi4yMiAzMDYuMjQgQyAxMDMuODUgMzA4Ljc5IDEwMC40NCAzMTAuMDMgOTcuMzQgMzExLjQ0IEMgOTcuMzIgMzExLjE5IDk3LjI3IDMxMC43MSA5Ny4yNCAzMTAuNDYgQyA5OC4wNyAzMDQuMDggOTcuMzIgMjk3LjYyIDk4LjM3IDI5MS4yNiBDIDEwMS4xOSAyODkuNjEgMTA0LjEwIDI4OC4wNyAxMDYuNjkgMjg2LjA1IEMgMTA2LjU2IDI4NS40MCAxMDYuMjkgMjg0LjA5IDEwNi4xNiAyODMuNDMgQyAxMDMuNTIgMjg1LjE5IDEwMC42MSAyODYuNDQgOTcuODYgMjg4LjAwIEMgOTUuNzAgMjg5LjM2IDk1LjIyIDI5Mi4wNyA5NC41NiAyOTQuMzUgQyA5My40MCAyOTguMzggOTIuODUgMzAyLjU1IDkyLjY0IDMwNi43MyBDIDkxLjMwIDMwNS4wOSA4OS44NiAzMDMuNTQgODguMzkgMzAyLjAyIEwgODguMzQgMzAxLjQ1IEMgODguNDAgMjk4LjkzIDg3LjM3IDI5Ni42NSA4Ni40MCAyOTQuNDAgQyA4NC44MSAyOTMuODcgODMuMjYgMjkzLjk0IDgxLjczIDI5NC42MCBDIDgxLjUwIDI5My40MSA4MS4yNSAyOTIuMjMgODEuMDkgMjkxLjA0IEMgODUuMTIgMjg4LjEyIDg5LjE4IDI4NS4xMCA5Mi41MyAyODEuNDAgQyA5Mi4yNiAyODAuNjQgOTEuNzAgMjc5LjExIDkxLjQyIDI3OC4zNCBDIDkxLjAxIDI3OC4wMiA5MC4xOCAyNzcuMzkgODkuNzcgMjc3LjA3IEMgODYuNjYgMjgxLjgzIDgyLjY3IDI4NS45MyA3Ny44OSAyODkuMDIgQyA1OS4wNyAyNjMuNDcgNDguNTUgMjMxLjc1IDQ5LjEwIDE5OS45NiBDIDQ4LjYwIDE2OC4zOCA1OS4yMSAxMzcuMDUgNzcuNjIgMTExLjUzIEMgODcuNDUgOTguMjIgOTkuMzQgODYuNDMgMTEyLjc0IDc2LjczIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ni45MCA1Ny40MiBDIDIwNS45NSA1NS4xMiAyMTYuNDUgNTguMzAgMjIyLjAzIDY1Ljk2IEMgMjI3LjE1IDcyLjczIDIyNy4zNyA4Mi4xNyAyMjQuNTggODkuOTIgQyAyMjEuNTUgOTcuODMgMjEzLjk3IDEwMi44NCAyMDYuMzAgMTA1LjYxIEMgMjA2LjI5IDEwOC4wMiAyMDYuMjcgMTEwLjQyIDIwNi4yNiAxMTIuODMgQyAyMDQuMDkgMTE1LjE2IDIwMi4wMyAxMTcuNTkgMTk5Ljk3IDEyMC4wMyBDIDE5OC43MCAxMTguNzAgMTk2LjgwIDExNy43NiAxOTYuMTEgMTE2LjAwIEMgMTk3LjAwIDExNC40MCAxOTguMzkgMTEzLjE1IDE5OS42MSAxMTEuODAgQyAxOTEuODAgMTA0Ljg4IDE4Mi45OSA5OS4xNyAxNzUuMzIgOTIuMTAgQyAxNzYuMDcgOTAuNjAgMTc3LjIzIDg5LjQ2IDE3OC44NyA4OS4wMiBDIDE4My4wNyA5Mi45MiAxODYuOTUgOTcuMTYgMTkxLjE4IDEwMS4wMyBDIDE5My40MyA5NC43MiAxOTYuMDEgODguNDkgMTk3Ljc4IDgyLjA0IEMgMTk3LjQ1IDc4LjI0IDE5Ni4wNCA3NC42MyAxOTUuMjIgNzAuOTIgQyAxOTAuMDkgNjkuNzUgMTg1LjE1IDY3Ljg2IDE4MC4wMiA2Ni42NyBDIDE3OC4yMCA2Ni45MiAxNzYuNDEgNjcuMzUgMTc0LjU5IDY3LjU1IEMgMTc0LjU1IDY2LjUwIDE3NC41MSA2NS40NiAxNzQuNDkgNjQuNDEgQyAxNzcuMzggNjQuMzcgMTgwLjIyIDY0Ljk2IDE4My4wNSA2NS40NiBDIDE4Ni45MCA2MS42OSAxOTEuNTUgNTguNTMgMTk2LjkwIDU3LjQyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE4NC45NCA2NS44MSBDIDE4OS4zMiA2MS4zNCAxOTUuNzQgNTkuMDIgMjAxLjk3IDU5LjUwIEMgMjA5LjQ4IDU5LjcwIDIxNi41NSA2NC42MiAyMTkuNDMgNzEuNTUgQyAyMjIuNTAgNzkuMDggMjIyLjU1IDg4LjIwIDIxOC4yNCA5NS4yOCBDIDIxNi4xMCA5OC43OCAyMTIuNjIgMTAxLjIyIDIwOC44NSAxMDIuNzAgQyAyMDcuMzggOTUuNzUgMjA2LjE5IDg4LjczIDIwNC40MSA4MS44NyBDIDIwMy44NCA4MS43MiAyMDIuNzAgODEuNDEgMjAyLjEzIDgxLjI1IEMgMjAzLjk2IDc5LjAwIDIwNS4zMSA3Ni40MCAyMDYuMDcgNzMuNTkgQyAyMDkuOTkgNzIuODIgMjEzLjk4IDcyLjU4IDIxNy45NSA3Mi4yNCBDIDIxNC42OSA2OC43NyAyMDkuOTUgNjYuNTUgMjA3Ljk0IDYyLjA0IEMgMjA3LjI1IDYyLjE3IDIwNS44NiA2Mi40MiAyMDUuMTcgNjIuNTUgQyAyMDUuNTIgNjMuNTUgMjA1LjQwIDY1LjA2IDIwNi43NyA2NS4zMiBDIDIwOC44NiA2Ni4xNCAyMTAuMDggNjguMDkgMjExLjI4IDY5Ljg2IEMgMjA4LjI2IDY5Ljc1IDIwNS4yOSA2OS4yMiAyMDIuMzYgNjguNTIgQyAyMDIuMDggNjYuMTggMjAxLjg1IDYzLjg0IDIwMS42NCA2MS40OSBDIDE5OS44MyA2MS4yNCAxOTguMDEgNjEuMDAgMTk2LjE5IDYwLjg1IEMgMTk2LjU4IDYzLjczIDE5Ny42OCA2Ni40MyAxOTkuODkgNjguMzkgQyAxOTQuODggNjcuNjggMTg5LjkxIDY2Ljc0IDE4NC45NCA2NS44MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTIuMTkgMTAyLjAwIEMgMTk0Ljg4IDk2Ljg3IDE5OC4xMyA5Mi4wMyAyMDEuMDggODcuMDQgQyAyMDMuNDQgOTIuMzEgMjA1LjQ1IDk3LjczIDIwNy42MCAxMDMuMTAgQyAyMDQuNzUgMTA1LjAxIDIwMi45MyAxMDcuOTggMjAwLjc1IDExMC41NyBDIDE5Ny43OSAxMDcuODIgMTk0LjgzIDEwNS4wNiAxOTIuMTkgMTAyLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ny41MyA5OS40OSBDIDE5OC40NyA5OS40OCAyMDAuMzYgOTkuNDYgMjAxLjMwIDk5LjQ2IEMgMjAxLjI5IDEwMi4wOCAyMDEuMzAgMTA0LjcwIDIwMS4yOSAxMDcuMzMgQyAyMDAuNjcgMTA3LjI5IDE5OS40NCAxMDcuMjAgMTk4LjgyIDEwNy4xNiBDIDE5OC42NSAxMDQuNTYgMTk4LjY0IDEwMS45MSAxOTcuNTMgOTkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTc1LjY5IDEwOS41NSBDIDE3Ni4wMCAxMDcuNDMgMTc0LjM2IDEwMy43MiAxNzcuNzAgMTAzLjY1IEMgMTc3LjcxIDEwNC41NyAxNzcuNzQgMTA2LjQyIDE3Ny43NSAxMDcuMzUgQyAxODAuNjUgMTA3LjQ1IDE4My41NSAxMDcuNTYgMTg2LjQ1IDEwNy4zOCBDIDE4Ny4yMSAxMDguOTggMTg3Ljk5IDExMC41NyAxODguODYgMTEyLjExIEMgMTg5Ljc3IDExMC42MSAxODguNTMgMTA4Ljk5IDE4OC4zNCAxMDcuNDggQyAxODkuMTkgMTA3LjQ1IDE5MC44OCAxMDcuNDAgMTkxLjczIDEwNy4zNyBDIDE5MS43OCAxMTAuMzAgMTkxLjgwIDExMy4yNCAxOTEuNzggMTE2LjE3IEMgMTg5LjEwIDExNS45MyAxODYuMTIgMTE2LjgxIDE4My42NCAxMTUuNTYgQyAxODMuNjMgMTE1LjE1IDE4My42MCAxMTQuMzMgMTgzLjU4IDExMy45MiBDIDE4NC40MCAxMTMuODIgMTg2LjA0IDExMy42MiAxODYuODYgMTEzLjUyIEMgMTg1Ljc2IDExMS4zNSAxODQuNDMgMTA5LjMwIDE4Mi44MiAxMDcuNDggQyAxODEuMzIgMTEwLjYxIDE4Mi43NCAxMTcuMzYgMTc3LjM1IDExNi40MCBDIDE3Ny4yNCAxMTQuOTggMTc3LjgxIDExMy44OCAxNzkuMDUgMTEzLjA5IEMgMTc5LjE5IDExMi4yMSAxNzkuNDYgMTEwLjQ1IDE3OS42MCAxMDkuNTcgQyAxNzguMjkgMTA5LjU2IDE3Ni45OSAxMDkuNTYgMTc1LjY5IDEwOS41NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMDcuNDkgMTA3LjM3IEMgMjA5Ljc1IDEwNy40MCAyMTIuMDEgMTA3LjQxIDIxNC4yOCAxMDcuNDEgQyAyMTQuMjMgMTEwLjE4IDIxNC4yMyAxMTIuOTUgMjE0LjM2IDExNS43MiBDIDIxMi4xMiAxMTYuMjMgMjA5LjgxIDExNi4yMiAyMDcuNTIgMTE2LjIzIEMgMjA3LjUwIDExNS42MSAyMDcuNDQgMTE0LjM5IDIwNy40MSAxMTMuNzggQyAyMDguODYgMTEzLjc4IDIxMC4zMSAxMTMuNzkgMjExLjc2IDExMy43OSBDIDIxMS42NiAxMTIuMTcgMjExLjgyIDExMC40NCAyMTAuOTQgMTA5LjAxIEMgMjEwLjMwIDExMC43NSAyMDkuMTIgMTExLjU4IDIwNy40MSAxMTEuNTEgQyAyMDcuNDMgMTEwLjQ3IDIwNy40NyAxMDguNDEgMjA3LjQ5IDEwNy4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTUuODIgMTA3LjQyIEMgMjE3Ljk1IDEwNy40MSAyMjAuMDkgMTA3LjQxIDIyMi4yMiAxMDcuNDIgQyAyMjIuMTUgMTEwLjEzIDIyMi4xNCAxMTIuODUgMjIyLjI1IDExNS41NiBDIDIyMS42MyAxMTUuNzYgMjIwLjM4IDExNi4xNSAyMTkuNzYgMTE2LjM1IEMgMjE5LjczIDExNC4wOCAyMTkuNzIgMTExLjgxIDIxOS43MCAxMDkuNTQgQyAyMTguNDIgMTA5LjUzIDIxNy4xNCAxMDkuNTMgMjE1Ljg2IDEwOS41MyBMIDIxNS44MiAxMDcuNDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjE2LjIzIDExMS40NCBDIDIxNi43OCAxMTEuNTMgMjE3Ljg3IDExMS43MCAyMTguNDEgMTExLjc5IEMgMjE4LjM5IDExMy4yOCAyMTguMzcgMTE0Ljc4IDIxOC4zNSAxMTYuMjggQyAyMTcuNjkgMTE2LjI0IDIxNi4zOSAxMTYuMTUgMjE1Ljc0IDExNi4xMSBDIDIxNS44OSAxMTQuNTUgMjE2LjA1IDExMy4wMCAyMTYuMjMgMTExLjQ0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDExOS4yNSAxMzYuMzAgQyAxMjQuNzQgMTM2LjM1IDEzMC4yMyAxMzYuMzEgMTM1LjczIDEzNi4zMiBDIDEzNS43NiAxNDMuNDIgMTM1LjY5IDE1MC41MiAxMzUuNzcgMTU3LjYyIEMgMTM4LjE3IDE1NS45NiAxNDEuNDggMTU0Ljg3IDE0Mi42NCAxNTEuOTUgQyAxNDMuMTIgMTQ2Ljc2IDE0Mi42OSAxNDEuNTMgMTQyLjg2IDEzNi4zMiBDIDE0OC42MyAxMzYuMzIgMTU0LjQwIDEzNi4zMSAxNjAuMTggMTM2LjMzIEMgMTYwLjEwIDE0MS4yNiAxNjAuMjYgMTQ2LjIwIDE2MC4xMiAxNTEuMTMgQyAxNTkuNzggMTU1LjA1IDE1Ny4zMSAxNTguNzEgMTUzLjg5IDE2MC42MSBDIDE0Ny44NSAxNjQuMDQgMTQxLjgwIDE2Ny40NCAxMzUuNzMgMTcwLjgwIEMgMTM1LjczIDE3Ny44MSAxMzUuNzMgMTg0LjgyIDEzNS43NCAxOTEuODMgQyAxMzAuMjQgMTkxLjg2IDEyNC43NCAxOTEuODIgMTE5LjIzIDE5MS44NiBDIDExOS4yNyAxNzMuMzQgMTE5LjIzIDE1NC44MiAxMTkuMjUgMTM2LjMwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE2NC45MiAxMzYuMzIgQyAxNzAuNDYgMTM2LjM1IDE3NS45OSAxMzYuMjggMTgxLjUyIDEzNi4zNSBDIDE4MS40NCAxNTAuNzkgMTgxLjQzIDE2NS4yMyAxODEuNTIgMTc5LjY3IEMgMTc2LjA1IDE3OS42MiAxNzAuNTcgMTc5Ljg3IDE2NS4xMCAxNzkuNTcgQyAxNjQuNjMgMTY1LjIzIDE2NC45OSAxNTAuNzIgMTY0LjkyIDEzNi4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxODYuMjggMTM2LjMwIEMgMjAwLjY5IDEzNi4zNCAyMTUuMTAgMTM2LjMzIDIyOS41MSAxMzYuMzEgQyAyMjkuNTIgMTUwLjc3IDIyOS40OSAxNjUuMjMgMjI5LjUzIDE3OS42OSBDIDIyMy45NCAxNzkuNjQgMjE4LjM1IDE3OS44MSAyMTIuNzcgMTc5LjYwIEMgMjEyLjk1IDE3MC4yOCAyMTIuNzcgMTYwLjk1IDIxMi44NyAxNTEuNjIgQyAyMDkuNTEgMTUxLjU1IDIwNi4xNSAxNTEuNTcgMjAyLjgwIDE1MS42MCBDIDIwMi44NyAxNjAuOTYgMjAyLjgxIDE3MC4zMyAyMDIuODMgMTc5LjY5IEMgMTk3LjMyIDE3OS43MyAxOTEuODAgMTc5LjY3IDE4Ni4yOSAxNzkuNjkgQyAxODYuMzAgMTY1LjIzIDE4Ni4zMiAxNTAuNzYgMTg2LjI4IDEzNi4zMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyMzQuMDkgMTM2LjI4IEMgMjM5LjY3IDEzNi4zOCAyNDUuMjUgMTM2LjI5IDI1MC44NCAxMzYuMzMgQyAyNTAuODYgMTQxLjUyIDI1MC42NiAxNDYuNzIgMjUwLjk5IDE1MS45MCBDIDI1My44OCAxNDguOTAgMjUzLjUzIDE0NC4yMyAyNTUuODAgMTQwLjgzIEMgMjU3LjU3IDEzNy41OSAyNjEuNDEgMTM2LjI4IDI2NC45MiAxMzYuMzQgQyAyNjguNzQgMTM2LjQwIDI3Mi44NSAxMzUuNzggMjc2LjQyIDEzNy40OCBDIDI3OS41MSAxMzkuMDQgMjgwLjc2IDE0Mi42NyAyODAuNzEgMTQ1Ljk1IEMgMjgwLjc0IDE1Ny4xOCAyODAuNzAgMTY4LjQyIDI4MC43MiAxNzkuNjYgQyAyNzIuOTIgMTc5LjY2IDI2NS4xMiAxNzkuNzAgMjU3LjMyIDE3OS42NiBDIDI1Ny4zNyAxNzQuNTkgMjU3LjM1IDE2OS41MiAyNTcuMzIgMTY0LjQ1IEMgMjU5LjU2IDE2NC40NSAyNjEuODEgMTY0LjQ0IDI2NC4wNiAxNjQuNDMgQyAyNjQuMDMgMTYwLjYyIDI2NC4yNCAxNTYuNzkgMjYzLjczIDE1My4wMSBDIDI2Mi4wOSAxNTIuNDEgMjU5LjExIDE1MS44NiAyNTguNDUgMTU0LjA0IEMgMjU1Ljg2IDE2Mi41NSAyNTMuNTEgMTcxLjE0IDI1MC45NCAxNzkuNjYgQyAyNDUuMDcgMTc5LjczIDIzOS4xOSAxNzkuNzIgMjMzLjMyIDE3OS42NiBDIDIzNS41NCAxNzIuNjYgMjM3LjU5IDE2NS42MCAyMzkuODkgMTU4LjYyIEMgMjM3Ljc5IDE1OC4yMiAyMzQuNjAgMTU3LjkwIDIzNC4zNiAxNTUuMTggQyAyMzMuNzYgMTQ4LjkxIDIzNC4yNSAxNDIuNTggMjM0LjA5IDEzNi4yOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMi4zNiAxODMuOTggQyAyNC45MyAxODQuNjMgMjcuNDIgMTg1LjU1IDI5Ljc0IDE4Ni44NSBDIDI4LjgyIDE4Ny4zNiAyNi45OCAxODguMzggMjYuMDcgMTg4Ljg5IEMgMjYuNDQgMTg5LjA2IDI3LjE5IDE4OS40MCAyNy41NyAxODkuNTYgQyAyNy43OCAxOTAuMjQgMjguMjAgMTkxLjYwIDI4LjQxIDE5Mi4yOCBDIDI4LjI5IDE5Mi45NCAyOC4wNiAxOTQuMjYgMjcuOTQgMTk0LjkyIEMgMjkuNDAgMTkyLjE0IDMyLjYwIDE5MC45NCAzNC4xMCAxODguMjEgQyAzNC43MiAxODguMjAgMzUuOTcgMTg4LjIwIDM2LjU5IDE4OC4yMCBDIDM2LjU4IDE4OS4zNyAzNi41NyAxOTAuNTUgMzYuNTYgMTkxLjczIEMgMzMuOTUgMTkyLjc5IDMxLjcyIDE5NC41MSAyOS40MSAxOTYuMDggQyAzMC41OSAxOTYuODcgMzEuNzggMTk3LjY4IDMyLjk3IDE5OC40OCBDIDMzLjgzIDE5OC4zNSAzNS41NyAxOTguMDggMzYuNDQgMTk3Ljk1IEMgMzYuNDcgMTk5LjU3IDM2LjQ5IDIwMS4yMCAzNi40OCAyMDIuODMgQyAzMy42NyAyMDEuODcgMzEuMDYgMjAwLjQ1IDI4LjQ0IDE5OS4wNyBDIDI3LjQ4IDIwMS4yMiAyNS42MSAyMDIuNjUgMjMuNzYgMjAzLjk5IEMgMjUuNTkgMjA1LjM0IDI3LjU0IDIwNi41NyAyOS4wNiAyMDguMjkgQyAzMC4yMCAyMDkuODMgMjguNzUgMjExLjc3IDI4LjQ4IDIxMy4zNyBDIDI5LjkwIDIxNC4wNCAzMS4zMyAyMTQuNzUgMzIuMDAgMjE2LjI5IEMgMzAuMjggMjE2LjMwIDI4LjU3IDIxNi4yMiAyNi44NiAyMTYuMDQgQyAyNC45MyAyMTUuMjMgMjUuOTkgMjEyLjgzIDI1LjY0IDIxMS4yNyBDIDI0Ljg2IDIxMC4yNiAyMy42MyAyMDkuNzYgMjIuNjEgMjA5LjA2IEMgMjEuMjUgMjEwLjMyIDE5LjQzIDIxMS4zMyAxOS4wNSAyMTMuMzAgQyAyMC40MyAyMTQuMDMgMjEuODUgMjE0Ljc4IDIyLjY2IDIxNi4yMSBDIDIwLjY5IDIxNi4yNiAxOC43MiAyMTYuMjUgMTYuNzQgMjE2LjIwIEMgMTUuNzYgMjEyLjYyIDE4LjAyIDIwOS4yMSAxNy4yNiAyMDUuNjcgQyAxNi4zNiAyMDUuMTIgMTUuNDEgMjA0LjY1IDE0LjQ0IDIwNC4yNSBDIDEyLjk4IDIwMC45NCAxNC44MSAxOTcuNDMgMTQuMjEgMTk0LjAzIEMgMTMuODkgMTkyLjQxIDEzLjQ5IDE5MC44MiAxMy4yMCAxODkuMjAgQyAxMy44MCAxODkuMjIgMTUuMDIgMTg5LjI0IDE1LjYzIDE4OS4yNiBDIDE1LjkyIDE5My41MCAxNS42MiAxOTcuNzQgMTUuNTEgMjAxLjk4IEMgMTUuOTAgMjAyLjQyIDE2LjY4IDIwMy4yOSAxNy4wNyAyMDMuNzIgQyAxOC41NSAyMDIuMzMgMjAuNzUgMjAxLjMyIDIxLjEyIDE5OS4xMSBDIDIxLjY2IDE5NS42NCAxOC43NyAxOTIuNTAgMTkuNjggMTg5LjAxIEMgMjAuMzIgMTg3LjIxIDIxLjQyIDE4NS42MyAyMi4zNiAxODMuOTggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzY5LjI1IDE4Ni45MCBDIDM3MS41NCAxODUuNTUgMzc0LjA0IDE4NC42NCAzNzYuNjAgMTgzLjk1IEMgMzc3LjU0IDE4NS42MCAzNzguNjMgMTg3LjE5IDM3OS4zMCAxODguOTggQyAzNzkuOTggMTkyLjA5IDM3OC4wNiAxOTQuOTggMzc3Ljc3IDE5OC4wMiBDIDM3Ny42MyAyMDAuNTkgMzc5LjgzIDIwMi4zNSAzODEuODUgMjAzLjQ3IEMgMzg0Ljc4IDIwMi43MCAzODMuMDEgMTk5LjA4IDM4My4yOCAxOTYuOTkgQyAzODMuNjEgMTk0LjA5IDM4MS45MSAxOTAuMDEgMzg1LjE2IDE4OC4zMSBDIDM4NS40MCAxODkuNTYgMzg1LjcxIDE5MC44OCAzODUuMjIgMTkyLjEzIEMgMzgzLjYzIDE5Ni4xMSAzODYuMTQgMjAwLjM2IDM4NC41NyAyMDQuMzQgQyAzODMuODUgMjA0LjU5IDM4Mi40MiAyMDUuMTAgMzgxLjcxIDIwNS4zNiBDIDM4MC43NSAyMDguOTQgMzgzLjY5IDIxMi43MyAzODEuODkgMjE2LjA4IEMgMzgwLjA3IDIxNi4zNyAzNzguMjIgMjE2LjI0IDM3Ni4zOSAyMTYuMjIgQyAzNzcuMDEgMjE0LjYzIDM3OC41NSAyMTQuMDIgMzc5Ljk2IDIxMy4zNSBDIDM3OS41MSAyMTEuNDAgMzc3LjczIDIxMC4zNSAzNzYuMzggMjA5LjA3IEMgMzc1LjM0IDIwOS43NCAzNzQuMjIgMjEwLjM0IDM3My4zNCAyMTEuMjIgQyAzNzMuMzAgMjEyLjQ3IDM3My4yNyAyMTMuNzMgMzczLjI1IDIxNC45OCBDIDM3Mi4wMiAyMTcuMTQgMzY4Ljk4IDIxNS44MCAzNjcuMDIgMjE2LjI4IEMgMzY3LjYwIDIxNC42NiAzNjkuMDcgMjEzLjk5IDM3MC41MCAyMTMuMzMgQyAzNzAuMDYgMjExLjg2IDM2OS42NiAyMTAuMzkgMzY5LjI4IDIwOC45MSBDIDM3MS4wNSAyMDcuMDQgMzczLjA4IDIwNS40NSAzNzUuMjEgMjA0LjAyIEMgMzczLjM2IDIwMi42NiAzNzEuNTQgMjAxLjE4IDM3MC41MCAxOTkuMDggQyAzNjcuOTMgMjAwLjUwIDM2NS4zNCAyMDEuOTQgMzYyLjQ5IDIwMi43NiBDIDM2Mi40OSAyMDEuMTAgMzYyLjUxIDE5OS40NSAzNjIuNTUgMTk3Ljc5IEMgMzYzLjM5IDE5Ny45NyAzNjUuMDcgMTk4LjMzIDM2NS45MCAxOTguNTEgQyAzNjcuMTQgMTk3LjcyIDM2OC4zOSAxOTYuOTQgMzY5LjY1IDE5Ni4xOCBDIDM2Ny4zMyAxOTQuNTcgMzY1LjA3IDE5Mi44MyAzNjIuNDUgMTkxLjcyIEMgMzYyLjQyIDE5MC41NSAzNjIuMzkgMTg5LjM4IDM2Mi4zNyAxODguMjEgQyAzNjIuOTkgMTg4LjIxIDM2NC4yMyAxODguMjEgMzY0Ljg1IDE4OC4yMSBDIDM2Ni4xMCAxOTAuMjcgMzY4LjAxIDE5MS44OCAzNzAuMzUgMTkyLjYwIEMgMzcwLjM3IDE5My4xMyAzNzAuNDIgMTk0LjIwIDM3MC40NCAxOTQuNzMgQyAzNzEuNjUgMTkzLjI0IDM3MS4zOSAxOTEuMzcgMzcxLjI1IDE4OS42MCBDIDM3MS42NyAxODkuMzkgMzcyLjQ5IDE4OC45OCAzNzIuOTEgMTg4Ljc3IEMgMzcxLjk5IDE4OC4zMCAzNzAuMTYgMTg3LjM3IDM2OS4yNSAxODYuOTAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjA2Ljc5IDE4Ni4zNyBDIDIwNi45MSAxODYuNDAgMjA3LjE2IDE4Ni40NiAyMDcuMjggMTg2LjQ5IEMgMjA2LjkzIDE4Ny43NSAyMDYuNjAgMTg5LjAxIDIwNi4yOCAxOTAuMjggQyAyMDUuNDUgMTkzLjQxIDIwNC41OCAxOTYuNTMgMjAzLjc0IDE5OS42NiBDIDIxMi4xOCAyMDAuNTkgMjIwLjUzIDIwMi4zNCAyMjkuMDQgMjAyLjUzIEMgMjMwLjU1IDE5OS40OSAyMzIuMTggMTk2LjUxIDIzMy44NSAxOTMuNTYgQyAyMzMuMTkgMTkzLjY5IDIzMS44NyAxOTMuOTUgMjMxLjIxIDE5NC4wOCBDIDIyOS42NCAxOTUuNDIgMjI4LjAyIDE5Ni43MiAyMjYuMzkgMTk3Ljk5IEMgMjI2Ljk4IDE5Ni40MiAyMjcuNjEgMTk0Ljg3IDIyOC4yNCAxOTMuMzIgQyAyMjguNzEgMTkyLjE2IDIyOS4xOSAxOTEuMDIgMjI5LjcxIDE4OS44OCBDIDIyOS43NCAxOTEuNDIgMjI5LjYwIDE5Mi45NSAyMjkuMjkgMTk0LjQ3IEMgMjMwLjQ3IDE5Mi45NCAyMzEuNzUgMTkxLjQ5IDIzMy4xMSAxOTAuMTIgTCAyMzIuMTEgMTkyLjEzIEMgMjMyLjgyIDE5Mi42MyAyMzMuNTQgMTkzLjE0IDIzNC4yNiAxOTMuNjUgTCAyMzQuODUgMTkxLjE5IEMgMjM1LjQyIDE5OS41MSAyMjguMTkgMjA1LjQ2IDIyNi4zOCAyMTMuMjIgQyAyMzEuNzMgMjEzLjI1IDIzNy4wOCAyMTMuMjEgMjQyLjQ0IDIxMy4yMiBDIDI0Mi40NSAyMjcuNjcgMjQyLjQ0IDI0Mi4xMiAyNDIuNDUgMjU2LjU4IEMgMjM2LjkwIDI1Ni41MyAyMzEuMzUgMjU2LjYzIDIyNS44MSAyNTYuNTAgQyAyMjUuODAgMjQyLjU3IDIyNi4wOSAyMjguNjMgMjI1LjY2IDIxNC43MiBDIDIyNC40NCAyMTcuMjggMjIzLjQ0IDIxOS45NCAyMjIuMjUgMjIyLjUyIEMgMjE3LjE4IDIzMi45NyAyMTUuNjkgMjQ0LjgxIDIxMC4xMiAyNTUuMDQgQyAyMDcuNzcgMjU4LjE3IDIwNS4wOCAyNjEuMTcgMjAxLjg3IDI2My40MyBDIDE5Ni44NiAyNjMuNTQgMTkxLjg4IDI2Mi43NiAxODYuODggMjYyLjU0IEMgMTgxLjY4IDI2Mi4yNCAxNzcuMDQgMjU5LjY5IDE3Mi4zMiAyNTcuNzggQyAxNjkuNzIgMjY1Ljk0IDE2Ni45OCAyNzQuMDYgMTY0LjE1IDI4Mi4xNCBDIDE2My44NyAyODAuOTUgMTYzLjY0IDI3OS43NSAxNjMuNDQgMjc4LjU1IEMgMTYyLjE4IDI3OS41NyAxNjEuMjcgMjgwLjkyIDE2MC4xOSAyODIuMTEgQyAxNjAuNzggMjgwLjIwIDE2MS41MyAyNzguMzMgMTYyLjYxIDI3Ni42NSBDIDE2MS41MiAyNzYuNzQgMTYwLjQzIDI3Ni44MyAxNTkuMzQgMjc2LjkyIEMgMTU5LjA2IDI3Ny42MCAxNTguNTAgMjc4Ljk3IDE1OC4yMiAyNzkuNjYgQyAxNTcuOTggMjc5LjYyIDE1Ny40OCAyNzkuNTUgMTU3LjIzIDI3OS41MSBDIDE1Ny42MCAyNzguODggMTU4LjMzIDI3Ny42MiAxNTguNzAgMjc2Ljk5IEMgMTU3Ljc5IDI3Ni4zMSAxNTYuODAgMjc1Ljc1IDE1NS44MSAyNzUuMTkgQyAxNTUuODYgMjc2LjY2IDE1NS4zNSAyNzcuOTAgMTU0LjI3IDI3OC45NCBDIDE1NC41MCAyNzcuNDAgMTU0LjgyIDI3NS44NyAxNTUuMTMgMjc0LjM2IEwgMTU2LjY2IDI3NC42MSBDIDE1Ni4wNSAyNzMuNjcgMTU1LjQ0IDI3Mi43NCAxNTQuODEgMjcxLjgzIEMgMTUzLjkwIDI3My42NSAxNTIuOTkgMjc1LjUwIDE1MS45OSAyNzcuMjkgQyAxNTEuMzIgMjc2Ljk4IDE0OS45OSAyNzYuMzggMTQ5LjMyIDI3Ni4wOCBDIDE0OS43MyAyNzUuMDAgMTUwLjEyIDI3My45MSAxNTAuNTAgMjcyLjgzIEMgMTUwLjg0IDI3My42MiAxNTEuNTEgMjc1LjIwIDE1MS44NSAyNzUuOTkgTCAxNTEuMTIgMjczLjE0IEwgMTUyLjQ0IDI3My42OCBDIDE1Mi45MSAyNzIuNDcgMTUzLjQxIDI3MS4yNyAxNTMuODkgMjcwLjA2IEMgMTU0LjMxIDI2OS43NSAxNTUuMTQgMjY5LjE1IDE1NS41NiAyNjguODUgQyAxNTUuMzMgMjY5LjM0IDE1NC44OCAyNzAuMzMgMTU0LjY2IDI3MC44MiBDIDE1Ni4xNSAyNzEuODYgMTU2LjYwIDI3My44OSAxNTguMDUgMjc0Ljg2IEMgMTU5Ljk5IDI3NC4wNSAxNjAuMzggMjcxLjM5IDE2MS42NSAyNjkuODAgQyAxNjEuMzcgMjcyLjExIDE2MC41NCAyNzQuMjkgMTU5LjM3IDI3Ni4yOSBDIDE2MC41MiAyNzYuMTkgMTYxLjY4IDI3Ni4xMSAxNjIuODMgMjc2LjAzIEMgMTY1LjEwIDI3MS4yNyAxNjYuNzAgMjY2LjI0IDE2OC4wNSAyNjEuMTUgQyAxNjUuNjQgMjU5Ljg0IDE2My4zMyAyNTguMzEgMTYwLjc2IDI1Ny4zNCBDIDE1Ny41NCAyNTYuMzEgMTU0LjEzIDI1Ni4wMiAxNTAuOTUgMjU0Ljg4IEMgMTQ3Ljg5IDI1My44NyAxNDUuMDkgMjUyLjIxIDE0Mi4wMyAyNTEuMjEgQyAxMzguOTUgMjU0LjI2IDEzNi43MSAyNTguMDQgMTM0LjA5IDI2MS40OCBDIDEzMi41OSAyNjMuNDggMTMxLjQ0IDI2NS43MSAxMzAuMjggMjY3LjkyIEMgMTMxLjYxIDI2My45MiAxMzMuNDIgMjYwLjEwIDEzNS43NiAyNTYuNTkgQyAxMzAuNjkgMjU2LjU0IDEyNS42MiAyNTYuNjAgMTIwLjU1IDI1Ni41NCBDIDEyMC41NiAyNDIuMTQgMTIwLjY5IDIyNy43MyAxMjAuNDkgMjEzLjM0IEMgMTI2LjA0IDIxMy4wOSAxMzEuNjAgMjEzLjI3IDEzNy4xNiAyMTMuMjIgQyAxMzcuMjYgMjI2LjgyIDEzNi45MCAyNDAuNDIgMTM3LjM0IDI1NC4wMSBDIDE0NS4yOSAyNDAuMzAgMTUzLjAzIDIyNS45OCAxNjUuMDUgMjE1LjMzIEMgMTczLjE2IDIwOC4zMyAxODUuNDkgMjA5LjY3IDE5NC4yNSAyMTQuNzQgQyAxOTkuMzQgMjA1LjcyIDIwMi43MCAxOTUuODYgMjA2Ljc5IDE4Ni4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTEuMTQgMTkwLjg5IEMgMjExLjgwIDE4OS40MCAyMTIuNDkgMTg3Ljg3IDIxMy43OSAxODYuODMgQyAyMTMuMTEgMTg4LjQ3IDIxMi4yNyAxOTAuMDYgMjEyLjA5IDE5MS44NiBDIDIxMy40MyAxOTAuNjcgMjE0LjY4IDE4OS4zOSAyMTUuOTUgMTg4LjEyIEMgMjE1LjQ1IDE4OS4zMiAyMTQuOTUgMTkwLjUzIDIxNC40NiAxOTEuNzQgQyAyMTYuODIgMTkyLjI3IDIxOC4xNSAxODkuOTIgMjE5Ljg5IDE4OC45NCBDIDIxOS40MCAxODkuODAgMjE4LjQyIDE5MS41NCAyMTcuOTMgMTkyLjQwIEMgMjE4LjY0IDE5Mi4xMyAyMjAuMDcgMTkxLjU4IDIyMC43OSAxOTEuMzEgQyAyMjEuMDMgMTkxLjY5IDIyMS41MSAxOTIuNDYgMjIxLjc1IDE5Mi44NCBDIDIyMi4yNiAxOTEuOTUgMjIzLjI3IDE5MC4xNyAyMjMuNzggMTg5LjI4IEwgMjIzLjYwIDE5My40NCBDIDIyNC43NiAxOTIuMzQgMjI1Ljg4IDE5MS4yMSAyMjYuOTYgMTkwLjA1IEMgMjI2Ljc3IDE5MC43OSAyMjYuMzkgMTkyLjI4IDIyNi4yMCAxOTMuMDMgTCAyMjguMjQgMTkzLjMyIEMgMjI3LjYxIDE5NC44NyAyMjYuOTggMTk2LjQyIDIyNi4zOSAxOTcuOTkgQyAyMjguMDIgMTk2LjcyIDIyOS42NCAxOTUuNDIgMjMxLjIxIDE5NC4wOCBDIDIzMS44NyAxOTMuOTUgMjMzLjE5IDE5My42OSAyMzMuODUgMTkzLjU2IEMgMjMyLjE4IDE5Ni41MSAyMzAuNTUgMTk5LjQ5IDIyOS4wNCAyMDIuNTMgQyAyMjAuNTMgMjAyLjM0IDIxMi4xOCAyMDAuNTkgMjAzLjc0IDE5OS42NiBDIDIwNC41OCAxOTYuNTMgMjA1LjQ1IDE5My40MSAyMDYuMjggMTkwLjI4IEMgMjA3Ljg5IDE5MC40OCAyMDkuNTIgMTkwLjY5IDIxMS4xNCAxOTAuODkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk0LjQ5IDIyOS40OSBDIDI5NC40OSAyMjAuMjEgMjk0LjQyIDIxMC45NCAyOTQuNTAgMjAxLjY3IEMgMzAwLjA2IDIwMS42OSAzMDUuNjIgMjAxLjcyIDMxMS4xOSAyMDEuNjcgQyAzMTEuMTggMjA1LjUzIDMxMS4xOCAyMDkuMzggMzExLjE4IDIxMy4yNCBDIDMxOC43MiAyMTMuMjAgMzI2LjI3IDIxMy4yMyAzMzMuODIgMjEzLjIzIEMgMzMzLjgyIDIyMC40OCAzMzMuODYgMjI3Ljc0IDMzMy44MCAyMzUuMDAgQyAzMzQuMTcgMjQzLjU4IDMyMy4wOCAyNDcuNzkgMzI0LjI5IDI1Ni41NiBDIDMxOC4xMiAyNTYuNTcgMzExLjk1IDI1Ni41OCAzMDUuNzggMjU2LjU1IEMgMzA1Ljg2IDI1My45NCAzMDUuMzkgMjUxLjAzIDMwNy4wNCAyNDguNzggQyAzMDkuNzggMjQ0LjYyIDMxMi45MCAyNDAuNzEgMzE1LjU3IDIzNi41MCBDIDMxNi45MyAyMzQuNDMgMzE2LjI3IDIzMS44MSAzMTYuNTAgMjI5LjQ4IEMgMzA5LjE2IDIyOS41MCAzMDEuODIgMjI5LjQ4IDI5NC40OSAyMjkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMC4wMCAyMDcuNDYgQyAxLjYyIDIyNS44NSAzLjk3IDI0NC4zMyA5Ljg5IDI2MS45MCBDIDI2LjgxIDMxNS4wNSA2Ny40MCAzNTkuNzYgMTE4LjE2IDM4Mi42NCBDIDE0MS4xMyAzOTMuMTQgMTY2LjE3IDM5OC43NiAxOTEuMzYgNDAwLjAwIEwgMC4wMCA0MDAuMDAgTCAwLjAwIDIwNy40NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzODIuODAgMjgxLjg2IEMgMzkzLjI5IDI1OC45MCAzOTguNTcgMjMzLjg2IDQwMC4wMCAyMDguNzMgTCA0MDAuMDAgNDAwLjAwIEwgMjEwLjI5IDQwMC4wMCBDIDIyNC42OCAzOTguODkgMjM5LjA4IDM5Ny4xMCAyNTIuOTkgMzkzLjExIEMgMzA5Ljk1IDM3Ny44MyAzNTguODIgMzM1LjY4IDM4Mi44MCAyODEuODYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gNzIuNTUgMjEzLjIwIEMgODMuMzggMjEzLjI1IDk0LjIxIDIxMy4yMCAxMDUuMDQgMjEzLjIzIEMgMTA4LjA4IDIxMy4yNCAxMTEuNDMgMjEzLjk3IDExMy40OCAyMTYuNDAgQyAxMTUuNDMgMjE4LjgxIDExNS41OSAyMjIuMDMgMTE1LjU5IDIyNS4wMCBDIDExNS41NiAyMzUuNTEgMTE1LjU5IDI0Ni4wMiAxMTUuNTggMjU2LjU0IEMgMTA5Ljk5IDI1Ni41OCAxMDQuNDAgMjU2LjU5IDk4LjgwIDI1Ni41MiBDIDk4LjY4IDI0Ny4yMyA5OS4zMSAyMzcuODggOTguNDYgMjI4LjYzIEMgOTUuMzMgMjI4LjQ1IDkyLjE5IDIyOC40NSA4OS4wNSAyMjguNDMgQyA4OC42MSAyMzUuODcgODkuMjAgMjQzLjM0IDg4Ljc0IDI1MC43OCBDIDg4LjUxIDI1My43MCA4Ni4wMiAyNTYuMDUgODMuMTUgMjU2LjMyIEMgNzcuNjMgMjU2Ljg2IDcyLjA2IDI1Ni40MyA2Ni41MiAyNTYuNTUgQyA2Ni41NSAyNTEuMjYgNjYuNTIgMjQ1Ljk2IDY2LjU0IDI0MC42NiBDIDY4LjQ0IDI0MC4yOSA3MS4wNyAyNDEuNDUgNzIuNDkgMjM5Ljc5IEMgNzIuNjUgMjMwLjkzIDcyLjUxIDIyMi4wNiA3Mi41NSAyMTMuMjAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjQ3LjI1IDIxMy4yNSBDIDI2MS42OSAyMTMuMjQgMjc2LjEzIDIxMy4xMyAyOTAuNTYgMjEzLjMxIEMgMjkwLjM3IDIyNy43MiAyOTAuNTEgMjQyLjE0IDI5MC40OSAyNTYuNTYgQyAyODQuOTIgMjU2LjU0IDI3OS4zNSAyNTYuNjMgMjczLjc4IDI1Ni41MSBDIDI3My44NiAyNDcuMTYgMjczLjczIDIzNy44MiAyNzMuODUgMjI4LjQ3IEMgMjcwLjQ5IDIyOC40NiAyNjcuMTQgMjI4LjQ0IDI2My43OSAyMjguNTEgQyAyNjMuODMgMjM3Ljg2IDI2My43NSAyNDcuMjIgMjYzLjg0IDI1Ni41OCBDIDI1OC4zMSAyNTYuNTQgMjUyLjc5IDI1Ni41OSAyNDcuMjcgMjU2LjU1IEMgMjQ3LjI3IDI0Mi4xMSAyNDcuMzAgMjI3LjY4IDI0Ny4yNSAyMTMuMjUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk3LjEwIDIxOS4xMiBDIDE5NS45OSAyMTcuNDkgMTk2LjM2IDIxNS43MCAxOTcuNjQgMjE0LjMxIEMgMjA0LjYzIDIxOC4zNCAyMTMuMDEgMjE4LjUzIDIyMC44MyAyMTkuNDAgQyAyMTguMTEgMjI0LjUxIDIxNi41MyAyMzAuMTAgMjE0LjQ4IDIzNS40OSBDIDIwOS4yMSAyMzQuNzUgMjAzLjk5IDIzMy43NSAxOTguNzEgMjMzLjE0IEMgMTk4LjY4IDIyOC40MyAxOTkuNDQgMjIzLjQ0IDE5Ny4xMCAyMTkuMTIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTkwLjA5IDIyMy4xNCBDIDE5Mi4wNCAyMjEuOTUgMTkzLjE0IDIxOS44NCAxOTUuMDYgMjE4LjYxIEMgMTk3LjE2IDIyNC41MSAxOTYuMjcgMjMwLjg4IDE5NS42OSAyMzYuOTYgQyAxOTEuMzcgMjM1LjMxIDE4Ni43MiAyMzUuMzAgMTgyLjE3IDIzNS4yNyBDIDE4My4wMiAyMzAuNDQgMTg1LjY2IDIyNS41NCAxOTAuMDkgMjIzLjE0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE1Mi40OSAyMzMuOTIgQyAxNTUuODIgMjMwLjIzIDE1OC4yMiAyMjUuNjkgMTYyLjA5IDIyMi41MSBDIDE2OS4xNCAyMjIuNDAgMTc2LjYzIDIyNC4zMyAxODIuMTggMjI4LjgyIEMgMTc5LjUxIDIzMi41NiAxNzYuODggMjM2LjM4IDE3NS4yOCAyNDAuNzIgQyAxNjcuNjQgMjM4LjY0IDE1OS45NiAyMzYuNTYgMTUyLjQ5IDIzMy45MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTkuNTUgMjUwLjE1IEMgMjAyLjcwIDI1MC44OCAyMDUuODEgMjUxLjgyIDIwOC44OSAyNTIuODEgQyAyMDYuOTggMjU2LjAyIDIwNC40OCAyNTkuMTUgMjAwLjk1IDI2MC42NSBDIDE5MS41NSAyNjEuMzEgMTgyLjAyIDI1OS4zNiAxNzMuNDcgMjU1LjQzIEMgMTczLjQ3IDI1NC44NCAxNzMuNDcgMjUzLjY4IDE3My40NyAyNTMuMDkgQyAxODEuODAgMjU1LjIzIDE5MC40MCAyNTcuNTIgMTk5LjAzIDI1NS42NSBDIDE5OS4yNiAyNTMuODIgMTk5LjQyIDI1MS45OSAxOTkuNTUgMjUwLjE1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDEzNC4wOSAyNjEuNDggQyAxMzYuNzEgMjU4LjA0IDEzOC45NSAyNTQuMjYgMTQyLjAzIDI1MS4yMSBDIDE0NS4wOSAyNTIuMjEgMTQ3Ljg5IDI1My44NyAxNTAuOTUgMjU0Ljg4IEMgMTU0LjEzIDI1Ni4wMiAxNTcuNTQgMjU2LjMxIDE2MC43NiAyNTcuMzQgQyAxNjMuMzMgMjU4LjMxIDE2NS42NCAyNTkuODQgMTY4LjA1IDI2MS4xNSBDIDE2Ni43MCAyNjYuMjQgMTY1LjEwIDI3MS4yNyAxNjIuODMgMjc2LjAzIEMgMTYxLjY4IDI3Ni4xMSAxNjAuNTIgMjc2LjE5IDE1OS4zNyAyNzYuMjkgQyAxNjAuNTQgMjc0LjI5IDE2MS4zNyAyNzIuMTEgMTYxLjY1IDI2OS44MCBDIDE2MC4zOCAyNzEuMzkgMTU5Ljk5IDI3NC4wNSAxNTguMDUgMjc0Ljg2IEMgMTU2LjYwIDI3My44OSAxNTYuMTUgMjcxLjg2IDE1NC42NiAyNzAuODIgQyAxNTQuODggMjcwLjMzIDE1NS4zMyAyNjkuMzQgMTU1LjU2IDI2OC44NSBDIDE1NS4xNCAyNjkuMTUgMTU0LjMxIDI2OS43NSAxNTMuODkgMjcwLjA2IEMgMTUzLjQwIDI3MC40MiAxNTIuNDEgMjcxLjE1IDE1MS45MiAyNzEuNTIgQyAxNTEuMzggMjcxLjM4IDE1MC4zMCAyNzEuMTIgMTQ5Ljc2IDI3MC45OSBDIDE0OC41OCAyNzIuOTIgMTQ3LjMxIDI3NC44NiAxNDUuMzggMjc2LjEyIEMgMTQ2LjEwIDI3My4zNyAxNDkuNzYgMjcwLjIzIDE0Ni40MyAyNjcuOTIgQyAxNDYuNTUgMjY2Ljg5IDE0Ni42OCAyNjUuODcgMTQ2LjgwIDI2NC44NiBDIDE0Ni4wMiAyNjUuOTggMTQ1LjIzIDI2Ny4xMCAxNDQuNDYgMjY4LjI0IEwgMTQzLjM3IDI2OS42NiBMIDE0My42MCAyNjcuMDQgQyAxNDMuNzkgMjY2LjIyIDE0NC4xNyAyNjQuNTcgMTQ0LjM2IDI2My43NCBDIDE0My40OSAyNjQuODggMTQyLjYyIDI2Ni4wMSAxNDEuNzkgMjY3LjE4IEMgMTQxLjM2IDI2Ni42MyAxNDAuNTAgMjY1LjUzIDE0MC4wNyAyNjQuOTcgQyAxNDAuNTIgMjYzLjU0IDE0MS4wMCAyNjIuMTIgMTQxLjQ3IDI2MC43MCBDIDE0MC44NSAyNjEuNTggMTQwLjIyIDI2Mi40NiAxMzkuNjAgMjYzLjM1IEMgMTM1LjgzIDI2Mi45NCAxMzUuMzggMjY3LjE2IDEzMy4wNiAyNjkuMTEgQyAxMzMuNzcgMjY2Ljk2IDEzNC43OCAyNjQuOTQgMTM1Ljc5IDI2Mi45MiBDIDEzNS4zNyAyNjIuNTYgMTM0LjUyIDI2MS44NCAxMzQuMDkgMjYxLjQ4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEzOS42MCAyNjMuMzUgQyAxNDAuMjIgMjYyLjQ2IDE0MC44NSAyNjEuNTggMTQxLjQ3IDI2MC43MCBDIDE0MS4wMCAyNjIuMTIgMTQwLjUyIDI2My41NCAxNDAuMDcgMjY0Ljk3IEMgMTM5LjQ2IDI2Ny42MSAxMzcuNzAgMjY5Ljc2IDEzNS4yMiAyNzAuODMgQyAxMzYuNTUgMjY4LjI2IDEzOC4xMSAyNjUuODIgMTM5LjYwIDI2My4zNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNi4xNiAyNjMuMTYgQyAzNy4xMSAyNjIuODEgMzguMDYgMjYyLjQ3IDM5LjAxIDI2Mi4xNCBDIDQwLjIyIDI2Ni4xNSA0My41MCAyNjkuNzcgNDMuMjQgMjc0LjA2IEMgNDAuNTAgMjc2LjE0IDM3LjE5IDI3Ny4yOCAzNC4xOCAyNzguOTAgQyAzMy40MSAyNzcuMzMgMzIuNjMgMjc1Ljc2IDMxLjg5IDI3NC4xOCBDIDM0LjM2IDI3My4wMSAzNi44MyAyNzEuODYgMzkuMzEgMjcwLjczIEMgMzguMjggMjY4LjE5IDM3LjIwIDI2NS42OSAzNi4xNiAyNjMuMTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzU3Ljg5IDI2Mi41NiBDIDM1OS41NSAyNjMuMjEgMzYxLjIwIDI2My44NyAzNjIuODcgMjY0LjUyIEMgMzYzLjE0IDI2NS45MiAzNjMuMTkgMjY3LjM0IDM2My4wNiAyNjguNzYgQyAzNjQuOTYgMjY3Ljk3IDM2Ni44NCAyNjcuMTQgMzY4LjczIDI2Ni4zMSBDIDM2Ny45NiAyNjguMDQgMzY3LjE5IDI2OS43NyAzNjYuNDcgMjcxLjUyIEMgMzYzLjg5IDI3Mi43MiAzNjEuMjQgMjczLjc0IDM1OC42MSAyNzQuODAgQyAzNjAuMTIgMjc1Ljg0IDM2MS43OCAyNzYuNjIgMzYzLjQ5IDI3Ny4yNiBDIDM2Mi44MSAyNzguOTAgMzYyLjEwIDI4MC41MiAzNjEuMzggMjgyLjE0IEMgMzU5LjQ0IDI4MS4yNCAzNTcuNTYgMjgwLjIyIDM1NS43MyAyNzkuMTQgQyAzNTUuNzUgMjc4LjI5IDM1NS43OSAyNzYuNTggMzU1LjgyIDI3NS43MiBDIDM1NC4yMyAyNzYuMzIgMzUyLjY0IDI3Ni45MiAzNTEuMDYgMjc3LjUyIEMgMzUxLjY4IDI3NS44NiAzNTIuMTYgMjc0LjAzIDM1My40MiAyNzIuNzMgQyAzNTUuODIgMjcxLjYwIDM1OC4zNyAyNzAuODEgMzYwLjgzIDI2OS44MSBDIDM1OS4zMyAyNjguNjQgMzU3LjYyIDI2Ny44MCAzNTUuODcgMjY3LjA3IEMgMzU2LjU1IDI2NS41NiAzNTcuMjIgMjY0LjA2IDM1Ny44OSAyNjIuNTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTQxLjc5IDI2Ny4xOCBDIDE0Mi42MiAyNjYuMDEgMTQzLjQ5IDI2NC44OCAxNDQuMzYgMjYzLjc0IEMgMTQ0LjE3IDI2NC41NyAxNDMuNzkgMjY2LjIyIDE0My42MCAyNjcuMDQgQyAxNDIuODMgMjY5LjQ1IDE0MS45OCAyNzIuMzUgMTM5LjMwIDI3My4yMiBDIDE0MC4wNyAyNzEuMTggMTQwLjc3IDI2OS4xMCAxNDEuNzkgMjY3LjE4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE0NC40NiAyNjguMjQgQyAxNDUuMjMgMjY3LjEwIDE0Ni4wMiAyNjUuOTggMTQ2LjgwIDI2NC44NiBDIDE0Ni42OCAyNjUuODcgMTQ2LjU1IDI2Ni44OSAxNDYuNDMgMjY3LjkyIEMgMTQ1LjcxIDI2OS44NiAxNDQuOTEgMjcxLjc3IDE0NC4yMCAyNzMuNzEgQyAxNDMuOTggMjczLjY4IDE0My41NCAyNzMuNjAgMTQzLjMyIDI3My41NiBDIDE0My42NyAyNzEuNzggMTQzLjkxIDI2OS45NyAxNDQuNDYgMjY4LjI0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM5LjYzIDI3OS4yOSBDIDQxLjYyIDI3OC4yNCA0My42MCAyNzcuMTcgNDUuNjAgMjc2LjE0IEMgNDYuMzYgMjc3LjU5IDQ3LjEzIDI3OS4wNSA0Ny44OCAyODAuNTEgQyA0NS44OCAyODEuNTkgNDMuODkgMjgyLjY2IDQxLjg3IDI4My43MCBDIDQxLjEzIDI4Mi4yMyA0MC4zOCAyODAuNzYgMzkuNjMgMjc5LjI5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMxNS4xMiAyNzUuODggQyAzMTYuNTUgMjc3Ljg1IDMxNy4zMyAyODAuMTggMzE4LjEzIDI4Mi40NiBDIDMxOC42MyAyODEuMTMgMzE5LjE2IDI3OS44MSAzMTkuNzIgMjc4LjUwIEMgMzE5LjY4IDI4Mi40MiAzMTguODAgMjg2LjgwIDMyMi4wNSAyODkuNzYgTCAzMjIuMTUgMjg5LjkwIEMgMzIxLjU0IDI5MC41NyAzMjAuOTQgMjkxLjI2IDMyMC4zNSAyOTEuOTUgQyAzMTguMTkgMjg4LjY3IDMxNi4xNSAyODQuNTQgMzExLjcwIDI4NC4yMyBDIDMxMi44MiAyODMuOTMgMzEzLjk1IDI4My42NCAzMTUuMDggMjgzLjM1IEMgMzEzLjYxIDI4Mi43NSAzMTIuMzUgMjgxLjg3IDMxMS4zMCAyODAuNjkgQyAzMTIuNzggMjgxLjIwIDMxNC4yMyAyODEuNzcgMzE1LjY3IDI4Mi4zOSBDIDMxNC40NCAyODAuODcgMzEzLjIyIDI3OS4zNiAzMTIuMTggMjc3LjcyIEMgMzEzLjgwIDI3OC42NCAzMTUuMzEgMjc5LjczIDMxNi43MSAyODEuMDAgQyAzMTYuMzEgMjc5LjcyIDMxNS41MiAyNzcuMTYgMzE1LjEyIDI3NS44OCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA3Ny44OSAyODkuMDIgQyA4Mi42NyAyODUuOTMgODYuNjYgMjgxLjgzIDg5Ljc3IDI3Ny4wNyBDIDkwLjE4IDI3Ny4zOSA5MS4wMSAyNzguMDIgOTEuNDIgMjc4LjM0IEMgOTEuNzAgMjc5LjExIDkyLjI2IDI4MC42NCA5Mi41MyAyODEuNDAgQyA4OS4xOCAyODUuMTAgODUuMTIgMjg4LjEyIDgxLjA5IDI5MS4wNCBDIDgxLjI1IDI5Mi4yMyA4MS41MCAyOTMuNDEgODEuNzMgMjk0LjYwIEMgODMuMjYgMjkzLjk0IDg0LjgxIDI5My44NyA4Ni40MCAyOTQuNDAgQyA4Ny4zNyAyOTYuNjUgODguNDAgMjk4LjkzIDg4LjM0IDMwMS40NSBDIDg1Ljg1IDI5OS41OSA4NC4zOSAyOTYuNTUgODEuNTMgMjk1LjE5IEMgODAuMTMgMjkzLjI0IDc5LjQzIDI5MC44OCA3Ny44OSAyODkuMDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQzLjcyIDI4OS43MyBDIDM0Ni4wMyAyODYuMjcgMzQ3LjM3IDI4MS45MiAzNTAuODUgMjc5LjQxIEMgMzUzLjkyIDI4MS4wMSAzNTYuOTMgMjgyLjcyIDM1OS45NSAyODQuNDMgQyAzNTkuMTQgMjg1LjkzIDM1OC4zMSAyODcuNDEgMzU3LjQ4IDI4OC44OSBDIDM1NS4wNSAyODcuNTAgMzUyLjY1IDI4Ni4wNCAzNTAuMTUgMjg0LjgwIEMgMzQ4Ljk1IDI4Ni45OSAzNDcuNjAgMjg5LjEwIDM0Ni4yMyAyOTEuMTkgQyAzNDUuNjAgMjkwLjgzIDM0NC4zNSAyOTAuMTAgMzQzLjcyIDI4OS43MyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA0My40MiAyODkuNTYgQyA0NS40OSAyODcuNDUgNDcuMzYgMjg1LjE2IDQ5LjIwIDI4Mi44NSBDIDUwLjA5IDI4NC4yNyA1MC45NyAyODUuNzAgNTEuODYgMjg3LjEyIEMgNDkuODggMjg5LjM0IDQ3Ljc2IDI5MS40NiA0Ni4xNCAyOTMuOTYgQyA0Ni41MyAyOTQuMzcgNDcuMzEgMjk1LjE4IDQ3LjcwIDI5NS41OSBDIDQ5LjkxIDI5NC4xMyA1Mi4xMCAyOTIuNjUgNTQuMTkgMjkxLjAzIEMgNTUuMTYgMjkyLjMxIDU2LjE0IDI5My41OCA1Ni45MSAyOTUuMDAgQyA1My44OCAyOTYuODMgNTAuNzQgMzAxLjI4IDQ2Ljg1IDI5OS40MCBDIDQzLjQ0IDI5Ni4zMyA0MS41NSAyOTEuOTUgMzkuMjAgMjg4LjA4IEMgMzkuODkgMjg3LjczIDQxLjI3IDI4Ny4wNCA0MS45NyAyODYuNjkgQyA0Mi4zMyAyODcuNDEgNDMuMDYgMjg4Ljg0IDQzLjQyIDI4OS41NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA5Ny44NiAyODguMDAgQyAxMDAuNjEgMjg2LjQ0IDEwMy41MiAyODUuMTkgMTA2LjE2IDI4My40MyBDIDEwNi4yOSAyODQuMDkgMTA2LjU2IDI4NS40MCAxMDYuNjkgMjg2LjA1IEMgMTA0LjEwIDI4OC4wNyAxMDEuMTkgMjg5LjYxIDk4LjM3IDI5MS4yNiBDIDk3LjMyIDI5Ny42MiA5OC4wNyAzMDQuMDggOTcuMjQgMzEwLjQ2IEMgOTUuNjMgMzA5LjMxIDk0LjExIDMwOC4wNSA5Mi42NCAzMDYuNzMgQyA5Mi44NSAzMDIuNTUgOTMuNDAgMjk4LjM4IDk0LjU2IDI5NC4zNSBDIDk1LjIyIDI5Mi4wNyA5NS43MCAyODkuMzYgOTcuODYgMjg4LjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMwNi40NyAyODYuNzYgQyAzMDYuOTIgMjg0LjgyIDMwOC41OSAyODUuMjMgMzA5LjI4IDI4Ni43OCBDIDMwOS41OSAyODYuNjQgMzEwLjIzIDI4Ni4zNCAzMTAuNTUgMjg2LjE5IEMgMzExLjEzIDI5MC40MSAzMTIuNTggMjk0LjU2IDMxNi4xNSAyOTcuMTUgQyAzMTUuMzcgMjk4LjAxIDMxNC41OSAyOTguODYgMzEzLjgxIDI5OS43MiBDIDMxMS40NyAyOTYuNzQgMzA4LjQ3IDI5NC40MSAzMDUuNDEgMjkyLjIyIEMgMzA2LjI3IDI5Mi4yMyAzMDcuOTcgMjkyLjI1IDMwOC44MiAyOTIuMjYgQyAzMDcuNzEgMjkwLjk4IDMwNi41OSAyODkuNzIgMzA1LjQ5IDI4OC40NCBDIDMwNi4xNCAyODguNTUgMzA3LjQ1IDI4OC43NSAzMDguMTAgMjg4Ljg2IEMgMzA3LjY5IDI4OC4zMyAzMDYuODggMjg3LjI5IDMwNi40NyAyODYuNzYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjc4Ljc4IDI5Mi4wMCBDIDI4MC4xNiAyOTAuMTcgMjgwLjUzIDI4Ny45NCAyODAuOTUgMjg1Ljc1IEMgMjgyLjM5IDI5My43OSAyODYuMzkgMzAwLjkxIDI5MC4xNyAzMDguMDMgQyAyOTEuMjAgMzAzLjkxIDI5Mi4xNSAyOTkuNzUgMjkzLjY4IDI5NS43NyBDIDI5My4zNSAyOTQuOTIgMjkzLjAyIDI5NC4wNyAyOTIuNzAgMjkzLjIzIEMgMjkzLjAyIDI5MS45MyAyOTMuMzQgMjkwLjYzIDI5My42NyAyODkuMzMgQyAyOTUuMzUgMjg5LjUwIDI5Ny4xNyAyODkuNDcgMjk4LjU4IDI5MC41NyBDIDMwMi4xMSAyOTIuOTEgMzA1Ljc4IDI5NS4wNyAzMDkuMDcgMjk3Ljc2IEMgMzEwLjY0IDI5OC44MiAzMTAuOTMgMzAwLjgwIDMxMS42MCAzMDIuNDQgQyAzMTAuMjQgMzAzLjc4IDMwOC45MiAzMDUuMTUgMzA3LjYzIDMwNi41NiBDIDMwNy41MCAzMDUuMzcgMzA3LjM2IDMwNC4xOCAzMDcuMjMgMzAzLjAwIEMgMzA0LjA3IDMwMC44MiAzMDEuOTUgMjk3LjUxIDI5OC44NyAyOTUuMjcgQyAyOTcuMTEgMjk1LjI4IDI5NS40NiAyOTUuOTkgMjkzLjc4IDI5Ni40MCBDIDI5My42MiAyOTguMTAgMjkzLjQzIDI5OS44MSAyOTMuMjIgMzAxLjUxIEMgMjk0LjMyIDMwMS45NSAyOTUuNDIgMzAyLjQxIDI5Ni41MyAzMDIuODcgQyAyOTUuNTcgMzA0LjA1IDI5NC42MyAzMDUuMjMgMjkzLjYzIDMwNi4zNiBDIDI5My4wNCAzMDguNTIgMjkyLjE1IDMxMC41NyAyOTEuMzUgMzEyLjY1IEMgMjkxLjg4IDMxMi43NiAyOTIuOTQgMzEyLjk4IDI5My40NyAzMTMuMDkgQyAyOTIuMzcgMzE1LjEyIDI5My4yNyAzMTcuMjkgMjkzLjYzIDMxOS4zNyBDIDI3Mi45NSAzMzQuODYgMjQ4Ljc2IDM0Ni4wNyAyMjMuMDcgMzQ5LjczIEMgMTk2LjkyIDM1My4zNSAxNjkuNjYgMzUxLjA0IDE0NS4xMCAzNDEuMDUgQyAxMzQuNTYgMzM3LjE3IDEyNC45NSAzMzEuMzMgMTE1LjI4IDMyNS43NCBDIDExNS40NCAzMjUuNTYgMTE1Ljc1IDMyNS4yMCAxMTUuOTEgMzI1LjAyIEMgMTE2LjEyIDMyNC45NyAxMTYuNTUgMzI0Ljg3IDExNi43NiAzMjQuODIgQyAxMTUuODMgMzIyLjI1IDExNi4wMSAzMTkuNTQgMTE2LjU1IDMxNi45MiBDIDExNy4xNCAzMTYuMDIgMTE3LjY4IDMxNS4wOSAxMTguMTggMzE0LjE0IEMgMTE4Ljc0IDMxMi4wNSAxMTUuNDMgMzE1LjEyIDExNC40NCAzMTUuMTYgQyAxMTMuNzcgMzE4LjI4IDExMy4yOSAzMjEuODkgMTE1LjEwIDMyNC43NSBDIDExNC45MyAzMjQuODcgMTE0LjYwIDMyNS4xMyAxMTQuNDMgMzI1LjI2IEMgMTA4LjgxIDMyMC41NyAxMDMuMDYgMzE2LjAwIDk3LjM0IDMxMS40NCBDIDEwMC40NCAzMTAuMDMgMTAzLjg1IDMwOC43OSAxMDYuMjIgMzA2LjI0IEMgMTA3LjkxIDMwMi45NSAxMDkuMjkgMjk5LjQ0IDExMS42OCAyOTYuNTYgQyAxMTEuMjggMjk4LjI4IDExMC42OCAyOTkuOTUgMTEwLjEwIDMwMS42MyBDIDExMC43NSAzMDEuOTAgMTEyLjA0IDMwMi40NSAxMTIuNjkgMzAyLjcyIEMgMTExLjk4IDMwMy41OCAxMTEuMTkgMzA0LjM4IDExMC4zOSAzMDUuMTUgQyAxMDkuNDYgMzA2LjkwIDEwOC4yOCAzMDguNTAgMTA2Ljk1IDMwOS45NyBDIDEwOC4zMCAzMTAuMjYgMTA5LjY0IDMxMC41OSAxMTAuOTggMzEwLjk4IEMgMTExLjYwIDMwNy41NyAxMTIuODUgMzA0LjMzIDExNC4wNCAzMDEuMTAgQyAxMTUuNDggMjk4LjAxIDExMi40NSAyOTUuMDcgMTEzLjIxIDI5MS44NyBDIDExMi41OSAyODkuNTYgMTE0Ljk3IDI4OS42NyAxMTUuMzggMjkxLjk1IEMgMTE1LjgwIDI5MS40MyAxMTYuNjYgMjkwLjM5IDExNy4wOSAyODkuODggQyAxMTYuODkgMjkwLjg0IDExNi41MSAyOTIuNzcgMTE2LjMyIDI5My43NCBDIDExNy4xNCAyOTIuOTEgMTE4Ljc4IDI5MS4yNyAxMTkuNjAgMjkwLjQ1IEMgMTE5LjA4IDI5MS40MCAxMTguMDQgMjkzLjMwIDExNy41MiAyOTQuMjUgQyAxMTguMjggMjkzLjkwIDExOS44MiAyOTMuMjIgMTIwLjU4IDI5Mi44NyBDIDExNy4zMSAyOTguNDQgMTE2LjMxIDMwNC45MSAxMTUuMTkgMzExLjE2IEMgMTE4Ljg4IDMxMC40MyAxMjIuMzYgMzA4LjgyIDEyNC45OCAzMDYuMDYgQyAxMjQuNTEgMzA1LjU1IDEyMy41NyAzMDQuNTMgMTIzLjEwIDMwNC4wMiBDIDEyMy44MyAzMDMuMzcgMTI1LjMwIDMwMi4wNyAxMjYuMDMgMzAxLjQyIEMgMTI1LjIyIDMwMS40NiAxMjMuNjAgMzAxLjUzIDEyMi43OCAzMDEuNTcgQyAxMjQuNjQgMjk5LjgxIDEyNi4zNiAyOTcuOTEgMTI3LjY3IDI5NS43MSBDIDEyNy4wOCAyOTguMzMgMTI3LjM2IDMwMC45OSAxMjcuOTQgMzAzLjU5IEMgMTI4Ljk5IDMwMy45NiAxMzEuMTEgMzA0LjcwIDEzMi4xNiAzMDUuMDggQyAxMzEuMDMgMzA1LjgzIDEyOS44OSAzMDYuNTggMTI4Ljc1IDMwNy4zMiBMIDEzMS44MiAzMDcuMDYgQyAxMzEuMDggMzA3LjgwIDEyOS41OCAzMDkuMjcgMTI4LjgzIDMxMC4wMCBDIDEyOS45MCAzMTQuMjMgMTMxLjc4IDMxOC4xOSAxMzMuMDMgMzIyLjM2IEMgMTMzLjYyIDMyMC45OSAxMzQuMTYgMzE5LjU5IDEzNC42NSAzMTguMTggTCAxMzUuMzggMzE4LjU2IEMgMTM2Ljc0IDMxMy43OSAxMzkuMTQgMzA5LjQ0IDE0MC45NyAzMDQuODUgQyAxNDYuOTAgMzAxLjc5IDE1My41MCAzMDAuMzcgMTU5LjcxIDI5OC4wMSBDIDE2MC44NyAzMDAuMzQgMTYwLjU3IDMwMi44MCAxNTkuMTggMzA0Ljk3IEMgMTU3LjczIDMwNC4yMSAxNTYuMzAgMzAzLjQzIDE1NC44OCAzMDIuNjMgQyAxNTEuMDIgMzAzLjY4IDE0Ny43MyAzMDUuOTkgMTQ0LjQzIDMwOC4xNCBDIDE0My41OSAzMTEuNjYgMTQyLjk4IDMxNS4yNSAxNDMuNTAgMzE4Ljg4IEMgMTQzLjk3IDMxOC43NiAxNDQuOTIgMzE4LjU0IDE0NS4zOSAzMTguNDMgQyAxNDUuNTYgMzE2LjIzIDE0NS41OCAzMTQuMDIgMTQ1Ljg4IDMxMS44MyBDIDE0Ni4yNiAzMDguODMgMTQ4Ljc0IDMwNi41OSAxNTEuMzQgMzA1LjM0IEMgMTUzLjUxIDMwNS4wOSAxNTUuMDggMzA2Ljk1IDE1Ni44MSAzMDcuOTUgQyAxNTYuODQgMzA5LjM0IDE1Ni44NyAzMTAuNzQgMTU2LjkxIDMxMi4xNCBDIDE1Ni4wOCAzMTMuMDUgMTU1LjI2IDMxMy45NSAxNTQuNDMgMzE0Ljg3IEMgMTU0LjY2IDMxNy41NiAxNTUuMDMgMzIwLjI0IDE1NS40MyAzMjIuOTEgQyAxNTcuOTcgMzIxLjIzIDE2MC45OCAzMjAuOTEgMTYzLjk2IDMyMS4xNSBDIDE2NC45NCAzMjEuODggMTY1LjkyIDMyMi42MiAxNjYuOTAgMzIzLjM3IEMgMTY4Ljc3IDMyMS40MCAxNzAuODQgMzE5LjU5IDE3Mi4zNSAzMTcuMzIgQyAxNzMuNDggMzE1LjI3IDE3My45NCAzMTIuOTMgMTc1LjAxIDMxMC44NSBDIDE3NS4yOSAzMTEuNzUgMTc1Ljg0IDMxMy41MyAxNzYuMTIgMzE0LjQzIEMgMTc2LjYzIDMxMy4xOSAxNzYuMTcgMzExLjk2IDE3NS44MSAzMTAuNzggQyAxNzYuNzMgMzEwLjU2IDE3Ny42NSAzMTAuMzggMTc4LjU4IDMxMC4yMiBDIDE3OC43MSAzMTEuODMgMTc4Ljc3IDMxMy40NCAxNzguNzAgMzE1LjA2IEMgMTczLjUzIDMxNy4wMiAxNzIuMDAgMzIyLjgzIDE2OS4yNSAzMjcuMTAgQyAxNzAuMDUgMzI4LjY5IDE3MS4wMiAzMzAuMTkgMTcxLjkxIDMzMS43NCBDIDE3Ny4wOSAzMjQuMjcgMTgyLjY5IDMxNi4zNSAxODMuNTEgMzA3LjAxIEMgMTg0LjY0IDMwNy41OCAxODYuMTkgMzA3Ljc1IDE4Ni43OSAzMDkuMDQgQyAxODcuMzQgMzEwLjcwIDE4Ni4yOCAzMTIuMjUgMTg1LjY2IDMxMy43MyBDIDE4My44OSAzMTcuMzAgMTgyLjUyIDMyMS4wNiAxODAuODUgMzI0LjY4IEMgMTgxLjcyIDMyNC42MiAxODMuNDYgMzI0LjUyIDE4NC4zMiAzMjQuNDcgQyAxODQuNjUgMzI0LjczIDE4NS4zMSAzMjUuMjcgMTg1LjYzIDMyNS41NCBDIDE4Ny40MyAzMjQuMzQgMTg5LjI4IDMyMy4yMSAxOTAuOTkgMzIxLjg5IEMgMTkzLjU2IDMxOS45OCAxOTQuNDggMzE2Ljc2IDE5Ni40MiAzMTQuMzQgQyAxOTcuMzkgMzEyLjYyIDE5OS43MSAzMTMuNDggMjAxLjI4IDMxMy4wNSBDIDIwMS4wNyAzMTMuMzkgMjAwLjY0IDMxNC4wNiAyMDAuNDIgMzE0LjQwIEMgMjAwLjQxIDMxNS43OCAyMDEuMTEgMzE3LjYwIDE5OS41MSAzMTguMzggQyAxOTUuNTUgMzIxLjA5IDE5MS43OCAzMjQuMDUgMTg4LjM5IDMyNy40NiBDIDE4OC43NSAzMjkuOTMgMTg4Ljg0IDMzMi40NCAxODkuMzEgMzM0LjkwIEMgMTg5Ljg1IDMzNi41NCAxOTEuNjQgMzM3LjE5IDE5Mi45MSAzMzguMTUgQyAxOTIuMTEgMzM2LjM1IDE5MS4xNiAzMzQuNjIgMTkwLjQzIDMzMi43OSBDIDE4OS43MCAzMjkuOTUgMTkwLjg2IDMyNy4xMyAxOTEuNzYgMzI0LjQ5IEMgMTkzLjkxIDMyNC4zMSAxOTYuNTIgMzIyLjk4IDE5OC4zOCAzMjQuNjkgQyAyMDAuMTkgMzI2LjYyIDIwMS42NyAzMjguOTIgMjA0LjExIDMzMC4xNiBDIDIwNC44NCAzMzEuMTUgMjA1LjU2IDMzMi4xNCAyMDYuMzAgMzMzLjEzIEMgMjA2LjQ3IDMyNy40MyAyMDQuMzQgMzIxLjczIDIwNS41OCAzMTYuMDYgQyAyMDUuNzQgMzE0LjkzIDIwNi44NCAzMTQuMzMgMjA3LjU1IDMxMy41NyBDIDIwNy45NCAzMTQuOTcgMjA4LjMyIDMxNi4zOCAyMDguNjcgMzE3LjgwIEMgMjA4LjA3IDMxOS4zMiAyMDYuNjggMzIwLjg2IDIwNy40MCAzMjIuNjAgQyAyMDguMzcgMzI0LjQxIDIxMC45NyAzMjUuMjIgMjEwLjQ0IDMyNy43NCBDIDIxMi4zNyAzMjUuNzYgMjE1LjA1IDMyNS4xNyAyMTcuNjUgMzI0LjYwIEMgMjE3LjAwIDMyMy42OSAyMTYuMzcgMzIyLjc3IDIxNS43NCAzMjEuODYgQyAyMTQuNDUgMzIxLjMwIDIxMy4xOCAzMjAuNjggMjExLjkyIDMyMC4wNCBDIDIxMi43NyAzMTkuMTkgMjEzLjY0IDMxOC4zNCAyMTQuNTEgMzE3LjUwIEMgMjEzLjkwIDMxNS45OCAyMTMuMzQgMzE0LjQ1IDIxMi44NyAzMTIuOTAgQyAyMTUuNTUgMzE1LjkxIDIxNy4zMiAzMTkuNjIgMjIwLjE0IDMyMi41MiBDIDIyMi44MSAzMTcuNzggMjE5Ljc3IDMxMi4xMSAyMjIuNjQgMzA3LjQ5IEMgMjIzLjA3IDMwNy41MSAyMjMuOTMgMzA3LjU2IDIyNC4zNiAzMDcuNTggQyAyMjQuOTQgMzA5LjQwIDIyNS41MyAzMTEuMjIgMjI2LjI3IDMxMi45OCBDIDIyMi40OSAzMTcuODkgMjI0Ljk3IDMyNC4wNiAyMjUuNTcgMzI5LjU2IEMgMjI2LjM4IDMyOS4zMyAyMjguMDEgMzI4Ljg3IDIyOC44MiAzMjguNjQgQyAyMzEuNzkgMzIxLjAxIDIzNC42MyAzMTIuODggMjMzLjM5IDMwNC41NCBDIDIzNC42MCAzMDUuMjEgMjM3LjY1IDMwNC45MSAyMzcuNTIgMzA3LjAxIEMgMjM3LjI3IDMxMS41NCAyMzUuNjUgMzE1LjkwIDIzNS4zMSAzMjAuNDUgQyAyMzYuMDggMzIwLjIwIDIzNi44NCAzMTkuOTUgMjM3LjYxIDMxOS43MSBDIDIzNi41NyAzMTYuMjAgMjM4LjIyIDMxMi42MyAyNDEuNzMgMzExLjQ2IEMgMjQyLjkwIDMxMi4yMyAyNDQuMDggMzEzLjAwIDI0NS4yNiAzMTMuNzYgQyAyNDUuNzIgMzE2LjMyIDI0Ni4yOSAzMTguODYgMjQ2Ljc3IDMyMS40MSBDIDI0OS43NyAzMjIuMzggMjUyLjQyIDMyNC4xMSAyNTUuMTkgMzI1LjU5IEMgMjU2LjQyIDMyNC4zNSAyNTcuNjIgMzIzLjA3IDI1OC44MCAzMjEuNzggQyAyNTguODYgMzE5LjA4IDI1OC45MSAzMTYuMzkgMjU4Ljg5IDMxMy42OSBDIDI1Ni44MyAzMTIuNDggMjU0Ljg0IDMxMS4xNyAyNTMuMDAgMzA5LjY1IEMgMjU0LjQwIDMwOS42NiAyNTUuODAgMzA5LjcwIDI1Ny4yMCAzMDkuNzYgQyAyNTYuMjggMzA2LjY1IDI1Ni4wNyAzMDMuMzkgMjU2LjA5IDMwMC4xNiBDIDI1Ny43OCAzMDEuMDMgMjU4LjcxIDMwMi42NiAyNTkuNTQgMzA0LjI4IEMgMjU5Ljc3IDMwMi45NyAyNjAuMDIgMzAxLjY2IDI2MC4yOCAzMDAuMzYgQyAyNjEuNTIgMzA1LjM0IDI2MS43NyAzMTAuOTYgMjY1Ljg2IDMxNC42MiBDIDI2Ni43NCAzMTIuNzggMjY3LjIyIDMxMC41MSAyNjkuMTMgMzA5LjQzIEMgMjcyLjE2IDMwNy4zNSAyNzQuODcgMzA0LjgxIDI3OC4wNiAzMDIuOTQgQyAyNzcuNTkgMzA1LjM4IDI3NS41NCAzMDYuODIgMjczLjY3IDMwOC4xOSBDIDI3NS41NiAzMDkuNTYgMjc2Ljg5IDMxMS41MSAyNzguMjMgMzEzLjM5IEMgMjc4LjUyIDMxMi44NyAyNzkuMTAgMzExLjgxIDI3OS4zOSAzMTEuMjggQyAyODAuNTQgMzEwLjkyIDI4MS43MCAzMTAuNTggMjgyLjg3IDMxMC4yNCBDIDI4NC4wNiAzMTAuOTEgMjg1LjI1IDMxMS41NyAyODYuNDUgMzEyLjI0IEMgMjg0Ljk2IDMwOC45NSAyODMuODYgMzA1LjUwIDI4Mi41OSAzMDIuMTIgQyAyODEuODIgMjk5LjU3IDI3OC41OCAyOTguNzQgMjc4LjA1IDI5Ni4wOSBDIDI3Ny4zNyAyOTMuMjMgMjc2LjIyIDI5MC41MiAyNzUuMzggMjg3LjcxIEMgMjc2LjgyIDI4OC44OCAyNzcuNzggMjkwLjQ3IDI3OC43OCAyOTIuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQyLjQ1IDI5MS4zMiBDIDM0NS43MyAyOTMuMzggMzQ4Ljk1IDI5NS41MSAzNTIuMTAgMjk3Ljc3IEMgMzUxLjE5IDI5OS4wMCAzNTAuMzAgMzAwLjI0IDM0OS4zOSAzMDEuNDggQyAzNDguODMgMzAxLjA3IDM0Ny43MCAzMDAuMjUgMzQ3LjE0IDI5OS44NCBDIDM0Ny4xNiAzMDEuODIgMzQ3LjY1IDMwMy45MyAzNDYuNzMgMzA1LjgwIEMgMzQ1LjQ0IDMwNi4wMSAzNDQuNDggMzA1LjA0IDM0My40NyAzMDQuNDYgQyAzNDQuMzQgMzAxLjk1IDM0NS40NiAyOTguNzIgMzQyLjc5IDI5Ni44MyBDIDM0MS41NCAyOTcuOTkgMzQwLjgxIDMwMC4wOCAzMzkuMjIgMzAwLjY2IEMgMzM4LjY2IDMwMC4yOSAzMzcuNTUgMjk5LjU0IDMzNy4wMCAyOTkuMTcgQyAzMzguOTQgMjk2LjY1IDM0MC44MCAyOTQuMDUgMzQyLjQ1IDI5MS4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA1NS41NiAyOTguMzkgQyA1Ny4zMyAyOTYuOTUgNTkuMTggMjk1LjYxIDYxLjA0IDI5NC4yOCBDIDYxLjk0IDI5NS41NCA2Mi44NiAyOTYuNzkgNjMuNzkgMjk4LjAzIEMgNjIuNzcgMjk4Ljc0IDYxLjc2IDI5OS40NCA2MC43NCAzMDAuMTUgQyA2Mi4zOCAzMDIuMzQgNjQuMDcgMzA0LjQ5IDY1Ljc3IDMwNi42MyBDIDY0LjI2IDMwNy44OCA2Mi44NCAzMDkuMjQgNjEuMTYgMzEwLjI3IEMgNTguODAgMzEwLjM5IDU2LjQzIDMxMC4xMiA1NC4wNyAzMTAuMjcgQyA1My4wOCAzMDkuMDIgNTIuMDkgMzA3Ljc3IDUxLjE0IDMwNi40OSBDIDUzLjQwIDMwNS4zMCA1NS44OCAzMDYuMTggNTguMjMgMzA2LjUxIEMgNTguODEgMzA2LjE1IDU5Ljk5IDMwNS40MyA2MC41NyAzMDUuMDcgQyA1OC44OSAzMDIuODUgNTcuMjMgMzAwLjYyIDU1LjU2IDI5OC4zOSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzggMjk2LjQwIEMgMjk1LjQ2IDI5NS45OSAyOTcuMTEgMjk1LjI4IDI5OC44NyAyOTUuMjcgQyAzMDEuOTUgMjk3LjUxIDMwNC4wNyAzMDAuODIgMzA3LjIzIDMwMy4wMCBDIDMwNy4zNiAzMDQuMTggMzA3LjUwIDMwNS4zNyAzMDcuNjMgMzA2LjU2IEMgMzA2LjkzIDMwNy4yMSAzMDYuMjIgMzA3Ljg3IDMwNS41MyAzMDguNTQgQyAzMDQuNDMgMzA3LjIzIDMwMy4zMiAzMDUuOTMgMzAyLjI3IDMwNC42MCBDIDMwMS4zNCAzMDQuOTMgMzAwLjQyIDMwNS4yNiAyOTkuNTEgMzA1LjYwIEMgMjk5LjQwIDMwNC45NCAyOTkuMjAgMzAzLjYxIDI5OS4wOSAzMDIuOTQgQyAyOTguMDkgMzA0LjIwIDI5Ny4xMiAzMDUuNDggMjk2LjIwIDMwNi43OSBDIDI5NS42MSAzMDYuNzggMjk0LjQzIDMwNi43NSAyOTMuODQgMzA2Ljc0IEMgMjk2LjEzIDMwOC4yMyAyOTQuOTAgMzA5Ljc1IDI5My4yMSAzMTEuMTUgQyAyOTMuODMgMzExLjU5IDI5NC40NSAzMTIuMDIgMjk1LjA3IDMxMi40NyBDIDI5NC42NiAzMTMuOTIgMjk0LjI4IDMxNS4zOSAyOTMuOTAgMzE2Ljg2IEMgMjk0LjQ5IDMxNi43MSAyOTUuNjYgMzE2LjQxIDI5Ni4yNSAzMTYuMjYgQyAyOTUuMzcgMzE3LjI5IDI5NC41MSAzMTguMzQgMjkzLjYzIDMxOS4zNyBDIDI5My4yNyAzMTcuMjkgMjkyLjM3IDMxNS4xMiAyOTMuNDcgMzEzLjA5IEMgMjkyLjk0IDMxMi45OCAyOTEuODggMzEyLjc2IDI5MS4zNSAzMTIuNjUgQyAyOTIuMTUgMzEwLjU3IDI5My4wNCAzMDguNTIgMjkzLjYzIDMwNi4zNiBDIDI5NC42MyAzMDUuMjMgMjk1LjU3IDMwNC4wNSAyOTYuNTMgMzAyLjg3IEMgMjk1LjQyIDMwMi40MSAyOTQuMzIgMzAxLjk1IDI5My4yMiAzMDEuNTEgQyAyOTMuNDMgMjk5LjgxIDI5My42MiAyOTguMTAgMjkzLjc4IDI5Ni40MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMzIuNjUgMzA0LjY2IEMgMzMzLjY3IDMwMy40OSAzMzQuNzAgMzAyLjMyIDMzNS43MyAzMDEuMTYgQyAzMzguNjIgMzAzLjU4IDM0MS42MiAzMDUuODggMzQ0LjYzIDMwOC4xNSBDIDM0My42MiAzMDkuNDUgMzQyLjYwIDMxMC43NSAzNDEuNTcgMzEyLjA1IEMgMzM4LjU2IDMwOS42MyAzMzUuNTQgMzA3LjIxIDMzMi42NSAzMDQuNjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk2LjIwIDMwNi43OSBDIDI5Ny4xMiAzMDUuNDggMjk4LjA5IDMwNC4yMCAyOTkuMDkgMzAyLjk0IEMgMjk5LjIwIDMwMy42MSAyOTkuNDAgMzA0Ljk0IDI5OS41MSAzMDUuNjAgQyAzMDAuNDIgMzA1LjI2IDMwMS4zNCAzMDQuOTMgMzAyLjI3IDMwNC42MCBDIDMwMy4zMiAzMDUuOTMgMzA0LjQzIDMwNy4yMyAzMDUuNTMgMzA4LjU0IEMgMzAyLjUyIDMxMS4xOCAyOTkuOTggMzE0LjYyIDI5Ni4yNSAzMTYuMjYgQyAyOTUuNjYgMzE2LjQxIDI5NC40OSAzMTYuNzEgMjkzLjkwIDMxNi44NiBDIDI5NC4yOCAzMTUuMzkgMjk0LjY2IDMxMy45MiAyOTUuMDcgMzEyLjQ3IEMgMjk0LjQ1IDMxMi4wMiAyOTMuODMgMzExLjU5IDI5My4yMSAzMTEuMTUgQyAyOTQuOTAgMzA5Ljc1IDI5Ni4xMyAzMDguMjMgMjkzLjg0IDMwNi43NCBDIDI5NC40MyAzMDYuNzUgMjk1LjYxIDMwNi43OCAyOTYuMjAgMzA2Ljc5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMyOC4xMSAzMTAuMjYgQyAzMjkuMTAgMzA5LjA5IDMzMC4xMCAzMDcuOTMgMzMxLjA4IDMwNi43NSBDIDMzNC44MCAzMDkuNzggMzM4LjQwIDMxMi45MyAzNDIuMTIgMzE1Ljk2IEMgMzQxLjA3IDMxNy4yNSAzNDAuMDIgMzE4LjU1IDMzOC45OSAzMTkuODcgQyAzMzUuNDIgMzE2LjYwIDMzMS43MSAzMTMuNDkgMzI4LjExIDMxMC4yNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMjAuMjAgMzEyLjc2IEMgMTIxLjMyIDMxMC44MCAxMjQuNDggMzEwLjk4IDEyNi41MiAzMTAuMjQgQyAxMjYuNTEgMzEyLjIwIDEyNi41MCAzMTQuMTYgMTI2LjU0IDMxNi4xMiBDIDEyNC45NyAzMTQuMDggMTIyLjY3IDMxMy4yMCAxMjAuMjAgMzEyLjc2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDYxLjcyIDMyMy45NSBDIDY1LjExIDMyMC41NSA2OC42NiAzMTcuMzMgNzIuMDUgMzEzLjkzIEMgNzMuMTUgMzE0Ljk4IDc0LjI0IDMxNi4wNCA3NS4zNSAzMTcuMDggQyA3NC4yNCAzMTguMjggNzMuMTMgMzE5LjQ4IDcyLjA0IDMyMC43MSBDIDczLjE1IDMyMC45MyA3NC4yNyAzMjEuMTYgNzUuMzkgMzIxLjM4IEMgNzYuMDIgMzIwLjY1IDc2LjY2IDMxOS45MyA3Ny4yOSAzMTkuMjAgQyA3OC40MCAzMjAuMjcgNzkuNTIgMzIxLjMyIDgwLjY0IDMyMi4zOCBDIDc5LjMwIDMyMy41MSA3OC4wNiAzMjYuMTMgNzUuOTMgMzI0Ljk4IEMgNzMuNzQgMzI0LjU0IDcxLjY1IDMyMy4wNCA2OS40MCAzMjMuMjQgQyA2Ny44NiAzMjQuNDcgNjYuNTIgMzI1LjkyIDY1LjEwIDMyNy4yOSBDIDYzLjk4IDMyNi4xNyA2Mi44NSAzMjUuMDYgNjEuNzIgMzIzLjk1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExNC40NCAzMTUuMTYgQyAxMTUuNDMgMzE1LjEyIDExOC43NCAzMTIuMDUgMTE4LjE4IDMxNC4xNCBDIDExNy42OCAzMTUuMDkgMTE3LjE0IDMxNi4wMiAxMTYuNTUgMzE2LjkyIEMgMTE2LjAxIDMxOS41NCAxMTUuODMgMzIyLjI1IDExNi43NiAzMjQuODIgQyAxMTYuNTUgMzI0Ljg3IDExNi4xMiAzMjQuOTcgMTE1LjkxIDMyNS4wMiBMIDExNS4xMCAzMjQuNzUgQyAxMTMuMjkgMzIxLjg5IDExMy43NyAzMTguMjggMTE0LjQ0IDMxNS4xNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNjQuMDcgMzI0Ljc5IEMgMjY1LjQ1IDMyMi4wMyAyNjUuODIgMzE4LjAxIDI2OS4wOSAzMTYuNzggQyAyNjcuMjYgMzIwLjIxIDI2NS42MCAzMjMuNzUgMjYzLjQyIDMyNi45OSBDIDI2My40OCAzMjguNTYgMjY0LjI3IDMyOS41OSAyNjUuODAgMzMwLjA5IEMgMjYzLjc1IDMzMC42MSAyNjEuNzEgMzMxLjIyIDI1OS41OSAzMzEuMzggQyAyNjAuMjUgMzI4LjY1IDI2Mi41MCAzMjYuOTUgMjY0LjA3IDMyNC43OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMjEuNDggMzE3LjM2IEMgMzIyLjkxIDMxOC43NyAzMjQuMzIgMzIwLjIxIDMyNS41NiAzMjEuODEgQyAzMjUuMDcgMzIyLjgzIDMyNC42MCAzMjMuODYgMzI0LjEyIDMyNC44OSBDIDMyNi4wOCAzMjQuOTAgMzI4LjAyIDMyNC45MCAzMjkuOTkgMzI0LjkxIEMgMzI4LjcyIDMyNi4xNyAzMjcuNzAgMzI3LjgyIDMyNi4wNyAzMjguNjQgQyAzMjMuNDIgMzI4Ljc1IDMyMC43OCAzMjguNDkgMzE4LjE1IDMyOC4zOCBDIDMxOS40NiAzMjkuODcgMzIwLjc4IDMzMS4zNyAzMjIuMDYgMzMyLjg5IEMgMzIwLjgyIDMzMy44NCAzMTkuNTkgMzM0LjgxIDMxOC4zNiAzMzUuNzggQyAzMTcuMDggMzM0LjIzIDMxNS43OCAzMzIuNjkgMzE0LjUxIDMzMS4xMyBDIDMxNC43NyAzMzAuMzYgMzE1LjI4IDMyOC44MiAzMTUuNTQgMzI4LjA1IEMgMzEzLjg3IDMyNy45MiAzMTIuMTkgMzI3Ljc4IDMxMC41MyAzMjcuNjMgQyAzMTEuNjYgMzI2LjU1IDMxMi43NCAzMjUuMzkgMzE0LjAzIDMyNC41MCBDIDMxNi43MSAzMjQuNTAgMzE5LjM3IDMyNC44MCAzMjIuMDUgMzI0Ljc5IEMgMzIwLjg2IDMyMy4zNSAzMTkuNjEgMzIxLjk4IDMxOC4zMyAzMjAuNjMgQyAzMTkuMzcgMzE5LjU0IDMyMC40MiAzMTguNDUgMzIxLjQ4IDMxNy4zNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNTEuNzIgMzIyLjUwIEMgMTQ5LjA4IDMyMS40MCAxNTEuNTMgMzE5LjU0IDE1Mi4zMyAzMTguMDYgQyAxNTIuMTggMzE5LjU1IDE1MS45NiAzMjEuMDIgMTUxLjcyIDMyMi41MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNzguOTkgMzIwLjI4IEMgMjgwLjAxIDMyMS4zNiAyODEuMTcgMzIyLjI5IDI4Mi40NCAzMjMuMDkgQyAyODIuMDQgMzIzLjg4IDI4Mi4yMyAzMjYuMDUgMjgwLjg4IDMyNS4yMyBDIDI4MC41NCAzMjMuNDcgMjgwLjA3IDMyMS43NCAyNzguOTkgMzIwLjI4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDc0Ljc3IDMzMi41NiBDIDc3LjE4IDMyOS42NyA3OS44OCAzMjcuMDQgODIuMjAgMzI0LjA4IEMgODMuNDQgMzI1LjAyIDg0LjY3IDMyNS45NyA4NS44OSAzMjYuOTQgQyA4My4zMiAzMjkuODEgODAuODkgMzMyLjgxIDc4LjMyIDMzNS42OCBDIDc3LjE0IDMzNC42MyA3NS45NiAzMzMuNTkgNzQuNzcgMzMyLjU2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDgwLjI2IDMzNy4yNiBDIDgyLjc5IDMzNC4zOSA4NS4xOSAzMzEuNDAgODcuNjcgMzI4LjQ5IEMgOTAuNzMgMzMxLjUzIDk1LjAzIDMzMy4zMyA5Ny40MCAzMzYuOTggQyA5Ni4yMiAzNDAuMzMgOTMuNTIgMzQyLjg4IDkxLjc0IDM0NS45MSBDIDkwLjM4IDM0NS4wMyA4OS4wNiAzNDQuMTMgODcuNzQgMzQzLjIxIEMgODkuNDAgMzQwLjk5IDkxLjExIDMzOC44MCA5Mi43OCAzMzYuNTkgQyA5MS42NSAzMzUuNjQgOTAuNTEgMzM0LjcwIDg5LjM4IDMzMy43NSBDIDg3LjQyIDMzNS43OCA4NS43NCAzMzguMDQgODQuMDUgMzQwLjI5IEMgODIuNzcgMzM5LjI5IDgxLjUxIDMzOC4yOCA4MC4yNiAzMzcuMjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzA1LjkzIDMzMS4yMCBDIDMwNy4xMCAzMzAuMzEgMzA4LjI2IDMyOS40MSAzMDkuNDMgMzI4LjUyIEMgMzExLjgyIDMzMS40NiAzMTQuMjAgMzM0LjQyIDMxNi43OCAzMzcuMjEgQyAzMTUuNTUgMzM4LjI4IDMxNC4zMCAzMzkuMzIgMzEzLjA0IDM0MC4zNiBDIDMxMC42NyAzMzcuMzEgMzA4LjIzIDMzNC4zMCAzMDUuOTMgMzMxLjIwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1Mi4zMCAzMzUuMjggQyAxNTIuOTMgMzM0LjQ5IDE1My41NyAzMzMuNzEgMTU0LjIxIDMzMi45NCBDIDE1NC42MyAzMzMuOTQgMTU1LjA2IDMzNC45NSAxNTUuNDkgMzM1Ljk2IEMgMTU0LjQyIDMzNS43MyAxNTMuMzYgMzM1LjUxIDE1Mi4zMCAzMzUuMjggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTczLjkzIDMzOC45NiBDIDE3NC4zMyAzMzYuNzQgMTc1LjMzIDMzNC43MiAxNzYuNDUgMzMyLjc5IEMgMTc2Ljk1IDMzNC43MiAxNzcuNTAgMzM2LjY1IDE3Ny45NyAzMzguNjEgQyAxNzYuNjIgMzM4LjczIDE3NS4yNyAzMzguODUgMTczLjkzIDMzOC45NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzYgMzQwLjAzIEMgMjk3LjI4IDMzNy45MCAzMDAuMzcgMzM1LjA3IDMwNC4xNyAzMzMuMzkgQyAzMDYuNjYgMzM2LjAyIDMwOS4wMiAzMzguODIgMzEwLjkwIDM0MS45MiBDIDMwOS44NCAzNDIuODggMzA4LjY3IDM0My43MiAzMDcuNDUgMzQ0LjQ2IEMgMzA1LjM0IDM0Mi43MCAzMDQuMTQgMzQwLjA5IDMwMi40OSAzMzcuOTMgQyAzMDAuMDAgMzM5LjUzIDI5Ny41NyAzNDEuMjEgMjk1LjA0IDM0Mi43NSBDIDI5NC43MiAzNDIuMDcgMjk0LjA4IDM0MC43MSAyOTMuNzYgMzQwLjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDk3LjM3IDM0Mi4wNyBDIDk4LjI0IDM0MC42NyA5OS4xOSAzMzkuMzMgMTAwLjEyIDMzNy45NyBDIDEwMS4zMiAzMzguNzYgMTAyLjUzIDMzOS41NiAxMDMuNzMgMzQwLjM2IEMgMTAzLjA3IDM0MS41NSAxMDIuNDIgMzQyLjc1IDEwMS44MyAzNDMuOTggQyAxMDMuMTkgMzQzLjMzIDEwNC40OCAzNDIuNTAgMTA1Ljk1IDM0Mi4wOSBDIDEwOC4yMiAzNDIuNzMgMTEwLjEyIDM0NC4yMiAxMTEuODQgMzQ1Ljc4IEMgMTEwLjE2IDM0OS4wNiAxMDguMjcgMzUyLjIxIDEwNi41MSAzNTUuNDQgQyAxMDQuMzMgMzU0LjE0IDEwMi4xMyAzNTIuODYgOTkuOTUgMzUxLjU3IEMgMTAwLjQyIDM1MC42NiAxMDAuOTEgMzQ5Ljc1IDEwMS4zOSAzNDguODQgQyAxMDIuMjkgMzQ5LjM3IDEwMy4xOSAzNDkuOTEgMTA0LjA5IDM1MC40NSBDIDEwNS4wOSAzNDguNzYgMTA2LjA3IDM0Ny4wNSAxMDYuOTEgMzQ1LjI3IEMgMTAzLjA2IDM0NS4xNiAxMDAuNjMgMzQ5LjEwIDk3LjA0IDM0OS42NSBDIDk1Ljc3IDM0OC45MCA5NC41OCAzNDguMDIgOTMuMzggMzQ3LjE4IEMgOTUuMTggMzQ2LjI4IDk2Ljk5IDM0NS40MCA5OC44MSAzNDQuNTQgQyA5OC4zMCAzNDMuNzMgOTcuODIgMzQyLjkxIDk3LjM3IDM0Mi4wNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyODAuNDggMzQ3LjkxIEMgMjg0LjMwIDM0NS43NSAyODguMTEgMzQzLjU3IDI5MS45MSAzNDEuMzcgQyAyOTIuMjkgMzQxLjkzIDI5My4wNSAzNDMuMDUgMjkzLjQ0IDM0My42MiBDIDI5Mi44OCAzNDQuMTAgMjkyLjMzIDM0NC41OSAyOTEuNzkgMzQ1LjA5IEMgMjkzLjMyIDM0Ny4zOCAyOTQuNzYgMzQ5LjczIDI5Ni4yMiAzNTIuMDggQyAyOTQuODYgMzUyLjg3IDI5My40OSAzNTMuNjYgMjkyLjEzIDM1NC40NiBDIDI5MC43OCAzNTIuMDIgMjg5LjM3IDM0OS42MiAyODcuOTUgMzQ3LjIzIEMgMjg2LjAyIDM0OC4zNCAyODQuMDcgMzQ5LjQxIDI4Mi4wOSAzNTAuNDMgQyAyODEuNjkgMzQ5LjgwIDI4MC44OCAzNDguNTQgMjgwLjQ4IDM0Ny45MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTYuMjAgMzQ0LjA4IEMgMjk3LjQ1IDM0My4yMyAyOTguNzAgMzQyLjM4IDI5OS45NiAzNDEuNTQgQyAzMDEuMjEgMzQzLjQyIDMwMi41MSAzNDUuMjggMzAzLjgzIDM0Ny4xMiBDIDMwMi41MyAzNDcuOTYgMzAxLjI3IDM0OC44NyAyOTkuOTMgMzQ5LjY1IEMgMjk4LjU3IDM0Ny44NyAyOTcuNDMgMzQ1Ljk0IDI5Ni4yMCAzNDQuMDggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjc0LjkzIDM1MC40OSBDIDI3Ni4yNCAzNDkuOTUgMjc3LjU2IDM0OS40MiAyNzguODggMzQ4LjkxIEMgMjc5Ljg0IDM1MC44NiAyODEuMDAgMzUyLjcyIDI4MS43NCAzNTQuNzcgQyAyODAuNDggMzU1LjU2IDI3OS4xMSAzNTYuMTUgMjc3Ljc2IDM1Ni43OCBDIDI3Ni43OCAzNTQuNjkgMjc1Ljc5IDM1Mi42MiAyNzQuOTMgMzUwLjQ5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDEyMC4yMCAzNDkuODIgQyAxMjMuNzggMzUxLjUyIDEyNy41MyAzNTIuOTIgMTMwLjk5IDM1NC44NiBDIDEzMi40OCAzNTUuNzAgMTMxLjgwIDM1Ny4yNiAxMzEuMzQgMzU4LjUxIEMgMTMwLjM5IDM2MS4wMCAxMjkuMzEgMzYzLjQ0IDEyOC4zMSAzNjUuOTEgQyAxMjMuOTIgMzY0LjAxIDExOS40NyAzNjIuMjQgMTE1LjIzIDM2MC4wMiBDIDExNi43MCAzNTYuNTMgMTE4LjY1IDM1My4yOCAxMjAuMjAgMzQ5LjgyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEyMi45MSAzNTQuNDUgQyAxMjQuNDMgMzU1LjE0IDEyNS45NiAzNTUuODQgMTI3LjQ3IDM1Ni41NyBDIDEyNi43MSAzNTguMTUgMTI1Ljk4IDM1OS43NiAxMjUuMjQgMzYxLjM1IEMgMTIzLjcwIDM2MC42MSAxMjIuMTUgMzU5LjkwIDEyMC42MSAzNTkuMTcgQyAxMjEuMzkgMzU3LjYwIDEyMi4xNSAzNTYuMDMgMTIyLjkxIDM1NC40NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNDEuNjcgMzU1LjAzIEMgMTQzLjAzIDM1NS4zMiAxNDQuMzggMzU1LjY0IDE0NS43MiAzNTUuOTggQyAxNDUuNDYgMzU3LjI1IDE0NS4yMSAzNTguNTIgMTQ0Ljk2IDM1OS43OSBDIDE0Ny4yNyAzNjAuNDYgMTQ5LjU4IDM2MS4xMiAxNTEuOTEgMzYxLjczIEMgMTUxLjQwIDM2My41NyAxNTEuMDIgMzY1LjQ3IDE1MC4yNCAzNjcuMjQgQyAxNDguNTIgMzY4Ljk0IDE0Ni4yNiAzNzAuMDAgMTQ0LjMyIDM3MS40NCBDIDE0Mi45NSAzNzEuMDYgMTQxLjYwIDM3MC42NiAxNDAuMjUgMzcwLjIzIEMgMTQxLjkyIDM2Ny4zMiAxNDYuMDUgMzY3LjEyIDE0Ny4xOSAzNjMuNzYgQyAxNDQuNjggMzYyLjg1IDE0Mi4xNCAzNjIuMDIgMTM5LjYxIDM2MS4yMCBDIDE0MC4zMSAzNTkuMTQgMTQxLjAwIDM1Ny4wOSAxNDEuNjcgMzU1LjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI1NC42MSAzNTguOTMgQyAyNTcuODIgMzU3Ljg3IDI2MC45NCAzNTYuNTYgMjY0LjE1IDM1NS41MCBDIDI2NS4yMCAzNTUuMTcgMjY2Ljg1IDM1NS4xMyAyNjcuMjYgMzU2LjQxIEMgMjY4LjY1IDM1OS4yMSAyNjkuNzQgMzYyLjE0IDI3MC45MiAzNjUuMDQgQyAyNjkuNTEgMzY1LjU4IDI2OC4xMCAzNjYuMTUgMjY2LjcxIDM2Ni43MiBDIDI2NS42OSAzNjQuMTYgMjY0LjY2IDM2MS42MCAyNjMuNjQgMzU5LjA0IEMgMjYxLjM3IDM1OS43NiAyNTkuMTIgMzYwLjUyIDI1Ni44NSAzNjEuMjQgQyAyNTguMDcgMzYxLjc2IDI1OS4zNCAzNjIuMTMgMjYwLjY1IDM2Mi4zNyBDIDI2MS4zNyAzNjQuMzAgMjYyLjEwIDM2Ni4yNCAyNjIuODIgMzY4LjE4IEMgMjYxLjM1IDM2OC42NiAyNTkuODggMzY5LjE3IDI1OC40MiAzNjkuNjcgQyAyNTcuODEgMzY3LjkwIDI1Ny4yMiAzNjYuMTIgMjU2LjY1IDM2NC4zNCBDIDI1Ny4xNCAzNjMuMDIgMjU2LjY1IDM2MS44MiAyNTUuNTggMzYxLjAyIEMgMjU1LjM0IDM2MC41MCAyNTQuODUgMzU5LjQ1IDI1NC42MSAzNTguOTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTM0LjgwIDM1Ni4xNyBDIDEzNi4xNyAzNTYuNjcgMTM3LjU1IDM1Ny4xNyAxMzguOTIgMzU3LjY4IEMgMTM4LjExIDM1OS43NiAxMzcuMzUgMzYxLjg3IDEzNi42MCAzNjMuOTggQyAxMzUuMTQgMzYzLjUwIDEzMy43MCAzNjIuOTggMTMyLjI2IDM2Mi40OSBDIDEzMy4xNyAzNjAuNDAgMTM0LjAxIDM1OC4zMCAxMzQuODAgMzU2LjE3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI0MC4zMCAzNjIuOTkgQyAyNDQuMzIgMzYyLjE3IDI0OC4xNiAzNjAuNTMgMjUyLjI5IDM2MC4yNCBDIDI1My44MCAzNjMuMDUgMjU0LjkwIDM2Ni4wOCAyNTUuNTIgMzY5LjIyIEMgMjU1LjA3IDM3MC4yMyAyNTQuMzEgMzcwLjkyIDI1My4yNiAzNzEuMjcgQyAyNDkuODggMzcyLjQ3IDI0Ni4zNyAzNzMuMjkgMjQyLjg2IDM3NC4wNCBDIDI0Mi43MCAzNzMuMDcgMjQyLjU0IDM3Mi4xMCAyNDIuMzggMzcxLjE0IEMgMjQ1LjE2IDM3MC4zOCAyNDguMDUgMzY5Ljg4IDI1MC43MCAzNjguNzEgQyAyNTAuNDIgMzY2LjkzIDI0OS43NSAzNjUuMjUgMjQ5LjIyIDM2My41NiBDIDI0Ny42OCAzNjQuMDEgMjQ2LjE0IDM2NC40NiAyNDQuNzUgMzY1LjI2IEMgMjQ1Ljg4IDM2Ni4xMCAyNDguNDMgMzY2LjA0IDI0Ny44NSAzNjguMTIgQyAyNDUuOTggMzY4LjkyIDI0My45MyAzNjkuMTQgMjQxLjkzIDM2OS40MCBDIDI0MS4zMSAzNjcuMjggMjQwLjc3IDM2NS4xMyAyNDAuMzAgMzYyLjk5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1NC4wOCAzNjIuNDAgQyAxNTUuMzMgMzYyLjYzIDE1Ni41NyAzNjIuOTEgMTU3LjgwIDM2My4yNCBDIDE1Ny43OCAzNjYuMjQgMTU2LjQ2IDM2OS4wNiAxNTYuMTIgMzcyLjA0IEMgMTU2LjU4IDM3MS45NCAxNTcuNTAgMzcxLjc1IDE1Ny45NiAzNzEuNjUgQyAxNTguNzQgMzY5LjA3IDE1OS4xOSAzNjYuNDAgMTU5LjgwIDM2My43OCBDIDE2MS4xNCAzNjQuMDMgMTYyLjQ4IDM2NC4yOCAxNjMuODIgMzY0LjUzIEMgMTYzLjIzIDM2Ny40NyAxNjIuNTggMzcwLjM5IDE2Mi4wOSAzNzMuMzUgQyAxNjIuNjMgMzczLjE5IDE2My43MSAzNzIuODggMTY0LjI1IDM3Mi43MiBDIDE2NC45MCAzNzAuMjEgMTY1LjE0IDM2Ny42MSAxNjUuOTAgMzY1LjE0IEMgMTY3LjE5IDM2NS4yMiAxNjguNDggMzY1LjM1IDE2OS43NyAzNjUuNTEgQyAxNjguNzAgMzY5LjA2IDE3MC4wNiAzNzUuNDEgMTY1LjE2IDM3Ni4xOCBDIDE2MC40MCAzNzUuOTEgMTU1LjgxIDM3NC40MiAxNTEuMTcgMzczLjQxIEMgMTUyLjE4IDM2OS43NSAxNTMuMTkgMzY2LjA5IDE1NC4wOCAzNjIuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA0LjU2IDM2NC4yNCBDIDIwNS45NiAzNjQuMTcgMjA3LjM1IDM2NC4xMiAyMDguNzUgMzY0LjA4IEMgMjA4LjgwIDM2NC45OCAyMDguOTEgMzY2Ljc3IDIwOC45NiAzNjcuNjcgQyAyMTEuNDkgMzY3LjQ3IDIxNC4wMyAzNjcuMjkgMjE2LjU3IDM2Ny4xNyBDIDIxNi42MyAzNjkuMjUgMjE3LjEyIDM3MS4zOSAyMTYuNjkgMzczLjQ3IEMgMjE1LjUzIDM3NS4yMyAyMTQuMTggMzc2Ljg4IDIxMy4yOCAzNzguODEgQyAyMTEuNzUgMzc4LjgzIDIxMC4yMyAzNzguODQgMjA4LjcwIDM3OC44MyBDIDIwOS40MiAzNzUuNjYgMjEzLjI4IDM3NC4wOSAyMTIuNjkgMzcwLjU1IEMgMjEwLjA1IDM3MC42NiAyMDcuNDEgMzcwLjc5IDIwNC43OCAzNzAuODAgQyAyMDQuNzUgMzY4LjYxIDIwNC42NyAzNjYuNDIgMjA0LjU2IDM2NC4yNCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMzMuODggMzY0LjQwIEMgMjM1LjI5IDM2NC4xMyAyMzYuNjkgMzYzLjg4IDIzOC4xMCAzNjMuNjQgQyAyMzguODggMzY3LjMwIDIzOS43MSAzNzAuOTQgMjQwLjcwIDM3NC41NSBDIDIzOS4xNyAzNzQuOTIgMjM3LjY1IDM3NS4yOSAyMzYuMTIgMzc1LjYzIEMgMjM1LjQyIDM3MS44NyAyMzQuNTMgMzY4LjE2IDIzMy44OCAzNjQuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjI3LjUzIDM2NS41MSBDIDIyOC45NiAzNjUuMzMgMjMwLjQwIDM2NS4xNyAyMzEuODQgMzY1LjAxIEMgMjMyLjA2IDM2OC42NiAyMzUuMjYgMzczLjgxIDIzMS4yMiAzNzYuMjUgQyAyMjcuNTUgMzc3LjU3IDIyMy41NyAzNzcuNTYgMjE5Ljc1IDM3OC4yMSBDIDIxOS43MCAzNzcuNDcgMjE5LjYwIDM3Ni4wMCAyMTkuNTUgMzc1LjI2IEMgMjIwLjI0IDM3NS4xMiAyMjEuNjQgMzc0Ljg0IDIyMi4zMyAzNzQuNzAgQyAyMjEuMzQgMzcyLjAxIDIyMC4wOSAzNjkuNDIgMjE5LjAxIDM2Ni43OCBDIDIyMC4wOSAzNjYuNjQgMjIyLjI2IDM2Ni4zNyAyMjMuMzQgMzY2LjI0IEMgMjI0LjgzIDM2OS4xMCAyMjUuMzkgMzcyLjYzIDIyOC4wMCAzNzQuNzYgQyAyMjkuNTIgMzcxLjgwIDIyNy43OSAzNjguNTUgMjI3LjUzIDM2NS41MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNzIuMDYgMzY2LjEzIEMgMTczLjUxIDM2Ni4yNyAxNzQuOTYgMzY2LjQyIDE3Ni40MSAzNjYuNTcgQyAxNzUuOTEgMzcwLjMwIDE3NS4zOCAzNzQuMDIgMTc1LjA1IDM3Ny43NyBDIDE3My40OCAzNzcuNjUgMTcxLjkyIDM3Ny41MSAxNzAuMzUgMzc3LjM3IEMgMTcwLjk2IDM3My42MyAxNzEuNTcgMzY5Ljg5IDE3Mi4wNiAzNjYuMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTc4LjAyIDM2OS43NCBDIDE3OC4yMCAzNjguNzUgMTc4LjM5IDM2Ny43NyAxNzguNTkgMzY2Ljc5IEMgMTgyLjE2IDM2Ny40NiAxODYuMDMgMzY2LjkzIDE4OS4zNiAzNjguNjQgQyAxODkuMzEgMzcyLjIxIDE4OS4yMCAzNzUuNzkgMTg4LjY0IDM3OS4zMyBDIDE4Ny41NyAzNzkuMTggMTg1LjQzIDM3OC44OSAxODQuMzYgMzc4Ljc1IEMgMTg0LjU0IDM3Ni4wMSAxODQuNzQgMzczLjI4IDE4NC44NyAzNzAuNTUgQyAxODIuNTggMzcwLjM1IDE4MC4yOSAzNzAuMDkgMTc4LjAyIDM2OS43NCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTEuNzYgMzY3Ljc5IEMgMTkzLjIyIDM2Ny44MyAxOTQuNjggMzY3Ljg3IDE5Ni4xNCAzNjcuOTIgQyAxOTYuMTMgMzcwLjE2IDE5Ni4xMyAzNzIuMzkgMTk2LjE0IDM3NC42NCBDIDE5NC42MSAzNzQuNjQgMTkzLjA3IDM3NC42NSAxOTEuNTQgMzc0LjY1IEMgMTkxLjYxIDM3Mi4zNiAxOTEuNjkgMzcwLjA3IDE5MS43NiAzNjcuNzkgWlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cbn1cblxuTG9nby5Qcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG9wYWNpdHk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xvZ28uanN4IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2hvbWVQYWdlLnJ0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQge3VwZGF0ZUJvb2tpbmcsIGNhbmNlbEJvb2tpbmd9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMnO1xuaW1wb3J0IHt1cGRhdGVVc2VyfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuY29uc3QgdGVhbXNEYXRhID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdGVhbXNEYXRhJyk7XG5cbmZ1bmN0aW9uIHBhcnNlRXZlbnREYXRlKGV2ZW50KSB7XG4gIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LnllYXIsIGV2ZW50Lm1vbnRoLCBldmVudC5kYXkpO1xuICBldmVudERhdGUuc2V0TW9udGgoZXZlbnREYXRlLmdldE1vbnRoKCkgLSAxKTtcbiAgcmV0dXJuIGV2ZW50RGF0ZTtcbn1cblxuZnVuY3Rpb24gaXNGdXR1cmVFdmVudChldmVudCkge1xuICBjb25zdCBldmVudERhdGUgPSBwYXJzZUV2ZW50RGF0ZShldmVudCk7XG4gIHJldHVybiBldmVudERhdGUgPiBEYXRlLm5vdygpO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGF1dGhEYXRhOiBzdGF0ZS5hdXRoRGF0YSxcbiAgZXZlbnRzOiBzdGF0ZS5ldmVudHMsXG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmdzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdXBkYXRlQm9va2luZzogKHVpZCwgZXZlbnRJZCwgYm9va2luZykgPT4gZGlzcGF0Y2godXBkYXRlQm9va2luZyh1aWQsIGV2ZW50SWQsIGJvb2tpbmcpKSxcbiAgY2FuY2VsQm9va2luZzogKHVpZCwgZXZlbnRJZCkgPT4gZGlzcGF0Y2goY2FuY2VsQm9va2luZyh1aWQsIGV2ZW50SWQpKSxcbiAgdXBkYXRlVXNlcjogKHVpZCwgdXNlcikgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1aWQsIHVzZXIpKVxufSk7XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXZlbnRJZDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGdldE9wZW5FdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ub21pdEJ5KHRoaXMucHJvcHMuZXZlbnRzLCBldmVudCA9PiBldmVudC5zdGF0dXMgPT09IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLkNMT1NFRC52YWx1ZSk7XG4gIH1cblxuICBnZXRDbG9zZWRFdmVudHMoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy5ldmVudHMpXG4gICAgICAub21pdEJ5KGV2ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnN0YXR1cyAhPT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuQ0xPU0VELnZhbHVlIHx8ICFpc0Z1dHVyZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0pXG4gICAgICAubWFwKChldmVudCwgZXZlbnRJZCkgPT4gKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGV2ZW50SWRcbiAgICAgIH0pKVxuICAgICAgLnNvcnRCeShldmVudERhdGEgPT4gcGFyc2VFdmVudERhdGUoZXZlbnREYXRhLmV2ZW50KSlcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgYm9va0V2ZW50KGV2ZW50SWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudElkfSk7XG4gIH1cblxuICBpc0Jvb2tpbmdFbmFibGVkKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5zdGF0dXMpIHtcbiAgICAgIGNhc2UgQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfQUxMLnZhbHVlOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUy52YWx1ZToge1xuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2Vyc1t0aGlzLnByb3BzLmF1dGhEYXRhLnVpZF07XG4gICAgICAgIHJldHVybiB1c2VyLnNlYXNvblRpY2tldHMgPiAwXG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudE5hbWUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZUlkKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnRIYXBvZWxJbWFnZSgpIHtcbiAgICByZXR1cm4gJ2h0dHA6Ly9oYXBvZWwuY28uaWwvc2l0ZXMvZGVmYXVsdC9maWxlcy9sb2dvMTIweDEyMC5wbmcnO1xuICB9XG5cbiAgaXNSZWdpc3RlcmVkVG9FdmVudChldmVudElkKSB7XG4gICAgY29uc3QgdXNlckJvb2tpbmdzID0gdGhpcy5wcm9wcy5ib29raW5nc1t0aGlzLnByb3BzLmF1dGhEYXRhLnVpZF07XG5cbiAgICByZXR1cm4gXy5oYXModXNlckJvb2tpbmdzLCBldmVudElkKTtcbiAgfVxuXG4gIGdldEV2ZW50SW1hZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZUlkKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLnNyYztcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudERhdGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmVudC5kYXkgKyAnLycgKyBldmVudC5tb250aCArICcvJyArIGV2ZW50LnllYXI7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnRUaW1lKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuaG91ciArICc6JyArIGV2ZW50Lm1pbnV0ZTtcbiAgICB9XG4gIH1cblxuICBzdG9wRWRpdGluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudElkOiBudWxsfSk7XG4gIH1cblxuICB1cGRhdGVCb29raW5nKGJvb2tpbmcpIHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUJvb2tpbmcodGhpcy5wcm9wcy5hdXRoRGF0YS51aWQsIHRoaXMuc3RhdGUuZXZlbnRJZCwgYm9va2luZyk7XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgY2FuY2VsQm9va2luZyhldmVudElkKSB7XG4gICAgdGhpcy5wcm9wcy5jYW5jZWxCb29raW5nKHRoaXMucHJvcHMuYXV0aERhdGEudWlkLCBldmVudElkKTtcbiAgfVxuXG4gIGNyZWF0ZVVzZXJJbmZvKHVpZCwgdXNlcikge1xuICAgIHVzZXIucGhvdG9VUkwgPSB0aGlzLnByb3BzLmF1dGhEYXRhLnBob3RvVVJMO1xuICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih1aWQsIHVzZXIpO1xuICB9XG5cbiAgZ2V0SG9tZVRlYW0oKSB7XG4gICAgcmV0dXJuIHRlYW1zRGF0YS5IQVBPRUxfSkVSVVNBTEVNO1xuICB9XG5cbiAgZ2V0QXdheVRlYW0oZXZlbnQpIHtcbiAgICByZXR1cm4gdGVhbXNEYXRhW2V2ZW50LnR5cGVJZF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbkhvbWVQYWdlLnByb3BUeXBlcyA9IHtcbiAgYXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZVBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9ldmVudEl0ZW0nLFxuICAgICcuLi9ib29raW5nRm9ybS9ib29raW5nRm9ybScsXG4gICAgJy4uL3VzZXJGb3JtJyxcbiAgICAnLi9ob21lUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBFdmVudEl0ZW0sIEJvb2tpbmdGb3JtLCBVc2VyRm9ybSwgaG9tZVBhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25Cb29raW5nMShvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHRoaXMuYm9va0V2ZW50KGV2ZW50SW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNhbmNlbEJvb2tpbmcyKG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxCb29raW5nKGV2ZW50SW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDMob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudEl0ZW0sIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAnZXZlbnRJZCc6IGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAnb25Cb29raW5nJzogb25Cb29raW5nMS5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2FuY2VsQm9va2luZyc6IG9uQ2FuY2VsQm9va2luZzIuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Cb29raW5nNChvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHRoaXMuYm9va0V2ZW50KGV2ZW50LmV2ZW50SWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNhbmNlbEJvb2tpbmc1KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxCb29raW5nKGV2ZW50LmV2ZW50SWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDYob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudEl0ZW0sIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAnZXZlbnRJZCc6IGV2ZW50LmV2ZW50SWQsXG4gICAgICAgICAgICAnb25Cb29raW5nJzogb25Cb29raW5nNC5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2FuY2VsQm9va2luZyc6IG9uQ2FuY2VsQm9va2luZzUuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25TdWJtaXQ3KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZWRpdGluZ0V2ZW50LCBib29raW5nKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQm9va2luZyhib29raW5nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTgob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBlZGl0aW5nRXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZUVkaXRpbmdFdmVudDkob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyKSB7XG4gICAgICAgIHZhciBlZGl0aW5nRXZlbnQgPSB0aGlzLnByb3BzLmV2ZW50c1t0aGlzLnN0YXRlLmV2ZW50SWRdO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChCb29raW5nRm9ybSwge1xuICAgICAgICAgICAgJ2tleSc6ICdlZGl0LWJvb2tpbmcnLFxuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRFdmVudE5hbWUoZWRpdGluZ0V2ZW50KSArICcgLSAnICsgdGhpcy5nZXRFdmVudERhdGUoZWRpdGluZ0V2ZW50KSArICcgJyArIHRoaXMuZ2V0RXZlbnRUaW1lKGVkaXRpbmdFdmVudCksXG4gICAgICAgICAgICAnYm9va2luZyc6IF8uZ2V0KHRoaXMucHJvcHMuYm9va2luZ3MsIFtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGhEYXRhLnVpZCxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmV2ZW50SWRcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgJ29uU3VibWl0Jzogb25TdWJtaXQ3LmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBlZGl0aW5nRXZlbnQpLFxuICAgICAgICAgICAgJ3NlYXNvblRpY2tldHMnOiBfLmdldCh0aGlzLnByb3BzLnVzZXJzLCBbXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoRGF0YS51aWQsXG4gICAgICAgICAgICAgICAgJ3NlYXNvblRpY2tldHMnXG4gICAgICAgICAgICBdKSB8fCAwLFxuICAgICAgICAgICAgJ29uQ2xvc2UnOiBvbkNsb3NlOC5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZWRpdGluZ0V2ZW50KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVPcGVuRXZlbnRzQ2xvc2VkRXZlbnRzSGFzVXNlcjEwKCkge1xuICAgICAgICB2YXIgb3BlbkV2ZW50cyA9IHRoaXMuZ2V0T3BlbkV2ZW50cygpO1xuICAgICAgICB2YXIgY2xvc2VkRXZlbnRzID0gdGhpcy5nZXRDbG9zZWRFdmVudHMoKTtcbiAgICAgICAgdmFyIGhhc1VzZXIgPSB0aGlzLnByb3BzLnVzZXJzW3RoaXMucHJvcHMuYXV0aERhdGEudWlkXTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzaXRlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaG9tZS1wYWdlIHNtYWxsLWNlbnRlcmVkJyB9LCBoYXNVc2VyID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdldmVudHMtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnRzLWNvbnRhaW5lcidcbiAgICAgICAgfSwgIXRoaXMuc3RhdGUuZXZlbnRJZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZXZlbnRzJyxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnRzJ1xuICAgICAgICB9LCBfLnNpemUob3BlbkV2ZW50cykgPT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3Nob3ctZm9yLXNtYWxsLW9ubHkgbm8tYm9va2luZ3MgbW9yZS1zcGFjZScsXG4gICAgICAgICAgICAna2V5JzogJzY1OCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15DXmdefINeb16jXkteiINeU16HXoteV16og16TXqteV15fXldeqJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWJ1cycsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSkpIDogbnVsbCwgXy5zaXplKG9wZW5FdmVudHMpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2V2ZW50cy1saXN0IG9wZW4tZXZlbnRzJyxcbiAgICAgICAgICAgICAgICAna2V5JzogJzkwOCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2NsYXNzTmFtZSc6ICdoaWRlLWZvci1zbWFsbC1vbmx5JyB9LCAn15TXodei15XXqjonKSxcbiAgICAgICAgICAgIF8ubWFwKG9wZW5FdmVudHMsIHJlcGVhdEV2ZW50My5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlcikpXG4gICAgICAgIF0pIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2NsYXNzTmFtZSc6ICdldmVudHMtbGlzdCBjbG9zZWQtZXZlbnRzIGhpZGUtZm9yLXNtYWxsLW9ubHknIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHt9LCAn15TXlNeh16LXldeqINeU15HXkNeV16o6JyksXG4gICAgICAgICAgICBfLm1hcChjbG9zZWRFdmVudHMsIHJlcGVhdEV2ZW50Ni5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlcikpXG4gICAgICAgIF0pKSA6IG51bGwsIHRoaXMuc3RhdGUuZXZlbnRJZCA/IHNjb3BlRWRpdGluZ0V2ZW50OS5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICBvcGVuRXZlbnRzLFxuICAgICAgICAgICAgY2xvc2VkRXZlbnRzLFxuICAgICAgICAgICAgaGFzVXNlclxuICAgICAgICBdKSA6IG51bGwpIDogbnVsbCwgIWhhc1VzZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3VzZXItZWRpdC1jb250YWluZXInLFxuICAgICAgICAgICAgJ2tleSc6ICd1c2VyLWVkaXQtY29udGFpbmVyJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFVzZXJGb3JtLCB7ICd1aWQnOiB0aGlzLnByb3BzLmF1dGhEYXRhLnVpZCB9KSkgOiBudWxsKSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY29wZU9wZW5FdmVudHNDbG9zZWRFdmVudHNIYXNVc2VyMTAuYXBwbHkodGhpcywgW10pO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgZ2FtZXNDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9nYW1lQ29uc3RhbnRzJyk7XG5jb25zdCBib29raW5nc0NvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2Jvb2tpbmdzQ29uc3RhbnRzJyk7XG5jb25zdCB0ZWFtc0RhdGEgPSByZXF1aXJlKCcuLi91dGlscy90ZWFtc0RhdGEnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2V2ZW50SXRlbS5zY3NzJyk7XG5cbmZ1bmN0aW9uIGlzQm9va2luZ0VuYWJsZWQoZXZlbnQsIHVzZXIpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnN0YXR1cykge1xuICAgICAgICBjYXNlIGdhbWVzQ29uc3RhbnRzLlNUQVRVUy5PUEVOX0ZPUl9BTEw6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBnYW1lc0NvbnN0YW50cy5TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUzoge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXIuc2Vhc29uVGlja2V0cyA+IDBcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcbiAgICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuICAgIGNvbnN0IGV2ZW50ID0gc3RhdGUuZXZlbnRzW293blByb3BzLmV2ZW50SWRdO1xuICAgIGNvbnN0IGJvb2tpbmdzID0gc3RhdGUuYm9va2luZ3M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBob21lVGVhbTogdGVhbXNEYXRhLkhBUE9FTF9KRVJVU0FMRU0sXG4gICAgICAgIGF3YXlUZWFtOiB0ZWFtc0RhdGFbZXZlbnQudHlwZUlkXSxcbiAgICAgICAgc3RhdHVzOiBldmVudC5zdGF0dXMsXG4gICAgICAgIGRhdGU6IGV2ZW50LmRheSArICcvJyArIGV2ZW50Lm1vbnRoICsgJy8nICsgZXZlbnQueWVhcixcbiAgICAgICAgdGltZTogZXZlbnQuaG91ciArICc6JyArIGV2ZW50Lm1pbnV0ZSxcbiAgICAgICAgaXNCb29raW5nQWxsb3dlZDogaXNCb29raW5nRW5hYmxlZChldmVudCwgdXNlcnNbYXV0aERhdGEudWlkXSksXG4gICAgICAgIGlzQm9va2VkOiBfLmhhc0luKGJvb2tpbmdzLCBbYXV0aERhdGEudWlkLCBvd25Qcm9wcy5ldmVudElkXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlYW1Mb2dvcyhob21lLCBhd2F5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzLWltYWdlcyBtZWRpdW0tNCBzbWFsbC0xMiB0ZXh0LWNlbnRlciBtZWRpdW0tdGV4dC1yaWdodCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIHNtYWxsIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBzcmM9e2hvbWUubG9nb30vPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgaGlkZS1mb3Itc21hbGwtb25seVwiPntob21lLmxhYmVsfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGUtZm9yLXNtYWxsLW9ubHkgc2VwYXJhdG9yXCI+IC0gPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBzbWFsbCBoaWRlLWZvci1zbWFsbC1vbmx5XCIgc3JjPXthd2F5LmxvZ299Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IGhpZGUtZm9yLXNtYWxsLW9ubHlcIj57YXdheS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHMtbmFtZXMgc2hvdy1mb3Itc21hbGwtb25seSB0ZXh0LWNlbnRlciByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgc21hbGwtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIGJpZ1wiIHNyYz17aG9tZS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgc21hbGxcIj57aG9tZS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHNtYWxsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBiaWdcIiBzcmM9e2F3YXkubG9nb30vPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IHNtYWxsXCI+e2F3YXkubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50VGltZUFuZERhdGUoZGF0ZSwgdGltZSwgaXNPcGVuRm9yQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIGhpZGUtZm9yLXNtYWxsLW9ubHlcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVsbHlCb29rZWRMYWJlbCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBoaWRlLWZvci1zbWFsbC1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3RhdHVzXCI+e2dhbWVzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5mdWxseUJvb2tlZH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdGF0dXNcIj57Z2FtZXNDb25zdGFudHMuVFJBTlNMQVRJT05TLmZ1bGx5Qm9va2VkfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQnV0dG9uKGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcpIHtcbiAgICBjb25zdCBib29rQnV0dG9uID0gKFxuICAgICAgICA8c3BhbiBrZXk9XCJib29rLWJ0blwiPlxuICAgICAgICAgICAgPHNwYW4+e2Jvb2tpbmdzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5ib29rfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJ1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICBjb25zdCBlZGl0Qm9va2luZ0J1dHRvbiA9IChcbiAgICAgICAgPHNwYW4ga2V5PVwiZWRpdC1idG5cIj5cbiAgICAgICAgICAgIDxzcGFuPntib29raW5nc0NvbnN0YW50cy5UUkFOU0xBVElPTlMuZWRpdEJvb2tpbmd9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYnVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzIHNtYWxsXCIga2V5PVwicmVnaXN0ZXItYnRuXCIgb25DbGljaz17b25Cb29raW5nfSBkaXNhYmxlZD17IWlzQm9va2luZ0FsbG93ZWR9PlxuICAgICAgICAgICAgeyBpc0Jvb2tlZCA/IGVkaXRCb29raW5nQnV0dG9uIDogYm9va0J1dHRvbiB9XG4gICAgICAgIDwvYT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uKG9uQ2FuY2VsQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzbWFsbCBhbGVydFwiIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvbkNhbmNlbEJvb2tpbmd9PlxuICAgICAgICAgICAgPHNwYW4+e2Jvb2tpbmdzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5jYW5jZWxCb29raW5nfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L2E+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uc0J1dHRvbnMoaXNPcGVuRm9yQm9va2luZywgaXNCb29raW5nQWxsb3dlZCwgaXNCb29rZWQsIG9uQm9va2luZywgb25DYW5jZWxCb29raW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9ucyBtZWRpdW0tNCBzbWFsbC0xMiB0ZXh0LWNlbnRlciBtZWRpdW0tdGV4dC1sZWZ0IGNvbHVtblwiPlxuICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nID8gY3JlYXRlQm9va2luZ0J1dHRvbihpc0Jvb2tpbmdBbGxvd2VkLCBpc0Jvb2tlZCwgb25Cb29raW5nKSA6IG51bGwgfVxuICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nICYmIGlzQm9va2VkID8gY3JlYXRlQm9va2luZ0NhbmNlbGxhdGlvbkJ1dHRvbihvbkNhbmNlbEJvb2tpbmcpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEV2ZW50SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpc09wZW5Gb3JCb29raW5nID0gdGhpcy5wcm9wcy5zdGF0dXMgIT09IGdhbWVzQ29uc3RhbnRzLlNUQVRVUy5DTE9TRUQ7XG4gICAgICAgIGNvbnN0IGlzRnVsbHlCb29rZWQgPSB0aGlzLnByb3BzLnN0YXR1cyA9PT0gZ2FtZXNDb25zdGFudHMuU1RBVFVTLkZVTExZX0JPT0tFRDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaXRlbSByb3cgY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZVRlYW1Mb2dvcyh0aGlzLnByb3BzLmhvbWVUZWFtLCB0aGlzLnByb3BzLmF3YXlUZWFtKSB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVFdmVudFRpbWVBbmREYXRlKHRoaXMucHJvcHMuZGF0ZSwgdGhpcy5wcm9wcy50aW1lLCBpc09wZW5Gb3JCb29raW5nICl9XG4gICAgICAgICAgICAgICAgeyBpc0Z1bGx5Qm9va2VkID8gY3JlYXRlRnVsbHlCb29rZWRMYWJlbCgpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVBY3Rpb25zQnV0dG9ucyhpc09wZW5Gb3JCb29raW5nLCB0aGlzLnByb3BzLmlzQm9va2luZ0FsbG93ZWQsIHRoaXMucHJvcHMuaXNCb29rZWQsIHRoaXMucHJvcHMub25Cb29raW5nLCB0aGlzLnByb3BzLm9uQ2FuY2VsQm9va2luZykgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5FdmVudEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGhvbWVUZWFtOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbG9nbzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgYXdheVRlYW06IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsb2dvOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhdHVzOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzQm9va2luZ0FsbG93ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGlzQm9va2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2FuY2VsQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRXZlbnRJdGVtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNUQVRVUzoge1xuICAgIENMT1NFRDogJ2Nsb3NlZCcsXG4gICAgT1BFTl9GT1JfTUVNQkVSUzogJ29wZW5Gb3JNZW1iZXJzJyxcbiAgICBPUEVOX0ZPUl9BTEw6ICdvcGVuRm9yQWxsJyxcbiAgICBGVUxMWV9CT09LRUQ6ICdmdWxseUJvb2tlZCdcbiAgfSxcbiAgVFJBTlNMQVRJT05TOiB7XG4gICAgY2xvc2VkOiAn15TXlNeo16nXnteUINeh15LXldeo15QnLFxuICAgIG9wZW5Gb3JNZW1iZXJzOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXnteg15XXmdeZINeU16HXoteV16onLFxuICAgIG9wZW5Gb3JBbGw6ICfXlNeU16jXqdee15Qg16TXqteV15fXlCDXnNeb15XXnNedJyxcbiAgICBmdWxseUJvb2tlZDogJ9eU15TXodei15Qg157XnNeQ15QnXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2dhbWVDb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgVFJBTlNMQVRJT05TOiB7XG4gICAgYm9vazogJ9eU16jXqdedJyxcbiAgICBlZGl0Qm9va2luZzogJ9ei16jXldeaJyxcbiAgICBjYW5jZWxCb29raW5nOiAn15HXmNecINeU16jXqdee15QnXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2Jvb2tpbmdzQ29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEhBUE9FTF9KRVJVU0FMRU06IHtcbiAgICBsYWJlbDogJ9eU16TXldei15wg15nXqNeV16nXnNeZ150nLFxuICAgIGxvZ286ICdodHRwOi8vaGFwb2VsLmNvLmlsL3NpdGVzL2RlZmF1bHQvZmlsZXMvbG9nbzEyMHgxMjAucG5nJ1xuICB9LFxuICAnaGFwb2VsLXRsdic6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29faGFwb2VsdGEucG5nJyxcbiAgICBsYWJlbDogJ9eU16TXldei15wg16rXnCDXkNeR15nXkSdcbiAgfSxcbiAgJ21hY2NhYmktdGx2Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19tYWNjYWJpLnBuZycsXG4gICAgbGFiZWw6ICfXnteb15HXmSDXqtecINeQ15HXmdeRJ1xuICB9LFxuICAnaGVyemVsaXlhJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19zaGFyb24ucG5nJyxcbiAgICBsYWJlbDogJ9eR16DXmSDXlNeo16bXnNeZ15QnXG4gIH0sXG4gICdraXJ5YXQtZ2F0Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9JbWFnZXMvdGVhbXMvYmlnR2F0LnBuZycsXG4gICAgbGFiZWw6ICfXnteb15HXmSDXp9eo15nXqiDXkteqJ1xuICB9LFxuICAnZ2lsYm9hJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19HYWxpbC5wbmcnLFxuICAgIGxhYmVsOiAn15LXnNeZ15wv15LXnNeR15XXoidcbiAgfSxcbiAgJ25haGFyaXlhJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19uYWhhcmlhLnBuZycsXG4gICAgbGFiZWw6ICfXoteZ16jXldeg15kg16DXlNeo15nXlCdcbiAgfSxcbiAgJ2hvbG9uJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvYXJ0aWNsZXMvbG9nb19oaC5wbmcnLFxuICAgIGxhYmVsOiAn15TXpNeV16LXnCDXl9eV15zXldefJ1xuICB9LFxuICAnYXNoZG9kJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19hc2hkb2QucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeQ16nXk9eV15MnXG4gIH0sXG4gICdoYWlmYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29faGFpZmEucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeX15nXpNeUJ1xuICB9LFxuICAncmlzaG9uJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19yaXNob24ucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeo15DXqdeV158g15zXpteZ15XXnydcbiAgfSxcbiAgJ2VpbGF0Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19laWxhdC5wbmcnLFxuICAgIGxhYmVsOiAn15TXpNeV16LXnCDXkNeZ15zXqidcbiAgfSxcbiAgJ2xqdWJsamFuYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi84LzhlL1VuaW9uX29saW1waWphLnBuZy8xNDBweC1Vbmlvbl9vbGltcGlqYS5wbmcnLFxuICAgIGxhYmVsOiAn15zXldeR15zXmdeQ16DXlCdcbiAgfSxcbiAgJ3ZhbGVuY2lhJzoge1xuICAgIGxvZ286ICdodHRwOi8vc2FtdmFucm9zc29tLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8xMC92YWxlbmNpYS1iYXNrZXQxLWxvZ28uanBnJyxcbiAgICBsYWJlbDogJ9eV15zXoNeh15nXlCdcbiAgfSxcbiAgJ2t1YmFuJzoge1xuICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzAvMDQvTG9rb21vdGl2X0t1YmFuX2xvZ28ucG5nLzIwMHB4LUxva29tb3Rpdl9LdWJhbl9sb2dvLnBuZycsXG4gICAgbGFiZWw6ICfXnNeV16fXldee15XXmNeZ15Eg16fXldeR15DXnydcbiAgfSxcbiAgJ2Z1ZW5sYWJyYWRhJzoge1xuICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzEvMTMvQmFsb25jZXN0b2Z1ZW5sYWJyYWRhLmpwZy8xMTBweC1CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnJyxcbiAgICBsYWJlbDogJ9ek15XXkNeg15zXkdeo15PXlCdcbiAgfSxcbiAgJ3VsbSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL25hY2h3dWNocy5iYnUwMS5jb20vbW9kdWxlcy9tb2RfYmJ1bmV3c2ZsYXNoL2Fzc2V0cy9pbWFnZXMvbm9pbWFnZV90aHVtYi5qcGcnLFxuICAgIGxhYmVsOiAn15DXldec150nXG4gIH0sXG4gICd2aWxuYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi83Lzc1L0JDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLzkwN3B4LUJDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLnBuZycsXG4gICAgbGFiZWw6ICfXqNeZ15jXkNehINeV15nXnNeg15QnXG4gIH0sXG4gICdub3Znb3JvZCc6IHtcbiAgICBsb2dvOiAnaHR0cDovL29seW1waWFrb3MtbGl2ZS5nci9pbWcvdGVhbXMvTml6aG55JTIwTm92Z29yb2QucG5nJyxcbiAgICBsYWJlbDogJ9eg15nXltez16DXmSdcbiAgfSxcbiAgJ3plbml0Jzoge1xuICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yNS9GQ19aZW5pdF8xX3N0YXJfMjAxNV9sb2dvLnBuZy8yMjBweC1GQ19aZW5pdF8xX3N0YXJfMjAxNV9sb2dvLnBuZycsXG4gICAgbGFiZWw6ICfXlteg15nXmCdcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy90ZWFtc0RhdGEuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRJdGVtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnQtaXRlbSB7XFxuICBmb250LXNpemU6IDAuOWVtOyB9XFxuICAuZXZlbnQtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLWltYWdlcyAuc2VwYXJhdG9yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbWFnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2UuYmlnIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogOTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2Uuc21hbGwge1xcbiAgICAgIG1hcmdpbjogMCA1cHg7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLW5hbWVzIHtcXG4gICAgcGFkZGluZzogMCA0ZW07IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvLmNvbG9yZWQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyAuZXZlbnQtc3RhdHVzIHtcXG4gICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyBzcGFuIHtcXG4gICAgICBtYXJnaW46IDAgMTVweDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIC5idXR0b24uc21hbGwge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgICBtYXJnaW46IDAgNXB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Jvb2tpbmdGb3JtLnJ0JztcblxuY29uc3QgZW1wdHlCb29raW5nID0ge1xuICBwYWlkU2VhdHM6IDAsXG4gIGV4dHJhU2VhdHM6IDAsXG4gIHBpY2tVcDogJ3RsdicsXG4gIGRyb3BPZmY6ICd0bHYnXG59O1xuXG5jb25zdCBib29raW5nRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCb29raW5nRm9ybScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TdWJtaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25Cb29raW5nQ2FuY2VsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBib29raW5nOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IGJvb2tpbmcgPSBfLmRlZmF1bHRzKHRoaXMucHJvcHMuYm9va2luZywgeyBwYWlkU2VhdHM6IHRoaXMucHJvcHMuc2Vhc29uVGlja2V0cyB9LCBlbXB0eUJvb2tpbmcpO1xuICAgIHJldHVybiBfLm1lcmdlKHt9LCBib29raW5nLCB7XG4gICAgICBwaWNrVXBFbmFibGVkOiAhIWJvb2tpbmcucGlja1VwLFxuICAgICAgZHJvcE9mZkVuYWJsZWQ6ICEhYm9va2luZy5kcm9wT2ZmXG4gICAgfSk7XG4gIH0sXG5cbiAgb25DaGFuZ2UoZSwgdmFsaWRhdGlvblR5cGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnbnVtZXJpYycpIHtcbiAgICAgIGlmICghL15bMC05XSokLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnaGVicmV3Jykge1xuICAgICAgaWYgKCEvXlvXkC3Xqlxcc10qJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIHRvZ2dsZVBpY2tVcChlKSB7XG4gICAgY29uc3QgcGlja1VwRW5hYmxlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBpY2tVcEVuYWJsZWQgfSk7XG4gICAgaWYgKCFwaWNrVXBFbmFibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGlja1VwOiAnJyB9KTtcbiAgICB9XG4gIH0sXG5cbiAgdG9nZ2xlRHJvcE9mZihlKSB7XG4gICAgY29uc3QgZHJvcE9mZkVuYWJsZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wT2ZmRW5hYmxlZCB9KTtcbiAgICBpZiAoIWRyb3BPZmZFbmFibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcE9mZjogJycgfSk7XG4gICAgfVxuICB9LFxuXG4gIG9uTnVtZXJpY0NoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBfLnRvTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9LFxuXG4gIGlzRm9ybVZhbGlkKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnBhaWRTZWF0cyA9PT0gMCAmJiB0aGlzLnN0YXRlLmV4dHJhU2VhdHMgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUucGlja1VwRW5hYmxlZCAmJiAhdGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnBpY2tVcEVuYWJsZWQgJiYgdGhpcy5zdGF0ZS5waWNrVXAgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWQgJiYgdGhpcy5zdGF0ZS5kcm9wT2ZmID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGJvb2tpbmdUb1N1Ym1pdCA9IF8ucGljayh0aGlzLnN0YXRlLCBfLmtleXMoZW1wdHlCb29raW5nKSk7XG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdChib29raW5nVG9TdWJtaXQpO1xuICB9LFxuXG4gIHJlbmRlcjogdGVtcGxhdGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJvb2tpbmdGb3JtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9mb3JtRnJhbWUnLFxuICAgICcuLi8uLi91dGlscy9jb25zdGFudHMnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIEZvcm1GcmFtZSwgY29uc3RhbnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIHJlcGVhdFNlYXQxKHNlYXQsIHNlYXRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdzZWF0LScgKyBzZWF0SW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBzZWF0SW5kZXhcbiAgICAgICAgfSwgc2VhdEluZGV4LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV4dHJhU2VhdDIoZXh0cmFTZWF0LCBleHRyYVNlYXRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdleHRyYVNlYXQtJyArIGV4dHJhU2VhdEluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogZXh0cmFTZWF0SW5kZXhcbiAgICAgICAgfSwgZXh0cmFTZWF0SW5kZXgsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UzKGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVQaWNrVXAoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFN0YXRpb240KHN0YXRpb24sIHN0YXRpb25JbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdzdGF0aW9uLScgKyBzdGF0aW9uSW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBzdGF0aW9uSW5kZXhcbiAgICAgICAgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcsIHN0YXRpb24sICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTUoZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZURyb3BPZmYoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFN0YXRpb242KHN0YXRpb24sIHN0YXRpb25JbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdzdGF0aW9uLScgKyBzdGF0aW9uSW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBzdGF0aW9uSW5kZXhcbiAgICAgICAgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcsIHN0YXRpb24sICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtRnJhbWUsIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMucHJvcHMudGl0bGUsXG4gICAgICAgICAgICAnb25TdWJtaXQnOiB0aGlzLm9uU3VibWl0LFxuICAgICAgICAgICAgJ29uQ2xvc2UnOiB0aGlzLnByb3BzLm9uQ2xvc2UsXG4gICAgICAgICAgICAnb25SZW1vdmUnOiB0aGlzLnByb3BzLm9uQm9va2luZ0NhbmNlbCxcbiAgICAgICAgICAgICdkaXNhYmxlZCc6ICF0aGlzLmlzRm9ybVZhbGlkKClcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2Jvb2tpbmctZm9ybSBzbWFsbC0xMSBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3JvdycgfSwgdGhpcy5wcm9wcy5zZWFzb25UaWNrZXRzID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzbWFsbC02IGNvbHVtbnMnLFxuICAgICAgICAgICAgJ2tleSc6ICc0NTInXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXm9ee15XXqiDXnteg15XXmdeZ151cXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5wYWlkU2VhdHMsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbk51bWVyaWNDaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAncGFpZFNlYXRzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKF8udGltZXModGhpcy5wcm9wcy5zZWFzb25UaWNrZXRzICsgMSksIHJlcGVhdFNlYXQxLmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNiBjb2x1bW5zIGVuZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eg15XXodei15nXnSDXkdeq16nXnNeV151cXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5leHRyYVNlYXRzLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25OdW1lcmljQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ2V4dHJhU2VhdHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoXy50aW1lcyhjb25zdGFudHMuTUFYX0VYVFJBX1BBU1NFTkdFUlMpLCByZXBlYXRFeHRyYVNlYXQyLmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAncm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtMyBsYXJnZS0yIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnaHRtbEZvcic6ICdwaWNrVXBUb2dnbGUnIH0sICfXlNec15XXmicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc3dpdGNoJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc3dpdGNoLWlucHV0JyxcbiAgICAgICAgICAgICdpZCc6ICdwaWNrVXBUb2dnbGUnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2UzLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnY2hlY2tlZCc6IHRoaXMuc3RhdGUucGlja1VwRW5hYmxlZFxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1wYWRkbGUnLFxuICAgICAgICAgICAgJ2h0bWxGb3InOiAncGlja1VwVG9nZ2xlJ1xuICAgICAgICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtOSBsYXJnZS0xMCBjb2x1bW5zIGVuZCBtb3JlLXNwYWNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucGlja1VwLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAncGlja1VwJyxcbiAgICAgICAgICAgICAgICAnZGlzYWJsZWQnOiAhdGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3N0eWxlJzogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgfSwgJ9eR15fXqCcpLFxuICAgICAgICAgICAgXy5tYXAoY29uc3RhbnRzLlNUQVRJT05TLCByZXBlYXRTdGF0aW9uNC5iaW5kKHRoaXMpKVxuICAgICAgICBdKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAncm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtMyBsYXJnZS0yIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnaHRtbEZvcic6ICdkcm9wT2ZmVG9nZ2xlJyB9LCAn15fXlteV16gnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3N3aXRjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1pbnB1dCcsXG4gICAgICAgICAgICAnaWQnOiAnZHJvcE9mZlRvZ2dsZScsXG4gICAgICAgICAgICAndHlwZSc6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdjaGVja2VkJzogdGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZFxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1wYWRkbGUnLFxuICAgICAgICAgICAgJ2h0bWxGb3InOiAnZHJvcE9mZlRvZ2dsZSdcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTkgbGFyZ2UtMTAgY29sdW1ucyBlbmQgbW9yZS1zcGFjZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmRyb3BPZmYsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdkcm9wT2ZmJyxcbiAgICAgICAgICAgICAgICAnZGlzYWJsZWQnOiAhdGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdzdHlsZSc6IHsgZGlzcGxheTogJ25vbmUnIH1cbiAgICAgICAgICAgIH0sICfXkdeX16gnKSxcbiAgICAgICAgICAgIF8ubWFwKGNvbnN0YW50cy5TVEFUSU9OUywgcmVwZWF0U3RhdGlvbjYuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSkpO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLnJ0XG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4PSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBGb3JtRnJhbWUgPSByZXF1aXJlKCcuL2Zvcm1GcmFtZScpO1xuXG5jb25zdCB1c2VySW5mb0NvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL3VzZXJJbmZvQ29uc3RhbnRzJyk7XG5jb25zdCB1c2VyRm9ybVRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucy91c2VyRm9ybVRyYW5zbGF0aW9ucycpO1xuY29uc3QgdXNlckFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJyk7XG5cbmNvbnN0IGVtcHR5VXNlciA9IHtcbiAgICBmaXJzdE5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICBwaG9uZVByZWZpeDogJzA1MCcsXG4gICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgIHN0YXRpb246ICd0bHYnLFxuICAgIHN1YnNjcmliZVNNUzogdHJ1ZSxcbiAgICBzdWJzY3JpYmVNYWlsOiB0cnVlLFxuICAgIHNlYXNvblRpY2tldHM6IDBcbn07XG5cbmZ1bmN0aW9uIGdldEVtcHR5VXNlckluZm8oZW1haWwpIHtcbiAgcmV0dXJuIF8uYXNzaWduKGVtcHR5VXNlciwgeyBlbWFpbCB9KTtcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnN0IHVzZXIgPSBzdGF0ZS51c2Vyc1tvd25Qcm9wcy51aWRdO1xuICAgIGNvbnN0IGF1dGhEYXRhID0gc3RhdGUuYXV0aERhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VySW5mbzogdXNlciB8fCBnZXRFbXB0eVVzZXJJbmZvKGF1dGhEYXRhLmVtYWlsKSxcbiAgICAgICAgaXNBZG1pbk1vZGU6IGF1dGhEYXRhLmlzQWRtaW4sXG4gICAgICAgIGFsbG93VXNlclJlbW92ZTogYXV0aERhdGEuaXNBZG1pbiAmJiBhdXRoRGF0YS51aWQgIT09IG93blByb3BzLnVpZFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVVc2VyOiB1c2VyID0+IGRpc3BhdGNoKHVzZXJBY3Rpb25zLnVwZGF0ZVVzZXIob3duUHJvcHMudWlkLCB1c2VyKSksXG4gICAgICAgIHJlbW92ZVVzZXI6ICgpID0+IGRpc3BhdGNoKHVzZXJBY3Rpb25zLnJlbW92ZVVzZXIob3duUHJvcHMudWlkKSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZG1pblNlY3Rpb24oc2Vhc29uVGlja2V0cywgb25OdW1iZXJDaGFuZ2UpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PVwic2Vhc29uVGlja2V0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICA8bGFiZWw+15vXnteV16og157XoNeV15nXmdedXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzZWFzb25UaWNrZXRzXCIgdmFsdWU9e3NlYXNvblRpY2tldHN9IG9uQ2hhbmdlPXtvbk51bWJlckNoYW5nZX0+XG4gICAgICAgICAgICAgICAgeyBfLnRpbWVzKHVzZXJJbmZvQ29uc3RhbnRzLk1BWF9TRUFTT05fVElDS0VUUywgaSA9PiA8b3B0aW9uIGtleT17J2Ftb3VudC0nICsgaX0gdmFsdWU9e2l9PntpfTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlck5hbWVJbnB1dHMoZmlyc3ROYW1lLCBsYXN0TmFtZSwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuRklSU1RfTkFNRSB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17Zmlyc3ROYW1lfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSBtYXhMZW5ndGg9XCIyMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS02IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5MQVNUX05BTUUgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdE5hbWVcIiB2YWx1ZT17bGFzdE5hbWV9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsSW5wdXQoZW1haWwsIG9uVGV4dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PVwidXNlci1pbmZvLWVtYWlsLWlucHV0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5FTUFJTCB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaG9uZU51bWJlcklucHV0cyhwaG9uZVByZWZpeCwgcGhvbmVOdW1iZXIsIG9uVGV4dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTggY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlBIT05FX05VTUJFUiB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cInBob25lTnVtYmVyXCIgdmFsdWU9e3Bob25lTnVtYmVyfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSBtYXhMZW5ndGg9XCI3XCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTQgY29sdW1ucyBlbmRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5QSE9ORV9QUkVGSVggfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwaG9uZVByZWZpeFwiIHZhbHVlPXtwaG9uZVByZWZpeH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHVzZXJJbmZvQ29uc3RhbnRzLlBIT05FX1BSRUZJWEVTLCBwcmVmaXggPT4gPG9wdGlvbiBrZXk9eydwaG9uZS1wcmVmaXgtJyArIHByZWZpeH0gdmFsdWU9e3ByZWZpeH0+e3ByZWZpeH08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY2t1cFN0YXRpb25Sb3coc3RhdGlvbiwgcmVxdWVzdEZvck1lbWJlcnNoaXAsIG9uVGV4dENoYW5nZSwgb25Cb29sZWFuQ2hhbmdlKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5GQVZPUklURV9QSUNLVVBfU1RBVElPTiB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInN0YXRpb25cIiB2YWx1ZT17c3RhdGlvbn0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHVzZXJJbmZvQ29uc3RhbnRzLlNUQVRJT05TLCBzdGF0aW9uID0+IDxvcHRpb24ga2V5PXsnc3RhdGlvbi0nICsgc3RhdGlvbn0gdmFsdWU9e3N0YXRpb259PnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuU1RBVElPTlNbc3RhdGlvbl0gfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0Rm9yTWVtYmVyc2hpcElucHV0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNCBzbWFsbC0xMiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuUkVRVUVTVF9GT1JfTUVNQkVSU0hJUCB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJlcXVlc3RGb3JNZW1iZXJzaGlwXCIgdmFsdWU9e3JlcXVlc3RGb3JNZW1iZXJzaGlwfSBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3VuZGVmaW5lZH0gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT7XkdeX16g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RydWV9Pteb1588L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2ZhbHNlfT7XnNeQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgeyBjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQoKSB9XG4gICAgICAgICAgICB7IGNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQoKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3RyaWJ1dGlvbklucHV0cyhzdWJzY3JpYmVNYWlsLCBzdWJzY3JpYmVTTVMsIG9uQm9vbGVhbkNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTMgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OLkVNQUlMIH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5wdXRcIiBuYW1lPVwic3Vic2NyaWJlTWFpbFwiIGlkPVwic3Vic2NyaWJlTWFpbFwiIG9uQ2hhbmdlPXtvbkJvb2xlYW5DaGFuZ2V9IGNoZWNrZWQ9e3N1YnNjcmliZU1haWx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtcGFkZGxlXCIgaHRtbEZvcj1cInN1YnNjcmliZU1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlRPR0dMRS5ZRVMgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1pbmFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuVE9HR0xFLk5PIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMyBjb2x1bW4gZW5kXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OLlNNUyB9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwic3dpdGNoLWlucHV0XCIgbmFtZT1cInN1YnNjcmliZVNNU1wiIGlkPVwic3Vic2NyaWJlU01TXCIgb25DaGFuZ2U9e29uQm9vbGVhbkNoYW5nZX0gY2hlY2tlZD17c3Vic2NyaWJlU01TfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoLXBhZGRsZVwiIGh0bWxGb3I9XCJzdWJzY3JpYmVTTVNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlRPR0dMRS5ZRVMgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1pbmFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuVE9HR0xFLk5PIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBfLmNsb25lKHRoaXMucHJvcHMudXNlckluZm8pO1xuICB9XG5cbiAgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYXNBbGxSZXF1aXJlZEluZm8gPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRJbmZvID0gXy5waWNrKHRoaXMuc3RhdGUsIFsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ3Bob25lUHJlZml4JywgJ3Bob25lTnVtYmVyJ10pO1xuICAgICAgICAgIHJldHVybiAhXy5zb21lKHJlcXVpcmVkSW5mbywgXy5pc0VtcHR5KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhc1ZhbGlkUGhvbmVOdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubGVuZ3RoID09PSA3O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFzUmVxdWVzdEZvck1lbWJlcnNoaXBQcm9wZXJ0eSA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gXy5oYXModGhpcy5zdGF0ZSwgJ3JlcXVlc3RGb3JNZW1iZXJzaGlwJyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gaGFzQWxsUmVxdWlyZWRJbmZvKCkgJiYgaGFzVmFsaWRQaG9uZU51bWJlcigpICYmIGhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkoKTtcbiAgfTtcblxuICBvbktleVByZXNzID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlzRm9ybVZhbGlkKHRoaXMuc3RhdGUpKSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlID0gKHR5cGUsIGUpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGlmIChlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdzZWxlY3Qtb25lJykge1xuICAgICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyKHRoaXMuc3RhdGUpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xvc2UpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gIH07XG5cbiAgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZVVzZXIoKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsb3NlKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IG9uVGV4dENoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzLCAndGV4dCcpO1xuICAgICAgY29uc3Qgb25OdW1iZXJDaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgJ251bWJlcicpO1xuICAgICAgY29uc3Qgb25Cb29sZWFuQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsICdib29sZWFuJyk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRnJhbWUgdGl0bGU9e3VzZXJGb3JtVHJhbnNsYXRpb25zLlRJVExFfVxuICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnByb3BzLmFsbG93VXNlclJlbW92ZSA/IHRoaXMub25SZW1vdmUgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMucHJvcHMub25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuaXNGb3JtVmFsaWQoKX0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWNlbnRlcmVkIHVzZXItY29udGFpbmVyXCIgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzfT5cblxuICAgICAgICAgICAgICB7IGNyZWF0ZVVzZXJOYW1lSW5wdXRzKHRoaXMuc3RhdGUuZmlyc3ROYW1lLCB0aGlzLnN0YXRlLmxhc3ROYW1lLCBvblRleHRDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnVzZXJJbmZvLmVtYWlsID8gbnVsbCA6IGNyZWF0ZUVtYWlsSW5wdXQodGhpcy5zdGF0ZS5lbWFpbCwgb25UZXh0Q2hhbmdlKSB9XG4gICAgICAgICAgICAgIHsgY3JlYXRlUGhvbmVOdW1iZXJJbnB1dHModGhpcy5zdGF0ZS5waG9uZVByZWZpeCwgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgb25UZXh0Q2hhbmdlLCBvbk51bWJlckNoYW5nZSkgfVxuICAgICAgICAgICAgICB7IGNyZWF0ZVBpY2t1cFN0YXRpb25Sb3codGhpcy5zdGF0ZS5zdGF0aW9uLCB0aGlzLnN0YXRlLnJlcXVlc3RGb3JNZW1iZXJzaGlwLCBvblRleHRDaGFuZ2UsIG9uQm9vbGVhbkNoYW5nZSkgfVxuXG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0FkbWluTW9kZSA/IGNyZWF0ZUFkbWluU2VjdGlvbih0aGlzLnN0YXRlLnNlYXNvblRpY2tldHMsIG9uTnVtYmVyQ2hhbmdlKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgIHsgY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzKHRoaXMuc3RhdGUuc3Vic2NyaWJlTWFpbCwgdGhpcy5zdGF0ZS5zdWJzY3JpYmVTTVMsIG9uQm9vbGVhbkNoYW5nZSkgfVxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9Gb3JtRnJhbWU+XG4gICAgKTtcbiAgfVxufVxuXG5Vc2VyRm9ybS5Qcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlVXNlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZW1vdmVVc2VyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzQWRtaW5Nb2RlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhbGxvd1VzZXJSZW1vdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHVzZXJJbmZvOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlckZvcm0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJGb3JtLmpzeCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBNQVhfU0VBU09OX1RJQ0tFVFM6IDcsXG4gIFBIT05FX1BSRUZJWEVTOiBbJzA1MCcsICcwNTInLCAnMDUzJywgJzA1NCcsICcwNTUnLCAnMDU3JywgJzA1OCddLFxuICBTVEFUSU9OUzogWydtb2RpaW4nLCAndGx2J11cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3VzZXJJbmZvQ29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRJVExFOiAn16TXqNeY15nXnSDXkNeZ16nXmdeZ150nLFxuICBGSVJTVF9OQU1FOiAn16nXnScsXG4gIExBU1RfTkFNRTogJ9ep150g157Xqdek15fXlCcsXG4gIEVNQUlMOiAn15PXldeQ16gg15DXnNen15jXqNeV16DXmScsXG4gIFBIT05FX1BSRUZJWDogJ9en15nXk9eV157XqicsXG4gIFBIT05FX05VTUJFUjogJ9eY15zXpNeV158g16DXmdeZ15MnLFxuICBGQVZPUklURV9QSUNLVVBfU1RBVElPTjogJ9eq15fXoNeqINei15zXmdeUINee15XXoteT16TXqicsXG4gIFJFUVVFU1RfRk9SX01FTUJFUlNISVA6ICfXntei15XXoNeZ15nXnyDXkdee16DXldeZPycsXG4gIFNUQVRJT05TOiB7XG4gICAgbW9kaWluOiAn157XldeT15nXoteZ158nLFxuICAgIHRsdjogJ9eq15wg15DXkdeZ15EnXG4gIH0sXG4gIERJU1RSSUJVVElPTjoge1xuICAgIEVNQUlMOiAn16rXpNeV16bXqiDXkNeZ157XmdeZ15wnLFxuICAgIFNNUzogJ9eq16TXldem16ogU01TJ1xuICB9LFxuICBUT0dHTEU6IHtcbiAgICBZRVM6ICfXm9efJyxcbiAgICBOTzogJ9ec15AnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL3VzZXJGb3JtVHJhbnNsYXRpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBVU0VSU19SRUNFSVZFRCwgVVNFUl9SRU1PVkVEIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnYmx1ZWJpcmQnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IFVTRVJfSU5GT19LRVlTID0gWydlbWFpbCcsICdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAncGhvbmVQcmVmaXgnLCAncGhvbmVOdW1iZXInLCAncmVxdWVzdEZvck1lbWJlcnNoaXAnLCAnc3RhdGlvbicsICdzdWJzY3JpYmVTTVMnLCAnc3Vic2NyaWJlTWFpbCcsICdwaG90b1VSTCddO1xuY29uc3QgUEFUSF9NQVAgPSB7XG4gIFVTRVJTX0lORk86ICd1c2Vyc0luZm8nLFxuICBTRUFTT05fVElDS0VUUzogJ3NlYXNvblRpY2tldHMnLFxuICBCT09LSU5HUzogJ2Jvb2tpbmdzJ1xufTtcblxuY29uc3QgYnVpbGRVc2VyID0gKHVzZXJJbmZvLCBzZWFzb25UaWNrZXRzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBfLm1lcmdlKHt9LCB1c2VySW5mbyk7XG4gIGlmIChzZWFzb25UaWNrZXRzKSB7XG4gICAgXy5tZXJnZSh1c2VyLCB7IHNlYXNvblRpY2tldHMgfSk7XG4gIH1cbiAgcmV0dXJuIHVzZXI7XG59O1xuXG5jb25zdCBmZXRjaEFsbFVzZXJzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUylcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJzSW5mbywgc2Vhc29uVGlja2V0c10pID0+XG4gICAgICBfLnRyYW5zZm9ybSh1c2Vyc0luZm8sIChhY2MsIGluZm8sIHVpZCkgPT4ge1xuICAgICAgICBhY2NbdWlkXSA9IGJ1aWxkVXNlcihpbmZvLCBzZWFzb25UaWNrZXRzICYmIHNlYXNvblRpY2tldHNbdWlkXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIH0sIHt9KVxuICAgICk7XG59O1xuXG5jb25zdCBmZXRjaFNpbmdsZVVzZXIgPSB1aWQgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyArICcvJyArIHVpZCksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUyArICcvJyArIHVpZClcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJJbmZvLCBzZWFzb25UaWNrZXRzXSkgPT4ge1xuICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgIHJldHVybiB7IFt1aWRdOiBidWlsZFVzZXIodXNlckluZm8sIHNlYXNvblRpY2tldHMpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1JlbW92ZWQgPSB1aWQgPT4gKHtcbiAgdHlwZTogVVNFUl9SRU1PVkVELFxuICB1aWRcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlcnNSZWNlaXZlZCA9IHVzZXJzID0+ICh7XG4gIHR5cGU6IFVTRVJTX1JFQ0VJVkVELFxuICB1c2Vyc1xufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBjb25zdCB1aWQgPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ3VpZCddKTtcbiAgY29uc3QgaXNBZG1pbiA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAnaXNBZG1pbiddKTtcbiAgY29uc3QgZmV0Y2hQcm9taXNlID0gaXNBZG1pbiA/IGZldGNoQWxsVXNlcnMoKSA6IGZldGNoU2luZ2xlVXNlcih1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBpZiAodXNlcnMpIHtcbiAgICAgICAgZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh1c2VycykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAodWlkLCB1c2VyKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCBpc0FkbWluID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICdpc0FkbWluJ10pO1xuXG4gIGNvbnN0IHVzZXJVcGRhdGVQcm9taXNlcyA9IFtcbiAgICBjbGllbnREQi51cGRhdGUoJ3VzZXJzSW5mby8nICsgdWlkLCBfLnBpY2sodXNlciwgVVNFUl9JTkZPX0tFWVMpKVxuICBdO1xuXG4gIGlmIChpc0FkbWluICYmIF8uaGFzKHVzZXIsICdzZWFzb25UaWNrZXRzJykpIHtcbiAgICB1c2VyVXBkYXRlUHJvbWlzZXMucHVzaChjbGllbnREQi5zZXRJbignc2Vhc29uVGlja2V0cy8nICsgdWlkLCB1c2VyLnNlYXNvblRpY2tldHMpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyVXBkYXRlUHJvbWlzZXMpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh7IFt1aWRdOiB1c2VyIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyID0gdWlkID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IHVzZXJSZW1vdmVQcm9taXNlcyA9IF8ubWFwKFBBVEhfTUFQLCB1c2VyUGF0aCA9PiBjbGllbnREQi5yZW1vdmUoYCR7dXNlclBhdGh9LyR7dWlkfWApKTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlbW92ZVByb21pc2VzKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJzUmVtb3ZlZCh1aWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZVBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZS1wYWdlIC5ldmVudHMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgIC5ob21lLXBhZ2UgLmV2ZW50cyB7XFxuICAgICAgbWFyZ2luLXRvcDogMHB4OyB9IH1cXG5cXG4uaG9tZS1wYWdlIC5vcGVuLWV2ZW50cyB7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XFxuXFxuLmhvbWUtcGFnZSAuZXZlbnRzLWxpc3QgaDYge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaG9tZS1wYWdlIC5uby1ib29raW5ncyB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM0MjQyNDI7IH1cXG4gIC5ob21lLXBhZ2UgLm5vLWJvb2tpbmdzIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG4uaG9tZS1wYWdlIC5ldmVudC1pdGVtIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSAuZXZlbnQtaXRlbSB7XFxuICAgICAgcGFkZGluZzogMTVweCAwIDMwcHggMDsgfSB9XFxuICAuaG9tZS1wYWdlIC5ldmVudC1pdGVtOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7IH1cXG4gIC5ob21lLXBhZ2UgLmV2ZW50LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCT09LSU5HU19SRUNFSVZFRCwgQk9PS0lOR19DQU5DRUxFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IEJPT0tJTkdfREFUQV9LRVlTID0gWydwYWlkU2VhdHMnLCAnZXh0cmFTZWF0cycsICdwaWNrVXAnLCAnZHJvcE9mZiddO1xuY29uc3QgQk9PS0lOR1NfUEFUSCA9ICdib29raW5ncyc7XG5cbmNvbnN0IGZldGNoVXNlckJvb2tpbmdzID0gdWlkID0+XG4gIGNsaWVudERCLnJlYWQoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9YClcbiAgICAudGhlbih1c2VyQm9va2luZ3MgPT4ge1xuICAgICAgaWYgKHVzZXJCb29raW5ncykge1xuICAgICAgICByZXR1cm4geyBbdWlkXTogdXNlckJvb2tpbmdzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuY29uc3QgZmV0Y2hBbGxCb29raW5ncyA9ICgpID0+XG4gIGNsaWVudERCLnJlYWQoQk9PS0lOR1NfUEFUSCk7XG5cbmV4cG9ydCBjb25zdCBib29raW5nc1JlY2VpdmVkID0gYm9va2luZ3MgPT4gKHtcbiAgdHlwZTogQk9PS0lOR1NfUkVDRUlWRUQsXG4gIGJvb2tpbmdzXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvb2tpbmdzQ2FuY2VsZWQgPSAodWlkLCBldmVudElkKSA9PiAoe1xuICB0eXBlOiBCT09LSU5HX0NBTkNFTEVELFxuICB1aWQsXG4gIGV2ZW50SWRcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCb29raW5ncyA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3QgdWlkID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICd1aWQnXSk7XG4gIGNvbnN0IGlzQWRtaW4gPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ2lzQWRtaW4nXSk7XG4gIGNvbnN0IGZldGNoUHJvbWlzZSA9IGlzQWRtaW4gPyBmZXRjaEFsbEJvb2tpbmdzKCkgOiBmZXRjaFVzZXJCb29raW5ncyh1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbihib29raW5ncyA9PiB7XG4gICAgICBpZiAoYm9va2luZ3MpIHtcbiAgICAgICAgZGlzcGF0Y2goYm9va2luZ3NSZWNlaXZlZChib29raW5ncykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJvb2tpbmcgPSAodWlkLCBldmVudElkLCBib29raW5nRGF0YSkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgYm9va2luZ0RhdGFUb1VwZGF0ZSA9IF8ucGljayhib29raW5nRGF0YSwgQk9PS0lOR19EQVRBX0tFWVMpO1xuXG4gIHJldHVybiBjbGllbnREQi51cGRhdGUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gLCBib29raW5nRGF0YVRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzUmVjZWl2ZWQoeyBbdWlkXTogeyBbZXZlbnRJZF06IGJvb2tpbmdEYXRhVG9VcGRhdGUgfSB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FuY2VsQm9va2luZyA9ICh1aWQsIGV2ZW50SWQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5yZW1vdmUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzQ2FuY2VsZWQodWlkLCBldmVudElkKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3VzZXJzUGFnZS5ydCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7dXBkYXRlVXNlciwgcmVtb3ZlVXNlcn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5cbmNvbnN0IHBpY2tVc2Vyc0Z1bmN0aW9ucyA9IHtcbiAgQUxMOiAoKSA9PiB0cnVlLFxuICBNRU1CRVJTOiB1c2VyID0+IHVzZXIuc2Vhc29uVGlja2V0cyA+IDAsXG4gIE5PTl9NRU1CRVJTOiB1c2VyID0+ICF1c2VyLnNlYXNvblRpY2tldHMsXG4gIFJFUVVFU1RTOiB1c2VyID0+IHVzZXIucmVxdWVzdEZvck1lbWJlcnNoaXAsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdXBkYXRlVXNlcjogKHVpZCwgdXNlcikgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1aWQsIHVzZXIpKSxcbiAgcmVtb3ZlVXNlcjogKHVpZCkgPT4gZGlzcGF0Y2gocmVtb3ZlVXNlcih1aWQpKVxufSk7XG5cbmNsYXNzIFVzZXJzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0aW5nVXNlcklkOiBudWxsLFxuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgZmlsdGVyOiAnQUxMJ1xuICAgIH07XG4gIH1cblxuICBnZXRWaXNpYmxlVXNlcnMoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy51c2VycylcbiAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zW3RoaXMuc3RhdGUuZmlsdGVyXSlcbiAgICAgIC5waWNrQnkodXNlciA9PiBfLnN0YXJ0c1dpdGgodXNlci5maXJzdE5hbWUsIHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpIHx8IF8uc3RhcnRzV2l0aCh1c2VyLmxhc3ROYW1lLCB0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KSwgdGhpcylcbiAgICAgIC5tYXAoKHVzZXIsIHVpZCkgPT4gKHt1c2VyLCB1aWR9KSlcbiAgICAgIC5zb3J0QnkoJ3VzZXIuZmlyc3ROYW1lJylcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgY291bnRTZWFzb25UaWNrZXRzKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMudXNlcnMpXG4gICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5NRU1CRVJTKVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ3NlYXNvblRpY2tldHMnKVxuICAgICAgLnZhbHVlKCk7XG4gIH1cblxuICBjb3VudE5vbk1lbWJlcnNVc2VycygpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLnVzZXJzKVxuICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnMuTk9OX01FTUJFUlMpXG4gICAgICAuc2l6ZSgpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGNvdW50UmVxdWVzdHNGb3JNZW1iZXJzaGlwKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMudXNlcnMpXG4gICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5SRVFVRVNUUylcbiAgICAgIC5zaXplKClcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFF1ZXJ5OiBlLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcn0pO1xuICB9XG5cbiAgb25Vc2VyQ2xpY2sodWlkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZ1VzZXJJZDogdWlkfSk7XG4gIH1cblxuICBzdG9wRWRpdGluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlZGl0aW5nVXNlcklkOiBudWxsLCBzZWFyY2hRdWVyeTogJyd9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cblxuICBnZXRVc2VyVGl0bGUodXNlcikge1xuICAgIHJldHVybiB1c2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXIubGFzdE5hbWU7XG4gIH1cblxuICBnZXRVc2VyU3VidGl0bGVzKHVzZXIpIHtcbiAgICByZXR1cm4gW3VzZXIucGhvbmVQcmVmaXggKyAnLScgKyB1c2VyLnBob25lTnVtYmVyLCB1c2VyLmVtYWlsLCAn15vXnteV16og157XoNeV15nXmdedOiAnICsgKHVzZXIuc2Vhc29uVGlja2V0cyB8fCAwKV07XG4gIH1cblxuICBnZXRVc2VySW1hZ2UodXNlcikge1xuICAgIHJldHVybiB1c2VyLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjMvMTYzODA0LnN2Zyc7XG4gIH1cbn1cblxuVXNlcnNQYWdlLnByb3BUeXBlcyA9IHtcbiAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2Vyc1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2xpc3RJdGVtJyxcbiAgICAnLi4vdXNlckZvcm0nLFxuICAgICcuL3VzZXJzUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBsaXN0SXRlbSwgVXNlckZvcm0sIHVzZXJzUGFnZUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBvbkNsaWNrMSh2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ0FMTCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMih2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ01FTUJFUlMnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazModmlzaWJsZVVzZXJzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdSRVFVRVNUUycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNCh2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ05PTl9NRU1CRVJTJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlNSh2aXNpYmxlVXNlcnMsIGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hRdWVyeUNoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazYodmlzaWJsZVVzZXJzLCB1c2VySXRlbSwgdXNlckl0ZW1JbmRleCkge1xuICAgICAgICB0aGlzLm9uVXNlckNsaWNrKHVzZXJJdGVtLnVpZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFVzZXJJdGVtNyh2aXNpYmxlVXNlcnMsIHVzZXJJdGVtLCB1c2VySXRlbUluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldFVzZXJUaXRsZSh1c2VySXRlbS51c2VyKSxcbiAgICAgICAgICAgICdrZXknOiAndXNlci0nICsgdXNlckl0ZW0udWlkLFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0VXNlclN1YnRpdGxlcyh1c2VySXRlbS51c2VyKSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0VXNlckltYWdlKHVzZXJJdGVtLnVzZXIpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrNi5iaW5kKHRoaXMsIHZpc2libGVVc2VycywgdXNlckl0ZW0sIHVzZXJJdGVtSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZVZpc2libGVVc2VyczgoKSB7XG4gICAgICAgIHZhciB2aXNpYmxlVXNlcnMgPSB0aGlzLmdldFZpc2libGVVc2VycygpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2tleSc6ICdsaXN0LXZpZXcnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXntep16rXntep15nXnScpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTEyIGxhcmdlLTgnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VsJywgeyAnY2xhc3NOYW1lJzogJ21lbnUgc21hbGwtdGV4dCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnQUxMJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2sxLmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXm9eV15zXnSAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIF8uc2l6ZSh0aGlzLnByb3BzLnVzZXJzKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdNRU1CRVJTJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2syLmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteg15XXmdeZ150gJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCB0aGlzLmNvdW50U2Vhc29uVGlja2V0cygpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1JFUVVFU1RTJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2szLmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXkden16nXlCDXnNee16DXldeZICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5jb3VudFJlcXVlc3RzRm9yTWVtYmVyc2hpcCgpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ05PTl9NRU1CRVJTJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2s0LmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnNeQINee16DXldeZ15nXnSAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuY291bnROb25NZW1iZXJzVXNlcnMoKSwgJyknKSkpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NlYXJjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgICAgICAgICAgICd0eXBlJzogJ3NlYXJjaCcsXG4gICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ9eX15nXpNeV16knLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlNS5iaW5kKHRoaXMsIHZpc2libGVVc2VycyksXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeVxuICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7ICdjbGFzc05hbWUnOiAnc2VhcmNoLWljb24nIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7ICdjbGFzc05hbWUnOiAnZmEgZmEtc2VhcmNoJyB9KSkpKSksXG4gICAgICAgICAgICBfLm1hcCh2aXNpYmxlVXNlcnMsIHJlcGVhdFVzZXJJdGVtNy5iaW5kKHRoaXMsIHZpc2libGVVc2VycykpLFxuICAgICAgICAgICAgdmlzaWJsZVVzZXJzLmxlbmd0aCA9PT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmlsdGVyLXN0YXR1cycsXG4gICAgICAgICAgICAgICAgJ2tleSc6ICcyNzkxJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWZyb3duLW8nLFxuICAgICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee16bXmNei16jXmdedLCDXnNeQINeg157XpteQ15Ug16jXqdeV157XldeqINee16rXkNeZ157XldeqLi4uJykpIDogbnVsbFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTkoKSB7XG4gICAgICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSB1c2Vycy1wYWdlJyB9LCAhdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkID8gc2NvcGVWaXNpYmxlVXNlcnM4LmFwcGx5KHRoaXMsIFtdKSA6IG51bGwsIHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdrZXknOiAnZWRpdC11c2VyJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlckZvcm0sIHtcbiAgICAgICAgICAgICd1aWQnOiB0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQsXG4gICAgICAgICAgICAnb25DbG9zZSc6IG9uQ2xvc2U5LmJpbmQodGhpcylcbiAgICAgICAgfSkpIDogbnVsbCk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91c2Vyc1BhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91c2Vyc1BhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VzZXJzUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9hdXRoUGFnZS5ydCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBsb2dpbldpdGhHb29nbGUsXG4gIGxvZ2luV2l0aEZhY2Vib29rLFxuICBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIHNlbmRQYXNzd29yZFJlc2V0RW1haWxcbn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5cbmltcG9ydCB7IHJlcG9ydEVycm9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGVycm9yTXNnOiBzdGF0ZS5lcnJvck1zZ1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgbG9naW5XaXRoR29vZ2xlOiAoKSA9PiBkaXNwYXRjaChsb2dpbldpdGhHb29nbGUoKSksXG4gIGxvZ2luV2l0aEZhY2Vib29rOiAoKSA9PiBkaXNwYXRjaChsb2dpbldpdGhGYWNlYm9vaygpKSxcbiAgbG9naW5XaXRoRW1haWw6IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoKGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKSksXG4gIHNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQ6IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoKGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpKSxcbiAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbDogZW1haWwgPT4gZGlzcGF0Y2goc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkpLFxuICByZXBvcnRFcnJvcjogKG1zZykgPT4gZGlzcGF0Y2gocmVwb3J0RXJyb3IobXNnKSlcbn0pO1xuXG5jb25zdCBBdXRoRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdBdXRoRm9ybScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbG9naW5XaXRoR29vZ2xlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvZ2luV2l0aEZhY2Vib29rOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvZ2luV2l0aEVtYWlsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlcG9ydEVycm9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHBhc3N3b3JkQWdhaW46ICcnLFxuICAgICAgYXV0aE1vZGU6ICdsb2dpbicsXG4gICAgICBpc0xvZ2luTW9kZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBnZXRCdXR0b25MYWJlbCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHtcbiAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgcmV0dXJuICfXlNeq15fXkdeoJztcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgcmV0dXJuICfXlNeZ16jXqdedJztcbiAgICAgIGNhc2UgJ2ZvcmdvdFBhc3N3b3JkJzpcbiAgICAgICAgcmV0dXJuICfXqdec15cg15zXmdeg16cg15zXkNeZ16TXldehINeh15nXodee15AnO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAhdGhpcy5pc1N1Ym1pdERpc2FibGVkKCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0Q2xpY2soKTtcbiAgICB9XG4gIH0sXG5cbiAgc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZCgpIHtcbiAgICB0aGlzLnByb3BzLnNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gIH0sXG5cbiAgaXNTdWJtaXREaXNhYmxlZCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHtcbiAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgcmV0dXJuIF8uaXNFbXB0eSh0aGlzLnN0YXRlLmVtYWlsKSB8fCBfLmlzRW1wdHkodGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgIHJldHVybiBfLmlzRW1wdHkodGhpcy5zdGF0ZS5lbWFpbCkgfHwgXy5pc0VtcHR5KHRoaXMuc3RhdGUucGFzc3dvcmQpIHx8IF8uaXNFbXB0eSh0aGlzLnN0YXRlLnBhc3N3b3JkQWdhaW4pO1xuICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICByZXR1cm4gXy5pc0VtcHR5KHRoaXMuc3RhdGUuZW1haWwpO1xuICAgIH1cbiAgfSxcblxuICBnb1RvTG9naW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGhNb2RlOiAnbG9naW4nIH0pO1xuICB9LFxuXG4gIGdvVG9SZWdpc3RlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0aE1vZGU6ICdyZWdpc3RlcicgfSk7XG4gIH0sXG5cbiAgZ29Ub0ZvcmdvdFBhc3N3b3JkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRoTW9kZTogJ2ZvcmdvdFBhc3N3b3JkJyB9KTtcbiAgfSxcblxuICBoYW5kbGVMb2dpbigpIHtcbiAgICB0aGlzLnByb3BzLmxvZ2luV2l0aEVtYWlsKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICB9LFxuXG4gIGhhbmRsZVJlZ2lzdGVyKCkge1xuICAgIGlmIChfLmlzRXF1YWwodGhpcy5zdGF0ZS5wYXNzd29yZCwgdGhpcy5zdGF0ZS5wYXNzd29yZEFnYWluKSkge1xuICAgICAgdGhpcy5wcm9wcy5zaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnJlcG9ydEVycm9yKGNvbnN0YW50cy5FUlJPUlMuTk9UX1NBTUVfUEFTU1dPUkQpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVGb3Jnb3RQYXNzd29yZCgpIHtcbiAgICB0aGlzLnByb3BzLnNlbmRQYXNzd29yZFJlc2V0RW1haWwodGhpcy5zdGF0ZS5lbWFpbCk7XG4gICAgdGhpcy5nb1RvTG9naW4oKTtcbiAgfSxcblxuICBoYW5kbGVTdWJtaXRDbGljaygpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHtcbiAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTG9naW4oKTtcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVnaXN0ZXIoKTtcbiAgICAgIGNhc2UgJ2ZvcmdvdFBhc3N3b3JkJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRm9yZ290UGFzc3dvcmQoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiB0ZW1wbGF0ZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXV0aEZvcm0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuL2F1dGhQYWdlLnNjc3MnLFxuICAgICcuLi9sb2dvJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBjc3MsIGxvZ28pIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdsYXJnZS02IGNvbHVtbnMgc21hbGwtY2VudGVyZWQgYXV0aC1mb3JtLWNvbnRhaW5lcicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ21lZGl1bS1jZW50ZXJlZCBsb2dvJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KGxvZ28sIHtcbiAgICAgICAgICAgICd3aWR0aCc6IDEyMCxcbiAgICAgICAgICAgICdoZWlnaHQnOiAxMjBcbiAgICAgICAgfSkpLCBfLmluY2x1ZGVzKFtcbiAgICAgICAgICAgICdsb2dpbicsXG4gICAgICAgICAgICAncmVnaXN0ZXInXG4gICAgICAgIF0sIHRoaXMuc3RhdGUuYXV0aE1vZGUpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAna2V5JzogJzI4OCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgJ29uQ2xpY2snOiB0aGlzLnByb3BzLmxvZ2luV2l0aEZhY2Vib29rLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYWNlYm9vayBidXR0b24gc3BsaXQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ0ZhY2Vib29rJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7ICdjbGFzc05hbWUnOiAnZmEgZmEtZmFjZWJvb2stb2ZmaWNpYWwnIH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgJ29uQ2xpY2snOiB0aGlzLnByb3BzLmxvZ2luV2l0aEdvb2dsZSxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZ29vZ2xlIGJ1dHRvbiBzcGxpdCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnR29vZ2xlJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWdvb2dsZScsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2NsYXNzTmFtZSc6ICdocicgfSkpIDogbnVsbCwgdGhpcy5wcm9wcy5lcnJvck1zZyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZXJyb3ItbXNnJyxcbiAgICAgICAgICAgICdrZXknOiAnaG9tZVBhZ2VFcnJvck1zZydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgJ2NsYXNzTmFtZSc6ICdlcnJvci1tc2ctdHh0JyB9LCB0aGlzLnByb3BzLmVycm9yTXNnKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnb25LZXlEb3duJzogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdhdXRoLWZvcm0nXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ3R5cGUnOiAnZW1haWwnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAnbmFtZSc6ICdlbWFpbCcsXG4gICAgICAgICAgICAncGxhY2Vob2xkZXInOiAn15PXldeQ16gg15DXnNen15jXqNeV16DXmSdcbiAgICAgICAgfSksIF8uaW5jbHVkZXMoW1xuICAgICAgICAgICAgJ2xvZ2luJyxcbiAgICAgICAgICAgICdyZWdpc3RlcidcbiAgICAgICAgXSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgJ25hbWUnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ9eh15nXodee15AnLFxuICAgICAgICAgICAgJ2tleSc6ICcxMjE2J1xuICAgICAgICB9KSA6IG51bGwsIHRoaXMuc3RhdGUuYXV0aE1vZGUgPT09ICdyZWdpc3RlcicgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucGFzc3dvcmRBZ2FpbixcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAnbmFtZSc6ICdwYXNzd29yZEFnYWluJyxcbiAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICfXqdeV15Eg16HXmdeh157XkCcsXG4gICAgICAgICAgICAna2V5JzogJzE0MjInXG4gICAgICAgIH0pIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgJ29uQ2xpY2snOiB0aGlzLmhhbmRsZVN1Ym1pdENsaWNrLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdidXR0b24gc3BsaXQgc3VjY2VzcycsXG4gICAgICAgICAgICAnZGlzYWJsZWQnOiB0aGlzLmlzU3VibWl0RGlzYWJsZWQoKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sIHRoaXMuZ2V0QnV0dG9uTGFiZWwoKSkpLCB0aGlzLnN0YXRlLmF1dGhNb2RlID09PSAnbG9naW4nID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdyb3cnLFxuICAgICAgICAgICAgJ2tleSc6ICcxODIzJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTYgcmVkLWxpbmsnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogdGhpcy5nb1RvUmVnaXN0ZXIgfSwgJ9eQ15nXnyDXnNeaINeX16nXkdeV158/JykpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTYgcmVkLWxpbmsnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogdGhpcy5nb1RvRm9yZ290UGFzc3dvcmQgfSwgJ9ep15vXl9eqINeh15nXodee15A/JykpKSA6IG51bGwsIHRoaXMuc3RhdGUuYXV0aE1vZGUgIT09ICdsb2dpbicgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdrZXknOiAnMjEyMScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAncmVkLWxpbmsnLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiB0aGlzLmdvVG9Mb2dpblxuICAgICAgICB9LCAn15vXkdeoINeZ16kg15zXmiDXl9ep15HXldefPycpKSA6IG51bGwpKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hdXRoUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hdXRoUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmF1dGgtZm9ybS1jb250YWluZXIgLmxvZ28ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMzVweDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogMTYwcHg7IH1cXG5cXG4uYXV0aC1mb3JtLWNvbnRhaW5lciAuYXV0aC1mb3JtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5hdXRoLWZvcm0tY29udGFpbmVyIC5ociB7XFxuICBtYXJnaW46IDAuN2VtIGF1dG8gIWltcG9ydGFudDsgfVxcblxcbi5hdXRoLWZvcm0tY29udGFpbmVyIC5yZWQtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU0VUX0FVVEhfREFUQSwgU0lHTl9PVVQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9ucyBmcm9tICcuL3VzZXJBY3Rpb25zJztcbmltcG9ydCAqIGFzIGV2ZW50QWN0aW9ucyBmcm9tICcuL2V2ZW50QWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBib29raW5nQWN0aW9ucyBmcm9tICcuL2Jvb2tpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcbmltcG9ydCAqIGFzIG5hdmlnYXRpb25BY3Rpb25zIGZyb20gJy4vbmF2aWdhdGlvbkFjdGlvbnMnO1xuXG5pbXBvcnQgdXBkYXRlUGhvdG9VcmxGaXhlciBmcm9tICcuLi8uLi9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXInO1xuXG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUl9DT0RFU19NQVAgPSB7XG4gICdhdXRoL2ludmFsaWQtZW1haWwnOiBDb25zdGFudHMuRVJST1JTLklOVkFMSURfTUFJTCxcbiAgJ2F1dGgvd2Vhay1wYXNzd29yZCc6IENvbnN0YW50cy5FUlJPUlMuV0VBS19QQVNTV09SRCxcbiAgJ2F1dGgvZW1haWwtYWxyZWFkeS1pbi11c2UnOiBDb25zdGFudHMuRVJST1JTLkVNQUlMX0lOX1VTRSxcbiAgJ2F1dGgvd3JvbmctcGFzc3dvcmQnOiBDb25zdGFudHMuRVJST1JTLldST05HX1BBU1NXT1JELFxuICAnYXV0aC9hY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsJzogQ29uc3RhbnRzLkVSUk9SUy5FTUFJTF9JTl9VU0UsXG4gICdhdXRoL3VzZXItbm90LWZvdW5kJzogQ29uc3RhbnRzLkVSUk9SUy5VU0VSX05PVF9GT1VORFxufTtcblxuZXhwb3J0IGNvbnN0IHNldEF1dGhEYXRhID0gKHVpZCwgZW1haWwsIHBob3RvVVJMLCBpc0FkbWluKSA9PiAoe1xuICB0eXBlOiBTRVRfQVVUSF9EQVRBLFxuICB1aWQsXG4gIGVtYWlsLFxuICBwaG90b1VSTCxcbiAgaXNBZG1pblxufSk7XG5cbmNvbnN0IGZldGNoQXBwRGF0YSA9IChkaXNwYXRjaCwgdXNlcikgPT5cbiAgY2xpZW50REIucmVhZCgnYWRtaW5zLycgKyB1c2VyLnVpZClcbiAgICAudGhlbihpc0FkbWluID0+IGRpc3BhdGNoKHNldEF1dGhEYXRhKHVzZXIudWlkLCB1c2VyLmVtYWlsLCBfLmdldCh1c2VyLCBbJ3Byb3ZpZGVyRGF0YScsIDAsICdwaG90b1VSTCddKSwgISFpc0FkbWluKSkpXG4gICAgLnRoZW4oKCkgPT4gUHJvbWlzZS5hbGwoW1xuICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuZmV0Y2hVc2VycygpKSxcbiAgICAgIGRpc3BhdGNoKGV2ZW50QWN0aW9ucy5mZXRjaEV2ZW50cygpKSxcbiAgICAgIGRpc3BhdGNoKGJvb2tpbmdBY3Rpb25zLmZldGNoQm9va2luZ3MoKSlcbiAgICBdKSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyU2lnbmVkT3V0ID0gKCkgPT4gKHtcbiAgdHlwZTogU0lHTl9PVVRcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5zaWduT3V0KClcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaCh1c2VyU2lnbmVkT3V0KCkpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlBBR0VTLkFVVEgudmFsKSkpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRmFjZWJvb2sgPSAoKSA9PiAoKSA9PiBjbGllbnREQi5sb2dpbldpdGhGYWNlYm9vaygpO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoR29vZ2xlID0gKCkgPT4gKCkgPT4gY2xpZW50REIubG9naW5XaXRoR29vZ2xlKCk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLmxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHVzZXIgPT4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5QQUdFUy5IT01FLnZhbCkpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHVzZXIgPT4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5QQUdFUy5FRElUX1VTRVJfSU5GTy52YWwpKSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gZW1haWwgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdXRoRGF0YSA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5nZXRMb2dnZWRJblVzZXIoKVxuICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcilcbiAgICAgICAgICAudGhlbigoKSA9PiB1cGRhdGVQaG90b1VybEZpeGVyKGRpc3BhdGNoLCBnZXRTdGF0ZSgpKSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IGdldFN0YXRlKCkudXNlcnNbdXNlci51aWRdO1xuICAgICAgICAgICAgaWYgKF8uaXNFbXB0eSh1c2VySW5mbykpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUEFHRVMuRURJVF9VU0VSX0lORk8udmFsKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5QQUdFUy5IT01FLnZhbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGRiRXJyb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSlcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJpbXBvcnQgeyBOQVZJR0FURV9UTyB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGVUbyA9IHBhZ2UgPT4gKHtcbiAgdHlwZTogTkFWSUdBVEVfVE8sXG4gIHBhZ2Vcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL25hdmlnYXRpb25BY3Rpb25zLmpzIiwiaW1wb3J0IHsgdXBkYXRlVXNlciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkaXNwYXRjaCwgc3RhdGUpIHtcbiAgY29uc3QgdWlkID0gc3RhdGUuYXV0aERhdGEudWlkO1xuICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuXG4gIGlmICh1c2Vyc1t1aWRdKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKHVwZGF0ZVVzZXIodWlkLCB7IHBob3RvVVJMOiBzdGF0ZS5hdXRoRGF0YS5waG90b1VSTCB9KSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YUZpeGVycy91cGRhdGVQaG90b1VybEZpeGVyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Jvb2tpbmdzUGFnZS5ydCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1cGRhdGVCb29raW5nLCBjYW5jZWxCb29raW5nIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucyc7XG5cbmNvbnN0IGdldERyb3BPZmZNYXAgPSBib29raW5ncyA9PiBfLmNoYWluKGJvb2tpbmdzKVxuICAub21pdEJ5KGJvb2tpbmcgPT4gIShib29raW5nLmRyb3BPZmYpKVxuICAudHJhbnNmb3JtKChhY2MsIGJvb2tpbmcsIHVpZCkgPT4ge1xuICAgIGFjY1tib29raW5nLmRyb3BPZmZdW3VpZF0gPSBib29raW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIH0sIHsgdGx2OiB7fSwgbW9kaWluOiB7fSB9KVxuICAudmFsdWUoKTtcblxuY29uc3QgZ2V0UGlja1VwTWFwID0gYm9va2luZ3MgPT4gXy5jaGFpbihib29raW5ncylcbiAgLm9taXRCeShib29raW5nID0+ICEoYm9va2luZy5waWNrVXApKVxuICAudHJhbnNmb3JtKChhY2MsIGJvb2tpbmcsIHVpZCkgPT4ge1xuICAgIGFjY1tib29raW5nLnBpY2tVcF1bdWlkXSA9IGJvb2tpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgfSwgeyB0bHY6IHt9LCBtb2RpaW46IHt9IH0pXG4gIC52YWx1ZSgpO1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmdzLFxuICBldmVudHM6IHN0YXRlLmV2ZW50cyxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdXBkYXRlQm9va2luZzogKHVpZCwgZXZlbnRJZCwgYm9va2luZykgPT4gZGlzcGF0Y2godXBkYXRlQm9va2luZyh1aWQsIGV2ZW50SWQsIGJvb2tpbmcpKSxcbiAgY2FuY2VsQm9va2luZzogKHVpZCwgZXZlbnRJZCkgPT4gZGlzcGF0Y2goY2FuY2VsQm9va2luZyh1aWQsIGV2ZW50SWQpKVxufSk7XG5cbmNsYXNzIEJvb2tpbmdzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0aW5nVXNlcklkOiBudWxsLFxuICAgICAgZXZlbnRJZDogXy5maW5kS2V5KHRoaXMucHJvcHMuZXZlbnRzLCB7c3RhdHVzOiAnb3BlbkZvck1lbWJlcnMnfSkgfHwgXy5maW5kS2V5KHRoaXMucHJvcHMuZXZlbnRzLCB7c3RhdHVzOiAnb3BlbkZvckFsbCd9KSB8fCAgXy5maW5kS2V5KHRoaXMucHJvcHMuZXZlbnRzLCB7c3RhdHVzOiAnY2xvc2VkJ30pICxcbiAgICAgIGZpbHRlcjogJ1BJQ0tVUCdcbiAgICB9O1xuICB9XG5cbiAgZ2V0VmlzaWJsZUJvb2tpbmdzKCkge1xuICAgIGNvbnN0IGJvb2tpbmdGb3JFdmVudE1hcCA9IF8uY2hhaW4odGhpcy5wcm9wcy5ib29raW5ncylcbiAgICAgIC5tYXBWYWx1ZXModXNlckJvb2tpbmdzID0+IHVzZXJCb29raW5nc1t0aGlzLnN0YXRlLmV2ZW50SWRdKVxuICAgICAgLm9taXRCeShfLmlzVW5kZWZpbmVkKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGlja1VwOiBnZXRQaWNrVXBNYXAoYm9va2luZ0ZvckV2ZW50TWFwKSxcbiAgICAgIGRyb3BPZmY6IGdldERyb3BPZmZNYXAoYm9va2luZ0ZvckV2ZW50TWFwKVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZmlsdGVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlciB9KTtcbiAgfVxuXG4gIG9uRXZlbnRJZENoYW5nZShldmVudElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV2ZW50SWQsIGZpbHRlcjogJ1BJQ0tVUCcgfSk7XG4gIH1cblxuICBvbkJvb2tpbmdDbGljayh1aWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ1VzZXJJZDogdWlkIH0pO1xuICB9XG5cbiAgZ2V0RXZlbnRQcmludFRpdGxlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50SWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFdnQgPSB0aGlzLnByb3BzLmV2ZW50c1t0aGlzLnN0YXRlLmV2ZW50SWRdO1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbY3VycmVudEV2dC50eXBlSWRdLm5hbWUgKyAnIC0gJyArIGN1cnJlbnRFdnQuZGF5ICsgJy8nICsgY3VycmVudEV2dC5tb250aCArICcvJyArIGN1cnJlbnRFdnQueWVhcjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0Qm9va2luZ1RpdGxlKHVpZCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJzW3VpZF07XG4gICAgcmV0dXJuIHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZTtcbiAgfVxuXG4gIGdldEJvb2tpbmdQaG9uZSh1aWQpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2Vyc1t1aWRdO1xuICAgIHJldHVybiB1c2VyLnBob25lUHJlZml4ICsgJy0nICsgdXNlci5waG9uZU51bWJlcjtcbiAgfVxuXG4gIGdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgdWlkKSB7XG4gICAgY29uc3Qgc3VidGl0bGVzID0gW107XG5cbiAgICBpZiAoYm9va2luZy5wYWlkU2VhdHMgPiAwKSB7XG4gICAgICBzdWJ0aXRsZXMucHVzaCgn157XoNeV15nXmdedOiAnICsgYm9va2luZy5wYWlkU2VhdHMpO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5leHRyYVNlYXRzID4gMCkge1xuICAgICAgc3VidGl0bGVzLnB1c2goJ9eX15Mg16TXotee15k6ICcgKyBib29raW5nLmV4dHJhU2VhdHMpO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5waWNrVXApIHtcbiAgICAgIHN1YnRpdGxlcy5wdXNoKCfXlNec15XXmjogJyArIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5kcm9wT2ZmKSB7XG4gICAgICBzdWJ0aXRsZXMucHVzaCgn15fXlteV16g6ICcgKyBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSk7XG4gICAgfVxuXG4gICAgaWYgKHVpZCkge1xuICAgICAgc3VidGl0bGVzLnB1c2goJ9eY15zXszogJyArIHRoaXMuZ2V0Qm9va2luZ1Bob25lKHVpZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJ0aXRsZXM7XG4gIH1cblxuICBnZXRCb29raW5nSW1hZ2UodWlkKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlcnNbdWlkXTtcbiAgICByZXR1cm4gdXNlci5waG90b1VSTCB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTg5LzE4OTk5MS5zdmcnO1xuICB9XG5cbiAgZ2V0UGlja1VwQ291bnQoKSB7XG4gICAgY29uc3QgdmlzaWJsZUJvb2tpbmdzID0gdGhpcy5nZXRWaXNpYmxlQm9va2luZ3MoKTtcbiAgICBjb25zdCB0bHZQaWNrVXBzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHYpXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgdGx2UGlja1Vwc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluUGlja1Vwc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluKVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpblBpY2tVcHNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW4pXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB0bHZQaWNrVXBzUGFpZCArIHRsdlBpY2tVcHNFeHRyYSArIG1vZGlpblBpY2tVcHNQYWlkICsgbW9kaWluUGlja1Vwc0V4dHJhO1xuICB9XG5cbiAgZ2V0RHJvcE9mZkNvdW50KCkge1xuICAgIGNvbnN0IHZpc2libGVCb29raW5ncyA9IHRoaXMuZ2V0VmlzaWJsZUJvb2tpbmdzKCk7XG4gICAgY29uc3QgdGx2RHJvcE9mZnNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHYpXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgdGx2RHJvcE9mZnNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2KVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5Ecm9wT2Zmc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5Ecm9wT2Zmc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW4pXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB0bHZEcm9wT2Zmc1BhaWQgKyB0bHZEcm9wT2Zmc0V4dHJhICsgbW9kaWluRHJvcE9mZnNQYWlkICsgbW9kaWluRHJvcE9mZnNFeHRyYTtcbiAgfVxuXG4gIHN0b3BFZGl0aW5nKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nVXNlcklkOiBudWxsIH0pO1xuICB9XG5cbiAgdXBkYXRlQm9va2luZyhib29raW5nKSB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVCb29raW5nKHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCwgdGhpcy5zdGF0ZS5ldmVudElkLCBib29raW5nKTtcbiAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gIH1cblxuICBjYW5jZWxCb29raW5nKCkge1xuICAgIHRoaXMucHJvcHMuY2FuY2VsQm9va2luZyh0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQsIHRoaXMuc3RhdGUuZXZlbnRJZCk7XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxuXG59XG5cbkJvb2tpbmdzUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGJvb2tpbmdzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGV2ZW50czogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1cGRhdGVCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEJvb2tpbmdzUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vbGlzdEl0ZW0nLFxuICAgICcuLi9ib29raW5nRm9ybS9ib29raW5nRm9ybScsXG4gICAgJy4uLy4uL3V0aWxzL2NvbnN0YW50cycsXG4gICAgJy4vYm9va2luZ3NQYWdlLnNjc3MnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIGxpc3RJdGVtLCBCb29raW5nRm9ybSwgQ29uc3RhbnRzLCBib29raW5nc1BhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25DbGljazEodmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdQSUNLVVAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazIodmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdEUk9QT0ZGJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlMyh2aXNpYmxlQm9va2luZ3MsIGUpIHtcbiAgICAgICAgdGhpcy5vbkV2ZW50SWRDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDQodmlzaWJsZUJvb2tpbmdzLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV2ZW50SW5kZXhcbiAgICAgICAgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBldmVudC5kYXksICcvJywgZXZlbnQubW9udGgsICcvJywgZXZlbnQueWVhciwgJyAtICcsIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s1KHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICB0aGlzLm9uQm9va2luZ0NsaWNrKGJvb2tpbmdJbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmc2KHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChsaXN0SXRlbSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdrZXknOiAnYm9va2luZy0nICsgYm9va2luZ0luZGV4LFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCBib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRCb29raW5nSW1hZ2UoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazUuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNyh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkJvb2tpbmdDbGljayhib29raW5nSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nOCh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAna2V5JzogJ2Jvb2tpbmctJyArIGJvb2tpbmdJbmRleCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0Qm9va2luZ0ltYWdlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s3LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVNb2RpaW5QaWNrVXBUbHZQaWNrVXA5KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB2YXIgbW9kaWluUGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW47XG4gICAgICAgIHZhciB0bHZQaWNrVXAgPSB2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdwaWNrLXVwLWNvbnRhaW5lciByb3cgaGlkZS1mb3ItcHJpbnQnLFxuICAgICAgICAgICAgICAgICdrZXknOiAncGljay11cC1jb250YWluZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgfHwgXy5zaXplKG1vZGlpblBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNScsIHsgJ2tleSc6ICdwaWNrVXAtbGFiZWwnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eU15zXldeaOicpKSA6IG51bGwsXG4gICAgICAgICAgICBfLnNpemUodGx2UGlja1VwKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g2JywgeyAna2V5JzogJ3RsdlBpY2tVcCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcCh0bHZQaWNrVXAsIHJlcGVhdEJvb2tpbmc2LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCkpLFxuICAgICAgICAgICAgXy5zaXplKG1vZGlpblBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2tleSc6ICdtb2RpaW5QaWNrVXAnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee15XXk9eZ16LXmdefJykpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKG1vZGlpblBpY2tVcCwgcmVwZWF0Qm9va2luZzguYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwKSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxMCh2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICB0aGlzLm9uQm9va2luZ0NsaWNrKGJvb2tpbmdJbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcxMSh2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChsaXN0SXRlbSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdrZXknOiAnYm9va2luZy0nICsgYm9va2luZ0luZGV4LFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCBib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRCb29raW5nSW1hZ2UoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazEwLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMTIodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkJvb2tpbmdDbGljayhib29raW5nSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMTModmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAna2V5JzogJ2Jvb2tpbmctJyArIGJvb2tpbmdJbmRleCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0Qm9va2luZ0ltYWdlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2sxMi5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVNb2RpaW5Ecm9wT2ZmVGx2RHJvcE9mZjE0KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB2YXIgbW9kaWluRHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbjtcbiAgICAgICAgdmFyIHRsdkRyb3BPZmYgPSB2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHY7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZHJvcC1vZmYtY29udGFpbmVyIHJvdyBoaWRlLWZvci1wcmludCcsXG4gICAgICAgICAgICAgICAgJ2tleSc6ICdkcm9wLW9mZi1jb250YWluZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5zaXplKHRsdkRyb3BPZmYpICE9PSAwIHx8IF8uc2l6ZShtb2RpaW5Ecm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g1JywgeyAna2V5JzogJ2Ryb3Atb2ZmLWxhYmVsJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXl9eW15XXqDonKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5zaXplKHRsdkRyb3BPZmYpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDYnLCB7ICdrZXknOiAndGx2RHJvcE9mZicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcCh0bHZEcm9wT2ZmLCByZXBlYXRCb29raW5nMTEuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYpKSxcbiAgICAgICAgICAgIF8uc2l6ZShtb2RpaW5Ecm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g2JywgeyAna2V5JzogJ21vZGlpbkRyb3BPZmYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee15XXk9eZ16LXmdefJykpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKG1vZGlpbkRyb3BPZmYsIHJlcGVhdEJvb2tpbmcxMy5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZikpXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblN1Ym1pdDE1KHZpc2libGVCb29raW5ncywgYm9va2luZykge1xuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tpbmcoYm9va2luZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQm9va2luZ0NhbmNlbDE2KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB0aGlzLmNhbmNlbEJvb2tpbmcoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTE3KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcxOCh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogYm9va2luZ0luZGV4ICsgJy10bHYtcGlja3VwLXJvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1Bob25lKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLnBhaWRTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcuZXh0cmFTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMTkodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6IGJvb2tpbmdJbmRleCArICctbW9kaWluLXBpY2t1cC1yb3cnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdQaG9uZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5wYWlkU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLmV4dHJhU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVNb2RpaW5QaWNrVXBUbHZQaWNrVXAyMCh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdmFyIG1vZGlpblBpY2tVcCA9IHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluO1xuICAgICAgICB2YXIgdGx2UGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHY7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3BpY2tVcC10YWJsZSBzaG93LWZvci1wcmludCcsXG4gICAgICAgICAgICAna2V5JzogJ3BpY2tVcC10YWJsZSdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGFibGUnLCB7fSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGhlYWQnLCB7fSwgXy5zaXplKG1vZGlpblBpY2tVcCkgIT09IDAgfHwgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdwaWNrVXAtbGFiZWwnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywgeyAnY29sU3Bhbic6ICc2JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXlNec15XXmicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcgKCcsIHRoaXMuZ2V0UGlja1VwQ291bnQoKSwgJyknKSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7fSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9ep150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eY15zXpNeV158nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9ee16DXldeZ15nXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn15HXqtep15zXldedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqteX16DXqiDXotec15nXlCcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16rXl9eg16og15nXqNeZ15PXlCcpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICd0bHZQaWNrVXAnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge1xuICAgICAgICAgICAgICAgICdjb2xTcGFuJzogJzYnLFxuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAndGFibGUtc3ViJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2UGlja1VwLCByZXBlYXRCb29raW5nMTguYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwKSksXG4gICAgICAgICAgICBfLnNpemUobW9kaWluUGlja1VwKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ21vZGlpblBpY2tVcCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7XG4gICAgICAgICAgICAgICAgJ2NvbFNwYW4nOiAnNicsXG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICd0YWJsZS1zdWInXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteV15PXmdei15nXnycpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAobW9kaWluUGlja1VwLCByZXBlYXRCb29raW5nMTkuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwKSlcbiAgICAgICAgXSkpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzIxKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6IGJvb2tpbmdJbmRleCArICctdGx2LWRyb3BvZmYtcm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nUGhvbmUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcucGFpZFNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5leHRyYVNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcyMih2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiBib29raW5nSW5kZXggKyAnLW1vZGlpbi1kcm9wb2ZmLXJvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1Bob25lKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLnBhaWRTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcuZXh0cmFTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZU1vZGlpbkRyb3BPZmZUbHZEcm9wT2ZmMjModmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHZhciBtb2RpaW5Ecm9wT2ZmID0gdmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluO1xuICAgICAgICB2YXIgdGx2RHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZHJvcE9mZi10YWJsZSBzaG93LWZvci1wcmludCcsXG4gICAgICAgICAgICAna2V5JzogJ2Ryb3BPZmYtdGFibGUnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJywge30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJywge30sIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCB8fCBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdkcm9wT2ZmLWxhYmVsJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHsgJ2NvbFNwYW4nOiAnNicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15fXlteV16gnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuZ2V0RHJvcE9mZkNvdW50KCksICcpJykpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywge30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqdedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXmNec16TXldefJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXnteg15XXmdeZ150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eR16rXqdec15XXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16rXl9eg16og16LXnNeZ15QnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eq15fXoNeqINeZ16jXmdeT15QnKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ3RsdkRyb3BPZmYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge1xuICAgICAgICAgICAgICAgICdjb2xTcGFuJzogJzYnLFxuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAndGFibGUtc3ViJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2RHJvcE9mZiwgcmVwZWF0Qm9va2luZzIxLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmKSksXG4gICAgICAgICAgICBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdtb2RpaW5Ecm9wT2ZmJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHtcbiAgICAgICAgICAgICAgICAnY29sU3Bhbic6ICc2JyxcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3RhYmxlLXN1YidcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee15XXk9eZ16LXmdefJykpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5Ecm9wT2ZmLCByZXBlYXRCb29raW5nMjIuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYpKVxuICAgICAgICBdKSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZVZpc2libGVCb29raW5nczI0KCkge1xuICAgICAgICB2YXIgdmlzaWJsZUJvb2tpbmdzID0gdGhpcy5nZXRWaXNpYmxlQm9va2luZ3MoKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICfWv3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlIGJvb2tpbmdzLXBhZ2UnIH0sICF0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdrZXknOiAnbGlzdC12aWV3JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyIGhpZGUtZm9yLXByaW50JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXqNep15XXnteZ150g15zXlNeh16LXldeqJykpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZmlsdGVyaW5nIHJvdyBleHBhbmRlZCBjb2xsYXBzZSBoaWRlLWZvci1wcmludCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2NvbHVtbiBzbWFsbC0xMiBsYXJnZS02JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsIHsgJ2NsYXNzTmFtZSc6ICdtZW51JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1BJQ0tVUCcgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazEuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eU15zXldeaICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5nZXRQaWNrVXBDb3VudCgpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnRFJPUE9GRicgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazIuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eX15bXldeoICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5nZXREcm9wT2ZmQ291bnQoKSwgJyknKSkpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NlYXJjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmV2ZW50SWQsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2UzLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKHRoaXMucHJvcHMuZXZlbnRzLCByZXBlYXRFdmVudDQuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpKVxuICAgICAgICBdKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaDUnLCB7ICdjbGFzc05hbWUnOiAnc2hvdy1mb3ItcHJpbnQnIH0sIHRoaXMuZ2V0RXZlbnRQcmludFRpdGxlKCkpLCB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1BJQ0tVUCcgPyBzY29wZU1vZGlpblBpY2tVcFRsdlBpY2tVcDkuYXBwbHkodGhpcywgW3Zpc2libGVCb29raW5nc10pIDogbnVsbCwgdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdEUk9QT0ZGJyA/IHNjb3BlTW9kaWluRHJvcE9mZlRsdkRyb3BPZmYxNC5hcHBseSh0aGlzLCBbdmlzaWJsZUJvb2tpbmdzXSkgOiBudWxsLCB2aXNpYmxlQm9va2luZ3MubGVuZ3RoID09PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZpbHRlci1zdGF0dXMgaGlkZS1mb3ItcHJpbnQnLFxuICAgICAgICAgICAgJ2tleSc6ICduby1ldmVudHMnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWZyb3duLW8nLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXntem15jXoteo15nXnSwg15zXkCDXoNee16bXkNeVINeo16nXldee15XXqiDXnteq15DXmdee15XXqi4uLicpKSA6IG51bGwpIDogbnVsbCwgdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkID8gUmVhY3QuY3JlYXRlRWxlbWVudChCb29raW5nRm9ybSwge1xuICAgICAgICAgICAgJ2tleSc6ICdlZGl0LXVzZXInLFxuICAgICAgICAgICAgJ3RpdGxlJzogJ9ei16jXmdeb16og15TXqNep157XlCcsXG4gICAgICAgICAgICAnYm9va2luZyc6IHRoaXMucHJvcHMuYm9va2luZ3NbdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkXVt0aGlzLnN0YXRlLmV2ZW50SWRdLFxuICAgICAgICAgICAgJ29uU3VibWl0Jzogb25TdWJtaXQxNS5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncyksXG4gICAgICAgICAgICAnb25Cb29raW5nQ2FuY2VsJzogb25Cb29raW5nQ2FuY2VsMTYuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpLFxuICAgICAgICAgICAgJ3NlYXNvblRpY2tldHMnOiBfLmdldCh0aGlzLnByb3BzLnVzZXJzLCBbXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkLFxuICAgICAgICAgICAgICAgICdzZWFzb25UaWNrZXRzJ1xuICAgICAgICAgICAgXSkgfHwgMCxcbiAgICAgICAgICAgICdvbkNsb3NlJzogb25DbG9zZTE3LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKVxuICAgICAgICB9KSA6IG51bGwsIHRoaXMuc3RhdGUuZmlsdGVyID09PSAnUElDS1VQJyA/IHNjb3BlTW9kaWluUGlja1VwVGx2UGlja1VwMjAuYXBwbHkodGhpcywgW3Zpc2libGVCb29raW5nc10pIDogbnVsbCwgdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdEUk9QT0ZGJyA/IHNjb3BlTW9kaWluRHJvcE9mZlRsdkRyb3BPZmYyMy5hcHBseSh0aGlzLCBbdmlzaWJsZUJvb2tpbmdzXSkgOiBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlVmlzaWJsZUJvb2tpbmdzMjQuYXBwbHkodGhpcywgW10pO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UucnRcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9va2luZ3NQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9va2luZ3NQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ib29raW5nc1BhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvb2tpbmdzLXBhZ2UgaDUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kOiAjQ0ZEOERDO1xcbiAgY29sb3I6ICMzNzQ3NEY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLmJvb2tpbmdzLXBhZ2UgaDYge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRUNFRkYxO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5ib29raW5ncy1wYWdlIC50YWJsZS1zdWIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIyMjIyMjsgfVxcblxcbi5ib29raW5ncy1wYWdlIHRhYmxlIHRib2R5LCAuYm9va2luZ3MtcGFnZSB0YWJsZSB0Zm9vdCwgLmJvb2tpbmdzLXBhZ2UgdGFibGUgdGhlYWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjIyMjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IFVzZXJGb3JtID0gcmVxdWlyZSgnLi91c2VyRm9ybS5qc3gnKTtcblxuY29uc3QgbmF2aWdhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL25hdmlnYXRpb25BY3Rpb25zJyk7XG5jb25zdCBuYXZpZ2F0aW9uQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvbmF2aWdhdGlvbkNvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1aWQ6IHN0YXRlLmF1dGhEYXRhLnVpZFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hdmlnYXRlVG86IHBhZ2VJZCA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKHBhZ2VJZCkpXG4gICAgfTtcbn1cblxuY2xhc3MgRWRpdG9yVXNlckluZm9QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBvbkZvcm1DbG9zZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvKG5hdmlnYXRpb25Db25zdGFudHMuUEFHRVMuSE9NRS52YWwpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VXNlckZvcm0gdWlkPXt0aGlzLnByb3BzLnVpZH0gb25DbG9zZT17dGhpcy5vbkZvcm1DbG9zZX0vPlxuICAgICAgICApXG4gICAgfVxufVxuXG5FZGl0b3JVc2VySW5mb1BhZ2UucHJvcFR5cGVzID0ge1xuICAgIHVpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRlVG86IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFZGl0b3JVc2VySW5mb1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2VkaXRVc2VySW5mb1BhZ2UuanN4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFBBR0VTOiB7XG4gICAgSE9NRTogeyB2YWw6ICdob21lJywgdmlzaWJsZTogdHJ1ZSB9LFxuICAgIEFVVEg6IHsgdmFsOiAnYXV0aCcsIHZpc2libGU6IGZhbHNlIH0sXG4gICAgVVNFUlM6IHsgdmFsOiAndXNlcnMnLCB2aXNpYmxlOiB0cnVlIH0sXG4gICAgRVZFTlRTOiB7IHZhbDogJ2V2ZW50cycsIHZpc2libGU6IHRydWUgfSxcbiAgICBCT09LSU5HUzogeyB2YWw6ICdib29raW5ncycsIHZpc2libGU6IHRydWUgfSxcbiAgICBESVNUUklCVVRJT046IHsgdmFsOiAnZGlzdHJpYnV0aW9uJywgdmlzaWJsZTogdHJ1ZSB9LFxuICAgIEVESVRfVVNFUl9JTkZPOiB7IHZhbDogJ2VkaXRVc2VySW5mbycsIHZpc2libGU6IGZhbHNlIH1cbiAgfSxcbiAgVFJBTlNMQVRJT05TOiB7XG4gICAgaG9tZTogJ9eT16Mg15TXkdeZ16onLFxuICAgIHVzZXJzOiAn157Xqdeq157XqdeZ150nLFxuICAgIGV2ZW50czogJ9ee16nXl9en15nXnScsXG4gICAgYm9va2luZ3M6ICfXqNep15XXnteZ150g15zXlNeh16LXldeqJyxcbiAgICBkaXN0cmlidXRpb246ICfXqNep15nXnteqINeq16TXldem15QnXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL25hdmlnYXRpb25Db25zdGFudHMuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZGlzdHJpYnV0aW9uUGFnZS5ydCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBzZW5kVGVtcGxhdGVFbWFpbCwgc2VuZEN1c3RvbUVtYWlsLCBzZW5kU01TIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9kaXN0cmlidXRpb25BY3Rpb25zJztcblxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmZ1bmN0aW9uIGdldE1lbWJlcnNVc2Vyc09ubHkodXNlcnMpIHtcbiAgcmV0dXJuIF8ucGlja0J5KHVzZXJzLCB1c2VyID0+IHVzZXIuc2Vhc29uVGlja2V0cyAmJiB1c2VyLnNlYXNvblRpY2tldHMgPiAwKTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9va2VkVXNlcnNPbmx5KHVzZXJzLCBib29raW5ncywgZXZlbnRJZCkge1xuICByZXR1cm4gXy5waWNrQnkodXNlcnMsICh1c2VyLCB1aWQpID0+IF8uaGFzKGJvb2tpbmdzW3VpZF0sIGV2ZW50SWQpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBldmVudElkKSB7XG4gIGxldCByZWNpcGllbnRzVXNlcnMgPSBfLnBpY2tCeSh1c2VycywgdXNlciA9PiB1c2VyLnN1YnNjcmliZU1haWwpO1xuXG4gIHN3aXRjaCAocmVjaXBpZW50c1R5cGUpIHtcbiAgICBjYXNlIENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5NRU1CRVJTX09OTFkudmFsdWU6XG4gICAgICByZWNpcGllbnRzVXNlcnMgPSBnZXRNZW1iZXJzVXNlcnNPbmx5KHJlY2lwaWVudHNVc2Vycyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5CT09LRURfVE9fRVZFTlQudmFsdWU6XG4gICAgICByZWNpcGllbnRzVXNlcnMgPSBnZXRCb29rZWRVc2Vyc09ubHkocmVjaXBpZW50c1VzZXJzLCBib29raW5ncywgZXZlbnRJZCk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiByZWNpcGllbnRzVXNlcnM7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJzRW1haWxzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGV2ZW50SWQpIHtcbiAgY29uc3QgcmVjaXBpZW50cyA9IGdldFJlY2lwaWVudHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZXZlbnRJZCk7XG4gIHJldHVybiBfLm1hcChyZWNpcGllbnRzLCB1c2VyID0+IHVzZXIuZW1haWwpO1xufVxuXG5mdW5jdGlvbiBnZXRVc2Vyc1Bob25lTnVtYmVycyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBldmVudElkKSB7XG4gIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRSZWNpcGllbnRzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGV2ZW50SWQpO1xuICByZXR1cm4gXy5tYXAocmVjaXBpZW50cywgdXNlciA9PiB1c2VyLnBob25lUHJlZml4ICsgdXNlci5waG9uZU51bWJlcik7XG59XG5cbmNvbnN0IGdldEV2ZW50U3Vic3RpdHV0aW9ucyA9IGV2ZW50ID0+ICh7XG4gICctREVQQVJUVVJFLSc6IGAke2V2ZW50LmhvdXJ9OiR7ZXZlbnQubWludXRlfWAsXG4gICctREFURS0nOiBgJHtldmVudC5kYXl9LyR7ZXZlbnQubW9udGh9LyR7ZXZlbnQueWVhcn1gLFxuICAnLU5BTUUtJzogQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLm5hbWVcbn0pO1xuXG5jb25zdCBwcmVwYXJlQ3VzdG9tTWFpbENvbnRlbnRGb3JTZW5kID0gY29udGVudCA9PiAnPHAgZGlyPVxcJ3J0bFxcJz4nICsgY29udGVudC5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJzxici8+JykgKyAnPC9wPic7XG5cbmNvbnN0IGdldEluaXRpYWxTdGF0ZSA9IGV2ZW50cyA9PiAoe1xuICBkaXN0cmlidXRpb25NZXRob2Q6ICdlbWFpbCcsXG4gIHJlY2lwaWVudHNUeXBlOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuTUVNQkVSU19PTkxZLnZhbHVlLFxuICBkaXN0cmlidXRpb25UeXBlOiAndGVtcGxhdGUnLFxuICBldmVudElkOiBfLmxhc3QoXy5rZXlzKGV2ZW50cykpLFxuICB0ZW1wbGF0ZUlkOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRFTVBMQVRFUy5FVkVOVF9PUEVOX0ZPUl9NRU1CRVJTLmlkLFxuICBzdWJqZWN0OiAnJyxcbiAgY29udGVudDogJydcbn0pO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBldmVudHM6IHN0YXRlLmV2ZW50cyxcbiAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmdzLFxuICB1c2Vyczogc3RhdGUudXNlcnNcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBzZW5kVGVtcGxhdGVFbWFpbDogKHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMpID0+IGRpc3BhdGNoKHNlbmRUZW1wbGF0ZUVtYWlsKHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMpKSxcbiAgc2VuZEN1c3RvbUVtYWlsOiAocmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCkgPT4gZGlzcGF0Y2goc2VuZEN1c3RvbUVtYWlsKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpKSxcbiAgc2VuZFNNUzogKHJlY2lwaWVudHMsIG1lc3NhZ2UpID0+IGRpc3BhdGNoKHNlbmRTTVMocmVjaXBpZW50cywgbWVzc2FnZSkpLFxufSk7XG5cbmNsYXNzIERpc3RyaWJ1dGlvblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUodGhpcy5nZXRPcGVuRXZlbnRzKCkpO1xuICB9XG5cbiAgZ2V0T3BlbkV2ZW50cygpIHtcbiAgICByZXR1cm4gXy5vbWl0QnkodGhpcy5wcm9wcy5ldmVudHMsXG4gICAgICBldmVudCA9PiBldmVudC5zdGF0dXMgIT09IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLk9QRU5fRk9SX01FTUJFUlMudmFsdWUgJiYgZXZlbnQuc3RhdHVzICE9PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5PUEVOX0ZPUl9BTEwudmFsdWVcbiAgICApO1xuICB9XG5cbiAgb25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXN0cmlidXRpb25NZXRob2Q6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25SZWNpcGllbnRzVHlwZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlY2lwaWVudHNUeXBlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uRGlzdHJpYnV0aW9uVHlwZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3RyaWJ1dGlvblR5cGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25UZW1wbGF0ZUlkQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGVtcGxhdGVJZDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvbkV2ZW50Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXZlbnRJZDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvblN1YmplY3RDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJqZWN0OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uQ29udGVudENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaXNEaXN0cmlidXRpb25UeXBlVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5FTUFJTDtcbiAgfVxuXG4gIGlzRXZlbnRzVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rpc3RyaWJ1dGlvblR5cGVWaXNpYmxlKCkgJiYgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLlRFTVBMQVRFO1xuICB9XG5cbiAgaXNDdXN0b21UaXRsZVZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuRU1BSUwgJiZcbiAgICAgIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5DVVNUT007XG4gIH1cblxuICBpc0N1c3RvbUNvbnRlbnRWaXNpYmxlKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLkVNQUlMICYmXG4gICAgICB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuQ1VTVE9NXG4gICAgICApIHx8IHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuU01TO1xuICB9XG5cbiAgc2VuZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5FTUFJTCkge1xuICAgICAgY29uc3QgcmVjaXBpZW50cyA9IGdldFVzZXJzRW1haWxzKHRoaXMucHJvcHMudXNlcnMsIHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsIHRoaXMucHJvcHMuYm9va2luZ3MsIHRoaXMuc3RhdGUuZXZlbnRJZCk7XG4gICAgICBpZiAoXy5pc0VtcHR5KHJlY2lwaWVudHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuVEVNUExBVEUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IGdldEV2ZW50U3Vic3RpdHV0aW9ucyh0aGlzLnByb3BzLmV2ZW50c1t0aGlzLnN0YXRlLmV2ZW50SWRdKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zZW5kVGVtcGxhdGVFbWFpbChyZWNpcGllbnRzLCB0aGlzLnN0YXRlLnRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZW5kQ3VzdG9tRW1haWwocmVjaXBpZW50cywgdGhpcy5zdGF0ZS5zdWJqZWN0LCBwcmVwYXJlQ3VzdG9tTWFpbENvbnRlbnRGb3JTZW5kKHRoaXMuc3RhdGUuY29udGVudCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZWNpcGllbnRzID0gZ2V0VXNlcnNQaG9uZU51bWJlcnModGhpcy5wcm9wcy51c2VycywgdGhpcy5zdGF0ZS5yZWNpcGllbnRzVHlwZSwgdGhpcy5wcm9wcy5ib29raW5ncywgdGhpcy5zdGF0ZS5ldmVudElkKTtcbiAgICAgIGlmIChfLmlzRW1wdHkocmVjaXBpZW50cykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5zZW5kU01TKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUuY29udGVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShnZXRJbml0aWFsU3RhdGUodGhpcy5nZXRPcGVuRXZlbnRzKCkpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cblxufVxuXG5EaXN0cmlidXRpb25QYWdlLnByb3BUeXBlcyA9IHtcbiAgZXZlbnRzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHVzZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNlbmRUZW1wbGF0ZUVtYWlsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZW5kQ3VzdG9tRW1haWw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbmRTTVM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRGlzdHJpYnV0aW9uUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi8uLi91dGlscy9jb25zdGFudHMnLFxuICAgICcuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgQ29uc3RhbnRzLCBkaXN0cmlidXRpb25QYWdlQ3NzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlMShlKSB7XG4gICAgICAgIHRoaXMub25EaXN0cmlidXRpb25NZXRob2RDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlMihlKSB7XG4gICAgICAgIHRoaXMub25SZWNpcGllbnRzVHlwZUNoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UzKGUpIHtcbiAgICAgICAgdGhpcy5vbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlNChlKSB7XG4gICAgICAgIHRoaXMub25UZW1wbGF0ZUlkQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRUZW1wbGF0ZUNvbnN0NSh0ZW1wbGF0ZUNvbnN0LCB0ZW1wbGF0ZUNvbnN0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAndGVtcGxhdGUtJyArIHRlbXBsYXRlQ29uc3QuaWQsXG4gICAgICAgICAgICAndmFsdWUnOiB0ZW1wbGF0ZUNvbnN0LmlkXG4gICAgICAgIH0sIHRlbXBsYXRlQ29uc3QubmFtZSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlNihlKSB7XG4gICAgICAgIHRoaXMub25FdmVudENoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0RXZlbnQ3KGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50LScgKyBldmVudEluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogZXZlbnRJbmRleFxuICAgICAgICB9LCBDb25zdGFudHMuRVZFTlRTX1RZUEVTW2V2ZW50LnR5cGVJZF0ubmFtZSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlOChlKSB7XG4gICAgICAgIHRoaXMub25TdWJqZWN0Q2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTkoZSkge1xuICAgICAgICB0aGlzLm9uQ29udGVudENoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazEwKCkge1xuICAgICAgICB0aGlzLnNlbmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdkYXNoYm9hcmQtcGFnZSBkaXN0cmlidXRpb24tcGFnZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlcicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyLXRpdGxlJyB9LCAn16nXnNeZ15fXqiDXnteZ15nXnNeZ150nKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdkaXN0cmlidXRpb24tZm9ybSBzbWFsbC0xMSBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQgbW9yZS1zcGFjZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9ep15zXlyDXkdeQ157Xptei15XXqlxcbiAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnLCB7XG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlMS5iaW5kKHRoaXMpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLkVNQUlMIH0sICfXk9eV15DXqCDXkNec16fXmNeo15XXoNeZJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLlNNUyB9LCAn16HXntehJykpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXnNeXINeQ15xcXG4gICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jywge1xuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5yZWNpcGllbnRzVHlwZSxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlMi5iaW5kKHRoaXMpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLkFMTC52YWx1ZSB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLkFMTC5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuTUVNQkVSU19PTkxZLnZhbHVlIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuTUVNQkVSU19PTkxZLm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5CT09LRURfVE9fRVZFTlQudmFsdWUgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcsIENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5CT09LRURfVE9fRVZFTlQubmFtZSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJykpKSksIHRoaXMuaXNEaXN0cmlidXRpb25UeXBlVmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyxcbiAgICAgICAgICAgICdrZXknOiAnZGlzdHJpYnV0aW9uVHlwZSdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9em15XXqNeqINep15zXmdeX15RcXG4gICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jywge1xuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2UzLmJpbmQodGhpcylcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLlRFTVBMQVRFIH0sICfXqteR16DXmdeqJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5DVVNUT00gfSwgJ9eX15XXpNep15knKSkpKSA6IG51bGwsIHRoaXMuaXNFdmVudHNWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnLFxuICAgICAgICAgICAgJ2tleSc6ICd0ZW1wbGF0UGlja2VyJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn15HXl9eoINeq15HXoNeZ16pcXG4gICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnRlbXBsYXRlSWQsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2U0LmJpbmQodGhpcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuRElTVFJJQlVUSU9OLlRFTVBMQVRFUywgcmVwZWF0VGVtcGxhdGVDb25zdDUuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSA6IG51bGwsIHRoaXMuaXNFdmVudHNWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnLFxuICAgICAgICAgICAgJ2tleSc6ICdldmVudElkJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn15HXl9eZ16jXqiDXkNeZ16jXldeiXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5ldmVudElkLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlNi5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAodGhpcy5nZXRPcGVuRXZlbnRzKCksIHJlcGVhdEV2ZW50Ny5iaW5kKHRoaXMpKVxuICAgICAgICBdKSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLWNlbnRlcmVkIG1lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMnIH0sIHRoaXMuaXNDdXN0b21UaXRsZVZpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAna2V5JzogJ2N1c3RvbVN1YmplY3QtbGFiZWwnIH0sICfXoNeV16nXkDonKSA6IG51bGwsIHRoaXMuaXNDdXN0b21UaXRsZVZpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnN1YmplY3QsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTguYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdrZXknOiAnY3VzdG9tU3ViamVjdCdcbiAgICAgICAgfSkgOiBudWxsLCB0aGlzLmlzQ3VzdG9tQ29udGVudFZpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAna2V5JzogJ2N1c3RvbUNvbnRlbnQtbGFiZWwnIH0sICfXqteV15vXnzonKSA6IG51bGwsIHRoaXMuaXNDdXN0b21Db250ZW50VmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCB7XG4gICAgICAgICAgICAnbmFtZSc6IHRydWUsXG4gICAgICAgICAgICAnaWQnOiB0cnVlLFxuICAgICAgICAgICAgJ3Jvd3MnOiAnMTAnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5jb250ZW50LFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2U5LmJpbmQodGhpcyksXG4gICAgICAgICAgICAna2V5JzogJ2N1c3RvbUNvbnRlbnQnXG4gICAgICAgIH0pIDogbnVsbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdidXR0b24tZ3JvdXAgc3RhY2tlZCBzbWFsbC1jZW50ZXJlZCBsYXJnZS02IHNtYWxsLTggbW9yZS1zcGFjZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtcbiAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazEwLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2J1dHRvbiBzdWNjZXNzJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXqdec15cnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtcGFwZXItcGxhbmUnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pKSkpKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2UucnRcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZGlzdHJpYnV0aW9uUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZGlzdHJpYnV0aW9uLXBhZ2UgLmJ1dHRvbiBpIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IFBBVEhfTUFQID0ge1xuICBFTUFJTFM6IHtcbiAgICBURU1QTEFURVM6ICdwZW5kaW5nRW1haWxzL3RlbXBsYXRlcycsXG4gICAgQ1VTVE9NOiAncGVuZGluZ0VtYWlscy9jdXN0b20nXG4gIH0sXG4gIFNNUzogJ3BlbmRpbmdTTVMnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRUZW1wbGF0ZUVtYWlsID0gKHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKGAke1BBVEhfTUFQLkVNQUlMUy5URU1QTEFURVN9YCwgKHsgcmVjaXBpZW50cywgdGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucyB9KSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kQ3VzdG9tRW1haWwgPSAocmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goYCR7UEFUSF9NQVAuRU1BSUxTLkNVU1RPTX1gLCAoeyByZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50IH0pKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRTTVMgPSAodG8sIG1lc3NhZ2UpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKGAke1BBVEhfTUFQLlNNU31gLCAoeyB0bywgbWVzc2FnZSB9KSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucy5qcyIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxuY29uc3QgbmF2aWdhdGlvbkNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL25hdmlnYXRpb25Db25zdGFudHMnKTtcblxuY29uc3QgbmF2aWdhdGlvbkFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL25hdmlnYXRpb25BY3Rpb25zJyk7XG5jb25zdCBhdXRoQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL3RvcEJhci5zY3NzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIGNvbnN0IGF1dGhEYXRhID0gc3RhdGUuYXV0aERhdGE7XG4gICAgY29uc3QgdXNlcnMgPSBzdGF0ZS51c2VycztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBob3RvVVJMOiBhdXRoRGF0YS5waG90b1VSTCB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTYzLzE2MzgwNC5zdmcnLFxuICAgICAgICBpc0FkbWluOiBhdXRoRGF0YS5pc0FkbWluLFxuICAgICAgICBjdXJyZW50UGFnZTogc3RhdGUuY3VycmVudFBhZ2UsXG4gICAgICAgIGN1cnJlbnRVc2VyOiBhdXRoRGF0YSAmJiB1c2Vyc1thdXRoRGF0YS51aWRdXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmF2aWdhdGVUbzogcGFnZUlkID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8ocGFnZUlkKSksXG4gICAgICAgIHNpZ25PdXQ6ICgpID0+IGRpc3BhdGNoKGF1dGhBY3Rpb25zLnNpZ25PdXQoKSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyVGl0bGUoY3VycmVudFVzZXIpIHtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgIHJldHVybiAn157Xqdeq157XqSc7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50VXNlci5maXJzdE5hbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihjdXJyZW50VXNlciwgcGhvdG9VUkwsIG5hdmlnYXRlVG8sIHNpZ25PdXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS01IHNtYWxsLTEwIGNvbHVtbiB1c2VyLWluZm9cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXtwaG90b1VSTH0gb25DbGljaz17bmF2aWdhdGVUby5iaW5kKHRoaXMsIG5hdmlnYXRpb25Db25zdGFudHMuUEFHRVMuRURJVF9VU0VSX0lORk8udmFsKX0vPlxuICAgICAgICAgICAgPHNwYW4+16nXnNeV150gPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1uYW1lXCI+e2dldFVzZXJUaXRsZShjdXJyZW50VXNlcil9PC9zcGFuPjxzcGFuPiB8IDwvc3Bhbj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRpc2Nvbm5lY3RcIiBvbkNsaWNrPXtzaWduT3V0fT7XlNeq16DXqtenPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTbWFsbE1lbnVGb3JNb2JpbGUodG9nZ2xlTWVudVZpc2liaWxpdHkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctZm9yLXNtYWxsLW9ubHkgZmxvYXQtbGVmdFwiIGtleT1cImFkbWluLW1lbnUtaWNvblwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic21hbGwtbWVudSBidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNZW51VmlzaWJpbGl0eX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudShwYWdlcywgY3VycmVudFBhZ2UsIG5hdmlnYXRlVG8sIGlzQWRtaW4sIGlzTWVudVZpc2libGUsIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZXNrdG9wTWVudUl0ZW0ocGFnZSkge1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgYWN0aXZlOiBjdXJyZW50UGFnZSA9PT0gcGFnZS52YWwsXG4gICAgICAgICAgICBidXR0b246IHRydWUsXG4gICAgICAgICAgICBzbWFsbDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpdGVtQ2xhc3Nlc30gb25DbGljaz17bmF2aWdhdGVUby5iaW5kKHRoaXMsIHBhZ2UudmFsKX0ga2V5PXsncGFnZS0nICsgcGFnZS52YWx9PlxuICAgICAgICAgICAgICAgIHsgbmF2aWdhdGlvbkNvbnN0YW50cy5UUkFOU0xBVElPTlNbcGFnZS52YWxdIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2JpbGVNZW51SXRlbShwYWdlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBhY3RpdmU6IGN1cnJlbnRQYWdlID09PSBwYWdlLnZhbCxcbiAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvbk1vYmlsZU1lbnVDbGlja2VkID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdGVUbyhwYWdlLnZhbCk7XG4gICAgICAgICAgICB0b2dnbGVNZW51VmlzaWJpbGl0eSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2l0ZW1DbGFzc2VzfSBvbkNsaWNrPXtvbk1vYmlsZU1lbnVDbGlja2VkfSBrZXk9eydwYWdlLScgKyBwYWdlLnZhbH0+XG4gICAgICAgICAgICAgICAgeyBuYXZpZ2F0aW9uQ29uc3RhbnRzLlRSQU5TTEFUSU9OU1twYWdlLnZhbF0gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlc2t0b3BNZW51KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IGJ1dHRvbi1ncm91cCBoaWRlLWZvci1zbWFsbC1vbmx5XCIga2V5PVwiYWRtaW4tbWVudVwiPlxuICAgICAgICAgICAgICAgIHsgXyhwYWdlcykucGlja0J5KCd2aXNpYmxlJykubWFwKGNyZWF0ZURlc2t0b3BNZW51SXRlbSkudmFsdWUoKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2JpbGVNZW51KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51IGJ1dHRvbi1ncm91cCBzdGFja2VkLWZvci1zbWFsbCBzaG93LWZvci1zbWFsbC1vbmx5XCIga2V5PVwiYWRtaW4tbWVudS1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICB7IF8ocGFnZXMpLnBpY2tCeSgndmlzaWJsZScpLm1hcChjcmVhdGVNb2JpbGVNZW51SXRlbSkudmFsdWUoKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS03IHNtYWxsLTEyIGNvbHVtbiB2ZXJ0aWNhbCBjb2xsYXBzZWRcIj5cbiAgICAgICAgICAgIHsgaXNBZG1pbiA/IGNyZWF0ZURlc2t0b3BNZW51KCkgOiBudWxsIH1cbiAgICAgICAgICAgIHsgaXNBZG1pbiAmJiBpc01lbnVWaXNpYmxlID8gY3JlYXRlTW9iaWxlTWVudSgpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIFRvcEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc01lbnVWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudVZpc2liaWxpdHkoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNNZW51VmlzaWJsZTogIXRoaXMuc3RhdGUuaXNNZW51VmlzaWJsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXIgcm93IHNtYWxsLWNvbGxhcHNlIGhpZGUtZm9yLXByaW50XCI+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVIZWFkZXIodGhpcy5wcm9wcy5jdXJyZW50VXNlciwgdGhpcy5wcm9wcy5waG90b1VSTCwgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvLCB0aGlzLnByb3BzLnNpZ25PdXQpIH1cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuaXNBZG1pbiA/IGNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSh0aGlzLnRvZ2dsZU1lbnVWaXNpYmlsaXR5LmJpbmQodGhpcykpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVNZW51KG5hdmlnYXRpb25Db25zdGFudHMuUEFHRVMsIHRoaXMucHJvcHMuY3VycmVudFBhZ2UsIHRoaXMucHJvcHMubmF2aWdhdGVUbywgdGhpcy5wcm9wcy5pc0FkbWluLCB0aGlzLnN0YXRlLmlzTWVudVZpc2libGUsIHRoaXMudG9nZ2xlTWVudVZpc2liaWxpdHkuYmluZCh0aGlzKSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Ub3BCYXIucHJvcFR5cGVzID0ge1xuICAgIHBob3RvVVJMOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzQWRtaW46IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGN1cnJlbnRQYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hdmlnYXRlVG86IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIHNpZ25PdXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVG9wQmFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90b3BCYXIuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi90b3BCYXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi90b3BCYXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvcEJhci5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvcC1iYXIge1xcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcXG4gIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAudG9wLWJhciBzcGFuIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAudG9wLWJhciAudXNlci1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XFxuICAudG9wLWJhciAuc21hbGwtbWVudSB7XFxuICAgIGJhY2tncm91bmQ6ICNENTAwMDA7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG4gIC50b3AtYmFyIC5tZW51IHtcXG4gICAgbWFyZ2luLXRvcDogMC42cmVtOyB9XFxuICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24ge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7IH1cXG4gICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uLnNtYWxsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxcbiAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b246aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNEMzJGMkY7IH1cXG4gICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uLmFjdGl2ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDMyRjJGO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24uYWN0aXZlOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gIC50b3AtYmFyIC5hdmF0YXIge1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAudG9wLWJhciAuZGlzY29ubmVjdCB7XFxuICAgIGNvbG9yOiAjRjQ0MzM2OyB9XFxuICAgIC50b3AtYmFyIC5kaXNjb25uZWN0OmhvdmVyIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpdGUge1xcbiAgZGlyZWN0aW9uOiBydGw7IH1cXG4gIC5zaXRlIC5zcGxpdC5idXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMTZweDsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uIGkge1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24uZmFjZWJvb2sge1xcbiAgICAgIGJhY2tncm91bmQ6ICMzYjU5OTg7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5nb29nbGUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNkNTBmMjU7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5sZWZ0LWljb24ge1xcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAgICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5sZWZ0LWljb24gc3BhbiB7XFxuICAgICAgICBsZWZ0OiAwOyB9XFxuICAuc2l0ZSAuZXJyb3ItbXNnIHtcXG4gICAgY29sb3I6ICNkNTBmMjU7XFxuICAgIHBhZGRpbmc6IDAgMTVweCAxNXB4OyB9XFxuICAgIC5zaXRlIC5lcnJvci1tc2cgaSB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IH1cXG4gIC5zaXRlIGxhYmVsIHtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcbiAgLnNpdGUgLm1vcmUtc3BhY2Uge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4OyB9XFxuICAuc2l0ZSAuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogI0VGNTM1MDtcXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICNEMzJGMkY7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBoZWlnaHQ6IDMuM2VtO1xcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5zaXRlIC5oZWFkZXIgLmhlYWRlci10aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgIGZsZXg6IDE7IH1cXG4gIC5zaXRlIC5iYWNrLWJ0biB7XFxuICAgIHdpZHRoOiAyMHB4OyB9XFxuICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAubGlzdC1pdGVtOm50aC1jaGlsZChldmVuKSB7XFxuICAgICAgYmFja2dyb3VuZDogI0VFRUVFRTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmxpc3QtaXRlbTpudGgtY2hpbGQob2RkKSB7XFxuICAgICAgYmFja2dyb3VuZDogI0UwRTBFMDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudS5zbWFsbC10ZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH0gfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudSBsaSBhIHtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGNvbG9yOiAjRDMyRjJGOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51IGxpLmFjdGl2ZSBhIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRDMyRjJGO1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51IGxpLmFjdGl2ZTpob3ZlciB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLnNlYXJjaCB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjkzNWVtO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMC45MzVlbTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAuc2VhcmNoLWlucHV0IHtcXG4gICAgICB0ZXh0LWluZGVudDogMzBweDsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAuc2VhcmNoLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDExcHg7XFxuICAgICAgcmlnaHQ6IDI4cHg7XFxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICBjb2xvcjogI2NhY2FjYTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEMzJGMkY7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMjVzIGVhc2Utb3V0LCBjb2xvciAuMjVzIGVhc2Utb3V0O1xcbiAgICAgIHBhZGRpbmc6IC44NWVtO1xcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgIHdpZHRoOiAzLjVyZW07XFxuICAgICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgIGJvdHRvbTogMXJlbTsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bi5iaWcge1xcbiAgICAgICAgbGVmdDogMjclOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuLnNtYWxsIHtcXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgICAgIGxlZnQ6IDUlOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNENTAwMDA7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG46Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlci1zdGF0dXMge1xcbiAgICAgIGNvbG9yOiAjNDI0MjQyO1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlci1zdGF0dXMgaSB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyB9XFxuICAuc2l0ZSAuYnV0dG9uLnN1Y2Nlc3NbZGlzYWJsZWRdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzI1YTM1YSAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBlcnJvclJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9lcnJvclJlZHVjZXInO1xuaW1wb3J0IGxvYWRpbmdSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvbG9hZGluZ1JlZHVjZXInO1xuaW1wb3J0IHVzZXJzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3VzZXJzUmVkdWNlcic7XG5pbXBvcnQgZXZlbnRzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2V2ZW50c1JlZHVjZXInO1xuaW1wb3J0IGJvb2tpbmdzUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2Jvb2tpbmdzUmVkdWNlcic7XG5pbXBvcnQgYXV0aERhdGFSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYXV0aERhdGFSZWR1Y2VyJztcbmltcG9ydCBuYXZpZ2F0aW9uUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL25hdmlnYXRpb25SZWR1Y2VyJztcblxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHtcbiAgY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGN1cnJlbnRQYWdlOiBuYXZpZ2F0aW9uUmVkdWNlcixcbiAgICBhdXRoRGF0YTogYXV0aERhdGFSZWR1Y2VyLFxuICAgIGVycm9yTXNnOiBlcnJvclJlZHVjZXIsXG4gICAgbG9hZGluZzogbG9hZGluZ1JlZHVjZXIsXG4gICAgdXNlcnM6IHVzZXJzUmVkdWNlcixcbiAgICBldmVudHM6IGV2ZW50c1JlZHVjZXIsXG4gICAgYm9va2luZ3M6IGJvb2tpbmdzUmVkdWNlclxuICB9KTtcblxuICBjb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKFxuICAgIHRodW5rXG4gICk7XG5cbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB1bmRlZmluZWQsIG1pZGRsZXdhcmUpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvbWFrZVN0b3JlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWR1eDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNUQVJUX0xPQURJTkcsIFJFUE9SVF9FUlJPUiB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSAnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXJyb3JSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVBPUlRfRVJST1I6XG4gICAgICByZXR1cm4gYWN0aW9uLm1lc3NhZ2U7XG4gICAgY2FzZSBTVEFSVF9MT0FESU5HOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU1RBUlRfTE9BRElORywgU1RPUF9MT0FESU5HIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkaW5nUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU1RBUlRfTE9BRElORzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGNhc2UgU1RPUF9MT0FESU5HOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvbG9hZGluZ1JlZHVjZXIuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBVU0VSU19SRUNFSVZFRCwgVVNFUl9SRU1PVkVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlcnNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVU0VSU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLnVzZXJzKTtcbiAgICBjYXNlIFVTRVJfUkVNT1ZFRDpcbiAgICAgIHJldHVybiBfLm9taXQoc3RhdGUsIGFjdGlvbi51aWQpO1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgRVZFTlRTX1JFQ0VJVkVELCBFVkVOVF9SRU1PVkVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRVZFTlRTX1JFQ0VJVkVEOlxuICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24uZXZlbnRzKTtcbiAgICBjYXNlIEVWRU5UX1JFTU9WRUQ6XG4gICAgICByZXR1cm4gXy5vbWl0KHN0YXRlLCBhY3Rpb24uZXZlbnRJZCk7XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgQk9PS0lOR1NfUkVDRUlWRUQsIEJPT0tJTkdfQ0FOQ0VMRUQsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudHNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBCT09LSU5HU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLmJvb2tpbmdzKTtcbiAgICBjYXNlIEJPT0tJTkdfQ0FOQ0VMRUQ6IHtcbiAgICAgIGNvbnN0IGNsb25lZEJvb2tpbmdzID0gXy5jbG9uZURlZXAoc3RhdGUpO1xuICAgICAgZGVsZXRlIGNsb25lZEJvb2tpbmdzW2FjdGlvbi51aWRdW2FjdGlvbi5ldmVudElkXTtcbiAgICAgIGlmIChfLnNpemUoY2xvbmVkQm9va2luZ3NbYWN0aW9uLnVpZF0pID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBjbG9uZWRCb29raW5nc1thY3Rpb24udWlkXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZWRCb29raW5ncztcbiAgICB9XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJpbXBvcnQgeyBTRVRfQVVUSF9EQVRBLCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhdXRoRGF0YVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9BVVRIX0RBVEE6XG4gICAgICByZXR1cm4geyB1aWQ6IGFjdGlvbi51aWQsIGVtYWlsOiBhY3Rpb24uZW1haWwsIHBob3RvVVJMOiBhY3Rpb24ucGhvdG9VUkwsIGlzQWRtaW46IGFjdGlvbi5pc0FkbWluIH07XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoRGF0YVJlZHVjZXIuanMiLCJpbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IE5BVklHQVRFX1RPLCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBDb25zdGFudHMuUEFHRVMuQVVUSC52YWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmlnYXRpb25SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBOQVZJR0FURV9UTzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGFnZTtcbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL25hdmlnYXRpb25SZWR1Y2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWR1eFRodW5rO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVkdXhUaHVua1wiXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmaXJlYmFzZVwiOiB7XG5cdFx0XCJhcGlLZXlcIjogXCJBSXphU3lERUlTVjJhTWllUGt1ZUN3bERSOENWZzdoX0JMYTNKb2NcIixcblx0XHRcImF1dGhEb21haW5cIjogXCJoYXBvZWxidXMtYjI1ZDQuZmlyZWJhc2VhcHAuY29tXCIsXG5cdFx0XCJkYXRhYmFzZVVSTFwiOiBcImh0dHBzOi8vaGFwb2VsYnVzLWIyNWQ0LmZpcmViYXNlaW8uY29tXCIsXG5cdFx0XCJzdG9yYWdlQnVja2V0XCI6IFwiaGFwb2VsYnVzLWIyNWQ0LmFwcHNwb3QuY29tXCJcblx0fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25maWcvY29uZmlnLnByb2QuanNvblxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==