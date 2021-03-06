"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ProductoSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  carrera: {
    type: String,
    required: true
  },
  universidad: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});
ProductoSchema.plugin(require('mongoose-autopopulate'));

var _default = (0, _mongoose.model)('Producto', ProductoSchema);

exports["default"] = _default;