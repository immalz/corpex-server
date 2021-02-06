"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _package = _interopRequireDefault(require("../package.json"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _proyecto = _interopRequireDefault(require("./routes/proyecto.routes"));

var _usuario = _interopRequireDefault(require("./routes/usuario.routes"));

var _initialSetup = require("./libs/initialSetup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("regenerator-runtime/runtime");

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.set('pkg', _package["default"]); //cambiar la configuracion cors para produccion

app.use((0, _cors["default"])());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var bodyParser = require('body-parser');

app.use(bodyParser.json({
  limit: "50mb"
}));
app.use(bodyParser.urlencoded({
  limit: "50mb",
  extended: true,
  parameterLimit: 50000
}));
app.use('/uploads', _express["default"]["static"](_path["default"].resolve('uploads')));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    author: app.get('pkg').author,
    name: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
    scripts: app.get('pkg').scripts
  });
});
app.use('/api/auth', _auth["default"]);
app.use('/api/proyectos', _proyecto["default"]);
app.use('/api/usuarios', _usuario["default"]);
var _default = app;
exports["default"] = _default;