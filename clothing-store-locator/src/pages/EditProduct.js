import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditProduct() {
  const [product, setProduct] = useState({ id: '', name: '', price: '', stock: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to update product
    navigate('/home');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product ID: </label>
          <input
            type="text"
            name="id"
            value={product.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Product Name: </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Stock: </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Product</button>
        <button type="button" onClick={() => navigate('/home')}>Cancel</button>
      </form>
    </div>
  );
}

export default EditProduct;