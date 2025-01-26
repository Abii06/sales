import React from 'react';

const Navigation = ({ activeSection, setActiveSection }) => (
  <div className="navigation">
    <button 
      onClick={() => setActiveSection('items')}
      className={`nav-button ${activeSection === 'items' ? 'active' : ''}`}
    >
      <span>Home</span>
    </button>
    <button 
      onClick={() => setActiveSection('sales')}
      className={`nav-button ${activeSection === 'sales' ? 'active' : ''}`}
    >
      <span>Sales</span>
    </button>
    <button 
      onClick={() => setActiveSection('charts')}
      className={`nav-button ${activeSection === 'charts' ? 'active' : ''}`}
    >
      <span>Charts</span>
    </button>
  </div>
);

export default Navigation;