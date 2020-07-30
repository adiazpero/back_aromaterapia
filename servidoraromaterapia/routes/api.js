const router = require('express').Router();
const apiPostsRouter = require('./api/posts');
const apiAceitesRouter = require('./api/aceites');
const apiCategoriasRouter = require('./api/categorias');








router.use('/posts', apiPostsRouter);
router.use('/aceites', apiAceitesRouter);
router.use('/categorias', apiCategoriasRouter);


module.exports = router;