// import React, { useState } from 'react';
// import './Products.css'; // Ensure this file is created and includes the styles below

// const products = [
//   { id: 1, name: 'Diamond DoubleHeart Chain', price: '$1100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpA2CUyvsREsyTanVBtboaFIG6tIS8ChM18w&s' },
//   { id: 2, name: 'Diamond Engagement Ring', price: '$990', image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/XE/DO/CT/70241119/designer-gold-diamond-ring.JPG' },
//   { id: 3, name: 'Infinity Bracelet', price: '$200', image: 'https://assets.ajio.com/medias/sys_master/root/20230714/92ek/64b1692ceebac147fc6d8715/-473Wx593H-6006575680-multi-MODEL.jpg' },
//   { id: 4, name: 'Golden Beads Anklet', price: '$100', image: 'https://everstylish.com/pub/media/catalog/product/cache/689aad3dff30df62a7b33021fe130799/j/e/jew1103985-5.jpg' },
//   { id: 5, name: 'Mens Rolex watch', price: '$150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktCYvY30WUbFNsdtywR-bqdBE3-XOavhFDw&s' },
//   { id: 6, name: 'Refrigerator', price: '$60', image: 'https://media.croma.com/image/upload/v1710847182/Croma%20Assets/Large%20Appliances/Refrigerator/Images/271369_20_a1rlhx.png' },
//   { id: 7, name: 'Product 7', price: '$70', image: 'path/to/image7.jpg' },
//   { id: 8, name: 'Product 8', price: '$80', image: 'path/to/image8.jpg' },
//   { id: 9, name: 'Product 9', price: '$90', image: 'path/to/image9.jpg' },
//   { id: 10, name: 'Product 10', price: '$100', image: 'path/to/image10.jpg' },
//   { id: 11, name: 'Product 11', price: '$110', image: 'path/to/image11.jpg' },
//   { id: 12, name: 'Product 12', price: '$120', image: 'path/to/image12.jpg' },
//   { id: 13, name: 'Product 13', price: '$130', image: 'path/to/image13.jpg' },
//   { id: 14, name: 'Product 14', price: '$140', image: 'path/to/image14.jpg' },
//   { id: 15, name: 'Product 15', price: '$150', image: 'path/to/image15.jpg' }
// ];

// const Products = () => {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (productId) => {
//     const product = products.find((p) => p.id === productId);
//     setCart((prevCart) => [...prevCart, product]);
//     console.log(`Added product ${productId} to cart`, cart);
//     alert(`Added ${product.name} to cart`);
//   };

//   // Calculate the number of items in the cart
//   const cartItemCount = cart.length;

//   return (
//     <div className="products-container">
//       <div className="cart-badge">
//         <span>{cartItemCount}</span>
//       </div>
//       <h1>Purchase products for your rewards</h1>
      
//       <div className="products-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <h3 className="product-name">{product.name}</h3>
//             <p className="product-price">{product.price}</p>
//             <button
//               className="add-to-cart-button"
//               onClick={() => handleAddToCart(product.id)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState } from 'react';
import './Products.css'; // Ensure this file is created and includes the styles below

const products = [
  { id: 1, name: 'Diamond DoubleHeart Chain', price: '$1100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpA2CUyvsREsyTanVBtboaFIG6tIS8ChM18w&s' },
  { id: 2, name: 'Diamond Engagement Ring', price: '$990', image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/XE/DO/CT/70241119/designer-gold-diamond-ring.JPG' },
  { id: 3, name: 'Infinity Bracelet', price: '$200', image: 'https://assets.ajio.com/medias/sys_master/root/20230714/92ek/64b1692ceebac147fc6d8715/-473Wx593H-6006575680-multi-MODEL.jpg' },
  { id: 4, name: 'Golden Beads Anklet', price: '$100', image: 'https://everstylish.com/pub/media/catalog/product/cache/689aad3dff30df62a7b33021fe130799/j/e/jew1103985-5.jpg' },
  { id: 5, name: 'Mens Rolex watch', price: '$150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktCYvY30WUbFNsdtywR-bqdBE3-XOavhFDw&s' },
  { id: 6, name: 'Refrigerator', price: '$60', image: 'https://media.croma.com/image/upload/v1710847182/Croma%20Assets/Large%20Appliances/Refrigerator/Images/271369_20_a1rlhx.png' },
  { id: 7, name: 'Product 7', price: '$70', image: 'path/to/image7.jpg' },
  { id: 8, name: 'Product 8', price: '$80', image: 'path/to/image8.jpg' },
  { id: 9, name: 'Product 9', price: '$90', image: 'path/to/image9.jpg' },
  { id: 10, name: 'Product 10', price: '$100', image: 'path/to/image10.jpg' },
  { id: 11, name: 'Product 11', price: '$110', image: 'path/to/image11.jpg' },
  { id: 12, name: 'Product 12', price: '$120', image: 'path/to/image12.jpg' },
  { id: 13, name: 'Product 13', price: '$130', image: 'path/to/image13.jpg' },
  { id: 14, name: 'Product 14', price: '$140', image: 'path/to/image14.jpg' },
  { id: 15, name: 'Product 15', price: '$150', image: 'path/to/image15.jpg' }
];

const Products = () => {
  const [cart, setCart] = useState([]);
  const [rewards, setRewards] = useState(0); // Initialize rewards state

  const handleAddToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    setCart((prevCart) => [...prevCart, product]);
    setRewards((prevRewards) => prevRewards + 10); // Update rewards when adding to cart
    console.log(`Added product ${productId} to cart`, cart);
    alert(`Added ${product.name} to cart`);
  };

  // Calculate the number of items in the cart
  const cartItemCount = cart.length;

  return (
    <div className="products-container">
      <div className="rewards-badge">
        Rewards: {rewards}
      </div>
      <h1>Purchase products for your rewards</h1>
      
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

