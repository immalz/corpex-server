import { Schema, model } from "mongoose";

const ProductoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
    },
    titulodescripcion: {
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
    }
}, {
    timestamps: true,
    versionKey: false
});


ProductoSchema.plugin(require('mongoose-autopopulate'));

export default model('Producto', ProductoSchema);