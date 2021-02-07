import Producto from "../models/producto";

export const registrarProducto = async (req, res) => {
  const {
    nombre,
    precio,
    descripcion,
    titulodescripcion,
    imagen,
    enlace,
  } = req.body;
  const nuevoProducto = new Producto({
    nombre,
    precio,
    descripcion,
    titulodescripcion,
    imagen,
    enlace,
  });

  const ProductoGuardado = await nuevoProducto.save();

  res.status(200).json(ProductoGuardado);
};

export const obtenerProductos = async (req, res) => {
  const productos = await Producto.find();

  res.status(200).json(productos);
};

export const obtenerProducto = async (req, res) => {
  const { _id } = req.params;

  const productos = await Producto.findById(_id);

  res.status(200).json(productos);
};

export const actualizarProducto = async (req, res) => {
  const {
    nombre,
    precio,
    descripcion,
    titulodescripcion,
    imagen,
    enlace,
  } = req.body;

  const myquery = { _id: req.params._id };

  const productoActualizar = await Producto.updateOne(
    myquery,
    { nombre, precio, descripcion, titulodescripcion, imagen, enlace },
    {
      new: true,
    }
  );

  res.status(200).json({ message: productoActualizar });
};

export const eliminarProducto = async (req, res) => {
  const { _id } = req.params;

  const ProductoEliminado = await Producto.findByIdAndRemove(_id);

  res.status(200).json({ message: "Se elimino correctamente" });
};
