import { Schema, model } from "mongoose";

const ColaboradorSchema = new Schema({
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

ColaboradorSchema.plugin(require('mongoose-autopopulate'));

export default model('Colaborador', ColaboradorSchema);