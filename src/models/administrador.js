import { Schema, model } from "mongoose";

import bcrypt from 'bcryptjs';

const AdminSchema = new Schema({
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
    contraseña: {
        type: String,
        required: true
    },
    imgURL: {
        type: String
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId,
        autopopulate: true
    }]
}, {
    timestamps: true,
    versionKey: false
});

AdminSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

AdminSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

AdminSchema.plugin(require('mongoose-autopopulate'));

export default model('Administrador', AdminSchema);