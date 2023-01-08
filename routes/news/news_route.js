const express = require('express');
const router = express.Router();
const NewsController = require('../../controller/news/news_controller');

// POST NEWS
router.post('/', NewsController.postNews);

// GET NEWS
router.get('/', NewsController.getNews);

router.put('/:id', NewsController.viewNews);
router.put('/favorite/:id', NewsController.likeNews);


module.exports = router;