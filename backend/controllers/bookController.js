const Book = require('../models/Book');

exports.createBook = async (req, res) => {
  const { title, author, description, content, coverImage } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      description,
      content,
      coverImage,
      verified: false,
      reviews: []
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({ verified: true });
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Libro no encontrado' });

    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const userId = req.user.id;

  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Libro no encontrado' });

    const newReview = {
      user: userId,
      rating,
      comment
    };

    book.reviews.push(newReview);
    await book.save();

    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
