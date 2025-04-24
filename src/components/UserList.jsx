import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Inline CSS styling
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    marginBottom: '8px',
    fontSize: '18px',
    color: '#333',
  };

  const emailStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id} style={cardStyle}>
          <div style={titleStyle}>{user.name}</div>
          <div style={emailStyle}>{user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
