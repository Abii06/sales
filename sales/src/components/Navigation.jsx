import React from 'react';

const Navigation = ({ activeSection, setActiveSection }) => (
  <div className="navigation">
    <button onClick={() => setActiveSection('items')} className={activeSection === 'items' ? 'active' : ''}>
      Home
    </button>
    <button onClick={() => setActiveSection('sales')} className={activeSection === 'sales' ? 'active' : ''}>
      Sales
    </button>
    <button onClick={() => setActiveSection('charts')} className={activeSection === 'charts' ? 'active' : ''}>
      Charts
    </button>
  </div>
);

export default Navigation;
