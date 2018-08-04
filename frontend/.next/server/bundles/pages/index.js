module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return logout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__("./config/api.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var login =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(user) {
    var resp;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].post("/sessions", user);

          case 3:
            resp = _context.sent;
            return _context.abrupt("return", resp);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function login(_x) {
    return _ref.apply(this, arguments);
  };
}();
var authenticateUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(req) {
    var resp;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].fetch("/sessions/me", req);

          case 3:
            resp = _context2.sent;
            return _context2.abrupt("return", resp);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function authenticateUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var logout =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(id) {
    var resp;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].delete("/sessions/".concat(id));

          case 3:
            resp = _context3.sent;
            return _context3.abrupt("return", resp);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 7]]);
  }));

  return function logout(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./actions/like.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toggleLike; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__("./config/api.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var toggleLike =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(topic_id) {
    var resp;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].post("/topics/".concat(topic_id, "/likes"));

          case 3:
            resp = _context.sent;
            return _context.abrupt("return", resp);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function toggleLike(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./actions/topic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchTopics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return editTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateTopic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__("./config/api.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var fetchTopics =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(req, params) {
    var resp;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].fetch("/topics", req, params);

          case 3:
            resp = _context.sent;
            return _context.abrupt("return", resp);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function fetchTopics(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createTopic =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(topic) {
    var resp;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].post("/topics", topic);

          case 3:
            resp = _context2.sent;
            return _context2.abrupt("return", resp);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function createTopic(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var editTopic =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(req, id) {
    var resp;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].fetch("/topics/".concat(id, "/edit"), req);

          case 3:
            resp = _context3.sent;
            return _context3.abrupt("return", resp);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 7]]);
  }));

  return function editTopic(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var updateTopic =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(topic, id) {
    var resp;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].put("/topics/".concat(id), topic);

          case 3:
            resp = _context4.sent;
            return _context4.abrupt("return", resp);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", _context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 7]]);
  }));

  return function updateTopic(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./actions/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__("./config/api.js");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var createUser =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(user) {
    var resp;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__config_api__["a" /* default */].post("/users", user);

          case 3:
            resp = _context.sent;
            return _context.abrupt("return", resp);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function createUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./components/auth/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_auth__ = __webpack_require__("./containers/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts__ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_formik__ = __webpack_require__("formik");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_formik___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_formik__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layouts_fields__ = __webpack_require__("./components/layouts/fields.js");

var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/auth/login.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var ModalBody = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_6__layouts__["n" /* base */])('div')).withConfig({
  displayName: "login__ModalBody",
  componentId: "s1c595wi-0"
})(["margin:1rem 1rem 3rem 1rem;"]);
var ModalClose = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_6__layouts__["n" /* base */])('div')).withConfig({
  displayName: "login__ModalClose",
  componentId: "s1c595wi-1"
})(["margin-left:auto;padding:10px;cursor:pointer;"]);

var Login = function Login(_ref) {
  var toggleModal = _ref.toggleModal,
      forwardRoute = _ref.forwardRoute;

  var handleClick = function handleClick() {
    toggleModal();
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts__["c" /* Fixed */], {
    px: 3,
    top: 0,
    right: 0,
    bg: "rgba(0, 0, 0, 0.5)",
    bottom: 0,
    left: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_unstated__["Subscribe"], {
    to: [__WEBPACK_IMPORTED_MODULE_5__containers_auth__["a" /* default */]],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, function (authStore) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts__["k" /* Modal */], {
      width: [1, 2 / 3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts__["d" /* Flex */], {
      width: 2 / 8,
      bg: "#f9f9f9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts__["d" /* Flex */], {
      width: 6 / 8,
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ModalClose, {
      onClick: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts__["e" /* Icon */], {
      fontSize: "20px",
      color: "grey",
      className: "fas fa-times",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ModalBody, {
      width: ["auto", "auto", 2 / 3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts__["f" /* Image */], {
      width: 60,
      src: "/static/intermates_nav.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts__["m" /* Text */], {
      is: "h1",
      fontSize: 25,
      color: "#222",
      my: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }, "Sign In"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_formik__["Formik"], {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit:
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(values, _ref2) {
          var setSubmitting, response;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setSubmitting = _ref2.setSubmitting;
                  _context.next = 3;
                  return authStore.login(values);

                case 3:
                  response = _context.sent;

                  if (response.status !== 200) {
                    console.log("Something went wrong");
                    setSubmitting(false);
                  } else {
                    if (forwardRoute) {
                      toggleModal();
                      __WEBPACK_IMPORTED_MODULE_4__routes__["Router"].pushRoute(forwardRoute);
                    } else {
                      toggleModal();
                      __WEBPACK_IMPORTED_MODULE_4__routes__["Router"].pushRoute('/');
                    }
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }(),
      render: function render(_ref4) {
        var values = _ref4.values,
            isSubmitting = _ref4.isSubmitting,
            handleSubmit = _ref4.handleSubmit,
            dirty = _ref4.dirty;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_formik__["Form"], {
          onSubmit: handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_formik__["Field"], {
          name: "email",
          height: ["35", "40"],
          component: __WEBPACK_IMPORTED_MODULE_8__layouts_fields__["b" /* InputField */],
          autoComplete: "off",
          placeholder: "Email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_formik__["Field"], {
          name: "password",
          height: ["35", "40"],
          type: "password",
          autoComplete: "off",
          component: __WEBPACK_IMPORTED_MODULE_8__layouts_fields__["b" /* InputField */],
          placeholder: "Password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts__["a" /* Button */], {
          children: isSubmitting ? 'loading...' : 'SIGN IN',
          type: "submit",
          disabled: isSubmitting || !dirty,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),

/***/ "./components/layouts/editor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEditor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js__ = __webpack_require__("draft-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_draft_js__);
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/editor.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "editor__Wrapper",
  componentId: "s1l0osij-0"
})(["background:#FFF;font-family:\"Lato\",sans-serif;font-size:14px;"]);
var Content = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2____["b" /* EditorWrapper */]).withConfig({
  displayName: "editor__Content",
  componentId: "s1l0osij-1"
})(["border-top:1px solid #ddd;cursor:text;font-size:15px;padding:10px 0;min-height:100px;.DraftEditor-editorContainer{margin-top:5px;}"]);
var Controls = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "editor__Controls",
  componentId: "s1l0osij-2"
})(["font-family:\"Lato\",sans-serif;font-size:14px;margin-bottom:5px;user-select:none;"]);
var Buttons = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('button').withConfig({
  displayName: "editor__Buttons",
  componentId: "s1l0osij-3"
})(["box-shadow:", ";color:", ";cursor:pointer;margin-right:12px;padding:5px;display:inline-block;border:1px solid #F1F1F1;&:hover{box-shadow:1px 1px 0px #BFBDBD;}"], function (props) {
  return props.active ? "1px 1px 0px #BFBDBD" : "none";
}, function (props) {
  return props.active ? "black" : "#999";
});

var TextEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextEditor, _React$Component);

  function TextEditor() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, TextEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = TextEditor.__proto__ || Object.getPrototypeOf(TextEditor)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(editorState) {
        _this.props.onChange(_this.props.name, editorState);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onBlur", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.onBlur(_this.props.name, true);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "focus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.refs.editor.focus();
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleKeyCommand", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(command) {
        var editorState = _this.props.editorState;
        var newState = __WEBPACK_IMPORTED_MODULE_3_draft_js__["RichUtils"].handleKeyCommand(editorState, command);

        if (newState) {
          _this.onChange(newState);

          return true;
        }

        return false;
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onTab", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var maxDepth = 4;

        _this.onChange(__WEBPACK_IMPORTED_MODULE_3_draft_js__["RichUtils"].onTab(e, _this.props.editorState, maxDepth));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleBlockType", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(blockType) {
        _this.onChange(__WEBPACK_IMPORTED_MODULE_3_draft_js__["RichUtils"].toggleBlockType(_this.props.editorState, blockType));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleInlineStyle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(inlineStyle) {
        _this.onChange(__WEBPACK_IMPORTED_MODULE_3_draft_js__["RichUtils"].toggleInlineStyle(_this.props.editorState, inlineStyle));
      }
    }), _temp));
  }

  _createClass(TextEditor, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          editorState = _props.editorState,
          error = _props.error,
          onBlur = _props.onBlur;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
        "data-offset-key": "editor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BlockStyleControls, {
        editorState: editorState,
        onToggle: this.toggleBlockType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InlineStyleControls, {
        editorState: editorState,
        onToggle: this.toggleInlineStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Content, {
        onClick: this.focus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_draft_js__["Editor"], {
        blockStyleFn: getBlockStyle,
        customStyleMap: styleMap,
        editorState: editorState,
        placeholder: this.props.placeholder,
        editorKey: "editor",
        ref: "editor",
        spellCheck: true,
        handleKeyCommand: this.handleKeyCommand,
        onChange: this.onChange,
        onBlur: this.onBlur,
        onTab: this.onTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })));
    }
  }]);

  return TextEditor;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component); // Custom overrides for "code" style.



var styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'header-one':
      return 'header-one';

    case 'header-two':
      return 'header-two';

    case 'header-three':
      return 'header-three';

    case 'header-four':
      return 'header-four';

    case 'header-five':
      return 'header-five';

    case 'header-six':
      return 'header-six';

    case 'blockquote':
      return 'blockquote';

    case 'code-block':
      return 'codeblock';

    case 'ordered-list-item':
      return 'ordered-list-item';

    case 'unordered-list-item':
      return 'unordered-list-item';

    default:
      return null;
  }
}

var ToolbarButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ToolbarButton, _React$Component2);

  function ToolbarButton() {
    var _this2;

    _classCallCheck(this, ToolbarButton);

    _this2 = _possibleConstructorReturn(this, (ToolbarButton.__proto__ || Object.getPrototypeOf(ToolbarButton)).call(this));

    _this2.onToggle = function (e) {
      e.preventDefault();

      _this2.props.onToggle(_this2.props.style);
    };

    return _this2;
  }

  _createClass(ToolbarButton, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Buttons, {
        type: "button",
        active: this.props.active,
        onMouseDown: this.onToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, this.props.label);
    }
  }]);

  return ToolbarButton;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var BLOCK_TYPES = [{
  label: 'H1',
  style: 'header-one'
}, {
  label: 'H2',
  style: 'header-two'
}, {
  label: 'H3',
  style: 'header-three'
}, {
  label: 'H4',
  style: 'header-four'
}, {
  label: 'H5',
  style: 'header-five'
}, {
  label: 'H6',
  style: 'header-six'
}, {
  label: 'Blockquote',
  style: 'blockquote'
}, {
  label: 'UL',
  style: 'unordered-list-item'
}, {
  label: 'OL',
  style: 'ordered-list-item'
}, {
  label: 'Code Block',
  style: 'code-block'
}];

var BlockStyleControls = function BlockStyleControls(props) {
  var editorState = props.editorState;
  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Controls, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    }
  }, BLOCK_TYPES.map(function (type) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ToolbarButton, {
      key: type.label,
      active: type.style === blockType,
      label: type.label,
      onToggle: props.onToggle,
      style: type.style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      }
    });
  }));
};

var INLINE_STYLES = [{
  label: 'Bold',
  style: 'BOLD'
}, {
  label: 'Italic',
  style: 'ITALIC'
}, {
  label: 'Underline',
  style: 'UNDERLINE'
}, {
  label: 'Monospace',
  style: 'CODE'
}];

var InlineStyleControls = function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Controls, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    }
  }, INLINE_STYLES.map(function (type) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ToolbarButton, {
      key: type.label,
      active: currentStyle.has(type.style),
      label: type.label,
      onToggle: props.onToggle,
      style: type.style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      }
    });
  }));
};

/***/ }),

/***/ "./components/layouts/fields.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InputField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InputSelectField; });
/* unused harmony export SelectField */
/* unused harmony export EditorField */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_formik__ = __webpack_require__("formik");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_formik___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_formik__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_datepicker__ = __webpack_require__("react-datepicker");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_datepicker_dist_react_datepicker_css__ = __webpack_require__("./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_datepicker_dist_react_datepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_datepicker_dist_react_datepicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__select__ = __webpack_require__("./components/layouts/select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editor__ = __webpack_require__("./components/layouts/editor.js");
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/fields.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }










var DateSelect = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(__WEBPACK_IMPORTED_MODULE_5_react_datepicker___default.a).withConfig({
  displayName: "fields__DateSelect",
  componentId: "s4whb5e-0"
})(["", ""], __WEBPACK_IMPORTED_MODULE_4____["o" /* inputStyles */]);
var InputField = function InputField(_ref) {
  var _ref$field = _ref.field,
      name = _ref$field.name,
      field = _objectWithoutProperties(_ref$field, ["name"]),
      _ref$form = _ref.form,
      touched = _ref$form.touched,
      errors = _ref$form.errors,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  var error = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(errors, name);
  var touch = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(touched, name);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["j" /* InputWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["g" /* Input */], _extends({
    error: touch && error && error,
    name: name
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  })), touch && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["h" /* InputError */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, error));
};
var InputSelectField = function InputSelectField(_ref2) {
  var _ref2$field = _ref2.field,
      name = _ref2$field.name,
      field = _objectWithoutProperties(_ref2$field, ["name"]),
      _ref2$form = _ref2.form,
      touched = _ref2$form.touched,
      errors = _ref2$form.errors,
      props = _objectWithoutProperties(_ref2, ["field", "form"]);

  var error = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(errors, name);
  var touch = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(touched, name);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["j" /* InputWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["i" /* InputSelect */], _extends({
    error: touch && error && error,
    name: name,
    value: field.value
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, props.placeholder), props.options.map(function (option) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
      key: option.type,
      value: option.type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }, option.title);
  })), touch && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["h" /* InputError */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, error));
};
var SelectField = function SelectField(_ref3) {
  var _ref3$field = _ref3.field,
      name = _ref3$field.name,
      field = _objectWithoutProperties(_ref3$field, ["name"]),
      _ref3$form = _ref3.form,
      touched = _ref3$form.touched,
      errors = _ref3$form.errors,
      props = _objectWithoutProperties(_ref3, ["field", "form"]);

  var error = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(errors, name);
  var touch = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(touched, name);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["j" /* InputWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__select__["a" /* default */], _extends({
    error: !!(touch && error),
    name: name
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  })), touch && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["h" /* InputError */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, error));
};
var EditorField = function EditorField(_ref4) {
  var _ref4$field = _ref4.field,
      name = _ref4$field.name,
      field = _objectWithoutProperties(_ref4$field, ["name"]),
      _ref4$form = _ref4.form,
      touched = _ref4$form.touched,
      errors = _ref4$form.errors,
      props = _objectWithoutProperties(_ref4, ["field", "form"]);

  var error = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(errors, name);
  var touch = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(touched, name);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["j" /* InputWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__editor__["a" /* default */], _extends({
    error: !!(touch && error),
    name: name
  }, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  })), touch && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["h" /* InputError */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, error));
};
var DateField = function DateField(_ref5) {
  var _ref5$field = _ref5.field,
      name = _ref5$field.name,
      field = _objectWithoutProperties(_ref5$field, ["name"]),
      _ref5$form = _ref5.form,
      touched = _ref5$form.touched,
      errors = _ref5$form.errors,
      props = _objectWithoutProperties(_ref5, ["field", "form"]);

  var error = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(errors, name);
  var touch = Object(__WEBPACK_IMPORTED_MODULE_2_formik__["getIn"])(touched, name);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["j" /* InputWrapper */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DateSelect, _extends({
    error: !!(touch && error),
    name: name,
    onChange: field.onChange,
    onBlur: field.onBlur
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  })), touch && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4____["h" /* InputError */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, error));
};

/***/ }),

/***/ "./components/layouts/header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__link__ = __webpack_require__("./components/layouts/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_auth_login__ = __webpack_require__("./components/auth/login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_users_user_new__ = __webpack_require__("./components/users/user_new.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_select__ = __webpack_require__("./components/layouts/header/nav_select.js");

var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/header/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Navigation = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.header.withConfig({
  displayName: "header__Navigation",
  componentId: "s2z310d-0"
})(["grid-area:header;@media (min-width:40em){grid-column:1 / span 3;}"]);
var Menu = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_3____["n" /* base */])('ul')).withConfig({
  displayName: "header__Menu",
  componentId: "s2z310d-1"
})(["list-style:none;padding-right:0;padding-left:0;display:flex;flex-direction:column;margin:0;border-bottom:1px solid rgb(237,239,241);background-color:rgb(255,255,255);@media (min-width:40em){flex-direction:row;align-items:center;}"]);
var SubItem = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_3____["n" /* base */])('li')).withConfig({
  displayName: "header__SubItem",
  componentId: "s2z310d-2"
})(["@media (max-width:40em){padding:8px 0;border-bottom:none;&:last-child{padding-bottom:0;}}width:100%;padding:0.7rem;color:#222;white-space:nowrap;font-size:14px;font-weight:800;cursor:pointer;border-bottom:1px solid rgba(0,0,0,.15);background-color:transparent;&:last-child{border-bottom:none;}"]);
var InfoMenu = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_3____["n" /* base */])('div')).withConfig({
  displayName: "header__InfoMenu",
  componentId: "s2z310d-3"
})([""]);
var Collapsible = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_3____["n" /* base */])('ul')).withConfig({
  displayName: "header__Collapsible",
  componentId: "s2z310d-4"
})(["list-style:none;padding-right:0;padding-left:0;@media (max-width:40em){display:", ";border-top:1px solid rgb(237,239,241);padding:0;}@media (min-width:40em){display:contents;}"], function (props) {
  return props.display;
});
var Item = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_3____["n" /* base */])('li')).withConfig({
  displayName: "header__Item",
  componentId: "s2z310d-5"
})(["font-weight:800;padding:0 16px;@media (max-width:40em){padding:8px 16px;}"]);
var InputHeader = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.input.withConfig({
  displayName: "header__InputHeader",
  componentId: "s2z310d-6"
})(["box-shadow:none;color:rgb(28,28,28);background-color:rgb(255,255,255);border-width:initial;border-style:none;font-size:14px;outline:none;width:180px;"]);
var Toggle = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "header__Toggle",
  componentId: "s2z310d-7"
})(["margin-left:auto;margin-top:5px;float:right;@media (min-width:600px){display:none;}"]);

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "displayMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prevState) {
          return {
            showMenu: !prevState.showMenu
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleLoginModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(modal) {
        var toggleModal = _this.props.uiStore.toggleModal;
        toggleModal(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_auth_login__["a" /* default */], {
          toggleModal: toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleUserNewModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(modal) {
        var toggleModal = _this.props.uiStore.toggleModal;
        toggleModal(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_users_user_new__["a" /* default */], {
          toggleModal: toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "logout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var _this$props$authStore, currentUser, logout, resp;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$props$authStore = _this.props.authStore, currentUser = _this$props$authStore.state.currentUser, logout = _this$props$authStore.logout;
                  _context.next = 3;
                  return logout(currentUser.id);

                case 3:
                  resp = _context.sent;

                  if (resp.status !== 204) {
                    console.log("Something went wrong");
                  } else {
                    __WEBPACK_IMPORTED_MODULE_4__routes__["Router"].pushRoute("/");
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "isAuthenticated", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var state = _this.props.authStore.state;

        if (!state.auth) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["a" /* Button */], {
            width: "125px",
            onClick: _this.toggleLoginModal,
            children: "LOG IN",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["a" /* Button */], {
            width: "125px",
            ml: 2,
            onClick: _this.toggleUserNewModal,
            children: "REGISTER",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            }
          }));
        } else {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
            color: "grey",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["e" /* Icon */], {
            mr: 2,
            color: "primary",
            className: "fas fa-user",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            }
          }), "Hello, ", state.currentUser.email, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__nav_select__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SubItem, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["e" /* Icon */], {
            mr: 2,
            color: "primary",
            className: "fas fa-cog",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            }
          }), "Configuration"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SubItem, {
            onClick: _this.logout,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["e" /* Icon */], {
            mr: 2,
            color: "primary",
            className: "fas fa-sign-out-alt",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            }
          }), "Sign Out")));
        }
      }
    });
    _this.state = {
      showMenu: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var showMenu = this.state.showMenu;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Navigation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Menu, {
        fontSize: 1,
        py: [0, 2],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Toggle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, !showMenu ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["e" /* Icon */], {
        fontSize: "20px",
        color: "grey",
        onClick: this.displayMenu,
        className: "fas fa-bars",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["e" /* Icon */], {
        fontSize: "20px",
        color: "grey",
        onClick: this.displayMenu,
        className: "fas fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__link__["a" /* default */], {
        route: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["f" /* Image */], {
        width: [80, 100],
        src: "/static/intermates_nav.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Collapsible, {
        display: showMenu ? "block" : "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["e" /* Icon */], {
        mr: 2,
        color: "primary",
        className: "fas fa-fire",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }), "Popular"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Item, {
        mr: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["e" /* Icon */], {
        mr: 2,
        color: "primary",
        className: "fas fa-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(InputHeader, {
        placeholder: "Find a discussion or a user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      })), this.isAuthenticated())), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(InfoMenu, {
        p: 2,
        bg: "#FFF",
        borderBottom: "1px solid #DDD",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3____["m" /* Text */], {
        mx: [1, 1, 4],
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "Half of the emotion is already cleared out. Check and see how is this suppose to change.")));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/layouts/header/nav_select.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__("./components/layouts/index.js");
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/header/nav_select.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var NavSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavSelect, _React$Component);

  function NavSelect(props) {
    var _this;

    _classCallCheck(this, NavSelect);

    _this = _possibleConstructorReturn(this, (NavSelect.__proto__ || Object.getPrototypeOf(NavSelect)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "displayMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.selectWrapper && !_this.state.toggleMenu) {
          document.addEventListener('click', _this.handleOutsideClick, false);
        } else {
          document.removeEventListener('click', _this.handleOutsideClick, false);
        }

        _this.setState(function (prevState) {
          return {
            toggleMenu: !prevState.toggleMenu
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleOutsideClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        if (_this.selectWrapper.contains(e.target)) {
          return;
        }

        _this.displayMenu();
      }
    });
    _this.state = {
      toggleMenu: false
    };

    _this.setSelectWrapper = function (el) {
      return _this.selectWrapper = el;
    };

    return _this;
  }

  _createClass(NavSelect, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var toggleMenu = this.state.toggleMenu;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1____["e" /* Icon */], {
        ml: 2,
        onClick: this.displayMenu,
        color: "primary",
        className: "fas fa-chevron-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1____["l" /* SubMenu */], {
        innerRef: this.setSelectWrapper,
        display: toggleMenu ? "block" : "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, children));
    }
  }]);

  return NavSelect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (NavSelect);

/***/ }),

/***/ "./components/layouts/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__themes__ = __webpack_require__("./themes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header__ = __webpack_require__("./components/layouts/header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_ui__ = __webpack_require__("./containers/ui.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_auth__ = __webpack_require__("./containers/auth.js");
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/home.js";










var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div.withConfig({
  displayName: "home__Wrapper",
  componentId: "s1c2be42-0"
})(["min-height:100vh;@media (min-width:40em){display:grid;grid-template-areas:\"header sidebar\" \"content sidebar\" \"footer sidebar\";grid-template-rows:auto 1fr 50px;grid-template-columns:1fr 200px;}"]);
var Aside = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.aside.withConfig({
  displayName: "home__Aside",
  componentId: "s1c2be42-1"
})(["grid-area:sidebar;background:linear-gradient(to right,#ffb347,#ffcc33);opacity:0.8;"]);
var Main = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.main.withConfig({
  displayName: "home__Main",
  componentId: "s1c2be42-2"
})(["grid-area:content;@media (min-width:40em){grid-column:1 / span 3;}"]);
var Footer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.footer.withConfig({
  displayName: "home__Footer",
  componentId: "s1c2be42-3"
})(["grid-area:footer;text-align:center;background:#878a8c;color:#FFF;padding:10px;@media (min-width:40em){grid-column:1 / span 3;}"]);

__WEBPACK_IMPORTED_MODULE_5__routes__["Router"].onRouteChangeStart = function (url) {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_5__routes__["Router"].onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_5__routes__["Router"].onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

var Home = function Home(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_styled_components__["ThemeProvider"], {
    theme: __WEBPACK_IMPORTED_MODULE_6__themes__["a" /* default */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_unstated__["Subscribe"], {
    to: [__WEBPACK_IMPORTED_MODULE_8__containers_ui__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__containers_auth__["a" /* default */]],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, function (uiStore, authStore) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__header__["a" /* default */], {
      authStore: authStore,
      uiStore: uiStore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Main, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      }
    }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Footer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    }, "INTERMATES"), uiStore.state.modal.content);
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "./components/layouts/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Fixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return inputStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return InputSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return InputError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SubMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditorWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_omit__ = __webpack_require__("lodash/omit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_omit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_omit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clean_tag__ = __webpack_require__("clean-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clean_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clean_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_system__ = __webpack_require__("styled-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_system__);





var base = function base(tag) {
  var omitProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_clean_tag___default.a[tag], __WEBPACK_IMPORTED_MODULE_2_lodash_omit___default()(props, omitProps));
  }).withConfig({
    displayName: "layouts",
    componentId: "s1mdn93l-0"
  })(["", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["space"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["width"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["height"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["fontSize"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["color"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["flexWrap"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["flexDirection"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["alignItems"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["justifyContent"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["fontWeight"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["order"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["top"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["right"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["left"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["bottom"], __WEBPACK_IMPORTED_MODULE_4_styled_system__["borders"]);
};
var Flex = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('div')).withConfig({
  displayName: "layouts__Flex",
  componentId: "s1mdn93l-1"
})(["box-sizing:border-box;display:flex;"]);
var Icon = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('i')).withConfig({
  displayName: "layouts__Icon",
  componentId: "s1mdn93l-2"
})([""]);
var Text = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('div')).withConfig({
  displayName: "layouts__Text",
  componentId: "s1mdn93l-3"
})([""]);
var Image = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('img')).withConfig({
  displayName: "layouts__Image",
  componentId: "s1mdn93l-4"
})(["display:block;max-width:100%;height:auto;"]);
var Button = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('button')).withConfig({
  displayName: "layouts__Button",
  componentId: "s1mdn93l-5"
})(["background-color:", ";border:none;color:white;padding:8px 25px;border-radius:3px;text-transform:uppercase;text-align:center;font-family:inherit;font-size:14px;opacity:0.6;transition:0.3s;display:inline-block;outline:none;text-decoration:none;cursor:pointer;&:hover{opacity:1}"], function (props) {
  return props.theme.colors.primary;
});
var InputWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('div')).withConfig({
  displayName: "layouts__InputWrapper",
  componentId: "s1mdn93l-6"
})(["margin-bottom:15px;.react-datepicker{font-family:inherit;}"]);
var Fixed = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('div')).withConfig({
  displayName: "layouts__Fixed",
  componentId: "s1mdn93l-7"
})(["position:fixed;"]);
var Modal = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(Flex).withConfig({
  displayName: "layouts__Modal",
  componentId: "s1mdn93l-8"
})(["background-color:#fefefe;border-radius:4px;margin:5% auto;"]);
var inputStyles = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["css"])(["padding:0.7em;width:100%;background-color:hsl(0,0%,98%);border-color:", ";font-family:inherit;font-size:15px;border-style:solid;border-radius:0;border-width:1px;outline:none;&:hover{border-color:", ";}"], function (props) {
  return props.error ? "red" : "hsl(0,0%,80%)";
}, function (props) {
  return props.error ? "red" : "hsl(0,0%,70%)";
});
var Input = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('input')).withConfig({
  displayName: "layouts__Input",
  componentId: "s1mdn93l-9"
})(["", ""], inputStyles);
var InputSelect = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('select')).withConfig({
  displayName: "layouts__InputSelect",
  componentId: "s1mdn93l-10"
})(["appearance:none;", ""], inputStyles);
var InputError = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(base('div')).withConfig({
  displayName: "layouts__InputError",
  componentId: "s1mdn93l-11"
})(["color:red;font-size:14px;margin-top:3px;"]);
var SubMenu = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('ul').withConfig({
  displayName: "layouts__SubMenu",
  componentId: "s1mdn93l-12"
})(["@media (max-width:40em){position:relative;border:none;margin-left:10px;}display:", ";position:absolute;padding:0;min-width:12rem;margin:8px 0 0;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;"], function (props) {
  return props.display;
});
var EditorWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "layouts__EditorWrapper",
  componentId: "s1mdn93l-13"
})([".header-one,.header-two,.header-three,.header-four,.header-five,.header-six{margin:0;}ol,ul{margin:10px 0 0 0;}.ordered-list-item,.unordered-list-item{padding:5px;}.codeblock{background-color:rgba(0,0,0,0.05);font-family:'Inconsolata','Menlo','Consolas',monospace;font-size:16px;margin:0;padding:15px;white-space:normal;}.blockquote{border-left:5px solid #eee;color:#666;font-family:'Hoefler Text','Georgia',serif;font-style:italic;margin:15px 0 0 0;padding:10px 20px;}"]);

/***/ }),

/***/ "./components/layouts/link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login__ = __webpack_require__("./components/auth/login.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_ui__ = __webpack_require__("./containers/ui.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_auth__ = __webpack_require__("./containers/auth.js");
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/link.js";







var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('a').withConfig({
  displayName: "link__Wrapper",
  componentId: "s1rxfdq1-0"
})([""]);

var Link = function Link(_ref) {
  var route = _ref.route,
      children = _ref.children;

  var handleClick = function handleClick(uiStore, authStore) {
    return function (e) {
      e.preventDefault();
      var toggleModal = uiStore.toggleModal;
      var auth = authStore.state.auth;

      if (auth) {
        __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute(route);
      } else {
        toggleModal(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__auth_login__["a" /* default */], {
          toggleModal: toggleModal,
          forwardRoute: route,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }));
      }
    };
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_unstated__["Subscribe"], {
    to: [__WEBPACK_IMPORTED_MODULE_5__containers_ui__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__containers_auth__["a" /* default */]],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, function (uiStore, authStore) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
      onClick: handleClick(uiStore, authStore),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, children);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ "./components/layouts/pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/pagination.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Nav = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()('ul').withConfig({
  displayName: "pagination__Nav",
  componentId: "s17pg4xm-0"
})(["margin-bottom:0;padding-left:0;list-style-type:none;margin-top:25px;margin-left:2px;text-align:center;"]);
var List = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()('li').withConfig({
  displayName: "pagination__List",
  componentId: "s17pg4xm-1"
})(["display:inline-block;cursor:pointer;pointer-events:", ";opacity:", ";font-weight:", ";&:hover{font-weight:900;}"], function (props) {
  return props.active ? "none" : "normal";
}, function (props) {
  return props.active ? "0.6" : "none";
}, function (props) {
  return props.active ? "900" : "normal";
});
var Link = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()('a').withConfig({
  displayName: "pagination__Link",
  componentId: "s17pg4xm-2"
})(["border:1px solid #6b88a4;min-width:3.5rem;padding:0.75rem 1rem;text-align:center;box-shadow:none !important;margin-left:-1px;color:", ";font-size:1rem;text-decoration:none;"], function (props) {
  return props.active ? "grey" : "#0079d3";
});
var LEFT_PAGE = "LEFT";
var RIGHT_PAGE = "RIGHT";

var range = function range(from, to) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var i = from;
  var range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    var _props$totalRecords = props.totalRecords,
        totalRecords = _props$totalRecords === void 0 ? null : _props$totalRecords,
        _props$pageLimit = props.pageLimit,
        pageLimit = _props$pageLimit === void 0 ? 30 : _props$pageLimit,
        _props$pageNeighbours = props.pageNeighbours,
        pageNeighbours = _props$pageNeighbours === void 0 ? 0 : _props$pageNeighbours;
    _this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
    _this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;
    _this.pageNeighbours = typeof pageNeighbours === "number" ? Math.max(0, Math.min(pageNeighbours, 2)) : 0;
    _this.totalPages = Math.ceil(_this.totalRecords / _this.pageLimit);
    _this.state = {
      currentPage: props.pageNumber
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.pageNumber > this.props.pageNumber && this.state.currentPage > this.props.pageNumber) {
        this.setState({
          currentPage: 1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.totalRecords) return null;
      if (this.state.currentPage > this.pageNeighbours) return null;
      if (this.totalPages === 1) return null;
      var currentPage = this.state.currentPage;
      var pages = this.fetchPageNumbers();
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, pages.map(function (page, index) {
        if (page === LEFT_PAGE) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(List, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Link, {
          href: "#",
          "aria-label": "Previous",
          onClick: _this2.handleMoveLeft,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, "\xAB"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }, "Previous")));
        if (page === RIGHT_PAGE) return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(List, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Link, {
          href: "#",
          "aria-label": "Next",
          onClick: _this2.handleMoveRight,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, "\xBB"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "sr-only",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        }, "Next")));
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(List, {
          key: index,
          active: currentPage === page,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Link, {
          href: "#",
          onClick: function onClick(e) {
            return _this2.handleClick(page, e);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }, page));
      }));
    }
  }]);

  return Pagination;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  Object.defineProperty(this, "gotoPage", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(page) {
      var _this3$props$onPageCh = _this3.props.onPageChanged,
          onPageChanged = _this3$props$onPageCh === void 0 ? function (f) {
        return f;
      } : _this3$props$onPageCh;
      var currentPage = Math.max(0, Math.min(page, _this3.totalPages));
      var paginationData = {
        currentPage: currentPage,
        totalPages: _this3.totalPages,
        pageLimit: _this3.pageLimit,
        totalRecords: _this3.totalRecords
      };

      _this3.setState({
        currentPage: currentPage
      }, function () {
        return onPageChanged(paginationData);
      });
    }
  });
  Object.defineProperty(this, "handleClick", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(page, evt) {
      evt.preventDefault();

      _this3.gotoPage(page);
    }
  });
  Object.defineProperty(this, "handleMoveLeft", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(evt) {
      evt.preventDefault();

      _this3.gotoPage(_this3.state.currentPage - _this3.pageNeighbours * 2 - 1);
    }
  });
  Object.defineProperty(this, "handleMoveRight", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(evt) {
      evt.preventDefault();

      _this3.gotoPage(_this3.state.currentPage + _this3.pageNeighbours * 2 + 1);
    }
  });
  Object.defineProperty(this, "fetchPageNumbers", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var totalPages = _this3.totalPages;
      var currentPage = _this3.state.currentPage;
      var pageNeighbours = _this3.pageNeighbours;
      var totalNumbers = _this3.pageNeighbours * 2 + 3;
      var totalBlocks = totalNumbers + 2;

      if (totalPages > totalBlocks) {
        var pages = [];
        var leftBound = currentPage - pageNeighbours;
        var rightBound = currentPage + pageNeighbours;
        var beforeLastPage = totalPages - 1;
        var startPage = leftBound > 2 ? leftBound : 2;
        var endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;
        pages = range(startPage, endPage);
        var pagesCount = pages.length;
        var singleSpillOffset = totalNumbers - pagesCount - 1;
        var leftSpill = startPage > 2;
        var rightSpill = endPage < beforeLastPage;
        var leftSpillPage = LEFT_PAGE;
        var rightSpillPage = RIGHT_PAGE;

        if (leftSpill && !rightSpill) {
          var extraPages = range(startPage - singleSpillOffset, startPage - 1);
          pages = [leftSpillPage].concat(_toConsumableArray(extraPages), _toConsumableArray(pages));
        } else if (!leftSpill && rightSpill) {
          var _extraPages = range(endPage + 1, endPage + singleSpillOffset);

          pages = _toConsumableArray(pages).concat(_toConsumableArray(_extraPages), [rightSpillPage]);
        } else if (leftSpill && rightSpill) {
          pages = [leftSpillPage].concat(_toConsumableArray(pages), [rightSpillPage]);
        }

        return [1].concat(_toConsumableArray(pages), [totalPages]);
      }

      return range(1, totalPages);
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),

/***/ "./components/layouts/select/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items__ = __webpack_require__("./components/layouts/select/items.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__options__ = __webpack_require__("./components/layouts/select/options.js");
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/select/index.js";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "select__Wrapper",
  componentId: "s85nkvm-0"
})(["position:relative;"]);
var Control = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "select__Control",
  componentId: "s85nkvm-1"
})(["display:flex;justify-content:space-between;align-items:center;background-color:hsl(0,0%,98%);cursor:default;min-height:35px;font-size:15px;box-sizing:border-box;border-color:", ";border-style:solid;border-width:1px;transition:all 100ms;outline:0px;&:hover{border-color:", ";}"], function (props) {
  return props.error ? "red" : "hsl(0,0%,80%)";
}, function (props) {
  return props.error ? "red" : "hsl(0,0%,70%)";
});
var Header = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "select__Header",
  componentId: "s85nkvm-2"
})(["align-items:center;display:flex;flex-wrap:wrap;position:relative;box-sizing:border-box;flex:1 1 0%;padding:2px 8px;"]);
var ItemWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "select__ItemWrapper",
  componentId: "s85nkvm-3"
})(["display:flex;max-width:100%;"]);
var InputWrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "select__InputWrapper",
  componentId: "s85nkvm-4"
})(["display:flex;padding-bottom:2px;max-width:100%;padding-top:2px;position:relative;visibility:visible;color:rgb(34,34,34);box-sizing:border-box;margin:2px;"]);
var Input = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('input').withConfig({
  displayName: "select__Input",
  componentId: "s85nkvm-5"
})(["box-sizing:content-box;background:0px center;border:0px;font-size:15px;cursor:default;font-family:inherit;opacity:1;outline:0px;padding:0px;color:inherit;"]); // const Placeholder = styled('div')`
//   bottom: 0;
//   color: #aaa;
//   left: 0;
//   line-height: 20px;
//   position: absolute;
//   right: 0;
//   top: 0;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// `

var Indicators = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "select__Indicators",
  componentId: "s85nkvm-6"
})(["align-items:center;align-self:stretch;display:flex;flex-shrink:0;box-sizing:border-box;"]);
var ButtonToggle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "select__ButtonToggle",
  componentId: "s85nkvm-7"
})(["color:rgb(204,204,204);display:flex;cursor:pointer;box-sizing:border-box;padding:8px;transition:color 150ms;"]);
var Menu = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('ul').withConfig({
  displayName: "select__Menu",
  componentId: "s85nkvm-8"
})(["background-color:#FFF;border-bottom:1px solid rgb(204,204,204);border-left:1px solid rgb(204,204,204);border-right:1px solid rgb(204,204,204);border-bottom-left-radius:4px;border-bottom-right-radius:4px;box-shadow:0 1px 0 rgba(0,0,0,0.06);box-sizing:border-box;margin-top:-1px;max-height:200px;overflow-y:auto;position:absolute;padding:0;margin:0;left:0;top:100%;width:100%;z-index:1000;"]);

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _initialiseProps.call(_assertThisInitialized(_this));

    var options = _this.toItem(props.options, false);

    var selectedItems = _this.toItem(props.value, true);

    _this.setSelectInput = function (el) {
      return _this.selectInput = el;
    };

    _this.setSelectWrapper = function (el) {
      return _this.selectWrapper = el;
    };

    _this.state = {
      options: _this.selectedOptions(options, selectedItems),
      selectedItems: selectedItems,
      menu: false,
      cursor: 0,
      term: ''
    };
    return _this;
  }

  _createClass(Select, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          name = _props.name,
          placeholder = _props.placeholder,
          multiple = _props.multiple,
          onBlur = _props.onBlur,
          error = _props.error;
      var _state = this.state,
          selectedItems = _state.selectedItems,
          menu = _state.menu,
          cursor = _state.cursor,
          term = _state.term;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Control, {
        innerRef: this.setSelectWrapper,
        onClick: this.handleClick,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ItemWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, multiple && selectedItems.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__items__["a" /* default */], {
        items: selectedItems,
        onClick: this.toggleItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InputWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Input, {
        autoComplete: "off",
        innerRef: this.setSelectInput,
        name: name,
        placeholder: placeholder,
        onBlur: onBlur,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Indicators, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ButtonToggle, {
        onClick: this.clearItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-times",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ButtonToggle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas ".concat(menu ? "fa-chevron-up" : "fa-chevron-down"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      })))), menu && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__options__["a" /* default */], {
        items: this.filterItems(),
        onMouseOver: this.handleMouseOver,
        cursor: cursor,
        onClick: this.toggleItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      })));
    }
  }]);

  return Select;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  Object.defineProperty(this, "toItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(options, selected) {
      var labelKey = _this2.props.labelKey;
      return options.map(function (item) {
        return {
          id: item.id,
          label: item[labelKey],
          selected: selected
        };
      });
    }
  });
  Object.defineProperty(this, "selectedOptions", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(options, selectedItems) {
      return options.map(function (option) {
        var added = selectedItems.find(function (selected) {
          return selected.id === option.id;
        });
        return added ? _objectSpread({}, option, added) : option;
      });
    }
  });
  Object.defineProperty(this, "toggleItem", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(id) {
      return function (e) {
        var _this2$props = _this2.props,
            multiple = _this2$props.multiple,
            onSelect = _this2$props.onSelect,
            name = _this2$props.name;
        var _this2$state = _this2.state,
            options = _this2$state.options,
            selectedItems = _this2$state.selectedItems,
            term = _this2$state.term;
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (!id) return false;
        var item = options.find(function (item) {
          return item.id === id;
        });

        if (multiple) {
          item.selected = !item.selected;

          _this2.selectInput.focus();

          _this2.selectInput.value = '';

          _this2.setState({
            term: ''
          });

          _this2.toggleSelected(item);
        } else {
          options.map(function (item) {
            return item.selected = false;
          });
          item.selected = !item.selected;
          _this2.selectInput.value = item.label;

          _this2.setState({
            term: ''
          });

          onSelect(name, item.id);
        }
      };
    }
  });
  Object.defineProperty(this, "toggleSelected", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(data) {
      var _this2$props2 = _this2.props,
          onSelect = _this2$props2.onSelect,
          name = _this2$props2.name;
      var selectedItems = _this2.state.selectedItems;
      var existingItem = selectedItems.find(function (item) {
        return item.id === data.id;
      });

      if (!existingItem) {
        _this2.setState(function (prevState) {
          return {
            selectedItems: _toConsumableArray(prevState.selectedItems).concat([data])
          };
        }, function () {
          return onSelect(name, _this2.state.selectedItems);
        });
      } else {
        var index = selectedItems.findIndex(function (i) {
          return i.id === existingItem.id;
        });

        _this2.setState(function (prevState) {
          return {
            selectedItems: _toConsumableArray(prevState.selectedItems.slice(0, index)).concat(_toConsumableArray(prevState.selectedItems.slice(index + 1)))
          };
        }, function () {
          return onSelect(name, _this2.state.selectedItems);
        });
      }
    }
  });
  Object.defineProperty(this, "filterItems", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var _this2$state2 = _this2.state,
          term = _this2$state2.term,
          options = _this2$state2.options;
      var filteredList = options.filter(function (item) {
        return item.label.toLowerCase().indexOf(term) > -1;
      });
      return filteredList;
    }
  });
  Object.defineProperty(this, "handleChange", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(e) {
      var _this2$state3 = _this2.state,
          menu = _this2$state3.menu,
          cursor = _this2$state3.cursor,
          term = _this2$state3.term;

      _this2.setState({
        menu: true,
        term: e.target.value.toLowerCase(),
        cursor: 0
      });
    }
  });
  Object.defineProperty(this, "handleKeyDown", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(e) {
      var _this2$state4 = _this2.state,
          selectedItems = _this2$state4.selectedItems,
          cursor = _this2$state4.cursor;

      var filteredItems = _this2.filterItems(); // arrow up/down button should select next/previous list element


      if (e.keyCode === 38 && cursor > 0) {
        _this2.setState(function (prevState) {
          return {
            cursor: prevState.cursor - 1
          };
        });
      } else if (e.keyCode === 40 && cursor < filteredItems.length - 1) {
        _this2.setState(function (prevState) {
          return {
            cursor: prevState.cursor + 1
          };
        });
      } else if (e.keyCode === 13) {
        e.preventDefault();

        if (filteredItems[cursor]) {
          _this2.toggleItem(filteredItems[cursor].id)(e);
        }
      } else if (e.keyCode === 8 && _this2.selectInput.value === '' && selectedItems.length > 0) {
        var lastItem = selectedItems[selectedItems.length - 1];

        _this2.toggleItem(lastItem.id)(e);
      }
    }
  });
  Object.defineProperty(this, "handleMouseOver", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(i) {
      return function (e) {
        _this2.setState({
          cursor: i
        });
      };
    }
  });
  Object.defineProperty(this, "handleClick", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(e) {
      var menu = _this2.state.menu;

      if (!menu) {
        _this2.selectInput.focus();

        document.addEventListener('click', _this2.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', _this2.handleOutsideClick, false);
      }

      _this2.setState(function (prevState) {
        return {
          menu: !prevState.menu
        };
      });
    }
  });
  Object.defineProperty(this, "handleOutsideClick", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(e) {
      var filteredItems = _this2.filterItems();

      if (_this2.selectWrapper.contains(e.target)) {
        return;
      }

      _this2.handleClick();

      if (filteredItems.length === 0) {
        _this2.selectInput.value = '';

        _this2.setState({
          term: ''
        });
      }
    }
  });
  Object.defineProperty(this, "clearItems", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(e) {
      e.stopPropagation();
      var _this2$props3 = _this2.props,
          onSelect = _this2$props3.onSelect,
          name = _this2$props3.name,
          options = _this2$props3.options,
          multiple = _this2$props3.multiple;
      var selectedItems = _this2.state.selectedItems;

      if (selectedItems.length > 0) {
        if (multiple) {
          _this2.setState({
            options: _this2.toItem(options, false),
            selectedItems: [],
            term: '',
            cursor: 0
          }, function () {
            return onSelect(name, _this2.state.selectedItems);
          });
        } else {
          _this2.setState({
            options: _this2.toItem(options, false),
            term: '',
            cursor: 0
          }, function () {
            return onSelect(name, null);
          });
        }

        _this2.selectInput.value = '';
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Select);

/***/ }),

/***/ "./components/layouts/select/items.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/select/items.js";


var Item = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "items__Item",
  componentId: "fsjksf-0"
})(["display:flex;color:rgba(0,0,0,.65);background-color:#FFF;border:1px solid #e8e8e8;border-radius:3px;font-size:14px;margin-right:5px;margin-top:3px;margin-bottom:3px;"]);
var ItemTitle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "items__ItemTitle",
  componentId: "fsjksf-1"
})(["padding:5px;border-right:1px solid #e8e8e8;"]);
var RemoveItem = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "items__RemoveItem",
  componentId: "fsjksf-2"
})(["font-size:12px;padding:7px;cursor:pointer;&:hover{background-color:#e8e8e8;}"]);

var Items = function Items(_ref) {
  var items = _ref.items,
      onClick = _ref.onClick;
  return items.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ItemTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, item.label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RemoveItem, {
      onClick: onClick(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
      className: "fas fa-times",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    })));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Items);

/***/ }),

/***/ "./components/layouts/select/options.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/select/options.js";


var Option = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('li').withConfig({
  displayName: "options__Option",
  componentId: "dokx14-0"
})(["box-sizing:border-box;background-color:", ";color:#333;cursor:pointer;display:block;font-size:15px;padding:10px 10px;&:hover{background-color:#f4f4f4;}"], function (props) {
  return props.active ? "#f4f4f4" : "#FFF";
});
var OptionContent = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "options__OptionContent",
  componentId: "dokx14-1"
})(["display:inline;"]);
var OptionSelect = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "options__OptionSelect",
  componentId: "dokx14-2"
})(["float:right;"]);

var Options = function Options(_ref) {
  var items = _ref.items,
      onMouseOver = _ref.onMouseOver,
      onClick = _ref.onClick,
      cursor = _ref.cursor;

  if (items.length > 0) {
    return items.map(function (item, i) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Option, {
        key: item.id,
        active: cursor === i,
        onMouseOver: onMouseOver(i),
        onClick: onClick(item.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OptionContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, item.label), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OptionSelect, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, item.selected && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })));
    });
  } else {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Option, {
      onClick: onClick(null),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OptionContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    }, "No results were found"));
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Options);

/***/ }),

/***/ "./components/topics/topic_content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts__ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js__ = __webpack_require__("draft-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_draft_js__);
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/topics/topic_content.js";




var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2__layouts__["b" /* EditorWrapper */]).withConfig({
  displayName: "topic_content__Wrapper",
  componentId: "s1cgway6-0"
})(["font-size:15px;margin:10px 0 15px 0;color:black;cursor:default;"]);

var TopicContent = function TopicContent(_ref) {
  var editorState = _ref.editorState;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_draft_js__["Editor"], {
    blockStyleFn: getBlockStyle,
    customStyleMap: styleMap,
    editorState: editorState,
    editorKey: "editor",
    readOnly: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
}; // Custom overrides for "code" style.


var styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'header-one':
      return 'header-one';

    case 'header-two':
      return 'header-two';

    case 'header-three':
      return 'header-three';

    case 'header-four':
      return 'header-four';

    case 'header-five':
      return 'header-five';

    case 'header-six':
      return 'header-six';

    case 'blockquote':
      return 'blockquote';

    case 'code-block':
      return 'codeblock';

    case 'ordered-list-item':
      return 'ordered-list-item';

    default:
      return null;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TopicContent);

/***/ }),

/***/ "./components/topics/topic_list.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_view__ = __webpack_require__("./components/topics/topic_view.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_topic__ = __webpack_require__("./containers/topic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_auth__ = __webpack_require__("./containers/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_pagination__ = __webpack_require__("./components/layouts/pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/topics/topic_list.js";








var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()('div').withConfig({
  displayName: "topic_list__Container",
  componentId: "yw9sm9-0"
})(["margin-bottom:15px;"]);

var TopicList = function TopicList() {
  var onPageChanged = function onPageChanged(data) {
    __WEBPACK_IMPORTED_MODULE_7__routes__["Router"].pushRoute("/topics?page=".concat(data.currentPage));
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_unstated__["Subscribe"], {
    to: [__WEBPACK_IMPORTED_MODULE_4__containers_topic__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__containers_auth__["a" /* default */]],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, function (_ref, _ref2) {
    var _ref$state = _ref.state,
        topics = _ref$state.topics,
        pagination = _ref$state.pagination,
        toggleTopicLikes = _ref.toggleTopicLikes;
    var state = _ref2.state;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, topics.map(function (topic) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__topic_view__["a" /* default */], {
        key: topic.id,
        topic: topic,
        toggleTopicLikes: toggleTopicLikes,
        auth: state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      });
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_pagination__["a" /* default */], {
      totalRecords: pagination.total_entries,
      pageLimit: pagination.page_size,
      pageNeighbours: pagination.total_pages,
      pageNumber: pagination.page_number,
      onPageChanged: onPageChanged,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (TopicList);

/***/ }),

/***/ "./components/topics/topic_view.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js__ = __webpack_require__("draft-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts__ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_link__ = __webpack_require__("./components/layouts/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_like__ = __webpack_require__("./containers/like.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topic_content__ = __webpack_require__("./components/topics/topic_content.js");

var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/topics/topic_view.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }









var TopicItem = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_5__layouts__["d" /* Flex */]).withConfig({
  displayName: "topic_view__TopicItem",
  componentId: "l0bhei-0"
})(["color:#878a8c;background:#FFF;margin-bottom:15px;fill:#878a8c;cursor:pointer;overflow:hidden;box-shadow:none;border-radius:3px;border:1px solid #DDD;padding:0;&:last-child{margin-bottom:0;}"]);
var Reactions = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_5__layouts__["n" /* base */])('div')).withConfig({
  displayName: "topic_view__Reactions",
  componentId: "l0bhei-1"
})(["color:#878a8c;display:flex;flex-direction:column;align-items:center;background:#f9f9f9;"]);
var Content = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_5__layouts__["n" /* base */])('div')).withConfig({
  displayName: "topic_view__Content",
  componentId: "l0bhei-2"
})(["display:block;"]);

var Categories = function Categories(_ref) {
  var categories = _ref.categories;
  return categories.map(function (c, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_link__["a" /* default */], {
      key: c.id,
      route: "/rooms/".concat(c.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }, !!i && ", ", c.title));
  });
};

var TopicView = function TopicView(_ref2) {
  var topic = _ref2.topic,
      toggleTopicLikes = _ref2.toggleTopicLikes,
      auth = _ref2.auth;
  var categories = topic.categories;
  var content = JSON.parse(topic.content);

  var toggleLike = function toggleLike(topic, likeStore) {
    return (
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!auth.auth) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 3;
                  return likeStore.toggleLike(topic.id);

                case 3:
                  resp = _context.sent;

                  if (resp.status === 200) {
                    toggleTopicLikes(topic);
                  }

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    );
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_unstated__["Subscribe"], {
    to: [__WEBPACK_IMPORTED_MODULE_8__containers_like__["a" /* default */]],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, function (likeStore) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TopicItem, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Reactions, {
      p: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__layouts__["e" /* Icon */], {
      onClick: toggleLike(topic, likeStore),
      fontSize: "17px",
      color: "grey",
      className: "".concat(topic.liked ? "fas" : "far", " fa-heart"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__layouts__["m" /* Text */], {
      fontSize: 13,
      fontWeight: "bold",
      color: "#222",
      m: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    }, topic.likes_count)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Content, {
      py: 1,
      px: 2,
      width: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__layouts__["d" /* Flex */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__layouts__["m" /* Text */], {
      fontSize: 14,
      fontWeight: "bold",
      color: "#222",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Categories, {
      categories: categories,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__layouts__["m" /* Text */], {
      fontSize: 13,
      ml: 2,
      color: "#9b9b9b",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      }
    }, "Posted by u/", topic.user.username), topic.user.id === auth.currentUser.id && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__layouts__["m" /* Text */], {
      ml: "auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layouts_link__["a" /* default */], {
      route: "/topics/".concat(topic.id, "/edit"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__layouts__["e" /* Icon */], {
      ml: "auto",
      fontSize: "14px",
      color: "grey",
      className: "fas fa-edit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      }
    })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__topic_content__["a" /* default */], {
      editorState: __WEBPACK_IMPORTED_MODULE_4_draft_js__["EditorState"].createWithContent(Object(__WEBPACK_IMPORTED_MODULE_4_draft_js__["convertFromRaw"])(content)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      }
    })));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (TopicView);

/***/ }),

/***/ "./components/users/user_new.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_yup__ = __webpack_require__("yup");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_yup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_yup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_auth__ = __webpack_require__("./containers/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_user__ = __webpack_require__("./containers/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layouts__ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_formik__ = __webpack_require__("formik");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_formik___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_formik__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_fields__ = __webpack_require__("./components/layouts/fields.js");

var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/users/user_new.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }











var ModalBody = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_9__layouts__["n" /* base */])('div')).withConfig({
  displayName: "user_new__ModalBody",
  componentId: "s1oz524-0"
})(["margin:1rem 1rem 3rem 1rem;"]);
var ModalClose = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_9__layouts__["n" /* base */])('div')).withConfig({
  displayName: "user_new__ModalClose",
  componentId: "s1oz524-1"
})(["margin-left:auto;padding:10px;cursor:pointer;"]);
var genderTypes = [{
  type: 'male',
  title: 'Male'
}, {
  type: 'female',
  title: 'Female'
}];

var UserNew = function UserNew(_ref) {
  var toggleModal = _ref.toggleModal;

  var handleClick = function handleClick() {
    toggleModal();
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__layouts__["c" /* Fixed */], {
    px: 3,
    top: 0,
    right: 0,
    bg: "rgba(0, 0, 0, 0.5)",
    bottom: 0,
    left: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_unstated__["Subscribe"], {
    to: [__WEBPACK_IMPORTED_MODULE_7__containers_auth__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__containers_user__["a" /* default */]],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, function (authStore, userStore) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__layouts__["k" /* Modal */], {
      width: [1, 2 / 3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__layouts__["d" /* Flex */], {
      width: 2 / 8,
      bg: "#f9f9f9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__layouts__["d" /* Flex */], {
      width: 6 / 8,
      flexDirection: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ModalClose, {
      onClick: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__layouts__["e" /* Icon */], {
      fontSize: "20px",
      color: "grey",
      className: "fas fa-times",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ModalBody, {
      width: ["auto", "auto", 2 / 3],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__layouts__["f" /* Image */], {
      width: 60,
      src: "/static/intermates_nav.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__layouts__["m" /* Text */], {
      is: "h1",
      fontSize: 25,
      color: "#222",
      my: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    }, "Registration"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["Formik"], {
      initialValues: {
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
        profile: {
          gender: '',
          birthday: __WEBPACK_IMPORTED_MODULE_5_moment___default()()
        }
      },
      validationSchema: Object(__WEBPACK_IMPORTED_MODULE_3_yup__["object"])().shape({
        email: Object(__WEBPACK_IMPORTED_MODULE_3_yup__["string"])().email('Invalid email address').required('Required field!'),
        username: Object(__WEBPACK_IMPORTED_MODULE_3_yup__["string"])().required('Required field!'),
        password: Object(__WEBPACK_IMPORTED_MODULE_3_yup__["string"])().required('Required field!').min(5, 'Must be greater than 5 characters').max(100, 'Must be less than 100 characters'),
        password_confirmation: Object(__WEBPACK_IMPORTED_MODULE_3_yup__["string"])().required('Required field!').test('match', 'Password not matching!', function (value) {
          return value === this.options.parent.password;
        }),
        profile: Object(__WEBPACK_IMPORTED_MODULE_3_yup__["object"])().shape({
          gender: Object(__WEBPACK_IMPORTED_MODULE_3_yup__["string"])().required('Required field!'),
          birthday: Object(__WEBPACK_IMPORTED_MODULE_3_yup__["string"])().required('Required field!')
        })
      }),
      onSubmit:
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(values, _ref2) {
          var setSubmitting, response;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setSubmitting = _ref2.setSubmitting;
                  _context.next = 3;
                  return userStore.createUser(values, authStore);

                case 3:
                  response = _context.sent;
                  setSubmitting(false);

                  if (response.status !== 201) {
                    console.log("Something went wrong");
                    setSubmitting(false);
                  } else {
                    toggleModal();
                    __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute('/');
                  }

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }(),
      render: function render(_ref4) {
        var values = _ref4.values,
            isSubmitting = _ref4.isSubmitting,
            handleSubmit = _ref4.handleSubmit,
            handleChange = _ref4.handleChange,
            handleBlur = _ref4.handleBlur,
            setFieldValue = _ref4.setFieldValue,
            dirty = _ref4.dirty;
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["Form"], {
          onSubmit: handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["Field"], {
          name: "email",
          height: ["35", "40"],
          component: __WEBPACK_IMPORTED_MODULE_11__layouts_fields__["b" /* InputField */],
          autoComplete: "off",
          placeholder: "Email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["Field"], {
          name: "username",
          height: ["35", "40"],
          component: __WEBPACK_IMPORTED_MODULE_11__layouts_fields__["b" /* InputField */],
          autoComplete: "off",
          placeholder: "Username",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["Field"], {
          name: "password",
          height: ["35", "40"],
          type: "password",
          autoComplete: "off",
          component: __WEBPACK_IMPORTED_MODULE_11__layouts_fields__["b" /* InputField */],
          placeholder: "Password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["Field"], {
          name: "password_confirmation",
          height: ["35", "40"],
          type: "password",
          autoComplete: "off",
          component: __WEBPACK_IMPORTED_MODULE_11__layouts_fields__["b" /* InputField */],
          placeholder: "Password Confirmation",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["Field"], {
          name: "profile.gender",
          height: ["35", "40"],
          component: __WEBPACK_IMPORTED_MODULE_11__layouts_fields__["c" /* InputSelectField */],
          placeholder: "Select your gender",
          options: genderTypes,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["Field"], {
          name: "profile.birthday",
          selected: values.profile.birthday,
          autoComplete: "off",
          component: __WEBPACK_IMPORTED_MODULE_11__layouts_fields__["a" /* DateField */],
          onChange: function onChange(date) {
            return setFieldValue('profile.birthday', date);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__layouts__["a" /* Button */], {
          children: isSubmitting ? 'loading...' : 'SIGN UP',
          type: "submit",
          disabled: isSubmitting || !dirty,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      }
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (UserNew);

/***/ }),

/***/ "./config/api.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env__ = __webpack_require__("./env.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cookie__ = __webpack_require__("./config/cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }




var API = __WEBPACK_IMPORTED_MODULE_1__env__["a" /* default */].api;

var headers = function headers(req) {
  var token = Object(__WEBPACK_IMPORTED_MODULE_2__cookie__["b" /* getCookie */])('token', req);
  var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  if (token) {
    headers['Authorization'] = "Bearer: ".concat(token);
  }

  return headers;
};

var queryString = function queryString(params) {
  var query = Object.keys(params).map(function (k) {
    return "".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(params[k]));
  }).join('&');
  return "".concat(query.length ? '?' : '').concat(query);
};

/* harmony default export */ __webpack_exports__["a"] = ({
  fetch: function () {
    var _fetch = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(url) {
      var req,
          params,
          response,
          _args = arguments;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              params = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              _context.next = 4;
              return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("".concat(API).concat(url).concat(queryString(params)), {
                headers: headers(req)
              });

            case 4:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function fetch(_x) {
      return _fetch.apply(this, arguments);
    };
  }(),
  post: function () {
    var _post = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(url, data) {
      var response;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post("".concat(API).concat(url), data, {
                headers: headers()
              });

            case 2:
              response = _context2.sent;
              return _context2.abrupt("return", response);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function post(_x2, _x3) {
      return _post.apply(this, arguments);
    };
  }(),
  put: function () {
    var _put = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(url, data) {
      var response;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.put("".concat(API).concat(url), data, {
                headers: headers()
              });

            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function put(_x4, _x5) {
      return _put.apply(this, arguments);
    };
  }(),
  delete: function () {
    var _delete2 = _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(url) {
      var response;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.delete("".concat(API).concat(url), {
                headers: headers()
              });

            case 2:
              response = _context4.sent;
              return _context4.abrupt("return", response);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function _delete(_x6) {
      return _delete2.apply(this, arguments);
    };
  }()
});

/***/ }),

/***/ "./config/cookie.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCookie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__("js-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);

var setCookie = function setCookie(key, value) {
  if (process.browser) {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set(key, value);
  }
};
var deleteCookie = function deleteCookie(key) {
  if (process.browser) {
    __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.remove(key);
  }
};
var getCookie = function getCookie(key, req) {
  return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

var getCookieFromBrowser = function getCookieFromBrowser(key) {
  return __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get(key);
};

var getCookieFromServer = function getCookieFromServer(key, req) {
  if (!req || !req.headers || !req.headers.cookie) {
    return undefined;
  }

  return req.headers.cookie.split("=")[1];
};

/***/ }),

/***/ "./containers/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phoenix_channels__ = __webpack_require__("phoenix-channels");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phoenix_channels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_phoenix_channels__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_cookie__ = __webpack_require__("./config/cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_auth__ = __webpack_require__("./actions/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__env__ = __webpack_require__("./env.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var SOCKET_URL = __WEBPACK_IMPORTED_MODULE_5__env__["a" /* default */].socket;

var AuthContainer =
/*#__PURE__*/
function (_Container) {
  _inherits(AuthContainer, _Container);

  function AuthContainer() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AuthContainer);

    _this = _possibleConstructorReturn(this, (AuthContainer.__proto__ || Object.getPrototypeOf(AuthContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "login", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(user) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__actions_auth__["b" /* login */])(user);

                case 3:
                  resp = _context.sent;

                  _this.setAuth(resp.data.user, resp.data.token);

                  return _context.abrupt("return", resp);

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  resp = _context.t0.resp;
                  return _context.abrupt("return", resp);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "authenticateUser", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(req) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__actions_auth__["a" /* authenticateUser */])(req);

                case 3:
                  resp = _context2.sent;
                  return _context2.abrupt("return", resp);

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2["catch"](0);
                  resp = _context2.t0.resp;
                  return _context2.abrupt("return", resp);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 7]]);
        }));

        return function value(_x2) {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "logout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(id) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__actions_auth__["c" /* logout */])(id);

                case 3:
                  resp = _context3.sent;

                  _this.setState({
                    auth: false,
                    currentUser: {}
                  });

                  Object(__WEBPACK_IMPORTED_MODULE_3__config_cookie__["a" /* deleteCookie */])('token');
                  return _context3.abrupt("return", resp);

                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3["catch"](0);
                  resp = _context3.t0.resp;
                  return _context3.abrupt("return", resp);

                case 13:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[0, 9]]);
        }));

        return function value(_x3) {
          return _value3.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "setAuth", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(user, token) {
        _this.setState({
          auth: true,
          currentUser: user
        });

        Object(__WEBPACK_IMPORTED_MODULE_3__config_cookie__["c" /* setCookie */])('token', token);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "connectToSocket", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value4 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4() {
          var token, socketConnection;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  token = Object(__WEBPACK_IMPORTED_MODULE_3__config_cookie__["b" /* getCookie */])('token');
                  socketConnection = new __WEBPACK_IMPORTED_MODULE_2_phoenix_channels__["Socket"](SOCKET_URL, {
                    params: {
                      token: token
                    }
                  });
                  socketConnection.connect();
                  _context4.next = 5;
                  return _this.setState({
                    socket: socketConnection
                  });

                case 5:
                  return _context4.abrupt("return", _this.state.socket);

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function value() {
          return _value4.apply(this, arguments);
        };
      }()
    });
    _this.initialState = {
      auth: props.auth || false,
      currentUser: props.currentUser || {},
      socket: null
    };
    _this.state = _this.initialState;
    return _this;
  }

  return AuthContainer;
}(__WEBPACK_IMPORTED_MODULE_1_unstated__["Container"]);

/* harmony default export */ __webpack_exports__["a"] = (AuthContainer);

/***/ }),

/***/ "./containers/like.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_like__ = __webpack_require__("./actions/like.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var LikeContainer =
/*#__PURE__*/
function (_Container) {
  _inherits(LikeContainer, _Container);

  function LikeContainer() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LikeContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LikeContainer.__proto__ || Object.getPrototypeOf(LikeContainer)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "toggleLike", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(topic_id) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_2__actions_like__["a" /* toggleLike */])(topic_id);

                case 3:
                  resp = _context.sent;
                  return _context.abrupt("return", resp);

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  resp = _context.t0.resp;
                  return _context.abrupt("return", resp);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 7]]);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  return LikeContainer;
}(__WEBPACK_IMPORTED_MODULE_1_unstated__["Container"]);

/* harmony default export */ __webpack_exports__["a"] = (LikeContainer);

/***/ }),

/***/ "./containers/topic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_update__ = __webpack_require__("react-addons-update");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_addons_update__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_topic__ = __webpack_require__("./actions/topic.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var TopicContainer =
/*#__PURE__*/
function (_Container) {
  _inherits(TopicContainer, _Container);

  function TopicContainer() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TopicContainer);

    _this = _possibleConstructorReturn(this, (TopicContainer.__proto__ || Object.getPrototypeOf(TopicContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "fetchTopics", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(req, params) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_3__actions_topic__["c" /* fetchTopics */])(req, params);

                case 3:
                  resp = _context.sent;

                  _this.setState({
                    topics: resp.data.topics,
                    pagination: resp.data.pagination
                  });

                  return _context.abrupt("return", resp);

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  resp = _context.t0.resp;
                  return _context.abrupt("return", resp);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        return function value(_x, _x2) {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "createTopic", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(topic) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_3__actions_topic__["a" /* createTopic */])(topic);

                case 3:
                  resp = _context2.sent;

                  _this.setState(function (prevState) {
                    return {
                      topics: _toConsumableArray(prevState.topics).concat([resp.data.topic])
                    };
                  });

                  return _context2.abrupt("return", resp);

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](0);
                  resp = _context2.t0.resp;
                  return _context2.abrupt("return", resp);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 8]]);
        }));

        return function value(_x3) {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "editTopic", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(req, id) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_3__actions_topic__["b" /* editTopic */])(req, id);

                case 3:
                  resp = _context3.sent;

                  _this.setState({
                    selectedTopic: resp.data.topic
                  });

                  return _context3.abrupt("return", resp);

                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3["catch"](0);
                  resp = _context3.t0.resp;
                  return _context3.abrupt("return", resp);

                case 12:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[0, 8]]);
        }));

        return function value(_x4, _x5) {
          return _value3.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "updateTopic", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value4 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(topic, id) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_3__actions_topic__["d" /* updateTopic */])(topic, id);

                case 3:
                  resp = _context4.sent;
                  return _context4.abrupt("return", resp);

                case 7:
                  _context4.prev = 7;
                  _context4.t0 = _context4["catch"](0);
                  resp = _context4.t0.resp;
                  return _context4.abrupt("return", resp);

                case 11:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this, [[0, 7]]);
        }));

        return function value(_x6, _x7) {
          return _value4.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleTopicLikes", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(topic) {
        var allTopics = _this.state.topics;
        var index = allTopics.findIndex(function (t) {
          return t.id == topic.id;
        });
        var foundTopic = allTopics[index];
        var updatedTopic = foundTopic;

        if (topic.liked) {
          updatedTopic = __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default()(foundTopic, {
            liked: {
              $set: false
            },
            likes_count: {
              $set: foundTopic.likes_count -= 1
            }
          });
        } else {
          updatedTopic = __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default()(foundTopic, {
            liked: {
              $set: true
            },
            likes_count: {
              $set: foundTopic.likes_count += 1
            }
          });
        }

        var data = __WEBPACK_IMPORTED_MODULE_1_react_addons_update___default()(allTopics, {
          $splice: [[index, 1, updatedTopic]]
        });

        _this.setState({
          topics: data
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "reset", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          topics: []
        });
      }
    });
    _this.initialState = {
      topics: props.topics || [],
      pagination: props.pagination || null,
      selectedTopic: props.topic || {}
    };
    _this.state = _this.initialState;
    return _this;
  }

  return TopicContainer;
}(__WEBPACK_IMPORTED_MODULE_2_unstated__["Container"]);

/* harmony default export */ __webpack_exports__["a"] = (TopicContainer);

/***/ }),

/***/ "./containers/ui.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_unstated__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var UIContainer =
/*#__PURE__*/
function (_Container) {
  _inherits(UIContainer, _Container);

  function UIContainer(props) {
    var _this;

    _classCallCheck(this, UIContainer);

    _this = _possibleConstructorReturn(this, (UIContainer.__proto__ || Object.getPrototypeOf(UIContainer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "toggleModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _this.setState(function (prevState) {
          return {
            modal: _objectSpread({}, prevState.modal, {
              show: !prevState.modal.show,
              content: body
            })
          };
        });
      }
    });
    _this.initialState = {
      modal: {
        show: false,
        content: null
      }
    };
    _this.state = _this.initialState;
    return _this;
  }

  return UIContainer;
}(__WEBPACK_IMPORTED_MODULE_0_unstated__["Container"]);

/* harmony default export */ __webpack_exports__["a"] = (UIContainer);

/***/ }),

/***/ "./containers/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_user__ = __webpack_require__("./actions/user.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var UserContainer =
/*#__PURE__*/
function (_Container) {
  _inherits(UserContainer, _Container);

  function UserContainer() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, UserContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = UserContainer.__proto__ || Object.getPrototypeOf(UserContainer)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "createUser", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(user, authStore) {
          var resp;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_2__actions_user__["a" /* createUser */])(user);

                case 3:
                  resp = _context.sent;
                  authStore.setAuth(resp.data.user, resp.data.token);
                  return _context.abrupt("return", resp);

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  resp = _context.t0.resp;
                  return _context.abrupt("return", resp);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        return function value(_x, _x2) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  return UserContainer;
}(__WEBPACK_IMPORTED_MODULE_1_unstated__["Container"]);

/* harmony default export */ __webpack_exports__["a"] = (UserContainer);

/***/ }),

/***/ "./env.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var env = process.env.ENV || 'development';
var configs = {
  development: {
    api: 'http://localhost:4000/api',
    socket: 'ws://localhost:4000/socket'
  },
  staging: {
    api: 'https://api.staging.com'
  },
  production: {
    api: 'https://api.production.com'
  }
}[env];
/* harmony default export */ __webpack_exports__["a"] = (configs);

/***/ }),

/***/ "./hocs/session.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_cookie__ = __webpack_require__("./config/cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_auth__ = __webpack_require__("./containers/auth.js");

var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/hocs/session.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var authContainer = new __WEBPACK_IMPORTED_MODULE_4__containers_auth__["a" /* default */]();
/* harmony default export */ __webpack_exports__["a"] = (function (WrappedPage) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          var _props$session = this.props.session,
              auth = _props$session.auth,
              currentUser = _props$session.currentUser;
          authContainer = new __WEBPACK_IMPORTED_MODULE_4__containers_auth__["a" /* default */]({
            auth: auth,
            currentUser: currentUser
          });
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_unstated__["Provider"], {
            inject: [authContainer],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(WrappedPage, _extends({}, this.props, {
            authStore: authContainer,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          })));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
            var pageProps, session, token, resp;
            return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    session = {};
                    token = Object(__WEBPACK_IMPORTED_MODULE_3__config_cookie__["b" /* getCookie */])('token', ctx.req);

                    if (!token) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 5;
                    return authContainer.authenticateUser(ctx.req);

                  case 5:
                    resp = _context.sent;

                    if (resp.status === 200) {
                      session = {
                        auth: true,
                        currentUser: resp.data.user
                      };
                    }

                  case 7:
                    ctx.session = session;

                    if (!WrappedPage.getInitialProps) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 11;
                    return WrappedPage.getInitialProps(ctx);

                  case 11:
                    pageProps = _context.sent;

                  case 12:
                    return _context.abrupt("return", {
                      pageProps: pageProps,
                      session: session
                    });

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      return _class;
    }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component)
  );
});

/***/ }),

/***/ "./node_modules/react-datepicker/dist/react-datepicker.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unstated__ = __webpack_require__("unstated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unstated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_unstated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_flowRight__ = __webpack_require__("lodash/flowRight");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_flowRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_flowRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hocs_session__ = __webpack_require__("./hocs/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_layouts__ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_layouts_link__ = __webpack_require__("./components/layouts/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_layouts_home__ = __webpack_require__("./components/layouts/home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_topics_topic_list__ = __webpack_require__("./components/topics/topic_list.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_topic__ = __webpack_require__("./containers/topic.js");

var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var topicContainer = new __WEBPACK_IMPORTED_MODULE_10__containers_topic__["a" /* default */]();
var Panel = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_6__components_layouts__["n" /* base */])('div')).withConfig({
  displayName: "pages__Panel",
  componentId: "lgoza8-0"
})([""]);
var PanelTop = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_6__components_layouts__["n" /* base */])('div')).withConfig({
  displayName: "pages__PanelTop",
  componentId: "lgoza8-1"
})(["background-color:#E5906D;border-top-left-radius:3px;border-top-right-radius:3px;height:100px;"]);
var PanelContent = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_6__components_layouts__["n" /* base */])('div')).withConfig({
  displayName: "pages__PanelContent",
  componentId: "lgoza8-2"
})(["background-color:#FFF;text-align:center;padding:12px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;"]);

var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    _classCallCheck(this, IndexPage);

    return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
  }

  _createClass(IndexPage, [{
    key: "render",
    value: function render() {
      var _props$pageProps = this.props.pageProps,
          topics = _props$pageProps.topics,
          pagination = _props$pageProps.pagination;
      topicContainer = new __WEBPACK_IMPORTED_MODULE_10__containers_topic__["a" /* default */]({
        topics: topics,
        pagination: pagination
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_layouts_home__["a" /* default */], {
        title: "Intermates | Topics",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_unstated__["Provider"], {
        inject: [topicContainer],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_layouts__["d" /* Flex */], {
        mx: [1, 1, 1, 4],
        flexWrap: "wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_layouts__["d" /* Flex */], {
        p: 2,
        width: [1, 1, 2 / 3],
        order: [2, 2, 1],
        flexDirection: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_topics_topic_list__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_layouts__["d" /* Flex */], {
        p: 2,
        width: [1, 1, 1 / 3],
        order: [1, 1, 2],
        flexDirection: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Panel, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PanelTop, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PanelContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_layouts_link__["a" /* default */], {
        route: "/topics/new",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_layouts__["a" /* Button */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Create new topic"))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
        var resp;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return topicContainer.fetchTopics(ctx.req, ctx.query);

              case 2:
                resp = _context.sent;
                return _context.abrupt("return", {
                  topics: resp.data.topics,
                  pagination: resp.data.pagination
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return IndexPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_4_lodash_flowRight___default()([__WEBPACK_IMPORTED_MODULE_5__hocs_session__["a" /* default */]])(IndexPage));

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__("next-routes")();

routes.add('index', '/').add('topicIndex', '/topics', 'index').add('topicNew', '/topics/new', 'topics/new').add('topicEdit', '/topics/:id/edit', 'topics/edit').add('RoomShow', '/rooms/:id', 'rooms/show');

/***/ }),

/***/ "./themes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  fontSizes: [13, 14, 16, 24, 36, 48, 72],
  fontWeight: {
    normal: 400,
    bold: 800
  },
  colors: {
    primary: '#0079d3',
    secondary: '#3293db',
    white: '#FFF'
  }
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "clean-tag":
/***/ (function(module, exports) {

module.exports = require("clean-tag");

/***/ }),

/***/ "draft-js":
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "formik":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash/flowRight":
/***/ (function(module, exports) {

module.exports = require("lodash/flowRight");

/***/ }),

/***/ "lodash/omit":
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "phoenix-channels":
/***/ (function(module, exports) {

module.exports = require("phoenix-channels");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-addons-update":
/***/ (function(module, exports) {

module.exports = require("react-addons-update");

/***/ }),

/***/ "react-datepicker":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "unstated":
/***/ (function(module, exports) {

module.exports = require("unstated");

/***/ }),

/***/ "yup":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map