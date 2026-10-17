import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function EmployeeDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEmployeeData() {
      try {
        const userResponse = await fetch(`https://dummyjson.com/users/${id}`);
        const userData = await userResponse.json();
        setUser(userData);
        const todosResponse = await fetch(`https://dummyjson.com/users/${id}/todos`);
        const todosData = await todosResponse.json();
        setTodos(todosData.todos || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getEmployeeData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || user.message) {
    return (
      <div>
        <h2>Employee not found</h2>
        <Link to="/employee">
          <button>Back to Team</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="employee-detail">
      <Link to="/employee">
        <button>Back to Team</button>
      </Link>

      <div className="detail-card">
        <img src={user.image} alt={user.firstName} />
        <h2>{user.firstName} {user.lastName}</h2>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>City:</strong> {user.address?.city}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        <p><strong>Department:</strong> {user.company?.department}</p>
        <p><strong>Job Title:</strong> {user.company?.title}</p>
      </div>

      <div className="tasks-section">
        <h3>Tasks</h3>
        {todos.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          <ul>
            {todos.map((item) => (
              <li key={item.id}>
                {item.todo} - <strong>{item.completed ? "Done" : "Pending"}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default EmployeeDetail;
