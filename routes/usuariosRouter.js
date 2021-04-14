const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();
const validarCadastro = require('../middlewares/ValidarCadastro')

/* GET users listing. */
router.get('/', usuariosController.index);
//validarCadastro está como middleware
router.post('/', validarCadastro, usuariosController.create);
//especificar por id
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.delete);



module.exports = router;
