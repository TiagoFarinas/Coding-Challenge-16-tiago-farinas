//Task 6 - Create the AddProductForm Component
import React, { useState } from 'react';
function AddProductForm({ addProduct }) {// State form inputs
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {// Handles form submission
    e.preventDefault(); // Prevents page reload
    addProduct({ // Calls addProduct function passed from App component
      id: Date.now(), // Unique id for new product
      name,
      price,
      description, });
    setName('');// Resets form fields
    setPrice('');
    setDescription('')};
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Add Product</button>
    </form>)};
export default AddProductForm;
