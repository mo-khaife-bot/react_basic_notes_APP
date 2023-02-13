import React, { useState, useEffect } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [usersList, setUsersList] = useState(
    () => JSON.parse(localStorage.getItem("usersList")) || []
  );

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: nanoid() }];
    });
  };

  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify(usersList));
  });

  const deleteUserHandler = (event, uId) => {
    event.stopPropagation();

    setUsersList((prevUsers) => prevUsers.filter((user) => user.id !== uId));
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      {usersList.length >= 1 && (
        <UsersList users={usersList} onDelete={deleteUserHandler} />
      )}
    </div>
  );
}

export default App;
