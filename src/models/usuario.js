import { Schema, model } from "mongoose";

import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    correo: {
        type: String,
        unique: true,
        required: true,
    },
    celular: {
        type: Number
    },
    contraseña: {
        type: String,
        required: true
    },
    imgURL: {
        type: String
    },
    direccion: {
        type: String
    },
    cod_postal: {
        type: Number
    },
    ciudad: {
        type: String
    },
    // carrito: [{
    //     ref: "Cart",
    //     type: Schema.Types.ObjectId
    // }],
    // historial: [{
    //     ref: "Historial",
    //     type: Schema.Types.ObjectId,
    //     autopopulate: true
    // }],
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId,
        autopopulate: true
    }]
}, {
    timestamps: true,
    versionKey: false
});

UserSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UserSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

UserSchema.plugin(require('mongoose-autopopulate'));

export default model('User', UserSchema);