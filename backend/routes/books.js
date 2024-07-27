const express = require('express');
const router = express.Router();
const { createBook, getBooks, getBookById, addReview } = require('../controllers/bookController');
const { protect } = require('../middlewares/auth');

router.post('/', protect, createBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/:id/reviews', protect, addReview);

module.exports = router;
