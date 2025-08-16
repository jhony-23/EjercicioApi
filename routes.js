import express from 'express';
import {
    getAllBooks,
    getBookId,
    createBook,
    updateBook,
    deleteBook
} from './bookController.js';

const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBookId);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
export default router;