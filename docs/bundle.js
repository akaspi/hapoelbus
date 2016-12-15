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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	var _clientDB = __webpack_require__(29);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _makeStore = __webpack_require__(85);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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
	      return (0, _makeStore.makeStore)(clientDB);
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
	
	var _authActions = __webpack_require__(66);
	
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
	    __webpack_require__(36),
	    __webpack_require__(41),
	    __webpack_require__(58),
	    __webpack_require__(62),
	    __webpack_require__(9),
	    __webpack_require__(69),
	    __webpack_require__(73),
	    __webpack_require__(75),
	    __webpack_require__(80),
	    __webpack_require__(22),
	    __webpack_require__(83)
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
	
	var _loadingActions = __webpack_require__(34);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(35);
	
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
	exports.getLoggedInUser = exports.signOut = exports.createUserWithEmailAndPassword = exports.sendPasswordResetEmail = exports.loginWithEmailAndPassword = exports.loginWithFacebook = exports.loginWithGoogle = exports.remove = exports.update = exports.push = exports.read = exports.setIn = undefined;
	
	var _config = __webpack_require__(30);
	
	var config = _interopRequireWildcard(_config);
	
	var _firebase = __webpack_require__(32);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	var _bluebird = __webpack_require__(33);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	if (_firebase2.default.apps.length === 0) {
	  _firebase2.default.initializeApp(config.firebase);
	} else {
	  _firebase2.default.initializeApp(config.firebase, 'ClientFirebase');
	}
	
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
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var config = {};
	
	if (true) {
	  config = __webpack_require__(31);
	  console.log('using production configuration');
	} else {
	  config = require('./config.dev.json');
	  console.log('using development configuration');
	}
	
	module.exports = config;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "config.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = {
		"firebase": {
			"apiKey": "AIzaSyDEISV2aMiePkueCwlDR8CVg7h_BLa3Joc",
			"authDomain": "hapoelbus-b25d4.firebaseapp.com",
			"databaseURL": "https://hapoelbus-b25d4.firebaseio.com",
			"storageBucket": "hapoelbus-b25d4.appspot.com"
		}
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = firebase;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = Promise;

/***/ },
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	var classNames = __webpack_require__(37);
	
	__webpack_require__(38);
	
	var Logo = __webpack_require__(40);
	
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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".spinner-container .overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #fff;\n  z-index: 1000; }\n  .spinner-container .overlay .spinner {\n    margin: 150px auto 0;\n    width: 110px;\n    text-align: center; }\n    .spinner-container .overlay .spinner .logo {\n      margin-bottom: 10px;\n      opacity: 0.7; }\n    .spinner-container .overlay .spinner > div {\n      width: 12px;\n      height: 12px;\n      margin: 0 2px;\n      background-color: #333;\n      opacity: 0.8;\n      border-radius: 100%;\n      display: inline-block;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n    .spinner-container .overlay .spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s; }\n    .spinner-container .overlay .spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);
	
	// exports


/***/ },
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _homePage = __webpack_require__(42);
	
	var _homePage2 = _interopRequireDefault(_homePage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _constants = __webpack_require__(22);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _bookingActions = __webpack_require__(57);
	
	var _userActions = __webpack_require__(54);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var teamsData = __webpack_require__(46);
	
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(43),
	    __webpack_require__(49),
	    __webpack_require__(51),
	    __webpack_require__(55)
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
/* 43 */
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
	
	var gamesConstants = __webpack_require__(44);
	var bookingsConstants = __webpack_require__(45);
	var teamsData = __webpack_require__(46);
	
	__webpack_require__(47);
	
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".event-item {\n  font-size: 0.9em; }\n  .event-item:first-child {\n    padding-top: 0; }\n  .event-item .groups-images .separator {\n    margin-right: 5px; }\n  .event-item .event-image {\n    border-radius: 50%;\n    background: #ffffff; }\n    .event-item .event-image.big {\n      margin-bottom: 10px;\n      width: 90px;\n      height: 90px; }\n    .event-item .event-image.small {\n      margin: 0 5px;\n      width: 40px;\n      height: 40px; }\n  .event-item .groups-names {\n    padding: 0 4em; }\n  .event-item .event-info {\n    text-align: center;\n    margin-top: 10px; }\n    .event-item .event-info.colored {\n      font-size: 1.1em;\n      font-weight: bold;\n      margin-bottom: 10px; }\n    .event-item .event-info .event-status {\n      color: #D32F2F; }\n    .event-item .event-info span {\n      margin: 0 15px; }\n  .event-item .action-buttons {\n    margin-right: auto;\n    margin-top: 5px; }\n    .event-item .action-buttons .button.small {\n      font-size: 0.75rem;\n      margin: 0 5px; }\n    .event-item .action-buttons .button i {\n      margin-right: 5px; }\n", ""]);
	
	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bookingForm = __webpack_require__(50);
	
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
/* 50 */
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
	            'disabled': !this.isFormValid()
	        }, React.createElement('div', { 'className': 'booking-form small-11 small-centered' }, React.createElement('div', { 'className': 'row' }, this.props.seasonTickets ? React.createElement('div', {
	            'className': 'small-6 columns',
	            'key': '404'
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
/* 51 */
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
	
	var userInfoConstants = __webpack_require__(52);
	var userFormTranslations = __webpack_require__(53);
	var userActions = __webpack_require__(54);
	
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
	
	var _bluebird = __webpack_require__(33);
	
	var _clientDB = __webpack_require__(29);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(34);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(35);
	
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(56);
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".home-page .events {\n  margin-top: 10px; }\n  @media screen and (max-width: 39.9375em) {\n    .home-page .events {\n      margin-top: 0px; } }\n\n.home-page .open-events {\n  margin-bottom: 25px; }\n\n.home-page .events-list h6 {\n  font-weight: bold; }\n\n.home-page .no-bookings {\n  font-size: 1.2em;\n  text-align: center;\n  color: #424242; }\n  .home-page .no-bookings i {\n    margin-right: 10px; }\n\n.home-page .event-item {\n  padding: 5px 0; }\n  @media screen and (max-width: 39.9375em) {\n    .home-page .event-item {\n      padding: 15px 0 30px 0; } }\n  .home-page .event-item:nth-child(even) {\n    background: #EEEEEE; }\n  .home-page .event-item:nth-child(odd) {\n    background: #E0E0E0; }\n", ""]);
	
	// exports


/***/ },
/* 57 */
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
	
	var _loadingActions = __webpack_require__(34);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(35);
	
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _usersPage = __webpack_require__(59);
	
	var _usersPage2 = _interopRequireDefault(_usersPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _userActions = __webpack_require__(54);
	
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(11),
	    __webpack_require__(51),
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(61);
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _authPage = __webpack_require__(63);
	
	var _authPage2 = _interopRequireDefault(_authPage);
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _reactRedux = __webpack_require__(6);
	
	var _constants = __webpack_require__(22);
	
	var constants = _interopRequireWildcard(_constants);
	
	var _authActions = __webpack_require__(66);
	
	var _errorActions = __webpack_require__(35);
	
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(64),
	    __webpack_require__(40)
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(65);
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".auth-form-container .logo {\n  margin: 20px auto 35px;\n  width: 160px;\n  height: 160px; }\n\n.auth-form-container .auth-form {\n  text-align: center; }\n\n.auth-form-container .hr {\n  margin: 0.7em auto !important; }\n\n.auth-form-container .red-link {\n  text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },
/* 66 */
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
	
	var _bluebird = __webpack_require__(33);
	
	var _constants = __webpack_require__(22);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _clientDB = __webpack_require__(29);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _userActions = __webpack_require__(54);
	
	var userActions = _interopRequireWildcard(_userActions);
	
	var _eventActions = __webpack_require__(27);
	
	var eventActions = _interopRequireWildcard(_eventActions);
	
	var _bookingActions = __webpack_require__(57);
	
	var bookingActions = _interopRequireWildcard(_bookingActions);
	
	var _loadingActions = __webpack_require__(34);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(35);
	
	var errorActions = _interopRequireWildcard(_errorActions);
	
	var _navigationActions = __webpack_require__(67);
	
	var navigationActions = _interopRequireWildcard(_navigationActions);
	
	var _updatePhotoUrlFixer = __webpack_require__(68);
	
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
/* 67 */
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
/* 68 */
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
	
	var _userActions = __webpack_require__(54);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "updatePhotoUrlFixer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _bookingsPage = __webpack_require__(70);
	
	var _bookingsPage2 = _interopRequireDefault(_bookingsPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _constants = __webpack_require__(22);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _bookingActions = __webpack_require__(57);
	
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(11),
	    __webpack_require__(49),
	    __webpack_require__(22),
	    __webpack_require__(71)
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
	    function onClose16(visibleBookings) {
	        this.stopEditing();
	    }
	    function repeatBooking17(visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex) {
	        return React.createElement('tr', { 'key': bookingIndex + '-tlv-pickup-row' }, React.createElement('td', {}, this.getBookingTitle(bookingIndex)), React.createElement('td', {}, this.getBookingPhone(bookingIndex)), React.createElement('td', {}, booking.paidSeats), React.createElement('td', {}, booking.extraSeats), React.createElement('td', {}, Constants.STATIONS[booking.pickUp]), React.createElement('td', {}, Constants.STATIONS[booking.dropOff]));
	    }
	    function repeatBooking18(visibleBookings, modiinPickUp, tlvPickUp, booking, bookingIndex) {
	        return React.createElement('tr', { 'key': bookingIndex + '-modiin-pickup-row' }, React.createElement('td', {}, this.getBookingTitle(bookingIndex)), React.createElement('td', {}, this.getBookingPhone(bookingIndex)), React.createElement('td', {}, booking.paidSeats), React.createElement('td', {}, booking.extraSeats), React.createElement('td', {}, Constants.STATIONS[booking.pickUp]), React.createElement('td', {}, Constants.STATIONS[booking.dropOff]));
	    }
	    function scopeModiinPickUpTlvPickUp19(visibleBookings) {
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
	            _.map(tlvPickUp, repeatBooking17.bind(this, visibleBookings, modiinPickUp, tlvPickUp)),
	            _.size(modiinPickUp) !== 0 ? React.createElement('tr', { 'key': 'modiinPickUp' }, React.createElement('td', {
	                'colSpan': '6',
	                'className': 'table-sub'
	            }, React.createElement('span', {}, 'מודיעין'))) : null,
	            _.map(modiinPickUp, repeatBooking18.bind(this, visibleBookings, modiinPickUp, tlvPickUp))
	        ])));
	    }
	    function repeatBooking20(visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex) {
	        return React.createElement('tr', { 'key': bookingIndex + '-tlv-dropoff-row' }, React.createElement('td', {}, this.getBookingTitle(bookingIndex)), React.createElement('td', {}, this.getBookingPhone(bookingIndex)), React.createElement('td', {}, booking.paidSeats), React.createElement('td', {}, booking.extraSeats), React.createElement('td', {}, Constants.STATIONS[booking.pickUp]), React.createElement('td', {}, Constants.STATIONS[booking.dropOff]));
	    }
	    function repeatBooking21(visibleBookings, modiinDropOff, tlvDropOff, booking, bookingIndex) {
	        return React.createElement('tr', { 'key': bookingIndex + '-modiin-dropoff-row' }, React.createElement('td', {}, this.getBookingTitle(bookingIndex)), React.createElement('td', {}, this.getBookingPhone(bookingIndex)), React.createElement('td', {}, booking.paidSeats), React.createElement('td', {}, booking.extraSeats), React.createElement('td', {}, Constants.STATIONS[booking.pickUp]), React.createElement('td', {}, Constants.STATIONS[booking.dropOff]));
	    }
	    function scopeModiinDropOffTlvDropOff22(visibleBookings) {
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
	            _.map(tlvDropOff, repeatBooking20.bind(this, visibleBookings, modiinDropOff, tlvDropOff)),
	            _.size(modiinDropOff) !== 0 ? React.createElement('tr', { 'key': 'modiinDropOff' }, React.createElement('td', {
	                'colSpan': '6',
	                'className': 'table-sub'
	            }, React.createElement('span', {}, 'מודיעין'))) : null,
	            _.map(modiinDropOff, repeatBooking21.bind(this, visibleBookings, modiinDropOff, tlvDropOff))
	        ])));
	    }
	    function scopeVisibleBookings23() {
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
	            'seasonTickets': _.get(this.props.users, [
	                this.state.editingUserId,
	                'seasonTickets'
	            ]) || 0,
	            'onClose': onClose16.bind(this, visibleBookings)
	        }) : null, this.state.filter === 'PICKUP' ? scopeModiinPickUpTlvPickUp19.apply(this, [visibleBookings]) : null, this.state.filter === 'DROPOFF' ? scopeModiinDropOffTlvDropOff22.apply(this, [visibleBookings]) : null);
	    }
	    return function () {
	        return scopeVisibleBookings23.apply(this, []);
	    };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(72);
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".bookings-page h5 {\n  font-weight: bold;\n  background: #CFD8DC;\n  color: #37474F;\n  padding: 5px;\n  margin-bottom: 0; }\n\n.bookings-page h6 {\n  padding: 5px 10px;\n  background: #ECEFF1;\n  margin-bottom: 0; }\n\n.bookings-page .table-sub {\n  font-weight: bold;\n  border-bottom: 2px solid #222222; }\n\n.bookings-page table tbody, .bookings-page table tfoot, .bookings-page table thead {\n  border: 1px solid #222222; }\n", ""]);
	
	// exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(1);
	var ReactRedux = __webpack_require__(6);
	
	var UserForm = __webpack_require__(51);
	
	var navigationActions = __webpack_require__(67);
	var navigationConstants = __webpack_require__(74);
	
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
/* 74 */
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _distributionPage = __webpack_require__(76);
	
	var _distributionPage2 = _interopRequireDefault(_distributionPage);
	
	var _reactRedux = __webpack_require__(6);
	
	var _distributionActions = __webpack_require__(79);
	
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	    __webpack_require__(1),
	    __webpack_require__(5),
	    __webpack_require__(22),
	    __webpack_require__(77)
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(78);
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".distribution-page .button i {\n  margin-right: 10px; }\n", ""]);
	
	// exports


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sendSMS = exports.sendCustomEmail = exports.sendTemplateEmail = undefined;
	
	var _clientDB = __webpack_require__(29);
	
	var clientDB = _interopRequireWildcard(_clientDB);
	
	var _loadingActions = __webpack_require__(34);
	
	var loadingActions = _interopRequireWildcard(_loadingActions);
	
	var _errorActions = __webpack_require__(35);
	
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
/* 80 */
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
	var classNames = __webpack_require__(37);
	
	var navigationConstants = __webpack_require__(74);
	
	var navigationActions = __webpack_require__(67);
	var authActions = __webpack_require__(66);
	
	__webpack_require__(81);
	
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".top-bar {\n  background: #222222;\n  color: #FFFFFF; }\n  .top-bar span {\n    cursor: default; }\n  .top-bar .user-info {\n    font-size: 0.85rem; }\n  .top-bar .small-menu {\n    background: #D50000;\n    margin-top: 0.5em;\n    margin-left: 0.5em; }\n  .top-bar .menu {\n    margin-top: 0.6rem; }\n    .top-bar .menu .button {\n      color: #FFFFFF;\n      background: none; }\n      .top-bar .menu .button.small {\n        font-size: 0.85rem; }\n      .top-bar .menu .button:hover {\n        color: #D32F2F; }\n      .top-bar .menu .button.active {\n        background: #D32F2F;\n        font-weight: bold; }\n        .top-bar .menu .button.active:hover {\n          color: #FFFFFF; }\n  .top-bar .avatar {\n    width: 2.5rem;\n    background: #fff;\n    border-radius: 50%;\n    margin: 10px;\n    cursor: pointer; }\n  .top-bar .disconnect {\n    color: #F44336; }\n    .top-bar .disconnect:hover {\n      text-decoration: underline; }\n", ""]);
	
	// exports


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(84);
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".site {\n  direction: rtl; }\n  .site .split.button {\n    width: 100%;\n    font-size: 16px;\n    line-height: 16px; }\n    .site .split.button i {\n      font-size: 20px;\n      padding-right: 10px;\n      line-height: 16px; }\n    .site .split.button.facebook {\n      background: #3b5998; }\n    .site .split.button.google {\n      background: #d50f25; }\n    .site .split.button.left-icon {\n      text-align: right; }\n      .site .split.button.left-icon span {\n        left: 0; }\n  .site .error-msg {\n    color: #d50f25;\n    padding: 0 15px 15px; }\n    .site .error-msg i {\n      margin-left: 10px; }\n  .site label {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n  .site .more-space {\n    margin-top: 25px; }\n  .site .header {\n    background: #EF5350;\n    border-bottom: 8px solid #D32F2F;\n    color: #ffffff;\n    height: 3.3em;\n    padding: 0 10px 0 10px;\n    display: flex;\n    align-items: center; }\n    .site .header .header-title {\n      font-size: 1rem;\n      font-weight: bold;\n      color: #ffffff;\n      flex: 1; }\n  .site .back-btn {\n    width: 20px; }\n  .site .dashboard-page {\n    position: relative;\n    background: #F5F5F5;\n    min-height: 100vh; }\n    .site .dashboard-page .list-item:nth-child(even) {\n      background: #EEEEEE; }\n    .site .dashboard-page .list-item:nth-child(odd) {\n      background: #E0E0E0; }\n    @media screen and (max-width: 39.9375em) {\n      .site .dashboard-page .filtering .menu.small-text {\n        font-size: 0.9em;\n        text-align: center; } }\n    .site .dashboard-page .filtering .menu li a {\n      padding: 1rem;\n      color: #D32F2F; }\n    .site .dashboard-page .filtering .menu li.active a {\n      background: #D32F2F;\n      color: #FFFFFF; }\n    .site .dashboard-page .filtering .menu li.active:hover {\n      color: #FFFFFF; }\n    .site .dashboard-page .filtering .search {\n      position: relative;\n      margin-top: 5px;\n      padding-right: 0.935em;\n      padding-left: 0.935em; }\n    .site .dashboard-page .filtering .search-input {\n      text-indent: 30px; }\n    .site .dashboard-page .filtering .search-icon {\n      position: absolute;\n      top: 11px;\n      right: 28px;\n      font-size: 0.8em;\n      color: #cacaca; }\n    .site .dashboard-page .add-btn {\n      background-color: #D32F2F;\n      box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n      cursor: pointer;\n      border-radius: 50%;\n      font-size: 1em;\n      font-weight: bold;\n      line-height: 0;\n      outline: none;\n      transition: background-color .25s ease-out, color .25s ease-out;\n      padding: .85em;\n      color: #ffffff;\n      width: 3.5rem;\n      height: 3.5rem;\n      position: fixed;\n      bottom: 1rem; }\n      .site .dashboard-page .add-btn.big {\n        left: 27%; }\n      .site .dashboard-page .add-btn.small {\n        width: 2.5rem;\n        height: 2.5rem;\n        left: 5%; }\n      .site .dashboard-page .add-btn:hover {\n        background: #D50000; }\n      .site .dashboard-page .add-btn:focus {\n        outline: none; }\n    .site .dashboard-page .filter-status {\n      color: #424242;\n      font-size: 1rem;\n      text-align: center; }\n      .site .dashboard-page .filter-status i {\n        margin-left: 5px; }\n  .site .button.success[disabled]:hover {\n    background: #25a35a !important; }\n", ""]);
	
	// exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Amit_Kaspi/_my/projects/hapoelbus/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeStore = undefined;
	
	var _redux = __webpack_require__(86);
	
	var _errorReducer = __webpack_require__(87);
	
	var _errorReducer2 = _interopRequireDefault(_errorReducer);
	
	var _loadingReducer = __webpack_require__(88);
	
	var _loadingReducer2 = _interopRequireDefault(_loadingReducer);
	
	var _usersReducer = __webpack_require__(89);
	
	var _usersReducer2 = _interopRequireDefault(_usersReducer);
	
	var _eventsReducer = __webpack_require__(90);
	
	var _eventsReducer2 = _interopRequireDefault(_eventsReducer);
	
	var _bookingsReducer = __webpack_require__(91);
	
	var _bookingsReducer2 = _interopRequireDefault(_bookingsReducer);
	
	var _authDataReducer = __webpack_require__(92);
	
	var _authDataReducer2 = _interopRequireDefault(_authDataReducer);
	
	var _navigationReducer = __webpack_require__(93);
	
	var _navigationReducer2 = _interopRequireDefault(_navigationReducer);
	
	var _reduxThunk = __webpack_require__(94);
	
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
/* 86 */
/***/ function(module, exports) {

	module.exports = Redux;

/***/ },
/* 87 */
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
/* 88 */
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
/* 89 */
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
/* 90 */
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
/* 91 */
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
/* 92 */
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
/* 93 */
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
/* 94 */
/***/ function(module, exports) {

	module.exports = ReduxThunk;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2EwNjcyZTY1NDA0ZDYzNjA2NmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb290L3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LnJ0Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2Nzcz8yMjlmIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0ucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybUZyYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzPzI1ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL2Zvcm1GcmFtZVRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2Nzcz83OTVkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2Uuc2Nzcz9jOWYwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jb25maWcucHJvZC5qc29uIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUHJvbWlzZVwiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2xvYWRpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3M/Y2FjNCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5ydCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9nYW1lQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ib29raW5nc0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdGVhbXNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3M/MmRkNCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2V2ZW50SXRlbS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXNlckluZm9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RyYW5zbGF0aW9ucy91c2VyRm9ybVRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5zY3NzPzhiNTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5zY3NzPzE0NGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnNjc3M/ODIzYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL25hdmlnYXRpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2Uuc2Nzcz9iM2Q5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lZGl0VXNlckluZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbmF2aWdhdGlvbkNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5zY3NzP2E4OGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b3BCYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuc2Nzcz9kZjFjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvbWFrZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2Vycm9yUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvbG9hZGluZ1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXZlbnRzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYm9va2luZ3NSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoRGF0YVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL25hdmlnYXRpb25SZWR1Y2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlZHV4VGh1bmtcIiJdLCJuYW1lcyI6WyJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudERCIiwiUm9vdCIsImFwcGx5IiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1hcFN0YXRlVG9Qcm9wcyIsImF1dGhEYXRhIiwic3RhdGUiLCJjdXJyZW50UGFnZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBdXRoRGF0YSIsIkFwcCIsInByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJfIiwiQ29uc3RhbnRzIiwicGlja0V2ZW50cyIsIkFMTCIsImV2ZW50Iiwic3RhdHVzIiwiRVZFTlRTX1NUQVRVUyIsIk9QRU5fRk9SX0FMTCIsInZhbHVlIiwiT1BFTl9GT1JfTUVNQkVSUyIsIkNMT1NFRCIsImdldFN0YXR1c1N1YnRpdGxlIiwiZXZlbnRTdGF0dXMiLCJmaW5kIiwibmFtZSIsImV2ZW50cyIsImNyZWF0ZUV2ZW50IiwidXBkYXRlRXZlbnQiLCJldmVudElkIiwicmVtb3ZlRXZlbnQiLCJFdmVudHNQYWdlIiwiZWRpdGluZ0V2ZW50SWQiLCJjcmVhdGVNb2RlIiwiZmlsdGVyIiwiY2hhaW4iLCJwaWNrQnkiLCJtYXAiLCJzZXRTdGF0ZSIsIkVWRU5UU19UWVBFUyIsInR5cGVJZCIsImRheSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJtaW51dGUiLCJldmVudFR5cGUiLCJzcmMiLCJzdG9wRWRpdGluZyIsIm9iamVjdCIsInJlcXVpcmUiLCJSZWFjdCIsIkxpc3RJdGVtIiwib25DbGljayIsImltYWdlU3JjIiwidGl0bGUiLCJzdWJ0aXRsZXMiLCJzdWJ0aXRsZSIsImtleSIsInN0cmluZyIsImFycmF5IiwiZW1wdHlFdmVudCIsImV2ZW50Rm9ybSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJvblN1Ym1pdCIsIm9uUmVtb3ZlRXZlbnQiLCJvbkNsb3NlIiwiaXNBZG1pbk1vZGUiLCJib29sIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZGVmYXVsdHMiLCJkYXRlSW5wdXRTdXBwb3J0ZWQiLCJ0aW1lSW5wdXRTdXBwb3J0ZWQiLCJjb21wb25lbnREaWRNb3VudCIsImNoZWNrSWZIdG1sNVN1cHBvcnRlZCIsIm9uQ2hhbmdlIiwiZSIsInZhbGlkYXRpb25UeXBlIiwidGFyZ2V0IiwidGVzdCIsImdldEV2ZW50UGljdHVyZSIsImdldCIsIkVWRU5UX0RFRkFVTFRfUElDIiwiZ2V0VGltZVZhbHVlIiwicGljayIsImpvaW4iLCJvblRpbWVDaGFuZ2UiLCJ2YWwiLCJzcGxpdCIsImdldERhdGVWYWx1ZSIsIm9uTnVtZXJpY0NoYW5nZSIsInRvTnVtYmVyIiwic3VwcG9ydGVkSW5wdXRUeXBlcyIsInRlc3RSZXN1bHQiLCJ0ZXN0U3RyaW5nIiwiZWFjaCIsImlucHV0VHlwZSIsImlucHV0IiwidHlwZSIsImlzU3VwcG9ydGVkIiwib25EYXRlQ2hhbmdlIiwib25Cb29sZWFuQ2hhbmdlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJpc0Zvcm1WYWxpZCIsIm9taXQiLCJmb3JtRnJhbWVUcmFuc2xhdGlvbnMiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVCYWNrQnV0dG9uIiwiaXNGdW5jdGlvbiIsImNyZWF0ZUFjdGlvbnNCdXR0b25zIiwiZGlzYWJsZWQiLCJvblJlbW92ZSIsImNyZWF0ZVJlbW92ZUJ1dHRvbiIsIlJFTU9WRSIsIlNVQk1JVCIsIkZvcm1GcmFtZSIsImNoaWxkcmVuIiwiRVJST1JTIiwiR0VORVJBTCIsIklOVkFMSURfTUFJTCIsIldFQUtfUEFTU1dPUkQiLCJFTUFJTF9JTl9VU0UiLCJXUk9OR19QQVNTV09SRCIsIk5PVF9TQU1FX1BBU1NXT1JEIiwiVVNFUl9OT1RfRk9VTkQiLCJEQVRFX1RJTUVfREFUQSIsImRheXMiLCJtb250aHMiLCJ5ZWFycyIsImhvdXJzIiwibWludXRlcyIsIlNUQVRJT05TIiwibW9kaWluIiwidGx2IiwiTUFYX1NFQVNPTl9USUNLRVRTIiwiTUFYX0VYVFJBX1BBU1NFTkdFUlMiLCJQSE9ORV9QUkVGSVhFUyIsIlBBR0VTIiwiSE9NRSIsInZpc2libGUiLCJBVVRIIiwiVVNFUlMiLCJFVkVOVFMiLCJCT09LSU5HUyIsIkRJU1RSSUJVVElPTiIsIkVESVRfVVNFUl9JTkZPIiwiRlVMTFlfQk9PS0VEIiwiUkVDSVBJRU5UUyIsIk1FTUJFUlNfT05MWSIsIkJPT0tFRF9UT19FVkVOVCIsIk1FVEhPRFMiLCJFTUFJTCIsIlNNUyIsIlRZUEVTIiwiVEVNUExBVEUiLCJDVVNUT00iLCJURU1QTEFURVMiLCJFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTIiwiaWQiLCJFVkVOVF9PUEVOX0ZPUl9BTEwiLCJDSEFOR0VfRVZFTlRfREVUQUlMUyIsImxvYWRpbmdBY3Rpb25zIiwiZXJyb3JBY3Rpb25zIiwiRVZFTlRfS0VZUyIsIkVWRU5UU19QQVRIIiwiZXZlbnRSZW1vdmVkIiwiZXZlbnRzUmVjZWl2ZWQiLCJmZXRjaEV2ZW50cyIsInJlYWQiLCJ0aGVuIiwic3RhcnRMb2FkaW5nIiwicHVzaCIsImNhdGNoIiwicmVwb3J0RXJyb3IiLCJmaW5hbGx5Iiwic3RvcExvYWRpbmciLCJldmVudFRvVXBkYXRlIiwidXBkYXRlIiwicmVtb3ZlIiwiU1RBUlRfTE9BRElORyIsIlNUT1BfTE9BRElORyIsIlJFUE9SVF9FUlJPUiIsIlNFVF9BVVRIX0RBVEEiLCJTSUdOX09VVCIsIlVTRVJTX1JFQ0VJVkVEIiwiVVNFUl9SRU1PVkVEIiwiRVZFTlRTX1JFQ0VJVkVEIiwiRVZFTlRfUkVNT1ZFRCIsIkJPT0tJTkdTX1JFQ0VJVkVEIiwiQk9PS0lOR19DQU5DRUxFRCIsIk5BVklHQVRFX1RPIiwiY29uZmlnIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZSIsInNldEluIiwicGF0aCIsImRhdGEiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YWJhc2UiLCJyZWYiLCJzZXQiLCJvbmNlIiwic25hcHNob3QiLCJ1bmlxdWVLZXkiLCJsb2dpbldpdGhHb29nbGUiLCJwcm92aWRlciIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJsb2dpbldpdGhGYWNlYm9vayIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwibG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiZ2V0TG9nZ2VkSW5Vc2VyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXN1bHQiLCJ1c2VyIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiUmVhY3RSZWR1eCIsImNsYXNzTmFtZXMiLCJMb2dvIiwiaXNMb2FkaW5nIiwibG9hZGluZyIsIlNwaW5uZXIiLCJvdmVybGF5Q2xhc3MiLCJvdmVybGF5IiwiaGlkZSIsImNvbm5lY3QiLCJ3aWR0aCIsIm9wYWNpdHkiLCJudW1iZXIiLCJoZWlnaHQiLCJ0ZWFtc0RhdGEiLCJwYXJzZUV2ZW50RGF0ZSIsImV2ZW50RGF0ZSIsIkRhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwiaXNGdXR1cmVFdmVudCIsIm5vdyIsInVzZXJzIiwiYm9va2luZ3MiLCJ1cGRhdGVCb29raW5nIiwidWlkIiwiYm9va2luZyIsImNhbmNlbEJvb2tpbmciLCJ1cGRhdGVVc2VyIiwiSG9tZVBhZ2UiLCJvbWl0QnkiLCJzb3J0QnkiLCJldmVudERhdGEiLCJzZWFzb25UaWNrZXRzIiwidXNlckJvb2tpbmdzIiwiaGFzIiwicGhvdG9VUkwiLCJIQVBPRUxfSkVSVVNBTEVNIiwiZ2FtZXNDb25zdGFudHMiLCJib29raW5nc0NvbnN0YW50cyIsImlzQm9va2luZ0VuYWJsZWQiLCJTVEFUVVMiLCJvd25Qcm9wcyIsImhvbWVUZWFtIiwiYXdheVRlYW0iLCJkYXRlIiwidGltZSIsImlzQm9va2luZ0FsbG93ZWQiLCJpc0Jvb2tlZCIsImhhc0luIiwiY3JlYXRlVGVhbUxvZ29zIiwiaG9tZSIsImF3YXkiLCJsb2dvIiwibGFiZWwiLCJjcmVhdGVFdmVudFRpbWVBbmREYXRlIiwiaXNPcGVuRm9yQm9va2luZyIsImNyZWF0ZUZ1bGx5Qm9va2VkTGFiZWwiLCJUUkFOU0xBVElPTlMiLCJmdWxseUJvb2tlZCIsImNyZWF0ZUJvb2tpbmdCdXR0b24iLCJvbkJvb2tpbmciLCJib29rQnV0dG9uIiwiYm9vayIsImVkaXRCb29raW5nQnV0dG9uIiwiZWRpdEJvb2tpbmciLCJjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uIiwib25DYW5jZWxCb29raW5nIiwiRXZlbnRJdGVtIiwiaXNGdWxseUJvb2tlZCIsInNoYXBlIiwiY2xvc2VkIiwib3BlbkZvck1lbWJlcnMiLCJvcGVuRm9yQWxsIiwiZW1wdHlCb29raW5nIiwicGFpZFNlYXRzIiwiZXh0cmFTZWF0cyIsInBpY2tVcCIsImRyb3BPZmYiLCJib29raW5nRm9ybSIsIm1lcmdlIiwicGlja1VwRW5hYmxlZCIsImRyb3BPZmZFbmFibGVkIiwidG9nZ2xlUGlja1VwIiwidG9nZ2xlRHJvcE9mZiIsImJvb2tpbmdUb1N1Ym1pdCIsImtleXMiLCJ1c2VySW5mb0NvbnN0YW50cyIsInVzZXJGb3JtVHJhbnNsYXRpb25zIiwidXNlckFjdGlvbnMiLCJlbXB0eVVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBob25lUHJlZml4IiwicGhvbmVOdW1iZXIiLCJzdGF0aW9uIiwic3Vic2NyaWJlU01TIiwic3Vic2NyaWJlTWFpbCIsImdldEVtcHR5VXNlckluZm8iLCJhc3NpZ24iLCJ1c2VySW5mbyIsImlzQWRtaW4iLCJhbGxvd1VzZXJSZW1vdmUiLCJyZW1vdmVVc2VyIiwiY3JlYXRlQWRtaW5TZWN0aW9uIiwib25OdW1iZXJDaGFuZ2UiLCJ0aW1lcyIsImkiLCJjcmVhdGVVc2VyTmFtZUlucHV0cyIsIm9uVGV4dENoYW5nZSIsIkZJUlNUX05BTUUiLCJMQVNUX05BTUUiLCJjcmVhdGVFbWFpbElucHV0IiwiY3JlYXRlUGhvbmVOdW1iZXJJbnB1dHMiLCJQSE9ORV9OVU1CRVIiLCJQSE9ORV9QUkVGSVgiLCJwcmVmaXgiLCJjcmVhdGVQaWNrdXBTdGF0aW9uUm93IiwicmVxdWVzdEZvck1lbWJlcnNoaXAiLCJjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQiLCJGQVZPUklURV9QSUNLVVBfU1RBVElPTiIsImNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQiLCJSRVFVRVNUX0ZPUl9NRU1CRVJTSElQIiwidW5kZWZpbmVkIiwiZGlzcGxheSIsImNyZWF0ZURpc3RyaWJ1dGlvbklucHV0cyIsIlRPR0dMRSIsIllFUyIsIk5PIiwiVXNlckZvcm0iLCJoYXNBbGxSZXF1aXJlZEluZm8iLCJyZXF1aXJlZEluZm8iLCJzb21lIiwiaXNFbXB0eSIsImhhc1ZhbGlkUGhvbmVOdW1iZXIiLCJoYXNSZXF1ZXN0Rm9yTWVtYmVyc2hpcFByb3BlcnR5Iiwib25LZXlQcmVzcyIsInBhcnNlSW50IiwiY2xvbmUiLCJiaW5kIiwiVElUTEUiLCJVU0VSX0lORk9fS0VZUyIsIlBBVEhfTUFQIiwiVVNFUlNfSU5GTyIsIlNFQVNPTl9USUNLRVRTIiwiYnVpbGRVc2VyIiwiZmV0Y2hBbGxVc2VycyIsInVzZXJSZWFkUHJvbWlzZXMiLCJhbGwiLCJ1c2Vyc0luZm8iLCJ0cmFuc2Zvcm0iLCJhY2MiLCJpbmZvIiwiZmV0Y2hTaW5nbGVVc2VyIiwidXNlcnNSZW1vdmVkIiwidXNlcnNSZWNlaXZlZCIsImZldGNoVXNlcnMiLCJnZXRTdGF0ZSIsImZldGNoUHJvbWlzZSIsInVzZXJVcGRhdGVQcm9taXNlcyIsInVzZXJSZW1vdmVQcm9taXNlcyIsInVzZXJQYXRoIiwiQk9PS0lOR19EQVRBX0tFWVMiLCJCT09LSU5HU19QQVRIIiwiZmV0Y2hVc2VyQm9va2luZ3MiLCJmZXRjaEFsbEJvb2tpbmdzIiwiYm9va2luZ3NSZWNlaXZlZCIsImJvb2tpbmdzQ2FuY2VsZWQiLCJmZXRjaEJvb2tpbmdzIiwiYm9va2luZ0RhdGEiLCJib29raW5nRGF0YVRvVXBkYXRlIiwicGlja1VzZXJzRnVuY3Rpb25zIiwiTUVNQkVSUyIsIk5PTl9NRU1CRVJTIiwiUkVRVUVTVFMiLCJVc2Vyc1BhZ2UiLCJlZGl0aW5nVXNlcklkIiwic2VhcmNoUXVlcnkiLCJzdGFydHNXaXRoIiwidmFsdWVzIiwic3VtQnkiLCJzaXplIiwiY29uc3RhbnRzIiwiZXJyb3JNc2ciLCJsb2dpbldpdGhFbWFpbCIsInNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQiLCJtc2ciLCJBdXRoRm9ybSIsInBhc3N3b3JkQWdhaW4iLCJhdXRoTW9kZSIsImlzTG9naW5Nb2RlIiwiZ2V0QnV0dG9uTGFiZWwiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImlzU3VibWl0RGlzYWJsZWQiLCJoYW5kbGVTdWJtaXRDbGljayIsImdvVG9Mb2dpbiIsImdvVG9SZWdpc3RlciIsImdvVG9Gb3Jnb3RQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiaGFuZGxlUmVnaXN0ZXIiLCJpc0VxdWFsIiwiaGFuZGxlRm9yZ290UGFzc3dvcmQiLCJldmVudEFjdGlvbnMiLCJib29raW5nQWN0aW9ucyIsIm5hdmlnYXRpb25BY3Rpb25zIiwiQVVUSF9FUlJPUl9DT0RFU19NQVAiLCJzZXRBdXRoRGF0YSIsImZldGNoQXBwRGF0YSIsInVzZXJTaWduZWRPdXQiLCJuYXZpZ2F0ZVRvIiwiZGJFcnJvciIsImNvZGUiLCJlcnJvciIsInBhZ2UiLCJnZXREcm9wT2ZmTWFwIiwiZ2V0UGlja1VwTWFwIiwiQm9va2luZ3NQYWdlIiwiZmluZEtleSIsImJvb2tpbmdGb3JFdmVudE1hcCIsIm1hcFZhbHVlcyIsImlzVW5kZWZpbmVkIiwiY3VycmVudEV2dCIsImdldEJvb2tpbmdQaG9uZSIsInZpc2libGVCb29raW5ncyIsImdldFZpc2libGVCb29raW5ncyIsInRsdlBpY2tVcHNQYWlkIiwidGx2UGlja1Vwc0V4dHJhIiwibW9kaWluUGlja1Vwc1BhaWQiLCJtb2RpaW5QaWNrVXBzRXh0cmEiLCJ0bHZEcm9wT2Zmc1BhaWQiLCJ0bHZEcm9wT2Zmc0V4dHJhIiwibW9kaWluRHJvcE9mZnNQYWlkIiwibW9kaWluRHJvcE9mZnNFeHRyYSIsIm5hdmlnYXRpb25Db25zdGFudHMiLCJwYWdlSWQiLCJFZGl0b3JVc2VySW5mb1BhZ2UiLCJvbkZvcm1DbG9zZSIsImRpc3RyaWJ1dGlvbiIsImdldE1lbWJlcnNVc2Vyc09ubHkiLCJnZXRCb29rZWRVc2Vyc09ubHkiLCJnZXRSZWNpcGllbnRzIiwicmVjaXBpZW50c1R5cGUiLCJyZWNpcGllbnRzVXNlcnMiLCJnZXRVc2Vyc0VtYWlscyIsInJlY2lwaWVudHMiLCJnZXRVc2Vyc1Bob25lTnVtYmVycyIsImdldEV2ZW50U3Vic3RpdHV0aW9ucyIsInByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQiLCJjb250ZW50IiwicmVwbGFjZSIsImRpc3RyaWJ1dGlvbk1ldGhvZCIsImRpc3RyaWJ1dGlvblR5cGUiLCJsYXN0IiwidGVtcGxhdGVJZCIsInN1YmplY3QiLCJzZW5kVGVtcGxhdGVFbWFpbCIsInN1YnN0aXR1dGlvbnMiLCJzZW5kQ3VzdG9tRW1haWwiLCJzZW5kU01TIiwiRGlzdHJpYnV0aW9uUGFnZSIsImdldE9wZW5FdmVudHMiLCJpc0Rpc3RyaWJ1dGlvblR5cGVWaXNpYmxlIiwiRU1BSUxTIiwidG8iLCJhdXRoQWN0aW9ucyIsImN1cnJlbnRVc2VyIiwiZ2V0VXNlclRpdGxlIiwiY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlIiwidG9nZ2xlTWVudVZpc2liaWxpdHkiLCJjcmVhdGVNZW51IiwicGFnZXMiLCJpc01lbnVWaXNpYmxlIiwiY3JlYXRlRGVza3RvcE1lbnVJdGVtIiwiaXRlbUNsYXNzZXMiLCJhY3RpdmUiLCJidXR0b24iLCJzbWFsbCIsImNyZWF0ZU1vYmlsZU1lbnVJdGVtIiwib25Nb2JpbGVNZW51Q2xpY2tlZCIsImNyZWF0ZURlc2t0b3BNZW51IiwiY3JlYXRlTW9iaWxlTWVudSIsIlRvcEJhciIsIm1ha2VTdG9yZSIsInJlZHVjZXJzIiwibWlkZGxld2FyZSIsImVycm9yUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsImxvYWRpbmdSZWR1Y2VyIiwidXNlcnNSZWR1Y2VyIiwiZXZlbnRzUmVkdWNlciIsImNsb25lZEJvb2tpbmdzIiwiY2xvbmVEZWVwIiwiYXV0aERhdGFSZWR1Y2VyIiwibmF2aWdhdGlvblJlZHVjZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG9CQUFTQSxNQUFULENBQWdCLGdCQUFNQyxhQUFOLGdCQUFoQixFQUEyQ0MsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUEzQyxFOzs7Ozs7OztBQ0pBLHdCOzs7Ozs7QUNBQSwyQjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOztLQUFZQyxROztBQUVaOzs7Ozs7Ozs7Ozs7S0FFTUMsSTs7Ozs7Ozs7Ozs7bUNBQ1U7QUFDWixjQUFPLDBCQUFVRCxRQUFWLENBQVA7QUFDRDs7OzhCQUNRO0FBQ1AsY0FBTyxlQUFTRSxLQUFULENBQWUsSUFBZixDQUFQO0FBQ0Q7Ozs7R0FOZ0IsZ0JBQU1DLFM7O0FBU3pCQyxR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LGNBQU94Z0IsS0FBUDtBQWRKO0FBZ0JELEU7Ozs7Ozs7Ozs7Ozs7OzttQkNsQnVCK2dCLGU7O0FBSnhCOztBQUVBLEtBQU1QLGVBQWUsSUFBckI7O0FBRWUsVUFBU08sZUFBVCxHQUE0RDtBQUFBLE9BQW5DL2dCLEtBQW1DLHVFQUEzQndnQixZQUEyQjtBQUFBLE9BQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFDekUsV0FBUUEsT0FBT3RhLElBQWY7QUFDRTtBQUNFLGNBQU8sRUFBRStKLEtBQUt1USxPQUFPdlEsR0FBZCxFQUFtQnpDLE9BQU9nVCxPQUFPaFQsS0FBakMsRUFBd0NvRCxVQUFVNFAsT0FBTzVQLFFBQXpELEVBQW1FaUUsU0FBUzJMLE9BQU8zTCxPQUFuRixFQUFQO0FBQ0Y7QUFDRSxjQUFPMEwsWUFBUDtBQUNGO0FBQ0UsY0FBT3hnQixLQUFQO0FBTko7QUFRRCxFOzs7Ozs7Ozs7Ozs7Ozs7bUJDUnVCZ2hCLGlCOztBQUx4Qjs7S0FBWXBnQixTOztBQUNaOzs7O0FBRUEsS0FBTTRmLGVBQWU1ZixVQUFVK0gsS0FBVixDQUFnQkcsSUFBaEIsQ0FBcUJ0RCxHQUExQzs7QUFFZSxVQUFTd2IsaUJBQVQsR0FBOEQ7QUFBQSxPQUFuQ2hoQixLQUFtQyx1RUFBM0J3Z0IsWUFBMkI7QUFBQSxPQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQzNFLFdBQVFBLE9BQU90YSxJQUFmO0FBQ0U7QUFDRSxjQUFPc2EsT0FBTzFFLElBQWQ7QUFDRjtBQUNFLGNBQU95RSxZQUFQO0FBQ0Y7QUFDRSxjQUFPeGdCLEtBQVA7QUFOSjtBQVFELEU7Ozs7Ozs7O0FDZEQsNkIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNhMDY3MmU2NTQwNGQ2MzYwNjZkIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9jb21wb25lbnRzL3Jvb3Qvcm9vdCc7XG5cblJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJvb3QpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9yb290LnJ0JztcbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcblxuaW1wb3J0IHsgbWFrZVN0b3JlIH0gZnJvbSAnLi4vLi4vcmVkdXgvbWFrZVN0b3JlJztcblxuY2xhc3MgUm9vdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNyZWF0ZVN0b3JlKCkge1xuICAgIHJldHVybiBtYWtlU3RvcmUoY2xpZW50REIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb290O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jvb3Qvcm9vdC5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAncmVhY3QtcmVkdXgnLFxuICAgICcuLi9hcHAvYXBwJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBSZWFjdFJlZHV4LCBBcHApIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RSZWR1eC5Qcm92aWRlciwgeyAnc3RvcmUnOiB0aGlzLmNyZWF0ZVN0b3JlKCkgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHt9KSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LnJ0XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIl9cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5ydCc7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGZldGNoQXV0aERhdGEgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhLFxuICBjdXJyZW50UGFnZTogc3RhdGUuY3VycmVudFBhZ2Vcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGZldGNoQXV0aERhdGE6ICgpID0+IGRpc3BhdGNoKGZldGNoQXV0aERhdGEoKSlcbn0pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEF1dGhEYXRhKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGZldGNoQXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICdyZWFjdC1yZWR1eCcsXG4gICAgJy4uL3NwaW5uZXInLFxuICAgICcuLi9ob21lUGFnZS9ob21lUGFnZScsXG4gICAgJy4uL3VzZXJzUGFnZS91c2Vyc1BhZ2UnLFxuICAgICcuLi9hdXRoUGFnZS9hdXRoUGFnZScsXG4gICAgJy4uL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZScsXG4gICAgJy4uL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UnLFxuICAgICcuLi9lZGl0VXNlckluZm9QYWdlJyxcbiAgICAnLi4vZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlJyxcbiAgICAnLi4vdG9wQmFyJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9hcHAuc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgUmVhY3RSZWR1eCwgc3Bpbm5lciwgSG9tZVBhZ2UsIFVzZXJzUGFnZSwgQXV0aFBhZ2UsIEV2ZW50c1BhZ2UsIEJvb2tpbmdzUGFnZSwgRWRpdFVzZXJJbmZvUGFnZSwgRGlzdHJpYnV0aW9uUGFnZSwgVG9wQmFyLCBDb25zdGFudHMsIGFwcENzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NpdGUgbGFyZ2UtNiBzbWFsbC0xMiBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChzcGlubmVyLCB7fSksICF0aGlzLnByb3BzLmF1dGhEYXRhID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2tleSc6ICdhdXRoLXBhZ2UtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnXG4gICAgICAgIH0sIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5BVVRILnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0aFBhZ2UsIHsgJ2tleSc6ICdhdXRoLXBhZ2UnIH0pIDogbnVsbCkgOiBudWxsLCB0aGlzLnByb3BzLmF1dGhEYXRhID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2tleSc6ICdhcHAtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9wQmFyLCB7fSksIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5IT01FLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSG9tZVBhZ2UsIHsgJ2tleSc6ICdob21lLXBhZ2UnIH0pIDogbnVsbCwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gQ29uc3RhbnRzLlBBR0VTLlVTRVJTLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlcnNQYWdlLCB7ICdrZXknOiAndXNlcnMtcGFnZScgfSkgOiBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSBDb25zdGFudHMuUEFHRVMuRVZFTlRTLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXZlbnRzUGFnZSwgeyAna2V5JzogJ2V2ZW50cy1wYWdlJyB9KSA6IG51bGwsIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5CT09LSU5HUy52YWwgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tpbmdzUGFnZSwgeyAna2V5JzogJ2Jvb2tpbmdzLXBhZ2UnIH0pIDogbnVsbCwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gQ29uc3RhbnRzLlBBR0VTLkRJU1RSSUJVVElPTi52YWwgPyBSZWFjdC5jcmVhdGVFbGVtZW50KERpc3RyaWJ1dGlvblBhZ2UsIHsgJ2tleSc6ICdkaXN0cmlidXRpb24tcGFnZScgfSkgOiBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSBDb25zdGFudHMuUEFHRVMuRURJVF9VU0VSX0lORk8udmFsID8gUmVhY3QuY3JlYXRlRWxlbWVudChFZGl0VXNlckluZm9QYWdlLCB7ICdrZXknOiAnZWRpdFVzZXJJbmZvUGFnZS1wYWdlJyB9KSA6IG51bGwpIDogbnVsbCk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5ydFxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZXZlbnRzUGFnZS5ydCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlRXZlbnQsIHVwZGF0ZUV2ZW50LCByZW1vdmVFdmVudCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zJztcblxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IHBpY2tFdmVudHMgPSB7XG4gIEFMTDogKCkgPT4gdHJ1ZSxcbiAgWydPUEVOJ106IGV2ZW50ID0+IGV2ZW50LnN0YXR1cyA9PT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfQUxMLnZhbHVlIHx8IGV2ZW50LnN0YXR1cyA9PT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUy52YWx1ZSxcbiAgWydDTE9TRUQnXTogZXZlbnQgPT4gZXZlbnQuc3RhdHVzID09PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5DTE9TRUQudmFsdWUsXG59O1xuXG5jb25zdCBnZXRTdGF0dXNTdWJ0aXRsZSA9IGV2ZW50ID0+IHtcbiAgY29uc3QgZXZlbnRTdGF0dXMgPSBfLmZpbmQoQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMsIHsgdmFsdWU6IGV2ZW50LnN0YXR1cyB9KTtcbiAgcmV0dXJuIGV2ZW50U3RhdHVzID8gZXZlbnRTdGF0dXMubmFtZSA6ICcnO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBldmVudHM6IHN0YXRlLmV2ZW50cyxcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgY3JlYXRlRXZlbnQ6IGV2ZW50ID0+IGRpc3BhdGNoKGNyZWF0ZUV2ZW50KGV2ZW50KSksXG4gIHVwZGF0ZUV2ZW50OiAoZXZlbnRJZCwgZXZlbnQpID0+IGRpc3BhdGNoKHVwZGF0ZUV2ZW50KGV2ZW50SWQsIGV2ZW50KSksXG4gIHJlbW92ZUV2ZW50OiAoZXZlbnRJZCkgPT4gZGlzcGF0Y2gocmVtb3ZlRXZlbnQoZXZlbnRJZCkpXG59KTtcblxuY2xhc3MgRXZlbnRzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0aW5nRXZlbnRJZDogbnVsbCxcbiAgICAgIGNyZWF0ZU1vZGU6IGZhbHNlLFxuICAgICAgZmlsdGVyOiAnT1BFTidcbiAgICB9O1xuICB9XG5cbiAgZ2V0VmlzaWJsZUV2ZW50cygpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLmV2ZW50cylcbiAgICAgIC5waWNrQnkocGlja0V2ZW50c1t0aGlzLnN0YXRlLmZpbHRlcl0pXG4gICAgICAubWFwKChldmVudCwgZXZlbnRJZCkgPT4gKHsgZXZlbnRJZCwgZXZlbnQgfSkpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGdldE9wZW5FdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KHRoaXMucHJvcHMuZXZlbnRzLCBwaWNrRXZlbnRzWydPUEVOJ10pO1xuICB9XG5cbiAgZ2V0Q2xvc2VkRXZlbnRzKCkge1xuICAgIHJldHVybiBfLnBpY2tCeSh0aGlzLnByb3BzLmV2ZW50cywgcGlja0V2ZW50c1snQ0xPU0VEJ10pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXIgfSk7XG4gIH1cblxuICBnZXRFdmVudFRpdGxlKGV2ZW50KSB7XG4gICAgcmV0dXJuIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lO1xuICB9XG5cbiAgZ2V0RXZlbnRTdWJ0aXRsZXMoZXZlbnQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ9eq15DXqNeZ15o6ICcgKyBgJHtldmVudC5kYXl9LyR7ZXZlbnQubW9udGh9LyR7ZXZlbnQueWVhcn1gLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG4gICAgICAn16nXoteUOiAnICsgIGAke2V2ZW50LmhvdXJ9OiR7ZXZlbnQubWludXRlfWAsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1jb25jYXRcbiAgICAgIGdldFN0YXR1c1N1YnRpdGxlKGV2ZW50KVxuICAgIF07XG4gIH1cblxuICBnZXRFdmVudEltYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdO1xuICAgIHJldHVybiBldmVudFR5cGUuc3JjIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMzgvMTM4Nzc2LnN2Zyc7XG4gIH1cblxuICBvbkV2ZW50Q2xpY2soZXZlbnRJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nRXZlbnRJZDogZXZlbnRJZCB9KTtcbiAgfVxuXG4gIG9uQ3JlYXRlRXZlbnRDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JlYXRlTW9kZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0b3BFZGl0aW5nKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nRXZlbnRJZDogbnVsbCwgY3JlYXRlTW9kZTogZmFsc2UgfSk7XG4gIH1cblxuICB1cGRhdGVFdmVudChldmVudCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNyZWF0ZU1vZGUpIHtcbiAgICAgIHRoaXMucHJvcHMuY3JlYXRlRXZlbnQoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUV2ZW50KHRoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWQsIGV2ZW50KTtcbiAgICB9XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoKSB7XG4gICAgdGhpcy5wcm9wcy5yZW1vdmVFdmVudCh0aGlzLnN0YXRlLmVkaXRpbmdFdmVudElkKTtcbiAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbkV2ZW50c1BhZ2UucHJvcFR5cGVzID0ge1xuICBhdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBldmVudHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3JlYXRlRXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZUV2ZW50OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZW1vdmVFdmVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFdmVudHNQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2xpc3RJdGVtJyxcbiAgICAnLi4vZXZlbnRGb3JtL2V2ZW50Rm9ybScsXG4gICAgJy4uLy4uL3V0aWxzL2NvbnN0YW50cycsXG4gICAgJy4vZXZlbnRzUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBsaXN0SXRlbSwgRXZlbnRGb3JtLCBDb25zdGFudHMsIGV2ZW50c1BhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25DbGljazEobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdBTEwnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazIobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdPUEVOJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2szKGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnQ0xPU0VEJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s0KGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykge1xuICAgICAgICB0aGlzLm9uQ3JlYXRlRXZlbnRDbGljaygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNShsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIHtcbiAgICAgICAgdGhpcy5vbkNyZWF0ZUV2ZW50Q2xpY2soKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazYobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzLCBldmVudEl0ZW0sIGV2ZW50SXRlbUluZGV4KSB7XG4gICAgICAgIHRoaXMub25FdmVudENsaWNrKGV2ZW50SXRlbS5ldmVudElkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0RXZlbnRJdGVtNyhsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMsIGV2ZW50SXRlbSwgZXZlbnRJdGVtSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0RXZlbnRUaXRsZShldmVudEl0ZW0uZXZlbnQpLFxuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJdGVtLmV2ZW50SWQsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRFdmVudFN1YnRpdGxlcyhldmVudEl0ZW0uZXZlbnQpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRFdmVudEltYWdlKGV2ZW50SXRlbS5ldmVudCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s2LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzLCBldmVudEl0ZW0sIGV2ZW50SXRlbUluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVWaXNpYmxlRXZlbnRzOChsaXN0Vmlld01vZGUpIHtcbiAgICAgICAgdmFyIHZpc2libGVFdmVudHMgPSB0aGlzLmdldFZpc2libGVFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7ICdrZXknOiAnZXZlbnRzLXZpZXcnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXkNeZ16jXldei15nXnScpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTEyIGxhcmdlLTYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VsJywgeyAnY2xhc3NOYW1lJzogJ21lbnUnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ0FMTCcgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMS5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15vXldec150gJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCBfLnNpemUodGhpcy5wcm9wcy5ldmVudHMpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ09QRU4nIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazIuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ek16rXldeXICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgXy5zaXplKHRoaXMuZ2V0T3BlbkV2ZW50cygpKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdDTE9TRUQnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazMuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eh15LXldeoICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgXy5zaXplKHRoaXMuZ2V0Q2xvc2VkRXZlbnRzKCkpLCAnKScpKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmxvYXQtbGVmdCBhZGQtYnRuIGJpZyBoaWRlLWZvci1zbWFsbC1vbmx5JyxcbiAgICAgICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s0LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKVxuICAgICAgICAgICAgfSwgJysnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmxvYXQtbGVmdCBhZGQtYnRuIHNtYWxsIHNob3ctZm9yLXNtYWxsLW9ubHknLFxuICAgICAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazUuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpXG4gICAgICAgICAgICB9LCAnKycpKSxcbiAgICAgICAgICAgIF8ubWFwKHZpc2libGVFdmVudHMsIHJlcGVhdEV2ZW50SXRlbTcuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpKSxcbiAgICAgICAgICAgIHZpc2libGVFdmVudHMubGVuZ3RoID09PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmaWx0ZXItc3RhdHVzJyxcbiAgICAgICAgICAgICAgICAna2V5JzogJzI0MzQnXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtZnJvd24tbycsXG4gICAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XpteY16LXqNeZ150sINec15Ag16DXntem15DXlSDXqNep15XXnteV16og157XqteQ15nXnteV16ouLi4nKSkgOiBudWxsXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblN1Ym1pdDkobGlzdFZpZXdNb2RlLCBldmVudCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25SZW1vdmVFdmVudDEwKGxpc3RWaWV3TW9kZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xvc2UxMShsaXN0Vmlld01vZGUpIHtcbiAgICAgICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZUxpc3RWaWV3TW9kZTEyKCkge1xuICAgICAgICB2YXIgbGlzdFZpZXdNb2RlID0gIXRoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWQgJiYgIXRoaXMuc3RhdGUuY3JlYXRlTW9kZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSBldmVudHMtcGFnZScgfSwgbGlzdFZpZXdNb2RlID8gc2NvcGVWaXNpYmxlRXZlbnRzOC5hcHBseSh0aGlzLCBbbGlzdFZpZXdNb2RlXSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnIH0sICFsaXN0Vmlld01vZGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50Rm9ybSwge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC11c2VyJyxcbiAgICAgICAgICAgICdldmVudCc6IHRoaXMucHJvcHMuZXZlbnRzW3RoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWRdLFxuICAgICAgICAgICAgJ29uU3VibWl0Jzogb25TdWJtaXQ5LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlKSxcbiAgICAgICAgICAgICdvblJlbW92ZUV2ZW50Jzogb25SZW1vdmVFdmVudDEwLmJpbmQodGhpcywgbGlzdFZpZXdNb2RlKSxcbiAgICAgICAgICAgICdpc0FkbWluTW9kZSc6IHRoaXMucHJvcHMuYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgICAgICdvbkNsb3NlJzogb25DbG9zZTExLmJpbmQodGhpcywgbGlzdFZpZXdNb2RlKVxuICAgICAgICB9KSA6IG51bGwpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlTGlzdFZpZXdNb2RlMTIuYXBwbHkodGhpcywgW10pO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvbGlzdEl0ZW0uc2NzcycpO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0gc21hbGwtMTJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17dGhpcy5wcm9wcy5pbWFnZVNyY30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10aXRsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlIGxhcmdlLXRleHQgaGlkZS1mb3ItcHJpbnRcIj57dGhpcy5wcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIHNtYWxsLTEyIHNob3ctZm9yLXNtYWxsLW9ubHlcIj57c3VidGl0bGV9PC9sYWJlbD4pfVxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLWxhcmdlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIGlubGluZSBoaWRlLWZvci1zbWFsbC1vbmx5XCI+e3N1YnRpdGxlfTwvbGFiZWw+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN1YnRpdGxlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIGltYWdlU3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RJdGVtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xpc3RJdGVtLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9saXN0SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcbiAgLmxpc3QtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LWltYWdlIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnRpdGxlLmxhcmdlLXRleHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnN1YnRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDAuODByZW07IH1cXG4gICAgICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLCAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLnNob3ctZm9yLXByaW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9saXN0SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZXZlbnRGb3JtLnJ0JztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBlbXB0eUV2ZW50ID0ge1xuICB0eXBlSWQ6ICcnLFxuICBkYXk6ICcwMScsXG4gIG1vbnRoOiAnMDEnLFxuICB5ZWFyOiAnMjAxNycsXG4gIGhvdXI6ICcxNycsXG4gIG1pbnV0ZTogJzAwJyxcbiAgc3RhdHVzOiBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5DTE9TRUQudmFsdWVcbn07XG5cbmNvbnN0IGV2ZW50Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdldmVudEZvcm0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlRXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGlzQWRtaW5Nb2RlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gXy5kZWZhdWx0cyh0aGlzLnByb3BzLmV2ZW50LCBlbXB0eUV2ZW50LCB7IGRhdGVJbnB1dFN1cHBvcnRlZDogdHJ1ZSwgdGltZUlucHV0U3VwcG9ydGVkOiB0cnVlIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2hlY2tJZkh0bWw1U3VwcG9ydGVkKCk7XG4gIH0sXG5cbiAgb25DaGFuZ2UoZSwgdmFsaWRhdGlvblR5cGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnbnVtZXJpYycpIHtcbiAgICAgIGlmICghL15bMC05XSokLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnaGVicmV3Jykge1xuICAgICAgaWYgKCEvXlvXkC3Xqlxcc10qJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGdldEV2ZW50UGljdHVyZSgpIHtcbiAgICByZXR1cm4gXy5nZXQoQ29uc3RhbnRzLkVWRU5UU19UWVBFUywgW3RoaXMuc3RhdGUudHlwZUlkLCAnc3JjJ10pIHx8IENvbnN0YW50cy5FVkVOVF9ERUZBVUxUX1BJQztcbiAgfSxcblxuICBnZXRUaW1lVmFsdWUoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5zdGF0ZSlcbiAgICAgIC5waWNrKFsnaG91cicsICdtaW51dGUnXSlcbiAgICAgIC5tYXAoKVxuICAgICAgLnZhbHVlKClcbiAgICAgIC5qb2luKCc6Jyk7XG4gIH0sXG5cbiAgb25UaW1lQ2hhbmdlKGUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9zb3J0LWNvbXBcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZS5zcGxpdCgnOicpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3VyOiB2YWxbMF0sIG1pbnV0ZTogdmFsWzFdIH0pO1xuICB9LFxuXG4gIGdldERhdGVWYWx1ZSgpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnN0YXRlKVxuICAgICAgLnBpY2soWyd5ZWFyJywgJ21vbnRoJywgJ2RheSddKVxuICAgICAgLm1hcCgpXG4gICAgICAudmFsdWUoKVxuICAgICAgLmpvaW4oJy0nKTtcbiAgfSxcblxuICBvbk51bWVyaWNDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfSxcblxuICBjaGVja0lmSHRtbDVTdXBwb3J0ZWQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydGVkSW5wdXRUeXBlcyA9IFsnZGF0ZScsICd0aW1lJ107XG4gICAgY29uc3QgdGVzdFJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHRlc3RTdHJpbmcgPSAndGVzdCEnO1xuXG4gICAgXy5lYWNoKHN1cHBvcnRlZElucHV0VHlwZXMsIChpbnB1dFR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgICBpbnB1dC52YWx1ZSA9IHRlc3RTdHJpbmc7XG4gICAgICBjb25zdCBpc1N1cHBvcnRlZCA9IGlucHV0LnZhbHVlICE9PSB0ZXN0U3RyaW5nO1xuICAgICAgdGVzdFJlc3VsdFtpbnB1dFR5cGUgKyAnSW5wdXRTdXBwb3J0ZWQnXSA9IGlzU3VwcG9ydGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh0ZXN0UmVzdWx0KTtcbiAgfSxcblxuICBvbkRhdGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCctJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHllYXI6IHZhbFswXSwgbW9udGg6IHZhbFsxXSwgZGF5OiB2YWxbMl0gfSk7XG4gIH0sXG5cbiAgb25Cb29sZWFuQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEJvb2xlYW4oZS50YXJnZXQuY2hlY2tlZCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfSxcblxuICBpc0Zvcm1WYWxpZCgpIHtcbiAgICByZXR1cm4gISEodGhpcy5zdGF0ZS50eXBlSWQpO1xuICB9LFxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGV2ZW50ID0gXy5vbWl0KHRoaXMuc3RhdGUsIFsndGltZUlucHV0U3VwcG9ydGVkJywgJ2RhdGVJbnB1dFN1cHBvcnRlZCddKTtcbiAgICB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50KTtcbiAgfSxcblxuICByZW5kZXI6IHRlbXBsYXRlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudEZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vZm9ybUZyYW1lJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9ldmVudEZvcm0uc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgRm9ybUZyYW1lLCBDb25zdGFudHMsIGV2ZW50Rm9ybUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDEoc3VwcG9ydGVkSW5wdXRzLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV2ZW50SW5kZXhcbiAgICAgICAgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBldmVudC5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFllYXIyKHN1cHBvcnRlZElucHV0cywgeWVhciwgeWVhckluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ3l5LScgKyB5ZWFySW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiAnMjAnICsgeWVhclxuICAgICAgICB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgeWVhciwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdE1vbnRoMyhzdXBwb3J0ZWRJbnB1dHMsIG1vbnRoLCBtb250aEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICdrZXknOiAnbW0tJyArIG1vbnRoSW5kZXggfSwgbW9udGgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXREYXk0KHN1cHBvcnRlZElucHV0cywgZGF5LCBkYXlJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAna2V5JzogJ2RkLScgKyBkYXlJbmRleCB9LCBkYXkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRNaW51dGU1KHN1cHBvcnRlZElucHV0cywgbWludXRlLCBtaW51dGVJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAna2V5JzogJ21pbi0nICsgbWludXRlSW5kZXggfSwgbWludXRlLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0SG91cjYoc3VwcG9ydGVkSW5wdXRzLCBob3VyLCBob3VySW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ2tleSc6ICdoaC0nICsgaG91ckluZGV4IH0sIGhvdXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudFN0YXR1czcoc3VwcG9ydGVkSW5wdXRzLCBldmVudFN0YXR1cywgZXZlbnRTdGF0dXNJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBldmVudFN0YXR1cy52YWx1ZSB9LCBldmVudFN0YXR1cy5uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVTdXBwb3J0ZWRJbnB1dHM4KCkge1xuICAgICAgICB2YXIgc3VwcG9ydGVkSW5wdXRzID0gdGhpcy5zdGF0ZS5kYXRlSW5wdXRTdXBwb3J0ZWQgJiYgdGhpcy5zdGF0ZS50aW1lSW5wdXRTdXBwb3J0ZWQ7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZXZlbnQtZm9ybSBsYXJnZS0xMSBsYXJnZS1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3JvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTkgbGFyZ2UtMTAgbGFyZ2UtY29sbGFwc2UgY29sdW1ucycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9ep150g15TXkNeZ16jXldeiXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUudHlwZUlkLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAndHlwZUlkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdzdHlsZSc6IHsgZGlzcGxheTogJ25vbmUnIH1cbiAgICAgICAgICAgIH0sICfXkdeX16gnKSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5FVkVOVFNfVFlQRVMsIHJlcGVhdEV2ZW50MS5iaW5kKHRoaXMsIHN1cHBvcnRlZElucHV0cykpXG4gICAgICAgIF0pKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmbG9hdC1sZWZ0JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2V2ZW50LXBpYycsXG4gICAgICAgICAgICAnc3JjJzogdGhpcy5nZXRFdmVudFBpY3R1cmUoKVxuICAgICAgICB9KSkpLCAhc3VwcG9ydGVkSW5wdXRzID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdyb3cgc21hbGwtZXhwYW5kZWQgc21hbGwtY2VudGVyZWQnLFxuICAgICAgICAgICAgJ2tleSc6ICd1bnN1cHBvcnRlZC1kcm9wZG93bnMnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC00IG1lZGl1bS0yIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqteQ16jXmdeaJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS55ZWFyLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAneWVhcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuREFURV9USU1FX0RBVEEueWVhcnMsIHJlcGVhdFllYXIyLmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNCBtZWRpdW0tMiBjb2x1bW5zIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5tb250aCxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ21vbnRoJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS5tb250aHMsIHJlcGVhdE1vbnRoMy5iaW5kKHRoaXMsIHN1cHBvcnRlZElucHV0cykpXG4gICAgICAgIF0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucyBtb3JlLXNwYWNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZGF5LFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnZGF5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdxcVxcbiAgICAgICAgICAgICAgICAgICAgJyxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS5kYXlzLCByZXBlYXREYXk0LmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtMyBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXoteUJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5taW51dGUsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdtaW51dGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRBVEVfVElNRV9EQVRBLm1pbnV0ZXMsIHJlcGVhdE1pbnV0ZTUuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC0zIGNvbHVtbnMgbW9yZS1zcGFjZSBlbmQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5ob3VyLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnaG91cidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuREFURV9USU1FX0RBVEEuaG91cnMsIHJlcGVhdEhvdXI2LmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpKSA6IG51bGwsIHN1cHBvcnRlZElucHV0cyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAncm93JyxcbiAgICAgICAgICAgICdrZXknOiAnc3VwcG9ydGVkLWlucHV0cydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTcgbGFyZ2UtNSBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16rXkNeo15nXmlxcbiAgICAgICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAndHlwZSc6ICdkYXRlJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuZ2V0RGF0ZVZhbHVlKCksXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uRGF0ZUNoYW5nZSxcbiAgICAgICAgICAgICdtaW4nOiAnMjAxNi0wMS0wMScsXG4gICAgICAgICAgICAnbWF4JzogJzIwMTctMTItMzEnLFxuICAgICAgICAgICAgJ25hbWUnOiAnZGF0ZSdcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTUgbGFyZ2UtMyBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXoteUXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3RpbWUnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5nZXRUaW1lVmFsdWUoKSxcbiAgICAgICAgICAgICdzdGVwJzogMzAwLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vblRpbWVDaGFuZ2VcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2xhcmdlLTQgbWVkaXVtLTEyIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICcg16HXmNeY15XXoVxcbiAgICAgICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ3N0YXR1cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuRVZFTlRTX1NUQVRVUywgcmVwZWF0RXZlbnRTdGF0dXM3LmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpKSkgOiBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUZyYW1lLCB7XG4gICAgICAgICAgICAndGl0bGUnOiAn16LXqNeZ15vXqiDXkNeZ16jXldeiJyxcbiAgICAgICAgICAgICdvblN1Ym1pdCc6IHRoaXMub25TdWJtaXQsXG4gICAgICAgICAgICAnb25SZW1vdmUnOiB0aGlzLnByb3BzLm9uUmVtb3ZlRXZlbnQsXG4gICAgICAgICAgICAnb25DbG9zZSc6IHRoaXMucHJvcHMub25DbG9zZSxcbiAgICAgICAgICAgICdkaXNhYmxlZCc6ICF0aGlzLmlzRm9ybVZhbGlkKClcbiAgICAgICAgfSwgc2NvcGVTdXBwb3J0ZWRJbnB1dHM4LmFwcGx5KHRoaXMsIFtdKSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5ydFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvZm9ybUZyYW1lLnNjc3MnKTtcblxuY29uc3QgZm9ybUZyYW1lVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zL2Zvcm1GcmFtZVRyYW5zbGF0aW9ucycpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIodGl0bGUsIG9uQ2xvc2UpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhY2tCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhY2stYnRuXCIga2V5PVwiYmFjay1idG5cIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj57dGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKG9uQ2xvc2UpID8gY3JlYXRlQmFja0J1dHRvbigpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbnNCdXR0b25zKGRpc2FibGVkLCBvblN1Ym1pdCwgb25SZW1vdmUpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvblJlbW92ZX0gY2xhc3NOYW1lPVwiYnV0dG9uIGFsZXJ0IG1vcmUtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IGZvcm1GcmFtZVRyYW5zbGF0aW9ucy5SRU1PVkUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9ucyBidXR0b24tZ3JvdXAgc3RhY2tlZCBzbWFsbC1jZW50ZXJlZCBsYXJnZS02IHNtYWxsLTggXCI+XG4gICAgICAgICAgICA8YSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e29uU3VibWl0fSBjbGFzc05hbWU9XCJidXR0b24gc3VjY2VzcyBtb3JlLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyBmb3JtRnJhbWVUcmFuc2xhdGlvbnMuU1VCTUlUIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgeyBfLmlzRnVuY3Rpb24ob25SZW1vdmUpID8gY3JlYXRlUmVtb3ZlQnV0dG9uKCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgRm9ybUZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZnJhbWVcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUhlYWRlcih0aGlzLnByb3BzLnRpdGxlLCB0aGlzLnByb3BzLm9uQ2xvc2UpIH1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQWN0aW9uc0J1dHRvbnModGhpcy5wcm9wcy5kaXNhYmxlZCwgdGhpcy5wcm9wcy5vblN1Ym1pdCwgdGhpcy5wcm9wcy5vblJlbW92ZSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuRm9ybUZyYW1lLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblN1Ym1pdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUZyYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1GcmFtZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1mcmFtZSAuY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLmZvcm0tZnJhbWUgLmFjdGlvbi1idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIC5mb3JtLWZyYW1lIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgU1VCTUlUOiAn16nXnteV16gnLFxuICBSRU1PVkU6ICfXnteX16cnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3RyYW5zbGF0aW9ucy9mb3JtRnJhbWVUcmFuc2xhdGlvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVJST1JTOiB7XG4gICAgR0VORVJBTDogJ9ep15LXmdeQ15Qg15HXntei16jXm9eqJyxcbiAgICBJTlZBTElEX01BSUw6ICfXkNeZ157XmdeZ15wg15zXkCDXqten15nXny4nLFxuICAgIFdFQUtfUEFTU1dPUkQ6ICfXlNeh15nXodee15Ag16bXqNeZ15vXlCDXnNeU15vXmdecINec16TXl9eV16ogNiDXqteV15XXmdedLicsXG4gICAgRU1BSUxfSU5fVVNFOiAn15DXmdee15nXmdecINeR16nXmdee15XXqS4g15DXoNeQINeR15fXqCDXk9eo15og15TXqteX15HXqNeV16og15DXl9eo16ouJyxcbiAgICBXUk9OR19QQVNTV09SRDogJ9eh15nXodee15Ag15zXkCDXoNeb15XXoNeULicsXG4gICAgTk9UX1NBTUVfUEFTU1dPUkQ6ICfXodeZ16HXnteQ15XXqiDXpteo15nXm9eV16og15zXlNeZ15XXqiDXlteU15XXqi4nLFxuICAgIFVTRVJfTk9UX0ZPVU5EOiAn15vXqteV15HXqiDXlNeQ15nXmdee15nXnCDXnNeQINeg157XpteQ15QuJ1xuICB9LFxuXG4gIERBVEVfVElNRV9EQVRBOiB7XG4gICAgZGF5czogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcyNScsICcyNicsICcyNycsICcyOCcsICcyOScsICczMCcsICczMSddLFxuICAgIG1vbnRoczogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddLFxuICAgIHllYXJzOiBbJzE2JywgJzE3J10sXG4gICAgaG91cnM6IFsnMDAnLCAnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnXSxcbiAgICBtaW51dGVzOiBbJzAwJywgJzA1JywgJzEwJywgJzE1JywgJzIwJywgJzI1JywgJzMwJywgJzM1JywgJzQwJywgJzQ1JywgJzUwJywgJzU1J11cbiAgfSxcblxuICBFVkVOVF9ERUZBVUxUX1BJQzogJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEyNC8xMjQxNTAuc3ZnJyxcbiAgRVZFTlRTX1RZUEVTOiB7XG4gICAgJ2hhcG9lbC10bHYnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYXBvZWx0YS5wbmcnLFxuICAgICAgbmFtZTogJ9eU16TXldei15wg16rXnCDXkNeR15nXkSdcbiAgICB9LFxuICAgICdtYWNjYWJpLXRsdic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX21hY2NhYmkucG5nJyxcbiAgICAgIG5hbWU6ICfXnteb15HXmSDXqtecINeQ15HXmdeRJ1xuICAgIH0sXG4gICAgJ2hlcnplbGl5YSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3NoYXJvbi5wbmcnLFxuICAgICAgbmFtZTogJ9eR16DXmSDXlNeo16bXnNeZ15QnXG4gICAgfSxcbiAgICAna2lyeWF0LWdhdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL0ltYWdlcy90ZWFtcy9iaWdHYXQucG5nJyxcbiAgICAgIG5hbWU6ICfXnteb15HXmSDXp9eo15nXqiDXkteqJ1xuICAgIH0sXG4gICAgJ2dpbGJvYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX0dhbGlsLnBuZycsXG4gICAgICBuYW1lOiAn15LXnNeZ15wv15LXnNeR15XXoidcbiAgICB9LFxuICAgICduYWhhcml5YSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX25haGFyaWEucG5nJyxcbiAgICAgIG5hbWU6ICfXoteZ16jXldeg15kg16DXlNeo15nXlCdcbiAgICB9LFxuICAgICdob2xvbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9hcnRpY2xlcy9sb2dvX2hoLnBuZycsXG4gICAgICBuYW1lOiAn15TXpNeV16LXnCDXl9eV15zXldefJ1xuICAgIH0sXG4gICAgJ2FzaGRvZCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2FzaGRvZC5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeQ16nXk9eV15MnXG4gICAgfSxcbiAgICAnaGFpZmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYWlmYS5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeX15nXpNeUJ1xuICAgIH0sXG4gICAgJ3Jpc2hvbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3Jpc2hvbi5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeo15DXqdeV158g15zXpteZ15XXnydcbiAgICB9LFxuICAgICdlaWxhdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2VpbGF0LnBuZycsXG4gICAgICBuYW1lOiAn15TXpNeV16LXnCDXkNeZ15zXqidcbiAgICB9LFxuICAgICdsanVibGphbmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzgvOGUvVW5pb25fb2xpbXBpamEucG5nLzE0MHB4LVVuaW9uX29saW1waWphLnBuZycsXG4gICAgICBuYW1lOiAn15zXldeR15zXmdeQ16DXlCdcbiAgICB9LFxuICAgICd2YWxlbmNpYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly9zYW12YW5yb3Nzb20uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzEwL3ZhbGVuY2lhLWJhc2tldDEtbG9nby5qcGcnLFxuICAgICAgbmFtZTogJ9eV15zXoNeh15nXlCdcbiAgICB9LFxuICAgICdrdWJhbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMC8wNC9Mb2tvbW90aXZfS3ViYW5fbG9nby5wbmcvMjAwcHgtTG9rb21vdGl2X0t1YmFuX2xvZ28ucG5nJyxcbiAgICAgIG5hbWU6ICfXnNeV16fXldee15XXmNeZ15Eg16fXldeR15DXnydcbiAgICB9LFxuICAgICdmdWVubGFicmFkYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xMy9CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnLzExMHB4LUJhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcnLFxuICAgICAgbmFtZTogJ9ek15XXkNeg15zXkdeo15PXlCdcbiAgICB9LFxuICAgICd1bG0nOiB7XG4gICAgICBzcmM6ICdodHRwOi8vbmFjaHd1Y2hzLmJidTAxLmNvbS9tb2R1bGVzL21vZF9iYnVuZXdzZmxhc2gvYXNzZXRzL2ltYWdlcy9ub2ltYWdlX3RodW1iLmpwZycsXG4gICAgICBuYW1lOiAn15DXldec150nXG4gICAgfSxcbiAgICAndmlsbmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzcvNzUvQkNfTGlldHV2b3NfUnl0YXNfbG9nby5zdmcvOTA3cHgtQkNfTGlldHV2b3NfUnl0YXNfbG9nby5zdmcucG5nJyxcbiAgICAgIG5hbWU6ICfXqNeZ15jXkNehINeV15nXnNeg15QnXG4gICAgfSxcbiAgICAnbm92Z29yb2QnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vb2x5bXBpYWtvcy1saXZlLmdyL2ltZy90ZWFtcy9OaXpobnklMjBOb3Znb3JvZC5wbmcnLFxuICAgICAgbmFtZTogJ9eg15nXltez16DXmSdcbiAgICB9LFxuICAgICd6ZW5pdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI1L0ZDX1plbml0XzFfc3Rhcl8yMDE1X2xvZ28ucG5nLzIyMHB4LUZDX1plbml0XzFfc3Rhcl8yMDE1X2xvZ28ucG5nJyxcbiAgICAgIG5hbWU6ICfXlteg15nXmCdcbiAgICB9XG4gIH0sXG4gIFNUQVRJT05TOiB7XG4gICAgbW9kaWluOiAn157XldeT15nXoteZ158nLFxuICAgIHRsdjogJ9eq15wg15DXkdeZ15EnXG4gIH0sXG4gIE1BWF9TRUFTT05fVElDS0VUUzogNyxcbiAgTUFYX0VYVFJBX1BBU1NFTkdFUlM6IDQsXG4gIFBIT05FX1BSRUZJWEVTOiBbJzA1MCcsICcwNTInLCAnMDUzJywgJzA1NCcsICcwNTUnLCAnMDU3JywgJzA1OCddLFxuICBQQUdFUzoge1xuICAgIEhPTUU6IHt2YWw6ICdob21lJywgbmFtZTogJ9eT16Mg15TXkdeZ16onLCB2aXNpYmxlOiB0cnVlfSxcbiAgICBBVVRIOiB7dmFsOiAnYXV0aCcsIG5hbWU6ICcnfSxcbiAgICBVU0VSUzoge3ZhbDogJ3VzZXJzJywgbmFtZTogJ9ee16nXqtee16nXmdedJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgRVZFTlRTOiB7dmFsOiAnZXZlbnRzJywgbmFtZTogJ9eQ15nXqNeV16LXmdedJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgQk9PS0lOR1M6IHt2YWw6ICdib29raW5ncycsIG5hbWU6ICfXqNep15XXnteZ150g15zXlNeh16LXldeqJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgRElTVFJJQlVUSU9OOiB7dmFsOiAnZGlzdHJpYnV0aW9uJywgbmFtZTogJ9ee15nXmdec15nXnScsIHZpc2libGU6IHRydWV9LFxuICAgIEVESVRfVVNFUl9JTkZPOiB7dmFsOiAnZWRpdFVzZXJJbmZvJywgbmFtZTogJyd9XG4gIH0sXG4gIEVWRU5UU19TVEFUVVM6IHtcbiAgICBDTE9TRUQ6IHtcbiAgICAgIHZhbHVlOiAnY2xvc2VkJyxcbiAgICAgIG5hbWU6ICfXlNeU16jXqdee15Qg16HXkteV16jXlCdcbiAgICB9LFxuICAgIE9QRU5fRk9SX01FTUJFUlM6IHtcbiAgICAgIHZhbHVlOiAnb3BlbkZvck1lbWJlcnMnLFxuICAgICAgbmFtZTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec157XoNeV15nXmSDXlNeh16LXldeqJ1xuICAgIH0sXG4gICAgT1BFTl9GT1JfQUxMOiB7XG4gICAgICB2YWx1ZTogJ29wZW5Gb3JBbGwnLFxuICAgICAgbmFtZTogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec15vXldec150nXG4gICAgfSxcbiAgICBGVUxMWV9CT09LRUQ6IHtcbiAgICAgIHZhbHVlOiAnZnVsbHlCb29rZWQnLFxuICAgICAgbmFtZTogJ9eU15TXodei15Qg157XnNeQ15QnXG4gICAgfVxuICB9LFxuICBESVNUUklCVVRJT046IHtcbiAgICBSRUNJUElFTlRTOiB7XG4gICAgICBBTEw6IHtcbiAgICAgICAgdmFsdWU6ICdhbGxVc2VycycsXG4gICAgICAgIG5hbWU6ICfXm9ec15wg15TXntep16rXntep15nXnSdcbiAgICAgIH0sXG4gICAgICBNRU1CRVJTX09OTFk6IHtcbiAgICAgICAgdmFsdWU6ICdtZW1iZXJzT25seScsXG4gICAgICAgIG5hbWU6ICfXnteg15XXmdeZ150g15HXnNeR15MnXG4gICAgICB9LFxuICAgICAgQk9PS0VEX1RPX0VWRU5UOiB7XG4gICAgICAgIHZhbHVlOiAnYm9va2VkVG9FdmVudCcsXG4gICAgICAgIG5hbWU6ICfXqNep15XXnteZ150g15zXlNeh16LXlCdcbiAgICAgIH1cbiAgICB9LFxuICAgIE1FVEhPRFM6IHtcbiAgICAgIEVNQUlMOiAnZW1haWwnLFxuICAgICAgU01TOiAnc21zJ1xuICAgIH0sXG4gICAgVFlQRVM6IHtcbiAgICAgIFRFTVBMQVRFOiAndGVtcGxhdGUnLFxuICAgICAgQ1VTVE9NOiAnY3VzdG9tJ1xuICAgIH0sXG4gICAgVEVNUExBVEVTOiB7XG4gICAgICBFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTOiB7XG4gICAgICAgIGlkOiAnNGZhYjZiOTItYmY2MS00OGYxLWIxM2ItYmM3MDJlZDc4Njk1JyxcbiAgICAgICAgbmFtZTogJ9ek16rXmdeX16og15TXqNep157XlCDXnNee16DXldeZ15nXnSdcbiAgICAgIH0sXG4gICAgICBFVkVOVF9PUEVOX0ZPUl9BTEw6IHtcbiAgICAgICAgaWQ6ICdkYmUzZTBlNC1iYjBlLTQxYWQtYmYxMi01YmU2NGEzMGYzYjcnLFxuICAgICAgICBuYW1lOiAn16TXqteZ15fXqiDXlNeo16nXnteUINec15vXldec150nXG4gICAgICB9LFxuICAgICAgQ0hBTkdFX0VWRU5UX0RFVEFJTFM6IHtcbiAgICAgICAgaWQ6ICcxNzBmY2Q0Zi1kZjJlLTQ0ZGQtYjc2MC02OTNkMDRmZGQwN2MnLFxuICAgICAgICBuYW1lOiAn16nXmdeg15XXmSDXkdee15XXoteTINeU15DXmdeo15XXoidcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEZvcm0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEZvcm0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50Rm9ybS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnQtZm9ybSAuZXZlbnQtcGljIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRzUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50c1BhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50c1BhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnRzLXBhZ2UgLmZpbHRlcmluZyB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZXZlbnRzUGFnZS9ldmVudHNQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgRVZFTlRTX1JFQ0VJVkVELCBFVkVOVF9SRU1PVkVEIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcblxuY29uc3QgRVZFTlRfS0VZUyA9IFsndHlwZUlkJywgJ2RheScsICdtb250aCcsICd5ZWFyJywgJ2hvdXInLCAnbWludXRlJywgJ3N0YXR1cyddO1xuY29uc3QgRVZFTlRTX1BBVEggPSAnZXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IGV2ZW50UmVtb3ZlZCA9IGV2ZW50SWQgPT4gKHtcbiAgdHlwZTogRVZFTlRfUkVNT1ZFRCxcbiAgZXZlbnRJZFxufSk7XG5cbmV4cG9ydCBjb25zdCBldmVudHNSZWNlaXZlZCA9IGV2ZW50cyA9PiAoe1xuICB0eXBlOiBFVkVOVFNfUkVDRUlWRUQsXG4gIGV2ZW50c1xufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEV2ZW50cyA9ICgpID0+IGRpc3BhdGNoID0+XG4gIGNsaWVudERCLnJlYWQoRVZFTlRTX1BBVEgpXG4gICAgLnRoZW4oZXZlbnRzID0+IHtcbiAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKGV2ZW50c1JlY2VpdmVkKGV2ZW50cykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFdmVudCA9IGV2ZW50ID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKEVWRU5UU19QQVRILCBldmVudClcbiAgICAudGhlbihldmVudElkID0+IGRpc3BhdGNoKGV2ZW50c1JlY2VpdmVkKHsgW2V2ZW50SWRdOiBldmVudCB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRXZlbnQgPSAoZXZlbnRJZCwgZXZlbnQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IGV2ZW50VG9VcGRhdGUgPSBfLnBpY2soZXZlbnQsIEVWRU5UX0tFWVMpO1xuXG4gIHJldHVybiBjbGllbnREQi51cGRhdGUoJ2V2ZW50cy8nICsgZXZlbnRJZCwgZXZlbnRUb1VwZGF0ZSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChldmVudHNSZWNlaXZlZCh7IFtldmVudElkXTogZXZlbnRUb1VwZGF0ZSB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRXZlbnQgPSBldmVudElkID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5yZW1vdmUoYCR7RVZFTlRTX1BBVEh9LyR7ZXZlbnRJZH1gKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGV2ZW50UmVtb3ZlZChldmVudElkKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBTVEFSVF9MT0FESU5HID0gJ1NUQVJUX0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFNUT1BfTE9BRElORyA9ICdTVE9QX0xPQURJTkcnO1xuXG5leHBvcnQgY29uc3QgUkVQT1JUX0VSUk9SID0gJ1JFUE9SVF9FUlJPUic7XG5cbmV4cG9ydCBjb25zdCBTRVRfQVVUSF9EQVRBID0gJ1NFVF9BVVRIX0RBVEEnO1xuZXhwb3J0IGNvbnN0IFNJR05fT1VUID0gJ1NJR05fT1VUJztcblxuZXhwb3J0IGNvbnN0IFVTRVJTX1JFQ0VJVkVEID0gJ1VTRVJTX1JFQ0VJVkVEJztcbmV4cG9ydCBjb25zdCBVU0VSX1JFTU9WRUQgPSAnVVNFUl9SRU1PVkVEJztcblxuZXhwb3J0IGNvbnN0IEVWRU5UU19SRUNFSVZFRCA9ICdFVkVOVFNfUkVDRUlWRUQnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1JFTU9WRUQgPSAnRVZFTlRfUkVNT1ZFRCc7XG5cbmV4cG9ydCBjb25zdCBCT09LSU5HU19SRUNFSVZFRCA9ICdCT09LSU5HU19SRUNFSVZFRCc7XG5leHBvcnQgY29uc3QgQk9PS0lOR19DQU5DRUxFRCA9ICdCT09LSU5HX0NBTkNFTEVEJztcblxuZXhwb3J0IGNvbnN0IE5BVklHQVRFX1RPID0gJ05BVklHQVRFX1RPJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuLi9jb25maWcvY29uZmlnJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnYmx1ZWJpcmQnO1xuXG5pZiAoZmlyZWJhc2UuYXBwcy5sZW5ndGggPT09IDApIHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcuZmlyZWJhc2UpO1xufSBlbHNlIHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcuZmlyZWJhc2UsICdDbGllbnRGaXJlYmFzZScpO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0SW4gPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5zZXQoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZWFkID0gcGF0aCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLm9uY2UoJ3ZhbHVlJylcbiAgICAudGhlbihzbmFwc2hvdCA9PiByZXNvbHZlKHNuYXBzaG90LnZhbCgpKSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgcHVzaCA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGNvbnN0IHVuaXF1ZUtleSA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnB1c2goKS5rZXk7XG4gIHNldEluKHBhdGggKyAnLycgKyB1bmlxdWVLZXksIGRhdGEpXG4gICAgLnRoZW4oKCkgPT4gcmVzb2x2ZSh1bmlxdWVLZXkpKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAocGF0aCwgZGF0YSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS51cGRhdGUoZGF0YSlcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSBwYXRoID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkucmVtb3ZlKClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhHb29nbGUgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChwcm92aWRlcilcbiAgICAudGhlbihyZXNvbHZlKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRmFjZWJvb2sgPSAoKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKVxuICAgIC50aGVuKHJlc29sdmUpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHNlbmRQYXNzd29yZFJlc2V0RW1haWwgPSBlbWFpbCA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGdldExvZ2dlZEluVXNlciA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLmdldFJlZGlyZWN0UmVzdWx0KClcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0LnVzZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb25BdXRoU3RhdGVDaGFuZ2UgPSB1c2VyID0+IHtcbiAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkucmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgICAgIHJlc29sdmUodXNlcik7XG4gICAgICAgIH07XG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQob25BdXRoU3RhdGVDaGFuZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJsZXQgY29uZmlnID0ge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLnByb2QuanNvbicpO1xuICBjb25zb2xlLmxvZygndXNpbmcgcHJvZHVjdGlvbiBjb25maWd1cmF0aW9uJyk7XG59IGVsc2Uge1xuICBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy5kZXYuanNvbicpO1xuICBjb25zb2xlLmxvZygndXNpbmcgZGV2ZWxvcG1lbnQgY29uZmlndXJhdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbmZpZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlnL2NvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZpcmViYXNlXCI6IHtcblx0XHRcImFwaUtleVwiOiBcIkFJemFTeURFSVNWMmFNaWVQa3VlQ3dsRFI4Q1ZnN2hfQkxhM0pvY1wiLFxuXHRcdFwiYXV0aERvbWFpblwiOiBcImhhcG9lbGJ1cy1iMjVkNC5maXJlYmFzZWFwcC5jb21cIixcblx0XHRcImRhdGFiYXNlVVJMXCI6IFwiaHR0cHM6Ly9oYXBvZWxidXMtYjI1ZDQuZmlyZWJhc2Vpby5jb21cIixcblx0XHRcInN0b3JhZ2VCdWNrZXRcIjogXCJoYXBvZWxidXMtYjI1ZDQuYXBwc3BvdC5jb21cIlxuXHR9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbmZpZy9jb25maWcucHJvZC5qc29uXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZpcmViYXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmlyZWJhc2VcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBTVE9QX0xPQURJTkcgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+ICh7XG4gIHR5cGU6IFNUQVJUX0xPQURJTkdcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiAoe1xuICB0eXBlOiBTVE9QX0xPQURJTkdcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2xvYWRpbmdBY3Rpb25zLmpzIiwiaW1wb3J0IHsgUkVQT1JUX0VSUk9SIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IHJlcG9ydEVycm9yID0gKG1lc3NhZ2UgPSBDb25zdGFudHMuRVJST1JTLkdFTkVSQUwpID0+ICh7XG4gIHR5cGU6IFJFUE9SVF9FUlJPUixcbiAgbWVzc2FnZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvc3Bpbm5lci5zY3NzJyk7XG5cbmNvbnN0IExvZ28gPSByZXF1aXJlKCcuL2xvZ28uanN4Jyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IHN0YXRlLmxvYWRpbmdcbiAgICB9O1xufVxuXG5jbGFzcyBTcGlubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlDbGFzcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgb3ZlcmxheTogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGU6ICF0aGlzLnByb3BzLmlzTG9hZGluZ1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5Q2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIGhlaWdodD17ODB9IHdpZHRoPXs4MH0gb3BhY2l0eT17MC43fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuU3Bpbm5lci5Qcm9wVHlwZXMgPSB7XG4gICAgaXNMb2FkaW5nOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTcGlubmVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9zcGlubmVyLmpzeCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3NwaW5uZXIuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwMDsgfVxcbiAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIHtcXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDA7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAubG9nbyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyID4gZGl2IHtcXG4gICAgICB3aWR0aDogMTJweDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgbWFyZ2luOiAwIDJweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xcbiAgICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAuYm91bmNlMSB7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMyczsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgLmJvdW5jZTIge1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XFxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xcbiAgMCUsIDgwJSwgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcXG4gIDAlLCA4MCUsIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDQwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgTG9nbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHdpZHRoPXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gaGVpZ2h0PXt0aGlzLnByb3BzLndpZHRoICsgJ3B0J30gb3BhY2l0eT17dGhpcy5wcm9wcy5vcGFjaXR5fSB2aWV3Qm94PVwiMCAwIDQwMCA0MDBcIj5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAwLjAwIDAuMDAgTCAxOTUuMzMgMC4wMCBDIDE3MS40NiAxLjE0IDE0Ny41OCA1LjQyIDEyNS40MyAxNC42MCBDIDcwLjg4IDM2LjMxIDI3LjEwIDgzLjMzIDkuNTcgMTM5LjQwIEMgMy43NCAxNTcuNDUgMS4xNiAxNzYuMzcgMC4wMCAxOTUuMjUgTCAwLjAwIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk1LjMzIDAuMDAgTCAyMDcuNTIgMC4wMCBDIDIxNi43MSAxLjE5IDIyNi4wMiAxLjM1IDIzNS4xMSAzLjIyIEMgMjY5LjMwIDkuMTYgMzAxLjc4IDI0LjM3IDMyOC4zNyA0Ni42NSBDIDM2NS45OSA3Ny45MSAzOTEuNjYgMTIzLjQyIDM5OC4wOSAxNzEuOTkgQyAzOTkuMDQgMTc4Ljc1IDM5OS41NiAxODUuNTYgNDAwLjAwIDE5Mi4zNyBMIDQwMC4wMCAyMDguNzMgQyAzOTguNTcgMjMzLjg2IDM5My4yOSAyNTguOTAgMzgyLjgwIDI4MS44NiBDIDM1OC44MiAzMzUuNjggMzA5Ljk1IDM3Ny44MyAyNTIuOTkgMzkzLjExIEMgMjM5LjA4IDM5Ny4xMCAyMjQuNjggMzk4Ljg5IDIxMC4yOSA0MDAuMDAgTCAxOTEuMzYgNDAwLjAwIEMgMTY2LjE3IDM5OC43NiAxNDEuMTMgMzkzLjE0IDExOC4xNiAzODIuNjQgQyA2Ny40MCAzNTkuNzYgMjYuODEgMzE1LjA1IDkuODkgMjYxLjkwIEMgMy45NyAyNDQuMzMgMS42MiAyMjUuODUgMC4wMCAyMDcuNDYgTCAwLjAwIDE5NS4yNSBDIDEuMTYgMTc2LjM3IDMuNzQgMTU3LjQ1IDkuNTcgMTM5LjQwIEMgMjcuMTAgODMuMzMgNzAuODggMzYuMzEgMTI1LjQzIDE0LjYwIEMgMTQ3LjU4IDUuNDIgMTcxLjQ2IDEuMTQgMTk1LjMzIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA3LjUyIDAuMDAgTCA0MDAuMDAgMC4wMCBMIDQwMC4wMCAxOTIuMzcgQyAzOTkuNTYgMTg1LjU2IDM5OS4wNCAxNzguNzUgMzk4LjA5IDE3MS45OSBDIDM5MS42NiAxMjMuNDIgMzY1Ljk5IDc3LjkxIDMyOC4zNyA0Ni42NSBDIDMwMS43OCAyNC4zNyAyNjkuMzAgOS4xNiAyMzUuMTEgMy4yMiBDIDIyNi4wMiAxLjM1IDIxNi43MSAxLjE5IDIwNy41MiAwLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE5Mi4xMSA4LjEzIEMgMjIyLjM1IDYuODAgMjUyLjk1IDEyLjc0IDI4MC40MiAyNS41MCBDIDMyNy4wNCA0Ni43MiAzNjQuMzUgODcuMzkgMzgxLjMxIDEzNS43NSBDIDM5OC40MCAxODMuMTcgMzk1LjY1IDIzNy4zMyAzNzMuNzcgMjgyLjc0IEMgMzU2LjIzIDMxOS44MyAzMjYuMzMgMzUwLjk3IDI5MC4wNCAzNzAuMDkgQyAyNDMuOTIgMzk0LjgyIDE4Ny41MiAzOTkuMjIgMTM4LjA3IDM4Mi4xMSBDIDk1LjM4IDM2Ny42NSA1OC4xNCAzMzcuNjAgMzUuMjEgMjk4Ljc2IEMgMTQuNjUgMjY0LjkyIDUuMzQgMjI0LjQ2IDguNTQgMTg1LjAzIEMgMTAuMzcgMTYxLjIwIDE2LjY4IDEzNy43MCAyNy4yNCAxMTYuMjYgQyA0OC44MiA3MS4xNyA4OC45MiAzNS40OCAxMzYuMDQgMTguODkgQyAxNTQuMDUgMTIuNTQgMTczLjAyIDguODcgMTkyLjExIDguMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTk2LjIzIDIxLjM1IEMgMTk3LjYwIDE4LjkzIDE5OC45NSAxNi41MCAyMDAuMzcgMTQuMTEgQyAyMDEuNzIgMTYuNDggMjAzLjA0IDE4Ljg2IDIwNC4zMyAyMS4yNyBDIDIwNi45NSAyMS44MCAyMDkuNTkgMjIuMjIgMjEyLjE4IDIyLjg5IEMgMjEwLjcwIDI1LjE2IDIwOC42NSAyNi45OCAyMDYuODIgMjguOTYgQyAyMDcuMjIgMzEuNjUgMjA3LjUzIDM0LjM1IDIwNy44NiAzNy4wNCBDIDIwNS4zMCAzNS44NiAyMDIuNzQgMzQuNjcgMjAwLjE0IDMzLjU4IEMgMTk3Ljc0IDM0LjgyIDE5NS4zMiAzNi4wNCAxOTIuNzUgMzYuODcgQyAxOTMuMTYgMzQuMjIgMTkzLjU0IDMxLjU2IDE5My44NCAyOC44OSBDIDE5MS45MyAyNi45MCAxOTAuMDMgMjQuOTAgMTg4LjE2IDIyLjg4IEMgMTkwLjgzIDIyLjMxIDE5My41MiAyMS43OCAxOTYuMjMgMjEuMzUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTgxLjEyIDQ0LjM4IEMgMjEyLjI2IDQwLjYwIDI0NC41MyA0Ni4xOSAyNzIuMzYgNjAuNzYgQyAzMTAuOTMgODAuNTYgMzQwLjUxIDExNy4wNiAzNTEuNjIgMTU5LjAwIEMgMzU4LjgxIDE4NS4xMCAzNTguODIgMjEzLjA4IDM1Mi4yMiAyMzkuMzAgTCAzNTMuNzggMjM5LjQ5IEMgMzUzLjM2IDIzOS40OSAzNTIuNTMgMjM5LjQ4IDM1Mi4xMSAyMzkuNDggQyAzNDUuMDIgMjY3LjM5IDMyOS45MCAyOTMuMjEgMzA5LjA4IDMxMy4xMSBDIDI5Mi4yMSAzMjkuNjYgMjcxLjM2IDM0MS45OSAyNDguOTYgMzQ5LjQwIEMgMjIwLjM1IDM1OC42OSAxODkuMDcgMzU5LjYzIDE1OS45OSAzNTEuOTEgQyAxMzIuMzkgMzQ0LjYzIDEwNi44MyAzMjkuNjkgODcuMTEgMzA5LjA0IEMgNTguNjMgMjc5Ljc0IDQyLjM1IDIzOC44OSA0My4zMSAxOTguMDAgQyA0My4zOCAxNTEuNTQgNjYuMDkgMTA2LjExIDEwMi40MyA3Ny4zNiBDIDEyNC45NSA1OS4zOSAxNTIuNDggNDcuNzIgMTgxLjEyIDQ0LjM4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExMi43NCA3Ni43MyBDIDEzNC41NCA2MS40NiAxNjAuMzEgNTEuNTUgMTg2LjkzIDQ5LjU1IEMgMjA2LjQ1IDQ4LjIxIDIyNi4zNyA0OS42MSAyNDUuMDYgNTUuNjggQyAyNzAuOTkgNjMuNzkgMjk0LjY5IDc4Ljk4IDMxMi43NSA5OS4yOCBDIDMzMC4wMCAxMTguMzMgMzQyLjA4IDE0MS45NCAzNDcuODMgMTY2Ljk2IEMgMzUzLjg1IDE5NS4xNSAzNTIuMjkgMjI1LjEyIDM0Mi4yNSAyNTIuMjIgQyAzMzcuMjQgMjY1LjU2IDMzMC40NyAyNzguMjUgMzIyLjA1IDI4OS43NiBDIDMxOC44MCAyODYuODAgMzE5LjY4IDI4Mi40MiAzMTkuNzIgMjc4LjUwIEMgMzE5LjE2IDI3OS44MSAzMTguNjMgMjgxLjEzIDMxOC4xMyAyODIuNDYgQyAzMTcuMzMgMjgwLjE4IDMxNi41NSAyNzcuODUgMzE1LjEyIDI3NS44OCBDIDMxNS41MiAyNzcuMTYgMzE2LjMxIDI3OS43MiAzMTYuNzEgMjgxLjAwIEMgMzE1LjMxIDI3OS43MyAzMTMuODAgMjc4LjY0IDMxMi4xOCAyNzcuNzIgQyAzMTMuMjIgMjc5LjM2IDMxNC40NCAyODAuODcgMzE1LjY3IDI4Mi4zOSBDIDMxNC4yMyAyODEuNzcgMzEyLjc4IDI4MS4yMCAzMTEuMzAgMjgwLjY5IEMgMzEyLjM1IDI4MS44NyAzMTMuNjEgMjgyLjc1IDMxNS4wOCAyODMuMzUgQyAzMTMuOTUgMjgzLjY0IDMxMi44MiAyODMuOTMgMzExLjcwIDI4NC4yMyBDIDMxNi4xNSAyODQuNTQgMzE4LjE5IDI4OC42NyAzMjAuMzUgMjkxLjk1IEMgMzE5LjAwIDI5My43MiAzMTcuNTkgMjk1LjQ1IDMxNi4xNSAyOTcuMTUgQyAzMTIuNTggMjk0LjU2IDMxMS4xMyAyOTAuNDEgMzEwLjU1IDI4Ni4xOSBDIDMxMC4yMyAyODYuMzQgMzA5LjU5IDI4Ni42NCAzMDkuMjggMjg2Ljc4IEMgMzA4LjU5IDI4NS4yMyAzMDYuOTIgMjg0LjgyIDMwNi40NyAyODYuNzYgQyAzMDYuODggMjg3LjI5IDMwNy42OSAyODguMzMgMzA4LjEwIDI4OC44NiBDIDMwNy40NSAyODguNzUgMzA2LjE0IDI4OC41NSAzMDUuNDkgMjg4LjQ0IEMgMzA2LjU5IDI4OS43MiAzMDcuNzEgMjkwLjk4IDMwOC44MiAyOTIuMjYgQyAzMDcuOTcgMjkyLjI1IDMwNi4yNyAyOTIuMjMgMzA1LjQxIDI5Mi4yMiBDIDMwOC40NyAyOTQuNDEgMzExLjQ3IDI5Ni43NCAzMTMuODEgMjk5LjcyIEMgMzEzLjA3IDMwMC42MiAzMTIuMzMgMzAxLjUyIDMxMS42MCAzMDIuNDQgQyAzMTAuOTMgMzAwLjgwIDMxMC42NCAyOTguODIgMzA5LjA3IDI5Ny43NiBDIDMwNS43OCAyOTUuMDcgMzAyLjExIDI5Mi45MSAyOTguNTggMjkwLjU3IEMgMjk3LjE3IDI4OS40NyAyOTUuMzUgMjg5LjUwIDI5My42NyAyODkuMzMgQyAyOTMuMzQgMjkwLjYzIDI5My4wMiAyOTEuOTMgMjkyLjcwIDI5My4yMyBDIDI5My4wMiAyOTQuMDcgMjkzLjM1IDI5NC45MiAyOTMuNjggMjk1Ljc3IEMgMjkyLjE1IDI5OS43NSAyOTEuMjAgMzAzLjkxIDI5MC4xNyAzMDguMDMgQyAyODYuMzkgMzAwLjkxIDI4Mi4zOSAyOTMuNzkgMjgwLjk1IDI4NS43NSBDIDI4MC41MyAyODcuOTQgMjgwLjE2IDI5MC4xNyAyNzguNzggMjkyLjAwIEMgMjc3Ljc4IDI5MC40NyAyNzYuODIgMjg4Ljg4IDI3NS4zOCAyODcuNzEgQyAyNzYuMjIgMjkwLjUyIDI3Ny4zNyAyOTMuMjMgMjc4LjA1IDI5Ni4wOSBDIDI3OC41OCAyOTguNzQgMjgxLjgyIDI5OS41NyAyODIuNTkgMzAyLjEyIEMgMjgzLjg2IDMwNS41MCAyODQuOTYgMzA4Ljk1IDI4Ni40NSAzMTIuMjQgQyAyODUuMjUgMzExLjU3IDI4NC4wNiAzMTAuOTEgMjgyLjg3IDMxMC4yNCBDIDI4MS43MCAzMTAuNTggMjgwLjU0IDMxMC45MiAyNzkuMzkgMzExLjI4IEMgMjc5LjEwIDMxMS44MSAyNzguNTIgMzEyLjg3IDI3OC4yMyAzMTMuMzkgQyAyNzYuODkgMzExLjUxIDI3NS41NiAzMDkuNTYgMjczLjY3IDMwOC4xOSBDIDI3NS41NCAzMDYuODIgMjc3LjU5IDMwNS4zOCAyNzguMDYgMzAyLjk0IEMgMjc0Ljg3IDMwNC44MSAyNzIuMTYgMzA3LjM1IDI2OS4xMyAzMDkuNDMgQyAyNjcuMjIgMzEwLjUxIDI2Ni43NCAzMTIuNzggMjY1Ljg2IDMxNC42MiBDIDI2MS43NyAzMTAuOTYgMjYxLjUyIDMwNS4zNCAyNjAuMjggMzAwLjM2IEMgMjYwLjAyIDMwMS42NiAyNTkuNzcgMzAyLjk3IDI1OS41NCAzMDQuMjggQyAyNTguNzEgMzAyLjY2IDI1Ny43OCAzMDEuMDMgMjU2LjA5IDMwMC4xNiBDIDI1Ni4wNyAzMDMuMzkgMjU2LjI4IDMwNi42NSAyNTcuMjAgMzA5Ljc2IEMgMjU1LjgwIDMwOS43MCAyNTQuNDAgMzA5LjY2IDI1My4wMCAzMDkuNjUgQyAyNTQuODQgMzExLjE3IDI1Ni44MyAzMTIuNDggMjU4Ljg5IDMxMy42OSBDIDI1OC45MSAzMTYuMzkgMjU4Ljg2IDMxOS4wOCAyNTguODAgMzIxLjc4IEMgMjU3LjYyIDMyMy4wNyAyNTYuNDIgMzI0LjM1IDI1NS4xOSAzMjUuNTkgQyAyNTIuNDIgMzI0LjExIDI0OS43NyAzMjIuMzggMjQ2Ljc3IDMyMS40MSBDIDI0Ni4yOSAzMTguODYgMjQ1LjcyIDMxNi4zMiAyNDUuMjYgMzEzLjc2IEMgMjQ0LjA4IDMxMy4wMCAyNDIuOTAgMzEyLjIzIDI0MS43MyAzMTEuNDYgQyAyMzguMjIgMzEyLjYzIDIzNi41NyAzMTYuMjAgMjM3LjYxIDMxOS43MSBDIDIzNi44NCAzMTkuOTUgMjM2LjA4IDMyMC4yMCAyMzUuMzEgMzIwLjQ1IEMgMjM1LjY1IDMxNS45MCAyMzcuMjcgMzExLjU0IDIzNy41MiAzMDcuMDEgQyAyMzcuNjUgMzA0LjkxIDIzNC42MCAzMDUuMjEgMjMzLjM5IDMwNC41NCBDIDIzNC42MyAzMTIuODggMjMxLjc5IDMyMS4wMSAyMjguODIgMzI4LjY0IEMgMjI4LjAxIDMyOC44NyAyMjYuMzggMzI5LjMzIDIyNS41NyAzMjkuNTYgQyAyMjQuOTcgMzI0LjA2IDIyMi40OSAzMTcuODkgMjI2LjI3IDMxMi45OCBDIDIyNS41MyAzMTEuMjIgMjI0Ljk0IDMwOS40MCAyMjQuMzYgMzA3LjU4IEMgMjIzLjkzIDMwNy41NiAyMjMuMDcgMzA3LjUxIDIyMi42NCAzMDcuNDkgQyAyMTkuNzcgMzEyLjExIDIyMi44MSAzMTcuNzggMjIwLjE0IDMyMi41MiBDIDIxNy4zMiAzMTkuNjIgMjE1LjU1IDMxNS45MSAyMTIuODcgMzEyLjkwIEMgMjEzLjM0IDMxNC40NSAyMTMuOTAgMzE1Ljk4IDIxNC41MSAzMTcuNTAgQyAyMTMuNjQgMzE4LjM0IDIxMi43NyAzMTkuMTkgMjExLjkyIDMyMC4wNCBDIDIxMy4xOCAzMjAuNjggMjE0LjQ1IDMyMS4zMCAyMTUuNzQgMzIxLjg2IEMgMjE2LjM3IDMyMi43NyAyMTcuMDAgMzIzLjY5IDIxNy42NSAzMjQuNjAgQyAyMTUuMDUgMzI1LjE3IDIxMi4zNyAzMjUuNzYgMjEwLjQ0IDMyNy43NCBDIDIxMC45NyAzMjUuMjIgMjA4LjM3IDMyNC40MSAyMDcuNDAgMzIyLjYwIEMgMjA2LjY4IDMyMC44NiAyMDguMDcgMzE5LjMyIDIwOC42NyAzMTcuODAgQyAyMDguMzIgMzE2LjM4IDIwNy45NCAzMTQuOTcgMjA3LjU1IDMxMy41NyBDIDIwNi44NCAzMTQuMzMgMjA1Ljc0IDMxNC45MyAyMDUuNTggMzE2LjA2IEMgMjA0LjM0IDMyMS43MyAyMDYuNDcgMzI3LjQzIDIwNi4zMCAzMzMuMTMgQyAyMDUuNTYgMzMyLjE0IDIwNC44NCAzMzEuMTUgMjA0LjExIDMzMC4xNiBDIDIwMS42NyAzMjguOTIgMjAwLjE5IDMyNi42MiAxOTguMzggMzI0LjY5IEMgMTk2LjUyIDMyMi45OCAxOTMuOTEgMzI0LjMxIDE5MS43NiAzMjQuNDkgQyAxOTAuODYgMzI3LjEzIDE4OS43MCAzMjkuOTUgMTkwLjQzIDMzMi43OSBDIDE5MS4xNiAzMzQuNjIgMTkyLjExIDMzNi4zNSAxOTIuOTEgMzM4LjE1IEMgMTkxLjY0IDMzNy4xOSAxODkuODUgMzM2LjU0IDE4OS4zMSAzMzQuOTAgQyAxODguODQgMzMyLjQ0IDE4OC43NSAzMjkuOTMgMTg4LjM5IDMyNy40NiBDIDE5MS43OCAzMjQuMDUgMTk1LjU1IDMyMS4wOSAxOTkuNTEgMzE4LjM4IEMgMjAxLjExIDMxNy42MCAyMDAuNDEgMzE1Ljc4IDIwMC40MiAzMTQuNDAgQyAyMDAuNjQgMzE0LjA2IDIwMS4wNyAzMTMuMzkgMjAxLjI4IDMxMy4wNSBDIDE5OS43MSAzMTMuNDggMTk3LjM5IDMxMi42MiAxOTYuNDIgMzE0LjM0IEMgMTk0LjQ4IDMxNi43NiAxOTMuNTYgMzE5Ljk4IDE5MC45OSAzMjEuODkgQyAxODkuMjggMzIzLjIxIDE4Ny40MyAzMjQuMzQgMTg1LjYzIDMyNS41NCBDIDE4NS4zMSAzMjUuMjcgMTg0LjY1IDMyNC43MyAxODQuMzIgMzI0LjQ3IEMgMTgzLjQ2IDMyNC41MiAxODEuNzIgMzI0LjYyIDE4MC44NSAzMjQuNjggQyAxODIuNTIgMzIxLjA2IDE4My44OSAzMTcuMzAgMTg1LjY2IDMxMy43MyBDIDE4Ni4yOCAzMTIuMjUgMTg3LjM0IDMxMC43MCAxODYuNzkgMzA5LjA0IEMgMTg2LjE5IDMwNy43NSAxODQuNjQgMzA3LjU4IDE4My41MSAzMDcuMDEgQyAxODIuNjkgMzE2LjM1IDE3Ny4wOSAzMjQuMjcgMTcxLjkxIDMzMS43NCBDIDE3MS4wMiAzMzAuMTkgMTcwLjA1IDMyOC42OSAxNjkuMjUgMzI3LjEwIEMgMTcyLjAwIDMyMi44MyAxNzMuNTMgMzE3LjAyIDE3OC43MCAzMTUuMDYgQyAxNzguNzcgMzEzLjQ0IDE3OC43MSAzMTEuODMgMTc4LjU4IDMxMC4yMiBDIDE3Ny42NSAzMTAuMzggMTc2LjczIDMxMC41NiAxNzUuODEgMzEwLjc4IEMgMTc2LjE3IDMxMS45NiAxNzYuNjMgMzEzLjE5IDE3Ni4xMiAzMTQuNDMgQyAxNzUuODQgMzEzLjUzIDE3NS4yOSAzMTEuNzUgMTc1LjAxIDMxMC44NSBDIDE3My45NCAzMTIuOTMgMTczLjQ4IDMxNS4yNyAxNzIuMzUgMzE3LjMyIEMgMTcwLjg0IDMxOS41OSAxNjguNzcgMzIxLjQwIDE2Ni45MCAzMjMuMzcgQyAxNjUuOTIgMzIyLjYyIDE2NC45NCAzMjEuODggMTYzLjk2IDMyMS4xNSBDIDE2MC45OCAzMjAuOTEgMTU3Ljk3IDMyMS4yMyAxNTUuNDMgMzIyLjkxIEMgMTU1LjAzIDMyMC4yNCAxNTQuNjYgMzE3LjU2IDE1NC40MyAzMTQuODcgQyAxNTUuMjYgMzEzLjk1IDE1Ni4wOCAzMTMuMDUgMTU2LjkxIDMxMi4xNCBDIDE1Ni44NyAzMTAuNzQgMTU2Ljg0IDMwOS4zNCAxNTYuODEgMzA3Ljk1IEMgMTU1LjA4IDMwNi45NSAxNTMuNTEgMzA1LjA5IDE1MS4zNCAzMDUuMzQgQyAxNDguNzQgMzA2LjU5IDE0Ni4yNiAzMDguODMgMTQ1Ljg4IDMxMS44MyBDIDE0NS41OCAzMTQuMDIgMTQ1LjU2IDMxNi4yMyAxNDUuMzkgMzE4LjQzIEMgMTQ0LjkyIDMxOC41NCAxNDMuOTcgMzE4Ljc2IDE0My41MCAzMTguODggQyAxNDIuOTggMzE1LjI1IDE0My41OSAzMTEuNjYgMTQ0LjQzIDMwOC4xNCBDIDE0Ny43MyAzMDUuOTkgMTUxLjAyIDMwMy42OCAxNTQuODggMzAyLjYzIEMgMTU2LjMwIDMwMy40MyAxNTcuNzMgMzA0LjIxIDE1OS4xOCAzMDQuOTcgQyAxNjAuNTcgMzAyLjgwIDE2MC44NyAzMDAuMzQgMTU5LjcxIDI5OC4wMSBDIDE1My41MCAzMDAuMzcgMTQ2LjkwIDMwMS43OSAxNDAuOTcgMzA0Ljg1IEMgMTM5LjE0IDMwOS40NCAxMzYuNzQgMzEzLjc5IDEzNS4zOCAzMTguNTYgTCAxMzQuNjUgMzE4LjE4IEMgMTM0LjE2IDMxOS41OSAxMzMuNjIgMzIwLjk5IDEzMy4wMyAzMjIuMzYgQyAxMzEuNzggMzE4LjE5IDEyOS45MCAzMTQuMjMgMTI4LjgzIDMxMC4wMCBDIDEyOS41OCAzMDkuMjcgMTMxLjA4IDMwNy44MCAxMzEuODIgMzA3LjA2IEwgMTI4Ljc1IDMwNy4zMiBDIDEyOS44OSAzMDYuNTggMTMxLjAzIDMwNS44MyAxMzIuMTYgMzA1LjA4IEMgMTMxLjExIDMwNC43MCAxMjguOTkgMzAzLjk2IDEyNy45NCAzMDMuNTkgQyAxMjcuMzYgMzAwLjk5IDEyNy4wOCAyOTguMzMgMTI3LjY3IDI5NS43MSBDIDEyNi4zNiAyOTcuOTEgMTI0LjY0IDI5OS44MSAxMjIuNzggMzAxLjU3IEMgMTIzLjYwIDMwMS41MyAxMjUuMjIgMzAxLjQ2IDEyNi4wMyAzMDEuNDIgQyAxMjUuMzAgMzAyLjA3IDEyMy44MyAzMDMuMzcgMTIzLjEwIDMwNC4wMiBDIDEyMy41NyAzMDQuNTMgMTI0LjUxIDMwNS41NSAxMjQuOTggMzA2LjA2IEMgMTIyLjM2IDMwOC44MiAxMTguODggMzEwLjQzIDExNS4xOSAzMTEuMTYgQyAxMTYuMzEgMzA0LjkxIDExNy4zMSAyOTguNDQgMTIwLjU4IDI5Mi44NyBDIDExOS44MiAyOTMuMjIgMTE4LjI4IDI5My45MCAxMTcuNTIgMjk0LjI1IEMgMTE4LjA0IDI5My4zMCAxMTkuMDggMjkxLjQwIDExOS42MCAyOTAuNDUgQyAxMTguNzggMjkxLjI3IDExNy4xNCAyOTIuOTEgMTE2LjMyIDI5My43NCBDIDExNi41MSAyOTIuNzcgMTE2Ljg5IDI5MC44NCAxMTcuMDkgMjg5Ljg4IEMgMTE2LjY2IDI5MC4zOSAxMTUuODAgMjkxLjQzIDExNS4zOCAyOTEuOTUgQyAxMTQuOTcgMjg5LjY3IDExMi41OSAyODkuNTYgMTEzLjIxIDI5MS44NyBDIDExMi40NSAyOTUuMDcgMTE1LjQ4IDI5OC4wMSAxMTQuMDQgMzAxLjEwIEMgMTEyLjg1IDMwNC4zMyAxMTEuNjAgMzA3LjU3IDExMC45OCAzMTAuOTggQyAxMDkuNjQgMzEwLjU5IDEwOC4zMCAzMTAuMjYgMTA2Ljk1IDMwOS45NyBDIDEwOC4yOCAzMDguNTAgMTA5LjQ2IDMwNi45MCAxMTAuMzkgMzA1LjE1IEMgMTExLjE5IDMwNC4zOCAxMTEuOTggMzAzLjU4IDExMi42OSAzMDIuNzIgQyAxMTIuMDQgMzAyLjQ1IDExMC43NSAzMDEuOTAgMTEwLjEwIDMwMS42MyBDIDExMC42OCAyOTkuOTUgMTExLjI4IDI5OC4yOCAxMTEuNjggMjk2LjU2IEMgMTA5LjI5IDI5OS40NCAxMDcuOTEgMzAyLjk1IDEwNi4yMiAzMDYuMjQgQyAxMDMuODUgMzA4Ljc5IDEwMC40NCAzMTAuMDMgOTcuMzQgMzExLjQ0IEMgOTcuMzIgMzExLjE5IDk3LjI3IDMxMC43MSA5Ny4yNCAzMTAuNDYgQyA5OC4wNyAzMDQuMDggOTcuMzIgMjk3LjYyIDk4LjM3IDI5MS4yNiBDIDEwMS4xOSAyODkuNjEgMTA0LjEwIDI4OC4wNyAxMDYuNjkgMjg2LjA1IEMgMTA2LjU2IDI4NS40MCAxMDYuMjkgMjg0LjA5IDEwNi4xNiAyODMuNDMgQyAxMDMuNTIgMjg1LjE5IDEwMC42MSAyODYuNDQgOTcuODYgMjg4LjAwIEMgOTUuNzAgMjg5LjM2IDk1LjIyIDI5Mi4wNyA5NC41NiAyOTQuMzUgQyA5My40MCAyOTguMzggOTIuODUgMzAyLjU1IDkyLjY0IDMwNi43MyBDIDkxLjMwIDMwNS4wOSA4OS44NiAzMDMuNTQgODguMzkgMzAyLjAyIEwgODguMzQgMzAxLjQ1IEMgODguNDAgMjk4LjkzIDg3LjM3IDI5Ni42NSA4Ni40MCAyOTQuNDAgQyA4NC44MSAyOTMuODcgODMuMjYgMjkzLjk0IDgxLjczIDI5NC42MCBDIDgxLjUwIDI5My40MSA4MS4yNSAyOTIuMjMgODEuMDkgMjkxLjA0IEMgODUuMTIgMjg4LjEyIDg5LjE4IDI4NS4xMCA5Mi41MyAyODEuNDAgQyA5Mi4yNiAyODAuNjQgOTEuNzAgMjc5LjExIDkxLjQyIDI3OC4zNCBDIDkxLjAxIDI3OC4wMiA5MC4xOCAyNzcuMzkgODkuNzcgMjc3LjA3IEMgODYuNjYgMjgxLjgzIDgyLjY3IDI4NS45MyA3Ny44OSAyODkuMDIgQyA1OS4wNyAyNjMuNDcgNDguNTUgMjMxLjc1IDQ5LjEwIDE5OS45NiBDIDQ4LjYwIDE2OC4zOCA1OS4yMSAxMzcuMDUgNzcuNjIgMTExLjUzIEMgODcuNDUgOTguMjIgOTkuMzQgODYuNDMgMTEyLjc0IDc2LjczIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ni45MCA1Ny40MiBDIDIwNS45NSA1NS4xMiAyMTYuNDUgNTguMzAgMjIyLjAzIDY1Ljk2IEMgMjI3LjE1IDcyLjczIDIyNy4zNyA4Mi4xNyAyMjQuNTggODkuOTIgQyAyMjEuNTUgOTcuODMgMjEzLjk3IDEwMi44NCAyMDYuMzAgMTA1LjYxIEMgMjA2LjI5IDEwOC4wMiAyMDYuMjcgMTEwLjQyIDIwNi4yNiAxMTIuODMgQyAyMDQuMDkgMTE1LjE2IDIwMi4wMyAxMTcuNTkgMTk5Ljk3IDEyMC4wMyBDIDE5OC43MCAxMTguNzAgMTk2LjgwIDExNy43NiAxOTYuMTEgMTE2LjAwIEMgMTk3LjAwIDExNC40MCAxOTguMzkgMTEzLjE1IDE5OS42MSAxMTEuODAgQyAxOTEuODAgMTA0Ljg4IDE4Mi45OSA5OS4xNyAxNzUuMzIgOTIuMTAgQyAxNzYuMDcgOTAuNjAgMTc3LjIzIDg5LjQ2IDE3OC44NyA4OS4wMiBDIDE4My4wNyA5Mi45MiAxODYuOTUgOTcuMTYgMTkxLjE4IDEwMS4wMyBDIDE5My40MyA5NC43MiAxOTYuMDEgODguNDkgMTk3Ljc4IDgyLjA0IEMgMTk3LjQ1IDc4LjI0IDE5Ni4wNCA3NC42MyAxOTUuMjIgNzAuOTIgQyAxOTAuMDkgNjkuNzUgMTg1LjE1IDY3Ljg2IDE4MC4wMiA2Ni42NyBDIDE3OC4yMCA2Ni45MiAxNzYuNDEgNjcuMzUgMTc0LjU5IDY3LjU1IEMgMTc0LjU1IDY2LjUwIDE3NC41MSA2NS40NiAxNzQuNDkgNjQuNDEgQyAxNzcuMzggNjQuMzcgMTgwLjIyIDY0Ljk2IDE4My4wNSA2NS40NiBDIDE4Ni45MCA2MS42OSAxOTEuNTUgNTguNTMgMTk2LjkwIDU3LjQyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE4NC45NCA2NS44MSBDIDE4OS4zMiA2MS4zNCAxOTUuNzQgNTkuMDIgMjAxLjk3IDU5LjUwIEMgMjA5LjQ4IDU5LjcwIDIxNi41NSA2NC42MiAyMTkuNDMgNzEuNTUgQyAyMjIuNTAgNzkuMDggMjIyLjU1IDg4LjIwIDIxOC4yNCA5NS4yOCBDIDIxNi4xMCA5OC43OCAyMTIuNjIgMTAxLjIyIDIwOC44NSAxMDIuNzAgQyAyMDcuMzggOTUuNzUgMjA2LjE5IDg4LjczIDIwNC40MSA4MS44NyBDIDIwMy44NCA4MS43MiAyMDIuNzAgODEuNDEgMjAyLjEzIDgxLjI1IEMgMjAzLjk2IDc5LjAwIDIwNS4zMSA3Ni40MCAyMDYuMDcgNzMuNTkgQyAyMDkuOTkgNzIuODIgMjEzLjk4IDcyLjU4IDIxNy45NSA3Mi4yNCBDIDIxNC42OSA2OC43NyAyMDkuOTUgNjYuNTUgMjA3Ljk0IDYyLjA0IEMgMjA3LjI1IDYyLjE3IDIwNS44NiA2Mi40MiAyMDUuMTcgNjIuNTUgQyAyMDUuNTIgNjMuNTUgMjA1LjQwIDY1LjA2IDIwNi43NyA2NS4zMiBDIDIwOC44NiA2Ni4xNCAyMTAuMDggNjguMDkgMjExLjI4IDY5Ljg2IEMgMjA4LjI2IDY5Ljc1IDIwNS4yOSA2OS4yMiAyMDIuMzYgNjguNTIgQyAyMDIuMDggNjYuMTggMjAxLjg1IDYzLjg0IDIwMS42NCA2MS40OSBDIDE5OS44MyA2MS4yNCAxOTguMDEgNjEuMDAgMTk2LjE5IDYwLjg1IEMgMTk2LjU4IDYzLjczIDE5Ny42OCA2Ni40MyAxOTkuODkgNjguMzkgQyAxOTQuODggNjcuNjggMTg5LjkxIDY2Ljc0IDE4NC45NCA2NS44MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTIuMTkgMTAyLjAwIEMgMTk0Ljg4IDk2Ljg3IDE5OC4xMyA5Mi4wMyAyMDEuMDggODcuMDQgQyAyMDMuNDQgOTIuMzEgMjA1LjQ1IDk3LjczIDIwNy42MCAxMDMuMTAgQyAyMDQuNzUgMTA1LjAxIDIwMi45MyAxMDcuOTggMjAwLjc1IDExMC41NyBDIDE5Ny43OSAxMDcuODIgMTk0LjgzIDEwNS4wNiAxOTIuMTkgMTAyLjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5Ny41MyA5OS40OSBDIDE5OC40NyA5OS40OCAyMDAuMzYgOTkuNDYgMjAxLjMwIDk5LjQ2IEMgMjAxLjI5IDEwMi4wOCAyMDEuMzAgMTA0LjcwIDIwMS4yOSAxMDcuMzMgQyAyMDAuNjcgMTA3LjI5IDE5OS40NCAxMDcuMjAgMTk4LjgyIDEwNy4xNiBDIDE5OC42NSAxMDQuNTYgMTk4LjY0IDEwMS45MSAxOTcuNTMgOTkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTc1LjY5IDEwOS41NSBDIDE3Ni4wMCAxMDcuNDMgMTc0LjM2IDEwMy43MiAxNzcuNzAgMTAzLjY1IEMgMTc3LjcxIDEwNC41NyAxNzcuNzQgMTA2LjQyIDE3Ny43NSAxMDcuMzUgQyAxODAuNjUgMTA3LjQ1IDE4My41NSAxMDcuNTYgMTg2LjQ1IDEwNy4zOCBDIDE4Ny4yMSAxMDguOTggMTg3Ljk5IDExMC41NyAxODguODYgMTEyLjExIEMgMTg5Ljc3IDExMC42MSAxODguNTMgMTA4Ljk5IDE4OC4zNCAxMDcuNDggQyAxODkuMTkgMTA3LjQ1IDE5MC44OCAxMDcuNDAgMTkxLjczIDEwNy4zNyBDIDE5MS43OCAxMTAuMzAgMTkxLjgwIDExMy4yNCAxOTEuNzggMTE2LjE3IEMgMTg5LjEwIDExNS45MyAxODYuMTIgMTE2LjgxIDE4My42NCAxMTUuNTYgQyAxODMuNjMgMTE1LjE1IDE4My42MCAxMTQuMzMgMTgzLjU4IDExMy45MiBDIDE4NC40MCAxMTMuODIgMTg2LjA0IDExMy42MiAxODYuODYgMTEzLjUyIEMgMTg1Ljc2IDExMS4zNSAxODQuNDMgMTA5LjMwIDE4Mi44MiAxMDcuNDggQyAxODEuMzIgMTEwLjYxIDE4Mi43NCAxMTcuMzYgMTc3LjM1IDExNi40MCBDIDE3Ny4yNCAxMTQuOTggMTc3LjgxIDExMy44OCAxNzkuMDUgMTEzLjA5IEMgMTc5LjE5IDExMi4yMSAxNzkuNDYgMTEwLjQ1IDE3OS42MCAxMDkuNTcgQyAxNzguMjkgMTA5LjU2IDE3Ni45OSAxMDkuNTYgMTc1LjY5IDEwOS41NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMDcuNDkgMTA3LjM3IEMgMjA5Ljc1IDEwNy40MCAyMTIuMDEgMTA3LjQxIDIxNC4yOCAxMDcuNDEgQyAyMTQuMjMgMTEwLjE4IDIxNC4yMyAxMTIuOTUgMjE0LjM2IDExNS43MiBDIDIxMi4xMiAxMTYuMjMgMjA5LjgxIDExNi4yMiAyMDcuNTIgMTE2LjIzIEMgMjA3LjUwIDExNS42MSAyMDcuNDQgMTE0LjM5IDIwNy40MSAxMTMuNzggQyAyMDguODYgMTEzLjc4IDIxMC4zMSAxMTMuNzkgMjExLjc2IDExMy43OSBDIDIxMS42NiAxMTIuMTcgMjExLjgyIDExMC40NCAyMTAuOTQgMTA5LjAxIEMgMjEwLjMwIDExMC43NSAyMDkuMTIgMTExLjU4IDIwNy40MSAxMTEuNTEgQyAyMDcuNDMgMTEwLjQ3IDIwNy40NyAxMDguNDEgMjA3LjQ5IDEwNy4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTUuODIgMTA3LjQyIEMgMjE3Ljk1IDEwNy40MSAyMjAuMDkgMTA3LjQxIDIyMi4yMiAxMDcuNDIgQyAyMjIuMTUgMTEwLjEzIDIyMi4xNCAxMTIuODUgMjIyLjI1IDExNS41NiBDIDIyMS42MyAxMTUuNzYgMjIwLjM4IDExNi4xNSAyMTkuNzYgMTE2LjM1IEMgMjE5LjczIDExNC4wOCAyMTkuNzIgMTExLjgxIDIxOS43MCAxMDkuNTQgQyAyMTguNDIgMTA5LjUzIDIxNy4xNCAxMDkuNTMgMjE1Ljg2IDEwOS41MyBMIDIxNS44MiAxMDcuNDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMjE2LjIzIDExMS40NCBDIDIxNi43OCAxMTEuNTMgMjE3Ljg3IDExMS43MCAyMTguNDEgMTExLjc5IEMgMjE4LjM5IDExMy4yOCAyMTguMzcgMTE0Ljc4IDIxOC4zNSAxMTYuMjggQyAyMTcuNjkgMTE2LjI0IDIxNi4zOSAxMTYuMTUgMjE1Ljc0IDExNi4xMSBDIDIxNS44OSAxMTQuNTUgMjE2LjA1IDExMy4wMCAyMTYuMjMgMTExLjQ0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDExOS4yNSAxMzYuMzAgQyAxMjQuNzQgMTM2LjM1IDEzMC4yMyAxMzYuMzEgMTM1LjczIDEzNi4zMiBDIDEzNS43NiAxNDMuNDIgMTM1LjY5IDE1MC41MiAxMzUuNzcgMTU3LjYyIEMgMTM4LjE3IDE1NS45NiAxNDEuNDggMTU0Ljg3IDE0Mi42NCAxNTEuOTUgQyAxNDMuMTIgMTQ2Ljc2IDE0Mi42OSAxNDEuNTMgMTQyLjg2IDEzNi4zMiBDIDE0OC42MyAxMzYuMzIgMTU0LjQwIDEzNi4zMSAxNjAuMTggMTM2LjMzIEMgMTYwLjEwIDE0MS4yNiAxNjAuMjYgMTQ2LjIwIDE2MC4xMiAxNTEuMTMgQyAxNTkuNzggMTU1LjA1IDE1Ny4zMSAxNTguNzEgMTUzLjg5IDE2MC42MSBDIDE0Ny44NSAxNjQuMDQgMTQxLjgwIDE2Ny40NCAxMzUuNzMgMTcwLjgwIEMgMTM1LjczIDE3Ny44MSAxMzUuNzMgMTg0LjgyIDEzNS43NCAxOTEuODMgQyAxMzAuMjQgMTkxLjg2IDEyNC43NCAxOTEuODIgMTE5LjIzIDE5MS44NiBDIDExOS4yNyAxNzMuMzQgMTE5LjIzIDE1NC44MiAxMTkuMjUgMTM2LjMwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE2NC45MiAxMzYuMzIgQyAxNzAuNDYgMTM2LjM1IDE3NS45OSAxMzYuMjggMTgxLjUyIDEzNi4zNSBDIDE4MS40NCAxNTAuNzkgMTgxLjQzIDE2NS4yMyAxODEuNTIgMTc5LjY3IEMgMTc2LjA1IDE3OS42MiAxNzAuNTcgMTc5Ljg3IDE2NS4xMCAxNzkuNTcgQyAxNjQuNjMgMTY1LjIzIDE2NC45OSAxNTAuNzIgMTY0LjkyIDEzNi4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxODYuMjggMTM2LjMwIEMgMjAwLjY5IDEzNi4zNCAyMTUuMTAgMTM2LjMzIDIyOS41MSAxMzYuMzEgQyAyMjkuNTIgMTUwLjc3IDIyOS40OSAxNjUuMjMgMjI5LjUzIDE3OS42OSBDIDIyMy45NCAxNzkuNjQgMjE4LjM1IDE3OS44MSAyMTIuNzcgMTc5LjYwIEMgMjEyLjk1IDE3MC4yOCAyMTIuNzcgMTYwLjk1IDIxMi44NyAxNTEuNjIgQyAyMDkuNTEgMTUxLjU1IDIwNi4xNSAxNTEuNTcgMjAyLjgwIDE1MS42MCBDIDIwMi44NyAxNjAuOTYgMjAyLjgxIDE3MC4zMyAyMDIuODMgMTc5LjY5IEMgMTk3LjMyIDE3OS43MyAxOTEuODAgMTc5LjY3IDE4Ni4yOSAxNzkuNjkgQyAxODYuMzAgMTY1LjIzIDE4Ni4zMiAxNTAuNzYgMTg2LjI4IDEzNi4zMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyMzQuMDkgMTM2LjI4IEMgMjM5LjY3IDEzNi4zOCAyNDUuMjUgMTM2LjI5IDI1MC44NCAxMzYuMzMgQyAyNTAuODYgMTQxLjUyIDI1MC42NiAxNDYuNzIgMjUwLjk5IDE1MS45MCBDIDI1My44OCAxNDguOTAgMjUzLjUzIDE0NC4yMyAyNTUuODAgMTQwLjgzIEMgMjU3LjU3IDEzNy41OSAyNjEuNDEgMTM2LjI4IDI2NC45MiAxMzYuMzQgQyAyNjguNzQgMTM2LjQwIDI3Mi44NSAxMzUuNzggMjc2LjQyIDEzNy40OCBDIDI3OS41MSAxMzkuMDQgMjgwLjc2IDE0Mi42NyAyODAuNzEgMTQ1Ljk1IEMgMjgwLjc0IDE1Ny4xOCAyODAuNzAgMTY4LjQyIDI4MC43MiAxNzkuNjYgQyAyNzIuOTIgMTc5LjY2IDI2NS4xMiAxNzkuNzAgMjU3LjMyIDE3OS42NiBDIDI1Ny4zNyAxNzQuNTkgMjU3LjM1IDE2OS41MiAyNTcuMzIgMTY0LjQ1IEMgMjU5LjU2IDE2NC40NSAyNjEuODEgMTY0LjQ0IDI2NC4wNiAxNjQuNDMgQyAyNjQuMDMgMTYwLjYyIDI2NC4yNCAxNTYuNzkgMjYzLjczIDE1My4wMSBDIDI2Mi4wOSAxNTIuNDEgMjU5LjExIDE1MS44NiAyNTguNDUgMTU0LjA0IEMgMjU1Ljg2IDE2Mi41NSAyNTMuNTEgMTcxLjE0IDI1MC45NCAxNzkuNjYgQyAyNDUuMDcgMTc5LjczIDIzOS4xOSAxNzkuNzIgMjMzLjMyIDE3OS42NiBDIDIzNS41NCAxNzIuNjYgMjM3LjU5IDE2NS42MCAyMzkuODkgMTU4LjYyIEMgMjM3Ljc5IDE1OC4yMiAyMzQuNjAgMTU3LjkwIDIzNC4zNiAxNTUuMTggQyAyMzMuNzYgMTQ4LjkxIDIzNC4yNSAxNDIuNTggMjM0LjA5IDEzNi4yOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMi4zNiAxODMuOTggQyAyNC45MyAxODQuNjMgMjcuNDIgMTg1LjU1IDI5Ljc0IDE4Ni44NSBDIDI4LjgyIDE4Ny4zNiAyNi45OCAxODguMzggMjYuMDcgMTg4Ljg5IEMgMjYuNDQgMTg5LjA2IDI3LjE5IDE4OS40MCAyNy41NyAxODkuNTYgQyAyNy43OCAxOTAuMjQgMjguMjAgMTkxLjYwIDI4LjQxIDE5Mi4yOCBDIDI4LjI5IDE5Mi45NCAyOC4wNiAxOTQuMjYgMjcuOTQgMTk0LjkyIEMgMjkuNDAgMTkyLjE0IDMyLjYwIDE5MC45NCAzNC4xMCAxODguMjEgQyAzNC43MiAxODguMjAgMzUuOTcgMTg4LjIwIDM2LjU5IDE4OC4yMCBDIDM2LjU4IDE4OS4zNyAzNi41NyAxOTAuNTUgMzYuNTYgMTkxLjczIEMgMzMuOTUgMTkyLjc5IDMxLjcyIDE5NC41MSAyOS40MSAxOTYuMDggQyAzMC41OSAxOTYuODcgMzEuNzggMTk3LjY4IDMyLjk3IDE5OC40OCBDIDMzLjgzIDE5OC4zNSAzNS41NyAxOTguMDggMzYuNDQgMTk3Ljk1IEMgMzYuNDcgMTk5LjU3IDM2LjQ5IDIwMS4yMCAzNi40OCAyMDIuODMgQyAzMy42NyAyMDEuODcgMzEuMDYgMjAwLjQ1IDI4LjQ0IDE5OS4wNyBDIDI3LjQ4IDIwMS4yMiAyNS42MSAyMDIuNjUgMjMuNzYgMjAzLjk5IEMgMjUuNTkgMjA1LjM0IDI3LjU0IDIwNi41NyAyOS4wNiAyMDguMjkgQyAzMC4yMCAyMDkuODMgMjguNzUgMjExLjc3IDI4LjQ4IDIxMy4zNyBDIDI5LjkwIDIxNC4wNCAzMS4zMyAyMTQuNzUgMzIuMDAgMjE2LjI5IEMgMzAuMjggMjE2LjMwIDI4LjU3IDIxNi4yMiAyNi44NiAyMTYuMDQgQyAyNC45MyAyMTUuMjMgMjUuOTkgMjEyLjgzIDI1LjY0IDIxMS4yNyBDIDI0Ljg2IDIxMC4yNiAyMy42MyAyMDkuNzYgMjIuNjEgMjA5LjA2IEMgMjEuMjUgMjEwLjMyIDE5LjQzIDIxMS4zMyAxOS4wNSAyMTMuMzAgQyAyMC40MyAyMTQuMDMgMjEuODUgMjE0Ljc4IDIyLjY2IDIxNi4yMSBDIDIwLjY5IDIxNi4yNiAxOC43MiAyMTYuMjUgMTYuNzQgMjE2LjIwIEMgMTUuNzYgMjEyLjYyIDE4LjAyIDIwOS4yMSAxNy4yNiAyMDUuNjcgQyAxNi4zNiAyMDUuMTIgMTUuNDEgMjA0LjY1IDE0LjQ0IDIwNC4yNSBDIDEyLjk4IDIwMC45NCAxNC44MSAxOTcuNDMgMTQuMjEgMTk0LjAzIEMgMTMuODkgMTkyLjQxIDEzLjQ5IDE5MC44MiAxMy4yMCAxODkuMjAgQyAxMy44MCAxODkuMjIgMTUuMDIgMTg5LjI0IDE1LjYzIDE4OS4yNiBDIDE1LjkyIDE5My41MCAxNS42MiAxOTcuNzQgMTUuNTEgMjAxLjk4IEMgMTUuOTAgMjAyLjQyIDE2LjY4IDIwMy4yOSAxNy4wNyAyMDMuNzIgQyAxOC41NSAyMDIuMzMgMjAuNzUgMjAxLjMyIDIxLjEyIDE5OS4xMSBDIDIxLjY2IDE5NS42NCAxOC43NyAxOTIuNTAgMTkuNjggMTg5LjAxIEMgMjAuMzIgMTg3LjIxIDIxLjQyIDE4NS42MyAyMi4zNiAxODMuOTggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzY5LjI1IDE4Ni45MCBDIDM3MS41NCAxODUuNTUgMzc0LjA0IDE4NC42NCAzNzYuNjAgMTgzLjk1IEMgMzc3LjU0IDE4NS42MCAzNzguNjMgMTg3LjE5IDM3OS4zMCAxODguOTggQyAzNzkuOTggMTkyLjA5IDM3OC4wNiAxOTQuOTggMzc3Ljc3IDE5OC4wMiBDIDM3Ny42MyAyMDAuNTkgMzc5LjgzIDIwMi4zNSAzODEuODUgMjAzLjQ3IEMgMzg0Ljc4IDIwMi43MCAzODMuMDEgMTk5LjA4IDM4My4yOCAxOTYuOTkgQyAzODMuNjEgMTk0LjA5IDM4MS45MSAxOTAuMDEgMzg1LjE2IDE4OC4zMSBDIDM4NS40MCAxODkuNTYgMzg1LjcxIDE5MC44OCAzODUuMjIgMTkyLjEzIEMgMzgzLjYzIDE5Ni4xMSAzODYuMTQgMjAwLjM2IDM4NC41NyAyMDQuMzQgQyAzODMuODUgMjA0LjU5IDM4Mi40MiAyMDUuMTAgMzgxLjcxIDIwNS4zNiBDIDM4MC43NSAyMDguOTQgMzgzLjY5IDIxMi43MyAzODEuODkgMjE2LjA4IEMgMzgwLjA3IDIxNi4zNyAzNzguMjIgMjE2LjI0IDM3Ni4zOSAyMTYuMjIgQyAzNzcuMDEgMjE0LjYzIDM3OC41NSAyMTQuMDIgMzc5Ljk2IDIxMy4zNSBDIDM3OS41MSAyMTEuNDAgMzc3LjczIDIxMC4zNSAzNzYuMzggMjA5LjA3IEMgMzc1LjM0IDIwOS43NCAzNzQuMjIgMjEwLjM0IDM3My4zNCAyMTEuMjIgQyAzNzMuMzAgMjEyLjQ3IDM3My4yNyAyMTMuNzMgMzczLjI1IDIxNC45OCBDIDM3Mi4wMiAyMTcuMTQgMzY4Ljk4IDIxNS44MCAzNjcuMDIgMjE2LjI4IEMgMzY3LjYwIDIxNC42NiAzNjkuMDcgMjEzLjk5IDM3MC41MCAyMTMuMzMgQyAzNzAuMDYgMjExLjg2IDM2OS42NiAyMTAuMzkgMzY5LjI4IDIwOC45MSBDIDM3MS4wNSAyMDcuMDQgMzczLjA4IDIwNS40NSAzNzUuMjEgMjA0LjAyIEMgMzczLjM2IDIwMi42NiAzNzEuNTQgMjAxLjE4IDM3MC41MCAxOTkuMDggQyAzNjcuOTMgMjAwLjUwIDM2NS4zNCAyMDEuOTQgMzYyLjQ5IDIwMi43NiBDIDM2Mi40OSAyMDEuMTAgMzYyLjUxIDE5OS40NSAzNjIuNTUgMTk3Ljc5IEMgMzYzLjM5IDE5Ny45NyAzNjUuMDcgMTk4LjMzIDM2NS45MCAxOTguNTEgQyAzNjcuMTQgMTk3LjcyIDM2OC4zOSAxOTYuOTQgMzY5LjY1IDE5Ni4xOCBDIDM2Ny4zMyAxOTQuNTcgMzY1LjA3IDE5Mi44MyAzNjIuNDUgMTkxLjcyIEMgMzYyLjQyIDE5MC41NSAzNjIuMzkgMTg5LjM4IDM2Mi4zNyAxODguMjEgQyAzNjIuOTkgMTg4LjIxIDM2NC4yMyAxODguMjEgMzY0Ljg1IDE4OC4yMSBDIDM2Ni4xMCAxOTAuMjcgMzY4LjAxIDE5MS44OCAzNzAuMzUgMTkyLjYwIEMgMzcwLjM3IDE5My4xMyAzNzAuNDIgMTk0LjIwIDM3MC40NCAxOTQuNzMgQyAzNzEuNjUgMTkzLjI0IDM3MS4zOSAxOTEuMzcgMzcxLjI1IDE4OS42MCBDIDM3MS42NyAxODkuMzkgMzcyLjQ5IDE4OC45OCAzNzIuOTEgMTg4Ljc3IEMgMzcxLjk5IDE4OC4zMCAzNzAuMTYgMTg3LjM3IDM2OS4yNSAxODYuOTAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjA2Ljc5IDE4Ni4zNyBDIDIwNi45MSAxODYuNDAgMjA3LjE2IDE4Ni40NiAyMDcuMjggMTg2LjQ5IEMgMjA2LjkzIDE4Ny43NSAyMDYuNjAgMTg5LjAxIDIwNi4yOCAxOTAuMjggQyAyMDUuNDUgMTkzLjQxIDIwNC41OCAxOTYuNTMgMjAzLjc0IDE5OS42NiBDIDIxMi4xOCAyMDAuNTkgMjIwLjUzIDIwMi4zNCAyMjkuMDQgMjAyLjUzIEMgMjMwLjU1IDE5OS40OSAyMzIuMTggMTk2LjUxIDIzMy44NSAxOTMuNTYgQyAyMzMuMTkgMTkzLjY5IDIzMS44NyAxOTMuOTUgMjMxLjIxIDE5NC4wOCBDIDIyOS42NCAxOTUuNDIgMjI4LjAyIDE5Ni43MiAyMjYuMzkgMTk3Ljk5IEMgMjI2Ljk4IDE5Ni40MiAyMjcuNjEgMTk0Ljg3IDIyOC4yNCAxOTMuMzIgQyAyMjguNzEgMTkyLjE2IDIyOS4xOSAxOTEuMDIgMjI5LjcxIDE4OS44OCBDIDIyOS43NCAxOTEuNDIgMjI5LjYwIDE5Mi45NSAyMjkuMjkgMTk0LjQ3IEMgMjMwLjQ3IDE5Mi45NCAyMzEuNzUgMTkxLjQ5IDIzMy4xMSAxOTAuMTIgTCAyMzIuMTEgMTkyLjEzIEMgMjMyLjgyIDE5Mi42MyAyMzMuNTQgMTkzLjE0IDIzNC4yNiAxOTMuNjUgTCAyMzQuODUgMTkxLjE5IEMgMjM1LjQyIDE5OS41MSAyMjguMTkgMjA1LjQ2IDIyNi4zOCAyMTMuMjIgQyAyMzEuNzMgMjEzLjI1IDIzNy4wOCAyMTMuMjEgMjQyLjQ0IDIxMy4yMiBDIDI0Mi40NSAyMjcuNjcgMjQyLjQ0IDI0Mi4xMiAyNDIuNDUgMjU2LjU4IEMgMjM2LjkwIDI1Ni41MyAyMzEuMzUgMjU2LjYzIDIyNS44MSAyNTYuNTAgQyAyMjUuODAgMjQyLjU3IDIyNi4wOSAyMjguNjMgMjI1LjY2IDIxNC43MiBDIDIyNC40NCAyMTcuMjggMjIzLjQ0IDIxOS45NCAyMjIuMjUgMjIyLjUyIEMgMjE3LjE4IDIzMi45NyAyMTUuNjkgMjQ0LjgxIDIxMC4xMiAyNTUuMDQgQyAyMDcuNzcgMjU4LjE3IDIwNS4wOCAyNjEuMTcgMjAxLjg3IDI2My40MyBDIDE5Ni44NiAyNjMuNTQgMTkxLjg4IDI2Mi43NiAxODYuODggMjYyLjU0IEMgMTgxLjY4IDI2Mi4yNCAxNzcuMDQgMjU5LjY5IDE3Mi4zMiAyNTcuNzggQyAxNjkuNzIgMjY1Ljk0IDE2Ni45OCAyNzQuMDYgMTY0LjE1IDI4Mi4xNCBDIDE2My44NyAyODAuOTUgMTYzLjY0IDI3OS43NSAxNjMuNDQgMjc4LjU1IEMgMTYyLjE4IDI3OS41NyAxNjEuMjcgMjgwLjkyIDE2MC4xOSAyODIuMTEgQyAxNjAuNzggMjgwLjIwIDE2MS41MyAyNzguMzMgMTYyLjYxIDI3Ni42NSBDIDE2MS41MiAyNzYuNzQgMTYwLjQzIDI3Ni44MyAxNTkuMzQgMjc2LjkyIEMgMTU5LjA2IDI3Ny42MCAxNTguNTAgMjc4Ljk3IDE1OC4yMiAyNzkuNjYgQyAxNTcuOTggMjc5LjYyIDE1Ny40OCAyNzkuNTUgMTU3LjIzIDI3OS41MSBDIDE1Ny42MCAyNzguODggMTU4LjMzIDI3Ny42MiAxNTguNzAgMjc2Ljk5IEMgMTU3Ljc5IDI3Ni4zMSAxNTYuODAgMjc1Ljc1IDE1NS44MSAyNzUuMTkgQyAxNTUuODYgMjc2LjY2IDE1NS4zNSAyNzcuOTAgMTU0LjI3IDI3OC45NCBDIDE1NC41MCAyNzcuNDAgMTU0LjgyIDI3NS44NyAxNTUuMTMgMjc0LjM2IEwgMTU2LjY2IDI3NC42MSBDIDE1Ni4wNSAyNzMuNjcgMTU1LjQ0IDI3Mi43NCAxNTQuODEgMjcxLjgzIEMgMTUzLjkwIDI3My42NSAxNTIuOTkgMjc1LjUwIDE1MS45OSAyNzcuMjkgQyAxNTEuMzIgMjc2Ljk4IDE0OS45OSAyNzYuMzggMTQ5LjMyIDI3Ni4wOCBDIDE0OS43MyAyNzUuMDAgMTUwLjEyIDI3My45MSAxNTAuNTAgMjcyLjgzIEMgMTUwLjg0IDI3My42MiAxNTEuNTEgMjc1LjIwIDE1MS44NSAyNzUuOTkgTCAxNTEuMTIgMjczLjE0IEwgMTUyLjQ0IDI3My42OCBDIDE1Mi45MSAyNzIuNDcgMTUzLjQxIDI3MS4yNyAxNTMuODkgMjcwLjA2IEMgMTU0LjMxIDI2OS43NSAxNTUuMTQgMjY5LjE1IDE1NS41NiAyNjguODUgQyAxNTUuMzMgMjY5LjM0IDE1NC44OCAyNzAuMzMgMTU0LjY2IDI3MC44MiBDIDE1Ni4xNSAyNzEuODYgMTU2LjYwIDI3My44OSAxNTguMDUgMjc0Ljg2IEMgMTU5Ljk5IDI3NC4wNSAxNjAuMzggMjcxLjM5IDE2MS42NSAyNjkuODAgQyAxNjEuMzcgMjcyLjExIDE2MC41NCAyNzQuMjkgMTU5LjM3IDI3Ni4yOSBDIDE2MC41MiAyNzYuMTkgMTYxLjY4IDI3Ni4xMSAxNjIuODMgMjc2LjAzIEMgMTY1LjEwIDI3MS4yNyAxNjYuNzAgMjY2LjI0IDE2OC4wNSAyNjEuMTUgQyAxNjUuNjQgMjU5Ljg0IDE2My4zMyAyNTguMzEgMTYwLjc2IDI1Ny4zNCBDIDE1Ny41NCAyNTYuMzEgMTU0LjEzIDI1Ni4wMiAxNTAuOTUgMjU0Ljg4IEMgMTQ3Ljg5IDI1My44NyAxNDUuMDkgMjUyLjIxIDE0Mi4wMyAyNTEuMjEgQyAxMzguOTUgMjU0LjI2IDEzNi43MSAyNTguMDQgMTM0LjA5IDI2MS40OCBDIDEzMi41OSAyNjMuNDggMTMxLjQ0IDI2NS43MSAxMzAuMjggMjY3LjkyIEMgMTMxLjYxIDI2My45MiAxMzMuNDIgMjYwLjEwIDEzNS43NiAyNTYuNTkgQyAxMzAuNjkgMjU2LjU0IDEyNS42MiAyNTYuNjAgMTIwLjU1IDI1Ni41NCBDIDEyMC41NiAyNDIuMTQgMTIwLjY5IDIyNy43MyAxMjAuNDkgMjEzLjM0IEMgMTI2LjA0IDIxMy4wOSAxMzEuNjAgMjEzLjI3IDEzNy4xNiAyMTMuMjIgQyAxMzcuMjYgMjI2LjgyIDEzNi45MCAyNDAuNDIgMTM3LjM0IDI1NC4wMSBDIDE0NS4yOSAyNDAuMzAgMTUzLjAzIDIyNS45OCAxNjUuMDUgMjE1LjMzIEMgMTczLjE2IDIwOC4zMyAxODUuNDkgMjA5LjY3IDE5NC4yNSAyMTQuNzQgQyAxOTkuMzQgMjA1LjcyIDIwMi43MCAxOTUuODYgMjA2Ljc5IDE4Ni4zNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTEuMTQgMTkwLjg5IEMgMjExLjgwIDE4OS40MCAyMTIuNDkgMTg3Ljg3IDIxMy43OSAxODYuODMgQyAyMTMuMTEgMTg4LjQ3IDIxMi4yNyAxOTAuMDYgMjEyLjA5IDE5MS44NiBDIDIxMy40MyAxOTAuNjcgMjE0LjY4IDE4OS4zOSAyMTUuOTUgMTg4LjEyIEMgMjE1LjQ1IDE4OS4zMiAyMTQuOTUgMTkwLjUzIDIxNC40NiAxOTEuNzQgQyAyMTYuODIgMTkyLjI3IDIxOC4xNSAxODkuOTIgMjE5Ljg5IDE4OC45NCBDIDIxOS40MCAxODkuODAgMjE4LjQyIDE5MS41NCAyMTcuOTMgMTkyLjQwIEMgMjE4LjY0IDE5Mi4xMyAyMjAuMDcgMTkxLjU4IDIyMC43OSAxOTEuMzEgQyAyMjEuMDMgMTkxLjY5IDIyMS41MSAxOTIuNDYgMjIxLjc1IDE5Mi44NCBDIDIyMi4yNiAxOTEuOTUgMjIzLjI3IDE5MC4xNyAyMjMuNzggMTg5LjI4IEwgMjIzLjYwIDE5My40NCBDIDIyNC43NiAxOTIuMzQgMjI1Ljg4IDE5MS4yMSAyMjYuOTYgMTkwLjA1IEMgMjI2Ljc3IDE5MC43OSAyMjYuMzkgMTkyLjI4IDIyNi4yMCAxOTMuMDMgTCAyMjguMjQgMTkzLjMyIEMgMjI3LjYxIDE5NC44NyAyMjYuOTggMTk2LjQyIDIyNi4zOSAxOTcuOTkgQyAyMjguMDIgMTk2LjcyIDIyOS42NCAxOTUuNDIgMjMxLjIxIDE5NC4wOCBDIDIzMS44NyAxOTMuOTUgMjMzLjE5IDE5My42OSAyMzMuODUgMTkzLjU2IEMgMjMyLjE4IDE5Ni41MSAyMzAuNTUgMTk5LjQ5IDIyOS4wNCAyMDIuNTMgQyAyMjAuNTMgMjAyLjM0IDIxMi4xOCAyMDAuNTkgMjAzLjc0IDE5OS42NiBDIDIwNC41OCAxOTYuNTMgMjA1LjQ1IDE5My40MSAyMDYuMjggMTkwLjI4IEMgMjA3Ljg5IDE5MC40OCAyMDkuNTIgMTkwLjY5IDIxMS4xNCAxOTAuODkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk0LjQ5IDIyOS40OSBDIDI5NC40OSAyMjAuMjEgMjk0LjQyIDIxMC45NCAyOTQuNTAgMjAxLjY3IEMgMzAwLjA2IDIwMS42OSAzMDUuNjIgMjAxLjcyIDMxMS4xOSAyMDEuNjcgQyAzMTEuMTggMjA1LjUzIDMxMS4xOCAyMDkuMzggMzExLjE4IDIxMy4yNCBDIDMxOC43MiAyMTMuMjAgMzI2LjI3IDIxMy4yMyAzMzMuODIgMjEzLjIzIEMgMzMzLjgyIDIyMC40OCAzMzMuODYgMjI3Ljc0IDMzMy44MCAyMzUuMDAgQyAzMzQuMTcgMjQzLjU4IDMyMy4wOCAyNDcuNzkgMzI0LjI5IDI1Ni41NiBDIDMxOC4xMiAyNTYuNTcgMzExLjk1IDI1Ni41OCAzMDUuNzggMjU2LjU1IEMgMzA1Ljg2IDI1My45NCAzMDUuMzkgMjUxLjAzIDMwNy4wNCAyNDguNzggQyAzMDkuNzggMjQ0LjYyIDMxMi45MCAyNDAuNzEgMzE1LjU3IDIzNi41MCBDIDMxNi45MyAyMzQuNDMgMzE2LjI3IDIzMS44MSAzMTYuNTAgMjI5LjQ4IEMgMzA5LjE2IDIyOS41MCAzMDEuODIgMjI5LjQ4IDI5NC40OSAyMjkuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMC4wMCAyMDcuNDYgQyAxLjYyIDIyNS44NSAzLjk3IDI0NC4zMyA5Ljg5IDI2MS45MCBDIDI2LjgxIDMxNS4wNSA2Ny40MCAzNTkuNzYgMTE4LjE2IDM4Mi42NCBDIDE0MS4xMyAzOTMuMTQgMTY2LjE3IDM5OC43NiAxOTEuMzYgNDAwLjAwIEwgMC4wMCA0MDAuMDAgTCAwLjAwIDIwNy40NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzODIuODAgMjgxLjg2IEMgMzkzLjI5IDI1OC45MCAzOTguNTcgMjMzLjg2IDQwMC4wMCAyMDguNzMgTCA0MDAuMDAgNDAwLjAwIEwgMjEwLjI5IDQwMC4wMCBDIDIyNC42OCAzOTguODkgMjM5LjA4IDM5Ny4xMCAyNTIuOTkgMzkzLjExIEMgMzA5Ljk1IDM3Ny44MyAzNTguODIgMzM1LjY4IDM4Mi44MCAyODEuODYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gNzIuNTUgMjEzLjIwIEMgODMuMzggMjEzLjI1IDk0LjIxIDIxMy4yMCAxMDUuMDQgMjEzLjIzIEMgMTA4LjA4IDIxMy4yNCAxMTEuNDMgMjEzLjk3IDExMy40OCAyMTYuNDAgQyAxMTUuNDMgMjE4LjgxIDExNS41OSAyMjIuMDMgMTE1LjU5IDIyNS4wMCBDIDExNS41NiAyMzUuNTEgMTE1LjU5IDI0Ni4wMiAxMTUuNTggMjU2LjU0IEMgMTA5Ljk5IDI1Ni41OCAxMDQuNDAgMjU2LjU5IDk4LjgwIDI1Ni41MiBDIDk4LjY4IDI0Ny4yMyA5OS4zMSAyMzcuODggOTguNDYgMjI4LjYzIEMgOTUuMzMgMjI4LjQ1IDkyLjE5IDIyOC40NSA4OS4wNSAyMjguNDMgQyA4OC42MSAyMzUuODcgODkuMjAgMjQzLjM0IDg4Ljc0IDI1MC43OCBDIDg4LjUxIDI1My43MCA4Ni4wMiAyNTYuMDUgODMuMTUgMjU2LjMyIEMgNzcuNjMgMjU2Ljg2IDcyLjA2IDI1Ni40MyA2Ni41MiAyNTYuNTUgQyA2Ni41NSAyNTEuMjYgNjYuNTIgMjQ1Ljk2IDY2LjU0IDI0MC42NiBDIDY4LjQ0IDI0MC4yOSA3MS4wNyAyNDEuNDUgNzIuNDkgMjM5Ljc5IEMgNzIuNjUgMjMwLjkzIDcyLjUxIDIyMi4wNiA3Mi41NSAyMTMuMjAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjQ3LjI1IDIxMy4yNSBDIDI2MS42OSAyMTMuMjQgMjc2LjEzIDIxMy4xMyAyOTAuNTYgMjEzLjMxIEMgMjkwLjM3IDIyNy43MiAyOTAuNTEgMjQyLjE0IDI5MC40OSAyNTYuNTYgQyAyODQuOTIgMjU2LjU0IDI3OS4zNSAyNTYuNjMgMjczLjc4IDI1Ni41MSBDIDI3My44NiAyNDcuMTYgMjczLjczIDIzNy44MiAyNzMuODUgMjI4LjQ3IEMgMjcwLjQ5IDIyOC40NiAyNjcuMTQgMjI4LjQ0IDI2My43OSAyMjguNTEgQyAyNjMuODMgMjM3Ljg2IDI2My43NSAyNDcuMjIgMjYzLjg0IDI1Ni41OCBDIDI1OC4zMSAyNTYuNTQgMjUyLjc5IDI1Ni41OSAyNDcuMjcgMjU2LjU1IEMgMjQ3LjI3IDI0Mi4xMSAyNDcuMzAgMjI3LjY4IDI0Ny4yNSAyMTMuMjUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk3LjEwIDIxOS4xMiBDIDE5NS45OSAyMTcuNDkgMTk2LjM2IDIxNS43MCAxOTcuNjQgMjE0LjMxIEMgMjA0LjYzIDIxOC4zNCAyMTMuMDEgMjE4LjUzIDIyMC44MyAyMTkuNDAgQyAyMTguMTEgMjI0LjUxIDIxNi41MyAyMzAuMTAgMjE0LjQ4IDIzNS40OSBDIDIwOS4yMSAyMzQuNzUgMjAzLjk5IDIzMy43NSAxOTguNzEgMjMzLjE0IEMgMTk4LjY4IDIyOC40MyAxOTkuNDQgMjIzLjQ0IDE5Ny4xMCAyMTkuMTIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTkwLjA5IDIyMy4xNCBDIDE5Mi4wNCAyMjEuOTUgMTkzLjE0IDIxOS44NCAxOTUuMDYgMjE4LjYxIEMgMTk3LjE2IDIyNC41MSAxOTYuMjcgMjMwLjg4IDE5NS42OSAyMzYuOTYgQyAxOTEuMzcgMjM1LjMxIDE4Ni43MiAyMzUuMzAgMTgyLjE3IDIzNS4yNyBDIDE4My4wMiAyMzAuNDQgMTg1LjY2IDIyNS41NCAxOTAuMDkgMjIzLjE0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE1Mi40OSAyMzMuOTIgQyAxNTUuODIgMjMwLjIzIDE1OC4yMiAyMjUuNjkgMTYyLjA5IDIyMi41MSBDIDE2OS4xNCAyMjIuNDAgMTc2LjYzIDIyNC4zMyAxODIuMTggMjI4LjgyIEMgMTc5LjUxIDIzMi41NiAxNzYuODggMjM2LjM4IDE3NS4yOCAyNDAuNzIgQyAxNjcuNjQgMjM4LjY0IDE1OS45NiAyMzYuNTYgMTUyLjQ5IDIzMy45MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTkuNTUgMjUwLjE1IEMgMjAyLjcwIDI1MC44OCAyMDUuODEgMjUxLjgyIDIwOC44OSAyNTIuODEgQyAyMDYuOTggMjU2LjAyIDIwNC40OCAyNTkuMTUgMjAwLjk1IDI2MC42NSBDIDE5MS41NSAyNjEuMzEgMTgyLjAyIDI1OS4zNiAxNzMuNDcgMjU1LjQzIEMgMTczLjQ3IDI1NC44NCAxNzMuNDcgMjUzLjY4IDE3My40NyAyNTMuMDkgQyAxODEuODAgMjU1LjIzIDE5MC40MCAyNTcuNTIgMTk5LjAzIDI1NS42NSBDIDE5OS4yNiAyNTMuODIgMTk5LjQyIDI1MS45OSAxOTkuNTUgMjUwLjE1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDEzNC4wOSAyNjEuNDggQyAxMzYuNzEgMjU4LjA0IDEzOC45NSAyNTQuMjYgMTQyLjAzIDI1MS4yMSBDIDE0NS4wOSAyNTIuMjEgMTQ3Ljg5IDI1My44NyAxNTAuOTUgMjU0Ljg4IEMgMTU0LjEzIDI1Ni4wMiAxNTcuNTQgMjU2LjMxIDE2MC43NiAyNTcuMzQgQyAxNjMuMzMgMjU4LjMxIDE2NS42NCAyNTkuODQgMTY4LjA1IDI2MS4xNSBDIDE2Ni43MCAyNjYuMjQgMTY1LjEwIDI3MS4yNyAxNjIuODMgMjc2LjAzIEMgMTYxLjY4IDI3Ni4xMSAxNjAuNTIgMjc2LjE5IDE1OS4zNyAyNzYuMjkgQyAxNjAuNTQgMjc0LjI5IDE2MS4zNyAyNzIuMTEgMTYxLjY1IDI2OS44MCBDIDE2MC4zOCAyNzEuMzkgMTU5Ljk5IDI3NC4wNSAxNTguMDUgMjc0Ljg2IEMgMTU2LjYwIDI3My44OSAxNTYuMTUgMjcxLjg2IDE1NC42NiAyNzAuODIgQyAxNTQuODggMjcwLjMzIDE1NS4zMyAyNjkuMzQgMTU1LjU2IDI2OC44NSBDIDE1NS4xNCAyNjkuMTUgMTU0LjMxIDI2OS43NSAxNTMuODkgMjcwLjA2IEMgMTUzLjQwIDI3MC40MiAxNTIuNDEgMjcxLjE1IDE1MS45MiAyNzEuNTIgQyAxNTEuMzggMjcxLjM4IDE1MC4zMCAyNzEuMTIgMTQ5Ljc2IDI3MC45OSBDIDE0OC41OCAyNzIuOTIgMTQ3LjMxIDI3NC44NiAxNDUuMzggMjc2LjEyIEMgMTQ2LjEwIDI3My4zNyAxNDkuNzYgMjcwLjIzIDE0Ni40MyAyNjcuOTIgQyAxNDYuNTUgMjY2Ljg5IDE0Ni42OCAyNjUuODcgMTQ2LjgwIDI2NC44NiBDIDE0Ni4wMiAyNjUuOTggMTQ1LjIzIDI2Ny4xMCAxNDQuNDYgMjY4LjI0IEwgMTQzLjM3IDI2OS42NiBMIDE0My42MCAyNjcuMDQgQyAxNDMuNzkgMjY2LjIyIDE0NC4xNyAyNjQuNTcgMTQ0LjM2IDI2My43NCBDIDE0My40OSAyNjQuODggMTQyLjYyIDI2Ni4wMSAxNDEuNzkgMjY3LjE4IEMgMTQxLjM2IDI2Ni42MyAxNDAuNTAgMjY1LjUzIDE0MC4wNyAyNjQuOTcgQyAxNDAuNTIgMjYzLjU0IDE0MS4wMCAyNjIuMTIgMTQxLjQ3IDI2MC43MCBDIDE0MC44NSAyNjEuNTggMTQwLjIyIDI2Mi40NiAxMzkuNjAgMjYzLjM1IEMgMTM1LjgzIDI2Mi45NCAxMzUuMzggMjY3LjE2IDEzMy4wNiAyNjkuMTEgQyAxMzMuNzcgMjY2Ljk2IDEzNC43OCAyNjQuOTQgMTM1Ljc5IDI2Mi45MiBDIDEzNS4zNyAyNjIuNTYgMTM0LjUyIDI2MS44NCAxMzQuMDkgMjYxLjQ4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEzOS42MCAyNjMuMzUgQyAxNDAuMjIgMjYyLjQ2IDE0MC44NSAyNjEuNTggMTQxLjQ3IDI2MC43MCBDIDE0MS4wMCAyNjIuMTIgMTQwLjUyIDI2My41NCAxNDAuMDcgMjY0Ljk3IEMgMTM5LjQ2IDI2Ny42MSAxMzcuNzAgMjY5Ljc2IDEzNS4yMiAyNzAuODMgQyAxMzYuNTUgMjY4LjI2IDEzOC4xMSAyNjUuODIgMTM5LjYwIDI2My4zNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNi4xNiAyNjMuMTYgQyAzNy4xMSAyNjIuODEgMzguMDYgMjYyLjQ3IDM5LjAxIDI2Mi4xNCBDIDQwLjIyIDI2Ni4xNSA0My41MCAyNjkuNzcgNDMuMjQgMjc0LjA2IEMgNDAuNTAgMjc2LjE0IDM3LjE5IDI3Ny4yOCAzNC4xOCAyNzguOTAgQyAzMy40MSAyNzcuMzMgMzIuNjMgMjc1Ljc2IDMxLjg5IDI3NC4xOCBDIDM0LjM2IDI3My4wMSAzNi44MyAyNzEuODYgMzkuMzEgMjcwLjczIEMgMzguMjggMjY4LjE5IDM3LjIwIDI2NS42OSAzNi4xNiAyNjMuMTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzU3Ljg5IDI2Mi41NiBDIDM1OS41NSAyNjMuMjEgMzYxLjIwIDI2My44NyAzNjIuODcgMjY0LjUyIEMgMzYzLjE0IDI2NS45MiAzNjMuMTkgMjY3LjM0IDM2My4wNiAyNjguNzYgQyAzNjQuOTYgMjY3Ljk3IDM2Ni44NCAyNjcuMTQgMzY4LjczIDI2Ni4zMSBDIDM2Ny45NiAyNjguMDQgMzY3LjE5IDI2OS43NyAzNjYuNDcgMjcxLjUyIEMgMzYzLjg5IDI3Mi43MiAzNjEuMjQgMjczLjc0IDM1OC42MSAyNzQuODAgQyAzNjAuMTIgMjc1Ljg0IDM2MS43OCAyNzYuNjIgMzYzLjQ5IDI3Ny4yNiBDIDM2Mi44MSAyNzguOTAgMzYyLjEwIDI4MC41MiAzNjEuMzggMjgyLjE0IEMgMzU5LjQ0IDI4MS4yNCAzNTcuNTYgMjgwLjIyIDM1NS43MyAyNzkuMTQgQyAzNTUuNzUgMjc4LjI5IDM1NS43OSAyNzYuNTggMzU1LjgyIDI3NS43MiBDIDM1NC4yMyAyNzYuMzIgMzUyLjY0IDI3Ni45MiAzNTEuMDYgMjc3LjUyIEMgMzUxLjY4IDI3NS44NiAzNTIuMTYgMjc0LjAzIDM1My40MiAyNzIuNzMgQyAzNTUuODIgMjcxLjYwIDM1OC4zNyAyNzAuODEgMzYwLjgzIDI2OS44MSBDIDM1OS4zMyAyNjguNjQgMzU3LjYyIDI2Ny44MCAzNTUuODcgMjY3LjA3IEMgMzU2LjU1IDI2NS41NiAzNTcuMjIgMjY0LjA2IDM1Ny44OSAyNjIuNTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTQxLjc5IDI2Ny4xOCBDIDE0Mi42MiAyNjYuMDEgMTQzLjQ5IDI2NC44OCAxNDQuMzYgMjYzLjc0IEMgMTQ0LjE3IDI2NC41NyAxNDMuNzkgMjY2LjIyIDE0My42MCAyNjcuMDQgQyAxNDIuODMgMjY5LjQ1IDE0MS45OCAyNzIuMzUgMTM5LjMwIDI3My4yMiBDIDE0MC4wNyAyNzEuMTggMTQwLjc3IDI2OS4xMCAxNDEuNzkgMjY3LjE4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE0NC40NiAyNjguMjQgQyAxNDUuMjMgMjY3LjEwIDE0Ni4wMiAyNjUuOTggMTQ2LjgwIDI2NC44NiBDIDE0Ni42OCAyNjUuODcgMTQ2LjU1IDI2Ni44OSAxNDYuNDMgMjY3LjkyIEMgMTQ1LjcxIDI2OS44NiAxNDQuOTEgMjcxLjc3IDE0NC4yMCAyNzMuNzEgQyAxNDMuOTggMjczLjY4IDE0My41NCAyNzMuNjAgMTQzLjMyIDI3My41NiBDIDE0My42NyAyNzEuNzggMTQzLjkxIDI2OS45NyAxNDQuNDYgMjY4LjI0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM5LjYzIDI3OS4yOSBDIDQxLjYyIDI3OC4yNCA0My42MCAyNzcuMTcgNDUuNjAgMjc2LjE0IEMgNDYuMzYgMjc3LjU5IDQ3LjEzIDI3OS4wNSA0Ny44OCAyODAuNTEgQyA0NS44OCAyODEuNTkgNDMuODkgMjgyLjY2IDQxLjg3IDI4My43MCBDIDQxLjEzIDI4Mi4yMyA0MC4zOCAyODAuNzYgMzkuNjMgMjc5LjI5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMxNS4xMiAyNzUuODggQyAzMTYuNTUgMjc3Ljg1IDMxNy4zMyAyODAuMTggMzE4LjEzIDI4Mi40NiBDIDMxOC42MyAyODEuMTMgMzE5LjE2IDI3OS44MSAzMTkuNzIgMjc4LjUwIEMgMzE5LjY4IDI4Mi40MiAzMTguODAgMjg2LjgwIDMyMi4wNSAyODkuNzYgTCAzMjIuMTUgMjg5LjkwIEMgMzIxLjU0IDI5MC41NyAzMjAuOTQgMjkxLjI2IDMyMC4zNSAyOTEuOTUgQyAzMTguMTkgMjg4LjY3IDMxNi4xNSAyODQuNTQgMzExLjcwIDI4NC4yMyBDIDMxMi44MiAyODMuOTMgMzEzLjk1IDI4My42NCAzMTUuMDggMjgzLjM1IEMgMzEzLjYxIDI4Mi43NSAzMTIuMzUgMjgxLjg3IDMxMS4zMCAyODAuNjkgQyAzMTIuNzggMjgxLjIwIDMxNC4yMyAyODEuNzcgMzE1LjY3IDI4Mi4zOSBDIDMxNC40NCAyODAuODcgMzEzLjIyIDI3OS4zNiAzMTIuMTggMjc3LjcyIEMgMzEzLjgwIDI3OC42NCAzMTUuMzEgMjc5LjczIDMxNi43MSAyODEuMDAgQyAzMTYuMzEgMjc5LjcyIDMxNS41MiAyNzcuMTYgMzE1LjEyIDI3NS44OCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA3Ny44OSAyODkuMDIgQyA4Mi42NyAyODUuOTMgODYuNjYgMjgxLjgzIDg5Ljc3IDI3Ny4wNyBDIDkwLjE4IDI3Ny4zOSA5MS4wMSAyNzguMDIgOTEuNDIgMjc4LjM0IEMgOTEuNzAgMjc5LjExIDkyLjI2IDI4MC42NCA5Mi41MyAyODEuNDAgQyA4OS4xOCAyODUuMTAgODUuMTIgMjg4LjEyIDgxLjA5IDI5MS4wNCBDIDgxLjI1IDI5Mi4yMyA4MS41MCAyOTMuNDEgODEuNzMgMjk0LjYwIEMgODMuMjYgMjkzLjk0IDg0LjgxIDI5My44NyA4Ni40MCAyOTQuNDAgQyA4Ny4zNyAyOTYuNjUgODguNDAgMjk4LjkzIDg4LjM0IDMwMS40NSBDIDg1Ljg1IDI5OS41OSA4NC4zOSAyOTYuNTUgODEuNTMgMjk1LjE5IEMgODAuMTMgMjkzLjI0IDc5LjQzIDI5MC44OCA3Ny44OSAyODkuMDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQzLjcyIDI4OS43MyBDIDM0Ni4wMyAyODYuMjcgMzQ3LjM3IDI4MS45MiAzNTAuODUgMjc5LjQxIEMgMzUzLjkyIDI4MS4wMSAzNTYuOTMgMjgyLjcyIDM1OS45NSAyODQuNDMgQyAzNTkuMTQgMjg1LjkzIDM1OC4zMSAyODcuNDEgMzU3LjQ4IDI4OC44OSBDIDM1NS4wNSAyODcuNTAgMzUyLjY1IDI4Ni4wNCAzNTAuMTUgMjg0LjgwIEMgMzQ4Ljk1IDI4Ni45OSAzNDcuNjAgMjg5LjEwIDM0Ni4yMyAyOTEuMTkgQyAzNDUuNjAgMjkwLjgzIDM0NC4zNSAyOTAuMTAgMzQzLjcyIDI4OS43MyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA0My40MiAyODkuNTYgQyA0NS40OSAyODcuNDUgNDcuMzYgMjg1LjE2IDQ5LjIwIDI4Mi44NSBDIDUwLjA5IDI4NC4yNyA1MC45NyAyODUuNzAgNTEuODYgMjg3LjEyIEMgNDkuODggMjg5LjM0IDQ3Ljc2IDI5MS40NiA0Ni4xNCAyOTMuOTYgQyA0Ni41MyAyOTQuMzcgNDcuMzEgMjk1LjE4IDQ3LjcwIDI5NS41OSBDIDQ5LjkxIDI5NC4xMyA1Mi4xMCAyOTIuNjUgNTQuMTkgMjkxLjAzIEMgNTUuMTYgMjkyLjMxIDU2LjE0IDI5My41OCA1Ni45MSAyOTUuMDAgQyA1My44OCAyOTYuODMgNTAuNzQgMzAxLjI4IDQ2Ljg1IDI5OS40MCBDIDQzLjQ0IDI5Ni4zMyA0MS41NSAyOTEuOTUgMzkuMjAgMjg4LjA4IEMgMzkuODkgMjg3LjczIDQxLjI3IDI4Ny4wNCA0MS45NyAyODYuNjkgQyA0Mi4zMyAyODcuNDEgNDMuMDYgMjg4Ljg0IDQzLjQyIDI4OS41NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA5Ny44NiAyODguMDAgQyAxMDAuNjEgMjg2LjQ0IDEwMy41MiAyODUuMTkgMTA2LjE2IDI4My40MyBDIDEwNi4yOSAyODQuMDkgMTA2LjU2IDI4NS40MCAxMDYuNjkgMjg2LjA1IEMgMTA0LjEwIDI4OC4wNyAxMDEuMTkgMjg5LjYxIDk4LjM3IDI5MS4yNiBDIDk3LjMyIDI5Ny42MiA5OC4wNyAzMDQuMDggOTcuMjQgMzEwLjQ2IEMgOTUuNjMgMzA5LjMxIDk0LjExIDMwOC4wNSA5Mi42NCAzMDYuNzMgQyA5Mi44NSAzMDIuNTUgOTMuNDAgMjk4LjM4IDk0LjU2IDI5NC4zNSBDIDk1LjIyIDI5Mi4wNyA5NS43MCAyODkuMzYgOTcuODYgMjg4LjAwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDMwNi40NyAyODYuNzYgQyAzMDYuOTIgMjg0LjgyIDMwOC41OSAyODUuMjMgMzA5LjI4IDI4Ni43OCBDIDMwOS41OSAyODYuNjQgMzEwLjIzIDI4Ni4zNCAzMTAuNTUgMjg2LjE5IEMgMzExLjEzIDI5MC40MSAzMTIuNTggMjk0LjU2IDMxNi4xNSAyOTcuMTUgQyAzMTUuMzcgMjk4LjAxIDMxNC41OSAyOTguODYgMzEzLjgxIDI5OS43MiBDIDMxMS40NyAyOTYuNzQgMzA4LjQ3IDI5NC40MSAzMDUuNDEgMjkyLjIyIEMgMzA2LjI3IDI5Mi4yMyAzMDcuOTcgMjkyLjI1IDMwOC44MiAyOTIuMjYgQyAzMDcuNzEgMjkwLjk4IDMwNi41OSAyODkuNzIgMzA1LjQ5IDI4OC40NCBDIDMwNi4xNCAyODguNTUgMzA3LjQ1IDI4OC43NSAzMDguMTAgMjg4Ljg2IEMgMzA3LjY5IDI4OC4zMyAzMDYuODggMjg3LjI5IDMwNi40NyAyODYuNzYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjc4Ljc4IDI5Mi4wMCBDIDI4MC4xNiAyOTAuMTcgMjgwLjUzIDI4Ny45NCAyODAuOTUgMjg1Ljc1IEMgMjgyLjM5IDI5My43OSAyODYuMzkgMzAwLjkxIDI5MC4xNyAzMDguMDMgQyAyOTEuMjAgMzAzLjkxIDI5Mi4xNSAyOTkuNzUgMjkzLjY4IDI5NS43NyBDIDI5My4zNSAyOTQuOTIgMjkzLjAyIDI5NC4wNyAyOTIuNzAgMjkzLjIzIEMgMjkzLjAyIDI5MS45MyAyOTMuMzQgMjkwLjYzIDI5My42NyAyODkuMzMgQyAyOTUuMzUgMjg5LjUwIDI5Ny4xNyAyODkuNDcgMjk4LjU4IDI5MC41NyBDIDMwMi4xMSAyOTIuOTEgMzA1Ljc4IDI5NS4wNyAzMDkuMDcgMjk3Ljc2IEMgMzEwLjY0IDI5OC44MiAzMTAuOTMgMzAwLjgwIDMxMS42MCAzMDIuNDQgQyAzMTAuMjQgMzAzLjc4IDMwOC45MiAzMDUuMTUgMzA3LjYzIDMwNi41NiBDIDMwNy41MCAzMDUuMzcgMzA3LjM2IDMwNC4xOCAzMDcuMjMgMzAzLjAwIEMgMzA0LjA3IDMwMC44MiAzMDEuOTUgMjk3LjUxIDI5OC44NyAyOTUuMjcgQyAyOTcuMTEgMjk1LjI4IDI5NS40NiAyOTUuOTkgMjkzLjc4IDI5Ni40MCBDIDI5My42MiAyOTguMTAgMjkzLjQzIDI5OS44MSAyOTMuMjIgMzAxLjUxIEMgMjk0LjMyIDMwMS45NSAyOTUuNDIgMzAyLjQxIDI5Ni41MyAzMDIuODcgQyAyOTUuNTcgMzA0LjA1IDI5NC42MyAzMDUuMjMgMjkzLjYzIDMwNi4zNiBDIDI5My4wNCAzMDguNTIgMjkyLjE1IDMxMC41NyAyOTEuMzUgMzEyLjY1IEMgMjkxLjg4IDMxMi43NiAyOTIuOTQgMzEyLjk4IDI5My40NyAzMTMuMDkgQyAyOTIuMzcgMzE1LjEyIDI5My4yNyAzMTcuMjkgMjkzLjYzIDMxOS4zNyBDIDI3Mi45NSAzMzQuODYgMjQ4Ljc2IDM0Ni4wNyAyMjMuMDcgMzQ5LjczIEMgMTk2LjkyIDM1My4zNSAxNjkuNjYgMzUxLjA0IDE0NS4xMCAzNDEuMDUgQyAxMzQuNTYgMzM3LjE3IDEyNC45NSAzMzEuMzMgMTE1LjI4IDMyNS43NCBDIDExNS40NCAzMjUuNTYgMTE1Ljc1IDMyNS4yMCAxMTUuOTEgMzI1LjAyIEMgMTE2LjEyIDMyNC45NyAxMTYuNTUgMzI0Ljg3IDExNi43NiAzMjQuODIgQyAxMTUuODMgMzIyLjI1IDExNi4wMSAzMTkuNTQgMTE2LjU1IDMxNi45MiBDIDExNy4xNCAzMTYuMDIgMTE3LjY4IDMxNS4wOSAxMTguMTggMzE0LjE0IEMgMTE4Ljc0IDMxMi4wNSAxMTUuNDMgMzE1LjEyIDExNC40NCAzMTUuMTYgQyAxMTMuNzcgMzE4LjI4IDExMy4yOSAzMjEuODkgMTE1LjEwIDMyNC43NSBDIDExNC45MyAzMjQuODcgMTE0LjYwIDMyNS4xMyAxMTQuNDMgMzI1LjI2IEMgMTA4LjgxIDMyMC41NyAxMDMuMDYgMzE2LjAwIDk3LjM0IDMxMS40NCBDIDEwMC40NCAzMTAuMDMgMTAzLjg1IDMwOC43OSAxMDYuMjIgMzA2LjI0IEMgMTA3LjkxIDMwMi45NSAxMDkuMjkgMjk5LjQ0IDExMS42OCAyOTYuNTYgQyAxMTEuMjggMjk4LjI4IDExMC42OCAyOTkuOTUgMTEwLjEwIDMwMS42MyBDIDExMC43NSAzMDEuOTAgMTEyLjA0IDMwMi40NSAxMTIuNjkgMzAyLjcyIEMgMTExLjk4IDMwMy41OCAxMTEuMTkgMzA0LjM4IDExMC4zOSAzMDUuMTUgQyAxMDkuNDYgMzA2LjkwIDEwOC4yOCAzMDguNTAgMTA2Ljk1IDMwOS45NyBDIDEwOC4zMCAzMTAuMjYgMTA5LjY0IDMxMC41OSAxMTAuOTggMzEwLjk4IEMgMTExLjYwIDMwNy41NyAxMTIuODUgMzA0LjMzIDExNC4wNCAzMDEuMTAgQyAxMTUuNDggMjk4LjAxIDExMi40NSAyOTUuMDcgMTEzLjIxIDI5MS44NyBDIDExMi41OSAyODkuNTYgMTE0Ljk3IDI4OS42NyAxMTUuMzggMjkxLjk1IEMgMTE1LjgwIDI5MS40MyAxMTYuNjYgMjkwLjM5IDExNy4wOSAyODkuODggQyAxMTYuODkgMjkwLjg0IDExNi41MSAyOTIuNzcgMTE2LjMyIDI5My43NCBDIDExNy4xNCAyOTIuOTEgMTE4Ljc4IDI5MS4yNyAxMTkuNjAgMjkwLjQ1IEMgMTE5LjA4IDI5MS40MCAxMTguMDQgMjkzLjMwIDExNy41MiAyOTQuMjUgQyAxMTguMjggMjkzLjkwIDExOS44MiAyOTMuMjIgMTIwLjU4IDI5Mi44NyBDIDExNy4zMSAyOTguNDQgMTE2LjMxIDMwNC45MSAxMTUuMTkgMzExLjE2IEMgMTE4Ljg4IDMxMC40MyAxMjIuMzYgMzA4LjgyIDEyNC45OCAzMDYuMDYgQyAxMjQuNTEgMzA1LjU1IDEyMy41NyAzMDQuNTMgMTIzLjEwIDMwNC4wMiBDIDEyMy44MyAzMDMuMzcgMTI1LjMwIDMwMi4wNyAxMjYuMDMgMzAxLjQyIEMgMTI1LjIyIDMwMS40NiAxMjMuNjAgMzAxLjUzIDEyMi43OCAzMDEuNTcgQyAxMjQuNjQgMjk5LjgxIDEyNi4zNiAyOTcuOTEgMTI3LjY3IDI5NS43MSBDIDEyNy4wOCAyOTguMzMgMTI3LjM2IDMwMC45OSAxMjcuOTQgMzAzLjU5IEMgMTI4Ljk5IDMwMy45NiAxMzEuMTEgMzA0LjcwIDEzMi4xNiAzMDUuMDggQyAxMzEuMDMgMzA1LjgzIDEyOS44OSAzMDYuNTggMTI4Ljc1IDMwNy4zMiBMIDEzMS44MiAzMDcuMDYgQyAxMzEuMDggMzA3LjgwIDEyOS41OCAzMDkuMjcgMTI4LjgzIDMxMC4wMCBDIDEyOS45MCAzMTQuMjMgMTMxLjc4IDMxOC4xOSAxMzMuMDMgMzIyLjM2IEMgMTMzLjYyIDMyMC45OSAxMzQuMTYgMzE5LjU5IDEzNC42NSAzMTguMTggTCAxMzUuMzggMzE4LjU2IEMgMTM2Ljc0IDMxMy43OSAxMzkuMTQgMzA5LjQ0IDE0MC45NyAzMDQuODUgQyAxNDYuOTAgMzAxLjc5IDE1My41MCAzMDAuMzcgMTU5LjcxIDI5OC4wMSBDIDE2MC44NyAzMDAuMzQgMTYwLjU3IDMwMi44MCAxNTkuMTggMzA0Ljk3IEMgMTU3LjczIDMwNC4yMSAxNTYuMzAgMzAzLjQzIDE1NC44OCAzMDIuNjMgQyAxNTEuMDIgMzAzLjY4IDE0Ny43MyAzMDUuOTkgMTQ0LjQzIDMwOC4xNCBDIDE0My41OSAzMTEuNjYgMTQyLjk4IDMxNS4yNSAxNDMuNTAgMzE4Ljg4IEMgMTQzLjk3IDMxOC43NiAxNDQuOTIgMzE4LjU0IDE0NS4zOSAzMTguNDMgQyAxNDUuNTYgMzE2LjIzIDE0NS41OCAzMTQuMDIgMTQ1Ljg4IDMxMS44MyBDIDE0Ni4yNiAzMDguODMgMTQ4Ljc0IDMwNi41OSAxNTEuMzQgMzA1LjM0IEMgMTUzLjUxIDMwNS4wOSAxNTUuMDggMzA2Ljk1IDE1Ni44MSAzMDcuOTUgQyAxNTYuODQgMzA5LjM0IDE1Ni44NyAzMTAuNzQgMTU2LjkxIDMxMi4xNCBDIDE1Ni4wOCAzMTMuMDUgMTU1LjI2IDMxMy45NSAxNTQuNDMgMzE0Ljg3IEMgMTU0LjY2IDMxNy41NiAxNTUuMDMgMzIwLjI0IDE1NS40MyAzMjIuOTEgQyAxNTcuOTcgMzIxLjIzIDE2MC45OCAzMjAuOTEgMTYzLjk2IDMyMS4xNSBDIDE2NC45NCAzMjEuODggMTY1LjkyIDMyMi42MiAxNjYuOTAgMzIzLjM3IEMgMTY4Ljc3IDMyMS40MCAxNzAuODQgMzE5LjU5IDE3Mi4zNSAzMTcuMzIgQyAxNzMuNDggMzE1LjI3IDE3My45NCAzMTIuOTMgMTc1LjAxIDMxMC44NSBDIDE3NS4yOSAzMTEuNzUgMTc1Ljg0IDMxMy41MyAxNzYuMTIgMzE0LjQzIEMgMTc2LjYzIDMxMy4xOSAxNzYuMTcgMzExLjk2IDE3NS44MSAzMTAuNzggQyAxNzYuNzMgMzEwLjU2IDE3Ny42NSAzMTAuMzggMTc4LjU4IDMxMC4yMiBDIDE3OC43MSAzMTEuODMgMTc4Ljc3IDMxMy40NCAxNzguNzAgMzE1LjA2IEMgMTczLjUzIDMxNy4wMiAxNzIuMDAgMzIyLjgzIDE2OS4yNSAzMjcuMTAgQyAxNzAuMDUgMzI4LjY5IDE3MS4wMiAzMzAuMTkgMTcxLjkxIDMzMS43NCBDIDE3Ny4wOSAzMjQuMjcgMTgyLjY5IDMxNi4zNSAxODMuNTEgMzA3LjAxIEMgMTg0LjY0IDMwNy41OCAxODYuMTkgMzA3Ljc1IDE4Ni43OSAzMDkuMDQgQyAxODcuMzQgMzEwLjcwIDE4Ni4yOCAzMTIuMjUgMTg1LjY2IDMxMy43MyBDIDE4My44OSAzMTcuMzAgMTgyLjUyIDMyMS4wNiAxODAuODUgMzI0LjY4IEMgMTgxLjcyIDMyNC42MiAxODMuNDYgMzI0LjUyIDE4NC4zMiAzMjQuNDcgQyAxODQuNjUgMzI0LjczIDE4NS4zMSAzMjUuMjcgMTg1LjYzIDMyNS41NCBDIDE4Ny40MyAzMjQuMzQgMTg5LjI4IDMyMy4yMSAxOTAuOTkgMzIxLjg5IEMgMTkzLjU2IDMxOS45OCAxOTQuNDggMzE2Ljc2IDE5Ni40MiAzMTQuMzQgQyAxOTcuMzkgMzEyLjYyIDE5OS43MSAzMTMuNDggMjAxLjI4IDMxMy4wNSBDIDIwMS4wNyAzMTMuMzkgMjAwLjY0IDMxNC4wNiAyMDAuNDIgMzE0LjQwIEMgMjAwLjQxIDMxNS43OCAyMDEuMTEgMzE3LjYwIDE5OS41MSAzMTguMzggQyAxOTUuNTUgMzIxLjA5IDE5MS43OCAzMjQuMDUgMTg4LjM5IDMyNy40NiBDIDE4OC43NSAzMjkuOTMgMTg4Ljg0IDMzMi40NCAxODkuMzEgMzM0LjkwIEMgMTg5Ljg1IDMzNi41NCAxOTEuNjQgMzM3LjE5IDE5Mi45MSAzMzguMTUgQyAxOTIuMTEgMzM2LjM1IDE5MS4xNiAzMzQuNjIgMTkwLjQzIDMzMi43OSBDIDE4OS43MCAzMjkuOTUgMTkwLjg2IDMyNy4xMyAxOTEuNzYgMzI0LjQ5IEMgMTkzLjkxIDMyNC4zMSAxOTYuNTIgMzIyLjk4IDE5OC4zOCAzMjQuNjkgQyAyMDAuMTkgMzI2LjYyIDIwMS42NyAzMjguOTIgMjA0LjExIDMzMC4xNiBDIDIwNC44NCAzMzEuMTUgMjA1LjU2IDMzMi4xNCAyMDYuMzAgMzMzLjEzIEMgMjA2LjQ3IDMyNy40MyAyMDQuMzQgMzIxLjczIDIwNS41OCAzMTYuMDYgQyAyMDUuNzQgMzE0LjkzIDIwNi44NCAzMTQuMzMgMjA3LjU1IDMxMy41NyBDIDIwNy45NCAzMTQuOTcgMjA4LjMyIDMxNi4zOCAyMDguNjcgMzE3LjgwIEMgMjA4LjA3IDMxOS4zMiAyMDYuNjggMzIwLjg2IDIwNy40MCAzMjIuNjAgQyAyMDguMzcgMzI0LjQxIDIxMC45NyAzMjUuMjIgMjEwLjQ0IDMyNy43NCBDIDIxMi4zNyAzMjUuNzYgMjE1LjA1IDMyNS4xNyAyMTcuNjUgMzI0LjYwIEMgMjE3LjAwIDMyMy42OSAyMTYuMzcgMzIyLjc3IDIxNS43NCAzMjEuODYgQyAyMTQuNDUgMzIxLjMwIDIxMy4xOCAzMjAuNjggMjExLjkyIDMyMC4wNCBDIDIxMi43NyAzMTkuMTkgMjEzLjY0IDMxOC4zNCAyMTQuNTEgMzE3LjUwIEMgMjEzLjkwIDMxNS45OCAyMTMuMzQgMzE0LjQ1IDIxMi44NyAzMTIuOTAgQyAyMTUuNTUgMzE1LjkxIDIxNy4zMiAzMTkuNjIgMjIwLjE0IDMyMi41MiBDIDIyMi44MSAzMTcuNzggMjE5Ljc3IDMxMi4xMSAyMjIuNjQgMzA3LjQ5IEMgMjIzLjA3IDMwNy41MSAyMjMuOTMgMzA3LjU2IDIyNC4zNiAzMDcuNTggQyAyMjQuOTQgMzA5LjQwIDIyNS41MyAzMTEuMjIgMjI2LjI3IDMxMi45OCBDIDIyMi40OSAzMTcuODkgMjI0Ljk3IDMyNC4wNiAyMjUuNTcgMzI5LjU2IEMgMjI2LjM4IDMyOS4zMyAyMjguMDEgMzI4Ljg3IDIyOC44MiAzMjguNjQgQyAyMzEuNzkgMzIxLjAxIDIzNC42MyAzMTIuODggMjMzLjM5IDMwNC41NCBDIDIzNC42MCAzMDUuMjEgMjM3LjY1IDMwNC45MSAyMzcuNTIgMzA3LjAxIEMgMjM3LjI3IDMxMS41NCAyMzUuNjUgMzE1LjkwIDIzNS4zMSAzMjAuNDUgQyAyMzYuMDggMzIwLjIwIDIzNi44NCAzMTkuOTUgMjM3LjYxIDMxOS43MSBDIDIzNi41NyAzMTYuMjAgMjM4LjIyIDMxMi42MyAyNDEuNzMgMzExLjQ2IEMgMjQyLjkwIDMxMi4yMyAyNDQuMDggMzEzLjAwIDI0NS4yNiAzMTMuNzYgQyAyNDUuNzIgMzE2LjMyIDI0Ni4yOSAzMTguODYgMjQ2Ljc3IDMyMS40MSBDIDI0OS43NyAzMjIuMzggMjUyLjQyIDMyNC4xMSAyNTUuMTkgMzI1LjU5IEMgMjU2LjQyIDMyNC4zNSAyNTcuNjIgMzIzLjA3IDI1OC44MCAzMjEuNzggQyAyNTguODYgMzE5LjA4IDI1OC45MSAzMTYuMzkgMjU4Ljg5IDMxMy42OSBDIDI1Ni44MyAzMTIuNDggMjU0Ljg0IDMxMS4xNyAyNTMuMDAgMzA5LjY1IEMgMjU0LjQwIDMwOS42NiAyNTUuODAgMzA5LjcwIDI1Ny4yMCAzMDkuNzYgQyAyNTYuMjggMzA2LjY1IDI1Ni4wNyAzMDMuMzkgMjU2LjA5IDMwMC4xNiBDIDI1Ny43OCAzMDEuMDMgMjU4LjcxIDMwMi42NiAyNTkuNTQgMzA0LjI4IEMgMjU5Ljc3IDMwMi45NyAyNjAuMDIgMzAxLjY2IDI2MC4yOCAzMDAuMzYgQyAyNjEuNTIgMzA1LjM0IDI2MS43NyAzMTAuOTYgMjY1Ljg2IDMxNC42MiBDIDI2Ni43NCAzMTIuNzggMjY3LjIyIDMxMC41MSAyNjkuMTMgMzA5LjQzIEMgMjcyLjE2IDMwNy4zNSAyNzQuODcgMzA0LjgxIDI3OC4wNiAzMDIuOTQgQyAyNzcuNTkgMzA1LjM4IDI3NS41NCAzMDYuODIgMjczLjY3IDMwOC4xOSBDIDI3NS41NiAzMDkuNTYgMjc2Ljg5IDMxMS41MSAyNzguMjMgMzEzLjM5IEMgMjc4LjUyIDMxMi44NyAyNzkuMTAgMzExLjgxIDI3OS4zOSAzMTEuMjggQyAyODAuNTQgMzEwLjkyIDI4MS43MCAzMTAuNTggMjgyLjg3IDMxMC4yNCBDIDI4NC4wNiAzMTAuOTEgMjg1LjI1IDMxMS41NyAyODYuNDUgMzEyLjI0IEMgMjg0Ljk2IDMwOC45NSAyODMuODYgMzA1LjUwIDI4Mi41OSAzMDIuMTIgQyAyODEuODIgMjk5LjU3IDI3OC41OCAyOTguNzQgMjc4LjA1IDI5Ni4wOSBDIDI3Ny4zNyAyOTMuMjMgMjc2LjIyIDI5MC41MiAyNzUuMzggMjg3LjcxIEMgMjc2LjgyIDI4OC44OCAyNzcuNzggMjkwLjQ3IDI3OC43OCAyOTIuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzQyLjQ1IDI5MS4zMiBDIDM0NS43MyAyOTMuMzggMzQ4Ljk1IDI5NS41MSAzNTIuMTAgMjk3Ljc3IEMgMzUxLjE5IDI5OS4wMCAzNTAuMzAgMzAwLjI0IDM0OS4zOSAzMDEuNDggQyAzNDguODMgMzAxLjA3IDM0Ny43MCAzMDAuMjUgMzQ3LjE0IDI5OS44NCBDIDM0Ny4xNiAzMDEuODIgMzQ3LjY1IDMwMy45MyAzNDYuNzMgMzA1LjgwIEMgMzQ1LjQ0IDMwNi4wMSAzNDQuNDggMzA1LjA0IDM0My40NyAzMDQuNDYgQyAzNDQuMzQgMzAxLjk1IDM0NS40NiAyOTguNzIgMzQyLjc5IDI5Ni44MyBDIDM0MS41NCAyOTcuOTkgMzQwLjgxIDMwMC4wOCAzMzkuMjIgMzAwLjY2IEMgMzM4LjY2IDMwMC4yOSAzMzcuNTUgMjk5LjU0IDMzNy4wMCAyOTkuMTcgQyAzMzguOTQgMjk2LjY1IDM0MC44MCAyOTQuMDUgMzQyLjQ1IDI5MS4zMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSA1NS41NiAyOTguMzkgQyA1Ny4zMyAyOTYuOTUgNTkuMTggMjk1LjYxIDYxLjA0IDI5NC4yOCBDIDYxLjk0IDI5NS41NCA2Mi44NiAyOTYuNzkgNjMuNzkgMjk4LjAzIEMgNjIuNzcgMjk4Ljc0IDYxLjc2IDI5OS40NCA2MC43NCAzMDAuMTUgQyA2Mi4zOCAzMDIuMzQgNjQuMDcgMzA0LjQ5IDY1Ljc3IDMwNi42MyBDIDY0LjI2IDMwNy44OCA2Mi44NCAzMDkuMjQgNjEuMTYgMzEwLjI3IEMgNTguODAgMzEwLjM5IDU2LjQzIDMxMC4xMiA1NC4wNyAzMTAuMjcgQyA1My4wOCAzMDkuMDIgNTIuMDkgMzA3Ljc3IDUxLjE0IDMwNi40OSBDIDUzLjQwIDMwNS4zMCA1NS44OCAzMDYuMTggNTguMjMgMzA2LjUxIEMgNTguODEgMzA2LjE1IDU5Ljk5IDMwNS40MyA2MC41NyAzMDUuMDcgQyA1OC44OSAzMDIuODUgNTcuMjMgMzAwLjYyIDU1LjU2IDI5OC4zOSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzggMjk2LjQwIEMgMjk1LjQ2IDI5NS45OSAyOTcuMTEgMjk1LjI4IDI5OC44NyAyOTUuMjcgQyAzMDEuOTUgMjk3LjUxIDMwNC4wNyAzMDAuODIgMzA3LjIzIDMwMy4wMCBDIDMwNy4zNiAzMDQuMTggMzA3LjUwIDMwNS4zNyAzMDcuNjMgMzA2LjU2IEMgMzA2LjkzIDMwNy4yMSAzMDYuMjIgMzA3Ljg3IDMwNS41MyAzMDguNTQgQyAzMDQuNDMgMzA3LjIzIDMwMy4zMiAzMDUuOTMgMzAyLjI3IDMwNC42MCBDIDMwMS4zNCAzMDQuOTMgMzAwLjQyIDMwNS4yNiAyOTkuNTEgMzA1LjYwIEMgMjk5LjQwIDMwNC45NCAyOTkuMjAgMzAzLjYxIDI5OS4wOSAzMDIuOTQgQyAyOTguMDkgMzA0LjIwIDI5Ny4xMiAzMDUuNDggMjk2LjIwIDMwNi43OSBDIDI5NS42MSAzMDYuNzggMjk0LjQzIDMwNi43NSAyOTMuODQgMzA2Ljc0IEMgMjk2LjEzIDMwOC4yMyAyOTQuOTAgMzA5Ljc1IDI5My4yMSAzMTEuMTUgQyAyOTMuODMgMzExLjU5IDI5NC40NSAzMTIuMDIgMjk1LjA3IDMxMi40NyBDIDI5NC42NiAzMTMuOTIgMjk0LjI4IDMxNS4zOSAyOTMuOTAgMzE2Ljg2IEMgMjk0LjQ5IDMxNi43MSAyOTUuNjYgMzE2LjQxIDI5Ni4yNSAzMTYuMjYgQyAyOTUuMzcgMzE3LjI5IDI5NC41MSAzMTguMzQgMjkzLjYzIDMxOS4zNyBDIDI5My4yNyAzMTcuMjkgMjkyLjM3IDMxNS4xMiAyOTMuNDcgMzEzLjA5IEMgMjkyLjk0IDMxMi45OCAyOTEuODggMzEyLjc2IDI5MS4zNSAzMTIuNjUgQyAyOTIuMTUgMzEwLjU3IDI5My4wNCAzMDguNTIgMjkzLjYzIDMwNi4zNiBDIDI5NC42MyAzMDUuMjMgMjk1LjU3IDMwNC4wNSAyOTYuNTMgMzAyLjg3IEMgMjk1LjQyIDMwMi40MSAyOTQuMzIgMzAxLjk1IDI5My4yMiAzMDEuNTEgQyAyOTMuNDMgMjk5LjgxIDI5My42MiAyOTguMTAgMjkzLjc4IDI5Ni40MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMzIuNjUgMzA0LjY2IEMgMzMzLjY3IDMwMy40OSAzMzQuNzAgMzAyLjMyIDMzNS43MyAzMDEuMTYgQyAzMzguNjIgMzAzLjU4IDM0MS42MiAzMDUuODggMzQ0LjYzIDMwOC4xNSBDIDM0My42MiAzMDkuNDUgMzQyLjYwIDMxMC43NSAzNDEuNTcgMzEyLjA1IEMgMzM4LjU2IDMwOS42MyAzMzUuNTQgMzA3LjIxIDMzMi42NSAzMDQuNjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMjk2LjIwIDMwNi43OSBDIDI5Ny4xMiAzMDUuNDggMjk4LjA5IDMwNC4yMCAyOTkuMDkgMzAyLjk0IEMgMjk5LjIwIDMwMy42MSAyOTkuNDAgMzA0Ljk0IDI5OS41MSAzMDUuNjAgQyAzMDAuNDIgMzA1LjI2IDMwMS4zNCAzMDQuOTMgMzAyLjI3IDMwNC42MCBDIDMwMy4zMiAzMDUuOTMgMzA0LjQzIDMwNy4yMyAzMDUuNTMgMzA4LjU0IEMgMzAyLjUyIDMxMS4xOCAyOTkuOTggMzE0LjYyIDI5Ni4yNSAzMTYuMjYgQyAyOTUuNjYgMzE2LjQxIDI5NC40OSAzMTYuNzEgMjkzLjkwIDMxNi44NiBDIDI5NC4yOCAzMTUuMzkgMjk0LjY2IDMxMy45MiAyOTUuMDcgMzEyLjQ3IEMgMjk0LjQ1IDMxMi4wMiAyOTMuODMgMzExLjU5IDI5My4yMSAzMTEuMTUgQyAyOTQuOTAgMzA5Ljc1IDI5Ni4xMyAzMDguMjMgMjkzLjg0IDMwNi43NCBDIDI5NC40MyAzMDYuNzUgMjk1LjYxIDMwNi43OCAyOTYuMjAgMzA2Ljc5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMyOC4xMSAzMTAuMjYgQyAzMjkuMTAgMzA5LjA5IDMzMC4xMCAzMDcuOTMgMzMxLjA4IDMwNi43NSBDIDMzNC44MCAzMDkuNzggMzM4LjQwIDMxMi45MyAzNDIuMTIgMzE1Ljk2IEMgMzQxLjA3IDMxNy4yNSAzNDAuMDIgMzE4LjU1IDMzOC45OSAzMTkuODcgQyAzMzUuNDIgMzE2LjYwIDMzMS43MSAzMTMuNDkgMzI4LjExIDMxMC4yNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMjAuMjAgMzEyLjc2IEMgMTIxLjMyIDMxMC44MCAxMjQuNDggMzEwLjk4IDEyNi41MiAzMTAuMjQgQyAxMjYuNTEgMzEyLjIwIDEyNi41MCAzMTQuMTYgMTI2LjU0IDMxNi4xMiBDIDEyNC45NyAzMTQuMDggMTIyLjY3IDMxMy4yMCAxMjAuMjAgMzEyLjc2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDYxLjcyIDMyMy45NSBDIDY1LjExIDMyMC41NSA2OC42NiAzMTcuMzMgNzIuMDUgMzEzLjkzIEMgNzMuMTUgMzE0Ljk4IDc0LjI0IDMxNi4wNCA3NS4zNSAzMTcuMDggQyA3NC4yNCAzMTguMjggNzMuMTMgMzE5LjQ4IDcyLjA0IDMyMC43MSBDIDczLjE1IDMyMC45MyA3NC4yNyAzMjEuMTYgNzUuMzkgMzIxLjM4IEMgNzYuMDIgMzIwLjY1IDc2LjY2IDMxOS45MyA3Ny4yOSAzMTkuMjAgQyA3OC40MCAzMjAuMjcgNzkuNTIgMzIxLjMyIDgwLjY0IDMyMi4zOCBDIDc5LjMwIDMyMy41MSA3OC4wNiAzMjYuMTMgNzUuOTMgMzI0Ljk4IEMgNzMuNzQgMzI0LjU0IDcxLjY1IDMyMy4wNCA2OS40MCAzMjMuMjQgQyA2Ny44NiAzMjQuNDcgNjYuNTIgMzI1LjkyIDY1LjEwIDMyNy4yOSBDIDYzLjk4IDMyNi4xNyA2Mi44NSAzMjUuMDYgNjEuNzIgMzIzLjk1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDExNC40NCAzMTUuMTYgQyAxMTUuNDMgMzE1LjEyIDExOC43NCAzMTIuMDUgMTE4LjE4IDMxNC4xNCBDIDExNy42OCAzMTUuMDkgMTE3LjE0IDMxNi4wMiAxMTYuNTUgMzE2LjkyIEMgMTE2LjAxIDMxOS41NCAxMTUuODMgMzIyLjI1IDExNi43NiAzMjQuODIgQyAxMTYuNTUgMzI0Ljg3IDExNi4xMiAzMjQuOTcgMTE1LjkxIDMyNS4wMiBMIDExNS4xMCAzMjQuNzUgQyAxMTMuMjkgMzIxLjg5IDExMy43NyAzMTguMjggMTE0LjQ0IDMxNS4xNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNjQuMDcgMzI0Ljc5IEMgMjY1LjQ1IDMyMi4wMyAyNjUuODIgMzE4LjAxIDI2OS4wOSAzMTYuNzggQyAyNjcuMjYgMzIwLjIxIDI2NS42MCAzMjMuNzUgMjYzLjQyIDMyNi45OSBDIDI2My40OCAzMjguNTYgMjY0LjI3IDMyOS41OSAyNjUuODAgMzMwLjA5IEMgMjYzLjc1IDMzMC42MSAyNjEuNzEgMzMxLjIyIDI1OS41OSAzMzEuMzggQyAyNjAuMjUgMzI4LjY1IDI2Mi41MCAzMjYuOTUgMjY0LjA3IDMyNC43OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMjEuNDggMzE3LjM2IEMgMzIyLjkxIDMxOC43NyAzMjQuMzIgMzIwLjIxIDMyNS41NiAzMjEuODEgQyAzMjUuMDcgMzIyLjgzIDMyNC42MCAzMjMuODYgMzI0LjEyIDMyNC44OSBDIDMyNi4wOCAzMjQuOTAgMzI4LjAyIDMyNC45MCAzMjkuOTkgMzI0LjkxIEMgMzI4LjcyIDMyNi4xNyAzMjcuNzAgMzI3LjgyIDMyNi4wNyAzMjguNjQgQyAzMjMuNDIgMzI4Ljc1IDMyMC43OCAzMjguNDkgMzE4LjE1IDMyOC4zOCBDIDMxOS40NiAzMjkuODcgMzIwLjc4IDMzMS4zNyAzMjIuMDYgMzMyLjg5IEMgMzIwLjgyIDMzMy44NCAzMTkuNTkgMzM0LjgxIDMxOC4zNiAzMzUuNzggQyAzMTcuMDggMzM0LjIzIDMxNS43OCAzMzIuNjkgMzE0LjUxIDMzMS4xMyBDIDMxNC43NyAzMzAuMzYgMzE1LjI4IDMyOC44MiAzMTUuNTQgMzI4LjA1IEMgMzEzLjg3IDMyNy45MiAzMTIuMTkgMzI3Ljc4IDMxMC41MyAzMjcuNjMgQyAzMTEuNjYgMzI2LjU1IDMxMi43NCAzMjUuMzkgMzE0LjAzIDMyNC41MCBDIDMxNi43MSAzMjQuNTAgMzE5LjM3IDMyNC44MCAzMjIuMDUgMzI0Ljc5IEMgMzIwLjg2IDMyMy4zNSAzMTkuNjEgMzIxLjk4IDMxOC4zMyAzMjAuNjMgQyAzMTkuMzcgMzE5LjU0IDMyMC40MiAzMTguNDUgMzIxLjQ4IDMxNy4zNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNTEuNzIgMzIyLjUwIEMgMTQ5LjA4IDMyMS40MCAxNTEuNTMgMzE5LjU0IDE1Mi4zMyAzMTguMDYgQyAxNTIuMTggMzE5LjU1IDE1MS45NiAzMjEuMDIgMTUxLjcyIDMyMi41MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNzguOTkgMzIwLjI4IEMgMjgwLjAxIDMyMS4zNiAyODEuMTcgMzIyLjI5IDI4Mi40NCAzMjMuMDkgQyAyODIuMDQgMzIzLjg4IDI4Mi4yMyAzMjYuMDUgMjgwLjg4IDMyNS4yMyBDIDI4MC41NCAzMjMuNDcgMjgwLjA3IDMyMS43NCAyNzguOTkgMzIwLjI4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDc0Ljc3IDMzMi41NiBDIDc3LjE4IDMyOS42NyA3OS44OCAzMjcuMDQgODIuMjAgMzI0LjA4IEMgODMuNDQgMzI1LjAyIDg0LjY3IDMyNS45NyA4NS44OSAzMjYuOTQgQyA4My4zMiAzMjkuODEgODAuODkgMzMyLjgxIDc4LjMyIDMzNS42OCBDIDc3LjE0IDMzNC42MyA3NS45NiAzMzMuNTkgNzQuNzcgMzMyLjU2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDgwLjI2IDMzNy4yNiBDIDgyLjc5IDMzNC4zOSA4NS4xOSAzMzEuNDAgODcuNjcgMzI4LjQ5IEMgOTAuNzMgMzMxLjUzIDk1LjAzIDMzMy4zMyA5Ny40MCAzMzYuOTggQyA5Ni4yMiAzNDAuMzMgOTMuNTIgMzQyLjg4IDkxLjc0IDM0NS45MSBDIDkwLjM4IDM0NS4wMyA4OS4wNiAzNDQuMTMgODcuNzQgMzQzLjIxIEMgODkuNDAgMzQwLjk5IDkxLjExIDMzOC44MCA5Mi43OCAzMzYuNTkgQyA5MS42NSAzMzUuNjQgOTAuNTEgMzM0LjcwIDg5LjM4IDMzMy43NSBDIDg3LjQyIDMzNS43OCA4NS43NCAzMzguMDQgODQuMDUgMzQwLjI5IEMgODIuNzcgMzM5LjI5IDgxLjUxIDMzOC4yOCA4MC4yNiAzMzcuMjYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzA1LjkzIDMzMS4yMCBDIDMwNy4xMCAzMzAuMzEgMzA4LjI2IDMyOS40MSAzMDkuNDMgMzI4LjUyIEMgMzExLjgyIDMzMS40NiAzMTQuMjAgMzM0LjQyIDMxNi43OCAzMzcuMjEgQyAzMTUuNTUgMzM4LjI4IDMxNC4zMCAzMzkuMzIgMzEzLjA0IDM0MC4zNiBDIDMxMC42NyAzMzcuMzEgMzA4LjIzIDMzNC4zMCAzMDUuOTMgMzMxLjIwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1Mi4zMCAzMzUuMjggQyAxNTIuOTMgMzM0LjQ5IDE1My41NyAzMzMuNzEgMTU0LjIxIDMzMi45NCBDIDE1NC42MyAzMzMuOTQgMTU1LjA2IDMzNC45NSAxNTUuNDkgMzM1Ljk2IEMgMTU0LjQyIDMzNS43MyAxNTMuMzYgMzM1LjUxIDE1Mi4zMCAzMzUuMjggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTczLjkzIDMzOC45NiBDIDE3NC4zMyAzMzYuNzQgMTc1LjMzIDMzNC43MiAxNzYuNDUgMzMyLjc5IEMgMTc2Ljk1IDMzNC43MiAxNzcuNTAgMzM2LjY1IDE3Ny45NyAzMzguNjEgQyAxNzYuNjIgMzM4LjczIDE3NS4yNyAzMzguODUgMTczLjkzIDMzOC45NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTMuNzYgMzQwLjAzIEMgMjk3LjI4IDMzNy45MCAzMDAuMzcgMzM1LjA3IDMwNC4xNyAzMzMuMzkgQyAzMDYuNjYgMzM2LjAyIDMwOS4wMiAzMzguODIgMzEwLjkwIDM0MS45MiBDIDMwOS44NCAzNDIuODggMzA4LjY3IDM0My43MiAzMDcuNDUgMzQ0LjQ2IEMgMzA1LjM0IDM0Mi43MCAzMDQuMTQgMzQwLjA5IDMwMi40OSAzMzcuOTMgQyAzMDAuMDAgMzM5LjUzIDI5Ny41NyAzNDEuMjEgMjk1LjA0IDM0Mi43NSBDIDI5NC43MiAzNDIuMDcgMjk0LjA4IDM0MC43MSAyOTMuNzYgMzQwLjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDk3LjM3IDM0Mi4wNyBDIDk4LjI0IDM0MC42NyA5OS4xOSAzMzkuMzMgMTAwLjEyIDMzNy45NyBDIDEwMS4zMiAzMzguNzYgMTAyLjUzIDMzOS41NiAxMDMuNzMgMzQwLjM2IEMgMTAzLjA3IDM0MS41NSAxMDIuNDIgMzQyLjc1IDEwMS44MyAzNDMuOTggQyAxMDMuMTkgMzQzLjMzIDEwNC40OCAzNDIuNTAgMTA1Ljk1IDM0Mi4wOSBDIDEwOC4yMiAzNDIuNzMgMTEwLjEyIDM0NC4yMiAxMTEuODQgMzQ1Ljc4IEMgMTEwLjE2IDM0OS4wNiAxMDguMjcgMzUyLjIxIDEwNi41MSAzNTUuNDQgQyAxMDQuMzMgMzU0LjE0IDEwMi4xMyAzNTIuODYgOTkuOTUgMzUxLjU3IEMgMTAwLjQyIDM1MC42NiAxMDAuOTEgMzQ5Ljc1IDEwMS4zOSAzNDguODQgQyAxMDIuMjkgMzQ5LjM3IDEwMy4xOSAzNDkuOTEgMTA0LjA5IDM1MC40NSBDIDEwNS4wOSAzNDguNzYgMTA2LjA3IDM0Ny4wNSAxMDYuOTEgMzQ1LjI3IEMgMTAzLjA2IDM0NS4xNiAxMDAuNjMgMzQ5LjEwIDk3LjA0IDM0OS42NSBDIDk1Ljc3IDM0OC45MCA5NC41OCAzNDguMDIgOTMuMzggMzQ3LjE4IEMgOTUuMTggMzQ2LjI4IDk2Ljk5IDM0NS40MCA5OC44MSAzNDQuNTQgQyA5OC4zMCAzNDMuNzMgOTcuODIgMzQyLjkxIDk3LjM3IDM0Mi4wNyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyODAuNDggMzQ3LjkxIEMgMjg0LjMwIDM0NS43NSAyODguMTEgMzQzLjU3IDI5MS45MSAzNDEuMzcgQyAyOTIuMjkgMzQxLjkzIDI5My4wNSAzNDMuMDUgMjkzLjQ0IDM0My42MiBDIDI5Mi44OCAzNDQuMTAgMjkyLjMzIDM0NC41OSAyOTEuNzkgMzQ1LjA5IEMgMjkzLjMyIDM0Ny4zOCAyOTQuNzYgMzQ5LjczIDI5Ni4yMiAzNTIuMDggQyAyOTQuODYgMzUyLjg3IDI5My40OSAzNTMuNjYgMjkyLjEzIDM1NC40NiBDIDI5MC43OCAzNTIuMDIgMjg5LjM3IDM0OS42MiAyODcuOTUgMzQ3LjIzIEMgMjg2LjAyIDM0OC4zNCAyODQuMDcgMzQ5LjQxIDI4Mi4wOSAzNTAuNDMgQyAyODEuNjkgMzQ5LjgwIDI4MC44OCAzNDguNTQgMjgwLjQ4IDM0Ny45MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyOTYuMjAgMzQ0LjA4IEMgMjk3LjQ1IDM0My4yMyAyOTguNzAgMzQyLjM4IDI5OS45NiAzNDEuNTQgQyAzMDEuMjEgMzQzLjQyIDMwMi41MSAzNDUuMjggMzAzLjgzIDM0Ny4xMiBDIDMwMi41MyAzNDcuOTYgMzAxLjI3IDM0OC44NyAyOTkuOTMgMzQ5LjY1IEMgMjk4LjU3IDM0Ny44NyAyOTcuNDMgMzQ1Ljk0IDI5Ni4yMCAzNDQuMDggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjc0LjkzIDM1MC40OSBDIDI3Ni4yNCAzNDkuOTUgMjc3LjU2IDM0OS40MiAyNzguODggMzQ4LjkxIEMgMjc5Ljg0IDM1MC44NiAyODEuMDAgMzUyLjcyIDI4MS43NCAzNTQuNzcgQyAyODAuNDggMzU1LjU2IDI3OS4xMSAzNTYuMTUgMjc3Ljc2IDM1Ni43OCBDIDI3Ni43OCAzNTQuNjkgMjc1Ljc5IDM1Mi42MiAyNzQuOTMgMzUwLjQ5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDEyMC4yMCAzNDkuODIgQyAxMjMuNzggMzUxLjUyIDEyNy41MyAzNTIuOTIgMTMwLjk5IDM1NC44NiBDIDEzMi40OCAzNTUuNzAgMTMxLjgwIDM1Ny4yNiAxMzEuMzQgMzU4LjUxIEMgMTMwLjM5IDM2MS4wMCAxMjkuMzEgMzYzLjQ0IDEyOC4zMSAzNjUuOTEgQyAxMjMuOTIgMzY0LjAxIDExOS40NyAzNjIuMjQgMTE1LjIzIDM2MC4wMiBDIDExNi43MCAzNTYuNTMgMTE4LjY1IDM1My4yOCAxMjAuMjAgMzQ5LjgyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDEyMi45MSAzNTQuNDUgQyAxMjQuNDMgMzU1LjE0IDEyNS45NiAzNTUuODQgMTI3LjQ3IDM1Ni41NyBDIDEyNi43MSAzNTguMTUgMTI1Ljk4IDM1OS43NiAxMjUuMjQgMzYxLjM1IEMgMTIzLjcwIDM2MC42MSAxMjIuMTUgMzU5LjkwIDEyMC42MSAzNTkuMTcgQyAxMjEuMzkgMzU3LjYwIDEyMi4xNSAzNTYuMDMgMTIyLjkxIDM1NC40NSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNDEuNjcgMzU1LjAzIEMgMTQzLjAzIDM1NS4zMiAxNDQuMzggMzU1LjY0IDE0NS43MiAzNTUuOTggQyAxNDUuNDYgMzU3LjI1IDE0NS4yMSAzNTguNTIgMTQ0Ljk2IDM1OS43OSBDIDE0Ny4yNyAzNjAuNDYgMTQ5LjU4IDM2MS4xMiAxNTEuOTEgMzYxLjczIEMgMTUxLjQwIDM2My41NyAxNTEuMDIgMzY1LjQ3IDE1MC4yNCAzNjcuMjQgQyAxNDguNTIgMzY4Ljk0IDE0Ni4yNiAzNzAuMDAgMTQ0LjMyIDM3MS40NCBDIDE0Mi45NSAzNzEuMDYgMTQxLjYwIDM3MC42NiAxNDAuMjUgMzcwLjIzIEMgMTQxLjkyIDM2Ny4zMiAxNDYuMDUgMzY3LjEyIDE0Ny4xOSAzNjMuNzYgQyAxNDQuNjggMzYyLjg1IDE0Mi4xNCAzNjIuMDIgMTM5LjYxIDM2MS4yMCBDIDE0MC4zMSAzNTkuMTQgMTQxLjAwIDM1Ny4wOSAxNDEuNjcgMzU1LjAzIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI1NC42MSAzNTguOTMgQyAyNTcuODIgMzU3Ljg3IDI2MC45NCAzNTYuNTYgMjY0LjE1IDM1NS41MCBDIDI2NS4yMCAzNTUuMTcgMjY2Ljg1IDM1NS4xMyAyNjcuMjYgMzU2LjQxIEMgMjY4LjY1IDM1OS4yMSAyNjkuNzQgMzYyLjE0IDI3MC45MiAzNjUuMDQgQyAyNjkuNTEgMzY1LjU4IDI2OC4xMCAzNjYuMTUgMjY2LjcxIDM2Ni43MiBDIDI2NS42OSAzNjQuMTYgMjY0LjY2IDM2MS42MCAyNjMuNjQgMzU5LjA0IEMgMjYxLjM3IDM1OS43NiAyNTkuMTIgMzYwLjUyIDI1Ni44NSAzNjEuMjQgQyAyNTguMDcgMzYxLjc2IDI1OS4zNCAzNjIuMTMgMjYwLjY1IDM2Mi4zNyBDIDI2MS4zNyAzNjQuMzAgMjYyLjEwIDM2Ni4yNCAyNjIuODIgMzY4LjE4IEMgMjYxLjM1IDM2OC42NiAyNTkuODggMzY5LjE3IDI1OC40MiAzNjkuNjcgQyAyNTcuODEgMzY3LjkwIDI1Ny4yMiAzNjYuMTIgMjU2LjY1IDM2NC4zNCBDIDI1Ny4xNCAzNjMuMDIgMjU2LjY1IDM2MS44MiAyNTUuNTggMzYxLjAyIEMgMjU1LjM0IDM2MC41MCAyNTQuODUgMzU5LjQ1IDI1NC42MSAzNTguOTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTM0LjgwIDM1Ni4xNyBDIDEzNi4xNyAzNTYuNjcgMTM3LjU1IDM1Ny4xNyAxMzguOTIgMzU3LjY4IEMgMTM4LjExIDM1OS43NiAxMzcuMzUgMzYxLjg3IDEzNi42MCAzNjMuOTggQyAxMzUuMTQgMzYzLjUwIDEzMy43MCAzNjIuOTggMTMyLjI2IDM2Mi40OSBDIDEzMy4xNyAzNjAuNDAgMTM0LjAxIDM1OC4zMCAxMzQuODAgMzU2LjE3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI0MC4zMCAzNjIuOTkgQyAyNDQuMzIgMzYyLjE3IDI0OC4xNiAzNjAuNTMgMjUyLjI5IDM2MC4yNCBDIDI1My44MCAzNjMuMDUgMjU0LjkwIDM2Ni4wOCAyNTUuNTIgMzY5LjIyIEMgMjU1LjA3IDM3MC4yMyAyNTQuMzEgMzcwLjkyIDI1My4yNiAzNzEuMjcgQyAyNDkuODggMzcyLjQ3IDI0Ni4zNyAzNzMuMjkgMjQyLjg2IDM3NC4wNCBDIDI0Mi43MCAzNzMuMDcgMjQyLjU0IDM3Mi4xMCAyNDIuMzggMzcxLjE0IEMgMjQ1LjE2IDM3MC4zOCAyNDguMDUgMzY5Ljg4IDI1MC43MCAzNjguNzEgQyAyNTAuNDIgMzY2LjkzIDI0OS43NSAzNjUuMjUgMjQ5LjIyIDM2My41NiBDIDI0Ny42OCAzNjQuMDEgMjQ2LjE0IDM2NC40NiAyNDQuNzUgMzY1LjI2IEMgMjQ1Ljg4IDM2Ni4xMCAyNDguNDMgMzY2LjA0IDI0Ny44NSAzNjguMTIgQyAyNDUuOTggMzY4LjkyIDI0My45MyAzNjkuMTQgMjQxLjkzIDM2OS40MCBDIDI0MS4zMSAzNjcuMjggMjQwLjc3IDM2NS4xMyAyNDAuMzAgMzYyLjk5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1NC4wOCAzNjIuNDAgQyAxNTUuMzMgMzYyLjYzIDE1Ni41NyAzNjIuOTEgMTU3LjgwIDM2My4yNCBDIDE1Ny43OCAzNjYuMjQgMTU2LjQ2IDM2OS4wNiAxNTYuMTIgMzcyLjA0IEMgMTU2LjU4IDM3MS45NCAxNTcuNTAgMzcxLjc1IDE1Ny45NiAzNzEuNjUgQyAxNTguNzQgMzY5LjA3IDE1OS4xOSAzNjYuNDAgMTU5LjgwIDM2My43OCBDIDE2MS4xNCAzNjQuMDMgMTYyLjQ4IDM2NC4yOCAxNjMuODIgMzY0LjUzIEMgMTYzLjIzIDM2Ny40NyAxNjIuNTggMzcwLjM5IDE2Mi4wOSAzNzMuMzUgQyAxNjIuNjMgMzczLjE5IDE2My43MSAzNzIuODggMTY0LjI1IDM3Mi43MiBDIDE2NC45MCAzNzAuMjEgMTY1LjE0IDM2Ny42MSAxNjUuOTAgMzY1LjE0IEMgMTY3LjE5IDM2NS4yMiAxNjguNDggMzY1LjM1IDE2OS43NyAzNjUuNTEgQyAxNjguNzAgMzY5LjA2IDE3MC4wNiAzNzUuNDEgMTY1LjE2IDM3Ni4xOCBDIDE2MC40MCAzNzUuOTEgMTU1LjgxIDM3NC40MiAxNTEuMTcgMzczLjQxIEMgMTUyLjE4IDM2OS43NSAxNTMuMTkgMzY2LjA5IDE1NC4wOCAzNjIuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjA0LjU2IDM2NC4yNCBDIDIwNS45NiAzNjQuMTcgMjA3LjM1IDM2NC4xMiAyMDguNzUgMzY0LjA4IEMgMjA4LjgwIDM2NC45OCAyMDguOTEgMzY2Ljc3IDIwOC45NiAzNjcuNjcgQyAyMTEuNDkgMzY3LjQ3IDIxNC4wMyAzNjcuMjkgMjE2LjU3IDM2Ny4xNyBDIDIxNi42MyAzNjkuMjUgMjE3LjEyIDM3MS4zOSAyMTYuNjkgMzczLjQ3IEMgMjE1LjUzIDM3NS4yMyAyMTQuMTggMzc2Ljg4IDIxMy4yOCAzNzguODEgQyAyMTEuNzUgMzc4LjgzIDIxMC4yMyAzNzguODQgMjA4LjcwIDM3OC44MyBDIDIwOS40MiAzNzUuNjYgMjEzLjI4IDM3NC4wOSAyMTIuNjkgMzcwLjU1IEMgMjEwLjA1IDM3MC42NiAyMDcuNDEgMzcwLjc5IDIwNC43OCAzNzAuODAgQyAyMDQuNzUgMzY4LjYxIDIwNC42NyAzNjYuNDIgMjA0LjU2IDM2NC4yNCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMzMuODggMzY0LjQwIEMgMjM1LjI5IDM2NC4xMyAyMzYuNjkgMzYzLjg4IDIzOC4xMCAzNjMuNjQgQyAyMzguODggMzY3LjMwIDIzOS43MSAzNzAuOTQgMjQwLjcwIDM3NC41NSBDIDIzOS4xNyAzNzQuOTIgMjM3LjY1IDM3NS4yOSAyMzYuMTIgMzc1LjYzIEMgMjM1LjQyIDM3MS44NyAyMzQuNTMgMzY4LjE2IDIzMy44OCAzNjQuNDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjI3LjUzIDM2NS41MSBDIDIyOC45NiAzNjUuMzMgMjMwLjQwIDM2NS4xNyAyMzEuODQgMzY1LjAxIEMgMjMyLjA2IDM2OC42NiAyMzUuMjYgMzczLjgxIDIzMS4yMiAzNzYuMjUgQyAyMjcuNTUgMzc3LjU3IDIyMy41NyAzNzcuNTYgMjE5Ljc1IDM3OC4yMSBDIDIxOS43MCAzNzcuNDcgMjE5LjYwIDM3Ni4wMCAyMTkuNTUgMzc1LjI2IEMgMjIwLjI0IDM3NS4xMiAyMjEuNjQgMzc0Ljg0IDIyMi4zMyAzNzQuNzAgQyAyMjEuMzQgMzcyLjAxIDIyMC4wOSAzNjkuNDIgMjE5LjAxIDM2Ni43OCBDIDIyMC4wOSAzNjYuNjQgMjIyLjI2IDM2Ni4zNyAyMjMuMzQgMzY2LjI0IEMgMjI0LjgzIDM2OS4xMCAyMjUuMzkgMzcyLjYzIDIyOC4wMCAzNzQuNzYgQyAyMjkuNTIgMzcxLjgwIDIyNy43OSAzNjguNTUgMjI3LjUzIDM2NS41MSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNzIuMDYgMzY2LjEzIEMgMTczLjUxIDM2Ni4yNyAxNzQuOTYgMzY2LjQyIDE3Ni40MSAzNjYuNTcgQyAxNzUuOTEgMzcwLjMwIDE3NS4zOCAzNzQuMDIgMTc1LjA1IDM3Ny43NyBDIDE3My40OCAzNzcuNjUgMTcxLjkyIDM3Ny41MSAxNzAuMzUgMzc3LjM3IEMgMTcwLjk2IDM3My42MyAxNzEuNTcgMzY5Ljg5IDE3Mi4wNiAzNjYuMTMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTc4LjAyIDM2OS43NCBDIDE3OC4yMCAzNjguNzUgMTc4LjM5IDM2Ny43NyAxNzguNTkgMzY2Ljc5IEMgMTgyLjE2IDM2Ny40NiAxODYuMDMgMzY2LjkzIDE4OS4zNiAzNjguNjQgQyAxODkuMzEgMzcyLjIxIDE4OS4yMCAzNzUuNzkgMTg4LjY0IDM3OS4zMyBDIDE4Ny41NyAzNzkuMTggMTg1LjQzIDM3OC44OSAxODQuMzYgMzc4Ljc1IEMgMTg0LjU0IDM3Ni4wMSAxODQuNzQgMzczLjI4IDE4NC44NyAzNzAuNTUgQyAxODIuNTggMzcwLjM1IDE4MC4yOSAzNzAuMDkgMTc4LjAyIDM2OS43NCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTEuNzYgMzY3Ljc5IEMgMTkzLjIyIDM2Ny44MyAxOTQuNjggMzY3Ljg3IDE5Ni4xNCAzNjcuOTIgQyAxOTYuMTMgMzcwLjE2IDE5Ni4xMyAzNzIuMzkgMTk2LjE0IDM3NC42NCBDIDE5NC42MSAzNzQuNjQgMTkzLjA3IDM3NC42NSAxOTEuNTQgMzc0LjY1IEMgMTkxLjYxIDM3Mi4zNiAxOTEuNjkgMzcwLjA3IDE5MS43NiAzNjcuNzkgWlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cbn1cblxuTG9nby5Qcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBoZWlnaHQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIG9wYWNpdHk6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xvZ28uanN4IiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2hvbWVQYWdlLnJ0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQge3VwZGF0ZUJvb2tpbmcsIGNhbmNlbEJvb2tpbmd9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMnO1xuaW1wb3J0IHt1cGRhdGVVc2VyfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuY29uc3QgdGVhbXNEYXRhID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdGVhbXNEYXRhJyk7XG5cbmZ1bmN0aW9uIHBhcnNlRXZlbnREYXRlKGV2ZW50KSB7XG4gIGNvbnN0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50LnllYXIsIGV2ZW50Lm1vbnRoLCBldmVudC5kYXkpO1xuICBldmVudERhdGUuc2V0TW9udGgoZXZlbnREYXRlLmdldE1vbnRoKCkgLSAxKTtcbiAgcmV0dXJuIGV2ZW50RGF0ZTtcbn1cblxuZnVuY3Rpb24gaXNGdXR1cmVFdmVudChldmVudCkge1xuICBjb25zdCBldmVudERhdGUgPSBwYXJzZUV2ZW50RGF0ZShldmVudCk7XG4gIHJldHVybiBldmVudERhdGUgPiBEYXRlLm5vdygpO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGF1dGhEYXRhOiBzdGF0ZS5hdXRoRGF0YSxcbiAgZXZlbnRzOiBzdGF0ZS5ldmVudHMsXG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmdzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdXBkYXRlQm9va2luZzogKHVpZCwgZXZlbnRJZCwgYm9va2luZykgPT4gZGlzcGF0Y2godXBkYXRlQm9va2luZyh1aWQsIGV2ZW50SWQsIGJvb2tpbmcpKSxcbiAgY2FuY2VsQm9va2luZzogKHVpZCwgZXZlbnRJZCkgPT4gZGlzcGF0Y2goY2FuY2VsQm9va2luZyh1aWQsIGV2ZW50SWQpKSxcbiAgdXBkYXRlVXNlcjogKHVpZCwgdXNlcikgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1aWQsIHVzZXIpKVxufSk7XG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXZlbnRJZDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGdldE9wZW5FdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ub21pdEJ5KHRoaXMucHJvcHMuZXZlbnRzLCBldmVudCA9PiBldmVudC5zdGF0dXMgPT09IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLkNMT1NFRC52YWx1ZSk7XG4gIH1cblxuICBnZXRDbG9zZWRFdmVudHMoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy5ldmVudHMpXG4gICAgICAub21pdEJ5KGV2ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnN0YXR1cyAhPT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuQ0xPU0VELnZhbHVlIHx8ICFpc0Z1dHVyZUV2ZW50KGV2ZW50KTtcbiAgICAgIH0pXG4gICAgICAubWFwKChldmVudCwgZXZlbnRJZCkgPT4gKHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGV2ZW50SWRcbiAgICAgIH0pKVxuICAgICAgLnNvcnRCeShldmVudERhdGEgPT4gcGFyc2VFdmVudERhdGUoZXZlbnREYXRhLmV2ZW50KSlcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgYm9va0V2ZW50KGV2ZW50SWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudElkfSk7XG4gIH1cblxuICBpc0Jvb2tpbmdFbmFibGVkKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5zdGF0dXMpIHtcbiAgICAgIGNhc2UgQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfQUxMLnZhbHVlOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUy52YWx1ZToge1xuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2Vyc1t0aGlzLnByb3BzLmF1dGhEYXRhLnVpZF07XG4gICAgICAgIHJldHVybiB1c2VyLnNlYXNvblRpY2tldHMgPiAwXG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudE5hbWUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZUlkKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLm5hbWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnRIYXBvZWxJbWFnZSgpIHtcbiAgICByZXR1cm4gJ2h0dHA6Ly9oYXBvZWwuY28uaWwvc2l0ZXMvZGVmYXVsdC9maWxlcy9sb2dvMTIweDEyMC5wbmcnO1xuICB9XG5cbiAgaXNSZWdpc3RlcmVkVG9FdmVudChldmVudElkKSB7XG4gICAgY29uc3QgdXNlckJvb2tpbmdzID0gdGhpcy5wcm9wcy5ib29raW5nc1t0aGlzLnByb3BzLmF1dGhEYXRhLnVpZF07XG5cbiAgICByZXR1cm4gXy5oYXModXNlckJvb2tpbmdzLCBldmVudElkKTtcbiAgfVxuXG4gIGdldEV2ZW50SW1hZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudHlwZUlkKSB7XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLnNyYztcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudERhdGUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmVudC5kYXkgKyAnLycgKyBldmVudC5tb250aCArICcvJyArIGV2ZW50LnllYXI7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnRUaW1lKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICByZXR1cm4gZXZlbnQuaG91ciArICc6JyArIGV2ZW50Lm1pbnV0ZTtcbiAgICB9XG4gIH1cblxuICBzdG9wRWRpdGluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtldmVudElkOiBudWxsfSk7XG4gIH1cblxuICB1cGRhdGVCb29raW5nKGJvb2tpbmcpIHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUJvb2tpbmcodGhpcy5wcm9wcy5hdXRoRGF0YS51aWQsIHRoaXMuc3RhdGUuZXZlbnRJZCwgYm9va2luZyk7XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgY2FuY2VsQm9va2luZyhldmVudElkKSB7XG4gICAgdGhpcy5wcm9wcy5jYW5jZWxCb29raW5nKHRoaXMucHJvcHMuYXV0aERhdGEudWlkLCBldmVudElkKTtcbiAgfVxuXG4gIGNyZWF0ZVVzZXJJbmZvKHVpZCwgdXNlcikge1xuICAgIHVzZXIucGhvdG9VUkwgPSB0aGlzLnByb3BzLmF1dGhEYXRhLnBob3RvVVJMO1xuICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih1aWQsIHVzZXIpO1xuICB9XG5cbiAgZ2V0SG9tZVRlYW0oKSB7XG4gICAgcmV0dXJuIHRlYW1zRGF0YS5IQVBPRUxfSkVSVVNBTEVNO1xuICB9XG5cbiAgZ2V0QXdheVRlYW0oZXZlbnQpIHtcbiAgICByZXR1cm4gdGVhbXNEYXRhW2V2ZW50LnR5cGVJZF07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbkhvbWVQYWdlLnByb3BUeXBlcyA9IHtcbiAgYXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZVBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9ldmVudEl0ZW0nLFxuICAgICcuLi9ib29raW5nRm9ybS9ib29raW5nRm9ybScsXG4gICAgJy4uL3VzZXJGb3JtJyxcbiAgICAnLi9ob21lUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBFdmVudEl0ZW0sIEJvb2tpbmdGb3JtLCBVc2VyRm9ybSwgaG9tZVBhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25Cb29raW5nMShvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHRoaXMuYm9va0V2ZW50KGV2ZW50SW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNhbmNlbEJvb2tpbmcyKG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxCb29raW5nKGV2ZW50SW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDMob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudEl0ZW0sIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAnZXZlbnRJZCc6IGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAnb25Cb29raW5nJzogb25Cb29raW5nMS5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2FuY2VsQm9va2luZyc6IG9uQ2FuY2VsQm9va2luZzIuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Cb29raW5nNChvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHRoaXMuYm9va0V2ZW50KGV2ZW50LmV2ZW50SWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNhbmNlbEJvb2tpbmc1KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxCb29raW5nKGV2ZW50LmV2ZW50SWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDYob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudEl0ZW0sIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAnZXZlbnRJZCc6IGV2ZW50LmV2ZW50SWQsXG4gICAgICAgICAgICAnb25Cb29raW5nJzogb25Cb29raW5nNC5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2FuY2VsQm9va2luZyc6IG9uQ2FuY2VsQm9va2luZzUuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25TdWJtaXQ3KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZWRpdGluZ0V2ZW50LCBib29raW5nKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQm9va2luZyhib29raW5nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTgob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBlZGl0aW5nRXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZUVkaXRpbmdFdmVudDkob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyKSB7XG4gICAgICAgIHZhciBlZGl0aW5nRXZlbnQgPSB0aGlzLnByb3BzLmV2ZW50c1t0aGlzLnN0YXRlLmV2ZW50SWRdO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChCb29raW5nRm9ybSwge1xuICAgICAgICAgICAgJ2tleSc6ICdlZGl0LWJvb2tpbmcnLFxuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRFdmVudE5hbWUoZWRpdGluZ0V2ZW50KSArICcgLSAnICsgdGhpcy5nZXRFdmVudERhdGUoZWRpdGluZ0V2ZW50KSArICcgJyArIHRoaXMuZ2V0RXZlbnRUaW1lKGVkaXRpbmdFdmVudCksXG4gICAgICAgICAgICAnYm9va2luZyc6IF8uZ2V0KHRoaXMucHJvcHMuYm9va2luZ3MsIFtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGhEYXRhLnVpZCxcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmV2ZW50SWRcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgJ29uU3VibWl0Jzogb25TdWJtaXQ3LmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBlZGl0aW5nRXZlbnQpLFxuICAgICAgICAgICAgJ3NlYXNvblRpY2tldHMnOiBfLmdldCh0aGlzLnByb3BzLnVzZXJzLCBbXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoRGF0YS51aWQsXG4gICAgICAgICAgICAgICAgJ3NlYXNvblRpY2tldHMnXG4gICAgICAgICAgICBdKSB8fCAwLFxuICAgICAgICAgICAgJ29uQ2xvc2UnOiBvbkNsb3NlOC5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZWRpdGluZ0V2ZW50KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVPcGVuRXZlbnRzQ2xvc2VkRXZlbnRzSGFzVXNlcjEwKCkge1xuICAgICAgICB2YXIgb3BlbkV2ZW50cyA9IHRoaXMuZ2V0T3BlbkV2ZW50cygpO1xuICAgICAgICB2YXIgY2xvc2VkRXZlbnRzID0gdGhpcy5nZXRDbG9zZWRFdmVudHMoKTtcbiAgICAgICAgdmFyIGhhc1VzZXIgPSB0aGlzLnByb3BzLnVzZXJzW3RoaXMucHJvcHMuYXV0aERhdGEudWlkXTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzaXRlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaG9tZS1wYWdlIHNtYWxsLWNlbnRlcmVkJyB9LCBoYXNVc2VyID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdldmVudHMtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnRzLWNvbnRhaW5lcidcbiAgICAgICAgfSwgIXRoaXMuc3RhdGUuZXZlbnRJZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZXZlbnRzJyxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnRzJ1xuICAgICAgICB9LCBfLnNpemUob3BlbkV2ZW50cykgPT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3Nob3ctZm9yLXNtYWxsLW9ubHkgbm8tYm9va2luZ3MgbW9yZS1zcGFjZScsXG4gICAgICAgICAgICAna2V5JzogJzY1OCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15DXmdefINeb16jXkteiINeU16HXoteV16og16TXqteV15fXldeqJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWJ1cycsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSkpIDogbnVsbCwgXy5zaXplKG9wZW5FdmVudHMpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2V2ZW50cy1saXN0IG9wZW4tZXZlbnRzJyxcbiAgICAgICAgICAgICAgICAna2V5JzogJzkwOCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2NsYXNzTmFtZSc6ICdoaWRlLWZvci1zbWFsbC1vbmx5JyB9LCAn15TXodei15XXqjonKSxcbiAgICAgICAgICAgIF8ubWFwKG9wZW5FdmVudHMsIHJlcGVhdEV2ZW50My5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlcikpXG4gICAgICAgIF0pIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2NsYXNzTmFtZSc6ICdldmVudHMtbGlzdCBjbG9zZWQtZXZlbnRzIGhpZGUtZm9yLXNtYWxsLW9ubHknIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHt9LCAn15TXlNeh16LXldeqINeU15HXkNeV16o6JyksXG4gICAgICAgICAgICBfLm1hcChjbG9zZWRFdmVudHMsIHJlcGVhdEV2ZW50Ni5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlcikpXG4gICAgICAgIF0pKSA6IG51bGwsIHRoaXMuc3RhdGUuZXZlbnRJZCA/IHNjb3BlRWRpdGluZ0V2ZW50OS5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICBvcGVuRXZlbnRzLFxuICAgICAgICAgICAgY2xvc2VkRXZlbnRzLFxuICAgICAgICAgICAgaGFzVXNlclxuICAgICAgICBdKSA6IG51bGwpIDogbnVsbCwgIWhhc1VzZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3VzZXItZWRpdC1jb250YWluZXInLFxuICAgICAgICAgICAgJ2tleSc6ICd1c2VyLWVkaXQtY29udGFpbmVyJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFVzZXJGb3JtLCB7ICd1aWQnOiB0aGlzLnByb3BzLmF1dGhEYXRhLnVpZCB9KSkgOiBudWxsKSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY29wZU9wZW5FdmVudHNDbG9zZWRFdmVudHNIYXNVc2VyMTAuYXBwbHkodGhpcywgW10pO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgZ2FtZXNDb25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9nYW1lQ29uc3RhbnRzJyk7XG5jb25zdCBib29raW5nc0NvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2Jvb2tpbmdzQ29uc3RhbnRzJyk7XG5jb25zdCB0ZWFtc0RhdGEgPSByZXF1aXJlKCcuLi91dGlscy90ZWFtc0RhdGEnKTtcblxucmVxdWlyZSgnLi4vc3R5bGVzL2V2ZW50SXRlbS5zY3NzJyk7XG5cbmZ1bmN0aW9uIGlzQm9va2luZ0VuYWJsZWQoZXZlbnQsIHVzZXIpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnN0YXR1cykge1xuICAgICAgICBjYXNlIGdhbWVzQ29uc3RhbnRzLlNUQVRVUy5PUEVOX0ZPUl9BTEw6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBnYW1lc0NvbnN0YW50cy5TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUzoge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXIuc2Vhc29uVGlja2V0cyA+IDBcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcbiAgICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuICAgIGNvbnN0IGV2ZW50ID0gc3RhdGUuZXZlbnRzW293blByb3BzLmV2ZW50SWRdO1xuICAgIGNvbnN0IGJvb2tpbmdzID0gc3RhdGUuYm9va2luZ3M7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBob21lVGVhbTogdGVhbXNEYXRhLkhBUE9FTF9KRVJVU0FMRU0sXG4gICAgICAgIGF3YXlUZWFtOiB0ZWFtc0RhdGFbZXZlbnQudHlwZUlkXSxcbiAgICAgICAgc3RhdHVzOiBldmVudC5zdGF0dXMsXG4gICAgICAgIGRhdGU6IGV2ZW50LmRheSArICcvJyArIGV2ZW50Lm1vbnRoICsgJy8nICsgZXZlbnQueWVhcixcbiAgICAgICAgdGltZTogZXZlbnQuaG91ciArICc6JyArIGV2ZW50Lm1pbnV0ZSxcbiAgICAgICAgaXNCb29raW5nQWxsb3dlZDogaXNCb29raW5nRW5hYmxlZChldmVudCwgdXNlcnNbYXV0aERhdGEudWlkXSksXG4gICAgICAgIGlzQm9va2VkOiBfLmhhc0luKGJvb2tpbmdzLCBbYXV0aERhdGEudWlkLCBvd25Qcm9wcy5ldmVudElkXSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlYW1Mb2dvcyhob21lLCBhd2F5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBzLWltYWdlcyBtZWRpdW0tNCBzbWFsbC0xMiB0ZXh0LWNlbnRlciBtZWRpdW0tdGV4dC1yaWdodCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIHNtYWxsIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBzcmM9e2hvbWUubG9nb30vPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgaGlkZS1mb3Itc21hbGwtb25seVwiPntob21lLmxhYmVsfTwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGUtZm9yLXNtYWxsLW9ubHkgc2VwYXJhdG9yXCI+IC0gPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBzbWFsbCBoaWRlLWZvci1zbWFsbC1vbmx5XCIgc3JjPXthd2F5LmxvZ299Lz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IGhpZGUtZm9yLXNtYWxsLW9ubHlcIj57YXdheS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHMtbmFtZXMgc2hvdy1mb3Itc21hbGwtb25seSB0ZXh0LWNlbnRlciByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgc21hbGwtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIGJpZ1wiIHNyYz17aG9tZS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgc21hbGxcIj57aG9tZS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHNtYWxsLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJldmVudC1pbWFnZSBiaWdcIiBzcmM9e2F3YXkubG9nb30vPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncm91cC10ZXh0IHNtYWxsXCI+e2F3YXkubGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50VGltZUFuZERhdGUoZGF0ZSwgdGltZSwgaXNPcGVuRm9yQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIGhpZGUtZm9yLXNtYWxsLW9ubHlcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyA8c3BhbiBjbGFzc05hbWU9XCJldmVudC10aW1lXCI+e3RpbWV9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LWRhdGVcIj57ZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnVsbHlCb29rZWRMYWJlbCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBoaWRlLWZvci1zbWFsbC1vbmx5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtc3RhdHVzXCI+e2dhbWVzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5mdWxseUJvb2tlZH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pbmZvIGNvbHVtbiBtZWRpdW0tMiBzbWFsbC0xMiBzaG93LWZvci1zbWFsbC1vbmx5IGNvbG9yZWRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdGF0dXNcIj57Z2FtZXNDb25zdGFudHMuVFJBTlNMQVRJT05TLmZ1bGx5Qm9va2VkfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQnV0dG9uKGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcpIHtcbiAgICBjb25zdCBib29rQnV0dG9uID0gKFxuICAgICAgICA8c3BhbiBrZXk9XCJib29rLWJ0blwiPlxuICAgICAgICAgICAgPHNwYW4+e2Jvb2tpbmdzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5ib29rfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJ1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG5cbiAgICBjb25zdCBlZGl0Qm9va2luZ0J1dHRvbiA9IChcbiAgICAgICAgPHNwYW4ga2V5PVwiZWRpdC1idG5cIj5cbiAgICAgICAgICAgIDxzcGFuPntib29raW5nc0NvbnN0YW50cy5UUkFOU0xBVElPTlMuZWRpdEJvb2tpbmd9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYnVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzdWNjZXNzIHNtYWxsXCIga2V5PVwicmVnaXN0ZXItYnRuXCIgb25DbGljaz17b25Cb29raW5nfSBkaXNhYmxlZD17IWlzQm9va2luZ0FsbG93ZWR9PlxuICAgICAgICAgICAgeyBpc0Jvb2tlZCA/IGVkaXRCb29raW5nQnV0dG9uIDogYm9va0J1dHRvbiB9XG4gICAgICAgIDwvYT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uKG9uQ2FuY2VsQm9va2luZykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBzbWFsbCBhbGVydFwiIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvbkNhbmNlbEJvb2tpbmd9PlxuICAgICAgICAgICAgPHNwYW4+e2Jvb2tpbmdzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5jYW5jZWxCb29raW5nfTwvc3Bhbj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L2E+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uc0J1dHRvbnMoaXNPcGVuRm9yQm9va2luZywgaXNCb29raW5nQWxsb3dlZCwgaXNCb29rZWQsIG9uQm9va2luZywgb25DYW5jZWxCb29raW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9ucyBtZWRpdW0tNCBzbWFsbC0xMiB0ZXh0LWNlbnRlciBtZWRpdW0tdGV4dC1sZWZ0IGNvbHVtblwiPlxuICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nID8gY3JlYXRlQm9va2luZ0J1dHRvbihpc0Jvb2tpbmdBbGxvd2VkLCBpc0Jvb2tlZCwgb25Cb29raW5nKSA6IG51bGwgfVxuICAgICAgICAgICAgeyBpc09wZW5Gb3JCb29raW5nICYmIGlzQm9va2VkID8gY3JlYXRlQm9va2luZ0NhbmNlbGxhdGlvbkJ1dHRvbihvbkNhbmNlbEJvb2tpbmcpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNsYXNzIEV2ZW50SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpc09wZW5Gb3JCb29raW5nID0gdGhpcy5wcm9wcy5zdGF0dXMgIT09IGdhbWVzQ29uc3RhbnRzLlNUQVRVUy5DTE9TRUQ7XG4gICAgICAgIGNvbnN0IGlzRnVsbHlCb29rZWQgPSB0aGlzLnByb3BzLnN0YXR1cyA9PT0gZ2FtZXNDb25zdGFudHMuU1RBVFVTLkZVTExZX0JPT0tFRDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaXRlbSByb3cgY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZVRlYW1Mb2dvcyh0aGlzLnByb3BzLmhvbWVUZWFtLCB0aGlzLnByb3BzLmF3YXlUZWFtKSB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVFdmVudFRpbWVBbmREYXRlKHRoaXMucHJvcHMuZGF0ZSwgdGhpcy5wcm9wcy50aW1lLCBpc09wZW5Gb3JCb29raW5nICl9XG4gICAgICAgICAgICAgICAgeyBpc0Z1bGx5Qm9va2VkID8gY3JlYXRlRnVsbHlCb29rZWRMYWJlbCgpIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgeyBjcmVhdGVBY3Rpb25zQnV0dG9ucyhpc09wZW5Gb3JCb29raW5nLCB0aGlzLnByb3BzLmlzQm9va2luZ0FsbG93ZWQsIHRoaXMucHJvcHMuaXNCb29rZWQsIHRoaXMucHJvcHMub25Cb29raW5nLCB0aGlzLnByb3BzLm9uQ2FuY2VsQm9va2luZykgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5FdmVudEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIGhvbWVUZWFtOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgbG9nbzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgYXdheVRlYW06IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsb2dvOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhdHVzOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzQm9va2luZ0FsbG93ZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGlzQm9va2VkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvbkJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2FuY2VsQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRXZlbnRJdGVtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNUQVRVUzoge1xuICAgIENMT1NFRDogJ2Nsb3NlZCcsXG4gICAgT1BFTl9GT1JfTUVNQkVSUzogJ29wZW5Gb3JNZW1iZXJzJyxcbiAgICBPUEVOX0ZPUl9BTEw6ICdvcGVuRm9yQWxsJyxcbiAgICBGVUxMWV9CT09LRUQ6ICdmdWxseUJvb2tlZCdcbiAgfSxcbiAgVFJBTlNMQVRJT05TOiB7XG4gICAgY2xvc2VkOiAn15TXlNeo16nXnteUINeh15LXldeo15QnLFxuICAgIG9wZW5Gb3JNZW1iZXJzOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXnteg15XXmdeZINeU16HXoteV16onLFxuICAgIG9wZW5Gb3JBbGw6ICfXlNeU16jXqdee15Qg16TXqteV15fXlCDXnNeb15XXnNedJyxcbiAgICBmdWxseUJvb2tlZDogJ9eU15TXodei15Qg157XnNeQ15QnXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2dhbWVDb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgVFJBTlNMQVRJT05TOiB7XG4gICAgYm9vazogJ9eU16jXqdedJyxcbiAgICBlZGl0Qm9va2luZzogJ9ei16jXldeaJyxcbiAgICBjYW5jZWxCb29raW5nOiAn15HXmNecINeU16jXqdee15QnXG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2Jvb2tpbmdzQ29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIEhBUE9FTF9KRVJVU0FMRU06IHtcbiAgICBsYWJlbDogJ9eU16TXldei15wg15nXqNeV16nXnNeZ150nLFxuICAgIGxvZ286ICdodHRwOi8vaGFwb2VsLmNvLmlsL3NpdGVzL2RlZmF1bHQvZmlsZXMvbG9nbzEyMHgxMjAucG5nJ1xuICB9LFxuICAnaGFwb2VsLXRsdic6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29faGFwb2VsdGEucG5nJyxcbiAgICBsYWJlbDogJ9eU16TXldei15wg16rXnCDXkNeR15nXkSdcbiAgfSxcbiAgJ21hY2NhYmktdGx2Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19tYWNjYWJpLnBuZycsXG4gICAgbGFiZWw6ICfXnteb15HXmSDXqtecINeQ15HXmdeRJ1xuICB9LFxuICAnaGVyemVsaXlhJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19zaGFyb24ucG5nJyxcbiAgICBsYWJlbDogJ9eR16DXmSDXlNeo16bXnNeZ15QnXG4gIH0sXG4gICdraXJ5YXQtZ2F0Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9JbWFnZXMvdGVhbXMvYmlnR2F0LnBuZycsXG4gICAgbGFiZWw6ICfXnteb15HXmSDXp9eo15nXqiDXkteqJ1xuICB9LFxuICAnZ2lsYm9hJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19HYWxpbC5wbmcnLFxuICAgIGxhYmVsOiAn15LXnNeZ15wv15LXnNeR15XXoidcbiAgfSxcbiAgJ25haGFyaXlhJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19uYWhhcmlhLnBuZycsXG4gICAgbGFiZWw6ICfXoteZ16jXldeg15kg16DXlNeo15nXlCdcbiAgfSxcbiAgJ2hvbG9uJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvYXJ0aWNsZXMvbG9nb19oaC5wbmcnLFxuICAgIGxhYmVsOiAn15TXpNeV16LXnCDXl9eV15zXldefJ1xuICB9LFxuICAnYXNoZG9kJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19hc2hkb2QucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeQ16nXk9eV15MnXG4gIH0sXG4gICdoYWlmYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3d3dy5iYXNrZXQuY28uaWwvcGljcy8yMDA3L2xvZ29zL2xvZ29faGFpZmEucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeX15nXpNeUJ1xuICB9LFxuICAncmlzaG9uJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19yaXNob24ucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeo15DXqdeV158g15zXpteZ15XXnydcbiAgfSxcbiAgJ2VpbGF0Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19laWxhdC5wbmcnLFxuICAgIGxhYmVsOiAn15TXpNeV16LXnCDXkNeZ15zXqidcbiAgfSxcbiAgJ2xqdWJsamFuYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi84LzhlL1VuaW9uX29saW1waWphLnBuZy8xNDBweC1Vbmlvbl9vbGltcGlqYS5wbmcnLFxuICAgIGxhYmVsOiAn15zXldeR15zXmdeQ16DXlCdcbiAgfSxcbiAgJ3ZhbGVuY2lhJzoge1xuICAgIGxvZ286ICdodHRwOi8vc2FtdmFucm9zc29tLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8xMC92YWxlbmNpYS1iYXNrZXQxLWxvZ28uanBnJyxcbiAgICBsYWJlbDogJ9eV15zXoNeh15nXlCdcbiAgfSxcbiAgJ2t1YmFuJzoge1xuICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzAvMDQvTG9rb21vdGl2X0t1YmFuX2xvZ28ucG5nLzIwMHB4LUxva29tb3Rpdl9LdWJhbl9sb2dvLnBuZycsXG4gICAgbGFiZWw6ICfXnNeV16fXldee15XXmNeZ15Eg16fXldeR15DXnydcbiAgfSxcbiAgJ2Z1ZW5sYWJyYWRhJzoge1xuICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL3RodW1iLzEvMTMvQmFsb25jZXN0b2Z1ZW5sYWJyYWRhLmpwZy8xMTBweC1CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnJyxcbiAgICBsYWJlbDogJ9ek15XXkNeg15zXkdeo15PXlCdcbiAgfSxcbiAgJ3VsbSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL25hY2h3dWNocy5iYnUwMS5jb20vbW9kdWxlcy9tb2RfYmJ1bmV3c2ZsYXNoL2Fzc2V0cy9pbWFnZXMvbm9pbWFnZV90aHVtYi5qcGcnLFxuICAgIGxhYmVsOiAn15DXldec150nXG4gIH0sXG4gICd2aWxuYSc6IHtcbiAgICBsb2dvOiAnaHR0cDovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi83Lzc1L0JDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLzkwN3B4LUJDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLnBuZycsXG4gICAgbGFiZWw6ICfXqNeZ15jXkNehINeV15nXnNeg15QnXG4gIH0sXG4gICdub3Znb3JvZCc6IHtcbiAgICBsb2dvOiAnaHR0cDovL29seW1waWFrb3MtbGl2ZS5nci9pbWcvdGVhbXMvTml6aG55JTIwTm92Z29yb2QucG5nJyxcbiAgICBsYWJlbDogJ9eg15nXltez16DXmSdcbiAgfSxcbiAgJ3plbml0Jzoge1xuICAgIGxvZ286ICdodHRwOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yNS9GQ19aZW5pdF8xX3N0YXJfMjAxNV9sb2dvLnBuZy8yMjBweC1GQ19aZW5pdF8xX3N0YXJfMjAxNV9sb2dvLnBuZycsXG4gICAgbGFiZWw6ICfXlteg15nXmCdcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy90ZWFtc0RhdGEuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRJdGVtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXZlbnQtaXRlbSB7XFxuICBmb250LXNpemU6IDAuOWVtOyB9XFxuICAuZXZlbnQtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLWltYWdlcyAuc2VwYXJhdG9yIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbWFnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2UuYmlnIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogOTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2Uuc21hbGwge1xcbiAgICAgIG1hcmdpbjogMCA1cHg7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAuZXZlbnQtaXRlbSAuZ3JvdXBzLW5hbWVzIHtcXG4gICAgcGFkZGluZzogMCA0ZW07IH1cXG4gIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5ldmVudC1pbmZvLmNvbG9yZWQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyAuZXZlbnQtc3RhdHVzIHtcXG4gICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyBzcGFuIHtcXG4gICAgICBtYXJnaW46IDAgMTVweDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmFjdGlvbi1idXR0b25zIC5idXR0b24uc21hbGwge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgICBtYXJnaW46IDAgNXB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9ldmVudEl0ZW0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Jvb2tpbmdGb3JtLnJ0JztcblxuY29uc3QgZW1wdHlCb29raW5nID0ge1xuICBwYWlkU2VhdHM6IDAsXG4gIGV4dHJhU2VhdHM6IDAsXG4gIHBpY2tVcDogJ3RsdicsXG4gIGRyb3BPZmY6ICd0bHYnXG59O1xuXG5jb25zdCBib29raW5nRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdCb29raW5nRm9ybScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TdWJtaXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYm9va2luZzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvbkNsb3NlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBib29raW5nID0gXy5kZWZhdWx0cyh0aGlzLnByb3BzLmJvb2tpbmcsIHsgcGFpZFNlYXRzOiB0aGlzLnByb3BzLnNlYXNvblRpY2tldHMgfSwgZW1wdHlCb29raW5nKTtcbiAgICByZXR1cm4gXy5tZXJnZSh7fSwgYm9va2luZywge1xuICAgICAgcGlja1VwRW5hYmxlZDogISFib29raW5nLnBpY2tVcCxcbiAgICAgIGRyb3BPZmZFbmFibGVkOiAhIWJvb2tpbmcuZHJvcE9mZlxuICAgIH0pO1xuICB9LFxuXG4gIG9uQ2hhbmdlKGUsIHZhbGlkYXRpb25UeXBlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ251bWVyaWMnKSB7XG4gICAgICBpZiAoIS9eWzAtOV0qJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0aW9uVHlwZSA9PT0gJ2hlYnJldycpIHtcbiAgICAgIGlmICghL15b15At16pcXHNdKiQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICB0b2dnbGVQaWNrVXAoZSkge1xuICAgIGNvbnN0IHBpY2tVcEVuYWJsZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwaWNrVXBFbmFibGVkIH0pO1xuICAgIGlmICghcGlja1VwRW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBpY2tVcDogJycgfSk7XG4gICAgfVxuICB9LFxuXG4gIHRvZ2dsZURyb3BPZmYoZSkge1xuICAgIGNvbnN0IGRyb3BPZmZFbmFibGVkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJvcE9mZkVuYWJsZWQgfSk7XG4gICAgaWYgKCFkcm9wT2ZmRW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BPZmY6ICcnIH0pO1xuICAgIH1cbiAgfSxcblxuICBvbk51bWVyaWNDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfSxcblxuICBpc0Zvcm1WYWxpZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wYWlkU2VhdHMgPT09IDAgJiYgdGhpcy5zdGF0ZS5leHRyYVNlYXRzID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnBpY2tVcEVuYWJsZWQgJiYgIXRoaXMuc3RhdGUuZHJvcE9mZkVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkICYmIHRoaXMuc3RhdGUucGlja1VwID09PSAnJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmRyb3BPZmZFbmFibGVkICYmIHRoaXMuc3RhdGUuZHJvcE9mZiA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCBib29raW5nVG9TdWJtaXQgPSBfLnBpY2sodGhpcy5zdGF0ZSwgXy5rZXlzKGVtcHR5Qm9va2luZykpO1xuICAgIHRoaXMucHJvcHMub25TdWJtaXQoYm9va2luZ1RvU3VibWl0KTtcbiAgfSxcblxuICByZW5kZXI6IHRlbXBsYXRlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBib29raW5nRm9ybTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nRm9ybS9ib29raW5nRm9ybS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vZm9ybUZyYW1lJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBGb3JtRnJhbWUsIGNvbnN0YW50cykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiByZXBlYXRTZWF0MShzZWF0LCBzZWF0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnc2VhdC0nICsgc2VhdEluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogc2VhdEluZGV4XG4gICAgICAgIH0sIHNlYXRJbmRleCwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFeHRyYVNlYXQyKGV4dHJhU2VhdCwgZXh0cmFTZWF0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnZXh0cmFTZWF0LScgKyBleHRyYVNlYXRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV4dHJhU2VhdEluZGV4XG4gICAgICAgIH0sIGV4dHJhU2VhdEluZGV4LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlMyhlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUGlja1VwKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRTdGF0aW9uNChzdGF0aW9uLCBzdGF0aW9uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnc3RhdGlvbi0nICsgc3RhdGlvbkluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogc3RhdGlvbkluZGV4XG4gICAgICAgIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCBzdGF0aW9uLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2U1KGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wT2ZmKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRTdGF0aW9uNihzdGF0aW9uLCBzdGF0aW9uSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnc3RhdGlvbi0nICsgc3RhdGlvbkluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogc3RhdGlvbkluZGV4XG4gICAgICAgIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCBzdGF0aW9uLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUZyYW1lLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgICAgICAgJ29uU3VibWl0JzogdGhpcy5vblN1Ym1pdCxcbiAgICAgICAgICAgICdvbkNsb3NlJzogdGhpcy5wcm9wcy5vbkNsb3NlLFxuICAgICAgICAgICAgJ2Rpc2FibGVkJzogIXRoaXMuaXNGb3JtVmFsaWQoKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnYm9va2luZy1mb3JtIHNtYWxsLTExIHNtYWxsLWNlbnRlcmVkJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAncm93JyB9LCB0aGlzLnByb3BzLnNlYXNvblRpY2tldHMgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3NtYWxsLTYgY29sdW1ucycsXG4gICAgICAgICAgICAna2V5JzogJzQwNCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eb157XldeqINee16DXldeZ15nXnVxcbiAgICAgICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnBhaWRTZWF0cyxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uTnVtZXJpY0NoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdwYWlkU2VhdHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoXy50aW1lcyh0aGlzLnByb3BzLnNlYXNvblRpY2tldHMgKyAxKSwgcmVwZWF0U2VhdDEuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC02IGNvbHVtbnMgZW5kJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16DXldeh16LXmdedINeR16rXqdec15XXnVxcbiAgICAgICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmV4dHJhU2VhdHMsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbk51bWVyaWNDaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnZXh0cmFTZWF0cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChfLnRpbWVzKGNvbnN0YW50cy5NQVhfRVhUUkFfUEFTU0VOR0VSUyksIHJlcGVhdEV4dHJhU2VhdDIuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdyb3cnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC0zIGxhcmdlLTIgY29sdW1ucycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7ICdodG1sRm9yJzogJ3BpY2tVcFRvZ2dsZScgfSwgJ9eU15zXldeaJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzd2l0Y2gnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzd2l0Y2gtaW5wdXQnLFxuICAgICAgICAgICAgJ2lkJzogJ3BpY2tVcFRvZ2dsZScsXG4gICAgICAgICAgICAndHlwZSc6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTMuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdjaGVja2VkJzogdGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkXG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc3dpdGNoLXBhZGRsZScsXG4gICAgICAgICAgICAnaHRtbEZvcic6ICdwaWNrVXBUb2dnbGUnXG4gICAgICAgIH0pKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC05IGxhcmdlLTEwIGNvbHVtbnMgZW5kIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5waWNrVXAsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdwaWNrVXAnLFxuICAgICAgICAgICAgICAgICdkaXNhYmxlZCc6ICF0aGlzLnN0YXRlLnBpY2tVcEVuYWJsZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnc3R5bGUnOiB7IGRpc3BsYXk6ICdub25lJyB9XG4gICAgICAgICAgICB9LCAn15HXl9eoJyksXG4gICAgICAgICAgICBfLm1hcChjb25zdGFudHMuU1RBVElPTlMsIHJlcGVhdFN0YXRpb240LmJpbmQodGhpcykpXG4gICAgICAgIF0pKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdyb3cnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC0zIGxhcmdlLTIgY29sdW1ucycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7ICdodG1sRm9yJzogJ2Ryb3BPZmZUb2dnbGUnIH0sICfXl9eW15XXqCcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc3dpdGNoJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc3dpdGNoLWlucHV0JyxcbiAgICAgICAgICAgICdpZCc6ICdkcm9wT2ZmVG9nZ2xlJyxcbiAgICAgICAgICAgICd0eXBlJzogJ2NoZWNrYm94JyxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlNS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2NoZWNrZWQnOiB0aGlzLnN0YXRlLmRyb3BPZmZFbmFibGVkXG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc3dpdGNoLXBhZGRsZScsXG4gICAgICAgICAgICAnaHRtbEZvcic6ICdkcm9wT2ZmVG9nZ2xlJ1xuICAgICAgICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtOSBsYXJnZS0xMCBjb2x1bW5zIGVuZCBtb3JlLXNwYWNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZHJvcE9mZixcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ2Ryb3BPZmYnLFxuICAgICAgICAgICAgICAgICdkaXNhYmxlZCc6ICF0aGlzLnN0YXRlLmRyb3BPZmZFbmFibGVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3N0eWxlJzogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgfSwgJ9eR15fXqCcpLFxuICAgICAgICAgICAgXy5tYXAoY29uc3RhbnRzLlNUQVRJT05TLCByZXBlYXRTdGF0aW9uNi5iaW5kKHRoaXMpKVxuICAgICAgICBdKSkpKSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYm9va2luZ0Zvcm0vYm9va2luZ0Zvcm0ucnRcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXg9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5cbmNvbnN0IEZvcm1GcmFtZSA9IHJlcXVpcmUoJy4vZm9ybUZyYW1lJyk7XG5cbmNvbnN0IHVzZXJJbmZvQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXNlckluZm9Db25zdGFudHMnKTtcbmNvbnN0IHVzZXJGb3JtVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zL3VzZXJGb3JtVHJhbnNsYXRpb25zJyk7XG5jb25zdCB1c2VyQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnKTtcblxuY29uc3QgZW1wdHlVc2VyID0ge1xuICAgIGZpcnN0TmFtZTogJycsXG4gICAgbGFzdE5hbWU6ICcnLFxuICAgIHBob25lUHJlZml4OiAnMDUwJyxcbiAgICBwaG9uZU51bWJlcjogJycsXG4gICAgc3RhdGlvbjogJ3RsdicsXG4gICAgc3Vic2NyaWJlU01TOiB0cnVlLFxuICAgIHN1YnNjcmliZU1haWw6IHRydWUsXG4gICAgc2Vhc29uVGlja2V0czogMFxufTtcblxuZnVuY3Rpb24gZ2V0RW1wdHlVc2VySW5mbyhlbWFpbCkge1xuICByZXR1cm4gXy5hc3NpZ24oZW1wdHlVc2VyLCB7IGVtYWlsIH0pO1xufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gICAgY29uc3QgdXNlciA9IHN0YXRlLnVzZXJzW293blByb3BzLnVpZF07XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZXJJbmZvOiB1c2VyIHx8IGdldEVtcHR5VXNlckluZm8oYXV0aERhdGEuZW1haWwpLFxuICAgICAgICBpc0FkbWluTW9kZTogYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgYWxsb3dVc2VyUmVtb3ZlOiBhdXRoRGF0YS5pc0FkbWluICYmIGF1dGhEYXRhLnVpZCAhPT0gb3duUHJvcHMudWlkXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZVVzZXI6IHVzZXIgPT4gZGlzcGF0Y2godXNlckFjdGlvbnMudXBkYXRlVXNlcihvd25Qcm9wcy51aWQsIHVzZXIpKSxcbiAgICAgICAgcmVtb3ZlVXNlcjogKCkgPT4gZGlzcGF0Y2godXNlckFjdGlvbnMucmVtb3ZlVXNlcihvd25Qcm9wcy51aWQpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkbWluU2VjdGlvbihzZWFzb25UaWNrZXRzLCBvbk51bWJlckNoYW5nZSkge1xuICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9XCJzZWFzb25UaWNrZXRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgIDxsYWJlbD7Xm9ee15XXqiDXnteg15XXmdeZ151cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInNlYXNvblRpY2tldHNcIiB2YWx1ZT17c2Vhc29uVGlja2V0c30gb25DaGFuZ2U9e29uTnVtYmVyQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICB7IF8udGltZXModXNlckluZm9Db25zdGFudHMuTUFYX1NFQVNPTl9USUNLRVRTLCBpID0+IDxvcHRpb24ga2V5PXsnYW1vdW50LScgKyBpfSB2YWx1ZT17aX0+e2l9PC9vcHRpb24+KSB9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyTmFtZUlucHV0cyhmaXJzdE5hbWUsIGxhc3ROYW1lLCBvblRleHRDaGFuZ2UpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS02IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5GSVJTVF9OQU1FIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0TmFtZVwiIHZhbHVlPXtmaXJzdE5hbWV9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTYgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLkxBU1RfTkFNRSB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0TmFtZVwiIHZhbHVlPXtsYXN0TmFtZX0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gbWF4TGVuZ3RoPVwiMjBcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1haWxJbnB1dChlbWFpbCwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9XCJ1c2VyLWluZm8tZW1haWwtaW5wdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtMTIgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLkVNQUlMIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lTnVtYmVySW5wdXRzKHBob25lUHJlZml4LCBwaG9uZU51bWJlciwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtOCBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuUEhPTkVfTlVNQkVSIH1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiB2YWx1ZT17cGhvbmVOdW1iZXJ9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjdcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtNCBjb2x1bW5zIGVuZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlBIT05FX1BSRUZJWCB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInBob25lUHJlZml4XCIgdmFsdWU9e3Bob25lUHJlZml4fSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXy5tYXAodXNlckluZm9Db25zdGFudHMuUEhPTkVfUFJFRklYRVMsIHByZWZpeCA9PiA8b3B0aW9uIGtleT17J3Bob25lLXByZWZpeC0nICsgcHJlZml4fSB2YWx1ZT17cHJlZml4fT57cHJlZml4fTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGlja3VwU3RhdGlvblJvdyhzdGF0aW9uLCByZXF1ZXN0Rm9yTWVtYmVyc2hpcCwgb25UZXh0Q2hhbmdlLCBvbkJvb2xlYW5DaGFuZ2UpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTggc21hbGwtMTIgY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLkZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OIH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwic3RhdGlvblwiIHZhbHVlPXtzdGF0aW9ufSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXy5tYXAodXNlckluZm9Db25zdGFudHMuU1RBVElPTlMsIHN0YXRpb24gPT4gPG9wdGlvbiBrZXk9eydzdGF0aW9uLScgKyBzdGF0aW9ufSB2YWx1ZT17c3RhdGlvbn0+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5TVEFUSU9OU1tzdGF0aW9uXSB9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS00IHNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5SRVFVRVNUX0ZPUl9NRU1CRVJTSElQIH1cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmVxdWVzdEZvck1lbWJlcnNoaXBcIiB2YWx1ZT17cmVxdWVzdEZvck1lbWJlcnNoaXB9IG9uQ2hhbmdlPXtvbkJvb2xlYW5DaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dW5kZWZpbmVkfSBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319PteR15fXqDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17dHJ1ZX0+15vXnzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17ZmFsc2V9Ptec15A8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7IGNyZWF0ZVBpY2tVcFN0YXRpb25JbnB1dCgpIH1cbiAgICAgICAgICAgIHsgY3JlYXRlUmVxdWVzdEZvck1lbWJlcnNoaXBJbnB1dCgpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzKHN1YnNjcmliZU1haWwsIHN1YnNjcmliZVNNUywgb25Cb29sZWFuQ2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMyBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5ESVNUUklCVVRJT04uRU1BSUwgfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cInN3aXRjaC1pbnB1dFwiIG5hbWU9XCJzdWJzY3JpYmVNYWlsXCIgaWQ9XCJzdWJzY3JpYmVNYWlsXCIgb25DaGFuZ2U9e29uQm9vbGVhbkNoYW5nZX0gY2hlY2tlZD17c3Vic2NyaWJlTWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaC1wYWRkbGVcIiBodG1sRm9yPVwic3Vic2NyaWJlTWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuVE9HR0xFLllFUyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWluYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5UT0dHTEUuTk8gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC0zIGNvbHVtbiBlbmRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5ESVNUUklCVVRJT04uU01TIH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5wdXRcIiBuYW1lPVwic3Vic2NyaWJlU01TXCIgaWQ9XCJzdWJzY3JpYmVTTVNcIiBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfSBjaGVja2VkPXtzdWJzY3JpYmVTTVN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtcGFkZGxlXCIgaHRtbEZvcj1cInN1YnNjcmliZVNNU1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuVE9HR0xFLllFUyB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoLWluYWN0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5UT0dHTEUuTk8gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IF8uY2xvbmUodGhpcy5wcm9wcy51c2VySW5mbyk7XG4gIH1cblxuICBpc0Zvcm1WYWxpZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhhc0FsbFJlcXVpcmVkSW5mbyA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZEluZm8gPSBfLnBpY2sodGhpcy5zdGF0ZSwgWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAncGhvbmVQcmVmaXgnLCAncGhvbmVOdW1iZXInXSk7XG4gICAgICAgICAgcmV0dXJuICFfLnNvbWUocmVxdWlyZWRJbmZvLCBfLmlzRW1wdHkpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFzVmFsaWRQaG9uZU51bWJlciA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5waG9uZU51bWJlci5sZW5ndGggPT09IDc7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYXNSZXF1ZXN0Rm9yTWVtYmVyc2hpcFByb3BlcnR5ID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBfLmhhcyh0aGlzLnN0YXRlLCAncmVxdWVzdEZvck1lbWJlcnNoaXAnKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBoYXNBbGxSZXF1aXJlZEluZm8oKSAmJiBoYXNWYWxpZFBob25lTnVtYmVyKCkgJiYgaGFzUmVxdWVzdEZvck1lbWJlcnNoaXBQcm9wZXJ0eSgpO1xuICB9O1xuXG4gIG9uS2V5UHJlc3MgPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgaXNGb3JtVmFsaWQodGhpcy5zdGF0ZSkpIHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih0aGlzLnN0YXRlKTtcbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2UgPSAodHlwZSwgZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudHlwZSA9PT0gJ3NlbGVjdC1vbmUnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gKHZhbHVlICE9PSAnZmFsc2UnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4odmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodGhpcy5zdGF0ZSk7XG4gICAgICBpZiAoXy5pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbG9zZSkpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgfTtcblxuICBvblJlbW92ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMucmVtb3ZlVXNlcigpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xvc2UpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qgb25UZXh0Q2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsICd0ZXh0Jyk7XG4gICAgICBjb25zdCBvbk51bWJlckNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzLCAnbnVtYmVyJyk7XG4gICAgICBjb25zdCBvbkJvb2xlYW5DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgJ2Jvb2xlYW4nKTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1GcmFtZSB0aXRsZT17dXNlckZvcm1UcmFuc2xhdGlvbnMuVElUTEV9XG4gICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgb25SZW1vdmU9e3RoaXMucHJvcHMuYWxsb3dVc2VyUmVtb3ZlID8gdGhpcy5vblJlbW92ZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5wcm9wcy5vbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5pc0Zvcm1WYWxpZCgpfT5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtY2VudGVyZWQgdXNlci1jb250YWluZXJcIiBvbktleVByZXNzPXt0aGlzLm9uS2V5UHJlc3N9PlxuXG4gICAgICAgICAgICAgIHsgY3JlYXRlVXNlck5hbWVJbnB1dHModGhpcy5zdGF0ZS5maXJzdE5hbWUsIHRoaXMuc3RhdGUubGFzdE5hbWUsIG9uVGV4dENoYW5nZSkgfVxuICAgICAgICAgICAgICB7IHRoaXMucHJvcHMudXNlckluZm8uZW1haWwgPyBudWxsIDogY3JlYXRlRW1haWxJbnB1dCh0aGlzLnN0YXRlLmVtYWlsLCBvblRleHRDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgeyBjcmVhdGVQaG9uZU51bWJlcklucHV0cyh0aGlzLnN0YXRlLnBob25lUHJlZml4LCB0aGlzLnN0YXRlLnBob25lTnVtYmVyLCBvblRleHRDaGFuZ2UsIG9uTnVtYmVyQ2hhbmdlKSB9XG4gICAgICAgICAgICAgIHsgY3JlYXRlUGlja3VwU3RhdGlvblJvdyh0aGlzLnN0YXRlLnN0YXRpb24sIHRoaXMuc3RhdGUucmVxdWVzdEZvck1lbWJlcnNoaXAsIG9uVGV4dENoYW5nZSwgb25Cb29sZWFuQ2hhbmdlKSB9XG5cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmlzQWRtaW5Nb2RlID8gY3JlYXRlQWRtaW5TZWN0aW9uKHRoaXMuc3RhdGUuc2Vhc29uVGlja2V0cywgb25OdW1iZXJDaGFuZ2UpIDogbnVsbCB9XG5cbiAgICAgICAgICAgICAgeyBjcmVhdGVEaXN0cmlidXRpb25JbnB1dHModGhpcy5zdGF0ZS5zdWJzY3JpYmVNYWlsLCB0aGlzLnN0YXRlLnN1YnNjcmliZVNNUywgb25Cb29sZWFuQ2hhbmdlKSB9XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0Zvcm1GcmFtZT5cbiAgICApO1xuICB9XG59XG5cblVzZXJGb3JtLlByb3BUeXBlcyA9IHtcbiAgICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVVc2VyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlbW92ZVVzZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaXNBZG1pbk1vZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGFsbG93VXNlclJlbW92ZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdXNlckluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7fSksXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyRm9ybSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlckZvcm0uanN4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1BWF9TRUFTT05fVElDS0VUUzogNyxcbiAgUEhPTkVfUFJFRklYRVM6IFsnMDUwJywgJzA1MicsICcwNTMnLCAnMDU0JywgJzA1NScsICcwNTcnLCAnMDU4J10sXG4gIFNUQVRJT05TOiBbJ21vZGlpbicsICd0bHYnXVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdXNlckluZm9Db25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgVElUTEU6ICfXpNeo15jXmdedINeQ15nXqdeZ15nXnScsXG4gIEZJUlNUX05BTUU6ICfXqdedJyxcbiAgTEFTVF9OQU1FOiAn16nXnSDXntep16TXl9eUJyxcbiAgRU1BSUw6ICfXk9eV15DXqCDXkNec16fXmNeo15XXoNeZJyxcbiAgUEhPTkVfUFJFRklYOiAn16fXmdeT15XXnteqJyxcbiAgUEhPTkVfTlVNQkVSOiAn15jXnNek15XXnyDXoNeZ15nXkycsXG4gIEZBVk9SSVRFX1BJQ0tVUF9TVEFUSU9OOiAn16rXl9eg16og16LXnNeZ15Qg157Xldei15PXpNeqJyxcbiAgUkVRVUVTVF9GT1JfTUVNQkVSU0hJUDogJ9ee16LXldeg15nXmdefINeR157XoNeV15k/JyxcbiAgU1RBVElPTlM6IHtcbiAgICBtb2RpaW46ICfXnteV15PXmdei15nXnycsXG4gICAgdGx2OiAn16rXnCDXkNeR15nXkSdcbiAgfSxcbiAgRElTVFJJQlVUSU9OOiB7XG4gICAgRU1BSUw6ICfXqtek15XXpteqINeQ15nXnteZ15nXnCcsXG4gICAgU01TOiAn16rXpNeV16bXqiBTTVMnXG4gIH0sXG4gIFRPR0dMRToge1xuICAgIFlFUzogJ9eb158nLFxuICAgIE5POiAn15zXkCdcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy90cmFuc2xhdGlvbnMvdXNlckZvcm1UcmFuc2xhdGlvbnMuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFVTRVJTX1JFQ0VJVkVELCBVU0VSX1JFTU9WRUQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcbmltcG9ydCB7IFByb21pc2UgfSBmcm9tICdibHVlYmlyZCc7XG5cbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcblxuY29uc3QgVVNFUl9JTkZPX0tFWVMgPSBbJ2VtYWlsJywgJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScsICdwaG9uZVByZWZpeCcsICdwaG9uZU51bWJlcicsICdyZXF1ZXN0Rm9yTWVtYmVyc2hpcCcsICdzdGF0aW9uJywgJ3N1YnNjcmliZVNNUycsICdzdWJzY3JpYmVNYWlsJywgJ3Bob3RvVVJMJ107XG5jb25zdCBQQVRIX01BUCA9IHtcbiAgVVNFUlNfSU5GTzogJ3VzZXJzSW5mbycsXG4gIFNFQVNPTl9USUNLRVRTOiAnc2Vhc29uVGlja2V0cycsXG4gIEJPT0tJTkdTOiAnYm9va2luZ3MnXG59O1xuXG5jb25zdCBidWlsZFVzZXIgPSAodXNlckluZm8sIHNlYXNvblRpY2tldHMpID0+IHtcbiAgY29uc3QgdXNlciA9IF8ubWVyZ2Uoe30sIHVzZXJJbmZvKTtcbiAgaWYgKHNlYXNvblRpY2tldHMpIHtcbiAgICBfLm1lcmdlKHVzZXIsIHsgc2Vhc29uVGlja2V0cyB9KTtcbiAgfVxuICByZXR1cm4gdXNlcjtcbn07XG5cbmNvbnN0IGZldGNoQWxsVXNlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJSZWFkUHJvbWlzZXMgPSBbXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5VU0VSU19JTkZPKSxcbiAgICBjbGllbnREQi5yZWFkKFBBVEhfTUFQLlNFQVNPTl9USUNLRVRTKVxuICBdO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyUmVhZFByb21pc2VzKVxuICAgIC50aGVuKChbdXNlcnNJbmZvLCBzZWFzb25UaWNrZXRzXSkgPT5cbiAgICAgIF8udHJhbnNmb3JtKHVzZXJzSW5mbywgKGFjYywgaW5mbywgdWlkKSA9PiB7XG4gICAgICAgIGFjY1t1aWRdID0gYnVpbGRVc2VyKGluZm8sIHNlYXNvblRpY2tldHMgJiYgc2Vhc29uVGlja2V0c1t1aWRdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgfSwge30pXG4gICAgKTtcbn07XG5cbmNvbnN0IGZldGNoU2luZ2xlVXNlciA9IHVpZCA9PiB7XG4gIGNvbnN0IHVzZXJSZWFkUHJvbWlzZXMgPSBbXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5VU0VSU19JTkZPICsgJy8nICsgdWlkKSxcbiAgICBjbGllbnREQi5yZWFkKFBBVEhfTUFQLlNFQVNPTl9USUNLRVRTICsgJy8nICsgdWlkKVxuICBdO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyUmVhZFByb21pc2VzKVxuICAgIC50aGVuKChbdXNlckluZm8sIHNlYXNvblRpY2tldHNdKSA9PiB7XG4gICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgcmV0dXJuIHsgW3VpZF06IGJ1aWxkVXNlcih1c2VySW5mbywgc2Vhc29uVGlja2V0cykgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJzUmVtb3ZlZCA9IHVpZCA9PiAoe1xuICB0eXBlOiBVU0VSX1JFTU9WRUQsXG4gIHVpZFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1JlY2VpdmVkID0gdXNlcnMgPT4gKHtcbiAgdHlwZTogVVNFUlNfUkVDRUlWRUQsXG4gIHVzZXJzXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGNvbnN0IHVpZCA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAndWlkJ10pO1xuICBjb25zdCBpc0FkbWluID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICdpc0FkbWluJ10pO1xuICBjb25zdCBmZXRjaFByb21pc2UgPSBpc0FkbWluID8gZmV0Y2hBbGxVc2VycygpIDogZmV0Y2hTaW5nbGVVc2VyKHVpZCk7XG5cbiAgcmV0dXJuIGZldGNoUHJvbWlzZVxuICAgIC50aGVuKHVzZXJzID0+IHtcbiAgICAgIGlmICh1c2Vycykge1xuICAgICAgICBkaXNwYXRjaCh1c2Vyc1JlY2VpdmVkKHVzZXJzKSk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9ICh1aWQsIHVzZXIpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IGlzQWRtaW4gPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ2lzQWRtaW4nXSk7XG5cbiAgY29uc3QgdXNlclVwZGF0ZVByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnVwZGF0ZSgndXNlcnNJbmZvLycgKyB1aWQsIF8ucGljayh1c2VyLCBVU0VSX0lORk9fS0VZUykpXG4gIF07XG5cbiAgaWYgKGlzQWRtaW4gJiYgdXNlci5zZWFzb25UaWNrZXRzKSB7XG4gICAgdXNlclVwZGF0ZVByb21pc2VzLnB1c2goY2xpZW50REIuc2V0SW4oJ3NlYXNvblRpY2tldHMvJyArIHVpZCwgdXNlci5zZWFzb25UaWNrZXRzKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclVwZGF0ZVByb21pc2VzKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJzUmVjZWl2ZWQoeyBbdWlkXTogdXNlciB9KSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlVXNlciA9IHVpZCA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCB1c2VyUmVtb3ZlUHJvbWlzZXMgPSBfLm1hcChQQVRIX01BUCwgdXNlclBhdGggPT4gY2xpZW50REIucmVtb3ZlKGAke3VzZXJQYXRofS8ke3VpZH1gKSk7XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHVzZXJSZW1vdmVQcm9taXNlcylcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaCh1c2Vyc1JlbW92ZWQodWlkKSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2hvbWVQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhvbWUtcGFnZSAuZXZlbnRzIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xcbiAgICAuaG9tZS1wYWdlIC5ldmVudHMge1xcbiAgICAgIG1hcmdpbi10b3A6IDBweDsgfSB9XFxuXFxuLmhvbWUtcGFnZSAub3Blbi1ldmVudHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgfVxcblxcbi5ob21lLXBhZ2UgLmV2ZW50cy1saXN0IGg2IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmhvbWUtcGFnZSAubm8tYm9va2luZ3Mge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNDI0MjQyOyB9XFxuICAuaG9tZS1wYWdlIC5uby1ib29raW5ncyBpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLmhvbWUtcGFnZSAuZXZlbnQtaXRlbSB7XFxuICBwYWRkaW5nOiA1cHggMDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgIC5ob21lLXBhZ2UgLmV2ZW50LWl0ZW0ge1xcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAzMHB4IDA7IH0gfVxcbiAgLmhvbWUtcGFnZSAuZXZlbnQtaXRlbTpudGgtY2hpbGQoZXZlbikge1xcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFOyB9XFxuICAuaG9tZS1wYWdlIC5ldmVudC1pdGVtOm50aC1jaGlsZChvZGQpIHtcXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2hvbWVQYWdlL2hvbWVQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgQk9PS0lOR1NfUkVDRUlWRUQsIEJPT0tJTkdfQ0FOQ0VMRUQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBCT09LSU5HX0RBVEFfS0VZUyA9IFsncGFpZFNlYXRzJywgJ2V4dHJhU2VhdHMnLCAncGlja1VwJywgJ2Ryb3BPZmYnXTtcbmNvbnN0IEJPT0tJTkdTX1BBVEggPSAnYm9va2luZ3MnO1xuXG5jb25zdCBmZXRjaFVzZXJCb29raW5ncyA9IHVpZCA9PlxuICBjbGllbnREQi5yZWFkKGAke0JPT0tJTkdTX1BBVEh9LyR7dWlkfWApXG4gICAgLnRoZW4odXNlckJvb2tpbmdzID0+IHtcbiAgICAgIGlmICh1c2VyQm9va2luZ3MpIHtcbiAgICAgICAgcmV0dXJuIHsgW3VpZF06IHVzZXJCb29raW5ncyB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbmNvbnN0IGZldGNoQWxsQm9va2luZ3MgPSAoKSA9PlxuICBjbGllbnREQi5yZWFkKEJPT0tJTkdTX1BBVEgpO1xuXG5leHBvcnQgY29uc3QgYm9va2luZ3NSZWNlaXZlZCA9IGJvb2tpbmdzID0+ICh7XG4gIHR5cGU6IEJPT0tJTkdTX1JFQ0VJVkVELFxuICBib29raW5nc1xufSk7XG5cbmV4cG9ydCBjb25zdCBib29raW5nc0NhbmNlbGVkID0gKHVpZCwgZXZlbnRJZCkgPT4gKHtcbiAgdHlwZTogQk9PS0lOR19DQU5DRUxFRCxcbiAgdWlkLFxuICBldmVudElkXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQm9va2luZ3MgPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGNvbnN0IHVpZCA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAndWlkJ10pO1xuICBjb25zdCBpc0FkbWluID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICdpc0FkbWluJ10pO1xuICBjb25zdCBmZXRjaFByb21pc2UgPSBpc0FkbWluID8gZmV0Y2hBbGxCb29raW5ncygpIDogZmV0Y2hVc2VyQm9va2luZ3ModWlkKTtcblxuICByZXR1cm4gZmV0Y2hQcm9taXNlXG4gICAgLnRoZW4oYm9va2luZ3MgPT4ge1xuICAgICAgaWYgKGJvb2tpbmdzKSB7XG4gICAgICAgIGRpc3BhdGNoKGJvb2tpbmdzUmVjZWl2ZWQoYm9va2luZ3MpKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVCb29raW5nID0gKHVpZCwgZXZlbnRJZCwgYm9va2luZ0RhdGEpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIGNvbnN0IGJvb2tpbmdEYXRhVG9VcGRhdGUgPSBfLnBpY2soYm9va2luZ0RhdGEsIEJPT0tJTkdfREFUQV9LRVlTKTtcblxuICByZXR1cm4gY2xpZW50REIudXBkYXRlKGAke0JPT0tJTkdTX1BBVEh9LyR7dWlkfS8ke2V2ZW50SWR9YCwgYm9va2luZ0RhdGFUb1VwZGF0ZSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChib29raW5nc1JlY2VpdmVkKHsgW3VpZF06IHsgW2V2ZW50SWRdOiBib29raW5nRGF0YVRvVXBkYXRlIH0gfSkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbmNlbEJvb2tpbmcgPSAodWlkLCBldmVudElkKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucmVtb3ZlKGAke0JPT0tJTkdTX1BBVEh9LyR7dWlkfS8ke2V2ZW50SWR9YClcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChib29raW5nc0NhbmNlbGVkKHVpZCwgZXZlbnRJZCkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucy5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi91c2Vyc1BhZ2UucnQnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge3VwZGF0ZVVzZXIsIHJlbW92ZVVzZXJ9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuXG5jb25zdCBwaWNrVXNlcnNGdW5jdGlvbnMgPSB7XG4gIEFMTDogdXNlciA9PiB0cnVlLFxuICBNRU1CRVJTOiB1c2VyID0+IHVzZXIuc2Vhc29uVGlja2V0cyA+IDAsXG4gIE5PTl9NRU1CRVJTOiB1c2VyID0+ICF1c2VyLnNlYXNvblRpY2tldHMsXG4gIFJFUVVFU1RTOiB1c2VyID0+IHVzZXIucmVxdWVzdEZvck1lbWJlcnNoaXAsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdXBkYXRlVXNlcjogKHVpZCwgdXNlcikgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1aWQsIHVzZXIpKSxcbiAgcmVtb3ZlVXNlcjogKHVpZCkgPT4gZGlzcGF0Y2gocmVtb3ZlVXNlcih1aWQpKVxufSk7XG5cbmNsYXNzIFVzZXJzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0aW5nVXNlcklkOiBudWxsLFxuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgZmlsdGVyOiAnQUxMJ1xuICAgIH07XG4gIH1cblxuICBnZXRWaXNpYmxlVXNlcnMoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy51c2VycylcbiAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zW3RoaXMuc3RhdGUuZmlsdGVyXSlcbiAgICAgIC5waWNrQnkodXNlciA9PiBfLnN0YXJ0c1dpdGgodXNlci5maXJzdE5hbWUsIHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpIHx8IF8uc3RhcnRzV2l0aCh1c2VyLmxhc3ROYW1lLCB0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KSwgdGhpcylcbiAgICAgIC5tYXAoKHVzZXIsIHVpZCkgPT4gKHt1c2VyLCB1aWR9KSlcbiAgICAgIC5zb3J0QnkoJ3VzZXIuZmlyc3ROYW1lJylcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgY291bnRTZWFzb25UaWNrZXRzKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMudXNlcnMpXG4gICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5NRU1CRVJTKVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ3NlYXNvblRpY2tldHMnKVxuICAgICAgLnZhbHVlKCk7XG4gIH1cblxuICBjb3VudE5vbk1lbWJlcnNVc2VycygpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLnVzZXJzKVxuICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnMuTk9OX01FTUJFUlMpXG4gICAgICAuc2l6ZSgpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGNvdW50UmVxdWVzdHNGb3JNZW1iZXJzaGlwKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMudXNlcnMpXG4gICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9ucy5SRVFVRVNUUylcbiAgICAgIC5zaXplKClcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFF1ZXJ5OiBlLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlcn0pO1xuICB9XG5cbiAgb25Vc2VyQ2xpY2sodWlkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZ1VzZXJJZDogdWlkfSk7XG4gIH1cblxuICBzdG9wRWRpdGluZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtlZGl0aW5nVXNlcklkOiBudWxsLCBzZWFyY2hRdWVyeTogJyd9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cblxuICBnZXRVc2VyVGl0bGUodXNlcikge1xuICAgIHJldHVybiB1c2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXIubGFzdE5hbWU7XG4gIH1cblxuICBnZXRVc2VyU3VidGl0bGVzKHVzZXIpIHtcbiAgICByZXR1cm4gW3VzZXIucGhvbmVQcmVmaXggKyAnLScgKyB1c2VyLnBob25lTnVtYmVyLCB1c2VyLmVtYWlsLCAn15vXnteV16og157XoNeV15nXmdedOiAnICsgKHVzZXIuc2Vhc29uVGlja2V0cyB8fCAwKV07XG4gIH1cblxuICBnZXRVc2VySW1hZ2UodXNlcikge1xuICAgIHJldHVybiB1c2VyLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjMvMTYzODA0LnN2Zyc7XG4gIH1cbn1cblxuVXNlcnNQYWdlLnByb3BUeXBlcyA9IHtcbiAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2Vyc1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2xpc3RJdGVtJyxcbiAgICAnLi4vdXNlckZvcm0nLFxuICAgICcuL3VzZXJzUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBsaXN0SXRlbSwgVXNlckZvcm0sIHVzZXJzUGFnZUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBvbkNsaWNrMSh2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ0FMTCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMih2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ01FTUJFUlMnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazModmlzaWJsZVVzZXJzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdSRVFVRVNUUycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNCh2aXNpYmxlVXNlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ05PTl9NRU1CRVJTJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlNSh2aXNpYmxlVXNlcnMsIGUpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hRdWVyeUNoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazYodmlzaWJsZVVzZXJzLCB1c2VySXRlbSwgdXNlckl0ZW1JbmRleCkge1xuICAgICAgICB0aGlzLm9uVXNlckNsaWNrKHVzZXJJdGVtLnVpZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFVzZXJJdGVtNyh2aXNpYmxlVXNlcnMsIHVzZXJJdGVtLCB1c2VySXRlbUluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldFVzZXJUaXRsZSh1c2VySXRlbS51c2VyKSxcbiAgICAgICAgICAgICdrZXknOiAndXNlci0nICsgdXNlckl0ZW0udWlkLFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0VXNlclN1YnRpdGxlcyh1c2VySXRlbS51c2VyKSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0VXNlckltYWdlKHVzZXJJdGVtLnVzZXIpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrNi5iaW5kKHRoaXMsIHZpc2libGVVc2VycywgdXNlckl0ZW0sIHVzZXJJdGVtSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZVZpc2libGVVc2VyczgoKSB7XG4gICAgICAgIHZhciB2aXNpYmxlVXNlcnMgPSB0aGlzLmdldFZpc2libGVVc2VycygpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2tleSc6ICdsaXN0LXZpZXcnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXntep16rXntep15nXnScpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTEyIGxhcmdlLTgnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VsJywgeyAnY2xhc3NOYW1lJzogJ21lbnUgc21hbGwtdGV4dCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnQUxMJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2sxLmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXm9eV15zXnSAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIF8uc2l6ZSh0aGlzLnByb3BzLnVzZXJzKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdNRU1CRVJTJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2syLmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteg15XXmdeZ150gJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCB0aGlzLmNvdW50U2Vhc29uVGlja2V0cygpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1JFUVVFU1RTJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2szLmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXkden16nXlCDXnNee16DXldeZICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5jb3VudFJlcXVlc3RzRm9yTWVtYmVyc2hpcCgpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ05PTl9NRU1CRVJTJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IG9uQ2xpY2s0LmJpbmQodGhpcywgdmlzaWJsZVVzZXJzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnNeQINee16DXldeZ15nXnSAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuY291bnROb25NZW1iZXJzVXNlcnMoKSwgJyknKSkpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NlYXJjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzZWFyY2gtaW5wdXQnLFxuICAgICAgICAgICAgICAgICd0eXBlJzogJ3NlYXJjaCcsXG4gICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ9eX15nXpNeV16knLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlNS5iaW5kKHRoaXMsIHZpc2libGVVc2VycyksXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeVxuICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7ICdjbGFzc05hbWUnOiAnc2VhcmNoLWljb24nIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7ICdjbGFzc05hbWUnOiAnZmEgZmEtc2VhcmNoJyB9KSkpKSksXG4gICAgICAgICAgICBfLm1hcCh2aXNpYmxlVXNlcnMsIHJlcGVhdFVzZXJJdGVtNy5iaW5kKHRoaXMsIHZpc2libGVVc2VycykpLFxuICAgICAgICAgICAgdmlzaWJsZVVzZXJzLmxlbmd0aCA9PT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmlsdGVyLXN0YXR1cycsXG4gICAgICAgICAgICAgICAgJ2tleSc6ICcyNzkxJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWZyb3duLW8nLFxuICAgICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee16bXmNei16jXmdedLCDXnNeQINeg157XpteQ15Ug16jXqdeV157XldeqINee16rXkNeZ157XldeqLi4uJykpIDogbnVsbFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTkoKSB7XG4gICAgICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSB1c2Vycy1wYWdlJyB9LCAhdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkID8gc2NvcGVWaXNpYmxlVXNlcnM4LmFwcGx5KHRoaXMsIFtdKSA6IG51bGwsIHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdrZXknOiAnZWRpdC11c2VyJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlckZvcm0sIHtcbiAgICAgICAgICAgICd1aWQnOiB0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQsXG4gICAgICAgICAgICAnb25DbG9zZSc6IG9uQ2xvc2U5LmJpbmQodGhpcylcbiAgICAgICAgfSkpIDogbnVsbCk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91c2Vyc1BhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91c2Vyc1BhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3VzZXJzUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9hdXRoUGFnZS5ydCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBsb2dpbldpdGhHb29nbGUsXG4gIGxvZ2luV2l0aEZhY2Vib29rLFxuICBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIHNlbmRQYXNzd29yZFJlc2V0RW1haWxcbn0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucyc7XG5cbmltcG9ydCB7IHJlcG9ydEVycm9yIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGVycm9yTXNnOiBzdGF0ZS5lcnJvck1zZ1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgbG9naW5XaXRoR29vZ2xlOiAoKSA9PiBkaXNwYXRjaChsb2dpbldpdGhHb29nbGUoKSksXG4gIGxvZ2luV2l0aEZhY2Vib29rOiAoKSA9PiBkaXNwYXRjaChsb2dpbldpdGhGYWNlYm9vaygpKSxcbiAgbG9naW5XaXRoRW1haWw6IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoKGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKSksXG4gIHNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQ6IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoKGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpKSxcbiAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbDogZW1haWwgPT4gZGlzcGF0Y2goc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbCkpLFxuICByZXBvcnRFcnJvcjogKG1zZykgPT4gZGlzcGF0Y2gocmVwb3J0RXJyb3IobXNnKSlcbn0pO1xuXG5jb25zdCBBdXRoRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdBdXRoRm9ybScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbG9naW5XaXRoR29vZ2xlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvZ2luV2l0aEZhY2Vib29rOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvZ2luV2l0aEVtYWlsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlcG9ydEVycm9yOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHBhc3N3b3JkQWdhaW46ICcnLFxuICAgICAgYXV0aE1vZGU6ICdsb2dpbicsXG4gICAgICBpc0xvZ2luTW9kZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfSxcblxuICBnZXRCdXR0b25MYWJlbCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHtcbiAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgcmV0dXJuICfXlNeq15fXkdeoJztcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgcmV0dXJuICfXlNeZ16jXqdedJztcbiAgICAgIGNhc2UgJ2ZvcmdvdFBhc3N3b3JkJzpcbiAgICAgICAgcmV0dXJuICfXqdec15cg15zXmdeg16cg15zXkNeZ16TXldehINeh15nXodee15AnO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiAhdGhpcy5pc1N1Ym1pdERpc2FibGVkKCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0Q2xpY2soKTtcbiAgICB9XG4gIH0sXG5cbiAgc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZCgpIHtcbiAgICB0aGlzLnByb3BzLnNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gIH0sXG5cbiAgaXNTdWJtaXREaXNhYmxlZCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHtcbiAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgcmV0dXJuIF8uaXNFbXB0eSh0aGlzLnN0YXRlLmVtYWlsKSB8fCBfLmlzRW1wdHkodGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgIHJldHVybiBfLmlzRW1wdHkodGhpcy5zdGF0ZS5lbWFpbCkgfHwgXy5pc0VtcHR5KHRoaXMuc3RhdGUucGFzc3dvcmQpIHx8IF8uaXNFbXB0eSh0aGlzLnN0YXRlLnBhc3N3b3JkQWdhaW4pO1xuICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxuICAgICAgICByZXR1cm4gXy5pc0VtcHR5KHRoaXMuc3RhdGUuZW1haWwpO1xuICAgIH1cbiAgfSxcblxuICBnb1RvTG9naW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGhNb2RlOiAnbG9naW4nIH0pO1xuICB9LFxuXG4gIGdvVG9SZWdpc3RlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0aE1vZGU6ICdyZWdpc3RlcicgfSk7XG4gIH0sXG5cbiAgZ29Ub0ZvcmdvdFBhc3N3b3JkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRoTW9kZTogJ2ZvcmdvdFBhc3N3b3JkJyB9KTtcbiAgfSxcblxuICBoYW5kbGVMb2dpbigpIHtcbiAgICB0aGlzLnByb3BzLmxvZ2luV2l0aEVtYWlsKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICB9LFxuXG4gIGhhbmRsZVJlZ2lzdGVyKCkge1xuICAgIGlmIChfLmlzRXF1YWwodGhpcy5zdGF0ZS5wYXNzd29yZCwgdGhpcy5zdGF0ZS5wYXNzd29yZEFnYWluKSkge1xuICAgICAgdGhpcy5wcm9wcy5zaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnJlcG9ydEVycm9yKGNvbnN0YW50cy5FUlJPUlMuTk9UX1NBTUVfUEFTU1dPUkQpO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVGb3Jnb3RQYXNzd29yZCgpIHtcbiAgICB0aGlzLnByb3BzLnNlbmRQYXNzd29yZFJlc2V0RW1haWwodGhpcy5zdGF0ZS5lbWFpbCk7XG4gICAgdGhpcy5nb1RvTG9naW4oKTtcbiAgfSxcblxuICBoYW5kbGVTdWJtaXRDbGljaygpIHtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuYXV0aE1vZGUpIHtcbiAgICAgIGNhc2UgJ2xvZ2luJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTG9naW4oKTtcbiAgICAgIGNhc2UgJ3JlZ2lzdGVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUmVnaXN0ZXIoKTtcbiAgICAgIGNhc2UgJ2ZvcmdvdFBhc3N3b3JkJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRm9yZ290UGFzc3dvcmQoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiB0ZW1wbGF0ZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXV0aEZvcm0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuL2F1dGhQYWdlLnNjc3MnLFxuICAgICcuLi9sb2dvJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBjc3MsIGxvZ28pIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdsYXJnZS02IGNvbHVtbnMgc21hbGwtY2VudGVyZWQgYXV0aC1mb3JtLWNvbnRhaW5lcicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ21lZGl1bS1jZW50ZXJlZCBsb2dvJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KGxvZ28sIHtcbiAgICAgICAgICAgICd3aWR0aCc6IDEyMCxcbiAgICAgICAgICAgICdoZWlnaHQnOiAxMjBcbiAgICAgICAgfSkpLCBfLmluY2x1ZGVzKFtcbiAgICAgICAgICAgICdsb2dpbicsXG4gICAgICAgICAgICAncmVnaXN0ZXInXG4gICAgICAgIF0sIHRoaXMuc3RhdGUuYXV0aE1vZGUpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAna2V5JzogJzI4OCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgJ29uQ2xpY2snOiB0aGlzLnByb3BzLmxvZ2luV2l0aEZhY2Vib29rLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYWNlYm9vayBidXR0b24gc3BsaXQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ0ZhY2Vib29rJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7ICdjbGFzc05hbWUnOiAnZmEgZmEtZmFjZWJvb2stb2ZmaWNpYWwnIH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgJ29uQ2xpY2snOiB0aGlzLnByb3BzLmxvZ2luV2l0aEdvb2dsZSxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZ29vZ2xlIGJ1dHRvbiBzcGxpdCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnR29vZ2xlJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWdvb2dsZScsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2NsYXNzTmFtZSc6ICdocicgfSkpIDogbnVsbCwgdGhpcy5wcm9wcy5lcnJvck1zZyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZXJyb3ItbXNnJyxcbiAgICAgICAgICAgICdrZXknOiAnaG9tZVBhZ2VFcnJvck1zZydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgJ2NsYXNzTmFtZSc6ICdlcnJvci1tc2ctdHh0JyB9LCB0aGlzLnByb3BzLmVycm9yTXNnKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnb25LZXlEb3duJzogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdhdXRoLWZvcm0nXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ3R5cGUnOiAnZW1haWwnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAnbmFtZSc6ICdlbWFpbCcsXG4gICAgICAgICAgICAncGxhY2Vob2xkZXInOiAn15PXldeQ16gg15DXnNen15jXqNeV16DXmSdcbiAgICAgICAgfSksIF8uaW5jbHVkZXMoW1xuICAgICAgICAgICAgJ2xvZ2luJyxcbiAgICAgICAgICAgICdyZWdpc3RlcidcbiAgICAgICAgXSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgJ25hbWUnOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ9eh15nXodee15AnLFxuICAgICAgICAgICAgJ2tleSc6ICcxMjE2J1xuICAgICAgICB9KSA6IG51bGwsIHRoaXMuc3RhdGUuYXV0aE1vZGUgPT09ICdyZWdpc3RlcicgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucGFzc3dvcmRBZ2FpbixcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAnbmFtZSc6ICdwYXNzd29yZEFnYWluJyxcbiAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICfXqdeV15Eg16HXmdeh157XkCcsXG4gICAgICAgICAgICAna2V5JzogJzE0MjInXG4gICAgICAgIH0pIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgJ29uQ2xpY2snOiB0aGlzLmhhbmRsZVN1Ym1pdENsaWNrLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdidXR0b24gc3BsaXQgc3VjY2VzcycsXG4gICAgICAgICAgICAnZGlzYWJsZWQnOiB0aGlzLmlzU3VibWl0RGlzYWJsZWQoKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sIHRoaXMuZ2V0QnV0dG9uTGFiZWwoKSkpLCB0aGlzLnN0YXRlLmF1dGhNb2RlID09PSAnbG9naW4nID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdyb3cnLFxuICAgICAgICAgICAgJ2tleSc6ICcxODIzJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTYgcmVkLWxpbmsnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogdGhpcy5nb1RvUmVnaXN0ZXIgfSwgJ9eQ15nXnyDXnNeaINeX16nXkdeV158/JykpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTYgcmVkLWxpbmsnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogdGhpcy5nb1RvRm9yZ290UGFzc3dvcmQgfSwgJ9ep15vXl9eqINeh15nXodee15A/JykpKSA6IG51bGwsIHRoaXMuc3RhdGUuYXV0aE1vZGUgIT09ICdsb2dpbicgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdrZXknOiAnMjEyMScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAncmVkLWxpbmsnLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiB0aGlzLmdvVG9Mb2dpblxuICAgICAgICB9LCAn15vXkdeoINeZ16kg15zXmiDXl9ep15HXldefPycpKSA6IG51bGwpKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hdXRoUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2F1dGhQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hdXRoUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmF1dGgtZm9ybS1jb250YWluZXIgLmxvZ28ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMzVweDtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogMTYwcHg7IH1cXG5cXG4uYXV0aC1mb3JtLWNvbnRhaW5lciAuYXV0aC1mb3JtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5hdXRoLWZvcm0tY29udGFpbmVyIC5ociB7XFxuICBtYXJnaW46IDAuN2VtIGF1dG8gIWltcG9ydGFudDsgfVxcblxcbi5hdXRoLWZvcm0tY29udGFpbmVyIC5yZWQtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU0VUX0FVVEhfREFUQSwgU0lHTl9PVVQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0IHsgUHJvbWlzZSB9IGZyb20gJ2JsdWViaXJkJztcblxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyB1c2VyQWN0aW9ucyBmcm9tICcuL3VzZXJBY3Rpb25zJztcbmltcG9ydCAqIGFzIGV2ZW50QWN0aW9ucyBmcm9tICcuL2V2ZW50QWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBib29raW5nQWN0aW9ucyBmcm9tICcuL2Jvb2tpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcbmltcG9ydCAqIGFzIG5hdmlnYXRpb25BY3Rpb25zIGZyb20gJy4vbmF2aWdhdGlvbkFjdGlvbnMnO1xuXG5pbXBvcnQgdXBkYXRlUGhvdG9VcmxGaXhlciBmcm9tICcuLi8uLi9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXInO1xuXG5leHBvcnQgY29uc3QgQVVUSF9FUlJPUl9DT0RFU19NQVAgPSB7XG4gICdhdXRoL2ludmFsaWQtZW1haWwnOiBDb25zdGFudHMuRVJST1JTLklOVkFMSURfTUFJTCxcbiAgJ2F1dGgvd2Vhay1wYXNzd29yZCc6IENvbnN0YW50cy5FUlJPUlMuV0VBS19QQVNTV09SRCxcbiAgJ2F1dGgvZW1haWwtYWxyZWFkeS1pbi11c2UnOiBDb25zdGFudHMuRVJST1JTLkVNQUlMX0lOX1VTRSxcbiAgJ2F1dGgvd3JvbmctcGFzc3dvcmQnOiBDb25zdGFudHMuRVJST1JTLldST05HX1BBU1NXT1JELFxuICAnYXV0aC9hY2NvdW50LWV4aXN0cy13aXRoLWRpZmZlcmVudC1jcmVkZW50aWFsJzogQ29uc3RhbnRzLkVSUk9SUy5FTUFJTF9JTl9VU0UsXG4gICdhdXRoL3VzZXItbm90LWZvdW5kJzogQ29uc3RhbnRzLkVSUk9SUy5VU0VSX05PVF9GT1VORFxufTtcblxuZXhwb3J0IGNvbnN0IHNldEF1dGhEYXRhID0gKHVpZCwgZW1haWwsIHBob3RvVVJMLCBpc0FkbWluKSA9PiAoe1xuICB0eXBlOiBTRVRfQVVUSF9EQVRBLFxuICB1aWQsXG4gIGVtYWlsLFxuICBwaG90b1VSTCxcbiAgaXNBZG1pblxufSk7XG5cbmNvbnN0IGZldGNoQXBwRGF0YSA9IChkaXNwYXRjaCwgdXNlcikgPT5cbiAgY2xpZW50REIucmVhZCgnYWRtaW5zLycgKyB1c2VyLnVpZClcbiAgICAudGhlbihpc0FkbWluID0+IGRpc3BhdGNoKHNldEF1dGhEYXRhKHVzZXIudWlkLCB1c2VyLmVtYWlsLCBfLmdldCh1c2VyLCBbJ3Byb3ZpZGVyRGF0YScsIDAsICdwaG90b1VSTCddKSwgISFpc0FkbWluKSkpXG4gICAgLnRoZW4oKCkgPT4gUHJvbWlzZS5hbGwoW1xuICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuZmV0Y2hVc2VycygpKSxcbiAgICAgIGRpc3BhdGNoKGV2ZW50QWN0aW9ucy5mZXRjaEV2ZW50cygpKSxcbiAgICAgIGRpc3BhdGNoKGJvb2tpbmdBY3Rpb25zLmZldGNoQm9va2luZ3MoKSlcbiAgICBdKSk7XG5cbmV4cG9ydCBjb25zdCB1c2VyU2lnbmVkT3V0ID0gKCkgPT4gKHtcbiAgdHlwZTogU0lHTl9PVVRcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5zaWduT3V0KClcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaCh1c2VyU2lnbmVkT3V0KCkpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlBBR0VTLkFVVEgudmFsKSkpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRmFjZWJvb2sgPSAoKSA9PiAoKSA9PiBjbGllbnREQi5sb2dpbldpdGhGYWNlYm9vaygpO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoR29vZ2xlID0gKCkgPT4gKCkgPT4gY2xpZW50REIubG9naW5XaXRoR29vZ2xlKCk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLmxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHVzZXIgPT4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5QQUdFUy5IT01FLnZhbCkpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgIC50aGVuKHVzZXIgPT4gZmV0Y2hBcHBEYXRhKGRpc3BhdGNoLCB1c2VyKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5QQUdFUy5FRElUX1VTRVJfSU5GTy52YWwpKSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kUGFzc3dvcmRSZXNldEVtYWlsID0gZW1haWwgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdXRoRGF0YSA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5nZXRMb2dnZWRJblVzZXIoKVxuICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcilcbiAgICAgICAgICAudGhlbigoKSA9PiB1cGRhdGVQaG90b1VybEZpeGVyKGRpc3BhdGNoLCBnZXRTdGF0ZSgpKSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IGdldFN0YXRlKCkudXNlcnNbdXNlci51aWRdO1xuICAgICAgICAgICAgaWYgKF8uaXNFbXB0eSh1c2VySW5mbykpIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUEFHRVMuRURJVF9VU0VSX0lORk8udmFsKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5QQUdFUy5IT01FLnZhbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGRiRXJyb3IpO1xuICAgICAgZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKVxuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucy5qcyIsImltcG9ydCB7IE5BVklHQVRFX1RPIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0ZVRvID0gcGFnZSA9PiAoe1xuICB0eXBlOiBOQVZJR0FURV9UTyxcbiAgcGFnZVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvbmF2aWdhdGlvbkFjdGlvbnMuanMiLCJpbXBvcnQgeyB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRpc3BhdGNoLCBzdGF0ZSkge1xuICBjb25zdCB1aWQgPSBzdGF0ZS5hdXRoRGF0YS51aWQ7XG4gIGNvbnN0IHVzZXJzID0gc3RhdGUudXNlcnM7XG5cbiAgaWYgKHVzZXJzW3VpZF0pIHtcbiAgICByZXR1cm4gZGlzcGF0Y2godXBkYXRlVXNlcih1aWQsIHsgcGhvdG9VUkw6IHN0YXRlLmF1dGhEYXRhLnBob3RvVVJMIH0pKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXIuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYm9va2luZ3NQYWdlLnJ0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IHVwZGF0ZUJvb2tpbmcgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2Jvb2tpbmdBY3Rpb25zJztcblxuY29uc3QgZ2V0RHJvcE9mZk1hcCA9IGJvb2tpbmdzID0+IF8uY2hhaW4oYm9va2luZ3MpXG4gIC5vbWl0QnkoYm9va2luZyA9PiAhKGJvb2tpbmcuZHJvcE9mZikpXG4gIC50cmFuc2Zvcm0oKGFjYywgYm9va2luZywgdWlkKSA9PiB7XG4gICAgYWNjW2Jvb2tpbmcuZHJvcE9mZl1bdWlkXSA9IGJvb2tpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgfSwgeyB0bHY6IHt9LCBtb2RpaW46IHt9IH0pXG4gIC52YWx1ZSgpO1xuXG5jb25zdCBnZXRQaWNrVXBNYXAgPSBib29raW5ncyA9PiBfLmNoYWluKGJvb2tpbmdzKVxuICAub21pdEJ5KGJvb2tpbmcgPT4gIShib29raW5nLnBpY2tVcCkpXG4gIC50cmFuc2Zvcm0oKGFjYywgYm9va2luZywgdWlkKSA9PiB7XG4gICAgYWNjW2Jvb2tpbmcucGlja1VwXVt1aWRdID0gYm9va2luZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICB9LCB7IHRsdjoge30sIG1vZGlpbjoge30gfSlcbiAgLnZhbHVlKCk7XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBib29raW5nczogc3RhdGUuYm9va2luZ3MsXG4gIGV2ZW50czogc3RhdGUuZXZlbnRzLFxuICB1c2Vyczogc3RhdGUudXNlcnNcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICB1cGRhdGVCb29raW5nOiAodWlkLCBldmVudElkLCBib29raW5nKSA9PiBkaXNwYXRjaCh1cGRhdGVCb29raW5nKHVpZCwgZXZlbnRJZCwgYm9va2luZykpXG59KTtcblxuY2xhc3MgQm9va2luZ3NQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRpbmdVc2VySWQ6IG51bGwsXG4gICAgICBldmVudElkOiBfLmZpbmRLZXkodGhpcy5wcm9wcy5ldmVudHMsIHtzdGF0dXM6ICdvcGVuRm9yTWVtYmVycyd9KSB8fCBfLmZpbmRLZXkodGhpcy5wcm9wcy5ldmVudHMsIHtzdGF0dXM6ICdvcGVuRm9yQWxsJ30pIHx8ICBfLmZpbmRLZXkodGhpcy5wcm9wcy5ldmVudHMsIHtzdGF0dXM6ICdjbG9zZWQnfSkgLFxuICAgICAgZmlsdGVyOiAnUElDS1VQJ1xuICAgIH07XG4gIH1cblxuICBnZXRWaXNpYmxlQm9va2luZ3MoKSB7XG4gICAgY29uc3QgYm9va2luZ0ZvckV2ZW50TWFwID0gXy5jaGFpbih0aGlzLnByb3BzLmJvb2tpbmdzKVxuICAgICAgLm1hcFZhbHVlcyh1c2VyQm9va2luZ3MgPT4gdXNlckJvb2tpbmdzW3RoaXMuc3RhdGUuZXZlbnRJZF0pXG4gICAgICAub21pdEJ5KF8uaXNVbmRlZmluZWQpXG4gICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwaWNrVXA6IGdldFBpY2tVcE1hcChib29raW5nRm9yRXZlbnRNYXApLFxuICAgICAgZHJvcE9mZjogZ2V0RHJvcE9mZk1hcChib29raW5nRm9yRXZlbnRNYXApXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZShmaWx0ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyIH0pO1xuICB9XG5cbiAgb25FdmVudElkQ2hhbmdlKGV2ZW50SWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXZlbnRJZCwgZmlsdGVyOiAnUElDS1VQJyB9KTtcbiAgfVxuXG4gIG9uQm9va2luZ0NsaWNrKHVpZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nVXNlcklkOiB1aWQgfSk7XG4gIH1cblxuICBnZXRFdmVudFByaW50VGl0bGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZXZlbnRJZCkge1xuICAgICAgY29uc3QgY3VycmVudEV2dCA9IHRoaXMucHJvcHMuZXZlbnRzW3RoaXMuc3RhdGUuZXZlbnRJZF07XG4gICAgICByZXR1cm4gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tjdXJyZW50RXZ0LnR5cGVJZF0ubmFtZSArICcgLSAnICsgY3VycmVudEV2dC5kYXkgKyAnLycgKyBjdXJyZW50RXZ0Lm1vbnRoICsgJy8nICsgY3VycmVudEV2dC55ZWFyO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBnZXRCb29raW5nVGl0bGUodWlkKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlcnNbdWlkXTtcbiAgICByZXR1cm4gdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lO1xuICB9XG5cbiAgZ2V0Qm9va2luZ1Bob25lKHVpZCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJzW3VpZF07XG4gICAgcmV0dXJuIHVzZXIucGhvbmVQcmVmaXggKyAnLScgKyB1c2VyLnBob25lTnVtYmVyO1xuICB9XG5cbiAgZ2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCB1aWQpIHtcbiAgICBjb25zdCBzdWJ0aXRsZXMgPSBbXTtcblxuICAgIGlmIChib29raW5nLnBhaWRTZWF0cyA+IDApIHtcbiAgICAgIHN1YnRpdGxlcy5wdXNoKCfXnteg15XXmdeZ1506ICcgKyBib29raW5nLnBhaWRTZWF0cyk7XG4gICAgfVxuICAgIGlmIChib29raW5nLmV4dHJhU2VhdHMgPiAwKSB7XG4gICAgICBzdWJ0aXRsZXMucHVzaCgn15fXkyDXpNei157XmTogJyArIGJvb2tpbmcuZXh0cmFTZWF0cyk7XG4gICAgfVxuICAgIGlmIChib29raW5nLnBpY2tVcCkge1xuICAgICAgc3VidGl0bGVzLnB1c2goJ9eU15zXldeaOiAnICsgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXSk7XG4gICAgfVxuICAgIGlmIChib29raW5nLmRyb3BPZmYpIHtcbiAgICAgIHN1YnRpdGxlcy5wdXNoKCfXl9eW15XXqDogJyArIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdKTtcbiAgICB9XG5cbiAgICBpZiAodWlkKSB7XG4gICAgICBzdWJ0aXRsZXMucHVzaCgn15jXnNezOiAnICsgdGhpcy5nZXRCb29raW5nUGhvbmUodWlkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnRpdGxlcztcbiAgfVxuXG4gIGdldEJvb2tpbmdJbWFnZSh1aWQpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2Vyc1t1aWRdO1xuICAgIHJldHVybiB1c2VyLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xODkvMTg5OTkxLnN2Zyc7XG4gIH1cblxuICBnZXRQaWNrVXBDb3VudCgpIHtcbiAgICBjb25zdCB2aXNpYmxlQm9va2luZ3MgPSB0aGlzLmdldFZpc2libGVCb29raW5ncygpO1xuICAgIGNvbnN0IHRsdlBpY2tVcHNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCB0bHZQaWNrVXBzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAudGx2KVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5QaWNrVXBzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW4pXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluUGlja1Vwc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLm1vZGlpbilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgcmV0dXJuIHRsdlBpY2tVcHNQYWlkICsgdGx2UGlja1Vwc0V4dHJhICsgbW9kaWluUGlja1Vwc1BhaWQgKyBtb2RpaW5QaWNrVXBzRXh0cmE7XG4gIH1cblxuICBnZXREcm9wT2ZmQ291bnQoKSB7XG4gICAgY29uc3QgdmlzaWJsZUJvb2tpbmdzID0gdGhpcy5nZXRWaXNpYmxlQm9va2luZ3MoKTtcbiAgICBjb25zdCB0bHZEcm9wT2Zmc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCB0bHZEcm9wT2Zmc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHYpXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpbkRyb3BPZmZzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluKVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpbkRyb3BPZmZzRXh0cmEgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgcmV0dXJuIHRsdkRyb3BPZmZzUGFpZCArIHRsdkRyb3BPZmZzRXh0cmEgKyBtb2RpaW5Ecm9wT2Zmc1BhaWQgKyBtb2RpaW5Ecm9wT2Zmc0V4dHJhO1xuICB9XG5cbiAgc3RvcEVkaXRpbmcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRpbmdVc2VySWQ6IG51bGwgfSk7XG4gIH1cblxuICB1cGRhdGVCb29raW5nKGJvb2tpbmcpIHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUJvb2tpbmcodGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkLCB0aGlzLnN0YXRlLmV2ZW50SWQsIGJvb2tpbmcpO1xuICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cblxufVxuXG5Cb29raW5nc1BhZ2UucHJvcFR5cGVzID0ge1xuICBib29raW5nczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBldmVudHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXBkYXRlQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShCb29raW5nc1BhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2xpc3RJdGVtJyxcbiAgICAnLi4vYm9va2luZ0Zvcm0vYm9va2luZ0Zvcm0nLFxuICAgICcuLi8uLi91dGlscy9jb25zdGFudHMnLFxuICAgICcuL2Jvb2tpbmdzUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBsaXN0SXRlbSwgQm9va2luZ0Zvcm0sIENvbnN0YW50cywgYm9va2luZ3NQYWdlQ3NzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxKHZpc2libGVCb29raW5ncykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnUElDS1VQJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2syKHZpc2libGVCb29raW5ncykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnRFJPUE9GRicpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTModmlzaWJsZUJvb2tpbmdzLCBlKSB7XG4gICAgICAgIHRoaXMub25FdmVudElkQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0RXZlbnQ0KHZpc2libGVCb29raW5ncywgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBldmVudEluZGV4XG4gICAgICAgIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJywgZXZlbnQuZGF5LCAnLycsIGV2ZW50Lm1vbnRoLCAnLycsIGV2ZW50LnllYXIsICcgLSAnLCBDb25zdGFudHMuRVZFTlRTX1RZUEVTW2V2ZW50LnR5cGVJZF0ubmFtZSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNSh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkJvb2tpbmdDbGljayhib29raW5nSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nNih2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAna2V5JzogJ2Jvb2tpbmctJyArIGJvb2tpbmdJbmRleCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0Qm9va2luZ0ltYWdlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s1LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazcodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHRoaXMub25Cb29raW5nQ2xpY2soYm9va2luZ0luZGV4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzgodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2tleSc6ICdib29raW5nLScgKyBib29raW5nSW5kZXgsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnaW1hZ2VTcmMnOiB0aGlzLmdldEJvb2tpbmdJbWFnZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrNy5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlTW9kaWluUGlja1VwVGx2UGlja1VwOSh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdmFyIG1vZGlpblBpY2tVcCA9IHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluO1xuICAgICAgICB2YXIgdGx2UGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHY7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAncGljay11cC1jb250YWluZXIgcm93IGhpZGUtZm9yLXByaW50JyxcbiAgICAgICAgICAgICAgICAna2V5JzogJ3BpY2stdXAtY29udGFpbmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZQaWNrVXApICE9PSAwIHx8IF8uc2l6ZShtb2RpaW5QaWNrVXApICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDUnLCB7ICdrZXknOiAncGlja1VwLWxhYmVsJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXlNec15XXmjonKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2tleSc6ICd0bHZQaWNrVXAnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eq15wg15DXkdeZ15EnKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2UGlja1VwLCByZXBlYXRCb29raW5nNi5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXApKSxcbiAgICAgICAgICAgIF8uc2l6ZShtb2RpaW5QaWNrVXApICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDYnLCB7ICdrZXknOiAnbW9kaWluUGlja1VwJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteV15PXmdei15nXnycpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5QaWNrVXAsIHJlcGVhdEJvb2tpbmc4LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCkpXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMTAodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vbkJvb2tpbmdDbGljayhib29raW5nSW5kZXgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMTEodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAna2V5JzogJ2Jvb2tpbmctJyArIGJvb2tpbmdJbmRleCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdpbWFnZVNyYyc6IHRoaXMuZ2V0Qm9va2luZ0ltYWdlKGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2sxMC5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazEyKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHRoaXMub25Cb29raW5nQ2xpY2soYm9va2luZ0luZGV4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzEzKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2tleSc6ICdib29raW5nLScgKyBib29raW5nSW5kZXgsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnaW1hZ2VTcmMnOiB0aGlzLmdldEJvb2tpbmdJbWFnZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrMTIuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlTW9kaWluRHJvcE9mZlRsdkRyb3BPZmYxNCh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdmFyIG1vZGlpbkRyb3BPZmYgPSB2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW47XG4gICAgICAgIHZhciB0bHZEcm9wT2ZmID0gdmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2Ryb3Atb2ZmLWNvbnRhaW5lciByb3cgaGlkZS1mb3ItcHJpbnQnLFxuICAgICAgICAgICAgICAgICdrZXknOiAnZHJvcC1vZmYtY29udGFpbmVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCB8fCBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNScsIHsgJ2tleSc6ICdkcm9wLW9mZi1sYWJlbCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15fXlteV16g6JykpIDogbnVsbCxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g2JywgeyAna2V5JzogJ3RsdkRyb3BPZmYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eq15wg15DXkdeZ15EnKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2RHJvcE9mZiwgcmVwZWF0Qm9va2luZzExLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmKSksXG4gICAgICAgICAgICBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2tleSc6ICdtb2RpaW5Ecm9wT2ZmJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteV15PXmdei15nXnycpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5Ecm9wT2ZmLCByZXBlYXRCb29raW5nMTMuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYpKVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25TdWJtaXQxNSh2aXNpYmxlQm9va2luZ3MsIGJvb2tpbmcpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCb29raW5nKGJvb2tpbmcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsb3NlMTYodmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHRoaXMuc3RvcEVkaXRpbmcoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzE3KHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiBib29raW5nSW5kZXggKyAnLXRsdi1waWNrdXAtcm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nUGhvbmUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcucGFpZFNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5leHRyYVNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcxOCh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogYm9va2luZ0luZGV4ICsgJy1tb2RpaW4tcGlja3VwLXJvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1Bob25lKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLnBhaWRTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcuZXh0cmFTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZU1vZGlpblBpY2tVcFRsdlBpY2tVcDE5KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB2YXIgbW9kaWluUGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW47XG4gICAgICAgIHZhciB0bHZQaWNrVXAgPSB2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAncGlja1VwLXRhYmxlIHNob3ctZm9yLXByaW50JyxcbiAgICAgICAgICAgICdrZXknOiAncGlja1VwLXRhYmxlJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0YWJsZScsIHt9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aGVhZCcsIHt9LCBfLnNpemUobW9kaWluUGlja1VwKSAhPT0gMCB8fCBfLnNpemUodGx2UGlja1VwKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ3BpY2tVcC1sYWJlbCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7ICdjb2xTcGFuJzogJzYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eU15zXldeaJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJyAoJywgdGhpcy5nZXRQaWNrVXBDb3VudCgpLCAnKScpKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHt9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16nXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn15jXnNek15XXnycpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn157XoNeV15nXmdedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXkdeq16nXnNeV150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eq15fXoNeqINei15zXmdeUJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqteX16DXqiDXmdeo15nXk9eUJykpKSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAndGJvZHknLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBfLnNpemUodGx2UGlja1VwKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ3RsdlBpY2tVcCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7XG4gICAgICAgICAgICAgICAgJ2NvbFNwYW4nOiAnNicsXG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICd0YWJsZS1zdWInXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXqtecINeQ15HXmdeRJykpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcCh0bHZQaWNrVXAsIHJlcGVhdEJvb2tpbmcxNy5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXApKSxcbiAgICAgICAgICAgIF8uc2l6ZShtb2RpaW5QaWNrVXApICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiAnbW9kaWluUGlja1VwJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHtcbiAgICAgICAgICAgICAgICAnY29sU3Bhbic6ICc2JyxcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3RhYmxlLXN1YidcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee15XXk9eZ16LXmdefJykpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5QaWNrVXAsIHJlcGVhdEJvb2tpbmcxOC5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXApKVxuICAgICAgICBdKSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMjAodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogYm9va2luZ0luZGV4ICsgJy10bHYtZHJvcG9mZi1yb3cnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdQaG9uZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5wYWlkU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLmV4dHJhU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzIxKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6IGJvb2tpbmdJbmRleCArICctbW9kaWluLWRyb3BvZmYtcm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nUGhvbmUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcucGFpZFNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5leHRyYVNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlTW9kaWluRHJvcE9mZlRsdkRyb3BPZmYyMih2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdmFyIG1vZGlpbkRyb3BPZmYgPSB2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW47XG4gICAgICAgIHZhciB0bHZEcm9wT2ZmID0gdmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdkcm9wT2ZmLXRhYmxlIHNob3ctZm9yLXByaW50JyxcbiAgICAgICAgICAgICdrZXknOiAnZHJvcE9mZi10YWJsZSdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGFibGUnLCB7fSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGhlYWQnLCB7fSwgXy5zaXplKHRsdkRyb3BPZmYpICE9PSAwIHx8IF8uc2l6ZShtb2RpaW5Ecm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ2Ryb3BPZmYtbGFiZWwnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywgeyAnY29sU3Bhbic6ICc2JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXl9eW15XXqCcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5nZXREcm9wT2ZmQ291bnQoKSwgJyknKSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7fSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9ep150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eY15zXpNeV158nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9ee16DXldeZ15nXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn15HXqtep15zXldedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqteX16DXqiDXotec15nXlCcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16rXl9eg16og15nXqNeZ15PXlCcpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgXy5zaXplKHRsdkRyb3BPZmYpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiAndGx2RHJvcE9mZicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7XG4gICAgICAgICAgICAgICAgJ2NvbFNwYW4nOiAnNicsXG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICd0YWJsZS1zdWInXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXqtecINeQ15HXmdeRJykpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcCh0bHZEcm9wT2ZmLCByZXBlYXRCb29raW5nMjAuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYpKSxcbiAgICAgICAgICAgIF8uc2l6ZShtb2RpaW5Ecm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ21vZGlpbkRyb3BPZmYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge1xuICAgICAgICAgICAgICAgICdjb2xTcGFuJzogJzYnLFxuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAndGFibGUtc3ViJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XldeT15nXoteZ158nKSkpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKG1vZGlpbkRyb3BPZmYsIHJlcGVhdEJvb2tpbmcyMS5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZikpXG4gICAgICAgIF0pKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlVmlzaWJsZUJvb2tpbmdzMjMoKSB7XG4gICAgICAgIHZhciB2aXNpYmxlQm9va2luZ3MgPSB0aGlzLmdldFZpc2libGVCb29raW5ncygpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ9a/c21hbGwtY2VudGVyZWQgZGFzaGJvYXJkLXBhZ2UgYm9va2luZ3MtcGFnZScgfSwgIXRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2tleSc6ICdsaXN0LXZpZXcnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXIgaGlkZS1mb3ItcHJpbnQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlci10aXRsZScgfSwgJ9eo16nXldee15nXnSDXnNeU16HXoteV16onKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlIGhpZGUtZm9yLXByaW50JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTEyIGxhcmdlLTYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VsJywgeyAnY2xhc3NOYW1lJzogJ21lbnUnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnUElDS1VQJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMS5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15TXnNeV15ogJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCB0aGlzLmdldFBpY2tVcENvdW50KCksICcpJykpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdEUk9QT0ZGJyB9KS50cmFuc2Zvcm0oZnVuY3Rpb24gKHJlcywgdmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMi5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15fXlteV16ggJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCB0aGlzLmdldERyb3BPZmZDb3VudCgpLCAnKScpKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2NvbHVtbiBzbWFsbC0xMiBsYXJnZS02JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc2VhcmNoJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZXZlbnRJZCxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTMuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAodGhpcy5wcm9wcy5ldmVudHMsIHJlcGVhdEV2ZW50NC5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncykpXG4gICAgICAgIF0pKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNScsIHsgJ2NsYXNzTmFtZSc6ICdzaG93LWZvci1wcmludCcgfSwgdGhpcy5nZXRFdmVudFByaW50VGl0bGUoKSksIHRoaXMuc3RhdGUuZmlsdGVyID09PSAnUElDS1VQJyA/IHNjb3BlTW9kaWluUGlja1VwVGx2UGlja1VwOS5hcHBseSh0aGlzLCBbdmlzaWJsZUJvb2tpbmdzXSkgOiBudWxsLCB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ0RST1BPRkYnID8gc2NvcGVNb2RpaW5Ecm9wT2ZmVGx2RHJvcE9mZjE0LmFwcGx5KHRoaXMsIFt2aXNpYmxlQm9va2luZ3NdKSA6IG51bGwsIHZpc2libGVCb29raW5ncy5sZW5ndGggPT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmlsdGVyLXN0YXR1cyBoaWRlLWZvci1wcmludCcsXG4gICAgICAgICAgICAna2V5JzogJ25vLWV2ZW50cydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtZnJvd24tbycsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee16bXmNei16jXmdedLCDXnNeQINeg157XpteQ15Ug16jXqdeV157XldeqINee16rXkNeZ157XldeqLi4uJykpIDogbnVsbCkgOiBudWxsLCB0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tpbmdGb3JtLCB7XG4gICAgICAgICAgICAna2V5JzogJ2VkaXQtdXNlcicsXG4gICAgICAgICAgICAndGl0bGUnOiAn16LXqNeZ15vXqiDXlNeo16nXnteUJyxcbiAgICAgICAgICAgICdib29raW5nJzogdGhpcy5wcm9wcy5ib29raW5nc1t0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWRdW3RoaXMuc3RhdGUuZXZlbnRJZF0sXG4gICAgICAgICAgICAnb25TdWJtaXQnOiBvblN1Ym1pdDE1LmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKSxcbiAgICAgICAgICAgICdzZWFzb25UaWNrZXRzJzogXy5nZXQodGhpcy5wcm9wcy51c2VycywgW1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCxcbiAgICAgICAgICAgICAgICAnc2Vhc29uVGlja2V0cydcbiAgICAgICAgICAgIF0pIHx8IDAsXG4gICAgICAgICAgICAnb25DbG9zZSc6IG9uQ2xvc2UxNi5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncylcbiAgICAgICAgfSkgOiBudWxsLCB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1BJQ0tVUCcgPyBzY29wZU1vZGlpblBpY2tVcFRsdlBpY2tVcDE5LmFwcGx5KHRoaXMsIFt2aXNpYmxlQm9va2luZ3NdKSA6IG51bGwsIHRoaXMuc3RhdGUuZmlsdGVyID09PSAnRFJPUE9GRicgPyBzY29wZU1vZGlpbkRyb3BPZmZUbHZEcm9wT2ZmMjIuYXBwbHkodGhpcywgW3Zpc2libGVCb29raW5nc10pIDogbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY29wZVZpc2libGVCb29raW5nczIzLmFwcGx5KHRoaXMsIFtdKTtcbiAgICB9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2tpbmdzUGFnZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2tpbmdzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYm9va2luZ3NQYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ib29raW5ncy1wYWdlIGg1IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogI0NGRDhEQztcXG4gIGNvbG9yOiAjMzc0NzRGO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5ib29raW5ncy1wYWdlIGg2IHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogI0VDRUZGMTtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4uYm9va2luZ3MtcGFnZSAudGFibGUtc3ViIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyMjIyMjI7IH1cXG5cXG4uYm9va2luZ3MtcGFnZSB0YWJsZSB0Ym9keSwgLmJvb2tpbmdzLXBhZ2UgdGFibGUgdGZvb3QsIC5ib29raW5ncy1wYWdlIHRhYmxlIHRoZWFkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMjIyMjI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBVc2VyRm9ybSA9IHJlcXVpcmUoJy4vdXNlckZvcm0uanN4Jyk7XG5cbmNvbnN0IG5hdmlnYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9uYXZpZ2F0aW9uQWN0aW9ucycpO1xuY29uc3QgbmF2aWdhdGlvbkNvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL25hdmlnYXRpb25Db25zdGFudHMnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdWlkOiBzdGF0ZS5hdXRoRGF0YS51aWRcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYXZpZ2F0ZVRvOiBwYWdlSWQgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhwYWdlSWQpKVxuICAgIH07XG59XG5cbmNsYXNzIEVkaXRvclVzZXJJbmZvUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgb25Gb3JtQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMubmF2aWdhdGVUbyhuYXZpZ2F0aW9uQ29uc3RhbnRzLlBBR0VTLkhPTUUudmFsKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFVzZXJGb3JtIHVpZD17dGhpcy5wcm9wcy51aWR9IG9uQ2xvc2U9e3RoaXMub25Gb3JtQ2xvc2V9Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuRWRpdG9yVXNlckluZm9QYWdlLnByb3BUeXBlcyA9IHtcbiAgICB1aWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYXZpZ2F0ZVRvOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRWRpdG9yVXNlckluZm9QYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9lZGl0VXNlckluZm9QYWdlLmpzeCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBQQUdFUzoge1xuICAgIEhPTUU6IHsgdmFsOiAnaG9tZScsIHZpc2libGU6IHRydWUgfSxcbiAgICBBVVRIOiB7IHZhbDogJ2F1dGgnLCB2aXNpYmxlOiBmYWxzZSB9LFxuICAgIFVTRVJTOiB7IHZhbDogJ3VzZXJzJywgdmlzaWJsZTogdHJ1ZSB9LFxuICAgIEVWRU5UUzogeyB2YWw6ICdldmVudHMnLCB2aXNpYmxlOiB0cnVlIH0sXG4gICAgQk9PS0lOR1M6IHsgdmFsOiAnYm9va2luZ3MnLCB2aXNpYmxlOiB0cnVlIH0sXG4gICAgRElTVFJJQlVUSU9OOiB7IHZhbDogJ2Rpc3RyaWJ1dGlvbicsIHZpc2libGU6IHRydWUgfSxcbiAgICBFRElUX1VTRVJfSU5GTzogeyB2YWw6ICdlZGl0VXNlckluZm8nLCB2aXNpYmxlOiBmYWxzZSB9XG4gIH0sXG4gIFRSQU5TTEFUSU9OUzoge1xuICAgIGhvbWU6ICfXk9ejINeU15HXmdeqJyxcbiAgICB1c2VyczogJ9ee16nXqtee16nXmdedJyxcbiAgICBldmVudHM6ICfXntep15fXp9eZ150nLFxuICAgIGJvb2tpbmdzOiAn16jXqdeV157XmdeqINec15TXodei15XXqicsXG4gICAgZGlzdHJpYnV0aW9uOiAn16jXqdeZ157XqiDXqtek15XXpteUJ1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Rpc3RyaWJ1dGlvblBhZ2UucnQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2VuZFRlbXBsYXRlRW1haWwsIHNlbmRDdXN0b21FbWFpbCwgc2VuZFNNUyB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucyc7XG5cbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5mdW5jdGlvbiBnZXRNZW1iZXJzVXNlcnNPbmx5KHVzZXJzKSB7XG4gIHJldHVybiBfLnBpY2tCeSh1c2VycywgdXNlciA9PiB1c2VyLnNlYXNvblRpY2tldHMgJiYgdXNlci5zZWFzb25UaWNrZXRzID4gMCk7XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tlZFVzZXJzT25seSh1c2VycywgYm9va2luZ3MsIGV2ZW50SWQpIHtcbiAgcmV0dXJuIF8ucGlja0J5KHVzZXJzLCAodXNlciwgdWlkKSA9PiBfLmhhcyhib29raW5nc1t1aWRdLCBldmVudElkKSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlY2lwaWVudHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZXZlbnRJZCkge1xuICBsZXQgcmVjaXBpZW50c1VzZXJzID0gXy5waWNrQnkodXNlcnMsIHVzZXIgPT4gdXNlci5zdWJzY3JpYmVNYWlsKTtcblxuICBzd2l0Y2ggKHJlY2lwaWVudHNUeXBlKSB7XG4gICAgY2FzZSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuTUVNQkVSU19PTkxZLnZhbHVlOlxuICAgICAgcmVjaXBpZW50c1VzZXJzID0gZ2V0TWVtYmVyc1VzZXJzT25seShyZWNpcGllbnRzVXNlcnMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQk9PS0VEX1RPX0VWRU5ULnZhbHVlOlxuICAgICAgcmVjaXBpZW50c1VzZXJzID0gZ2V0Qm9va2VkVXNlcnNPbmx5KHJlY2lwaWVudHNVc2VycywgYm9va2luZ3MsIGV2ZW50SWQpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcmVjaXBpZW50c1VzZXJzO1xufVxuXG5mdW5jdGlvbiBnZXRVc2Vyc0VtYWlscyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBldmVudElkKSB7XG4gIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRSZWNpcGllbnRzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGV2ZW50SWQpO1xuICByZXR1cm4gXy5tYXAocmVjaXBpZW50cywgdXNlciA9PiB1c2VyLmVtYWlsKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcnNQaG9uZU51bWJlcnModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZXZlbnRJZCkge1xuICBjb25zdCByZWNpcGllbnRzID0gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBldmVudElkKTtcbiAgcmV0dXJuIF8ubWFwKHJlY2lwaWVudHMsIHVzZXIgPT4gdXNlci5waG9uZVByZWZpeCArIHVzZXIucGhvbmVOdW1iZXIpO1xufVxuXG5jb25zdCBnZXRFdmVudFN1YnN0aXR1dGlvbnMgPSBldmVudCA9PiAoe1xuICAnLURFUEFSVFVSRS0nOiBgJHtldmVudC5ob3VyfToke2V2ZW50Lm1pbnV0ZX1gLFxuICAnLURBVEUtJzogYCR7ZXZlbnQuZGF5fS8ke2V2ZW50Lm1vbnRofS8ke2V2ZW50LnllYXJ9YCxcbiAgJy1OQU1FLSc6IENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lXG59KTtcblxuY29uc3QgcHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCA9IGNvbnRlbnQgPT4gJzxwIGRpcj1cXCdydGxcXCc+JyArIGNvbnRlbnQucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICc8YnIvPicpICsgJzwvcD4nO1xuXG5jb25zdCBnZXRJbml0aWFsU3RhdGUgPSBldmVudHMgPT4gKHtcbiAgZGlzdHJpYnV0aW9uTWV0aG9kOiAnZW1haWwnLFxuICByZWNpcGllbnRzVHlwZTogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS52YWx1ZSxcbiAgZGlzdHJpYnV0aW9uVHlwZTogJ3RlbXBsYXRlJyxcbiAgZXZlbnRJZDogXy5sYXN0KF8ua2V5cyhldmVudHMpKSxcbiAgdGVtcGxhdGVJZDogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMuRVZFTlRfT1BFTl9GT1JfTUVNQkVSUy5pZCxcbiAgc3ViamVjdDogJycsXG4gIGNvbnRlbnQ6ICcnXG59KTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZXZlbnRzOiBzdGF0ZS5ldmVudHMsXG4gIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5ncyxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgc2VuZFRlbXBsYXRlRW1haWw6IChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSA9PiBkaXNwYXRjaChzZW5kVGVtcGxhdGVFbWFpbChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSksXG4gIHNlbmRDdXN0b21FbWFpbDogKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpID0+IGRpc3BhdGNoKHNlbmRDdXN0b21FbWFpbChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSksXG4gIHNlbmRTTVM6IChyZWNpcGllbnRzLCBtZXNzYWdlKSA9PiBkaXNwYXRjaChzZW5kU01TKHJlY2lwaWVudHMsIG1lc3NhZ2UpKSxcbn0pO1xuXG5jbGFzcyBEaXN0cmlidXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKHRoaXMuZ2V0T3BlbkV2ZW50cygpKTtcbiAgfVxuXG4gIGdldE9wZW5FdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ub21pdEJ5KHRoaXMucHJvcHMuZXZlbnRzLFxuICAgICAgZXZlbnQgPT4gZXZlbnQuc3RhdHVzICE9PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTLnZhbHVlICYmIGV2ZW50LnN0YXR1cyAhPT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfQUxMLnZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIG9uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzdHJpYnV0aW9uTWV0aG9kOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uUmVjaXBpZW50c1R5cGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZWNpcGllbnRzVHlwZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvbkRpc3RyaWJ1dGlvblR5cGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXN0cmlidXRpb25UeXBlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uVGVtcGxhdGVJZENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRlbXBsYXRlSWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25FdmVudENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV2ZW50SWQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25TdWJqZWN0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3ViamVjdDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvbkNvbnRlbnRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGlzRGlzdHJpYnV0aW9uVHlwZVZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuRU1BSUw7XG4gIH1cblxuICBpc0V2ZW50c1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaXN0cmlidXRpb25UeXBlVmlzaWJsZSgpICYmIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5URU1QTEFURTtcbiAgfVxuXG4gIGlzQ3VzdG9tVGl0bGVWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLkVNQUlMICYmXG4gICAgICB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuQ1VTVE9NO1xuICB9XG5cbiAgaXNDdXN0b21Db250ZW50VmlzaWJsZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5FTUFJTCAmJlxuICAgICAgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLkNVU1RPTVxuICAgICAgKSB8fCB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLlNNUztcbiAgfVxuXG4gIHNlbmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuRU1BSUwpIHtcbiAgICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRVc2Vyc0VtYWlscyh0aGlzLnByb3BzLnVzZXJzLCB0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLCB0aGlzLnByb3BzLmJvb2tpbmdzLCB0aGlzLnN0YXRlLmV2ZW50SWQpO1xuICAgICAgaWYgKF8uaXNFbXB0eShyZWNpcGllbnRzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLlRFTVBMQVRFKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBnZXRFdmVudFN1YnN0aXR1dGlvbnModGhpcy5wcm9wcy5ldmVudHNbdGhpcy5zdGF0ZS5ldmVudElkXSk7XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZFRlbXBsYXRlRW1haWwocmVjaXBpZW50cywgdGhpcy5zdGF0ZS50ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2VuZEN1c3RvbUVtYWlsKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUuc3ViamVjdCwgcHJlcGFyZUN1c3RvbU1haWxDb250ZW50Rm9yU2VuZCh0aGlzLnN0YXRlLmNvbnRlbnQpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVjaXBpZW50cyA9IGdldFVzZXJzUGhvbmVOdW1iZXJzKHRoaXMucHJvcHMudXNlcnMsIHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsIHRoaXMucHJvcHMuYm9va2luZ3MsIHRoaXMuc3RhdGUuZXZlbnRJZCk7XG4gICAgICBpZiAoXy5pc0VtcHR5KHJlY2lwaWVudHMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuc2VuZFNNUyhyZWNpcGllbnRzLCB0aGlzLnN0YXRlLmNvbnRlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoZ2V0SW5pdGlhbFN0YXRlKHRoaXMuZ2V0T3BlbkV2ZW50cygpKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG5cbn1cblxuRGlzdHJpYnV0aW9uUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGV2ZW50czogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1c2VyczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZW5kVGVtcGxhdGVFbWFpbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VuZEN1c3RvbUVtYWlsOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZW5kU01TOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKERpc3RyaWJ1dGlvblBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9kaXN0cmlidXRpb25QYWdlLnNjc3MnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIENvbnN0YW50cywgZGlzdHJpYnV0aW9uUGFnZUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBvbkNoYW5nZTEoZSkge1xuICAgICAgICB0aGlzLm9uRGlzdHJpYnV0aW9uTWV0aG9kQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTIoZSkge1xuICAgICAgICB0aGlzLm9uUmVjaXBpZW50c1R5cGVDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlMyhlKSB7XG4gICAgICAgIHRoaXMub25EaXN0cmlidXRpb25UeXBlQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTQoZSkge1xuICAgICAgICB0aGlzLm9uVGVtcGxhdGVJZENoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0VGVtcGxhdGVDb25zdDUodGVtcGxhdGVDb25zdCwgdGVtcGxhdGVDb25zdEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ3RlbXBsYXRlLScgKyB0ZW1wbGF0ZUNvbnN0LmlkLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGVtcGxhdGVDb25zdC5pZFxuICAgICAgICB9LCB0ZW1wbGF0ZUNvbnN0Lm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTYoZSkge1xuICAgICAgICB0aGlzLm9uRXZlbnRDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50NyhldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV2ZW50SW5kZXhcbiAgICAgICAgfSwgQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTgoZSkge1xuICAgICAgICB0aGlzLm9uU3ViamVjdENoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2U5KGUpIHtcbiAgICAgICAgdGhpcy5vbkNvbnRlbnRDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxMCgpIHtcbiAgICAgICAgdGhpcy5zZW5kKCk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZGFzaGJvYXJkLXBhZ2UgZGlzdHJpYnV0aW9uLXBhZ2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXInIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlci10aXRsZScgfSwgJ9ep15zXmdeX16og157XmdeZ15zXmdedJykpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZGlzdHJpYnV0aW9uLWZvcm0gc21hbGwtMTEgc21hbGwtY2VudGVyZWQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqdec15cg15HXkNee16bXoteV16pcXG4gICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jywge1xuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTEuYmluZCh0aGlzKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5FTUFJTCB9LCAn15PXldeQ16gg15DXnNen15jXqNeV16DXmScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5TTVMgfSwgJ9eh157XoScpKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9ep15zXlyDXkNecXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucmVjaXBpZW50c1R5cGUsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTIuYmluZCh0aGlzKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5BTEwudmFsdWUgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcsIENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5BTEwubmFtZSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS52YWx1ZSB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQk9PS0VEX1RPX0VWRU5ULnZhbHVlIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQk9PS0VEX1RPX0VWRU5ULm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpKSkpLCB0aGlzLmlzRGlzdHJpYnV0aW9uVHlwZVZpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcsXG4gICAgICAgICAgICAna2V5JzogJ2Rpc3RyaWJ1dGlvblR5cGUnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXpteV16jXqiDXqdec15nXl9eUXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlMy5iaW5kKHRoaXMpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5URU1QTEFURSB9LCAn16rXkdeg15nXqicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuQ1VTVE9NIH0sICfXl9eV16TXqdeZJykpKSkgOiBudWxsLCB0aGlzLmlzRXZlbnRzVmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyxcbiAgICAgICAgICAgICdrZXknOiAndGVtcGxhdFBpY2tlcidcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eR15fXqCDXqteR16DXmdeqXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS50ZW1wbGF0ZUlkLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlNC5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5URU1QTEFURVMsIHJlcGVhdFRlbXBsYXRlQ29uc3Q1LmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkgOiBudWxsLCB0aGlzLmlzRXZlbnRzVmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkJyxcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnRJZCdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eR15fXmdeo16og15DXmdeo15XXolxcbiAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZXZlbnRJZCxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTYuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKHRoaXMuZ2V0T3BlbkV2ZW50cygpLCByZXBlYXRFdmVudDcuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCBtZWRpdW0tOCBzbWFsbC0xMiBjb2x1bW5zJyB9LCB0aGlzLmlzQ3VzdG9tVGl0bGVWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2tleSc6ICdjdXN0b21TdWJqZWN0LWxhYmVsJyB9LCAn16DXldep15A6JykgOiBudWxsLCB0aGlzLmlzQ3VzdG9tVGl0bGVWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5zdWJqZWN0LFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2U4LmJpbmQodGhpcyksXG4gICAgICAgICAgICAna2V5JzogJ2N1c3RvbVN1YmplY3QnXG4gICAgICAgIH0pIDogbnVsbCwgdGhpcy5pc0N1c3RvbUNvbnRlbnRWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2tleSc6ICdjdXN0b21Db250ZW50LWxhYmVsJyB9LCAn16rXldeb1586JykgOiBudWxsLCB0aGlzLmlzQ3VzdG9tQ29udGVudFZpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge1xuICAgICAgICAgICAgJ25hbWUnOiB0cnVlLFxuICAgICAgICAgICAgJ2lkJzogdHJ1ZSxcbiAgICAgICAgICAgICdyb3dzJzogJzEwJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuY29udGVudCxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlOS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2tleSc6ICdjdXN0b21Db250ZW50J1xuICAgICAgICB9KSA6IG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnYnV0dG9uLWdyb3VwIHN0YWNrZWQgc21hbGwtY2VudGVyZWQgbGFyZ2UtNiBzbWFsbC04IG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2sxMC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdidXR0b24gc3VjY2VzcydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16nXnNeXJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLXBhcGVyLXBsYW5lJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSkpKSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnJ0XG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRpc3RyaWJ1dGlvbi1wYWdlIC5idXR0b24gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBQQVRIX01BUCA9IHtcbiAgRU1BSUxTOiB7XG4gICAgVEVNUExBVEVTOiAncGVuZGluZ0VtYWlscy90ZW1wbGF0ZXMnLFxuICAgIENVU1RPTTogJ3BlbmRpbmdFbWFpbHMvY3VzdG9tJ1xuICB9LFxuICBTTVM6ICdwZW5kaW5nU01TJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kVGVtcGxhdGVFbWFpbCA9IChyZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5FTUFJTFMuVEVNUExBVEVTfWAsICh7IHJlY2lwaWVudHMsIHRlbXBsYXRlSWQsIHN1YnN0aXR1dGlvbnMgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZEN1c3RvbUVtYWlsID0gKHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5wdXNoKGAke1BBVEhfTUFQLkVNQUlMUy5DVVNUT019YCwgKHsgcmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCB9KSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kU01TID0gKHRvLCBtZXNzYWdlKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5TTVN9YCwgKHsgdG8sIG1lc3NhZ2UgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2Rpc3RyaWJ1dGlvbkFjdGlvbnMuanMiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbmNvbnN0IG5hdmlnYXRpb25Db25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzJyk7XG5cbmNvbnN0IG5hdmlnYXRpb25BY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9uYXZpZ2F0aW9uQWN0aW9ucycpO1xuY29uc3QgYXV0aEFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy90b3BCYXIuc2NzcycpO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICBjb25zdCBhdXRoRGF0YSA9IHN0YXRlLmF1dGhEYXRhO1xuICAgIGNvbnN0IHVzZXJzID0gc3RhdGUudXNlcnM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwaG90b1VSTDogYXV0aERhdGEucGhvdG9VUkwgfHwgJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE2My8xNjM4MDQuc3ZnJyxcbiAgICAgICAgaXNBZG1pbjogYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgY3VycmVudFBhZ2U6IHN0YXRlLmN1cnJlbnRQYWdlLFxuICAgICAgICBjdXJyZW50VXNlcjogYXV0aERhdGEgJiYgdXNlcnNbYXV0aERhdGEudWlkXVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hdmlnYXRlVG86IHBhZ2VJZCA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKHBhZ2VJZCkpLFxuICAgICAgICBzaWduT3V0OiAoKSA9PiBkaXNwYXRjaChhdXRoQWN0aW9ucy5zaWduT3V0KCkpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlclRpdGxlKGN1cnJlbnRVc2VyKSB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgICByZXR1cm4gJ9ee16nXqtee16knO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudFVzZXIuZmlyc3ROYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoY3VycmVudFVzZXIsIHBob3RvVVJMLCBuYXZpZ2F0ZVRvLCBzaWduT3V0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNSBzbWFsbC0xMCBjb2x1bW4gdXNlci1pbmZvXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17cGhvdG9VUkx9IG9uQ2xpY2s9e25hdmlnYXRlVG8uYmluZCh0aGlzLCBuYXZpZ2F0aW9uQ29uc3RhbnRzLlBBR0VTLkVESVRfVVNFUl9JTkZPLnZhbCl9Lz5cbiAgICAgICAgICAgIDxzcGFuPtep15zXldedIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXItbmFtZVwiPntnZXRVc2VyVGl0bGUoY3VycmVudFVzZXIpfTwvc3Bhbj48c3Bhbj4gfCA8L3NwYW4+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkaXNjb25uZWN0XCIgb25DbGljaz17c2lnbk91dH0+15TXqteg16rXpzwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlKHRvZ2dsZU1lbnVWaXNpYmlsaXR5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWZvci1zbWFsbC1vbmx5IGZsb2F0LWxlZnRcIiBrZXk9XCJhZG1pbi1tZW51LWljb25cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNtYWxsLW1lbnUgYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlTWVudVZpc2liaWxpdHl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUocGFnZXMsIGN1cnJlbnRQYWdlLCBuYXZpZ2F0ZVRvLCBpc0FkbWluLCBpc01lbnVWaXNpYmxlLCB0b2dnbGVNZW51VmlzaWJpbGl0eSkge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVza3RvcE1lbnVJdGVtKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgaXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIGFjdGl2ZTogY3VycmVudFBhZ2UgPT09IHBhZ2UudmFsLFxuICAgICAgICAgICAgYnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgc21hbGw6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXRlbUNsYXNzZXN9IG9uQ2xpY2s9e25hdmlnYXRlVG8uYmluZCh0aGlzLCBwYWdlLnZhbCl9IGtleT17J3BhZ2UtJyArIHBhZ2UudmFsfT5cbiAgICAgICAgICAgICAgICB7IG5hdmlnYXRpb25Db25zdGFudHMuVFJBTlNMQVRJT05TW3BhZ2UudmFsXSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9iaWxlTWVudUl0ZW0ocGFnZSkge1xuICAgICAgICBjb25zdCBpdGVtQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgYWN0aXZlOiBjdXJyZW50UGFnZSA9PT0gcGFnZS52YWwsXG4gICAgICAgICAgICBidXR0b246IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgb25Nb2JpbGVNZW51Q2xpY2tlZCA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRlVG8ocGFnZS52YWwpO1xuICAgICAgICAgICAgdG9nZ2xlTWVudVZpc2liaWxpdHkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpdGVtQ2xhc3Nlc30gb25DbGljaz17b25Nb2JpbGVNZW51Q2xpY2tlZH0ga2V5PXsncGFnZS0nICsgcGFnZS52YWx9PlxuICAgICAgICAgICAgICAgIHsgbmF2aWdhdGlvbkNvbnN0YW50cy5UUkFOU0xBVElPTlNbcGFnZS52YWxdIH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZXNrdG9wTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBidXR0b24tZ3JvdXAgaGlkZS1mb3Itc21hbGwtb25seVwiIGtleT1cImFkbWluLW1lbnVcIj5cbiAgICAgICAgICAgICAgICB7IF8ocGFnZXMpLnBpY2tCeSgndmlzaWJsZScpLm1hcChjcmVhdGVEZXNrdG9wTWVudUl0ZW0pLnZhbHVlKCkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTW9iaWxlTWVudSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudSBidXR0b24tZ3JvdXAgc3RhY2tlZC1mb3Itc21hbGwgc2hvdy1mb3Itc21hbGwtb25seVwiIGtleT1cImFkbWluLW1lbnUtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgeyBfKHBhZ2VzKS5waWNrQnkoJ3Zpc2libGUnKS5tYXAoY3JlYXRlTW9iaWxlTWVudUl0ZW0pLnZhbHVlKCkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNyBzbWFsbC0xMiBjb2x1bW4gdmVydGljYWwgY29sbGFwc2VkXCI+XG4gICAgICAgICAgICB7IGlzQWRtaW4gPyBjcmVhdGVEZXNrdG9wTWVudSgpIDogbnVsbCB9XG4gICAgICAgICAgICB7IGlzQWRtaW4gJiYgaXNNZW51VmlzaWJsZSA/IGNyZWF0ZU1vYmlsZU1lbnUoKSA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jbGFzcyBUb3BCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNNZW51VmlzaWJsZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTWVudVZpc2libGU6ICF0aGlzLnN0YXRlLmlzTWVudVZpc2libGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFyIHJvdyBzbWFsbC1jb2xsYXBzZSBoaWRlLWZvci1wcmludFwiPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlSGVhZGVyKHRoaXMucHJvcHMuY3VycmVudFVzZXIsIHRoaXMucHJvcHMucGhvdG9VUkwsIHRoaXMucHJvcHMubmF2aWdhdGVUbywgdGhpcy5wcm9wcy5zaWduT3V0KSB9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLmlzQWRtaW4gPyBjcmVhdGVTbWFsbE1lbnVGb3JNb2JpbGUodGhpcy50b2dnbGVNZW51VmlzaWJpbGl0eS5iaW5kKHRoaXMpKSA6IG51bGwgfVxuICAgICAgICAgICAgICAgIHsgY3JlYXRlTWVudShuYXZpZ2F0aW9uQ29uc3RhbnRzLlBBR0VTLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlLCB0aGlzLnByb3BzLm5hdmlnYXRlVG8sIHRoaXMucHJvcHMuaXNBZG1pbiwgdGhpcy5zdGF0ZS5pc01lbnVWaXNpYmxlLCB0aGlzLnRvZ2dsZU1lbnVWaXNpYmlsaXR5LmJpbmQodGhpcykpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVG9wQmFyLnByb3BUeXBlcyA9IHtcbiAgICBwaG90b1VSTDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0FkbWluOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBjdXJyZW50UGFnZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYXZpZ2F0ZVRvOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBzaWduT3V0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRvcEJhcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdG9wQmFyLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9wQmFyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9wQmFyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi90b3BCYXIuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b3AtYmFyIHtcXG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XFxuICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgLnRvcC1iYXIgc3BhbiB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDsgfVxcbiAgLnRvcC1iYXIgLnVzZXItaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTsgfVxcbiAgLnRvcC1iYXIgLnNtYWxsLW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiAjRDUwMDAwO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtOyB9XFxuICAudG9wLWJhciAubWVudSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNnJlbTsgfVxcbiAgICAudG9wLWJhciAubWVudSAuYnV0dG9uIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgICBiYWNrZ3JvdW5kOiBub25lOyB9XFxuICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbi5zbWFsbCB7XFxuICAgICAgICBmb250LXNpemU6IDAuODVyZW07IH1cXG4gICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjRDMyRjJGOyB9XFxuICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbi5hY3RpdmUge1xcbiAgICAgICAgYmFja2dyb3VuZDogI0QzMkYyRjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgICAgICAudG9wLWJhciAubWVudSAuYnV0dG9uLmFjdGl2ZTpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAudG9wLWJhciAuYXZhdGFyIHtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLnRvcC1iYXIgLmRpc2Nvbm5lY3Qge1xcbiAgICBjb2xvcjogI0Y0NDMzNjsgfVxcbiAgICAudG9wLWJhciAuZGlzY29ubmVjdDpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXBwLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zaXRlIHtcXG4gIGRpcmVjdGlvbjogcnRsOyB9XFxuICAuc2l0ZSAuc3BsaXQuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbiBpIHtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgICBsaW5lLWhlaWdodDogMTZweDsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmZhY2Vib29rIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjM2I1OTk4OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24uZ29vZ2xlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZDUwZjI1OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24ubGVmdC1pY29uIHtcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgICAgIC5zaXRlIC5zcGxpdC5idXR0b24ubGVmdC1pY29uIHNwYW4ge1xcbiAgICAgICAgbGVmdDogMDsgfVxcbiAgLnNpdGUgLmVycm9yLW1zZyB7XFxuICAgIGNvbG9yOiAjZDUwZjI1O1xcbiAgICBwYWRkaW5nOiAwIDE1cHggMTVweDsgfVxcbiAgICAuc2l0ZSAuZXJyb3ItbXNnIGkge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuICAuc2l0ZSBsYWJlbCB7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG4gIC5zaXRlIC5tb3JlLXNwYWNlIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDsgfVxcbiAgLnNpdGUgLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQ6ICNFRjUzNTA7XFxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjRDMyRjJGO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgaGVpZ2h0OiAzLjNlbTtcXG4gICAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuc2l0ZSAuaGVhZGVyIC5oZWFkZXItdGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICBmbGV4OiAxOyB9XFxuICAuc2l0ZSAuYmFjay1idG4ge1xcbiAgICB3aWR0aDogMjBweDsgfVxcbiAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmxpc3QtaXRlbTpudGgtY2hpbGQoZXZlbikge1xcbiAgICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5saXN0LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUuc21hbGwtdGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUgbGkgYSB7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudSBsaS5hY3RpdmUgYSB7XFxuICAgICAgYmFja2dyb3VuZDogI0QzMkYyRjtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAubWVudSBsaS5hY3RpdmU6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjRkZGRkZGOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5zZWFyY2gge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMC45MzVlbTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuOTM1ZW07IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLnNlYXJjaC1pbnB1dCB7XFxuICAgICAgdGV4dC1pbmRlbnQ6IDMwcHg7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLnNlYXJjaC1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAxMXB4O1xcbiAgICAgIHJpZ2h0OiAyOHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgY29sb3I6ICNjYWNhY2E7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDMyRjJGO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjI1cyBlYXNlLW91dCwgY29sb3IgLjI1cyBlYXNlLW91dDtcXG4gICAgICBwYWRkaW5nOiAuODVlbTtcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICB3aWR0aDogMy41cmVtO1xcbiAgICAgIGhlaWdodDogMy41cmVtO1xcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICBib3R0b206IDFyZW07IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG4uYmlnIHtcXG4gICAgICAgIGxlZnQ6IDI3JTsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bi5zbWFsbCB7XFxuICAgICAgICB3aWR0aDogMi41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgICAgICBsZWZ0OiA1JTsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDUwMDAwOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXItc3RhdHVzIHtcXG4gICAgICBjb2xvcjogIzQyNDI0MjtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXItc3RhdHVzIGkge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDsgfVxcbiAgLnNpdGUgLmJ1dHRvbi5zdWNjZXNzW2Rpc2FibGVkXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICMyNWEzNWEgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgZXJyb3JSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvZXJyb3JSZWR1Y2VyJztcbmltcG9ydCBsb2FkaW5nUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyJztcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy91c2Vyc1JlZHVjZXInO1xuaW1wb3J0IGV2ZW50c1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9ldmVudHNSZWR1Y2VyJztcbmltcG9ydCBib29raW5nc1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9ib29raW5nc1JlZHVjZXInO1xuaW1wb3J0IGF1dGhEYXRhUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlcic7XG5pbXBvcnQgbmF2aWdhdGlvblJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9uYXZpZ2F0aW9uUmVkdWNlcic7XG5cbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBjdXJyZW50UGFnZTogbmF2aWdhdGlvblJlZHVjZXIsXG4gICAgYXV0aERhdGE6IGF1dGhEYXRhUmVkdWNlcixcbiAgICBlcnJvck1zZzogZXJyb3JSZWR1Y2VyLFxuICAgIGxvYWRpbmc6IGxvYWRpbmdSZWR1Y2VyLFxuICAgIHVzZXJzOiB1c2Vyc1JlZHVjZXIsXG4gICAgZXZlbnRzOiBldmVudHNSZWR1Y2VyLFxuICAgIGJvb2tpbmdzOiBib29raW5nc1JlZHVjZXJcbiAgfSk7XG5cbiAgY29uc3QgbWlkZGxld2FyZSA9IGFwcGx5TWlkZGxld2FyZShcbiAgICB0aHVua1xuICApO1xuXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgdW5kZWZpbmVkLCBtaWRkbGV3YXJlKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L21ha2VTdG9yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVkdXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBSRVBPUlRfRVJST1IgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gJyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVycm9yUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVQT1JUX0VSUk9SOlxuICAgICAgcmV0dXJuIGFjdGlvbi5tZXNzYWdlO1xuICAgIGNhc2UgU1RBUlRfTE9BRElORzpcbiAgICAgIHJldHVybiAnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2Vycm9yUmVkdWNlci5qcyIsImltcG9ydCB7IFNUQVJUX0xPQURJTkcsIFNUT1BfTE9BRElORyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGluZ1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNUQVJUX0xPQURJTkc6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBjYXNlIFNUT1BfTE9BRElORzpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2xvYWRpbmdSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVVNFUlNfUkVDRUlWRUQsIFVTRVJfUkVNT1ZFRCwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVVNFUlNfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi51c2Vycyk7XG4gICAgY2FzZSBVU0VSX1JFTU9WRUQ6XG4gICAgICByZXR1cm4gXy5vbWl0KHN0YXRlLCBhY3Rpb24udWlkKTtcbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEVWRU5UU19SRUNFSVZFRCwgRVZFTlRfUkVNT1ZFRCwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50c1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEVWRU5UU19SRUNFSVZFRDpcbiAgICAgIHJldHVybiBfLm1lcmdlKHt9LCBzdGF0ZSwgYWN0aW9uLmV2ZW50cyk7XG4gICAgY2FzZSBFVkVOVF9SRU1PVkVEOlxuICAgICAgcmV0dXJuIF8ub21pdChzdGF0ZSwgYWN0aW9uLmV2ZW50SWQpO1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXZlbnRzUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEJPT0tJTkdTX1JFQ0VJVkVELCBCT09LSU5HX0NBTkNFTEVELCBTSUdOX09VVCB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXZlbnRzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQk9PS0lOR1NfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi5ib29raW5ncyk7XG4gICAgY2FzZSBCT09LSU5HX0NBTkNFTEVEOiB7XG4gICAgICBjb25zdCBjbG9uZWRCb29raW5ncyA9IF8uY2xvbmVEZWVwKHN0YXRlKTtcbiAgICAgIGRlbGV0ZSBjbG9uZWRCb29raW5nc1thY3Rpb24udWlkXVthY3Rpb24uZXZlbnRJZF07XG4gICAgICBpZiAoXy5zaXplKGNsb25lZEJvb2tpbmdzW2FjdGlvbi51aWRdKSA9PT0gMCkge1xuICAgICAgICBkZWxldGUgY2xvbmVkQm9va2luZ3NbYWN0aW9uLnVpZF07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmVkQm9va2luZ3M7XG4gICAgfVxuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYm9va2luZ3NSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgU0VUX0FVVEhfREFUQSwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aERhdGFSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQVVUSF9EQVRBOlxuICAgICAgcmV0dXJuIHsgdWlkOiBhY3Rpb24udWlkLCBlbWFpbDogYWN0aW9uLmVtYWlsLCBwaG90b1VSTDogYWN0aW9uLnBob3RvVVJMLCBpc0FkbWluOiBhY3Rpb24uaXNBZG1pbiB9O1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXV0aERhdGFSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBOQVZJR0FURV9UTywgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gQ29uc3RhbnRzLlBBR0VTLkFVVEgudmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZpZ2F0aW9uUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTkFWSUdBVEVfVE86XG4gICAgICByZXR1cm4gYWN0aW9uLnBhZ2U7XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9uYXZpZ2F0aW9uUmVkdWNlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVkdXhUaHVuaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlZHV4VGh1bmtcIlxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==