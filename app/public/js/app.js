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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _history = __webpack_require__(3);
	
	var _reactDom = __webpack_require__(4);
	
	var _routes = __webpack_require__(5);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	(0, _reactDom.render)(_react2['default'].createElement(
	    _reactRouter.Router,
	    { history: (0, _history.createHistory)() },
	    _routes2['default']
	), document.querySelectorAll('[data-ui-role="content"]')[0]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = History;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _componentsApp = __webpack_require__(6);
	
	var _componentsApp2 = _interopRequireDefault(_componentsApp);
	
	var _componentsCommonNoMatch = __webpack_require__(8);
	
	var _componentsCommonNoMatch2 = _interopRequireDefault(_componentsCommonNoMatch);
	
	var _componentsDashboardDashboard = __webpack_require__(9);
	
	var _componentsDashboardDashboard2 = _interopRequireDefault(_componentsDashboardDashboard);
	
	var _componentsGraphGraph = __webpack_require__(10);
	
	var _componentsGraphGraph2 = _interopRequireDefault(_componentsGraphGraph);
	
	exports['default'] = _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/', component: _componentsApp2['default'] },
	    _react2['default'].createElement(
	        _reactRouter.Route,
	        { component: _componentsDashboardDashboard2['default'] },
	        _react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsGraphGraph2['default'] })
	    ),
	    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsCommonNoMatch2['default'] })
	);
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mainHeader = __webpack_require__(7);
	
	var _mainHeader2 = _interopRequireDefault(_mainHeader);
	
	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_mainHeader2['default'], { root: this.props.route.path }),
	                this.props.children
	            );
	        }
	    }]);
	
	    return App;
	})(_react2['default'].Component);
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'header',
	                { className: 'app-header' },
	                _react2['default'].createElement(
	                    'h1',
	                    { className: 'title' },
	                    _react2['default'].createElement(
	                        _reactRouter.IndexLink,
	                        { to: this.props.root },
	                        'WebScraper'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Header;
	})(_react2['default'].Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NoMatch = (function (_React$Component) {
	    _inherits(NoMatch, _React$Component);
	
	    function NoMatch() {
	        _classCallCheck(this, NoMatch);
	
	        _get(Object.getPrototypeOf(NoMatch.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(NoMatch, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "section",
	                { className: "app-content" },
	                _react2["default"].createElement(
	                    "header",
	                    { className: "section-header" },
	                    _react2["default"].createElement(
	                        "h3",
	                        { className: "title" },
	                        "Not Found"
	                    )
	                )
	            );
	        }
	    }]);
	
	    return NoMatch;
	})(_react2["default"].Component);
	
	exports["default"] = NoMatch;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Dashboard = (function (_React$Component) {
	    _inherits(Dashboard, _React$Component);
	
	    function Dashboard() {
	        _classCallCheck(this, Dashboard);
	
	        _get(Object.getPrototypeOf(Dashboard.prototype), "constructor", this).apply(this, arguments);
	    }
	
	    _createClass(Dashboard, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "main",
	                { className: "app-content dashboard" },
	                this.props.children
	            );
	        }
	    }]);
	
	    return Dashboard;
	})(_react2["default"].Component);
	
	exports["default"] = Dashboard;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	//import $ from 'jquery';
	//import Highcharts from 'highcharts';
	//import addFunnel from 'highcharts/modules/funnel';
	var urls = '/getdatagraph';
	
	var Graph = (function (_React$Component) {
	    _inherits(Graph, _React$Component);
	
	    function Graph(props) {
	        _classCallCheck(this, Graph);
	
	        _get(Object.getPrototypeOf(Graph.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            items: []
	        };
	    }
	
	    _createClass(Graph, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'section',
	                { className: '' },
	                _react2['default'].createElement(
	                    'header',
	                    { className: 'section-header' },
	                    _react2['default'].createElement(
	                        'h3',
	                        { className: 'title' },
	                        ' Nasdaq Graph '
	                    )
	                ),
	                _react2['default'].createElement(
	                    'section',
	                    { className: 'section-content' },
	                    _react2['default'].createElement(
	                        'div',
	                        { id: 'container' },
	                        ' '
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;
	
	            fetch('/getdatagraph').then(function (response) {
	                return response.json();
	            }).then(function (data) {
	                _this.setState({
	                    items: data.items
	                });
	            })['catch'](function (err) {
	                throw new Error(err);
	            });
	            $.getJSON(urls, function (data) {
	                $('#container').highcharts('StockChart', {
	                    rangeSelector: {
	                        selected: 1
	                    },
	                    title: {
	                        text: 'Nasdaq Stock'
	                    },
	                    series: [{
	                        name: 'Nasdaq',
	                        data: data,
	                        tooltip: {
	                            valueDecimals: 2
	                        }
	                    }]
	                });
	            });
	            setInterval(function () {
	                $.getJSON(urls, function (data) {
	                    $('#container').highcharts('StockChart', {
	                        rangeSelector: {
	                            selected: 1
	                        },
	                        title: {
	                            text: 'Nasdaq Stock'
	                        },
	                        series: [{
	                            name: 'Nasdaq',
	                            data: data,
	                            tooltip: {
	                                valueDecimals: 2
	                            }
	                        }]
	                    });
	                });
	            }, 10000);
	        }
	    }]);
	
	    return Graph;
	})(_react2['default'].Component);
	
	exports['default'] = Graph;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RhOWYwNTY2OTU0YWIxMzA5YjQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0Um91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiSGlzdG9yeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vYXBwL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpbi9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY29tbW9uL05vTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9ncmFwaC9HcmFwaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7a0NDdENrQixDQUFPOzs7O3dDQUNKLENBQWM7O29DQUNQLENBQVM7O3FDQUNoQixDQUFXOzttQ0FFYixDQUFVOzs7O0FBRTdCLHVCQUNJOztPQUFRLE9BQU8sRUFBRSw2QkFBZ0I7O0VBRXhCLEVBQ1YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQzs7Ozs7O0FDWDVELHdCOzs7Ozs7QUNBQSw4Qjs7Ozs7O0FDQUEs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QUksRUFBRSxjQUFjOzBCQUN2QjtBQUNELCtCQUFNLEVBQUUsQ0FBRTtBQUNOLGlDQUFJLEVBQUUsUUFBUTtBQUNkLGlDQUFJLEVBQUUsSUFBSTtBQUNWLG9DQUFPLEVBQUU7QUFDTCw4Q0FBYSxFQUFFLENBQUM7OEJBQ25COzBCQUNKLENBQUU7c0JBQ04sQ0FBQyxDQUFDO2tCQUNOLENBQUMsQ0FBQztjQUNKLEVBQUUsS0FBSyxDQUFDLENBQUM7VUFFWDs7O1lBbEVnQixLQUFLO0lBQVMsbUJBQU0sU0FBUzs7c0JBQTdCLEtBQUsiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2pzL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgM2RhOWYwNTY2OTU0YWIxMzA5YjRcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQge2NyZWF0ZUhpc3Rvcnl9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuXG5yZW5kZXIoKFxuICAgIDxSb3V0ZXIgaGlzdG9yeT17Y3JlYXRlSGlzdG9yeSgpfT5cbiAgICAgICAge3JvdXRlc31cbiAgICA8L1JvdXRlcj5cbiksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXVpLXJvbGU9XCJjb250ZW50XCJdJylbMF0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY2xpZW50LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RcIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RSb3V0ZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0Um91dGVyXCJcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIkhpc3RvcnlcIlxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJbmRleFJvdXRlLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcbmltcG9ydCBOb01hdGNoIGZyb20gJy4vY29tcG9uZW50cy9jb21tb24vTm9NYXRjaCc7XG5cbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmQnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vY29tcG9uZW50cy9ncmFwaC9HcmFwaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e0Rhc2hib2FyZH0+XG4gICAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0dyYXBofS8+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm9NYXRjaH0vPlxuICAgIDwvUm91dGU+XG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvcm91dGVzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL21haW4vSGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgcm9vdD17dGhpcy5wcm9wcy5yb3V0ZS5wYXRofS8+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL2FwcC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0luZGV4TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImFwcC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEluZGV4TGluayB0bz17dGhpcy5wcm9wcy5yb290fT5XZWJTY3JhcGVyPC9JbmRleExpbms+XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvbWFpbi9IZWFkZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb01hdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhcHAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+Tm90IEZvdW5kPC9oMz5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL2NvbW1vbi9Ob01hdGNoLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJhcHAtY29udGVudCBkYXNoYm9hcmRcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoYm9hcmQuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy9pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy9pbXBvcnQgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzJztcbi8vaW1wb3J0IGFkZEZ1bm5lbCBmcm9tICdoaWdoY2hhcnRzL21vZHVsZXMvZnVubmVsJztcbmxldCB1cmxzID0gJy9nZXRkYXRhZ3JhcGgnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICggPHNlY3Rpb24gY2xhc3NOYW1lID0gXCJcIiA+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZSA9IFwic2VjdGlvbi1oZWFkZXJcIiA+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lID0gXCJ0aXRsZVwiID4gTmFzZGFxIEdyYXBoIDwvaDM+XG4gICAgICAgICAgICA8L2hlYWRlciA+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWUgPSBcInNlY3Rpb24tY29udGVudFwiID5cbiAgICAgICAgICAgIDxkaXYgaWQgPSBcImNvbnRhaW5lclwiPiA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbiA+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJy9nZXRkYXRhZ3JhcGgnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQuZ2V0SlNPTih1cmxzLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgJCgnI2NvbnRhaW5lcicpLmhpZ2hjaGFydHMoJ1N0b2NrQ2hhcnQnLCB7XG4gICAgICAgICAgICAgIHJhbmdlU2VsZWN0b3I6IHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAxXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiAnTmFzZGFxIFN0b2NrJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZXJpZXM6IFsge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ05hc2RhcScsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRGVjaW1hbHM6IDJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBdXG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICQuZ2V0SlNPTih1cmxzLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAkKCcjY29udGFpbmVyJykuaGlnaGNoYXJ0cygnU3RvY2tDaGFydCcsIHtcbiAgICAgICAgICAgICAgICByYW5nZVNlbGVjdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTmFzZGFxIFN0b2NrJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VyaWVzOiBbIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05hc2RhcScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRGVjaW1hbHM6IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMTAwMDApO1xuXG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY29tcG9uZW50cy9ncmFwaC9HcmFwaC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=