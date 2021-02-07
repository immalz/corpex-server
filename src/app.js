require("regenerator-runtime/runtime");
import "@babel/polyfill";
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import pkg from '../package.json';

import authRoutes from './routes/auth.routes';
import proyectoRoutes from './routes/proyecto.routes';
import usuarioRoutes from './routes/usuario.routes';
import administradorRoutes from './routes/administrador.routes';
import colaboradorRoutes from './routes/colaborador.routes';

import { createRoles } from './libs/initialSetup'

const app = express();
createRoles();

app.set('pkg', pkg);

//cambiar la configuracion cors para produccion
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use('/uploads', express.static(path.resolve('uploads')));

app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        scripts: app.get('pkg').scripts
    });
})

app.use('/api/auth', authRoutes);
app.use('/api/admin', administradorRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/colaboradores', colaboradorRoutes);

export default app;