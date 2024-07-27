import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  return (
    <div>
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <Link to={`/books/${book._id}`}>Leer Más</Link>
    </div>
  );
};

export default BookItem;
