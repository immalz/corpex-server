import { Router } from "express";
const router = Router();

import * as adminCtrl from '../controllers/administrador.controller'


router.get('/contar', adminCtrl.obtenerDatosGenerales);


export default router;