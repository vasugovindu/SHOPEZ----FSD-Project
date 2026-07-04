import React, { useState } from "react";
import "../styles/AdminUsersPage.css";
import { Link } from "react-router-dom";

const AdminUsersPage = () => {

  const [users, setUsers] = useState([
    { id:1, name:"Rahul", email:"rahul@gmail.com", role:"CUSTOMER" },
    { id:2, name:"Anita", email:"anita@gmail.com", role:"SELLER" },
    { id:3, name:"Admin", email:"admin@gmail.com", role:"ADMIN" }
  ]);

  const deleteUser = (id) => {

    const updated = users.filter(user => user.id !== id);
    setUsers(updated);

  };

  return (
    <div className="admin-users-page">

      <h2>User Management</h2>

      <div className="admin-nav">

  <Link to="/admin/categories">
    <button>Categories</button>
  </Link>

  <Link to="/admin/users">
    <button>Users</button>
  </Link>

</div>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map(user => (

            <tr key={user.id}>

              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>

                <button
                  className="remove-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Remove
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AdminUsersPage;