"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eliminarProyecto = exports.actualizarProyecto = exports.obtenerProyecto = exports.obtenerProyectos = exports.registrarProyecto = void 0;

var _proyecto = _interopRequireDefault(require("../models/proyecto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registrarProyecto = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, imagen, enlace, tecnologias, nuevoProyecto, proyectoGuardado;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, imagen = _req$body.imagen, enlace = _req$body.enlace, tecnologias = _req$body.tecnologias;
            nuevoProyecto = new _proyecto["default"]({
              nombre: nombre,
              descripcion: descripcion,
              imagen: imagen,
              enlace: enlace,
              tecnologias: tecnologias
            });
            _context.next = 4;
            return nuevoProyecto.save();

          case 4:
            proyectoGuardado = _context.sent;
            res.status(200).json(proyectoGuardado);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registrarProyecto(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.registrarProyecto = registrarProyecto;

var obtenerProyectos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var proyectos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _proyecto["default"].find();

          case 2:
            proyectos = _context2.sent;
            res.status(200).json(proyectos);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function obtenerProyectos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.obtenerProyectos = obtenerProyectos;

var obtenerProyecto = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _id, proyecto;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _id = req.params._id;
            _context3.next = 3;
            return _proyecto["default"].findById(_id);

          case 3:
            proyecto = _context3.sent;
            res.status(200).json(proyecto);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function obtenerProyecto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.obtenerProyecto = obtenerProyecto;

var actualizarProyecto = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, nombre, descripcion, imagen, enlace, tecnologias, myquery, proyectoActualizar;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion, imagen = _req$body2.imagen, enlace = _req$body2.enlace, tecnologias = _req$body2.tecnologias;
            myquery = {
              _id: req.params._id
            };
            _context4.next = 4;
            return _proyecto["default"].updateOne(myquery, {
              nombre: nombre,
              descripcion: descripcion,
              imagen: imagen,
              enlace: enlace,
              tecnologias: tecnologias
            }, {
              "new": true
            });

          case 4:
            proyectoActualizar = _context4.sent;
            res.status(200).json({
              message: proyectoActualizar
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function actualizarProyecto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.actualizarProyecto = actualizarProyecto;

var eliminarProyecto = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _id, proyecto;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _id = req.params._id;
            _context5.next = 3;
            return _proyecto["default"].findByIdAndRemove(_id);

          case 3:
            proyecto = _context5.sent;
            res.status(200).json(proyecto);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function eliminarProyecto(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.eliminarProyecto = eliminarProyecto;