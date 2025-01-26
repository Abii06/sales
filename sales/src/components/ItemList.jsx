import React from 'react';

const ItemList = ({ items, handleBuyNow }) => (
  <div className="item-list">
    <h2 className="title">Available Items</h2>
    <div className="grid">
      {items.map(item => (
        <div key={item.id} className="item-card">
          <h3 className="item-name">{item.name}</h3>
          <p className="item-category">{item.category}</p>
          <p className="item-price">${item.price.toFixed(2)}</p>
          <button 
            onClick={() => handleBuyNow(item)}
            className="buy-button"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ItemList;