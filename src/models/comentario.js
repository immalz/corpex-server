import { Schema, model } from "mongoose";

const ComentarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    descripcion2: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

ComentarioSchema.plugin(require('mongoose-autopopulate'));

export default model('Comentario', ComentarioSchema);