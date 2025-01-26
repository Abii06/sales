import React from 'react';

const SalesHistory = ({ salesHistory, sortSalesHistory, deleteSaleRecord }) => (
  <div className="sales-history">
    <div className="header">
      <h2 className="title">Sales History</h2>
      <div className="sort-select">
        <select 
          onChange={(e) => {
            const [key, direction] = e.target.value.split('|');
            sortSalesHistory(key, direction);
          }}
          className="select"
        >
          <option value="price|ascending">Price Low to High</option>
          <option value="price|descending">Price High to Low</option>
          <option value="timestamp|ascending">Oldest First</option>
          <option value="timestamp|descending">Newest First</option>
        </select>
      </div>
    </div>
    <div className="sales-list">
      {salesHistory.map(sale => (
        <div key={sale.saleId} className="sale-card">
          <div>
            <h3 className="sale-name">{sale.name}</h3>
            <p className="sale-price">${sale.price.toFixed(2)}</p>
            <p className="sale-timestamp">{sale.timestamp}</p>
          </div>
          <button 
            onClick={() => deleteSaleRecord(sale.saleId)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default SalesHistory;