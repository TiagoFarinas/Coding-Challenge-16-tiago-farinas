//Task 2 - Create the App Component
import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', description: 'A high-performance laptop.' },
    { id: 2, name: 'Headphones', price: '$199', description: 'Noise-canceling headphones.' },]);
// Task 7 - Pass Data Between Components
const addProduct = (product) => {
  const newProduct = {
    id: products.length + 1, // Assign a unique id based on the current list size
    ...product,
  };
  setProducts([...products, newProduct]); // Update the product list
};
return (
  <div>
    <h1>Product Dashboard</h1>
    {/* Pass product list to ProductList */}
    <ProductList products={products} />
    {/* Pass addProduct function to AddProductForm */}
    <AddProductForm addProduct={addProduct} />
  </div>
)};
export default App;
//Task 5 - Implement Keys in the ProductList Component
// Done previously