import react from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './index.css'

function ProductDetails() {
  const API_URL = import.meta.env.VITE_PRODUCTS_API_URL;
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
    .catch(err => console.error(err))
  }, [id]);
  return (
    <>
    <div className="container">
      <div className='product'>
        <div className='thumbnail'>
        {product ? 
        (
        <img src={product.thumbnail}></img>
        )
        :
        (<li>Loading...</li>)}
        </div>
        <div className='product-details'>
          <ul>
            {product ? 
            (
              <>
              <li>{product.description}</li>
              </>
            )
            :
            (<li>Loading...</li>)
          }
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails