"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var ProyectoSchema = new _mongoose.Schema({
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
  enlace: {
    type: String,
    required: true
  },
  tecnologias: {
    type: Array
  }
}, {
  timestamps: true,
  versionKey: false
});
ProyectoSchema.plugin(require('mongoose-autopopulate'));

var _default = (0, _mongoose.model)('Proyecto', ProyectoSchema);

exports["default"] = _default;