import { Router } from "express";
const router = Router();

import * as proyectoCtrl from '../controllers/proyecto.controller'


router.post('/', proyectoCtrl.registrarProyecto);
router.get('/', proyectoCtrl.obtenerProyectos);
router.get('/:_id', proyectoCtrl.obtenerProyecto);
router.put('/:_id', proyectoCtrl.actualizarProyecto);
router.delete('/:_id', proyectoCtrl.eliminarProyecto);


export default router;