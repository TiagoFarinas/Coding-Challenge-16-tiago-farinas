//Task 3 -Create the ProductList Component
import React from 'react';
import ProductItem from './ProductItem';
function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>)};
export default ProductList;
//Task 5 - Implement Keys in the ProductList Component
// Done previously
