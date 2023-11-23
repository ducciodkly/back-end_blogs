const express = require("express")
const router = express.Router()

 const simpletableController = require('../app/controllers/simpletablesControllers');


 router.get('/create', simpletableController.create);
 router.post('/store', simpletableController.store);
 router.get('/:id/edit', simpletableController.edit);
 router.put('/:id', simpletableController.update);
 router.patch('/:id/restore', simpletableController.restore);
 router.delete('/:id', simpletableController.destroy);
 router.delete('/:id/force', simpletableController.forceDestroy);
 router.get('/', simpletableController.show);
 


module.exports = router;
