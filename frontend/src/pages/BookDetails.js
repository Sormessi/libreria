import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

const BookDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      const response = await api.get(`/books/${id}`);
      setBook(response.data);
    };

    fetchBook();
  }, [id]);

  const submitReview = async () => {
    await api.post(`/books/${id}/reviews`, { rating, comment });
    const response = await api.get(`/books/${id}`);
    setBook(response.data);
  };

  return (
    <div>
      {book && (
        <>
          <img src={book.coverImage} alt={book.title} />
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          <h2>Reseñas</h2>
          {book.reviews.map(review => (
            <div key={review._id}>
              <strong>{review.user.displayName}</strong>
              <p>{review.comment}</p>
              <p>Rating: {review.rating}</p>
            </div>
          ))}
          {user && (
            <div>
              <h3>Añadir Reseña</h3>
              <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} max="5" min="1" />
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
              <button onClick={submitReview}>Enviar</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookDetails;
