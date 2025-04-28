import React from 'react';
import { Link } from 'react-router-dom'
function Products({products}) {
  return (
    <>
    <div className='container'>
      <div className='header'>
      <h1>Products page</h1>
      <p>Things you didn't know you needed</p>
      </div>
      <div className="products-list">
          {products ? (
            products.map((product) => (
              <Link to={`/products/${product.id}`}>
              <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt="product-image" style={{ maxWidth:"100px", maxHeight:"100px" }}></img>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>{product.category}</p>
              </div>
              </Link>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Products