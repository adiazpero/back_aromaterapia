const router = require('express').Router();
const Categoria = require('../../models/categoria');


/* En 

api.js hacemos referencia a la ruta, por lo que aqui solo pondriamos '/' */


//GET http://localhost:3000/api/categorias
router.get('/:id', async(req, res) => {
    const categoria = await Categoria.getCategoria(req.params['idAceites']);
    res.json(categoria)
})







module.exports = router;