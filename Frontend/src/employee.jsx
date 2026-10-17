import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="no-products">
        <h3>No Products Found</h3>
      </div>
    );
  }

  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((product,index) => {
          return (
            <div className="product-card" key={product.email || index}>
              <div className="product-image">
                <img src={product.image} alt={product.firstName} />
              </div>

              <div className="product-content">
                <span>{product.firstName} {product.lastName}</span>
                <h2>{product.company?.title}</h2>
                <p className="department">{product.company?.department}</p>
                <Link to={`/employees/${product.id || (index + 1)}`}>
                  <button>View Profile</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmployeeList;