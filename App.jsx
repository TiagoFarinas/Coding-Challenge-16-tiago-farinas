//Task 2 - Create the App Component
import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', description: 'A high-performance laptop.' },
    { id: 2, name: 'Headphones', price: '$199', description: 'Noise-canceling headphones.' },]);
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }])};
  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm onAddProduct={addProduct} />
    </div>)};
export default App;
