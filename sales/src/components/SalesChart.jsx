import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const SalesChart = ({ salesHistory }) => {
  const categoryData = salesHistory.reduce((acc, sale) => {
    const existing = acc.find(item => item.category === sale.category);
    if (existing) {
      existing.total += sale.price;
      existing.count += 1;
    } else {
      acc.push({ 
        category: sale.category, 
        total: sale.price, 
        count: 1 
      });
    }
    return acc;
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="sales-chart">
      <h2 className="title">Sales Analytics</h2>
      <div className="chart-container">
        <div className="pie-chart-container">
          <h3 className="chart-title">Sales by Category</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={categoryData}
              cx={200}
              cy={150}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="total"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="bar-chart-container">
          <h3 className="chart-title">Sales Volume</h3>
          <BarChart width={400} height={300} data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;