import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [product, setProduct] = useState({ name: '', price: '', stock: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to save product
    navigate('/home');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Add Product</button>
        <button type="button" onClick={() => navigate('/home')}>Cancel</button>
      </form>
    </div>
  );
}

export default AddProduct;