webpackHotUpdate(5,{

/***/ "./containers/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_unstated__ = __webpack_require__("./node_modules/unstated/lib/unstated.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phoenix_channels__ = __webpack_require__("./node_modules/phoenix-channels/src/index.js");
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
}(__WEBPACK_IMPORTED_MODULE_1_unstated__["a" /* Container */]);

/* harmony default export */ __webpack_exports__["a"] = (AuthContainer);

/***/ }),

/***/ "./node_modules/phoenix-channels/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

// Phoenix Channels JavaScript client
//
// ## Socket Connection
//
// A single connection is established to the server and
// channels are multiplexed over the connection.
// Connect to the server using the `Socket` class:
//
//     let socket = new Socket("/socket", {params: {userToken: "123"}})
//     socket.connect()
//
// The `Socket` constructor takes the mount point of the socket,
// the authentication params, as well as options that can be found in
// the Socket docs, such as configuring the heartbeat.
//
// ## Channels
//
// Channels are isolated, concurrent processes on the server that
// subscribe to topics and broker events between the client and server.
// To join a channel, you must provide the topic, and channel params for
// authorization. Here's an example chat room example where `"new_msg"`
// events are listened for, messages are pushed to the server, and
// the channel is joined with ok/error/timeout matches:
//
//     let channel = socket.channel("room:123", {token: roomToken})
//     channel.on("new_msg", msg => console.log("Got message", msg) )
//     $input.onEnter( e => {
//       channel.push("new_msg", {body: e.target.val}, 10000)
//        .receive("ok", (msg) => console.log("created message", msg) )
//        .receive("error", (reasons) => console.log("create failed", reasons) )
//        .receive("timeout", () => console.log("Networking issue...") )
//     })
//     channel.join()
//       .receive("ok", ({messages}) => console.log("catching up", messages) )
//       .receive("error", ({reason}) => console.log("failed join", reason) )
//       .receive("timeout", () => console.log("Networking issue. Still waiting...") )
//
//
// ## Joining
//
// Creating a channel with `socket.channel(topic, params)`, binds the params to
// `channel.params`, which are sent up on `channel.join()`.
// Subsequent rejoins will send up the modified params for
// updating authorization params, or passing up last_message_id information.
// Successful joins receive an "ok" status, while unsuccessful joins
// receive "error".
//
// ## Duplicate Join Subscriptions
//
// While the client may join any number of topics on any number of channels,
// the client may only hold a single subscription for each unique topic at any
// given time. When attempting to create a duplicate subscription,
// the server will close the existing channel, log a warning, and
// spawn a new channel for the topic. The client will have their
// `channel.onClose` callbacks fired for the existing channel, and the new
// channel join will have its receive hooks processed as normal.
//
// ## Pushing Messages
//
// From the previous example, we can see that pushing messages to the server
// can be done with `channel.push(eventName, payload)` and we can optionally
// receive responses from the push. Additionally, we can use
// `receive("timeout", callback)` to abort waiting for our other `receive` hooks
//  and take action after some period of waiting. The default timeout is 5000ms.
//
//
// ## Socket Hooks
//
// Lifecycle events of the multiplexed connection can be hooked into via
// `socket.onError()` and `socket.onClose()` events, ie:
//
//     socket.onError( () => console.log("there was an error with the connection!") )
//     socket.onClose( () => console.log("the connection dropped") )
//
//
// ## Channel Hooks
//
// For each joined channel, you can bind to `onError` and `onClose` events
// to monitor the channel lifecycle, ie:
//
//     channel.onError( () => console.log("there was an error!") )
//     channel.onClose( () => console.log("the channel has gone away gracefully") )
//
// ### onError hooks
//
// `onError` hooks are invoked if the socket connection drops, or the channel
// crashes on the server. In either case, a channel rejoin is attempted
// automatically in an exponential backoff manner.
//
// ### onClose hooks
//
// `onClose` hooks are invoked only in two cases. 1) the channel explicitly
// closed on the server, or 2). The client explicitly closed, by calling
// `channel.leave()`
//
//
// ## Presence
//
// The `Presence` object provides features for syncing presence information
// from the server with the client and handling presences joining and leaving.
//
// ### Syncing initial state from the server
//
// `Presence.syncState` is used to sync the list of presences on the server
// with the client's state. An optional `onJoin` and `onLeave` callback can
// be provided to react to changes in the client's local presences across
// disconnects and reconnects with the server.
//
// `Presence.syncDiff` is used to sync a diff of presence join and leave
// events from the server, as they happen. Like `syncState`, `syncDiff`
// accepts optional `onJoin` and `onLeave` callbacks to react to a user
// joining or leaving from a device.
//
// ### Listing Presences
//
// `Presence.list` is used to return a list of presence information
// based on the local state of metadata. By default, all presence
// metadata is returned, but a `listBy` function can be supplied to
// allow the client to select which metadata to use for a given presence.
// For example, you may have a user online from different devices with
// a metadata status of "online", but they have set themselves to "away"
// on another device. In this case, the app may choose to use the "away"
// status for what appears on the UI. The example below defines a `listBy`
// function which prioritizes the first metadata which was registered for
// each user. This could be the first tab they opened, or the first device
// they came online from:
//
//     let state = {}
//     state = Presence.syncState(state, stateFromServer)
//     let listBy = (id, {metas: [first, ...rest]}) => {
//       first.count = rest.length + 1 // count of this user's presences
//       first.id = id
//       return first
//     }
//     let onlineUsers = Presence.list(state, listBy)
//
//
// ### Example Usage
//
//     // detect if user has joined for the 1st time or from another tab/device
//     let onJoin = (id, current, newPres) => {
//       if(!current){
//         console.log("user has entered for the first time", newPres)
//       } else {
//         console.log("user additional presence", newPres)
//       }
//     }
//     // detect if user has left from all tabs/devices, or is still present
//     let onLeave = (id, current, leftPres) => {
//       if(current.metas.length === 0){
//         console.log("user has left from all devices", leftPres)
//       } else {
//         console.log("user left from a device", leftPres)
//       }
//     }
//     let presences = {} // client's initial empty presence state
//     // receive initial presence data from server, sent after join
//     myChannel.on("presence_state", state => {
//       presences = Presence.syncState(presences, state, onJoin, onLeave)
//       displayUsers(Presence.list(presences))
//     })
//     // receive "presence_diff" from server, containing join/leave events
//     myChannel.on("presence_diff", diff => {
//       presences = Presence.syncDiff(presences, diff, onJoin, onLeave)
//       this.setState({users: Presence.list(room.presences, listBy)})
//     })
//

module.exports = {
  Channel: __webpack_require__("./node_modules/phoenix-channels/src/channel.js"),
  Socket: __webpack_require__("./node_modules/phoenix-channels/src/socket.js"),
  Presence: __webpack_require__("./node_modules/phoenix-channels/src/presence.js"),
}

/***/ })

})
//# sourceMappingURL=5.a993f176b3063a19616d.hot-update.js.map