import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

function AddProduct() {
  const [product, setProduct] = useState({
    productName: "",
    category: "",
    gender: "",
    age: "",
    brand: "",
    size: "",
    price: "",
    discount: "",
    shelf: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const saveProduct = async () => {
  try {
    await addDoc(collection(db, "products"), product);

    alert("Product Added Successfully");

    setProduct({
      productName: "",
      category: "",
      gender: "",
      age: "",
      brand: "",
      size: "",
      price: "",
      discount: "",
      shelf: "",
      stock: "",
      image: "",
    });

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>

      <input name="productName" placeholder="Product Name" onChange={handleChange} /><br /><br />
      <input name="category" placeholder="Category" onChange={handleChange} /><br /><br />
      <input name="gender" placeholder="Gender" onChange={handleChange} /><br /><br />
      <input name="age" placeholder="Age" onChange={handleChange} /><br /><br />
      <input name="brand" placeholder="Brand" onChange={handleChange} /><br /><br />
      <input name="size" placeholder="Size" onChange={handleChange} /><br /><br />
      <input name="price" placeholder="Price" onChange={handleChange} /><br /><br />
      <input name="discount" placeholder="Discount" onChange={handleChange} /><br /><br />
      <input name="shelf" placeholder="Shelf Number" onChange={handleChange} /><br /><br />
      <input name="stock" placeholder="Stock" onChange={handleChange} /><br /><br />
      <input name="image" placeholder="Image URL" onChange={handleChange} /><br /><br />

      <button onClick={saveProduct}>
  Add Product
</button>
    </div>
  );
}

export default AddProduct;