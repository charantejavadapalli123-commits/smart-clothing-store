import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import {
  deleteDoc,
  doc,
} from "firebase/firestore";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(data);
  };
const deleteProduct = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this product?"
  );

  if (!confirmDelete) {
    return;
  }

  await deleteDoc(doc(db, "products", id));

  fetchProducts();
};
  const filteredProducts = products.filter((product) => {
    const searchableText = `
      ${product.productName}
      ${product.category}
      ${product.gender}
      ${product.age}
      ${product.brand}
      ${product.size}
      ${product.shelf}
    `.toLowerCase();

const keywords = search.toLowerCase().trim().split(/\s+/);

    return keywords.every((word) => searchableText.includes(word));
  });


  return (
    
    <div>
        <Navbar />
      <h1>Smart Clothing Store Locator</h1>
      <div className="dashboard">

<div className="card">
<h3>Total Products</h3>
<h1>{products.length}</h1>
</div>

<div className="card">
<h3>Low Stock</h3>

<h1>
{
products.filter((item)=>Number(item.stock)<=5).length
}
</h1>

</div>

<div className="card">
<h3>Categories</h3>

<h1>
{
new Set(products.map(item=>item.category)).size
}
</h1>

</div>

</div>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredProducts.length === 0 ? (
  <h2 style={{textAlign:"center"}}>No Products Found</h2>
) : (
  <div className="products-grid">
    {filteredProducts.map((product) => (
     <ProductCard
  key={product.id}
  product={product}
  deleteProduct={deleteProduct}
/>
    ))}
  </div>
)}



    </div>
    

  );
}

export default Home;