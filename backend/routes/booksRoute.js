import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for saving a new book
router.post('/', async (request, response) => {
    try {
        const { title, author, publishYear } = request.body;

        if (!title || !author || !publishYear) {
            return response.status(400).json({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const newBook = {
            title,
            author,
            publishYear,
        };

        const book = await Book.create(newBook);

        return response.status(201).json(book);
    } catch (error) {
        console.error(error.message);
        return response.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting all books from the database
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.error(error.message);
        return response.status(500).json({ message: 'Internal server error' });
    }
});

// Route for getting one book from the database by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const book = await Book.findById(id);

        if (!book) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).json(book);
    } catch (error) {
        console.error(error.message);
        return response.status(500).json({ message: 'Internal server error' });
    }
});

// Route for updating a book
router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).json({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const result = await Book.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).json({ message: 'Book updated successfully', data: result });
    } catch (error) {
        console.error(error.message);
        return response.status(500).json({ message: 'Internal server error' });
    }
});

// Route for deleting a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found' });
        }

        return response.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error.message);
        return response.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
