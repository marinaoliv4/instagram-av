const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

/* GET users listing. */
router.get('/', usuariosController.index);

router.post('/', usuariosController.create);

//especificar por id
router.put('/:id', usuariosController.update);

router.delete('/:id', usuariosController.delete);



module.exports = router;
