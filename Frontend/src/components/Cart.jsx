import React from 'react';
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  margin: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '20rem',
  height: '300px',
  
};
const my={ display:'flex'};
const imageStyle = {
  maxWidth: '10rem',
  height: '300px',
};

const titleStyle = {
  fontSize: '10px',
  fontWeight: 'bold',
  margin: '7px 0',
};

const descriptionStyle = {
  fontSize: '10px',
  margin: '7px 0',
};

const priceStyle = {
  fontSize: '10px',
  color: '#007bff',
  margin: '7px 0',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  fontSize: '10px',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px 0',
};

const Cart = () => {
  const products = [
    {
      imageSrc: img1,
      title: 'Product 1',
      description: 'Description for Product 1',
      price: '$10.99',
    },
    {
      imageSrc: img2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: '$19.99',
    },
    {
      imageSrc: img2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: '$19.99',
    },
    {
      imageSrc: img2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: '$19.99',
    },
    {
      imageSrc: img2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: '$19.99',
    },
    {
      imageSrc: img2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: '$19.99',
    },
    {
      imageSrc: img2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: '$19.99',
    },
    {
      imageSrc: img2,
      title: 'Product 2',
      description: 'Description for Product 2',
      price: '$19.99',
    },
     
     
  ];

  return (
    <div>
      
      <div style={my}>
        {products.map((product, index) => (
          <div key={index} style={cardStyle}>
            <img src={product.imageSrc} alt={product.title} style={imageStyle} />
            <h2 style={titleStyle}>{product.title}</h2>
            <p style={descriptionStyle}>{product.description}</p>
            <p style={priceStyle}>{product.price}</p>
            <button style={buttonStyle}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
