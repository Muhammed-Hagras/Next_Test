import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";
import { userAPI } from "../Api/userApi";

export default function Users() {
  const { getAllUsers, deleteUser } = userAPI;

  let [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserHandler = async (id) => {
    try {
      await deleteUser(id);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container p-5 mb-5">
      <NavLink to="/login">
        <button className="btn btn-primary mb-5">Add New User</button>
      </NavLink>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-warning mx-2">Edit user</button>
                    <button className="btn btn-success mx-2">View user</button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUserHandler(user.id)}
                    >
                      Delete user
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
