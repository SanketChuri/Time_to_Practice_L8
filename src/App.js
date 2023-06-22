import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </React.Fragment>
  );
}

export default App;
