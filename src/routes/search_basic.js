const express = require("express")
const router = express.Router()

 const searchBasicController = require('../app/controllers/seachBasicControllers');


 router.get('/create', searchBasicController.create);
 router.post('/store', searchBasicController.store);
 router.get('/:id/edit', searchBasicController.edit);
 router.put('/:id', searchBasicController.update);
 router.patch('/:id/restore', searchBasicController.restore);
 router.delete('/:id', searchBasicController.destroy);
//  router.delete('/:id/force', datatableController.forceDestroy);
router.get('/:slug', searchBasicController.show);
router.get('/', searchBasicController.index);
 


module.exports = router;
