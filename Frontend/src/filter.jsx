import React from 'react';

function Filters({ category, setCategory }) {
  return (
    <div className="filters">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All Department</option>
        <option value="Engineering">Engineering</option>
        <option value="Services">Services</option>
        <option value="Accounting">Accounting</option>
        <option value="Legal">Legal</option>
        <option value="Support">Support</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
      </select>
    </div>
  );
}

export default Filters;