import Usuario from "../models/usuario";


export const obtenerUsuarios = async (req, res) => {
  const colaboradores = await Usuario.find();

  res.status(200).json(colaboradores);
};

export const obtenerUsuario = async (req, res) => {
  const { _id } = req.params;

  const usuario = await Usuario.findById(_id);

  res.status(200).json(usuario);
};

export const actualizarUsuario = async (req, res) => {
  const { 
    usuario,
    correo,
    celular,
    imgURL,
    direccion,
    cod_postal,
    ciudad
    } = req.body;

  const myquery = { _id: req.params._id };

  const usuarioActualizar = await Usuario.updateOne(
    myquery,
    { 
        usuario,
        correo,
        celular,
        imgURL,
        direccion,
        cod_postal,
        ciudad
     },
    {
      new: true,
    }
  );

  res.status(200).json({ message: usuarioActualizar });
};

export const eliminarUsuario = async (req, res) => {
  const { _id } = req.params;

  const usuario = await Usuario.findByIdAndRemove(_id);

  res.status(200).json(usuario);
};
