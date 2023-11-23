const searchAdv = require('../models/extrafields');
const { multipleMongooseToObject } = require('../../util/moongoose');
const { mongooseToObject } = require('../../util/moongoose');



class searchAdvancedController{

    // [GET] /courses/:slug
    show(req, res, next) {
        searchAdv.find({})
        .then(searchAdvs => 
            res.render('components/form_advanceds',{
            searchAdvs: multipleMongooseToObject(searchAdvs)
        })) 
        .catch(next);

        
        // Datatable.find({})
        // .then(datatables => res.json(datatables))
        // .catch(error => next(error))

    }

    // [GET] /courses/create   
    create(req, res, next) {
            res.render('components/createAdv')
    }
     // [POST] /datatables/store
    store(req, res, next) {
        const formData = {...req.body};
        searchAdv.create(formData)
            .then(() => {
                res.redirect('/')
            })
            .catch(next);
    }


    // [GET] /datatables/:id/edit
    edit(req, res, next) {
        searchAdv.findById({_id:req.params.id})
        .then(searchAdvs => {res.render('components/editAdv',{
            searchAdvs: mongooseToObject(searchAdvs)
        })
    })
        .catch(next)
    }

    // [PUT] /datatables/:id
    update(req, res, next) {
        searchAdv.updateOne({_id:req.params.id},req.body)
        .then(() => res.redirect('/search-advanced'))
        .catch(next)
    }


    // [DELETE] /datatables/:id
    destroy(req, res, next) {
        searchAdv.deleteOne({_id:req.params.id})
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
        searchAdv.restore({_id:req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

}


module.exports = new searchAdvancedController();