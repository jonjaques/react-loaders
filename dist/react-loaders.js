(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react/addons"));
	else if(typeof define === 'function' && define.amd)
		define(["react/addons"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react/addons")) : factory(root["react/addons"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var React = __webpack_require__(1);
	var PureRenderMixin = React.PureRenderMixin;

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

	var Loader = React.createClass({
	  displayName: "Loader",

	  mixins: [PureRenderMixin],

	  propTypes: {
	    type: React.PropTypes.string,
	    size: React.PropTypes.string,
	    active: React.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      type: "ball-pulse",
	      size: "md",
	      active: true
	    };
	  },

	  statics: {
	    removeType: function removeType(key) {
	      delete Types[key];
	    },

	    addType: function addType(key, nDivs) {
	      Types[key] = nDivs;
	    }
	  },

	  getLoaderClasses: function getLoaderClasses() {
	    var classes = "loader";
	    if (this.props.size !== "md") {
	      classes += " loader-" + this.props.size;
	    }
	    if (this.props.active) {
	      classes += " loader-active";
	    } else {
	      classes += " loader-hidden";
	    }
	    return classes;
	  },

	  renderDiv: function renderDiv(n) {
	    return React.createElement("div", { key: n });
	  },

	  render: function render() {
	    var nDivs = range(Types[this.props.type]);
	    return React.createElement(
	      "div",
	      { className: this.getLoaderClasses() },
	      React.createElement(
	        "div",
	        { className: "loader-inner " + this.props.type },
	        nDivs.map(this.renderDiv)
	      )
	    );
	  }

	});
	exports.Loader = Loader;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;