import { Router } from "express";
const router = Router();

import * as colaboradorCtrl from '../controllers/colaborador.controller'

router.post('/', colaboradorCtrl.registrarColaborador);
router.get('/', colaboradorCtrl.obtenerColaboradores);
router.get('/:_id', colaboradorCtrl.obtenerColaborador);
router.put('/:_id', colaboradorCtrl.actualizarColaborador);
router.delete('/:_id', colaboradorCtrl.eliminarColaborador);


export default router;