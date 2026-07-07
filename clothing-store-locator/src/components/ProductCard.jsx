function ProductCard({ product, deleteProduct }) {
  const finalPrice =
    product.price -
    (product.price * product.discount) / 100;


  return (

    <div className="product-card">


<img src={product.image} alt={product.productName}/>

<h2>{product.productName}</h2>

<p>🏷 Brand : {product.brand}</p>

<p>👕 Category : {product.category}</p>

<p>👦 Gender : {product.gender}</p>

<p>🎂 Age : {product.age}</p>

<p>📏 Size : {product.size}</p>

<p>📍 Shelf : {product.shelf}</p>

<p>💰 Price : ₹{product.price}</p>

<p>🔥 Discount : {product.discount}%</p>

<h3>Final Price: ₹{finalPrice}</h3>

{
Number(product.stock)<=5?

<p style={{color:"red"}}>

⚠ Low Stock ({product.stock})

</p>

:

<p style={{color:"green"}}>

Stock : {product.stock}

</p>

}
<button
  onClick={() => deleteProduct(product.id)}
>
  Delete
</button>

</div>
  );
}

export default ProductCard;