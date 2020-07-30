const router = require('express').Router();
const Post = require('../../models/post');



//GET http://localhost:3000/api/posts
router.get('/', async(req, res) => {
    const rows = await Post.getAll();
    res.json(rows);
});


//GET http://localhost:3000/api/posts/id
router.get('/:postId', async(req, res) => {
    const post = await Post.getById(req.params.postId);
    res.json(post);
});




module.exports = router;