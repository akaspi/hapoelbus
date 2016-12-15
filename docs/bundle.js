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
	      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Union_olimpija.png/140px-Union_olimpija.png',
	      name: 'לובליאנה'
	    },
	    'valencia': {
	      src: 'http://samvanrossom.com/wp-content/uploads/2014/10/valencia-basket1-logo.jpg',
	      name: 'ולנסיה'
	    },
	    'kuban': {
	      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Lokomotiv_Kuban_logo.png/200px-Lokomotiv_Kuban_logo.png',
	      name: 'לוקומוטיב קובאן'
	    },
	    'fuenlabrada': {
	      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Baloncestofuenlabrada.jpg/110px-Baloncestofuenlabrada.jpg',
	      name: 'פואנלברדה'
	    },
	    'ulm': {
	      src: 'http://nachwuchs.bbu01.com/modules/mod_bbunewsflash/assets/images/noimage_thumb.jpg',
	      name: 'אולם'
	    },
	    'vilna': {
	      src: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/BC_Lietuvos_Rytas_logo.svg/907px-BC_Lietuvos_Rytas_logo.svg.png',
	      name: 'ריטאס וילנה'
	    },
	    'novgorod': {
	      src: 'http://olympiakos-live.gr/img/teams/Nizhny%20Novgorod.png',
	      name: 'ניז׳ני'
	    },
	    'zenit': {
	      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/FC_Zenit_1_star_2015_logo.png/220px-FC_Zenit_1_star_2015_logo.png',
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
	    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Union_olimpija.png/140px-Union_olimpija.png',
	    label: 'לובליאנה'
	  },
	  'valencia': {
	    logo: 'http://samvanrossom.com/wp-content/uploads/2014/10/valencia-basket1-logo.jpg',
	    label: 'ולנסיה'
	  },
	  'kuban': {
	    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Lokomotiv_Kuban_logo.png/200px-Lokomotiv_Kuban_logo.png',
	    label: 'לוקומוטיב קובאן'
	  },
	  'fuenlabrada': {
	    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Baloncestofuenlabrada.jpg/110px-Baloncestofuenlabrada.jpg',
	    label: 'פואנלברדה'
	  },
	  'ulm': {
	    logo: 'http://nachwuchs.bbu01.com/modules/mod_bbunewsflash/assets/images/noimage_thumb.jpg',
	    label: 'אולם'
	  },
	  'vilna': {
	    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/BC_Lietuvos_Rytas_logo.svg/907px-BC_Lietuvos_Rytas_logo.svg.png',
	    label: 'ריטאס וילנה'
	  },
	  'novgorod': {
	    logo: 'http://olympiakos-live.gr/img/teams/Nizhny%20Novgorod.png',
	    label: 'ניז׳ני'
	  },
	  'zenit': {
	    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/FC_Zenit_1_star_2015_logo.png/220px-FC_Zenit_1_star_2015_logo.png',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTY2ZDg4ZDEyNzRjMDU3Y2E5ZTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yb290L3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LnJ0Iiwid2VicGFjazovLy9leHRlcm5hbCBcIl9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2Nzcz8yMjlmIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbGlzdEl0ZW0uc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEZvcm0vZXZlbnRGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0ucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybUZyYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzPzI1ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL2Zvcm1GcmFtZVRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2Nzcz83OTVkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2Uuc2Nzcz9jOWYwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2V2ZW50QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2xpZW50REIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9jb25maWcucHJvZC5qc29uIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUHJvbWlzZVwiIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2xvYWRpbmdBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2Vycm9yQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zcGlubmVyLnNjc3M/Y2FjNCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5ydCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ldmVudEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9nYW1lQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9ib29raW5nc0NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdGVhbXNEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3M/MmRkNCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2V2ZW50SXRlbS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXNlckluZm9Db25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RyYW5zbGF0aW9ucy91c2VyRm9ybVRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5zY3NzPzhiNTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2UucnQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5zY3NzPzE0NGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F1dGhQYWdlL2F1dGhQYWdlLnNjc3M/ODIzYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL25hdmlnYXRpb25BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhRml4ZXJzL3VwZGF0ZVBob3RvVXJsRml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2Uuc2Nzcz9iM2Q5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lZGl0VXNlckluZm9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbmF2aWdhdGlvbkNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnJ0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5zY3NzP2E4OGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZGlzdHJpYnV0aW9uQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b3BCYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdG9wQmFyLnNjc3M/MzQyZSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RvcEJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuc2Nzcz9kZjFjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvbWFrZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2Vycm9yUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvbG9hZGluZ1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3VzZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvZXZlbnRzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvYm9va2luZ3NSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9hdXRoRGF0YVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL25hdmlnYXRpb25SZWR1Y2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlZHV4VGh1bmtcIiJdLCJuYW1lcyI6WyJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsaWVudERCIiwiUm9vdCIsImFwcGx5IiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1hcFN0YXRlVG9Qcm9wcyIsImF1dGhEYXRhIiwic3RhdGUiLCJjdXJyZW50UGFnZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBdXRoRGF0YSIsIkFwcCIsInByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJfIiwiQ29uc3RhbnRzIiwicGlja0V2ZW50cyIsIkFMTCIsImV2ZW50Iiwic3RhdHVzIiwiRVZFTlRTX1NUQVRVUyIsIk9QRU5fRk9SX0FMTCIsInZhbHVlIiwiT1BFTl9GT1JfTUVNQkVSUyIsIkNMT1NFRCIsImdldFN0YXR1c1N1YnRpdGxlIiwiZXZlbnRTdGF0dXMiLCJmaW5kIiwibmFtZSIsImV2ZW50cyIsImNyZWF0ZUV2ZW50IiwidXBkYXRlRXZlbnQiLCJldmVudElkIiwicmVtb3ZlRXZlbnQiLCJFdmVudHNQYWdlIiwiZWRpdGluZ0V2ZW50SWQiLCJjcmVhdGVNb2RlIiwiZmlsdGVyIiwiY2hhaW4iLCJwaWNrQnkiLCJtYXAiLCJzZXRTdGF0ZSIsIkVWRU5UU19UWVBFUyIsInR5cGVJZCIsImRheSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJtaW51dGUiLCJldmVudFR5cGUiLCJzcmMiLCJzdG9wRWRpdGluZyIsIm9iamVjdCIsInJlcXVpcmUiLCJSZWFjdCIsIkxpc3RJdGVtIiwib25DbGljayIsImltYWdlU3JjIiwidGl0bGUiLCJzdWJ0aXRsZXMiLCJzdWJ0aXRsZSIsImtleSIsInN0cmluZyIsImFycmF5IiwiZW1wdHlFdmVudCIsImV2ZW50Rm9ybSIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJvblN1Ym1pdCIsIm9uUmVtb3ZlRXZlbnQiLCJvbkNsb3NlIiwiaXNBZG1pbk1vZGUiLCJib29sIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZGVmYXVsdHMiLCJkYXRlSW5wdXRTdXBwb3J0ZWQiLCJ0aW1lSW5wdXRTdXBwb3J0ZWQiLCJjb21wb25lbnREaWRNb3VudCIsImNoZWNrSWZIdG1sNVN1cHBvcnRlZCIsIm9uQ2hhbmdlIiwiZSIsInZhbGlkYXRpb25UeXBlIiwidGFyZ2V0IiwidGVzdCIsImdldEV2ZW50UGljdHVyZSIsImdldCIsIkVWRU5UX0RFRkFVTFRfUElDIiwiZ2V0VGltZVZhbHVlIiwicGljayIsImpvaW4iLCJvblRpbWVDaGFuZ2UiLCJ2YWwiLCJzcGxpdCIsImdldERhdGVWYWx1ZSIsIm9uTnVtZXJpY0NoYW5nZSIsInRvTnVtYmVyIiwic3VwcG9ydGVkSW5wdXRUeXBlcyIsInRlc3RSZXN1bHQiLCJ0ZXN0U3RyaW5nIiwiZWFjaCIsImlucHV0VHlwZSIsImlucHV0IiwidHlwZSIsImlzU3VwcG9ydGVkIiwib25EYXRlQ2hhbmdlIiwib25Cb29sZWFuQ2hhbmdlIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJpc0Zvcm1WYWxpZCIsIm9taXQiLCJmb3JtRnJhbWVUcmFuc2xhdGlvbnMiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVCYWNrQnV0dG9uIiwiaXNGdW5jdGlvbiIsImNyZWF0ZUFjdGlvbnNCdXR0b25zIiwiZGlzYWJsZWQiLCJvblJlbW92ZSIsImNyZWF0ZVJlbW92ZUJ1dHRvbiIsIlJFTU9WRSIsIlNVQk1JVCIsIkZvcm1GcmFtZSIsImNoaWxkcmVuIiwiRVJST1JTIiwiR0VORVJBTCIsIklOVkFMSURfTUFJTCIsIldFQUtfUEFTU1dPUkQiLCJFTUFJTF9JTl9VU0UiLCJXUk9OR19QQVNTV09SRCIsIk5PVF9TQU1FX1BBU1NXT1JEIiwiVVNFUl9OT1RfRk9VTkQiLCJEQVRFX1RJTUVfREFUQSIsImRheXMiLCJtb250aHMiLCJ5ZWFycyIsImhvdXJzIiwibWludXRlcyIsIlNUQVRJT05TIiwibW9kaWluIiwidGx2IiwiTUFYX1NFQVNPTl9USUNLRVRTIiwiTUFYX0VYVFJBX1BBU1NFTkdFUlMiLCJQSE9ORV9QUkVGSVhFUyIsIlBBR0VTIiwiSE9NRSIsInZpc2libGUiLCJBVVRIIiwiVVNFUlMiLCJFVkVOVFMiLCJCT09LSU5HUyIsIkRJU1RSSUJVVElPTiIsIkVESVRfVVNFUl9JTkZPIiwiRlVMTFlfQk9PS0VEIiwiUkVDSVBJRU5UUyIsIk1FTUJFUlNfT05MWSIsIkJPT0tFRF9UT19FVkVOVCIsIk1FVEhPRFMiLCJFTUFJTCIsIlNNUyIsIlRZUEVTIiwiVEVNUExBVEUiLCJDVVNUT00iLCJURU1QTEFURVMiLCJFVkVOVF9PUEVOX0ZPUl9NRU1CRVJTIiwiaWQiLCJFVkVOVF9PUEVOX0ZPUl9BTEwiLCJDSEFOR0VfRVZFTlRfREVUQUlMUyIsImxvYWRpbmdBY3Rpb25zIiwiZXJyb3JBY3Rpb25zIiwiRVZFTlRfS0VZUyIsIkVWRU5UU19QQVRIIiwiZXZlbnRSZW1vdmVkIiwiZXZlbnRzUmVjZWl2ZWQiLCJmZXRjaEV2ZW50cyIsInJlYWQiLCJ0aGVuIiwic3RhcnRMb2FkaW5nIiwicHVzaCIsImNhdGNoIiwicmVwb3J0RXJyb3IiLCJmaW5hbGx5Iiwic3RvcExvYWRpbmciLCJldmVudFRvVXBkYXRlIiwidXBkYXRlIiwicmVtb3ZlIiwiU1RBUlRfTE9BRElORyIsIlNUT1BfTE9BRElORyIsIlJFUE9SVF9FUlJPUiIsIlNFVF9BVVRIX0RBVEEiLCJTSUdOX09VVCIsIlVTRVJTX1JFQ0VJVkVEIiwiVVNFUl9SRU1PVkVEIiwiRVZFTlRTX1JFQ0VJVkVEIiwiRVZFTlRfUkVNT1ZFRCIsIkJPT0tJTkdTX1JFQ0VJVkVEIiwiQk9PS0lOR19DQU5DRUxFRCIsIk5BVklHQVRFX1RPIiwiY29uZmlnIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZSIsInNldEluIiwicGF0aCIsImRhdGEiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGF0YWJhc2UiLCJyZWYiLCJzZXQiLCJvbmNlIiwic25hcHNob3QiLCJ1bmlxdWVLZXkiLCJsb2dpbldpdGhHb29nbGUiLCJwcm92aWRlciIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJsb2dpbldpdGhGYWNlYm9vayIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwibG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiZ2V0TG9nZ2VkSW5Vc2VyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXN1bHQiLCJ1c2VyIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiUmVhY3RSZWR1eCIsImNsYXNzTmFtZXMiLCJMb2dvIiwiaXNMb2FkaW5nIiwibG9hZGluZyIsIlNwaW5uZXIiLCJvdmVybGF5Q2xhc3MiLCJvdmVybGF5IiwiaGlkZSIsImNvbm5lY3QiLCJ3aWR0aCIsIm9wYWNpdHkiLCJudW1iZXIiLCJoZWlnaHQiLCJ0ZWFtc0RhdGEiLCJwYXJzZUV2ZW50RGF0ZSIsImV2ZW50RGF0ZSIsIkRhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwiaXNGdXR1cmVFdmVudCIsIm5vdyIsInVzZXJzIiwiYm9va2luZ3MiLCJ1cGRhdGVCb29raW5nIiwidWlkIiwiYm9va2luZyIsImNhbmNlbEJvb2tpbmciLCJ1cGRhdGVVc2VyIiwiSG9tZVBhZ2UiLCJvbWl0QnkiLCJzb3J0QnkiLCJldmVudERhdGEiLCJzZWFzb25UaWNrZXRzIiwidXNlckJvb2tpbmdzIiwiaGFzIiwicGhvdG9VUkwiLCJIQVBPRUxfSkVSVVNBTEVNIiwiZ2FtZXNDb25zdGFudHMiLCJib29raW5nc0NvbnN0YW50cyIsImlzQm9va2luZ0VuYWJsZWQiLCJTVEFUVVMiLCJvd25Qcm9wcyIsImhvbWVUZWFtIiwiYXdheVRlYW0iLCJkYXRlIiwidGltZSIsImlzQm9va2luZ0FsbG93ZWQiLCJpc0Jvb2tlZCIsImhhc0luIiwiY3JlYXRlVGVhbUxvZ29zIiwiaG9tZSIsImF3YXkiLCJsb2dvIiwibGFiZWwiLCJjcmVhdGVFdmVudFRpbWVBbmREYXRlIiwiaXNPcGVuRm9yQm9va2luZyIsImNyZWF0ZUZ1bGx5Qm9va2VkTGFiZWwiLCJUUkFOU0xBVElPTlMiLCJmdWxseUJvb2tlZCIsImNyZWF0ZUJvb2tpbmdCdXR0b24iLCJvbkJvb2tpbmciLCJib29rQnV0dG9uIiwiYm9vayIsImVkaXRCb29raW5nQnV0dG9uIiwiZWRpdEJvb2tpbmciLCJjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uIiwib25DYW5jZWxCb29raW5nIiwiRXZlbnRJdGVtIiwiaXNGdWxseUJvb2tlZCIsInNoYXBlIiwiY2xvc2VkIiwib3BlbkZvck1lbWJlcnMiLCJvcGVuRm9yQWxsIiwiZW1wdHlCb29raW5nIiwicGFpZFNlYXRzIiwiZXh0cmFTZWF0cyIsInBpY2tVcCIsImRyb3BPZmYiLCJib29raW5nRm9ybSIsIm1lcmdlIiwicGlja1VwRW5hYmxlZCIsImRyb3BPZmZFbmFibGVkIiwidG9nZ2xlUGlja1VwIiwidG9nZ2xlRHJvcE9mZiIsImJvb2tpbmdUb1N1Ym1pdCIsImtleXMiLCJ1c2VySW5mb0NvbnN0YW50cyIsInVzZXJGb3JtVHJhbnNsYXRpb25zIiwidXNlckFjdGlvbnMiLCJlbXB0eVVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBob25lUHJlZml4IiwicGhvbmVOdW1iZXIiLCJzdGF0aW9uIiwic3Vic2NyaWJlU01TIiwic3Vic2NyaWJlTWFpbCIsImdldEVtcHR5VXNlckluZm8iLCJhc3NpZ24iLCJ1c2VySW5mbyIsImlzQWRtaW4iLCJhbGxvd1VzZXJSZW1vdmUiLCJyZW1vdmVVc2VyIiwiY3JlYXRlQWRtaW5TZWN0aW9uIiwib25OdW1iZXJDaGFuZ2UiLCJ0aW1lcyIsImkiLCJjcmVhdGVVc2VyTmFtZUlucHV0cyIsIm9uVGV4dENoYW5nZSIsIkZJUlNUX05BTUUiLCJMQVNUX05BTUUiLCJjcmVhdGVFbWFpbElucHV0IiwiY3JlYXRlUGhvbmVOdW1iZXJJbnB1dHMiLCJQSE9ORV9OVU1CRVIiLCJQSE9ORV9QUkVGSVgiLCJwcmVmaXgiLCJjcmVhdGVQaWNrdXBTdGF0aW9uUm93IiwicmVxdWVzdEZvck1lbWJlcnNoaXAiLCJjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQiLCJGQVZPUklURV9QSUNLVVBfU1RBVElPTiIsImNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQiLCJSRVFVRVNUX0ZPUl9NRU1CRVJTSElQIiwidW5kZWZpbmVkIiwiZGlzcGxheSIsImNyZWF0ZURpc3RyaWJ1dGlvbklucHV0cyIsIlRPR0dMRSIsIllFUyIsIk5PIiwiVXNlckZvcm0iLCJoYXNBbGxSZXF1aXJlZEluZm8iLCJyZXF1aXJlZEluZm8iLCJzb21lIiwiaXNFbXB0eSIsImhhc1ZhbGlkUGhvbmVOdW1iZXIiLCJoYXNSZXF1ZXN0Rm9yTWVtYmVyc2hpcFByb3BlcnR5Iiwib25LZXlQcmVzcyIsInBhcnNlSW50IiwiY2xvbmUiLCJiaW5kIiwiVElUTEUiLCJVU0VSX0lORk9fS0VZUyIsIlBBVEhfTUFQIiwiVVNFUlNfSU5GTyIsIlNFQVNPTl9USUNLRVRTIiwiYnVpbGRVc2VyIiwiZmV0Y2hBbGxVc2VycyIsInVzZXJSZWFkUHJvbWlzZXMiLCJhbGwiLCJ1c2Vyc0luZm8iLCJ0cmFuc2Zvcm0iLCJhY2MiLCJpbmZvIiwiZmV0Y2hTaW5nbGVVc2VyIiwidXNlcnNSZW1vdmVkIiwidXNlcnNSZWNlaXZlZCIsImZldGNoVXNlcnMiLCJnZXRTdGF0ZSIsImZldGNoUHJvbWlzZSIsInVzZXJVcGRhdGVQcm9taXNlcyIsInVzZXJSZW1vdmVQcm9taXNlcyIsInVzZXJQYXRoIiwiQk9PS0lOR19EQVRBX0tFWVMiLCJCT09LSU5HU19QQVRIIiwiZmV0Y2hVc2VyQm9va2luZ3MiLCJmZXRjaEFsbEJvb2tpbmdzIiwiYm9va2luZ3NSZWNlaXZlZCIsImJvb2tpbmdzQ2FuY2VsZWQiLCJmZXRjaEJvb2tpbmdzIiwiYm9va2luZ0RhdGEiLCJib29raW5nRGF0YVRvVXBkYXRlIiwicGlja1VzZXJzRnVuY3Rpb25zIiwiTUVNQkVSUyIsIk5PTl9NRU1CRVJTIiwiUkVRVUVTVFMiLCJVc2Vyc1BhZ2UiLCJlZGl0aW5nVXNlcklkIiwic2VhcmNoUXVlcnkiLCJzdGFydHNXaXRoIiwidmFsdWVzIiwic3VtQnkiLCJzaXplIiwiY29uc3RhbnRzIiwiZXJyb3JNc2ciLCJsb2dpbldpdGhFbWFpbCIsInNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQiLCJtc2ciLCJBdXRoRm9ybSIsInBhc3N3b3JkQWdhaW4iLCJhdXRoTW9kZSIsImlzTG9naW5Nb2RlIiwiZ2V0QnV0dG9uTGFiZWwiLCJoYW5kbGVLZXlEb3duIiwia2V5Q29kZSIsImlzU3VibWl0RGlzYWJsZWQiLCJoYW5kbGVTdWJtaXRDbGljayIsImdvVG9Mb2dpbiIsImdvVG9SZWdpc3RlciIsImdvVG9Gb3Jnb3RQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiaGFuZGxlUmVnaXN0ZXIiLCJpc0VxdWFsIiwiaGFuZGxlRm9yZ290UGFzc3dvcmQiLCJldmVudEFjdGlvbnMiLCJib29raW5nQWN0aW9ucyIsIm5hdmlnYXRpb25BY3Rpb25zIiwiQVVUSF9FUlJPUl9DT0RFU19NQVAiLCJzZXRBdXRoRGF0YSIsImZldGNoQXBwRGF0YSIsInVzZXJTaWduZWRPdXQiLCJuYXZpZ2F0ZVRvIiwiZGJFcnJvciIsImNvZGUiLCJlcnJvciIsInBhZ2UiLCJnZXREcm9wT2ZmTWFwIiwiZ2V0UGlja1VwTWFwIiwiQm9va2luZ3NQYWdlIiwiZmluZEtleSIsImJvb2tpbmdGb3JFdmVudE1hcCIsIm1hcFZhbHVlcyIsImlzVW5kZWZpbmVkIiwiY3VycmVudEV2dCIsImdldEJvb2tpbmdQaG9uZSIsInZpc2libGVCb29raW5ncyIsImdldFZpc2libGVCb29raW5ncyIsInRsdlBpY2tVcHNQYWlkIiwidGx2UGlja1Vwc0V4dHJhIiwibW9kaWluUGlja1Vwc1BhaWQiLCJtb2RpaW5QaWNrVXBzRXh0cmEiLCJ0bHZEcm9wT2Zmc1BhaWQiLCJ0bHZEcm9wT2Zmc0V4dHJhIiwibW9kaWluRHJvcE9mZnNQYWlkIiwibW9kaWluRHJvcE9mZnNFeHRyYSIsIm5hdmlnYXRpb25Db25zdGFudHMiLCJwYWdlSWQiLCJFZGl0b3JVc2VySW5mb1BhZ2UiLCJvbkZvcm1DbG9zZSIsImRpc3RyaWJ1dGlvbiIsImdldE1lbWJlcnNVc2Vyc09ubHkiLCJnZXRCb29rZWRVc2Vyc09ubHkiLCJnZXRSZWNpcGllbnRzIiwicmVjaXBpZW50c1R5cGUiLCJyZWNpcGllbnRzVXNlcnMiLCJnZXRVc2Vyc0VtYWlscyIsInJlY2lwaWVudHMiLCJnZXRVc2Vyc1Bob25lTnVtYmVycyIsImdldEV2ZW50U3Vic3RpdHV0aW9ucyIsInByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQiLCJjb250ZW50IiwicmVwbGFjZSIsImRpc3RyaWJ1dGlvbk1ldGhvZCIsImRpc3RyaWJ1dGlvblR5cGUiLCJsYXN0IiwidGVtcGxhdGVJZCIsInN1YmplY3QiLCJzZW5kVGVtcGxhdGVFbWFpbCIsInN1YnN0aXR1dGlvbnMiLCJzZW5kQ3VzdG9tRW1haWwiLCJzZW5kU01TIiwiRGlzdHJpYnV0aW9uUGFnZSIsImdldE9wZW5FdmVudHMiLCJpc0Rpc3RyaWJ1dGlvblR5cGVWaXNpYmxlIiwiRU1BSUxTIiwidG8iLCJhdXRoQWN0aW9ucyIsImN1cnJlbnRVc2VyIiwiZ2V0VXNlclRpdGxlIiwiY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlIiwidG9nZ2xlTWVudVZpc2liaWxpdHkiLCJjcmVhdGVNZW51IiwicGFnZXMiLCJpc01lbnVWaXNpYmxlIiwiY3JlYXRlRGVza3RvcE1lbnVJdGVtIiwiaXRlbUNsYXNzZXMiLCJhY3RpdmUiLCJidXR0b24iLCJzbWFsbCIsImNyZWF0ZU1vYmlsZU1lbnVJdGVtIiwib25Nb2JpbGVNZW51Q2xpY2tlZCIsImNyZWF0ZURlc2t0b3BNZW51IiwiY3JlYXRlTW9iaWxlTWVudSIsIlRvcEJhciIsIm1ha2VTdG9yZSIsInJlZHVjZXJzIiwibWlkZGxld2FyZSIsImVycm9yUmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsImxvYWRpbmdSZWR1Y2VyIiwidXNlcnNSZWR1Y2VyIiwiZXZlbnRzUmVkdWNlciIsImNsb25lZEJvb2tpbmdzIiwiY2xvbmVEZWVwIiwiYXV0aERhdGFSZWR1Y2VyIiwibmF2aWdhdGlvblJlZHVjZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLG9CQUFTQSxNQUFULENBQWdCLGdCQUFNQyxhQUFOLGdCQUFoQixFQUEyQ0MsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUEzQyxFOzs7Ozs7OztBQ0pBLHdCOzs7Ozs7QUNBQSwyQjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOztLQUFZQyxROztBQUVaOzs7Ozs7Ozs7Ozs7S0FFTUMsSTs7Ozs7Ozs7Ozs7bUNBQ1U7QUFDWixjQUFPLDBCQUFVRCxRQUFWLENBQVA7QUFDRDs7OzhCQUNRO0FBQ1AsY0FBTyxlQUFTRSxLQUFULENBQWUsSUFBZixDQUFQO0FBQ0Q7Ozs7R0FOZ0IsZ0JBQU1DLFM7O0FBU3pCQyxR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LGNBQU94Z0IsS0FBUDtBQWRKO0FBZ0JELEU7Ozs7Ozs7Ozs7Ozs7OzttQkNsQnVCK2dCLGU7O0FBSnhCOztBQUVBLEtBQU1QLGVBQWUsSUFBckI7O0FBRWUsVUFBU08sZUFBVCxHQUE0RDtBQUFBLE9BQW5DL2dCLEtBQW1DLHVFQUEzQndnQixZQUEyQjtBQUFBLE9BQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFDekUsV0FBUUEsT0FBT3RhLElBQWY7QUFDRTtBQUNFLGNBQU8sRUFBRStKLEtBQUt1USxPQUFPdlEsR0FBZCxFQUFtQnpDLE9BQU9nVCxPQUFPaFQsS0FBakMsRUFBd0NvRCxVQUFVNFAsT0FBTzVQLFFBQXpELEVBQW1FaUUsU0FBUzJMLE9BQU8zTCxPQUFuRixFQUFQO0FBQ0Y7QUFDRSxjQUFPMEwsWUFBUDtBQUNGO0FBQ0UsY0FBT3hnQixLQUFQO0FBTko7QUFRRCxFOzs7Ozs7Ozs7Ozs7Ozs7bUJDUnVCZ2hCLGlCOztBQUx4Qjs7S0FBWXBnQixTOztBQUNaOzs7O0FBRUEsS0FBTTRmLGVBQWU1ZixVQUFVK0gsS0FBVixDQUFnQkcsSUFBaEIsQ0FBcUJ0RCxHQUExQzs7QUFFZSxVQUFTd2IsaUJBQVQsR0FBOEQ7QUFBQSxPQUFuQ2hoQixLQUFtQyx1RUFBM0J3Z0IsWUFBMkI7QUFBQSxPQUFiQyxNQUFhLHVFQUFKLEVBQUk7O0FBQzNFLFdBQVFBLE9BQU90YSxJQUFmO0FBQ0U7QUFDRSxjQUFPc2EsT0FBTzFFLElBQWQ7QUFDRjtBQUNFLGNBQU95RSxZQUFQO0FBQ0Y7QUFDRSxjQUFPeGdCLEtBQVA7QUFOSjtBQVFELEU7Ozs7Ozs7O0FDZEQsNkIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU2NmQ4OGQxMjc0YzA1N2NhOWUxIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9jb21wb25lbnRzL3Jvb3Qvcm9vdCc7XG5cblJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJvb3QpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9yb290LnJ0JztcbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcblxuaW1wb3J0IHsgbWFrZVN0b3JlIH0gZnJvbSAnLi4vLi4vcmVkdXgvbWFrZVN0b3JlJztcblxuY2xhc3MgUm9vdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNyZWF0ZVN0b3JlKCkge1xuICAgIHJldHVybiBtYWtlU3RvcmUoY2xpZW50REIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb290O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3Jvb3Qvcm9vdC5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAncmVhY3QtcmVkdXgnLFxuICAgICcuLi9hcHAvYXBwJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBSZWFjdFJlZHV4LCBBcHApIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RSZWR1eC5Qcm92aWRlciwgeyAnc3RvcmUnOiB0aGlzLmNyZWF0ZVN0b3JlKCkgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHt9KSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvcm9vdC9yb290LnJ0XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIl9cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2FwcC5ydCc7XG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGZldGNoQXV0aERhdGEgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhLFxuICBjdXJyZW50UGFnZTogc3RhdGUuY3VycmVudFBhZ2Vcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGZldGNoQXV0aERhdGE6ICgpID0+IGRpc3BhdGNoKGZldGNoQXV0aERhdGEoKSlcbn0pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mZXRjaEF1dGhEYXRhKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGZldGNoQXV0aERhdGE6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICdyZWFjdC1yZWR1eCcsXG4gICAgJy4uL3NwaW5uZXInLFxuICAgICcuLi9ob21lUGFnZS9ob21lUGFnZScsXG4gICAgJy4uL3VzZXJzUGFnZS91c2Vyc1BhZ2UnLFxuICAgICcuLi9hdXRoUGFnZS9hdXRoUGFnZScsXG4gICAgJy4uL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZScsXG4gICAgJy4uL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2UnLFxuICAgICcuLi9lZGl0VXNlckluZm9QYWdlJyxcbiAgICAnLi4vZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlJyxcbiAgICAnLi4vdG9wQmFyJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9hcHAuc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgUmVhY3RSZWR1eCwgc3Bpbm5lciwgSG9tZVBhZ2UsIFVzZXJzUGFnZSwgQXV0aFBhZ2UsIEV2ZW50c1BhZ2UsIEJvb2tpbmdzUGFnZSwgRWRpdFVzZXJJbmZvUGFnZSwgRGlzdHJpYnV0aW9uUGFnZSwgVG9wQmFyLCBDb25zdGFudHMsIGFwcENzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NpdGUgbGFyZ2UtNiBzbWFsbC0xMiBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChzcGlubmVyLCB7fSksICF0aGlzLnByb3BzLmF1dGhEYXRhID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2tleSc6ICdhdXRoLXBhZ2UtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnXG4gICAgICAgIH0sIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5BVVRILnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0aFBhZ2UsIHsgJ2tleSc6ICdhdXRoLXBhZ2UnIH0pIDogbnVsbCkgOiBudWxsLCB0aGlzLnByb3BzLmF1dGhEYXRhID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2tleSc6ICdhcHAtY29udGFpbmVyJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVG9wQmFyLCB7fSksIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5IT01FLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSG9tZVBhZ2UsIHsgJ2tleSc6ICdob21lLXBhZ2UnIH0pIDogbnVsbCwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gQ29uc3RhbnRzLlBBR0VTLlVTRVJTLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlcnNQYWdlLCB7ICdrZXknOiAndXNlcnMtcGFnZScgfSkgOiBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSBDb25zdGFudHMuUEFHRVMuRVZFTlRTLnZhbCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXZlbnRzUGFnZSwgeyAna2V5JzogJ2V2ZW50cy1wYWdlJyB9KSA6IG51bGwsIHRoaXMucHJvcHMuY3VycmVudFBhZ2UgPT09IENvbnN0YW50cy5QQUdFUy5CT09LSU5HUy52YWwgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tpbmdzUGFnZSwgeyAna2V5JzogJ2Jvb2tpbmdzLXBhZ2UnIH0pIDogbnVsbCwgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSA9PT0gQ29uc3RhbnRzLlBBR0VTLkRJU1RSSUJVVElPTi52YWwgPyBSZWFjdC5jcmVhdGVFbGVtZW50KERpc3RyaWJ1dGlvblBhZ2UsIHsgJ2tleSc6ICdkaXN0cmlidXRpb24tcGFnZScgfSkgOiBudWxsLCB0aGlzLnByb3BzLmN1cnJlbnRQYWdlID09PSBDb25zdGFudHMuUEFHRVMuRURJVF9VU0VSX0lORk8udmFsID8gUmVhY3QuY3JlYXRlRWxlbWVudChFZGl0VXNlckluZm9QYWdlLCB7ICdrZXknOiAnZWRpdFVzZXJJbmZvUGFnZS1wYWdlJyB9KSA6IG51bGwpIDogbnVsbCk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC5ydFxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZXZlbnRzUGFnZS5ydCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlRXZlbnQsIHVwZGF0ZUV2ZW50LCByZW1vdmVFdmVudCB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zJztcblxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IHBpY2tFdmVudHMgPSB7XG4gIEFMTDogKCkgPT4gdHJ1ZSxcbiAgWydPUEVOJ106IGV2ZW50ID0+IGV2ZW50LnN0YXR1cyA9PT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfQUxMLnZhbHVlIHx8IGV2ZW50LnN0YXR1cyA9PT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUy52YWx1ZSxcbiAgWydDTE9TRUQnXTogZXZlbnQgPT4gZXZlbnQuc3RhdHVzID09PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5DTE9TRUQudmFsdWUsXG59O1xuXG5jb25zdCBnZXRTdGF0dXNTdWJ0aXRsZSA9IGV2ZW50ID0+IHtcbiAgY29uc3QgZXZlbnRTdGF0dXMgPSBfLmZpbmQoQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMsIHsgdmFsdWU6IGV2ZW50LnN0YXR1cyB9KTtcbiAgcmV0dXJuIGV2ZW50U3RhdHVzID8gZXZlbnRTdGF0dXMubmFtZSA6ICcnO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBldmVudHM6IHN0YXRlLmV2ZW50cyxcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgY3JlYXRlRXZlbnQ6IGV2ZW50ID0+IGRpc3BhdGNoKGNyZWF0ZUV2ZW50KGV2ZW50KSksXG4gIHVwZGF0ZUV2ZW50OiAoZXZlbnRJZCwgZXZlbnQpID0+IGRpc3BhdGNoKHVwZGF0ZUV2ZW50KGV2ZW50SWQsIGV2ZW50KSksXG4gIHJlbW92ZUV2ZW50OiAoZXZlbnRJZCkgPT4gZGlzcGF0Y2gocmVtb3ZlRXZlbnQoZXZlbnRJZCkpXG59KTtcblxuY2xhc3MgRXZlbnRzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0aW5nRXZlbnRJZDogbnVsbCxcbiAgICAgIGNyZWF0ZU1vZGU6IGZhbHNlLFxuICAgICAgZmlsdGVyOiAnT1BFTidcbiAgICB9O1xuICB9XG5cbiAgZ2V0VmlzaWJsZUV2ZW50cygpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLmV2ZW50cylcbiAgICAgIC5waWNrQnkocGlja0V2ZW50c1t0aGlzLnN0YXRlLmZpbHRlcl0pXG4gICAgICAubWFwKChldmVudCwgZXZlbnRJZCkgPT4gKHsgZXZlbnRJZCwgZXZlbnQgfSkpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGdldE9wZW5FdmVudHMoKSB7XG4gICAgcmV0dXJuIF8ucGlja0J5KHRoaXMucHJvcHMuZXZlbnRzLCBwaWNrRXZlbnRzWydPUEVOJ10pO1xuICB9XG5cbiAgZ2V0Q2xvc2VkRXZlbnRzKCkge1xuICAgIHJldHVybiBfLnBpY2tCeSh0aGlzLnByb3BzLmV2ZW50cywgcGlja0V2ZW50c1snQ0xPU0VEJ10pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXIgfSk7XG4gIH1cblxuICBnZXRFdmVudFRpdGxlKGV2ZW50KSB7XG4gICAgcmV0dXJuIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lO1xuICB9XG5cbiAgZ2V0RXZlbnRTdWJ0aXRsZXMoZXZlbnQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ9eq15DXqNeZ15o6ICcgKyBgJHtldmVudC5kYXl9LyR7ZXZlbnQubW9udGh9LyR7ZXZlbnQueWVhcn1gLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG4gICAgICAn16nXoteUOiAnICsgIGAke2V2ZW50LmhvdXJ9OiR7ZXZlbnQubWludXRlfWAsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlbGVzcy1jb25jYXRcbiAgICAgIGdldFN0YXR1c1N1YnRpdGxlKGV2ZW50KVxuICAgIF07XG4gIH1cblxuICBnZXRFdmVudEltYWdlKGV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdO1xuICAgIHJldHVybiBldmVudFR5cGUuc3JjIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMzgvMTM4Nzc2LnN2Zyc7XG4gIH1cblxuICBvbkV2ZW50Q2xpY2soZXZlbnRJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nRXZlbnRJZDogZXZlbnRJZCB9KTtcbiAgfVxuXG4gIG9uQ3JlYXRlRXZlbnRDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3JlYXRlTW9kZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0b3BFZGl0aW5nKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nRXZlbnRJZDogbnVsbCwgY3JlYXRlTW9kZTogZmFsc2UgfSk7XG4gIH1cblxuICB1cGRhdGVFdmVudChldmVudCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNyZWF0ZU1vZGUpIHtcbiAgICAgIHRoaXMucHJvcHMuY3JlYXRlRXZlbnQoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUV2ZW50KHRoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWQsIGV2ZW50KTtcbiAgICB9XG4gICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnQoKSB7XG4gICAgdGhpcy5wcm9wcy5yZW1vdmVFdmVudCh0aGlzLnN0YXRlLmVkaXRpbmdFdmVudElkKTtcbiAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbkV2ZW50c1BhZ2UucHJvcFR5cGVzID0ge1xuICBhdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBldmVudHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY3JlYXRlRXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZUV2ZW50OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZW1vdmVFdmVudDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFdmVudHNQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2xpc3RJdGVtJyxcbiAgICAnLi4vZXZlbnRGb3JtL2V2ZW50Rm9ybScsXG4gICAgJy4uLy4uL3V0aWxzL2NvbnN0YW50cycsXG4gICAgJy4vZXZlbnRzUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBsaXN0SXRlbSwgRXZlbnRGb3JtLCBDb25zdGFudHMsIGV2ZW50c1BhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25DbGljazEobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdBTEwnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazIobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdPUEVOJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2szKGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnQ0xPU0VEJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s0KGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykge1xuICAgICAgICB0aGlzLm9uQ3JlYXRlRXZlbnRDbGljaygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrNShsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIHtcbiAgICAgICAgdGhpcy5vbkNyZWF0ZUV2ZW50Q2xpY2soKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazYobGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzLCBldmVudEl0ZW0sIGV2ZW50SXRlbUluZGV4KSB7XG4gICAgICAgIHRoaXMub25FdmVudENsaWNrKGV2ZW50SXRlbS5ldmVudElkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0RXZlbnRJdGVtNyhsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMsIGV2ZW50SXRlbSwgZXZlbnRJdGVtSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6IHRoaXMuZ2V0RXZlbnRUaXRsZShldmVudEl0ZW0uZXZlbnQpLFxuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJdGVtLmV2ZW50SWQsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRFdmVudFN1YnRpdGxlcyhldmVudEl0ZW0uZXZlbnQpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRFdmVudEltYWdlKGV2ZW50SXRlbS5ldmVudCksXG4gICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s2LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzLCBldmVudEl0ZW0sIGV2ZW50SXRlbUluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVWaXNpYmxlRXZlbnRzOChsaXN0Vmlld01vZGUpIHtcbiAgICAgICAgdmFyIHZpc2libGVFdmVudHMgPSB0aGlzLmdldFZpc2libGVFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7ICdrZXknOiAnZXZlbnRzLXZpZXcnIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXkNeZ16jXldei15nXnScpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmaWx0ZXJpbmcgcm93IGV4cGFuZGVkIGNvbGxhcHNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTEyIGxhcmdlLTYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VsJywgeyAnY2xhc3NOYW1lJzogJ21lbnUnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ0FMTCcgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMS5iaW5kKHRoaXMsIGxpc3RWaWV3TW9kZSwgdmlzaWJsZUV2ZW50cykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15vXldec150gJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCBfLnNpemUodGhpcy5wcm9wcy5ldmVudHMpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ09QRU4nIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazIuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ek16rXldeXICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgXy5zaXplKHRoaXMuZ2V0T3BlbkV2ZW50cygpKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdDTE9TRUQnIH0pLnRyYW5zZm9ybShmdW5jdGlvbiAocmVzLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIFtdKS5qb2luKCcgJylcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazMuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eh15LXldeoICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgXy5zaXplKHRoaXMuZ2V0Q2xvc2VkRXZlbnRzKCkpLCAnKScpKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmxvYXQtbGVmdCBhZGQtYnRuIGJpZyBoaWRlLWZvci1zbWFsbC1vbmx5JyxcbiAgICAgICAgICAgICAgICAnb25DbGljayc6IG9uQ2xpY2s0LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlLCB2aXNpYmxlRXZlbnRzKVxuICAgICAgICAgICAgfSwgJysnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmxvYXQtbGVmdCBhZGQtYnRuIHNtYWxsIHNob3ctZm9yLXNtYWxsLW9ubHknLFxuICAgICAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazUuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpXG4gICAgICAgICAgICB9LCAnKycpKSxcbiAgICAgICAgICAgIF8ubWFwKHZpc2libGVFdmVudHMsIHJlcGVhdEV2ZW50SXRlbTcuYmluZCh0aGlzLCBsaXN0Vmlld01vZGUsIHZpc2libGVFdmVudHMpKSxcbiAgICAgICAgICAgIHZpc2libGVFdmVudHMubGVuZ3RoID09PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmaWx0ZXItc3RhdHVzJyxcbiAgICAgICAgICAgICAgICAna2V5JzogJzI0MzQnXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtZnJvd24tbycsXG4gICAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XpteY16LXqNeZ150sINec15Ag16DXntem15DXlSDXqNep15XXnteV16og157XqteQ15nXnteV16ouLi4nKSkgOiBudWxsXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblN1Ym1pdDkobGlzdFZpZXdNb2RlLCBldmVudCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50KGV2ZW50KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25SZW1vdmVFdmVudDEwKGxpc3RWaWV3TW9kZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xvc2UxMShsaXN0Vmlld01vZGUpIHtcbiAgICAgICAgdGhpcy5zdG9wRWRpdGluZygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZUxpc3RWaWV3TW9kZTEyKCkge1xuICAgICAgICB2YXIgbGlzdFZpZXdNb2RlID0gIXRoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWQgJiYgIXRoaXMuc3RhdGUuY3JlYXRlTW9kZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC1jZW50ZXJlZCBkYXNoYm9hcmQtcGFnZSBldmVudHMtcGFnZScgfSwgbGlzdFZpZXdNb2RlID8gc2NvcGVWaXNpYmxlRXZlbnRzOC5hcHBseSh0aGlzLCBbbGlzdFZpZXdNb2RlXSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQnIH0sICFsaXN0Vmlld01vZGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50Rm9ybSwge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC11c2VyJyxcbiAgICAgICAgICAgICdldmVudCc6IHRoaXMucHJvcHMuZXZlbnRzW3RoaXMuc3RhdGUuZWRpdGluZ0V2ZW50SWRdLFxuICAgICAgICAgICAgJ29uU3VibWl0Jzogb25TdWJtaXQ5LmJpbmQodGhpcywgbGlzdFZpZXdNb2RlKSxcbiAgICAgICAgICAgICdvblJlbW92ZUV2ZW50Jzogb25SZW1vdmVFdmVudDEwLmJpbmQodGhpcywgbGlzdFZpZXdNb2RlKSxcbiAgICAgICAgICAgICdpc0FkbWluTW9kZSc6IHRoaXMucHJvcHMuYXV0aERhdGEuaXNBZG1pbixcbiAgICAgICAgICAgICdvbkNsb3NlJzogb25DbG9zZTExLmJpbmQodGhpcywgbGlzdFZpZXdNb2RlKVxuICAgICAgICB9KSA6IG51bGwpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlTGlzdFZpZXdNb2RlMTIuYXBwbHkodGhpcywgW10pO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvbGlzdEl0ZW0uc2NzcycpO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0gc21hbGwtMTJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC1pbWFnZVwiIHNyYz17dGhpcy5wcm9wcy5pbWFnZVNyY30vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10aXRsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRpdGxlIGxhcmdlLXRleHQgaGlkZS1mb3ItcHJpbnRcIj57dGhpcy5wcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIHNtYWxsLTEyIHNob3ctZm9yLXNtYWxsLW9ubHlcIj57c3VidGl0bGV9PC9sYWJlbD4pfVxuICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHRoaXMucHJvcHMuc3VidGl0bGVzLCAoc3VidGl0bGUsIGtleSkgPT4gPGxhYmVsIGtleT17J3N1YnRpdGxlLWxhcmdlLScgKyBrZXl9IGNsYXNzTmFtZT1cInN1YnRpdGxlIGlubGluZSBoaWRlLWZvci1zbWFsbC1vbmx5XCI+e3N1YnRpdGxlfTwvbGFiZWw+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuTGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN1YnRpdGxlczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIGltYWdlU3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2s6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RJdGVtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2xpc3RJdGVtLmpzeCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9saXN0SXRlbS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vbGlzdEl0ZW0uc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL2xpc3RJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcbiAgLmxpc3QtaXRlbTpmaXJzdC1jaGlsZCB7XFxuICAgIHBhZGRpbmctdG9wOiAwOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LWltYWdlIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpOyB9XFxuICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnRpdGxlLmxhcmdlLXRleHQge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLmxpc3QtaXRlbSAubGlzdC10aXRsZXMgLnN1YnRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDAuODByZW07IH1cXG4gICAgICAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLCAubGlzdC1pdGVtIC5saXN0LXRpdGxlcyAuc3VidGl0bGUuaW5saW5lLnNob3ctZm9yLXByaW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy9saXN0SXRlbS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vZXZlbnRGb3JtLnJ0JztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBlbXB0eUV2ZW50ID0ge1xuICB0eXBlSWQ6ICcnLFxuICBkYXk6ICcwMScsXG4gIG1vbnRoOiAnMDEnLFxuICB5ZWFyOiAnMjAxNycsXG4gIGhvdXI6ICcxNycsXG4gIG1pbnV0ZTogJzAwJyxcbiAgc3RhdHVzOiBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5DTE9TRUQudmFsdWVcbn07XG5cbmNvbnN0IGV2ZW50Rm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdldmVudEZvcm0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uUmVtb3ZlRXZlbnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGV2ZW50OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGlzQWRtaW5Nb2RlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gXy5kZWZhdWx0cyh0aGlzLnByb3BzLmV2ZW50LCBlbXB0eUV2ZW50LCB7IGRhdGVJbnB1dFN1cHBvcnRlZDogdHJ1ZSwgdGltZUlucHV0U3VwcG9ydGVkOiB0cnVlIH0pO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2hlY2tJZkh0bWw1U3VwcG9ydGVkKCk7XG4gIH0sXG5cbiAgb25DaGFuZ2UoZSwgdmFsaWRhdGlvblR5cGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnbnVtZXJpYycpIHtcbiAgICAgIGlmICghL15bMC05XSokLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRpb25UeXBlID09PSAnaGVicmV3Jykge1xuICAgICAgaWYgKCEvXlvXkC3Xqlxcc10qJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZVxuICAgIH0pO1xuICB9LFxuXG4gIGdldEV2ZW50UGljdHVyZSgpIHtcbiAgICByZXR1cm4gXy5nZXQoQ29uc3RhbnRzLkVWRU5UU19UWVBFUywgW3RoaXMuc3RhdGUudHlwZUlkLCAnc3JjJ10pIHx8IENvbnN0YW50cy5FVkVOVF9ERUZBVUxUX1BJQztcbiAgfSxcblxuICBnZXRUaW1lVmFsdWUoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5zdGF0ZSlcbiAgICAgIC5waWNrKFsnaG91cicsICdtaW51dGUnXSlcbiAgICAgIC5tYXAoKVxuICAgICAgLnZhbHVlKClcbiAgICAgIC5qb2luKCc6Jyk7XG4gIH0sXG5cbiAgb25UaW1lQ2hhbmdlKGUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9zb3J0LWNvbXBcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZS5zcGxpdCgnOicpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob3VyOiB2YWxbMF0sIG1pbnV0ZTogdmFsWzFdIH0pO1xuICB9LFxuXG4gIGdldERhdGVWYWx1ZSgpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnN0YXRlKVxuICAgICAgLnBpY2soWyd5ZWFyJywgJ21vbnRoJywgJ2RheSddKVxuICAgICAgLm1hcCgpXG4gICAgICAudmFsdWUoKVxuICAgICAgLmpvaW4oJy0nKTtcbiAgfSxcblxuICBvbk51bWVyaWNDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gXy50b051bWJlcihlLnRhcmdldC52YWx1ZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfSxcblxuICBjaGVja0lmSHRtbDVTdXBwb3J0ZWQoKSB7XG4gICAgY29uc3Qgc3VwcG9ydGVkSW5wdXRUeXBlcyA9IFsnZGF0ZScsICd0aW1lJ107XG4gICAgY29uc3QgdGVzdFJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHRlc3RTdHJpbmcgPSAndGVzdCEnO1xuXG4gICAgXy5lYWNoKHN1cHBvcnRlZElucHV0VHlwZXMsIChpbnB1dFR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgICBpbnB1dC52YWx1ZSA9IHRlc3RTdHJpbmc7XG4gICAgICBjb25zdCBpc1N1cHBvcnRlZCA9IGlucHV0LnZhbHVlICE9PSB0ZXN0U3RyaW5nO1xuICAgICAgdGVzdFJlc3VsdFtpbnB1dFR5cGUgKyAnSW5wdXRTdXBwb3J0ZWQnXSA9IGlzU3VwcG9ydGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh0ZXN0UmVzdWx0KTtcbiAgfSxcblxuICBvbkRhdGVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCctJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHllYXI6IHZhbFswXSwgbW9udGg6IHZhbFsxXSwgZGF5OiB2YWxbMl0gfSk7XG4gIH0sXG5cbiAgb25Cb29sZWFuQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEJvb2xlYW4oZS50YXJnZXQuY2hlY2tlZCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiB2YWx1ZSB9KTtcbiAgfSxcblxuICBpc0Zvcm1WYWxpZCgpIHtcbiAgICByZXR1cm4gISEodGhpcy5zdGF0ZS50eXBlSWQpO1xuICB9LFxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IGV2ZW50ID0gXy5vbWl0KHRoaXMuc3RhdGUsIFsndGltZUlucHV0U3VwcG9ydGVkJywgJ2RhdGVJbnB1dFN1cHBvcnRlZCddKTtcbiAgICB0aGlzLnByb3BzLm9uU3VibWl0KGV2ZW50KTtcbiAgfSxcblxuICByZW5kZXI6IHRlbXBsYXRlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudEZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi4vZm9ybUZyYW1lJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9ldmVudEZvcm0uc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgRm9ybUZyYW1lLCBDb25zdGFudHMsIGV2ZW50Rm9ybUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDEoc3VwcG9ydGVkSW5wdXRzLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IGV2ZW50SW5kZXhcbiAgICAgICAgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBldmVudC5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFllYXIyKHN1cHBvcnRlZElucHV0cywgeWVhciwgeWVhckluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ3l5LScgKyB5ZWFySW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiAnMjAnICsgeWVhclxuICAgICAgICB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgeWVhciwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdE1vbnRoMyhzdXBwb3J0ZWRJbnB1dHMsIG1vbnRoLCBtb250aEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICdrZXknOiAnbW0tJyArIG1vbnRoSW5kZXggfSwgbW9udGgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXREYXk0KHN1cHBvcnRlZElucHV0cywgZGF5LCBkYXlJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAna2V5JzogJ2RkLScgKyBkYXlJbmRleCB9LCBkYXkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRNaW51dGU1KHN1cHBvcnRlZElucHV0cywgbWludXRlLCBtaW51dGVJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAna2V5JzogJ21pbi0nICsgbWludXRlSW5kZXggfSwgbWludXRlLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0SG91cjYoc3VwcG9ydGVkSW5wdXRzLCBob3VyLCBob3VySW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ2tleSc6ICdoaC0nICsgaG91ckluZGV4IH0sIGhvdXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudFN0YXR1czcoc3VwcG9ydGVkSW5wdXRzLCBldmVudFN0YXR1cywgZXZlbnRTdGF0dXNJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBldmVudFN0YXR1cy52YWx1ZSB9LCBldmVudFN0YXR1cy5uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVTdXBwb3J0ZWRJbnB1dHM4KCkge1xuICAgICAgICB2YXIgc3VwcG9ydGVkSW5wdXRzID0gdGhpcy5zdGF0ZS5kYXRlSW5wdXRTdXBwb3J0ZWQgJiYgdGhpcy5zdGF0ZS50aW1lSW5wdXRTdXBwb3J0ZWQ7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZXZlbnQtZm9ybSBsYXJnZS0xMSBsYXJnZS1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3JvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTkgbGFyZ2UtMTAgbGFyZ2UtY29sbGFwc2UgY29sdW1ucycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9ep150g15TXkNeZ16jXldeiXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUudHlwZUlkLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAndHlwZUlkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdzdHlsZSc6IHsgZGlzcGxheTogJ25vbmUnIH1cbiAgICAgICAgICAgIH0sICfXkdeX16gnKSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5FVkVOVFNfVFlQRVMsIHJlcGVhdEV2ZW50MS5iaW5kKHRoaXMsIHN1cHBvcnRlZElucHV0cykpXG4gICAgICAgIF0pKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdmbG9hdC1sZWZ0JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2V2ZW50LXBpYycsXG4gICAgICAgICAgICAnc3JjJzogdGhpcy5nZXRFdmVudFBpY3R1cmUoKVxuICAgICAgICB9KSkpLCAhc3VwcG9ydGVkSW5wdXRzID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdyb3cgc21hbGwtZXhwYW5kZWQgc21hbGwtY2VudGVyZWQnLFxuICAgICAgICAgICAgJ2tleSc6ICd1bnN1cHBvcnRlZC1kcm9wZG93bnMnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC00IG1lZGl1bS0yIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqteQ16jXmdeaJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS55ZWFyLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAneWVhcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuREFURV9USU1FX0RBVEEueWVhcnMsIHJlcGVhdFllYXIyLmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNCBtZWRpdW0tMiBjb2x1bW5zIG1vcmUtc3BhY2UnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5tb250aCxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ21vbnRoJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS5tb250aHMsIHJlcGVhdE1vbnRoMy5iaW5kKHRoaXMsIHN1cHBvcnRlZElucHV0cykpXG4gICAgICAgIF0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTQgbWVkaXVtLTIgY29sdW1ucyBtb3JlLXNwYWNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZGF5LFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnZGF5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdxcVxcbiAgICAgICAgICAgICAgICAgICAgJyxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5EQVRFX1RJTUVfREFUQS5kYXlzLCByZXBlYXREYXk0LmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtMyBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXoteUJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5taW51dGUsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdtaW51dGUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoQ29uc3RhbnRzLkRBVEVfVElNRV9EQVRBLm1pbnV0ZXMsIHJlcGVhdE1pbnV0ZTUuYmluZCh0aGlzLCBzdXBwb3J0ZWRJbnB1dHMpKVxuICAgICAgICBdKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzbWFsbC0zIGNvbHVtbnMgbW9yZS1zcGFjZSBlbmQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5ob3VyLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAnaG91cidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuREFURV9USU1FX0RBVEEuaG91cnMsIHJlcGVhdEhvdXI2LmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpKSA6IG51bGwsIHN1cHBvcnRlZElucHV0cyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAncm93JyxcbiAgICAgICAgICAgICdrZXknOiAnc3VwcG9ydGVkLWlucHV0cydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTcgbGFyZ2UtNSBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16rXkNeo15nXmlxcbiAgICAgICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAndHlwZSc6ICdkYXRlJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuZ2V0RGF0ZVZhbHVlKCksXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uRGF0ZUNoYW5nZSxcbiAgICAgICAgICAgICdtaW4nOiAnMjAxNi0wMS0wMScsXG4gICAgICAgICAgICAnbWF4JzogJzIwMTctMTItMzEnLFxuICAgICAgICAgICAgJ25hbWUnOiAnZGF0ZSdcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTUgbGFyZ2UtMyBjb2x1bW5zJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXoteUXFxuICAgICAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ3RpbWUnLFxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5nZXRUaW1lVmFsdWUoKSxcbiAgICAgICAgICAgICdzdGVwJzogMzAwLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vblRpbWVDaGFuZ2VcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2xhcmdlLTQgbWVkaXVtLTEyIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICcg16HXmNeY15XXoVxcbiAgICAgICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ3N0YXR1cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcChDb25zdGFudHMuRVZFTlRTX1NUQVRVUywgcmVwZWF0RXZlbnRTdGF0dXM3LmJpbmQodGhpcywgc3VwcG9ydGVkSW5wdXRzKSlcbiAgICAgICAgXSkpKSkgOiBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUZyYW1lLCB7XG4gICAgICAgICAgICAndGl0bGUnOiAn16LXqNeZ15vXqiDXkNeZ16jXldeiJyxcbiAgICAgICAgICAgICdvblN1Ym1pdCc6IHRoaXMub25TdWJtaXQsXG4gICAgICAgICAgICAnb25SZW1vdmUnOiB0aGlzLnByb3BzLm9uUmVtb3ZlRXZlbnQsXG4gICAgICAgICAgICAnb25DbG9zZSc6IHRoaXMucHJvcHMub25DbG9zZSxcbiAgICAgICAgICAgICdkaXNhYmxlZCc6ICF0aGlzLmlzRm9ybVZhbGlkKClcbiAgICAgICAgfSwgc2NvcGVTdXBwb3J0ZWRJbnB1dHM4LmFwcGx5KHRoaXMsIFtdKSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5ydFxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvZm9ybUZyYW1lLnNjc3MnKTtcblxuY29uc3QgZm9ybUZyYW1lVHJhbnNsYXRpb25zID0gcmVxdWlyZSgnLi4vdXRpbHMvdHJhbnNsYXRpb25zL2Zvcm1GcmFtZVRyYW5zbGF0aW9ucycpO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIodGl0bGUsIG9uQ2xvc2UpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJhY2tCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJhY2stYnRuXCIga2V5PVwiYmFjay1idG5cIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj57dGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKG9uQ2xvc2UpID8gY3JlYXRlQmFja0J1dHRvbigpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbnNCdXR0b25zKGRpc2FibGVkLCBvblN1Ym1pdCwgb25SZW1vdmUpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGtleT1cInJlbW92ZS1idG5cIiBvbkNsaWNrPXtvblJlbW92ZX0gY2xhc3NOYW1lPVwiYnV0dG9uIGFsZXJ0IG1vcmUtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IGZvcm1GcmFtZVRyYW5zbGF0aW9ucy5SRU1PVkUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24tYnV0dG9ucyBidXR0b24tZ3JvdXAgc3RhY2tlZCBzbWFsbC1jZW50ZXJlZCBsYXJnZS02IHNtYWxsLTggXCI+XG4gICAgICAgICAgICA8YSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e29uU3VibWl0fSBjbGFzc05hbWU9XCJidXR0b24gc3VjY2VzcyBtb3JlLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyBmb3JtRnJhbWVUcmFuc2xhdGlvbnMuU1VCTUlUIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgeyBfLmlzRnVuY3Rpb24ob25SZW1vdmUpID8gY3JlYXRlUmVtb3ZlQnV0dG9uKCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgRm9ybUZyYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZnJhbWVcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUhlYWRlcih0aGlzLnByb3BzLnRpdGxlLCB0aGlzLnByb3BzLm9uQ2xvc2UpIH1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsgY3JlYXRlQWN0aW9uc0J1dHRvbnModGhpcy5wcm9wcy5kaXNhYmxlZCwgdGhpcy5wcm9wcy5vblN1Ym1pdCwgdGhpcy5wcm9wcy5vblJlbW92ZSkgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcbn1cblxuRm9ybUZyYW1lLnByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBvblN1Ym1pdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblJlbW92ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUZyYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2Zvcm1GcmFtZS5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm1GcmFtZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZm9ybUZyYW1lLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy9mb3JtRnJhbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1mcmFtZSAuY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLmZvcm0tZnJhbWUgLmFjdGlvbi1idXR0b25zIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIC5mb3JtLWZyYW1lIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL2Zvcm1GcmFtZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgU1VCTUlUOiAn16nXnteV16gnLFxuICBSRU1PVkU6ICfXnteX16cnXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3RyYW5zbGF0aW9ucy9mb3JtRnJhbWVUcmFuc2xhdGlvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVJST1JTOiB7XG4gICAgR0VORVJBTDogJ9ep15LXmdeQ15Qg15HXntei16jXm9eqJyxcbiAgICBJTlZBTElEX01BSUw6ICfXkNeZ157XmdeZ15wg15zXkCDXqten15nXny4nLFxuICAgIFdFQUtfUEFTU1dPUkQ6ICfXlNeh15nXodee15Ag16bXqNeZ15vXlCDXnNeU15vXmdecINec16TXl9eV16ogNiDXqteV15XXmdedLicsXG4gICAgRU1BSUxfSU5fVVNFOiAn15DXmdee15nXmdecINeR16nXmdee15XXqS4g15DXoNeQINeR15fXqCDXk9eo15og15TXqteX15HXqNeV16og15DXl9eo16ouJyxcbiAgICBXUk9OR19QQVNTV09SRDogJ9eh15nXodee15Ag15zXkCDXoNeb15XXoNeULicsXG4gICAgTk9UX1NBTUVfUEFTU1dPUkQ6ICfXodeZ16HXnteQ15XXqiDXpteo15nXm9eV16og15zXlNeZ15XXqiDXlteU15XXqi4nLFxuICAgIFVTRVJfTk9UX0ZPVU5EOiAn15vXqteV15HXqiDXlNeQ15nXmdee15nXnCDXnNeQINeg157XpteQ15QuJ1xuICB9LFxuXG4gIERBVEVfVElNRV9EQVRBOiB7XG4gICAgZGF5czogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMicsICcxMycsICcxNCcsICcxNScsICcxNicsICcxNycsICcxOCcsICcxOScsICcyMCcsICcyMScsICcyMicsICcyMycsICcyNCcsICcyNScsICcyNicsICcyNycsICcyOCcsICcyOScsICczMCcsICczMSddLFxuICAgIG1vbnRoczogWycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddLFxuICAgIHllYXJzOiBbJzE2JywgJzE3J10sXG4gICAgaG91cnM6IFsnMDAnLCAnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnXSxcbiAgICBtaW51dGVzOiBbJzAwJywgJzA1JywgJzEwJywgJzE1JywgJzIwJywgJzI1JywgJzMwJywgJzM1JywgJzQwJywgJzQ1JywgJzUwJywgJzU1J11cbiAgfSxcblxuICBFVkVOVF9ERUZBVUxUX1BJQzogJ2h0dHA6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEyNC8xMjQxNTAuc3ZnJyxcbiAgRVZFTlRTX1RZUEVTOiB7XG4gICAgJ2hhcG9lbC10bHYnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYXBvZWx0YS5wbmcnLFxuICAgICAgbmFtZTogJ9eU16TXldei15wg16rXnCDXkNeR15nXkSdcbiAgICB9LFxuICAgICdtYWNjYWJpLXRsdic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX21hY2NhYmkucG5nJyxcbiAgICAgIG5hbWU6ICfXnteb15HXmSDXqtecINeQ15HXmdeRJ1xuICAgIH0sXG4gICAgJ2hlcnplbGl5YSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3NoYXJvbi5wbmcnLFxuICAgICAgbmFtZTogJ9eR16DXmSDXlNeo16bXnNeZ15QnXG4gICAgfSxcbiAgICAna2lyeWF0LWdhdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL0ltYWdlcy90ZWFtcy9iaWdHYXQucG5nJyxcbiAgICAgIG5hbWU6ICfXnteb15HXmSDXp9eo15nXqiDXkteqJ1xuICAgIH0sXG4gICAgJ2dpbGJvYSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX0dhbGlsLnBuZycsXG4gICAgICBuYW1lOiAn15LXnNeZ15wv15LXnNeR15XXoidcbiAgICB9LFxuICAgICduYWhhcml5YSc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX25haGFyaWEucG5nJyxcbiAgICAgIG5hbWU6ICfXoteZ16jXldeg15kg16DXlNeo15nXlCdcbiAgICB9LFxuICAgICdob2xvbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9hcnRpY2xlcy9sb2dvX2hoLnBuZycsXG4gICAgICBuYW1lOiAn15TXpNeV16LXnCDXl9eV15zXldefJ1xuICAgIH0sXG4gICAgJ2FzaGRvZCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2FzaGRvZC5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeQ16nXk9eV15MnXG4gICAgfSxcbiAgICAnaGFpZmEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYWlmYS5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeX15nXpNeUJ1xuICAgIH0sXG4gICAgJ3Jpc2hvbic6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3Jpc2hvbi5wbmcnLFxuICAgICAgbmFtZTogJ9ee15vXkdeZINeo15DXqdeV158g15zXpteZ15XXnydcbiAgICB9LFxuICAgICdlaWxhdCc6IHtcbiAgICAgIHNyYzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2VpbGF0LnBuZycsXG4gICAgICBuYW1lOiAn15TXpNeV16LXnCDXkNeZ15zXqidcbiAgICB9LFxuICAgICdsanVibGphbmEnOiB7XG4gICAgICBzcmM6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi84LzhlL1VuaW9uX29saW1waWphLnBuZy8xNDBweC1Vbmlvbl9vbGltcGlqYS5wbmcnLFxuICAgICAgbmFtZTogJ9ec15XXkdec15nXkNeg15QnXG4gICAgfSxcbiAgICAndmFsZW5jaWEnOiB7XG4gICAgICBzcmM6ICdodHRwOi8vc2FtdmFucm9zc29tLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8xMC92YWxlbmNpYS1iYXNrZXQxLWxvZ28uanBnJyxcbiAgICAgIG5hbWU6ICfXldec16DXodeZ15QnXG4gICAgfSxcbiAgICAna3ViYW4nOiB7XG4gICAgICBzcmM6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi8wLzA0L0xva29tb3Rpdl9LdWJhbl9sb2dvLnBuZy8yMDBweC1Mb2tvbW90aXZfS3ViYW5fbG9nby5wbmcnLFxuICAgICAgbmFtZTogJ9ec15XXp9eV157XldeY15nXkSDXp9eV15HXkNefJ1xuICAgIH0sXG4gICAgJ2Z1ZW5sYWJyYWRhJzoge1xuICAgICAgc3JjOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xMy9CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnLzExMHB4LUJhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcnLFxuICAgICAgbmFtZTogJ9ek15XXkNeg15zXkdeo15PXlCdcbiAgICB9LFxuICAgICd1bG0nOiB7XG4gICAgICBzcmM6ICdodHRwOi8vbmFjaHd1Y2hzLmJidTAxLmNvbS9tb2R1bGVzL21vZF9iYnVuZXdzZmxhc2gvYXNzZXRzL2ltYWdlcy9ub2ltYWdlX3RodW1iLmpwZycsXG4gICAgICBuYW1lOiAn15DXldec150nXG4gICAgfSxcbiAgICAndmlsbmEnOiB7XG4gICAgICBzcmM6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi83Lzc1L0JDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLzkwN3B4LUJDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLnBuZycsXG4gICAgICBuYW1lOiAn16jXmdeY15DXoSDXldeZ15zXoNeUJ1xuICAgIH0sXG4gICAgJ25vdmdvcm9kJzoge1xuICAgICAgc3JjOiAnaHR0cDovL29seW1waWFrb3MtbGl2ZS5nci9pbWcvdGVhbXMvTml6aG55JTIwTm92Z29yb2QucG5nJyxcbiAgICAgIG5hbWU6ICfXoNeZ15bXs9eg15knXG4gICAgfSxcbiAgICAnemVuaXQnOiB7XG4gICAgICBzcmM6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjUvRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcvMjIwcHgtRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcnLFxuICAgICAgbmFtZTogJ9eW16DXmdeYJ1xuICAgIH1cbiAgfSxcbiAgU1RBVElPTlM6IHtcbiAgICBtb2RpaW46ICfXnteV15PXmdei15nXnycsXG4gICAgdGx2OiAn16rXnCDXkNeR15nXkSdcbiAgfSxcbiAgTUFYX1NFQVNPTl9USUNLRVRTOiA3LFxuICBNQVhfRVhUUkFfUEFTU0VOR0VSUzogNCxcbiAgUEhPTkVfUFJFRklYRVM6IFsnMDUwJywgJzA1MicsICcwNTMnLCAnMDU0JywgJzA1NScsICcwNTcnLCAnMDU4J10sXG4gIFBBR0VTOiB7XG4gICAgSE9NRToge3ZhbDogJ2hvbWUnLCBuYW1lOiAn15PXoyDXlNeR15nXqicsIHZpc2libGU6IHRydWV9LFxuICAgIEFVVEg6IHt2YWw6ICdhdXRoJywgbmFtZTogJyd9LFxuICAgIFVTRVJTOiB7dmFsOiAndXNlcnMnLCBuYW1lOiAn157Xqdeq157XqdeZ150nLCB2aXNpYmxlOiB0cnVlfSxcbiAgICBFVkVOVFM6IHt2YWw6ICdldmVudHMnLCBuYW1lOiAn15DXmdeo15XXoteZ150nLCB2aXNpYmxlOiB0cnVlfSxcbiAgICBCT09LSU5HUzoge3ZhbDogJ2Jvb2tpbmdzJywgbmFtZTogJ9eo16nXldee15nXnSDXnNeU16HXoteV16onLCB2aXNpYmxlOiB0cnVlfSxcbiAgICBESVNUUklCVVRJT046IHt2YWw6ICdkaXN0cmlidXRpb24nLCBuYW1lOiAn157XmdeZ15zXmdedJywgdmlzaWJsZTogdHJ1ZX0sXG4gICAgRURJVF9VU0VSX0lORk86IHt2YWw6ICdlZGl0VXNlckluZm8nLCBuYW1lOiAnJ31cbiAgfSxcbiAgRVZFTlRTX1NUQVRVUzoge1xuICAgIENMT1NFRDoge1xuICAgICAgdmFsdWU6ICdjbG9zZWQnLFxuICAgICAgbmFtZTogJ9eU15TXqNep157XlCDXodeS15XXqNeUJ1xuICAgIH0sXG4gICAgT1BFTl9GT1JfTUVNQkVSUzoge1xuICAgICAgdmFsdWU6ICdvcGVuRm9yTWVtYmVycycsXG4gICAgICBuYW1lOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXnteg15XXmdeZINeU16HXoteV16onXG4gICAgfSxcbiAgICBPUEVOX0ZPUl9BTEw6IHtcbiAgICAgIHZhbHVlOiAnb3BlbkZvckFsbCcsXG4gICAgICBuYW1lOiAn15TXlNeo16nXnteUINek16rXldeX15Qg15zXm9eV15zXnSdcbiAgICB9LFxuICAgIEZVTExZX0JPT0tFRDoge1xuICAgICAgdmFsdWU6ICdmdWxseUJvb2tlZCcsXG4gICAgICBuYW1lOiAn15TXlNeh16LXlCDXntec15DXlCdcbiAgICB9XG4gIH0sXG4gIERJU1RSSUJVVElPTjoge1xuICAgIFJFQ0lQSUVOVFM6IHtcbiAgICAgIEFMTDoge1xuICAgICAgICB2YWx1ZTogJ2FsbFVzZXJzJyxcbiAgICAgICAgbmFtZTogJ9eb15zXnCDXlNee16nXqtee16nXmdedJ1xuICAgICAgfSxcbiAgICAgIE1FTUJFUlNfT05MWToge1xuICAgICAgICB2YWx1ZTogJ21lbWJlcnNPbmx5JyxcbiAgICAgICAgbmFtZTogJ9ee16DXldeZ15nXnSDXkdec15HXkydcbiAgICAgIH0sXG4gICAgICBCT09LRURfVE9fRVZFTlQ6IHtcbiAgICAgICAgdmFsdWU6ICdib29rZWRUb0V2ZW50JyxcbiAgICAgICAgbmFtZTogJ9eo16nXldee15nXnSDXnNeU16HXoteUJ1xuICAgICAgfVxuICAgIH0sXG4gICAgTUVUSE9EUzoge1xuICAgICAgRU1BSUw6ICdlbWFpbCcsXG4gICAgICBTTVM6ICdzbXMnXG4gICAgfSxcbiAgICBUWVBFUzoge1xuICAgICAgVEVNUExBVEU6ICd0ZW1wbGF0ZScsXG4gICAgICBDVVNUT006ICdjdXN0b20nXG4gICAgfSxcbiAgICBURU1QTEFURVM6IHtcbiAgICAgIEVWRU5UX09QRU5fRk9SX01FTUJFUlM6IHtcbiAgICAgICAgaWQ6ICc0ZmFiNmI5Mi1iZjYxLTQ4ZjEtYjEzYi1iYzcwMmVkNzg2OTUnLFxuICAgICAgICBuYW1lOiAn16TXqteZ15fXqiDXlNeo16nXnteUINec157XoNeV15nXmdedJ1xuICAgICAgfSxcbiAgICAgIEVWRU5UX09QRU5fRk9SX0FMTDoge1xuICAgICAgICBpZDogJ2RiZTNlMGU0LWJiMGUtNDFhZC1iZjEyLTViZTY0YTMwZjNiNycsXG4gICAgICAgIG5hbWU6ICfXpNeq15nXl9eqINeU16jXqdee15Qg15zXm9eV15zXnSdcbiAgICAgIH0sXG4gICAgICBDSEFOR0VfRVZFTlRfREVUQUlMUzoge1xuICAgICAgICBpZDogJzE3MGZjZDRmLWRmMmUtNDRkZC1iNzYwLTY5M2QwNGZkZDA3YycsXG4gICAgICAgIG5hbWU6ICfXqdeZ16DXldeZINeR157Xldei15Mg15TXkNeZ16jXldeiJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jb25zdGFudHMuanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50Rm9ybS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50Rm9ybS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRGb3JtLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvZXZlbnRGb3JtL2V2ZW50Rm9ybS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudC1mb3JtIC5ldmVudC1waWMge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2V2ZW50Rm9ybS9ldmVudEZvcm0uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudHNQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRzUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZXZlbnRzUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50c1BhZ2UvZXZlbnRzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudHMtcGFnZSAuZmlsdGVyaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9ldmVudHNQYWdlL2V2ZW50c1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBFVkVOVFNfUkVDRUlWRUQsIEVWRU5UX1JFTU9WRUQgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcblxuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgbG9hZGluZ0FjdGlvbnMgZnJvbSAnLi9sb2FkaW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi9lcnJvckFjdGlvbnMnO1xuXG5jb25zdCBFVkVOVF9LRVlTID0gWyd0eXBlSWQnLCAnZGF5JywgJ21vbnRoJywgJ3llYXInLCAnaG91cicsICdtaW51dGUnLCAnc3RhdHVzJ107XG5jb25zdCBFVkVOVFNfUEFUSCA9ICdldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZXZlbnRSZW1vdmVkID0gZXZlbnRJZCA9PiAoe1xuICB0eXBlOiBFVkVOVF9SRU1PVkVELFxuICBldmVudElkXG59KTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50c1JlY2VpdmVkID0gZXZlbnRzID0+ICh7XG4gIHR5cGU6IEVWRU5UU19SRUNFSVZFRCxcbiAgZXZlbnRzXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXZlbnRzID0gKCkgPT4gZGlzcGF0Y2ggPT5cbiAgY2xpZW50REIucmVhZChFVkVOVFNfUEFUSClcbiAgICAudGhlbihldmVudHMgPT4ge1xuICAgICAgaWYgKGV2ZW50cykge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoZXZlbnRzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV2ZW50ID0gZXZlbnQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goRVZFTlRTX1BBVEgsIGV2ZW50KVxuICAgIC50aGVuKGV2ZW50SWQgPT4gZGlzcGF0Y2goZXZlbnRzUmVjZWl2ZWQoeyBbZXZlbnRJZF06IGV2ZW50IH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFdmVudCA9IChldmVudElkLCBldmVudCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgZXZlbnRUb1VwZGF0ZSA9IF8ucGljayhldmVudCwgRVZFTlRfS0VZUyk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnVwZGF0ZSgnZXZlbnRzLycgKyBldmVudElkLCBldmVudFRvVXBkYXRlKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGV2ZW50c1JlY2VpdmVkKHsgW2V2ZW50SWRdOiBldmVudFRvVXBkYXRlIH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFdmVudCA9IGV2ZW50SWQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnJlbW92ZShgJHtFVkVOVFNfUEFUSH0vJHtldmVudElkfWApXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goZXZlbnRSZW1vdmVkKGV2ZW50SWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvZXZlbnRBY3Rpb25zLmpzIiwiZXhwb3J0IGNvbnN0IFNUQVJUX0xPQURJTkcgPSAnU1RBUlRfTE9BRElORyc7XG5leHBvcnQgY29uc3QgU1RPUF9MT0FESU5HID0gJ1NUT1BfTE9BRElORyc7XG5cbmV4cG9ydCBjb25zdCBSRVBPUlRfRVJST1IgPSAnUkVQT1JUX0VSUk9SJztcblxuZXhwb3J0IGNvbnN0IFNFVF9BVVRIX0RBVEEgPSAnU0VUX0FVVEhfREFUQSc7XG5leHBvcnQgY29uc3QgU0lHTl9PVVQgPSAnU0lHTl9PVVQnO1xuXG5leHBvcnQgY29uc3QgVVNFUlNfUkVDRUlWRUQgPSAnVVNFUlNfUkVDRUlWRUQnO1xuZXhwb3J0IGNvbnN0IFVTRVJfUkVNT1ZFRCA9ICdVU0VSX1JFTU9WRUQnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRTX1JFQ0VJVkVEID0gJ0VWRU5UU19SRUNFSVZFRCc7XG5leHBvcnQgY29uc3QgRVZFTlRfUkVNT1ZFRCA9ICdFVkVOVF9SRU1PVkVEJztcblxuZXhwb3J0IGNvbnN0IEJPT0tJTkdTX1JFQ0VJVkVEID0gJ0JPT0tJTkdTX1JFQ0VJVkVEJztcbmV4cG9ydCBjb25zdCBCT09LSU5HX0NBTkNFTEVEID0gJ0JPT0tJTkdfQ0FOQ0VMRUQnO1xuXG5leHBvcnQgY29uc3QgTkFWSUdBVEVfVE8gPSAnTkFWSUdBVEVfVE8nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvblR5cGVzLmpzIiwiaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCB7IFByb21pc2UgfSBmcm9tICdibHVlYmlyZCc7XG5cbmlmIChmaXJlYmFzZS5hcHBzLmxlbmd0aCA9PT0gMCkge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZy5maXJlYmFzZSk7XG59IGVsc2Uge1xuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZy5maXJlYmFzZSwgJ0NsaWVudEZpcmViYXNlJyk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRJbiA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnNldChkYXRhKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHJlYWQgPSBwYXRoID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkub25jZSgndmFsdWUnKVxuICAgIC50aGVuKHNuYXBzaG90ID0+IHJlc29sdmUoc25hcHNob3QudmFsKCkpKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBwdXNoID0gKHBhdGgsIGRhdGEpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc3QgdW5pcXVlS2V5ID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYocGF0aCkucHVzaCgpLmtleTtcbiAgc2V0SW4ocGF0aCArICcvJyArIHVuaXF1ZUtleSwgZGF0YSlcbiAgICAudGhlbigoKSA9PiByZXNvbHZlKHVuaXF1ZUtleSkpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZSA9IChwYXRoLCBkYXRhKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKHBhdGgpLnVwZGF0ZShkYXRhKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IHBhdGggPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihwYXRoKS5yZW1vdmUoKVxuICAgIC50aGVuKHJlc29sdmUpXG4gICAgLmNhdGNoKHJlamVjdCk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEdvb2dsZSA9ICgpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKVxuICAgIC50aGVuKHJlc29sdmUpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhGYWNlYm9vayA9ICgpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XG4gIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUmVkaXJlY3QocHJvdmlkZXIpXG4gICAgLnRoZW4ocmVzb2x2ZSk7XG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IGVtYWlsID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgZmlyZWJhc2UuYXV0aCgpLnNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbihyZXNvbHZlKVxuICAgIC5jYXRjaChyZWplY3QpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduT3V0ID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpXG4gICAgLnRoZW4ocmVzb2x2ZSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9nZ2VkSW5Vc2VyID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBmaXJlYmFzZS5hdXRoKCkuZ2V0UmVkaXJlY3RSZXN1bHQoKVxuICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0LnVzZXIpIHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQudXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvbkF1dGhTdGF0ZUNoYW5nZSA9IHVzZXIgPT4ge1xuICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5yZW1vdmVBdXRoVG9rZW5MaXN0ZW5lcihvbkF1dGhTdGF0ZUNoYW5nZSk7XG4gICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcbiAgICAgICAgfTtcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChvbkF1dGhTdGF0ZUNoYW5nZSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2gocmVqZWN0KTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jbGllbnREQi5qcyIsImxldCBjb25maWcgPSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcucHJvZC5qc29uJyk7XG4gIGNvbnNvbGUubG9nKCd1c2luZyBwcm9kdWN0aW9uIGNvbmZpZ3VyYXRpb24nKTtcbn0gZWxzZSB7XG4gIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnLmRldi5qc29uJyk7XG4gIGNvbnNvbGUubG9nKCd1c2luZyBkZXZlbG9wbWVudCBjb25maWd1cmF0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uZmlnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWcvY29uZmlnLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZmlyZWJhc2VcIjoge1xuXHRcdFwiYXBpS2V5XCI6IFwiQUl6YVN5REVJU1YyYU1pZVBrdWVDd2xEUjhDVmc3aF9CTGEzSm9jXCIsXG5cdFx0XCJhdXRoRG9tYWluXCI6IFwiaGFwb2VsYnVzLWIyNWQ0LmZpcmViYXNlYXBwLmNvbVwiLFxuXHRcdFwiZGF0YWJhc2VVUkxcIjogXCJodHRwczovL2hhcG9lbGJ1cy1iMjVkNC5maXJlYmFzZWlvLmNvbVwiLFxuXHRcdFwic3RvcmFnZUJ1Y2tldFwiOiBcImhhcG9lbGJ1cy1iMjVkNC5hcHBzcG90LmNvbVwiXG5cdH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29uZmlnL2NvbmZpZy5wcm9kLmpzb25cbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZmlyZWJhc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmaXJlYmFzZVwiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJQcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFNUQVJUX0xPQURJTkcsIFNUT1BfTE9BRElORyB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4gKHtcbiAgdHlwZTogU1RBUlRfTE9BRElOR1xufSk7XG5cbmV4cG9ydCBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+ICh7XG4gIHR5cGU6IFNUT1BfTE9BRElOR1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvbG9hZGluZ0FjdGlvbnMuanMiLCJpbXBvcnQgeyBSRVBPUlRfRVJST1IgfSBmcm9tICcuL2FjdGlvblR5cGVzJztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgcmVwb3J0RXJyb3IgPSAobWVzc2FnZSA9IENvbnN0YW50cy5FUlJPUlMuR0VORVJBTCkgPT4gKHtcbiAgdHlwZTogUkVQT1JUX0VSUk9SLFxuICBtZXNzYWdlXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9lcnJvckFjdGlvbnMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcbmNvbnN0IGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnJlcXVpcmUoJy4uL3N0eWxlcy9zcGlubmVyLnNjc3MnKTtcblxuY29uc3QgTG9nbyA9IHJlcXVpcmUoJy4vbG9nby5qc3gnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9hZGluZzogc3RhdGUubG9hZGluZ1xuICAgIH07XG59XG5cbmNsYXNzIFNwaW5uZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheUNsYXNzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBvdmVybGF5OiB0cnVlLFxuICAgICAgICAgICAgaGlkZTogIXRoaXMucHJvcHMuaXNMb2FkaW5nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSBvcGFjaXR5PXswLjd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5jZTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3VuY2UyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91bmNlM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5TcGlubmVyLlByb3BUeXBlcyA9IHtcbiAgICBpc0xvYWRpbmc6IFJlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNwaW5uZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3NwaW5uZXIuanN4IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9zcGlubmVyLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vc3Bpbm5lci5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvc3Bpbm5lci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxMDAwOyB9XFxuICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIge1xcbiAgICBtYXJnaW46IDE1MHB4IGF1dG8gMDtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIC5sb2dvIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgICAuc3Bpbm5lci1jb250YWluZXIgLm92ZXJsYXkgLnNwaW5uZXIgPiBkaXYge1xcbiAgICAgIHdpZHRoOiAxMnB4O1xcbiAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICBtYXJnaW46IDAgMnB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XFxuICAgICAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7IH1cXG4gICAgLnNwaW5uZXItY29udGFpbmVyIC5vdmVybGF5IC5zcGlubmVyIC5ib3VuY2UxIHtcXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzOyB9XFxuICAgIC5zcGlubmVyLWNvbnRhaW5lciAub3ZlcmxheSAuc3Bpbm5lciAuYm91bmNlMiB7XFxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2czsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XFxuICAwJSwgODAlLCAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApOyB9XFxuICA0MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgc2stYm91bmNlZGVsYXkge1xcbiAgMCUsIDgwJSwgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxcbiAgNDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvc3R5bGVzL3NwaW5uZXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jbGFzcyBMb2dvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmcgd2lkdGg9e3RoaXMucHJvcHMud2lkdGggKyAncHQnfSBoZWlnaHQ9e3RoaXMucHJvcHMud2lkdGggKyAncHQnfSBvcGFjaXR5PXt0aGlzLnByb3BzLm9wYWNpdHl9IHZpZXdCb3g9XCIwIDAgNDAwIDQwMFwiPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDAuMDAgMC4wMCBMIDE5NS4zMyAwLjAwIEMgMTcxLjQ2IDEuMTQgMTQ3LjU4IDUuNDIgMTI1LjQzIDE0LjYwIEMgNzAuODggMzYuMzEgMjcuMTAgODMuMzMgOS41NyAxMzkuNDAgQyAzLjc0IDE1Ny40NSAxLjE2IDE3Ni4zNyAwLjAwIDE5NS4yNSBMIDAuMDAgMC4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTUuMzMgMC4wMCBMIDIwNy41MiAwLjAwIEMgMjE2LjcxIDEuMTkgMjI2LjAyIDEuMzUgMjM1LjExIDMuMjIgQyAyNjkuMzAgOS4xNiAzMDEuNzggMjQuMzcgMzI4LjM3IDQ2LjY1IEMgMzY1Ljk5IDc3LjkxIDM5MS42NiAxMjMuNDIgMzk4LjA5IDE3MS45OSBDIDM5OS4wNCAxNzguNzUgMzk5LjU2IDE4NS41NiA0MDAuMDAgMTkyLjM3IEwgNDAwLjAwIDIwOC43MyBDIDM5OC41NyAyMzMuODYgMzkzLjI5IDI1OC45MCAzODIuODAgMjgxLjg2IEMgMzU4LjgyIDMzNS42OCAzMDkuOTUgMzc3LjgzIDI1Mi45OSAzOTMuMTEgQyAyMzkuMDggMzk3LjEwIDIyNC42OCAzOTguODkgMjEwLjI5IDQwMC4wMCBMIDE5MS4zNiA0MDAuMDAgQyAxNjYuMTcgMzk4Ljc2IDE0MS4xMyAzOTMuMTQgMTE4LjE2IDM4Mi42NCBDIDY3LjQwIDM1OS43NiAyNi44MSAzMTUuMDUgOS44OSAyNjEuOTAgQyAzLjk3IDI0NC4zMyAxLjYyIDIyNS44NSAwLjAwIDIwNy40NiBMIDAuMDAgMTk1LjI1IEMgMS4xNiAxNzYuMzcgMy43NCAxNTcuNDUgOS41NyAxMzkuNDAgQyAyNy4xMCA4My4zMyA3MC44OCAzNi4zMSAxMjUuNDMgMTQuNjAgQyAxNDcuNTggNS40MiAxNzEuNDYgMS4xNCAxOTUuMzMgMC4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMDcuNTIgMC4wMCBMIDQwMC4wMCAwLjAwIEwgNDAwLjAwIDE5Mi4zNyBDIDM5OS41NiAxODUuNTYgMzk5LjA0IDE3OC43NSAzOTguMDkgMTcxLjk5IEMgMzkxLjY2IDEyMy40MiAzNjUuOTkgNzcuOTEgMzI4LjM3IDQ2LjY1IEMgMzAxLjc4IDI0LjM3IDI2OS4zMCA5LjE2IDIzNS4xMSAzLjIyIEMgMjI2LjAyIDEuMzUgMjE2LjcxIDEuMTkgMjA3LjUyIDAuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTkyLjExIDguMTMgQyAyMjIuMzUgNi44MCAyNTIuOTUgMTIuNzQgMjgwLjQyIDI1LjUwIEMgMzI3LjA0IDQ2LjcyIDM2NC4zNSA4Ny4zOSAzODEuMzEgMTM1Ljc1IEMgMzk4LjQwIDE4My4xNyAzOTUuNjUgMjM3LjMzIDM3My43NyAyODIuNzQgQyAzNTYuMjMgMzE5LjgzIDMyNi4zMyAzNTAuOTcgMjkwLjA0IDM3MC4wOSBDIDI0My45MiAzOTQuODIgMTg3LjUyIDM5OS4yMiAxMzguMDcgMzgyLjExIEMgOTUuMzggMzY3LjY1IDU4LjE0IDMzNy42MCAzNS4yMSAyOTguNzYgQyAxNC42NSAyNjQuOTIgNS4zNCAyMjQuNDYgOC41NCAxODUuMDMgQyAxMC4zNyAxNjEuMjAgMTYuNjggMTM3LjcwIDI3LjI0IDExNi4yNiBDIDQ4LjgyIDcxLjE3IDg4LjkyIDM1LjQ4IDEzNi4wNCAxOC44OSBDIDE1NC4wNSAxMi41NCAxNzMuMDIgOC44NyAxOTIuMTEgOC4xMyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxOTYuMjMgMjEuMzUgQyAxOTcuNjAgMTguOTMgMTk4Ljk1IDE2LjUwIDIwMC4zNyAxNC4xMSBDIDIwMS43MiAxNi40OCAyMDMuMDQgMTguODYgMjA0LjMzIDIxLjI3IEMgMjA2Ljk1IDIxLjgwIDIwOS41OSAyMi4yMiAyMTIuMTggMjIuODkgQyAyMTAuNzAgMjUuMTYgMjA4LjY1IDI2Ljk4IDIwNi44MiAyOC45NiBDIDIwNy4yMiAzMS42NSAyMDcuNTMgMzQuMzUgMjA3Ljg2IDM3LjA0IEMgMjA1LjMwIDM1Ljg2IDIwMi43NCAzNC42NyAyMDAuMTQgMzMuNTggQyAxOTcuNzQgMzQuODIgMTk1LjMyIDM2LjA0IDE5Mi43NSAzNi44NyBDIDE5My4xNiAzNC4yMiAxOTMuNTQgMzEuNTYgMTkzLjg0IDI4Ljg5IEMgMTkxLjkzIDI2LjkwIDE5MC4wMyAyNC45MCAxODguMTYgMjIuODggQyAxOTAuODMgMjIuMzEgMTkzLjUyIDIxLjc4IDE5Ni4yMyAyMS4zNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxODEuMTIgNDQuMzggQyAyMTIuMjYgNDAuNjAgMjQ0LjUzIDQ2LjE5IDI3Mi4zNiA2MC43NiBDIDMxMC45MyA4MC41NiAzNDAuNTEgMTE3LjA2IDM1MS42MiAxNTkuMDAgQyAzNTguODEgMTg1LjEwIDM1OC44MiAyMTMuMDggMzUyLjIyIDIzOS4zMCBMIDM1My43OCAyMzkuNDkgQyAzNTMuMzYgMjM5LjQ5IDM1Mi41MyAyMzkuNDggMzUyLjExIDIzOS40OCBDIDM0NS4wMiAyNjcuMzkgMzI5LjkwIDI5My4yMSAzMDkuMDggMzEzLjExIEMgMjkyLjIxIDMyOS42NiAyNzEuMzYgMzQxLjk5IDI0OC45NiAzNDkuNDAgQyAyMjAuMzUgMzU4LjY5IDE4OS4wNyAzNTkuNjMgMTU5Ljk5IDM1MS45MSBDIDEzMi4zOSAzNDQuNjMgMTA2LjgzIDMyOS42OSA4Ny4xMSAzMDkuMDQgQyA1OC42MyAyNzkuNzQgNDIuMzUgMjM4Ljg5IDQzLjMxIDE5OC4wMCBDIDQzLjM4IDE1MS41NCA2Ni4wOSAxMDYuMTEgMTAyLjQzIDc3LjM2IEMgMTI0Ljk1IDU5LjM5IDE1Mi40OCA0Ny43MiAxODEuMTIgNDQuMzggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTEyLjc0IDc2LjczIEMgMTM0LjU0IDYxLjQ2IDE2MC4zMSA1MS41NSAxODYuOTMgNDkuNTUgQyAyMDYuNDUgNDguMjEgMjI2LjM3IDQ5LjYxIDI0NS4wNiA1NS42OCBDIDI3MC45OSA2My43OSAyOTQuNjkgNzguOTggMzEyLjc1IDk5LjI4IEMgMzMwLjAwIDExOC4zMyAzNDIuMDggMTQxLjk0IDM0Ny44MyAxNjYuOTYgQyAzNTMuODUgMTk1LjE1IDM1Mi4yOSAyMjUuMTIgMzQyLjI1IDI1Mi4yMiBDIDMzNy4yNCAyNjUuNTYgMzMwLjQ3IDI3OC4yNSAzMjIuMDUgMjg5Ljc2IEMgMzE4LjgwIDI4Ni44MCAzMTkuNjggMjgyLjQyIDMxOS43MiAyNzguNTAgQyAzMTkuMTYgMjc5LjgxIDMxOC42MyAyODEuMTMgMzE4LjEzIDI4Mi40NiBDIDMxNy4zMyAyODAuMTggMzE2LjU1IDI3Ny44NSAzMTUuMTIgMjc1Ljg4IEMgMzE1LjUyIDI3Ny4xNiAzMTYuMzEgMjc5LjcyIDMxNi43MSAyODEuMDAgQyAzMTUuMzEgMjc5LjczIDMxMy44MCAyNzguNjQgMzEyLjE4IDI3Ny43MiBDIDMxMy4yMiAyNzkuMzYgMzE0LjQ0IDI4MC44NyAzMTUuNjcgMjgyLjM5IEMgMzE0LjIzIDI4MS43NyAzMTIuNzggMjgxLjIwIDMxMS4zMCAyODAuNjkgQyAzMTIuMzUgMjgxLjg3IDMxMy42MSAyODIuNzUgMzE1LjA4IDI4My4zNSBDIDMxMy45NSAyODMuNjQgMzEyLjgyIDI4My45MyAzMTEuNzAgMjg0LjIzIEMgMzE2LjE1IDI4NC41NCAzMTguMTkgMjg4LjY3IDMyMC4zNSAyOTEuOTUgQyAzMTkuMDAgMjkzLjcyIDMxNy41OSAyOTUuNDUgMzE2LjE1IDI5Ny4xNSBDIDMxMi41OCAyOTQuNTYgMzExLjEzIDI5MC40MSAzMTAuNTUgMjg2LjE5IEMgMzEwLjIzIDI4Ni4zNCAzMDkuNTkgMjg2LjY0IDMwOS4yOCAyODYuNzggQyAzMDguNTkgMjg1LjIzIDMwNi45MiAyODQuODIgMzA2LjQ3IDI4Ni43NiBDIDMwNi44OCAyODcuMjkgMzA3LjY5IDI4OC4zMyAzMDguMTAgMjg4Ljg2IEMgMzA3LjQ1IDI4OC43NSAzMDYuMTQgMjg4LjU1IDMwNS40OSAyODguNDQgQyAzMDYuNTkgMjg5LjcyIDMwNy43MSAyOTAuOTggMzA4LjgyIDI5Mi4yNiBDIDMwNy45NyAyOTIuMjUgMzA2LjI3IDI5Mi4yMyAzMDUuNDEgMjkyLjIyIEMgMzA4LjQ3IDI5NC40MSAzMTEuNDcgMjk2Ljc0IDMxMy44MSAyOTkuNzIgQyAzMTMuMDcgMzAwLjYyIDMxMi4zMyAzMDEuNTIgMzExLjYwIDMwMi40NCBDIDMxMC45MyAzMDAuODAgMzEwLjY0IDI5OC44MiAzMDkuMDcgMjk3Ljc2IEMgMzA1Ljc4IDI5NS4wNyAzMDIuMTEgMjkyLjkxIDI5OC41OCAyOTAuNTcgQyAyOTcuMTcgMjg5LjQ3IDI5NS4zNSAyODkuNTAgMjkzLjY3IDI4OS4zMyBDIDI5My4zNCAyOTAuNjMgMjkzLjAyIDI5MS45MyAyOTIuNzAgMjkzLjIzIEMgMjkzLjAyIDI5NC4wNyAyOTMuMzUgMjk0LjkyIDI5My42OCAyOTUuNzcgQyAyOTIuMTUgMjk5Ljc1IDI5MS4yMCAzMDMuOTEgMjkwLjE3IDMwOC4wMyBDIDI4Ni4zOSAzMDAuOTEgMjgyLjM5IDI5My43OSAyODAuOTUgMjg1Ljc1IEMgMjgwLjUzIDI4Ny45NCAyODAuMTYgMjkwLjE3IDI3OC43OCAyOTIuMDAgQyAyNzcuNzggMjkwLjQ3IDI3Ni44MiAyODguODggMjc1LjM4IDI4Ny43MSBDIDI3Ni4yMiAyOTAuNTIgMjc3LjM3IDI5My4yMyAyNzguMDUgMjk2LjA5IEMgMjc4LjU4IDI5OC43NCAyODEuODIgMjk5LjU3IDI4Mi41OSAzMDIuMTIgQyAyODMuODYgMzA1LjUwIDI4NC45NiAzMDguOTUgMjg2LjQ1IDMxMi4yNCBDIDI4NS4yNSAzMTEuNTcgMjg0LjA2IDMxMC45MSAyODIuODcgMzEwLjI0IEMgMjgxLjcwIDMxMC41OCAyODAuNTQgMzEwLjkyIDI3OS4zOSAzMTEuMjggQyAyNzkuMTAgMzExLjgxIDI3OC41MiAzMTIuODcgMjc4LjIzIDMxMy4zOSBDIDI3Ni44OSAzMTEuNTEgMjc1LjU2IDMwOS41NiAyNzMuNjcgMzA4LjE5IEMgMjc1LjU0IDMwNi44MiAyNzcuNTkgMzA1LjM4IDI3OC4wNiAzMDIuOTQgQyAyNzQuODcgMzA0LjgxIDI3Mi4xNiAzMDcuMzUgMjY5LjEzIDMwOS40MyBDIDI2Ny4yMiAzMTAuNTEgMjY2Ljc0IDMxMi43OCAyNjUuODYgMzE0LjYyIEMgMjYxLjc3IDMxMC45NiAyNjEuNTIgMzA1LjM0IDI2MC4yOCAzMDAuMzYgQyAyNjAuMDIgMzAxLjY2IDI1OS43NyAzMDIuOTcgMjU5LjU0IDMwNC4yOCBDIDI1OC43MSAzMDIuNjYgMjU3Ljc4IDMwMS4wMyAyNTYuMDkgMzAwLjE2IEMgMjU2LjA3IDMwMy4zOSAyNTYuMjggMzA2LjY1IDI1Ny4yMCAzMDkuNzYgQyAyNTUuODAgMzA5LjcwIDI1NC40MCAzMDkuNjYgMjUzLjAwIDMwOS42NSBDIDI1NC44NCAzMTEuMTcgMjU2LjgzIDMxMi40OCAyNTguODkgMzEzLjY5IEMgMjU4LjkxIDMxNi4zOSAyNTguODYgMzE5LjA4IDI1OC44MCAzMjEuNzggQyAyNTcuNjIgMzIzLjA3IDI1Ni40MiAzMjQuMzUgMjU1LjE5IDMyNS41OSBDIDI1Mi40MiAzMjQuMTEgMjQ5Ljc3IDMyMi4zOCAyNDYuNzcgMzIxLjQxIEMgMjQ2LjI5IDMxOC44NiAyNDUuNzIgMzE2LjMyIDI0NS4yNiAzMTMuNzYgQyAyNDQuMDggMzEzLjAwIDI0Mi45MCAzMTIuMjMgMjQxLjczIDMxMS40NiBDIDIzOC4yMiAzMTIuNjMgMjM2LjU3IDMxNi4yMCAyMzcuNjEgMzE5LjcxIEMgMjM2Ljg0IDMxOS45NSAyMzYuMDggMzIwLjIwIDIzNS4zMSAzMjAuNDUgQyAyMzUuNjUgMzE1LjkwIDIzNy4yNyAzMTEuNTQgMjM3LjUyIDMwNy4wMSBDIDIzNy42NSAzMDQuOTEgMjM0LjYwIDMwNS4yMSAyMzMuMzkgMzA0LjU0IEMgMjM0LjYzIDMxMi44OCAyMzEuNzkgMzIxLjAxIDIyOC44MiAzMjguNjQgQyAyMjguMDEgMzI4Ljg3IDIyNi4zOCAzMjkuMzMgMjI1LjU3IDMyOS41NiBDIDIyNC45NyAzMjQuMDYgMjIyLjQ5IDMxNy44OSAyMjYuMjcgMzEyLjk4IEMgMjI1LjUzIDMxMS4yMiAyMjQuOTQgMzA5LjQwIDIyNC4zNiAzMDcuNTggQyAyMjMuOTMgMzA3LjU2IDIyMy4wNyAzMDcuNTEgMjIyLjY0IDMwNy40OSBDIDIxOS43NyAzMTIuMTEgMjIyLjgxIDMxNy43OCAyMjAuMTQgMzIyLjUyIEMgMjE3LjMyIDMxOS42MiAyMTUuNTUgMzE1LjkxIDIxMi44NyAzMTIuOTAgQyAyMTMuMzQgMzE0LjQ1IDIxMy45MCAzMTUuOTggMjE0LjUxIDMxNy41MCBDIDIxMy42NCAzMTguMzQgMjEyLjc3IDMxOS4xOSAyMTEuOTIgMzIwLjA0IEMgMjEzLjE4IDMyMC42OCAyMTQuNDUgMzIxLjMwIDIxNS43NCAzMjEuODYgQyAyMTYuMzcgMzIyLjc3IDIxNy4wMCAzMjMuNjkgMjE3LjY1IDMyNC42MCBDIDIxNS4wNSAzMjUuMTcgMjEyLjM3IDMyNS43NiAyMTAuNDQgMzI3Ljc0IEMgMjEwLjk3IDMyNS4yMiAyMDguMzcgMzI0LjQxIDIwNy40MCAzMjIuNjAgQyAyMDYuNjggMzIwLjg2IDIwOC4wNyAzMTkuMzIgMjA4LjY3IDMxNy44MCBDIDIwOC4zMiAzMTYuMzggMjA3Ljk0IDMxNC45NyAyMDcuNTUgMzEzLjU3IEMgMjA2Ljg0IDMxNC4zMyAyMDUuNzQgMzE0LjkzIDIwNS41OCAzMTYuMDYgQyAyMDQuMzQgMzIxLjczIDIwNi40NyAzMjcuNDMgMjA2LjMwIDMzMy4xMyBDIDIwNS41NiAzMzIuMTQgMjA0Ljg0IDMzMS4xNSAyMDQuMTEgMzMwLjE2IEMgMjAxLjY3IDMyOC45MiAyMDAuMTkgMzI2LjYyIDE5OC4zOCAzMjQuNjkgQyAxOTYuNTIgMzIyLjk4IDE5My45MSAzMjQuMzEgMTkxLjc2IDMyNC40OSBDIDE5MC44NiAzMjcuMTMgMTg5LjcwIDMyOS45NSAxOTAuNDMgMzMyLjc5IEMgMTkxLjE2IDMzNC42MiAxOTIuMTEgMzM2LjM1IDE5Mi45MSAzMzguMTUgQyAxOTEuNjQgMzM3LjE5IDE4OS44NSAzMzYuNTQgMTg5LjMxIDMzNC45MCBDIDE4OC44NCAzMzIuNDQgMTg4Ljc1IDMyOS45MyAxODguMzkgMzI3LjQ2IEMgMTkxLjc4IDMyNC4wNSAxOTUuNTUgMzIxLjA5IDE5OS41MSAzMTguMzggQyAyMDEuMTEgMzE3LjYwIDIwMC40MSAzMTUuNzggMjAwLjQyIDMxNC40MCBDIDIwMC42NCAzMTQuMDYgMjAxLjA3IDMxMy4zOSAyMDEuMjggMzEzLjA1IEMgMTk5LjcxIDMxMy40OCAxOTcuMzkgMzEyLjYyIDE5Ni40MiAzMTQuMzQgQyAxOTQuNDggMzE2Ljc2IDE5My41NiAzMTkuOTggMTkwLjk5IDMyMS44OSBDIDE4OS4yOCAzMjMuMjEgMTg3LjQzIDMyNC4zNCAxODUuNjMgMzI1LjU0IEMgMTg1LjMxIDMyNS4yNyAxODQuNjUgMzI0LjczIDE4NC4zMiAzMjQuNDcgQyAxODMuNDYgMzI0LjUyIDE4MS43MiAzMjQuNjIgMTgwLjg1IDMyNC42OCBDIDE4Mi41MiAzMjEuMDYgMTgzLjg5IDMxNy4zMCAxODUuNjYgMzEzLjczIEMgMTg2LjI4IDMxMi4yNSAxODcuMzQgMzEwLjcwIDE4Ni43OSAzMDkuMDQgQyAxODYuMTkgMzA3Ljc1IDE4NC42NCAzMDcuNTggMTgzLjUxIDMwNy4wMSBDIDE4Mi42OSAzMTYuMzUgMTc3LjA5IDMyNC4yNyAxNzEuOTEgMzMxLjc0IEMgMTcxLjAyIDMzMC4xOSAxNzAuMDUgMzI4LjY5IDE2OS4yNSAzMjcuMTAgQyAxNzIuMDAgMzIyLjgzIDE3My41MyAzMTcuMDIgMTc4LjcwIDMxNS4wNiBDIDE3OC43NyAzMTMuNDQgMTc4LjcxIDMxMS44MyAxNzguNTggMzEwLjIyIEMgMTc3LjY1IDMxMC4zOCAxNzYuNzMgMzEwLjU2IDE3NS44MSAzMTAuNzggQyAxNzYuMTcgMzExLjk2IDE3Ni42MyAzMTMuMTkgMTc2LjEyIDMxNC40MyBDIDE3NS44NCAzMTMuNTMgMTc1LjI5IDMxMS43NSAxNzUuMDEgMzEwLjg1IEMgMTczLjk0IDMxMi45MyAxNzMuNDggMzE1LjI3IDE3Mi4zNSAzMTcuMzIgQyAxNzAuODQgMzE5LjU5IDE2OC43NyAzMjEuNDAgMTY2LjkwIDMyMy4zNyBDIDE2NS45MiAzMjIuNjIgMTY0Ljk0IDMyMS44OCAxNjMuOTYgMzIxLjE1IEMgMTYwLjk4IDMyMC45MSAxNTcuOTcgMzIxLjIzIDE1NS40MyAzMjIuOTEgQyAxNTUuMDMgMzIwLjI0IDE1NC42NiAzMTcuNTYgMTU0LjQzIDMxNC44NyBDIDE1NS4yNiAzMTMuOTUgMTU2LjA4IDMxMy4wNSAxNTYuOTEgMzEyLjE0IEMgMTU2Ljg3IDMxMC43NCAxNTYuODQgMzA5LjM0IDE1Ni44MSAzMDcuOTUgQyAxNTUuMDggMzA2Ljk1IDE1My41MSAzMDUuMDkgMTUxLjM0IDMwNS4zNCBDIDE0OC43NCAzMDYuNTkgMTQ2LjI2IDMwOC44MyAxNDUuODggMzExLjgzIEMgMTQ1LjU4IDMxNC4wMiAxNDUuNTYgMzE2LjIzIDE0NS4zOSAzMTguNDMgQyAxNDQuOTIgMzE4LjU0IDE0My45NyAzMTguNzYgMTQzLjUwIDMxOC44OCBDIDE0Mi45OCAzMTUuMjUgMTQzLjU5IDMxMS42NiAxNDQuNDMgMzA4LjE0IEMgMTQ3LjczIDMwNS45OSAxNTEuMDIgMzAzLjY4IDE1NC44OCAzMDIuNjMgQyAxNTYuMzAgMzAzLjQzIDE1Ny43MyAzMDQuMjEgMTU5LjE4IDMwNC45NyBDIDE2MC41NyAzMDIuODAgMTYwLjg3IDMwMC4zNCAxNTkuNzEgMjk4LjAxIEMgMTUzLjUwIDMwMC4zNyAxNDYuOTAgMzAxLjc5IDE0MC45NyAzMDQuODUgQyAxMzkuMTQgMzA5LjQ0IDEzNi43NCAzMTMuNzkgMTM1LjM4IDMxOC41NiBMIDEzNC42NSAzMTguMTggQyAxMzQuMTYgMzE5LjU5IDEzMy42MiAzMjAuOTkgMTMzLjAzIDMyMi4zNiBDIDEzMS43OCAzMTguMTkgMTI5LjkwIDMxNC4yMyAxMjguODMgMzEwLjAwIEMgMTI5LjU4IDMwOS4yNyAxMzEuMDggMzA3LjgwIDEzMS44MiAzMDcuMDYgTCAxMjguNzUgMzA3LjMyIEMgMTI5Ljg5IDMwNi41OCAxMzEuMDMgMzA1LjgzIDEzMi4xNiAzMDUuMDggQyAxMzEuMTEgMzA0LjcwIDEyOC45OSAzMDMuOTYgMTI3Ljk0IDMwMy41OSBDIDEyNy4zNiAzMDAuOTkgMTI3LjA4IDI5OC4zMyAxMjcuNjcgMjk1LjcxIEMgMTI2LjM2IDI5Ny45MSAxMjQuNjQgMjk5LjgxIDEyMi43OCAzMDEuNTcgQyAxMjMuNjAgMzAxLjUzIDEyNS4yMiAzMDEuNDYgMTI2LjAzIDMwMS40MiBDIDEyNS4zMCAzMDIuMDcgMTIzLjgzIDMwMy4zNyAxMjMuMTAgMzA0LjAyIEMgMTIzLjU3IDMwNC41MyAxMjQuNTEgMzA1LjU1IDEyNC45OCAzMDYuMDYgQyAxMjIuMzYgMzA4LjgyIDExOC44OCAzMTAuNDMgMTE1LjE5IDMxMS4xNiBDIDExNi4zMSAzMDQuOTEgMTE3LjMxIDI5OC40NCAxMjAuNTggMjkyLjg3IEMgMTE5LjgyIDI5My4yMiAxMTguMjggMjkzLjkwIDExNy41MiAyOTQuMjUgQyAxMTguMDQgMjkzLjMwIDExOS4wOCAyOTEuNDAgMTE5LjYwIDI5MC40NSBDIDExOC43OCAyOTEuMjcgMTE3LjE0IDI5Mi45MSAxMTYuMzIgMjkzLjc0IEMgMTE2LjUxIDI5Mi43NyAxMTYuODkgMjkwLjg0IDExNy4wOSAyODkuODggQyAxMTYuNjYgMjkwLjM5IDExNS44MCAyOTEuNDMgMTE1LjM4IDI5MS45NSBDIDExNC45NyAyODkuNjcgMTEyLjU5IDI4OS41NiAxMTMuMjEgMjkxLjg3IEMgMTEyLjQ1IDI5NS4wNyAxMTUuNDggMjk4LjAxIDExNC4wNCAzMDEuMTAgQyAxMTIuODUgMzA0LjMzIDExMS42MCAzMDcuNTcgMTEwLjk4IDMxMC45OCBDIDEwOS42NCAzMTAuNTkgMTA4LjMwIDMxMC4yNiAxMDYuOTUgMzA5Ljk3IEMgMTA4LjI4IDMwOC41MCAxMDkuNDYgMzA2LjkwIDExMC4zOSAzMDUuMTUgQyAxMTEuMTkgMzA0LjM4IDExMS45OCAzMDMuNTggMTEyLjY5IDMwMi43MiBDIDExMi4wNCAzMDIuNDUgMTEwLjc1IDMwMS45MCAxMTAuMTAgMzAxLjYzIEMgMTEwLjY4IDI5OS45NSAxMTEuMjggMjk4LjI4IDExMS42OCAyOTYuNTYgQyAxMDkuMjkgMjk5LjQ0IDEwNy45MSAzMDIuOTUgMTA2LjIyIDMwNi4yNCBDIDEwMy44NSAzMDguNzkgMTAwLjQ0IDMxMC4wMyA5Ny4zNCAzMTEuNDQgQyA5Ny4zMiAzMTEuMTkgOTcuMjcgMzEwLjcxIDk3LjI0IDMxMC40NiBDIDk4LjA3IDMwNC4wOCA5Ny4zMiAyOTcuNjIgOTguMzcgMjkxLjI2IEMgMTAxLjE5IDI4OS42MSAxMDQuMTAgMjg4LjA3IDEwNi42OSAyODYuMDUgQyAxMDYuNTYgMjg1LjQwIDEwNi4yOSAyODQuMDkgMTA2LjE2IDI4My40MyBDIDEwMy41MiAyODUuMTkgMTAwLjYxIDI4Ni40NCA5Ny44NiAyODguMDAgQyA5NS43MCAyODkuMzYgOTUuMjIgMjkyLjA3IDk0LjU2IDI5NC4zNSBDIDkzLjQwIDI5OC4zOCA5Mi44NSAzMDIuNTUgOTIuNjQgMzA2LjczIEMgOTEuMzAgMzA1LjA5IDg5Ljg2IDMwMy41NCA4OC4zOSAzMDIuMDIgTCA4OC4zNCAzMDEuNDUgQyA4OC40MCAyOTguOTMgODcuMzcgMjk2LjY1IDg2LjQwIDI5NC40MCBDIDg0LjgxIDI5My44NyA4My4yNiAyOTMuOTQgODEuNzMgMjk0LjYwIEMgODEuNTAgMjkzLjQxIDgxLjI1IDI5Mi4yMyA4MS4wOSAyOTEuMDQgQyA4NS4xMiAyODguMTIgODkuMTggMjg1LjEwIDkyLjUzIDI4MS40MCBDIDkyLjI2IDI4MC42NCA5MS43MCAyNzkuMTEgOTEuNDIgMjc4LjM0IEMgOTEuMDEgMjc4LjAyIDkwLjE4IDI3Ny4zOSA4OS43NyAyNzcuMDcgQyA4Ni42NiAyODEuODMgODIuNjcgMjg1LjkzIDc3Ljg5IDI4OS4wMiBDIDU5LjA3IDI2My40NyA0OC41NSAyMzEuNzUgNDkuMTAgMTk5Ljk2IEMgNDguNjAgMTY4LjM4IDU5LjIxIDEzNy4wNSA3Ny42MiAxMTEuNTMgQyA4Ny40NSA5OC4yMiA5OS4zNCA4Ni40MyAxMTIuNzQgNzYuNzMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk2LjkwIDU3LjQyIEMgMjA1Ljk1IDU1LjEyIDIxNi40NSA1OC4zMCAyMjIuMDMgNjUuOTYgQyAyMjcuMTUgNzIuNzMgMjI3LjM3IDgyLjE3IDIyNC41OCA4OS45MiBDIDIyMS41NSA5Ny44MyAyMTMuOTcgMTAyLjg0IDIwNi4zMCAxMDUuNjEgQyAyMDYuMjkgMTA4LjAyIDIwNi4yNyAxMTAuNDIgMjA2LjI2IDExMi44MyBDIDIwNC4wOSAxMTUuMTYgMjAyLjAzIDExNy41OSAxOTkuOTcgMTIwLjAzIEMgMTk4LjcwIDExOC43MCAxOTYuODAgMTE3Ljc2IDE5Ni4xMSAxMTYuMDAgQyAxOTcuMDAgMTE0LjQwIDE5OC4zOSAxMTMuMTUgMTk5LjYxIDExMS44MCBDIDE5MS44MCAxMDQuODggMTgyLjk5IDk5LjE3IDE3NS4zMiA5Mi4xMCBDIDE3Ni4wNyA5MC42MCAxNzcuMjMgODkuNDYgMTc4Ljg3IDg5LjAyIEMgMTgzLjA3IDkyLjkyIDE4Ni45NSA5Ny4xNiAxOTEuMTggMTAxLjAzIEMgMTkzLjQzIDk0LjcyIDE5Ni4wMSA4OC40OSAxOTcuNzggODIuMDQgQyAxOTcuNDUgNzguMjQgMTk2LjA0IDc0LjYzIDE5NS4yMiA3MC45MiBDIDE5MC4wOSA2OS43NSAxODUuMTUgNjcuODYgMTgwLjAyIDY2LjY3IEMgMTc4LjIwIDY2LjkyIDE3Ni40MSA2Ny4zNSAxNzQuNTkgNjcuNTUgQyAxNzQuNTUgNjYuNTAgMTc0LjUxIDY1LjQ2IDE3NC40OSA2NC40MSBDIDE3Ny4zOCA2NC4zNyAxODAuMjIgNjQuOTYgMTgzLjA1IDY1LjQ2IEMgMTg2LjkwIDYxLjY5IDE5MS41NSA1OC41MyAxOTYuOTAgNTcuNDIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTg0Ljk0IDY1LjgxIEMgMTg5LjMyIDYxLjM0IDE5NS43NCA1OS4wMiAyMDEuOTcgNTkuNTAgQyAyMDkuNDggNTkuNzAgMjE2LjU1IDY0LjYyIDIxOS40MyA3MS41NSBDIDIyMi41MCA3OS4wOCAyMjIuNTUgODguMjAgMjE4LjI0IDk1LjI4IEMgMjE2LjEwIDk4Ljc4IDIxMi42MiAxMDEuMjIgMjA4Ljg1IDEwMi43MCBDIDIwNy4zOCA5NS43NSAyMDYuMTkgODguNzMgMjA0LjQxIDgxLjg3IEMgMjAzLjg0IDgxLjcyIDIwMi43MCA4MS40MSAyMDIuMTMgODEuMjUgQyAyMDMuOTYgNzkuMDAgMjA1LjMxIDc2LjQwIDIwNi4wNyA3My41OSBDIDIwOS45OSA3Mi44MiAyMTMuOTggNzIuNTggMjE3Ljk1IDcyLjI0IEMgMjE0LjY5IDY4Ljc3IDIwOS45NSA2Ni41NSAyMDcuOTQgNjIuMDQgQyAyMDcuMjUgNjIuMTcgMjA1Ljg2IDYyLjQyIDIwNS4xNyA2Mi41NSBDIDIwNS41MiA2My41NSAyMDUuNDAgNjUuMDYgMjA2Ljc3IDY1LjMyIEMgMjA4Ljg2IDY2LjE0IDIxMC4wOCA2OC4wOSAyMTEuMjggNjkuODYgQyAyMDguMjYgNjkuNzUgMjA1LjI5IDY5LjIyIDIwMi4zNiA2OC41MiBDIDIwMi4wOCA2Ni4xOCAyMDEuODUgNjMuODQgMjAxLjY0IDYxLjQ5IEMgMTk5LjgzIDYxLjI0IDE5OC4wMSA2MS4wMCAxOTYuMTkgNjAuODUgQyAxOTYuNTggNjMuNzMgMTk3LjY4IDY2LjQzIDE5OS44OSA2OC4zOSBDIDE5NC44OCA2Ny42OCAxODkuOTEgNjYuNzQgMTg0Ljk0IDY1LjgxIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE5Mi4xOSAxMDIuMDAgQyAxOTQuODggOTYuODcgMTk4LjEzIDkyLjAzIDIwMS4wOCA4Ny4wNCBDIDIwMy40NCA5Mi4zMSAyMDUuNDUgOTcuNzMgMjA3LjYwIDEwMy4xMCBDIDIwNC43NSAxMDUuMDEgMjAyLjkzIDEwNy45OCAyMDAuNzUgMTEwLjU3IEMgMTk3Ljc5IDEwNy44MiAxOTQuODMgMTA1LjA2IDE5Mi4xOSAxMDIuMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTk3LjUzIDk5LjQ5IEMgMTk4LjQ3IDk5LjQ4IDIwMC4zNiA5OS40NiAyMDEuMzAgOTkuNDYgQyAyMDEuMjkgMTAyLjA4IDIwMS4zMCAxMDQuNzAgMjAxLjI5IDEwNy4zMyBDIDIwMC42NyAxMDcuMjkgMTk5LjQ0IDEwNy4yMCAxOTguODIgMTA3LjE2IEMgMTk4LjY1IDEwNC41NiAxOTguNjQgMTAxLjkxIDE5Ny41MyA5OS40OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxNzUuNjkgMTA5LjU1IEMgMTc2LjAwIDEwNy40MyAxNzQuMzYgMTAzLjcyIDE3Ny43MCAxMDMuNjUgQyAxNzcuNzEgMTA0LjU3IDE3Ny43NCAxMDYuNDIgMTc3Ljc1IDEwNy4zNSBDIDE4MC42NSAxMDcuNDUgMTgzLjU1IDEwNy41NiAxODYuNDUgMTA3LjM4IEMgMTg3LjIxIDEwOC45OCAxODcuOTkgMTEwLjU3IDE4OC44NiAxMTIuMTEgQyAxODkuNzcgMTEwLjYxIDE4OC41MyAxMDguOTkgMTg4LjM0IDEwNy40OCBDIDE4OS4xOSAxMDcuNDUgMTkwLjg4IDEwNy40MCAxOTEuNzMgMTA3LjM3IEMgMTkxLjc4IDExMC4zMCAxOTEuODAgMTEzLjI0IDE5MS43OCAxMTYuMTcgQyAxODkuMTAgMTE1LjkzIDE4Ni4xMiAxMTYuODEgMTgzLjY0IDExNS41NiBDIDE4My42MyAxMTUuMTUgMTgzLjYwIDExNC4zMyAxODMuNTggMTEzLjkyIEMgMTg0LjQwIDExMy44MiAxODYuMDQgMTEzLjYyIDE4Ni44NiAxMTMuNTIgQyAxODUuNzYgMTExLjM1IDE4NC40MyAxMDkuMzAgMTgyLjgyIDEwNy40OCBDIDE4MS4zMiAxMTAuNjEgMTgyLjc0IDExNy4zNiAxNzcuMzUgMTE2LjQwIEMgMTc3LjI0IDExNC45OCAxNzcuODEgMTEzLjg4IDE3OS4wNSAxMTMuMDkgQyAxNzkuMTkgMTEyLjIxIDE3OS40NiAxMTAuNDUgMTc5LjYwIDEwOS41NyBDIDE3OC4yOSAxMDkuNTYgMTc2Ljk5IDEwOS41NiAxNzUuNjkgMTA5LjU1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDIwNy40OSAxMDcuMzcgQyAyMDkuNzUgMTA3LjQwIDIxMi4wMSAxMDcuNDEgMjE0LjI4IDEwNy40MSBDIDIxNC4yMyAxMTAuMTggMjE0LjIzIDExMi45NSAyMTQuMzYgMTE1LjcyIEMgMjEyLjEyIDExNi4yMyAyMDkuODEgMTE2LjIyIDIwNy41MiAxMTYuMjMgQyAyMDcuNTAgMTE1LjYxIDIwNy40NCAxMTQuMzkgMjA3LjQxIDExMy43OCBDIDIwOC44NiAxMTMuNzggMjEwLjMxIDExMy43OSAyMTEuNzYgMTEzLjc5IEMgMjExLjY2IDExMi4xNyAyMTEuODIgMTEwLjQ0IDIxMC45NCAxMDkuMDEgQyAyMTAuMzAgMTEwLjc1IDIwOS4xMiAxMTEuNTggMjA3LjQxIDExMS41MSBDIDIwNy40MyAxMTAuNDcgMjA3LjQ3IDEwOC40MSAyMDcuNDkgMTA3LjM3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDIxNS44MiAxMDcuNDIgQyAyMTcuOTUgMTA3LjQxIDIyMC4wOSAxMDcuNDEgMjIyLjIyIDEwNy40MiBDIDIyMi4xNSAxMTAuMTMgMjIyLjE0IDExMi44NSAyMjIuMjUgMTE1LjU2IEMgMjIxLjYzIDExNS43NiAyMjAuMzggMTE2LjE1IDIxOS43NiAxMTYuMzUgQyAyMTkuNzMgMTE0LjA4IDIxOS43MiAxMTEuODEgMjE5LjcwIDEwOS41NCBDIDIxOC40MiAxMDkuNTMgMjE3LjE0IDEwOS41MyAyMTUuODYgMTA5LjUzIEwgMjE1LjgyIDEwNy40MiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAyMTYuMjMgMTExLjQ0IEMgMjE2Ljc4IDExMS41MyAyMTcuODcgMTExLjcwIDIxOC40MSAxMTEuNzkgQyAyMTguMzkgMTEzLjI4IDIxOC4zNyAxMTQuNzggMjE4LjM1IDExNi4yOCBDIDIxNy42OSAxMTYuMjQgMjE2LjM5IDExNi4xNSAyMTUuNzQgMTE2LjExIEMgMjE1Ljg5IDExNC41NSAyMTYuMDUgMTEzLjAwIDIxNi4yMyAxMTEuNDQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTE5LjI1IDEzNi4zMCBDIDEyNC43NCAxMzYuMzUgMTMwLjIzIDEzNi4zMSAxMzUuNzMgMTM2LjMyIEMgMTM1Ljc2IDE0My40MiAxMzUuNjkgMTUwLjUyIDEzNS43NyAxNTcuNjIgQyAxMzguMTcgMTU1Ljk2IDE0MS40OCAxNTQuODcgMTQyLjY0IDE1MS45NSBDIDE0My4xMiAxNDYuNzYgMTQyLjY5IDE0MS41MyAxNDIuODYgMTM2LjMyIEMgMTQ4LjYzIDEzNi4zMiAxNTQuNDAgMTM2LjMxIDE2MC4xOCAxMzYuMzMgQyAxNjAuMTAgMTQxLjI2IDE2MC4yNiAxNDYuMjAgMTYwLjEyIDE1MS4xMyBDIDE1OS43OCAxNTUuMDUgMTU3LjMxIDE1OC43MSAxNTMuODkgMTYwLjYxIEMgMTQ3Ljg1IDE2NC4wNCAxNDEuODAgMTY3LjQ0IDEzNS43MyAxNzAuODAgQyAxMzUuNzMgMTc3LjgxIDEzNS43MyAxODQuODIgMTM1Ljc0IDE5MS44MyBDIDEzMC4yNCAxOTEuODYgMTI0Ljc0IDE5MS44MiAxMTkuMjMgMTkxLjg2IEMgMTE5LjI3IDE3My4zNCAxMTkuMjMgMTU0LjgyIDExOS4yNSAxMzYuMzAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTY0LjkyIDEzNi4zMiBDIDE3MC40NiAxMzYuMzUgMTc1Ljk5IDEzNi4yOCAxODEuNTIgMTM2LjM1IEMgMTgxLjQ0IDE1MC43OSAxODEuNDMgMTY1LjIzIDE4MS41MiAxNzkuNjcgQyAxNzYuMDUgMTc5LjYyIDE3MC41NyAxNzkuODcgMTY1LjEwIDE3OS41NyBDIDE2NC42MyAxNjUuMjMgMTY0Ljk5IDE1MC43MiAxNjQuOTIgMTM2LjMyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDE4Ni4yOCAxMzYuMzAgQyAyMDAuNjkgMTM2LjM0IDIxNS4xMCAxMzYuMzMgMjI5LjUxIDEzNi4zMSBDIDIyOS41MiAxNTAuNzcgMjI5LjQ5IDE2NS4yMyAyMjkuNTMgMTc5LjY5IEMgMjIzLjk0IDE3OS42NCAyMTguMzUgMTc5LjgxIDIxMi43NyAxNzkuNjAgQyAyMTIuOTUgMTcwLjI4IDIxMi43NyAxNjAuOTUgMjEyLjg3IDE1MS42MiBDIDIwOS41MSAxNTEuNTUgMjA2LjE1IDE1MS41NyAyMDIuODAgMTUxLjYwIEMgMjAyLjg3IDE2MC45NiAyMDIuODEgMTcwLjMzIDIwMi44MyAxNzkuNjkgQyAxOTcuMzIgMTc5LjczIDE5MS44MCAxNzkuNjcgMTg2LjI5IDE3OS42OSBDIDE4Ni4zMCAxNjUuMjMgMTg2LjMyIDE1MC43NiAxODYuMjggMTM2LjMwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDIzNC4wOSAxMzYuMjggQyAyMzkuNjcgMTM2LjM4IDI0NS4yNSAxMzYuMjkgMjUwLjg0IDEzNi4zMyBDIDI1MC44NiAxNDEuNTIgMjUwLjY2IDE0Ni43MiAyNTAuOTkgMTUxLjkwIEMgMjUzLjg4IDE0OC45MCAyNTMuNTMgMTQ0LjIzIDI1NS44MCAxNDAuODMgQyAyNTcuNTcgMTM3LjU5IDI2MS40MSAxMzYuMjggMjY0LjkyIDEzNi4zNCBDIDI2OC43NCAxMzYuNDAgMjcyLjg1IDEzNS43OCAyNzYuNDIgMTM3LjQ4IEMgMjc5LjUxIDEzOS4wNCAyODAuNzYgMTQyLjY3IDI4MC43MSAxNDUuOTUgQyAyODAuNzQgMTU3LjE4IDI4MC43MCAxNjguNDIgMjgwLjcyIDE3OS42NiBDIDI3Mi45MiAxNzkuNjYgMjY1LjEyIDE3OS43MCAyNTcuMzIgMTc5LjY2IEMgMjU3LjM3IDE3NC41OSAyNTcuMzUgMTY5LjUyIDI1Ny4zMiAxNjQuNDUgQyAyNTkuNTYgMTY0LjQ1IDI2MS44MSAxNjQuNDQgMjY0LjA2IDE2NC40MyBDIDI2NC4wMyAxNjAuNjIgMjY0LjI0IDE1Ni43OSAyNjMuNzMgMTUzLjAxIEMgMjYyLjA5IDE1Mi40MSAyNTkuMTEgMTUxLjg2IDI1OC40NSAxNTQuMDQgQyAyNTUuODYgMTYyLjU1IDI1My41MSAxNzEuMTQgMjUwLjk0IDE3OS42NiBDIDI0NS4wNyAxNzkuNzMgMjM5LjE5IDE3OS43MiAyMzMuMzIgMTc5LjY2IEMgMjM1LjU0IDE3Mi42NiAyMzcuNTkgMTY1LjYwIDIzOS44OSAxNTguNjIgQyAyMzcuNzkgMTU4LjIyIDIzNC42MCAxNTcuOTAgMjM0LjM2IDE1NS4xOCBDIDIzMy43NiAxNDguOTEgMjM0LjI1IDE0Mi41OCAyMzQuMDkgMTM2LjI4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIyLjM2IDE4My45OCBDIDI0LjkzIDE4NC42MyAyNy40MiAxODUuNTUgMjkuNzQgMTg2Ljg1IEMgMjguODIgMTg3LjM2IDI2Ljk4IDE4OC4zOCAyNi4wNyAxODguODkgQyAyNi40NCAxODkuMDYgMjcuMTkgMTg5LjQwIDI3LjU3IDE4OS41NiBDIDI3Ljc4IDE5MC4yNCAyOC4yMCAxOTEuNjAgMjguNDEgMTkyLjI4IEMgMjguMjkgMTkyLjk0IDI4LjA2IDE5NC4yNiAyNy45NCAxOTQuOTIgQyAyOS40MCAxOTIuMTQgMzIuNjAgMTkwLjk0IDM0LjEwIDE4OC4yMSBDIDM0LjcyIDE4OC4yMCAzNS45NyAxODguMjAgMzYuNTkgMTg4LjIwIEMgMzYuNTggMTg5LjM3IDM2LjU3IDE5MC41NSAzNi41NiAxOTEuNzMgQyAzMy45NSAxOTIuNzkgMzEuNzIgMTk0LjUxIDI5LjQxIDE5Ni4wOCBDIDMwLjU5IDE5Ni44NyAzMS43OCAxOTcuNjggMzIuOTcgMTk4LjQ4IEMgMzMuODMgMTk4LjM1IDM1LjU3IDE5OC4wOCAzNi40NCAxOTcuOTUgQyAzNi40NyAxOTkuNTcgMzYuNDkgMjAxLjIwIDM2LjQ4IDIwMi44MyBDIDMzLjY3IDIwMS44NyAzMS4wNiAyMDAuNDUgMjguNDQgMTk5LjA3IEMgMjcuNDggMjAxLjIyIDI1LjYxIDIwMi42NSAyMy43NiAyMDMuOTkgQyAyNS41OSAyMDUuMzQgMjcuNTQgMjA2LjU3IDI5LjA2IDIwOC4yOSBDIDMwLjIwIDIwOS44MyAyOC43NSAyMTEuNzcgMjguNDggMjEzLjM3IEMgMjkuOTAgMjE0LjA0IDMxLjMzIDIxNC43NSAzMi4wMCAyMTYuMjkgQyAzMC4yOCAyMTYuMzAgMjguNTcgMjE2LjIyIDI2Ljg2IDIxNi4wNCBDIDI0LjkzIDIxNS4yMyAyNS45OSAyMTIuODMgMjUuNjQgMjExLjI3IEMgMjQuODYgMjEwLjI2IDIzLjYzIDIwOS43NiAyMi42MSAyMDkuMDYgQyAyMS4yNSAyMTAuMzIgMTkuNDMgMjExLjMzIDE5LjA1IDIxMy4zMCBDIDIwLjQzIDIxNC4wMyAyMS44NSAyMTQuNzggMjIuNjYgMjE2LjIxIEMgMjAuNjkgMjE2LjI2IDE4LjcyIDIxNi4yNSAxNi43NCAyMTYuMjAgQyAxNS43NiAyMTIuNjIgMTguMDIgMjA5LjIxIDE3LjI2IDIwNS42NyBDIDE2LjM2IDIwNS4xMiAxNS40MSAyMDQuNjUgMTQuNDQgMjA0LjI1IEMgMTIuOTggMjAwLjk0IDE0LjgxIDE5Ny40MyAxNC4yMSAxOTQuMDMgQyAxMy44OSAxOTIuNDEgMTMuNDkgMTkwLjgyIDEzLjIwIDE4OS4yMCBDIDEzLjgwIDE4OS4yMiAxNS4wMiAxODkuMjQgMTUuNjMgMTg5LjI2IEMgMTUuOTIgMTkzLjUwIDE1LjYyIDE5Ny43NCAxNS41MSAyMDEuOTggQyAxNS45MCAyMDIuNDIgMTYuNjggMjAzLjI5IDE3LjA3IDIwMy43MiBDIDE4LjU1IDIwMi4zMyAyMC43NSAyMDEuMzIgMjEuMTIgMTk5LjExIEMgMjEuNjYgMTk1LjY0IDE4Ljc3IDE5Mi41MCAxOS42OCAxODkuMDEgQyAyMC4zMiAxODcuMjEgMjEuNDIgMTg1LjYzIDIyLjM2IDE4My45OCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNjkuMjUgMTg2LjkwIEMgMzcxLjU0IDE4NS41NSAzNzQuMDQgMTg0LjY0IDM3Ni42MCAxODMuOTUgQyAzNzcuNTQgMTg1LjYwIDM3OC42MyAxODcuMTkgMzc5LjMwIDE4OC45OCBDIDM3OS45OCAxOTIuMDkgMzc4LjA2IDE5NC45OCAzNzcuNzcgMTk4LjAyIEMgMzc3LjYzIDIwMC41OSAzNzkuODMgMjAyLjM1IDM4MS44NSAyMDMuNDcgQyAzODQuNzggMjAyLjcwIDM4My4wMSAxOTkuMDggMzgzLjI4IDE5Ni45OSBDIDM4My42MSAxOTQuMDkgMzgxLjkxIDE5MC4wMSAzODUuMTYgMTg4LjMxIEMgMzg1LjQwIDE4OS41NiAzODUuNzEgMTkwLjg4IDM4NS4yMiAxOTIuMTMgQyAzODMuNjMgMTk2LjExIDM4Ni4xNCAyMDAuMzYgMzg0LjU3IDIwNC4zNCBDIDM4My44NSAyMDQuNTkgMzgyLjQyIDIwNS4xMCAzODEuNzEgMjA1LjM2IEMgMzgwLjc1IDIwOC45NCAzODMuNjkgMjEyLjczIDM4MS44OSAyMTYuMDggQyAzODAuMDcgMjE2LjM3IDM3OC4yMiAyMTYuMjQgMzc2LjM5IDIxNi4yMiBDIDM3Ny4wMSAyMTQuNjMgMzc4LjU1IDIxNC4wMiAzNzkuOTYgMjEzLjM1IEMgMzc5LjUxIDIxMS40MCAzNzcuNzMgMjEwLjM1IDM3Ni4zOCAyMDkuMDcgQyAzNzUuMzQgMjA5Ljc0IDM3NC4yMiAyMTAuMzQgMzczLjM0IDIxMS4yMiBDIDM3My4zMCAyMTIuNDcgMzczLjI3IDIxMy43MyAzNzMuMjUgMjE0Ljk4IEMgMzcyLjAyIDIxNy4xNCAzNjguOTggMjE1LjgwIDM2Ny4wMiAyMTYuMjggQyAzNjcuNjAgMjE0LjY2IDM2OS4wNyAyMTMuOTkgMzcwLjUwIDIxMy4zMyBDIDM3MC4wNiAyMTEuODYgMzY5LjY2IDIxMC4zOSAzNjkuMjggMjA4LjkxIEMgMzcxLjA1IDIwNy4wNCAzNzMuMDggMjA1LjQ1IDM3NS4yMSAyMDQuMDIgQyAzNzMuMzYgMjAyLjY2IDM3MS41NCAyMDEuMTggMzcwLjUwIDE5OS4wOCBDIDM2Ny45MyAyMDAuNTAgMzY1LjM0IDIwMS45NCAzNjIuNDkgMjAyLjc2IEMgMzYyLjQ5IDIwMS4xMCAzNjIuNTEgMTk5LjQ1IDM2Mi41NSAxOTcuNzkgQyAzNjMuMzkgMTk3Ljk3IDM2NS4wNyAxOTguMzMgMzY1LjkwIDE5OC41MSBDIDM2Ny4xNCAxOTcuNzIgMzY4LjM5IDE5Ni45NCAzNjkuNjUgMTk2LjE4IEMgMzY3LjMzIDE5NC41NyAzNjUuMDcgMTkyLjgzIDM2Mi40NSAxOTEuNzIgQyAzNjIuNDIgMTkwLjU1IDM2Mi4zOSAxODkuMzggMzYyLjM3IDE4OC4yMSBDIDM2Mi45OSAxODguMjEgMzY0LjIzIDE4OC4yMSAzNjQuODUgMTg4LjIxIEMgMzY2LjEwIDE5MC4yNyAzNjguMDEgMTkxLjg4IDM3MC4zNSAxOTIuNjAgQyAzNzAuMzcgMTkzLjEzIDM3MC40MiAxOTQuMjAgMzcwLjQ0IDE5NC43MyBDIDM3MS42NSAxOTMuMjQgMzcxLjM5IDE5MS4zNyAzNzEuMjUgMTg5LjYwIEMgMzcxLjY3IDE4OS4zOSAzNzIuNDkgMTg4Ljk4IDM3Mi45MSAxODguNzcgQyAzNzEuOTkgMTg4LjMwIDM3MC4xNiAxODcuMzcgMzY5LjI1IDE4Ni45MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyMDYuNzkgMTg2LjM3IEMgMjA2LjkxIDE4Ni40MCAyMDcuMTYgMTg2LjQ2IDIwNy4yOCAxODYuNDkgQyAyMDYuOTMgMTg3Ljc1IDIwNi42MCAxODkuMDEgMjA2LjI4IDE5MC4yOCBDIDIwNS40NSAxOTMuNDEgMjA0LjU4IDE5Ni41MyAyMDMuNzQgMTk5LjY2IEMgMjEyLjE4IDIwMC41OSAyMjAuNTMgMjAyLjM0IDIyOS4wNCAyMDIuNTMgQyAyMzAuNTUgMTk5LjQ5IDIzMi4xOCAxOTYuNTEgMjMzLjg1IDE5My41NiBDIDIzMy4xOSAxOTMuNjkgMjMxLjg3IDE5My45NSAyMzEuMjEgMTk0LjA4IEMgMjI5LjY0IDE5NS40MiAyMjguMDIgMTk2LjcyIDIyNi4zOSAxOTcuOTkgQyAyMjYuOTggMTk2LjQyIDIyNy42MSAxOTQuODcgMjI4LjI0IDE5My4zMiBDIDIyOC43MSAxOTIuMTYgMjI5LjE5IDE5MS4wMiAyMjkuNzEgMTg5Ljg4IEMgMjI5Ljc0IDE5MS40MiAyMjkuNjAgMTkyLjk1IDIyOS4yOSAxOTQuNDcgQyAyMzAuNDcgMTkyLjk0IDIzMS43NSAxOTEuNDkgMjMzLjExIDE5MC4xMiBMIDIzMi4xMSAxOTIuMTMgQyAyMzIuODIgMTkyLjYzIDIzMy41NCAxOTMuMTQgMjM0LjI2IDE5My42NSBMIDIzNC44NSAxOTEuMTkgQyAyMzUuNDIgMTk5LjUxIDIyOC4xOSAyMDUuNDYgMjI2LjM4IDIxMy4yMiBDIDIzMS43MyAyMTMuMjUgMjM3LjA4IDIxMy4yMSAyNDIuNDQgMjEzLjIyIEMgMjQyLjQ1IDIyNy42NyAyNDIuNDQgMjQyLjEyIDI0Mi40NSAyNTYuNTggQyAyMzYuOTAgMjU2LjUzIDIzMS4zNSAyNTYuNjMgMjI1LjgxIDI1Ni41MCBDIDIyNS44MCAyNDIuNTcgMjI2LjA5IDIyOC42MyAyMjUuNjYgMjE0LjcyIEMgMjI0LjQ0IDIxNy4yOCAyMjMuNDQgMjE5Ljk0IDIyMi4yNSAyMjIuNTIgQyAyMTcuMTggMjMyLjk3IDIxNS42OSAyNDQuODEgMjEwLjEyIDI1NS4wNCBDIDIwNy43NyAyNTguMTcgMjA1LjA4IDI2MS4xNyAyMDEuODcgMjYzLjQzIEMgMTk2Ljg2IDI2My41NCAxOTEuODggMjYyLjc2IDE4Ni44OCAyNjIuNTQgQyAxODEuNjggMjYyLjI0IDE3Ny4wNCAyNTkuNjkgMTcyLjMyIDI1Ny43OCBDIDE2OS43MiAyNjUuOTQgMTY2Ljk4IDI3NC4wNiAxNjQuMTUgMjgyLjE0IEMgMTYzLjg3IDI4MC45NSAxNjMuNjQgMjc5Ljc1IDE2My40NCAyNzguNTUgQyAxNjIuMTggMjc5LjU3IDE2MS4yNyAyODAuOTIgMTYwLjE5IDI4Mi4xMSBDIDE2MC43OCAyODAuMjAgMTYxLjUzIDI3OC4zMyAxNjIuNjEgMjc2LjY1IEMgMTYxLjUyIDI3Ni43NCAxNjAuNDMgMjc2LjgzIDE1OS4zNCAyNzYuOTIgQyAxNTkuMDYgMjc3LjYwIDE1OC41MCAyNzguOTcgMTU4LjIyIDI3OS42NiBDIDE1Ny45OCAyNzkuNjIgMTU3LjQ4IDI3OS41NSAxNTcuMjMgMjc5LjUxIEMgMTU3LjYwIDI3OC44OCAxNTguMzMgMjc3LjYyIDE1OC43MCAyNzYuOTkgQyAxNTcuNzkgMjc2LjMxIDE1Ni44MCAyNzUuNzUgMTU1LjgxIDI3NS4xOSBDIDE1NS44NiAyNzYuNjYgMTU1LjM1IDI3Ny45MCAxNTQuMjcgMjc4Ljk0IEMgMTU0LjUwIDI3Ny40MCAxNTQuODIgMjc1Ljg3IDE1NS4xMyAyNzQuMzYgTCAxNTYuNjYgMjc0LjYxIEMgMTU2LjA1IDI3My42NyAxNTUuNDQgMjcyLjc0IDE1NC44MSAyNzEuODMgQyAxNTMuOTAgMjczLjY1IDE1Mi45OSAyNzUuNTAgMTUxLjk5IDI3Ny4yOSBDIDE1MS4zMiAyNzYuOTggMTQ5Ljk5IDI3Ni4zOCAxNDkuMzIgMjc2LjA4IEMgMTQ5LjczIDI3NS4wMCAxNTAuMTIgMjczLjkxIDE1MC41MCAyNzIuODMgQyAxNTAuODQgMjczLjYyIDE1MS41MSAyNzUuMjAgMTUxLjg1IDI3NS45OSBMIDE1MS4xMiAyNzMuMTQgTCAxNTIuNDQgMjczLjY4IEMgMTUyLjkxIDI3Mi40NyAxNTMuNDEgMjcxLjI3IDE1My44OSAyNzAuMDYgQyAxNTQuMzEgMjY5Ljc1IDE1NS4xNCAyNjkuMTUgMTU1LjU2IDI2OC44NSBDIDE1NS4zMyAyNjkuMzQgMTU0Ljg4IDI3MC4zMyAxNTQuNjYgMjcwLjgyIEMgMTU2LjE1IDI3MS44NiAxNTYuNjAgMjczLjg5IDE1OC4wNSAyNzQuODYgQyAxNTkuOTkgMjc0LjA1IDE2MC4zOCAyNzEuMzkgMTYxLjY1IDI2OS44MCBDIDE2MS4zNyAyNzIuMTEgMTYwLjU0IDI3NC4yOSAxNTkuMzcgMjc2LjI5IEMgMTYwLjUyIDI3Ni4xOSAxNjEuNjggMjc2LjExIDE2Mi44MyAyNzYuMDMgQyAxNjUuMTAgMjcxLjI3IDE2Ni43MCAyNjYuMjQgMTY4LjA1IDI2MS4xNSBDIDE2NS42NCAyNTkuODQgMTYzLjMzIDI1OC4zMSAxNjAuNzYgMjU3LjM0IEMgMTU3LjU0IDI1Ni4zMSAxNTQuMTMgMjU2LjAyIDE1MC45NSAyNTQuODggQyAxNDcuODkgMjUzLjg3IDE0NS4wOSAyNTIuMjEgMTQyLjAzIDI1MS4yMSBDIDEzOC45NSAyNTQuMjYgMTM2LjcxIDI1OC4wNCAxMzQuMDkgMjYxLjQ4IEMgMTMyLjU5IDI2My40OCAxMzEuNDQgMjY1LjcxIDEzMC4yOCAyNjcuOTIgQyAxMzEuNjEgMjYzLjkyIDEzMy40MiAyNjAuMTAgMTM1Ljc2IDI1Ni41OSBDIDEzMC42OSAyNTYuNTQgMTI1LjYyIDI1Ni42MCAxMjAuNTUgMjU2LjU0IEMgMTIwLjU2IDI0Mi4xNCAxMjAuNjkgMjI3LjczIDEyMC40OSAyMTMuMzQgQyAxMjYuMDQgMjEzLjA5IDEzMS42MCAyMTMuMjcgMTM3LjE2IDIxMy4yMiBDIDEzNy4yNiAyMjYuODIgMTM2LjkwIDI0MC40MiAxMzcuMzQgMjU0LjAxIEMgMTQ1LjI5IDI0MC4zMCAxNTMuMDMgMjI1Ljk4IDE2NS4wNSAyMTUuMzMgQyAxNzMuMTYgMjA4LjMzIDE4NS40OSAyMDkuNjcgMTk0LjI1IDIxNC43NCBDIDE5OS4zNCAyMDUuNzIgMjAyLjcwIDE5NS44NiAyMDYuNzkgMTg2LjM3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDIxMS4xNCAxOTAuODkgQyAyMTEuODAgMTg5LjQwIDIxMi40OSAxODcuODcgMjEzLjc5IDE4Ni44MyBDIDIxMy4xMSAxODguNDcgMjEyLjI3IDE5MC4wNiAyMTIuMDkgMTkxLjg2IEMgMjEzLjQzIDE5MC42NyAyMTQuNjggMTg5LjM5IDIxNS45NSAxODguMTIgQyAyMTUuNDUgMTg5LjMyIDIxNC45NSAxOTAuNTMgMjE0LjQ2IDE5MS43NCBDIDIxNi44MiAxOTIuMjcgMjE4LjE1IDE4OS45MiAyMTkuODkgMTg4Ljk0IEMgMjE5LjQwIDE4OS44MCAyMTguNDIgMTkxLjU0IDIxNy45MyAxOTIuNDAgQyAyMTguNjQgMTkyLjEzIDIyMC4wNyAxOTEuNTggMjIwLjc5IDE5MS4zMSBDIDIyMS4wMyAxOTEuNjkgMjIxLjUxIDE5Mi40NiAyMjEuNzUgMTkyLjg0IEMgMjIyLjI2IDE5MS45NSAyMjMuMjcgMTkwLjE3IDIyMy43OCAxODkuMjggTCAyMjMuNjAgMTkzLjQ0IEMgMjI0Ljc2IDE5Mi4zNCAyMjUuODggMTkxLjIxIDIyNi45NiAxOTAuMDUgQyAyMjYuNzcgMTkwLjc5IDIyNi4zOSAxOTIuMjggMjI2LjIwIDE5My4wMyBMIDIyOC4yNCAxOTMuMzIgQyAyMjcuNjEgMTk0Ljg3IDIyNi45OCAxOTYuNDIgMjI2LjM5IDE5Ny45OSBDIDIyOC4wMiAxOTYuNzIgMjI5LjY0IDE5NS40MiAyMzEuMjEgMTk0LjA4IEMgMjMxLjg3IDE5My45NSAyMzMuMTkgMTkzLjY5IDIzMy44NSAxOTMuNTYgQyAyMzIuMTggMTk2LjUxIDIzMC41NSAxOTkuNDkgMjI5LjA0IDIwMi41MyBDIDIyMC41MyAyMDIuMzQgMjEyLjE4IDIwMC41OSAyMDMuNzQgMTk5LjY2IEMgMjA0LjU4IDE5Ni41MyAyMDUuNDUgMTkzLjQxIDIwNi4yOCAxOTAuMjggQyAyMDcuODkgMTkwLjQ4IDIwOS41MiAxOTAuNjkgMjExLjE0IDE5MC44OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyOTQuNDkgMjI5LjQ5IEMgMjk0LjQ5IDIyMC4yMSAyOTQuNDIgMjEwLjk0IDI5NC41MCAyMDEuNjcgQyAzMDAuMDYgMjAxLjY5IDMwNS42MiAyMDEuNzIgMzExLjE5IDIwMS42NyBDIDMxMS4xOCAyMDUuNTMgMzExLjE4IDIwOS4zOCAzMTEuMTggMjEzLjI0IEMgMzE4LjcyIDIxMy4yMCAzMjYuMjcgMjEzLjIzIDMzMy44MiAyMTMuMjMgQyAzMzMuODIgMjIwLjQ4IDMzMy44NiAyMjcuNzQgMzMzLjgwIDIzNS4wMCBDIDMzNC4xNyAyNDMuNTggMzIzLjA4IDI0Ny43OSAzMjQuMjkgMjU2LjU2IEMgMzE4LjEyIDI1Ni41NyAzMTEuOTUgMjU2LjU4IDMwNS43OCAyNTYuNTUgQyAzMDUuODYgMjUzLjk0IDMwNS4zOSAyNTEuMDMgMzA3LjA0IDI0OC43OCBDIDMwOS43OCAyNDQuNjIgMzEyLjkwIDI0MC43MSAzMTUuNTcgMjM2LjUwIEMgMzE2LjkzIDIzNC40MyAzMTYuMjcgMjMxLjgxIDMxNi41MCAyMjkuNDggQyAzMDkuMTYgMjI5LjUwIDMwMS44MiAyMjkuNDggMjk0LjQ5IDIyOS40OSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAwLjAwIDIwNy40NiBDIDEuNjIgMjI1Ljg1IDMuOTcgMjQ0LjMzIDkuODkgMjYxLjkwIEMgMjYuODEgMzE1LjA1IDY3LjQwIDM1OS43NiAxMTguMTYgMzgyLjY0IEMgMTQxLjEzIDM5My4xNCAxNjYuMTcgMzk4Ljc2IDE5MS4zNiA0MDAuMDAgTCAwLjAwIDQwMC4wMCBMIDAuMDAgMjA3LjQ2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM4Mi44MCAyODEuODYgQyAzOTMuMjkgMjU4LjkwIDM5OC41NyAyMzMuODYgNDAwLjAwIDIwOC43MyBMIDQwMC4wMCA0MDAuMDAgTCAyMTAuMjkgNDAwLjAwIEMgMjI0LjY4IDM5OC44OSAyMzkuMDggMzk3LjEwIDI1Mi45OSAzOTMuMTEgQyAzMDkuOTUgMzc3LjgzIDM1OC44MiAzMzUuNjggMzgyLjgwIDI4MS44NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSA3Mi41NSAyMTMuMjAgQyA4My4zOCAyMTMuMjUgOTQuMjEgMjEzLjIwIDEwNS4wNCAyMTMuMjMgQyAxMDguMDggMjEzLjI0IDExMS40MyAyMTMuOTcgMTEzLjQ4IDIxNi40MCBDIDExNS40MyAyMTguODEgMTE1LjU5IDIyMi4wMyAxMTUuNTkgMjI1LjAwIEMgMTE1LjU2IDIzNS41MSAxMTUuNTkgMjQ2LjAyIDExNS41OCAyNTYuNTQgQyAxMDkuOTkgMjU2LjU4IDEwNC40MCAyNTYuNTkgOTguODAgMjU2LjUyIEMgOTguNjggMjQ3LjIzIDk5LjMxIDIzNy44OCA5OC40NiAyMjguNjMgQyA5NS4zMyAyMjguNDUgOTIuMTkgMjI4LjQ1IDg5LjA1IDIyOC40MyBDIDg4LjYxIDIzNS44NyA4OS4yMCAyNDMuMzQgODguNzQgMjUwLjc4IEMgODguNTEgMjUzLjcwIDg2LjAyIDI1Ni4wNSA4My4xNSAyNTYuMzIgQyA3Ny42MyAyNTYuODYgNzIuMDYgMjU2LjQzIDY2LjUyIDI1Ni41NSBDIDY2LjU1IDI1MS4yNiA2Ni41MiAyNDUuOTYgNjYuNTQgMjQwLjY2IEMgNjguNDQgMjQwLjI5IDcxLjA3IDI0MS40NSA3Mi40OSAyMzkuNzkgQyA3Mi42NSAyMzAuOTMgNzIuNTEgMjIyLjA2IDcyLjU1IDIxMy4yMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyNDcuMjUgMjEzLjI1IEMgMjYxLjY5IDIxMy4yNCAyNzYuMTMgMjEzLjEzIDI5MC41NiAyMTMuMzEgQyAyOTAuMzcgMjI3LjcyIDI5MC41MSAyNDIuMTQgMjkwLjQ5IDI1Ni41NiBDIDI4NC45MiAyNTYuNTQgMjc5LjM1IDI1Ni42MyAyNzMuNzggMjU2LjUxIEMgMjczLjg2IDI0Ny4xNiAyNzMuNzMgMjM3LjgyIDI3My44NSAyMjguNDcgQyAyNzAuNDkgMjI4LjQ2IDI2Ny4xNCAyMjguNDQgMjYzLjc5IDIyOC41MSBDIDI2My44MyAyMzcuODYgMjYzLjc1IDI0Ny4yMiAyNjMuODQgMjU2LjU4IEMgMjU4LjMxIDI1Ni41NCAyNTIuNzkgMjU2LjU5IDI0Ny4yNyAyNTYuNTUgQyAyNDcuMjcgMjQyLjExIDI0Ny4zMCAyMjcuNjggMjQ3LjI1IDIxMy4yNSBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTcuMTAgMjE5LjEyIEMgMTk1Ljk5IDIxNy40OSAxOTYuMzYgMjE1LjcwIDE5Ny42NCAyMTQuMzEgQyAyMDQuNjMgMjE4LjM0IDIxMy4wMSAyMTguNTMgMjIwLjgzIDIxOS40MCBDIDIxOC4xMSAyMjQuNTEgMjE2LjUzIDIzMC4xMCAyMTQuNDggMjM1LjQ5IEMgMjA5LjIxIDIzNC43NSAyMDMuOTkgMjMzLjc1IDE5OC43MSAyMzMuMTQgQyAxOTguNjggMjI4LjQzIDE5OS40NCAyMjMuNDQgMTk3LjEwIDIxOS4xMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2VkMDgxZVwiIGQ9XCIgTSAxOTAuMDkgMjIzLjE0IEMgMTkyLjA0IDIyMS45NSAxOTMuMTQgMjE5Ljg0IDE5NS4wNiAyMTguNjEgQyAxOTcuMTYgMjI0LjUxIDE5Ni4yNyAyMzAuODggMTk1LjY5IDIzNi45NiBDIDE5MS4zNyAyMzUuMzEgMTg2LjcyIDIzNS4zMCAxODIuMTcgMjM1LjI3IEMgMTgzLjAyIDIzMC40NCAxODUuNjYgMjI1LjU0IDE5MC4wOSAyMjMuMTQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTUyLjQ5IDIzMy45MiBDIDE1NS44MiAyMzAuMjMgMTU4LjIyIDIyNS42OSAxNjIuMDkgMjIyLjUxIEMgMTY5LjE0IDIyMi40MCAxNzYuNjMgMjI0LjMzIDE4Mi4xOCAyMjguODIgQyAxNzkuNTEgMjMyLjU2IDE3Ni44OCAyMzYuMzggMTc1LjI4IDI0MC43MiBDIDE2Ny42NCAyMzguNjQgMTU5Ljk2IDIzNi41NiAxNTIuNDkgMjMzLjkyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZWQwODFlXCIgZD1cIiBNIDE5OS41NSAyNTAuMTUgQyAyMDIuNzAgMjUwLjg4IDIwNS44MSAyNTEuODIgMjA4Ljg5IDI1Mi44MSBDIDIwNi45OCAyNTYuMDIgMjA0LjQ4IDI1OS4xNSAyMDAuOTUgMjYwLjY1IEMgMTkxLjU1IDI2MS4zMSAxODIuMDIgMjU5LjM2IDE3My40NyAyNTUuNDMgQyAxNzMuNDcgMjU0Ljg0IDE3My40NyAyNTMuNjggMTczLjQ3IDI1My4wOSBDIDE4MS44MCAyNTUuMjMgMTkwLjQwIDI1Ny41MiAxOTkuMDMgMjU1LjY1IEMgMTk5LjI2IDI1My44MiAxOTkuNDIgMjUxLjk5IDE5OS41NSAyNTAuMTUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNlZDA4MWVcIiBkPVwiIE0gMTM0LjA5IDI2MS40OCBDIDEzNi43MSAyNTguMDQgMTM4Ljk1IDI1NC4yNiAxNDIuMDMgMjUxLjIxIEMgMTQ1LjA5IDI1Mi4yMSAxNDcuODkgMjUzLjg3IDE1MC45NSAyNTQuODggQyAxNTQuMTMgMjU2LjAyIDE1Ny41NCAyNTYuMzEgMTYwLjc2IDI1Ny4zNCBDIDE2My4zMyAyNTguMzEgMTY1LjY0IDI1OS44NCAxNjguMDUgMjYxLjE1IEMgMTY2LjcwIDI2Ni4yNCAxNjUuMTAgMjcxLjI3IDE2Mi44MyAyNzYuMDMgQyAxNjEuNjggMjc2LjExIDE2MC41MiAyNzYuMTkgMTU5LjM3IDI3Ni4yOSBDIDE2MC41NCAyNzQuMjkgMTYxLjM3IDI3Mi4xMSAxNjEuNjUgMjY5LjgwIEMgMTYwLjM4IDI3MS4zOSAxNTkuOTkgMjc0LjA1IDE1OC4wNSAyNzQuODYgQyAxNTYuNjAgMjczLjg5IDE1Ni4xNSAyNzEuODYgMTU0LjY2IDI3MC44MiBDIDE1NC44OCAyNzAuMzMgMTU1LjMzIDI2OS4zNCAxNTUuNTYgMjY4Ljg1IEMgMTU1LjE0IDI2OS4xNSAxNTQuMzEgMjY5Ljc1IDE1My44OSAyNzAuMDYgQyAxNTMuNDAgMjcwLjQyIDE1Mi40MSAyNzEuMTUgMTUxLjkyIDI3MS41MiBDIDE1MS4zOCAyNzEuMzggMTUwLjMwIDI3MS4xMiAxNDkuNzYgMjcwLjk5IEMgMTQ4LjU4IDI3Mi45MiAxNDcuMzEgMjc0Ljg2IDE0NS4zOCAyNzYuMTIgQyAxNDYuMTAgMjczLjM3IDE0OS43NiAyNzAuMjMgMTQ2LjQzIDI2Ny45MiBDIDE0Ni41NSAyNjYuODkgMTQ2LjY4IDI2NS44NyAxNDYuODAgMjY0Ljg2IEMgMTQ2LjAyIDI2NS45OCAxNDUuMjMgMjY3LjEwIDE0NC40NiAyNjguMjQgTCAxNDMuMzcgMjY5LjY2IEwgMTQzLjYwIDI2Ny4wNCBDIDE0My43OSAyNjYuMjIgMTQ0LjE3IDI2NC41NyAxNDQuMzYgMjYzLjc0IEMgMTQzLjQ5IDI2NC44OCAxNDIuNjIgMjY2LjAxIDE0MS43OSAyNjcuMTggQyAxNDEuMzYgMjY2LjYzIDE0MC41MCAyNjUuNTMgMTQwLjA3IDI2NC45NyBDIDE0MC41MiAyNjMuNTQgMTQxLjAwIDI2Mi4xMiAxNDEuNDcgMjYwLjcwIEMgMTQwLjg1IDI2MS41OCAxNDAuMjIgMjYyLjQ2IDEzOS42MCAyNjMuMzUgQyAxMzUuODMgMjYyLjk0IDEzNS4zOCAyNjcuMTYgMTMzLjA2IDI2OS4xMSBDIDEzMy43NyAyNjYuOTYgMTM0Ljc4IDI2NC45NCAxMzUuNzkgMjYyLjkyIEMgMTM1LjM3IDI2Mi41NiAxMzQuNTIgMjYxLjg0IDEzNC4wOSAyNjEuNDggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTM5LjYwIDI2My4zNSBDIDE0MC4yMiAyNjIuNDYgMTQwLjg1IDI2MS41OCAxNDEuNDcgMjYwLjcwIEMgMTQxLjAwIDI2Mi4xMiAxNDAuNTIgMjYzLjU0IDE0MC4wNyAyNjQuOTcgQyAxMzkuNDYgMjY3LjYxIDEzNy43MCAyNjkuNzYgMTM1LjIyIDI3MC44MyBDIDEzNi41NSAyNjguMjYgMTM4LjExIDI2NS44MiAxMzkuNjAgMjYzLjM1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDM2LjE2IDI2My4xNiBDIDM3LjExIDI2Mi44MSAzOC4wNiAyNjIuNDcgMzkuMDEgMjYyLjE0IEMgNDAuMjIgMjY2LjE1IDQzLjUwIDI2OS43NyA0My4yNCAyNzQuMDYgQyA0MC41MCAyNzYuMTQgMzcuMTkgMjc3LjI4IDM0LjE4IDI3OC45MCBDIDMzLjQxIDI3Ny4zMyAzMi42MyAyNzUuNzYgMzEuODkgMjc0LjE4IEMgMzQuMzYgMjczLjAxIDM2LjgzIDI3MS44NiAzOS4zMSAyNzAuNzMgQyAzOC4yOCAyNjguMTkgMzcuMjAgMjY1LjY5IDM2LjE2IDI2My4xNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNTcuODkgMjYyLjU2IEMgMzU5LjU1IDI2My4yMSAzNjEuMjAgMjYzLjg3IDM2Mi44NyAyNjQuNTIgQyAzNjMuMTQgMjY1LjkyIDM2My4xOSAyNjcuMzQgMzYzLjA2IDI2OC43NiBDIDM2NC45NiAyNjcuOTcgMzY2Ljg0IDI2Ny4xNCAzNjguNzMgMjY2LjMxIEMgMzY3Ljk2IDI2OC4wNCAzNjcuMTkgMjY5Ljc3IDM2Ni40NyAyNzEuNTIgQyAzNjMuODkgMjcyLjcyIDM2MS4yNCAyNzMuNzQgMzU4LjYxIDI3NC44MCBDIDM2MC4xMiAyNzUuODQgMzYxLjc4IDI3Ni42MiAzNjMuNDkgMjc3LjI2IEMgMzYyLjgxIDI3OC45MCAzNjIuMTAgMjgwLjUyIDM2MS4zOCAyODIuMTQgQyAzNTkuNDQgMjgxLjI0IDM1Ny41NiAyODAuMjIgMzU1LjczIDI3OS4xNCBDIDM1NS43NSAyNzguMjkgMzU1Ljc5IDI3Ni41OCAzNTUuODIgMjc1LjcyIEMgMzU0LjIzIDI3Ni4zMiAzNTIuNjQgMjc2LjkyIDM1MS4wNiAyNzcuNTIgQyAzNTEuNjggMjc1Ljg2IDM1Mi4xNiAyNzQuMDMgMzUzLjQyIDI3Mi43MyBDIDM1NS44MiAyNzEuNjAgMzU4LjM3IDI3MC44MSAzNjAuODMgMjY5LjgxIEMgMzU5LjMzIDI2OC42NCAzNTcuNjIgMjY3LjgwIDM1NS44NyAyNjcuMDcgQyAzNTYuNTUgMjY1LjU2IDM1Ny4yMiAyNjQuMDYgMzU3Ljg5IDI2Mi41NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAxNDEuNzkgMjY3LjE4IEMgMTQyLjYyIDI2Ni4wMSAxNDMuNDkgMjY0Ljg4IDE0NC4zNiAyNjMuNzQgQyAxNDQuMTcgMjY0LjU3IDE0My43OSAyNjYuMjIgMTQzLjYwIDI2Ny4wNCBDIDE0Mi44MyAyNjkuNDUgMTQxLjk4IDI3Mi4zNSAxMzkuMzAgMjczLjIyIEMgMTQwLjA3IDI3MS4xOCAxNDAuNzcgMjY5LjEwIDE0MS43OSAyNjcuMTggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTQ0LjQ2IDI2OC4yNCBDIDE0NS4yMyAyNjcuMTAgMTQ2LjAyIDI2NS45OCAxNDYuODAgMjY0Ljg2IEMgMTQ2LjY4IDI2NS44NyAxNDYuNTUgMjY2Ljg5IDE0Ni40MyAyNjcuOTIgQyAxNDUuNzEgMjY5Ljg2IDE0NC45MSAyNzEuNzcgMTQ0LjIwIDI3My43MSBDIDE0My45OCAyNzMuNjggMTQzLjU0IDI3My42MCAxNDMuMzIgMjczLjU2IEMgMTQzLjY3IDI3MS43OCAxNDMuOTEgMjY5Ljk3IDE0NC40NiAyNjguMjQgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzkuNjMgMjc5LjI5IEMgNDEuNjIgMjc4LjI0IDQzLjYwIDI3Ny4xNyA0NS42MCAyNzYuMTQgQyA0Ni4zNiAyNzcuNTkgNDcuMTMgMjc5LjA1IDQ3Ljg4IDI4MC41MSBDIDQ1Ljg4IDI4MS41OSA0My44OSAyODIuNjYgNDEuODcgMjgzLjcwIEMgNDEuMTMgMjgyLjIzIDQwLjM4IDI4MC43NiAzOS42MyAyNzkuMjkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMzE1LjEyIDI3NS44OCBDIDMxNi41NSAyNzcuODUgMzE3LjMzIDI4MC4xOCAzMTguMTMgMjgyLjQ2IEMgMzE4LjYzIDI4MS4xMyAzMTkuMTYgMjc5LjgxIDMxOS43MiAyNzguNTAgQyAzMTkuNjggMjgyLjQyIDMxOC44MCAyODYuODAgMzIyLjA1IDI4OS43NiBMIDMyMi4xNSAyODkuOTAgQyAzMjEuNTQgMjkwLjU3IDMyMC45NCAyOTEuMjYgMzIwLjM1IDI5MS45NSBDIDMxOC4xOSAyODguNjcgMzE2LjE1IDI4NC41NCAzMTEuNzAgMjg0LjIzIEMgMzEyLjgyIDI4My45MyAzMTMuOTUgMjgzLjY0IDMxNS4wOCAyODMuMzUgQyAzMTMuNjEgMjgyLjc1IDMxMi4zNSAyODEuODcgMzExLjMwIDI4MC42OSBDIDMxMi43OCAyODEuMjAgMzE0LjIzIDI4MS43NyAzMTUuNjcgMjgyLjM5IEMgMzE0LjQ0IDI4MC44NyAzMTMuMjIgMjc5LjM2IDMxMi4xOCAyNzcuNzIgQyAzMTMuODAgMjc4LjY0IDMxNS4zMSAyNzkuNzMgMzE2LjcxIDI4MS4wMCBDIDMxNi4zMSAyNzkuNzIgMzE1LjUyIDI3Ny4xNiAzMTUuMTIgMjc1Ljg4IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDc3Ljg5IDI4OS4wMiBDIDgyLjY3IDI4NS45MyA4Ni42NiAyODEuODMgODkuNzcgMjc3LjA3IEMgOTAuMTggMjc3LjM5IDkxLjAxIDI3OC4wMiA5MS40MiAyNzguMzQgQyA5MS43MCAyNzkuMTEgOTIuMjYgMjgwLjY0IDkyLjUzIDI4MS40MCBDIDg5LjE4IDI4NS4xMCA4NS4xMiAyODguMTIgODEuMDkgMjkxLjA0IEMgODEuMjUgMjkyLjIzIDgxLjUwIDI5My40MSA4MS43MyAyOTQuNjAgQyA4My4yNiAyOTMuOTQgODQuODEgMjkzLjg3IDg2LjQwIDI5NC40MCBDIDg3LjM3IDI5Ni42NSA4OC40MCAyOTguOTMgODguMzQgMzAxLjQ1IEMgODUuODUgMjk5LjU5IDg0LjM5IDI5Ni41NSA4MS41MyAyOTUuMTkgQyA4MC4xMyAyOTMuMjQgNzkuNDMgMjkwLjg4IDc3Ljg5IDI4OS4wMiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNDMuNzIgMjg5LjczIEMgMzQ2LjAzIDI4Ni4yNyAzNDcuMzcgMjgxLjkyIDM1MC44NSAyNzkuNDEgQyAzNTMuOTIgMjgxLjAxIDM1Ni45MyAyODIuNzIgMzU5Ljk1IDI4NC40MyBDIDM1OS4xNCAyODUuOTMgMzU4LjMxIDI4Ny40MSAzNTcuNDggMjg4Ljg5IEMgMzU1LjA1IDI4Ny41MCAzNTIuNjUgMjg2LjA0IDM1MC4xNSAyODQuODAgQyAzNDguOTUgMjg2Ljk5IDM0Ny42MCAyODkuMTAgMzQ2LjIzIDI5MS4xOSBDIDM0NS42MCAyOTAuODMgMzQ0LjM1IDI5MC4xMCAzNDMuNzIgMjg5LjczIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDQzLjQyIDI4OS41NiBDIDQ1LjQ5IDI4Ny40NSA0Ny4zNiAyODUuMTYgNDkuMjAgMjgyLjg1IEMgNTAuMDkgMjg0LjI3IDUwLjk3IDI4NS43MCA1MS44NiAyODcuMTIgQyA0OS44OCAyODkuMzQgNDcuNzYgMjkxLjQ2IDQ2LjE0IDI5My45NiBDIDQ2LjUzIDI5NC4zNyA0Ny4zMSAyOTUuMTggNDcuNzAgMjk1LjU5IEMgNDkuOTEgMjk0LjEzIDUyLjEwIDI5Mi42NSA1NC4xOSAyOTEuMDMgQyA1NS4xNiAyOTIuMzEgNTYuMTQgMjkzLjU4IDU2LjkxIDI5NS4wMCBDIDUzLjg4IDI5Ni44MyA1MC43NCAzMDEuMjggNDYuODUgMjk5LjQwIEMgNDMuNDQgMjk2LjMzIDQxLjU1IDI5MS45NSAzOS4yMCAyODguMDggQyAzOS44OSAyODcuNzMgNDEuMjcgMjg3LjA0IDQxLjk3IDI4Ni42OSBDIDQyLjMzIDI4Ny40MSA0My4wNiAyODguODQgNDMuNDIgMjg5LjU2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjMDEwMTAxXCIgZD1cIiBNIDk3Ljg2IDI4OC4wMCBDIDEwMC42MSAyODYuNDQgMTAzLjUyIDI4NS4xOSAxMDYuMTYgMjgzLjQzIEMgMTA2LjI5IDI4NC4wOSAxMDYuNTYgMjg1LjQwIDEwNi42OSAyODYuMDUgQyAxMDQuMTAgMjg4LjA3IDEwMS4xOSAyODkuNjEgOTguMzcgMjkxLjI2IEMgOTcuMzIgMjk3LjYyIDk4LjA3IDMwNC4wOCA5Ny4yNCAzMTAuNDYgQyA5NS42MyAzMDkuMzEgOTQuMTEgMzA4LjA1IDkyLjY0IDMwNi43MyBDIDkyLjg1IDMwMi41NSA5My40MCAyOTguMzggOTQuNTYgMjk0LjM1IEMgOTUuMjIgMjkyLjA3IDk1LjcwIDI4OS4zNiA5Ny44NiAyODguMDAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMzA2LjQ3IDI4Ni43NiBDIDMwNi45MiAyODQuODIgMzA4LjU5IDI4NS4yMyAzMDkuMjggMjg2Ljc4IEMgMzA5LjU5IDI4Ni42NCAzMTAuMjMgMjg2LjM0IDMxMC41NSAyODYuMTkgQyAzMTEuMTMgMjkwLjQxIDMxMi41OCAyOTQuNTYgMzE2LjE1IDI5Ny4xNSBDIDMxNS4zNyAyOTguMDEgMzE0LjU5IDI5OC44NiAzMTMuODEgMjk5LjcyIEMgMzExLjQ3IDI5Ni43NCAzMDguNDcgMjk0LjQxIDMwNS40MSAyOTIuMjIgQyAzMDYuMjcgMjkyLjIzIDMwNy45NyAyOTIuMjUgMzA4LjgyIDI5Mi4yNiBDIDMwNy43MSAyOTAuOTggMzA2LjU5IDI4OS43MiAzMDUuNDkgMjg4LjQ0IEMgMzA2LjE0IDI4OC41NSAzMDcuNDUgMjg4Ljc1IDMwOC4xMCAyODguODYgQyAzMDcuNjkgMjg4LjMzIDMwNi44OCAyODcuMjkgMzA2LjQ3IDI4Ni43NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyNzguNzggMjkyLjAwIEMgMjgwLjE2IDI5MC4xNyAyODAuNTMgMjg3Ljk0IDI4MC45NSAyODUuNzUgQyAyODIuMzkgMjkzLjc5IDI4Ni4zOSAzMDAuOTEgMjkwLjE3IDMwOC4wMyBDIDI5MS4yMCAzMDMuOTEgMjkyLjE1IDI5OS43NSAyOTMuNjggMjk1Ljc3IEMgMjkzLjM1IDI5NC45MiAyOTMuMDIgMjk0LjA3IDI5Mi43MCAyOTMuMjMgQyAyOTMuMDIgMjkxLjkzIDI5My4zNCAyOTAuNjMgMjkzLjY3IDI4OS4zMyBDIDI5NS4zNSAyODkuNTAgMjk3LjE3IDI4OS40NyAyOTguNTggMjkwLjU3IEMgMzAyLjExIDI5Mi45MSAzMDUuNzggMjk1LjA3IDMwOS4wNyAyOTcuNzYgQyAzMTAuNjQgMjk4LjgyIDMxMC45MyAzMDAuODAgMzExLjYwIDMwMi40NCBDIDMxMC4yNCAzMDMuNzggMzA4LjkyIDMwNS4xNSAzMDcuNjMgMzA2LjU2IEMgMzA3LjUwIDMwNS4zNyAzMDcuMzYgMzA0LjE4IDMwNy4yMyAzMDMuMDAgQyAzMDQuMDcgMzAwLjgyIDMwMS45NSAyOTcuNTEgMjk4Ljg3IDI5NS4yNyBDIDI5Ny4xMSAyOTUuMjggMjk1LjQ2IDI5NS45OSAyOTMuNzggMjk2LjQwIEMgMjkzLjYyIDI5OC4xMCAyOTMuNDMgMjk5LjgxIDI5My4yMiAzMDEuNTEgQyAyOTQuMzIgMzAxLjk1IDI5NS40MiAzMDIuNDEgMjk2LjUzIDMwMi44NyBDIDI5NS41NyAzMDQuMDUgMjk0LjYzIDMwNS4yMyAyOTMuNjMgMzA2LjM2IEMgMjkzLjA0IDMwOC41MiAyOTIuMTUgMzEwLjU3IDI5MS4zNSAzMTIuNjUgQyAyOTEuODggMzEyLjc2IDI5Mi45NCAzMTIuOTggMjkzLjQ3IDMxMy4wOSBDIDI5Mi4zNyAzMTUuMTIgMjkzLjI3IDMxNy4yOSAyOTMuNjMgMzE5LjM3IEMgMjcyLjk1IDMzNC44NiAyNDguNzYgMzQ2LjA3IDIyMy4wNyAzNDkuNzMgQyAxOTYuOTIgMzUzLjM1IDE2OS42NiAzNTEuMDQgMTQ1LjEwIDM0MS4wNSBDIDEzNC41NiAzMzcuMTcgMTI0Ljk1IDMzMS4zMyAxMTUuMjggMzI1Ljc0IEMgMTE1LjQ0IDMyNS41NiAxMTUuNzUgMzI1LjIwIDExNS45MSAzMjUuMDIgQyAxMTYuMTIgMzI0Ljk3IDExNi41NSAzMjQuODcgMTE2Ljc2IDMyNC44MiBDIDExNS44MyAzMjIuMjUgMTE2LjAxIDMxOS41NCAxMTYuNTUgMzE2LjkyIEMgMTE3LjE0IDMxNi4wMiAxMTcuNjggMzE1LjA5IDExOC4xOCAzMTQuMTQgQyAxMTguNzQgMzEyLjA1IDExNS40MyAzMTUuMTIgMTE0LjQ0IDMxNS4xNiBDIDExMy43NyAzMTguMjggMTEzLjI5IDMyMS44OSAxMTUuMTAgMzI0Ljc1IEMgMTE0LjkzIDMyNC44NyAxMTQuNjAgMzI1LjEzIDExNC40MyAzMjUuMjYgQyAxMDguODEgMzIwLjU3IDEwMy4wNiAzMTYuMDAgOTcuMzQgMzExLjQ0IEMgMTAwLjQ0IDMxMC4wMyAxMDMuODUgMzA4Ljc5IDEwNi4yMiAzMDYuMjQgQyAxMDcuOTEgMzAyLjk1IDEwOS4yOSAyOTkuNDQgMTExLjY4IDI5Ni41NiBDIDExMS4yOCAyOTguMjggMTEwLjY4IDI5OS45NSAxMTAuMTAgMzAxLjYzIEMgMTEwLjc1IDMwMS45MCAxMTIuMDQgMzAyLjQ1IDExMi42OSAzMDIuNzIgQyAxMTEuOTggMzAzLjU4IDExMS4xOSAzMDQuMzggMTEwLjM5IDMwNS4xNSBDIDEwOS40NiAzMDYuOTAgMTA4LjI4IDMwOC41MCAxMDYuOTUgMzA5Ljk3IEMgMTA4LjMwIDMxMC4yNiAxMDkuNjQgMzEwLjU5IDExMC45OCAzMTAuOTggQyAxMTEuNjAgMzA3LjU3IDExMi44NSAzMDQuMzMgMTE0LjA0IDMwMS4xMCBDIDExNS40OCAyOTguMDEgMTEyLjQ1IDI5NS4wNyAxMTMuMjEgMjkxLjg3IEMgMTEyLjU5IDI4OS41NiAxMTQuOTcgMjg5LjY3IDExNS4zOCAyOTEuOTUgQyAxMTUuODAgMjkxLjQzIDExNi42NiAyOTAuMzkgMTE3LjA5IDI4OS44OCBDIDExNi44OSAyOTAuODQgMTE2LjUxIDI5Mi43NyAxMTYuMzIgMjkzLjc0IEMgMTE3LjE0IDI5Mi45MSAxMTguNzggMjkxLjI3IDExOS42MCAyOTAuNDUgQyAxMTkuMDggMjkxLjQwIDExOC4wNCAyOTMuMzAgMTE3LjUyIDI5NC4yNSBDIDExOC4yOCAyOTMuOTAgMTE5LjgyIDI5My4yMiAxMjAuNTggMjkyLjg3IEMgMTE3LjMxIDI5OC40NCAxMTYuMzEgMzA0LjkxIDExNS4xOSAzMTEuMTYgQyAxMTguODggMzEwLjQzIDEyMi4zNiAzMDguODIgMTI0Ljk4IDMwNi4wNiBDIDEyNC41MSAzMDUuNTUgMTIzLjU3IDMwNC41MyAxMjMuMTAgMzA0LjAyIEMgMTIzLjgzIDMwMy4zNyAxMjUuMzAgMzAyLjA3IDEyNi4wMyAzMDEuNDIgQyAxMjUuMjIgMzAxLjQ2IDEyMy42MCAzMDEuNTMgMTIyLjc4IDMwMS41NyBDIDEyNC42NCAyOTkuODEgMTI2LjM2IDI5Ny45MSAxMjcuNjcgMjk1LjcxIEMgMTI3LjA4IDI5OC4zMyAxMjcuMzYgMzAwLjk5IDEyNy45NCAzMDMuNTkgQyAxMjguOTkgMzAzLjk2IDEzMS4xMSAzMDQuNzAgMTMyLjE2IDMwNS4wOCBDIDEzMS4wMyAzMDUuODMgMTI5Ljg5IDMwNi41OCAxMjguNzUgMzA3LjMyIEwgMTMxLjgyIDMwNy4wNiBDIDEzMS4wOCAzMDcuODAgMTI5LjU4IDMwOS4yNyAxMjguODMgMzEwLjAwIEMgMTI5LjkwIDMxNC4yMyAxMzEuNzggMzE4LjE5IDEzMy4wMyAzMjIuMzYgQyAxMzMuNjIgMzIwLjk5IDEzNC4xNiAzMTkuNTkgMTM0LjY1IDMxOC4xOCBMIDEzNS4zOCAzMTguNTYgQyAxMzYuNzQgMzEzLjc5IDEzOS4xNCAzMDkuNDQgMTQwLjk3IDMwNC44NSBDIDE0Ni45MCAzMDEuNzkgMTUzLjUwIDMwMC4zNyAxNTkuNzEgMjk4LjAxIEMgMTYwLjg3IDMwMC4zNCAxNjAuNTcgMzAyLjgwIDE1OS4xOCAzMDQuOTcgQyAxNTcuNzMgMzA0LjIxIDE1Ni4zMCAzMDMuNDMgMTU0Ljg4IDMwMi42MyBDIDE1MS4wMiAzMDMuNjggMTQ3LjczIDMwNS45OSAxNDQuNDMgMzA4LjE0IEMgMTQzLjU5IDMxMS42NiAxNDIuOTggMzE1LjI1IDE0My41MCAzMTguODggQyAxNDMuOTcgMzE4Ljc2IDE0NC45MiAzMTguNTQgMTQ1LjM5IDMxOC40MyBDIDE0NS41NiAzMTYuMjMgMTQ1LjU4IDMxNC4wMiAxNDUuODggMzExLjgzIEMgMTQ2LjI2IDMwOC44MyAxNDguNzQgMzA2LjU5IDE1MS4zNCAzMDUuMzQgQyAxNTMuNTEgMzA1LjA5IDE1NS4wOCAzMDYuOTUgMTU2LjgxIDMwNy45NSBDIDE1Ni44NCAzMDkuMzQgMTU2Ljg3IDMxMC43NCAxNTYuOTEgMzEyLjE0IEMgMTU2LjA4IDMxMy4wNSAxNTUuMjYgMzEzLjk1IDE1NC40MyAzMTQuODcgQyAxNTQuNjYgMzE3LjU2IDE1NS4wMyAzMjAuMjQgMTU1LjQzIDMyMi45MSBDIDE1Ny45NyAzMjEuMjMgMTYwLjk4IDMyMC45MSAxNjMuOTYgMzIxLjE1IEMgMTY0Ljk0IDMyMS44OCAxNjUuOTIgMzIyLjYyIDE2Ni45MCAzMjMuMzcgQyAxNjguNzcgMzIxLjQwIDE3MC44NCAzMTkuNTkgMTcyLjM1IDMxNy4zMiBDIDE3My40OCAzMTUuMjcgMTczLjk0IDMxMi45MyAxNzUuMDEgMzEwLjg1IEMgMTc1LjI5IDMxMS43NSAxNzUuODQgMzEzLjUzIDE3Ni4xMiAzMTQuNDMgQyAxNzYuNjMgMzEzLjE5IDE3Ni4xNyAzMTEuOTYgMTc1LjgxIDMxMC43OCBDIDE3Ni43MyAzMTAuNTYgMTc3LjY1IDMxMC4zOCAxNzguNTggMzEwLjIyIEMgMTc4LjcxIDMxMS44MyAxNzguNzcgMzEzLjQ0IDE3OC43MCAzMTUuMDYgQyAxNzMuNTMgMzE3LjAyIDE3Mi4wMCAzMjIuODMgMTY5LjI1IDMyNy4xMCBDIDE3MC4wNSAzMjguNjkgMTcxLjAyIDMzMC4xOSAxNzEuOTEgMzMxLjc0IEMgMTc3LjA5IDMyNC4yNyAxODIuNjkgMzE2LjM1IDE4My41MSAzMDcuMDEgQyAxODQuNjQgMzA3LjU4IDE4Ni4xOSAzMDcuNzUgMTg2Ljc5IDMwOS4wNCBDIDE4Ny4zNCAzMTAuNzAgMTg2LjI4IDMxMi4yNSAxODUuNjYgMzEzLjczIEMgMTgzLjg5IDMxNy4zMCAxODIuNTIgMzIxLjA2IDE4MC44NSAzMjQuNjggQyAxODEuNzIgMzI0LjYyIDE4My40NiAzMjQuNTIgMTg0LjMyIDMyNC40NyBDIDE4NC42NSAzMjQuNzMgMTg1LjMxIDMyNS4yNyAxODUuNjMgMzI1LjU0IEMgMTg3LjQzIDMyNC4zNCAxODkuMjggMzIzLjIxIDE5MC45OSAzMjEuODkgQyAxOTMuNTYgMzE5Ljk4IDE5NC40OCAzMTYuNzYgMTk2LjQyIDMxNC4zNCBDIDE5Ny4zOSAzMTIuNjIgMTk5LjcxIDMxMy40OCAyMDEuMjggMzEzLjA1IEMgMjAxLjA3IDMxMy4zOSAyMDAuNjQgMzE0LjA2IDIwMC40MiAzMTQuNDAgQyAyMDAuNDEgMzE1Ljc4IDIwMS4xMSAzMTcuNjAgMTk5LjUxIDMxOC4zOCBDIDE5NS41NSAzMjEuMDkgMTkxLjc4IDMyNC4wNSAxODguMzkgMzI3LjQ2IEMgMTg4Ljc1IDMyOS45MyAxODguODQgMzMyLjQ0IDE4OS4zMSAzMzQuOTAgQyAxODkuODUgMzM2LjU0IDE5MS42NCAzMzcuMTkgMTkyLjkxIDMzOC4xNSBDIDE5Mi4xMSAzMzYuMzUgMTkxLjE2IDMzNC42MiAxOTAuNDMgMzMyLjc5IEMgMTg5LjcwIDMyOS45NSAxOTAuODYgMzI3LjEzIDE5MS43NiAzMjQuNDkgQyAxOTMuOTEgMzI0LjMxIDE5Ni41MiAzMjIuOTggMTk4LjM4IDMyNC42OSBDIDIwMC4xOSAzMjYuNjIgMjAxLjY3IDMyOC45MiAyMDQuMTEgMzMwLjE2IEMgMjA0Ljg0IDMzMS4xNSAyMDUuNTYgMzMyLjE0IDIwNi4zMCAzMzMuMTMgQyAyMDYuNDcgMzI3LjQzIDIwNC4zNCAzMjEuNzMgMjA1LjU4IDMxNi4wNiBDIDIwNS43NCAzMTQuOTMgMjA2Ljg0IDMxNC4zMyAyMDcuNTUgMzEzLjU3IEMgMjA3Ljk0IDMxNC45NyAyMDguMzIgMzE2LjM4IDIwOC42NyAzMTcuODAgQyAyMDguMDcgMzE5LjMyIDIwNi42OCAzMjAuODYgMjA3LjQwIDMyMi42MCBDIDIwOC4zNyAzMjQuNDEgMjEwLjk3IDMyNS4yMiAyMTAuNDQgMzI3Ljc0IEMgMjEyLjM3IDMyNS43NiAyMTUuMDUgMzI1LjE3IDIxNy42NSAzMjQuNjAgQyAyMTcuMDAgMzIzLjY5IDIxNi4zNyAzMjIuNzcgMjE1Ljc0IDMyMS44NiBDIDIxNC40NSAzMjEuMzAgMjEzLjE4IDMyMC42OCAyMTEuOTIgMzIwLjA0IEMgMjEyLjc3IDMxOS4xOSAyMTMuNjQgMzE4LjM0IDIxNC41MSAzMTcuNTAgQyAyMTMuOTAgMzE1Ljk4IDIxMy4zNCAzMTQuNDUgMjEyLjg3IDMxMi45MCBDIDIxNS41NSAzMTUuOTEgMjE3LjMyIDMxOS42MiAyMjAuMTQgMzIyLjUyIEMgMjIyLjgxIDMxNy43OCAyMTkuNzcgMzEyLjExIDIyMi42NCAzMDcuNDkgQyAyMjMuMDcgMzA3LjUxIDIyMy45MyAzMDcuNTYgMjI0LjM2IDMwNy41OCBDIDIyNC45NCAzMDkuNDAgMjI1LjUzIDMxMS4yMiAyMjYuMjcgMzEyLjk4IEMgMjIyLjQ5IDMxNy44OSAyMjQuOTcgMzI0LjA2IDIyNS41NyAzMjkuNTYgQyAyMjYuMzggMzI5LjMzIDIyOC4wMSAzMjguODcgMjI4LjgyIDMyOC42NCBDIDIzMS43OSAzMjEuMDEgMjM0LjYzIDMxMi44OCAyMzMuMzkgMzA0LjU0IEMgMjM0LjYwIDMwNS4yMSAyMzcuNjUgMzA0LjkxIDIzNy41MiAzMDcuMDEgQyAyMzcuMjcgMzExLjU0IDIzNS42NSAzMTUuOTAgMjM1LjMxIDMyMC40NSBDIDIzNi4wOCAzMjAuMjAgMjM2Ljg0IDMxOS45NSAyMzcuNjEgMzE5LjcxIEMgMjM2LjU3IDMxNi4yMCAyMzguMjIgMzEyLjYzIDI0MS43MyAzMTEuNDYgQyAyNDIuOTAgMzEyLjIzIDI0NC4wOCAzMTMuMDAgMjQ1LjI2IDMxMy43NiBDIDI0NS43MiAzMTYuMzIgMjQ2LjI5IDMxOC44NiAyNDYuNzcgMzIxLjQxIEMgMjQ5Ljc3IDMyMi4zOCAyNTIuNDIgMzI0LjExIDI1NS4xOSAzMjUuNTkgQyAyNTYuNDIgMzI0LjM1IDI1Ny42MiAzMjMuMDcgMjU4LjgwIDMyMS43OCBDIDI1OC44NiAzMTkuMDggMjU4LjkxIDMxNi4zOSAyNTguODkgMzEzLjY5IEMgMjU2LjgzIDMxMi40OCAyNTQuODQgMzExLjE3IDI1My4wMCAzMDkuNjUgQyAyNTQuNDAgMzA5LjY2IDI1NS44MCAzMDkuNzAgMjU3LjIwIDMwOS43NiBDIDI1Ni4yOCAzMDYuNjUgMjU2LjA3IDMwMy4zOSAyNTYuMDkgMzAwLjE2IEMgMjU3Ljc4IDMwMS4wMyAyNTguNzEgMzAyLjY2IDI1OS41NCAzMDQuMjggQyAyNTkuNzcgMzAyLjk3IDI2MC4wMiAzMDEuNjYgMjYwLjI4IDMwMC4zNiBDIDI2MS41MiAzMDUuMzQgMjYxLjc3IDMxMC45NiAyNjUuODYgMzE0LjYyIEMgMjY2Ljc0IDMxMi43OCAyNjcuMjIgMzEwLjUxIDI2OS4xMyAzMDkuNDMgQyAyNzIuMTYgMzA3LjM1IDI3NC44NyAzMDQuODEgMjc4LjA2IDMwMi45NCBDIDI3Ny41OSAzMDUuMzggMjc1LjU0IDMwNi44MiAyNzMuNjcgMzA4LjE5IEMgMjc1LjU2IDMwOS41NiAyNzYuODkgMzExLjUxIDI3OC4yMyAzMTMuMzkgQyAyNzguNTIgMzEyLjg3IDI3OS4xMCAzMTEuODEgMjc5LjM5IDMxMS4yOCBDIDI4MC41NCAzMTAuOTIgMjgxLjcwIDMxMC41OCAyODIuODcgMzEwLjI0IEMgMjg0LjA2IDMxMC45MSAyODUuMjUgMzExLjU3IDI4Ni40NSAzMTIuMjQgQyAyODQuOTYgMzA4Ljk1IDI4My44NiAzMDUuNTAgMjgyLjU5IDMwMi4xMiBDIDI4MS44MiAyOTkuNTcgMjc4LjU4IDI5OC43NCAyNzguMDUgMjk2LjA5IEMgMjc3LjM3IDI5My4yMyAyNzYuMjIgMjkwLjUyIDI3NS4zOCAyODcuNzEgQyAyNzYuODIgMjg4Ljg4IDI3Ny43OCAyOTAuNDcgMjc4Ljc4IDI5Mi4wMCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzNDIuNDUgMjkxLjMyIEMgMzQ1LjczIDI5My4zOCAzNDguOTUgMjk1LjUxIDM1Mi4xMCAyOTcuNzcgQyAzNTEuMTkgMjk5LjAwIDM1MC4zMCAzMDAuMjQgMzQ5LjM5IDMwMS40OCBDIDM0OC44MyAzMDEuMDcgMzQ3LjcwIDMwMC4yNSAzNDcuMTQgMjk5Ljg0IEMgMzQ3LjE2IDMwMS44MiAzNDcuNjUgMzAzLjkzIDM0Ni43MyAzMDUuODAgQyAzNDUuNDQgMzA2LjAxIDM0NC40OCAzMDUuMDQgMzQzLjQ3IDMwNC40NiBDIDM0NC4zNCAzMDEuOTUgMzQ1LjQ2IDI5OC43MiAzNDIuNzkgMjk2LjgzIEMgMzQxLjU0IDI5Ny45OSAzNDAuODEgMzAwLjA4IDMzOS4yMiAzMDAuNjYgQyAzMzguNjYgMzAwLjI5IDMzNy41NSAyOTkuNTQgMzM3LjAwIDI5OS4xNyBDIDMzOC45NCAyOTYuNjUgMzQwLjgwIDI5NC4wNSAzNDIuNDUgMjkxLjMyIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDU1LjU2IDI5OC4zOSBDIDU3LjMzIDI5Ni45NSA1OS4xOCAyOTUuNjEgNjEuMDQgMjk0LjI4IEMgNjEuOTQgMjk1LjU0IDYyLjg2IDI5Ni43OSA2My43OSAyOTguMDMgQyA2Mi43NyAyOTguNzQgNjEuNzYgMjk5LjQ0IDYwLjc0IDMwMC4xNSBDIDYyLjM4IDMwMi4zNCA2NC4wNyAzMDQuNDkgNjUuNzcgMzA2LjYzIEMgNjQuMjYgMzA3Ljg4IDYyLjg0IDMwOS4yNCA2MS4xNiAzMTAuMjcgQyA1OC44MCAzMTAuMzkgNTYuNDMgMzEwLjEyIDU0LjA3IDMxMC4yNyBDIDUzLjA4IDMwOS4wMiA1Mi4wOSAzMDcuNzcgNTEuMTQgMzA2LjQ5IEMgNTMuNDAgMzA1LjMwIDU1Ljg4IDMwNi4xOCA1OC4yMyAzMDYuNTEgQyA1OC44MSAzMDYuMTUgNTkuOTkgMzA1LjQzIDYwLjU3IDMwNS4wNyBDIDU4Ljg5IDMwMi44NSA1Ny4yMyAzMDAuNjIgNTUuNTYgMjk4LjM5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI5My43OCAyOTYuNDAgQyAyOTUuNDYgMjk1Ljk5IDI5Ny4xMSAyOTUuMjggMjk4Ljg3IDI5NS4yNyBDIDMwMS45NSAyOTcuNTEgMzA0LjA3IDMwMC44MiAzMDcuMjMgMzAzLjAwIEMgMzA3LjM2IDMwNC4xOCAzMDcuNTAgMzA1LjM3IDMwNy42MyAzMDYuNTYgQyAzMDYuOTMgMzA3LjIxIDMwNi4yMiAzMDcuODcgMzA1LjUzIDMwOC41NCBDIDMwNC40MyAzMDcuMjMgMzAzLjMyIDMwNS45MyAzMDIuMjcgMzA0LjYwIEMgMzAxLjM0IDMwNC45MyAzMDAuNDIgMzA1LjI2IDI5OS41MSAzMDUuNjAgQyAyOTkuNDAgMzA0Ljk0IDI5OS4yMCAzMDMuNjEgMjk5LjA5IDMwMi45NCBDIDI5OC4wOSAzMDQuMjAgMjk3LjEyIDMwNS40OCAyOTYuMjAgMzA2Ljc5IEMgMjk1LjYxIDMwNi43OCAyOTQuNDMgMzA2Ljc1IDI5My44NCAzMDYuNzQgQyAyOTYuMTMgMzA4LjIzIDI5NC45MCAzMDkuNzUgMjkzLjIxIDMxMS4xNSBDIDI5My44MyAzMTEuNTkgMjk0LjQ1IDMxMi4wMiAyOTUuMDcgMzEyLjQ3IEMgMjk0LjY2IDMxMy45MiAyOTQuMjggMzE1LjM5IDI5My45MCAzMTYuODYgQyAyOTQuNDkgMzE2LjcxIDI5NS42NiAzMTYuNDEgMjk2LjI1IDMxNi4yNiBDIDI5NS4zNyAzMTcuMjkgMjk0LjUxIDMxOC4zNCAyOTMuNjMgMzE5LjM3IEMgMjkzLjI3IDMxNy4yOSAyOTIuMzcgMzE1LjEyIDI5My40NyAzMTMuMDkgQyAyOTIuOTQgMzEyLjk4IDI5MS44OCAzMTIuNzYgMjkxLjM1IDMxMi42NSBDIDI5Mi4xNSAzMTAuNTcgMjkzLjA0IDMwOC41MiAyOTMuNjMgMzA2LjM2IEMgMjk0LjYzIDMwNS4yMyAyOTUuNTcgMzA0LjA1IDI5Ni41MyAzMDIuODcgQyAyOTUuNDIgMzAyLjQxIDI5NC4zMiAzMDEuOTUgMjkzLjIyIDMwMS41MSBDIDI5My40MyAyOTkuODEgMjkzLjYyIDI5OC4xMCAyOTMuNzggMjk2LjQwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMzMi42NSAzMDQuNjYgQyAzMzMuNjcgMzAzLjQ5IDMzNC43MCAzMDIuMzIgMzM1LjczIDMwMS4xNiBDIDMzOC42MiAzMDMuNTggMzQxLjYyIDMwNS44OCAzNDQuNjMgMzA4LjE1IEMgMzQzLjYyIDMwOS40NSAzNDIuNjAgMzEwLjc1IDM0MS41NyAzMTIuMDUgQyAzMzguNTYgMzA5LjYzIDMzNS41NCAzMDcuMjEgMzMyLjY1IDMwNC42NiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiIzAxMDEwMVwiIGQ9XCIgTSAyOTYuMjAgMzA2Ljc5IEMgMjk3LjEyIDMwNS40OCAyOTguMDkgMzA0LjIwIDI5OS4wOSAzMDIuOTQgQyAyOTkuMjAgMzAzLjYxIDI5OS40MCAzMDQuOTQgMjk5LjUxIDMwNS42MCBDIDMwMC40MiAzMDUuMjYgMzAxLjM0IDMwNC45MyAzMDIuMjcgMzA0LjYwIEMgMzAzLjMyIDMwNS45MyAzMDQuNDMgMzA3LjIzIDMwNS41MyAzMDguNTQgQyAzMDIuNTIgMzExLjE4IDI5OS45OCAzMTQuNjIgMjk2LjI1IDMxNi4yNiBDIDI5NS42NiAzMTYuNDEgMjk0LjQ5IDMxNi43MSAyOTMuOTAgMzE2Ljg2IEMgMjk0LjI4IDMxNS4zOSAyOTQuNjYgMzEzLjkyIDI5NS4wNyAzMTIuNDcgQyAyOTQuNDUgMzEyLjAyIDI5My44MyAzMTEuNTkgMjkzLjIxIDMxMS4xNSBDIDI5NC45MCAzMDkuNzUgMjk2LjEzIDMwOC4yMyAyOTMuODQgMzA2Ljc0IEMgMjk0LjQzIDMwNi43NSAyOTUuNjEgMzA2Ljc4IDI5Ni4yMCAzMDYuNzkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMzI4LjExIDMxMC4yNiBDIDMyOS4xMCAzMDkuMDkgMzMwLjEwIDMwNy45MyAzMzEuMDggMzA2Ljc1IEMgMzM0LjgwIDMwOS43OCAzMzguNDAgMzEyLjkzIDM0Mi4xMiAzMTUuOTYgQyAzNDEuMDcgMzE3LjI1IDM0MC4wMiAzMTguNTUgMzM4Ljk5IDMxOS44NyBDIDMzNS40MiAzMTYuNjAgMzMxLjcxIDMxMy40OSAzMjguMTEgMzEwLjI2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDEyMC4yMCAzMTIuNzYgQyAxMjEuMzIgMzEwLjgwIDEyNC40OCAzMTAuOTggMTI2LjUyIDMxMC4yNCBDIDEyNi41MSAzMTIuMjAgMTI2LjUwIDMxNC4xNiAxMjYuNTQgMzE2LjEyIEMgMTI0Ljk3IDMxNC4wOCAxMjIuNjcgMzEzLjIwIDEyMC4yMCAzMTIuNzYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gNjEuNzIgMzIzLjk1IEMgNjUuMTEgMzIwLjU1IDY4LjY2IDMxNy4zMyA3Mi4wNSAzMTMuOTMgQyA3My4xNSAzMTQuOTggNzQuMjQgMzE2LjA0IDc1LjM1IDMxNy4wOCBDIDc0LjI0IDMxOC4yOCA3My4xMyAzMTkuNDggNzIuMDQgMzIwLjcxIEMgNzMuMTUgMzIwLjkzIDc0LjI3IDMyMS4xNiA3NS4zOSAzMjEuMzggQyA3Ni4wMiAzMjAuNjUgNzYuNjYgMzE5LjkzIDc3LjI5IDMxOS4yMCBDIDc4LjQwIDMyMC4yNyA3OS41MiAzMjEuMzIgODAuNjQgMzIyLjM4IEMgNzkuMzAgMzIzLjUxIDc4LjA2IDMyNi4xMyA3NS45MyAzMjQuOTggQyA3My43NCAzMjQuNTQgNzEuNjUgMzIzLjA0IDY5LjQwIDMyMy4yNCBDIDY3Ljg2IDMyNC40NyA2Ni41MiAzMjUuOTIgNjUuMTAgMzI3LjI5IEMgNjMuOTggMzI2LjE3IDYyLjg1IDMyNS4wNiA2MS43MiAzMjMuOTUgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTE0LjQ0IDMxNS4xNiBDIDExNS40MyAzMTUuMTIgMTE4Ljc0IDMxMi4wNSAxMTguMTggMzE0LjE0IEMgMTE3LjY4IDMxNS4wOSAxMTcuMTQgMzE2LjAyIDExNi41NSAzMTYuOTIgQyAxMTYuMDEgMzE5LjU0IDExNS44MyAzMjIuMjUgMTE2Ljc2IDMyNC44MiBDIDExNi41NSAzMjQuODcgMTE2LjEyIDMyNC45NyAxMTUuOTEgMzI1LjAyIEwgMTE1LjEwIDMyNC43NSBDIDExMy4yOSAzMjEuODkgMTEzLjc3IDMxOC4yOCAxMTQuNDQgMzE1LjE2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI2NC4wNyAzMjQuNzkgQyAyNjUuNDUgMzIyLjAzIDI2NS44MiAzMTguMDEgMjY5LjA5IDMxNi43OCBDIDI2Ny4yNiAzMjAuMjEgMjY1LjYwIDMyMy43NSAyNjMuNDIgMzI2Ljk5IEMgMjYzLjQ4IDMyOC41NiAyNjQuMjcgMzI5LjU5IDI2NS44MCAzMzAuMDkgQyAyNjMuNzUgMzMwLjYxIDI2MS43MSAzMzEuMjIgMjU5LjU5IDMzMS4zOCBDIDI2MC4yNSAzMjguNjUgMjYyLjUwIDMyNi45NSAyNjQuMDcgMzI0Ljc5IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDMyMS40OCAzMTcuMzYgQyAzMjIuOTEgMzE4Ljc3IDMyNC4zMiAzMjAuMjEgMzI1LjU2IDMyMS44MSBDIDMyNS4wNyAzMjIuODMgMzI0LjYwIDMyMy44NiAzMjQuMTIgMzI0Ljg5IEMgMzI2LjA4IDMyNC45MCAzMjguMDIgMzI0LjkwIDMyOS45OSAzMjQuOTEgQyAzMjguNzIgMzI2LjE3IDMyNy43MCAzMjcuODIgMzI2LjA3IDMyOC42NCBDIDMyMy40MiAzMjguNzUgMzIwLjc4IDMyOC40OSAzMTguMTUgMzI4LjM4IEMgMzE5LjQ2IDMyOS44NyAzMjAuNzggMzMxLjM3IDMyMi4wNiAzMzIuODkgQyAzMjAuODIgMzMzLjg0IDMxOS41OSAzMzQuODEgMzE4LjM2IDMzNS43OCBDIDMxNy4wOCAzMzQuMjMgMzE1Ljc4IDMzMi42OSAzMTQuNTEgMzMxLjEzIEMgMzE0Ljc3IDMzMC4zNiAzMTUuMjggMzI4LjgyIDMxNS41NCAzMjguMDUgQyAzMTMuODcgMzI3LjkyIDMxMi4xOSAzMjcuNzggMzEwLjUzIDMyNy42MyBDIDMxMS42NiAzMjYuNTUgMzEyLjc0IDMyNS4zOSAzMTQuMDMgMzI0LjUwIEMgMzE2LjcxIDMyNC41MCAzMTkuMzcgMzI0LjgwIDMyMi4wNSAzMjQuNzkgQyAzMjAuODYgMzIzLjM1IDMxOS42MSAzMjEuOTggMzE4LjMzIDMyMC42MyBDIDMxOS4zNyAzMTkuNTQgMzIwLjQyIDMxOC40NSAzMjEuNDggMzE3LjM2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE1MS43MiAzMjIuNTAgQyAxNDkuMDggMzIxLjQwIDE1MS41MyAzMTkuNTQgMTUyLjMzIDMxOC4wNiBDIDE1Mi4xOCAzMTkuNTUgMTUxLjk2IDMyMS4wMiAxNTEuNzIgMzIyLjUwIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI3OC45OSAzMjAuMjggQyAyODAuMDEgMzIxLjM2IDI4MS4xNyAzMjIuMjkgMjgyLjQ0IDMyMy4wOSBDIDI4Mi4wNCAzMjMuODggMjgyLjIzIDMyNi4wNSAyODAuODggMzI1LjIzIEMgMjgwLjU0IDMyMy40NyAyODAuMDcgMzIxLjc0IDI3OC45OSAzMjAuMjggWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gNzQuNzcgMzMyLjU2IEMgNzcuMTggMzI5LjY3IDc5Ljg4IDMyNy4wNCA4Mi4yMCAzMjQuMDggQyA4My40NCAzMjUuMDIgODQuNjcgMzI1Ljk3IDg1Ljg5IDMyNi45NCBDIDgzLjMyIDMyOS44MSA4MC44OSAzMzIuODEgNzguMzIgMzM1LjY4IEMgNzcuMTQgMzM0LjYzIDc1Ljk2IDMzMy41OSA3NC43NyAzMzIuNTYgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gODAuMjYgMzM3LjI2IEMgODIuNzkgMzM0LjM5IDg1LjE5IDMzMS40MCA4Ny42NyAzMjguNDkgQyA5MC43MyAzMzEuNTMgOTUuMDMgMzMzLjMzIDk3LjQwIDMzNi45OCBDIDk2LjIyIDM0MC4zMyA5My41MiAzNDIuODggOTEuNzQgMzQ1LjkxIEMgOTAuMzggMzQ1LjAzIDg5LjA2IDM0NC4xMyA4Ny43NCAzNDMuMjEgQyA4OS40MCAzNDAuOTkgOTEuMTEgMzM4LjgwIDkyLjc4IDMzNi41OSBDIDkxLjY1IDMzNS42NCA5MC41MSAzMzQuNzAgODkuMzggMzMzLjc1IEMgODcuNDIgMzM1Ljc4IDg1Ljc0IDMzOC4wNCA4NC4wNSAzNDAuMjkgQyA4Mi43NyAzMzkuMjkgODEuNTEgMzM4LjI4IDgwLjI2IDMzNy4yNiBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAzMDUuOTMgMzMxLjIwIEMgMzA3LjEwIDMzMC4zMSAzMDguMjYgMzI5LjQxIDMwOS40MyAzMjguNTIgQyAzMTEuODIgMzMxLjQ2IDMxNC4yMCAzMzQuNDIgMzE2Ljc4IDMzNy4yMSBDIDMxNS41NSAzMzguMjggMzE0LjMwIDMzOS4zMiAzMTMuMDQgMzQwLjM2IEMgMzEwLjY3IDMzNy4zMSAzMDguMjMgMzM0LjMwIDMwNS45MyAzMzEuMjAgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTUyLjMwIDMzNS4yOCBDIDE1Mi45MyAzMzQuNDkgMTUzLjU3IDMzMy43MSAxNTQuMjEgMzMyLjk0IEMgMTU0LjYzIDMzMy45NCAxNTUuMDYgMzM0Ljk1IDE1NS40OSAzMzUuOTYgQyAxNTQuNDIgMzM1LjczIDE1My4zNiAzMzUuNTEgMTUyLjMwIDMzNS4yOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNzMuOTMgMzM4Ljk2IEMgMTc0LjMzIDMzNi43NCAxNzUuMzMgMzM0LjcyIDE3Ni40NSAzMzIuNzkgQyAxNzYuOTUgMzM0LjcyIDE3Ny41MCAzMzYuNjUgMTc3Ljk3IDMzOC42MSBDIDE3Ni42MiAzMzguNzMgMTc1LjI3IDMzOC44NSAxNzMuOTMgMzM4Ljk2IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI5My43NiAzNDAuMDMgQyAyOTcuMjggMzM3LjkwIDMwMC4zNyAzMzUuMDcgMzA0LjE3IDMzMy4zOSBDIDMwNi42NiAzMzYuMDIgMzA5LjAyIDMzOC44MiAzMTAuOTAgMzQxLjkyIEMgMzA5Ljg0IDM0Mi44OCAzMDguNjcgMzQzLjcyIDMwNy40NSAzNDQuNDYgQyAzMDUuMzQgMzQyLjcwIDMwNC4xNCAzNDAuMDkgMzAyLjQ5IDMzNy45MyBDIDMwMC4wMCAzMzkuNTMgMjk3LjU3IDM0MS4yMSAyOTUuMDQgMzQyLjc1IEMgMjk0LjcyIDM0Mi4wNyAyOTQuMDggMzQwLjcxIDI5My43NiAzNDAuMDMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gOTcuMzcgMzQyLjA3IEMgOTguMjQgMzQwLjY3IDk5LjE5IDMzOS4zMyAxMDAuMTIgMzM3Ljk3IEMgMTAxLjMyIDMzOC43NiAxMDIuNTMgMzM5LjU2IDEwMy43MyAzNDAuMzYgQyAxMDMuMDcgMzQxLjU1IDEwMi40MiAzNDIuNzUgMTAxLjgzIDM0My45OCBDIDEwMy4xOSAzNDMuMzMgMTA0LjQ4IDM0Mi41MCAxMDUuOTUgMzQyLjA5IEMgMTA4LjIyIDM0Mi43MyAxMTAuMTIgMzQ0LjIyIDExMS44NCAzNDUuNzggQyAxMTAuMTYgMzQ5LjA2IDEwOC4yNyAzNTIuMjEgMTA2LjUxIDM1NS40NCBDIDEwNC4zMyAzNTQuMTQgMTAyLjEzIDM1Mi44NiA5OS45NSAzNTEuNTcgQyAxMDAuNDIgMzUwLjY2IDEwMC45MSAzNDkuNzUgMTAxLjM5IDM0OC44NCBDIDEwMi4yOSAzNDkuMzcgMTAzLjE5IDM0OS45MSAxMDQuMDkgMzUwLjQ1IEMgMTA1LjA5IDM0OC43NiAxMDYuMDcgMzQ3LjA1IDEwNi45MSAzNDUuMjcgQyAxMDMuMDYgMzQ1LjE2IDEwMC42MyAzNDkuMTAgOTcuMDQgMzQ5LjY1IEMgOTUuNzcgMzQ4LjkwIDk0LjU4IDM0OC4wMiA5My4zOCAzNDcuMTggQyA5NS4xOCAzNDYuMjggOTYuOTkgMzQ1LjQwIDk4LjgxIDM0NC41NCBDIDk4LjMwIDM0My43MyA5Ny44MiAzNDIuOTEgOTcuMzcgMzQyLjA3IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI4MC40OCAzNDcuOTEgQyAyODQuMzAgMzQ1Ljc1IDI4OC4xMSAzNDMuNTcgMjkxLjkxIDM0MS4zNyBDIDI5Mi4yOSAzNDEuOTMgMjkzLjA1IDM0My4wNSAyOTMuNDQgMzQzLjYyIEMgMjkyLjg4IDM0NC4xMCAyOTIuMzMgMzQ0LjU5IDI5MS43OSAzNDUuMDkgQyAyOTMuMzIgMzQ3LjM4IDI5NC43NiAzNDkuNzMgMjk2LjIyIDM1Mi4wOCBDIDI5NC44NiAzNTIuODcgMjkzLjQ5IDM1My42NiAyOTIuMTMgMzU0LjQ2IEMgMjkwLjc4IDM1Mi4wMiAyODkuMzcgMzQ5LjYyIDI4Ny45NSAzNDcuMjMgQyAyODYuMDIgMzQ4LjM0IDI4NC4wNyAzNDkuNDEgMjgyLjA5IDM1MC40MyBDIDI4MS42OSAzNDkuODAgMjgwLjg4IDM0OC41NCAyODAuNDggMzQ3LjkxIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDI5Ni4yMCAzNDQuMDggQyAyOTcuNDUgMzQzLjIzIDI5OC43MCAzNDIuMzggMjk5Ljk2IDM0MS41NCBDIDMwMS4yMSAzNDMuNDIgMzAyLjUxIDM0NS4yOCAzMDMuODMgMzQ3LjEyIEMgMzAyLjUzIDM0Ny45NiAzMDEuMjcgMzQ4Ljg3IDI5OS45MyAzNDkuNjUgQyAyOTguNTcgMzQ3Ljg3IDI5Ny40MyAzNDUuOTQgMjk2LjIwIDM0NC4wOCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyNzQuOTMgMzUwLjQ5IEMgMjc2LjI0IDM0OS45NSAyNzcuNTYgMzQ5LjQyIDI3OC44OCAzNDguOTEgQyAyNzkuODQgMzUwLjg2IDI4MS4wMCAzNTIuNzIgMjgxLjc0IDM1NC43NyBDIDI4MC40OCAzNTUuNTYgMjc5LjExIDM1Ni4xNSAyNzcuNzYgMzU2Ljc4IEMgMjc2Ljc4IDM1NC42OSAyNzUuNzkgMzUyLjYyIDI3NC45MyAzNTAuNDkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTIwLjIwIDM0OS44MiBDIDEyMy43OCAzNTEuNTIgMTI3LjUzIDM1Mi45MiAxMzAuOTkgMzU0Ljg2IEMgMTMyLjQ4IDM1NS43MCAxMzEuODAgMzU3LjI2IDEzMS4zNCAzNTguNTEgQyAxMzAuMzkgMzYxLjAwIDEyOS4zMSAzNjMuNDQgMTI4LjMxIDM2NS45MSBDIDEyMy45MiAzNjQuMDEgMTE5LjQ3IDM2Mi4yNCAxMTUuMjMgMzYwLjAyIEMgMTE2LjcwIDM1Ni41MyAxMTguNjUgMzUzLjI4IDEyMC4yMCAzNDkuODIgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiMwMTAxMDFcIiBkPVwiIE0gMTIyLjkxIDM1NC40NSBDIDEyNC40MyAzNTUuMTQgMTI1Ljk2IDM1NS44NCAxMjcuNDcgMzU2LjU3IEMgMTI2LjcxIDM1OC4xNSAxMjUuOTggMzU5Ljc2IDEyNS4yNCAzNjEuMzUgQyAxMjMuNzAgMzYwLjYxIDEyMi4xNSAzNTkuOTAgMTIwLjYxIDM1OS4xNyBDIDEyMS4zOSAzNTcuNjAgMTIyLjE1IDM1Ni4wMyAxMjIuOTEgMzU0LjQ1IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE0MS42NyAzNTUuMDMgQyAxNDMuMDMgMzU1LjMyIDE0NC4zOCAzNTUuNjQgMTQ1LjcyIDM1NS45OCBDIDE0NS40NiAzNTcuMjUgMTQ1LjIxIDM1OC41MiAxNDQuOTYgMzU5Ljc5IEMgMTQ3LjI3IDM2MC40NiAxNDkuNTggMzYxLjEyIDE1MS45MSAzNjEuNzMgQyAxNTEuNDAgMzYzLjU3IDE1MS4wMiAzNjUuNDcgMTUwLjI0IDM2Ny4yNCBDIDE0OC41MiAzNjguOTQgMTQ2LjI2IDM3MC4wMCAxNDQuMzIgMzcxLjQ0IEMgMTQyLjk1IDM3MS4wNiAxNDEuNjAgMzcwLjY2IDE0MC4yNSAzNzAuMjMgQyAxNDEuOTIgMzY3LjMyIDE0Ni4wNSAzNjcuMTIgMTQ3LjE5IDM2My43NiBDIDE0NC42OCAzNjIuODUgMTQyLjE0IDM2Mi4wMiAxMzkuNjEgMzYxLjIwIEMgMTQwLjMxIDM1OS4xNCAxNDEuMDAgMzU3LjA5IDE0MS42NyAzNTUuMDMgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjU0LjYxIDM1OC45MyBDIDI1Ny44MiAzNTcuODcgMjYwLjk0IDM1Ni41NiAyNjQuMTUgMzU1LjUwIEMgMjY1LjIwIDM1NS4xNyAyNjYuODUgMzU1LjEzIDI2Ny4yNiAzNTYuNDEgQyAyNjguNjUgMzU5LjIxIDI2OS43NCAzNjIuMTQgMjcwLjkyIDM2NS4wNCBDIDI2OS41MSAzNjUuNTggMjY4LjEwIDM2Ni4xNSAyNjYuNzEgMzY2LjcyIEMgMjY1LjY5IDM2NC4xNiAyNjQuNjYgMzYxLjYwIDI2My42NCAzNTkuMDQgQyAyNjEuMzcgMzU5Ljc2IDI1OS4xMiAzNjAuNTIgMjU2Ljg1IDM2MS4yNCBDIDI1OC4wNyAzNjEuNzYgMjU5LjM0IDM2Mi4xMyAyNjAuNjUgMzYyLjM3IEMgMjYxLjM3IDM2NC4zMCAyNjIuMTAgMzY2LjI0IDI2Mi44MiAzNjguMTggQyAyNjEuMzUgMzY4LjY2IDI1OS44OCAzNjkuMTcgMjU4LjQyIDM2OS42NyBDIDI1Ny44MSAzNjcuOTAgMjU3LjIyIDM2Ni4xMiAyNTYuNjUgMzY0LjM0IEMgMjU3LjE0IDM2My4wMiAyNTYuNjUgMzYxLjgyIDI1NS41OCAzNjEuMDIgQyAyNTUuMzQgMzYwLjUwIDI1NC44NSAzNTkuNDUgMjU0LjYxIDM1OC45MyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxMzQuODAgMzU2LjE3IEMgMTM2LjE3IDM1Ni42NyAxMzcuNTUgMzU3LjE3IDEzOC45MiAzNTcuNjggQyAxMzguMTEgMzU5Ljc2IDEzNy4zNSAzNjEuODcgMTM2LjYwIDM2My45OCBDIDEzNS4xNCAzNjMuNTAgMTMzLjcwIDM2Mi45OCAxMzIuMjYgMzYyLjQ5IEMgMTMzLjE3IDM2MC40MCAxMzQuMDEgMzU4LjMwIDEzNC44MCAzNTYuMTcgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMjQwLjMwIDM2Mi45OSBDIDI0NC4zMiAzNjIuMTcgMjQ4LjE2IDM2MC41MyAyNTIuMjkgMzYwLjI0IEMgMjUzLjgwIDM2My4wNSAyNTQuOTAgMzY2LjA4IDI1NS41MiAzNjkuMjIgQyAyNTUuMDcgMzcwLjIzIDI1NC4zMSAzNzAuOTIgMjUzLjI2IDM3MS4yNyBDIDI0OS44OCAzNzIuNDcgMjQ2LjM3IDM3My4yOSAyNDIuODYgMzc0LjA0IEMgMjQyLjcwIDM3My4wNyAyNDIuNTQgMzcyLjEwIDI0Mi4zOCAzNzEuMTQgQyAyNDUuMTYgMzcwLjM4IDI0OC4wNSAzNjkuODggMjUwLjcwIDM2OC43MSBDIDI1MC40MiAzNjYuOTMgMjQ5Ljc1IDM2NS4yNSAyNDkuMjIgMzYzLjU2IEMgMjQ3LjY4IDM2NC4wMSAyNDYuMTQgMzY0LjQ2IDI0NC43NSAzNjUuMjYgQyAyNDUuODggMzY2LjEwIDI0OC40MyAzNjYuMDQgMjQ3Ljg1IDM2OC4xMiBDIDI0NS45OCAzNjguOTIgMjQzLjkzIDM2OS4xNCAyNDEuOTMgMzY5LjQwIEMgMjQxLjMxIDM2Ny4yOCAyNDAuNzcgMzY1LjEzIDI0MC4zMCAzNjIuOTkgWlwiIC8+XG4gICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZmZmZcIiBkPVwiIE0gMTU0LjA4IDM2Mi40MCBDIDE1NS4zMyAzNjIuNjMgMTU2LjU3IDM2Mi45MSAxNTcuODAgMzYzLjI0IEMgMTU3Ljc4IDM2Ni4yNCAxNTYuNDYgMzY5LjA2IDE1Ni4xMiAzNzIuMDQgQyAxNTYuNTggMzcxLjk0IDE1Ny41MCAzNzEuNzUgMTU3Ljk2IDM3MS42NSBDIDE1OC43NCAzNjkuMDcgMTU5LjE5IDM2Ni40MCAxNTkuODAgMzYzLjc4IEMgMTYxLjE0IDM2NC4wMyAxNjIuNDggMzY0LjI4IDE2My44MiAzNjQuNTMgQyAxNjMuMjMgMzY3LjQ3IDE2Mi41OCAzNzAuMzkgMTYyLjA5IDM3My4zNSBDIDE2Mi42MyAzNzMuMTkgMTYzLjcxIDM3Mi44OCAxNjQuMjUgMzcyLjcyIEMgMTY0LjkwIDM3MC4yMSAxNjUuMTQgMzY3LjYxIDE2NS45MCAzNjUuMTQgQyAxNjcuMTkgMzY1LjIyIDE2OC40OCAzNjUuMzUgMTY5Ljc3IDM2NS41MSBDIDE2OC43MCAzNjkuMDYgMTcwLjA2IDM3NS40MSAxNjUuMTYgMzc2LjE4IEMgMTYwLjQwIDM3NS45MSAxNTUuODEgMzc0LjQyIDE1MS4xNyAzNzMuNDEgQyAxNTIuMTggMzY5Ljc1IDE1My4xOSAzNjYuMDkgMTU0LjA4IDM2Mi40MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMDQuNTYgMzY0LjI0IEMgMjA1Ljk2IDM2NC4xNyAyMDcuMzUgMzY0LjEyIDIwOC43NSAzNjQuMDggQyAyMDguODAgMzY0Ljk4IDIwOC45MSAzNjYuNzcgMjA4Ljk2IDM2Ny42NyBDIDIxMS40OSAzNjcuNDcgMjE0LjAzIDM2Ny4yOSAyMTYuNTcgMzY3LjE3IEMgMjE2LjYzIDM2OS4yNSAyMTcuMTIgMzcxLjM5IDIxNi42OSAzNzMuNDcgQyAyMTUuNTMgMzc1LjIzIDIxNC4xOCAzNzYuODggMjEzLjI4IDM3OC44MSBDIDIxMS43NSAzNzguODMgMjEwLjIzIDM3OC44NCAyMDguNzAgMzc4LjgzIEMgMjA5LjQyIDM3NS42NiAyMTMuMjggMzc0LjA5IDIxMi42OSAzNzAuNTUgQyAyMTAuMDUgMzcwLjY2IDIwNy40MSAzNzAuNzkgMjA0Ljc4IDM3MC44MCBDIDIwNC43NSAzNjguNjEgMjA0LjY3IDM2Ni40MiAyMDQuNTYgMzY0LjI0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDIzMy44OCAzNjQuNDAgQyAyMzUuMjkgMzY0LjEzIDIzNi42OSAzNjMuODggMjM4LjEwIDM2My42NCBDIDIzOC44OCAzNjcuMzAgMjM5LjcxIDM3MC45NCAyNDAuNzAgMzc0LjU1IEMgMjM5LjE3IDM3NC45MiAyMzcuNjUgMzc1LjI5IDIzNi4xMiAzNzUuNjMgQyAyMzUuNDIgMzcxLjg3IDIzNC41MyAzNjguMTYgMjMzLjg4IDM2NC40MCBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAyMjcuNTMgMzY1LjUxIEMgMjI4Ljk2IDM2NS4zMyAyMzAuNDAgMzY1LjE3IDIzMS44NCAzNjUuMDEgQyAyMzIuMDYgMzY4LjY2IDIzNS4yNiAzNzMuODEgMjMxLjIyIDM3Ni4yNSBDIDIyNy41NSAzNzcuNTcgMjIzLjU3IDM3Ny41NiAyMTkuNzUgMzc4LjIxIEMgMjE5LjcwIDM3Ny40NyAyMTkuNjAgMzc2LjAwIDIxOS41NSAzNzUuMjYgQyAyMjAuMjQgMzc1LjEyIDIyMS42NCAzNzQuODQgMjIyLjMzIDM3NC43MCBDIDIyMS4zNCAzNzIuMDEgMjIwLjA5IDM2OS40MiAyMTkuMDEgMzY2Ljc4IEMgMjIwLjA5IDM2Ni42NCAyMjIuMjYgMzY2LjM3IDIyMy4zNCAzNjYuMjQgQyAyMjQuODMgMzY5LjEwIDIyNS4zOSAzNzIuNjMgMjI4LjAwIDM3NC43NiBDIDIyOS41MiAzNzEuODAgMjI3Ljc5IDM2OC41NSAyMjcuNTMgMzY1LjUxIFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE3Mi4wNiAzNjYuMTMgQyAxNzMuNTEgMzY2LjI3IDE3NC45NiAzNjYuNDIgMTc2LjQxIDM2Ni41NyBDIDE3NS45MSAzNzAuMzAgMTc1LjM4IDM3NC4wMiAxNzUuMDUgMzc3Ljc3IEMgMTczLjQ4IDM3Ny42NSAxNzEuOTIgMzc3LjUxIDE3MC4zNSAzNzcuMzcgQyAxNzAuOTYgMzczLjYzIDE3MS41NyAzNjkuODkgMTcyLjA2IDM2Ni4xMyBaXCIgLz5cbiAgICAgICAgICA8cGF0aCBmaWxsPVwiI2ZmZmZmZlwiIGQ9XCIgTSAxNzguMDIgMzY5Ljc0IEMgMTc4LjIwIDM2OC43NSAxNzguMzkgMzY3Ljc3IDE3OC41OSAzNjYuNzkgQyAxODIuMTYgMzY3LjQ2IDE4Ni4wMyAzNjYuOTMgMTg5LjM2IDM2OC42NCBDIDE4OS4zMSAzNzIuMjEgMTg5LjIwIDM3NS43OSAxODguNjQgMzc5LjMzIEMgMTg3LjU3IDM3OS4xOCAxODUuNDMgMzc4Ljg5IDE4NC4zNiAzNzguNzUgQyAxODQuNTQgMzc2LjAxIDE4NC43NCAzNzMuMjggMTg0Ljg3IDM3MC41NSBDIDE4Mi41OCAzNzAuMzUgMTgwLjI5IDM3MC4wOSAxNzguMDIgMzY5Ljc0IFpcIiAvPlxuICAgICAgICAgIDxwYXRoIGZpbGw9XCIjZmZmZmZmXCIgZD1cIiBNIDE5MS43NiAzNjcuNzkgQyAxOTMuMjIgMzY3LjgzIDE5NC42OCAzNjcuODcgMTk2LjE0IDM2Ny45MiBDIDE5Ni4xMyAzNzAuMTYgMTk2LjEzIDM3Mi4zOSAxOTYuMTQgMzc0LjY0IEMgMTk0LjYxIDM3NC42NCAxOTMuMDcgMzc0LjY1IDE5MS41NCAzNzQuNjUgQyAxOTEuNjEgMzcyLjM2IDE5MS42OSAzNzAuMDcgMTkxLjc2IDM2Ny43OSBaXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgKTtcbiAgfVxufVxuXG5Mb2dvLlByb3BUeXBlcyA9IHtcbiAgd2lkdGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIGhlaWdodDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgb3BhY2l0eTogUmVhY3QuUHJvcFR5cGVzLm51bWJlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvbG9nby5qc3giLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vaG9tZVBhZ2UucnQnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7dXBkYXRlQm9va2luZywgY2FuY2VsQm9va2luZ30gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucyc7XG5pbXBvcnQge3VwZGF0ZVVzZXJ9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuXG5jb25zdCB0ZWFtc0RhdGEgPSByZXF1aXJlKCcuLi8uLi91dGlscy90ZWFtc0RhdGEnKTtcblxuZnVuY3Rpb24gcGFyc2VFdmVudERhdGUoZXZlbnQpIHtcbiAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQueWVhciwgZXZlbnQubW9udGgsIGV2ZW50LmRheSk7XG4gIGV2ZW50RGF0ZS5zZXRNb250aChldmVudERhdGUuZ2V0TW9udGgoKSAtIDEpO1xuICByZXR1cm4gZXZlbnREYXRlO1xufVxuXG5mdW5jdGlvbiBpc0Z1dHVyZUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IGV2ZW50RGF0ZSA9IHBhcnNlRXZlbnREYXRlKGV2ZW50KTtcbiAgcmV0dXJuIGV2ZW50RGF0ZSA+IERhdGUubm93KCk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgYXV0aERhdGE6IHN0YXRlLmF1dGhEYXRhLFxuICBldmVudHM6IHN0YXRlLmV2ZW50cyxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICBib29raW5nczogc3RhdGUuYm9va2luZ3Ncbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICB1cGRhdGVCb29raW5nOiAodWlkLCBldmVudElkLCBib29raW5nKSA9PiBkaXNwYXRjaCh1cGRhdGVCb29raW5nKHVpZCwgZXZlbnRJZCwgYm9va2luZykpLFxuICBjYW5jZWxCb29raW5nOiAodWlkLCBldmVudElkKSA9PiBkaXNwYXRjaChjYW5jZWxCb29raW5nKHVpZCwgZXZlbnRJZCkpLFxuICB1cGRhdGVVc2VyOiAodWlkLCB1c2VyKSA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVpZCwgdXNlcikpXG59KTtcblxuY2xhc3MgSG9tZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBldmVudElkOiBudWxsXG4gICAgfVxuICB9XG5cbiAgZ2V0T3BlbkV2ZW50cygpIHtcbiAgICByZXR1cm4gXy5vbWl0QnkodGhpcy5wcm9wcy5ldmVudHMsIGV2ZW50ID0+IGV2ZW50LnN0YXR1cyA9PT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuQ0xPU0VELnZhbHVlKTtcbiAgfVxuXG4gIGdldENsb3NlZEV2ZW50cygpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLmV2ZW50cylcbiAgICAgIC5vbWl0QnkoZXZlbnQgPT4ge1xuICAgICAgICByZXR1cm4gZXZlbnQuc3RhdHVzICE9PSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5DTE9TRUQudmFsdWUgfHwgIWlzRnV0dXJlRXZlbnQoZXZlbnQpO1xuICAgICAgfSlcbiAgICAgIC5tYXAoKGV2ZW50LCBldmVudElkKSA9PiAoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgZXZlbnRJZFxuICAgICAgfSkpXG4gICAgICAuc29ydEJ5KGV2ZW50RGF0YSA9PiBwYXJzZUV2ZW50RGF0ZShldmVudERhdGEuZXZlbnQpKVxuICAgICAgLnZhbHVlKCk7XG4gIH1cblxuICBib29rRXZlbnQoZXZlbnRJZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50SWR9KTtcbiAgfVxuXG4gIGlzQm9va2luZ0VuYWJsZWQoZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LnN0YXR1cykge1xuICAgICAgY2FzZSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5PUEVOX0ZPUl9BTEwudmFsdWU6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSBDb25zdGFudHMuRVZFTlRTX1NUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTLnZhbHVlOiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJzW3RoaXMucHJvcHMuYXV0aERhdGEudWlkXTtcbiAgICAgICAgcmV0dXJuIHVzZXIuc2Vhc29uVGlja2V0cyA+IDBcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGdldEV2ZW50TmFtZShldmVudCkge1xuICAgIGlmIChldmVudC50eXBlSWQpIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuRVZFTlRTX1RZUEVTW2V2ZW50LnR5cGVJZF0ubmFtZTtcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudEhhcG9lbEltYWdlKCkge1xuICAgIHJldHVybiAnaHR0cDovL2hhcG9lbC5jby5pbC9zaXRlcy9kZWZhdWx0L2ZpbGVzL2xvZ28xMjB4MTIwLnBuZyc7XG4gIH1cblxuICBpc1JlZ2lzdGVyZWRUb0V2ZW50KGV2ZW50SWQpIHtcbiAgICBjb25zdCB1c2VyQm9va2luZ3MgPSB0aGlzLnByb3BzLmJvb2tpbmdzW3RoaXMucHJvcHMuYXV0aERhdGEudWlkXTtcblxuICAgIHJldHVybiBfLmhhcyh1c2VyQm9va2luZ3MsIGV2ZW50SWQpO1xuICB9XG5cbiAgZ2V0RXZlbnRJbWFnZShldmVudCkge1xuICAgIGlmIChldmVudC50eXBlSWQpIHtcbiAgICAgIHJldHVybiBDb25zdGFudHMuRVZFTlRTX1RZUEVTW2V2ZW50LnR5cGVJZF0uc3JjO1xuICAgIH1cbiAgfVxuXG4gIGdldEV2ZW50RGF0ZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgcmV0dXJuIGV2ZW50LmRheSArICcvJyArIGV2ZW50Lm1vbnRoICsgJy8nICsgZXZlbnQueWVhcjtcbiAgICB9XG4gIH1cblxuICBnZXRFdmVudFRpbWUoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIHJldHVybiBldmVudC5ob3VyICsgJzonICsgZXZlbnQubWludXRlO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BFZGl0aW5nKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2V2ZW50SWQ6IG51bGx9KTtcbiAgfVxuXG4gIHVwZGF0ZUJvb2tpbmcoYm9va2luZykge1xuICAgIHRoaXMucHJvcHMudXBkYXRlQm9va2luZyh0aGlzLnByb3BzLmF1dGhEYXRhLnVpZCwgdGhpcy5zdGF0ZS5ldmVudElkLCBib29raW5nKTtcbiAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gIH1cblxuICBjYW5jZWxCb29raW5nKGV2ZW50SWQpIHtcbiAgICB0aGlzLnByb3BzLmNhbmNlbEJvb2tpbmcodGhpcy5wcm9wcy5hdXRoRGF0YS51aWQsIGV2ZW50SWQpO1xuICB9XG5cbiAgY3JlYXRlVXNlckluZm8odWlkLCB1c2VyKSB7XG4gICAgdXNlci5waG90b1VSTCA9IHRoaXMucHJvcHMuYXV0aERhdGEucGhvdG9VUkw7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyKHVpZCwgdXNlcik7XG4gIH1cblxuICBnZXRIb21lVGVhbSgpIHtcbiAgICByZXR1cm4gdGVhbXNEYXRhLkhBUE9FTF9KRVJVU0FMRU07XG4gIH1cblxuICBnZXRBd2F5VGVhbShldmVudCkge1xuICAgIHJldHVybiB0ZWFtc0RhdGFbZXZlbnQudHlwZUlkXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGVtcGxhdGUuYXBwbHkodGhpcyk7XG4gIH1cbn1cblxuSG9tZVBhZ2UucHJvcFR5cGVzID0ge1xuICBhdXRoRGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2V2ZW50SXRlbScsXG4gICAgJy4uL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtJyxcbiAgICAnLi4vdXNlckZvcm0nLFxuICAgICcuL2hvbWVQYWdlLnNjc3MnXG5dLCBmdW5jdGlvbiAoUmVhY3QsIF8sIEV2ZW50SXRlbSwgQm9va2luZ0Zvcm0sIFVzZXJGb3JtLCBob21lUGFnZUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBvbkJvb2tpbmcxKG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5ib29rRXZlbnQoZXZlbnRJbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2FuY2VsQm9va2luZzIob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICB0aGlzLmNhbmNlbEJvb2tpbmcoZXZlbnRJbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50MyhvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50SXRlbSwge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICdldmVudElkJzogZXZlbnRJbmRleCxcbiAgICAgICAgICAgICdvbkJvb2tpbmcnOiBvbkJvb2tpbmcxLmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCksXG4gICAgICAgICAgICAnb25DYW5jZWxCb29raW5nJzogb25DYW5jZWxCb29raW5nMi5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJvb2tpbmc0KG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgdGhpcy5ib29rRXZlbnQoZXZlbnQuZXZlbnRJZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2FuY2VsQm9va2luZzUob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCkge1xuICAgICAgICB0aGlzLmNhbmNlbEJvb2tpbmcoZXZlbnQuZXZlbnRJZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50NihvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50SXRlbSwge1xuICAgICAgICAgICAgJ2tleSc6ICdldmVudC0nICsgZXZlbnRJbmRleCxcbiAgICAgICAgICAgICdldmVudElkJzogZXZlbnQuZXZlbnRJZCxcbiAgICAgICAgICAgICdvbkJvb2tpbmcnOiBvbkJvb2tpbmc0LmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBldmVudCwgZXZlbnRJbmRleCksXG4gICAgICAgICAgICAnb25DYW5jZWxCb29raW5nJzogb25DYW5jZWxCb29raW5nNS5iaW5kKHRoaXMsIG9wZW5FdmVudHMsIGNsb3NlZEV2ZW50cywgaGFzVXNlciwgZXZlbnQsIGV2ZW50SW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblN1Ym1pdDcob3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBlZGl0aW5nRXZlbnQsIGJvb2tpbmcpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCb29raW5nKGJvb2tpbmcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsb3NlOChvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGVkaXRpbmdFdmVudCkge1xuICAgICAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjb3BlRWRpdGluZ0V2ZW50OShvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIpIHtcbiAgICAgICAgdmFyIGVkaXRpbmdFdmVudCA9IHRoaXMucHJvcHMuZXZlbnRzW3RoaXMuc3RhdGUuZXZlbnRJZF07XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEJvb2tpbmdGb3JtLCB7XG4gICAgICAgICAgICAna2V5JzogJ2VkaXQtYm9va2luZycsXG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldEV2ZW50TmFtZShlZGl0aW5nRXZlbnQpICsgJyAtICcgKyB0aGlzLmdldEV2ZW50RGF0ZShlZGl0aW5nRXZlbnQpICsgJyAnICsgdGhpcy5nZXRFdmVudFRpbWUoZWRpdGluZ0V2ZW50KSxcbiAgICAgICAgICAgICdib29raW5nJzogXy5nZXQodGhpcy5wcm9wcy5ib29raW5ncywgW1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aERhdGEudWlkLFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZXZlbnRJZFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAnb25TdWJtaXQnOiBvblN1Ym1pdDcuYmluZCh0aGlzLCBvcGVuRXZlbnRzLCBjbG9zZWRFdmVudHMsIGhhc1VzZXIsIGVkaXRpbmdFdmVudCksXG4gICAgICAgICAgICAnc2Vhc29uVGlja2V0cyc6IF8uZ2V0KHRoaXMucHJvcHMudXNlcnMsIFtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGhEYXRhLnVpZCxcbiAgICAgICAgICAgICAgICAnc2Vhc29uVGlja2V0cydcbiAgICAgICAgICAgIF0pIHx8IDAsXG4gICAgICAgICAgICAnb25DbG9zZSc6IG9uQ2xvc2U4LmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyLCBlZGl0aW5nRXZlbnQpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZU9wZW5FdmVudHNDbG9zZWRFdmVudHNIYXNVc2VyMTAoKSB7XG4gICAgICAgIHZhciBvcGVuRXZlbnRzID0gdGhpcy5nZXRPcGVuRXZlbnRzKCk7XG4gICAgICAgIHZhciBjbG9zZWRFdmVudHMgPSB0aGlzLmdldENsb3NlZEV2ZW50cygpO1xuICAgICAgICB2YXIgaGFzVXNlciA9IHRoaXMucHJvcHMudXNlcnNbdGhpcy5wcm9wcy5hdXRoRGF0YS51aWRdO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NpdGUnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdob21lLXBhZ2Ugc21hbGwtY2VudGVyZWQnIH0sIGhhc1VzZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2V2ZW50cy1jb250YWluZXInLFxuICAgICAgICAgICAgJ2tleSc6ICdldmVudHMtY29udGFpbmVyJ1xuICAgICAgICB9LCAhdGhpcy5zdGF0ZS5ldmVudElkID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdldmVudHMnLFxuICAgICAgICAgICAgJ2tleSc6ICdldmVudHMnXG4gICAgICAgIH0sIF8uc2l6ZShvcGVuRXZlbnRzKSA9PT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc2hvdy1mb3Itc21hbGwtb25seSBuby1ib29raW5ncyBtb3JlLXNwYWNlJyxcbiAgICAgICAgICAgICdrZXknOiAnNjU4J1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXkNeZ158g15vXqNeS16Ig15TXodei15XXqiDXpNeq15XXl9eV16onKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmEgZmEtYnVzJyxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9KSkgOiBudWxsLCBfLnNpemUob3BlbkV2ZW50cykgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZXZlbnRzLWxpc3Qgb3Blbi1ldmVudHMnLFxuICAgICAgICAgICAgICAgICdrZXknOiAnOTA4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g2JywgeyAnY2xhc3NOYW1lJzogJ2hpZGUtZm9yLXNtYWxsLW9ubHknIH0sICfXlNeh16LXldeqOicpLFxuICAgICAgICAgICAgXy5tYXAob3BlbkV2ZW50cywgcmVwZWF0RXZlbnQzLmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyKSlcbiAgICAgICAgXSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyAnY2xhc3NOYW1lJzogJ2V2ZW50cy1saXN0IGNsb3NlZC1ldmVudHMgaGlkZS1mb3Itc21hbGwtb25seScgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g2Jywge30sICfXlNeU16HXoteV16og15TXkdeQ15XXqjonKSxcbiAgICAgICAgICAgIF8ubWFwKGNsb3NlZEV2ZW50cywgcmVwZWF0RXZlbnQ2LmJpbmQodGhpcywgb3BlbkV2ZW50cywgY2xvc2VkRXZlbnRzLCBoYXNVc2VyKSlcbiAgICAgICAgXSkpIDogbnVsbCwgdGhpcy5zdGF0ZS5ldmVudElkID8gc2NvcGVFZGl0aW5nRXZlbnQ5LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgIG9wZW5FdmVudHMsXG4gICAgICAgICAgICBjbG9zZWRFdmVudHMsXG4gICAgICAgICAgICBoYXNVc2VyXG4gICAgICAgIF0pIDogbnVsbCkgOiBudWxsLCAhaGFzVXNlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAndXNlci1lZGl0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAna2V5JzogJ3VzZXItZWRpdC1jb250YWluZXInXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlckZvcm0sIHsgJ3VpZCc6IHRoaXMucHJvcHMuYXV0aERhdGEudWlkIH0pKSA6IG51bGwpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlT3BlbkV2ZW50c0Nsb3NlZEV2ZW50c0hhc1VzZXIxMC5hcHBseSh0aGlzLCBbXSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UvaG9tZVBhZ2UucnRcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IF8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFJlYWN0UmVkdXggPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBnYW1lc0NvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2dhbWVDb25zdGFudHMnKTtcbmNvbnN0IGJvb2tpbmdzQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvYm9va2luZ3NDb25zdGFudHMnKTtcbmNvbnN0IHRlYW1zRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWxzL3RlYW1zRGF0YScpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvZXZlbnRJdGVtLnNjc3MnKTtcblxuZnVuY3Rpb24gaXNCb29raW5nRW5hYmxlZChldmVudCwgdXNlcikge1xuICAgIHN3aXRjaCAoZXZlbnQuc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgZ2FtZXNDb25zdGFudHMuU1RBVFVTLk9QRU5fRk9SX0FMTDpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIGdhbWVzQ29uc3RhbnRzLlNUQVRVUy5PUEVOX0ZPUl9NRU1CRVJTOiB7XG4gICAgICAgICAgICByZXR1cm4gdXNlci5zZWFzb25UaWNrZXRzID4gMFxuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgICBjb25zdCBhdXRoRGF0YSA9IHN0YXRlLmF1dGhEYXRhO1xuICAgIGNvbnN0IHVzZXJzID0gc3RhdGUudXNlcnM7XG4gICAgY29uc3QgZXZlbnQgPSBzdGF0ZS5ldmVudHNbb3duUHJvcHMuZXZlbnRJZF07XG4gICAgY29uc3QgYm9va2luZ3MgPSBzdGF0ZS5ib29raW5ncztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhvbWVUZWFtOiB0ZWFtc0RhdGEuSEFQT0VMX0pFUlVTQUxFTSxcbiAgICAgICAgYXdheVRlYW06IHRlYW1zRGF0YVtldmVudC50eXBlSWRdLFxuICAgICAgICBzdGF0dXM6IGV2ZW50LnN0YXR1cyxcbiAgICAgICAgZGF0ZTogZXZlbnQuZGF5ICsgJy8nICsgZXZlbnQubW9udGggKyAnLycgKyBldmVudC55ZWFyLFxuICAgICAgICB0aW1lOiBldmVudC5ob3VyICsgJzonICsgZXZlbnQubWludXRlLFxuICAgICAgICBpc0Jvb2tpbmdBbGxvd2VkOiBpc0Jvb2tpbmdFbmFibGVkKGV2ZW50LCB1c2Vyc1thdXRoRGF0YS51aWRdKSxcbiAgICAgICAgaXNCb29rZWQ6IF8uaGFzSW4oYm9va2luZ3MsIFthdXRoRGF0YS51aWQsIG93blByb3BzLmV2ZW50SWRdKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGVhbUxvZ29zKGhvbWUsIGF3YXkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cHMtaW1hZ2VzIG1lZGl1bS00IHNtYWxsLTEyIHRleHQtY2VudGVyIG1lZGl1bS10ZXh0LXJpZ2h0IGNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXZlbnQtaW1hZ2Ugc21hbGwgaGlkZS1mb3Itc21hbGwtb25seVwiIHNyYz17aG9tZS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JvdXAtdGV4dCBoaWRlLWZvci1zbWFsbC1vbmx5XCI+e2hvbWUubGFiZWx9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZS1mb3Itc21hbGwtb25seSBzZXBhcmF0b3JcIj4gLSA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIHNtYWxsIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBzcmM9e2F3YXkubG9nb30vPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgaGlkZS1mb3Itc21hbGwtb25seVwiPnthd2F5LmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3Vwcy1uYW1lcyBzaG93LWZvci1zbWFsbC1vbmx5IHRleHQtY2VudGVyIHJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBzbWFsbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXZlbnQtaW1hZ2UgYmlnXCIgc3JjPXtob21lLmxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JvdXAtdGV4dCBzbWFsbFwiPntob21lLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgc21hbGwtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImV2ZW50LWltYWdlIGJpZ1wiIHNyYz17YXdheS5sb2dvfS8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyb3VwLXRleHQgc21hbGxcIj57YXdheS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRUaW1lQW5kRGF0ZShkYXRlLCB0aW1lLCBpc09wZW5Gb3JCb29raW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnQtaW5mbyBjb2x1bW4gbWVkaXVtLTIgc21hbGwtMTIgaGlkZS1mb3Itc21hbGwtb25seVwiPlxuICAgICAgICAgICAgICAgIHsgaXNPcGVuRm9yQm9va2luZyA/IDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXRpbWVcIj57dGltZX08L3NwYW4+IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtZGF0ZVwiPntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIHNob3ctZm9yLXNtYWxsLW9ubHkgY29sb3JlZFwiPlxuICAgICAgICAgICAgICAgIHsgaXNPcGVuRm9yQm9va2luZyA/IDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXRpbWVcIj57dGltZX08L3NwYW4+IDogbnVsbCB9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXZlbnQtZGF0ZVwiPntkYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGdWxseUJvb2tlZExhYmVsKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIGhpZGUtZm9yLXNtYWxsLW9ubHlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJldmVudC1zdGF0dXNcIj57Z2FtZXNDb25zdGFudHMuVFJBTlNMQVRJT05TLmZ1bGx5Qm9va2VkfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50LWluZm8gY29sdW1uIG1lZGl1bS0yIHNtYWxsLTEyIHNob3ctZm9yLXNtYWxsLW9ubHkgY29sb3JlZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV2ZW50LXN0YXR1c1wiPntnYW1lc0NvbnN0YW50cy5UUkFOU0xBVElPTlMuZnVsbHlCb29rZWR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvb2tpbmdCdXR0b24oaXNCb29raW5nQWxsb3dlZCwgaXNCb29rZWQsIG9uQm9va2luZykge1xuICAgIGNvbnN0IGJvb2tCdXR0b24gPSAoXG4gICAgICAgIDxzcGFuIGtleT1cImJvb2stYnRuXCI+XG4gICAgICAgICAgICA8c3Bhbj57Ym9va2luZ3NDb25zdGFudHMuVFJBTlNMQVRJT05TLmJvb2t9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYnVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcblxuICAgIGNvbnN0IGVkaXRCb29raW5nQnV0dG9uID0gKFxuICAgICAgICA8c3BhbiBrZXk9XCJlZGl0LWJ0blwiPlxuICAgICAgICAgICAgPHNwYW4+e2Jvb2tpbmdzQ29uc3RhbnRzLlRSQU5TTEFUSU9OUy5lZGl0Qm9va2luZ308L3NwYW4+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1idXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIHN1Y2Nlc3Mgc21hbGxcIiBrZXk9XCJyZWdpc3Rlci1idG5cIiBvbkNsaWNrPXtvbkJvb2tpbmd9IGRpc2FibGVkPXshaXNCb29raW5nQWxsb3dlZH0+XG4gICAgICAgICAgICB7IGlzQm9va2VkID8gZWRpdEJvb2tpbmdCdXR0b24gOiBib29rQnV0dG9uIH1cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvb2tpbmdDYW5jZWxsYXRpb25CdXR0b24ob25DYW5jZWxCb29raW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIHNtYWxsIGFsZXJ0XCIga2V5PVwicmVtb3ZlLWJ0blwiIG9uQ2xpY2s9e29uQ2FuY2VsQm9va2luZ30+XG4gICAgICAgICAgICA8c3Bhbj57Ym9va2luZ3NDb25zdGFudHMuVFJBTlNMQVRJT05TLmNhbmNlbEJvb2tpbmd9PC9zcGFuPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG4gICAgICAgIDwvYT5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25zQnV0dG9ucyhpc09wZW5Gb3JCb29raW5nLCBpc0Jvb2tpbmdBbGxvd2VkLCBpc0Jvb2tlZCwgb25Cb29raW5nLCBvbkNhbmNlbEJvb2tpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi1idXR0b25zIG1lZGl1bS00IHNtYWxsLTEyIHRleHQtY2VudGVyIG1lZGl1bS10ZXh0LWxlZnQgY29sdW1uXCI+XG4gICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgPyBjcmVhdGVCb29raW5nQnV0dG9uKGlzQm9va2luZ0FsbG93ZWQsIGlzQm9va2VkLCBvbkJvb2tpbmcpIDogbnVsbCB9XG4gICAgICAgICAgICB7IGlzT3BlbkZvckJvb2tpbmcgJiYgaXNCb29rZWQgPyBjcmVhdGVCb29raW5nQ2FuY2VsbGF0aW9uQnV0dG9uKG9uQ2FuY2VsQm9va2luZykgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgRXZlbnRJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGlzT3BlbkZvckJvb2tpbmcgPSB0aGlzLnByb3BzLnN0YXR1cyAhPT0gZ2FtZXNDb25zdGFudHMuU1RBVFVTLkNMT1NFRDtcbiAgICAgICAgY29uc3QgaXNGdWxseUJvb2tlZCA9IHRoaXMucHJvcHMuc3RhdHVzID09PSBnYW1lc0NvbnN0YW50cy5TVEFUVVMuRlVMTFlfQk9PS0VEO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudC1pdGVtIHJvdyBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIHsgY3JlYXRlVGVhbUxvZ29zKHRoaXMucHJvcHMuaG9tZVRlYW0sIHRoaXMucHJvcHMuYXdheVRlYW0pIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUV2ZW50VGltZUFuZERhdGUodGhpcy5wcm9wcy5kYXRlLCB0aGlzLnByb3BzLnRpbWUsIGlzT3BlbkZvckJvb2tpbmcgKX1cbiAgICAgICAgICAgICAgICB7IGlzRnVsbHlCb29rZWQgPyBjcmVhdGVGdWxseUJvb2tlZExhYmVsKCkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUFjdGlvbnNCdXR0b25zKGlzT3BlbkZvckJvb2tpbmcsIHRoaXMucHJvcHMuaXNCb29raW5nQWxsb3dlZCwgdGhpcy5wcm9wcy5pc0Jvb2tlZCwgdGhpcy5wcm9wcy5vbkJvb2tpbmcsIHRoaXMucHJvcHMub25DYW5jZWxCb29raW5nKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkV2ZW50SXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgaG9tZVRlYW06IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBsb2dvOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBhd2F5VGVhbTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGxvZ286IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGRhdGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGltZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGF0dXM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNCb29raW5nQWxsb3dlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNCb29rZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIG9uQm9va2luZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DYW5jZWxCb29raW5nOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShFdmVudEl0ZW0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2V2ZW50SXRlbS5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgU1RBVFVTOiB7XG4gICAgQ0xPU0VEOiAnY2xvc2VkJyxcbiAgICBPUEVOX0ZPUl9NRU1CRVJTOiAnb3BlbkZvck1lbWJlcnMnLFxuICAgIE9QRU5fRk9SX0FMTDogJ29wZW5Gb3JBbGwnLFxuICAgIEZVTExZX0JPT0tFRDogJ2Z1bGx5Qm9va2VkJ1xuICB9LFxuICBUUkFOU0xBVElPTlM6IHtcbiAgICBjbG9zZWQ6ICfXlNeU16jXqdee15Qg16HXkteV16jXlCcsXG4gICAgb3BlbkZvck1lbWJlcnM6ICfXlNeU16jXqdee15Qg16TXqteV15fXlCDXnNee16DXldeZ15kg15TXodei15XXqicsXG4gICAgb3BlbkZvckFsbDogJ9eU15TXqNep157XlCDXpNeq15XXl9eUINec15vXldec150nLFxuICAgIGZ1bGx5Qm9va2VkOiAn15TXlNeh16LXlCDXntec15DXlCdcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvZ2FtZUNvbnN0YW50cy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBUUkFOU0xBVElPTlM6IHtcbiAgICBib29rOiAn15TXqNep150nLFxuICAgIGVkaXRCb29raW5nOiAn16LXqNeV15onLFxuICAgIGNhbmNlbEJvb2tpbmc6ICfXkdeY15wg15TXqNep157XlCdcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvYm9va2luZ3NDb25zdGFudHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgSEFQT0VMX0pFUlVTQUxFTToge1xuICAgIGxhYmVsOiAn15TXpNeV16LXnCDXmdeo15XXqdec15nXnScsXG4gICAgbG9nbzogJ2h0dHA6Ly9oYXBvZWwuY28uaWwvc2l0ZXMvZGVmYXVsdC9maWxlcy9sb2dvMTIweDEyMC5wbmcnXG4gIH0sXG4gICdoYXBvZWwtdGx2Jzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYXBvZWx0YS5wbmcnLFxuICAgIGxhYmVsOiAn15TXpNeV16LXnCDXqtecINeQ15HXmdeRJ1xuICB9LFxuICAnbWFjY2FiaS10bHYnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX21hY2NhYmkucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINeq15wg15DXkdeZ15EnXG4gIH0sXG4gICdoZXJ6ZWxpeWEnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3NoYXJvbi5wbmcnLFxuICAgIGxhYmVsOiAn15HXoNeZINeU16jXptec15nXlCdcbiAgfSxcbiAgJ2tpcnlhdC1nYXQnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL0ltYWdlcy90ZWFtcy9iaWdHYXQucG5nJyxcbiAgICBsYWJlbDogJ9ee15vXkdeZINen16jXmdeqINeS16onXG4gIH0sXG4gICdnaWxib2EnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX0dhbGlsLnBuZycsXG4gICAgbGFiZWw6ICfXktec15nXnC/Xktec15HXldeiJ1xuICB9LFxuICAnbmFoYXJpeWEnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX25haGFyaWEucG5nJyxcbiAgICBsYWJlbDogJ9ei15nXqNeV16DXmSDXoNeU16jXmdeUJ1xuICB9LFxuICAnaG9sb24nOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9hcnRpY2xlcy9sb2dvX2hoLnBuZycsXG4gICAgbGFiZWw6ICfXlNek15XXotecINeX15XXnNeV158nXG4gIH0sXG4gICdhc2hkb2QnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2FzaGRvZC5wbmcnLFxuICAgIGxhYmVsOiAn157Xm9eR15kg15DXqdeT15XXkydcbiAgfSxcbiAgJ2hhaWZhJzoge1xuICAgIGxvZ286ICdodHRwOi8vd3d3LmJhc2tldC5jby5pbC9waWNzLzIwMDcvbG9nb3MvbG9nb19oYWlmYS5wbmcnLFxuICAgIGxhYmVsOiAn157Xm9eR15kg15fXmdek15QnXG4gIH0sXG4gICdyaXNob24nOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX3Jpc2hvbi5wbmcnLFxuICAgIGxhYmVsOiAn157Xm9eR15kg16jXkNep15XXnyDXnNem15nXldefJ1xuICB9LFxuICAnZWlsYXQnOiB7XG4gICAgbG9nbzogJ2h0dHA6Ly93d3cuYmFza2V0LmNvLmlsL3BpY3MvMjAwNy9sb2dvcy9sb2dvX2VpbGF0LnBuZycsXG4gICAgbGFiZWw6ICfXlNek15XXotecINeQ15nXnNeqJ1xuICB9LFxuICAnbGp1YmxqYW5hJzoge1xuICAgIGxvZ286ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi84LzhlL1VuaW9uX29saW1waWphLnBuZy8xNDBweC1Vbmlvbl9vbGltcGlqYS5wbmcnLFxuICAgIGxhYmVsOiAn15zXldeR15zXmdeQ16DXlCdcbiAgfSxcbiAgJ3ZhbGVuY2lhJzoge1xuICAgIGxvZ286ICdodHRwOi8vc2FtdmFucm9zc29tLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8xMC92YWxlbmNpYS1iYXNrZXQxLWxvZ28uanBnJyxcbiAgICBsYWJlbDogJ9eV15zXoNeh15nXlCdcbiAgfSxcbiAgJ2t1YmFuJzoge1xuICAgIGxvZ286ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi8wLzA0L0xva29tb3Rpdl9LdWJhbl9sb2dvLnBuZy8yMDBweC1Mb2tvbW90aXZfS3ViYW5fbG9nby5wbmcnLFxuICAgIGxhYmVsOiAn15zXlden15XXnteV15jXmdeRINen15XXkdeQ158nXG4gIH0sXG4gICdmdWVubGFicmFkYSc6IHtcbiAgICBsb2dvOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvMS8xMy9CYWxvbmNlc3RvZnVlbmxhYnJhZGEuanBnLzExMHB4LUJhbG9uY2VzdG9mdWVubGFicmFkYS5qcGcnLFxuICAgIGxhYmVsOiAn16TXldeQ16DXnNeR16jXk9eUJ1xuICB9LFxuICAndWxtJzoge1xuICAgIGxvZ286ICdodHRwOi8vbmFjaHd1Y2hzLmJidTAxLmNvbS9tb2R1bGVzL21vZF9iYnVuZXdzZmxhc2gvYXNzZXRzL2ltYWdlcy9ub2ltYWdlX3RodW1iLmpwZycsXG4gICAgbGFiZWw6ICfXkNeV15zXnSdcbiAgfSxcbiAgJ3ZpbG5hJzoge1xuICAgIGxvZ286ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi90aHVtYi83Lzc1L0JDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLzkwN3B4LUJDX0xpZXR1dm9zX1J5dGFzX2xvZ28uc3ZnLnBuZycsXG4gICAgbGFiZWw6ICfXqNeZ15jXkNehINeV15nXnNeg15QnXG4gIH0sXG4gICdub3Znb3JvZCc6IHtcbiAgICBsb2dvOiAnaHR0cDovL29seW1waWFrb3MtbGl2ZS5nci9pbWcvdGVhbXMvTml6aG55JTIwTm92Z29yb2QucG5nJyxcbiAgICBsYWJlbDogJ9eg15nXltez16DXmSdcbiAgfSxcbiAgJ3plbml0Jzoge1xuICAgIGxvZ286ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjUvRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcvMjIwcHgtRkNfWmVuaXRfMV9zdGFyXzIwMTVfbG9nby5wbmcnLFxuICAgIGxhYmVsOiAn15bXoNeZ15gnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdGVhbXNEYXRhLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEl0ZW0uc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ldmVudEl0ZW0uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2V2ZW50SXRlbS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50LWl0ZW0ge1xcbiAgZm9udC1zaXplOiAwLjllbTsgfVxcbiAgLmV2ZW50LWl0ZW06Zmlyc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmdyb3Vwcy1pbWFnZXMgLnNlcGFyYXRvciB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XFxuICAuZXZlbnQtaXRlbSAuZXZlbnQtaW1hZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWltYWdlLmJpZyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICB3aWR0aDogOTBweDtcXG4gICAgICBoZWlnaHQ6IDkwcHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWltYWdlLnNtYWxsIHtcXG4gICAgICBtYXJnaW46IDAgNXB4O1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNDBweDsgfVxcbiAgLmV2ZW50LWl0ZW0gLmdyb3Vwcy1uYW1lcyB7XFxuICAgIHBhZGRpbmc6IDAgNGVtOyB9XFxuICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuZXZlbnQtaW5mby5jb2xvcmVkIHtcXG4gICAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWluZm8gLmV2ZW50LXN0YXR1cyB7XFxuICAgICAgY29sb3I6ICNEMzJGMkY7IH1cXG4gICAgLmV2ZW50LWl0ZW0gLmV2ZW50LWluZm8gc3BhbiB7XFxuICAgICAgbWFyZ2luOiAwIDE1cHg7IH1cXG4gIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogNXB4OyB9XFxuICAgIC5ldmVudC1pdGVtIC5hY3Rpb24tYnV0dG9ucyAuYnV0dG9uLnNtYWxsIHtcXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgICAgbWFyZ2luOiAwIDVweDsgfVxcbiAgICAuZXZlbnQtaXRlbSAuYWN0aW9uLWJ1dHRvbnMgLmJ1dHRvbiBpIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL3NyYy9zdHlsZXMvZXZlbnRJdGVtLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9ib29raW5nRm9ybS5ydCc7XG5cbmNvbnN0IGVtcHR5Qm9va2luZyA9IHtcbiAgcGFpZFNlYXRzOiAwLFxuICBleHRyYVNlYXRzOiAwLFxuICBwaWNrVXA6ICd0bHYnLFxuICBkcm9wT2ZmOiAndGx2J1xufTtcblxuY29uc3QgYm9va2luZ0Zvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQm9va2luZ0Zvcm0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uU3VibWl0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgb25DbG9zZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgYm9va2luZyA9IF8uZGVmYXVsdHModGhpcy5wcm9wcy5ib29raW5nLCB7IHBhaWRTZWF0czogdGhpcy5wcm9wcy5zZWFzb25UaWNrZXRzIH0sIGVtcHR5Qm9va2luZyk7XG4gICAgcmV0dXJuIF8ubWVyZ2Uoe30sIGJvb2tpbmcsIHtcbiAgICAgIHBpY2tVcEVuYWJsZWQ6ICEhYm9va2luZy5waWNrVXAsXG4gICAgICBkcm9wT2ZmRW5hYmxlZDogISFib29raW5nLmRyb3BPZmZcbiAgICB9KTtcbiAgfSxcblxuICBvbkNoYW5nZShlLCB2YWxpZGF0aW9uVHlwZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdudW1lcmljJykge1xuICAgICAgaWYgKCEvXlswLTldKiQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGlvblR5cGUgPT09ICdoZWJyZXcnKSB7XG4gICAgICBpZiAoIS9eW9eQLdeqXFxzXSokLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgdG9nZ2xlUGlja1VwKGUpIHtcbiAgICBjb25zdCBwaWNrVXBFbmFibGVkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGlja1VwRW5hYmxlZCB9KTtcbiAgICBpZiAoIXBpY2tVcEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaWNrVXA6ICcnIH0pO1xuICAgIH1cbiAgfSxcblxuICB0b2dnbGVEcm9wT2ZmKGUpIHtcbiAgICBjb25zdCBkcm9wT2ZmRW5hYmxlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BPZmZFbmFibGVkIH0pO1xuICAgIGlmICghZHJvcE9mZkVuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wT2ZmOiAnJyB9KTtcbiAgICB9XG4gIH0sXG5cbiAgb25OdW1lcmljQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IF8udG9OdW1iZXIoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogdmFsdWUgfSk7XG4gIH0sXG5cbiAgaXNGb3JtVmFsaWQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUucGFpZFNlYXRzID09PSAwICYmIHRoaXMuc3RhdGUuZXh0cmFTZWF0cyA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkICYmICF0aGlzLnN0YXRlLmRyb3BPZmZFbmFibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGlja1VwRW5hYmxlZCAmJiB0aGlzLnN0YXRlLnBpY2tVcCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZCAmJiB0aGlzLnN0YXRlLmRyb3BPZmYgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgYm9va2luZ1RvU3VibWl0ID0gXy5waWNrKHRoaXMuc3RhdGUsIF8ua2V5cyhlbXB0eUJvb2tpbmcpKTtcbiAgICB0aGlzLnByb3BzLm9uU3VibWl0KGJvb2tpbmdUb1N1Ym1pdCk7XG4gIH0sXG5cbiAgcmVuZGVyOiB0ZW1wbGF0ZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYm9va2luZ0Zvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYm9va2luZ0Zvcm0vYm9va2luZ0Zvcm0uanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uL2Zvcm1GcmFtZScsXG4gICAgJy4uLy4uL3V0aWxzL2NvbnN0YW50cydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgRm9ybUZyYW1lLCBjb25zdGFudHMpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gcmVwZWF0U2VhdDEoc2VhdCwgc2VhdEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ3NlYXQtJyArIHNlYXRJbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IHNlYXRJbmRleFxuICAgICAgICB9LCBzZWF0SW5kZXgsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0RXh0cmFTZWF0MihleHRyYVNlYXQsIGV4dHJhU2VhdEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ2V4dHJhU2VhdC0nICsgZXh0cmFTZWF0SW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBleHRyYVNlYXRJbmRleFxuICAgICAgICB9LCBleHRyYVNlYXRJbmRleCwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTMoZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVBpY2tVcChlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0U3RhdGlvbjQoc3RhdGlvbiwgc3RhdGlvbkluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ3N0YXRpb24tJyArIHN0YXRpb25JbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IHN0YXRpb25JbmRleFxuICAgICAgICB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgc3RhdGlvbiwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlNShlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRHJvcE9mZihlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0U3RhdGlvbjYoc3RhdGlvbiwgc3RhdGlvbkluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ3N0YXRpb24tJyArIHN0YXRpb25JbmRleCxcbiAgICAgICAgICAgICd2YWx1ZSc6IHN0YXRpb25JbmRleFxuICAgICAgICB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgc3RhdGlvbiwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1GcmFtZSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICAgICAgICdvblN1Ym1pdCc6IHRoaXMub25TdWJtaXQsXG4gICAgICAgICAgICAnb25DbG9zZSc6IHRoaXMucHJvcHMub25DbG9zZSxcbiAgICAgICAgICAgICdkaXNhYmxlZCc6ICF0aGlzLmlzRm9ybVZhbGlkKClcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2Jvb2tpbmctZm9ybSBzbWFsbC0xMSBzbWFsbC1jZW50ZXJlZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3JvdycgfSwgdGhpcy5wcm9wcy5zZWFzb25UaWNrZXRzID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdzbWFsbC02IGNvbHVtbnMnLFxuICAgICAgICAgICAgJ2tleSc6ICc0MDQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXm9ee15XXqiDXnteg15XXmdeZ151cXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5wYWlkU2VhdHMsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbk51bWVyaWNDaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAncGFpZFNlYXRzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKF8udGltZXModGhpcy5wcm9wcy5zZWFzb25UaWNrZXRzICsgMSksIHJlcGVhdFNlYXQxLmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtNiBjb2x1bW5zIGVuZCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7fSwgJ9eg15XXodei15nXnSDXkdeq16nXnNeV151cXG4gICAgICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5zdGF0ZS5leHRyYVNlYXRzLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25OdW1lcmljQ2hhbmdlLFxuICAgICAgICAgICAgICAgICduYW1lJzogJ2V4dHJhU2VhdHMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXy5tYXAoXy50aW1lcyhjb25zdGFudHMuTUFYX0VYVFJBX1BBU1NFTkdFUlMpLCByZXBlYXRFeHRyYVNlYXQyLmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAncm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtMyBsYXJnZS0yIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnaHRtbEZvcic6ICdwaWNrVXBUb2dnbGUnIH0sICfXlNec15XXmicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc3dpdGNoJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc3dpdGNoLWlucHV0JyxcbiAgICAgICAgICAgICdpZCc6ICdwaWNrVXBUb2dnbGUnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnY2hlY2tib3gnLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2UzLmJpbmQodGhpcyksXG4gICAgICAgICAgICAnY2hlY2tlZCc6IHRoaXMuc3RhdGUucGlja1VwRW5hYmxlZFxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1wYWRkbGUnLFxuICAgICAgICAgICAgJ2h0bWxGb3InOiAncGlja1VwVG9nZ2xlJ1xuICAgICAgICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtOSBsYXJnZS0xMCBjb2x1bW5zIGVuZCBtb3JlLXNwYWNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUucGlja1VwLFxuICAgICAgICAgICAgICAgICdvbkNoYW5nZSc6IHRoaXMub25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAncGlja1VwJyxcbiAgICAgICAgICAgICAgICAnZGlzYWJsZWQnOiAhdGhpcy5zdGF0ZS5waWNrVXBFbmFibGVkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ3N0eWxlJzogeyBkaXNwbGF5OiAnbm9uZScgfVxuICAgICAgICAgICAgfSwgJ9eR15fXqCcpLFxuICAgICAgICAgICAgXy5tYXAoY29uc3RhbnRzLlNUQVRJT05TLCByZXBlYXRTdGF0aW9uNC5iaW5kKHRoaXMpKVxuICAgICAgICBdKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAncm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtMyBsYXJnZS0yIGNvbHVtbnMnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgeyAnaHRtbEZvcic6ICdkcm9wT2ZmVG9nZ2xlJyB9LCAn15fXlteV16gnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3N3aXRjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1pbnB1dCcsXG4gICAgICAgICAgICAnaWQnOiAnZHJvcE9mZlRvZ2dsZScsXG4gICAgICAgICAgICAndHlwZSc6ICdjaGVja2JveCcsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTUuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdjaGVja2VkJzogdGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZFxuICAgICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3N3aXRjaC1wYWRkbGUnLFxuICAgICAgICAgICAgJ2h0bWxGb3InOiAnZHJvcE9mZlRvZ2dsZSdcbiAgICAgICAgfSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NtYWxsLTkgbGFyZ2UtMTAgY29sdW1ucyBlbmQgbW9yZS1zcGFjZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmRyb3BPZmYsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAnbmFtZSc6ICdkcm9wT2ZmJyxcbiAgICAgICAgICAgICAgICAnZGlzYWJsZWQnOiAhdGhpcy5zdGF0ZS5kcm9wT2ZmRW5hYmxlZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdzdHlsZSc6IHsgZGlzcGxheTogJ25vbmUnIH1cbiAgICAgICAgICAgIH0sICfXkdeX16gnKSxcbiAgICAgICAgICAgIF8ubWFwKGNvbnN0YW50cy5TVEFUSU9OUywgcmVwZWF0U3RhdGlvbjYuYmluZCh0aGlzKSlcbiAgICAgICAgXSkpKSkpO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtLnJ0XG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4PSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuXG5jb25zdCBGb3JtRnJhbWUgPSByZXF1aXJlKCcuL2Zvcm1GcmFtZScpO1xuXG5jb25zdCB1c2VySW5mb0NvbnN0YW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL3VzZXJJbmZvQ29uc3RhbnRzJyk7XG5jb25zdCB1c2VyRm9ybVRyYW5zbGF0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWxzL3RyYW5zbGF0aW9ucy91c2VyRm9ybVRyYW5zbGF0aW9ucycpO1xuY29uc3QgdXNlckFjdGlvbnMgPSByZXF1aXJlKCcuLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJyk7XG5cbmNvbnN0IGVtcHR5VXNlciA9IHtcbiAgICBmaXJzdE5hbWU6ICcnLFxuICAgIGxhc3ROYW1lOiAnJyxcbiAgICBwaG9uZVByZWZpeDogJzA1MCcsXG4gICAgcGhvbmVOdW1iZXI6ICcnLFxuICAgIHN0YXRpb246ICd0bHYnLFxuICAgIHN1YnNjcmliZVNNUzogdHJ1ZSxcbiAgICBzdWJzY3JpYmVNYWlsOiB0cnVlLFxuICAgIHNlYXNvblRpY2tldHM6IDBcbn07XG5cbmZ1bmN0aW9uIGdldEVtcHR5VXNlckluZm8oZW1haWwpIHtcbiAgcmV0dXJuIF8uYXNzaWduKGVtcHR5VXNlciwgeyBlbWFpbCB9KTtcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICAgIGNvbnN0IHVzZXIgPSBzdGF0ZS51c2Vyc1tvd25Qcm9wcy51aWRdO1xuICAgIGNvbnN0IGF1dGhEYXRhID0gc3RhdGUuYXV0aERhdGE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VySW5mbzogdXNlciB8fCBnZXRFbXB0eVVzZXJJbmZvKGF1dGhEYXRhLmVtYWlsKSxcbiAgICAgICAgaXNBZG1pbk1vZGU6IGF1dGhEYXRhLmlzQWRtaW4sXG4gICAgICAgIGFsbG93VXNlclJlbW92ZTogYXV0aERhdGEuaXNBZG1pbiAmJiBhdXRoRGF0YS51aWQgIT09IG93blByb3BzLnVpZFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVVc2VyOiB1c2VyID0+IGRpc3BhdGNoKHVzZXJBY3Rpb25zLnVwZGF0ZVVzZXIob3duUHJvcHMudWlkLCB1c2VyKSksXG4gICAgICAgIHJlbW92ZVVzZXI6ICgpID0+IGRpc3BhdGNoKHVzZXJBY3Rpb25zLnJlbW92ZVVzZXIob3duUHJvcHMudWlkKSlcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZG1pblNlY3Rpb24oc2Vhc29uVGlja2V0cywgb25OdW1iZXJDaGFuZ2UpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PVwic2Vhc29uVGlja2V0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICA8bGFiZWw+15vXnteV16og157XoNeV15nXmdedXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzZWFzb25UaWNrZXRzXCIgdmFsdWU9e3NlYXNvblRpY2tldHN9IG9uQ2hhbmdlPXtvbk51bWJlckNoYW5nZX0+XG4gICAgICAgICAgICAgICAgeyBfLnRpbWVzKHVzZXJJbmZvQ29uc3RhbnRzLk1BWF9TRUFTT05fVElDS0VUUywgaSA9PiA8b3B0aW9uIGtleT17J2Ftb3VudC0nICsgaX0gdmFsdWU9e2l9PntpfTwvb3B0aW9uPikgfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlck5hbWVJbnB1dHMoZmlyc3ROYW1lLCBsYXN0TmFtZSwgb25UZXh0Q2hhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtNiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuRklSU1RfTkFNRSB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17Zmlyc3ROYW1lfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSBtYXhMZW5ndGg9XCIyMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS02IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5MQVNUX05BTUUgfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdE5hbWVcIiB2YWx1ZT17bGFzdE5hbWV9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IG1heExlbmd0aD1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsSW5wdXQoZW1haWwsIG9uVGV4dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PVwidXNlci1pbmZvLWVtYWlsLWlucHV0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5FTUFJTCB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtvblRleHRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaG9uZU51bWJlcklucHV0cyhwaG9uZVByZWZpeCwgcGhvbmVOdW1iZXIsIG9uVGV4dENoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTggY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlBIT05FX05VTUJFUiB9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbmFtZT1cInBob25lTnVtYmVyXCIgdmFsdWU9e3Bob25lTnVtYmVyfSBvbkNoYW5nZT17b25UZXh0Q2hhbmdlfSBtYXhMZW5ndGg9XCI3XCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTQgY29sdW1ucyBlbmRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5QSE9ORV9QUkVGSVggfVxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwaG9uZVByZWZpeFwiIHZhbHVlPXtwaG9uZVByZWZpeH0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHVzZXJJbmZvQ29uc3RhbnRzLlBIT05FX1BSRUZJWEVTLCBwcmVmaXggPT4gPG9wdGlvbiBrZXk9eydwaG9uZS1wcmVmaXgtJyArIHByZWZpeH0gdmFsdWU9e3ByZWZpeH0+e3ByZWZpeH08L29wdGlvbj4pfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpY2t1cFN0YXRpb25Sb3coc3RhdGlvbiwgcmVxdWVzdEZvck1lbWJlcnNoaXAsIG9uVGV4dENoYW5nZSwgb25Cb29sZWFuQ2hhbmdlKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+eyB1c2VyRm9ybVRyYW5zbGF0aW9ucy5GQVZPUklURV9QSUNLVVBfU1RBVElPTiB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInN0YXRpb25cIiB2YWx1ZT17c3RhdGlvbn0gb25DaGFuZ2U9e29uVGV4dENoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IF8ubWFwKHVzZXJJbmZvQ29uc3RhbnRzLlNUQVRJT05TLCBzdGF0aW9uID0+IDxvcHRpb24ga2V5PXsnc3RhdGlvbi0nICsgc3RhdGlvbn0gdmFsdWU9e3N0YXRpb259PnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuU1RBVElPTlNbc3RhdGlvbl0gfTwvb3B0aW9uPil9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVSZXF1ZXN0Rm9yTWVtYmVyc2hpcElucHV0KCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW0tNCBzbWFsbC0xMiBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuUkVRVUVTVF9GT1JfTUVNQkVSU0hJUCB9XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJlcXVlc3RGb3JNZW1iZXJzaGlwXCIgdmFsdWU9e3JlcXVlc3RGb3JNZW1iZXJzaGlwfSBvbkNoYW5nZT17b25Cb29sZWFuQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3VuZGVmaW5lZH0gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fT7XkdeX16g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3RydWV9Pteb1588L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2ZhbHNlfT7XnNeQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgeyBjcmVhdGVQaWNrVXBTdGF0aW9uSW5wdXQoKSB9XG4gICAgICAgICAgICB7IGNyZWF0ZVJlcXVlc3RGb3JNZW1iZXJzaGlwSW5wdXQoKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3RyaWJ1dGlvbklucHV0cyhzdWJzY3JpYmVNYWlsLCBzdWJzY3JpYmVTTVMsIG9uQm9vbGVhbkNoYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLTMgY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OLkVNQUlMIH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJzd2l0Y2gtaW5wdXRcIiBuYW1lPVwic3Vic2NyaWJlTWFpbFwiIGlkPVwic3Vic2NyaWJlTWFpbFwiIG9uQ2hhbmdlPXtvbkJvb2xlYW5DaGFuZ2V9IGNoZWNrZWQ9e3N1YnNjcmliZU1haWx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzd2l0Y2gtcGFkZGxlXCIgaHRtbEZvcj1cInN1YnNjcmliZU1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlRPR0dMRS5ZRVMgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1pbmFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuVE9HR0xFLk5PIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtMyBjb2x1bW4gZW5kXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuRElTVFJJQlVUSU9OLlNNUyB9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwic3dpdGNoLWlucHV0XCIgbmFtZT1cInN1YnNjcmliZVNNU1wiIGlkPVwic3Vic2NyaWJlU01TXCIgb25DaGFuZ2U9e29uQm9vbGVhbkNoYW5nZX0gY2hlY2tlZD17c3Vic2NyaWJlU01TfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoLXBhZGRsZVwiIGh0bWxGb3I9XCJzdWJzY3JpYmVTTVNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1hY3RpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj57IHVzZXJGb3JtVHJhbnNsYXRpb25zLlRPR0dMRS5ZRVMgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaC1pbmFjdGl2ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnsgdXNlckZvcm1UcmFuc2xhdGlvbnMuVE9HR0xFLk5PIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSBfLmNsb25lKHRoaXMucHJvcHMudXNlckluZm8pO1xuICB9XG5cbiAgaXNGb3JtVmFsaWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBoYXNBbGxSZXF1aXJlZEluZm8gPSAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRJbmZvID0gXy5waWNrKHRoaXMuc3RhdGUsIFsnZmlyc3ROYW1lJywgJ2xhc3ROYW1lJywgJ3Bob25lUHJlZml4JywgJ3Bob25lTnVtYmVyJ10pO1xuICAgICAgICAgIHJldHVybiAhXy5zb21lKHJlcXVpcmVkSW5mbywgXy5pc0VtcHR5KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhc1ZhbGlkUGhvbmVOdW1iZXIgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIubGVuZ3RoID09PSA3O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFzUmVxdWVzdEZvck1lbWJlcnNoaXBQcm9wZXJ0eSA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gXy5oYXModGhpcy5zdGF0ZSwgJ3JlcXVlc3RGb3JNZW1iZXJzaGlwJyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gaGFzQWxsUmVxdWlyZWRJbmZvKCkgJiYgaGFzVmFsaWRQaG9uZU51bWJlcigpICYmIGhhc1JlcXVlc3RGb3JNZW1iZXJzaGlwUHJvcGVydHkoKTtcbiAgfTtcblxuICBvbktleVByZXNzID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGlzRm9ybVZhbGlkKHRoaXMuc3RhdGUpKSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVVzZXIodGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlID0gKHR5cGUsIGUpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGlmIChlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdzZWxlY3Qtb25lJykge1xuICAgICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAhPT0gJ2ZhbHNlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyKHRoaXMuc3RhdGUpO1xuICAgICAgaWYgKF8uaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xvc2UpKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gIH07XG5cbiAgb25SZW1vdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZVVzZXIoKTtcbiAgICAgIGlmIChfLmlzRnVuY3Rpb24odGhpcy5wcm9wcy5vbkNsb3NlKSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IG9uVGV4dENoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzLCAndGV4dCcpO1xuICAgICAgY29uc3Qgb25OdW1iZXJDaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgJ251bWJlcicpO1xuICAgICAgY29uc3Qgb25Cb29sZWFuQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsICdib29sZWFuJyk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRnJhbWUgdGl0bGU9e3VzZXJGb3JtVHJhbnNsYXRpb25zLlRJVExFfVxuICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXt0aGlzLnByb3BzLmFsbG93VXNlclJlbW92ZSA/IHRoaXMub25SZW1vdmUgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMucHJvcHMub25DbG9zZX1cbiAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuaXNGb3JtVmFsaWQoKX0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWNlbnRlcmVkIHVzZXItY29udGFpbmVyXCIgb25LZXlQcmVzcz17dGhpcy5vbktleVByZXNzfT5cblxuICAgICAgICAgICAgICB7IGNyZWF0ZVVzZXJOYW1lSW5wdXRzKHRoaXMuc3RhdGUuZmlyc3ROYW1lLCB0aGlzLnN0YXRlLmxhc3ROYW1lLCBvblRleHRDaGFuZ2UpIH1cbiAgICAgICAgICAgICAgeyB0aGlzLnByb3BzLnVzZXJJbmZvLmVtYWlsID8gbnVsbCA6IGNyZWF0ZUVtYWlsSW5wdXQodGhpcy5zdGF0ZS5lbWFpbCwgb25UZXh0Q2hhbmdlKSB9XG4gICAgICAgICAgICAgIHsgY3JlYXRlUGhvbmVOdW1iZXJJbnB1dHModGhpcy5zdGF0ZS5waG9uZVByZWZpeCwgdGhpcy5zdGF0ZS5waG9uZU51bWJlciwgb25UZXh0Q2hhbmdlLCBvbk51bWJlckNoYW5nZSkgfVxuICAgICAgICAgICAgICB7IGNyZWF0ZVBpY2t1cFN0YXRpb25Sb3codGhpcy5zdGF0ZS5zdGF0aW9uLCB0aGlzLnN0YXRlLnJlcXVlc3RGb3JNZW1iZXJzaGlwLCBvblRleHRDaGFuZ2UsIG9uQm9vbGVhbkNoYW5nZSkgfVxuXG4gICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0FkbWluTW9kZSA/IGNyZWF0ZUFkbWluU2VjdGlvbih0aGlzLnN0YXRlLnNlYXNvblRpY2tldHMsIG9uTnVtYmVyQ2hhbmdlKSA6IG51bGwgfVxuXG4gICAgICAgICAgICAgIHsgY3JlYXRlRGlzdHJpYnV0aW9uSW5wdXRzKHRoaXMuc3RhdGUuc3Vic2NyaWJlTWFpbCwgdGhpcy5zdGF0ZS5zdWJzY3JpYmVTTVMsIG9uQm9vbGVhbkNoYW5nZSkgfVxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9Gb3JtRnJhbWU+XG4gICAgKTtcbiAgfVxufVxuXG5Vc2VyRm9ybS5Qcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlVXNlcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZW1vdmVVc2VyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGlzQWRtaW5Nb2RlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhbGxvd1VzZXJSZW1vdmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHVzZXJJbmZvOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe30pLFxuICAgIG9uQ2xvc2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UmVkdXguY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlckZvcm0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJGb3JtLmpzeCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBNQVhfU0VBU09OX1RJQ0tFVFM6IDcsXG4gIFBIT05FX1BSRUZJWEVTOiBbJzA1MCcsICcwNTInLCAnMDUzJywgJzA1NCcsICcwNTUnLCAnMDU3JywgJzA1OCddLFxuICBTVEFUSU9OUzogWydtb2RpaW4nLCAndGx2J11cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3VzZXJJbmZvQ29uc3RhbnRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFRJVExFOiAn16TXqNeY15nXnSDXkNeZ16nXmdeZ150nLFxuICBGSVJTVF9OQU1FOiAn16nXnScsXG4gIExBU1RfTkFNRTogJ9ep150g157Xqdek15fXlCcsXG4gIEVNQUlMOiAn15PXldeQ16gg15DXnNen15jXqNeV16DXmScsXG4gIFBIT05FX1BSRUZJWDogJ9en15nXk9eV157XqicsXG4gIFBIT05FX05VTUJFUjogJ9eY15zXpNeV158g16DXmdeZ15MnLFxuICBGQVZPUklURV9QSUNLVVBfU1RBVElPTjogJ9eq15fXoNeqINei15zXmdeUINee15XXoteT16TXqicsXG4gIFJFUVVFU1RfRk9SX01FTUJFUlNISVA6ICfXntei15XXoNeZ15nXnyDXkdee16DXldeZPycsXG4gIFNUQVRJT05TOiB7XG4gICAgbW9kaWluOiAn157XldeT15nXoteZ158nLFxuICAgIHRsdjogJ9eq15wg15DXkdeZ15EnXG4gIH0sXG4gIERJU1RSSUJVVElPTjoge1xuICAgIEVNQUlMOiAn16rXpNeV16bXqiDXkNeZ157XmdeZ15wnLFxuICAgIFNNUzogJ9eq16TXldem16ogU01TJ1xuICB9LFxuICBUT0dHTEU6IHtcbiAgICBZRVM6ICfXm9efJyxcbiAgICBOTzogJ9ec15AnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdHJhbnNsYXRpb25zL3VzZXJGb3JtVHJhbnNsYXRpb25zLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBVU0VSU19SRUNFSVZFRCwgVVNFUl9SRU1PVkVEIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnYmx1ZWJpcmQnO1xuXG5pbXBvcnQgKiBhcyBjbGllbnREQiBmcm9tICcuLi8uLi91dGlscy9jbGllbnREQic7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5cbmNvbnN0IFVTRVJfSU5GT19LRVlTID0gWydlbWFpbCcsICdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAncGhvbmVQcmVmaXgnLCAncGhvbmVOdW1iZXInLCAncmVxdWVzdEZvck1lbWJlcnNoaXAnLCAnc3RhdGlvbicsICdzdWJzY3JpYmVTTVMnLCAnc3Vic2NyaWJlTWFpbCcsICdwaG90b1VSTCddO1xuY29uc3QgUEFUSF9NQVAgPSB7XG4gIFVTRVJTX0lORk86ICd1c2Vyc0luZm8nLFxuICBTRUFTT05fVElDS0VUUzogJ3NlYXNvblRpY2tldHMnLFxuICBCT09LSU5HUzogJ2Jvb2tpbmdzJ1xufTtcblxuY29uc3QgYnVpbGRVc2VyID0gKHVzZXJJbmZvLCBzZWFzb25UaWNrZXRzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBfLm1lcmdlKHt9LCB1c2VySW5mbyk7XG4gIGlmIChzZWFzb25UaWNrZXRzKSB7XG4gICAgXy5tZXJnZSh1c2VyLCB7IHNlYXNvblRpY2tldHMgfSk7XG4gIH1cbiAgcmV0dXJuIHVzZXI7XG59O1xuXG5jb25zdCBmZXRjaEFsbFVzZXJzID0gKCkgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUylcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJzSW5mbywgc2Vhc29uVGlja2V0c10pID0+XG4gICAgICBfLnRyYW5zZm9ybSh1c2Vyc0luZm8sIChhY2MsIGluZm8sIHVpZCkgPT4ge1xuICAgICAgICBhY2NbdWlkXSA9IGJ1aWxkVXNlcihpbmZvLCBzZWFzb25UaWNrZXRzICYmIHNlYXNvblRpY2tldHNbdWlkXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIH0sIHt9KVxuICAgICk7XG59O1xuXG5jb25zdCBmZXRjaFNpbmdsZVVzZXIgPSB1aWQgPT4ge1xuICBjb25zdCB1c2VyUmVhZFByb21pc2VzID0gW1xuICAgIGNsaWVudERCLnJlYWQoUEFUSF9NQVAuVVNFUlNfSU5GTyArICcvJyArIHVpZCksXG4gICAgY2xpZW50REIucmVhZChQQVRIX01BUC5TRUFTT05fVElDS0VUUyArICcvJyArIHVpZClcbiAgXTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwodXNlclJlYWRQcm9taXNlcylcbiAgICAudGhlbigoW3VzZXJJbmZvLCBzZWFzb25UaWNrZXRzXSkgPT4ge1xuICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgIHJldHVybiB7IFt1aWRdOiBidWlsZFVzZXIodXNlckluZm8sIHNlYXNvblRpY2tldHMpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1JlbW92ZWQgPSB1aWQgPT4gKHtcbiAgdHlwZTogVVNFUl9SRU1PVkVELFxuICB1aWRcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlcnNSZWNlaXZlZCA9IHVzZXJzID0+ICh7XG4gIHR5cGU6IFVTRVJTX1JFQ0VJVkVELFxuICB1c2Vyc1xufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBjb25zdCB1aWQgPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ3VpZCddKTtcbiAgY29uc3QgaXNBZG1pbiA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAnaXNBZG1pbiddKTtcbiAgY29uc3QgZmV0Y2hQcm9taXNlID0gaXNBZG1pbiA/IGZldGNoQWxsVXNlcnMoKSA6IGZldGNoU2luZ2xlVXNlcih1aWQpO1xuXG4gIHJldHVybiBmZXRjaFByb21pc2VcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBpZiAodXNlcnMpIHtcbiAgICAgICAgZGlzcGF0Y2godXNlcnNSZWNlaXZlZCh1c2VycykpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAodWlkLCB1c2VyKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCBpc0FkbWluID0gXy5nZXQoZ2V0U3RhdGUoKSwgWydhdXRoRGF0YScsICdpc0FkbWluJ10pO1xuXG4gIGNvbnN0IHVzZXJVcGRhdGVQcm9taXNlcyA9IFtcbiAgICBjbGllbnREQi51cGRhdGUoJ3VzZXJzSW5mby8nICsgdWlkLCBfLnBpY2sodXNlciwgVVNFUl9JTkZPX0tFWVMpKVxuICBdO1xuXG4gIGlmIChpc0FkbWluICYmIHVzZXIuc2Vhc29uVGlja2V0cykge1xuICAgIHVzZXJVcGRhdGVQcm9taXNlcy5wdXNoKGNsaWVudERCLnNldEluKCdzZWFzb25UaWNrZXRzLycgKyB1aWQsIHVzZXIuc2Vhc29uVGlja2V0cykpO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UuYWxsKHVzZXJVcGRhdGVQcm9taXNlcylcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaCh1c2Vyc1JlY2VpdmVkKHsgW3VpZF06IHVzZXIgfSkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVVzZXIgPSB1aWQgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgY29uc3QgdXNlclJlbW92ZVByb21pc2VzID0gXy5tYXAoUEFUSF9NQVAsIHVzZXJQYXRoID0+IGNsaWVudERCLnJlbW92ZShgJHt1c2VyUGF0aH0vJHt1aWR9YCkpO1xuXG4gIHJldHVybiBQcm9taXNlLmFsbCh1c2VyUmVtb3ZlUHJvbWlzZXMpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlcnNSZW1vdmVkKHVpZCkpKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZVBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ob21lUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vaG9tZVBhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ob21lLXBhZ2UgLmV2ZW50cyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgLmhvbWUtcGFnZSAuZXZlbnRzIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7IH0gfVxcblxcbi5ob21lLXBhZ2UgLm9wZW4tZXZlbnRzIHtcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7IH1cXG5cXG4uaG9tZS1wYWdlIC5ldmVudHMtbGlzdCBoNiB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5ob21lLXBhZ2UgLm5vLWJvb2tpbmdzIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzQyNDI0MjsgfVxcbiAgLmhvbWUtcGFnZSAubm8tYm9va2luZ3MgaSB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbi5ob21lLXBhZ2UgLmV2ZW50LWl0ZW0ge1xcbiAgcGFkZGluZzogNXB4IDA7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xcbiAgICAuaG9tZS1wYWdlIC5ldmVudC1pdGVtIHtcXG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMzBweCAwOyB9IH1cXG4gIC5ob21lLXBhZ2UgLmV2ZW50LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgYmFja2dyb3VuZDogI0VFRUVFRTsgfVxcbiAgLmhvbWUtcGFnZSAuZXZlbnQtaXRlbTpudGgtY2hpbGQob2RkKSB7XFxuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS9ob21lUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEJPT0tJTkdTX1JFQ0VJVkVELCBCT09LSU5HX0NBTkNFTEVEIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcblxuY29uc3QgQk9PS0lOR19EQVRBX0tFWVMgPSBbJ3BhaWRTZWF0cycsICdleHRyYVNlYXRzJywgJ3BpY2tVcCcsICdkcm9wT2ZmJ107XG5jb25zdCBCT09LSU5HU19QQVRIID0gJ2Jvb2tpbmdzJztcblxuY29uc3QgZmV0Y2hVc2VyQm9va2luZ3MgPSB1aWQgPT5cbiAgY2xpZW50REIucmVhZChgJHtCT09LSU5HU19QQVRIfS8ke3VpZH1gKVxuICAgIC50aGVuKHVzZXJCb29raW5ncyA9PiB7XG4gICAgICBpZiAodXNlckJvb2tpbmdzKSB7XG4gICAgICAgIHJldHVybiB7IFt1aWRdOiB1c2VyQm9va2luZ3MgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG5jb25zdCBmZXRjaEFsbEJvb2tpbmdzID0gKCkgPT5cbiAgY2xpZW50REIucmVhZChCT09LSU5HU19QQVRIKTtcblxuZXhwb3J0IGNvbnN0IGJvb2tpbmdzUmVjZWl2ZWQgPSBib29raW5ncyA9PiAoe1xuICB0eXBlOiBCT09LSU5HU19SRUNFSVZFRCxcbiAgYm9va2luZ3Ncbn0pO1xuXG5leHBvcnQgY29uc3QgYm9va2luZ3NDYW5jZWxlZCA9ICh1aWQsIGV2ZW50SWQpID0+ICh7XG4gIHR5cGU6IEJPT0tJTkdfQ0FOQ0VMRUQsXG4gIHVpZCxcbiAgZXZlbnRJZFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEJvb2tpbmdzID0gKCkgPT4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBjb25zdCB1aWQgPSBfLmdldChnZXRTdGF0ZSgpLCBbJ2F1dGhEYXRhJywgJ3VpZCddKTtcbiAgY29uc3QgaXNBZG1pbiA9IF8uZ2V0KGdldFN0YXRlKCksIFsnYXV0aERhdGEnLCAnaXNBZG1pbiddKTtcbiAgY29uc3QgZmV0Y2hQcm9taXNlID0gaXNBZG1pbiA/IGZldGNoQWxsQm9va2luZ3MoKSA6IGZldGNoVXNlckJvb2tpbmdzKHVpZCk7XG5cbiAgcmV0dXJuIGZldGNoUHJvbWlzZVxuICAgIC50aGVuKGJvb2tpbmdzID0+IHtcbiAgICAgIGlmIChib29raW5ncykge1xuICAgICAgICBkaXNwYXRjaChib29raW5nc1JlY2VpdmVkKGJvb2tpbmdzKSk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQm9va2luZyA9ICh1aWQsIGV2ZW50SWQsIGJvb2tpbmdEYXRhKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICBjb25zdCBib29raW5nRGF0YVRvVXBkYXRlID0gXy5waWNrKGJvb2tpbmdEYXRhLCBCT09LSU5HX0RBVEFfS0VZUyk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnVwZGF0ZShgJHtCT09LSU5HU19QQVRIfS8ke3VpZH0vJHtldmVudElkfWAsIGJvb2tpbmdEYXRhVG9VcGRhdGUpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goYm9va2luZ3NSZWNlaXZlZCh7IFt1aWRdOiB7IFtldmVudElkXTogYm9va2luZ0RhdGFUb1VwZGF0ZSB9IH0pKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxCb29raW5nID0gKHVpZCwgZXZlbnRJZCkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnJlbW92ZShgJHtCT09LSU5HU19QQVRIfS8ke3VpZH0vJHtldmVudElkfWApXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goYm9va2luZ3NDYW5jZWxlZCh1aWQsIGV2ZW50SWQpKSlcbiAgICAuY2F0Y2goKCkgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKCkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYm9va2luZ0FjdGlvbnMuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdXNlcnNQYWdlLnJ0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHt1cGRhdGVVc2VyLCByZW1vdmVVc2VyfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL3VzZXJBY3Rpb25zJztcblxuY29uc3QgcGlja1VzZXJzRnVuY3Rpb25zID0ge1xuICBBTEw6IHVzZXIgPT4gdHJ1ZSxcbiAgTUVNQkVSUzogdXNlciA9PiB1c2VyLnNlYXNvblRpY2tldHMgPiAwLFxuICBOT05fTUVNQkVSUzogdXNlciA9PiAhdXNlci5zZWFzb25UaWNrZXRzLFxuICBSRVFVRVNUUzogdXNlciA9PiB1c2VyLnJlcXVlc3RGb3JNZW1iZXJzaGlwLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2Vyczogc3RhdGUudXNlcnMsXG4gIGF1dGhEYXRhOiBzdGF0ZS5hdXRoRGF0YVxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHVwZGF0ZVVzZXI6ICh1aWQsIHVzZXIpID0+IGRpc3BhdGNoKHVwZGF0ZVVzZXIodWlkLCB1c2VyKSksXG4gIHJlbW92ZVVzZXI6ICh1aWQpID0+IGRpc3BhdGNoKHJlbW92ZVVzZXIodWlkKSlcbn0pO1xuXG5jbGFzcyBVc2Vyc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZWRpdGluZ1VzZXJJZDogbnVsbCxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgIGZpbHRlcjogJ0FMTCdcbiAgICB9O1xuICB9XG5cbiAgZ2V0VmlzaWJsZVVzZXJzKCkge1xuICAgIHJldHVybiBfLmNoYWluKHRoaXMucHJvcHMudXNlcnMpXG4gICAgICAucGlja0J5KHBpY2tVc2Vyc0Z1bmN0aW9uc1t0aGlzLnN0YXRlLmZpbHRlcl0pXG4gICAgICAucGlja0J5KHVzZXIgPT4gXy5zdGFydHNXaXRoKHVzZXIuZmlyc3ROYW1lLCB0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KSB8fCBfLnN0YXJ0c1dpdGgodXNlci5sYXN0TmFtZSwgdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSksIHRoaXMpXG4gICAgICAubWFwKCh1c2VyLCB1aWQpID0+ICh7dXNlciwgdWlkfSkpXG4gICAgICAuc29ydEJ5KCd1c2VyLmZpcnN0TmFtZScpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGNvdW50U2Vhc29uVGlja2V0cygpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLnVzZXJzKVxuICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnMuTUVNQkVSUylcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdzZWFzb25UaWNrZXRzJylcbiAgICAgIC52YWx1ZSgpO1xuICB9XG5cbiAgY291bnROb25NZW1iZXJzVXNlcnMoKSB7XG4gICAgcmV0dXJuIF8uY2hhaW4odGhpcy5wcm9wcy51c2VycylcbiAgICAgIC5waWNrQnkocGlja1VzZXJzRnVuY3Rpb25zLk5PTl9NRU1CRVJTKVxuICAgICAgLnNpemUoKVxuICAgICAgLnZhbHVlKCk7XG4gIH1cblxuICBjb3VudFJlcXVlc3RzRm9yTWVtYmVyc2hpcCgpIHtcbiAgICByZXR1cm4gXy5jaGFpbih0aGlzLnByb3BzLnVzZXJzKVxuICAgICAgLnBpY2tCeShwaWNrVXNlcnNGdW5jdGlvbnMuUkVRVUVTVFMpXG4gICAgICAuc2l6ZSgpXG4gICAgICAudmFsdWUoKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaFF1ZXJ5Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hRdWVyeTogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZShmaWx0ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmaWx0ZXJ9KTtcbiAgfVxuXG4gIG9uVXNlckNsaWNrKHVpZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmdVc2VySWQ6IHVpZH0pO1xuICB9XG5cbiAgc3RvcEVkaXRpbmcoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZ1VzZXJJZDogbnVsbCwgc2VhcmNoUXVlcnk6ICcnfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0VXNlclRpdGxlKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5maXJzdE5hbWUgKyAnICcgKyB1c2VyLmxhc3ROYW1lO1xuICB9XG5cbiAgZ2V0VXNlclN1YnRpdGxlcyh1c2VyKSB7XG4gICAgcmV0dXJuIFt1c2VyLnBob25lUHJlZml4ICsgJy0nICsgdXNlci5waG9uZU51bWJlciwgdXNlci5lbWFpbCwgJ9eb157XldeqINee16DXldeZ15nXnTogJyArICh1c2VyLnNlYXNvblRpY2tldHMgfHwgMCldO1xuICB9XG5cbiAgZ2V0VXNlckltYWdlKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5waG90b1VSTCB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTYzLzE2MzgwNC5zdmcnO1xuICB9XG59XG5cblVzZXJzUGFnZS5wcm9wVHlwZXMgPSB7XG4gIHVzZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlcnNQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9saXN0SXRlbScsXG4gICAgJy4uL3VzZXJGb3JtJyxcbiAgICAnLi91c2Vyc1BhZ2Uuc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgbGlzdEl0ZW0sIFVzZXJGb3JtLCB1c2Vyc1BhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25DbGljazEodmlzaWJsZVVzZXJzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdBTEwnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazIodmlzaWJsZVVzZXJzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdNRU1CRVJTJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2szKHZpc2libGVVc2Vycykge1xuICAgICAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZSgnUkVRVUVTVFMnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazQodmlzaWJsZVVzZXJzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKCdOT05fTUVNQkVSUycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTUodmlzaWJsZVVzZXJzLCBlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoUXVlcnlDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s2KHZpc2libGVVc2VycywgdXNlckl0ZW0sIHVzZXJJdGVtSW5kZXgpIHtcbiAgICAgICAgdGhpcy5vblVzZXJDbGljayh1c2VySXRlbS51aWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRVc2VySXRlbTcodmlzaWJsZVVzZXJzLCB1c2VySXRlbSwgdXNlckl0ZW1JbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChsaXN0SXRlbSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRVc2VyVGl0bGUodXNlckl0ZW0udXNlciksXG4gICAgICAgICAgICAna2V5JzogJ3VzZXItJyArIHVzZXJJdGVtLnVpZCxcbiAgICAgICAgICAgICdzdWJ0aXRsZXMnOiB0aGlzLmdldFVzZXJTdWJ0aXRsZXModXNlckl0ZW0udXNlciksXG4gICAgICAgICAgICAnaW1hZ2VTcmMnOiB0aGlzLmdldFVzZXJJbWFnZSh1c2VySXRlbS51c2VyKSxcbiAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazYuYmluZCh0aGlzLCB2aXNpYmxlVXNlcnMsIHVzZXJJdGVtLCB1c2VySXRlbUluZGV4KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVWaXNpYmxlVXNlcnM4KCkge1xuICAgICAgICB2YXIgdmlzaWJsZVVzZXJzID0gdGhpcy5nZXRWaXNpYmxlVXNlcnMoKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7ICdrZXknOiAnbGlzdC12aWV3JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2hlYWRlcicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyLXRpdGxlJyB9LCAn157Xqdeq157XqdeZ150nKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZmlsdGVyaW5nIHJvdyBleHBhbmRlZCBjb2xsYXBzZScgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2NvbHVtbiBzbWFsbC0xMiBsYXJnZS04JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsIHsgJ2NsYXNzTmFtZSc6ICdtZW51IHNtYWxsLXRleHQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ0FMTCcgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMS5iaW5kKHRoaXMsIHZpc2libGVVc2VycykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15vXldec150gJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCBfLnNpemUodGhpcy5wcm9wcy51c2VycyksICcpJykpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnTUVNQkVSUycgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMi5iaW5kKHRoaXMsIHZpc2libGVVc2VycykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XoNeV15nXmdedICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5jb3VudFNlYXNvblRpY2tldHMoKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdSRVFVRVNUUycgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrMy5iaW5kKHRoaXMsIHZpc2libGVVc2VycykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15HXp9ep15Qg15zXnteg15XXmSAnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuY291bnRSZXF1ZXN0c0Zvck1lbWJlcnNoaXAoKSwgJyknKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogXyh7IGFjdGl2ZTogdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdOT05fTUVNQkVSUycgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgW10pLmpvaW4oJyAnKVxuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgJ29uQ2xpY2snOiBvbkNsaWNrNC5iaW5kKHRoaXMsIHZpc2libGVVc2VycykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15zXkCDXnteg15XXmdeZ150gJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJygnLCB0aGlzLmNvdW50Tm9uTWVtYmVyc1VzZXJzKCksICcpJykpKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnY29sdW1uIHNtYWxsLTEyIGxhcmdlLTQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdzZWFyY2gnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAnc2VhcmNoLWlucHV0JyxcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdzZWFyY2gnLFxuICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICfXl9eZ16TXldepJyxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTUuYmluZCh0aGlzLCB2aXNpYmxlVXNlcnMpLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuc2VhcmNoUXVlcnlcbiAgICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyAnY2xhc3NOYW1lJzogJ3NlYXJjaC1pY29uJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywgeyAnY2xhc3NOYW1lJzogJ2ZhIGZhLXNlYXJjaCcgfSkpKSkpLFxuICAgICAgICAgICAgXy5tYXAodmlzaWJsZVVzZXJzLCByZXBlYXRVc2VySXRlbTcuYmluZCh0aGlzLCB2aXNpYmxlVXNlcnMpKSxcbiAgICAgICAgICAgIHZpc2libGVVc2Vycy5sZW5ndGggPT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZpbHRlci1zdGF0dXMnLFxuICAgICAgICAgICAgICAgICdrZXknOiAnMjc5MSdcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYSBmYS1mcm93bi1vJyxcbiAgICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXntem15jXoteo15nXnSwg15zXkCDXoNee16bXkNeVINeo16nXldee15XXqiDXnteq15DXmdee15XXqi4uLicpKSA6IG51bGxcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xvc2U5KCkge1xuICAgICAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQgZGFzaGJvYXJkLXBhZ2UgdXNlcnMtcGFnZScgfSwgIXRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCA/IHNjb3BlVmlzaWJsZVVzZXJzOC5hcHBseSh0aGlzLCBbXSkgOiBudWxsLCB0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAna2V5JzogJ2VkaXQtdXNlcicsXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3NtYWxsLWNlbnRlcmVkJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFVzZXJGb3JtLCB7XG4gICAgICAgICAgICAndWlkJzogdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkLFxuICAgICAgICAgICAgJ29uQ2xvc2UnOiBvbkNsb3NlOS5iaW5kKHRoaXMpXG4gICAgICAgIH0pKSA6IG51bGwpO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJzUGFnZS91c2Vyc1BhZ2UucnRcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlcnNQYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdXNlcnNQYWdlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi91c2Vyc1BhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy91c2Vyc1BhZ2UvdXNlcnNQYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdXNlcnNQYWdlL3VzZXJzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vYXV0aFBhZ2UucnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgbG9naW5XaXRoR29vZ2xlLFxuICBsb2dpbldpdGhGYWNlYm9vayxcbiAgbG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzZW5kUGFzc3dvcmRSZXNldEVtYWlsXG59IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xuXG5pbXBvcnQgeyByZXBvcnRFcnJvciB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvZXJyb3JBY3Rpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBlcnJvck1zZzogc3RhdGUuZXJyb3JNc2dcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGxvZ2luV2l0aEdvb2dsZTogKCkgPT4gZGlzcGF0Y2gobG9naW5XaXRoR29vZ2xlKCkpLFxuICBsb2dpbldpdGhGYWNlYm9vazogKCkgPT4gZGlzcGF0Y2gobG9naW5XaXRoRmFjZWJvb2soKSksXG4gIGxvZ2luV2l0aEVtYWlsOiAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaChsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCkpLFxuICBzaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkOiAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaChjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKSksXG4gIHNlbmRQYXNzd29yZFJlc2V0RW1haWw6IGVtYWlsID0+IGRpc3BhdGNoKHNlbmRQYXNzd29yZFJlc2V0RW1haWwoZW1haWwpKSxcbiAgcmVwb3J0RXJyb3I6IChtc2cpID0+IGRpc3BhdGNoKHJlcG9ydEVycm9yKG1zZykpXG59KTtcblxuY29uc3QgQXV0aEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQXV0aEZvcm0nLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGxvZ2luV2l0aEdvb2dsZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBsb2dpbldpdGhGYWNlYm9vazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBsb2dpbldpdGhFbWFpbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZXBvcnRFcnJvcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBwYXNzd29yZEFnYWluOiAnJyxcbiAgICAgIGF1dGhNb2RlOiAnbG9naW4nLFxuICAgICAgaXNMb2dpbk1vZGU6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBvbkNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0QnV0dG9uTGFiZWwoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmF1dGhNb2RlKSB7XG4gICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgIHJldHVybiAn15TXqteX15HXqCc7XG4gICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgIHJldHVybiAn15TXmdeo16nXnSc7XG4gICAgICBjYXNlICdmb3Jnb3RQYXNzd29yZCc6XG4gICAgICAgIHJldHVybiAn16nXnNeXINec15nXoNenINec15DXmdek15XXoSDXodeZ16HXnteQJztcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgJiYgIXRoaXMuaXNTdWJtaXREaXNhYmxlZCgpKSB7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdENsaWNrKCk7XG4gICAgfVxuICB9LFxuXG4gIHNpZ25VcFdpdGhVc2VyQW5kUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wcm9wcy5zaWduVXBXaXRoVXNlckFuZFBhc3N3b3JkKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICB9LFxuXG4gIGlzU3VibWl0RGlzYWJsZWQoKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmF1dGhNb2RlKSB7XG4gICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgIHJldHVybiBfLmlzRW1wdHkodGhpcy5zdGF0ZS5lbWFpbCkgfHwgXy5pc0VtcHR5KHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgICAgY2FzZSAncmVnaXN0ZXInOlxuICAgICAgICByZXR1cm4gXy5pc0VtcHR5KHRoaXMuc3RhdGUuZW1haWwpIHx8IF8uaXNFbXB0eSh0aGlzLnN0YXRlLnBhc3N3b3JkKSB8fCBfLmlzRW1wdHkodGhpcy5zdGF0ZS5wYXNzd29yZEFnYWluKTtcbiAgICAgIGNhc2UgJ2ZvcmdvdFBhc3N3b3JkJzpcbiAgICAgICAgcmV0dXJuIF8uaXNFbXB0eSh0aGlzLnN0YXRlLmVtYWlsKTtcbiAgICB9XG4gIH0sXG5cbiAgZ29Ub0xvZ2luKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRoTW9kZTogJ2xvZ2luJyB9KTtcbiAgfSxcblxuICBnb1RvUmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGhNb2RlOiAncmVnaXN0ZXInIH0pO1xuICB9LFxuXG4gIGdvVG9Gb3Jnb3RQYXNzd29yZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0aE1vZGU6ICdmb3Jnb3RQYXNzd29yZCcgfSk7XG4gIH0sXG5cbiAgaGFuZGxlTG9naW4oKSB7XG4gICAgdGhpcy5wcm9wcy5sb2dpbldpdGhFbWFpbCh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgfSxcblxuICBoYW5kbGVSZWdpc3RlcigpIHtcbiAgICBpZiAoXy5pc0VxdWFsKHRoaXMuc3RhdGUucGFzc3dvcmQsIHRoaXMuc3RhdGUucGFzc3dvcmRBZ2FpbikpIHtcbiAgICAgIHRoaXMucHJvcHMuc2lnblVwV2l0aFVzZXJBbmRQYXNzd29yZCh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5yZXBvcnRFcnJvcihjb25zdGFudHMuRVJST1JTLk5PVF9TQU1FX1BBU1NXT1JEKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlRm9yZ290UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wcm9wcy5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKHRoaXMuc3RhdGUuZW1haWwpO1xuICAgIHRoaXMuZ29Ub0xvZ2luKCk7XG4gIH0sXG5cbiAgaGFuZGxlU3VibWl0Q2xpY2soKSB7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmF1dGhNb2RlKSB7XG4gICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUxvZ2luKCk7XG4gICAgICBjYXNlICdyZWdpc3Rlcic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlZ2lzdGVyKCk7XG4gICAgICBjYXNlICdmb3Jnb3RQYXNzd29yZCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUZvcmdvdFBhc3N3b3JkKCk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogdGVtcGxhdGVcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEF1dGhGb3JtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5qcyIsImRlZmluZShbXG4gICAgJ3JlYWN0JyxcbiAgICAnbG9kYXNoJyxcbiAgICAnLi9hdXRoUGFnZS5zY3NzJyxcbiAgICAnLi4vbG9nbydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgY3NzLCBsb2dvKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnbGFyZ2UtNiBjb2x1bW5zIHNtYWxsLWNlbnRlcmVkIGF1dGgtZm9ybS1jb250YWluZXInIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdtZWRpdW0tY2VudGVyZWQgbG9nbycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChsb2dvLCB7XG4gICAgICAgICAgICAnd2lkdGgnOiAxMjAsXG4gICAgICAgICAgICAnaGVpZ2h0JzogMTIwXG4gICAgICAgIH0pKSwgXy5pbmNsdWRlcyhbXG4gICAgICAgICAgICAnbG9naW4nLFxuICAgICAgICAgICAgJ3JlZ2lzdGVyJ1xuICAgICAgICBdLCB0aGlzLnN0YXRlLmF1dGhNb2RlKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2tleSc6ICcyODgnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgICdvbkNsaWNrJzogdGhpcy5wcm9wcy5sb2dpbldpdGhGYWNlYm9vayxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZmFjZWJvb2sgYnV0dG9uIHNwbGl0J1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICdGYWNlYm9vaycpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywgeyAnY2xhc3NOYW1lJzogJ2ZhIGZhLWZhY2Vib29rLW9mZmljaWFsJyB9KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgICdvbkNsaWNrJzogdGhpcy5wcm9wcy5sb2dpbldpdGhHb29nbGUsXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2dvb2dsZSBidXR0b24gc3BsaXQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ0dvb2dsZScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYSBmYS1nb29nbGUnLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaHInLCB7ICdjbGFzc05hbWUnOiAnaHInIH0pKSA6IG51bGwsIHRoaXMucHJvcHMuZXJyb3JNc2cgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2Vycm9yLW1zZycsXG4gICAgICAgICAgICAna2V5JzogJ2hvbWVQYWdlRXJyb3JNc2cnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZScsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7ICdjbGFzc05hbWUnOiAnZXJyb3ItbXNnLXR4dCcgfSwgdGhpcy5wcm9wcy5lcnJvck1zZykpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgJ29uS2V5RG93bic6IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnYXV0aC1mb3JtJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICd0eXBlJzogJ2VtYWlsJyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgJ25hbWUnOiAnZW1haWwnLFxuICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ9eT15XXkNeoINeQ15zXp9eY16jXldeg15knXG4gICAgICAgIH0pLCBfLmluY2x1ZGVzKFtcbiAgICAgICAgICAgICdsb2dpbicsXG4gICAgICAgICAgICAncmVnaXN0ZXInXG4gICAgICAgIF0sIHRoaXMuc3RhdGUuYXV0aE1vZGUpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAndHlwZSc6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICduYW1lJzogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICAgICdwbGFjZWhvbGRlcic6ICfXodeZ16HXnteQJyxcbiAgICAgICAgICAgICdrZXknOiAnMTIxNidcbiAgICAgICAgfSkgOiBudWxsLCB0aGlzLnN0YXRlLmF1dGhNb2RlID09PSAncmVnaXN0ZXInID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAndHlwZSc6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnBhc3N3b3JkQWdhaW4sXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgJ25hbWUnOiAncGFzc3dvcmRBZ2FpbicsXG4gICAgICAgICAgICAncGxhY2Vob2xkZXInOiAn16nXldeRINeh15nXodee15AnLFxuICAgICAgICAgICAgJ2tleSc6ICcxNDIyJ1xuICAgICAgICB9KSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgICdvbkNsaWNrJzogdGhpcy5oYW5kbGVTdWJtaXRDbGljayxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnYnV0dG9uIHNwbGl0IHN1Y2Nlc3MnLFxuICAgICAgICAgICAgJ2Rpc2FibGVkJzogdGhpcy5pc1N1Ym1pdERpc2FibGVkKClcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCB0aGlzLmdldEJ1dHRvbkxhYmVsKCkpKSwgdGhpcy5zdGF0ZS5hdXRoTW9kZSA9PT0gJ2xvZ2luJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAncm93JyxcbiAgICAgICAgICAgICdrZXknOiAnMTgyMydcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2NvbHVtbiBzbWFsbC02IHJlZC1saW5rJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IHRoaXMuZ29Ub1JlZ2lzdGVyIH0sICfXkNeZ158g15zXmiDXl9ep15HXldefPycpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2NvbHVtbiBzbWFsbC02IHJlZC1saW5rJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyAnb25DbGljayc6IHRoaXMuZ29Ub0ZvcmdvdFBhc3N3b3JkIH0sICfXqdeb15fXqiDXodeZ16HXnteQPycpKSkgOiBudWxsLCB0aGlzLnN0YXRlLmF1dGhNb2RlICE9PSAnbG9naW4nID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAna2V5JzogJzIxMjEnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3JlZC1saW5rJyxcbiAgICAgICAgICAgICdvbkNsaWNrJzogdGhpcy5nb1RvTG9naW5cbiAgICAgICAgfSwgJ9eb15HXqCDXmdepINec15og15fXqdeR15XXnz8nKSkgOiBudWxsKSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXV0aFBhZ2UvYXV0aFBhZ2UucnRcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXV0aFBhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hdXRoUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vYXV0aFBhZ2Uuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hdXRoLWZvcm0tY29udGFpbmVyIC5sb2dvIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDM1cHg7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDE2MHB4OyB9XFxuXFxuLmF1dGgtZm9ybS1jb250YWluZXIgLmF1dGgtZm9ybSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uYXV0aC1mb3JtLWNvbnRhaW5lciAuaHIge1xcbiAgbWFyZ2luOiAwLjdlbSBhdXRvICFpbXBvcnRhbnQ7IH1cXG5cXG4uYXV0aC1mb3JtLWNvbnRhaW5lciAucmVkLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9hdXRoUGFnZS9hdXRoUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNFVF9BVVRIX0RBVEEsIFNJR05fT1VUIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmltcG9ydCB7IFByb21pc2UgfSBmcm9tICdibHVlYmlyZCc7XG5cbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgY2xpZW50REIgZnJvbSAnLi4vLi4vdXRpbHMvY2xpZW50REInO1xuaW1wb3J0ICogYXMgdXNlckFjdGlvbnMgZnJvbSAnLi91c2VyQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBldmVudEFjdGlvbnMgZnJvbSAnLi9ldmVudEFjdGlvbnMnO1xuaW1wb3J0ICogYXMgYm9va2luZ0FjdGlvbnMgZnJvbSAnLi9ib29raW5nQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBsb2FkaW5nQWN0aW9ucyBmcm9tICcuL2xvYWRpbmdBY3Rpb25zJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuL2Vycm9yQWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uQWN0aW9ucyBmcm9tICcuL25hdmlnYXRpb25BY3Rpb25zJztcblxuaW1wb3J0IHVwZGF0ZVBob3RvVXJsRml4ZXIgZnJvbSAnLi4vLi4vZGF0YUZpeGVycy91cGRhdGVQaG90b1VybEZpeGVyJztcblxuZXhwb3J0IGNvbnN0IEFVVEhfRVJST1JfQ09ERVNfTUFQID0ge1xuICAnYXV0aC9pbnZhbGlkLWVtYWlsJzogQ29uc3RhbnRzLkVSUk9SUy5JTlZBTElEX01BSUwsXG4gICdhdXRoL3dlYWstcGFzc3dvcmQnOiBDb25zdGFudHMuRVJST1JTLldFQUtfUEFTU1dPUkQsXG4gICdhdXRoL2VtYWlsLWFscmVhZHktaW4tdXNlJzogQ29uc3RhbnRzLkVSUk9SUy5FTUFJTF9JTl9VU0UsXG4gICdhdXRoL3dyb25nLXBhc3N3b3JkJzogQ29uc3RhbnRzLkVSUk9SUy5XUk9OR19QQVNTV09SRCxcbiAgJ2F1dGgvYWNjb3VudC1leGlzdHMtd2l0aC1kaWZmZXJlbnQtY3JlZGVudGlhbCc6IENvbnN0YW50cy5FUlJPUlMuRU1BSUxfSU5fVVNFLFxuICAnYXV0aC91c2VyLW5vdC1mb3VuZCc6IENvbnN0YW50cy5FUlJPUlMuVVNFUl9OT1RfRk9VTkRcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBdXRoRGF0YSA9ICh1aWQsIGVtYWlsLCBwaG90b1VSTCwgaXNBZG1pbikgPT4gKHtcbiAgdHlwZTogU0VUX0FVVEhfREFUQSxcbiAgdWlkLFxuICBlbWFpbCxcbiAgcGhvdG9VUkwsXG4gIGlzQWRtaW5cbn0pO1xuXG5jb25zdCBmZXRjaEFwcERhdGEgPSAoZGlzcGF0Y2gsIHVzZXIpID0+XG4gIGNsaWVudERCLnJlYWQoJ2FkbWlucy8nICsgdXNlci51aWQpXG4gICAgLnRoZW4oaXNBZG1pbiA9PiBkaXNwYXRjaChzZXRBdXRoRGF0YSh1c2VyLnVpZCwgdXNlci5lbWFpbCwgXy5nZXQodXNlciwgWydwcm92aWRlckRhdGEnLCAwLCAncGhvdG9VUkwnXSksICEhaXNBZG1pbikpKVxuICAgIC50aGVuKCgpID0+IFByb21pc2UuYWxsKFtcbiAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb25zLmZldGNoVXNlcnMoKSksXG4gICAgICBkaXNwYXRjaChldmVudEFjdGlvbnMuZmV0Y2hFdmVudHMoKSksXG4gICAgICBkaXNwYXRjaChib29raW5nQWN0aW9ucy5mZXRjaEJvb2tpbmdzKCkpXG4gICAgXSkpO1xuXG5leHBvcnQgY29uc3QgdXNlclNpZ25lZE91dCA9ICgpID0+ICh7XG4gIHR5cGU6IFNJR05fT1VUXG59KTtcblxuZXhwb3J0IGNvbnN0IHNpZ25PdXQgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuc2lnbk91dCgpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlclNpZ25lZE91dCgpKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9ucy5uYXZpZ2F0ZVRvKENvbnN0YW50cy5QQUdFUy5BVVRILnZhbCkpKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEZhY2Vib29rID0gKCkgPT4gKCkgPT4gY2xpZW50REIubG9naW5XaXRoRmFjZWJvb2soKTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aEdvb2dsZSA9ICgpID0+ICgpID0+IGNsaWVudERCLmxvZ2luV2l0aEdvb2dsZSgpO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5sb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbih1c2VyID0+IGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcikpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUEFHRVMuSE9NRS52YWwpKSlcbiAgICAuY2F0Y2goZGJFcnJvciA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoQVVUSF9FUlJPUl9DT0RFU19NQVBbZGJFcnJvci5jb2RlXSkpKVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSAoZW1haWwsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbih1c2VyID0+IGZldGNoQXBwRGF0YShkaXNwYXRjaCwgdXNlcikpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUEFHRVMuRURJVF9VU0VSX0lORk8udmFsKSkpXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4gZGlzcGF0Y2goZXJyb3JBY3Rpb25zLnJlcG9ydEVycm9yKEFVVEhfRVJST1JfQ09ERVNfTUFQW2RiRXJyb3IuY29kZV0pKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbCA9IGVtYWlsID0+IGRpc3BhdGNoID0+IHtcbiAgZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RhcnRMb2FkaW5nKCkpO1xuXG4gIHJldHVybiBjbGllbnREQi5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICAgIC5jYXRjaChkYkVycm9yID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQXV0aERhdGEgPSAoKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIuZ2V0TG9nZ2VkSW5Vc2VyKClcbiAgICAudGhlbih1c2VyID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJldHVybiBmZXRjaEFwcERhdGEoZGlzcGF0Y2gsIHVzZXIpXG4gICAgICAgICAgLnRoZW4oKCkgPT4gdXBkYXRlUGhvdG9VcmxGaXhlcihkaXNwYXRjaCwgZ2V0U3RhdGUoKSkpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlckluZm8gPSBnZXRTdGF0ZSgpLnVzZXJzW3VzZXIudWlkXTtcbiAgICAgICAgICAgIGlmIChfLmlzRW1wdHkodXNlckluZm8pKSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8oQ29uc3RhbnRzLlBBR0VTLkVESVRfVVNFUl9JTkZPLnZhbCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhDb25zdGFudHMuUEFHRVMuSE9NRS52YWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pXG4gICAgLmNhdGNoKGRiRXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihkYkVycm9yKTtcbiAgICAgIGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcihBVVRIX0VSUk9SX0NPREVTX01BUFtkYkVycm9yLmNvZGVdKSlcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0b3BMb2FkaW5nKCkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJpbXBvcnQgeyBOQVZJR0FURV9UTyB9IGZyb20gJy4vYWN0aW9uVHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGVUbyA9IHBhZ2UgPT4gKHtcbiAgdHlwZTogTkFWSUdBVEVfVE8sXG4gIHBhZ2Vcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9hY3Rpb25zL25hdmlnYXRpb25BY3Rpb25zLmpzIiwiaW1wb3J0IHsgdXBkYXRlVXNlciB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvdXNlckFjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkaXNwYXRjaCwgc3RhdGUpIHtcbiAgY29uc3QgdWlkID0gc3RhdGUuYXV0aERhdGEudWlkO1xuICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuXG4gIGlmICh1c2Vyc1t1aWRdKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKHVwZGF0ZVVzZXIodWlkLCB7IHBob3RvVVJMOiBzdGF0ZS5hdXRoRGF0YS5waG90b1VSTCB9KSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGF0YUZpeGVycy91cGRhdGVQaG90b1VybEZpeGVyLmpzIiwiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Jvb2tpbmdzUGFnZS5ydCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1cGRhdGVCb29raW5nIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9ib29raW5nQWN0aW9ucyc7XG5cbmNvbnN0IGdldERyb3BPZmZNYXAgPSBib29raW5ncyA9PiBfLmNoYWluKGJvb2tpbmdzKVxuICAub21pdEJ5KGJvb2tpbmcgPT4gIShib29raW5nLmRyb3BPZmYpKVxuICAudHJhbnNmb3JtKChhY2MsIGJvb2tpbmcsIHVpZCkgPT4ge1xuICAgIGFjY1tib29raW5nLmRyb3BPZmZdW3VpZF0gPSBib29raW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIH0sIHsgdGx2OiB7fSwgbW9kaWluOiB7fSB9KVxuICAudmFsdWUoKTtcblxuY29uc3QgZ2V0UGlja1VwTWFwID0gYm9va2luZ3MgPT4gXy5jaGFpbihib29raW5ncylcbiAgLm9taXRCeShib29raW5nID0+ICEoYm9va2luZy5waWNrVXApKVxuICAudHJhbnNmb3JtKChhY2MsIGJvb2tpbmcsIHVpZCkgPT4ge1xuICAgIGFjY1tib29raW5nLnBpY2tVcF1bdWlkXSA9IGJvb2tpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgfSwgeyB0bHY6IHt9LCBtb2RpaW46IHt9IH0pXG4gIC52YWx1ZSgpO1xuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmdzLFxuICBldmVudHM6IHN0YXRlLmV2ZW50cyxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdXBkYXRlQm9va2luZzogKHVpZCwgZXZlbnRJZCwgYm9va2luZykgPT4gZGlzcGF0Y2godXBkYXRlQm9va2luZyh1aWQsIGV2ZW50SWQsIGJvb2tpbmcpKVxufSk7XG5cbmNsYXNzIEJvb2tpbmdzUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0aW5nVXNlcklkOiBudWxsLFxuICAgICAgZXZlbnRJZDogXy5maW5kS2V5KHRoaXMucHJvcHMuZXZlbnRzLCB7c3RhdHVzOiAnb3BlbkZvck1lbWJlcnMnfSkgfHwgXy5maW5kS2V5KHRoaXMucHJvcHMuZXZlbnRzLCB7c3RhdHVzOiAnb3BlbkZvckFsbCd9KSB8fCAgXy5maW5kS2V5KHRoaXMucHJvcHMuZXZlbnRzLCB7c3RhdHVzOiAnY2xvc2VkJ30pICxcbiAgICAgIGZpbHRlcjogJ1BJQ0tVUCdcbiAgICB9O1xuICB9XG5cbiAgZ2V0VmlzaWJsZUJvb2tpbmdzKCkge1xuICAgIGNvbnN0IGJvb2tpbmdGb3JFdmVudE1hcCA9IF8uY2hhaW4odGhpcy5wcm9wcy5ib29raW5ncylcbiAgICAgIC5tYXBWYWx1ZXModXNlckJvb2tpbmdzID0+IHVzZXJCb29raW5nc1t0aGlzLnN0YXRlLmV2ZW50SWRdKVxuICAgICAgLm9taXRCeShfLmlzVW5kZWZpbmVkKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGlja1VwOiBnZXRQaWNrVXBNYXAoYm9va2luZ0ZvckV2ZW50TWFwKSxcbiAgICAgIGRyb3BPZmY6IGdldERyb3BPZmZNYXAoYm9va2luZ0ZvckV2ZW50TWFwKVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZmlsdGVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlciB9KTtcbiAgfVxuXG4gIG9uRXZlbnRJZENoYW5nZShldmVudElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV2ZW50SWQsIGZpbHRlcjogJ1BJQ0tVUCcgfSk7XG4gIH1cblxuICBvbkJvb2tpbmdDbGljayh1aWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZ1VzZXJJZDogdWlkIH0pO1xuICB9XG5cbiAgZ2V0RXZlbnRQcmludFRpdGxlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50SWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRFdnQgPSB0aGlzLnByb3BzLmV2ZW50c1t0aGlzLnN0YXRlLmV2ZW50SWRdO1xuICAgICAgcmV0dXJuIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbY3VycmVudEV2dC50eXBlSWRdLm5hbWUgKyAnIC0gJyArIGN1cnJlbnRFdnQuZGF5ICsgJy8nICsgY3VycmVudEV2dC5tb250aCArICcvJyArIGN1cnJlbnRFdnQueWVhcjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZ2V0Qm9va2luZ1RpdGxlKHVpZCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJzW3VpZF07XG4gICAgcmV0dXJuIHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZTtcbiAgfVxuXG4gIGdldEJvb2tpbmdQaG9uZSh1aWQpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2Vyc1t1aWRdO1xuICAgIHJldHVybiB1c2VyLnBob25lUHJlZml4ICsgJy0nICsgdXNlci5waG9uZU51bWJlcjtcbiAgfVxuXG4gIGdldEJvb2tpbmdTdWJ0aXRsZXMoYm9va2luZywgdWlkKSB7XG4gICAgY29uc3Qgc3VidGl0bGVzID0gW107XG5cbiAgICBpZiAoYm9va2luZy5wYWlkU2VhdHMgPiAwKSB7XG4gICAgICBzdWJ0aXRsZXMucHVzaCgn157XoNeV15nXmdedOiAnICsgYm9va2luZy5wYWlkU2VhdHMpO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5leHRyYVNlYXRzID4gMCkge1xuICAgICAgc3VidGl0bGVzLnB1c2goJ9eX15Mg16TXotee15k6ICcgKyBib29raW5nLmV4dHJhU2VhdHMpO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5waWNrVXApIHtcbiAgICAgIHN1YnRpdGxlcy5wdXNoKCfXlNec15XXmjogJyArIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pO1xuICAgIH1cbiAgICBpZiAoYm9va2luZy5kcm9wT2ZmKSB7XG4gICAgICBzdWJ0aXRsZXMucHVzaCgn15fXlteV16g6ICcgKyBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSk7XG4gICAgfVxuXG4gICAgaWYgKHVpZCkge1xuICAgICAgc3VidGl0bGVzLnB1c2goJ9eY15zXszogJyArIHRoaXMuZ2V0Qm9va2luZ1Bob25lKHVpZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJ0aXRsZXM7XG4gIH1cblxuICBnZXRCb29raW5nSW1hZ2UodWlkKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlcnNbdWlkXTtcbiAgICByZXR1cm4gdXNlci5waG90b1VSTCB8fCAnaHR0cDovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTg5LzE4OTk5MS5zdmcnO1xuICB9XG5cbiAgZ2V0UGlja1VwQ291bnQoKSB7XG4gICAgY29uc3QgdmlzaWJsZUJvb2tpbmdzID0gdGhpcy5nZXRWaXNpYmxlQm9va2luZ3MoKTtcbiAgICBjb25zdCB0bHZQaWNrVXBzUGFpZCA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHYpXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgdGx2UGlja1Vwc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MucGlja1VwLnRsdilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdleHRyYVNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgbW9kaWluUGlja1Vwc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluKVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ3BhaWRTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIGNvbnN0IG1vZGlpblBpY2tVcHNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLnBpY2tVcC5tb2RpaW4pXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB0bHZQaWNrVXBzUGFpZCArIHRsdlBpY2tVcHNFeHRyYSArIG1vZGlpblBpY2tVcHNQYWlkICsgbW9kaWluUGlja1Vwc0V4dHJhO1xuICB9XG5cbiAgZ2V0RHJvcE9mZkNvdW50KCkge1xuICAgIGNvbnN0IHZpc2libGVCb29raW5ncyA9IHRoaXMuZ2V0VmlzaWJsZUJvb2tpbmdzKCk7XG4gICAgY29uc3QgdGx2RHJvcE9mZnNQYWlkID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi50bHYpXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgncGFpZFNlYXRzJylcbiAgICAgIC52YWx1ZSgpO1xuXG4gICAgY29uc3QgdGx2RHJvcE9mZnNFeHRyYSA9IF8uY2hhaW4odmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYudGx2KVxuICAgICAgLnZhbHVlcygpXG4gICAgICAuc3VtQnkoJ2V4dHJhU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5Ecm9wT2Zmc1BhaWQgPSBfLmNoYWluKHZpc2libGVCb29raW5ncy5kcm9wT2ZmLm1vZGlpbilcbiAgICAgIC52YWx1ZXMoKVxuICAgICAgLnN1bUJ5KCdwYWlkU2VhdHMnKVxuICAgICAgLnZhbHVlKCk7XG5cbiAgICBjb25zdCBtb2RpaW5Ecm9wT2Zmc0V4dHJhID0gXy5jaGFpbih2aXNpYmxlQm9va2luZ3MuZHJvcE9mZi5tb2RpaW4pXG4gICAgICAudmFsdWVzKClcbiAgICAgIC5zdW1CeSgnZXh0cmFTZWF0cycpXG4gICAgICAudmFsdWUoKTtcblxuICAgIHJldHVybiB0bHZEcm9wT2Zmc1BhaWQgKyB0bHZEcm9wT2Zmc0V4dHJhICsgbW9kaWluRHJvcE9mZnNQYWlkICsgbW9kaWluRHJvcE9mZnNFeHRyYTtcbiAgfVxuXG4gIHN0b3BFZGl0aW5nKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0aW5nVXNlcklkOiBudWxsIH0pO1xuICB9XG5cbiAgdXBkYXRlQm9va2luZyhib29raW5nKSB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVCb29raW5nKHRoaXMuc3RhdGUuZWRpdGluZ1VzZXJJZCwgdGhpcy5zdGF0ZS5ldmVudElkLCBib29raW5nKTtcbiAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlLmFwcGx5KHRoaXMpO1xuICB9XG5cbn1cblxuQm9va2luZ3NQYWdlLnByb3BUeXBlcyA9IHtcbiAgYm9va2luZ3M6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZXZlbnRzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHVzZXJzOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHVwZGF0ZUJvb2tpbmc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQm9va2luZ3NQYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9ib29raW5nc1BhZ2UvYm9va2luZ3NQYWdlLmpzIiwiZGVmaW5lKFtcbiAgICAncmVhY3QnLFxuICAgICdsb2Rhc2gnLFxuICAgICcuLi9saXN0SXRlbScsXG4gICAgJy4uL2Jvb2tpbmdGb3JtL2Jvb2tpbmdGb3JtJyxcbiAgICAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJyxcbiAgICAnLi9ib29raW5nc1BhZ2Uuc2Nzcydcbl0sIGZ1bmN0aW9uIChSZWFjdCwgXywgbGlzdEl0ZW0sIEJvb2tpbmdGb3JtLCBDb25zdGFudHMsIGJvb2tpbmdzUGFnZUNzcykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBmdW5jdGlvbiBvbkNsaWNrMSh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ1BJQ0tVUCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMih2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoJ0RST1BPRkYnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UzKHZpc2libGVCb29raW5ncywgZSkge1xuICAgICAgICB0aGlzLm9uRXZlbnRJZENoYW5nZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEV2ZW50NCh2aXNpYmxlQm9va2luZ3MsIGV2ZW50LCBldmVudEluZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7XG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50LScgKyBldmVudEluZGV4LFxuICAgICAgICAgICAgJ3ZhbHVlJzogZXZlbnRJbmRleFxuICAgICAgICB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsIGV2ZW50LmRheSwgJy8nLCBldmVudC5tb250aCwgJy8nLCBldmVudC55ZWFyLCAnIC0gJywgQ29uc3RhbnRzLkVWRU5UU19UWVBFU1tldmVudC50eXBlSWRdLm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazUodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHRoaXMub25Cb29raW5nQ2xpY2soYm9va2luZ0luZGV4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzYodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2tleSc6ICdib29raW5nLScgKyBib29raW5nSW5kZXgsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnaW1hZ2VTcmMnOiB0aGlzLmdldEJvb2tpbmdJbWFnZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrNS5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2s3KHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICB0aGlzLm9uQm9va2luZ0NsaWNrKGJvb2tpbmdJbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmc4KHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXAsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChsaXN0SXRlbSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdrZXknOiAnYm9va2luZy0nICsgYm9va2luZ0luZGV4LFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCBib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRCb29raW5nSW1hZ2UoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazcuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZU1vZGlpblBpY2tVcFRsdlBpY2tVcDkodmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHZhciBtb2RpaW5QaWNrVXAgPSB2aXNpYmxlQm9va2luZ3MucGlja1VwLm1vZGlpbjtcbiAgICAgICAgdmFyIHRsdlBpY2tVcCA9IHZpc2libGVCb29raW5ncy5waWNrVXAudGx2O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3BpY2stdXAtY29udGFpbmVyIHJvdyBoaWRlLWZvci1wcmludCcsXG4gICAgICAgICAgICAgICAgJ2tleSc6ICdwaWNrLXVwLWNvbnRhaW5lcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLnNpemUodGx2UGlja1VwKSAhPT0gMCB8fCBfLnNpemUobW9kaWluUGlja1VwKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g1JywgeyAna2V5JzogJ3BpY2tVcC1sYWJlbCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15TXnNeV15o6JykpIDogbnVsbCxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZQaWNrVXApICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDYnLCB7ICdrZXknOiAndGx2UGlja1VwJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXqtecINeQ15HXmdeRJykpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKHRsdlBpY2tVcCwgcmVwZWF0Qm9va2luZzYuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwKSksXG4gICAgICAgICAgICBfLnNpemUobW9kaWluUGlja1VwKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2g2JywgeyAna2V5JzogJ21vZGlpblBpY2tVcCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XldeT15nXoteZ158nKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAobW9kaWluUGlja1VwLCByZXBlYXRCb29raW5nOC5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluUGlja1VwLCB0bHZQaWNrVXApKVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbGljazEwKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHRoaXMub25Cb29raW5nQ2xpY2soYm9va2luZ0luZGV4KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzExKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGxpc3RJdGVtLCB7XG4gICAgICAgICAgICAndGl0bGUnOiB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2tleSc6ICdib29raW5nLScgKyBib29raW5nSW5kZXgsXG4gICAgICAgICAgICAnc3VidGl0bGVzJzogdGhpcy5nZXRCb29raW5nU3VidGl0bGVzKGJvb2tpbmcsIGJvb2tpbmdJbmRleCksXG4gICAgICAgICAgICAnaW1hZ2VTcmMnOiB0aGlzLmdldEJvb2tpbmdJbWFnZShib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrMTAuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sxMih2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICB0aGlzLm9uQm9va2luZ0NsaWNrKGJvb2tpbmdJbmRleCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcxMyh2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChsaXN0SXRlbSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdrZXknOiAnYm9va2luZy0nICsgYm9va2luZ0luZGV4LFxuICAgICAgICAgICAgJ3N1YnRpdGxlcyc6IHRoaXMuZ2V0Qm9va2luZ1N1YnRpdGxlcyhib29raW5nLCBib29raW5nSW5kZXgpLFxuICAgICAgICAgICAgJ2ltYWdlU3JjJzogdGhpcy5nZXRCb29raW5nSW1hZ2UoYm9va2luZ0luZGV4KSxcbiAgICAgICAgICAgICdvbkNsaWNrJzogb25DbGljazEyLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmLCBib29raW5nLCBib29raW5nSW5kZXgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZU1vZGlpbkRyb3BPZmZUbHZEcm9wT2ZmMTQodmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHZhciBtb2RpaW5Ecm9wT2ZmID0gdmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluO1xuICAgICAgICB2YXIgdGx2RHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdkcm9wLW9mZi1jb250YWluZXIgcm93IGhpZGUtZm9yLXByaW50JyxcbiAgICAgICAgICAgICAgICAna2V5JzogJ2Ryb3Atb2ZmLWNvbnRhaW5lcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLnNpemUodGx2RHJvcE9mZikgIT09IDAgfHwgXy5zaXplKG1vZGlpbkRyb3BPZmYpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDUnLCB7ICdrZXknOiAnZHJvcC1vZmYtbGFiZWwnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eX15bXldeoOicpKSA6IG51bGwsXG4gICAgICAgICAgICBfLnNpemUodGx2RHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdoNicsIHsgJ2tleSc6ICd0bHZEcm9wT2ZmJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXqtecINeQ15HXmdeRJykpIDogbnVsbCxcbiAgICAgICAgICAgIF8ubWFwKHRsdkRyb3BPZmYsIHJlcGVhdEJvb2tpbmcxMS5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZikpLFxuICAgICAgICAgICAgXy5zaXplKG1vZGlpbkRyb3BPZmYpICE9PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDYnLCB7ICdrZXknOiAnbW9kaWluRHJvcE9mZicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn157XldeT15nXoteZ158nKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAobW9kaWluRHJvcE9mZiwgcmVwZWF0Qm9va2luZzEzLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmKSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uU3VibWl0MTUodmlzaWJsZUJvb2tpbmdzLCBib29raW5nKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQm9va2luZyhib29raW5nKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DbG9zZTE2KHZpc2libGVCb29raW5ncykge1xuICAgICAgICB0aGlzLnN0b3BFZGl0aW5nKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcxNyh2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwLCBib29raW5nLCBib29raW5nSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogYm9va2luZ0luZGV4ICsgJy10bHYtcGlja3VwLXJvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1Bob25lKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLnBhaWRTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcuZXh0cmFTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRCb29raW5nMTgodmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5QaWNrVXAsIHRsdlBpY2tVcCwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6IGJvb2tpbmdJbmRleCArICctbW9kaWluLXBpY2t1cC1yb3cnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1RpdGxlKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdQaG9uZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5wYWlkU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLmV4dHJhU2VhdHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5waWNrVXBdKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcuZHJvcE9mZl0pKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2NvcGVNb2RpaW5QaWNrVXBUbHZQaWNrVXAxOSh2aXNpYmxlQm9va2luZ3MpIHtcbiAgICAgICAgdmFyIG1vZGlpblBpY2tVcCA9IHZpc2libGVCb29raW5ncy5waWNrVXAubW9kaWluO1xuICAgICAgICB2YXIgdGx2UGlja1VwID0gdmlzaWJsZUJvb2tpbmdzLnBpY2tVcC50bHY7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3BpY2tVcC10YWJsZSBzaG93LWZvci1wcmludCcsXG4gICAgICAgICAgICAna2V5JzogJ3BpY2tVcC10YWJsZSdcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGFibGUnLCB7fSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGhlYWQnLCB7fSwgXy5zaXplKG1vZGlpblBpY2tVcCkgIT09IDAgfHwgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdwaWNrVXAtbGFiZWwnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywgeyAnY29sU3Bhbic6ICc2JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXlNec15XXmicpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcgKCcsIHRoaXMuZ2V0UGlja1VwQ291bnQoKSwgJyknKSkpIDogbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7fSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9ep150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eY15zXpNeV158nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9ee16DXldeZ15nXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn15HXqtep15zXldedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqteX16DXqiDXotec15nXlCcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16rXl9eg16og15nXqNeZ15PXlCcpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgW1xuICAgICAgICAgICAgJ3Rib2R5JyxcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgXy5zaXplKHRsdlBpY2tVcCkgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICd0bHZQaWNrVXAnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge1xuICAgICAgICAgICAgICAgICdjb2xTcGFuJzogJzYnLFxuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAndGFibGUtc3ViJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2UGlja1VwLCByZXBlYXRCb29raW5nMTcuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwKSksXG4gICAgICAgICAgICBfLnNpemUobW9kaWluUGlja1VwKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ21vZGlpblBpY2tVcCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7XG4gICAgICAgICAgICAgICAgJ2NvbFNwYW4nOiAnNicsXG4gICAgICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICd0YWJsZS1zdWInXG4gICAgICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXnteV15PXmdei15nXnycpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAobW9kaWluUGlja1VwLCByZXBlYXRCb29raW5nMTguYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpblBpY2tVcCwgdGx2UGlja1VwKSlcbiAgICAgICAgXSkpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwZWF0Qm9va2luZzIwKHZpc2libGVCb29raW5ncywgbW9kaWluRHJvcE9mZiwgdGx2RHJvcE9mZiwgYm9va2luZywgYm9va2luZ0luZGV4KSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6IGJvb2tpbmdJbmRleCArICctdGx2LWRyb3BvZmYtcm93JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCB0aGlzLmdldEJvb2tpbmdUaXRsZShib29raW5nSW5kZXgpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nUGhvbmUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcucGFpZFNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgYm9va2luZy5leHRyYVNlYXRzKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgQ29uc3RhbnRzLlNUQVRJT05TW2Jvb2tpbmcucGlja1VwXSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLmRyb3BPZmZdKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdEJvb2tpbmcyMSh2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYsIGJvb2tpbmcsIGJvb2tpbmdJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgndHInLCB7ICdrZXknOiBib29raW5nSW5kZXggKyAnLW1vZGlpbi1kcm9wb2ZmLXJvdycgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGQnLCB7fSwgdGhpcy5nZXRCb29raW5nVGl0bGUoYm9va2luZ0luZGV4KSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIHRoaXMuZ2V0Qm9va2luZ1Bob25lKGJvb2tpbmdJbmRleCkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBib29raW5nLnBhaWRTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIGJvb2tpbmcuZXh0cmFTZWF0cyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge30sIENvbnN0YW50cy5TVEFUSU9OU1tib29raW5nLnBpY2tVcF0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHt9LCBDb25zdGFudHMuU1RBVElPTlNbYm9va2luZy5kcm9wT2ZmXSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZU1vZGlpbkRyb3BPZmZUbHZEcm9wT2ZmMjIodmlzaWJsZUJvb2tpbmdzKSB7XG4gICAgICAgIHZhciBtb2RpaW5Ecm9wT2ZmID0gdmlzaWJsZUJvb2tpbmdzLmRyb3BPZmYubW9kaWluO1xuICAgICAgICB2YXIgdGx2RHJvcE9mZiA9IHZpc2libGVCb29raW5ncy5kcm9wT2ZmLnRsdjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnZHJvcE9mZi10YWJsZSBzaG93LWZvci1wcmludCcsXG4gICAgICAgICAgICAna2V5JzogJ2Ryb3BPZmYtdGFibGUnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJywge30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJywge30sIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCB8fCBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdkcm9wT2ZmLWxhYmVsJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHsgJ2NvbFNwYW4nOiAnNicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn15fXlteV16gnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAnKCcsIHRoaXMuZ2V0RHJvcE9mZkNvdW50KCksICcpJykpKSA6IG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywge30sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXqdedJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXmNec16TXldefJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RoJywge30sICfXnteg15XXmdeZ150nKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eR16rXqdec15XXnScpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0aCcsIHt9LCAn16rXl9eg16og16LXnNeZ15QnKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgndGgnLCB7fSwgJ9eq15fXoNeqINeZ16jXmdeT15QnKSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIF8uc2l6ZSh0bHZEcm9wT2ZmKSAhPT0gMCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RyJywgeyAna2V5JzogJ3RsdkRyb3BPZmYnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3RkJywge1xuICAgICAgICAgICAgICAgICdjb2xTcGFuJzogJzYnLFxuICAgICAgICAgICAgICAgICdjbGFzc05hbWUnOiAndGFibGUtc3ViJ1xuICAgICAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCAn16rXnCDXkNeR15nXkScpKSkgOiBudWxsLFxuICAgICAgICAgICAgXy5tYXAodGx2RHJvcE9mZiwgcmVwZWF0Qm9va2luZzIwLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzLCBtb2RpaW5Ecm9wT2ZmLCB0bHZEcm9wT2ZmKSksXG4gICAgICAgICAgICBfLnNpemUobW9kaWluRHJvcE9mZikgIT09IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0cicsIHsgJ2tleSc6ICdtb2RpaW5Ecm9wT2ZmJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZCcsIHtcbiAgICAgICAgICAgICAgICAnY29sU3Bhbic6ICc2JyxcbiAgICAgICAgICAgICAgICAnY2xhc3NOYW1lJzogJ3RhYmxlLXN1YidcbiAgICAgICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ee15XXk9eZ16LXmdefJykpKSA6IG51bGwsXG4gICAgICAgICAgICBfLm1hcChtb2RpaW5Ecm9wT2ZmLCByZXBlYXRCb29raW5nMjEuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MsIG1vZGlpbkRyb3BPZmYsIHRsdkRyb3BPZmYpKVxuICAgICAgICBdKSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzY29wZVZpc2libGVCb29raW5nczIzKCkge1xuICAgICAgICB2YXIgdmlzaWJsZUJvb2tpbmdzID0gdGhpcy5nZXRWaXNpYmxlQm9va2luZ3MoKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICfWv3NtYWxsLWNlbnRlcmVkIGRhc2hib2FyZC1wYWdlIGJvb2tpbmdzLXBhZ2UnIH0sICF0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdrZXknOiAnbGlzdC12aWV3JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyIGhpZGUtZm9yLXByaW50JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXqNep15XXnteZ150g15zXlNeh16LXldeqJykpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnZmlsdGVyaW5nIHJvdyBleHBhbmRlZCBjb2xsYXBzZSBoaWRlLWZvci1wcmludCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2NvbHVtbiBzbWFsbC0xMiBsYXJnZS02JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCd1bCcsIHsgJ2NsYXNzTmFtZSc6ICdtZW51JyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsaScsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiBfKHsgYWN0aXZlOiB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1BJQ0tVUCcgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazEuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eU15zXldeaICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5nZXRQaWNrVXBDb3VudCgpLCAnKScpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IF8oeyBhY3RpdmU6IHRoaXMuc3RhdGUuZmlsdGVyID09PSAnRFJPUE9GRicgfSkudHJhbnNmb3JtKGZ1bmN0aW9uIChyZXMsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBbXSkuam9pbignICcpXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7ICdvbkNsaWNrJzogb25DbGljazIuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9eX15bXldeoICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICcoJywgdGhpcy5nZXREcm9wT2ZmQ291bnQoKSwgJyknKSkpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzTmFtZSc6ICdjb2x1bW4gc21hbGwtMTIgbGFyZ2UtNicgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ3NlYXJjaCcgfSwgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmV2ZW50SWQsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2UzLmJpbmQodGhpcywgdmlzaWJsZUJvb2tpbmdzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKHRoaXMucHJvcHMuZXZlbnRzLCByZXBlYXRFdmVudDQuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpKVxuICAgICAgICBdKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnaDUnLCB7ICdjbGFzc05hbWUnOiAnc2hvdy1mb3ItcHJpbnQnIH0sIHRoaXMuZ2V0RXZlbnRQcmludFRpdGxlKCkpLCB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ1BJQ0tVUCcgPyBzY29wZU1vZGlpblBpY2tVcFRsdlBpY2tVcDkuYXBwbHkodGhpcywgW3Zpc2libGVCb29raW5nc10pIDogbnVsbCwgdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdEUk9QT0ZGJyA/IHNjb3BlTW9kaWluRHJvcE9mZlRsdkRyb3BPZmYxNC5hcHBseSh0aGlzLCBbdmlzaWJsZUJvb2tpbmdzXSkgOiBudWxsLCB2aXNpYmxlQm9va2luZ3MubGVuZ3RoID09PSAwID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZpbHRlci1zdGF0dXMgaGlkZS1mb3ItcHJpbnQnLFxuICAgICAgICAgICAgJ2tleSc6ICduby1ldmVudHMnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ2ZhIGZhLWZyb3duLW8nLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge30sICfXntem15jXoteo15nXnSwg15zXkCDXoNee16bXkNeVINeo16nXldee15XXqiDXnteq15DXmdee15XXqi4uLicpKSA6IG51bGwpIDogbnVsbCwgdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkID8gUmVhY3QuY3JlYXRlRWxlbWVudChCb29raW5nRm9ybSwge1xuICAgICAgICAgICAgJ2tleSc6ICdlZGl0LXVzZXInLFxuICAgICAgICAgICAgJ3RpdGxlJzogJ9ei16jXmdeb16og15TXqNep157XlCcsXG4gICAgICAgICAgICAnYm9va2luZyc6IHRoaXMucHJvcHMuYm9va2luZ3NbdGhpcy5zdGF0ZS5lZGl0aW5nVXNlcklkXVt0aGlzLnN0YXRlLmV2ZW50SWRdLFxuICAgICAgICAgICAgJ29uU3VibWl0Jzogb25TdWJtaXQxNS5iaW5kKHRoaXMsIHZpc2libGVCb29raW5ncyksXG4gICAgICAgICAgICAnc2Vhc29uVGlja2V0cyc6IF8uZ2V0KHRoaXMucHJvcHMudXNlcnMsIFtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmVkaXRpbmdVc2VySWQsXG4gICAgICAgICAgICAgICAgJ3NlYXNvblRpY2tldHMnXG4gICAgICAgICAgICBdKSB8fCAwLFxuICAgICAgICAgICAgJ29uQ2xvc2UnOiBvbkNsb3NlMTYuYmluZCh0aGlzLCB2aXNpYmxlQm9va2luZ3MpXG4gICAgICAgIH0pIDogbnVsbCwgdGhpcy5zdGF0ZS5maWx0ZXIgPT09ICdQSUNLVVAnID8gc2NvcGVNb2RpaW5QaWNrVXBUbHZQaWNrVXAxOS5hcHBseSh0aGlzLCBbdmlzaWJsZUJvb2tpbmdzXSkgOiBudWxsLCB0aGlzLnN0YXRlLmZpbHRlciA9PT0gJ0RST1BPRkYnID8gc2NvcGVNb2RpaW5Ecm9wT2ZmVGx2RHJvcE9mZjIyLmFwcGx5KHRoaXMsIFt2aXNpYmxlQm9va2luZ3NdKSA6IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2NvcGVWaXNpYmxlQm9va2luZ3MyMy5hcHBseSh0aGlzLCBbXSk7XG4gICAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ib29raW5nc1BhZ2Uuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9ib29raW5nc1BhZ2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2Jvb2tpbmdzUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Jvb2tpbmdzUGFnZS9ib29raW5nc1BhZ2Uuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm9va2luZ3MtcGFnZSBoNSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6ICNDRkQ4REM7XFxuICBjb2xvcjogIzM3NDc0RjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4uYm9va2luZ3MtcGFnZSBoNiB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJhY2tncm91bmQ6ICNFQ0VGRjE7XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLmJvb2tpbmdzLXBhZ2UgLnRhYmxlLXN1YiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjIyMjIyOyB9XFxuXFxuLmJvb2tpbmdzLXBhZ2UgdGFibGUgdGJvZHksIC5ib29raW5ncy1wYWdlIHRhYmxlIHRmb290LCAuYm9va2luZ3MtcGFnZSB0YWJsZSB0aGVhZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjIyMjIyOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYm9va2luZ3NQYWdlL2Jvb2tpbmdzUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBSZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxuY29uc3QgVXNlckZvcm0gPSByZXF1aXJlKCcuL3VzZXJGb3JtLmpzeCcpO1xuXG5jb25zdCBuYXZpZ2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvbmF2aWdhdGlvbkFjdGlvbnMnKTtcbmNvbnN0IG5hdmlnYXRpb25Db25zdGFudHMgPSByZXF1aXJlKCcuLi91dGlscy9uYXZpZ2F0aW9uQ29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVpZDogc3RhdGUuYXV0aERhdGEudWlkXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmF2aWdhdGVUbzogcGFnZUlkID0+IGRpc3BhdGNoKG5hdmlnYXRpb25BY3Rpb25zLm5hdmlnYXRlVG8ocGFnZUlkKSlcbiAgICB9O1xufVxuXG5jbGFzcyBFZGl0b3JVc2VySW5mb1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIG9uRm9ybUNsb3NlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm5hdmlnYXRlVG8obmF2aWdhdGlvbkNvbnN0YW50cy5QQUdFUy5IT01FLnZhbCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxVc2VyRm9ybSB1aWQ9e3RoaXMucHJvcHMudWlkfSBvbkNsb3NlPXt0aGlzLm9uRm9ybUNsb3NlfS8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkVkaXRvclVzZXJJbmZvUGFnZS5wcm9wVHlwZXMgPSB7XG4gICAgdWlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmF2aWdhdGVUbzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJlZHV4LmNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVkaXRvclVzZXJJbmZvUGFnZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZWRpdFVzZXJJbmZvUGFnZS5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgUEFHRVM6IHtcbiAgICBIT01FOiB7IHZhbDogJ2hvbWUnLCB2aXNpYmxlOiB0cnVlIH0sXG4gICAgQVVUSDogeyB2YWw6ICdhdXRoJywgdmlzaWJsZTogZmFsc2UgfSxcbiAgICBVU0VSUzogeyB2YWw6ICd1c2VycycsIHZpc2libGU6IHRydWUgfSxcbiAgICBFVkVOVFM6IHsgdmFsOiAnZXZlbnRzJywgdmlzaWJsZTogdHJ1ZSB9LFxuICAgIEJPT0tJTkdTOiB7IHZhbDogJ2Jvb2tpbmdzJywgdmlzaWJsZTogdHJ1ZSB9LFxuICAgIERJU1RSSUJVVElPTjogeyB2YWw6ICdkaXN0cmlidXRpb24nLCB2aXNpYmxlOiB0cnVlIH0sXG4gICAgRURJVF9VU0VSX0lORk86IHsgdmFsOiAnZWRpdFVzZXJJbmZvJywgdmlzaWJsZTogZmFsc2UgfVxuICB9LFxuICBUUkFOU0xBVElPTlM6IHtcbiAgICBob21lOiAn15PXoyDXlNeR15nXqicsXG4gICAgdXNlcnM6ICfXntep16rXntep15nXnScsXG4gICAgZXZlbnRzOiAn157XqdeX16fXmdedJyxcbiAgICBib29raW5nczogJ9eo16nXldee15nXqiDXnNeU16HXoteV16onLFxuICAgIGRpc3RyaWJ1dGlvbjogJ9eo16nXmdee16og16rXpNeV16bXlCdcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvbmF2aWdhdGlvbkNvbnN0YW50cy5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9kaXN0cmlidXRpb25QYWdlLnJ0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHNlbmRUZW1wbGF0ZUVtYWlsLCBzZW5kQ3VzdG9tRW1haWwsIHNlbmRTTVMgfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2Rpc3RyaWJ1dGlvbkFjdGlvbnMnO1xuXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuZnVuY3Rpb24gZ2V0TWVtYmVyc1VzZXJzT25seSh1c2Vycykge1xuICByZXR1cm4gXy5waWNrQnkodXNlcnMsIHVzZXIgPT4gdXNlci5zZWFzb25UaWNrZXRzICYmIHVzZXIuc2Vhc29uVGlja2V0cyA+IDApO1xufVxuXG5mdW5jdGlvbiBnZXRCb29rZWRVc2Vyc09ubHkodXNlcnMsIGJvb2tpbmdzLCBldmVudElkKSB7XG4gIHJldHVybiBfLnBpY2tCeSh1c2VycywgKHVzZXIsIHVpZCkgPT4gXy5oYXMoYm9va2luZ3NbdWlkXSwgZXZlbnRJZCkpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWNpcGllbnRzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGV2ZW50SWQpIHtcbiAgbGV0IHJlY2lwaWVudHNVc2VycyA9IF8ucGlja0J5KHVzZXJzLCB1c2VyID0+IHVzZXIuc3Vic2NyaWJlTWFpbCk7XG5cbiAgc3dpdGNoIChyZWNpcGllbnRzVHlwZSkge1xuICAgIGNhc2UgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLk1FTUJFUlNfT05MWS52YWx1ZTpcbiAgICAgIHJlY2lwaWVudHNVc2VycyA9IGdldE1lbWJlcnNVc2Vyc09ubHkocmVjaXBpZW50c1VzZXJzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLkJPT0tFRF9UT19FVkVOVC52YWx1ZTpcbiAgICAgIHJlY2lwaWVudHNVc2VycyA9IGdldEJvb2tlZFVzZXJzT25seShyZWNpcGllbnRzVXNlcnMsIGJvb2tpbmdzLCBldmVudElkKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJlY2lwaWVudHNVc2Vycztcbn1cblxuZnVuY3Rpb24gZ2V0VXNlcnNFbWFpbHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZXZlbnRJZCkge1xuICBjb25zdCByZWNpcGllbnRzID0gZ2V0UmVjaXBpZW50cyh1c2VycywgcmVjaXBpZW50c1R5cGUsIGJvb2tpbmdzLCBldmVudElkKTtcbiAgcmV0dXJuIF8ubWFwKHJlY2lwaWVudHMsIHVzZXIgPT4gdXNlci5lbWFpbCk7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJzUGhvbmVOdW1iZXJzKHVzZXJzLCByZWNpcGllbnRzVHlwZSwgYm9va2luZ3MsIGV2ZW50SWQpIHtcbiAgY29uc3QgcmVjaXBpZW50cyA9IGdldFJlY2lwaWVudHModXNlcnMsIHJlY2lwaWVudHNUeXBlLCBib29raW5ncywgZXZlbnRJZCk7XG4gIHJldHVybiBfLm1hcChyZWNpcGllbnRzLCB1c2VyID0+IHVzZXIucGhvbmVQcmVmaXggKyB1c2VyLnBob25lTnVtYmVyKTtcbn1cblxuY29uc3QgZ2V0RXZlbnRTdWJzdGl0dXRpb25zID0gZXZlbnQgPT4gKHtcbiAgJy1ERVBBUlRVUkUtJzogYCR7ZXZlbnQuaG91cn06JHtldmVudC5taW51dGV9YCxcbiAgJy1EQVRFLSc6IGAke2V2ZW50LmRheX0vJHtldmVudC5tb250aH0vJHtldmVudC55ZWFyfWAsXG4gICctTkFNRS0nOiBDb25zdGFudHMuRVZFTlRTX1RZUEVTW2V2ZW50LnR5cGVJZF0ubmFtZVxufSk7XG5cbmNvbnN0IHByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQgPSBjb250ZW50ID0+ICc8cCBkaXI9XFwncnRsXFwnPicgKyBjb250ZW50LnJlcGxhY2UoLyg/OlxcclxcbnxcXHJ8XFxuKS9nLCAnPGJyLz4nKSArICc8L3A+JztcblxuY29uc3QgZ2V0SW5pdGlhbFN0YXRlID0gZXZlbnRzID0+ICh7XG4gIGRpc3RyaWJ1dGlvbk1ldGhvZDogJ2VtYWlsJyxcbiAgcmVjaXBpZW50c1R5cGU6IENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5NRU1CRVJTX09OTFkudmFsdWUsXG4gIGRpc3RyaWJ1dGlvblR5cGU6ICd0ZW1wbGF0ZScsXG4gIGV2ZW50SWQ6IF8ubGFzdChfLmtleXMoZXZlbnRzKSksXG4gIHRlbXBsYXRlSWQ6IENvbnN0YW50cy5ESVNUUklCVVRJT04uVEVNUExBVEVTLkVWRU5UX09QRU5fRk9SX01FTUJFUlMuaWQsXG4gIHN1YmplY3Q6ICcnLFxuICBjb250ZW50OiAnJ1xufSk7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGV2ZW50czogc3RhdGUuZXZlbnRzLFxuICBib29raW5nczogc3RhdGUuYm9va2luZ3MsXG4gIHVzZXJzOiBzdGF0ZS51c2Vyc1xufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHNlbmRUZW1wbGF0ZUVtYWlsOiAocmVjaXBpZW50cywgdGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucykgPT4gZGlzcGF0Y2goc2VuZFRlbXBsYXRlRW1haWwocmVjaXBpZW50cywgdGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucykpLFxuICBzZW5kQ3VzdG9tRW1haWw6IChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSA9PiBkaXNwYXRjaChzZW5kQ3VzdG9tRW1haWwocmVjaXBpZW50cywgc3ViamVjdCwgY29udGVudCkpLFxuICBzZW5kU01TOiAocmVjaXBpZW50cywgbWVzc2FnZSkgPT4gZGlzcGF0Y2goc2VuZFNNUyhyZWNpcGllbnRzLCBtZXNzYWdlKSksXG59KTtcblxuY2xhc3MgRGlzdHJpYnV0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSh0aGlzLmdldE9wZW5FdmVudHMoKSk7XG4gIH1cblxuICBnZXRPcGVuRXZlbnRzKCkge1xuICAgIHJldHVybiBfLm9taXRCeSh0aGlzLnByb3BzLmV2ZW50cyxcbiAgICAgIGV2ZW50ID0+IGV2ZW50LnN0YXR1cyAhPT0gQ29uc3RhbnRzLkVWRU5UU19TVEFUVVMuT1BFTl9GT1JfTUVNQkVSUy52YWx1ZSAmJiBldmVudC5zdGF0dXMgIT09IENvbnN0YW50cy5FVkVOVFNfU1RBVFVTLk9QRU5fRk9SX0FMTC52YWx1ZVxuICAgICk7XG4gIH1cblxuICBvbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3RyaWJ1dGlvbk1ldGhvZDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvblJlY2lwaWVudHNUeXBlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVjaXBpZW50c1R5cGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25EaXN0cmlidXRpb25UeXBlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzdHJpYnV0aW9uVHlwZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBvblRlbXBsYXRlSWRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZW1wbGF0ZUlkOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uRXZlbnRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBldmVudElkOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIG9uU3ViamVjdENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN1YmplY3Q6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgb25Db250ZW50Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udGVudDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBpc0Rpc3RyaWJ1dGlvblR5cGVWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLkVNQUlMO1xuICB9XG5cbiAgaXNFdmVudHNWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzRGlzdHJpYnV0aW9uVHlwZVZpc2libGUoKSAmJiB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuVEVNUExBVEU7XG4gIH1cblxuICBpc0N1c3RvbVRpdGxlVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5FTUFJTCAmJlxuICAgICAgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25UeXBlID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLkNVU1RPTTtcbiAgfVxuXG4gIGlzQ3VzdG9tQ29udGVudFZpc2libGUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kID09PSBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuRU1BSUwgJiZcbiAgICAgIHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5DVVNUT01cbiAgICAgICkgfHwgdGhpcy5zdGF0ZS5kaXN0cmlidXRpb25NZXRob2QgPT09IENvbnN0YW50cy5ESVNUUklCVVRJT04uTUVUSE9EUy5TTVM7XG4gIH1cblxuICBzZW5kKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvbk1ldGhvZCA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5NRVRIT0RTLkVNQUlMKSB7XG4gICAgICBjb25zdCByZWNpcGllbnRzID0gZ2V0VXNlcnNFbWFpbHModGhpcy5wcm9wcy51c2VycywgdGhpcy5zdGF0ZS5yZWNpcGllbnRzVHlwZSwgdGhpcy5wcm9wcy5ib29raW5ncywgdGhpcy5zdGF0ZS5ldmVudElkKTtcbiAgICAgIGlmIChfLmlzRW1wdHkocmVjaXBpZW50cykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5UWVBFUy5URU1QTEFURSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gZ2V0RXZlbnRTdWJzdGl0dXRpb25zKHRoaXMucHJvcHMuZXZlbnRzW3RoaXMuc3RhdGUuZXZlbnRJZF0pO1xuICAgICAgICB0aGlzLnByb3BzLnNlbmRUZW1wbGF0ZUVtYWlsKHJlY2lwaWVudHMsIHRoaXMuc3RhdGUudGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLnNlbmRDdXN0b21FbWFpbChyZWNpcGllbnRzLCB0aGlzLnN0YXRlLnN1YmplY3QsIHByZXBhcmVDdXN0b21NYWlsQ29udGVudEZvclNlbmQodGhpcy5zdGF0ZS5jb250ZW50KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlY2lwaWVudHMgPSBnZXRVc2Vyc1Bob25lTnVtYmVycyh0aGlzLnByb3BzLnVzZXJzLCB0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLCB0aGlzLnByb3BzLmJvb2tpbmdzLCB0aGlzLnN0YXRlLmV2ZW50SWQpO1xuICAgICAgaWYgKF8uaXNFbXB0eShyZWNpcGllbnRzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLnNlbmRTTVMocmVjaXBpZW50cywgdGhpcy5zdGF0ZS5jb250ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKGdldEluaXRpYWxTdGF0ZSh0aGlzLmdldE9wZW5FdmVudHMoKSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxuXG59XG5cbkRpc3RyaWJ1dGlvblBhZ2UucHJvcFR5cGVzID0ge1xuICBldmVudHM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXNlcnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2VuZFRlbXBsYXRlRW1haWw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbmRDdXN0b21FbWFpbDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VuZFNNUzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEaXN0cmlidXRpb25QYWdlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9kaXN0cmlidXRpb25QYWdlL2Rpc3RyaWJ1dGlvblBhZ2UuanMiLCJkZWZpbmUoW1xuICAgICdyZWFjdCcsXG4gICAgJ2xvZGFzaCcsXG4gICAgJy4uLy4uL3V0aWxzL2NvbnN0YW50cycsXG4gICAgJy4vZGlzdHJpYnV0aW9uUGFnZS5zY3NzJ1xuXSwgZnVuY3Rpb24gKFJlYWN0LCBfLCBDb25zdGFudHMsIGRpc3RyaWJ1dGlvblBhZ2VDc3MpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UxKGUpIHtcbiAgICAgICAgdGhpcy5vbkRpc3RyaWJ1dGlvbk1ldGhvZENoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UyKGUpIHtcbiAgICAgICAgdGhpcy5vblJlY2lwaWVudHNUeXBlQ2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNoYW5nZTMoZSkge1xuICAgICAgICB0aGlzLm9uRGlzdHJpYnV0aW9uVHlwZUNoYW5nZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2U0KGUpIHtcbiAgICAgICAgdGhpcy5vblRlbXBsYXRlSWRDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGVhdFRlbXBsYXRlQ29uc3Q1KHRlbXBsYXRlQ29uc3QsIHRlbXBsYXRlQ29uc3RJbmRleCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywge1xuICAgICAgICAgICAgJ2tleSc6ICd0ZW1wbGF0ZS0nICsgdGVtcGxhdGVDb25zdC5pZCxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRlbXBsYXRlQ29uc3QuaWRcbiAgICAgICAgfSwgdGVtcGxhdGVDb25zdC5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2U2KGUpIHtcbiAgICAgICAgdGhpcy5vbkV2ZW50Q2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXBlYXRFdmVudDcoZXZlbnQsIGV2ZW50SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHtcbiAgICAgICAgICAgICdrZXknOiAnZXZlbnQtJyArIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAndmFsdWUnOiBldmVudEluZGV4XG4gICAgICAgIH0sIENvbnN0YW50cy5FVkVOVFNfVFlQRVNbZXZlbnQudHlwZUlkXS5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25DaGFuZ2U4KGUpIHtcbiAgICAgICAgdGhpcy5vblN1YmplY3RDaGFuZ2UoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlOShlKSB7XG4gICAgICAgIHRoaXMub25Db250ZW50Q2hhbmdlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkNsaWNrMTAoKSB7XG4gICAgICAgIHRoaXMuc2VuZCgpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2Rhc2hib2FyZC1wYWdlIGRpc3RyaWJ1dGlvbi1wYWdlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnaGVhZGVyJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgJ2NsYXNzTmFtZSc6ICdoZWFkZXItdGl0bGUnIH0sICfXqdec15nXl9eqINee15nXmdec15nXnScpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2Rpc3RyaWJ1dGlvbi1mb3JtIHNtYWxsLTExIHNtYWxsLWNlbnRlcmVkJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCBtb3JlLXNwYWNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16nXnNeXINeR15DXntem16LXldeqXFxuICAgICAgICAgICAgICAgICcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuZGlzdHJpYnV0aW9uTWV0aG9kLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2UxLmJpbmQodGhpcylcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuRU1BSUwgfSwgJ9eT15XXkNeoINeQ15zXp9eY16jXldeg15knKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLk1FVEhPRFMuU01TIH0sICfXodee16EnKSkpKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXqdec15cg15DXnFxcbiAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnLCB7XG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLnJlY2lwaWVudHNUeXBlLFxuICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2UyLmJpbmQodGhpcylcbiAgICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQUxMLnZhbHVlIH0sICdcXG4gICAgICAgICAgICAgICAgICAgICAgICAnLCBDb25zdGFudHMuRElTVFJJQlVUSU9OLlJFQ0lQSUVOVFMuQUxMLm5hbWUsICdcXG4gICAgICAgICAgICAgICAgICAgICcpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5NRU1CRVJTX09OTFkudmFsdWUgfSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICcsIENvbnN0YW50cy5ESVNUUklCVVRJT04uUkVDSVBJRU5UUy5NRU1CRVJTX09OTFkubmFtZSwgJ1xcbiAgICAgICAgICAgICAgICAgICAgJyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgJ3ZhbHVlJzogQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLkJPT0tFRF9UT19FVkVOVC52YWx1ZSB9LCAnXFxuICAgICAgICAgICAgICAgICAgICAgICAgJywgQ29uc3RhbnRzLkRJU1RSSUJVVElPTi5SRUNJUElFTlRTLkJPT0tFRF9UT19FVkVOVC5uYW1lLCAnXFxuICAgICAgICAgICAgICAgICAgICAnKSkpKSwgdGhpcy5pc0Rpc3RyaWJ1dGlvblR5cGVWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogJ21lZGl1bS04IHNtYWxsLTEyIGNvbHVtbnMgc21hbGwtY2VudGVyZWQnLFxuICAgICAgICAgICAgJ2tleSc6ICdkaXN0cmlidXRpb25UeXBlJ1xuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHt9LCAn16bXldeo16og16nXnNeZ15fXlFxcbiAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnLCB7XG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmRpc3RyaWJ1dGlvblR5cGUsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTMuYmluZCh0aGlzKVxuICAgICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7ICd2YWx1ZSc6IENvbnN0YW50cy5ESVNUUklCVVRJT04uVFlQRVMuVEVNUExBVEUgfSwgJ9eq15HXoNeZ16onKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnb3B0aW9uJywgeyAndmFsdWUnOiBDb25zdGFudHMuRElTVFJJQlVUSU9OLlRZUEVTLkNVU1RPTSB9LCAn15fXldek16nXmScpKSkpIDogbnVsbCwgdGhpcy5pc0V2ZW50c1Zpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcsXG4gICAgICAgICAgICAna2V5JzogJ3RlbXBsYXRQaWNrZXInXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXkdeX16gg16rXkdeg15nXqlxcbiAgICAgICAgICAgICAgICAnLCBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIFtcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUudGVtcGxhdGVJZCxcbiAgICAgICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTQuYmluZCh0aGlzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF8ubWFwKENvbnN0YW50cy5ESVNUUklCVVRJT04uVEVNUExBVEVTLCByZXBlYXRUZW1wbGF0ZUNvbnN0NS5iaW5kKHRoaXMpKVxuICAgICAgICBdKSkpIDogbnVsbCwgdGhpcy5pc0V2ZW50c1Zpc2libGUoKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucyBzbWFsbC1jZW50ZXJlZCcsXG4gICAgICAgICAgICAna2V5JzogJ2V2ZW50SWQnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge30sICfXkdeX15nXqNeqINeQ15nXqNeV16JcXG4gICAgICAgICAgICAgICAgJywgUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAnc2VsZWN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmV2ZW50SWQsXG4gICAgICAgICAgICAgICAgJ29uQ2hhbmdlJzogb25DaGFuZ2U2LmJpbmQodGhpcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfLm1hcCh0aGlzLmdldE9wZW5FdmVudHMoKSwgcmVwZWF0RXZlbnQ3LmJpbmQodGhpcykpXG4gICAgICAgIF0pKSkgOiBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7ICdjbGFzc05hbWUnOiAnc21hbGwtY2VudGVyZWQgbWVkaXVtLTggc21hbGwtMTIgY29sdW1ucycgfSwgdGhpcy5pc0N1c3RvbVRpdGxlVmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7ICdrZXknOiAnY3VzdG9tU3ViamVjdC1sYWJlbCcgfSwgJ9eg15XXqdeQOicpIDogbnVsbCwgdGhpcy5pc0N1c3RvbVRpdGxlVmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuc3RhdGUuc3ViamVjdCxcbiAgICAgICAgICAgICdvbkNoYW5nZSc6IG9uQ2hhbmdlOC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgJ2tleSc6ICdjdXN0b21TdWJqZWN0J1xuICAgICAgICB9KSA6IG51bGwsIHRoaXMuaXNDdXN0b21Db250ZW50VmlzaWJsZSgpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7ICdrZXknOiAnY3VzdG9tQ29udGVudC1sYWJlbCcgfSwgJ9eq15XXm9efOicpIDogbnVsbCwgdGhpcy5pc0N1c3RvbUNvbnRlbnRWaXNpYmxlKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICAgICduYW1lJzogdHJ1ZSxcbiAgICAgICAgICAgICdpZCc6IHRydWUsXG4gICAgICAgICAgICAncm93cyc6ICcxMCcsXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLnN0YXRlLmNvbnRlbnQsXG4gICAgICAgICAgICAnb25DaGFuZ2UnOiBvbkNoYW5nZTkuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdrZXknOiAnY3VzdG9tQ29udGVudCdcbiAgICAgICAgfSkgOiBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgeyAnY2xhc3NOYW1lJzogJ2J1dHRvbi1ncm91cCBzdGFja2VkIHNtYWxsLWNlbnRlcmVkIGxhcmdlLTYgc21hbGwtOCBtb3JlLXNwYWNlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgICAgICAgICAgJ29uQ2xpY2snOiBvbkNsaWNrMTAuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiAnYnV0dG9uIHN1Y2Nlc3MnXG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7fSwgJ9ep15zXlycpLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywge1xuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6ICdmYSBmYS1wYXBlci1wbGFuZScsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSkpKSkpO1xuICAgIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5ydFxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9kaXN0cmlidXRpb25QYWdlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZGlzdHJpYnV0aW9uUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vZGlzdHJpYnV0aW9uUGFnZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2Rpc3RyaWJ1dGlvblBhZ2UvZGlzdHJpYnV0aW9uUGFnZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kaXN0cmlidXRpb24tcGFnZSAuYnV0dG9uIGkge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZGlzdHJpYnV0aW9uUGFnZS9kaXN0cmlidXRpb25QYWdlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIGNsaWVudERCIGZyb20gJy4uLy4uL3V0aWxzL2NsaWVudERCJztcbmltcG9ydCAqIGFzIGxvYWRpbmdBY3Rpb25zIGZyb20gJy4vbG9hZGluZ0FjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4vZXJyb3JBY3Rpb25zJztcblxuY29uc3QgUEFUSF9NQVAgPSB7XG4gIEVNQUlMUzoge1xuICAgIFRFTVBMQVRFUzogJ3BlbmRpbmdFbWFpbHMvdGVtcGxhdGVzJyxcbiAgICBDVVNUT006ICdwZW5kaW5nRW1haWxzL2N1c3RvbSdcbiAgfSxcbiAgU01TOiAncGVuZGluZ1NNUycsXG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFRlbXBsYXRlRW1haWwgPSAocmVjaXBpZW50cywgdGVtcGxhdGVJZCwgc3Vic3RpdHV0aW9ucykgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goYCR7UEFUSF9NQVAuRU1BSUxTLlRFTVBMQVRFU31gLCAoeyByZWNpcGllbnRzLCB0ZW1wbGF0ZUlkLCBzdWJzdGl0dXRpb25zIH0pKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRDdXN0b21FbWFpbCA9IChyZWNpcGllbnRzLCBzdWJqZWN0LCBjb250ZW50KSA9PiBkaXNwYXRjaCA9PiB7XG4gIGRpc3BhdGNoKGxvYWRpbmdBY3Rpb25zLnN0YXJ0TG9hZGluZygpKTtcblxuICByZXR1cm4gY2xpZW50REIucHVzaChgJHtQQVRIX01BUC5FTUFJTFMuQ1VTVE9NfWAsICh7IHJlY2lwaWVudHMsIHN1YmplY3QsIGNvbnRlbnQgfSkpXG4gICAgLmNhdGNoKCgpID0+IGRpc3BhdGNoKGVycm9yQWN0aW9ucy5yZXBvcnRFcnJvcigpKSlcbiAgICAuZmluYWxseSgoKSA9PiBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdG9wTG9hZGluZygpKSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFNNUyA9ICh0bywgbWVzc2FnZSkgPT4gZGlzcGF0Y2ggPT4ge1xuICBkaXNwYXRjaChsb2FkaW5nQWN0aW9ucy5zdGFydExvYWRpbmcoKSk7XG5cbiAgcmV0dXJuIGNsaWVudERCLnB1c2goYCR7UEFUSF9NQVAuU01TfWAsICh7IHRvLCBtZXNzYWdlIH0pKVxuICAgIC5jYXRjaCgoKSA9PiBkaXNwYXRjaChlcnJvckFjdGlvbnMucmVwb3J0RXJyb3IoKSkpXG4gICAgLmZpbmFsbHkoKCkgPT4gZGlzcGF0Y2gobG9hZGluZ0FjdGlvbnMuc3RvcExvYWRpbmcoKSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvYWN0aW9ucy9kaXN0cmlidXRpb25BY3Rpb25zLmpzIiwiY29uc3QgXyA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUmVhY3RSZWR1eCA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG5jb25zdCBuYXZpZ2F0aW9uQ29uc3RhbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvbmF2aWdhdGlvbkNvbnN0YW50cycpO1xuXG5jb25zdCBuYXZpZ2F0aW9uQWN0aW9ucyA9IHJlcXVpcmUoJy4uL3JlZHV4L2FjdGlvbnMvbmF2aWdhdGlvbkFjdGlvbnMnKTtcbmNvbnN0IGF1dGhBY3Rpb25zID0gcmVxdWlyZSgnLi4vcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9ucycpO1xuXG5yZXF1aXJlKCcuLi9zdHlsZXMvdG9wQmFyLnNjc3MnKTtcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSBzdGF0ZS5hdXRoRGF0YTtcbiAgICBjb25zdCB1c2VycyA9IHN0YXRlLnVzZXJzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGhvdG9VUkw6IGF1dGhEYXRhLnBob3RvVVJMIHx8ICdodHRwOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNjMvMTYzODA0LnN2ZycsXG4gICAgICAgIGlzQWRtaW46IGF1dGhEYXRhLmlzQWRtaW4sXG4gICAgICAgIGN1cnJlbnRQYWdlOiBzdGF0ZS5jdXJyZW50UGFnZSxcbiAgICAgICAgY3VycmVudFVzZXI6IGF1dGhEYXRhICYmIHVzZXJzW2F1dGhEYXRhLnVpZF1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYXZpZ2F0ZVRvOiBwYWdlSWQgPT4gZGlzcGF0Y2gobmF2aWdhdGlvbkFjdGlvbnMubmF2aWdhdGVUbyhwYWdlSWQpKSxcbiAgICAgICAgc2lnbk91dDogKCkgPT4gZGlzcGF0Y2goYXV0aEFjdGlvbnMuc2lnbk91dCgpKVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJUaXRsZShjdXJyZW50VXNlcikge1xuICAgIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgICAgcmV0dXJuICfXntep16rXntepJztcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyLmZpcnN0TmFtZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKGN1cnJlbnRVc2VyLCBwaG90b1VSTCwgbmF2aWdhdGVUbywgc2lnbk91dCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTUgc21hbGwtMTAgY29sdW1uIHVzZXItaW5mb1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e3Bob3RvVVJMfSBvbkNsaWNrPXtuYXZpZ2F0ZVRvLmJpbmQodGhpcywgbmF2aWdhdGlvbkNvbnN0YW50cy5QQUdFUy5FRElUX1VTRVJfSU5GTy52YWwpfS8+XG4gICAgICAgICAgICA8c3Bhbj7Xqdec15XXnSA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyLW5hbWVcIj57Z2V0VXNlclRpdGxlKGN1cnJlbnRVc2VyKX08L3NwYW4+PHNwYW4+IHwgPC9zcGFuPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGlzY29ubmVjdFwiIG9uQ2xpY2s9e3NpZ25PdXR9PteU16rXoNeq16c8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNtYWxsTWVudUZvck1vYmlsZSh0b2dnbGVNZW51VmlzaWJpbGl0eSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1mb3Itc21hbGwtb25seSBmbG9hdC1sZWZ0XCIga2V5PVwiYWRtaW4tbWVudS1pY29uXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzbWFsbC1tZW51IGJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVWaXNpYmlsaXR5fT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KHBhZ2VzLCBjdXJyZW50UGFnZSwgbmF2aWdhdGVUbywgaXNBZG1pbiwgaXNNZW51VmlzaWJsZSwgdG9nZ2xlTWVudVZpc2liaWxpdHkpIHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlc2t0b3BNZW51SXRlbShwYWdlKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1DbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgICAgICAgICBhY3RpdmU6IGN1cnJlbnRQYWdlID09PSBwYWdlLnZhbCxcbiAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHNtYWxsOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2l0ZW1DbGFzc2VzfSBvbkNsaWNrPXtuYXZpZ2F0ZVRvLmJpbmQodGhpcywgcGFnZS52YWwpfSBrZXk9eydwYWdlLScgKyBwYWdlLnZhbH0+XG4gICAgICAgICAgICAgICAgeyBuYXZpZ2F0aW9uQ29uc3RhbnRzLlRSQU5TTEFUSU9OU1twYWdlLnZhbF0gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vYmlsZU1lbnVJdGVtKHBhZ2UpIHtcbiAgICAgICAgY29uc3QgaXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIGFjdGl2ZTogY3VycmVudFBhZ2UgPT09IHBhZ2UudmFsLFxuICAgICAgICAgICAgYnV0dG9uOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9uTW9iaWxlTWVudUNsaWNrZWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0ZVRvKHBhZ2UudmFsKTtcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVWaXNpYmlsaXR5KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXRlbUNsYXNzZXN9IG9uQ2xpY2s9e29uTW9iaWxlTWVudUNsaWNrZWR9IGtleT17J3BhZ2UtJyArIHBhZ2UudmFsfT5cbiAgICAgICAgICAgICAgICB7IG5hdmlnYXRpb25Db25zdGFudHMuVFJBTlNMQVRJT05TW3BhZ2UudmFsXSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGVza3RvcE1lbnUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgYnV0dG9uLWdyb3VwIGhpZGUtZm9yLXNtYWxsLW9ubHlcIiBrZXk9XCJhZG1pbi1tZW51XCI+XG4gICAgICAgICAgICAgICAgeyBfKHBhZ2VzKS5waWNrQnkoJ3Zpc2libGUnKS5tYXAoY3JlYXRlRGVza3RvcE1lbnVJdGVtKS52YWx1ZSgpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1vYmlsZU1lbnUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUgYnV0dG9uLWdyb3VwIHN0YWNrZWQtZm9yLXNtYWxsIHNob3ctZm9yLXNtYWxsLW9ubHlcIiBrZXk9XCJhZG1pbi1tZW51LW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIHsgXyhwYWdlcykucGlja0J5KCd2aXNpYmxlJykubWFwKGNyZWF0ZU1vYmlsZU1lbnVJdGVtKS52YWx1ZSgpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLTcgc21hbGwtMTIgY29sdW1uIHZlcnRpY2FsIGNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgeyBpc0FkbWluID8gY3JlYXRlRGVza3RvcE1lbnUoKSA6IG51bGwgfVxuICAgICAgICAgICAgeyBpc0FkbWluICYmIGlzTWVudVZpc2libGUgPyBjcmVhdGVNb2JpbGVNZW51KCkgOiBudWxsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY2xhc3MgVG9wQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTWVudVZpc2libGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51VmlzaWJpbGl0eSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc01lbnVWaXNpYmxlOiAhdGhpcy5zdGF0ZS5pc01lbnVWaXNpYmxlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhciByb3cgc21hbGwtY29sbGFwc2UgaGlkZS1mb3ItcHJpbnRcIj5cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZUhlYWRlcih0aGlzLnByb3BzLmN1cnJlbnRVc2VyLCB0aGlzLnByb3BzLnBob3RvVVJMLCB0aGlzLnByb3BzLm5hdmlnYXRlVG8sIHRoaXMucHJvcHMuc2lnbk91dCkgfVxuICAgICAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5pc0FkbWluID8gY3JlYXRlU21hbGxNZW51Rm9yTW9iaWxlKHRoaXMudG9nZ2xlTWVudVZpc2liaWxpdHkuYmluZCh0aGlzKSkgOiBudWxsIH1cbiAgICAgICAgICAgICAgICB7IGNyZWF0ZU1lbnUobmF2aWdhdGlvbkNvbnN0YW50cy5QQUdFUywgdGhpcy5wcm9wcy5jdXJyZW50UGFnZSwgdGhpcy5wcm9wcy5uYXZpZ2F0ZVRvLCB0aGlzLnByb3BzLmlzQWRtaW4sIHRoaXMuc3RhdGUuaXNNZW51VmlzaWJsZSwgdGhpcy50b2dnbGVNZW51VmlzaWJpbGl0eS5iaW5kKHRoaXMpKSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRvcEJhci5wcm9wVHlwZXMgPSB7XG4gICAgcGhvdG9VUkw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNBZG1pbjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgY3VycmVudFBhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmF2aWdhdGVUbzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2lnbk91dDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RSZWR1eC5jb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUb3BCYXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RvcEJhci5qc3giLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvcEJhci5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL3RvcEJhci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2luZGV4LmpzIS4vdG9wQmFyLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy90b3BCYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudG9wLWJhciB7XFxuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xcbiAgY29sb3I6ICNGRkZGRkY7IH1cXG4gIC50b3AtYmFyIHNwYW4ge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gIC50b3AtYmFyIC51c2VyLWluZm8ge1xcbiAgICBmb250LXNpemU6IDAuODVyZW07IH1cXG4gIC50b3AtYmFyIC5zbWFsbC1tZW51IHtcXG4gICAgYmFja2dyb3VuZDogI0Q1MDAwMDtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcbiAgLnRvcC1iYXIgLm1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07IH1cXG4gICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbiB7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7XFxuICAgICAgYmFja2dyb3VuZDogbm9uZTsgfVxcbiAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24uc21hbGwge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtOyB9XFxuICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogI0QzMkYyRjsgfVxcbiAgICAgIC50b3AtYmFyIC5tZW51IC5idXR0b24uYWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNEMzJGMkY7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAgICAgLnRvcC1iYXIgLm1lbnUgLmJ1dHRvbi5hY3RpdmU6aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgLnRvcC1iYXIgLmF2YXRhciB7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC50b3AtYmFyIC5kaXNjb25uZWN0IHtcXG4gICAgY29sb3I6ICNGNDQzMzY7IH1cXG4gICAgLnRvcC1iYXIgLmRpc2Nvbm5lY3Q6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Nhc3MtbG9hZGVyIS4vc3JjL3N0eWxlcy90b3BCYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2l0ZSB7XFxuICBkaXJlY3Rpb246IHJ0bDsgfVxcbiAgLnNpdGUgLnNwbGl0LmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyB9XFxuICAgIC5zaXRlIC5zcGxpdC5idXR0b24gaSB7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cXG4gICAgLnNpdGUgLnNwbGl0LmJ1dHRvbi5mYWNlYm9vayB7XFxuICAgICAgYmFja2dyb3VuZDogIzNiNTk5ODsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmdvb2dsZSB7XFxuICAgICAgYmFja2dyb3VuZDogI2Q1MGYyNTsgfVxcbiAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmxlZnQtaWNvbiB7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgICAuc2l0ZSAuc3BsaXQuYnV0dG9uLmxlZnQtaWNvbiBzcGFuIHtcXG4gICAgICAgIGxlZnQ6IDA7IH1cXG4gIC5zaXRlIC5lcnJvci1tc2cge1xcbiAgICBjb2xvcjogI2Q1MGYyNTtcXG4gICAgcGFkZGluZzogMCAxNXB4IDE1cHg7IH1cXG4gICAgLnNpdGUgLmVycm9yLW1zZyBpIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDsgfVxcbiAgLnNpdGUgbGFiZWwge1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XFxuICAuc2l0ZSAubW9yZS1zcGFjZSB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7IH1cXG4gIC5zaXRlIC5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjRUY1MzUwO1xcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgI0QzMkYyRjtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGhlaWdodDogMy4zZW07XFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLnNpdGUgLmhlYWRlciAuaGVhZGVyLXRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgZmxleDogMTsgfVxcbiAgLnNpdGUgLmJhY2stYnRuIHtcXG4gICAgd2lkdGg6IDIwcHg7IH1cXG4gIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5saXN0LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAubGlzdC1pdGVtOm50aC1jaGlsZChvZGQpIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51LnNtYWxsLXRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfSB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5tZW51IGxpIGEge1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgY29sb3I6ICNEMzJGMkY7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUgbGkuYWN0aXZlIGEge1xcbiAgICAgIGJhY2tncm91bmQ6ICNEMzJGMkY7XFxuICAgICAgY29sb3I6ICNGRkZGRkY7IH1cXG4gICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5maWx0ZXJpbmcgLm1lbnUgbGkuYWN0aXZlOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI0ZGRkZGRjsgfVxcbiAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmZpbHRlcmluZyAuc2VhcmNoIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOTM1ZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjkzNWVtOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5zZWFyY2gtaW5wdXQge1xcbiAgICAgIHRleHQtaW5kZW50OiAzMHB4OyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyaW5nIC5zZWFyY2gtaWNvbiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMTFweDtcXG4gICAgICByaWdodDogMjhweDtcXG4gICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgIGNvbG9yOiAjY2FjYWNhOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0biB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzMkYyRjtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4yNXMgZWFzZS1vdXQsIGNvbG9yIC4yNXMgZWFzZS1vdXQ7XFxuICAgICAgcGFkZGluZzogLjg1ZW07XFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgd2lkdGg6IDMuNXJlbTtcXG4gICAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgYm90dG9tOiAxcmVtOyB9XFxuICAgICAgLnNpdGUgLmRhc2hib2FyZC1wYWdlIC5hZGQtYnRuLmJpZyB7XFxuICAgICAgICBsZWZ0OiAyNyU7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG4uc21hbGwge1xcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMi41cmVtO1xcbiAgICAgICAgbGVmdDogNSU7IH1cXG4gICAgICAuc2l0ZSAuZGFzaGJvYXJkLXBhZ2UgLmFkZC1idG46aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI0Q1MDAwMDsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuYWRkLWJ0bjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyLXN0YXR1cyB7XFxuICAgICAgY29sb3I6ICM0MjQyNDI7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIC5zaXRlIC5kYXNoYm9hcmQtcGFnZSAuZmlsdGVyLXN0YXR1cyBpIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7IH1cXG4gIC5zaXRlIC5idXR0b24uc3VjY2Vzc1tkaXNhYmxlZF06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjMjVhMzVhICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGVycm9yUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2Vycm9yUmVkdWNlcic7XG5pbXBvcnQgbG9hZGluZ1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlcic7XG5pbXBvcnQgdXNlcnNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvdXNlcnNSZWR1Y2VyJztcbmltcG9ydCBldmVudHNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvZXZlbnRzUmVkdWNlcic7XG5pbXBvcnQgYm9va2luZ3NSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvYm9va2luZ3NSZWR1Y2VyJztcbmltcG9ydCBhdXRoRGF0YVJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9hdXRoRGF0YVJlZHVjZXInO1xuaW1wb3J0IG5hdmlnYXRpb25SZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvbmF2aWdhdGlvblJlZHVjZXInO1xuXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgY3VycmVudFBhZ2U6IG5hdmlnYXRpb25SZWR1Y2VyLFxuICAgIGF1dGhEYXRhOiBhdXRoRGF0YVJlZHVjZXIsXG4gICAgZXJyb3JNc2c6IGVycm9yUmVkdWNlcixcbiAgICBsb2FkaW5nOiBsb2FkaW5nUmVkdWNlcixcbiAgICB1c2VyczogdXNlcnNSZWR1Y2VyLFxuICAgIGV2ZW50czogZXZlbnRzUmVkdWNlcixcbiAgICBib29raW5nczogYm9va2luZ3NSZWR1Y2VyXG4gIH0pO1xuXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUoXG4gICAgdGh1bmtcbiAgKTtcblxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHVuZGVmaW5lZCwgbWlkZGxld2FyZSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9tYWtlU3RvcmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlZHV4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU1RBUlRfTE9BRElORywgUkVQT1JUX0VSUk9SIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9ICcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcnJvclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUE9SVF9FUlJPUjpcbiAgICAgIHJldHVybiBhY3Rpb24ubWVzc2FnZTtcbiAgICBjYXNlIFNUQVJUX0xPQURJTkc6XG4gICAgICByZXR1cm4gJyc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanMiLCJpbXBvcnQgeyBTVEFSVF9MT0FESU5HLCBTVE9QX0xPQURJTkcgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRpbmdSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTVEFSVF9MT0FESU5HOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSBTVE9QX0xPQURJTkc6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy9sb2FkaW5nUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFVTRVJTX1JFQ0VJVkVELCBVU0VSX1JFTU9WRUQsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2Vyc1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVTRVJTX1JFQ0VJVkVEOlxuICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24udXNlcnMpO1xuICAgIGNhc2UgVVNFUl9SRU1PVkVEOlxuICAgICAgcmV0dXJuIF8ub21pdChzdGF0ZSwgYWN0aW9uLnVpZCk7XG4gICAgY2FzZSBTSUdOX09VVDpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1eC9yZWR1Y2Vycy91c2Vyc1JlZHVjZXIuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBFVkVOVFNfUkVDRUlWRUQsIEVWRU5UX1JFTU9WRUQsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVudHNSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBFVkVOVFNfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4gXy5tZXJnZSh7fSwgc3RhdGUsIGFjdGlvbi5ldmVudHMpO1xuICAgIGNhc2UgRVZFTlRfUkVNT1ZFRDpcbiAgICAgIHJldHVybiBfLm9taXQoc3RhdGUsIGFjdGlvbi5ldmVudElkKTtcbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2V2ZW50c1JlZHVjZXIuanMiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBCT09LSU5HU19SRUNFSVZFRCwgQk9PS0lOR19DQU5DRUxFRCwgU0lHTl9PVVQgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV2ZW50c1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEJPT0tJTkdTX1JFQ0VJVkVEOlxuICAgICAgcmV0dXJuIF8ubWVyZ2Uoe30sIHN0YXRlLCBhY3Rpb24uYm9va2luZ3MpO1xuICAgIGNhc2UgQk9PS0lOR19DQU5DRUxFRDoge1xuICAgICAgY29uc3QgY2xvbmVkQm9va2luZ3MgPSBfLmNsb25lRGVlcChzdGF0ZSk7XG4gICAgICBkZWxldGUgY2xvbmVkQm9va2luZ3NbYWN0aW9uLnVpZF1bYWN0aW9uLmV2ZW50SWRdO1xuICAgICAgaWYgKF8uc2l6ZShjbG9uZWRCb29raW5nc1thY3Rpb24udWlkXSkgPT09IDApIHtcbiAgICAgICAgZGVsZXRlIGNsb25lZEJvb2tpbmdzW2FjdGlvbi51aWRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsb25lZEJvb2tpbmdzO1xuICAgIH1cbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2Jvb2tpbmdzUmVkdWNlci5qcyIsImltcG9ydCB7IFNFVF9BVVRIX0RBVEEsIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhEYXRhUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX0FVVEhfREFUQTpcbiAgICAgIHJldHVybiB7IHVpZDogYWN0aW9uLnVpZCwgZW1haWw6IGFjdGlvbi5lbWFpbCwgcGhvdG9VUkw6IGFjdGlvbi5waG90b1VSTCwgaXNBZG1pbjogYWN0aW9uLmlzQWRtaW4gfTtcbiAgICBjYXNlIFNJR05fT1VUOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlZHV4L3JlZHVjZXJzL2F1dGhEYXRhUmVkdWNlci5qcyIsImltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgTkFWSUdBVEVfVE8sIFNJR05fT1VUIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IENvbnN0YW50cy5QQUdFUy5BVVRILnZhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2aWdhdGlvblJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIE5BVklHQVRFX1RPOlxuICAgICAgcmV0dXJuIGFjdGlvbi5wYWdlO1xuICAgIGNhc2UgU0lHTl9PVVQ6XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdXgvcmVkdWNlcnMvbmF2aWdhdGlvblJlZHVjZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlZHV4VGh1bms7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWR1eFRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=