import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Home</h1>
      <p>Welcome to the Clothing Store Locator</p>
      <button onClick={() => navigate('/add')}>Add Product</button>
      <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
}

export default Home;