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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	module.exports = {
	  SUBMIT: 'שמור',
	  REMOVE: 'מחק'
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "formFrameTranslations.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 22 */
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 43 */
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
/* 44 */
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
/* 52 */
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
	
	    if (isAdmin && user.seasonTickets) {
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
	  ALL: function ALL(user) {
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
	      console.error(dbError);
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
	
	var _userActions = __webpack_require__(52);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "updatePhotoUrlFixer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
	    bookings: 'רשומית להסעות',
	    distribution: 'רשימת תפוצה'
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "navigationConstants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmUwYThmOTBhYWQ1YzU5NmQxZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb290L3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LnJ0Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2Nzcz8yMjlmIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0ucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybUZyYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzPzI1ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL2Zvcm1GcmFtZVRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2Nzcz83OTVkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2Uuc2Nzcz9jOWYwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbG9hZGluZ0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NwaW5uZXIuanN4Iiwid2VicGFjazovLy8uL34vY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2Nzcz9jYWM0Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xvZ28uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dhbWVDb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Jvb2tpbmdzQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90ZWFtc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzcz8yZGQ0Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ0Zvcm0vYm9va2luZ0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ0Zvcm0vYm9va2luZ0Zvcm0ucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlckZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy91c2VySW5mb0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL3VzZXJGb3JtVHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnNjc3M/OGI1OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5ydCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLnNjc3M/MTQ0YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2Uuc2Nzcz84MjNiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbmF2aWdhdGlvbkFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGFGaXhlcnMvdXBkYXRlUGhvdG9VcmxGaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5zY3NzP2IzZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VkaXRVc2VySW5mb1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnNjc3M/YTg4YyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9kaXN0cmlidXRpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy90b3BCYXIuc2Nzcz8zNDJlIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5zY3NzP2RmMWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9tYWtlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvdXNlcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvbmF2aWdhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVkdXhUaHVua1wiIiwid2VicGFjazovLy8uL3NyYy9jb25maWcvY29uZmlnLnByb2QuanNvbiJdLCJuYW1lcyI6WyJjb25maWciLCJjbGllbnREQiIsImluaXRpYWxpemUiLCJmaXJlYmFzZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUm9vdCIsImFwcGx5IiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1hcFN0YXRlVG9Qcm9wcyIsImF1dGhEYXRhIiwic3RhdGUiLCJjdXJyZW50UGFnZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBdXRoRGF0YSIsIkFwcCIsInByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJfIiwiQ29uc3RhbnRzIiwicGlja0V2ZW50cyIsIkFMTCIsImV2ZW50Iiwic3RhdHVzIiwiRVZFTlRTX1NUQVRVUyIsIk9QRU5fRk9SX0FMTCIsInZhbHVlIiwiT1BFTl9GT1JfTUVNQkVSUyIsIkNMT1NFRCIsImdldFN0YXR1c1N1YnRpdGxlIiwiZXZlbnRTdGF0dXMiLCJmaW5kIiwibmFtZSIsImV2ZW50cyIsImNyZWF0ZUV2ZW50IiwidXBkYXRlRXZlbnQiLCJldmVudElkIiwicmVtb3ZlRXZlbnQiLCJFdmVudHNQYWdlIiwiZWRpdGluZ0V2ZW50SWQiLCJjcmVhdGVNb2RlIiwiZmlsdGVyIiwiY2hhaW4iLCJwaWNrQnkiLCJtYXAiLCJzZXRTdGF0ZSIsIkVWRU5UU19UWVBFUyIsInR5cGVJZCIsImRheSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJtaW51dGUiLCJldmVudFR5cGUiLCJzcmMiLCJzdG9wRWRpdGluZyIsIm9iamVjdCIsInJlcXVpcmUiLCJSZWFjdCIsIkxpc3RJdGVtIiwib25DbGljayIsImltYWdlU3JjIiwidGl0bGUiLCJzdWJ0aXRsZXMiLCJzdWJ0aXRsZSIsImtleSIsInN0cmluZyIsImFycmF5IiwiZW1wdHlFdmVudCIsImV2ZW50Rm9ybSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJvblN1Ym1pdCIsIm9uUmVtb3ZlRXZlbnQiLCJvbkNsb3NlIiwiaXNBZG1pbk1vZGUiLCJib29sIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZGVmYXVsdHMiLCJkYXRlSW5wdXRTdXBwb3J0ZWQiLCJ0aW1lSW5wdXRTdXBwb3J0ZWQiLCJjb21wb25lbnREaWRNb3VudCIsImNoZWNrSWZIdG1sNVN1cHBvcnRlZCIsIm9uQ2hhbmdlIiwiZSIsInZhbGlkYXRpb25UeXBlIiwidGFyZ2V0IiwidGVzdCIsImdldEV2ZW50UGljdHVyZSIsImdldCIsIkVWRU5UX0RFRkFVTFRfUElDIiwiZ2V0VGltZVZhbHVlIiwicGljayIsImpvaW4iLCJvblRpbWVDaGFuZ2UiLCJ2YWwiLCJzcGxpdCIsImdldERhdGVWYWx1ZSIsIm9uTnVtZXJpY0NoYW5nZSIsInRvTnVtYmVyIiwic3VwcG9ydGVkSW5wdXRUeXBlcyIsInRlc3RSZXN1bHQiLCJ0ZXN0U3RyaW5nIiwiZWFjaCIsImlucHV0VHlwZSIsImlucHV0IiwidHlwZSIsImlzU3VwcG9ydGVkIiwib25EYXRlQ2hhbmdlIiwib25Cb29sZWFuQ2hhbmdlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJpc0Zvcm1WYWxpZCIsIm9taXQiLCJmb3JtRnJhbWVUcmFuc2xhdGlvbnMiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVCYWNrQnV0dG9uIiwiaXNGdW5jdGlvbiIsImNyZWF0ZUFjdGlvbnNCdXR0b25zIiwiZGlzYWJsZWQiLCJvblJlbW92ZSIsImNyZWF0ZVJlbW92ZUJ1dHRvbiIsIlJFTU9WRSIsIlNVQk1JVCIsIkZvcm1GcmFtZSIsImNoaWxkcmVuIiwiRVJST1JTIiwiR0VORVJBTCIsIklOVkFMSURfTUFJTCIsIldFQUtfUEFTU1dPUkQiLCJFTUFJTF9JTl9VU0UiLCJXUk9OR19QQVNTV09SRCIsIk5PVF9TQU1FX1BBU1NXT1JEIiwiVVNFUl9OT1RfRk9VTkQiLCJEQVRFX1RJTUVfREFUQSIsImRheXMiLCJtb250aHMiLCJ5ZWFycyIsImhvdXJzIiwibWludXRlcyIsIlNUQVRJT05TIiwibW9kaWluIiwidGx2IiwiTUFYX1NFQVNPTl9USUNLRVRTIiwiTUFYX0VYVFJBX1BBU1NFTkdFUlMiLCJQSE9ORV9QUkVGSVhFUyIsIlBBR0VTIiwiSE9NRSIsInZpc2libGUiLCJBVVRIIiwiVVNFUlMiLCJFVkVOVFMiLCJCT09LSU5HUyIsIkRJU1RSSUJVVElPTiIsIkVESVRfVVNFUl9JTkZPIiwiRlVMTFlfQk9PS0VEIiwiUkVDSVBJRU5UUyIsIk1FTUJFUlNfT05MWSIsIkJPT0tFRF9UT19FVkVOVCIsIk1FVEhPRFMiLCJFTUFJTCIsIlNNUyIsIlRZUEVTIiwiVEVNUExBVEUiLCJDVVNUT00iLCJURU1QTEFURVMiLCJFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTIiwiaWQiLCJFVkVOVF9PUEVOX0ZPUl9BTEwiLCJDSEFOR0VfRVZFTlRfREVUQUlMUyIsImxvYWRpbmdBY3Rpb25zIiwiZXJyb3JBY3Rpb25zIiwiRVZFTlRfS0VZUyIsIkVWRU5UU19QQVRIIiwiZXZlbnRSZW1vdmVkIiwiZXZlbnRzUmVjZWl2ZWQiLCJmZXRjaEV2ZW50cyIsInJlYWQiLCJ0aGVuIiwic3RhcnRMb2FkaW5nIiwicHVzaCIsImNhdGNoIiwicmVwb3J0RXJyb3IiLCJmaW5hbGx5Iiwic3RvcExvYWRpbmciLCJldmVudFRvVXBkYXRlIiwidXBkYXRlIiwicmVtb3ZlIiwiU1RBUlRfTE9BRElORyIsIlNUT1BfTE9BRElORyIsIlJFUE9SVF9FUlJPUiIsIlNFVF9BVVRIX0RBVEEiLCJTSUdOX09VVCIsIlVTRVJTX1JFQ0VJVkVEIiwiVVNFUl9SRU1PVkVEIiwiRVZFTlRTX1JFQ0VJVkVEIiwiRVZFTlRfUkVNT1ZFRCIsIkJPT0tJTkdTX1JFQ0VJVkVEIiwiQk9PS0lOR19DQU5DRUxFRCIsIk5BVklHQVRFX1RPIiwiaW5pdGlhbGl6ZUFwcCIsInNldEluIiwicGF0aCIsImRhdGEiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YWJhc2UiLCJyZWYiLCJzZXQiLCJvbmNlIiwic25hcHNob3QiLCJ1bmlxdWVLZXkiLCJsb2dpbldpdGhHb29nbGUiLCJwcm92aWRlciIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJsb2dpbldpdGhGYWNlYm9vayIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwibG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiZ2V0TG9nZ2VkSW5Vc2VyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXN1bHQiLCJ1c2VyIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm1lc3NhZ2UiLCJSZWFjdFJlZHV4IiwiY2xhc3NOYW1lcyIsIkxvZ28iLCJpc0xvYWRpbmciLCJsb2FkaW5nIiwiU3Bpbm5lciIsIm92ZXJsYXlDbGFzcyIsIm92ZXJsYXkiLCJoaWRlIiwiY29ubmVjdCIsIndpZHRoIiwib3BhY2l0eSIsIm51bWJlciIsImhlaWdodCIsInRlYW1zRGF0YSIsInBhcnNlRXZlbnREYXRlIiwiZXZlbnREYXRlIiwiRGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJpc0Z1dHVyZUV2ZW50Iiwibm93IiwidXNlcnMiLCJib29raW5ncyIsInVwZGF0ZUJvb2tpbmciLCJ1aWQiLCJib29raW5nIiwiY2FuY2VsQm9va2luZyIsInVwZGF0ZVVzZXIiLCJIb21lUGFnZSIsIm9taXRCeSIsInNvcnRCeSIsImV2ZW50RGF0YSIsInNlYXNvblRpY2tldHMiLCJ1c2VyQm9va2luZ3MiLCJoYXMiLCJwaG90b1VSTCIsIkhBUE9FTF9KRVJVU0FMRU0iLCJnYW1lc0NvbnN0YW50cyIsImJvb2tpbmdzQ29uc3RhbnRzIiwiaXNCb29raW5nRW5hYmxlZCIsIlNUQVRVUyIsIm93blByb3BzIiwiaG9tZVRlYW0iLCJhd2F5VGVhbSIsImRhdGUiLCJ0aW1lIiwiaXNCb29raW5nQWxsb3dlZCIsImlzQm9va2VkIiwiaGFzSW4iLCJjcmVhdGVUZWFtTG9nb3MiLCJob21lIiwiYXdheSIsImxvZ28iLCJsYWJlbCIsImNyZWF0ZUV2ZW50VGltZUFuZERhdGUiLCJpc09wZW5Gb3JCb29raW5nIiwiY3JlYXRlRnVsbHlCb29rZWRMYWJlbCIsIlRSQU5TTEFUSU9OUyIsImZ1bGx5Qm9va2VkIiwiY3JlYXRlQm9va2luZ0J1dHRvbiIsIm9uQm9va2luZyIsImJvb2tCdXR0b24iLCJib29rIiwiZWRpdEJvb2tpbmdCdXR0b24iLCJlZGl0Qm9va2luZyIsImNyZWF0ZUJvb2tpbmdDYW5jZWxsYXRpb25CdXR0b24iLCJvbkNhbmNlbEJvb2tpbmciLCJFdmVudEl0ZW0iLCJpc0Z1bGx5Qm9va2VkIiwic2hhcGUiLCJjbG9zZWQiLCJvcGVuRm9yTWVtYmVycyIsIm9wZW5Gb3JBbGwiLCJlbXB0eUJvb2tpbmciLCJwYWlkU2VhdHMiLCJleHRyYVNlYXRzIiwicGlja1VwIiwiZHJvcE9mZiIsImJvb2tpbmdGb3JtIiwib25Cb29raW5nQ2FuY2VsIiwibWVyZ2UiLCJwaWNrVXBFbmFibGVkIiwiZHJvcE9mZkVuYWJsZWQiLCJ0b2dnbGVQaWNrVXAiLCJ0b2dnbGVEcm9wT2ZmIiwiYm9va2luZ1RvU3VibWl0Iiwia2V5cyIsInVzZXJJbmZvQ29uc3RhbnRzIiwidXNlckZvcm1UcmFuc2xhdGlvbnMiLCJ1c2VyQWN0aW9ucyIsImVtcHR5VXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGhvbmVQcmVmaXgiLCJwaG9uZU51bWJlciIsInN0YXRpb24iLCJzdWJzY3JpYmVTTVMiLCJzdWJzY3JpYmVNYWlsIiwiZ2V0RW1wdHlVc2VySW5mbyIsImFzc2lnbiIsInVzZXJJbmZvIiwiaXNBZG1pbiIsImFsbG93VXNlclJlbW92ZSIsInJlbW92ZVVzZXIiLCJjcmVhdGVBZG1pblNlY3Rpb24iLCJvbk51bWJlckNoYW5nZSIsInRpbWVzIiwiaSIsImNyZWF0ZVVzZXJOYW1lSW5wdXRzIiwib25UZXh0Q2hhbmdlIiwiRklSU1RfTkFNRSIsIkxBU1RfTkFNRSIsImNyZWF0ZUVtYWlsSW5wdXQiLCJjcmVhdGVQaG9uZU51bWJlcklucHV0cyIsIlBIT05FX05VTUJFUiIsIlBIT05FX1BSRUZJWCIsInByZWZpeCIsImNyZWF0ZVBpY2t1cFN0YXRpb25Sb3ciLCJyZXF1ZXN0Rm9yTWVtYmVyc2hpcCIsImNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCIsIkZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OIiwiY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCIsIlJFUVVFU1RfRk9SX01FTUJFUlNISVAiLCJ1bmRlZmluZWQiLCJkaXNwbGF5IiwiY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzIiwiVE9HR0xFIiwiWUVTIiwiTk8iLCJVc2VyRm9ybSIsImhhc0FsbFJlcXVpcmVkSW5mbyIsInJlcXVpcmVkSW5mbyIsInNvbWUiLCJpc0VtcHR5IiwiaGFzVmFsaWRQaG9uZU51bWJlciIsImxlbmd0aCIsImhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkiLCJvbktleVByZXNzIiwicGFyc2VJbnQiLCJjbG9uZSIsImJpbmQiLCJUSVRMRSIsIlVTRVJfSU5GT19LRVlTIiwiUEFUSF9NQVAiLCJVU0VSU19JTkZPIiwiU0VBU09OX1RJQ0tFVFMiLCJidWlsZFVzZXIiLCJmZXRjaEFsbFVzZXJzIiwidXNlclJlYWRQcm9taXNlcyIsImFsbCIsInVzZXJzSW5mbyIsInRyYW5zZm9ybSIsImFjYyIsImluZm8iLCJmZXRjaFNpbmdsZVVzZXIiLCJ1c2Vyc1JlbW92ZWQiLCJ1c2Vyc1JlY2VpdmVkIiwiZmV0Y2hVc2VycyIsImdldFN0YXRlIiwiZmV0Y2hQcm9taXNlIiwidXNlclVwZGF0ZVByb21pc2VzIiwidXNlclJlbW92ZVByb21pc2VzIiwidXNlclBhdGgiLCJCT09LSU5HX0RBVEFfS0VZUyIsIkJPT0tJTkdTX1BBVEgiLCJmZXRjaFVzZXJCb29raW5ncyIsImZldGNoQWxsQm9va2luZ3MiLCJib29raW5nc1JlY2VpdmVkIiwiYm9va2luZ3NDYW5jZWxlZCIsImZldGNoQm9va2luZ3MiLCJib29raW5nRGF0YSIsImJvb2tpbmdEYXRhVG9VcGRhdGUiLCJwaWNrVXNlcnNGdW5jdGlvbnMiLCJNRU1CRVJTIiwiTk9OX01FTUJFUlMiLCJSRVFVRVNUUyIsIlVzZXJzUGFnZSIsImVkaXRpbmdVc2VySWQiLCJzZWFyY2hRdWVyeSIsInN0YXJ0c1dpdGgiLCJ2YWx1ZXMiLCJzdW1CeSIsInNpemUiLCJjb25zdGFudHMiLCJlcnJvck1zZyIsImxvZ2luV2l0aEVtYWlsIiwic2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZCIsIm1zZyIsIkF1dGhGb3JtIiwicGFzc3dvcmRBZ2FpbiIsImF1dGhNb2RlIiwiaXNMb2dpbk1vZGUiLCJnZXRCdXR0b25MYWJlbCIsImhhbmRsZUtleURvd24iLCJrZXlDb2RlIiwiaXNTdWJtaXREaXNhYmxlZCIsImhhbmRsZVN1Ym1pdENsaWNrIiwiZ29Ub0xvZ2luIiwiZ29Ub1JlZ2lzdGVyIiwiZ29Ub0ZvcmdvdFBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVSZWdpc3RlciIsImlzRXF1YWwiLCJoYW5kbGVGb3Jnb3RQYXNzd29yZCIsImV2ZW50QWN0aW9ucyIsImJvb2tpbmdBY3Rpb25zIiwibmF2aWdhdGlvbkFjdGlvbnMiLCJBVVRIX0VSUk9SX0NPREVTX01BUCIsInNldEF1dGhEYXRhIiwiZmV0Y2hBcHBEYXRhIiwidXNlclNpZ25lZE91dCIsIm5hdmlnYXRlVG8iLCJkYkVycm9yIiwiY29kZSIsImNvbnNvbGUiLCJlcnJvciIsInBhZ2UiLCJnZXREcm9wT2ZmTWFwIiwiZ2V0UGlja1VwTWFwIiwiQm9va2luZ3NQYWdlIiwiZmluZEtleSIsImJvb2tpbmdGb3JFdmVudE1hcCIsIm1hcFZhbHVlcyIsImlzVW5kZWZpbmVkIiwiY3VycmVudEV2dCIsImdldEJvb2tpbmdQaG9uZSIsInZpc2libGVCb29raW5ncyIsImdldFZpc2libGVCb29raW5ncyIsInRsdlBpY2tVcHNQYWlkIiwidGx2UGlja1Vwc0V4dHJhIiwibW9kaWluUGlja1Vwc1BhaWQiLCJtb2RpaW5QaWNrVXBzRXh0cmEiLCJ0bHZEcm9wT2Zmc1BhaWQiLCJ0bHZEcm9wT2Zmc0V4dHJhIiwibW9kaWluRHJvcE9mZnNQYWlkIiwibW9kaWluRHJvcE9mZnNFeHRyYSIsIm5hdmlnYXRpb25Db25zdGFudHMiLCJwYWdlSWQiLCJFZGl0b3JVc2VySW5mb1BhZ2UiLCJvbkZvcm1DbG9zZSIsImRpc3RyaWJ1dGlvbiIsImdldE1lbWJlcnNVc2Vyc09ubHkiLCJnZXRCb29rZWRVc2Vyc09ubHkiLCJnZXRSZWNpcGllbnRzIiwicmVjaXBpZW50c1R5cGUiLCJyZWNpcGllbnRzVXNlcnMiLCJnZXRVc2Vyc0VtYWlscyIsInJlY2lwaWVudHMiLCJnZXRVc2Vyc1Bob25lTnVtYmVycyIsImdldEV2ZW50U3Vic3RpdHV0aW9ucyIsInByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQiLCJjb250ZW50IiwicmVwbGFjZSIsImRpc3RyaWJ1dGlvbk1ldGhvZCIsImRpc3RyaWJ1dGlvblR5cGUiLCJsYXN0IiwidGVtcGxhdGVJZCIsInN1YmplY3QiLCJzZW5kVGVtcGxhdGVFbWFpbCIsInN1YnN0aXR1dGlvbnMiLCJzZW5kQ3VzdG9tRW1haWwiLCJzZW5kU01TIiwiRGlzdHJpYnV0aW9uUGFnZSIsImdldE9wZW5FdmVudHMiLCJpc0Rpc3RyaWJ1dGlvblR5cGVWaXNpYmxlIiwiRU1BSUxTIiwidG8iLCJhdXRoQWN0aW9ucyIsImN1cnJlbnRVc2VyIiwiZ2V0VXNlclRpdGxlIiwiY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlIiwidG9nZ2xlTWVudVZpc2liaWxpdHkiLCJjcmVhdGVNZW51IiwicGFnZXMiLCJpc01lbnVWaXNpYmxlIiwiY3JlYXRlRGVza3RvcE1lbnVJdGVtIiwiaXRlbUNsYXNzZXMiLCJhY3RpdmUiLCJidXR0b24iLCJzbWFsbCIsImNyZWF0ZU1vYmlsZU1lbnVJdGVtIiwib25Nb2JpbGVNZW51Q2xpY2tlZCIsImNyZWF0ZURlc2t0b3BNZW51IiwiY3JlYXRlTW9iaWxlTWVudSIsIlRvcEJhciIsIm1ha2VTdG9yZSIsInJlZHVjZXJzIiwibWlkZGxld2FyZSIsImVycm9yUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsImxvYWRpbmdSZWR1Y2VyIiwidXNlcnNSZWR1Y2VyIiwiZXZlbnRzUmVkdWNlciIsImNsb25lZEJvb2tpbmdzIiwiY2xvbmVEZWVwIiwiYXV0aERhdGFSZWR1Y2VyIiwibmF2aWdhdGlvblJlZHVjZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7S0FBWUEsTTs7QUFDWjs7S0FBWUMsUTs7Ozs7O0FBRVpBLFVBQVNDLFVBQVQsQ0FBb0JGLE9BQU9HLFFBQTNCOztBQUVBLG9CQUFTQyxNQUFULENBQWdCLGdCQUFNQyxhQUFOLGdCQUFoQixFQUEyQ0MsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUEzQyxFOzs7Ozs7OztBQ1RBLHdCOzs7Ozs7QUNBQSwyQjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0tBRU1DLEk7Ozs7Ozs7Ozs7O21DQUNVO0FBQ1osY0FBTywyQkFBUDtBQUNEOzs7OEJBQ1E7QUFDUCxjQUFPLGVBQVNDLEtBQVQsQ0FBZSxJQUFmLENBQVA7QUFDRDs7OztH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QUFNUCxlQUFlLElBQXJCOztBQUVlLFVBQVNPLGVBQVQsR0FBNEQ7QUFBQSxPQUFuQzVnQixLQUFtQyx1RUFBM0JxZ0IsWUFBMkI7QUFBQSxPQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQ3pFLFdBQVFBLE9BQU9uYSxJQUFmO0FBQ0U7QUFDRSxjQUFPLEVBQUV5SixLQUFLMFEsT0FBTzFRLEdBQWQsRUFBbUJ2QyxPQUFPaVQsT0FBT2pULEtBQWpDLEVBQXdDa0QsVUFBVStQLE9BQU8vUCxRQUF6RCxFQUFtRWtFLFNBQVM2TCxPQUFPN0wsT0FBbkYsRUFBUDtBQUNGO0FBQ0UsY0FBTzRMLFlBQVA7QUFDRjtBQUNFLGNBQU9yZ0IsS0FBUDtBQU5KO0FBUUQsRTs7Ozs7Ozs7Ozs7Ozs7O21CQ1J1QjZnQixpQjs7QUFMeEI7O0tBQVlqZ0IsUzs7QUFDWjs7OztBQUVBLEtBQU15ZixlQUFlemYsVUFBVStILEtBQVYsQ0FBZ0JHLElBQWhCLENBQXFCdEQsR0FBMUM7O0FBRWUsVUFBU3FiLGlCQUFULEdBQThEO0FBQUEsT0FBbkM3Z0IsS0FBbUMsdUVBQTNCcWdCLFlBQTJCO0FBQUEsT0FBYkMsTUFBYSx1RUFBSixFQUFJOztBQUMzRSxXQUFRQSxPQUFPbmEsSUFBZjtBQUNFO0FBQ0UsY0FBT21hLE9BQU8xRSxJQUFkO0FBQ0Y7QUFDRSxjQUFPeUUsWUFBUDtBQUNGO0FBQ0UsY0FBT3JnQixLQUFQO0FBTko7QUFRRCxFOzs7Ozs7OztBQ2RELDZCOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJlMGE4ZjkwYWFkNWM1OTZkMWQxIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9jb21wb25lbnRzL3Jvb3Qvcm9vdCc7XG5cbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICdjb25maWcnO1xuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi91dGlscy9jbGllbnREQic7XG5cbmNsaWVudERCLmluaXRpYWxpemUoY29uZmlnLmZpcmViYXNlKTtcblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm9vdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3Jvb3QucnQnO1xuXG5pbXBvcnQgeyBtYWtlU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1eC9tYWtlU3RvcmUnO1xuXG5jbGFzcyBSb290IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY3JlYXRlU3RvcmUoKSB7XG4gICAgcmV0dXJuIG1ha2VTdG9yZSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb290O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jvb3Qvcm9vdC5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAncmVhY3QtcmVkdXgnLFxuICAgICcuLi9hcHAvYXBwJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBSZWFjdFJlZHV4LCBBcHApIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RSZWR1eC5Qcm92aWRlciwgeyAnc3RvcmUnOiB0aGlzLmNyZWF0ZVN0b3JlKCkgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHt9KSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LnJ0XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIl9cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5ydCc7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGZldGNoQXV0aERhdGEgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhLFxuICBjdXJyZW50UGFnZTogc3RhdGUuY3VycmVudFBhZ2Vcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGZldGNoQXV0aERhdGE6ICgpID0+IGRpc3BhdGNoKGZldGNoQXV0aERhdGEoKSlcbn0pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEF1dGhEYXRhKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGZldGNoQXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICdyZWFjdC1yZWR1eCcsXG4gICAgJy4uL3NwaW5uZXInLFxuICAgICcuLi9ob21lUGFnZS9ob21lUGFnZScsXG4gICAgJy4uL3VzZXJzUGFnZS91c2Vyc1BhZ2UnLFxuICAgICcuLi9hdXRoUGFnZS9hdXRoUGFnZScsXG4gICAgJy4uL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZScsXG4gICAgJy4uL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UnLFxuICAgICcuLi9lZGl0VXNlckluZm9QYWdlJyxcbiAgICAnLi4vZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlJyxcbiAgICAnLi4vdG9wQmFyJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9hcHAuc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgUmVhY3RSZWR1eCwgc3Bpbm5lciwgSG9tZVBhZ2UsIFVzZXJzUGFnZSwgQXV0aFBhZ2UsIEV2ZW50c1BhZ2UsIEJvb2tpbmdzUGFnZSwgRWRpdFVzZXJJbmZvUGFnZSwgRGlzdHJpYnV0aW9uUGFnZSwgVG9wQmFyLCBDb25zdGFudHMsIGFwcENzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NpdGUgbGFyZ2UtNiBzbWFsbC0xMiBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChzcGlubmVyLCB7fSksICF0aGlzLnByb3BzLmF1dGhEYXRhID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2tleSc6ICdhdXRoLXBhZ2UtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnXG4gICAgICAgIH0sIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5BVVRILnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0aFBhZ2UsIHsgJ2tleSc6ICdhdXRoLXBhZ2UnIH0pIDogbnVsbCkgOiBudWxsLCB0aGlzLnByb3BzLmF1dGhEYXRhID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2tleSc6ICdhcHAtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9wQmFyLCB7fSksIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5IT01FLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSG9tZVBhZ2UsIHsgJ2tleSc6ICdob21lLXBhZ2UnIH0pIDogbnVsbCwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gQ29uc3RhbnRzLlBBR0VTLlVTRVJTLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlcnNQYWdlLCB7ICdrZXknOiAndXNlcnMtcGFnZScgfSkgOiBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSBDb25zdGFudHMuUEFHRVMuRVZFTlRTLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXZlbnRzUGFnZSwgeyAna2V5JzogJ2V2ZW50cy1wYWdlJyB9KSA6IG51bGwsIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5CT09LSU5HUy52YWwgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tpbmdzUGFnZSwgeyAna2V5JzogJ2Jvb2tpbmdzLXBhZ2UnIH0pIDogbnVsbCwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gQ29uc3RhbnRzLlBBR0VTLkRJU1RSSUJVVElPTi52YWwgPyBSZWFjdC5jcmVhdGVFbGVtZW50KERpc3RyaWJ1dGlvblBhZ2UsIHsgJ2tleSc6ICdkaXN0cmlidXRpb24tcGFnZScgfSkgOiBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSBDb25zdGFudHMuUEFHRVMuRURJVF9VU0VSX0lORk8udmFsID8gUmVhY3QuY3JlYXRlRWxlbWVudChFZGl0VXNlckluZm9QYWdlLCB7ICdrZXknOiAnZWRpdFVzZXJJbmZvUGFnZS1wYWdlJyB9KSA6IG51bGwpIDogbnVsbCk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5ydFxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZXZlbnRzUGFnZS5ydCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlRXZlbnQsIHVwZGF0ZUV2ZW50LCByZW1vdmVFdmVudCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zJztcblxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IHBpY2tFdmVudHMgPSB7XG4gIEFMTDogKCkgPT4gdHJ1ZSxcbiAgWydPUEVOJ106IGV2ZW50ID0+IGV2ZW50LnN0YXR1cyA9PT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfQUxMLnZhbHVlIHx8IGV2ZW50LnN0YXR1cyA9PT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUy52YWx1ZSxcbiAgWydDTE9TRUQnXTogZXZlbnQgPT4gZXZlbnQuc3RhdHVzID09PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5DTE9TRUQudmFsdWUsXG59O1xuXG5jb25zdCBnZXRTdGF0dXNTdWJ0aXRsZSA9IGV2ZW50ID0+IHtcbiAgY29uc3QgZXZlbnRTdGF0dXMgPSBfLmZpbmQoQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMsIHsgdmFsdWU6IGV2ZW50LnN0YXR1cyB9KTtcbiAgcmV0dXJuIGV2ZW50U3RhdHVzID8gZXZlbnRTdGF0dXMubmFtZSA6ICcnO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBldmVudHM6IHN0YXRlLmV2ZW50cyxcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgY3JlYXRlRXZlbnQ6IGV2ZW50ID0+IGRpc3BhdGNoKGNyZWF0ZUV2ZW50KGV2ZW50KSksXG4gIHVwZGF0ZUV2ZW50OiAoZXZlbnRJZCwgZXZlbnQpID0+IGRpc3BhdGNoKHVwZGF0ZUV2ZW50KGV2ZW50SWQsIGV2ZW50KSksXG4gIHJlbW92ZUV2ZW50OiAoZXZlbnRJZCkgPT4gZGlzcGF0Y2gocmVtb3ZlRXZlbnQoZXZlbnRJZCkpXG59KTtcblxuY2xhc3MgRXZlbnRzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0aW5nRXZlbnRJZDogbnVsbCxcbiAgICAgIGNyZWF0ZU1vZGU6IGZhbHNlLFxuICAgICAgZmlsdGVyOiAnT1BFTidcbiAgICB9O1xuICB9XG5cbiAgZ2V0VmlzaWJsZUV2ZW50cygpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLmV2ZW50cylcbiAgICAgIC5waWNrQnkocGlja0V2ZW50c1t0aGlzLnN0YXRlLmZpbHRlcl0pXG4gICAgICAubWFwKChldmVudCwgZXZlbnRJZCkgPT4gKHsgZXZlbnRJZCwgZXZlbnQgfSkpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGdldE9wZW5FdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KHRoaXMucHJvcHMuZXZlbnRzLCBwaWNrRXZlbnRzWydPUEVOJ10pO1xuICB9XG5cbiAgZ2V0Q2xvc2VkRXZlbnRzKCkge1xuICAgIHJldHVybiBfLnBpY2tCeSh0aGlzLnByb3BzLmV2ZW50cywgcGlja0V2ZW50c1snQ0xPU0VEJ10pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXIgfSk7XG4gIH1cblxuICBnZXRFdmVudFRpdGxlKGV2ZW50KSB7XG4gICAgcmV0dXJuIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lO1xuICB9XG5cbiAgZ2V0RXZlbnRTdWJ0aXRsZXMoZXZlbnQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ9eq15DXqNeZ15o6ICcgKyBgJHtldmVudC5kYXl9LyR7ZXZlbnQubW9udGh9LyR7ZXZlbnQueWVhcn1gLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG4gICAgICAn16nXoteUOiAnICsgIGAke2V2ZW50LmhvdXJ9OiR7ZXZlbnQubWludXRlfWAsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1jb25jYXRcbiAgICAgIGdldFN0YXR1c1N1YnRpdGxlKGV2ZW50KVxuICAgIF07XG4gIH1cblxuICBnZXRFdmVudEltYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdO1xuICAgIHJldHVybiBldmVudFR5cGUuc3JjIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMzgvMTM4Nzc2LnN2Zyc7XG4gIH1cblxuICBvbkV2ZW50Q2xpY2soZXZlbnRJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nRXZlbnRJZDogZXZlbnRJZCB9KTtcbiAgfVxuXG4gIG9uQ3JlYXRlRXZlbnRDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JlYXRlTW9kZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0b3BFZGl0aW5nKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nRXZlbnRJZDogbnVsbCwgY3JlYXRlTW9kZTogZmFsc2UgfSk7XG4gIH1cblxuICB1cGRhdGVFdmVudChldmVudCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNyZWF0ZU1vZGUpIHtcbiAgICAgIHRoaXMucHJvcHMuY3JlYXRlRXZlbnQoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUV2ZW50KHRoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWQsIGV2ZW50KTtcbiAgICB9XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoKSB7XG4gICAgdGhpcy5wcm9wcy5yZW1vdmVFdmVudCh0aGlzLnN0YXRlLmVkaXRpbmdFdmVudElkKTtcbiAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbkV2ZW50c1BhZ2UucHJvcFR5cGVzID0ge1xuICBhdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBldmVudHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3JlYXRlRXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZUV2ZW50OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZW1vdmVFdmVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFdmVudHNQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2xpc3RJdGVtJyxcbiAgICAnLi4vZXZlbnRGb3JtL2V2ZW50Rm9ybScsXG4gICAgJy4uLy4uL3V0aWxzL2NvbnN0YW50cycsXG4gICAgJy4vZXZlbnRzUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBsaXN0SXRlbSwgRXZlbnRGb3JtLCBDb25zdGFudHMsIGV2ZW50c1BhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25DbGljazEobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdBTEwnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazIobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdPUEVOJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2szKGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnQ0xPU0VEJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s0KGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykge1xuICAgICAgICB0aGlzLm9uQ3JlYXRlRXZlbnRDbGljaygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNShsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIHtcbiAgICAgICAgdGhpcy5vbkNyZWF0ZUV2ZW50Q2xpY2soKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazYobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzLCBldmVudEl0ZW0sIGV2ZW50SXRlbUluZGV4KSB7XG4gICAgICAgIHRoaXMub25FdmVudENsaWNrKGV2ZW50SXRlbS5ldmVudElkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0RXZlbnRJdGVtNyhsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMsIGV2ZW50SXRlbSwgZXZlbnRJdGVtSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0RXZlbnRUaXRsZShldmVudEl0ZW0uZXZlbnQpLFxuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJdGVtLmV2ZW50SWQsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRFdmVudFN1YnRpdGxlcyhldmVudEl0ZW0uZXZlbnQpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRFdmVudEltYWdlKGV2ZW50SXRlbS5ldmVudCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s2LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzLCBldmVudEl0ZW0sIGV2ZW50SXRlbUluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVWaXNpYmxlRXZlbnRzOChsaXN0Vmlld01vZGUpIHtcbiAgICAgICAgdmFyIHZpc2libGVFdmVudHMgPSB0aGlzLmdldFZpc2libGVFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7ICdrZXknOiAnZXZlbnRzLXZpZXcnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXkNeZ16jXldei15nXnScpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTEyIGxhcmdlLTYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VsJywgeyAnY2xhc3NOYW1lJzogJ21lbnUnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ0FMTCcgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMS5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15vXldec150gJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCBfLnNpemUodGhpcy5wcm9wcy5ldmVudHMpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ09QRU4nIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazIuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ek16rXldeXICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgXy5zaXplKHRoaXMuZ2V0T3BlbkV2ZW50cygpKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdDTE9TRUQnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazMuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eh15LXldeoICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgXy5zaXplKHRoaXMuZ2V0Q2xvc2VkRXZlbnRzKCkpLCAnKScpKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmxvYXQtbGVmdCBhZGQtYnRuIGJpZyBoaWRlLWZvci1zbWFsbC1vbmx5JyxcbiAgICAgICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s0LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKVxuICAgICAgICAgICAgfSwgJysnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmxvYXQtbGVmdCBhZGQtYnRuIHNtYWxsIHNob3ctZm9yLXNtYWxsLW9ubHknLFxuICAgICAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazUuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpXG4gICAgICAgICAgICB9LCAnKycpKSxcbiAgICAgICAgICAgIF8ubWFwKHZpc2libGVFdmVudHMsIHJlcGVhdEV2ZW50SXRlbTcuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpKSxcbiAgICAgICAgICAgIHZpc2libGVFdmVudHMubGVuZ3RoID09PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmaWx0ZXItc3RhdHVzJyxcbiAgICAgICAgICAgICAgICAna2V5JzogJzI0MzQnXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtZnJvd24tbycsXG4gICAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XpteY16LXqNeZ150sINec15Ag16DXntem15DXlSDXqNep15XXnteV16og157XqteQ15nXnteV16ouLi4nKSkgOiBudWxsXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblN1Ym1pdDkobGlzdFZpZXdNb2RlLCBldmVudCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25SZW1vdmVFdmVudDEwKGxpc3RWaWV3TW9kZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xvc2UxMShsaXN0Vmlld01vZGUpIHtcbiAgICAgICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZUxpc3RWaWV3TW9kZTEyKCkge1xuICAgICAgICB2YXIgbGlzdFZpZXdNb2RlID0gIXRoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWQgJiYgIXRoaXMuc3RhdGUuY3JlYXRlTW9kZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSBldmVudHMtcGFnZScgfSwgbGlzdFZpZXdNb2RlID8gc2NvcGVWaXNpYmxlRXZlbnRzOC5hcHBseSh0aGlzLCBbbGlzdFZpZXdNb2RlXSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnIH0sICFsaXN0Vmlld01vZGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50Rm9ybSwge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC11c2VyJyxcbiAgICAgICAgICAgICdldmVudCc6IHRoaXMucHJvcHMuZXZlbnRzW3RoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWRdLFxuICAgICAgICAgICAgJ29uU3VibWl0Jzogb25TdWJtaXQ5LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlKSxcbiAgICAgICAgICAgICdvblJlbW92ZUV2ZW50Jzogb25SZW1vdmVFdmVudDEwLmJpbmQodGhpcywgbGlzdFZpZXdNb2RlKSxcbiAgICAgICAgICAgICdpc0FkbWluTW9kZSc6IHRoaXMucHJvcHMuYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgICAgICdvbkNsb3NlJzogb25DbG9zZTExLmJpbmQodGhpcywgbGlzdFZpZXdNb2RlKVxuICAgICAgICB9KSA6IG51bGwpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlTGlzdFZpZXdNb2RlMTIuYXBwbHkodGhpcywgW10pO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvbGlzdEl0ZW0uc2NzcycpO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0gc21hbGwtMTJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17dGhpcy5wcm9wcy5pbWFnZVNyY30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10aXRsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlIGxhcmdlLXRleHQgaGlkZS1mb3ItcHJpbnRcIj57dGhpcy5wcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIHNtYWxsLTEyIHNob3ctZm9yLXNtYWxsLW9ubHlcIj57c3VidGl0bGV9PC9sYWJlbD4pfVxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLWxhcmdlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIGlubGluZSBoaWRlLWZvci1zbWFsbC1vbmx5XCI+e3N1YnRpdGxlfTwvbGFiZWw+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN1YnRpdGxlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIGltYWdlU3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RJdGVtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xpc3RJdGVtLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9saXN0SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcbiAgLmxpc3QtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LWltYWdlIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnRpdGxlLmxhcmdlLXRleHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnN1YnRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDAuODByZW07IH1cXG4gICAgICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLCAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLnNob3ctZm9yLXByaW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9saXN0SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZXZlbnRGb3JtLnJ0JztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBlbXB0eUV2ZW50ID0ge1xuICB0eXBlSWQ6ICcnLFxuICBkYXk6ICcwMScsXG4gIG1vbnRoOiAnMDEnLFxuICB5ZWFyOiAnMjAxNycsXG4gIGhvdXI6ICcxNycsXG4gIG1pbnV0ZTogJzAwJyxcbiAgc3RhdHVzOiBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5DTE9TRUQudmFsdWVcbn07XG5cbmNvbnN0IGV2ZW50Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdldmVudEZvcm0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlRXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGlzQWRtaW5Nb2RlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gXy5kZWZhdWx0cyh0aGlzLnByb3BzLmV2ZW50LCBlbXB0eUV2ZW50LCB7IGRhdGVJbnB1dFN1cHBvcnRlZDogdHJ1ZSwgdGltZUlucHV0U3VwcG9ydGVkOiB0cnVlIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2hlY2tJZkh0bWw1U3VwcG9ydGVkKCk7XG4gIH0sXG5cbiAgb25DaGFuZ2UoZSwgdmFsaWRhdGlvblR5cGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnbnVtZXJpYycpIHtcbiAgICAgIGlmICghL15bMC05XSokLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnaGVicmV3Jykge1xuICAgICAgaWYgKCEvXlvXkC3Xqlxcc10qJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGdldEV2ZW50UGljdHVyZSgpIHtcbiAgICByZXR1cm4gXy5nZXQoQ29uc3RhbnRzLkVWRU5UU19UWVBFUywgW3RoaXMuc3RhdGUudHlwZUlkLCAnc3JjJ10pIHx8IENvbnN0YW50cy5FVkVOVF9ERUZBVUxUX1BJQztcbiAgfSxcblxuICBnZXRUaW1lVmFsdWUoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5zdGF0ZSlcbiAgICAgIC5waWNrKFsnaG91cicsICdtaW51dGUnXSlcbiAgICAgIC5tYXAoKVxuICAgICAgLnZhbHVlKClcbiAgICAgIC5qb2luKCc6Jyk7XG4gIH0sXG5cbiAgb25UaW1lQ2hhbmdlKGUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9zb3J0LWNvbXBcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZS5zcGxpdCgnOicpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3VyOiB2YWxbMF0sIG1pbnV0ZTogdmFsWzFdIH0pO1xuICB9LFxuXG4gIGdldERhdGVWYWx1ZSgpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnN0YXRlKVxuICAgICAgLnBpY2soWyd5ZWFyJywgJ21vbnRoJywgJ2RheSddKVxuICAgICAgLm1hcCgpXG4gICAgICAudmFsdWUoKVxuICAgICAgLmpvaW4oJy0nKTtcbiAgfSxcblxuICBvbk51bWVyaWNDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfSxcblxuICBjaGVja0lmSHRtbDVTdXBwb3J0ZWQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydGVkSW5wdXRUeXBlcyA9IFsnZGF0ZScsICd0aW1lJ107XG4gICAgY29uc3QgdGVzdFJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHRlc3RTdHJpbmcgPSAndGVzdCEnO1xuXG4gICAgXy5lYWNoKHN1cHBvcnRlZElucHV0VHlwZXMsIChpbnB1dFR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgICBpbnB1dC52YWx1ZSA9IHRlc3RTdHJpbmc7XG4gICAgICBjb25zdCBpc1N1cHBvcnRlZCA9IGlucHV0LnZhbHVlICE9PSB0ZXN0U3RyaW5nO1xuICAgICAgdGVzdFJlc3VsdFtpbnB1dFR5cGUgKyAnSW5wdXRTdXBwb3J0ZWQnXSA9IGlzU3VwcG9ydGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh0ZXN0UmVzdWx0KTtcbiAgfSxcblxuICBvbkRhdGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCctJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHllYXI6IHZhbFswXSwgbW9udGg6IHZhbFsxXSwgZGF5OiB2YWxbMl0gfSk7XG4gIH0sXG5cbiAgb25Cb29sZWFuQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEJvb2xlYW4oZS50YXJnZXQuY2hlY2tlZCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfSxcblxuICBpc0Zvcm1WYWxpZCgpIHtcbiAgICByZXR1cm4gISEodGhpcy5zdGF0ZS50eXBlSWQpO1xuICB9LFxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGV2ZW50ID0gXy5vbWl0KHRoaXMuc3RhdGUsIFsndGltZUlucHV0U3VwcG9ydGVkJywgJ2RhdGVJbnB1dFN1cHBvcnRlZCddKTtcbiAgICB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50KTtcbiAgfSxcblxuICByZW5kZXI6IHRlbXBsYXRlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudEZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vZm9ybUZyYW1lJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9ldmVudEZvcm0uc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgRm9ybUZyYW1lLCBDb25zdGFudHMsIGV2ZW50Rm9ybUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDEoc3VwcG9ydGVkSW5wdXRzLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV2ZW50SW5kZXhcbiAgICAgICAgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBldmVudC5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFllYXIyKHN1cHBvcnRlZElucHV0cywgeWVhciwgeWVhckluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ3l5LScgKyB5ZWFySW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiAnMjAnICsgeWVhclxuICAgICAgICB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgeWVhciwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdE1vbnRoMyhzdXBwb3J0ZWRJbnB1dHMsIG1vbnRoLCBtb250aEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICdrZXknOiAnbW0tJyArIG1vbnRoSW5kZXggfSwgbW9udGgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXREYXk0KHN1cHBvcnRlZElucHV0cywgZGF5LCBkYXlJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAna2V5JzogJ2RkLScgKyBkYXlJbmRleCB9LCBkYXkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRNaW51dGU1KHN1cHBvcnRlZElucHV0cywgbWludXRlLCBtaW51dGVJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAna2V5JzogJ21pbi0nICsgbWludXRlSW5kZXggfSwgbWludXRlLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0SG91cjYoc3VwcG9ydGVkSW5wdXRzLCBob3VyLCBob3VySW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ2tleSc6ICdoaC0nICsgaG91ckluZGV4IH0sIGhvdXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudFN0YXR1czcoc3VwcG9ydGVkSW5wdXRzLCBldmVudFN0YXR1cywgZXZlbnRTdGF0dXNJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBldmVudFN0YXR1cy52YWx1ZSB9LCBldmVudFN0YXR1cy5uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVTdXBwb3J0ZWRJbnB1dHM4KCkge1xuICAgICAgICB2YXIgc3VwcG9ydGVkSW5wdXRzID0gdGhpcy5zdGF0ZS5kYXRlSW5wdXRTdXBwb3J0ZWQgJiYgdGhpcy5zdGF0ZS50aW1lSW5wdXRTdXBwb3J0ZWQ7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZXZlbnQtZm9ybSBsYXJnZS0xMSBsYXJnZS1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3JvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTkgbGFyZ2UtMTAgbGFyZ2UtY29sbGFwc2UgY29sdW1ucycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9ep150g15TXkNeZ16jXldeiXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUudHlwZUlkLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAndHlwZUlkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdzdHlsZSc6IHsgZGlzcGxheTogJ25vbmUnIH1cbiAgICAgICAgICAgIH0sICfXkdeX16gnKSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5FVkVOVFNfVFlQRVMsIHJlcGVhdEV2ZW50MS5iaW5kKHRoaXMsIHN1cHBvcnRlZElucHV0cykpXG4gICAgICAgIF0pKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmbG9hdC1sZWZ0JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2V2ZW50LXBpYycsXG4gICAgICAgICAgICAnc3JjJzogdGhpcy5nZXRFdmVudFBpY3R1cmUoKVxuICAgICAgICB9KSkpLCAhc3VwcG9ydGVkSW5wdXRzID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdyb3cgc21hbGwtZXhwYW5kZWQgc21hbGwtY2VudGVyZWQnLFxuICAgICAgICAgICAgJ2tleSc6ICd1bnN1cHBvcnRlZC1kcm9wZG93bnMnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC00IG1lZGl1bS0yIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqteQ16jXmdeaJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS55ZWFyLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAneWVhcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuREFURV9USU1FX0RBVEEueWVhcnMsIHJlcGVhdFllYXIyLmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNCBtZWRpdW0tMiBjb2x1bW5zIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5tb250aCxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ21vbnRoJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS5tb250aHMsIHJlcGVhdE1vbnRoMy5iaW5kKHRoaXMsIHN1cHBvcnRlZElucHV0cykpXG4gICAgICAgIF0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucyBtb3JlLXNwYWNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZGF5LFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnZGF5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdxcVxcbiAgICAgICAgICAgICAgICAgICAgJyxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS5kYXlzLCByZXBlYXREYXk0LmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtMyBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXoteUJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5taW51dGUsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdtaW51dGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRBVEVfVElNRV9EQVRBLm1pbnV0ZXMsIHJlcGVhdE1pbnV0ZTUuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC0zIGNvbHVtbnMgbW9yZS1zcGFjZSBlbmQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5ob3VyLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnaG91cidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuREFURV9USU1FX0RBVEEuaG91cnMsIHJlcGVhdEhvdXI2LmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpKSA6IG51bGwsIHN1cHBvcnRlZElucHV0cyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAncm93JyxcbiAgICAgICAgICAgICdrZXknOiAnc3VwcG9ydGVkLWlucHV0cydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTcgbGFyZ2UtNSBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16rXkNeo15nXmlxcbiAgICAgICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAndHlwZSc6ICdkYXRlJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuZ2V0RGF0ZVZhbHVlKCksXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uRGF0ZUNoYW5nZSxcbiAgICAgICAgICAgICdtaW4nOiAnMjAxNi0wMS0wMScsXG4gICAgICAgICAgICAnbWF4JzogJzIwMTctMTItMzEnLFxuICAgICAgICAgICAgJ25hbWUnOiAnZGF0ZSdcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTUgbGFyZ2UtMyBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXoteUXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3RpbWUnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5nZXRUaW1lVmFsdWUoKSxcbiAgICAgICAgICAgICdzdGVwJzogMzAwLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vblRpbWVDaGFuZ2VcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2xhcmdlLTQgbWVkaXVtLTEyIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICcg16HXmNeY15XXoVxcbiAgICAgICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ3N0YXR1cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuRVZFTlRTX1NUQVRVUywgcmVwZWF0RXZlbnRTdGF0dXM3LmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpKSkgOiBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUZyYW1lLCB7XG4gICAgICAgICAgICAndGl0bGUnOiAn16LXqNeZ15vXqiDXkNeZ16jXldeiJyxcbiAgICAgICAgICAgICdvblN1Ym1pdCc6IHRoaXMub25TdWJtaXQsXG4gICAgICAgICAgICAnb25SZW1vdmUnOiB0aGlzLnByb3BzLm9uUmVtb3ZlRXZlbnQsXG4gICAgICAgICAgICAnb25DbG9zZSc6IHRoaXMucHJvcHMub25DbG9zZSxcbiAgICAgICAgICAgICdkaXNhYmxlZCc6ICF0aGlzLmlzRm9ybVZhbGlkKClcbiAgICAgICAgfSwgc2NvcGVTdXBwb3J0ZWRJbnB1dHM4LmFwcGx5KHRoaXMsIFtdKSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5ydFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvZm9ybUZyYW1lLnNjc3MnKTtcblxuY29uc3QgZm9ybUZyYW1lVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zL2Zvcm1GcmFtZVRyYW5zbGF0aW9ucycpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIodGl0bGUsIG9uQ2xvc2UpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhY2tCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhY2stYnRuXCIga2V5PVwiYmFjay1idG5cIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj57dGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKG9uQ2xvc2UpID8gY3JlYXRlQmFja0J1dHRvbigpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbnNCdXR0b25zKGRpc2FibGVkLCBvblN1Ym1pdCwgb25SZW1vdmUpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvblJlbW92ZX0gY2xhc3NOYW1lPVwiYnV0dG9uIGFsZXJ0IG1vcmUtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IGZvcm1GcmFtZVRyYW5zbGF0aW9ucy5SRU1PVkUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9ucyBidXR0b24tZ3JvdXAgc3RhY2tlZCBzbWFsbC1jZW50ZXJlZCBsYXJnZS02IHNtYWxsLTggXCI+XG4gICAgICAgICAgICA8YSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e29uU3VibWl0fSBjbGFzc05hbWU9XCJidXR0b24gc3VjY2VzcyBtb3JlLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyBmb3JtRnJhbWVUcmFuc2xhdGlvbnMuU1VCTUlUIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgeyBfLmlzRnVuY3Rpb24ob25SZW1vdmUpID8gY3JlYXRlUmVtb3ZlQnV0dG9uKCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgRm9ybUZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZnJhbWVcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUhlYWRlcih0aGlzLnByb3BzLnRpdGxlLCB0aGlzLnByb3BzLm9uQ2xvc2UpIH1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQWN0aW9uc0J1dHRvbnModGhpcy5wcm9wcy5kaXNhYmxlZCwgdGhpcy5wcm9wcy5vblN1Ym1pdCwgdGhpcy5wcm9wcy5vblJlbW92ZSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuRm9ybUZyYW1lLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblN1Ym1pdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUZyYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1GcmFtZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1mcmFtZSAuY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLmZvcm0tZnJhbWUgLmFjdGlvbi1idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIC5mb3JtLWZyYW1lIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgU1VCTUlUOiAn16nXnteV16gnLFxuICBSRU1PVkU6ICfXnteX16cnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3RyYW5zbGF0aW9ucy9mb3JtRnJhbWVUcmFuc2xhdGlvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVJST1JTOiB7XG4gICAgR0VORVJBTDogJ9ep15LXmdeQ15Qg15HXntei16jXm9eqJyxcbiAgICBJTlZBTElEX01BSUw6ICfXkNeZ157XmdeZ15wg15zXkCDXqten15nXny4nLFxuICAgIFdFQUtfUEFTU1dPUkQ6ICfXlNeh15nXodee15Ag16bXqNeZ15vXlCDXnNeU15vXmdecINec16TXl9eV16ogNiDXqteV15XXmdedLicsXG4gICAgRU1BSUxfSU5fVVNFOiAn15DXmdee15nXmdecINeR16nXmdee15XXqS4g15DXoNeQINeR15fXqCDXk9eo15og15TXqteX15HXqNeV16og15DXl9eo16ouJyxcbiAgICBXUk9OR19QQVNTV09SRDogJ9eh15nXodee15Ag15zXkCDXoNeb15XXoNeULicsXG4gICAgTk9UX1NBTUVfUEFTU1dPUkQ6ICfXodeZ16HXnteQ15XXqiDXpteo15nXm9eV16og15zXlNeZ15XXqiDXlteU15XXqi4nLFxuICAgIFVTRVJfTk9UX0ZPVU5EOiAn15vXqteV15HXqiDXlNeQ15nXmdee15nXnCDXnNeQINeg157XpteQ15QuJ1xuICB9LFxuXG4gIERBVEVfVElNRV9EQVRBOiB7XG4gICAgZGF5czogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcyNScsICcyNicsICcyNycsICcyOCcsICcyOScsICczMCcsICczMSddLFxuICAgIG1vbnRoczogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddLFxuICAgIHllYXJzOiBbJzE2JywgJzE3J10sXG4gICAgaG91cnM6IFsnMDAnLCAnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnXSxcbiAgICBtaW51dGVzOiBbJzAwJywgJzA1JywgJzEwJywgJzE1JywgJzIwJywgJzI1JywgJzMwJywgJzM1JywgJzQwJywgJzQ1JywgJzUwJywgJzU1J11cbiAgfSxcblxuICBFVkVOVF9ERUZBVUxUX1BJQzogJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEyNC8xMjQxNTAuc3ZnJyxcbiAgRVZFTlRTX1RZUEVTOiB7XG4gICAgJ2hhcG9lbC10bHYnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYXBvZWx0YS5wbmcnLFxuICAgICAgbmFtZTogJ9eU16TXldei15wg16rXnCDXkNeR15nXkSdcbiAgICB9LFxuICAgICdtYWNjYWJpLXRsdic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX21hY2NhYmkucG5nJyxcbiAgICAgIG5hbWU6ICfXnteb15HXmSDXqtecINeQ15HXmdeRJ1xuICAgIH0sXG4gICAgJ2hlcnplbGl5YSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3NoYXJvbi5wbmcnLFxuICAgICAgbmFtZTogJ9eR16DXmSDXlNeo16bXnNeZ15QnXG4gICAgfSxcbiAgICAna2lyeWF0LWdhdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL0ltYWdlcy90ZWFtcy9iaWdHYXQucG5nJyxcbiAgICAgIG5hbWU6ICfXnteb15HXmSDXp9eo15nXqiDXkteqJ1xuICAgIH0sXG4gICAgJ2dpbGJvYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX0dhbGlsLnBuZycsXG4gICAgICBuYW1lOiAn15LXnNeZ15wv15LXnNeR15XXoidcbiAgICB9LFxuICAgICduYWhhcml5YSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX25haGFyaWEucG5nJyxcbiAgICAgIG5hbWU6ICfXoteZ16jXldeg15kg16DXlNeo15nXlCdcbiAgICB9LFxuICAgICdob2xvbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9hcnRpY2xlcy9sb2dvX2hoLnBuZycsXG4gICAgICBuYW1lOiAn15TXpNeV16LXnCDXl9eV15zXldefJ1xuICAgIH0sXG4gICAgJ2FzaGRvZCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2FzaGRvZC5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeQ16nXk9eV15MnXG4gICAgfSxcbiAgICAnaGFpZmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYWlmYS5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeX15nXpNeUJ1xuICAgIH0sXG4gICAgJ3Jpc2hvbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3Jpc2hvbi5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeo15DXqdeV158g15zXpteZ15XXnydcbiAgICB9LFxuICAgICdlaWxhdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2VpbGF0LnBuZycsXG4gICAgICBuYW1lOiAn15TXpNeV16LXnCDXkNeZ15zXqidcbiAgICB9LFxuICAgICdsanVibGphbmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzgvOGUvVW5pb25fb2xpbXBpamEucG5nLzE0MHB4LVVuaW9uX29saW1waWphLnBuZycsXG4gICAgICBuYW1lOiAn15zXldeR15zXmdeQ16DXlCdcbiAgICB9LFxuICAgICd2YWxlbmNpYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly9zYW12YW5yb3Nzb20uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzEwL3ZhbGVuY2lhLWJhc2tldDEtbG9nby5qcGcnLFxuICAgICAgbmFtZTogJ9eV15zXoNeh15nXlCdcbiAgICB9LFxuICAgICdrdWJhbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMC8wNC9Mb2tvbW90aXZfS3ViYW5fbG9nby5wbmcvMjAwcHgtTG9rb21vdGl2X0t1YmFuX2xvZ28ucG5nJyxcbiAgICAgIG5hbWU6ICfXnNeV16fXldee15XXmNeZ15Eg16fXldeR15DXnydcbiAgICB9LFxuICAgICdmdWVubGFicmFkYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xMy9CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnLzExMHB4LUJhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcnLFxuICAgICAgbmFtZTogJ9ek15XXkNeg15zXkdeo15PXlCdcbiAgICB9LFxuICAgICd1bG0nOiB7XG4gICAgICBzcmM6ICdodHRwOi8vbmFjaHd1Y2hzLmJidTAxLmNvbS9tb2R1bGVzL21vZF9iYnVuZXdzZmxhc2gvYXNzZXRzL2ltYWdlcy9ub2ltYWdlX3RodW1iLmpwZycsXG4gICAgICBuYW1lOiAn15DXldec150nXG4gICAgfSxcbiAgICAndmlsbmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzcvNzUvQkNfTGlldHV2b3NfUnl0YXNfbG9nby5zdmcvOTA3cHgtQkNfTGlldHV2b3NfUnl0YXNfbG9nby5zdmcucG5nJyxcbiAgICAgIG5hbWU6ICfXqNeZ15jXkNehINeV15nXnNeg15QnXG4gICAgfSxcbiAgICAnbm92Z29yb2QnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vb2x5bXBpYWtvcy1saXZlLmdyL2ltZy90ZWFtcy9OaXpobnklMjBOb3Znb3JvZC5wbmcnLFxuICAgICAgbmFtZTogJ9eg15nXltez16DXmSdcbiAgICB9LFxuICAgICd6ZW5pdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI1L0ZDX1plbml0XzFfc3Rhcl8yMDE1X2xvZ28ucG5nLzIyMHB4LUZDX1plbml0XzFfc3Rhcl8yMDE1X2xvZ28ucG5nJyxcbiAgICAgIG5hbWU6ICfXlteg15nXmCdcbiAgICB9XG4gIH0sXG4gIFNUQVRJT05TOiB7XG4gICAgbW9kaWluOiAn157XldeT15nXoteZ158nLFxuICAgIHRsdjogJ9eq15wg15DXkdeZ15EnXG4gIH0sXG4gIE1BWF9TRUFTT05fVElDS0VUUzogNyxcbiAgTUFYX0VYVFJBX1BBU1NFTkdFUlM6IDQsXG4gIFBIT05FX1BSRUZJWEVTOiBbJzA1MCcsICcwNTInLCAnMDUzJywgJzA1NCcsICcwNTUnLCAnMDU3JywgJzA1OCddLFxuICBQQUdFUzoge1xuICAgIEhPTUU6IHt2YWw6ICdob21lJywgbmFtZTogJ9eT16Mg15TXkdeZ16onLCB2aXNpYmxlOiB0cnVlfSxcbiAgICBBVVRIOiB7dmFsOiAnYXV0aCcsIG5hbWU6ICcnfSxcbiAgICBVU0VSUzoge3ZhbDogJ3VzZXJzJywgbmFtZTogJ9ee16nXqtee16nXmdedJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgRVZFTlRTOiB7dmFsOiAnZXZlbnRzJywgbmFtZTogJ9eQ15nXqNeV16LXmdedJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgQk9PS0lOR1M6IHt2YWw6ICdib29raW5ncycsIG5hbWU6ICfXqNep15XXnteZ150g15zXlNeh16LXldeqJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgRElTVFJJQlVUSU9OOiB7dmFsOiAnZGlzdHJpYnV0aW9uJywgbmFtZTogJ9ee15nXmdec15nXnScsIHZpc2libGU6IHRydWV9LFxuICAgIEVESVRfVVNFUl9JTkZPOiB7dmFsOiAnZWRpdFVzZXJJbmZvJywgbmFtZTogJyd9XG4gIH0sXG4gIEVWRU5UU19TVEFUVVM6IHtcbiAgICBDTE9TRUQ6IHtcbiAgICAgIHZhbHVlOiAnY2xvc2VkJyxcbiAgICAgIG5hbWU6ICfXlNeU16jXqdee15Qg16HXkteV16jXlCdcbiAgICB9LFxuICAgIE9QRU5fRk9SX01FTUJFUlM6IHtcbiAgICAgIHZhbHVlOiAnb3BlbkZvck1lbWJlcnMnLFxuICAgICAgbmFtZTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec157XoNeV15nXmSDXlNeh16LXldeqJ1xuICAgIH0sXG4gICAgT1BFTl9GT1JfQUxMOiB7XG4gICAgICB2YWx1ZTogJ29wZW5Gb3JBbGwnLFxuICAgICAgbmFtZTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec15vXldec150nXG4gICAgfSxcbiAgICBGVUxMWV9CT09LRUQ6IHtcbiAgICAgIHZhbHVlOiAnZnVsbHlCb29rZWQnLFxuICAgICAgbmFtZTogJ9eU15TXodei15Qg157XnNeQ15QnXG4gICAgfVxuICB9LFxuICBESVNUUklCVVRJT046IHtcbiAgICBSRUNJUElFTlRTOiB7XG4gICAgICBBTEw6IHtcbiAgICAgICAgdmFsdWU6ICdhbGxVc2VycycsXG4gICAgICAgIG5hbWU6ICfXm9ec15wg15TXntep16rXntep15nXnSdcbiAgICAgIH0sXG4gICAgICBNRU1CRVJTX09OTFk6IHtcbiAgICAgICAgdmFsdWU6ICdtZW1iZXJzT25seScsXG4gICAgICAgIG5hbWU6ICfXnteg15XXmdeZ150g15HXnNeR15MnXG4gICAgICB9LFxuICAgICAgQk9PS0VEX1RPX0VWRU5UOiB7XG4gICAgICAgIHZhbHVlOiAnYm9va2VkVG9FdmVudCcsXG4gICAgICAgIG5hbWU6ICfXqNep15XXnteZ150g15zXlNeh16LXlCdcbiAgICAgIH1cbiAgICB9LFxuICAgIE1FVEhPRFM6IHtcbiAgICAgIEVNQUlMOiAnZW1haWwnLFxuICAgICAgU01TOiAnc21zJ1xuICAgIH0sXG4gICAgVFlQRVM6IHtcbiAgICAgIFRFTVBMQVRFOiAndGVtcGxhdGUnLFxuICAgICAgQ1VTVE9NOiAnY3VzdG9tJ1xuICAgIH0sXG4gICAgVEVNUExBVEVTOiB7XG4gICAgICBFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTOiB7XG4gICAgICAgIGlkOiAnNGZhYjZiOTItYmY2MS00OGYxLWIxM2ItYmM3MDJlZDc4Njk1JyxcbiAgICAgICAgbmFtZTogJ9ek16rXmdeX16og15TXqNep157XlCDXnNee16DXldeZ15nXnSdcbiAgICAgIH0sXG4gICAgICBFVkVOVF9PUEVOX0ZPUl9BTEw6IHtcbiAgICAgICAgaWQ6ICdkYmUzZTBlNC1iYjBlLTQxYWQtYmYxMi01YmU2NGEzMGYzYjcnLFxuICAgICAgICBuYW1lOiAn16TXqteZ15fXqiDXlNeo16nXnteUINec15vXldec150nXG4gICAgICB9LFxuICAgICAgQ0hBTkdFX0VWRU5UX0RFVEFJTFM6IHtcbiAgICAgICAgaWQ6ICcxNzBmY2Q0Zi1kZjJlLTQ0ZGQtYjc2MC02OTNkMDRmZGQwN2MnLFxuICAgICAgICBuYW1lOiAn16nXmdeg15XXmSDXkdee15XXoteTINeU15DXmdeo15XXoidcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jb25zdGFudHMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50Rm9ybS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50Rm9ybS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRGb3JtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudC1mb3JtIC5ldmVudC1waWMge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudHNQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRzUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudHMtcGFnZSAuZmlsdGVyaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBFVkVOVFNfUkVDRUlWRUQsIEVWRU5UX1JFTU9WRUQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBFVkVOVF9LRVlTID0gWyd0eXBlSWQnLCAnZGF5JywgJ21vbnRoJywgJ3llYXInLCAnaG91cicsICdtaW51dGUnLCAnc3RhdHVzJ107XG5jb25zdCBFVkVOVFNfUEFUSCA9ICdldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZXZlbnRSZW1vdmVkID0gZXZlbnRJZCA9PiAoe1xuICB0eXBlOiBFVkVOVF9SRU1PVkVELFxuICBldmVudElkXG59KTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50c1JlY2VpdmVkID0gZXZlbnRzID0+ICh7XG4gIHR5cGU6IEVWRU5UU19SRUNFSVZFRCxcbiAgZXZlbnRzXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXZlbnRzID0gKCkgPT4gZGlzcGF0Y2ggPT5cbiAgY2xpZW50REIucmVhZChFVkVOVFNfUEFUSClcbiAgICAudGhlbihldmVudHMgPT4ge1xuICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoZXZlbnRzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV2ZW50ID0gZXZlbnQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goRVZFTlRTX1BBVEgsIGV2ZW50KVxuICAgIC50aGVuKGV2ZW50SWQgPT4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoeyBbZXZlbnRJZF06IGV2ZW50IH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFdmVudCA9IChldmVudElkLCBldmVudCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgZXZlbnRUb1VwZGF0ZSA9IF8ucGljayhldmVudCwgRVZFTlRfS0VZUyk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnVwZGF0ZSgnZXZlbnRzLycgKyBldmVudElkLCBldmVudFRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGV2ZW50c1JlY2VpdmVkKHsgW2V2ZW50SWRdOiBldmVudFRvVXBkYXRlIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFdmVudCA9IGV2ZW50SWQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnJlbW92ZShgJHtFVkVOVFNfUEFUSH0vJHtldmVudElkfWApXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goZXZlbnRSZW1vdmVkKGV2ZW50SWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwiZXhwb3J0IGNvbnN0IFNUQVJUX0xPQURJTkcgPSAnU1RBUlRfTE9BRElORyc7XG5leHBvcnQgY29uc3QgU1RPUF9MT0FESU5HID0gJ1NUT1BfTE9BRElORyc7XG5cbmV4cG9ydCBjb25zdCBSRVBPUlRfRVJST1IgPSAnUkVQT1JUX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IFNFVF9BVVRIX0RBVEEgPSAnU0VUX0FVVEhfREFUQSc7XG5leHBvcnQgY29uc3QgU0lHTl9PVVQgPSAnU0lHTl9PVVQnO1xuXG5leHBvcnQgY29uc3QgVVNFUlNfUkVDRUlWRUQgPSAnVVNFUlNfUkVDRUlWRUQnO1xuZXhwb3J0IGNvbnN0IFVTRVJfUkVNT1ZFRCA9ICdVU0VSX1JFTU9WRUQnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRTX1JFQ0VJVkVEID0gJ0VWRU5UU19SRUNFSVZFRCc7XG5leHBvcnQgY29uc3QgRVZFTlRfUkVNT1ZFRCA9ICdFVkVOVF9SRU1PVkVEJztcblxuZXhwb3J0IGNvbnN0IEJPT0tJTkdTX1JFQ0VJVkVEID0gJ0JPT0tJTkdTX1JFQ0VJVkVEJztcbmV4cG9ydCBjb25zdCBCT09LSU5HX0NBTkNFTEVEID0gJ0JPT0tJTkdfQ0FOQ0VMRUQnO1xuXG5leHBvcnQgY29uc3QgTkFWSUdBVEVfVE8gPSAnTkFWSUdBVEVfVE8nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvblR5cGVzLmpzIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCB7IFByb21pc2UgfSBmcm9tICdibHVlYmlyZCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplID0gY29uZmlnID0+IHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEluID0gKHBhdGgsIGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkuc2V0KGRhdGEpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVhZCA9IHBhdGggPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5vbmNlKCd2YWx1ZScpXG4gICAgLnRoZW4oc25hcHNob3QgPT4gcmVzb2x2ZShzbmFwc2hvdC52YWwoKSkpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHB1c2ggPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBjb25zdCB1bmlxdWVLZXkgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5wdXNoKCkua2V5O1xuICBzZXRJbihwYXRoICsgJy8nICsgdW5pcXVlS2V5LCBkYXRhKVxuICAgIC50aGVuKCgpID0+IHJlc29sdmUodW5pcXVlS2V5KSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlID0gKHBhdGgsIGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkudXBkYXRlKGRhdGEpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gcGF0aCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnJlbW92ZSgpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoR29vZ2xlID0gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUmVkaXJlY3QocHJvdmlkZXIpXG4gICAgLnRoZW4ocmVzb2x2ZSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEZhY2Vib29rID0gKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIoKTtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChwcm92aWRlcilcbiAgICAudGhlbihyZXNvbHZlKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gZW1haWwgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ25PdXQgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2dnZWRJblVzZXIgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5nZXRSZWRpcmVjdFJlc3VsdCgpXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQudXNlcikge1xuICAgICAgICByZXNvbHZlKHJlc3VsdC51c2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9uQXV0aFN0YXRlQ2hhbmdlID0gdXNlciA9PiB7XG4gICAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnJlbW92ZUF1dGhUb2tlbkxpc3RlbmVyKG9uQXV0aFN0YXRlQ2hhbmdlKTtcbiAgICAgICAgICByZXNvbHZlKHVzZXIpO1xuICAgICAgICB9O1xuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKG9uQXV0aFN0YXRlQ2hhbmdlKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2NsaWVudERCLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmaXJlYmFzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZpcmViYXNlXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlByb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU1RBUlRfTE9BRElORywgU1RPUF9MT0FESU5HIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmV4cG9ydCBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiAoe1xuICB0eXBlOiBTVEFSVF9MT0FESU5HXG59KTtcblxuZXhwb3J0IGNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4gKHtcbiAgdHlwZTogU1RPUF9MT0FESU5HXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9sb2FkaW5nQWN0aW9ucy5qcyIsImltcG9ydCB7IFJFUE9SVF9FUlJPUiB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCByZXBvcnRFcnJvciA9IChtZXNzYWdlID0gQ29uc3RhbnRzLkVSUk9SUy5HRU5FUkFMKSA9PiAoe1xuICB0eXBlOiBSRVBPUlRfRVJST1IsXG4gIG1lc3NhZ2Vcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucy5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL3NwaW5uZXIuc2NzcycpO1xuXG5jb25zdCBMb2dvID0gcmVxdWlyZSgnLi9sb2dvLmpzeCcpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5sb2FkaW5nXG4gICAgfTtcbn1cblxuY2xhc3MgU3Bpbm5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBvdmVybGF5Q2xhc3MgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIG92ZXJsYXk6IHRydWUsXG4gICAgICAgICAgICBoaWRlOiAhdGhpcy5wcm9wcy5pc0xvYWRpbmdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheUNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9IG9wYWNpdHk9ezAuN30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNwaW5uZXIuUHJvcFR5cGVzID0ge1xuICAgIGlzTG9hZGluZzogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU3Bpbm5lcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvc3Bpbm5lci5qc3giLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zcGlubmVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zcGlubmVyLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDEwMDA7IH1cXG4gIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciB7XFxuICAgIG1hcmdpbjogMTUwcHggYXV0byAwO1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgLmxvZ28ge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgb3BhY2l0eTogMC43OyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciA+IGRpdiB7XFxuICAgICAgd2lkdGg6IDEycHg7XFxuICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgIG1hcmdpbjogMCAycHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcXG4gICAgICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgLmJvdW5jZTEge1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIC5ib3VuY2UyIHtcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzOyB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcXG4gIDAlLCA4MCUsIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XFxuICAwJSwgODAlLCAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNsYXNzIExvZ28gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyB3aWR0aD17dGhpcy5wcm9wcy53aWR0aCArICdwdCd9IGhlaWdodD17dGhpcy5wcm9wcy53aWR0aCArICdwdCd9IG9wYWNpdHk9e3RoaXMucHJvcHMub3BhY2l0eX0gdmlld0JveD1cIjAgMCA0MDAgNDAwXCI+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMC4wMCAwLjAwIEwgMTk1LjMzIDAuMDAgQyAxNzEuNDYgMS4xNCAxNDcuNTggNS40MiAxMjUuNDMgMTQuNjAgQyA3MC44OCAzNi4zMSAyNy4xMCA4My4zMyA5LjU3IDEzOS40MCBDIDMuNzQgMTU3LjQ1IDEuMTYgMTc2LjM3IDAuMDAgMTk1LjI1IEwgMC4wMCAwLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5NS4zMyAwLjAwIEwgMjA3LjUyIDAuMDAgQyAyMTYuNzEgMS4xOSAyMjYuMDIgMS4zNSAyMzUuMTEgMy4yMiBDIDI2OS4zMCA5LjE2IDMwMS43OCAyNC4zNyAzMjguMzcgNDYuNjUgQyAzNjUuOTkgNzcuOTEgMzkxLjY2IDEyMy40MiAzOTguMDkgMTcxLjk5IEMgMzk5LjA0IDE3OC43NSAzOTkuNTYgMTg1LjU2IDQwMC4wMCAxOTIuMzcgTCA0MDAuMDAgMjA4LjczIEMgMzk4LjU3IDIzMy44NiAzOTMuMjkgMjU4LjkwIDM4Mi44MCAyODEuODYgQyAzNTguODIgMzM1LjY4IDMwOS45NSAzNzcuODMgMjUyLjk5IDM5My4xMSBDIDIzOS4wOCAzOTcuMTAgMjI0LjY4IDM5OC44OSAyMTAuMjkgNDAwLjAwIEwgMTkxLjM2IDQwMC4wMCBDIDE2Ni4xNyAzOTguNzYgMTQxLjEzIDM5My4xNCAxMTguMTYgMzgyLjY0IEMgNjcuNDAgMzU5Ljc2IDI2LjgxIDMxNS4wNSA5Ljg5IDI2MS45MCBDIDMuOTcgMjQ0LjMzIDEuNjIgMjI1Ljg1IDAuMDAgMjA3LjQ2IEwgMC4wMCAxOTUuMjUgQyAxLjE2IDE3Ni4zNyAzLjc0IDE1Ny40NSA5LjU3IDEzOS40MCBDIDI3LjEwIDgzLjMzIDcwLjg4IDM2LjMxIDEyNS40MyAxNC42MCBDIDE0Ny41OCA1LjQyIDE3MS40NiAxLjE0IDE5NS4zMyAwLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIwNy41MiAwLjAwIEwgNDAwLjAwIDAuMDAgTCA0MDAuMDAgMTkyLjM3IEMgMzk5LjU2IDE4NS41NiAzOTkuMDQgMTc4Ljc1IDM5OC4wOSAxNzEuOTkgQyAzOTEuNjYgMTIzLjQyIDM2NS45OSA3Ny45MSAzMjguMzcgNDYuNjUgQyAzMDEuNzggMjQuMzcgMjY5LjMwIDkuMTYgMjM1LjExIDMuMjIgQyAyMjYuMDIgMS4zNSAyMTYuNzEgMS4xOSAyMDcuNTIgMC4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxOTIuMTEgOC4xMyBDIDIyMi4zNSA2LjgwIDI1Mi45NSAxMi43NCAyODAuNDIgMjUuNTAgQyAzMjcuMDQgNDYuNzIgMzY0LjM1IDg3LjM5IDM4MS4zMSAxMzUuNzUgQyAzOTguNDAgMTgzLjE3IDM5NS42NSAyMzcuMzMgMzczLjc3IDI4Mi43NCBDIDM1Ni4yMyAzMTkuODMgMzI2LjMzIDM1MC45NyAyOTAuMDQgMzcwLjA5IEMgMjQzLjkyIDM5NC44MiAxODcuNTIgMzk5LjIyIDEzOC4wNyAzODIuMTEgQyA5NS4zOCAzNjcuNjUgNTguMTQgMzM3LjYwIDM1LjIxIDI5OC43NiBDIDE0LjY1IDI2NC45MiA1LjM0IDIyNC40NiA4LjU0IDE4NS4wMyBDIDEwLjM3IDE2MS4yMCAxNi42OCAxMzcuNzAgMjcuMjQgMTE2LjI2IEMgNDguODIgNzEuMTcgODguOTIgMzUuNDggMTM2LjA0IDE4Ljg5IEMgMTU0LjA1IDEyLjU0IDE3My4wMiA4Ljg3IDE5Mi4xMSA4LjEzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE5Ni4yMyAyMS4zNSBDIDE5Ny42MCAxOC45MyAxOTguOTUgMTYuNTAgMjAwLjM3IDE0LjExIEMgMjAxLjcyIDE2LjQ4IDIwMy4wNCAxOC44NiAyMDQuMzMgMjEuMjcgQyAyMDYuOTUgMjEuODAgMjA5LjU5IDIyLjIyIDIxMi4xOCAyMi44OSBDIDIxMC43MCAyNS4xNiAyMDguNjUgMjYuOTggMjA2LjgyIDI4Ljk2IEMgMjA3LjIyIDMxLjY1IDIwNy41MyAzNC4zNSAyMDcuODYgMzcuMDQgQyAyMDUuMzAgMzUuODYgMjAyLjc0IDM0LjY3IDIwMC4xNCAzMy41OCBDIDE5Ny43NCAzNC44MiAxOTUuMzIgMzYuMDQgMTkyLjc1IDM2Ljg3IEMgMTkzLjE2IDM0LjIyIDE5My41NCAzMS41NiAxOTMuODQgMjguODkgQyAxOTEuOTMgMjYuOTAgMTkwLjAzIDI0LjkwIDE4OC4xNiAyMi44OCBDIDE5MC44MyAyMi4zMSAxOTMuNTIgMjEuNzggMTk2LjIzIDIxLjM1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE4MS4xMiA0NC4zOCBDIDIxMi4yNiA0MC42MCAyNDQuNTMgNDYuMTkgMjcyLjM2IDYwLjc2IEMgMzEwLjkzIDgwLjU2IDM0MC41MSAxMTcuMDYgMzUxLjYyIDE1OS4wMCBDIDM1OC44MSAxODUuMTAgMzU4LjgyIDIxMy4wOCAzNTIuMjIgMjM5LjMwIEwgMzUzLjc4IDIzOS40OSBDIDM1My4zNiAyMzkuNDkgMzUyLjUzIDIzOS40OCAzNTIuMTEgMjM5LjQ4IEMgMzQ1LjAyIDI2Ny4zOSAzMjkuOTAgMjkzLjIxIDMwOS4wOCAzMTMuMTEgQyAyOTIuMjEgMzI5LjY2IDI3MS4zNiAzNDEuOTkgMjQ4Ljk2IDM0OS40MCBDIDIyMC4zNSAzNTguNjkgMTg5LjA3IDM1OS42MyAxNTkuOTkgMzUxLjkxIEMgMTMyLjM5IDM0NC42MyAxMDYuODMgMzI5LjY5IDg3LjExIDMwOS4wNCBDIDU4LjYzIDI3OS43NCA0Mi4zNSAyMzguODkgNDMuMzEgMTk4LjAwIEMgNDMuMzggMTUxLjU0IDY2LjA5IDEwNi4xMSAxMDIuNDMgNzcuMzYgQyAxMjQuOTUgNTkuMzkgMTUyLjQ4IDQ3LjcyIDE4MS4xMiA0NC4zOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMTIuNzQgNzYuNzMgQyAxMzQuNTQgNjEuNDYgMTYwLjMxIDUxLjU1IDE4Ni45MyA0OS41NSBDIDIwNi40NSA0OC4yMSAyMjYuMzcgNDkuNjEgMjQ1LjA2IDU1LjY4IEMgMjcwLjk5IDYzLjc5IDI5NC42OSA3OC45OCAzMTIuNzUgOTkuMjggQyAzMzAuMDAgMTE4LjMzIDM0Mi4wOCAxNDEuOTQgMzQ3LjgzIDE2Ni45NiBDIDM1My44NSAxOTUuMTUgMzUyLjI5IDIyNS4xMiAzNDIuMjUgMjUyLjIyIEMgMzM3LjI0IDI2NS41NiAzMzAuNDcgMjc4LjI1IDMyMi4wNSAyODkuNzYgQyAzMTguODAgMjg2LjgwIDMxOS42OCAyODIuNDIgMzE5LjcyIDI3OC41MCBDIDMxOS4xNiAyNzkuODEgMzE4LjYzIDI4MS4xMyAzMTguMTMgMjgyLjQ2IEMgMzE3LjMzIDI4MC4xOCAzMTYuNTUgMjc3Ljg1IDMxNS4xMiAyNzUuODggQyAzMTUuNTIgMjc3LjE2IDMxNi4zMSAyNzkuNzIgMzE2LjcxIDI4MS4wMCBDIDMxNS4zMSAyNzkuNzMgMzEzLjgwIDI3OC42NCAzMTIuMTggMjc3LjcyIEMgMzEzLjIyIDI3OS4zNiAzMTQuNDQgMjgwLjg3IDMxNS42NyAyODIuMzkgQyAzMTQuMjMgMjgxLjc3IDMxMi43OCAyODEuMjAgMzExLjMwIDI4MC42OSBDIDMxMi4zNSAyODEuODcgMzEzLjYxIDI4Mi43NSAzMTUuMDggMjgzLjM1IEMgMzEzLjk1IDI4My42NCAzMTIuODIgMjgzLjkzIDMxMS43MCAyODQuMjMgQyAzMTYuMTUgMjg0LjU0IDMxOC4xOSAyODguNjcgMzIwLjM1IDI5MS45NSBDIDMxOS4wMCAyOTMuNzIgMzE3LjU5IDI5NS40NSAzMTYuMTUgMjk3LjE1IEMgMzEyLjU4IDI5NC41NiAzMTEuMTMgMjkwLjQxIDMxMC41NSAyODYuMTkgQyAzMTAuMjMgMjg2LjM0IDMwOS41OSAyODYuNjQgMzA5LjI4IDI4Ni43OCBDIDMwOC41OSAyODUuMjMgMzA2LjkyIDI4NC44MiAzMDYuNDcgMjg2Ljc2IEMgMzA2Ljg4IDI4Ny4yOSAzMDcuNjkgMjg4LjMzIDMwOC4xMCAyODguODYgQyAzMDcuNDUgMjg4Ljc1IDMwNi4xNCAyODguNTUgMzA1LjQ5IDI4OC40NCBDIDMwNi41OSAyODkuNzIgMzA3LjcxIDI5MC45OCAzMDguODIgMjkyLjI2IEMgMzA3Ljk3IDI5Mi4yNSAzMDYuMjcgMjkyLjIzIDMwNS40MSAyOTIuMjIgQyAzMDguNDcgMjk0LjQxIDMxMS40NyAyOTYuNzQgMzEzLjgxIDI5OS43MiBDIDMxMy4wNyAzMDAuNjIgMzEyLjMzIDMwMS41MiAzMTEuNjAgMzAyLjQ0IEMgMzEwLjkzIDMwMC44MCAzMTAuNjQgMjk4LjgyIDMwOS4wNyAyOTcuNzYgQyAzMDUuNzggMjk1LjA3IDMwMi4xMSAyOTIuOTEgMjk4LjU4IDI5MC41NyBDIDI5Ny4xNyAyODkuNDcgMjk1LjM1IDI4OS41MCAyOTMuNjcgMjg5LjMzIEMgMjkzLjM0IDI5MC42MyAyOTMuMDIgMjkxLjkzIDI5Mi43MCAyOTMuMjMgQyAyOTMuMDIgMjk0LjA3IDI5My4zNSAyOTQuOTIgMjkzLjY4IDI5NS43NyBDIDI5Mi4xNSAyOTkuNzUgMjkxLjIwIDMwMy45MSAyOTAuMTcgMzA4LjAzIEMgMjg2LjM5IDMwMC45MSAyODIuMzkgMjkzLjc5IDI4MC45NSAyODUuNzUgQyAyODAuNTMgMjg3Ljk0IDI4MC4xNiAyOTAuMTcgMjc4Ljc4IDI5Mi4wMCBDIDI3Ny43OCAyOTAuNDcgMjc2LjgyIDI4OC44OCAyNzUuMzggMjg3LjcxIEMgMjc2LjIyIDI5MC41MiAyNzcuMzcgMjkzLjIzIDI3OC4wNSAyOTYuMDkgQyAyNzguNTggMjk4Ljc0IDI4MS44MiAyOTkuNTcgMjgyLjU5IDMwMi4xMiBDIDI4My44NiAzMDUuNTAgMjg0Ljk2IDMwOC45NSAyODYuNDUgMzEyLjI0IEMgMjg1LjI1IDMxMS41NyAyODQuMDYgMzEwLjkxIDI4Mi44NyAzMTAuMjQgQyAyODEuNzAgMzEwLjU4IDI4MC41NCAzMTAuOTIgMjc5LjM5IDMxMS4yOCBDIDI3OS4xMCAzMTEuODEgMjc4LjUyIDMxMi44NyAyNzguMjMgMzEzLjM5IEMgMjc2Ljg5IDMxMS41MSAyNzUuNTYgMzA5LjU2IDI3My42NyAzMDguMTkgQyAyNzUuNTQgMzA2LjgyIDI3Ny41OSAzMDUuMzggMjc4LjA2IDMwMi45NCBDIDI3NC44NyAzMDQuODEgMjcyLjE2IDMwNy4zNSAyNjkuMTMgMzA5LjQzIEMgMjY3LjIyIDMxMC41MSAyNjYuNzQgMzEyLjc4IDI2NS44NiAzMTQuNjIgQyAyNjEuNzcgMzEwLjk2IDI2MS41MiAzMDUuMzQgMjYwLjI4IDMwMC4zNiBDIDI2MC4wMiAzMDEuNjYgMjU5Ljc3IDMwMi45NyAyNTkuNTQgMzA0LjI4IEMgMjU4LjcxIDMwMi42NiAyNTcuNzggMzAxLjAzIDI1Ni4wOSAzMDAuMTYgQyAyNTYuMDcgMzAzLjM5IDI1Ni4yOCAzMDYuNjUgMjU3LjIwIDMwOS43NiBDIDI1NS44MCAzMDkuNzAgMjU0LjQwIDMwOS42NiAyNTMuMDAgMzA5LjY1IEMgMjU0Ljg0IDMxMS4xNyAyNTYuODMgMzEyLjQ4IDI1OC44OSAzMTMuNjkgQyAyNTguOTEgMzE2LjM5IDI1OC44NiAzMTkuMDggMjU4LjgwIDMyMS43OCBDIDI1Ny42MiAzMjMuMDcgMjU2LjQyIDMyNC4zNSAyNTUuMTkgMzI1LjU5IEMgMjUyLjQyIDMyNC4xMSAyNDkuNzcgMzIyLjM4IDI0Ni43NyAzMjEuNDEgQyAyNDYuMjkgMzE4Ljg2IDI0NS43MiAzMTYuMzIgMjQ1LjI2IDMxMy43NiBDIDI0NC4wOCAzMTMuMDAgMjQyLjkwIDMxMi4yMyAyNDEuNzMgMzExLjQ2IEMgMjM4LjIyIDMxMi42MyAyMzYuNTcgMzE2LjIwIDIzNy42MSAzMTkuNzEgQyAyMzYuODQgMzE5Ljk1IDIzNi4wOCAzMjAuMjAgMjM1LjMxIDMyMC40NSBDIDIzNS42NSAzMTUuOTAgMjM3LjI3IDMxMS41NCAyMzcuNTIgMzA3LjAxIEMgMjM3LjY1IDMwNC45MSAyMzQuNjAgMzA1LjIxIDIzMy4zOSAzMDQuNTQgQyAyMzQuNjMgMzEyLjg4IDIzMS43OSAzMjEuMDEgMjI4LjgyIDMyOC42NCBDIDIyOC4wMSAzMjguODcgMjI2LjM4IDMyOS4zMyAyMjUuNTcgMzI5LjU2IEMgMjI0Ljk3IDMyNC4wNiAyMjIuNDkgMzE3Ljg5IDIyNi4yNyAzMTIuOTggQyAyMjUuNTMgMzExLjIyIDIyNC45NCAzMDkuNDAgMjI0LjM2IDMwNy41OCBDIDIyMy45MyAzMDcuNTYgMjIzLjA3IDMwNy41MSAyMjIuNjQgMzA3LjQ5IEMgMjE5Ljc3IDMxMi4xMSAyMjIuODEgMzE3Ljc4IDIyMC4xNCAzMjIuNTIgQyAyMTcuMzIgMzE5LjYyIDIxNS41NSAzMTUuOTEgMjEyLjg3IDMxMi45MCBDIDIxMy4zNCAzMTQuNDUgMjEzLjkwIDMxNS45OCAyMTQuNTEgMzE3LjUwIEMgMjEzLjY0IDMxOC4zNCAyMTIuNzcgMzE5LjE5IDIxMS45MiAzMjAuMDQgQyAyMTMuMTggMzIwLjY4IDIxNC40NSAzMjEuMzAgMjE1Ljc0IDMyMS44NiBDIDIxNi4zNyAzMjIuNzcgMjE3LjAwIDMyMy42OSAyMTcuNjUgMzI0LjYwIEMgMjE1LjA1IDMyNS4xNyAyMTIuMzcgMzI1Ljc2IDIxMC40NCAzMjcuNzQgQyAyMTAuOTcgMzI1LjIyIDIwOC4zNyAzMjQuNDEgMjA3LjQwIDMyMi42MCBDIDIwNi42OCAzMjAuODYgMjA4LjA3IDMxOS4zMiAyMDguNjcgMzE3LjgwIEMgMjA4LjMyIDMxNi4zOCAyMDcuOTQgMzE0Ljk3IDIwNy41NSAzMTMuNTcgQyAyMDYuODQgMzE0LjMzIDIwNS43NCAzMTQuOTMgMjA1LjU4IDMxNi4wNiBDIDIwNC4zNCAzMjEuNzMgMjA2LjQ3IDMyNy40MyAyMDYuMzAgMzMzLjEzIEMgMjA1LjU2IDMzMi4xNCAyMDQuODQgMzMxLjE1IDIwNC4xMSAzMzAuMTYgQyAyMDEuNjcgMzI4LjkyIDIwMC4xOSAzMjYuNjIgMTk4LjM4IDMyNC42OSBDIDE5Ni41MiAzMjIuOTggMTkzLjkxIDMyNC4zMSAxOTEuNzYgMzI0LjQ5IEMgMTkwLjg2IDMyNy4xMyAxODkuNzAgMzI5Ljk1IDE5MC40MyAzMzIuNzkgQyAxOTEuMTYgMzM0LjYyIDE5Mi4xMSAzMzYuMzUgMTkyLjkxIDMzOC4xNSBDIDE5MS42NCAzMzcuMTkgMTg5Ljg1IDMzNi41NCAxODkuMzEgMzM0LjkwIEMgMTg4Ljg0IDMzMi40NCAxODguNzUgMzI5LjkzIDE4OC4zOSAzMjcuNDYgQyAxOTEuNzggMzI0LjA1IDE5NS41NSAzMjEuMDkgMTk5LjUxIDMxOC4zOCBDIDIwMS4xMSAzMTcuNjAgMjAwLjQxIDMxNS43OCAyMDAuNDIgMzE0LjQwIEMgMjAwLjY0IDMxNC4wNiAyMDEuMDcgMzEzLjM5IDIwMS4yOCAzMTMuMDUgQyAxOTkuNzEgMzEzLjQ4IDE5Ny4zOSAzMTIuNjIgMTk2LjQyIDMxNC4zNCBDIDE5NC40OCAzMTYuNzYgMTkzLjU2IDMxOS45OCAxOTAuOTkgMzIxLjg5IEMgMTg5LjI4IDMyMy4yMSAxODcuNDMgMzI0LjM0IDE4NS42MyAzMjUuNTQgQyAxODUuMzEgMzI1LjI3IDE4NC42NSAzMjQuNzMgMTg0LjMyIDMyNC40NyBDIDE4My40NiAzMjQuNTIgMTgxLjcyIDMyNC42MiAxODAuODUgMzI0LjY4IEMgMTgyLjUyIDMyMS4wNiAxODMuODkgMzE3LjMwIDE4NS42NiAzMTMuNzMgQyAxODYuMjggMzEyLjI1IDE4Ny4zNCAzMTAuNzAgMTg2Ljc5IDMwOS4wNCBDIDE4Ni4xOSAzMDcuNzUgMTg0LjY0IDMwNy41OCAxODMuNTEgMzA3LjAxIEMgMTgyLjY5IDMxNi4zNSAxNzcuMDkgMzI0LjI3IDE3MS45MSAzMzEuNzQgQyAxNzEuMDIgMzMwLjE5IDE3MC4wNSAzMjguNjkgMTY5LjI1IDMyNy4xMCBDIDE3Mi4wMCAzMjIuODMgMTczLjUzIDMxNy4wMiAxNzguNzAgMzE1LjA2IEMgMTc4Ljc3IDMxMy40NCAxNzguNzEgMzExLjgzIDE3OC41OCAzMTAuMjIgQyAxNzcuNjUgMzEwLjM4IDE3Ni43MyAzMTAuNTYgMTc1LjgxIDMxMC43OCBDIDE3Ni4xNyAzMTEuOTYgMTc2LjYzIDMxMy4xOSAxNzYuMTIgMzE0LjQzIEMgMTc1Ljg0IDMxMy41MyAxNzUuMjkgMzExLjc1IDE3NS4wMSAzMTAuODUgQyAxNzMuOTQgMzEyLjkzIDE3My40OCAzMTUuMjcgMTcyLjM1IDMxNy4zMiBDIDE3MC44NCAzMTkuNTkgMTY4Ljc3IDMyMS40MCAxNjYuOTAgMzIzLjM3IEMgMTY1LjkyIDMyMi42MiAxNjQuOTQgMzIxLjg4IDE2My45NiAzMjEuMTUgQyAxNjAuOTggMzIwLjkxIDE1Ny45NyAzMjEuMjMgMTU1LjQzIDMyMi45MSBDIDE1NS4wMyAzMjAuMjQgMTU0LjY2IDMxNy41NiAxNTQuNDMgMzE0Ljg3IEMgMTU1LjI2IDMxMy45NSAxNTYuMDggMzEzLjA1IDE1Ni45MSAzMTIuMTQgQyAxNTYuODcgMzEwLjc0IDE1Ni44NCAzMDkuMzQgMTU2LjgxIDMwNy45NSBDIDE1NS4wOCAzMDYuOTUgMTUzLjUxIDMwNS4wOSAxNTEuMzQgMzA1LjM0IEMgMTQ4Ljc0IDMwNi41OSAxNDYuMjYgMzA4LjgzIDE0NS44OCAzMTEuODMgQyAxNDUuNTggMzE0LjAyIDE0NS41NiAzMTYuMjMgMTQ1LjM5IDMxOC40MyBDIDE0NC45MiAzMTguNTQgMTQzLjk3IDMxOC43NiAxNDMuNTAgMzE4Ljg4IEMgMTQyLjk4IDMxNS4yNSAxNDMuNTkgMzExLjY2IDE0NC40MyAzMDguMTQgQyAxNDcuNzMgMzA1Ljk5IDE1MS4wMiAzMDMuNjggMTU0Ljg4IDMwMi42MyBDIDE1Ni4zMCAzMDMuNDMgMTU3LjczIDMwNC4yMSAxNTkuMTggMzA0Ljk3IEMgMTYwLjU3IDMwMi44MCAxNjAuODcgMzAwLjM0IDE1OS43MSAyOTguMDEgQyAxNTMuNTAgMzAwLjM3IDE0Ni45MCAzMDEuNzkgMTQwLjk3IDMwNC44NSBDIDEzOS4xNCAzMDkuNDQgMTM2Ljc0IDMxMy43OSAxMzUuMzggMzE4LjU2IEwgMTM0LjY1IDMxOC4xOCBDIDEzNC4xNiAzMTkuNTkgMTMzLjYyIDMyMC45OSAxMzMuMDMgMzIyLjM2IEMgMTMxLjc4IDMxOC4xOSAxMjkuOTAgMzE0LjIzIDEyOC44MyAzMTAuMDAgQyAxMjkuNTggMzA5LjI3IDEzMS4wOCAzMDcuODAgMTMxLjgyIDMwNy4wNiBMIDEyOC43NSAzMDcuMzIgQyAxMjkuODkgMzA2LjU4IDEzMS4wMyAzMDUuODMgMTMyLjE2IDMwNS4wOCBDIDEzMS4xMSAzMDQuNzAgMTI4Ljk5IDMwMy45NiAxMjcuOTQgMzAzLjU5IEMgMTI3LjM2IDMwMC45OSAxMjcuMDggMjk4LjMzIDEyNy42NyAyOTUuNzEgQyAxMjYuMzYgMjk3LjkxIDEyNC42NCAyOTkuODEgMTIyLjc4IDMwMS41NyBDIDEyMy42MCAzMDEuNTMgMTI1LjIyIDMwMS40NiAxMjYuMDMgMzAxLjQyIEMgMTI1LjMwIDMwMi4wNyAxMjMuODMgMzAzLjM3IDEyMy4xMCAzMDQuMDIgQyAxMjMuNTcgMzA0LjUzIDEyNC41MSAzMDUuNTUgMTI0Ljk4IDMwNi4wNiBDIDEyMi4zNiAzMDguODIgMTE4Ljg4IDMxMC40MyAxMTUuMTkgMzExLjE2IEMgMTE2LjMxIDMwNC45MSAxMTcuMzEgMjk4LjQ0IDEyMC41OCAyOTIuODcgQyAxMTkuODIgMjkzLjIyIDExOC4yOCAyOTMuOTAgMTE3LjUyIDI5NC4yNSBDIDExOC4wNCAyOTMuMzAgMTE5LjA4IDI5MS40MCAxMTkuNjAgMjkwLjQ1IEMgMTE4Ljc4IDI5MS4yNyAxMTcuMTQgMjkyLjkxIDExNi4zMiAyOTMuNzQgQyAxMTYuNTEgMjkyLjc3IDExNi44OSAyOTAuODQgMTE3LjA5IDI4OS44OCBDIDExNi42NiAyOTAuMzkgMTE1LjgwIDI5MS40MyAxMTUuMzggMjkxLjk1IEMgMTE0Ljk3IDI4OS42NyAxMTIuNTkgMjg5LjU2IDExMy4yMSAyOTEuODcgQyAxMTIuNDUgMjk1LjA3IDExNS40OCAyOTguMDEgMTE0LjA0IDMwMS4xMCBDIDExMi44NSAzMDQuMzMgMTExLjYwIDMwNy41NyAxMTAuOTggMzEwLjk4IEMgMTA5LjY0IDMxMC41OSAxMDguMzAgMzEwLjI2IDEwNi45NSAzMDkuOTcgQyAxMDguMjggMzA4LjUwIDEwOS40NiAzMDYuOTAgMTEwLjM5IDMwNS4xNSBDIDExMS4xOSAzMDQuMzggMTExLjk4IDMwMy41OCAxMTIuNjkgMzAyLjcyIEMgMTEyLjA0IDMwMi40NSAxMTAuNzUgMzAxLjkwIDExMC4xMCAzMDEuNjMgQyAxMTAuNjggMjk5Ljk1IDExMS4yOCAyOTguMjggMTExLjY4IDI5Ni41NiBDIDEwOS4yOSAyOTkuNDQgMTA3LjkxIDMwMi45NSAxMDYuMjIgMzA2LjI0IEMgMTAzLjg1IDMwOC43OSAxMDAuNDQgMzEwLjAzIDk3LjM0IDMxMS40NCBDIDk3LjMyIDMxMS4xOSA5Ny4yNyAzMTAuNzEgOTcuMjQgMzEwLjQ2IEMgOTguMDcgMzA0LjA4IDk3LjMyIDI5Ny42MiA5OC4zNyAyOTEuMjYgQyAxMDEuMTkgMjg5LjYxIDEwNC4xMCAyODguMDcgMTA2LjY5IDI4Ni4wNSBDIDEwNi41NiAyODUuNDAgMTA2LjI5IDI4NC4wOSAxMDYuMTYgMjgzLjQzIEMgMTAzLjUyIDI4NS4xOSAxMDAuNjEgMjg2LjQ0IDk3Ljg2IDI4OC4wMCBDIDk1LjcwIDI4OS4zNiA5NS4yMiAyOTIuMDcgOTQuNTYgMjk0LjM1IEMgOTMuNDAgMjk4LjM4IDkyLjg1IDMwMi41NSA5Mi42NCAzMDYuNzMgQyA5MS4zMCAzMDUuMDkgODkuODYgMzAzLjU0IDg4LjM5IDMwMi4wMiBMIDg4LjM0IDMwMS40NSBDIDg4LjQwIDI5OC45MyA4Ny4zNyAyOTYuNjUgODYuNDAgMjk0LjQwIEMgODQuODEgMjkzLjg3IDgzLjI2IDI5My45NCA4MS43MyAyOTQuNjAgQyA4MS41MCAyOTMuNDEgODEuMjUgMjkyLjIzIDgxLjA5IDI5MS4wNCBDIDg1LjEyIDI4OC4xMiA4OS4xOCAyODUuMTAgOTIuNTMgMjgxLjQwIEMgOTIuMjYgMjgwLjY0IDkxLjcwIDI3OS4xMSA5MS40MiAyNzguMzQgQyA5MS4wMSAyNzguMDIgOTAuMTggMjc3LjM5IDg5Ljc3IDI3Ny4wNyBDIDg2LjY2IDI4MS44MyA4Mi42NyAyODUuOTMgNzcuODkgMjg5LjAyIEMgNTkuMDcgMjYzLjQ3IDQ4LjU1IDIzMS43NSA0OS4xMCAxOTkuOTYgQyA0OC42MCAxNjguMzggNTkuMjEgMTM3LjA1IDc3LjYyIDExMS41MyBDIDg3LjQ1IDk4LjIyIDk5LjM0IDg2LjQzIDExMi43NCA3Ni43MyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTYuOTAgNTcuNDIgQyAyMDUuOTUgNTUuMTIgMjE2LjQ1IDU4LjMwIDIyMi4wMyA2NS45NiBDIDIyNy4xNSA3Mi43MyAyMjcuMzcgODIuMTcgMjI0LjU4IDg5LjkyIEMgMjIxLjU1IDk3LjgzIDIxMy45NyAxMDIuODQgMjA2LjMwIDEwNS42MSBDIDIwNi4yOSAxMDguMDIgMjA2LjI3IDExMC40MiAyMDYuMjYgMTEyLjgzIEMgMjA0LjA5IDExNS4xNiAyMDIuMDMgMTE3LjU5IDE5OS45NyAxMjAuMDMgQyAxOTguNzAgMTE4LjcwIDE5Ni44MCAxMTcuNzYgMTk2LjExIDExNi4wMCBDIDE5Ny4wMCAxMTQuNDAgMTk4LjM5IDExMy4xNSAxOTkuNjEgMTExLjgwIEMgMTkxLjgwIDEwNC44OCAxODIuOTkgOTkuMTcgMTc1LjMyIDkyLjEwIEMgMTc2LjA3IDkwLjYwIDE3Ny4yMyA4OS40NiAxNzguODcgODkuMDIgQyAxODMuMDcgOTIuOTIgMTg2Ljk1IDk3LjE2IDE5MS4xOCAxMDEuMDMgQyAxOTMuNDMgOTQuNzIgMTk2LjAxIDg4LjQ5IDE5Ny43OCA4Mi4wNCBDIDE5Ny40NSA3OC4yNCAxOTYuMDQgNzQuNjMgMTk1LjIyIDcwLjkyIEMgMTkwLjA5IDY5Ljc1IDE4NS4xNSA2Ny44NiAxODAuMDIgNjYuNjcgQyAxNzguMjAgNjYuOTIgMTc2LjQxIDY3LjM1IDE3NC41OSA2Ny41NSBDIDE3NC41NSA2Ni41MCAxNzQuNTEgNjUuNDYgMTc0LjQ5IDY0LjQxIEMgMTc3LjM4IDY0LjM3IDE4MC4yMiA2NC45NiAxODMuMDUgNjUuNDYgQyAxODYuOTAgNjEuNjkgMTkxLjU1IDU4LjUzIDE5Ni45MCA1Ny40MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxODQuOTQgNjUuODEgQyAxODkuMzIgNjEuMzQgMTk1Ljc0IDU5LjAyIDIwMS45NyA1OS41MCBDIDIwOS40OCA1OS43MCAyMTYuNTUgNjQuNjIgMjE5LjQzIDcxLjU1IEMgMjIyLjUwIDc5LjA4IDIyMi41NSA4OC4yMCAyMTguMjQgOTUuMjggQyAyMTYuMTAgOTguNzggMjEyLjYyIDEwMS4yMiAyMDguODUgMTAyLjcwIEMgMjA3LjM4IDk1Ljc1IDIwNi4xOSA4OC43MyAyMDQuNDEgODEuODcgQyAyMDMuODQgODEuNzIgMjAyLjcwIDgxLjQxIDIwMi4xMyA4MS4yNSBDIDIwMy45NiA3OS4wMCAyMDUuMzEgNzYuNDAgMjA2LjA3IDczLjU5IEMgMjA5Ljk5IDcyLjgyIDIxMy45OCA3Mi41OCAyMTcuOTUgNzIuMjQgQyAyMTQuNjkgNjguNzcgMjA5Ljk1IDY2LjU1IDIwNy45NCA2Mi4wNCBDIDIwNy4yNSA2Mi4xNyAyMDUuODYgNjIuNDIgMjA1LjE3IDYyLjU1IEMgMjA1LjUyIDYzLjU1IDIwNS40MCA2NS4wNiAyMDYuNzcgNjUuMzIgQyAyMDguODYgNjYuMTQgMjEwLjA4IDY4LjA5IDIxMS4yOCA2OS44NiBDIDIwOC4yNiA2OS43NSAyMDUuMjkgNjkuMjIgMjAyLjM2IDY4LjUyIEMgMjAyLjA4IDY2LjE4IDIwMS44NSA2My44NCAyMDEuNjQgNjEuNDkgQyAxOTkuODMgNjEuMjQgMTk4LjAxIDYxLjAwIDE5Ni4xOSA2MC44NSBDIDE5Ni41OCA2My43MyAxOTcuNjggNjYuNDMgMTk5Ljg5IDY4LjM5IEMgMTk0Ljg4IDY3LjY4IDE4OS45MSA2Ni43NCAxODQuOTQgNjUuODEgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTkyLjE5IDEwMi4wMCBDIDE5NC44OCA5Ni44NyAxOTguMTMgOTIuMDMgMjAxLjA4IDg3LjA0IEMgMjAzLjQ0IDkyLjMxIDIwNS40NSA5Ny43MyAyMDcuNjAgMTAzLjEwIEMgMjA0Ljc1IDEwNS4wMSAyMDIuOTMgMTA3Ljk4IDIwMC43NSAxMTAuNTcgQyAxOTcuNzkgMTA3LjgyIDE5NC44MyAxMDUuMDYgMTkyLjE5IDEwMi4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTcuNTMgOTkuNDkgQyAxOTguNDcgOTkuNDggMjAwLjM2IDk5LjQ2IDIwMS4zMCA5OS40NiBDIDIwMS4yOSAxMDIuMDggMjAxLjMwIDEwNC43MCAyMDEuMjkgMTA3LjMzIEMgMjAwLjY3IDEwNy4yOSAxOTkuNDQgMTA3LjIwIDE5OC44MiAxMDcuMTYgQyAxOTguNjUgMTA0LjU2IDE5OC42NCAxMDEuOTEgMTk3LjUzIDk5LjQ5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE3NS42OSAxMDkuNTUgQyAxNzYuMDAgMTA3LjQzIDE3NC4zNiAxMDMuNzIgMTc3LjcwIDEwMy42NSBDIDE3Ny43MSAxMDQuNTcgMTc3Ljc0IDEwNi40MiAxNzcuNzUgMTA3LjM1IEMgMTgwLjY1IDEwNy40NSAxODMuNTUgMTA3LjU2IDE4Ni40NSAxMDcuMzggQyAxODcuMjEgMTA4Ljk4IDE4Ny45OSAxMTAuNTcgMTg4Ljg2IDExMi4xMSBDIDE4OS43NyAxMTAuNjEgMTg4LjUzIDEwOC45OSAxODguMzQgMTA3LjQ4IEMgMTg5LjE5IDEwNy40NSAxOTAuODggMTA3LjQwIDE5MS43MyAxMDcuMzcgQyAxOTEuNzggMTEwLjMwIDE5MS44MCAxMTMuMjQgMTkxLjc4IDExNi4xNyBDIDE4OS4xMCAxMTUuOTMgMTg2LjEyIDExNi44MSAxODMuNjQgMTE1LjU2IEMgMTgzLjYzIDExNS4xNSAxODMuNjAgMTE0LjMzIDE4My41OCAxMTMuOTIgQyAxODQuNDAgMTEzLjgyIDE4Ni4wNCAxMTMuNjIgMTg2Ljg2IDExMy41MiBDIDE4NS43NiAxMTEuMzUgMTg0LjQzIDEwOS4zMCAxODIuODIgMTA3LjQ4IEMgMTgxLjMyIDExMC42MSAxODIuNzQgMTE3LjM2IDE3Ny4zNSAxMTYuNDAgQyAxNzcuMjQgMTE0Ljk4IDE3Ny44MSAxMTMuODggMTc5LjA1IDExMy4wOSBDIDE3OS4xOSAxMTIuMjEgMTc5LjQ2IDExMC40NSAxNzkuNjAgMTA5LjU3IEMgMTc4LjI5IDEwOS41NiAxNzYuOTkgMTA5LjU2IDE3NS42OSAxMDkuNTUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjA3LjQ5IDEwNy4zNyBDIDIwOS43NSAxMDcuNDAgMjEyLjAxIDEwNy40MSAyMTQuMjggMTA3LjQxIEMgMjE0LjIzIDExMC4xOCAyMTQuMjMgMTEyLjk1IDIxNC4zNiAxMTUuNzIgQyAyMTIuMTIgMTE2LjIzIDIwOS44MSAxMTYuMjIgMjA3LjUyIDExNi4yMyBDIDIwNy41MCAxMTUuNjEgMjA3LjQ0IDExNC4zOSAyMDcuNDEgMTEzLjc4IEMgMjA4Ljg2IDExMy43OCAyMTAuMzEgMTEzLjc5IDIxMS43NiAxMTMuNzkgQyAyMTEuNjYgMTEyLjE3IDIxMS44MiAxMTAuNDQgMjEwLjk0IDEwOS4wMSBDIDIxMC4zMCAxMTAuNzUgMjA5LjEyIDExMS41OCAyMDcuNDEgMTExLjUxIEMgMjA3LjQzIDExMC40NyAyMDcuNDcgMTA4LjQxIDIwNy40OSAxMDcuMzcgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjE1LjgyIDEwNy40MiBDIDIxNy45NSAxMDcuNDEgMjIwLjA5IDEwNy40MSAyMjIuMjIgMTA3LjQyIEMgMjIyLjE1IDExMC4xMyAyMjIuMTQgMTEyLjg1IDIyMi4yNSAxMTUuNTYgQyAyMjEuNjMgMTE1Ljc2IDIyMC4zOCAxMTYuMTUgMjE5Ljc2IDExNi4zNSBDIDIxOS43MyAxMTQuMDggMjE5LjcyIDExMS44MSAyMTkuNzAgMTA5LjU0IEMgMjE4LjQyIDEwOS41MyAyMTcuMTQgMTA5LjUzIDIxNS44NiAxMDkuNTMgTCAyMTUuODIgMTA3LjQyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDIxNi4yMyAxMTEuNDQgQyAyMTYuNzggMTExLjUzIDIxNy44NyAxMTEuNzAgMjE4LjQxIDExMS43OSBDIDIxOC4zOSAxMTMuMjggMjE4LjM3IDExNC43OCAyMTguMzUgMTE2LjI4IEMgMjE3LjY5IDExNi4yNCAyMTYuMzkgMTE2LjE1IDIxNS43NCAxMTYuMTEgQyAyMTUuODkgMTE0LjU1IDIxNi4wNSAxMTMuMDAgMjE2LjIzIDExMS40NCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxMTkuMjUgMTM2LjMwIEMgMTI0Ljc0IDEzNi4zNSAxMzAuMjMgMTM2LjMxIDEzNS43MyAxMzYuMzIgQyAxMzUuNzYgMTQzLjQyIDEzNS42OSAxNTAuNTIgMTM1Ljc3IDE1Ny42MiBDIDEzOC4xNyAxNTUuOTYgMTQxLjQ4IDE1NC44NyAxNDIuNjQgMTUxLjk1IEMgMTQzLjEyIDE0Ni43NiAxNDIuNjkgMTQxLjUzIDE0Mi44NiAxMzYuMzIgQyAxNDguNjMgMTM2LjMyIDE1NC40MCAxMzYuMzEgMTYwLjE4IDEzNi4zMyBDIDE2MC4xMCAxNDEuMjYgMTYwLjI2IDE0Ni4yMCAxNjAuMTIgMTUxLjEzIEMgMTU5Ljc4IDE1NS4wNSAxNTcuMzEgMTU4LjcxIDE1My44OSAxNjAuNjEgQyAxNDcuODUgMTY0LjA0IDE0MS44MCAxNjcuNDQgMTM1LjczIDE3MC44MCBDIDEzNS43MyAxNzcuODEgMTM1LjczIDE4NC44MiAxMzUuNzQgMTkxLjgzIEMgMTMwLjI0IDE5MS44NiAxMjQuNzQgMTkxLjgyIDExOS4yMyAxOTEuODYgQyAxMTkuMjcgMTczLjM0IDExOS4yMyAxNTQuODIgMTE5LjI1IDEzNi4zMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxNjQuOTIgMTM2LjMyIEMgMTcwLjQ2IDEzNi4zNSAxNzUuOTkgMTM2LjI4IDE4MS41MiAxMzYuMzUgQyAxODEuNDQgMTUwLjc5IDE4MS40MyAxNjUuMjMgMTgxLjUyIDE3OS42NyBDIDE3Ni4wNSAxNzkuNjIgMTcwLjU3IDE3OS44NyAxNjUuMTAgMTc5LjU3IEMgMTY0LjYzIDE2NS4yMyAxNjQuOTkgMTUwLjcyIDE2NC45MiAxMzYuMzIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTg2LjI4IDEzNi4zMCBDIDIwMC42OSAxMzYuMzQgMjE1LjEwIDEzNi4zMyAyMjkuNTEgMTM2LjMxIEMgMjI5LjUyIDE1MC43NyAyMjkuNDkgMTY1LjIzIDIyOS41MyAxNzkuNjkgQyAyMjMuOTQgMTc5LjY0IDIxOC4zNSAxNzkuODEgMjEyLjc3IDE3OS42MCBDIDIxMi45NSAxNzAuMjggMjEyLjc3IDE2MC45NSAyMTIuODcgMTUxLjYyIEMgMjA5LjUxIDE1MS41NSAyMDYuMTUgMTUxLjU3IDIwMi44MCAxNTEuNjAgQyAyMDIuODcgMTYwLjk2IDIwMi44MSAxNzAuMzMgMjAyLjgzIDE3OS42OSBDIDE5Ny4zMiAxNzkuNzMgMTkxLjgwIDE3OS42NyAxODYuMjkgMTc5LjY5IEMgMTg2LjMwIDE2NS4yMyAxODYuMzIgMTUwLjc2IDE4Ni4yOCAxMzYuMzAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjM0LjA5IDEzNi4yOCBDIDIzOS42NyAxMzYuMzggMjQ1LjI1IDEzNi4yOSAyNTAuODQgMTM2LjMzIEMgMjUwLjg2IDE0MS41MiAyNTAuNjYgMTQ2LjcyIDI1MC45OSAxNTEuOTAgQyAyNTMuODggMTQ4LjkwIDI1My41MyAxNDQuMjMgMjU1LjgwIDE0MC44MyBDIDI1Ny41NyAxMzcuNTkgMjYxLjQxIDEzNi4yOCAyNjQuOTIgMTM2LjM0IEMgMjY4Ljc0IDEzNi40MCAyNzIuODUgMTM1Ljc4IDI3Ni40MiAxMzcuNDggQyAyNzkuNTEgMTM5LjA0IDI4MC43NiAxNDIuNjcgMjgwLjcxIDE0NS45NSBDIDI4MC43NCAxNTcuMTggMjgwLjcwIDE2OC40MiAyODAuNzIgMTc5LjY2IEMgMjcyLjkyIDE3OS42NiAyNjUuMTIgMTc5LjcwIDI1Ny4zMiAxNzkuNjYgQyAyNTcuMzcgMTc0LjU5IDI1Ny4zNSAxNjkuNTIgMjU3LjMyIDE2NC40NSBDIDI1OS41NiAxNjQuNDUgMjYxLjgxIDE2NC40NCAyNjQuMDYgMTY0LjQzIEMgMjY0LjAzIDE2MC42MiAyNjQuMjQgMTU2Ljc5IDI2My43MyAxNTMuMDEgQyAyNjIuMDkgMTUyLjQxIDI1OS4xMSAxNTEuODYgMjU4LjQ1IDE1NC4wNCBDIDI1NS44NiAxNjIuNTUgMjUzLjUxIDE3MS4xNCAyNTAuOTQgMTc5LjY2IEMgMjQ1LjA3IDE3OS43MyAyMzkuMTkgMTc5LjcyIDIzMy4zMiAxNzkuNjYgQyAyMzUuNTQgMTcyLjY2IDIzNy41OSAxNjUuNjAgMjM5Ljg5IDE1OC42MiBDIDIzNy43OSAxNTguMjIgMjM0LjYwIDE1Ny45MCAyMzQuMzYgMTU1LjE4IEMgMjMzLjc2IDE0OC45MSAyMzQuMjUgMTQyLjU4IDIzNC4wOSAxMzYuMjggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjIuMzYgMTgzLjk4IEMgMjQuOTMgMTg0LjYzIDI3LjQyIDE4NS41NSAyOS43NCAxODYuODUgQyAyOC44MiAxODcuMzYgMjYuOTggMTg4LjM4IDI2LjA3IDE4OC44OSBDIDI2LjQ0IDE4OS4wNiAyNy4xOSAxODkuNDAgMjcuNTcgMTg5LjU2IEMgMjcuNzggMTkwLjI0IDI4LjIwIDE5MS42MCAyOC40MSAxOTIuMjggQyAyOC4yOSAxOTIuOTQgMjguMDYgMTk0LjI2IDI3Ljk0IDE5NC45MiBDIDI5LjQwIDE5Mi4xNCAzMi42MCAxOTAuOTQgMzQuMTAgMTg4LjIxIEMgMzQuNzIgMTg4LjIwIDM1Ljk3IDE4OC4yMCAzNi41OSAxODguMjAgQyAzNi41OCAxODkuMzcgMzYuNTcgMTkwLjU1IDM2LjU2IDE5MS43MyBDIDMzLjk1IDE5Mi43OSAzMS43MiAxOTQuNTEgMjkuNDEgMTk2LjA4IEMgMzAuNTkgMTk2Ljg3IDMxLjc4IDE5Ny42OCAzMi45NyAxOTguNDggQyAzMy44MyAxOTguMzUgMzUuNTcgMTk4LjA4IDM2LjQ0IDE5Ny45NSBDIDM2LjQ3IDE5OS41NyAzNi40OSAyMDEuMjAgMzYuNDggMjAyLjgzIEMgMzMuNjcgMjAxLjg3IDMxLjA2IDIwMC40NSAyOC40NCAxOTkuMDcgQyAyNy40OCAyMDEuMjIgMjUuNjEgMjAyLjY1IDIzLjc2IDIwMy45OSBDIDI1LjU5IDIwNS4zNCAyNy41NCAyMDYuNTcgMjkuMDYgMjA4LjI5IEMgMzAuMjAgMjA5LjgzIDI4Ljc1IDIxMS43NyAyOC40OCAyMTMuMzcgQyAyOS45MCAyMTQuMDQgMzEuMzMgMjE0Ljc1IDMyLjAwIDIxNi4yOSBDIDMwLjI4IDIxNi4zMCAyOC41NyAyMTYuMjIgMjYuODYgMjE2LjA0IEMgMjQuOTMgMjE1LjIzIDI1Ljk5IDIxMi44MyAyNS42NCAyMTEuMjcgQyAyNC44NiAyMTAuMjYgMjMuNjMgMjA5Ljc2IDIyLjYxIDIwOS4wNiBDIDIxLjI1IDIxMC4zMiAxOS40MyAyMTEuMzMgMTkuMDUgMjEzLjMwIEMgMjAuNDMgMjE0LjAzIDIxLjg1IDIxNC43OCAyMi42NiAyMTYuMjEgQyAyMC42OSAyMTYuMjYgMTguNzIgMjE2LjI1IDE2Ljc0IDIxNi4yMCBDIDE1Ljc2IDIxMi42MiAxOC4wMiAyMDkuMjEgMTcuMjYgMjA1LjY3IEMgMTYuMzYgMjA1LjEyIDE1LjQxIDIwNC42NSAxNC40NCAyMDQuMjUgQyAxMi45OCAyMDAuOTQgMTQuODEgMTk3LjQzIDE0LjIxIDE5NC4wMyBDIDEzLjg5IDE5Mi40MSAxMy40OSAxOTAuODIgMTMuMjAgMTg5LjIwIEMgMTMuODAgMTg5LjIyIDE1LjAyIDE4OS4yNCAxNS42MyAxODkuMjYgQyAxNS45MiAxOTMuNTAgMTUuNjIgMTk3Ljc0IDE1LjUxIDIwMS45OCBDIDE1LjkwIDIwMi40MiAxNi42OCAyMDMuMjkgMTcuMDcgMjAzLjcyIEMgMTguNTUgMjAyLjMzIDIwLjc1IDIwMS4zMiAyMS4xMiAxOTkuMTEgQyAyMS42NiAxOTUuNjQgMTguNzcgMTkyLjUwIDE5LjY4IDE4OS4wMSBDIDIwLjMyIDE4Ny4yMSAyMS40MiAxODUuNjMgMjIuMzYgMTgzLjk4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM2OS4yNSAxODYuOTAgQyAzNzEuNTQgMTg1LjU1IDM3NC4wNCAxODQuNjQgMzc2LjYwIDE4My45NSBDIDM3Ny41NCAxODUuNjAgMzc4LjYzIDE4Ny4xOSAzNzkuMzAgMTg4Ljk4IEMgMzc5Ljk4IDE5Mi4wOSAzNzguMDYgMTk0Ljk4IDM3Ny43NyAxOTguMDIgQyAzNzcuNjMgMjAwLjU5IDM3OS44MyAyMDIuMzUgMzgxLjg1IDIwMy40NyBDIDM4NC43OCAyMDIuNzAgMzgzLjAxIDE5OS4wOCAzODMuMjggMTk2Ljk5IEMgMzgzLjYxIDE5NC4wOSAzODEuOTEgMTkwLjAxIDM4NS4xNiAxODguMzEgQyAzODUuNDAgMTg5LjU2IDM4NS43MSAxOTAuODggMzg1LjIyIDE5Mi4xMyBDIDM4My42MyAxOTYuMTEgMzg2LjE0IDIwMC4zNiAzODQuNTcgMjA0LjM0IEMgMzgzLjg1IDIwNC41OSAzODIuNDIgMjA1LjEwIDM4MS43MSAyMDUuMzYgQyAzODAuNzUgMjA4Ljk0IDM4My42OSAyMTIuNzMgMzgxLjg5IDIxNi4wOCBDIDM4MC4wNyAyMTYuMzcgMzc4LjIyIDIxNi4yNCAzNzYuMzkgMjE2LjIyIEMgMzc3LjAxIDIxNC42MyAzNzguNTUgMjE0LjAyIDM3OS45NiAyMTMuMzUgQyAzNzkuNTEgMjExLjQwIDM3Ny43MyAyMTAuMzUgMzc2LjM4IDIwOS4wNyBDIDM3NS4zNCAyMDkuNzQgMzc0LjIyIDIxMC4zNCAzNzMuMzQgMjExLjIyIEMgMzczLjMwIDIxMi40NyAzNzMuMjcgMjEzLjczIDM3My4yNSAyMTQuOTggQyAzNzIuMDIgMjE3LjE0IDM2OC45OCAyMTUuODAgMzY3LjAyIDIxNi4yOCBDIDM2Ny42MCAyMTQuNjYgMzY5LjA3IDIxMy45OSAzNzAuNTAgMjEzLjMzIEMgMzcwLjA2IDIxMS44NiAzNjkuNjYgMjEwLjM5IDM2OS4yOCAyMDguOTEgQyAzNzEuMDUgMjA3LjA0IDM3My4wOCAyMDUuNDUgMzc1LjIxIDIwNC4wMiBDIDM3My4zNiAyMDIuNjYgMzcxLjU0IDIwMS4xOCAzNzAuNTAgMTk5LjA4IEMgMzY3LjkzIDIwMC41MCAzNjUuMzQgMjAxLjk0IDM2Mi40OSAyMDIuNzYgQyAzNjIuNDkgMjAxLjEwIDM2Mi41MSAxOTkuNDUgMzYyLjU1IDE5Ny43OSBDIDM2My4zOSAxOTcuOTcgMzY1LjA3IDE5OC4zMyAzNjUuOTAgMTk4LjUxIEMgMzY3LjE0IDE5Ny43MiAzNjguMzkgMTk2Ljk0IDM2OS42NSAxOTYuMTggQyAzNjcuMzMgMTk0LjU3IDM2NS4wNyAxOTIuODMgMzYyLjQ1IDE5MS43MiBDIDM2Mi40MiAxOTAuNTUgMzYyLjM5IDE4OS4zOCAzNjIuMzcgMTg4LjIxIEMgMzYyLjk5IDE4OC4yMSAzNjQuMjMgMTg4LjIxIDM2NC44NSAxODguMjEgQyAzNjYuMTAgMTkwLjI3IDM2OC4wMSAxOTEuODggMzcwLjM1IDE5Mi42MCBDIDM3MC4zNyAxOTMuMTMgMzcwLjQyIDE5NC4yMCAzNzAuNDQgMTk0LjczIEMgMzcxLjY1IDE5My4yNCAzNzEuMzkgMTkxLjM3IDM3MS4yNSAxODkuNjAgQyAzNzEuNjcgMTg5LjM5IDM3Mi40OSAxODguOTggMzcyLjkxIDE4OC43NyBDIDM3MS45OSAxODguMzAgMzcwLjE2IDE4Ny4zNyAzNjkuMjUgMTg2LjkwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDIwNi43OSAxODYuMzcgQyAyMDYuOTEgMTg2LjQwIDIwNy4xNiAxODYuNDYgMjA3LjI4IDE4Ni40OSBDIDIwNi45MyAxODcuNzUgMjA2LjYwIDE4OS4wMSAyMDYuMjggMTkwLjI4IEMgMjA1LjQ1IDE5My40MSAyMDQuNTggMTk2LjUzIDIwMy43NCAxOTkuNjYgQyAyMTIuMTggMjAwLjU5IDIyMC41MyAyMDIuMzQgMjI5LjA0IDIwMi41MyBDIDIzMC41NSAxOTkuNDkgMjMyLjE4IDE5Ni41MSAyMzMuODUgMTkzLjU2IEMgMjMzLjE5IDE5My42OSAyMzEuODcgMTkzLjk1IDIzMS4yMSAxOTQuMDggQyAyMjkuNjQgMTk1LjQyIDIyOC4wMiAxOTYuNzIgMjI2LjM5IDE5Ny45OSBDIDIyNi45OCAxOTYuNDIgMjI3LjYxIDE5NC44NyAyMjguMjQgMTkzLjMyIEMgMjI4LjcxIDE5Mi4xNiAyMjkuMTkgMTkxLjAyIDIyOS43MSAxODkuODggQyAyMjkuNzQgMTkxLjQyIDIyOS42MCAxOTIuOTUgMjI5LjI5IDE5NC40NyBDIDIzMC40NyAxOTIuOTQgMjMxLjc1IDE5MS40OSAyMzMuMTEgMTkwLjEyIEwgMjMyLjExIDE5Mi4xMyBDIDIzMi44MiAxOTIuNjMgMjMzLjU0IDE5My4xNCAyMzQuMjYgMTkzLjY1IEwgMjM0Ljg1IDE5MS4xOSBDIDIzNS40MiAxOTkuNTEgMjI4LjE5IDIwNS40NiAyMjYuMzggMjEzLjIyIEMgMjMxLjczIDIxMy4yNSAyMzcuMDggMjEzLjIxIDI0Mi40NCAyMTMuMjIgQyAyNDIuNDUgMjI3LjY3IDI0Mi40NCAyNDIuMTIgMjQyLjQ1IDI1Ni41OCBDIDIzNi45MCAyNTYuNTMgMjMxLjM1IDI1Ni42MyAyMjUuODEgMjU2LjUwIEMgMjI1LjgwIDI0Mi41NyAyMjYuMDkgMjI4LjYzIDIyNS42NiAyMTQuNzIgQyAyMjQuNDQgMjE3LjI4IDIyMy40NCAyMTkuOTQgMjIyLjI1IDIyMi41MiBDIDIxNy4xOCAyMzIuOTcgMjE1LjY5IDI0NC44MSAyMTAuMTIgMjU1LjA0IEMgMjA3Ljc3IDI1OC4xNyAyMDUuMDggMjYxLjE3IDIwMS44NyAyNjMuNDMgQyAxOTYuODYgMjYzLjU0IDE5MS44OCAyNjIuNzYgMTg2Ljg4IDI2Mi41NCBDIDE4MS42OCAyNjIuMjQgMTc3LjA0IDI1OS42OSAxNzIuMzIgMjU3Ljc4IEMgMTY5LjcyIDI2NS45NCAxNjYuOTggMjc0LjA2IDE2NC4xNSAyODIuMTQgQyAxNjMuODcgMjgwLjk1IDE2My42NCAyNzkuNzUgMTYzLjQ0IDI3OC41NSBDIDE2Mi4xOCAyNzkuNTcgMTYxLjI3IDI4MC45MiAxNjAuMTkgMjgyLjExIEMgMTYwLjc4IDI4MC4yMCAxNjEuNTMgMjc4LjMzIDE2Mi42MSAyNzYuNjUgQyAxNjEuNTIgMjc2Ljc0IDE2MC40MyAyNzYuODMgMTU5LjM0IDI3Ni45MiBDIDE1OS4wNiAyNzcuNjAgMTU4LjUwIDI3OC45NyAxNTguMjIgMjc5LjY2IEMgMTU3Ljk4IDI3OS42MiAxNTcuNDggMjc5LjU1IDE1Ny4yMyAyNzkuNTEgQyAxNTcuNjAgMjc4Ljg4IDE1OC4zMyAyNzcuNjIgMTU4LjcwIDI3Ni45OSBDIDE1Ny43OSAyNzYuMzEgMTU2LjgwIDI3NS43NSAxNTUuODEgMjc1LjE5IEMgMTU1Ljg2IDI3Ni42NiAxNTUuMzUgMjc3LjkwIDE1NC4yNyAyNzguOTQgQyAxNTQuNTAgMjc3LjQwIDE1NC44MiAyNzUuODcgMTU1LjEzIDI3NC4zNiBMIDE1Ni42NiAyNzQuNjEgQyAxNTYuMDUgMjczLjY3IDE1NS40NCAyNzIuNzQgMTU0LjgxIDI3MS44MyBDIDE1My45MCAyNzMuNjUgMTUyLjk5IDI3NS41MCAxNTEuOTkgMjc3LjI5IEMgMTUxLjMyIDI3Ni45OCAxNDkuOTkgMjc2LjM4IDE0OS4zMiAyNzYuMDggQyAxNDkuNzMgMjc1LjAwIDE1MC4xMiAyNzMuOTEgMTUwLjUwIDI3Mi44MyBDIDE1MC44NCAyNzMuNjIgMTUxLjUxIDI3NS4yMCAxNTEuODUgMjc1Ljk5IEwgMTUxLjEyIDI3My4xNCBMIDE1Mi40NCAyNzMuNjggQyAxNTIuOTEgMjcyLjQ3IDE1My40MSAyNzEuMjcgMTUzLjg5IDI3MC4wNiBDIDE1NC4zMSAyNjkuNzUgMTU1LjE0IDI2OS4xNSAxNTUuNTYgMjY4Ljg1IEMgMTU1LjMzIDI2OS4zNCAxNTQuODggMjcwLjMzIDE1NC42NiAyNzAuODIgQyAxNTYuMTUgMjcxLjg2IDE1Ni42MCAyNzMuODkgMTU4LjA1IDI3NC44NiBDIDE1OS45OSAyNzQuMDUgMTYwLjM4IDI3MS4zOSAxNjEuNjUgMjY5LjgwIEMgMTYxLjM3IDI3Mi4xMSAxNjAuNTQgMjc0LjI5IDE1OS4zNyAyNzYuMjkgQyAxNjAuNTIgMjc2LjE5IDE2MS42OCAyNzYuMTEgMTYyLjgzIDI3Ni4wMyBDIDE2NS4xMCAyNzEuMjcgMTY2LjcwIDI2Ni4yNCAxNjguMDUgMjYxLjE1IEMgMTY1LjY0IDI1OS44NCAxNjMuMzMgMjU4LjMxIDE2MC43NiAyNTcuMzQgQyAxNTcuNTQgMjU2LjMxIDE1NC4xMyAyNTYuMDIgMTUwLjk1IDI1NC44OCBDIDE0Ny44OSAyNTMuODcgMTQ1LjA5IDI1Mi4yMSAxNDIuMDMgMjUxLjIxIEMgMTM4Ljk1IDI1NC4yNiAxMzYuNzEgMjU4LjA0IDEzNC4wOSAyNjEuNDggQyAxMzIuNTkgMjYzLjQ4IDEzMS40NCAyNjUuNzEgMTMwLjI4IDI2Ny45MiBDIDEzMS42MSAyNjMuOTIgMTMzLjQyIDI2MC4xMCAxMzUuNzYgMjU2LjU5IEMgMTMwLjY5IDI1Ni41NCAxMjUuNjIgMjU2LjYwIDEyMC41NSAyNTYuNTQgQyAxMjAuNTYgMjQyLjE0IDEyMC42OSAyMjcuNzMgMTIwLjQ5IDIxMy4zNCBDIDEyNi4wNCAyMTMuMDkgMTMxLjYwIDIxMy4yNyAxMzcuMTYgMjEzLjIyIEMgMTM3LjI2IDIyNi44MiAxMzYuOTAgMjQwLjQyIDEzNy4zNCAyNTQuMDEgQyAxNDUuMjkgMjQwLjMwIDE1My4wMyAyMjUuOTggMTY1LjA1IDIxNS4zMyBDIDE3My4xNiAyMDguMzMgMTg1LjQ5IDIwOS42NyAxOTQuMjUgMjE0Ljc0IEMgMTk5LjM0IDIwNS43MiAyMDIuNzAgMTk1Ljg2IDIwNi43OSAxODYuMzcgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjExLjE0IDE5MC44OSBDIDIxMS44MCAxODkuNDAgMjEyLjQ5IDE4Ny44NyAyMTMuNzkgMTg2LjgzIEMgMjEzLjExIDE4OC40NyAyMTIuMjcgMTkwLjA2IDIxMi4wOSAxOTEuODYgQyAyMTMuNDMgMTkwLjY3IDIxNC42OCAxODkuMzkgMjE1Ljk1IDE4OC4xMiBDIDIxNS40NSAxODkuMzIgMjE0Ljk1IDE5MC41MyAyMTQuNDYgMTkxLjc0IEMgMjE2LjgyIDE5Mi4yNyAyMTguMTUgMTg5LjkyIDIxOS44OSAxODguOTQgQyAyMTkuNDAgMTg5LjgwIDIxOC40MiAxOTEuNTQgMjE3LjkzIDE5Mi40MCBDIDIxOC42NCAxOTIuMTMgMjIwLjA3IDE5MS41OCAyMjAuNzkgMTkxLjMxIEMgMjIxLjAzIDE5MS42OSAyMjEuNTEgMTkyLjQ2IDIyMS43NSAxOTIuODQgQyAyMjIuMjYgMTkxLjk1IDIyMy4yNyAxOTAuMTcgMjIzLjc4IDE4OS4yOCBMIDIyMy42MCAxOTMuNDQgQyAyMjQuNzYgMTkyLjM0IDIyNS44OCAxOTEuMjEgMjI2Ljk2IDE5MC4wNSBDIDIyNi43NyAxOTAuNzkgMjI2LjM5IDE5Mi4yOCAyMjYuMjAgMTkzLjAzIEwgMjI4LjI0IDE5My4zMiBDIDIyNy42MSAxOTQuODcgMjI2Ljk4IDE5Ni40MiAyMjYuMzkgMTk3Ljk5IEMgMjI4LjAyIDE5Ni43MiAyMjkuNjQgMTk1LjQyIDIzMS4yMSAxOTQuMDggQyAyMzEuODcgMTkzLjk1IDIzMy4xOSAxOTMuNjkgMjMzLjg1IDE5My41NiBDIDIzMi4xOCAxOTYuNTEgMjMwLjU1IDE5OS40OSAyMjkuMDQgMjAyLjUzIEMgMjIwLjUzIDIwMi4zNCAyMTIuMTggMjAwLjU5IDIwMy43NCAxOTkuNjYgQyAyMDQuNTggMTk2LjUzIDIwNS40NSAxOTMuNDEgMjA2LjI4IDE5MC4yOCBDIDIwNy44OSAxOTAuNDggMjA5LjUyIDE5MC42OSAyMTEuMTQgMTkwLjg5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDI5NC40OSAyMjkuNDkgQyAyOTQuNDkgMjIwLjIxIDI5NC40MiAyMTAuOTQgMjk0LjUwIDIwMS42NyBDIDMwMC4wNiAyMDEuNjkgMzA1LjYyIDIwMS43MiAzMTEuMTkgMjAxLjY3IEMgMzExLjE4IDIwNS41MyAzMTEuMTggMjA5LjM4IDMxMS4xOCAyMTMuMjQgQyAzMTguNzIgMjEzLjIwIDMyNi4yNyAyMTMuMjMgMzMzLjgyIDIxMy4yMyBDIDMzMy44MiAyMjAuNDggMzMzLjg2IDIyNy43NCAzMzMuODAgMjM1LjAwIEMgMzM0LjE3IDI0My41OCAzMjMuMDggMjQ3Ljc5IDMyNC4yOSAyNTYuNTYgQyAzMTguMTIgMjU2LjU3IDMxMS45NSAyNTYuNTggMzA1Ljc4IDI1Ni41NSBDIDMwNS44NiAyNTMuOTQgMzA1LjM5IDI1MS4wMyAzMDcuMDQgMjQ4Ljc4IEMgMzA5Ljc4IDI0NC42MiAzMTIuOTAgMjQwLjcxIDMxNS41NyAyMzYuNTAgQyAzMTYuOTMgMjM0LjQzIDMxNi4yNyAyMzEuODEgMzE2LjUwIDIyOS40OCBDIDMwOS4xNiAyMjkuNTAgMzAxLjgyIDIyOS40OCAyOTQuNDkgMjI5LjQ5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDAuMDAgMjA3LjQ2IEMgMS42MiAyMjUuODUgMy45NyAyNDQuMzMgOS44OSAyNjEuOTAgQyAyNi44MSAzMTUuMDUgNjcuNDAgMzU5Ljc2IDExOC4xNiAzODIuNjQgQyAxNDEuMTMgMzkzLjE0IDE2Ni4xNyAzOTguNzYgMTkxLjM2IDQwMC4wMCBMIDAuMDAgNDAwLjAwIEwgMC4wMCAyMDcuNDYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzgyLjgwIDI4MS44NiBDIDM5My4yOSAyNTguOTAgMzk4LjU3IDIzMy44NiA0MDAuMDAgMjA4LjczIEwgNDAwLjAwIDQwMC4wMCBMIDIxMC4yOSA0MDAuMDAgQyAyMjQuNjggMzk4Ljg5IDIzOS4wOCAzOTcuMTAgMjUyLjk5IDM5My4xMSBDIDMwOS45NSAzNzcuODMgMzU4LjgyIDMzNS42OCAzODIuODAgMjgxLjg2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDcyLjU1IDIxMy4yMCBDIDgzLjM4IDIxMy4yNSA5NC4yMSAyMTMuMjAgMTA1LjA0IDIxMy4yMyBDIDEwOC4wOCAyMTMuMjQgMTExLjQzIDIxMy45NyAxMTMuNDggMjE2LjQwIEMgMTE1LjQzIDIxOC44MSAxMTUuNTkgMjIyLjAzIDExNS41OSAyMjUuMDAgQyAxMTUuNTYgMjM1LjUxIDExNS41OSAyNDYuMDIgMTE1LjU4IDI1Ni41NCBDIDEwOS45OSAyNTYuNTggMTA0LjQwIDI1Ni41OSA5OC44MCAyNTYuNTIgQyA5OC42OCAyNDcuMjMgOTkuMzEgMjM3Ljg4IDk4LjQ2IDIyOC42MyBDIDk1LjMzIDIyOC40NSA5Mi4xOSAyMjguNDUgODkuMDUgMjI4LjQzIEMgODguNjEgMjM1Ljg3IDg5LjIwIDI0My4zNCA4OC43NCAyNTAuNzggQyA4OC41MSAyNTMuNzAgODYuMDIgMjU2LjA1IDgzLjE1IDI1Ni4zMiBDIDc3LjYzIDI1Ni44NiA3Mi4wNiAyNTYuNDMgNjYuNTIgMjU2LjU1IEMgNjYuNTUgMjUxLjI2IDY2LjUyIDI0NS45NiA2Ni41NCAyNDAuNjYgQyA2OC40NCAyNDAuMjkgNzEuMDcgMjQxLjQ1IDcyLjQ5IDIzOS43OSBDIDcyLjY1IDIzMC45MyA3Mi41MSAyMjIuMDYgNzIuNTUgMjEzLjIwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDI0Ny4yNSAyMTMuMjUgQyAyNjEuNjkgMjEzLjI0IDI3Ni4xMyAyMTMuMTMgMjkwLjU2IDIxMy4zMSBDIDI5MC4zNyAyMjcuNzIgMjkwLjUxIDI0Mi4xNCAyOTAuNDkgMjU2LjU2IEMgMjg0LjkyIDI1Ni41NCAyNzkuMzUgMjU2LjYzIDI3My43OCAyNTYuNTEgQyAyNzMuODYgMjQ3LjE2IDI3My43MyAyMzcuODIgMjczLjg1IDIyOC40NyBDIDI3MC40OSAyMjguNDYgMjY3LjE0IDIyOC40NCAyNjMuNzkgMjI4LjUxIEMgMjYzLjgzIDIzNy44NiAyNjMuNzUgMjQ3LjIyIDI2My44NCAyNTYuNTggQyAyNTguMzEgMjU2LjU0IDI1Mi43OSAyNTYuNTkgMjQ3LjI3IDI1Ni41NSBDIDI0Ny4yNyAyNDIuMTEgMjQ3LjMwIDIyNy42OCAyNDcuMjUgMjEzLjI1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ny4xMCAyMTkuMTIgQyAxOTUuOTkgMjE3LjQ5IDE5Ni4zNiAyMTUuNzAgMTk3LjY0IDIxNC4zMSBDIDIwNC42MyAyMTguMzQgMjEzLjAxIDIxOC41MyAyMjAuODMgMjE5LjQwIEMgMjE4LjExIDIyNC41MSAyMTYuNTMgMjMwLjEwIDIxNC40OCAyMzUuNDkgQyAyMDkuMjEgMjM0Ljc1IDIwMy45OSAyMzMuNzUgMTk4LjcxIDIzMy4xNCBDIDE5OC42OCAyMjguNDMgMTk5LjQ0IDIyMy40NCAxOTcuMTAgMjE5LjEyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5MC4wOSAyMjMuMTQgQyAxOTIuMDQgMjIxLjk1IDE5My4xNCAyMTkuODQgMTk1LjA2IDIxOC42MSBDIDE5Ny4xNiAyMjQuNTEgMTk2LjI3IDIzMC44OCAxOTUuNjkgMjM2Ljk2IEMgMTkxLjM3IDIzNS4zMSAxODYuNzIgMjM1LjMwIDE4Mi4xNyAyMzUuMjcgQyAxODMuMDIgMjMwLjQ0IDE4NS42NiAyMjUuNTQgMTkwLjA5IDIyMy4xNCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxNTIuNDkgMjMzLjkyIEMgMTU1LjgyIDIzMC4yMyAxNTguMjIgMjI1LjY5IDE2Mi4wOSAyMjIuNTEgQyAxNjkuMTQgMjIyLjQwIDE3Ni42MyAyMjQuMzMgMTgyLjE4IDIyOC44MiBDIDE3OS41MSAyMzIuNTYgMTc2Ljg4IDIzNi4zOCAxNzUuMjggMjQwLjcyIEMgMTY3LjY0IDIzOC42NCAxNTkuOTYgMjM2LjU2IDE1Mi40OSAyMzMuOTIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk5LjU1IDI1MC4xNSBDIDIwMi43MCAyNTAuODggMjA1LjgxIDI1MS44MiAyMDguODkgMjUyLjgxIEMgMjA2Ljk4IDI1Ni4wMiAyMDQuNDggMjU5LjE1IDIwMC45NSAyNjAuNjUgQyAxOTEuNTUgMjYxLjMxIDE4Mi4wMiAyNTkuMzYgMTczLjQ3IDI1NS40MyBDIDE3My40NyAyNTQuODQgMTczLjQ3IDI1My42OCAxNzMuNDcgMjUzLjA5IEMgMTgxLjgwIDI1NS4yMyAxOTAuNDAgMjU3LjUyIDE5OS4wMyAyNTUuNjUgQyAxOTkuMjYgMjUzLjgyIDE5OS40MiAyNTEuOTkgMTk5LjU1IDI1MC4xNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxMzQuMDkgMjYxLjQ4IEMgMTM2LjcxIDI1OC4wNCAxMzguOTUgMjU0LjI2IDE0Mi4wMyAyNTEuMjEgQyAxNDUuMDkgMjUyLjIxIDE0Ny44OSAyNTMuODcgMTUwLjk1IDI1NC44OCBDIDE1NC4xMyAyNTYuMDIgMTU3LjU0IDI1Ni4zMSAxNjAuNzYgMjU3LjM0IEMgMTYzLjMzIDI1OC4zMSAxNjUuNjQgMjU5Ljg0IDE2OC4wNSAyNjEuMTUgQyAxNjYuNzAgMjY2LjI0IDE2NS4xMCAyNzEuMjcgMTYyLjgzIDI3Ni4wMyBDIDE2MS42OCAyNzYuMTEgMTYwLjUyIDI3Ni4xOSAxNTkuMzcgMjc2LjI5IEMgMTYwLjU0IDI3NC4yOSAxNjEuMzcgMjcyLjExIDE2MS42NSAyNjkuODAgQyAxNjAuMzggMjcxLjM5IDE1OS45OSAyNzQuMDUgMTU4LjA1IDI3NC44NiBDIDE1Ni42MCAyNzMuODkgMTU2LjE1IDI3MS44NiAxNTQuNjYgMjcwLjgyIEMgMTU0Ljg4IDI3MC4zMyAxNTUuMzMgMjY5LjM0IDE1NS41NiAyNjguODUgQyAxNTUuMTQgMjY5LjE1IDE1NC4zMSAyNjkuNzUgMTUzLjg5IDI3MC4wNiBDIDE1My40MCAyNzAuNDIgMTUyLjQxIDI3MS4xNSAxNTEuOTIgMjcxLjUyIEMgMTUxLjM4IDI3MS4zOCAxNTAuMzAgMjcxLjEyIDE0OS43NiAyNzAuOTkgQyAxNDguNTggMjcyLjkyIDE0Ny4zMSAyNzQuODYgMTQ1LjM4IDI3Ni4xMiBDIDE0Ni4xMCAyNzMuMzcgMTQ5Ljc2IDI3MC4yMyAxNDYuNDMgMjY3LjkyIEMgMTQ2LjU1IDI2Ni44OSAxNDYuNjggMjY1Ljg3IDE0Ni44MCAyNjQuODYgQyAxNDYuMDIgMjY1Ljk4IDE0NS4yMyAyNjcuMTAgMTQ0LjQ2IDI2OC4yNCBMIDE0My4zNyAyNjkuNjYgTCAxNDMuNjAgMjY3LjA0IEMgMTQzLjc5IDI2Ni4yMiAxNDQuMTcgMjY0LjU3IDE0NC4zNiAyNjMuNzQgQyAxNDMuNDkgMjY0Ljg4IDE0Mi42MiAyNjYuMDEgMTQxLjc5IDI2Ny4xOCBDIDE0MS4zNiAyNjYuNjMgMTQwLjUwIDI2NS41MyAxNDAuMDcgMjY0Ljk3IEMgMTQwLjUyIDI2My41NCAxNDEuMDAgMjYyLjEyIDE0MS40NyAyNjAuNzAgQyAxNDAuODUgMjYxLjU4IDE0MC4yMiAyNjIuNDYgMTM5LjYwIDI2My4zNSBDIDEzNS44MyAyNjIuOTQgMTM1LjM4IDI2Ny4xNiAxMzMuMDYgMjY5LjExIEMgMTMzLjc3IDI2Ni45NiAxMzQuNzggMjY0Ljk0IDEzNS43OSAyNjIuOTIgQyAxMzUuMzcgMjYyLjU2IDEzNC41MiAyNjEuODQgMTM0LjA5IDI2MS40OCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxMzkuNjAgMjYzLjM1IEMgMTQwLjIyIDI2Mi40NiAxNDAuODUgMjYxLjU4IDE0MS40NyAyNjAuNzAgQyAxNDEuMDAgMjYyLjEyIDE0MC41MiAyNjMuNTQgMTQwLjA3IDI2NC45NyBDIDEzOS40NiAyNjcuNjEgMTM3LjcwIDI2OS43NiAxMzUuMjIgMjcwLjgzIEMgMTM2LjU1IDI2OC4yNiAxMzguMTEgMjY1LjgyIDEzOS42MCAyNjMuMzUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzYuMTYgMjYzLjE2IEMgMzcuMTEgMjYyLjgxIDM4LjA2IDI2Mi40NyAzOS4wMSAyNjIuMTQgQyA0MC4yMiAyNjYuMTUgNDMuNTAgMjY5Ljc3IDQzLjI0IDI3NC4wNiBDIDQwLjUwIDI3Ni4xNCAzNy4xOSAyNzcuMjggMzQuMTggMjc4LjkwIEMgMzMuNDEgMjc3LjMzIDMyLjYzIDI3NS43NiAzMS44OSAyNzQuMTggQyAzNC4zNiAyNzMuMDEgMzYuODMgMjcxLjg2IDM5LjMxIDI3MC43MyBDIDM4LjI4IDI2OC4xOSAzNy4yMCAyNjUuNjkgMzYuMTYgMjYzLjE2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM1Ny44OSAyNjIuNTYgQyAzNTkuNTUgMjYzLjIxIDM2MS4yMCAyNjMuODcgMzYyLjg3IDI2NC41MiBDIDM2My4xNCAyNjUuOTIgMzYzLjE5IDI2Ny4zNCAzNjMuMDYgMjY4Ljc2IEMgMzY0Ljk2IDI2Ny45NyAzNjYuODQgMjY3LjE0IDM2OC43MyAyNjYuMzEgQyAzNjcuOTYgMjY4LjA0IDM2Ny4xOSAyNjkuNzcgMzY2LjQ3IDI3MS41MiBDIDM2My44OSAyNzIuNzIgMzYxLjI0IDI3My43NCAzNTguNjEgMjc0LjgwIEMgMzYwLjEyIDI3NS44NCAzNjEuNzggMjc2LjYyIDM2My40OSAyNzcuMjYgQyAzNjIuODEgMjc4LjkwIDM2Mi4xMCAyODAuNTIgMzYxLjM4IDI4Mi4xNCBDIDM1OS40NCAyODEuMjQgMzU3LjU2IDI4MC4yMiAzNTUuNzMgMjc5LjE0IEMgMzU1Ljc1IDI3OC4yOSAzNTUuNzkgMjc2LjU4IDM1NS44MiAyNzUuNzIgQyAzNTQuMjMgMjc2LjMyIDM1Mi42NCAyNzYuOTIgMzUxLjA2IDI3Ny41MiBDIDM1MS42OCAyNzUuODYgMzUyLjE2IDI3NC4wMyAzNTMuNDIgMjcyLjczIEMgMzU1LjgyIDI3MS42MCAzNTguMzcgMjcwLjgxIDM2MC44MyAyNjkuODEgQyAzNTkuMzMgMjY4LjY0IDM1Ny42MiAyNjcuODAgMzU1Ljg3IDI2Ny4wNyBDIDM1Ni41NSAyNjUuNTYgMzU3LjIyIDI2NC4wNiAzNTcuODkgMjYyLjU2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE0MS43OSAyNjcuMTggQyAxNDIuNjIgMjY2LjAxIDE0My40OSAyNjQuODggMTQ0LjM2IDI2My43NCBDIDE0NC4xNyAyNjQuNTcgMTQzLjc5IDI2Ni4yMiAxNDMuNjAgMjY3LjA0IEMgMTQyLjgzIDI2OS40NSAxNDEuOTggMjcyLjM1IDEzOS4zMCAyNzMuMjIgQyAxNDAuMDcgMjcxLjE4IDE0MC43NyAyNjkuMTAgMTQxLjc5IDI2Ny4xOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxNDQuNDYgMjY4LjI0IEMgMTQ1LjIzIDI2Ny4xMCAxNDYuMDIgMjY1Ljk4IDE0Ni44MCAyNjQuODYgQyAxNDYuNjggMjY1Ljg3IDE0Ni41NSAyNjYuODkgMTQ2LjQzIDI2Ny45MiBDIDE0NS43MSAyNjkuODYgMTQ0LjkxIDI3MS43NyAxNDQuMjAgMjczLjcxIEMgMTQzLjk4IDI3My42OCAxNDMuNTQgMjczLjYwIDE0My4zMiAyNzMuNTYgQyAxNDMuNjcgMjcxLjc4IDE0My45MSAyNjkuOTcgMTQ0LjQ2IDI2OC4yNCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzOS42MyAyNzkuMjkgQyA0MS42MiAyNzguMjQgNDMuNjAgMjc3LjE3IDQ1LjYwIDI3Ni4xNCBDIDQ2LjM2IDI3Ny41OSA0Ny4xMyAyNzkuMDUgNDcuODggMjgwLjUxIEMgNDUuODggMjgxLjU5IDQzLjg5IDI4Mi42NiA0MS44NyAyODMuNzAgQyA0MS4xMyAyODIuMjMgNDAuMzggMjgwLjc2IDM5LjYzIDI3OS4yOSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAzMTUuMTIgMjc1Ljg4IEMgMzE2LjU1IDI3Ny44NSAzMTcuMzMgMjgwLjE4IDMxOC4xMyAyODIuNDYgQyAzMTguNjMgMjgxLjEzIDMxOS4xNiAyNzkuODEgMzE5LjcyIDI3OC41MCBDIDMxOS42OCAyODIuNDIgMzE4LjgwIDI4Ni44MCAzMjIuMDUgMjg5Ljc2IEwgMzIyLjE1IDI4OS45MCBDIDMyMS41NCAyOTAuNTcgMzIwLjk0IDI5MS4yNiAzMjAuMzUgMjkxLjk1IEMgMzE4LjE5IDI4OC42NyAzMTYuMTUgMjg0LjU0IDMxMS43MCAyODQuMjMgQyAzMTIuODIgMjgzLjkzIDMxMy45NSAyODMuNjQgMzE1LjA4IDI4My4zNSBDIDMxMy42MSAyODIuNzUgMzEyLjM1IDI4MS44NyAzMTEuMzAgMjgwLjY5IEMgMzEyLjc4IDI4MS4yMCAzMTQuMjMgMjgxLjc3IDMxNS42NyAyODIuMzkgQyAzMTQuNDQgMjgwLjg3IDMxMy4yMiAyNzkuMzYgMzEyLjE4IDI3Ny43MiBDIDMxMy44MCAyNzguNjQgMzE1LjMxIDI3OS43MyAzMTYuNzEgMjgxLjAwIEMgMzE2LjMxIDI3OS43MiAzMTUuNTIgMjc3LjE2IDMxNS4xMiAyNzUuODggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gNzcuODkgMjg5LjAyIEMgODIuNjcgMjg1LjkzIDg2LjY2IDI4MS44MyA4OS43NyAyNzcuMDcgQyA5MC4xOCAyNzcuMzkgOTEuMDEgMjc4LjAyIDkxLjQyIDI3OC4zNCBDIDkxLjcwIDI3OS4xMSA5Mi4yNiAyODAuNjQgOTIuNTMgMjgxLjQwIEMgODkuMTggMjg1LjEwIDg1LjEyIDI4OC4xMiA4MS4wOSAyOTEuMDQgQyA4MS4yNSAyOTIuMjMgODEuNTAgMjkzLjQxIDgxLjczIDI5NC42MCBDIDgzLjI2IDI5My45NCA4NC44MSAyOTMuODcgODYuNDAgMjk0LjQwIEMgODcuMzcgMjk2LjY1IDg4LjQwIDI5OC45MyA4OC4zNCAzMDEuNDUgQyA4NS44NSAyOTkuNTkgODQuMzkgMjk2LjU1IDgxLjUzIDI5NS4xOSBDIDgwLjEzIDI5My4yNCA3OS40MyAyOTAuODggNzcuODkgMjg5LjAyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM0My43MiAyODkuNzMgQyAzNDYuMDMgMjg2LjI3IDM0Ny4zNyAyODEuOTIgMzUwLjg1IDI3OS40MSBDIDM1My45MiAyODEuMDEgMzU2LjkzIDI4Mi43MiAzNTkuOTUgMjg0LjQzIEMgMzU5LjE0IDI4NS45MyAzNTguMzEgMjg3LjQxIDM1Ny40OCAyODguODkgQyAzNTUuMDUgMjg3LjUwIDM1Mi42NSAyODYuMDQgMzUwLjE1IDI4NC44MCBDIDM0OC45NSAyODYuOTkgMzQ3LjYwIDI4OS4xMCAzNDYuMjMgMjkxLjE5IEMgMzQ1LjYwIDI5MC44MyAzNDQuMzUgMjkwLjEwIDM0My43MiAyODkuNzMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gNDMuNDIgMjg5LjU2IEMgNDUuNDkgMjg3LjQ1IDQ3LjM2IDI4NS4xNiA0OS4yMCAyODIuODUgQyA1MC4wOSAyODQuMjcgNTAuOTcgMjg1LjcwIDUxLjg2IDI4Ny4xMiBDIDQ5Ljg4IDI4OS4zNCA0Ny43NiAyOTEuNDYgNDYuMTQgMjkzLjk2IEMgNDYuNTMgMjk0LjM3IDQ3LjMxIDI5NS4xOCA0Ny43MCAyOTUuNTkgQyA0OS45MSAyOTQuMTMgNTIuMTAgMjkyLjY1IDU0LjE5IDI5MS4wMyBDIDU1LjE2IDI5Mi4zMSA1Ni4xNCAyOTMuNTggNTYuOTEgMjk1LjAwIEMgNTMuODggMjk2LjgzIDUwLjc0IDMwMS4yOCA0Ni44NSAyOTkuNDAgQyA0My40NCAyOTYuMzMgNDEuNTUgMjkxLjk1IDM5LjIwIDI4OC4wOCBDIDM5Ljg5IDI4Ny43MyA0MS4yNyAyODcuMDQgNDEuOTcgMjg2LjY5IEMgNDIuMzMgMjg3LjQxIDQzLjA2IDI4OC44NCA0My40MiAyODkuNTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gOTcuODYgMjg4LjAwIEMgMTAwLjYxIDI4Ni40NCAxMDMuNTIgMjg1LjE5IDEwNi4xNiAyODMuNDMgQyAxMDYuMjkgMjg0LjA5IDEwNi41NiAyODUuNDAgMTA2LjY5IDI4Ni4wNSBDIDEwNC4xMCAyODguMDcgMTAxLjE5IDI4OS42MSA5OC4zNyAyOTEuMjYgQyA5Ny4zMiAyOTcuNjIgOTguMDcgMzA0LjA4IDk3LjI0IDMxMC40NiBDIDk1LjYzIDMwOS4zMSA5NC4xMSAzMDguMDUgOTIuNjQgMzA2LjczIEMgOTIuODUgMzAyLjU1IDkzLjQwIDI5OC4zOCA5NC41NiAyOTQuMzUgQyA5NS4yMiAyOTIuMDcgOTUuNzAgMjg5LjM2IDk3Ljg2IDI4OC4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAzMDYuNDcgMjg2Ljc2IEMgMzA2LjkyIDI4NC44MiAzMDguNTkgMjg1LjIzIDMwOS4yOCAyODYuNzggQyAzMDkuNTkgMjg2LjY0IDMxMC4yMyAyODYuMzQgMzEwLjU1IDI4Ni4xOSBDIDMxMS4xMyAyOTAuNDEgMzEyLjU4IDI5NC41NiAzMTYuMTUgMjk3LjE1IEMgMzE1LjM3IDI5OC4wMSAzMTQuNTkgMjk4Ljg2IDMxMy44MSAyOTkuNzIgQyAzMTEuNDcgMjk2Ljc0IDMwOC40NyAyOTQuNDEgMzA1LjQxIDI5Mi4yMiBDIDMwNi4yNyAyOTIuMjMgMzA3Ljk3IDI5Mi4yNSAzMDguODIgMjkyLjI2IEMgMzA3LjcxIDI5MC45OCAzMDYuNTkgMjg5LjcyIDMwNS40OSAyODguNDQgQyAzMDYuMTQgMjg4LjU1IDMwNy40NSAyODguNzUgMzA4LjEwIDI4OC44NiBDIDMwNy42OSAyODguMzMgMzA2Ljg4IDI4Ny4yOSAzMDYuNDcgMjg2Ljc2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDI3OC43OCAyOTIuMDAgQyAyODAuMTYgMjkwLjE3IDI4MC41MyAyODcuOTQgMjgwLjk1IDI4NS43NSBDIDI4Mi4zOSAyOTMuNzkgMjg2LjM5IDMwMC45MSAyOTAuMTcgMzA4LjAzIEMgMjkxLjIwIDMwMy45MSAyOTIuMTUgMjk5Ljc1IDI5My42OCAyOTUuNzcgQyAyOTMuMzUgMjk0LjkyIDI5My4wMiAyOTQuMDcgMjkyLjcwIDI5My4yMyBDIDI5My4wMiAyOTEuOTMgMjkzLjM0IDI5MC42MyAyOTMuNjcgMjg5LjMzIEMgMjk1LjM1IDI4OS41MCAyOTcuMTcgMjg5LjQ3IDI5OC41OCAyOTAuNTcgQyAzMDIuMTEgMjkyLjkxIDMwNS43OCAyOTUuMDcgMzA5LjA3IDI5Ny43NiBDIDMxMC42NCAyOTguODIgMzEwLjkzIDMwMC44MCAzMTEuNjAgMzAyLjQ0IEMgMzEwLjI0IDMwMy43OCAzMDguOTIgMzA1LjE1IDMwNy42MyAzMDYuNTYgQyAzMDcuNTAgMzA1LjM3IDMwNy4zNiAzMDQuMTggMzA3LjIzIDMwMy4wMCBDIDMwNC4wNyAzMDAuODIgMzAxLjk1IDI5Ny41MSAyOTguODcgMjk1LjI3IEMgMjk3LjExIDI5NS4yOCAyOTUuNDYgMjk1Ljk5IDI5My43OCAyOTYuNDAgQyAyOTMuNjIgMjk4LjEwIDI5My40MyAyOTkuODEgMjkzLjIyIDMwMS41MSBDIDI5NC4zMiAzMDEuOTUgMjk1LjQyIDMwMi40MSAyOTYuNTMgMzAyLjg3IEMgMjk1LjU3IDMwNC4wNSAyOTQuNjMgMzA1LjIzIDI5My42MyAzMDYuMzYgQyAyOTMuMDQgMzA4LjUyIDI5Mi4xNSAzMTAuNTcgMjkxLjM1IDMxMi42NSBDIDI5MS44OCAzMTIuNzYgMjkyLjk0IDMxMi45OCAyOTMuNDcgMzEzLjA5IEMgMjkyLjM3IDMxNS4xMiAyOTMuMjcgMzE3LjI5IDI5My42MyAzMTkuMzcgQyAyNzIuOTUgMzM0Ljg2IDI0OC43NiAzNDYuMDcgMjIzLjA3IDM0OS43MyBDIDE5Ni45MiAzNTMuMzUgMTY5LjY2IDM1MS4wNCAxNDUuMTAgMzQxLjA1IEMgMTM0LjU2IDMzNy4xNyAxMjQuOTUgMzMxLjMzIDExNS4yOCAzMjUuNzQgQyAxMTUuNDQgMzI1LjU2IDExNS43NSAzMjUuMjAgMTE1LjkxIDMyNS4wMiBDIDExNi4xMiAzMjQuOTcgMTE2LjU1IDMyNC44NyAxMTYuNzYgMzI0LjgyIEMgMTE1LjgzIDMyMi4yNSAxMTYuMDEgMzE5LjU0IDExNi41NSAzMTYuOTIgQyAxMTcuMTQgMzE2LjAyIDExNy42OCAzMTUuMDkgMTE4LjE4IDMxNC4xNCBDIDExOC43NCAzMTIuMDUgMTE1LjQzIDMxNS4xMiAxMTQuNDQgMzE1LjE2IEMgMTEzLjc3IDMxOC4yOCAxMTMuMjkgMzIxLjg5IDExNS4xMCAzMjQuNzUgQyAxMTQuOTMgMzI0Ljg3IDExNC42MCAzMjUuMTMgMTE0LjQzIDMyNS4yNiBDIDEwOC44MSAzMjAuNTcgMTAzLjA2IDMxNi4wMCA5Ny4zNCAzMTEuNDQgQyAxMDAuNDQgMzEwLjAzIDEwMy44NSAzMDguNzkgMTA2LjIyIDMwNi4yNCBDIDEwNy45MSAzMDIuOTUgMTA5LjI5IDI5OS40NCAxMTEuNjggMjk2LjU2IEMgMTExLjI4IDI5OC4yOCAxMTAuNjggMjk5Ljk1IDExMC4xMCAzMDEuNjMgQyAxMTAuNzUgMzAxLjkwIDExMi4wNCAzMDIuNDUgMTEyLjY5IDMwMi43MiBDIDExMS45OCAzMDMuNTggMTExLjE5IDMwNC4zOCAxMTAuMzkgMzA1LjE1IEMgMTA5LjQ2IDMwNi45MCAxMDguMjggMzA4LjUwIDEwNi45NSAzMDkuOTcgQyAxMDguMzAgMzEwLjI2IDEwOS42NCAzMTAuNTkgMTEwLjk4IDMxMC45OCBDIDExMS42MCAzMDcuNTcgMTEyLjg1IDMwNC4zMyAxMTQuMDQgMzAxLjEwIEMgMTE1LjQ4IDI5OC4wMSAxMTIuNDUgMjk1LjA3IDExMy4yMSAyOTEuODcgQyAxMTIuNTkgMjg5LjU2IDExNC45NyAyODkuNjcgMTE1LjM4IDI5MS45NSBDIDExNS44MCAyOTEuNDMgMTE2LjY2IDI5MC4zOSAxMTcuMDkgMjg5Ljg4IEMgMTE2Ljg5IDI5MC44NCAxMTYuNTEgMjkyLjc3IDExNi4zMiAyOTMuNzQgQyAxMTcuMTQgMjkyLjkxIDExOC43OCAyOTEuMjcgMTE5LjYwIDI5MC40NSBDIDExOS4wOCAyOTEuNDAgMTE4LjA0IDI5My4zMCAxMTcuNTIgMjk0LjI1IEMgMTE4LjI4IDI5My45MCAxMTkuODIgMjkzLjIyIDEyMC41OCAyOTIuODcgQyAxMTcuMzEgMjk4LjQ0IDExNi4zMSAzMDQuOTEgMTE1LjE5IDMxMS4xNiBDIDExOC44OCAzMTAuNDMgMTIyLjM2IDMwOC44MiAxMjQuOTggMzA2LjA2IEMgMTI0LjUxIDMwNS41NSAxMjMuNTcgMzA0LjUzIDEyMy4xMCAzMDQuMDIgQyAxMjMuODMgMzAzLjM3IDEyNS4zMCAzMDIuMDcgMTI2LjAzIDMwMS40MiBDIDEyNS4yMiAzMDEuNDYgMTIzLjYwIDMwMS41MyAxMjIuNzggMzAxLjU3IEMgMTI0LjY0IDI5OS44MSAxMjYuMzYgMjk3LjkxIDEyNy42NyAyOTUuNzEgQyAxMjcuMDggMjk4LjMzIDEyNy4zNiAzMDAuOTkgMTI3Ljk0IDMwMy41OSBDIDEyOC45OSAzMDMuOTYgMTMxLjExIDMwNC43MCAxMzIuMTYgMzA1LjA4IEMgMTMxLjAzIDMwNS44MyAxMjkuODkgMzA2LjU4IDEyOC43NSAzMDcuMzIgTCAxMzEuODIgMzA3LjA2IEMgMTMxLjA4IDMwNy44MCAxMjkuNTggMzA5LjI3IDEyOC44MyAzMTAuMDAgQyAxMjkuOTAgMzE0LjIzIDEzMS43OCAzMTguMTkgMTMzLjAzIDMyMi4zNiBDIDEzMy42MiAzMjAuOTkgMTM0LjE2IDMxOS41OSAxMzQuNjUgMzE4LjE4IEwgMTM1LjM4IDMxOC41NiBDIDEzNi43NCAzMTMuNzkgMTM5LjE0IDMwOS40NCAxNDAuOTcgMzA0Ljg1IEMgMTQ2LjkwIDMwMS43OSAxNTMuNTAgMzAwLjM3IDE1OS43MSAyOTguMDEgQyAxNjAuODcgMzAwLjM0IDE2MC41NyAzMDIuODAgMTU5LjE4IDMwNC45NyBDIDE1Ny43MyAzMDQuMjEgMTU2LjMwIDMwMy40MyAxNTQuODggMzAyLjYzIEMgMTUxLjAyIDMwMy42OCAxNDcuNzMgMzA1Ljk5IDE0NC40MyAzMDguMTQgQyAxNDMuNTkgMzExLjY2IDE0Mi45OCAzMTUuMjUgMTQzLjUwIDMxOC44OCBDIDE0My45NyAzMTguNzYgMTQ0LjkyIDMxOC41NCAxNDUuMzkgMzE4LjQzIEMgMTQ1LjU2IDMxNi4yMyAxNDUuNTggMzE0LjAyIDE0NS44OCAzMTEuODMgQyAxNDYuMjYgMzA4LjgzIDE0OC43NCAzMDYuNTkgMTUxLjM0IDMwNS4zNCBDIDE1My41MSAzMDUuMDkgMTU1LjA4IDMwNi45NSAxNTYuODEgMzA3Ljk1IEMgMTU2Ljg0IDMwOS4zNCAxNTYuODcgMzEwLjc0IDE1Ni45MSAzMTIuMTQgQyAxNTYuMDggMzEzLjA1IDE1NS4yNiAzMTMuOTUgMTU0LjQzIDMxNC44NyBDIDE1NC42NiAzMTcuNTYgMTU1LjAzIDMyMC4yNCAxNTUuNDMgMzIyLjkxIEMgMTU3Ljk3IDMyMS4yMyAxNjAuOTggMzIwLjkxIDE2My45NiAzMjEuMTUgQyAxNjQuOTQgMzIxLjg4IDE2NS45MiAzMjIuNjIgMTY2LjkwIDMyMy4zNyBDIDE2OC43NyAzMjEuNDAgMTcwLjg0IDMxOS41OSAxNzIuMzUgMzE3LjMyIEMgMTczLjQ4IDMxNS4yNyAxNzMuOTQgMzEyLjkzIDE3NS4wMSAzMTAuODUgQyAxNzUuMjkgMzExLjc1IDE3NS44NCAzMTMuNTMgMTc2LjEyIDMxNC40MyBDIDE3Ni42MyAzMTMuMTkgMTc2LjE3IDMxMS45NiAxNzUuODEgMzEwLjc4IEMgMTc2LjczIDMxMC41NiAxNzcuNjUgMzEwLjM4IDE3OC41OCAzMTAuMjIgQyAxNzguNzEgMzExLjgzIDE3OC43NyAzMTMuNDQgMTc4LjcwIDMxNS4wNiBDIDE3My41MyAzMTcuMDIgMTcyLjAwIDMyMi44MyAxNjkuMjUgMzI3LjEwIEMgMTcwLjA1IDMyOC42OSAxNzEuMDIgMzMwLjE5IDE3MS45MSAzMzEuNzQgQyAxNzcuMDkgMzI0LjI3IDE4Mi42OSAzMTYuMzUgMTgzLjUxIDMwNy4wMSBDIDE4NC42NCAzMDcuNTggMTg2LjE5IDMwNy43NSAxODYuNzkgMzA5LjA0IEMgMTg3LjM0IDMxMC43MCAxODYuMjggMzEyLjI1IDE4NS42NiAzMTMuNzMgQyAxODMuODkgMzE3LjMwIDE4Mi41MiAzMjEuMDYgMTgwLjg1IDMyNC42OCBDIDE4MS43MiAzMjQuNjIgMTgzLjQ2IDMyNC41MiAxODQuMzIgMzI0LjQ3IEMgMTg0LjY1IDMyNC43MyAxODUuMzEgMzI1LjI3IDE4NS42MyAzMjUuNTQgQyAxODcuNDMgMzI0LjM0IDE4OS4yOCAzMjMuMjEgMTkwLjk5IDMyMS44OSBDIDE5My41NiAzMTkuOTggMTk0LjQ4IDMxNi43NiAxOTYuNDIgMzE0LjM0IEMgMTk3LjM5IDMxMi42MiAxOTkuNzEgMzEzLjQ4IDIwMS4yOCAzMTMuMDUgQyAyMDEuMDcgMzEzLjM5IDIwMC42NCAzMTQuMDYgMjAwLjQyIDMxNC40MCBDIDIwMC40MSAzMTUuNzggMjAxLjExIDMxNy42MCAxOTkuNTEgMzE4LjM4IEMgMTk1LjU1IDMyMS4wOSAxOTEuNzggMzI0LjA1IDE4OC4zOSAzMjcuNDYgQyAxODguNzUgMzI5LjkzIDE4OC44NCAzMzIuNDQgMTg5LjMxIDMzNC45MCBDIDE4OS44NSAzMzYuNTQgMTkxLjY0IDMzNy4xOSAxOTIuOTEgMzM4LjE1IEMgMTkyLjExIDMzNi4zNSAxOTEuMTYgMzM0LjYyIDE5MC40MyAzMzIuNzkgQyAxODkuNzAgMzI5Ljk1IDE5MC44NiAzMjcuMTMgMTkxLjc2IDMyNC40OSBDIDE5My45MSAzMjQuMzEgMTk2LjUyIDMyMi45OCAxOTguMzggMzI0LjY5IEMgMjAwLjE5IDMyNi42MiAyMDEuNjcgMzI4LjkyIDIwNC4xMSAzMzAuMTYgQyAyMDQuODQgMzMxLjE1IDIwNS41NiAzMzIuMTQgMjA2LjMwIDMzMy4xMyBDIDIwNi40NyAzMjcuNDMgMjA0LjM0IDMyMS43MyAyMDUuNTggMzE2LjA2IEMgMjA1Ljc0IDMxNC45MyAyMDYuODQgMzE0LjMzIDIwNy41NSAzMTMuNTcgQyAyMDcuOTQgMzE0Ljk3IDIwOC4zMiAzMTYuMzggMjA4LjY3IDMxNy44MCBDIDIwOC4wNyAzMTkuMzIgMjA2LjY4IDMyMC44NiAyMDcuNDAgMzIyLjYwIEMgMjA4LjM3IDMyNC40MSAyMTAuOTcgMzI1LjIyIDIxMC40NCAzMjcuNzQgQyAyMTIuMzcgMzI1Ljc2IDIxNS4wNSAzMjUuMTcgMjE3LjY1IDMyNC42MCBDIDIxNy4wMCAzMjMuNjkgMjE2LjM3IDMyMi43NyAyMTUuNzQgMzIxLjg2IEMgMjE0LjQ1IDMyMS4zMCAyMTMuMTggMzIwLjY4IDIxMS45MiAzMjAuMDQgQyAyMTIuNzcgMzE5LjE5IDIxMy42NCAzMTguMzQgMjE0LjUxIDMxNy41MCBDIDIxMy45MCAzMTUuOTggMjEzLjM0IDMxNC40NSAyMTIuODcgMzEyLjkwIEMgMjE1LjU1IDMxNS45MSAyMTcuMzIgMzE5LjYyIDIyMC4xNCAzMjIuNTIgQyAyMjIuODEgMzE3Ljc4IDIxOS43NyAzMTIuMTEgMjIyLjY0IDMwNy40OSBDIDIyMy4wNyAzMDcuNTEgMjIzLjkzIDMwNy41NiAyMjQuMzYgMzA3LjU4IEMgMjI0Ljk0IDMwOS40MCAyMjUuNTMgMzExLjIyIDIyNi4yNyAzMTIuOTggQyAyMjIuNDkgMzE3Ljg5IDIyNC45NyAzMjQuMDYgMjI1LjU3IDMyOS41NiBDIDIyNi4zOCAzMjkuMzMgMjI4LjAxIDMyOC44NyAyMjguODIgMzI4LjY0IEMgMjMxLjc5IDMyMS4wMSAyMzQuNjMgMzEyLjg4IDIzMy4zOSAzMDQuNTQgQyAyMzQuNjAgMzA1LjIxIDIzNy42NSAzMDQuOTEgMjM3LjUyIDMwNy4wMSBDIDIzNy4yNyAzMTEuNTQgMjM1LjY1IDMxNS45MCAyMzUuMzEgMzIwLjQ1IEMgMjM2LjA4IDMyMC4yMCAyMzYuODQgMzE5Ljk1IDIzNy42MSAzMTkuNzEgQyAyMzYuNTcgMzE2LjIwIDIzOC4yMiAzMTIuNjMgMjQxLjczIDMxMS40NiBDIDI0Mi45MCAzMTIuMjMgMjQ0LjA4IDMxMy4wMCAyNDUuMjYgMzEzLjc2IEMgMjQ1LjcyIDMxNi4zMiAyNDYuMjkgMzE4Ljg2IDI0Ni43NyAzMjEuNDEgQyAyNDkuNzcgMzIyLjM4IDI1Mi40MiAzMjQuMTEgMjU1LjE5IDMyNS41OSBDIDI1Ni40MiAzMjQuMzUgMjU3LjYyIDMyMy4wNyAyNTguODAgMzIxLjc4IEMgMjU4Ljg2IDMxOS4wOCAyNTguOTEgMzE2LjM5IDI1OC44OSAzMTMuNjkgQyAyNTYuODMgMzEyLjQ4IDI1NC44NCAzMTEuMTcgMjUzLjAwIDMwOS42NSBDIDI1NC40MCAzMDkuNjYgMjU1LjgwIDMwOS43MCAyNTcuMjAgMzA5Ljc2IEMgMjU2LjI4IDMwNi42NSAyNTYuMDcgMzAzLjM5IDI1Ni4wOSAzMDAuMTYgQyAyNTcuNzggMzAxLjAzIDI1OC43MSAzMDIuNjYgMjU5LjU0IDMwNC4yOCBDIDI1OS43NyAzMDIuOTcgMjYwLjAyIDMwMS42NiAyNjAuMjggMzAwLjM2IEMgMjYxLjUyIDMwNS4zNCAyNjEuNzcgMzEwLjk2IDI2NS44NiAzMTQuNjIgQyAyNjYuNzQgMzEyLjc4IDI2Ny4yMiAzMTAuNTEgMjY5LjEzIDMwOS40MyBDIDI3Mi4xNiAzMDcuMzUgMjc0Ljg3IDMwNC44MSAyNzguMDYgMzAyLjk0IEMgMjc3LjU5IDMwNS4zOCAyNzUuNTQgMzA2LjgyIDI3My42NyAzMDguMTkgQyAyNzUuNTYgMzA5LjU2IDI3Ni44OSAzMTEuNTEgMjc4LjIzIDMxMy4zOSBDIDI3OC41MiAzMTIuODcgMjc5LjEwIDMxMS44MSAyNzkuMzkgMzExLjI4IEMgMjgwLjU0IDMxMC45MiAyODEuNzAgMzEwLjU4IDI4Mi44NyAzMTAuMjQgQyAyODQuMDYgMzEwLjkxIDI4NS4yNSAzMTEuNTcgMjg2LjQ1IDMxMi4yNCBDIDI4NC45NiAzMDguOTUgMjgzLjg2IDMwNS41MCAyODIuNTkgMzAyLjEyIEMgMjgxLjgyIDI5OS41NyAyNzguNTggMjk4Ljc0IDI3OC4wNSAyOTYuMDkgQyAyNzcuMzcgMjkzLjIzIDI3Ni4yMiAyOTAuNTIgMjc1LjM4IDI4Ny43MSBDIDI3Ni44MiAyODguODggMjc3Ljc4IDI5MC40NyAyNzguNzggMjkyLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM0Mi40NSAyOTEuMzIgQyAzNDUuNzMgMjkzLjM4IDM0OC45NSAyOTUuNTEgMzUyLjEwIDI5Ny43NyBDIDM1MS4xOSAyOTkuMDAgMzUwLjMwIDMwMC4yNCAzNDkuMzkgMzAxLjQ4IEMgMzQ4LjgzIDMwMS4wNyAzNDcuNzAgMzAwLjI1IDM0Ny4xNCAyOTkuODQgQyAzNDcuMTYgMzAxLjgyIDM0Ny42NSAzMDMuOTMgMzQ2LjczIDMwNS44MCBDIDM0NS40NCAzMDYuMDEgMzQ0LjQ4IDMwNS4wNCAzNDMuNDcgMzA0LjQ2IEMgMzQ0LjM0IDMwMS45NSAzNDUuNDYgMjk4LjcyIDM0Mi43OSAyOTYuODMgQyAzNDEuNTQgMjk3Ljk5IDM0MC44MSAzMDAuMDggMzM5LjIyIDMwMC42NiBDIDMzOC42NiAzMDAuMjkgMzM3LjU1IDI5OS41NCAzMzcuMDAgMjk5LjE3IEMgMzM4Ljk0IDI5Ni42NSAzNDAuODAgMjk0LjA1IDM0Mi40NSAyOTEuMzIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gNTUuNTYgMjk4LjM5IEMgNTcuMzMgMjk2Ljk1IDU5LjE4IDI5NS42MSA2MS4wNCAyOTQuMjggQyA2MS45NCAyOTUuNTQgNjIuODYgMjk2Ljc5IDYzLjc5IDI5OC4wMyBDIDYyLjc3IDI5OC43NCA2MS43NiAyOTkuNDQgNjAuNzQgMzAwLjE1IEMgNjIuMzggMzAyLjM0IDY0LjA3IDMwNC40OSA2NS43NyAzMDYuNjMgQyA2NC4yNiAzMDcuODggNjIuODQgMzA5LjI0IDYxLjE2IDMxMC4yNyBDIDU4LjgwIDMxMC4zOSA1Ni40MyAzMTAuMTIgNTQuMDcgMzEwLjI3IEMgNTMuMDggMzA5LjAyIDUyLjA5IDMwNy43NyA1MS4xNCAzMDYuNDkgQyA1My40MCAzMDUuMzAgNTUuODggMzA2LjE4IDU4LjIzIDMwNi41MSBDIDU4LjgxIDMwNi4xNSA1OS45OSAzMDUuNDMgNjAuNTcgMzA1LjA3IEMgNTguODkgMzAyLjg1IDU3LjIzIDMwMC42MiA1NS41NiAyOTguMzkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjkzLjc4IDI5Ni40MCBDIDI5NS40NiAyOTUuOTkgMjk3LjExIDI5NS4yOCAyOTguODcgMjk1LjI3IEMgMzAxLjk1IDI5Ny41MSAzMDQuMDcgMzAwLjgyIDMwNy4yMyAzMDMuMDAgQyAzMDcuMzYgMzA0LjE4IDMwNy41MCAzMDUuMzcgMzA3LjYzIDMwNi41NiBDIDMwNi45MyAzMDcuMjEgMzA2LjIyIDMwNy44NyAzMDUuNTMgMzA4LjU0IEMgMzA0LjQzIDMwNy4yMyAzMDMuMzIgMzA1LjkzIDMwMi4yNyAzMDQuNjAgQyAzMDEuMzQgMzA0LjkzIDMwMC40MiAzMDUuMjYgMjk5LjUxIDMwNS42MCBDIDI5OS40MCAzMDQuOTQgMjk5LjIwIDMwMy42MSAyOTkuMDkgMzAyLjk0IEMgMjk4LjA5IDMwNC4yMCAyOTcuMTIgMzA1LjQ4IDI5Ni4yMCAzMDYuNzkgQyAyOTUuNjEgMzA2Ljc4IDI5NC40MyAzMDYuNzUgMjkzLjg0IDMwNi43NCBDIDI5Ni4xMyAzMDguMjMgMjk0LjkwIDMwOS43NSAyOTMuMjEgMzExLjE1IEMgMjkzLjgzIDMxMS41OSAyOTQuNDUgMzEyLjAyIDI5NS4wNyAzMTIuNDcgQyAyOTQuNjYgMzEzLjkyIDI5NC4yOCAzMTUuMzkgMjkzLjkwIDMxNi44NiBDIDI5NC40OSAzMTYuNzEgMjk1LjY2IDMxNi40MSAyOTYuMjUgMzE2LjI2IEMgMjk1LjM3IDMxNy4yOSAyOTQuNTEgMzE4LjM0IDI5My42MyAzMTkuMzcgQyAyOTMuMjcgMzE3LjI5IDI5Mi4zNyAzMTUuMTIgMjkzLjQ3IDMxMy4wOSBDIDI5Mi45NCAzMTIuOTggMjkxLjg4IDMxMi43NiAyOTEuMzUgMzEyLjY1IEMgMjkyLjE1IDMxMC41NyAyOTMuMDQgMzA4LjUyIDI5My42MyAzMDYuMzYgQyAyOTQuNjMgMzA1LjIzIDI5NS41NyAzMDQuMDUgMjk2LjUzIDMwMi44NyBDIDI5NS40MiAzMDIuNDEgMjk0LjMyIDMwMS45NSAyOTMuMjIgMzAxLjUxIEMgMjkzLjQzIDI5OS44MSAyOTMuNjIgMjk4LjEwIDI5My43OCAyOTYuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzMyLjY1IDMwNC42NiBDIDMzMy42NyAzMDMuNDkgMzM0LjcwIDMwMi4zMiAzMzUuNzMgMzAxLjE2IEMgMzM4LjYyIDMwMy41OCAzNDEuNjIgMzA1Ljg4IDM0NC42MyAzMDguMTUgQyAzNDMuNjIgMzA5LjQ1IDM0Mi42MCAzMTAuNzUgMzQxLjU3IDMxMi4wNSBDIDMzOC41NiAzMDkuNjMgMzM1LjU0IDMwNy4yMSAzMzIuNjUgMzA0LjY2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDI5Ni4yMCAzMDYuNzkgQyAyOTcuMTIgMzA1LjQ4IDI5OC4wOSAzMDQuMjAgMjk5LjA5IDMwMi45NCBDIDI5OS4yMCAzMDMuNjEgMjk5LjQwIDMwNC45NCAyOTkuNTEgMzA1LjYwIEMgMzAwLjQyIDMwNS4yNiAzMDEuMzQgMzA0LjkzIDMwMi4yNyAzMDQuNjAgQyAzMDMuMzIgMzA1LjkzIDMwNC40MyAzMDcuMjMgMzA1LjUzIDMwOC41NCBDIDMwMi41MiAzMTEuMTggMjk5Ljk4IDMxNC42MiAyOTYuMjUgMzE2LjI2IEMgMjk1LjY2IDMxNi40MSAyOTQuNDkgMzE2LjcxIDI5My45MCAzMTYuODYgQyAyOTQuMjggMzE1LjM5IDI5NC42NiAzMTMuOTIgMjk1LjA3IDMxMi40NyBDIDI5NC40NSAzMTIuMDIgMjkzLjgzIDMxMS41OSAyOTMuMjEgMzExLjE1IEMgMjk0LjkwIDMwOS43NSAyOTYuMTMgMzA4LjIzIDI5My44NCAzMDYuNzQgQyAyOTQuNDMgMzA2Ljc1IDI5NS42MSAzMDYuNzggMjk2LjIwIDMwNi43OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMjguMTEgMzEwLjI2IEMgMzI5LjEwIDMwOS4wOSAzMzAuMTAgMzA3LjkzIDMzMS4wOCAzMDYuNzUgQyAzMzQuODAgMzA5Ljc4IDMzOC40MCAzMTIuOTMgMzQyLjEyIDMxNS45NiBDIDM0MS4wNyAzMTcuMjUgMzQwLjAyIDMxOC41NSAzMzguOTkgMzE5Ljg3IEMgMzM1LjQyIDMxNi42MCAzMzEuNzEgMzEzLjQ5IDMyOC4xMSAzMTAuMjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTIwLjIwIDMxMi43NiBDIDEyMS4zMiAzMTAuODAgMTI0LjQ4IDMxMC45OCAxMjYuNTIgMzEwLjI0IEMgMTI2LjUxIDMxMi4yMCAxMjYuNTAgMzE0LjE2IDEyNi41NCAzMTYuMTIgQyAxMjQuOTcgMzE0LjA4IDEyMi42NyAzMTMuMjAgMTIwLjIwIDMxMi43NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA2MS43MiAzMjMuOTUgQyA2NS4xMSAzMjAuNTUgNjguNjYgMzE3LjMzIDcyLjA1IDMxMy45MyBDIDczLjE1IDMxNC45OCA3NC4yNCAzMTYuMDQgNzUuMzUgMzE3LjA4IEMgNzQuMjQgMzE4LjI4IDczLjEzIDMxOS40OCA3Mi4wNCAzMjAuNzEgQyA3My4xNSAzMjAuOTMgNzQuMjcgMzIxLjE2IDc1LjM5IDMyMS4zOCBDIDc2LjAyIDMyMC42NSA3Ni42NiAzMTkuOTMgNzcuMjkgMzE5LjIwIEMgNzguNDAgMzIwLjI3IDc5LjUyIDMyMS4zMiA4MC42NCAzMjIuMzggQyA3OS4zMCAzMjMuNTEgNzguMDYgMzI2LjEzIDc1LjkzIDMyNC45OCBDIDczLjc0IDMyNC41NCA3MS42NSAzMjMuMDQgNjkuNDAgMzIzLjI0IEMgNjcuODYgMzI0LjQ3IDY2LjUyIDMyNS45MiA2NS4xMCAzMjcuMjkgQyA2My45OCAzMjYuMTcgNjIuODUgMzI1LjA2IDYxLjcyIDMyMy45NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMTQuNDQgMzE1LjE2IEMgMTE1LjQzIDMxNS4xMiAxMTguNzQgMzEyLjA1IDExOC4xOCAzMTQuMTQgQyAxMTcuNjggMzE1LjA5IDExNy4xNCAzMTYuMDIgMTE2LjU1IDMxNi45MiBDIDExNi4wMSAzMTkuNTQgMTE1LjgzIDMyMi4yNSAxMTYuNzYgMzI0LjgyIEMgMTE2LjU1IDMyNC44NyAxMTYuMTIgMzI0Ljk3IDExNS45MSAzMjUuMDIgTCAxMTUuMTAgMzI0Ljc1IEMgMTEzLjI5IDMyMS44OSAxMTMuNzcgMzE4LjI4IDExNC40NCAzMTUuMTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjY0LjA3IDMyNC43OSBDIDI2NS40NSAzMjIuMDMgMjY1LjgyIDMxOC4wMSAyNjkuMDkgMzE2Ljc4IEMgMjY3LjI2IDMyMC4yMSAyNjUuNjAgMzIzLjc1IDI2My40MiAzMjYuOTkgQyAyNjMuNDggMzI4LjU2IDI2NC4yNyAzMjkuNTkgMjY1LjgwIDMzMC4wOSBDIDI2My43NSAzMzAuNjEgMjYxLjcxIDMzMS4yMiAyNTkuNTkgMzMxLjM4IEMgMjYwLjI1IDMyOC42NSAyNjIuNTAgMzI2Ljk1IDI2NC4wNyAzMjQuNzkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzIxLjQ4IDMxNy4zNiBDIDMyMi45MSAzMTguNzcgMzI0LjMyIDMyMC4yMSAzMjUuNTYgMzIxLjgxIEMgMzI1LjA3IDMyMi44MyAzMjQuNjAgMzIzLjg2IDMyNC4xMiAzMjQuODkgQyAzMjYuMDggMzI0LjkwIDMyOC4wMiAzMjQuOTAgMzI5Ljk5IDMyNC45MSBDIDMyOC43MiAzMjYuMTcgMzI3LjcwIDMyNy44MiAzMjYuMDcgMzI4LjY0IEMgMzIzLjQyIDMyOC43NSAzMjAuNzggMzI4LjQ5IDMxOC4xNSAzMjguMzggQyAzMTkuNDYgMzI5Ljg3IDMyMC43OCAzMzEuMzcgMzIyLjA2IDMzMi44OSBDIDMyMC44MiAzMzMuODQgMzE5LjU5IDMzNC44MSAzMTguMzYgMzM1Ljc4IEMgMzE3LjA4IDMzNC4yMyAzMTUuNzggMzMyLjY5IDMxNC41MSAzMzEuMTMgQyAzMTQuNzcgMzMwLjM2IDMxNS4yOCAzMjguODIgMzE1LjU0IDMyOC4wNSBDIDMxMy44NyAzMjcuOTIgMzEyLjE5IDMyNy43OCAzMTAuNTMgMzI3LjYzIEMgMzExLjY2IDMyNi41NSAzMTIuNzQgMzI1LjM5IDMxNC4wMyAzMjQuNTAgQyAzMTYuNzEgMzI0LjUwIDMxOS4zNyAzMjQuODAgMzIyLjA1IDMyNC43OSBDIDMyMC44NiAzMjMuMzUgMzE5LjYxIDMyMS45OCAzMTguMzMgMzIwLjYzIEMgMzE5LjM3IDMxOS41NCAzMjAuNDIgMzE4LjQ1IDMyMS40OCAzMTcuMzYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTUxLjcyIDMyMi41MCBDIDE0OS4wOCAzMjEuNDAgMTUxLjUzIDMxOS41NCAxNTIuMzMgMzE4LjA2IEMgMTUyLjE4IDMxOS41NSAxNTEuOTYgMzIxLjAyIDE1MS43MiAzMjIuNTAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjc4Ljk5IDMyMC4yOCBDIDI4MC4wMSAzMjEuMzYgMjgxLjE3IDMyMi4yOSAyODIuNDQgMzIzLjA5IEMgMjgyLjA0IDMyMy44OCAyODIuMjMgMzI2LjA1IDI4MC44OCAzMjUuMjMgQyAyODAuNTQgMzIzLjQ3IDI4MC4wNyAzMjEuNzQgMjc4Ljk5IDMyMC4yOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA3NC43NyAzMzIuNTYgQyA3Ny4xOCAzMjkuNjcgNzkuODggMzI3LjA0IDgyLjIwIDMyNC4wOCBDIDgzLjQ0IDMyNS4wMiA4NC42NyAzMjUuOTcgODUuODkgMzI2Ljk0IEMgODMuMzIgMzI5LjgxIDgwLjg5IDMzMi44MSA3OC4zMiAzMzUuNjggQyA3Ny4xNCAzMzQuNjMgNzUuOTYgMzMzLjU5IDc0Ljc3IDMzMi41NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA4MC4yNiAzMzcuMjYgQyA4Mi43OSAzMzQuMzkgODUuMTkgMzMxLjQwIDg3LjY3IDMyOC40OSBDIDkwLjczIDMzMS41MyA5NS4wMyAzMzMuMzMgOTcuNDAgMzM2Ljk4IEMgOTYuMjIgMzQwLjMzIDkzLjUyIDM0Mi44OCA5MS43NCAzNDUuOTEgQyA5MC4zOCAzNDUuMDMgODkuMDYgMzQ0LjEzIDg3Ljc0IDM0My4yMSBDIDg5LjQwIDM0MC45OSA5MS4xMSAzMzguODAgOTIuNzggMzM2LjU5IEMgOTEuNjUgMzM1LjY0IDkwLjUxIDMzNC43MCA4OS4zOCAzMzMuNzUgQyA4Ny40MiAzMzUuNzggODUuNzQgMzM4LjA0IDg0LjA1IDM0MC4yOSBDIDgyLjc3IDMzOS4yOSA4MS41MSAzMzguMjggODAuMjYgMzM3LjI2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMwNS45MyAzMzEuMjAgQyAzMDcuMTAgMzMwLjMxIDMwOC4yNiAzMjkuNDEgMzA5LjQzIDMyOC41MiBDIDMxMS44MiAzMzEuNDYgMzE0LjIwIDMzNC40MiAzMTYuNzggMzM3LjIxIEMgMzE1LjU1IDMzOC4yOCAzMTQuMzAgMzM5LjMyIDMxMy4wNCAzNDAuMzYgQyAzMTAuNjcgMzM3LjMxIDMwOC4yMyAzMzQuMzAgMzA1LjkzIDMzMS4yMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNTIuMzAgMzM1LjI4IEMgMTUyLjkzIDMzNC40OSAxNTMuNTcgMzMzLjcxIDE1NC4yMSAzMzIuOTQgQyAxNTQuNjMgMzMzLjk0IDE1NS4wNiAzMzQuOTUgMTU1LjQ5IDMzNS45NiBDIDE1NC40MiAzMzUuNzMgMTUzLjM2IDMzNS41MSAxNTIuMzAgMzM1LjI4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE3My45MyAzMzguOTYgQyAxNzQuMzMgMzM2Ljc0IDE3NS4zMyAzMzQuNzIgMTc2LjQ1IDMzMi43OSBDIDE3Ni45NSAzMzQuNzIgMTc3LjUwIDMzNi42NSAxNzcuOTcgMzM4LjYxIEMgMTc2LjYyIDMzOC43MyAxNzUuMjcgMzM4Ljg1IDE3My45MyAzMzguOTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjkzLjc2IDM0MC4wMyBDIDI5Ny4yOCAzMzcuOTAgMzAwLjM3IDMzNS4wNyAzMDQuMTcgMzMzLjM5IEMgMzA2LjY2IDMzNi4wMiAzMDkuMDIgMzM4LjgyIDMxMC45MCAzNDEuOTIgQyAzMDkuODQgMzQyLjg4IDMwOC42NyAzNDMuNzIgMzA3LjQ1IDM0NC40NiBDIDMwNS4zNCAzNDIuNzAgMzA0LjE0IDM0MC4wOSAzMDIuNDkgMzM3LjkzIEMgMzAwLjAwIDMzOS41MyAyOTcuNTcgMzQxLjIxIDI5NS4wNCAzNDIuNzUgQyAyOTQuNzIgMzQyLjA3IDI5NC4wOCAzNDAuNzEgMjkzLjc2IDM0MC4wMyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA5Ny4zNyAzNDIuMDcgQyA5OC4yNCAzNDAuNjcgOTkuMTkgMzM5LjMzIDEwMC4xMiAzMzcuOTcgQyAxMDEuMzIgMzM4Ljc2IDEwMi41MyAzMzkuNTYgMTAzLjczIDM0MC4zNiBDIDEwMy4wNyAzNDEuNTUgMTAyLjQyIDM0Mi43NSAxMDEuODMgMzQzLjk4IEMgMTAzLjE5IDM0My4zMyAxMDQuNDggMzQyLjUwIDEwNS45NSAzNDIuMDkgQyAxMDguMjIgMzQyLjczIDExMC4xMiAzNDQuMjIgMTExLjg0IDM0NS43OCBDIDExMC4xNiAzNDkuMDYgMTA4LjI3IDM1Mi4yMSAxMDYuNTEgMzU1LjQ0IEMgMTA0LjMzIDM1NC4xNCAxMDIuMTMgMzUyLjg2IDk5Ljk1IDM1MS41NyBDIDEwMC40MiAzNTAuNjYgMTAwLjkxIDM0OS43NSAxMDEuMzkgMzQ4Ljg0IEMgMTAyLjI5IDM0OS4zNyAxMDMuMTkgMzQ5LjkxIDEwNC4wOSAzNTAuNDUgQyAxMDUuMDkgMzQ4Ljc2IDEwNi4wNyAzNDcuMDUgMTA2LjkxIDM0NS4yNyBDIDEwMy4wNiAzNDUuMTYgMTAwLjYzIDM0OS4xMCA5Ny4wNCAzNDkuNjUgQyA5NS43NyAzNDguOTAgOTQuNTggMzQ4LjAyIDkzLjM4IDM0Ny4xOCBDIDk1LjE4IDM0Ni4yOCA5Ni45OSAzNDUuNDAgOTguODEgMzQ0LjU0IEMgOTguMzAgMzQzLjczIDk3LjgyIDM0Mi45MSA5Ny4zNyAzNDIuMDcgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjgwLjQ4IDM0Ny45MSBDIDI4NC4zMCAzNDUuNzUgMjg4LjExIDM0My41NyAyOTEuOTEgMzQxLjM3IEMgMjkyLjI5IDM0MS45MyAyOTMuMDUgMzQzLjA1IDI5My40NCAzNDMuNjIgQyAyOTIuODggMzQ0LjEwIDI5Mi4zMyAzNDQuNTkgMjkxLjc5IDM0NS4wOSBDIDI5My4zMiAzNDcuMzggMjk0Ljc2IDM0OS43MyAyOTYuMjIgMzUyLjA4IEMgMjk0Ljg2IDM1Mi44NyAyOTMuNDkgMzUzLjY2IDI5Mi4xMyAzNTQuNDYgQyAyOTAuNzggMzUyLjAyIDI4OS4zNyAzNDkuNjIgMjg3Ljk1IDM0Ny4yMyBDIDI4Ni4wMiAzNDguMzQgMjg0LjA3IDM0OS40MSAyODIuMDkgMzUwLjQzIEMgMjgxLjY5IDM0OS44MCAyODAuODggMzQ4LjU0IDI4MC40OCAzNDcuOTEgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjk2LjIwIDM0NC4wOCBDIDI5Ny40NSAzNDMuMjMgMjk4LjcwIDM0Mi4zOCAyOTkuOTYgMzQxLjU0IEMgMzAxLjIxIDM0My40MiAzMDIuNTEgMzQ1LjI4IDMwMy44MyAzNDcuMTIgQyAzMDIuNTMgMzQ3Ljk2IDMwMS4yNyAzNDguODcgMjk5LjkzIDM0OS42NSBDIDI5OC41NyAzNDcuODcgMjk3LjQzIDM0NS45NCAyOTYuMjAgMzQ0LjA4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI3NC45MyAzNTAuNDkgQyAyNzYuMjQgMzQ5Ljk1IDI3Ny41NiAzNDkuNDIgMjc4Ljg4IDM0OC45MSBDIDI3OS44NCAzNTAuODYgMjgxLjAwIDM1Mi43MiAyODEuNzQgMzU0Ljc3IEMgMjgwLjQ4IDM1NS41NiAyNzkuMTEgMzU2LjE1IDI3Ny43NiAzNTYuNzggQyAyNzYuNzggMzU0LjY5IDI3NS43OSAzNTIuNjIgMjc0LjkzIDM1MC40OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMjAuMjAgMzQ5LjgyIEMgMTIzLjc4IDM1MS41MiAxMjcuNTMgMzUyLjkyIDEzMC45OSAzNTQuODYgQyAxMzIuNDggMzU1LjcwIDEzMS44MCAzNTcuMjYgMTMxLjM0IDM1OC41MSBDIDEzMC4zOSAzNjEuMDAgMTI5LjMxIDM2My40NCAxMjguMzEgMzY1LjkxIEMgMTIzLjkyIDM2NC4wMSAxMTkuNDcgMzYyLjI0IDExNS4yMyAzNjAuMDIgQyAxMTYuNzAgMzU2LjUzIDExOC42NSAzNTMuMjggMTIwLjIwIDM0OS44MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxMjIuOTEgMzU0LjQ1IEMgMTI0LjQzIDM1NS4xNCAxMjUuOTYgMzU1Ljg0IDEyNy40NyAzNTYuNTcgQyAxMjYuNzEgMzU4LjE1IDEyNS45OCAzNTkuNzYgMTI1LjI0IDM2MS4zNSBDIDEyMy43MCAzNjAuNjEgMTIyLjE1IDM1OS45MCAxMjAuNjEgMzU5LjE3IEMgMTIxLjM5IDM1Ny42MCAxMjIuMTUgMzU2LjAzIDEyMi45MSAzNTQuNDUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTQxLjY3IDM1NS4wMyBDIDE0My4wMyAzNTUuMzIgMTQ0LjM4IDM1NS42NCAxNDUuNzIgMzU1Ljk4IEMgMTQ1LjQ2IDM1Ny4yNSAxNDUuMjEgMzU4LjUyIDE0NC45NiAzNTkuNzkgQyAxNDcuMjcgMzYwLjQ2IDE0OS41OCAzNjEuMTIgMTUxLjkxIDM2MS43MyBDIDE1MS40MCAzNjMuNTcgMTUxLjAyIDM2NS40NyAxNTAuMjQgMzY3LjI0IEMgMTQ4LjUyIDM2OC45NCAxNDYuMjYgMzcwLjAwIDE0NC4zMiAzNzEuNDQgQyAxNDIuOTUgMzcxLjA2IDE0MS42MCAzNzAuNjYgMTQwLjI1IDM3MC4yMyBDIDE0MS45MiAzNjcuMzIgMTQ2LjA1IDM2Ny4xMiAxNDcuMTkgMzYzLjc2IEMgMTQ0LjY4IDM2Mi44NSAxNDIuMTQgMzYyLjAyIDEzOS42MSAzNjEuMjAgQyAxNDAuMzEgMzU5LjE0IDE0MS4wMCAzNTcuMDkgMTQxLjY3IDM1NS4wMyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNTQuNjEgMzU4LjkzIEMgMjU3LjgyIDM1Ny44NyAyNjAuOTQgMzU2LjU2IDI2NC4xNSAzNTUuNTAgQyAyNjUuMjAgMzU1LjE3IDI2Ni44NSAzNTUuMTMgMjY3LjI2IDM1Ni40MSBDIDI2OC42NSAzNTkuMjEgMjY5Ljc0IDM2Mi4xNCAyNzAuOTIgMzY1LjA0IEMgMjY5LjUxIDM2NS41OCAyNjguMTAgMzY2LjE1IDI2Ni43MSAzNjYuNzIgQyAyNjUuNjkgMzY0LjE2IDI2NC42NiAzNjEuNjAgMjYzLjY0IDM1OS4wNCBDIDI2MS4zNyAzNTkuNzYgMjU5LjEyIDM2MC41MiAyNTYuODUgMzYxLjI0IEMgMjU4LjA3IDM2MS43NiAyNTkuMzQgMzYyLjEzIDI2MC42NSAzNjIuMzcgQyAyNjEuMzcgMzY0LjMwIDI2Mi4xMCAzNjYuMjQgMjYyLjgyIDM2OC4xOCBDIDI2MS4zNSAzNjguNjYgMjU5Ljg4IDM2OS4xNyAyNTguNDIgMzY5LjY3IEMgMjU3LjgxIDM2Ny45MCAyNTcuMjIgMzY2LjEyIDI1Ni42NSAzNjQuMzQgQyAyNTcuMTQgMzYzLjAyIDI1Ni42NSAzNjEuODIgMjU1LjU4IDM2MS4wMiBDIDI1NS4zNCAzNjAuNTAgMjU0Ljg1IDM1OS40NSAyNTQuNjEgMzU4LjkzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDEzNC44MCAzNTYuMTcgQyAxMzYuMTcgMzU2LjY3IDEzNy41NSAzNTcuMTcgMTM4LjkyIDM1Ny42OCBDIDEzOC4xMSAzNTkuNzYgMTM3LjM1IDM2MS44NyAxMzYuNjAgMzYzLjk4IEMgMTM1LjE0IDM2My41MCAxMzMuNzAgMzYyLjk4IDEzMi4yNiAzNjIuNDkgQyAxMzMuMTcgMzYwLjQwIDEzNC4wMSAzNTguMzAgMTM0LjgwIDM1Ni4xNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNDAuMzAgMzYyLjk5IEMgMjQ0LjMyIDM2Mi4xNyAyNDguMTYgMzYwLjUzIDI1Mi4yOSAzNjAuMjQgQyAyNTMuODAgMzYzLjA1IDI1NC45MCAzNjYuMDggMjU1LjUyIDM2OS4yMiBDIDI1NS4wNyAzNzAuMjMgMjU0LjMxIDM3MC45MiAyNTMuMjYgMzcxLjI3IEMgMjQ5Ljg4IDM3Mi40NyAyNDYuMzcgMzczLjI5IDI0Mi44NiAzNzQuMDQgQyAyNDIuNzAgMzczLjA3IDI0Mi41NCAzNzIuMTAgMjQyLjM4IDM3MS4xNCBDIDI0NS4xNiAzNzAuMzggMjQ4LjA1IDM2OS44OCAyNTAuNzAgMzY4LjcxIEMgMjUwLjQyIDM2Ni45MyAyNDkuNzUgMzY1LjI1IDI0OS4yMiAzNjMuNTYgQyAyNDcuNjggMzY0LjAxIDI0Ni4xNCAzNjQuNDYgMjQ0Ljc1IDM2NS4yNiBDIDI0NS44OCAzNjYuMTAgMjQ4LjQzIDM2Ni4wNCAyNDcuODUgMzY4LjEyIEMgMjQ1Ljk4IDM2OC45MiAyNDMuOTMgMzY5LjE0IDI0MS45MyAzNjkuNDAgQyAyNDEuMzEgMzY3LjI4IDI0MC43NyAzNjUuMTMgMjQwLjMwIDM2Mi45OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNTQuMDggMzYyLjQwIEMgMTU1LjMzIDM2Mi42MyAxNTYuNTcgMzYyLjkxIDE1Ny44MCAzNjMuMjQgQyAxNTcuNzggMzY2LjI0IDE1Ni40NiAzNjkuMDYgMTU2LjEyIDM3Mi4wNCBDIDE1Ni41OCAzNzEuOTQgMTU3LjUwIDM3MS43NSAxNTcuOTYgMzcxLjY1IEMgMTU4Ljc0IDM2OS4wNyAxNTkuMTkgMzY2LjQwIDE1OS44MCAzNjMuNzggQyAxNjEuMTQgMzY0LjAzIDE2Mi40OCAzNjQuMjggMTYzLjgyIDM2NC41MyBDIDE2My4yMyAzNjcuNDcgMTYyLjU4IDM3MC4zOSAxNjIuMDkgMzczLjM1IEMgMTYyLjYzIDM3My4xOSAxNjMuNzEgMzcyLjg4IDE2NC4yNSAzNzIuNzIgQyAxNjQuOTAgMzcwLjIxIDE2NS4xNCAzNjcuNjEgMTY1LjkwIDM2NS4xNCBDIDE2Ny4xOSAzNjUuMjIgMTY4LjQ4IDM2NS4zNSAxNjkuNzcgMzY1LjUxIEMgMTY4LjcwIDM2OS4wNiAxNzAuMDYgMzc1LjQxIDE2NS4xNiAzNzYuMTggQyAxNjAuNDAgMzc1LjkxIDE1NS44MSAzNzQuNDIgMTUxLjE3IDM3My40MSBDIDE1Mi4xOCAzNjkuNzUgMTUzLjE5IDM2Ni4wOSAxNTQuMDggMzYyLjQwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIwNC41NiAzNjQuMjQgQyAyMDUuOTYgMzY0LjE3IDIwNy4zNSAzNjQuMTIgMjA4Ljc1IDM2NC4wOCBDIDIwOC44MCAzNjQuOTggMjA4LjkxIDM2Ni43NyAyMDguOTYgMzY3LjY3IEMgMjExLjQ5IDM2Ny40NyAyMTQuMDMgMzY3LjI5IDIxNi41NyAzNjcuMTcgQyAyMTYuNjMgMzY5LjI1IDIxNy4xMiAzNzEuMzkgMjE2LjY5IDM3My40NyBDIDIxNS41MyAzNzUuMjMgMjE0LjE4IDM3Ni44OCAyMTMuMjggMzc4LjgxIEMgMjExLjc1IDM3OC44MyAyMTAuMjMgMzc4Ljg0IDIwOC43MCAzNzguODMgQyAyMDkuNDIgMzc1LjY2IDIxMy4yOCAzNzQuMDkgMjEyLjY5IDM3MC41NSBDIDIxMC4wNSAzNzAuNjYgMjA3LjQxIDM3MC43OSAyMDQuNzggMzcwLjgwIEMgMjA0Ljc1IDM2OC42MSAyMDQuNjcgMzY2LjQyIDIwNC41NiAzNjQuMjQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjMzLjg4IDM2NC40MCBDIDIzNS4yOSAzNjQuMTMgMjM2LjY5IDM2My44OCAyMzguMTAgMzYzLjY0IEMgMjM4Ljg4IDM2Ny4zMCAyMzkuNzEgMzcwLjk0IDI0MC43MCAzNzQuNTUgQyAyMzkuMTcgMzc0LjkyIDIzNy42NSAzNzUuMjkgMjM2LjEyIDM3NS42MyBDIDIzNS40MiAzNzEuODcgMjM0LjUzIDM2OC4xNiAyMzMuODggMzY0LjQwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIyNy41MyAzNjUuNTEgQyAyMjguOTYgMzY1LjMzIDIzMC40MCAzNjUuMTcgMjMxLjg0IDM2NS4wMSBDIDIzMi4wNiAzNjguNjYgMjM1LjI2IDM3My44MSAyMzEuMjIgMzc2LjI1IEMgMjI3LjU1IDM3Ny41NyAyMjMuNTcgMzc3LjU2IDIxOS43NSAzNzguMjEgQyAyMTkuNzAgMzc3LjQ3IDIxOS42MCAzNzYuMDAgMjE5LjU1IDM3NS4yNiBDIDIyMC4yNCAzNzUuMTIgMjIxLjY0IDM3NC44NCAyMjIuMzMgMzc0LjcwIEMgMjIxLjM0IDM3Mi4wMSAyMjAuMDkgMzY5LjQyIDIxOS4wMSAzNjYuNzggQyAyMjAuMDkgMzY2LjY0IDIyMi4yNiAzNjYuMzcgMjIzLjM0IDM2Ni4yNCBDIDIyNC44MyAzNjkuMTAgMjI1LjM5IDM3Mi42MyAyMjguMDAgMzc0Ljc2IEMgMjI5LjUyIDM3MS44MCAyMjcuNzkgMzY4LjU1IDIyNy41MyAzNjUuNTEgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTcyLjA2IDM2Ni4xMyBDIDE3My41MSAzNjYuMjcgMTc0Ljk2IDM2Ni40MiAxNzYuNDEgMzY2LjU3IEMgMTc1LjkxIDM3MC4zMCAxNzUuMzggMzc0LjAyIDE3NS4wNSAzNzcuNzcgQyAxNzMuNDggMzc3LjY1IDE3MS45MiAzNzcuNTEgMTcwLjM1IDM3Ny4zNyBDIDE3MC45NiAzNzMuNjMgMTcxLjU3IDM2OS44OSAxNzIuMDYgMzY2LjEzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE3OC4wMiAzNjkuNzQgQyAxNzguMjAgMzY4Ljc1IDE3OC4zOSAzNjcuNzcgMTc4LjU5IDM2Ni43OSBDIDE4Mi4xNiAzNjcuNDYgMTg2LjAzIDM2Ni45MyAxODkuMzYgMzY4LjY0IEMgMTg5LjMxIDM3Mi4yMSAxODkuMjAgMzc1Ljc5IDE4OC42NCAzNzkuMzMgQyAxODcuNTcgMzc5LjE4IDE4NS40MyAzNzguODkgMTg0LjM2IDM3OC43NSBDIDE4NC41NCAzNzYuMDEgMTg0Ljc0IDM3My4yOCAxODQuODcgMzcwLjU1IEMgMTgyLjU4IDM3MC4zNSAxODAuMjkgMzcwLjA5IDE3OC4wMiAzNjkuNzQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTkxLjc2IDM2Ny43OSBDIDE5My4yMiAzNjcuODMgMTk0LjY4IDM2Ny44NyAxOTYuMTQgMzY3LjkyIEMgMTk2LjEzIDM3MC4xNiAxOTYuMTMgMzcyLjM5IDE5Ni4xNCAzNzQuNjQgQyAxOTQuNjEgMzc0LjY0IDE5My4wNyAzNzQuNjUgMTkxLjU0IDM3NC42NSBDIDE5MS42MSAzNzIuMzYgMTkxLjY5IDM3MC4wNyAxOTEuNzYgMzY3Ljc5IFpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICApO1xuICB9XG59XG5cbkxvZ28uUHJvcFR5cGVzID0ge1xuICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgaGVpZ2h0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBvcGFjaXR5OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ287XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzeCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ob21lUGFnZS5ydCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHt1cGRhdGVCb29raW5nLCBjYW5jZWxCb29raW5nfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zJztcbmltcG9ydCB7dXBkYXRlVXNlcn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5cbmNvbnN0IHRlYW1zRGF0YSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3RlYW1zRGF0YScpO1xuXG5mdW5jdGlvbiBwYXJzZUV2ZW50RGF0ZShldmVudCkge1xuICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZShldmVudC55ZWFyLCBldmVudC5tb250aCwgZXZlbnQuZGF5KTtcbiAgZXZlbnREYXRlLnNldE1vbnRoKGV2ZW50RGF0ZS5nZXRNb250aCgpIC0gMSk7XG4gIHJldHVybiBldmVudERhdGU7XG59XG5cbmZ1bmN0aW9uIGlzRnV0dXJlRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgZXZlbnREYXRlID0gcGFyc2VFdmVudERhdGUoZXZlbnQpO1xuICByZXR1cm4gZXZlbnREYXRlID4gRGF0ZS5ub3coKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBhdXRoRGF0YTogc3RhdGUuYXV0aERhdGEsXG4gIGV2ZW50czogc3RhdGUuZXZlbnRzLFxuICB1c2Vyczogc3RhdGUudXNlcnMsXG4gIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5nc1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHVwZGF0ZUJvb2tpbmc6ICh1aWQsIGV2ZW50SWQsIGJvb2tpbmcpID0+IGRpc3BhdGNoKHVwZGF0ZUJvb2tpbmcodWlkLCBldmVudElkLCBib29raW5nKSksXG4gIGNhbmNlbEJvb2tpbmc6ICh1aWQsIGV2ZW50SWQpID0+IGRpc3BhdGNoKGNhbmNlbEJvb2tpbmcodWlkLCBldmVudElkKSksXG4gIHVwZGF0ZVVzZXI6ICh1aWQsIHVzZXIpID0+IGRpc3BhdGNoKHVwZGF0ZVVzZXIodWlkLCB1c2VyKSlcbn0pO1xuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV2ZW50SWQ6IG51bGxcbiAgICB9XG4gIH1cblxuICBnZXRPcGVuRXZlbnRzKCkge1xuICAgIHJldHVybiBfLm9taXRCeSh0aGlzLnByb3BzLmV2ZW50cywgZXZlbnQgPT4gZXZlbnQuc3RhdHVzID09PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5DTE9TRUQudmFsdWUpO1xuICB9XG5cbiAgZ2V0Q2xvc2VkRXZlbnRzKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMuZXZlbnRzKVxuICAgICAgLm9taXRCeShldmVudCA9PiB7XG4gICAgICAgIHJldHVybiBldmVudC5zdGF0dXMgIT09IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLkNMT1NFRC52YWx1ZSB8fCAhaXNGdXR1cmVFdmVudChldmVudCk7XG4gICAgICB9KVxuICAgICAgLm1hcCgoZXZlbnQsIGV2ZW50SWQpID0+ICh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBldmVudElkXG4gICAgICB9KSlcbiAgICAgIC5zb3J0QnkoZXZlbnREYXRhID0+IHBhcnNlRXZlbnREYXRlKGV2ZW50RGF0YS5ldmVudCkpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGJvb2tFdmVudChldmVudElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRJZH0pO1xuICB9XG5cbiAgaXNCb29raW5nRW5hYmxlZChldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQuc3RhdHVzKSB7XG4gICAgICBjYXNlIENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLk9QRU5fRk9SX0FMTC52YWx1ZTpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlIENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLk9QRU5fRk9SX01FTUJFUlMudmFsdWU6IHtcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlcnNbdGhpcy5wcm9wcy5hdXRoRGF0YS51aWRdO1xuICAgICAgICByZXR1cm4gdXNlci5zZWFzb25UaWNrZXRzID4gMFxuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnROYW1lKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGVJZCkge1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lO1xuICAgIH1cbiAgfVxuXG4gIGdldEV2ZW50SGFwb2VsSW1hZ2UoKSB7XG4gICAgcmV0dXJuICdodHRwOi8vaGFwb2VsLmNvLmlsL3NpdGVzL2RlZmF1bHQvZmlsZXMvbG9nbzEyMHgxMjAucG5nJztcbiAgfVxuXG4gIGlzUmVnaXN0ZXJlZFRvRXZlbnQoZXZlbnRJZCkge1xuICAgIGNvbnN0IHVzZXJCb29raW5ncyA9IHRoaXMucHJvcHMuYm9va2luZ3NbdGhpcy5wcm9wcy5hdXRoRGF0YS51aWRdO1xuXG4gICAgcmV0dXJuIF8uaGFzKHVzZXJCb29raW5ncywgZXZlbnRJZCk7XG4gIH1cblxuICBnZXRFdmVudEltYWdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnR5cGVJZCkge1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5zcmM7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnREYXRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuZGF5ICsgJy8nICsgZXZlbnQubW9udGggKyAnLycgKyBldmVudC55ZWFyO1xuICAgIH1cbiAgfVxuXG4gIGdldEV2ZW50VGltZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgcmV0dXJuIGV2ZW50LmhvdXIgKyAnOicgKyBldmVudC5taW51dGU7XG4gICAgfVxuICB9XG5cbiAgc3RvcEVkaXRpbmcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZXZlbnRJZDogbnVsbH0pO1xuICB9XG5cbiAgdXBkYXRlQm9va2luZyhib29raW5nKSB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVCb29raW5nKHRoaXMucHJvcHMuYXV0aERhdGEudWlkLCB0aGlzLnN0YXRlLmV2ZW50SWQsIGJvb2tpbmcpO1xuICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgfVxuXG4gIGNhbmNlbEJvb2tpbmcoZXZlbnRJZCkge1xuICAgIHRoaXMucHJvcHMuY2FuY2VsQm9va2luZyh0aGlzLnByb3BzLmF1dGhEYXRhLnVpZCwgZXZlbnRJZCk7XG4gIH1cblxuICBjcmVhdGVVc2VySW5mbyh1aWQsIHVzZXIpIHtcbiAgICB1c2VyLnBob3RvVVJMID0gdGhpcy5wcm9wcy5hdXRoRGF0YS5waG90b1VSTDtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodWlkLCB1c2VyKTtcbiAgfVxuXG4gIGdldEhvbWVUZWFtKCkge1xuICAgIHJldHVybiB0ZWFtc0RhdGEuSEFQT0VMX0pFUlVTQUxFTTtcbiAgfVxuXG4gIGdldEF3YXlUZWFtKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRlYW1zRGF0YVtldmVudC50eXBlSWRdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5Ib21lUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGF1dGhEYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWVQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vZXZlbnRJdGVtJyxcbiAgICAnLi4vYm9va2luZ0Zvcm0vYm9va2luZ0Zvcm0nLFxuICAgICcuLi91c2VyRm9ybScsXG4gICAgJy4vaG9tZVBhZ2Uuc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgRXZlbnRJdGVtLCBCb29raW5nRm9ybSwgVXNlckZvcm0sIGhvbWVQYWdlQ3NzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIG9uQm9va2luZzEob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICB0aGlzLmJvb2tFdmVudChldmVudEluZGV4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DYW5jZWxCb29raW5nMihvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHRoaXMuY2FuY2VsQm9va2luZyhldmVudEluZGV4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0RXZlbnQzKG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXZlbnRJdGVtLCB7XG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50LScgKyBldmVudEluZGV4LFxuICAgICAgICAgICAgJ2V2ZW50SWQnOiBldmVudEluZGV4LFxuICAgICAgICAgICAgJ29uQm9va2luZyc6IG9uQm9va2luZzEuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSxcbiAgICAgICAgICAgICdvbkNhbmNlbEJvb2tpbmcnOiBvbkNhbmNlbEJvb2tpbmcyLmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQm9va2luZzQob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICB0aGlzLmJvb2tFdmVudChldmVudC5ldmVudElkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DYW5jZWxCb29raW5nNShvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHRoaXMuY2FuY2VsQm9va2luZyhldmVudC5ldmVudElkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0RXZlbnQ2KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXZlbnRJdGVtLCB7XG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50LScgKyBldmVudEluZGV4LFxuICAgICAgICAgICAgJ2V2ZW50SWQnOiBldmVudC5ldmVudElkLFxuICAgICAgICAgICAgJ29uQm9va2luZyc6IG9uQm9va2luZzQuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSxcbiAgICAgICAgICAgICdvbkNhbmNlbEJvb2tpbmcnOiBvbkNhbmNlbEJvb2tpbmc1LmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uU3VibWl0NyhvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGVkaXRpbmdFdmVudCwgYm9va2luZykge1xuICAgICAgICB0aGlzLnVwZGF0ZUJvb2tpbmcoYm9va2luZyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xvc2U4KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZWRpdGluZ0V2ZW50KSB7XG4gICAgICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVFZGl0aW5nRXZlbnQ5KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlcikge1xuICAgICAgICB2YXIgZWRpdGluZ0V2ZW50ID0gdGhpcy5wcm9wcy5ldmVudHNbdGhpcy5zdGF0ZS5ldmVudElkXTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va2luZ0Zvcm0sIHtcbiAgICAgICAgICAgICdrZXknOiAnZWRpdC1ib29raW5nJyxcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0RXZlbnROYW1lKGVkaXRpbmdFdmVudCkgKyAnIC0gJyArIHRoaXMuZ2V0RXZlbnREYXRlKGVkaXRpbmdFdmVudCkgKyAnICcgKyB0aGlzLmdldEV2ZW50VGltZShlZGl0aW5nRXZlbnQpLFxuICAgICAgICAgICAgJ2Jvb2tpbmcnOiBfLmdldCh0aGlzLnByb3BzLmJvb2tpbmdzLCBbXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoRGF0YS51aWQsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5ldmVudElkXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICdvblN1Ym1pdCc6IG9uU3VibWl0Ny5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZWRpdGluZ0V2ZW50KSxcbiAgICAgICAgICAgICdzZWFzb25UaWNrZXRzJzogXy5nZXQodGhpcy5wcm9wcy51c2VycywgW1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aERhdGEudWlkLFxuICAgICAgICAgICAgICAgICdzZWFzb25UaWNrZXRzJ1xuICAgICAgICAgICAgXSkgfHwgMCxcbiAgICAgICAgICAgICdvbkNsb3NlJzogb25DbG9zZTguYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGVkaXRpbmdFdmVudClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlT3BlbkV2ZW50c0Nsb3NlZEV2ZW50c0hhc1VzZXIxMCgpIHtcbiAgICAgICAgdmFyIG9wZW5FdmVudHMgPSB0aGlzLmdldE9wZW5FdmVudHMoKTtcbiAgICAgICAgdmFyIGNsb3NlZEV2ZW50cyA9IHRoaXMuZ2V0Q2xvc2VkRXZlbnRzKCk7XG4gICAgICAgIHZhciBoYXNVc2VyID0gdGhpcy5wcm9wcy51c2Vyc1t0aGlzLnByb3BzLmF1dGhEYXRhLnVpZF07XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc2l0ZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2hvbWUtcGFnZSBzbWFsbC1jZW50ZXJlZCcgfSwgaGFzVXNlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZXZlbnRzLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50cy1jb250YWluZXInXG4gICAgICAgIH0sICF0aGlzLnN0YXRlLmV2ZW50SWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2V2ZW50cycsXG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50cydcbiAgICAgICAgfSwgXy5zaXplKG9wZW5FdmVudHMpID09PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzaG93LWZvci1zbWFsbC1vbmx5IG5vLWJvb2tpbmdzIG1vcmUtc3BhY2UnLFxuICAgICAgICAgICAgJ2tleSc6ICc2NTgnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eQ15nXnyDXm9eo15LXoiDXlNeh16LXldeqINek16rXldeX15XXqicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYSBmYS1idXMnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pKSA6IG51bGwsIF8uc2l6ZShvcGVuRXZlbnRzKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdldmVudHMtbGlzdCBvcGVuLWV2ZW50cycsXG4gICAgICAgICAgICAgICAgJ2tleSc6ICc5MDgnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaDYnLCB7ICdjbGFzc05hbWUnOiAnaGlkZS1mb3Itc21hbGwtb25seScgfSwgJ9eU16HXoteV16o6JyksXG4gICAgICAgICAgICBfLm1hcChvcGVuRXZlbnRzLCByZXBlYXRFdmVudDMuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIpKVxuICAgICAgICBdKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7ICdjbGFzc05hbWUnOiAnZXZlbnRzLWxpc3QgY2xvc2VkLWV2ZW50cyBoaWRlLWZvci1zbWFsbC1vbmx5JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaDYnLCB7fSwgJ9eU15TXodei15XXqiDXlNeR15DXldeqOicpLFxuICAgICAgICAgICAgXy5tYXAoY2xvc2VkRXZlbnRzLCByZXBlYXRFdmVudDYuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIpKVxuICAgICAgICBdKSkgOiBudWxsLCB0aGlzLnN0YXRlLmV2ZW50SWQgPyBzY29wZUVkaXRpbmdFdmVudDkuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgb3BlbkV2ZW50cyxcbiAgICAgICAgICAgIGNsb3NlZEV2ZW50cyxcbiAgICAgICAgICAgIGhhc1VzZXJcbiAgICAgICAgXSkgOiBudWxsKSA6IG51bGwsICFoYXNVc2VyID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICd1c2VyLWVkaXQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdrZXknOiAndXNlci1lZGl0LWNvbnRhaW5lcidcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChVc2VyRm9ybSwgeyAndWlkJzogdGhpcy5wcm9wcy5hdXRoRGF0YS51aWQgfSkpIDogbnVsbCkpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2NvcGVPcGVuRXZlbnRzQ2xvc2VkRXZlbnRzSGFzVXNlcjEwLmFwcGx5KHRoaXMsIFtdKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IGdhbWVzQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2FtZUNvbnN0YW50cycpO1xuY29uc3QgYm9va2luZ3NDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9ib29raW5nc0NvbnN0YW50cycpO1xuY29uc3QgdGVhbXNEYXRhID0gcmVxdWlyZSgnLi4vdXRpbHMvdGVhbXNEYXRhJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9ldmVudEl0ZW0uc2NzcycpO1xuXG5mdW5jdGlvbiBpc0Jvb2tpbmdFbmFibGVkKGV2ZW50LCB1c2VyKSB7XG4gICAgc3dpdGNoIChldmVudC5zdGF0dXMpIHtcbiAgICAgICAgY2FzZSBnYW1lc0NvbnN0YW50cy5TVEFUVVMuT1BFTl9GT1JfQUxMOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGNhc2UgZ2FtZXNDb25zdGFudHMuU1RBVFVTLk9QRU5fRk9SX01FTUJFUlM6IHtcbiAgICAgICAgICAgIHJldHVybiB1c2VyLnNlYXNvblRpY2tldHMgPiAwXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnN0IGF1dGhEYXRhID0gc3RhdGUuYXV0aERhdGE7XG4gICAgY29uc3QgdXNlcnMgPSBzdGF0ZS51c2VycztcbiAgICBjb25zdCBldmVudCA9IHN0YXRlLmV2ZW50c1tvd25Qcm9wcy5ldmVudElkXTtcbiAgICBjb25zdCBib29raW5ncyA9IHN0YXRlLmJvb2tpbmdzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaG9tZVRlYW06IHRlYW1zRGF0YS5IQVBPRUxfSkVSVVNBTEVNLFxuICAgICAgICBhd2F5VGVhbTogdGVhbXNEYXRhW2V2ZW50LnR5cGVJZF0sXG4gICAgICAgIHN0YXR1czogZXZlbnQuc3RhdHVzLFxuICAgICAgICBkYXRlOiBldmVudC5kYXkgKyAnLycgKyBldmVudC5tb250aCArICcvJyArIGV2ZW50LnllYXIsXG4gICAgICAgIHRpbWU6IGV2ZW50LmhvdXIgKyAnOicgKyBldmVudC5taW51dGUsXG4gICAgICAgIGlzQm9va2luZ0FsbG93ZWQ6IGlzQm9va2luZ0VuYWJsZWQoZXZlbnQsIHVzZXJzW2F1dGhEYXRhLnVpZF0pLFxuICAgICAgICBpc0Jvb2tlZDogXy5oYXNJbihib29raW5ncywgW2F1dGhEYXRhLnVpZCwgb3duUHJvcHMuZXZlbnRJZF0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZWFtTG9nb3MoaG9tZSwgYXdheSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwcy1pbWFnZXMgbWVkaXVtLTQgc21hbGwtMTIgdGV4dC1jZW50ZXIgbWVkaXVtLXRleHQtcmlnaHQgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBzbWFsbCBoaWRlLWZvci1zbWFsbC1vbmx5XCIgc3JjPXtob21lLmxvZ299Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IGhpZGUtZm9yLXNtYWxsLW9ubHlcIj57aG9tZS5sYWJlbH08L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRlLWZvci1zbWFsbC1vbmx5IHNlcGFyYXRvclwiPiAtIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXZlbnQtaW1hZ2Ugc21hbGwgaGlkZS1mb3Itc21hbGwtb25seVwiIHNyYz17YXdheS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JvdXAtdGV4dCBoaWRlLWZvci1zbWFsbC1vbmx5XCI+e2F3YXkubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzLW5hbWVzIHNob3ctZm9yLXNtYWxsLW9ubHkgdGV4dC1jZW50ZXIgcm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHNtYWxsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBiaWdcIiBzcmM9e2hvbWUubG9nb30vPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IHNtYWxsXCI+e2hvbWUubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBzbWFsbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXZlbnQtaW1hZ2UgYmlnXCIgc3JjPXthd2F5LmxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JvdXAtdGV4dCBzbWFsbFwiPnthd2F5LmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudFRpbWVBbmREYXRlKGRhdGUsIHRpbWUsIGlzT3BlbkZvckJvb2tpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBoaWRlLWZvci1zbWFsbC1vbmx5XCI+XG4gICAgICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nID8gPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtdGltZVwiPnt0aW1lfTwvc3Bhbj4gOiBudWxsIH1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1kYXRlXCI+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaW5mbyBjb2x1bW4gbWVkaXVtLTIgc21hbGwtMTIgc2hvdy1mb3Itc21hbGwtb25seSBjb2xvcmVkXCI+XG4gICAgICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nID8gPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtdGltZVwiPnt0aW1lfTwvc3Bhbj4gOiBudWxsIH1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1kYXRlXCI+e2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZ1bGx5Qm9va2VkTGFiZWwoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaW5mbyBjb2x1bW4gbWVkaXVtLTIgc21hbGwtMTIgaGlkZS1mb3Itc21hbGwtb25seVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXN0YXR1c1wiPntnYW1lc0NvbnN0YW50cy5UUkFOU0xBVElPTlMuZnVsbHlCb29rZWR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaW5mbyBjb2x1bW4gbWVkaXVtLTIgc21hbGwtMTIgc2hvdy1mb3Itc21hbGwtb25seSBjb2xvcmVkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3RhdHVzXCI+e2dhbWVzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5mdWxseUJvb2tlZH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9va2luZ0J1dHRvbihpc0Jvb2tpbmdBbGxvd2VkLCBpc0Jvb2tlZCwgb25Cb29raW5nKSB7XG4gICAgY29uc3QgYm9va0J1dHRvbiA9IChcbiAgICAgICAgPHNwYW4ga2V5PVwiYm9vay1idG5cIj5cbiAgICAgICAgICAgIDxzcGFuPntib29raW5nc0NvbnN0YW50cy5UUkFOU0xBVElPTlMuYm9va308L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1idXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgY29uc3QgZWRpdEJvb2tpbmdCdXR0b24gPSAoXG4gICAgICAgIDxzcGFuIGtleT1cImVkaXQtYnRuXCI+XG4gICAgICAgICAgICA8c3Bhbj57Ym9va2luZ3NDb25zdGFudHMuVFJBTlNMQVRJT05TLmVkaXRCb29raW5nfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJ1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gc3VjY2VzcyBzbWFsbFwiIGtleT1cInJlZ2lzdGVyLWJ0blwiIG9uQ2xpY2s9e29uQm9va2luZ30gZGlzYWJsZWQ9eyFpc0Jvb2tpbmdBbGxvd2VkfT5cbiAgICAgICAgICAgIHsgaXNCb29rZWQgPyBlZGl0Qm9va2luZ0J1dHRvbiA6IGJvb2tCdXR0b24gfVxuICAgICAgICA8L2E+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9va2luZ0NhbmNlbGxhdGlvbkJ1dHRvbihvbkNhbmNlbEJvb2tpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gc21hbGwgYWxlcnRcIiBrZXk9XCJyZW1vdmUtYnRuXCIgb25DbGljaz17b25DYW5jZWxCb29raW5nfT5cbiAgICAgICAgICAgIDxzcGFuPntib29raW5nc0NvbnN0YW50cy5UUkFOU0xBVElPTlMuY2FuY2VsQm9va2luZ308L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbnNCdXR0b25zKGlzT3BlbkZvckJvb2tpbmcsIGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcsIG9uQ2FuY2VsQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLWJ1dHRvbnMgbWVkaXVtLTQgc21hbGwtMTIgdGV4dC1jZW50ZXIgbWVkaXVtLXRleHQtbGVmdCBjb2x1bW5cIj5cbiAgICAgICAgICAgIHsgaXNPcGVuRm9yQm9va2luZyA/IGNyZWF0ZUJvb2tpbmdCdXR0b24oaXNCb29raW5nQWxsb3dlZCwgaXNCb29rZWQsIG9uQm9va2luZykgOiBudWxsIH1cbiAgICAgICAgICAgIHsgaXNPcGVuRm9yQm9va2luZyAmJiBpc0Jvb2tlZCA/IGNyZWF0ZUJvb2tpbmdDYW5jZWxsYXRpb25CdXR0b24ob25DYW5jZWxCb29raW5nKSA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBFdmVudEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaXNPcGVuRm9yQm9va2luZyA9IHRoaXMucHJvcHMuc3RhdHVzICE9PSBnYW1lc0NvbnN0YW50cy5TVEFUVVMuQ0xPU0VEO1xuICAgICAgICBjb25zdCBpc0Z1bGx5Qm9va2VkID0gdGhpcy5wcm9wcy5zdGF0dXMgPT09IGdhbWVzQ29uc3RhbnRzLlNUQVRVUy5GVUxMWV9CT09LRUQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWl0ZW0gcm93IGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVUZWFtTG9nb3ModGhpcy5wcm9wcy5ob21lVGVhbSwgdGhpcy5wcm9wcy5hd2F5VGVhbSkgfVxuICAgICAgICAgICAgICAgIHsgY3JlYXRlRXZlbnRUaW1lQW5kRGF0ZSh0aGlzLnByb3BzLmRhdGUsIHRoaXMucHJvcHMudGltZSwgaXNPcGVuRm9yQm9va2luZyApfVxuICAgICAgICAgICAgICAgIHsgaXNGdWxseUJvb2tlZCA/IGNyZWF0ZUZ1bGx5Qm9va2VkTGFiZWwoKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQWN0aW9uc0J1dHRvbnMoaXNPcGVuRm9yQm9va2luZywgdGhpcy5wcm9wcy5pc0Jvb2tpbmdBbGxvd2VkLCB0aGlzLnByb3BzLmlzQm9va2VkLCB0aGlzLnByb3BzLm9uQm9va2luZywgdGhpcy5wcm9wcy5vbkNhbmNlbEJvb2tpbmcpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRXZlbnRJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBob21lVGVhbTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxvZ286IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGF3YXlUZWFtOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbG9nbzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgZGF0ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0YXR1czogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0Jvb2tpbmdBbGxvd2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBpc0Jvb2tlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgb25Cb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNhbmNlbEJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEV2ZW50SXRlbSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRJdGVtLmpzeCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBTVEFUVVM6IHtcbiAgICBDTE9TRUQ6ICdjbG9zZWQnLFxuICAgIE9QRU5fRk9SX01FTUJFUlM6ICdvcGVuRm9yTWVtYmVycycsXG4gICAgT1BFTl9GT1JfQUxMOiAnb3BlbkZvckFsbCcsXG4gICAgRlVMTFlfQk9PS0VEOiAnZnVsbHlCb29rZWQnXG4gIH0sXG4gIFRSQU5TTEFUSU9OUzoge1xuICAgIGNsb3NlZDogJ9eU15TXqNep157XlCDXodeS15XXqNeUJyxcbiAgICBvcGVuRm9yTWVtYmVyczogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec157XoNeV15nXmSDXlNeh16LXldeqJyxcbiAgICBvcGVuRm9yQWxsOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXm9eV15zXnScsXG4gICAgZnVsbHlCb29rZWQ6ICfXlNeU16HXoteUINee15zXkNeUJ1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9nYW1lQ29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRSQU5TTEFUSU9OUzoge1xuICAgIGJvb2s6ICfXlNeo16nXnScsXG4gICAgZWRpdEJvb2tpbmc6ICfXoteo15XXmicsXG4gICAgY2FuY2VsQm9va2luZzogJ9eR15jXnCDXlNeo16nXnteUJ1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9ib29raW5nc0NvbnN0YW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBIQVBPRUxfSkVSVVNBTEVNOiB7XG4gICAgbGFiZWw6ICfXlNek15XXotecINeZ16jXldep15zXmdedJyxcbiAgICBsb2dvOiAnaHR0cDovL2hhcG9lbC5jby5pbC9zaXRlcy9kZWZhdWx0L2ZpbGVzL2xvZ28xMjB4MTIwLnBuZydcbiAgfSxcbiAgJ2hhcG9lbC10bHYnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2hhcG9lbHRhLnBuZycsXG4gICAgbGFiZWw6ICfXlNek15XXotecINeq15wg15DXkdeZ15EnXG4gIH0sXG4gICdtYWNjYWJpLXRsdic6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fbWFjY2FiaS5wbmcnLFxuICAgIGxhYmVsOiAn157Xm9eR15kg16rXnCDXkNeR15nXkSdcbiAgfSxcbiAgJ2hlcnplbGl5YSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fc2hhcm9uLnBuZycsXG4gICAgbGFiZWw6ICfXkdeg15kg15TXqNem15zXmdeUJ1xuICB9LFxuICAna2lyeWF0LWdhdCc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvSW1hZ2VzL3RlYW1zL2JpZ0dhdC5wbmcnLFxuICAgIGxhYmVsOiAn157Xm9eR15kg16fXqNeZ16og15LXqidcbiAgfSxcbiAgJ2dpbGJvYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fR2FsaWwucG5nJyxcbiAgICBsYWJlbDogJ9eS15zXmdecL9eS15zXkdeV16InXG4gIH0sXG4gICduYWhhcml5YSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fbmFoYXJpYS5wbmcnLFxuICAgIGxhYmVsOiAn16LXmdeo15XXoNeZINeg15TXqNeZ15QnXG4gIH0sXG4gICdob2xvbic6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2FydGljbGVzL2xvZ29faGgucG5nJyxcbiAgICBsYWJlbDogJ9eU16TXldei15wg15fXldec15XXnydcbiAgfSxcbiAgJ2FzaGRvZCc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fYXNoZG9kLnBuZycsXG4gICAgbGFiZWw6ICfXnteb15HXmSDXkNep15PXldeTJ1xuICB9LFxuICAnaGFpZmEnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2hhaWZhLnBuZycsXG4gICAgbGFiZWw6ICfXnteb15HXmSDXl9eZ16TXlCdcbiAgfSxcbiAgJ3Jpc2hvbic6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fcmlzaG9uLnBuZycsXG4gICAgbGFiZWw6ICfXnteb15HXmSDXqNeQ16nXldefINec16bXmdeV158nXG4gIH0sXG4gICdlaWxhdCc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29fZWlsYXQucG5nJyxcbiAgICBsYWJlbDogJ9eU16TXldei15wg15DXmdec16onXG4gIH0sXG4gICdsanVibGphbmEnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvOC84ZS9Vbmlvbl9vbGltcGlqYS5wbmcvMTQwcHgtVW5pb25fb2xpbXBpamEucG5nJyxcbiAgICBsYWJlbDogJ9ec15XXkdec15nXkNeg15QnXG4gIH0sXG4gICd2YWxlbmNpYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3NhbXZhbnJvc3NvbS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMTAvdmFsZW5jaWEtYmFza2V0MS1sb2dvLmpwZycsXG4gICAgbGFiZWw6ICfXldec16DXodeZ15QnXG4gIH0sXG4gICdrdWJhbic6IHtcbiAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi8wLzA0L0xva29tb3Rpdl9LdWJhbl9sb2dvLnBuZy8yMDBweC1Mb2tvbW90aXZfS3ViYW5fbG9nby5wbmcnLFxuICAgIGxhYmVsOiAn15zXlden15XXnteV15jXmdeRINen15XXkdeQ158nXG4gIH0sXG4gICdmdWVubGFicmFkYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi8xLzEzL0JhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcvMTEwcHgtQmFsb25jZXN0b2Z1ZW5sYWJyYWRhLmpwZycsXG4gICAgbGFiZWw6ICfXpNeV15DXoNec15HXqNeT15QnXG4gIH0sXG4gICd1bG0nOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly9uYWNod3VjaHMuYmJ1MDEuY29tL21vZHVsZXMvbW9kX2JidW5ld3NmbGFzaC9hc3NldHMvaW1hZ2VzL25vaW1hZ2VfdGh1bWIuanBnJyxcbiAgICBsYWJlbDogJ9eQ15XXnNedJ1xuICB9LFxuICAndmlsbmEnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvNy83NS9CQ19MaWV0dXZvc19SeXRhc19sb2dvLnN2Zy85MDdweC1CQ19MaWV0dXZvc19SeXRhc19sb2dvLnN2Zy5wbmcnLFxuICAgIGxhYmVsOiAn16jXmdeY15DXoSDXldeZ15zXoNeUJ1xuICB9LFxuICAnbm92Z29yb2QnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly9vbHltcGlha29zLWxpdmUuZ3IvaW1nL3RlYW1zL05pemhueSUyME5vdmdvcm9kLnBuZycsXG4gICAgbGFiZWw6ICfXoNeZ15bXs9eg15knXG4gIH0sXG4gICd6ZW5pdCc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjUvRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcvMjIwcHgtRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcnLFxuICAgIGxhYmVsOiAn15bXoNeZ15gnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdGVhbXNEYXRhLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEl0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEl0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50LWl0ZW0ge1xcbiAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgLmV2ZW50LWl0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmdyb3Vwcy1pbWFnZXMgLnNlcGFyYXRvciB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWltYWdlLmJpZyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICB3aWR0aDogOTBweDtcXG4gICAgICBoZWlnaHQ6IDkwcHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWltYWdlLnNtYWxsIHtcXG4gICAgICBtYXJnaW46IDAgNXB4O1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDBweDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmdyb3Vwcy1uYW1lcyB7XFxuICAgIHBhZGRpbmc6IDAgNGVtOyB9XFxuICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mby5jb2xvcmVkIHtcXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWluZm8gLmV2ZW50LXN0YXR1cyB7XFxuICAgICAgY29sb3I6ICNEMzJGMkY7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWluZm8gc3BhbiB7XFxuICAgICAgbWFyZ2luOiAwIDE1cHg7IH1cXG4gIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNXB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uLnNtYWxsIHtcXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgICAgbWFyZ2luOiAwIDVweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuYWN0aW9uLWJ1dHRvbnMgLmJ1dHRvbiBpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ib29raW5nRm9ybS5ydCc7XG5cbmNvbnN0IGVtcHR5Qm9va2luZyA9IHtcbiAgcGFpZFNlYXRzOiAwLFxuICBleHRyYVNlYXRzOiAwLFxuICBwaWNrVXA6ICd0bHYnLFxuICBkcm9wT2ZmOiAndGx2J1xufTtcblxuY29uc3QgYm9va2luZ0Zvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQm9va2luZ0Zvcm0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQm9va2luZ0NhbmNlbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgYm9va2luZzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvbkNsb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBib29raW5nID0gXy5kZWZhdWx0cyh0aGlzLnByb3BzLmJvb2tpbmcsIHsgcGFpZFNlYXRzOiB0aGlzLnByb3BzLnNlYXNvblRpY2tldHMgfSwgZW1wdHlCb29raW5nKTtcbiAgICByZXR1cm4gXy5tZXJnZSh7fSwgYm9va2luZywge1xuICAgICAgcGlja1VwRW5hYmxlZDogISFib29raW5nLnBpY2tVcCxcbiAgICAgIGRyb3BPZmZFbmFibGVkOiAhIWJvb2tpbmcuZHJvcE9mZlxuICAgIH0pO1xuICB9LFxuXG4gIG9uQ2hhbmdlKGUsIHZhbGlkYXRpb25UeXBlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ251bWVyaWMnKSB7XG4gICAgICBpZiAoIS9eWzAtOV0qJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ2hlYnJldycpIHtcbiAgICAgIGlmICghL15b15At16pcXHNdKiQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICB0b2dnbGVQaWNrVXAoZSkge1xuICAgIGNvbnN0IHBpY2tVcEVuYWJsZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwaWNrVXBFbmFibGVkIH0pO1xuICAgIGlmICghcGlja1VwRW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBpY2tVcDogJycgfSk7XG4gICAgfVxuICB9LFxuXG4gIHRvZ2dsZURyb3BPZmYoZSkge1xuICAgIGNvbnN0IGRyb3BPZmZFbmFibGVkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJvcE9mZkVuYWJsZWQgfSk7XG4gICAgaWYgKCFkcm9wT2ZmRW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BPZmY6ICcnIH0pO1xuICAgIH1cbiAgfSxcblxuICBvbk51bWVyaWNDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfSxcblxuICBpc0Zvcm1WYWxpZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wYWlkU2VhdHMgPT09IDAgJiYgdGhpcy5zdGF0ZS5leHRyYVNlYXRzID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnBpY2tVcEVuYWJsZWQgJiYgIXRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkICYmIHRoaXMuc3RhdGUucGlja1VwID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmRyb3BPZmZFbmFibGVkICYmIHRoaXMuc3RhdGUuZHJvcE9mZiA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBib29raW5nVG9TdWJtaXQgPSBfLnBpY2sodGhpcy5zdGF0ZSwgXy5rZXlzKGVtcHR5Qm9va2luZykpO1xuICAgIHRoaXMucHJvcHMub25TdWJtaXQoYm9va2luZ1RvU3VibWl0KTtcbiAgfSxcblxuICByZW5kZXI6IHRlbXBsYXRlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib29raW5nRm9ybTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nRm9ybS9ib29raW5nRm9ybS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vZm9ybUZyYW1lJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBGb3JtRnJhbWUsIGNvbnN0YW50cykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiByZXBlYXRTZWF0MShzZWF0LCBzZWF0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnc2VhdC0nICsgc2VhdEluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogc2VhdEluZGV4XG4gICAgICAgIH0sIHNlYXRJbmRleCwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFeHRyYVNlYXQyKGV4dHJhU2VhdCwgZXh0cmFTZWF0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnZXh0cmFTZWF0LScgKyBleHRyYVNlYXRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV4dHJhU2VhdEluZGV4XG4gICAgICAgIH0sIGV4dHJhU2VhdEluZGV4LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlMyhlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUGlja1VwKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRTdGF0aW9uNChzdGF0aW9uLCBzdGF0aW9uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnc3RhdGlvbi0nICsgc3RhdGlvbkluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogc3RhdGlvbkluZGV4XG4gICAgICAgIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCBzdGF0aW9uLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2U1KGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wT2ZmKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRTdGF0aW9uNihzdGF0aW9uLCBzdGF0aW9uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnc3RhdGlvbi0nICsgc3RhdGlvbkluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogc3RhdGlvbkluZGV4XG4gICAgICAgIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCBzdGF0aW9uLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUZyYW1lLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgICAgICAgJ29uU3VibWl0JzogdGhpcy5vblN1Ym1pdCxcbiAgICAgICAgICAgICdvbkNsb3NlJzogdGhpcy5wcm9wcy5vbkNsb3NlLFxuICAgICAgICAgICAgJ29uUmVtb3ZlJzogdGhpcy5wcm9wcy5vbkJvb2tpbmdDYW5jZWwsXG4gICAgICAgICAgICAnZGlzYWJsZWQnOiAhdGhpcy5pc0Zvcm1WYWxpZCgpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdib29raW5nLWZvcm0gc21hbGwtMTEgc21hbGwtY2VudGVyZWQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdyb3cnIH0sIHRoaXMucHJvcHMuc2Vhc29uVGlja2V0cyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtNiBjb2x1bW5zJyxcbiAgICAgICAgICAgICdrZXknOiAnNDUyJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn15vXnteV16og157XoNeV15nXmdedXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucGFpZFNlYXRzLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25OdW1lcmljQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ3BhaWRTZWF0cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChfLnRpbWVzKHRoaXMucHJvcHMuc2Vhc29uVGlja2V0cyArIDEpLCByZXBlYXRTZWF0MS5iaW5kKHRoaXMpKVxuICAgICAgICBdKSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTYgY29sdW1ucyBlbmQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXoNeV16HXoteZ150g15HXqtep15zXldedXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZXh0cmFTZWF0cyxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uTnVtZXJpY0NoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdleHRyYVNlYXRzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKF8udGltZXMoY29uc3RhbnRzLk1BWF9FWFRSQV9QQVNTRU5HRVJTKSwgcmVwZWF0RXh0cmFTZWF0Mi5iaW5kKHRoaXMpKVxuICAgICAgICBdKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3JvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTMgbGFyZ2UtMiBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2h0bWxGb3InOiAncGlja1VwVG9nZ2xlJyB9LCAn15TXnNeV15onKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3N3aXRjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1pbnB1dCcsXG4gICAgICAgICAgICAnaWQnOiAncGlja1VwVG9nZ2xlJyxcbiAgICAgICAgICAgICd0eXBlJzogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlMy5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2NoZWNrZWQnOiB0aGlzLnN0YXRlLnBpY2tVcEVuYWJsZWRcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzd2l0Y2gtcGFkZGxlJyxcbiAgICAgICAgICAgICdodG1sRm9yJzogJ3BpY2tVcFRvZ2dsZSdcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTkgbGFyZ2UtMTAgY29sdW1ucyBlbmQgbW9yZS1zcGFjZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnBpY2tVcCxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ3BpY2tVcCcsXG4gICAgICAgICAgICAgICAgJ2Rpc2FibGVkJzogIXRoaXMuc3RhdGUucGlja1VwRW5hYmxlZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdzdHlsZSc6IHsgZGlzcGxheTogJ25vbmUnIH1cbiAgICAgICAgICAgIH0sICfXkdeX16gnKSxcbiAgICAgICAgICAgIF8ubWFwKGNvbnN0YW50cy5TVEFUSU9OUywgcmVwZWF0U3RhdGlvbjQuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3JvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTMgbGFyZ2UtMiBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2h0bWxGb3InOiAnZHJvcE9mZlRvZ2dsZScgfSwgJ9eX15bXldeoJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzd2l0Y2gnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzd2l0Y2gtaW5wdXQnLFxuICAgICAgICAgICAgJ2lkJzogJ2Ryb3BPZmZUb2dnbGUnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2U1LmJpbmQodGhpcyksXG4gICAgICAgICAgICAnY2hlY2tlZCc6IHRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWRcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzd2l0Y2gtcGFkZGxlJyxcbiAgICAgICAgICAgICdodG1sRm9yJzogJ2Ryb3BPZmZUb2dnbGUnXG4gICAgICAgIH0pKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC05IGxhcmdlLTEwIGNvbHVtbnMgZW5kIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5kcm9wT2ZmLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnZHJvcE9mZicsXG4gICAgICAgICAgICAgICAgJ2Rpc2FibGVkJzogIXRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnc3R5bGUnOiB7IGRpc3BsYXk6ICdub25lJyB9XG4gICAgICAgICAgICB9LCAn15HXl9eoJyksXG4gICAgICAgICAgICBfLm1hcChjb25zdGFudHMuU1RBVElPTlMsIHJlcGVhdFN0YXRpb242LmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkpKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nRm9ybS9ib29raW5nRm9ybS5ydFxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eD0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgRm9ybUZyYW1lID0gcmVxdWlyZSgnLi9mb3JtRnJhbWUnKTtcblxuY29uc3QgdXNlckluZm9Db25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy91c2VySW5mb0NvbnN0YW50cycpO1xuY29uc3QgdXNlckZvcm1UcmFuc2xhdGlvbnMgPSByZXF1aXJlKCcuLi91dGlscy90cmFuc2xhdGlvbnMvdXNlckZvcm1UcmFuc2xhdGlvbnMnKTtcbmNvbnN0IHVzZXJBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucycpO1xuXG5jb25zdCBlbXB0eVVzZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnJyxcbiAgICBsYXN0TmFtZTogJycsXG4gICAgcGhvbmVQcmVmaXg6ICcwNTAnLFxuICAgIHBob25lTnVtYmVyOiAnJyxcbiAgICBzdGF0aW9uOiAndGx2JyxcbiAgICBzdWJzY3JpYmVTTVM6IHRydWUsXG4gICAgc3Vic2NyaWJlTWFpbDogdHJ1ZSxcbiAgICBzZWFzb25UaWNrZXRzOiAwXG59O1xuXG5mdW5jdGlvbiBnZXRFbXB0eVVzZXJJbmZvKGVtYWlsKSB7XG4gIHJldHVybiBfLmFzc2lnbihlbXB0eVVzZXIsIHsgZW1haWwgfSk7XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICBjb25zdCB1c2VyID0gc3RhdGUudXNlcnNbb3duUHJvcHMudWlkXTtcbiAgICBjb25zdCBhdXRoRGF0YSA9IHN0YXRlLmF1dGhEYXRhO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlckluZm86IHVzZXIgfHwgZ2V0RW1wdHlVc2VySW5mbyhhdXRoRGF0YS5lbWFpbCksXG4gICAgICAgIGlzQWRtaW5Nb2RlOiBhdXRoRGF0YS5pc0FkbWluLFxuICAgICAgICBhbGxvd1VzZXJSZW1vdmU6IGF1dGhEYXRhLmlzQWRtaW4gJiYgYXV0aERhdGEudWlkICE9PSBvd25Qcm9wcy51aWRcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1c2VyQWN0aW9ucy51cGRhdGVVc2VyKG93blByb3BzLnVpZCwgdXNlcikpLFxuICAgICAgICByZW1vdmVVc2VyOiAoKSA9PiBkaXNwYXRjaCh1c2VyQWN0aW9ucy5yZW1vdmVVc2VyKG93blByb3BzLnVpZCkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRtaW5TZWN0aW9uKHNlYXNvblRpY2tldHMsIG9uTnVtYmVyQ2hhbmdlKSB7XG4gIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT1cInNlYXNvblRpY2tldHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0xMiBjb2x1bW5zXCI+XG4gICAgICAgICAgPGxhYmVsPteb157XldeqINee16DXldeZ15nXnVxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic2Vhc29uVGlja2V0c1wiIHZhbHVlPXtzZWFzb25UaWNrZXRzfSBvbkNoYW5nZT17b25OdW1iZXJDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIHsgXy50aW1lcyh1c2VySW5mb0NvbnN0YW50cy5NQVhfU0VBU09OX1RJQ0tFVFMsIGkgPT4gPG9wdGlvbiBrZXk9eydhbW91bnQtJyArIGl9IHZhbHVlPXtpfT57aX08L29wdGlvbj4pIH1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJOYW1lSW5wdXRzKGZpcnN0TmFtZSwgbGFzdE5hbWUsIG9uVGV4dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTYgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLkZJUlNUX05BTUUgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIgdmFsdWU9e2ZpcnN0TmFtZX0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gbWF4TGVuZ3RoPVwiMjBcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuTEFTVF9OQU1FIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3ROYW1lXCIgdmFsdWU9e2xhc3ROYW1lfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSBtYXhMZW5ndGg9XCIyMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbWFpbElucHV0KGVtYWlsLCBvblRleHRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT1cInVzZXItaW5mby1lbWFpbC1pbnB1dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS0xMiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuRU1BSUwgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGhvbmVOdW1iZXJJbnB1dHMocGhvbmVQcmVmaXgsIHBob25lTnVtYmVyLCBvblRleHRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC04IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5QSE9ORV9OVU1CRVIgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIG5hbWU9XCJwaG9uZU51bWJlclwiIHZhbHVlPXtwaG9uZU51bWJlcn0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gbWF4TGVuZ3RoPVwiN1wiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC00IGNvbHVtbnMgZW5kXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuUEhPTkVfUFJFRklYIH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicGhvbmVQcmVmaXhcIiB2YWx1ZT17cGhvbmVQcmVmaXh9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBfLm1hcCh1c2VySW5mb0NvbnN0YW50cy5QSE9ORV9QUkVGSVhFUywgcHJlZml4ID0+IDxvcHRpb24ga2V5PXsncGhvbmUtcHJlZml4LScgKyBwcmVmaXh9IHZhbHVlPXtwcmVmaXh9PntwcmVmaXh9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaWNrdXBTdGF0aW9uUm93KHN0YXRpb24sIHJlcXVlc3RGb3JNZW1iZXJzaGlwLCBvblRleHRDaGFuZ2UsIG9uQm9vbGVhbkNoYW5nZSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUGlja1VwU3RhdGlvbklucHV0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuRkFWT1JJVEVfUElDS1VQX1NUQVRJT04gfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzdGF0aW9uXCIgdmFsdWU9e3N0YXRpb259IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBfLm1hcCh1c2VySW5mb0NvbnN0YW50cy5TVEFUSU9OUywgc3RhdGlvbiA9PiA8b3B0aW9uIGtleT17J3N0YXRpb24tJyArIHN0YXRpb259IHZhbHVlPXtzdGF0aW9ufT57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlNUQVRJT05TW3N0YXRpb25dIH08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTQgc21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlJFUVVFU1RfRk9SX01FTUJFUlNISVAgfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyZXF1ZXN0Rm9yTWVtYmVyc2hpcFwiIHZhbHVlPXtyZXF1ZXN0Rm9yTWVtYmVyc2hpcH0gb25DaGFuZ2U9e29uQm9vbGVhbkNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt1bmRlZmluZWR9IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0+15HXl9eoPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXt0cnVlfT7Xm9efPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtmYWxzZX0+15zXkDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHsgY3JlYXRlUGlja1VwU3RhdGlvbklucHV0KCkgfVxuICAgICAgICAgICAgeyBjcmVhdGVSZXF1ZXN0Rm9yTWVtYmVyc2hpcElucHV0KCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXN0cmlidXRpb25JbnB1dHMoc3Vic2NyaWJlTWFpbCwgc3Vic2NyaWJlU01TLCBvbkJvb2xlYW5DaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0zIGNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTi5FTUFJTCB9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwic3dpdGNoLWlucHV0XCIgbmFtZT1cInN1YnNjcmliZU1haWxcIiBpZD1cInN1YnNjcmliZU1haWxcIiBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfSBjaGVja2VkPXtzdWJzY3JpYmVNYWlsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoLXBhZGRsZVwiIGh0bWxGb3I9XCJzdWJzY3JpYmVNYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5UT0dHTEUuWUVTIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlRPR0dMRS5OTyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTMgY29sdW1uIGVuZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLkRJU1RSSUJVVElPTi5TTVMgfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInN3aXRjaC1pbnB1dFwiIG5hbWU9XCJzdWJzY3JpYmVTTVNcIiBpZD1cInN1YnNjcmliZVNNU1wiIG9uQ2hhbmdlPXtvbkJvb2xlYW5DaGFuZ2V9IGNoZWNrZWQ9e3N1YnNjcmliZVNNU30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1wYWRkbGVcIiBodG1sRm9yPVwic3Vic2NyaWJlU01TXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5UT0dHTEUuWUVTIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlRPR0dMRS5OTyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIFVzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0gXy5jbG9uZSh0aGlzLnByb3BzLnVzZXJJbmZvKTtcbiAgfVxuXG4gIGlzRm9ybVZhbGlkID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGFzQWxsUmVxdWlyZWRJbmZvID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlcXVpcmVkSW5mbyA9IF8ucGljayh0aGlzLnN0YXRlLCBbJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdwaG9uZVByZWZpeCcsICdwaG9uZU51bWJlciddKTtcbiAgICAgICAgICByZXR1cm4gIV8uc29tZShyZXF1aXJlZEluZm8sIF8uaXNFbXB0eSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYXNWYWxpZFBob25lTnVtYmVyID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnBob25lTnVtYmVyLmxlbmd0aCA9PT0gNztcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIF8uaGFzKHRoaXMuc3RhdGUsICdyZXF1ZXN0Rm9yTWVtYmVyc2hpcCcpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGhhc0FsbFJlcXVpcmVkSW5mbygpICYmIGhhc1ZhbGlkUGhvbmVOdW1iZXIoKSAmJiBoYXNSZXF1ZXN0Rm9yTWVtYmVyc2hpcFByb3BlcnR5KCk7XG4gIH07XG5cbiAgb25LZXlQcmVzcyA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBpc0Zvcm1WYWxpZCh0aGlzLnN0YXRlKSkge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfTtcblxuICBvbkNoYW5nZSA9ICh0eXBlLCBlKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICh0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICB2YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC50eXBlID09PSAnc2VsZWN0LW9uZScpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSAodmFsdWUgIT09ICdmYWxzZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gQm9vbGVhbih2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih0aGlzLnN0YXRlKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsb3NlKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICB9O1xuXG4gIG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVVc2VyKCk7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbG9zZSkpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBvblRleHRDaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgJ3RleHQnKTtcbiAgICAgIGNvbnN0IG9uTnVtYmVyQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsICdudW1iZXInKTtcbiAgICAgIGNvbnN0IG9uQm9vbGVhbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzLCAnYm9vbGVhbicpO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUZyYW1lIHRpdGxlPXt1c2VyRm9ybVRyYW5zbGF0aW9ucy5USVRMRX1cbiAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17dGhpcy5wcm9wcy5hbGxvd1VzZXJSZW1vdmUgPyB0aGlzLm9uUmVtb3ZlIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLnByb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmlzRm9ybVZhbGlkKCl9PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1jZW50ZXJlZCB1c2VyLWNvbnRhaW5lclwiIG9uS2V5UHJlc3M9e3RoaXMub25LZXlQcmVzc30+XG5cbiAgICAgICAgICAgICAgeyBjcmVhdGVVc2VyTmFtZUlucHV0cyh0aGlzLnN0YXRlLmZpcnN0TmFtZSwgdGhpcy5zdGF0ZS5sYXN0TmFtZSwgb25UZXh0Q2hhbmdlKSB9XG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy51c2VySW5mby5lbWFpbCA/IG51bGwgOiBjcmVhdGVFbWFpbElucHV0KHRoaXMuc3RhdGUuZW1haWwsIG9uVGV4dENoYW5nZSkgfVxuICAgICAgICAgICAgICB7IGNyZWF0ZVBob25lTnVtYmVySW5wdXRzKHRoaXMuc3RhdGUucGhvbmVQcmVmaXgsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIsIG9uVGV4dENoYW5nZSwgb25OdW1iZXJDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgeyBjcmVhdGVQaWNrdXBTdGF0aW9uUm93KHRoaXMuc3RhdGUuc3RhdGlvbiwgdGhpcy5zdGF0ZS5yZXF1ZXN0Rm9yTWVtYmVyc2hpcCwgb25UZXh0Q2hhbmdlLCBvbkJvb2xlYW5DaGFuZ2UpIH1cblxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuaXNBZG1pbk1vZGUgPyBjcmVhdGVBZG1pblNlY3Rpb24odGhpcy5zdGF0ZS5zZWFzb25UaWNrZXRzLCBvbk51bWJlckNoYW5nZSkgOiBudWxsIH1cblxuICAgICAgICAgICAgICB7IGNyZWF0ZURpc3RyaWJ1dGlvbklucHV0cyh0aGlzLnN0YXRlLnN1YnNjcmliZU1haWwsIHRoaXMuc3RhdGUuc3Vic2NyaWJlU01TLCBvbkJvb2xlYW5DaGFuZ2UpIH1cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvRm9ybUZyYW1lPlxuICAgICk7XG4gIH1cbn1cblxuVXNlckZvcm0uUHJvcFR5cGVzID0ge1xuICAgIHVpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZVVzZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVtb3ZlVXNlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpc0FkbWluTW9kZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgYWxsb3dVc2VyUmVtb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB1c2VySW5mbzogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgICBvbkNsb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJGb3JtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91c2VyRm9ybS5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgTUFYX1NFQVNPTl9USUNLRVRTOiA3LFxuICBQSE9ORV9QUkVGSVhFUzogWycwNTAnLCAnMDUyJywgJzA1MycsICcwNTQnLCAnMDU1JywgJzA1NycsICcwNTgnXSxcbiAgU1RBVElPTlM6IFsnbW9kaWluJywgJ3RsdiddXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91c2VySW5mb0NvbnN0YW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBUSVRMRTogJ9ek16jXmNeZ150g15DXmdep15nXmdedJyxcbiAgRklSU1RfTkFNRTogJ9ep150nLFxuICBMQVNUX05BTUU6ICfXqdedINee16nXpNeX15QnLFxuICBFTUFJTDogJ9eT15XXkNeoINeQ15zXp9eY16jXldeg15knLFxuICBQSE9ORV9QUkVGSVg6ICfXp9eZ15PXldee16onLFxuICBQSE9ORV9OVU1CRVI6ICfXmNec16TXldefINeg15nXmdeTJyxcbiAgRkFWT1JJVEVfUElDS1VQX1NUQVRJT046ICfXqteX16DXqiDXotec15nXlCDXnteV16LXk9ek16onLFxuICBSRVFVRVNUX0ZPUl9NRU1CRVJTSElQOiAn157XoteV16DXmdeZ158g15HXnteg15XXmT8nLFxuICBTVEFUSU9OUzoge1xuICAgIG1vZGlpbjogJ9ee15XXk9eZ16LXmdefJyxcbiAgICB0bHY6ICfXqtecINeQ15HXmdeRJ1xuICB9LFxuICBESVNUUklCVVRJT046IHtcbiAgICBFTUFJTDogJ9eq16TXldem16og15DXmdee15nXmdecJyxcbiAgICBTTVM6ICfXqtek15XXpteqIFNNUydcbiAgfSxcbiAgVE9HR0xFOiB7XG4gICAgWUVTOiAn15vXnycsXG4gICAgTk86ICfXnNeQJ1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3RyYW5zbGF0aW9ucy91c2VyRm9ybVRyYW5zbGF0aW9ucy5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgVVNFUlNfUkVDRUlWRUQsIFVTRVJfUkVNT1ZFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBVU0VSX0lORk9fS0VZUyA9IFsnZW1haWwnLCAnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ3Bob25lUHJlZml4JywgJ3Bob25lTnVtYmVyJywgJ3JlcXVlc3RGb3JNZW1iZXJzaGlwJywgJ3N0YXRpb24nLCAnc3Vic2NyaWJlU01TJywgJ3N1YnNjcmliZU1haWwnLCAncGhvdG9VUkwnXTtcbmNvbnN0IFBBVEhfTUFQID0ge1xuICBVU0VSU19JTkZPOiAndXNlcnNJbmZvJyxcbiAgU0VBU09OX1RJQ0tFVFM6ICdzZWFzb25UaWNrZXRzJyxcbiAgQk9PS0lOR1M6ICdib29raW5ncydcbn07XG5cbmNvbnN0IGJ1aWxkVXNlciA9ICh1c2VySW5mbywgc2Vhc29uVGlja2V0cykgPT4ge1xuICBjb25zdCB1c2VyID0gXy5tZXJnZSh7fSwgdXNlckluZm8pO1xuICBpZiAoc2Vhc29uVGlja2V0cykge1xuICAgIF8ubWVyZ2UodXNlciwgeyBzZWFzb25UaWNrZXRzIH0pO1xuICB9XG4gIHJldHVybiB1c2VyO1xufTtcblxuY29uc3QgZmV0Y2hBbGxVc2VycyA9ICgpID0+IHtcbiAgY29uc3QgdXNlclJlYWRQcm9taXNlcyA9IFtcbiAgICBjbGllbnREQi5yZWFkKFBBVEhfTUFQLlVTRVJTX0lORk8pLFxuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuU0VBU09OX1RJQ0tFVFMpXG4gIF07XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHVzZXJSZWFkUHJvbWlzZXMpXG4gICAgLnRoZW4oKFt1c2Vyc0luZm8sIHNlYXNvblRpY2tldHNdKSA9PlxuICAgICAgXy50cmFuc2Zvcm0odXNlcnNJbmZvLCAoYWNjLCBpbmZvLCB1aWQpID0+IHtcbiAgICAgICAgYWNjW3VpZF0gPSBidWlsZFVzZXIoaW5mbywgc2Vhc29uVGlja2V0cyAmJiBzZWFzb25UaWNrZXRzW3VpZF0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICB9LCB7fSlcbiAgICApO1xufTtcblxuY29uc3QgZmV0Y2hTaW5nbGVVc2VyID0gdWlkID0+IHtcbiAgY29uc3QgdXNlclJlYWRQcm9taXNlcyA9IFtcbiAgICBjbGllbnREQi5yZWFkKFBBVEhfTUFQLlVTRVJTX0lORk8gKyAnLycgKyB1aWQpLFxuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuU0VBU09OX1RJQ0tFVFMgKyAnLycgKyB1aWQpXG4gIF07XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHVzZXJSZWFkUHJvbWlzZXMpXG4gICAgLnRoZW4oKFt1c2VySW5mbywgc2Vhc29uVGlja2V0c10pID0+IHtcbiAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICByZXR1cm4geyBbdWlkXTogYnVpbGRVc2VyKHVzZXJJbmZvLCBzZWFzb25UaWNrZXRzKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlcnNSZW1vdmVkID0gdWlkID0+ICh7XG4gIHR5cGU6IFVTRVJfUkVNT1ZFRCxcbiAgdWlkXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZXJzUmVjZWl2ZWQgPSB1c2VycyA9PiAoe1xuICB0eXBlOiBVU0VSU19SRUNFSVZFRCxcbiAgdXNlcnNcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3QgdWlkID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICd1aWQnXSk7XG4gIGNvbnN0IGlzQWRtaW4gPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ2lzQWRtaW4nXSk7XG4gIGNvbnN0IGZldGNoUHJvbWlzZSA9IGlzQWRtaW4gPyBmZXRjaEFsbFVzZXJzKCkgOiBmZXRjaFNpbmdsZVVzZXIodWlkKTtcblxuICByZXR1cm4gZmV0Y2hQcm9taXNlXG4gICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgaWYgKHVzZXJzKSB7XG4gICAgICAgIGRpc3BhdGNoKHVzZXJzUmVjZWl2ZWQodXNlcnMpKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKHVpZCwgdXNlcikgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgaXNBZG1pbiA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAnaXNBZG1pbiddKTtcblxuICBjb25zdCB1c2VyVXBkYXRlUHJvbWlzZXMgPSBbXG4gICAgY2xpZW50REIudXBkYXRlKCd1c2Vyc0luZm8vJyArIHVpZCwgXy5waWNrKHVzZXIsIFVTRVJfSU5GT19LRVlTKSlcbiAgXTtcblxuICBpZiAoaXNBZG1pbiAmJiB1c2VyLnNlYXNvblRpY2tldHMpIHtcbiAgICB1c2VyVXBkYXRlUHJvbWlzZXMucHVzaChjbGllbnREQi5zZXRJbignc2Vhc29uVGlja2V0cy8nICsgdWlkLCB1c2VyLnNlYXNvblRpY2tldHMpKTtcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyVXBkYXRlUHJvbWlzZXMpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh7IFt1aWRdOiB1c2VyIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyID0gdWlkID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IHVzZXJSZW1vdmVQcm9taXNlcyA9IF8ubWFwKFBBVEhfTUFQLCB1c2VyUGF0aCA9PiBjbGllbnREQi5yZW1vdmUoYCR7dXNlclBhdGh9LyR7dWlkfWApKTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlbW92ZVByb21pc2VzKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJzUmVtb3ZlZCh1aWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZVBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZS1wYWdlIC5ldmVudHMge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgIC5ob21lLXBhZ2UgLmV2ZW50cyB7XFxuICAgICAgbWFyZ2luLXRvcDogMHB4OyB9IH1cXG5cXG4uaG9tZS1wYWdlIC5vcGVuLWV2ZW50cyB7XFxuICBtYXJnaW4tYm90dG9tOiAyNXB4OyB9XFxuXFxuLmhvbWUtcGFnZSAuZXZlbnRzLWxpc3QgaDYge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uaG9tZS1wYWdlIC5uby1ib29raW5ncyB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM0MjQyNDI7IH1cXG4gIC5ob21lLXBhZ2UgLm5vLWJvb2tpbmdzIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG4uaG9tZS1wYWdlIC5ldmVudC1pdGVtIHtcXG4gIHBhZGRpbmc6IDVweCAwOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSAuZXZlbnQtaXRlbSB7XFxuICAgICAgcGFkZGluZzogMTVweCAwIDMwcHggMDsgfSB9XFxuICAuaG9tZS1wYWdlIC5ldmVudC1pdGVtOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7IH1cXG4gIC5ob21lLXBhZ2UgLmV2ZW50LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBCT09LSU5HU19SRUNFSVZFRCwgQk9PS0lOR19DQU5DRUxFRCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IEJPT0tJTkdfREFUQV9LRVlTID0gWydwYWlkU2VhdHMnLCAnZXh0cmFTZWF0cycsICdwaWNrVXAnLCAnZHJvcE9mZiddO1xuY29uc3QgQk9PS0lOR1NfUEFUSCA9ICdib29raW5ncyc7XG5cbmNvbnN0IGZldGNoVXNlckJvb2tpbmdzID0gdWlkID0+XG4gIGNsaWVudERCLnJlYWQoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9YClcbiAgICAudGhlbih1c2VyQm9va2luZ3MgPT4ge1xuICAgICAgaWYgKHVzZXJCb29raW5ncykge1xuICAgICAgICByZXR1cm4geyBbdWlkXTogdXNlckJvb2tpbmdzIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuY29uc3QgZmV0Y2hBbGxCb29raW5ncyA9ICgpID0+XG4gIGNsaWVudERCLnJlYWQoQk9PS0lOR1NfUEFUSCk7XG5cbmV4cG9ydCBjb25zdCBib29raW5nc1JlY2VpdmVkID0gYm9va2luZ3MgPT4gKHtcbiAgdHlwZTogQk9PS0lOR1NfUkVDRUlWRUQsXG4gIGJvb2tpbmdzXG59KTtcblxuZXhwb3J0IGNvbnN0IGJvb2tpbmdzQ2FuY2VsZWQgPSAodWlkLCBldmVudElkKSA9PiAoe1xuICB0eXBlOiBCT09LSU5HX0NBTkNFTEVELFxuICB1aWQsXG4gIGV2ZW50SWRcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCb29raW5ncyA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3QgdWlkID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICd1aWQnXSk7XG4gIGNvbnN0IGlzQWRtaW4gPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ2lzQWRtaW4nXSk7XG4gIGNvbnN0IGZldGNoUHJvbWlzZSA9IGlzQWRtaW4gPyBmZXRjaEFsbEJvb2tpbmdzKCkgOiBmZXRjaFVzZXJCb29raW5ncyh1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbihib29raW5ncyA9PiB7XG4gICAgICBpZiAoYm9va2luZ3MpIHtcbiAgICAgICAgZGlzcGF0Y2goYm9va2luZ3NSZWNlaXZlZChib29raW5ncykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUJvb2tpbmcgPSAodWlkLCBldmVudElkLCBib29raW5nRGF0YSkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgYm9va2luZ0RhdGFUb1VwZGF0ZSA9IF8ucGljayhib29raW5nRGF0YSwgQk9PS0lOR19EQVRBX0tFWVMpO1xuXG4gIHJldHVybiBjbGllbnREQi51cGRhdGUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gLCBib29raW5nRGF0YVRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzUmVjZWl2ZWQoeyBbdWlkXTogeyBbZXZlbnRJZF06IGJvb2tpbmdEYXRhVG9VcGRhdGUgfSB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FuY2VsQm9va2luZyA9ICh1aWQsIGV2ZW50SWQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5yZW1vdmUoYCR7Qk9PS0lOR1NfUEFUSH0vJHt1aWR9LyR7ZXZlbnRJZH1gKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGJvb2tpbmdzQ2FuY2VsZWQodWlkLCBldmVudElkKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3VzZXJzUGFnZS5ydCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7dXBkYXRlVXNlciwgcmVtb3ZlVXNlcn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5cbmNvbnN0IHBpY2tVc2Vyc0Z1bmN0aW9ucyA9IHtcbiAgQUxMOiB1c2VyID0+IHRydWUsXG4gIE1FTUJFUlM6IHVzZXIgPT4gdXNlci5zZWFzb25UaWNrZXRzID4gMCxcbiAgTk9OX01FTUJFUlM6IHVzZXIgPT4gIXVzZXIuc2Vhc29uVGlja2V0cyxcbiAgUkVRVUVTVFM6IHVzZXIgPT4gdXNlci5yZXF1ZXN0Rm9yTWVtYmVyc2hpcCxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICBhdXRoRGF0YTogc3RhdGUuYXV0aERhdGFcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICB1cGRhdGVVc2VyOiAodWlkLCB1c2VyKSA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVpZCwgdXNlcikpLFxuICByZW1vdmVVc2VyOiAodWlkKSA9PiBkaXNwYXRjaChyZW1vdmVVc2VyKHVpZCkpXG59KTtcblxuY2xhc3MgVXNlcnNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRpbmdVc2VySWQ6IG51bGwsXG4gICAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgICBmaWx0ZXI6ICdBTEwnXG4gICAgfTtcbiAgfVxuXG4gIGdldFZpc2libGVVc2VycygpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLnVzZXJzKVxuICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnNbdGhpcy5zdGF0ZS5maWx0ZXJdKVxuICAgICAgLnBpY2tCeSh1c2VyID0+IF8uc3RhcnRzV2l0aCh1c2VyLmZpcnN0TmFtZSwgdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSkgfHwgXy5zdGFydHNXaXRoKHVzZXIubGFzdE5hbWUsIHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpLCB0aGlzKVxuICAgICAgLm1hcCgodXNlciwgdWlkKSA9PiAoe3VzZXIsIHVpZH0pKVxuICAgICAgLnNvcnRCeSgndXNlci5maXJzdE5hbWUnKVxuICAgICAgLnZhbHVlKCk7XG4gIH1cblxuICBjb3VudFNlYXNvblRpY2tldHMoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy51c2VycylcbiAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zLk1FTUJFUlMpXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgnc2Vhc29uVGlja2V0cycpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGNvdW50Tm9uTWVtYmVyc1VzZXJzKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMudXNlcnMpXG4gICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5OT05fTUVNQkVSUylcbiAgICAgIC5zaXplKClcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgY291bnRSZXF1ZXN0c0Zvck1lbWJlcnNoaXAoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy51c2VycylcbiAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zLlJFUVVFU1RTKVxuICAgICAgLnNpemUoKVxuICAgICAgLnZhbHVlKCk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hRdWVyeUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoUXVlcnk6IGUudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZmlsdGVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyfSk7XG4gIH1cblxuICBvblVzZXJDbGljayh1aWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlZGl0aW5nVXNlcklkOiB1aWR9KTtcbiAgfVxuXG4gIHN0b3BFZGl0aW5nKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmdVc2VySWQ6IG51bGwsIHNlYXJjaFF1ZXJ5OiAnJ30pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldFVzZXJUaXRsZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZTtcbiAgfVxuXG4gIGdldFVzZXJTdWJ0aXRsZXModXNlcikge1xuICAgIHJldHVybiBbdXNlci5waG9uZVByZWZpeCArICctJyArIHVzZXIucGhvbmVOdW1iZXIsIHVzZXIuZW1haWwsICfXm9ee15XXqiDXnteg15XXmdeZ1506ICcgKyAodXNlci5zZWFzb25UaWNrZXRzIHx8IDApXTtcbiAgfVxuXG4gIGdldFVzZXJJbWFnZSh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIucGhvdG9VUkwgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE2My8xNjM4MDQuc3ZnJztcbiAgfVxufVxuXG5Vc2Vyc1BhZ2UucHJvcFR5cGVzID0ge1xuICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJzUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vbGlzdEl0ZW0nLFxuICAgICcuLi91c2VyRm9ybScsXG4gICAgJy4vdXNlcnNQYWdlLnNjc3MnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIGxpc3RJdGVtLCBVc2VyRm9ybSwgdXNlcnNQYWdlQ3NzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxKHZpc2libGVVc2Vycykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnQUxMJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2syKHZpc2libGVVc2Vycykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnTUVNQkVSUycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMyh2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ1JFUVVFU1RTJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s0KHZpc2libGVVc2Vycykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnTk9OX01FTUJFUlMnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2U1KHZpc2libGVVc2VycywgZSkge1xuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaFF1ZXJ5Q2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNih2aXNpYmxlVXNlcnMsIHVzZXJJdGVtLCB1c2VySXRlbUluZGV4KSB7XG4gICAgICAgIHRoaXMub25Vc2VyQ2xpY2sodXNlckl0ZW0udWlkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0VXNlckl0ZW03KHZpc2libGVVc2VycywgdXNlckl0ZW0sIHVzZXJJdGVtSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0VXNlclRpdGxlKHVzZXJJdGVtLnVzZXIpLFxuICAgICAgICAgICAgJ2tleSc6ICd1c2VyLScgKyB1c2VySXRlbS51aWQsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRVc2VyU3VidGl0bGVzKHVzZXJJdGVtLnVzZXIpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRVc2VySW1hZ2UodXNlckl0ZW0udXNlciksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s2LmJpbmQodGhpcywgdmlzaWJsZVVzZXJzLCB1c2VySXRlbSwgdXNlckl0ZW1JbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlVmlzaWJsZVVzZXJzOCgpIHtcbiAgICAgICAgdmFyIHZpc2libGVVc2VycyA9IHRoaXMuZ2V0VmlzaWJsZVVzZXJzKCk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyAna2V5JzogJ2xpc3QtdmlldycgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXInIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlci10aXRsZScgfSwgJ9ee16nXqtee16nXmdedJykpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2ZpbHRlcmluZyByb3cgZXhwYW5kZWQgY29sbGFwc2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtOCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndWwnLCB7ICdjbGFzc05hbWUnOiAnbWVudSBzbWFsbC10ZXh0JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdBTEwnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazEuYmluZCh0aGlzLCB2aXNpYmxlVXNlcnMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eb15XXnNedICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgXy5zaXplKHRoaXMucHJvcHMudXNlcnMpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ01FTUJFUlMnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazIuYmluZCh0aGlzLCB2aXNpYmxlVXNlcnMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee16DXldeZ15nXnSAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuY291bnRTZWFzb25UaWNrZXRzKCksICcpJykpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnUkVRVUVTVFMnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazMuYmluZCh0aGlzLCB2aXNpYmxlVXNlcnMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eR16fXqdeUINec157XoNeV15kgJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCB0aGlzLmNvdW50UmVxdWVzdHNGb3JNZW1iZXJzaGlwKCksICcpJykpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnTk9OX01FTUJFUlMnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazQuYmluZCh0aGlzLCB2aXNpYmxlVXNlcnMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ec15Ag157XoNeV15nXmdedICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5jb3VudE5vbk1lbWJlcnNVc2VycygpLCAnKScpKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2NvbHVtbiBzbWFsbC0xMiBsYXJnZS00JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc2VhcmNoJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3NlYXJjaC1pbnB1dCcsXG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXInOiAn15fXmdek15XXqScsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2U1LmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5XG4gICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgJ2NsYXNzTmFtZSc6ICdzZWFyY2gtaWNvbicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHsgJ2NsYXNzTmFtZSc6ICdmYSBmYS1zZWFyY2gnIH0pKSkpKSxcbiAgICAgICAgICAgIF8ubWFwKHZpc2libGVVc2VycywgcmVwZWF0VXNlckl0ZW03LmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSksXG4gICAgICAgICAgICB2aXNpYmxlVXNlcnMubGVuZ3RoID09PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmaWx0ZXItc3RhdHVzJyxcbiAgICAgICAgICAgICAgICAna2V5JzogJzI3OTEnXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtZnJvd24tbycsXG4gICAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XpteY16LXqNeZ150sINec15Ag16DXntem15DXlSDXqNep15XXnteV16og157XqteQ15nXnteV16ouLi4nKSkgOiBudWxsXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsb3NlOSgpIHtcbiAgICAgICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlIHVzZXJzLXBhZ2UnIH0sICF0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQgPyBzY29wZVZpc2libGVVc2VyczguYXBwbHkodGhpcywgW10pIDogbnVsbCwgdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2tleSc6ICdlZGl0LXVzZXInLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChVc2VyRm9ybSwge1xuICAgICAgICAgICAgJ3VpZCc6IHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCxcbiAgICAgICAgICAgICdvbkNsb3NlJzogb25DbG9zZTkuYmluZCh0aGlzKVxuICAgICAgICB9KSkgOiBudWxsKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VzZXJzUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VzZXJzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlcnNQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2F1dGhQYWdlLnJ0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGxvZ2luV2l0aEdvb2dsZSxcbiAgbG9naW5XaXRoRmFjZWJvb2ssXG4gIGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbFxufSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJztcblxuaW1wb3J0IHsgcmVwb3J0RXJyb3IgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZXJyb3JNc2c6IHN0YXRlLmVycm9yTXNnXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBsb2dpbldpdGhHb29nbGU6ICgpID0+IGRpc3BhdGNoKGxvZ2luV2l0aEdvb2dsZSgpKSxcbiAgbG9naW5XaXRoRmFjZWJvb2s6ICgpID0+IGRpc3BhdGNoKGxvZ2luV2l0aEZhY2Vib29rKCkpLFxuICBsb2dpbldpdGhFbWFpbDogKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2gobG9naW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpKSxcbiAgc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZDogKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2goY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkpLFxuICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsOiBlbWFpbCA9PiBkaXNwYXRjaChzZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKSksXG4gIHJlcG9ydEVycm9yOiAobXNnKSA9PiBkaXNwYXRjaChyZXBvcnRFcnJvcihtc2cpKVxufSk7XG5cbmNvbnN0IEF1dGhGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0F1dGhGb3JtJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBsb2dpbldpdGhHb29nbGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbG9naW5XaXRoRmFjZWJvb2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbG9naW5XaXRoRW1haWw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVwb3J0RXJyb3I6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGFzc3dvcmRBZ2FpbjogJycsXG4gICAgICBhdXRoTW9kZTogJ2xvZ2luJyxcbiAgICAgIGlzTG9naW5Nb2RlOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgb25DaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGdldEJ1dHRvbkxhYmVsKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hdXRoTW9kZSkge1xuICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICByZXR1cm4gJ9eU16rXl9eR16gnO1xuICAgICAgY2FzZSAncmVnaXN0ZXInOlxuICAgICAgICByZXR1cm4gJ9eU15nXqNep150nO1xuICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICByZXR1cm4gJ9ep15zXlyDXnNeZ16DXpyDXnNeQ15nXpNeV16Eg16HXmdeh157XkCc7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmICF0aGlzLmlzU3VibWl0RGlzYWJsZWQoKSkge1xuICAgICAgdGhpcy5oYW5kbGVTdWJtaXRDbGljaygpO1xuICAgIH1cbiAgfSxcblxuICBzaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkKCkge1xuICAgIHRoaXMucHJvcHMuc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZCh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgfSxcblxuICBpc1N1Ym1pdERpc2FibGVkKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hdXRoTW9kZSkge1xuICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICByZXR1cm4gXy5pc0VtcHR5KHRoaXMuc3RhdGUuZW1haWwpIHx8IF8uaXNFbXB0eSh0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgcmV0dXJuIF8uaXNFbXB0eSh0aGlzLnN0YXRlLmVtYWlsKSB8fCBfLmlzRW1wdHkodGhpcy5zdGF0ZS5wYXNzd29yZCkgfHwgXy5pc0VtcHR5KHRoaXMuc3RhdGUucGFzc3dvcmRBZ2Fpbik7XG4gICAgICBjYXNlICdmb3Jnb3RQYXNzd29yZCc6XG4gICAgICAgIHJldHVybiBfLmlzRW1wdHkodGhpcy5zdGF0ZS5lbWFpbCk7XG4gICAgfVxuICB9LFxuXG4gIGdvVG9Mb2dpbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0aE1vZGU6ICdsb2dpbicgfSk7XG4gIH0sXG5cbiAgZ29Ub1JlZ2lzdGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRoTW9kZTogJ3JlZ2lzdGVyJyB9KTtcbiAgfSxcblxuICBnb1RvRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGhNb2RlOiAnZm9yZ290UGFzc3dvcmQnIH0pO1xuICB9LFxuXG4gIGhhbmRsZUxvZ2luKCkge1xuICAgIHRoaXMucHJvcHMubG9naW5XaXRoRW1haWwodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gIH0sXG5cbiAgaGFuZGxlUmVnaXN0ZXIoKSB7XG4gICAgaWYgKF8uaXNFcXVhbCh0aGlzLnN0YXRlLnBhc3N3b3JkLCB0aGlzLnN0YXRlLnBhc3N3b3JkQWdhaW4pKSB7XG4gICAgICB0aGlzLnByb3BzLnNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMucmVwb3J0RXJyb3IoY29uc3RhbnRzLkVSUk9SUy5OT1RfU0FNRV9QQVNTV09SRCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUZvcmdvdFBhc3N3b3JkKCkge1xuICAgIHRoaXMucHJvcHMuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCh0aGlzLnN0YXRlLmVtYWlsKTtcbiAgICB0aGlzLmdvVG9Mb2dpbigpO1xuICB9LFxuXG4gIGhhbmRsZVN1Ym1pdENsaWNrKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5hdXRoTW9kZSkge1xuICAgICAgY2FzZSAnbG9naW4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVMb2dpbigpO1xuICAgICAgY2FzZSAncmVnaXN0ZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZWdpc3RlcigpO1xuICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVGb3Jnb3RQYXNzd29yZCgpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXI6IHRlbXBsYXRlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBdXRoRm9ybSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4vYXV0aFBhZ2Uuc2NzcycsXG4gICAgJy4uL2xvZ28nXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIGNzcywgbG9nbykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2xhcmdlLTYgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCBhdXRoLWZvcm0tY29udGFpbmVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnbWVkaXVtLWNlbnRlcmVkIGxvZ28nIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQobG9nbywge1xuICAgICAgICAgICAgJ3dpZHRoJzogMTIwLFxuICAgICAgICAgICAgJ2hlaWdodCc6IDEyMFxuICAgICAgICB9KSksIF8uaW5jbHVkZXMoW1xuICAgICAgICAgICAgJ2xvZ2luJyxcbiAgICAgICAgICAgICdyZWdpc3RlcidcbiAgICAgICAgXSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdrZXknOiAnMjg4JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgICAnb25DbGljayc6IHRoaXMucHJvcHMubG9naW5XaXRoRmFjZWJvb2ssXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhY2Vib29rIGJ1dHRvbiBzcGxpdCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnRmFjZWJvb2snKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHsgJ2NsYXNzTmFtZSc6ICdmYSBmYS1mYWNlYm9vay1vZmZpY2lhbCcgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgICAnb25DbGljayc6IHRoaXMucHJvcHMubG9naW5XaXRoR29vZ2xlLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdnb29nbGUgYnV0dG9uIHNwbGl0J1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICdHb29nbGUnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtZ29vZ2xlJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2hyJywgeyAnY2xhc3NOYW1lJzogJ2hyJyB9KSkgOiBudWxsLCB0aGlzLnByb3BzLmVycm9yTXNnID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdlcnJvci1tc2cnLFxuICAgICAgICAgICAgJ2tleSc6ICdob21lUGFnZUVycm9yTXNnJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGUnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyAnY2xhc3NOYW1lJzogJ2Vycm9yLW1zZy10eHQnIH0sIHRoaXMucHJvcHMuZXJyb3JNc2cpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdvbktleURvd24nOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2F1dGgtZm9ybSdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAndHlwZSc6ICdlbWFpbCcsXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICduYW1lJzogJ2VtYWlsJyxcbiAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICfXk9eV15DXqCDXkNec16fXmNeo15XXoNeZJ1xuICAgICAgICB9KSwgXy5pbmNsdWRlcyhbXG4gICAgICAgICAgICAnbG9naW4nLFxuICAgICAgICAgICAgJ3JlZ2lzdGVyJ1xuICAgICAgICBdLCB0aGlzLnN0YXRlLmF1dGhNb2RlKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ3R5cGUnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAnbmFtZSc6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAncGxhY2Vob2xkZXInOiAn16HXmdeh157XkCcsXG4gICAgICAgICAgICAna2V5JzogJzEyMTYnXG4gICAgICAgIH0pIDogbnVsbCwgdGhpcy5zdGF0ZS5hdXRoTW9kZSA9PT0gJ3JlZ2lzdGVyJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ3R5cGUnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5wYXNzd29yZEFnYWluLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICduYW1lJzogJ3Bhc3N3b3JkQWdhaW4nLFxuICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ9ep15XXkSDXodeZ16HXnteQJyxcbiAgICAgICAgICAgICdrZXknOiAnMTQyMidcbiAgICAgICAgfSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICAgICAgICAnb25DbGljayc6IHRoaXMuaGFuZGxlU3VibWl0Q2xpY2ssXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2J1dHRvbiBzcGxpdCBzdWNjZXNzJyxcbiAgICAgICAgICAgICdkaXNhYmxlZCc6IHRoaXMuaXNTdWJtaXREaXNhYmxlZCgpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgdGhpcy5nZXRCdXR0b25MYWJlbCgpKSksIHRoaXMuc3RhdGUuYXV0aE1vZGUgPT09ICdsb2dpbicgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3JvdycsXG4gICAgICAgICAgICAna2V5JzogJzE4MjMnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtNiByZWQtbGluaycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiB0aGlzLmdvVG9SZWdpc3RlciB9LCAn15DXmdefINec15og15fXqdeR15XXnz8nKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtNiByZWQtbGluaycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiB0aGlzLmdvVG9Gb3Jnb3RQYXNzd29yZCB9LCAn16nXm9eX16og16HXmdeh157XkD8nKSkpIDogbnVsbCwgdGhpcy5zdGF0ZS5hdXRoTW9kZSAhPT0gJ2xvZ2luJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2tleSc6ICcyMTIxJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdyZWQtbGluaycsXG4gICAgICAgICAgICAnb25DbGljayc6IHRoaXMuZ29Ub0xvZ2luXG4gICAgICAgIH0sICfXm9eR16gg15nXqSDXnNeaINeX16nXkdeV158/JykpIDogbnVsbCkpO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXV0aFBhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXV0aC1mb3JtLWNvbnRhaW5lciAubG9nbyB7XFxuICBtYXJnaW46IDIwcHggYXV0byAzNXB4O1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiAxNjBweDsgfVxcblxcbi5hdXRoLWZvcm0tY29udGFpbmVyIC5hdXRoLWZvcm0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmF1dGgtZm9ybS1jb250YWluZXIgLmhyIHtcXG4gIG1hcmdpbjogMC43ZW0gYXV0byAhaW1wb3J0YW50OyB9XFxuXFxuLmF1dGgtZm9ybS1jb250YWluZXIgLnJlZC1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTRVRfQVVUSF9EQVRBLCBTSUdOX09VVCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnYmx1ZWJpcmQnO1xuXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIHVzZXJBY3Rpb25zIGZyb20gJy4vdXNlckFjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXZlbnRBY3Rpb25zIGZyb20gJy4vZXZlbnRBY3Rpb25zJztcbmltcG9ydCAqIGFzIGJvb2tpbmdBY3Rpb25zIGZyb20gJy4vYm9va2luZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbkFjdGlvbnMgZnJvbSAnLi9uYXZpZ2F0aW9uQWN0aW9ucyc7XG5cbmltcG9ydCB1cGRhdGVQaG90b1VybEZpeGVyIGZyb20gJy4uLy4uL2RhdGFGaXhlcnMvdXBkYXRlUGhvdG9VcmxGaXhlcic7XG5cbmV4cG9ydCBjb25zdCBBVVRIX0VSUk9SX0NPREVTX01BUCA9IHtcbiAgJ2F1dGgvaW52YWxpZC1lbWFpbCc6IENvbnN0YW50cy5FUlJPUlMuSU5WQUxJRF9NQUlMLFxuICAnYXV0aC93ZWFrLXBhc3N3b3JkJzogQ29uc3RhbnRzLkVSUk9SUy5XRUFLX1BBU1NXT1JELFxuICAnYXV0aC9lbWFpbC1hbHJlYWR5LWluLXVzZSc6IENvbnN0YW50cy5FUlJPUlMuRU1BSUxfSU5fVVNFLFxuICAnYXV0aC93cm9uZy1wYXNzd29yZCc6IENvbnN0YW50cy5FUlJPUlMuV1JPTkdfUEFTU1dPUkQsXG4gICdhdXRoL2FjY291bnQtZXhpc3RzLXdpdGgtZGlmZmVyZW50LWNyZWRlbnRpYWwnOiBDb25zdGFudHMuRVJST1JTLkVNQUlMX0lOX1VTRSxcbiAgJ2F1dGgvdXNlci1ub3QtZm91bmQnOiBDb25zdGFudHMuRVJST1JTLlVTRVJfTk9UX0ZPVU5EXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0QXV0aERhdGEgPSAodWlkLCBlbWFpbCwgcGhvdG9VUkwsIGlzQWRtaW4pID0+ICh7XG4gIHR5cGU6IFNFVF9BVVRIX0RBVEEsXG4gIHVpZCxcbiAgZW1haWwsXG4gIHBob3RvVVJMLFxuICBpc0FkbWluXG59KTtcblxuY29uc3QgZmV0Y2hBcHBEYXRhID0gKGRpc3BhdGNoLCB1c2VyKSA9PlxuICBjbGllbnREQi5yZWFkKCdhZG1pbnMvJyArIHVzZXIudWlkKVxuICAgIC50aGVuKGlzQWRtaW4gPT4gZGlzcGF0Y2goc2V0QXV0aERhdGEodXNlci51aWQsIHVzZXIuZW1haWwsIF8uZ2V0KHVzZXIsIFsncHJvdmlkZXJEYXRhJywgMCwgJ3Bob3RvVVJMJ10pLCAhIWlzQWRtaW4pKSlcbiAgICAudGhlbigoKSA9PiBQcm9taXNlLmFsbChbXG4gICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5mZXRjaFVzZXJzKCkpLFxuICAgICAgZGlzcGF0Y2goZXZlbnRBY3Rpb25zLmZldGNoRXZlbnRzKCkpLFxuICAgICAgZGlzcGF0Y2goYm9va2luZ0FjdGlvbnMuZmV0Y2hCb29raW5ncygpKVxuICAgIF0pKTtcblxuZXhwb3J0IGNvbnN0IHVzZXJTaWduZWRPdXQgPSAoKSA9PiAoe1xuICB0eXBlOiBTSUdOX09VVFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnNpZ25PdXQoKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJTaWduZWRPdXQoKSkpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUEFHRVMuQVVUSC52YWwpKSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhGYWNlYm9vayA9ICgpID0+ICgpID0+IGNsaWVudERCLmxvZ2luV2l0aEZhY2Vib29rKCk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhHb29nbGUgPSAoKSA9PiAoKSA9PiBjbGllbnREQi5sb2dpbldpdGhHb29nbGUoKTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIubG9naW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4odXNlciA9PiBmZXRjaEFwcERhdGEoZGlzcGF0Y2gsIHVzZXIpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlBBR0VTLkhPTUUudmFsKSkpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4odXNlciA9PiBmZXRjaEFwcERhdGEoZGlzcGF0Y2gsIHVzZXIpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlBBR0VTLkVESVRfVVNFUl9JTkZPLnZhbCkpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBlbWFpbCA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbClcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhEYXRhID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLmdldExvZ2dlZEluVXNlcigpXG4gICAgLnRoZW4odXNlciA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKVxuICAgICAgICAgIC50aGVuKCgpID0+IHVwZGF0ZVBob3RvVXJsRml4ZXIoZGlzcGF0Y2gsIGdldFN0YXRlKCkpKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvID0gZ2V0U3RhdGUoKS51c2Vyc1t1c2VyLnVpZF07XG4gICAgICAgICAgICBpZiAoXy5pc0VtcHR5KHVzZXJJbmZvKSkge1xuICAgICAgICAgICAgICBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5QQUdFUy5FRElUX1VTRVJfSU5GTy52YWwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlBBR0VTLkhPTUUudmFsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KVxuICAgIC5jYXRjaChkYkVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZGJFcnJvcik7XG4gICAgICBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpXG4gICAgfSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwiaW1wb3J0IHsgTkFWSUdBVEVfVE8gfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRlVG8gPSBwYWdlID0+ICh7XG4gIHR5cGU6IE5BVklHQVRFX1RPLFxuICBwYWdlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9uYXZpZ2F0aW9uQWN0aW9ucy5qcyIsImltcG9ydCB7IHVwZGF0ZVVzZXIgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZGlzcGF0Y2gsIHN0YXRlKSB7XG4gIGNvbnN0IHVpZCA9IHN0YXRlLmF1dGhEYXRhLnVpZDtcbiAgY29uc3QgdXNlcnMgPSBzdGF0ZS51c2VycztcblxuICBpZiAodXNlcnNbdWlkXSkge1xuICAgIHJldHVybiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVpZCwgeyBwaG90b1VSTDogc3RhdGUuYXV0aERhdGEucGhvdG9VUkwgfSkpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RhdGFGaXhlcnMvdXBkYXRlUGhvdG9VcmxGaXhlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ib29raW5nc1BhZ2UucnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXBkYXRlQm9va2luZywgY2FuY2VsQm9va2luZyB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMnO1xuXG5jb25zdCBnZXREcm9wT2ZmTWFwID0gYm9va2luZ3MgPT4gXy5jaGFpbihib29raW5ncylcbiAgLm9taXRCeShib29raW5nID0+ICEoYm9va2luZy5kcm9wT2ZmKSlcbiAgLnRyYW5zZm9ybSgoYWNjLCBib29raW5nLCB1aWQpID0+IHtcbiAgICBhY2NbYm9va2luZy5kcm9wT2ZmXVt1aWRdID0gYm9va2luZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICB9LCB7IHRsdjoge30sIG1vZGlpbjoge30gfSlcbiAgLnZhbHVlKCk7XG5cbmNvbnN0IGdldFBpY2tVcE1hcCA9IGJvb2tpbmdzID0+IF8uY2hhaW4oYm9va2luZ3MpXG4gIC5vbWl0QnkoYm9va2luZyA9PiAhKGJvb2tpbmcucGlja1VwKSlcbiAgLnRyYW5zZm9ybSgoYWNjLCBib29raW5nLCB1aWQpID0+IHtcbiAgICBhY2NbYm9va2luZy5waWNrVXBdW3VpZF0gPSBib29raW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIH0sIHsgdGx2OiB7fSwgbW9kaWluOiB7fSB9KVxuICAudmFsdWUoKTtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5ncyxcbiAgZXZlbnRzOiBzdGF0ZS5ldmVudHMsXG4gIHVzZXJzOiBzdGF0ZS51c2Vyc1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHVwZGF0ZUJvb2tpbmc6ICh1aWQsIGV2ZW50SWQsIGJvb2tpbmcpID0+IGRpc3BhdGNoKHVwZGF0ZUJvb2tpbmcodWlkLCBldmVudElkLCBib29raW5nKSksXG4gIGNhbmNlbEJvb2tpbmc6ICh1aWQsIGV2ZW50SWQpID0+IGRpc3BhdGNoKGNhbmNlbEJvb2tpbmcodWlkLCBldmVudElkKSlcbn0pO1xuXG5jbGFzcyBCb29raW5nc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZWRpdGluZ1VzZXJJZDogbnVsbCxcbiAgICAgIGV2ZW50SWQ6IF8uZmluZEtleSh0aGlzLnByb3BzLmV2ZW50cywge3N0YXR1czogJ29wZW5Gb3JNZW1iZXJzJ30pIHx8IF8uZmluZEtleSh0aGlzLnByb3BzLmV2ZW50cywge3N0YXR1czogJ29wZW5Gb3JBbGwnfSkgfHwgIF8uZmluZEtleSh0aGlzLnByb3BzLmV2ZW50cywge3N0YXR1czogJ2Nsb3NlZCd9KSAsXG4gICAgICBmaWx0ZXI6ICdQSUNLVVAnXG4gICAgfTtcbiAgfVxuXG4gIGdldFZpc2libGVCb29raW5ncygpIHtcbiAgICBjb25zdCBib29raW5nRm9yRXZlbnRNYXAgPSBfLmNoYWluKHRoaXMucHJvcHMuYm9va2luZ3MpXG4gICAgICAubWFwVmFsdWVzKHVzZXJCb29raW5ncyA9PiB1c2VyQm9va2luZ3NbdGhpcy5zdGF0ZS5ldmVudElkXSlcbiAgICAgIC5vbWl0QnkoXy5pc1VuZGVmaW5lZClcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBpY2tVcDogZ2V0UGlja1VwTWFwKGJvb2tpbmdGb3JFdmVudE1hcCksXG4gICAgICBkcm9wT2ZmOiBnZXREcm9wT2ZmTWFwKGJvb2tpbmdGb3JFdmVudE1hcClcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXIgfSk7XG4gIH1cblxuICBvbkV2ZW50SWRDaGFuZ2UoZXZlbnRJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBldmVudElkLCBmaWx0ZXI6ICdQSUNLVVAnIH0pO1xuICB9XG5cbiAgb25Cb29raW5nQ2xpY2sodWlkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRpbmdVc2VySWQ6IHVpZCB9KTtcbiAgfVxuXG4gIGdldEV2ZW50UHJpbnRUaXRsZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5ldmVudElkKSB7XG4gICAgICBjb25zdCBjdXJyZW50RXZ0ID0gdGhpcy5wcm9wcy5ldmVudHNbdGhpcy5zdGF0ZS5ldmVudElkXTtcbiAgICAgIHJldHVybiBDb25zdGFudHMuRVZFTlRTX1RZUEVTW2N1cnJlbnRFdnQudHlwZUlkXS5uYW1lICsgJyAtICcgKyBjdXJyZW50RXZ0LmRheSArICcvJyArIGN1cnJlbnRFdnQubW9udGggKyAnLycgKyBjdXJyZW50RXZ0LnllYXI7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGdldEJvb2tpbmdUaXRsZSh1aWQpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2Vyc1t1aWRdO1xuICAgIHJldHVybiB1c2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXIubGFzdE5hbWU7XG4gIH1cblxuICBnZXRCb29raW5nUGhvbmUodWlkKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlcnNbdWlkXTtcbiAgICByZXR1cm4gdXNlci5waG9uZVByZWZpeCArICctJyArIHVzZXIucGhvbmVOdW1iZXI7XG4gIH1cblxuICBnZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIHVpZCkge1xuICAgIGNvbnN0IHN1YnRpdGxlcyA9IFtdO1xuXG4gICAgaWYgKGJvb2tpbmcucGFpZFNlYXRzID4gMCkge1xuICAgICAgc3VidGl0bGVzLnB1c2goJ9ee16DXldeZ15nXnTogJyArIGJvb2tpbmcucGFpZFNlYXRzKTtcbiAgICB9XG4gICAgaWYgKGJvb2tpbmcuZXh0cmFTZWF0cyA+IDApIHtcbiAgICAgIHN1YnRpdGxlcy5wdXNoKCfXl9eTINek16LXnteZOiAnICsgYm9va2luZy5leHRyYVNlYXRzKTtcbiAgICB9XG4gICAgaWYgKGJvb2tpbmcucGlja1VwKSB7XG4gICAgICBzdWJ0aXRsZXMucHVzaCgn15TXnNeV15o6ICcgKyBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdKTtcbiAgICB9XG4gICAgaWYgKGJvb2tpbmcuZHJvcE9mZikge1xuICAgICAgc3VidGl0bGVzLnB1c2goJ9eX15bXldeoOiAnICsgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl0pO1xuICAgIH1cblxuICAgIGlmICh1aWQpIHtcbiAgICAgIHN1YnRpdGxlcy5wdXNoKCfXmNec17M6ICcgKyB0aGlzLmdldEJvb2tpbmdQaG9uZSh1aWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VidGl0bGVzO1xuICB9XG5cbiAgZ2V0Qm9va2luZ0ltYWdlKHVpZCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJzW3VpZF07XG4gICAgcmV0dXJuIHVzZXIucGhvdG9VUkwgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE4OS8xODk5OTEuc3ZnJztcbiAgfVxuXG4gIGdldFBpY2tVcENvdW50KCkge1xuICAgIGNvbnN0IHZpc2libGVCb29raW5ncyA9IHRoaXMuZ2V0VmlzaWJsZUJvb2tpbmdzKCk7XG4gICAgY29uc3QgdGx2UGlja1Vwc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAudGx2KVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IHRsdlBpY2tVcHNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHYpXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpblBpY2tVcHNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLm1vZGlpbilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5QaWNrVXBzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluKVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4gdGx2UGlja1Vwc1BhaWQgKyB0bHZQaWNrVXBzRXh0cmEgKyBtb2RpaW5QaWNrVXBzUGFpZCArIG1vZGlpblBpY2tVcHNFeHRyYTtcbiAgfVxuXG4gIGdldERyb3BPZmZDb3VudCgpIHtcbiAgICBjb25zdCB2aXNpYmxlQm9va2luZ3MgPSB0aGlzLmdldFZpc2libGVCb29raW5ncygpO1xuICAgIGNvbnN0IHRsdkRyb3BPZmZzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2KVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IHRsdkRyb3BPZmZzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluRHJvcE9mZnNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW4pXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluRHJvcE9mZnNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluKVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4gdGx2RHJvcE9mZnNQYWlkICsgdGx2RHJvcE9mZnNFeHRyYSArIG1vZGlpbkRyb3BPZmZzUGFpZCArIG1vZGlpbkRyb3BPZmZzRXh0cmE7XG4gIH1cblxuICBzdG9wRWRpdGluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ1VzZXJJZDogbnVsbCB9KTtcbiAgfVxuXG4gIHVwZGF0ZUJvb2tpbmcoYm9va2luZykge1xuICAgIHRoaXMucHJvcHMudXBkYXRlQm9va2luZyh0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQsIHRoaXMuc3RhdGUuZXZlbnRJZCwgYm9va2luZyk7XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgY2FuY2VsQm9va2luZygpIHtcbiAgICB0aGlzLnByb3BzLmNhbmNlbEJvb2tpbmcodGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkLCB0aGlzLnN0YXRlLmV2ZW50SWQpO1xuICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cblxufVxuXG5Cb29raW5nc1BhZ2UucHJvcFR5cGVzID0ge1xuICBib29raW5nczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBldmVudHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXBkYXRlQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb29raW5nc1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2xpc3RJdGVtJyxcbiAgICAnLi4vYm9va2luZ0Zvcm0vYm9va2luZ0Zvcm0nLFxuICAgICcuLi8uLi91dGlscy9jb25zdGFudHMnLFxuICAgICcuL2Jvb2tpbmdzUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBsaXN0SXRlbSwgQm9va2luZ0Zvcm0sIENvbnN0YW50cywgYm9va2luZ3NQYWdlQ3NzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxKHZpc2libGVCb29raW5ncykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnUElDS1VQJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2syKHZpc2libGVCb29raW5ncykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnRFJPUE9GRicpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTModmlzaWJsZUJvb2tpbmdzLCBlKSB7XG4gICAgICAgIHRoaXMub25FdmVudElkQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0RXZlbnQ0KHZpc2libGVCb29raW5ncywgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBldmVudEluZGV4XG4gICAgICAgIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJywgZXZlbnQuZGF5LCAnLycsIGV2ZW50Lm1vbnRoLCAnLycsIGV2ZW50LnllYXIsICcgLSAnLCBDb25zdGFudHMuRVZFTlRTX1RZUEVTW2V2ZW50LnR5cGVJZF0ubmFtZSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNSh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkJvb2tpbmdDbGljayhib29raW5nSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nNih2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAna2V5JzogJ2Jvb2tpbmctJyArIGJvb2tpbmdJbmRleCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0Qm9va2luZ0ltYWdlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s1LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazcodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHRoaXMub25Cb29raW5nQ2xpY2soYm9va2luZ0luZGV4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzgodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2tleSc6ICdib29raW5nLScgKyBib29raW5nSW5kZXgsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnaW1hZ2VTcmMnOiB0aGlzLmdldEJvb2tpbmdJbWFnZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrNy5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlTW9kaWluUGlja1VwVGx2UGlja1VwOSh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdmFyIG1vZGlpblBpY2tVcCA9IHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluO1xuICAgICAgICB2YXIgdGx2UGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHY7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAncGljay11cC1jb250YWluZXIgcm93IGhpZGUtZm9yLXByaW50JyxcbiAgICAgICAgICAgICAgICAna2V5JzogJ3BpY2stdXAtY29udGFpbmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZQaWNrVXApICE9PSAwIHx8IF8uc2l6ZShtb2RpaW5QaWNrVXApICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDUnLCB7ICdrZXknOiAncGlja1VwLWxhYmVsJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXlNec15XXmjonKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2tleSc6ICd0bHZQaWNrVXAnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eq15wg15DXkdeZ15EnKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2UGlja1VwLCByZXBlYXRCb29raW5nNi5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXApKSxcbiAgICAgICAgICAgIF8uc2l6ZShtb2RpaW5QaWNrVXApICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDYnLCB7ICdrZXknOiAnbW9kaWluUGlja1VwJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteV15PXmdei15nXnycpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5QaWNrVXAsIHJlcGVhdEJvb2tpbmc4LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCkpXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMTAodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkJvb2tpbmdDbGljayhib29raW5nSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMTEodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAna2V5JzogJ2Jvb2tpbmctJyArIGJvb2tpbmdJbmRleCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0Qm9va2luZ0ltYWdlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2sxMC5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazEyKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHRoaXMub25Cb29raW5nQ2xpY2soYm9va2luZ0luZGV4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzEzKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2tleSc6ICdib29raW5nLScgKyBib29raW5nSW5kZXgsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnaW1hZ2VTcmMnOiB0aGlzLmdldEJvb2tpbmdJbWFnZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrMTIuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlTW9kaWluRHJvcE9mZlRsdkRyb3BPZmYxNCh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdmFyIG1vZGlpbkRyb3BPZmYgPSB2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW47XG4gICAgICAgIHZhciB0bHZEcm9wT2ZmID0gdmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2Ryb3Atb2ZmLWNvbnRhaW5lciByb3cgaGlkZS1mb3ItcHJpbnQnLFxuICAgICAgICAgICAgICAgICdrZXknOiAnZHJvcC1vZmYtY29udGFpbmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCB8fCBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNScsIHsgJ2tleSc6ICdkcm9wLW9mZi1sYWJlbCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15fXlteV16g6JykpIDogbnVsbCxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g2JywgeyAna2V5JzogJ3RsdkRyb3BPZmYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eq15wg15DXkdeZ15EnKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2RHJvcE9mZiwgcmVwZWF0Qm9va2luZzExLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmKSksXG4gICAgICAgICAgICBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2tleSc6ICdtb2RpaW5Ecm9wT2ZmJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteV15PXmdei15nXnycpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5Ecm9wT2ZmLCByZXBlYXRCb29raW5nMTMuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYpKVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25TdWJtaXQxNSh2aXNpYmxlQm9va2luZ3MsIGJvb2tpbmcpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCb29raW5nKGJvb2tpbmcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJvb2tpbmdDYW5jZWwxNih2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxCb29raW5nKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xvc2UxNyh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMTgodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6IGJvb2tpbmdJbmRleCArICctdGx2LXBpY2t1cC1yb3cnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdQaG9uZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5wYWlkU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLmV4dHJhU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzE5KHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiBib29raW5nSW5kZXggKyAnLW1vZGlpbi1waWNrdXAtcm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nUGhvbmUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcucGFpZFNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5leHRyYVNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlTW9kaWluUGlja1VwVGx2UGlja1VwMjAodmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHZhciBtb2RpaW5QaWNrVXAgPSB2aXNpYmxlQm9va2luZ3MucGlja1VwLm1vZGlpbjtcbiAgICAgICAgdmFyIHRsdlBpY2tVcCA9IHZpc2libGVCb29raW5ncy5waWNrVXAudGx2O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdwaWNrVXAtdGFibGUgc2hvdy1mb3ItcHJpbnQnLFxuICAgICAgICAgICAgJ2tleSc6ICdwaWNrVXAtdGFibGUnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJywge30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJywge30sIF8uc2l6ZShtb2RpaW5QaWNrVXApICE9PSAwIHx8IF8uc2l6ZSh0bHZQaWNrVXApICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiAncGlja1VwLWxhYmVsJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHsgJ2NvbFNwYW4nOiAnNicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15TXnNeV15onKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnICgnLCB0aGlzLmdldFBpY2tVcENvdW50KCksICcpJykpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywge30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqdedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXmNec16TXldefJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXnteg15XXmdeZ150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eR16rXqdec15XXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16rXl9eg16og16LXnNeZ15QnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eq15fXoNeqINeZ16jXmdeT15QnKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZQaWNrVXApICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiAndGx2UGlja1VwJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHtcbiAgICAgICAgICAgICAgICAnY29sU3Bhbic6ICc2JyxcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3RhYmxlLXN1YidcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eq15wg15DXkdeZ15EnKSkpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKHRsdlBpY2tVcCwgcmVwZWF0Qm9va2luZzE4LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCkpLFxuICAgICAgICAgICAgXy5zaXplKG1vZGlpblBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdtb2RpaW5QaWNrVXAnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge1xuICAgICAgICAgICAgICAgICdjb2xTcGFuJzogJzYnLFxuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAndGFibGUtc3ViJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XldeT15nXoteZ158nKSkpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKG1vZGlpblBpY2tVcCwgcmVwZWF0Qm9va2luZzE5LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCkpXG4gICAgICAgIF0pKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcyMSh2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiBib29raW5nSW5kZXggKyAnLXRsdi1kcm9wb2ZmLXJvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1Bob25lKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLnBhaWRTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcuZXh0cmFTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMjIodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogYm9va2luZ0luZGV4ICsgJy1tb2RpaW4tZHJvcG9mZi1yb3cnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdQaG9uZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5wYWlkU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLmV4dHJhU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVNb2RpaW5Ecm9wT2ZmVGx2RHJvcE9mZjIzKHZpc2libGVCb29raW5ncykge1xuICAgICAgICB2YXIgbW9kaWluRHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbjtcbiAgICAgICAgdmFyIHRsdkRyb3BPZmYgPSB2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHY7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2Ryb3BPZmYtdGFibGUgc2hvdy1mb3ItcHJpbnQnLFxuICAgICAgICAgICAgJ2tleSc6ICdkcm9wT2ZmLXRhYmxlJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0YWJsZScsIHt9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aGVhZCcsIHt9LCBfLnNpemUodGx2RHJvcE9mZikgIT09IDAgfHwgXy5zaXplKG1vZGlpbkRyb3BPZmYpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiAnZHJvcE9mZi1sYWJlbCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7ICdjb2xTcGFuJzogJzYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eX15bXldeoJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCB0aGlzLmdldERyb3BPZmZDb3VudCgpLCAnKScpKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHt9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16nXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn15jXnNek15XXnycpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn157XoNeV15nXmdedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXkdeq16nXnNeV150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eq15fXoNeqINei15zXmdeUJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqteX16DXqiDXmdeo15nXk9eUJykpKSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAndGJvZHknLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfLnNpemUodGx2RHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICd0bHZEcm9wT2ZmJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHtcbiAgICAgICAgICAgICAgICAnY29sU3Bhbic6ICc2JyxcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3RhYmxlLXN1YidcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eq15wg15DXkdeZ15EnKSkpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKHRsdkRyb3BPZmYsIHJlcGVhdEJvb2tpbmcyMS5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZikpLFxuICAgICAgICAgICAgXy5zaXplKG1vZGlpbkRyb3BPZmYpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiAnbW9kaWluRHJvcE9mZicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7XG4gICAgICAgICAgICAgICAgJ2NvbFNwYW4nOiAnNicsXG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICd0YWJsZS1zdWInXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteV15PXmdei15nXnycpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAobW9kaWluRHJvcE9mZiwgcmVwZWF0Qm9va2luZzIyLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmKSlcbiAgICAgICAgXSkpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVWaXNpYmxlQm9va2luZ3MyNCgpIHtcbiAgICAgICAgdmFyIHZpc2libGVCb29raW5ncyA9IHRoaXMuZ2V0VmlzaWJsZUJvb2tpbmdzKCk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAn1r9zbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSBib29raW5ncy1wYWdlJyB9LCAhdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAna2V5JzogJ2xpc3QtdmlldycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlciBoaWRlLWZvci1wcmludCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyLXRpdGxlJyB9LCAn16jXqdeV157XmdedINec15TXodei15XXqicpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2ZpbHRlcmluZyByb3cgZXhwYW5kZWQgY29sbGFwc2UgaGlkZS1mb3ItcHJpbnQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndWwnLCB7ICdjbGFzc05hbWUnOiAnbWVudScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdQSUNLVVAnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2sxLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXlNec15XXmiAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuZ2V0UGlja1VwQ291bnQoKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ0RST1BPRkYnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2syLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXl9eW15XXqCAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuZ2V0RHJvcE9mZkNvdW50KCksICcpJykpKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTEyIGxhcmdlLTYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzZWFyY2gnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5ldmVudElkLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlMy5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcCh0aGlzLnByb3BzLmV2ZW50cywgcmVwZWF0RXZlbnQ0LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKSlcbiAgICAgICAgXSkpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g1JywgeyAnY2xhc3NOYW1lJzogJ3Nob3ctZm9yLXByaW50JyB9LCB0aGlzLmdldEV2ZW50UHJpbnRUaXRsZSgpKSwgdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdQSUNLVVAnID8gc2NvcGVNb2RpaW5QaWNrVXBUbHZQaWNrVXA5LmFwcGx5KHRoaXMsIFt2aXNpYmxlQm9va2luZ3NdKSA6IG51bGwsIHRoaXMuc3RhdGUuZmlsdGVyID09PSAnRFJPUE9GRicgPyBzY29wZU1vZGlpbkRyb3BPZmZUbHZEcm9wT2ZmMTQuYXBwbHkodGhpcywgW3Zpc2libGVCb29raW5nc10pIDogbnVsbCwgdmlzaWJsZUJvb2tpbmdzLmxlbmd0aCA9PT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmaWx0ZXItc3RhdHVzIGhpZGUtZm9yLXByaW50JyxcbiAgICAgICAgICAgICdrZXknOiAnbm8tZXZlbnRzJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYSBmYS1mcm93bi1vJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XpteY16LXqNeZ150sINec15Ag16DXntem15DXlSDXqNep15XXnteV16og157XqteQ15nXnteV16ouLi4nKSkgOiBudWxsKSA6IG51bGwsIHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm9va2luZ0Zvcm0sIHtcbiAgICAgICAgICAgICdrZXknOiAnZWRpdC11c2VyJyxcbiAgICAgICAgICAgICd0aXRsZSc6ICfXoteo15nXm9eqINeU16jXqdee15QnLFxuICAgICAgICAgICAgJ2Jvb2tpbmcnOiB0aGlzLnByb3BzLmJvb2tpbmdzW3RoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZF1bdGhpcy5zdGF0ZS5ldmVudElkXSxcbiAgICAgICAgICAgICdvblN1Ym1pdCc6IG9uU3VibWl0MTUuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpLFxuICAgICAgICAgICAgJ29uQm9va2luZ0NhbmNlbCc6IG9uQm9va2luZ0NhbmNlbDE2LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKSxcbiAgICAgICAgICAgICdzZWFzb25UaWNrZXRzJzogXy5nZXQodGhpcy5wcm9wcy51c2VycywgW1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCxcbiAgICAgICAgICAgICAgICAnc2Vhc29uVGlja2V0cydcbiAgICAgICAgICAgIF0pIHx8IDAsXG4gICAgICAgICAgICAnb25DbG9zZSc6IG9uQ2xvc2UxNy5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncylcbiAgICAgICAgfSkgOiBudWxsLCB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1BJQ0tVUCcgPyBzY29wZU1vZGlpblBpY2tVcFRsdlBpY2tVcDIwLmFwcGx5KHRoaXMsIFt2aXNpYmxlQm9va2luZ3NdKSA6IG51bGwsIHRoaXMuc3RhdGUuZmlsdGVyID09PSAnRFJPUE9GRicgPyBzY29wZU1vZGlpbkRyb3BPZmZUbHZEcm9wT2ZmMjMuYXBwbHkodGhpcywgW3Zpc2libGVCb29raW5nc10pIDogbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY29wZVZpc2libGVCb29raW5nczI0LmFwcGx5KHRoaXMsIFtdKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2tpbmdzUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2tpbmdzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9va2luZ3NQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib29raW5ncy1wYWdlIGg1IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogI0NGRDhEQztcXG4gIGNvbG9yOiAjMzc0NzRGO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5ib29raW5ncy1wYWdlIGg2IHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogI0VDRUZGMTtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4uYm9va2luZ3MtcGFnZSAudGFibGUtc3ViIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMjIyMjI7IH1cXG5cXG4uYm9va2luZ3MtcGFnZSB0YWJsZSB0Ym9keSwgLmJvb2tpbmdzLXBhZ2UgdGFibGUgdGZvb3QsIC5ib29raW5ncy1wYWdlIHRhYmxlIHRoZWFkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMjIyMjI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBVc2VyRm9ybSA9IHJlcXVpcmUoJy4vdXNlckZvcm0uanN4Jyk7XG5cbmNvbnN0IG5hdmlnYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9uYXZpZ2F0aW9uQWN0aW9ucycpO1xuY29uc3QgbmF2aWdhdGlvbkNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL25hdmlnYXRpb25Db25zdGFudHMnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdWlkOiBzdGF0ZS5hdXRoRGF0YS51aWRcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYXZpZ2F0ZVRvOiBwYWdlSWQgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhwYWdlSWQpKVxuICAgIH07XG59XG5cbmNsYXNzIEVkaXRvclVzZXJJbmZvUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgb25Gb3JtQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVUbyhuYXZpZ2F0aW9uQ29uc3RhbnRzLlBBR0VTLkhPTUUudmFsKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFVzZXJGb3JtIHVpZD17dGhpcy5wcm9wcy51aWR9IG9uQ2xvc2U9e3RoaXMub25Gb3JtQ2xvc2V9Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuRWRpdG9yVXNlckluZm9QYWdlLnByb3BUeXBlcyA9IHtcbiAgICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZVRvOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRWRpdG9yVXNlckluZm9QYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lZGl0VXNlckluZm9QYWdlLmpzeCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBQQUdFUzoge1xuICAgIEhPTUU6IHsgdmFsOiAnaG9tZScsIHZpc2libGU6IHRydWUgfSxcbiAgICBBVVRIOiB7IHZhbDogJ2F1dGgnLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgIFVTRVJTOiB7IHZhbDogJ3VzZXJzJywgdmlzaWJsZTogdHJ1ZSB9LFxuICAgIEVWRU5UUzogeyB2YWw6ICdldmVudHMnLCB2aXNpYmxlOiB0cnVlIH0sXG4gICAgQk9PS0lOR1M6IHsgdmFsOiAnYm9va2luZ3MnLCB2aXNpYmxlOiB0cnVlIH0sXG4gICAgRElTVFJJQlVUSU9OOiB7IHZhbDogJ2Rpc3RyaWJ1dGlvbicsIHZpc2libGU6IHRydWUgfSxcbiAgICBFRElUX1VTRVJfSU5GTzogeyB2YWw6ICdlZGl0VXNlckluZm8nLCB2aXNpYmxlOiBmYWxzZSB9XG4gIH0sXG4gIFRSQU5TTEFUSU9OUzoge1xuICAgIGhvbWU6ICfXk9ejINeU15HXmdeqJyxcbiAgICB1c2VyczogJ9ee16nXqtee16nXmdedJyxcbiAgICBldmVudHM6ICfXntep15fXp9eZ150nLFxuICAgIGJvb2tpbmdzOiAn16jXqdeV157XmdeqINec15TXodei15XXqicsXG4gICAgZGlzdHJpYnV0aW9uOiAn16jXqdeZ157XqiDXqtek15XXpteUJ1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Rpc3RyaWJ1dGlvblBhZ2UucnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2VuZFRlbXBsYXRlRW1haWwsIHNlbmRDdXN0b21FbWFpbCwgc2VuZFNNUyB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucyc7XG5cbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBnZXRNZW1iZXJzVXNlcnNPbmx5KHVzZXJzKSB7XG4gIHJldHVybiBfLnBpY2tCeSh1c2VycywgdXNlciA9PiB1c2VyLnNlYXNvblRpY2tldHMgJiYgdXNlci5zZWFzb25UaWNrZXRzID4gMCk7XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tlZFVzZXJzT25seSh1c2VycywgYm9va2luZ3MsIGV2ZW50SWQpIHtcbiAgcmV0dXJuIF8ucGlja0J5KHVzZXJzLCAodXNlciwgdWlkKSA9PiBfLmhhcyhib29raW5nc1t1aWRdLCBldmVudElkKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlY2lwaWVudHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZXZlbnRJZCkge1xuICBsZXQgcmVjaXBpZW50c1VzZXJzID0gXy5waWNrQnkodXNlcnMsIHVzZXIgPT4gdXNlci5zdWJzY3JpYmVNYWlsKTtcblxuICBzd2l0Y2ggKHJlY2lwaWVudHNUeXBlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuTUVNQkVSU19PTkxZLnZhbHVlOlxuICAgICAgcmVjaXBpZW50c1VzZXJzID0gZ2V0TWVtYmVyc1VzZXJzT25seShyZWNpcGllbnRzVXNlcnMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQk9PS0VEX1RPX0VWRU5ULnZhbHVlOlxuICAgICAgcmVjaXBpZW50c1VzZXJzID0gZ2V0Qm9va2VkVXNlcnNPbmx5KHJlY2lwaWVudHNVc2VycywgYm9va2luZ3MsIGV2ZW50SWQpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVjaXBpZW50c1VzZXJzO1xufVxuXG5mdW5jdGlvbiBnZXRVc2Vyc0VtYWlscyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBldmVudElkKSB7XG4gIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRSZWNpcGllbnRzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGV2ZW50SWQpO1xuICByZXR1cm4gXy5tYXAocmVjaXBpZW50cywgdXNlciA9PiB1c2VyLmVtYWlsKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcnNQaG9uZU51bWJlcnModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZXZlbnRJZCkge1xuICBjb25zdCByZWNpcGllbnRzID0gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBldmVudElkKTtcbiAgcmV0dXJuIF8ubWFwKHJlY2lwaWVudHMsIHVzZXIgPT4gdXNlci5waG9uZVByZWZpeCArIHVzZXIucGhvbmVOdW1iZXIpO1xufVxuXG5jb25zdCBnZXRFdmVudFN1YnN0aXR1dGlvbnMgPSBldmVudCA9PiAoe1xuICAnLURFUEFSVFVSRS0nOiBgJHtldmVudC5ob3VyfToke2V2ZW50Lm1pbnV0ZX1gLFxuICAnLURBVEUtJzogYCR7ZXZlbnQuZGF5fS8ke2V2ZW50Lm1vbnRofS8ke2V2ZW50LnllYXJ9YCxcbiAgJy1OQU1FLSc6IENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lXG59KTtcblxuY29uc3QgcHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCA9IGNvbnRlbnQgPT4gJzxwIGRpcj1cXCdydGxcXCc+JyArIGNvbnRlbnQucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICc8YnIvPicpICsgJzwvcD4nO1xuXG5jb25zdCBnZXRJbml0aWFsU3RhdGUgPSBldmVudHMgPT4gKHtcbiAgZGlzdHJpYnV0aW9uTWV0aG9kOiAnZW1haWwnLFxuICByZWNpcGllbnRzVHlwZTogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS52YWx1ZSxcbiAgZGlzdHJpYnV0aW9uVHlwZTogJ3RlbXBsYXRlJyxcbiAgZXZlbnRJZDogXy5sYXN0KF8ua2V5cyhldmVudHMpKSxcbiAgdGVtcGxhdGVJZDogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMuRVZFTlRfT1BFTl9GT1JfTUVNQkVSUy5pZCxcbiAgc3ViamVjdDogJycsXG4gIGNvbnRlbnQ6ICcnXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZXZlbnRzOiBzdGF0ZS5ldmVudHMsXG4gIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5ncyxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgc2VuZFRlbXBsYXRlRW1haWw6IChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSA9PiBkaXNwYXRjaChzZW5kVGVtcGxhdGVFbWFpbChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSksXG4gIHNlbmRDdXN0b21FbWFpbDogKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpID0+IGRpc3BhdGNoKHNlbmRDdXN0b21FbWFpbChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSksXG4gIHNlbmRTTVM6IChyZWNpcGllbnRzLCBtZXNzYWdlKSA9PiBkaXNwYXRjaChzZW5kU01TKHJlY2lwaWVudHMsIG1lc3NhZ2UpKSxcbn0pO1xuXG5jbGFzcyBEaXN0cmlidXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKHRoaXMuZ2V0T3BlbkV2ZW50cygpKTtcbiAgfVxuXG4gIGdldE9wZW5FdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ub21pdEJ5KHRoaXMucHJvcHMuZXZlbnRzLFxuICAgICAgZXZlbnQgPT4gZXZlbnQuc3RhdHVzICE9PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTLnZhbHVlICYmIGV2ZW50LnN0YXR1cyAhPT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfQUxMLnZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIG9uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzdHJpYnV0aW9uTWV0aG9kOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uUmVjaXBpZW50c1R5cGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZWNpcGllbnRzVHlwZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXN0cmlidXRpb25UeXBlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uVGVtcGxhdGVJZENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRlbXBsYXRlSWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25FdmVudENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV2ZW50SWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25TdWJqZWN0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3ViamVjdDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvbkNvbnRlbnRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGlzRGlzdHJpYnV0aW9uVHlwZVZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuRU1BSUw7XG4gIH1cblxuICBpc0V2ZW50c1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXN0cmlidXRpb25UeXBlVmlzaWJsZSgpICYmIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5URU1QTEFURTtcbiAgfVxuXG4gIGlzQ3VzdG9tVGl0bGVWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLkVNQUlMICYmXG4gICAgICB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuQ1VTVE9NO1xuICB9XG5cbiAgaXNDdXN0b21Db250ZW50VmlzaWJsZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5FTUFJTCAmJlxuICAgICAgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLkNVU1RPTVxuICAgICAgKSB8fCB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLlNNUztcbiAgfVxuXG4gIHNlbmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuRU1BSUwpIHtcbiAgICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRVc2Vyc0VtYWlscyh0aGlzLnByb3BzLnVzZXJzLCB0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLCB0aGlzLnByb3BzLmJvb2tpbmdzLCB0aGlzLnN0YXRlLmV2ZW50SWQpO1xuICAgICAgaWYgKF8uaXNFbXB0eShyZWNpcGllbnRzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLlRFTVBMQVRFKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBnZXRFdmVudFN1YnN0aXR1dGlvbnModGhpcy5wcm9wcy5ldmVudHNbdGhpcy5zdGF0ZS5ldmVudElkXSk7XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZFRlbXBsYXRlRW1haWwocmVjaXBpZW50cywgdGhpcy5zdGF0ZS50ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZEN1c3RvbUVtYWlsKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUuc3ViamVjdCwgcHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCh0aGlzLnN0YXRlLmNvbnRlbnQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjaXBpZW50cyA9IGdldFVzZXJzUGhvbmVOdW1iZXJzKHRoaXMucHJvcHMudXNlcnMsIHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsIHRoaXMucHJvcHMuYm9va2luZ3MsIHRoaXMuc3RhdGUuZXZlbnRJZCk7XG4gICAgICBpZiAoXy5pc0VtcHR5KHJlY2lwaWVudHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuc2VuZFNNUyhyZWNpcGllbnRzLCB0aGlzLnN0YXRlLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoZ2V0SW5pdGlhbFN0YXRlKHRoaXMuZ2V0T3BlbkV2ZW50cygpKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG5cbn1cblxuRGlzdHJpYnV0aW9uUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGV2ZW50czogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZW5kVGVtcGxhdGVFbWFpbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VuZEN1c3RvbUVtYWlsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZW5kU01TOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERpc3RyaWJ1dGlvblBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9kaXN0cmlidXRpb25QYWdlLnNjc3MnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIENvbnN0YW50cywgZGlzdHJpYnV0aW9uUGFnZUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBvbkNoYW5nZTEoZSkge1xuICAgICAgICB0aGlzLm9uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTIoZSkge1xuICAgICAgICB0aGlzLm9uUmVjaXBpZW50c1R5cGVDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlMyhlKSB7XG4gICAgICAgIHRoaXMub25EaXN0cmlidXRpb25UeXBlQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTQoZSkge1xuICAgICAgICB0aGlzLm9uVGVtcGxhdGVJZENoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0VGVtcGxhdGVDb25zdDUodGVtcGxhdGVDb25zdCwgdGVtcGxhdGVDb25zdEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ3RlbXBsYXRlLScgKyB0ZW1wbGF0ZUNvbnN0LmlkLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGVtcGxhdGVDb25zdC5pZFxuICAgICAgICB9LCB0ZW1wbGF0ZUNvbnN0Lm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTYoZSkge1xuICAgICAgICB0aGlzLm9uRXZlbnRDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50NyhldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV2ZW50SW5kZXhcbiAgICAgICAgfSwgQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTgoZSkge1xuICAgICAgICB0aGlzLm9uU3ViamVjdENoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2U5KGUpIHtcbiAgICAgICAgdGhpcy5vbkNvbnRlbnRDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxMCgpIHtcbiAgICAgICAgdGhpcy5zZW5kKCk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZGFzaGJvYXJkLXBhZ2UgZGlzdHJpYnV0aW9uLXBhZ2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXInIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlci10aXRsZScgfSwgJ9ep15zXmdeX16og157XmdeZ15zXmdedJykpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZGlzdHJpYnV0aW9uLWZvcm0gc21hbGwtMTEgc21hbGwtY2VudGVyZWQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqdec15cg15HXkNee16bXoteV16pcXG4gICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jywge1xuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTEuYmluZCh0aGlzKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5FTUFJTCB9LCAn15PXldeQ16gg15DXnNen15jXqNeV16DXmScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5TTVMgfSwgJ9eh157XoScpKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9ep15zXlyDXkNecXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTIuYmluZCh0aGlzKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5BTEwudmFsdWUgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcsIENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5BTEwubmFtZSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS52YWx1ZSB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQk9PS0VEX1RPX0VWRU5ULnZhbHVlIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQk9PS0VEX1RPX0VWRU5ULm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpKSkpLCB0aGlzLmlzRGlzdHJpYnV0aW9uVHlwZVZpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcsXG4gICAgICAgICAgICAna2V5JzogJ2Rpc3RyaWJ1dGlvblR5cGUnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXpteV16jXqiDXqdec15nXl9eUXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlMy5iaW5kKHRoaXMpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5URU1QTEFURSB9LCAn16rXkdeg15nXqicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuQ1VTVE9NIH0sICfXl9eV16TXqdeZJykpKSkgOiBudWxsLCB0aGlzLmlzRXZlbnRzVmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyxcbiAgICAgICAgICAgICdrZXknOiAndGVtcGxhdFBpY2tlcidcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eR15fXqCDXqteR16DXmdeqXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS50ZW1wbGF0ZUlkLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlNC5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMsIHJlcGVhdFRlbXBsYXRlQ29uc3Q1LmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkgOiBudWxsLCB0aGlzLmlzRXZlbnRzVmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnRJZCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eR15fXmdeo16og15DXmdeo15XXolxcbiAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZXZlbnRJZCxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTYuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKHRoaXMuZ2V0T3BlbkV2ZW50cygpLCByZXBlYXRFdmVudDcuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCBtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zJyB9LCB0aGlzLmlzQ3VzdG9tVGl0bGVWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2tleSc6ICdjdXN0b21TdWJqZWN0LWxhYmVsJyB9LCAn16DXldep15A6JykgOiBudWxsLCB0aGlzLmlzQ3VzdG9tVGl0bGVWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5zdWJqZWN0LFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2U4LmJpbmQodGhpcyksXG4gICAgICAgICAgICAna2V5JzogJ2N1c3RvbVN1YmplY3QnXG4gICAgICAgIH0pIDogbnVsbCwgdGhpcy5pc0N1c3RvbUNvbnRlbnRWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2tleSc6ICdjdXN0b21Db250ZW50LWxhYmVsJyB9LCAn16rXldeb1586JykgOiBudWxsLCB0aGlzLmlzQ3VzdG9tQ29udGVudFZpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge1xuICAgICAgICAgICAgJ25hbWUnOiB0cnVlLFxuICAgICAgICAgICAgJ2lkJzogdHJ1ZSxcbiAgICAgICAgICAgICdyb3dzJzogJzEwJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuY29udGVudCxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlOS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2tleSc6ICdjdXN0b21Db250ZW50J1xuICAgICAgICB9KSA6IG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnYnV0dG9uLWdyb3VwIHN0YWNrZWQgc21hbGwtY2VudGVyZWQgbGFyZ2UtNiBzbWFsbC04IG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2sxMC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdidXR0b24gc3VjY2VzcydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16nXnNeXJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLXBhcGVyLXBsYW5lJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSkpKSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpc3RyaWJ1dGlvbi1wYWdlIC5idXR0b24gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBQQVRIX01BUCA9IHtcbiAgRU1BSUxTOiB7XG4gICAgVEVNUExBVEVTOiAncGVuZGluZ0VtYWlscy90ZW1wbGF0ZXMnLFxuICAgIENVU1RPTTogJ3BlbmRpbmdFbWFpbHMvY3VzdG9tJ1xuICB9LFxuICBTTVM6ICdwZW5kaW5nU01TJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kVGVtcGxhdGVFbWFpbCA9IChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5FTUFJTFMuVEVNUExBVEVTfWAsICh7IHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZEN1c3RvbUVtYWlsID0gKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKGAke1BBVEhfTUFQLkVNQUlMUy5DVVNUT019YCwgKHsgcmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCB9KSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kU01TID0gKHRvLCBtZXNzYWdlKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5TTVN9YCwgKHsgdG8sIG1lc3NhZ2UgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Rpc3RyaWJ1dGlvbkFjdGlvbnMuanMiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IG5hdmlnYXRpb25Db25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzJyk7XG5cbmNvbnN0IG5hdmlnYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9uYXZpZ2F0aW9uQWN0aW9ucycpO1xuY29uc3QgYXV0aEFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy90b3BCYXIuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICBjb25zdCBhdXRoRGF0YSA9IHN0YXRlLmF1dGhEYXRhO1xuICAgIGNvbnN0IHVzZXJzID0gc3RhdGUudXNlcnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwaG90b1VSTDogYXV0aERhdGEucGhvdG9VUkwgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE2My8xNjM4MDQuc3ZnJyxcbiAgICAgICAgaXNBZG1pbjogYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgY3VycmVudFBhZ2U6IHN0YXRlLmN1cnJlbnRQYWdlLFxuICAgICAgICBjdXJyZW50VXNlcjogYXV0aERhdGEgJiYgdXNlcnNbYXV0aERhdGEudWlkXVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hdmlnYXRlVG86IHBhZ2VJZCA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKHBhZ2VJZCkpLFxuICAgICAgICBzaWduT3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5zaWduT3V0KCkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlclRpdGxlKGN1cnJlbnRVc2VyKSB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgICByZXR1cm4gJ9ee16nXqtee16knO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFVzZXIuZmlyc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoY3VycmVudFVzZXIsIHBob3RvVVJMLCBuYXZpZ2F0ZVRvLCBzaWduT3V0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNSBzbWFsbC0xMCBjb2x1bW4gdXNlci1pbmZvXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17cGhvdG9VUkx9IG9uQ2xpY2s9e25hdmlnYXRlVG8uYmluZCh0aGlzLCBuYXZpZ2F0aW9uQ29uc3RhbnRzLlBBR0VTLkVESVRfVVNFUl9JTkZPLnZhbCl9Lz5cbiAgICAgICAgICAgIDxzcGFuPtep15zXldedIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItbmFtZVwiPntnZXRVc2VyVGl0bGUoY3VycmVudFVzZXIpfTwvc3Bhbj48c3Bhbj4gfCA8L3NwYW4+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkaXNjb25uZWN0XCIgb25DbGljaz17c2lnbk91dH0+15TXqteg16rXpzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlKHRvZ2dsZU1lbnVWaXNpYmlsaXR5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWZvci1zbWFsbC1vbmx5IGZsb2F0LWxlZnRcIiBrZXk9XCJhZG1pbi1tZW51LWljb25cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNtYWxsLW1lbnUgYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlTWVudVZpc2liaWxpdHl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUocGFnZXMsIGN1cnJlbnRQYWdlLCBuYXZpZ2F0ZVRvLCBpc0FkbWluLCBpc01lbnVWaXNpYmxlLCB0b2dnbGVNZW51VmlzaWJpbGl0eSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVza3RvcE1lbnVJdGVtKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgaXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIGFjdGl2ZTogY3VycmVudFBhZ2UgPT09IHBhZ2UudmFsLFxuICAgICAgICAgICAgYnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgc21hbGw6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXRlbUNsYXNzZXN9IG9uQ2xpY2s9e25hdmlnYXRlVG8uYmluZCh0aGlzLCBwYWdlLnZhbCl9IGtleT17J3BhZ2UtJyArIHBhZ2UudmFsfT5cbiAgICAgICAgICAgICAgICB7IG5hdmlnYXRpb25Db25zdGFudHMuVFJBTlNMQVRJT05TW3BhZ2UudmFsXSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9iaWxlTWVudUl0ZW0ocGFnZSkge1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgYWN0aXZlOiBjdXJyZW50UGFnZSA9PT0gcGFnZS52YWwsXG4gICAgICAgICAgICBidXR0b246IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25Nb2JpbGVNZW51Q2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRlVG8ocGFnZS52YWwpO1xuICAgICAgICAgICAgdG9nZ2xlTWVudVZpc2liaWxpdHkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpdGVtQ2xhc3Nlc30gb25DbGljaz17b25Nb2JpbGVNZW51Q2xpY2tlZH0ga2V5PXsncGFnZS0nICsgcGFnZS52YWx9PlxuICAgICAgICAgICAgICAgIHsgbmF2aWdhdGlvbkNvbnN0YW50cy5UUkFOU0xBVElPTlNbcGFnZS52YWxdIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZXNrdG9wTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBidXR0b24tZ3JvdXAgaGlkZS1mb3Itc21hbGwtb25seVwiIGtleT1cImFkbWluLW1lbnVcIj5cbiAgICAgICAgICAgICAgICB7IF8ocGFnZXMpLnBpY2tCeSgndmlzaWJsZScpLm1hcChjcmVhdGVEZXNrdG9wTWVudUl0ZW0pLnZhbHVlKCkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9iaWxlTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBidXR0b24tZ3JvdXAgc3RhY2tlZC1mb3Itc21hbGwgc2hvdy1mb3Itc21hbGwtb25seVwiIGtleT1cImFkbWluLW1lbnUtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgeyBfKHBhZ2VzKS5waWNrQnkoJ3Zpc2libGUnKS5tYXAoY3JlYXRlTW9iaWxlTWVudUl0ZW0pLnZhbHVlKCkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNyBzbWFsbC0xMiBjb2x1bW4gdmVydGljYWwgY29sbGFwc2VkXCI+XG4gICAgICAgICAgICB7IGlzQWRtaW4gPyBjcmVhdGVEZXNrdG9wTWVudSgpIDogbnVsbCB9XG4gICAgICAgICAgICB7IGlzQWRtaW4gJiYgaXNNZW51VmlzaWJsZSA/IGNyZWF0ZU1vYmlsZU1lbnUoKSA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNNZW51VmlzaWJsZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzTWVudVZpc2libGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyIHJvdyBzbWFsbC1jb2xsYXBzZSBoaWRlLWZvci1wcmludFwiPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlSGVhZGVyKHRoaXMucHJvcHMuY3VycmVudFVzZXIsIHRoaXMucHJvcHMucGhvdG9VUkwsIHRoaXMucHJvcHMubmF2aWdhdGVUbywgdGhpcy5wcm9wcy5zaWduT3V0KSB9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmlzQWRtaW4gPyBjcmVhdGVTbWFsbE1lbnVGb3JNb2JpbGUodGhpcy50b2dnbGVNZW51VmlzaWJpbGl0eS5iaW5kKHRoaXMpKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgY3JlYXRlTWVudShuYXZpZ2F0aW9uQ29uc3RhbnRzLlBBR0VTLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlLCB0aGlzLnByb3BzLm5hdmlnYXRlVG8sIHRoaXMucHJvcHMuaXNBZG1pbiwgdGhpcy5zdGF0ZS5pc01lbnVWaXNpYmxlLCB0aGlzLnRvZ2dsZU1lbnVWaXNpYmlsaXR5LmJpbmQodGhpcykpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVG9wQmFyLnByb3BUeXBlcyA9IHtcbiAgICBwaG90b1VSTDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0FkbWluOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjdXJyZW50UGFnZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYXZpZ2F0ZVRvOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBzaWduT3V0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRvcEJhcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdG9wQmFyLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9wQmFyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9wQmFyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi90b3BCYXIuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3AtYmFyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XFxuICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgLnRvcC1iYXIgc3BhbiB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgLnRvcC1iYXIgLnVzZXItaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxcbiAgLnRvcC1iYXIgLnNtYWxsLW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiAjRDUwMDAwO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtOyB9XFxuICAudG9wLWJhciAubWVudSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNnJlbTsgfVxcbiAgICAudG9wLWJhciAubWVudSAuYnV0dG9uIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbi5zbWFsbCB7XFxuICAgICAgICBmb250LXNpemU6IDAuODVyZW07IH1cXG4gICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjRDMyRjJGOyB9XFxuICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbi5hY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogI0QzMkYyRjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uLmFjdGl2ZTpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAudG9wLWJhciAuYXZhdGFyIHtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnRvcC1iYXIgLmRpc2Nvbm5lY3Qge1xcbiAgICBjb2xvcjogI0Y0NDMzNjsgfVxcbiAgICAudG9wLWJhciAuZGlzY29ubmVjdDpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zaXRlIHtcXG4gIGRpcmVjdGlvbjogcnRsOyB9XFxuICAuc2l0ZSAuc3BsaXQuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbiBpIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgICBsaW5lLWhlaWdodDogMTZweDsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmZhY2Vib29rIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24uZ29vZ2xlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZDUwZjI1OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24ubGVmdC1pY29uIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgICAgIC5zaXRlIC5zcGxpdC5idXR0b24ubGVmdC1pY29uIHNwYW4ge1xcbiAgICAgICAgbGVmdDogMDsgfVxcbiAgLnNpdGUgLmVycm9yLW1zZyB7XFxuICAgIGNvbG9yOiAjZDUwZjI1O1xcbiAgICBwYWRkaW5nOiAwIDE1cHggMTVweDsgfVxcbiAgICAuc2l0ZSAuZXJyb3ItbXNnIGkge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuICAuc2l0ZSBsYWJlbCB7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIC5zaXRlIC5tb3JlLXNwYWNlIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDsgfVxcbiAgLnNpdGUgLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQ6ICNFRjUzNTA7XFxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjRDMyRjJGO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgaGVpZ2h0OiAzLjNlbTtcXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuc2l0ZSAuaGVhZGVyIC5oZWFkZXItdGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICBmbGV4OiAxOyB9XFxuICAuc2l0ZSAuYmFjay1idG4ge1xcbiAgICB3aWR0aDogMjBweDsgfVxcbiAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmxpc3QtaXRlbTpudGgtY2hpbGQoZXZlbikge1xcbiAgICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5saXN0LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUuc21hbGwtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUgbGkgYSB7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudSBsaS5hY3RpdmUgYSB7XFxuICAgICAgYmFja2dyb3VuZDogI0QzMkYyRjtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudSBsaS5hY3RpdmU6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5zZWFyY2gge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMC45MzVlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuOTM1ZW07IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgdGV4dC1pbmRlbnQ6IDMwcHg7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLnNlYXJjaC1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAxMXB4O1xcbiAgICAgIHJpZ2h0OiAyOHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgY29sb3I6ICNjYWNhY2E7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDMyRjJGO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjI1cyBlYXNlLW91dCwgY29sb3IgLjI1cyBlYXNlLW91dDtcXG4gICAgICBwYWRkaW5nOiAuODVlbTtcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICB3aWR0aDogMy41cmVtO1xcbiAgICAgIGhlaWdodDogMy41cmVtO1xcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICBib3R0b206IDFyZW07IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG4uYmlnIHtcXG4gICAgICAgIGxlZnQ6IDI3JTsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bi5zbWFsbCB7XFxuICAgICAgICB3aWR0aDogMi41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgICAgICBsZWZ0OiA1JTsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDUwMDAwOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXItc3RhdHVzIHtcXG4gICAgICBjb2xvcjogIzQyNDI0MjtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXItc3RhdHVzIGkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDsgfVxcbiAgLnNpdGUgLmJ1dHRvbi5zdWNjZXNzW2Rpc2FibGVkXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyNWEzNWEgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgZXJyb3JSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvZXJyb3JSZWR1Y2VyJztcbmltcG9ydCBsb2FkaW5nUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyJztcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy91c2Vyc1JlZHVjZXInO1xuaW1wb3J0IGV2ZW50c1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyJztcbmltcG9ydCBib29raW5nc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXInO1xuaW1wb3J0IGF1dGhEYXRhUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlcic7XG5pbXBvcnQgbmF2aWdhdGlvblJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9uYXZpZ2F0aW9uUmVkdWNlcic7XG5cbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBjdXJyZW50UGFnZTogbmF2aWdhdGlvblJlZHVjZXIsXG4gICAgYXV0aERhdGE6IGF1dGhEYXRhUmVkdWNlcixcbiAgICBlcnJvck1zZzogZXJyb3JSZWR1Y2VyLFxuICAgIGxvYWRpbmc6IGxvYWRpbmdSZWR1Y2VyLFxuICAgIHVzZXJzOiB1c2Vyc1JlZHVjZXIsXG4gICAgZXZlbnRzOiBldmVudHNSZWR1Y2VyLFxuICAgIGJvb2tpbmdzOiBib29raW5nc1JlZHVjZXJcbiAgfSk7XG5cbiAgY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShcbiAgICB0aHVua1xuICApO1xuXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgdW5kZWZpbmVkLCBtaWRkbGV3YXJlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L21ha2VTdG9yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVkdXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBSRVBPUlRfRVJST1IgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gJyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVQT1JUX0VSUk9SOlxuICAgICAgcmV0dXJuIGFjdGlvbi5tZXNzYWdlO1xuICAgIGNhc2UgU1RBUlRfTE9BRElORzpcbiAgICAgIHJldHVybiAnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2Vycm9yUmVkdWNlci5qcyIsImltcG9ydCB7IFNUQVJUX0xPQURJTkcsIFNUT1BfTE9BRElORyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGluZ1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNUQVJUX0xPQURJTkc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIFNUT1BfTE9BRElORzpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVVNFUlNfUkVDRUlWRUQsIFVTRVJfUkVNT1ZFRCwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVVNFUlNfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi51c2Vycyk7XG4gICAgY2FzZSBVU0VSX1JFTU9WRUQ6XG4gICAgICByZXR1cm4gXy5vbWl0KHN0YXRlLCBhY3Rpb24udWlkKTtcbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEVWRU5UU19SRUNFSVZFRCwgRVZFTlRfUkVNT1ZFRCwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50c1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEVWRU5UU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLmV2ZW50cyk7XG4gICAgY2FzZSBFVkVOVF9SRU1PVkVEOlxuICAgICAgcmV0dXJuIF8ub21pdChzdGF0ZSwgYWN0aW9uLmV2ZW50SWQpO1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXZlbnRzUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEJPT0tJTkdTX1JFQ0VJVkVELCBCT09LSU5HX0NBTkNFTEVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQk9PS0lOR1NfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi5ib29raW5ncyk7XG4gICAgY2FzZSBCT09LSU5HX0NBTkNFTEVEOiB7XG4gICAgICBjb25zdCBjbG9uZWRCb29raW5ncyA9IF8uY2xvbmVEZWVwKHN0YXRlKTtcbiAgICAgIGRlbGV0ZSBjbG9uZWRCb29raW5nc1thY3Rpb24udWlkXVthY3Rpb24uZXZlbnRJZF07XG4gICAgICBpZiAoXy5zaXplKGNsb25lZEJvb2tpbmdzW2FjdGlvbi51aWRdKSA9PT0gMCkge1xuICAgICAgICBkZWxldGUgY2xvbmVkQm9va2luZ3NbYWN0aW9uLnVpZF07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmVkQm9va2luZ3M7XG4gICAgfVxuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYm9va2luZ3NSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU0VUX0FVVEhfREFUQSwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aERhdGFSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQVVUSF9EQVRBOlxuICAgICAgcmV0dXJuIHsgdWlkOiBhY3Rpb24udWlkLCBlbWFpbDogYWN0aW9uLmVtYWlsLCBwaG90b1VSTDogYWN0aW9uLnBob3RvVVJMLCBpc0FkbWluOiBhY3Rpb24uaXNBZG1pbiB9O1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aERhdGFSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBOQVZJR0FURV9UTywgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gQ29uc3RhbnRzLlBBR0VTLkFVVEgudmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZpZ2F0aW9uUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTkFWSUdBVEVfVE86XG4gICAgICByZXR1cm4gYWN0aW9uLnBhZ2U7XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9uYXZpZ2F0aW9uUmVkdWNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVkdXhUaHVuaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlZHV4VGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlyZWJhc2VcIjoge1xuXHRcdFwiYXBpS2V5XCI6IFwiQUl6YVN5REVJU1YyYU1pZVBrdWVDd2xEUjhDVmc3aF9CTGEzSm9jXCIsXG5cdFx0XCJhdXRoRG9tYWluXCI6IFwiaGFwb2VsYnVzLWIyNWQ0LmZpcmViYXNlYXBwLmNvbVwiLFxuXHRcdFwiZGF0YWJhc2VVUkxcIjogXCJodHRwczovL2hhcG9lbGJ1cy1iMjVkNC5maXJlYmFzZWlvLmNvbVwiLFxuXHRcdFwic3RvcmFnZUJ1Y2tldFwiOiBcImhhcG9lbGJ1cy1iMjVkNC5hcHBzcG90LmNvbVwiXG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL2NvbmZpZy5wcm9kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=