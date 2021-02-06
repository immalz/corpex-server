import { Schema, model } from "mongoose";

const ProyectoSchema = new Schema({
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

export default model('Proyecto', ProyectoSchema);