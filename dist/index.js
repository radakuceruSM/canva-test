"use strict";

var _Server = require("./services/Server");

var _Server2 = _interopRequireDefault(_Server);

var _Router = require("./routes/Router");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _Server2.default(80);
new _Router2.default(server.app);
//# sourceMappingURL=index.js.map