webpackHotUpdate(5,{

/***/ "./components/users/user_new.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_yup__ = __webpack_require__("./node_modules/yup/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_yup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_yup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_unstated__ = __webpack_require__("./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_auth__ = __webpack_require__("./containers/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_user__ = __webpack_require__("./containers/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layouts__ = __webpack_require__("./components/layouts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_formik__ = __webpack_require__("./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layouts_fields__ = __webpack_require__("./components/layouts/fields.js");

var _jsxFileName = "/Users/adavia/Projects/elixir/intermates/frontend/components/users/user_new.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }











var ModalBody = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["d" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_9__layouts__["n" /* base */])('div')).withConfig({
  displayName: "user_new__ModalBody",
  componentId: "s1oz524-0"
})(["margin:1rem 1rem 3rem 1rem;"]);
var ModalClose = Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["d" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_9__layouts__["n" /* base */])('div')).withConfig({
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
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_unstated__["c" /* Subscribe */], {
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
    }, "Registration"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["c" /* Formik */], {
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
                    __WEBPACK_IMPORTED_MODULE_6__routes__["Router"].pushRoute('/');
                  } else {
                    toggleModal();
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
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["b" /* Form */], {
          onSubmit: handleSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["a" /* Field */], {
          name: "email",
          height: ["35", "40"],
          component: __WEBPACK_IMPORTED_MODULE_11__layouts_fields__["b" /* InputField */],
          autoComplete: "off",
          placeholder: "Email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["a" /* Field */], {
          name: "username",
          height: ["35", "40"],
          component: __WEBPACK_IMPORTED_MODULE_11__layouts_fields__["b" /* InputField */],
          autoComplete: "off",
          placeholder: "Username",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["a" /* Field */], {
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
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["a" /* Field */], {
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
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["a" /* Field */], {
          name: "profile.gender",
          height: ["35", "40"],
          component: __WEBPACK_IMPORTED_MODULE_11__layouts_fields__["c" /* InputSelectField */],
          placeholder: "Select your gender",
          options: genderTypes,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_formik__["a" /* Field */], {
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

/***/ })

})
//# sourceMappingURL=5.14958c71f05c6286f848.hot-update.js.map