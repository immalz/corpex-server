import User from "../models/usuario";
import Admin from "../models/administrador";
import jwt from "jsonwebtoken";
import config from '../config';
import Role from '../models/Role'

export const signUp = async(req, res) => {
    const { usuario, correo, contraseña, roles } = req.body;
    const newUser = new User({
        usuario,
        correo,
        contraseña: await User.encryptPassword(contraseña)
    })

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: "user" });
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    console.log(savedUser);
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400 // 24 horas
    });
    res.status(200).json({ token });

}

export const signIn = async(req, res) => {
    const userFound = await (await User.findOne({ usuario: req.body.usuario }))

    if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

    const matchPassword = await User.comparePassword(req.body.contraseña, userFound.contraseña);

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Contraseña invalida' })

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
        expiresIn: 86400
    })

    res.json({ token, userFound });
}

/*---------------------------------------------------------*/


export const signUpAdmin = async(req, res) => {
    const { usuario, correo, contraseña, roles } = req.body;
    const newAdmin = new Admin({
        usuario,
        correo,
        contraseña: await Admin.encryptPassword(contraseña)
    })

    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newAdmin.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: "admin" });
        newAdmin.roles = [role._id];
    }

    const savedAdmin = await newAdmin.save();
    console.log(savedAdmin);
    const token = jwt.sign({ id: savedAdmin._id }, config.SECRET, {
        expiresIn: 86400 // 24 horas
    });
    res.status(200).json({ token });

}

export const signInAdmin = async(req, res) => {
    const adminFound = await (await Admin.findOne({ usuario: req.body.usuario }))

    if (!adminFound) return res.status(400).json({ message: "Administrador no encontrado" });

    const matchPassword = await Admin.comparePassword(req.body.contraseña, adminFound.contraseña);

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Contraseña invalida' })

    const token = jwt.sign({ id: adminFound._id }, config.SECRET, {
        expiresIn: 86400
    })

    res.json({ token, adminFound });
}