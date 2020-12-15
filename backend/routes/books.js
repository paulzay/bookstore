const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const bookCtrl = require('../controllers/book');

router.post('/book', bookCtrl.createBook);
router.get('/books', bookCtrl.getAllBooks);
router.get('/book/:id', bookCtrl.getOneBook);
router.put('/book/:id', auth, bookCtrl.modifyBook);
router.delete('/book/:id', auth, bookCtrl.delBook);

module.exports = router;
