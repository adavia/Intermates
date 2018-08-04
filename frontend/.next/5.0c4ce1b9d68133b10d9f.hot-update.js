webpackHotUpdate(5,{

/***/ "./components/layouts/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_unstated__ = __webpack_require__("./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("./node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__themes__ = __webpack_require__("./themes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header__ = __webpack_require__("./components/layouts/header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_ui__ = __webpack_require__("./containers/ui.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_auth__ = __webpack_require__("./containers/auth.js");
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/layouts/home.js";










var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components__["d" /* default */].div.withConfig({
  displayName: "home__Wrapper",
  componentId: "s1c2be42-0"
})(["min-height:100vh;@media (min-width:40em){display:grid;grid-template-areas:\"header sidebar\" \"content sidebar\" \"footer sidebar\";grid-template-rows:auto 1fr 50px;grid-template-columns:1fr 200px;}"]);
var Aside = __WEBPACK_IMPORTED_MODULE_2_styled_components__["d" /* default */].aside.withConfig({
  displayName: "home__Aside",
  componentId: "s1c2be42-1"
})(["grid-area:sidebar;background:linear-gradient(to right,#ffb347,#ffcc33);opacity:0.8;"]);
var Main = __WEBPACK_IMPORTED_MODULE_2_styled_components__["d" /* default */].main.withConfig({
  displayName: "home__Main",
  componentId: "s1c2be42-2"
})(["grid-area:content;@media (min-width:40em){grid-column:1 / span 3;}"]);
var Footer = __WEBPACK_IMPORTED_MODULE_2_styled_components__["d" /* default */].footer.withConfig({
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
  }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* ThemeProvider */], {
    theme: __WEBPACK_IMPORTED_MODULE_6__themes__["a" /* default */],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_unstated__["c" /* Subscribe */], {
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

/***/ })

})
//# sourceMappingURL=5.0c4ce1b9d68133b10d9f.hot-update.js.map