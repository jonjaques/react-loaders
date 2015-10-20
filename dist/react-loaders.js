(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("merge"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "merge", "classnames"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("merge"), require("classnames")) : factory(root["react"], root["merge"], root["classnames"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _merge = __webpack_require__(2);

	var _merge2 = _interopRequireDefault(_merge);

	var _classnames2 = __webpack_require__(3);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var Loader = (function (_Component) {
	  _inherits(Loader, _Component);

	  function Loader() {
	    _classCallCheck(this, Loader);

	    _get(Object.getPrototypeOf(Loader.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Loader, [{
	    key: 'renderDiv',
	    value: function renderDiv(n) {
	      return _react2['default'].createElement('div', { key: n });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var nDivs = range(Types[this.props.type]);
	      var classes = (0, _classnames3['default'])((_classnames = {
	        loader: true
	      }, _defineProperty(_classnames, 'loader-' + this.props.size, this.props.size !== 'md'), _defineProperty(_classnames, 'loader-active', this.props.active), _defineProperty(_classnames, 'loader-hidden', !this.props.active), _classnames), this.props.className);

	      return _react2['default'].createElement(
	        'div',
	        { className: classes },
	        _react2['default'].createElement(
	          'div',
	          { className: 'loader-inner ' + this.props.type },
	          nDivs.map(this.renderDiv)
	        )
	      );
	    }
	  }], [{
	    key: 'removeType',
	    value: function removeType(type) {
	      delete Types[key];
	    }
	  }, {
	    key: 'addType',
	    value: function addType(key, nDivs) {
	      return Types[key] = nDivs;
	    }
	  }, {
	    key: 'propTypes',
	    value: {
	      type: _react2['default'].PropTypes.string,
	      size: _react2['default'].PropTypes.string,
	      active: _react2['default'].PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      type: 'ball-pulse',
	      size: 'md',
	      active: true
	    },
	    enumerable: true
	  }]);

	  return Loader;
	})(_react.Component);

	exports.Loader = Loader;
	exports['default'] = Loader;
	var Types = {
	  "ball-pulse": 3,
	  "ball-grid-pulse": 9,
	  "ball-clip-rotate": 1,
	  "ball-clip-rotate-pulse": 2,
	  "square-spin": 1,
	  "ball-clip-rotate-multiple": 2,
	  "ball-pulse-rise": 5,
	  "ball-rotate": 1,
	  "cube-transition": 2,
	  "ball-zig-zag": 2,
	  "ball-zig-zag-deflect": 2,
	  "ball-triangle-path": 3,
	  "ball-scale": 1,
	  "line-scale": 5,
	  "line-scale-party": 4,
	  "ball-scale-multiple": 3,
	  "ball-pulse-sync": 3,
	  "ball-beat": 3,
	  "line-scale-pulse-out": 5,
	  "line-scale-pulse-out-rapid": 5,
	  "ball-scale-ripple": 1,
	  "ball-scale-ripple-multiple": 3,
	  "ball-spin-fade-loader": 8,
	  "line-spin-fade-loader": 8,
	  "triangle-skew-spin": 1,
	  "pacman": 5,
	  "ball-grid-beat": 9,
	  "semi-circle-spin": 1
	};

	exports.Types = Types;
	function range(x) {
	  var i = -1,
	      arr = [];
	  while (++i < x) {
	    arr.push(i);
	  }
	  return arr;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;