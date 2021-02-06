"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eliminarUsuario = exports.actualizarUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = void 0;

var _usuario = _interopRequireDefault(require("../models/usuario"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var obtenerUsuarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var colaboradores;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _usuario["default"].find();

          case 2:
            colaboradores = _context.sent;
            res.status(200).json(colaboradores);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function obtenerUsuarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.obtenerUsuarios = obtenerUsuarios;

var obtenerUsuario = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _id, usuario;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _id = req.params._id;
            _context2.next = 3;
            return _usuario["default"].findById(_id);

          case 3:
            usuario = _context2.sent;
            res.status(200).json(usuario);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function obtenerUsuario(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.obtenerUsuario = obtenerUsuario;

var actualizarUsuario = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, usuario, correo, celular, imgURL, direccion, cod_postal, ciudad, myquery, usuarioActualizar;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, usuario = _req$body.usuario, correo = _req$body.correo, celular = _req$body.celular, imgURL = _req$body.imgURL, direccion = _req$body.direccion, cod_postal = _req$body.cod_postal, ciudad = _req$body.ciudad;
            myquery = {
              _id: req.params._id
            };
            _context3.next = 4;
            return _usuario["default"].updateOne(myquery, {
              usuario: usuario,
              correo: correo,
              celular: celular,
              imgURL: imgURL,
              direccion: direccion,
              cod_postal: cod_postal,
              ciudad: ciudad
            }, {
              "new": true
            });

          case 4:
            usuarioActualizar = _context3.sent;
            res.status(200).json({
              message: usuarioActualizar
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function actualizarUsuario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.actualizarUsuario = actualizarUsuario;

var eliminarUsuario = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _id, usuario;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _id = req.params._id;
            _context4.next = 3;
            return _usuario["default"].findByIdAndRemove(_id);

          case 3:
            usuario = _context4.sent;
            res.status(200).json(usuario);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function eliminarUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.eliminarUsuario = eliminarUsuario;