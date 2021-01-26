import { ROLES } from '../models/Role'
import User from '../models/usuario'

export const checkDuplicatedUsernameOrEmail = async(req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.usuario })
        if (user) return res.status(400).json({ message: 'El usuario ya existe' });

        const email = await User.findOne({ email: req.body.correo })
        if (email) return res.status(400).json({ message: 'El correo ya existe' });

        next();
    } catch (error) {
        res.status(500).json({ mesasge: error });
    }
}


export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `El rol ${req.body.roles[i]} no existe`,
                });
            }
        }
    }
    next();
};