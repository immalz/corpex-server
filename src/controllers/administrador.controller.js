import Producto from '../models/producto';
import Usuario from '../models/usuario';
import Proyecto from '../models/proyecto';
import Colaborador from '../models/colaborador';
import Administrador from '../models/administrador';
import Comentario from '../models/comentario';


export const obtenerDatosGenerales = async (req, res) => {
  const Productos = await Producto.countDocuments();
  const Usuarios = await Usuario.countDocuments();
  const Proyectos = await Proyecto.countDocuments();
  const Colaboradores = await Colaborador.countDocuments();
  const Administradores = await Administrador.countDocuments();
  const Comentarios = await Comentario.countDocuments();

  const DatosGenerales = [
  {titulo: 'Productos', cantidad: Productos },
  {titulo: 'Usuarios', cantidad: Usuarios },
  {titulo: 'Proyectos', cantidad: Proyectos },
  {titulo: 'Colaboradores', cantidad: Colaboradores },
  {titulo: 'Administradores', cantidad: Administradores },
  {titulo: 'Comentarios', cantidad: Comentarios },
  ]

  res.status(200).json(DatosGenerales);
};