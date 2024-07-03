import React, { useState } from 'react';
import './Category.css';

const Category = () => {
  const books = [
    { title: "Rich Dad Poor Dad", category: "Fiction", price: 99, publicationDate: "1997" },
    { title: "The Art OF thinking", category: "Non-Fiction", price: 79, publicationDate: "7 September 2019" },
    { title: "Iki Gai", category: "Romance", price: 59, publicationDate: "29 August 2017" },
    { title: "The Adventures of Tom Sawyer", category: "Fantasy", price: 199, publicationDate: "June 1876" },
    { title: "When-it-Rains", category: "Mystery", price: 69, publicationDate: "10 October 2013" },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  let filteredBooks = books.filter(book => {
    return selectedCategory === 'All' || book.category === selectedCategory;
  });

  switch (sortOrder) {
    case 'price-low':
      filteredBooks.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredBooks.sort((a, b) => b.price - a.price);
      break;
    case 'date-new':
      filteredBooks.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
      break;
    case 'date-old':
      filteredBooks.sort((a, b) => new Date(a.publicationDate) - new Date(b.publicationDate));
      break;
    default:
      break;
  }

  return (
    <div className="category-container">
      <div className="dropdown-container">
        <label htmlFor="category" className="dropdown-label">Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="dropdown-select">
          <option value="All">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
        </select>
      </div>
      <div className="dropdown-container">
        <label htmlFor="sort" className="dropdown-label">Sort By:</label>
        <select id="sort" value={sortOrder} onChange={handleSortChange} className="dropdown-select">
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="date-new">Publication Date: New to Old</option>
          <option value="date-old">Publication Date: Old to New</option>
        </select>
      </div>
      <div className="books-list">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-card">
            <div className="book-card-content">
              <p><strong>Title:</strong> {book.title}</p>
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>Price:</strong> ${book.price}</p>
              <p><strong>Publication Date:</strong> {book.publicationDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
