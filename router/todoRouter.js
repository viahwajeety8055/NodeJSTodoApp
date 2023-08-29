const express = require("express");
const router = express.Router();
const postController = require('../controller/todoController')

router.get('/all', postController.getAll);
router.get('/:id', postController.getById);
router.post('/create', postController.create);
router.put('/update/:id',postController.update);
router.delete('/delete/:id',postController.delete);

module.exports = router;