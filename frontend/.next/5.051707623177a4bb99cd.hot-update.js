webpackHotUpdate(5,{

/***/ "./components/topics/topic_list.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_unstated__ = __webpack_require__("./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_view__ = __webpack_require__("./components/topics/topic_view.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_topic__ = __webpack_require__("./containers/topic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_auth__ = __webpack_require__("./containers/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layouts_pagination__ = __webpack_require__("./components/layouts/pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__routes__);
var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/topics/topic_list.js";








var Container = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["d" /* default */])('div').withConfig({
  displayName: "topic_list__Container",
  componentId: "yw9sm9-0"
})(["margin-bottom:15px;"]);

var TopicList = function TopicList() {
  var onPageChanged = function onPageChanged(data) {
    __WEBPACK_IMPORTED_MODULE_7__routes__["Router"].pushRoute("/topics?page=".concat(data.currentPage));
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_unstated__["c" /* Subscribe */], {
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

/***/ })

})
//# sourceMappingURL=5.051707623177a4bb99cd.hot-update.js.map