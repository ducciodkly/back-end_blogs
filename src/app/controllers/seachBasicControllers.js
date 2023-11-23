const searchBasic = require('../models/fields');
const { multipleMongooseToObject } = require('../../util/moongoose');
const { mongooseToObject } = require('../../util/moongoose');



class searchBasicController{

    // [GET] /search-basic
    index(req, res, next) {
        searchBasic.find({})
            .then(searchBasics => 
            res.render('components/form_basics',{
            searchBasics: multipleMongooseToObject(searchBasics)
            })
        ) 
        .catch(next);

        
        // SearchBasic.find({})
        // .then(SearchBasics => res.json(SearchBasics))
        // .catch(error => next(error))

    }
    show(req, res, next) {
        
        //   SearchBasic.findOne({ slug: req.params.slug })
        //     .then((SearchBasics) => {
        //         res.render('components/form_basics', {
        //             SearchBasics: mongooseToObject(SearchBasics),
        //         });
        //     })
        //     .catch(next);
    }

    // [GET] /search-basic/create   
    create(req, res, next) {
        res.render('components/createTopic')
    }
     // [POST] /search-basic/store
    store(req, res, next) {
        const formData = {...req.body};
        searchBasic.create(formData)
            .then(() => {
                res.redirect('/')
            })
            .catch(next);
    }

    // [GET] /search-basic/:id/edit
    edit(req, res, next) {
        searchBasic.findById({_id:req.params.id})
        .then(searchBasics => {res.render('components/editTopic',{
            searchBasics: mongooseToObject(searchBasics)
        })
    })
        .catch(next)
    }

    // [PUT] /search-basic/:id
    update(req, res, next) {
        searchBasic.updateOne({_id:req.params.id},req.body)
        .then(() => res.redirect('/search-basic'))
        .catch(next)
    }


    // [DELETE] /search-basic/:id
    destroy(req, res, next) {
        searchBasic.deleteOne({_id:req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }
    // [DELETE] /search-basic/:id/force
    // forceDestroy(req, res, next) {
    //     Datatable.deleteOne({_id:req.params.id})
    //     .then(() => res.redirect('back'))
    //     .catch(next)
    // }
    // [PATCH] /search-basic/:id/restore
    restore(req, res, next) {
        searchBasic.restore({_id:req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

}


module.exports = new searchBasicController();