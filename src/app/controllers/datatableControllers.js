const Datatable = require('../models/user');
const { multipleMongooseToObject } = require('../../util/moongoose');
const { mongooseToObject } = require('../../util/moongoose');



class dataController{

    // [GET] /courses/:slug
    show(req, res, next) {
        Datatable.find({})
        .then(datatables => 
            res.render('tabledata/datatables',{
            datatables: multipleMongooseToObject(datatables)
        })) 
        .catch(next);

        
        // Datatable.find({})
        // .then(datatables => res.json(datatables))
        // .catch(error => next(error))

    }

    // [GET] /courses/create   
    create(req, res, next) {
        // Datatable.find({})
        //     .then(datatables => res.render('tabledata/datatables',{
        //         datatables: multipleMongooseToObject(datatables)
        //     })) 
        //     .catch(next);
    }
     // [POST] /datatables/store
    store(req, res, next) {
        const formData = {...req.body};
        Datatable.create(formData)
            .then(() => {
                res.redirect('/')
            })
            .catch(next);
    }


    // [GET] /datatables/:id/edit
    edit(req, res, next) {
        Datatable.findById({_id:req.params.id})
        .then(datatables => {res.render('tabledata/edit',{
            datatables: mongooseToObject(datatables)
        })
    })
        .catch(next)
    }

    // [PUT] /datatables/:id
    update(req, res, next) {
        Datatable.updateOne({_id:req.params.id},req.body)
        .then(() => res.redirect('/datatable'))
        .catch(next)
    }


    // [DELETE] /datatables/:id
    destroy(req, res, next) {
        Datatable.deleteOne({_id:req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }
    // [DELETE] /datatables/:id/force
    // forceDestroy(req, res, next) {
    //     Datatable.deleteOne({_id:req.params.id})
    //     .then(() => res.redirect('back'))
    //     .catch(next)
    // }
    // [PATCH] /datatables/:id/restore
    restore(req, res, next) {
        Datatable.restore({_id:req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

}


module.exports = new dataController();