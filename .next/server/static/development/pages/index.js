module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Projetos\\Next.JsApi\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Index = ({
  dados
}) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, ".col")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, ".col"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, ".col"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, ".col"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, ".col")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  xs: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, ".col-3"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  xs: "auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, ".col-auto - variable width content"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  xs: "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, ".col-3")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  xs: "6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, ".col-6"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  xs: "6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, ".col-6")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  xs: "6",
  sm: "4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, ".col-6 .col-sm-4"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  xs: "6",
  sm: "4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, ".col-6 .col-sm-4"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  sm: "4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, ".col-sm-4")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  sm: {
    size: 6,
    order: 2,
    offset: 1
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, ".col-sm-6 .order-sm-2 .offset-sm-1")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  sm: "12",
  md: {
    size: 6,
    offset: 3
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, ".col-sm-12 .col-md-6 .offset-md-3")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  sm: {
    size: 'auto',
    offset: 1
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, ".col-sm-auto .offset-sm-1"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
  sm: {
    size: 'auto',
    offset: 1
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, ".col-sm-auto .offset-sm-1")), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "Palestrantes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
  color: "primary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "This is a primary alert \u2014 check it out!"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
  color: "danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Danger!"), __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, dados.map(palestrante => __jsx("li", {
  key: palestrante.id_palestrante,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, palestrante.nome_palestrante), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, palestrante.cargo_palestrante)))));

Index.getInitialProps = async () => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.padraoeditorial.com.br/conarec/api/palestrantes'); // console.log(response);

  return {
    dados: response.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projetos\Next.JsApi\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map