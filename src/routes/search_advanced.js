const express = require("express")
const router = express.Router()

 const searchAdvancedController = require('../app/controllers/searchAdvancedControllers');

 router.get('/create', searchAdvancedController.create);
 router.post('/store', searchAdvancedController.store);
 router.get('/:id/edit', searchAdvancedController.edit);
 router.put('/:id', searchAdvancedController.update);
 router.patch('/:id/restore', searchAdvancedController.restore);
 router.delete('/:id', searchAdvancedController.destroy);
//  router.delete('/:id/force', datatableController.forceDestroy);
 router.get('/', searchAdvancedController.show);
 


module.exports = router;
