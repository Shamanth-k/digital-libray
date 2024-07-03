import React, { useState } from 'react';
import BookForm from './BookForm'; // Adjust the path as per your project structure

const AdminDashboard = () => {
  const handleAddBook = (newBook) => {
    // Implement your logic here to add the new book
    console.log('Adding book:', newBook);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default AdminDashboard;
