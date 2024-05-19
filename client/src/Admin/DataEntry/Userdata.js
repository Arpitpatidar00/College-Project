import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/users");
        setUsers(response.data.data); // Assuming the user data is nested under 'data' property
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/users/${id}`);
      const updatedUsers = users.filter((user) => user._id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <h1 className="m-3">Users</h1>
      <hr className="bg-black m-3" />
      <div className="headings m-3 p-2">
        <p>
          <strong>Username</strong>
        </p>
        <p>
          <strong>Email</strong>
        </p>
        <p>
          <strong>Phone Number</strong>
        </p>
        <p className="mx-3">
          <strong></strong>
        </p>
      </div>
      <div id="alluserscontainer" className="user-container-wrapper">
        {Array.isArray(users) &&
          users.map((user) => (
            <div className="user-container" key={user.username}>
              <div className="user-info">
                <p className="ml-2">{user.username}</p>
                <p>{user.email}</p>
                <p>{user.phonenumber}</p>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteUser(user._id)} // Pass user ID to handleDeleteUser
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default UserPage;
