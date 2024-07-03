import React, { useState } from 'react';
// import MyBooks from './MyBooks';
import './BookForm.css'; // Import CSS file for styling

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [coverImage, setCoverImage] = useState(null); // State to store the selected cover image file
  const [books, setBooks] = useState([]); // State to store multiple books

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !category || !price || !publicationDate || !coverImage) {
      alert('Please fill in all fields.');
      return;
    }

    // Prepare FormData to send both text data and file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('price', parseFloat(price));
    formData.append('publicationDate', publicationDate);
    formData.append('coverImage', coverImage);

    // Simulate adding book (replace with actual API call in real application)
    const newBook = {
      title,
      category,
      price: parseFloat(price),
      publicationDate,
      coverImageURL: URL.createObjectURL(coverImage), // Create URL for the selected cover image
    };

    // Update state to add the new book to books array
    setBooks([...books, newBook]);

    // Call the onAddBook function passed from parent component with FormData
    onAddBook(formData);

    // Clear form fields after submission
    setTitle('');
    setCategory('');
    setPrice('');
    setPublicationDate('');
    setCoverImage(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">Company Logo</div>
        <ul className="nav-links">
          <li><a href="MyBooks.jsx">MyBooks</a></li>
          <li><a href="/about">Add Books</a></li>
          <li><a href="/services">Delete Books</a></li>
          <li><a href="/contact">Log Out</a></li>
          <li><a href="/contact">&nbsp;&nbsp;</a></li>
        </ul>
      </nav>

      <form onSubmit={handleSubmit} className="book-form">
        <label htmlFor="title" className="form-label">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          required
        />

        <label htmlFor="category" className="form-label">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input"
          required
        />

        <label htmlFor="price" className="form-label">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-input"
          required
        />

        <label htmlFor="publicationDate" className="form-label">Publication Date:</label>
        <input
          type="text"
          id="publicationDate"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
          className="form-input"
          placeholder="Format: DD/MM/YYYY"
          required
        />

        <label htmlFor="coverImage" className="form-label">Cover Image:</label>
        <input
          type="file"
          id="coverImage"
          onChange={handleFileChange}
          className="form-input"
          accept=".jpg, .jpeg, .png"
          required
        />

        <button type="submit" className="submit-button">Add Book</button>
      </form>

      {/* Render multiple books */}
      <div className="books-container">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h2>{book.title}</h2>
            <p>Category: {book.category}</p>
            <p>Price: ${book.price.toFixed(2)}</p>
            <p>Publication Date: {book.publicationDate}</p>
            <img src={book.coverImageURL} alt={book.title} className="book-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookForm;
