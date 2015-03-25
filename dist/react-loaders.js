module.exports =
/******/ (function(modules) { // webpackBootstrap
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

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var React = __webpack_require__(1);

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
	  pacman: 5,
	  "ball-grid-beat": 9
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

	var Loader = exports.Loader = (function (_React$Component) {
	  function Loader() {
	    _classCallCheck(this, Loader);

	    this.propTypes = {
	      type: React.PropTypes.string,
	      active: React.PropTypes.bool
	    };

	    this.defaultProps = {
	      type: "ball-pulse",
	      active: true
	    };
	  }

	  _inherits(Loader, _React$Component);

	  _createClass(Loader, {
	    renderDiv: {
	      value: function renderDiv(n) {
	        return React.createElement("div", { key: n });
	      }
	    },
	    render: {
	      value: function render() {
	        var hidden = { display: !this.props.active ? "none" : "block" };
	        var nDivs = range(Types[this.props.type || this.defaultProps.type]);
	        return React.createElement(
	          "div",
	          { style: hidden, className: "loader " + (this.props.active ? "loader-active" : "") },
	          React.createElement(
	            "div",
	            { className: "loader-inner " + this.props.type },
	            nDivs.map(this.renderDiv)
	          )
	        );
	      }
	    }
	  }, {
	    removeType: {
	      value: function removeType(key) {
	        delete Types[key];
	      }
	    },
	    addType: {
	      value: function addType(key, nDivs) {
	        Types[key] = nDivs;
	      }
	    }
	  });

	  return Loader;
	})(React.Component);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ }
/******/ ]);