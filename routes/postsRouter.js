const express = require('express');
const postsController = require('../controllers/postsController');
const router = express.Router();

/* GET users listing. */
router.get('/', postsController.index);
router.post('/', postsController.create);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.delete);
router.get('/:usuarios_id', postsController.show);

module.exports = router;