import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loader/Loader';
import defaultBookCover from '../../images/cover_not_found.jpg';
import './BooksByGenre.css';

const URL = "https://openlibrary.org/subjects/";

const BooksByGenre = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('science_fiction');
  const [error, setError] = useState(null); // State for error handling

  const genres = [
    'science_fiction',
    'fantasy',
    'mystery',
    'romance',
    'horror',
    'biography',
  ];

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}${selectedGenre}.json?limit=50`);
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        if (data && data.works && Array.isArray(data.works)) {
          const booksWithDetails = await Promise.all(data.works.map(async (work) => {
            const detailsResponse = await fetch(`https://openlibrary.org${work.key}.json`);
            if (!detailsResponse.ok) {
              throw new Error('Failed to fetch book details');
            }
            const detailsData = await detailsResponse.json();
            
            const authors = detailsData.authors ? detailsData.authors.map(author => author.name) : [];

            return {
              key: work.key,
              title: detailsData.title,
              authors: authors,
              cover_img: detailsData.covers ? `https://covers.openlibrary.org/b/id/${detailsData.covers[0]}-L.jpg` : defaultBookCover,
            };
          }));
          setBooks(booksWithDetails);
          setError(null); // Clear any previous errors
        } else {
          setBooks([]);
          setError('No books found for this genre');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
        setBooks([]);
        setError('Failed to fetch books. Please try again later.');
      }
    };

    fetchBooks();
  }, [selectedGenre]);

  if (loading) return <Loading />;

  return (
    <div className="books-container">
      <h1 className="books-title">Books Sorted by Genre</h1>
      <div className="genre-selector">
        <label htmlFor="genre">Select Genre: </label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="genre-dropdown"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="error-message">{error}</p>} {/* Display error message if there's an error */}
      <div className="books-list">
        {books.map((book) => (
          <Link key={book.key} to={`/book/${book.key}`} className="book-link">
            <div className="book-card">
              <img
                src={book.cover_img}
                alt="Book Cover"
                className="book-cover"
              />
              <div className="book-details">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-authors">Authors: {book.authors.join(', ')}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksByGenre;
