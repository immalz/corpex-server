import Proyecto from "../models/proyecto";

export const registrarProyecto = async (req, res) => {
     const { nombre, descripcion, imagen, enlace, tecnologias } = req.body;
    const nuevoProyecto = new Proyecto({
       nombre, descripcion, imagen, enlace, tecnologias
    })

    const proyectoGuardado = await nuevoProyecto.save();

    res.status(200).json(proyectoGuardado);
};

export const obtenerProyectos = async (req, res) => {
  const proyectos = await Proyecto.find();

  res.status(200).json(proyectos);
};

export const obtenerProyecto = async (req, res) => {
  const { _id } = req.params;

  const proyecto = await Proyecto.findById(_id);

  res.status(200).json(proyecto);
};

export const actualizarProyecto = async (req, res) => {
    const { nombre, descripcion, imagen, enlace, tecnologias } = req.body;

    const myquery = { _id: req.params._id };

    const proyectoActualizar = await Proyecto.updateOne(myquery, { nombre, descripcion, imagen, enlace, tecnologias }, {
        new: true
    })

    res.status(200).json({ message: proyectoActualizar })
};

export const eliminarProyecto = async (req, res) => {
  const { _id } = req.params;

  const proyecto = await Proyecto.findByIdAndRemove(_id);

  res.status(200).json(proyecto);
};
