import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import api from '../services/api';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await api.get('/books');
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Libros Disponibles</h1>
      <BookList books={books} />
    </div>
  );
};

export default Home;
