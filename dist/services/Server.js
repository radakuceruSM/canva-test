"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _restify = require("restify");

var _restify2 = _interopRequireDefault(_restify);

var _restifyCorsMiddleware = require("restify-cors-middleware");

var _restifyCorsMiddleware2 = _interopRequireDefault(_restifyCorsMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cors = (0, _restifyCorsMiddleware2.default)({
  origins: ["*"]
});

var Server = function () {
  function Server() {
    var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.env.PORT;

    _classCallCheck(this, Server);

    this.port = port;
    this.app = _restify2.default.createServer();
    this._useMiddlewares();
    this._useListeners();
  }

  _createClass(Server, [{
    key: "_useMiddlewares",
    value: function _useMiddlewares() {
      this.app.pre(cors.preflight);
      this.app.use(cors.actual);
    }
  }, {
    key: "_useListeners",
    value: function _useListeners() {
      var _this = this;

      this.app.listen(this.port, function () {
        console.log("Server is listening on port " + _this.port + "!");
      });
    }
  }]);

  return Server;
}();

exports.default = Server;
//# sourceMappingURL=Server.js.map