const express = require("express")
const router = express.Router()

 const datatableController = require('../app/controllers/datatableControllers');


 router.get('/create', datatableController.create);
 router.post('/store', datatableController.store);
 router.get('/:id/edit', datatableController.edit);
 router.put('/:id', datatableController.update);
 router.patch('/:id/restore', datatableController.restore);
 router.delete('/:id', datatableController.destroy);
//  router.delete('/:id/force', datatableController.forceDestroy);
 router.get('/', datatableController.show);
 


module.exports = router;
