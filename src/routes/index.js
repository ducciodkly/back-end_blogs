const coursesRouter = require('./courses')
const datatableRouter = require('./datatable')
const simpletableRouter = require('./simple-tables')
const searchBasicRouter = require('./search_basic')
const searchAdvancedRouter = require('./search_advanced')
const sizeImage = require('./resize')
function route(app)
{

    // app.use('/resize',sizeImage)
    app.use('/search-advanced',searchAdvancedRouter)
    app.use('/search-basic',searchBasicRouter)
    app.use('/simple-tables',simpletableRouter)
    app.use('/datatable',datatableRouter)
    app.use('/', coursesRouter)
    

}


module.exports = route