"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eliminarColaborador = exports.actualizarColaborador = exports.obtenerColaborador = exports.obtenerColaboradores = exports.registrarColaborador = void 0;

var _colaborador = _interopRequireDefault(require("../models/colaborador"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registrarColaborador = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, universidad, carrera, imagen, descripcion, nuevoColaborador, ColaboradorGuardado;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, universidad = _req$body.universidad, carrera = _req$body.carrera, imagen = _req$body.imagen, descripcion = _req$body.descripcion;
            nuevoColaborador = new _colaborador["default"]({
              nombre: nombre,
              universidad: universidad,
              carrera: carrera,
              imagen: imagen,
              descripcion: descripcion
            });
            _context.next = 4;
            return nuevoColaborador.save();

          case 4:
            ColaboradorGuardado = _context.sent;
            res.status(200).json(ColaboradorGuardado);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registrarColaborador(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.registrarColaborador = registrarColaborador;

var obtenerColaboradores = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var colaboradores;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _colaborador["default"].find();

          case 2:
            colaboradores = _context2.sent;
            res.status(200).json(colaboradores);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function obtenerColaboradores(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.obtenerColaboradores = obtenerColaboradores;

var obtenerColaborador = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _id, colaboradore;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _id = req.params._id;
            _context3.next = 3;
            return _colaborador["default"].findById(_id);

          case 3:
            colaboradore = _context3.sent;
            res.status(200).json(colaboradore);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function obtenerColaborador(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.obtenerColaborador = obtenerColaborador;

var actualizarColaborador = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, nombre, universidad, carrera, imagen, descripcion, myquery, colaboradorActualizar;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, nombre = _req$body2.nombre, universidad = _req$body2.universidad, carrera = _req$body2.carrera, imagen = _req$body2.imagen, descripcion = _req$body2.descripcion;
            myquery = {
              _id: req.params._id
            };
            _context4.next = 4;
            return _colaborador["default"].updateOne(myquery, {
              nombre: nombre,
              universidad: universidad,
              carrera: carrera,
              imagen: imagen,
              descripcion: descripcion
            }, {
              "new": true
            });

          case 4:
            colaboradorActualizar = _context4.sent;
            res.status(200).json({
              message: colaboradorActualizar
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function actualizarColaborador(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.actualizarColaborador = actualizarColaborador;

var eliminarColaborador = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _id, colaborador;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _id = req.params._id;
            _context5.next = 3;
            return _colaborador["default"].findByIdAndRemove(_id);

          case 3:
            colaborador = _context5.sent;
            res.status(200).json(colaborador);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function eliminarColaborador(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.eliminarColaborador = eliminarColaborador;