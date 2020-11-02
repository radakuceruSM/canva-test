"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var index = function index(_req, res, next) {
  res.json({ status: 200, message: "Hello world!" });
  next();
};

exports.default = index;
//# sourceMappingURL=index.js.map