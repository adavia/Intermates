webpackHotUpdate(5,{

/***/ "./components/layouts/pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
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



var Nav = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["d" /* default */])('ul').withConfig({
  displayName: "pagination__Nav",
  componentId: "s17pg4xm-0"
})(["margin-bottom:0;padding-left:0;list-style-type:none;margin-top:25px;margin-left:2px;text-align:center;"]);
var List = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["d" /* default */])('li').withConfig({
  displayName: "pagination__List",
  componentId: "s17pg4xm-1"
})(["display:inline-block;cursor:pointer;pointer-events:", ";opacity:", ";font-weight:", ";&:hover{font-weight:900;}"], function (props) {
  return props.active ? "none" : "normal";
}, function (props) {
  return props.active ? "0.6" : "none";
}, function (props) {
  return props.active ? "900" : "normal";
});
var Link = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["d" /* default */])('a').withConfig({
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
      if (prevProps.pageNumber === this.props.pageNumber && this.state.currentPage > this.props.pageNumber && this.state.currentPage > prevProps.pageNumber) {
        console.log("not from link");
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

/***/ })

})
//# sourceMappingURL=5.c062410a584b15060645.hot-update.js.map