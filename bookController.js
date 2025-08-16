import books from "./database.js";
import { v4 as uuidv4 } from 'uuid';

let nextId = 1;

function getAllBooks(req, res) {
    res.json(books);
}

function getBookId(req, res) {
    const id = req.params.id;
    const book = books.find(b => b.id === id);
    if (book) {
        res.json(book);
    } else {
        res.json({ message: "No encontrado" });
    }
}

function createBook(req, res) {
    const body = req.body;


    const book = {
        id: uuidv4(),
        title: body.title,
        author: body.author,
        year: body.year
    }
    books.push(book);
    res.json(book);
}

function updateBook(req, res) {
    const id = req.params.id;
    const body = req.body;
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
        books[index] = { id, ...body };
        res.json(books[index]);
    } else {
        res.json({ message: "No encontrado" });
    }
}

function deleteBook(req, res) {
    const id = req.params.id;
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
        const deleted = books.splice(index, 1)[0];
        res.json({ message: "Eliminado", book: deleted });
    } else {
        res.json({ message: "No encontrado" });
    }
}

export {
    getAllBooks,
    getBookId,
    createBook,
    updateBook,
    deleteBook
};