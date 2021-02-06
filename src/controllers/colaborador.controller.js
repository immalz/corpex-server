import Colaborador from "../models/colaborador";

export const registrarColaborador = async (req, res) => {
  const { nombre, universidad, carrera, imagen, descripcion } = req.body;
  const nuevoColaborador = new Colaborador({
    nombre,
    universidad,
    carrera,
    imagen,
    descripcion,
  });

  const ColaboradorGuardado = await nuevoColaborador.save();

  res.status(200).json(ColaboradorGuardado);
};

export const obtenerColaboradores = async (req, res) => {
  const colaboradores = await Colaborador.find();

  res.status(200).json(colaboradores);
};

export const obtenerColaborador = async (req, res) => {
  const { _id } = req.params;

  const colaboradore = await Colaborador.findById(_id);

  res.status(200).json(colaboradore);
};

export const actualizarColaborador = async (req, res) => {
  const { nombre, universidad, carrera, imagen, descripcion } = req.body;

  const myquery = { _id: req.params._id };

  const colaboradorActualizar = await Colaborador.updateOne(
    myquery,
    { nombre, universidad, carrera, imagen, descripcion },
    {
      new: true,
    }
  );

  res.status(200).json({ message: colaboradorActualizar });
};

export const eliminarColaborador = async (req, res) => {
  const { _id } = req.params;

  const colaborador = await Colaborador.findByIdAndRemove(_id);

  res.status(200).json(colaborador); BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    privModule,
    PublicModule,
    SharedModule,
    MaterialModule
};
