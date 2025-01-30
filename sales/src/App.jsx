import React, { useState } from 'react';
import ItemList from './components/ItemList';
import SalesHistory from './components/SalesHistory';
import SalesChart from './components/SalesChart';
import Navigation from './components/Navigation';

const initialItems = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'Desk', category: 'Furniture', price: 299.99 },
  { id: 3, name: 'Smartphone', category: 'Electronics', price: 599.99 },
  { id: 4, name: 'Bookshelf', category: 'Furniture', price: 199.99 },
  { id: 5, name: 'Headphones', category: 'Electronics', price: 199.99 },
  { id: 6, name: 'Gaming Chair', category: 'Furniture', price: 149.99 },
  { id: 7, name: 'Smartwatch', category: 'Electronics', price: 249.99 },
  { id: 8, name: 'Coffee Table', category: 'Furniture', price: 89.99 },
  { id: 9, name: 'T-shirt', category: 'Clothing', price: 19.99 },
  { id: 10, name: 'Jeans', category: 'Clothing', price: 39.99 },
  { id: 11, name: 'Sneakers', category: 'Footwear', price: 59.99 },
  { id: 12, name: 'Backpack', category: 'Accessories', price: 49.99 },
  { id: 13, name: 'Bluetooth Speaker', category: 'Electronics', price: 79.99 },
  { id: 14, name: 'Dining Table', category: 'Furniture', price: 499.99 },
  { id: 15, name: 'Smart TV', category: 'Electronics', price: 799.99 },
  { id: 16, name: 'Wristwatch', category: 'Accessories', price: 199.99 },
  { id: 17, name: 'Office Chair', category: 'Furniture', price: 129.99 },
  { id: 18, name: 'Tablet', category: 'Electronics', price: 399.99 },
  { id: 19, name: 'Sofa', category: 'Furniture', price: 899.99 },
  { id: 20, name: 'Winter Jacket', category: 'Clothing', price: 89.99 },
];

const App = () => {
  const [items, setItems] = useState(initialItems);
  const [salesHistory, setSalesHistory] = useState([]);
  const [activeSection, setActiveSection] = useState('items');
  const [notification, setNotification] = useState(null);

  const handleBuyNow = (item) => {
    const sale = {
      ...item,
      timestamp: new Date().toLocaleString(),
      saleId: Math.random().toString(36).substr(2, 9)
    };
    setSalesHistory([...salesHistory, sale]);
    setNotification(`${item.name} added to sales!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const sortSalesHistory = (key, direction) => {
    const sortedHistory = [...salesHistory].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setSalesHistory(sortedHistory);
  };

  const deleteSaleRecord = (saleId) => {
    setSalesHistory(salesHistory.filter(sale => sale.saleId !== saleId));
  };

  return (
    <div className="app">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {notification && (
        <div className="notification" style={{ marginTop: '60px' }}> 
          {notification}
        </div>
      )}
      {activeSection === 'items' && <ItemList items={items} handleBuyNow={handleBuyNow} />}
      {activeSection === 'sales' && <SalesHistory salesHistory={salesHistory} sortSalesHistory={sortSalesHistory} deleteSaleRecord={deleteSaleRecord} />}
      {activeSection === 'charts' && <SalesChart salesHistory={salesHistory} />}
    </div>
  );
};

export default App;