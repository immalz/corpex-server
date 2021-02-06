import { Schema, model } from "mongoose";

const ProductoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
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

export default model('Producto', ProductoSchema);