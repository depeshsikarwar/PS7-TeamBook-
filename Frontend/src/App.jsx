import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Filters from "./filter.jsx";
import EmployeeList from './employee';
import EmployeeDetail from './EmployeeDetail';

function App() {
  const [employee, setemployee] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    async function APIcall() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setemployee(data.users);
    }
    APIcall();
  }, []);

  const result = employee.filter((product) => {
    return (
      category === 'all' || product.company?.department?.toLowerCase() === category.toLowerCase()
    );
  });

  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Employee Hub</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-hero">
              <h1>Employee Portal</h1>
              <Link to="/employee">
                <button className="view-detail-btn">View Detail</button>
              </Link>
            </div>
          }
        />

        <Route
          path="/employee"
          element={
            <div>
              <Filters
                category={category}
                setCategory={setCategory}
              />
              <EmployeeList products={result} />
            </div>
          }
        />

        <Route path="/employees/:id" element={<EmployeeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;